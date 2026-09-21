import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass17.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','problema','Concepto y criterio'],
  ['02','trascendente','Verdad trascendente'],
  ['03','inmanente','Verdad inmanente'],
  ['04','tension','La tensión central'],
  ['05','proyectos','Proyectos sobre la verdad'],
  ['06','apel','Clasificación de Apel'],
  ['07','mapa','Mapa ampliado de teorías'],
  ['08','redundancia','Teoría de la redundancia'],
  ['09','contenido','Contenido y juicio'],
  ['10','oracion','Oración / proposición'],
  ['11','contexto','Contexto y valor de verdad'],
  ['12','rey','El actual rey de Francia'],
  ['13','curso','Qué estudiará el curso'],
  ['14','cierre','Síntesis docente'],
]

const route = [
  ['1','Separar','Una cosa es definir qué es la verdad; otra, explicar cómo reconocemos lo verdadero.'],
  ['2','Contrastar','Correspondencia y coherencia ofrecen ventajas y problemas distintos.'],
  ['3','Ubicar','La verdad puede investigarse desde proyectos lógico-semánticos, epistemológicos, metafísicos, pragmáticos o sociales.'],
  ['4','Clasificar','Las teorías de la verdad forman familias muy diversas; no existe una única teoría de correspondencia o pragmática.'],
  ['5','Reducir','La primera teoría estudiada a detalle pregunta si “es verdadero” añade realmente algo a P.'],
]

const truthProblemModes = [
  {
    id:'concept',
    mark:'QUÉ',
    title:'Concepto de verdad',
    question:'¿Qué es la verdad?',
    text:'Busca una definición: qué queremos decir cuando afirmamos que algo es verdadero.',
  },
  {
    id:'criterion',
    mark:'CÓMO',
    title:'Criterio de verdad',
    question:'¿Cómo distinguimos lo verdadero de lo falso?',
    text:'Busca un método, regla, mecanismo o procedimiento para reconocer cuándo una afirmación debe aceptarse como verdadera.',
  },
]

const truthModes = [
  {
    id:'transcendent',
    mark:'↔',
    title:'Verdad trascendente',
    formula:'representación ↔ objeto',
    strength:'definición intuitiva',
    problem:'criterio difícil',
    text:'Hay verdad cuando lo que pensamos o representamos corresponde con aquello que hay en la realidad.',
  },
  {
    id:'immanent',
    mark:'≋',
    title:'Verdad inmanente',
    formula:'pensamiento ↔ reglas internas',
    strength:'criterio claro',
    problem:'definición menos intuitiva',
    text:'Hay verdad cuando una proposición mantiene coherencia con las reglas internas de un sistema y evita contradicción.',
  },
]

const projects = [
  {
    id:'logical',
    mark:'L',
    title:'Lógico-semántico',
    question:'¿Qué significa “es verdadero” y qué función lógica cumple?',
    focus:'enfoque central del curso',
  },
  {
    id:'pragmatic',
    mark:'P',
    title:'Lingüístico-pragmático',
    question:'¿Cómo nos ponemos de acuerdo acerca de lo que ha de considerarse verdadero?',
    focus:'uso · comunicación · prácticas',
  },
  {
    id:'metaphysical',
    mark:'M',
    title:'Metafísico',
    question:'¿Qué es la verdad en sí misma?',
    focus:'ser · naturaleza · fundamento',
  },
  {
    id:'epistemic',
    mark:'E',
    title:'Epistemológico',
    question:'¿Cómo sabemos cuándo una proposición es verdadera?',
    focus:'verificación · conocimiento',
  },
  {
    id:'social',
    mark:'S',
    title:'Socio-político',
    question:'¿Cómo se vincula la verdad con prácticas, comunidad, poder y proyecto social?',
    focus:'sociedad · transformación',
  },
]

