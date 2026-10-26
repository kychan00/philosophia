import { Link } from 'react-router'
import {
  AnalyticEditorialHeading,
  AnalyticEditorialIndex,
} from '../components/analytic/AnalyticEditorialElements'
import '../components/analytic/AnalyticEditorialElements.css'
import './AnalyticClass09Sep.css'
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


const archivum07Questions=[
 ['¿Filosofía analítica y positivismo lógico son equivalentes?','No. El positivismo lógico es una etapa dentro de una tradición más amplia y cambiante.'],
 ['¿Qué problema presenta la apropiación del Tractatus por el Círculo de Viena?','Su recepción selecciona y transforma tesis de Wittgenstein; no puede identificarse con la posición completa del autor.'],
 ['¿Es igual no poder decir algo como hecho y afirmar que no existe?','No. La imposibilidad de formular una proposición factual no demuestra inexistencia ontológica.'],
 ['¿Qué cuatro temas se desarrollaron el 7 de octubre?','Clarificación filosófica, crítica de la metafísica, verificación y empirismo consistente. El quinto se reservó para la continuación.'],
]
function Archivum07(){
 return <section className="ac07-archivum" aria-label="Archivum Academicum de la clase">
 <p className="ac07-archivum-label">ARCHIVUM ACADEMICUM · ACTIVACIÓN / 90 SEGUNDOS</p>
 <h2>Recibir no es repetir: Wittgenstein y Viena</h2>
 <p><strong>TESIS SEMINAL · RECONSTRUCCIÓN EDITORIAL</strong> El positivismo lógico recibe ideas del <em>Tractatus</em>, pero las reorganiza como un programa de clarificación, crítica de la metafísica, verificación y empirismo.</p>
 <div className="ac07-archivum-triad"><div><b>α · ORIGEN</b><span>Decir y mostrar</span></div><div><b>β · RECEPCIÓN</b><span>Programa de Viena</span></div><div><b>γ · DIFERENCIA</b><span>Influencia ≠ identidad</span></div></div>
 <figure><img src={`${import.meta.env.BASE_URL}images/filosofia-analitica/archivum-07-octubre-viena.svg`} loading="lazy" alt="Diagrama conceptual de tres pasos: Wittgenstein y los límites de lo decible; recepción del Círculo de Viena con cuatro temas tratados; divergencias y preguntas críticas."/><figcaption>Figura 1. Recepción y transformación del <em>Tractatus</em>. Diagrama original de PHILOSOPHIA; reconstrucción editorial, no imagen procedente de Hacker ni material del profesor.</figcaption></figure>
 <p className="ac07-archivum-source">Autor y titular: PHILOSOPHIA. SVG original elaborado para esta clase; régimen ORIGINAL-OWNED, sin recursos gráficos de terceros. Las cajas y flechas representan relaciones conceptuales, no una cronología exhaustiva.</p>
 </section>
}
function Archivum07Recall(){return <section className="ac07-recall"><h2>Recuperación activa · diez años después</h2><p>Formule su respuesta antes de abrir la síntesis editorial.</p>{archivum07Questions.map(([q,a],i)=><details key={q}><summary><span>0{i+1} · </span>{q}</summary><p>{a}</p></details>)}</section>}

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <AnalyticEditorialHeading n={n} eyebrow={eyebrow} className="ac07-heading">
      {children}
    </AnalyticEditorialHeading>
  )
}

export default function AnalyticClass07Oct() {
  return (
    <main className="analytic-editorial-page ac9-page ac07-page">
      <nav className="ac9-topbar">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="ac9-brand">Φ · Philosophia</Link>
        <span>VII · X · MMXXVI</span>
      </nav>

      <header className="ac9-hero ac07-hero">
        <div className="ac9-grid" aria-hidden="true" />
        <div className="ac9-ghost ac07-ghost" aria-hidden="true">⊢</div>

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

            <div className="ac9-question ac07-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                ¿Qué tomó el positivismo lógico del Tractatus y qué cambió al convertir
                sus límites del lenguaje en un programa filosófico?
              </strong>
            </div>
          </div>

          <aside className="ac9-hero-schema ac07-hero-schema">
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

      <Archivum07 />
      <div className="ac9-layout ac07-layout">
        <AnalyticEditorialIndex
          sections={sections}
          onNavigate={goTo}
          heading="Index analyticorum"
          className="ac07-index"
        />

        <article className="ac9-article ac07-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula sessionis">De Wittgenstein al programa de Viena</Heading>

            <div className="ac07-flow">
              <span>Tractatus</span><b>→</b>
              <strong>clarificación</strong><b>→</b>
              <span>metafísica</span><b>→</b>
              <span>verificación</span><b>→</b>
              <strong>empirismo consistente</strong>
            </div>

            <div className="ac07-summary-grid">
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
            <aside className="ac07-thesis">
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
            <aside className="ac07-note">
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
            <div className="ac07-ending">
              <span>CIERRE DOCUMENTAL</span>
              <strong>Cuatro de cinco temas desarrollados · Hacker pp. 126–130</strong>
              <p>
                La siguiente sesión debe cerrar el quinto tema y terminar las últimas
                páginas de Hacker antes de pasar a la siguiente lectura del curso.
              </p>
            </div>

            <div className="ac07-actions">
              <Link to="/semestre/5/filosofia-analitica/reporte/hacker">
                Abrir sistema total de Hacker →
              </Link>
              <Link to="/semestre/5/filosofia-analitica">
                Volver a Filosofía Analítica
              </Link>
            </div>

            <div className="ac07-no-task">
              <span>TAREA</span>
              <strong>No consta una consigna nueva inequívoca en las notas disponibles de esta sesión.</strong>
            </div>
          </section>
        <Archivum07Recall />
</article>
      </div>
    </main>
  )
}
