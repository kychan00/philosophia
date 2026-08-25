import { Link } from 'react-router'

const pillars = [
  {
    n: 'I',
    title: 'Totalidad',
    subtitle: 'La sociedad no se entiende por fragmentos aislados',
    body:
      'La teoría crítica parte de la sociedad como un todo: economía, historia, psicología y cultura se implican mutuamente.',
    chain: 'economía ↔ historia ↔ psicología ↔ cultura',
  },
  {
    n: 'II',
    title: 'Contradicción',
    subtitle: 'El orden existente contiene tensiones reales',
    body:
      'La tarea crítica no consiste sólo en describir hechos, sino en descubrir las contradicciones que el orden social normaliza o vuelve invisibles.',
    chain: 'sociedad existente → contradicciones → crítica',
  },
  {
    n: 'III',
    title: 'Dominación',
    subtitle: 'La razón puede convertirse en instrumento del sistema',
    body:
      'La modernidad promete emancipación, pero la racionalización técnica puede producir administración, homogeneización y pérdida de autonomía.',
    chain: 'razón → técnica → administración → dominio',
  },
  {
    n: 'IV',
    title: 'Emancipación',
    subtitle: 'Criticar implica pensar que lo existente puede ser distinto',
    body:
      'La teoría crítica mantiene una orientación práctica: comprender el presente para abrir posibilidades de transformación racional y libertad.',
    chain: 'crítica → negación → posibilidad → transformación',
  },
]

const route = [
  ['I', '¿Qué es Teoría Crítica?', 'totalidad · contradicción · emancipación'],
  ['II', 'Adorno', 'dialéctica negativa · no-identidad'],
  ['III', 'Adorno + Horkheimer', 'Ilustración · razón instrumental · industria cultural'],
  ['IV', 'Horkheimer', 'eclipse de la razón · medios y fines'],
  ['V', 'Marcuse + Fromm', 'represión · Gran Rechazo · tener/ser'],
  ['VI', 'Adorno / Popper / Habermas / Albert', 'ciencia social · totalidad · normatividad'],
]

