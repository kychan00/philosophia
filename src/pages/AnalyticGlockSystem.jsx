import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import {
  Background, Controls, Handle, MarkerType, MiniMap,
  Position, ReactFlow, ReactFlowProvider, useNodesState, useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

import SectionPedagogy from '../components/philosophy/system2d/SectionPedagogy.jsx'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema.jsx'
import { SYSTEM_2D_THEME } from '../components/philosophy/system2d/system2dTheme.js'
import {
  glockLinks, glockMethodSchema, glockNodeById, glockNodeOrder,
  glockNodes, glockRoutes,
} from '../data/glockAnalyticChapter2.js'
import './AnalyticGlockSystem.css'

function GlockNode({ data, selected }) {
  return (
    <article
      className={['glock-node', selected ? 'is-selected' : '', data.muted ? 'is-muted' : ''].join(' ')}
      style={{ '--node-accent': data.color }}
    >
      <Handle type="target" position={Position.Left} />
      <div className="glock-node-top"><span>{data.number} / {data.kind}</span><strong>{data.code}</strong></div>
      <h3>{data.title}</h3>
      <p>{data.short}</p>
      <div className="glock-node-bottom"><span>LECTURA DIRECTA</span><b>{data.page}</b></div>
      <Handle type="source" position={Position.Right} />
    </article>
  )
}

const nodeTypes = { glock: GlockNode }

function StudyCanvas() {
  const [route, setRoute] = useState('all')
  const [selectedId, setSelectedId] = useState('G00')
  const [visited, setVisited] = useState(['G00'])
  const [fullscreen, setFullscreen] = useState(false)
  const stageRef = useRef(null)
  const [nodes, , onNodesChange] = useNodesState(glockNodes)
  const { fitView, setCenter } = useReactFlow()
  const selected = glockNodeById(selectedId)
  const routeMembers = useMemo(() => new Set(
    glockNodes.filter((node) => route === 'all' || node.data.branch.includes(route)).map((node) => node.id),
  ), [route])

  const connected = useMemo(() => {
    const ids = new Set([selectedId])
    glockLinks.forEach(({ source, target }) => {
      if (source === selectedId) ids.add(target)
      if (target === selectedId) ids.add(source)
    })
    return ids
  }, [selectedId])

  const displayedNodes = useMemo(() => nodes.map((node) => ({
    ...node,
    selected: node.id === selectedId,
    data: {
      ...node.data,
      muted: route !== 'all' && !routeMembers.has(node.id),
    },
    style: { opacity: route === 'all' || routeMembers.has(node.id) ? 1 : 0.28 },
  })), [nodes, selectedId, route, routeMembers])

  const displayedEdges = useMemo(() => glockLinks.map((edge) => {
    const focus = edge.source === selectedId || edge.target === selectedId
    const active = route === 'all' || (routeMembers.has(edge.source) && routeMembers.has(edge.target))
    const color = edge.critical
      ? SYSTEM_2D_THEME.edge.conceptual.default
      : focus ? SYSTEM_2D_THEME.edge.selected : SYSTEM_2D_THEME.edge.default
    return {
      ...edge,
      type: 'smoothstep',
      label: edge.label,
      style: { stroke: color, strokeWidth: focus ? 2.3 : 1.2, opacity: active ? 0.84 : 0.17, strokeDasharray: edge.critical ? '6 5' : undefined },
      labelStyle: { fontSize: 11, fill: SYSTEM_2D_THEME.ink, fontWeight: 600 },
      labelBgStyle: { fill: SYSTEM_2D_THEME.background.paper, fillOpacity: 0.94 },
      labelBgPadding: [5, 3],
      markerEnd: { type: MarkerType.ArrowClosed, color, width: 15, height: 15 },
    }
  }), [selectedId, route, routeMembers])

  const focusNode = useCallback((id) => {
    const node = nodes.find((item) => item.id === id)
    if (!node) return
    setSelectedId(id)
    setVisited((existing) => existing.at(-1) === id ? existing : [...existing.slice(-11), id])
    setCenter(node.position.x + 165, node.position.y + 105, { zoom: 0.82, duration: 380 })
  }, [nodes, setCenter])

  const goBy = useCallback((delta) => {
    const index = glockNodeOrder.indexOf(selectedId)
    const next = glockNodeOrder[Math.max(0, Math.min(index + delta, glockNodeOrder.length - 1))]
    focusNode(next)
  }, [selectedId, focusNode])

  useEffect(() => {
    const change = () => setFullscreen(document.fullscreenElement === stageRef.current)
    document.addEventListener('fullscreenchange', change)
    return () => document.removeEventListener('fullscreenchange', change)
  }, [])

  const toggleFullscreen = useCallback(async () => {
    if (!stageRef.current) return
    try {
      if (document.fullscreenElement === stageRef.current) await document.exitFullscreen()
      else await stageRef.current.requestFullscreen()
      window.setTimeout(() => fitView({ padding: 0.12, duration: 280 }), 100)
    } catch { /* Fullscreen no disponible: la lectura permanece accesible. */ }
  }, [fitView])

  const relationships = useMemo(() => glockLinks.filter((e) => e.source === selectedId || e.target === selectedId), [selectedId])

  return (
    <main className="glock-shell">
      <nav className="glock-nav">
        <Link to="/semestre/5/filosofia-analitica">← FILOSOFÍA ANALÍTICA</Link>
        <Link to="/" className="glock-logo">Φ · PHILOSOPHIA</Link>
        <span>LECTURA · 2026-B</span>
      </nav>

      <header className="glock-hero">
        <div className="glock-hero-mark" aria-hidden="true">?</div>
        <div>
          <span className="glock-kicker">BIBLIOTHECA ANALYTICA · HANS-JOHANN GLOCK</span>
          <h1>¿Qué es la filosofía <em>analítica?</em></h1>
          <p className="glock-subtitle">Capítulo II · Breve panorama histórico</p>
          <p className="glock-lead">¿Qué hacemos cuando analizamos: descomponer un concepto o retroceder desde una proposición hasta sus principios? La primera entrega estudia el arranque histórico del capítulo, sin adelantar páginas todavía no disponibles.</p>
          <div className="glock-hero-facts">
            <span>TECNOS · 2012</span>
            <span>TRAD. CARMEN GARCÍA TREVIJANO</span>
            <span>PÁGINAS LEÍDAS 40–42 / 40–86</span>
          </div>
        </div>
        <aside>
          <small>AVANCE DOCUMENTAL</small>
          <strong>03 <span>páginas</span></strong>
          <p>{glockNodes.length} nodos · {glockLinks.length} relaciones justificadas · 4 recorridos.</p>
          <b>Las páginas 43–86 están pendientes.</b>
        </aside>
      </header>

      <section className="glock-disclaimer" aria-label="Estado de la fuente">
        <strong>CRITERIO ACADÉMICO</strong>
        <p>Pasajes literales identificados por página, explicaciones editoriales claramente separadas y ninguna afirmación presentada como exposición del profesor. La transcripción íntegra se archiva en la nota privada de Obsidian.</p>
      </section>

      <section className="glock-route-section" aria-label="Recorridos">
        <span>ÍNDICE TEMÁTICO · NAVEGACIÓN SIN MOVER LOS NODOS</span>
        <div className="glock-route-rail">
          {glockRoutes.map((item, index) => (
            <button key={item.id} type="button" className={route === item.id ? 'active' : ''}
              onClick={() => { setRoute(item.id); if (item.id !== 'all') { const first = glockNodes.find((n) => n.data.section === item.id); if (first) focusNode(first.id) } }}>
              <b>{String(index).padStart(2, '0')}</b>{item.label}
            </button>
          ))}
        </div>
      </section>

      <SectionPedagogy
        nodes={glockNodes}
        routes={glockRoutes.filter((item) => item.id !== 'all')}
        nodeOrder={glockNodeOrder}
        activeRoute={route}
        selectedId={selectedId}
        onSectionChange={setRoute}
        onFocusNode={focusNode}
      />

      <section className="glock-study" aria-labelledby="glock-system-heading">
        <div className="glock-study-heading">
          <div><span>SISTEMA HISTÓRICO-CONCEPTUAL 2D · ENTREGA 01</span><h2 id="glock-system-heading">Arquitectura del análisis</h2></div>
          <div className="glock-study-actions">
            <button type="button" onClick={() => fitView({ padding: .12, duration: 300 })}>ENCUADRAR MAPA</button>
            <button type="button" onClick={toggleFullscreen}>{fullscreen ? 'SALIR DE PANTALLA COMPLETA' : 'PANTALLA COMPLETA'}</button>
          </div>
        </div>

        <div className="glock-stage" ref={stageRef}>
          <div className="glock-canvas" aria-label="Mapa interactivo del capítulo de Glock">
            <ReactFlow
              nodes={displayedNodes}
              edges={displayedEdges}
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              onNodeClick={(_, node) => focusNode(node.id)}
              onPaneClick={() => {}}
              fitView fitViewOptions={{ padding: 0.15 }}
              minZoom={0.25} maxZoom={1.6}
              nodesConnectable={false}
              panOnScroll={false}
              attributionPosition="bottom-left"
            >
              <Background color="#c0b4a0" gap={22} size={1} />
              <Controls position="bottom-left" />
              <MiniMap pannable zoomable nodeColor={(node) => node.data.color} />
            </ReactFlow>
          </div>

          <aside className="glock-inspector" aria-live="polite">
            <div className="glock-inspector-top">
              <span>FOLIO {selected?.data.number} / {glockNodes.length} · {selected?.data.page}</span>
              <div><button type="button" onClick={() => goBy(-1)} disabled={selectedId === glockNodeOrder[0]} aria-label="Nodo anterior">←</button>
              <button type="button" onClick={() => goBy(1)} disabled={selectedId === glockNodeOrder.at(-1)} aria-label="Nodo siguiente">→</button></div>
            </div>
            <h3>{selected?.data.title}</h3>
            <p className="glock-inspector-brief">{selected?.data.short}</p>
            <section><span>LECTURA · CITA BREVE</span><blockquote>“{selected?.data.excerpt}”</blockquote><small>{selected?.data.sourceRef}</small></section>
            <section><span>EXPLICACIÓN · RECONSTRUCCIÓN DE ESTUDIO</span><p>{selected?.data.explanation}</p></section>
            <section><span>PREGUNTA DE ESTUDIO</span><p>{selected?.data.question}</p></section>
            <section><span>CONEXIONES EXPLÍCITAS</span>
              {relationships.length === 0 ? <p>Sin relaciones registradas.</p> : (
                <ul>{relationships.map((edge) => {
                  const otherId = edge.source === selectedId ? edge.target : edge.source
                  const other = glockNodeById(otherId)
                  return <li key={edge.id}><button type="button" onClick={() => focusNode(otherId)}>
                    <b>{edge.source === selectedId ? '→' : '←'} {other?.data.title}</b>
                    <small>{edge.label}{edge.critical ? ' · INTERPRETACIÓN EDITORIAL' : ''}</small>
                  </button></li>
                })}</ul>
              )}
            </section>
            <footer><span>VISITADOS · {new Set(visited).size} DE {glockNodes.length}</span><small>Arrastre nodos para explorar; la guía no modifica su posición.</small></footer>
          </aside>
        </div>
      </section>

      <section className="glock-schema">
        <div><span>ESQUEMA DE ESTUDIO · pp. 40–41</span><h2>Un punto de partida, dos caminos</h2><p>Modelo elaborado a partir de la distinción explícita de Glock entre análisis descomposicional de conceptos y regresivo de proposiciones. No es un diagrama impreso en el libro.</p></div>
        <AnimatedConceptSchema schema={glockMethodSchema} />
      </section>

      <footer className="glock-page-footer">
        <span>FUENTE: H.-J. GLOCK · ¿QUÉ ES LA FILOSOFÍA ANALÍTICA? · TECNOS · 2012 · pp. 40–42</span>
        <Link to="/semestre/5/filosofia-analitica">VOLVER AL CURSO →</Link>
      </footer>
    </main>
  )
}

export default function AnalyticGlockSystem() {
  return <ReactFlowProvider><StudyCanvas /></ReactFlowProvider>
}
