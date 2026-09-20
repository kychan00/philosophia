import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass05.css'

const sections = [
  ['00', 'ruta', 'Ruta de enseñanza'],
  ['01', 'lenguaje', 'Lenguaje y lengua'],
  ['02', 'gramatica', 'Gramática'],
  ['03', 'formas', 'Forma y función'],
  ['04', 'enunciado', 'De oración a enunciado'],
  ['05', 'proposicion', 'Proposición y verdad'],
  ['06', 'pseudo', 'Pseudoproposiciones'],
  ['07', 'validez', 'Bivalencia y validez'],
  ['08', 'analiticas', 'Analíticas y sintéticas'],
  ['09', 'semanticas', 'Tres semánticas'],
  ['10', 'falsedad', 'Condiciones de falsedad'],
  ['11', 'sistemas', 'Hacia sistemas deductivos'],
  ['12', 'cierre', 'Síntesis docente'],
]

const routeSteps = [
  ['1', 'Código', 'Distinguir la capacidad general de comunicarse del sistema reglado que llamamos lengua.'],
  ['2', 'Forma', 'Usar la gramática para separar buena formación de verdad o falsedad.'],
  ['3', 'Contenido', 'Pasar de oración a enunciado: no toda oración dice algo de algo.'],
  ['4', 'Veracidad', 'Pasar de enunciado a proposición: sólo entra al cálculo aquello con potencial de verdad.'],
  ['5', 'Deducción', 'Conectar bivalencia, validez y condiciones de falsedad con sistemas axiomático-deductivos.'],
]

const formFunctionCases = [
  {
    id: 'interrogativa',
    form: 'Interrogativa',
    typical: 'inquisitiva',
    example: '¿Está abierta la puerta?',
    lesson: 'La forma interrogativa suele preguntar, pero la función real depende del uso.',
  },
  {
    id: 'imperativa',
    form: 'Imperativa',
    typical: 'directiva',
    example: 'Cierra la puerta.',
    lesson: 'La forma imperativa normalmente ordena o pide.',
  },
  {
    id: 'declarativa',
    form: 'Declarativa',
    typical: 'afirmativa',
    example: 'La puerta está abierta.',
    lesson: 'Es la forma que más fácilmente se presta al contenido proposicional.',
  },
  {
    id: 'desajuste',
    form: 'Interrogativa',
    typical: 'afirmativa / retórica',
    example: '¿Se acuerdan que hoy es el examen?',
    lesson: 'Tiene forma interrogativa, pero en el ejemplo de clase funciona como recordatorio o afirmación.',
  },
]

const propositionCases = [
  {
    id: 'plena',
    title: 'Proposición plena',
    text: 'La mesa es de madera.',
    subject: 'la mesa',
    predicate: 'es de madera',
    truth: 'V / F',
    status: 'entra al cálculo',
    note: 'Dice algo de algo y, en principio, puede evaluarse como verdadero o falso.',
  },
  {
    id: 'exclamacion',
    title: 'Oración no enunciativa',
    text: '¡Ay, güey!',
    subject: '—',
    predicate: '—',
    truth: 'no aplica directamente',
    status: 'queda fuera',
    note: 'Tiene sentido expresivo, pero no presenta el tipo de contenido enunciativo requerido.',
  },
  {
    id: 'pregunta',
    title: 'Interrogativa',
    text: '¿Qué horas son?',
    subject: '?',
    predicate: '?',
    truth: 'no V/F de modo directo',
    status: 'problemática',
    note: 'Puede ser gramaticalmente correcta sin funcionar como proposición en el sentido lógico trabajado.',
  },
  {
    id: 'futuro',
    title: 'Futuro contingente',
    text: 'Mañana lloverá.',
    subject: 'mañana / mundo',
    predicate: 'lloverá',
    truth: '?',
    status: 'caso límite',
    note: 'La clase lo usa para discutir si toda expresión enunciativa posee ya potencial de veracidad en el sentido operativo clásico.',
  },
]

