import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const stages = [
  {
    id: 'homero',
    label: 'Homero',
    era: 'I',
    icon: '👁️',
    judge: 'Los demás / los dioses',
    key: 'Responsabilidad todavía oscilante',
    thesis:
      'La acción puede atribuirse al sujeto o a fuerzas divinas. La responsabilidad aparece, pero todavía es inestable.',
    chain: ['acción visible', 'acusación', 'defensa', 'imputabilidad'],
    color: 'wine',
  },
  {
    id: 'egisto',
    label: 'Egisto',
    era: 'II',
    icon: '⚖️',
    judge: 'Zeus como juez',
    key: 'El hombre crea su propio destino',
    thesis:
      'Advertencia + conocimiento + decisión hacen de Egisto verdadero autor de la acción y responsable de sus consecuencias.',
    chain: ['advertencia', 'conocimiento', 'decisión', 'acción', 'consecuencia'],
    color: 'wine',
  },
  {
    id: 'hesiodo',
    label: 'Hesíodo',
    era: 'III',
    icon: '👁️‍🗨️',
    judge: 'Dioses omnividentes',
    key: 'La intención entra en la esfera moral',
    thesis:
      'Aunque nadie vea la acción, los dioses ven también lo oculto y las disposiciones del sujeto.',
    chain: ['intención', 'acción oculta', 'vigilancia divina', 'sanción'],
    color: 'amber',
  },
  {
    id: 'esquilo',
    label: 'Esquilo',
    era: 'IV',
    icon: '🔥',
    judge: 'Destino + voluntad',
    key: 'Impulso no equivale a necesidad',
    thesis:
      'Aunque exista presión fatal o demoníaca, el sujeto todavía puede resistir. Si consiente, es corresponsable.',
    chain: ['impulso', 'resistencia / consentimiento', 'acción', 'culpa interior'],
    color: 'amber',
  },
  {
    id: 'pitagoras',
    label: 'Pitagorismo',
    era: 'V',
    icon: '🪞',
    judge: 'Uno mismo',
    key: 'Examen de conciencia',
    thesis:
      'El sujeto comienza a observar su propia conducta: por la noche recuerda, examina y juzga lo que hizo.',
    chain: ['memoria', 'autoobservación', 'vergüenza de sí', 'juez interior'],
    color: 'green',
  },
  {
    id: 'socrates',
    label: 'Sócrates',
    era: 'VI',
    icon: '🧠',
    judge: 'Uno mismo',
    key: 'La vida debe ser examinada',
    thesis:
      'La conciencia moral se vuelve práctica de cuidado de sí: el sujeto actúa y simultáneamente se somete a juicio.',
    chain: ['conócete', 'examínate', 'júzgate', 'corrígete'],
    color: 'green',
  },
  {
    id: 'platon',
    label: 'Platón',
    era: 'VII',
    icon: '⚖️',
    judge: 'El alma como tribunal',
    key: 'Hacer injusticia daña al propio sujeto',
    thesis:
      'El castigo más profundo ya no es externo: cometer injusticia enferma el alma, y la expiación puede purificarla.',
    chain: ['injusticia', 'daño al alma', 'castigo', 'purificación'],
    color: 'green',
  },
  {
    id: 'democrito',
    label: 'Demócrito',
    era: 'VIII',
    icon: '🧠',
    judge: 'Conciencia interior',
    key: 'No puedo esconderme de mí mismo',
    thesis:
      'La moral se interioriza plenamente: no basta obedecer por miedo; importa la convicción y la voluntad de no hacer injusticia.',
    chain: ['convicción', 'voluntad', 'vergüenza ante sí', 'autonomía moral'],
    color: 'gold',
  },
]

const evolution = [
  ['EXTERIOR', 'Los demás me ven', 'Homero'],
  ['RELIGIOSA', 'Los dioses me ven', 'Hesíodo'],
  ['INTERIOR', 'Yo me examino', 'Pitagorismo'],
  ['REFLEXIVA', 'Yo juzgo mi alma', 'Sócrates / Platón'],
  ['AUTÓNOMA', 'No puedo ocultarme de mí mismo', 'Demócrito'],
]

const quiz = [
  {
    q: '¿Qué demuestra, para Mondolfo, que Agamenón necesite excusarse culpando a los dioses?',
    a: [
      'Que la responsabilidad todavía no existe',
      'Que ya existe una acusación moral que exige imputabilidad',
      'Que el hado determina absolutamente toda acción',
    ],
    correct: 1,
  },
  {
    q: '¿Qué cambia con Hesíodo?',
    a: [
      'La moral deja de ser religiosa',
      'Sólo importa el castigo público',
      'La vigilancia moral alcanza acciones e intenciones ocultas',
    ],
    correct: 2,
  },
  {
    q: '¿Qué introduce decisivamente el pitagorismo?',
    a: ['El examen de conciencia', 'La negación de la voluntad', 'El fatalismo absoluto'],
    correct: 0,
  },
  {
    q: '¿Qué culmina en Demócrito?',
    a: [
      'La obediencia por miedo',
      'La interiorización de la responsabilidad en voluntad y conciencia',
      'La desaparición de toda sanción moral',
    ],
    correct: 1,
  },
]

