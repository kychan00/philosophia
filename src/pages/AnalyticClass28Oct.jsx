import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import { AnalyticEditorialHeading, AnalyticEditorialIndex } from '../components/analytic/AnalyticEditorialElements'
import '../components/analytic/AnalyticEditorialElements.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass19Oct.css'
import './AnalyticClass21Oct.css'
import './AnalyticClass26Oct.css'
import './AnalyticClass28Oct.css'

const sections = [
  ['01', 'contexto', 'El problema de la sesión'],
  ['02', 'moore', 'Moore: analizar conceptos'],
  ['03', 'monismo', 'Análisis frente a síntesis'],
  ['04', 'russell', 'Russell: pluralismo lógico'],
  ['05', 'frege', 'La herramienta de Frege'],
  ['06', 'referencia', 'Sentido, referencia y ficción'],
  ['07', 'rey', 'El actual rey de Francia'],
  ['08', 'forma', 'Forma lógica y gramática'],
  ['09', 'criticas', 'Discusión crítica de la clase'],
  ['10', 'lenguaje', 'Significado y comunicación'],
  ['11', 'wittgenstein', 'Decir y mostrar'],
  ['12', 'cierre', 'Balance y siguiente etapa'],
]

const analysisSchema = {
  title: 'Dos usos del análisis contra el monismo · reconstrucción de clase',
  layout: 'hierarchy', readingLayout: 'vertical-folio', minHeight: 750, hierarchyXGap: 150, hierarchyYGap: 165, rootId: 'rebelion',
  nodes: [
    { id: 'rebelion', label: 'Rebelión realista', caption: 'Moore y Russell', role: 'concept' },
    { id: 'moore', label: 'Moore', caption: 'Conceptos constitutivos', role: 'term' },
    { id: 'russell', label: 'Russell', caption: 'Entidades y relaciones', role: 'term' },
    { id: 'pluralidad', label: 'Pluralidad irreducible', caption: 'Se opone a la totalidad monista', role: 'result' },
  ],
  edges: [
    { from: 'rebelion', to: 'moore', relationKind: 'hierarchical', label: 'analiza conceptos' },
    { from: 'rebelion', to: 'russell', relationKind: 'hierarchical', label: 'analiza estructuras' },
    { from: 'moore', to: 'pluralidad', relationKind: 'derives', label: 'afirma objetos independientes' },
    { from: 'russell', to: 'pluralidad', relationKind: 'derives', label: 'afirma múltiples entidades' },
  ],
}

const descriptionSchema = {
  title: 'La descripción definida se analiza como tres condiciones',
  layout: 'hierarchy', readingLayout: 'vertical-folio', minHeight: 850, hierarchyXGap: 158, hierarchyYGap: 158, rootId: 'oracion',
  nodes: [
    { id: 'oracion', label: 'El actual rey de Francia es calvo', caption: 'Oración aparente sujeto–predicado', role: 'concept' },
    { id: 'existe', label: 'Existencia', caption: 'Hay al menos un rey actual', role: 'term' },
    { id: 'unico', label: 'Unicidad', caption: 'No hay otro distinto', role: 'term' },
    { id: 'calvo', label: 'Predicación', caption: 'El individuo es calvo', role: 'term' },
    { id: 'falso', label: 'Resultado: falsa', caption: 'Falla la condición de existencia', role: 'result' },
  ],
  edges: [
    { from: 'oracion', to: 'existe', relationKind: 'hierarchical', label: 'exige' },
    { from: 'oracion', to: 'unico', relationKind: 'hierarchical', label: 'exige' },
    { from: 'oracion', to: 'calvo', relationKind: 'hierarchical', label: 'exige' },
    { from: 'existe', to: 'falso', relationKind: 'derives', label: 'falla hoy' },
  ],
}

