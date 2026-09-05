import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  loadFollesdalHistory,
  loadFollesdalMastery,
  loadFollesdalNotes,
  recordFollesdalHistory,
  saveFollesdalNote,
  setFollesdalMastery,
} from '../data/analyticFollesdalStudyStore'

const tabs = [
  ['book', 'Libro'],
  ['class', 'Clase'],
  ['relations', 'Relaciones'],
  ['notes', 'Notas'],
]

const masteryOptions = [
  ['understood', 'Entendido', '✓'],
  ['doubt', 'Duda', '?'],
  ['review', 'Repasar', '↺'],
]

function explainRelation(edge, source, target) {
  const label = edge.label || 'se relaciona con'

  if (edge.kind === 'contrast') {
    return (
      `Es una relación de contraste: “${source.title}” ${label} ` +
      `“${target.title}”. La función de la línea es mostrar una tensión, ` +
      `objeción o límite que obliga a precisar el argumento.`
    )
  }

  if (edge.kind === 'bridge') {
    return (
      `Es un puente entre regiones del argumento: “${source.title}” ` +
      `${label} “${target.title}”. Esta conexión permite pasar de una ` +
      `fase del razonamiento a la siguiente sin tratar los mapas como ` +
      `bloques aislados.`
    )
  }

  return (
    `“${source.title}” ${label} “${target.title}”. ` +
    `La línea explicita cómo una idea prepara, sostiene, desarrolla ` +
    `o conduce a la otra dentro de la reconstrucción del ensayo.`
  )
}

function EvidenceBadge({ kind, children }) {
  return (
    <span className={`afm-evidence-badge afm-evidence-badge--${kind}`}>
      {children}
    </span>
  )
}