export default function MondolfoEthicsTask() {
  const [stageId, setStageId] = useState('homero')
  const [mode, setMode] = useState('timeline')
  const [giges, setGiges] = useState(null)
  const [answers, setAnswers] = useState({})

  const stage = useMemo(
    () => stages.find((item) => item.id === stageId) || stages[0],
    [stageId],
  )

  const currentIndex = stages.findIndex((item) => item.id === stage.id)

  const selectByIndex = (index) => {
    const safe = Math.max(0, Math.min(stages.length - 1, index))
    setStageId(stages[safe].id)
  }

  const score = quiz.filter((item, index) => answers[index] === item.correct).length

  return (
    <main className="mondolfo-interactive-page">
      <nav className="mondolfo-i-nav">
        <Link to="/tareas">← Tareas</Link>
        <Link to="/" className="mondolfo-i-brand">Φ · Philosophia</Link>
        <span>Ética · FI194 · Mondolfo</span>
      </nav>

      <header className="mondolfo-i-hero">
        <div className="mondolfo-i-cover-wrap">
          <div className="mondolfo-i-cover-shadow" aria-hidden="true" />
          <figure className="mondolfo-i-cover">
            <img
              src="/philosophia/images/mondolfo-conciencia-moral-cover.jpg"
              alt="Portada de La conciencia moral de Homero a Demócrito y Epicuro, de Rodolfo Mondolfo"
            />
            <figcaption>
              <span>RODOLFO MONDOLFO</span>
              <strong>La conciencia moral de Homero a Demócrito y Epicuro</strong>
              <small>Eudeba · Colección Ensayos</small>
            </figcaption>
          </figure>
        </div>

        <div className="mondolfo-i-hero-copy">
          <p>Rodolfo Mondolfo · primera lectura del curso</p>
          <h1>
            El desarrollo de la
            <em>conciencia moral</em>
          </h1>
          <blockquote>
            ¿Cómo llegó el pensamiento griego a convertir al propio sujeto
            en juez de su conducta?
          </blockquote>
        </div>

        <div className="mondolfo-i-hero-metric">
          <span>HILO CENTRAL</span>
          <strong>EXTERIOR → INTERIOR</strong>
          <p>De responder ante otros a responder ante uno mismo.</p>
        </div>
      </header>

      <section className="mondolfo-i-controls">
        <div>
          <span>MODO DE ESTUDIO</span>
          <div className="mondolfo-i-toggle">
            <button
              type="button"
              className={mode === 'timeline' ? 'active' : ''}
              onClick={() => setMode('timeline')}
            >
              Recorrido histórico
            </button>
            <button
              type="button"
              className={mode === 'concept' ? 'active' : ''}
              onClick={() => setMode('concept')}
            >
              Estructura conceptual
            </button>
          </div>
        </div>
        <div>
          <span>ETAPA ACTUAL</span>
          <strong>{currentIndex + 1} / {stages.length}</strong>
        </div>
      </section>

      {mode === 'timeline' ? (
        <>
          <section className="mondolfo-i-timeline">
            <div className="mondolfo-i-line" />
            {stages.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`${item.id === stage.id ? 'active' : ''} ${item.color}`}
                onClick={() => setStageId(item.id)}
              >
                <span>{item.era}</span>
                <b>{item.icon}</b>
                <strong>{item.label}</strong>
                <small>{item.key}</small>
              </button>
            ))}
          </section>

          <section className="mondolfo-i-stage">
            <article className="mondolfo-i-stage-card">
              <div className="mondolfo-i-stage-top">
                <span>{stage.era}</span>
                <small>{stage.label}</small>
              </div>
              <h2>{stage.key}</h2>
              <p>{stage.thesis}</p>

              <div className="mondolfo-i-chain">
                {stage.chain.map((item, index) => (
                  <div key={item}>
                    <strong>{item}</strong>
                    {index < stage.chain.length - 1 && <b>→</b>}
                  </div>
                ))}
              </div>
            </article>

            <aside className="mondolfo-i-judge">
              <span>¿QUIÉN JUZGA?</span>
              <strong>{stage.judge}</strong>
              <div className="mondolfo-i-judge-visual">
                <span className="actor">YO</span>
                <b>→</b>
                <span className="judge">{stage.judge}</span>
              </div>
              <div className="mondolfo-i-stage-nav">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => selectByIndex(currentIndex - 1)}
                >
                  ← anterior
                </button>
                <button
                  type="button"
                  disabled={currentIndex === stages.length - 1}
                  onClick={() => selectByIndex(currentIndex + 1)}
                >
                  siguiente →
                </button>
              </div>
            </aside>
          </section>
        </>
      ) : (
        <section className="mondolfo-i-concept-map">
          <div className="mondolfo-i-concept-main">
            {[
              ['DIOSES / HADO', 'explican o presionan la acción'],
              ['ACCIÓN HUMANA', 'aparece la pregunta por el autor'],
              ['CASTIGO EXTERIOR', 'sociedad y dioses sancionan'],
              ['INTENCIÓN', 'importa lo que el sujeto quería'],
              ['VIGILANCIA DIVINA', 'ni lo oculto escapa al juicio'],
              ['CULPA INTERIOR', 'la injusticia hiere al culpable'],
              ['EXAMEN DE SÍ', 'el sujeto se observa'],
              ['CONCIENCIA MORAL', 'el sujeto se vuelve juez de sí'],
            ].map(([title, desc], index, arr) => (
              <div key={title}>
                <article>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </article>
                {index < arr.length - 1 && <b>↓</b>}
              </div>
            ))}
          </div>

          <aside>
            <span>TESIS DE MONDOLFO</span>
            <h2>La moral se interioriza</h2>
            <p>
              La conciencia moral griega se forma históricamente mediante la
              progresiva interiorización de la responsabilidad y de la sanción.
            </p>
            <div>
              <strong>de:</strong>
              <span>“me juzgan”</span>
              <b>→</b>
              <strong>a:</strong>
              <span>“me juzgo”</span>
            </div>
          </aside>
        </section>
      )}

      <section className="mondolfo-i-evolution">
        <div>
          <span>METAMORFOSIS DEL JUEZ</span>
          <h2>El juez entra poco a poco en el interior</h2>
        </div>

        <div className="mondolfo-i-evolution-track">
          {evolution.map(([label, phrase, author], index) => (
            <article key={label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <small>{label}</small>
              <strong>{phrase}</strong>
              <p>{author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mondolfo-i-giges">
        <div>
          <span>EXPERIMENTO MENTAL</span>
          <h2>El problema del anillo de Giges</h2>
          <p>
            Imagine que puede cometer una injusticia con absoluta certeza de
            que nadie lo descubrirá. ¿Qué impediría la acción?
          </p>
        </div>

        <div className="mondolfo-i-giges-options">
          <button
            type="button"
            className={giges === 'external' ? 'active' : ''}
            onClick={() => setGiges('external')}
          >
            <span>A</span>
            <strong>El miedo a ser visto</strong>
          </button>
          <button
            type="button"
            className={giges === 'divine' ? 'active' : ''}
            onClick={() => setGiges('divine')}
          >
            <span>B</span>
            <strong>La vigilancia divina</strong>
          </button>
          <button
            type="button"
            className={giges === 'conscience' ? 'active' : ''}
            onClick={() => setGiges('conscience')}
          >
            <span>C</span>
            <strong>Mi propia conciencia</strong>
          </button>
        </div>

        {giges && (
          <div className="mondolfo-i-giges-result">
            {giges === 'external' && (
              <>
                <span>ETAPA EXTERIOR</span>
                <strong>Si nadie me ve, el freno desaparece.</strong>
                <p>La moral depende todavía de espectadores y sanciones externas.</p>
              </>
            )}
            {giges === 'divine' && (
              <>
                <span>HESÍODO</span>
                <strong>Aunque nadie me vea, los dioses me ven.</strong>
                <p>La vigilancia se amplía, pero el juez sigue fuera del individuo.</p>
              </>
            )}
            {giges === 'conscience' && (
              <>
                <span>DEMÓCRITO</span>
                <strong>Aunque nadie me vea, yo sé lo que hice.</strong>
                <p>Éste es el paso decisivo hacia la autonomía moral.</p>
              </>
            )}
          </div>
        )}
      </section>

      <section className="mondolfo-i-quiz">
        <div className="mondolfo-i-quiz-head">
          <span>PROBATIO</span>
          <h2>Compruebe si ya vio el movimiento completo</h2>
          <strong>{score} / {quiz.length}</strong>
        </div>

        <div className="mondolfo-i-quiz-grid">
          {quiz.map((item, qIndex) => (
            <article key={item.q}>
              <span>Pregunta {qIndex + 1}</span>
              <h3>{item.q}</h3>
              <div>
                {item.a.map((option, index) => {
                  const answered = answers[qIndex] !== undefined
                  const chosen = answers[qIndex] === index
                  const correct = item.correct === index
                  return (
                    <button
                      key={option}
                      type="button"
                      className={[
                        chosen ? 'chosen' : '',
                        answered && correct ? 'correct' : '',
                        answered && chosen && !correct ? 'wrong' : '',
                      ].filter(Boolean).join(' ')}
                      onClick={() => setAnswers({ ...answers, [qIndex]: index })}
                    >
                      <b>{String.fromCharCode(65 + index)}</b>
                      <span>{option}</span>
                    </button>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mondolfo-i-final">
        <span>FÓRMULA DE MEMORIA</span>
        <h2>Todo Mondolfo en una sola secuencia</h2>
        <div>
          <strong>HOMERO</strong>
          <b>→</b>
          <strong>HESÍODO</strong>
          <b>→</b>
          <strong>PITAGORISMO</strong>
          <b>→</b>
          <strong>SÓCRATES / PLATÓN</strong>
          <b>→</b>
          <strong>DEMÓCRITO</strong>
        </div>
        <p>
          Los demás me ven → los dioses me ven → yo me examino → yo juzgo mi alma
          → yo no puedo esconderme de mí mismo.
        </p>
      </section>
    </main>
  )
}
