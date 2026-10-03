import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './AnalyticClass26Aug.css'

const sections = [
  ['00','mapa','Mapa de la sesión'],
  ['01','waismann','Waismann y la reducción positivista'],
  ['02','moore','Moore, análisis conceptual y Quine'],
  ['03','taxonomia','Doctrinas, problemas y aproximaciones'],
  ['04','metodo','Por qué el método no basta'],
  ['05','genealogia','Afiliación genética y escuelas'],
  ['06','bolzano','Bolzano, Frege y el límite histórico'],
  ['07','propuesta','Argumento y justificación'],
  ['08','lenguaje','El análisis del lenguaje como herramienta'],
  ['09','positivismo','Schlick, Wittgenstein y la ciencia'],
  ['10','criterios','Criterios provisionales'],
  ['11','cierre','Cierre y continuidad'],
]

const taxonomies = [
  { id:'doctrine', label:'Doctrina', question:'¿Comparten una tesis filosófica?', answer:'No. Dentro de la tradición analítica hay posiciones epistemológicas, ontológicas y éticas incompatibles.' },
  { id:'problem', label:'Problema', question:'¿Trabajan un mismo tema?', answer:'No. Hay filosofía analítica de la mente, ética, epistemología, metafísica, lenguaje, ciencia y política.' },
  { id:'method', label:'Método', question:'¿Todos usan el mismo método analítico?', answer:'No. El análisis conceptual descomposicional no caracteriza a todos; Quine es el contraejemplo explícito de Føllesdal.' },
  { id:'genetic', label:'Genealogía', question:'¿Todos pertenecen a una misma escuela histórica?', answer:'Tampoco. La afinidad sistemática no garantiza una relación efectiva de maestro, discípulo o influencia histórica.' },
]

const traits = [
  ['01','Análisis del lenguaje','Herramienta para aclarar el problema, no finalidad exclusiva.'],
  ['02','Argumentación racional','Dar razones explícitas para aceptar o rechazar una posición.'],
  ['03','Justificación','Examinar qué se sigue de una tesis y de qué otras tesis depende.'],
  ['04','Contexto histórico','Distinguir precursores de la tradición analítica propiamente dicha.'],
]

const goTo=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

function Heading({n,eye,children}) {
  return <div className="an26-heading"><span>{n}</span><div><p>{eye}</p><h2>{children}</h2></div></div>
}

