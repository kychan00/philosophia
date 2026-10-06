import { useCallback, useEffect, useMemo, useState, useRef} from 'react'
import { Link } from 'react-router'
import { createPortal } from 'react-dom'
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
import './MarxCommodityValueSystem.css'

import MarxCommodityNode from '../components/marx/MarxCommodityNode'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  marxCommodityConceptualEdges,
  marxCommodityCrossRelationById,
  marxCommodityCrossRelations,
  marxCommodityEdges,
  marxCommodityGuidedRoute,
  marxCommodityNodeById,
  marxCommodityNodes,
  marxCommodityPhases,
  marxCommodityRoutes,
  marxCommoditySource,
} from '../data/marxCommodityValueSystem'

const nodeTypes = {
  text: MarxCommodityNode,
  core: MarxCommodityNode,
}

function relatedSet(id, includeConceptual = false) {
  if (!id) return new Set()
  const set = new Set([id])

  marxCommodityEdges.forEach((edge) => {
    if (edge.source === id) set.add(edge.target)
    if (edge.target === id) set.add(edge.source)
  })

  if (includeConceptual) {
    marxCommodityConceptualEdges.forEach((edge) => {
      if (edge.source === id) set.add(edge.target)
      if (edge.target === id) set.add(edge.source)
    })
  }

  return set
}


function routePageNumber(node) {
  const raw = String(node?.data?.page || '')
  const match = raw.match(/\d+/)
  return match ? Number(match[0]) : Number.POSITIVE_INFINITY
}

function routeNodePriority(a, b) {
  const pageDelta = routePageNumber(a) - routePageNumber(b)
  if (pageDelta) return pageDelta

  const microDelta =
    Number(Boolean(b?.data?.micro)) -
    Number(Boolean(a?.data?.micro))

  if (microDelta) return microDelta

  const ax = Number.isFinite(a?.position?.x) ? a.position.x : 0
  const bx = Number.isFinite(b?.position?.x) ? b.position.x : 0
  if (ax !== bx) return ax - bx

  const ay = Number.isFinite(a?.position?.y) ? a.position.y : 0
  const by = Number.isFinite(b?.position?.y) ? b.position.y : 0
  if (ay !== by) return ay - by

  return String(a?.data?.code || a?.id || '').localeCompare(
    String(b?.data?.code || b?.id || ''),
    'es',
    { numeric: true },
  )
}

function buildRouteReadingOrder(routeId) {
  if (!routeId || routeId === 'all') return []

  const routeNodes = marxCommodityNodes.filter(
    (node) => node.data.branch.includes(routeId),
  )

  const routeIds = new Set(routeNodes.map((node) => node.id))
  const byId = new Map(routeNodes.map((node) => [node.id, node]))
  const indegree = new Map(routeNodes.map((node) => [node.id, 0]))
  const outgoing = new Map(routeNodes.map((node) => [node.id, []]))

  routeNodes.forEach((node) => {
    node.data.dependsOn.forEach((dependencyId) => {
      if (!routeIds.has(dependencyId)) return

      indegree.set(node.id, (indegree.get(node.id) || 0) + 1)
      outgoing.get(dependencyId)?.push(node.id)
    })
  })

  const ready = routeNodes
    .filter((node) => (indegree.get(node.id) || 0) === 0)
    .sort(routeNodePriority)

  const ordered = []
  const seen = new Set()

  while (ready.length) {
    ready.sort(routeNodePriority)
    const node = ready.shift()
    if (!node || seen.has(node.id)) continue

    seen.add(node.id)
    ordered.push(node.id)

    ;(outgoing.get(node.id) || []).forEach((targetId) => {
      indegree.set(targetId, (indegree.get(targetId) || 0) - 1)

      if ((indegree.get(targetId) || 0) === 0) {
        const target = byId.get(targetId)
        if (target) ready.push(target)
      }
    })
  }

  routeNodes
    .filter((node) => !seen.has(node.id))
    .sort(routeNodePriority)
    .forEach((node) => ordered.push(node.id))

  return ordered
}

