import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  leibnizConceptById,
  spinozaLeibniz,
} from '../data/leibnizStudy'

const STORAGE_KEY = 'philosophia-leibniz-studium-progress'

const FINAL_EVAL_KEY = 'philosophia-leibniz-final-evaluation'

const finalQuestions = [
  {
    id: 'q1',
    title: 'De Dios a los mundos posibles',
    question:
      '¿Por qué la perfección divina conduce al problema de los mundos posibles en lugar de llevar directamente a este mundo existente?',
    answer:
      'Porque una voluntad perfecta no se entiende como elección arbitraria. El entendimiento divino contiene posibilidades y la existencia de un mundo concreto exige una razón de preferencia entre órdenes posibles.',
    review:
      'Mapa I · Dios → mundos posibles → razón de la elección',
  },
  {
    id: 'q2',
    title: 'De noción completa a contingencia',
    question:
      '¿Por qué la noción completa de un individuo obliga a Leibniz a distinguir certeza y necesidad?',
    answer:
      'Porque si todos los predicados verdaderos del individuo están fundados en su noción, podría parecer que todo lo que hace es absolutamente necesario. Leibniz responde distinguiendo una verdad cierta de una verdad cuyo contrario implica contradicción.',
    review:
      'Mapa II · César → noción completa → predicados futuros → contingencia',
  },
  {
    id: 'q3',
    title: 'De sustancia individual a mónada',
    question:
      '¿Por qué la formulación madura busca una sustancia simple y no se limita a repetir la noción de sustancia individual del Discurso?',
    answer:
      'Porque la metafísica madura quiere identificar la unidad fundamental de los compuestos. Esa unidad no puede depender de partes más básicas; por ello la sustancia fundamental debe ser simple y la Monadología la denomina mónada.',
    review:
      'Mapa III · sustancia individual → sustancia simple → mónada',
  },
  {
    id: 'q4',
    title: 'De “sin ventanas” a principio interno',
    question:
      '¿Por qué la tesis de que las mónadas no tienen ventanas conduce necesariamente a buscar un principio interno de cambio?',
    answer:
      'Porque si ninguna causa exterior introduce físicamente un estado en la mónada y, aun así, la mónada cambia, el fundamento de la sucesión de sus estados debe encontrarse en su propia constitución interna.',
    review:
      'Mapa III · sin ventanas → principio interno',
  },
  {
    id: 'q5',
    title: 'De principio interno a percepción y apetición',
    question:
      '¿Por qué percepción y apetición son dos respuestas diferentes al problema de la vida interna de la mónada?',
    answer:
      'La percepción explica qué clase de estado posee la mónada: una multiplicidad representada en una unidad simple. La apetición explica el tránsito entre esos estados, es decir, el principio interno del paso de una percepción a otra.',
    review:
      'Mapa IV · percepción + apetición',
  },
  {
    id: 'q6',
    title: 'De percepción a perspectiva',
    question:
      '¿Por qué entender la percepción lleva al problema de las perspectivas del universo?',
    answer:
      'Porque una vez que la mónada se entiende como representativa, hay que preguntar qué representa. Leibniz sostiene que cada mónada expresa el mismo universo entero, pero desde un punto de vista y con grados de claridad diferentes.',
    review:
      'Mapa V · un universo → múltiples perspectivas',
  },
  {
    id: 'q7',
    title: 'De mónadas autónomas a armonía',
    question:
      '¿Por qué la combinación de autonomía de las mónadas y concordancia universal conduce a la armonía preestablecida?',
    answer:
      'Las mónadas no se modifican físicamente unas a otras, pero sus estados corresponden dentro de un solo universo. La armonía preestablecida explica esa coordinación como parte del orden originario del sistema, no como intercambio causal directo.',
    review:
      'Mapa VI · sin causalidad directa → armonía preestablecida',
  },
  {
    id: 'q8',
    title: 'De armonía a ciudad de Dios',
    question:
      '¿Por qué el sistema no termina con la coordinación alma/cuerpo, sino que avanza hacia un orden moral y la ciudad de Dios?',
    answer:
      'Porque los espíritus no son sólo centros de representación: poseen razón, reflexión y relación consciente con Dios. La armonía del orden natural se articula así con un orden moral en el que Dios aparece también como legislador y monarca.',
    review:
      'Mapa VI · reino físico ↔ reino moral → ciudad de Dios',
  },
]


