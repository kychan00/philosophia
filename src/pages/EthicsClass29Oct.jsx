import { Link } from 'react-router'
import './EthicsClass10Sep.css'
import './EthicsClass29Oct.css'

const sections = [
  ['lecturas', 'Lectura y formas filosóficas'],
  ['logos', 'Razón y sentimientos'],
  ['estima', 'Vergüenza y estima social'],
  ['convivencia', 'Convivencia y protección'],
  ['muerte', 'El límite de la vida'],
  ['esquema', 'Esquema de estudio'],
  ['lectura', 'Próximo ejercicio'],
]

const steps = [
  { number: 'I', title: 'Orden racional', greek: 'λόγος', description: 'La clase retoma la idea estoica de un cosmos inteligible y orientado por la razón.' },
  { number: 'II', title: 'Examen de los afectos', greek: 'κρίσις', description: 'La pregunta práctica es por qué sentimos vergüenza o malestar y cómo juzgamos esas experiencias.' },
  { number: 'III', title: 'Relación con los otros', greek: 'ἦθος', description: 'El reconocimiento y la protección de la vida conducen a preguntar qué debemos a las demás personas.' },
]

function Heading({ number, label, children }) {
  return <header className="eth10-heading eth29-heading">
    <span>{number}</span><div><p>{label}</p><h2>{children}</h2></div>
  </header>
}

