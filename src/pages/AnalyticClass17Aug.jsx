import { Link } from 'react-router'
import transcript from '../content/analitica-2026-08-17.md?raw'

const sections = [
  ['00', 'panorama', 'Panorama'],
  ['01', 'arquitectura', 'Arquitectura del curso'],
  ['02', 'que-es', '¿Qué es filosofía analítica?'],
  ['03', 'mitos', 'Mitos'],
  ['04', 'continental', 'Analítica vs. continental'],
  ['05', 'situada', 'Filosofía situada'],
  ['06', 'llana', 'Filosofía llana'],
  ['07', 'taxonomia', 'Taxonomía'],
  ['08', 'criterios', 'Cuatro criterios'],
  ['09', 'mapa', 'Mapa del curso'],
  ['10', 'lecturas', 'Lecturas'],
  ['11', 'evaluacion', 'Evaluación'],
  ['12', 'tarea', 'Tarea'],
  ['13', 'transcripcion', 'Transcripción'],
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

export default function AnalyticClass17Aug() {
  return (
    <main className="analytic-class-page">
      <nav className="analytic-class-nav">
        <Link to="/semestre/5/filosofia-analitica">
          ← Filosofía Analítica
        </Link>

        <Link to="/" className="analytic-class-brand">
          Φ · Philosophia
        </Link>

        <span>XVII · VIII · MMXXVI</span>
      </nav>

      <header className="analytic-class-hero">
        <div className="analytic-class-symbol" aria-hidden="true">∴</div>

        <p>Filosofía Analítica · Primera clase</p>

        <h1>
          El problema de
          <em>la demarcación</em>
        </h1>

        <p className="analytic-class-lead">
          La sesión construye una pregunta antes de ofrecer una definición:
          si la filosofía analítica no comparte una sola doctrina, un solo
          tema, una sola escuela ni un único método, ¿qué permite
          reconocerla como tradición?
        </p>

        <div className="analytic-class-axis">
          <span>doctrina</span><b>≠</b>
          <span>tema</span><b>≠</b>
          <span>escuela</span><b>≠</b>
          <span>método único</span>
        </div>
      </header>

      <div className="analytic-class-layout">
        <aside className="analytic-class-index">
          <p>Index argumentorum</p>

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

        <article className="analytic-class-article">
          <section id="panorama">
            <span className="analytic-section-number">00</span>
            <p className="analytic-eyebrow">Panorama</p>
            <h2>La pregunta que organiza la materia</h2>

            <p>
              La primera sesión no comienza con una definición cerrada de
              filosofía analítica. Comienza mostrando por qué es difícil
              definirla. El objetivo del curso será estudiar su surgimiento,
              sus etapas y ejemplos concretos hasta poder formular una
              caracterización filosóficamente útil.
            </p>

            <div className="analytic-thesis-box">
              <span>Quaestio</span>
              <strong>
                ¿Qué es filosofía analítica y qué no es filosofía analítica?
              </strong>
            </div>
          </section>

          <section id="arquitectura">
            <span className="analytic-section-number">01</span>
            <p className="analytic-eyebrow">Arquitectura del curso</p>
            <h2>Tres momentos</h2>

            <div className="analytic-module-grid">
              <div>
                <span>I</span>
                <h3>Taxonomía</h3>
                <p>
                  Cómo clasificar la filosofía analítica dentro del mapa
                  general de corrientes filosóficas.
                </p>
              </div>

              <div>
                <span>II</span>
                <h3>Historia</h3>
                <p>
                  Cuatro etapas: logicismo, giro lingüístico,
                  positivismo lógico y filosofía del lenguaje natural.
                </p>
              </div>

              <div>
                <span>III</span>
                <h3>Casos</h3>
                <p>
                  Problemas de significado, simbolismo, referencia,
                  analiticidad, holismo y ética.
                </p>
              </div>
            </div>
          </section>

          <section id="que-es">
            <span className="analytic-section-number">02</span>
            <p className="analytic-eyebrow">Definición provisional</p>
            <h2>No es un tema</h2>

            <p>
              “Filosofía del lenguaje” designa un área por su objeto:
              el lenguaje. “Filosofía analítica”, en cambio, no designa
              un único objeto. Puede haber filosofía analítica del
              lenguaje, de la mente, de la ciencia, ética, política,
              epistemología u ontología.
            </p>

            <div className="analytic-contrast">
              <div>
                <span>Área temática</span>
                <strong>Filosofía del lenguaje</strong>
                <p>Se define por aquello que estudia.</p>
              </div>

              <div>
                <span>Aproximación</span>
                <strong>Filosofía analítica</strong>
                <p>
                  Se refiere provisionalmente a un modo o aproximación
                  particular al filosofar.
                </p>
              </div>
            </div>

            <p>
              Tampoco basta llamarla “un método”: los filósofos
              analíticos no comparten un único procedimiento común.
            </p>
          </section>

          <section id="mitos">
            <span className="analytic-section-number">03</span>
            <p className="analytic-eyebrow">Mitos</p>
            <h2>Tres simplificaciones</h2>

            <div className="analytic-myths">
              <article>
                <span>MITO I</span>
                <h3>“Sólo trata del lenguaje”</h3>
                <p>
                  Falso: el lenguaje es un área posible entre muchas otras.
                </p>
              </article>

              <article>
                <span>MITO II</span>
                <h3>“Sólo se hace en inglés”</h3>
                <p>
                  Falso: existen raíces germanoparlantes y filosofía
                  analítica escrita en español.
                </p>
              </article>

              <article>
                <span>VALORACIÓN</span>
                <h3>“Es demasiado rígida”</h3>
                <p>
                  Puede describir precisión o estructura, pero no
                  constituye por sí sola una objeción filosófica.
                </p>
              </article>
            </div>

            <aside className="analytic-note">
              <strong>Luis Villoro</strong>
              <p>
                El profesor menciona <em>Creer, saber, conocer</em> como
                ejemplo de filosofía analítica escrita en español:
                reconstrucción lógica, análisis conceptual y desarrollo
                argumentativo.
              </p>
            </aside>
          </section>

          <section id="continental">
            <span className="analytic-section-number">04</span>
            <p className="analytic-eyebrow">Problema taxonómico</p>
            <h2>“Analítica” frente a “continental”</h2>

            <div className="analytic-word-analysis">
              <div>
                <strong>analítica</strong>
                <span>↓</span>
                <p>
                  El término sugiere, al menos intuitivamente,
                  descomposición, análisis o una forma de proceder.
                </p>
              </div>

              <b>vs.</b>

              <div>
                <strong>continental</strong>
                <span>↓</span>
                <p>
                  El término apunta primero a un lugar geográfico,
                  no a una doctrina ni a un procedimiento filosófico.
                </p>
              </div>
            </div>

            <p>
              Por eso la oposición rígida entre filosofía analítica y
              continental resulta problemática: una clasificación
              filosófica debería decir algo sobre cómo se piensa,
              qué se sostiene o cómo se argumenta, no solamente dónde
              vive o trabaja alguien.
            </p>
          </section>

          <section id="situada">
            <span className="analytic-section-number">05</span>
            <p className="analytic-eyebrow">Contexto y clasificación</p>
            <h2>¿Qué hacemos con la filosofía “situada”?</h2>

            <p>
              La discusión distingue dos niveles. El contexto social,
              histórico, político y cultural sí influye en cualquier
              filósofo y puede ser objeto de análisis metateórico.
              Pero de ahí no se sigue que el lugar geográfico deba
              funcionar como taxonomía filosófica fundamental.
            </p>

            <div className="analytic-two-levels">
              <div>
                <span>Nivel contextual</span>
                <p>
                  Influencias históricas, clase social, cultura,
                  ambiente político y condiciones materiales.
                </p>
              </div>

              <div>
                <span>Nivel taxonómico</span>
                <p>
                  Criterios filosóficos para distinguir doctrinas,
                  corrientes, métodos o aproximaciones.
                </p>
              </div>
            </div>
          </section>

          <section id="llana">
            <span className="analytic-section-number">06</span>
            <p className="analytic-eyebrow">Jerarquías</p>
            <h2>La filosofía es “llana”</h2>

            <p>
              La idea de una filosofía llana rechaza que exista una
              única temática filosófica que, por principio, esté por
              encima de todas las demás. Puede extenderse también a
              las aproximaciones: ninguna debería declararse superior
              antes de revisar argumentos y problemas concretos.
            </p>

            <div className="analytic-flat-line">
              <span>Lenguaje</span>
              <span>Mente</span>
              <span>Ética</span>
              <span>Política</span>
              <span>Ontología</span>
              <span>Epistemología</span>
            </div>
          </section>

          <section id="taxonomia">
            <span className="analytic-section-number">07</span>
            <p className="analytic-eyebrow">Taxonomía</p>
            <h2>Clasificar dos mil quinientos años de filosofía</h2>

            <p>
              Una taxonomía permite discriminar, ordenar y clasificar.
              En filosofía suele operar mediante preguntas
              epistemológicas u ontológicas.
            </p>

            <div className="analytic-taxonomy-examples">
              <div>
                <span>Origen del conocimiento</span>
                <strong>Razón ↔ Experiencia</strong>
                <small>Racionalismo / Empirismo</small>
              </div>

              <div>
                <span>Posibilidad del conocimiento</span>
                <strong>Negación ↔ Afirmación</strong>
                <small>Escepticismo / Dogmatismo</small>
              </div>

              <div>
                <span>Primacía</span>
                <strong>Sujeto ↔ Objeto</strong>
                <small>Subjetivismo / Objetivismo</small>
              </div>
            </div>

            <p>
              El problema aparece cuando intentamos aplicar esta misma
              estrategia a la filosofía analítica: dentro de ella
              conviven posiciones doctrinales incompatibles.
            </p>
          </section>

          <section id="criterios">
            <span className="analytic-section-number">08</span>
            <p className="analytic-eyebrow">Demarcación</p>
            <h2>Cuatro criterios que no bastan</h2>

            <div className="analytic-criteria">
              <article>
                <span>01</span>
                <h3>Doctrina</h3>
                <p>
                  Hay analíticos empiristas, racionalistas, realistas,
                  antirrealistas y naturalistas.
                </p>
                <b>Insuficiente</b>
              </article>

              <article>
                <span>02</span>
                <h3>Tema</h3>
                <p>
                  La tradición trabaja lenguaje, mente, ciencia,
                  política, ética, epistemología, metafísica y más.
                </p>
                <b>Insuficiente</b>
              </article>

              <article>
                <span>03</span>
                <h3>Escuela</h3>
                <p>
                  Más de un siglo de disputas, rupturas y posiciones
                  incompatibles impide verla como escuela homogénea.
                </p>
                <b>Insuficiente</b>
              </article>

              <article>
                <span>04</span>
                <h3>Método</h3>
                <p>
                  Moore y Russell hacen del análisis algo central,
                  pero otros autores, como Quine, impiden convertir
                  un método único en condición necesaria.
                </p>
                <b>Insuficiente</b>
              </article>
            </div>

            <div className="analytic-thesis-box analytic-thesis-box--dark">
              <span>Resultado</span>
              <strong>
                La filosofía analítica exige replantear nuestros
                instrumentos de clasificación.
              </strong>
            </div>
          </section>

          <section id="mapa">
            <span className="analytic-section-number">09</span>
            <p className="analytic-eyebrow">Programa 2026-B</p>
            <h2>Mapa histórico del curso</h2>

            <div className="analytic-timeline">
              <div><span>I</span><strong>Logicismo</strong></div>
              <i>→</i>
              <div><span>II</span><strong>Giro lingüístico</strong></div>
              <i>→</i>
              <div><span>III</span><strong>Positivismo lógico</strong></div>
              <i>→</i>
              <div><span>IV</span><strong>Lenguaje natural</strong></div>
            </div>

            <p>
              Después, el curso aterriza en problemas concretos:
              significado en Frege, límites del pensamiento en
              Wittgenstein, referencia y denotación en Strawson,
              analiticidad y holismo en Quine, y problemas éticos
              desde Rawls.
            </p>
          </section>

          <section id="lecturas">
            <span className="analytic-section-number">10</span>
            <p className="analytic-eyebrow">Bibliografía de trabajo</p>
            <h2>Tres lecturas para construir la definición</h2>

            <ol className="analytic-class-readings">
              <li>
                <span>01</span>
                <div>
                  <strong>Dagfinn Føllesdal</strong>
                  <p>
                    “Filosofía analítica: ¿qué es y por qué uno
                    debería involucrarse?”
                  </p>
                </div>
              </li>

              <li>
                <span>02</span>
                <div>
                  <strong>Peter M. S. Hacker</strong>
                  <p>
                    “El surgimiento de la filosofía analítica del
                    siglo XX”
                  </p>
                </div>
              </li>

              <li>
                <span>03</span>
                <div>
                  <strong>Hans-Johann Glock</strong>
                  <p>
                    <em>¿Qué es la filosofía analítica?</em>,
                    capítulo II: “Breve panorama histórico”
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section id="evaluacion">
            <span className="analytic-section-number">11</span>
            <p className="analytic-eyebrow">Evaluación</p>
            <h2>Reportes, no examen</h2>

            <div className="analytic-eval-class">
              <div>
                <strong>80%</strong>
                <span>Reportes de lectura</span>
              </div>

              <div>
                <strong>20%</strong>
                <span>Participación y asistencia</span>
              </div>
            </div>

            <p>
              La grabación no permite recuperar con seguridad los
              porcentajes pronunciados en clase; estos porcentajes
              provienen del programa oficial 2026-B. Lo que sí queda
              claro en la sesión es que no habrá examen ni trabajo
              final y que los reportes se entregarán después de
              terminar cada lectura.
            </p>
          </section>

          <section id="tarea">
            <span className="analytic-section-number">12</span>
            <p className="analytic-eyebrow">Próxima clase</p>
            <h2>Lectura de Føllesdal</h2>

            <div className="analytic-homework">
              <div>
                <span>Autor</span>
                <strong>Dagfinn Føllesdal</strong>
              </div>

              <div>
                <span>Texto</span>
                <strong>
                  Filosofía analítica: ¿qué es y por qué uno debería
                  involucrarse?
                </strong>
              </div>

              <div>
                <span>Lectura</span>
                <strong>pp. 19–40 aprox.</strong>
              </div>

              <div>
                <span>Para</span>
                <strong>Miércoles 19 de agosto</strong>
              </div>
            </div>

            <p>
              La finalidad de la lectura será retomar los criterios
              taxonómicos discutidos en esta sesión y examinar por qué
              no bastan para definir la filosofía analítica.
            </p>

            <Link to="/tareas" className="analytic-task-link">
              Ver en tablero de tareas
              <span>↗</span>
            </Link>
          </section>

          <section id="transcripcion">
            <span className="analytic-section-number">13</span>
            <p className="analytic-eyebrow">Archivo</p>
            <h2>Transcripción depurada</h2>

            <p>
              Se conserva el texto completo de la grabación depurada,
              incluidas las marcas de incertidumbre cuando una frase
              no pudo reconstruirse con seguridad.
            </p>

            <details className="analytic-transcript">
              <summary>Ver transcripción completa</summary>
              <pre>{transcript}</pre>
            </details>
          </section>
        </article>
      </div>

      <footer className="analytic-class-footer">
        <Link to="/semestre/5/filosofia-analitica">
          ← Filosofía Analítica
        </Link>

        <span>p &nbsp; ∴ &nbsp; q</span>
        <span>17 · VIII · 2026</span>
      </footer>
    </main>
  )
}
