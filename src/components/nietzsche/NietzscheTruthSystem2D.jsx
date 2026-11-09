import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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

import AnimatedConceptSchema from '../philosophy/schema/AnimatedConceptSchema'
import SectionPedagogy from '../philosophy/system2d/SectionPedagogy'
import {
  initialSystem2DRoute,
  useSystem2DCompactViewport,
} from '../philosophy/system2d/mobilePerformance'
import {
  resolveSystem2DEdgeColor,
} from '../philosophy/system2d/system2dTheme'
import '../philosophy/system2d/System2DTheme.css'

import NietzscheTruthNode from './NietzscheTruthNode'
import {
  NIETZSCHE_SYSTEM2D_GEOMETRY,
  nietzscheSystem2DEdges,
  nietzscheSystem2DGuidedRoute,
  nietzscheSystem2DNodeById,
  nietzscheSystem2DNodes,
  nietzscheSystem2DOrder,
  nietzscheSystem2DRouteOrder,
  nietzscheSystem2DRoutes,
  nietzscheSystem2DSource,
  nietzscheSystem2DStats,
} from '../../data/nietzscheTruthSystem2D'
import './NietzscheTruthSystem2D.css'

const nodeTypes = { nietzscheTruth: NietzscheTruthNode }

function relatedSet(id) {
  if (!id) return new Set()
  const related = new Set([id])
  nietzscheSystem2DEdges.forEach((edge) => {
    if (edge.source === id) related.add(edge.target)
    if (edge.target === id) related.add(edge.source)
  })
  return related
}

