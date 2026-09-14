import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './MethodsClass07Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'secuencia', 'Campo → área → tema → objeto'],
  ['02', 'ramas', 'Ramas y conceptos clave'],
  ['03', 'delimitacion', 'Delimitar es descartar'],
  ['04', 'tension', 'La tensión conceptual'],
  ['05', 'hobbes', 'Hobbes ↔ Rousseau'],
  ['06', 'capas', 'Capas del problema'],
  ['07', 'autonomia', 'Libertad, razón y autonomía'],
  ['08', 'objeto', 'Objeto de estudio delimitado'],
  ['09', 'estado', 'Estado del arte como matriz'],
  ['10', 'sigue', 'Qué sigue en el curso'],
]

const branches = [
  ['politica', 'Filosofía política', 'poder · Estado · instituciones · leyes',
    'Permite preguntar cómo una libertad originaria se relaciona con una estructura política que regula y obliga.'],
  ['etica', 'Ética', 'autonomía · virtud · razón · acción',
    'Introduce la diferencia entre actuar por impulso y actuar por razones, y permite examinar la libertad como problema moral.'],
  ['antropologia', 'Antropología filosófica', 'naturaleza humana · estado de naturaleza',
    'Puede ser relevante, pero el ejemplo de la clase la descarta cuando el interés central no es reconstruir una antropología del salvaje.'],
  ['historia', 'Historia', 'antecedentes · secuencias · transformaciones',
    'También puede descartarse si la investigación no busca reconstruir un proceso histórico, sino analizar una tensión conceptual.'],
]

const layers = [
  ['01', 'Política + ética', '¿Cómo cambia la libertad al entrar en una estructura política?'],
  ['02', 'Jurídica', '¿Qué libertad reconoce o protege una ley y bajo qué procedimientos?'],
  ['03', 'Ontológica / natural', '¿La libertad depende de la norma positiva o pertenece originariamente al individuo?'],
]

