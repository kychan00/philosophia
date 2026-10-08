import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './AcademicTalkAI22Sep.css'

const questions = [
  {
    id: 'inteligencia',
    label: '¿Es inteligente?',
    kicker: 'Intelligentia',
    title: 'La palabra “inteligencia” ya llega cargada de historia',
    body:
      'La ponencia reconstruye el término desde nous e intellectus y cuestiona que una sola medida capture una esencia humana. El paso a “inteligencia artificial” hereda ese problema: si primero no sabemos qué cuenta como inteligencia, un benchmark sólo demuestra rendimiento bajo un criterio previamente elegido.',
    note:
      'La conferencia insiste en leer los tests y benchmarks también como artefactos sociales y políticos, no como ventanas neutrales hacia una esencia.',
  },
  {
    id: 'conciencia',
    label: '¿Es consciente?',
    kicker: 'Conscientia',
    title: 'Parecer alguien no equivale a haber una experiencia interior',
    body:
      'A partir de la pregunta de Thomas Nagel por “qué se siente ser” un organismo, la conferencia distingue el efecto conversacional de un modelo y la existencia de una experiencia persistente. El punto no es negar por decreto toda posibilidad futura, sino mostrar que una conversación fluida no basta para probar conciencia.',
    note:
      'La explicación de la sesión subraya la discontinuidad operativa entre interacciones y la ilusión de continuidad que produce la interfaz conversacional.',
  },
  {
    id: 'creencias',
    label: '¿Tiene creencias?',
    kicker: 'Credere',
    title: '“Creencia” cambia según la teoría filosófica que usemos',
    body:
      'La conferencia contrasta varias posiciones: representacionalismo, disposicionalismo, funcionalismo y postura intencional. Según la definición elegida, atribuir una creencia a un sistema puede ser una afirmación sobre su estructura interna, una disposición a actuar o simplemente una estrategia útil para predecir su conducta.',
    note:
      'La sesión evita una respuesta única: la cuestión depende de qué teoría de la creencia adoptemos.',
  },
  {
    id: 'conocimiento',
    label: '¿Tiene conocimiento?',
    kicker: 'Episteme',
    title: 'Resolver un problema no es automáticamente comprenderlo',
    body:
      'La discusión separa datos, información, creencia y conocimiento. Desde la fórmula clásica de creencia verdadera justificada, la pregunta se desplaza hacia la justificación: ¿qué cuenta como evidencia para una máquina entrenada con enormes corpus? La sesión también distingue producir una respuesta de recorrer un camino inteligible de aprendizaje.',
    note:
      'Una de las preocupaciones pedagógicas de la conferencia es que la automatización puede quitar al estudiante precisamente el proceso que producía aprendizaje.',
  },
  {
    id: 'intenciones',
    label: '¿Tiene intenciones?',
    kicker: 'Intentio',
    title: 'A veces atribuir intención sirve para entender un sistema',
    body:
      'La conferencia recurre a la postura intencional de Daniel Dennett: no siempre necesitamos afirmar que hay una voluntad interior para usar vocabulario de creencias o intenciones. Podemos atribuir metas como estrategia explicativa, y después preguntar qué intereses organizacionales, comerciales y políticos están materializados en el sistema.',
    note:
      'La sesión desplaza así la pregunta desde “¿qué quiere la máquina?” hacia “¿qué objetivos hacen que esta máquina exista y se optimice de esta manera?”.',
  },
]

