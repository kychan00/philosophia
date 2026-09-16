import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './AnaliticaClase7Septiembre.css'
import './AnalyticClass09Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'pensamiento', 'Pensamiento ≠ pensar'],
  ['02', 'lenguaje', 'Lenguaje y forma lógica'],
  ['03', 'frege', 'Frege contra la reducción lingüística'],
  ['04', 'platonismo', 'Platonismo y objetividad'],
  ['05', 'verdad', 'Concepto y criterio de verdad'],
  ['06', 'ojo', 'El “ojo de Dios”'],
  ['07', 'kant', 'Fenómeno · noúmeno'],
  ['08', 'pragmatismo', 'Correspondencia · adecuación'],
  ['09', 'sap', 'Sintético a priori'],
  ['10', 'filtros', 'Forma + contenido'],
  ['11', 'espacio', 'Espacio · tiempo · dimensiones'],
  ['12', 'frege-kant', 'Frege frente a Kant'],
  ['13', 'cierre', 'Principio fundamental'],
]

const thoughtViews = [
  {
    id: 'thinking',
    title: 'Pensar',
    subtitle: 'actividad mental',
    body: 'Cómo pensamos, qué ocurre en el cerebro o qué procesos psicológicos acompañan la actividad de pensar pertenece principalmente a disciplinas empíricas como psicología y neurociencias.',
  },
  {
    id: 'thought',
    title: 'Pensamiento',
    subtitle: 'contenido racional',
    body: 'En el sentido fregeano, interesa aquello que puede ser expresado por una proposición y posee una estructura racional que no se reduce al episodio psicológico de pensar.',
  },
]

const truthViews = [
  {
    id: 'concept',
    label: 'CONCEPTO DE VERDAD',
    question: '¿Qué es la verdad?',
    answer: 'Correspondencia entre una representación —o contenido— y la cosa.',
  },
  {
    id: 'criterion',
    label: 'CRITERIO DE VERDAD',
    question: '¿Cómo sé que mi representación corresponde con la cosa?',
    answer: 'Aquí surge el problema: toda comprobación parece seguir ocurriendo desde dentro de la propia conciencia.',
  },
]

