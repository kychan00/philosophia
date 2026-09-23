import { Handle, Position } from '@xyflow/react'

export default function HackerNode({ data, selected }) {
  return (
    <div
      style={{ '--topic-color': data.topicColor || '#9a702e' }}
      className={[
        'hacker-flow-node',
        `hacker-flow-node--${data.nodeType}`,
        data.critical ? 'is-critical' : '',
        selected ? 'is-selected' : '',
        data.dimmed ? 'is-dimmed' : '',
        data.highlighted ? 'is-highlighted' : '',
        data.guidedCurrent ? 'is-guided-current' : '',
        data.guidedNext ? 'is-guided-next' : '',
        data.guidedCompleted ? 'is-guided-completed' : '',
        data.guidedSupport ? 'is-guided-support' : '',
        data.topicActive ? 'is-topic-active' : '',
        data.topicSupport ? 'is-topic-support' : '',
        data.classSeen ? 'has-class-chip' : '',
        data.classOnly ? 'is-class-only' : '',
      ].filter(Boolean).join(' ')}
    >
      {data.conceptNumber && (
        <span className="hacker-concept-number">{data.conceptNumber}</span>
      )}

      {data.classSeen && (
        <span
          className="hacker-class-chip"
          title={data.classLabel || 'Visto en la octava clase'}
        >
          {data.classOnly ? 'APORTE DE CLASE' : 'VISTO EN CLASE'}
        </span>
      )}

      <Handle type="target" position={Position.Left} className="hacker-flow-handle" />

      <div className="hacker-flow-node-meta">
        <span>{data.kind}</span>
        <b>{data.code}</b>
      </div>

      <strong className="hacker-flow-node-title">{data.title}</strong>
      <p>{data.short}</p>

      <div className="hacker-flow-node-footer">
        <span>{data.page}</span>
        {data.critical && <em>nodo crítico</em>}
      </div>

      <Handle type="source" position={Position.Right} className="hacker-flow-handle" />
    </div>
  )
}
