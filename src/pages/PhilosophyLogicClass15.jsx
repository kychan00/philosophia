import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass15.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','problema','El problema kantiano'],
  ['02','forma-materia','Forma y materia'],
  ['03','proposiciones','Tres tipos de proposición'],
  ['04','epistemologia','Problemas epistemológicos'],
  ['05','determinacion','¿Quién determina?'],
  ['06','copernicana','Revolución copernicana'],
  ['07','sintetico-apriori','Sintético a priori'],
  ['08','intuicion','Intuición y discurso'],
  ['09','matematicas','Espacio, tiempo y matemáticas'],
  ['10','categorias','Las 12 categorías'],
  ['11','trascendental','Trascendente / trascendental'],
  ['12','necesidad','Necesidad y sujeto'],
  ['13','platon','Kant frente a Platón'],
  ['14','cierre','Síntesis docente'],
]

const route = [
  ['1','Recibir el problema','Leibniz explica necesidad por analiticidad; Kant pregunta cómo puede haber necesidad que también amplíe conocimiento.'],
  ['2','Reformular conocer','El conocimiento resulta de materia sensible organizada por formas a priori del sujeto.'],
  ['3','Clasificar','Analítico/sintético y a priori/a posteriori son distinciones distintas que deben cruzarse cuidadosamente.'],
  ['4','Invertir','La revolución copernicana hace que los objetos de experiencia deban ajustarse a condiciones del sujeto.'],
  ['5','Fundar','Espacio, tiempo y categorías permiten pensar juicios sintéticos a priori y experiencia objetiva.'],
]

const propositionModes = [
  {
    id:'analytic',
    mark:'A / a priori',
    title:'Analítica a priori',
    example:'Todo cuerpo es extenso.',
    structure:'predicado contenido en el sujeto',
    gain:'no amplía de modo sintético',
    necessity:'necesaria',
    text:'La negación implica contradicción; la justificación no requiere acudir a experiencia sensible.',
  },
  {
    id:'synthetic-post',
    mark:'S / a post.',
    title:'Sintética a posteriori',
    example:'Esta mesa es café.',
    structure:'predicado añade contenido',
    gain:'amplía conocimiento',
    necessity:'contingente',
    text:'Para decidirla hay que mirar la experiencia. El color no pertenece necesariamente al concepto de mesa.',
  },
  {
    id:'synthetic-prior',
    mark:'S / a priori',
    title:'Sintética a priori',
    example:'Geometría / aritmética',
    structure:'añade conocimiento sin depender de caso empírico particular',
    gain:'amplía conocimiento',
    necessity:'necesaria',
    text:'Es la combinación decisiva de Kant: conocimiento ampliativo que, sin embargo, expresa condiciones universales de experiencia posible.',
  },
]

const epistemology = [
  {
    id:'possibility',
    mark:'01',
    title:'Posibilidad',
    question:'¿Es posible el conocimiento?',
    answer:'Sí, bajo condiciones a priori que hacen posible una experiencia objetiva.',
  },
  {
    id:'origin',
    mark:'02',
    title:'Origen',
    question:'¿De dónde viene el conocimiento?',
    answer:'Empieza con la experiencia, pero no todo procede de ella: materia sensible + forma a priori.',
  },
  {
    id:'essence',
    mark:'03',
    title:'Esencia',
    question:'¿Qué es el conocimiento?',
    answer:'Una representación objetiva constituida por síntesis de materia sensible y formas del sujeto.',
  },
  {
    id:'determination',
    mark:'04',
    title:'Determinación',
    question:'¿Quién determina la representación?',
    answer:'Kant evita reducirla unilateralmente al objeto o al sujeto: ambos cumplen funciones distintas.',
  },
]

const determinationModes = [
  {
    id:'object',
    mark:'O',
    title:'Objetivismo',
    formula:'objeto → sujeto',
    text:'La representación queda determinada principalmente por el objeto; el sujeto aparece como receptor más bien pasivo.',
  },
  {
    id:'subject',
    mark:'S',
    title:'Subjetivismo',
    formula:'sujeto → representación',
    text:'La representación se explica desde la estructura del sujeto. La clase advierte que Kant no equivale a un subjetivismo arbitrario.',
  },
  {
    id:'kant',
    mark:'K',
    title:'Síntesis kantiana',
    formula:'materia + forma → experiencia',
    text:'El objeto aporta contenido sensible y el sujeto aporta las condiciones a priori que lo organizan.',
  },
]