const propositionKinds = [
  {
    id: 'analitica',
    mark: '□',
    title: 'Analítica',
    subtitle: 'necesaria · verdad de razón',
    example: 'A = A',
    explanation:
      'Su negación chocaría con principios lógicos de fondo como identidad o no contradicción. La sesión la presenta como necesaria.',
  },
  {
    id: 'sintetica',
    mark: '◇',
    title: 'Sintética',
    subtitle: 'contingente · verdad de hecho',
    example: 'Guadalajara es más grande que Colima.',
    explanation:
      'Depende de cómo es el mundo y pudo haber sido de otro modo. Que sea claramente verdadera no la vuelve necesaria.',
  },
]

const semantics = [
  {
    id: 'linguistica',
    mark: 'signo',
    title: 'Semántica lingüística',
    relation: 'significante ↔ significado',
    explanation:
      'Estudia cómo una lengua codifica significado y construye sentido según sus reglas.',
  },
  {
    id: 'logica',
    mark: 'T/F',
    title: 'Semántica lógica',
    relation: 'expresión ↔ condiciones de verdad',
    explanation:
      'Pregunta qué tendría que ocurrir para que una proposición sea verdadera o falsa.',
  },
  {
    id: 'cognitiva',
    mark: 'S↔W',
    title: 'Semántica cognitiva',
    relation: 'sujeto ↔ lenguaje ↔ mundo',
    explanation:
      'En el enfoque filosófico de la clase, el lenguaje funciona como puente epistemológico entre sujeto y mundo.',
  },
]

