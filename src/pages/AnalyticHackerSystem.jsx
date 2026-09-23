import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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

import HackerNode from '../components/analytic/HackerNode'
import {
  hackerEdges,
  hackerGuidedPhases,
  hackerGuidedRoute,
  hackerNodeById,
  hackerNodes,
  hackerOrder,
  hackerRouteColors,
  hackerRoutes,
} from '../data/hackerAnalyticSystem'
import './AnalyticHackerSystem.css'

const nodeTypes = {
  thesis: HackerNode,
  context: HackerNode,
  bridge: HackerNode,
  distinction: HackerNode,
  debate: HackerNode,
  frege: HackerNode,
  tractatus: HackerNode,
  after: HackerNode,
  method: HackerNode,
  history: HackerNode,
  origin: HackerNode,
  moore: HackerNode,
  russell: HackerNode,
  synthesis: HackerNode,
  logic: HackerNode,
  philosophy: HackerNode,
  critique: HackerNode,
  precursor: HackerNode,
  cambridge: HackerNode,
  vienna: HackerNode,
  collapse: HackerNode,
  subpoint: HackerNode,
  failure: HackerNode,
  classpoint: HackerNode,
}

function orderIndex(id) {
  const index = hackerOrder.indexOf(id)
  return index === -1 ? 999 : index
}

function selectionSetFor(id) {
  if (!id) return new Set()
  const set = new Set([id])
  hackerEdges.forEach((edge) => {
    if (edge.source === id) set.add(edge.target)
    if (edge.target === id) set.add(edge.source)
  })
  return set
}

function buildConceptGuide(route) {
  if (route === 'all') return []
  return hackerNodes
    .filter((node) => node.data.branch.includes(route))
    .sort((a, b) => orderIndex(a.id) - orderIndex(b.id))
    .map((node, index) => ({
      id: node.id,
      number: String(index + 1).padStart(2, '0'),
    }))
}


function buildGuidedRouteFor(route) {
  if (route === 'all') return hackerGuidedRoute

  const routeLabel =
    hackerRoutes.find((item) => item.id === route)?.label || route

  const ids = buildConceptGuide(route).map((item) => item.id)

  return ids.map((id, index) => {
    const node = hackerNodeById(id)
    const next = hackerNodeById(ids[index + 1])

    return {
      id,
      phase: routeLabel,
      why: node?.data.role || node?.data.explanation || '',
      nextQuestion:
        node?.data.nextQuestion ||
        (next
          ? `¿Cómo conduce esto a “${next.data.title}”?`
          : `Fin de la guía de ${routeLabel}.`),
    }
  })
}

