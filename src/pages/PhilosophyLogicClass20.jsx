import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass20.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','hechos','Hechos y proposiciones'],
  ['02','creencias','Creencias provisionales'],
  ['03','sistema','Sistema de creencias'],
  ['04','vigencia','Verdad y sistema vigente'],
  ['05','ciencia','Ciencia como control'],
  ['06','quine','Naturalismo quineano'],
  ['07','kuhn','Paradigma kuhniano'],
  ['08','verificabilidad','Coherencia y verificabilidad'],
  ['09','significado','Significado y confirmación'],
  ['10','observacionales','Observacional / teórico'],
  ['11','holismo','Confirmación holista'],
  ['12','objecion1','Objeción 1: verdad / utilidad'],
  ['13','objeciones','Objeciones 2–6'],
  ['14','distincion','Ser / tomar por verdadero'],
  ['15','cierre','Síntesis docente'],
]

const route = [
  ['1','Distinguir','Los hechos simplemente ocurren; verdad y falsedad recaen sobre proposiciones, creencias o afirmaciones acerca de ellos.'],
  ['2','Sistematizar','Las creencias provisionales forman una red regida por coherencia, eficacia y utilidad.'],
  ['3','Naturalizar','La ciencia controla, corrige y reajusta esa red desde dentro; Quine y Kuhn aparecen como referencias del marco.'],
  ['4','Holizar','La experiencia no confirma una oración aislada, sino un sistema con hipótesis, supuestos, instrumentos y teorías conectadas.'],
  ['5','Objetar','Utilidad, consenso, coherencia y verificabilidad no parecen equivaler sin más a verdad.'],
]

const factModes = [
  {
    id:'fact',
    mark:'H',
    title:'Hecho',
    example:'Llueve.',
    status:'ocurre / no ocurre',
    text:'El hecho mismo no es verdadero ni falso. La lluvia simplemente acontece.',
  },
  {
    id:'proposition',
    mark:'P',
    title:'Proposición',
    example:'Está lloviendo.',
    status:'puede evaluarse',
    text:'La proposición acerca del hecho sí puede ser aceptada, rechazada o evaluada como verdadera o falsa.',
  },
]

const beliefSteps = [
  ['HECHOS / INDICIOS','nubes · viento · olor a lluvia'],
  ['CREENCIA PROVISIONAL','“Va a llover.”'],
  ['ACCIÓN','paraguas · cambiar ruta · guardar ropa'],
  ['REVISIÓN','confirmar · corregir · abandonar'],
]

const systemModes = [
  {
    id:'system',
    mark:'Σ',
    title:'Sistema completo',
    terms:'coherente · eficaz · útil · vigente',
    text:'La fuente insiste en que el conjunto no se llama propiamente verdadero o falso.',
  },
  {
    id:'elements',
    mark:'P₁…Pₙ',
    title:'Proposiciones internas',
    terms:'provisionalmente verdaderas',
    text:'Las proposiciones individuales pueden ser aceptadas como verdaderas mientras encajen en el sistema vigente.',
  },
]

const scienceActions = [
  ['01','Verifica','contrasta afirmaciones con procedimientos aceptados'],
  ['02','Corrige','revisa errores y creencias incompatibles'],
  ['03','Compara','pone modelos y resultados en relación'],
  ['04','Experimenta','produce condiciones controladas de contraste'],
  ['05','Predice','evalúa capacidad de anticipar fenómenos'],
  ['06','Ajusta','modifica modelos y descarta lo que deja de funcionar'],
]

const quineModes = [
  {
    id:'naturalism',
    mark:'N',
    title:'Naturalismo',
    formula:'conocimiento ⊂ ciencia natural',
    text:'No hay una filosofía primera situada fuera del sistema para justificarlo todo desde un punto exterior.',
  },
  {
    id:'holism',
    mark:'H',
    title:'Holismo',
    formula:'experiencia ↔ red completa',
    text:'La experiencia pone a prueba conjuntos de creencias conectadas, no enunciados totalmente aislados.',
  },
  {
    id:'assent',
    mark:'A',
    title:'Asentimiento',
    formula:'estímulo → aceptación conductual',
    text:'La fuente atribuye a Quine una lectura naturalista de confirmación donde ciertas experiencias provocan asentimiento observable.',
  },
]

