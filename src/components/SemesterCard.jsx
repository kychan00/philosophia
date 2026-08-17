export default function SemesterCard({
  roman,
  title,
  period,
  active = false,
}) {
  return (
    <article
      className={`semester-card ${
        active ? 'semester-card--active' : ''
      }`}
    >
      <div className="semester-top">
        <span className="semester-roman">{roman}</span>

        <span className="semester-status">
          {active ? 'Actual' : 'Archivo'}
        </span>
      </div>

      <div className="semester-bottom">
        <p className="semester-title">{title}</p>

        {active ? (
          <>
            <span className="semester-period">{period}</span>

            <span className="semester-enter">
              Entrar
              <span>↗</span>
            </span>
          </>
        ) : (
          <span className="semester-muted">
            Próximamente
          </span>
        )}
      </div>
    </article>
  )
}