const synthesisRoute = [
  'god',
  'possible',
  'substance',
  'contingency',
  'monad',
  'perception',
  'appetition',
  'perspective',
  'sufficient',
  'harmony',
  'body',
  'city',
]

const guidedSteps = [
  {
    id: 'god',
    n: 1,
    title: 'Dios y la perfección',
    map: 'Mapa I · ¿Por qué este mundo?',
    prompt:
      'Explique por qué, para Leibniz, la creación no puede entenderse como una decisión sin razón.',
    bridge:
      'Si Dios no crea arbitrariamente, debemos abrir el campo de aquello que podría haber creado: los posibles.',
  },
  {
    id: 'possible',
    n: 2,
    title: 'Mundos posibles',
    map: 'Mapa I · ¿Por qué este mundo?',
    prompt:
      'Explique por qué no todo lo posible existe y por qué la existencia de un mundo exige una razón de preferencia.',
    bridge:
      'La elección de un mundo completo incluye individuos determinados; ahora debemos preguntar qué es uno de esos individuos.',
  },
  {
    id: 'substance',
    n: 3,
    title: 'Sustancia individual',
    map: 'Mapa II · La sustancia individual y César',
    prompt:
      'Explique qué significa que una noción completa contenga el fundamento de todos los predicados verdaderos de un individuo.',
    bridge:
      'La noción completa parece amenazar la contingencia. Ésa es la siguiente dificultad.',
  },
  {
    id: 'contingency',
    n: 4,
    title: 'Contingencia',
    map: 'Mapa II · La sustancia individual y César',
    prompt:
      'Explique por qué “cierto” no significa “absolutamente necesario” y qué papel cumple la posibilidad del contrario.',
    bridge:
      'Preservada la individualidad, el sistema maduro pregunta por la estructura metafísica fundamental de esa sustancia.',
  },
  {
    id: 'monad',
    n: 5,
    title: 'Mónada',
    map: 'Mapa III · De sustancia a mónada',
    prompt:
      'Explique por qué la mónada debe ser simple, sin partes, y por qué no debe imaginarse como un átomo material.',
    bridge:
      'Una sustancia simple que no recibe estados desde fuera necesita explicar su vida interna.',
  },
  {
    id: 'perception',
    n: 6,
    title: 'Percepción',
    map: 'Mapa IV · Dentro de la mónada',
    prompt:
      'Explique cómo una sustancia simple puede representar multiplicidad sin estar compuesta de partes.',
    bridge:
      'Representar no basta: la mónada pasa de un estado representativo a otro.',
  },
  {
    id: 'appetition',
    n: 7,
    title: 'Apetición',
    map: 'Mapa IV · Dentro de la mónada',
    prompt:
      'Explique qué función cumple la apetición y por qué es necesaria si el cambio de la mónada procede de un principio interno.',
    bridge:
      'Ahora que la mónada representa y cambia, debemos preguntar qué representa.',
  },
  {
    id: 'perspective',
    n: 8,
    title: 'Perspectiva del universo',
    map: 'Mapa V · Un universo de perspectivas',
    prompt:
      'Explique cómo todas las mónadas pueden expresar el mismo universo sin representarlo del mismo modo.',
    bridge:
      'La multiplicidad de perspectivas exige explicar por qué el universo forma un orden coherente.',
  },
  {
    id: 'sufficient',
    n: 9,
    title: 'Razón suficiente',
    map: 'Mapa I + Mapa VI',
    prompt:
      'Explique qué exige el principio de razón suficiente y por qué la serie contingente remite a una razón última.',
    bridge:
      'Una razón última del orden permite comprender la coordinación universal de sustancias autónomas.',
  },
  {
    id: 'harmony',
    n: 10,
    title: 'Armonía preestablecida',
    map: 'Mapa VI · ¿Cómo concuerda todo?',
    prompt:
      'Explique cómo pueden concordar sustancias que no interactúan causalmente de manera directa.',
    bridge:
      'La armonía se hace especialmente visible en el problema de alma y cuerpo.',
  },
  {
    id: 'body',
    n: 11,
    title: 'Alma y cuerpo',
    map: 'Mapa VI · ¿Cómo concuerda todo?',
    prompt:
      'Explique la diferencia entre causas finales y eficientes y cómo alma y cuerpo pueden corresponder sin influirse físicamente.',
    bridge:
      'La coordinación física desemboca en una articulación más amplia entre naturaleza y orden moral.',
  },
  {
    id: 'city',
    n: 12,
    title: 'Ciudad de Dios',
    map: 'Mapa VI · ¿Cómo concuerda todo?',
    prompt:
      'Explique por qué la metafísica de Leibniz termina en una comunidad moral de espíritus y no sólo en una teoría física del universo.',
    bridge:
      'Ha cerrado el recorrido: del fundamento del mundo al orden físico y moral del universo.',
  },
]

