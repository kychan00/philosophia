import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import { AnalyticEditorialHeading, AnalyticEditorialIndex } from '../components/analytic/AnalyticEditorialElements'
import '../components/analytic/AnalyticEditorialElements.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass19Oct.css'
import './AnalyticClass21Oct.css'
import './AnalyticClass26Oct.css'

const sections = [
  ['01','funcion','Función, argumento y saturación'],
  ['02','cuantificacion','Cuantificadores y generalidad'],
  ['03','objetividad','Sentido, referencia y tercer reino'],
  ['04','logicismo','Número, logicismo y crisis'],
  ['05','tipos','Russell y teoría de tipos'],
  ['06','idealismo','Rebelión contra el idealismo'],
  ['07','verdad','Coherencia, hechos y proposiciones'],
  ['08','cierre','Balance y continuación'],
]

const functionSchema = {
  title:'De una expresión abierta a un valor de verdad',
  layout:'hierarchy', readingLayout:'vertical-folio', minHeight:720, hierarchyXGap:145, hierarchyYGap:155, rootId:'funcion',
  nodes:[
    {id:'funcion',label:'x conquistó y',caption:'función de dos lugares',role:'concept'},
    {id:'argumentos',label:'César · las Galias',caption:'argumentos',role:'term'},
    {id:'saturacion',label:'Saturación',caption:'completa los lugares',role:'mediation'},
    {id:'valor',label:'Verdadero / falso',caption:'valor de verdad',role:'result'},
  ],
  edges:[
    {from:'funcion',to:'argumentos',relationKind:'hierarchical',label:'recibe'},
    {from:'argumentos',to:'saturacion',relationKind:'derives',label:'satura'},
    {from:'saturacion',to:'valor',relationKind:'derives',label:'permite evaluar'},
  ],
}

const typeSchema = {
  title:'Teoría de tipos · reconstrucción del ejemplo de la bolsa de bolsas',
  layout:'hierarchy', readingLayout:'vertical-folio', minHeight:820, hierarchyXGap:130, hierarchyYGap:160, rootId:'t2',
  nodes:[
    {id:'t2',label:'Tipo 2',caption:'conjuntos de nivel superior',role:'concept'},
    {id:'t1',label:'Tipo 1',caption:'conjuntos de objetos',role:'mediation'},
    {id:'t0',label:'Tipo 0',caption:'objetos / individuos',role:'term'},
    {id:'bloqueo',label:'No autopertenencia irrestricta',caption:'bloqueo de la paradoja',role:'result'},
  ],
  edges:[
    {from:'t2',to:'t1',relationKind:'hierarchical',label:'puede contener'},
    {from:'t1',to:'t0',relationKind:'hierarchical',label:'puede contener'},
    {from:'t2',to:'bloqueo',relationKind:'derives',label:'impone niveles'},
  ],
}

const rebellionSchema = {
  title:'Del idealismo británico al realismo de Moore y Russell',
  layout:'hierarchy', readingLayout:'vertical-folio', minHeight:820, hierarchyXGap:140, hierarchyYGap:170, rootId:'idealismo',
  nodes:[
    {id:'idealismo',label:'Idealismo británico',caption:'Bradley · McTaggart',role:'concept'},
    {id:'internas',label:'Relaciones internas',caption:'constitutivas de la totalidad',role:'term'},
    {id:'rebelion',label:'Moore + Russell',caption:'rebelión',role:'mediation'},
    {id:'externas',label:'Relaciones y proposiciones objetivas',caption:'realismo pluralista',role:'result'},
  ],
  edges:[
    {from:'idealismo',to:'internas',relationKind:'hierarchical',label:'sostiene'},
    {from:'internas',to:'rebelion',relationKind:'secondary',label:'provoca rechazo'},
    {from:'rebelion',to:'externas',relationKind:'derives',label:'afirma'},
  ],
}

