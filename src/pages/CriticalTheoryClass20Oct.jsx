import { useState } from 'react'
import { Link } from 'react-router'
import '../components/philosophy/system2d/System2DTheme.css'
import './CriticalTheoryClass15Oct.css'
import './CriticalTheoryClass20Oct.css'
import Critical20OctThematicAtlas from '../components/critical/Critical20OctThematicAtlas'
import Critical20OctSectionStudy from '../components/critical/Critical20OctSectionStudy'
import { critical20OctImage } from '../data/critical20OctImage'
import { critical20OctSourceSections } from '../data/critical20OctSourceSections'

// «Explicación de clase» e «Intervención» no equivalen a cita literal del libro de Lukács.
const chapters=[
  {id:'mercancia',title:'Inversión sujeto–objeto',topic:'Tesis',color:'rust',
    before:'Marx: trabajo enajenado y fetichismo de la mercancía.',
    body:'La profesora recuperó la inversión en la que las mercancías parecen ocupar el lugar de sujetos y las personas quedar subordinadas como objetos. Contrastó las carreteras solicitadas por comunidades con infraestructura orientada al transporte mercantil; mencionó Colima y el puerto de Manzanillo. El punto filosófico es preguntar quién organiza las prioridades sociales. Este ejemplo de clase no constituye una investigación histórica independiente sobre la construcción vial.',
    after:'La forma mercancía orienta prácticas e instituciones fuera de la fábrica.',
    question:'¿Qué muestra la inversión sujeto–objeto en este ejemplo?',answer:'La aparente prioridad autónoma de los productos humanos sobre las necesidades de quienes los producen.',
    source:'Explicación docente · Marx y Lukács, con ejemplo contemporáneo.'},
  {id:'burocracia',title:'Eficiencia contra agencia',topic:'Racionalización',color:'gold',
    before:'División del trabajo, cálculo y procedimientos repetibles.',
    body:'Se insistió en que un proceso eficiente y automatizado puede convertir al agente en ejecutor de instrucciones. La docente explicó que trámites de firmas y facturas la retuvieron cuando debía comer y enseñar: dentro de ese procedimiento fue tratada casi como una firma. Se revisó cómo la forma empresa aparece en administración, Estado y universidad, sin afirmar que estas instituciones sean literalmente fábricas.',
    after:'El conflicto aparece también en tecnologías destinadas al conocimiento.',
    question:'¿Por qué más eficiencia no garantiza más autonomía?',answer:'Porque el rendimiento del sistema no indica cuánta libertad conservan sus participantes.',
    source:'Explicación docente · continuidad con la clase del 15 de octubre.'},
  {id:'errores',title:'El error como huella humana',topic:'Singularidad',color:'sage',
    before:'Los procedimientos estandarizados privilegian uniformidad y resultado perfecto.',
    body:'Se narró una discusión sobre videos académicos donde una persona quería editar equivocaciones y muletillas y otra defendía conservarlas para comunicar espontaneidad y presencia humana. La profesora usó este contraste para examinar qué ocurre cuando la perfección formal se asocia a contenidos automatizados. No se estableció una prueba técnica de autoría.',
    after:'La autenticidad y la acción humana enlazan con la IA generativa.',
    question:'¿Basta un error para comprobar que un video es humano?',answer:'No; se explicó su significado expresivo, no un detector fiable.',
    source:'Ejemplo y reflexión docentes, no un pasaje de Lukács.'},
  {id:'pregunta',title:'Del hacha a la inteligencia artificial',topic:'Intervención estudiantil',color:'blue',
    before:'Los instrumentos técnicos permiten ampliar capacidades humanas.',
    body:'Un estudiante preguntó dónde está la línea entre emplear instrumentos como hachas y cerillos y quedar enajenado por una tecnología sofisticada como la IA. Relacionó la discusión con una reflexión anterior sobre cosmología virtual y con el artículo de Alonso Nava sobre tecnociencia. La profesora reconoció el alcance de la pregunta y señaló que se trata de una investigación filosófica extensa.',
    after:'El criterio provisional se desplaza hacia la relación entre agente y artefacto.',
    question:'¿Qué aspecto filosófico importa más que la complejidad material de la herramienta?',answer:'Cómo se conciben la agencia, la dependencia y el origen social del artefacto.',
    source:'Intervención estudiantil y respuesta de la profesora.'},
  {id:'ia',title:'¿La IA piensa por nosotros?',topic:'Hipótesis docente',color:'rust',
    before:'Los sistemas técnicos son creados y sostenidos por trabajo humano.',
    body:'La profesora explicó que la IA depende del conocimiento acumulado, libros y artículos producidos por personas, diseños algorítmicos, programación, ingeniería y mantenimiento. A su juicio aparece una relación fetichista cuando se olvida ese origen y se atribuye a la herramienta una autonomía que sustituye el pensamiento propio. Ante la objeción de que no todos conocen algoritmos complejos, distinguió entre entender cada detalle técnico y reconocer que el sistema es producto de trabajo humano. Es una propuesta interpretativa de clase, no una tesis textual de Lukács sobre IA.',
    after:'Esta tecnología también transforma ocupaciones y formas de trabajo.',
    question:'¿Es necesario dominar cada algoritmo para reconocer la producción humana de la IA?',answer:'No: basta distinguir procedencia humana y agencia del uso, sin fingir conocimiento técnico especializado.',
    source:'Respuesta docente e interpretación contemporánea de la cosificación.'},
  {id:'trabajo',title:'Trabajo desplazado, trabajo reacomodado',topic:'Economía',color:'ochre',
    before:'La tecnología se mantiene mediante tareas de personas concretas.',
    body:'Se discutió el caso de una diseñadora con menos contratos tradicionales a quien se ofrece revisar y perfeccionar diseños de IA. El ejemplo introduce una paradoja: sostener el propio empleo puede suponer mejorar un mecanismo que modifica oportunidades laborales de otras personas. Es un problema ético, no una estadística sobre desempleo.',
    after:'La apariencia de autonomía también entra en relaciones de compañía.',
    question:'¿Por qué no basta decir que la IA elimina toda la mano de obra?',answer:'Porque la sesión distinguió sustitución de actividades y reacomodo de otras funciones.',
    source:'Caso narrado por la docente; sin generalización empírica.'},
  {id:'her',title:'IA y vínculos afectivos',topic:'Relaciones',color:'violet',
    before:'Un instrumento puede presentarse ante usuarios como interlocutor social.',
    body:'Se hablaron de usos de IA como consejera, amistad o pareja. La película Her se mencionó para pensar el apego a un asistente y la atribución de deseo o reciprocidad a un dispositivo. La docente planteó una pregunta crítica por la relación usuario-artefacto; no emitió diagnóstico clínico sobre las personas ni una regla sobre todas las interacciones digitales.',
    after:'La formación social también determina nuestra relación con el trabajo.',
    question:'¿Qué se oculta cuando se trata a un artefacto como sujeto plenamente autónomo?',answer:'Su origen diseñado y las relaciones humanas que lo producen y mantienen.',
    source:'Discusión de clase · referencia cultural a Her.'},
  {id:'curriculo',title:'La filosofía que falta en la universidad',topic:'Currículo',color:'plum',
    before:'La discusión tecnológica abrió una crítica a la formación filosófica contemporánea.',
    body:'La profesora cuestionó la obsolescencia de algunos componentes del plan de estudios y propuso conservar historia de la filosofía, lógica y argumentación, añadiendo especializaciones en filosofía feminista, mente y tecnología, ecofeminismo, ética de lo no humano y bioética. Mencionó que podría ofrecer filosofía feminista el próximo semestre. Se trató de una propuesta, no una reforma institucional aprobada.',
    after:'La diferencia entre obedecer programas y crearlos muestra una forma de agencia.',
    question:'¿Qué buscaba la propuesta de rutas de especialización?',answer:'Vincular una base filosófica común con problemas de investigación contemporáneos.',
    source:'Opinión y propuesta curricular de la profesora.'},
  {id:'ludico',title:'Trabajo lúdico y reconocimiento',topic:'Agencia',color:'sage',
    before:'La forma empresa puede tratar a personas como funciones intercambiables.',
    body:'La profesora contrastó obedecer mecánicamente un programa con diseñar su propio curso, escoger textos y elaborar interpretaciones vivas. Relacionó el trabajo creativo con voluntad, libertad, experiencia lúdica y reconocimiento por estudiantes que participan. Esta experiencia se contrapone a ser absorbido por trámites y manuales, sin negar que toda docencia está institucionalmente situada.',
    after:'La reemplazabilidad de cuerpos es el reverso del reconocimiento.',
    question:'¿Qué diferencia al trabajo creativo del mero cumplimiento de un protocolo?',answer:'La apropiación de la actividad mediante decisiones, capacidades y reconocimiento.',
    source:'Explicación docente; conexión conceptual con Marx.'},
  {id:'sobrantes',title:'Reemplazabilidad y población sobrante',topic:'Exclusión',color:'bronze',
    before:'El capitalismo tiende a evaluar trabajo y personas por su utilidad de intercambio.',
    body:'Se discutió la desechabilidad de trabajadores y la noción histórica de lumpemproletariado. La profesora sugirió que el sistema considera sobrantes a sujetos que no puede explotar o integrar como consumidores, y vinculó críticamente esa exclusión con personas desaparecidas y la respuesta estatal. Son hipótesis y ejemplos de la exposición, no una causalidad universal demostrada.',
    after:'La administración de cuerpos conduce a la disciplina y a la vigilancia.',
    question:'¿Qué tiene de cosificante la reemplazabilidad?',answer:'Que la persona queda reducida a una función intercambiable en el orden productivo.',
    source:'Clase · diagnóstico social y límite explícito de la generalización.'},
  {id:'foucault',title:'Cuerpos: espacio, tiempo y vigilancia',topic:'Disciplina',color:'blue',
    before:'La producción requiere organizar y disciplinar cuerpos humanos.',
    body:'La profesora vinculó clubes deportivos y escuelas con Michel Foucault y su obra Vigilar y castigar. Explicó la espacialización mediante pupitres en filas y tarimas que facilitan la observación jerárquica; la temporalización, mediante horarios, ritmos productivos y entrenamiento. No redujo el análisis de Foucault al panóptico: mencionó escuela, fábrica y otros ámbitos. La lectura es complemento recomendado y no un fragmento del capítulo de Lukács.',
    after:'La mirada crítica debe estudiar también los discursos que justifican estas estructuras.',
    question:'¿Por qué la disposición de las bancas es filosóficamente relevante?',answer:'Porque configura relaciones de visibilidad, jerarquía y vigilancia.',
    source:'Explicación docente de Foucault; recomendación bibliográfica externa.'},
  {id:'critica',title:'¿Filosofía de la constatación o de la crítica?',topic:'Cierre',color:'rust',
    before:'La cosificación alcanza trabajo, instituciones, relaciones y conocimiento.',
    body:'En el cierre, la profesora sostuvo que cuando la filosofía sólo valida hechos y no cuestiona las relaciones que los producen, puede colaborar con la cosificación. Lo asoció críticamente a un tipo de positivismo y defendió una filosofía capaz de examinar la totalidad social. Esto es su interpretación de clase, no la demostración de que toda ciencia sea necesariamente acrítica. Se anunció Freud como próxima lectura.',
    after:'La siguiente sesión comienza El malestar en la cultura de Freud.',
    question:'¿Qué exigencia distingue a la filosofía crítica de una constatación pasiva?',answer:'Cuestionar las condiciones históricas y sociales de lo que aparece como dado.',
    source:'Síntesis de la profesora al cerrar la lectura de Lukács.'},
]

