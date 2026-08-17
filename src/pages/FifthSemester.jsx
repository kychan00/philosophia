import { Link } from 'react-router'
import SubjectCard from '../components/SubjectCard'

const subjects = [
  {
    number: '01',
    title: 'Ontología II',
    latin: 'De ente',
    active: true,
  },
  {
    number: '02',
    title: 'Ética',
    latin: 'De bono',
  },
  {
    number: '03',
    title: 'Estética',
    latin: 'De pulchro',
  },
  {
    number: '04',
    title: 'Filosofía Analítica',
    latin: 'De ratione',
  },
  {
    number: '05',
    title: 'Fundamentos de Matemáticas',
    latin: 'De numero',
  },
  {
    number: '06',
    title: 'Seminario de Newton',
    latin: 'De natura',
  },
]

const floatingMarks = [
  {
    char: 'Ω',
    top: '12%',
    left: '7%',
    delay: '-4s',
  },
  {
    char: 'λόγος',
    top: '22%',
    left: '78%',
    delay: '-11s',
  },
  {
    char: 'Α',
    top: '52%',
    left: '5%',
    delay: '-7s',
  },
  {
    char: 'οὐσία',
    top: '68%',
    left: '79%',
    delay: '-15s',
  },
  {
    char: '✦',
    top: '38%',
    left: '91%',
    delay: '-3s',
  },
  {
    char: 'Ψ',
    top: '84%',
    left: '12%',
    delay: '-12s',
  },
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

export default function FifthSemester() {
  return (
    <main className="fifth-page">
      <div
        className="fifth-paper-noise"
        aria-hidden="true"
      />

      <div
        className="fifth-dust"
        aria-hidden="true"
      >
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

      <div
        className="fifth-ghosts"
        aria-hidden="true"
      >
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

      <div
        className="fifth-frame"
        aria-hidden="true"
      >
        <span className="fifth-frame-corner fifth-frame-corner--tl">
          ❦
        </span>

        <span className="fifth-frame-corner fifth-frame-corner--tr">
          ❦
        </span>

        <span className="fifth-frame-corner fifth-frame-corner--bl">
          ❦
        </span>

        <span className="fifth-frame-corner fifth-frame-corner--br">
          ❦
        </span>
      </div>

      <nav className="fifth-nav">
        <Link
          to="/"
          className="fifth-back"
        >
          <span>←</span>
          <span>Volver al archivo</span>
        </Link>

        <Link
          to="/"
          className="fifth-brand"
        >
          <span className="fifth-brand-phi">
            Φ
          </span>

          <span>Philosophia</span>
        </Link>

        <span className="fifth-period">
          2026 · B
        </span>
      </nav>

      <header className="fifth-hero">
        <div
          className="fifth-roman-bg"
          aria-hidden="true"
        >
          V
        </div>

        <div
          className="fifth-halo"
          aria-hidden="true"
        />

        <div className="fifth-hero-inner">
          <p className="fifth-kicker">
            Licenciatura en Filosofía
          </p>

          <div className="fifth-small-ornament">
            <span />
            <b>❦</b>
            <span />
          </div>

          <span className="fifth-volume">
            Volumen V
          </span>

          <h1>
            Quinto
            <em>semestre</em>
          </h1>

          <div className="fifth-year">
            <span>MMXXVI</span>
            <b>✦</b>
            <span>2026 · B</span>
          </div>

          <p className="fifth-intro">
            Seleccione una materia para entrar en sus
            lecturas, notas, conceptos y problemas.
          </p>
        </div>
      </header>

      <section className="subjects-section">
        <div className="subjects-heading">
          <div className="subjects-heading-mark">
            II
          </div>

          <div>
            <p>Index disciplinarum</p>
            <h2>Materias</h2>
          </div>

          <div className="subjects-heading-decoration">
            ☙ ✦ ❧
          </div>
        </div>

        <div className="subjects-grid">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.number}
              {...subject}
            />
          ))}
        </div>
      </section>

      <footer className="fifth-footer">
        <Link to="/">
          ← Philosophia
        </Link>

        <span className="fifth-footer-ornament">
          ☙ &nbsp; Φ &nbsp; ❧
        </span>

        <span>
          Quintus · MMXXVI
        </span>
      </footer>
    </main>
  )
}
