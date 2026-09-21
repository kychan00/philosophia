import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass14.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','antecedentes','Platón e intelectualismo'],
  ['02','leibniz','Leibniz: dos tipos de verdad'],
  ['03','monada','Mónada e identidad'],
  ['04','analiticidad','Principio de analiticidad'],
  ['05','idealismos','Dos idealismos'],
  ['06','criterios','Coherencia / correspondencia'],
  ['07','logicismo','Leibniz y el logicismo'],
  ['08','lenguaje','Lenguaje formal universal'],
  ['09','kant','Problema de Kant'],
  ['10','proposiciones','Analítico / sintético'],
  ['11','apriori','A priori / a posteriori'],
  ['12','conocimiento','Forma y materia'],
  ['13','intuicion','Espacio y tiempo'],
  ['14','cierre','Síntesis docente'],
]

const route = [
  ['1','Retomar','Platón e intelectualismo dejan abierta la pregunta por el origen de la necesidad.'],
  ['2','Radicalizar','Leibniz explica la necesidad mediante conceptos, mónadas, identidad y no contradicción.'],
  ['3','Formalizar','Su ideal de un lenguaje universal anticipa el proyecto de la lógica formal moderna.'],
  ['4','Problematizar','Kant detecta que lo analítico parece necesario, pero también trivial.'],
  ['5','Reformular','La pregunta pasa a ser cómo puede existir conocimiento sintético y a priori.'],
]

const truthModes = [
  {
    id:'reason',
    mark:'□',
    title:'Verdad de razón',
    example:'El triángulo tiene tres lados.',
    relation:'predicado contenido en el sujeto',
    status:'necesaria',
    text:'Su negación implica contradicción. No requiere inspeccionar empíricamente el mundo para justificarla.',
  },
  {
    id:'fact',
    mark:'◇',
    title:'Verdad de hecho',
    example:'El perro es negro.',
    relation:'predicado no contenido necesariamente',
    status:'contingente',
    text:'Puede ser verdadera o falsa según cómo sea el mundo. El perro podría tener otro color.',
  },
]

const idealisms = [
  {
    id:'subjective',
    mark:'👁',
    title:'Idealismo subjetivo',
    thinker:'Berkeley',
    thesis:'la existencia queda ligada a la percepción',
    text:'La clase lo presenta como una postura centrada en representaciones de la mente; Dios garantiza la continuidad de las percepciones.',
  },
  {
    id:'logical',
    mark:'Λ',
    title:'Idealismo lógico',
    thinker:'Hegel como referencia de clase',
    thesis:'la realidad se comprende desde coherencia racional',
    text:'Aquí el foco ya no está en la percepción individual, sino en la estructura conceptual y la racionalidad interna del sistema.',
  },
]

const truthCriteria = [
  {
    id:'correspondence',
    mark:'↔',
    title:'Correspondencia',
    formula:'representación ↔ mundo',
    text:'Si se admite un mundo externo independiente, una representación puede evaluarse por su ajuste con aquello que hay afuera.',
  },
  {
    id:'coherence',
    mark:'≋',
    title:'Coherencia',
    formula:'conceptos ↔ sistema',
    text:'Cuando el criterio no descansa en la referencia al mundo externo, la verdad tiende a evaluarse por consistencia interna del sistema conceptual.',
  },
]

const kantModes = [
  {
    id:'analytic',
    mark:'A',
    title:'Analítica',
    example:'El triángulo tiene tres lados.',
    source:'predicado contenido en sujeto',
    epistemic:'a priori',
    modal:'necesaria',
    text:'No amplía el concepto de manera sustantiva: explicita algo ya contenido en él.',
  },
  {
    id:'synthetic',
    mark:'S',
    title:'Sintética',
    example:'En Guadalajara hace frío en invierno.',
    source:'predicado añade información',
    epistemic:'a posteriori en este ejemplo',
    modal:'contingente',
    text:'Para decidirla no basta analizar conceptos; hay que acudir a la experiencia.',
  },
]

