import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass09.css'

const sections = [
  ['00', 'ruta', 'Ruta de enseñanza'],
  ['01', 'validez', 'Dos sentidos de validez'],
  ['02', 'argumento', 'Anatomía del argumento'],
  ['03', 'inferencia', 'Inferencia como proceso'],
  ['04', 'deduccion', 'Qué es deducir'],
  ['05', 'procesos', 'Cuatro procesos inferenciales'],
  ['06', 'haack', 'Doble evaluación'],
  ['07', 'verdad', 'Verdad vs validez'],
  ['08', 'falsas', 'Válido con premisas falsas'],
  ['09', 'invalido', 'Afirmación del consecuente'],
  ['10', 'formalizacion', 'Lenguaje natural y formal'],
  ['11', 'comparativa', 'Cuadro comparativo'],
  ['12', 'cierre', 'Síntesis docente'],
]

const teachingRoute = [
  ['1', 'Validez', 'Distinguir el plano sintáctico del semántico sin convertirlos en dos fenómenos desconectados.'],
  ['2', 'Argumento', 'Reconocer premisas, conclusión y dependencia inferencial como estructura básica.'],
  ['3', 'Inferencia', 'Separar el argumento como estructura del proceso racional que conduce de premisas a conclusión.'],
  ['4', 'Procesos', 'Comparar deducción, inducción, abducción y analogía según el tipo de fuerza que ofrecen.'],
  ['5', 'Evaluación', 'Separar verdad de validez y comprender por qué formalizar no equivale a copiar mecánicamente el lenguaje natural.'],
]

const validityViews = [
  {
    id: 'sintactica',
    mark: '⊢',
    title: 'Validez lógica / sintáctica',
    layer: 'estructura formal',
    question: '¿La conclusión se deriva correctamente mediante reglas?',
    explanation:
      'El sistema todavía no necesita interpretación del contenido: importan la forma de las expresiones y las reglas de inferencia aplicadas.',
  },
  {
    id: 'semantica',
    mark: '⊨',
    title: 'Validez semántica',
    layer: 'interpretación',
    question: '¿Es imposible tener premisas verdaderas y conclusión falsa?',
    explanation:
      'Una vez interpretadas las fórmulas como proposiciones, la validez se expresa como preservación de verdad.',
  },
]

const argumentViews = [
  {
    id: 'logico',
    mark: 'FBF',
    title: 'Sentido lógico',
    premise: 'FBF₁, FBF₂, …',
    conclusion: 'FBFₙ',
    explanation:
      'Las premisas y la conclusión se consideran como fórmulas bien formadas dentro del sistema.',
  },
  {
    id: 'semantico',
    mark: 'V/F',
    title: 'Sentido semántico',
    premise: 'proposiciones',
    conclusion: 'proposición',
    explanation:
      'Cuando el sistema está interpretado, las expresiones poseen significado y pueden ser verdaderas o falsas.',
  },
]

const inferenceTypes = [
  {
    id: 'deduccion',
    mark: '⊢',
    title: 'Deducción',
    result: 'conclusión necesaria',
    trait: 'validez',
    explanation:
      'Si las premisas son verdaderas, la conclusión no puede ser falsa. Es el proceso privilegiado por el curso.',
  },
  {
    id: 'induccion',
    mark: '↑',
    title: 'Inducción',
    result: 'conclusión probable',
    trait: 'generalización',
    explanation:
      'Generaliza a partir de casos observados, pero no garantiza necesidad lógica.',
  },
  {
    id: 'abduccion',
    mark: '?',
    title: 'Abducción',
    result: 'hipótesis plausible',
    trait: 'explicación',
    explanation:
      'Propone una explicación razonable de un hecho, aunque otras causas sigan siendo posibles.',
  },
  {
    id: 'analogia',
    mark: '≈',
    title: 'Analogía',
    result: 'conclusión comparativa',
    trait: 'semejanza estructural',
    explanation:
      'Traslada relaciones entre modelos o casos semejantes para iluminar o apoyar una conclusión.',
  },
]