const recall = [
  ['¿Qué cambia al pasar de sujeto–predicado a función–argumento?', 'La forma lógica puede representar lugares de argumento, relaciones de varios términos y cuantificación con mucha más precisión.'],
  ['¿Por qué ∀x∃y(y>x) no equivale a ∃y∀x(y>x)?', 'Porque el orden de los cuantificadores cambia el compromiso: una cosa es que cada número tenga alguno mayor y otra que exista un único número mayor que todos.'],
  ['¿Qué papel cumple el tercer reino en la lectura fregeana?', 'Permite tratar pensamientos, sentidos y valores de verdad como objetivos e independientes de una mente individual.'],
  ['¿Qué pretende la teoría de tipos?', 'Introducir niveles que bloqueen ciertas formas de autorreferencia y autopertenencia implicadas en la paradoja de Russell.'],
  ['¿Qué rechazan Moore y Russell del idealismo británico?', 'La reducción de individuos y relaciones a momentos internos de una totalidad; la clase los presenta defendiendo proposiciones, conceptos y relaciones con objetividad propia.'],
]

function scrollToSection(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}) }
function Heading({n,eyebrow,children}){return <AnalyticEditorialHeading n={n} eyebrow={eyebrow} className="ac1910-heading">{children}</AnalyticEditorialHeading>}
function Layer({type,children}){
  const label = type === 'clase' ? 'EXPLICACIÓN DE CLASE' : type === 'cotejo' ? 'PRECISIÓN EDITORIAL' : 'GLOCK · TEXTO COTEJADO'
  return <aside className={'ac1910-provenance '+(type==='clase'?'is-class':'is-source')}><span>{label}</span><p>{children}</p></aside>
}

function Archivum26(){
 return <section className="ac2626-archivum" aria-label="Archivo mnemónico de la clase">
   <div className="ac2626-eyebrow">ARCHIVUM ACADEMICUM · ACTIVACIÓN DE 90 SEGUNDOS · RECONSTRUCCIÓN EDITORIAL</div>
   <h2>De la forma lógica a la rebelión contra el idealismo</h2>
   <p className="ac2626-thesis"><strong>TESIS SEMINAL</strong> La nueva lógica de Frege hace visibles relaciones y cuantificadores que la forma sujeto–predicado oculta; su objetivismo desemboca en un platonismo semántico, mientras Russell intenta salvar el proyecto logicista y, junto con Moore, rompe con el idealismo británico.</p>
   <div className="ac2626-triad">
     <div><b>α · FORMA</b><span>función · argumento · cuantificación</span></div>
     <div><b>β · OBJETIVIDAD</b><span>sentido · referencia · tercer reino</span></div>
     <div><b>γ · RUPTURA</b><span>paradoja · tipos · rebelión realista</span></div>
   </div>
   <figure>
     <img src={`${import.meta.env.BASE_URL}images/filosofia-analitica/archivum-26-octubre-frege-russell-moore.svg`} loading="lazy" alt="Diagrama original con cuatro estaciones: función y argumento en Frege, tercer reino y objetividad, teoría de tipos de Russell y rebelión de Moore y Russell contra el idealismo británico."/>
     <figcaption>Figura 1 · Forma lógica → objetividad → crisis logicista → rebelión contra el idealismo. Ilustración original de PHILOSOPHIA; no reproduce una figura de Glock.</figcaption>
   </figure>
   <p className="ac2626-credit">Procedencia: SVG propio del proyecto (ORIGINAL-OWNED). Las conexiones son una reconstrucción pedagógica de la secuencia efectivamente trabajada en la sesión.</p>
 </section>
}

