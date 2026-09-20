import { Link } from 'react-router'
import PhilosophyLogicClassCard from '../components/PhilosophyLogicClassCard'
const marks = [
  ['⊢', '11%', '8%'],
  ['¬', '20%', '84%'],
  ['∴', '48%', '6%'],
  ['∀x', '60%', '87%'],
  ['↔', '79%', '9%'],
  ['□', '86%', '78%'],
]

export default function PhilosophyLogic() {
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
        <Link to="/semestre/4">← Cuarto semestre</Link>

        <Link to="/" className="analytic-brand">
          <span>Φ</span>
          Philosophia
        </Link>

        <span>IV · 2026-A</span>
      </nav>

      <header className="analytic-hero">
        <div className="analytic-formula" aria-hidden="true">
          ⊢ φ
        </div>

        <div className="analytic-hero-inner">
          <p className="analytic-kicker">
            Logica · Forma · Consequentia
          </p>

          <div className="analytic-seal">⊢</div>

          <h1>
            Filosofía de
            <em>la lógica</em>
          </h1>

          <p className="analytic-intro">
            Archivo del curso de cuarto semestre. Las veintitrés sesiones se
            conservarán como páginas independientes, con sus conceptos,
            problemas filosóficos, lecturas y tareas cuando correspondan.
          </p>

          <div
            className="analytic-question logic-evaluation"
            data-logic-evaluation-summary
          >
            <span>Evaluación del curso</span>
            <strong>
              Exámenes 60% · participación y asistencia 10 pts
            </strong>

            <div className="logic-evaluation-grid">
              <div>
                <span>Examen I</span>
                <b>30%</b>
              </div>
              <div>
                <span>Examen II</span>
                <b>30%</b>
              </div>
              <div>
                <span>Participación / asistencia</span>
                <b>10 pts</b>
              </div>
              <div>
                <span>Trabajo final</span>
                <b>Entrega con el final</b>
                <small>Peso no indicado en la sesión</small>
              </div>
            </div>
          </div>
        </div>
      </header>

            <section
        className="logic-class-archive"
        data-philosophy-logic-class-archive
      >
        <div className="logic-class-archive__heading">
          <span>I</span>
          <div>
            <p>Archivum lectionum</p>
            <h2>Clases</h2>
          </div>
        </div>

        <div className="logic-class-archive__list">
          <PhilosophyLogicClassCard
            number="01"
            date="19 · I · 2026"
            eyebrow="Primera sesión · Lógica III"
            title="Introducción, demarcación y verdad lógica"
            description="Qué significa hacer filosofía de la lógica, qué distingue a un sistema lógico de un sistema meramente formal, de dónde podría provenir la necesidad y por qué la verdad lógica plantea un problema filosófico."
            tags={[
              'demarcación',
              'validez',
              'necesidad',
              'verdad',
              'pluralidad lógica',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/19-enero"
          />

          <PhilosophyLogicClassCard
            number="02"
            date="21 · I · 2026"
            eyebrow="Segunda sesión · Lógica III"
            title="Lógica moderna, metalógica y lógicas no clásicas"
            description="1879 como punto de quiebre, niveles de sistemas formales, sintaxis, semántica y metalógica, propiedades de los sistemas, pluralidad de lógicas y el problema filosófico de los valores de verdad."
            tags={[
              'Frege · 1879',
              'sistemas',
              'metalógica',
              'lógicas no clásicas',
              'valores de verdad',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/21-enero"
          />
        </div>
      </section>

      <section className="analytic-course-map">
        <div className="analytic-section-heading">
          <span>II</span>
          <div>
            <p>Ordo archivii</p>
            <h2>Estructura preparada</h2>
          </div>
        </div>

        <div className="analytic-stages">
          <div><span>01</span><strong>Menú</strong></div>
          <div><span>02</span><strong>Clases</strong></div>
          <div><span>03</span><strong>Conceptos</strong></div>
          <div><span>04</span><strong>Repaso</strong></div>
        </div>
      </section>

      <footer className="analytic-footer">
        <Link to="/semestre/4">← Cuarto semestre</Link>
        <span>⊢ &nbsp; Φ &nbsp; ∴</span>
        <span>Logica · MMXXVI</span>
      </footer>
    
      

</main>
  )
}
