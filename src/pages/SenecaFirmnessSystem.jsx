import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import {
  Background,
  Controls,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import './SenecaFirmnessSystem.css'

import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import { resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme'
import {
  senecaFirmnessEdges,
  senecaFirmnessNodeById,
  senecaFirmnessNodes,
  senecaFirmnessOrder,
  senecaFirmnessSource,
} from '../data/senecaFirmnessSystem'

const nodeTypes = { seneca: SenecaFirmnessNode }

function SenecaFirmnessNode({ data, selected }) {
  return (
    <article
      className={[
        'seneca2d-node',
        selected ? 'is-selected' : '',
        data.highlighted ? 'is-highlighted' : '',
        data.dimmed ? 'is-dimmed' : '',
        data.guidedCurrent ? 'is-guided-current' : '',
        data.guidedNext ? 'is-guided-next' : '',
      ].filter(Boolean).join(' ')}
    >
      <Handle type="target" position={Position.Left} className="seneca2d-handle" />
      <div className="seneca2d-node-meta">
        <span>{data.phase}</span>
        <b>{data.code}</b>
      </div>
      <strong className="seneca2d-node-title">{data.title}</strong>
      <p>{data.excerpt}</p>
      <div className="seneca2d-node-diagram" aria-label="Esquema breve">
        {data.diagram.map((item, index) => (
          <span key={data.code + '-' + index}>{item}</span>
        ))}
      </div>
      <footer>
        <span>Gredos · p. {data.sourcePage}</span>
        <button
          type="button"
          className="nodrag nopan"
          onClick={(event) => {
            event.stopPropagation()
            data.onOpenFolio?.()
          }}
        >
          abrir folio ↗
        </button>
      </footer>
      <Handle type="source" position={Position.Right} className="seneca2d-handle" />
    </article>
  )
}

function relatedSet(id) {
  if (!id) return new Set()
  const related = new Set([id])
  senecaFirmnessEdges.forEach((edge) => {
    if (edge.source === id) related.add(edge.target)
    if (edge.target === id) related.add(edge.source)
  })
  return related
}

function SenecaCanvas() {
  const [selectedId, setSelectedId] = useState('S01')
  const [folioId, setFolioId] = useState(null)
  const [guided, setGuided] = useState(false)
  const [guidedIndex, setGuidedIndex] = useState(0)
  const [workspaceFullscreen, setWorkspaceFullscreen] = useState(false)
  const workspaceRef = useRef(null)
  const { fitView, getNodes, setCenter } = useReactFlow()

  const centerNode = useCallback((id) => {
    window.setTimeout(() => {
      const node = getNodes().find((item) => item.id === id)
      if (!node) return
      const width = node.measured?.width || 300
      const height = node.measured?.height || 210
      setCenter(node.position.x + width / 2, node.position.y + height / 2, {
        zoom: 0.98,
        duration: 420,
      })
    }, 20)
  }, [getNodes, setCenter])

  const chooseNode = useCallback((id) => {
    setSelectedId(id)
    centerNode(id)
  }, [centerNode])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      fitView({ padding: 0.14, duration: 450, maxZoom: 0.92 })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [fitView])

  useEffect(() => {
    const sync = () => {
      const active = document.fullscreenElement || document.webkitFullscreenElement
      setWorkspaceFullscreen(active === workspaceRef.current)
    }
    document.addEventListener('fullscreenchange', sync)
    document.addEventListener('webkitfullscreenchange', sync)
    return () => {
      document.removeEventListener('fullscreenchange', sync)
      document.removeEventListener('webkitfullscreenchange', sync)
    }
  }, [])

  const toggleFullscreen = useCallback(async () => {
    const element = workspaceRef.current
    if (!element) return
    const active = document.fullscreenElement || document.webkitFullscreenElement

    if (active) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen
      if (exit) await Promise.resolve(exit.call(document))
      return
    }

    const request = element.requestFullscreen || element.webkitRequestFullscreen
    if (request) await Promise.resolve(request.call(element))
  }, [])

  const currentGuideId = guided ? senecaFirmnessOrder[guidedIndex] : null
  const nextGuideId = guided ? senecaFirmnessOrder[guidedIndex + 1] : null
  const related = useMemo(() => relatedSet(selectedId), [selectedId])

  const nodes = useMemo(
    () => senecaFirmnessNodes.map((node, index) => ({
      ...node,
      draggable: false,
      selected: node.id === selectedId,
      data: {
        ...node.data,
        routeNumber: index + 1,
        routeTotal: senecaFirmnessOrder.length,
        highlighted: selectedId && related.has(node.id) && node.id !== selectedId,
        dimmed: selectedId && !related.has(node.id),
        guidedCurrent: node.id === currentGuideId,
        guidedNext: node.id === nextGuideId,
        onOpenFolio: () => setFolioId(node.id),
      },
    })),
    [currentGuideId, nextGuideId, related, selectedId],
  )

  const edges = useMemo(
    () => senecaFirmnessEdges.map((edge) => {
      const touchesSelected = edge.source === selectedId || edge.target === selectedId
      const guidedActive =
        guided &&
        ((edge.source === currentGuideId && edge.target === nextGuideId) ||
          (edge.target === currentGuideId && edge.source === nextGuideId))
      const color = resolveSystem2DEdgeColor({ guidedActive, touchesSelected })

      return {
        ...edge,
        type: 'smoothstep',
        style: { stroke: color, strokeWidth: guidedActive || touchesSelected ? 2.4 : 1.35 },
        markerEnd: { type: MarkerType.ArrowClosed, color },
        labelStyle: { fill: '#1a365d', fontSize: 11, fontWeight: 700 },
        labelBgStyle: { fill: '#f6f9ff', fillOpacity: 0.94 },
        labelBgPadding: [6, 4],
        labelBgBorderRadius: 4,
      }
    }),
    [currentGuideId, guided, nextGuideId, selectedId],
  )

  const selected = senecaFirmnessNodeById(selectedId)
  const folio = senecaFirmnessNodeById(folioId)

  const startGuide = () => {
    setGuided(true)
    setGuidedIndex(0)
    chooseNode(senecaFirmnessOrder[0])
  }

  const moveGuide = (delta) => {
    const next = Math.min(
      Math.max(guidedIndex + delta, 0),
      senecaFirmnessOrder.length - 1,
    )
    setGuidedIndex(next)
    chooseNode(senecaFirmnessOrder[next])
  }

  return (
    <main className="seneca2d-shell ph2d-shell">
      <div className="seneca2d-meander" aria-hidden="true" />

      <nav className="seneca2d-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="seneca2d-brand">Φ · Philosophia</Link>
        <span>Séneca · ETHOS</span>
      </nav>

      <header className="seneca2d-hero">
        <div>
          <p>AD SERENUM · DE CONSTANTIA SAPIENTIS</p>
          <h1>La firmeza <em>del sabio</em></h1>
          <p className="seneca2d-lead">
            Seis nodos para seguir una sola idea: el ataque exterior puede doler,
            pero no decide por sí mismo el valor moral del sabio.
          </p>
        </div>
        <aside>
          <span>Tesis rectora</span>
          <strong>ataque exterior ≠ derrota moral</strong>
          <small>
            Reconstrucción de estudio basada en el diálogo de Séneca, sin añadir
            una doctrina externa al pasaje.
          </small>
        </aside>
      </header>

      <section className="seneca2d-source">
        <div>
          <span>FUENTE</span>
          <strong>{senecaFirmnessSource.work}</strong>
          <p>
            {senecaFirmnessSource.edition} Traducción de {senecaFirmnessSource.translator}.
          </p>
        </div>
        <div>
          <span>TRAMO COTEJADO</span>
          <strong>pp. {senecaFirmnessSource.pages}</strong>
          <p>{senecaFirmnessSource.boundary}</p>
        </div>
      </section>

      <section className="seneca2d-guide-launch">
        <div>
          <span>RECORRIDO ÚNICO</span>
          <strong>virtud → distinción → dolor → corrección → libertad</strong>
          <p>Seis pasos. Sin subrutas ni atlas paralelo.</p>
        </div>
        <button type="button" onClick={startGuide}>
          {guided ? 'Reiniciar guía' : 'Iniciar guía'}
        </button>
      </section>

      {guided && (
        <section className="seneca2d-guide" aria-live="polite">
          <div className="seneca2d-progress">
            <span>Paso {guidedIndex + 1} / {senecaFirmnessOrder.length}</span>
            <div><i style={{ width: ((guidedIndex + 1) / senecaFirmnessOrder.length) * 100 + '%' }} /></div>
          </div>
          <div className="seneca2d-guide-copy">
            <strong>{senecaFirmnessNodeById(currentGuideId)?.data.title}</strong>
            <p>{senecaFirmnessNodeById(currentGuideId)?.data.explanation}</p>
          </div>
          <div className="seneca2d-guide-nav">
            <button type="button" onClick={() => moveGuide(-1)} disabled={guidedIndex === 0}>← Anterior</button>
            <button
              type="button"
              onClick={() => moveGuide(1)}
              disabled={guidedIndex === senecaFirmnessOrder.length - 1}
            >
              Siguiente →
            </button>
          </div>
        </section>
      )}

      <section className="seneca2d-route">
        <span>RUTA</span>
        <button type="button" className="is-active" aria-pressed="true">
          Única · firmeza del sabio
        </button>
      </section>

      <section
        ref={workspaceRef}
        className={workspaceFullscreen ? 'seneca2d-workspace is-fullscreen' : 'seneca2d-workspace'}
      >
        <div className="seneca2d-flow-panel">
          <div className="seneca2d-flow-caption">
            <div>
              <span>MAPA ARGUMENTAL</span>
              <strong>del ultraje intentado a la libertad interior</strong>
            </div>
            <button type="button" onClick={toggleFullscreen}>
              {workspaceFullscreen ? 'Salir ⛶' : 'Pantalla completa ⛶'}
            </button>
          </div>

          <div className="seneca2d-canvas">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={(_, node) => chooseNode(node.id)}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable
              minZoom={0.45}
              maxZoom={1.35}
              fitView
              fitViewOptions={{ padding: 0.14, maxZoom: 0.92 }}
              proOptions={{ hideAttribution: true }}
            >
              <Background gap={36} size={1} color="rgba(26,54,93,.12)" />
              <Controls showInteractive={false} />
            </ReactFlow>
          </div>
        </div>

        <aside className="seneca2d-inspector">
          {selected && (
            <>
              <header>
                <span>{selected.data.phase}</span>
                <b>{selected.data.code}</b>
              </header>
              <h2>{selected.data.title}</h2>

              <section className="seneca2d-source-text">
                <span>TEXTO DE SÉNECA</span>
                <blockquote>“{selected.data.sourceText}”</blockquote>
                <small>{selected.data.sourceRef}</small>
              </section>

              <section>
                <span>EN POCAS PALABRAS</span>
                <p>{selected.data.explanation}</p>
              </section>

              <section>
                <span>EJEMPLO</span>
                <p>{selected.data.example}</p>
              </section>

              <section>
                <span>FUNCIÓN EN EL ARGUMENTO</span>
                <p>{selected.data.role}</p>
              </section>

              <section className="seneca2d-schema">
                <span>ESQUEMA · RECONSTRUCCIÓN DE ESTUDIO</span>
                <AnimatedConceptSchema
                  key={'seneca-inspector-' + selected.id}
                  schema={selected.data.schema}
                />
              </section>

              <button
                type="button"
                className="seneca2d-open-folio"
                onClick={() => setFolioId(selected.id)}
              >
                Abrir folio
              </button>
            </>
          )}
        </aside>

        {folio && (
          <div className="seneca2d-folio-overlay" role="presentation" onMouseDown={() => setFolioId(null)}>
            <article
              className="seneca2d-folio"
              role="dialog"
              aria-modal="true"
              aria-labelledby="seneca-folio-title"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <header>
                <div>
                  <span>{folio.data.code} · {folio.data.phase}</span>
                  <h2 id="seneca-folio-title">{folio.data.title}</h2>
                </div>
                <button type="button" aria-label="Cerrar folio" onClick={() => setFolioId(null)}>×</button>
              </header>
              <div className="seneca2d-folio-grid">
                <section className="seneca2d-folio-source">
                  <span>TEXTO ORIGINAL COTEJADO</span>
                  <blockquote>“{folio.data.sourceText}”</blockquote>
                  <small>{folio.data.sourceRef}</small>
                </section>
                <section>
                  <span>EXPLICACIÓN</span>
                  <p>{folio.data.explanation}</p>
                </section>
                <section>
                  <span>EJEMPLO PARA EXPLICARLO</span>
                  <p>{folio.data.example}</p>
                </section>
                <section className="seneca2d-folio-schema">
                  <span>ESQUEMA · RECONSTRUCCIÓN DE ESTUDIO</span>
                  <AnimatedConceptSchema
                    key={'seneca-folio-' + folio.id}
                    schema={folio.data.schema}
                  />
                </section>
                <section className="seneca2d-folio-question">
                  <span>PREGUNTA DE REPASO</span>
                  <strong>{folio.data.question}</strong>
                </section>
              </div>
            </article>
          </div>
        )}
      </section>

      <section className="seneca2d-summary">
        <span>FÓRMULA FINAL</span>
        <strong>lo externo puede doler → el juicio permanece propio → la virtud no queda entregada al agresor</strong>
        <p>
          La firmeza no es insensibilidad. Es conservar el gobierno del juicio
          cuando la fortuna, el insulto o la violencia intentan imponer su valoración.
        </p>
      </section>

      <footer className="seneca2d-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>ἦθος · constantia · libertas</span>
        <Link to="/biblioteca">Biblioteca →</Link>
      </footer>

      <div className="seneca2d-meander" aria-hidden="true" />
    </main>
  )
}

export default function SenecaFirmnessSystem() {
  return (
    <ReactFlowProvider>
      <SenecaCanvas />
    </ReactFlowProvider>
  )
}
