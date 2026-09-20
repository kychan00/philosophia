import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass02.css'

const sections = [
  ['00', 'ruta', 'Ruta de enseñanza'],
  ['01', 'quiebre', '1879 y la lógica moderna'],
  ['02', 'sistemas', 'Tres niveles de sistema'],
  ['03', 'clasica', 'Clásica no es silogística'],
  ['04', 'lenguajes', 'Proposicional y predicados'],
  ['05', 'metalogica', 'Sintaxis, semántica y metalógica'],
  ['06', 'propiedades', 'Propiedades metalógicas'],
  ['07', 'noclasicas', 'Lógicas no clásicas'],
  ['08', 'axiomas', 'Axioma y teorema'],
  ['09', 'valores', 'El problema de los valores'],
  ['10', 'argumentacion', 'Formalismo y lenguaje natural'],
  ['11', 'historia', 'Mapa histórico'],
  ['12', 'cierre', 'Síntesis docente'],
]

const teachingRoute = [
  ['1', 'Quiebre histórico', '1879 funciona como punto de referencia para distinguir tradición lógica y lógica formal moderna.'],
  ['2', 'Sistema', 'La modernidad lógica se entiende por la construcción de sistemas capaces de formalizar, derivar y estudiarse a sí mismos.'],
  ['3', 'Metanivel', 'Sintaxis y semántica describen dimensiones del cálculo; la metalógica pregunta por propiedades del sistema.'],
  ['4', 'Pluralidad', 'La existencia de sistemas alternativos rompe la expectativa de que sólo pueda haber una lógica.'],
  ['5', 'Problema filosófico', 'La posibilidad técnica de construir una lógica no resuelve por sí sola qué significan sus conceptos.'],
]

const systemLevels = [
  {
    id: 'deductivo',
    number: 'I',
    title: 'Sistema deductivo',
    formula: 'premisas ⟶ conclusión',
    explanation: 'Conjunto de procedimientos y herramientas que permiten inferir. Todavía no exige por sí mismo el grado de explicitación simbólica de un sistema formal.',
    question: '¿Cómo se obtiene una conclusión a partir de ciertas premisas?',
  },
  {
    id: 'formal',
    number: 'II',
    title: 'Sistema deductivo formal',
    formula: 'símbolos + reglas',
    explanation: 'El procedimiento deductivo se formula mediante un lenguaje simbólico y reglas explícitas de formación y derivación.',
    question: '¿Cómo se hace explícita y controlable la inferencia?',
  },
  {
    id: 'logistico',
    number: 'III',
    title: 'Sistema formal logístico',
    formula: 'axiomas + reglas + derivación',
    explanation: 'La clase presenta aquí el rasgo característico de la lógica moderna: una organización sistemática que permite no sólo derivar, sino estudiar rigurosamente el propio sistema.',
    question: '¿Qué propiedades tiene el sistema que hemos construido?',
  },
]

const metaLayers = [
  {
    id: 'sintaxis',
    mark: '⊢',
    title: 'Sintaxis',
    subtitle: 'forma',
    explanation: 'Reglas de formación y derivación. Atiende a la estructura formal de las expresiones y a las transformaciones permitidas dentro del cálculo.',
    examples: ['fórmulas bien formadas', 'reglas de inferencia', 'derivaciones'],
  },
  {
    id: 'semantica',
    mark: '⊨',
    title: 'Semántica',
    subtitle: 'interpretación',
    explanation: 'Relaciona fórmulas con interpretación, verdad y modelos. Introduce la pregunta por lo que las expresiones significan o bajo qué condiciones resultan verdaderas.',
    examples: ['verdad', 'interpretación', 'modelos'],
  },
  {
    id: 'metalogica',
    mark: 'META',
    title: 'Metalógica',
    subtitle: 'propiedades del sistema',
    explanation: 'Toma al sistema formal como objeto de estudio. Pregunta por propiedades como consistencia, completud, decidibilidad e independencia.',
    examples: ['consistencia', 'completud', 'decidibilidad', 'independencia'],
  },
]

