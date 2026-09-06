import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import KantPrefacesCanvas from '../components/KantPrefacesCanvas'
import KantPrefacesInspector from '../components/KantPrefacesInspector'
import {
  KANT_PREFACES_SOURCE,
  kantPrefacesAllDetailNodes,
  kantPrefacesCrossEdges,
  kantPrefacesLegend,
  kantPrefacesOverview,
  kantPrefacesPhases,
  getKantPrefacesPhaseForNode,
} from '../data/kantPrefacesMaps'
import {
  clearKantPrefacesPositions,
  loadKantPrefacesHistory,
  loadKantPrefacesMastery,
  loadKantPrefacesNotes,
  loadKantPrefacesSession,
  recordKantPrefacesHistory,
  saveKantPrefacesNote,
  saveKantPrefacesSession,
  setKantPrefacesMastery,
} from '../data/kantPrefacesStudyStore'
import './KantPrefacesMap.css'

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es')
}

function enrichPhaseNode(node, phase) {
  return {
    ...node,
    phaseId: phase.id,
    phaseRoman: phase.roman,
    phaseTitle: phase.title,
    preface: phase.preface,
  }
}

function statusForPhase(phase, mastery) {
  const statuses = phase.nodes.map((node) => mastery[node.id] || 'new')
  const mastered = statuses.filter((status) => status === 'mastered').length
  const reviewing = statuses.filter((status) => status === 'reviewing').length

  if (mastered === phase.nodes.length && phase.nodes.length > 0) {
    return { symbol: '✓', className: 'is-complete' }
  }

  if (mastered > 0 || reviewing > 0) {
    return { symbol: '◐', className: 'is-started' }
  }

  return { symbol: '•', className: 'is-new' }
}

