import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { analyticFollesdalMaps } from '../data/analyticFollesdalMaps'

const legend = [
  ['claim', 'Tesis / giro conceptual'],
  ['problem', 'Problema / objeción / debate'],
  ['method', 'Procedimiento o forma de trabajo'],
  ['evidence', 'Ejemplos, apoyos o referencias'],
  ['contrast', 'Contraste o filosofía menos analítica'],
  ['value', 'Razón ética / política'],
  ['conclusion', 'Conclusión o respuesta alcanzada'],
  ['tradition', 'Tradición o corriente filosófica'],
]

function edgeStyle(kind) {
  if (kind === 'contrast') {
    return {
      stroke: 'rgba(135, 78, 70, 0.95)',
      strokeWidth: 2.2,
      strokeDasharray: '7 6',
    }
  }

  return {
    stroke: 'rgba(55, 51, 43, 0.88)',
    strokeWidth: 2,
  }
}

function mapNode(phaseNode, activeNodeId) {
  return {
    id: phaseNode.id,
    position: phaseNode.position,
    draggable: false,
    selectable: true,
    className: `afm-node afm-node--${phaseNode.category} ${activeNodeId === phaseNode.id ? 'is-active' : ''}`,
    data: {
      label: (
        <div className="afm-node-card">
          <span className="afm-node-tag">{phaseNode.tag}</span>
          <strong>{phaseNode.title}</strong>
        </div>
      ),
    },
  }
}

function mapEdge(item) {
  return {
    id: item.id,
    source: item.source,
    target: item.target,
    label: item.label || '',
    labelStyle: {
      fill: 'rgba(45, 40, 34, 0.88)',
      fontSize: 11,
      fontWeight: 600,
    },
    labelBgStyle: {
      fill: 'rgba(246, 241, 230, 0.96)',
      fillOpacity: 1,
      rx: 4,
      ry: 4,
    },
    style: edgeStyle(item.kind),
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 18,
      height: 18,
      color: item.kind === 'contrast'
        ? 'rgba(135, 78, 70, 0.95)'
        : 'rgba(55, 51, 43, 0.88)',
    },
  }
}

function FlowViewport({ phase, activeNodeId, onNodeSelect }) {
  const { fitView } = useReactFlow()

  const nodes = useMemo(
    () => phase.nodes.map((node) => mapNode(node, activeNodeId)),
    [phase, activeNodeId],
  )
  const edges = useMemo(
    () => phase.edges.map(mapEdge),
    [phase],
  )

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      fitView({ padding: 0.18, duration: 450 })
    })

    return () => window.cancelAnimationFrame(id)
  }, [phase.id, fitView])

  return (
    <div className="afm-flow-shell">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        panOnScroll
        selectionOnDrag={false}
        nodesDraggable={false}
        onNodeClick={(_, node) => onNodeSelect(node.id)}
        proOptions={{ hideAttribution: true }}
      >
        <MiniMap zoomable pannable />
        <Controls showInteractive={false} />
        <Background gap={22} size={1} color="rgba(45, 41, 34, 0.12)" />
      </ReactFlow>
    </div>
  )
}