const nonClassical = [
  {
    id: 'extendidas',
    mark: '+',
    title: 'Extendidas',
    rule: 'Conservan la base clásica y añaden operadores.',
    example: 'Lógica modal',
    detail: 'La clase usa como ejemplo los operadores de necesidad □ y posibilidad ◇. El movimiento central es ampliar el lenguaje sin abandonar la base clásica.',
  },
  {
    id: 'divergentes',
    mark: 'Δ',
    title: 'Divergentes',
    rule: 'Modifican principios, axiomas o reglas.',
    example: 'Polivalencia · intuicionismo',
    detail: 'Aquí aparecen sistemas que alteran aspectos de la lógica clásica. La clase menciona tanto valores adicionales de verdad como la reserva intuicionista frente a ciertas pruebas indirectas.',
  },
  {
    id: 'difusa',
    mark: '≈',
    title: 'Difusa',
    rule: 'Trabaja con grados de verdad.',
    example: 'más o menos verdadero',
    detail: 'No se presenta simplemente como añadir un tercer valor tipo “indeterminado”, sino como introducir grados, lo que obliga a reconstruir principios y reglas.',
  },
]

const truthCases = [
  {
    id: '2',
    label: '2 valores',
    values: 'verdadero / falso',
    status: 'base clásica',
    explanation: 'El contraste de la clase parte del marco bivalente que sirve de referencia para entender la aparición de sistemas con más valores.',
  },
  {
    id: '3',
    label: '3 valores',
    values: 'verdadero / falso / indeterminado',
    status: 'interpretación todavía clara',
    explanation: 'El profesor señala que “indeterminado” todavía admite una lectura filosófica relativamente inteligible: en ciertos casos no podemos asignar actualmente verdad o falsedad.',
  },
  {
    id: '100',
    label: '100 valores',
    values: 'v₁ … v₁₀₀',
    status: 'problema filosófico',
    explanation: 'Aunque sea técnicamente posible definir reglas y estudiar el sistema, queda abierta la pregunta decisiva: ¿qué representa filosóficamente cada uno de esos valores como teoría de la verdad?',
  },
]

