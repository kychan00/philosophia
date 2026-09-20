import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass08.css'

const sections = [
  ['00', 'ruta', 'Ruta de enseñanza'],
  ['01', 'maquina', 'Máquina de verdades'],
  ['02', 'validez', 'Dos caras de la validez'],
  ['03', 'demostracion', 'Demostración directa'],
  ['04', 'demarcacion', 'Demarcación'],
  ['05', 'jerarquia', 'FBF, verdad y teorema'],
  ['06', 'metalogica', 'Panel metalógico'],
  ['07', 'consistencia', 'Consistencia'],
  ['08', 'completitud', 'Completitud y logicismo'],
  ['09', 'decidibilidad', 'Decidibilidad'],
  ['10', 'algoritmos', 'Loops, algoritmos e IA'],
  ['11', 'extensiones', 'Extender un sistema'],
  ['12', 'cierre', 'Síntesis docente'],
]

const teachingRoute = [
  ['1', 'Máquina', 'Un sistema axiomático-deductivo pretende transformar axiomas aceptados en consecuencias que preservan verdad.'],
  ['2', 'Validez', 'La misma validez puede leerse desde la corrección de reglas o desde la imposibilidad de premisas verdaderas con conclusión falsa.'],
  ['3', 'Jerarquía', 'FBF, verdad lógica y teorema responden preguntas diferentes y se ordenan por relaciones de inclusión.'],
  ['4', 'Auditoría', 'Consistencia, completitud y decidibilidad preguntan por propiedades del sistema como totalidad.'],
  ['5', 'Historia', 'Frege–Russell y Gödel muestran que una falla metalógica puede modificar el destino filosófico de un programa entero.'],
]

const axiomViews = [
  {
    id: 'clasico',
    mark: 'Aᶜ',
    title: 'Axioma clásico',
    subtitle: 'autoevidente',
    explanation:
      'Se entiende como una verdad racionalmente evidente e incuestionable que no necesita demostración.',
  },
  {
    id: 'contemporaneo',
    mark: 'Aᵖ',
    title: 'Axioma contemporáneo',
    subtitle: 'principio concedido',
    explanation:
      'Funciona como punto de partida aceptado para construir el sistema; no necesita presentarse como autoevidente.',
  },
]

const validityViews = [
  {
    id: 'sintactica',
    mark: '⊢',
    title: 'Validez lógica / formal',
    question: '¿La secuencia aplica correctamente las reglas?',
    explanation:
      'La prueba se rastrea paso por paso: cada línea debe provenir de axiomas, premisas o líneas anteriores mediante una regla permitida.',
  },
  {
    id: 'semantica',
    mark: '⊨',
    title: 'Validez semántica',
    question: '¿Premisas verdaderas excluyen una conclusión falsa?',
    explanation:
      'La misma validez se expresa como preservación de verdad: no hay interpretación pertinente en la que las premisas sean verdaderas y la conclusión falsa.',
  },
]

const hierarchyCases = [
  {
    id: 'fbf',
    mark: 'φ',
    title: 'FBF',
    question: '¿cumple la gramática?',
    scope: 'sintaxis',
    explanation:
      'Una fórmula bien formada pertenece al lenguaje del sistema. Todavía no se pregunta si es verdad lógica o teorema.',
  },
  {
    id: 'verdad',
    mark: '⊨ φ',
    title: 'Verdad lógica',
    question: '¿es verdadera en toda interpretación pertinente?',
    scope: 'semántica',
    explanation:
      'En lógica clásica, la verdad lógica corresponde a una fórmula verdadera bajo toda valuación relevante.',
  },
  {
    id: 'teorema',
    mark: '⊢ φ',
    title: 'Teorema',
    question: '¿se deriva desde axiomas mediante reglas?',
    scope: 'prueba',
    explanation:
      'Un teorema es una fórmula alcanzada dentro del sistema por el procedimiento deductivo autorizado.',
  },
]

