import { Link } from 'react-router'

const phases = [
  {
    n: 'I',
    title: 'Lectura',
    subtitle: 'Descubrir el problema en los textos',
    detail:
      'Discurso de metafísica primero; Monadología después. La lectura abre las preguntas que los mapas organizarán.',
    route: 'Discurso §§1–37 → Monadología §§1–90',
  },
  {
    n: 'II',
    title: 'Mapas 2D',
    subtitle: 'Reconstruir conexiones',
    detail:
      'Seis mapas problemáticos, conectores explicados y navegación transversal entre conceptos.',
    route: 'mundo → individuo → mónada → interior → perspectivas → armonía',
  },
  {
    n: 'III',
    title: 'Studium',
    subtitle: 'Comprobar que puede explicarlo',
    detail:
      'Recorrido guiado, síntesis por bloques y autoevaluación relacional con recuperación desde los mapas.',
    route: 'explicar → evaluar → volver → consolidar',
  },
  {
    n: 'IV',
    title: 'Retorno al texto',
    subtitle: 'Verificar la reconstrucción',
    detail:
      'El objetivo final no es la interfaz: es volver al Discurso y a la Monadología con una arquitectura ya comprendida.',
    route: 'concepto → § → argumento → sistema',
  },
]

export default function LeibnizTaskHub() {
  return (
    <main className="leibniz-hub-page leibniz-polish-page">
      <nav className="leibniz-hub-nav">
        <Link to="/tareas">← Tareas</Link>
        <Link to="/" className="leibniz-hub-brand">Φ · Philosophia</Link>
        <span>FI190 · Ontología II</span>
      </nav>

      <header className="leibniz-hub-hero leibniz-polish-hero">
        <div className="leibniz-polish-watermark" aria-hidden="true">
          MONAS · RATIO · HARMONIA
        </div>

        <figure className="ph-book-cover ph-book-cover-leibniz">
          <img
            src="/philosophia/images/books/leibniz-escritos-filosoficos.jpg"
            alt="Portada de Escritos filosóficos, de Gottfried Wilhelm Leibniz"
          />
          <figcaption>
            <span>G. W. LEIBNIZ</span>
            <strong>Escritos filosóficos</strong>
            <small>Machado Libros · Mínimo Tránsito</small>
          </figcaption>
        </figure>

        <p>Lectura para el 26 de agosto · Gottfried Wilhelm Leibniz</p>
        <h1>
          Discurso de metafísica
          <em>+ Monadología</em>
        </h1>

        <p className="leibniz-hub-lead">
          Esta tarea está construida como un recorrido de comprensión:
          primero el problema, después sus conexiones, luego la síntesis y al
          final el regreso a los textos.
        </p>

        <blockquote>
          ¿Cómo puede existir una pluralidad de sustancias autónomas y, sin
          embargo, un universo perfectamente ordenado?
        </blockquote>

        <div className="leibniz-polish-route">
          <span>LECTURA</span><b>→</b>
          <span>MAPAS 2D</span><b>→</b>
          <span>STUDIUM</span><b>→</b>
          <span>TEXTO</span>
        </div>

        <div className="leibniz-hub-actions">
          <Link
            className="primary"
            to="/tareas/ontologia-ii/leibniz-discurso-monadologia/mapas"
          >
            Continuar con los mapas 2D →
          </Link>

          <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia/studium">
            Abrir Studium
          </Link>
        </div>
      </header>

      <section className="leibniz-hub-section">
        <div className="leibniz-hub-heading">
          <span>01</span>
          <div>
            <p>Architectura</p>
            <h2>Una sola tarea, cuatro capas</h2>
          </div>
        </div>

        <div className="leibniz-polish-phases">
          {phases.map((phase, index) => (
            <article key={phase.n}>
              <span>{phase.n}</span>
              <div>
                <small>{phase.subtitle}</small>
                <h3>{phase.title}</h3>
                <p>{phase.detail}</p>
                <div>{phase.route}</div>
              </div>
              {index < phases.length - 1 && <b>↓</b>}
            </article>
          ))}
        </div>
      </section>

      <section className="leibniz-hub-section">
        <div className="leibniz-hub-heading">
          <span>02</span>
          <div>
            <p>Lectio</p>
            <h2>Qué obtiene de cada texto</h2>
          </div>
        </div>

        <div className="leibniz-polish-books">
          <article>
            <span>PRIMERA FORMULACIÓN</span>
            <h3>Discurso de metafísica</h3>
            <strong>PDF pp. 27–51 · §§1–37</strong>
            <p>
              Aquí se construye el problema: Dios y el mundo, sustancia
              individual, noción completa, contingencia, fuerza, alma y orden moral.
            </p>
            <div>
              <b>Centro de gravedad:</b>
              <span>§§8–16 · sustancia individual, noción completa, contingencia.</span>
            </div>
          </article>

          <article>
            <span>FORMULACIÓN MADURA</span>
            <h3>Monadología</h3>
            <strong>PDF pp. 570–588 · §§1–90</strong>
            <p>
              Aquí el sistema aparece condensado: mónada, percepción,
              apetición, razón suficiente, mundos posibles y armonía.
            </p>
            <div>
              <b>Centro de gravedad:</b>
              <span>mónada → percepción/apetición → razón suficiente → armonía.</span>
            </div>
          </article>
        </div>
      </section>

      <section className="leibniz-hub-section">
        <div className="leibniz-hub-heading">
          <span>03</span>
          <div>
            <p>Cartographia + Studium</p>
            <h2>Dos instrumentos, dos funciones distintas</h2>
          </div>
        </div>

        <div className="leibniz-polish-tools">
          <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia/mapas">
            <span>MAPAS 2D</span>
            <strong>Comprender por qué una idea conduce a otra</strong>
            <p>
              Moverse por nodos, abrir conectores, saltar entre mapas y reconstruir
              problemas sin memorizar definiciones aisladas.
            </p>
            <small>Explorar mapas →</small>
          </Link>

          <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia/studium">
            <span>STUDIUM</span>
            <strong>Comprobar que puede reconstruir el sistema</strong>
            <p>
              Recorrido guiado, síntesis, bloques conceptuales, comparación y
              autoevaluación relacional.
            </p>
            <small>Abrir Studium →</small>
          </Link>
        </div>
      </section>

      <section className="leibniz-hub-section leibniz-polish-rule">
        <div className="leibniz-hub-heading">
          <span>04</span>
          <div>
            <p>Regula</p>
            <h2>La regla que gobierna toda la tarea</h2>
          </div>
        </div>

        <blockquote>
          No preguntamos sólo “¿qué significa este concepto?”, sino
          “¿qué problema obliga a Leibniz a introducirlo y qué nueva dificultad
          deja abierta?”.
        </blockquote>
      </section>
    </main>
  )
}