export default function AnalyticClass26Aug() {
  const [taxId,setTaxId]=useState('doctrine')
  const tax=useMemo(()=>taxonomies.find(x=>x.id===taxId)||taxonomies[0],[taxId])

  return (
    <main className="an26-page">
      <nav className="an26-nav">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="an26-brand">Φ · Philosophia</Link>
        <span>XXVI · VIII · MMXXVI</span>
      </nav>

      <header className="an26-hero">
        <div className="an26-ghost" aria-hidden="true">∴</div>
        <p className="an26-kicker">FI264 · Cuarta clase · 26 de agosto de 2026</p>
        <h1>Genealogía,<em>argumento y justificación</em></h1>
        <p className="an26-lead">
          Continuación de Føllesdal: después de descartar doctrina, tema, escuela
          y método único como criterios suficientes, la clase busca qué caracteriza
          positivamente la aproximación analítica y qué papel ocupa en ella el lenguaje.
        </p>
        <div className="an26-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Qué distingue a la filosofía analítica sin reducirla a filosofía del lenguaje ni convertirla en una etiqueta para toda buena filosofía?</strong>
        </div>
        <div className="an26-chain">
          <span>análisis</span><b>→</b><span>taxonomía</span><b>→</b><span>genealogía</span><b>→</b><span>argumento</span><b>→</b><span>justificación</span>
        </div>
      </header>

      <div className="an26-layout">
        <aside className="an26-index">
          <p>Index analyticus</p>
          {sections.map(([n,id,label])=><button key={id} type="button" onClick={()=>goTo(id)}><span>{n}</span>{label}</button>)}
        </aside>

        <article className="an26-article">
          <section id="mapa">
            <Heading n="00" eye="Argumentum">Arquitectura de la sesión</Heading>
            <div className="an26-route">
              {['WAISMANN','MOORE','QUINE','TAXONOMÍA','MÉTODO','GENEALOGÍA','BOLZANO / FREGE','ARGUMENTO','JUSTIFICACIÓN','ANÁLISIS DEL LENGUAJE'].map((x,i,a)=><span key={x}>{x}{i<a.length-1&&<b>↓</b>}</span>)}
            </div>
            <aside className="an26-thesis"><span>TESIS DE TRABAJO</span><p>La sesión no busca una esencia doctrinal compartida por todos los analíticos. Busca una combinación de prácticas: razones explícitas, justificación evaluable y atención al lenguaje, situada además dentro de una tradición histórica determinada.</p></aside>
          </section>

          <section id="waismann">
            <Heading n="01" eye="Waismann · positivismo lógico">Cuando la filosofía queda reducida al análisis</Heading>
            <p>La clase retoma la formulación de Friedrich Waismann según la cual la filosofía puede entenderse como análisis lógico de nuestros pensamientos. Dentro de la lectura positivista más restrictiva, la filosofía no produciría teorías propias: aclararía proposiciones y dejaría a la ciencia la tarea de establecer su verdad empírica.</p>
            <div className="an26-two">
              <article><span>LECTURA RESTRICTIVA</span><strong>filosofía → clarificación</strong><p>Analizar significado, forma lógica y condiciones de verdad.</p></article>
              <article><span>CIENCIA</span><strong>proposición → contrastación</strong><p>Investigar si aquello ya aclarado resulta verdadero o falso respecto de la realidad.</p></article>
            </div>
            <aside className="an26-warning"><span>OBSERVACIÓN DE CLASE</span><p>El profesor considera esta imagen demasiado reduccionista si se pretende convertirla en definición general de la filosofía analítica.</p></aside>
          </section>

          <section id="moore">
            <Heading n="02" eye="Analysis conceptuum">Moore, el caballo y el problema de los simples</Heading>
            <p>Føllesdal utiliza a G. E. Moore como ejemplo de una concepción descomposicional del análisis: examinar un concepto de manera análoga a una disección, separando sus componentes y relaciones.</p>
            <div className="an26-horse"><span>CABALLO</span><b>→</b><span>animal</span><b>→</b><span>mamífero</span><b>→</b><span>equino</span><b>→</b><span>ser vivo</span></div>
            <p>La clase señala dos dificultades: algunos análisis terminan postulando conceptos simples o inanalizables, y otros pueden desembocar en descomposiciones circulares. Por eso el análisis conceptual al estilo de Moore no sirve como condición necesaria de toda la tradición.</p>
            <div className="an26-contrast">
              <article><span>MOORE</span><strong>descomposición conceptual</strong><p>Busca componentes o elementos del concepto.</p></article><b>≠</b>
              <article><span>QUINE</span><strong>contra la definición universal</strong><p>Su rechazo de los conceptos vuelve demasiado estrecha una definición puramente conceptual de lo analítico.</p></article>
            </div>
          </section>

          <section id="taxonomia">
            <Heading n="03" eye="Taxonomia">Doctrinas, problemas y aproximaciones</Heading>
            <p>Føllesdal observa que las historias de la filosofía mezclan criterios distintos. Algunas corrientes se reconocen por doctrinas; otras por problemas; otras parecen definirse mejor por una forma de aproximación. El problema es encontrar un principio que no mezcle niveles incompatibles.</p>
            <div className="an26-tabs">
              {taxonomies.map(item=><button key={item.id} type="button" className={taxId===item.id?'active':''} onClick={()=>setTaxId(item.id)}><strong>{item.label}</strong></button>)}
            </div>
            <div className="an26-focus"><span>{tax.label.toUpperCase()}</span><h3>{tax.question}</h3><p>{tax.answer}</p></div>
            <aside className="an26-note"><span>HERMENÉUTICA</span><p>La lectura la usa como ejemplo de una corriente identificada por el campo de la comprensión e interpretación. El profesor subraya que esto no basta para convertir automáticamente a la hermenéutica en filosofía analítica y considera cuestionable borrar esa frontera.</p></aside>
          </section>

          <section id="metodo">
            <Heading n="04" eye="Methodus">El candidato prometedor también falla</Heading>
            <p>Definir “filosofía analítica” como “filosofía que usa el método analítico” parece inicialmente atractivo, pero produce dos problemas: deja fuera autores canónicamente analíticos que no trabajan con un único método y abre la puerta a autores externos que ocasionalmente usan procedimientos analíticos.</p>
            <div className="an26-equation"><span>MÉTODO ANALÍTICO</span><b>≠</b><strong>CONDICIÓN SUFICIENTE DE PERTENENCIA</strong></div>
            <p>De ahí la propuesta trabajada en clase: conviene clasificar con cuidado también los <strong>trabajos</strong>, no congelar a una persona dentro de una sola etiqueta para toda su producción.</p>
          </section>

          <section id="genealogia">
            <Heading n="05" eye="Affiliatio genetica">¿Una escuela de maestros y discípulos?</Heading>
            <p>La afiliación genética intenta ordenar corrientes mediante relaciones históricas efectivas: maestros, discípulos, debates, lecturas e influencias compartidas. Funciona bien para ciertas escuelas, pero no resuelve sin residuos el caso de la filosofía analítica.</p>
            <div className="an26-origin">
              <article><span>1903</span><strong>Russell + Moore</strong><p><em>The Principles of Mathematics</em> y “The Refutation of Idealism”.</p></article><b>↔</b>
              <article><span>1879</span><strong>Frege</strong><p><em>Begriffsschrift</em> obliga a desplazar hacia atrás el posible comienzo.</p></article>
            </div>
            <aside className="an26-thesis"><span>CONDICIÓN HISTÓRICA</span><p>El profesor insiste en separar <strong>precursores</strong> de la tradición analítica propiamente dicha. Tener rasgos semejantes no basta para proyectar la etiqueta retrospectivamente sobre cualquier autor.</p></aside>
          </section>

          <section id="bolzano">
            <Heading n="06" eye="Bolzano · Frege">Afinidad sistemática no equivale a conexión genética</Heading>
            <p>Bolzano introduce el contraejemplo decisivo. Sus análisis pueden parecer sorprendentemente cercanos a problemas y estilos que después serán característicos de la filosofía analítica, pero esa similitud no demuestra una cadena histórica directa hacia Frege, Russell o Moore.</p>
            <div className="an26-bolzano">
              <article><span>BOLZANO</span><strong>afinidad sistemática</strong><p>Conclusiones y herramientas que hoy reconocemos como cercanas.</p></article><b>≠</b>
              <article><span>TRADICIÓN</span><strong>influencia histórica efectiva</strong><p>Recepción, lectura, continuidad, debate y transmisión.</p></article>
            </div>
            <p>La clase considera especialmente problemática la conclusión de que un autor sea “analítico” sólo porque retrospectivamente encontremos semejanzas. La analogía sistemática debe distinguirse de la genealogía.</p>
          </section>

          <section id="propuesta">
            <Heading n="07" eye="Argumentum · Iustificatio">La propuesta positiva de Føllesdal</Heading>
            <p>Después de las respuestas negativas, Føllesdal formula el candidato positivo más importante de esta parte de la lectura: la filosofía analítica concede un peso especial al <strong>argumento y la justificación</strong>.</p>
            <div className="an26-argument">
              <span>POSICIÓN</span><b>→</b>
              <div><strong>¿por qué aceptarla?</strong><small>razones a favor</small></div><b>/</b>
              <div><strong>¿por qué rechazarla?</strong><small>razones en contra</small></div><b>→</b>
              <span>CONSECUENCIAS</span>
            </div>
            <p>Evaluar una tesis exige preguntar qué se sigue de ella, de qué otras posiciones depende, cómo puede fortalecerse y bajo qué condiciones debe abandonarse o reformularse.</p>
          </section>

          <section id="lenguaje">
            <Heading n="08" eye="Lingua ut instrumentum">El lenguaje no es la meta: es la herramienta</Heading>
            <p>La sesión fija una distinción central: la filosofía analítica no se identifica con filosofía del lenguaje. El análisis lingüístico es fundamental porque permite localizar ambigüedades, distinguir formulaciones y hacer evaluable la estructura de un argumento.</p>
            <div className="an26-tool"><span>PROBLEMA FILOSÓFICO</span><b>→</b><span>LENGUAJE</span><b>→</b><span>ACLARACIÓN</span><b>→</b><span>ARGUMENTO EVALUABLE</span></div>
            <aside className="an26-callout"><strong>análisis del lenguaje = medio</strong><span>no finalidad exclusiva de la filosofía</span></aside>
          </section>

          <section id="positivismo">
            <Heading n="09" eye="Schlick · Wittgenstein">La versión fuerte del giro lingüístico</Heading>
            <p>Moritz Schlick sirve como ejemplo del programa positivista lógico: la filosofía explicaría o aclararía enunciados, mientras la ciencia se ocuparía de su verificación. La clase conecta esta concepción con el primer Wittgenstein y con la recepción del <em>Tractatus</em> en el Círculo de Viena.</p>
            <div className="an26-two">
              <article><span>FILOSOFÍA</span><strong>qué significa</strong><p>clarificación, análisis y estructura.</p></article>
              <article><span>CIENCIA</span><strong>si es verdadero</strong><p>contrastación, explicación y trabajo empírico.</p></article>
            </div>
            <p>El profesor presenta esta división como históricamente importante, pero demasiado estrecha para caracterizar a toda la filosofía analítica. Frege, por ejemplo, puede usar el análisis del lenguaje para esclarecer problemas sin sostener que ésa sea la única finalidad de la filosofía.</p>
          </section>

          <section id="criterios">
            <Heading n="10" eye="Demarcatio">Cuatro criterios provisionales de la clase</Heading>
            <div className="an26-traits">{traits.map(([n,t,b])=><article key={n}><span>{n}</span><strong>{t}</strong><p>{b}</p></article>)}</div>
            <aside className="an26-warning"><span>RESERVA</span><p>Estos criterios todavía son provisionales. El propio argumento de Føllesdal será sometido a crítica porque “argumento” y “justificación” podrían ser demasiado amplios si terminan incluyendo prácticamente toda filosofía rigurosa.</p></aside>
          </section>

          <section id="cierre">
            <Heading n="11" eye="Conclusio">Qué quedó establecido y qué queda abierto</Heading>
            <div className="an26-summary">
              <article><span>01</span><strong>No doctrina única</strong><p>Las posiciones internas son incompatibles.</p></article>
              <article><span>02</span><strong>No tema único</strong><p>La tradición atraviesa múltiples áreas filosóficas.</p></article>
              <article><span>03</span><strong>No método único</strong><p>El análisis conceptual no cubre toda la tradición.</p></article>
              <article><span>04</span><strong>No genealogía simple</strong><p>Bolzano muestra la diferencia entre afinidad e influencia.</p></article>
              <article><span>05</span><strong>Propuesta positiva</strong><p>argumentación + justificación + precisión lingüística.</p></article>
              <article><span>06</span><strong>Frontera histórica</strong><p>antecedente no equivale a miembro de la tradición.</p></article>
            </div>
            <div className="an26-next"><span>CONTINUIDAD</span><h3>La próxima sesión continúa con Føllesdal.</h3><p>No se registra una tarea nueva al cierre de esta clase. El siguiente paso será evaluar con más cuidado qué cuenta como argumento y justificación y si esos criterios realmente demarcan la tradición.</p></div>
          </section>
        </article>
      </div>

      <footer className="an26-footer">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <span>ratio · argumentum · iustificatio</span>
        <span>XXVI · VIII · MMXXVI</span>
      </footer>
    </main>
  )
}
