import { Link } from 'react-router'

const marks = [
  ['§', '10%', '8%', '-4s'],
  ['Quaestio', '18%', '78%', '-10s'],
  ['∴', '48%', '6%', '-7s'],
  ['Methodus', '62%', '80%', '-14s'],
  ['↳', '78%', '10%', '-3s'],
  ['Fontes', '86%', '72%', '-9s'],
]

const dust = Array.from({ length: 44 }, (_, index) => ({
  left: `${(index * 47 + 11) % 100}%`,
  top: `${(index * 61 + 7) % 100}%`,
  duration: `${20 + (index % 8) * 3}s`,
  delay: `${-(index % 16)}s`,
}))

export default function MethodsResearch() {
  return (
    <main className="methods-page">
      <div className="methods-grid-paper" aria-hidden="true" />

      <div className="methods-dust" aria-hidden="true">
        {dust.map((item, index) => (
          <span
            key={index}
            style={{
              '--x': item.left,
              '--y': item.top,
              '--duration': item.duration,
              '--delay': item.delay,
            }}
          />
        ))}
      </div>

      <div className="methods-marks" aria-hidden="true">
        {marks.map(([char, top, left, delay]) => (
          <span
            key={char}
            style={{ '--top': top, '--left': left, '--delay': delay }}
          >
            {char}
          </span>
        ))}
      </div>

      <div className="methods-frame" aria-hidden="true">
        <i>✣</i><i>✣</i><i>✣</i><i>✣</i>
      </div>

      <nav className="methods-nav">
        <Link to="/semestre/5">← Quinto semestre</Link>
        <Link to="/" className="methods-brand">Φ · Philosophia</Link>
        <span>FI104 · 2026-B</span>
      </nav>

      <header className="methods-hero">
        <div className="methods-compass" aria-hidden="true"><span>Q</span></div>

        <div className="methods-hero-inner">
          <p className="methods-kicker">Ars inquirendi · Volumen V</p>
          <div className="methods-seal">§</div>

          <h1>Métodos de<em>Investigación Filosófica</em></h1>

          <div className="methods-sequence" aria-label="Proceso de investigación">
            <span>Quaestio</span><b>→</b>
            <span>Fontes</span><b>→</b>
            <span>Methodus</span><b>→</b>
            <span>Argumentum</span><b>→</b>
            <span>Protocollum</span>
          </div>

          <p className="methods-intro">
            Herramientas para convertir una inquietud filosófica en una
            investigación académica estructurada, argumentada y situada
            dentro de una conversación intelectual.
          </p>
        </div>
      </header>

      <section className="methods-classes">
        <div className="methods-section-heading">
          <span>I</span>
          <div><p>Archivum lectionum</p><h2>Clases</h2></div>
        </div>

        <Link to="/semestre/5/metodos-de-investigacion/clase/17-agosto" className="methods-class-card">
          <div className="methods-date"><strong>XVII</strong><span>VIII · MMXXVI</span></div>
          <div className="methods-class-copy">
            <span>Primera clase · Encuadre</span>
            <h3>Clase del 17 de agosto</h3>
            <p>Estado del arte, protocolo, lectura académica, método, programa de la materia y criterios de evaluación.</p>
          </div>
          <div className="methods-enter"><span>Abrir folio</span><b>↗</b></div>
        </Link>
      

        <Link
          to="/semestre/5/metodos-de-investigacion/clase/19-agosto"
          className="methods-class-card"
        >
          <div className="methods-date">
            <strong>XIX</strong>
            <span>VIII · MMXXVI</span>
          </div>

          <div className="methods-class-copy">
            <span>Segunda clase · Investigación filosófica</span>
            <h3>Del objeto al conocimiento comunicable</h3>
            <p>
              Piaget, Zubiri, Molyneux, la espiral de la investigación,
              Fernando Leal, teoría y experiencia, y Bacon.
            </p>
          </div>

          <div className="methods-enter">
            <span>Abrir folio</span>
            <b>↗</b>
          </div>
        </Link>
        <Link
          to="/semestre/5/metodos-de-investigacion/clase/24-agosto"
          className="methods-class-card"
        >
          <div className="methods-date">
            <strong>XXIV</strong>
            <span>VIII · MMXXVI</span>
          </div>

          <div className="methods-class-copy">
            <span>Tercera clase · Conocimiento y estado del arte</span>
            <h3>Del pensamiento justificable al estado de la cuestión</h3>
            <p>
              Pensar y pensamiento, lógica, lectura filosófica, escritura,
              objetividad, revisión, formación, bases de datos y construcción
              del estado del arte.
            </p>
          </div>

          <div className="methods-enter">
            <span>Abrir folio</span>
            <b>↗</b>
          </div>
        </Link>
      </section>

      <footer className="methods-footer">
        <Link to="/semestre/5">← Quinto semestre</Link>
        <span>☙ &nbsp; § &nbsp; ❧</span>
        <span>Métodos · MMXXVI</span>
      </footer>
    </main>
  )
}
