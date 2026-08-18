import { Link } from 'react-router'

const sections = [
  ['00', 'consigna', 'Consigna'],
  ['01', 'curso', 'Estructura del curso'],
  ['02', 'texto', 'Sistematización del texto'],
  ['03', 'historico', '1.1 Histórico-social'],
  ['04', 'teorico', '1.2 Planteamientos'],
  ['05', 'autores', 'Autores y conceptos'],
  ['06', 'sintesis', 'Síntesis final'],
]

const goToSection = (id) => {
  const element = document.getElementById(id)
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const courseBlocks = [
  {
    number: 'I',
    title: 'Panorama general',
    sessions: '2 sesiones',
    items: [
      'Elementos histórico-sociales en el surgimiento de la Teoría Crítica',
      'Principales planteamientos teóricos',
      'Reale y Antiseri — “La Escuela de Frankfurt”',
    ],
  },
  {
    number: 'II',
    title: 'Fundamentos de la Teoría Crítica',
    sessions: '13 sesiones',
    items: [
      'Hegel — dialéctica afirmativa y negativa · 3 sesiones',
      'Marx — enajenación y fetichismo · 5 sesiones',
      'Lukács — cosificación · 2 sesiones',
      'Freud — proceso civilizatorio y malestar · 3 sesiones',
    ],
  },
  {
    number: 'III',
    title: 'Teoría Crítica',
    sessions: '8 sesiones',
    items: [
      'Horkheimer — teoría tradicional y teoría crítica · 2 sesiones',
      'Horkheimer — razón instrumental · 2 sesiones',
      'Adorno / Horkheimer — dialéctica de la Ilustración · 2 sesiones',
      'Marcuse — sociedad unidimensional · 2 sesiones',
    ],
  },
]

const textMap = [
  ['01', 'Génesis, evolución y programa', 'Instituto · totalidad · dialéctica · teoría crítica'],
  ['02', 'Adorno: dialéctica negativa', 'no-identidad · crítica de la totalidad cerrada'],
  ['03', 'Adorno y Horkheimer', 'dialéctica de la Ilustración · razón instrumental'],
  ['04', 'Industria cultural', 'masificación · ideología · conformidad'],
  ['05', 'Horkheimer: eclipse de la razón', 'medios y fines · administración · dominación'],
  ['06', 'Marcuse y el Gran Rechazo', 'represión · liberación · sociedad unidimensional'],
  ['07', 'Fromm: la Ciudad del Ser', 'desobediencia · libertad · tener / ser'],
  ['08', 'Adorno contra Popper', 'totalidad · contradicción · crítica al positivismo'],
  ['09', 'Habermas contra Albert', 'hechos / valores · medios / fines · razón práctica'],
]

const historical = [
  ['1920s', 'Fundación del Instituto', 'La Escuela de Frankfurt surge alrededor del Instituto para la Investigación Social, fundado en Frankfurt a comienzos de la década de 1920.'],
  ['1931', 'Dirección de Horkheimer', 'Con Max Horkheimer el Instituto adquiere el perfil de una escuela orientada a elaborar una teoría crítica de la sociedad.'],
  ['1932', 'Investigación social', 'La Revista para la Investigación Social refuerza un programa socialista y materialista centrado en totalidad y dialéctica.'],
  ['1933 →', 'Nazismo y exilio', 'La llegada de Hitler obliga al grupo a desplazarse por Ginebra, París y finalmente Nueva York.'],
  ['1939–45', 'Guerra y autoritarismo', 'Fascismo, nazismo, estalinismo y Segunda Guerra Mundial se vuelven experiencias decisivas para la reflexión crítica.'],
  ['Posguerra', 'Guerra Fría y sociedad tecnológica', 'La sociedad opulenta, la administración, la tecnología y la industria cultural amplían el problema de la dominación.'],
  ['1950', 'Regreso a Frankfurt', 'Horkheimer, Adorno y Pollock regresan y el Instituto para la Investigación Social renace en Frankfurt.'],
]

const theories = [
  ['01', 'Totalidad', 'La sociedad debe estudiarse como un todo y no como una suma de sectores aislados.'],
  ['02', 'Dialéctica', 'La crítica busca contradicciones reales de la sociedad y evita tratar el orden existente como algo natural o definitivo.'],
  ['03', 'Interdisciplinariedad', 'La investigación relaciona ámbitos económicos, históricos, psicológicos y culturales.'],
  ['04', 'Hegel + Marx + Freud', 'El texto presenta este nexo como un punto de referencia característico de la Escuela de Frankfurt.'],
  ['05', 'Crítica de la dominación', 'La teoría examina capitalismo, autoridad, racionalidad tecnológica, cultura de masas y mecanismos de integración social.'],
  ['06', 'Interés emancipatorio', 'La crítica no termina en describir la sociedad: mantiene como horizonte una organización social menos opresiva y sin explotación.'],
  ['07', 'Crítica del positivismo', 'Los hechos sociales no son datos neutros e inamovibles; deben entenderse dentro de la totalidad contradictoria que los produce.'],
  ['08', 'Razón instrumental', 'La racionalidad se vuelve problemática cuando sólo calcula medios eficaces para fines que ella misma ya no puede cuestionar.'],
]

const authors = [
  ['Horkheimer', 'Teoría crítica · razón instrumental', 'Crítica de la sociedad administrada y de una razón reducida a instrumento.'],
  ['Adorno', 'Dialéctica negativa · no-identidad', 'Defensa de lo singular y lo no-idéntico frente a totalidades conceptuales cerradas.'],
  ['Adorno / Horkheimer', 'Dialéctica de la Ilustración', 'La racionalización puede invertirse en dominación cuando el saber se reduce a técnica y control.'],
  ['Marcuse', 'Sociedad unidimensional · Gran Rechazo', 'La sociedad tecnológica integra la oposición y fabrica una apariencia de libertad.'],
  ['Fromm', 'Desobediencia · tener / ser', 'La libertad exige capacidad crítica y una existencia no reducida a posesión y consumo.'],
  ['Habermas', 'Razón práctica · crítica al decisionismo', 'Discute la separación rígida entre hechos, valores, medios y fines.'],
]

export default function CriticalTheoryTask1() {
  return (
    <main className="ctt-page">
      <nav className="ctt-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ctt-brand">Φ · Philosophia</Link>
        <span>18 · VIII · MMXXVI</span>
      </nav>

      <header className="ctt-hero">
        <div className="ctt-hero-number" aria-hidden="true">01</div>
        <p>Teoría Crítica · Tarea 1 · 100 puntos</p>
        <h1>La Escuela <em>de Frankfurt</em></h1>
        <p className="ctt-lead">
          Lectura del programa de estudios y sistematización del texto de
          Giovanni Reale y Dario Antiseri para identificar el contexto de
          surgimiento y los planteamientos centrales de la Teoría Crítica.
        </p>
        <div className="ctt-dates">
          <div><span>Asignada</span><strong>17 de agosto</strong></div>
          <div><span>Entrega / clase</span><strong>18 de agosto</strong></div>
          <div><span>Valor</span><strong>100 puntos</strong></div>
        </div>
      </header>

      <div className="ctt-layout">
        <aside className="ctt-index">
          <p>Index laboris</p>
          {sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{number}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ctt-article">
          <section id="consigna">
            <span className="ctt-num">00</span>
            <p className="ctt-eye">Consigna de Classroom</p>
            <h2>Qué hay que hacer</h2>
            <div className="ctt-instruction">
              <p>Leer el programa y a Reale y Antiseri.</p>
              <ol>
                <li>Identificar los elementos histórico-sociales en el surgimiento de la Teoría Crítica de la Escuela de Frankfurt.</li>
                <li>Identificar los principales planteamientos teóricos de la Escuela de Frankfurt.</li>
              </ol>
            </div>
            <div className="ctt-checks">
              <div><span>01</span><strong>Leer el programa</strong></div>
              <div><span>02</span><strong>Leer Reale y Antiseri</strong></div>
              <div><span>03</span><strong>Revisar anuncios previos</strong></div>
              <div><span>04</span><strong>Revisar “Trabajo de clase”</strong></div>
            </div>
          </section>

          <section id="curso">
            <span className="ctt-num">01</span>
            <p className="ctt-eye">Programa 2026-B</p>
            <h2>Estructura del curso</h2>
            <p>
              La Tarea 1 funciona como entrada al curso: primero construye un
              panorama de la Escuela de Frankfurt, después estudia sus fundamentos
              filosóficos y finalmente entra a los autores centrales de la Teoría Crítica.
            </p>
            <div className="ctt-course">
              {courseBlocks.map((block) => (
                <article key={block.number}>
                  <header><span>{block.number}</span><small>{block.sessions}</small></header>
                  <h3>{block.title}</h3>
                  <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="ctt-flow"><span>Panorama</span><b>→</b><span>Fundamentos</span><b>→</b><span>Teoría Crítica</span></div>
          </section>

          <section id="texto">
            <span className="ctt-num">02</span>
            <p className="ctt-eye">Sistematización del texto</p>
            <h2>Cómo está organizado Reale y Antiseri</h2>
            <p>
              El capítulo parte de la génesis de la Escuela y después despliega
              autores y problemas que muestran cómo la crítica social se vuelve
              crítica de la razón, de la cultura, del positivismo y de la sociedad tecnológica.
            </p>
            <div className="ctt-textmap">
              {textMap.map(([n, title, concept]) => (
                <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{concept}</p></div></article>
              ))}
            </div>
          </section>

          <section id="historico">
            <span className="ctt-num">03</span>
            <p className="ctt-eye">1.1 · Elementos histórico-sociales</p>
            <h2>Del Instituto al exilio y la posguerra</h2>
            <div className="ctt-timeline">
              {historical.map(([date, title, text]) => (
                <article key={`${date}-${title}`}><span>{date}</span><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
            <div className="ctt-result">
              <span>Resultado de 1.1</span>
              <strong>
                La Teoría Crítica surge en una institución de investigación social
                vinculada al marxismo occidental y se desarrolla bajo el impacto de
                fascismo, nazismo, estalinismo, guerra, exilio, Guerra Fría y expansión
                de la sociedad tecnológica.
              </strong>
            </div>
          </section>

          <section id="teorico">
            <span className="ctt-num">04</span>
            <p className="ctt-eye">1.2 · Principales planteamientos</p>
            <h2>La lógica de la Teoría Crítica</h2>
            <div className="ctt-theories">
              {theories.map(([n, title, text]) => (
                <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <div className="ctt-schema">
              <div><span>Hegel</span><strong>dialéctica</strong></div><b>+</b>
              <div><span>Marx</span><strong>crítica social</strong></div><b>+</b>
              <div><span>Freud</span><strong>psicoanálisis</strong></div><b>→</b>
              <div className="ctt-schema-result"><span>Escuela de Frankfurt</span><strong>totalidad · contradicción · dominación · emancipación</strong></div>
            </div>
          </section>

          <section id="autores">
            <span className="ctt-num">05</span>
            <p className="ctt-eye">Matriz conceptual</p>
            <h2>Autores y problemas del capítulo</h2>
            <div className="ctt-matrix">
              {authors.map(([author, concepts, role]) => (
                <article key={author}><h3>{author}</h3><strong>{concepts}</strong><p>{role}</p></article>
              ))}
            </div>
          </section>

          <section id="sintesis">
            <span className="ctt-num">06</span>
            <p className="ctt-eye">Síntesis final</p>
            <h2>Respuesta estructurada a la consigna</h2>
            <div className="ctt-answer">
              <article>
                <span>1.1</span><h3>Elementos histórico-sociales</h3>
                <p>
                  La Escuela de Frankfurt se origina en el Instituto para la Investigación
                  Social fundado en Frankfurt a comienzos de los años veinte. Con la dirección
                  de Max Horkheimer desde 1931 se consolida el proyecto de una teoría crítica
                  de la sociedad. Su desarrollo está marcado por la crisis europea posterior a
                  la Primera Guerra Mundial, el fascismo, el nazismo, el estalinismo, la Segunda
                  Guerra Mundial, el exilio del grupo, la Guerra Fría y la expansión de la sociedad
                  industrial y tecnológica. Estas experiencias explican que autoridad, dominación,
                  industria cultural y pérdida de autonomía individual ocupen un lugar central.
                </p>
              </article>
              <article>
                <span>1.2</span><h3>Principales planteamientos teóricos</h3>
                <p>
                  La Teoría Crítica propone estudiar la sociedad como una totalidad dialéctica,
                  relacionando dimensiones económicas, históricas, psicológicas y culturales.
                  Su matriz combina elementos de Hegel, Marx y Freud y busca descubrir las
                  contradicciones del orden social existente. No pretende ser únicamente descriptiva:
                  posee un interés crítico y emancipatorio. De este proyecto se desprenden la crítica
                  de la razón instrumental, la dialéctica negativa, la crítica de la industria cultural,
                  el análisis de la sociedad unidimensional y la oposición a una ciencia social que
                  trate los hechos como datos neutrales y aislados.
                </p>
              </article>
            </div>
            <div className="ctt-final"><span>Fórmula de estudio</span><strong>contexto histórico + totalidad + dialéctica + crítica de la dominación + horizonte emancipatorio</strong></div>
          </section>
        </article>
      </div>

      <footer className="ctt-footer">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/tareas">Tablero de tareas</Link>
        <span>Tarea I · MMXXVI</span>
      </footer>
    </main>
  )
}
