export default function SubjectCard({
  number,
  title,
  latin,
  active = false,
}) {
  return (
    <article
      className={`subject-card ${
        active ? 'subject-card--active' : ''
      }`}
    >
      <div className="subject-corner subject-corner--top">
        ❦
      </div>

      <div className="subject-card-top">
        <span className="subject-number">
          {number}
        </span>

        <span className="subject-state">
          {active ? 'Primera materia' : 'Archivo'}
        </span>
      </div>

      <div
        className="subject-sigil"
        aria-hidden="true"
      >
        ✦
      </div>

      <div className="subject-card-bottom">
        <span className="subject-latin">
          {latin}
        </span>

        <h3>{title}</h3>

        {active ? (
          <span className="subject-action">
            Próxima fase
            <span>↗</span>
          </span>
        ) : (
          <span className="subject-soon">
            Próximamente
          </span>
        )}
      </div>

      <div className="subject-corner subject-corner--bottom">
        ❦
      </div>
    </article>
  )
}