const verificationModes = [
  {
    id:'coherence',
    mark:'C',
    title:'Coherencia',
    condition:'P encaja en la red',
    text:'La proposición debe poder integrarse sin producir contradicciones graves con el sistema aceptado.',
  },
  {
    id:'verification',
    mark:'V',
    title:'Verificabilidad',
    condition:'hay condiciones de confirmación',
    text:'Debe ser posible indicar qué experiencias, pruebas o consecuencias contarían a favor de la creencia.',
  },
]

const observationModes = [
  {
    id:'observational',
    mark:'O',
    title:'Observacional',
    examples:'“Está lloviendo.” · “La mesa es café.”',
    link:'estímulo compartido → asentimiento relativamente directo',
    text:'Su relación con experiencia es más inmediata.',
  },
  {
    id:'theoretical',
    mark:'T',
    title:'No observacional',
    examples:'“Los electrones tienen carga negativa.” · “La justicia requiere igualdad formal.”',
    link:'significado ↔ implicaciones lógicas en el sistema',
    text:'Su evaluación depende de una red de consecuencias, supuestos y conexiones teóricas.',
  },
]

const objectionModes = [
  {
    id:'utility',
    number:'01',
    title:'Verdad ≠ utilidad',
    thesis:'monádico ≠ relacional',
    example:'Verdadero(P) / Útil(P, para alguien, para algo, en cierto contexto)',
    text:'La utilidad exige finalidad, agente y contexto; por eso no tiene la misma forma lógica que “ser verdadero”.',
  },
  {
    id:'consensus',
    number:'02',
    title:'Consenso ≠ verdad',
    thesis:'acuerdo no funda verdad',
    example:'Todos creen P ⟹̸ P',
    text:'El consenso puede seguir a la verdad, pero una comunidad completa también puede equivocarse.',
  },
  {
    id:'coherence',
    number:'03',
    title:'Coherencia ≠ verdad',
    thesis:'consistencia no garantiza realidad',
    example:'una saga de dragones puede ser internamente coherente',
    text:'Un sistema de proposiciones falsas puede mantener reglas internas perfectamente consistentes.',
  },
  {
    id:'circularity',
    number:'04',
    title:'Circularidad',
    thesis:'verdad → consistencia → verdad',
    example:'definir verdad por consistencia presupone ya algún criterio de verdad',
    text:'La explicación amenaza con regresar al concepto que quería sustituir.',
  },
  {
    id:'unverifiable',
    number:'05',
    title:'Verdades no verificables',
    thesis:'verificabilidad ≠ verdad',
    example:'hechos perdidos · futuro · matemáticas no demostradas · regiones inaccesibles',
    text:'Una proposición podría ser verdadera aunque nosotros no podamos comprobarla actualmente.',
  },
  {
    id:'taking',
    number:'06',
    title:'Tomar por verdadero ≠ ser verdadero',
    thesis:'aceptación ≠ verdad',
    example:'una comunidad puede aceptar P y después descubrir que P era falsa',
    text:'Cambiar de creencia no implica que la verdad misma haya cambiado.',
  },
]

