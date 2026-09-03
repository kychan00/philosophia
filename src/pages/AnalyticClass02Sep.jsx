import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'problema', 'Hermenéutica y filosofía analítica'],
  ['01', 'positivismo', 'Ciencia unificada y positivismo'],
  ['02', 'realismo', 'Tres formas de realismo'],
  ['03', 'leyes', 'Leyes, teorías e hipótesis'],
  ['04', 'inferencia', 'Qué demuestra realmente el argumento'],
  ['05', 'grado', 'El problema de la analiticidad por grados'],
  ['06', 'criterios', 'Definición provisional'],
  ['07', 'etica', 'Argumentación, autonomía y democracia'],
  ['08', 'tarea', 'Reporte para la próxima sesión'],
]

const realism = [
  {
    key: 'ingenuo',
    number: 'I',
    title: 'Realismo ingenuo',
    claim: 'La realidad es como la percibo.',
    detail:
      'No tematiza todavía el problema de cómo una representación puede corresponder con algo exterior al sujeto.',
    formula: 'percepción = realidad',
  },
  {
    key: 'natural',
    number: 'II',
    title: 'Realismo natural',
    claim: 'Hay un problema de acceso, pero puede resolverse.',
    detail:
      'Distingue sujeto, representación y objeto, sin abandonar la posibilidad de conocer adecuadamente la realidad.',
    formula: 'sujeto → representación → objeto',
  },
  {
    key: 'critico',
    number: 'III',
    title: 'Realismo crítico',
    claim: 'La realidad existe, aunque no la captemos por completo.',
    detail:
      'Admite límites de representación y conserva la posibilidad de conocimiento objetivo, especialmente estructural.',
    formula: 'realidad independiente + conocimiento parcial',
  },
]

const criteria = [
  ['Argumentación racional', 'Razones explícitas que puedan ser evaluadas.'],
  ['Justificación', 'No basta afirmar: hay que mostrar por qué aceptar la tesis.'],
  ['Análisis del lenguaje', 'Herramienta filosófica, no finalidad exclusiva.'],
  ['Contexto histórico', 'La tradición es contemporánea y no puede proyectarse anacrónicamente.'],
]