export default function AnalyticClass26Oct(){
 return <main className="ac9-page ac1910-page ac2121-page ac2626-page analytic-editorial-page">
   <nav className="ac9-topbar">
     <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
     <Link to="/" className="ac9-brand">Φ Philosophia</Link>
     <span>26 · X · 2026 · Glock hasta p. 53</span>
   </nav>

   <header className="ac9-hero ac1910-hero ac2626-hero">
     <div className="ac9-grid" aria-hidden="true"/>
     <div className="ac9-ghost ac1910-ghost" aria-hidden="true">∀</div>
     <div className="ac9-hero-inner">
       <div>
         <p className="ac9-kicker">Filosofía Analítica · 26 de octubre de 2026</p>
         <h1>Frege, Russell <em>y la rebelión</em></h1>
         <p className="ac9-lead">La sesión profundiza en función, cuantificación y objetividad semántica; después sigue la crisis del logicismo y abre el conflicto de Moore y Russell con el idealismo británico.</p>
         <div className="ac9-question ac1910-question"><span>Pregunta rectora · reconstrucción de estudio</span><strong>¿Cómo conduce una nueva forma de analizar proposiciones a una nueva concepción de objetividad y, finalmente, a una ruptura metafísica?</strong></div>
         <div className="ac1910-actions">
           <Link to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">ATLAS GLOCK 2D ↗</Link>
           <button type="button" onClick={()=>scrollToSection('funcion')}>RECORRER LA CLASE ↓</button>
         </div>
       </div>
       <aside className="ac1910-source-card">
         <span>FRONTERAS DOCUMENTALES</span>
         <div><b>01</b><strong>Sesión</strong><p>Retoma pp. 48–49 y avanza efectivamente por pp. 50–53.</p></div>
         <div><b>02</b><strong>Fuente</strong><p>Glock, cap. II: Frege, límites del logicismo y comienzo de «La rebelión contra el idealismo».</p></div>
         <div><b>03</b><strong>Atlas 2D</strong><p>El atlas existente sigue documentado hasta p. 51; esta página registra el avance a 52–53 sin alterar ese sistema concurrente.</p></div>
       </aside>
     </div>
   </header>

   <Archivum26 />

   <div className="ac9-layout ac1910-layout">
     <AnalyticEditorialIndex sections={sections} onNavigate={scrollToSection} className="ac1910-index">
       <Link className="ac1910-index-link" to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">Mapa histórico 2D ↗</Link>
     </AnalyticEditorialIndex>

     <article className="ac9-article ac1910-article">
       <section id="funcion">
         <Heading n="01" eyebrow="Retoma técnica · Glock pp. 48–49">Función, argumento y saturación</Heading>
         <Layer type="clase">La clase vuelve sobre la diferencia entre una función matemática y una función proposicional. En ambos casos hay lugares abiertos y argumentos; al completar una función matemática obtenemos un valor del codominio, mientras que al completar una expresión proposicional obtenemos algo evaluable como verdadero o falso.</Layer>
         <div className="ac2626-formula"><small>EJEMPLO RELACIONAL</small><strong>Q(x,y) = «x conquistó y»</strong><p>Q(César, las Galias) completa dos lugares de argumento. La ventaja es representar relaciones que no caben limpiamente en la lectura sujeto–predicado.</p></div>
         <div className="ac1910-schema-panel"><span>ESQUEMA · RECONSTRUCCIÓN DE LA EXPLICACIÓN</span><AnimatedConceptSchema schema={functionSchema}/></div>
         <Layer type="cotejo">En las notas aparece vocabulario vacilante en torno a «intensión/extensión». Esta página conserva sólo la distinción segura: función abierta, argumentos posibles y valor resultante. No se reconstruye como cita una terminología que no quedó fijada con suficiente claridad.</Layer>
       </section>

       <section id="cuantificacion">
         <Heading n="02" eyebrow="Alcance y orden">Cuantificadores: no basta con tener las mismas palabras</Heading>
         <Layer type="clase">El profesor amplió el ejemplo «Todos los electrones son negativos»: el cuantificador universal no habla de los electrones ya observados, sino de cualquier objeto del dominio que satisfaga la condición de ser electrón. Desde ahí conectó las proposiciones universales con la falsación: muchos casos favorables no agotan el dominio, mientras un contraejemplo basta para refutar una universal estricta.</Layer>
         <div className="ac2626-quantifiers">
           <article><span>VERDADERA EN DOMINIOS SIN MÁXIMO</span><strong>∀x ∃y (y &gt; x)</strong><p>Para cada número x existe algún número y mayor que x.</p></article>
           <article><span>NO EQUIVALENTE</span><strong>∃y ∀x (y &gt; x)</strong><p>Existe un único y mayor que todos los x. Cambiar el orden cambia la proposición.</p></article>
         </div>
         <Layer type="cotejo">La formulación debe declarar su dominio. La sesión usa números naturales como ejemplo pedagógico, pero el punto lógico general es la diferencia entre ∀x∃y y ∃y∀x. La conexión con Popper es una ampliación docente, no una tesis de Glock en estas páginas.</Layer>
       </section>

       <section id="objetividad">
         <Heading n="03" eyebrow="Glock · p. 50">Existencia, sentido, referencia y tercer reino</Heading>
         <Layer type="fuente">Glock presenta la existencia como una afirmación sobre la satisfacción de un concepto, distingue referencia, sentido y representación subjetiva, y caracteriza los pensamientos como contenidos objetivos que no dependen de una mente individual.</Layer>
         <div className="ac2626-grid">
           <article><span>EXISTENCIA</span><h3>∃x G(x)</h3><p>«Existe al menos una cosa que satisface G»; no se trata simplemente de añadir «existir» como una propiedad ordinaria del objeto.</p></article>
           <article><span>REFERENCIA</span><h3>Bedeutung</h3><p>El objeto designado.</p></article>
           <article><span>SENTIDO</span><h3>Sinn</h3><p>El modo de presentación del referente.</p></article>
           <article><span>REPRESENTACIÓN</span><h3>Vorstellung</h3><p>Asociación privada o psicológica, distinta del sentido objetivo.</p></article>
         </div>
         <Layer type="clase">La explicación docente subraya el costado platónico: una proposición ya tiene sentido y valor de verdad con independencia del estado de ánimo, la intención pragmática o el hecho de que un individuo particular la capte. El sujeto capta un contenido; no lo crea.</Layer>
         <Layer type="cotejo">Esta es la lectura platonista trabajada en clase. No debe generalizarse a toda filosofía posterior del lenguaje, donde contexto, uso y condiciones pragmáticas reciben tratamientos diferentes.</Layer>
       </section>

       <section id="logicismo">
         <Heading n="04" eyebrow="Frege · aritmética y objetividad">Número, cardinalidad y programa logicista</Heading>
         <Layer type="fuente">El pasaje de Glock sitúa a Frege contra Kant y Mill: la aritmética sería a priori pero analítica, demostrable desde axiomas y definiciones, y el concepto de número cardinal debía recibir una explicación lógica.</Layer>
         <Layer type="clase">El profesor recurrió a funciones monádicas, diádicas y triádicas para explicar intuitivamente cardinalidad y el número de argumentos que una expresión admite. También comparó esta objetividad con la idea de que los conceptos están dados independientemente de nosotros.</Layer>
         <div className="ac1910-warning"><span>Frontera académica</span><p>La analogía entre aridad de una función y los números 1, 2 o 3 sirve aquí como recurso de aula. Las páginas cotejadas no autorizan a presentarla como la definición textual completa de número cardinal en Frege.</p></div>
         <Layer type="fuente">Glock enlaza el programa de Frege con la paradoja que surge del uso irrestricto de conjuntos y con la respuesta posterior de Russell.</Layer>
       </section>

       <section id="tipos">
         <Heading n="05" eyebrow="Glock · p. 51">Russell: paradoja, teoría de tipos y límites del logicismo</Heading>
         <Layer type="clase">La imagen pedagógica más clara de la sesión fue la «bolsa de bolsas»: una bolsa que contiene otras bolsas no se trata lógicamente como una bolsa cualquiera dentro de sí misma. Russell introduce niveles o tipos para impedir ciertas expresiones autorreferenciales que alimentan la paradoja.</Layer>
         <div className="ac1910-schema-panel"><span>ESQUEMA · TEORÍA DE TIPOS</span><AnimatedConceptSchema schema={typeSchema}/></div>
         <Layer type="fuente">Glock vincula la teoría de tipos con el intento de proteger el logicismo y con Principia Mathematica; después presenta los teoremas de incompletitud de Gödel como un golpe a la aspiración epistemológica de un fundamento formal autosuficiente.</Layer>
         <Layer type="cotejo">La incompletitud no significa que los teoremas derivados mediante teoremas previos «salgan de otro lado». Una demostración puede encadenar resultados ya probados. El límite relevante concierne a lo que ciertas teorías formales suficientemente expresivas pueden demostrar sobre todos sus enunciados y sobre su propia consistencia, bajo las hipótesis del resultado.</Layer>
       </section>

       <section id="idealismo">
         <Heading n="06" eyebrow="Glock · pp. 51–52">La rebelión contra el idealismo británico</Heading>
         <Layer type="fuente">El texto sitúa a Russell dentro de una formación inicialmente idealista. En Bradley y McTaggart, la realidad última se concibe como una totalidad y las relaciones entre sus aspectos tienden a entenderse como internas o constitutivas de los términos relacionados.</Layer>
         <Layer type="clase">El profesor insistió en el problema que esto plantea para las matemáticas y la lógica: relaciones como «x es menor que y» deben poder analizarse sin quedar absorbidas por una totalidad concreta. La rebelión de Russell y Moore aparece entonces como afirmación de individuos, proposiciones y relaciones con una objetividad que no depende de ser momentos internos del Absoluto.</Layer>
         <div className="ac1910-schema-panel"><span>ESQUEMA · RUPTURA HISTÓRICO-CONCEPTUAL</span><AnimatedConceptSchema schema={rebellionSchema}/></div>
         <div className="ac1910-note"><strong>En palabras simples</strong><p>Si toda relación fuera sólo una parte interna de un todo único, sería difícil explicar cómo una misma relación lógica puede aplicarse a pares distintos. Moore y Russell quieren preservar esa independencia.</p></div>
       </section>

       <section id="verdad">
         <Heading n="07" eyebrow="Glock · pp. 52–53">Moore: antipsicologismo y crítica a la coherencia</Heading>
         <Layer type="fuente">Glock presenta a Moore contra una lectura psicologista del idealismo: que una proposición sea verdadera no depende del acto mental de conocerla. Los objetos del pensamiento son proposiciones y complejos de conceptos que existen con independencia de que alguien los piense.</Layer>
         <Layer type="clase">La clase usa un ejemplo muy intuitivo: una ficción puede ser internamente coherente y seguir siendo ficción. Por eso la coherencia, tomada por sí sola, no basta para explicar la verdad.</Layer>
         <div className="ac2626-truth">
           <div><span>COHERENCIA</span><strong>¿encaja con el sistema?</strong><p>Puede existir incluso en una construcción ficticia bien organizada.</p></div>
           <div><span>OBJETIVIDAD</span><strong>la verdad no depende de creerla</strong><p>Moore y Russell separan verdad y acto psicológico de conocer.</p></div>
         </div>
         <Layer type="cotejo">Glock añade un matiz decisivo: Moore y Russell repudiaron la verdad como mera coherencia, pero no adoptaron inmediatamente una teoría estándar de correspondencia entre una representación mental y un objeto material. La sesión habló de «correspondencia con algo»; aquí se conserva la distinción entre esa explicación oral y el texto.</Layer>
       </section>

       <section id="cierre">
         <Heading n="08" eyebrow="Cierre documentado · 26 octubre">Dónde quedó la lectura</Heading>
         <div className="ac2626-pages">
           <div><b>48–49</b><span>Repaso profundo: función, argumento, cuantificadores y universalidad.</span></div>
           <div><b>50</b><span>Existencia, sentido, referencia y tercer reino.</span></div>
           <div><b>50–51</b><span>Logicismo, paradoja de Russell, tipos y Gödel.</span></div>
           <div><b>51–53</b><span>Idealismo británico, Moore, Russell, relaciones, proposiciones y verdad.</span></div>
         </div>
         <div className="ac1910-final"><span>CONTINUIDAD</span><strong>La sesión alcanzó la página 53.</strong><p>La siguiente clase debe continuar el desarrollo de «La rebelión contra el idealismo». No se recuperó una nueva tarea evaluable ni una fecha de entrega en esta sesión.</p></div>
         <div className="ac1910-actions"><Link to="/semestre/5/filosofia-analitica/clase/21-octubre">CLASE ANTERIOR ↗</Link><Link to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">ATLAS GLOCK ↗</Link></div>
       </section>

       <section className="ac2626-recall">
         <h2>Recuperación activa · 10 años después</h2>
         <p>Responda antes de desplegar la síntesis.</p>
         {recall.map(([question,answer],i)=><details key={question}><summary><span>0{i+1} · </span>{question}</summary><p>{answer}</p></details>)}
       </section>
     </article>
   </div>

   <footer className="ac1910-study-footer"><Link to="/semestre/5/filosofia-analitica">← Índice de Filosofía Analítica</Link><span>Glock · cap. II · clase hasta p. 53 · reconstrucción académica</span></footer>
 </main>
}
