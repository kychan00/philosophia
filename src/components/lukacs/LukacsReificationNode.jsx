import { Handle, Position } from '@xyflow/react'
import './LukacsReificationNode.css'

export default function LukacsReificationNode({ data, selected }) {
  return (
    <div
      className={[
        'marx-flow-node',
        'lukacs-flow-node',
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

      <strong className="marx-flow-title nodrag nopan nowheel" tabIndex={0}>{data.title}</strong>
      <p className="lukacs-node-summary nodrag nopan nowheel" tabIndex={0}><b>SÍNTESIS</b> {data.excerpt}</p>

      {data.sourcePassage && (
        <section className="lukacs-node-reading" aria-label="Pasaje directo de la lectura">
          <span>EN EL TEXTO · PDF P. {data.sourcePdfPage}</span>
          <blockquote className="nodrag nopan nowheel" tabIndex={0}>{data.sourcePassage}</blockquote>
          <small>Deslice para continuar · folio para lectura amplia</small>
        </section>
      )}

      {data.diagram?.length > 0 && (
        <div className="marx-node-diagram nodrag nopan nowheel" tabIndex={0} aria-label="Esquema del nodo">
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
