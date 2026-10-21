import SectionPedagogy from '../components/philosophy/system2d/SectionPedagogy'
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
  hackerCompleteGuidedRoute,
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
  if (route === 'all') return hackerCompleteGuidedRoute
  if (route === 'article') return hackerGuidedRoute

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
          ? `Siguiente tema de lectura (orden editorial): ${next.data.title}`
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
        ? Math.min(Math.max(saved, 0), hackerCompleteGuidedRoute.length - 1)
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
          route !== 'all'
            ? thematicLayout.get(node.id) || node.position
            : node.position,
        hidden:
          route !== 'all' &&
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

    // El avance de la guía no crea una arista filosófica entre temas contiguos.
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

  // Wait for React Flow to commit the active route's coordinates before moving
  // the camera. Immediate setCenter calls used obsolete full-map coordinates.
  useEffect(() => {
    if (!selectedId) return
    let nextFrame = null
    const firstFrame = window.requestAnimationFrame(() => {
      nextFrame = window.requestAnimationFrame(() => {
        const node = hackerNodeById(selectedId)
        if (!node) return
        const position = route !== 'all'
          ? thematicLayout.get(node.id) || node.position
          : node.position
        setCenter(position.x + 112.5, position.y + 72.5, {
          zoom: 1.02,
          duration: 350,
        })
      })
    })
    return () => {
      window.cancelAnimationFrame(firstFrame)
      if (nextFrame !== null) window.cancelAnimationFrame(nextFrame)
    }
  }, [selectedId, route, guidedMode, guidedIndex, thematicLayout, setCenter])

  useEffect(() => {
    if (guidedMode || route === 'all' || selectedId) return
    const timer = window.setTimeout(() => {
      const width = workspaceRef.current
        ?.querySelector('.hacker-flow-canvas')?.getBoundingClientRect().width || 0
      if (width < 900) {
        // On tablets a full-route fit can shrink each node to an unreadable dot.
        const node = [...routeNodes].sort((a, b) => orderIndex(a.id) - orderIndex(b.id))[0]
        if (!node) return
        const point = thematicLayout.get(node.id) || node.position
        setCenter(point.x + 112.5, point.y + 72.5, { zoom: 0.92, duration: 400 })
        return
      }
      const active = getNodes().filter((node) => node.data.topicActive || node.data.topicSupport)
      if (active.length) fitView({ nodes: active, padding: 0.18, duration: 600, maxZoom: 0.95 })
    }, 140)
    return () => window.clearTimeout(timer)
  }, [route, guidedMode, selectedId, routeNodes, thematicLayout, getNodes, fitView, setCenter])

  const selectNode = useCallback((node) => {
    if (!node) return
    setSelectedId(node.id)
    setHistory((current) => {
      if (current[current.length - 1] === node.id) return current
      return [...current.slice(-9), node.id]
    })
    // The post-render effect above centers the displayed (not source) position.
  }, [])

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
    setRoute(guidedScope === 'all' || guidedScope === 'article' ? 'all' : guidedScope)
    setSelectedId(node.id)

    if (guidedScope === 'all') {
      try {
        window.localStorage.setItem(
          'philosophia-hacker-guided-step',
          String(safe),
        )
      } catch {}
    }

    // Camera focus is applied after React Flow renders this guide step.
  }, [activeGuidedRoute, guidedScope])

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

    // Keep thematic coordinates while guided; deferred effect follows selection.
  }, [])

  const startGlobalGuide = useCallback((scope = 'all') => {
    const sequence = scope === 'article' ? hackerGuidedRoute : hackerCompleteGuidedRoute
    const safe = Math.min(
      Math.max(guidedScope === scope ? guidedIndex : 0, 0),
      sequence.length - 1,
    )
    const node = hackerNodeById(sequence[safe]?.id)
    if (!node) return

    setGuidedScope(scope)
    setGuidedMode(true)
    setGuidedIndex(safe)
    setRoute('all')
    setSelectedId(node.id)

    // El mapa conserva coordenadas globales hasta que React Flow confirma el render.
  }, [guidedIndex, guidedScope])

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
        <span>Segundo reporte · pp. 95–132 · cierre 14 oct 2026</span>
      </nav>

      <header className="hacker-study-hero">
        <div className="hacker-study-mark" aria-label="Número de nodos">{hackerNodes.length}</div>
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

      <section className="hacker-source-coverage" aria-label="Avance de cotejo bibliográfico">
        <div>
          <span>FUENTE PRIMARIA · LECTURA ÍNTEGRA</span>
          <strong>Ensayo cotejado · páginas 95–132</strong>
          <p>Los 68 nodos bibliográficos incluyen tesis, reconstrucción del argumento, distinciones conceptuales y orientación para el reporte. La capa de las siete clases sigue identificada por separado.</p>
        </div>
        <button type="button" onClick={() => { setGuidedMode(false); setRoute('source95to132'); setSelectedId(null) }}>
          Explorar el ensayo completo · 68 nodos →
        </button>
      </section>

      <section className="hacker-study-intro">
        <div>
          <span>MAPPA ANALYTICA</span>
          <strong>{hackerNodes.length} nodos · un solo plano 2D</strong>
        </div>
        <p>
          La navegación replica la lógica del sistema de Spinoza:
          seleccione un nodo, siga dependencias, filtre rutas o active el recorrido guiado.
        </p>
      </section>

      <section className="hacker-guided-launch">
        <div>
          <span>ITER ANALYTICUM</span>
          <strong>Dos recorridos: artículo y dossier completo</strong>
          <p>Artículo: {hackerGuidedRoute.length} pasos. Integral: {hackerCompleteGuidedRoute.length} pasos, incluidas las ampliaciones docentes.</p>
        </div>

        <div className="hacker-guided-launch-actions">
          <button type="button" onClick={resetGuided}>Reiniciar ruta</button>
          <button type="button" onClick={() => startGlobalGuide('article')}>
            Guía del artículo · {hackerGuidedRoute.length}
          </button>
          <button
            type="button"
            className="is-primary"
            onClick={() => {
              if (guidedMode) {
                setGuidedMode(false)
                setSelectedId(null)
                setTimeout(() => fitView({ padding: 0.1, duration: 500 }), 0)
              } else {
                startGlobalGuide('all')
              }
            }}
          >
            {guidedMode
              ? 'Salir de ruta guiada'
              : guidedScope === 'all'
                ? `Continuar guía integral · paso ${guidedIndex + 1}`
                : `Guía integral · ${hackerCompleteGuidedRoute.length}`}
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
            {guidedScope === 'all' || guidedScope === 'article' ? (
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
          <SectionPedagogy
            nodes={hackerNodes}
            routes={hackerRoutes}
            nodeOrder={hackerOrder}
            activeRoute={route}
            selectedId={selectedId}
            onSectionChange={(id) => { setGuidedMode(false); setRoute(id); setSelectedId(null) }}
            onFocusNode={(id) => {
              setGuidedMode(false)
              selectById(id)
            }}
          />

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

              <section className="hacker-plain-language" aria-label="En palabras simples">
                <span>EN PALABRAS SIMPLES:</span>
                <p>{selected.data.plainLanguage}</p>
                <small>{selected.data.plainLanguageSource}</small>
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


              {selected.data.additionalClassNotes?.map((item) => (
                <section className="hacker-class-note" key={item.date + item.label}>
                  <span>EXPLICACIÓN DOCENTE · {item.date}</span>
                  <strong>{item.label}</strong>
                  <p>{item.note}</p>
                  <Link to={item.route}>{item.linkLabel || 'Abrir clase documentada ↗'}</Link>
                </section>
              ))}

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

              {selected.data.sourceCloseReading && (
                <section className="hacker-deep-reading" aria-label="Lectura cotejada de la fuente primaria">
                  <div className="hacker-deep-reading-heading">
                    <span>LECTURA DE FUENTE · {selected.data.sourceCloseReading.page}</span>
                    <strong>{selected.data.sourceCloseReading.focus}</strong>
                    <small>{selected.data.sourceCloseReading.kind} · 21 OCT 2026</small>
                  </div>
                  <div className="hacker-deep-reading-part">
                    <h3>¿Qué afirma el texto?</h3>
                    <p>{selected.data.sourceCloseReading.reading}</p>
                  </div>
                  <div className="hacker-deep-reading-part">
                    <h3>¿Cómo funciona el argumento?</h3>
                    <p>{selected.data.sourceCloseReading.argument}</p>
                  </div>
                  <div className="hacker-deep-reading-part">
                    <h3>Distinción que debe conservarse</h3>
                    <p>{selected.data.sourceCloseReading.distinction}</p>
                  </div>
                  <div className="hacker-deep-reading-part is-report">
                    <h3>Para elaborar el reporte</h3>
                    <p>{selected.data.sourceCloseReading.report}</p>
                  </div>
                  {selected.data.sourceCloseReading.boundary && (
                    <p className="hacker-deep-reading-boundary" role="note">
                      {selected.data.sourceCloseReading.boundary}
                    </p>
                  )}
                </section>
              )}

              {selected.data.sourceContinuation && (
                <section className="hacker-deep-reading hacker-deep-reading-continuation" aria-label="Continuación cotejada de Russell">
                  <div className="hacker-deep-reading-heading">
                    <span>CONTINUACIÓN DE LA FUENTE · {selected.data.sourceContinuation.page}</span>
                    <strong>{selected.data.sourceContinuation.focus}</strong>
                    <small>{selected.data.sourceContinuation.kind}</small>
                  </div>
                  <div className="hacker-deep-reading-part">
                    <h3>¿Qué completa Hacker en la página siguiente?</h3>
                    <p>{selected.data.sourceContinuation.reading}</p>
                  </div>
                  <div className="hacker-deep-reading-part">
                    <h3>Reconstrucción del argumento</h3>
                    <p>{selected.data.sourceContinuation.argument}</p>
                  </div>
                  <div className="hacker-deep-reading-part">
                    <h3>Distinción conceptual</h3>
                    <p>{selected.data.sourceContinuation.distinction}</p>
                  </div>
                  <div className="hacker-deep-reading-part is-report">
                    <h3>Aplicación al reporte</h3>
                    <p>{selected.data.sourceContinuation.report}</p>
                  </div>
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
                      Pasajes del material bibliográfico empleado en el reporte, con localizador propio.
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
          <article><b>01</b><strong>La filosofía analítica · pp. 95–103</strong><p>Tesis, Dummett y Frege. Apoyo de la clase del 14 de septiembre.</p></article>
          <article><b>02</b><strong>La primera etapa · pp. 103–117</strong><p>Moore y Russell. Clases del 21, 23 y 28 de septiembre.</p></article>
          <article><b>03</b><strong>El giro lingüístico · pp. 117–125</strong><p>Tractatus y seis aspectos del giro. Clases del 14 y 30 de septiembre.</p></article>
          <article><b>04</b><strong>Cambridge y Viena · pp. 125–132</strong><p>Programas y ocho dificultades. Clases del 7 y 14 de octubre.</p></article>
          <article><b>05</b><strong>Conclusión crítica del reporte</strong><p>Evaluar la unidad histórica de la tradición. La posguerra es continuidad indicada, no capítulo desarrollado.</p></article>
        </div>
      </section>

      <section className="hacker-study-next" aria-label="Síntesis de la obra cotejada">
        <span>LECTURA COMPLETA · ARQUITECTURA DEL ENSAYO</span>
        <div>
          <article><b>01</b><strong>El concepto de filosofía analítica · 95–103</strong><p>Definición histórica frente a Dummett; Frege y los dos Wittgenstein; análisis no psicologista y doble raíz de Cambridge.</p></article>
          <article><b>02</b><strong>Moore y Russell · 103–117</strong><p>Realismo, análisis conceptual, relaciones externas, lógica matemática, símbolos incompletos, construcciones lógicas y teoría de tipos.</p></article>
          <article><b>03</b><strong>Tractatus · 117–125</strong><p>Sentido, proyección, tautologías, filosofía como clarificación y seis aspectos del giro lingüístico, con crítica de la metafísica del símbolo.</p></article>
          <article><b>04</b><strong>Cambridge y Viena · 125–132</strong><p>Recepciones diferentes; cinco programas de Viena y ocho objeciones que llevan a superar la reducción como único ideal.</p></article>
          <article><b>05</b><strong>Conclusión interpretativa</strong><p>De la descomposición conceptual y lógica a la crítica del lenguaje, y del análisis reductivo hacia una nueva fase conectiva y terapéutica que Hacker no desarrolla aquí.</p></article>
        </div>
      </section>

      <section className="hacker-study-next" aria-label="Criterio académico para el reporte">
        <span>Cómo elaborar el reporte sin mezclar fuentes</span>
        <div>
          <article><b>01</b><strong>Texto de Hacker</strong><p>Reconstruya las tesis de pp. 95–132, respetando los cuatro apartados bibliográficos.</p></article>
          <article><b>02</b><strong>Explicación docente</strong><p>Incorpore ejemplos de las siete clases con fecha explícita, sin atribuirlos al autor.</p></article>
          <article><b>03</b><strong>Evaluación propia</strong><p>Distinga su crítica del contenido del autor; el orden de nodos no implica deducción.</p></article>
        </div>
      </section>

      <section className="hacker-study-next" aria-label="Procedencia del segundo reporte">
        <span>Procedencia del segundo reporte · capas de lectura diferenciadas</span>
        <div>
          <article>
            <b>68</b><strong>Núcleos del artículo</strong>
            <p>Lectura de Hacker, pp. 95–132; tesis, seis sentidos del giro y ocho dificultades.</p>
          </article>
          <article>
            <b>54</b><strong>Ampliaciones docentes</strong>
            <p>Nodos docentes de esas cinco sesiones; otras dos clases se enlazan al artículo sin duplicar contenidos.</p>
          </article>
          <article>
            <b>07</b><strong>Sesiones cotejadas</strong>
            <p>Rutas del 14, 21, 23, 28 y 30 de septiembre, y del 7 y 14 de octubre; las dos sesiones añadidas reutilizan nodos existentes.</p>
          </article>
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