export default function AnalyticFollesdalInspector({
  panelRef,
  node,
  graphNodes,
  graphEdges,
  classLinks,
  guideMode,
  guideStep,
  guideStepNumber,
  guideTotal,
  onPreviousGuideStep,
  onNextGuideStep,
  onNodeSelect,
  selectedEdgeId,
  onSelectEdge,
  peekNode,
  peekClassLinks = [],
  onClearPeek,
}) {
  const [tab, setTab] = useState('book')
  const [collapsed, setCollapsed] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)
  const [mastery, setMastery] = useState(
    () => loadFollesdalMastery(),
  )
  const [notes, setNotes] = useState(
    () => loadFollesdalNotes(),
  )
  const [history, setHistory] = useState(
    () => loadFollesdalHistory(),
  )

  const nodeId = node?.id || ''

  useEffect(() => {
    setShowAnswer(false)

    if (!nodeId) return

    setHistory(
      recordFollesdalHistory({
        nodeId,
        phaseId: node?.phaseId || guideStep?.phaseId || null,
        mode: guideMode ? 'guide' : 'manual',
      }),
    )
  }, [
    guideMode,
    guideStep?.phaseId,
    node?.phaseId,
    nodeId,
  ])

  useEffect(() => {
    if (selectedEdgeId) {
      setTab('relations')
    }
  }, [selectedEdgeId])

  const nodeById = useMemo(() => {
    const result = new Map()

    graphNodes.forEach((item) => {
      result.set(item.id, item)
    })

    return result
  }, [graphNodes])

  const relations = useMemo(() => {
    if (!nodeId) return []

    return graphEdges
      .filter(
        (edge) =>
          edge.source === nodeId ||
          edge.target === nodeId,
      )
      .map((edge) => {
        const source = nodeById.get(edge.source)
        const target = nodeById.get(edge.target)

        if (!source || !target) return null

        const other =
          edge.source === nodeId
            ? target
            : source

        return {
          edge,
          source,
          target,
          other,
          direction:
            edge.source === nodeId
              ? 'sale hacia'
              : 'llega desde',
          explanation: explainRelation(
            edge,
            source,
            target,
          ),
        }
      })
      .filter(Boolean)
  }, [
    graphEdges,
    nodeById,
    nodeId,
  ])

  const total = graphNodes.length
  const understood = Object.values(mastery).filter(
    (status) => status === 'understood',
  ).length
  const doubts = Object.values(mastery).filter(
    (status) => status === 'doubt',
  ).length
  const reviews = Object.values(mastery).filter(
    (status) => status === 'review',
  ).length

  const progress =
    total > 0
      ? Math.round((understood / total) * 100)
      : 0

  const currentMastery = mastery[nodeId] || ''
  const currentNote = notes[nodeId] || ''

  const handleMastery = (status) => {
    if (!nodeId) return

    const nextStatus =
      currentMastery === status
        ? ''
        : status

    const next = setFollesdalMastery(
      nodeId,
      nextStatus,
    )

    setMastery(next)
  }

  const handleNote = (value) => {
    if (!nodeId) return

    const next = saveFollesdalNote(
      nodeId,
      value,
    )

    setNotes(next)
  }

  const recentHistory = history
    .map((entry) => ({
      ...entry,
      node: nodeById.get(entry.nodeId),
    }))
    .filter((entry) => entry.node)
    .slice(0, 6)

  if (!node) {
    return (
      <aside
        ref={panelRef}
        className={
        collapsed
          ? 'afm-study-inspector is-collapsed'
          : 'afm-study-inspector is-open'
      }
      >
        <p>Seleccione un nodo para comenzar.</p>
      </aside>
    )
  }

  return (
    <aside
      ref={panelRef}
      className="afm-study-inspector"
    >
      <header className="afm-inspector-header">
        <div>
          <span>
            {guideMode
              ? `Guía · ${guideStepNumber}/${guideTotal}`
              : 'Inspector de estudio'}
          </span>
          <h4>{node.title}</h4>
        </div>

        <div className="afm-inspector-progress">
          <strong>{understood}/{total}</strong>
          <span>entendidos</span>
        </div>

        <button
          type="button"
          className="afm-inspector-collapse-button"
          onClick={() =>
            setCollapsed((current) => !current)
          }
          aria-expanded={!collapsed}
        >
          {collapsed ? 'Abrir panel' : 'Cerrar panel'}
        </button>
      </header>

      <div className="afm-progress-track">
        <i style={{ '--progress': `${progress}%` }} />
      </div>

      <div className="afm-progress-meta">
        <span>✓ {understood}</span>
        <span>? {doubts}</span>
        <span>↺ {reviews}</span>
        <b>{progress}%</b>
      </div>

      {guideMode && peekNode && peekNode.id !== nodeId && (
        <section className="afm-guide-peek-card">
          <div className="afm-guide-peek-head">
            <div>
              <span className="afm-guide-peek-kicker">
                Exploración temporal · no cambia la guía
              </span>

              <div className="afm-guide-peek-legend">
                <span>{peekNode.tag}</span>
                <span>Fase {peekNode.phaseRoman}</span>
                <span>{peekNode.category}</span>
              </div>
            </div>

            <button
              type="button"
              className="afm-guide-peek-close"
              onClick={onClearPeek}
            >
              Cerrar consulta
            </button>
          </div>

          <h5>{peekNode.title}</h5>
          <p>{peekNode.detail}</p>

          <div className="afm-guide-peek-source">
            <EvidenceBadge kind="book">
              LIBRO
            </EvidenceBadge>
            <span>{peekNode.source}</span>
          </div>

          {peekClassLinks.length > 0 && (
            <div className="afm-guide-peek-classes">
              <span>También aparece en clase</span>

              {peekClassLinks.map((link) => (
                <i
                  key={`${peekNode.id}-${link.date}-${link.sectionId}`}
                  style={{
                    '--class-color': link.session.color,
                  }}
                  title={`${link.session.shortDate} · ${link.sectionTitle}`}
                >
                  {link.session.shortDate}
                </i>
              ))}
            </div>
          )}

          <small className="afm-guide-peek-anchor">
            El paso actual de la guía sigue siendo
            {' “'}{node.title}{'”. '}
            Puede cerrar esta consulta o tocar otro nodo.
          </small>
        </section>
      )}

      <div className="afm-inspector-tabs">
        {tabs.map(([key, label]) => (
          <button
            type="button"
            key={key}
            className={tab === key ? 'is-active' : ''}
            onClick={() => setTab(key)}
          >
            {label}
            {key === 'class' && classLinks.length > 0 && (
              <small>{classLinks.length}</small>
            )}
            {key === 'relations' && relations.length > 0 && (
              <small>{relations.length}</small>
            )}
          </button>
        ))}
      </div>

      <div className="afm-inspector-content">
        {tab === 'book' && (
          <section className="afm-inspector-section">
            <div className="afm-evidence-row">
              <EvidenceBadge kind="book">
                LIBRO
              </EvidenceBadge>
              <span>{node.source}</span>
            </div>

            <p className="afm-inspector-main-text">
              {node.detail}
            </p>

            {guideStep && (
              <>
                <div className="afm-inspector-box">
                  <span>Por qué importa</span>
                  <p>{guideStep.keyIdea}</p>
                </div>

                <div className="afm-inspector-box">
                  <span>Relación argumental</span>
                  <p>{guideStep.relationSummary}</p>
                </div>
              </>
            )}

            {guideMode && guideStep && (
              <div className="afm-inspector-question">
                <span>Compruebe si lo entendió</span>
                <p>{guideStep.question}</p>

                <button
                  type="button"
                  onClick={() =>
                    setShowAnswer((current) => !current)
                  }
                >
                  {showAnswer
                    ? 'Ocultar respuesta'
                    : 'Ver respuesta'}
                </button>

                {showAnswer && (
                  <div>
                    <EvidenceBadge kind="map">
                      MAPA
                    </EvidenceBadge>
                    <p>{guideStep.answer}</p>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {tab === 'class' && (
          <section className="afm-inspector-section">
            <div className="afm-evidence-row">
              <EvidenceBadge kind="class">
                CLASE
              </EvidenceBadge>
              <span>
                Conexiones docentes registradas
              </span>
            </div>

            {classLinks.length > 0 ? (
              <div className="afm-inspector-class-list">
                {classLinks.map((link) => (
                  <details
                    key={`${nodeId}-${link.date}-${link.sectionId}`}
                    className="afm-inspector-class-detail"
                    style={{
                      '--class-color':
                        link.session.color,
                    }}
                  >
                    <summary>
                      <i />
                      <div>
                        <b>
                          {link.session.shortDate}
                          {' · '}
                          §{link.sectionNumber}
                        </b>
                        <span>
                          {link.sectionTitle}
                        </span>
                      </div>
                      <em>⌄</em>
                    </summary>

                    <div className="afm-inspector-class-body">
                      <h5>Qué se dijo</h5>
                      <p>{link.relation}</p>

                      <h5>Por qué conecta</h5>
                      <p>{link.why}</p>

                      <Link to={link.session.route}>
                        Abrir clase completa →
                      </Link>
                    </div>
                  </details>
                ))}
              </div>
            ) : (
              <p className="afm-inspector-empty">
                No hay una conexión docente directa
                registrada para este nodo. Su explicación
                procede del texto y del mapa argumental.
              </p>
            )}
          </section>
        )}

        {tab === 'relations' && (
          <section className="afm-inspector-section">
            <div className="afm-evidence-row">
              <EvidenceBadge kind="map">
                MAPA
              </EvidenceBadge>
              <span>
                Por qué existen estas líneas
              </span>
            </div>

            <div className="afm-relation-list">
              {relations.map((relation) => {
                const isSelected =
                  relation.edge.id === selectedEdgeId

                return (
                  <article
                    key={relation.edge.id}
                    className={
                      isSelected
                        ? 'afm-relation-card is-selected'
                        : 'afm-relation-card'
                    }
                    onClick={() =>
                      onSelectEdge?.(relation.edge.id)
                    }
                  >
                    <header>
                      <span>{relation.direction}</span>
                      <b>
                        {relation.edge.label ||
                          'relación'}
                      </b>
                    </header>

                    <h5>{relation.other.title}</h5>
                    <p>{relation.explanation}</p>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        onNodeSelect(relation.other.id)
                      }}
                    >
                      Ir al nodo →
                    </button>
                  </article>
                )
              })}

              {relations.length === 0 && (
                <p className="afm-inspector-empty">
                  Este nodo no tiene relaciones
                  registradas.
                </p>
              )}
            </div>
          </section>
        )}

        {tab === 'notes' && (
          <section className="afm-inspector-section">
            <div className="afm-mastery-block">
              <span>Estado de aprendizaje</span>

              <div className="afm-mastery-buttons">
                {masteryOptions.map(
                  ([key, label, icon]) => (
                    <button
                      type="button"
                      key={key}
                      className={
                        currentMastery === key
                          ? `is-active is-${key}`
                          : ''
                      }
                      onClick={() =>
                        handleMastery(key)
                      }
                    >
                      <b>{icon}</b>
                      {label}
                    </button>
                  ),
                )}
              </div>
            </div>

            <label className="afm-note-editor">
              <span>Notas personales</span>
              <textarea
                rows="10"
                value={currentNote}
                onChange={(event) =>
                  handleNote(event.target.value)
                }
                placeholder={
                  'Escriba aquí su propia explicación, ' +
                  'dudas, relaciones con otros autores, etc.'
                }
              />
              <small>
                Se guarda automáticamente en este navegador.
              </small>
            </label>
          </section>
        )}
      </div>

      <footer className="afm-inspector-footer">
        {guideMode && (
          <div className="afm-inspector-guide-nav">
            <button
              type="button"
              disabled={guideStepNumber <= 1}
              onClick={onPreviousGuideStep}
            >
              ← Anterior
            </button>

            <button
              type="button"
              disabled={guideStepNumber >= guideTotal}
              onClick={onNextGuideStep}
            >
              Siguiente →
            </button>
          </div>
        )}

        <div className="afm-inspector-history">
          <span>Recientes</span>
          <div>
            {recentHistory.map((entry) => (
              <button
                type="button"
                key={entry.nodeId}
                title={entry.node.title}
                onClick={() =>
                  onNodeSelect(entry.nodeId)
                }
              >
                {entry.node.title}
              </button>
            ))}
          </div>
        </div>

        <small className="afm-inspector-storage">
          Posiciones · progreso · notas · historial
          guardados localmente
        </small>
      </footer>
    </aside>
  )
}
