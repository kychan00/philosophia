import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './OntologiaClass07Sep.css'
import './OntologiaClass09Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la clase'],
  ['01', 'puro', 'Empírico · puro'],
  ['02', 'objeto', 'Del ser al conocimiento'],
  ['03', 'limites', 'Alcances y límites'],
  ['04', 'juicios', 'Analítico · sintético'],
  ['05', 'sap', 'Sintético a priori'],
  ['06', 'tiempo', '7 + 5 = 12 · tiempo'],
  ['07', 'espacio', 'Espacio · geometría'],
  ['08', 'facultades', 'Sensibilidad · entendimiento'],
  ['09', 'arquitectura', 'Arquitectura de la Crítica'],
  ['10', 'causalidad', 'Causalidad · categoría'],
  ['11', 'sujeto', 'Sujeto trascendental'],
  ['12', 'ia', 'IA · datos · contingencia'],
  ['13', 'cierre', 'Materia y forma'],
]

const judgments = [
  {
    id: 'analytic',
    label: 'ANALÍTICO',
    example: 'Todo triángulo tiene tres lados.',
    predicate: 'El predicado está contenido en el concepto del sujeto.',
    truth: 'Su negación implica contradicción.',
    status: 'a priori · universal · necesario',
    gain: 'No amplía el conocimiento del mismo modo que un sintético.',
  },
  {
    id: 'synthetic',
    label: 'SINTÉTICO EMPÍRICO',
    example: 'Algunas plantas son venenosas.',
    predicate: 'El predicado añade una determinación no contenida por análisis.',
    truth: 'Su verdad exige acudir a la experiencia.',
    status: 'a posteriori · contingente',
    gain: 'Amplía el conocimiento.',
  },
  {
    id: 'sap',
    label: 'SINTÉTICO A PRIORI',
    example: '7 + 5 = 12.',
    predicate: 'Amplía, pero reclama necesidad y universalidad.',
    truth: 'No deriva simplemente de observar casos particulares.',
    status: 'a priori · universal · necesario',
    gain: 'Es el problema central para explicar matemática y física.',
  },
]

