import { Link } from 'react-router'
import './PhilosophyLogicClassCard.css'

export default function PhilosophyLogicClassCard({
  number,
  date,
  eyebrow,
  title,
  description,
  tags = [],
  to,
  action = 'Abrir clase',
}) {
  return (
    <Link className="plcc-card" to={to}>
      <div className="plcc-card__ordinal" aria-hidden="true">
        <span>{number}</span>
        <small>{date}</small>
      </div>

      <div className="plcc-card__copy">
        <p className="plcc-card__eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p>{description}</p>

        {tags.length > 0 && (
          <div className="plcc-card__signals" aria-label="Temas principales">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className="plcc-card__open">
        <span>{action}</span>
        <b aria-hidden="true">↗</b>
      </div>
    </Link>
  )
}