export default function AnalyticFollesdalMap() {
  const [phaseId, setPhaseId] = useState(analyticFollesdalMaps[0].id)
  const phase = useMemo(
    () => analyticFollesdalMaps.find((item) => item.id === phaseId) || analyticFollesdalMaps[0],
    [phaseId],
  )

  const [activeNodeId, setActiveNodeId] = useState(phase.nodes[0]?.id || '')

  useEffect(() => {
    setActiveNodeId(phase.nodes[0]?.id || '')
  }, [phase])

  const activeNode = useMemo(
    () => phase.nodes.find((node) => node.id === activeNodeId) || phase.nodes[0],
    [phase, activeNodeId],
  )

  const currentIndex = analyticFollesdalMaps.findIndex((item) => item.id === phase.id)
  const previousPhase = analyticFollesdalMaps[currentIndex - 1] || null
  const nextPhase = analyticFollesdalMaps[currentIndex + 1] || null

  return (
    <main className="afm-page">
      <nav className="afm-nav">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="afm-brand">Φ · Philosophia</Link>
        <span>Reporte · Føllesdal · FI264</span>
      </nav>

      <header className="afm-hero">
        <div className="afm-grid" aria-hidden="true" />
        <div className="afm-ghost" aria-hidden="true">∴</div>
        <div className="afm-hero-copy">
          <p className="afm-kicker">Esquema 2D con nodos · lectura por fases</p>
          <h1>
            Filosofía analítica:
            <em> mapa argumental de Føllesdal</em>
          </h1>
          <p className="afm-lead">
            Un recorrido visual del ensayo “Filosofía analítica: ¿qué es y por qué uno debería involucrarse?”
            para entender la arquitectura completa del argumento antes de redactar el reporte.
          </p>
          <div className="afm-callout">
            <span>TRAMO DE TRABAJO</span>
            <strong>pp. 19–40 del ensayo, conservando el cierre normativo de pp. 41–42</strong>
          </div>
        </div>
      </header>

      <section className="afm-layout">
        <aside className="afm-sidebar">
          <div className="afm-sidebar-card">
            <span>Iter lectionis</span>
            <h2>Fases</h2>
            <p>
              Avance fase por fase. Cada botón cambia el mapa y reorganiza el argumento.
            </p>
            <div className="afm-phase-list">
              {analyticFollesdalMaps.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === phase.id ? 'is-active' : ''}
                  onClick={() => setPhaseId(item.id)}
                >
                  <b>{item.roman}</b>
                  <div>
                    <strong>{item.title}</strong>
                    <span>Fase {index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="afm-sidebar-card">
            <span>Clavis legendi</span>
            <h2>Leyenda</h2>
            <ul className="afm-legend">
              {legend.map(([key, label]) => (
                <li key={key}>
                  <i className={`afm-swatch afm-swatch--${key}`} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="afm-main">
          <section className="afm-phase-head">
            <div>
              <p>{phase.roman} · {phase.subtitle}</p>
              <h2>{phase.title}</h2>
              <p className="afm-phase-question">
                <strong>Pregunta guía:</strong> {phase.question}
              </p>
            </div>
            <div className="afm-thesis-box">
              <span>Tesis de la fase</span>
              <p>{phase.thesis}</p>
            </div>
          </section>

          <section className="afm-takeaways">
            {phase.takeaways.map((item) => (
              <article key={item}>
                <span>∴</span>
                <p>{item}</p>
              </article>
            ))}
          </section>

          <section className="afm-map-panel">
            <div className="afm-map-header">
              <div>
                <span>Mapa 2D</span>
                <h3>Arquitectura argumental de la fase</h3>
              </div>
              <p>
                Toque un nodo para leer su función dentro del argumento.
              </p>
            </div>

            <ReactFlowProvider>
              <FlowViewport
                phase={phase}
                activeNodeId={activeNodeId}
                onNodeSelect={setActiveNodeId}
              />
            </ReactFlowProvider>
          </section>

          <section className="afm-detail-grid">
            <article className="afm-detail-card afm-detail-card--active">
              <span>Nodo activo</span>
              <h3>{activeNode?.title}</h3>
              <div className={`afm-pill afm-pill--${activeNode?.category || 'claim'}`}>
                {activeNode?.tag}
              </div>
              <p>{activeNode?.detail}</p>
              <small>{activeNode?.source}</small>
            </article>

            <article className="afm-detail-card">
              <span>Lectura analítica</span>
              <h3>Qué hay que entender aquí</h3>
              <ol>
                {phase.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          </section>

          <footer className="afm-phase-footer">
            <button
              type="button"
              disabled={!previousPhase}
              onClick={() => previousPhase && setPhaseId(previousPhase.id)}
            >
              ← Fase anterior
            </button>

            <Link to="/semestre/5/filosofia-analitica">
              Volver a la materia
            </Link>

            <button
              type="button"
              disabled={!nextPhase}
              onClick={() => nextPhase && setPhaseId(nextPhase.id)}
            >
              Siguiente fase →
            </button>
          </footer>
        </div>
      </section>
    </main>
  )
}