const holismFailure = [
  ['HIPÓTESIS','quizá la teoría central falló'],
  ['MEDICIÓN','quizá los datos se midieron mal'],
  ['SUPUESTO AUXILIAR','quizá una condición implícita era falsa'],
  ['INSTRUMENTO','quizá el dispositivo falló'],
  ['LEY PREVIA','quizá otra ley usada era inadecuada'],
  ['INTERPRETACIÓN','quizá leímos mal los datos'],
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

export default function PhilosophyLogicClass20() {
  const [factId,setFactId] = useState('proposition')
  const [systemId,setSystemId] = useState('system')
  const [quineId,setQuineId] = useState('holism')
  const [verificationId,setVerificationId] = useState('verification')
  const [observationId,setObservationId] = useState('observational')
  const [objectionId,setObjectionId] = useState('utility')

  const fact = useMemo(()=>factModes.find(x=>x.id===factId)||factModes[1],[factId])
  const system = useMemo(()=>systemModes.find(x=>x.id===systemId)||systemModes[0],[systemId])
  const quine = useMemo(()=>quineModes.find(x=>x.id===quineId)||quineModes[1],[quineId])
  const verification = useMemo(()=>verificationModes.find(x=>x.id===verificationId)||verificationModes[1],[verificationId])
  const observation = useMemo(()=>observationModes.find(x=>x.id===observationId)||observationModes[0],[observationId])
  const objection = useMemo(()=>objectionModes.find(x=>x.id===objectionId)||objectionModes[0],[objectionId])

  return (
    <main className="flc1-page flc20-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>04 · V · 2026</span>
      </nav>

      <header className="flc1-hero flc20-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>Σ</span><span>C</span><span>V</span><span>∀</span><span>?</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 20 · Segundo parcial</p>
          <h1>Pragmatismo, Quine <em>y objeciones</em></h1>
          <p className="flc1-lead">
            La sesión desarrolla el pragmatismo como teoría de creencias provisionales
            organizadas en sistemas coherentes, útiles y verificables. Después somete
            ese modelo a una batería de objeciones: utilidad, consenso, coherencia y
            verificabilidad no parecen equivaler sin más a verdad.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Puede la verdad reducirse a lo que una comunidad considera coherente, verificable y útil sin confundirse con “ser tomado por verdadero”?</strong>
          <small>Hechos → creencias → sistema → ciencia → objeciones.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XX</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              De los hechos a la crítica del criterio pragmático
            </SectionTitle>

            <div className="flc20-route">
              {route.map(([n,t,x])=>(
                <article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>
              ))}
            </div>

            <div className="flc20-master">
              <span>HECHOS</span><b>→</b>
              <span>CREENCIAS</span><b>→</b>
              <span>SISTEMA</span><b>→</b>
              <span>CIENCIA</span><b>→</b>
              <span>OBJECIONES</span>
            </div>

            <LogicFigureNote
              noteId="20-ruta"
              what="La arquitectura completa de la sesión del 4 de mayo."
              how="Los primeros cuatro pasos construyen la teoría pragmática; el quinto la somete a crítica."
              why="La clase no se limita a describir el pragmatismo: termina distinguiendo cuidadosamente sus criterios de la noción misma de verdad."
              takeaway="La fuerza práctica de una teoría no basta por sí sola para resolver qué significa ser verdadero."
            />
          </section>

          <section id="hechos" className="flc1-section">
            <SectionTitle number="01" eyebrow="Factum / propositio">
              Los hechos simplemente son; las proposiciones son evaluables
            </SectionTitle>

            <div className="flc20-tabs two">
              {factModes.map(item=>(
                <button type="button" key={item.id} className={item.id===factId?'is-active':''} onClick={()=>setFactId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc20-reader blue">
              <div><span>{fact.mark}</span><h3>{fact.title}</h3><blockquote>{fact.example}</blockquote></div>
              <div><strong>{fact.status}</strong><p>{fact.text}</p></div>
            </div>

            <div className="flc20-fact-line">
              <span>LLUVIA COMO HECHO</span><b>≠</b><span>“ESTÁ LLOVIENDO” COMO PROPOSICIÓN</span>
            </div>

            <LogicFigureNote
              noteId="20-hechos"
              what="La distinción inicial de la clase entre aquello que ocurre y nuestras afirmaciones acerca de ello."
              how="El lado 'hecho' se describe como acontecimiento; el lado 'proposición' como contenido susceptible de evaluación."
              why="La distinción es necesaria para que el pragmatismo pueda hablar de creencias verdaderas sin llamar verdadero al mundo mismo."
              takeaway="Verdad y falsedad pertenecen aquí al nivel proposicional, no al hecho desnudo."
            />
          </section>

          <section id="creencias" className="flc1-section">
            <SectionTitle number="02" eyebrow="Credenda provisoria">
              Los hechos provocan creencias que orientan acción
            </SectionTitle>

            <div className="flc20-belief-flow">
              {beliefSteps.map(([title,text],index)=>(
                <article key={title}>
                  <span>{String(index+1).padStart(2,'0')}</span>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc20-belief-example">
              <span>“VA A LLOVER”</span>
              <b>→</b>
              <strong>paraguas · cambio de ruta · guardar la ropa · evitar salir</strong>
            </div>

            <LogicFigureNote
              noteId="20-creencias"
              what="El ciclo práctico entre indicios, creencia, acción y revisión."
              how="La cadena no convierte automáticamente la creencia en una verdad eterna. La trata como hipótesis provisional que orienta conducta."
              why="La utilidad pragmática sólo se entiende cuando se ve la función de una creencia en la acción."
              takeaway="Una creencia vale provisionalmente por cómo organiza experiencia y conducta, pero sigue abierta a corrección."
            />
          </section>

          <section id="sistema" className="flc1-section">
            <SectionTitle number="03" eyebrow="Systema credendorum">
              El conjunto no es verdadero o falso: es coherente, útil o eficaz
            </SectionTitle>

            <div className="flc20-tabs two">
              {systemModes.map(item=>(
                <button type="button" key={item.id} className={item.id===systemId?'is-active':''} onClick={()=>setSystemId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc20-reader violet">
              <div><span>{system.mark}</span><h3>{system.title}</h3><code>{system.terms}</code></div>
              <p>{system.text}</p>
            </div>

            <div className="flc20-system">
              <div className="core"><span>SISTEMA</span><strong>coherencia</strong></div>
              <div className="orbit o1"><span>P₁</span></div>
              <div className="orbit o2"><span>P₂</span></div>
              <div className="orbit o3"><span>P₃</span></div>
              <div className="orbit o4"><span>P₄</span></div>
            </div>

            <LogicFigureNote
              noteId="20-sistema"
              what="La diferencia entre evaluar la red completa y evaluar sus proposiciones particulares."
              how="El centro representa el sistema como organización; las proposiciones orbitan como elementos evaluables."
              why="La fuente marca expresamente que el sistema completo se califica por coherencia, eficacia, utilidad o vigencia."
              takeaway="No hay que confundir 'sistema útil' con 'sistema verdadero'; la verdad provisional se predica de elementos del sistema."
            />
          </section>

          <section id="vigencia" className="flc1-section">
            <SectionTitle number="04" eyebrow="Veritas intra systema vigente">
              Verdad como adecuación al conjunto aceptado en un momento dado
            </SectionTitle>

            <div className="flc20-vigency">
              <article><span>PROPOSICIÓN P</span><strong>afirmación candidata</strong></article>
              <b>↔</b>
              <article className="dark"><span>SISTEMA VIGENTE</span><strong>creencias · métodos · reglas</strong></article>
              <b>→</b>
              <article><span>ESTATUS</span><strong>aceptación provisional</strong></article>
            </div>

            <div className="flc20-vigency-note">
              <span>NO ES</span><strong>verdad eterna</strong>
              <b>SINO</b>
              <span>ACEPTACIÓN</span><strong>histórica · científica · comunitaria</strong>
            </div>

            <LogicFigureNote
              noteId="20-vigencia"
              what="La formulación de la clase según la cual una afirmación es verdadera cuando se adecua al sistema de creencias vigente."
              how="La flecha final conduce a aceptación provisional, no a una garantía metafísica definitiva."
              why="Esta formulación permite comprender por qué el pragmatismo tolera revisión histórica."
              takeaway="La verdad pragmática presentada aquí depende de un sistema vigente y es explícitamente provisional."
            />
          </section>

          <section id="ciencia" className="flc1-section">
            <SectionTitle number="05" eyebrow="Scientia tamquam moderatrix">
              La ciencia controla la adecuación
            </SectionTitle>

            <div className="flc20-science">
              {scienceActions.map(([n,title,text])=>(
                <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>

            <div className="flc20-science-thesis">
              <span>PAPEL DE LA CIENCIA EN ESTA RECONSTRUCCIÓN</span>
              <strong>autoridad práctica de corrección, no acceso metafísico garantizado a una verdad absoluta</strong>
            </div>

            <LogicFigureNote
              noteId="20-ciencia"
              what="Las seis funciones de control que las notas atribuyen a la ciencia dentro del sistema pragmático."
              how="Cada operación corrige o regula la red: verificar, corregir, comparar, experimentar, predecir y ajustar."
              why="El pragmatismo necesita un mecanismo para impedir que cualquier creencia sea aceptada arbitrariamente."
              takeaway="La ciencia funciona como disciplina interna de revisión, no como punto de vista situado fuera de todo sistema."
            />
          </section>

          <section id="quine" className="flc1-section">
            <SectionTitle number="06" eyebrow="Naturalismus quineanus">
              Corregimos el sistema desde dentro
            </SectionTitle>

            <div className="flc20-tabs three">
              {quineModes.map(item=>(
                <button type="button" key={item.id} className={item.id===quineId?'is-active':''} onClick={()=>setQuineId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc20-reader green">
              <div><span>{quine.mark}</span><h3>{quine.title}</h3><code>{quine.formula}</code></div>
              <p>{quine.text}</p>
            </div>

            <div className="flc20-boat">
              <span>NO HAY “FUERA” ABSOLUTO</span><b>→</b>
              <span>ESTAMOS EN LA RED</span><b>→</b>
              <strong>REVISAMOS DESDE DENTRO</strong>
            </div>

            <LogicFigureNote
              noteId="20-quine"
              what="El naturalismo quineano tal como lo organiza la fuente."
              how="El esquema elimina una filosofía primera exterior y sitúa conocimiento, revisión y justificación dentro de la propia práctica científica."
              why="La clase conecta directamente este punto con el holismo visto el 20 de abril."
              takeaway="No justificamos la totalidad desde un fundamento externo; reajustamos la red con los recursos disponibles dentro de ella."
            />
          </section>

          <section id="kuhn" className="flc1-section">
            <SectionTitle number="07" eyebrow="Paradigma Kuhnianum">
              Un marco común organiza problemas, métodos y soluciones aceptables
            </SectionTitle>

            <div className="flc20-paradigm">
              <article><span>PROBLEMAS</span><strong>qué merece investigarse</strong></article>
              <article><span>MÉTODOS</span><strong>cómo investigar</strong></article>
              <article><span>SOLUCIONES</span><strong>qué cuenta como respuesta válida</strong></article>
              <article className="dark"><span>PARADIGMA</span><strong>marco vigente de la comunidad</strong></article>
            </div>

            <div className="flc20-kuhn-warning">
              <span>MATIZ DE LA FUENTE</span>
              <strong>“Dentro de un paradigma” no significa “todo vale”.</strong>
              <p>Las afirmaciones siguen sometidas a métodos, reglas y prácticas científicas concretas.</p>
            </div>

            <LogicFigureNote
              noteId="20-kuhn"
              what="La noción de paradigma tal como aparece en las notas."
              how="Tres funciones —problemas, métodos y soluciones— convergen en un marco común de investigación."
              why="La referencia a Kuhn ayuda a explicar por qué la aceptación científica posee dimensión histórica y comunitaria."
              takeaway="La vigencia histórica de un marco no implica ausencia de criterios internos."
            />
          </section>

          <section id="verificabilidad" className="flc1-section">
            <SectionTitle number="08" eyebrow="Cohaerentia + verificabilitas">
              Dos condiciones para la aceptación pragmática
            </SectionTitle>

            <div className="flc20-tabs two">
              {verificationModes.map(item=>(
                <button type="button" key={item.id} className={item.id===verificationId?'is-active':''} onClick={()=>setVerificationId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc20-reader red">
              <div><span>{verification.mark}</span><h3>{verification.title}</h3><code>{verification.condition}</code></div>
              <p>{verification.text}</p>
            </div>

            <div className="flc20-cv">
              <span>COHERENTE</span><b>+</b><span>VERIFICABLE</span><b>→</b><strong>PROVISIONALMENTE ACEPTADA</strong>
            </div>

            <LogicFigureNote
              noteId="20-coherencia-verificabilidad"
              what="La fórmula con la que la clase resume la verdad pragmática."
              how="Las dos condiciones se acumulan: pertenencia coherente a la red y posibilidad de confirmación según criterios aceptados."
              why="La sesión prepara desde aquí las objeciones: ninguna de estas propiedades parece idéntica sin más a 'ser verdadero'."
              takeaway="La teoría ofrece condiciones de aceptación, pero todavía debe justificar que equivalgan a verdad."
            />
          </section>

          <section id="significado" className="flc1-section">
            <SectionTitle number="09" eyebrow="Significatio et confirmatio">
              Entender un enunciado es saber qué podría confirmarlo
            </SectionTitle>

            <div className="flc20-water">
              <article>
                <span>ENUNCIADO</span>
                <strong>Hay agua en el vaso.</strong>
              </article>
              <b>→</b>
              <article>
                <span>CONDICIONES POSIBLES</span>
                <strong>ver · tocar · analizar · comprobar propiedades</strong>
              </article>
              <b>→</b>
              <article className="dark">
                <span>CONFIRMACIÓN</span>
                <strong>razones para asentir</strong>
              </article>
            </div>

            <LogicFigureNote
              noteId="20-significado"
              what="La idea de que el significado se liga a las condiciones empíricas posibles que justificarían una creencia."
              how="La oración conduce a una serie de condiciones de contraste y finalmente a razones para aceptar."
              why="La fuente conecta semántica y verificación de manera explícita."
              takeaway="Comprender una afirmación incluye saber qué contaría como evidencia a su favor dentro de la práctica considerada."
            />
          </section>

          <section id="observacionales" className="flc1-section">
            <SectionTitle number="10" eyebrow="Observationes / theoria">
              Enunciados observacionales y no observacionales
            </SectionTitle>

            <div className="flc20-tabs two">
              {observationModes.map(item=>(
                <button type="button" key={item.id} className={item.id===observationId?'is-active':''} onClick={()=>setObservationId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc20-reader blue">
              <div><span>{observation.mark}</span><h3>{observation.title}</h3><blockquote>{observation.examples}</blockquote></div>
              <div><strong>{observation.link}</strong><p>{observation.text}</p></div>
            </div>

            <LogicFigureNote
              noteId="20-observacionales"
              what="La distinción implícita en las notas entre afirmaciones ligadas directamente a estímulos y afirmaciones teóricas o abstractas."
              how="Los observacionales admiten asentimiento más inmediato; los no observacionales se conectan con una red de implicaciones."
              why="La diferencia prepara el holismo: cuanto más teórico es un enunciado, menos plausible resulta confirmarlo aislado."
              takeaway="La confirmación depende del tipo de enunciado y de su posición dentro de la red."
            />
          </section>

          <section id="holismo" className="flc1-section">
            <SectionTitle number="11" eyebrow="Confirmatio holistica">
              Cuando un experimento falla, no sabemos inmediatamente qué creencia abandonar
            </SectionTitle>

            <div className="flc20-holism-center">
              <span>EXPERIMENTO INESPERADO</span>
              <strong>¿QUÉ FALLÓ?</strong>
            </div>

            <div className="flc20-holism-grid">
              {holismFailure.map(([title,text])=>(
                <article key={title}><span>{title}</span><p>{text}</p></article>
              ))}
            </div>

            <div className="flc20-holism-thesis">
              <span>CONFIRMACIÓN HOLISTA</span>
              <strong>La experiencia pone a prueba la totalidad del saber disponible, no una oración aislada.</strong>
            </div>

            <LogicFigureNote
              noteId="20-holismo"
              what="El ejemplo con el que la clase explica por qué la confirmación no es uno-a-uno entre enunciado y experiencia."
              how="Un resultado inesperado puede deberse a hipótesis, medición, supuestos auxiliares, instrumento, leyes previas o interpretación."
              why="La multiplicidad de puntos de falla impide decidir automáticamente qué proposición debe abandonarse."
              takeaway="La revisión científica ocurre sobre redes de compromisos interdependientes."
            />
          </section>

          <section id="objecion1" className="flc1-section">
            <SectionTitle number="12" eyebrow="Obiectio prima">
              “Ser verdadero” y “ser útil” no tienen la misma forma lógica
            </SectionTitle>

            <div className="flc20-monadic">
              <article>
                <span>VERDAD</span>
                <strong>Verdadero(P)</strong>
                <small>predicación monádica en el encuadre de clase</small>
              </article>
              <div>≠</div>
              <article className="dark">
                <span>UTILIDAD</span>
                <strong>Útil(P, agente, fin, contexto)</strong>
                <small>relación con varios términos</small>
              </article>
            </div>

            <div className="flc20-utility-questions">
              <span>¿para qué?</span>
              <span>¿para quién?</span>
              <span>¿en qué contexto?</span>
              <span>¿con qué finalidad?</span>
            </div>

            <LogicFigureNote
              noteId="20-objecion-utilidad"
              what="La primera y más formal de las objeciones al pragmatismo."
              how="La verdad se presenta como predicación sobre P; utilidad exige completar varias relaciones adicionales."
              why="Si sus estructuras lógicas no coinciden, sustituir una por otra requiere una argumentación adicional."
              takeaway="Que algo sea útil no equivale lógicamente a que sea verdadero."
            />
          </section>

          <section id="objeciones" className="flc1-section">
            <SectionTitle number="13" eyebrow="Obiectiones II–VI">
              Cinco problemas adicionales para el pragmatismo
            </SectionTitle>

            <div className="flc20-objection-tabs">
              {objectionModes.slice(1).map(item=>(
                <button
                  type="button"
                  key={item.id}
                  className={item.id===objectionId?'is-active':''}
                  onClick={()=>setObjectionId(item.id)}
                >
                  <span>{item.number}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            {objectionId === 'utility' ? (
              <div className="flc20-objection-placeholder">
                <span>OBJECIÓN 01</span>
                <strong>La objeción formal verdad/utilidad está desarrollada en el bloque anterior.</strong>
                <p>Selecciona cualquiera de las objeciones 02–06 para compararlas.</p>
              </div>
            ) : (
              <div className="flc20-reader violet">
                <div><span>{objection.number}</span><h3>{objection.title}</h3><code>{objection.example}</code></div>
                <div><strong>{objection.thesis}</strong><p>{objection.text}</p></div>
              </div>
            )}

            <LogicFigureNote
              noteId="20-objeciones"
              what="Las cinco objeciones adicionales con las que la clase somete a prueba consenso, coherencia, consistencia y verificabilidad."
              how="Cada botón aísla una confusión distinta. Conviene no tratarlas como una sola crítica."
              why="La sesión termina precisamente mostrando que los criterios pragmáticos pueden ser valiosos sin ser idénticos a verdad."
              takeaway="Aceptar, verificar, consensuar, mantener consistencia y ser verdadero son relaciones conceptualmente diferentes."
            />
          </section>

          <section id="distincion" className="flc1-section">
            <SectionTitle number="14" eyebrow="Esse verum / haberi pro vero">
              Ser verdadero no es lo mismo que ser tomado por verdadero
            </SectionTitle>

            <div className="flc20-truth-status">
              <article>
                <span>T₁</span>
                <strong>La comunidad acepta P.</strong>
                <small>P es tomada por verdadera.</small>
              </article>
              <b>→ tiempo →</b>
              <article className="dark">
                <span>T₂</span>
                <strong>La comunidad abandona P.</strong>
                <small>aparece nueva evidencia o mejor teoría</small>
              </article>
            </div>

            <div className="flc20-truth-question">
              <span>PREGUNTA</span>
              <strong>¿P dejó de ser verdadera, o simplemente descubrimos que nunca lo fue?</strong>
            </div>

            <div className="flc20-distinctions">
              <span>ser provisionalmente aceptada</span>
              <span>ser tomada por verdadera</span>
              <span>ser verdadera</span>
              <span>ser útil</span>
              <span>ser aplicable</span>
            </div>

            <LogicFigureNote
              noteId="20-ser-tomar"
              what="La distinción final que concentra la crítica filosófica al pragmatismo."
              how="La aceptación cambia históricamente; el interrogante es si el cambio pertenece a nuestras creencias o a la verdad misma."
              why="La fuente considera esta objeción especialmente fuerte porque separa epistemología social de estatuto veritativo."
              takeaway="Una teoría puede explicar por qué tomamos P por verdadera sin haber explicado todavía qué hace que P sea verdadera."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="15" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc20-summary">
              <article><span>IDEA 1</span><h3>Hecho ≠ proposición</h3><p>Los hechos ocurren; nuestras afirmaciones sobre ellos son evaluables.</p></article>
              <article><span>IDEA 2</span><h3>La verdad pragmática es provisional</h3><p>Las proposiciones se aceptan dentro de sistemas coherentes, útiles y verificables.</p></article>
              <article><span>IDEA 3</span><h3>Quine naturaliza y holiza</h3><p>No hay punto de vista exterior; la experiencia contrasta redes completas de creencias.</p></article>
              <article><span>IDEA 4</span><h3>Los criterios no son la verdad misma</h3><p>Utilidad, consenso, coherencia y verificabilidad pueden orientar sin equivaler conceptualmente a verdad.</p></article>
            </div>

            <div className="flc20-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Por qué los hechos no son verdaderos ni falsos en esta clase?</li>
                <li>¿Qué diferencia “Llueve” como hecho y “Está lloviendo” como proposición?</li>
                <li>¿Cómo surgen las creencias provisionales?</li>
                <li>¿Por qué una creencia mueve a actuar?</li>
                <li>¿Cómo se evalúa el sistema completo?</li>
                <li>¿Cómo se evalúan sus proposiciones internas?</li>
                <li>¿Qué significa adecuación al sistema vigente?</li>
                <li>¿Qué función cumple la ciencia?</li>
                <li>¿Qué quiere decir naturalismo quineano?</li>
                <li>¿Cómo se conecta con el holismo?</li>
                <li>¿Qué papel cumple el asentimiento?</li>
                <li>¿Qué es un paradigma en el encuadre de la clase?</li>
                <li>¿Cómo se relacionan coherencia y verificabilidad?</li>
                <li>¿Qué significa entender un enunciado por sus condiciones de confirmación?</li>
                <li>¿Qué diferencia observacional y no observacional?</li>
                <li>¿Por qué la confirmación es holista?</li>
                <li>¿Por qué verdad y utilidad tienen forma lógica distinta?</li>
                <li>¿Por qué consenso no funda verdad?</li>
                <li>¿Cómo ilustra una ficción que coherencia no basta?</li>
                <li>¿Dónde aparece circularidad entre verdad y consistencia?</li>
                <li>¿Por qué puede haber verdades no verificables?</li>
                <li>¿Qué diferencia tomar algo por verdadero y que sea verdadero?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Nota sobre la fuente</strong>
              <p>El documento del 4 de mayo es una versión de trabajo reconstruida a partir de las notas de clase. La fuente indica que el audio existe, pero no fue transcrito literalmente en el entorno de elaboración; por eso esta página conserva la estructura conceptual documentada sin presentarla como transcripción palabra por palabra.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 20 · 4 mayo 2026</span>
      </footer>
    </main>
  )
}