const timeline = [
  ['1891', 'Neurona', 'La ponencia sitúa a fines del siglo XIX la formalización moderna de la neurona como unidad del sistema nervioso.'],
  ['1950', 'Turing', 'La conversación máquina-humano aparece como prueba pragmática de comportamiento inteligente.'],
  ['1956', 'Primer boom', 'El término “inteligencia artificial” queda asociado a una promesa tecnológica y también financiera.'],
  ['1980s', 'Sistemas expertos', 'Reglas y árboles de decisión automatizan razonamientos previamente definidos.'],
  ['1980s–90s', 'Aprendizaje', 'Retropropagación y métodos evolutivos abren sistemas cuyo comportamiento ya no queda escrito regla por regla.'],
  ['1997', 'Deep Blue', 'La conferencia distingue su fuerza de búsqueda ajedrecística de lo que hoy suele llamarse aprendizaje profundo.'],
  ['2000s', 'Datos y plataformas', 'Google y después redes sociales convierten comportamiento de usuarios en materia prima para predicción y ranking.'],
  ['2017→', 'Transformers', 'La arquitectura de transformadores sirve como base del salto reciente de modelos generativos de lenguaje e imagen.'],
]

const beliefs = [
  ['I', 'Representacionalismo', 'Una creencia puede entenderse como una representación o conexión interna.'],
  ['II', 'Disposicionalismo', 'Creer algo puede entenderse como estar dispuesto a actuar de cierta manera.'],
  ['III', 'Funcionalismo', 'Un estado cuenta por sus causas, relaciones con otros estados y efectos conductuales.'],
  ['IV', 'Postura intencional', 'Atribuir creencias puede ser una estrategia útil para explicar y predecir.'],
]

