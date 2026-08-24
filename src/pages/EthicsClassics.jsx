import { Link } from 'react-router'

const modules = [
  {
    number: 'I',
    title: 'Sabiduría griega antigua',
    subtitle: 'Mito, rito y horizonte sapiencial',
    items: [
      'Orfismo',
      'Pitagorismo',
      'Ética en la tragedia griega y épica homérica',
      'El ser de Parménides',
      'Misterios, enigma y adivinación',
    ],
  },
  {
    number: 'II',
    title: 'Origen de la filosofía',
    subtitle: 'De Sócrates a Aristóteles',
    items: [
      'Ética socrática',
      'Ética de Platón',
      'Ética de Aristóteles',
      'Zenón y Gorgias',
    ],
  },
  {
    number: 'III',
    title: 'Éticas de la virtud',
    subtitle: 'Escuelas de la vida filosófica',
    items: ['Cínicos', 'Cirenaicos', 'Megáricos'],
  },
  {
    number: 'IV',
    title: 'Éticas del periodo romano',
    subtitle: 'Helenismo y Roma',
    items: ['Epicureísmo', 'Estoicismo', 'Escepticismo'],
  },
]

const concepts = [
  ['ἀρετή', 'areté', 'virtud · excelencia'],
  ['εὐδαιμονία', 'eudaimonía', 'vida lograda · felicidad'],
  ['ἦθος', 'êthos', 'carácter · modo de vida'],
  ['λόγος', 'lógos', 'razón · discurso'],
  ['πρᾶξις', 'prâxis', 'acción'],
  ['πόλις', 'pólis', 'comunidad · ciudad'],
]

const authors = [
  ['Homero', 'épica · mundo heroico'],
  ['Parménides', 'ser · fundamento'],
  ['Sócrates', 'cuidado de sí · examen'],
  ['Platón', 'alma · justicia · bien'],
  ['Aristóteles', 'virtud · hábito · fin'],
  ['Epicuro', 'placer sobrio · ataraxia'],
  ['Zenón', 'fortaleza · cosmópolis'],
  ['Escépticos', 'suspensión · serenidad'],
]

const bibliography = [
  ['Aristóteles', [
    'Ética Nicomáquea',
    'Ética Eudemia',
    'Acerca del alma',
    'Física · Metafísica · Órganon',
  ]],
  ['Platón', [
    'Diálogos I–VI',
    'La República',
  ]],
  ['Giorgio Colli', [
    'El nacimiento de la filosofía',
    'Gorgias y Parménides',
    'Sabiduría griega I–III',
  ]],
  ['Comentarios y estudios', [
    'Werner Jaeger · Paideia',
    'Martha Nussbaum · La fragilidad del bien',
    'Carlos García Gual · La secta del perro / Epicuro',
    'J. M. Rist · La filosofía estoica',
    'Peter Sloterdijk · Crítica de la razón cínica',
  ]],
]

