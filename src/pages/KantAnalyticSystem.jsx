import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import {
  Background, Controls, MarkerType, MiniMap, ReactFlow, ReactFlowProvider, useEdgesState, useNodesState, useReactFlow, } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { GUIDE_STEPS, MAPS, PHASES, SOURCE_LABELS, STUDY_QUESTIONS, SOURCE_READINGS, READING_LIBRARY, NODE_READING_PRESETS } from '../data/kantAnalyticSystem'
import './KantAnalyticSystem.css'

const NODE_WIDTH = 310

const SOURCE_FILTERS = [
  ['all', 'TODO'],
  ['kant', 'KANT'],
  ['hartnack', 'HARTNACK'],
  ['both', 'AMBOS'],
]

function sourceMatches(nodeSource, filter) {
  if (filter === 'all') return true
  if (filter === 'both') return nodeSource === 'both'
  if (filter === 'kant') return nodeSource === 'kant' || nodeSource === 'both'
  if (filter === 'hartnack') return nodeSource === 'hartnack' || nodeSource === 'both'
  return true
}


function normalizeSearch(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}


function resolveNodeReadings(mapId, item) {
  if (!item) return null

  const preset = NODE_READING_PRESETS[`${mapId}:${item.id}`] || {}
  const presetReadings = Object.fromEntries(
    Object.entries(preset)
      .map(([source, key]) => [source, READING_LIBRARY[key]])
      .filter(([, reading]) => Boolean(reading)),
  )

  const sourceFallback =
    item.source === 'kant'
      ? { kant: READING_LIBRARY['kant-sensibility-understanding'] }
      : item.source === 'hartnack'
        ? { hartnack: READING_LIBRARY['hartnack-analytic-intro'] }
        : {
            kant: READING_LIBRARY['kant-sensibility-understanding'],
            hartnack: READING_LIBRARY['hartnack-analytic-intro'],
          }

  const exact = SOURCE_READINGS[item.id] || {}
  const resolved = { ...sourceFallback, ...presetReadings, ...exact }

  return Object.keys(resolved).length ? resolved : null
}

function SourceChip({ source }) {
  return (
    <span className={`kas-source-chip is-${source}`}>
      {SOURCE_LABELS[source]?.label || source}
    </span>
  )
}

function nodeLabel(item) {
  return (
    <div className="kas-node-copy">
      <div className="kas-node-topline">
        <span>{item.eyebrow}</span>
        <SourceChip source={item.source} />
      </div>
      <strong>{item.title}</strong>
      <small>{item.short}</small>
    </div>
  )
}

function buildNodes(mode) {
  return MAPS[mode].nodes.map((item) => ({
    id: item.id,
    position: { x: item.x, y: item.y },
    data: { ...item, label: nodeLabel(item) },
    style: {
      width: NODE_WIDTH,
      padding: 0,
      border: '1px solid rgba(43, 55, 68, .22)',
      borderRadius: 4,
      background: '#f2eee5',
      color: '#1f2328',
      boxShadow: '0 14px 34px rgba(31, 35, 40, .07)',
    },
  }))
}

function buildEdges(mode) {
  return MAPS[mode].edges.map(([source, target, label], index) => ({
    id: `${mode}-${source}-${target}-${index}`,
    source,
    target,
    label,
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 18,
      height: 18,
      color: '#596f86',
    },
    style: {
      stroke: '#596f86',
      strokeWidth: 1.45,
    },
    labelStyle: {
      fill: '#435064',
      fontSize: 10,
      fontFamily: 'Georgia, serif',
    },
    labelBgStyle: {
      fill: '#eee9df',
      fillOpacity: 0.94,
    },
  }))
}

function SourceReadingCard({ source, reading, onOpen }) {
  if (!reading) return null

  return (
    <article className={`kas-reading-card is-${source}`}>
      <div className="kas-reading-card-head">
        <div>
          <SourceChip source={source} />
          <span>{reading.kind}</span>
        </div>
        <small>{reading.locator}</small>
      </div>

      <blockquote>“{reading.quote}”</blockquote>

      {reading.fullText && (
        <button type="button" onClick={() => onOpen({ source, ...reading })}>
          VER TEXTO COMPLETO
        </button>
      )}
    </article>
  )
}

