import { Link } from 'react-router'

export default function SubjectCard({
  number,
  title,
  subtitle,
  code,
  days,
  time,
  room,
  professor,
  route,
}) {
  const available = Boolean(route)

  const content = (
    <>
      <div className="subject-corner subject-corner--top">❦</div>
      <div className="subject-card-top">
        <span className="subject-number">{number}</span>
        <span className="subject-state">{available ? 'Disponible' : '2026 · B'}</span>
      </div>
      <div className="subject-sigil" aria-hidden="true">✦</div>
      <div className="subject-card-bottom">
        <span className="subject-latin">{code}</span>
        <h3>{title}</h3>
        {subtitle && <span className="subject-subtitle">{subtitle}</span>}
        <div className="subject-schedule">
          <div><span>Días</span><strong>{days}</strong></div>
          <div><span>Hora</span><strong>{time}</strong></div>
          <div><span>Aula</span><strong>{room}</strong></div>
        </div>
        <p className="subject-professor">{professor}</p>
        {available ? <span className="subject-action">Entrar <span>↗</span></span> : <span className="subject-soon">Próximamente</span>}
      </div>
      <div className="subject-corner subject-corner--bottom">❦</div>
    </>
  )

  if (available) {
    return <Link to={route} className="subject-card subject-card--active" aria-label={`Entrar a ${title}`}>{content}</Link>
  }

  return <article className="subject-card">{content}</article>
}
