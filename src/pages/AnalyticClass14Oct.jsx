import { Link } from 'react-router'
import {
  AnalyticEditorialHeading,
  AnalyticEditorialIndex,
} from '../components/analytic/AnalyticEditorialElements'
import '../components/analytic/AnalyticEditorialElements.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass14Oct.css'

const sections = [
  ['01', 'programa', 'Cinco compromisos'],
  ['02', 'unidad', 'Comte y Viena'],
  ['03', 'criticas', 'Ocho dificultades'],
  ['04', 'realismo', 'Realismo y percepción'],
  ['05', 'significado', 'Significado y verdad'],
  ['06', 'metodo', 'Popper e inferencias'],
  ['07', 'ciencias', 'Ciencias sociales'],
  ['08', 'transicion', 'Hacia Glock'],
]

const commitments = [
  ['01','Clarificación filosófica','La filosofía es examen y aclaración de proposiciones; esta presentación de clase remite a la influencia tractariana.'],
  ['02','Crítica de la metafísica','El Círculo cuestiona el contenido cognoscitivo de proposiciones metafísicas. No confundir con demostrar que la metafísica no existe.'],
  ['03','Principio de verificación','La posibilidad de contrastación empírica se convierte en criterio propuesto de significado cognoscitivo.'],
  ['04','Empirismo consistente','Se intenta explicar la verdad lógico-matemática sin apelar a conocimientos sintéticos a priori.'],
  ['05','Unidad de las ciencias','Se persigue un lenguaje y una base lógica comunes; algunos programas adoptan una vía fisicalista reductiva.'],
]

const objections = [
  ['01','Base fenomenalista o fisicalista','No se encontró una reducción general convincente de todos los dominios a un lenguaje elemental.','En clase: tensión entre experiencia inmediata y mundo físico.'],
  ['02','Solipsismo y conductismo radical','El programa reduccionista parecía llevar a alternativas metodológicas insatisfactorias.','En clase: qué se pierde al eliminar conceptos y mediaciones compartidas.'],
  ['03','Extensionalidad','Una reconstrucción exclusivamente extensional deja fuera relaciones conceptuales y usos significativos.','En clase: las proposiciones no se dejan agotar por la mera descomposición.'],
  ['04','Verificabilidad','El principio no logró una formulación rigurosa universalmente satisfactoria.','En clase: significado, verdad y cientificidad son preguntas distintas.'],
  ['05','Convencionalismo','Las convenciones no explican sin residuo la necesidad de lógica y matemáticas.','En clase: no confundir a Wittgenstein con el convencionalismo vienés.'],
  ['06','Límites del cálculo clásico','El lenguaje y los razonamientos legítimos exceden un único cálculo formal.','En clase: deducción, inducción, abducción y razonamiento ordinario.'],
  ['07','Unidad de las ciencias','Se cuestiona el monismo metodológico, especialmente desde la hermenéutica.','En clase: autonomía de métodos de las ciencias sociales.'],
  ['08','Filosofía demasiado estrecha','La reducción al lenguaje científico desatiende ética, política, derecho y estética.','En clase: la filosofía también examina el deber ser.'],
]


const mnemonicQuestions = [
  ['¿En qué se distinguen significado, verdad y cientificidad?', 'Tener significado no garantiza verdad ni pertenencia a la ciencia: el imperativo «Cierra la puerta» es comprensible sin valor de verdad.'],
  ['¿Por qué la unidad de método no equivale a reducción fisicalista?', 'Una orientación metodológica compartida puede convivir con objetos y métodos disciplinares distintos; no obliga a traducir todo enunciado al vocabulario físico.'],
  ['¿Qué dificultad encuentra el principio de verificación?', 'No logró fijar un criterio general y satisfactorio de significado cognoscitivo sin excluir expresiones comprensibles o suscitar nuevas dificultades.'],
  ['¿Qué función tiene la falsabilidad en Popper?', 'Se propone como criterio para demarcar hipótesis científicas, no como criterio del significado de toda expresión.'],
]

