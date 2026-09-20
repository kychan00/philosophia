import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass03.css'

const sections = [
  ['00', 'ruta', 'Ruta de enseñanza'],
  ['01', 'interrelacion', 'Las áreas se retroalimentan'],
  ['02', 'plural', 'Filosofía de las lógicas'],
  ['03', 'demarcacion', 'Problema de demarcación'],
  ['04', 'interpretacion', 'Tres estados de interpretación'],
  ['05', 'lenguaje', 'Lógica y lenguaje natural'],
  ['06', 'metalogica', 'Consistencia y completud'],
  ['07', 'logicismo', 'Frege y el logicismo'],
  ['08', 'russell', 'La paradoja de Russell'],
  ['09', 'godel', 'Gödel y el límite'],
  ['10', 'catalogo', 'Catálogo crítico de lógicas'],
  ['11', 'prueba', 'Prueba de demarcación'],
  ['12', 'cierre', 'Síntesis docente'],
]

const teachingRoute = [
  ['1', 'Interrelación', 'Lo formal y lo filosófico no avanzan como historias separadas: se corrigen, motivan y transforman mutuamente.'],
  ['2', 'Pluralidad', 'Si existen sistemas alternativos consistentes, deja de ser evidente que haya una única lógica universal.'],
  ['3', 'Demarcación', 'La pluralidad fuerza una pregunta conceptual: ¿qué cuenta como lógica y qué queda fuera?'],
  ['4', 'Interpretación', 'La clase propone distinguir sistemas no interpretados, interpretables e interpretados para pensar la generalidad lógica.'],
  ['5', 'Límites', 'Logicismo, Russell y Gödel muestran por qué la búsqueda de una base formal única encuentra dificultades profundas.'],
]

const interpretationStates = [
  {
    id: 'no-interpretado',
    number: 'A',
    title: 'No interpretado',
    status: 'estructura formal vacía',
    formula: '△ → □ → ○',
    explanation:
      'Colección de signos y reglas de manipulación sin una interpretación disponible que permita tomar esos signos como instancias de algo.',
    teaching:
      'La clase lo usa para mostrar que “tener símbolos y reglas” todavía no basta para identificar un sistema como lógica.',
  },
  {
    id: 'interpretable',
    number: 'B',
    title: 'Interpretable',
    status: 'interpretación en potencia',
    formula: 'φ(x) ⇢ múltiples dominios',
    explanation:
      'Sus expresiones y reglas admiten sustituciones e interpretaciones posibles sin quedar fijadas de antemano a un único tema.',
    teaching:
      'Este es el punto fuerte del criterio trabajado: la lógica aspira a relaciones formales generales y no a un dominio temático exclusivo.',
  },
  {
    id: 'interpretado',
    number: 'C',
    title: 'Interpretado',
    status: 'interpretación en acto',
    formula: '1 + 1 = 2',
    explanation:
      'El sistema está fijado a un dominio determinado. La aritmética sirve como ejemplo porque sus signos y reglas están ligados a números.',
    teaching:
      'Ser formal no desaparece, pero estar “casado” con un tema específico presiona la pretensión de generalidad lógica.',
  },
]

const metaProperties = [
  {
    id: 'consistencia',
    mark: '¬(P ∧ ¬P)',
    title: 'Consistencia',
    question: '¿Puede el sistema derivar una contradicción?',
    explanation:
      'En los términos generales usados en clase, un sistema es consistente cuando no permite obtener dentro de él tanto P como ¬P.',
  },
  {
    id: 'completud',
    mark: '⊨ φ ⇒ ⊢ φ',
    title: 'Completud',
    question: '¿Toda verdad lógica expresable puede derivarse?',
    explanation:
      'La formulación introductoria de la sesión: toda verdad lógica que pueda expresarse en el sistema debería ser derivable desde sus principios y reglas.',
  },
]

