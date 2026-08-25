import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const MODULES = [
  {
    id: 'genesis',
    roman: 'I',
    title: 'Totalidad y programa crítico',
    map: 'Mapa I',
    thesis:
      'La Escuela de Frankfurt entiende la investigación social como teoría de la sociedad en su conjunto, capaz de relacionar economía, historia, psicología y cultura y de orientar una transformación racional.',
    remember: [
      'La teoría crítica no estudia inconvenientes secundarios: interroga la organización total de la estructura social.',
      'Hegel, Marx y Freud forman una matriz constante del proyecto.',
      'La crítica conserva un interés práctico: libertad, creatividad y una sociedad sin explotación.',
    ],
    relation:
      'Totalidad → contradicción → crítica → posibilidad de transformación.',
    question:
      '¿Por qué una investigación puramente sectorial puede describir hechos y, aun así, perder aquello que Frankfurt considera decisivo?',
    answer:
      'Porque los hechos sociales adquieren sentido dentro de relaciones históricas, económicas, psicológicas y culturales. Fragmentarlos puede ocultar las estructuras y contradicciones del conjunto.',
  },
  {
    id: 'adorno',
    roman: 'II',
    title: 'No-identidad y dialéctica negativa',
    map: 'Mapa II',
    thesis:
      'Adorno conserva el potencial negativo de Hegel, pero rechaza que la dialéctica culmine en un sistema conciliado: lo real no coincide plenamente con el pensamiento.',
    remember: [
      'No-identidad: el concepto no agota al objeto.',
      'La dialéctica negativa protege lo singular, diferente y cualitativo.',
      'La primacía del objeto vuelve materialista a la dialéctica.',
    ],
    relation:
      'Contradicción → no-identidad → dialéctica negativa → crítica de la sociedad.',
    question:
      '¿Por qué la no-identidad tiene consecuencias políticas y no sólo epistemológicas?',
    answer:
      'Porque impide que sistemas conceptuales o políticos presenten como reconciliado, natural o definitivo un mundo que continúa siendo contradictorio y opresivo.',
  },
  {
    id: 'illumination',
    roman: 'III',
    title: 'La inversión de la Ilustración',
    map: 'Mapa III',
    thesis:
      'La razón que buscaba liberar del miedo puede convertirse en dominio cuando el saber se reduce a técnica, cálculo y funcionalidad.',
    remember: [
      'La Ilustración se entiende como un proceso amplio de racionalización del mundo.',
      'La razón instrumental calcula medios pero ya no fundamenta fines.',
      'La sociedad administrada extiende esa racionalidad a la organización de la vida.',
      'La industria cultural homogeneiza valores, necesidades, lenguaje y diversión.',
    ],
    relation:
      'Ilustración → racionalización → dominio → razón instrumental → administración → industria cultural.',
    question:
      '¿Por qué el progreso técnico es dialéctico para Adorno y Horkheimer?',
    answer:
      'Porque amplía capacidades y puede crear condiciones de justicia, pero al mismo tiempo puede fortalecer los aparatos y grupos que organizan y dominan la vida social.',
  },
  {
    id: 'horkheimer',
    roman: 'IV',
    title: 'El eclipse de la razón',
    map: 'Mapa IV',
    thesis:
      'Horkheimer distingue una razón capaz de interrogar fines de otra reducida a coordinar medios eficaces para objetivos recibidos desde fuera.',
    remember: [
      'Razón subjetiva: cálculo de probabilidades y coordinación de medios.',
      'Ancilla administrationis: la razón se vuelve servidora de la administración.',
      'La filosofía debe denunciar esa reducción, no restaurar ingenuamente antiguas metafísicas.',
      'Ninguna política, teoría o Estado histórico puede ser absolutizado.',
    ],
    relation:
      'Cálculo de medios → fines heterónomos → administración → dominio.',
    question:
      '¿Por qué una razón extremadamente eficaz puede ser, al mismo tiempo, irracional?',
    answer:
      'Porque puede optimizar cualquier objetivo sin poseer criterios racionales para juzgar si ese objetivo es verdadero, bueno, justo o humanamente deseable.',
  },
  {
    id: 'subject',
    roman: 'V',
    title: 'Marcuse y Fromm: el sujeto',
    map: 'Mapa V',
    thesis:
      'La dominación no permanece fuera del individuo: organiza deseos, necesidades, miedo, conformismo e identidad.',
    remember: [
      'Marcuse historiza la represión que Freud había tratado como conflicto permanente.',
      'La sociedad unidimensional integra oposición, necesidades y aspiraciones.',
      'El Gran Rechazo mantiene abierta una negatividad no absorbida.',
      'Fromm vincula libertad con capacidad de desobedecer.',
      'La modalidad del ser exige independencia, libertad y razón crítica.',
    ],
    relation:
      'Integración del sujeto ↔ posibilidad de negación: Gran Rechazo / desobediencia.',
    question:
      '¿Qué tienen en común el Gran Rechazo de Marcuse y la desobediencia de Fromm sin ser el mismo concepto?',
    answer:
      'Ambos preservan la capacidad de decir no frente a formas de adaptación presentadas como inevitables; uno opera desde la crítica de la sociedad unidimensional y el otro desde la autonomía del sujeto.',
  },
  {
    id: 'science',
    roman: 'VI',
    title: 'Ciencia social, crítica y fines',
    map: 'Mapa VI',
    thesis:
      'El cierre del capítulo discute qué significa crítica en las ciencias sociales y si la razón puede intervenir también en cuestiones normativas.',
    remember: [
      'Popper: problemas, conjeturas, falibilidad y control público.',
      'Adorno: también los hechos y la sociedad deben ser criticados.',
      'La totalidad sitúa las observaciones particulares dentro de una estructura contradictoria.',
      'Habermas rechaza una ciencia reducida a medios.',
      'Albert advierte que una prescripción no se deriva lógicamente de una descripción.',
    ],
    relation:
      'Crítica formal ↔ crítica material; medios ↔ fines; hechos ↔ normas.',
    question:
      '¿Cuál es la tensión final que conviene conservar entre Habermas y Albert?',
    answer:
      'Habermas quiere mantener normas y fines dentro del debate racional; Albert obliga a evitar que decisiones normativas sean presentadas como si fueran conocimiento lógicamente deducido de hechos.',
  },
]

