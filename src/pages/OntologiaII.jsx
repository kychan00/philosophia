import { Link } from 'react-router'

const coursePath = [
  {
    number: 'I',
    title: 'Racionalistas y empiristas',
    detail: 'Descartes · Spinoza · Leibniz · Locke · Berkeley · Hume',
  },
  {
    number: 'II',
    title: 'Kant y la crítica de la metafísica',
    detail: 'Estética · Analítica · Dialéctica trascendental',
  },
  {
    number: 'III',
    title: 'Después de Kant',
    detail: 'El problema ontológico de la cosa-en-sí',
  },
  {
    number: 'IV',
    title: 'Hegel',
    detail: 'Ser puro · nada pura · devenir',
  },
  {
    number: 'V',
    title: 'Marx',
    detail: 'Crítica de la dialéctica idealista · realidad social',
  },
  {
    number: 'VI',
    title: 'Positivismo',
    detail: 'Fenómeno · concepción positivista del mundo',
  },
  {
    number: 'VII',
    title: 'Nietzsche',
    detail: 'Nihilismo · crítica del ser y de las categorías de la razón',
  },
  {
    number: 'VIII',
    title: 'Husserl',
    detail: 'Fenomenología · objetos ideales · intuición eidética',
  },
  {
    number: 'IX',
    title: 'Heidegger',
    detail: 'Pregunta por el sentido del ser · analítica existencial',
  },
  {
    number: 'X',
    title: 'Lógica, lenguaje y mundo',
    detail: 'Positivismo lógico · Russell · Wittgenstein · giro lingüístico',
  },
]

const readings = [
  {
    number: '01',
    author: 'René Descartes',
    title: 'Meditaciones metafísicas',
    note: 'Bibliografía básica · racionalismo',
  },
  {
    number: '02',
    author: 'Baruch Spinoza',
    title: 'Ética demostrada según el orden geométrico',
    note: 'Bibliografía básica · sustancia, Dios y naturaleza',
  },
  {
    number: '03',
    author: 'G. W. Leibniz',
    title: 'Monadología / Discurso de metafísica',
    note: 'Bibliografía básica + material de apoyo',
  },
  {
    number: '04',
    author: 'Immanuel Kant',
    title: 'Crítica de la razón pura',
    note: 'Metafísica, conocimiento y argumento ontológico',
  },
  {
    number: '05',
    author: 'G. W. F. Hegel',
    title: 'Ciencia de la lógica',
    note: 'Ser puro · nada pura · devenir',
  },
  {
    number: '06',
    author: 'Karl Marx',
    title: 'Manuscritos económico-filosóficos',
    note: 'Crítica materialista de la dialéctica',
  },
  {
    number: '07',
    author: 'A. J. Ayer / Leszek Kołakowski',
    title: 'Positivismo lógico / La filosofía positivista',
    note: 'Fenómeno, ciencia y crítica de la metafísica',
  },
  {
    number: '08',
    author: 'Friedrich Nietzsche',
    title: 'Crepúsculo de los ídolos',
    note: 'Nihilismo y crítica de las categorías de la razón',
  },
  {
    number: '09',
    author: 'Ludwig Wittgenstein',
    title: 'Tractatus logico-philosophicus',
    note: 'Mundo · lenguaje · forma lógica',
  },
  {
    number: '10',
    author: 'Hans-Georg Gadamer',
    title: 'El giro hermenéutico',
    note: 'Material complementario para el horizonte hermenéutico',
  },
]

const symbols = [
  ['ὄν', '8%', '8%'],
  ['οὐσία', '18%', '79%'],
  ['esse', '43%', '4%'],
  ['Sein', '58%', '84%'],
  ['λόγος', '78%', '10%'],
  ['Welt', '87%', '77%'],
]