function StudyCanvas() {
  const [route, setRoute] = useState('all')
  const [selectedId, setSelectedId] = useState('H00')
  const [history, setHistory] = useState(['H00'])
  const [guidedMode, setGuidedMode] = useState(false)
  const [guidedScope, setGuidedScope] = useState('all')
  const [isFullscreen, setIsFullscreen] = useState(false)
  const workspaceRef = useRef(null)
  const [guidedIndex, setGuidedIndex] = useState(() => {
    try {
      const saved = Number(window.localStorage.getItem('philosophia-hacker-guided-step') || 0)
      return Number.isFinite(saved)
        ? Math.min(Math.max(saved, 0), hackerGuidedRoute.length - 1)
        : 0
    } catch {
      return 0
    }
  })

  const { fitView, setCenter, getNodes } = useReactFlow()

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === workspaceRef.current)

      window.setTimeout(() => {
        fitView({ padding: 0.08, duration: 350 })
      }, 80)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [fitView])

  const toggleFullscreen = useCallback(async () => {
    if (!workspaceRef.current) return

    try {
      if (document.fullscreenElement === workspaceRef.current) {
        await document.exitFullscreen()
      } else {
        await workspaceRef.current.requestFullscreen()
      }
    } catch (error) {
      console.error('No se pudo cambiar el modo de pantalla completa:', error)
    }
  }, [])

  const selected = hackerNodeById(selectedId)
  const selectionSet = useMemo(() => selectionSetFor(selectedId), [selectedId])

  const activeGuidedRoute = useMemo(
    () => buildGuidedRouteFor(guidedScope),
    [guidedScope],
  )

  const guidedStep = activeGuidedRoute[guidedIndex] || null
  const guidedCurrent = guidedStep ? hackerNodeById(guidedStep.id) : null
  const guidedNext = activeGuidedRoute[guidedIndex + 1] || null
  const guidedPrev = activeGuidedRoute[guidedIndex - 1] || null

  const guidedCompletedIds = useMemo(
    () => new Set(activeGuidedRoute.slice(0, guidedIndex).map((step) => step.id)),
    [activeGuidedRoute, guidedIndex],
  )

  const conceptGuide = useMemo(() => buildConceptGuide(route), [route])
  const conceptGuideMap = useMemo(
    () => new Map(conceptGuide.map((item) => [item.id, item])),
    [conceptGuide],
  )

  const conceptColor = route === 'all' ? null : hackerRouteColors[route] || '#9a702e'

  const routeNodes = useMemo(
    () => route === 'all'
      ? []
      : hackerNodes.filter((node) => node.data.branch.includes(route)),
    [route],
  )

  const routeIds = useMemo(() => new Set(routeNodes.map((node) => node.id)), [routeNodes])

  const supportIds = useMemo(() => {
    if (route === 'all') return new Set()
    const support = new Set()
    routeNodes.forEach((node) => {
      node.data.dependsOn.forEach((id) => {
        if (!routeIds.has(id)) support.add(id)
      })
    })
    return support
  }, [route, routeNodes, routeIds])

  const thematicLayout = useMemo(() => {
    if (route === 'all') return new Map()

    const active = [...routeNodes].sort((a, b) => orderIndex(a.id) - orderIndex(b.id))
    const layout = new Map()
    const rows = 4

    active.forEach((node, index) => {
      const col = Math.floor(index / rows)
      const row = index % rows
      layout.set(node.id, {
        x: 420 + col * 320,
        y: 100 + row * 205,
      })
    })

    ;[...supportIds]
      .map((id) => hackerNodeById(id))
      .filter(Boolean)
      .sort((a, b) => orderIndex(a.id) - orderIndex(b.id))
      .forEach((node, index) => {
        layout.set(node.id, { x: 30, y: 90 + index * 190 })
      })

    return layout
  }, [route, routeNodes, supportIds])

  const nodes = useMemo(
    () => hackerNodes.map((node) => {
      const routeMatches = route === 'all' || node.data.branch.includes(route)
      const topicActive = route !== 'all' && routeIds.has(node.id)
      const topicSupport = route !== 'all' && supportIds.has(node.id)
      const inSelection = selectionSet.has(node.id)
      const isGuidedCurrent = guidedMode && node.id === guidedStep?.id
      const isGuidedNext = guidedMode && node.id === guidedNext?.id
      const isGuidedCompleted = guidedMode && guidedCompletedIds.has(node.id)
      const isGuidedSupport =
        guidedMode && Boolean(guidedCurrent?.data.dependsOn.includes(node.id))

      return {
        ...node,
        position:
          route !== 'all' && !guidedMode
            ? thematicLayout.get(node.id) || node.position
            : node.position,
        hidden:
          route !== 'all' &&
          !guidedMode &&
          !topicActive &&
          !topicSupport,
        draggable: false,
        data: {
          ...node.data,
          nodeType: node.type,
          topicActive,
          topicSupport,
          topicColor: conceptColor,
          conceptNumber: conceptGuideMap.get(node.id)?.number || null,
          guidedCurrent: isGuidedCurrent,
          guidedNext: isGuidedNext,
          guidedCompleted: isGuidedCompleted,
          guidedSupport: isGuidedSupport,
          dimmed: guidedMode
            ? !isGuidedCurrent && !isGuidedNext && !isGuidedCompleted && !isGuidedSupport
            : Boolean(selectedId)
              ? !inSelection
              : route !== 'all'
                ? !topicActive && !topicSupport
                : false,
          highlighted:
            !guidedMode &&
            routeMatches &&
            Boolean(selectedId) &&
            inSelection &&
            node.id !== selectedId,
        },
      }
    }),
    [
      route,
      routeIds,
      supportIds,
      selectionSet,
      selectedId,
      guidedMode,
      guidedStep,
      guidedNext,
      guidedCompletedIds,
      guidedCurrent,
      thematicLayout,
      conceptColor,
      conceptGuideMap,
    ],
  )

  const edges = useMemo(() => {
    const base = hackerEdges.map((edge) => {
      const source = hackerNodeById(edge.source)
      const target = hackerNodeById(edge.target)
      const selectedTouches = selectedId && (edge.source === selectedId || edge.target === selectedId)
      const sourceRoute = route !== 'all' && source?.data.branch.includes(route)
      const targetRoute = route !== 'all' && target?.data.branch.includes(route)
      const routeActive = route !== 'all' && sourceRoute && targetRoute
      const supportEdge = route !== 'all' && supportIds.has(edge.source) && targetRoute
      const guidedDependency =
        guidedMode &&
        edge.target === guidedStep?.id &&
        guidedCurrent?.data.dependsOn.includes(edge.source)

      const stroke = guidedDependency
        ? '#617d55'
        : selectedTouches
          ? '#9b4b38'
          : routeActive
            ? conceptColor
            : edge.relation === 'critical'
              ? '#8c4939'
              : '#6f6655'

      const visibleInRoute = route === 'all' || routeActive || supportEdge

      return {
        ...edge,
        hidden: !guidedMode && route !== 'all' && !visibleInRoute,
        type: 'smoothstep',
        animated: false,
        style: {
          stroke,
          strokeWidth: guidedDependency ? 2.6 : selectedTouches ? 3.6 : routeActive ? 2.4 : 1.15,
          opacity: guidedMode
            ? guidedDependency ? 1 : 0.06
            : selectedId
              ? selectedTouches ? 1 : 0.018
              : routeActive
                ? 1
                : supportEdge
                  ? 0.7
                  : route === 'all'
                    ? 0.24
                    : 0.04,
          filter:
            !guidedMode && selectedId && !selectedTouches
              ? 'blur(1.4px)'
              : 'none',
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: selectedTouches ? 14 : 10,
          height: selectedTouches ? 14 : 10,
          color: stroke,
        },
      }
    })

    if (guidedMode && guidedStep && guidedNext) {
      base.push({
        id: `guided-${guidedStep.id}-${guidedNext.id}`,
        source: guidedStep.id,
        target: guidedNext.id,
        type: 'smoothstep',
        selectable: false,
        style: { stroke: '#617d55', strokeWidth: 2.8, opacity: 1 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 12,
          height: 12,
          color: '#617d55',
        },
      })
    }

    return base
  }, [
    selectedId,
    route,
    supportIds,
    guidedMode,
    guidedStep,
    guidedCurrent,
    guidedNext,
    conceptColor,
  ])

  useEffect(() => {
    if (guidedMode || route === 'all') return
    const timer = window.setTimeout(() => {
      const active = getNodes().filter((node) => node.data.topicActive || node.data.topicSupport)
      if (!active.length) return
      fitView({ nodes: active, padding: 0.18, duration: 600, maxZoom: 0.95 })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [route, guidedMode, getNodes, fitView, nodes])

  const selectNode = useCallback((node) => {
    if (!node) return
    setSelectedId(node.id)
    setHistory((current) => {
      if (current[current.length - 1] === node.id) return current
      return [...current.slice(-9), node.id]
    })
    setCenter(node.position.x + 115, node.position.y + 75, {
      zoom: 1.08,
      duration: 420,
    })
  }, [setCenter])

  const selectById = useCallback((id) => {
    const node = hackerNodeById(id)
    if (node) selectNode(node)
  }, [selectNode])

  const jumpGuided = useCallback((index) => {
    if (!activeGuidedRoute.length) return

    const safe = Math.min(
      Math.max(index, 0),
      activeGuidedRoute.length - 1,
    )
    const step = activeGuidedRoute[safe]
    const node = step ? hackerNodeById(step.id) : null
    if (!node) return

    setGuidedMode(true)
    setGuidedIndex(safe)
    setRoute(guidedScope === 'all' ? 'all' : guidedScope)
    setSelectedId(node.id)

    if (guidedScope === 'all') {
      try {
        window.localStorage.setItem(
          'philosophia-hacker-guided-step',
          String(safe),
        )
      } catch {}
    }

    setCenter(node.position.x + 115, node.position.y + 75, {
      zoom: 1.08,
      duration: 460,
    })
  }, [activeGuidedRoute, guidedScope, setCenter])

  const startTopicGuide = useCallback((routeId) => {
    const routeSteps = buildGuidedRouteFor(routeId)
    const first = routeSteps[0]
    const node = first ? hackerNodeById(first.id) : null
    if (!node) return

    setGuidedScope(routeId)
    setGuidedMode(true)
    setGuidedIndex(0)
    setRoute(routeId)
    setSelectedId(node.id)

    setCenter(node.position.x + 115, node.position.y + 75, {
      zoom: 1.08,
      duration: 460,
    })
  }, [setCenter])

  const startGlobalGuide = useCallback(() => {
    const safe = Math.min(
      Math.max(guidedScope === 'all' ? guidedIndex : 0, 0),
      hackerGuidedRoute.length - 1,
    )
    const step = hackerGuidedRoute[safe]
    const node = step ? hackerNodeById(step.id) : null
    if (!node) return

    setGuidedScope('all')
    setGuidedMode(true)
    setGuidedIndex(safe)
    setRoute('all')
    setSelectedId(node.id)

    setCenter(node.position.x + 115, node.position.y + 75, {
      zoom: 1.08,
      duration: 460,
    })
  }, [guidedIndex, guidedScope, setCenter])

  const reset = useCallback(() => {
    setGuidedMode(false)
    setSelectedId(null)
    setRoute('all')
    setTimeout(() => fitView({ padding: 0.1, duration: 500 }), 0)
  }, [fitView])

  const resetGuided = useCallback(() => {
    try {
      window.localStorage.removeItem('philosophia-hacker-guided-step')
    } catch {}
    setGuidedIndex(0)
    setGuidedScope('all')
    setGuidedMode(false)
    setSelectedId(null)
    setRoute('all')
    setTimeout(() => fitView({ padding: 0.1, duration: 500 }), 0)
  }, [fitView])

  return (
    <div className="hacker-study-shell">
      <nav className="hacker-study-nav">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="hacker-study-brand">Φ · Philosophia</Link>
        <span>Segundo reporte · 28 sep 2026</span>
      </nav>

      <header className="hacker-study-hero">
        <div className="hacker-study-mark">82</div>
        <div>
          <p>PETER M. S. HACKER · SISTEMA TOTAL</p>
          <h1>El surgimiento de <em>la filosofía analítica del siglo XX</em></h1>
          <p className="hacker-study-lead">
            Un plano único con todos los nodos de la sistematización: origen,
            transformaciones, giro lingüístico, positivismo y salida.
          </p>
        </div>
        <aside>
          <span>TESIS RECTORA</span>
          <strong>filosofía analítica ≠ giro lingüístico</strong>
          <b>Moore + Russell → Tractatus → Cambridge / Viena</b>
          <small>pp. 95–132</small>
        </aside>
      </header>

      <section className="hacker-study-intro">
        <div>
          <span>MAPPA ANALYTICA</span>
          <strong>82 nodos · un solo plano 2D</strong>
        </div>
        <p>
          La navegación replica la lógica del sistema de Spinoza:
          seleccione un nodo, siga dependencias, filtre rutas o active el recorrido guiado.
        </p>
      </section>

      <section className="hacker-guided-launch">
        <div>
          <span>ITER ANALYTICUM</span>
          <strong>Ruta guiada · entender a Hacker desde cero</strong>
          <p>El verde marca el nodo actual, sus apoyos y el siguiente paso.</p>
        </div>

        <div className="hacker-guided-launch-actions">
          <button type="button" onClick={resetGuided}>Reiniciar ruta</button>
          <button
            type="button"
            className="is-primary"
            onClick={() => {
              if (guidedMode) {
                setGuidedMode(false)
                setSelectedId(null)
                setTimeout(() => fitView({ padding: 0.1, duration: 500 }), 0)
              } else {
                startGlobalGuide()
              }
            }}
          >
            {guidedMode
              ? 'Salir de ruta guiada'
              : guidedScope === 'all'
                ? `Continuar · paso ${guidedIndex + 1}`
                : 'Iniciar ruta general'}
          </button>
        </div>
      </section>

      {guidedMode && guidedCurrent && (
        <section className="hacker-guided-panel">
          <div className="hacker-guided-progress">
            <span>Paso {guidedIndex + 1} de {activeGuidedRoute.length}</span>
            <div>
              <i style={{ width: `${((guidedIndex + 1) / activeGuidedRoute.length) * 100}%` }} />
            </div>
          </div>

          <div className="hacker-guided-phases">
            {guidedScope === 'all' ? (
              hackerGuidedPhases.map((phase) => (
                <span
                  key={phase}
                  className={guidedStep?.phase === phase ? 'is-active' : ''}
                >
                  {phase}
                </span>
              ))
            ) : (
              <span className="is-active">
                Guía temática · {hackerRoutes.find((item) => item.id === guidedScope)?.label}
              </span>
            )}
          </div>

          <div className="hacker-guided-copy">
            <div>
              <span>{guidedStep.phase}</span>
              <strong>{guidedCurrent.data.code} · {guidedCurrent.data.title}</strong>
              <p>{guidedStep.why}</p>
            </div>
            <aside>
              <span>Pregunta que abre el siguiente paso</span>
              <strong>{guidedStep.nextQuestion}</strong>
            </aside>
          </div>

          <div className="hacker-guided-nav">
            <button type="button" disabled={!guidedPrev} onClick={() => jumpGuided(guidedIndex - 1)}>
              ← Anterior
            </button>
            <button type="button" onClick={() => selectNode(guidedCurrent)}>Centrar nodo actual</button>
            <button type="button" disabled={!guidedNext} onClick={() => jumpGuided(guidedIndex + 1)}>
              Siguiente →
            </button>
          </div>
        </section>
      )}

      <section className="hacker-study-routes">
        <div>
          <span>Ruta conceptual</span>
          {hackerRoutes.map((item) => (
            <button
              key={item.id}
              type="button"
              data-class-route={item.id.startsWith('class') ? 'true' : undefined}
              className={route === item.id ? 'is-active' : ''}
              onClick={() => {
                setGuidedMode(false)
                setRoute(item.id)
                setSelectedId(null)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button type="button" onClick={reset}>Ver sistema completo</button>
      </section>

      {route !== 'all' && !guidedMode && (
        <section
          className="hacker-topic-guide-strip"
          style={{ '--concept-color': conceptColor }}
        >
          <div className="hacker-topic-guide-copy">
            <span>ORIENTATIO ANALYTICA</span>
            <strong>
              {hackerRoutes.find((item) => item.id === route)?.label}
            </strong>
            <small>{conceptGuide.length} pasos</small>
          </div>

          <button
            type="button"
            className="hacker-topic-guide-start"
            onClick={() => startTopicGuide(route)}
          >
            <span>▶</span>
            <strong>Iniciar guía</strong>
          </button>

          <div className="hacker-topic-guide-rail">
            {conceptGuide.map((item) => {
              const node = hackerNodeById(item.id)
              return (
                <button
                  key={item.id}
                  type="button"
                  className={selectedId === item.id ? 'is-active' : ''}
                  onClick={() => selectById(item.id)}
                  title={node?.data.title}
                >
                  <b>{item.number}</b>
                  <span>{node?.data.code}</span>
                  <strong>{node?.data.title}</strong>
                </button>
              )
            })}
          </div>
        </section>
      )}

      <section
        ref={workspaceRef}
        className={`hacker-study-workspace ${isFullscreen ? 'is-fullscreen' : ''}`}
      >
        <div className="hacker-flow-panel">
          <div className="hacker-flow-caption">
            <div>
              <span>MAPPA ANALYTICA</span>
              <strong>Moore + Russell → Tractatus → Cambridge / Viena → posguerra</strong>
            </div>
            <div className="hacker-flow-caption-actions">
              <div className="hacker-flow-legend">
                <span>origen</span><span>análisis</span><span>giro</span>
                <span>Viena</span><span>salida</span>
              </div>

              <button
                type="button"
                className="hacker-fullscreen-button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Abrir en pantalla completa'}
                title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
              >
                <span>{isFullscreen ? 'SALIR' : 'PANTALLA COMPLETA'}</span>
                <b>{isFullscreen ? '×' : '↗'}</b>
              </button>
            </div>
          </div>

          <div className="hacker-flow-canvas">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={(_, node) => selectNode(node)}
              onPaneClick={() => {
                if (!guidedMode) setSelectedId(null)
              }}
              fitView
              fitViewOptions={{ padding: 0.08 }}
              minZoom={0.08}
              maxZoom={1.8}
              nodesConnectable={false}
              proOptions={{ hideAttribution: true }}
            >
              <Background gap={28} size={1} />
              <Controls showInteractive={false} />
              <MiniMap pannable zoomable nodeStrokeWidth={3} />
            </ReactFlow>
          </div>
        </div>

        <aside className="hacker-inspector">
          {selected ? (
            <>
              <div className="hacker-inspector-head">
                <span>{selected.data.kind}</span>
                <b>{selected.data.code}</b>
              </div>

              <h2>{selected.data.title}</h2>
              <blockquote>{selected.data.short}</blockquote>

              <section>
                <span>Qué significa</span>
                <p>{selected.data.explanation}</p>
              </section>

              {selected.data.classSeen && (
                <section className="hacker-class-note">
                  <span>
                    {selected.data.classHeader || 'PROF. ALONSO NAVA · OCTAVA CLASE · 14 SEP 2026'}
                  </span>
                  <strong>{selected.data.classLabel || 'VISTO EN CLASE'}</strong>
                  <p style={{ whiteSpace: 'pre-line' }}>{selected.data.classNote}</p>
                  <Link
                    to={
                      selected.data.classRoute ||
                      '/semestre/5/filosofia-analitica/clase/14-septiembre'
                    }
                  >
                    {selected.data.classLinkLabel || 'Abrir octava clase ↗'}
                  </Link>
                </section>
              )}

              <section>
                <span>Función en Hacker</span>
                <p>{selected.data.role}</p>
              </section>

              {selected.data.quote && (
                <section className="is-quote">
                  <span>Texto explícito suministrado</span>
                  <blockquote>{selected.data.quote}</blockquote>
                </section>
              )}

              {selected.data.articleDetail && (
                <section className="hacker-article-detail">
                  <span>AMPLIACIÓN DEL ARTÍCULO</span>
                  <p>{selected.data.articleDetail}</p>
                </section>
              )}

              {selected.data.articlePassages?.length > 0 && (
                <details className="hacker-source-details">
                  <summary>
                    <span>TEXTO ORIGINAL DEL ARTÍCULO</span>
                    <b>{selected.data.articlePage}</b>
                  </summary>

                  <div className="hacker-source-details-body">
                    {selected.data.articlePassages.map((passage, index) => (
                      <article
                        className="hacker-source-passage"
                        key={`${selected.id}-source-${index}`}
                      >
                        <header>
                          <span>{passage.speaker}</span>
                          <b>{passage.page}</b>
                        </header>
                        <blockquote>«{passage.text}»</blockquote>
                      </article>
                    ))}

                    <div className="hacker-source-note">
                      Transcripción tomada del PDF original proporcionado para el reporte.
                    </div>
                  </div>
                </details>
              )}

              {selected.data.example && (
                <section className="is-example">
                  <span>Ejemplo tuyo</span>
                  <p>{selected.data.example}</p>
                </section>
              )}

              <section>
                <span>Depende de</span>
                <div className="hacker-inspector-links">
                  {selected.data.dependsOn.length ? (
                    selected.data.dependsOn.map((id) => {
                      const dep = hackerNodeById(id)
                      return (
                        <button key={id} type="button" onClick={() => selectById(id)}>
                          {dep?.data.code || id}
                          <small>{dep?.data.title}</small>
                        </button>
                      )
                    })
                  ) : (
                    <em>Fundamento inicial</em>
                  )}
                </div>
              </section>

              <section>
                <span>Produce</span>
                <div className="hacker-inspector-links">
                  {selected.data.produces.length ? (
                    selected.data.produces.map((id) => {
                      const produced = hackerNodeById(id)
                      return (
                        <button key={id} type="button" onClick={() => selectById(id)}>
                          {produced?.data.code || id}
                          <small>{produced?.data.title}</small>
                        </button>
                      )
                    })
                  ) : (
                    <em>Sin consecuencia directa registrada.</em>
                  )}
                </div>
              </section>

              <section>
                <span>Conceptos</span>
                <div className="hacker-inspector-tags">
                  {selected.data.concepts.map((concept) => (
                    <b key={concept}>{concept}</b>
                  ))}
                </div>
              </section>

              <footer>
                <span>Fuente en la sistematización</span>
                <strong>{selected.data.page}</strong>
              </footer>
            </>
          ) : (
            <div className="hacker-inspector-empty">
              <span>SELECTIO</span>
              <strong>Seleccione un nodo</strong>
              <p>Se iluminarán sus dependencias y consecuencias inmediatas.</p>
            </div>
          )}

          {guidedMode && guidedCurrent && (
            <div className="hacker-inspector-guided-nav">
              <button
                type="button"
                disabled={!guidedPrev}
                onClick={() => jumpGuided(guidedIndex - 1)}
              >
                ← Atrás
              </button>

              <div className="hacker-inspector-guided-step">
                <span>Guía</span>
                <strong>
                  {guidedIndex + 1} / {activeGuidedRoute.length}
                </strong>
              </div>

              <button
                type="button"
                disabled={!guidedNext}
                onClick={() => jumpGuided(guidedIndex + 1)}
              >
                Siguiente →
              </button>
            </div>
          )}
        </aside>
      </section>

      <section className="hacker-study-history">
        <span>Iter argumenti</span>
        <div>
          {history.map((id, index) => {
            const node = hackerNodeById(id)
            return (
              <span key={`${id}-${index}`}>
                {index > 0 && <b>→</b>}
                <button type="button" onClick={() => selectById(id)}>
                  {node?.data.code || id}
                </button>
              </span>
            )
          })}
        </div>
      </section>

      <section className="hacker-study-next">
        <span>Arquitectura de la lectura</span>
        <div>
          <article><b>01</b><strong>Definición</strong><p>Dummett, Frege y qué cuenta como análisis.</p></article>
          <article><b>02</b><strong>Doble origen</strong><p>Moore conceptual · Russell lógico/reductivo.</p></article>
          <article><b>03</b><strong>Giro</strong><p>Tractatus y seis sentidos del giro lingüístico.</p></article>
          <article><b>04</b><strong>Entreguerras</strong><p>Cambridge y los cinco elementos de Viena.</p></article>
          <article><b>05</b><strong>Colapso</strong><p>Ocho dificultades y paso a análisis conectivo/terapéutico.</p></article>
        </div>
      </section>

      <footer className="hacker-study-footer">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <span>Peter M. S. Hacker · segundo reporte</span>
        <Link to="/tareas">Calendario ↗</Link>
      </footer>
    </div>
  )
}

export default function AnalyticHackerSystem() {
  return (
    <ReactFlowProvider>
      <StudyCanvas />
    </ReactFlowProvider>
  )
}
