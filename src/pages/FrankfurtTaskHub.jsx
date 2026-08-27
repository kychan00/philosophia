import { Link } from 'react-router'

const maps = [
  {
    roman: 'I',
    title: '¿Qué es Teoría Crítica?',
    subtitle: 'totalidad · contradicción · crítica · transformación',
    desc:
      'La sociedad como totalidad histórica y la crítica como posibilidad de transformación.',
  },
  {
    roman: 'II',
    title: 'Adorno y la dialéctica negativa',
    subtitle: 'no-identidad · singular · primacía del objeto',
    desc:
      'El concepto no agota al objeto; la crítica debe mantener visible lo que los sistemas reprimen.',
  },
  {
    roman: 'III',
    title: 'Dialéctica de la Ilustración',
    subtitle: 'razón · técnica · administración · industria cultural',
    desc:
      'Cómo la racionalización puede invertir su promesa emancipadora y convertirse en dominio.',
  },
  {
    roman: 'IV',
    title: 'Horkheimer: eclipse de la razón',
    subtitle: 'razón objetiva · razón subjetiva · medios · fines',
    desc:
      'Una razón que calcula perfectamente los medios pero ya no puede discutir los fines.',
  },
  {
    roman: 'V',
    title: 'Marcuse + Fromm',
    subtitle: 'represión · unidimensionalidad · desobediencia · ser',
    desc:
      'Cómo la dominación entra en el sujeto y cómo se conserva la capacidad de decir no.',
  },
  {
    roman: 'VI',
    title: 'Adorno–Popper / Habermas–Albert',
    subtitle: 'ciencia · totalidad · hechos · normas · fines',
    desc:
      'Qué significa crítica en las ciencias sociales y si la razón puede discutir también los fines.',
  },
]

const spine = [
  'TOTALIDAD',
  'CONTRADICCIÓN',
  'NO-IDENTIDAD',
  'RAZÓN INSTRUMENTAL',
  'ADMINISTRACIÓN',
  'SUJETO',
  'NEGACIÓN',
  'CIENCIA',
  'FINES',
  'EMANCIPACIÓN',
]

