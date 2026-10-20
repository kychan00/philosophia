import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import {
  Background, Controls, Handle, MarkerType, MiniMap,
  Position, ReactFlow, ReactFlowProvider, useNodesState, useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

import SectionPedagogy from '../components/philosophy/system2d/SectionPedagogy.jsx'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema.jsx'
import { resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme.js'
import {
  glockLinks, glockMethodSchema, glockNodeById, glockNodeOrder,
  glockNodes, glockRoutes, GLOCK_GEOMETRY,
} from '../data/glockAnalyticChapter2.js'
import './AnalyticGlockSystem.css'

function GlockNode({ data, selected }) {
  return (
    <article
      className={['glock-node', selected ? 'is-selected' : '', data.muted ? 'is-muted' : ''].join(' ')}
      style={{ '--node-accent': data.color }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="glock-node-top"><span>{data.number} / {data.kind}</span><strong>{data.code}</strong></div>
      <h3>{data.title}</h3>
      <p>{data.short}</p>
      <div className="glock-node-bottom"><span>SÍNTESIS DE LECTURA</span><b>{data.page}</b></div>
      <Handle type="source" position={Position.Bottom} />
    </article>
  )
}

const nodeTypes = { glock: GlockNode }

function StudyCanvas() {
  const [route, setRoute] = useState('antiguos')
  const [selectedId, setSelectedId] = useState('G01')
  const [visited, setVisited] = useState(['G01'])
  const [fullscreen, setFullscreen] = useState(false)
  const stageRef = useRef(null)
  const [nodes, , onNodesChange] = useNodesState(glockNodes)
  const { fitView, setCenter } = useReactFlow()
  const selected = glockNodeById(selectedId)
  const routeMembers = useMemo(() => new Set(glockNodes.filter(n =>
    route === 'all' || n.data.section === route).map(n => n.id)), [route])
  const supportIds = useMemo(() => route === 'all' ? new Set() :
    new Set(glockNodes.filter(n => routeMembers.has(n.id))
      .flatMap(n => n.data.dependsOn).filter(id => !routeMembers.has(id))),
    [route, routeMembers])
  const visibleIds = useMemo(() => new Set([...routeMembers, ...supportIds, selectedId]),
    [routeMembers, supportIds, selectedId])
  const displayedNodes = useMemo(() => nodes.map(n => {
    const chosen = n.id === selectedId
    const support = supportIds.has(n.id) && !routeMembers.has(n.id)
    return {
      ...n, selected: chosen, hidden: !visibleIds.has(n.id), draggable: false,
      data: { ...n.data, muted: !chosen && support, highlighted: chosen, support },
      style: { opacity: chosen || !support ? 1 : .72 },
    }
  }), [nodes, selectedId, routeMembers, supportIds, visibleIds])
  const displayedEdges = useMemo(() => glockLinks.map(edge => {
    const focus = edge.source === selectedId || edge.target === selectedId
    const color = resolveSystem2DEdgeColor({
      touchesSelected: focus, conceptual: edge.critical,
      conceptualType: edge.critical ? 'analogy' : null,
    })
    return {
      ...edge, hidden: !visibleIds.has(edge.source) || !visibleIds.has(edge.target),
      type: 'smoothstep',
      // Evitar placas de relación sobre las tarjetas; los rótulos íntegros están en el inspector.
      label: undefined,
      style: { stroke: color, strokeWidth: focus ? 2.5 : 1.6, opacity: focus ? 1 : .66,
        strokeDasharray: edge.critical ? '6 5' : undefined },
      markerEnd: { type: MarkerType.ArrowClosed, color, width: 15, height: 15 },
    }
  }), [selectedId, visibleIds])
  const focusNode = useCallback((id) => {
    const node = nodes.find(n => n.id === id)
    if (!node) return
    setRoute(current => current !== 'all' && current !== node.data.section
      ? node.data.section : current)
    setSelectedId(id)
    setVisited(old => old.at(-1) === id ? old : [...old.slice(-11), id])
    window.requestAnimationFrame(() =>
      setCenter(node.position.x + GLOCK_GEOMETRY.width / 2,
        node.position.y + GLOCK_GEOMETRY.height / 2, { zoom: .94, duration: 380 }))
  }, [nodes, setCenter])
  const changeRoute = useCallback((id) => {
    setRoute(id)
    const first = id === 'all' ? glockNodes[0] : glockNodes.find(n => n.data.section === id)
    if (first) {
      setSelectedId(first.id)
      setVisited(old => old.at(-1) === first.id ? old : [...old, first.id])
    }
  }, [])
  // Reencuadrar sólo al cambiar la ruta, nunca tras un click o avance de guía.
  useEffect(() => {
    const ids = route === 'all' ? glockNodeOrder :
      glockNodes.filter(n => n.data.section === route).map(n => n.id)
    const raf = window.requestAnimationFrame(() =>
      fitView({ nodes: ids.map(id => ({ id })), padding: .2, maxZoom: .9, duration: 400 }))
    return () => window.cancelAnimationFrame(raf)
  }, [route, fitView])
  const navigationSequence = useMemo(() => route === 'all' ? glockNodeOrder :
    glockNodes.filter(n => n.data.section === route).map(n => n.id), [route])
  const currentNavIndex = navigationSequence.indexOf(selectedId)
  const goBy = useCallback(delta => {
    const idx = Math.max(0, currentNavIndex)
    const next = navigationSequence[Math.max(0, Math.min(idx + delta, navigationSequence.length - 1))]
    if (next) focusNode(next)
  }, [currentNavIndex, navigationSequence, focusNode])

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
      window.requestAnimationFrame(() => fitView({ padding: .12, maxZoom: .9, duration: 280 }))
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
          <p className="glock-lead">¿Cómo se transforma la práctica del análisis desde Grecia hasta el neokantismo? Este mapa diferencia antecedentes, Kant, idealismo alemán y reacciones posteriores, sin adelantar páginas no recibidas.</p>
          <div className="glock-hero-facts">
            <span>TECNOS · 2012</span>
            <span>TRAD. CARMEN GARCÍA TREVIJANO</span>
            <span>FUENTE: pp. 40–45 Y COMIENZO DE 46 / 40–86</span>
          </div>
        </div>
        <aside>
          <small>AVANCE DOCUMENTAL</small>
          <strong>06 <span>páginas recibidas</span></strong>
          <p>{glockNodes.length} nodos · {glockLinks.length} relaciones justificadas · {glockRoutes.length - 1} recorridos.</p>
          <b>La página 46 está incompleta; las pp. 47–86, pendientes.</b>
        </aside>
      </header>

      <section className="glock-disclaimer" aria-label="Estado de la fuente">
        <strong>CRITERIO ACADÉMICO</strong>
        <p>Pasajes literales identificados por página, explicaciones editoriales claramente separadas y ninguna afirmación presentada como exposición del profesor. El texto literal visible se archiva en el vault; la p. 46 sólo está parcialmente disponible.</p>
      </section>

      <section className="glock-route-section" aria-label="Recorridos">
        <span>ÍNDICE TEMÁTICO · NAVEGACIÓN SIN MOVER LOS NODOS</span>
        <div className="glock-route-rail">
          {glockRoutes.map((item, index) => (
            <button key={item.id} type="button" className={route === item.id ? 'active' : ''}
              onClick={() => changeRoute(item.id)}>
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
        onSectionChange={changeRoute}
        onFocusNode={focusNode}
      />

      <section className="glock-study" aria-labelledby="glock-system-heading">
        <div className="glock-study-heading">
          <div><span>SISTEMA HISTÓRICO-CONCEPTUAL 2D · ENTREGAS 01–02</span><h2 id="glock-system-heading">Arquitectura del análisis</h2></div>
          <div className="glock-study-actions">
            <button type="button" onClick={() => fitView({ nodes: displayedNodes.filter(n => !n.hidden).map(n => ({ id: n.id })), padding: .16, maxZoom: .9, duration: 300 })}>ENCUADRAR MAPA</button>
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
              nodesDraggable={false}
              onPaneClick={() => {}}
              fitView fitViewOptions={{ padding: .2, maxZoom: .9 }}
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
              <div><button type="button" onClick={() => goBy(-1)} disabled={currentNavIndex <= 0} aria-label="Nodo anterior">←</button>
              <button type="button" onClick={() => goBy(1)} disabled={currentNavIndex < 0 || currentNavIndex === navigationSequence.length - 1} aria-label="Nodo siguiente">→</button></div>
            </div>
            <h3>{selected?.data.title}</h3>
            <p className="glock-inspector-brief">{selected?.data.short}</p>
            <section><span>FRAGMENTO LITERAL · EDICIÓN 2012</span><blockquote>“{selected?.data.excerpt}”</blockquote><small>{selected?.data.sourceRef}</small></section>
            <section><span>EXPLICACIÓN · RECONSTRUCCIÓN DE ESTUDIO</span><p>{selected?.data.explanation}</p></section>
            <section><span>PREGUNTA DE ESTUDIO</span><p>{selected?.data.question}</p></section>
            <section><span>RELACIONES DOCUMENTADAS · TEXTO DE ARISTAS</span>
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
            <footer><span>RUTA · {currentNavIndex < 0 ? "—" : currentNavIndex + 1} / {navigationSequence.length} · VISITADOS {new Set(visited).size} DE {glockNodes.length}</span><small>La guía no modifica las posiciones del mapa; explore otras relaciones mediante los enlaces del inspector.</small></footer>
          </aside>
        </div>
      </section>

      <section className="glock-schema">
        <div><span>ESQUEMA DE ESTUDIO · pp. 40–41</span><h2>Un punto de partida, dos caminos</h2><p>Modelo elaborado a partir de la distinción explícita de Glock entre análisis descomposicional de conceptos y regresivo de proposiciones. No es un diagrama impreso en el libro.</p></div>
        <AnimatedConceptSchema schema={glockMethodSchema} />
      </section>

      <footer className="glock-page-footer">
        <span>FUENTE: H.-J. GLOCK · ¿QUÉ ES LA FILOSOFÍA ANALÍTICA? · TECNOS · 2012 · pp. 40–45 + fragmento p. 46</span>
        <Link to="/semestre/5/filosofia-analitica">VOLVER AL CURSO →</Link>
      </footer>
    </main>
  )
}

export default function AnalyticGlockSystem() {
  return <ReactFlowProvider><StudyCanvas /></ReactFlowProvider>
}