const aprioriModes = [
  {
    id:'apriori',
    mark:'a priori',
    title:'Independiente de experiencia',
    example:'3 + 2 = 5',
    text:'Puede requerir esfuerzo, cálculo o papel y lápiz, pero su justificación no depende de observar objetos empíricos.',
  },
  {
    id:'aposteriori',
    mark:'a post.',
    title:'Dependiente de experiencia',
    example:'Todas las palomas son blancas.',
    text:'Para justificarla habría que observar el mundo. Un contraejemplo empírico basta para mostrar su falsedad.',
  },
]

const subjectModes = [
  {
    id:'passive',
    mark:'↓',
    title:'Sujeto pasivo',
    model:'mundo → sujeto → representación',
    school:'modelo empirista simplificado',
    text:'El sujeto recibe impresiones y funciona como una “fotocopia” de lo que hay afuera.',
  },
  {
    id:'active',
    mark:'↻',
    title:'Sujeto activo',
    model:'mundo + formas del sujeto → experiencia',
    school:'Kant',
    text:'El sujeto organiza lo recibido mediante sus propias formas y categorías. El conocimiento no es copia directa de la cosa en sí.',
  },
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

export default function PhilosophyLogicClass14() {
  const [truthId,setTruthId] = useState('reason')
  const [idealismId,setIdealismId] = useState('logical')
  const [criterionId,setCriterionId] = useState('correspondence')
  const [kantId,setKantId] = useState('analytic')
  const [aprioriId,setAprioriId] = useState('apriori')
  const [subjectId,setSubjectId] = useState('active')

  const truth = useMemo(()=>truthModes.find(x=>x.id===truthId)||truthModes[0],[truthId])
  const idealism = useMemo(()=>idealisms.find(x=>x.id===idealismId)||idealisms[1],[idealismId])
  const criterion = useMemo(()=>truthCriteria.find(x=>x.id===criterionId)||truthCriteria[0],[criterionId])
  const kant = useMemo(()=>kantModes.find(x=>x.id===kantId)||kantModes[0],[kantId])
  const apriori = useMemo(()=>aprioriModes.find(x=>x.id===aprioriId)||aprioriModes[0],[aprioriId])
  const subject = useMemo(()=>subjectModes.find(x=>x.id===subjectId)||subjectModes[1],[subjectId])

  return (
    <main className="flc1-page flc14-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>13 · IV · 2026</span>
      </nav>

      <header className="flc1-hero flc14-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>A=A</span><span>¬(P∧¬P)</span><span>□</span><span>a priori</span><span>Σ</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 14 · Segundo parcial</p>
          <h1>Leibniz, analiticidad <em>y entrada a Kant</em></h1>
          <p className="flc1-lead">
            La clase enlaza tres problemas: de dónde viene la necesidad lógica,
            cómo Leibniz la fundamenta en identidad y no contradicción, y por qué
            Kant considera insuficiente una necesidad puramente analítica si el
            conocimiento también debe ampliarse.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Cómo puede un conocimiento ser necesario sin limitarse a repetir lo que ya estaba contenido en un concepto?</strong>
          <small>Leibniz → analiticidad → Kant → sintético a priori.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XIV</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              De la necesidad metafísica al problema crítico
            </SectionTitle>

            <div className="flc14-route">
              {route.map(([n,t,x])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}
            </div>

            <div className="flc14-master">
              <span>PLATÓN / ARISTÓTELES</span><b>→</b>
              <span>LEIBNIZ</span><b>→</b>
              <span>ANALITICIDAD</span><b>→</b>
              <span>KANT</span><b>→</b>
              <span>SINTÉTICO A PRIORI</span>
            </div>

            <LogicFigureNote
              noteId="14-ruta"
              what="El recorrido completo de la sesión: antecedentes metafísicos, solución leibniziana y problema kantiano."
              how="Léalo como una cadena de problemas: cada autor recibe una dificultad anterior y la reformula. Kant no aparece como tema independiente, sino como respuesta al límite que detecta en el racionalismo analítico."
              why="La clase cubre muchos autores y conceptos; esta ruta evita perder la continuidad argumental."
              takeaway="La pregunta por la necesidad desemboca en una pregunta epistemológica: cómo producir conocimiento necesario y, al mismo tiempo, ampliativo."
            />
          </section>

          <section id="antecedentes" className="flc1-section">
            <SectionTitle number="01" eyebrow="Recapitulatio">
              Plantillas ideales, orden del mundo y estructura del sujeto
            </SectionTitle>

            <div className="flc14-antecedents">
              <article>
                <span>PLATONISMO</span>
                <strong>plantillas ideales</strong>
                <p>Formas previas e independientes de contenidos empíricos particulares.</p>
              </article>
              <article>
                <span>INTELECTUALISMO</span>
                <strong>logos del mundo</strong>
                <p>La realidad ya posee estructura y la razón la sintetiza o capta.</p>
              </article>
              <article className="dark">
                <span>PROBLEMA ABIERTO</span>
                <strong>¿de dónde viene la necesidad?</strong>
                <p>¿Del eidos, del mundo, del sujeto o de una metafísica más profunda?</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="14-antecedentes"
              what="Los dos antecedentes inmediatos y la pregunta que da entrada a Leibniz."
              how="Las dos primeras cajas ofrecen lugares distintos para la necesidad. La tercera formula el problema aún no resuelto."
              why="La sesión no empieza de cero: Leibniz aparece como una radicalización dentro de una discusión ya abierta."
              takeaway="La necesidad lógica puede explicarse desde diferentes ontologías; Leibniz propondrá una estructura conceptual todavía más profunda."
            />
          </section>

          <section id="leibniz" className="flc1-section">
            <SectionTitle number="02" eyebrow="Rationes et facta">
              Leibniz: verdades de razón y verdades de hecho
            </SectionTitle>

            <div className="flc14-tabs two">
              {truthModes.map(item=>(
                <button type="button" key={item.id} className={item.id===truthId?'is-active':''} onClick={()=>setTruthId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc14-reader blue">
              <div>
                <span>{truth.mark}</span>
                <h3>{truth.title}</h3>
                <blockquote>{truth.example}</blockquote>
              </div>
              <div>
                <small>{truth.status}</small>
                <strong>{truth.relation}</strong>
                <p>{truth.text}</p>
              </div>
            </div>

            <LogicFigureNote
              noteId="14-verdades"
              what="La distinción leibniziana central entre verdades necesarias y verdades contingentes."
              how="Compare si el predicado está contenido conceptualmente en el sujeto. Si lo está, la negación conduce a contradicción; si no, la verdad depende de cómo sea el mundo."
              why="Esta distinción prepara tanto la teoría de la analiticidad como la posterior reformulación kantiana."
              takeaway="Para Leibniz, la necesidad de las verdades de razón se descubre analizando conceptos, no inspeccionando hechos."
            />
          </section>

          <section id="monada" className="flc1-section">
            <SectionTitle number="03" eyebrow="Monas et identitas">
              Mónada, predicado contenido e identidad
            </SectionTitle>

            <div className="flc14-monad">
              <article><span>SUJETO SIMPLE</span><strong>triángulo</strong></article>
              <b>contiene</b>
              <article><span>PREDICADO</span><strong>tener tres lados</strong></article>
              <b>análisis</b>
              <article className="dark"><span>FONDO LÓGICO</span><strong>A = A</strong></article>
            </div>

            <div className="flc14-identity">
              <article><span>IDENTIDAD</span><strong>P = P</strong></article>
              <article><span>NO CONTRADICCIÓN</span><strong>¬(P ∧ ¬P)</strong></article>
            </div>

            <LogicFigureNote
              noteId="14-monada"
              what="La reconstrucción trabajada en clase: una verdad de razón puede analizarse hasta mostrar que el predicado ya pertenece al concepto del sujeto."
              how="La secuencia va del enunciado aparentemente informativo hacia una relación de identidad conceptual. El segundo cuadro expresa su forma negativa mediante no contradicción."
              why="Éste es el mecanismo mediante el cual Leibniz explica por qué ciertas verdades son necesarias."
              takeaway="La necesidad descansa en que negar lo contenido conceptualmente en el sujeto conduce a contradicción."
            />
          </section>

          <section id="analiticidad" className="flc1-section">
            <SectionTitle number="04" eyebrow="Principium analyticitatis">
              Toda verdad lógica puede descomponerse hasta identidad o no contradicción
            </SectionTitle>

            <div className="flc14-analysis-flow">
              <span>PROPOSICIÓN COMPLEJA</span><b>→</b>
              <span>ANÁLISIS</span><b>→</b>
              <span>VERDADES MÁS SIMPLES</span><b>→</b>
              <strong>A=A / ¬(P∧¬P)</strong>
            </div>

            <div className="flc14-necessity-box">
              <span>CONSECUENCIA</span>
              <strong>Verdad lógica → necesidad → negación lógicamente imposible</strong>
            </div>

            <LogicFigureNote
              noteId="14-analiticidad"
              what="El principio de analiticidad tal como lo formula la reconstrucción de la clase."
              how="Cada flecha representa una reducción conceptual: no se busca nueva evidencia empírica, sino descomponer hasta una estructura que ya no pueda negarse sin contradicción."
              why="La analiticidad explica simultáneamente la necesidad y el carácter a priori de las verdades de razón."
              takeaway="La verdad lógica es necesaria porque su negación destruiría la identidad conceptual que la sostiene."
            />
          </section>

          <section id="idealismos" className="flc1-section">
            <SectionTitle number="05" eyebrow="Duae formae idealismi">
              Idealismo subjetivo e idealismo lógico
            </SectionTitle>

            <div className="flc14-tabs two">
              {idealisms.map(item=>(
                <button type="button" key={item.id} className={item.id===idealismId?'is-active':''} onClick={()=>setIdealismId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc14-reader violet">
              <div>
                <span>{idealism.mark}</span>
                <h3>{idealism.title}</h3>
                <small>{idealism.thinker}</small>
              </div>
              <div>
                <strong>{idealism.thesis}</strong>
                <p>{idealism.text}</p>
              </div>
            </div>

            <LogicFigureNote
              noteId="14-idealismos"
              what="Dos usos distintos de la palabra idealismo que el profesor separa."
              how="En el subjetivo, el problema gira en torno a percepción y existencia. En el lógico, la cuestión es la racionalidad conceptual y la coherencia del sistema."
              why="La distinción evita confundir dependencia de una mente individual con una concepción racionalista de la realidad."
              takeaway="No todo idealismo afirma lo mismo ni coloca en el mismo lugar la relación entre mente, realidad y verdad."
            />
          </section>

          <section id="criterios" className="flc1-section">
            <SectionTitle number="06" eyebrow="Criterium veritatis">
              Correspondencia y coherencia
            </SectionTitle>

            <div className="flc14-tabs two">
              {truthCriteria.map(item=>(
                <button type="button" key={item.id} className={item.id===criterionId?'is-active':''} onClick={()=>setCriterionId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc14-reader green">
              <div><span>{criterion.mark}</span><h3>{criterion.title}</h3><code>{criterion.formula}</code></div>
              <p>{criterion.text}</p>
            </div>

            <div className="flc14-square">
              <span>CUADRADO = 4 LADOS</span>
              <b>coherente</b>
              <span>CUADRADO = 5 LADOS</span>
              <b className="bad">contradictorio</b>
            </div>

            <LogicFigureNote
              noteId="14-criterios"
              what="Dos criterios de verdad contrastados en clase y un ejemplo simple de consistencia conceptual."
              how="Correspondencia compara representación y mundo; coherencia compara una afirmación con las reglas o conceptos de un sistema."
              why="La discusión muestra que una teoría del conocimiento arrastra también una teoría sobre cómo evaluar verdad."
              takeaway="El criterio de verdad depende de qué papel atribuimos al mundo externo y a la estructura conceptual."
            />
          </section>

          <section id="logicismo" className="flc1-section">
            <SectionTitle number="07" eyebrow="Praecursor logicismi">
              Leibniz como antecedente del proyecto logicista
            </SectionTitle>

            <div className="flc14-logicism">
              <article><span>LEIBNIZ</span><strong>unificar razón y cálculo</strong><small>antecedente</small></article>
              <b>→</b>
              <article><span>FREGE / RUSSELL / WHITEHEAD</span><strong>reducir matemáticas a lógica</strong><small>logicismo moderno</small></article>
              <b>→</b>
              <article className="dark"><span>LÍMITES</span><strong>Gödel</strong><small>incompletud del programa formal</small></article>
            </div>

            <LogicFigureNote
              noteId="14-logicismo"
              what="La línea histórica que la clase traza desde Leibniz hacia el logicismo posterior."
              how="Leibniz aparece como antecedente, no como logicista técnico en el sentido del siglo XIX-XX. Después se sitúan Frege, Russell y Whitehead, y finalmente los límites asociados a Gödel."
              why="La precisión histórica es importante porque el documento mismo matiza que 'lógica' no significaba lo mismo antes y después de Frege."
              takeaway="Leibniz anticipa el ideal de formalización total, aunque el proyecto moderno y sus límites pertenecen a desarrollos posteriores."
            />
          </section>

          <section id="lenguaje" className="flc1-section">
            <SectionTitle number="08" eyebrow="Lingua universalis">
              El sueño de un lenguaje formal universal
            </SectionTitle>

            <div className="flc14-language">
              <article><span>PROBLEMA</span><strong>lenguas naturales</strong><p>ambigüedad · traducción · conceptos inestables</p></article>
              <b>→</b>
              <article className="dark"><span>IDEAL LEIBNIZIANO</span><strong>sistema de signos</strong><p>caracteres que representen relaciones entre pensamientos</p></article>
              <b>→</b>
              <article><span>HERENCIA</span><strong>lógica formal moderna</strong><p>reglas · símbolos · procedimientos explícitos</p></article>
            </div>

            <LogicFigureNote
              noteId="14-lenguaje"
              what="El problema práctico y filosófico que motiva el sueño leibniziano de una notación universal."
              how="La primera caja representa pérdidas y ambigüedades de los lenguajes naturales; la segunda, el proyecto de signos formales; la tercera, su conexión histórica con la formalización moderna."
              why="El ideal de representación simbólica conecta directamente esta sesión con los temas iniciales del curso sobre lenguajes formales."
              takeaway="Formalizar también puede entenderse como intento de estabilizar el pensamiento frente a ambigüedades lingüísticas."
            />
          </section>

          <section id="kant" className="flc1-section">
            <SectionTitle number="09" eyebrow="Problema criticum">
              Kant: si toda necesidad es analítica, el conocimiento parece trivial
            </SectionTitle>

            <div className="flc14-kant-problem">
              <article>
                <span>LEIBNIZ</span>
                <strong>necesario porque ya está contenido</strong>
                <p>El triángulo tiene tres lados.</p>
              </article>
              <b>→</b>
              <article className="dark">
                <span>PROBLEMA DE KANT</span>
                <strong>¿cómo ampliar conocimiento sin perder necesidad?</strong>
                <p>¿Puede haber síntesis a priori?</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="14-kant-problema"
              what="El problema que Kant detecta en una concepción puramente analítica de la necesidad."
              how="La primera caja conserva necesidad, pero parece limitarse a desplegar contenido ya dado. La segunda exige simultáneamente necesidad y ampliación."
              why="Esta tensión introduce el concepto central con el que termina la sesión: proposiciones sintéticas a priori."
              takeaway="Kant no rechaza la necesidad; pregunta cómo puede ser cognitivamente fecunda."
            />
          </section>

          <section id="proposiciones" className="flc1-section">
            <SectionTitle number="10" eyebrow="Analyticum / syntheticum">
              Dos modos de relacionar sujeto y predicado
            </SectionTitle>

            <div className="flc14-tabs two">
              {kantModes.map(item=>(
                <button type="button" key={item.id} className={item.id===kantId?'is-active':''} onClick={()=>setKantId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc14-reader red">
              <div>
                <span>{kant.mark}</span>
                <h3>{kant.title}</h3>
                <blockquote>{kant.example}</blockquote>
              </div>
              <div>
                <small>{kant.epistemic} · {kant.modal}</small>
                <strong>{kant.source}</strong>
                <p>{kant.text}</p>
              </div>
            </div>

            <LogicFigureNote
              noteId="14-analitico-sintetico"
              what="La reformulación kantiana de la diferencia entre verdades de razón y verdades de hecho."
              how="Analítica significa que el predicado ya está conceptualmente contenido; sintética, que añade algo que no puede obtenerse sólo descomponiendo el concepto."
              why="La distinción permite formular la pregunta por una combinación que parecía imposible: síntesis y a priori."
              takeaway="Analítico/sintético describe el tipo de relación conceptual; a priori/a posteriori describirá la fuente de justificación."
            />
          </section>

          <section id="apriori" className="flc1-section">
            <SectionTitle number="11" eyebrow="Ante experientiam">
              A priori no significa innato
            </SectionTitle>

            <div className="flc14-tabs two">
              {aprioriModes.map(item=>(
                <button type="button" key={item.id} className={item.id===aprioriId?'is-active':''} onClick={()=>setAprioriId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc14-reader blue">
              <div><span>{apriori.mark}</span><h3>{apriori.title}</h3><blockquote>{apriori.example}</blockquote></div>
              <p>{apriori.text}</p>
            </div>

            <div className="flc14-apriori-warning">
              <span>PRECISIÓN IMPORTANTE</span>
              <strong>a priori ≠ innato</strong>
              <p>La cuestión es si la justificación requiere experiencia sensible, no si la proposición estaba conscientemente presente desde el nacimiento.</p>
            </div>

            <LogicFigureNote
              noteId="14-apriori"
              what="La distinción epistemológica entre independencia y dependencia de experiencia."
              how="No confunda dificultad psicológica con fuente de justificación. Una operación puede costar trabajo y seguir siendo a priori."
              why="La clase hace esta advertencia explícita porque el término suele malinterpretarse."
              takeaway="A priori caracteriza cómo se justifica un conocimiento, no cuándo apareció en la mente."
            />
          </section>

          <section id="conocimiento" className="flc1-section">
            <SectionTitle number="12" eyebrow="Forma + materia">
              Kant: el sujeto ya no es una fotocopia pasiva del mundo
            </SectionTitle>

            <div className="flc14-tabs two">
              {subjectModes.map(item=>(
                <button type="button" key={item.id} className={item.id===subjectId?'is-active':''} onClick={()=>setSubjectId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc14-reader green">
              <div>
                <span>{subject.mark}</span>
                <h3>{subject.title}</h3>
                <code>{subject.model}</code>
                <small>{subject.school}</small>
              </div>
              <p>{subject.text}</p>
            </div>

            <div className="flc14-form-matter">
              <article><span>MATERIA</span><strong>información sensible</strong><small>proviene del mundo</small></article>
              <b>+</b>
              <article><span>FORMA</span><strong>espacio · tiempo · categorías</strong><small>la aporta el sujeto</small></article>
              <b>→</b>
              <article className="dark"><span>CONOCIMIENTO</span><strong>experiencia organizada</strong></article>
            </div>

            <LogicFigureNote
              noteId="14-forma-materia"
              what="El esquema kantiano de conocimiento como encuentro entre materia sensible y forma aportada por el sujeto."
              how="Ningún lado basta por sí solo: la materia suministra contenido; la forma organiza aquello que puede aparecer como experiencia."
              why="Este cambio explica por qué Kant necesita abandonar el modelo de sujeto meramente pasivo."
              takeaway="Conocer no es copiar la cosa en sí: es recibir material sensible bajo condiciones de representación del sujeto."
            />
          </section>

          <section id="intuicion" className="flc1-section">
            <SectionTitle number="13" eyebrow="Intuitio sensibilis">
              Espacio y tiempo como formas de la intuición
            </SectionTitle>

            <div className="flc14-space-time">
              <article><span>ESPACIO</span><strong>forma de representación externa</strong><p>Luna, Marte o Andrómeda aparecen representados espacialmente.</p></article>
              <article className="dark"><span>TIEMPO</span><strong>forma de sucesión</strong><p>La experiencia se ordena también temporalmente.</p></article>
            </div>

            <div className="flc14-open-question">
              <span>CLASE TERMINA AQUÍ</span>
              <strong>¿Cómo hacen posibles estas formas proposiciones sintéticas a priori?</strong>
            </div>

            <LogicFigureNote
              noteId="14-espacio-tiempo"
              what="El adelanto final de la sesión: espacio y tiempo como formas de la intuición sensible."
              how="No interprete el cuadro como una teoría completa ya demostrada en esta clase. El documento señala que el desarrollo queda abierto precisamente aquí."
              why="Estas formas serán necesarias para explicar cómo puede haber conocimiento que dependa de estructuras del sujeto y, sin embargo, no sea una simple identidad analítica."
              takeaway="La sesión termina preparando, no concluyendo, la explicación kantiana de lo sintético a priori."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="14" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc14-summary">
              <article><span>IDEA 1</span><h3>Leibniz funda necesidad en análisis</h3><p>Las verdades de razón conducen a identidad o no contradicción.</p></article>
              <article><span>IDEA 2</span><h3>Formalizar es también universalizar lenguaje</h3><p>El sueño leibniziano anticipa una notación capaz de evitar ambigüedad y traducción defectuosa.</p></article>
              <article><span>IDEA 3</span><h3>Kant detecta el problema de la trivialidad</h3><p>Lo puramente analítico es necesario, pero parece no ampliar conocimiento.</p></article>
              <article><span>IDEA 4</span><h3>El sujeto kantiano aporta forma</h3><p>La experiencia surge del encuentro entre materia sensible y estructuras a priori.</p></article>
            </div>

            <div className="flc14-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué pregunta hereda Leibniz de platonismo e intelectualismo?</li>
                <li>¿Qué distingue verdad de razón y verdad de hecho?</li>
                <li>¿Qué significa que el predicado esté contenido en el sujeto?</li>
                <li>¿Cómo se relacionan mónada, identidad y necesidad?</li>
                <li>¿Qué es el principio de analiticidad?</li>
                <li>¿Qué diferencia idealismo subjetivo e idealismo lógico?</li>
                <li>¿Cómo se distinguen coherencia y correspondencia?</li>
                <li>¿Por qué Leibniz es antecedente del logicismo y no logicista técnico posterior?</li>
                <li>¿Qué problema quería resolver un lenguaje formal universal?</li>
                <li>¿Qué problema detecta Kant en una verdad puramente analítica?</li>
                <li>¿Qué diferencia proposición analítica y sintética?</li>
                <li>¿Por qué a priori no significa innato?</li>
                <li>¿Qué significa que el conocimiento tenga forma y materia?</li>
                <li>¿Qué diferencia sujeto pasivo y sujeto activo?</li>
                <li>¿Qué papel comienzan a desempeñar espacio y tiempo?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Nota sobre la fuente</strong>
              <p>El documento de esta sesión es una reconstrucción académica a partir de audio dañado y notas verificadas. La página conserva los núcleos confirmados y trata el cierre kantiano como introducción, porque la propia fuente indica que su desarrollo queda abierto.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 14 · 13 abril 2026</span>
      </footer>
    </main>
  )
}