const apel = [
  ['01','Correspondencia / adecuación','Aristóteles','adecuación pensamiento-realidad'],
  ['02','Evidencial','Descartes · Husserl','evidencia, claridad o manifestación'],
  ['03','Coherencial','Hegel · Neurath · Rescher','consistencia dentro de un sistema'],
  ['04','Pragmáticas','James · Dewey · Rorty','utilidad, práctica y consecuencias'],
  ['05','Semántica','Tarski','análisis formal de verdad en lenguajes'],
  ['06','Post-tarskianas','Austin · Popper','reelaboración de correspondencia'],
  ['07','Constructivistas / consenso','Lorenzen · Lorenz','construcción racional y acuerdo'],
  ['08','Pragmático-trascendentales','Apel · Habermas','consenso racional e intersubjetividad'],
]

const theoryFamilies = [
  ['Correspondencia','Tarski · Tugendhat · Putnam · Quine · Kripke · Davidson'],
  ['No semánticas de correspondencia','Austin · Russell · Wittgenstein · Carnap · Marx · Horkheimer'],
  ['Redundancia / pro-oracionales','Ramsey · Strawson · Grover · C. J. F. Williams'],
  ['Fenomenológicas','Husserl · Brentano · Ortega · Ricoeur · Zubiri'],
  ['Hermenéuticas','Heidegger · Jaspers · Gadamer · Foucault · J. Simon'],
  ['Coherenciales','Neurath · Hempel · Rescher · Puntel'],
  ['Pragmáticas','James · Peirce · Haack · Rorty · Ellacuría'],
  ['Intersubjetivistas','Apel · Habermas · Lorenz · Lorenzen · Kamlah'],
]

const redundancyModes = [
  {
    id:'expanded',
    mark:'T(P)',
    title:'Con “es verdadero”',
    sentence:'Es verdad que la casa es azul.',
    logical:'T(P)',
    text:'La expresión parece atribuir una propiedad adicional a la proposición.',
  },
  {
    id:'reduced',
    mark:'P',
    title:'Sin “es verdadero”',
    sentence:'La casa es azul.',
    logical:'P',
    text:'La teoría de la redundancia sostiene que no se pierde contenido al eliminar el predicado de verdad.',
  },
]

const contentModes = [
  {
    id:'semantic',
    mark:'S',
    title:'Contenido semántico',
    example:'Hoy hace calor.',
    status:'significa algo',
    text:'La oración posee significado lingüístico.',
  },
  {
    id:'judgeable',
    mark:'J?',
    title:'Contenido judicable',
    example:'Hoy hace calor.',
    status:'juicio en potencia',
    text:'Su contenido puede ser usado por un sujeto para emitir un juicio.',
  },
  {
    id:'actual',
    mark:'J!',
    title:'Juicio en acto',
    example:'Hoy, aquí: “Hace calor.”',
    status:'evaluación contextual',
    text:'Un sujeto concreto usa la oración en un contexto y entonces discutimos si el juicio es verdadero o falso.',
  },
]

const sentenceModes = [
  {
    id:'declarative',
    mark:'V/F',
    title:'Declarativa',
    example:'La mesa es gris.',
    text:'Dice algo de algo y puede funcionar como proposición evaluable.',
  },
  {
    id:'question',
    mark:'?',
    title:'Interrogativa',
    example:'¿Cómo te llamas?',
    text:'Tiene significado, pero no afirma algo susceptible de ser verdadero o falso.',
  },
]