function jump(id) {
  document.getElementById('eth29-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function EthicsClass29Oct() {
  return <main className="ethicsx-page eth10-page eth29-page">
    <div className="ethicsx-meander" aria-hidden="true" />
    <nav className="ethicsx-nav eth10-nav" aria-label="Navegación de Ética">
      <Link to="/semestre/5/etica">← Ética · Escuelas clásicas</Link>
      <Link to="/" className="ethicsx-brand"><span>Φ</span>Philosophia</Link>
      <span>FI194 · XXIX · X · MMXXVI</span>
    </nav>

    <header className="ethicsx-hero eth10-hero eth29-hero">
      <div className="ethicsx-columns" aria-hidden="true"><span/><span/><span/><span/><span/></div>
      <div className="ethicsx-pediment" aria-hidden="true" />
      <div className="ethicsx-ghost eth29-ghost" aria-hidden="true">ἦθος</div>
      <div className="ethicsx-hero-inner eth10-hero-inner">
        <p className="ethicsx-kicker">ETHOS · LECTIO · XXIX OCTOBRIS · MMXXVI</p>
        <div className="ethicsx-medallion" aria-hidden="true">Σ</div>
        <h1>Ética <em>Razón, estima social y límites de la vida</em></h1>
        <p className="ethicsx-lead eth10-lead">Una lectura de la Stoa entre formas literarias, sentimientos, reconocimiento, protección de la vida y decisiones moralmente difíciles.</p>
        <div className="ethicsx-question eth10-question">
          <span>Quaestio rectora · reconstrucción de estudio</span>
          <strong>¿Cómo se relacionan la razón individual, las valoraciones de la sociedad y el deber hacia la vida?</strong>
        </div>
        <div className="ethicsx-meta eth10-meta">
          <div><span>Fecha</span><strong>29 oct · 2026</strong></div>
          <div><span>Curso</span><strong>Ética · FI194</strong></div>
          <div><span>Tradición</span><strong>Estoicismo</strong></div>
          <div><span>Formato</span><strong>Comentario y lectura</strong></div>
        </div>
      </div>
    </header>

    <div className="eth29-method-band">
      <span><b className="eth29-dot" /> Exposición de clase</span>
      <span><b className="eth29-dot eth29-dot-gold" /> Reconstrucción editorial</span>
      <span><b className="eth29-dot eth29-dot-sage" /> Contraste bibliográfico</span>
    </div>

    <div className="eth10-layout eth29-layout">
      <aside className="eth10-index eth29-index" aria-label="Índice de la sesión">
        <p>Index lectionis</p>
        {sections.map(([id, text], i) => <button type="button" key={id} onClick={() => jump(id)}>
          <span>{String(i + 1).padStart(2, '0')}</span><b>{text}</b>
        </button>)}
      </aside>

      <article className="eth10-article eth29-article">
        <section id="eth29-lecturas">
          <Heading number="01" label="Apertura de la sesión">Leer la Stoa en sus diferentes formas</Heading>
          <p className="eth10-prose">La conversación inicial recorre los problemas de leer obras extensas y muy descriptivas y pasa después a las ediciones de textos filosóficos antiguos. En ese contexto se recuerda que la tradición estoica no se conserva como un único tratado: aparecen <strong>cartas, fragmentos y escritos de distintos géneros</strong>. La forma del texto influye en el tipo de ejercicio que puede hacerse en clase.</p>
          <p className="eth10-prose">Se menciona expresamente <em>Los estoicos antiguos</em>, volumen preparado por <strong>Ángel J. Cappelletti</strong> en Gredos. También se proponen autores o cartas de la tradición estoica, entre ellos <strong>Séneca</strong>. Los títulos de otras piezas son demasiado imprecisos para identificarlos.</p>
          <div className="eth29-editorial"><strong>Frontera documental</strong><p>La charla sobre novelas, películas y narraciones de fantasía fue introductoria. No se convierte en una lección sobre esas obras ni se les atribuyen tesis estoicas.</p></div>
        </section>

        <section id="eth29-logos">
          <Heading number="02" label="Del cosmos a la vida práctica">La razón no elimina la pregunta por el sentimiento</Heading>
          <p className="eth10-prose">La exposición retoma al <strong>logos</strong> como razón que ordena el cosmos y lo vincula con un horizonte finalista. Sin embargo, el diálogo se desplaza hacia una cuestión próxima: cómo entender el sentimiento, por qué algo nos hace sentir mal y qué resistencia o respuesta corresponde a ese afecto.</p>
          <p className="eth10-prose">La clase no desarrolla una teoría psicológica completa. Lo que puede recuperarse es una invitación a <strong>examinar el juicio asociado a la emoción</strong>, sin fingir que basta con explicar la estructura del universo para comprender automáticamente una experiencia humana.</p>
          <div className="eth29-question"><span>Pregunta para estudiar · elaboración editorial</span><strong>¿Por qué me afecta lo que otros piensan de mí y qué parte de esa valoración puedo examinar racionalmente?</strong></div>
          <p className="eth29-layer"><strong>Contraste histórico:</strong> el logos estoico es un principio racional inmanente a la naturaleza. La relación entre cosmología, juicio y pasiones requiere estudio de fuentes; aquí se presenta como recorrido temático del aula, no como demostración literal de un texto de Zenón.</p>
        </section>

        <section id="eth29-estima">
          <Heading number="03" label="La mirada de los otros">Vergüenza, reconocimiento y estima social</Heading>
          <p className="eth10-prose">El intercambio se concentra en un sentimiento que puede aparecer al ser vistos por otros, especialmente ante una torpeza pública. Se recuerda el ejemplo de alguien que resbala cerca de unas escaleras, y el malestar ligado a la reacción de los presentes.</p>
          <div className="eth29-case">
            <div><span>Situación</span><strong>Exposición pública</strong><p>Ocurre un tropiezo o una equivocación ante otras personas.</p></div>
            <div><span>Experiencia</span><strong>Vergüenza</strong><p>La valoración de los demás puede afectar la manera en que nos vemos.</p></div>
            <div><span>Pregunta ética</span><strong>¿Qué estima importa?</strong><p>Conviene distinguir una señal social de un juicio moral bien fundado.</p></div>
          </div>
          <p className="eth10-prose">Aparece la expresión <strong>estima social</strong>, vinculada en la discusión a la vergüenza y al valor de la persona ante la comunidad. El término original que se intentó recuperar no se escucha con suficiente claridad; por eso no se le asigna una etimología griega como si fuera segura.</p>
        </section>

        <section id="eth29-convivencia">
          <Heading number="04" label="La vida entre personas">¿A quién protege una comunidad?</Heading>
          <p className="eth10-prose">La discusión pasa del reconocimiento a las decisiones sociales sobre quién merece protección. Se mencionan profesiones de auxilio, el cuidado de niños y la prioridad que en determinadas situaciones se concede a personas consideradas vulnerables. Aparece como ejemplo la fórmula <em>«mujeres y niños primero»</em>.</p>
          <div className="eth29-editorial"><strong>Alcance de los ejemplos</strong><p>Son afirmaciones e intervenciones debatidas en el aula. No acreditan que exista un protocolo universal de emergencias, ni una jerarquía intrínseca del valor de las vidas según sexo, género o edad. También hubo opiniones controvertidas acerca de las categorías de género; no constituyen una conclusión académica verificada.</p></div>
          <p className="eth10-prose">El problema filosófico que permanece es cómo puede organizarse la convivencia cuando existen riesgos, desigualdades y desacuerdos sobre el reconocimiento. Se preguntó, además, por el funcionamiento de las instituciones y por el aprecio social hacia la vida.</p>
        </section>

        <section id="eth29-muerte">
          <Heading number="05" label="Cuestión abierta">Estoicismo, muerte y justificación moral</Heading>
          <p className="eth10-prose">Al final de la sesión se plantea que las doctrinas estoicas antiguas trataron casos difíciles relativos a la muerte, incluso el poner fin a la propia vida. La exposición menciona también la muerte causada a otros, pero el fragmento disponible se interrumpe antes de desarrollar los argumentos y sus condiciones.</p>
          <p className="eth10-prose">Por rigor, <strong>no puede concluirse que el estoicismo justifique de forma general quitar la vida a otros o quitarse la propia</strong>. La discusión histórica sobre la salida voluntaria de la vida es específica y controvertida, y no sustituye el deber de examinar el contexto y el valor de cada persona.</p>
          <p className="eth29-layer"><strong>Contraste externo:</strong> para la discusión histórica de la muerte voluntaria en la Stoa, véase la <a href="https://plato.stanford.edu/entries/suicide/" target="_blank" rel="noopener noreferrer">Stanford Encyclopedia of Philosophy · Suicide</a>. Esta referencia no fue identificada como lectura de la sesión.</p>
        </section>

        <section id="eth29-esquema">
          <Heading number="06" label="Schema · elaboración editorial">Del orden cósmico a la responsabilidad práctica</Heading>
          <figure className="eth29-figure">
            <img src={import.meta.env.BASE_URL + 'images/etica/2026-10-29/logos-estima-convivencia.svg'} loading="lazy" alt="Diagrama editorial original de tres planos: razón y orden cósmico, examen de sentimientos y juicio social, convivencia y obligación hacia la vida; las flechas indican un recorrido de estudio, no una deducción necesaria." />
            <figcaption>Ilustración vectorial original de PHILOSOPHIA. Los vínculos son un <strong>itinerario pedagógico reconstruido</strong>, no una cadena argumental atribuida literalmente a la tradición estoica.</figcaption>
          </figure>
          <div className="eth29-nodes" aria-label="Tres nodos explicados del esquema">
            {steps.map(step => <div key={step.number} className="eth29-node">
              <span>{step.number} · {step.greek}</span><h3>{step.title}</h3><p>{step.description}</p>
            </div>)}
          </div>
          <p className="eth29-layer">El cambio de plano es crucial: de una descripción filosófica del orden del mundo no se deduce sin argumentos una norma social particular. El juicio ético exige justificar las mediaciones.</p>
        </section>

        <section id="eth29-lectura">
          <Heading number="07" label="Acuerdo de trabajo propuesto">Una carta o texto por estudiante</Heading>
          <p className="eth10-prose">Se sugirió que cada participante <strong>seleccione una carta o un texto breve de la tradición estoica y lo lea para comentarlo con el grupo</strong>. La intención es trabajar una fuente concreta sin exigir necesariamente una exposición extensa.</p>
          <div className="eth29-task"><span>Lectura por precisar</span><strong>Elegir un texto de la tradición estoica para comentar en clase.</strong><p>No consta lista definitiva, plazo de entrega, calificación, páginas obligatorias ni asignación individual. Verificar con el profesor antes de tratarlo como tarea formal.</p></div>
          <p className="eth29-layer"><strong>Referencia bibliográfica verificada, no asignación:</strong> Ángel J. Cappelletti, ed., <em>Los estoicos antiguos</em>, Biblioteca Clásica Gredos 230, 1996. <a href="https://dialnet.unirioja.es/servlet/libro?codigo=357663" target="_blank" rel="noopener noreferrer">Ficha bibliográfica</a>.</p>
        </section>

        <footer className="eth29-footer">
          <p><strong>Nota documental.</strong> La sesión contiene pasajes incompletos; se preservan únicamente los núcleos reconocibles. Las explicaciones editoriales y los contrastes externos están marcados como tales. No se atribuyen citas literales no verificadas.</p>
          <Link to="/semestre/5/etica">← Volver al archivo de Ética</Link>
        </footer>
      </article>
    </div>
    <div className="ethicsx-meander" aria-hidden="true" />
  </main>
}