export default function KantPrefacesMap() {
  const initialSession = useMemo(() => loadKantPrefacesSession(), [])
  const initialViewId =
    initialSession?.viewId === 'overview' ||
    kantPrefacesPhases.some((phase) => phase.id === initialSession?.viewId)
      ? initialSession.viewId
      : 'overview'
  const initialGraph =
    initialViewId === 'overview'
      ? kantPrefacesOverview
      : kantPrefacesPhases.find((phase) => phase.id === initialViewId)
  const initialActiveNodeId =
    initialGraph?.nodes.some((node) => node.id === initialSession?.activeNodeId)
      ? initialSession.activeNodeId
      : initialGraph?.nodes[0]?.id || kantPrefacesOverview.nodes[0].id

  const [viewId, setViewId] = useState(initialViewId)
  const [studyMode, setStudyMode] = useState('manual')
  const [guideIndex, setGuideIndex] = useState(0)
  const [activeNodeId, setActiveNodeId] = useState(initialActiveNodeId)
  const [peekNodeId, setPeekNodeId] = useState('')
  const [selectedEdgeId, setSelectedEdgeId] = useState('')
  const [mastery, setMastery] = useState(() => loadKantPrefacesMastery())
  const [notes, setNotes] = useState(() => loadKantPrefacesNotes())
  const [history, setHistory] = useState(() => loadKantPrefacesHistory())
  const [search, setSearch] = useState('')
  const [resetKey, setResetKey] = useState(0)
  const [centerNonce, setCenterNonce] = useState(0)
  const [fitNonce, setFitNonce] = useState(0)
  const [mobilePane, setMobilePane] = useState('map')
  const [isFullscreen, setIsFullscreen] = useState(false)
  const mapPanelRef = useRef(null)

  const currentPhase = useMemo(
    () =>
      viewId === 'overview'
        ? null
        : kantPrefacesPhases.find((phase) => phase.id === viewId) || null,
    [viewId],
  )

  const currentGraph = useMemo(() => {
    if (!currentPhase) {
      return {
        ...kantPrefacesOverview,
        nodes: kantPrefacesOverview.nodes.map((node) => ({
          ...node,
          phaseId: 'overview',
          phaseRoman: node.tag,
        })),
      }
    }

    return {
      ...currentPhase,
      nodes: currentPhase.nodes.map((node) =>
        enrichPhaseNode(node, currentPhase),
      ),
    }
  }, [currentPhase])

  const allNodes = useMemo(
    () => [
      ...kantPrefacesOverview.nodes.map((node) => ({
        ...node,
        phaseId: 'overview',
        phaseRoman: node.tag,
      })),
      ...kantPrefacesAllDetailNodes,
    ],
    [],
  )

  const allNodeById = useMemo(() => {
    const map = new Map()
    allNodes.forEach((node) => map.set(node.id, node))
    return map
  }, [allNodes])

  const activeNode =
    currentGraph.nodes.find((node) => node.id === activeNodeId) ||
    currentGraph.nodes[0] ||
    null

  const peekNode = peekNodeId ? allNodeById.get(peekNodeId) || null : null

  const relationEdges = useMemo(
    () =>
      viewId === 'overview'
        ? kantPrefacesOverview.edges
        : [...currentGraph.edges, ...kantPrefacesCrossEdges],
    [currentGraph.edges, viewId],
  )

  const guideSteps = useMemo(() => {
    if (viewId === 'overview') return kantPrefacesOverview.guideSteps

    return currentGraph.guideNodeIds
      .map((nodeId) => currentGraph.nodes.find((node) => node.id === nodeId))
      .filter(Boolean)
      .map((node) => ({
        nodeId: node.id,
        title: node.title,
        explanation: node.detail,
        keyIdea: node.keyIdea,
        question: node.question,
        answer: node.answer,
      }))
  }, [currentGraph, viewId])

  const guideStep = guideSteps[guideIndex] || guideSteps[0] || null
  const nextGuideNodeId =
    studyMode === 'guide'
      ? guideSteps[guideIndex + 1]?.nodeId || ''
      : ''

  const totalConcepts = kantPrefacesAllDetailNodes.length
  const masteredConcepts = kantPrefacesAllDetailNodes.filter(
    (node) => mastery[node.id] === 'mastered',
  ).length

  const phaseIndex = currentPhase
    ? kantPrefacesPhases.findIndex((phase) => phase.id === currentPhase.id)
    : -1

  const previousPhase = phaseIndex > 0
    ? kantPrefacesPhases[phaseIndex - 1]
    : null
  const nextPhase =
    phaseIndex >= 0 && phaseIndex < kantPrefacesPhases.length - 1
      ? kantPrefacesPhases[phaseIndex + 1]
      : null

  const searchResults = useMemo(() => {
    const needle = normalizeText(search.trim())
    if (!needle) return []

    return kantPrefacesAllDetailNodes
      .filter((node) => {
        const haystack = normalizeText(
          [
            node.title,
            node.tag,
            node.detail,
            node.keyIdea,
            node.phaseTitle,
            `prólogo ${node.preface}`,
          ].join(' '),
        )

        return haystack.includes(needle)
      })
      .slice(0, 8)
  }, [search])

  useEffect(() => {
    saveKantPrefacesSession({
      viewId,
      activeNodeId,
      savedAt: new Date().toISOString(),
    })
  }, [activeNodeId, viewId])

  useEffect(() => {
    const syncFullscreen = () => {
      const element =
        document.fullscreenElement || document.webkitFullscreenElement

      setIsFullscreen(element === mapPanelRef.current)
      window.setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 100)
    }

    document.addEventListener('fullscreenchange', syncFullscreen)
    document.addEventListener('webkitfullscreenchange', syncFullscreen)

    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreen)
      document.removeEventListener('webkitfullscreenchange', syncFullscreen)
    }
  }, [])

  const changeView = (nextViewId, nextNodeId) => {
    const nextGraph =
      nextViewId === 'overview'
        ? kantPrefacesOverview
        : kantPrefacesPhases.find((phase) => phase.id === nextViewId)

    if (!nextGraph) return

    const resolvedNodeId =
      nextNodeId || nextGraph.nodes[0]?.id || ''

    setStudyMode('manual')
    setGuideIndex(0)
    setPeekNodeId('')
    setSelectedEdgeId('')
    setViewId(nextViewId)
    setActiveNodeId(resolvedNodeId)
    setHistory(
      recordKantPrefacesHistory({
        nodeId: resolvedNodeId,
        viewId: nextViewId,
        mode: 'manual',
      }),
    )
    setMobilePane('map')
  }

  const navigateToNode = (nodeId) => {
    if (!nodeId) return

    const overviewNode = kantPrefacesOverview.nodes.find(
      (node) => node.id === nodeId,
    )

    if (overviewNode) {
      changeView('overview', nodeId)
      return
    }

    const phase = getKantPrefacesPhaseForNode(nodeId)
    if (phase) {
      changeView(phase.id, nodeId)
    }
  }

  const inspectorNavigateToNode = (nodeId) => {
    if (studyMode === 'guide' && nodeId !== activeNodeId) {
      setPeekNodeId(nodeId)
      return
    }

    navigateToNode(nodeId)
  }

  const enterGuide = () => {
    const first = guideSteps[0]
    if (!first) return

    setStudyMode('guide')
    setGuideIndex(0)
    setPeekNodeId('')
    setSelectedEdgeId('')
    setActiveNodeId(first.nodeId)
    setHistory(
      recordKantPrefacesHistory({
        nodeId: first.nodeId,
        viewId,
        mode: 'guide',
      }),
    )
    setMobilePane('map')
  }

  const exitGuide = () => {
    setStudyMode('manual')
    setPeekNodeId('')
  }

  const goToGuideStep = (index) => {
    if (index < 0 || index >= guideSteps.length) return

    const nextNodeId = guideSteps[index].nodeId

    setGuideIndex(index)
    setPeekNodeId('')
    setSelectedEdgeId('')
    setActiveNodeId(nextNodeId)
    setHistory(
      recordKantPrefacesHistory({
        nodeId: nextNodeId,
        viewId,
        mode: 'guide',
      }),
    )
  }

  const handleMastery = (nodeId, status) => {
    const next = setKantPrefacesMastery(nodeId, status)
    setMastery(next)
  }

  const handleNote = (nodeId, value) => {
    const next = saveKantPrefacesNote(nodeId, value)
    setNotes(next)
  }

  const selectSearchResult = (node) => {
    setSearch('')
    navigateToNode(node.id)
    setMobilePane('inspector')
  }

  const resetPositions = () => {
    clearKantPrefacesPositions(viewId)
    setResetKey((current) => current + 1)
  }

  const toggleFullscreen = async () => {
    const element = mapPanelRef.current
    if (!element) return

    const fullscreenElement =
      document.fullscreenElement || document.webkitFullscreenElement

    try {
      if (fullscreenElement) {
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        }
        return
      }

      if (element.requestFullscreen) {
        await element.requestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      }
    } catch (error) {
      console.error('No se pudo cambiar el modo de pantalla completa:', error)
    }
  }

  const prefaceA = kantPrefacesPhases.filter((phase) => phase.preface === 'A')
  const prefaceB = kantPrefacesPhases.filter((phase) => phase.preface === 'B')

  return (
    <main className="kpm-page">
      <nav className="kpm-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="kpm-brand">Φ · Philosophia</Link>
        <span>Kant · Prólogos · FI190</span>
      </nav>

      <header className="kpm-hero">
        <div className="kpm-hero-grid" aria-hidden="true" />
        <div className="kpm-hero-mark" aria-hidden="true">K</div>
        <div>
          <p className="kpm-kicker">Sistema 2D de estudio · fuente única: el libro</p>
          <h1>
            Kant
            <em> · los prólogos de la Crítica de la razón pura</em>
          </h1>
          <p className="kpm-lead">
            Diez mapas conectados para reconstruir por qué la razón necesita
            crítica, qué cambia con la revolución copernicana y por qué limitar
            el saber especulativo prepara una metafísica rigurosa.
          </p>
          <div className="kpm-source-callout">
            <span>EDICIÓN DE TRABAJO</span>
            <strong>{KANT_PREFACES_SOURCE.edition}</strong>
            <small>{KANT_PREFACES_SOURCE.scope} · {KANT_PREFACES_SOURCE.pages}</small>
          </div>
        </div>
      </header>

      <section className="kpm-phase-rail">
        <button
          type="button"
          className={viewId === 'overview' ? 'kpm-overview-button is-active' : 'kpm-overview-button'}
          disabled={studyMode === 'guide'}
          onClick={() => changeView('overview', 'ov-reason')}
        >
          <b>Σ</b>
          <span>Mapa general</span>
        </button>

        <div className="kpm-preface-group">
          <span>PRÓLOGO A · 1781</span>
          <div>
            {prefaceA.map((phase) => {
              const status = statusForPhase(phase, mastery)
              return (
                <button
                  type="button"
                  key={phase.id}
                  disabled={studyMode === 'guide'}
                  className={[
                    viewId === phase.id ? 'is-active' : '',
                    status.className,
                  ].join(' ')}
                  onClick={() => changeView(phase.id, phase.nodes[0].id)}
                  title={phase.title}
                >
                  <b>{phase.roman}</b>
                  <span>{phase.shortTitle}</span>
                  <i>{status.symbol}</i>
                </button>
              )
            })}
          </div>
        </div>

        <div className="kpm-preface-group">
          <span>PRÓLOGO B · 1787</span>
          <div>
            {prefaceB.map((phase) => {
              const status = statusForPhase(phase, mastery)
              return (
                <button
                  type="button"
                  key={phase.id}
                  disabled={studyMode === 'guide'}
                  className={[
                    viewId === phase.id ? 'is-active' : '',
                    status.className,
                  ].join(' ')}
                  onClick={() => changeView(phase.id, phase.nodes[0].id)}
                  title={phase.title}
                >
                  <b>{phase.roman}</b>
                  <span>{phase.shortTitle}</span>
                  <i>{status.symbol}</i>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="kpm-main">
        <header className="kpm-view-head">
          <div>
            <p>
              {viewId === 'overview'
                ? 'Σ · Prólogos A + B'
                : `${currentPhase.roman} · ${currentPhase.subtitle}`}
            </p>
            <h2>{currentGraph.title}</h2>
            <p className="kpm-question">
              <strong>Pregunta guía:</strong> {currentGraph.question}
            </p>
          </div>

          <div className="kpm-thesis">
            <span>Tesis</span>
            <p>{currentGraph.thesis}</p>
          </div>
        </header>

        <div className="kpm-takeaways">
          {currentGraph.takeaways.map((item) => (
            <article key={item}>
              <span>∴</span>
              <p>{item}</p>
            </article>
          ))}
        </div>

        <section
          ref={mapPanelRef}
          className={[
            'kpm-map-panel',
            studyMode === 'guide' ? 'is-guide' : '',
            isFullscreen ? 'is-fullscreen' : '',
          ].join(' ')}
        >
          <header className="kpm-map-toolbar">
            <div>
              <span>{viewId === 'overview' ? 'Mapa general' : `Fase ${currentPhase.roman}`}</span>
              <h3>{viewId === 'overview' ? 'Argumento completo de los prólogos' : 'Arquitectura argumental de la fase'}</h3>
            </div>

            <div className="kpm-search-wrap">
              <label>
                <span className="sr-only">Buscar concepto</span>
                <input
                  type="search"
                  value={search}
                  placeholder="Buscar concepto…"
                  onChange={(event) => setSearch(event.target.value)}
                  disabled={studyMode === 'guide'}
                />
              </label>

              {search.trim() && (
                <div className="kpm-search-results">
                  {searchResults.length > 0 ? (
                    searchResults.map((node) => (
                      <button
                        type="button"
                        key={node.id}
                        onClick={() => selectSearchResult(node)}
                      >
                        <b>{node.title}</b>
                        <span>Fase {node.phaseRoman} · {node.phaseTitle}</span>
                      </button>
                    ))
                  ) : (
                    <p>Sin coincidencias.</p>
                  )}
                </div>
              )}
            </div>

            <div className="kpm-toolbar-actions">
              <button type="button" onClick={() => setCenterNonce((value) => value + 1)}>
                Centrar
              </button>
              <button type="button" onClick={() => setFitNonce((value) => value + 1)}>
                Ver todo
              </button>
              <button
                type="button"
                disabled={studyMode === 'guide'}
                onClick={resetPositions}
              >
                Restaurar diseño
              </button>
              <button
                type="button"
                className="kpm-fullscreen-button"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
              </button>
            </div>

            <div className="kpm-mode-toggle" aria-label="Modo de estudio">
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

            <details className="kpm-legend">
              <summary>Leyenda</summary>
              <ul>
                {kantPrefacesLegend.map(([key, label]) => (
                  <li key={key}>
                    <i className={`kpm-swatch kpm-swatch--${key}`} />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </details>
          </header>

          {studyMode === 'guide' && guideStep && (
            <div className="kpm-guide-strip">
              <span>Guía de {viewId === 'overview' ? 'mapa general' : `fase ${currentPhase.roman}`}</span>
              <b>Paso {guideIndex + 1} de {guideSteps.length}</b>
              <strong>{guideStep.title}</strong>
              <div>
                <button
                  type="button"
                  disabled={guideIndex === 0}
                  onClick={() => goToGuideStep(guideIndex - 1)}
                >
                  ←
                </button>
                <button
                  type="button"
                  disabled={guideIndex === guideSteps.length - 1}
                  onClick={() => goToGuideStep(guideIndex + 1)}
                >
                  →
                </button>
              </div>
            </div>
          )}

          <div className="kpm-mobile-pane-toggle">
            <button
              type="button"
              className={mobilePane === 'map' ? 'is-active' : ''}
              onClick={() => setMobilePane('map')}
            >
              Mapa
            </button>
            <button
              type="button"
              className={mobilePane === 'inspector' ? 'is-active' : ''}
              onClick={() => setMobilePane('inspector')}
            >
              Inspector
            </button>
          </div>

          <div className={`kpm-workbench is-mobile-${mobilePane}`}>
            <KantPrefacesCanvas
              key={`${viewId}-${resetKey}`}
              viewId={viewId}
              graph={currentGraph}
              activeNodeId={activeNodeId}
              guideMode={studyMode === 'guide'}
              nextGuideNodeId={nextGuideNodeId}
              peekNodeId={peekNodeId}
              onNodeSelect={(nodeId) => {
                setActiveNodeId(nodeId)
                setSelectedEdgeId('')
                setPeekNodeId('')
                setHistory(
                  recordKantPrefacesHistory({
                    nodeId,
                    viewId,
                    mode: studyMode,
                  }),
                )
              }}
              onPeekNode={setPeekNodeId}
              onEdgeSelect={setSelectedEdgeId}
              centerNonce={centerNonce}
              fitNonce={fitNonce}
            />

            <KantPrefacesInspector
              node={activeNode}
              allNodes={allNodes}
              relationEdges={relationEdges}
              selectedEdgeId={selectedEdgeId}
              onSelectEdge={setSelectedEdgeId}
              onNodeSelect={inspectorNavigateToNode}
              onExploreNode={(phaseId, nodeId) => changeView(phaseId, nodeId)}
              mastery={mastery}
              notes={notes}
              history={history}
              totalConcepts={totalConcepts}
              masteredConcepts={masteredConcepts}
              onMastery={handleMastery}
              onNote={handleNote}
              guideMode={studyMode === 'guide'}
              guideStep={guideStep}
              guideStepNumber={guideIndex + 1}
              guideTotal={guideSteps.length}
              onPreviousGuideStep={() => goToGuideStep(guideIndex - 1)}
              onNextGuideStep={() => goToGuideStep(guideIndex + 1)}
              peekNode={peekNode}
              onClearPeek={() => setPeekNodeId('')}
            />
          </div>
        </section>

        <footer className="kpm-phase-footer">
          {viewId === 'overview' ? (
            <>
              <Link to="/tareas">← Ver tareas</Link>
              <span>
                {masteredConcepts} de {totalConcepts} conceptos dominados
              </span>
              <button
                type="button"
                onClick={() => changeView('phase-1', 'a1-reason')}
              >
                Comenzar Fase I →
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                disabled={studyMode === 'guide' || !previousPhase}
                onClick={() =>
                  previousPhase &&
                  changeView(previousPhase.id, previousPhase.nodes[0].id)
                }
              >
                ← Fase anterior
              </button>

              <button
                type="button"
                disabled={studyMode === 'guide'}
                onClick={() => changeView('overview', 'ov-reason')}
              >
                Mapa general
              </button>

              <button
                type="button"
                disabled={studyMode === 'guide' || !nextPhase}
                onClick={() =>
                  nextPhase &&
                  changeView(nextPhase.id, nextPhase.nodes[0].id)
                }
              >
                Siguiente fase →
              </button>
            </>
          )}
        </footer>

        <section className="kpm-bibliography">
          <span>Fuente única de este sistema</span>
          <p>
            <strong>Kant, Immanuel.</strong> <em>Crítica de la razón pura.</em>{' '}
            Prólogo, traducción, notas e índices de Pedro Ribas. Taurus.
            Mapa construido exclusivamente a partir de los prólogos A y B de la
            edición de trabajo.
          </p>
        </section>
      </section>
    </main>
  )
}
