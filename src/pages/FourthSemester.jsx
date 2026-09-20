import { Link } from 'react-router'

const floatingMarks = [
  { char: '⊢', top: '12%', left: '7%', delay: '-4s' },
  { char: 'λόγος', top: '22%', left: '78%', delay: '-11s' },
  { char: '¬', top: '52%', left: '5%', delay: '-7s' },
  { char: '∴', top: '68%', left: '79%', delay: '-15s' },
  { char: '∀', top: '38%', left: '91%', delay: '-3s' },
  { char: '↔', top: '84%', left: '12%', delay: '-12s' },
]

const dust = Array.from(
  { length: 42 },
  (_, index) => ({
    left: `${(index * 41 + 9) % 100}%`,
    top: `${(index * 53 + 13) % 100}%`,
    duration: `${19 + (index % 7) * 3}s`,
    delay: `${-(index % 17)}s`,
  }),
)

export default function FourthSemester() {
  return (
    <main className="fifth-page">
      <div className="fifth-paper-noise" aria-hidden="true" />

      <div className="fifth-dust" aria-hidden="true">
        {dust.map((particle, index) => (
          <span
            key={index}
            style={{
              '--x': particle.left,
              '--y': particle.top,
              '--duration': particle.duration,
              '--delay': particle.delay,
            }}
          />
        ))}
      </div>

      <div className="fifth-ghosts" aria-hidden="true">
        {floatingMarks.map((item, index) => (
          <span
            key={index}
            style={{
              '--top': item.top,
              '--left': item.left,
              '--delay': item.delay,
            }}
          >
            {item.char}
          </span>
        ))}
      </div>

      <div className="fifth-frame" aria-hidden="true">
        <span className="fifth-frame-corner fifth-frame-corner--tl">❦</span>
        <span className="fifth-frame-corner fifth-frame-corner--tr">❦</span>
        <span className="fifth-frame-corner fifth-frame-corner--bl">❦</span>
        <span className="fifth-frame-corner fifth-frame-corner--br">❦</span>
      </div>

      <nav className="fifth-nav">
        <Link to="/" className="fifth-back">
          <span>←</span>
          <span>Volver al archivo</span>
        </Link>

        <Link to="/" className="fifth-brand">
          <span className="fifth-brand-phi">Φ</span>
          <span>Philosophia</span>
        </Link>

        <span className="fifth-period">2026 · A</span>
      </nav>

      <header className="fifth-hero">
        <div className="fifth-roman-bg" aria-hidden="true">IV</div>
        <div className="fifth-halo" aria-hidden="true" />

        <div className="fifth-hero-inner">
          <p className="fifth-kicker">Licenciatura en Filosofía</p>

          <div className="fifth-small-ornament">
            <span />
            <b>❦</b>
            <span />
          </div>

          <span className="fifth-volume">Volumen IV</span>

          <h1>
            Cuarto
            <em>semestre</em>
          </h1>

          <div className="fifth-year">
            <span>MMXXVI</span>
            <b>✦</b>
            <span>2026 · A</span>
          </div>

          <p className="fifth-intro">
            Archivo retrospectivo del cuarto semestre. Filosofía de la lógica
            conserva veintitrés sesiones y su evaluación general del curso.
          </p>
        </div>
      </header>

      <section className="subjects-section">
        <div className="subjects-heading">
          <div className="subjects-heading-mark">I</div>

          <div>
            <p>Index disciplinarum</p>
            <h2>Materias</h2>
          </div>

          <div className="subjects-heading-decoration">☙ ✦ ❧</div>
        </div>

        <div className="subjects-grid">
          <Link
            to="/semestre/4/filosofia-de-la-logica"
            className="subject-card subject-card--active"
            aria-label="Entrar a Filosofía de la lógica"
          >
            <div className="subject-corner subject-corner--top">❦</div>

            <div className="subject-card-top">
              <span className="subject-number">01</span>
              <span className="subject-state">Disponible</span>
            </div>

            <div className="subject-sigil" aria-hidden="true">⊢</div>

            <div className="subject-card-bottom">
              <span className="subject-latin">LOGICA · IV</span>
              <h3>Filosofía de la lógica</h3>
              <span className="subject-subtitle">
                23 sesiones · evaluación registrada
              </span>

              <div className="subject-schedule">
                <div>
                  <span>Exámenes</span>
                  <strong>60%</strong>
                </div>
                <div>
                  <span>Participación</span>
                  <strong>10 pts</strong>
                </div>
                <div>
                  <span>Trabajo final</span>
                  <strong>Con examen final</strong>
                </div>
              </div>

              <p className="subject-professor">
                Cuarto semestre · 2026 A
              </p>

              <span className="subject-action">
                Entrar <span>↗</span>
              </span>
            </div>

            <div className="subject-corner subject-corner--bottom">❦</div>
          </Link>
        </div>
      </section>

      <footer className="fifth-footer">
        <Link to="/">← Philosophia</Link>
        <span className="fifth-footer-ornament">☙ &nbsp; Φ &nbsp; ❧</span>
        <span>Quartus · MMXXVI</span>
      </footer>
    </main>
  )
}
