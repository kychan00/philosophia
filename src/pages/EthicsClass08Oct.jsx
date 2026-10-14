import { Link } from 'react-router'
import './EthicsClass10Sep.css'
import './EthicsClass08Oct.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'logos', 'Logos y expresión conceptual'],
  ['02', 'dialectica', 'Dialéctica destructiva'],
  ['03', 'reductio', 'Reducción al absurdo'],
  ['04', 'ejemplos', 'Ejemplos morales'],
  ['05', 'universales', 'Generalizaciones y prejuicios'],
  ['06', 'cinicos', 'Sócrates y los cínicos'],
  ['07', 'publica', 'Discusión pública y redes'],
  ['08', 'estructura', 'Responsabilidad estructural'],
  ['09', 'agua', 'Ciudadanía y derecho al agua'],
  ['10', 'tarea', 'Tarea vinculada'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="eth10-heading eth08-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsClass08Oct() {
  return (
    <main className="ethicsx-page eth10-page eth08-page">
      <div className="ethicsx-meander" aria-hidden="true" />

      <nav className="ethicsx-nav eth10-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethicsx-brand"><span>Φ</span>Philosophia</Link>
        <span>FI194 · VIII · X · MMXXVI</span>
      </nav>

      <header className="ethicsx-hero eth10-hero eth08-hero">
        <div className="ethicsx-columns" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
        <div className="ethicsx-pediment" aria-hidden="true" />
        <div className="ethicsx-ghost eth10-ghost eth08-ghost" aria-hidden="true">ἔλεγχος</div>

        <div className="ethicsx-hero-inner eth10-hero-inner">
          <p className="ethicsx-kicker">λόγος · ἔλεγχος · reductio ad absurdum · civitas</p>
          <div className="ethicsx-medallion">Σ</div>

          <h1>
            Ética
            <em>De la reducción al absurdo a la crítica cívica</em>
          </h1>

          <p className="ethicsx-lead eth10-lead">
            De la dialéctica socrática y el contraejemplo a la crítica de
            generalizaciones, prejuicios, polarización, responsabilidad social
            y ciudadanía.
          </p>

          <div className="ethicsx-question eth10-question">
            <span>Quaestio rectora</span>
            <strong>
              ¿Cómo puede una contradicción obligarnos a revisar una afirmación
              sobre la vida humana y, después, una forma de juzgar lo público?
            </strong>
          </div>

          <div className="ethicsx-meta eth10-meta">
            <div><span>Clase</span><strong>Octava de octubre</strong></div>
            <div><span>Fecha</span><strong>8 oct · 2026</strong></div>
            <div><span>Eje</span><strong>Dialéctica y crítica</strong></div>
            <div><span>Aplicación</span><strong>Ciudadanía</strong></div>
          </div>
        </div>
      </header>

      <section className="eth10-map-band eth08-map-band" aria-label="Recorrido conceptual">
        <span>idea</span><b>→</b>
        <span>logos</span><b>→</b>
        <span>regla general</span><b>→</b>
        <span>contraejemplo</span><b>→</b>
        <strong>contradicción</strong><b>→</b>
        <span>revisión</span><b>→</b>
        <span>crítica cívica</span>
      </section>

      <div className="eth10-layout">
        <aside className="eth10-index">
          <p>Index dialecticus</p>
          {sections.map(([n,id,label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span><b>{label}</b>
            </button>
          ))}
        </aside>

        <article className="eth10-article eth08-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Argumentum">De una afirmación firme a su revisión</Heading>

            <div className="eth08-sequence">
              <article><span>01</span><strong>Afirmar</strong><p>Una regla o juicio se presenta como válido.</p></article>
              <b>→</b>
              <article><span>02</span><strong>Derivar</strong><p>Se siguen sus consecuencias.</p></article>
              <b>→</b>
              <article><span>03</span><strong>Contrastar</strong><p>Se pregunta por un caso contrario posible.</p></article>
              <b>→</b>
              <article className="active"><span>04</span><strong>Revisar</strong><p>La contradicción obliga a corregir premisas o conceptos.</p></article>
            </div>

            <div className="eth10-thesis">
              <span>Tesis de la sesión</span>
              <strong>
                La reducción al absurdo no aparece sólo como técnica lógica:
                funciona también como herramienta contra generalizaciones,
                estereotipos y juicios prácticos demasiado fuertes.
              </strong>
            </div>
          </section>

          <section id="logos">
            <Heading n="01" eyebrow="Logos">Pensar no basta: hay que hacer examinable lo pensado</Heading>
            <p className="eth10-prose">
              La clase abre con la idea de que el contenido del pensamiento
              necesita alguna forma de logos para entrar en una discusión.
              Una intuición puede sentirse clara, pero sólo puede ser examinada
              cuando se expresa, se comunica y admite objeciones.
            </p>

            <div className="eth10-grid two">
              <article>
                <span>Formalización</span>
                <h3>Cuando la forma lógica alcanza</h3>
                <p>Algunas relaciones pueden organizarse como premisas, consecuencias y contradicciones explícitas.</p>
              </article>
              <article>
                <span>Recursos lingüísticos</span>
                <h3>Cuando hace falta aproximar una idea</h3>
                <p>Analogías, metáforas, tropos, tópicos y figuras retóricas pueden volver comunicable algo todavía no formalizado.</p>
              </article>
            </div>

            <div className="eth10-note">
              <span>Ejemplo de clase</span>
              <p>
                El oxímoron aparece como condensación conceptual: dos términos
                tensos o aparentemente incompatibles pueden producir una expresión
                nueva capaz de mostrar una idea; “claroscuro” es el ejemplo seguro recuperado.
              </p>
            </div>
          </section>

          <section id="dialectica">
            <Heading n="02" eyebrow="Elenchos">Dialéctica destructiva: hacer visible una incompatibilidad</Heading>
            <p className="eth10-prose">
              Sócrates es presentado como alguien que conduce al interlocutor por
              preguntas hasta que éste acepta consecuencias incompatibles con lo
              que había sostenido inicialmente. “Destructiva” no significa negar
              por capricho, sino mostrar que algo no puede sostenerse tal como fue formulado.
            </p>

            <div className="eth10-process">
              <span>afirmación aceptada</span><b>→</b>
              <span>consecuencia</span><b>→</b>
              <span>posibilidad contraria</span><b>→</b>
              <strong>incompatibilidad</strong><b>→</b>
              <span>revisión</span>
            </div>

            <div className="eth10-warning">
              <span>Precisión</span>
              <strong>
                La clase no sostiene que toda contradicción pruebe cualquier negación:
                muestra que el conjunto de afirmaciones aceptadas necesita corregirse.
              </strong>
            </div>
          </section>

          <section id="reductio">
            <Heading n="03" eyebrow="Reductio ad absurdum">La estructura pedagógica del ejercicio</Heading>

            <div className="eth08-steps">
              <article><span>1</span><strong>Aceptar provisionalmente</strong><p>una afirmación o regla.</p></article>
              <article><span>2</span><strong>Extraer</strong><p>una consecuencia relevante.</p></article>
              <article><span>3</span><strong>Introducir</strong><p>un caso o posibilidad contraria.</p></article>
              <article><span>4</span><strong>Aceptar</strong><p>ese caso si resulta razonable.</p></article>
              <article><span>5</span><strong>Exhibir</strong><p>la contradicción producida.</p></article>
              <article><span>6</span><strong>Revisar</strong><p>premisa, concepto o generalización.</p></article>
            </div>

            <p className="eth10-prose">
              El ejemplo sobre Sócrates y la mortalidad se corrige varias veces
              durante la clase. Por eso esta página conserva el objetivo
              didáctico, pero no congela una única fórmula simbólica como si
              hubiera sido la versión definitiva del profesor.
            </p>
          </section>

          <section id="ejemplos">
            <Heading n="04" eyebrow="Casus morales">Tres ejemplos para romper universales demasiado fuertes</Heading>

            <div className="eth10-grid three">
              <article>
                <span>Terapia</span>
                <h3>Ir a terapia ≠ superar necesariamente todo trauma</h3>
                <p>Un caso contrario basta para mostrar que la formulación universal era demasiado fuerte.</p>
              </article>
              <article>
                <span>Bondad</span>
                <h3>Ser bondadoso ≠ donar necesariamente dinero</h3>
                <p>La falta de dinero o formas distintas de ayuda obligan a revisar qué se presupuso acerca de la bondad.</p>
              </article>
              <article>
                <span>Respeto</span>
                <h3>Regla, caso y contradicción</h3>
                <p>El ejemplo de Panchito y Juanito sirve para entrenar la identificación de una incompatibilidad práctica.</p>
              </article>
            </div>
          </section>

          <section id="universales">
            <Heading n="05" eyebrow="Universalia">El problema ético de decir “todos”</Heading>
            <p className="eth10-prose">
              La discusión conecta la reducción al absurdo con frases sobre
              grupos humanos, identidades y conductas. Una sola excepción posible
              puede desmontar una universalidad estricta.
            </p>

            <div className="eth08-chain">
              <span>estereotipo</span><b>→</b>
              <span>pretensión universal</span><b>→</b>
              <strong>contraejemplo</strong><b>→</b>
              <span>contradicción</span><b>→</b>
              <span>revisión conceptual</span>
            </div>

            <div className="eth10-note">
              <span>Función ética</span>
              <p>
                Cuando una generalización falla, puede quedar expuesto no sólo
                un error lógico, sino una categoría mal definida, una experiencia
                limitada o un prejuicio presentado como regla universal.
              </p>
            </div>
          </section>

          <section id="cinicos">
            <Heading n="06" eyebrow="Socrates · Cynici">Dos estilos para mostrar una contradicción</Heading>

            <div className="eth10-dual">
              <article className="active">
                <span>Sócrates</span>
                <strong>Interrogación gradual</strong>
                <p>Pregunta, concede tiempo, hace participar al interlocutor y permite que la contradicción aparezca paso a paso.</p>
              </article>
              <div className="eth10-arrow">≠</div>
              <article>
                <span>Antístenes · Diógenes</span>
                <strong>Intervención abrupta</strong>
                <p>La clase los caracteriza como más directos, provocativos y dispuestos a exhibir la inconsistencia mediante ridículo.</p>
              </article>
            </div>

            <p className="eth10-prose">
              De aquí surge además una cuestión prudencial: detectar una
              contradicción no significa que siempre deba iniciarse una disputa.
              Importan contexto, riesgo, respeto, relación y consecuencias.
            </p>
          </section>

          <section id="publica">
            <Heading n="07" eyebrow="Agora digitalis">Redes, polarización e indignación</Heading>

            <p className="eth10-prose">
              La segunda mitad de la clase traslada el método al espacio público.
              El grupo discute contenidos diseñados para provocar enojo,
              polarización y engagement. La provocación puede parecer una
              victoria retórica aunque no contenga un argumento.
            </p>

            <div className="eth10-grid two">
              <article>
                <span>Argumento</span>
                <h3>razones que pueden examinarse</h3>
                <p>Premisas, consecuencias, objeciones y posibilidad de revisión.</p>
              </article>
              <article>
                <span>Provocación</span>
                <h3>reacción que puede ser rentable</h3>
                <p>Insulto, simplificación y enojo pueden aumentar interacción sin mejorar la calidad de las razones.</p>
              </article>
            </div>
          </section>

          <section id="estructura">
            <Heading n="08" eyebrow="Responsabilitas">Del juicio individual al análisis de condiciones</Heading>

            <p className="eth10-prose">
              Un caso social discutido en clase sirve para preguntar qué ocurre
              cuando toda la responsabilidad pública se concentra en una persona
              y desaparecen del análisis pobreza, cuidado, escuela, violencia,
              servicios e instituciones.
            </p>

            <div className="eth10-dual">
              <article>
                <span>Responsabilidad individual</span>
                <strong>acciones y decisiones concretas</strong>
                <p>Puede existir imputación personal sin que ésta explique por sí sola todo el fenómeno.</p>
              </article>
              <div className="eth10-arrow">+</div>
              <article className="active">
                <span>Responsabilidad estructural</span>
                <strong>condiciones e instituciones</strong>
                <p>El análisis pregunta qué omisiones, servicios y estructuras hicieron posible que una situación llegara hasta ahí.</p>
              </article>
            </div>
          </section>

          <section id="agua">
            <Heading n="09" eyebrow="Civitas · aqua">Derechos que se descubren cuando empiezan a faltar</Heading>

            <p className="eth10-prose">
              El agua se vuelve el ejemplo cívico central. La clase observa que
              muchas personas descubren normas y derechos cuando sufren una
              carencia o necesitan defenderse. De ahí el problema de una
              ciudadanía que desconoce las herramientas con las que podría reclamar.
            </p>

            <div className="eth08-civic-grid">
              <article><span>01</span><strong>derecho</strong><p>conocer qué se puede reclamar</p></article>
              <article><span>02</span><strong>infraestructura</strong><p>tratamiento, captación, distribución</p></article>
              <article><span>03</span><strong>institución</strong><p>responsabilidad pública y regulación</p></article>
              <article><span>04</span><strong>acción cívica</strong><p>hacer visible el interés compartido</p></article>
            </div>

            <div className="eth10-warning">
              <span>Frontera documental</span>
              <strong>
                Las afirmaciones concretas sobre concesiones, empresas, países
                o legislación aparecen como ejemplos discutidos oralmente en
                clase; esta página no las presenta como verificación jurídica independiente.
              </strong>
            </div>
          </section>

          <section id="tarea">
            <Heading n="10" eyebrow="Praxis">Dos argumentos reducibles al absurdo</Heading>

            <div className="eth10-task">
              <div>
                <span>Tarea vinculada</span>
                <h3>Construir dos argumentos formales reducibles al absurdo</h3>
                <p>
                  Formular una regla o afirmación, derivar una consecuencia,
                  introducir un caso contrario posible y mostrar la contradicción
                  que obliga a revisar una premisa, generalización o concepto.
                </p>
                <Link className="eth08-task-link" to="/tareas">Abrir tablero de tareas →</Link>
              </div>
              <aside>
                <span>Estado documental</span>
                <strong>Fecha de entrega no recuperada</strong>
                <p>La grabación confirma el ejercicio, pero no permite fijar un vencimiento con seguridad.</p>
              </aside>
            </div>

            <div className="eth08-source">
              <span>Nota documental</span>
              <p>
                Esta página reorganiza una grabación automática muy degradada.
                No reconstruye literalmente fórmulas que el profesor corrige en
                vivo y conserva como ejemplos de clase —no como hechos externos
                verificados— los casos sociales y políticos discutidos durante la sesión.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="ethicsx-footer eth10-footer">
        <Link to="/semestre/5/etica">← Volver a Ética</Link>
        <span>λόγος · ἔλεγχος · πρᾶξις</span>
        <span>VIII · X · MMXXVI</span>
      </footer>

      <div className="ethicsx-meander" aria-hidden="true" />
    </main>
  )
}