function SourceReaderModal({ reading, onClose }) {
  if (!reading) return null

  return (
    <div className="kas-reader-backdrop" onMouseDown={onClose}>
      <article className="kas-reader-modal" onMouseDown={(event) => event.stopPropagation()}>
        <header>
          <div>
            <SourceChip source={reading.source} />
            <span>{reading.kind}</span>
            <h2>{reading.locator}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar texto">×</button>
        </header>

        <div className="kas-reader-body">
          <p>{reading.fullText}</p>
        </div>

        <footer>
          <span>LECTURA DIRECTA · FUENTE SEPARADA DEL RESUMEN DEL NODO</span>
          <button type="button" onClick={onClose}>VOLVER AL MAPA</button>
        </footer>
      </article>
    </div>
  )
}

function Inspector({
  item,
  onClose,
  minimized,
  onToggleMinimize,
  isFullscreen,
  position,
  onDragStart,
  onDragMove,
  onDragEnd,
  readings,
  onOpenReading,
}) {
  if (!item) return null

  return (
    <aside
      className={`kas-inspector ${minimized ? 'is-minimized' : ''}`}
      style={
        isFullscreen && position
          ? { left: `${position.x}px`, top: `${position.y}px`, right: 'auto' }
          : undefined
      }
    >
      <div
        className={`kas-inspector-head ${isFullscreen ? 'is-draggable' : ''}`}
        onPointerDown={(event) => onDragStart?.(event, 'inspector')}
        onPointerMove={onDragMove}
        onPointerUp={onDragEnd}
        onPointerCancel={onDragEnd}
      >
        <div>
          <SourceChip source={item.source} />
          {!minimized && <p>{item.eyebrow}</p>}
          <h2>{item.title}</h2>
        </div>

        <div className="kas-panel-actions">
          {isFullscreen && (
            <button
              type="button"
              onClick={onToggleMinimize}
              aria-label={minimized ? 'Expandir ficha' : 'Minimizar ficha'}
              title={minimized ? 'Expandir' : 'Minimizar'}
            >
              {minimized ? '□' : '—'}
            </button>
          )}
          <button type="button" onClick={onClose} aria-label="Cerrar ficha">×</button>
        </div>
      </div>

      {(!isFullscreen || !minimized) && (
        <>
          <p className="kas-inspector-short">{item.short}</p>

                {item.detail && (
                  <div className="kas-explanation-box">
                    <span>EXPLICACIÓN</span>
                    <p className="kas-inspector-detail">{item.detail}</p>
                  </div>
                )}

          {readings && (
            <div className="kas-readings-box">
              <div className="kas-readings-title">
                <span>LECTURA DIRECTA</span>
                <p>Kant y Hartnack permanecen separados para distinguir texto primario y comentario.</p>
              </div>

              <SourceReadingCard
                source="kant"
                reading={readings.kant}
                onOpen={onOpenReading}
              />
              <SourceReadingCard
                source="hartnack"
                reading={readings.hartnack}
                onOpen={onOpenReading}
              />
            </div>
          )}

          <div className="kas-source-box">
            <span>TRAZABILIDAD</span>
            {item.kantRef && (
              <div>
                <b>KANT</b>
                <p>{item.kantRef}</p>
              </div>
            )}
            {item.hartnackRef && (
              <div>
                <b>HARTNACK</b>
                <p>{item.hartnackRef}</p>
              </div>
            )}
          </div>

          <div className="kas-inspector-tip">
            <span>INTERACCIÓN</span>
            <p>Arrastre este nodo para reorganizar el mapa. Sus conexiones permanecen unidas.</p>
          </div>
        </>
      )}
    </aside>
  )
}

