import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import { AnalyticEditorialHeading, AnalyticEditorialIndex } from '../components/analytic/AnalyticEditorialElements'
import '../components/analytic/AnalyticEditorialElements.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass19Oct.css'
import './AnalyticClass21Oct.css'

const sections = [
  ['01','verdad','Puente: verdad y Kant'],
  ['02','crisis','Crisis de fundamentos'],
  ['03','formalizacion','Axiomas y deducción'],
  ['04','pluralidad','Geometrías y alternativas'],
  ['05','logicismo','Programa logicista'],
  ['06','bolzano','Bolzano: forma y objetividad'],
  ['07','boole','Boole y Frege'],
  ['08','funciones','Función, argumento y cuantificadores'],
  ['09','cierre','Balance y continuación'],
]
const schema = {
 title:'Del problema fundacional a la lógica funcional · reconstrucción de la explicación',
 layout:'hierarchy', readingLayout:'vertical-folio', minHeight:810, hierarchyXGap:125, hierarchyYGap:170, rootId:'problema',
 nodes:[
  {id:'problema',label:'Fundamentos',caption:'¿por qué vale?',role:'concept'},
  {id:'axiomas',label:'Axiomas',caption:'principios',role:'term'},
  {id:'reglas',label:'Reglas deductivas',caption:'inferencia',role:'mediation'},
  {id:'teorema',label:'Teoremas',caption:'derivación',role:'result'},
  {id:'filosofia',label:'Pregunta filosófica',caption:'¿por qué esos axiomas?',role:'term'},
 ],
 edges:[
  {from:'problema',to:'axiomas',relationKind:'derives',label:'formaliza'},
  {from:'axiomas',to:'reglas',relationKind:'derives',label:'aplica'},
  {from:'reglas',to:'teorema',relationKind:'derives',label:'deriva'},
  {from:'problema',to:'filosofia',relationKind:'secondary',label:'mantiene'},
 ]
}
const functionSchema = {
 title:'Frege: dos propiedades y un cuantificador',
 layout:'hierarchy',readingLayout:'vertical-folio',minHeight:690,hierarchyXGap:140,hierarchyYGap:155,rootId:'todos',
 nodes:[
  {id:'todos',label:'Para todo x',caption:'cuantificador',role:'concept'},
  {id:'electron',label:'E(x)',caption:'es electrón',role:'term'},
  {id:'implica',label:'Si... entonces...',caption:'condicional',role:'mediation'},
  {id:'negativo',label:'N(x)',caption:'es negativo',role:'result'}
 ],
 edges:[
  {from:'todos',to:'electron',relationKind:'hierarchical',label:'enuncia'},
  {from:'electron',to:'implica',relationKind:'derives',label:'antecedente'},
  {from:'implica',to:'negativo',relationKind:'derives',label:'consecuente'},
 ]
}
const guide = [
 ['46','Las nuevas disciplinas y los problemas de fundamentos'],
 ['46–47','Aritmetización, abstracción, conjuntos e infinito'],
 ['47–48','Bolzano: variación, proposiciones en sí'],
 ['48','Boole: lógica tratada algebraicamente'],
 ['48–49','Frege: lógica de funciones y cuantificadores'],
]
function scrollToSection(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}) }
function Heading({n,eyebrow,children}){return <AnalyticEditorialHeading n={n} eyebrow={eyebrow} className="ac1910-heading">{children}</AnalyticEditorialHeading>}
function Layer({type,children}){return <aside className={'ac1910-provenance '+(type==='clase'?'is-class':'is-source')}><span>{type==='clase'?'EXPLICACIÓN DE CLASE':type==='cotejo'?'PRECISIÓN DOCUMENTAL':'GLOCK · TEXTO COTEJADO'}</span><p>{children}</p></aside>}
export default function AnalyticClass21Oct(){
 return <main className="ac9-page ac1910-page ac2121-page analytic-editorial-page">
  <nav className="ac9-topbar">
    <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
    <Link to="/" className="ac9-brand">Φ Philosophia</Link>
    <span>21 · X · 2026 · Glock hasta p. 49</span>
  </nav>
  <header className="ac9-hero ac1910-hero ac2121-hero">
    <div className="ac9-grid" aria-hidden="true"/>
    <div className="ac9-ghost ac1910-ghost" aria-hidden="true">∴</div>
    <div className="ac9-hero-inner">
      <div>
        <p className="ac9-kicker">Filosofía Analítica · 21 de octubre de 2026</p>
        <h1>De la matemática <em>a la lógica</em></h1>
        <p className="ac9-lead">La crisis de la fundamentación matemática obliga a preguntar por el rigor de las pruebas; Bolzano separa la verdad del acto de pensar, Boole matematiza la lógica y Frege replantea las proposiciones como funciones.</p>
        <div className="ac9-question ac1910-question"><span>Pregunta rectora · reconstrucción de estudio</span><strong>¿Por qué la búsqueda de fundamentos matemáticos exigió una nueva lógica y una noción objetiva de verdad?</strong></div>
        <div className="ac1910-actions">
          <Link to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">ESTUDIAR EN EL SISTEMA 2D ↗</Link>
          <button type="button" onClick={()=>scrollToSection('crisis')}>RECORRER LA CLASE ↓</button>
        </div>
      </div>
      <aside className="ac1910-source-card">
        <span>FRONTERAS DE ESTUDIO</span>
        <div><b>01</b><strong>Sesión efectiva</strong><p>Lectura y explicación hasta la p. 49 (G21–G31).</p></div>
        <div><b>02</b><strong>Libro registrado</strong><p>El atlas ya documenta pp. 40–51; 50–51 no se declaran leídas hoy.</p></div>
        <div><b>03</b><strong>Contexto anticipado</strong><p>Russell, teoría de tipos y Gödel se discutieron como adelanto, no como lectura posterior completa.</p></div>
      </aside>
    </div>
  </header>
  <div className="ac9-layout ac1910-layout">
    <AnalyticEditorialIndex sections={sections} onNavigate={scrollToSection} className="ac1910-index">
      <Link className="ac1910-index-link" to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">Mapa histórico 2D ↗</Link>
    </AnalyticEditorialIndex>
    <article className="ac9-article ac1910-article">
      <section id="verdad"><Heading n="01" eyebrow="Puente con el 19 de octubre">Coherencia, correspondencia y Kant</Heading>
        <Layer type="clase">El profesor retomó la verdad como coherencia: una proposición cuenta como verdadera en relación con los principios y proposiciones admitidos en un sistema. Contrapuso esta salida a la teoría de la correspondencia. Retomó también la tesis kantiana de conocimiento a priori y la revolución copernicana de las condiciones subjetivo-trascendentales del conocer.</Layer>
        <Layer type="cotejo">La coherencia interna no garantiza por sí sola verdad acerca del mundo exterior. La explicación de Kant como verdad dependiente de una mente individual simplifica su tesis trascendental: no debe confundirse sin más con relativismo psicológico.</Layer>
      </section>
      <section id="crisis"><Heading n="02" eyebrow="Glock §2 · p. 46">La matemática comienza a preguntarse por sí misma</Heading>
        <Layer type="fuente">Glock relaciona la autonomía filosófica con los problemas conceptuales y metodológicos de las ciencias especializadas, de manera destacada los fundamentos matemáticos.</Layer>
        <Layer type="clase">La comparación docente contrapuso aplicaciones anteriores —cálculo, probabilidades, estadística, modelos físicos— con la concentración decimonónica en fundamentación, abstracción y rigor. Se insistió en la pregunta: ¿qué justifica que 1 + 1 = 2, más allá de repetir un hábito?</Layer>
        <div className="ac1910-compare"><article><span>Problema formal</span><h3>¿Cómo se demuestra?</h3><p>Precisar el sistema axiomático y las reglas que autorizan la conclusión.</p></article><article><span>Problema filosófico</span><h3>¿Qué son los números?</h3><p>Discutir el estatuto de los números, de la unidad y de los principios elegidos.</p></article></div>
        <Layer type="cotejo">Peano formuló axiomas de la aritmética en 1889, no a comienzos del siglo XIX. Las matemáticas anteriores tampoco fueron exclusivamente aplicadas: la comparación de épocas fue una generalización didáctica.</Layer>
      </section>
      <section id="formalizacion"><Heading n="03" eyebrow="Axiomas → inferencias → demostración">Formalización axiomático-deductiva</Heading>
        <Layer type="clase">El profesor destacó que no basta con que un teorema parezca intuitivamente correcto: debe derivarse conforme a principios, definiciones y reglas de inferencia. La deducción preserva la validez de una inferencia cuando es correcta.</Layer>
        <div className="ac1910-schema-panel"><span>ESQUEMA · RECONSTRUCCIÓN DE LA CLASE</span><AnimatedConceptSchema schema={schema}/></div>
        <div className="ac1910-note"><strong>En palabras simples</strong><p>Una demostración es como seguir instrucciones precisas sin saltarse pasos. La filosofía pregunta además por qué esas instrucciones son las adecuadas.</p></div>
      </section>
      <section id="pluralidad"><Heading n="04" eyebrow="Aritmetización y geometrías no euclidianas">Una sola intuición ya no es suficiente</Heading>
        <Layer type="fuente">El texto aborda la aritmetización, el infinito, la continuidad, la teoría de conjuntos y las geometrías no euclidianas como transformaciones que exigieron mayor rigor lógico.</Layer>
        <Layer type="clase">La aparición de geometrías alternativas sirvió para preguntar si sólo podía existir una geometría evidente; se la comparó con las lógicas no clásicas y el problema de decidir qué sistema es pertinente.</Layer>
        <Layer type="cotejo">Diferentes sistemas geométricos o lógicos no implican automáticamente que todos sean contradictorios o que ninguno sea verdadero. Debe atenderse a sus axiomas, modelos y ámbitos de aplicación.</Layer>
      </section>
      <section id="logicismo"><Heading n="05" eyebrow="La aspiración de una fundamentación unificada">Reducir la aritmética a la lógica</Heading>
        <Layer type="clase">El programa que se discutió parte de la pretensión de dar fundamento lógico a la aritmética y después a las demás ramas matemáticas. El profesor lo enlazó, como ampliación histórica, con los ideales de ciencia unificada del positivismo y del fisicalismo.</Layer>
        <div className="ac2121-ladder"><span>LÓGICA</span><i>fundamentaría</i><span>ARITMÉTICA</span><i>fundamentaría</i><span>OTRAS MATEMÁTICAS</span><i>comparación docente con</i><span>CIENCIAS NATURALES Y SOCIALES</span></div>
        <div className="ac1910-warning"><span>Anticipo histórico de la sesión</span><p>Se mencionaron la paradoja de Russell, la teoría de tipos y los teoremas de Gödel. Son discusiones adelantadas respecto a la página alcanzada: no deben marcarse como lectura de pp. 50–51 realizada hoy.</p></div>
        <Layer type="cotejo">Los teoremas de incompletitud no se explican porque una prueba pase a una «segunda o tercera mano». Una demostración puede usar teoremas previamente probados sin perder completitud. El resultado de Gödel trata de enunciados indecidibles en teorías formales consistentes, efectivamente axiomatizables y suficientemente expresivas para la aritmética.</Layer>
      </section>
      <section id="bolzano"><Heading n="06" eyebrow="Glock · pp. 47–48">Bolzano y la verdad independiente de quien piensa</Heading>
        <Layer type="fuente">Se reconstruyen el método de variación, las proposiciones en sí y el antipsicologismo semántico. Al variar los componentes no lógicos se distingue lo que depende del tema de lo que depende de la forma.</Layer>
        <Layer type="clase">Se propuso que «Bruto mató a César o Bruto no mató a César» mantiene su verdad al cambiar nombres y predicados de modo uniforme: la estructura «P o no P» es lo decisivo. Además se separaron juicios mentales, oraciones lingüísticas y proposiciones objetivas.</Layer>
        <div className="ac2121-formula"><small>VERDAD LÓGICA POR LA FORMA</small><strong>P ∨ ¬P</strong><p>Si se sustituye P de forma uniforme, la fórmula sigue siendo verdadera en lógica clásica.</p></div>
        <Layer type="cotejo">El principio representado es el de tercero excluido, no el de no contradicción. Anticipar una distinción lógica no demuestra influencia histórica directa sobre Frege o Russell.</Layer>
      </section>
      <section id="boole"><Heading n="07" eyebrow="Glock · p. 48">Boole y Frege: dos direcciones distintas</Heading>
        <div className="ac1910-compare"><article><span>George Boole</span><h3>Álgebra de la lógica</h3><p>Modela relaciones lógicas de clases mediante operaciones algebraicas; es un paso relevante, aunque históricamente distinto del programa fregeano.</p></article><article><span>Gottlob Frege</span><h3>Conceptografía · 1879</h3><p>Presenta un lenguaje formal para funciones, argumentos y cuantificación, con el proyecto de fundamentar la aritmética en leyes lógicas.</p></article></div>
        <Layer type="clase">El profesor insistió en que Boole toma recursos algebraicos para trabajar con relaciones lógicas; Frege, en cambio, persigue una lógica que sirva como fundamento, no como mera rama de la matemática.</Layer>
        <Layer type="cotejo">La obra de Frege de 1884 es Los fundamentos de la aritmética; su Begriffsschrift se publicó en 1879. Los detalles de la reducción lógica de la aritmética y el papel de la paradoja pertenecen a un desarrollo histórico posterior.</Layer>
      </section>
      <section id="funciones"><Heading n="08" eyebrow="Glock · pp. 48–49">Función y argumento: el giro técnico decisivo</Heading>
        <Layer type="clase">La analogía fue la función matemática x² + 1: hasta dar un valor a x, no hay un resultado numérico concreto. Frege generaliza el procedimiento a expresiones conceptuales: «x es mortal» puede completarse con «Sócrates». En relaciones, «x conquistó y» puede completarse con «César» y «las Galias».</Layer>
        <div className="ac2121-formula"><small>FUNCIÓN ABIERTA → ARGUMENTO → ENUNCIADO</small><strong>M(x) → M(Sócrates)</strong><p>«x es mortal» → «Sócrates es mortal»: ahora cabe evaluar su verdad.</p></div>
        <Layer type="clase">El contraste con la silogística aristotélica buscó mostrar que la notación moderna representa relaciones de varios lugares y estructuras cuantificadas que una lectura meramente gramatical sujeto–predicado oscurece.</Layer>
        <div className="ac1910-schema-panel"><span>ESQUEMA DE LA FORMALIZACIÓN DE LOS ELECTRONES</span><AnimatedConceptSchema schema={functionSchema}/></div>
        <div className="ac2121-formula"><small>ÚLTIMO EJEMPLO ESTUDIADO · PÁGINA 49</small><strong>∀x (E(x) → N(x))</strong><p>Para todo x: si x es un electrón, entonces x es negativo. E y N son dos predicados; el condicional y el cuantificador componen una estructura mayor.</p></div>
        <div className="ac1910-note"><strong>En palabras simples</strong><p>Ya no sólo identificamos un sujeto y decimos algo de él. Podemos dejar espacios, llenarlos con objetos y describir cómo se relacionan, incluso cuando hablamos de todos o de algunos.</p></div>
        <Layer type="cotejo">La lógica aristotélica sí admite términos singulares y razonamientos sobre individuos en distintos contextos; su silogística de términos es más restringida, pero no equivale a una prohibición absoluta de «Sócrates».</Layer>
      </section>
      <section id="cierre"><Heading n="09" eyebrow="Cierre documentado · 21 octubre">El punto exacto donde nos quedamos</Heading>
        <div className="ac2121-pages">{guide.map(([p,t])=><div key={p}><b>{p}</b><span>{t}</span></div>)}</div>
        <div className="ac1910-final"><span>CIERRE DE LA SESIÓN</span><strong>La lectura se detuvo en la p. 49.</strong><p>Se acordó continuar el próximo miércoles. El material ya sistematizado de las pp. 50–51 se conserva para estudio anticipado, pero no se adjudica a esta clase.</p></div>
        <div className="ac1910-actions"><Link to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">IR AL ATLAS 2D ↗</Link><Link to="/semestre/5/filosofia-analitica/clase/19-octubre">CLASE ANTERIOR ↗</Link></div>
      </section>
    </article>
  </div>
  <footer className="ac1910-study-footer"><Link to="/semestre/5/filosofia-analitica">← Índice de Filosofía Analítica</Link><span>Glock · cap. II · pp. 46–49 · reconstrucción académica</span></footer>
 </main>
}