export default function AcademicTalkAI22Sep() {
  const [questionId, setQuestionId] = useState('inteligencia')

  const activeQuestion = useMemo(
    () => questions.find((item) => item.id === questionId) || questions[0],
    [questionId],
  )

  return (
    <main className="ai22-page">
      <nav className="ai22-nav">
        <Link to="/tareas">← Calendario académico</Link>
        <Link to="/" className="ai22-brand">
          <span>Φ</span>
          PHILOSOPHIA
        </Link>
        <span>22 · IX · 2026</span>
      </nav>

      <header className="ai22-hero">
        <p className="ai22-kicker">Clase abierta · filosofía pública · inteligencia artificial</p>

        <h1>
          ¿Por qué estudiar filosofía
          <em>en la era de la inteligencia artificial?</em>
        </h1>

        <p className="ai22-lead">
          Una conferencia de Amilcar Paris Mandoki sobre inteligencia,
          conciencia, creencias, conocimiento, intención y economía política
          de la IA, pensada desde una actitud filosófica que no acepta conceptos
          sin preguntar primero qué significan.
        </p>

        <div className="ai22-meta">
          <div><span>Ponente</span><strong>Mtro. Amilcar Paris Mandoki</strong></div>
          <div><span>Fecha</span><strong>22 de septiembre de 2026</strong></div>
          <div><span>Horario</span><strong>18:00–19:30</strong></div>
          <div><span>Sede</span><strong>Librería Carlos Fuentes</strong></div>
        </div>
      </header>

      <section className="ai22-manifesto">
        <span>Actitud filosófica</span>
        <blockquote>
          preguntar por las preguntas, descubrir sus presupuestos y llevar el pensamiento hasta sus consecuencias
        </blockquote>
        <p>
          La conferencia abre defendiendo una filosofía comprometida con la
          pregunta, la argumentación y la praxis. También distingue la filosofía
          académica de otras formas de ejercicio filosófico: la plaza, el café,
          la conversación y la discusión pública.
        </p>
      </section>

      <section className="ai22-section">
        <header className="ai22-section-head">
          <span>00</span>
          <div>
            <p>Mapa de la conferencia</p>
            <h2>Filosofía → IA → crítica de sus categorías → economía política</h2>
          </div>
        </header>

        <div className="ai22-route">
          <article><span>01</span><strong>actitud filosófica</strong></article>
          <article><span>02</span><strong>qué llamamos inteligencia</strong></article>
          <article><span>03</span><strong>historia técnica de la IA</strong></article>
          <article className="active"><span>04</span><strong>preguntas filosóficas</strong></article>
          <article><span>05</span><strong>conocimiento y aprendizaje</strong></article>
          <article><span>06</span><strong>intereses e incentivos</strong></article>
          <article><span>07</span><strong>regulación y bien común</strong></article>
        </div>
      </section>

      <section className="ai22-section">
        <header className="ai22-section-head">
          <span>01</span>
          <div>
            <p>Philosophia</p>
            <h2>La primera tarea no es responder: es aprender a preguntar mejor</h2>
          </div>
        </header>

        <div className="ai22-philosophy-grid">
          <article className="ai22-panel is-accent">
            <span>La conferencia propone</span>
            <h3>preguntar por los presupuestos</h3>
            <p>
              Antes de preguntar si una IA es buena, real, consciente o
              inteligente, hay que examinar qué significan “bueno”, “real”,
              “conciencia” e “inteligencia”, bajo qué criterios y desde qué
              tradición se están usando.
            </p>
            <ul>
              <li>¿Qué es conocimiento y cómo se distingue de información?</li>
              <li>¿Qué es libertad?</li>
              <li>¿Qué es explotación?</li>
              <li>¿Qué es verdad y qué tipo de propiedad sería?</li>
              <li>¿Qué significa “significar”?</li>
            </ul>
          </article>

          <article className="ai22-panel is-gold">
            <span>Filosofía pública</span>
            <h3>la academia no agota la filosofía</h3>
            <p>
              La ponencia presenta a Sócrates como emblema de una filosofía que
              ocurre en conversación y espacio público. El café filosófico
              aparece como otra forma válida de ejercitar preguntas, escuchar
              argumentos y pensar colectivamente.
            </p>
          </article>
        </div>
      </section>

      <section className="ai22-section">
        <header className="ai22-section-head">
          <span>02</span>
          <div>
            <p>Genealogía técnica</p>
            <h2>De la neurona modelada al transformer</h2>
          </div>
        </header>

        <div className="ai22-timeline">
          {timeline.map(([year, title, body]) => (
            <article key={year + '-' + title}>
              <span>{year}</span>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai22-section">
        <header className="ai22-section-head">
          <span>03</span>
          <div>
            <p>Quaestiones</p>
            <h2>Cinco preguntas filosóficas sobre la IA</h2>
          </div>
        </header>

        <div className="ai22-questions">
          <div className="ai22-question-tabs">
            {questions.map((question) => (
              <button
                type="button"
                key={question.id}
                className={question.id === questionId ? 'is-active' : ''}
                onClick={() => setQuestionId(question.id)}
              >
                {question.label}
              </button>
            ))}
          </div>

          <article className="ai22-question-focus">
            <span>{activeQuestion.kicker}</span>
            <h3>{activeQuestion.title}</h3>
            <p>{activeQuestion.body}</p>
            <aside>
              <strong>Clave de lectura</strong>
              <p>{activeQuestion.note}</p>
            </aside>
          </article>
        </div>
      </section>

      <section className="ai22-section">
        <header className="ai22-section-head">
          <span>04</span>
          <div>
            <p>Creencia como concepto filosófico</p>
            <h2>La respuesta cambia según la teoría que se adopte</h2>
          </div>
        </header>

        <div className="ai22-beliefs">
          {beliefs.map(([n, title, text]) => (
            <article key={title}>
              <span>{n}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai22-section">
        <header className="ai22-section-head">
          <span>05</span>
          <div>
            <p>Epistemología y educación</p>
            <h2>Información, conocimiento y el valor del camino</h2>
          </div>
        </header>

        <div className="ai22-philosophy-grid">
          <article className="ai22-panel">
            <span>Problema epistemológico</span>
            <h3>¿qué justificaría una creencia artificial?</h3>
            <p>
              La conferencia recorre racionalismo y empirismo para mostrar que
              llamar “conocimiento” a la salida de un sistema obliga a preguntar
              por evidencia, justificación y procedencia de los datos. El mero
              volumen de información no resuelve el problema.
            </p>
          </article>

          <article className="ai22-panel is-accent">
            <span>Problema pedagógico</span>
            <h3>el resultado puede ocultar el aprendizaje</h3>
            <p>
              Resolver automáticamente un ejercicio no garantiza que una persona
              comprenda el recorrido. La ponencia insiste en que, para educación,
              muchas veces el valor estaba precisamente en atravesar la
              dificultad, ordenar razones y construir una respuesta.
            </p>
          </article>
        </div>
      </section>

      <section className="ai22-section">
        <header className="ai22-section-head">
          <span>06</span>
          <div>
            <p>Economía política</p>
            <h2>La IA no aparece fuera de instituciones, inversiones e intereses</h2>
          </div>
        </header>

        <div className="ai22-economy">
          <aside className="ai22-economy-quote">
            <span>Desplazamiento crítico</span>
            <strong>
              no basta preguntar qué puede hacer una IA; hay que preguntar para quién y bajo qué incentivos está siendo optimizada
            </strong>
            <p>
              Esta sección reproduce el marco crítico de la conferencia. Sus
              juicios sobre empresas, inversión y capitalismo se registran como
              posiciones de la ponencia, no como verificaciones independientes.
            </p>
          </aside>

          <div className="ai22-economy-flow">
            <article>
              <span>01</span>
              <div>
                <strong>usuarios y atención</strong>
                <p>El número de usuarios y su permanencia funcionan como métricas valiosas para plataformas e inversionistas.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <strong>personalización y persuasión</strong>
                <p>La sesión cuestiona sistemas diseñados para agradar, prolongar interacción y modelar comportamiento.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <strong>trabajo y sustitución</strong>
                <p>La discusión conecta automatización con reducción de costos, desplazamiento laboral y conflicto de intereses.</p>
              </div>
            </article>
            <article>
              <span>04</span>
              <div>
                <strong>control de distribución</strong>
                <p>Algoritmos de recomendación median qué contenidos circulan, quién recibe atención y qué actividades se vuelven rentables.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="ai22-section">
        <header className="ai22-section-head">
          <span>07</span>
          <div>
            <p>Preguntas del público</p>
            <h2>Regulación, bien común y gobernanza internacional</h2>
          </div>
        </header>

        <div className="ai22-qa">
          <article>
            <span>Q1 · REGULACIÓN</span>
            <h3>¿por qué las grandes empresas piden reglas?</h3>
            <p>
              El ponente propone dos hipótesis: regulación como forma de frenar
              expectativas financieras imposibles y regulación como barrera de
              entrada frente a nuevos competidores.
            </p>
          </article>

          <article>
            <span>Q2 · BIEN COMÚN</span>
            <h3>¿puede existir una IA orientada al interés público?</h3>
            <p>
              La respuesta es escéptica respecto del desarrollo actual, pero deja
              abierta la posibilidad de diseñar otros sistemas desde cero bajo
              objetivos públicos diferentes.
            </p>
          </article>

          <article>
            <span>Q3 · GOBERNANZA</span>
            <h3>¿sirve el multilateralismo para regular la IA?</h3>
            <p>
              La conferencia distingue estándares éticos no vinculantes de
              acuerdos capaces de obligar a los actores centrales, y duda de una
              gobernanza global efectiva sin participación de las principales potencias.
            </p>
          </article>
        </div>

        <div className="ai22-source">
          <strong>Nota documental</strong>
          <p>
            Esta página sistematiza una grabación automática de la conferencia.
            Conserva el desarrollo conceptual y distingue explícitamente las
            afirmaciones del ponente de una verificación histórica o técnica
            independiente. No se reconstruyen literalmente pasajes degradados ni
            nombres que el audio no permite asegurar.
          </p>
        </div>
      </section>

      <footer className="ai22-footer">
        <Link to="/tareas">← Volver al calendario</Link>
        <span>Filosofía pública · Inteligencia artificial · 2026</span>
        <Link to="/">PHILOSOPHIA ↗</Link>
      </footer>
    </main>
  )
}