const RELATIONAL = [
  {
    id: 'r1',
    question:
      '¿Cómo conecta la “totalidad” del programa inicial con la crítica final de Adorno al positivismo?',
    options: [
      'La totalidad se abandona al final porque Popper demuestra que toda teoría es parcial.',
      'La totalidad reaparece como categoría crítica: sin anticipar el todo, los hechos dispersos no encuentran adecuadamente su posición.',
      'La totalidad significa que Frankfurt acepta un sistema filosófico cerrado.',
      'La totalidad sólo designa el conjunto de autores de la Escuela.',
    ],
    correct: 1,
    why:
      'Adorno sostiene que una observación singular necesita situarse dentro del todo y que renunciar a una teoría de la sociedad equivale a resignarse respecto de su transformación.',
  },
  {
    id: 'r2',
    question:
      '¿Qué relación transversal existe entre no-identidad y crítica de la razón instrumental?',
    options: [
      'Ambas sostienen que pensamiento y realidad son idénticos.',
      'Ambas cuestionan formas de racionalidad que subordinan la realidad a esquemas de dominio.',
      'No existe ninguna relación: pertenecen a autores incompatibles.',
      'La razón instrumental es una aplicación positiva de la no-identidad.',
    ],
    correct: 1,
    why:
      'La no-identidad rechaza la prepotencia del concepto sobre el objeto; la crítica de la razón instrumental denuncia otra forma de subordinación: la reducción de naturaleza y hombres a materiales administrables.',
  },
  {
    id: 'r3',
    question:
      '¿Por qué la industria cultural pertenece a la crítica de la racionalidad y no sólo a una teoría de los medios?',
    options: [
      'Porque analiza únicamente la calidad artística de cine y radio.',
      'Porque muestra cómo la lógica de administración se extiende a valores, necesidades, lenguaje, ocio y formación del sujeto.',
      'Porque sustituye por completo la economía política.',
      'Porque Frankfurt considera que todos los medios masivos son técnicamente defectuosos.',
    ],
    correct: 1,
    why:
      'La industria cultural es un mecanismo de la sociedad administrada: hace funcionales y uniformes necesidades, conductas y lenguajes, y favorece la aceptación de fines establecidos por otros.',
  },
  {
    id: 'r4',
    question:
      '¿Qué problema comparten Horkheimer y Habermas respecto de medios y fines?',
    options: [
      'Ambos sostienen que los fines pueden deducirse automáticamente de los hechos.',
      'Ambos temen que una razón reducida a medios quede impotente frente a la discusión de los fines.',
      'Ambos rechazan toda ciencia empírica.',
      'Ambos consideran que fines y medios siempre deben separarse completamente.',
    ],
    correct: 1,
    why:
      'Horkheimer formula el problema como eclipse de la razón; Habermas lo retoma al criticar una ciencia social puramente técnica que sabe escoger medios pero deja los fines al decisionismo.',
  },
  {
    id: 'r5',
    question:
      '¿Por qué Marcuse puede criticar a Freud sin abandonar por completo su diagnóstico?',
    options: [
      'Porque niega que exista represión alguna.',
      'Porque acepta la represión como fenómeno, pero rechaza que su forma histórica deba ser eterna.',
      'Porque sustituye el psicoanálisis por una teoría puramente económica.',
      'Porque piensa que el principio de realidad nunca existió.',
    ],
    correct: 1,
    why:
      'Marcuse toma en serio la represión descrita por Freud, pero historiza su forma concreta y abre la posibilidad de una civilización no represiva.',
  },
  {
    id: 'r6',
    question:
      '¿Cuál expresa mejor el hilo completo de Frankfurt en este capítulo?',
    options: [
      'Descripción de autores → cronología → bibliografía.',
      'Totalidad → contradicción → crítica de la racionalidad → formación del sujeto → discusión de la ciencia → emancipación.',
      'Metafísica → teología → epistemología → estética.',
      'Economía → tecnología → rechazo de toda racionalidad.',
    ],
    correct: 1,
    why:
      'Ese recorrido conecta el programa inicial, Adorno, Adorno/Horkheimer, Horkheimer, Marcuse/Fromm y el debate metodológico final en una sola arquitectura.',
  },
]

