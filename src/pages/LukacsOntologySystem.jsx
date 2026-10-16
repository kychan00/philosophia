import SectionPedagogy from '../components/philosophy/system2d/SectionPedagogy'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
import '../components/philosophy/system2d/System2DTheme.css'

import LukacsOntologyNode from '../components/lukacs/LukacsOntologyNode'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import { SYSTEM_2D_THEME, resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme'
import {
  lukacsOntologyConceptualEdges,
  lukacsOntologyCrossRelationById,
  lukacsOntologyCrossRelations,
  lukacsOntologyEdges,
  lukacsOntologyGuidedRoute,
  lukacsOntologyNodeById,
  lukacsOntologyNodes,
  lukacsOntologyPhases,
  lukacsOntologyRoutes,
  lukacsOntologySource,
} from '../data/lukacsOntologySystem'

const nodeTypes = {
  text: LukacsOntologyNode,
  core: LukacsOntologyNode,
}

function relatedSet(id, includeConceptual = false) {
  if (!id) return new Set()
  const set = new Set([id])

  lukacsOntologyEdges.forEach((edge) => {
    if (edge.source === id) set.add(edge.target)
    if (edge.target === id) set.add(edge.source)
  })

  if (includeConceptual) {
    lukacsOntologyConceptualEdges.forEach((edge) => {
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
  const [detailMode, setDetailMode] = useState(false)
  const [guidedMode, setGuidedMode] = useState(false)
  const [history, setHistory] = useState([])
  const [guidedIndex, setGuidedIndex] = useState(() => {
    try {
      const value = Number(window.localStorage.getItem('philosophia-lukacs-ontology-step') || 0)
      return Number.isFinite(value)
        ? Math.min(Math.max(value, 0), lukacsOntologyGuidedRoute.length - 1)
        : 0
    } catch {
      return 0
    }
  })
  const workspaceRef = useRef(null)
  const [workspaceFullscreen, setWorkspaceFullscreen] = useState(false)
  const overlayHost =
    workspaceFullscreen && workspaceRef.current ? workspaceRef.current : document.body
  const { fitView, setCenter, getNodes } = useReactFlow()

  const selected = lukacsOntologyNodeById(selectedId)
  const folio = lukacsOntologyNodeById(folioId)
  const relationSheet = lukacsOntologyCrossRelationById(relationId)
  const relationSource = relationSheet ? lukacsOntologyNodeById(relationSheet.source) : null
  const relationTarget = relationSheet ? lukacsOntologyNodeById(relationSheet.target) : null
  const guidedStep = lukacsOntologyGuidedRoute[guidedIndex] || null
  const guidedCurrent = guidedStep ? lukacsOntologyNodeById(guidedStep.id) : null
  const guidedNext = lukacsOntologyGuidedRoute[guidedIndex + 1] || null
  const guidedPrev = lukacsOntologyGuidedRoute[guidedIndex - 1] || null

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
    if (route === 'all') return new Set(lukacsOntologyNodes.map((node) => node.id))
    return new Set(
      lukacsOntologyNodes
        .filter((node) => node.data.branch.includes(route))
        .map((node) => node.id),
    )
  }, [route])

  const routeSupport = useMemo(() => {
    if (route === 'all') return new Set()
    const support = new Set()
    lukacsOntologyNodes.forEach((node) => {
      if (!routeIds.has(node.id)) return
      node.data.dependsOn.forEach((id) => support.add(id))
    })
    return support
  }, [route, routeIds])

  const routeSequence = useMemo(
    () =>
      lukacsOntologyNodes
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
    lukacsOntologyRoutes.find((item) => item.id === route)?.label || 'Ruta conceptual'

  const selection = useMemo(
    () => relatedSet(selectedId, conceptualMode),
    [selectedId, conceptualMode],
  )

  const selectedCrossRelations = useMemo(
    () =>
      selectedId
        ? lukacsOntologyCrossRelations.filter(
            (relation) => relation.source === selectedId || relation.target === selectedId,
          )
        : [],
    [selectedId],
  )

  const nodes = useMemo(
    () =>
      lukacsOntologyNodes.map((node) => {
        const routeActive = routeIds.has(node.id)
        const support = routeSupport.has(node.id)
        const inSelection = selection.has(node.id)
        const isGuidedCurrent = guidedMode && node.id === guidedStep?.id
        const isGuidedNext = guidedMode && node.id === guidedNext?.id

        return {
          ...node,
          hidden: guidedMode
            ? !isGuidedCurrent && !isGuidedNext
            : route === 'all'
              ? Boolean(node.data.micro) && !detailMode
              : !routeActive && !support,
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
      detailMode,
    ],
  )

  const edges = useMemo(
    () =>
      [
        ...lukacsOntologyEdges,
        ...(conceptualMode ? lukacsOntologyConceptualEdges : []),
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
        const stroke = resolveSystem2DEdgeColor({
          guidedActive,
          conceptual,
          conceptualType: edge.conceptualType,
          relation: edge.relation,
          touchesSelected,
        })

        return {
          ...edge,
          hidden: !guidedMode && !routeVisible,
          type:'smoothstep',
          label: conceptual ? edge.label : undefined,
          labelStyle: conceptual ? { fill:stroke, fontSize:9, fontWeight:800 } : undefined,
          labelBgStyle: conceptual ? { fill:SYSTEM_2D_THEME.background.paper, fillOpacity:0.9 } : undefined,
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
      const node = lukacsOntologyNodeById(id)
      if (node) selectNode(node)
    },
    [selectNode],
  )

  const jumpRouteNode = useCallback(
    (id) => {
      const node = lukacsOntologyNodeById(id)
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
      const safe = Math.min(Math.max(index, 0), lukacsOntologyGuidedRoute.length - 1)
      const step = lukacsOntologyGuidedRoute[safe]
      const node = step ? lukacsOntologyNodeById(step.id) : null
      if (!node) return

      setGuidedMode(true)
      setRoute('all')
      setGuidedIndex(safe)
      setSelectedId(node.id)
      setRelationId(null)
      setFolioId(null)

      try {
        window.localStorage.setItem('philosophia-lukacs-ontology-step', String(safe))
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
        <Link to="/biblioteca">← Biblioteca</Link>
        <Link to="/" className="marx-study-brand">Φ · Philosophia</Link>
        <span>Teoría Crítica · FI265</span>
      </nav>

      <header className="marx-study-hero">
        <div>
          <p>Lukács · Marx, ontología del ser social</p>
          <h1>Ontología social <em>como mapa de complejos</em></h1>
          <p className="marx-study-lead">
            Lectura documental por fases: método ontológico, trabajo, economía,
            historicidad, desarrollo desigual, genericidad, valores y socialismo.
          </p>
        </div>
        <aside>
          <span>ESTUDIO DOCUMENTAL · OCT 2026</span>
          <strong>{lukacsOntologyNodes.length} nodos · {lukacsOntologyCrossRelations.length} relaciones transversales</strong>
          <b>{lukacsOntologySource.assignedPages}</b>
          <small>Fuente: notas verificadas del vault PHILOSOPHIA · sin completar páginas ocultas</small>
        </aside>
      </header>

      <section className="marx-source-boundary">
        <div>
          <span>CONTROL DE FUENTE</span>
          <strong>El sistema no completa el texto con conocimiento externo.</strong>
          <p>{lukacsOntologySource.boundary}</p>
        </div>
        <div>
          <span>LECTURA</span>
          <strong>{lukacsOntologySource.author}</strong>
          <p>{lukacsOntologySource.title}</p>
          <small>{lukacsOntologySource.edition}</small>
        </div>
      </section>

      <section className="marx-guided-launch">
        <div>
          <span>LECTIO ORDINATA</span>
          <strong>Ruta guiada · {lukacsOntologyGuidedRoute.length} pasos nucleares</strong>
          <p>
            Los {lukacsOntologyNodes.length} nodos conservan voces, páginas y límites documentales.
            La guía recorre la secuencia de estudio sin convertirla en una deducción atribuida al autor.
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
            <span>Paso {guidedIndex + 1} / {lukacsOntologyGuidedRoute.length}</span>
            <div>
              <i
                style={{
                  width: (((guidedIndex + 1) / lukacsOntologyGuidedRoute.length) * 100) + '%',
                }}
              />
            </div>
          </div>

          <div className="marx-guided-phases">
            {lukacsOntologyPhases.map((phase) => (
              <span key={phase} className={guidedStep?.phase === phase ? 'is-active' : ''}>
                {phase}
              </span>
            ))}
          </div>

          <div className="marx-guided-copy">
            <div>
              <span>{guidedCurrent.data.phase} · p. {guidedCurrent.data.page}</span>
              <strong>{guidedCurrent.data.code} · {guidedCurrent.data.title}</strong>
              <p className="lukacs-guided-summary">Síntesis: {guidedCurrent.data.excerpt}</p>
              <span className="lukacs-source-caption">NOTA DE LECTURA · PDF P. {guidedCurrent.data.sourcePdfPage}</span>
              <blockquote className="lukacs-source-long">{guidedCurrent.data.sourcePassage}</blockquote>
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
          {lukacsOntologyRoutes.map((item) => (
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
            className={detailMode ? 'is-conceptual-active' : ''}
            onClick={() => {
              setGuidedMode(false)
              setDetailMode((value) => !value)
              if (route !== 'all') setRoute('all')
              setSelectedId(null)
              window.setTimeout(() => fitView({ padding:0.08, duration:450 }), 0)
            }}
          >
            Detalles · {detailMode ? 'ON' : 'OFF'}
          </button>
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
              setDetailMode(false)
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
              <span>STRUCTURA ONTOLOGIAE SOCIALIS</span>
              <strong>categorías → trabajo → economía → historicidad → desarrollo desigual → género → valores</strong>
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
          <SectionPedagogy
            nodes={lukacsOntologyNodes}
            routes={lukacsOntologyRoutes}
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
                <div className="marx-inspector-head">
                  <span>{selected.data.phase}</span>
                  <b>{selected.data.code}</b>
                </div>

                <h2>{selected.data.title}</h2>

                <section className="marx-inspector-text">
                  <span>BASE DOCUMENTAL · PDF P. {selected.data.sourcePdfPage}</span>
                  <blockquote className="lukacs-source-long">{selected.data.sourcePassage}</blockquote>
                  <small>{selected.data.sourceAttribution} · página impresa: {selected.data.sourcePrintedPage} · síntesis/paráfrasis; no cita literal</small>
                </section>

                <section className="lukacs-editorial-summary">
                  <span>SÍNTESIS EDITORIAL (NO CITA)</span>
                  <p>{selected.data.excerpt}</p>
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
                          const node = lukacsOntologyNodeById(id)
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
                          const node = lukacsOntologyNodeById(id)
                          return (
                            <button key={'next-' + id} type="button" onClick={() => selectById(id)}>
                              <b>{node?.data.code}</b>
                              <small>{node?.data.title}</small>
                            </button>
                          )
                        })
                      : <em>sin continuidad documentada</em>}
                  </div>
                </section>

                {selectedCrossRelations.length > 0 && (
                  <section className="marx-inspector-conceptual">
                    <span>RELACIONES DE SEGUNDO NIVEL</span>
                    <p>Conexiones transversales reconstruidas desde distintos momentos del mismo texto.</p>
                    <div>
                      {selectedCrossRelations.map((relation) => {
                        const otherId = relation.source === selected.id ? relation.target : relation.source
                        const other = lukacsOntologyNodeById(otherId)
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
                  El sistema contiene {lukacsOntologyNodes.length} nodos documentales. El mapa general muestra primero
                  la estructura nuclear; «Detalles» revela los micro-nodos sin obligar a estudiar todo a la vez.
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
                <strong>Paso {guidedIndex + 1} / {lukacsOntologyGuidedRoute.length}</strong>
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
            const node = lukacsOntologyNodeById(id)
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
        <span>Arquitectura del estudio</span>
        <div>
          <article><b>01</b><strong>Voces</strong><p>Ballestero ≠ Lukács · introducción ≠ texto principal.</p></article>
          <article><b>02</b><strong>Praxis</strong><p>trabajo · teleología · causalidad · objetivación.</p></article>
          <article><b>03</b><strong>Complejos</strong><p>economía · derecho · arte · totalidad heterogénea.</p></article>
          <article><b>04</b><strong>Historia</strong><p>tendencia · azar · desarrollo desigual · clasicidad.</p></article>
          <article><b>05</b><strong>Género y valor</strong><p>socialidad · capacidades · valores · socialismo.</p></article>
        </div>
      </section>

      <footer className="marx-study-footer">
        <Link to="/biblioteca">← Volver a Biblioteca</Link>
        <span>Arbeit · Komplex · Geschichtlichkeit · Gattungswesen</span>
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
                <span>BASE DOCUMENTAL · PDF P. {folio.data.sourcePdfPage}</span>
                <blockquote className="lukacs-source-long">{folio.data.sourcePassage}</blockquote>
                <small>{folio.data.sourceAttribution} · página impresa {folio.data.sourcePrintedPage} · síntesis/paráfrasis; no cita literal</small>
                <p className="lukacs-folio-summary"><strong>Síntesis editorial:</strong> {folio.data.excerpt}</p>
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
                          const node = lukacsOntologyNodeById(id)
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
                          const node = lukacsOntologyNodeById(id)
                          return (
                            <button key={id} type="button" onClick={() => {
                              setFolioId(id)
                              setSelectedId(id)
                            }}>
                              {node?.data.code} · {node?.data.title}
                            </button>
                          )
                        })
                      : <em>sin continuidad documentada</em>}
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
      ), overlayHost)}

      {relationSheet && relationSource && relationTarget && createPortal((
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
      ), overlayHost)}
    </main>
  )
}

export default function LukacsOntologySystem() {
  return (
    <ReactFlowProvider>
      <StudyCanvas />
    </ReactFlowProvider>
  )
}
