import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'mapa', 'Mapa general'],
  ['01', 'disciplina', 'Disciplina y cuatro dominios'],
  ['02', 'objeto', 'Construcción progresiva del objeto'],
  ['03', 'disciplinas', 'Multi · inter · transdisciplina'],
  ['04', 'problema', 'Problema y problemática'],
  ['05', 'academico', 'Trabajo y discurso académico'],
  ['06', 'teoria', 'Investigación teórica y práctica'],
  ['07', 'metodo', 'Teoría, realidad y diseño metodológico'],
  ['08', 'pobreza', 'Pobreza, desarrollo y capacidades'],
  ['09', 'protocolo', 'Del campo al protocolo'],
  ['10', 'tarea', 'Preparación para la siguiente clase'],
]

const domains = [
  {
    id: 'material',
    title: 'Dominio material',
    question: '¿Qué estudia?',
    text: 'Conjunto de objetos o fenómenos sobre los cuales recae la investigación de una disciplina.',
  },
  {
    id: 'conceptual',
    title: 'Dominio conceptual',
    question: '¿Con qué lo comprende?',
    text: 'Conceptos, teorías y conocimientos sistematizados que permiten organizar intelectualmente el objeto.',
  },
  {
    id: 'interno',
    title: 'Epistemológico interno',
    question: '¿Cómo conoce?',
    text: 'Fundamentos, criterios, procedimientos, conceptos y límites mediante los cuales una disciplina produce conocimiento.',
  },
  {
    id: 'derivado',
    title: 'Epistemológico derivado',
    question: '¿Qué ocurre al comunicarlo?',
    text: 'El conocimiento entra al espacio académico: puede discutirse, corregirse, reformularse, ampliarse y contrastarse.',
  },
]

const relationLevels = [
  {
    id: 'multi',
    label: 'Multidisciplinariedad',
    short: 'intercambio',
    thesis:
      'Varias disciplinas trabajan sobre un problema y aportan información o recursos, pero sus fronteras permanecen relativamente claras.',
    formula: 'disciplina A + disciplina B + disciplina C',
  },
  {
    id: 'inter',
    label: 'Interdisciplinariedad',
    short: 'interacción',
    thesis:
      'Conceptos, técnicas, enfoques, problemas y procedimientos entran en contacto y pueden transformarse mutuamente.',
    formula: 'A ↔ B ↔ C',
  },
  {
    id: 'trans',
    label: 'Transdisciplinariedad',
    short: 'integración',
    thesis:
      'Los vínculos se organizan dentro de una comprensión más general que intenta superar fronteras disciplinares rígidas.',
    formula: '(A + B + C) → sistema integrado',
  },
]

const academicTraits = [
  ['Estructura formal', 'Cada género —ensayo, tesis, monografía, artículo o protocolo— posee convenciones propias.'],
  ['Organización lógica', 'Las afirmaciones deben formar secuencias de premisas, inferencias y conclusiones.'],
  ['Actitud cognitiva', 'La mirada académica pregunta por causas, condiciones, estructuras, propiedades y relaciones.'],
  ['Posición del investigador', 'El discurso no puede reducirse a una opinión personal inmediata.'],
  ['Fundamentación', 'Argumentos, evidencia, referencias y especialistas sostienen lo afirmado.'],
]