function Guide({ open, index, onIndex, onClose }) {
  if (!open) return null

  const step = GUIDE_STEPS[index]

  return (
    <aside className="kas-guide">
      <div className="kas-guide-head">
        <span>GUÍA INTERACTIVA</span>
        <button type="button" onClick={onClose}>×</button>
      </div>

      <div className="kas-guide-progress">
        {GUIDE_STEPS.map((_, i) => (
          <span key={i} className={i <= index ? 'active' : ''} />
        ))}
      </div>

      <small>PASO {index + 1} / {GUIDE_STEPS.length}</small>
      <h3>{step.title}</h3>
      <p>{step.body}</p>

      <div className="kas-guide-actions">
        <button
          type="button"
          onClick={() => onIndex(Math.max(0, index - 1))}
          disabled={index === 0}
        >
          ← Anterior
        </button>
        <button
          type="button"
          onClick={() => onIndex(Math.min(GUIDE_STEPS.length - 1, index + 1))}
          disabled={index === GUIDE_STEPS.length - 1}
        >
          Siguiente →
        </button>
      </div>
    </aside>
  )
}

function Workspace() {
  const [mode, setMode] = useState('architecture')
  const [sourceFilter, setSourceFilter] = useState('all')
  const [selectedId, setSelectedId] = useState('analytic')
  const [guideOpen, setGuideOpen] = useState(false)
  const [guideIndex, setGuideIndex] = useState(0)
  const [studyOpen, setStudyOpen] = useState(false)
  const [studyIndex, setStudyIndex] = useState(0)
  const [studyAnswers, setStudyAnswers] = useState({})
  const [sourceReader, setSourceReader] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [phasesMinimized, setPhasesMinimized] = useState(false)
  const [toolsMinimized, setToolsMinimized] = useState(false)
  const [inspectorMinimized, setInspectorMinimized] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [panelPositions, setPanelPositions] = useState({})
  const systemRef = useRef(null)
  const panelDragRef = useRef(null)

  const [nodes, setNodes, onNodesChange] = useNodesState(buildNodes('architecture'))
  const [edges, setEdges, onEdgesChange] = useEdgesState(buildEdges('architecture'))
  const { fitView } = useReactFlow()

  const currentMap = MAPS[mode]

  const searchableNodes = useMemo(
    () =>
      Object.entries(MAPS).flatMap(([mapId, map]) =>
        map.nodes.map((item) => {
          const readings = resolveNodeReadings(mapId, item)
          const readingText = readings
            ? Object.values(readings)
                .filter(Boolean)
                .flatMap((reading) => [
                  reading.kind,
                  reading.locator,
                  reading.quote,
                  reading.fullText,
                ])
                .join(' ')
            : ''

          return {
            ...item,
            mapId,
            mapLabel: map.label,
            hasReading: Boolean(readings),
            searchText: normalizeSearch(
              [
                item.title,
                item.short,
                item.detail,
                item.eyebrow,
                item.family,
                item.kantRef,
                item.hartnackRef,
                map.label,
                map.subtitle,
                readingText,
              ]
                .filter(Boolean)
                .join(' '),
            ),
          }
        }),
      ),
    [],
  )

  const searchResults = useMemo(() => {
    const query = normalizeSearch(searchTerm)
    if (!query) return []

    const tokens = query.split(/\s+/).filter(Boolean)

    return searchableNodes
      .map((item) => {
        const title = normalizeSearch(item.title)
        const short = normalizeSearch(item.short)
        const mapLabel = normalizeSearch(item.mapLabel)

        let score = 0
        if (title === query) score += 100
        if (title.startsWith(query)) score += 45
        if (title.includes(query)) score += 30
        if (short.includes(query)) score += 15
        if (mapLabel.includes(query)) score += 10
        if (item.hasReading && item.searchText.includes(query)) score += 12

        const allTokensMatch = tokens.every((token) => item.searchText.includes(token))
        if (allTokensMatch) score += tokens.length * 5

        return { ...item, score }
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 10)
  }, [searchTerm, searchableNodes])

  const openSearchResult = (result) => {
    setSearchOpen(false)
    setSearchTerm(result.title)
    setSourceFilter('all')
    setGuideOpen(false)
    setStudyOpen(false)
    setInspectorMinimized(false)

    if (mode !== result.mapId) {
      changeMode(result.mapId, result.id)
      window.setTimeout(() => focusNode(result.id), 140)
    } else {
      focusNode(result.id)
    }
  }

  const selected = useMemo(
    () => currentMap.nodes.find((item) => item.id === selectedId) || null,
    [currentMap, selectedId],
  )

  const visibleIds = useMemo(
    () =>
      new Set(
        nodes
          .filter((node) => sourceMatches(node.data.source, sourceFilter))
          .map((node) => node.id),
      ),
    [nodes, sourceFilter],
  )

  const visibleNodes = useMemo(
    () =>
      nodes.map((node) => ({
        ...node,
        hidden: !visibleIds.has(node.id),
        className: [
          'kas-flow-node',
          node.id === selectedId ? 'is-selected' : '',
          guideOpen && GUIDE_STEPS[guideIndex]?.nodeId === node.id ? 'is-guide' : '',
        ]
          .filter(Boolean)
          .join(' '),
        data: {
          ...node.data,
          label: nodeLabel(node.data),
        },
      })),
    [nodes, visibleIds, selectedId, guideOpen, guideIndex],
  )

  const visibleEdges = useMemo(
    () =>
      edges.map((edge) => ({
        ...edge,
        hidden: !(visibleIds.has(edge.source) && visibleIds.has(edge.target)),
      })),
    [edges, visibleIds],
  )

  const changeMode = (nextMode, preferredId = null) => {
    const nextNodes = buildNodes(nextMode)
    const nextEdges = buildEdges(nextMode)
    const nextId =
      preferredId && MAPS[nextMode].nodes.some((node) => node.id === preferredId)
        ? preferredId
        : MAPS[nextMode].nodes[0].id

    setMode(nextMode)
    setNodes(nextNodes)
    setEdges(nextEdges)
    setSelectedId(nextId)

    window.setTimeout(() => {
      fitView({ padding: 0.2, duration: 450, maxZoom: 1 })
    }, 60)
  }

  const resetLayout = () => {
    setNodes(buildNodes(mode))
    setEdges(buildEdges(mode))
    window.setTimeout(() => {
      fitView({ padding: 0.2, duration: 450, maxZoom: 1 })
    }, 50)
  }

  const focusNode = (id) => {
    setSelectedId(id)
    window.setTimeout(() => {
      fitView({
        nodes: [{ id }],
        padding: 1.8,
        duration: 500,
        maxZoom: 1.05,
      })
    }, 50)
  }

  const startGuide = () => {
    setSourceFilter('all')
    setGuideOpen(true)
    setGuideIndex(0)
  }

  const currentStudy = STUDY_QUESTIONS[studyIndex]
  const studyScore = Object.values(studyAnswers).filter((entry) => entry?.correct).length

  const openStudy = () => {
    setStudyOpen(true)
    setGuideOpen(false)
    const first = STUDY_QUESTIONS[studyIndex]

    if (!first) return

    if (mode !== first.mode) {
      changeMode(first.mode, first.nodeId)
      window.setTimeout(() => focusNode(first.nodeId), 140)
    } else {
      focusNode(first.nodeId)
    }
  }

  const selectStudyAnswer = (optionIndex) => {
    if (!currentStudy || studyAnswers[currentStudy.id]) return

    const correct = optionIndex === currentStudy.answer

    setStudyAnswers((current) => ({
      ...current,
      [currentStudy.id]: {
        optionIndex,
        correct,
      },
    }))
  }

  const goStudy = (nextIndex) => {
    const bounded = Math.max(0, Math.min(STUDY_QUESTIONS.length - 1, nextIndex))
    setStudyIndex(bounded)

    const question = STUDY_QUESTIONS[bounded]
    if (!question) return

    if (mode !== question.mode) {
      changeMode(question.mode, question.nodeId)
      window.setTimeout(() => focusNode(question.nodeId), 140)
    } else {
      focusNode(question.nodeId)
    }
  }

  const resetStudy = () => {
    setStudyAnswers({})
    setStudyIndex(0)

    const first = STUDY_QUESTIONS[0]
    if (!first) return

    if (mode !== first.mode) {
      changeMode(first.mode, first.nodeId)
      window.setTimeout(() => focusNode(first.nodeId), 140)
    } else {
      focusNode(first.nodeId)
    }
  }

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await systemRef.current?.requestFullscreen?.()
      } else {
        await document.exitFullscreen?.()
      }
    } catch (error) {
      console.error('Fullscreen could not be toggled:', error)
    }
  }

  const startPanelDrag = (event, key) => {
    if (!isFullscreen || event.target.closest('button')) return

    const panel = event.currentTarget.closest('.kas-floating-panel, .kas-inspector')
    const shell = systemRef.current

    if (!panel || !shell) return

    const shellRect = shell.getBoundingClientRect()
    const panelRect = panel.getBoundingClientRect()

    event.currentTarget.setPointerCapture(event.pointerId)

    panelDragRef.current = {
      key,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      x: panelRect.left - shellRect.left,
      y: panelRect.top - shellRect.top,
      width: panelRect.width,
      height: panelRect.height,
    }
  }

  const movePanelDrag = (event) => {
    const drag = panelDragRef.current
    const shell = systemRef.current

    if (!drag || !shell || drag.pointerId !== event.pointerId) return

    const margin = 8
    const nextX = drag.x + event.clientX - drag.startX
    const nextY = drag.y + event.clientY - drag.startY
    const maxX = Math.max(margin, shell.clientWidth - drag.width - margin)
    const maxY = Math.max(margin, shell.clientHeight - drag.height - margin)

    setPanelPositions((current) => ({
      ...current,
      [drag.key]: {
        x: Math.min(maxX, Math.max(margin, nextX)),
        y: Math.min(maxY, Math.max(margin, nextY)),
      },
    }))
  }

  const endPanelDrag = (event) => {
    const drag = panelDragRef.current

    if (!drag || drag.pointerId !== event.pointerId) return

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    panelDragRef.current = null
  }

  useEffect(() => {
    const onFullscreenChange = () => {
      const active = document.fullscreenElement === systemRef.current
      setIsFullscreen(active)

      setPanelPositions({})

      if (!active) {
        setPhasesMinimized(false)
        setToolsMinimized(false)
        setInspectorMinimized(false)
      }

      window.setTimeout(() => {
        fitView({ padding: 0.2, duration: 250, maxZoom: 1 })
      }, 80)
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [fitView])

  useEffect(() => {
    if (!guideOpen) return

    const step = GUIDE_STEPS[guideIndex]
    if (!step) return

    if (mode !== step.mode) {
      changeMode(step.mode, step.nodeId)
      window.setTimeout(() => focusNode(step.nodeId), 140)
      return
    }

    focusNode(step.nodeId)
  }, [guideIndex, guideOpen])

  return (
    <main className="kas-page">
      <nav className="kas-nav">
        <Link to="/tareas">← Tareas</Link>
        <Link to="/" className="kas-brand">Φ · Philosophia</Link>
        <span>FI190 · Ontología II</span>
      </nav>

      <header className="kas-hero">
        <div className="kas-hero-grid" aria-hidden="true" />
        <div>
          <p>IMMANUEL KANT · ANALÍTICA TRASCENDENTAL</p>
          <h1>
            El sistema del
            <em>entendimiento</em>
          </h1>
          <blockquote>
            Texto primario: Crítica de la razón pura. Lectura de apoyo:
            Justus Hartnack, La teoría del conocimiento de Kant.
          </blockquote>
        </div>

        <aside>
          <span>OBJETIVO DE LA TAREA</span>
          <strong>
            Entender cómo Kant pasa de las formas del juicio a las categorías y,
            después, cómo intenta justificar su validez objetiva.
          </strong>
          <p>
            Los nodos son movibles. Los chips indican si el contenido se aborda
            en Kant, en Hartnack o en ambos.
          </p>
        </aside>
      </header>

      <section
        ref={systemRef}
        className={`kas-system-shell ${isFullscreen ? 'is-fullscreen' : ''}`}
      >
        <aside
          className={`kas-floating-panel kas-floating-phases ${phasesMinimized ? 'is-minimized' : ''}`}
          style={
            isFullscreen && panelPositions.phases
              ? { left: `${panelPositions.phases.x}px`, top: `${panelPositions.phases.y}px`, right: 'auto' }
              : undefined
          }
        >
          {isFullscreen && (
            <div
              className="kas-floating-head is-draggable"
              onPointerDown={(event) => startPanelDrag(event, 'phases')}
              onPointerMove={movePanelDrag}
              onPointerUp={endPanelDrag}
              onPointerCancel={endPanelDrag}
            >
              <div>
                <span>RUTA DE ESTUDIO</span>
                <strong>Fases de la Analítica</strong>
              </div>
              <button
                type="button"
                onClick={() => setPhasesMinimized((value) => !value)}
                aria-label={phasesMinimized ? 'Expandir fases' : 'Minimizar fases'}
                title={phasesMinimized ? 'Expandir' : 'Minimizar'}
              >
                {phasesMinimized ? '□' : '—'}
              </button>
            </div>
          )}

          {(!isFullscreen || !phasesMinimized) && (
            <div className="kas-phases">
              {PHASES.map((phase) => (
                <article key={phase.id} className={phase.status === 'active' ? 'active' : ''}>
                  <span>{phase.number}</span>
                  <div>
                    <strong>{phase.title}</strong>
                    <p>{phase.note}</p>
                  </div>
                  <em>{phase.status === 'active' ? 'ACTIVA' : 'SIGUIENTE'}</em>
                </article>
              ))}
            </div>
          )}
        </aside>

        <aside
          className={`kas-floating-panel kas-floating-tools ${toolsMinimized ? 'is-minimized' : ''}`}
          style={
            isFullscreen && panelPositions.tools
              ? { left: `${panelPositions.tools.x}px`, top: `${panelPositions.tools.y}px`, right: 'auto' }
              : undefined
          }
        >
          {isFullscreen && (
            <div
              className="kas-floating-head is-draggable"
              onPointerDown={(event) => startPanelDrag(event, 'tools')}
              onPointerMove={movePanelDrag}
              onPointerUp={endPanelDrag}
              onPointerCancel={endPanelDrag}
            >
              <div>
                <span>CONTROL DEL SISTEMA</span>
                <strong>{currentMap.label}</strong>
              </div>
              <button
                type="button"
                onClick={() => setToolsMinimized((value) => !value)}
                aria-label={toolsMinimized ? 'Expandir controles' : 'Minimizar controles'}
                title={toolsMinimized ? 'Expandir' : 'Minimizar'}
              >
                {toolsMinimized ? '□' : '—'}
              </button>
            </div>
          )}

          {(!isFullscreen || !toolsMinimized) && (
            <div className="kas-toolbar-shell">
              <div className="kas-mode-tabs">
                {Object.entries(MAPS).map(([id, map]) => (
                  <button
                    type="button"
                    key={id}
                    className={mode === id ? 'active' : ''}
                    onClick={() => changeMode(id)}
                  >
                    <span>{map.label}</span>
                    <small>{map.subtitle}</small>
                  </button>
                ))}
              </div>

              <div className="kas-toolbar-row">

          <div className="kas-search">
            <div className={`kas-search-field ${searchOpen ? 'is-open' : ''}`}>
              <span aria-hidden="true">&#8981;</span>
              <input
                type="search"
                value={searchTerm}
                placeholder="Buscar concepto, categoría, cita..."
                aria-label="Buscar en la Analítica trascendental"
                onFocus={() => setSearchOpen(true)}
                onChange={(event) => {
                  setSearchTerm(event.target.value)
                  setSearchOpen(true)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    setSearchOpen(false)
                    event.currentTarget.blur()
                  }

                  if (event.key === 'Enter' && searchResults[0]) {
                    openSearchResult(searchResults[0])
                  }
                }}
              />

              {searchTerm && (
                <button
                  type="button"
                  className="kas-search-clear"
                  aria-label="Limpiar búsqueda"
                  onClick={() => {
                    setSearchTerm('')
                    setSearchOpen(false)
                  }}
                >
                  &#215;
                </button>
              )}
            </div>

            {searchOpen && searchTerm.trim() && (
              <div className="kas-search-results">
                <header>
                  <span>RESULTADOS</span>
                  <strong>{searchResults.length}</strong>
                </header>

                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <button
                      type="button"
                      key={`${result.mapId}-${result.id}`}
                      className="kas-search-result"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => openSearchResult(result)}
                    >
                      <div className="kas-search-result-top">
                        <strong>{result.title}</strong>
                        {result.hasReading && (
                          <span className="kas-search-reading-badge">
                            LECTURA DIRECTA
                          </span>
                        )}
                      </div>

                      <small>{result.mapLabel}</small>
                      <p>{result.short}</p>

                      <div className="kas-search-result-meta">
                        <SourceChip source={result.source} />
                        {result.eyebrow && <span>{result.eyebrow}</span>}
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="kas-search-empty">
                    <strong>Sin coincidencias</strong>
                    <p>Pruebe con “Yo pienso”, “naranja”, “causalidad” o “esquema”.</p>
                  </div>
                )}
              </div>
            )}
          </div>

                <div className="kas-filter">
                  <span>FUENTES</span>
                  {SOURCE_FILTERS.map(([id, label]) => (
                    <button
                      type="button"
                      key={id}
                      className={sourceFilter === id ? 'active' : ''}
                      onClick={() => setSourceFilter(id)}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="kas-actions">
                  <button type="button" onClick={startGuide}>▶ GUÍA</button>
                  <button type="button" className="kas-study-button" onClick={openStudy}>✎ MODO ESTUDIO</button>
                  <button type="button" onClick={resetLayout}>↺ RESTAURAR</button>
                  <button
                    type="button"
                    onClick={() => fitView({ padding: 0.2, duration: 450, maxZoom: 1 })}
                  >
                    ⛶ AJUSTAR
                  </button>
                  <button
                    type="button"
                    className="kas-fullscreen-button"
                    onClick={toggleFullscreen}
                    title={isFullscreen ? 'Salir de pantalla completa' : 'Abrir el sistema en pantalla completa'}
                  >
                    {isFullscreen ? '↙ SALIR' : '⛶ PANTALLA COMPLETA'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </aside>

        <section className={`kas-workspace ${selected ? 'has-inspector' : ''}`}>
          <div className="kas-canvas">
            <ReactFlow
              nodes={visibleNodes}
              edges={visibleEdges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodeClick={(_, node) => {
                setSelectedId(node.id)
                setInspectorMinimized(false)
              }}
              onPaneClick={() => setSelectedId(null)}
              fitView
              fitViewOptions={{ padding: 0.2, maxZoom: 1 }}
              minZoom={0.18}
              maxZoom={1.75}
              nodesDraggable
              nodesConnectable={false}
              elementsSelectable
              panOnDrag
            >
              <Background gap={28} size={1} color="rgba(50, 66, 82, .12)" />
              <MiniMap
                pannable
                zoomable
                nodeColor={(node) => {
                  if (node.data.source === 'kant') return '#6d84a0'
                  if (node.data.source === 'hartnack') return '#9a7650'
                  return '#7c6e8f'
                }}
                maskColor="rgba(239, 234, 224, .78)"
              />
              <Controls showInteractive={false} />
            </ReactFlow>
          </div>

          <Inspector
            item={selected}
            minimized={inspectorMinimized}
            onToggleMinimize={() => setInspectorMinimized((value) => !value)}
            onClose={() => setSelectedId(null)}
            isFullscreen={isFullscreen}
            position={panelPositions.inspector}
            onDragStart={startPanelDrag}
            onDragMove={movePanelDrag}
            onDragEnd={endPanelDrag}
            readings={selected ? resolveNodeReadings(mode, selected) : null}
            onOpenReading={setSourceReader}
          />

          {studyOpen && currentStudy && (
            <aside className="kas-study-panel">
              <div className="kas-study-head">
                <div>
                  <span>MODO ESTUDIO</span>
                  <strong>{studyScore} / {STUDY_QUESTIONS.length} correctas</strong>
                </div>
                <button type="button" onClick={() => setStudyOpen(false)}>×</button>
              </div>

              <div className="kas-study-progress">
                {STUDY_QUESTIONS.map((question, index) => (
                  <button
                    type="button"
                    key={question.id}
                    className={[
                      index === studyIndex ? 'active' : '',
                      studyAnswers[question.id]?.correct ? 'correct' : '',
                      studyAnswers[question.id] && !studyAnswers[question.id]?.correct ? 'wrong' : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => goStudy(index)}
                    aria-label={`Pregunta ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <small>PREGUNTA {studyIndex + 1} / {STUDY_QUESTIONS.length}</small>
              <h3>{currentStudy.prompt}</h3>

              <div className="kas-study-options">
                {currentStudy.options.map((option, index) => {
                  const answered = studyAnswers[currentStudy.id]
                  const isChosen = answered?.optionIndex === index
                  const isCorrectAnswer = answered && index === currentStudy.answer

                  return (
                    <button
                      type="button"
                      key={option}
                      className={[
                        isChosen ? 'chosen' : '',
                        isCorrectAnswer ? 'correct' : '',
                        answered && isChosen && !answered.correct ? 'wrong' : '',
                      ].filter(Boolean).join(' ')}
                      onClick={() => selectStudyAnswer(index)}
                      disabled={Boolean(answered)}
                    >
                      <span>{String.fromCharCode(65 + index)}</span>
                      {option}
                    </button>
                  )
                })}
              </div>

              {studyAnswers[currentStudy.id] && (
                <div className={`kas-study-feedback ${studyAnswers[currentStudy.id].correct ? 'correct' : 'wrong'}`}>
                  <strong>{studyAnswers[currentStudy.id].correct ? 'Correcto' : 'Revise este punto'}</strong>
                  <p>{currentStudy.explanation}</p>
                  <button type="button" onClick={() => focusNode(currentStudy.nodeId)}>
                    Ver nodo relacionado
                  </button>
                </div>
              )}

              <div className="kas-study-nav">
                <button
                  type="button"
                  onClick={() => goStudy(studyIndex - 1)}
                  disabled={studyIndex === 0}
                >
                  ← Anterior
                </button>
                <button type="button" onClick={resetStudy}>
                  Reiniciar
                </button>
                <button
                  type="button"
                  onClick={() => goStudy(studyIndex + 1)}
                  disabled={studyIndex === STUDY_QUESTIONS.length - 1}
                >
                  Siguiente →
                </button>
              </div>
            </aside>
          )}

          <SourceReaderModal
            reading={sourceReader}
            onClose={() => setSourceReader(null)}
          />

          <Guide
            open={guideOpen}
            index={guideIndex}
            onIndex={setGuideIndex}
            onClose={() => setGuideOpen(false)}
          />
        </section>
      </section>

      <footer className="kas-footer">
        <div>
          <SourceChip source="kant" />
          <span>texto primario</span>
        </div>
        <div>
          <SourceChip source="hartnack" />
          <span>comentario / ejemplo de apoyo</span>
        </div>
        <div>
          <SourceChip source="both" />
          <span>presente en ambos</span>
        </div>
        <p>
          Sistema completo: mapas 2D · modo estudio · lector comparado Kant / Hartnack.
        </p>
      </footer>
    </main>
  )
}

export default function KantAnalyticSystem() {
  return (
    <ReactFlowProvider>
      <Workspace />
    </ReactFlowProvider>
  )
}
