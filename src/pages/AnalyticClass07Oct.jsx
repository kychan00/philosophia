import { Link } from 'react-router'
import './AnaliticaClase7Septiembre.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass14Sep.css'
import './AnalyticClass21Sep.css'
import './AnalyticClass23Sep.css'
import './AnalyticClass28Sep.css'
import './AnalyticClass30Sep.css'
import './AnalyticClass07Oct.css'

const sections = [
  ['00','mapa','Mapa de la sesión'],
  ['01','tradicion','Analítica ≠ positivismo lógico'],
  ['02','hacker','Los cinco temas de Hacker'],
  ['03','clarificacion','Filosofía como clarificación'],
  ['04','carnap','Carnap frente a Wittgenstein'],
  ['05','metafisica','Metafísica, decir y mostrar'],
  ['06','mistico','Lo místico y la escalera'],
  ['07','realismo','Realismo, Moore y Russell'],
  ['08','verificacion','Principio de verificación'],
  ['09','empirismo','Empirismo consistente'],
  ['10','logica','Tautología, convención y forma lógica'],
  ['11','historia','Fin de Viena y lenguaje natural'],
  ['12','pendiente','Lo que queda pendiente'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ac9-heading ac14-heading ac21-heading ac23-heading ac28-heading ac30-heading ac07-heading">
      <span>{n}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function AnalyticClass07Oct() {
  return (
    <main className="ac7-page ac9-page ac14-page ac21-page ac23-page ac28-page ac30-page ac07-page">
      <nav className="ac9-topbar">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="ac9-brand">Φ · Philosophia</Link>
        <span>VII · X · MMXXVI</span>
      </nav>

      <header className="ac9-hero ac14-hero ac21-hero ac23-hero ac28-hero ac30-hero ac07-hero">
        <div className="ac9-grid" aria-hidden="true" />
        <div className="ac9-ghost ac14-ghost ac21-ghost ac23-ghost ac28-ghost ac30-ghost ac07-ghost" aria-hidden="true">⊢</div>

        <div className="ac9-hero-inner">
          <div>
            <p className="ac9-kicker">FI264 · Decimocuarta clase · 7 de octubre de 2026</p>
            <h1>
              Wittgenstein y
              <em>el positivismo lógico</em>
            </h1>
            <p className="ac9-lead">
              La lectura de Hacker entra de lleno en la recepción del <em>Tractatus</em>
              por el Círculo de Viena: qué heredaron sus miembros, qué transformaron y
              dónde empieza la distancia entre Wittgenstein y el programa positivista.
            </p>

            <div className="ac9-question ac21-question ac23-question ac28-question ac30-question ac07-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                ¿Qué tomó el positivismo lógico del Tractatus y qué cambió al convertir
                sus límites del lenguaje en un programa filosófico?
              </strong>
            </div>
          </div>

          <aside className="ac9-hero-schema ac14-hero-schema ac21-hero-schema ac23-hero-schema ac28-hero-schema ac30-hero-schema ac07-hero-schema">
            <span>RUTA DE LA SESIÓN</span>
            <div>
              <small>WITTGENSTEIN</small>
              <strong>límites del lenguaje</strong>
              <p>Decir, mostrar y forma lógica.</p>
            </div>
            <b>↓</b>
            <div className="active">
              <small>VIENA</small>
              <strong>programa positivista</strong>
              <p>Clarificación, metafísica, verificación y empirismo.</p>
            </div>
            <b>↓</b>
            <div>
              <small>TRANSICIÓN</small>
              <strong>críticas internas</strong>
              <p>Del positivismo al segundo Wittgenstein y al lenguaje natural.</p>
            </div>
          </aside>
        </div>
      </header>

      <div className="ac9-layout ac21-layout ac23-layout ac28-layout ac30-layout ac07-layout">
        <aside className="ac9-index ac21-index ac23-index ac28-index ac30-index ac07-index">
          <p>Index analyticorum</p>
          {sections.map(([n,id,label]) => (
            <button type="button" key={id} onClick={() => goTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ac9-article ac21-article ac23-article ac28-article ac30-article ac07-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula sessionis">De Wittgenstein al programa de Viena</Heading>

            <div className="ac07-flow">
              <span>Tractatus</span><b>→</b>
              <strong>clarificación</strong><b>→</b>
              <span>metafísica</span><b>→</b>
              <span>verificación</span><b>→</b>
              <strong>empirismo consistente</strong>
            </div>

            <div className="ac23-summary-grid ac28-summary-grid ac30-summary-grid ac07-summary-grid">
              <article><span>LECTURA</span><strong>Hacker · pp. 126–130</strong><p>Tramo final dedicado al positivismo lógico y su recepción del Tractatus.</p></article>
              <article><span>CLAVE</span><strong>influencia ≠ identidad</strong><p>El Círculo de Viena recibe a Wittgenstein, pero lo reinterpreta.</p></article>
              <article><span>PENDIENTE</span><strong>quinto tema</strong><p>La clase desarrolla cuatro de los cinco temas señalados por Hacker.</p></article>
            </div>
          </section>

          <section id="tradicion">
            <Heading n="01" eyebrow="Traditio analytica">Filosofía analítica no es sinónimo de positivismo lógico</Heading>
            <p className="ac9-prose">
              La sesión vuelve a una tesis central del curso: el positivismo lógico es
              una etapa histórica de la tradición analítica, no su definición completa.
              La filosofía analítica puede conservar análisis, argumentación racional y
              atención al lenguaje sin aceptar el verificacionismo ni el rechazo
              positivista de la metafísica.
            </p>
            <div className="ac07-dual">
              <article><span>TRADICIÓN</span><strong>filosofía analítica</strong><p>Más amplia, cambiante y capaz de revisar sus propios programas.</p></article>
              <b>⊃</b>
              <article className="active"><span>ETAPA</span><strong>positivismo lógico</strong><p>Programa histórico centrado en ciencia, lógica y análisis del lenguaje.</p></article>
            </div>
          </section>

          <section id="hacker">
            <Heading n="02" eyebrow="Hacker · quinque themata">Los cinco grandes temas del positivismo lógico</Heading>
            <p className="ac9-prose">
              Hacker organiza la influencia del <em>Tractatus</em> mediante cinco temas.
              En esta clase se desarrollan cuatro y el quinto se deja para la continuación.
            </p>
            <div className="ac07-theme-grid">
              <article><span>01</span><strong>Clarificación</strong><p>La filosofía como análisis y elucidación.</p></article>
              <article><span>02</span><strong>Metafísica</strong><p>Rechazo de las proposiciones metafísicas como cognitivamente carentes de sentido.</p></article>
              <article><span>03</span><strong>Verificación</strong><p>El significado cognoscitivo ligado a condiciones de contraste.</p></article>
              <article><span>04</span><strong>Empirismo consistente</strong><p>Lógica y matemáticas como analíticas o tautológicas.</p></article>
              <article className="pending"><span>05</span><strong>Pendiente</strong><p>No se completa con material externo.</p></article>
            </div>
          </section>

          <section id="clarificacion">
            <Heading n="03" eyebrow="Analysis · elucidatio">La filosofía como clarificación</Heading>
            <p className="ac9-prose">
              La primera influencia consiste en dejar de pensar la filosofía como una
              ciencia adicional que produce proposiciones propias sobre una región
              especial de la realidad. Su trabajo se vuelve clarificatorio.
            </p>

            <div className="ac07-dual">
              <article>
                <span>FUNCIÓN NEGATIVA</span>
                <strong>disolver pseudoproblemas</strong>
                <p>Detectar enredos, expresiones defectuosas y supuestos sinsentidos.</p>
              </article>
              <b>+</b>
              <article className="active">
                <span>FUNCIÓN POSITIVA</span>
                <strong>hacer explícita la estructura</strong>
                <p>Aclarar conceptos, proposiciones y condiciones de significación.</p>
              </article>
            </div>

            <div className="ac07-route">
              <span>problema filosófico</span><b>→</b><strong>análisis</strong><b>→</b>
              <span>pseudoproblema</span><b>o</b><span>problema empírico</span>
            </div>
          </section>

          <section id="carnap">
            <Heading n="04" eyebrow="Carnap contra una lectura unívoca">¿Una lógica o varios lenguajes posibles?</Heading>
            <p className="ac9-prose">
              Carnap aparece como ejemplo de que la recepción del Tractatus no es
              literal. La clase contrapone la estructura tractariana del lenguaje con
              la posibilidad carnapiana de construir diferentes marcos formales.
            </p>
            <div className="ac07-compare">
              <article>
                <span>WITTGENSTEIN</span>
                <strong>lenguaje ↔ forma lógica ↔ mundo</strong>
                <p>La representación presupone una estructura compartida.</p>
              </article>
              <b>≠</b>
              <article className="active">
                <span>CARNAP</span>
                <strong>pluralidad de sistemas formales</strong>
                <p>Distintos lenguajes pueden organizarse mediante sintaxis y reglas diferentes.</p>
              </article>
            </div>
          </section>

          <section id="metafisica">
            <Heading n="05" eyebrow="Metaphysica">El paso polémico del positivismo</Heading>
            <p className="ac9-prose">
              El positivismo lógico usa los límites del lenguaje para atacar la
              metafísica. La clase, sin embargo, separa dos afirmaciones que no son equivalentes.
            </p>
            <div className="ac07-distinction">
              <article><span>A</span><strong>no puede decirse como hecho</strong><p>Una proposición metafísica rebasa el lenguaje descriptivo.</p></article>
              <b>≠</b>
              <article className="active"><span>B</span><strong>no existe</strong><p>Esta conclusión añade una tesis ontológica más fuerte.</p></article>
            </div>
            <aside className="ac9-thesis ac21-thesis ac23-thesis ac28-thesis ac30-thesis ac07-thesis">
              <span>DISTINCIÓN CENTRAL</span>
              <strong>No poder formular algo como proposición factual no demuestra por sí solo su inexistencia.</strong>
            </aside>
          </section>

          <section id="mistico">
            <Heading n="06" eyebrow="Dicere · ostendere">Decir, mostrar y lo místico</Heading>
            <p className="ac9-prose">
              Las proposiciones finales del <em>Tractatus</em> complican una lectura
              puramente positivista. La clase recupera la diferencia entre aquello que
              puede decirse y aquello que sólo puede mostrarse.
            </p>
            <div className="ac07-route">
              <span>lo decible</span><b>→</b><strong>proposición factual</strong><b>≠</b>
              <span>lo mostrable</span><b>→</b><strong>límite, valor, sentido</strong>
            </div>
            <div className="ac07-ladder">
              <span>LA ESCALERA</span>
              <strong>usar el libro → alcanzar el límite → arrojar la escalera</strong>
              <p>
                El silencio final no equivale a una demostración de que sólo exista
                aquello que puede expresarse científicamente.
              </p>
            </div>
          </section>

          <section id="realismo">
            <Heading n="07" eyebrow="Digressio epistemologica">Realismo, objetividad y continuidad con Moore y Russell</Heading>
            <p className="ac9-prose">
              La sesión abre una digresión sobre el realismo. El supuesto general es que
              existe una realidad independiente del sujeto y que el conocimiento intenta
              captarla. La crítica trascendental pregunta si el sujeto puede abandonar
              por completo sus propias condiciones de conocer.
            </p>
            <div className="ac07-dual">
              <article><span>REALISMO</span><strong>objeto independiente</strong><p>La realidad no depende de ser pensada por el sujeto.</p></article>
              <b>↔</b>
              <article className="active"><span>CRÍTICA TRASCENDENTAL</span><strong>condiciones del conocer</strong><p>Conocer siempre ocurre desde alguna estructura cognitiva o conceptual.</p></article>
            </div>
            <p className="ac9-prose">
              Moore y Russell reaparecen porque su reacción contra el idealismo abre un
              realismo pluralista de términos, relaciones y estructuras diferenciables.
            </p>
          </section>

          <section id="verificacion">
            <Heading n="08" eyebrow="Verificatio">El principio de verificación</Heading>
            <p className="ac9-prose">
              El tercer tema liga el significado cognoscitivo de una proposición con su
              método de verificación. Deben poder especificarse condiciones bajo las
              cuales el enunciado pueda ser contrastado.
            </p>
            <div className="ac07-verification">
              <article><span>ENUNCIADO EMPÍRICO</span><strong>condiciones de contraste</strong><p>Puede especificarse qué contaría como evidencia relevante.</p></article>
              <b>→</b>
              <article className="active"><span>CRITERIO</span><strong>significado cognoscitivo</strong><p>La verificabilidad funciona como filtro semántico.</p></article>
              <b>→</b>
              <article><span>METAFÍSICA</span><strong>queda excluida</strong><p>Si no hay condiciones de verificación, el positivista rechaza el enunciado.</p></article>
            </div>
            <aside className="ac9-note ac21-note ac23-note ac28-note ac30-note ac07-note">
              <span>CONTINUIDAD</span>
              <strong>Popper aparecerá como una de las críticas posteriores al programa verificacionista.</strong>
            </aside>
          </section>

          <section id="empirismo">
            <Heading n="09" eyebrow="Empirismus consistens">¿Cómo explicar lógica y matemáticas desde el empirismo?</Heading>
            <p className="ac9-prose">
              Si todo conocimiento factual procede de la experiencia, aparece una
              dificultad clásica: la necesidad de las verdades lógico-matemáticas parece
              no depender de observar casos particulares.
            </p>
            <div className="ac07-empiricism">
              <article><span>EXPERIENCIA</span><strong>contenido factual</strong><p>Lo que informa sobre cómo es el mundo.</p></article>
              <b>+</b>
              <article className="active"><span>LÓGICA / MATEMÁTICAS</span><strong>analíticas o tautológicas</strong><p>No aportan conocimiento factual del mismo tipo.</p></article>
              <b>→</b>
              <article><span>RESULTADO</span><strong>empirismo consistente</strong><p>No hace falta admitir una segunda fuente racional de hechos.</p></article>
            </div>
          </section>

          <section id="logica">
            <Heading n="10" eyebrow="Tautologia ≠ arbitrium">Tautología, convención y forma lógica</Heading>
            <p className="ac9-prose">
              La clase vuelve a marcar una diferencia entre los positivistas y
              Wittgenstein. Que una verdad lógica sea tautológica no implica que su
              estructura sea una convención arbitraria.
            </p>
            <div className="ac07-compare">
              <article><span>LECTURA POSITIVISTA</span><strong>convención formal</strong><p>Reglas y símbolos se interpretan como acuerdos de construcción.</p></article>
              <b>≠</b>
              <article className="active"><span>TRACTATUS</span><strong>condición de representación</strong><p>La forma lógica está ligada a la posibilidad de figurar el mundo.</p></article>
            </div>
            <div className="ac07-route">
              <span>mundo</span><b>↔</b><strong>forma lógica</strong><b>↔</b><span>lenguaje</span>
            </div>
          </section>

          <section id="historia">
            <Heading n="11" eyebrow="Transitio historica">Del Círculo de Viena al lenguaje natural</Heading>
            <p className="ac9-prose">
              La clase sitúa el positivismo lógico como una etapa históricamente breve:
              durante la década de 1930 el Círculo se dispersa y, tras la guerra, el
              programa recibe críticas incluso desde la propia filosofía analítica.
            </p>
            <div className="ac07-history">
              <span>giro lingüístico</span><b>→</b>
              <strong>positivismo lógico</strong><b>→</b>
              <span>críticas internas</span><b>→</b>
              <strong>segundo Wittgenstein</strong><b>→</b>
              <span>lenguaje natural</span>
            </div>
          </section>

          <section id="pendiente">
            <Heading n="12" eyebrow="Continuatio">Lo que queda pendiente</Heading>
            <div className="ac21-ending ac23-ending ac28-ending ac30-ending ac07-ending">
              <span>CIERRE DOCUMENTAL</span>
              <strong>Cuatro de cinco temas desarrollados · Hacker pp. 126–130</strong>
              <p>
                La siguiente sesión debe cerrar el quinto tema y terminar las últimas
                páginas de Hacker antes de pasar a la siguiente lectura del curso.
              </p>
            </div>

            <div className="ac21-actions">
              <Link to="/semestre/5/filosofia-analitica/reporte/hacker">
                Abrir sistema total de Hacker →
              </Link>
              <Link to="/semestre/5/filosofia-analitica">
                Volver a Filosofía Analítica
              </Link>
            </div>

            <div className="ac21-no-task">
              <span>TAREA</span>
              <strong>No se recupera una tarea nueva inequívocamente formulada en la grabación.</strong>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
