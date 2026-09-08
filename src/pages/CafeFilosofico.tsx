import { Link } from 'react-router'
import { cafeEvents } from '../data/cafeFilosoficoEvents'
import './CafeFilosofico.css'

const monthCells = [
  { day: 31, muted: true },
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7, event: true },
  { day: 8 },
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15 },
  { day: 16 },
  { day: 17 },
  { day: 18 },
  { day: 19 },
  { day: 20 },
  { day: 21 },
  { day: 22 },
  { day: 23 },
  { day: 24 },
  { day: 25 },
  { day: 26 },
  { day: 27 },
  { day: 28 },
  { day: 29 },
  { day: 30 },
  { day: 1, muted: true },
  { day: 2, muted: true },
  { day: 3, muted: true },
  { day: 4, muted: true },
]

const week = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

export default function CafeFilosofico() {
  const featured = cafeEvents[0]

  return (
    <main className="cafe-hub">
      <header className="cafe-hub-masthead">
        <Link to="/" className="cafe-hub-back">
          ← Philosophia
        </Link>

        <div className="cafe-hub-kicker">
          <span>DIÁLOGO</span>
          <span>ARGUMENTOS</span>
          <span>COMUNIDAD</span>
        </div>

        <h1>Café Filosófico</h1>
        <p>Un archivo de conversaciones que permanecen abiertas.</p>
      </header>

      <div className="cafe-hub-rule" />

      <section className="cafe-hub-grid">
        <article className="cafe-hub-feature">
          <div className="cafe-hub-issue">
            <span>EDICIÓN 01</span>
            <span>07 · IX · 2026</span>
          </div>

          <p className="cafe-hub-label">ÚLTIMO ENCUENTRO</p>
          <h2>{featured.title}</h2>
          <p>{featured.deck}</p>

          <Link to={featured.route} className="cafe-hub-open">
            Abrir edición <span>↗</span>
          </Link>

          <div className="cafe-hub-themes">
            {featured.themes.map((theme) => (
              <span key={theme}>{theme}</span>
            ))}
          </div>
        </article>

        <aside className="cafe-calendar">
          <div className="cafe-calendar-head">
            <div>
              <span>CALENDARIO</span>
              <h2>Septiembre</h2>
            </div>
            <strong>2026</strong>
          </div>

          <div className="cafe-calendar-week">
            {week.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="cafe-calendar-days">
            {monthCells.map((cell, index) => (
              <div
                key={`${cell.day}-${index}`}
                className={[
                  'cafe-calendar-cell',
                  cell.muted ? 'is-muted' : '',
                  cell.event ? 'has-event' : '',
                ].join(' ')}
              >
                <span>{cell.day}</span>
                {cell.event && <i>CAFÉ</i>}
              </div>
            ))}
          </div>

          <div className="cafe-calendar-note">
            <span className="cafe-calendar-dot" />
            <p>
              <strong>7 SEP</strong>
              <br />
              Fin del mundo / fin del capitalismo
            </p>
          </div>
        </aside>
      </section>

      <footer className="cafe-hub-footer">
        <span>PHILOSOPHIA · CAFÉ FILOSÓFICO</span>
        <span>GUADALAJARA · MMXXVI</span>
      </footer>
    </main>
  )
}
