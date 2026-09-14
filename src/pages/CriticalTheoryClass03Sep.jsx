import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'saber', 'Conocimiento y saber'],
  ['02', 'fenomenologia', 'Fenomenología y experiencia'],
  ['03', 'figuras', 'Figuras de la conciencia'],
  ['04', 'escision', 'Sujeto, objeto y escisión'],
  ['05', 'ciencia', 'Ciencia orgánica y ciencia disciplinar'],
  ['06', 'kant', 'Hegel frente a Kant'],
  ['07', 'dialectica', 'En sí · para sí · en sí y para sí'],
  ['08', 'negatividad', 'Negatividad, falsedad y superación'],
  ['09', 'espiral', 'Espiral, figuras y concreción'],
  ['10', 'absoluto', 'Arte, religión y filosofía'],
  ['11', 'tarea', 'Tarea para la siguiente sesión'],
]

const consciousnessFigures = [
  ['natural', 'Conciencia natural', 'aquí y ahora',
    'La sesión la presenta como la forma de conciencia del sentido común: todavía no opera con saber especializado y toma las cosas como singulares.'],
  ['reason', 'Razón', 'concepto y ley',
    'La conciencia aprende a percibir la realidad mediante conceptos y leyes, tanto en la naturaleza como en la sociedad.'],
  ['self', 'Autoconciencia', 'idealismo',
    'El momento superior llega cuando la conciencia reconoce que el objeto que parecía enteramente externo está ligado a la conciencia misma.'],
]

const dialecticStages = [
  ['in-itself', 'En sí', 'afirmación',
    'Primer momento de una figura. La clase lo usa didácticamente como punto de partida o afirmación.'],
  ['for-itself', 'Para sí', 'negación',
    'La figura entra en tensión consigo misma: aparece el desajuste, la contradicción y la primera negación.'],
  ['in-and-for-itself', 'En sí y para sí', 'superación',
    'El tercer momento recupera y filtra los anteriores. No regresa al mismo punto: incorpora lo recorrido en una configuración nueva.'],
]

