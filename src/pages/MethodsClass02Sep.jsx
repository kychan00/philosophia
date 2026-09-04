import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'objeto', 'Tema ≠ objeto de estudio'],
  ['01', 'camino', 'De lo general a lo particular'],
  ['02', 'criterios', 'Originalidad · pertinencia · utilidad'],
  ['03', 'delimitar', 'Delimitar también es excluir'],
  ['04', 'rousseau', 'Libertad → Rousseau → Contrato social'],
  ['05', 'paradoja', 'La paradoja: obligar a ser libre'],
  ['06', 'lectura', 'Leer sólo lo necesario'],
  ['07', 'modelo', 'Modelo general de construcción'],
  ['08', 'cierre', 'Lo que continúa en la próxima clase'],
]

const delimiters = [
  ['Espacio', '¿Dónde?'],
  ['Tiempo', '¿Cuándo?'],
  ['Autor', '¿Quién?'],
  ['Obra', '¿En qué texto?'],
  ['Concepto', '¿Qué noción?'],
  ['Problema', '¿Qué aspecto?'],
  ['Fuentes', '¿Con qué documentos?'],
  ['Disciplina', '¿Desde qué área?'],
]

const criteria = [
  {
    id: 'originalidad',
    title: 'Originalidad',
    question: '¿Qué aporta de diferente?',
    text:
      'No exige inventar un tema nunca tratado: puede aparecer en una metodología distinta, nuevas fuentes, una relectura o una relación antes poco trabajada.',
  },
  {
    id: 'pertinencia',
    title: 'Pertinencia',
    question: '¿Por qué tiene sentido estudiarlo aquí?',
    text:
      'El problema debe justificarse dentro de un contexto disciplinar, académico y temporal concreto.',
  },
  {
    id: 'utilidad',
    title: 'Utilidad',
    question: '¿Qué permitirá comprender o aclarar?',
    text:
      'En filosofía puede consistir en aclarar un concepto, corregir una interpretación, reconstruir un argumento o ampliar la comprensión de un problema.',
  },
]