const stateArt = [
  ['Autor / texto', '¿Quién trabaja ya el objeto?'],
  ['Tesis', '¿Qué sostiene?'],
  ['Relación', '¿Coincide, contradice o complementa?'],
  ['Fortaleza', '¿Qué ayuda a sostener mi posición?'],
  ['Debilidad', '¿Qué punto exige mayor justificación?'],
  ['Apertura', '¿Qué problema queda todavía sin resolver?'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ number, eyebrow, children }) {
  return (
    <div className="methods-class-heading methods07-heading">
      <span>{number}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function MethodsClass07Sep() {
  const [branchId, setBranchId] = useState('politica')
  const [layerIndex, setLayerIndex] = useState(0)
  const [thinker, setThinker] = useState('rousseau')

  const branch = useMemo(
    () => branches.find(([id]) => id === branchId) || branches[0],
    [branchId],
  )

  return (
    <main className="methods-class-page methods07-page">
      <nav className="methods-class-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <Link to="/" className="methods-class-brand">Φ · Philosophia</Link>
        <span>VII · IX · MMXXVI</span>
      </nav>

      <header className="methods-class-header methods07-header">
        <div className="methods-header-rules" aria-hidden="true" />
        <div className="methods07-ghost" aria-hidden="true">DELIMITATIO</div>
        <div className="methods-header-symbol" aria-hidden="true">§</div>

        <div className="methods07-hero-inner">
          <div>
            <p className="methods-class-kicker">FI104 · Sexta sesión · 7 de septiembre</p>
            <h1>
              Del concepto al
              <em>problema de investigación</em>
            </h1>
            <p className="methods-class-subtitle">
              La clase continúa la construcción del objeto de estudio: elegir
              ramas, descartar enfoques, encontrar una tensión conceptual y
              transformar un tema amplio en relaciones filosóficas precisas.
            </p>
          </div>

          <aside className="methods07-thesis">
            <span>IDEA CENTRAL</span>
            <strong>El problema aparece cuando los conceptos dejan de estar aislados.</strong>
            <p>
              Libertad, Estado, ley, autonomía y ciudadanía se vuelven
              investigables cuando se precisa qué relación o tensión se quiere analizar.
            </p>
          </aside>
        </div>

        <div className="methods-header-ornament">☙ ───── § ───── ❧</div>
      </header>

      <div className="methods-class-layout">
        <aside className="methods-index">
          <p>Index inquisitionis</p>
          <nav>
            {sections.map(([number, id, label]) => (
              <button key={id} type="button" onClick={() => goTo(id)}>
                <span>{number}</span>{label}
              </button>
            ))}
          </nav>
        </aside>

        <article className="methods-article">
          <section id="mapa" className="methods-section">
            <Heading number="00" eyebrow="Argumentum">
              Del campo disciplinar a una tensión que pueda investigarse
            </Heading>

            <div className="methods07-flow">
              <span>campo</span><b>→</b>
              <span>área</span><b>→</b>
              <span>tema general</span><b>→</b>
              <span>tema específico</span><b>→</b>
              <span>tensión conceptual</span><b>→</b>
              <strong>objeto de estudio</strong>
            </div>

            <div className="methods07-rule">
              <span>PREGUNTA QUE DELIMITA</span>
              <strong>¿Qué es exactamente lo que quiero estudiar?</strong>
              <p>
                Volver a esta pregunta permite decidir qué autores, conceptos,
                disciplinas y fuentes son necesarios y cuáles deben quedar fuera.
              </p>
            </div>
          </section>

          <section id="secuencia" className="methods-section">
            <Heading number="01" eyebrow="Gradus">
              Campo disciplinar → área temática → tema general → tema específico
            </Heading>
            <p className="methods07-prose">
              El área temática indica el enfoque desde el cual se dirigirá el
              trabajo. Un mismo concepto puede entrar en educación, teoría social,
              derechos animales, filosofía política, ética u otras áreas; la elección
              cambia lo que cuenta como pregunta relevante.
            </p>

            <div className="methods07-stages">
              {[
                ['01', 'Campo disciplinar', 'filosofía'],
                ['02', 'Área temática', 'filosofía política / ética'],
                ['03', 'Tema general', 'libertad'],
                ['04', 'Tema específico', 'libertad natural y libertad civil'],
                ['05', 'Objeto', 'relación entre libertad, ciudadanía y Estado'],
              ].map(([n, title, text]) => (
                <article key={n}><span>{n}</span><strong>{title}</strong><p>{text}</p></article>
              ))}
            </div>
          </section>

          <section id="ramas" className="methods-section">
            <Heading number="02" eyebrow="Disciplinae">
              Cada rama aporta conceptos distintos al mismo problema
            </Heading>
            <div className="methods07-tabs">
              {branches.map(([id, title, concepts]) => (
                <button
                  type="button"
                  key={id}
                  className={branch[0] === id ? 'active' : ''}
                  onClick={() => setBranchId(id)}
                >
                  <span>{title}</span><strong>{concepts}</strong>
                </button>
              ))}
            </div>

            <article className="methods07-focus">
              <span>{branch[1]}</span>
              <h3>{branch[2]}</h3>
              <p>{branch[3]}</p>
            </article>

            <div className="methods07-concepts">
              {['libertad', 'justicia', 'autonomía', 'poder', 'Estado'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section id="delimitacion" className="methods-section">
            <Heading number="03" eyebrow="Exclusio">
              Delimitar también significa descartar caminos posibles
            </Heading>
            <p className="methods07-prose">
              La clase descarta antropología e historia para el ejemplo de
              Rousseau no porque sean irrelevantes en general, sino porque el
              proyecto quiere concentrarse en una tensión política y ética.
            </p>

            <div className="methods07-binary">
              <article className="keep">
                <span>SE CONSERVA</span>
                <strong>filosofía política + ética</strong>
                <p>porque ahí se encuentra la relación que queremos estudiar.</p>
              </article>
              <b>↔</b>
              <article>
                <span>SE DESCARTA</span>
                <strong>historia + antropología</strong>
                <p>porque no constituyen el centro del problema elegido.</p>
              </article>
            </div>
          </section>

          <section id="tension" className="methods-section">
            <Heading number="04" eyebrow="Problema">
              Una tensión conceptual empieza a construir la problemática
            </Heading>
            <div className="methods07-question">
              <span>FORMULACIÓN INICIAL</span>
              <strong>¿Cómo un individuo libre aceptaría someterse al poder del Estado?</strong>
            </div>
            <p className="methods07-prose">
              La tensión no tiene que encontrarse literalmente redactada en una
              sola frase del texto. Puede construirse comparando posturas,
              conceptos y tradiciones filosóficas.
            </p>
          </section>

          <section id="hobbes" className="methods-section">
            <Heading number="05" eyebrow="Contrapositio">
              Hobbes y Rousseau permiten hacer visible la tensión
            </Heading>

            <div className="methods07-toggle">
              <button
                type="button"
                className={thinker === 'hobbes' ? 'active' : ''}
                onClick={() => setThinker('hobbes')}
              >Hobbes</button>
              <button
                type="button"
                className={thinker === 'rousseau' ? 'active' : ''}
                onClick={() => setThinker('rousseau')}
              >Rousseau</button>
            </div>

            <div className="methods07-thinker">
              {thinker === 'hobbes' ? (
                <>
                  <span>POLÍTICA REALISTA</span>
                  <h3>Los individuos pueden entrar en conflicto y necesitan regulación.</h3>
                  <p>
                    El Estado aparece como estructura necesaria de orden,
                    coerción y regulación porque no basta confiar en que los
                    individuos renunciarán espontáneamente a sus intereses.
                  </p>
                </>
              ) : (
                <>
                  <span>TRANSFORMACIÓN SOCIAL</span>
                  <h3>El egoísmo no tiene por qué ser la naturaleza originaria.</h3>
                  <p>
                    Rousseau permite preguntar cómo la sociedad transforma al
                    individuo y cómo una libertad natural puede convertirse en
                    libertad civil dentro de una comunidad política.
                  </p>
                </>
              )}
            </div>
          </section>

          <section id="capas" className="methods-section">
            <Heading number="06" eyebrow="Strata">
              Cada capa disciplinar modifica el problema
            </Heading>
            <div className="methods07-layer-grid">
              <div>
                {layers.map(([n, title, q], index) => (
                  <button
                    type="button"
                    key={n}
                    className={layerIndex === index ? 'active' : ''}
                    onClick={() => setLayerIndex(index)}
                  >
                    <span>{n}</span><strong>{title}</strong>
                  </button>
                ))}
              </div>
              <article>
                <span>{layers[layerIndex][1]}</span>
                <h3>{layers[layerIndex][2]}</h3>
                <p>
                  Agregar una capa no sólo añade bibliografía: introduce
                  conceptos, criterios y preguntas nuevas.
                </p>
              </article>
            </div>
          </section>

          <section id="autonomia" className="methods-section">
            <Heading number="07" eyebrow="Libertas · ratio">
              Libertad ética no significa simplemente hacer lo que se desea
            </Heading>
            <p className="methods07-prose">
              Desde el enfoque ético, una acción moral exige razones. La libertad
              se conecta así con autonomía, uso de la razón y construcción de
              normas que puedan pretender cierta universalidad.
            </p>

            <div className="methods07-flow centered">
              <span>impulso</span><b>≠</b>
              <strong>libertad moral</strong><b>→</b>
              <span>razones</span><b>→</b>
              <span>autonomía</span><b>→</b>
              <span>ley</span>
            </div>
          </section>

          <section id="objeto" className="methods-section">
            <Heading number="08" eyebrow="Obiectum studii">
              El tema se convierte en una proposición específica
            </Heading>
            <div className="methods07-object">
              <span>EJEMPLO CONSTRUIDO EN CLASE</span>
              <h3>
                La copertenencia de la justicia política y la autonomía humana:
                la transformación de la libertad natural en libertad civil
                dentro del modelo de ciudadanía de Rousseau.
              </h3>
            </div>

            <div className="methods07-variables">
              {['libertad', 'ley', 'pueblo', 'autonomía', 'ciudadanía', 'Estado'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="methods07-rule">
              <span>NO ES</span><strong>“Rousseau” ni “la libertad en Rousseau”.</strong>
              <p>Ahora hay conceptos determinados y una relación precisa entre ellos.</p>
            </div>
          </section>

          <section id="estado" className="methods-section">
            <Heading number="09" eyebrow="Status quaestionis">
              El estado del arte no es sólo una lista de “quién dijo qué”
            </Heading>
            <p className="methods07-prose">
              Sirve para reconstruir posiciones, conflictos, apoyos, puntos
              débiles y problemas abiertos dentro del campo. La conversación
              final propone incluso organizarlo como una matriz.
            </p>

            <div className="methods07-matrix">
              {stateArt.map(([title, text]) => (
                <article key={title}><strong>{title}</strong><p>{text}</p></article>
              ))}
            </div>

            <div className="methods07-question">
              <span>MATRIZ POSIBLE</span>
              <strong>
                autor → tesis → coincidencias → contradicciones → fortalezas →
                debilidades → problema abierto
              </strong>
            </div>
          </section>

          <section id="sigue" className="methods-section">
            <Heading number="10" eyebrow="Proxima">
              Del objeto a la pregunta y después al estado del arte
            </Heading>
            <div className="methods07-stages compact">
              <article><span>01</span><strong>Objeto de estudio</strong><p>qué exactamente estudiar</p></article>
              <article><span>02</span><strong>Pregunta</strong><p>qué relación queremos explicar</p></article>
              <article><span>03</span><strong>Estado del arte</strong><p>qué conversación ya existe</p></article>
            </div>
            <div className="methods07-rule">
              <span>ACLARACIÓN</span>
              <strong>Esto todavía es una fase conceptual previa a la metodología en sentido estricto.</strong>
            </div>
          </section>
        </article>
      </div>

      <footer className="methods-footer">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <span>☙ &nbsp; § &nbsp; ❧</span>
        <span>VII · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
