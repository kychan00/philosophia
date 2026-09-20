import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass07.css'

const sections = [
  ['00', 'ruta', 'Ruta de enseñanza'],
  ['01', 'continuidad', 'Continuidad de sistemas'],
  ['02', 'demarcacion', 'Criterio de demarcación'],
  ['03', 'fronteras', 'Casos fronterizos'],
  ['04', 'modal', 'Modal vs epistémica'],
  ['05', 'sintaxis', 'Símbolos y sintaxis'],
  ['06', 'lenguajes', 'Tres niveles de lenguaje'],
  ['07', 'estatus', 'FBF, tautología y teorema'],
  ['08', 'completitud', 'Completitud'],
  ['09', 'frege', 'Sistema atribuido a Frege'],
  ['10', 'reglas', 'Inferencias vs equivalencias'],
  ['11', 'necesidad', 'Necesidad y contingencia'],
  ['12', 'cierre', 'Síntesis docente'],
]

const teachingRoute = [
  ['1', 'Continuidad', 'Un sistema lógico no reemplaza al deductivo y al formal: los contiene y añade nuevas exigencias.'],
  ['2', 'Demarcación', 'La neutralidad tópica y los símbolos no interpretados funcionan como criterio central del curso.'],
  ['3', 'Sintaxis', 'Un sistema lógico clasifica expresiones por su forma antes de introducir una interpretación externa.'],
  ['4', 'Estatus', 'FBF, tautología y teorema responden preguntas distintas y no deben confundirse.'],
  ['5', 'Metanivel', 'La completitud pregunta si todas las verdades lógicas alcanzables por el sistema pueden derivarse.'],
]

const systemLevels = [
  {
    id: 'deductivo',
    roman: 'I',
    title: 'Deductivo',
    adds: 'derivación',
    formula: 'premisas ⟶ consecuencias',
    explanation:
      'El sistema deriva consecuencias mediante reglas. Es el nivel base que permanece presente en los niveles posteriores.',
  },
  {
    id: 'formal',
    roman: 'II',
    title: 'Formal',
    adds: 'lenguaje + gramática',
    formula: 'deductivo + lenguaje formal',
    explanation:
      'Añade símbolos explícitos y reglas de formación que permiten determinar qué expresiones pertenecen al sistema.',
  },
  {
    id: 'logico',
    roman: 'III',
    title: 'Lógico',
    adds: 'neutralidad + no interpretación',
    formula: 'formal + neutralidad tópica',
    explanation:
      'Según el criterio trabajado en el curso, añade neutralidad temática y símbolos sin significado fijado de antemano.',
  },
]

const boundaryCases = [
  {
    id: 'libre',
    title: '“Lógica libre” sin reglas',
    mark: '∅R',
    verdict: 'no satisface el criterio',
    why:
      'Si las reglas no están establecidas, no hay el tipo de sistema formal axiomático-deductivo que exige el curso.',
    nuance:
      'La utilidad de una herramienta no basta por sí sola para clasificarla como lógica en sentido estricto.',
  },
  {
    id: 'inductiva',
    title: '“Lógica inductiva”',
    mark: '↑',
    verdict: 'queda fuera del marco deductivo',
    why:
      'Si las reglas fundamentales no son deductivas, el sistema no pertenece a la familia axiomático-deductiva tal como se está definiendo.',
    nuance:
      'La clase no afirma que la inducción sea inútil; cuestiona su estatuto dentro de esta demarcación concreta.',
  },
  {
    id: 'aritmetica',
    title: 'Aritmética',
    mark: 'ℕ',
    verdict: 'formal, pero tópica',
    why:
      'Sus símbolos y operaciones están ligados desde el inicio al dominio de los números.',
    nuance:
      'Sirve como contraste para mostrar que formalidad y logicidad no son equivalentes.',
  },
  {
    id: 'geometria',
    title: 'Geometría',
    mark: '△',
    verdict: 'formal, pero tópica',
    why:
      'Trabaja con espacio y relaciones espaciales.',
    nuance:
      'La presencia de un dominio específico presiona el criterio de neutralidad tópica.',
  },
]

