import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './MethodsClass07Sep.css'
import './MethodsClass14Sep.css'
import './MethodsClass21Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'russ', 'Russ · capítulos 1–3'],
  ['02', 'disertacion', 'Disertación y comentario'],
  ['03', 'problemas', 'Ciencia y filosofía'],
  ['04', 'metodo', 'Qué es método'],
  ['05', 'reglas', 'Las cuatro reglas'],
  ['06', 'ejercicio', 'Miedo y educación'],
  ['07', 'problematica', 'Problemática · problema · hipótesis'],
  ['08', 'cierre', 'Ejercicio para la próxima'],
]

const rules = [
  ['delimitar', '01', 'Delimitar', 'fijar límites y conceptos'],
  ['analizar', '02', 'Analizar', 'descomponer y describir'],
  ['sintetizar', '03', 'Sintetizar', 'reconstruir vínculos y unidad'],
  ['ordenar', '04', 'Ordenar', 'disponer racionalmente el resultado'],
]

const steps = [
  ['Delimitar', '¿De qué miedo? ¿de quién? ¿en qué nivel educativo? ¿frente a qué?'],
  ['Analizar', 'aprendizaje · disciplina · evaluación · autoridad · fracaso · participación · violencia · incertidumbre'],
  ['Sintetizar', '¿cómo se relacionan esos elementos y qué problemática filosófica emerge?'],
  ['Ordenar', '¿cómo convertirlo en una secuencia argumentativa coherente?'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ number, eyebrow, children }) {
  return (
    <div className="methods-class-heading methods07-heading methods14-heading methods21-heading">
      <span>{number}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function MethodsClass21Sep() {
  const [ruleId, setRuleId] = useState('delimitar')
  const rule = useMemo(() => rules.find(([id]) => id === ruleId) || rules[0], [ruleId])

  return (
    <main className="methods-class-page methods07-page methods14-page methods21-page">
      <nav className="methods-class-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <Link to="/" className="methods-class-brand">Φ · Philosophia</Link>
        <span>XXI · IX · MMXXVI</span>
      </nav>

      <header className="methods-class-header methods07-header methods14-header methods21-header">
        <div className="methods-header-rules" aria-hidden="true" />
        <div className="methods07-ghost methods14-ghost methods21-ghost" aria-hidden="true">REGULA</div>
        <div className="methods-header-symbol" aria-hidden="true">§</div>

        <div className="methods07-hero-inner">
          <div>
            <p className="methods-class-kicker">FI104 · Octava sesión · 21 de septiembre de 2026</p>
            <h1>Del método a la<em>construcción del problema</em></h1>
            <p className="methods-class-subtitle">
              Jacqueline Russ sirve como laboratorio metodológico: distinguir
              disertación y comentario, comprender el problema filosófico,
              trabajar con reglas y convertir un tema en problemática, problema e hipótesis.
            </p>
          </div>

          <aside className="methods07-thesis methods14-thesis methods21-thesis">
            <span>IDEA CENTRAL</span>
            <strong>Delimitar → analizar → sintetizar → ordenar.</strong>
            <p>No son cuatro casillas aisladas: forman una secuencia racional.</p>
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
                <span>{number}</span>{label}
              </button>
            ))}
          </nav>
        </aside>

        <article className="methods-article">
          <section id="mapa" className="methods-section">
            <Heading number="00" eyebrow="Ordo sessionis">Del texto de Russ al ejercicio de investigación</Heading>
            <div className="methods21-map">
              <article><span>01</span><strong>Russ 1–3</strong><p>método · problemática · fundamento</p></article>
              <b>→</b>
              <article><span>02</span><strong>Reglas</strong><p>delimitar · analizar · sintetizar · ordenar</p></article>
              <b>→</b>
              <article><span>03</span><strong>Construcción</strong><p>problemática · problema · hipótesis</p></article>
              <b>→</b>
              <article className="active"><span>04</span><strong>Ejercicio</strong><p>miedo + educación + Nussbaum</p></article>
            </div>
          </section>

          <section id="russ" className="methods-section">
            <Heading number="01" eyebrow="Jacqueline Russ">Tres capítulos, tres movimientos</Heading>
            <div className="methods21-three">
              <article><span>CAPÍTULO I</span><strong>Método</strong><p>dar forma, estructura y unidad a una diversidad de ideas.</p></article>
              <article><span>CAPÍTULO II</span><strong>Problemática</strong><p>distinguir preguntar, problematizar y determinar qué está en juego.</p></article>
              <article><span>CAPÍTULO III</span><strong>Fundamento</strong><p>rigor cartesiano y proceso dialéctico de los conceptos.</p></article>
            </div>
            <div className="methods21-note"><span>PROCESO CONCEPTUAL</span><p>Los conceptos no son unidades inmóviles: en Hegel y Marx se constituyen mediante procesos.</p></div>
            <Link className="methods21-study-link" to="/tareas/metodos-de-investigacion/jacqueline-russ-capitulos-1-3">Abrir sistema 2D de Russ →</Link>
          </section>

          <section id="disertacion" className="methods-section">
            <Heading number="02" eyebrow="Dissertatio · commentarium">La problemática se construye o se reconstruye</Heading>
            <div className="methods21-compare">
              <article className="active"><span>DISERTACIÓN</span><strong>construir la problemática</strong><p>A partir de un tema y marco teórico se construyen problemática y problema.</p></article>
              <b>≠</b>
              <article><span>COMENTARIO</span><strong>desvelar la problemática</strong><p>Se reconstruye la secuencia lógica del texto y el problema que ya opera en él.</p></article>
            </div>
          </section>

          <section id="problemas" className="methods-section">
            <Heading number="03" eyebrow="Scientia · philosophia">Resolver no es lo mismo que aclarar</Heading>
            <div className="methods21-compare">
              <article><span>CIENCIA</span><strong>movimiento progresivo</strong><p>principios → resultado · solución · aplicación.</p></article>
              <b>≠</b>
              <article className="active"><span>FILOSOFÍA</span><strong>movimiento regresivo</strong><p>regresa a fundamentos, conceptos y presupuestos.</p></article>
            </div>
            <div className="methods21-note"><span>APORÍA</span><p>Un problema filosófico puede aclararse rigurosamente sin quedar definitivamente resuelto.</p></div>
          </section>

          <section id="metodo" className="methods-section">
            <Heading number="04" eyebrow="Methodus">Método = camino hacia un fin</Heading>
            <div className="methods21-method">
              <div><span>CAMINO</span><strong>método</strong></div><b>→</b>
              <div className="active"><span>FIN</span><strong>objetivo</strong></div><b>+</b>
              <div><span>CONDICIÓN</span><strong>reglas</strong></div>
            </div>
            <blockquote className="methods21-definition">Una regla es una fórmula prescriptiva que indica el camino que hay que seguir para conseguir determinado fin.</blockquote>
          </section>

          <section id="reglas" className="methods-section">
            <Heading number="05" eyebrow="Quattuor regulae">Las cuatro operaciones fundamentales</Heading>
            <div className="methods21-rule-tabs">
              {rules.map(([id, n, title, short]) => (
                <button key={id} type="button" className={ruleId === id ? 'active' : ''} onClick={() => setRuleId(id)}>
                  <span>{n}</span><strong>{title}</strong><small>{short}</small>
                </button>
              ))}
            </div>
            <div className="methods21-rule-focus"><span>{rule[1]}</span><div><strong>{rule[2]}</strong><p>{rule[3]}</p></div></div>
          </section>

          <section id="ejercicio" className="methods-section">
            <Heading number="06" eyebrow="Exercitium">Miedo + educación + Martha Nussbaum</Heading>
            <div className="methods21-exercise-head">
              <article><span>CONCEPTO</span><strong>miedo</strong></article><b>+</b>
              <article><span>ÁMBITO</span><strong>educación</strong></article><b>+</b>
              <article><span>MARCO</span><strong>filosofía de las emociones</strong></article>
            </div>
            <div className="methods21-nussbaum"><span>MARTHA NUSSBAUM</span><strong>emociones · vulnerabilidad · aquello que valoramos</strong><p>El miedo puede mostrar qué percibimos como amenaza y cómo experimentamos nuestra vulnerabilidad.</p></div>
            <div className="methods21-exercise-steps">
              {steps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{text}</p></article>)}
            </div>
          </section>

          <section id="problematica" className="methods-section">
            <Heading number="07" eyebrow="Problematica · problema · hypothesis">El tema debe convertirse en arquitectura de investigación</Heading>
            <div className="methods21-pipeline">
              <article><span>01</span><strong>Problemática</strong><p>campo organizado de preguntas y tensiones.</p></article><b>→</b>
              <article><span>02</span><strong>Problema</strong><p>pregunta delimitada que articula el campo.</p></article><b>→</b>
              <article className="active"><span>03</span><strong>Hipótesis</strong><p>respuesta provisional que deberá ponerse a prueba.</p></article><b>→</b>
              <article><span>04</span><strong>Estado de la cuestión</strong><p>qué se ha dicho ya y con qué podemos discutir.</p></article>
            </div>
          </section>

          <section id="cierre" className="methods-section">
            <Heading number="08" eyebrow="Ad proximam sessionem">Construir la problemática</Heading>
            <div className="methods21-task">
              <span>EJERCICIO PARA CONTINUAR</span>
              <h3>Buscar un problema y construirlo como disertación</h3>
              <p>Formular la <strong>problemática</strong>, delimitar el <strong>problema</strong> y preparar el paso hacia una <strong>hipótesis</strong>.</p>
              <small>La grabación indica que se continuará con este ejercicio en la próxima sesión, pero no fija una fecha de entrega formal.</small>
            </div>
            <div className="methods21-actions">
              <Link to="/tareas/metodos-de-investigacion/jacqueline-russ-capitulos-1-3">Abrir sistema 2D de Russ →</Link>
              <Link to="/semestre/5/metodos-de-investigacion">Volver a Métodos de Investigación</Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