export default function EthicsClassics() {
  return (
    <main className="ethicsx-page">
      <div className="ethicsx-meander" aria-hidden="true" />

      <nav className="ethicsx-nav">
        <Link to="/semestre/5">← Quinto semestre</Link>
        <Link to="/" className="ethicsx-brand">
          <span>Φ</span>
          Philosophia
        </Link>
        <span>FI194 · 2026-B</span>
      </nav>

      <header className="ethicsx-hero">
        <div className="ethicsx-columns" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="ethicsx-pediment" aria-hidden="true" />
        <div className="ethicsx-ghost" aria-hidden="true">ἨΘΟΣ</div>

        <div className="ethicsx-hero-inner">
          <p className="ethicsx-kicker">ἀρετή · ἦθος · πρᾶξις · εὐδαιμονία</p>
          <div className="ethicsx-medallion">Ε</div>

          <h1>
            Ética
            <em>Escuelas clásicas</em>
          </h1>

          <p className="ethicsx-lead">
            Un archivo dedicado a las formas griegas y helenísticas de pensar
            la vida buena, la virtud, el carácter y la acción. Desde la
            sabiduría antigua hasta las escuelas que convirtieron la filosofía
            en una forma de vida.
          </p>

          <div className="ethicsx-question">
            <span>Quaestio rectora</span>
            <strong>
              ¿Cómo se fundamenta la acción humana en la tradición ética clásica?
            </strong>
          </div>

          <div className="ethicsx-meta">
            <div><span>Profesor</span><strong>Aldo Carbajal Rodríguez</strong></div>
            <div><span>Horario</span><strong>Mar · Jue · 19:00–20:25</strong></div>
            <div><span>Aula</span><strong>FH-7</strong></div>
            <div><span>Clave</span><strong>FI194</strong></div>
          </div>
        </div>
      </header>

      <section className="ethicsx-section">
        <header className="ethicsx-heading">
          <span>I</span>
          <div><p>Archivum lectionum</p><h2>Clases</h2></div>
        </header>

        <Link
          to="/semestre/5/etica/clase/18-agosto"
          className="ethicsx-class-card"
        >
          <div className="ethicsx-class-card-date">
            <strong>XVIII</strong>
            <span>VIII · MMXXVI</span>
          </div>
          <div className="ethicsx-class-card-copy">
            <span>Primera clase · Sabiduría griega antigua</span>
            <h3>Del destino a la responsabilidad</h3>
            <p>Religión, tragedia, Homero, responsabilidad, omisión, alteridad y fundamentos éticos.</p>
          </div>
          <div className="ethicsx-class-card-enter">
            <span>Abrir clase</span>
            <b>↗</b>
          </div>
        </Link>

        <Link
          to="/semestre/5/etica/clase/20-agosto"
          className="ethicsx-class-card"
        >
          <div className="ethicsx-class-card-date">
            <strong>XX</strong>
            <span>VIII · MMXXVI</span>
          </div>
          <div className="ethicsx-class-card-copy">
            <span>Segunda clase · Conciencia de sí</span>
            <h3>Responsabilidad y vida examinada</h3>
            <p>
              Justicia y reparación, responsabilidad individual y estructural,
              sacrificio, Ifigenia, Patroclo, los nóstoi y el giro hacia el examen de sí.
            </p>
          </div>
          <div className="ethicsx-class-card-enter">
            <span>Abrir clase</span>
            <b>↗</b>
          </div>
        </Link>
      </section>

      <section className="ethicsx-section ethicsx-note">
        <div className="ethicsx-note-mark">!</div>
        <div>
          <p>Nota documental</p>
          <h2>Registro del programa</h2>
          <span>
            El PDF oficial conserva la denominación “Estética I: Escuelas
            Clásicas” en su encabezado, pero el desarrollo del curso,
            su estructura, contenidos y evaluación corresponden a ética clásica.
            Por ello, esta materia se archiva aquí como Ética · Escuelas clásicas.
          </span>
        </div>
      </section>

      <section className="ethicsx-section">
        <header className="ethicsx-heading">
          <span>II</span>
          <div><p>Origo</p><h2>De la sabiduría a la filosofía</h2></div>
        </header>

        <div className="ethicsx-process">
          <article><span>01</span><strong>Mundo mítico</strong><p>Religión, ritos y formas primeras de ordenar la acción humana.</p></article>
          <b>→</b>
          <article><span>02</span><strong>Sabiduría arcaica</strong><p>Cosmos, destino, divinidad y experiencia sapiencial de los griegos.</p></article>
          <b>→</b>
          <article><span>03</span><strong>Nacimiento del logos</strong><p>La pregunta racional por el ser, la vida buena y el orden político.</p></article>
          <b>→</b>
          <article><span>04</span><strong>Escuelas éticas</strong><p>Filosofías de la virtud, la felicidad y el cuidado de sí.</p></article>
        </div>
      </section>

      <section className="ethicsx-section">
        <header className="ethicsx-heading">
          <span>III</span>
          <div><p>Ordo cursus</p><h2>Estructura del curso</h2></div>
        </header>

        <div className="ethicsx-modules">
          {modules.map((module) => (
            <article key={module.number}>
              <header>
                <span>{module.number}</span>
                <small>{module.subtitle}</small>
              </header>
              <h3>{module.title}</h3>
              <ol>
                {module.items.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="ethicsx-section">
        <header className="ethicsx-heading">
          <span>IV</span>
          <div><p>Lexicon</p><h2>Constelación conceptual</h2></div>
        </header>

        <div className="ethicsx-concepts">
          {concepts.map(([greek, latin, meaning]) => (
            <article key={greek}>
              <strong>{greek}</strong>
              <span>{latin}</span>
              <p>{meaning}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ethicsx-section">
        <header className="ethicsx-heading">
          <span>V</span>
          <div><p>Prosopa</p><h2>Galería de autores y escuelas</h2></div>
        </header>

        <div className="ethicsx-authors">
          {authors.map(([name, idea]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{idea}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ethicsx-section">
        <header className="ethicsx-heading">
          <span>VI</span>
          <div><p>Praxis academica</p><h2>Cómo se trabajará</h2></div>
        </header>

        <div className="ethicsx-workflow">
          <article><span>01</span><h3>Lectura previa</h3><p>Llegar con los textos leídos antes de la sesión.</p></article>
          <article><span>02</span><h3>Comentario</h3><p>Dialogar en clase sobre argumentos, conceptos y pasajes decisivos.</p></article>
          <article><span>03</span><h3>Exposición</h3><p>Contextualización del tema y desarrollo de los problemas filosóficos.</p></article>
          <article><span>04</span><h3>Juicio ético</h3><p>Aplicar categorías clásicas a la comprensión de la acción humana.</p></article>
        </div>
      </section>

      <section className="ethicsx-section ethicsx-evaluation">
        <div className="ethicsx-evaluation-copy">
          <p>Evaluatio</p>
          <h2>Evaluación del programa</h2>
          <span>
            La materia combina exámenes parciales, participación, exposiciones,
            reportes de lectura y trabajos.
          </span>
        </div>

        <div className="ethicsx-evaluation-grid">
          <div><strong>20%</strong><span>Examen parcial I</span></div>
          <div><strong>20%</strong><span>Examen parcial II</span></div>
          <div><strong>30%</strong><span>Participación y exposiciones</span></div>
          <div><strong>30%</strong><span>Reportes y trabajos</span></div>
        </div>
      </section>

      <section className="ethicsx-section ethicsx-attendance">
        <span>Asistencia</span>
        <div><strong>80%</strong><small>ordinario</small></div>
        <div><strong>60%</strong><small>extraordinario</small></div>
        <p>Para ordinario también deben presentarse los trabajos acordados.</p>
      </section>

      <section className="ethicsx-section">
        <header className="ethicsx-heading">
          <span>VII</span>
          <div><p>Bibliotheca</p><h2>Bibliografía de referencia</h2></div>
        </header>

        <div className="ethicsx-library">
          {bibliography.map(([author, works]) => (
            <article key={author}>
              <h3>{author}</h3>
              <ul>{works.map((work) => <li key={work}>{work}</li>)}</ul>
            </article>
          ))}
        </div>

        <p className="ethicsx-library-note">
          El programa completo también incluye Düring, Hirsberger, Höffe,
          Martín, Mas Torres, Mondolfo, Mosterín, Montanelli, Nestle, Reale,
          Ross y materiales audiovisuales.
        </p>
      </section>

      

      <footer className="ethicsx-footer">
        <Link to="/semestre/5">← Quinto semestre</Link>
        <span>ἀρετή · ἦθος · πρᾶξις</span>
        <span>Ethica · MMXXVI</span>
      </footer>

      <div className="ethicsx-meander" aria-hidden="true" />
    </main>
  )
}
