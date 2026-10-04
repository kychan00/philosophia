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

import HartmannChapterNode from '../components/ontology/HartmannChapterNode'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  hartmannChapterCrossRelations,
  hartmannChapterEdges,
  hartmannChapterGuidedRoute,
  hartmannChapterExposition,
  hartmannChapterNodeById,
  hartmannChapterNodes,
  hartmannChapterRoutes,
  hartmannChapterSource,
} from '../data/hartmannChapterOneSystem'
import './HartmannChapterOneSystem.css'

const nodeTypes = {
  text: HartmannChapterNode,
  core: HartmannChapterNode,
}

function pageNumber(node) {
  const match = String(node?.data?.page || '').match(/\d+/)
  return match ? Number(match[0]) : Number.POSITIVE_INFINITY
}

function nodePriority(a, b) {
  const pageDelta = pageNumber(a) - pageNumber(b)
  if (pageDelta) return pageDelta
  const ax = Number.isFinite(a?.position?.x) ? a.position.x : 0
  const bx = Number.isFinite(b?.position?.x) ? b.position.x : 0
  if (ax !== bx) return ax - bx
  const ay = Number.isFinite(a?.position?.y) ? a.position.y : 0
  const by = Number.isFinite(b?.position?.y) ? b.position.y : 0
  if (ay !== by) return ay - by
  return String(a?.id || '').localeCompare(String(b?.id || ''), 'es', { numeric: true })
}

function buildRouteReadingOrder(routeId) {
  const routeNodes = routeId === 'all'
    ? hartmannChapterNodes
    : hartmannChapterNodes.filter((node) => node.data.branch.includes(routeId))

  const ids = new Set(routeNodes.map((node) => node.id))
  const byId = new Map(routeNodes.map((node) => [node.id, node]))
  const indegree = new Map(routeNodes.map((node) => [node.id, 0]))
  const outgoing = new Map(routeNodes.map((node) => [node.id, []]))

  routeNodes.forEach((node) => {
    node.data.dependsOn.forEach((dependencyId) => {
      if (!ids.has(dependencyId)) return
      indegree.set(node.id, (indegree.get(node.id) || 0) + 1)
      outgoing.get(dependencyId)?.push(node.id)
    })
  })

  const ready = routeNodes
    .filter((node) => (indegree.get(node.id) || 0) === 0)
    .sort(nodePriority)

  const ordered = []
  const seen = new Set()

  while (ready.length) {
    ready.sort(nodePriority)
    const current = ready.shift()
    if (!current || seen.has(current.id)) continue
    seen.add(current.id)
    ordered.push(current.id)

    ;(outgoing.get(current.id) || []).forEach((targetId) => {
      indegree.set(targetId, (indegree.get(targetId) || 0) - 1)
      if ((indegree.get(targetId) || 0) === 0) {
        const target = byId.get(targetId)
        if (target) ready.push(target)
      }
    })
  }

  routeNodes
    .filter((node) => !seen.has(node.id))
    .sort(nodePriority)
    .forEach((node) => ordered.push(node.id))

  return ordered
}

function relatedSet(id, includeCross) {
  if (!id) return new Set()
  const set = new Set([id])

  hartmannChapterEdges.forEach((edge) => {
    if (edge.source === id) set.add(edge.target)
    if (edge.target === id) set.add(edge.source)
  })

  if (includeCross) {
    hartmannChapterCrossRelations.forEach((edge) => {
      if (edge.source === id) set.add(edge.target)
      if (edge.target === id) set.add(edge.source)
    })
  }

  return set
}