const deductionExamples = [
  {
    id: 'palomas',
    title: 'Ejemplo escolar',
    lines: [
      'Todas las palomas son blancas.',
      'Yo tengo una paloma.',
      '∴ Mi paloma es blanca.',
    ],
    lesson:
      'Funciona como deducción, pero puede inducir la falsa impresión de que deducir siempre significa pasar de lo general a lo particular.',
  },
  {
    id: 'juan',
    title: 'Contraejemplo decisivo',
    lines: [
      'Juan es guitarrista o bajista.',
      'Juan no es guitarrista.',
      '∴ Juan es bajista.',
    ],
    lesson:
      'Es deductivamente válido sin seguir el patrón general → particular. La necesidad de la conclusión, no la dirección, define la deducción.',
  },
]

const truthValidityCases = [
  {
    id: 'proposicion',
    mark: 'V/F',
    object: 'Proposición',
    predicate: 'verdadera / falsa',
    explanation:
      'La verdad y falsedad califican contenidos proposicionales.',
  },
  {
    id: 'argumento',
    mark: '✓/✗',
    object: 'Argumento',
    predicate: 'válido / inválido',
    explanation:
      'La validez califica la relación inferencial entre premisas y conclusión.',
  },
  {
    id: 'inferencia',
    mark: '→',
    object: 'Inferencia',
    predicate: 'correcta / incorrecta',
    explanation:
      'La evaluación recae en si el proceso preserva o no la relación inferencial pertinente.',
  },
]

