import { useMemo, useState } from 'react'

const tabs = [
  ['book', 'Libro'],
  ['relations', 'Relaciones'],
  ['study', 'Estudio'],
]

const masteryOptions = [
  ['new', 'Nuevo', '○'],
  ['reviewing', 'Revisando', '◐'],
  ['mastered', 'Dominado', '●'],
]

function relationExplanation(relation, source, target) {
  if (relation.explanation) return relation.explanation

  const label = relation.label || 'se relaciona con'

  if (['contrasts', 'rejects', 'limits', 'distinguishes'].includes(relation.kind)) {
    return `La relación marca una diferencia o límite: “${source.title}” ${label} “${target.title}”.`
  }

  if (relation.kind === 'bridge') {
    return `Es una conexión entre regiones del argumento: “${source.title}” ${label} “${target.title}”.`
  }

  return `“${source.title}” ${label} “${target.title}”. La flecha hace explícito el movimiento argumental entre ambos conceptos.`
}

function sourceLabel(node) {
  const preface = node.preface || '?'
  const pages = node.pages ? ` · pp. ${node.pages}` : ''
  return `KANT · PRÓLOGO ${preface}${pages}`
}

export default function KantPrefacesInspector({
  node,
  allNodes,
  relationEdges,
  selectedEdgeId,
  onSelectEdge,
  onNodeSelect,
  onExploreNode,
  mastery,
  notes,
  history,
  totalConcepts,
  masteredConcepts,
  onMastery,
  onNote,
  guideMode,
  guideStep,
  guideStepNumber,
  guideTotal,
  onPreviousGuideStep,
  onNextGuideStep,
  peekNode,
  onClearPeek,
}) {
  const [tab, setTab] = useState('book')
  const [showAnswer, setShowAnswer] = useState(false)
  const nodeId = node?.id || ''

  const nodeById = useMemo(() => {
    const map = new Map()
    allNodes.forEach((item) => map.set(item.id, item))
    return map
  }, [allNodes])

  const relations = useMemo(() => {
    if (!nodeId) return []

    return relationEdges
      .filter((item) =>
        item.source === nodeId || item.target === nodeId,
      )
      .map((item) => {
        const source = nodeById.get(item.source)
        const target = nodeById.get(item.target)
        if (!source || !target) return null

        const outgoing = item.source === nodeId
        const other = outgoing ? target : source

        return {
          edge: item,
          source,
          target,
          other,
          direction: outgoing ? 'sale hacia' : 'llega desde',
          explanation: relationExplanation(item, source, target),
        }
      })
      .filter(Boolean)
  }, [nodeById, nodeId, relationEdges])

  const recent = useMemo(
    () =>
      history
        .map((entry) => ({
          ...entry,
          node: nodeById.get(entry.nodeId),
        }))
        .filter((entry) => entry.node)
        .slice(0, 6),
    [history, nodeById],
  )

  if (!node) {
    return (
      <aside className="kpm-inspector">
        <p className="kpm-empty">Seleccione un nodo para comenzar.</p>
      </aside>
    )
  }

  const currentMastery = mastery[node.id] || 'new'
  const currentNote = notes[node.id] || ''
  const progress = totalConcepts
    ? Math.round((masteredConcepts / totalConcepts) * 100)
    : 0

  return (
    <aside className="kpm-inspector">
      <header className="kpm-inspector-header">
        <div>
          <span>
            {guideMode
              ? `Guía · ${guideStepNumber}/${guideTotal}`
              : 'Inspector de estudio'}
          </span>
          <h3>{node.title}</h3>
          <small>{sourceLabel(node)}</small>
        </div>

        <div className="kpm-inspector-progress">
          <strong>{masteredConcepts}/{totalConcepts}</strong>
          <span>dominados</span>
        </div>
      </header>

      <div className="kpm-progress-track">
        <i style={{ '--kpm-progress': `${progress}%` }} />
      </div>

      {guideMode && peekNode && peekNode.id !== node.id && (
        <section className="kpm-peek">
          <div>
            <span>Exploración temporal · la guía no cambia</span>
            <button type="button" onClick={onClearPeek}>Cerrar</button>
          </div>
          <h4>{peekNode.title}</h4>
          <p>{peekNode.detail}</p>
          <small>{sourceLabel(peekNode)}</small>
        </section>
      )}

      <div className="kpm-inspector-tabs">
        {tabs.map(([key, label]) => (
          <button
            type="button"
            key={key}
            className={tab === key ? 'is-active' : ''}
            onClick={() => {
              setTab(key)
              setShowAnswer(false)
            }}
          >
            {label}
            {key === 'relations' && relations.length > 0 && (
              <small>{relations.length}</small>
            )}
          </button>
        ))}
      </div>

      <div className="kpm-inspector-content">
        {tab === 'book' && (
          <section className="kpm-inspector-section">
            <div className="kpm-source-badge">
              <b>{sourceLabel(node)}</b>
              <span>Taurus · traducción de Pedro Ribas</span>
            </div>

            <p className="kpm-main-explanation">{node.detail}</p>

            <div className="kpm-inspector-box">
              <span>Idea que debe quedar clara</span>
              <p>{guideStep?.keyIdea || node.keyIdea}</p>
            </div>

            {guideStep && (
              <div className="kpm-inspector-box">
                <span>Recorrido</span>
                <p>{guideStep.explanation}</p>
              </div>
            )}

            <div className="kpm-check-card">
              <span>Compruebe si lo entendió</span>
              <p>{guideStep?.question || node.question}</p>
              <button
                type="button"
                onClick={() => setShowAnswer((current) => !current)}
              >
                {showAnswer ? 'Ocultar respuesta' : 'Mostrar respuesta'}
              </button>
              {showAnswer && (
                <div>
                  <b>Respuesta</b>
                  <p>{guideStep?.answer || node.answer}</p>
                </div>
              )}
            </div>

            {node.targetPhaseId && (
              <button
                type="button"
                className="kpm-explore-phase"
                onClick={() =>
                  onExploreNode?.(node.targetPhaseId, node.targetNodeId)
                }
              >
                Explorar fase detallada →
              </button>
            )}
          </section>
        )}

        {tab === 'relations' && (
          <section className="kpm-inspector-section">
            <div className="kpm-section-heading">
              <span>Relaciones argumentales</span>
              <p>Las líneas muestran funciones concretas, no asociaciones libres.</p>
            </div>

            <div className="kpm-relations">
              {relations.map((relation) => {
                const selected = relation.edge.id === selectedEdgeId

                return (
                  <article
                    key={relation.edge.id}
                    className={selected ? 'is-selected' : ''}
                    onClick={() => onSelectEdge?.(relation.edge.id)}
                  >
                    <header>
                      <span>{relation.direction}</span>
                      <b>{relation.edge.label || 'relación'}</b>
                    </header>
                    <h4>{relation.other.title}</h4>
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
                <p className="kpm-empty">
                  Este nodo no tiene relaciones registradas.
                </p>
              )}
            </div>
          </section>
        )}

        {tab === 'study' && (
          <section className="kpm-inspector-section">
            <div className="kpm-mastery">
              <span>Dominio</span>
              <div>
                {masteryOptions.map(([key, label, icon]) => (
                  <button
                    type="button"
                    key={key}
                    className={currentMastery === key ? 'is-active' : ''}
                    onClick={() => onMastery(node.id, key)}
                  >
                    <b>{icon}</b>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <label className="kpm-note">
              <span>Mi nota</span>
              <textarea
                rows="10"
                value={currentNote}
                onChange={(event) => onNote(node.id, event.target.value)}
                placeholder="Escriba aquí su explicación, duda o relación personal con el argumento…"
              />
              <small>Se guarda automáticamente en este navegador.</small>
            </label>
          </section>
        )}
      </div>

      <footer className="kpm-inspector-footer">
        {guideMode && (
          <div className="kpm-guide-nav">
            <button
              type="button"
              disabled={guideStepNumber <= 1}
              onClick={onPreviousGuideStep}
            >
              ← Anterior
            </button>
            <span>{guideStepNumber} / {guideTotal}</span>
            <button
              type="button"
              disabled={guideStepNumber >= guideTotal}
              onClick={onNextGuideStep}
            >
              Siguiente →
            </button>
          </div>
        )}

        {recent.length > 0 && (
          <div className="kpm-history">
            <span>Recientes</span>
            <div>
              {recent.map((entry) => (
                <button
                  type="button"
                  key={entry.nodeId}
                  onClick={() => onNodeSelect(entry.nodeId)}
                  title={entry.node.title}
                >
                  {entry.node.title}
                </button>
              ))}
            </div>
          </div>
        )}

        <small>
          Posiciones · dominio · notas · historial guardados localmente
        </small>
      </footer>
    </aside>
  )
}
