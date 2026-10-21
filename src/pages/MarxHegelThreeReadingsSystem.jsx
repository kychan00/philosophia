import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import {
  Background, Controls, Handle, MarkerType, Position,
  ReactFlow, ReactFlowProvider, useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import '../components/philosophy/system2d/System2DTheme.css'
import { resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme'
import {
  threeReadingsById, threeReadingsComparisons, threeReadingsNodes,
  threeReadingsRoutes, threeReadingsSequentialEdges,
} from '../data/marxHegelThreeReadings'
import './MarxHegelThreeReadingsSystem.css'

const geometry = Object.freeze({ width: 356, height: 258, stride: 322, x: 42 })
const nodeTypes = { reading: ReadingCard }
const nodeGroups = Object.freeze({
  cruce: 'Confrontación',
  marx: 'Manuscritos de 1844',
  bloch: 'Ernst Bloch',
  feuerbach: 'Tesis sobre Feuerbach',
})

function ReadingCard({ data }) {
  const { item, number, current, related, guide } = data
  const emphasis = current ? ' is-current' : guide ? ' is-guide' : related ? ' is-neighbor' : ' is-dimmed'
  return (
    <article className={'mhr-node' + emphasis} data-node-id={item.id} aria-current={current ? 'step' : undefined}>
      <Handle type="target" position={Position.Top} className="mhr-node__handle" />
      <header>
        <small>{String(number).padStart(2, '0')} / {data.total}</small>
        <span>{item.route === 'bloch' ? 'COMENTARIO' : item.route === 'cruce' ? 'COMPARACIÓN' : 'TEXTO DE MARX'}</span>
      </header>
      <div className="mhr-node__body">
        <strong>{item.title}</strong>
        <p>{item.text}</p>
      </div>
      <footer><span>{item.pages}</span><b>ABRIR FOLIO ↗</b></footer>
      <Handle type="source" position={Position.Bottom} className="mhr-node__handle" />
    </article>
  )
}

function FlowBody({ entries, selectedId, onSelect, route, guided }) {
  const { setCenter, viewportInitialized } = useReactFlow()
  const selectedIndex = entries.findIndex(node => node.id === selectedId)

  const nodes = useMemo(() => entries.map((item, i) => ({
    id: item.id, type: 'reading', draggable: false, selectable: true,
    position: { x: geometry.x, y: i * geometry.stride },
    data: {
      item, number: i + 1, total: entries.length,
      current: item.id === selectedId, guide: guided && item.id === selectedId,
      related: Math.abs(i - selectedIndex) <= 1,
    },
  })), [entries, selectedId, selectedIndex, guided])

  const ids = useMemo(() => new Set(entries.map(n => n.id)), [entries])
  const edges = useMemo(() => threeReadingsSequentialEdges
    .filter(e => ids.has(e.source) && ids.has(e.target))
    .map(e => ({
      id: e.id, source: e.source, target: e.target, type: 'smoothstep',
      style: {
        stroke: resolveSystem2DEdgeColor({ guidedActive: guided && (e.source === selectedId || e.target === selectedId), touchesSelected: e.source === selectedId || e.target === selectedId }),
        strokeWidth: e.source === selectedId || e.target === selectedId ? 2.6 : 1.6,
      },
      markerEnd: { type: MarkerType.ArrowClosed, width: 15, height: 15,
        color: resolveSystem2DEdgeColor({ guidedActive: guided && e.source === selectedId }) },
    })), [ids, selectedId, guided])

  useEffect(() => {
    if (!viewportInitialized || selectedIndex < 0) return undefined
    const frame = requestAnimationFrame(() => {
      setCenter(
        geometry.x + geometry.width / 2,
        selectedIndex * geometry.stride + geometry.height / 2,
        { zoom: window.innerWidth < 720 ? 0.78 : 0.98, duration: 440 },
      )
    })
    return () => cancelAnimationFrame(frame)
  }, [route, selectedIndex, viewportInitialized, setCenter])

  return (
    <ReactFlow
      className="mhr-flow"
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodeClick={(_, node) => onSelect(node.id)}
      nodesDraggable={false}
      nodesConnectable={false}
      zoomOnDoubleClick={false}
      selectionOnDrag={false}
      minZoom={0.35}
      maxZoom={1.4}
      proOptions={{ hideAttribution: true }}
      aria-label="Mapa 2D de las lecturas de Marx, Bloch y Feuerbach"
    >
      <Background gap={22} size={1} color="var(--ph2d-line)" />
      <Controls showInteractive={false} position="bottom-left" />
    </ReactFlow>
  )
}

function FolioDiagram({ entries, selectedIndex }) {
  const items = [entries[selectedIndex - 1], entries[selectedIndex], entries[selectedIndex + 1]].filter(Boolean)
  return (
    <div className="mhr-diagram" aria-label="Esquema vertical de la progresión documental">
      <p>ESQUEMA DE LECTURA · RECONSTRUCCIÓN PHILOSOPHIA</p>
      {items.map((item, i) => (
        <div key={item.id} className="mhr-diagram__unit">
          {i > 0 && <div className="mhr-diagram__arrow">↓ <small>siguiente movimiento del argumento</small></div>}
          <div className={'mhr-diagram__cell' + (item.id === entries[selectedIndex]?.id ? ' current' : '')}>
            <span>{item.pages}</span>
            <strong>{item.title}</strong>
          </div>
        </div>
      ))}
      <small>Las flechas señalan el orden de estudio, no una causalidad inferida entre contenidos independientes.</small>
    </div>
  )
}

function Atlas() {
  const [route, setRoute] = useState('marx')
  const [selectedId, setSelectedId] = useState('m07')
  const [guideActive, setGuideActive] = useState(false)
  const [guideScope, setGuideScope] = useState('route')
  const [fullScreen, setFullScreen] = useState(false)
  const [search, setSearch] = useState('')
  const [showAllRelations, setShowAllRelations] = useState(false)
  const guideRoute = useMemo(() => threeReadingsNodes.filter(node => node.route === route), [route])
  const entryIndex = Math.max(0, guideRoute.findIndex(node => node.id === selectedId))
  const selected = threeReadingsById[selectedId] || guideRoute[0]
  const overallIndex = threeReadingsNodes.findIndex(node => node.id === selectedId)
  const guideList = guideScope === 'all' ? threeReadingsNodes : guideRoute
  const guideIndex = guideList.findIndex(node => node.id === selectedId)
  const activeIndex = guideIndex < 0 ? 0 : guideIndex
  const section = threeReadingsRoutes.find(item => item.id === route)
  const relations = threeReadingsComparisons.filter(r => r.from === selectedId || r.to === selectedId)
  const filteredEntries = useMemo(() => guideRoute.filter(node =>
    [node.title, node.text, node.pages, node.detail, node.id].join(' ').toLowerCase().includes(search.toLowerCase().trim())
  ), [guideRoute, search])
  const canvasRef = useRef(null)

  const focusNode = useCallback((id, startGuide = false) => {
    const node = threeReadingsById[id]
    if (!node) return
    setRoute(node.route)
    setSelectedId(id)
    if (startGuide) setGuideActive(true)
  }, [])

  const selectRoute = useCallback((id) => {
    const first = threeReadingsNodes.find(n => n.route === id)
    if (!first) return
    setRoute(id)
    setSelectedId(first.id)
    setSearch('')
  }, [])

  const go = useCallback((delta) => {
    const next = guideList[activeIndex + delta]
    if (next) focusNode(next.id)
  }, [activeIndex, focusNode, guideList])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape' && fullScreen) { e.preventDefault(); setFullScreen(false); return }
      if (!guideActive || ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target?.tagName)) return
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [go, fullScreen, guideActive])

  return (
    <main className="ph2d-shell mhr-page">
      <nav className="mhr-topnav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="mhr-brand">Φ · PHILOSOPHIA</Link>
        <span>ARCHIVUM ONTOLOGICUM · FI190</span>
      </nav>

      <header className="mhr-hero">
        <div className="mhr-hero__index">MMXXVI / X / XIX <span>LECTIO TRIPLEX</span></div>
        <div className="mhr-hero__copy">
          <small>TEXTOS ASIGNADOS POR JOSÉ ALEJANDRO FUERTE · 19 OCTUBRE 2026</small>
          <h1>Marx <i>frente a</i><br /><em>Hegel</em></h1>
          <p>La dialéctica, sus límites idealistas y el nacimiento de la praxis como problema histórico. Lectura completa en un atlas 2D independiente.</p>
          <div className="mhr-hero__tags">
            <span>MARX · 1844</span><span>BLOCH · CAPÍTULO XIX</span><span>MARX · 11 TESIS</span>
          </div>
        </div>
        <div className="mhr-hero__figure" aria-hidden="true">
          <div className="mhr-hero__orb">M <span>↔</span> H</div>
          <small>NEGATIVIDAD<br />OBJETIVIDAD<br />PRAXIS</small>
        </div>
      </header>

      <section className="mhr-provenance" aria-label="Fuentes y frontera editorial">
        <div className="mhr-provenance__legend">
          <span>DOCUMENTUM / REGULA</span>
          <h2>Tres documentos,<br /><em>dos autores y un debate</em></h2>
          <p>La consigna no fija entrega ni pide un ensayo. El profesor encargó lecturas y solicitó confirmar recepción. Esta página es una herramienta de estudio, no una intervención atribuida a la clase.</p>
        </div>
        <div className="mhr-provenance__items">
          <article><span>01 · FUENTE PRIMARIA</span><h3>Karl Marx</h3><strong>Crítica de la dialéctica y filosofía de Hegel</strong><p>Contenido dentro del volumen de Erich Fromm, <i>Marx y su concepto del hombre</i>, FCE. Escrito por Marx, no por Fromm.</p><small>PDF proporcionado · pp. 97–112</small></article>
          <article><span>02 · COMENTARIO HISTÓRICO</span><h3>Ernst Bloch</h3><strong>XIX. Marx y la dialéctica idealista</strong><p>Capítulo de <i>Sujeto-objeto</i>. Es la interpretación filosófica de Bloch; no se presenta como texto primario marxiano.</p><small>PDF proporcionado · pp. 380–387</small></article>
          <article><span>03 · FUENTE PRIMARIA</span><h3>Karl Marx</h3><strong>Once tesis sobre Feuerbach</strong><p>Primera versión incluida como apéndice de la edición Akal de <i>La ideología alemana</i> de Marx y Engels.</p><small>PDF proporcionado · pp. 500–503</small></article>
        </div>
      </section>

      <section className="mhr-guide-entry">
        <div><span>ITINERARIUM</span><h2>Lectura documental<br />sin recortes de tesis</h2><p>Cada folio conserva una tesis, su explicación contextual, una discusión crítica, un esquema y una pregunta de examen. La guía completa visita todos los folios de las cuatro rutas, incluidas las comparaciones editoriales.</p></div>
        <div className="mhr-guide-entry__actions">
          <strong>{threeReadingsNodes.length} <small>FOLIOS DOCUMENTALES</small></strong>
          <button type="button" onClick={() => { setGuideScope('all'); focusNode(threeReadingsNodes[0].id, true) }}>Iniciar guía completa →</button>
          <button type="button" className="secondary" onClick={() => { setGuideScope('route'); focusNode(guideRoute[0].id, true) }}>Recorrer esta fuente →</button>
        </div>
      </section>

      <section className="mhr-routes" aria-label="Elegir itinerario">
        <header><span>01 / RUTAS CANÓNICAS</span><h2>Elija qué texto estudiar</h2></header>
        <div className="mhr-routes__grid">
          {threeReadingsRoutes.map((r, i) => {
            const count = threeReadingsNodes.filter(n => n.route === r.id).length
            return (
              <button key={r.id} type="button" className={'mhr-routes__card' + (r.id === route ? ' is-active' : '')} onClick={() => selectRoute(r.id)} aria-pressed={r.id === route}>
                <span>0{i + 1} / {count} FOLIOS</span>
                <strong>{r.name}</strong>
                <small>{r.description}</small>
                <b>{r.id === route ? 'RUTA ABIERTA' : 'ABRIR RUTA'} ↗</b>
              </button>
            )
          })}
        </div>
      </section>

      <section className="mhr-study" aria-label="Sistema 2D independiente">
        <div className="mhr-study__preface"><span>02 / ATLAS INTERACTIVO</span><h2>{section?.name}</h2><p>{section?.description}</p></div>
        <div className="mhr-guidebar" aria-label="Control de guía de estudio">
          <div>
            <small>{guideActive ? 'GUÍA ACTIVA' : 'EXPLORACIÓN LIBRE'} · {guideScope === 'all' ? 'GUÍA COMPLETA' : 'RUTA ACTUAL'}</small>
            <strong>{guideScope === 'all' ? overallIndex + 1 : entryIndex + 1} / {guideScope === 'all' ? threeReadingsNodes.length : guideRoute.length} — {selected.title}</strong>
          </div>
          <div className="mhr-guidebar__actions">
            <button type="button" onClick={() => setGuideActive(v => !v)} aria-pressed={guideActive}>{guideActive ? 'Pausar guía' : 'Iniciar guía'}</button>
            <button type="button" onClick={() => setGuideScope(s => s === 'all' ? 'route' : 'all')}>Ámbito: {guideScope === 'all' ? 'completo' : 'ruta'} ↕</button>
            <button type="button" onClick={() => go(-1)} disabled={activeIndex === 0}>←</button>
            <button type="button" onClick={() => go(1)} disabled={activeIndex === guideList.length - 1}>→</button>
          </div>
        </div>

        <div className={'mhr-workspace' + (fullScreen ? ' mhr-workspace--fullscreen' : '')} ref={canvasRef}>
          {fullScreen && <button className="mhr-workspace__exit" type="button" onClick={() => setFullScreen(false)}>Cerrar pantalla completa ×</button>}
          <div className="mhr-workspace__map">
            <div className="mhr-workspace__toolbar">
              <span>MAPA 2D · {guideRoute.length} NODOS</span>
              <div><button type="button" onClick={() => setFullScreen(v => !v)}>{fullScreen ? 'Cerrar pantalla completa' : 'Pantalla completa ⛶'}</button></div>
            </div>
            <ReactFlowProvider>
              <FlowBody
                key={route}
                route={route}
                entries={guideRoute}
                selectedId={selectedId}
                onSelect={focusNode}
                guided={guideActive}
              />
            </ReactFlowProvider>
          </div>

          <aside className="mhr-inspector" aria-live="polite">
            <div className="mhr-inspector__head">
              <span>FOLIO {String(entryIndex + 1).padStart(2,'0')} / {guideRoute.length}</span>
              <span>{selected.layer}</span>
            </div>
            <h3>{selected.title}</h3>
            <p className="mhr-inspector__thesis">{selected.text}</p>
            <div className="mhr-inspector__section"><h4>I. Desarrollo explícito</h4><p>{selected.detail}</p></div>
            <div className="mhr-inspector__section"><h4>II. Lectura crítica y límites</h4><p>{selected.discussion}</p></div>
            <FolioDiagram entries={guideRoute} selectedIndex={entryIndex} />
            <div className="mhr-inspector__question"><span>QUAESTIO</span><p>{selected.question}</p></div>
            <div className="mhr-inspector__source"><span>III. PROCEDENCIA DOCUMENTAL</span><strong>{selected.pages}</strong><small>{nodeGroups[selected.route]} · {selected.layer}. La indicación es el número de página del PDF recibido.</small></div>
            <div className="mhr-inspector__related">
              <strong>Relaciones entre lecturas</strong>
              {relations.length === 0 && <p>Este folio no tiene una relación transversal anotada. Se conserva la secuencia interna de su texto sin fabricar conexiones.</p>}
              {relations.map(rel => {
                const targetId = rel.from === selectedId ? rel.to : rel.from
                const target = threeReadingsById[targetId]
                return <button type="button" key={rel.from + rel.to} onClick={() => focusNode(targetId)}>
                  <span>{rel.label}</span><strong>{target.title} ↗</strong><small>{rel.why}</small>
                </button>
              })}
            </div>
            <div className="mhr-inspector__navigation"><button type="button" onClick={() => go(-1)} disabled={activeIndex === 0}>← Folio anterior</button><button type="button" onClick={() => go(1)} disabled={activeIndex === guideList.length - 1}>Folio siguiente →</button></div>
          </aside>
        </div>

        <div className="mhr-index">
          <div className="mhr-index__header"><span>03 / TABULA FOLIORUM</span><h2>Índice íntegro de la ruta</h2><p>Los títulos abren exactamente el folio seleccionado y no modifican el mapa por separado.</p></div>
          <label htmlFor="mhr-find">Buscar término, argumento o página dentro de esta lectura</label>
          <input id="mhr-find" value={search} onChange={e => setSearch(e.target.value)} placeholder="Ej. autoconciencia, praxis, PDF 382…" />
          <div className="mhr-index__list">
            {filteredEntries.map(n => (
              <button type="button" key={n.id} className={selectedId === n.id ? 'is-active' : ''} onClick={() => focusNode(n.id)}>
                <span>{String(guideRoute.indexOf(n) + 1).padStart(2,'0')}</span><strong>{n.title}</strong><small>{n.pages}</small>
              </button>
            ))}
            {filteredEntries.length === 0 && <p>No hay folios de esta ruta que coincidan con la búsqueda.</p>}
          </div>
        </div>
      </section>

      <section className="mhr-relations">
        <header><span>04 / RELACIONES II</span><h2>Confrontaciones entre fuentes</h2><p>Seis conexiones justificadas. Son propuestas de lectura, no citas ni flechas de causalidad atribuidas al profesor.</p></header>
        <div className="mhr-relations__grid">
          {(showAllRelations ? threeReadingsComparisons : threeReadingsComparisons.slice(0,3)).map((rel, i) => (
            <article key={rel.from + rel.to}>
              <span>R{String(i + 1).padStart(2,'0')} · {rel.label}</span>
              <div className="mhr-relations__pair">
                <button type="button" onClick={() => focusNode(rel.from)}>{threeReadingsById[rel.from].title}</button>
                <b>↔</b>
                <button type="button" onClick={() => focusNode(rel.to)}>{threeReadingsById[rel.to].title}</button>
              </div>
              <p>{rel.why}</p>
            </article>
          ))}
        </div>
        <button type="button" className="mhr-relations__more" onClick={() => setShowAllRelations(v => !v)}>{showAllRelations ? 'Mostrar las primeras relaciones ↑' : 'Ver todas las relaciones →'}</button>
      </section>

      <section className="mhr-continuity">
        <div><span>CONTINUITAS</span><h2>Esta tarea en el archivo de Ontología II</h2><p>El atlas es una página independiente; se preserva el dossier Marx–Hegel previo, el sistema Hegel/Croce y la clase del 19 de octubre. Las tres obras no se confunden con un supuesto texto único.</p></div>
        <div>
          <Link to="/estudios/ontologia-ii/marx-critica-dialectica-hegeliana">Dossier previo de Marx y Hegel ↗</Link>
          <Link to="/semestre/5/ontologia-ii/clase/19-octubre">Clase del 19 de octubre ↗</Link>
          <Link to="/tareas/ontologia-ii/hegel-croce-dialectica">Lectura de Hegel y Croce · 2D ↗</Link>
          <Link to="/semestre/5/ontologia-ii">Mapa de la materia ↗</Link>
        </div>
      </section>
      <footer className="mhr-footer"><Link to="/semestre/5/ontologia-ii">← Ontología II</Link><span>Φ · PHILOSOPHIA</span><small>DOCUMENTOS PRIMARIOS · COMENTARIO · RECONSTRUCCIÓN</small></footer>
    </main>
  )
}

export default function MarxHegelThreeReadingsSystem() {
  return <Atlas />
}