export default function FrankfurtTaskHub() {
  return (
    <main className="frankfurt-hub-page">
      <nav className="frankfurt-hub-nav">
        <Link to="/tareas">← Tareas</Link>
        <Link to="/" className="frankfurt-hub-brand">Φ · Philosophia</Link>
        <span>FI265 · Teoría Crítica</span>
      </nav>

      <header className="frankfurt-hub-hero">
        <div className="frankfurt-grid" aria-hidden="true" />
        <div className="frankfurt-hub-kicker">
          Reale y Antiseri · Escuela de Francfort
        </div>

        <h1>
          La Teoría Crítica
          <em>de la Escuela de Frankfurt</em>
        </h1>

        <p className="frankfurt-hub-lead">
          No vamos a estudiar este capítulo como una lista de autores. Vamos a
          reconstruir el problema que los conecta: cómo una sociedad que promete
          razón, progreso y libertad puede producir al mismo tiempo dominación,
          conformismo y pérdida de autonomía.
        </p>

        <blockquote>
          ¿Cómo puede la razón convertirse en instrumento de dominación y, aun
          así, conservar una capacidad crítica capaz de orientar la emancipación?
        </blockquote>

        <div className="frankfurt-hub-actions">
          <Link
            className="primary"
            to="/tareas/teoria-critica/escuela-de-frankfurt/mapas"
          >
            Abrir Mapa I →
          </Link>
          <span>Mapas 2D · próximos</span>
          <span>Studium · al final</span>
        </div>
              <div className="frankfurt-system-entry">
          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/sistema">
            Abrir sistema transversal →
          </Link>
        </div>
        <div className="frankfurt-studium-entry">
          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/studium">
            Abrir Studium →
          </Link>
        </div>
</header>

      {/* FRANKFURT PHASE 11 · ROUTE OVERVIEW */}
      <section className="frankfurt-route-overview">
        <div className="frankfurt-route-overview-head">
          <span>ARCHITECTURA COMPLETA</span>
          <div>
            <h2>Del texto al sistema crítico</h2>
            <p>
              El trabajo quedó organizado en tres niveles: seis mapas analíticos,
              un sistema transversal y un Studium para reconstruir las relaciones
              sin depender del esquema visual.
            </p>
          </div>
        </div>

        <div className="frankfurt-route-overview-cards">
          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/mapas" className="frankfurt-route-overview-card">
            <span>01</span>
            <small>CARTOGRAPHIA</small>
            <strong>Seis mapas 2D</strong>
            <p>Totalidad, Adorno, Ilustración, Horkheimer, Marcuse–Fromm y ciencias sociales.</p>
            <b>Abrir mapas →</b>
          </Link>

          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/sistema" className="frankfurt-route-overview-card">
            <span>02</span>
            <small>NEXUS CRITICUS</small>
            <strong>Sistema transversal</strong>
            <p>Cruce de conceptos entre mapas para ver Frankfurt como una sola arquitectura crítica.</p>
            <b>Abrir sistema →</b>
          </Link>

          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/studium" className="frankfurt-route-overview-card">
            <span>03</span>
            <small>STUDIUM CRITICUM</small>
            <strong>Estudio y evaluación</strong>
            <p>Progreso, comprensión, preguntas relacionales, claves y reconstrucción oral.</p>
            <b>Abrir Studium →</b>
          </Link>
        </div>
      </section>

      <section className="frankfurt-hub-section">
        <div className="frankfurt-hub-heading">
          <span>01</span>
          <div>
            <p>Programma criticum</p>
            <h2>El núcleo común de Frankfurt</h2>
          </div>
        </div>

        <div className="frankfurt-pillars">
          {pillars.map((pillar) => (
            <article key={pillar.n}>
              <span>{pillar.n}</span>
              <small>{pillar.subtitle}</small>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
              <div>{pillar.chain}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="frankfurt-hub-section">
        <div className="frankfurt-hub-heading">
          <span>02</span>
          <div>
            <p>Genealogia</p>
            <h2>La matriz de la Teoría Crítica</h2>
          </div>
        </div>

        <div className="frankfurt-matrix">
          <article>
            <span>HEGEL</span>
            <strong>dialéctica · totalidad · contradicción</strong>
            <p>
              Aporta la idea de que la realidad social debe pensarse como una
              totalidad histórica atravesada por contradicciones.
            </p>
          </article>

          <b>+</b>

          <article>
            <span>MARX</span>
            <strong>capitalismo · explotación · ideología</strong>
            <p>
              Aporta el análisis material de las estructuras económicas y la
              orientación hacia la transformación social.
            </p>
          </article>

          <b>+</b>

          <article>
            <span>FREUD</span>
            <strong>represión · deseo · autoridad</strong>
            <p>
              Aporta una dimensión psíquica: la dominación social también se
              interioriza y reproduce en sujetos concretos.
            </p>
          </article>

          <b>=</b>

          <article className="result">
            <span>TEORÍA CRÍTICA</span>
            <strong>sociedad como totalidad histórica</strong>
            <p>
              Una crítica simultáneamente económica, política, cultural y
              psicológica del orden contemporáneo.
            </p>
          </article>
        </div>
      </section>

      <section className="frankfurt-hub-section">
        <div className="frankfurt-hub-heading">
          <span>03</span>
          <div>
            <p>Contextus historicus</p>
            <h2>Por qué esta filosofía surge en este momento</h2>
          </div>
        </div>

        <div className="frankfurt-history">
          <div><span>1920s</span><strong>Instituto para la Investigación Social</strong></div>
          <b>→</b>
          <div><span>1931</span><strong>Horkheimer dirige el Instituto</strong></div>
          <b>→</b>
          <div><span>1933+</span><strong>nazismo · exilio</strong></div>
          <b>→</b>
          <div><span>1940s</span><strong>guerra · fascismo · estalinismo</strong></div>
          <b>→</b>
          <div><span>posguerra</span><strong>sociedad tecnológica avanzada</strong></div>
        </div>

        <p className="frankfurt-history-note">
          El diagnóstico frankfurtiano no nace en abstracto: intenta comprender
          por qué formas modernas de racionalidad, organización y progreso
          pueden coexistir con violencia política, administración masiva y
          pérdida de autonomía individual.
        </p>
      </section>

      <section className="frankfurt-hub-section">
        <div className="frankfurt-hub-heading">
          <span>04</span>
          <div>
            <p>Ordo mapparum</p>
            <h2>Los seis mapas que construiremos</h2>
          </div>
        </div>

        <div className="frankfurt-route">
          {route.map(([n, title, subtitle], index) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
              {index < route.length - 1 && <b>↓</b>}
            </article>
          ))}
        </div>
      </section>

      <section className="frankfurt-hub-section frankfurt-rule">
        <div className="frankfurt-hub-heading">
          <span>05</span>
          <div>
            <p>Regula laboris</p>
            <h2>Dos reglas para todos los mapas</h2>
          </div>
        </div>

        <div className="frankfurt-rules">
          <blockquote>
            <strong>Ninguna flecha sin explicación.</strong>
            Cada relación debe poder responder por qué una idea conduce a otra.
          </blockquote>
          <blockquote>
            <strong>Diagnóstico + posibilidad de emancipación.</strong>
            No basta con mostrar dominación; hay que mostrar qué función crítica
            cumple cada autor frente a ella.
          </blockquote>
        </div>
      </section>
    </main>
  )
}
