import { Link } from 'react-router'

function SemesterContent({
  roman,
  title,
  period,
  status,
  available,
}) {
  return (
    <>
      <div className="semester-top">
        <span className="semester-roman">{roman}</span>

        <span className="semester-status">
          {status}
        </span>
      </div>

      <div className="semester-bottom">
        <p className="semester-title">{title}</p>

        {available ? (
          <>
            {period && (
              <span className="semester-period">{period}</span>
            )}

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
  route,
}) {
  const available = Boolean(route)
  const status = active ? 'Actual' : 'Archivo'

  if (available) {
    return (
      <Link
        to={route}
        className="semester-card semester-card--active"
        aria-label={`Entrar a ${title}`}
      >
        <SemesterContent
          roman={roman}
          title={title}
          period={period}
          status={status}
          available
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
        status={status}
        available={false}
      />
    </article>
  )
}