function NietzscheTruthSystemCanvas() {
  const initialRoute = initialSystem2DRoute(nietzscheSystem2DRoutes)
  const compactViewport = useSystem2DCompactViewport()

  const [route, setRoute] = useState(initialRoute)
  const [selectedId, setSelectedId] = useState('S21-1')
  const [guidedMode, setGuidedMode] = useState(false)
  const [guidedIndex, setGuidedIndex] = useState(0)
  const [folioId, setFolioId] = useState(null)
  const [history, setHistory] = useState(['S21-1'])
  const [workspaceFullscreen, setWorkspaceFullscreen] = useState(false)
  const [overlayHost, setOverlayHost] = useState(() =>
    typeof document !== 'undefined' ? document.body : null,
  )

  const workspaceRef = useRef(null)
  const lastFocusRef = useRef(null)
  const { fitView, setCenter } = useReactFlow()

  const selected = nietzscheSystem2DNodeById(selectedId)
  const folio = nietzscheSystem2DNodeById(folioId)
  const routeSequence = useMemo(() => nietzscheSystem2DRouteOrder(route), [route])
  const guidedCurrent = nietzscheSystem2DGuidedRoute[guidedIndex] || null
  const guidedNext = nietzscheSystem2DGuidedRoute[guidedIndex + 1] || null

  const routeNumberById = useMemo(
    () => new Map(routeSequence.map((id, index) => [id, index + 1])),
    [routeSequence],
  )

  const routeIds = useMemo(
    () => new Set(route === 'all' ? nietzscheSystem2DOrder : routeSequence),
    [route, routeSequence],
  )

  const compactAllIds = useMemo(() => {
    if (!compactViewport || route !== 'all' || guidedMode) return null
    const currentIndex = Math.max(0, nietzscheSystem2DOrder.indexOf(selectedId))
    const start = Math.max(0, currentIndex - 2)
    const end = Math.min(nietzscheSystem2DOrder.length, start + 5)
    return new Set(nietzscheSystem2DOrder.slice(Math.max(0, end - 5), end))
  }, [compactViewport, route, guidedMode, selectedId])

  const guidedCompactIds = useMemo(() => {
    if (!compactViewport || !guidedMode) return null
    return new Set(
      [guidedCurrent?.id, guidedNext?.id].filter(Boolean),
    )
  }, [compactViewport, guidedMode, guidedCurrent, guidedNext])

  const allowedIds = guidedCompactIds || compactAllIds || routeIds
  const related = useMemo(() => relatedSet(selectedId), [selectedId])

  const openFolio = useCallback((id) => {
    lastFocusRef.current = document.activeElement
    setFolioId(id)
  }, [])

  const nodes = useMemo(
    () => nietzscheSystem2DNodes.map((node) => {
      const focus = node.id === selectedId
      const hidden = !allowedIds.has(node.id)
      const guidedCurrentNode = guidedMode && node.id === guidedCurrent?.id
      const guidedNextNode = guidedMode && node.id === guidedNext?.id

      return {
        ...node,
        hidden,
        selected: focus,
        draggable: false,
        data: {
          ...node.data,
          routeActive: routeIds.has(node.id),
          routeNumber: routeNumberById.get(node.id),
          routeTotal: routeSequence.length,
          dimmed: Boolean(selectedId) && !related.has(node.id) && !guidedCurrentNode && !guidedNextNode,
          guidedCurrent: guidedCurrentNode,
          guidedNext: guidedNextNode,
          onOpenFolio: () => openFolio(node.id),
        },
      }
    }),
    [
      allowedIds,
      guidedCurrent,
      guidedMode,
      guidedNext,
      related,
      routeIds,
      routeNumberById,
      routeSequence.length,
      selectedId,
      openFolio,
    ],
  )

  const edges = useMemo(
    () => nietzscheSystem2DEdges.map((edge) => {
      const hidden = !allowedIds.has(edge.source) || !allowedIds.has(edge.target)
      const touchesSelected = edge.source === selectedId || edge.target === selectedId
      const guidedActive =
        guidedMode &&
        edge.source === guidedCurrent?.id &&
        edge.target === guidedNext?.id
      const color = resolveSystem2DEdgeColor({
        guidedActive,
        touchesSelected,
      })

      return {
        ...edge,
        hidden,
        type: 'smoothstep',
        animated: guidedActive,
        style: {
          stroke: color,
          strokeWidth: guidedActive || touchesSelected ? 2.8 : 1.45,
          opacity: guidedActive || touchesSelected ? 1 : 0.46,
        },
        labelStyle: {
          fill: 'var(--ph2d-ink)',
          fontSize: 10,
          fontWeight: 650,
        },
        labelBgStyle: {
          fill: 'var(--ph2d-paper)',
          fillOpacity: 0.96,
        },
        labelBgPadding: [6, 4],
        labelBgBorderRadius: 5,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color,
          width: 16,
          height: 16,
        },
      }
    }),
    [allowedIds, guidedCurrent, guidedMode, guidedNext, selectedId],
  )

  const currentSequence = guidedMode ? nietzscheSystem2DOrder : routeSequence
  const currentIndex = guidedMode
    ? guidedIndex
    : Math.max(0, currentSequence.indexOf(selectedId))
  const prevId = currentIndex > 0 ? currentSequence[currentIndex - 1] : null
  const nextId =
    currentIndex < currentSequence.length - 1
      ? currentSequence[currentIndex + 1]
      : null

  const focusNode = useCallback((id, fromGuide = false) => {
    const node = nietzscheSystem2DNodeById(id)
    if (!node) return

    if (!fromGuide) setGuidedMode(false)

    if (route !== 'all' && !node.data.branch.includes(route)) {
      setRoute(node.data.branch[0])
    }

    setSelectedId(id)
    setHistory((current) => [id, ...current.filter((item) => item !== id)].slice(0, 7))

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setCenter(
          node.position.x + NIETZSCHE_SYSTEM2D_GEOMETRY.width / 2,
          node.position.y + NIETZSCHE_SYSTEM2D_GEOMETRY.height / 2,
          { zoom: compactViewport ? 0.88 : 1.02, duration: 430 },
        )
      })
    })
  }, [compactViewport, route, setCenter])

  const changeRoute = useCallback((id) => {
    setGuidedMode(false)
    setFolioId(null)
    setRoute(id)
    const first = nietzscheSystem2DRouteOrder(id)[0] || 'S21-1'
    setSelectedId(first)
    setHistory((current) => [first, ...current.filter((item) => item !== first)].slice(0, 7))
  }, [])

  const launchGuide = useCallback(() => {
    setRoute('all')
    setGuidedMode(true)
    setGuidedIndex(0)
    setSelectedId(nietzscheSystem2DOrder[0])
    setHistory((current) => [nietzscheSystem2DOrder[0], ...current.filter((item) => item !== nietzscheSystem2DOrder[0])].slice(0, 7))
    window.requestAnimationFrame(() => focusNode(nietzscheSystem2DOrder[0], true))
  }, [focusNode])

  const goGuide = useCallback((index) => {
    const next = Math.max(0, Math.min(index, nietzscheSystem2DOrder.length - 1))
    const id = nietzscheSystem2DOrder[next]
    setGuidedMode(true)
    setRoute('all')
    setGuidedIndex(next)
    setSelectedId(id)
    setHistory((current) => [id, ...current.filter((item) => item !== id)].slice(0, 7))
    window.requestAnimationFrame(() => focusNode(id, true))
  }, [focusNode])

  const navigate = useCallback((delta) => {
    if (guidedMode) {
      goGuide(guidedIndex + delta)
      return
    }
    const index = Math.max(0, currentSequence.indexOf(selectedId))
    const id = currentSequence[index + delta]
    if (id) focusNode(id)
  }, [currentSequence, focusNode, goGuide, guidedIndex, guidedMode, selectedId])

  const closeFolio = useCallback(() => {
    setFolioId(null)
    window.requestAnimationFrame(() => lastFocusRef.current?.focus?.())
  }, [])

  useEffect(() => {
    if (!folioId) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') closeFolio()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [folioId, closeFolio])

  useEffect(() => {
    if (guidedMode) return undefined

    const ids =
      compactViewport && route === 'all'
        ? [...(compactAllIds || [])]
        : routeSequence

    if (!ids.length) return undefined

    const timer = window.setTimeout(() => {
      fitView({
        nodes: ids.map((id) => ({ id })),
        padding: 0.17,
        duration: 520,
        maxZoom: compactViewport ? 0.88 : 0.82,
      })
    }, 140)

    return () => window.clearTimeout(timer)
  }, [compactAllIds, compactViewport, fitView, guidedMode, route, routeSequence])

  useEffect(() => {
    const sync = () => {
      const active =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        null
      const workspace = workspaceRef.current
      const isWorkspaceFullscreen = active === workspace
      setWorkspaceFullscreen(isWorkspaceFullscreen)
      setOverlayHost(
        isWorkspaceFullscreen && workspace
          ? workspace
          : typeof document !== 'undefined'
            ? document.body
            : null,
      )
      window.setTimeout(() => fitView({ padding: 0.08, duration: 380 }), 100)
    }
    document.addEventListener('fullscreenchange', sync)
    document.addEventListener('webkitfullscreenchange', sync)
    return () => {
      document.removeEventListener('fullscreenchange', sync)
      document.removeEventListener('webkitfullscreenchange', sync)
    }
  }, [fitView])

  const toggleFullscreen = useCallback(async () => {
    const element = workspaceRef.current
    if (!element) return

    const active =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      null

    try {
      if (active) {
        const exit = document.exitFullscreen || document.webkitExitFullscreen
        await Promise.resolve(exit?.call(document))
        return
      }

      const request = element.requestFullscreen || element.webkitRequestFullscreen
      if (request) {
        await Promise.resolve(request.call(element))
        return
      }

      const next = !workspaceFullscreen
      setWorkspaceFullscreen(next)
      setOverlayHost(
        next
          ? element
          : typeof document !== 'undefined'
            ? document.body
            : null,
      )
    } catch {
      const next = !workspaceFullscreen
      setWorkspaceFullscreen(next)
      setOverlayHost(
        next
          ? element
          : typeof document !== 'undefined'
            ? document.body
            : null,
      )
    }

    window.setTimeout(() => fitView({ padding: 0.08, duration: 380 }), 100)
  }, [fitView, workspaceFullscreen])

  const selectedDeps = selected?.data.dependsOn.map(nietzscheSystem2DNodeById).filter(Boolean) || []
  const selectedNext = selected?.data.produces.map(nietzscheSystem2DNodeById).filter(Boolean) || []
  const selectedRoute = nietzscheSystem2DRoutes.find((item) => item.id === route)

  return (
    <section id="lectura-21-33" className="nt2d-shell" aria-labelledby="nt2d-title">
      <header className="nt2d-head">
        <div>
          <span>SISTEMA 2D CANÓNICO · TECNOS 2012 · PP. 21–33</span>
          <h2 id="nt2d-title">De la invención del conocimiento a las formas que ordenan la naturaleza</h2>
          <p>
            React Flow, rutas por folio, guía completa {nietzscheSystem2DStats.nodeCount}/{nietzscheSystem2DStats.nodeCount},
            inspector documental, folios, esquemas por nodo y pedagogía por sección.
            La expansión conserva la misma arquitectura canónica.
          </p>
        </div>
        <dl>
          <div><dt>NODOS</dt><dd>{nietzscheSystem2DStats.nodeCount}</dd></div>
          <div><dt>RELACIONES</dt><dd>{nietzscheSystem2DStats.edgeCount}</dd></div>
          <div><dt>FRAGMENTOS</dt><dd>{nietzscheSystem2DStats.fragmentCount}</dd></div>
          <div><dt>FOLIOS</dt><dd>{nietzscheSystem2DStats.firstPage}–{nietzscheSystem2DStats.lastPage}</dd></div>
        </dl>
      </header>

      <section className="nt2d-source-boundary">
        <strong>FRONTERA DOCUMENTAL</strong>
        <p>{nietzscheSystem2DSource.boundary}</p>
        <span>FUENTE → EXPLICACIÓN → RELACIÓN DOCUMENTADA → SISTEMA → ESQUEMA</span>
      </section>

      <section className="nt2d-guide-launch">
        <div>
          <span>GUÍA COMPLETA · {nietzscheSystem2DStats.nodeCount} / {nietzscheSystem2DStats.nodeCount}</span>
          <strong>Recorrer el argumento sin perder la fuente</strong>
          <p>
            La guía completa sigue los {nietzscheSystem2DStats.nodeCount} nodos. En teléfono sólo monta el paso actual
            y el siguiente para no cargar el atlas entero de golpe.
          </p>
        </div>
        <button type="button" onClick={launchGuide}>
          {guidedMode ? 'Reiniciar guía completa' : 'Iniciar guía completa →'}
        </button>
      </section>

      {guidedMode && guidedCurrent && (
        <section className="nt2d-guide" aria-live="polite">
          <div className="nt2d-guide-progress">
            <span>LECTURA GUIADA · {String(guidedIndex + 1).padStart(2, '0')} / {nietzscheSystem2DOrder.length}</span>
            <progress value={guidedIndex + 1} max={nietzscheSystem2DOrder.length} />
          </div>
          <div className="nt2d-guide-copy">
            <small>{nietzscheSystem2DNodeById(guidedCurrent.id)?.data.sourceRef}</small>
            <strong>{guidedCurrent.title}</strong>
            <p>{nietzscheSystem2DNodeById(guidedCurrent.id)?.data.explanation}</p>
            {guidedNext && <em>Siguiente: {guidedNext.title}</em>}
          </div>
          <div className="nt2d-guide-nav">
            <button type="button" disabled={!guidedIndex} onClick={() => goGuide(guidedIndex - 1)}>← Anterior</button>
            <button type="button" onClick={() => openFolio(guidedCurrent.id)}>Abrir folio</button>
            <button type="button" disabled={guidedIndex === nietzscheSystem2DOrder.length - 1} onClick={() => goGuide(guidedIndex + 1)}>Siguiente →</button>
          </div>
        </section>
      )}

      <nav className="nt2d-routes" aria-label="Rutas del sistema 2D">
        {nietzscheSystem2DRoutes.map((item) => (
          <button
            type="button"
            key={item.id}
            className={route === item.id ? 'is-active' : ''}
            onClick={() => changeRoute(item.id)}
          >
            <span>{item.label}</span>
            <small>{item.short}</small>
          </button>
        ))}
      </nav>

      <SectionPedagogy
        nodes={nietzscheSystem2DNodes}
        routes={nietzscheSystem2DRoutes}
        nodeOrder={nietzscheSystem2DOrder}
        activeRoute={route}
        selectedId={selectedId}
        onSectionChange={changeRoute}
        onFocusNode={focusNode}
      />

      <section
        ref={workspaceRef}
        className={workspaceFullscreen ? 'nt2d-workspace is-fullscreen' : 'nt2d-workspace'}
      >
        <div className="nt2d-flow-panel">
          <header className="nt2d-flow-caption">
            <div>
              <span>ATLAS DOCUMENTAL · {selectedRoute?.label || 'Sistema'}</span>
              <strong>fuente breve → explicación → relación → continuidad</strong>
            </div>
            <div className="nt2d-flow-actions">
              <span className="nt2d-flow-legend">
                <b>selección = dorado</b>
                <b>guía = verde</b>
                <b>familia = franja cromática</b>
              </span>
              <button type="button" onClick={toggleFullscreen}>
                {workspaceFullscreen ? 'Salir ⛶' : 'Pantalla completa ⛶'}
              </button>
            </div>
          </header>

          <div className="nt2d-canvas">
            <ReactFlow
              nodes={compactViewport ? nodes.filter((node) => !node.hidden) : nodes}
              edges={compactViewport ? edges.filter((edge) => !edge.hidden) : edges}
              nodeTypes={nodeTypes}
              onlyRenderVisibleElements={compactViewport}
              onNodeClick={(_, node) => focusNode(node.id)}
              onPaneClick={() => {
                if (!guidedMode) setSelectedId(null)
              }}
              fitView
              fitViewOptions={{ padding: 0.12, maxZoom: 0.82 }}
              minZoom={0.08}
              maxZoom={1.55}
              nodesDraggable={false}
              nodesConnectable={false}
              proOptions={{ hideAttribution: true }}
            >
              <Background gap={34} size={1} />
              <Controls showInteractive={false} />
              {!compactViewport && <MiniMap pannable zoomable nodeStrokeWidth={3} />}
            </ReactFlow>
          </div>
        </div>

        <aside className="nt2d-inspector">
          {selected ? (
            <div className="nt2d-inspector-scroll">
              <header className="nt2d-inspector-head">
                <span>{selected.data.phase}</span>
                <b>{selected.data.code}</b>
              </header>
              <h3>{selected.data.title}</h3>

              <section className="nt2d-inspector-source">
                <span>TEXTO ORIGINAL · CITA LITERAL COTEJADA</span>
                <blockquote>“{selected.data.excerpt}”</blockquote>
                <small>{selected.data.apaShort} · {selected.data.sourceRef}</small>
              </section>

              <section>
                <span>EXPLICACIÓN ACADÉMICA · PHILOSOPHIA</span>
                <p>{selected.data.explanation}</p>
              </section>

              <section>
                <span>EN PALABRAS SIMPLES</span>
                <p>{selected.data.simple}</p>
              </section>

              <section>
                <span>CONCEPTOS</span>
                <div className="nt2d-tags">
                  {selected.data.concepts.map((concept) => <b key={concept}>{concept}</b>)}
                </div>
              </section>

              <section className="nt2d-inspector-schema">
                <span>ESQUEMA LOCAL · RELACIONES DOCUMENTADAS</span>
                <AnimatedConceptSchema key={selected.id} schema={selected.data.schema} />
              </section>

              <section className="nt2d-inspector-relations">
                <span>ANTES · DEPENDENCIAS</span>
                <div>
                  {selectedDeps.length
                    ? selectedDeps.map((node) => (
                      <button key={node.id} type="button" onClick={() => focusNode(node.id)}>
                        <b>{node.data.code}</b><small>{node.data.title}</small>
                      </button>
                    ))
                    : <em>No consta antecedente dentro de pp. 21–33.</em>}
                </div>
                <span>DESPUÉS · CONTINUIDADES</span>
                <div>
                  {selectedNext.length
                    ? selectedNext.map((node) => (
                      <button key={node.id} type="button" onClick={() => focusNode(node.id)}>
                        <b>{node.data.code}</b><small>{node.data.title}</small>
                      </button>
                    ))
                    : <em>Este tramo cierra aquí con una pregunta abierta.</em>}
                </div>
              </section>

              <section className="nt2d-inspector-question">
                <span>EJERCICIO DE ESTUDIO · SIN ATRIBUCIÓN DOCENTE</span>
                <strong>{selected.data.question}</strong>
              </section>

              <button type="button" className="nt2d-open-folio" onClick={() => openFolio(selected.id)}>
                Abrir folio ↗
              </button>
            </div>
          ) : (
            <div className="nt2d-inspector-empty">
              <span>SELECTIO</span>
              <strong>Seleccione un nodo</strong>
              <p>El inspector conserva cita, explicación, fuente, esquema y relaciones.</p>
            </div>
          )}
        </aside>

        {folio && overlayHost && createPortal(
          <div className="nt2d-folio-overlay" role="presentation" onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeFolio()
          }}>
            <article className="nt2d-folio" role="dialog" aria-modal="true" aria-labelledby="nt2d-folio-title">
              <header>
                <div>
                  <span>{folio.data.phase} · {folio.data.code}</span>
                  <h3 id="nt2d-folio-title">{folio.data.title}</h3>
                </div>
                <button type="button" onClick={closeFolio} aria-label="Cerrar folio">×</button>
              </header>

              <div className="nt2d-folio-grid">
                <section className="nt2d-folio-source">
                  <span>TEXTO ORIGINAL · FRAGMENTOS COTEJADOS</span>
                  {folio.data.sourceFragments.map((fragment) => (
                    <blockquote key={fragment.id}>
                      “{fragment.phrase}”
                      <small>{fragment.id} · {folio.data.apaShort}</small>
                    </blockquote>
                  ))}
                </section>

                <section>
                  <span>DESARROLLO ACADÉMICO</span>
                  {folio.data.sourceFragments.map((fragment) => (
                    <p key={fragment.id}><b>{fragment.id}</b> · {fragment.reading}</p>
                  ))}
                </section>

                <section>
                  <span>EN PALABRAS SIMPLES</span>
                  <p>{folio.data.simple}</p>
                  <span>CONCEPTOS</span>
                  <div className="nt2d-tags">
                    {folio.data.concepts.map((concept) => <b key={concept}>{concept}</b>)}
                  </div>
                </section>

                <section className="nt2d-folio-schema">
                  <span>ESQUEMA DEL NODO</span>
                  <AnimatedConceptSchema key={`folio-${folio.id}`} schema={folio.data.schema} />
                </section>

                <section className="nt2d-folio-relations">
                  <span>RELACIONES JUSTIFICADAS</span>
                  <div>
                    <small>depende de</small>
                    {folio.data.dependsOn.length
                      ? folio.data.dependsOn.map((id) => {
                        const node = nietzscheSystem2DNodeById(id)
                        return <button key={id} type="button" onClick={() => { setFolioId(null); focusNode(id) }}>{node?.data.code} · {node?.data.title}</button>
                      })
                      : <em>Sin antecedente interno documentado.</em>}
                  </div>
                  <div>
                    <small>abre hacia</small>
                    {folio.data.produces.length
                      ? folio.data.produces.map((id) => {
                        const node = nietzscheSystem2DNodeById(id)
                        return <button key={id} type="button" onClick={() => { setFolioId(null); focusNode(id) }}>{node?.data.code} · {node?.data.title}</button>
                      })
                      : <em>Pregunta abierta al cierre del tramo.</em>}
                  </div>
                </section>

                <section className="nt2d-folio-question">
                  <span>PREGUNTA DE ESTUDIO · PHILOSOPHIA</span>
                  <strong>{folio.data.question}</strong>
                  <p>{folio.data.explanation}</p>
                </section>

                <section className="nt2d-folio-reference">
                  <span>REFERENCIA APA 7</span>
                  <p>{nietzscheSystem2DSource.apa}</p>
                  <small>Localizador del nodo: {folio.data.sourceRef}. La paginación corresponde a la edición Tecnos 2012 trabajada.</small>
                </section>
              </div>
            </article>
          </div>,
          overlayHost,
        )}
      </section>

      <section className="nt2d-history">
        <span>HISTORIAL DE LECTURA</span>
        <div>
          {history.map((id) => {
            const node = nietzscheSystem2DNodeById(id)
            return (
              <button type="button" key={id} onClick={() => focusNode(id)}>
                <b>{id}</b> {node?.data.title}
              </button>
            )
          })}
        </div>
      </section>

      <section className="nt2d-continuity">
        <span>CONTINUIDAD DOCUMENTAL</span>
        <strong>Este sistema se detiene en la p. 33.</strong>
        <p>
          El tramo documentado llega desde la invención del conocimiento hasta la tesis
          de que espacio, tiempo, sucesión y número forman parte de lo que aportamos al
          conocer. No se incorporan pp. 34 y siguientes hasta disponer del siguiente tramo.
        </p>
      </section>

      <footer className="nt2d-footer">
        <button type="button" disabled={!prevId} onClick={() => navigate(-1)}>← Anterior</button>
        <span>
          {guidedMode
            ? `LECTURA GUIADA · ${String(guidedIndex + 1).padStart(2, '0')} / ${nietzscheSystem2DStats.nodeCount}`
            : `${selectedRoute?.label || 'RUTA'} · ${String(currentIndex + 1).padStart(2, '0')} / ${currentSequence.length}`}
        </span>
        <button type="button" disabled={!nextId} onClick={() => navigate(1)}>Siguiente →</button>
      </footer>
    </section>
  )
}

export default function NietzscheTruthSystem2D() {
  return (
    <ReactFlowProvider>
      <NietzscheTruthSystemCanvas />
    </ReactFlowProvider>
  )
}
