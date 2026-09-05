import { useEffect, useMemo, useState, useRef } from 'react'
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
import {
  analyticClassSessions,
  getAnalyticFollesdalClassLinks,
} from '../data/analyticFollesdalClassLinks'
import { analyticFollesdalGuide } from '../data/analyticFollesdalGuide'
import AnalyticFollesdalOverview from '../components/AnalyticFollesdalOverview'

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

function mapNode(
  phaseNode,
  activeNodeId,
  guideMode,
  guideStepNumber,
) {
  const classLinks = getAnalyticFollesdalClassLinks(phaseNode.id)
  const isGuideTarget =
    guideMode && activeNodeId === phaseNode.id

  return {
    id: phaseNode.id,
    position: phaseNode.position,
    draggable: false,
    selectable: true,
    className: `afm-node afm-node--${phaseNode.category} ${classLinks.length ? 'has-class-links' : ''} ${activeNodeId === phaseNode.id ? 'is-active' : ''} ${isGuideTarget ? 'is-guide-target' : ''}`,
    data: {
      label: (
        <div className="afm-node-card">
          <span className="afm-node-tag">{phaseNode.tag}</span>
          <strong>{phaseNode.title}</strong>

          {isGuideTarget && (
            <span className="afm-guide-node-step">
              Paso {guideStepNumber}
            </span>
          )}

          {classLinks.length > 0 && (
            <div className="afm-node-class-badges">
              <span>clase</span>
              {classLinks.map((link) => (
                <i
                  key={`${phaseNode.id}-${link.date}`}
                  style={{ '--class-color': link.session.color }}
                >
                  {link.session.shortDate}
                </i>
              ))}
            </div>
          )}
        </div>
      ),
    },
  }
}

function mapEdge(item, activeNodeId, guideMode) {
  const isGuideEdge =
    guideMode &&
    (
      item.source === activeNodeId ||
      item.target === activeNodeId
    )

  const baseStyle = edgeStyle(item.kind)
  const guideColor = 'rgba(181, 139, 46, 0.98)'

  return {
    id: item.id,
    source: item.source,
    target: item.target,
    className: isGuideEdge ? 'is-guide-edge' : '',
    label: item.label || '',
    labelStyle: {
      fill: isGuideEdge
        ? 'rgba(103, 76, 19, 0.98)'
        : 'rgba(45, 40, 34, 0.88)',
      fontSize: 11,
      fontWeight: isGuideEdge ? 800 : 600,
    },
    labelBgStyle: {
      fill: 'rgba(246, 241, 230, 0.96)',
      fillOpacity: 1,
      rx: 4,
      ry: 4,
    },
    style: isGuideEdge
      ? {
          ...baseStyle,
          stroke: guideColor,
          strokeWidth: 3.4,
        }
      : baseStyle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: isGuideEdge ? 22 : 18,
      height: isGuideEdge ? 22 : 18,
      color: isGuideEdge
        ? guideColor
        : item.kind === 'contrast'
          ? 'rgba(135, 78, 70, 0.95)'
          : 'rgba(55, 51, 43, 0.88)',
    },
  }
}