const stages = [
  ['XIX', 'Positivismo', 'Comte · unidad metodológica'],
  ['XX', 'Analítica temprana', 'lógica · lenguaje · análisis'],
  ['XX', 'Positivismo lógico', 'encuentro entre ambas tradiciones'],
  ['XX–XXI', 'Tradición plural', 'rupturas · críticas · nuevas escuelas'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

function Head({ n, eye, children }) {
  return (
    <div className="an02-head">
      <span>{n}</span>
      <div>
        <p>{eye}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function AnalyticClass02Sep() {
  const [realismKey, setRealismKey] = useState('ingenuo')
  const [lawView, setLawView] = useState('law')
  const [argumentStep, setArgumentStep] = useState('valid')
  const [criterion, setCriterion] = useState(0)

  const activeRealism = useMemo(
    () => realism.find((item) => item.key === realismKey) || realism[0],
    [realismKey],
  )

  return (
    <main className="an02-page">
      <nav className="an02-nav">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="an02-brand">Φ · Philosophia</Link>
        <span>II · IX · MMXXVI</span>
      </nav>

      <header className="an02-hero">
        <div className="an02-grid" aria-hidden="true" />
        <div className="an02-ghost" aria-hidden="true">≠</div>

        <div className="an02-hero-inner">
          <div>
            <p className="an02-kicker">FI264 · Quinta clase · 2 de septiembre</p>
            <h1>
              Hermenéutica,
              <em>positivismo y demarcación</em>
            </h1>
            <p className="an02-lead">
              La sesión cierra una lectura sobre la posible compatibilidad entre
              hermenéutica y filosofía analítica, pero desplaza la pregunta:
              refutar un criterio insuficiente no equivale a demostrar pertenencia
              a una tradición.
            </p>

            <div className="an02-question">
              <span>PROBLEMA RECTOR</span>
              <strong>
                ¿Qué condiciones permiten llamar “analítica” a una filosofía sin
                reducir la tradición al positivismo ni volverla históricamente vacía?
              </strong>
            </div>
          </div>

          <aside className="an02-axis">
            <span>TESIS PROVISIONAL</span>
            {criteria.map(([title], index) => (
              <button
                type="button"
                key={title}
                className={criterion === index ? 'active' : ''}
                onClick={() => setCriterion(index)}
              >
                <b>{String(index + 1).padStart(2, '0')}</b>
                <strong>{title}</strong>
              </button>
            ))}
          </aside>
        </div>
      </header>

      <div className="an02-layout">
        <aside className="an02-index">
          <p>Index analyticus</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goTo(id)}>
              <span>{n}</span>
              {label}
            </button>
          ))}
        </aside>

        <article className="an02-article">
          <section id="problema">
            <Head n="00" eye="Hermeneutica · Analytica">
              La incompatibilidad inicial depende de criterios demasiado estrechos
            </Head>

            <p>
              La lectura recupera una objeción atribuida a von Wright: la
              hermenéutica parecería incompatible con la filosofía analítica porque
              rechaza tanto la unidad de la ciencia como ciertas formas de
              naturalismo.
            </p>

            <div className="an02-tension">
              <article>
                <span>HERMENÉUTICA</span>
                <strong>historia · cultura · interpretación</strong>
                <p>Distingue ciencias naturales, sociales y humanidades.</p>
              </article>

              <b>VS.</b>

              <article>
                <span>CRITERIOS ATRIBUIDOS A “LO ANALÍTICO”</span>
                <strong>unidad de la ciencia · naturalismo</strong>
                <p>El profesor objeta que éstos caracterizan sobre todo al positivismo.</p>
              </article>
            </div>

            <div className="an02-callout">
              <span>CRÍTICA CENTRAL</span>
              <strong>
                Filosofía analítica ≠ positivismo. Una etapa no puede definir por sí
                sola una tradición de más de un siglo.
              </strong>
            </div>
          </section>

          <section id="positivismo">
            <Head n="01" eye="Comte · Positivismus">
              De la unidad metodológica a la ciencia unificada
            </Head>

            <div className="an02-timeline">
              {stages.map(([date, title, note]) => (
                <article key={`${date}-${title}`}>
                  <span>{date}</span>
                  <strong>{title}</strong>
                  <p>{note}</p>
                </article>
              ))}
            </div>

            <div className="an02-comte">
              <div>
                <span>COMTE</span>
                <strong>unidad metodológica</strong>
                <p>
                  Las disciplinas conservan una división del trabajo, pero
                  comparten una orientación positiva y coordinada.
                </p>
              </div>
              <b>→</b>
              <div>
                <span>FILOSOFÍA</span>
                <strong>coordinar · ordenar · reflexionar sobre el método</strong>
                <p>Comienza una reducción de sus funciones tradicionales.</p>
              </div>
              <b>→</b>
              <div className="core">
                <span>POSITIVISMO LÓGICO</span>
                <strong>lógica + análisis + positivismo</strong>
                <p>La unidad de la ciencia se radicaliza.</p>
              </div>
            </div>

            <div className="an02-formula">
              <span>filosofía analítica temprana</span>
              <b>+</b>
              <span>positivismo</span>
              <b>=</b>
              <strong>positivismo lógico</strong>
            </div>
          </section>

          <section id="realismo">
            <Head n="02" eye="Res · Cognitio">
              Tres formas de afirmar una realidad independiente
            </Head>

            <div className="an02-tabs">
              {realism.map((item) => (
                <button
                  type="button"
                  key={item.key}
                  className={realismKey === item.key ? 'active' : ''}
                  onClick={() => setRealismKey(item.key)}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="an02-realism-focus">
              <span>{activeRealism.title}</span>
              <h3>{activeRealism.claim}</h3>
              <p>{activeRealism.detail}</p>
              <code>{activeRealism.formula}</code>
            </div>

            <div className="an02-axisline">
              <span>SUJETO</span>
              <b>↔</b>
              <strong>REPRESENTACIÓN</strong>
              <b>↔</b>
              <span>OBJETO</span>
            </div>
          </section>

          <section id="leyes">
            <Head n="03" eye="Nomos · Theoria">
              De leyes invariables a hipótesis dentro de redes teóricas
            </Head>

            <div className="an02-toggle">
              <button
                type="button"
                className={lawView === 'law' ? 'active' : ''}
                onClick={() => setLawView('law')}
              >
                Ley fuerte
              </button>
              <button
                type="button"
                className={lawView === 'hypothesis' ? 'active' : ''}
                onClick={() => setLawView('hypothesis')}
              >
                Hipótesis
              </button>
            </div>

            {lawView === 'law' ? (
              <div className="an02-law">
                <span>VISIÓN HEREDADA</span>
                <h3>Naturaleza = sistema de leyes fijas</h3>
                <p>
                  El problema aparece cuando una relación supuestamente absoluta
                  cambia al modificarse el marco teórico.
                </p>
                <div className="an02-formula">
                  <span>Newton</span>
                  <b>≠</b>
                  <span>Einstein</span>
                  <b>→</b>
                  <strong>el marco importa</strong>
                </div>
              </div>
            ) : (
              <div className="an02-law">
                <span>CONCEPCIÓN MÁS CAUTELOSA</span>
                <h3>Hipótesis dentro de una red</h3>
                <p>
                  Una afirmación se prueba mediante observaciones, consecuencias y
                  conexiones con otras partes de la teoría, sin convertirla
                  automáticamente en verdad absoluta.
                </p>
                <div className="an02-formula">
                  <span>hipótesis</span>
                  <b>↔</b>
                  <span>observaciones</span>
                  <b>↔</b>
                  <strong>teoría</strong>
                </div>
              </div>
            )}
          </section>

          <section id="inferencia">
            <Head n="04" eye="Consequentia">
              Refutar un argumento no prueba automáticamente la tesis contraria
            </Head>

            <div className="an02-toggle">
              <button
                type="button"
                className={argumentStep === 'valid' ? 'active' : ''}
                onClick={() => setArgumentStep('valid')}
              >
                Conclusión legítima
              </button>
              <button
                type="button"
                className={argumentStep === 'invalid' ? 'active' : ''}
                onClick={() => setArgumentStep('invalid')}
              >
                Salto no demostrado
              </button>
            </div>

            {argumentStep === 'valid' ? (
              <div className="an02-logic valid">
                <span>von Wright:</span>
                <strong>“No es analítica porque no cumple X.”</strong>
                <b>↓</b>
                <span>Se demuestra:</span>
                <strong>“No todos los analíticos cumplen X.”</strong>
                <b>∴</b>
                <em>X no sirve como criterio universal.</em>
              </div>
            ) : (
              <div className="an02-logic invalid">
                <span>Pero no sigue todavía:</span>
                <strong>“Entonces la hermenéutica es analítica.”</strong>
                <b>⚠</b>
                <em>Esa pertenencia necesita una demostración adicional.</em>
              </div>
            )}
          </section>

          <section id="grado">
            <Head n="05" eye="Gradus · Anachronismus">
              Si “ser analítico” es sólo un grado, la categoría se deshistoriza
            </Head>

            <div className="an02-degree">
              <div>
                <span>PROPUESTA DEL AUTOR</span>
                <strong>argumentación + justificación</strong>
                <b>↓</b>
                <em>más o menos analítico</em>
              </div>

              <div className="warning">
                <span>OBJECIÓN</span>
                <strong>Aristóteles y Descartes también argumentan</strong>
                <b>≠</b>
                <em>filósofos analíticos</em>
              </div>
            </div>

            <div className="an02-callout">
              <span>ANACRONISMO</span>
              <strong>
                Una semejanza metodológica no basta para trasladar una categoría
                histórica a una época en la que todavía no existía.
              </strong>
            </div>
          </section>

          <section id="criterios">
            <Head n="06" eye="Definitio provisoria">
              Cuatro rasgos que la clase conserva por ahora
            </Head>

            <div className="an02-criteria">
              {criteria.map(([title, detail], index) => (
                <button
                  type="button"
                  key={title}
                  className={criterion === index ? 'active' : ''}
                  onClick={() => setCriterion(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </button>
              ))}
            </div>

            <div className="an02-definition">
              <span>DEFINICIÓN PROVISIONAL</span>
              <strong>
                argumentación racional + justificación + análisis del lenguaje +
                contexto histórico
              </strong>
            </div>

            <div className="an02-not">
              <span>NO BASTA POR SÍ SOLO</span>
              {[
                'ser positivista',
                'defender la ciencia unificada',
                'ser naturalista',
                'utilizar argumentos',
                'analizar conceptos',
              ].map((item) => (
                <em key={item}>{item}</em>
              ))}
            </div>
          </section>

          <section id="etica">
            <Head n="07" eye="Ethica argumentationis">
              Dar razones también implica reconocer al otro
            </Head>

            <div className="an02-ethical-flow">
              <div>
                <span>NO</span>
                <strong>coacción · manipulación · imposición</strong>
              </div>
              <b>→</b>
              <div className="core">
                <span>SÍ</span>
                <strong>razones · argumentos · evaluación</strong>
              </div>
              <b>→</b>
              <div>
                <span>RECONOCIMIENTO</span>
                <strong>interlocutor racional y autónomo</strong>
              </div>
            </div>

            <div className="an02-pair">
              <article>
                <span>FILOSOFÍA</span>
                <strong>enseñar a argumentar y justificar</strong>
              </article>
              <article>
                <span>DEMOCRACIA</span>
                <strong>hacer evaluables las razones en el espacio común</strong>
              </article>
            </div>
          </section>

          <section id="tarea">
            <Head n="08" eye="Relatio lectionis">
              Reporte para el miércoles siguiente
            </Head>

            <div className="an02-task">
              <div>
                <span>ENTREGA</span>
                <strong>Miércoles · 9 de septiembre · al final de clase</strong>
              </div>
              <div>
                <span>FORMATO</span>
                <strong>Sin extensión rígida</strong>
                <p>
                  Usar las páginas necesarias para explicar el texto con comprensión,
                  desarrollo y suficiente detalle.
                </p>
              </div>
              <div>
                <span>PRÓXIMA LECTURA</span>
                <strong>Autor por confirmar en la transcripción</strong>
                <p>
                  La grabación remite tentativamente a Peter Hacker; conviene
                  confirmar el texto exacto en clase o Classroom.
                </p>
              </div>
            </div>

            <Link to="/tareas" className="an02-task-link">
              Abrir tablero de tareas <span>↗</span>
            </Link>
          </section>
        </article>
      </div>

      <footer className="an02-footer">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <span>argumentum · historia · analysis</span>
        <span>II · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