const courseTheories = [
  ['01','Redundancia','“Es verdad que P” no añade contenido sustantivo.'],
  ['02','Pragmáticas','Relacionan verdad con utilidad, práctica o consecuencias.'],
  ['03','Fenomenológicas / evidenciales','Relacionan verdad con evidencia o manifestación.'],
  ['04','Correspondencia','Relacionan verdad con adecuación entre proposición y realidad.'],
  ['05','Tarski','Aborda formalmente condiciones semánticas de verdad.'],
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

export default function PhilosophyLogicClass17() {
  const [problemId,setProblemId] = useState('concept')
  const [truthId,setTruthId] = useState('transcendent')
  const [projectId,setProjectId] = useState('logical')
  const [redundancyId,setRedundancyId] = useState('reduced')
  const [contentId,setContentId] = useState('actual')
  const [sentenceId,setSentenceId] = useState('declarative')

  const problem = useMemo(()=>truthProblemModes.find(x=>x.id===problemId)||truthProblemModes[0],[problemId])
  const truth = useMemo(()=>truthModes.find(x=>x.id===truthId)||truthModes[0],[truthId])
  const project = useMemo(()=>projects.find(x=>x.id===projectId)||projects[0],[projectId])
  const redundancy = useMemo(()=>redundancyModes.find(x=>x.id===redundancyId)||redundancyModes[1],[redundancyId])
  const content = useMemo(()=>contentModes.find(x=>x.id===contentId)||contentModes[2],[contentId])
  const sentence = useMemo(()=>sentenceModes.find(x=>x.id===sentenceId)||sentenceModes[0],[sentenceId])

  return (
    <main className="flc1-page flc17-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>22 · IV · 2026</span>
      </nav>

      <header className="flc1-hero flc17-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>T(P)</span><span>↔</span><span>≋</span><span>V/F</span><span>P</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 17 · Segundo parcial</p>
          <h1>Teorías de la verdad <em>y redundancia</em></h1>
          <p className="flc1-lead">
            La sesión organiza el nuevo bloque sobre verdad: distingue concepto y criterio,
            contrasta correspondencia y coherencia, delimita el proyecto lógico-semántico
            del curso y comienza la teoría de la redundancia preguntando si el predicado
            «es verdadero» añade realmente algo a una proposición.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>Si “es verdad que P” equivale simplemente a “P”, ¿qué función cumple entonces el concepto lógico de verdad?</strong>
          <small>Concepto → criterio → teorías → redundancia.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XVII</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              De preguntar qué es verdad a preguntar qué hace “verdadero”
            </SectionTitle>

            <div className="flc17-route">
              {route.map(([n,t,x])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}
            </div>

            <div className="flc17-master">
              <span>CONCEPTO</span><b>→</b>
              <span>CRITERIO</span><b>→</b>
              <span>TEORÍAS</span><b>→</b>
              <span>“ES VERDADERO”</span><b>→</b>
              <span>REDUNDANCIA</span>
            </div>

            <LogicFigureNote
              noteId="17-ruta"
              what="La estructura completa de la sesión: primero se ordena el problema general y después se entra a una teoría concreta."
              how="Las primeras etapas preguntan por definición y reconocimiento. Las últimas trasladan el problema al lenguaje: qué función cumple el predicado de verdad."
              why="La sesión tiene una parte panorámica y otra específica; este recorrido evita mezclarlas."
              takeaway="El bloque pasa de una pregunta epistemológica amplia a una pregunta lógico-semántica sobre el uso de “verdadero”."
            />
          </section>

          <section id="problema" className="flc1-section">
            <SectionTitle number="01" eyebrow="Quid / quomodo">
              Concepto de verdad y criterio de verdad
            </SectionTitle>

            <div className="flc17-tabs two">
              {truthProblemModes.map(item=>(
                <button type="button" key={item.id} className={item.id===problemId?'is-active':''} onClick={()=>setProblemId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc17-reader blue">
              <div><span>{problem.mark}</span><h3>{problem.title}</h3><blockquote>{problem.question}</blockquote></div>
              <p>{problem.text}</p>
            </div>

            <LogicFigureNote
              noteId="17-concepto-criterio"
              what="Los dos subproblemas básicos que organizan todo el tema de la verdad."
              how="Concepto pide una definición; criterio pide una manera de identificar casos verdaderos y falsos."
              why="La clase insiste en que las preguntas están relacionadas, pero no son idénticas."
              takeaway="Una teoría puede ofrecer una definición convincente de verdad y aun tener dificultades para verificarla."
            />
          </section>

          <section id="trascendente" className="flc1-section">
            <SectionTitle number="02" eyebrow="Veritas transcendens">
              Verdad como correspondencia con la realidad
            </SectionTitle>

            <div className="flc17-tabs two">
              {truthModes.map(item=>(
                <button type="button" key={item.id} className={item.id===truthId?'is-active':''} onClick={()=>setTruthId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc17-reader violet">
              <div>
                <span>{truth.mark}</span>
                <h3>{truth.title}</h3>
                <code>{truth.formula}</code>
              </div>
              <div>
                <strong>{truth.strength}</strong>
                <small>{truth.problem}</small>
                <p>{truth.text}</p>
              </div>
            </div>

            <div className="flc17-table-gray">
              <span>REPRESENTACIÓN</span><b>↔</b><strong>“La mesa es gris”</strong><b>↔</b><span>MESA REAL</span>
            </div>

            <LogicFigureNote
              noteId="17-trascendente"
              what="La definición intuitiva de verdad trascendente: concordancia entre representación mental y objeto."
              how="La oración central funciona como representación; la flecha hacia el objeto expresa la pretensión de correspondencia."
              why="La dificultad no está principalmente en entender la definición, sino en justificar que la correspondencia realmente se da."
              takeaway="Correspondencia ofrece una idea natural de verdad, pero su criterio de verificación es problemático."
            />
          </section>

          <section id="inmanente" className="flc1-section">
            <SectionTitle number="03" eyebrow="Veritas immanens">
              Verdad como coherencia interna
            </SectionTitle>

            <div className="flc17-system">
              <article><span>CREENCIA A</span><strong>P</strong></article>
              <article><span>CREENCIA B</span><strong>Q</strong></article>
              <article className="dark"><span>NUEVA PROPOSICIÓN</span><strong>R</strong></article>
              <article><span>CRITERIO</span><strong>coherencia</strong></article>
            </div>

            <div className="flc17-coherence">
              <span>SI R ENCAJA</span><b>→</b><strong>VERDADERA EN EL SISTEMA</strong>
              <span>SI R CONTRADICE</span><b>→</b><strong>PROBLEMA DE INCONSISTENCIA</strong>
            </div>

            <LogicFigureNote
              noteId="17-inmanente"
              what="La verdad inmanente entendida como concordancia con reglas internas de un sistema."
              how="No compare aquí representación con objeto externo. Compare la nueva proposición con la red de reglas y creencias ya aceptadas."
              why="Ésta es la ventaja metodológica de la coherencia: el criterio es interno y puede aplicarse sin salir del sistema."
              takeaway="La verdad inmanente ofrece un criterio más claro, pero una definición menos intuitiva que la correspondencia."
            />
          </section>

          <section id="tension" className="flc1-section">
            <SectionTitle number="04" eyebrow="Tensio fundamentalis">
              Una definición intuitiva con criterio difícil frente a una definición difícil con criterio claro
            </SectionTitle>

            <div className="flc17-tension">
              <article>
                <span>TRASCENDENTE</span>
                <strong>definición intuitiva</strong>
                <p>verdad = correspondencia con realidad</p>
                <b>pero</b>
                <em>¿cómo verificamos la cosa fuera de nuestra conciencia?</em>
              </article>
              <div>VS.</div>
              <article className="dark">
                <span>INMANENTE</span>
                <strong>definición menos natural</strong>
                <p>verdad = coherencia interna</p>
                <b>pero</b>
                <em>sí tiene un criterio operativo más claro</em>
              </article>
            </div>

            <LogicFigureNote
              noteId="17-tension"
              what="La tensión que la clase presenta como motor histórico del problema de la verdad."
              how="Cada lado combina una ventaja y una dificultad inversas."
              why="Muchas teorías posteriores pueden leerse como intentos de conservar lo mejor de ambas intuiciones."
              takeaway="Definir verdad y reconocer verdad son problemas distintos y pueden tirar en direcciones diferentes."
            />
          </section>

          <section id="proyectos" className="flc1-section">
            <SectionTitle number="05" eyebrow="Quinque proiecta">
              No todos preguntan por la verdad desde el mismo proyecto filosófico
            </SectionTitle>

            <div className="flc17-tabs five">
              {projects.map(item=>(
                <button type="button" key={item.id} className={item.id===projectId?'is-active':''} onClick={()=>setProjectId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc17-reader green">
              <div>
                <span>{project.mark}</span>
                <h3>{project.title}</h3>
                <small>{project.focus}</small>
              </div>
              <blockquote>{project.question}</blockquote>
            </div>

            <LogicFigureNote
              noteId="17-proyectos"
              what="Cinco proyectos filosóficos que pueden usar la palabra verdad con intereses diferentes."
              how="Cambie de botón y observe que cambia la pregunta rectora: función semántica, acuerdo, naturaleza, conocimiento o dimensión social."
              why="La fuente aclara que el curso se concentra principalmente en el proyecto lógico-semántico."
              takeaway="Antes de comparar teorías de la verdad conviene identificar qué problema intenta resolver cada una."
            />
          </section>

          <section id="apel" className="flc1-section">
            <SectionTitle number="06" eyebrow="Classificatio Apel">
              Una primera clasificación panorámica
            </SectionTitle>

            <div className="flc17-apel">
              {apel.map(([n,title,authors,idea])=>(
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <strong>{authors}</strong>
                  <p>{idea}</p>
                </article>
              ))}
            </div>

            <LogicFigureNote
              noteId="17-apel"
              what="La primera clasificación de teorías presentada en la sesión, atribuida a K. O. Apel."
              how="Cada tarjeta relaciona una familia, autores y una idea general. No pretende desarrollar todavía cada teoría."
              why="La clasificación muestra desde el principio la diversidad del campo."
              takeaway="“Teoría de la verdad” no nombra una única disputa binaria, sino una constelación de propuestas distintas."
            />
          </section>

          <section id="mapa" className="flc1-section">
            <SectionTitle number="07" eyebrow="Classificatio ampliata">
              El mapa del siglo XX es todavía más amplio
            </SectionTitle>

            <div className="flc17-family-map">
              {theoryFamilies.map(([family,authors])=>(
                <article key={family}><span>{family}</span><p>{authors}</p></article>
              ))}
            </div>

            <LogicFigureNote
              noteId="17-mapa"
              what="Una síntesis de la clasificación más extensa que la fuente atribuye a Frápolli y Nicolás."
              how="Léala como mapa de familias y variantes, no como una lista que deba memorizarse sin jerarquía."
              why="La sesión quiere dejar claro que incluso dentro de correspondencia, pragmatismo o coherencia existen muchas versiones."
              takeaway="Las etiquetas generales esconden diferencias internas importantes entre autores y proyectos."
            />
          </section>

          <section id="redundancia" className="flc1-section">
            <SectionTitle number="08" eyebrow="Prima theoria">
              Teoría de la redundancia: “es verdadero” no añade contenido
            </SectionTitle>

            <div className="flc17-tabs two">
              {redundancyModes.map(item=>(
                <button type="button" key={item.id} className={item.id===redundancyId?'is-active':''} onClick={()=>setRedundancyId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc17-reader red">
              <div>
                <span>{redundancy.mark}</span>
                <h3>{redundancy.title}</h3>
                <blockquote>{redundancy.sentence}</blockquote>
              </div>
              <div><code>{redundancy.logical}</code><p>{redundancy.text}</p></div>
            </div>

            <div className="flc17-equivalence">
              <strong>“Es verdad que P”</strong><b>≡</b><strong>“P”</strong>
            </div>

            <LogicFigureNote
              noteId="17-redundancia"
              what="La tesis central con la que la sesión comienza el estudio detallado de una teoría."
              how="Compare las dos expresiones. La teoría afirma que el prefijo 'es verdad que' puede eliminarse sin pérdida de contenido proposicional."
              why="Esto convierte el predicado de verdad en algo lógico-semánticamente prescindible, al menos en estos usos simples."
              takeaway="La teoría de la redundancia niega que 'verdadero' nombre una propiedad sustantiva añadida a P."
            />
          </section>

          <section id="contenido" className="flc1-section">
            <SectionTitle number="09" eyebrow="Semantica et iudicium">
              Contenido semántico, contenido judicable y juicio en acto
            </SectionTitle>

            <div className="flc17-tabs three">
              {contentModes.map(item=>(
                <button type="button" key={item.id} className={item.id===contentId?'is-active':''} onClick={()=>setContentId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc17-reader blue">
              <div><span>{content.mark}</span><h3>{content.title}</h3><blockquote>{content.example}</blockquote></div>
              <div><strong>{content.status}</strong><p>{content.text}</p></div>
            </div>

            <div className="flc17-judgment-flow">
              <span>ORACIÓN SIGNIFICATIVA</span><b>→</b>
              <span>CONTENIDO JUDICABLE</span><b>→</b>
              <strong>SUJETO + CONTEXTO → JUICIO EN ACTO</strong>
            </div>

            <LogicFigureNote
              noteId="17-contenido"
              what="La distinción de la clase entre significado lingüístico y acto concreto de juzgar."
              how="La misma oración puede conservar significado como expresión; el juicio aparece cuando un sujeto la usa en una situación concreta."
              why="La teoría de la redundancia necesita separar el lenguaje como portador de significado del acto en que evaluamos verdad o falsedad."
              takeaway="Significar no equivale todavía a ser verdadero o falso en acto."
            />
          </section>

          <section id="oracion" className="flc1-section">
            <SectionTitle number="10" eyebrow="Sententia et valor">
              No toda oración tiene valor de verdad
            </SectionTitle>

            <div className="flc17-tabs two">
              {sentenceModes.map(item=>(
                <button type="button" key={item.id} className={item.id===sentenceId?'is-active':''} onClick={()=>setSentenceId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc17-reader violet">
              <div><span>{sentence.mark}</span><h3>{sentence.title}</h3><blockquote>{sentence.example}</blockquote></div>
              <p>{sentence.text}</p>
            </div>

            <LogicFigureNote
              noteId="17-oracion"
              what="La diferencia entre tener significado gramatical y ser evaluable como verdadero o falso."
              how="La oración declarativa afirma algo; la interrogativa solicita información. Ambas significan, pero sólo una funciona naturalmente como portadora de valor de verdad."
              why="La sesión retoma esta distinción de las primeras clases para conectarla ahora con teoría de la verdad."
              takeaway="Valor de verdad exige contenido proposicional o judicable, no mera corrección gramatical."
            />
          </section>

          <section id="contexto" className="flc1-section">
            <SectionTitle number="11" eyebrow="Contextus">
              “Hoy hace calor”: el contexto entra en la evaluación
            </SectionTitle>

            <div className="flc17-context">
              <article>
                <span>MISMA ORACIÓN</span>
                <strong>“Hoy hace calor.”</strong>
              </article>
              <b>→</b>
              <article>
                <span>CONTEXTO A</span>
                <strong>día caluroso</strong>
                <small>puede resultar verdadera</small>
              </article>
              <b>↔</b>
              <article className="dark">
                <span>CONTEXTO B</span>
                <strong>invierno frío</strong>
                <small>puede resultar falsa</small>
              </article>
            </div>

            <LogicFigureNote
              noteId="17-contexto"
              what="El ejemplo deíctico que la clase usa para mostrar la función del contexto."
              how="La cadena conserva la misma forma lingüística y cambia el contexto de emisión."
              why="Expresiones como 'hoy' y descripciones dependientes de situación no pueden evaluarse ignorando quién habla, cuándo y dónde."
              takeaway="La verdad de ciertos juicios requiere fijar el contexto en que la oración se usa."
            />
          </section>

          <section id="rey" className="flc1-section">
            <SectionTitle number="12" eyebrow="Problema referentiale">
              “El actual rey de Francia es calvo”
            </SectionTitle>

            <div className="flc17-king">
              <p>El actual rey de Francia es calvo.</p>
              <div>
                <span>¿VERDADERA?</span>
                <span>¿FALSA?</span>
                <span>¿SIN VALOR DE VERDAD?</span>
              </div>
            </div>

            <div className="flc17-reference">
              <article><span>ORACIÓN</span><strong>sí tiene significado</strong></article>
              <b>→</b>
              <article><span>REFERENTE</span><strong>no existe rey actual de Francia</strong></article>
              <b>→</b>
              <article className="dark"><span>PROBLEMA</span><strong>evaluación de verdad</strong></article>
            </div>

            <LogicFigureNote
              noteId="17-rey"
              what="El famoso problema de una descripción definida sin referente actual."
              how="La oración puede comprenderse lingüísticamente, pero al intentar usarla para juzgar la realidad aparece la dificultad: el sujeto descriptivo no refiere a un individuo existente."
              why="El ejemplo tensiona la expectativa clásica de que toda proposición declarativa sea simplemente verdadera o falsa."
              takeaway="Significado, referencia y valor de verdad son dimensiones relacionadas pero no idénticas."
            />
          </section>

          <section id="curso" className="flc1-section">
            <SectionTitle number="13" eyebrow="Agenda cursus">
              Las teorías que el curso trabajará principalmente
            </SectionTitle>

            <div className="flc17-course">
              {courseTheories.map(([n,title,text])=>(
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <LogicFigureNote
              noteId="17-curso"
              what="La selección de familias que la fuente señala como foco principal del curso."
              how="No coincide exactamente con todas las clasificaciones panorámicas anteriores: aquí se reduce el campo a cinco líneas de trabajo."
              why="Distinguir mapa histórico de temario efectivo evita estudiar con el mismo peso todas las teorías mencionadas."
              takeaway="El bloque se concentrará en redundancia, pragmatismo, fenomenología/evidencia, correspondencia y Tarski."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="14" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc17-summary">
              <article><span>IDEA 1</span><h3>Concepto ≠ criterio</h3><p>Definir verdad y reconocer casos verdaderos son tareas diferentes.</p></article>
              <article><span>IDEA 2</span><h3>Correspondencia ≠ coherencia</h3><p>La primera privilegia ajuste con realidad; la segunda, consistencia interna.</p></article>
              <article><span>IDEA 3</span><h3>El curso privilegia lo lógico-semántico</h3><p>Interesa especialmente qué hace el predicado “es verdadero”.</p></article>
              <article><span>IDEA 4</span><h3>Redundancia elimina el predicado</h3><p>“Es verdad que P” puede tratarse, en usos simples, como equivalente a P.</p></article>
            </div>

            <div className="flc17-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué diferencia concepto de verdad y criterio de verdad?</li>
                <li>¿Cómo define la clase la verdad trascendente?</li>
                <li>¿Por qué su criterio resulta problemático?</li>
                <li>¿Cómo define la clase la verdad inmanente?</li>
                <li>¿Qué ventaja ofrece la coherencia?</li>
                <li>¿Cuál es la tensión entre ambos conceptos?</li>
                <li>¿Qué distingue los cinco proyectos sobre la verdad?</li>
                <li>¿Cuál interesa más en Filosofía de la lógica?</li>
                <li>¿Qué muestra la clasificación atribuida a Apel?</li>
                <li>¿Por qué hay múltiples teorías dentro de una misma familia?</li>
                <li>¿Cuál es la tesis de la teoría de la redundancia?</li>
                <li>¿Qué significa T(P) ≡ P?</li>
                <li>¿Qué diferencia contenido semántico y contenido judicable?</li>
                <li>¿Cuándo aparece un juicio en acto?</li>
                <li>¿Por qué una pregunta no tiene valor de verdad?</li>
                <li>¿Qué papel cumple el contexto en “Hoy hace calor”?</li>
                <li>¿Qué problema introduce el actual rey de Francia?</li>
                <li>¿Qué teorías estudiará principalmente el curso?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Nota sobre la fuente</strong>
              <p>El documento del 22 de abril es una versión de trabajo reconstruida a partir de audio dañado y notas de clase. Esta página conserva la ruta conceptual, ejemplos y clasificaciones confirmadas, sin presentarlas como transcripción literal palabra por palabra.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 17 · 22 abril 2026</span>
      </footer>
    </main>
  )
}