const absoluteModes = [
  ['art', 'Arte', 'imagen del absoluto',
    'El arte entrega una forma de aprehensión del absoluto y conserva, según la clase, una herencia del romanticismo.'],
  ['religion', 'Religión', 'Dios',
    'La religión también entrega el absoluto, bajo su propia forma de representación.'],
  ['philosophy', 'Filosofía', 'concepto',
    'La filosofía aparece como la forma más elevada porque entrega el absoluto por medio del concepto, de forma enteramente racional.'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ctsep1-heading">
      <span>{n}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function CriticalTheoryClass03Sep() {
  const [figureId, setFigureId] = useState('natural')
  const [scienceView, setScienceView] = useState('hegel')
  const [dialecticId, setDialecticId] = useState('in-itself')
  const [absoluteId, setAbsoluteId] = useState('philosophy')

  const figure = useMemo(
    () => consciousnessFigures.find(([id]) => id === figureId) || consciousnessFigures[0],
    [figureId],
  )
  const dialectic = useMemo(
    () => dialecticStages.find(([id]) => id === dialecticId) || dialecticStages[0],
    [dialecticId],
  )
  const absolute = useMemo(
    () => absoluteModes.find(([id]) => id === absoluteId) || absoluteModes[0],
    [absoluteId],
  )

  return (
    <main className="ctsep1-page">
      <nav className="ctsep1-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ctsep1-brand">Φ · Philosophia</Link>
        <span>III · IX · MMXXVI</span>
      </nav>

      <header className="ctsep1-hero">
        <div className="ctsep1-ghost" aria-hidden="true">ERFAHRUNG</div>
        <div className="ctsep1-hero-inner">
          <div>
            <p className="ctsep1-kicker">FI265 · Sexta clase · 3 de septiembre</p>
            <h1>Saber absoluto,<em>experiencia y dialéctica</em></h1>
            <p className="ctsep1-lead">
              La sesión profundiza en la Fenomenología del espíritu como ciencia
              de las experiencias de la conciencia y reconstruye el movimiento
              por el cual las figuras se contradicen, se niegan y se integran
              en configuraciones cada vez más ricas.
            </p>
            <div className="ctsep1-question">
              <span>PREGUNTA CENTRAL</span>
              <strong>
                ¿Cómo hace la conciencia la experiencia del espíritu hasta
                poder aprehender el absoluto como una totalidad en movimiento?
              </strong>
            </div>
          </div>
          <aside className="ctsep1-axis">
            <span>RECORRIDO</span>
            <div><b>CONCIENCIA</b><small>figuras · experiencia</small></div>
            <i>↓</i>
            <div><b>NEGATIVIDAD</b><small>desajuste · contradicción</small></div>
            <i>↓</i>
            <div className="active"><b>SABER</b><small>totalidad · concepto</small></div>
          </aside>
        </div>
      </header>

      <div className="ctsep1-layout">
        <aside className="ctsep1-index">
          <p>Index criticus</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ctsep1-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Argumentum">
              Del conocimiento especializado al saber de la totalidad
            </Heading>
            <div className="ctsep1-master">
              <span>conciencia</span><b>→</b>
              <span>figura</span><b>→</b>
              <span>experiencia</span><b>→</b>
              <span>desajuste</span><b>→</b>
              <span>negatividad</span><b>→</b>
              <span>superación</span><b>→</b>
              <strong>saber absoluto</strong>
            </div>
            <div className="ctsep1-thesis">
              <span>TESIS DE LA SESIÓN</span>
              <strong>
                El saber no consiste en acumular conocimientos aislados:
                consiste en comprender la totalidad de lo real en su
                despliegue, sus relaciones y su movimiento dialéctico.
              </strong>
            </div>
          </section>

          <section id="saber">
            <Heading n="01" eyebrow="Scientia et cognitio">
              Conocimiento y saber no significan lo mismo
            </Heading>
            <p>
              La clase distingue el conocimiento especializado —vinculado al
              entendimiento y al dominio profundo de algo particular— del
              saber, que reúne el todo y comprende cómo está orgánicamente
              estructurado e interpretado.
            </p>
            <div className="ctsep1-inversion">
              <article><span>CONOCIMIENTO</span><strong>especialización · entendimiento · una parcela</strong></article>
              <b>↯</b>
              <article className="danger"><span>SABER</span><strong>totalidad · relaciones · estructura orgánica</strong></article>
            </div>
            <div className="ctsep1-note">
              <strong>Ciencia para Hegel, según la sesión</strong>
              <p>
                Es el saber absoluto que aprehende el absoluto precisamente en
                su movimiento, despliegue y manifestación.
              </p>
            </div>
          </section>

          <section id="fenomenologia">
            <Heading n="02" eyebrow="Experientia conscientiae">
              La Fenomenología es ciencia de las experiencias de la conciencia
            </Heading>
            <p>
              La pregunta de la sesión es cómo la conciencia va aprehendiendo,
              poco a poco, el espíritu objetivo y su despliegue. Para hacerlo,
              la Fenomenología vuelve al pasado de la conciencia y,
              simultáneamente, al pasado de la sociedad.
            </p>
            <div className="ctsep1-master centered">
              <span>pasado de la conciencia</span><b>+</b>
              <span>pasado social</span><b>→</b>
              <strong>experiencias de la conciencia</strong>
            </div>
            <div className="ctsep1-warning">
              <span>DOBLE DIMENSIÓN</span>
              <strong>
                El recorrido opera en la conciencia individual y también en
                formas colectivas como filosofía, religión y arte.
              </strong>
            </div>
          </section>

          <section id="figuras">
            <Heading n="03" eyebrow="Figurae conscientiae">
              La conciencia atraviesa figuras y aprende de sus fracasos
            </Heading>
            <div className="ctsep1-fromm-tabs">
              {consciousnessFigures.map(([id, title, label]) => (
                <button type="button" key={id} className={figure[0] === id ? 'active' : ''} onClick={() => setFigureId(id)}>
                  <span>{label}</span><strong>{title}</strong>
                </button>
              ))}
            </div>
            <article className="ctsep1-focus">
              <span>{figure[2]}</span><h3>{figure[1]}</h3><p>{figure[3]}</p>
            </article>
            <div className="ctsep1-master centered">
              <span>conciencia natural</span><b>→</b>
              <span>razón</span><b>→</b>
              <strong>autoconciencia</strong>
            </div>
          </section>

          <section id="escision">
            <Heading n="04" eyebrow="Subjectum et obiectum">
              La escisión hace posible el movimiento
            </Heading>
            <p>
              La conciencia comienza pensando sujeto y objeto como separados.
              La autoconciencia alcanza un punto idealista cuando reconoce que
              aquello que parecía completamente exterior no está desligado de
              la conciencia misma.
            </p>
            <div className="ctsep1-master">
              <span>unidad</span><b>→</b>
              <span>escisión</span><b>→</b>
              <span>contraposición</span><b>→</b>
              <span>movimiento</span><b>→</b>
              <strong>reencuentro</strong>
            </div>
            <div className="ctsep1-note">
              <strong>Imagen del teatro</strong>
              <p>
                La clase compara este reconocimiento con abrir una cortina:
                aquello que parecía enteramente otro termina revelándose como
                algo inseparable del propio espíritu.
              </p>
            </div>
          </section>

          <section id="ciencia">
            <Heading n="05" eyebrow="Scientia organica">
              Hegel contrapone una ciencia orgánica a la fragmentación disciplinar
            </Heading>
            <div className="ctsep1-toggle">
              <button type="button" className={scienceView === 'hegel' ? 'active' : ''} onClick={() => setScienceView('hegel')}>Hegel</button>
              <button type="button" className={scienceView === 'modern' ? 'active' : ''} onClick={() => setScienceView('modern')}>Ciencia moderna</button>
            </div>
            <div className="ctsep1-obedience">
              {scienceView === 'hegel' ? (
                <>
                  <span>ORGANICIDAD</span>
                  <h3>El saber busca las relaciones entre las partes.</h3>
                  <p>La totalidad no está seccionada: sus dimensiones están interrelacionadas y deben ser pensadas en esa relación.</p>
                </>
              ) : (
                <>
                  <span>ESPECIALIZACIÓN</span>
                  <h3>Las disciplinas separan parcelas de realidad.</h3>
                  <p>Biología, química, matemáticas, sociología, antropología o psicología aparecen como campos individualizados.</p>
                </>
              )}
            </div>
            <div className="ctsep1-note">
              <strong>Holismo y pensamiento complejo</strong>
              <p>
                La sesión aproxima esta idea a versiones holistas y al
                pensamiento complejo de Morin: conocer de forma compleja
                significa atender las interrelaciones.
              </p>
            </div>
          </section>

          <section id="kant">
            <Heading n="06" eyebrow="Kant contra Hegel">
              Dos maneras de construir un sistema
            </Heading>
            <p>
              La clase presenta a Kant como un pensador sistemático que separa
              conocimiento, moral y estética en tres críticas. Hegel objeta que
              la cosa misma no se comporta como una realidad seccionada, sino
              como una estructura orgánica.
            </p>
            <div className="ctsep1-inversion">
              <article><span>KANT</span><strong>claridad · distinción · separación analítica</strong></article>
              <b>↔</b>
              <article className="danger"><span>HEGEL</span><strong>interrelación · organicidad · dialéctica</strong></article>
            </div>
          </section>

          <section id="dialectica">
            <Heading n="07" eyebrow="Motus dialecticus">
              En sí · para sí · en sí y para sí
            </Heading>
            <p>
              La sesión hace una precisión explícita: “tesis, antítesis y
              síntesis” no es presentado como el lenguaje propio de Hegel.
              Para explicar el movimiento se trabajan los términos en sí,
              para sí y en sí y para sí.
            </p>
            <div className="ctsep1-fromm-tabs">
              {dialecticStages.map(([id, title, label]) => (
                <button type="button" key={id} className={dialectic[0] === id ? 'active' : ''} onClick={() => setDialecticId(id)}>
                  <span>{label}</span><strong>{title}</strong>
                </button>
              ))}
            </div>
            <article className="ctsep1-focus">
              <span>{dialectic[2]}</span><h3>{dialectic[1]}</h3><p>{dialectic[3]}</p>
            </article>
            <div className="ctsep1-warning">
              <span>NO ES UN REGRESO</span>
              <strong>
                El tercer momento no vuelve al punto inicial: recupera los
                momentos anteriores y los incorpora en algo nuevo.
              </strong>
            </div>
          </section>

          <section id="negatividad">
            <Heading n="08" eyebrow="Negatio et falsitas">
              Lo falso no se tira a la basura
            </Heading>
            <p>
              Cuando una figura descubre que su concepto de verdad no coincide
              con lo que pretendía explicar, aparece un desajuste. Ese fracaso
              no es un residuo inútil: impulsa el paso hacia una nueva figura.
            </p>
            <div className="ctsep1-master">
              <span>pretensión de verdad</span><b>→</b>
              <span>desajuste</span><b>→</b>
              <span>falsedad</span><b>→</b>
              <span>negatividad</span><b>→</b>
              <strong>nueva figura</strong>
            </div>
            <div className="ctsep1-thesis">
              <span>“NO TIENE DESPERDICIO”</span>
              <strong>
                El momento superado permanece filtrado dentro de lo que viene
                después. Por eso lo posterior es más rico en determinaciones.
              </strong>
            </div>
          </section>

          <section id="espiral">
            <Heading n="09" eyebrow="Spira · figura · concretum">
              El movimiento se parece más a una espiral que a una línea
            </Heading>
            <p>
              La propia clase reconoce el límite de toda representación
              bidimensional. Se propone imaginar un movimiento espiral,
              incluso fractal, en el que cada figura contiene despliegues
              internos y se relaciona con las demás.
            </p>
            <div className="ctsep1-master centered">
              <span>figura</span><b>→</b>
              <span>despliegue</span><b>→</b>
              <span>incorporación</span><b>→</b>
              <strong>más concreto</strong>
            </div>
            <div className="ctsep1-note">
              <strong>Concreto = rico en determinaciones</strong>
              <p>
                Cuanto más avanza el recorrido, más contenido incorpora. El
                absoluto aparece al final como la realidad desplegada en el
                tiempo con sus determinaciones.
              </p>
            </div>
          </section>

          <section id="absoluto">
            <Heading n="10" eyebrow="Absolutum">
              Tres maneras de aprehender el absoluto
            </Heading>
            <div className="ctsep1-fromm-tabs">
              {absoluteModes.map(([id, title, label]) => (
                <button type="button" key={id} className={absolute[0] === id ? 'active' : ''} onClick={() => setAbsoluteId(id)}>
                  <span>{label}</span><strong>{title}</strong>
                </button>
              ))}
            </div>
            <article className="ctsep1-focus">
              <span>{absolute[2]}</span><h3>{absolute[1]}</h3><p>{absolute[3]}</p>
            </article>
            <div className="ctsep1-thesis">
              <span>ESFUERZO DEL CONCEPTO</span>
              <strong>
                La sesión formula la filosofía como el esfuerzo del concepto:
                comprender racionalmente el recorrido y explicar cómo cada
                figura se desplegó a través del tiempo y de la historia.
              </strong>
            </div>
          </section>

          <section id="tarea">
            <Heading n="11" eyebrow="Ad proximam sessionem">
              Revisar el índice de la Fenomenología del espíritu
            </Heading>
            <p>
              La tarea indicada en clase es mirar el índice de la obra para
              observar cómo se organizan las figuras y cómo aparecen una y otra
              vez estructuras de tres momentos.
            </p>
            <div className="ctsep1-warning">
              <span>PARA LA SIGUIENTE CLASE</span>
              <strong>
                Ver el índice de la Fenomenología del espíritu y reconocer su
                organización en figuras, secciones y subdivisiones.
              </strong>
            </div>
          </section>
        </article>
      </div>

      <footer className="ct-footer">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <span>Erfahrung · Negation · Begriff</span>
        <span>III · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
