import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import {
  Background, Controls, MarkerType, MiniMap,
  ReactFlow, ReactFlowProvider, useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

import GlockNode from '../components/analytic/GlockNode.jsx'
import SectionPedagogy from '../components/philosophy/system2d/SectionPedagogy.jsx'
import { initialSystem2DRoute, useSystem2DCompactViewport } from '../components/philosophy/system2d/mobilePerformance.js'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema.jsx'
import { SYSTEM_2D_THEME, resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme.js'
import {
  GLOCK_GEOMETRY, glockGuidedPhases, glockGuidedRoute,
  glockLinks, glockMethodSchema, glockNodeById, glockNodeOrder,
  glockNodes, glockRouteTones, glockRoutes,
} from '../data/glockAnalyticChapter2.js'
import './AnalyticGlockSystem.css'

const nodeTypes = { glock: GlockNode }

function orderIndex(id) {
  const index = glockNodeOrder.indexOf(id)
  return index === -1 ? 999 : index
}

function selectionSetFor(id) {
  if (!id) return new Set()
  const set = new Set([id])
  glockLinks.forEach((edge) => {
    if (edge.source === id) set.add(edge.target)
    if (edge.target === id) set.add(edge.source)
  })
  return set
}

function routeNodesFor(route) {
  return route === 'all'
    ? glockNodes
    : glockNodes.filter((node) => node.data.section === route)
}

function buildConceptGuide(route) {
  return routeNodesFor(route)
    .slice()
    .sort((a, b) => orderIndex(a.id) - orderIndex(b.id))
    .map((node, index) => ({
      id: node.id,
      number: String(index + 1).padStart(2, '0'),
    }))
}

function buildGuidedRouteFor(route) {
  if (route === 'all') return glockGuidedRoute
  const label = glockRoutes.find((item) => item.id === route)?.label || route
  const ids = buildConceptGuide(route).map((item) => item.id)
  return ids.map((id, index) => {
    const node = glockNodeById(id)
    const next = glockNodeById(ids[index + 1])
    return {
      id,
      phase: label,
      why: node?.data.explanation || '',
      nextQuestion: node?.data.question ||
        (next ? `¿Cómo conduce este punto a «${next.data.title}»?` : `Fin de ${label}.`),
    }
  })
}

function StudyCanvas() {
  const [route, setRoute] = useState(() => initialSystem2DRoute(glockRoutes))
  const compactViewport = useSystem2DCompactViewport()
  const [selectedId, setSelectedId] = useState('G00')
  const [history, setHistory] = useState(['G00'])
  const [guidedMode, setGuidedMode] = useState(false)
  const [guidedScope, setGuidedScope] = useState('all')
  const [guidedIndex, setGuidedIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showMinimap, setShowMinimap] = useState(false)
  const workspaceRef = useRef(null)
  const { fitView, setCenter, getNodes } = useReactFlow()

  const selected = glockNodeById(selectedId)
  const selectionSet = useMemo(() => selectionSetFor(selectedId), [selectedId])
  const activeGuidedRoute = useMemo(() => buildGuidedRouteFor(guidedScope), [guidedScope])
  const guidedStep = activeGuidedRoute[guidedIndex] || null
  const guidedCurrent = guidedStep ? glockNodeById(guidedStep.id) : null
  const guidedNext = activeGuidedRoute[guidedIndex + 1] || null
  const guidedPrev = activeGuidedRoute[guidedIndex - 1] || null
  const guidedCompletedIds = useMemo(
    () => new Set(activeGuidedRoute.slice(0, guidedIndex).map((step) => step.id)),
    [activeGuidedRoute, guidedIndex],
  )

  const routeNodes = useMemo(() => routeNodesFor(route), [route])
  const routeIds = useMemo(() => new Set(routeNodes.map((node) => node.id)), [routeNodes])
  const supportIds = useMemo(() => {
    if (route === 'all') return new Set()
    const support = new Set()
    routeNodes.forEach((node) => {
      ;[...(node.data.dependsOn || []), ...(node.data.produces || [])].forEach((id) => {
        if (!routeIds.has(id)) support.add(id)
      })
    })
    return support
  }, [route, routeNodes, routeIds])

  const conceptGuide = useMemo(() => buildConceptGuide(route), [route])
  const conceptGuideMap = useMemo(
    () => new Map(conceptGuide.map((item) => [item.id, item])),
    [conceptGuide],
  )
  const conceptTone = route === 'all' ? 'gold' : (glockRouteTones[route] || 'gold')
  const conceptColor = SYSTEM_2D_THEME.nodeTopics[conceptTone]

  const thematicLayout = useMemo(() => {
    if (route === 'all') return new Map()
    const active = [...routeNodes].sort((a, b) => orderIndex(a.id) - orderIndex(b.id))
    const layout = new Map()
    const rows = 3

    active.forEach((node, index) => {
      const col = Math.floor(index / rows)
      const row = index % rows
      layout.set(node.id, {
        x: 390 + col * (GLOCK_GEOMETRY.width + 130),
        y: 90 + row * (GLOCK_GEOMETRY.height + 95),
      })
    })

    ;[...supportIds]
      .map((id) => glockNodeById(id))
      .filter(Boolean)
      .sort((a, b) => orderIndex(a.id) - orderIndex(b.id))
      .forEach((node, index) => {
        layout.set(node.id, {
          x: 35,
          y: 90 + index * (GLOCK_GEOMETRY.height + 75),
        })
      })

    return layout
  }, [route, routeNodes, supportIds])

  const nodes = useMemo(() => glockNodes.map((node) => {
    const topicActive = route !== 'all' && routeIds.has(node.id)
    const topicSupport = route !== 'all' && supportIds.has(node.id)
    const inSelection = selectionSet.has(node.id)
    const isGuidedCurrent = guidedMode && node.id === guidedStep?.id
    const isGuidedNext = guidedMode && node.id === guidedNext?.id
    const isGuidedCompleted = guidedMode && guidedCompletedIds.has(node.id)
    const isGuidedSupport = guidedMode &&
      Boolean(guidedCurrent?.data.dependsOn?.includes(node.id))

    return {
      ...node,
      selected: node.id === selectedId,
      position: route !== 'all'
        ? thematicLayout.get(node.id) || node.position
        : node.position,
      hidden: route !== 'all' && !topicActive && !topicSupport && node.id !== selectedId,
      draggable: false,
      data: {
        ...node.data,
        topicActive,
        topicSupport,
        topicColor: conceptColor,
        conceptNumber: conceptGuideMap.get(node.id)?.number || null,
        guidedCurrent: isGuidedCurrent,
        guidedNext: isGuidedNext,
        guidedCompleted: isGuidedCompleted,
        guidedSupport: isGuidedSupport,
        dimmed: guidedMode
          ? !isGuidedCurrent && !isGuidedNext && !isGuidedCompleted &&
            !isGuidedSupport && node.id !== selectedId
          : selectedId !== null
            ? !inSelection
            : route !== 'all'
              ? !topicActive && !topicSupport
              : false,
        highlighted: !guidedMode && selectedId !== null &&
          inSelection && node.id !== selectedId,
      },
    }
  }), [
    route, routeIds, supportIds, selectionSet, selectedId, guidedMode,
    guidedStep, guidedNext, guidedCompletedIds, guidedCurrent,
    thematicLayout, conceptColor, conceptGuideMap,
  ])

  const edges = useMemo(() => {
    const base = glockLinks.map((edge) => {
      const selectedTouches = Boolean(selectedId) &&
        (edge.source === selectedId || edge.target === selectedId)
      const sourceActive = route === 'all' || routeIds.has(edge.source)
      const targetActive = route === 'all' || routeIds.has(edge.target)
      const routeActive = route !== 'all' && sourceActive && targetActive
      const supportEdge = route !== 'all' &&
        ((supportIds.has(edge.source) && targetActive) ||
         (supportIds.has(edge.target) && sourceActive))
      const guidedDependency = guidedMode &&
        edge.target === guidedStep?.id &&
        guidedCurrent?.data.dependsOn?.includes(edge.source)
      const visibleInRoute = route === 'all' || routeActive || supportEdge ||
        edge.source === selectedId || edge.target === selectedId
      const color = resolveSystem2DEdgeColor({
        guidedActive: guidedDependency,
        conceptual: edge.critical,
        conceptualType: edge.critical ? 'analogy' : null,
        touchesSelected: selectedTouches,
      })

      return {
        ...edge,
        hidden: !visibleInRoute,
        label: undefined,
        type: 'smoothstep',
        style: {
          stroke: color,
          strokeWidth: guidedDependency ? 2.8 : selectedTouches ? 3 : routeActive ? 2 : 1.15,
          opacity: guidedMode
            ? guidedDependency ? 1 : 0.08
            : selectedId
              ? selectedTouches ? 1 : 0.08
              : route === 'all' ? 0.28 : routeActive ? 0.9 : 0.5,
          strokeDasharray: edge.critical ? '6 5' : undefined,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: selectedTouches ? 14 : 10,
          height: selectedTouches ? 14 : 10,
          color,
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
        style: {
          stroke: SYSTEM_2D_THEME.edge.guided,
          strokeWidth: 2.8,
          opacity: 1,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 12,
          height: 12,
          color: SYSTEM_2D_THEME.edge.guided,
        },
      })
    }
    return base
  }, [
    selectedId, route, routeIds, supportIds,
    guidedMode, guidedStep, guidedCurrent, guidedNext,
  ])

  useEffect(() => {
    if (!selectedId) return
    let secondFrame = null
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        const node = glockNodeById(selectedId)
        if (!node) return
        const point = route !== 'all'
          ? thematicLayout.get(node.id) || node.position
          : node.position
        setCenter(
          point.x + GLOCK_GEOMETRY.width / 2,
          point.y + GLOCK_GEOMETRY.height / 2,
          { zoom: 1.02, duration: 380 },
        )
      })
    })
    return () => {
      window.cancelAnimationFrame(firstFrame)
      if (secondFrame !== null) window.cancelAnimationFrame(secondFrame)
    }
  }, [selectedId, route, guidedMode, guidedIndex, thematicLayout, setCenter])

  useEffect(() => {
    if (guidedMode || route === 'all' || selectedId) return
    const timer = window.setTimeout(() => {
      const canvasWidth = workspaceRef.current
        ?.querySelector('.glock-flow-canvas')?.getBoundingClientRect().width || 0
      const active = getNodes().filter((node) =>
        node.data.topicActive || node.data.topicSupport)
      if (!active.length) return

      if (canvasWidth < 900) {
        const first = [...routeNodes].sort((a, b) => orderIndex(a.id) - orderIndex(b.id))[0]
        if (!first) return
        const point = thematicLayout.get(first.id) || first.position
        setCenter(
          point.x + GLOCK_GEOMETRY.width / 2,
          point.y + GLOCK_GEOMETRY.height / 2,
          { zoom: 0.94, duration: 420 },
        )
        return
      }

      fitView({ nodes: active, padding: 0.18, duration: 620, maxZoom: 0.92 })
    }, 150)
    return () => window.clearTimeout(timer)
  }, [
    route, guidedMode, selectedId, routeNodes, thematicLayout,
    getNodes, fitView, setCenter,
  ])

  useEffect(() => {
    const updateFullscreen = () => {
      const active = document.fullscreenElement || document.webkitFullscreenElement
      setIsFullscreen(active === workspaceRef.current)
      window.setTimeout(() => fitView({ padding: 0.08, duration: 360, maxZoom: 1 }), 100)
    }
    document.addEventListener('fullscreenchange', updateFullscreen)
    document.addEventListener('webkitfullscreenchange', updateFullscreen)
    return () => {
      document.removeEventListener('fullscreenchange', updateFullscreen)
      document.removeEventListener('webkitfullscreenchange', updateFullscreen)
    }
  }, [fitView])

  const toggleFullscreen = useCallback(async () => {
    if (!workspaceRef.current) return
    try {
      const active = document.fullscreenElement || document.webkitFullscreenElement
      if (active === workspaceRef.current) {
        if (document.exitFullscreen) await document.exitFullscreen()
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
      } else if (workspaceRef.current.requestFullscreen) {
        await workspaceRef.current.requestFullscreen()
      } else if (workspaceRef.current.webkitRequestFullscreen) {
        workspaceRef.current.webkitRequestFullscreen()
      }
    } catch {
      setIsFullscreen((value) => !value)
    }
  }, [])

  const selectNode = useCallback((node) => {
    if (!node) return
    setSelectedId(node.id)
    setHistory((current) =>
      current[current.length - 1] === node.id
        ? current
        : [...current.slice(-10), node.id])
  }, [])

  const selectById = useCallback((id) => {
    const node = glockNodeById(id)
    if (!node) return
    if (route !== 'all' && node.data.section !== route && !supportIds.has(id)) {
      setRoute(node.data.section)
    }
    selectNode(node)
  }, [route, supportIds, selectNode])

  const changeRoute = useCallback((id) => {
    setGuidedMode(false)
    setGuidedScope(id)
    setGuidedIndex(0)
    setSelectedId(null)
    setRoute(id)
  }, [])

  const jumpGuided = useCallback((index) => {
    if (!activeGuidedRoute.length) return
    const safe = Math.min(Math.max(index, 0), activeGuidedRoute.length - 1)
    const step = activeGuidedRoute[safe]
    const node = step ? glockNodeById(step.id) : null
    if (!node) return
    setGuidedMode(true)
    setGuidedIndex(safe)
    setRoute(guidedScope)
    setSelectedId(node.id)
  }, [activeGuidedRoute, guidedScope])

  const startTopicGuide = useCallback((routeId) => {
    const first = buildGuidedRouteFor(routeId)[0]
    if (!first) return
    setGuidedScope(routeId)
    setGuidedIndex(0)
    setGuidedMode(true)
    setRoute(routeId)
    setSelectedId(first.id)
  }, [])

  const startGlobalGuide = useCallback(() => {
    const safe = guidedScope === 'all'
      ? Math.min(guidedIndex, glockGuidedRoute.length - 1)
      : 0
    setGuidedScope('all')
    setGuidedMode(true)
    setGuidedIndex(safe)
    setRoute('all')
    setSelectedId(glockGuidedRoute[safe]?.id || 'G00')
  }, [guidedIndex, guidedScope])

  const reset = useCallback(() => {
    setGuidedMode(false)
    setGuidedScope('all')
    setGuidedIndex(0)
    setRoute('all')
    setSelectedId('G00')
  }, [])

  const fitCurrentRoute = useCallback(() => {
    const visible = getNodes().filter((node) => !node.hidden)
    if (visible.length) {
      fitView({ nodes: visible, padding: 0.16, duration: 420, maxZoom: 0.92 })
    }
  }, [fitView, getNodes])

  const relationships = useMemo(
    () => glockLinks.filter((edge) =>
      edge.source === selectedId || edge.target === selectedId),
    [selectedId],
  )

  const architecture = useMemo(
    () => glockRoutes.filter((item) => item.id !== 'all').map((item, index) => {
      const members = glockNodes
        .filter((node) => node.data.section === item.id)
        .sort((a, b) => orderIndex(a.id) - orderIndex(b.id))
      return {
        ...item,
        number: String(index + 1).padStart(2, '0'),
        first: members[0],
        last: members[members.length - 1],
        count: members.length,
      }
    }),
    [],
  )

  return (
    <main className="glock-shell ph2d-shell">
      <nav className="glock-study-nav">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="glock-study-brand">Φ · Philosophia</Link>
        <span>Glock · capítulo II · 2026-B</span>
      </nav>

      <header className="glock-study-hero">
        <div className="glock-study-mark" aria-label="Número de nodos">{glockNodes.length}</div>
        <div>
          <p>HANS-JOHANN GLOCK · SISTEMA HISTÓRICO-CONCEPTUAL</p>
          <h1>Breve panorama <em>histórico</em></h1>
          <p className="glock-study-lead">
            De dos sentidos antiguos del análisis a Kant, el idealismo y las
            reacciones naturalista y neokantiana.
          </p>
        </div>
        <aside>
          <span>RECONSTRUCCIÓN RECTORA</span>
          <strong>analizar = partir de algo dado y buscar su fundamento</strong>
          <b>concepto → componentes · proposición → principios</b>
          <small>Glock, cap. II · pp. 40–45 + comienzo de 46</small>
        </aside>
      </header>

      <section className="glock-study-intro">
        <div>
          <span>FRONTERA DE FUENTE</span>
          <strong>{glockNodes.length} nodos · 7 rutas documentales</strong>
        </div>
        <p>
          Se conservan separadas cuatro capas: texto de Glock, reconstrucción de
          estudio, explicación de la clase del 19 de octubre y relaciones
          editoriales rotuladas como tales. El resto de la p. 46 y las pp. 47–86
          siguen pendientes.
        </p>
      </section>

      <section className="glock-guided-launch">
        <div>
          <span>ITER GLOCKIANUM</span>
          <strong>Ruta guiada · recorrer el capítulo recibido desde cero</strong>
          <p>Verde = paso actual; dorado = selección; el inspector conserva fuente y clase separadas.</p>
        </div>
        <div className="glock-guided-launch-actions">
          <button type="button" onClick={reset}>Reiniciar</button>
          <button
            type="button"
            className="is-primary"
            onClick={() => {
              if (guidedMode) setGuidedMode(false)
              else startGlobalGuide()
            }}
          >
            {guidedMode ? 'Salir de guía' : 'Iniciar / continuar guía'}
          </button>
        </div>
      </section>

      {guidedMode && guidedCurrent && (
        <section className="glock-guided-panel">
          <div className="glock-guided-progress">
            <span>Paso {guidedIndex + 1} de {activeGuidedRoute.length}</span>
            <div><i style={{ width: `${((guidedIndex + 1) / activeGuidedRoute.length) * 100}%` }} /></div>
          </div>

          <div className="glock-guided-phases">
            {guidedScope === 'all'
              ? glockGuidedPhases.map((phase) => (
                  <span key={phase} className={guidedStep.phase === phase ? 'is-active' : ''}>
                    {phase}
                  </span>
                ))
              : <span className="is-active">
                  Guía temática · {glockRoutes.find((item) => item.id === guidedScope)?.label}
                </span>}
          </div>

          <div className="glock-guided-copy">
            <div>
              <span>{guidedStep.phase}</span>
              <strong>{guidedCurrent.data.code} · {guidedCurrent.data.title}</strong>
              <p>{guidedStep.why}</p>
            </div>
            <aside>
              <span>Pregunta de estudio</span>
              <strong>{guidedStep.nextQuestion}</strong>
            </aside>
          </div>

          <div className="glock-guided-nav">
            <button type="button" disabled={!guidedPrev} onClick={() => jumpGuided(guidedIndex - 1)}>← Anterior</button>
            <button type="button" onClick={() => selectNode(guidedCurrent)}>Centrar nodo actual</button>
            <button type="button" disabled={!guidedNext} onClick={() => jumpGuided(guidedIndex + 1)}>Siguiente →</button>
          </div>
        </section>
      )}

      <section className="glock-study-routes">
        <div>
          <span>Ruta conceptual</span>
          {glockRoutes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={route === item.id ? 'is-active' : ''}
              onClick={() => changeRoute(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button type="button" onClick={reset}>Ver sistema completo</button>
      </section>

      {route !== 'all' && !guidedMode && (
        <section className="glock-topic-guide-strip" style={{ '--ph2d-route-accent': conceptColor }}>
          <div className="glock-topic-guide-copy">
            <span>ORIENTATIO ANALYTICA</span>
            <strong>{glockRoutes.find((item) => item.id === route)?.label}</strong>
            <small>{conceptGuide.length} pasos</small>
          </div>

          <button type="button" className="glock-topic-guide-start" onClick={() => startTopicGuide(route)}>
            <span>▶</span>
            <strong>Iniciar guía</strong>
          </button>

          <div className="glock-topic-guide-rail">
            {conceptGuide.map((item) => {
              const node = glockNodeById(item.id)
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

      <section ref={workspaceRef} className={`glock-study-workspace ${isFullscreen ? 'is-fullscreen' : ''}`}>
        <div className="glock-flow-panel">
          <div className="glock-flow-caption">
            <div>
              <span>MAPPA ANALYTICA</span>
              <strong>
                {route === 'all'
                  ? 'análisis → racionalismo / empirismo → Kant → reacciones'
                  : glockRoutes.find((item) => item.id === route)?.label}
              </strong>
            </div>
            <div className="glock-flow-caption-actions">
              <div className="glock-flow-legend" aria-label="Leyenda">
                <span>familia</span><span>selección</span><span>guía</span><span>clase</span>
              </div>
              <button type="button" onClick={fitCurrentRoute}>ENCUADRAR</button>
              <button type="button" onClick={() => setShowMinimap((value) => !value)}>
                {showMinimap ? 'OCULTAR MINI' : 'MINIMAPA'}
              </button>
              <button type="button" className="glock-fullscreen-button" onClick={toggleFullscreen}>
                {isFullscreen ? 'SALIR ×' : 'PANTALLA COMPLETA ↗'}
              </button>
            </div>
          </div>

          <div className="glock-flow-canvas" aria-label="Mapa interactivo del capítulo de Glock">
            <ReactFlow
              nodes={compactViewport ? nodes.filter((node) => !node.hidden) : nodes}
              edges={compactViewport ? edges.filter((edge) => !edge.hidden) : edges}
              nodeTypes={nodeTypes}
              onlyRenderVisibleElements
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
              <Background color={SYSTEM_2D_THEME.muted} gap={28} size={1} />
              <Controls showInteractive={false} />
              {showMinimap && (
                {!compactViewport && <MiniMap pannable zoomable nodeStrokeWidth={3} nodeColor={(node) => node.data.color} />} 
              )}
            </ReactFlow>
          </div>
        </div>

        <aside className="glock-inspector" aria-live="polite">
          <SectionPedagogy
            nodes={glockNodes}
            routes={glockRoutes.filter((item) => item.id !== 'all')}
            nodeOrder={glockNodeOrder}
            activeRoute={route}
            selectedId={selectedId}
            onSectionChange={changeRoute}
            onFocusNode={(id) => {
              setGuidedMode(false)
              selectById(id)
            }}
          />

          {selected ? (
            <>
              <div className="glock-inspector-head">
                <span>{selected.data.kind}</span>
                <b>{selected.data.code}</b>
              </div>
              <h2>{selected.data.title}</h2>
              <blockquote>{selected.data.short}</blockquote>

              <section>
                <span>Qué significa</span>
                <p>{selected.data.explanation}</p>
              </section>

              {selected.data.class19Oct && (
                <section className="glock-class-note">
                  <span>EXPLICACIÓN DOCENTE · 19 OCT 2026</span>
                  <strong>VISTO EN CLASE</strong>
                  <p>{selected.data.class19Oct.note}</p>
                  {selected.data.class19Oct.caution && (
                    <aside><b>PRECISIÓN</b><p>{selected.data.class19Oct.caution}</p></aside>
                  )}
                  <Link to="/semestre/5/filosofia-analitica/clase/19-octubre">Abrir clase completa ↗</Link>
                </section>
              )}

              {selected.data.class21Oct && (
                <section className="glock-class-note">
                  <span>EXPLICACIÓN DOCENTE · 21 OCT 2026</span>
                  <strong>VISTO EN CLASE · HASTA P. 49</strong>
                  <p>{selected.data.class21Oct.note}</p>
                  <aside><b>EN PALABRAS SIMPLES</b><p>{selected.data.class21Oct.simple}</p></aside>
                  {selected.data.class21Oct.caution && (
                    <aside><b>PRECISIÓN ACADÉMICA</b><p>{selected.data.class21Oct.caution}</p></aside>
                  )}
                  <Link to="/semestre/5/filosofia-analitica/clase/21-octubre">Abrir clase del 21 de octubre ↗</Link>
                </section>
              )}

              <details className="glock-source-details" open>
                <summary>
                  <span>TEXTO ORIGINAL DE GLOCK</span>
                  <b>{selected.data.page}</b>
                </summary>
                <div>
                  <blockquote>{selected.data.sourcePassage}</blockquote>
                  <small>{selected.data.sourceRef}</small>
                </div>
              </details>

              <section className="glock-inspector-schema">
                <span>ESQUEMA DEL NODO · RECONSTRUCCIÓN DE ESTUDIO</span>
                <p>Visualiza únicamente relaciones ya registradas en el nodo; no es una figura impresa por Glock.</p>
                <AnimatedConceptSchema key={`glock-schema-${selected.id}`} schema={selected.data.schema} />
              </section>

              <section className="glock-inspector-question">
                <span>PREGUNTA DE ESTUDIO</span>
                <strong>{selected.data.question}</strong>
              </section>

              <section>
                <span>Depende de</span>
                <div className="glock-inspector-links">
                  {selected.data.dependsOn.length
                    ? selected.data.dependsOn.map((id) => {
                        const dep = glockNodeById(id)
                        return (
                          <button key={id} type="button" onClick={() => selectById(id)}>
                            {dep?.data.code || id}<small>{dep?.data.title}</small>
                          </button>
                        )
                      })
                    : <em>Fundamento inicial del tramo recibido.</em>}
                </div>
              </section>

              <section>
                <span>Produce</span>
                <div className="glock-inspector-links">
                  {selected.data.produces.length
                    ? selected.data.produces.map((id) => {
                        const produced = glockNodeById(id)
                        return (
                          <button key={id} type="button" onClick={() => selectById(id)}>
                            {produced?.data.code || id}<small>{produced?.data.title}</small>
                          </button>
                        )
                      })
                    : <em>Sin consecuencia directa registrada.</em>}
                </div>
              </section>

              <section>
                <span>Conceptos / momentos</span>
                <div className="glock-inspector-tags">
                  {selected.data.concepts.map((concept) => <b key={concept}>{concept}</b>)}
                </div>
              </section>

              <section>
                <span>Relaciones documentadas</span>
                <div className="glock-inspector-links">
                  {relationships.length
                    ? relationships.map((edge) => {
                        const otherId = edge.source === selectedId ? edge.target : edge.source
                        const other = glockNodeById(otherId)
                        return (
                          <button key={edge.id} type="button" onClick={() => selectById(otherId)}>
                            {edge.source === selectedId ? '→' : '←'} {other?.data.code}
                            <small>{edge.label}{edge.critical ? ' · reconstrucción editorial' : ''}</small>
                          </button>
                        )
                      })
                    : <em>Sin relaciones adicionales registradas.</em>}
                </div>
              </section>

              <footer>
                <span>Fuente en la sistematización</span>
                <strong>{selected.data.sourceRef}</strong>
              </footer>
            </>
          ) : (
            <div className="glock-inspector-empty">
              <span>SELECTIO</span>
              <strong>Seleccione un nodo</strong>
              <p>Se iluminarán dependencias y continuidades; el texto y el esquema aparecerán aquí.</p>
            </div>
          )}

          {guidedMode && guidedCurrent && (
            <div className="glock-inspector-guided-nav">
              <button type="button" disabled={!guidedPrev} onClick={() => jumpGuided(guidedIndex - 1)}>← Atrás</button>
              <div><span>Guía</span><strong>{guidedIndex + 1} / {activeGuidedRoute.length}</strong></div>
              <button type="button" disabled={!guidedNext} onClick={() => jumpGuided(guidedIndex + 1)}>Siguiente →</button>
            </div>
          )}
        </aside>
      </section>

      <section className="glock-study-history">
        <span>Iter argumenti</span>
        <div>
          {history.map((id, index) => {
            const node = glockNodeById(id)
            return (
              <span key={`${id}-${index}`}>
                {index > 0 && <b>→</b>}
                <button type="button" onClick={() => selectById(id)}>{node?.data.code || id}</button>
              </span>
            )
          })}
        </div>
      </section>

      <section className="glock-study-next">
        <span>Arquitectura de la lectura recibida</span>
        <div>
          {architecture.map((item) => (
            <article key={item.id}>
              <b>{item.number}</b>
              <strong>{item.label.replace(/^\d+ · /, '')}</strong>
              <p>{item.first?.data.title} → {item.last?.data.title}</p>
              <small>{item.count} nodo{item.count === 1 ? '' : 's'}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="glock-schema">
        <div>
          <span>ESQUEMA DE ESTUDIO · pp. 40–41</span>
          <h2>Un punto de partida, dos caminos</h2>
          <p>El análisis descomposicional trabaja con conceptos; el regresivo con proposiciones. Este esquema reconstruye la distinción explícita de Glock.</p>
        </div>
        <AnimatedConceptSchema schema={glockMethodSchema} />
      </section>

      <footer className="glock-study-footer">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <span>Hans-Johann Glock · capítulo II · lectura documentada pp. 40–51, clase hasta p. 49</span>
        <Link to="/semestre/5/filosofia-analitica/clase/21-octubre">Clase 21 octubre ↗</Link>
      </footer>
    </main>
  )
}

export default function AnalyticGlockSystem() {
  return <ReactFlowProvider><StudyCanvas /></ReactFlowProvider>
}