const groups = [
  {
    id: 'problem',
    roman: 'I',
    title: 'Problema',
    subtitle: '¿Por qué este mundo y este individuo?',
    concepts: ['god', 'possible', 'substance', 'contingency'],
  },
  {
    id: 'monad',
    roman: 'II',
    title: 'Sustancia',
    subtitle: 'de la noción completa a la mónada',
    concepts: ['monad', 'perception', 'appetition', 'perspective'],
  },
  {
    id: 'reason',
    roman: 'III',
    title: 'Razón',
    subtitle: 'contradicción, razón suficiente y elección',
    concepts: ['contradiction', 'sufficient', 'possible', 'freedom'],
  },
  {
    id: 'order',
    roman: 'IV',
    title: 'Orden',
    subtitle: 'armonía, cuerpo y causas',
    concepts: ['harmony', 'body', 'force', 'finalcauses'],
  },
  {
    id: 'moral',
    roman: 'V',
    title: 'Culminación',
    subtitle: 'espíritus y ciudad de Dios',
    concepts: ['ideas', 'city', 'god'],
  },
]

function ConceptPanel({ concept, onSelect }) {
  if (!concept) return null

  const links = concept.links
    .map((id) => leibnizConceptById[id])
    .filter(Boolean)

  return (
    <aside className="leibniz-studium-detail">
      <p>Conceptus selectus</p>
      <h3>{concept.title}</h3>
      <span>{concept.short}</span>

      <p className="leibniz-studium-detail-body">{concept.body}</p>

      <div className="leibniz-studium-source">
        <small>DISCURSO DE METAFÍSICA</small>
        <strong>{concept.discourse}</strong>
      </div>

      <div className="leibniz-studium-source">
        <small>MONADOLOGÍA</small>
        <strong>{concept.monadology}</strong>
      </div>

      {links.length > 0 && (
        <section className="leibniz-studium-links">
          <small>CONDUCE A</small>
          {links.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
            >
              {item.title} →
            </button>
          ))}
        </section>
      )}
    </aside>
  )
}