export default function CriticalTheoryClass20Oct(){
  const [active,setActive]=useState('mercancia')
  const [answer,setAnswer]=useState(false)
  const [guided,setGuided]=useState(false)
  const index=chapters.findIndex(item=>item.id===active)
  const current=chapters[index]||chapters[0]
  const select=(id)=>{setActive(id);setAnswer(false)}
  const move=(diff)=>select(chapters[(index+diff+chapters.length)%chapters.length].id)
  return <main className="ct1510-page ct2010-page ph2d-shell">
    <nav className="ct1510-nav"><Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link><Link to="/" className="ct1510-logo">Φ · PHILOSOPHIA</Link><span>FI265 · XX / X / MMXXVI</span></nav>
    <header className="ct1510-hero">
      <p className="ct1510-eyebrow">ARCHIVO DE CLASE · 20 DE OCTUBRE DE 2026</p>
      <div className="ct1510-hero-grid"><div>
        <h1>¿Quién piensa <em>por nosotros?</em></h1>
        <p className="ct1510-deck">La cosificación en Lukács, la inteligencia artificial, el trabajo y los cuerpos disciplinados.</p>
        <p className="ct1510-scope">Este folio separa la lectura primaria de los ejemplos docentes y las intervenciones. Los argumentos sobre IA y Foucault pertenecen a la discusión de hoy y no son citas textuales de Lukács.</p>
        <div className="ct1510-cta"><button type="button" onClick={()=>document.getElementById('ct2010-map')?.scrollIntoView({behavior:'smooth'})}>Explorar el atlas ↓</button><Link to="/tareas/teoria-critica/lukacs-cosificacion">Abrir 58 nodos de Lukács ↗</Link><Link to="/semestre/5/teoria-critica/clase/15-octubre">15 de octubre ↗</Link></div>
      </div><aside className="ct1510-pull"><span>PREGUNTA NUCLEAR</span><strong>¿Cuándo el artefacto creado por personas parece actuar como un sujeto autónomo?</strong><div className="ct1510-inversion"><span>SUJETO</span><b>⇄</b><span>OBJETO</span></div><small>Esquema filosófico de una inversión social, no identidad literal entre personas y mercancías.</small></aside></div>
    </header>
    <section className="ct1510-intro"><div><span className="ct1510-number">01 · TESIS</span><h2>El sujeto y la cosa</h2></div><p>La exposición retomó el fetichismo de Marx y la cosificación de Lukács: las mercancías, las máquinas y los procedimientos pueden parecer independientes de los seres humanos que los producen. La clase aplicó la pregunta a la IA, la burocracia, el empleo, la vigilancia y la función de la filosofía.</p><div className="ct1510-warning"><strong>Fuente base:</strong> el texto de Lukács conservado en el vault comprende 27 páginas del PDF, la sección I y el inicio de II. El atlas de esta sesión no modifica los 58 nodos del texto ni suplanta sus pasajes.</div></section>
    <figure className="ct1510-licensed-figure">
      <div className="ct1510-licensed-item">
        <img src={`${import.meta.env.BASE_URL}${critical20OctImage.imagePath}`} alt={critical20OctImage.alt} loading="lazy" decoding="async" />
        <figcaption>
          <span>IMAGEN DE ESTUDIO · {critical20OctImage.imageLicense}</span>
          <strong>Agencia, herramientas, burocracia y disciplina</strong>
          <p>{critical20OctImage.pedagogicalPurpose}</p>
          <small>{critical20OctImage.imageAttribution} · {critical20OctImage.sourceBoundary}</small>
        </figcaption>
      </div>
    </figure>
    <Critical20OctThematicAtlas />
    <section className="ct1510-atlas" id="ct2010-map">
      <div className="ct1510-section-head"><div><span className="ct1510-number">02 · ATLAS 2D</span><h2>Doce folios conectados</h2><p>Seleccione un concepto: texto breve en la tarjeta, desarrollo completo y procedencia en el inspector. Sin coordenadas manuales ni solapamiento entre nodos.</p></div><Link to="/tareas/teoria-critica/lukacs-cosificacion">Consultar lectura completa ↗</Link></div>
      <div className="ct2010-toolbar"><button type="button" onClick={()=>{setGuided(v=>!v);select('mercancia')}} aria-pressed={guided}>{guided?'Cerrar guía':'Iniciar guía'}</button><span>{guided?'GUÍA SECUENCIAL · 12 FOLIOS':'EXPLORACIÓN LIBRE · 12 FOLIOS'}</span></div>
      <div className="ct1510-node-grid" role="group" aria-label="Constelación de conceptos">
        {chapters.map((item,i)=><button type="button" key={item.id} onClick={()=>select(item.id)} aria-pressed={active===item.id} className={'ct1510-node'+(active===item.id?' selected':'')} style={{'--node-color':'var(--ph2d-topic-'+item.color+')'}}><small>{String(i+1).padStart(2,'0')} · {item.topic}</small><strong>{item.title}</strong><span>{item.before}</span></button>)}
      </div>
      <article className="ct1510-inspector" aria-live="polite"><div className="ct1510-inspector-meta"><span>FOLIO {String(index+1).padStart(2,'0')} / {chapters.length}</span><span>{current.topic}</span></div><h3>{current.title}</h3><div className="ct1510-sequence"><div><small>ANTES · PRESUPONE</small><p>{current.before}</p></div><div><small>DESARROLLO DE CLASE</small><p>{current.body}</p></div><div><small>DESPUÉS · ABRE</small><p>{current.after}</p></div></div><p className="ct1510-provenance"><strong>Procedencia:</strong> {current.source}</p><div className="ct1510-study"><small>MODO ESTUDIO · PREGUNTA DE CONTROL</small><p>{current.question}</p>{answer&&<p className="ct1510-answer"><strong>Orientación:</strong> {current.answer}</p>}<div className="ct1510-controls"><button type="button" onClick={()=>setAnswer(v=>!v)}>{answer?'Ocultar respuesta':'Comprobar respuesta'}</button><button type="button" onClick={()=>move(-1)}>← Anterior</button><button type="button" onClick={()=>move(1)}>Siguiente folio →</button></div></div></article>
    </section>
    <section className="ct1510-relations"><div className="ct1510-section-head"><div><span className="ct1510-number">03 · MOVIMIENTO</span><h2>De la lectura a la crítica actual</h2></div></div><div className="ct1510-relation"><span>MARX · FETICHISMO</span><b>→</b><span>LUKÁCS · COSIFICACIÓN</span><b>⇢</b><span>IA · AGENCIA</span><b>⇢</b><span>FOUCAULT · DISCIPLINA</span></div><p className="ct2010-caption">La flecha simple indica la continuidad estudiada; la flecha punteada señala conexiones de discusión, no derivaciones textuales probadas.</p></section>
    <section className="ct1510-reading"><div className="ct1510-section-head"><div><span className="ct1510-number">04 · LECTURAS</span><h2>Fuentes y diálogos</h2></div></div><div className="ct1510-reading-grid"><article><span>OBRA BASE · LUKÁCS</span><h3>Historia y conciencia de clase</h3><p>Capítulo sobre la cosificación, con pasajes y folios en el sistema 2D existente.</p><Link to="/tareas/teoria-critica/lukacs-cosificacion">Ir a los 58 nodos ↗</Link></article><article><span>SESIÓN ANTERIOR</span><h3>15 de octubre</h3><p>Forma empresa, racionalización, afectos y responsabilidad. La sesión presente continúa la discusión.</p><Link to="/semestre/5/teoria-critica/clase/15-octubre">Abrir clase ↗</Link></article><article><span>AMPLIACIÓN DOCENTE</span><h3>Foucault · Vigilar y castigar</h3><p>Distribución espacial, regulación temporal, vigilancia y cuerpos disciplinados. Recomendación, no fuente del capítulo de Lukács.</p><a href="https://archive.org/details/FoucaultVigilarYCastigar" target="_blank" rel="noopener noreferrer">Consultar libro ↗</a></article><article><span>CONEXIÓN ESTUDIANTIL</span><h3>Nava · Tecnociencia</h3><p>El estudiante conectó el problema de las herramientas y la IA con el artículo de Alonso Nava.</p><Link to="/semestre/5/filosofia-analitica/lectura/nava-tecnociencia">Abrir estudio ↗</Link></article></div></section>
    <section className="ct1510-detail" aria-labelledby="ct2010-detail-title">
      <div className="ct1510-detail-head"><span>ARCHIVO DOCUMENTAL / 012</span><div>
        <p>FUENTE DE CLASE Y RECONSTRUCCIÓN PEDAGÓGICA EN DOS CAPAS</p>
        <h2 id="ct2010-detail-title">La clase, apartado por apartado.</h2>
        <p>Catorce fichas incluyen el mapa de la sesión, las doce discusiones documentadas y la continuidad hacia Freud. Las preguntas y esquemas son editoriales, no exámenes oficiales.</p>
      </div></div>
      <nav className="ct1510-detail-index" aria-label="Índice documental del 20 de octubre">
        {critical20OctSourceSections.map((item) => (
          <button key={item.id} type="button" onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <span>{item.number}</span>{item.title}
          </button>
        ))}
      </nav>
      <div className="ct1510-detail-body">
        {critical20OctSourceSections.map((item) => (
          <article className="ct1510-detail-folio" id={item.id} key={item.id}>
            <header><span>{item.number}</span><div><small>{item.status}</small><h3>{item.title}</h3></div></header>
            <div className="ct1510-source-card"><p>{item.body}</p>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
            <Critical20OctSectionStudy sectionId={item.id} />
          </article>
        ))}
      </div>
    </section>
    <section className="ct1510-agenda"><div className="ct1510-section-head"><div><span className="ct1510-number">05 · SIGUIENTE PASO</span><h2>Freud · El malestar en la cultura</h2></div></div><div className="ct2010-agenda"><article><small>JUEVES 22 DE OCTUBRE · VIRTUAL</small><h3>Comenzar la lectura</h3><p>La profesora anunció clase a distancia por un congreso. Enviará el enlace y pidió que se comparta con Axel. Comenzar <em>El malestar en la cultura</em> de Sigmund Freud. <strong>No indicó páginas ni entrega escrita.</strong></p></article><article><small>SEMANA SIGUIENTE · SIN DÍA DEFINIDO</small><h3>Examen por confirmar</h3><p>Se mencionó evaluación la semana del 26 de octubre, pero no hay fecha exacta ni temario cerrado en esta sesión.</p></article></div></section>
    <footer className="ct1510-footer"><Link to="/semestre/5/teoria-critica">← Índice de materia</Link><Link to="/tareas/teoria-critica/lukacs-cosificacion">Fuente Lukács ↗</Link><span>PHILOSOPHIA · FI265 · 2026-B</span></footer>
  </main>
}
