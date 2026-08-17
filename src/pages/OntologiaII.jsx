import { Link } from 'react-router'

const dust = Array.from({ length: 38 }, (_, index) => ({
  left: `${(index * 43 + 5) % 100}%`,
  top: `${(index * 59 + 17) % 100}%`,
  duration: `${18 + (index % 7) * 3}s`,
  delay: `${-(index % 15)}s`,
}))

export default function OntologiaII() {
  return (
    <main className="ontology-page">
      <div className="ontology-dust" aria-hidden="true">
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

      <div className="ontology-frame" aria-hidden="true">
        <span>❦</span>
        <span>❦</span>
        <span>❦</span>
        <span>❦</span>
      </div>

      <nav className="ontology-nav">
        <Link to="/semestre/5" className="ontology-back">
          ← Quinto semestre
        </Link>

        <Link to="/" className="ontology-brand">
          <span>Φ</span>
          Philosophia
        </Link>

        <span className="ontology-course-code">
          Ontología II
        </span>
      </nav>

      <header className="ontology-hero">
        <div className="ontology-sun" aria-hidden="true" />
        <div className="ontology-ring ontology-ring--one" aria-hidden="true" />
        <div className="ontology-ring ontology-ring--two" aria-hidden="true" />

        <div className="ontology-ghost" aria-hidden="true">
          τὸ ὄν
        </div>

        <div className="ontology-hero-inner">
          <p className="ontology-kicker">
            Volumen V · Ontología II
          </p>

          <div className="ontology-medallion" aria-hidden="true">
            ὄν
          </div>

          <h1>Ontología <em>II</em></h1>

          <p className="ontology-greek">
            τὸ ὄν · οὐσία · ἀλήθεια
          </p>

          <div className="ontology-divider">
            <span />
            <b>❦</b>
            <span />
          </div>

          <p className="ontology-intro">
            Archivo de clases, problemas, conceptos y lecturas
            sobre aquello que es, aquello que existe y la
            estructura de la realidad.
          </p>
        </div>
      </header>

      <section className="ontology-classes">
        <div className="ontology-section-heading">
          <span className="ontology-section-number">I</span>

          <div>
            <p>Archivum lectionum</p>
            <h2>Clases</h2>
          </div>
        </div>

        <Link
          to="/semestre/5/ontologia-ii/clase/17-agosto"
          className="ontology-class-card"
        >
          <div className="ontology-class-date">
            <span>XVII</span>
            <small>VIII · MMXXVI</small>
          </div>

          <div className="ontology-class-main">
            <span className="ontology-class-label">
              Primera clase
            </span>

            <h3>Clase del 17 de agosto</h3>

            <p>
              Del principio de no contradicción a las preguntas
              fundamentales de la ontología moderna.
            </p>
          </div>

          <div className="ontology-class-enter">
            <span>Leer clase</span>
            <b>↗</b>
          </div>
        </Link>
      </section>

      <footer className="ontology-footer">
        <Link to="/semestre/5">← Quinto semestre</Link>
        <span>☙ &nbsp; τὸ ὄν &nbsp; ❧</span>
        <span>Ontología II · MMXXVI</span>
      </footer>
    </main>
  )
}
