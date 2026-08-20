import { Link } from 'react-router'

const sections = [
  ['panorama', '00', 'Problema rector'],
  ['lecturas', '01', 'Lecturas'],
  ['taxonomia', '02', 'Taxonomía filosófica'],
  ['criterios', '03', 'Criterios insuficientes'],
  ['condicion', '04', 'Necesidad y suficiencia'],
  ['analisis', '05', 'Dos tipos de análisis'],
  ['historia', '06', 'Etapas históricas'],
  ['waismann', '07', 'Waismann'],
  ['formalizacion', '08', 'Formalización'],
  ['idealismo', '09', 'Análisis vs. síntesis'],
  ['sintesis', '10', 'Definición provisional'],
]

const goToSection = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SectionHeading({ number, eyebrow, children }) {
  return (
    <>
      <span className="analytic-section-number">{number}</span>
      <p className="analytic-eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </>
  )
}

export default function AnalyticClass19Aug() {
  return (
    <main className="analytic-class-page">
      <nav className="analytic-class-nav">
        <Link to="/semestre/5/filosofia-analitica">
          ← Filosofía Analítica
        </Link>

        <Link to="/" className="analytic-class-brand">
          Φ · Philosophia
        </Link>

        <span>XIX · VIII · MMXXVI</span>
      </nav>

      <header className="analytic-class-hero">
        <div className="analytic-class-symbol" aria-hidden="true">∀</div>

        <p>Filosofía Analítica · Segunda clase</p>

        <h1>
          Taxonomía,
          <em>análisis y lenguaje</em>
        </h1>

        <p className="analytic-class-lead">
          La sesión intenta responder qué hace legítima una clasificación
          filosófica y por qué la filosofía analítica no puede definirse por
          una doctrina, un tema o un método aislado. El análisis lingüístico
          aparece como condición necesaria, pero sólo cobra sentido dentro
          de una tradición histórica.
        </p>

        <div className="analytic-class-axis">
          <span>taxonomía</span><b>→</b>
          <span>análisis</span><b>→</b>
          <span>lenguaje</span><b>+</b>
          <span>historia</span>
        </div>
      </header>

      <div className="analytic-class-layout">
        <aside className="analytic-class-index">
          <p>Index argumentorum</p>

          {sections.map(([id, number, label]) => (
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
            <SectionHeading number="00" eyebrow="Quaestio">
              ¿Qué es filosofía analítica?
            </SectionHeading>

            <p>
              La clase continúa el problema de demarcación abierto en la
              sesión anterior. La oposición “analítica / continental” no
              funciona como una taxonomía filosófica homogénea, porque ambos
              términos no clasifican según el mismo tipo de criterio.
            </p>

            <div className="analytic-thesis-box">
              <span>Problema rector</span>
              <strong>
                ¿Qué criterio permite clasificar la filosofía analítica sin
                volver la categoría demasiado estrecha ni demasiado amplia?
              </strong>
            </div>

            <div className="analytic19-roadmap">
              <div><span>01</span><strong>Clasificar</strong></div>
              <b>→</b>
              <div><span>02</span><strong>Probar criterios</strong></div>
              <b>→</b>
              <div><span>03</span><strong>Buscar una condición</strong></div>
              <b>→</b>
              <div><span>04</span><strong>Agregar contexto histórico</strong></div>
            </div>
          </section>

          <section id="lecturas">
            <SectionHeading number="01" eyebrow="Lectio">
              Lecturas del bloque
            </SectionHeading>

            <p>
              Después de Føllesdal, las dos lecturas fundamentales que siguen
              en el bloque introductorio son Hacker y Glock. Ambas quedan como
              lecturas para la próxima clase: lunes 24 de agosto. Los reportes
              se entregarán posteriormente cuando el profesor indique su fecha.
            </p>

            <div className="analytic-thesis-box">
              <span>Próxima clase</span>
              <strong>Lunes 24 de agosto · llevar preparadas ambas lecturas</strong>
            </div>

            <div className="analytic19-reading-cards">
              <article>
                <span>II</span>
                <div>
                  <small>Próxima lectura</small>
                  <h3>Peter M. S. Hacker</h3>
                  <p>“El surgimiento de la filosofía analítica del siglo XX”</p>
                  <strong>pp. 95–132</strong>
                  <em>
                    Hans-Johann Glock (ed.) · El surgimiento de la filosofía
                    analítica · Círculo Ometeotl, 2013
                  </em>
                </div>
              </article>

              <article>
                <span>III</span>
                <div>
                  <small>Lectura posterior</small>
                  <h3>Hans-Johann Glock</h3>
                  <p>
                    <em>¿Qué es la filosofía analítica?</em> · capítulo II:
                    “Breve panorama histórico”
                  </p>
                  <strong>pp. 40–86</strong>
                  <em>Tecnos, 2012</em>
                </div>
              </article>
            </div>

            <Link to="/tareas" className="analytic-task-link">
              Ver en tablero de tareas
              <span>↗</span>
            </Link>
          </section>

          <section id="taxonomia">
            <SectionHeading number="02" eyebrow="Taxonomia">
              Una buena clasificación necesita un principio homogéneo
            </SectionHeading>

            <p>
              El ejemplo de la “enciclopedia china” de Borges sirve para
              mostrar qué ocurre cuando mezclamos criterios incompatibles.
              Clasificar no consiste sólo en crear nombres: exige decidir qué
              propiedad estamos usando para dividir los casos.
            </p>

            <div className="analytic19-borges">
              <div className="analytic19-borges-title">
                <span>J. L. Borges</span>
                <strong>El idioma analítico de John Wilkins</strong>
              </div>

              <div className="analytic19-borges-tags">
                {[
                  'pertenecientes al emperador',
                  'amaestrados',
                  'sirenas',
                  'fabulosos',
                  'innumerables',
                  'que acaban de romper el jarrón',
                  'que de lejos parecen moscas',
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <p>
                El problema no es que las categorías sean extrañas:
                <strong> no comparten un mismo principio de clasificación.</strong>
              </p>
            </div>

            <div className="analytic19-taxonomy-table">
              <div className="analytic19-taxonomy-head">
                <span>Problema</span>
                <span>Respuestas</span>
              </div>

              <div>
                <strong>¿Es posible conocer?</strong>
                <p>dogmatismo · escepticismo · subjetivismo · pragmatismo</p>
              </div>

              <div>
                <strong>¿De dónde proviene el conocimiento?</strong>
                <p>racionalismo · empirismo · posiciones mediadoras</p>
              </div>

              <div>
                <strong>¿Qué determina el conocimiento?</strong>
                <p>subjetivismo · objetivismo</p>
              </div>

              <div>
                <strong>¿Qué realidad corresponde a lo conocido?</strong>
                <p>realismo · idealismo</p>
              </div>
            </div>
          </section>

          <section id="criterios">
            <SectionHeading number="03" eyebrow="Demarcatio">
              Cuatro criterios que no bastan
            </SectionHeading>

            <div className="analytic19-four-failures">
              <article>
                <span>01</span>
                <h3>Epistemología</h3>
                <p>
                  Hay analíticos empiristas, racionalistas, realistas,
                  antirrealistas y posiciones intermedias.
                </p>
                <b>✕</b>
              </article>

              <article>
                <span>02</span>
                <h3>Ontología</h3>
                <p>
                  No todos sostienen la misma concepción de objetos,
                  propiedades, universales, mente o realidad.
                </p>
                <b>✕</b>
              </article>

              <article>
                <span>03</span>
                <h3>Tema</h3>
                <p>
                  La tradición trabaja lógica, lenguaje, ética, política,
                  ciencia, mente, religión, estética y más.
                </p>
                <b>✕</b>
              </article>

              <article>
                <span>04</span>
                <h3>Método único</h3>
                <p>
                  El análisis es central, pero no todos los analíticos
                  analizan del mismo modo y muchos no analíticos también
                  analizan.
                </p>
                <b>✕</b>
              </article>
            </div>

            <div className="analytic-thesis-box analytic-thesis-box--dark">
              <span>Regla taxonómica</span>
              <strong>
                Una clasificación que incluye a todo termina por no
                clasificar nada.
              </strong>
            </div>
          </section>

          <section id="condicion">
            <SectionHeading number="04" eyebrow="Necessarium">
              Análisis lingüístico: necesario, pero no suficiente
            </SectionHeading>

            <div className="analytic19-necessary">
              <div>
                <span>Filosofía analítica</span>
                <strong>⇒</strong>
                <span>análisis lingüístico</span>
              </div>

              <div className="analytic19-not-converse">
                <span>análisis lingüístico</span>
                <strong>⇏</strong>
                <span>filosofía analítica</span>
              </div>
            </div>

            <div className="analytic19-counterexample">
              <div>
                <span>Contraejemplo</span>
                <strong>Platón</strong>
              </div>

              <p>
                Platón analiza conceptos y lenguaje, pero llamarlo
                “filósofo analítico” sería históricamente anacrónico.
              </p>
            </div>

            <p>
              Por eso hacen falta dos dimensiones: una característica
              filosófica —el análisis lingüístico— y una delimitación
              histórica —la tradición moderna de los siglos XX y XXI.
            </p>
          </section>

          <section id="analisis">
            <SectionHeading number="05" eyebrow="Analysis linguae">
              Dos modalidades de análisis lingüístico
            </SectionHeading>

            <div className="analytic19-analysis-split">
              <article>
                <span>A</span>
                <small>Formal · sintáctico</small>
                <h3>¿Cuál es la estructura lógica?</h3>
                <div>
                  <b>Frege</b>
                  <b>Russell</b>
                  <b>primer Wittgenstein</b>
                </div>
                <p>
                  Cuantificadores, predicados, variables, relaciones y
                  conectivas revelan la forma lógica bajo la gramática.
                </p>
              </article>

              <div className="analytic19-analysis-divider">
                <span>ANÁLISIS<br />LINGÜÍSTICO</span>
              </div>

              <article>
                <span>B</span>
                <small>Conceptual · semántico</small>
                <h3>¿Qué significan y cómo funcionan los conceptos?</h3>
                <div>
                  <b>Moore</b>
                  <b>Strawson</b>
                  <b>segundo Wittgenstein</b>
                </div>
                <p>
                  Significado, uso, distinciones, presupuestos y relaciones
                  conceptuales.
                </p>
              </article>
            </div>
          </section>

          <section id="historia">
            <SectionHeading number="06" eyebrow="Historia">
              Cuatro etapas de la tradición
            </SectionHeading>

            <div className="analytic19-history">
              <div>
                <span>01</span>
                <strong>Orígenes / logicismo</strong>
                <small>Moore · Russell · raíces lógico-formales</small>
              </div>
              <b>→</b>
              <div>
                <span>02</span>
                <strong>Giro lingüístico</strong>
                <small>el lenguaje se vuelve filosóficamente central</small>
              </div>
              <b>→</b>
              <div>
                <span>03</span>
                <strong>Positivismo lógico</strong>
                <small>lógica · sentido · crítica de la metafísica</small>
              </div>
              <b>→</b>
              <div>
                <span>04</span>
                <strong>Lenguaje ordinario</strong>
                <small>Austin · Strawson · segundo Wittgenstein</small>
              </div>
            </div>

            <aside className="analytic-note">
              <strong>Antecedente ≠ miembro de la tradición</strong>
              <p>
                Bolzano y Frege muestran por qué la influencia, la semejanza
                o incluso el uso del análisis no bastan por sí solos. El
                contexto histórico también clasifica.
              </p>
            </aside>
          </section>

          <section id="waismann">
            <SectionHeading number="07" eyebrow="Friedrich Waismann">
              La disección lógica del pensamiento
            </SectionHeading>

            <div className="analytic19-chemical">
              <div className="analytic19-chemical-source">
                <span>pensamiento complejo</span>
                <strong>“compuesto”</strong>
              </div>

              <div className="analytic19-chemical-process">
                <span>ANÁLISIS</span>
                <b>⌁</b>
                <small>como un químico analiza una sustancia</small>
              </div>

              <div className="analytic19-chemical-result">
                <span>elementos</span>
                <strong>proposiciones</strong>
                <strong>predicados</strong>
                <strong>relaciones</strong>
                <strong>cuantificadores</strong>
              </div>
            </div>

            <div className="analytic-thesis-box">
              <span>Waismann</span>
              <strong>
                “La filosofía puede ser llamada el análisis lógico de
                nuestros pensamientos.”
              </strong>
            </div>
          </section>

          <section id="formalizacion">
            <SectionHeading number="08" eyebrow="Exercitium logicum">
              Del lenguaje ordinario a la forma lógica
            </SectionHeading>

            <div className="analytic19-natural-sentence">
              El óxido de zinc paraliza los glóbulos blancos en la sangre.
            </div>

            <div className="analytic19-dictionary">
              <div><code>O(x)</code><span>x es óxido de zinc</span></div>
              <div><code>G(y)</code><span>y es un glóbulo blanco en la sangre</span></div>
              <div><code>P(x,y)</code><span>x paraliza a y</span></div>
            </div>

            <div className="analytic19-formula">
              <span>Formalización trabajada en clase</span>
              <code>∀x∀y[(O(x) ∧ G(y)) → P(x,y)]</code>
            </div>

            <div className="analytic19-formula-parts">
              <span>∀x · cuantificación</span>
              <span>∀y · cuantificación</span>
              <span>∧ · conjunción</span>
              <span>→ · implicación</span>
              <span>P(x,y) · relación</span>
            </div>

            <p>
              El ejercicio muestra qué significa “descomponer un pensamiento”:
              una frase aparentemente simple contiene variables,
              cuantificadores, predicados, una relación, una conjunción y una
              implicación.
            </p>
          </section>

          <section id="idealismo">
            <SectionHeading number="09" eyebrow="Analysis contra synthesis">
              Moore y Russell frente al idealismo
            </SectionHeading>

            <div className="analytic19-analysis-vs-synthesis">
              <div>
                <span>IDEALISMO ABSOLUTO</span>
                <strong>Síntesis</strong>
                <p>diferencia → mediación → totalidad</p>
                <small>Bradley · Hegel · monismo</small>
              </div>

              <b>VS.</b>

              <div>
                <span>MOORE / RUSSELL</span>
                <strong>Análisis</strong>
                <p>dividir → distinguir → relacionar</p>
                <small>pluralismo · objetos · propiedades · relaciones</small>
              </div>
            </div>

            <p>
              En sus orígenes, la palabra “análisis” funciona también como
              bandera polémica contra una filosofía que tiende a absorber las
              diferencias dentro de una totalidad.
            </p>
          </section>

          <section id="sintesis">
            <SectionHeading number="10" eyebrow="Definitio provisoria">
              Lo que ya podemos afirmar
            </SectionHeading>

            <div className="analytic19-definition">
              <span>FILOSOFÍA ANALÍTICA</span>

              <div>
                <strong>tradición histórica</strong>
                <b>+</b>
                <strong>aproximación filosófica</strong>
                <b>+</b>
                <strong>análisis lingüístico central</strong>
              </div>

              <p>
                Una tradición de los siglos XX y XXI caracterizada por una
                determinada aproximación a los problemas filosóficos en la
                cual el análisis lingüístico —formal, conceptual o de ambos
                tipos— desempeña un papel fundamental.
              </p>
            </div>

            <div className="analytic-question-box">
              ¿Cómo hacer esencial el análisis lingüístico sin convertir en
              “analítico” a todo filósofo que alguna vez haya analizado el
              lenguaje?
            </div>
          </section>
        </article>
      </div>

      <footer className="analytic-class-footer">
        <Link to="/semestre/5/filosofia-analitica">
          ← Filosofía Analítica
        </Link>

        <span>∀ &nbsp; ∴ &nbsp; →</span>
        <span>19 · VIII · 2026</span>
      </footer>
    </main>
  )
}