export default function OntologiaII() {
  return (
    <main className="ontology-program-page">
      <div className="ontology-program-grain" aria-hidden="true" />

      <div className="ontology-program-symbols" aria-hidden="true">
        {symbols.map(([symbol, top, left]) => (
          <span
            key={`${symbol}-${top}`}
            style={{ '--top': top, '--left': left }}
          >
            {symbol}
          </span>
        ))}
      </div>

      <nav className="ontology-program-nav">
        <Link to="/semestre/5">← Quinto semestre</Link>

        <Link to="/" className="ontology-program-brand">
          <span>Φ</span>
          Philosophia
        </Link>

        <span>FI190 · NRC 56096</span>
      </nav>

      <header className="ontology-program-hero">
        <div className="ontology-program-being" aria-hidden="true">
          ὄν
        </div>

        <div className="ontology-program-hero-inner">
          <p className="ontology-program-kicker">
            Ontologia · Problemata contemporanea
          </p>

          <div className="ontology-program-seal">ὄν</div>

          <h1>
            Ontología
            <em>II</em>
          </h1>

          <p className="ontology-program-subtitle">
            Problemas Contemporáneos
          </p>

          <div className="ontology-program-questions">
            <span>ser</span>
            <b>↔</b>
            <span>pensar</span>
            <b>↔</b>
            <span>lenguaje</span>
            <b>↔</b>
            <span>realidad</span>
          </div>

          <p className="ontology-program-intro">
            Un recorrido histórico-filosófico por las transformaciones
            de la pregunta ontológica en la modernidad y la
            contemporaneidad: de las sustancias racionalistas al
            lenguaje, la fenomenología y la pregunta por el ser.
          </p>

          <div className="ontology-program-meta">
            <div>
              <span>Profesor</span>
              <strong>José Alejandro Fuerte</strong>
            </div>

            <div>
              <span>Horas</span>
              <strong>60 teóricas</strong>
            </div>

            <div>
              <span>Área</span>
              <strong>Básica Particular Obligatoria</strong>
            </div>
          </div>
        </div>
      </header>

      <section className="ontology-program-classes">
        <div className="ontology-program-heading">
          <span>I</span>
          <div>
            <p>Archivum lectionum</p>
            <h2>Clases</h2>
          </div>
        </div>

        <Link
          to="/semestre/5/ontologia-ii/clase/17-agosto"
          className="ontology-program-class-card"
        >
          <div className="ontology-program-date">
            <strong>XVII</strong>
            <span>VIII · MMXXVI</span>
          </div>

          <div className="ontology-program-class-copy">
            <span>Primera clase · Mapa del curso</span>
            <h3>Clase del 17 de agosto</h3>
            <p>
              Principios lógicos, sentidos del ser, modernidad,
              Descartes, Spinoza, Leibniz, teleología, libertad
              y el itinerario del semestre.
            </p>
          </div>

          <div className="ontology-program-enter">
            <span>Abrir folio</span>
            <b>↗</b>
          </div>
        </Link>
      </section>

      <section className="ontology-program-route">
        <div className="ontology-program-heading">
          <span>II</span>
          <div>
            <p>Itinerarium</p>
            <h2>Mapa del curso</h2>
          </div>
        </div>

        <div className="ontology-program-route-grid">
          {coursePath.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <p className="ontology-program-source-note">
          El programa oficial enumera “10. El positivismo lógico”
          y después continúa con 11.1–11.3 para Russell,
          Wittgenstein y el giro lingüístico. Aquí esos temas se
          agrupan visualmente en un bloque final sin alterar su
          contenido.
        </p>
      </section>

      <section className="ontology-program-library">
        <div className="ontology-program-heading">
          <span>III</span>
          <div>
            <p>Bibliotheca ontologica</p>
            <h2>Lecturas y materiales</h2>
          </div>
        </div>

        <div className="ontology-program-reading-list">
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

        <p className="ontology-program-source-note">
          La lista combina bibliografía básica del programa con
          algunos de los materiales de apoyo disponibles para el
          curso. Los archivos originales no se publican en el sitio.
        </p>
      </section>

      <section className="ontology-program-evaluation">
        <div className="ontology-program-eval-copy">
          <p>Evaluatio</p>
          <h2>Evaluación oficial</h2>
          <span>
            El programa de agosto de 2026 establece examen parcial,
            cuestionarios y participación como los tres componentes
            de la calificación.
          </span>
        </div>

        <div className="ontology-program-eval-grid">
          <div>
            <strong>40%</strong>
            <span>Examen parcial</span>
          </div>

          <div>
            <strong>40%</strong>
            <span>Cuestionarios</span>
          </div>

          <div>
            <strong>20%</strong>
            <span>Participación</span>
          </div>
        </div>
      </section>

      <section className="ontology-program-method">
        <div>
          <p>Disciplina intellectus</p>
          <h2>Cómo se trabajará</h2>
        </div>

        <div className="ontology-program-method-grid">
          <article>
            <span>01</span>
            <strong>Leer</strong>
            <p>
              Contextualizar los textos antes de entrar al problema.
            </p>
          </article>

          <article>
            <span>02</span>
            <strong>Analizar</strong>
            <p>
              Distinguir problemas, categorías y conceptos.
            </p>
          </article>

          <article>
            <span>03</span>
            <strong>Reconstruir</strong>
            <p>
              Identificar y reconstruir argumentos filosóficos.
            </p>
          </article>

          <article>
            <span>04</span>
            <strong>Dialogar</strong>
            <p>
              Preguntar, comentar, criticar y relacionar con el contexto.
            </p>
          </article>
        </div>
      </section>

      <footer className="ontology-program-footer">
        <Link to="/semestre/5">← Quinto semestre</Link>
        <span>☙ &nbsp; τὸ ὄν &nbsp; ❧</span>
        <span>Ontología II · MMXXVI</span>
      </footer>
    </main>
  )
}
