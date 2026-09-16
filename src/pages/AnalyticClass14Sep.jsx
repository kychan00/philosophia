import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './AnaliticaClase7Septiembre.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass14Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'definicion', '¿Qué hace analítica a la filosofía?'],
  ['02', 'frege', 'Frege · pensamiento objetivo'],
  ['03', 'tractatus', 'Primer Wittgenstein'],
  ['04', 'mediacion', 'Sujeto · lenguaje · mundo'],
  ['05', 'isomorfismo', 'Isomorfismo lógico'],
  ['06', 'tercer-reino', 'Tercer reino'],
  ['07', 'simbolismo', 'Simbolismo y representación'],
  ['08', 'limites', 'Límites del lenguaje'],
  ['09', 'decir-mostrar', 'Decir · mostrar'],
  ['10', 'filosofia', 'Filosofía como clarificación'],
  ['11', 'segundo', 'Segundo Wittgenstein'],
  ['12', 'tradicion', 'Una tradición heterogénea'],
  ['13', 'cierre', 'Cierre y continuidad'],
]

const positions = [
  {
    id: 'frege',
    label: 'FREGE',
    title: 'Pensamiento objetivo',
    body: 'El pensamiento no depende de una oración concreta. El lenguaje expresa algo cuya objetividad no queda reducida a la expresión lingüística.',
  },
  {
    id: 'early',
    label: 'PRIMER WITTGENSTEIN',
    title: 'Proposición y representación',
    body: 'El lenguaje significativo representa hechos porque lenguaje y mundo comparten una forma lógica.',
  },
  {
    id: 'late',
    label: 'SEGUNDO WITTGENSTEIN',
    title: 'Significado como uso',
    body: 'Se abandona la búsqueda de una única estructura lógica universal y el lenguaje se estudia dentro de prácticas y formas de vida.',
  },
]