function GuidedMode({
  stepIndex,
  setStepIndex,
  mastered,
  setMastered,
  needsMap,
  setNeedsMap,
}) {
  const step = guidedSteps[stepIndex]
  const concept = leibnizConceptById[step.id]
  const progress = Math.round((mastered.length / guidedSteps.length) * 100)

  const toggleMastered = () => {
    setMastered((current) =>
      current.includes(step.id)
        ? current.filter((id) => id !== step.id)
        : [...current, step.id],
    )
    setNeedsMap((current) => current.filter((id) => id !== step.id))
  }

  const markNeedsMap = () => {
    setNeedsMap((current) =>
      current.includes(step.id)
        ? current
        : [...current, step.id],
    )
    setMastered((current) => current.filter((id) => id !== step.id))
  }

  return (
    <section className="leibniz-studium-section">
      <div className="leibniz-studium-heading">
        <span>00</span>
        <div>
          <p>Iter duodecim graduum</p>
          <h2>Recorrido guiado · 12 pasos</h2>
        </div>
      </div>

      <div className="leibniz-guided-progress">
        <div>
          <span>PROGRESO</span>
          <strong>{mastered.length} / {guidedSteps.length}</strong>
        </div>
        <div className="bar" aria-label={`${progress}% completado`}>
          <i style={{ width: `${progress}%` }} />
        </div>
        <small>{progress}% dominado</small>
      </div>

      <div className="leibniz-guided-stepper">
        {guidedSteps.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={[
              index === stepIndex ? 'active' : '',
              mastered.includes(item.id) ? 'mastered' : '',
              needsMap.includes(item.id) ? 'needs-map' : '',
            ].join(' ')}
            onClick={() => setStepIndex(index)}
            aria-label={`Paso ${item.n}: ${item.title}`}
          >
            {item.n}
          </button>
        ))}
      </div>

      <div className="leibniz-guided-layout">
        <article className="leibniz-guided-card">
          <div className="leibniz-guided-card-head">
            <span>PASO {step.n} DE {guidedSteps.length}</span>
            <small>{step.map}</small>
          </div>

          <h3>{step.title}</h3>
          <p className="leibniz-guided-short">{concept.short}</p>

          <div className="leibniz-guided-question">
            <span>EXPLÍQUELO SIN LEER</span>
            <strong>{step.prompt}</strong>
          </div>

          <details className="leibniz-guided-answer">
            <summary>Mostrar apoyo conceptual</summary>
            <p>{concept.body}</p>
            <div>
              <small>DISCURSO</small>
              <strong>{concept.discourse}</strong>
            </div>
            <div>
              <small>MONADOLOGÍA</small>
              <strong>{concept.monadology}</strong>
            </div>
          </details>

          <div className="leibniz-guided-bridge">
            <span>POR QUÉ SIGUE EL PRÓXIMO PASO</span>
            <p>{step.bridge}</p>
          </div>

          <div className="leibniz-guided-eval">
            <button
              type="button"
              className={mastered.includes(step.id) ? 'mastered' : ''}
              onClick={toggleMastered}
            >
              ✓ Lo puedo explicar
            </button>

            <button
              type="button"
              className={needsMap.includes(step.id) ? 'needs-map' : ''}
              onClick={markNeedsMap}
            >
              ↙ Necesito volver al mapa
            </button>
          </div>

          {needsMap.includes(step.id) && (
            <div className="leibniz-guided-remediation">
              <span>RECUPERACIÓN</span>
              <strong>Vuelva a {step.map}</strong>
              <p>
                No avance por inercia. Abra el mapa, siga sus conectores y
                regrese cuando pueda justificar la relación con sus propias palabras.
              </p>
              <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia/mapas">
                Abrir mapas 2D →
              </Link>
            </div>
          )}
        </article>

        <aside className="leibniz-guided-status">
          <span>Estado del recorrido</span>

          <div>
            <strong>{mastered.length}</strong>
            <small>dominados</small>
          </div>

          <div>
            <strong>{needsMap.length}</strong>
            <small>para volver al mapa</small>
          </div>

          <div>
            <strong>{guidedSteps.length - mastered.length - needsMap.length}</strong>
            <small>sin evaluar</small>
          </div>

          <p>
            Verde = puede explicarlo. Ámbar = conviene volver al mapa.
            Neutro = todavía no evaluado.
          </p>
        </aside>
      </div>

      <div className="leibniz-guided-nav">
        <button
          type="button"
          disabled={stepIndex === 0}
          onClick={() => setStepIndex((value) => Math.max(0, value - 1))}
        >
          ← Paso anterior
        </button>

        <span>
          {step.n} / {guidedSteps.length}
        </span>

        <button
          type="button"
          disabled={stepIndex === guidedSteps.length - 1}
          onClick={() =>
            setStepIndex((value) =>
              Math.min(guidedSteps.length - 1, value + 1),
            )
          }
        >
          Siguiente paso →
        </button>
      </div>
    </section>
  )
}