const metaProperties = [
  {
    id: 'consistencia',
    mark: '¬⊢(φ ∧ ¬φ)',
    title: 'Consistencia',
    severity: 'crítica',
    question: '¿Es imposible derivar una contradicción?',
    explanation:
      'No basta con no haber encontrado una contradicción: el ideal es demostrar que ninguna cadena legítima de derivaciones puede producirla.',
  },
  {
    id: 'completitud',
    mark: '⊨φ ⇒ ⊢φ',
    title: 'Completitud',
    severity: 'importante',
    question: '¿Toda verdad lógica del sistema es teorema?',
    explanation:
      'Mide si la fuerza deductiva del sistema alcanza todas sus verdades lógicas.',
  },
  {
    id: 'decidibilidad',
    mark: 'φ ? → sí/no',
    title: 'Decidibilidad',
    severity: 'crítica en la sesión',
    question: '¿Existe un método mecánico y finito para decidir?',
    explanation:
      'El criterio presentado exige un procedimiento que termine y determine, para cada fórmula, si pertenece o no a la clase buscada.',
  },
  {
    id: 'rigor',
    mark: 'R',
    title: 'Rigor',
    severity: 'estructural',
    question: '¿Qué tan cerrado y explícito está el sistema?',
    explanation:
      'La sesión vincula rigor con reglas, símbolos y procedimientos suficientemente especificados para poder rastrear lo que ocurre.',
  },
]

const historicalCases = [
  {
    id: 'frege',
    year: '1879',
    title: 'Frege',
    event: 'Conceptografía',
    property: 'fundamentación',
    lesson:
      'Se presenta como un ejemplo temprano de sistema logístico y como antecedente del programa de fundamentar la aritmética mediante la lógica.',
  },
  {
    id: 'russell',
    year: '1902',
    title: 'Russell',
    event: 'paradoja',
    property: 'consistencia',
    lesson:
      'La detección de una contradicción derivable muestra por qué una falla de consistencia amenaza todo el sistema.',
  },
  {
    id: 'godel',
    year: '1931',
    title: 'Gödel',
    event: 'incompletitud',
    property: 'completitud',
    lesson:
      'La clase usa a Gödel para explicar por qué la aritmética no queda capturada totalmente por una base axiomática fija en el sentido narrado por el curso.',
  },
]

const decidabilityCases = [
  {
    id: 'tabla',
    mark: 'TT',
    title: 'Tabla de verdad',
    finite: true,
    result: 'decisión',
    explanation:
      'Aunque el número de combinaciones crezca, para una fórmula proposicional dada el procedimiento termina y entrega un veredicto.',
  },
  {
    id: 'loop',
    mark: '∞',
    title: 'Loop sin parada',
    finite: false,
    result: 'no decide',
    explanation:
      'Un proceso que continúa indefinidamente no constituye por sí mismo un método de decisión.',
  },
  {
    id: 'bandera',
    mark: '✓/✗',
    title: 'Proceso con bandera',
    finite: true,
    result: 'estado evaluable',
    explanation:
      'Si el proceso llega a un punto rastreable en el que emite un veredicto sobre la propiedad buscada, ese estado puede evaluarse formalmente.',
  },
  {
    id: 'cajanegra',
    mark: '■',
    title: 'Caja negra',
    finite: false,
    result: 'pierde trazabilidad',
    explanation:
      'Según el enfoque de la sesión, si no puede reconstruirse qué hizo el algoritmo, se pierde el control formal exigido para hablar estrictamente de decisión o validez.',
  },
]