const ADVANCED_RELATIONAL = [
  {
    id: 'a1',
    title: 'Totalidad ↔ no-identidad',
    prompt:
      'Explique por qué una teoría de la sociedad como totalidad no obliga a Adorno a defender un sistema cerrado.',
    key:
      'La totalidad funciona críticamente para situar los hechos dentro de relaciones sociales, mientras la no-identidad impide que esa totalidad se convierta en una reconciliación conceptual absoluta. Pensar el todo no significa agotarlo.',
  },
  {
    id: 'a2',
    title: 'Razón instrumental ↔ industria cultural',
    prompt:
      'Explique por qué la industria cultural es una consecuencia de la crítica de la racionalidad y no un tema separado sobre medios de comunicación.',
    key:
      'La razón instrumental organiza medios, eficiencia y administración. La industria cultural extiende esa misma lógica a ocio, necesidades, valores, lenguaje y formación del sujeto.',
  },
  {
    id: 'a3',
    title: 'Horkheimer ↔ Habermas',
    prompt:
      'Reconstruya el problema común entre el eclipse de la razón y la crítica habermasiana de una ciencia puramente técnica.',
    key:
      'Ambos detectan una razón capaz de seleccionar medios pero empobrecida ante los fines. Horkheimer formula el problema como eclipse de la razón; Habermas lo retoma al exigir que normas y fines permanezcan abiertos a discusión racional.',
  },
  {
    id: 'a4',
    title: 'Marcuse ↔ Fromm',
    prompt:
      'Distinga Gran Rechazo y desobediencia, y luego explique por qué pueden conectarse sin confundirlos.',
    key:
      'El Gran Rechazo aparece en la crítica marcusiana de la sociedad unidimensional; la desobediencia, en Fromm, como condición de autonomía. Se conectan porque ambas preservan una negatividad capaz de resistir adaptación y obediencia.',
  },
  {
    id: 'a5',
    title: 'Adorno ↔ Popper',
    prompt:
      '¿Por qué puede decirse que ambos defienden la crítica, pero no entienden del mismo modo su alcance?',
    key:
      'Popper centra la crítica en problemas, soluciones y teorías falibles. Adorno exige además una crítica material de los hechos y de la sociedad contradictoria que los produce.',
  },
  {
    id: 'a6',
    title: 'Arquitectura completa',
    prompt:
      'Explique en una sola respuesta cómo se pasa de “sociedad como totalidad” a “emancipación” sin saltarse el problema de la razón, del sujeto y de la ciencia.',
    key:
      'La totalidad hace visibles contradicciones; la no-identidad evita reconciliarlas conceptualmente; la crítica de la razón instrumental muestra su traducción en administración e industria cultural; Marcuse y Fromm muestran su interiorización subjetiva; la disputa metodológica pregunta cómo debe operar la crítica; la discusión de los fines mantiene abierto el horizonte emancipador.',
  },
]

