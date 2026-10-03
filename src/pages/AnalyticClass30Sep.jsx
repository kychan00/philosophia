import { Link } from 'react-router'
import './AnaliticaClase7Septiembre.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass14Sep.css'
import './AnalyticClass21Sep.css'
import './AnalyticClass23Sep.css'
import './AnalyticClass28Sep.css'
import './AnalyticClass30Sep.css'

const sections = [
  ['00','mapa','Mapa de la sesión'],
  ['01','origenes','Primera etapa: orígenes, no logicismo'],
  ['02','moore-russell','Moore y Russell: dos estilos'],
  ['03','segunda-etapa','Segunda etapa: giro lingüístico'],
  ['04','rorty','Rorty y el nombre del giro'],
  ['05','tractatus','Hacker: el giro empieza en el Tractatus'],
  ['06','cronologia','1918, 1922 y la difusión del Tractatus'],
  ['07','frege','Frege 1884 como candidato alternativo'],
  ['08','contexto','El principio contextual'],
  ['09','bentham','Bentham y el problema de la prioridad'],
  ['10','criterio','Qué importa históricamente'],
  ['11','ejemplos','Todo problema se formula lingüísticamente'],
  ['12','cierre','Punto de corte del fragmento'],
]

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ac9-heading ac14-heading ac21-heading ac23-heading ac28-heading ac30-heading">
      <span>{n}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function AnalyticClass30Sep() {
  return (
    <main className="ac7-page ac9-page ac14-page ac21-page ac23-page ac28-page ac30-page">
      <nav className="ac9-topbar">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="ac9-brand">Φ · Philosophia</Link>
        <span>XXX · IX · MMXXVI</span>
      </nav>

      <header className="ac9-hero ac14-hero ac21-hero ac23-hero ac28-hero ac30-hero">
        <div className="ac9-grid" aria-hidden="true" />
        <div className="ac9-ghost ac14-ghost ac21-ghost ac23-ghost ac28-ghost ac30-ghost" aria-hidden="true">↪</div>

        <div className="ac9-hero-inner">
          <div>
            <p className="ac9-kicker">FI264 · Decimotercera clase · 30 de septiembre de 2026</p>
            <h1>
              El giro lingüístico:
              <em>del origen de la analítica al Tractatus</em>
            </h1>
            <p className="ac9-lead">
              La sesión cierra la primera etapa de Hacker —Moore y Russell como orígenes— y abre la segunda:
              el giro lingüístico. El problema ya no es sólo quién analizó primero el lenguaje, sino cuándo esa
              estrategia llegó a reorganizar la manera dominante de hacer filosofía analítica.
            </p>

            <div className="ac9-question ac21-question ac23-question ac28-question ac30-question">
              <span>PREGUNTA RECTORA</span>
              <strong>¿Qué hace que el Tractatus sea un punto de inflexión si Frege, Bentham e incluso autores anteriores ya habían usado estrategias lingüísticas?</strong>
            </div>
          </div>

          <aside className="ac9-hero-schema ac14-hero-schema ac21-hero-schema ac23-hero-schema ac28-hero-schema ac30-hero-schema">
            <span>RUTA DE LA SESIÓN</span>
            <div>
              <small>ETAPA I</small>
              <strong>orígenes</strong>
              <p>Moore y Russell inauguran estilos distintos de análisis.</p>
            </div>
            <b>↓</b>
            <div className="active">
              <small>ETAPA II</small>
              <strong>giro lingüístico</strong>
              <p>El lenguaje se vuelve vía privilegiada de acceso a los problemas.</p>
            </div>
            <b>↓</b>
            <div>
              <small>PROBLEMA HISTÓRICO</small>
              <strong>prioridad ≠ transformación</strong>
              <p>No basta con preguntar quién formuló primero una idea semejante.</p>
            </div>
          </aside>
        </div>
      </header>

      <div className="ac9-layout ac21-layout ac23-layout ac28-layout ac30-layout">
        <aside className="ac9-index ac21-index ac23-index ac28-index ac30-index">
          <p>Index analyticorum</p>
          {sections.map(([n,id,label]) => (
            <button type="button" key={id} onClick={() => goTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ac9-article ac21-article ac23-article ac28-article ac30-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula transitionis">De los orígenes al giro lingüístico</Heading>
            <div className="ac30-flow">
              <span>Moore</span><b>+</b><span>Russell</span><b>→</b>
              <strong>orígenes de la analítica</strong><b>→</b>
              <span>Tractatus</span><b>→</b><strong>giro lingüístico</strong>
            </div>

            <div className="ac23-summary-grid ac28-summary-grid ac30-summary-grid">
              <article><span>LECTURA</span><strong>Hacker · p. 117</strong><p>Inicio del apartado 3: “El giro lingüístico del Tractatus”.</p></article>
              <article><span>CAMBIO</span><strong>etapa I → etapa II</strong><p>La primera fase queda caracterizada como orígenes; la segunda se centra en el giro lingüístico.</p></article>
              <article><span>TESIS</span><strong>inicio ≠ antecedente más antiguo</strong><p>La importancia histórica se mide por la transformación que una idea produce en la práctica filosófica.</p></article>
            </div>
          </section>

          <section id="origenes">
            <Heading n="01" eyebrow="Prima aetas">Primera etapa: “orígenes”, no simplemente “logicismo”</Heading>
            <p className="ac9-prose">
              El profesor cierra la primera etapa de la lectura recordando que Hacker no presenta una sola doctrina
              homogénea, sino dos maneras de inaugurar la filosofía analítica del siglo XX. Por eso considera más
              preciso hablar de <strong>orígenes</strong> que identificar toda esta fase con el logicismo.
            </p>
            <aside className="ac9-thesis ac21-thesis ac23-thesis ac28-thesis ac30-thesis">
              <span>PRECISIÓN HISTÓRICA</span>
              <strong>No todos los fundadores trabajan con el mismo método ni comparten el mismo interés por la lógica formal.</strong>
            </aside>
          </section>

          <section id="moore-russell">
            <Heading n="02" eyebrow="Duae viae">Moore y Russell: dos estilos de análisis</Heading>
            <div className="ac30-dual">
              <article>
                <span>G. E. MOORE</span>
                <strong>análisis semántico y conceptual</strong>
                <p>La clase insiste en que Moore no debe reducirse al programa logicista: su trabajo se concentra en esclarecer conceptos y significados.</p>
              </article>
              <b>≠</b>
              <article className="active">
                <span>BERTRAND RUSSELL</span>
                <strong>análisis lógico y reductivo</strong>
                <p>La lógica, las descripciones y las construcciones lógicas adquieren un papel mucho más fuerte.</p>
              </article>
            </div>
            <p className="ac9-prose">
              Precisamente esa diferencia refuerza la tesis general del curso: la filosofía analítica no puede
              definirse por una única doctrina o un único procedimiento técnico compartido por todos sus autores.
            </p>
          </section>

          <section id="segunda-etapa">
            <Heading n="03" eyebrow="Secunda aetas">Segunda etapa: el giro lingüístico</Heading>
            <p className="ac9-prose">
              Con la p. 117 comienza el apartado que Hacker dedica al giro lingüístico. La idea central de la explicación
              de clase es que los problemas filosóficos se presentan en formulaciones lingüísticas; por ello, el análisis
              del lenguaje se convierte en una vía privilegiada para acceder a esos problemas.
            </p>
            <div className="ac30-language-route">
              <span>problema filosófico</span><b>→</b><span>formulación lingüística</span><b>→</b><strong>análisis del lenguaje</strong><b>→</b><span>clarificación del problema</span>
            </div>
          </section>

          <section id="rorty">
            <Heading n="04" eyebrow="Richard Rorty · 1967">El nombre “giro lingüístico”</Heading>
            <p className="ac9-prose">
              Hacker recuerda que la expresión <em>giro lingüístico</em> fue introducida por Richard Rorty como título de
              una antología de ensayos sobre método filosófico publicada en 1967. El rótulo es posterior al fenómeno
              histórico que intenta describir.
            </p>
            <div className="ac30-timeline">
              <article><span>1884</span><strong>Frege</strong><p><em>Fundamentos de la aritmética</em>.</p></article>
              <b>→</b>
              <article className="active"><span>1918 / 1922</span><strong>Tractatus</strong><p>Publicación alemana y posterior difusión inglesa.</p></article>
              <b>→</b>
              <article><span>1967</span><strong>Rorty</strong><p>La expresión se consolida como nombre historiográfico.</p></article>
            </div>
          </section>

          <section id="tractatus">
            <Heading n="05" eyebrow="Hacker · p. 117">El giro empieza —pero no se completa— en el Tractatus</Heading>
            <p className="ac9-prose">
              La tesis que guía la nueva sección es deliberadamente precisa: Hacker propone que el giro lingüístico
              <strong> empezó, aunque no se completó, en el <em>Tractatus</em></strong>. Esto no equivale a decir que la
              filosofía analítica naciera con Wittgenstein; Moore y Russell pertenecen a una etapa anterior.
            </p>
            <div className="ac30-distinction">
              <article><span>ORIGEN DE LA FILOSOFÍA ANALÍTICA</span><strong>Moore + Russell</strong><p>Comienzos del siglo XX.</p></article>
              <b>≠</b>
              <article className="active"><span>GIRO LINGÜÍSTICO</span><strong>Tractatus</strong><p>Inicio de una transformación interna de la tradición.</p></article>
            </div>
          </section>

          <section id="cronologia">
            <Heading n="06" eyebrow="Chronologia">1918, 1922 y la difusión del Tractatus</Heading>
            <p className="ac9-prose">
              La clase distingue la publicación alemana del texto —situada en 1918 dentro de la explicación— de la
              edición inglesa de 1922, que favorece su difusión. La fecha importa menos como efeméride aislada que como
              punto de referencia para la transformación que el libro provoca en la tradición analítica.
            </p>
          </section>

          <section id="frege">
            <Heading n="07" eyebrow="Anthony Kenny · Dummett">Frege 1884 como candidato alternativo</Heading>
            <p className="ac9-prose">
              La lectura presenta una objeción: Anthony Kenny, siguiendo una línea asociada con Michael Dummett,
              propone fechar el nacimiento del giro en 1884, con los <em>Fundamentos de la aritmética</em> de Frege.
              El argumento parte de la estrategia fregeana para investigar la naturaleza del número.
            </p>
            <aside className="ac9-note ac21-note ac23-note ac28-note ac30-note">
              <span>IDEA FREGEANA</span>
              <strong>Para investigar qué son los números, examine las proposiciones en las que aparecen expresiones numéricas.</strong>
            </aside>
          </section>

          <section id="contexto">
            <Heading n="08" eyebrow="Principium contextus">El principio contextual</Heading>
            <p className="ac9-prose">
              Generalizada, la estrategia puede expresarse así: para investigar la naturaleza de <em>X</em>, analice las
              proposiciones en las que aparece <em>X</em>. Esto desplaza la atención desde la búsqueda inmediata de una
              entidad hacia el funcionamiento de una expresión dentro de una proposición completa.
            </p>
            <div className="ac30-context-rule">
              <span>NATURALEZA DE X</span><b>→</b><strong>PROPOSICIONES DONDE APARECE X</strong><b>→</b><span>FUNCIÓN Y SENTIDO</span>
            </div>
          </section>

          <section id="bentham">
            <Heading n="09" eyebrow="Praecursor ≠ initium">Bentham y el problema de la prioridad</Heading>
            <p className="ac9-prose">
              Hacker objeta que el principio contextual, tomado por sí solo, no basta para identificar el giro lingüístico.
              Si bastara con encontrar una formulación semejante, habría que retroceder a Bentham; y la explicación de clase
              radicaliza el punto señalando que podrían encontrarse antecedentes todavía más antiguos.
            </p>
            <aside className="ac23-paradox ac28-paradox ac30-paradox">
              <span>PROBLEMA HISTORIOGRÁFICO</span>
              <strong>“¿Quién lo dijo primero?” no equivale a “¿cuándo cambió la práctica filosófica?”</strong>
              <p>La mera prioridad textual no demuestra que ya exista un giro histórico consolidado.</p>
            </aside>
          </section>

          <section id="criterio">
            <Heading n="10" eyebrow="Mutatio philosophiae">Qué importa históricamente</Heading>
            <p className="ac9-prose">
              El criterio que privilegia el profesor es causal e histórico: importa el momento en que una concepción del
              análisis lingüístico deja de ser una estrategia aislada y empieza a transformar la manera de hacer filosofía.
              En ese sentido, el <em>Tractatus</em> funciona como punto de inflexión aunque pueda haber antecedentes.
            </p>
            <div className="ac30-causal">
              <article><span>ANTECEDENTE</span><strong>una idea semejante aparece antes</strong></article>
              <b>≠</b>
              <article className="active"><span>GIRO</span><strong>la idea reorganiza una tradición y se vuelve dominante</strong></article>
            </div>
          </section>

          <section id="ejemplos">
            <Heading n="11" eyebrow="Exempla magistri">Todo problema se formula lingüísticamente</Heading>
            <p className="ac9-prose">
              La explicación del profesor lleva la tesis a ejemplos sencillos. Si un matemático quiere hablar de números,
              lo hace mediante proposiciones y expresiones numéricas. Si alguien quiere describir la realidad que lo rodea,
              también lo hace mediante formulaciones lingüísticas. Por eso el análisis de esas formulaciones se convierte
              en un paso filosófico central.
            </p>
            <div className="ac30-examples">
              <article><span>MATEMÁTICAS</span><strong>números</strong><p>Investigar las expresiones y proposiciones mediante las que hablamos de ellos.</p></article>
              <article><span>REALIDAD</span><strong>mundo circundante</strong><p>Examinar el lenguaje con el que describimos y problematizamos esa realidad.</p></article>
            </div>
          </section>

          <section id="cierre">
            <Heading n="12" eyebrow="Continuatio">Punto de corte del fragmento</Heading>
            <div className="ac21-ending ac23-ending ac28-ending ac30-ending">
              <span>CIERRE DOCUMENTAL</span>
              <strong>Orígenes → giro lingüístico → Tractatus → Frege → Bentham</strong>
              <p>El fragmento termina mientras el profesor sigue precisando por qué el giro debe identificarse por su efecto histórico y no por la primera formulación cronológica de una idea.</p>
            </div>

            <div className="ac21-actions">
              <Link to="/semestre/5/filosofia-analitica/reporte/hacker">Abrir sistema total de Hacker →</Link>
              <Link to="/semestre/5/filosofia-analitica">Volver a Filosofía Analítica</Link>
            </div>

            <div className="ac21-no-task">
              <span>TAREA</span>
              <strong>No aparece una tarea explícita en el fragmento entregado.</strong>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