function FinalEvaluation() {
  const [revealed, setRevealed] = useState([])
  const [understood, setUnderstood] = useState([])
  const [review, setReview] = useState([])

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(FINAL_EVAL_KEY) || '{}')
      if (Array.isArray(saved.revealed)) setRevealed(saved.revealed)
      if (Array.isArray(saved.understood)) setUnderstood(saved.understood)
      if (Array.isArray(saved.review)) setReview(saved.review)
    } catch {
      // Ignore malformed or unavailable local storage.
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(
        FINAL_EVAL_KEY,
        JSON.stringify({ revealed, understood, review }),
      )
    } catch {
      // Keep the evaluation usable in memory.
    }
  }, [revealed, understood, review])

  const mark = (id, status) => {
    if (status === 'understood') {
      setUnderstood((current) =>
        current.includes(id) ? current : [...current, id],
      )
      setReview((current) => current.filter((item) => item !== id))
    } else {
      setReview((current) =>
        current.includes(id) ? current : [...current, id],
      )
      setUnderstood((current) => current.filter((item) => item !== id))
    }
  }

  const score = understood.length
  const total = finalQuestions.length

  return (
    <section className="leibniz-studium-section">
      <div className="leibniz-studium-heading">
        <span>04</span>
        <div>
          <p>Examen relationum</p>
          <h2>Autoevaluación final · explique las conexiones</h2>
        </div>
      </div>

      <p className="leibniz-studium-intro">
        Aquí no se pregunta “¿qué es una mónada?”. La prueba consiste en
        justificar por qué una idea obliga a introducir la siguiente. Intente
        responder primero y sólo después revele el apoyo.
      </p>

      <div className="leibniz-final-eval-summary">
        <div>
          <span>DOMINADAS</span>
          <strong>{score} / {total}</strong>
        </div>
        <div>
          <span>POR REVISAR</span>
          <strong>{review.length}</strong>
        </div>
        <div>
          <span>SIN EVALUAR</span>
          <strong>{total - understood.length - review.length}</strong>
        </div>
      </div>

      <div className="leibniz-final-eval-list">
        {finalQuestions.map((item, index) => {
          const isRevealed = revealed.includes(item.id)
          const isUnderstood = understood.includes(item.id)
          const needsReview = review.includes(item.id)

          return (
            <article
              key={item.id}
              className={[
                isUnderstood ? 'understood' : '',
                needsReview ? 'review' : '',
              ].join(' ')}
            >
              <div className="leibniz-final-eval-number">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="leibniz-final-eval-content">
                <span>{item.title}</span>
                <h3>{item.question}</h3>

                {!isRevealed ? (
                  <button
                    type="button"
                    className="reveal"
                    onClick={() =>
                      setRevealed((current) => [...current, item.id])
                    }
                  >
                    Mostrar apoyo →
                  </button>
                ) : (
                  <div className="leibniz-final-eval-answer">
                    <span>APOYO CONCEPTUAL</span>
                    <p>{item.answer}</p>
                    <small>{item.review}</small>
                  </div>
                )}

                <div className="leibniz-final-eval-actions">
                  <button
                    type="button"
                    className={isUnderstood ? 'active understood' : ''}
                    onClick={() => mark(item.id, 'understood')}
                  >
                    ✓ Puedo justificar la conexión
                  </button>

                  <button
                    type="button"
                    className={needsReview ? 'active review' : ''}
                    onClick={() => mark(item.id, 'review')}
                  >
                    ↙ Debo volver al mapa
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {review.length > 0 && (
        <div className="leibniz-final-remediation">
          <span>PLAN DE RECUPERACIÓN</span>
          <strong>
            Tiene {review.length} conexión{review.length === 1 ? '' : 'es'} que
            conviene reconstruir otra vez.
          </strong>

          <div>
            {finalQuestions
              .filter((item) => review.includes(item.id))
              .map((item) => (
                <p key={item.id}>
                  <b>{item.title}</b>
                  <small>{item.review}</small>
                </p>
              ))}
          </div>

          <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia/mapas">
            Volver a los mapas 2D →
          </Link>
        </div>
      )}

      {score === total && (
        <div className="leibniz-final-complete">
          <span>SYNTHESIS COMPLETA</span>
          <strong>
            Ya puede reconstruir las ocho conexiones fundamentales del sistema.
          </strong>
          <p>
            El siguiente paso es volver a los textos y comprobar esta
            reconstrucción directamente en el Discurso y la Monadología.
          </p>
        </div>
      )}
    </section>
  )
}


function StudiumCompletionNote() {
  return (
    <section className="leibniz-studium-completion-note">
      <span>Finalidad del Studium</span>
      <strong>Volver al texto con una arquitectura ya comprendida.</strong>
      <p>
        Cuando las conexiones fundamentales puedan explicarse sin apoyo, la
        tarea deja de ser navegar la interfaz y pasa a comprobar directamente
        la reconstrucción en el Discurso de metafísica y la Monadología.
      </p>
      <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia">
        Volver a la hoja de ruta →
      </Link>
    </section>
  )
}

export default function LeibnizStudy() {
  const [selectedId, setSelectedId] = useState('god')
  const [mode, setMode] = useState('guided')
  const [groupId, setGroupId] = useState('problem')
  const [stepIndex, setStepIndex] = useState(0)
  const [mastered, setMastered] = useState([])
  const [needsMap, setNeedsMap] = useState([])

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
      if (Array.isArray(saved.mastered)) setMastered(saved.mastered)
      if (Array.isArray(saved.needsMap)) setNeedsMap(saved.needsMap)
      if (Number.isFinite(saved.stepIndex)) {
        setStepIndex(
          Math.min(
            Math.max(saved.stepIndex, 0),
            guidedSteps.length - 1,
          ),
        )
      }
    } catch {
      // Ignore malformed or unavailable local storage.
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ mastered, needsMap, stepIndex }),
      )
    } catch {
      // Progress remains usable in memory if storage is unavailable.
    }
  }, [mastered, needsMap, stepIndex])

  const selected = leibnizConceptById[selectedId]

  const activeGroup =
    groups.find((group) => group.id === groupId) || groups[0]

  const orderedSynthesis = useMemo(
    () =>
      synthesisRoute
        .map((id) => leibnizConceptById[id])
        .filter(Boolean),
    [],
  )

  return (
    <main className="leibniz-studium-page">
      <nav className="leibniz-studium-nav">
        <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia">
          ← Tarea
        </Link>
        <Link to="/" className="leibniz-studium-brand">
          Φ · Philosophia
        </Link>
        <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia/mapas">
          Mapas 2D →
        </Link>
      </nav>

      <header className="leibniz-studium-hero">
        <p>Studium Leibnitianum · synthesis systematis</p>
        <h1>
          Leibniz
          <em>síntesis después de los mapas</em>
        </h1>

        <blockquote>
          El Studium no descubre el sistema desde cero: comprueba que usted
          puede reconstruirlo, explicarlo y detectar dónde necesita volver.
        </blockquote>

        <div className="leibniz-studium-order">
          <span>problema</span><b>→</b>
          <span>sustancia</span><b>→</b>
          <span>mónada</span><b>→</b>
          <span>representación</span><b>→</b>
          <span>razón</span><b>→</b>
          <span>armonía</span><b>→</b>
          <span>orden moral</span>
        </div>
      </header>

      <section className="leibniz-studium-before">
        <div>
          <span>ANTES</span>
          <strong>Mapas conceptuales</strong>
          <p>Reconstruyen los problemas y justifican las conexiones.</p>
        </div>
        <b>→</b>
        <div className="active">
          <span>AHORA</span>
          <strong>Studium</strong>
          <p>Recupera, prueba y consolida el sistema.</p>
        </div>
      </section>

      <div className="leibniz-studium-modes">
        <button
          type="button"
          className={mode === 'guided' ? 'active' : ''}
          onClick={() => setMode('guided')}
        >
          Recorrido guiado
        </button>
        <button
          type="button"
          className={mode === 'synthesis' ? 'active' : ''}
          onClick={() => setMode('synthesis')}
        >
          Síntesis del sistema
        </button>
        <button
          type="button"
          className={mode === 'groups' ? 'active' : ''}
          onClick={() => setMode('groups')}
        >
          Bloques conceptuales
        </button>
        <button
          type="button"
          className={mode === 'compare' ? 'active' : ''}
          onClick={() => setMode('compare')}
        >
          Spinoza ↔ Leibniz
        </button>
      </div>

      {mode === 'guided' && (
        <GuidedMode
          stepIndex={stepIndex}
          setStepIndex={setStepIndex}
          mastered={mastered}
          setMastered={setMastered}
          needsMap={needsMap}
          setNeedsMap={setNeedsMap}
        />
      )}

      {mode === 'synthesis' && (
        <section className="leibniz-studium-section">
          <div className="leibniz-studium-heading">
            <span>01</span>
            <div>
              <p>Ordo systematis</p>
              <h2>Reconstruya el sistema en doce pasos</h2>
            </div>
          </div>

          <p className="leibniz-studium-intro">
            Pulse cada paso y trate de explicar por qué conduce al siguiente.
            Si una conexión no puede justificarse, vuelva al mapa 2D correspondiente.
          </p>

          <div className="leibniz-studium-layout">
            <div className="leibniz-studium-chain">
              {orderedSynthesis.map((concept, index) => (
                <button
                  key={concept.id}
                  type="button"
                  className={concept.id === selectedId ? 'active' : ''}
                  onClick={() => setSelectedId(concept.id)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{concept.title}</strong>
                    <small>{concept.short}</small>
                  </div>
                  {index < orderedSynthesis.length - 1 && <b>↓</b>}
                </button>
              ))}
            </div>

            <ConceptPanel concept={selected} onSelect={setSelectedId} />
          </div>
        </section>
      )}

      {mode === 'groups' && (
        <section className="leibniz-studium-section">
          <div className="leibniz-studium-heading">
            <span>02</span>
            <div>
              <p>Partes systematis</p>
              <h2>Cinco bloques para repasar sin perder el conjunto</h2>
            </div>
          </div>

          <div className="leibniz-studium-group-tabs">
            {groups.map((group) => (
              <button
                key={group.id}
                type="button"
                className={group.id === groupId ? 'active' : ''}
                onClick={() => {
                  setGroupId(group.id)
                  setSelectedId(group.concepts[0])
                }}
              >
                <span>{group.roman}</span>
                <strong>{group.title}</strong>
                <small>{group.subtitle}</small>
              </button>
            ))}
          </div>

          <div className="leibniz-studium-layout">
            <div className="leibniz-studium-concept-grid">
              {activeGroup.concepts
                .map((id) => leibnizConceptById[id])
                .filter(Boolean)
                .map((concept) => (
                  <button
                    key={concept.id}
                    type="button"
                    className={concept.id === selectedId ? 'active' : ''}
                    onClick={() => setSelectedId(concept.id)}
                  >
                    <strong>{concept.title}</strong>
                    <small>{concept.short}</small>
                  </button>
                ))}
            </div>

            <ConceptPanel concept={selected} onSelect={setSelectedId} />
          </div>
        </section>
      )}


      {mode === 'evaluation' && <FinalEvaluation />}

      {mode === 'compare' && (
        <section className="leibniz-studium-section">
          <div className="leibniz-studium-heading">
            <span>03</span>
            <div>
              <p>Comparatio</p>
              <h2>Spinoza ↔ Leibniz</h2>
            </div>
          </div>

          <div className="leibniz-studium-warning">
            <span>Regla metodológica</span>
            <strong>
              La comparación viene después de reconstruir a Leibniz por sí mismo.
            </strong>
            <p>
              La tabla muestra decisiones metafísicas divergentes ante problemas
              compartidos; no reduce un sistema al vocabulario del otro.
            </p>
          </div>

          <div className="leibniz-studium-compare">
            <div className="head">
              <strong>Problema</strong>
              <strong>Spinoza</strong>
              <strong>Leibniz</strong>
            </div>

            {spinozaLeibniz.map(([problem, spinoza, leibniz]) => (
              <div key={problem}>
                <strong>{problem}</strong>
                <span>{spinoza}</span>
                <span>{leibniz}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="leibniz-studium-exit">
        <span>¿Algo dejó de estar claro?</span>
        <strong>Vuelva al mapa donde nace el problema.</strong>
        <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia/mapas">
          Abrir mapas 2D →
        </Link>
      </section>

      <StudiumCompletionNote />

    </main>
  )
}
