import { Handle, Position } from '@xyflow/react'

export default function HartmannChapterNode({ data, selected }) {
  return (
    <div
      className={[
        'hartmann2d-node',
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
      <Handle type="target" position={Position.Left} className="hartmann2d-handle" />

      {Number.isFinite(data.routeNumber) && (
        <div
          className="hartmann2d-route-badge"
          aria-label={'Nodo ' + data.routeNumber + ' de ' + data.routeTotal + ' en esta ruta'}
        >
          <strong>{String(data.routeNumber).padStart(2, '0')}</strong>
          <span>/ {data.routeTotal}</span>
        </div>
      )}

      <div className="hartmann2d-node-meta">
        <span>{data.phase}</span>
        {data.micro && <em>MICRO</em>}
        <b>{data.code}</b>
      </div>

      <strong className="hartmann2d-node-title">{data.title}</strong>
      <blockquote>{data.excerpt}</blockquote>

      {data.diagram?.length > 0 && (
        <div className="hartmann2d-node-diagram" aria-label="Resumen esquemático">
          {data.diagram.map((part, index) => (
            <span key={data.code + '-' + index + '-' + part}>{part}</span>
          ))}
        </div>
      )}

      <footer className="hartmann2d-node-footer">
        <div>
          <span>Hartmann · p. {data.page}</span>
          {data.explicitText && <em>texto explícito · Obsidian</em>}
          {data.explicitNotes?.length > 0 && (
            <em>{data.explicitNotes.length} notas de estudio</em>
          )}
        </div>
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
      </footer>

      <Handle type="source" position={Position.Right} className="hartmann2d-handle" />
    </div>
  )
}