const cognitionModes = [
  {
    id:'intuition',
    mark:'I',
    title:'Intuición',
    tempo:'inmediata',
    means:'espacio + tiempo',
    text:'Modo inmediato en que algo nos es dado. Para seres humanos, toda intuición sensible está estructurada espacial y temporalmente.',
  },
  {
    id:'discursive',
    mark:'D',
    title:'Pensamiento discursivo',
    tempo:'mediato',
    means:'conceptos + categorías',
    text:'Opera mediante conceptos, juicios y categorías. No sólo recibe: organiza conceptualmente aquello que aparece.',
  },
]

const transcendentalModes = [
  {
    id:'transcendent',
    mark:'↑',
    title:'Trascendente',
    definition:'más allá de toda experiencia posible',
    examples:'Dios · alma inmortal · mundo como totalidad absoluta',
    text:'No designa una condición de experiencia, sino aquello que rebasa el campo de objetos que podrían darse en experiencia.',
  },
  {
    id:'transcendental',
    mark:'⌘',
    title:'Trascendental',
    definition:'condición de posibilidad de la experiencia',
    examples:'espacio · tiempo · categorías',
    text:'No significa místico o divino. Nombra aquello que hace posible que tengamos experiencia objetiva.',
  },
]

const categories = [
  ['CANTIDAD','Unidad','Pluralidad','Totalidad'],
  ['CUALIDAD','Realidad','Negación','Limitación'],
  ['RELACIÓN','Sustancia / accidente','Causa / efecto','Comunidad'],
  ['MODALIDAD','Posibilidad / imposibilidad','Existencia / no existencia','Necesidad / contingencia'],
]

const comparison = [
  ['Lugar de la necesidad','Ideas independientes del sujeto','estructura a priori del sujeto cognoscente'],
  ['Relación con experiencia','la necesidad no se extrae de lo sensible','la experiencia aporta materia, pero no la forma universal'],
  ['Forma fundamental','eidos inteligible','espacio · tiempo · categorías'],
  ['Acceso','ascenso racional hacia la Idea','condiciones universales de nuestra experiencia'],
  ['Independencia del sujeto','sí, en sentido fuerte','no respecto de la estructura cognoscente humana'],
  ['Resultado','objetividad ideal','objetividad trascendental'],
]

const scrollTo = id =>
  document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

