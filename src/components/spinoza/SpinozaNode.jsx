import { Handle, Position } from '@xyflow/react'

export default function SpinozaNode({ data, selected }) {
  return (
    <div
      className={[
        'spinoza-flow-node',
        `spinoza-flow-node--${data.nodeType}`,
        data.critical ? 'is-critical' : '',
        selected ? 'is-selected' : '',
        data.dimmed ? 'is-dimmed' : '',
        data.highlighted ? 'is-highlighted' : '',
      ].filter(Boolean).join(' ')}
    >
      <Handle type="target" position={Position.Left} className="spinoza-flow-handle" />
      <div className="spinoza-flow-node-meta">
        <span>{data.kind}</span>
        <b>{data.code}</b>
      </div>
      <strong className="spinoza-flow-node-title">{data.title}</strong>
      <p>{data.short}</p>
      <div className="spinoza-flow-node-footer">
        <span>PDF p. {data.page}</span>
        {data.critical && <em>nodo crítico</em>}
      </div>
      <Handle type="source" position={Position.Right} className="spinoza-flow-handle" />
    </div>
  )
}