const limitViews = [
  {
    id: 'say',
    label: 'DECIR',
    title: 'Proposición significativa',
    body: 'Aquello que puede formularse como representación de un posible estado de cosas del mundo.',
  },
  {
    id: 'show',
    label: 'MOSTRAR',
    title: 'Lo que no cabe en la proposición descriptiva',
    body: 'La lectura de la clase reserva aquí una tensión decisiva: algo puede hacerse patente sin poder decirse propiamente mediante proposiciones descriptivas.',
  },
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ac9-heading ac14-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function AnalyticClass14Sep() {
  const [positionId, setPositionId] = useState('early')
  const [limitId, setLimitId] = useState('say')
  const [wittView, setWittView] = useState('early')

  const position = useMemo(
    () => positions.find((item) => item.id === positionId) || positions[1],
    [positionId],
  )

  const limitView = useMemo(
    () => limitViews.find((item) => item.id === limitId) || limitViews[0],
    [limitId],
  )

  return (
    <main className="ac7-page ac9-page ac14-page">
      <nav className="ac9-topbar">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="ac9-brand">Φ · Philosophia</Link>
        <span>XIV · IX · MMXXVI</span>
      </nav>

      <header className="ac9-hero ac14-hero">
        <div className="ac9-grid" aria-hidden="true" />
        <div className="ac9-ghost ac14-ghost" aria-hidden="true">Abbildung</div>

        <div className="ac9-hero-inner">
          <div>
            <p className="ac9-kicker">FI264 · Octava clase · 14 de septiembre de 2026</p>
            <h1>
              Frege, Russell y Wittgenstein:
              <em>pensamiento, lenguaje y representación</em>
            </h1>
            <p className="ac9-lead">
              La sesión continúa la discusión sobre qué define a la filosofía
              analítica. Frege, Russell y Wittgenstein muestran que una misma
              tradición puede contener concepciones muy distintas del
              pensamiento, el lenguaje y la relación con el mundo.
            </p>

            <div className="ac9-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                Si Frege y Wittgenstein son ambos “analíticos”, ¿qué puede
                definir a la filosofía analítica sin borrar sus diferencias?
              </strong>
            </div>
          </div>

          <aside className="ac9-hero-schema ac14-hero-schema">
            <span>TRES POSICIONES</span>
            <div>
              <small>FREGE</small>
              <strong>pensamiento objetivo</strong>
              <p>El lenguaje expresa un contenido cuya objetividad no depende de él.</p>
            </div>
            <b>↓</b>
            <div className="active">
              <small>WITTGENSTEIN I</small>
              <strong>lenguaje ↔ mundo</strong>
              <p>La proposición representa gracias a una forma lógica compartida.</p>
            </div>
            <b>↓</b>
            <div>
              <small>WITTGENSTEIN II</small>
              <strong>significado = uso</strong>
              <p>Prácticas, juegos de lenguaje y formas de vida.</p>
            </div>
          </aside>
        </div>
      </header>

      <div className="ac9-layout">
        <aside className="ac9-index">
          <p>Index analyticorum</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ac9-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula argumenti">
              De la objetividad del pensamiento a los usos del lenguaje
            </Heading>

            <div className="ac14-flow">
              <span>Frege</span><b>→</b>
              <span>pensamiento objetivo</span><b>→</b>
              <span>Wittgenstein I</span><b>→</b>
              <span>representación</span><b>→</b>
              <span>límites</span><b>→</b>
              <span>Wittgenstein II</span><b>→</b>
              <strong>uso</strong>
            </div>

            <div className="ac9-thesis">
              <span>IDEA CENTRAL</span>
              <strong>
                La dificultad para definir “filosofía analítica” aumenta cuando
                los propios autores canónicos de la tradición discrepan sobre
                qué es el pensamiento, qué papel cumple el lenguaje y cómo se
                relaciona con la realidad.
              </strong>
            </div>
          </section>

          <section id="definicion">
            <Heading n="01" eyebrow="Demarcatio">
              “Filosofía del pensamiento” y “filosofía del lenguaje” son fórmulas demasiado simples
            </Heading>

            <p className="ac14-prose">
              La clase retoma la crítica a definiciones demasiado uniformes de
              filosofía analítica. Si los autores incluidos en la tradición no
              comparten una doctrina única sobre pensamiento y lenguaje, una
              definición basada en un solo rasgo corre el riesgo de borrar las
              diferencias internas.
            </p>

            <div className="ac14-tabs">
              {positions.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={position.id === item.id ? 'active' : ''}
                  onClick={() => setPositionId(item.id)}
                >
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <article className="ac14-focus">
              <span>{position.label}</span>
              <h3>{position.title}</h3>
              <p>{position.body}</p>
            </article>
          </section>

          <section id="frege">
            <Heading n="02" eyebrow="Frege · tertium regnum">
              El pensamiento no se reduce a una oración ni a un estado mental privado
            </Heading>

            <div className="ac14-three">
              <article>
                <span>NO FÍSICO</span>
                <strong>no es objeto material</strong>
                <p>El pensamiento no pertenece al mundo físico.</p>
              </article>
              <article>
                <span>NO PRIVADO</span>
                <strong>no es mero estado psicológico</strong>
                <p>Puede ser compartido y evaluado objetivamente.</p>
              </article>
              <article className="active">
                <span>TERCER REINO</span>
                <strong>contenido objetivo</strong>
                <p>La clase presenta aquí la conocida solución fregeana de un ámbito objetivo no físico.</p>
              </article>
            </div>

            <div className="ac14-note">
              <span>TELEPATÍA COMO EXPERIMENTO MENTAL</span>
              <p>
                Si pudiéramos transmitir pensamientos directamente, el lenguaje
                parecería secundario. La analogía sirve para explicar por qué,
                en Frege, el pensamiento puede tener prioridad respecto de su expresión.
              </p>
            </div>
          </section>

          <section id="tractatus">
            <Heading n="03" eyebrow="Tractatus">
              El primer Wittgenstein desplaza el problema hacia la proposición significativa
            </Heading>

            <div className="ac14-binary">
              <article>
                <span>FREGE</span>
                <strong>pensamiento → lenguaje</strong>
                <p>El lenguaje expresa algo que posee objetividad independiente.</p>
              </article>
              <b>↔</b>
              <article className="active">
                <span>WITTGENSTEIN I</span>
                <strong>lenguaje ↔ mundo</strong>
                <p>La proposición significativa representa un posible estado de cosas.</p>
              </article>
            </div>

            <div className="ac9-thesis">
              <span>PREGUNTA</span>
              <strong>
                ¿Cómo puede una estructura lingüística representar una realidad
                que no es ella misma lenguaje?
              </strong>
            </div>
          </section>

          <section id="mediacion">
            <Heading n="04" eyebrow="Subjectum · lingua · mundus">
              El giro lingüístico introduce una mediación entre sujeto y mundo
            </Heading>

            <div className="ac14-world">
              <article>
                <span>MODELO CLÁSICO</span>
                <strong>sujeto ↔ mundo</strong>
                <p>El pensamiento o representación mental media la relación cognitiva.</p>
              </article>
              <article className="active">
                <span>GIRO LINGÜÍSTICO</span>
                <strong>sujeto ↔ lenguaje ↔ mundo</strong>
                <p>El lenguaje se convierte en vía de acceso filosófico al pensamiento y a la representación.</p>
              </article>
            </div>
          </section>

          <section id="isomorfismo">
            <Heading n="05" eyebrow="Isomorphismus">
              Lenguaje y mundo pueden corresponder porque comparten forma lógica
            </Heading>

            <div className="ac14-isomorphism">
              <div>
                <span>LENGUAJE</span>
                <strong>estructura lógica</strong>
              </div>
              <b>≅</b>
              <div>
                <span>MUNDO</span>
                <strong>estructura de hechos</strong>
              </div>
            </div>

            <p className="ac14-prose">
              La proposición no es una copia material del hecho. Representa
              porque comparte con aquello representado una estructura que hace
              posible la correspondencia.
            </p>

            <div className="ac14-note">
              <span>ANALOGÍA HISTÓRICA</span>
              <p>
                El profesor compara esta solución con un motivo aristotélico:
                conocer sería posible porque aquello que conoce y aquello conocido
                pueden corresponder en forma o estructura.
              </p>
            </div>
          </section>

          <section id="tercer-reino">
            <Heading n="06" eyebrow="Duo mundi · tertium regnum">
              Wittgenstein evita introducir un tercer mundo ideal
            </Heading>

            <div className="ac14-three">
              <article>
                <span>MUNDO MATERIAL</span>
                <strong>hechos y objetos</strong>
              </article>
              <article>
                <span>MUNDO MENTAL</span>
                <strong>representaciones privadas</strong>
              </article>
              <article className="active">
                <span>SOLUCIÓN PLATÓNICA</span>
                <strong>tercer ámbito ideal</strong>
                <p>Frege y cierto Russell temprano sirven de ejemplo en la clase.</p>
              </article>
            </div>

            <div className="ac14-arrowdown">↓</div>

            <div className="ac14-note">
              <span>WITTGENSTEIN I</span>
              <p>
                En lugar de un tercer reino, la explicación se concentra en la
                relación entre lenguaje y mundo mediante forma lógica compartida.
              </p>
            </div>
          </section>

          <section id="simbolismo">
            <Heading n="07" eyebrow="Symbolismus">
              Representar es volver a presentar algo simbólicamente
            </Heading>

            <div className="ac14-representation">
              <span>hecho posible</span>
              <b>← representación →</b>
              <strong>proposición</strong>
            </div>

            <p className="ac14-prose">
              Para el primer Wittgenstein, el lenguaje funciona como sistema de
              símbolos. Comprender su estructura permite preguntar por las
              condiciones bajo las cuales una proposición puede representar el mundo.
            </p>

            <div className="ac9-thesis">
              <span>METÁFORA DE LA CLASE</span>
              <strong>El lenguaje funciona como un espejo lógico del mundo.</strong>
            </div>
          </section>

          <section id="limites">
            <Heading n="08" eyebrow="Fines linguae">
              Determinar los límites del simbolismo es determinar qué puede decirse con sentido
            </Heading>

            <div className="ac14-flow">
              <span>proposición significativa</span><b>→</b>
              <span>representación</span><b>→</b>
              <span>estado de cosas posible</span><b>→</b>
              <strong>mundo</strong>
            </div>

            <div className="ac14-binary">
              <article className="active">
                <span>DENTRO DEL LÍMITE</span>
                <strong>descripción significativa</strong>
                <p>La proposición puede representar un posible estado de cosas.</p>
              </article>
              <b>≠</b>
              <article>
                <span>FUERA DEL LÍMITE</span>
                <strong>sinsentido técnico</strong>
                <p>La expresión rebasa las condiciones de una proposición descriptiva.</p>
              </article>
            </div>
          </section>

          <section id="decir-mostrar">
            <Heading n="09" eyebrow="Dicere · ostendere">
              “Decir” y “mostrar” no cumplen la misma función
            </Heading>

            <div className="ac14-tabs compact">
              {limitViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={limitView.id === item.id ? 'active' : ''}
                  onClick={() => setLimitId(item.id)}
                >
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <article className="ac14-focus">
              <span>{limitView.label}</span>
              <h3>{limitView.title}</h3>
              <p>{limitView.body}</p>
            </article>

            <div className="ac14-four">
              {['ética', 'estética', 'metafísica', 'religión'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="ac14-note">
              <span>TENSIÓN DEL TRACTATUS</span>
              <p>
                Si sólo pueden decirse significativamente hechos del mundo,
                surge la dificultad de explicar cómo hablar de aquello que queda
                precisamente más allá de ese límite.
              </p>
            </div>
          </section>

          <section id="filosofia">
            <Heading n="10" eyebrow="Philosophia ut activitas">
              La filosofía no agrega hechos: clarifica
            </Heading>

            <div className="ac14-binary">
              <article>
                <span>CIENCIA</span>
                <strong>proposiciones sobre hechos</strong>
                <p>Describe y explica estados de cosas del mundo.</p>
              </article>
              <b>≠</b>
              <article className="active">
                <span>FILOSOFÍA</span>
                <strong>actividad de clarificación</strong>
                <p>Analiza el lenguaje y disuelve confusiones producidas por su uso.</p>
              </article>
            </div>

            <div className="ac9-thesis">
              <span>CONSECUENCIA</span>
              <strong>
                Muchos problemas filosóficos aparecerían como resultados de
                usos incorrectos o confusos del lenguaje.
              </strong>
            </div>
          </section>

          <section id="segundo">
            <Heading n="11" eyebrow="Wittgenstein posterior">
              Del espejo lógico universal al significado como uso
            </Heading>

            <div className="ac14-switch">
              <button
                type="button"
                className={wittView === 'early' ? 'active' : ''}
                onClick={() => setWittView('early')}
              >
                Primer Wittgenstein
              </button>
              <button
                type="button"
                className={wittView === 'late' ? 'active' : ''}
                onClick={() => setWittView('late')}
              >
                Segundo Wittgenstein
              </button>
            </div>

            <article className="ac14-focus">
              {wittView === 'early' ? (
                <>
                  <span>TRACTATUS</span>
                  <h3>Una estructura lógica universal</h3>
                  <p>
                    El significado depende de la capacidad representativa de la
                    proposición y de una forma lógica compartida con el mundo.
                  </p>
                </>
              ) : (
                <>
                  <span>INVESTIGACIONES FILOSÓFICAS</span>
                  <h3>Significado = uso</h3>
                  <p>
                    El lenguaje se comprende dentro de juegos de lenguaje,
                    prácticas, comunidades y formas de vida concretas.
                  </p>
                </>
              )}
            </article>

            <div className="ac14-flow centered">
              <span>estructura universal</span><b>→</b>
              <span>crítica del propio modelo</span><b>→</b>
              <strong>usos y prácticas</strong>
            </div>
          </section>

          <section id="tradicion">
            <Heading n="12" eyebrow="Traditio heterogenea">
              Pertenecer a una tradición no implica compartir una doctrina única
            </Heading>

            <div className="ac14-three">
              <article>
                <span>FREGE</span>
                <strong>platonismo lógico</strong>
                <p>Pensamientos objetivos y lenguaje secundario.</p>
              </article>
              <article>
                <span>WITTGENSTEIN I</span>
                <strong>representación lógica</strong>
                <p>Lenguaje como estructura que figura el mundo.</p>
              </article>
              <article>
                <span>WITTGENSTEIN II</span>
                <strong>lenguaje ordinario</strong>
                <p>Uso, prácticas y formas de vida.</p>
              </article>
            </div>

            <div className="ac9-thesis">
              <span>OBJECIÓN A LAS DEFINICIONES SIMPLES</span>
              <strong>
                No puede “cortarse con la misma tijera” a todos los filósofos
                analíticos si sus compromisos filosóficos son profundamente distintos.
              </strong>
            </div>
          </section>

          <section id="cierre">
            <Heading n="13" eyebrow="Continuatio">
              La clase termina abriendo un nuevo problema: filosofía y psicología
            </Heading>

            <p className="ac14-prose">
              Hacia el final comienza a aparecer la cuestión de si una
              investigación sobre el pensar puede agotarse en un análisis
              abstracto del lenguaje. La grabación corta justo cuando empieza a
              desarrollarse la referencia a filosofía de la psicología, así que
              la sesión se conserva abierta en ese punto.
            </p>

            <div className="ac14-notask">
              <span>TAREA</span>
              <strong>No se registró una tarea nueva explícitamente asignada.</strong>
              <p>
                La clase continúa la lectura desde la página 98 del texto que ya
                venían trabajando, pero no deja una instrucción nueva de lectura
                ni una entrega específica para la siguiente sesión.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="ac14-footer">
        <Link to="/semestre/5/filosofia-analitica">← Volver a Filosofía Analítica</Link>
        <span>Frege · Wittgenstein · Sprache</span>
        <span>XIV · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