const metaProperties = [
  ['Consistencia', 'Evitar que el sistema permita derivar contradicciones.'],
  ['Completud', 'Propiedad anunciada para ser definida con mayor precisión durante el curso.'],
  ['Decidibilidad', 'Propiedad anunciada dentro del estudio metateórico de los sistemas.'],
  ['Independencia', 'Se menciona especialmente en relación con axiomas y su dependencia mutua.'],
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

export default function PhilosophyLogicClass02() {
  const [systemId, setSystemId] = useState('logistico')
  const [metaId, setMetaId] = useState('metalogica')
  const [logicId, setLogicId] = useState('extendidas')
  const [truthId, setTruthId] = useState('3')

  const activeSystem = useMemo(
    () => systemLevels.find((item) => item.id === systemId) || systemLevels[2],
    [systemId],
  )

  const activeMeta = useMemo(
    () => metaLayers.find((item) => item.id === metaId) || metaLayers[2],
    [metaId],
  )

  const activeLogic = useMemo(
    () => nonClassical.find((item) => item.id === logicId) || nonClassical[0],
    [logicId],
  )

  const activeTruth = useMemo(
    () => truthCases.find((item) => item.id === truthId) || truthCases[1],
    [truthId],
  )

  return (
    <main className="flc1-page flc2-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>21 · I · 2026</span>
      </nav>

      <header className="flc1-hero flc2-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>1879</span><span>⊢</span><span>⊨</span><span>□</span><span>∞</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 02</p>
          <h1>
            Lógica moderna,
            <em>metalógica y lógicas no clásicas</em>
          </h1>
          <p className="flc1-lead">
            La sesión toma 1879 como punto de quiebre para explicar qué cambia
            con la lógica moderna: ya no basta con razonar; se construyen sistemas,
            se estudian sus propiedades y aparece la posibilidad de modificar sus
            principios para producir lógicas distintas.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>
            ¿Qué cambia cuando la lógica deja de ser sólo una práctica de inferencia
            y se convierte en un sistema que puede estudiarse a sí mismo?
          </strong>
          <small>Del cálculo al metanivel · del sistema único a la pluralidad.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN II</p>
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
              Cómo explicar esta sesión sin perder su hilo argumental
            </SectionTitle>

            <div className="flc2-teaching-route">
              {teachingRoute.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc2-master-line">
              <span>1879</span>
              <b>→</b>
              <span>SISTEMA</span>
              <b>→</b>
              <span>METALÓGICA</span>
              <b>→</b>
              <span>PLURALIDAD</span>
              <b>→</b>
              <span>SIGNIFICADO FILOSÓFICO</span>
            </div>
          </section>

          <section id="quiebre" className="flc1-section">
            <SectionTitle number="01" eyebrow="Punctum historicum">
              1879: la Conceptografía como punto de quiebre
            </SectionTitle>

            <div className="flc2-1879">
              <div className="flc2-before">
                <span>ANTES</span>
                <strong>Tradición lógica</strong>
                <p>
                  Ya existen razonamientos, reglas y la tradición aristotélica.
                  El punto de la clase no es negar esa historia.
                </p>
              </div>

              <div className="flc2-year">
                <small>FREGE</small>
                <strong>1879</strong>
                <span>Begriffsschrift</span>
              </div>

              <div className="flc2-after">
                <span>DESPUÉS</span>
                <strong>Sistema logístico moderno</strong>
                <p>
                  Axiomas, reglas explícitas y una noción rigurosa de derivación
                  permiten formalizar y estudiar propiedades del sistema.
                </p>
              </div>
            </div>

            <div className="flc1-definition">
              <span>ANALOGÍA DE LA CLASE</span>
              <p>
                La humanidad usó números durante milenios antes de formalizar la
                aritmética mediante axiomas y reglas generales. Del mismo modo,
                puede haber tradición lógica antes de la lógica formal moderna.
              </p>
            </div>
          </section>

          <section id="sistemas" className="flc1-section">
            <SectionTitle number="02" eyebrow="Gradus systematis">
              Tres niveles para entender qué significa “sistema”
            </SectionTitle>

            <div className="flc2-system-tabs">
              {systemLevels.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === systemId ? 'is-active' : ''}
                  onClick={() => setSystemId(item.id)}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <small>{item.formula}</small>
                </button>
              ))}
            </div>

            <div className="flc2-system-reader">
              <div>
                <span>NIVEL {activeSystem.number}</span>
                <h3>{activeSystem.title}</h3>
                <code>{activeSystem.formula}</code>
              </div>
              <div>
                <p>{activeSystem.explanation}</p>
                <strong>{activeSystem.question}</strong>
              </div>
            </div>

            <div className="flc2-modernity-thesis">
              <span>TESIS DIDÁCTICA</span>
              <p>
                Lo distintivo de la modernidad lógica no es simplemente que haya
                razonamientos, sino que existe un sistema capaz de formalizar,
                derivar y estudiar propiedades del propio sistema.
              </p>
            </div>
          </section>

          <section id="clasica" className="flc1-section">
            <SectionTitle number="03" eyebrow="Distinctio terminorum">
              “Lógica clásica” no significa “lógica de Aristóteles”
            </SectionTitle>

            <div className="flc2-classical-compare">
              <article>
                <span>SILOGÍSTICA</span>
                <div className="flc2-symbol">A</div>
                <h3>Aristóteles</h3>
                <p>
                  La clase recomienda hablar de lógica aristotélica o silogística
                  para referirse a esa tradición.
                </p>
              </article>

              <div className="flc2-not-equal">≠</div>

              <article className="is-modern">
                <span>LÓGICA CLÁSICA · SENTIDO DEL CURSO</span>
                <div className="flc2-symbol">P(x)</div>
                <h3>Proposicional + predicados</h3>
                <p>
                  “Clásica” se usa aquí para la lógica moderna consolidada,
                  no como sinónimo de la lógica antigua.
                </p>
              </article>
            </div>
          </section>

          <section id="lenguajes" className="flc1-section">
            <SectionTitle number="04" eyebrow="Duo calculi">
              Proposicional y predicados: dos escalas de análisis
            </SectionTitle>

            <div className="flc1-formal-grid">
              <article>
                <div className="flc1-formal-icon">P → Q</div>
                <p>LÓGICA PROPOSICIONAL</p>
                <h3>Estructura del argumento</h3>
                <ul>
                  <li>conectivos</li>
                  <li>premisas y conclusión</li>
                  <li>forma lógica global</li>
                </ul>
              </article>

              <article>
                <div className="flc1-formal-icon">∀x(Px → Bx)</div>
                <p>LÓGICA DE PREDICADOS</p>
                <h3>Estructura interna</h3>
                <ul>
                  <li>cuantificadores</li>
                  <li>predicados</li>
                  <li>funciones proposicionales</li>
                </ul>
              </article>
            </div>

            <div className="flc2-pigeon">
              <span>EJEMPLO DE LA SESIÓN</span>
              <p>“Todas las palomas son blancas”</p>
              <strong>∀x (Paloma(x) → Blanca(x))</strong>
              <small>
                El interés no es la paloma: es mostrar cómo la cuantificación
                permite representar estructura interna de la proposición.
              </small>
            </div>
          </section>

          <section id="metalogica" className="flc1-section">
            <SectionTitle number="05" eyebrow="Tres planos">
              Sintaxis, semántica y metalógica
            </SectionTitle>

            <div className="flc2-meta-tabs">
              {metaLayers.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === metaId ? 'is-active' : ''}
                  onClick={() => setMetaId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </button>
              ))}
            </div>

            <div className="flc2-meta-reader">
              <div className="flc2-meta-mark">{activeMeta.mark}</div>
              <div>
                <p>{activeMeta.subtitle}</p>
                <h3>{activeMeta.title}</h3>
                <p className="flc2-meta-copy">{activeMeta.explanation}</p>
                <div className="flc1-tags">
                  {activeMeta.examples.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flc2-meta-flow">
              <span>EXPRESIONES</span>
              <b>→</b>
              <span>INTERPRETACIÓN</span>
              <b>→</b>
              <span>SISTEMA COMO OBJETO</span>
            </div>
          </section>

          <section id="propiedades" className="flc1-section">
            <SectionTitle number="06" eyebrow="Proprietates">
              Qué pregunta la metalógica acerca de un sistema
            </SectionTitle>

            <div className="flc2-properties">
              {metaProperties.map(([title, copy], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>

            <div className="flc2-godel-note">
              <strong>GÖDEL APARECE COMO HORIZONTE, NO COMO TEMA DESARROLLADO</strong>
              <p>
                La sesión menciona los teoremas asociados a Gödel dentro de este
                territorio metateórico y anuncia que las definiciones precisas de
                estas propiedades se irán construyendo a lo largo del curso.
              </p>
            </div>
          </section>

          <section id="noclasicas" className="flc1-section">
            <SectionTitle number="07" eyebrow="Pluralitas logicarum">
              Cuando deja de parecer obvio que sólo exista una lógica
            </SectionTitle>

            <div className="flc2-logic-tabs">
              {nonClassical.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === logicId ? 'is-active' : ''}
                  onClick={() => setLogicId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc2-logic-reader">
              <div>
                <span>{activeLogic.example}</span>
                <h3>{activeLogic.rule}</h3>
              </div>
              <p>{activeLogic.detail}</p>
            </div>

            <div className="flc2-intuitionism">
              <span>CASO FILOSÓFICO · INTUICIONISMO</span>
              <div>
                <code>¬¬P</code>
                <b>?</b>
                <code>P</code>
              </div>
              <p>
                La sesión plantea la reserva frente a la inferencia clásica:
                ¿probar que P no puede ser falso equivale exactamente a haber
                construido una prueba de P?
              </p>
            </div>
          </section>

          <section id="axiomas" className="flc1-section">
            <SectionTitle number="08" eyebrow="Principium / derivatio">
              Axioma no es lo mismo que teorema
            </SectionTitle>

            <div className="flc2-probability">
              <div className="flc2-axioms">
                <span>AXIOMAS</span>
                <article>
                  <b>A₁</b>
                  <p>P(A) ≥ 0</p>
                </article>
                <article>
                  <b>A₂</b>
                  <p>P(Ω) = 1</p>
                </article>
              </div>

              <div className="flc2-derive">
                <span>DERIVACIÓN</span>
                <b>⇒</b>
              </div>

              <div className="flc2-theorem">
                <span>TEOREMA</span>
                <strong>0 ≤ P(A) ≤ 1</strong>
                <p>Resultado derivado dentro del marco, no principio básico.</p>
              </div>
            </div>

            <div className="flc1-definition">
              <span>CAMBIO DE SENTIDO DE “AXIOMA”</span>
              <p>
                La clase subraya que en lógica contemporánea un axioma no tiene
                que entenderse siempre como verdad autoevidente al estilo griego:
                puede funcionar como postulado estructurador de un sistema.
              </p>
            </div>
          </section>

          <section id="valores" className="flc1-section">
            <SectionTitle number="09" eyebrow="Problema filosófico">
              Poder construir valores no significa saber qué significan
            </SectionTitle>

            <div className="flc2-truth-tabs">
              {truthCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === truthId ? 'is-active' : ''}
                  onClick={() => setTruthId(item.id)}
                >
                  <strong>{item.label}</strong>
                  <small>{item.status}</small>
                </button>
              ))}
            </div>

            <div className="flc2-truth-reader">
              <div>
                <span>{activeTruth.status}</span>
                <h3>{activeTruth.values}</h3>
              </div>
              <p>{activeTruth.explanation}</p>
            </div>

            <div className="flc2-two-planes">
              <article>
                <span>PLANO FORMAL</span>
                <h3>¿Puedo construirlo?</h3>
                <p>
                  Definir valores, reglas, algoritmos y estudiar propiedades
                  como consistencia.
                </p>
              </article>
              <div>≠</div>
              <article>
                <span>PLANO FILOSÓFICO</span>
                <h3>¿Qué significa?</h3>
                <p>
                  Explicar qué representan esos valores dentro de una teoría
                  de la verdad.
                </p>
              </article>
            </div>
          </section>

          <section id="argumentacion" className="flc1-section">
            <SectionTitle number="10" eyebrow="Limes formalitatis">
              Lógica formal frente al lenguaje natural
            </SectionTitle>

            <div className="flc2-methods">
              <article className="is-deduction">
                <span>DEDUCCIÓN</span>
                <h3>Matemáticas y sistemas formales</h3>
                <p>
                  La clase la presenta como procedimiento intensivamente usado
                  dentro de marcos formales.
                </p>
              </article>
              <article>
                <span>INDUCCIÓN</span>
                <h3>Ciencia y generalización</h3>
                <p>
                  Aparece con fuerza cuando la práctica real no consiste sólo
                  en derivar consecuencias desde axiomas.
                </p>
              </article>
              <article>
                <span>ABDUCCIÓN</span>
                <h3>Hipótesis y explicación</h3>
                <p>
                  Junto con la inducción, obliga a preguntar por el alcance real
                  de la lógica formal frente a la práctica argumentativa.
                </p>
              </article>
            </div>

            <div className="flc2-language-question">
              <span>PREGUNTA DE FONDO</span>
              <strong>
                Si la filosofía real se escribe en lenguaje natural, ¿qué aporta
                seguir formalizando?
              </strong>
            </div>
          </section>

          <section id="historia" className="flc1-section">
            <SectionTitle number="11" eyebrow="Panorama del profesor">
              Un mapa histórico de preocupaciones dominantes
            </SectionTitle>

            <div className="flc2-centuries">
              <article>
                <span>XVII–XVIII</span>
                <strong>Razón y pensamiento</strong>
                <small>Descartes · Hume</small>
              </article>
              <b>→</b>
              <article>
                <span>XIX</span>
                <strong>Historia y devenir</strong>
                <small>Hegel · Marx</small>
              </article>
              <b>→</b>
              <article>
                <span>XX</span>
                <strong>Lógica y lenguaje</strong>
                <small>filosofía analítica</small>
              </article>
              <b>→</b>
              <article className="is-now">
                <span>COYUNTURA ACTUAL</span>
                <strong>¿cómo nombrarla?</strong>
                <small>transición todavía disputada</small>
              </article>
            </div>

            <p className="flc2-history-caution">
              Este esquema aparece como cierre panorámico de la clase. No funciona
              como una periodización exhaustiva de la historia de la filosofía.
            </p>
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="12" eyebrow="Ad usum futurum">
              Síntesis para estudiar, explicar y volver a esta clase
            </SectionTitle>

            <div className="flc2-teaching-summary">
              <article>
                <span>IDEA 1</span>
                <h3>La modernidad lógica es sistémica</h3>
                <p>
                  El paso decisivo no es simplemente razonar, sino explicitar
                  símbolos, axiomas, reglas y derivaciones.
                </p>
              </article>
              <article>
                <span>IDEA 2</span>
                <h3>El sistema se convierte en objeto</h3>
                <p>
                  La metalógica permite preguntar por consistencia, completud,
                  decidibilidad e independencia.
                </p>
              </article>
              <article>
                <span>IDEA 3</span>
                <h3>La pluralidad crea filosofía de la lógica</h3>
                <p>
                  Cuando existen sistemas alternativos, ya no basta con preguntar
                  cómo funcionan: hay que preguntar qué significan y qué los legitima.
                </p>
              </article>
            </div>

            <div className="flc2-review-questions">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN SIN MIRAR LOS APUNTES</span>
              <ol>
                <li>¿Por qué 1879 funciona como punto de quiebre en esta clase?</li>
                <li>¿Qué diferencia a un sistema deductivo, uno formal y uno logístico?</li>
                <li>¿Qué distingue sintaxis, semántica y metalógica?</li>
                <li>¿Por qué una lógica técnicamente consistente puede seguir planteando un problema filosófico?</li>
                <li>¿Qué cambia entre una lógica extendida, una divergente y una difusa?</li>
                <li>¿Por qué el lenguaje natural obliga a discutir los límites del formalismo?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Continuidad del curso</strong>
              <p>
                La clase termina anunciando que se continuará con la lectura y
                su prefacio. En esta sesión no queda fijada una entrega concreta
                con fecha, por lo que no se registra una tarea nueva.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 02 · 21 enero 2026</span>
      </footer>
    </main>
  )
}