function StudyCanvas() {
  const [route, setRoute] = useState('all')
  const [selectedId, setSelectedId] = useState(null)
  const [folioId, setFolioId] = useState(null)
  const [guidedMode, setGuidedMode] = useState(false)
  const [guidedIndex, setGuidedIndex] = useState(0)
  const [showCross, setShowCross] = useState(false)
  const [history, setHistory] = useState([])
  const [workspaceFullscreen, setWorkspaceFullscreen] = useState(false)
  const workspaceRef = useRef(null)
  const { fitView, setCenter, getNodes } = useReactFlow()

  const selected = hartmannChapterNodeById(selectedId)
  const folio = hartmannChapterNodeById(folioId)
  const guidedStep = hartmannChapterGuidedRoute[guidedIndex] || null
  const guidedCurrent = guidedStep ? hartmannChapterNodeById(guidedStep.id) : null
  const guidedNext = hartmannChapterGuidedRoute[guidedIndex + 1] || null
  const guidedPrev = hartmannChapterGuidedRoute[guidedIndex - 1] || null

  const routeIds = useMemo(() => {
    if (route === 'all') return new Set(hartmannChapterNodes.map((node) => node.id))
    return new Set(
      hartmannChapterNodes
        .filter((node) => node.data.branch.includes(route))
        .map((node) => node.id),
    )
  }, [route])

  const routeSupport = useMemo(() => {
    if (route === 'all') return new Set()
    const support = new Set()
    hartmannChapterNodes.forEach((node) => {
      if (!routeIds.has(node.id)) return
      node.data.dependsOn.forEach((id) => support.add(id))
    })
    return support
  }, [route, routeIds])

  const routeSequence = useMemo(() => buildRouteReadingOrder(route), [route])
  const routeNumberById = useMemo(
    () => new Map(routeSequence.map((id, index) => [id, index + 1])),
    [routeSequence],
  )
  const currentIndex = selectedId ? routeSequence.indexOf(selectedId) : -1
  const routeLabel = hartmannChapterRoutes.find((item) => item.id === route)?.label || 'Ruta'
  const prevId = currentIndex > 0 ? routeSequence[currentIndex - 1] : null
  const nextId = currentIndex >= 0
    ? routeSequence[currentIndex + 1] || null
    : routeSequence[0] || null

  const selection = useMemo(
    () => relatedSet(selectedId, showCross),
    [selectedId, showCross],
  )

  const nodes = useMemo(
    () => hartmannChapterNodes.map((node) => {
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
          routeActive: routeActive && route !== 'all',
          routeNumber: routeActive ? routeNumberById.get(node.id) || null : null,
          routeTotal: routeActive ? routeSequence.length : null,
          highlighted: !guidedMode && selectedId && node.id !== selectedId && inSelection,
          dimmed: guidedMode
            ? !isGuidedCurrent && !isGuidedNext
            : Boolean(selectedId) && !inSelection,
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
      routeNumberById,
      routeSequence,
      selection,
      selectedId,
      guidedMode,
      guidedStep,
      guidedNext,
    ],
  )

  const edges = useMemo(() => {
    const base = hartmannChapterEdges.map((edge) => ({ ...edge, layer: 'base' }))
    const cross = showCross
      ? hartmannChapterCrossRelations.map((edge, index) => ({
          ...edge,
          id: 'X' + String(index + 1).padStart(2, '0'),
          layer: 'cross',
        }))
      : []

    return [...base, ...cross].map((edge) => {
      const sourceVisible = routeIds.has(edge.source) || routeSupport.has(edge.source)
      const targetVisible = routeIds.has(edge.target) || routeSupport.has(edge.target)
      const touchesSelected =
        selectedId && (edge.source === selectedId || edge.target === selectedId)
      const isCross = edge.layer === 'cross'
      const color = touchesSelected ? '#9c7434' : isCross ? '#526c59' : '#61584d'

      return {
        ...edge,
        hidden: !guidedMode && route !== 'all' && !(sourceVisible && targetVisible),
        type: 'smoothstep',
        label: edge.label,
        labelStyle: { fill: color, fontSize: 9, fontWeight: 800 },
        labelBgStyle: { fill: '#f7f0e4', fillOpacity: .94 },
        style: {
          stroke: color,
          strokeWidth: touchesSelected ? 2.8 : isCross ? 1.8 : 1.25,
          strokeDasharray: isCross ? '8 6' : undefined,
          opacity: guidedMode
            ? (edge.source === guidedStep?.id || edge.target === guidedStep?.id ? 1 : .07)
            : selectedId
              ? (touchesSelected ? 1 : .16)
              : isCross ? .68 : .52,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: touchesSelected ? 13 : 10,
          height: touchesSelected ? 13 : 10,
          color,
        },
      }
    })
  }, [
    route,
    routeIds,
    routeSupport,
    selectedId,
    guidedMode,
    guidedStep,
    showCross,
  ])

  const selectNode = useCallback((node) => {
    if (!node) return
    setSelectedId(node.id)
    setHistory((current) => {
      if (current[current.length - 1] === node.id) return current
      return [...current.slice(-9), node.id]
    })
    setCenter(node.position.x + 150, node.position.y + 90, {
      zoom: 1.05,
      duration: 450,
    })
  }, [setCenter])

  const jumpTo = useCallback((id) => {
    const node = hartmannChapterNodeById(id)
    if (!node) return
    setSelectedId(id)
    setHistory((current) => {
      if (current[current.length - 1] === id) return current
      return [...current.slice(-9), id]
    })
    window.requestAnimationFrame(() => {
      setCenter(node.position.x + 150, node.position.y + 90, {
        zoom: 1.05,
        duration: 450,
      })
    })
  }, [setCenter])

  const jumpGuided = useCallback((index) => {
    const safe = Math.min(Math.max(index, 0), hartmannChapterGuidedRoute.length - 1)
    const step = hartmannChapterGuidedRoute[safe]
    const node = step ? hartmannChapterNodeById(step.id) : null
    if (!node) return
    setGuidedMode(true)
    setRoute('all')
    setGuidedIndex(safe)
    setSelectedId(node.id)
    setHistory((current) => [...current.slice(-9), node.id])
    setCenter(node.position.x + 150, node.position.y + 90, {
      zoom: 1.05,
      duration: 500,
    })
  }, [setCenter])

  const reset = useCallback(() => {
    setGuidedMode(false)
    setRoute('all')
    setSelectedId(null)
    setFolioId(null)
    setShowCross(false)
    window.setTimeout(() => fitView({ padding: .08, duration: 500 }), 0)
  }, [fitView])

  const toggleWorkspaceFullscreen = useCallback(async () => {
    const element = workspaceRef.current
    if (!element) return
    const active = document.fullscreenElement || document.webkitFullscreenElement

    try {
      if (active) {
        const exit = document.exitFullscreen || document.webkitExitFullscreen
        if (exit) await Promise.resolve(exit.call(document))
        return
      }
      const request = element.requestFullscreen || element.webkitRequestFullscreen
      if (request) {
        await Promise.resolve(request.call(element))
        return
      }
      setWorkspaceFullscreen((value) => !value)
    } catch {
      setWorkspaceFullscreen((value) => !value)
    }

    window.setTimeout(() => fitView({ padding: .06, duration: 420 }), 100)
  }, [fitView])

  useEffect(() => {
    const sync = () => {
      const active = document.fullscreenElement || document.webkitFullscreenElement
      setWorkspaceFullscreen(active === workspaceRef.current)
      window.setTimeout(() => fitView({ padding: .06, duration: 420 }), 100)
    }
    document.addEventListener('fullscreenchange', sync)
    document.addEventListener('webkitfullscreenchange', sync)
    return () => {
      document.removeEventListener('fullscreenchange', sync)
      document.removeEventListener('webkitfullscreenchange', sync)
    }
  }, [fitView])

  useEffect(() => {
    if (!workspaceFullscreen) return undefined
    const active = document.fullscreenElement || document.webkitFullscreenElement
    if (active) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setWorkspaceFullscreen(false)
        window.setTimeout(() => fitView({ padding: .08, duration: 420 }), 80)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [workspaceFullscreen, fitView])

  useEffect(() => {
    if (guidedMode) return
    const timer = window.setTimeout(() => {
      const visible = getNodes().filter((node) => !node.hidden)
      if (!visible.length) return
      fitView({ nodes: visible, padding: .16, duration: 650, maxZoom: .9 })
    }, 120)
    return () => window.clearTimeout(timer)
  }, [route, guidedMode, getNodes, fitView])

  useEffect(() => {
    if (!folioId) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setFolioId(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [folioId])

  const selectedCross = selectedId
    ? hartmannChapterCrossRelations.filter(
        (relation) => relation.source === selectedId || relation.target === selectedId,
      )
    : []

  return (
    <main className="hartmann2d-shell">
      <nav className="hartmann2d-nav">
        <Link to="/tareas/ontologia-ii/hartmann-cosa-en-si">← Tarea Hartmann</Link>
        <Link to="/" className="hartmann2d-brand">Φ · Philosophia</Link>
        <span>Ontología II · FI190</span>
      </nav>

      <header className="hartmann2d-hero">
        <div>
          <span className="hartmann2d-kicker">ARCHIVUM ONTOLOGICUM · SYSTEMA II-D</span>
          <h1>Kantianos y antikantianos <em>el problema que se transforma</em></h1>
          <p>
            Capítulo I de Nicolai Hartmann como mapa navegable: Reinhold, Schulze,
            Maimon, Beck, Jacobi y Bardili.
          </p>
        </div>
        <div className="hartmann2d-hero-question">
          <small>QUAESTIO</small>
          <strong>
            ¿Qué ocurre con la cosa en sí cuando cada autor intenta salvar,
            corregir o abandonar la arquitectura crítica de Kant?
          </strong>
        </div>
      </header>

      <section className="hartmann2d-source">
        <div>
          <small>FRONTERA DE FUENTE</small>
          <strong>{hartmannChapterSource.title}</strong>
          <span>{hartmannChapterSource.chapter}</span>
        </div>
        <div>
          <span>Libro · pp. {hartmannChapterSource.printedPages}</span>
          <span>PDF · pp. {hartmannChapterSource.pdfPages}</span>
          <p>{hartmannChapterSource.boundary}</p>
        </div>
      </section>

      <section className="hartmann2d-guide-launcher">
        <div>
          <small>ITINERARIUM</small>
          <h2>Guía de lectura del capítulo</h2>
          <p>
            Recorre el problema en orden argumental sin sustituir la lectura del texto.
          </p>
        </div>
        <button type="button" onClick={() => jumpGuided(guidedMode ? guidedIndex : 0)}>
          {guidedMode ? 'Volver al paso actual' : 'Iniciar guía'}
        </button>
      </section>

      {guidedMode && guidedStep && (
        <section className="hartmann2d-guide-panel">
          <div className="hartmann2d-guide-progress">
            <span>{guidedStep.phase}</span>
            <strong>{String(guidedIndex + 1).padStart(2, '0')} / {hartmannChapterGuidedRoute.length}</strong>
          </div>
          <div>
            <small>FOCO</small>
            <h3>{guidedStep.focus}</h3>
            <p>{guidedStep.prompt}</p>
          </div>
          <div className="hartmann2d-guide-actions">
            <button type="button" disabled={!guidedPrev} onClick={() => jumpGuided(guidedIndex - 1)}>← anterior</button>
            <button type="button" onClick={() => setGuidedMode(false)}>salir de guía</button>
            <button type="button" disabled={!guidedNext} onClick={() => jumpGuided(guidedIndex + 1)}>siguiente →</button>
          </div>
        </section>
      )}

      <section className="hartmann2d-routes">
        <div className="hartmann2d-routes-head">
          <div>
            <small>RUTAE</small>
            <h2>Rutas conceptuales</h2>
          </div>
          <div className="hartmann2d-toolbar">
            <button
              type="button"
              className={showCross ? 'is-active' : ''}
              onClick={() => setShowCross((value) => !value)}
            >
              relaciones transversales
            </button>
            <button type="button" onClick={reset}>reiniciar</button>
          </div>
        </div>
        <div className="hartmann2d-route-buttons">
          {hartmannChapterRoutes.map((item) => (
            <button
              type="button"
              key={item.id}
              className={route === item.id ? 'is-active' : ''}
              onClick={() => {
                setGuidedMode(false)
                setSelectedId(null)
                setRoute(item.id)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section
        ref={workspaceRef}
        className={'hartmann2d-workspace' + (workspaceFullscreen ? ' is-css-fullscreen' : '')}
      >
        <div className="hartmann2d-flow-panel">
          <div className="hartmann2d-workspace-bar">
            <span>{routeLabel}</span>
            <button type="button" onClick={toggleWorkspaceFullscreen}>
              {workspaceFullscreen ? 'salir de pantalla completa' : 'pantalla completa'}
            </button>
          </div>

          <div className="hartmann2d-flow">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={(_, node) => selectNode(node)}
              onPaneClick={() => {
                if (!guidedMode) setSelectedId(null)
              }}
              nodesDraggable={false}
              minZoom={.18}
              maxZoom={1.7}
              fitView
              fitViewOptions={{ padding: .08 }}
            >
              <Background gap={24} size={1} color="rgba(55,45,36,.13)" />
              <Controls />
              <MiniMap
                pannable
                zoomable
                nodeColor={(node) => node.data?.critical ? '#8b3d34' : '#9c7434'}
              />
            </ReactFlow>
          </div>

          <div className="hartmann2d-route-footer">
            <button type="button" disabled={!prevId} onClick={() => jumpTo(prevId)}>← Anterior</button>
            <span>
              {routeLabel} · {currentIndex >= 0 ? String(currentIndex + 1).padStart(2, '0') : '—'} / {routeSequence.length}
            </span>
            <button type="button" disabled={!nextId} onClick={() => jumpTo(nextId)}>
              {currentIndex >= 0 ? 'Siguiente →' : 'Empezar →'}
            </button>
          </div>
        </div>

        <aside className="hartmann2d-inspector">
          {!selected ? (
            <div className="hartmann2d-empty">
              <span>INSPECTOR</span>
              <h2>Seleccione un nodo</h2>
              <p>
                El mapa atenúa lo no relacionado y conserva vecinos directos.
                Puede iniciar una ruta o usar la guía para seguir el capítulo.
              </p>
            </div>
          ) : (
            <>
              <div className="hartmann2d-inspector-meta">
                <span>{selected.data.phase}</span>
                <b>{selected.data.code} · p. {selected.data.page}</b>
              </div>
              <h2>{selected.data.title}</h2>
              <blockquote>{selected.data.excerpt}</blockquote>

              <section>
                <small>EXPLICATIO</small>
                <p>{selected.data.explanation}</p>
              </section>

              {selected.data.explicitNotes?.length > 0 && (
                <section className="hartmann2d-explicit-notes">
                  <small>NOTAE EXPLICITAE · FUENTE</small>
                  <span className="hartmann2d-source-ref">{selected.data.sourceRef}</span>
                  <ul>
                    {selected.data.explicitNotes.map((note, index) => (
                      <li key={selected.id + '-note-' + index}>{note}</li>
                    ))}
                  </ul>
                </section>
              )}

              {selected.data.textExplanation && (
                <section className="hartmann2d-text-explanation">
                  <small>EXPOSITIO TEXTUALIS</small>
                  <p>{selected.data.textExplanation}</p>
                </section>
              )}

              <section>
                <small>QUAESTIO STUDII</small>
                <p>{selected.data.question}</p>
              </section>

              {selected.data.consequences?.length > 0 && (
                <section>
                  <small>CONSEQUENTIAE</small>
                  <ul>
                    {selected.data.consequences.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              )}

              {selectedCross.length > 0 && (
                <section>
                  <small>RELATIONES TRANSVERSAE</small>
                  <ul>
                    {selectedCross.map((item) => {
                      const otherId = item.source === selectedId ? item.target : item.source
                      const other = hartmannChapterNodeById(otherId)
                      return (
                        <li key={item.source + '-' + item.target}>
                          <button type="button" onClick={() => jumpTo(otherId)}>
                            {item.label} · {other?.data?.title}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </section>
              )}

              {selected.data.schema && (
                <section className="hartmann2d-schema">
                  <small>SCHEMA</small>
                  <AnimatedConceptSchema schema={selected.data.schema} />
                </section>
              )}

              <button
                type="button"
                className="hartmann2d-open-folio"
                onClick={() => setFolioId(selected.id)}
              >
                abrir folio completo ↗
              </button>
            </>
          )}
        </aside>
      </section>

      <section className="hartmann2d-exposition">
        <header>
          <div>
            <small>EXPOSITIO</small>
            <h2>Explicación textual del capítulo</h2>
          </div>
          <p>
            El mapa permite navegar por conceptos; esta lectura continua explica
            cómo cambia el problema de autor en autor sin reducir el capítulo a una red de nodos.
          </p>
        </header>

        <div className="hartmann2d-exposition-grid">
          {hartmannChapterExposition.map((section) => (
            <article key={section.id} id={'expositio-' + section.id}>
              <span>{section.author}</span>
              <h3>{section.title}</h3>
              {section.paragraphs.map((paragraph, index) => (
                <p key={section.id + '-p-' + index}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="hartmann2d-history">
        <div>
          <small>VESTIGIA</small>
          <h2>Historial de navegación</h2>
        </div>
        <div>
          {history.length ? history.map((id) => {
            const item = hartmannChapterNodeById(id)
            return (
              <button type="button" key={id + history.indexOf(id)} onClick={() => jumpTo(id)}>
                <span>{id}</span>{item?.data?.title}
              </button>
            )
          }) : <p>Aún no hay nodos visitados.</p>}
        </div>
      </section>

      <section className="hartmann2d-continuity">
        <div>
          <small>CONTINUITAS</small>
          <h2>Volver al dossier y a la clase</h2>
        </div>
        <div>
          <Link to="/tareas/ontologia-ii/hartmann-cosa-en-si">
            <strong>Tarea · Hartmann y la cosa en sí</strong>
            <span>consigna y dossier de preparación</span>
          </Link>
          <Link to="/semestre/5/ontologia-ii/clase/30-septiembre">
            <strong>Clase · 30 de septiembre</strong>
            <span>recepción postkantiana y aporía causal</span>
          </Link>
          <Link to="/semestre/5/ontologia-ii">
            <strong>Ontología II</strong>
            <span>archivo completo de la materia</span>
          </Link>
        </div>
      </section>

      <footer className="hartmann2d-footer">
        <Link to="/tareas">← Tareas</Link>
        <span>☙ Kant · Reinhold · Schulze · Maimon · Beck · Jacobi · Bardili ❧</span>
        <span>Cap. I · pp. 19–65</span>
      </footer>

      {folio && (
        <div className="hartmann2d-folio-backdrop" role="presentation" onMouseDown={() => setFolioId(null)}>
          <article
            className="hartmann2d-folio"
            role="dialog"
            aria-modal="true"
            aria-label={'Folio de ' + folio.data.title}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button type="button" className="hartmann2d-folio-close" onClick={() => setFolioId(null)}>×</button>
            <div className="hartmann2d-inspector-meta">
              <span>{folio.data.phase}</span>
              <b>{folio.data.code} · Hartmann pp. {folio.data.page}</b>
            </div>
            <h2>{folio.data.title}</h2>
            <blockquote>{folio.data.excerpt}</blockquote>

            <section className="hartmann2d-folio-section">
              <small>EXPLICATIO</small>
              <p>{folio.data.explanation}</p>
            </section>

            {folio.data.explicitNotes?.length > 0 && (
              <section className="hartmann2d-folio-section hartmann2d-explicit-notes">
                <small>NOTAE EXPLICITAE · FUENTE</small>
                <span className="hartmann2d-source-ref">{folio.data.sourceRef}</span>
                <ul>
                  {folio.data.explicitNotes.map((note, index) => (
                    <li key={folio.id + '-folio-note-' + index}>{note}</li>
                  ))}
                </ul>
              </section>
            )}

            {folio.data.textExplanation && (
              <section className="hartmann2d-folio-section hartmann2d-text-explanation">
                <small>EXPOSITIO TEXTUALIS</small>
                <p>{folio.data.textExplanation}</p>
              </section>
            )}

            <div className="hartmann2d-folio-question">
              <small>PREGUNTA</small>
              <strong>{folio.data.question}</strong>
            </div>
            {folio.data.schema && (
              <div className="hartmann2d-folio-schema">
                <AnimatedConceptSchema schema={folio.data.schema} />
              </div>
            )}
          </article>
        </div>
      )}
    </main>
  )
}

export default function HartmannChapterOneSystem() {
  return (
    <ReactFlowProvider>
      <StudyCanvas />
    </ReactFlowProvider>
  )
}
