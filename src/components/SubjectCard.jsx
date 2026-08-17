import { Link } from 'react-router'

export default function SubjectCard({
  number,
  title,
  latin,
  active = false,
}) {
  const content = (
    <>
      <div className="subject-corner subject-corner--top">
        ❦
      </div>

      <div className="subject-card-top">
        <span className="subject-number">{number}</span>

        <span className="subject-state">
          {active ? 'Primera materia' : 'Archivo'}
        </span>
      </div>

      <div className="subject-sigil" aria-hidden="true">
        ✦
      </div>

      <div className="subject-card-bottom">
        <span className="subject-latin">{latin}</span>

        <h3>{title}</h3>

        {active ? (
          <span className="subject-action">
            Entrar
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
    </>
  )

  if (active) {
    return (
      <Link
        to="/semestre/5/ontologia-ii"
        className="subject-card subject-card--active"
        aria-label="Entrar a Ontología II"
      >
        {content}
      </Link>
    )
  }

  return (
    <article className="subject-card">
      {content}
    </article>
  )
}