function StudyCanvas() {
  const [route, setRoute] = useState('all')
  const [selectedId, setSelectedId] = useState(null)
  const [folioId, setFolioId] = useState(null)
  const [relationId, setRelationId] = useState(null)
  const [conceptualMode, setConceptualMode] = useState(false)
  const [studyMode, setStudyMode] = useState(false)
  const [studyHint, setStudyHint] = useState(false)
  const [studyAnswer, setStudyAnswer] = useState(false)
  const [studySchema, setStudySchema] = useState(false)
  const [studyRelations, setStudyRelations] = useState(false)
  const [studyMarks, setStudyMarks] = useState(() => {
    try {
      return JSON.parse(
        window.localStorage.getItem('philosophia-marx-study-marks') || '{}',
      )
    } catch {
      return {}
    }
  })
  const [guidedMode, setGuidedMode] = useState(false)
  const workspaceRef = useRef(null)
  const [workspaceFullscreen, setWorkspaceFullscreen] = useState(false)
  const overlayHost =
    workspaceFullscreen && workspaceRef.current ? workspaceRef.current : document.body
  const [history, setHistory] = useState([])
  const [guidedIndex, setGuidedIndex] = useState(() => {
    try {
      const value = Number(
        window.localStorage.getItem('philosophia-marx-commodity-step') || 0,
      )
      return Number.isFinite(value)
        ? Math.min(Math.max(value, 0), marxCommodityGuidedRoute.length - 1)
        : 0
    } catch {
      return 0
    }
  })

  const { fitView, setCenter, getNodes } = useReactFlow()

  useEffect(() => {
    const syncFullscreen = () => {
      const activeElement =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        null

      setWorkspaceFullscreen(
        activeElement === workspaceRef.current,
      )

      window.setTimeout(() => {
        fitView({ padding: 0.06, duration: 420 })
      }, 100)
    }

    document.addEventListener('fullscreenchange', syncFullscreen)
    document.addEventListener('webkitfullscreenchange', syncFullscreen)

    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreen)
      document.removeEventListener('webkitfullscreenchange', syncFullscreen)
    }
  }, [fitView])

  useEffect(() => {
    if (!workspaceFullscreen) return undefined

    const nativeFullscreen =
      document.fullscreenElement ||
      document.webkitFullscreenElement

    if (nativeFullscreen) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setWorkspaceFullscreen(false)

        window.setTimeout(() => {
          fitView({ padding: 0.08, duration: 420 })
        }, 80)
      }
    }

    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [workspaceFullscreen, fitView])

  const toggleWorkspaceFullscreen = useCallback(async () => {
    const element = workspaceRef.current
    if (!element) return

    const activeElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      null

    try {
      if (activeElement) {
        const exit =
          document.exitFullscreen ||
          document.webkitExitFullscreen

        if (exit) {
          await Promise.resolve(exit.call(document))
        }

        return
      }

      const request =
        element.requestFullscreen ||
        element.webkitRequestFullscreen

      if (request) {
        await Promise.resolve(request.call(element))
        return
      }

      setWorkspaceFullscreen((current) => !current)
    } catch {
      // Fallback CSS fullscreen for browsers that reject the native API.
      setWorkspaceFullscreen((current) => !current)
    }

    window.setTimeout(() => {
      fitView({ padding: 0.06, duration: 420 })
    }, 100)
  }, [fitView])

  const selected = marxCommodityNodeById(selectedId)
  const folio = marxCommodityNodeById(folioId)
  const relationSheet = marxCommodityCrossRelationById(relationId)
  const relationSource = relationSheet
    ? marxCommodityNodeById(relationSheet.source)
    : null
  const relationTarget = relationSheet
    ? marxCommodityNodeById(relationSheet.target)
    : null
  const guidedStep = marxCommodityGuidedRoute[guidedIndex] || null
  const guidedCurrent = guidedStep ? marxCommodityNodeById(guidedStep.id) : null
  const guidedNext = marxCommodityGuidedRoute[guidedIndex + 1] || null
  const guidedPrev = marxCommodityGuidedRoute[guidedIndex - 1] || null

  const routeIds = useMemo(() => {
    if (route === 'all') return new Set(marxCommodityNodes.map((node) => node.id))
    return new Set(
      marxCommodityNodes
        .filter((node) => node.data.branch.includes(route))
        .map((node) => node.id),
    )
  }, [route])

  const routeSupport = useMemo(() => {
    if (route === 'all') return new Set()
    const support = new Set()

    marxCommodityNodes.forEach((node) => {
      if (!routeIds.has(node.id)) return
      node.data.dependsOn.forEach((id) => support.add(id))
    })

    return support
  }, [route, routeIds])

  const routeSequence = useMemo(
    () => buildRouteReadingOrder(route),
    [route],
  )

  const routeNumberById = useMemo(
    () =>
      new Map(
        routeSequence.map((id, index) => [id, index + 1]),
      ),
    [routeSequence],
  )


  // PHILOSOPHIA_ROUTE_CURRENT_SELECTION_V5
  const routeCurrentNodeId = selectedId || null

  const routeCurrentIndex = useMemo(
    () =>
      route !== 'all' && routeCurrentNodeId
        ? routeSequence.indexOf(routeCurrentNodeId)
        : -1,
    [route, routeSequence, routeCurrentNodeId],
  )

  const routeCurrentLabel = useMemo(
    () =>
      marxCommodityRoutes.find((item) => item.id === route)?.label ||
      'Ruta conceptual',
    [route],
  )

  const routeHasCurrent = routeCurrentIndex >= 0

  const routePrevId =
    routeHasCurrent && routeCurrentIndex > 0
      ? routeSequence[routeCurrentIndex - 1]
      : null

  const routeNextId =
    routeHasCurrent
      ? (
          routeCurrentIndex < routeSequence.length - 1
            ? routeSequence[routeCurrentIndex + 1]
            : null
        )
      : routeSequence[0] || null

  const conceptualVisible = conceptualMode || route === 'architecture'

  const selection = useMemo(
    () => relatedSet(selectedId, conceptualVisible),
    [selectedId, conceptualVisible],
  )

  const selectedCrossRelations = useMemo(
    () =>
      selectedId
        ? marxCommodityCrossRelations.filter(
            (relation) =>
              relation.source === selectedId || relation.target === selectedId,
          )
        : [],
    [selectedId],
  )

  const studySequence = useMemo(
    () =>
      marxCommodityNodes.filter(
        (node) => route === 'all' || routeIds.has(node.id),
      ),
    [route, routeIds],
  )

  const studyIndex = selectedId
    ? studySequence.findIndex((node) => node.id === selectedId)
    : -1

  const studyPrevNode =
    studyIndex > 0 ? studySequence[studyIndex - 1] : null

  const studyNextNode =
    studyIndex >= 0 && studyIndex < studySequence.length - 1
      ? studySequence[studyIndex + 1]
      : null

  const masteredCount = useMemo(
    () =>
      studySequence.filter(
        (node) => studyMarks[node.id] === 'mastered',
      ).length,
    [studySequence, studyMarks],
  )

  const nodes = useMemo(
    () =>
      marxCommodityNodes.map((node) => {
        const routeActive = routeIds.has(node.id)
        const support = routeSupport.has(node.id)
        const inSelection = selection.has(node.id)
        const isGuidedCurrent = guidedMode && node.id === guidedStep?.id
        const isGuidedNext = guidedMode && node.id === guidedNext?.id

        return {
          ...node,
          hidden: !guidedMode && route !== 'all' && !routeActive && !support,
          draggable: false,
          data: {
            ...node.data,
            routeActive: route !== 'all' && routeActive,
            routeNumber:
              route !== 'all' && routeActive
                ? routeNumberById.get(node.id) || null
                : null,
            routeTotal:
              route !== 'all' && routeActive
                ? routeSequence.length
                : null,
            highlighted:
              !guidedMode &&
              selectedId &&
              node.id !== selectedId &&
              inSelection,
            dimmed:
              guidedMode
                ? !isGuidedCurrent && !isGuidedNext
                : route === 'all'
                  ? Boolean(selectedId) && !inSelection
                  : !routeActive && !support,
            guidedCurrent: isGuidedCurrent,
            guidedNext: isGuidedNext,
            onOpenFolio: () => setFolioId(node.id),
          },
        }
      }),
    [
      route,
      routeIds,
      routeSupport,
      selection,
      selectedId,
      guidedMode,
      guidedStep,
      guidedNext,
    ],
  )

  const edges = useMemo(
    () =>
      (
        conceptualVisible
          ? [...marxCommodityEdges, ...marxCommodityConceptualEdges]
          : marxCommodityEdges
      ).map((edge) => {
        const touchesSelected =
          selectedId && (edge.source === selectedId || edge.target === selectedId)

        const sourceVisible = routeIds.has(edge.source) || routeSupport.has(edge.source)
        const targetVisible = routeIds.has(edge.target) || routeSupport.has(edge.target)
        const routeVisible = route === 'all' || (sourceVisible && targetVisible)

        const guidedActive =
          guidedMode &&
          (
            (edge.target === guidedStep?.id &&
              guidedCurrent?.data.dependsOn.includes(edge.source)) ||
            (edge.source === guidedStep?.id && edge.target === guidedNext?.id)
          )

        const conceptual = edge.layer === 'conceptual'
        const conceptualColors = {
          foundation: '#526c59',
          manifestation: '#496a78',
          inversion: '#8b3d34',
          analogy: '#7a5a8c',
          history: '#6c6650',
          development: '#9c7434',
        }

        const stroke = guidedActive
          ? '#526c59'
          : conceptual
            ? conceptualColors[edge.conceptualType] || '#7a5a8c'
            : edge.relation === 'critical'
              ? '#8b3d34'
              : touchesSelected
                ? '#9c7434'
                : '#61584d'

        return {
          ...edge,
          hidden: !guidedMode && !routeVisible,
          type: 'smoothstep',
          animated: false,
          label: conceptual ? edge.label : undefined,
          labelStyle: conceptual
            ? {
                fill: stroke,
                fontSize: 9,
                fontWeight: 800,
              }
            : undefined,
          labelBgStyle: conceptual
            ? {
                fill: '#f7f0e4',
                fillOpacity: 0.9,
              }
            : undefined,
          style: {
            stroke,
            strokeDasharray: conceptual ? '8 6' : undefined,
            strokeWidth: guidedActive
              ? 3
              : conceptual
                ? touchesSelected ? 3 : 2
                : touchesSelected
                  ? 2.8
                  : edge.relation === 'critical'
                    ? 1.8
                    : 1.1,
            opacity: guidedMode
              ? guidedActive
                ? 1
                : 0.05
              : conceptual
                ? touchesSelected ? 1 : 0.76
                : touchesSelected
                  ? 1
                  : route === 'all'
                    ? 0.25
                    : 0.62,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: guidedActive ? 13 : conceptual ? 12 : 10,
            height: guidedActive ? 13 : conceptual ? 12 : 10,
            color: stroke,
          },
        }
      }),
    [
      selectedId,
      route,
      routeIds,
      routeSupport,
      guidedMode,
      guidedStep,
      guidedCurrent,
      guidedNext,
      conceptualVisible,
    ],
  )

  const resetStudyReveal = useCallback(() => {
    setStudyHint(false)
    setStudyAnswer(false)
    setStudySchema(false)
    setStudyRelations(false)
  }, [])

  const markStudyNode = useCallback((id, status) => {
    if (!id) return

    setStudyMarks((current) => {
      const next = { ...current, [id]: status }

      try {
        window.localStorage.setItem(
          'philosophia-marx-study-marks',
          JSON.stringify(next),
        )
      } catch {}

      return next
    })
  }, [])

  const selectNode = useCallback(
    (node) => {
      if (!node) return
      resetStudyReveal()
      setSelectedId(node.id)
      setHistory((current) => {
        if (current[current.length - 1] === node.id) return current
        return [...current.slice(-9), node.id]
      })
      setCenter(node.position.x + 150, node.position.y + 90, {
        zoom: 1.05,
        duration: 450,
      })
    },
    [setCenter, resetStudyReveal],
  )

  const selectById = useCallback(
    (id) => {
      const node = marxCommodityNodeById(id)
      if (node) selectNode(node)
    },
    [selectNode],
  )

  // PHILOSOPHIA_ROUTE_FOOTER_STATE_NAV_V5
  // La navegación del footer debe depender del estado canónico de la página,
  // no del snapshot interno de React Flow. Así la selección cambia primero en
  // React y el movimiento de cámara queda como un efecto visual secundario.
  const jumpRouteNode = useCallback(
    (targetId) => {
      if (!targetId) return

      const targetNode = marxCommodityNodeById(targetId)
      if (!targetNode) return

      resetStudyReveal()
      setRelationId(null)
      setFolioId(null)
      setSelectedId(targetId)
      setHistory((current) => {
        if (current[current.length - 1] === targetId) return current
        return [...current.slice(-9), targetId]
      })

      window.requestAnimationFrame(() => {
        setCenter(targetNode.position.x + 150, targetNode.position.y + 90, {
          zoom: 1.05,
          duration: 450,
        })
      })
    },
    [resetStudyReveal, setCenter],
  )

  const jumpGuided = useCallback(
    (index) => {
      const safe = Math.min(
        Math.max(index, 0),
        marxCommodityGuidedRoute.length - 1,
      )
      const step = marxCommodityGuidedRoute[safe]
      const node = step ? marxCommodityNodeById(step.id) : null
      if (!node) return

      setGuidedMode(true)
      setRoute('all')
      setGuidedIndex(safe)
      setSelectedId(node.id)

      try {
        window.localStorage.setItem(
          'philosophia-marx-commodity-step',
          String(safe),
        )
      } catch {}

      setCenter(node.position.x + 150, node.position.y + 90, {
        zoom: 1.05,
        duration: 500,
      })
    },
    [setCenter],
  )

  const reset = useCallback(() => {
    setGuidedMode(false)
    setConceptualMode(false)
    setStudyMode(false)
    resetStudyReveal()
    setRelationId(null)
    setRoute('all')
    setSelectedId(null)
    setTimeout(() => fitView({ padding: 0.08, duration: 500 }), 0)
  }, [fitView, resetStudyReveal])

  // PHILOSOPHIA_ROUTE_FIT_SELECTION_SAFE
  // Reencuadrar sólo cuando cambia la ruta. Una selección modifica `nodes`
  // por blur/highlight, pero no debe disparar otro fitView().
  useEffect(() => {
    if (guidedMode || route === 'all') return

    const timer = window.setTimeout(() => {
      const visible = getNodes().filter((node) => !node.hidden)
      if (!visible.length) return

      fitView({
        nodes: visible,
        padding: 0.16,
        duration: 650,
        maxZoom: 0.9,
      })
    }, 120)

    return () => window.clearTimeout(timer)
  }, [route, guidedMode, getNodes, fitView])

  useEffect(() => {
    if (!folioId && !relationId) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setFolioId(null)
        setRelationId(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [folioId, relationId])

  return (
    <main className="marx-study-shell">
      <nav className="marx-study-nav">
        <Link to="/tareas">← Tareas</Link>
        <Link to="/" className="marx-study-brand">Φ · Philosophia</Link>
        <span>Teoría Crítica · FI265</span>
      </nav>

      <header className="marx-study-hero">
        <div>
          <p>Marx · El capital · Libro primero · capítulo I</p>
          <h1>La mercancía <em>antes del fetiche</em></h1>
          <p className="marx-study-lead">
            Sistema 2D para reconstruir, sin saltos, el camino de Marx desde
            valor de uso y valor hasta la forma de dinero.
          </p>
        </div>

        <aside>
          <span>TAREA · 29 SEP 2026</span>
          <strong>Mercancía · valor · forma de dinero</strong>
          <b>{marxCommoditySource.assignedPages}</b>
          <small>Única fuente: edición Pedro Scaron · Siglo XXI</small>
        </aside>
      </header>

      <section className="marx-source-boundary">
        <div>
          <span>CONTROL DE FUENTE</span>
          <strong>Esta ruta usa sólo pp. 43–86 de la edición indicada.</strong>
          <p>{marxCommoditySource.boundary}</p>
        </div>
        <div>
          <span>EDICIÓN</span>
          <strong>{marxCommoditySource.author}</strong>
          <p>{marxCommoditySource.title}</p>
          <small>{marxCommoditySource.edition}</small>
        </div>
      </section>

      <section className="marx-guided-launch">
        <div>
          <span>LECTIO ORDINATA</span>
          <strong>Ruta guiada · 39 pasos textuales</strong>
          <p>
            Cada nodo separa el texto explícito de Marx de la explicación.
            Las flechas representan dependencias de lectura.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (guidedMode) {
              setGuidedMode(false)
              setSelectedId(null)
              setTimeout(() => fitView({ padding: 0.08, duration: 450 }), 0)
            } else {
              jumpGuided(guidedIndex)
            }
          }}
        >
          {guidedMode ? 'Salir de ruta guiada' : `Continuar · paso ${guidedIndex + 1}`}
        </button>
      </section>

      {guidedMode && guidedCurrent && (
        <section className="marx-guided-panel">
          <div className="marx-guided-progress">
            <span>Paso {guidedIndex + 1} / {marxCommodityGuidedRoute.length}</span>
            <div>
              <i
                style={{
                  width: `${((guidedIndex + 1) / marxCommodityGuidedRoute.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="marx-guided-phases">
            {marxCommodityPhases.map((phase) => (
              <span key={phase} className={guidedStep?.phase === phase ? 'is-active' : ''}>
                {phase}
              </span>
            ))}
          </div>

          <div className="marx-guided-copy">
            <div>
              <span>{guidedCurrent.data.phase} · p. {guidedCurrent.data.page}</span>
              <strong>{guidedCurrent.data.code} · {guidedCurrent.data.title}</strong>
              <blockquote>{guidedCurrent.data.excerpt}</blockquote>
            </div>
            <aside>
              <span>FUNCIÓN EN EL ARGUMENTO</span>
              <p>{guidedCurrent.data.role}</p>
              <strong>{guidedStep.nextQuestion}</strong>
            </aside>
          </div>

          <div className="marx-guided-nav">
            <button type="button" disabled={!guidedPrev} onClick={() => jumpGuided(guidedIndex - 1)}>
              ← Anterior
            </button>
            <button type="button" onClick={() => setFolioId(guidedCurrent.id)}>
              Abrir folio explicativo
            </button>
            <button type="button" disabled={!guidedNext} onClick={() => jumpGuided(guidedIndex + 1)}>
              Siguiente →
            </button>
          </div>
        </section>
      )}

      <section className="marx-study-routes">
        <div>
          <span>Ruta conceptual</span>
          {marxCommodityRoutes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={route === item.id ? 'is-active' : ''}
              onClick={() => {
                setGuidedMode(false)
                setRoute(item.id)
                setSelectedId(null)

                if (item.id === 'architecture') {
                  setConceptualMode(true)
                }

                if (item.id === 'all') {
                  setTimeout(() => fitView({ padding: 0.08, duration: 500 }), 0)
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="marx-route-actions">
          <button
            type="button"
            className={studyMode ? 'is-study-active' : ''}
            onClick={() => {
              setStudyMode((current) => !current)
              resetStudyReveal()
            }}
          >
            Modo estudio · {studyMode ? 'ON' : 'OFF'}
          </button>
          <button
            type="button"
            className={conceptualMode ? 'is-conceptual-active' : ''}
            onClick={() => {
              setConceptualMode((current) => !current)
              setRelationId(null)
            }}
          >
            Relaciones II · {conceptualMode ? 'ON' : 'OFF'}
          </button>
          <button type="button" onClick={reset}>Ver sistema completo</button>
        </div>
      </section>

      {route === 'microscope' && (
        <section className="marx-microscope-banner">
          <div>
            <span>FASE II · MICROSCOPIO DE LA FORMA SIMPLE</span>
            <strong>pp. 58–75 · maquinaria conceptual que prepara el fetichismo</strong>
            <p>
              La lectura separa operaciones que suelen colapsarse: objetividad social,
              dos polos, cuerpo del equivalente, tres peculiaridades, inversión,
              Aristóteles y la distinción entre valor y valor de cambio.
            </p>
          </div>
          <div className="marx-microscope-sequence">
            <b>01 · relación</b><i>→</i><b>02 · apariencia</b><i>→</i>
            <b>03 · inversión</b><i>→</i><b>04 · historicidad</b>
          </div>
        </section>
      )}

      <section
        ref={workspaceRef}
        className={
          workspaceFullscreen
            ? 'marx-study-workspace is-fullscreen'
            : 'marx-study-workspace'
        }
      >
        <div className="marx-flow-panel">
          <div className="marx-flow-caption">
            <div>
              <span>GENESIS FORMAE VALORIS</span>
              <strong>mercancía → valor → trabajo → equivalente → dinero</strong>
            </div>
            <div className="marx-flow-caption-actions">
              <div className="marx-flow-legend">
              <span>texto explícito</span>
              <span>nodo nuclear</span>
              <span>dependencia</span>
              <span className="is-conceptual">relación II</span>
            </div>


<button
                type="button"
                className="marx-workspace-fullscreen-toggle"
                onClick={toggleWorkspaceFullscreen}
                aria-label={
                  workspaceFullscreen
                    ? 'Salir de pantalla completa'
                    : 'Abrir sistema en pantalla completa'
                }
                title={
                  workspaceFullscreen
                    ? 'Salir de pantalla completa'
                    : 'Pantalla completa'
                }
              >
                {workspaceFullscreen ? 'Salir ⛶' : 'Pantalla completa ⛶'}
              </button>
            </div>
          </div>

          <div className="marx-flow-canvas">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={(_, node) => selectNode(node)}
              onEdgeClick={(event, edge) => {
                if (!edge.relationSheetId) return
                event.stopPropagation()
                setRelationId(edge.relationSheetId)
              }}
              onPaneClick={() => {
                if (!guidedMode) setSelectedId(null)
              }}
              fitView
              fitViewOptions={{ padding: 0.08 }}
              minZoom={0.08}
              maxZoom={1.6}
              nodesConnectable={false}
              proOptions={{ hideAttribution: true }}
            >
              <Background gap={32} size={1} />
              <Controls showInteractive={false} />
              <MiniMap pannable zoomable nodeStrokeWidth={3} />
            </ReactFlow>
          </div>
        </div>

        <aside
          className={studyMode ? 'marx-inspector is-study-mode' : 'marx-inspector'}
        >
          <div className="marx-inspector-scroll">
          {selected ? (
            <>
              <div className="marx-inspector-head">
                <span>{selected.data.phase}</span>
                <b>{selected.data.code}</b>
              </div>

              <h2>{selected.data.title}</h2>

              {studyMode && (
                <section className="marx-study-recall-panel">
                  <div className="marx-study-recall-kicker">
                    <span>RECUPERATIO · RECUERDO ACTIVO</span>
                    <small>
                      {masteredCount}/{studySequence.length} dominados en esta ruta
                    </small>
                  </div>

                  <strong className="marx-study-recall-question">
                    {selected.data.question}
                  </strong>

                  <div className="marx-study-recall-actions">
                    <button
                      type="button"
                      className={studyHint ? 'is-active' : ''}
                      onClick={() => setStudyHint((current) => !current)}
                    >
                      {studyHint ? 'Ocultar pista' : 'Pista conceptual'}
                    </button>
                    <button
                      type="button"
                      className={studyAnswer ? 'is-active' : ''}
                      onClick={() => setStudyAnswer((current) => !current)}
                    >
                      {studyAnswer ? 'Ocultar respuesta' : 'Revelar respuesta'}
                    </button>
                    <button
                      type="button"
                      className={studySchema ? 'is-active' : ''}
                      onClick={() => setStudySchema((current) => !current)}
                    >
                      {studySchema ? 'Ocultar esquema' : 'Revelar esquema'}
                    </button>
                    <button
                      type="button"
                      className={studyRelations ? 'is-active' : ''}
                      onClick={() => setStudyRelations((current) => !current)}
                    >
                      {studyRelations ? 'Ocultar relaciones' : 'Reconstruir relaciones'}
                    </button>
                  </div>

                  {studyHint && (
                    <div className="marx-study-recall-block is-hint">
                      <span>PISTA · CONCEPTOS DEL NODO</span>
                      <div className="marx-study-recall-tags">
                        {selected.data.concepts.map((concept) => (
                          <b key={`${selected.id}-hint-${concept}`}>{concept}</b>
                        ))}
                      </div>
                    </div>
                  )}

                  {studyAnswer && (
                    <div className="marx-study-recall-block is-answer">
                      <span>COMPROBACIÓN EN EL TEXTO</span>
                      <blockquote>{selected.data.excerpt}</blockquote>
                      <span>LECTURA GUIADA</span>
                      <p>{selected.data.explanation}</p>
                      <small>{selected.data.role}</small>
                    </div>
                  )}

                  {studySchema && (
                    <div className="marx-study-recall-block is-schema">
                      <span>RECONSTRUCCIÓN VISUAL</span>
                      {selected.data.schema ? (
                        <AnimatedConceptSchema
                          key={`study-schema-${selected.id}`}
                          schema={selected.data.schema}
                        />
                      ) : (
                        <div className="marx-inspector-diagram">
                          {selected.data.diagram.map((item, index) => (
                            <b key={`${selected.id}-study-diagram-${index}`}>
                              {item}
                            </b>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {studyRelations && (
                    <div className="marx-study-recall-block is-relations">
                      <span>DEPENDENCIAS</span>
                      <div className="marx-study-recall-relations">
                        <div>
                          <small>depende de</small>
                          {selected.data.dependsOn.length ? (
                            selected.data.dependsOn.map((id) => {
                              const node = marxCommodityNodeById(id)
                              return (
                                <button
                                  key={`study-dep-${id}`}
                                  type="button"
                                  onClick={() => selectById(id)}
                                >
                                  {node?.data.code} · {node?.data.title}
                                </button>
                              )
                            })
                          ) : (
                            <em>punto de partida</em>
                          )}
                        </div>

                        <div>
                          <small>abre hacia</small>
                          {selected.data.produces.length ? (
                            selected.data.produces.map((id) => {
                              const node = marxCommodityNodeById(id)
                              return (
                                <button
                                  key={`study-next-${id}`}
                                  type="button"
                                  onClick={() => selectById(id)}
                                >
                                  {node?.data.code} · {node?.data.title}
                                </button>
                              )
                            })
                          ) : (
                            <em>fin del rango</em>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="marx-study-recall-grade">
                    <span>AUTOEVALUACIÓN</span>
                    <div>
                      <button
                        type="button"
                        className={
                          studyMarks[selected.id] === 'review'
                            ? 'is-review'
                            : ''
                        }
                        onClick={() => markStudyNode(selected.id, 'review')}
                      >
                        Revisar luego
                      </button>
                      <button
                        type="button"
                        className={
                          studyMarks[selected.id] === 'mastered'
                            ? 'is-mastered'
                            : ''
                        }
                        onClick={() => markStudyNode(selected.id, 'mastered')}
                      >
                        Lo tengo ✓
                      </button>
                    </div>
                  </div>

                  <div className="marx-study-recall-nav">
                    <button
                      type="button"
                      disabled={!studyPrevNode}
                      onClick={() => studyPrevNode && selectById(studyPrevNode.id)}
                    >
                      ← Anterior
                    </button>
                    <span>
                      {studyIndex >= 0 ? studyIndex + 1 : '—'} / {studySequence.length}
                    </span>
                    <button
                      type="button"
                      disabled={!studyNextNode}
                      onClick={() => studyNextNode && selectById(studyNextNode.id)}
                    >
                      Siguiente →
                    </button>
                  </div>
                </section>
              )}

              {selected.data.micro && (
                <div className="marx-inspector-micro">
                  <span>CAPA MICROSCÓPICA · FASE II</span>
                  <strong>Este nodo separa una operación interna del argumento.</strong>
                </div>
              )}

              <section className="marx-inspector-text">
                <span>TEXTO DE MARX</span>
                <blockquote>{selected.data.excerpt}</blockquote>
                <small>Scaron · p. {selected.data.page}</small>
              </section>

              {(selected.data.schema || selected.data.diagram?.length > 0) && (
                <section className="marx-inspector-schema-panel">
                  <span>ESQUEMA</span>
                  {selected.data.schema ? (
                    <AnimatedConceptSchema
                      key={`inspector-schema-${selected.id}`}
                      schema={selected.data.schema}
                    />
                  ) : (
                    <div className="marx-inspector-diagram">
                      {selected.data.diagram.map((item, index) => (
                        <b key={`${selected.id}-diagram-${index}`}>{item}</b>
                      ))}
                    </div>
                  )}
                </section>
              )}

              <section>
                <span>LECTURA GUIADA · SÍNTESIS</span>
                <p>{selected.data.explanation}</p>
              </section>

              <section>
                <span>FUNCIÓN EN EL ARGUMENTO</span>
                <p>{selected.data.role}</p>
              </section>

              <section>
                <span>DEPENDE DE</span>
                <div className="marx-inspector-links">
                  {selected.data.dependsOn.length ? (
                    selected.data.dependsOn.map((id) => {
                      const node = marxCommodityNodeById(id)
                      return (
                        <button key={id} type="button" onClick={() => selectById(id)}>
                          <b>{node?.data.code || id}</b>
                          <small>{node?.data.title}</small>
                        </button>
                      )
                    })
                  ) : (
                    <em>Punto de partida.</em>
                  )}
                </div>
              </section>

              <section>
                <span>ABRE HACIA</span>
                <div className="marx-inspector-links">
                  {selected.data.produces.length ? (
                    selected.data.produces.map((id) => {
                      const node = marxCommodityNodeById(id)
                      return (
                        <button key={id} type="button" onClick={() => selectById(id)}>
                          <b>{node?.data.code || id}</b>
                          <small>{node?.data.title}</small>
                        </button>
                      )
                    })
                  ) : (
                    <em>Fin del rango asignado.</em>
                  )}
                </div>
              </section>

              {selectedCrossRelations.length > 0 && (
                <section className="marx-inspector-conceptual">
                  <span>RELACIONES DE SEGUNDO NIVEL</span>
                  <p>
                    Conexiones transversales sustentadas por otros momentos del
                    mismo recorrido textual.
                  </p>
                  <div>
                    {selectedCrossRelations.map((relation) => {
                      const otherId =
                        relation.source === selected.id
                          ? relation.target
                          : relation.source
                      const other = marxCommodityNodeById(otherId)

                      return (
                        <button
                          key={relation.id}
                          type="button"
                          onClick={() => setRelationId(relation.id)}
                        >
                          <b>{relation.id}</b>
                          <strong>{relation.title}</strong>
                          <small>
                            ↔ {other?.data.code} · {other?.data.title}
                          </small>
                        </button>
                      )
                    })}
                  </div>
                </section>
              )}
              <section>
                <span>PREGUNTA DE CONTROL</span>
                <p>{selected.data.question}</p>
              </section>

              <button
                type="button"
                className="marx-open-folio"
                onClick={() => setFolioId(selected.id)}
              >
                Abrir página flotante ↗
              </button>
            </>
          ) : (
            <div className="marx-inspector-empty">
              <span>SELECTIO</span>
              <strong>Seleccione un nodo</strong>
              <p>Verá el texto, su función, esquema y relaciones.</p>
            </div>
          )}
          </div>

          {workspaceFullscreen &&
            !guidedMode &&
            route !== 'all' &&
            routeSequence.length > 0 && (
              <div
                className="marx-inspector-route-footer"
                aria-label="Navegación de la ruta seleccionada"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  disabled={!routePrevId}
                  onClick={() => jumpRouteNode(routePrevId)}
                >
                  ← Anterior
                </button>

                <div className="marx-inspector-route-progress">
                  <small>{routeCurrentLabel}</small>
                  <strong>
                    {routeHasCurrent
                      ? String(routeCurrentIndex + 1).padStart(2, '0')
                      : '—'}
                    {' / '}
                    {routeSequence.length}
                  </strong>
                </div>

                <button
                  type="button"
                  disabled={!routeNextId}
                  onClick={() => jumpRouteNode(routeNextId)}
                >
                  {routeHasCurrent ? 'Siguiente →' : 'Empezar →'}
                </button>
              </div>
            )}

          {guidedMode && workspaceFullscreen && guidedCurrent && (
            <div
              className="marx-inspector-guided-footer"
              aria-label="Navegación de ruta guiada"
            >
              <button
                type="button"
                disabled={!guidedPrev}
                onClick={() => jumpGuided(guidedIndex - 1)}
              >
                ← Anterior
              </button>

              <div className="marx-inspector-guided-progress">
                <small>MODO GUÍA</small>
                <strong>
                  Paso {guidedIndex + 1} / {marxCommodityGuidedRoute.length}
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

      <section className="marx-study-history">
        <span>Iter lectionis</span>
        <div>
          {history.map((id, index) => {
            const node = marxCommodityNodeById(id)
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

      <section className="marx-study-next">
        <span>Arquitectura de pp. 43–86</span>
        <div>
          <article><b>01</b><strong>Mercancía</strong><p>valor de uso · valor de cambio · valor.</p></article>
          <article><b>02</b><strong>Trabajo</strong><p>concreto · abstracto · tiempo socialmente necesario.</p></article>
          <article><b>03</b><strong>Forma de valor</strong><p>relativa · equivalente · desplegada · general.</p></article>
          <article><b>04</b><strong>Dinero</strong><p>equivalente general · oro · precio · umbral de p. 87.</p></article>
        </div>
      </section>

      <footer className="marx-study-footer">
        <Link to="/tareas">← Volver al tablero</Link>
        <span>Ware · Wert · Arbeit · Geld</span>
        <Link to="/semestre/5/teoria-critica">Teoría Crítica ↗</Link>
      </footer>

      {folio && createPortal((
        <div
          className="marx-folio-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setFolioId(null)
          }}
        >
          <article
            className="marx-folio"
            role="dialog"
            aria-modal="true"
            aria-labelledby="marx-folio-title"
          >
            <header>
              <div>
                <span>{folio.data.phase} · Scaron p. {folio.data.page}</span>
                <h2 id="marx-folio-title">{folio.data.title}</h2>
              </div>
              <button type="button" onClick={() => setFolioId(null)} aria-label="Cerrar">
                ×
              </button>
            </header>

            <div className="marx-folio-grid">
              <section className="marx-folio-source">
                <span>TEXTO EXPLÍCITO</span>
                <blockquote>{folio.data.excerpt}</blockquote>
                <small>
                  {marxCommoditySource.author} · {marxCommoditySource.title} · p. {folio.data.page}
                </small>
              </section>

              <section>
                <span>QUÉ ESTÁ HACIENDO MARX AQUÍ</span>
                <p>{folio.data.explanation}</p>
              </section>

              <section>
                <span>FUNCIÓN EN LA SECUENCIA</span>
                <p>{folio.data.role}</p>
              </section>

              <section className="marx-folio-schema-panel">
                <span>ESQUEMA</span>
                {folio.data.schema ? (
                  <AnimatedConceptSchema
                    key={`folio-schema-${folio.id}`}
                    schema={folio.data.schema}
                  />
                ) : (
                  <div className="marx-folio-diagram">
                    {folio.data.diagram.map((item, index) => (
                      <b key={`${folio.id}-folio-${index}`}>{item}</b>
                    ))}
                  </div>
                )}
              </section>

              <section className="marx-folio-relations-panel">
                <span>RELACIONES</span>
                <div className="marx-folio-relations">
                  <div>
                    <small>depende de</small>
                    {folio.data.dependsOn.length
                      ? folio.data.dependsOn.map((id) => {
                          const node = marxCommodityNodeById(id)
                          return (
                            <button
                              key={id}
                              type="button"
                              onClick={() => {
                                setFolioId(id)
                                setSelectedId(id)
                              }}
                            >
                              {node?.data.code} · {node?.data.title}
                            </button>
                          )
                        })
                      : <em>punto de partida</em>}
                  </div>

                  <div>
                    <small>abre hacia</small>
                    {folio.data.produces.length
                      ? folio.data.produces.map((id) => {
                          const node = marxCommodityNodeById(id)
                          return (
                            <button
                              key={id}
                              type="button"
                              onClick={() => {
                                setFolioId(id)
                                setSelectedId(id)
                              }}
                            >
                              {node?.data.code} · {node?.data.title}
                            </button>
                          )
                        })
                      : <em>fin del rango</em>}
                  </div>
                </div>
              </section>

              <section className="marx-folio-question">
                <span>PREGUNTA DE CONTROL</span>
                <strong>{folio.data.question}</strong>
              </section>
            </div>
          </article>
        </div>
      ), overlayHost)}
      {relationSheet && relationSource && relationTarget && createPortal((
        <div
          className="marx-relation-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setRelationId(null)
          }}
        >
          <article
            className="marx-relation-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="marx-relation-title"
          >
            <header>
              <div>
                <span>
                  {relationSheet.id} · {relationSheet.type} · pp. {relationSheet.pages}
                </span>
                <h2 id="marx-relation-title">{relationSheet.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setRelationId(null)}
                aria-label="Cerrar relación"
              >
                ×
              </button>
            </header>

            <div className="marx-relation-grid">
              <section className="marx-relation-node">
                <span>ORIGEN</span>
                <strong>
                  {relationSource.data.code} · {relationSource.data.title}
                </strong>
                <blockquote>{relationSource.data.excerpt}</blockquote>
                <button
                  type="button"
                  onClick={() => {
                    setRelationId(null)
                    selectById(relationSource.id)
                  }}
                >
                  Ir al nodo
                </button>
              </section>

              <section className="marx-relation-node">
                <span>DESTINO</span>
                <strong>
                  {relationTarget.data.code} · {relationTarget.data.title}
                </strong>
                <blockquote>{relationTarget.data.excerpt}</blockquote>
                <button
                  type="button"
                  onClick={() => {
                    setRelationId(null)
                    selectById(relationTarget.id)
                  }}
                >
                  Ir al nodo
                </button>
              </section>

              <section className="marx-relation-synthesis">
                <span>LECTURA TRANSVERSAL</span>
                <p>{relationSheet.synthesis}</p>
              </section>

              <section>
                <span>POR QUÉ IMPORTA</span>
                <p>{relationSheet.why}</p>
              </section>

              <section className="marx-relation-warning">
                <span>NO CONFUNDIR</span>
                <p>{relationSheet.distinction}</p>
              </section>

              <section>
                <span>ESQUEMA</span>
                <div className="marx-relation-diagram">
                  {relationSheet.diagram.map((item, index) => (
                    <b key={`${relationSheet.id}-diagram-${index}`}>{item}</b>
                  ))}
                </div>
              </section>

              <section className="marx-relation-question">
                <span>PREGUNTA DE CONTROL</span>
                <strong>{relationSheet.question}</strong>
              </section>
            </div>
          </article>
        </div>
      ), overlayHost)}
    </main>
  )
}

export default function MarxCommodityValueSystem() {
  return (
    <ReactFlowProvider>
      <StudyCanvas />
    </ReactFlowProvider>
  )
}