const systemTypes = [
  {
    id: 'abierto',
    title: 'Sistema abierto',
    example: 'lenguaje ordinario',
    criterion: 'corrección, uso, contexto',
    explanation:
      'No se evalúa primariamente por validez deductiva; admite variación, contexto y usos múltiples.',
  },
  {
    id: 'cerrado',
    title: 'Sistema deductivo',
    example: 'sistema formal / axiomático',
    criterion: 'validez de derivaciones',
    explanation:
      'Opera con reglas deductivas explícitas que permiten determinar cuándo una derivación es válida.',
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

export default function PhilosophyLogicClass05() {
  const [formId, setFormId] = useState('desajuste')
  const [propId, setPropId] = useState('plena')
  const [kindId, setKindId] = useState('analitica')
  const [semanticId, setSemanticId] = useState('logica')
  const [systemId, setSystemId] = useState('cerrado')

  const formCase = useMemo(
    () => formFunctionCases.find((item) => item.id === formId) || formFunctionCases[3],
    [formId],
  )

  const propCase = useMemo(
    () => propositionCases.find((item) => item.id === propId) || propositionCases[0],
    [propId],
  )

  const kind = useMemo(
    () => propositionKinds.find((item) => item.id === kindId) || propositionKinds[0],
    [kindId],
  )

  const semantic = useMemo(
    () => semantics.find((item) => item.id === semanticId) || semantics[1],
    [semanticId],
  )

  const system = useMemo(
    () => systemTypes.find((item) => item.id === systemId) || systemTypes[1],
    [systemId],
  )

  return (
    <main className="flc1-page flc5-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>09 · II · 2026</span>
      </nav>

      <header className="flc1-hero flc5-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>V/F</span><span>⊢</span><span>□</span><span>◇</span><span>S→P</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 05</p>
          <h1>
            Oración, enunciado,
            <em>proposición y verdad</em>
          </h1>
          <p className="flc1-lead">
            La sesión construye el fragmento del lenguaje que interesa a la lógica:
            no basta con que una expresión sea gramaticalmente correcta; debe
            enunciar algo y poseer potencial de veracidad. Desde ahí aparecen
            bivalencia, validez, necesidad, contingencia y condiciones de falsedad.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>
            ¿Qué tiene que pasar para que una expresión lingüística pueda convertirse
            en una pieza del cálculo lógico?
          </strong>
          <small>Oración → enunciado → proposición → V/F → validez.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN V</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              La escalera conceptual de toda la sesión
            </SectionTitle>

            <div className="flc5-route">
              {routeSteps.map(([n, title, text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc5-master-line">
              <span>LENGUAJE</span><b>→</b>
              <span>ORACIÓN</span><b>→</b>
              <span>ENUNCIADO</span><b>→</b>
              <span>PROPOSICIÓN</span><b>→</b>
              <span>VALIDEZ</span>
            </div>
          </section>

          <section id="lenguaje" className="flc1-section">
            <SectionTitle number="01" eyebrow="Facultas / codex">
              Lenguaje no es lo mismo que lengua
            </SectionTitle>

            <div className="flc5-language-vs">
              <article>
                <span>LENGUAJE</span>
                <strong>capacidad</strong>
                <p>
                  Capacidad general de comunicarnos: gestos, ruidos, señas,
                  acuerdos momentáneos o sistemas más complejos.
                </p>
              </article>
              <div>≠</div>
              <article className="is-code">
                <span>LENGUA</span>
                <strong>código reglado</strong>
                <p>
                  Sistema específico y relativamente estable, como español o
                  castellano, con reglas compartidas.
                </p>
              </article>
            </div>
            <LogicFigureNote
              noteId="c05-language"
              what="Distingue la capacidad general de comunicar de una lengua entendida como código reglado."
              how="El lado “lenguaje” es más amplio e incluye diversas formas de comunicación. El lado “lengua” representa un sistema compartido y relativamente estable, como el español, sobre el que pueden formularse reglas gramaticales."
              why="Está aquí porque antes de preguntar qué fragmento del lenguaje interesa a la lógica hay que saber sobre qué tipo de estructura lingüística se está trabajando."
              takeaway="Toda lengua es una forma de lenguaje en el sentido amplio trabajado aquí, pero no toda capacidad comunicativa constituye una lengua reglada."
            />

            <div className="flc1-definition">
              <span>POR QUÉ IMPORTA PARA LA LÓGICA</span>
              <p>
                Antes de seleccionar proposiciones, la clase distingue el campo
                general de la comunicación del sistema normado sobre el que pueden
                formularse reglas gramaticales.
              </p>
            </div>
          </section>

          <section id="gramatica" className="flc1-section">
            <SectionTitle number="02" eyebrow="Duae quaestiones">
              Gramática separa buena formación de veracidad
            </SectionTitle>

            <div className="flc5-two-questions">
              <article>
                <span>PREGUNTA 1 · GRAMÁTICA</span>
                <strong>¿Está bien formada?</strong>
                <div>
                  <p>Sintaxis</p>
                  <p>Semántica lingüística</p>
                </div>
              </article>
              <div>≠</div>
              <article className="is-truth">
                <span>PREGUNTA 2 · LÓGICA / EPISTEMOLOGÍA</span>
                <strong>¿Es verdadera o falsa?</strong>
                <div>
                  <p>valor de verdad</p>
                  <p>condiciones de verdad</p>
                </div>
              </article>
            </div>
            <LogicFigureNote
              noteId="c05-twoquestions"
              what="Separa la pregunta por buena formación de la pregunta por verdad o falsedad."
              how="Primero revise si la expresión satisface la gramática del código; sólo después tiene sentido pasar al plano lógico o epistemológico de sus condiciones de verdad. Las dos columnas evitan colapsar ambos criterios."
              why="Está aquí porque una frase puede estar perfectamente formada y ser falsa, o incluso estar bien formada sin que todavía hayamos fijado una interpretación suficiente para evaluarla."
              takeaway="Corrección gramatical no garantiza verdad: son filtros distintos y deben aplicarse en niveles distintos."
            />

            <div className="flc5-synsem">
              <article>
                <span>SINTAXIS</span>
                <h3>orden y relación</h3>
                <p>Cómo se combinan los componentes.</p>
              </article>
              <article>
                <span>SEMÁNTICA</span>
                <h3>significado</h3>
                <p>Cómo se construye sentido dentro del código.</p>
              </article>
            </div>
          </section>

          <section id="formas" className="flc1-section">
            <SectionTitle number="03" eyebrow="Forma ≠ functio">
              La forma gramatical no determina por sí sola la función
            </SectionTitle>

            <div className="flc5-form-tabs">
              {formFunctionCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === formId ? 'is-active' : ''}
                  onClick={() => setFormId(item.id)}
                >
                  <span>{item.form}</span>
                  <strong>{item.typical}</strong>
                </button>
              ))}
            </div>

            <div className="flc5-form-reader">
              <div>
                <span>FORMA</span>
                <h3>{formCase.form}</h3>
                <small>{formCase.typical}</small>
              </div>
              <div>
                <strong>{formCase.example}</strong>
                <p>{formCase.lesson}</p>
              </div>
            </div>

            <div className="flc5-mismatch">
              <span>CASO DE CLASE</span>
              <strong>“¿Se acuerdan que hoy es el examen?”</strong>
              <p>
                Su forma es interrogativa, pero puede funcionar como recordatorio
                o afirmación. Esta diferencia prepara el paso de oración a enunciado.
              </p>
            </div>
          </section>

          <section id="enunciado" className="flc1-section">
            <SectionTitle number="04" eyebrow="Contentum enuntiativum">
              Un enunciado dice algo de algo
            </SectionTitle>

            <div className="flc5-stair">
              <article>
                <span>NIVEL 1</span>
                <strong>ORACIÓN</strong>
                <p>Unidad lingüística bien formada.</p>
              </article>
              <b>→</b>
              <article className="is-enunciado">
                <span>NIVEL 2</span>
                <strong>ENUNCIADO</strong>
                <p>Oración usada para decir algo de alguien o algo.</p>
              </article>
              <b>→</b>
              <article>
                <span>NIVEL 3</span>
                <strong>PROPOSICIÓN</strong>
                <p>Enunciado con potencial de verdad.</p>
              </article>
            </div>
            <LogicFigureNote
              noteId="c05-stair"
              what="Construye la escalera oración → enunciado → proposición."
              how="Cada peldaño añade una exigencia. La oración es una unidad lingüística; el enunciado se usa para decir algo de algo; la proposición añade potencial de verdad o falsedad."
              why="Está aquí porque “oración”, “enunciado” y “proposición” suelen usarse como si fueran sinónimos. La sesión necesita criterios para restringir progresivamente el fragmento que puede entrar al cálculo lógico."
              takeaway="No toda oración es enunciado y, en el marco de la clase, no todo enunciado queda automáticamente tratado como proposición."
            />

            <div className="flc5-subject-predicate">
              <article>
                <span>SUJETO</span>
                <strong>¿de quién / de qué?</strong>
              </article>
              <div>+</div>
              <article>
                <span>PREDICADO</span>
                <strong>¿qué se dice?</strong>
              </article>
              <div>=</div>
              <article className="is-result">
                <span>CONTENIDO</span>
                <strong>enunciativo</strong>
              </article>
            </div>

            <div className="flc5-not-enunciado">
              <strong>“¡Ay, güey!”</strong>
              <p>
                Es una oración exclamativa con sentido expresivo, pero no dice
                algo de alguien; por eso no funciona como enunciado en el sentido
                operativo de la clase.
              </p>
            </div>
          </section>

          <section id="proposicion" className="flc1-section">
            <SectionTitle number="05" eyebrow="Potentia veritatis">
              Proposición = enunciado con potencial de veracidad
            </SectionTitle>

            <div className="flc5-prop-tabs">
              {propositionCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === propId ? 'is-active' : ''}
                  onClick={() => setPropId(item.id)}
                >
                  <span>{item.status}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc5-prop-reader">
              <div>
                <span>{propCase.status}</span>
                <h3>{propCase.text}</h3>
              </div>
              <div className="flc5-prop-data">
                <div><span>SUJETO</span><strong>{propCase.subject}</strong></div>
                <div><span>PREDICADO</span><strong>{propCase.predicate}</strong></div>
                <div><span>VERACIDAD</span><strong>{propCase.truth}</strong></div>
              </div>
              <p>{propCase.note}</p>
            </div>

            <div className="flc5-definition-card">
              <span>DEFINICIÓN DE TRABAJO DE LA SESIÓN</span>
              <strong>
                Proposición = enunciado que puede calificarse, en principio,
                como verdadero o falso.
              </strong>
            </div>
          </section>

          <section id="pseudo" className="flc1-section">
            <SectionTitle number="06" eyebrow="Casus limites">
              Pseudoproposiciones y futuros contingentes
            </SectionTitle>

            <div className="flc5-tomorrow">
              <div>
                <span>EXPRESIÓN</span>
                <strong>“Mañana lloverá.”</strong>
              </div>
              <div className="flc5-tomorrow-question">?</div>
              <div>
                <span>PROBLEMA</span>
                <strong>¿V o F ahora?</strong>
              </div>
            </div>
            <LogicFigureNote
              noteId="c05-future"
              what="Usa “Mañana lloverá” como caso límite para tensionar el criterio de potencial de verdad."
              how="La interrogación central pregunta si podemos asignar sin problemas V o F ahora a una afirmación sobre un futuro contingente. El cuadro no ofrece una resolución definitiva; exhibe el punto de fricción."
              why="Está aquí para mostrar que incluso una oración declarativa aparentemente ordinaria puede complicar una definición demasiado simple de proposición."
              takeaway="El caso funciona como problema filosófico: obliga a precisar qué significa “puede ser verdadera o falsa” y cuándo se supone disponible ese valor."
            />

            <div className="flc5-open-problem">
              <span>PUNTO METODOLÓGICO</span>
              <p>
                La clase no pretende resolver aquí toda la discusión sobre
                futuros contingentes. Usa el caso para preguntar qué ocurre
                cuando una expresión parece enunciativa pero no encaja limpiamente
                en el presupuesto operativo V/F del cálculo clásico.
              </p>
            </div>
          </section>

          <section id="validez" className="flc1-section">
            <SectionTitle number="07" eyebrow="Praesuppositio operativa">
              Bivalencia y evaluación de validez
            </SectionTitle>

            <div className="flc5-bivalence">
              <div className="flc5-v">V</div>
              <div className="flc5-biv-copy">
                <span>MARCO CLÁSICO</span>
                <strong>cada proposición se trata como verdadera o falsa</strong>
                <p>
                  Tablas de verdad, implicaciones y conjunciones dependen de que
                  las piezas del argumento puedan recibir esos valores.
                </p>
              </div>
              <div className="flc5-f">F</div>
            </div>
            <LogicFigureNote
              noteId="c05-bivalence"
              what="Representa el supuesto bivalente del marco clásico: las proposiciones se tratan con los valores V o F."
              how="Los extremos V y F enmarcan el procedimiento central. Tablas de verdad y operadores clásicos necesitan que las expresiones relevantes puedan recibir esos valores para evaluar combinaciones y argumentos."
              why="Está aquí porque la bivalencia no es decoración notacional; sostiene el método de evaluación que la sesión está explicando."
              takeaway="Cuando una expresión no puede tratarse dentro del esquema V/F, el procedimiento clásico estándar necesita revisión o una teoría adicional."
            />

            <div className="flc5-validity-flow">
              <span>PROPOSICIONES V/F</span><b>→</b>
              <span>OPERADORES</span><b>→</b>
              <span>ESTRUCTURA</span><b>→</b>
              <span>VALIDEZ / INVALIDEZ</span>
            </div>

            <div className="flc5-block">
              <span>SI UNA PIEZA NO ES TRATABLE COMO V/F</span>
              <strong>se bloquea el procedimiento estándar de evaluación clásica.</strong>
            </div>
          </section>

          <section id="analiticas" className="flc1-section">
            <SectionTitle number="08" eyebrow="Necessitas / contingentia">
              Proposiciones analíticas y sintéticas
            </SectionTitle>

            <div className="flc5-kind-tabs">
              {propositionKinds.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === kindId ? 'is-active' : ''}
                  onClick={() => setKindId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </button>
              ))}
            </div>

            <div className="flc5-kind-reader">
              <div>
                <span>{kind.mark}</span>
                <h3>{kind.example}</h3>
              </div>
              <div>
                <p>{kind.explanation}</p>
                <strong>{kind.subtitle}</strong>
              </div>
            </div>

            <div className="flc5-analytic-axis">
              <article>
                <span>ANALÍTICA</span>
                <strong>necesidad</strong>
                <small>su negación choca con principios lógicos</small>
              </article>
              <div>≠</div>
              <article>
                <span>SINTÉTICA</span>
                <strong>contingencia</strong>
                <small>depende de cómo es el mundo</small>
              </article>
            </div>
            <LogicFigureNote
              noteId="c05-analytic"
              what="Contrasta necesidad analítica y contingencia sintética en la terminología trabajada por la sesión."
              how="El lado analítico apunta a verdades cuya negación entra en conflicto con principios lógicos o conceptuales; el lado sintético depende de cómo es el mundo y podría haber resultado de otro modo."
              why="Está aquí para separar dos preguntas que suelen confundirse: que algo sea verdadero y que sea necesario. Una verdad de hecho puede ser muy clara y seguir siendo contingente."
              takeaway="Verdad no implica necesidad: el eje analítico/sintético intenta explicar de dónde proviene la modalidad de una proposición."
            />
          </section>

          <section id="semanticas" className="flc1-section">
            <SectionTitle number="09" eyebrow="Tres sentidos">
              “Semántica” no significa siempre lo mismo
            </SectionTitle>

            <div className="flc5-sem-tabs">
              {semantics.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === semanticId ? 'is-active' : ''}
                  onClick={() => setSemanticId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc5-sem-reader">
              <div>
                <span>{semantic.mark}</span>
                <h3>{semantic.relation}</h3>
              </div>
              <p>{semantic.explanation}</p>
            </div>

            <div className="flc5-sem-map">
              <span>SIGNO</span><b>↔</b>
              <span>SIGNIFICADO</span><b>↔</b>
              <span>VERDAD</span><b>↔</b>
              <span>MUNDO</span>
            </div>
          </section>

          <section id="falsedad" className="flc1-section">
            <SectionTitle number="10" eyebrow="Conditio falsitatis">
              La lógica fija condiciones; la ciencia verifica
            </SectionTitle>

            <div className="flc5-pigeons">
              <div className="flc5-universal">
                <span>UNIVERSAL</span>
                <strong>“Todas las palomas son blancas y ligeras.”</strong>
              </div>

              <div className="flc5-counter">
                <span>BASTA UN CONTRAEJEMPLO</span>
                <div>
                  <strong>paloma no blanca</strong>
                  <b>∨</b>
                  <strong>paloma no ligera</strong>
                </div>
              </div>
            </div>
            <LogicFigureNote
              noteId="c05-pigeons"
              what="Muestra cómo una proposición universal puede falsarse mediante un contraejemplo."
              how="El lado universal formula “todas”. El lado del contraejemplo muestra que basta encontrar una paloma que falle en una de las propiedades exigidas para que la universal completa resulte falsa."
              why="Está aquí para separar el trabajo lógico del empírico. La lógica especifica qué estructura tendría un contraejemplo; la investigación observa si ese caso existe realmente."
              takeaway="La lógica fija condiciones de falsedad; la ciencia o la experiencia buscan si esas condiciones se realizan en el mundo."
            />

            <div className="flc5-logic-science">
              <article>
                <span>LÓGICA</span>
                <h3>determina condiciones</h3>
                <p>Especifica qué contaría como refutación.</p>
              </article>
              <div>→</div>
              <article className="is-science">
                <span>CIENCIA / INVESTIGACIÓN</span>
                <h3>busca en el mundo</h3>
                <p>Observa o experimenta para comprobar si aparece el caso.</p>
              </article>
            </div>
          </section>

          <section id="sistemas" className="flc1-section">
            <SectionTitle number="11" eyebrow="Ad systemata deductiva">
              De sistemas abiertos a sistemas axiomático-deductivos
            </SectionTitle>

            <div className="flc5-system-tabs">
              {systemTypes.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === systemId ? 'is-active' : ''}
                  onClick={() => setSystemId(item.id)}
                >
                  <span>{item.example}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc5-system-reader">
              <div>
                <span>{system.example}</span>
                <h3>{system.criterion}</h3>
              </div>
              <p>{system.explanation}</p>
            </div>

            <div className="flc5-axiomatic">
              <span>PRÓXIMO MARCO</span>
              <div>
                <strong>AXIOMAS</strong>
                <b>+</b>
                <strong>REGLAS DEDUCTIVAS</strong>
                <b>→</b>
                <strong>DERIVACIONES</strong>
              </div>
              <p>
                La sesión termina dejando listo el paso a la estructura mínima
                de un sistema formal axiomático-deductivo.
              </p>
            </div>
            <LogicFigureNote
              noteId="c05-axiomatic"
              what="Anuncia la arquitectura que seguirá en la materia: axiomas + reglas deductivas → derivaciones."
              how="Lea los bloques como funciones distintas. Los axiomas son puntos de partida; las reglas determinan pasos permitidos; las derivaciones son resultados producidos dentro de ese marco."
              why="Está al final porque la sesión pasa de analizar qué tipo de expresiones entran al cálculo a preguntar cómo se organiza un sistema que opera con ellas."
              takeaway="La próxima etapa ya no pregunta sólo qué es una proposición, sino cómo un sistema formal produce consecuencias justificadas."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="12" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta clase
            </SectionTitle>

            <div className="flc5-summary">
              <article>
                <span>IDEA 1</span>
                <h3>Oración no basta</h3>
                <p>Una expresión puede ser gramaticalmente correcta sin producir contenido enunciativo.</p>
              </article>
              <article>
                <span>IDEA 2</span>
                <h3>Enunciado no basta</h3>
                <p>Para ser proposición debe poseer potencial de verdad.</p>
              </article>
              <article>
                <span>IDEA 3</span>
                <h3>Bivalencia hace posible el cálculo clásico</h3>
                <p>La evaluación estándar de validez necesita piezas tratables como V o F.</p>
              </article>
              <article>
                <span>IDEA 4</span>
                <h3>Verdad y necesidad no son lo mismo</h3>
                <p>Una proposición sintética puede ser verdadera y seguir siendo contingente.</p>
              </article>
            </div>

            <div className="flc5-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué diferencia hay entre lenguaje y lengua?</li>
                <li>¿Por qué estar bien formado no equivale a ser verdadero?</li>
                <li>¿Qué diferencia hay entre forma y función de una oración?</li>
                <li>¿Qué convierte una oración en enunciado?</li>
                <li>¿Qué convierte un enunciado en proposición?</li>
                <li>¿Por qué “Mañana lloverá” funciona como caso límite?</li>
                <li>¿Qué papel cumple la bivalencia en la evaluación clásica de validez?</li>
                <li>¿Qué diferencia necesidad de contingencia?</li>
                <li>¿Qué distingue semántica lingüística, lógica y cognitiva?</li>
                <li>¿Cómo se reparte el trabajo entre lógica y ciencia en el ejemplo de las palomas?</li>
                <li>¿Qué elementos mínimos anuncia la clase para un sistema deductivo formal?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Continuidad</strong>
              <p>
                La siguiente sesión comenzará a trabajar sistemas axiomático-deductivos
                formales y su estructura de axiomas más reglas de inferencia. Aquí no
                se fija una tarea concreta con fecha.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 05 · 9 febrero 2026</span>
      </footer>
    </main>
  )
}