function ArchivumMnemonic() {
  return <section className="ac1410-memory" aria-labelledby="ac1410-memory-title">
    <div className="ac1410-memory-head"><span>ARCHIVUM ACADEMICUM · ACTIVACIÓN / 90 SEGUNDOS</span><span>14 · X · 2026</span></div>
    <h2 id="ac1410-memory-title">El límite del programa reduccionista</h2>
    <p className="ac1410-memory-thesis"><strong>TESIS SEMINAL · RECONSTRUCCIÓN EDITORIAL</strong> El intento de reducir el significado a verificación y lenguaje científico común enfrenta objeciones sobre experiencia, inferencia y pluralidad metodológica.</p>
    <div className="ac1410-triad" aria-label="Tríada conceptual para recordar la sesión">
      <div><b>α · PROYECTO</b><span>Verificación y unidad</span></div>
      <div><b>β · CRÍTICA</b><span>Ocho dificultades</span></div>
      <div><b>γ · APERTURA</b><span>Lenguaje y métodos plurales</span></div>
    </div>
    <figure className="ac1410-map">
      <img src={`${import.meta.env.BASE_URL}images/filosofia-analitica/archivum-14-octubre-mapa.svg`} alt="Mapa de tres niveles: el programa positivista de verificación y unidad conduce a ocho dificultades sobre reducción, significado, inferencia y método, abriendo paso a una filosofía analítica más amplia." loading="lazy" />
      <figcaption>Figura 1 · Mapa argumental original de PHILOSOPHIA. Lectura: programa positivista → dificultades críticas → apertura conceptual. Reconstrucción editorial de esta clase, no reproducción de una figura de Hacker ni del docente.</figcaption>
    </figure>
    <p className="ac1410-visual-credit">Imagen: PHILOSOPHIA, elaboración original (SVG); titular: proyecto PHILOSOPHIA; uso: recurso original del proyecto. No se emplearon imágenes externas.</p>
  </section>
}

function ArchivumRecall() {
  return <section className="ac1410-recall" aria-labelledby="ac1410-recall-title">
    <h2 id="ac1410-recall-title">Examen mnemónico decenal</h2>
    <p>Responda antes de abrir cada ficha. Estas respuestas son síntesis editoriales de estudio, no citas literales del autor.</p>
    {mnemonicQuestions.map(([question, answer], index) => <details key={question}>
      <summary><span>0{index + 1}</span> {question}</summary>
      <p>{answer}</p>
    </details>)}
  </section>
}

function ArchivumArgument() {
  return <section className="ac1410-argument" aria-labelledby="ac1410-argument-title">
    <h2 id="ac1410-argument-title">Scholium · La inferencia no debe confundirse con el criterio de significado</h2>
    <p><strong>Reconstrucción editorial de estudio, no demostración atribuida a Hacker:</strong> el <em>modus tollens</em> ilustra una inferencia deductivamente válida que sirve para distinguir una regla lógica de los debates filosóficos sobre verificación y demarcación.</p>
    <div className="ac1410-proof"><div><span>P₁ · Condicional</span><code>P → Q</code></div><div><span>P₂ · Negación</span><code>¬Q</code></div><div><span>Regla</span><code>Modus tollens</code></div><div><span>C · Conclusión</span><code>¬P</code></div></div>
    <p><strong>Validez formal:</strong> sí. <strong>Solidez:</strong> sólo si las premisas usadas en una aplicación concreta son verdaderas; este esquema abstracto no las acredita. La forma lógica no determina por sí sola el significado de todos los enunciados.</p>
  </section>
}

function Heading({ n, eyebrow, children }) {
  return <AnalyticEditorialHeading n={n} eyebrow={eyebrow} className="ac1410-heading">
    {children}
  </AnalyticEditorialHeading>
}
const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' })