const logicFamilies = [
  {
    id: 'tradicional',
    name: 'Tradicional',
    kind: 'Aristotélica',
    mark: 'A',
    description: 'Silogística y tradición aristotélica, distinguida en clase de la lógica clásica moderna.',
    pressure: '¿Conviene llamarla “clásica” si ese término se reserva técnicamente para la tradición moderna?',
  },
  {
    id: 'clasica',
    name: 'Clásica',
    kind: 'Proposicional + predicados',
    mark: '⊢',
    description: 'Marco moderno asociado históricamente con Frege–Russell y usado como referencia para comparar otras lógicas.',
    pressure: 'Funciona como base de comparación, no como garantía automática de que sea la única lógica posible.',
  },
  {
    id: 'modales',
    name: 'Extendidas',
    kind: 'Modal · deóntica · temporal · epistémica · preferencia',
    mark: '□',
    description: 'Añaden operadores o vocabulario especializado sobre una base clásica.',
    pressure: 'Si una extensión se liga a un tema —por ejemplo saber o creer—, ¿conserva la generalidad esperada de lo lógico?',
  },
  {
    id: 'difusa',
    name: 'Difusa',
    kind: 'Grados de verdad',
    mark: '≈',
    description: 'Modela grados entre verdadero y falso.',
    pressure: '¿Cómo deben entenderse verdad y validez cuando ya no funcionan sólo de modo bivalente?',
  },
  {
    id: 'plurivalente',
    name: 'Plurivalente',
    kind: 'Tres o más valores',
    mark: 'Ⅲ',
    description: 'Incluye sistemas trivalentes y multivalentes, mencionándose a Łukasiewicz como ejemplo histórico.',
    pressure: 'La consistencia técnica del sistema no resuelve por sí sola qué significan filosóficamente sus valores.',
  },
  {
    id: 'intuicionista',
    name: 'Intuicionista',
    kind: 'Exigencia constructiva',
    mark: '¬¬',
    description: 'Cuestiona o restringe principios clásicos y exige un vínculo más fuerte con la construcción de pruebas.',
    pressure: '¿Modificar una regla clásica produce otra lógica legítima o un sistema formal de otro tipo?',
  },
  {
    id: 'cuantica',
    name: 'Cuántica',
    kind: 'Comportamiento no clásico',
    mark: 'ψ',
    description: 'Mencionada como familia con conductas formales no clásicas.',
    pressure: '¿Su vínculo con un dominio físico específico afecta la generalidad requerida para llamarla lógica?',
  },
  {
    id: 'relevancia',
    name: 'Relevancia',
    kind: 'Crítica del condicional material',
    mark: '⇒',
    description: 'Surge de dudas filosóficas sobre consecuencias permitidas por la lógica estándar.',
    pressure: 'Aquí se ve directamente cómo una crítica filosófica puede motivar un nuevo formalismo.',
  },
  {
    id: 'imperativas',
    name: 'Imperativas / interrogativas',
    kind: 'Órdenes y preguntas',
    mark: '?',
    description: 'La sesión las menciona como casos especialmente problemáticos para la demarcación.',
    pressure: 'Si sus expresiones no son verdaderas ni falsas del modo usual, ¿cómo se define valoración y validez?',
  },
  {
    id: 'libre',
    name: 'Libre / inquisitiva',
    kind: 'Casos mencionados',
    mark: '◇',
    description: 'Aparecen en el catálogo de la clase acompañadas de dudas sobre su formalidad o estatuto.',
    pressure: 'El hecho de que un sistema sea útil no decide todavía si pertenece al concepto estricto de lógica formal.',
  },
]

