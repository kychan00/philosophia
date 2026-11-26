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
      <div className="glock-flow-node-badges">
        {data.classSeen && <span className="glock-class-chip">VISTO EN CLASE</span>}
        {data.conceptNumber && <span className="glock-concept-number" aria-label={`Número de concepto ${data.conceptNumber}`}>{data.conceptNumber}</span>}
      </div>

      <Handle type="target" position={Position.Left} className="glock-flow-handle" />

      <div className="glock-flow-node-meta">
        <span>{data.kind}</span>
        <b>{data.code}</b>
      </div>

      <strong className="glock-flow-node-title">{data.title}</strong>
      <section className="glock-node-plain" aria-label="En pocas palabras y entendible:">
        <span>En pocas palabras y entendible:</span>
        <p>{data.plainLanguage.plain}</p>
      </section>

      <section className="glock-node-source-card" aria-label="Texto explícito del nodo">
        <span>{data.sourceMode === 'paraphrase' ? 'PARÁFRASIS COTEJADA' : 'TEXTO EXPLÍCITO'} · {data.page}</span>
        <blockquote>{data.sourcePassage}</blockquote>
        <small className="glock-source-preview-note">Vista previa · Pasaje completo en el inspector.</small>
      </section>

      <ol className="glock-node-mini-schema" aria-label="Esquema breve del nodo, en orden de lectura">
        {data.diagram.map((part, index) => (
          <li key={`${data.code}-diagram-${index}`}>
            <span aria-hidden="true" className="glock-schema-step">{index + 1}</span>
            <b>{part}</b>
          </li>
        ))}
      </ol>

      <div className="glock-flow-node-footer">
        <span>{data.page}</span>
        <em>fuente documentada</em>
      </div>

      <Handle type="source" position={Position.Right} className="glock-flow-handle" />
    </article>
  )
}
