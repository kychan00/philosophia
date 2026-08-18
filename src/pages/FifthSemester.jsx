import { Link } from 'react-router'
import SubjectCard from '../components/SubjectCard'
import tasks from '../data/tasks'

const subjects = [
  {
    number: '01',
    title: 'Ontología II',
    subtitle: 'Problemas contemporáneos',
    code: 'FI190',
    days: 'Lunes · Miércoles',
    time: '11:30 – 12:55',
    room: 'FH-23',
    professor: 'José Alejandro Fuerte',
    route: '/semestre/5/ontologia-ii',
  },
  {
    number: '02',
    title: 'Métodos de Investigación',
    code: 'FI104',
    days: 'Lunes · Miércoles',
    time: '16:00 – 17:25',
    room: 'FH-24',
    professor: 'Marlon Omar Navarro Torres',
    route: '/semestre/5/metodos-de-investigacion',
  },
  {
    number: '03',
    title: 'Filosofía Analítica',
    code: 'FI264',
    days: 'Lunes · Miércoles',
    time: '19:00 – 20:25',
    room: 'FH-25',
    professor: 'Alonso Nava Amezcua',
    route: '/semestre/5/filosofia-analitica',
  },
  {
    number: '04',
    title: 'Teoría Crítica',
    code: 'FI265',
    days: 'Martes · Jueves',
    time: '16:00 – 17:25',
    room: 'FD 20',
    professor: 'Dinora Hernández López',
    route: '/semestre/5/teoria-critica',
  },
  {
    number: '05',
    title: 'Ética',
    subtitle: 'Escuelas clásicas',
    code: 'FI194',
    days: 'Martes · Jueves',
    time: '19:00 – 20:25',
    room: 'FH-7',
    professor: 'Aldo Carbajal Rodríguez',
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
  const pendingTasks = tasks.length

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

      <section className="semester-tasks-strip">
        <div className="semester-tasks-mark">
          III
        </div>

        <div className="semester-tasks-copy">
          <p>Agenda academica</p>

          <h2>Tablero de tareas</h2>

          <span>
            Tareas y entregas registradas desde cada clase,
            reunidas por fecha y materia.
          </span>
        </div>

        <div className="semester-tasks-status">
          <strong>{pendingTasks}</strong>
          <span>registradas</span>
        </div>

        <Link to="/tareas" className="semester-tasks-enter">
          Abrir tablero
          <span>↗</span>
        </Link>
      </section>

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