const architecture = [
  {
    id: 'aesthetic',
    roman: 'I',
    name: 'Estética trascendental',
    faculty: 'Sensibilidad',
    elements: 'espacio · tiempo',
    science: 'matemática',
    question: '¿Cómo puede algo sernos dado?',
  },
  {
    id: 'analytic',
    roman: 'II',
    name: 'Analítica trascendental',
    faculty: 'Entendimiento',
    elements: 'conceptos puros · categorías · causalidad',
    science: 'física / naturaleza',
    question: '¿Cómo puede lo dado ser pensado como objeto?',
  },
  {
    id: 'dialectic',
    roman: 'III',
    name: 'Dialéctica trascendental',
    faculty: 'Razón',
    elements: 'Dios · alma · mundo',
    science: 'metafísica criticada',
    question: '¿Qué ocurre cuando la razón rebasa la experiencia?',
  },
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ontsep7-heading ontsep9-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function OntologiaClass09Sep() {
  const [judgmentId, setJudgmentId] = useState('sap')
  const [architectureId, setArchitectureId] = useState('aesthetic')
  const [timeView, setTimeView] = useState('kant')
  const [knowledgeView, setKnowledgeView] = useState('pure')

  const judgment = useMemo(
    () => judgments.find((item) => item.id === judgmentId) || judgments[2],
    [judgmentId],
  )

  const architectureStep = useMemo(
    () => architecture.find((item) => item.id === architectureId) || architecture[0],
    [architectureId],
  )

  return (
    <main className="ontsep7-page ontsep9-page">
      <nav className="ontsep7-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="ontsep7-brand">Φ · Philosophia</Link>
        <span>IX · IX · MMXXVI</span>
      </nav>

      <header className="ontsep7-hero ontsep9-hero">
        <div className="ontsep7-grid" aria-hidden="true" />
        <div className="ontsep7-ghost ontsep9-ghost" aria-hidden="true">synthetisch</div>

        <div className="ontsep7-hero-inner">
          <div>
            <p className="ontsep7-kicker">FI190 · Ontología II · 9 de septiembre de 2026</p>
            <h1>
              Kant:
              <em>juicios y condiciones del conocer</em>
            </h1>
            <p className="ontsep7-lead">
              La Introducción de la <em>Crítica de la razón pura</em> concentra
              el problema: explicar cómo puede haber conocimiento que amplía lo
              que sabemos y, sin embargo, reclama necesidad y universalidad.
            </p>

            <div className="ontsep7-question">
              <span>PREGUNTA RECTORA</span>
              <strong>¿Cómo son posibles los juicios sintéticos a priori?</strong>
            </div>

            <div className="ontsep7-hero-actions">
              <button type="button" onClick={() => goToSection('mapa')}>
                Recorrer la clase ↓
              </button>
              <Link to="/tareas/ontologia-ii/kant-critica-razon-pura-introduccion">
                Abrir mapa de la Introducción ↗
              </Link>
              <Link to="/tareas/ontologia-ii/kant-critica-razon-pura-estetica-trascendental">
                Abrir Estética trascendental ↗
              </Link>
            </div>
          </div>

          <aside className="ontsep7-hero-schema ontsep9-schema">
            <span>NÚCLEO DEL PROBLEMA</span>
            <div>
              <small>SINTÉTICO</small>
              <strong>amplía conocimiento</strong>
              <p>El predicado añade algo que no estaba dado por mero análisis.</p>
            </div>
            <b>+</b>
            <div className="active">
              <small>A PRIORI</small>
              <strong>necesidad + universalidad</strong>
              <p>No depende de reunir una serie de observaciones empíricas.</p>
            </div>
            <b>=</b>
            <div>
              <small>PROBLEMA KANTIANO</small>
              <strong>ciencia posible</strong>
              <p>Explicar matemática, física y el límite de la metafísica.</p>
            </div>
          </aside>
        </div>
      </header>

      <div className="ontsep7-layout">
        <aside className="ontsep7-index">
          <p>Index transcendentalis</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ontsep7-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula argumenti">
              De la experiencia a las condiciones a priori del conocimiento
            </Heading>

            <div className="ontsep9-sequence">
              {[
                ['01', 'Experiencia', 'todo conocimiento comienza aquí'],
                ['02', 'A priori', 'no todo procede de ella'],
                ['03', 'Juicios', 'analítico / sintético'],
                ['04', 'Síntesis', '7 + 5 = 12'],
                ['05', 'Formas', 'espacio / tiempo'],
                ['06', 'Categorías', 'causalidad'],
                ['07', 'Límite', 'metafísica'],
              ].map(([n, title, note]) => (
                <article key={n}>
                  <span>{n}</span>
                  <strong>{title}</strong>
                  <p>{note}</p>
                </article>
              ))}
            </div>

            <div className="ontsep7-thesis">
              <span>TESIS DE ARRANQUE</span>
              <strong>
                Todo nuestro conocimiento comienza con la experiencia, pero no
                por ello todo conocimiento procede de la experiencia.
              </strong>
            </div>
          </section>

          <section id="puro">
            <Heading n="01" eyebrow="Puritas">
              “Puro” significa independiente de la experiencia
            </Heading>

            <div className="ontsep7-tabs">
              <button
                type="button"
                className={knowledgeView === 'empirical' ? 'active' : ''}
                onClick={() => setKnowledgeView('empirical')}
              >
                Conocimiento empírico
              </button>
              <button
                type="button"
                className={knowledgeView === 'pure' ? 'active' : ''}
                onClick={() => setKnowledgeView('pure')}
              >
                Conocimiento puro
              </button>
            </div>

            <article className="ontsep7-focus">
              <span>{knowledgeView === 'pure' ? 'PURO' : 'EMPÍRICO'}</span>
              <h3>
                {knowledgeView === 'pure'
                  ? 'Independiente de la experiencia.'
                  : 'Dependiente de la experiencia.'}
              </h3>
              <p>
                {knowledgeView === 'pure'
                  ? 'La Crítica pregunta hasta dónde puede conocer el sujeto independientemente de la experiencia y cuáles son las condiciones que lo hacen posible.'
                  : 'La sensibilidad nos pone en relación con aquello que afecta al sujeto y proporciona la materia sensible del conocimiento.'}
              </p>
            </article>
          </section>

          <section id="objeto">
            <Heading n="02" eyebrow="Transitus">
              De “¿qué es el ser?” a “¿cómo es posible conocer?”
            </Heading>

            <div className="ontsep9-shift">
              <article>
                <span>ARISTÓTELES</span>
                <h3>ser en cuanto ser</h3>
                <p>
                  La filosofía primera investiga los sentidos del ser y remite
                  esa multiplicidad a la ousía o sustancia.
                </p>
              </article>
              <b>→</b>
              <article className="active">
                <span>KANT</span>
                <h3>conocimiento y condiciones de posibilidad</h3>
                <p>
                  Ante el éxito de matemática y física, la pregunta se desplaza
                  hacia las condiciones que permiten conocimiento universal y necesario.
                </p>
              </article>
            </div>

            <div className="ontsep7-callout">
              <span>NUEVO EJE</span>
              <strong>La pregunta filosófica fundamental pasa a ser el conocimiento.</strong>
            </div>
          </section>

          <section id="limites">
            <Heading n="03" eyebrow="Fines cognitionis">
              La crítica determina posibilidad, principios, extensión y límites
            </Heading>

            <div className="ontsep9-four">
              {[
                ['01', 'Posibilidad', '¿cómo puede haber conocimiento a priori?'],
                ['02', 'Principios', '¿qué estructuras lo hacen posible?'],
                ['03', 'Extensión', '¿hasta dónde alcanza?'],
                ['04', 'Límites', '¿qué no puede conocerse teóricamente?'],
              ].map(([n, title, text]) => (
                <article key={n}>
                  <span>{n}</span><strong>{title}</strong><p>{text}</p>
                </article>
              ))}
            </div>

            <div className="ontsep9-limit">
              <span>METAFÍSICA</span>
              <strong>Dios y alma pueden ser pensados, pero no conocidos teóricamente como objetos de experiencia.</strong>
              <p>
                La clase distingue ese límite del uso práctico posterior de estas
                ideas como postulados de la razón práctica.
              </p>
            </div>
          </section>

          <section id="juicios">
            <Heading n="04" eyebrow="Iudicia">
              Analítico, sintético y sintético a priori
            </Heading>

            <div className="ontsep7-tabs">
              {judgments.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={judgment.id === item.id ? 'active' : ''}
                  onClick={() => setJudgmentId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <article className="ontsep7-judgment">
              <span>{judgment.label}</span>
              <h3>{judgment.example}</h3>
              <div>
                <p><small>RELACIÓN</small><strong>{judgment.predicate}</strong></p>
                <p><small>VERDAD</small><strong>{judgment.truth}</strong></p>
                <p><small>ESTATUTO</small><strong>{judgment.status}</strong></p>
              </div>
            </article>

            <div className="ontsep7-callout">
              <span>GANANCIA</span>
              <strong>{judgment.gain}</strong>
            </div>
          </section>

          <section id="sap">
            <Heading n="05" eyebrow="Quaestio cardinalis">
              El corazón de la Introducción es explicar una síntesis necesaria
            </Heading>

            <div className="ontsep9-formula">
              <div>
                <span>SINTÉTICO</span>
                <strong>amplía</strong>
              </div>
              <b>+</b>
              <div>
                <span>A PRIORI</span>
                <strong>necesario · universal</strong>
              </div>
              <b>=</b>
              <div className="active">
                <span>PROBLEMA</span>
                <strong>¿cómo es posible?</strong>
              </div>
            </div>

            <div className="ontsep7-thesis">
              <span>CIENCIAS MODELO</span>
              <strong>
                Matemática y física contienen, según Kant, conocimientos que
                amplían y al mismo tiempo reclaman necesidad y universalidad.
              </strong>
            </div>
          </section>

          <section id="tiempo">
            <Heading n="06" eyebrow="Tempus">
              7 + 5 = 12: la sucesión presupone tiempo
            </Heading>

            <div className="ontsep9-equation">
              <span>7</span><b>+</b><span>5</span><b>=</b><strong>12</strong>
            </div>

            <p className="ontsep9-prose">
              El resultado no aparece simplemente inspeccionando los conceptos
              de 7 y 5: hay que efectuar una síntesis, una sucesión. Esa sucesión
              presupone tiempo.
            </p>

            <div className="ontsep7-tabs">
              <button
                type="button"
                className={timeView === 'aristotle' ? 'active' : ''}
                onClick={() => setTimeView('aristotle')}
              >
                Aristóteles
              </button>
              <button
                type="button"
                className={timeView === 'kant' ? 'active' : ''}
                onClick={() => setTimeView('kant')}
              >
                Kant
              </button>
            </div>

            <article className="ontsep7-focus">
              <span>{timeView === 'kant' ? 'KANT' : 'ARISTÓTELES'}</span>
              <h3>
                {timeView === 'kant'
                  ? 'El tiempo es una intuición pura a priori.'
                  : 'El tiempo es número del movimiento según el antes y el después.'}
              </h3>
              <p>
                {timeView === 'kant'
                  ? 'No se trata primero de una convención de relojes o calendarios, sino de la condición que permite representar una sucesión.'
                  : 'La clase recupera la formulación aristotélica para contrastarla con el giro trascendental kantiano.'}
              </p>
            </article>
          </section>

          <section id="espacio">
            <Heading n="07" eyebrow="Spatium">
              La geometría presupone espacio como forma de la sensibilidad
            </Heading>

            <div className="ontsep9-space">
              <div className="shape square" aria-hidden="true" />
              <div>
                <span>GEOMETRÍA</span>
                <h3>No podemos representar una figura sin espacio.</h3>
                <p>
                  Kant piensa espacio y tiempo no como objetos empíricos más,
                  sino como condiciones fundamentales bajo las cuales algo puede
                  aparecer a nuestra sensibilidad.
                </p>
              </div>
            </div>
          </section>

          <section id="facultades">
            <Heading n="08" eyebrow="Facultates">
              Los objetos nos son dados por la sensibilidad y pensados por el entendimiento
            </Heading>

            <div className="ontsep7-faculties">
              <article>
                <span>SENSIBILIDAD</span>
                <h3>dar</h3>
                <p>Recibe sensaciones. Sus formas puras son espacio y tiempo.</p>
              </article>
              <b>+</b>
              <article>
                <span>ENTENDIMIENTO</span>
                <h3>pensar</h3>
                <p>Opera mediante conceptos y categorías para pensar lo dado como objeto.</p>
              </article>
            </div>

            <div className="ontsep9-result">
              <span>CONOCIMIENTO</span>
              <strong>sensibilidad + entendimiento</strong>
            </div>
          </section>

          <section id="arquitectura">
            <Heading n="09" eyebrow="Architectura">
              La estructura del libro sigue las facultades y sus límites
            </Heading>

            <div className="ontsep7-tabs">
              {architecture.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={architectureStep.id === item.id ? 'active' : ''}
                  onClick={() => setArchitectureId(item.id)}
                >
                  {item.roman} · {item.name}
                </button>
              ))}
            </div>

            <article className="ontsep7-architecture-focus">
              <span>{architectureStep.faculty}</span>
              <h3>{architectureStep.name}</h3>
              <p><strong>{architectureStep.elements}</strong></p>
              <p>{architectureStep.question}</p>
              <div className="ontsep9-science">
                <small>RELACIÓN DESTACADA EN CLASE</small>
                <strong>{architectureStep.science}</strong>
              </div>
            </article>
          </section>

          <section id="causalidad">
            <Heading n="10" eyebrow="Causalitas">
              “Todo fenómeno físico tiene una causa”
            </Heading>

            <div className="ontsep9-cause">
              <article>
                <span>SUJETO</span>
                <strong>fenómeno físico</strong>
              </article>
              <b>→</b>
              <article>
                <span>PREDICADO</span>
                <strong>tiene una causa</strong>
              </article>
            </div>

            <div className="ontsep7-callout">
              <span>CLAVE</span>
              <strong>
                La causalidad no aparece por mero análisis del concepto de
                fenómeno físico: será una categoría del entendimiento.
              </strong>
            </div>
          </section>

          <section id="sujeto">
            <Heading n="11" eyebrow="Subiectum transcendentale">
              Lo a priori no es un dato almacenado “dentro de la cabeza”
            </Heading>

            <div className="ontsep9-windows">
              <article>
                <span>VENTANA I</span>
                <h3>Sensibilidad</h3>
                <p>espacio · tiempo</p>
              </article>
              <article>
                <span>VENTANA II</span>
                <h3>Entendimiento</h3>
                <p>conceptos puros · categorías</p>
              </article>
            </div>

            <div className="ontsep7-thesis">
              <span>CONDICIONES</span>
              <strong>
                “A priori” designa estructuras que hacen posible la experiencia,
                no contenidos psicológicos aprendidos o guardados previamente.
              </strong>
            </div>
          </section>

          <section id="ia">
            <Heading n="12" eyebrow="Exemplum contemporaneum">
              La IA permite volver a preguntar por datos, necesidad y contingencia
            </Heading>

            <div className="ontsep9-ai">
              <article>
                <span>MODELO DE IA</span>
                <strong>datos · metadatos · algoritmos</strong>
                <p>Sintetiza grandes cantidades de información disponible.</p>
              </article>
              <b>≠</b>
              <article className="active">
                <span>PROBLEMA KANTIANO</span>
                <strong>necesidad · universalidad</strong>
                <p>
                  La síntesis de información no resuelve por sí sola cómo puede
                  justificarse conocimiento necesario frente a la contingencia.
                </p>
              </article>
            </div>

            <div className="ontsep7-question">
              <span>PREGUNTA ABIERTA DE LA CLASE</span>
              <strong>
                ¿Puede un sistema que trabaja con información y relaciones
                probabilísticas producir auténtica necesidad y universalidad?
              </strong>
            </div>
          </section>

          <section id="cierre">
            <Heading n="13" eyebrow="Materia · forma">
              El sujeto organiza aquello que recibe
            </Heading>

            <div className="ontsep9-matter">
              <article>
                <span>MATERIA</span>
                <h3>sensación</h3>
                <p>El mundo exterior afecta al sujeto.</p>
              </article>
              <b>+</b>
              <article className="active">
                <span>FORMA</span>
                <h3>espacio · tiempo</h3>
                <p>La sensibilidad organiza lo recibido bajo condiciones a priori.</p>
              </article>
              <b>→</b>
              <article>
                <span>PROBLEMA</span>
                <h3>experiencia posible</h3>
                <p>¿Cómo organiza el sujeto aquello que recibe?</p>
              </article>
            </div>

            <div className="ontsep7-final">
              <span>SIGUIENTE PASO</span>
              <strong>
                La próxima clase continúa con la primera parte: la Estética
                trascendental y el análisis de espacio y tiempo.
              </strong>
            </div>
          </section>
        </article>
      </div>

      <footer className="ontology-program-footer ontsep9-footer">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <span>sensibilitas · intellectus · ratio</span>
        <span>IX · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
