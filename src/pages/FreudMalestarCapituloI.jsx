import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { Background, Controls, Handle, MarkerType, Position, ReactFlow, ReactFlowProvider, useReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import SectionPedagogy from '../components/philosophy/system2d/SectionPedagogy.jsx'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema.jsx'
import { resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme.js'
import { freudIConcepts, freudISections, freudIRoutes, freudILinks, freudIOrder, freudINodeById } from '../data/freudMalestarCapituloI.js'
import { freudMalestarWork, freudMalestarChapters, freudMalestarActiveChapter } from '../data/freudMalestarBook.js'
import './FreudMalestarCapituloI.css'

const SECTION_TONE = { planteamiento: 'rust', constitucion: 'blue', memoria: 'plum', religion: 'sage' }
const WINDOW_SIZE = { width: 350, height: 470 }
const GRID_STEP = { x: 500, y: 540 }
const DEFAULT_ROUTE = 'planteamiento'
const MOBILE_QUERY = '(max-width: 850px)'
const bySection = (id) => freudIConcepts.filter((item) => id === 'all' || item.section === id)
function FreudConceptNode({ data, selected }) {
  return (
    <article className={['freud-flow-node', selected ? 'is-selected' : '', data.dimmed && !selected ? 'is-dimmed' : '', data.neighbor ? 'is-neighbor' : '', data.guided ? 'is-guided' : ''].filter(Boolean).join(' ')}
      style={{ '--freud-accent': 'var(--ph2d-topic-' + (SECTION_TONE[data.section] || 'gold') + ')' }}>
      <Handle type="target" position={Position.Left} />
      <div className="freud-flow-node-meta"><span>{data.kind} · {data.page}</span><b>{data.code}</b></div>
      <h3>{data.title}</h3>
      <p>{data.summary}</p>
      <div className="freud-node-source"><b>TEXTO ORIGINAL · CITA LITERAL COTEJADA</b><span>{data.originalQuote}</span><small>(Freud, s. f., {data.page}; paginación impresa)</small></div><div className="freud-node-analysis"><b>EXPLICACIÓN ACADÉMICA</b><span>{data.explanation}</span></div><div className="freud-flow-node-callout"><b>EN PALABRAS SIMPLES</b><span>{data.simple}</span></div>
      <div className="freud-flow-node-foot"><small>Obra · Capítulo I</small><button type="button" className="freud-open-folio nodrag nopan" onClick={(event) => { event.stopPropagation(); data.onOpenFolio(data.id) }} aria-label={`Abrir folio ${data.code}: ${data.title}`}>Abrir folio ↗</button></div>
      <Handle type="source" position={Position.Right} />
    </article>
  )
}
const nodeTypes = { freud: FreudConceptNode }

function buildSchema(item) {
  if (!item) return null
  const steps = item.steps || []
  const nodes = steps.map((label, i) => ({
    id: item.id + '-' + i, label, role: i === steps.length - 1 ? 'result' : 'concept',
  }))
  return {
    id: 'schema-' + item.id,
    title: 'Esquema documentado · ' + item.title,
    layout: 'flow', direction: 'vertical', flowGap: 76,
    nodes,
    edges: nodes.slice(1).map((node, i) => ({
      id: 's-' + item.id + '-' + i, from: nodes[i].id, to: node.id, kind: 'derives',
    })),
  }
}

function FreudWorkspace() {
  const [route, setRoute] = useState(DEFAULT_ROUTE)
  const [compactViewport, setCompactViewport] = useState(() => typeof window !== 'undefined' && window.matchMedia?.(MOBILE_QUERY).matches)
  const [selectedId, setSelectedId] = useState('F01')
  const [guided, setGuided] = useState(false)
  const [guideIndex, setGuideIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [showFolio, setShowFolio] = useState(false)
  const [folioOpen, setFolioOpen] = useState(false)
  const folioCloseRef = useRef(null)
  const folioTriggerRef = useRef(null)
  const workspaceRef = useRef(null)
  const { setCenter, fitView } = useReactFlow()
  const routeItems = useMemo(() => bySection(route), [route])
  const routeIds = useMemo(() => new Set(routeItems.map((item) => item.id)), [routeItems])
  const selected = freudINodeById(selectedId)
  const openFolio = useCallback((id) => { folioTriggerRef.current = document.activeElement; setSelectedId(id); setFolioOpen(true) }, [])
  const closeFolio = useCallback(() => { setFolioOpen(false); requestAnimationFrame(() => folioTriggerRef.current?.focus?.()) }, [])
  useEffect(() => { if (folioOpen) folioCloseRef.current?.focus() }, [folioOpen])
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined
    const media = window.matchMedia(MOBILE_QUERY)
    const sync = () => setCompactViewport(media.matches)
    sync()
    media.addEventListener?.('change', sync)
    return () => media.removeEventListener?.('change', sync)
  }, [])
  const relevant = useMemo(() => new Set([selectedId, ...freudILinks.filter((line) => line.source === selectedId || line.target === selectedId).flatMap((line) => [line.source, line.target])]), [selectedId])
  const index = Math.max(0, routeItems.findIndex((item) => item.id === selectedId))
  const section = freudISections.find((item) => item.id === route)
  const nodes = useMemo(() => freudIConcepts.map((item) => {
    const visible = routeIds.has(item.id)
    const positionInRoute = routeItems.findIndex((entry) => entry.id === item.id)
    const order = route === 'all' ? item.order - 1 : positionInRoute
    // Constant-height rows protect the layout from content growth and prevent collisions.
    const col = order % 4
    const row = Math.floor(order / 4)
    return {
      id: item.id, type: 'freud', selected: item.id === selectedId, draggable: false,
      hidden: !visible,
      position: { x: 65 + col * GRID_STEP.x, y: 55 + row * GRID_STEP.y },
      data: {
        ...item, branch: item.section, code: item.id, onOpenFolio: openFolio,
        sourceRef: 'Freud, cap. I · PDF ' + item.page,
        produces: freudILinks.filter((edge) => edge.source === item.id).map((edge) => edge.target),
        dimmed: Boolean(selectedId) && !relevant.has(item.id),
        neighbor: item.id !== selectedId && relevant.has(item.id),
        guided: guided && item.id === selectedId,
      },
    }
  }), [route, routeIds, routeItems, selectedId, relevant, guided, openFolio])
  const flowNodes = useMemo(() => nodes.filter((node) => !node.hidden), [nodes])
  const edges = useMemo(() => freudILinks.filter((edge) => routeIds.has(edge.source) && routeIds.has(edge.target)).map((edge) => ({
    ...edge,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: resolveSystem2DEdgeColor({ touchesSelected: edge.source === selectedId || edge.target === selectedId, guidedActive: guided && (edge.source === selectedId || edge.target === selectedId) }), strokeWidth: edge.source === selectedId || edge.target === selectedId ? 2.8 : 1.5 },
    labelStyle: { fontSize: 11 }, labelBgPadding: [5, 4],
  })), [routeIds, selectedId, guided])
  const schema = useMemo(() => buildSchema(selected), [selected])

  const focus = useCallback((id) => {
    const item = freudINodeById(id)
    if (!item) return
    if (route !== 'all' && item.section !== route) setRoute(item.section)
    setSelectedId(id)
    const sequence = route === 'all' ? freudIConcepts : bySection(item.section)
    const indexInActive = sequence.findIndex((entry) => entry.id === id)
    if (guided) setGuideIndex(Math.max(0, indexInActive))
    const actual = route === 'all' ? item.order - 1 : bySection(item.section).findIndex((entry) => entry.id === id)
    setCenter(65 + (actual % 4) * GRID_STEP.x + WINDOW_SIZE.width / 2, 55 + Math.floor(actual / 4) * GRID_STEP.y + WINDOW_SIZE.height / 2, { zoom: 1, duration: 450 })
  }, [route, guided, setCenter])

  const changeRoute = useCallback((next) => {
    setGuided(false)
    setGuideIndex(0)
    setRoute(next)
    const first = bySection(next)[0]
    if (first) setSelectedId(first.id)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (compactViewport && route === 'all') {
        const first = routeItems[0]
        if (first) {
          setCenter(65 + WINDOW_SIZE.width / 2, 55 + WINDOW_SIZE.height / 2, { zoom: 0.72, duration: 250 })
        }
        return
      }
      fitView({ padding: 0.17, duration: 300, maxZoom: 0.8 })
    }, 80)
    return () => clearTimeout(timer)
  }, [route, routeItems, compactViewport, fitView, setCenter])

  const move = (delta) => {
    const nextIndex = Math.max(0, Math.min(routeItems.length - 1, index + delta))
    if (guided) setGuideIndex(nextIndex)
    focus(routeItems[nextIndex].id)
  }
  const startGuide = () => {
    setGuided(true)
    setGuideIndex(0)
    focus(routeItems[0].id)
  }
  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
      else if (workspaceRef.current?.requestFullscreen) await workspaceRef.current.requestFullscreen()
    } catch { /* Fullscreen is optional on platforms without support. */ }
  }
  useEffect(() => {
    const update = () => setFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', update)
    return () => document.removeEventListener('fullscreenchange', update)
  }, [])

  return (
    <main className="freud-system">
      <nav className="freud-nav"><Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link><Link to="/">Φ PHILOSOPHIA</Link><span>FI265 · Sistema 2D</span></nav>
      <header className="freud-hero">
        <div className="freud-hero-mark" aria-hidden="true">I</div>
        <div>
          <p className="freud-kicker">SIGMUND FREUD · OBRA EN LECTURA POR CAPÍTULOS</p>
          <h1>El malestar <em>en la cultura</em></h1>
          <p className="freud-intro"><strong>Capítulo activo: I · El yo y el sentimiento oceánico.</strong> Este sistema 2D está organizado para crecer con la obra. Hoy está sistematizado el capítulo I; los siguientes capítulos se incorporarán en el mismo lector cuando sean trabajados y cotejados.</p>
          <div className="freud-tags"><span>1 capítulo sistematizado</span><span>{freudIConcepts.length} nodos del capítulo activo</span><span>{freudISections.length} rutas internas</span><span>{freudIConcepts.length} preguntas de estudio</span></div>
        </div>
        <aside><strong>Pregunta del capítulo activo</strong><p>¿Sentirse parte de un todo ilimitado explica por qué existe la religión?</p><Link to="/semestre/5/teoria-critica/clase/22-octubre">Ver conexión con la clase del 22 de octubre</Link></aside>
      </header>
      <section className="freud-chapter-shelf" aria-label="Capítulos de El malestar en la cultura">
        <div className="freud-chapter-shelf-head"><span>LECTOR DE LA OBRA</span><h2>Capítulos de <em>{freudMalestarWork.title}</em></h2><p>La navegación está preparada para crecer por capítulos sin rehacer el sistema 2D.</p></div>
        <div className="freud-chapter-cards">
          {freudMalestarChapters.map((chapter) => chapter.status === 'available' ? (
            <article key={chapter.id} className="freud-chapter-card is-active" aria-current="page">
              <span>CAPÍTULO {chapter.id}</span>
              <strong>{chapter.title}</strong>
              <small>{chapter.statusLabel} · {chapter.pages} · {chapter.nodeCount} nodos</small>
              <b>Capítulo activo</b>
            </article>
          ) : (
            <article key={chapter.id} className="freud-chapter-card is-future">
              <span>CONTINUIDAD DE LA OBRA</span>
              <strong>{chapter.title}</strong>
              <small>{chapter.statusLabel}</small>
              <b>La estructura ya está preparada</b>
            </article>
          ))}
        </div>
      </section>
      <section className="freud-boundary"><b>FRONTERA DE FUENTE · CAPÍTULO {freudMalestarActiveChapter.id}</b><p>Los nodos se construyen exclusivamente a partir de las páginas impresas 2–13 de la traducción de Luis López Ballesteros, Biblioteca Libre OMEGALFA, deteniéndose antes del encabezado «II». <strong>«Texto original» significa cita literal cotejada contra las capturas recibidas.</strong> La explicación académica, «En palabras simples», las preguntas y las relaciones son elaboración editorial y aparecen separadas. El número del pie de página del libro es el localizador canónico; no se confunde con «N de 90» del visor.</p></section>
      <section className="freud-overview" aria-label="Hilo argumental del capítulo activo">
        <strong>HILO DEL CAPÍTULO ACTIVO · {freudMalestarActiveChapter.id}</strong>
        <div className="freud-overview-track">
          {freudISections.map((item, i) => <button type="button" key={item.id} onClick={() => changeRoute(item.id)}><b>{String(i + 1).padStart(2, '0')}</b><span>{item.label.replace(/^.+? · /, '')}</span><small>{item.question}</small></button>)}
        </div>
      </section>
      <section className="freud-routes">
        <div className="freud-section-heading"><span>01 / ATLAS DEL CAPÍTULO ACTIVO</span><h2>Recorridos internos · Capítulo {freudMalestarActiveChapter.id}</h2></div>
        <div className="freud-route-buttons" role="group" aria-label="Filtrar nodos por sección">
          {freudIRoutes.map((item) => <button type="button" key={item.id} className={route === item.id ? 'active' : ''} aria-pressed={route === item.id} onClick={() => changeRoute(item.id)}>{item.label}</button>)}
        </div>
        <p>{section ? section.question : 'Mapa completo: de la vivencia de unidad a la explicación genética y a la necesidad religiosa.'}</p>
        <p className="freud-performance-note">La obra se estudia por capítulos. Dentro del capítulo activo, el sistema abre por una ruta temática para evitar cargar todos sus folios simultáneamente; la vista completa del capítulo sigue disponible como opción.</p>
        {section && <p><b>Antes:</b> {section.before} <b>Después:</b> {section.after}</p>}
      </section>
      <SectionPedagogy nodes={nodes} routes={freudIRoutes} nodeOrder={freudIOrder} activeRoute={route}
        selectedId={selectedId} onSectionChange={changeRoute} onFocusNode={focus} />
      <section className="freud-studio">
        <div className="freud-studio-header"><div><span>02 / LABORATORIO 2D · CAPÍTULO ACTIVO</span><h2>Mapa conceptual navegable · Capítulo {freudMalestarActiveChapter.id}</h2></div><div className="freud-studio-actions"><button type="button" onClick={startGuide}>Iniciar guía {route === 'all' ? 'del capítulo activo' : 'de esta ruta'}</button><button type="button" onClick={() => setGuided(false)} disabled={!guided}>Salir de guía</button><button type="button" onClick={toggleFullscreen}>{fullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}</button></div></div>
        {guided && <p className="freud-guide-status" aria-live="polite"><b>LECTURA GUIADA</b> · Paso {guideIndex + 1} de {routeItems.length} · {selected?.title}</p>}
        <div className="freud-workspace" ref={workspaceRef}>
          <div className="freud-canvas"><ReactFlow nodes={flowNodes} edges={edges} nodeTypes={nodeTypes}
            fitView={!(compactViewport && route === 'all')} fitViewOptions={{ padding: 0.15, maxZoom: .8 }}
            onlyRenderVisibleElements
            nodesDraggable={false} nodesConnectable={false} elementsSelectable
            onNodeClick={(_, node) => focus(node.id)}
            minZoom={0.15} maxZoom={1.6} colorMode="light" proOptions={{ hideAttribution: false }}>
            <Background gap={22} size={1} color="rgba(77,60,42,.14)" /><Controls showInteractive={false} /></ReactFlow></div>
          <aside className="freud-inspector">
            <div className="freud-inspector-head"><span>FOLIO {selected?.id} / {freudIConcepts.length}</span><span>{selected?.page}</span></div>
            <div className="freud-inspector-scroll">
              <span className="freud-inspector-type">{selected?.kind} · {freudISections.find((item) => item.id === selected?.section)?.label}</span>
              <h3>{selected?.title}</h3>
              <p className="freud-inspector-summary">{selected?.summary}</p>
              <section className="freud-original"><b>TEXTO ORIGINAL · CITA LITERAL COTEJADA</b><blockquote>{selected?.originalQuote}</blockquote><small>(Freud, s. f., {selected?.page}; paginación impresa)</small></section><section><b>EXPLICACIÓN ACADÉMICA · PHILOSOPHIA</b><p>{selected?.explanation}</p><small>{selected?.layer}</small></section>
              <section className="freud-simple"><b>EN PALABRAS SIMPLES</b><p>{selected?.simple}</p></section>
              {schema && <section className="freud-schema"><b>ESQUEMA DE ESTE NODO</b><AnimatedConceptSchema schema={schema} /></section>}
              <section><b>PREGUNTA PARA ESTUDIAR</b><p>{selected?.question}</p><button type="button" onClick={() => setShowFolio((prev) => !prev)}>{showFolio ? 'Ocultar explicación' : 'Comprobar respuesta'}</button>{showFolio && <p className="freud-answer">{selected?.answer}</p>}</section>
              <section><b>RELACIONES EXPLÍCITAS DEL ARGUMENTO</b><div className="freud-related">{freudILinks.filter((link) => link.source === selectedId || link.target === selectedId).map((link) => {
                const other = freudINodeById(link.source === selectedId ? link.target : link.source)
                return <button type="button" key={link.id} onClick={() => { setShowFolio(false); focus(other.id) }}>{other.id} · {other.title}</button>
              })}</div></section>
            </div>
            <footer><button type="button" disabled={index <= 0} onClick={() => { setShowFolio(false); move(-1) }}>← Anterior</button><span>{index + 1} / {routeItems.length}</span><button type="button" disabled={index >= routeItems.length - 1} onClick={() => { setShowFolio(false); move(1) }}>Siguiente →</button></footer>
          </aside>
          {folioOpen && selected && <div className="freud-folio-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeFolio() }} onKeyDown={(event) => { if (event.key === 'Escape') { event.stopPropagation(); closeFolio() } if (event.key === 'Tab') { const focusables = [...event.currentTarget.querySelectorAll('button:not([disabled]),a[href]')]; if (!focusables.length) return; const first = focusables[0], last = focusables[focusables.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() } } }} role="presentation"><article className="freud-folio-modal" role="dialog" aria-modal="true" aria-labelledby="freud-folio-title"><header><span>FOLIO {selected.id} · {selected.page}</span><button ref={folioCloseRef} type="button" onClick={closeFolio} aria-label="Cerrar folio">Cerrar ×</button></header><div className="freud-folio-body"><p className="freud-folio-kicker">{selected.kind} · CAPÍTULO {freudMalestarActiveChapter.id}</p><h2 id="freud-folio-title">{selected.title}</h2><h3>Texto original · cita literal cotejada</h3><blockquote className="freud-folio-quote">{selected.originalQuote}</blockquote><p className="freud-folio-citation">(Freud, s. f., {selected.page}; paginación impresa de la edición consultada).</p><h3>Explicación académica · PHILOSOPHIA</h3><p>{selected.explanation}</p><h3>En palabras simples</h3><p>{selected.simple}</p><h3>Secuencia del argumento</h3><ol>{selected.steps?.map((step, i) => <li key={i}>{step}</li>)}</ol><h3>Pregunta para estudiar</h3><p>{selected.question}</p><p><b>Respuesta:</b> {selected.answer}</p><h3>Referencia bibliográfica · APA 7</h3><p>Freud, S. (s. f.). <i>El malestar en la cultura</i> (L. López Ballesteros, trad.). Biblioteca Libre OMEGALFA. Maquetación digital de Amanuense, febrero de 2010.</p><small>La portada identifica la obra como 1929 [1930], pero no se atribuye ese año a esta edición digital. Los localizadores usados aquí corresponden a la paginación impresa visible en el documento.</small></div></article></div>}
        </div>
      </section>
      <section className="freud-synthesis"><div><span>03 / SÍNTESIS FINAL · CAPÍTULO I</span><h2>Lo que demuestra el recorrido completo.</h2><p>Freud recibe el testimonio del sentimiento oceánico, separa su ocurrencia de su interpretación y ensaya una explicación genética a partir de la formación del yo. El recorrido por el yo placiente, el principio de realidad y la conservación de lo pretérito permite admitir una posible supervivencia de una fase yoica temprana. Pero Freud limita sus propias analogías, rechaza identificar esa supervivencia con una conservación absoluta y, al volver a la religión, subordina el sentimiento oceánico al desamparo infantil y a la necesidad de amparo paterno. El capítulo cierra admitiendo posibles relaciones con yoga, trance y éxtasis, sin tratarlas como prueba suficiente de una verdad mística.</p></div><div><h3>Para discutir en Teoría Crítica</h3><p>¿Qué cambia cuando el yo deja de comprenderse como una sustancia autocontenida y pasa a pensarse como algo formado mediante relaciones, separaciones y necesidades de protección?</p><small>Pregunta de articulación editorial con el curso; no es una tesis literal de Freud ni una pregunta registrada de la profesora.</small></div></section>
      <footer className="freud-footer"><Link to="/semestre/5/teoria-critica">← Volver a Teoría Crítica</Link><span>PHILOSOPHIA · Freud · {freudMalestarWork.title} · Capítulo activo {freudMalestarActiveChapter.id}</span></footer>
    </main>
  )
}
export default function FreudMalestarCapituloI() {
  return <ReactFlowProvider><FreudWorkspace /></ReactFlowProvider>
}