const extensionCases = [
  {
    id: 'operador',
    mark: '□',
    title: 'Agregar operador',
    change: 'amplía el lenguaje',
    example: 'necesidad / posibilidad',
    consequence:
      'Añadir un operador no es automáticamente lo mismo que añadir axiomas, aunque suele exigir nuevas reglas o principios asociados.',
  },
  {
    id: 'axioma',
    mark: 'A+',
    title: 'Agregar axioma',
    change: 'cambia el sistema',
    example: 'nuevo postulado',
    consequence:
      'El sistema resultante debe tratarse como una nueva arquitectura y sus propiedades deben volver a justificarse.',
  },
  {
    id: 'regla',
    mark: '⊢+',
    title: 'Agregar regla',
    change: 'cambia la derivabilidad',
    example: 'nueva inferencia',
    consequence:
      'Modificar qué pasos están permitidos altera qué fórmulas pueden derivarse y obliga a reexaminar consistencia y otras propiedades.',
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

export default function PhilosophyLogicClass08() {
  const [axiomId, setAxiomId] = useState('contemporaneo')
  const [validityId, setValidityId] = useState('sintactica')
  const [hierarchyId, setHierarchyId] = useState('verdad')
  const [metaId, setMetaId] = useState('consistencia')
  const [historyId, setHistoryId] = useState('russell')
  const [decisionId, setDecisionId] = useState('tabla')
  const [extensionId, setExtensionId] = useState('operador')

  const axiom = useMemo(
    () => axiomViews.find((item) => item.id === axiomId) || axiomViews[1],
    [axiomId],
  )

  const validity = useMemo(
    () => validityViews.find((item) => item.id === validityId) || validityViews[0],
    [validityId],
  )

  const hierarchy = useMemo(
    () => hierarchyCases.find((item) => item.id === hierarchyId) || hierarchyCases[1],
    [hierarchyId],
  )

  const meta = useMemo(
    () => metaProperties.find((item) => item.id === metaId) || metaProperties[0],
    [metaId],
  )

  const history = useMemo(
    () => historicalCases.find((item) => item.id === historyId) || historicalCases[1],
    [historyId],
  )

  const decision = useMemo(
    () => decidabilityCases.find((item) => item.id === decisionId) || decidabilityCases[0],
    [decisionId],
  )

  const extension = useMemo(
    () => extensionCases.find((item) => item.id === extensionId) || extensionCases[0],
    [extensionId],
  )

  return (
    <main className="flc1-page flc8-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>18 · II · 2026</span>
      </nav>

      <header className="flc1-hero flc8-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>⊢/⊨</span><span>¬⊥</span><span>DEC</span><span>Gödel</span><span>∞</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 08</p>
          <h1>
            Validez, metalógica
            <em>y límites del logicismo</em>
          </h1>
          <p className="flc1-lead">
            La sesión trata al sistema axiomático-deductivo como una máquina que
            debe preservar verdad y después somete esa máquina a auditoría:
            consistencia, completitud y decidibilidad. El recorrido histórico
            Frege–Russell–Gödel muestra qué ocurre cuando esas aspiraciones chocan
            con contradicción o incompletitud.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>
            ¿Qué propiedades debe tener un sistema para que podamos confiar en él
            como mecanismo formal de derivación?
          </strong>
          <small>Validez → consistencia → completitud → decidibilidad.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN VIII</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              Construir primero; auditar después
            </SectionTitle>

            <div className="flc8-route">
              {teachingRoute.map(([n, title, text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc8-master-line">
              <span>AXIOMAS</span><b>→</b>
              <span>DERIVACIÓN</span><b>→</b>
              <span>VALIDEZ</span><b>→</b>
              <span>AUDITORÍA</span><b>→</b>
              <span>LÍMITES</span>
            </div>
          </section>

          <section id="maquina" className="flc1-section">
            <SectionTitle number="01" eyebrow="Machina veritatum">
              El sistema axiomático-deductivo como “máquina de verdades”
            </SectionTitle>

            <div className="flc8-machine">
              <article>
                <span>ENTRADA</span>
                <strong>axiomas verdaderos</strong>
              </article>
              <div className="flc8-machine-arrow">
                <small>reglas deductivas</small>
                <b>→</b>
              </div>
              <article className="is-output">
                <span>SALIDA</span>
                <strong>teoremas verdaderos</strong>
              </article>
            </div>
            <LogicFigureNote
              noteId="c08-machine"
              what="Representa el sistema axiomático-deductivo como una máquina que transforma puntos de partida en teoremas mediante reglas."
              how="La entrada son axiomas, la flecha central son reglas deductivas y la salida son consecuencias. La figura presupone una interpretación en la que se habla de verdad; dentro del cálculo puro seguimos trabajando con cadenas y reglas."
              why="Está aquí porque la sesión quiere evaluar si el mecanismo preserva lo que se espera de él. Sólo después de entender la máquina tiene sentido auditar sus propiedades."
              takeaway="La confianza en el sistema depende tanto de sus puntos de partida como de que cada regla conserve correctamente la relación inferencial."
            />

            <div className="flc8-machine-thesis">
              <span>IDEA MATRIZ</span>
              <strong>
                Si una interpretación hace verdaderos los axiomas y la derivación
                es válida, los teoremas preservan esa verdad.
              </strong>
            </div>

            <div className="flc8-axiom-tabs">
              {axiomViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === axiomId ? 'is-active' : ''}
                  onClick={() => setAxiomId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </button>
              ))}
            </div>

            <div className="flc8-axiom-reader">
              <div>
                <span>{axiom.mark}</span>
                <h3>{axiom.title}</h3>
                <small>{axiom.subtitle}</small>
              </div>
              <p>{axiom.explanation}</p>
            </div>

            <div className="flc8-syntax-semantics">
              <article>
                <span>SISTEMA EN SÍ</span>
                <strong>sintaxis</strong>
                <p>cadenas de símbolos + reglas</p>
              </article>
              <div>→</div>
              <article className="is-semantic">
                <span>INTERPRETACIÓN</span>
                <strong>semántica</strong>
                <p>P y Q pueden interpretarse después como oraciones, objetos o cualquier dominio adecuado.</p>
              </article>
            </div>
          </section>

          <section id="validez" className="flc1-section">
            <SectionTitle number="02" eyebrow="Una res, duo aspectus">
              La misma validez vista desde dos caras
            </SectionTitle>

            <div className="flc8-validity-tabs">
              {validityViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === validityId ? 'is-active' : ''}
                  onClick={() => setValidityId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc8-validity-reader">
              <div>
                <span>{validity.mark}</span>
                <h3>{validity.question}</h3>
              </div>
              <p>{validity.explanation}</p>
            </div>

            <div className="flc8-two-sides">
              <article>
                <span>SINTÁCTICA</span>
                <strong>reglas correctamente aplicadas</strong>
              </article>
              <div className="flc8-coin">◉</div>
              <article>
                <span>SEMÁNTICA</span>
                <strong>verdad preservada</strong>
              </article>
            </div>
            <LogicFigureNote
              noteId="c08-validity"
              what="Presenta la validez como un fenómeno que puede describirse desde sintaxis o semántica."
              how="A la izquierda se revisa si las reglas se aplicaron correctamente; a la derecha se expresa que no puede darse el caso de premisas verdaderas con conclusión falsa. El centro indica correspondencia conceptual, no dos validez independientes."
              why="Está aquí porque las propiedades metalógicas posteriores conectarán precisamente estos dos niveles de descripción."
              takeaway="Validez formal y preservación de verdad son dos maneras de mirar el mismo éxito inferencial en el marco de la sesión."
            />

            <p className="flc8-note">
              La sesión insiste en que no se están postulando dos tipos
              independientes de validez, sino dos modos de describir el mismo fenómeno.
            </p>
          </section>

          <section id="demostracion" className="flc1-section">
            <SectionTitle number="03" eyebrow="Demonstratio directa">
              Demostrar es exhibir la cadena de reglas
            </SectionTitle>

            <div className="flc8-proof">
              <article>
                <span>1</span>
                <strong>P → Q</strong>
                <small>premisa</small>
              </article>
              <article>
                <span>2</span>
                <strong>P</strong>
                <small>premisa</small>
              </article>
              <article className="is-derived">
                <span>3</span>
                <strong>Q</strong>
                <small>1, 2 · regla permitida</small>
              </article>
            </div>
            <LogicFigureNote
              noteId="c08-proof"
              what="Muestra una demostración directa mínima como cadena justificable de líneas."
              how="Las primeras líneas proporcionan premisas; la última sólo puede escribirse porque existe una regla autorizada que conecta ambas con Q. Cada paso debe poder rastrearse hacia atrás."
              why="Está aquí para convertir “demostrar” en una actividad verificable y no en la impresión subjetiva de que una conclusión parece correcta."
              takeaway="Una prueba formal es trazable: se puede preguntar en cada línea de dónde salió y qué regla permitió obtenerla."
            />

            <div className="flc8-proof-rules">
              <article>
                <span>NO IMPORTA</span>
                <strong>qué significan P y Q</strong>
              </article>
              <article>
                <span>SÍ IMPORTA</span>
                <strong>que cada símbolo esté definido</strong>
              </article>
              <article>
                <span>SÍ IMPORTA</span>
                <strong>que no se inventen reglas durante la prueba</strong>
              </article>
              <article>
                <span>SÍ IMPORTA</span>
                <strong>que cada paso esté justificado</strong>
              </article>
            </div>
          </section>

          <section id="demarcacion" className="flc1-section">
            <SectionTitle number="04" eyebrow="Criterium legitimitatis">
              La demarcación se endurece: debe garantizar validez deductiva
            </SectionTitle>

            <div className="flc8-demarcation">
              <article className="is-valid">
                <span>SISTEMA FORMAL DEDUCTIVO</span>
                <strong>reglas explícitas</strong>
                <strong>preservación de validez</strong>
              </article>

              <article>
                <span>“INDUCTIVO”</span>
                <strong>puede ser útil</strong>
                <small>pero no cumple este criterio deductivo</small>
              </article>

              <article>
                <span>“LIBRE” SIN REGLAS</span>
                <strong>sin control formal</strong>
                <small>no califica dentro del marco del curso</small>
              </article>

              <article>
                <span>VALORES ARBITRARIOS</span>
                <strong>pierde garantía</strong>
                <small>si todo puede cambiar sin reglas, la validez deja de estar asegurada</small>
              </article>
            </div>
          </section>

          <section id="jerarquia" className="flc1-section">
            <SectionTitle number="05" eyebrow="Hierarchia formularum">
              FBF, verdad lógica y teorema
            </SectionTitle>

            <div className="flc8-hierarchy-tabs">
              {hierarchyCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === hierarchyId ? 'is-active' : ''}
                  onClick={() => setHierarchyId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.scope}</small>
                </button>
              ))}
            </div>

            <div className="flc8-hierarchy-reader">
              <div>
                <span>{hierarchy.mark}</span>
                <h3>{hierarchy.question}</h3>
                <small>{hierarchy.scope}</small>
              </div>
              <p>{hierarchy.explanation}</p>
            </div>

            <div className="flc8-nested">
              <div className="flc8-fbf">
                <span>FBF</span>
                <div className="flc8-truth">
                  <span>VERDADES LÓGICAS</span>
                  <div className="flc8-theorems">
                    <span>TEOREMAS</span>
                  </div>
                </div>
              </div>
            </div>
            <LogicFigureNote
              noteId="c08-hierarchy"
              what="Representa una relación de inclusión entre FBF, verdades lógicas y teoremas según el esquema utilizado en la sesión."
              how="El contenedor exterior muestra que todo lo demás debe, primero, estar bien formado. El segundo nivel añade verdad lógica y el núcleo representa aquello que además es derivable como teorema dentro del sistema."
              why="Está aquí para hacer visible por qué las tres categorías no son equivalentes aun cuando puedan solaparse fuertemente."
              takeaway="La figura prepara la pregunta de completitud: ¿coinciden por completo verdades lógicas y teoremas o queda algo entre ambos niveles?"
            />

            <div className="flc8-relations">
              <p>✓ toda verdad lógica es FBF</p>
              <p>✓ todo teorema es FBF</p>
              <p>✓ todo teorema se trata aquí como verdad lógica</p>
              <p>✗ no toda FBF es verdad lógica</p>
              <p>✗ la sesión deja abierta la posibilidad de verdades lógicas no derivadas como teoremas en un sistema incompleto</p>
            </div>
          </section>

          <section id="metalogica" className="flc1-section">
            <SectionTitle number="06" eyebrow="Tabula auditiva">
              El panel metalógico del sistema
            </SectionTitle>

            <div className="flc8-meta-tabs">
              {metaProperties.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === metaId ? 'is-active' : ''}
                  onClick={() => setMetaId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.severity}</small>
                </button>
              ))}
            </div>

            <div className="flc8-meta-reader">
              <div>
                <span>{meta.severity}</span>
                <h3>{meta.question}</h3>
                <code>{meta.mark}</code>
              </div>
              <p>{meta.explanation}</p>
            </div>

            <div className="flc8-severity">
              <article className="is-fatal">
                <span>INCONSISTENCIA</span>
                <strong>colapso</strong>
              </article>
              <article>
                <span>INCOMPLETITUD</span>
                <strong>límite, no necesariamente colapso</strong>
              </article>
              <article className="is-fatal">
                <span>INDECIDIBILIDAD · ENFOQUE DE LA SESIÓN</span>
                <strong>amenaza la función de decisión</strong>
              </article>
            </div>
            <LogicFigureNote
              noteId="c08-severity"
              what="Compara el tipo de problema que representan inconsistencia, incompletitud e indecidibilidad en el encuadre de la sesión."
              how="No lea las columnas como una escala matemática exacta. “Colapso”, “límite” y “amenaza a la decisión” resumen funciones distintas: contradicción compromete la confiabilidad, incompletitud deja verdades fuera del alcance y la indecidibilidad limita procedimientos mecánicos de veredicto."
              why="Está aquí para evitar tratar todas las propiedades metalógicas como si su falla tuviera la misma consecuencia."
              takeaway="Antes de decir que un sistema “falla”, hay que preguntar qué propiedad falla y qué función del sistema estaba destinada a garantizar."
            />
          </section>

          <section id="consistencia" className="flc1-section">
            <SectionTitle number="07" eyebrow="Conditio fortissima">
              Consistencia: no basta con no haber encontrado contradicciones
            </SectionTitle>

            <div className="flc8-consistency">
              <div className="flc8-consistent-side">
                <span>CONSISTENCIA</span>
                <strong>¬⊢ (φ ∧ ¬φ)</strong>
                <p>ninguna derivación legítima produce contradicción</p>
              </div>

              <div className="flc8-consistency-arrow">vs.</div>

              <div className="flc8-inconsistent-side">
                <span>INCONSISTENCIA</span>
                <strong>⊢ (φ ∧ ¬φ)</strong>
                <p>el sistema demuestra una contradicción</p>
              </div>
            </div>
            <LogicFigureNote
              noteId="c08-consistency"
              what="Contrasta un sistema que no deriva contradicciones con uno en el que una contradicción sí es demostrable."
              how="El símbolo ¬⊢(φ ∧ ¬φ) expresa el ideal de no derivabilidad de contradicción; el lado opuesto muestra que la contradicción ha entrado al conjunto de consecuencias autorizadas."
              why="Está aquí porque no encontrar una contradicción por inspección no equivale a demostrar consistencia. La metalógica busca una garantía sobre todas las derivaciones posibles."
              takeaway="Consistencia es una propiedad global del sistema: habla de lo que puede o no puede derivarse en cualquier cadena legítima."
            />

            <div className="flc8-explosion">
              <span>POR QUÉ ES FATAL EN EL MARCO CLÁSICO</span>
              <div>
                <strong>contradicción</strong><b>→</b>
                <strong>explosión</strong><b>→</b>
                <strong>trivialización</strong>
              </div>
              <p>
                Si una contradicción es derivable, el sistema deja de funcionar
                como una máquina confiable de fundamentación.
              </p>
            </div>
            <LogicFigureNote
              noteId="c08-explosion"
              what="Resume por qué una contradicción se presenta como problema fatal en el marco clásico discutido."
              how="La secuencia contradicción → explosión → trivialización indica que, si el sistema permite derivar demasiado a partir de una contradicción, deja de discriminar consecuencias de manera útil."
              why="Está aquí para explicar por qué Russell no representa simplemente “un error curioso” en el relato del curso, sino una amenaza al programa de fundamentación."
              takeaway="El problema de la inconsistencia no es sólo tener dos frases incompatibles; es comprometer la capacidad del sistema para funcionar como fundamento confiable."
            />

            <div className="flc8-proof-vs-search">
              <article>
                <span>NO BASTA</span>
                <strong>“no encontré contradicciones”</strong>
              </article>
              <div>≠</div>
              <article className="is-proof">
                <span>IDEAL</span>
                <strong>demostrar que no pueden derivarse</strong>
              </article>
            </div>
          </section>

          <section id="completitud" className="flc1-section">
            <SectionTitle number="08" eyebrow="Completudo et historia">
              Completitud y límites del programa logicista
            </SectionTitle>

            <div className="flc8-completeness">
              <article>
                <span>COMPLETO</span>
                <strong>⊨φ ⇒ ⊢φ</strong>
                <p>toda verdad lógica es teorema</p>
              </article>
              <div>vs.</div>
              <article className="is-incomplete">
                <span>INCOMPLETO</span>
                <strong>⊨φ ∧ ¬⊢φ</strong>
                <p>alguna verdad queda fuera de la derivación</p>
              </article>
            </div>
            <LogicFigureNote
              noteId="c08-completeness"
              what="Contrasta completitud e incompletitud mediante la relación entre verdad lógica y derivabilidad."
              how="El lado completo afirma que toda verdad relevante del sistema puede demostrarse; el lado incompleto representa la posibilidad de una verdad que no aparece como teorema dentro de la base y reglas disponibles."
              why="Está aquí para diferenciar claramente incompletitud de inconsistencia: un sistema puede tener límites deductivos sin por ello derivar contradicciones."
              takeaway="Completitud pregunta por alcance; consistencia pregunta por ausencia de contradicción. Son propiedades independientes en su significado."
            />

            <div className="flc8-history-tabs">
              {historicalCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === historyId ? 'is-active' : ''}
                  onClick={() => setHistoryId(item.id)}
                >
                  <span>{item.year}</span>
                  <strong>{item.title}</strong>
                  <small>{item.event}</small>
                </button>
              ))}
            </div>

            <div className="flc8-history-reader">
              <div>
                <span>{history.property}</span>
                <h3>{history.title}</h3>
                <strong>{history.event}</strong>
              </div>
              <p>{history.lesson}</p>
            </div>

            <div className="flc8-logicism-line">
              <span>FREGE</span><b>→</b>
              <span>RUSSELL</span><b>→</b>
              <span>TEORÍA DE TIPOS</span><b>→</b>
              <span>GÖDEL</span><b>→</b>
              <span>LÍMITE DEL PROGRAMA</span>
            </div>
            <LogicFigureNote
              noteId="c08-history"
              what="Organiza el relato histórico Frege → Russell → teoría de tipos → Gödel utilizado para contextualizar límites del programa logicista."
              how="La línea no resume toda la historia de la lógica matemática. Cada punto está elegido por la función que cumple en la narrativa de la sesión: fundamentación, contradicción, reparación y límite de completitud."
              why="Está aquí para mostrar que las propiedades metalógicas no son sólo definiciones abstractas; influyeron en programas filosóficos concretos sobre el fundamento de la matemática."
              takeaway="Lea la línea como mapa pedagógico del curso, no como historia exhaustiva ni como sustituto de estudiar cada resultado por separado."
            />

            <p className="flc8-course-framing">
              Esta reconstrucción conserva el encuadre histórico y técnico de la
              sesión: Russell ilustra el problema de inconsistencia y Gödel el de
              incompletitud en el programa de fundamentación de la aritmética.
            </p>
          </section>

          <section id="decidibilidad" className="flc1-section">
            <SectionTitle number="09" eyebrow="Methodus finita">
              Decidir exige un método mecánico y finito
            </SectionTitle>

            <div className="flc8-decision-tabs">
              {decidabilityCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === decisionId ? 'is-active' : ''}
                  onClick={() => setDecisionId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className={`flc8-decision-reader ${decision.finite ? 'is-decision' : 'is-no-decision'}`}>
              <div>
                <span>{decision.result}</span>
                <h3>{decision.title}</h3>
                <strong>{decision.mark}</strong>
              </div>
              <p>{decision.explanation}</p>
            </div>

            <div className="flc8-truth-table">
              <span>EJEMPLO CANÓNICO · PROPOSICIONAL</span>
              <div>
                <strong>P</strong>
                <strong>Q</strong>
                <strong>P → Q</strong>
                <span>V</span><span>V</span><span>V</span>
                <span>V</span><span>F</span><span>F</span>
                <span>F</span><span>V</span><span>V</span>
                <span>F</span><span>F</span><span>V</span>
              </div>
              <p>
                El número de filas puede crecer, pero para una fórmula concreta
                sigue siendo finito: el procedimiento termina.
              </p>
            </div>
            <LogicFigureNote
              noteId="c08-decision"
              what="Usa una tabla de verdad como ejemplo de procedimiento finito de decisión en lógica proposicional."
              how="Cada fila cubre una valuación posible de P y Q. Al terminar todas las combinaciones pertinentes obtenemos un resultado definido para la fórmula; lo importante es que el número de pasos sea finito para la entrada dada."
              why="Está aquí para volver concreto qué significa “decidible” en la discusión de la sesión: existe un método mecánico que termina y entrega un veredicto."
              takeaway="La eficiencia puede ser mala cuando crecen las variables, pero “tardar mucho” no es lo mismo que “no tener procedimiento de decisión”."
            />
          </section>

          <section id="algoritmos" className="flc1-section">
            <SectionTitle number="10" eyebrow="Computatio">
              Lo que un loop o una IA enseñan sobre decisión y trazabilidad
            </SectionTitle>

            <div className="flc8-algorithm">
              <article>
                <span>PROCESO ABIERTO</span>
                <strong>loop → loop → loop → …</strong>
                <p>Puede seguir creciendo sin entregar decisión.</p>
              </article>

              <div>vs.</div>

              <article className="is-decision">
                <span>PUNTO EVALUABLE</span>
                <strong>estado → bandera V/F</strong>
                <p>Hay un criterio rastreable sobre la propiedad evaluada.</p>
              </article>
            </div>
            <LogicFigureNote
              noteId="c08-loop"
              what="Contrasta un proceso que puede continuar indefinidamente con uno que llega a un estado evaluable."
              how="El lado abierto muestra repetición sin garantía de parada. El otro lado muestra un estado en el que una bandera o criterio ofrece un veredicto. La diferencia central es terminación y trazabilidad, no que uno use computadoras y el otro no."
              why="Está aquí porque la clase conecta decidibilidad con algoritmos: un procedimiento de decisión necesita algo más que “seguir procesando”."
              takeaway="Para hablar de decisión en el sentido trabajado aquí necesitamos un criterio finito de parada y una respuesta identificable."
            />

            <div className="flc8-blackbox">
              <span>CAJA NEGRA</span>
              <strong>input → ????????? → output</strong>
              <p>
                En el enfoque desarrollado en esta sesión, una salida sin
                trazabilidad de los pasos pierde el tipo de control formal que
                se exige para evaluar estrictamente corrección, validez o decisión.
              </p>
            </div>

            <div className="flc8-ai-caution">
              <span>ALCANCE DE LA AFIRMACIÓN</span>
              <p>
                Esta sección reproduce el contraste conceptual usado en clase
                entre procesos que continúan aprendiendo y procedimientos de
                decisión. No afirma que toda IA sea literalmente indecidible:
                el punto es que “seguir procesando” y “decidir mediante un criterio
                finito rastreable” son nociones distintas.
              </p>
            </div>
          </section>

          <section id="extensiones" className="flc1-section">
            <SectionTitle number="11" eyebrow="Nova architectura">
              Extender un sistema obliga a volver a demostrar sus propiedades
            </SectionTitle>

            <div className="flc8-extension-tabs">
              {extensionCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === extensionId ? 'is-active' : ''}
                  onClick={() => setExtensionId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.change}</small>
                </button>
              ))}
            </div>

            <div className="flc8-extension-reader">
              <div>
                <span>{extension.mark}</span>
                <h3>{extension.example}</h3>
                <small>{extension.change}</small>
              </div>
              <p>{extension.consequence}</p>
            </div>

            <div className="flc8-extension-flow">
              <span>SISTEMA A</span><b>+</b>
              <span>NUEVO OPERADOR / AXIOMA / REGLA</span><b>→</b>
              <span>SISTEMA B</span><b>→</b>
              <strong>RE-PROBAR CONSISTENCIA Y DEMÁS PROPIEDADES</strong>
            </div>
            <LogicFigureNote
              noteId="c08-extension"
              what="Muestra que añadir operadores, axiomas o reglas produce una arquitectura que debe evaluarse de nuevo."
              how="El sistema B puede conservar mucho del sistema A, pero la nueva pieza puede alterar qué fórmulas existen o qué puede derivarse. Por eso la flecha final exige volver a estudiar consistencia y otras propiedades."
              why="Está aquí para evitar asumir que una extensión hereda automáticamente todas las garantías del sistema original."
              takeaway="Cada ampliación debe justificarse metalógicamente: conservar una base no basta para asegurar que todas sus propiedades sobrevivan sin prueba."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="12" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc8-summary">
              <article>
                <span>IDEA 1</span>
                <h3>La deducción preserva</h3>
                <p>
                  El ideal de “máquina de verdades” depende de que las reglas
                  conserven la verdad desde axiomas hasta teoremas.
                </p>
              </article>
              <article>
                <span>IDEA 2</span>
                <h3>Validez tiene dos lecturas</h3>
                <p>
                  Puede describirse sintácticamente por reglas o semánticamente
                  por preservación de verdad.
                </p>
              </article>
              <article>
                <span>IDEA 3</span>
                <h3>Metalógica audita el sistema</h3>
                <p>
                  Consistencia, completitud y decidibilidad ya no preguntan por
                  una fórmula particular, sino por la arquitectura completa.
                </p>
              </article>
              <article>
                <span>IDEA 4</span>
                <h3>No todas las fallas pesan igual</h3>
                <p>
                  La sesión trata inconsistencia como colapso, incompletitud como
                  límite y decidibilidad como exigencia crítica de control.
                </p>
              </article>
            </div>

            <div className="flc8-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿En qué sentido un sistema axiomático-deductivo es una “máquina de verdades”?</li>
                <li>¿Qué cambia entre axioma clásico y axioma contemporáneo?</li>
                <li>¿Por qué el sistema puede operar sintácticamente antes de ser interpretado?</li>
                <li>¿Cómo se relacionan validez formal y validez semántica?</li>
                <li>¿Qué muestra exactamente una demostración directa?</li>
                <li>¿Qué criterio de demarcación enfatiza esta sesión?</li>
                <li>¿Qué diferencia FBF, verdad lógica y teorema?</li>
                <li>¿Por qué consistencia exige más que “no encontré contradicciones”?</li>
                <li>¿Por qué incompletitud no equivale a inconsistencia?</li>
                <li>¿Qué función cumple Russell en el relato histórico del curso?</li>
                <li>¿Qué función cumple Gödel?</li>
                <li>¿Qué significa decidibilidad mediante un método mecánico finito?</li>
                <li>¿Por qué un loop infinito no constituye por sí mismo una decisión?</li>
                <li>¿Qué problema introduce una caja negra para la trazabilidad formal?</li>
                <li>¿Qué debe volver a probarse cuando extendemos un sistema?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Continuidad</strong>
              <p>
                La clase termina con la arquitectura de sistemas extendidos y la
                exigencia de volver a comprobar sus propiedades metalógicas. El
                material no fija aquí una entrega concreta con fecha.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 08 · 18 febrero 2026</span>
      </footer>
    </main>
  )
}
