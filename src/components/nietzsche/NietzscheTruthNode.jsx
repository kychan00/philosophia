import { Handle, Position } from '@xyflow/react'

export default function NietzscheTruthNode({ data, selected }) {
  const tone = data.topicTone || 'moss'

  return (
    <article
      className={[
        'nt2d-node',
        selected ? 'is-selected' : '',
        data.dimmed ? 'is-dimmed' : '',
        data.guidedCurrent ? 'is-guided-current' : '',
        data.guidedNext ? 'is-guided-next' : '',
        data.routeActive ? 'is-route-active' : '',
      ].filter(Boolean).join(' ')}
      data-topic-tone={tone}
      style={{ '--ph2d-node-accent': `var(--ph2d-topic-${tone})` }}
    >
      <Handle type="target" position={Position.Left} className="nt2d-handle" />

      {Number.isFinite(data.routeNumber) && (
        <div className="nt2d-route-badge" aria-label={`Nodo ${data.routeNumber} de ${data.routeTotal}`}>
          <strong>{String(data.routeNumber).padStart(2, '0')}</strong>
          <span>/ {data.routeTotal}</span>
        </div>
      )}

      <header className="nt2d-node-meta">
        <span>{data.phase}</span>
        <b>{data.code}</b>
      </header>

      <strong className="nt2d-node-title">{data.title}</strong>

      <section className="nt2d-node-source">
        <span>TEXTO ORIGINAL · CITA BREVE</span>
        <blockquote>“{data.excerpt}”</blockquote>
        <small>{data.apaShort}</small>
      </section>

      <p className="nt2d-node-explanation">{data.shortExplanation}</p>

      <footer className="nt2d-node-footer">
        <span>{data.sourceRef}</span>
        <button
          type="button"
          className="nodrag nopan"
          onClick={(event) => {
            event.stopPropagation()
            data.onOpenFolio?.()
          }}
        >
          Abrir folio ↗
        </button>
      </footer>

      <Handle type="source" position={Position.Right} className="nt2d-handle" />
    </article>
  )
}