const questions = [
  ['¿Por qué Moore pide analizar las preguntas?', 'Porque una pregunta filosófica puede ser confusa antes de ser respondida; el análisis descompone conceptos y muestra qué se está preguntando.'],
  ['¿Qué representa la jarra de jalea frente a la de perdigones?', 'En la analogía del profesor, la jalea ilustra una totalidad sin piezas separables y los perdigones una pluralidad cuyos elementos y relaciones sí se distinguen.'],
  ['¿En qué difieren las prioridades de Moore y Russell?', 'Según el pasaje de Glock trabajado, Moore combate la negación idealista de objetos independientes de la mente, y Russell la negación monista de una pluralidad de entidades.'],
  ['¿Qué permite la lógica de Frege que la forma escolar sujeto–predicado oculta?', 'Representar funciones, variables, relaciones de varios argumentos, conectivos y cuantificadores, y estudiar su estructura interna.'],
  ['¿Qué hace Russell con «El actual rey de Francia es calvo»?', 'La analiza como una afirmación de existencia, unicidad y calvicie: si no existe tal rey, el análisis completo resulta falso.'],
  ['¿Cuál es la crítica más insistente del profesor?', 'Pregunta si la complejidad lógica supuestamente oculta se descubre en la oración o se introduce para preservar la bivalencia. Es una objeción docente, no la tesis de Russell.'],
  ['¿Cómo se distingue la explicación sobre Wittgenstein de la de Kant?', 'La clase presenta una analogía entre límites del pensamiento o del lenguaje; no son sistemas equivalentes. En el Tractatus, decir/mostrar no implica sin más que exista una representación mental completa de todo lo inexpresable.'],
  ['¿Qué viene después?', 'El profesor cerró el repaso histórico y anunció el paso a la filosofía del lenguaje natural u ordinario. No se fijó una tarea o entrega nueva de manera inequívoca.'],
]

function goTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
function Heading({ n, eyebrow, children }) {
  return <AnalyticEditorialHeading n={n} eyebrow={eyebrow} className="ac1910-heading">{children}</AnalyticEditorialHeading>
}
function Layer({ type, children }) {
  const label = type === 'source' ? 'GLOCK · FRAGMENTO DE LECTURA' : type === 'class' ? 'EXPLICACIÓN DE CLASE' : 'PRECISIÓN EDITORIAL'
  return <aside className={'ac1910-provenance ' + (type === 'class' ? 'is-class' : 'is-source')}><span>{label}</span><p>{children}</p></aside>
}
function Schema({ title, schema }) {
  return <div className="ac1910-schema-panel"><span>{title} · RECONSTRUCCIÓN PEDAGÓGICA</span><AnimatedConceptSchema schema={schema} /></div>
}

