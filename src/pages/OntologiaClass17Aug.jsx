import { Link } from 'react-router'
import transcript from '../content/ontologia-2026-08-17.md?raw'

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

const goToSection = (id) => {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export default function OntologiaClass17Aug() {
  return (
    <main className="ontology-class-v2">
      <nav className="ontology-class-v2-nav">
        <Link to="/semestre/5/ontologia-ii">
          ← Ontología II
        </Link>

        <Link to="/" className="ontology-class-v2-brand">
          Φ · Philosophia
        </Link>

        <span>XVII · VIII · MMXXVI</span>
      </nav>

      <header className="ontology-class-v2-hero">
        <div className="ontology-class-v2-glyph" aria-hidden="true">
          ὄν
        </div>

        <p>Ontología II · Primera clase</p>

        <h1>
          Del principio de
          <em>no contradicción al ser moderno</em>
        </h1>

        <p className="ontology-class-v2-lead">
          La primera sesión funciona como un mapa intelectual:
          comienza preguntando por la relación entre lógica y realidad,
          recupera los sentidos aristotélicos del ser y abre el
          recorrido moderno a través de Descartes, Spinoza y Leibniz.
        </p>

        <div className="ontology-class-v2-axis">
          <span>λόγος</span>
          <b>→</b>
          <span>ὄν</span>
          <b>→</b>
          <span>substantia</span>
          <b>→</b>
          <span>modernitas</span>
        </div>
      </header>

      <div className="ontology-class-v2-layout">
        <aside className="ontology-class-v2-index">
          <p>Index lectionis</p>

          {sections.map(([number, id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => goToSection(id)}
            >
              <span>{number}</span>
              {label}
            </button>
          ))}
        </aside>

        <article className="ontology-class-v2-article">
          <section id="panorama">
            <span className="ontology-class-v2-number">00</span>
            <p className="ontology-class-v2-eyebrow">
              Quaestiones
            </p>
            <h2>Las preguntas que abren el curso</h2>

            <div className="ontology-class-v2-big-questions">
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

          <section id="logica">
            <span className="ontology-class-v2-number">01</span>
            <p className="ontology-class-v2-eyebrow">
              Principia
            </p>
            <h2>Lógica y ontología</h2>

            <p>
              La sesión comienza con identidad, tercero excluso y
              no contradicción. El punto ontológicamente importante
              es preguntar si estos principios son solamente reglas
              del pensamiento o si expresan también algo de la
              estructura de lo real.
            </p>

            <div className="ontology-class-v2-callout">
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

          <section id="ser">
            <span className="ontology-class-v2-number">02</span>
            <p className="ontology-class-v2-eyebrow">
              Aristoteles
            </p>
            <h2>Los sentidos del ser</h2>

            <p>
              El ser se dice de diversas maneras. La clase repasa
              ser accidental, ser lógico, potencia y acto, y el ser
              según las categorías.
            </p>

            <div className="ontology-class-v2-concepts">
              <article>
                <span>I</span>
                <strong>Accidente</strong>
              </article>

              <article>
                <span>II</span>
                <strong>Ser lógico</strong>
              </article>

              <article>
                <span>III</span>
                <strong>Potencia / acto</strong>
              </article>

              <article>
                <span>IV</span>
                <strong>Categorías</strong>
              </article>
            </div>

            <div className="ontology-class-v2-center">
              Los sentidos del ser se articulan alrededor de la
              <strong> sustancia</strong>.
            </div>
          </section>

          <section id="modernidad">
            <span className="ontology-class-v2-number">03</span>
            <p className="ontology-class-v2-eyebrow">
              Scientia nova
            </p>
            <h2>Ciencia moderna y transformación del mundo</h2>

            <p>
              Copérnico, Kepler, Galileo y Newton modifican la imagen
              física heredada. Ese cambio no cancela la ontología:
              obliga a reformular qué existe y cómo se organiza la
              realidad.
            </p>

            <div className="ontology-class-v2-timeline">
              <div><span>Copérnico</span><small>Heliocentrismo</small></div>
              <b>→</b>
              <div><span>Kepler</span><small>Órbitas</small></div>
              <b>→</b>
              <div><span>Galileo</span><small>Observación</small></div>
              <b>→</b>
              <div><span>Newton</span><small>Matematización</small></div>
            </div>
          </section>

          <section id="descartes">
            <span className="ontology-class-v2-number">04</span>
            <p className="ontology-class-v2-eyebrow">
              Cartesius
            </p>
            <h2>Descartes y las sustancias</h2>

            <p>
              Descartes inaugura un giro hacia el sujeto sin abandonar
              una ontología sustancial. La clase ordena el panorama
              mediante tres expresiones clásicas.
            </p>

            <div className="ontology-class-v2-cartesian">
              <div>
                <span>res infinita</span>
                <strong>Dios</strong>
              </div>

              <div>
                <span>res cogitans</span>
                <strong>pensamiento</strong>
              </div>

              <div>
                <span>res extensa</span>
                <strong>extensión</strong>
              </div>
            </div>

            <p>
              Aparece también el argumento ontológico y la futura
              crítica kantiana: no es evidente que la existencia pueda
              extraerse simplemente del análisis de un concepto.
            </p>
          </section>

          <section id="spinoza">
            <span className="ontology-class-v2-number">05</span>
            <p className="ontology-class-v2-eyebrow">
              More geometrico
            </p>
            <h2>Spinoza: sustancia, Dios y naturaleza</h2>

            <p>
              La Ética es presentada mediante su forma geométrica:
              definiciones, axiomas, proposiciones y demostraciones.
              La discusión abre la relación entre Dios y naturaleza.
            </p>

            <div className="ontology-class-v2-pair">
              <div>
                <span>natura naturans</span>
              </div>
              <b>↔</b>
              <div>
                <span>natura naturata</span>
              </div>
            </div>

            <p>
              La sesión deja abiertas las distinciones entre panteísmo,
              panenteísmo y otras maneras de comprender esa relación.
            </p>
          </section>

          <section id="leibniz">
            <span className="ontology-class-v2-number">06</span>
            <p className="ontology-class-v2-eyebrow">
              Monadologia
            </p>
            <h2>Leibniz y la recuperación de la finalidad</h2>

            <div className="ontology-class-v2-books">
              <article>
                <span>I</span>
                <strong>Discurso de metafísica</strong>
              </article>

              <article>
                <span>II</span>
                <strong>Monadología</strong>
              </article>

              <article>
                <span>III</span>
                <strong>Teodicea</strong>
              </article>
            </div>

            <p>
              Las mónadas se introducen como unidades simples de la
              realidad. La clase recupera además la teleología y las
              cuatro causas aristotélicas, especialmente la causa final.
            </p>

            <div className="ontology-class-v2-contrast">
              <div>
                <span>Demócrito</span>
                <strong>átomos · materialidad</strong>
              </div>

              <b>vs.</b>

              <div>
                <span>Aristóteles / Leibniz</span>
                <strong>forma · finalidad</strong>
              </div>
            </div>
          </section>

          <section id="mal">
            <span className="ontology-class-v2-number">07</span>
            <p className="ontology-class-v2-eyebrow">
              Libertas
            </p>
            <h2>Mal, libertad y voluntad</h2>

            <div className="ontology-class-v2-callout">
              <span>Quaestio</span>
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

            <div className="ontology-class-v2-maxim">
              Tratar a cada persona como un fin en sí misma y nunca
              meramente como un medio.
            </div>
          </section>

          <section id="programa">
            <span className="ontology-class-v2-number">08</span>
            <p className="ontology-class-v2-eyebrow">
              Programma 2026-B
            </p>
            <h2>El recorrido oficial del semestre</h2>

            <div className="ontology-class-v2-program-grid">
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

          <section id="evaluacion">
            <span className="ontology-class-v2-number">09</span>
            <p className="ontology-class-v2-eyebrow">
              Evaluatio
            </p>
            <h2>Evaluación: programa oficial</h2>

            <div className="ontology-class-v2-eval">
              <div>
                <strong>40%</strong>
                <span>Examen parcial</span>
              </div>

              <div>
                <strong>40%</strong>
                <span>Cuestionarios</span>
              </div>

              <div>
                <strong>20%</strong>
                <span>Participación</span>
              </div>
            </div>

            <p>
              La transcripción de esta primera clase contiene referencias
              a porcentajes y a un posible trabajo final que quedaron
              parcialmente dudosas. Para no mezclarlas con datos
              reconstruidos, esta sección usa como fuente principal el
              programa oficial elaborado en agosto de 2026.
            </p>

            <aside className="ontology-class-v2-note">
              <strong>Participación</strong>
              <p>
                El programa la define como aportación positiva mediante
                preguntas, comentarios, críticas constructivas y actitud
                de atención.
              </p>
            </aside>
          </section>

          <section id="tarea">
            <span className="ontology-class-v2-number">10</span>
            <p className="ontology-class-v2-eyebrow">
              Lectio
            </p>
            <h2>Leer el Discurso del método</h2>

            <div className="ontology-class-v2-homework">
              <div>
                <span>Autor</span>
                <strong>René Descartes</strong>
              </div>

              <div>
                <span>Texto</span>
                <strong>Discurso del método</strong>
              </div>

              <div>
                <span>Extensión</span>
                <strong>Por lo menos 15 páginas</strong>
              </div>

              <div>
                <span>Entrega</span>
                <strong>Por definir</strong>
              </div>
            </div>

            <Link to="/tareas" className="ontology-class-v2-task-link">
              Ver en tablero de tareas
              <span>↗</span>
            </Link>
          </section>

          
        </article>
      </div>

      <footer className="ontology-class-v2-footer">
        <Link to="/semestre/5/ontologia-ii">
          ← Ontología II
        </Link>

        <span>☙ &nbsp; ὄν &nbsp; ❧</span>
        <span>17 · VIII · 2026</span>
      </footer>
    </main>
  )
}