const STORAGE_PROGRESS = 'philosophia-frankfurt-studium-progress'
const STORAGE_EVAL = 'philosophia-frankfurt-final-evaluation'

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export default function FrankfurtStudy() {
  const [active, setActive] = useState(MODULES[0].id)
  const [progress, setProgress] = useState(() =>
    loadJson(STORAGE_PROGRESS, {}),
  )
  const [revealed, setRevealed] = useState({})
  const [answers, setAnswers] = useState(() =>
    loadJson(STORAGE_EVAL, {}),
  )
  const [advancedOpen, setAdvancedOpen] = useState({})

  const module = useMemo(
    () => MODULES.find((item) => item.id === active) || MODULES[0],
    [active],
  )

  const completed = MODULES.filter((item) => progress[item.id]).length
  const percent = Math.round((completed / MODULES.length) * 100)
  const quizAnswered = RELATIONAL.filter(
    (item) => answers[item.id] !== undefined,
  ).length
  const quizCorrect = RELATIONAL.filter(
    (item) => answers[item.id] === item.correct,
  ).length

  const toggleComplete = (id) => {
    const next = { ...progress, [id]: !progress[id] }
    setProgress(next)
    localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(next))
  }

  const answerQuestion = (id, index) => {
    const next = { ...answers, [id]: index }
    setAnswers(next)
    localStorage.setItem(STORAGE_EVAL, JSON.stringify(next))
  }

  const resetAll = () => {
    setProgress({})
    setAnswers({})
    setRevealed({})
    localStorage.removeItem(STORAGE_PROGRESS)
    localStorage.removeItem(STORAGE_EVAL)
  }

  return (
    <main className="frankfurt-study-page">
      <nav className="frankfurt-study-nav">
        <Link to="/tareas/teoria-critica/escuela-de-frankfurt/sistema">
          ← Sistema transversal
        </Link>
        <Link to="/" className="frankfurt-study-brand">
          Φ · Philosophia
        </Link>
        <span>Studium · Frankfurt</span>
      </nav>

      <header className="frankfurt-study-hero">
        <p>Fase IX · Studium criticum</p>
        <h1>
          Comprender
          <em>sin depender del mapa</em>
        </h1>
        <blockquote>
          El objetivo ya no es reconocer cuadros: es reconstruir las relaciones
          entre totalidad, contradicción, no-identidad, razón instrumental,
          subjetividad, ciencia y emancipación.
        </blockquote>
      </header>

      {/* FRANKFURT PHASE 11 · STUDIUM CONTEXT NAV */}
      <section className="frankfurt-study-context-nav">
        <div>
          <span>UBICACIÓN EN EL SISTEMA</span>
          <strong>Studium · tercer nivel</strong>
        </div>
        <div>
          <Link to="/tareas/teoria-critica/escuela-de-frankfurt">Arquitectura</Link>
          <b>→</b>
          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/mapas">Seis mapas</Link>
          <b>→</b>
          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/sistema">Sistema transversal</Link>
          <b>→</b>
          <span>Studium</span>
        </div>
      </section>

      <section className="frankfurt-study-dashboard">
        <div>
          <span>Progreso de lectura</span>
          <strong>{completed} / {MODULES.length}</strong>
          <div className="frankfurt-study-progress">
            <i style={{ width: `${percent}%` }} />
          </div>
          <small>{percent}% del Studium completado</small>
        </div>

        <div>
          <span>Evaluación relacional</span>
          <strong>{quizCorrect} / {RELATIONAL.length}</strong>
          <small>
            {quizAnswered} respondidas · {quizCorrect} correctas
          </small>
        </div>

        <button type="button" onClick={resetAll}>
          Reiniciar Studium
        </button>
      </section>

      <section className="frankfurt-study-layout">
        <aside className="frankfurt-study-modules">
          <span>Itinerarium</span>
          {MODULES.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${item.id === active ? 'active' : ''} ${
                progress[item.id] ? 'done' : ''
              }`}
              onClick={() => setActive(item.id)}
            >
              <b>{item.roman}</b>
              <div>
                <strong>{item.title}</strong>
                <small>{item.map}</small>
              </div>
              <i>{progress[item.id] ? '✓' : '○'}</i>
            </button>
          ))}
        </aside>

        <article className="frankfurt-study-module">
          <div className="frankfurt-study-module-head">
            <span>{module.roman} · {module.map}</span>
            <h2>{module.title}</h2>
            <p>{module.thesis}</p>
          </div>

          <div className="frankfurt-study-relation">
            <span>Relación que debe poder reconstruir</span>
            <strong>{module.relation}</strong>
          </div>

          <div className="frankfurt-study-remember">
            <span>Lo indispensable</span>
            {module.remember.map((item, index) => (
              <div key={item}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="frankfurt-study-question">
            <span>Pregunta de comprensión</span>
            <h3>{module.question}</h3>
            {!revealed[module.id] ? (
              <button
                type="button"
                onClick={() =>
                  setRevealed({ ...revealed, [module.id]: true })
                }
              >
                Mostrar respuesta razonada
              </button>
            ) : (
              <div>
                <p>{module.answer}</p>
                <button
                  type="button"
                  onClick={() =>
                    setRevealed({ ...revealed, [module.id]: false })
                  }
                >
                  Ocultar
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className={`frankfurt-study-complete ${
              progress[module.id] ? 'done' : ''
            }`}
            onClick={() => toggleComplete(module.id)}
          >
            {progress[module.id]
              ? '✓ Módulo comprendido'
              : 'Marcar módulo como comprendido'}
          </button>
        </article>
      </section>

      <section className="frankfurt-study-bridge">
        <span>Synthesis</span>
        <h2>Una sola cadena crítica</h2>
        <div>
          {[
            'TOTALIDAD',
            'CONTRADICCIÓN',
            'NO-IDENTIDAD',
            'RAZÓN INSTRUMENTAL',
            'SOCIEDAD ADMINISTRADA',
            'SUJETO INTEGRADO',
            'NEGACIÓN',
            'CIENCIA SOCIAL',
            'FINES',
            'EMANCIPACIÓN',
          ].map((item, index, arr) => (
            <div key={item}>
              <strong>{item}</strong>
              {index < arr.length - 1 && <b>→</b>}
            </div>
          ))}
        </div>
      </section>

      <section className="frankfurt-study-evaluation">
        <div className="frankfurt-study-eval-head">
          <span>Probatio relationum</span>
          <h2>Autoevaluación relacional</h2>
          <p>
            Aquí no se pregunta por fechas o títulos aislados. Cada reactivo
            comprueba que una conexión entre mapas haya quedado realmente entendida.
          </p>
        </div>

        <div className="frankfurt-study-quiz">
          {RELATIONAL.map((item, qIndex) => {
            const chosen = answers[item.id]
            const answered = chosen !== undefined
            const correct = chosen === item.correct

            return (
              <article key={item.id}>
                <span>RELACIÓN {qIndex + 1}</span>
                <h3>{item.question}</h3>

                <div>
                  {item.options.map((option, index) => {
                    const picked = chosen === index
                    const shouldMarkCorrect =
                      answered && index === item.correct
                    return (
                      <button
                        key={option}
                        type="button"
                        className={[
                          picked ? 'picked' : '',
                          shouldMarkCorrect ? 'correct' : '',
                          picked && !correct ? 'wrong' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        onClick={() => answerQuestion(item.id, index)}
                      >
                        <b>{String.fromCharCode(65 + index)}</b>
                        <span>{option}</span>
                      </button>
                    )
                  })}
                </div>

                {answered && (
                  <p className={correct ? 'ok' : 'review'}>
                    <strong>{correct ? 'Correcto.' : 'Revise la conexión.'}</strong>{' '}
                    {item.why}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="frankfurt-study-advanced">
        <div className="frankfurt-study-advanced-head">
          <span>Examinatio critica</span>
          <h2>Evaluación relacional avanzada</h2>
          <p>
            Ya no hay opciones múltiples. Intente responder primero con sus
            propias palabras y sólo después abra la clave de reconstrucción.
          </p>
        </div>

        <div className="frankfurt-study-advanced-grid">
          {ADVANCED_RELATIONAL.map((item, index) => {
            const open = !!advancedOpen[item.id]
            return (
              <article key={item.id}>
                <div className="frankfurt-study-advanced-card-head">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <small>{item.title}</small>
                </div>

                <h3>{item.prompt}</h3>

                <button
                  type="button"
                  onClick={() =>
                    setAdvancedOpen({
                      ...advancedOpen,
                      [item.id]: !open,
                    })
                  }
                >
                  {open ? 'Ocultar clave' : 'Abrir clave de reconstrucción'}
                </button>

                {open && (
                  <div className="frankfurt-study-advanced-key">
                    <span>Clave</span>
                    <p>{item.key}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="frankfurt-study-master">
        <div>
          <span>Magisterium</span>
          <h2>Prueba final de reconstrucción</h2>
          <p>
            Cierre los mapas y el Studium. Intente explicar el capítulo durante
            tres minutos siguiendo únicamente estas cinco preguntas.
          </p>
        </div>

        <div className="frankfurt-study-master-questions">
          <article>
            <span>I</span>
            <strong>¿Qué entiende Frankfurt por crítica de la sociedad como totalidad?</strong>
          </article>
          <article>
            <span>II</span>
            <strong>¿Por qué Adorno necesita la no-identidad y la dialéctica negativa?</strong>
          </article>
          <article>
            <span>III</span>
            <strong>¿Cómo se transforma la razón ilustrada en razón instrumental y administración?</strong>
          </article>
          <article>
            <span>IV</span>
            <strong>¿Cómo entra esa dominación en el sujeto según Marcuse y Fromm?</strong>
          </article>
          <article>
            <span>V</span>
            <strong>¿Por qué la discusión sobre ciencia social termina siendo también una discusión sobre fines y emancipación?</strong>
          </article>
        </div>

        <div className="frankfurt-study-master-formula">
          <span>Fórmula mínima de memoria</span>
          <strong>
            TOTALIDAD → CONTRADICCIÓN → NO-IDENTIDAD → RAZÓN INSTRUMENTAL →
            ADMINISTRACIÓN → SUJETO → NEGACIÓN → CIENCIA → FINES → EMANCIPACIÓN
          </strong>
        </div>
      </section>

      <section className="frankfurt-study-final">
        <span>Examen oral de un minuto</span>
        <h2>
          Si tuviera que explicar Frankfurt sin ver nada, debería poder responder:
        </h2>
        <p>
          ¿Cómo una teoría que comienza estudiando la sociedad como totalidad
          termina preguntando por la posibilidad racional de discutir los fines
          de la acción humana?
        </p>
        <div>
          <strong>Pista mínima:</strong>
          <span>
            totalidad → contradicción → no-identidad → razón instrumental →
            administración → subjetividad → crítica de la ciencia → fines →
            emancipación.
          </span>
        </div>
      </section>
    </main>
  )
}