function SectionTitle({number,eyebrow,children}) {
  return (
    <div className="flc1-section-title">
      <span>{number}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function PhilosophyLogicClass15() {
  const [propositionId,setPropositionId] = useState('synthetic-prior')
  const [epistemologyId,setEpistemologyId] = useState('origin')
  const [determinationId,setDeterminationId] = useState('kant')
  const [cognitionId,setCognitionId] = useState('intuition')
  const [transcendentalId,setTranscendentalId] = useState('transcendental')

  const proposition = useMemo(
    () => propositionModes.find(x=>x.id===propositionId) || propositionModes[2],
    [propositionId],
  )
  const episteme = useMemo(
    () => epistemology.find(x=>x.id===epistemologyId) || epistemology[1],
    [epistemologyId],
  )
  const determination = useMemo(
    () => determinationModes.find(x=>x.id===determinationId) || determinationModes[2],
    [determinationId],
  )
  const cognition = useMemo(
    () => cognitionModes.find(x=>x.id===cognitionId) || cognitionModes[0],
    [cognitionId],
  )
  const transcendental = useMemo(
    () => transcendentalModes.find(x=>x.id===transcendentalId) || transcendentalModes[1],
    [transcendentalId],
  )

  return (
    <main className="flc1-page flc15-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>15 · IV · 2026</span>
      </nav>

      <header className="flc1-hero flc15-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>A/S</span><span>a priori</span><span>Σ</span><span>space</span><span>time</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 15 · Segundo parcial</p>
          <h1>Kant, conocimiento <em>y sintético a priori</em></h1>
          <p className="flc1-lead">
            La sesión desarrolla la respuesta kantiana al problema heredado de Leibniz:
            cómo puede existir conocimiento necesario que no sea una simple repetición
            analítica. La clave será entender al sujeto como activo y la experiencia
            como síntesis de materia sensible y formas a priori.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Cómo puede algo ampliar nuestro conocimiento y, sin embargo, ser necesario antes de una experiencia empírica particular?</strong>
          <small>Forma + materia → revolución copernicana → sintético a priori.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XV</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              De la trivialidad analítica a las condiciones de experiencia
            </SectionTitle>

            <div className="flc15-route">
              {route.map(([n,t,x])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}
            </div>

            <div className="flc15-master">
              <span>LEIBNIZ</span><b>→</b>
              <span>KANT</span><b>→</b>
              <span>SUJETO ACTIVO</span><b>→</b>
              <span>SINTÉTICO A PRIORI</span><b>→</b>
              <span>EXPERIENCIA POSIBLE</span>
            </div>

            <LogicFigureNote
              noteId="15-ruta"
              what="El argumento completo de la sesión desde el problema heredado de Leibniz hasta la solución trascendental."
              how="Cada paso responde al anterior. La dificultad con la analiticidad conduce a revisar qué es conocer; la nueva teoría del sujeto permite después explicar lo sintético a priori."
              why="La sesión tiene muchas distinciones. Esta línea muestra que todas forman parte de una misma respuesta."
              takeaway="Kant explica la necesidad desplazando el foco desde contenidos conceptuales aislados hacia condiciones a priori de experiencia."
            />
          </section>

          <section id="problema" className="flc1-section">
            <SectionTitle number="01" eyebrow="Problema criticum">
              Necesidad sin trivialidad
            </SectionTitle>

            <div className="flc15-problem">
              <article>
                <span>ANALÍTICO</span>
                <strong>necesario</strong>
                <p>Pero parece limitarse a explicitar lo ya contenido en el concepto.</p>
              </article>
              <div>VS.</div>
              <article>
                <span>SINTÉTICO EMPÍRICO</span>
                <strong>amplía conocimiento</strong>
                <p>Pero depende de experiencia y por eso parece contingente.</p>
              </article>
              <div>?</div>
              <article className="dark">
                <span>KANT</span>
                <strong>sintético a priori</strong>
                <p>¿Puede reunir ampliación y necesidad?</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="15-problema"
              what="La tensión que hace necesaria la propuesta kantiana."
              how="Las primeras dos cajas presentan ventajas separadas: necesidad o ampliación. La tercera pregunta si ambas pueden coincidir en un mismo tipo de juicio."
              why="Sin este problema, 'sintético a priori' parecería una clasificación arbitraria."
              takeaway="Kant busca conocimiento que añada contenido sin depender de una experiencia empírica particular."
            />
          </section>

          <section id="forma-materia" className="flc1-section">
            <SectionTitle number="02" eyebrow="Forma + materia">
              El conocimiento no es copia: es síntesis
            </SectionTitle>

            <div className="flc15-form-matter">
              <article>
                <span>MATERIA</span>
                <strong>información sensorial</strong>
                <small>proviene de la sensibilidad</small>
              </article>
              <b>+</b>
              <article>
                <span>FORMA</span>
                <strong>estructuras a priori</strong>
                <small>la aporta el sujeto</small>
              </article>
              <b>→</b>
              <article className="dark">
                <span>CONOCIMIENTO</span>
                <strong>experiencia objetiva</strong>
                <small>síntesis organizada</small>
              </article>
            </div>

            <div className="flc15-double-warning">
              <article><span>SIN MATERIA</span><strong>formas vacías</strong></article>
              <article><span>SIN FORMA</span><strong>datos sin organización objetiva</strong></article>
            </div>

            <LogicFigureNote
              noteId="15-forma-materia"
              what="La estructura básica del conocimiento según la reconstrucción de la clase."
              how="Materia y forma no compiten por ser el único origen. Cumplen funciones distintas y se necesitan mutuamente para producir experiencia objetiva."
              why="Esta síntesis permite a Kant evitar tanto un modelo de sujeto completamente pasivo como una creación arbitraria del mundo por la mente."
              takeaway="La sensibilidad aporta contenido; el sujeto aporta las condiciones bajo las que ese contenido puede convertirse en experiencia."
            />
          </section>

          <section id="proposiciones" className="flc1-section">
            <SectionTitle number="03" eyebrow="Tria genera">
              Tres combinaciones que ordenan el problema
            </SectionTitle>

            <div className="flc15-tabs three">
              {propositionModes.map(item=>(
                <button type="button" key={item.id} className={item.id===propositionId?'is-active':''} onClick={()=>setPropositionId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc15-reader blue">
              <div>
                <span>{proposition.mark}</span>
                <h3>{proposition.title}</h3>
                <blockquote>{proposition.example}</blockquote>
              </div>
              <div>
                <small>{proposition.necessity}</small>
                <strong>{proposition.structure}</strong>
                <em>{proposition.gain}</em>
                <p>{proposition.text}</p>
              </div>
            </div>

            <LogicFigureNote
              noteId="15-proposiciones"
              what="La clasificación que permite separar relación conceptual, fuente de justificación y modalidad."
              how="No confunda 'sintético' con 'a posteriori'. El tercer botón existe precisamente para mostrar que Kant rompe esa identificación automática."
              why="La posibilidad de lo sintético a priori es el núcleo de la solución kantiana."
              takeaway="Analítico/sintético y a priori/a posteriori son ejes distintos y pueden combinarse."
            />
          </section>

          <section id="epistemologia" className="flc1-section">
            <SectionTitle number="04" eyebrow="Quattuor quaestiones">
              Los problemas epistemológicos que organiza la clase
            </SectionTitle>

            <div className="flc15-tabs four">
              {epistemology.map(item=>(
                <button type="button" key={item.id} className={item.id===epistemologyId?'is-active':''} onClick={()=>setEpistemologyId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc15-reader violet">
              <div>
                <span>{episteme.mark}</span>
                <h3>{episteme.title}</h3>
                <blockquote>{episteme.question}</blockquote>
              </div>
              <p>{episteme.answer}</p>
            </div>

            <LogicFigureNote
              noteId="15-epistemologia"
              what="Cuatro preguntas distintas que la clase usa para ubicar el problema kantiano."
              how="Cambie de panel y observe que no preguntan lo mismo: posibilidad, origen, esencia y determinación atacan aspectos diferentes del conocimiento."
              why="Separarlas evita responder 'de dónde viene' cuando en realidad se pregunta 'qué es' o 'bajo qué condiciones es posible'."
              takeaway="Una teoría del conocimiento completa debe distinguir condiciones, fuentes, naturaleza y relación sujeto-objeto."
            />
          </section>

          <section id="determinacion" className="flc1-section">
            <SectionTitle number="05" eyebrow="Subiectum et obiectum">
              ¿Quién determina la representación?
            </SectionTitle>

            <div className="flc15-tabs three">
              {determinationModes.map(item=>(
                <button type="button" key={item.id} className={item.id===determinationId?'is-active':''} onClick={()=>setDeterminationId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc15-reader green">
              <div><span>{determination.mark}</span><h3>{determination.title}</h3><code>{determination.formula}</code></div>
              <p>{determination.text}</p>
            </div>

            <LogicFigureNote
              noteId="15-determinacion"
              what="Tres maneras de distribuir la función del sujeto y del objeto en el conocimiento."
              how="Los dos primeros botones presentan polos unilaterales. El tercero conserva una contribución real del mundo y otra del sujeto."
              why="La sesión usa esta comparación para aclarar que Kant no sostiene que cada individuo invente privadamente su realidad."
              takeaway="La síntesis kantiana rechaza tanto la pura recepción como la pura fabricación arbitraria."
            />
          </section>

          <section id="copernicana" className="flc1-section">
            <SectionTitle number="06" eyebrow="Conversio Copernicana">
              Los objetos de experiencia se ajustan a las condiciones del conocer
            </SectionTitle>

            <div className="flc15-copernican">
              <article>
                <span>ANTES</span>
                <strong>sujeto → debe ajustarse → objeto</strong>
                <p>El conocimiento busca copiar correctamente algo ya completamente determinado.</p>
              </article>
              <b>⇄</b>
              <article className="dark">
                <span>KANT</span>
                <strong>objeto de experiencia → condiciones del sujeto</strong>
                <p>Conocemos los objetos tal como aparecen bajo nuestras condiciones a priori.</p>
              </article>
            </div>

            <div className="flc15-copernican-quote">
              <span>FÓRMULA DE LA CLASE</span>
              <strong>Conocemos a priori de las cosas aquello que nosotros mismos aportamos como condición de experiencia.</strong>
            </div>

            <LogicFigureNote
              noteId="15-copernicana"
              what="La inversión metodológica que la clase identifica como revolución copernicana."
              how="No significa que el sujeto cree físicamente los objetos. Significa que todo objeto cognoscible para nosotros aparece ya bajo condiciones de nuestra facultad de conocer."
              why="Esta inversión explica cómo puede haber conocimiento a priori sobre objetos de experiencia."
              takeaway="La necesidad conocida a priori proviene de condiciones universales con las que el sujeto estructura toda experiencia posible."
            />
          </section>

          <section id="sintetico-apriori" className="flc1-section">
            <SectionTitle number="07" eyebrow="Synthesis ante experientiam">
              Qué hace especial a un juicio sintético a priori
            </SectionTitle>

            <div className="flc15-sap">
              <article><span>SINTÉTICO</span><strong>amplía</strong><p>el predicado no es mera repetición del concepto</p></article>
              <b>+</b>
              <article><span>A PRIORI</span><strong>no depende</strong><p>de una experiencia empírica particular</p></article>
              <b>=</b>
              <article className="dark"><span>RESULTADO</span><strong>necesario</strong><p>condición universal de experiencia posible</p></article>
            </div>

            <LogicFigureNote
              noteId="15-sintetico-apriori"
              what="La composición conceptual de la tesis central kantiana."
              how="Cada columna aporta una propiedad distinta. La combinación no elimina ninguna: el juicio añade conocimiento y conserva necesidad."
              why="La sesión entera está orientada a justificar por qué esa combinación no es contradictoria."
              takeaway="Lo sintético a priori es posible si la necesidad procede de condiciones del sujeto y no sólo de identidad conceptual."
            />
          </section>

          <section id="intuicion" className="flc1-section">
            <SectionTitle number="08" eyebrow="Intuitio et intellectus">
              Conocimiento inmediato y pensamiento discursivo
            </SectionTitle>

            <div className="flc15-tabs two">
              {cognitionModes.map(item=>(
                <button type="button" key={item.id} className={item.id===cognitionId?'is-active':''} onClick={()=>setCognitionId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc15-reader red">
              <div>
                <span>{cognition.mark}</span>
                <h3>{cognition.title}</h3>
                <small>{cognition.tempo}</small>
                <code>{cognition.means}</code>
              </div>
              <p>{cognition.text}</p>
            </div>

            <LogicFigureNote
              noteId="15-intuicion-discurso"
              what="La distinción entre el modo inmediato de darse algo y la organización conceptual mediata."
              how="Intuición trabaja con espacio y tiempo; pensamiento discursivo opera mediante conceptos, juicios y categorías."
              why="La fuente divide las proposiciones sintéticas a priori en intuitivas y discursivas, por lo que esta distinción estructura el resto de la clase."
              takeaway="Espacio/tiempo y categorías pertenecen a funciones cognitivas distintas, aunque colaboran en la experiencia."
            />
          </section>

          <section id="matematicas" className="flc1-section">
            <SectionTitle number="09" eyebrow="Mathematica transcendentalis">
              Espacio → geometría; tiempo → aritmética
            </SectionTitle>

            <div className="flc15-math">
              <article>
                <span>FORMA DE INTUICIÓN EXTERNA</span>
                <strong>ESPACIO</strong>
                <b>→</b>
                <em>GEOMETRÍA</em>
                <p>Sus proposiciones se apoyan en la estructura espacial de la intuición.</p>
              </article>
              <article className="dark">
                <span>FORMA DE INTUICIÓN INTERNA</span>
                <strong>TIEMPO</strong>
                <b>→</b>
                <em>ARITMÉTICA</em>
                <p>Contar implica una sucesión de unidades, vinculada a orden temporal.</p>
              </article>
            </div>

            <div className="flc15-math-thesis">
              <span>TESIS DE LA SESIÓN</span>
              <strong>Para Kant, las matemáticas son sintéticas a priori, no meramente analíticas.</strong>
            </div>

            <LogicFigureNote
              noteId="15-matematicas"
              what="La conexión que la clase establece entre formas puras de intuición y posibilidad de conocimiento matemático."
              how="Espacio y tiempo no aparecen como objetos empíricos particulares, sino como estructuras bajo las cuales intuimos. Geometría y aritmética se conectan respectivamente con esas estructuras."
              why="Este es el ejemplo principal con el que la sesión muestra que puede haber conocimiento necesario y ampliativo."
              takeaway="La necesidad matemática se funda, en este encuadre kantiano, en la estructura de la intuición humana."
            />
          </section>

          <section id="categorias" className="flc1-section">
            <SectionTitle number="10" eyebrow="Duodecim categoriae">
              Las categorías ordenan discursivamente lo dado
            </SectionTitle>

            <div className="flc15-categories">
              {categories.map(([family,...items])=>(
                <article key={family}>
                  <span>{family}</span>
                  {items.map(item=><strong key={item}>{item}</strong>)}
                </article>
              ))}
            </div>

            <LogicFigureNote
              noteId="15-categorias"
              what="Las doce categorías mencionadas en las notas, agrupadas en cantidad, cualidad, relación y modalidad."
              how="Cada columna contiene una familia y tres conceptos. No son datos empíricos que se observen como objetos; la clase los presenta como formas del entendimiento."
              why="Las categorías corresponden al lado discursivo de lo sintético a priori, mientras espacio y tiempo corresponden al lado intuitivo."
              takeaway="El entendimiento organiza conceptualmente la experiencia mediante estructuras a priori."
            />
          </section>

          <section id="trascendental" className="flc1-section">
            <SectionTitle number="11" eyebrow="Transcendens / transcendentalis">
              Dos palabras parecidas que no significan lo mismo
            </SectionTitle>

            <div className="flc15-tabs two">
              {transcendentalModes.map(item=>(
                <button type="button" key={item.id} className={item.id===transcendentalId?'is-active':''} onClick={()=>setTranscendentalId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc15-reader violet">
              <div>
                <span>{transcendental.mark}</span>
                <h3>{transcendental.title}</h3>
                <strong>{transcendental.definition}</strong>
              </div>
              <div><code>{transcendental.examples}</code><p>{transcendental.text}</p></div>
            </div>

            <LogicFigureNote
              noteId="15-trascendental"
              what="La distinción terminológica que la propia fuente marca como corrección necesaria."
              how="Trascendente apunta más allá de experiencia posible; trascendental investiga aquello que hace posible la experiencia."
              why="Confundir ambos términos altera por completo el proyecto crítico de Kant."
              takeaway="Trascendental no significa divino ni supramundano: significa condición de posibilidad de experiencia."
            />
          </section>

          <section id="necesidad" className="flc1-section">
            <SectionTitle number="12" eyebrow="Necessitas in subiecto">
              La necesidad ya no está sólo en identidad ni en un mundo separado
            </SectionTitle>

            <div className="flc15-necessity">
              <article><span>LEIBNIZ</span><strong>identidad conceptual</strong><small>A=A</small></article>
              <b>→</b>
              <article className="dark"><span>KANT</span><strong>condiciones a priori</strong><small>espacio · tiempo · categorías</small></article>
              <b>→</b>
              <article><span>EXPERIENCIA</span><strong>objetividad posible</strong><small>para sujetos como nosotros</small></article>
            </div>

            <LogicFigureNote
              noteId="15-necesidad-sujeto"
              what="El desplazamiento del fundamento de necesidad desde analiticidad conceptual hacia estructura del sujeto cognoscente."
              how="El diagrama no elimina a Leibniz: muestra qué problema recibe Kant y cómo cambia su respuesta."
              why="La clase concluye que la necesidad matemática no deriva simplemente de analizar conceptos, sino de las condiciones bajo las cuales intuimos y pensamos."
              takeaway="Para Kant, necesidad y objetividad dependen de estructuras universales del sujeto humano, no de preferencias individuales."
            />
          </section>

          <section id="platon" className="flc1-section">
            <SectionTitle number="13" eyebrow="Similitudo et differentia">
              Kant se parece a Platón, pero no coloca la necesidad en un mundo de Ideas
            </SectionTitle>

            <div className="flc15-comparison">
              <div className="head"><strong>ASPECTO</strong><strong>PLATÓN</strong><strong>KANT</strong></div>
              {comparison.map(([a,b,c])=>(
                <div className="row" key={a}><strong>{a}</strong><span>{b}</span><span>{c}</span></div>
              ))}
            </div>

            <div className="flc15-relativity">
              <span>MATIZ IMPORTANTE</span>
              <strong>No es relativismo individual.</strong>
              <p>La fuente matiza que las estructuras a priori son comunes a los sujetos humanos; la posible relatividad es trascendental: lo necesario lo es para sujetos constituidos como nosotros.</p>
            </div>

            <LogicFigureNote
              noteId="15-platon-kant"
              what="El parecido y la diferencia entre dos maneras no empiristas de explicar necesidad."
              how="Ambos rechazan que la necesidad universal se obtenga simplemente acumulando observaciones. Pero Platón la sitúa en Ideas independientes; Kant, en condiciones a priori del sujeto."
              why="Esta comparación evita convertir a Kant en un platonista estricto o en un relativista individual."
              takeaway="La necesidad kantiana es universal para nuestra forma de conocer, sin postular por ello un mundo separado de Ideas."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="14" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc15-summary">
              <article><span>IDEA 1</span><h3>Conocer es sintetizar</h3><p>Materia sensible y forma a priori colaboran; ninguna basta sola.</p></article>
              <article><span>IDEA 2</span><h3>Los ejes no se identifican</h3><p>Analítico/sintético y a priori/a posteriori responden preguntas diferentes.</p></article>
              <article><span>IDEA 3</span><h3>La revolución copernicana cambia el centro</h3><p>Los objetos de experiencia aparecen bajo condiciones universales del sujeto.</p></article>
              <article><span>IDEA 4</span><h3>Lo sintético a priori funda el proyecto</h3><p>Espacio, tiempo y categorías explican conocimiento necesario que amplía lo sabido.</p></article>
            </div>

            <div className="flc15-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué problema kantiano queda abierto desde Leibniz?</li>
                <li>¿Qué diferencia forma y materia del conocimiento?</li>
                <li>¿Por qué las categorías no conviene llamarlas simplemente “innatas”?</li>
                <li>¿Qué caracteriza una proposición analítica a priori?</li>
                <li>¿Qué caracteriza una sintética a posteriori?</li>
                <li>¿Qué hace posible pensar una sintética a priori?</li>
                <li>¿Cuáles son los problemas de posibilidad, origen, esencia y determinación?</li>
                <li>¿Qué diferencia objetivismo, subjetivismo y síntesis kantiana?</li>
                <li>¿En qué consiste la revolución copernicana?</li>
                <li>¿Qué diferencia intuición y pensamiento discursivo?</li>
                <li>¿Cómo relaciona la clase espacio con geometría?</li>
                <li>¿Cómo relaciona tiempo con aritmética?</li>
                <li>¿Cuáles son las cuatro familias de categorías?</li>
                <li>¿Qué diferencia trascendente y trascendental?</li>
                <li>¿Dónde sitúa Kant la necesidad?</li>
                <li>¿En qué se parece y diferencia de Platón?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Nota sobre la fuente</strong>
              <p>Esta página sigue una versión de trabajo reconstruida a partir de las notas del 15 de abril y de la continuidad con la sesión anterior. El documento indica expresamente que queda pendiente una verificación literal contra el audio, por lo que aquí se preserva el contenido conceptual confirmado sin presentarlo como transcripción palabra por palabra.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 15 · 15 abril 2026</span>
      </footer>
    </main>
  )
}
