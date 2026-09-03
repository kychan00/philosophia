import { Link } from 'react-router'
import SubjectTasksPanel from '../components/SubjectTasksPanel'

const readings = [
  {
    number: 'I',
    author: 'Dagfinn Føllesdal',
    title: 'Filosofía analítica: ¿qué es y por qué uno debería involucrarse?',
    note: 'El surgimiento de la filosofía analítica · pp. 19–42',
  },
  {
    number: 'II',
    author: 'Peter M. S. Hacker',
    title: 'El surgimiento de la filosofía analítica del siglo XX',
    note: 'El surgimiento de la filosofía analítica · pp. 95–132',
  },
  {
    number: 'III',
    author: 'Hans-Johann Glock',
    title: 'Breve panorama histórico',
    note: '¿Qué es la filosofía analítica? · capítulo II · pp. 40–86',
  },
  {
    number: 'IV',
    author: 'P. F. Strawson',
    title: 'Sobre el referir',
    note: 'Ejemplo canónico de filosofía del lenguaje',
  },
  {
    number: 'V',
    author: 'W. V. O. Quine',
    title: 'Dos dogmas del empirismo',
    note: 'Desde un punto de vista lógico · capítulo II',
  },
  {
    number: 'VI',
    author: 'John Rawls',
    title: 'Justicia como equidad',
    note: 'Ejemplo de ética y filosofía política analítica',
  },
]

const stages = [
  ['01', 'Logicismo'],
  ['02', 'Giro lingüístico'],
  ['03', 'Positivismo lógico'],
  ['04', 'Lenguaje natural'],
]

const marks = [
  ['p', '11%', '8%'],
  ['∴', '20%', '84%'],
  ['⊢', '48%', '6%'],
  ['q', '60%', '87%'],
  ['↔', '79%', '9%'],
  ['∀x', '86%', '78%'],
]