const rousseauSteps = [
  ['01', 'Interés', 'Libertad'],
  ['02', 'Campo', 'Filosofía política'],
  ['03', 'Autor', 'Jean-Jacques Rousseau'],
  ['04', 'Obra', 'El contrato social'],
  ['05', 'Conceptos', 'libertad · ley · voluntad general · deber'],
  ['06', 'Problema', 'obligación política ↔ libertad'],
  ['07', 'Pregunta', '¿Cómo puede la obediencia a una ley producir libertad?'],
  ['08', 'Objeto', 'un problema filosófico delimitado y viable'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

function Heading({ number, eyebrow, children }) {
  return (
    <div className="methods-class-heading methods02-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function MethodsClass02Sep() {
  const [criterionId, setCriterionId] = useState('originalidad')
  const [delimiter, setDelimiter] = useState(0)
  const [rousseauStep, setRousseauStep] = useState(0)
  const [readingMode, setReadingMode] = useState('necessary')

  const activeCriterion = useMemo(
    () => criteria.find((item) => item.id === criterionId) || criteria[0],
    [criterionId],
  )

  const activeDelimiter = delimiters[delimiter]
  const activeRousseau = rousseauSteps[rousseauStep]

  return (
    <main className="methods-class-page methods02-page">
      <nav className="methods-class-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">
          ← Métodos de Investigación
        </Link>
        <Link to="/" className="methods-class-brand">
          Φ · Philosophia
        </Link>
        <span>II · IX · MMXXVI</span>
      </nav>

      <header className="methods-class-header methods02-header">
        <div className="methods-header-rules" aria-hidden="true" />
        <div className="methods02-ghost" aria-hidden="true">OBIECTUM</div>
        <div className="methods-header-symbol" aria-hidden="true">§</div>

        <div className="methods02-hero-inner">
          <div>
            <p className="methods-class-kicker">FI104 · Quinta sesión</p>
            <h1>
              Del tema al
              <em>objeto de estudio</em>
            </h1>
            <p className="methods-class-subtitle">
              Delimitar, justificar, excluir y convertir una curiosidad filosófica
              en una pregunta investigable. La metodología como estrategia para
              saber exactamente qué estudiar y por qué.
            </p>
          </div>

          <aside className="methods02-thesis">
            <span>IDEA CENTRAL</span>
            <strong>
              Investigar no consiste en hablar de todo lo relacionado con un tema.
            </strong>
            <p>
              Consiste en determinar qué parte concreta del problema será estudiada,
              qué queda fuera y qué fuentes son realmente necesarias.
            </p>
          </aside>
        </div>

        <div className="methods-header-ornament">☙ ───── § ───── ❧</div>
      </header>

      <div className="methods-class-layout">
        <aside className="methods-index">
          <p>Index inquisitionis</p>
          <nav>
            {sections.map(([number, id, label]) => (
              <button key={id} type="button" onClick={() => goTo(id)}>
                <span>{number}</span>
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <article className="methods-article">
          <section id="objeto" className="methods-section">
            <Heading number="00" eyebrow="Obiectum studii">
              Un tema amplio todavía no es un objeto de investigación
            </Heading>

            <p className="methods02-prose">
              La sesión define el objeto de estudio como un hecho, fenómeno,
              proceso o problema específico que ha sido delimitado dentro de un
              campo disciplinar y que puede abordarse con los recursos disponibles.
            </p>

            <div className="methods02-contrast">
              <article>
                <span>TEMA GENERAL</span>
                <strong>libertad</strong>
                <p>Área amplia de interés.</p>
              </article>
              <b>≠</b>
              <article className="core">
                <span>OBJETO DE ESTUDIO</span>
                <strong>
                  libertad, ley y voluntad general en <em>El contrato social</em>
                </strong>
                <p>Recorte específico, justificable y manejable.</p>
              </article>
            </div>

            <div className="methods02-rule">
              <span>REGLA</span>
              <strong>
                Investigar significa elegir una parte del problema y renunciar a
                estudiar simultáneamente todo lo demás.
              </strong>
            </div>
          </section>

          <section id="camino" className="methods-section">
            <Heading number="01" eyebrow="Gradus">
              El camino metodológico va de lo general a lo particular
            </Heading>

            <div className="methods02-staircase">
              {[
                ['Campo disciplinar', 'dónde se sitúa filosóficamente'],
                ['Área temática', 'zona amplia de interés'],
                ['Tema general', 'formulación todavía abierta'],
                ['Tema específico', 'primer recorte significativo'],
                ['Objeto de estudio', 'qué exactamente se investigará'],
                ['Pregunta', 'qué queremos explicar o resolver'],
              ].map(([title, note], index) => (
                <div key={title} style={{ '--step': index }}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{title}</strong>
                  <small>{note}</small>
                </div>
              ))}
            </div>

            <div className="methods02-delimiter">
              <div className="methods02-delimiter-tabs">
                {delimiters.map(([title], index) => (
                  <button
                    type="button"
                    key={title}
                    className={delimiter === index ? 'active' : ''}
                    onClick={() => setDelimiter(index)}
                  >
                    {title}
                  </button>
                ))}
              </div>

              <div className="methods02-delimiter-focus">
                <span>VARIABLE DE DELIMITACIÓN</span>
                <h3>{activeDelimiter[0]}</h3>
                <strong>{activeDelimiter[1]}</strong>
              </div>
            </div>
          </section>

          <section id="criterios" className="methods-section">
            <Heading number="02" eyebrow="Iustificatio">
              Un buen tema debe poder justificarse
            </Heading>

            <div className="methods02-criterion-tabs">
              {criteria.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={criterionId === item.id ? 'active' : ''}
                  onClick={() => setCriterionId(item.id)}
                >
                  <span>{item.question}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <article className="methods02-criterion-focus">
              <span>{activeCriterion.title}</span>
              <h3>{activeCriterion.question}</h3>
              <p>{activeCriterion.text}</p>
            </article>

            <div className="methods02-formula">
              <strong>originalidad</strong>
              <b>+</b>
              <strong>pertinencia</strong>
              <b>+</b>
              <strong>utilidad</strong>
              <b>→</b>
              <span>tema justificable</span>
            </div>
          </section>

          <section id="delimitar" className="methods-section">
            <Heading number="03" eyebrow="Exclusio">
              Delimitar también es saber qué dejar fuera
            </Heading>

            <p className="methods02-prose">
              Una investigación se vuelve viable cuando sus límites impiden que
              cada conexión interesante se transforme en una nueva obligación de
              lectura. No todo lo relacionado con el tema pertenece al trabajo.
            </p>

            <div className="methods02-include">
              <div className="yes">
                <span>ENTRA</span>
                <strong>lo que ayuda a responder la pregunta</strong>
              </div>
              <b>↔</b>
              <div className="no">
                <span>QUEDA FUERA</span>
                <strong>lo interesante que no interviene en el problema</strong>
              </div>
            </div>

            <blockquote className="methods02-quote">
              <span>REGULA LECTURAE</span>
              <strong>
                “¿Este texto me ayuda a responder mi problema de investigación?”
              </strong>
            </blockquote>
          </section>

          <section id="rousseau" className="methods-section">
            <Heading number="04" eyebrow="Exemplum">
              Libertad → Rousseau → <em>El contrato social</em>
            </Heading>

            <div className="methods02-rousseau">
              <div className="methods02-rousseau-list">
                {rousseauSteps.map(([number, title, value], index) => (
                  <button
                    type="button"
                    key={number}
                    className={rousseauStep === index ? 'active' : ''}
                    onClick={() => setRousseauStep(index)}
                  >
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <small>{value}</small>
                  </button>
                ))}
              </div>

              <article className="methods02-rousseau-focus">
                <span>{activeRousseau[1]}</span>
                <strong>{activeRousseau[2]}</strong>
                <small>
                  {rousseauStep === rousseauSteps.length - 1
                    ? 'El tema ya puede convertirse en una investigación filosófica concreta.'
                    : 'Cada paso elimina amplitud y aumenta precisión.'}
                </small>
              </article>
            </div>

            <div className="methods02-concepts">
              {['libertad', 'ley', 'voluntad general', 'deber'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section id="paradoja" className="methods-section">
            <Heading number="05" eyebrow="Problema philosophicum">
              Una contradicción aparente puede producir una gran pregunta
            </Heading>

            <div className="methods02-paradox">
              <span>ROUSSEAU</span>
              <h3>“obligar a ser libre”</h3>
              <div>
                <strong>obligación</strong>
                <b>?</b>
                <strong>libertad</strong>
              </div>
              <p>
                La investigación ya no necesita abarcar toda la teoría de la
                libertad. Puede concentrarse en aclarar cómo la obediencia a una
                ley que expresa la voluntad general puede entenderse como una forma
                de libertad política.
              </p>
            </div>

            <div className="methods02-question">
              <span>PREGUNTA POSIBLE</span>
              <strong>
                ¿Cómo justifica Rousseau que la obediencia a la voluntad general
                pueda constituir una forma de libertad?
              </strong>
            </div>
          </section>

          <section id="lectura" className="methods-section">
            <Heading number="06" eyebrow="Bibliographia">
              No leer todo lo interesante: leer lo necesario
            </Heading>

            <div className="methods02-reading-toggle">
              <button
                type="button"
                className={readingMode === 'infinite' ? 'active danger' : ''}
                onClick={() => setReadingMode('infinite')}
              >
                Curiosidad infinita
              </button>
              <button
                type="button"
                className={readingMode === 'necessary' ? 'active' : ''}
                onClick={() => setReadingMode('necessary')}
              >
                Lectura pertinente
              </button>
            </div>

            {readingMode === 'infinite' ? (
              <div className="methods02-reading-flow danger">
                <span>tema</span><b>→</b>
                <span>autor</span><b>→</b>
                <span>otro autor</span><b>→</b>
                <span>otro problema</span><b>→</b>
                <strong>investigación infinita</strong>
              </div>
            ) : (
              <div className="methods02-reading-flow">
                <span>pregunta</span><b>→</b>
                <span>texto pertinente</span><b>→</b>
                <span>argumento necesario</span><b>→</b>
                <strong>respuesta</strong>
              </div>
            )}

            <div className="methods02-checklist">
              {[
                '¿Está directamente relacionado con mi objeto?',
                '¿Me ayuda a responder mi pregunta?',
                '¿Aporta una definición necesaria?',
                '¿Aporta un argumento que debo discutir?',
                '¿Aporta una interpretación relevante?',
              ].map((item) => (
                <div key={item}>
                  <span>✓</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </section>

          <section id="modelo" className="methods-section">
            <Heading number="07" eyebrow="Methodus">
              No hay truco: hay estrategia
            </Heading>

            <div className="methods02-master-flow">
              {[
                'interés',
                'disciplina',
                'autor',
                'obra',
                'conceptos',
                'variables',
                'problema',
                'pregunta',
                'objeto',
              ].map((item, index, array) => (
                <span key={item}>
                  <strong>{item}</strong>
                  {index < array.length - 1 && <b>→</b>}
                </span>
              ))}
            </div>

            <div className="methods02-rule">
              <span>METODOLOGÍA COMO MAPA</span>
              <strong>
                El método no garantiza por sí mismo una buena investigación,
                pero evita buscar sin saber qué se está buscando.
              </strong>
            </div>
          </section>

          <section id="cierre" className="methods-section">
            <Heading number="08" eyebrow="Continuatio">
              La construcción del objeto continúa en la próxima sesión
            </Heading>

            <div className="methods02-next">
              <article>
                <span>YA TRABAJADO</span>
                <strong>tema general → delimitación → objeto</strong>
              </article>
              <article>
                <span>POR CONTINUAR</span>
                <strong>
                  tema general · tema específico · variables · pregunta de investigación
                </strong>
              </article>
            </div>

            <p className="methods02-prose">
              La clase termina deliberadamente con el ejercicio abierto: el objeto
              de estudio no aparece de golpe, sino que se construye mediante
              decisiones sucesivas de selección, exclusión y justificación.
            </p>
          </section>
        </article>
      </div>

      <footer className="methods-footer">
        <Link to="/semestre/5/metodos-de-investigacion">
          ← Métodos de Investigación
        </Link>
        <span>☙ &nbsp; § &nbsp; ❧</span>
        <span>II · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