const demarcationTests = [
  {
    id: 'formalidad',
    number: '01',
    title: 'Formalidad',
    question: '¿Hay reglas suficientemente claras de formación, derivación y validez?',
    warning: 'Si no hay reglas claras, la clase pregunta cómo podría llamarse formal al sistema.',
  },
  {
    id: 'interpretabilidad',
    number: '02',
    title: 'Interpretabilidad',
    question: '¿El sistema puede recibir distintas interpretaciones sin quedar fijado a una sola?',
    warning: 'Un sistema meramente no interpretado es vacío; uno fijado a un tema pierde parte de la generalidad buscada.',
  },
  {
    id: 'generalidad',
    number: '03',
    title: 'Generalidad',
    question: '¿Modela relaciones formales generales o está “casado” con un dominio?',
    warning: 'La aritmética funciona como ejemplo de sistema formal ligado específicamente a números.',
  },
  {
    id: 'valoracion',
    number: '04',
    title: 'Valoración',
    question: '¿Puede explicarse cómo se evalúan las expresiones para hablar de validez?',
    warning: 'Imperativos y preguntas presionan este criterio porque su relación con verdad y falsedad no es inmediata.',
  },
]

const goToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function SectionTitle({ number, eyebrow, children }) {
  return (
    <div className="flc1-section-title">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function PhilosophyLogicClass03() {
  const [interpretationId, setInterpretationId] = useState('interpretable')
  const [metaId, setMetaId] = useState('consistencia')
  const [logicId, setLogicId] = useState('modales')
  const [testId, setTestId] = useState('interpretabilidad')

  const activeInterpretation = useMemo(
    () => interpretationStates.find((item) => item.id === interpretationId) || interpretationStates[1],
    [interpretationId],
  )

  const activeMeta = useMemo(
    () => metaProperties.find((item) => item.id === metaId) || metaProperties[0],
    [metaId],
  )

  const activeLogic = useMemo(
    () => logicFamilies.find((item) => item.id === logicId) || logicFamilies[2],
    [logicId],
  )

  const activeTest = useMemo(
    () => demarcationTests.find((item) => item.id === testId) || demarcationTests[1],
    [testId],
  )

  return (
    <main className="flc1-page flc3-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>26 · I · 2026</span>
      </nav>

      <header className="flc1-hero flc3-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>⊢?</span><span>∀</span><span>□</span><span>¬</span><span>∴</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 03</p>
          <h1>
            Pluralidad de lógicas,
            <em>demarcación y logicismo</em>
          </h1>
          <p className="flc1-lead">
            La pluralidad de sistemas transforma el problema: ya no basta con
            describir distintas lógicas. Hay que explicar qué rasgos permiten
            reconocer a un sistema como lógico, cómo se relaciona con la
            interpretación y qué límites encuentra el ideal de fundamentar todo
            lo formal desde una base única.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>
            Si muchos sistemas reclaman el nombre de “lógica”, ¿con qué criterio
            distinguimos una lógica de un sistema formal que no lo es?
          </strong>
          <small>Pluralidad → demarcación → interpretación → límites del fundamento.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN III</p>
          {sections.map(([number, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{number}</span>
              {label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              El hilo que permite enseñar la sesión como un solo argumento
            </SectionTitle>

            <div className="flc3-route">
              {teachingRoute.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc3-master-line">
              <span>DESARROLLO FORMAL</span>
              <b>↔</b>
              <span>CRÍTICA FILOSÓFICA</span>
              <b>→</b>
              <span>PLURALIDAD</span>
              <b>→</b>
              <span>DEMARCACIÓN</span>
            </div>
          </section>

          <section id="interrelacion" className="flc1-section">
            <SectionTitle number="01" eyebrow="Mutua provocatio">
              Las áreas de la lógica no avanzan como líneas independientes
            </SectionTitle>

            <div className="flc3-feedback">
              <article>
                <span>FORMALISMO</span>
                <h3>Nuevos sistemas</h3>
                <p>
                  Extensiones y modificaciones del cálculo clásico generan
                  nuevas posibilidades técnicas.
                </p>
              </article>

              <div className="flc3-feedback-center">
                <span>↺</span>
                <small>retroalimentación</small>
              </div>

              <article>
                <span>FILOSOFÍA</span>
                <h3>Nuevas críticas</h3>
                <p>
                  Dudas sobre bivalencia, implicación, cuantificación o verdad
                  pueden motivar nuevas construcciones formales.
                </p>
              </article>
            </div>
            <LogicFigureNote
              noteId="c03-feedback"
              what="Representa la relación de retroalimentación entre desarrollo técnico, aplicaciones filosóficas, metalógica y límites de formalización."
              how="No lo lea como una línea que sólo avanza en una dirección. Las flechas muestran que un cambio en un área puede obligar a revisar las demás: nuevas lógicas generan nuevas preguntas metalógicas y problemas filosóficos pueden motivar nuevos sistemas."
              why="Está aquí para mostrar que las cuatro áreas de la materia no son capítulos aislados. La sesión las presenta como un campo en interacción."
              takeaway="La filosofía de la lógica trabaja mejor como red de problemas que como lista de temas independientes."
            />

            <div className="flc3-examples">
              <article>
                <strong>Condicional material</strong>
                <p>Su crítica alimenta propuestas como la lógica de la relevancia.</p>
              </article>
              <article>
                <strong>Modalidad</strong>
                <p>El desarrollo modal sirve de modelo para familias deónticas, temporales y otras.</p>
              </article>
              <article>
                <strong>Multivalencia</strong>
                <p>La reflexión sobre varios valores conduce también a respuestas interpretativas como las supervaluaciones.</p>
              </article>
            </div>
          </section>

          <section id="plural" className="flc1-section">
            <SectionTitle number="02" eyebrow="Singularis → pluralis">
              De “filosofía de la lógica” a “filosofía de las lógicas”
            </SectionTitle>

            <div className="flc3-plurality">
              <article>
                <span>IDEAL INICIAL</span>
                <strong>UNA LÓGICA</strong>
                <p>Procedimiento racional universal.</p>
              </article>
              <div>
                <span>Łukasiewicz</span>
                <b>→</b>
                <small>sistemas alternativos consistentes</small>
              </div>
              <article className="is-plural">
                <span>CAMBIO DE PERSPECTIVA</span>
                <strong>LAS LÓGICAS</strong>
                <p>Pluralidad de sistemas que reclaman estatuto lógico.</p>
              </article>
            </div>

            <div className="flc1-definition">
              <span>CONSECUENCIA FILOSÓFICA</span>
              <p>
                Una vez que existen alternativas consistentes, ya no puede
                suponerse sin más que “lógica” designa un único sistema. La
                pluralidad hace inevitable preguntar por criterios de identidad
                y demarcación.
              </p>
            </div>
          </section>

          <section id="demarcacion" className="flc1-section">
            <SectionTitle number="03" eyebrow="Quaestio prima">
              ¿Qué cuenta como sistema lógico?
            </SectionTitle>

            <div className="flc3-demarcation-core">
              <div className="flc3-core-question">?</div>
              <div>
                <p>PROBLEMA DE DEMARCACIÓN</p>
                <h3>
                  ¿Qué características debe poseer un sistema formal para ser
                  considerado legítimamente lógico?
                </h3>
                <p>
                  La clase no ofrece todavía una definición final. Trabaja un
                  criterio fuerte: la lógica debería captar relaciones formales
                  generales y no quedar fijada a un dominio temático específico.
                </p>
              </div>
            </div>
            <LogicFigureNote
              noteId="c03-demarcation"
              what="Coloca la neutralidad tópica en el centro del intento de distinguir lógica de otros sistemas formales."
              how="El núcleo del gráfico debe leerse como pregunta de filtro: ¿el sistema está ligado desde el inicio a números, espacio u otro dominio, o puede recibir interpretaciones distintas sin estar casado con un tema?"
              why="La figura está aquí porque formalidad por sí sola resultó insuficiente. La clase necesita un criterio adicional para explicar qué hace especial a un sistema lógico."
              takeaway="Neutralidad tópica es una propuesta de demarcación trabajada en la sesión, no una definición final incuestionable."
            />

            <div className="flc3-arithmetic">
              <article>
                <span>ARITMÉTICA</span>
                <strong>formal ✓</strong>
                <strong>lógica ?</strong>
              </article>
              <div>→</div>
              <article>
                <span>RAZÓN DEL EJEMPLO</span>
                <p>
                  Está “casada” con números. La clase usa ese carácter temático
                  para contrastarla con la generalidad que se espera de un
                  sistema lógico.
                </p>
              </article>
            </div>
          </section>

          <section id="interpretacion" className="flc1-section">
            <SectionTitle number="04" eyebrow="Potentia / actus">
              No interpretado, interpretable e interpretado
            </SectionTitle>

            <div className="flc3-interpret-tabs">
              {interpretationStates.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === interpretationId ? 'is-active' : ''}
                  onClick={() => setInterpretationId(item.id)}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <small>{item.status}</small>
                </button>
              ))}
            </div>

            <div className="flc3-interpret-reader">
              <div>
                <span>{activeInterpretation.status}</span>
                <code>{activeInterpretation.formula}</code>
              </div>
              <div>
                <h3>{activeInterpretation.title}</h3>
                <p>{activeInterpretation.explanation}</p>
                <strong>{activeInterpretation.teaching}</strong>
              </div>
            </div>

            <div className="flc3-interpret-spectrum">
              <span>VACÍO FORMAL</span>
              <b>→</b>
              <span>INTERPRETABLE</span>
              <b>→</b>
              <span>TEMA FIJO</span>
            </div>
            <LogicFigureNote
              noteId="c03-spectrum"
              what="Muestra un continuo entre vacío formal, posibilidad de interpretación y fijación temática."
              how="Avance de izquierda a derecha preguntando cuánto contenido está determinado de antemano. Un sistema lógico, según la tesis de la clase, debe poder interpretarse sin quedar fijado desde su construcción a un único tema."
              why="Está aquí para evitar una falsa alternativa entre “sin significado” y “totalmente temático”. La interpretación puede añadirse posteriormente sin que el sistema pierda su generalidad inicial."
              takeaway="La clave no es impedir toda interpretación, sino distinguir entre ser interpretable y nacer ya comprometido con un dominio concreto."
            />

            <div className="flc3-thesis">
              <span>TESIS TRABAJADA EN CLASE</span>
              <strong>
                Un sistema lógico debe ser interpretable sin estar casado con
                un tema específico.
              </strong>
              <p>
                Se trata de una propuesta de demarcación discutida en la sesión,
                no de una definición definitiva cerrada por el curso.
              </p>
            </div>
          </section>

          <section id="lenguaje" className="flc1-section">
            <SectionTitle number="05" eyebrow="Lingua naturalis">
              ¿La formalización todavía analiza lenguaje y pensamiento?
            </SectionTitle>

            <div className="flc3-language">
              <article>
                <span>PROBLEMA ORIGINAL</span>
                <h3>Ambigüedad e intertraducción</h3>
                <p>
                  La formalización promete reducir desacuerdos producidos por
                  diferencias lingüísticas e interpretativas, como ocurre en el
                  ideal de un lenguaje matemático compartido.
                </p>
              </article>
              <div className="flc3-language-arrow">→</div>
              <article className="is-formal">
                <span>IDEAL FORMAL</span>
                <h3>Lenguaje común</h3>
                <p>
                  Símbolos y reglas buscan independencia relativa respecto de
                  idiomas naturales particulares.
                </p>
              </article>
              <div className="flc3-language-arrow">→</div>
              <article className="is-question">
                <span>RIESGO FILOSÓFICO</span>
                <h3>¿Juego autosuficiente?</h3>
                <p>
                  Cuanto más técnico se vuelve el sistema, más urgente es
                  preguntar si conserva conexión con razonamiento y lenguaje.
                </p>
              </article>
            </div>
          </section>

          <section id="metalogica" className="flc1-section">
            <SectionTitle number="06" eyebrow="Systema de systemate">
              Consistencia y completud
            </SectionTitle>

            <div className="flc3-meta-tabs">
              {metaProperties.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === metaId ? 'is-active' : ''}
                  onClick={() => setMetaId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc3-meta-reader">
              <div className="flc3-meta-mark">{activeMeta.mark}</div>
              <div>
                <p>PROPIEDAD METALÓGICA</p>
                <h3>{activeMeta.question}</h3>
                <p>{activeMeta.explanation}</p>
              </div>
            </div>

            <div className="flc3-logic-meta">
              <article>
                <span>LÓGICA</span>
                <strong>trabaja con el cálculo</strong>
              </article>
              <b>≠</b>
              <article>
                <span>METALÓGICA</span>
                <strong>estudia propiedades del cálculo</strong>
              </article>
            </div>
            <LogicFigureNote
              noteId="c03-logicmeta"
              what="Contrasta lógica y metalógica como dos niveles de trabajo sobre el mismo cálculo."
              how="La lógica opera con fórmulas y derivaciones dentro del sistema. La metalógica toma ese sistema como objeto y pregunta por propiedades como consistencia o completitud."
              why="Está aquí porque la sesión avanza de construir sistemas a evaluarlos. Sin el cambio de nivel, las propiedades metalógicas se confundirían con reglas internas del cálculo."
              takeaway="Trabajar “en” un sistema y estudiar “el” sistema son actividades distintas aunque estén estrechamente relacionadas."
            />
          </section>

          <section id="logicismo" className="flc1-section">
            <SectionTitle number="07" eyebrow="Programma logicisticum">
              ¿Puede la matemática reducirse a la lógica?
            </SectionTitle>

            <div className="flc3-logicism-line">
              <article>
                <span>1879</span>
                <strong>Frege</strong>
                <p>Conceptografía</p>
              </article>
              <b>→</b>
              <article>
                <span>1884</span>
                <strong>Frege</strong>
                <p>Fundamentos de la aritmética</p>
              </article>
              <b>→</b>
              <article>
                <span>PROGRAMA</span>
                <strong>Logicismo</strong>
                <p>Fundamentar la aritmética mediante la lógica.</p>
              </article>
            </div>
            <LogicFigureNote
              noteId="c03-logicism"
              what="Resume la dirección histórica del programa logicista atribuido a Frege: construir herramientas lógicas y utilizarlas para fundamentar la aritmética."
              how="La línea conecta obras y programa. No pretende resumir toda la filosofía de Frege; muestra el hilo que interesa a esta sesión: de la formalización lógica al proyecto de fundamentación matemática."
              why="Está aquí porque la demarcación entre lógica y matemática se vuelve filosóficamente decisiva cuando alguien pretende reducir una a la otra."
              takeaway="El logicismo transforma una cuestión técnica de formalización en una tesis sobre el fundamento de la matemática."
            />

            <div className="flc3-foundation">
              <span>¿POR QUÉ IMPORTABA?</span>
              <div>
                <p>¿Las matemáticas dependen de la psicología humana?</p>
                <p>¿Son generalizaciones de la experiencia?</p>
                <p>¿Son simples consensos históricos?</p>
              </div>
              <strong>
                Si la lógica ofrecía una base firme, reducir la matemática a ella
                prometía transferirle esa firmeza.
              </strong>
            </div>
          </section>

          <section id="russell" className="flc1-section">
            <SectionTitle number="08" eyebrow="Paradoxum">
              Russell: cuando la fundamentación amenaza con volverse inconsistente
            </SectionTitle>

            <div className="flc3-russell">
              <div className="flc3-bag">
                <span>BOLSA DE BOLSAS</span>
                <div className="flc3-bag-shape">
                  <span>A</span>
                  <span>B</span>
                  <span>?</span>
                </div>
              </div>

              <div className="flc3-russell-copy">
                <p>EXPLICACIÓN INTUITIVA DE LA SESIÓN</p>
                <h3>
                  ¿Qué ocurre cuando una colección se define mediante una
                  condición que termina aplicándose a sí misma?
                </h3>
                <p>
                  La clase presenta informalmente la paradoja mediante una
                  “bolsa de bolsas” y la idea de conjuntos que no se contienen
                  a sí mismos. La circularidad compromete la consistencia que el
                  programa necesitaba para fundamentar la matemática.
                </p>
              </div>
            </div>
            <LogicFigureNote
              noteId="c03-russell"
              what="Ofrece una representación intuitiva del problema de autorreferencia presentado en clase mediante la imagen de una “bolsa de bolsas”."
              how="La bolsa no es la paradoja en su formulación técnica; es una ayuda visual para preguntar qué ocurre cuando una condición de pertenencia termina aplicándose a la propia colección que define."
              why="Está aquí para mostrar por qué la consistencia importa filosóficamente: un fundamento que permite contradicción pierde la capacidad justificatoria que el programa logicista buscaba."
              takeaway="Use el dibujo como intuición inicial sobre circularidad y autorreferencia, no como sustituto de una demostración formal de la paradoja."
            />

            <div className="flc3-russell-impact">
              <span>SI EL FUNDAMENTO ES INCONSISTENTE</span>
              <b>→</b>
              <strong>pierde su fuerza justificatoria</strong>
            </div>
          </section>

          <section id="godel" className="flc1-section">
            <SectionTitle number="09" eyebrow="Limes">
              Gödel y el límite del ideal fuerte de reducción
            </SectionTitle>

            <div className="flc3-godel">
              <div>
                <span>SISTEMA SUFICIENTEMENTE RICO</span>
                <strong>aritmética</strong>
              </div>
              <b>→</b>
              <div className="is-limit">
                <span>LÍMITE INTRODUCTORIO PRESENTADO</span>
                <strong>
                  habrá verdades aritméticas que no se deriven de un conjunto
                  fijo de principios
                </strong>
              </div>
            </div>
            <LogicFigureNote
              noteId="c03-godel"
              what="Representa el límite introductorio que la sesión asocia a sistemas suficientemente ricos para expresar aritmética."
              how="La flecha va de un sistema aritmético rico a la afirmación de que existirán verdades que no se obtienen de un conjunto fijo de principios en el sentido explicado por el curso. El cuadro resume una consecuencia, no la prueba técnica."
              why="Está aquí para mostrar cómo un resultado metalógico puede debilitar un ideal filosófico de fundamentación total."
              takeaway="La lección de esta sesión es filosófica e introductoria: Gödel aparece como límite del ideal fuerte de reducción, no como teorema demostrado paso a paso."
            />

            <div className="flc3-godel-caution">
              <strong>IMPORTANTE PARA ENSEÑAR ESTA SESIÓN</strong>
              <p>
                Aquí Gödel aparece en versión introductoria y como consecuencia
                filosófica para el logicismo. La clase no desarrolla una prueba
                técnica de los teoremas de incompletud.
              </p>
            </div>

            <div className="flc3-unification">
              <span>IDEAL FUERTE</span>
              <strong>una base única para todo lo formal</strong>
              <b>⇢</b>
              <span>SE DEBILITA</span>
            </div>
          </section>

          <section id="catalogo" className="flc1-section">
            <SectionTitle number="10" eyebrow="Catalogus criticus">
              Un catálogo de lógicas que vuelve más difícil la demarcación
            </SectionTitle>

            <div className="flc3-family-grid">
              {logicFamilies.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === logicId ? 'is-active' : ''}
                  onClick={() => setLogicId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.name}</strong>
                  <small>{item.kind}</small>
                </button>
              ))}
            </div>
            <LogicFigureNote
              noteId="c03-families"
              what="Presenta varias familias de lógicas para poner a prueba el criterio de demarcación."
              how="Seleccione cada familia preguntando qué cambia respecto de la lógica clásica: operadores, valores, principios o reglas. El lector no debe memorizar sólo nombres, sino localizar la modificación estructural."
              why="Está aquí porque la pluralidad de sistemas vuelve más difícil decir qué tienen todos en común y qué justifica conservar la palabra “lógica”."
              takeaway="El catálogo es una herramienta crítica: cada familia ejerce una presión distinta sobre cualquier definición demasiado estrecha de lógica."
            />

            <div className="flc3-family-reader">
              <div>
                <span>{activeLogic.mark}</span>
                <p>{activeLogic.kind}</p>
                <h3>{activeLogic.name}</h3>
              </div>
              <div>
                <p>{activeLogic.description}</p>
                <strong>{activeLogic.pressure}</strong>
              </div>
            </div>

            <p className="flc3-catalogue-note">
              El objetivo de esta sección no es declarar cuáles “sí” o “no” son
              lógicas. La propia sesión usa el catálogo para aumentar la presión
              sobre el problema de demarcación.
            </p>
          </section>

          <section id="prueba" className="flc1-section">
            <SectionTitle number="11" eyebrow="Laboratorium">
              Una prueba de demarcación construida con las preguntas de la clase
            </SectionTitle>

            <div className="flc3-test-tabs">
              {demarcationTests.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === testId ? 'is-active' : ''}
                  onClick={() => setTestId(item.id)}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc3-test-reader">
              <div>
                <span>CRITERIO EN DISCUSIÓN</span>
                <h3>{activeTest.question}</h3>
              </div>
              <p>{activeTest.warning}</p>
            </div>

            <div className="flc3-test-warning">
              <span>NO ES UN ALGORITMO DEFINITIVO</span>
              <p>
                Estos criterios sistematizan las tensiones trabajadas por el
                profesor. La clase termina dejando abierta la demarcación para
                continuarla, no ofreciendo una definición final cerrada.
              </p>
            </div>
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="12" eyebrow="Ad usum futurum">
              Síntesis para volver a enseñar esta clase dentro de años
            </SectionTitle>

            <div className="flc3-summary">
              <article>
                <span>IDEA 1</span>
                <h3>Pluralidad y demarcación son inseparables</h3>
                <p>
                  Sólo cuando varias familias reclaman el título de lógica se
                  vuelve urgente decir qué significa pertenecer a esa clase.
                </p>
              </article>
              <article>
                <span>IDEA 2</span>
                <h3>La interpretabilidad aparece como criterio fuerte</h3>
                <p>
                  Lo lógico debe poder interpretarse sin quedar fijado a un único
                  contenido temático, según la línea trabajada en la sesión.
                </p>
              </article>
              <article>
                <span>IDEA 3</span>
                <h3>Fundamentar exige consistencia y encuentra límites</h3>
                <p>
                  Russell muestra el peligro de la inconsistencia; Gödel debilita
                  la ambición de una reducción total desde una base fija.
                </p>
              </article>
            </div>

            <div className="flc3-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA CLASE SIN MIRAR LOS APUNTES</span>
              <ol>
                <li>¿Por qué las innovaciones formales y las críticas filosóficas se retroalimentan?</li>
                <li>¿Por qué la pluralidad obliga a hablar de “filosofía de las lógicas”?</li>
                <li>¿Qué diferencia hay entre un sistema no interpretado, uno interpretable y uno interpretado?</li>
                <li>¿Por qué la aritmética funciona como ejemplo de sistema formal que no cuenta automáticamente como lógica?</li>
                <li>¿Qué diferencia hay entre consistencia y completud en la explicación introductoria de la sesión?</li>
                <li>¿Qué problema pretendía resolver el logicismo?</li>
                <li>¿Por qué Russell amenaza la fuerza justificatoria del programa?</li>
                <li>¿Qué límite atribuye la clase a Gödel y qué NO se demuestra todavía?</li>
                <li>¿Qué dudas producen las lógicas epistémicas, imperativas o interrogativas para la demarcación?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Continuidad</strong>
              <p>
                La sesión termina dejando abierto el problema de demarcación para
                continuar el miércoles. No se fija aquí una entrega concreta con
                fecha, por lo que esta clase no crea una tarea nueva.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 03 · 26 enero 2026</span>
      </footer>
    </main>
  )
}
