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
import './MarxCommodityValueSystem.css'

import LukacsReificationNode from '../components/lukacs/LukacsReificationNode'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  lukacsReificationConceptualEdges,
  lukacsReificationCrossRelationById,
  lukacsReificationCrossRelations,
  lukacsReificationEdges,
  lukacsReificationGuidedRoute,
  lukacsReificationNodeById,
  lukacsReificationNodes,
  lukacsReificationPhases,
  lukacsReificationRoutes,
  lukacsReificationSource,
} from '../data/lukacsReificationSystem'

const nodeTypes = {
  text: LukacsReificationNode,
  core: LukacsReificationNode,
}

function relatedSet(id, includeConceptual = false) {
  if (!id) return new Set()
  const set = new Set([id])

  lukacsReificationEdges.forEach((edge) => {
    if (edge.source === id) set.add(edge.target)
    if (edge.target === id) set.add(edge.source)
  })

  if (includeConceptual) {
    lukacsReificationConceptualEdges.forEach((edge) => {
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
  const [relationId, setRelationId] = useState(null)
  const [conceptualMode, setConceptualMode] = useState(false)
  const [guidedMode, setGuidedMode] = useState(false)
  const [history, setHistory] = useState([])
  const [guidedIndex, setGuidedIndex] = useState(() => {
    try {
      const value = Number(window.localStorage.getItem('philosophia-lukacs-reification-step') || 0)
      return Number.isFinite(value)
        ? Math.min(Math.max(value, 0), lukacsReificationGuidedRoute.length - 1)
        : 0
    } catch {
      return 0
    }
  })
  const workspaceRef = useRef(null)
  const [workspaceFullscreen, setWorkspaceFullscreen] = useState(false)
  const { fitView, setCenter, getNodes } = useReactFlow()

  const selected = lukacsReificationNodeById(selectedId)
  const folio = lukacsReificationNodeById(folioId)
  const relationSheet = lukacsReificationCrossRelationById(relationId)
  const relationSource = relationSheet ? lukacsReificationNodeById(relationSheet.source) : null
  const relationTarget = relationSheet ? lukacsReificationNodeById(relationSheet.target) : null
  const guidedStep = lukacsReificationGuidedRoute[guidedIndex] || null
  const guidedCurrent = guidedStep ? lukacsReificationNodeById(guidedStep.id) : null
  const guidedNext = lukacsReificationGuidedRoute[guidedIndex + 1] || null
  const guidedPrev = lukacsReificationGuidedRoute[guidedIndex - 1] || null

  useEffect(() => {
    const syncFullscreen = () => {
      const active = document.fullscreenElement || document.webkitFullscreenElement || null
      setWorkspaceFullscreen(active === workspaceRef.current)
      window.setTimeout(() => fitView({ padding: 0.06, duration: 420 }), 100)
    }

    document.addEventListener('fullscreenchange', syncFullscreen)
    document.addEventListener('webkitfullscreenchange', syncFullscreen)
    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreen)
      document.removeEventListener('webkitfullscreenchange', syncFullscreen)
    }
  }, [fitView])

  const toggleWorkspaceFullscreen = useCallback(async () => {
    const element = workspaceRef.current
    if (!element) return

    const active = document.fullscreenElement || document.webkitFullscreenElement || null
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

    window.setTimeout(() => fitView({ padding: 0.06, duration: 420 }), 100)
  }, [fitView])

  const routeIds = useMemo(() => {
    if (route === 'all') return new Set(lukacsReificationNodes.map((node) => node.id))
    return new Set(
      lukacsReificationNodes
        .filter((node) => node.data.branch.includes(route))
        .map((node) => node.id),
    )
  }, [route])

  const routeSupport = useMemo(() => {
    if (route === 'all') return new Set()
    const support = new Set()
    lukacsReificationNodes.forEach((node) => {
      if (!routeIds.has(node.id)) return
      node.data.dependsOn.forEach((id) => support.add(id))
    })
    return support
  }, [route, routeIds])

  const routeSequence = useMemo(
    () =>
      lukacsReificationNodes
        .filter((node) => route === 'all' || routeIds.has(node.id))
        .map((node) => node.id),
    [route, routeIds],
  )

  const routeNumberById = useMemo(
    () => new Map(routeSequence.map((id, index) => [id, index + 1])),
    [routeSequence],
  )

  const routeCurrentIndex =
    route !== 'all' && selectedId ? routeSequence.indexOf(selectedId) : -1
  const routePrevId = routeCurrentIndex > 0 ? routeSequence[routeCurrentIndex - 1] : null
  const routeNextId =
    routeCurrentIndex >= 0
      ? routeSequence[routeCurrentIndex + 1] || null
      : routeSequence[0] || null
  const routeCurrentLabel =
    lukacsReificationRoutes.find((item) => item.id === route)?.label || 'Ruta conceptual'

  const selection = useMemo(
    () => relatedSet(selectedId, conceptualMode),
    [selectedId, conceptualMode],
  )

  const selectedCrossRelations = useMemo(
    () =>
      selectedId
        ? lukacsReificationCrossRelations.filter(
            (relation) => relation.source === selectedId || relation.target === selectedId,
          )
        : [],
    [selectedId],
  )

  const nodes = useMemo(
    () =>
      lukacsReificationNodes.map((node) => {
        const routeActive = routeIds.has(node.id)
        const support = routeSupport.has(node.id)
        const inSelection = selection.has(node.id)
        const isGuidedCurrent = guidedMode && node.id === guidedStep?.id
        const isGuidedNext = guidedMode && node.id === guidedNext?.id

        return {
          ...node,
          hidden: guidedMode
            ? !isGuidedCurrent && !isGuidedNext
            : route !== 'all' && !routeActive && !support,
          draggable: false,
          data: {
            ...node.data,
            routeActive: route !== 'all' && routeActive,
            routeNumber: route !== 'all' && routeActive ? routeNumberById.get(node.id) || null : null,
            routeTotal: route !== 'all' && routeActive ? routeSequence.length : null,
            highlighted: !guidedMode && selectedId && node.id !== selectedId && inSelection,
            dimmed: guidedMode
              ? !isGuidedCurrent && !isGuidedNext && node.id !== selectedId
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
      routeNumberById,
      routeSequence.length,
      selection,
      selectedId,
      guidedMode,
      guidedStep,
      guidedNext,
    ],
  )

  const edges = useMemo(
    () =>
      [
        ...lukacsReificationEdges,
        ...(conceptualMode ? lukacsReificationConceptualEdges : []),
      ].map((edge) => {
        const conceptual = edge.layer === 'conceptual'
        const sourceVisible = routeIds.has(edge.source) || routeSupport.has(edge.source)
        const targetVisible = routeIds.has(edge.target) || routeSupport.has(edge.target)
        const routeVisible = route === 'all' || (sourceVisible && targetVisible)
        const guidedActive =
          guidedMode &&
          guidedCurrent &&
          (
            (edge.target === guidedCurrent.id && guidedCurrent.data.dependsOn.includes(edge.source)) ||
            (edge.source === guidedCurrent.id && edge.target === guidedNext?.id)
          )
        const touchesSelected =
          selectedId && (edge.source === selectedId || edge.target === selectedId)
        const colors = {
          foundation:'#526c59',
          manifestation:'#496a78',
          analogy:'#7a5a8c',
          development:'#9c7434',
          inversion:'#8b3d34',
          history:'#6c6650',
        }
        const stroke = guidedActive
          ? '#526c59'
          : conceptual
            ? colors[edge.conceptualType] || '#7a5a8c'
            : edge.relation === 'critical'
              ? '#8b3d34'
              : touchesSelected
                ? '#9c7434'
                : '#61584d'

        return {
          ...edge,
          hidden: !guidedMode && !routeVisible,
          type:'smoothstep',
          label: conceptual ? edge.label : undefined,
          labelStyle: conceptual ? { fill:stroke, fontSize:9, fontWeight:800 } : undefined,
          labelBgStyle: conceptual ? { fill:'#f7f0e4', fillOpacity:0.9 } : undefined,
          style:{
            stroke,
            strokeDasharray: conceptual ? '8 6' : undefined,
            strokeWidth: guidedActive ? 3 : conceptual ? 2 : touchesSelected ? 2.8 : 1.2,
            opacity: guidedMode
              ? guidedActive ? 1 : 0.04
              : conceptual ? touchesSelected ? 1 : 0.78
              : touchesSelected ? 1
              : route === 'all' ? 0.28 : 0.64,
          },
          markerEnd:{
            type:MarkerType.ArrowClosed,
            width:guidedActive ? 13 : conceptual ? 12 : 10,
            height:guidedActive ? 13 : conceptual ? 12 : 10,
            color:stroke,
          },
        }
      }),
    [
      conceptualMode,
      guidedMode,
      guidedCurrent,
      guidedNext,
      route,
      routeIds,
      routeSupport,
      selectedId,
    ],
  )

  const selectNode = useCallback(
    (node) => {
      if (!node) return
      if (guidedMode) setGuidedMode(false)
      setSelectedId(node.id)
      setHistory((current) => {
        if (current[current.length - 1] === node.id) return current
        return [...current.slice(-9), node.id]
      })
      setCenter(node.position.x + 150, node.position.y + 90, {
        zoom:1.05,
        duration:450,
      })
    },
    [guidedMode, setCenter],
  )

  const selectById = useCallback(
    (id) => {
      const node = lukacsReificationNodeById(id)
      if (node) selectNode(node)
    },
    [selectNode],
  )

  const jumpRouteNode = useCallback(
    (id) => {
      const node = lukacsReificationNodeById(id)
      if (!node) return
      setSelectedId(id)
      setHistory((current) => {
        if (current[current.length - 1] === id) return current
        return [...current.slice(-9), id]
      })
      window.requestAnimationFrame(() => {
        setCenter(node.position.x + 150, node.position.y + 90, {
          zoom:1.05,
          duration:450,
        })
      })
    },
    [setCenter],
  )

  const jumpGuided = useCallback(
    (index) => {
      const safe = Math.min(Math.max(index, 0), lukacsReificationGuidedRoute.length - 1)
      const step = lukacsReificationGuidedRoute[safe]
      const node = step ? lukacsReificationNodeById(step.id) : null
      if (!node) return

      setGuidedMode(true)
      setRoute('all')
      setGuidedIndex(safe)
      setSelectedId(node.id)
      setRelationId(null)
      setFolioId(null)

      try {
        window.localStorage.setItem('philosophia-lukacs-reification-step', String(safe))
      } catch {}

      setCenter(node.position.x + 150, node.position.y + 90, {
        zoom:1.05,
        duration:500,
      })
    },
    [setCenter],
  )

  useEffect(() => {
    if (guidedMode || route === 'all') return
    const timer = window.setTimeout(() => {
      const visible = getNodes().filter((node) => !node.hidden)
      if (visible.length) {
        fitView({ nodes:visible, padding:0.16, duration:650, maxZoom:0.9 })
      }
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
          <p>Lukács · Historia y conciencia de clase</p>
          <h1>La cosificación <em>como sistema social</em></h1>
          <p className="marx-study-lead">
            Reconstrucción granular del texto: mercancía, trabajo, racionalización,
            conciencia, instituciones, crisis, ciencia y pérdida de totalidad.
          </p>
        </div>
        <aside>
          <span>TAREA · 6 OCT 2026</span>
          <strong>58 nodos · 13 relaciones transversales</strong>
          <b>{lukacsReificationSource.assignedPages}</b>
          <small>Fuente: PDF + transcripción y dossier del vault PHILOSOPHIA</small>
        </aside>
      </header>

      <section className="marx-source-boundary">
        <div>
          <span>CONTROL DE FUENTE</span>
          <strong>El sistema no completa el texto con conocimiento externo.</strong>
          <p>{lukacsReificationSource.boundary}</p>
        </div>
        <div>
          <span>LECTURA</span>
          <strong>{lukacsReificationSource.author}</strong>
          <p>{lukacsReificationSource.title}</p>
          <small>{lukacsReificationSource.edition}</small>
        </div>
      </section>

      <section className="marx-guided-launch">
        <div>
          <span>LECTIO ORDINATA</span>
          <strong>Ruta guiada · {lukacsReificationGuidedRoute.length} pasos nucleares</strong>
          <p>
            Los 58 nodos conservan detalles, autores y mediaciones; la guía recorre sólo
            los movimientos principales. Actual y siguiente permanecen visibles a la vez.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (guidedMode) {
              setGuidedMode(false)
              setSelectedId(null)
              setTimeout(() => fitView({ padding:0.08, duration:450 }), 0)
            } else {
              jumpGuided(guidedIndex)
            }
          }}
        >
          {guidedMode ? 'Salir de ruta guiada' : 'Continuar · paso ' + (guidedIndex + 1)}
        </button>
      </section>

      {guidedMode && guidedCurrent && (
        <section className="marx-guided-panel">
          <div className="marx-guided-progress">
            <span>Paso {guidedIndex + 1} / {lukacsReificationGuidedRoute.length}</span>
            <div>
              <i
                style={{
                  width: (((guidedIndex + 1) / lukacsReificationGuidedRoute.length) * 100) + '%',
                }}
              />
            </div>
          </div>

          <div className="marx-guided-phases">
            {lukacsReificationPhases.map((phase) => (
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
          {lukacsReificationRoutes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={route === item.id ? 'is-active' : ''}
              onClick={() => {
                setGuidedMode(false)
                setRoute(item.id)
                setSelectedId(null)
                if (item.id === 'all') {
                  setTimeout(() => fitView({ padding:0.08, duration:500 }), 0)
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
            className={conceptualMode ? 'is-conceptual-active' : ''}
            onClick={() => {
              setConceptualMode((value) => !value)
              setRelationId(null)
            }}
          >
            Relaciones II · {conceptualMode ? 'ON' : 'OFF'}
          </button>
          <button
            type="button"
            onClick={() => {
              setGuidedMode(false)
              setConceptualMode(false)
              setRoute('all')
              setSelectedId(null)
              setRelationId(null)
              setTimeout(() => fitView({ padding:0.08, duration:500 }), 0)
            }}
          >
            Ver sistema completo
          </button>
        </div>
      </section>

      <section
        ref={workspaceRef}
        className={workspaceFullscreen ? 'marx-study-workspace is-fullscreen' : 'marx-study-workspace'}
      >
        <div className="marx-flow-panel">
          <div className="marx-flow-caption">
            <div>
              <span>STRUCTURA REIFICATIONIS</span>
              <strong>mercancía → cosificación → trabajo → cálculo → instituciones → crisis → ciencia → totalidad</strong>
            </div>
            <div className="marx-flow-caption-actions">
              <div className="marx-flow-legend">
                <span>nodo textual</span>
                <span>nodo nuclear</span>
                <span>detalle</span>
                <span className="is-conceptual">relación II</span>
              </div>
              <button
                type="button"
                className="marx-workspace-fullscreen-toggle"
                onClick={toggleWorkspaceFullscreen}
                aria-label={workspaceFullscreen ? 'Salir de pantalla completa' : 'Abrir sistema en pantalla completa'}
                title={workspaceFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
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
              fitViewOptions={{ padding:0.08 }}
              minZoom={0.04}
              maxZoom={1.6}
              nodesConnectable={false}
              proOptions={{ hideAttribution:true }}
            >
              <Background gap={32} size={1} />
              <Controls showInteractive={false} />
              <MiniMap pannable zoomable nodeStrokeWidth={3} />
            </ReactFlow>
          </div>
        </div>

        <aside className="marx-inspector">
          <div className="marx-inspector-scroll">
            {selected ? (
              <>
                <div className="marx-inspector-head">
                  <span>{selected.data.phase}</span>
                  <b>{selected.data.code}</b>
                </div>

                <h2>{selected.data.title}</h2>

                <section className="marx-inspector-text">
                  <span>TEXTO / IDEA EXPLÍCITA</span>
                  <blockquote>{selected.data.excerpt}</blockquote>
                  <small>Lukács · p. {selected.data.page}</small>
                </section>

                <section>
                  <span>EXPLICACIÓN</span>
                  <p>{selected.data.explanation}</p>
                </section>

                <section>
                  <span>FUNCIÓN EN LA SECUENCIA</span>
                  <p>{selected.data.role}</p>
                </section>

                <section>
                  <span>CONCEPTOS</span>
                  <div className="marx-inspector-concepts">
                    {selected.data.concepts.map((concept) => (
                      <b key={selected.id + '-concept-' + concept}>{concept}</b>
                    ))}
                  </div>
                </section>

                {selected.data.authors.length > 0 && (
                  <section>
                    <span>AUTORES / REFERENCIAS</span>
                    <div className="marx-inspector-tags">
                      {selected.data.authors.map((author) => (
                        <b key={selected.id + '-author-' + author}>{author}</b>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <span>DEPENDENCIAS</span>
                  <div className="marx-inspector-links">
                    {selected.data.dependsOn.length
                      ? selected.data.dependsOn.map((id) => {
                          const node = lukacsReificationNodeById(id)
                          return (
                            <button key={'dep-' + id} type="button" onClick={() => selectById(id)}>
                              <b>{node?.data.code}</b>
                              <small>{node?.data.title}</small>
                            </button>
                          )
                        })
                      : <em>punto de partida</em>}
                  </div>
                </section>

                <section>
                  <span>ABRE HACIA</span>
                  <div className="marx-inspector-links">
                    {selected.data.produces.length
                      ? selected.data.produces.map((id) => {
                          const node = lukacsReificationNodeById(id)
                          return (
                            <button key={'next-' + id} type="button" onClick={() => selectById(id)}>
                              <b>{node?.data.code}</b>
                              <small>{node?.data.title}</small>
                            </button>
                          )
                        })
                      : <em>fin del fragmento</em>}
                  </div>
                </section>

                {selectedCrossRelations.length > 0 && (
                  <section className="marx-inspector-conceptual">
                    <span>RELACIONES DE SEGUNDO NIVEL</span>
                    <p>Conexiones transversales reconstruidas desde distintos momentos del mismo texto.</p>
                    <div>
                      {selectedCrossRelations.map((relation) => {
                        const otherId = relation.source === selected.id ? relation.target : relation.source
                        const other = lukacsReificationNodeById(otherId)
                        return (
                          <button key={relation.id} type="button" onClick={() => setRelationId(relation.id)}>
                            <b>{relation.id}</b>
                            <strong>{relation.title}</strong>
                            <small>↔ {other?.data.code} · {other?.data.title}</small>
                          </button>
                        )
                      })}
                    </div>
                  </section>
                )}

                <section className="marx-inspector-question">
                  <span>PREGUNTA DE CONTROL</span>
                  <strong>{selected.data.question}</strong>
                </section>

                <button
                  type="button"
                  className="marx-open-folio"
                  onClick={() => setFolioId(selected.id)}
                >
                  Abrir folio + esquema ↗
                </button>
              </>
            ) : (
              <div className="marx-inspector-empty">
                <span>SELECTIO</span>
                <strong>Seleccione un nodo</strong>
                <p>
                  El sistema contiene 58 nodos: tesis nucleares, mediaciones, detalles,
                  autores citados y conexiones internas reconstruidas desde el vault.
                </p>
              </div>
            )}
          </div>

          {workspaceFullscreen && !guidedMode && route !== 'all' && routeSequence.length > 0 && (
            <div className="marx-inspector-route-footer" aria-label="Navegación de ruta">
              <button type="button" disabled={!routePrevId} onClick={() => jumpRouteNode(routePrevId)}>
                ← Anterior
              </button>
              <div className="marx-inspector-route-progress">
                <small>{routeCurrentLabel}</small>
                <strong>
                  {routeCurrentIndex >= 0 ? String(routeCurrentIndex + 1).padStart(2, '0') : '—'}
                  {' / '}
                  {routeSequence.length}
                </strong>
              </div>
              <button type="button" disabled={!routeNextId} onClick={() => jumpRouteNode(routeNextId)}>
                {routeCurrentIndex >= 0 ? 'Siguiente →' : 'Empezar →'}
              </button>
            </div>
          )}

          {guidedMode && workspaceFullscreen && guidedCurrent && (
            <div className="marx-inspector-guided-footer" aria-label="Navegación de ruta guiada">
              <button type="button" disabled={!guidedPrev} onClick={() => jumpGuided(guidedIndex - 1)}>
                ← Anterior
              </button>
              <div className="marx-inspector-guided-progress">
                <small>MODO GUÍA</small>
                <strong>Paso {guidedIndex + 1} / {lukacsReificationGuidedRoute.length}</strong>
              </div>
              <button type="button" disabled={!guidedNext} onClick={() => jumpGuided(guidedIndex + 1)}>
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
            const node = lukacsReificationNodeById(id)
            return (
              <span key={id + '-' + index}>
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
        <span>Arquitectura de la tarea</span>
        <div>
          <article><b>01</b><strong>Mercancía</strong><p>fetichismo · universalización · objetividad.</p></article>
          <article><b>02</b><strong>Trabajo</strong><p>abstracción · tiempo · cálculo · fragmentación.</p></article>
          <article><b>03</b><strong>Instituciones</strong><p>Estado · derecho · burocracia · profesiones.</p></article>
          <article><b>04</b><strong>Totalidad</strong><p>crisis · ciencia · formalismo · antinomias.</p></article>
        </div>
      </section>

      <footer className="marx-study-footer">
        <Link to="/tareas">← Volver al tablero</Link>
        <span>Ware · Verdinglichung · Rationalisierung · Totalität</span>
        <Link to="/semestre/5/teoria-critica">Teoría Crítica ↗</Link>
      </footer>

      {folio && (
        <div
          className="marx-folio-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setFolioId(null)
          }}
        >
          <article className="marx-folio" role="dialog" aria-modal="true" aria-labelledby="lukacs-folio-title">
            <header>
              <div>
                <span>{folio.data.phase} · p. {folio.data.page}</span>
                <h2 id="lukacs-folio-title">{folio.data.title}</h2>
              </div>
              <button type="button" onClick={() => setFolioId(null)} aria-label="Cerrar">×</button>
            </header>

            <div className="marx-folio-grid">
              <section className="marx-folio-source">
                <span>TEXTO / IDEA EXPLÍCITA</span>
                <blockquote>{folio.data.excerpt}</blockquote>
                <small>{lukacsReificationSource.author} · {lukacsReificationSource.title}</small>
              </section>

              <section>
                <span>QUÉ ESTÁ HACIENDO LUKÁCS AQUÍ</span>
                <p>{folio.data.explanation}</p>
              </section>

              <section>
                <span>FUNCIÓN EN LA SECUENCIA</span>
                <p>{folio.data.role}</p>
              </section>

              <section className="marx-folio-schema-panel">
                <span>ESQUEMA</span>
                <AnimatedConceptSchema key={'lukacs-schema-' + folio.id} schema={folio.data.schema} />
              </section>

              <section className="marx-folio-relations-panel">
                <span>RELACIONES</span>
                <div className="marx-folio-relations">
                  <div>
                    <small>depende de</small>
                    {folio.data.dependsOn.length
                      ? folio.data.dependsOn.map((id) => {
                          const node = lukacsReificationNodeById(id)
                          return (
                            <button key={id} type="button" onClick={() => {
                              setFolioId(id)
                              setSelectedId(id)
                            }}>
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
                          const node = lukacsReificationNodeById(id)
                          return (
                            <button key={id} type="button" onClick={() => {
                              setFolioId(id)
                              setSelectedId(id)
                            }}>
                              {node?.data.code} · {node?.data.title}
                            </button>
                          )
                        })
                      : <em>umbral de la sección II</em>}
                  </div>
                </div>
              </section>

              {folio.data.authors.length > 0 && (
                <section>
                  <span>AUTORES / REFERENCIAS</span>
                  <div className="marx-folio-diagram">
                    {folio.data.authors.map((author) => <b key={author}>{author}</b>)}
                  </div>
                </section>
              )}

              <section className="marx-folio-question">
                <span>PREGUNTA DE CONTROL</span>
                <strong>{folio.data.question}</strong>
              </section>
            </div>
          </article>
        </div>
      )}

      {relationSheet && relationSource && relationTarget && (
        <div
          className="marx-relation-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setRelationId(null)
          }}
        >
          <article className="marx-relation-sheet" role="dialog" aria-modal="true" aria-labelledby="lukacs-relation-title">
            <header>
              <div>
                <span>{relationSheet.id} · {relationSheet.type} · pp. {relationSheet.pages}</span>
                <h2 id="lukacs-relation-title">{relationSheet.title}</h2>
              </div>
              <button type="button" onClick={() => setRelationId(null)} aria-label="Cerrar relación">×</button>
            </header>

            <div className="marx-relation-grid">
              <section className="marx-relation-node">
                <span>ORIGEN</span>
                <strong>{relationSource.data.code} · {relationSource.data.title}</strong>
                <blockquote>{relationSource.data.excerpt}</blockquote>
                <button type="button" onClick={() => {
                  setRelationId(null)
                  selectById(relationSource.id)
                }}>Ir al nodo</button>
              </section>

              <section className="marx-relation-node">
                <span>DESTINO</span>
                <strong>{relationTarget.data.code} · {relationTarget.data.title}</strong>
                <blockquote>{relationTarget.data.excerpt}</blockquote>
                <button type="button" onClick={() => {
                  setRelationId(null)
                  selectById(relationTarget.id)
                }}>Ir al nodo</button>
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
                    <b key={relationSheet.id + '-diagram-' + index}>{item}</b>
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
      )}
    </main>
  )
}

export default function LukacsReificationSystem() {
  return (
    <ReactFlowProvider>
      <StudyCanvas />
    </ReactFlowProvider>
  )
}