const modalCases = [
  {
    id: 'modal',
    mark: '□ / ◇',
    title: 'Modal',
    topic: 'necesidad / posibilidad',
    neutral: true,
    explanation:
      'La sesión sostiene de manera preliminar que añadir necesidad y posibilidad puede conservar la neutralidad porque todavía se habla de relaciones entre formas.',
  },
  {
    id: 'epistemica',
    mark: 'KₓP',
    title: 'Epistémica',
    topic: 'saber / creer',
    neutral: false,
    explanation:
      'Al introducir saber, creer o conocer aparecen agentes o sujetos; la interpretación parece entrar desde el inicio y el sistema queda ligado a un dominio.',
  },
  {
    id: 'preferencia',
    mark: '≻',
    title: 'Preferencia',
    topic: 'preferir',
    neutral: false,
    explanation:
      'La preferencia presupone algo o alguien que prefiere. La clase usa este tipo de caso para tensionar la neutralidad tópica.',
  },
]

const languageLevels = [
  {
    id: 'formal',
    number: '01',
    title: 'Formal estricto',
    shorthand: 'sólo primitivos',
    explanation:
      'Sólo se permiten los símbolos primitivos definidos originalmente por el sistema.',
  },
  {
    id: 'sintactico',
    number: '02',
    title: 'Sintáctico',
    shorthand: 'convenciones controladas',
    explanation:
      'Admite abreviaciones o notación de consenso para economizar escritura sin perder el control formal.',
  },
  {
    id: 'informal',
    number: '03',
    title: 'Informal',
    shorthand: 'más abreviaciones',
    explanation:
      'Es más permisivo con convenciones de escritura, por ejemplo reduciendo paréntesis, pero conserva la intención estructural del sistema.',
  },
]

const statusCases = [
  {
    id: 'fbf',
    mark: 'φ',
    title: 'Fórmula bien formada',
    question: '¿cumple la gramática?',
    answer: 'sí / no',
    explanation:
      'La buena formación es una propiedad sintáctica. Una FBF puede ser contingente y no ser verdad lógica.',
  },
  {
    id: 'tautologia',
    mark: '⊨ φ',
    title: 'Tautología / verdad lógica',
    question: '¿es verdadera bajo toda valuación pertinente?',
    answer: 'validez semántica',
    explanation:
      'En lógica clásica, una tautología permanece verdadera bajo todas las valuaciones relevantes.',
  },
  {
    id: 'teorema',
    mark: '⊢ φ',
    title: 'Teorema',
    question: '¿se deriva desde axiomas mediante reglas?',
    answer: 'derivabilidad',
    explanation:
      'En el esquema terminológico usado por el curso, el teorema es una fórmula derivada desde axiomas.',
  },
]

const completenessCases = [
  {
    id: 'completo',
    mark: '⊨φ ⇒ ⊢φ',
    title: 'Sistema completo',
    explanation:
      'Toda verdad lógica del sistema puede derivarse a partir de los axiomas mediante las reglas.',
  },
  {
    id: 'incompleto',
    mark: '⊨φ ∧ ¬⊢φ',
    title: 'Sistema incompleto',
    explanation:
      'Quedan verdades del sistema fuera del alcance derivativo de los axiomas y reglas tal como están planteados.',
  },
]

const fregePrimitives = [
  ['p, q, r…', 'letras proposicionales'],
  ['¬', 'negación'],
  ['∧', 'conjunción'],
  ['( )', 'paréntesis'],
]

const formationRules = [
  ['R1', 'Toda letra proposicional es FBF.'],
  ['R2', 'Si φ es FBF, entonces ¬φ es FBF.'],
  ['R3', 'Si φ y ψ son FBF, entonces (φ ∧ ψ) es FBF.'],
]