function FlowViewport({
  phase,
  activeNodeId,
  onNodeSelect,
  studyMode,
  guideStepNumber,
}) {
  const { fitView } = useReactFlow()
  const guideMode = studyMode === 'guide'

  const nodes = useMemo(
    () =>
      phase.nodes.map((node) =>
        mapNode(
          node,
          activeNodeId,
          guideMode,
          guideStepNumber,
        ),
      ),
    [
      phase,
      activeNodeId,
      guideMode,
      guideStepNumber,
    ],
  )

  const edges = useMemo(
    () =>
      phase.edges.map((edge) =>
        mapEdge(edge, activeNodeId, guideMode),
      ),
    [phase, activeNodeId, guideMode],
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

  const [studyMode, setStudyMode] = useState('manual')
  const mapPanelRef = useRef(null)
  const [isMapFullscreen, setIsMapFullscreen] = useState(false)
  const [isMapFocusMode, setIsMapFocusMode] = useState(false)
  const [mapView, setMapView] = useState('overview')
  const [overviewResetKey, setOverviewResetKey] = useState(0)
  const [guideIndex, setGuideIndex] = useState(0)
  const [showGuideAnswer, setShowGuideAnswer] = useState(false)
  const [activeNodeId, setActiveNodeId] = useState(phase.nodes[0]?.id || '')

  const currentGuideStep =
    analyticFollesdalGuide[guideIndex] || analyticFollesdalGuide[0]

  useEffect(() => {
    if (studyMode === 'manual') {
      setActiveNodeId(phase.nodes[0]?.id || '')
    }
  }, [phase, studyMode])

  useEffect(() => {
    if (studyMode !== 'guide') return

    if (phaseId !== currentGuideStep.phaseId) {
      setPhaseId(currentGuideStep.phaseId)
      return
    }

    setActiveNodeId(currentGuideStep.nodeId)
  }, [
    currentGuideStep.nodeId,
    currentGuideStep.phaseId,
    phaseId,
    studyMode,
  ])

  const allFollesdalNodes = useMemo(
    () =>
      analyticFollesdalMaps.flatMap((item) =>
        item.nodes.map((node) => ({
          ...node,
          phaseId: item.id,
        })),
      ),
    [],
  )

  const activeNode = useMemo(() => {
    if (mapView === 'overview') {
      return (
        allFollesdalNodes.find(
          (node) => node.id === activeNodeId,
        ) || phase.nodes[0]
      )
    }

    return (
      phase.nodes.find((node) => node.id === activeNodeId) ||
      phase.nodes[0]
    )
  }, [
    activeNodeId,
    allFollesdalNodes,
    mapView,
    phase,
  ])

  const activeClassLinks = useMemo(
    () => getAnalyticFollesdalClassLinks(activeNode?.id),
    [activeNode],
  )

  const guideClassLinks = useMemo(
    () => getAnalyticFollesdalClassLinks(currentGuideStep.nodeId),
    [currentGuideStep.nodeId],
  )

  const guideProgress =
    ((guideIndex + 1) / analyticFollesdalGuide.length) * 100

  const handleOverviewNodeSelect = (nodeId) => {
    setActiveNodeId(nodeId)

    const ownerPhase = analyticFollesdalMaps.find((item) =>
      item.nodes.some((node) => node.id === nodeId),
    )

    if (ownerPhase) {
      setPhaseId(ownerPhase.id)
    }
  }

  const enterGuide = () => {
    setStudyMode('guide')
    setMapView('overview')
    setGuideIndex(0)
    setShowGuideAnswer(false)

    const firstStep = analyticFollesdalGuide[0]
    setPhaseId(firstStep.phaseId)
    setActiveNodeId(firstStep.nodeId)
  }

  const exitGuide = () => {
    setStudyMode('manual')
    setShowGuideAnswer(false)
    setActiveNodeId(phase.nodes[0]?.id || '')
  }

  const goToGuideStep = (nextIndex) => {
    if (
      nextIndex < 0 ||
      nextIndex >= analyticFollesdalGuide.length
    ) {
      return
    }

    const nextStep = analyticFollesdalGuide[nextIndex]

    setGuideIndex(nextIndex)
    setShowGuideAnswer(false)
    setPhaseId(nextStep.phaseId)
    setActiveNodeId(nextStep.nodeId)
  }

  useEffect(() => {
    const syncFullscreenState = () => {
      const fullscreenElement =
        document.fullscreenElement ||
        document.webkitFullscreenElement

      const isNativeFullscreen =
        fullscreenElement === mapPanelRef.current

      setIsMapFullscreen(isNativeFullscreen)

      if (isNativeFullscreen) {
        setIsMapFocusMode(false)
      }

      window.setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 120)
    }

    document.addEventListener(
      'fullscreenchange',
      syncFullscreenState,
    )
    document.addEventListener(
      'webkitfullscreenchange',
      syncFullscreenState,
    )

    return () => {
      document.removeEventListener(
        'fullscreenchange',
        syncFullscreenState,
      )
      document.removeEventListener(
        'webkitfullscreenchange',
        syncFullscreenState,
      )
    }
  }, [])

  useEffect(() => {
    if (!isMapFocusMode) {
      document.documentElement.classList.remove(
        'afm-focus-active',
      )
      return undefined
    }

    document.documentElement.classList.add(
      'afm-focus-active',
    )

    const previousOverflow = document.body.style.overflow
    const previousOverscroll =
      document.body.style.overscrollBehavior

    document.body.style.overflow = 'hidden'
    document.body.style.overscrollBehavior = 'none'

    const resizeId = window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 120)

    return () => {
      window.clearTimeout(resizeId)
      document.documentElement.classList.remove(
        'afm-focus-active',
      )
      document.body.style.overflow = previousOverflow
      document.body.style.overscrollBehavior =
        previousOverscroll

      window.setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 120)
    }
  }, [isMapFocusMode])

  const enterMapFocusMode = () => {
    setIsMapFocusMode(true)
  }

  const toggleMapFullscreen = async () => {
    const element = mapPanelRef.current
    if (!element) return

    if (isMapFocusMode) {
      setIsMapFocusMode(false)
      return
    }

    const fullscreenElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement

    try {
      if (fullscreenElement) {
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        }
        return
      }

      const nativeFullscreenEnabled =
        document.fullscreenEnabled === true ||
        document.webkitFullscreenEnabled === true

      const requestNativeFullscreen =
        element.requestFullscreen
          ? () => element.requestFullscreen()
          : element.webkitRequestFullscreen
            ? () => element.webkitRequestFullscreen()
            : null

      if (
        !nativeFullscreenEnabled ||
        !requestNativeFullscreen
      ) {
        enterMapFocusMode()
        return
      }

      try {
        await requestNativeFullscreen()
      } catch (error) {
        console.warn(
          'Fullscreen nativo no disponible; usando modo enfoque.',
          error,
        )
        enterMapFocusMode()
      }
    } catch (error) {
      console.warn(
        'No se pudo usar fullscreen nativo; usando modo enfoque.',
        error,
      )
      enterMapFocusMode()
    }
  }

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
                  disabled={studyMode === 'guide'}
                  title={
                    studyMode === 'guide'
                      ? 'Salga del modo Guía para cambiar de fase manualmente'
                      : undefined
                  }
                  onClick={() => {
                    setPhaseId(item.id)
                    setMapView('phase')
                  }}
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

            <div className="afm-class-legend">
              <strong>Libro ↔ clases</strong>
              <p>
                El color de fondo sigue indicando la función de la idea en
                Føllesdal. Los badges de fecha indican en qué clase se trabajó.
              </p>

              <div className="afm-class-legend-list">
                {Object.values(analyticClassSessions).map((session) => (
                  <div
                    key={session.shortDate}
                    className="afm-class-legend-item"
                    style={{ '--class-color': session.color }}
                  >
                    <i />
                    <b>{session.shortDate}</b>
                    <span>{session.title}</span>
                  </div>
                ))}
              </div>
            </div>
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

          <section
            ref={mapPanelRef}
            className={[
              'afm-map-panel',
              studyMode === 'guide'
                ? 'afm-map-panel--guide'
                : '',
              mapView === 'overview'
                ? 'afm-map-panel--overview'
                : '',
              isMapFocusMode
                ? 'is-focus-mode'
                : '',
            ].join(' ')}
          >
            <div className="afm-map-header">
              <div>
                <span>
                  {mapView === 'overview'
                    ? 'Mapa general'
                    : 'Mapa 2D'}
                </span>
                <h3>
                  {mapView === 'overview'
                    ? 'Red completa de ideas conectadas'
                    : 'Arquitectura argumental de la fase'}
                </h3>
              </div>
              <div className="afm-map-header-actions">
                <p>
                  {studyMode === 'guide'
                    ? 'Todo el sistema permanece visible: la guía ilumina únicamente el nodo que toca estudiar.'
                    : mapView === 'overview'
                      ? 'Arrastre los nodos libremente por el plano; las conexiones los seguirán.'
                      : 'Toque un nodo para leer su función dentro del argumento.'}
                </p>

                <div className="afm-map-view-toggle">
                  <button
                    type="button"
                    className={mapView === 'overview' ? 'is-active' : ''}
                    onClick={() => setMapView('overview')}
                  >
                    Mapa general
                  </button>

                  <button
                    type="button"
                    className={mapView === 'phase' ? 'is-active' : ''}
                    disabled={studyMode === 'guide'}
                    onClick={() => setMapView('phase')}
                  >
                    Fase actual
                  </button>
                </div>

                {mapView === 'overview' && (
                  <button
                    type="button"
                    className="afm-overview-reset"
                    onClick={() =>
                      setOverviewResetKey((current) => current + 1)
                    }
                  >
                    Restablecer posiciones
                  </button>
                )}

                                <button
                  type="button"
                  className="afm-fullscreen-button"
                  onClick={toggleMapFullscreen}
                  title={
                    isMapFullscreen || isMapFocusMode
                      ? 'Salir de pantalla completa'
                      : 'Expandir el mapa a toda la pantalla'
                  }
                >
                  {isMapFullscreen || isMapFocusMode
                    ? 'Salir de pantalla completa'
                    : 'Pantalla completa'}
                </button>

