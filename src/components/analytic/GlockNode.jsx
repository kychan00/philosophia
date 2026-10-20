import { Handle, Position } from '@xyflow/react'

export default function GlockNode({ data, selected }) {
  return (
    <article
      data-topic-tone={data.topicTone}
      style={{ '--ph2d-node-accent': `var(--ph2d-topic-${data.topicTone})` }}
      className={[
        'glock-flow-node',
        selected ? 'is-selected' : '',
        data.highlighted ? 'is-highlighted' : '',
        data.dimmed ? 'is-dimmed' : '',
        data.guidedCurrent ? 'is-guided-current' : '',
        data.guidedNext ? 'is-guided-next' : '',
        data.guidedCompleted ? 'is-guided-completed' : '',
        data.guidedSupport ? 'is-guided-support' : '',
        data.topicActive ? 'is-topic-active' : '',
        data.topicSupport ? 'is-topic-support' : '',
        data.classSeen ? 'has-class-chip' : '',
      ].filter(Boolean).join(' ')}
    >
      {data.conceptNumber && (
        <span className="glock-concept-number">{data.conceptNumber}</span>
      )}

      {data.classSeen && (
        <span className="glock-class-chip">VISTO EN CLASE</span>
      )}

      <Handle type="target" position={Position.Left} className="glock-flow-handle" />

      <div className="glock-flow-node-meta">
        <span>{data.kind}</span>
        <b>{data.code}</b>
      </div>

      <strong className="glock-flow-node-title">{data.title}</strong>
      <p className="glock-flow-node-summary">{data.short}</p>

      <section className="glock-node-source-card" aria-label="Texto explícito del nodo">
        <span>TEXTO EXPLÍCITO · {data.page}</span>
        <blockquote>{data.sourcePassage}</blockquote>
      </section>

      <div className="glock-node-mini-schema" aria-label="Esquema breve del nodo">
        {data.diagram.map((part, index) => (
          <span key={`${data.code}-diagram-${index}`}>
            <b>{part}</b>
            {index < data.diagram.length - 1 && <i aria-hidden="true">→</i>}
          </span>
        ))}
      </div>

      <div className="glock-flow-node-footer">
        <span>{data.page}</span>
        <em>fuente documentada</em>
      </div>

      <Handle type="source" position={Position.Right} className="glock-flow-handle" />
    </article>
  )
}