const formalizationSteps = [
  ['LENGUAJE NATURAL', 'riqueza · ambigüedad · contexto'],
  ['SELECCIÓN', 'qué estructura interesa conservar'],
  ['INTERPRETACIÓN', 'cómo representar el sentido relevante'],
  ['SIMPLIFICACIÓN', 'qué rasgos se omiten'],
  ['LENGUAJE FORMAL', 'estructura reconstruida bajo reglas'],
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

export default function PhilosophyLogicClass09() {
  const [validityId, setValidityId] = useState('sintactica')
  const [argumentId, setArgumentId] = useState('logico')
  const [inferenceId, setInferenceId] = useState('deduccion')
  const [deductionId, setDeductionId] = useState('juan')
  const [truthId, setTruthId] = useState('argumento')

  const validity = useMemo(
    () => validityViews.find((item) => item.id === validityId) || validityViews[0],
    [validityId],
  )

  const argument = useMemo(
    () => argumentViews.find((item) => item.id === argumentId) || argumentViews[0],
    [argumentId],
  )

  const inference = useMemo(
    () => inferenceTypes.find((item) => item.id === inferenceId) || inferenceTypes[0],
    [inferenceId],
  )

  const deduction = useMemo(
    () => deductionExamples.find((item) => item.id === deductionId) || deductionExamples[1],
    [deductionId],
  )

  const truthCase = useMemo(
    () => truthValidityCases.find((item) => item.id === truthId) || truthValidityCases[1],
    [truthId],
  )

  return (
    <main className="flc1-page flc9-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>02 · III · 2026</span>
      </nav>

      <header className="flc1-hero flc9-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>⊢</span><span>⊨</span><span>∴</span><span>≈</span><span>?</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 09</p>
          <h1>
            Validez, argumento
            <em>e inferencia</em>
          </h1>
          <p className="flc1-lead">
            La sesión separa conceptos que suelen confundirse: estructura del
            argumento, proceso de inferencia, verdad de las proposiciones y
            validez de la relación inferencial. Desde ahí compara deducción,
            inducción, abducción y analogía, y muestra por qué sólo la deducción
            garantiza necesidad lógica.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>
            ¿Qué significa realmente que una conclusión “se siga” de unas premisas?
          </strong>
          <small>Argumento ≠ inferencia · verdad ≠ validez.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN IX</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              Del “por lo tanto” a una teoría de la inferencia
            </SectionTitle>

            <div className="flc9-route">
              {teachingRoute.map(([n, title, text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc9-master-line">
              <span>PREMISAS</span><b>→</b>
              <span>INFERENCIA</span><b>→</b>
              <span>CONCLUSIÓN</span><b>→</b>
              <span>VALIDEZ</span><b>≠</b>
              <span>VERDAD</span>
            </div>
            <LogicFigureNote
              noteId="c09-map"
              what="Resume la arquitectura conceptual de la sesión: premisas, proceso inferencial, conclusión y dos evaluaciones diferentes."
              how="Lea de izquierda a derecha hasta “validez”. Después observe el signo ≠: la validez pregunta por la relación entre premisas y conclusión, mientras que la verdad pregunta por el contenido de las proposiciones. El cuadro condensa el vocabulario que se irá separando durante toda la clase."
              why="Está aquí como mapa de navegación. Si en algún momento se confunden argumento, inferencia, validez o verdad, puede volver a esta línea y localizar en qué parte del proceso se encuentra cada concepto."
              takeaway="La sesión estudia relaciones entre proposiciones. Que una proposición sea verdadera no decide por sí solo si el paso inferencial que la conecta con otras proposiciones es válido."
            />
          </section>

          <section id="validez" className="flc1-section">
            <SectionTitle number="01" eyebrow="Duo aspectus">
              Validez sintáctica y validez semántica
            </SectionTitle>

            <div className="flc9-validity-tabs">
              {validityViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === validityId ? 'is-active' : ''}
                  onClick={() => setValidityId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.layer}</small>
                </button>
              ))}
            </div>

            <div className="flc9-validity-reader">
              <div>
                <span>{validity.mark}</span>
                <h3>{validity.question}</h3>
              </div>
              <p>{validity.explanation}</p>
            </div>

            <div className="flc9-validity-bridge">
              <article>
                <span>SINTAXIS</span>
                <strong>reglas + derivación</strong>
              </article>
              <div>↔</div>
              <article className="is-semantic">
                <span>SEMÁNTICA</span>
                <strong>interpretación + verdad</strong>
              </article>
            </div>
            <LogicFigureNote
              noteId="c09-validity"
              what="Contrasta dos niveles de análisis de la validez: reglas formales e interpretación semántica."
              how="En sintaxis preguntamos si la conclusión fue obtenida mediante reglas permitidas; en semántica preguntamos si existe alguna interpretación donde las premisas sean verdaderas y la conclusión falsa. La flecha doble indica que ambas descripciones apuntan a la misma exigencia de preservación."
              why="Está aquí porque una misma inferencia puede estudiarse sin atender todavía al contenido de P y Q o, después, interpretando esas fórmulas como proposiciones con valores de verdad."
              takeaway="No memorice ⊢ y ⊨ sólo como símbolos. Úselos para recordar la pregunta correspondiente: “¿puedo derivarlo?” frente a “¿se preserva la verdad en las interpretaciones?”."
            />

            <p className="flc9-note">
              La distinción no rompe la unidad del argumento: son dos planos para
              estudiar la misma estructura inferencial.
            </p>
          </section>

          <section id="argumento" className="flc1-section">
            <SectionTitle number="02" eyebrow="Structura argumenti">
              Un argumento no es una lista: exige dependencia inferencial
            </SectionTitle>

            <div className="flc9-argument-anatomy">
              <div className="flc9-premises">
                <span>PREMISAS</span>
                <strong>P₁</strong>
                <strong>P₂</strong>
                <strong>…</strong>
              </div>
              <div className="flc9-therefore">
                <span>DEPENDENCIA</span>
                <strong>∴</strong>
              </div>
              <div className="flc9-conclusion">
                <span>CONCLUSIÓN</span>
                <strong>C</strong>
              </div>
            </div>
            <LogicFigureNote
              noteId="c09-anatomy"
              what="Descompone un argumento en premisas, relación de dependencia y conclusión."
              how="P₁, P₂, … representan la información de partida; C es lo que se pretende sostener a partir de ella. El símbolo ∴ ocupa el centro porque la mera secuencia temporal “primero premisas, luego conclusión” no crea un argumento: hace falta que la conclusión se presente como dependiente de las premisas."
              why="Está aquí para que el argumento deje de verse como un bloque de texto. Separar sus piezas permite preguntar dónde se localiza un error: en una premisa, en la conclusión o en el paso inferencial."
              takeaway="Un argumento se evalúa por la conexión racional entre sus partes. Dos proposiciones verdaderas colocadas juntas no forman automáticamente una inferencia válida."
            />

            <div className="flc9-argument-tabs">
              {argumentViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === argumentId ? 'is-active' : ''}
                  onClick={() => setArgumentId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc9-argument-reader">
              <div>
                <span>PREMISAS</span>
                <strong>{argument.premise}</strong>
              </div>
              <div className="flc9-argument-arrow">∴</div>
              <div>
                <span>CONCLUSIÓN</span>
                <strong>{argument.conclusion}</strong>
              </div>
            </div>

            <p className="flc9-argument-explanation">{argument.explanation}</p>

            <div className="flc9-dependence">
              <span>CONDICIÓN NECESARIA PARA QUE HAYA ARGUMENTO</span>
              <strong>
                La conclusión debe depender racionalmente de las premisas; estar
                simplemente colocada después de ellas no basta.
              </strong>
            </div>
          </section>

          <section id="inferencia" className="flc1-section">
            <SectionTitle number="03" eyebrow="Processus rationalis">
              La inferencia no es la conclusión
            </SectionTitle>

            <div className="flc9-argument-vs-inference">
              <article>
                <span>ARGUMENTO</span>
                <strong>estructura completa</strong>
                <p>premisas + conclusión + relación inferencial</p>
              </article>
              <div>≠</div>
              <article className="is-inference">
                <span>INFERENCIA</span>
                <strong>movimiento racional</strong>
                <p>proceso de pasar de la información inicial a la conclusión</p>
              </article>
            </div>
            <LogicFigureNote
              noteId="c09-arginf"
              what="Distingue el argumento como estructura analizable de la inferencia como actividad o proceso de pasar a una conclusión."
              how="Imagine una fotografía y un movimiento: el argumento es la fotografía completa de premisas, conclusión y relación; la inferencia es el movimiento racional que realiza esa relación. Podemos escribir un argumento en una página aunque el acto psicológico de inferir ya haya terminado."
              why="Está aquí porque en lenguaje cotidiano usamos ambos términos de forma intercambiable, pero la sesión necesita distinguir el objeto lógico de la actividad que lo produce o recorre."
              takeaway="La lógica puede evaluar la estructura de un argumento sin tener que reconstruir todo el proceso psicológico concreto por el que una persona llegó a pensarlo."
            />

            <div className="flc9-process-line">
              <span>INFORMACIÓN INICIAL</span>
              <b>→</b>
              <strong>PROCESO INFERENCIAL</strong>
              <b>→</b>
              <span>CONCLUSIÓN</span>
            </div>
            <LogicFigureNote
              noteId="c09-processline"
              what="Reduce la inferencia a su estructura dinámica más básica: información inicial, proceso y conclusión."
              how="La flecha central no representa una regla lógica específica. Representa el lugar donde ocurre el trabajo inferencial: allí pueden operar deducción, inducción, abducción o analogía según el caso."
              why="Está aquí para que no confundamos la conclusión con la inferencia. La conclusión es el resultado; la inferencia es aquello que explica cómo llegamos justificadamente hasta él."
              takeaway="Cuando evalúe un razonamiento, pregunte no sólo “¿qué concluye?”, sino “¿qué proceso pretende justificar ese paso?”."
            />
          </section>

          <section id="deduccion" className="flc1-section">
            <SectionTitle number="04" eyebrow="Necessitas, non directio">
              Deducir no significa simplemente ir de lo general a lo particular
            </SectionTitle>

            <div className="flc9-deduction-definition">
              <span>DEFINICIÓN RIGUROSA DE LA SESIÓN</span>
              <strong>
                Si las premisas son verdaderas, la conclusión no puede no serlo.
              </strong>
              <p>
                Lo esencial es la necesidad de la conclusión, no la dirección
                general → particular.
              </p>
            </div>

            <div className="flc9-deduction-tabs">
              {deductionExamples.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === deductionId ? 'is-active' : ''}
                  onClick={() => setDeductionId(item.id)}
                >
                  <span>{item.id === 'palomas' ? 'A' : 'B'}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc9-deduction-reader">
              <div>
                {deduction.lines.map((line, index) => (
                  <p key={line} className={index === deduction.lines.length - 1 ? 'is-conclusion' : ''}>
                    {line}
                  </p>
                ))}
              </div>
              <div>
                <span>LECCIÓN</span>
                <p>{deduction.lesson}</p>
              </div>
            </div>
            <LogicFigureNote
              noteId="c09-deductionexamples"
              what="Compara dos ejemplos para separar un patrón escolar de la propiedad lógica que realmente define la deducción."
              how="El ejemplo de las palomas sí tiene apariencia general→particular. El ejemplo de Juan no, pero la conclusión queda igualmente forzada por las premisas. La comparación demuestra que compartir la dirección general→particular no es requisito de toda deducción."
              why="Está aquí como argumento pedagógico, no sólo como práctica: el segundo caso funciona como contraejemplo a una definición demasiado estrecha."
              takeaway="Una buena definición debe incluir ambos casos. “Preservación necesaria de verdad” lo logra; “general a particular” no."
            />

            <div className="flc9-school-formula">
              <span>FÓRMULA ESCOLAR</span>
              <strong>general → particular</strong>
              <b>≠</b>
              <span>CRITERIO RIGUROSO</span>
              <strong>preservación necesaria de verdad</strong>
            </div>
            <LogicFigureNote
              noteId="c09-deduction"
              what="Corrige la regla escolar “deducción = ir de lo general a lo particular”."
              how="La parte izquierda describe un patrón frecuente, pero no una condición necesaria. La derecha expresa el criterio decisivo: si las premisas fueran verdaderas, la conclusión no podría resultar falsa. El ejemplo de Juan guitarrista o bajista demuestra que puede haber deducción sin movimiento general→particular."
              why="Está aquí para reemplazar una regla mnemotécnica por un criterio lógico que funcione también en argumentos que no tienen cuantificadores universales ni casos particulares."
              takeaway="Para reconocer deducción, pregunte por necesidad de la conclusión, no por la dirección gramatical de las premisas."
            />
          </section>

          <section id="procesos" className="flc1-section">
            <SectionTitle number="05" eyebrow="Quattuor modi">
              Cuatro procesos inferenciales, cuatro tipos de fuerza
            </SectionTitle>

            <div className="flc9-inference-tabs">
              {inferenceTypes.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === inferenceId ? 'is-active' : ''}
                  onClick={() => setInferenceId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.trait}</small>
                </button>
              ))}
            </div>

            <div className="flc9-inference-reader">
              <div>
                <span>{inference.mark}</span>
                <h3>{inference.title}</h3>
                <strong>{inference.result}</strong>
              </div>
              <div>
                <p>{inference.explanation}</p>
                <small>RASGO · {inference.trait}</small>
              </div>
            </div>

            <div className="flc9-inference-examples">
              <article>
                <span>DEDUCCIÓN</span>
                <p>Juan es guitarrista o bajista.</p>
                <p>Juan no es guitarrista.</p>
                <strong>∴ Juan es bajista.</strong>
              </article>
              <article>
                <span>INDUCCIÓN</span>
                <p>Paloma blanca.</p>
                <p>Otra paloma blanca. N casos.</p>
                <strong>∴ Las palomas son blancas.</strong>
              </article>
              <article>
                <span>ABDUCCIÓN</span>
                <p>Si llueve, el patio se moja.</p>
                <p>El patio está mojado.</p>
                <strong>∴ Probablemente llovió.</strong>
              </article>
              <article>
                <span>ANALOGÍA</span>
                <p>Barco ≈ sociedad.</p>
                <p>Se trasladan relaciones entre modelos.</p>
                <strong>∴ Conclusión comparativa.</strong>
              </article>
            </div>
            <LogicFigureNote
              noteId="c09-fourmodes"
              what="Coloca lado a lado deducción, inducción, abducción y analogía para comparar qué tipo de apoyo ofrece cada proceso."
              how="No compare sólo las conclusiones. Mire qué promete cada método: la deducción pretende necesidad; la inducción generaliza desde casos; la abducción propone una explicación plausible; la analogía transfiere relaciones entre casos semejantes. Las cuatro columnas son diferentes respuestas a “¿por qué aceptar esta conclusión?”."
              why="Está aquí para impedir que “inferir” se reduzca a “deducir”. La razón humana usa varios modos inferenciales, aunque el curso privilegie la deducción para estudiar validez formal."
              takeaway="Todos pueden ser racionalmente relevantes, pero no todos justifican con el mismo grado de fuerza. Confundirlos lleva a exigir necesidad donde sólo hay probabilidad o plausibilidad."
            />
          </section>

          <section id="haack" className="flc1-section">
            <SectionTitle number="06" eyebrow="Duplex evaluatio">
              Susan Haack: un argumento puede evaluarse en dos ejes
            </SectionTitle>

            <div className="flc9-haack">
              <div className="flc9-haack-axis-y">
                <span>INDUCTIVAMENTE FUERTE</span>
                <b>↑</b>
                <span>INDUCTIVAMENTE DÉBIL</span>
              </div>

              <div className="flc9-haack-grid">
                <article>
                  <span>VÁLIDO</span>
                  <strong>+</strong>
                  <span>FUERTE</span>
                </article>
                <article>
                  <span>INVÁLIDO</span>
                  <strong>+</strong>
                  <span>FUERTE</span>
                </article>
                <article>
                  <span>VÁLIDO</span>
                  <strong>+</strong>
                  <span>DÉBIL</span>
                </article>
                <article>
                  <span>INVÁLIDO</span>
                  <strong>+</strong>
                  <span>DÉBIL</span>
                </article>
              </div>

              <div className="flc9-haack-axis-x">
                <span>DEDUCTIVAMENTE VÁLIDO</span>
                <b>→</b>
                <span>DEDUCTIVAMENTE INVÁLIDO</span>
              </div>
            </div>
            <LogicFigureNote
              noteId="c09-haack"
              what="Cruza dos criterios independientes: validez deductiva y fuerza inductiva."
              how="El eje horizontal pregunta si la conclusión se sigue deductivamente; el vertical pregunta cuánta fuerza inductiva posee el apoyo. El cuadrante “inválido + fuerte” es crucial: muestra un argumento que fracasa como deducción pero puede seguir ofreciendo buena evidencia inductiva."
              why="Está aquí para enseñar que una evaluación lógica más fina no tiene que reducir todos los argumentos a “válido” o “basura”. Podemos diagnosticar qué tipo de fuerza posee un razonamiento."
              takeaway="No interprete la matriz como una puntuación única. Cambiar de eje significa cambiar la pregunta con la que evaluamos el argumento."
            />

            <div className="flc9-haack-thesis">
              <span>IMPORTANCIA</span>
              <strong>
                Un argumento puede fracasar como deducción y conservar, sin embargo,
                cierta fuerza racional como inducción.
              </strong>
            </div>
          </section>

          <section id="verdad" className="flc1-section">
            <SectionTitle number="07" eyebrow="Non confundere">
              Verdad y validez pertenecen a niveles distintos
            </SectionTitle>

            <div className="flc9-truth-tabs">
              {truthValidityCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === truthId ? 'is-active' : ''}
                  onClick={() => setTruthId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.object}</strong>
                </button>
              ))}
            </div>

            <div className="flc9-truth-reader">
              <div>
                <span>{truthCase.mark}</span>
                <h3>{truthCase.object}</h3>
                <strong>{truthCase.predicate}</strong>
              </div>
              <p>{truthCase.explanation}</p>
            </div>

            <div className="flc9-truth-rule">
              <article>
                <span>PROPOSICIONES</span>
                <strong>verdaderas / falsas</strong>
              </article>
              <article>
                <span>ARGUMENTOS</span>
                <strong>válidos / inválidos</strong>
              </article>
              <article>
                <span>INFERENCIAS</span>
                <strong>correctas / incorrectas</strong>
              </article>
            </div>
            <LogicFigureNote
              noteId="c09-truthvalidity"
              what="Asigna predicados distintos a objetos distintos: verdad a proposiciones, validez a argumentos y corrección a inferencias."
              how="Lea cada columna como una regla de vocabulario conceptual. Una proposición describe algo y puede ser verdadera o falsa; un argumento conecta proposiciones y puede ser válido o inválido; una inferencia es el paso y puede evaluarse como correcta o incorrecta según el marco."
              why="Está aquí porque expresiones como “este argumento es verdadero” mezclan niveles y dificultan diagnosticar qué exactamente está bien o mal."
              takeaway="Antes de evaluar algo, identifique qué tipo de objeto tiene delante. Elegir el predicado correcto ya evita buena parte de las confusiones de la sesión."
            />
          </section>

          <section id="falsas" className="flc1-section">
            <SectionTitle number="08" eyebrow="Forma supra factum">
              Un argumento puede ser válido con premisas falsas
            </SectionTitle>

            <div className="flc9-spiders">
              <article>
                <span>P₁</span>
                <strong>Las arañas tienen 10 patas.</strong>
                <small>falsa</small>
              </article>
              <article>
                <span>P₂</span>
                <strong>Los seres de 10 patas tienen alas.</strong>
                <small>falsa</small>
              </article>
              <article className="is-conclusion">
                <span>∴</span>
                <strong>Las arañas tienen alas.</strong>
                <small>falsa</small>
              </article>
            </div>
            <LogicFigureNote
              noteId="c09-spiders"
              what="Construye deliberadamente un argumento cuyo contenido factual es falso pero cuya forma conserva la relación inferencial."
              how="Las etiquetas “falsa” recuerdan que ninguna de las tres proposiciones describe correctamente el mundo. Aun así, suponga por un instante verdaderas las dos premisas: bajo esa suposición la conclusión queda forzada por la estructura. Eso es lo que la validez evalúa."
              why="Está aquí como prueba de estrés contra la intuición “si todo es falso, el argumento debe ser inválido”. El ejemplo separa de manera radical verdad de validez."
              takeaway="La lógica de la validez pregunta qué ocurriría si las premisas fueran verdaderas, no si de hecho lo son en el mundo."
            />

            <div className="flc9-valid-false">
              <span>RESULTADO</span>
              <strong>contenido falso · estructura válida</strong>
              <p>
                La validez depende de la forma inferencial: si las premisas fueran
                verdaderas, la conclusión no podría ser falsa.
              </p>
            </div>
          </section>

          <section id="invalido" className="flc1-section">
            <SectionTitle number="09" eyebrow="Fallacia">
              Afirmación del consecuente: verdad posible no equivale a necesidad
            </SectionTitle>

            <div className="flc9-consequent">
              <div>
                <p><span>1.</span> P → Q</p>
                <p><span>2.</span> Q</p>
                <p className="is-conclusion"><span>∴</span> P</p>
              </div>
              <div className="flc9-consequent-mark">✕</div>
              <div>
                <span>DIAGNÓSTICO</span>
                <strong>inválido</strong>
                <p>
                  Que Q sea verdadero no obliga a que P lo sea; Q podría tener
                  otra causa.
                </p>
              </div>
            </div>
            <LogicFigureNote
              noteId="c09-consequent"
              what="Representa la forma inválida conocida en la sesión como afirmación del consecuente: P→Q, Q, por tanto P."
              how="La primera premisa hace a P suficiente para Q, pero no declara que P sea la única vía hacia Q. Por eso, al observar Q, todavía queda abierta la posibilidad de otra causa. El ✕ marca exactamente esa falta de necesidad."
              why="Está aquí porque el argumento puede sonar persuasivo en lenguaje natural, especialmente cuando P es una explicación habitual de Q. La formalización deja visible la alternativa que el razonamiento estaba ignorando."
              takeaway="Una conclusión plausible no es automáticamente una conclusión deductivamente necesaria. El salto de Q a P requiere información adicional."
            />

            <div className="flc9-contingency">
              <span>CONTINGENCIA</span>
              <strong>
                Premisas verdaderas + conclusión posiblemente falsa = ausencia de necesidad deductiva.
              </strong>
            </div>
          </section>

          <section id="formalizacion" className="flc1-section">
            <SectionTitle number="10" eyebrow="Translatio imperfecta">
              Formalizar no es copiar el lenguaje natural sin pérdida
            </SectionTitle>

            <div className="flc9-formalization">
              {formalizationSteps.map(([title, text], index) => (
                <div key={title}>
                  <article className={index === formalizationSteps.length - 1 ? 'is-formal' : ''}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                  {index < formalizationSteps.length - 1 && <b>→</b>}
                </div>
              ))}
            </div>
            <LogicFigureNote
              noteId="c09-formalization"
              what="Representa la formalización como una cadena de decisiones interpretativas entre lenguaje natural y lenguaje formal."
              how="Primero tenemos una expresión rica en contexto. Después seleccionamos la estructura relevante, interpretamos qué función cumplen sus partes y simplificamos rasgos que el cálculo no representará. Sólo al final obtenemos una forma simbólica sometida a reglas formales."
              why="Está aquí para combatir la idea de que formalizar consiste en sustituir cada palabra por un símbolo de manera automática. Dos formalizaciones pueden diferir porque han analizado de manera distinta la estructura relevante del mismo enunciado."
              takeaway="Una buena formalización es una reconstrucción justificada: debe explicar qué conserva, qué abstrae y por qué esa estructura sirve para la pregunta lógica que se está estudiando."
            />

            <div className="flc9-formalization-thesis">
              <span>TESIS FILOSÓFICA</span>
              <strong>
                No hay un procedimiento enteramente mecánico que garantice una
                traducción perfecta del lenguaje natural al formal manteniendo
                exactamente las mismas condiciones de verdad.
              </strong>
              <p>
                Formalizar implica seleccionar, interpretar y simplificar una
                estructura rica y contextual.
              </p>
            </div>
          </section>

          <section id="comparativa" className="flc1-section">
            <SectionTitle number="11" eyebrow="Tabula comparativa">
              Qué promete cada proceso inferencial
            </SectionTitle>

            <div className="flc9-comparison">
              <div className="flc9-comparison-head">
                <span>PROCESO</span>
                <span>RESULTADO</span>
                <span>RASGO PRINCIPAL</span>
              </div>

              {inferenceTypes.map((item) => (
                <div className="flc9-comparison-row" key={item.id}>
                  <strong>{item.title}</strong>
                  <span>{item.result}</span>
                  <span>{item.trait}</span>
                </div>
              ))}
            </div>
            <LogicFigureNote
              noteId="c09-comparison"
              what="Resume en una tabla qué tipo de conclusión y qué rasgo principal caracterizan a los cuatro procesos inferenciales de la sesión."
              how="Lea horizontalmente una fila completa. “Resultado” indica qué fuerza pretende la conclusión; “rasgo principal” indica el mecanismo que da ese apoyo. Después compare verticalmente para ver por qué procesos que todos llamamos inferencias no son intercambiables."
              why="Está aquí como herramienta de repaso después de haber estudiado cada proceso por separado. Su función no es introducir teoría nueva, sino condensar diferencias que pueden perderse al recordar sólo los ejemplos."
              takeaway="No hay una jerarquía absoluta en la tabla. La deducción es central para la lógica formal porque ofrece necesidad; inducción, abducción y analogía responden a otras tareas racionales."
            />

            <div className="flc9-deduction-focus">
              <span>FOCO DEL CURSO</span>
              <strong>DEDUCCIÓN</strong>
              <p>
                Los cuatro procesos son racionalmente relevantes, pero la lógica
                formal estudiada aquí se concentra en la deducción porque sólo ella
                garantiza necesidad lógica.
              </p>
            </div>
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="12" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc9-summary">
              <article>
                <span>IDEA 1</span>
                <h3>Validez tiene dos planos</h3>
                <p>
                  Sintaxis y semántica atienden, respectivamente, reglas de
                  derivación e interpretación con valores de verdad.
                </p>
              </article>
              <article>
                <span>IDEA 2</span>
                <h3>Argumento e inferencia no son lo mismo</h3>
                <p>
                  El argumento es la estructura; la inferencia es el proceso racional
                  que enlaza premisas y conclusión.
                </p>
              </article>
              <article>
                <span>IDEA 3</span>
                <h3>Deducir es garantizar necesidad</h3>
                <p>
                  La fórmula “general → particular” es insuficiente; lo esencial es
                  la preservación necesaria de verdad.
                </p>
              </article>
              <article>
                <span>IDEA 4</span>
                <h3>Verdad y validez se separan</h3>
                <p>
                  Un argumento puede ser formalmente válido aunque sus proposiciones
                  sean falsas en el mundo.
                </p>
              </article>
            </div>

            <div className="flc9-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué diferencia hay entre validez sintáctica y semántica?</li>
                <li>¿Qué convierte un conjunto de expresiones en argumento?</li>
                <li>¿Qué diferencia hay entre argumento e inferencia?</li>
                <li>¿Por qué la deducción no se define por ir de lo general a lo particular?</li>
                <li>¿Qué muestra el ejemplo de Juan guitarrista o bajista?</li>
                <li>¿Qué promete la inducción y qué no garantiza?</li>
                <li>¿Cómo funciona la abducción en el ejemplo del patio mojado?</li>
                <li>¿Qué papel cumple la analogía?</li>
                <li>¿Qué aporta la doble evaluación asociada a Susan Haack?</li>
                <li>¿Por qué verdad y validez no deben confundirse?</li>
                <li>¿Cómo puede un argumento con premisas falsas seguir siendo válido?</li>
                <li>¿Por qué afirmar el consecuente es inválido?</li>
                <li>¿Por qué formalizar lenguaje natural exige interpretación?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Continuidad</strong>
              <p>
                La sesión consolida las nociones de argumento, inferencia y validez,
                y deja como problema filosófico permanente la relación entre
                lenguaje natural y formalización. El material no fija una tarea
                concreta con fecha.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 09 · 2 marzo 2026</span>
      </footer>
    </main>
  )
}
