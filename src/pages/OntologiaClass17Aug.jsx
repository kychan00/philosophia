import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'

const sections = [
  ['00', 'panorama', 'Panorama'],
  ['01', 'logica', 'Lógica y ontología'],
  ['02', 'ser', 'Los sentidos del ser'],
  ['03', 'modernidad', 'Ciencia y modernidad'],
  ['04', 'descartes', 'Descartes'],
  ['05', 'spinoza', 'Spinoza'],
  ['06', 'leibniz', 'Leibniz y teleología'],
  ['07', 'mal', 'Mal, libertad y voluntad'],
  ['08', 'programa', 'Programa oficial'],
  ['09', 'evaluacion', 'Evaluación'],
  ['10', 'tarea', 'Tarea'],
]

const atlasSchema = {
  layout: 'flow',
  direction: 'vertical',
  flowGap: 54,
  minHeight: 900,
  fitPadding: 52,
  sizeHint: 'tall',
  nodes: [
    { id: 'principia', label: 'principios', caption: 'identidad · tercero excluido · no contradicción', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'aristotle', label: 'sentidos del ser', caption: 'accidente · cópula · potencia y acto · categorías', shapeRole: 'structure' },
    { id: 'substance', label: 'sustancia', caption: 'categoría primera', shapeRole: 'concept' },
    { id: 'science', label: 'ciencia moderna', caption: 'Copérnico · Kepler · Galileo · Newton', shapeRole: 'structure' },
    { id: 'descartes', label: 'Descartes', caption: 'res cogitans · res extensa · res infinita', shapeRole: 'mediation' },
    { id: 'spinoza', label: 'Spinoza', caption: 'sustancia · Dios · naturaleza', shapeRole: 'mediation' },
    { id: 'leibniz', label: 'Leibniz', caption: 'mónada · forma · finalidad', shapeRole: 'result', tone: 'accent' },
    { id: 'freedom', label: 'libertad y voluntad', caption: 'mal · responsabilidad · finalidad', shapeRole: 'term' },
  ],
  edges: [
    { from: 'principia', to: 'aristotle', label: 'abren la pregunta por', relationKind: 'derives' },
    { from: 'aristotle', to: 'substance', label: 'se articulan alrededor de', relationKind: 'constitutes' },
    { from: 'substance', to: 'science', label: 'cambia de horizonte con', relationKind: 'derives' },
    { from: 'science', to: 'descartes', label: 'prepara la modernidad de', relationKind: 'derives' },
    { from: 'descartes', to: 'spinoza', label: 'abre la respuesta de', relationKind: 'derives' },
    { from: 'spinoza', to: 'leibniz', label: 'conduce al contraste con', relationKind: 'derives' },
    { from: 'leibniz', to: 'freedom', label: 'reabre el problema de', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .28, edgeDuration: .3 },
}

const goToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function OntologiaClass17Aug() {
  const heroImage = `${import.meta.env.BASE_URL}images/ontologia/open/2026-08-17/newton-principia-1687.png`

  return (
    <main className="oa-page oaf-page">
      <div className="oa-backdrop" aria-hidden="true" />

      <div className="oa-brochure oaf-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>XVII · VIII · MMXXVI</span>
        </nav>

        <header className="oa-cover oaf-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · fol. XIII · modernitas</span>

            <h1>
              Del principio de
              <em>no contradicción al ser moderno</em>
            </h1>

            <p className="oa-subtitle">
              principia · ens · substantia · modernitas
            </p>

            <p className="oaf-lead">
              La primera sesión funciona como un mapa intelectual:
              comienza preguntando por la relación entre lógica y realidad,
              recupera los sentidos aristotélicos del ser y abre el
              recorrido moderno a través de Descartes, Spinoza y Leibniz.
            </p>

            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>
                ¿El principio de no contradicción regula únicamente nuestro
                pensar o también pertenece al modo de ser de la realidad?
              </strong>
            </div>

            <div className="oaf-axis" aria-label="Eje conceptual">
              <span>ratio</span><b>→</b>
              <span>ens</span><b>→</b>
              <span>substantia</span><b>→</b>
              <span>modernitas</span>
            </div>
          </div>

          <figure className="oa-cover-object">
            <div className="oa-cover-frame">
              <span className="oa-tape oa-tape-a" aria-hidden="true" />
              <span className="oa-tape oa-tape-b" aria-hidden="true" />
              <img
                src={heroImage}
                alt="Portada de la primera edición de los Principia de Isaac Newton, publicada en 1687"
              />
            </div>

            <figcaption>
              <span>IMAGO XIII · SCIENTIA MODERNA</span>
              <strong>Philosophiæ Naturalis Principia Mathematica</strong>
              <small>Isaac Newton · 1687 · portada de la primera edición.</small>
              <small className="oa-image-rights">Dominio público</small>
              <a
                className="oa-image-source"
                href="https://commons.wikimedia.org/wiki/File:Newton%27s_Principia_title_page.png"
                target="_blank"
                rel="noreferrer"
              >
                fuente de imagen ↗
              </a>
            </figcaption>
          </figure>
        </header>

        <section className="oaf-prologue">
          <div className="oaf-prologue-copy">
            <small>INTRODUCTIO</small>
            <h2>Las preguntas que abren el curso</h2>

            <div className="oaf-questions">
              <p>¿Qué es lo que hay?</p>
              <p>¿Qué es lo que existe?</p>
              <p>¿Cuál es la estructura de la realidad?</p>
            </div>

            <p>
              El curso parte de preguntas ontológicas fundamentales
              y las hace atravesar por la historia de la filosofía:
              ser y pensar, lenguaje y realidad, sustancia y mundo,
              fenómeno y existencia.
            </p>
          </div>

          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Vocabulario de entrada</h2>

            <div>
              <article>
                <span>Latín</span>
                <strong>principium</strong>
                <p>Principio; punto de partida para identidad, tercero excluido y no contradicción.</p>
              </article>
              <article>
                <span>Latín</span>
                <strong>ens</strong>
                <p>Ente; aquello sobre lo que se formula la pregunta ontológica.</p>
              </article>
              <article>
                <span>Latín</span>
                <strong>substantia</strong>
                <p>Sustancia; centro de articulación de los sentidos aristotélicos del ser.</p>
              </article>
              <article>
                <span>Latín</span>
                <strong>modernitas</strong>
                <p>Rótulo editorial para el cambio de horizonte científico y metafísico.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas">
          <div className="oa-wine-title">
            <span>SCHEMA · ATLAS</span>
            <h2>atlas</h2>
          </div>

          <p>
            Este esquema no sustituye la clase. Funciona como mapa de navegación
            del recorrido completo que se desarrolla debajo.
          </p>

          <div className="oa-schema-card">
            <AnimatedConceptSchema schema={atlasSchema} />
          </div>
        </section>

        <div className="oaf-layout">
          <aside className="oaf-index">
            <p>INDEX LECTIONIS</p>

            {sections.map(([number, id, label]) => (
              <button key={id} type="button" onClick={() => goToSection(id)}>
                <span>{number}</span>
                {label}
              </button>
            ))}
          </aside>

          <article className="oaf-article">
            <section id="panorama" className="oaf-section">
              <span className="oaf-number">00</span>
              <p className="oaf-eyebrow">QUAESTIONES</p>
              <h2>Las preguntas que abren el curso</h2>

              <div className="oaf-big-questions">
                <p>¿Qué es lo que hay?</p>
                <p>¿Qué es lo que existe?</p>
                <p>¿Cuál es la estructura de la realidad?</p>
              </div>

              <p>
                El curso parte de preguntas ontológicas fundamentales
                y las hace atravesar por la historia de la filosofía:
                ser y pensar, lenguaje y realidad, sustancia y mundo,
                fenómeno y existencia.
              </p>
            </section>

            <section id="logica" className="oaf-section">
              <span className="oaf-number">01</span>
              <p className="oaf-eyebrow">PRINCIPIA</p>
              <h2>Lógica y ontología</h2>

              <p>
                La sesión comienza con identidad, tercero excluso y
                no contradicción. El punto ontológicamente importante
                es preguntar si estos principios son solamente reglas
                del pensamiento o si expresan también algo de la
                estructura de lo real.
              </p>

              <div className="oaf-callout">
                <span>Problema</span>
                <strong>
                  ¿El principio de no contradicción regula únicamente
                  nuestro pensar o también pertenece al modo de ser de
                  la realidad?
                </strong>
              </div>

              <p>
                Aristóteles aparece como referencia: el principio no se
                demuestra a partir de uno más fundamental, pero su
                negación puede conducir a consecuencias contradictorias.
              </p>
            </section>

            <section id="ser" className="oaf-section">
              <span className="oaf-number">02</span>
              <p className="oaf-eyebrow">ARISTÓTELES</p>
              <h2>Los sentidos del ser</h2>

              <p>
                El ser se dice de diversas maneras. La clase repasa
                ser accidental, ser lógico, potencia y acto, y el ser
                según las categorías.
              </p>

              <div className="oaf-concepts">
                <article><span>I</span><strong>Accidente</strong></article>
                <article><span>II</span><strong>Ser lógico</strong></article>
                <article><span>III</span><strong>Potencia / acto</strong></article>
                <article><span>IV</span><strong>Categorías</strong></article>
              </div>

              <div className="oaf-center">
                Los sentidos del ser se articulan alrededor de la
                <strong> sustancia</strong>.
              </div>
            </section>

            <section id="modernidad" className="oaf-section">
              <span className="oaf-number">03</span>
              <p className="oaf-eyebrow">SCIENTIA NOVA</p>
              <h2>Ciencia moderna y transformación del mundo</h2>

              <p>
                Copérnico, Kepler, Galileo y Newton modifican la imagen
                física heredada. Ese cambio no cancela la ontología:
                obliga a reformular qué existe y cómo se organiza la
                realidad.
              </p>

              <div className="oaf-timeline">
                <div><span>Copérnico</span><small>Heliocentrismo</small></div>
                <b>→</b>
                <div><span>Kepler</span><small>Órbitas</small></div>
                <b>→</b>
                <div><span>Galileo</span><small>Observación</small></div>
                <b>→</b>
                <div><span>Newton</span><small>Matematización</small></div>
              </div>
            </section>

            <section id="descartes" className="oaf-section oaf-wine-section">
              <span className="oaf-number">04</span>
              <p className="oaf-eyebrow">CARTESIUS</p>
              <h2>Descartes y las sustancias</h2>

              <p>
                Descartes inaugura un giro hacia el sujeto sin abandonar
                una ontología sustancial. La clase ordena el panorama
                mediante tres expresiones clásicas.
              </p>

              <div className="oaf-cartesian">
                <div><span>res infinita</span><strong>Dios</strong></div>
                <div><span>res cogitans</span><strong>pensamiento</strong></div>
                <div><span>res extensa</span><strong>extensión</strong></div>
              </div>

              <p>
                Aparece también el argumento ontológico y la futura
                crítica kantiana: no es evidente que la existencia pueda
                extraerse simplemente del análisis de un concepto.
              </p>
            </section>

            <section id="spinoza" className="oaf-section">
              <span className="oaf-number">05</span>
              <p className="oaf-eyebrow">MORE GEOMETRICO</p>
              <h2>Spinoza: sustancia, Dios y naturaleza</h2>

              <p>
                La Ética es presentada mediante su forma geométrica:
                definiciones, axiomas, proposiciones y demostraciones.
                La discusión abre la relación entre Dios y naturaleza.
              </p>

              <div className="oaf-pair">
                <div><span>natura naturans</span></div>
                <b>↔</b>
                <div><span>natura naturata</span></div>
              </div>

              <p>
                La sesión deja abiertas las distinciones entre panteísmo,
                panenteísmo y otras maneras de comprender esa relación.
              </p>
            </section>

            <section id="leibniz" className="oaf-section oaf-wine-section">
              <span className="oaf-number">06</span>
              <p className="oaf-eyebrow">MONADOLOGIA</p>
              <h2>Leibniz y la recuperación de la finalidad</h2>

              <div className="oaf-books">
                <article><span>I</span><strong>Discurso de metafísica</strong></article>
                <article><span>II</span><strong>Monadología</strong></article>
                <article><span>III</span><strong>Teodicea</strong></article>
              </div>

              <p>
                Las mónadas se introducen como unidades simples de la
                realidad. La clase recupera además la teleología y las
                cuatro causas aristotélicas, especialmente la causa final.
              </p>

              <div className="oaf-contrast">
                <div><span>Demócrito</span><strong>átomos · materialidad</strong></div>
                <b>versus</b>
                <div><span>Aristóteles / Leibniz</span><strong>forma · finalidad</strong></div>
              </div>
            </section>

            <section id="mal" className="oaf-section">
              <span className="oaf-number">07</span>
              <p className="oaf-eyebrow">LIBERTAS</p>
              <h2>Mal, libertad y voluntad</h2>

              <div className="oaf-callout">
                <span>QUAESTIO</span>
                <strong>
                  Si Dios es bueno y omnipotente, ¿por qué existe el mal?
                </strong>
              </div>

              <p>
                Desde la Teodicea, la sesión conecta el problema del mal
                con Epicuro, Agustín, Spinoza, Schelling y Kant. La
                libertad y la voluntad se vuelven categorías centrales
                para pensar responsabilidad, acción y finalidad.
              </p>

              <div className="oaf-maxim">
                Tratar a cada persona como un fin en sí misma y nunca
                meramente como un medio.
              </div>
            </section>

            <section id="programa" className="oaf-section">
              <span className="oaf-number">08</span>
              <p className="oaf-eyebrow">PROGRAMMA 2026-B</p>
              <h2>El recorrido oficial del semestre</h2>

              <div className="oaf-program-grid">
                <article><span>01</span><strong>Racionalismo y empirismo</strong></article>
                <article><span>02</span><strong>Kant y la metafísica</strong></article>
                <article><span>03</span><strong>La cosa-en-sí</strong></article>
                <article><span>04</span><strong>Hegel</strong></article>
                <article><span>05</span><strong>Marx</strong></article>
                <article><span>06</span><strong>Positivismo</strong></article>
                <article><span>07</span><strong>Nietzsche</strong></article>
                <article><span>08</span><strong>Husserl</strong></article>
                <article><span>09</span><strong>Heidegger</strong></article>
                <article><span>10</span><strong>Russell · Wittgenstein · lenguaje</strong></article>
              </div>

              <p>
                El programa formula como saber teórico central la
                relación entre ser y pensar, y la interrelación entre
                lenguaje, pensamiento y realidad. El trabajo práctico
                consiste en leer, contextualizar, distinguir problemas,
                identificar categorías y reconstruir argumentos.
              </p>
            </section>

            <section id="evaluacion" className="oaf-section oaf-wine-section">
              <span className="oaf-number">09</span>
              <p className="oaf-eyebrow">EVALUATIO</p>
              <h2>Evaluación: programa oficial</h2>

              <div className="oaf-eval">
                <div><strong>40%</strong><span>Examen parcial</span></div>
                <div><strong>40%</strong><span>Cuestionarios</span></div>
                <div><strong>20%</strong><span>Participación</span></div>
              </div>

              <p>
                La transcripción de esta primera clase contiene referencias
                a porcentajes y a un posible trabajo final que quedaron
                parcialmente dudosas. Para no mezclarlas con datos
                reconstruidos, esta sección usa como fuente principal el
                programa oficial elaborado en agosto de 2026.
              </p>

              <aside className="oaf-note">
                <strong>Participación</strong>
                <p>
                  El programa la define como aportación positiva mediante
                  preguntas, comentarios, críticas constructivas y actitud
                  de atención.
                </p>
              </aside>
            </section>

            <section id="tarea" className="oaf-section">
              <span className="oaf-number">10</span>
              <p className="oaf-eyebrow">LECTIO</p>
              <h2>Leer el Discurso del método</h2>

              <div className="oaf-homework">
                <div><span>Autor</span><strong>René Descartes</strong></div>
                <div><span>Texto</span><strong>Discurso del método</strong></div>
                <div><span>Extensión</span><strong>Por lo menos 15 páginas</strong></div>
                <div><span>Entrega</span><strong>Por definir</strong></div>
              </div>

              <Link to="/tareas" className="oaf-task-link">
                Ver en tablero de tareas
                <span>↗</span>
              </Link>
            </section>
          </article>
        </div>

        <section className="oaf-documentum">
          <div>
            <small>DOCUMENTUM</small>
            <h2>Criterio documental</h2>
          </div>
          <p>
            Esta edición conserva íntegramente los bloques de contenido que ya
            formaban parte de la página del 17 de agosto. La portada, el gabinete
            latino y el Atlas son capas editoriales añadidas; no sustituyen el
            desarrollo de la clase.
          </p>
        </section>

        <footer className="oa-footer">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <span>☙ ens · substantia · modernitas ❧</span>
          <span>17 · VIII · 2026</span>
        </footer>
      </div>
    </main>
  )
}