const protocolSteps = [
  ['Campo disciplinar', 'Filosofía / área general de conocimiento'],
  ['Área temática', 'Zona más acotada dentro del campo'],
  ['Tema general', 'Asunto amplio todavía no investigable'],
  ['Delimitación', 'Recorte por relación, contexto, población, periodo o enfoque'],
  ['Tema específico', 'Formulación ya mucho más manejable'],
  ['Objeto de estudio', 'Aquello que efectivamente será construido e investigado'],
  ['Problema', 'Pregunta o dificultad específica que exige explicación'],
  ['Problemática', 'Red amplia de relaciones y preguntas alrededor del problema'],
  ['Estado del arte', 'Qué se ha investigado, cómo y con qué resultados'],
  ['Marco teórico', 'Conceptos y teorías con los que se interpretará el objeto'],
  ['Diseño metodológico', 'Cómo se pondrá en relación la teoría con aquello que se estudia'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ number, eyebrow, children }) {
  return (
    <div className="methods-class-heading methods31-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function MethodsClass31Aug() {
  const [domainId, setDomainId] = useState('material')
  const [relationId, setRelationId] = useState('multi')
  const [problemView, setProblemView] = useState('problem')
  const [researchView, setResearchView] = useState('theory')
  const [protocolIndex, setProtocolIndex] = useState(0)

  const domain = useMemo(
    () => domains.find((item) => item.id === domainId) || domains[0],
    [domainId],
  )
  const relation =
    relationLevels.find((item) => item.id === relationId) || relationLevels[0]
  const protocol = protocolSteps[protocolIndex]

  return (
    <main className="methods-class-page methods31-page">
      <nav className="methods-class-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">
          ← Métodos de Investigación
        </Link>
        <Link to="/" className="methods-class-brand">
          Φ · Philosophia
        </Link>
        <span>XXXI · VIII · MMXXVI</span>
      </nav>

      <header className="methods-class-header methods31-header">
        <div className="methods-header-rules" aria-hidden="true" />
        <div className="methods31-ghost" aria-hidden="true">METHODUS</div>
        <div className="methods-header-symbol" aria-hidden="true">§</div>

        <div className="methods31-hero-inner">
          <div>
            <p className="methods-class-kicker">FI104 · Cuarta sesión</p>
            <h1>
              Construir
              <em>el objeto de estudio</em>
            </h1>
            <p className="methods-class-subtitle">
              Disciplina, dominios del conocimiento, circularidad de las ciencias,
              interdisciplinariedad, problema y problemática, discurso académico,
              diseño metodológico y delimitación progresiva de una investigación.
            </p>
          </div>

          <aside className="methods31-hero-card">
            <span>PREGUNTA RECTORA</span>
            <strong>¿Cómo se convierte un tema amplio en un objeto realmente investigable?</strong>
            <div>
              <b>campo</b><i>→</i><b>tema</b><i>→</i><b>delimitación</b><i>→</i>
              <b>problema</b><i>→</i><b>método</b>
            </div>
          </aside>
        </div>

        <div className="methods-header-ornament">☙ ───── § ───── ❧</div>
      </header>

      <div className="methods-class-layout">
        <aside className="methods-index">
          <p>Index inquisitionis</p>
          <nav>
            {sections.map(([number, id, label]) => (
              <button key={id} type="button" onClick={() => goToSection(id)}>
                <span>{number}</span>
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <article className="methods-article">
          <section id="mapa" className="methods-section">
            <Heading number="00" eyebrow="Argumentum">
              El hilo completo de la sesión
            </Heading>

            <div className="methods31-master-flow">
              <span>disciplina</span><b>→</b>
              <span>objeto</span><b>→</b>
              <span>relación entre ciencias</span><b>→</b>
              <span>problema</span><b>→</b>
              <span>problemática</span><b>→</b>
              <span>estado del arte</span><b>→</b>
              <span>marco teórico</span><b>→</b>
              <strong>diseño metodológico</strong>
            </div>

            <div className="methods31-thesis">
              <span>IDEA RECTORA</span>
              <p>
                Investigar no consiste en tomar un objeto ya terminado. El objeto
                se construye progresivamente mediante delimitación conceptual,
                diálogo con otras disciplinas, revisión de conocimiento previo y
                elección de procedimientos adecuados.
              </p>
            </div>
          </section>

          <section id="disciplina" className="methods-section">
            <Heading number="01" eyebrow="Disciplina">
              Una disciplina es un modo sistemático de recortar la realidad
            </Heading>

            <p className="methods31-prose">
              Ninguna disciplina explica la totalidad de la realidad de una sola
              vez. Cada una establece un recorte conforme a su objeto, sus
              exigencias teóricas, su metodología y sus procedimientos. La
              metodología organiza racionalmente ese proceso mediante reglas,
              criterios, instrumentos y secuencias de trabajo.
            </p>

            <div className="methods31-pillars">
              {['orden sistemático', 'rigor operativo', 'coherencia conceptual', 'discusión pública']
                .map((item) => <span key={item}>{item}</span>)}
            </div>

            <h3 className="methods31-subtitle">Los cuatro dominios de una disciplina</h3>
            <div className="methods31-domain-tabs">
              {domains.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={domain.id === item.id ? 'active' : ''}
                  onClick={() => setDomainId(item.id)}
                >
                  <span>{item.question}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <article className="methods31-domain-focus">
              <span>{domain.question}</span>
              <h3>{domain.title}</h3>
              <p>{domain.text}</p>
            </article>
          </section>

          <section id="objeto" className="methods-section">
            <Heading number="02" eyebrow="Constructio obiecti">
              El objeto se construye progresivamente
            </Heading>

            <p className="methods31-prose">
              La sesión utiliza la idea de asimilación y acomodación para mostrar
              que el objeto de conocimiento no aparece completo desde el inicio.
              Se construye una representación, se comunica, recibe crítica, se
              corrige y vuelve a formularse.
            </p>

            <div className="methods31-puzzle">
              <div><span>01</span><strong>PIEZAS</strong><small>datos · conceptos · lecturas</small></div>
              <b>→</b>
              <div><span>02</span><strong>IMAGEN PROVISIONAL</strong><small>primera representación</small></div>
              <b>→</b>
              <div><span>03</span><strong>COMUNICACIÓN</strong><small>otros la examinan</small></div>
              <b>→</b>
              <div className="core"><span>04</span><strong>RECONSTRUCCIÓN</strong><small>el objeto gana precisión</small></div>
            </div>

            <div className="methods31-virtual">
              <span>INTERVENCIÓN · VIRTUALIDAD DEL OBJETO</span>
              <strong>
                Un objeto puede permanecer abierto a distintas actualizaciones y
                soportes; la investigación, de manera análoga, puede reconstruir
                epistemológicamente un mismo fenómeno desde perspectivas distintas.
              </strong>
              <p>
                La conexión útil para metodología es ésta: el objeto no se separa
                de los procesos mediante los cuales lo conceptualizamos,
                comunicamos y volvemos a construir.
              </p>
            </div>

            <div className="methods31-circle">
              <span>construcción</span><b>→</b><span>comunicación</span><b>→</b>
              <span>revisión</span><b>→</b><span>reconstrucción</span><b>↺</b>
            </div>
          </section>

          <section id="disciplinas" className="methods-section">
            <Heading number="03" eyebrow="Circularitas scientiarum">
              Multi, inter y transdisciplinariedad no significan lo mismo
            </Heading>

            <p className="methods31-prose">
              Una sola disciplina difícilmente agota un fenómeno complejo. La
              circularidad de las ciencias describe distintos grados de relación
              entre campos de conocimiento.
            </p>

            <div className="methods31-relation-tabs">
              {relationLevels.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={relation.id === item.id ? 'active' : ''}
                  onClick={() => setRelationId(item.id)}
                >
                  <span>{item.short}</span>
                  <strong>{item.label}</strong>
                </button>
              ))}
            </div>

            <article className="methods31-relation-focus">
              <span>{relation.short}</span>
              <h3>{relation.label}</h3>
              <p>{relation.thesis}</p>
              <div>{relation.formula}</div>
            </article>

            <aside className="methods31-note">
              <strong>Citar otra disciplina no basta para hacer interdisciplinariedad.</strong>
              <p>
                La pregunta decisiva es si ese otro campo interviene realmente en
                la construcción del problema, del objeto, de los conceptos o del
                procedimiento de investigación.
              </p>
            </aside>
          </section>

          <section id="problema" className="methods-section">
            <Heading number="04" eyebrow="Problema · Problematica">
              Delimitar una pregunta dentro de una red más amplia
            </Heading>

            <div className="methods31-toggle">
              <button
                type="button"
                className={problemView === 'problem' ? 'active' : ''}
                onClick={() => setProblemView('problem')}
              >
                Problema
              </button>
              <button
                type="button"
                className={problemView === 'problematica' ? 'active' : ''}
                onClick={() => setProblemView('problematica')}
              >
                Problemática
              </button>
            </div>

            <div className={`methods31-problem ${problemView}`}>
              {problemView === 'problem' ? (
                <>
                  <span>RECORTE INVESTIGABLE</span>
                  <h3>¿Qué aspecto específico voy a investigar?</h3>
                  <p>
                    El problema exige delimitación. Una investigación no puede
                    comenzar pretendiendo resolver de una vez un fenómeno
                    excesivamente amplio.
                  </p>
                </>
              ) : (
                <>
                  <span>RED DE CUESTIONES</span>
                  <h3>¿Qué relaciones, dificultades y preguntas rodean al problema?</h3>
                  <p>
                    La problemática es el horizonte más extenso dentro del cual
                    aparece el problema particular que será investigado.
                  </p>
                </>
              )}
            </div>

            <div className="methods31-problem-map">
              <div className="center">PROBLEMA</div>
              <span>causas</span>
              <span>conceptos</span>
              <span>contexto</span>
              <span>consecuencias</span>
              <span>disciplinas</span>
              <span>debates</span>
              <strong>PROBLEMÁTICA</strong>
            </div>
          </section>

          <section id="academico" className="methods-section">
            <Heading number="05" eyebrow="Opus academicum">
              El trabajo académico demuestra una competencia pública
            </Heading>

            <p className="methods31-prose">
              Un trabajo académico utiliza procedimientos y métodos reconocidos
              por una comunidad. No sólo comunica una opinión: busca demostrar
              competencia dentro de un campo y persuadir a un profesor, comité,
              jurado o comunidad académica mediante un discurso sujeto a reglas.
            </p>

            <div className="methods31-academic-grid">
              {academicTraits.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="methods31-genres">
              {['ensayo', 'tesis', 'monografía', 'artículo', 'protocolo']
                .map((item) => <span key={item}>{item}</span>)}
            </div>
          </section>

          <section id="teoria" className="methods-section">
            <Heading number="06" eyebrow="Theoria · Praxis">
              Investigación teórica e investigación práctica
            </Heading>

            <div className="methods31-toggle">
              <button
                type="button"
                className={researchView === 'theory' ? 'active' : ''}
                onClick={() => setResearchView('theory')}
              >
                Teórica
              </button>
              <button
                type="button"
                className={researchView === 'practice' ? 'active' : ''}
                onClick={() => setResearchView('practice')}
              >
                Práctica
              </button>
            </div>

            <div className={`methods31-research ${researchView}`}>
              {researchView === 'theory' ? (
                <>
                  <span>CONOCER</span>
                  <h3>génesis · fundamentos · estructura · condiciones · funcionamiento</h3>
                  <p>
                    Su finalidad inmediata es intelectual: comprender mejor un
                    aspecto de la realidad.
                  </p>
                </>
              ) : (
                <>
                  <span>INTERVENIR</span>
                  <h3>modificar · orientar · mejorar · reorganizar</h3>
                  <p>
                    Busca incidir sobre fenómenos o prácticas concretas. La ética
                    muestra que la filosofía puede tener consecuencias prácticas
                    aunque no toda investigación filosófica sea aplicada.
                  </p>
                </>
              )}
            </div>

            <div className="methods31-theory-practice">
              <span>TEORÍA</span><b>↔</b><span>REALIDAD</span><b>↔</b><strong>REVISIÓN</strong>
            </div>
          </section>

          <section id="metodo" className="methods-section">
            <Heading number="07" eyebrow="Designatio methodologica">
              El diseño metodológico conecta teoría y experiencia
            </Heading>

            <p className="methods31-prose">
              Una teoría puede ser conceptualmente coherente y, sin embargo,
              encontrar en la realidad resultados que la matizan, contradicen o
              obligan a reformularla. Investigar exige establecer cómo se realizará
              ese contraste.
            </p>

            <div className="methods31-contrast">
              <div><span>TEORÍA</span><strong>hipótesis · conceptos · relaciones</strong></div>
              <b>→</b>
              <div><span>DISEÑO</span><strong>procedimientos · criterios · instrumentos</strong></div>
              <b>→</b>
              <div><span>RESULTADOS</span><strong>evidencia · análisis</strong></div>
              <b>→</b>
              <div className="core"><span>REVISIÓN</span><strong>corregir · matizar · reformular</strong></div>
            </div>

            <h3 className="methods31-subtitle">El estado del arte responde antes de comenzar</h3>
            <div className="methods31-state-art">
              {[
                '¿qué se ha investigado?',
                '¿cómo se ha planteado?',
                '¿qué respuestas existen?',
                '¿qué contradicciones permanecen?',
                '¿qué preguntas nuevas son posibles?',
              ].map((item) => <span key={item}>{item}</span>)}
            </div>
          </section>

          <section id="pobreza" className="methods-section">
            <Heading number="08" eyebrow="Exemplum">
              Pobreza, desarrollo y justicia: un objeto interdisciplinario
            </Heading>

            <p className="methods31-prose">
              El ejemplo de clase muestra cómo política, ética y economía pueden
              intervenir en un mismo objeto. El crecimiento económico de un
              Estado no garantiza por sí solo la desaparición de pobreza,
              desigualdad u opresión.
            </p>

            <div className="methods31-disciplines">
              <article><span>POLÍTICA</span><strong>poder · instituciones · distribución</strong></article>
              <b>+</b>
              <article><span>ÉTICA</span><strong>justicia · dignidad · obligaciones</strong></article>
              <b>+</b>
              <article><span>ECONOMÍA</span><strong>crecimiento · recursos · indicadores</strong></article>
            </div>

            <div className="methods31-pib">
              <span>PIB ↑</span>
              <b>≠</b>
              <strong>BIENESTAR AUTOMÁTICO ↑</strong>
              <p>
                El crecimiento agregado no informa por sí solo qué posibilidades
                reales tienen las personas ni cómo se distribuyen recursos y
                oportunidades.
              </p>
            </div>

            <div className="methods31-capabilities">
              <span>MARTHA NUSSBAUM · CAPACIDADES</span>
              <h3>La pregunta cambia</h3>
              <div>
                <p>¿Cuánto creció la economía?</p>
                <b>↓</b>
                <p>¿Qué puede realmente hacer una persona con los recursos disponibles?</p>
                <b>↓</b>
                <strong>¿Qué condiciones sociales permiten desarrollar una vida?</strong>
              </div>
            </div>
          </section>

          <section id="protocolo" className="methods-section">
            <Heading number="09" eyebrow="Delimitatio">
              Del campo disciplinar al diseño de investigación
            </Heading>

            <div className="methods31-protocol-tabs">
              {protocolSteps.map(([title], index) => (
                <button
                  type="button"
                  key={title}
                  className={protocolIndex === index ? 'active' : ''}
                  onClick={() => setProtocolIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {title}
                </button>
              ))}
            </div>

            <article className="methods31-protocol-focus">
              <span>PASO {String(protocolIndex + 1).padStart(2, '0')}</span>
              <h3>{protocol[0]}</h3>
              <p>{protocol[1]}</p>
              <div className="methods31-progress">
                {protocolSteps.map((_, index) => (
                  <i key={index} className={index <= protocolIndex ? 'active' : ''} />
                ))}
              </div>
            </article>

            <div className="methods31-example">
              <span>EJEMPLO</span>
              <strong>pobreza / poder / desarrollo / justicia distributiva</strong>
              <b>→</b>
              <strong>relación entre poder, capacidades y justicia distributiva</strong>
              <b>→</b>
              <strong>¿por qué crecimiento económico no elimina necesariamente pobreza y desigualdad?</strong>
            </div>

            <div className="methods31-final-sequence">
              <span>campo</span><b>→</b><span>área</span><b>→</b><span>tema</span><b>→</b>
              <span>objeto</span><b>→</b><span>problema</span><b>→</b><span>problemática</span><b>→</b>
              <span>estado del arte</span><b>→</b><span>marco teórico</span><b>→</b>
              <strong>diseño metodológico</strong>
            </div>
          </section>

          <section id="tarea" className="methods-section">
            <Heading number="10" eyebrow="Proxima sessio">
              Preparación para la siguiente clase
            </Heading>

            <div className="methods31-task">
              <div className="methods31-task-date">
                <strong>II</strong>
                <span>IX · MMXXVI</span>
                <small>17:25</small>
              </div>

              <div>
                <span>LECTURA / PREPARACIÓN</span>
                <h3>Capítulos 1–3 · problema y problemática</h3>
                <ul>
                  <li>Leer los capítulos 1, 2 y 3 del texto indicado por el profesor.</li>
                  <li>Identificar qué se entiende por <strong>problema</strong>.</li>
                  <li>Identificar qué se entiende por <strong>problemática</strong>.</li>
                  <li>Explicar la diferencia entre ambas nociones.</li>
                  <li>Revisar la presentación <strong>“Estructura de trabajo”</strong>.</li>
                  <li><strong>No hay reporte de lectura.</strong></li>
                </ul>
              </div>

              <Link to="/tareas">Ver en calendario →</Link>
            </div>

            <div className="methods31-next">
              <span>SIGUIENTE EJERCICIO</span>
              <strong>campo disciplinar → área temática → tema → objeto → problema → problemática</strong>
              <p>
                El propósito es comenzar a construir progresivamente un esbozo de
                protocolo de investigación que pueda desarrollarse durante el semestre.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="methods-footer">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <span>☙ &nbsp; § &nbsp; ❧</span>
        <span>XXXI · VIII · MMXXVI</span>
      </footer>
    </main>
  )
}