const ruleTypes = [
  {
    id: 'inferencia',
    mark: '⊢',
    title: 'Regla de inferencia',
    operation: 'derivar',
    explanation:
      'Produce una consecuencia válida dentro del sistema a partir de ciertas premisas.',
  },
  {
    id: 'equivalencia',
    mark: '≡',
    title: 'Equivalencia',
    operation: 'reescribir',
    explanation:
      'Permite transformar una expresión en otra equivalente sin que por ello se esté produciendo una nueva consecuencia deductiva.',
  },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

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

export default function PhilosophyLogicClass07() {
  const [levelId, setLevelId] = useState('logico')
  const [boundaryId, setBoundaryId] = useState('aritmetica')
  const [modalId, setModalId] = useState('modal')
  const [languageId, setLanguageId] = useState('sintactico')
  const [statusId, setStatusId] = useState('tautologia')
  const [completeId, setCompleteId] = useState('completo')
  const [ruleId, setRuleId] = useState('inferencia')

  const level = useMemo(
    () => systemLevels.find((item) => item.id === levelId) || systemLevels[2],
    [levelId],
  )

  const boundary = useMemo(
    () => boundaryCases.find((item) => item.id === boundaryId) || boundaryCases[2],
    [boundaryId],
  )

  const modal = useMemo(
    () => modalCases.find((item) => item.id === modalId) || modalCases[0],
    [modalId],
  )

  const language = useMemo(
    () => languageLevels.find((item) => item.id === languageId) || languageLevels[1],
    [languageId],
  )

  const status = useMemo(
    () => statusCases.find((item) => item.id === statusId) || statusCases[1],
    [statusId],
  )

  const completeness = useMemo(
    () => completenessCases.find((item) => item.id === completeId) || completenessCases[0],
    [completeId],
  )

  const rule = useMemo(
    () => ruleTypes.find((item) => item.id === ruleId) || ruleTypes[0],
    [ruleId],
  )

  return (
    <main className="flc1-page flc7-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>16 · II · 2026</span>
      </nav>

      <header className="flc1-hero flc7-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>⊨/⊢</span><span>FBF</span><span>□</span><span>○</span><span>∧</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 07</p>
          <h1>
            Demarcación,
            <em>completitud y sistema de Frege</em>
          </h1>
          <p className="flc1-lead">
            La sesión consolida el criterio del curso para identificar sistemas
            lógicos y distingue niveles que suelen confundirse: fórmula bien
            formada, verdad lógica y teorema. Con esas piezas introduce la
            completitud y ensaya un sistema proposicional atribuido a Frege.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>
            ¿Cómo distinguimos entre estar bien formado, ser verdad lógica y ser
            demostrable dentro de un sistema?
          </strong>
          <small>Demarcación → sintaxis → verdad lógica → derivación → completitud.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN VII</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              Dos preguntas ordenan toda la clase: pertenencia y alcance
            </SectionTitle>

            <div className="flc7-route">
              {teachingRoute.map(([n, title, text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc7-master-line">
              <span>¿ES LÓGICA?</span><b>→</b>
              <span>¿ES FBF?</span><b>→</b>
              <span>¿ES VERDAD LÓGICA?</span><b>→</b>
              <span>¿ES TEOREMA?</span><b>→</b>
              <span>¿ES COMPLETO?</span>
            </div>
          </section>

          <section id="continuidad" className="flc1-section">
            <SectionTitle number="01" eyebrow="Inclusio graduum">
              Un sistema lógico sigue siendo deductivo y formal
            </SectionTitle>

            <div className="flc7-level-tabs">
              {systemLevels.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === levelId ? 'is-active' : ''}
                  onClick={() => setLevelId(item.id)}
                >
                  <span>{item.roman}</span>
                  <strong>{item.title}</strong>
                  <small>+ {item.adds}</small>
                </button>
              ))}
            </div>

            <div className="flc7-level-reader">
              <div>
                <span>NIVEL {level.roman}</span>
                <h3>{level.title}</h3>
                <code>{level.formula}</code>
              </div>
              <p>{level.explanation}</p>
            </div>

            <div className="flc7-inclusion">
              <span>DEDUCTIVO</span>
              <div>
                <span>FORMAL</span>
                <div>
                  <span>LÓGICO</span>
                </div>
              </div>
            </div>
          </section>

          <section id="demarcacion" className="flc1-section">
            <SectionTitle number="02" eyebrow="Criterium">
              Neutralidad tópica + símbolos no interpretados
            </SectionTitle>

            <div className="flc7-demarcation">
              <article>
                <span>CRITERIO A</span>
                <strong>Neutralidad tópica</strong>
                <p>
                  El sistema no trata desde el inicio de números, espacio,
                  magnitud, sujetos u otro dominio particular.
                </p>
              </article>

              <div>+</div>

              <article className="is-dark">
                <span>CRITERIO B</span>
                <strong>Símbolos no interpretados</strong>
                <p>
                  Los signos adquieren contenido sólo mediante una interpretación
                  posterior, no por pertenecer originalmente a un tema.
                </p>
              </article>
            </div>

            <div className="flc7-demarcation-result">
              <span>SEGÚN EL CRITERIO TRABAJADO EN LA SESIÓN</span>
              <strong>formalidad sola ≠ logicidad</strong>
            </div>
          </section>

          <section id="fronteras" className="flc1-section">
            <SectionTitle number="03" eyebrow="Casus ad limitem">
              Ser útil no basta para cumplir la demarcación
            </SectionTitle>

            <div className="flc7-boundary-tabs">
              {boundaryCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === boundaryId ? 'is-active' : ''}
                  onClick={() => setBoundaryId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc7-boundary-reader">
              <div>
                <span>{boundary.verdict}</span>
                <h3>{boundary.title}</h3>
              </div>
              <div>
                <p>{boundary.why}</p>
                <strong>{boundary.nuance}</strong>
              </div>
            </div>

            <div className="flc7-topic-row">
              <article><span>ARITMÉTICA</span><strong>números</strong></article>
              <article><span>GEOMETRÍA</span><strong>espacio</strong></article>
              <article className="is-neutral"><span>LÓGICA</span><strong>relaciones “en sí”</strong></article>
            </div>
          </section>

          <section id="modal" className="flc1-section">
            <SectionTitle number="04" eyebrow="Probatio neutralitatis">
              Modal vs epistémica: cuándo aparece un tópico
            </SectionTitle>

            <div className="flc7-modal-tabs">
              {modalCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === modalId ? 'is-active' : ''}
                  onClick={() => setModalId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.topic}</small>
                </button>
              ))}
            </div>

            <div className={`flc7-modal-reader ${modal.neutral ? 'is-neutral' : 'is-themed'}`}>
              <div>
                <span>{modal.neutral ? 'NEUTRALIDAD PRESERVADA' : 'TÓPICO INTRODUCIDO'}</span>
                <h3>{modal.mark}</h3>
              </div>
              <div>
                <strong>{modal.title}</strong>
                <p>{modal.explanation}</p>
              </div>
            </div>

            <div className="flc7-interpretation-warning">
              <span>DISTINCIÓN</span>
              <p>
                Una cosa es interpretar después un sistema no interpretado; otra
                es introducir desde el arranque operadores cuyo significado ya
                presupone un dominio específico.
              </p>
            </div>
          </section>

          <section id="sintaxis" className="flc1-section">
            <SectionTitle number="05" eyebrow="Syntaxis pura">
              En el sistema lógico, primero importa la forma
            </SectionTitle>

            <div className="flc7-syntax-machine">
              <div>
                <span>SÍMBOLOS</span>
                <strong>P · Q · ¬ · ∧</strong>
                <small>sin interpretación fijada</small>
              </div>
              <b>→</b>
              <div>
                <span>GRAMÁTICA</span>
                <strong>reglas de formación</strong>
                <small>clasifican expresiones</small>
              </div>
              <b>→</b>
              <div className="is-result">
                <span>RESULTADO</span>
                <strong>FBF / no-FBF</strong>
                <small>criterio sintáctico</small>
              </div>
            </div>

            <div className="flc7-syntax-thesis">
              <span>TESIS DE LA SESIÓN</span>
              <strong>
                La gramática interna del sistema lógico se presenta como puramente
                sintáctica; la semántica entra cuando se introduce interpretación.
              </strong>
            </div>
          </section>

          <section id="lenguajes" className="flc1-section">
            <SectionTitle number="06" eyebrow="Gradus notationis">
              Formal, sintáctico e informal: cuánto consenso permitimos
            </SectionTitle>

            <div className="flc7-language-tabs">
              {languageLevels.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === languageId ? 'is-active' : ''}
                  onClick={() => setLanguageId(item.id)}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <small>{item.shorthand}</small>
                </button>
              ))}
            </div>

            <div className="flc7-language-reader">
              <div>
                <span>{language.shorthand}</span>
                <h3>{language.title}</h3>
              </div>
              <p>{language.explanation}</p>
            </div>

            <div className="flc7-primitive-rule">
              <span>REGLA PRÁCTICA</span>
              <strong>
                Si una coma, paréntesis o símbolo es estructuralmente importante,
                debe definirse desde el inicio o introducirse mediante una convención explícita.
              </strong>
            </div>
          </section>

          <section id="estatus" className="flc1-section">
            <SectionTitle number="07" eyebrow="Tria status">
              FBF, tautología y teorema responden preguntas diferentes
            </SectionTitle>

            <div className="flc7-status-tabs">
              {statusCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === statusId ? 'is-active' : ''}
                  onClick={() => setStatusId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc7-status-reader">
              <div>
                <span>{status.mark}</span>
                <h3>{status.question}</h3>
                <strong>{status.answer}</strong>
              </div>
              <p>{status.explanation}</p>
            </div>

            <div className="flc7-status-grid">
              <article>
                <span>SINTAXIS</span>
                <strong>¿es FBF?</strong>
              </article>
              <article>
                <span>SEMÁNTICA</span>
                <strong>¿es tautología?</strong>
              </article>
              <article>
                <span>DERIVACIÓN</span>
                <strong>¿es teorema?</strong>
              </article>
            </div>
          </section>

          <section id="completitud" className="flc1-section">
            <SectionTitle number="08" eyebrow="Completudo">
              Cuando verdad lógica y derivabilidad coinciden
            </SectionTitle>

            <div className="flc7-complete-tabs">
              {completenessCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === completeId ? 'is-active' : ''}
                  onClick={() => setCompleteId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc7-complete-reader">
              <div className="flc7-complete-mark">{completeness.mark}</div>
              <div>
                <h3>{completeness.title}</h3>
                <p>{completeness.explanation}</p>
              </div>
            </div>

            <div className="flc7-complete-bridge">
              <article>
                <span>VERDAD LÓGICA</span>
                <strong>⊨ φ</strong>
              </article>
              <div>?</div>
              <article>
                <span>DERIVABILIDAD</span>
                <strong>⊢ φ</strong>
              </article>
            </div>

            <div className="flc7-course-note">
              <span>FORMULACIÓN DEL DISCURSO DE CLASE</span>
              <p>
                La sesión presenta la lógica clásica de primer orden como completa
                y contrasta esa situación con sistemas más ricos, como aritmética
                y geometría, al hablar de incompletitud. Aquí se conserva esa
                formulación como parte del desarrollo del curso.
              </p>
            </div>
          </section>

          <section id="frege" className="flc1-section">
            <SectionTitle number="09" eyebrow="Systema in actu">
              Ejemplo atribuido a Frege: ver un sistema funcionando
            </SectionTitle>

            <div className="flc7-frege-parts">
              <article>
                <span>01</span>
                <strong>Primitivos</strong>
                <p>Qué símbolos pertenecen originalmente al lenguaje.</p>
              </article>
              <article>
                <span>02</span>
                <strong>Gramática</strong>
                <p>Cómo decidir qué expresiones son FBF.</p>
              </article>
              <article>
                <span>03</span>
                <strong>Postulados</strong>
                <p>Qué puntos de partida se aceptan.</p>
              </article>
              <article>
                <span>04</span>
                <strong>Verdad lógica</strong>
                <p>Cómo reconocer tautologías.</p>
              </article>
              <article>
                <span>05</span>
                <strong>Teoremas</strong>
                <p>Cómo reconocer fórmulas derivables.</p>
              </article>
            </div>

            <div className="flc7-frege-lab">
              <div className="flc7-primitives">
                <span>PRIMITIVOS DEL EJEMPLO</span>
                {fregePrimitives.map(([symbol, label]) => (
                  <article key={symbol}>
                    <strong>{symbol}</strong>
                    <small>{label}</small>
                  </article>
                ))}
              </div>

              <div className="flc7-formation">
                <span>REGLAS DE FORMACIÓN</span>
                {formationRules.map(([n, rule]) => (
                  <article key={n}>
                    <strong>{n}</strong>
                    <p>{rule}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="flc7-wff-example">
              <article>
                <span>FBF</span>
                <strong>¬(p ∧ q)</strong>
                <small>estructura admisible</small>
              </article>
              <div>vs.</div>
              <article className="is-bad">
                <span>NO-FBF</span>
                <strong>∧ p ) q</strong>
                <small>viola la gramática</small>
              </article>
            </div>

            <p className="flc7-frege-note">
              La página conserva este ejemplo como fue presentado en la sesión:
              un sistema proposicional atribuido a Frege y normalizado en notación
              contemporánea para mostrar sus componentes.
            </p>
          </section>

          <section id="reglas" className="flc1-section">
            <SectionTitle number="10" eyebrow="Derivare / rescribere">
              Regla de inferencia no es lo mismo que equivalencia
            </SectionTitle>

            <div className="flc7-rule-tabs">
              {ruleTypes.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === ruleId ? 'is-active' : ''}
                  onClick={() => setRuleId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc7-rule-reader">
              <div>
                <span>{rule.mark}</span>
                <h3>{rule.operation}</h3>
              </div>
              <p>{rule.explanation}</p>
            </div>

            <div className="flc7-rule-contrast">
              <article>
                <span>INFERENCIA</span>
                <strong>premisas ⟶ consecuencia</strong>
              </article>
              <div>≠</div>
              <article>
                <span>EQUIVALENCIA</span>
                <strong>expresión ⇄ reescritura</strong>
              </article>
            </div>
          </section>

          <section id="necesidad" className="flc1-section">
            <SectionTitle number="11" eyebrow="Pons philosophicus">
              La técnica desemboca otra vez en filosofía
            </SectionTitle>

            <div className="flc7-necessity">
              <article>
                <span>NECESARIO</span>
                <strong>¿por qué vale siempre?</strong>
              </article>
              <div>vs.</div>
              <article>
                <span>CONTINGENTE</span>
                <strong>¿por qué podría ser de otro modo?</strong>
              </article>
            </div>

            <div className="flc7-philosophy-question">
              <span>PREGUNTA DE FONDO</span>
              <strong>
                ¿Quién o qué fundamenta que ciertas reglas inferenciales sean
                necesarias y no meramente convencionales?
              </strong>
              <p>
                La sesión deja este problema abierto y anticipa marcos clásicos
                —se mencionan Aristóteles y Platón— para pensar necesidad y validez.
              </p>
            </div>
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="12" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc7-summary">
              <article>
                <span>IDEA 1</span>
                <h3>Los niveles se acumulan</h3>
                <p>
                  Lo lógico sigue siendo deductivo y formal; simplemente añade
                  requisitos específicos.
                </p>
              </article>
              <article>
                <span>IDEA 2</span>
                <h3>Demarcar exige un criterio</h3>
                <p>
                  El curso privilegia neutralidad tópica y símbolos no interpretados
                  para distinguir lógica de otros sistemas.
                </p>
              </article>
              <article>
                <span>IDEA 3</span>
                <h3>Forma, verdad y prueba son distintas</h3>
                <p>
                  FBF, tautología y teorema pertenecen a niveles diferentes del análisis.
                </p>
              </article>
              <article>
                <span>IDEA 4</span>
                <h3>Completitud conecta semántica y derivación</h3>
                <p>
                  La pregunta es si las verdades lógicas pueden alcanzarse mediante
                  las reglas y axiomas del sistema.
                </p>
              </article>
            </div>

            <div className="flc7-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Por qué un sistema lógico sigue siendo deductivo y formal?</li>
                <li>¿Cuál es el criterio de demarcación central trabajado aquí?</li>
                <li>¿Por qué una “lógica” sin reglas no satisface ese criterio?</li>
                <li>¿Por qué aritmética y geometría funcionan como contrastes de la neutralidad?</li>
                <li>¿Qué diferencia preliminar establece la sesión entre modal y epistémica?</li>
                <li>¿Qué significa que la gramática lógica sea puramente sintáctica?</li>
                <li>¿Qué diferencia hay entre lenguaje formal, sintáctico e informal?</li>
                <li>¿Qué pregunta responde una FBF, una tautología y un teorema?</li>
                <li>¿Qué significa completitud en la definición operativa de la clase?</li>
                <li>¿Qué cinco componentes se exigen en el ejemplo atribuido a Frege?</li>
                <li>¿Qué diferencia hay entre una inferencia y una equivalencia?</li>
                <li>¿Qué problema filosófico abre la pregunta por necesidad y contingencia?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Continuidad</strong>
              <p>
                La sesión cierra abriendo la pregunta filosófica por el fundamento
                de la necesidad y la validez. No se registra una tarea nueva porque
                el material no fija aquí una entrega concreta con fecha.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 07 · 16 febrero 2026</span>
      </footer>
    </main>
  )
}
