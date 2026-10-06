import { Handle, Position } from '@xyflow/react'

export default function LukacsReificationNode({ data, selected }) {
  return (
    <div
      className={[
        'marx-flow-node',
        data.critical ? 'is-critical' : '',
        data.micro ? 'is-micro' : '',
        selected ? 'is-selected' : '',
        data.highlighted ? 'is-highlighted' : '',
        data.dimmed ? 'is-dimmed' : '',
        data.guidedCurrent ? 'is-guided-current' : '',
        data.guidedNext ? 'is-guided-next' : '',
        data.routeActive ? 'is-route-active' : '',
      ].filter(Boolean).join(' ')}
    >
      <Handle type="target" position={Position.Left} className="marx-flow-handle" />

      {Number.isFinite(data.routeNumber) && (
        <div
          className="marx-route-sequence-badge"
          aria-label={`Nodo ${data.routeNumber} de ${data.routeTotal} en esta ruta`}
          title={`Orden de lectura · ${data.routeNumber} / ${data.routeTotal}`}
        >
          <strong>{String(data.routeNumber).padStart(2, '0')}</strong>
          <span>/ {data.routeTotal}</span>
        </div>
      )}

      <div className="marx-flow-meta">
        <span>{data.phase}</span>
        <b>{data.code}</b>
      </div>

      <strong className="marx-flow-title">{data.title}</strong>
      <blockquote>{data.excerpt}</blockquote>

      {data.diagram?.length > 0 && (
        <div className="marx-node-diagram" aria-label="Esquema del nodo">
          {data.diagram.map((part, index) => (
            <span key={`${data.code}-${index}-${part}`}>{part}</span>
          ))}
        </div>
      )}

      <div className="marx-flow-footer">
        <span>Lukács · p. {data.page}</span>
        <button
          type="button"
          className="nodrag nopan"
          onClick={(event) => {
            event.stopPropagation()
            data.onOpenFolio?.()
          }}
        >
          abrir folio ↗
        </button>
      </div>

      <Handle type="source" position={Position.Right} className="marx-flow-handle" />
    </div>
  )
}
