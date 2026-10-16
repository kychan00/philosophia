import { Handle, Position } from '@xyflow/react'

const PHASE_TONES = Object.freeze({
  'Introducción editorial': 'bronze',
  'Método ontológico': 'moss',
  'Economía política': 'gold',
  'Historicidad I': 'blue',
  'Historicidad II': 'plum',
})

export default function LukacsOntologyNode({ data, selected }) {
  const topicTone = PHASE_TONES[data.phase] || 'moss'
  return (
    <div
      data-topic-tone={topicTone}
      style={{ '--ph2d-node-accent': `var(--ph2d-topic-${topicTone})` }}
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
        <div className="marx-route-sequence-badge" aria-label={`Nodo ${data.routeNumber} de ${data.routeTotal} en esta ruta`}>
          <strong>{String(data.routeNumber).padStart(2,'0')}</strong>
          <span>/ {data.routeTotal}</span>
        </div>
      )}
      <div className="marx-flow-meta">
        <span>{data.phase}</span>
        {data.micro && <em>DETALLE</em>}
        <b>{data.code}</b>
      </div>
      <strong className="marx-flow-title nodrag nopan nowheel" tabIndex={0}>{data.title}</strong>
      <p className="lukacs-node-summary nodrag nopan nowheel" tabIndex={0}>
        <b>SÍNTESIS</b> {data.excerpt}
      </p>
      <section className="lukacs-node-reading" aria-label="Control documental del nodo">
        <span>NOTA DE LECTURA · {data.sourceRef}</span>
        <p className="nodrag nopan nowheel" tabIndex={0}>{data.sourcePassage}</p>
        <small>{data.sourceAttribution}</small>
      </section>
      {data.diagram?.length > 0 && (
        <div className="marx-node-diagram nodrag nopan nowheel" tabIndex={0} aria-label="Esquema editorial del nodo">
          {data.diagram.map((part,index)=><span key={`${data.code}-${index}-${part}`}>{part}</span>)}
        </div>
      )}
      <div className="marx-flow-footer">
        <span>Akal 2007 · p. {data.page}</span>
        <button type="button" className="nodrag nopan" onClick={(event)=>{event.stopPropagation();data.onOpenFolio?.()}}>
          abrir folio ↗
        </button>
      </div>
      <Handle type="source" position={Position.Right} className="marx-flow-handle" />
    </div>
  )
}