export default function AnalyticPhilosophy() {
  return (
    <main className="analytic-page">
      <div className="analytic-paper" aria-hidden="true" />

      <div className="analytic-marks" aria-hidden="true">
        {marks.map(([char, top, left]) => (
          <span
            key={`${char}-${top}`}
            style={{ '--top': top, '--left': left }}
          >
            {char}
          </span>
        ))}
      </div>

      <nav className="analytic-nav">
        <Link to="/semestre/5">← Quinto semestre</Link>

        <Link to="/" className="analytic-brand">
          <span>Φ</span>
          Philosophia
        </Link>

        <span>FI264 · 2026-B</span>
      </nav>

      <header className="analytic-hero">
        <div className="analytic-formula" aria-hidden="true">
          p → q
        </div>

        <div className="analytic-hero-inner">
          <p className="analytic-kicker">
            Ratio · Analysis · Argumentum
          </p>

          <div className="analytic-seal">∴</div>

          <h1>
            Filosofía
            <em>Analítica</em>
          </h1>

          <p className="analytic-intro">
            Un curso sobre el problema de definir una tradición filosófica
            que no se deja reducir a una doctrina, un tema, una escuela
            ni un único método.
          </p>

          <div className="analytic-question">
            <span>Problema rector</span>
            <strong>
              ¿Qué es filosofía analítica y qué no es filosofía analítica?
            </strong>
          </div>
        </div>
      </header>

      <SubjectTasksPanel subjectCode="FI264" />

      <section className="analytic-classes">
        <div className="analytic-section-heading">
          <span>I</span>
          <div>
            <p>Archivum lectionum</p>
            <h2>Clases</h2>
          </div>
        </div>

        <Link
          to="/semestre/5/filosofia-analitica/clase/17-agosto"
          className="analytic-class-card"
        >
          <div className="analytic-date">
            <strong>XVII</strong>
            <span>VIII · MMXXVI</span>
          </div>

          <div className="analytic-class-copy">
            <span>Primera clase · Taxonomía</span>
            <h3>Clase del 17 de agosto</h3>
            <p>
              Mitos, filosofía analítica frente a filosofía continental,
              criterios de clasificación y el problema de la demarcación.
            </p>
          </div>

          <div className="analytic-enter">
            <span>Abrir análisis</span>
            <b>↗</b>
          </div>
        </Link>
      

        <Link
          to="/semestre/5/filosofia-analitica/clase/19-agosto"
          className="analytic-class-card"
        >
          <div className="analytic-date">
            <strong>XIX</strong>
            <span>VIII · MMXXVI</span>
          </div>

          <div className="analytic-class-copy">
            <span>Segunda clase · Análisis y lenguaje</span>
            <h3>Clase del 19 de agosto</h3>
            <p>
              Taxonomía filosófica, análisis lingüístico, etapas de la
              tradición, Waismann y formalización lógica.
            </p>
          </div>

          <div className="analytic-enter">
            <span>Abrir análisis</span>
            <b>↗</b>
          </div>
        </Link>
        <Link
          to="/semestre/5/filosofia-analitica/clase/24-agosto"
          className="analytic-class-card"
        >
          <div className="analytic-date">
            <strong>XXIV</strong>
            <span>VIII · MMXXVI</span>
          </div>

          <div className="analytic-class-copy">
            <span>Tercera clase · Frege, lenguaje y positivismo lógico</span>
            <h3>De la lógica al giro lingüístico</h3>
            <p>
              Logicismo, paradoja de Russell, sentido y referencia,
              Wittgenstein, positivismo lógico, verificacionismo y Popper.
            </p>
          </div>

          <div className="analytic-enter">
            <span>Abrir análisis</span>
            <b>↗</b>
          </div>
        </Link>
        <Link
          to="/semestre/5/filosofia-analitica/clase/31-agosto"
          className="analytic-class-card"
        >
          <div className="analytic-date">
            <strong>XXXI</strong>
            <span>VIII · MMXXVI</span>
          </div>
          <div className="analytic-class-copy">
            <span>Cuarta clase · Lenguaje, justificación y conocimiento</span>
            <h3>Wittgenstein contra Wittgenstein</h3>
            <p>
              Argumentación racional, equilibrio reflexivo, giro lingüístico,
              juegos de lenguaje, epistemología, intuición y retórica.
            </p>
          </div>
          <div className="analytic-enter">
            <span>Abrir análisis</span><b>↗</b>
          </div>
        </Link>
        <Link
          to="/semestre/5/filosofia-analitica/clase/2-septiembre"
          className="analytic-class-card"
        >
          <div className="analytic-date">
            <strong>II</strong>
            <span>IX · MMXXVI</span>
          </div>
          <div className="analytic-class-copy">
            <span>Quinta clase · Hermenéutica, positivismo y demarcación</span>
            <h3>¿Qué hace analítica a la filosofía analítica?</h3>
            <p>
              Ciencia unificada, Comte, positivismo lógico, realismo,
              dependencia teórica de las leyes, anacronismo y cuatro
              criterios provisionales de la tradición.
            </p>
          </div>
          <div className="analytic-enter">
            <span>Abrir análisis</span><b>↗</b>
          </div>
        </Link>
      </section>

      <section className="analytic-course-map">
        <div className="analytic-section-heading">
          <span>II</span>
          <div>
            <p>Ordo cursus</p>
            <h2>Cuatro etapas</h2>
          </div>
        </div>

        <div className="analytic-stages">
          {stages.map(([number, label]) => (
            <div key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="analytic-readings">
        <div className="analytic-section-heading">
          <span>III</span>
          <div>
            <p>Bibliotheca</p>
            <h2>Lecturas del curso</h2>
          </div>
        </div>

        <div className="analytic-reading-list">
          {readings.map((reading) => (
            <article key={reading.number}>
              <span>{reading.number}</span>
              <div>
                <p>{reading.author}</p>
                <h3>{reading.title}</h3>
                <small>{reading.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="analytic-evaluation">
        <div>
          <p>Evaluatio</p>
          <h2>Evaluación</h2>
          <span>
            El curso se acumula mediante reportes de lectura;
            no habrá examen ni trabajo final.
          </span>
        </div>

        <div className="analytic-eval-grid">
          <div>
            <strong>80%</strong>
            <span>Reportes de lectura</span>
          </div>
          <div>
            <strong>20%</strong>
            <span>Participación y asistencia</span>
          </div>
        </div>
      </section>

      <footer className="analytic-footer">
        <Link to="/semestre/5">← Quinto semestre</Link>
        <span>p &nbsp; ∴ &nbsp; q</span>
        <span>Analytica · MMXXVI</span>
      </footer>
    </main>
  )
}
