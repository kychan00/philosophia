/**
 * Structural folio primitives for Filosofía Analítica.
 * Deliberately content-agnostic: pages retain their own dates, sources and arguments.
 */
export function AnalyticEditorialHeading({ n, eyebrow, children, className = '' }) {
  return (
    <div className={`ac9-heading analytic-editorial-heading ${className}`.trim()}>
      <span aria-hidden="true">{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export function AnalyticEditorialIndex({
  sections,
  onNavigate,
  heading = 'Índice de la clase',
  className = '',
  children,
}) {
  return (
    <aside
      className={`ac9-index analytic-editorial-index ${className}`.trim()}
      aria-label="Índice de esta clase"
    >
      <p>{heading}</p>
      {sections.map(([number, id, label]) => (
        <button type="button" key={id} onClick={() => onNavigate(id)}>
          <span aria-hidden="true">{number}</span>
          {label}
        </button>
      ))}
      {children}
    </aside>
  )
}
