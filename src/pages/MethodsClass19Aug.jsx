import { Link } from 'react-router'

const sections = [
  ['mapa', '00', 'Mapa de la sesión'],
  ['investigar', '01', 'Investigar filosóficamente'],
  ['piaget', '02', 'Piaget y pluralidad'],
  ['objeto-problema', '03', 'Objeto y problema'],
  ['molyneux', '04', 'Problema de Molyneux'],
  ['espiral', '05', 'Espiral de la investigación'],
  ['teoria-datos', '06', 'Teoría y datos'],
  ['teoria', '07', 'Qué es una teoría'],
  ['bacon', '08', 'Bacon e inducción'],
  ['lectura', '09', 'Lectura para la siguiente clase'],
]

function Heading({ number, eyebrow, children }) {
  return (
    <div className="methods-class-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function MethodsClass19Aug() {
  const goToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="methods-class-page">
      <nav className="methods-class-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">
          ← Métodos de Investigación
        </Link>

        <Link to="/" className="methods-class-brand">
          Φ · Philosophia
        </Link>

        <span>XIX · VIII · MMXXVI</span>
      </nav>

      <header className="methods-class-header">
        <div className="methods-header-rules" aria-hidden="true" />
        <div className="methods-header-symbol" aria-hidden="true">§</div>

        <p className="methods-class-kicker">FI104 · Segunda sesión</p>

        <h1>
          Clase del
          <em>19 de agosto</em>
        </h1>

        <p className="methods-class-subtitle">
          Del objeto al problema, de la idea a la escritura y de la teoría a
          un conocimiento que pueda comunicarse, criticarse y defenderse.
        </p>

        <div className="methods-header-ornament">
          ☙ ───── § ───── ❧
        </div>
      </header>

      <div className="methods-class-layout">
        <aside className="methods-index">
          <p>Index inquisitionis</p>

          <nav>
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
          </nav>
        </aside>

        <article className="methods-article">
          <section id="mapa" className="methods-section">
            <Heading number="00" eyebrow="Argumentum">
              Mapa general de la clase
            </Heading>

            <div className="methods19-schema methods19-schema--four">
              <div>
                <span>01</span>
                <strong>Objeto</strong>
                <p>Algo acerca de lo cual preguntamos.</p>
              </div>

              <b>→</b>

              <div>
                <span>02</span>
                <strong>Problematización</strong>
                <p>Lo obvio deja de ser obvio.</p>
              </div>

              <b>→</b>

              <div>
                <span>03</span>
                <strong>Investigación</strong>
                <p>Lectura, hipótesis, escritura y diálogo.</p>
              </div>

              <b>→</b>

              <div>
                <span>04</span>
                <strong>Conocimiento</strong>
                <p>Tesis defendible y revisable.</p>
              </div>
            </div>

            <div className="methods-thesis methods-thesis--small">
              <span>Idea rectora</span>
              <p>
                Investigar filosóficamente no es coleccionar citas: es
                convertir un objeto en problema y ese problema en conocimiento
                comunicable, criticable y racionalmente defendible.
              </p>
            </div>

            <div className="methods19-formula-strip">
              <span>objeto → cuestionamiento → conocimiento</span>
              <span>pensamiento → escritura → comunicación</span>
              <span>teoría ↔ experiencia</span>
            </div>
          </section>

          <section id="investigar" className="methods-section">
            <Heading number="01" eyebrow="Quaestio">
              La naturaleza de la filosofía es preguntar
            </Heading>

            <div className="methods-structure-pair">
              <div>
                <small>¿Qué implica investigar?</small>
                <strong>Prácticas básicas</strong>
                <p>
                  Preguntar, leer, buscar referencias, pensar, escribir,
                  argumentar y confrontar lo pensado con otros.
                </p>
              </div>

              <div>
                <small>Secuencia inicial</small>
                <strong>De la pregunta a la argumentación</strong>
                <p>
                  pregunta → documentación → lectura → reflexión →
                  argumentación
                </p>
              </div>
            </div>

            <div className="methods-question-box">
              Una investigación filosófica comienza cuando algo que parecía
              obvio deja de serlo.
            </div>
          </section>

          <section id="piaget" className="methods-section">
            <Heading number="02" eyebrow="Pluralitas">
              Piaget: disciplina, multidisciplina y transdisciplina
            </Heading>

            <p>
              La filosofía no queda encerrada en una sola materia. El problema
              puede exigir conocimientos provenientes de distintas áreas y una
              articulación que supere la simple yuxtaposición.
            </p>

            <div className="methods19-triad">
              <article>
                <span>I</span>
                <h3>Disciplina</h3>
                <p>
                  Un campo trabaja desde sus propios problemas, conceptos y
                  herramientas.
                </p>
              </article>

              <div className="methods19-triad-arrow">→</div>

              <article>
                <span>II</span>
                <h3>Multidisciplinariedad</h3>
                <p>
                  Varias disciplinas estudian el mismo problema desde
                  perspectivas distintas.
                </p>
              </article>

              <div className="methods19-triad-arrow">→</div>

              <article>
                <span>III</span>
                <h3>Transdisciplinariedad</h3>
                <p>
                  Las perspectivas se integran en una comprensión más amplia
                  del objeto.
                </p>
              </article>
            </div>

            <div className="methods-margin-note">
              <span>TGS · Teoría General de Sistemas</span>
              <p>
                La referencia aparece como ejemplo de una aspiración
                integradora: no quedarse en una sola perspectiva cuando el
                objeto requiere varias.
              </p>
            </div>
          </section>

          <section id="objeto-problema" className="methods-section">
            <Heading number="03" eyebrow="Objectum">
              Xavier Zubiri: objeto, problema y pregunta
            </Heading>

            <div className="methods-question-box">
              Para que haya un problema en filosofía es necesario que exista
              un objeto.
            </div>

            <div className="methods19-schema methods19-schema--three">
              <div>
                <span>Objeto</span>
                <strong>La duda cartesiana</strong>
                <p>¿Sobre qué investigamos?</p>
              </div>

              <b>→</b>

              <div>
                <span>Problema</span>
                <strong>Su función</strong>
                <p>¿Qué necesita explicación?</p>
              </div>

              <b>→</b>

              <div>
                <span>Pregunta</span>
                <strong>¿Qué papel cumple?</strong>
                <p>¿Qué queremos saber exactamente?</p>
              </div>
            </div>

            <p>
              “Investigar a Descartes” es demasiado amplio. La investigación
              comienza cuando el objeto se delimita y se convierte en una
              pregunta precisa.
            </p>
          </section>

          <section id="molyneux" className="methods-section">
            <Heading number="04" eyebrow="Experimentum mentale">
              El problema de Molyneux
            </Heading>

            <div className="methods19-molyneux">
              <div className="methods19-molyneux-object methods19-molyneux-object--sphere">
                <span>esfera</span>
              </div>

              <div className="methods19-molyneux-person">
                <strong>persona ciega de nacimiento</strong>
                <span>aprende por el tacto</span>
                <b>↓</b>
                <strong>adquiere la vista</strong>
              </div>

              <div className="methods19-molyneux-object methods19-molyneux-object--cube">
                <span>cubo</span>
              </div>
            </div>

            <div className="methods-question-box methods-question-box--method">
              ¿Podría distinguir inmediatamente, sólo mirando, cuál es el cubo
              y cuál la esfera sin tocarlos?
            </div>

            <div className="methods19-concept-cloud">
              {[
                'percepción',
                'epistemología',
                'psicología',
                'fisiología',
                'espacio',
                'a priori / empírico',
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section id="espiral" className="methods-section">
            <Heading number="05" eyebrow="Spira cognitionis">
              La espiral de la investigación
            </Heading>

            <p>
              Este fue uno de los dibujos centrales del pizarrón. La
              investigación no es una línea recta: cada crítica puede hacer
              regresar a la escritura, a la pregunta o incluso al objeto.
            </p>

            <div className="methods19-spiral-wrap">
              <div className="methods19-spiral-orbit methods19-spiral-orbit--5" />
              <div className="methods19-spiral-orbit methods19-spiral-orbit--4" />
              <div className="methods19-spiral-orbit methods19-spiral-orbit--3" />
              <div className="methods19-spiral-orbit methods19-spiral-orbit--2" />
              <div className="methods19-spiral-orbit methods19-spiral-orbit--1" />

              <div className="methods19-spiral-center">
                <span>🧠</span>
                <strong>mente</strong>
                <small>pensamiento</small>
              </div>

              <div className="methods19-spiral-node methods19-spiral-node--1">
                <span>01</span>
                <strong>Texto</strong>
                <small>escritura</small>
              </div>

              <div className="methods19-spiral-node methods19-spiral-node--2">
                <span>02</span>
                <strong>El otro</strong>
                <small>compañero · diálogo</small>
              </div>

              <div className="methods19-spiral-node methods19-spiral-node--3">
                <span>03</span>
                <strong>Especialista</strong>
                <small>profesor · asesor</small>
              </div>

              <div className="methods19-spiral-node methods19-spiral-node--4">
                <span>04</span>
                <strong>Comunidad</strong>
                <small>congreso · coloquio</small>
              </div>

              <div className="methods19-spiral-node methods19-spiral-node--5">
                <span>05</span>
                <strong>Conocimiento</strong>
                <small>tesis · teoría</small>
              </div>

              <div className="methods19-spiral-arrow" aria-hidden="true">
                ↻
              </div>
            </div>

            <div className="methods-thesis methods-thesis--small">
              <span>Movimiento real</span>
              <p>
                idea → escritura → diálogo → corrección → especialista →
                corrección → comunidad → crítica → reescritura
              </p>
            </div>

            <div className="methods-margin-note">
              <span>Regla metodológica</span>
              <p>
                Todo lo que pienso debe poder quedar escrito y poder ser dicho.
              </p>
            </div>
          </section>

          <section id="teoria-datos" className="methods-section">
            <Heading number="06" eyebrow="Disiunctio">
              Fernando Leal: teoría y datos
            </Heading>

            <p>
              El problema aparece cuando un trabajo tiene un bloque teórico
              lleno de autores y citas, y otro bloque de datos o experiencia,
              pero no explica qué relación existe entre ambos.
            </p>

            <div className="methods19-theory-split">
              <article>
                <span>TEORÍA</span>
                <strong>autores · conceptos · citas</strong>
              </article>

              <div className="methods19-theory-gap">
                <strong>✕</strong>
                <span>disociación</span>
              </div>

              <article>
                <span>DATOS / EXPERIENCIA</span>
                <strong>hechos · casos · fenómenos</strong>
              </article>
            </div>

            <div className="methods19-theory-link">
              <div>
                <span>Teoría</span>
                <strong>interpreta el fenómeno</strong>
              </div>

              <b>⇄</b>

              <div>
                <span>Fenómeno</span>
                <strong>revisa la teoría</strong>
              </div>
            </div>
          </section>

          <section id="teoria" className="methods-section">
            <Heading number="07" eyebrow="Theoria">
              ¿Qué es una teoría?
            </Heading>

            <div className="methods-protocol-quote">
              <small>Definición trabajada en clase</small>
              <strong>
                Una teoría es un conjunto de proposiciones claras, precisas y
                bien encadenadas lógicamente que pretenden describir y explicar
                un conjunto de fenómenos.
              </strong>
            </div>

            <div className="methods-method-cards">
              <div>
                <span>I</span>
                <h3>Claras</h3>
                <p>Debe poder saberse exactamente qué se está afirmando.</p>
              </div>

              <div>
                <span>II</span>
                <h3>Precisas</h3>
                <p>Los conceptos tienen que estar delimitados.</p>
              </div>

              <div>
                <span>III</span>
                <h3>Encadenadas</h3>
                <p>Las proposiciones forman una estructura lógica.</p>
              </div>
            </div>

            <div className="methods19-schema methods19-schema--three">
              <div>
                <span>01</span>
                <strong>Hipótesis</strong>
                <p>Explicación provisional.</p>
              </div>

              <b>→</b>

              <div>
                <span>02</span>
                <strong>Contrastación</strong>
                <p>Objeto, razones, contraejemplos.</p>
              </div>

              <b>→</b>

              <div>
                <span>03</span>
                <strong>Tesis</strong>
                <p>Posición justificable.</p>
              </div>
            </div>
          </section>

          <section id="bacon" className="methods-section">
            <Heading number="08" eyebrow="Inductio">
              Bacon: crítica, tablas y construcción
            </Heading>

            <div className="methods-structure-pair">
              <div>
                <small>Momento crítico</small>
                <strong>Los ídolos</strong>
                <p>
                  Detectar prejuicios, hábitos y proyecciones que deforman la
                  investigación.
                </p>
              </div>

              <div>
                <small>Momento constructivo</small>
                <strong>Las tablas</strong>
                <p>
                  Comparar casos para encontrar regularidades y evitar
                  generalizaciones precipitadas.
                </p>
              </div>
            </div>

            <div className="methods19-bacon-grid">
              <article>
                <span>I</span>
                <strong>Presencia</strong>
                <p>¿En qué casos aparece?</p>
              </article>

              <article>
                <span>II</span>
                <strong>Ausencia</strong>
                <p>¿En qué casos semejantes no aparece?</p>
              </article>

              <article>
                <span>III</span>
                <strong>Grados</strong>
                <p>¿Cuándo aumenta o disminuye?</p>
              </article>
            </div>

            <div className="methods19-schema methods19-schema--long">
              {[
                'Fenómeno',
                'Observación',
                'Problematización',
                'Relaciones',
                'Hipótesis',
                'Contrastación',
                'Proposiciones',
                'Teoría',
              ].map((item, index, arr) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                  {index < arr.length - 1 && <b>→</b>}
                </div>
              ))}
            </div>
          </section>

          <section id="lectura" className="methods-section">
            <Heading number="09" eyebrow="Lectio">
              Lectura para la siguiente clase
            </Heading>

            <div className="methods-reading-columns">
              <div>
                <span>Autor y texto</span>
                <strong>Axel Arturo Barceló Aspeitia</strong>
                <strong>Introducción a la investigación filosófica</strong>
              </div>

              <div>
                <span>Extensión</span>
                <strong>pp. 6–22 · obligatorias</strong>
                <strong>continuar hasta p. 31 · si es posible</strong>
              </div>
            </div>

            <div className="methods-margin-note">
              <span>Para el lunes 24 de agosto</span>
              <p>
                No se pidió reporte formal. Hay que leer, tomar notas,
                identificar ideas centrales y llegar preparados para comentar
                la dimensión comunicativa de la investigación filosófica.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="methods-class-footer">
        <Link to="/semestre/5/metodos-de-investigacion">
          ← Métodos de Investigación
        </Link>

        <span>quaestio · scriptura · communicatio</span>

        <span>XIX · VIII · MMXXVI</span>
      </footer>
    </main>
  )
}
