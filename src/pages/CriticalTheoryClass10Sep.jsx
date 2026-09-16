import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './CriticalTheoryClass10Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'marx', 'Entrada a Marx'],
  ['02', 'trabajo', 'Trabajo y antropología'],
  ['03', 'hegel', 'Hegel → Marx'],
  ['04', 'materialismo', 'Materialismo histórico'],
  ['05', 'produccion', 'Producción y relaciones'],
  ['06', 'praxis', 'Praxis y transformación'],
  ['07', 'ideologia', 'Ideología y poder'],
  ['08', 'objetivacion', 'Objetivación'],
  ['09', 'metabolismo', 'Relación metabólica'],
  ['10', 'enajenacion', 'Objetivación → enajenación'],
  ['11', 'retorno', 'El problema del retorno'],
  ['12', 'tarea', 'Lectura para la siguiente clase'],
]

const modes = [
  ['primitive', 'Comunismo primitivo', 'cooperación básica'],
  ['slave', 'Esclavismo', 'trabajo esclavo'],
  ['feudal', 'Feudalismo', 'relaciones estamentales'],
  ['capital', 'Capitalismo', 'trabajo asalariado'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ctsep10-heading">
      <span>{n}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function CriticalTheoryClass10Sep() {
  const [modeId, setModeId] = useState('capital')
  const [view, setView] = useState('objectification')

  const mode = useMemo(
    () => modes.find(([id]) => id === modeId) || modes[3],
    [modeId],
  )

  return (
    <main className="ctsep10-page">
      <nav className="ctsep10-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ctsep10-brand">Φ · Philosophia</Link>
        <span>X · IX · MMXXVI</span>
      </nav>

      <header className="ctsep10-hero">
        <div className="ctsep10-ghost" aria-hidden="true">ENTFREMDUNG</div>
        <div className="ctsep10-hero-inner">
          <div>
            <p className="ctsep10-kicker">FI265 · Séptima clase · 10 de septiembre de 2026</p>
            <h1>Marx:<em>trabajo, objetivación y enajenación</em></h1>
            <p className="ctsep10-lead">
              La clase abre los <em>Manuscritos económico-filosóficos de 1844</em>
              y reconstruye el trabajo como relación material entre ser humano y
              naturaleza. El problema aparece cuando la objetivación deja de volver
              a quien produce y se convierte en una fuerza extraña.
            </p>
            <div className="ctsep10-question">
              <span>PREGUNTA CENTRAL</span>
              <strong>
                ¿Cómo puede una actividad constitutiva de lo humano convertirse
                históricamente en trabajo enajenado?
              </strong>
            </div>
          </div>

          <aside className="ctsep10-axis">
            <span>SECUENCIA</span>
            <div><b>TRABAJO</b><small>transformación material</small></div>
            <i>↓</i>
            <div><b>OBJETIVACIÓN</b><small>actividad hecha objeto</small></div>
            <i>↓</i>
            <div className="active"><b>ENAJENACIÓN</b><small>lo producido se vuelve extraño</small></div>
          </aside>
        </div>
      </header>

      <div className="ctsep10-layout">
        <aside className="ctsep10-index">
          <p>Index materialis</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ctsep10-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Argumentum">De Hegel a Marx: del espíritu a la actividad material</Heading>
            <div className="ctsep10-master">
              <span>ser humano</span><b>↔</b>
              <span>naturaleza</span><b>→</b>
              <span>trabajo</span><b>→</b>
              <span>objetivación</span><b>→</b>
              <span>mundo social</span><b>→</b>
              <strong>¿retorno o enajenación?</strong>
            </div>
            <div className="ctsep10-thesis">
              <span>TESIS DE LA SESIÓN</span>
              <strong>
                Objetivación no significa todavía enajenación. Objetivarse en lo
                producido es constitutivo del trabajo humano; la enajenación
                comienza cuando ese producto deja de volver a quienes lo producen.
              </strong>
            </div>
          </section>

          <section id="marx">
            <Heading n="01" eyebrow="Manuscripta 1844">El Marx joven: filosofía, economía y crítica social</Heading>
            <div className="ctsep10-two">
              <article><span>MARX JOVEN</span><h3>Manuscritos de 1844</h3><p>Antropología filosófica, trabajo, objetivación y enajenación.</p></article>
              <article><span>MARX MADURO</span><h3>El capital</h3><p>Análisis mucho más desarrollado del capitalismo, mercancía, valor, capital y fetichismo.</p></article>
            </div>
            <div className="ctsep10-note">
              <strong>Continuidad con transformaciones</strong>
              <p>La clase rechaza tratar al autor como si hubiera pensado exactamente lo mismo durante toda su vida.</p>
            </div>
          </section>

          <section id="trabajo">
            <Heading n="02" eyebrow="Anthropologia">El trabajo no es originalmente algo negativo</Heading>
            <div className="ctsep10-inversion">
              <article className="active"><span>TRABAJO EN GENERAL</span><strong>nos humaniza</strong><p>Transformamos la naturaleza y desarrollamos capacidades.</p></article>
              <b>≠</b>
              <article><span>TRABAJO ENAJENADO</span><strong>forma histórica problemática</strong><p>El producto y la actividad se enfrentan al trabajador como algo extraño.</p></article>
            </div>
            <div className="ctsep10-thesis">
              <span>CLAVE</span>
              <strong>La crítica de Marx no consiste en decir simplemente “trabajar es malo”.</strong>
            </div>
          </section>

          <section id="hegel">
            <Heading n="03" eyebrow="Dialectica">Marx conserva la dialéctica, pero cambia su centro</Heading>
            <div className="ctsep10-two">
              <article>
                <span>HEGEL</span>
                <h3>dialéctica idealista</h3>
                <p>El movimiento se interpreta desde concepto, pensamiento y espíritu.</p>
              </article>
              <article className="active">
                <span>MARX</span>
                <h3>dialéctica materialista</h3>
                <p>El centro son seres humanos concretos, corporales, productivos y situados históricamente.</p>
              </article>
            </div>
            <div className="ctsep10-note">
              <strong>Somos naturaleza</strong>
              <p>Tenemos corporalidad, hambre, necesidades y dependemos de un intercambio permanente con el entorno.</p>
            </div>
          </section>

          <section id="materialismo">
            <Heading n="04" eyebrow="Historia materialis">La historia se comprende a través de modos de producción</Heading>
            <div className="ctsep10-tabs">
              {modes.map(([id, title]) => (
                <button type="button" key={id} className={mode[0] === id ? 'active' : ''} onClick={() => setModeId(id)}>
                  {title}
                </button>
              ))}
            </div>
            <article className="ctsep10-focus">
              <span>MODO DE PRODUCCIÓN</span>
              <h3>{mode[1]}</h3>
              <p>{mode[2]}</p>
            </article>
            <div className="ctsep10-master centered">
              <span>contradicciones internas</span><b>→</b>
              <span>transformación histórica</span><b>→</b>
              <strong>nuevo modo de producción</strong>
            </div>
          </section>

          <section id="produccion">
            <Heading n="05" eyebrow="Productio">Producir es reproducir materialmente la vida</Heading>
            <div className="ctsep10-three">
              <article><span>MEDIOS DE SUBSISTENCIA</span><strong>alimento · vivienda · vestido</strong></article>
              <article><span>RELACIONES DE PRODUCCIÓN</span><strong>quién produce · bajo qué condiciones</strong></article>
              <article><span>DIVISIÓN DEL TRABAJO</span><strong>organización social de funciones</strong></article>
            </div>
            <div className="ctsep10-two">
              <article><span>BASE</span><h3>relaciones de producción</h3><p>No es un compartimento aislado llamado “economía”.</p></article>
              <article><span>SUPERESTRUCTURA</span><h3>Estado · política · religión · cultura</h3><p>Se articula históricamente con la base social.</p></article>
            </div>
          </section>

          <section id="praxis">
            <Heading n="06" eyebrow="Praxis">Teoría y práctica transformadora</Heading>
            <div className="ctsep10-master centered">
              <span>teoría</span><b>+</b>
              <span>acción colectiva</span><b>→</b>
              <strong>praxis</strong>
            </div>
            <p className="ctsep10-prose">
              Marx no aparece sólo como teórico: la clase subraya su relación con
              organizaciones obreras, luchas políticas, periodismo y movimientos
              revolucionarios. Comprender el capitalismo debía servir también para transformarlo.
            </p>
          </section>

          <section id="ideologia">
            <Heading n="07" eyebrow="Ideologia">El sentido común también está socialmente formado</Heading>
            <div className="ctsep10-two">
              <article><span>IDEOLOGÍA</span><h3>naturaliza relaciones históricas</h3><p>Lo contingente puede aparecer como evidente, necesario o inevitable.</p></article>
              <article className="active"><span>CRÍTICA</span><h3>pregunta por las condiciones sociales</h3><p>¿Desde qué posición se formula un discurso y qué relaciones de poder atraviesa?</p></article>
            </div>
            <div className="ctsep10-note"><strong>Estado y clase</strong><p>La exposición presenta al Estado, desde Marx, como ligado estructuralmente a relaciones e intereses de clase, aunque distingue diferentes formas de Estado capitalista.</p></div>
          </section>

          <section id="objetivacion">
            <Heading n="08" eyebrow="Objectivatio">Objetivarse es exteriorizar capacidades humanas</Heading>
            <div className="ctsep10-tabs">
              <button type="button" className={view === 'objectification' ? 'active' : ''} onClick={() => setView('objectification')}>Objetivación</button>
              <button type="button" className={view === 'alienation' ? 'active' : ''} onClick={() => setView('alienation')}>Enajenación</button>
            </div>
            <article className="ctsep10-focus">
              <span>{view === 'objectification' ? 'OBJETIVACIÓN' : 'ENAJENACIÓN'}</span>
              <h3>{view === 'objectification' ? 'Algo humano queda plasmado en lo producido.' : 'Lo objetivado deja de pertenecernos y se enfrenta como algo extraño.'}</h3>
              <p>{view === 'objectification' ? 'Una silla, un libro, una herramienta o un texto contienen actividad humana exteriorizada.' : 'El problema no es producir objetos, sino la forma histórica en que la objetivación queda separada de quien produce.'}</p>
            </article>
          </section>

          <section id="metabolismo">
            <Heading n="09" eyebrow="Metabolismus">El trabajo es una relación metabólica con la naturaleza</Heading>
            <div className="ctsep10-metabolic">
              <article><span>SER HUMANO</span><strong>transforma</strong></article>
              <b>⇄</b>
              <article><span>NATURALEZA</span><strong>es transformada</strong></article>
            </div>
            <div className="ctsep10-thesis">
              <span>DOBLE TRANSFORMACIÓN</span>
              <strong>Al transformar la naturaleza, el ser humano también se transforma a sí mismo.</strong>
            </div>
            <div className="ctsep10-three">
              <article><span>CAPACIDADES</span><strong>conocimiento · técnica</strong></article>
              <article><span>MUNDO SOCIAL</span><strong>instituciones · cultura</strong></article>
              <article><span>REPRODUCCIÓN</span><strong>condiciones de continuidad social</strong></article>
            </div>
          </section>

          <section id="enajenacion">
            <Heading n="10" eyebrow="Entfremdung">La enajenación no es meramente psicológica</Heading>
            <div className="ctsep10-warning">
              <span>NO ES SÓLO “SENTIRSE AJENO”</span>
              <strong>Su origen está en una determinada organización histórica del proceso de trabajo.</strong>
            </div>
            <div className="ctsep10-master centered">
              <span>actividad humana</span><b>→</b>
              <span>producto</span><b>→</b>
              <span>separación</span><b>→</b>
              <strong>trabajo enajenado</strong>
            </div>
          </section>

          <section id="retorno">
            <Heading n="11" eyebrow="Circuitus interruptus">El problema aparece cuando lo producido no vuelve a quienes producen</Heading>
            <div className="ctsep10-return">
              <div className="good">
                <span>PROCESO HUMANO</span>
                <strong>ser humano → objetivación → mundo producido → ser humano</strong>
              </div>
              <div className="broken">
                <span>PROBLEMA CAPITALISTA</span>
                <strong>ser humano → objetivación → mundo producido ↛ productor</strong>
              </div>
            </div>
            <div className="ctsep10-thesis">
              <span>PREGUNTA ABIERTA</span>
              <strong>
                Si la humanidad produce un mundo social inmensamente rico, ¿por qué
                esa riqueza no regresa universalmente a quienes participan de su producción?
              </strong>
            </div>
          </section>

          <section id="tarea">
            <Heading n="12" eyebrow="Ad proximam lectionem">Continuar el apartado sobre trabajo enajenado</Heading>
            <div className="ctsep10-task">
              <div>
                <span>LECTURA</span>
                <h3>Marx · Manuscritos económico-filosóficos de 1844</h3>
                <p>Continuar el primer manuscrito, particularmente la sección sobre trabajo enajenado.</p>
              </div>
              <aside>
                <span>EXTENSIÓN INDICADA</span>
                <strong>aprox. 15 páginas</strong>
                <p>No se indicó reporte ni entrega escrita; la finalidad es continuar la discusión en clase.</p>
              </aside>
            </div>
          </section>
        </article>
      </div>

      <footer className="ctsep10-footer">
        <Link to="/semestre/5/teoria-critica">← Volver a Teoría Crítica</Link>
        <span>Marx · Arbeit · Entfremdung</span>
        <span>X · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
