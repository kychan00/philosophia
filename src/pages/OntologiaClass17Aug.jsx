import { Link } from 'react-router'
import transcript from '../content/ontologia-2026-08-17.md?raw'

const sections = [
  { id: 'panorama', number: '00', label: 'Panorama' },
  { id: 'logica', number: '01', label: 'Lógica y ontología' },
  { id: 'ser', number: '02', label: 'Los sentidos del ser' },
  { id: 'modernidad', number: '03', label: 'Ciencia y modernidad' },
  { id: 'descartes', number: '04', label: 'Descartes' },
  { id: 'spinoza', number: '05', label: 'Spinoza' },
  { id: 'leibniz', number: '06', label: 'Leibniz y teleología' },
  { id: 'mal', number: '07', label: 'Mal, libertad y voluntad' },
  { id: 'curso', number: '08', label: 'Mapa del curso' },
  { id: 'evaluacion', number: '09', label: 'Información del curso' },
  { id: 'transcripcion', number: '10', label: 'Transcripción' },
]

function SectionHeading({ number, eyebrow, title }) {
  return (
    <div className="class-section-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default function OntologiaClass17Aug() {
  const goToSection = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <main className="class-page">
      <nav className="class-topbar">
        <Link to="/semestre/5/ontologia-ii">
          ← Ontología II
        </Link>

        <Link to="/" className="class-brand">
          Φ · Philosophia
        </Link>

        <span>XVII · VIII · MMXXVI</span>
      </nav>

      <header className="class-header">
        <div className="class-header-glyph" aria-hidden="true">
          ὄν
        </div>

        <p className="class-header-kicker">
          Ontología II · Primera clase
        </p>

        <h1>
          Clase del
          <em>17 de agosto</em>
        </h1>

        <p className="class-header-subtitle">
          Panorama del curso: del principio de no contradicción
          a la ontología moderna y contemporánea.
        </p>

        <div className="class-header-ornament">
          ☙ ───── ✦ ───── ❧
        </div>
      </header>

      <div className="class-layout">
        <aside className="class-index">
          <p>Index lectionis</p>

          <nav>
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => goToSection(section.id)}
              >
                <span>{section.number}</span>
                {section.label}
              </button>
            ))}
          </nav>
        </aside>

        <article className="class-article">
          <section id="panorama" className="class-section class-panorama">
            <SectionHeading
              number="00"
              eyebrow="Quaestiones"
              title="Las preguntas de la clase"
            />

            <div className="class-big-questions">
              <p>¿Qué es lo que hay?</p>
              <p>¿Qué es lo que existe?</p>
              <p>¿Cuál es la estructura de la realidad?</p>
            </div>

            <p className="class-lead">
              La primera sesión funciona como un gran mapa del curso.
              El profesor parte de Aristóteles y de los principios
              lógicos fundamentales para abrir las preguntas que
              acompañarán el recorrido por la filosofía moderna y
              contemporánea.
            </p>
          </section>

          <section id="logica" className="class-section">
            <SectionHeading
              number="01"
              eyebrow="Principia"
              title="Lógica y ontología"
            />

            <p>
              La clase comienza con los principios de identidad,
              tercero excluso y no contradicción. La cuestión
              decisiva no es solamente reconocerlos como reglas
              lógicas, sino preguntar si poseen una base en la
              realidad misma.
            </p>

            <div className="class-callout">
              <span>Problema</span>
              <strong>
                ¿El principio de no contradicción describe solamente
                nuestro pensamiento o también la estructura de lo real?
              </strong>
            </div>

            <p>
              Aristóteles aparece como referencia principal: el
              principio de no contradicción no puede demostrarse
              mediante algo anterior, porque funciona como condición
              de las demostraciones. Sin embargo, su negación puede
              refutarse mostrando las contradicciones a las que conduce.
            </p>
          </section>

          <section id="ser" className="class-section">
            <SectionHeading
              number="02"
              eyebrow="Aristoteles"
              title="Los sentidos del ser"
            />

            <p>
              El profesor introduce la teoría analógica del ser:
              el ser se dice de múltiples maneras, pero sus distintos
              sentidos se organizan alrededor de la sustancia.
            </p>

            <div className="class-concept-grid">
              <div>
                <span>I</span>
                <strong>Ser accidental</strong>
              </div>
              <div>
                <span>II</span>
                <strong>Ser lógico</strong>
              </div>
              <div>
                <span>III</span>
                <strong>Potencia y acto</strong>
              </div>
              <div>
                <span>IV</span>
                <strong>Categorías</strong>
              </div>
            </div>

            <div className="class-center-note">
              Todos estos sentidos giran alrededor de la
              <strong> sustancia</strong>.
            </div>
          </section>

          <section id="modernidad" className="class-section">
            <SectionHeading
              number="03"
              eyebrow="Scientia nova"
              title="Ciencia moderna y ontología"
            />

            <p>
              La continuidad de Platón y Aristóteles durante la Edad
              Media se transforma con el surgimiento de la ciencia
              moderna. Copérnico, Kepler, Galileo y Newton modifican
              progresivamente la imagen física del mundo.
            </p>

            <div className="class-timeline">
              <div><span>Copérnico</span><p>Heliocentrismo</p></div>
              <div><span>Kepler</span><p>Órbitas elípticas</p></div>
              <div><span>Galileo</span><p>Observación telescópica</p></div>
              <div><span>Newton</span><p>Ciencia físico-matemática</p></div>
            </div>

            <p>
              El cambio científico no elimina la ontología: obliga a
              reformular qué existe y cómo está estructurada la realidad.
            </p>
          </section>

          <section id="descartes" className="class-section">
            <SectionHeading
              number="04"
              eyebrow="Cartesius"
              title="Descartes y las sustancias"
            />

            <p>
              Descartes inaugura la filosofía moderna dando prioridad
              epistemológica al sujeto, pero conserva una ontología de
              sustancias.
            </p>

            <div className="class-cartesian">
              <div className="class-cartesian-god">
                <span>res infinita</span>
                <strong>Dios</strong>
              </div>

              <div className="class-cartesian-line" />

              <div className="class-cartesian-pair">
                <div>
                  <span>res cogitans</span>
                  <strong>alma · pensamiento</strong>
                </div>
                <div>
                  <span>res extensa</span>
                  <strong>cuerpo · extensión</strong>
                </div>
              </div>
            </div>

            <p>
              Desde aquí la clase introduce también el argumento
              ontológico: Descartes intenta vincular perfección y
              existencia necesaria en Dios; Kant cuestionará que la
              existencia pueda obtenerse simplemente del análisis de
              un concepto.
            </p>
          </section>

          <section id="spinoza" className="class-section">
            <SectionHeading
              number="05"
              eyebrow="Rationalismus"
              title="Spinoza"
            />

            <p>
              Descartes, Spinoza y Leibniz son presentados como los
              grandes racionalistas. En Spinoza aparece el método
              geométrico de la Ética: definiciones, axiomas,
              proposiciones y demostraciones.
            </p>

            <div className="class-paired-terms">
              <div>
                <span>natura naturans</span>
              </div>
              <b>↔</b>
              <div>
                <span>natura naturata</span>
              </div>
            </div>

            <p>
              La discusión abre la cuestión sobre panteísmo,
              panenteísmo y la relación entre Dios y naturaleza,
              asuntos que el profesor anuncia para una revisión posterior.
            </p>
          </section>

          <section id="leibniz" className="class-section">
            <SectionHeading
              number="06"
              eyebrow="Monadologia"
              title="Leibniz y la recuperación de la teleología"
            />

            <div className="class-books">
              <div>
                <span>I</span>
                <strong>Discurso de metafísica</strong>
              </div>
              <div>
                <span>II</span>
                <strong>Monadología</strong>
              </div>
              <div>
                <span>III</span>
                <strong>Teodicea</strong>
              </div>
            </div>

            <p>
              Las mónadas son presentadas como unidades simples o,
              pedagógicamente, como “átomos formales”: principios
              básicos de la realidad dotados de forma, esencia y
              orientación teleológica.
            </p>

            <div className="class-contrast">
              <div>
                <small>Demócrito</small>
                <strong>Átomos</strong>
                <p>materialismo · azar</p>
              </div>

              <span>versus</span>

              <div>
                <small>Aristóteles / Leibniz</small>
                <strong>Forma y finalidad</strong>
                <p>causalidad · teleología</p>
              </div>
            </div>

            <p>
              El repaso de Aristóteles incluye las cuatro causas:
              material, formal, eficiente y final. La causa final
              permite explicar teleológicamente la naturaleza.
            </p>
          </section>

          <section id="mal" className="class-section">
            <SectionHeading
              number="07"
              eyebrow="Libertas"
              title="El mal, la libertad y la voluntad"
            />

            <div className="class-callout class-callout--question">
              <span>Quaestio</span>
              <strong>
                Si Dios es bueno y omnipotente, ¿por qué existe el mal?
              </strong>
            </div>

            <p>
              Desde la Teodicea de Leibniz, la clase se desplaza al
              problema del mal y conecta a Epicuro, San Agustín,
              Spinoza y Schelling.
            </p>

            <p>
              En San Agustín, la libertad de la voluntad permite
              explicar la posibilidad moral del bien y del mal.
              Schelling recupera la centralidad de la voluntad,
              mientras Kant aparece mediante el imperativo categórico
              y la exigencia de tratar a cada persona como un fin en sí.
            </p>

            <div className="class-maxim">
              “Tratar a cada persona como un fin en sí misma
              y nunca meramente como un medio.”
            </div>

            <p>
              El cierre de esta sección muestra además que la razón
              puede convertirse en instrumento de una voluntad:
              la tecnología y la racionalidad pueden ponerse al servicio
              tanto de fines buenos como destructivos.
            </p>
          </section>

          <section id="curso" className="class-section">
            <SectionHeading
              number="08"
              eyebrow="Itinerarium"
              title="Mapa del curso"
            />

            <div className="class-course-map">
              {[
                'Racionalistas',
                'Empiristas',
                'Kant',
                'Hegel',
                'Marx',
                'Comte',
                'Nietzsche',
                'Husserl',
                'Heidegger',
                'Russell',
                'Wittgenstein',
                'Gadamer',
              ].map((item, index, array) => (
                <div key={item}>
                  <span>{item}</span>
                  {index < array.length - 1 && <b>→</b>}
                </div>
              ))}
            </div>
          </section>

          <section id="evaluacion" className="class-section">
            <SectionHeading
              number="09"
              eyebrow="De cursu"
              title="Información del curso"
            />

            <div className="class-info-cards">
              <div>
                <span>Participación</span>
                <strong>≈ 20 %</strong>
                <p>Leer, preguntar y comentar.</p>
              </div>

              <div>
                <span>Trabajo</span>
                <strong>≈ 40 %</strong>
                <p>
                  Porcentaje marcado como dudoso en la transcripción.
                </p>
              </div>

              <div>
                <span>Trabajo final</span>
                <strong>Una pregunta</strong>
                <p>
                  Plantear un problema, confrontar posiciones y
                  argumentar una postura propia.
                </p>
              </div>
            </div>

            <div className="class-ai-note">
              <span>Sobre IA</span>
              <p>
                El profesor permite utilizar herramientas de inteligencia
                artificial como apoyo para comprender, pero no para
                sustituir el trabajo intelectual del estudiante.
              </p>
            </div>
          </section>

          <section id="transcripcion" className="class-section">
            <SectionHeading
              number="10"
              eyebrow="Transcriptio"
              title="Transcripción original"
            />

            <p>
              Se conserva íntegra como fuente de la organización
              anterior, incluyendo las marcas de pasajes dudosos,
              inaudibles o reconstruidos.
            </p>

            <details className="class-transcript">
              <summary>
                Ver transcripción completa
                <span>+</span>
              </summary>

              <pre>{transcript}</pre>
            </details>
          </section>
        </article>
      </div>

      <footer className="class-footer">
        <Link to="/semestre/5/ontologia-ii">
          ← Ontología II
        </Link>

        <span>☙ &nbsp; ὄν &nbsp; ❧</span>

        <span>17 · VIII · 2026</span>
      </footer>
    </main>
  )
}