export default function FrankfurtTaskHub() {
  return (
    <main className="frankfurt-hub-page frankfurt-hub-v2">
      <nav className="frankfurt-hub-nav">
        <Link to="/tareas">← Tareas</Link>
        <Link to="/" className="frankfurt-hub-brand">
          Φ · Philosophia
        </Link>
        <span>FI265 · Teoría Crítica</span>
      </nav>

      <header className="frankfurt-hub-hero frankfurt-hub-hero-v2">
        <div className="frankfurt-grid" aria-hidden="true" />

        <figure className="ph-book-cover ph-book-cover-frankfurt">
          <img
            src="/philosophia/images/books/reale-antiseri-tomo-iii.jpg"
            alt="Portada de Historia del pensamiento filosófico y científico III, de Giovanni Reale y Dario Antiseri"
          />
          <figcaption>
            <span>REALE · ANTISERI</span>
            <strong>Historia del pensamiento filosófico y científico III</strong>
            <small>Herder · Del Romanticismo hasta hoy</small>
          </figcaption>
        </figure>

        <div className="frankfurt-hub-hero-copy">
          <div className="frankfurt-hub-kicker">
            Reale y Antiseri · Escuela de Francfort
          </div>

          <h1>
            La Teoría Crítica
            <em>de la Escuela de Frankfurt</em>
          </h1>

          <p className="frankfurt-hub-lead">
            Este trabajo ya no es sólo una lectura del capítulo. Es una
            reconstrucción completa del sistema crítico frankfurtiano: desde
            la sociedad como totalidad hasta la pregunta por la emancipación.
          </p>

          <blockquote>
            ¿Cómo puede una sociedad que promete razón, progreso y libertad
            producir dominación, conformismo y pérdida de autonomía; y qué
            significa criticarla sin cerrar de antemano la posibilidad de otra
            forma de vida?
          </blockquote>
        </div>

        <aside className="frankfurt-hub-status">
          <span>SISTEMA COMPLETO</span>
          <strong>6 mapas + transversal + Studium</strong>
          <div>
            <b>6</b>
            <small>mapas 2D</small>
          </div>
          <div>
            <b>1</b>
            <small>sistema transversal</small>
          </div>
          <div>
            <b>1</b>
            <small>Studium guiado</small>
          </div>
        </aside>
      </header>

      <section className="frankfurt-hub-entry">
        <div className="frankfurt-hub-entry-head">
          <span>ENTRAR AL SISTEMA</span>
          <div>
            <h2>Tres niveles de lectura</h2>
            <p>
              Puede recorrer Frankfurt por autores y problemas, verlo como una
              sola arquitectura transversal o pasar directamente al estudio y
              la evaluación.
            </p>
          </div>
        </div>

        <div className="frankfurt-hub-entry-cards">
          <Link
            to="/tareas/teoria-critica/escuela-de-frankfurt/mapas"
            className="frankfurt-hub-entry-card maps"
          >
            <div>
              <span>01</span>
              <small>CARTOGRAPHIA</small>
            </div>
            <h3>Seis mapas 2D</h3>
            <p>
              Los seis núcleos del capítulo, con nodos móviles, rutas guiadas
              y flechas cuya relación se explica una por una.
            </p>
            <ul>
              <li>6 mapas temáticos</li>
              <li>nodos interactivos</li>
              <li>relaciones explicadas</li>
            </ul>
            <strong>Abrir mapas →</strong>
          </Link>

          <Link
            to="/tareas/teoria-critica/escuela-de-frankfurt/sistema"
            className="frankfurt-hub-entry-card system"
          >
            <div>
              <span>02</span>
              <small>NEXUS CRITICUS</small>
            </div>
            <h3>Sistema transversal</h3>
            <p>
              Conecta conceptos que atraviesan varios autores para leer
              Frankfurt como una sola estructura crítica.
            </p>
            <ul>
              <li>cruces entre mapas</li>
              <li>columna vertebral común</li>
              <li>navegación conceptual</li>
            </ul>
            <strong>Abrir sistema →</strong>
          </Link>

          <Link
            to="/tareas/teoria-critica/escuela-de-frankfurt/studium"
            className="frankfurt-hub-entry-card studium"
          >
            <div>
              <span>03</span>
              <small>STUDIUM CRITICUM</small>
            </div>
            <h3>Studium</h3>
            <p>
              Pasa del reconocimiento visual a la comprensión: módulos,
              progreso, preguntas relacionales y reconstrucción oral.
            </p>
            <ul>
              <li>6 módulos guiados</li>
              <li>evaluación relacional</li>
              <li>prueba avanzada</li>
            </ul>
            <strong>Abrir Studium →</strong>
          </Link>
          <Link
            to="/tareas/teoria-critica/escuela-de-frankfurt/conceptos"
            className="frankfurt-hub-entry-card concepts"
          >
            <div>
              <span>04</span>
              <small>LEXICON CRITICUM</small>
            </div>
            <h3>Conceptos</h3>
            <p>
              Vocabulario de la lectura de Reale y Antiseri: definición,
              autor y función de cada concepto dentro del sistema.
            </p>
            <ul>
              <li>24 conceptos centrales</li>
              <li>filtros por autor</li>
              <li>relaciones conceptuales</li>
            </ul>
            <strong>Abrir conceptos →</strong>
          </Link>

        </div>
      </section>

      <section className="frankfurt-hub-spine">
        <div className="frankfurt-hub-section-title">
          <span>01</span>
          <div>
            <p>Structura communis</p>
            <h2>La columna vertebral del capítulo</h2>
          </div>
        </div>

        <div className="frankfurt-hub-spine-flow">
          {spine.map((item, index) => (
            <div key={item}>
              <span>{item}</span>
              {index < spine.length - 1 && <b>→</b>}
            </div>
          ))}
        </div>

        <p>
          Esta cadena no sustituye los seis mapas: los conecta. La teoría
          comienza interrogando la sociedad como totalidad, atraviesa la
          crítica de la identidad y de la razón instrumental, llega a la
          formación del sujeto y termina preguntando por ciencia, fines y
          emancipación.
        </p>
      </section>

      <section className="frankfurt-hub-maps">
        <div className="frankfurt-hub-section-title">
          <span>02</span>
          <div>
            <p>Cartographia critica</p>
            <h2>Los seis mapas del sistema</h2>
          </div>
        </div>

        <div className="frankfurt-hub-map-grid">
          {maps.map((map) => (
            <Link
              key={map.roman}
              to="/tareas/teoria-critica/escuela-de-frankfurt/mapas"
              className="frankfurt-hub-map-card"
            >
              <span>{map.roman}</span>
              <div>
                <small>{map.subtitle}</small>
                <h3>{map.title}</h3>
                <p>{map.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="frankfurt-hub-matrix">
        <div className="frankfurt-hub-section-title">
          <span>03</span>
          <div>
            <p>Genealogia</p>
            <h2>La matriz teórica</h2>
          </div>
        </div>

        <div className="frankfurt-hub-matrix-grid">
          <article>
            <span>HEGEL</span>
            <strong>dialéctica · totalidad · contradicción</strong>
            <p>
              Aporta la forma de pensar una realidad histórica atravesada por
              contradicciones.
            </p>
          </article>

          <article>
            <span>MARX</span>
            <strong>capitalismo · explotación · ideología</strong>
            <p>
              Aporta la crítica material de las estructuras económicas y de
              las formas de dominación social.
            </p>
          </article>

          <article>
            <span>FREUD</span>
            <strong>represión · deseo · autoridad</strong>
            <p>
              Aporta la dimensión subjetiva: cómo la sociedad entra también en
              la formación psíquica del individuo.
            </p>
          </article>

          <article className="result">
            <span>TEORÍA CRÍTICA</span>
            <strong>sociedad · razón · cultura · sujeto · emancipación</strong>
            <p>
              La crítica reúne estos planos para reconstruir el orden social
              como totalidad histórica.
            </p>
          </article>
        </div>
      </section>

      <section className="frankfurt-hub-rules">
        <div className="frankfurt-hub-section-title">
          <span>04</span>
          <div>
            <p>Regula laboris</p>
            <h2>Las dos reglas de lectura</h2>
          </div>
        </div>

        <div>
          <blockquote>
            <strong>Ninguna flecha sin explicación.</strong>
            Cada conexión del sistema debe poder justificarse.
          </blockquote>

          <blockquote>
            <strong>Diagnóstico + emancipación.</strong>
            No basta con mostrar dominación: hay que entender qué función
            crítica cumple cada autor frente a ella.
          </blockquote>
        </div>
      </section>
    </main>
  )
}