<div
                  className="afm-study-mode-toggle"
                  aria-label="Modo de estudio"
                >
                  <button
                    type="button"
                    className={studyMode === 'manual' ? 'is-active' : ''}
                    onClick={exitGuide}
                  >
                    Manual
                  </button>

                  <button
                    type="button"
                    className={studyMode === 'guide' ? 'is-active' : ''}
                    onClick={enterGuide}
                  >
                    Guía
                  </button>
                </div>

                {studyMode === 'guide' && (
                  <div className="afm-guide-map-key">
                    <i />
                    <span>
                      Nodo y relaciones del paso actual
                    </span>
                  </div>
                )}
              </div>
            </div>

            {mapView === 'overview' ? (
              <AnalyticFollesdalOverview
                activeNodeId={activeNodeId}
                onNodeSelect={handleOverviewNodeSelect}
                studyMode={studyMode}
                guideStepNumber={guideIndex + 1}
                guideTotal={analyticFollesdalGuide.length}
                guideStep={currentGuideStep}
                guideClassLinks={guideClassLinks}
                onPreviousGuideStep={() =>
                  goToGuideStep(guideIndex - 1)
                }
                onNextGuideStep={() =>
                  goToGuideStep(guideIndex + 1)
                }
                resetKey={overviewResetKey}
              />
            ) : (
              <ReactFlowProvider>
                <FlowViewport
                  phase={phase}
                  activeNodeId={activeNodeId}
                  onNodeSelect={
                    studyMode === 'guide'
                      ? () => {}
                      : setActiveNodeId
                  }
                />
              </ReactFlowProvider>
            )}
          </section>

          {studyMode === 'guide' && mapView !== 'overview' && (
            <section className="afm-guide-panel">
              <div className="afm-guide-topline">
                <span>Modo Guía · lectura integral</span>

                <div
                  className="afm-guide-progress"
                  style={{ '--guide-progress': `${guideProgress}%` }}
                >
                  <i />
                  <b>
                    Paso {guideIndex + 1} de {analyticFollesdalGuide.length}
                  </b>
                </div>
              </div>

              <h3>{currentGuideStep.title}</h3>
              <p className="afm-guide-explanation">
                {currentGuideStep.explanation}
              </p>

              <div className="afm-guide-grid">
                <article className="afm-guide-box">
                  <span>Idea que debe quedar clara</span>
                  <p>{currentGuideStep.keyIdea}</p>
                </article>

                <article className="afm-guide-box">
                  <span>Compruebe si lo entendió</span>
                  <p>{currentGuideStep.question}</p>

                  <div className="afm-guide-question-actions">
                    <button
                      type="button"
                      onClick={() =>
                        setShowGuideAnswer((current) => !current)
                      }
                    >
                      {showGuideAnswer
                        ? 'Ocultar respuesta'
                        : 'Ver respuesta'}
                    </button>
                  </div>

                  {showGuideAnswer && (
                    <p className="afm-guide-answer">
                      {currentGuideStep.answer}
                    </p>
                  )}
                </article>
              </div>

              {guideClassLinks.length > 0 && (
                <div className="afm-guide-class-links">
                  <span>Conexión con las clases</span>

                  <div className="afm-guide-class-links-list">
                    {guideClassLinks.map((link) => (
                      <article
                        key={`${currentGuideStep.nodeId}-${link.date}`}
                        className="afm-guide-class-link"
                        style={{ '--class-color': link.session.color }}
                      >
                        <header>
                          <b>CLASE · {link.session.shortDate}</b>
                          <span>{link.stance}</span>
                        </header>

                        <strong>{link.session.title}</strong>
                        <p>{link.relation}</p>

                        <Link to={link.session.route}>
                          Abrir clase →
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="afm-guide-nav">
                <button
                  type="button"
                  disabled={guideIndex === 0}
                  onClick={() => goToGuideStep(guideIndex - 1)}
                >
                  ← Anterior
                </button>

                <span>
                  La geometría del mapa permanece intacta durante todo
                  el recorrido.
                </span>

                <button
                  type="button"
                  disabled={
                    guideIndex === analyticFollesdalGuide.length - 1
                  }
                  onClick={() => goToGuideStep(guideIndex + 1)}
                >
                  Siguiente →
                </button>
              </div>
            </section>
          )}

          <section className="afm-detail-grid">
            <article className="afm-detail-card afm-detail-card--active">
              <span>Nodo activo</span>
              <h3>{activeNode?.title}</h3>
              <div className={`afm-pill afm-pill--${activeNode?.category || 'claim'}`}>
                {activeNode?.tag}
              </div>
              <p>{activeNode?.detail}</p>

              <div className="afm-book-reference">
                <span>Libro · Føllesdal</span>
                <small>{activeNode?.source}</small>
              </div>

              {activeClassLinks.length > 0 && (
                <div className="afm-class-connections">
                  <span>Cómo se trabajó en clase</span>

                  <div className="afm-class-connection-list">
                    {activeClassLinks.map((link) => (
                      <article
                        key={`${activeNode.id}-${link.date}`}
                        className="afm-class-connection"
                        style={{ '--class-color': link.session.color }}
                      >
                        <header>
                          <strong>CLASE · {link.session.shortDate}</strong>
                          <em>{link.stance}</em>
                        </header>

                        <b>{link.session.title}</b>
                        <p>{link.relation}</p>

                        <Link to={link.session.route}>
                          Abrir clase →
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )}
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
              disabled={studyMode === 'guide' || !previousPhase}
              onClick={() => previousPhase && setPhaseId(previousPhase.id)}
            >
              ← Fase anterior
            </button>

            <Link to="/semestre/5/filosofia-analitica">
              Volver a la materia
            </Link>

            <button
              type="button"
              disabled={studyMode === 'guide' || !nextPhase}
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