export default function AnalyticClass28Oct() {
  return <main className="ac9-page ac1910-page ac2121-page ac2626-page ac28-page analytic-editorial-page">
    <nav className="ac9-topbar">
      <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
      <Link to="/" className="ac9-brand">Φ Philosophia</Link>
      <span>28 · X · 2026 · Glock · fragmento con p. 55 visible</span>
    </nav>

    <header className="ac9-hero ac1910-hero ac28-hero">
      <div className="ac9-grid" aria-hidden="true" />
      <div className="ac9-ghost ac1910-ghost" aria-hidden="true">∃</div>
      <div className="ac9-hero-inner">
        <div>
          <p className="ac9-kicker">Filosofía Analítica · 28 de octubre de 2026</p>
          <h1>El análisis <em>y la forma lógica</em></h1>
          <p className="ac9-lead">De Moore y el rechazo del idealismo a la teoría de las descripciones de Russell: el caso del rey de Francia, la bivalencia y el límite entre decir y mostrar.</p>
          <div className="ac9-question ac1910-question"><span>Problema rector · reconstrucción de estudio</span><strong>¿Puede el análisis revelar la estructura del pensamiento y de la realidad, aunque esa estructura no aparezca en la gramática cotidiana?</strong></div>
          <div className="ac1910-actions">
            <Link to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">ATLAS GLOCK 2D ↗</Link>
            <button type="button" onClick={() => goTo('contexto')}>INICIAR RECORRIDO ↓</button>
          </div>
        </div>
        <aside className="ac1910-source-card">
          <span>CONTROL DOCUMENTAL</span>
          <div><b>01</b><strong>Material cotejado</strong><p>Notas del 28 de octubre; capturas parciales de Glock, capítulo histórico, incluida la p. 55; explicación del profesor aportada para esta clase.</p></div>
          <div><b>02</b><strong>Continuidad</strong><p>La sesión del 26 había llegado al comienzo de la rebelión de Moore y Russell contra el idealismo.</p></div>
          <div><b>03</b><strong>Límite</strong><p>No se presentan como íntegramente cotejadas las páginas del libro sólo visibles en fragmentos. Los ejemplos no literales están identificados.</p></div>
        </aside>
      </div>
    </header>

    <section className="ac28-archivum" aria-label="Archivo para recordar la sesión">
      <div className="ac28-micro">ARCHIVUM ACADEMICUM · RECONSTRUCCIÓN MNEMÓNICA</div>
      <h2>De descomponer conceptos a descubrir condiciones lógicas ocultas</h2>
      <p>La discusión pasa de la crítica de Moore y Russell a una totalidad monista, a la nueva capacidad de la lógica fregeana, y culmina en una pregunta polémica: ¿describir la estructura lógica de la proposición equivale a describir la estructura del mundo?</p>
      <div className="ac28-triad">
        <div><b>α · ONTOLOGÍA</b><span>Pluralidad frente a monismo</span></div>
        <div><b>β · ANÁLISIS</b><span>Función, relación y paráfrasis</span></div>
        <div><b>γ · LÍMITES</b><span>Bivalencia, lenguaje y realidad</span></div>
      </div>
      <figure>
        <img src={`${import.meta.env.BASE_URL}images/filosofia-analitica/archivum-28-octubre-descripciones.svg`} loading="lazy" alt="Esquema original: la frase «El actual rey de Francia es calvo» se analiza en tres condiciones —existencia, unicidad y predicación—, y al fallar la existencia resulta falsa en la lectura russelliana."/>
        <figcaption>Figura 1 · De la oración superficial a las condiciones de verdad. Léase de izquierda a derecha; la afirmación se analiza como un conjunto de condiciones y no como simple sujeto más predicado.</figcaption>
      </figure>
      <p className="ac28-credit">Ilustración SVG original de PHILOSOPHIA, licencia interna ORIGINAL-OWNED; esquema editorial derivado de la discusión, no copia del libro ni del pizarrón.</p>
    </section>

    <div className="ac9-layout ac1910-layout">
      <AnalyticEditorialIndex sections={sections} onNavigate={goTo} className="ac1910-index">
        <Link className="ac1910-index-link" to="/semestre/5/filosofia-analitica/clase/26-octubre">Clase anterior · 26 octubre ↗</Link>
        <Link className="ac1910-index-link" to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">Atlas histórico Glock ↗</Link>
      </AnalyticEditorialIndex>
      <article className="ac9-article ac1910-article">
        <section id="contexto">
          <Heading n="01" eyebrow="Continuidad · del 26 al 28 de octubre">El problema de la sesión</Heading>
          <Layer type="source">En los pasajes de Glock capturados se contraponen dos preocupaciones: Moore rechaza que los objetos dependan de la mente; Russell rechaza que la realidad se reduzca a una totalidad indivisible. El autor pasa después del análisis descomposicional a la lógica y a las descripciones definidas.</Layer>
          <Layer type="class">El profesor enmarca el comienzo analítico como una rebelión contra el idealismo británico. Insiste en que muchas dificultades se mantienen porque las preguntas no se examinan antes de intentar responderlas.</Layer>
          <p>En la primera parte se contraponen dos modelos: <strong>analizar</strong> es distinguir componentes y conexiones; <strong>sintetizar</strong>, tal como la exposición caracteriza al monismo, termina por reducir la multiplicidad a un único principio.</p>
          <div className="ac28-method"><strong>Antes de estudiar</strong> Recupera la sesión anterior: ¿qué son relaciones externas, proposiciones objetivas y pluralismo? La respuesta prepara la diferencia entre las prioridades de Moore y Russell.</div>
        </section>

        <section id="moore">
          <Heading n="02" eyebrow="Moore · sentido común y análisis conceptual">Preguntar bien antes de contestar</Heading>
          <Layer type="source">El fragmento sobre Moore presenta su propuesta de preguntar qué problema se ha formulado antes de ofrecer una solución espectacular. Entiende el análisis como descomposición de conceptos complejos —también de proposiciones— en constituyentes más simples.</Layer>
          <Layer type="class">Para ilustrar el procedimiento, el profesor descompone «caballo» en rasgos como «animal» y «cuadrúpedo», y compara este modo de operar con una división conceptual de inspiración platónica.</Layer>
          <div className="ac28-steps">
            <div><b>CONCEPTO</b><h3>Caballo</h3><p>Se parte de una expresión compleja que pide aclaración.</p></div>
            <div><b>DESCOMPOSICIÓN</b><h3>Animal · cuadrúpedo</h3><p>Se distinguen notas constitutivas relevantes para la definición.</p></div>
            <div><b>OBJETIVO</b><h3>Hacer inteligible</h3><p>La definición vuelve examinable el problema sin presuponer una dialéctica totalizante.</p></div>
          </div>
          <p>El segundo ejemplo del profesor es «verdad»: según su exposición de Moore, la objetividad del concepto no queda sometida al humor o las preferencias del sujeto. La comparación con el <em>eidos</em> platónico pertenece a la explicación docente; no es una cita de Glock.</p>
        </section>

        <section id="monismo">
          <Heading n="03" eyebrow="La jarra de jalea y la caja de perdigones">La oposición entre totalidad y pluralidad</Heading>
          <Layer type="source">Glock recoge la oposición atribuida a Russell: para Bradley el mundo sería una totalidad indivisible, comparable a un tarro de jalea; para Russell hay distintos «átomos» físicos o lógicos, comparables a perdigones en una caja.</Layer>
          <Layer type="class">El profesor reelabora la analogía con miel y balines: en una masa homogénea resulta difícil encontrar partes separables; en una colección de balines se pueden distinguir piezas y explicar sus relaciones.</Layer>
          <div className="ac28-contrast"><div><b>MONISMO · EN LA EXPLICACIÓN</b><p>Una sustancia o totalidad última. La diversidad es interpretada como aparente y el análisis parece perder su objeto.</p></div><div><b>PLURALISMO · EN LA EXPLICACIÓN</b><p>Objetos, propiedades o relaciones distinguibles. El análisis puede examinar componentes sin disolverlos en una única entidad.</p></div></div>
          <Schema title="ESQUEMA 01" schema={analysisSchema}/>
          <div className="ac28-warning"><strong>Precisión filosófica</strong> «Monismo = incapacidad absoluta de analizar» es la manera polémica de construir la oposición en clase, no una demostración de que todo monismo histórico prohíba cualquier distinción conceptual.</div>
        </section>

        <section id="russell">
          <Heading n="04" eyebrow="Russell · análisis y pluralidad">De las partes de una idea a las entidades lógicas</Heading>
          <Layer type="source">Glock describe el Russell inicial como favorable a una ontología generosa: llegó a aceptar como objetos de discurso entidades abstractas, ficticias e incluso imposibles. Más adelante la nueva lógica le permitirá reformular enunciados sin comprometerse con todos sus aparentes objetos.</Layer>
          <Layer type="class">Según la reconstrucción del profesor, Moore antepone la independencia mental de los conceptos y Russell la multiplicidad de entidades y relaciones lógicas. Ambos se oponen al monismo, pero no usan exactamente el mismo análisis.</Layer>
          <div className="ac28-contrast"><div><b>MOORE</b><p>Pregunta qué conceptos componen algo y por qué la verdad o el significado no dependen simplemente del sujeto.</p></div><div><b>RUSSELL</b><p>Pregunta qué estructura lógica compone una proposición y qué entidades queda realmente comprometida a afirmar.</p></div></div>
          <p>El profesor introduce la metáfora de las piezas de LEGO: una mente no necesita almacenar infinitas ideas completas; puede combinar un repertorio de expresiones, relaciones y recursos lógicos para construir innumerables proposiciones. Es <strong>analogía pedagógica</strong>, no una tesis psicológica textual de Russell.</p>
        </section>

        <section id="frege">
          <Heading n="05" eyebrow="La nueva lógica · funciones y cuantificación">Más allá de sujeto y predicado</Heading>
          <Layer type="class">El profesor recupera una fórmula del pizarrón para mostrar cómo se localizan conectivos, variables, cuantificadores y funciones de varios argumentos. Su escritura no queda completamente descifrable en las notas; por ello no se ofrece una reproducción literal del símbolo dibujado.</Layer>
          <p>Una expresión como <code>R(x,y)</code> puede representar una relación de dos lugares; <code>P(x)</code>, una propiedad de un lugar. Los cuantificadores <code>∀</code> y <code>∃</code> permiten indicar generalidad y existencia sin reducir toda proposición a una pareja simple de sujeto y predicado.</p>
          <div className="ac28-formula"><small>EJEMPLO EDITORIAL · NO ES LA FÓRMULA LITERAL DEL PIZARRÓN</small><code>∀x (P(x) → ∃y R(x,y))</code><p>Para cada objeto x que cumple P existe algún y relacionado con x mediante R. El ejercicio permite identificar alcance de cuantificadores, relación binaria, implicación y componentes de una proposición.</p></div>
          <Layer type="source">Glock señala que, a diferencia del análisis principalmente conceptual de Moore, Russell fue pionero en el uso filosófico del análisis lógico: la formalización sirve para parafrasear proposiciones problemáticas y evitar compromisos ontológicos dudosos.</Layer>
          <div className="ac28-warning"><strong>Comparación histórica limitada</strong> La afirmación docente de que Aristóteles sólo dispone de una estructura sujeto–predicado simplifica la diferencia pedagógica. No debe leerse como inventario exhaustivo de toda la lógica antigua.</div>
        </section>

        <section id="referencia">
          <Heading n="06" eyebrow="Primer Russell, Frege y el giro posterior">Sentido, referencia y objetos de ficción</Heading>
          <Layer type="class">El profesor contrasta un Russell temprano, permisivo con referentes ficticios o imposibles, con un Russell posterior que toma distancia de esa generosidad ontológica. Para presentar el problema emplea a Zeus, fantasmas, el cuadrado redondo y la oración sobre el rey de Francia.</Layer>
          <p>En la explicación se introduce la distinción fregeana entre <strong>sentido</strong> y <strong>referencia</strong>: una expresión puede permitir captar un modo de presentación sin designar efectivamente un objeto existente. El paso al valor de verdad de una oración exige mayor precisión.</p>
          <div className="ac28-steps">
            <div><b>EXPRESIÓN</b><h3>«Zeus»</h3><p>La clase lo usa para pensar entidades ficticias como objetos del discurso.</p></div>
            <div><b>SENTIDO</b><h3>Modo de presentación</h3><p>Podemos comprender una expresión aun cuando falte cierto tipo de referencia.</p></div>
            <div><b>PROBLEMA</b><h3>Compromiso ontológico</h3><p>¿De qué nos comprometemos a afirmar la existencia cuando construimos la proposición?</p></div>
          </div>
          <div className="ac28-warning"><strong>Distinción indispensable</strong> No se atribuye a Frege la tesis indiferenciada de que cualquier nombre ficticio tiene referente real. Tampoco se identifica sin más el primer Russell con Frege. La clase presenta esta evolución de manera esquemática y polémica.</div>
        </section>

        <section id="rey">
          <Heading n="07" eyebrow="Teoría de las descripciones · Glock, p. 55 visible">«El actual rey de Francia es calvo»</Heading>
          <Layer type="source">El fragmento fotografiado presenta la distinción de Frege entre sentido y referencia en el ejemplo del rey de Francia y, a continuación, la paráfrasis cuantificada de Russell: existe un rey actual de Francia, es único y es calvo.</Layer>
          <p>La forma gramatical parece atribuir directamente una propiedad a un individuo. Russell propone que la descripción <em>«el actual rey de Francia»</em> no funciona como un nombre propio simple: la oración completa articula condiciones de existencia, unicidad y predicación.</p>
          <div className="ac28-formula"><small>RECONSTRUCCIÓN ESTÁNDAR · PREDICADOS K Y B</small><code>∃x [K(x) ∧ ∀y(K(y) → y = x) ∧ B(x)]</code><p><strong>K(x):</strong> x es actualmente rey de Francia. <strong>B(x):</strong> x es calvo. El análisis afirma que existe al menos un x, que cualquier rey actual de Francia es ese mismo x y que x es calvo.</p></div>
          <Schema title="ESQUEMA 02" schema={descriptionSchema}/>
          <div className="ac28-contrast"><div><b>FREGE · EN EL CONTRASTE DEL TEXTO</b><p>La descripción puede dar sentido a la oración sin garantizar el referente; en el tratamiento discutido, el enunciado queda sin valor de verdad ordinario.</p></div><div><b>RUSSELL · ANÁLISIS DESCRIPTIVO</b><p>El enunciado completo queda en condiciones de ser falso: falla la cláusula existencial, sin necesidad de introducir un rey ficticio como entidad.</p></div></div>
          <Layer type="class">El profesor insiste en que la oración se vuelve falsa si no se satisface una de las condiciones. A la vez, pregunta por qué la paráfrasis posee una complejidad que no es visible en el enunciado cotidiano.</Layer>
        </section>

        <section id="forma">
          <Heading n="08" eyebrow="Forma gramatical ≠ forma lógica">¿Qué significa descubrir una estructura oculta?</Heading>
          <Layer type="source">El pasaje de Glock indica que la teoría de las descripciones permite transformar una oración completa en otra formulación sin los símbolos aparentemente designativos problemáticos. El análisis busca revelar una forma lógica que puede diferir de la forma gramatical.</Layer>
          <p>La conclusión formal de Russell no es que podamos reemplazar oraciones arbitrariamente. Sostiene que las expresiones que parecen nombres pueden funcionar como <strong>símbolos incompletos</strong>, cuyo papel aparece dentro de oraciones completas.</p>
          <div className="ac28-quote">La pregunta decisiva de la sesión: ¿el análisis revela lo que ya estaba en la oración o introduce lo necesario para resolver un problema lógico?</div>
          <div className="ac28-steps"><div><b>SUPERFICIE</b><h3>Nombre aparente</h3><p>«El actual rey de Francia» se comporta gramaticalmente como sujeto.</p></div><div><b>PARÁFRASIS</b><h3>Cuantificadores</h3><p>La formalización identifica las condiciones implícitas de la descripción definida.</p></div><div><b>RESULTADO</b><h3>Verdad o falsedad</h3><p>La oración completa se evalúa al determinar si las condiciones se cumplen.</p></div></div>
        </section>

        <section id="criticas">
          <Heading n="09" eyebrow="Discusión del profesor · objeciones, no doctrinas establecidas">La sospecha de una formalización hecha a medida</Heading>
          <div className="ac28-debate">
            <h3>Cuatro objeciones formuladas durante la sesión</h3>
            <ol>
              <li>¿Por qué encontrar tres condiciones donde la oración corriente no muestra explícitamente tres conjunciones?</li>
              <li>¿En qué casos se justifica buscar forma lógica oculta y cuándo basta una forma simple?</li>
              <li>¿No se está formalizando de ese modo, en buena parte, para defender que las proposiciones sean verdaderas o falsas?</li>
              <li>Si se redefine el significado de una expresión al parafrasearla, ¿qué lugar conservan el uso lingüístico heredado y la filología?</li>
            </ol>
            <p>Estas son <strong>preguntas críticas del profesor</strong>, preservadas como parte de la clase. No se presentan como refutaciones demostradas de Russell, ni como afirmaciones del propio Glock.</p>
          </div>
          <Layer type="class">El ejemplo adicional de «silla» contrasta la descripción empírica de un objeto con el significado histórico de una palabra. El profesor acusa al programa de análisis lógico de desatender una herencia lingüística que, paradójicamente, necesita utilizar para describir la experiencia.</Layer>
          <div className="ac28-warning"><strong>Control de atribución</strong> La clase caracteriza ciertas paráfrasis como arbitrarias y propone que «todo nombre es una descripción disfrazada». Esa caracterización es más amplia y controvertida que la teoría russelliana de descripciones definidas: se registra como lectura del aula, no como formulación textual irrestricta de Russell.</div>
        </section>

        <section id="lenguaje">
          <Heading n="10" eyebrow="Bivalencia y lógicas no clásicas">¿Describir el mundo o comunicar?</Heading>
          <Layer type="class">El profesor relaciona la bivalencia con las aspiraciones logicistas de fundamentar las matemáticas y la contrapone con la aparición de lógicas multivaluadas. Se mencionan su utilidad en computación y la pregunta filosófica por el significado de numerosos valores de verdad.</Layer>
          <p>En el plano del lenguaje, formula un contraste: una visión muy centrada en proposiciones descriptivas deja fuera de su campo saludos, preguntas y usos comunicativos ordinarios. Desde una perspectiva de comunicación, estas expresiones sí tienen funciones y significados.</p>
          <div className="ac28-contrast"><div><b>ÁMBITO LÓGICO DE LA CLASE</b><p>Enunciados declarativos, condiciones de verdad, referentes y posibilidad de análisis formal.</p></div><div><b>ÁMBITO COMUNICATIVO DISCUTIDO</b><p>Saludar, preguntar, expresar sentimientos y compartir códigos lingüísticos entre hablantes.</p></div></div>
          <div className="ac28-warning"><strong>Precisión conceptual</strong> Bivalencia, principio de tercero excluido y lógica clásica están relacionados, pero no son términos intercambiables. La existencia de lógicas multivaluadas tampoco basta por sí sola para concluir que la lógica clásica carece de valor filosófico.</div>
        </section>

        <section id="wittgenstein">
          <Heading n="11" eyebrow="Intercambio de preguntas · Tractatus, Kant y lo místico">Decir, mostrar y pensar lo inexpresable</Heading>
          <Layer type="class">Una intervención pregunta si el último aforismo del <em>Tractatus</em> implica que lo metafísico no pueda pensarse o imaginarse, aunque no pueda decirse con certeza. El profesor distingue mente y lenguaje y explica que lo místico puede mostrarse, pero no formularse como proposición descriptiva del mundo.</Layer>
          <div className="ac28-contrast"><div><b>LECTURA DE WITTGENSTEIN EN CLASE</b><p>La forma proposicional fija límites de lo que puede decirse con sentido; se abre una diferencia entre lo decible y lo que sólo se muestra.</p></div><div><b>COMPARACIÓN CON KANT EN CLASE</b><p>Se recuerda que las condiciones del conocer y las categorías limitan la posibilidad de conocimiento; aparece el ejemplo de Dios como problema de representación y demostración.</p></div></div>
          <p>El profesor propone como interpretación que la mente podría exceder las posibilidades de expresión lingüística. Contrasta esa lectura con un monismo mente–lenguaje, en el que no habría pensamientos fuera de la forma lingüística.</p>
          <div className="ac28-warning"><strong>Precisión histórico-filosófica</strong> La lectura dualista del primer Wittgenstein es una <em>interpretación discutida en clase</em>; no se desprende sin dificultad del <em>Tractatus</em>. Asimismo, Kant no afirma de manera simple que tengamos intuición o conocimiento de Dios. La comparación ayuda a estudiar los límites, pero no identifica ambas filosofías.</div>
          <div className="ac28-method"><strong>Pregunta para reconstruir el intercambio</strong> Si algo no puede expresarse como proposición descriptiva, ¿significa que carece de sentido para cualquier uso del lenguaje, o sólo que no pertenece a cierto tipo de discurso lógico? Esta pregunta prepara el tránsito a la filosofía del lenguaje ordinario.</div>
        </section>

        <section id="cierre">
          <Heading n="12" eyebrow="Síntesis y horizonte del curso">De Russell al lenguaje ordinario</Heading>
          <Layer type="source">El último fragmento de Glock disponible caracteriza el análisis russelliano como un recurso lógico para eliminar aparentes compromisos con entidades dudosas. También señala la expectativa de que una proposición correctamente analizada exhiba una estructura correspondiente a la de los hechos.</Layer>
          <Layer type="class">El profesor cierra con el lenguaje como posible espejo estructural de la realidad, recuerda la cuestión kantiana del acceso a los fenómenos y concluye que, con esto, dejan atrás el repaso del giro lingüístico y del positivismo lógico para entrar a la filosofía del lenguaje natural.</Layer>
          <div className="ac28-steps">
            <div><b>ANTES</b><h3>26 de octubre</h3><p>Frege, función, cuantificación, sentido, referencia y rebelión contra el idealismo.</p></div>
            <div><b>HOY</b><h3>28 de octubre</h3><p>Moore, Russell, descripción definida, bivalencia, forma lógica y límites del decir.</p></div>
            <div><b>DESPUÉS</b><h3>Lenguaje ordinario</h3><p>Se anuncia un cambio de foco hacia las funciones y usos cotidianos del lenguaje.</p></div>
          </div>
          <div className="ac28-method"><strong>Tarea y alcance</strong> No se identifica una nueva entrega evaluable ni una fecha límite confirmada en los materiales de la sesión. El estudio continúa con Glock y con el tránsito anunciado hacia filosofía del lenguaje ordinario.</div>
          <div className="ac28-check"><h2>Autoevaluación · ocho preguntas</h2><p>Primero intenta responder sin abrir la solución. Después contrasta cada respuesta con la exposición de clase y el fragmento de Glock.</p>{questions.map(([question,answer],i)=><details key={question}><summary>{String(i+1).padStart(2,'0')} · {question}</summary><p>{answer}</p></details>)}</div>
          <p className="ac28-micro">FUENTES Y TRAZABILIDAD</p>
          <p>Sesión del 28 de octubre de 2026: notas manuscritas y capturas de lectura conservadas en el PDF de clase, junto con la exposición facilitada para la sistematización. Base bibliográfica: Hans-Johann Glock, <em>¿Qué es la filosofía analítica?</em>, capítulo de panorama histórico, fragmentos con p. 55 identificable. Las fórmulas normalizadas, figuras y preguntas de autoevaluación son reconstrucciones editoriales.</p>
          <p><Link to="/semestre/5/filosofia-analitica/clase/26-octubre">← Volver a la clase del 26 de octubre</Link> · <Link to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">Abrir atlas Glock</Link></p>
        </section>
      </article>
    </div>
  </main>
}
