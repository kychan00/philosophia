import { Link } from 'react-router'

function SemesterContent({
  roman,
  title,
  period,
  active,
}) {
  return (
    <>
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
    </>
  )
}

export default function SemesterCard({
  roman,
  title,
  period,
  active = false,
}) {
  if (active) {
    return (
      <Link
        to="/semestre/5"
        className="semester-card semester-card--active"
        aria-label="Entrar al Quinto semestre"
      >
        <SemesterContent
          roman={roman}
          title={title}
          period={period}
          active
        />
      </Link>
    )
  }

  return (
    <article className="semester-card">
      <SemesterContent
        roman={roman}
        title={title}
        period={period}
        active={false}
      />
    </article>
  )
}