const kantFilters = [
  ['01', 'Algo recibido', 'materia / contenido de la experiencia'],
  ['02', 'Sensibilidad', 'espacio · tiempo'],
  ['03', 'Entendimiento', 'categorías · causalidad'],
  ['04', 'Fenómeno', 'lo que aparece bajo esas condiciones'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ac9-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function AnalyticClass09Sep() {
  const [thoughtId, setThoughtId] = useState('thought')
  const [truthId, setTruthId] = useState('criterion')
  const [kantView, setKantView] = useState('phenomenon')
  const [dimension, setDimension] = useState('3D')

  const thought = useMemo(
    () => thoughtViews.find((item) => item.id === thoughtId) || thoughtViews[1],
    [thoughtId],
  )

  const truth = useMemo(
    () => truthViews.find((item) => item.id === truthId) || truthViews[1],
    [truthId],
  )

  return (
    <main className="ac7-page ac9-page">
      <nav className="ac9-topbar">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="ac9-brand">Φ · Philosophia</Link>
        <span>IX · IX · MMXXVI</span>
      </nav>

      <header className="ac9-hero">
        <div className="ac9-grid" aria-hidden="true" />
        <div className="ac9-ghost" aria-hidden="true">Gedanke</div>

        <div className="ac9-hero-inner">
          <div>
            <p className="ac9-kicker">FI264 · Séptima clase · 9 de septiembre de 2026</p>
            <h1>
              Frege, Kant y
              <em>la objetividad del pensamiento</em>
            </h1>
            <p className="ac9-lead">
              La discusión parte de Hacker y Frege: el pensamiento no se reduce
              al acto psicológico de pensar ni al lenguaje natural. Desde ahí la
              clase abre el problema de la verdad, el fenómeno kantiano y la
              objetividad lógica y matemática.
            </p>

            <div className="ac9-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                ¿La lógica y la matemática expresan estructuras objetivas en sí
                mismas o condiciones de nuestro modo humano de conocer?
              </strong>
            </div>
          </div>

          <aside className="ac9-hero-schema">
            <span>TENSIÓN CENTRAL</span>
            <div>
              <small>FREGE</small>
              <strong>objetividad lógica</strong>
              <p>El pensamiento posee una estructura racional que no depende de convenciones lingüísticas ni de psicología.</p>
            </div>
            <b>↕</b>
            <div className="active">
              <small>KANT</small>
              <strong>condiciones trascendentales</strong>
              <p>Todo objeto conocido aparece bajo formas y categorías aportadas por el sujeto.</p>
            </div>
          </aside>
        </div>
      </header>

      <div className="ac9-layout">
        <aside className="ac9-index">
          <p>Index analyticorum</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ac9-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula argumenti">
              Del pensamiento fregeano al problema kantiano de la objetividad
            </Heading>

            <div className="ac9-flow">
              <span>pensamiento</span><b>→</b>
              <span>forma lógica</span><b>→</b>
              <span>objetividad</span><b>→</b>
              <span>verdad</span><b>→</b>
              <span>fenómeno</span><b>→</b>
              <span>formas a priori</span><b>→</b>
              <strong>Frege ↔ Kant</strong>
            </div>

            <div className="ac9-thesis">
              <span>IDEA CENTRAL</span>
              <strong>
                La clase pregunta qué permanece cuando quitamos los accidentes
                del lenguaje y, después, si esa estructura racional es objetiva
                en sí misma o depende de las condiciones de nuestro conocer.
              </strong>
            </div>
          </section>

          <section id="pensamiento">
            <Heading n="01" eyebrow="Gedanke">
              “Pensamiento” no significa simplemente la actividad de pensar
            </Heading>

            <div className="ac9-tabs">
              {thoughtViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={thought.id === item.id ? 'active' : ''}
                  onClick={() => setThoughtId(item.id)}
                >
                  <span>{item.title}</span>
                  <strong>{item.subtitle}</strong>
                </button>
              ))}
            </div>

            <article className="ac9-focus">
              <span>{thought.title}</span>
              <h3>{thought.subtitle}</h3>
              <p>{thought.body}</p>
            </article>
          </section>

          <section id="lenguaje">
            <Heading n="02" eyebrow="Forma logica">
              La oración expresa el pensamiento, pero no es idéntica a él
            </Heading>

            <div className="ac9-example">
              <span>ORACIÓN</span>
              <h3>“Las palomas son blancas.”</h3>
              <div>
                <strong>paloma</strong><b>→</b><strong>x</strong>
                <span>·</span>
                <strong>blanco</strong><b>→</b><strong>P(x)</strong>
              </div>
              <p>
                Al sustituir vocabulario concreto, interesa qué relación formal
                permanece. La filosofía analítica no se reduce por ello a analizar
                oraciones: la lógica busca la estructura racional detrás de ellas.
              </p>
            </div>
          </section>

          <section id="frege">
            <Heading n="03" eyebrow="Frege">
              La lógica es ciencia de las leyes del pensamiento, no del lenguaje
            </Heading>

            <div className="ac9-binary">
              <article>
                <span>LENGUAJE NATURAL</span>
                <strong>historia · ambigüedad · convención · gramática</strong>
                <p>Puede ocultar o “encasillar” la estructura racional.</p>
              </article>
              <b>≠</b>
              <article className="active">
                <span>LÓGICA</span>
                <strong>forma · relación · validez · estructura</strong>
                <p>Busca desocultar aquello que permanece detrás de expresiones particulares.</p>
              </article>
            </div>

            <div className="ac9-thesis">
              <span>FUNCIÓN FILOSÓFICA</span>
              <strong>Romper el dominio de la palabra sobre el pensamiento.</strong>
            </div>
          </section>

          <section id="platonismo">
            <Heading n="04" eyebrow="Platonismus">
              El platonismo permite a Frege defender pensamiento y verdad objetivos
            </Heading>

            <div className="ac9-three">
              <article>
                <span>NO PSICOLOGÍA</span>
                <h3>pensar ≠ pensamiento</h3>
                <p>Una verdad no depende del episodio mental de un sujeto particular.</p>
              </article>
              <article className="active">
                <span>OBJETIVIDAD</span>
                <h3>relaciones lógicas</h3>
                <p>La forma racional no depende de una lengua concreta ni de una comunidad.</p>
              </article>
              <article>
                <span>MATEMÁTICA</span>
                <h3>verdad en sí</h3>
                <p>Una verdad matemática aspira a universalidad, atemporalidad e independencia.</p>
              </article>
            </div>
          </section>

          <section id="verdad">
            <Heading n="05" eyebrow="Veritas">
              Concepto de verdad y criterio de verdad son problemas distintos
            </Heading>

            <div className="ac9-tabs">
              {truthViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={truth.id === item.id ? 'active' : ''}
                  onClick={() => setTruthId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <article className="ac9-focus">
              <span>{truth.label}</span>
              <h3>{truth.question}</h3>
              <p>{truth.answer}</p>
            </article>
          </section>

          <section id="ojo">
            <Heading n="06" eyebrow="Deus oculus">
              Una correspondencia absoluta parece exigir una perspectiva externa
            </Heading>

            <div className="ac9-eye">
              <div>
                <span>01</span>
                <strong>representación</strong>
                <p>lo que aparece en mi conciencia</p>
              </div>
              <b>?</b>
              <div>
                <span>02</span>
                <strong>cosa en sí</strong>
                <p>lo que existiría independientemente de mí</p>
              </div>
              <b>→</b>
              <div className="active">
                <span>03</span>
                <strong>“ojo de Dios”</strong>
                <p>un supuesto tercer punto capaz de comparar ambas desde fuera</p>
              </div>
            </div>

            <div className="ac9-warning">
              <span>REGRESO</span>
              <strong>
                Si una tercera perspectiva certifica la correspondencia,
                todavía podríamos preguntar quién certifica a esa perspectiva.
              </strong>
            </div>
          </section>

          <section id="kant">
            <Heading n="07" eyebrow="Kant">
              El noúmeno permanece fuera del acceso directo; trabajamos con fenómenos
            </Heading>

            <div className="ac9-tabs">
              <button
                type="button"
                className={kantView === 'noumenon' ? 'active' : ''}
                onClick={() => setKantView('noumenon')}
              >
                Noúmeno
              </button>
              <button
                type="button"
                className={kantView === 'phenomenon' ? 'active' : ''}
                onClick={() => setKantView('phenomenon')}
              >
                Fenómeno
              </button>
            </div>

            <article className="ac9-focus">
              <span>{kantView === 'phenomenon' ? 'FENÓMENO' : 'NOÚMENO / COSA EN SÍ'}</span>
              <h3>
                {kantView === 'phenomenon'
                  ? 'Aquello que aparece bajo las condiciones de nuestra conciencia.'
                  : 'Aquello que existiría independientemente de nuestro modo de aparecer.'}
              </h3>
              <p>
                {kantView === 'phenomenon'
                  ? 'Es el ámbito con el que efectivamente trabajamos en conocimiento e investigación.'
                  : 'No puede compararse directamente con la representación desde una posición exterior a toda experiencia.'}
              </p>
            </article>
          </section>

          <section id="pragmatismo">
            <Heading n="08" eyebrow="Adequatio">
              Un modelo puede funcionar sin ser una copia perfecta de la realidad
            </Heading>

            <div className="ac9-metro">
              <div className="ac9-line l1" />
              <div className="ac9-line l2" />
              <div className="ac9-station s1" />
              <div className="ac9-station s2" />
              <div className="ac9-station s3" />
              <span>MAPA ESQUEMÁTICO</span>
            </div>

            <div className="ac9-binary">
              <article>
                <span>CORRESPONDENCIA</span>
                <strong>¿representa exactamente cómo es la realidad?</strong>
              </article>
              <b>↔</b>
              <article className="active">
                <span>ADECUACIÓN FUNCIONAL</span>
                <strong>¿permite orientarse, predecir o actuar con éxito?</strong>
              </article>
            </div>
          </section>

          <section id="sap">
            <Heading n="09" eyebrow="Kant · iudicia">
              Los juicios sintéticos a priori muestran por qué el sujeto importa
            </Heading>

            <div className="ac9-judgments">
              <article>
                <span>ANALÍTICO A PRIORI</span>
                <h3>Todo triángulo tiene tres lados.</h3>
                <p>Necesario, pero el predicado ya está contenido en el sujeto.</p>
              </article>
              <article>
                <span>SINTÉTICO A POSTERIORI</span>
                <h3>Las palomas son blancas.</h3>
                <p>Amplía el conocimiento, pero requiere experiencia.</p>
              </article>
              <article className="active">
                <span>SINTÉTICO A PRIORI</span>
                <h3>amplía + necesidad</h3>
                <p>Es posible porque conocer combina algo recibido con estructuras aportadas por el sujeto.</p>
              </article>
            </div>
          </section>

          <section id="filtros">
            <Heading n="10" eyebrow="Forma · contentum">
              Conocer no es copiar: es recibir y organizar
            </Heading>

            <div className="ac9-filter-chain">
              {kantFilters.map(([n, title, note], index) => (
                <div key={n}>
                  <span>{n}</span>
                  <strong>{title}</strong>
                  <p>{note}</p>
                  {index < kantFilters.length - 1 && <b>→</b>}
                </div>
              ))}
            </div>

            <div className="ac9-thesis">
              <span>PRINCIPIO</span>
              <strong>
                Todo conocimiento contiene algo aportado por la experiencia y
                algo aportado por la forma de conocer del sujeto.
              </strong>
            </div>
          </section>

          <section id="espacio">
            <Heading n="11" eyebrow="Spatium · tempus">
              Espacio y tiempo ordenan la multiplicidad de la experiencia
            </Heading>

            <div className="ac9-dimensions">
              {['2D', '3D', '4D', 'nD'].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={dimension === item ? 'active' : ''}
                  onClick={() => setDimension(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <article className="ac9-dimension-focus">
              <span>MODELO · {dimension}</span>
              <h3>
                {dimension === '3D'
                  ? 'Nuestra experiencia ordinaria aparece espacialmente tridimensional.'
                  : dimension === '2D'
                    ? 'Podemos formalizar dos dimensiones aunque nuestra experiencia corporal no se reduzca a ellas.'
                    : dimension === '4D'
                      ? 'Podemos construir modelos de cuatro dimensiones sin percibir literalmente una cuarta dimensión.'
                      : 'La matemática puede trabajar formalmente con n dimensiones.'}
              </h3>
              <p>
                La pregunta kantiana permanece: ¿la matemática describe el mundo
                absolutamente o las condiciones bajo las cuales nosotros podemos representarlo?
              </p>
            </article>
          </section>

          <section id="frege-kant">
            <Heading n="12" eyebrow="Conflictus">
              Frege necesita escapar de una objetividad dependiente del sujeto
            </Heading>

            <div className="ac9-versus">
              <article>
                <span>KANT</span>
                <h3>objetividad para sujetos trascendentales</h3>
                <p>
                  Matemática y experiencia se articulan mediante formas y
                  categorías que pertenecen a nuestra estructura cognoscitiva.
                </p>
              </article>
              <b>VS</b>
              <article className="active">
                <span>FREGE</span>
                <h3>objetividad lógica y matemática en sí</h3>
                <p>
                  La verdad matemática no puede reducirse a “así funciona la mente humana”.
                  Debe ser universal, atemporal e independiente.
                </p>
              </article>
            </div>

            <div className="ac9-question">
              <span>PREGUNTA FILOSÓFICA</span>
              <strong>
                ¿Una verdad matemática es verdadera porque expresa la realidad
                en sí o porque expresa necesariamente nuestro modo de conocer?
              </strong>
            </div>
          </section>

          <section id="cierre">
            <Heading n="13" eyebrow="Conclusio">
              El sujeto participa en la constitución de aquello que aparece
            </Heading>

            <div className="ac9-final">
              <span>PRINCIPIO FUNDAMENTAL DE LA SESIÓN</span>
              <strong>
                Cualquier representación y cualquier conocimiento resultan de
                una combinación entre aquello que recibimos y la forma mediante
                la cual el sujeto lo organiza.
              </strong>
              <p>
                Desde aquí se entiende por qué Frege, como matemático platónico,
                busca una objetividad que no dependa de esa constitución subjetiva.
              </p>
            </div>

            <div className="ac9-task">
              <span>TAREA / CALENDARIO</span>
              <strong>No se indicó una tarea nueva en esta sesión.</strong>
              <p>
                El calendario ya registra el reporte de lectura de Føllesdal,
                asignado el 2 de septiembre y con entrega el 9 de septiembre.
                Esta clase no añade una nueva entrega.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="ac9-footer">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <span>Gedanke · Wahrheit · Objektivität</span>
        <span>IX · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