export default function AnalyticClass14Oct() {
  return <main className="analytic-editorial-page ac9-page ac1410-page">
    <nav className="ac9-topbar">
      <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
      <Link to="/" className="ac9-brand">Φ · Philosophia</Link>
      <span>XIV · X · MMXXVI</span>
    </nav>
    <header className="ac9-hero ac1410-hero">
      <div className="ac9-grid" aria-hidden="true" />
      <div className="ac9-ghost ac1410-ghost" aria-hidden="true">⊭</div>
      <div className="ac9-hero-inner">
        <div>
          <p className="ac9-kicker">FI264 · Decimoquinta clase · 14 de octubre de 2026</p>
          <h1>El agotamiento del <em>positivismo lógico</em></h1>
          <p className="ac9-lead">
            Cierre de la lectura de Peter M. S. Hacker. Del ideal de una ciencia unificada
            a las objeciones contra el reduccionismo, el verificacionismo y los límites del análisis formal.
          </p>
          <div className="ac9-question ac1410-question">
            <span>PROBLEMA DE LA SESIÓN</span>
            <strong>¿Por qué un programa que quiso precisar el significado científico terminó
              enfrentándose al lenguaje, la experiencia y la pluralidad de las ciencias?</strong>
          </div>
          <div className="ac1410-actions">
            <Link to="/semestre/5/filosofia-analitica/reporte/hacker">Explorar sistema 2D de Hacker ↗</Link>
            <button type="button" onClick={() => goTo('criticas')}>Examinar las ocho críticas ↓</button>
          </div>
        </div>
        <aside className="ac9-hero-schema ac1410-schema" aria-label="Esquema del recorrido">
          <span>ARQUITECTURA ARGUMENTAL · ESQUEMA DE CLASE</span>
          <div><small>PUNTO DE PARTIDA</small><strong>Programa positivista</strong><p>Verificación · reducción · unidad de la ciencia</p></div>
          <b>↓ <small>encuentra dificultades en</small></b>
          <div className="active"><small>NÚCLEO CRÍTICO</small><strong>Ocho objeciones</strong><p>Experiencia · significado · inferencia · método</p></div>
          <b>↓ <small>abre hacia</small></b>
          <div><small>CONTINUIDAD</small><strong>Lenguaje ordinario</strong><p>Análisis conceptual, prácticas lingüísticas y usos</p></div>
        </aside>
      </div>
    </header>
    <ArchivumMnemonic />
    <div className="ac9-layout ac1410-layout">
      <AnalyticEditorialIndex
        sections={sections}
        onNavigate={goTo}
        heading="INDEX · XIV OCTOBRIS"
        className="ac1410-index"
      >
        <Link className="ac1410-index-link" to="/semestre/5/filosofia-analitica/reporte/hacker">Sistema 2D ↗</Link>
      </AnalyticEditorialIndex>
      <article className="ac9-article ac1410-article">
        <section id="programa">
          <Heading n="01" eyebrow="Recapitulatio">Cinco compromisos del positivismo lógico</Heading>
          <p>La clase recupera el cierre del <em>Tractatus</em> y la recepción del Círculo de Viena
            para identificar cinco rasgos de su programa, sin presentar todo el positivismo histórico como una sola doctrina.</p>
          <div className="ac1410-commitments">
            {commitments.map(([number,title,detail]) => <div key={number}><span>{number}</span><strong>{title}</strong><p>{detail}</p></div>)}
          </div>
          <p className="ac1410-provenance"><b>Procedencia:</b> reconstrucción de la explicación docente sobre el capítulo final de Hacker; no es una cita literal del artículo.</p>
        </section>
        <section id="unidad">
          <Heading n="02" eyebrow="Distinctio">Comte no es el Círculo de Viena</Heading>
          <p>El profesor distingue dos sentidos de unidad de la ciencia. En <strong>Auguste Comte</strong>, ciencias distintas
            investigan objetos propios bajo una orientación metodológica positiva. En algunas formulaciones del
            <strong> positivismo lógico</strong>, se persigue una reducción lógica de enunciados significativos a
            un vocabulario común, a menudo fisicalista.</p>
          <div className="ac1410-compare">
            <div><span>COMTE · EXPLICACIÓN DOCENTE</span><strong>Unidad de método</strong><p>División del trabajo científico; distintas áreas conservan su campo.</p></div>
            <div><span>VIENA · PROGRAMA REDUCTIVO</span><strong>Unidad de lenguaje y base</strong><p>Conectar enunciados complejos con proposiciones básicas contrastables.</p></div>
          </div>
          <p>La clase enlaza esta ambición con la idea de proposiciones elementales y con el proyecto de clarificar las afirmaciones científicas.
            La equivalencia «unidad de método = una única física» no está justificada.</p>
        </section>
        <section id="criticas">
          <Heading n="03" eyebrow="Octo objectiones">Las ocho dificultades del programa</Heading>
          <p>Hacker sintetiza ocho problemas que socavan la plataforma positivista. Las fichas separan la
            <b> reconstrucción del argumento</b> de los <b>ejemplos trabajados en clase</b>.</p>
          <div className="ac1410-objections">
            {objections.map(([number,title,argument,lesson]) => <div key={number} className="ac1410-objection">
              <div className="ac1410-objection-no">{number}</div>
              <div><h3>{title}</h3><p>{argument}</p><small>APORTACIÓN DE CLASE</small><p>{lesson}</p></div>
            </div>)}
          </div>
          <p className="ac1410-provenance">Para bibliografía y localizadores de Hacker, consultar los nodos H52.1–H52.8 del sistema 2D. Las fichas no constituyen citas literales.</p>
        </section>
        <section id="realismo">
          <Heading n="04" eyebrow="Exempla scholae">Realismo, fenomenalismo y percepción</Heading>
          <p>Como apoyo para entender la primera objeción, el profesor comparó tres formas de entender la objetividad:
            confianza inmediata en lo percibido, objetividad alcanzada tras construir conocimiento y reconocimiento
            de límites en el acceso a propiedades de la realidad. La clasificación empleada en clase no debe confundirse
            con una doctrina atribuida a Hacker.</p>
          <div className="ac1410-compare">
            <div><span>EJEMPLO 01 · SAL</span><strong>Composición ≠ sabor</strong><p>La estructura química puede investigarse objetivamente; el sabor es una experiencia sensible.</p></div>
            <div><span>EJEMPLO 02 · COLOR</span><strong>Reflexión ≠ vivencia cromática</strong><p>Las interacciones con la luz no se identifican sin más con la apariencia del color.</p></div>
          </div>
          <p>La discusión retorna al problema filosófico: ¿qué puede afirmar el sujeto sobre el objeto
            sin confundir la representación propia con la realidad misma? Esta pregunta sirve de puente entre fenomenalismo y fisicalismo.</p>
        </section>
        <section id="significado">
          <Heading n="05" eyebrow="Meaning ≠ truth">Significado, verdad y cientificidad</Heading>
          <div className="ac1410-distinction">
            <div><span>IMPERATIVO</span><strong>«Cierra la puerta»</strong><p>Se comprende y puede obedecerse, pero no se evalúa como verdadero o falso.</p></div>
            <div><span>ENUNCIADO RELIGIOSO</span><strong>«Dios es amor»</strong><p>Puede tener significado para una comunidad sin constituir una hipótesis empírica verificable.</p></div>
          </div>
          <p>El argumento docente denuncia la <strong>confusión entre tener significado, ser verdadero
            y ser científico</strong>. Es posible entender una expresión aunque no posea condiciones de verdad
            o no reúna los criterios exigidos para la investigación empírica.</p>
          <p className="ac1410-provenance">Estos ejemplos pertenecen a la discusión de clase. La precisión conceptual no convierte por sí misma en verdaderas las proposiciones consideradas.</p>
        </section>
        <ArchivumArgument />
        <section id="metodo">
          <Heading n="06" eyebrow="Philosophia scientiae">Popper, conjeturas e inferencias</Heading>
          <p>Se presenta a <strong>Karl Popper</strong> como interlocutor crítico del verificacionismo:
            la <strong>falsabilidad</strong> aspira a demarcar hipótesis científicas, no a determinar
            si una frase posee significado en general. La clase destaca el papel de las conjeturas.</p>
          <div className="ac1410-flow">
            <span>Problema</span><b>→</b><span>Conjetura</span><b>→</b><span>Contrastación crítica</span><b>→</b><span>Revisión posible</span>
          </div>
          <p>El profesor distingue <strong>deducción, inducción y abducción</strong> para señalar
            que la investigación no queda agotada por un único cálculo formal. Un descubrimiento contingente
            tampoco equivale por sí solo a una justificación lógica.</p>
        </section>
        <section id="ciencias">
          <Heading n="07" eyebrow="Demarcatio">¿Pueden las ciencias sociales ser ciencias?</Heading>
          <p>La última discusión vincula el monismo metodológico con la autonomía de disciplinas como
            sociología, historia y psicología. La existencia de enfoques interpretativos, cualitativos y
            cuantitativos plantea qué debe entenderse por método científico.</p>
          <p>Se mencionan perspectivas centradas en <strong>comunidades científicas y paradigmas</strong>
            para contrastarlas con la demarcación por verificación o falsación. Esta referencia remite
            a la discusión docente sobre Kuhn y no debe atribuirse al ensayo de Hacker.</p>
          <div className="ac1410-questionbox"><span>PREGUNTA ABIERTA</span>
            <strong>¿La unidad de las ciencias exige un método único o permite criterios de objetividad diferentes según sus objetos?</strong>
          </div>
          <p>En el intercambio final se distingue además el estatuto de las matemáticas y de la lógica como
            disciplinas formales. La afirmación docente de que sus procesos garantizan validez debe leerse
            condicionada a la corrección de reglas y demostraciones; no significa infalibilidad de toda práctica matemática.</p>
        </section>
        <section id="transicion">
          <Heading n="08" eyebrow="Proxima lectio">De Hacker a Hans-Johann Glock</Heading>
          <p>El cierre del texto deja atrás una concepción exclusivamente reductiva del análisis.
            La nueva etapa abre la investigación filosófica a usos del lenguaje ordinario, prácticas de
            comunicación y formas de análisis conceptual no reducibles a un cálculo científico universal.</p>
          <div className="ac1410-compare">
            <div><span>LECTURA CONCLUIDA</span><strong>Peter M. S. Hacker</strong><p>Los orígenes de la filosofía analítica hasta el declive del programa positivista.</p></div>
            <div><span>SIGUIENTE LECTURA</span><strong>Hans-Johann Glock</strong><p><em>¿Qué es la filosofía analítica?</em>, capítulo II: «Breve panorama histórico» (después de la introducción).</p></div>
          </div>
          <div className="ac1410-task"><span>CONSIGNA ORAL DE CLASE</span>
            <strong>Preparar el reporte de lectura de Hacker.</strong>
            <p><strong>Entrega confirmada para la próxima clase: lunes 19 de octubre de 2026.</strong> La sesión está programada de 19:00 a 20:25, aula FH-25; no se ha indicado una hora límite más precisa.</p></div>
          <p className="ac1410-provenance">Los desarrollos y ejemplos de la sesión son notas docentes organizadas para estudio. El texto principal de Hacker y los comentarios del aula permanecen diferenciados.</p>
          <Link className="ac1410-return" to="/semestre/5/filosofia-analitica/reporte/hacker">Explorar los nodos ampliados de Hacker ↗</Link>
        </section>
        <ArchivumRecall />
      </article>
    </div>
    <footer className="ac1410-footer"><Link to="/semestre/5/filosofia-analitica">← Materia</Link><span>FI264 · Notas de clase · 14 OCT 2026</span><Link to="/semestre/5/filosofia-analitica/reporte/hacker">Sistema 2D ↗</Link></footer>
  </main>
}
