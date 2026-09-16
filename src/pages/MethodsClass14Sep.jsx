import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './MethodsClass07Sep.css'
import './MethodsClass14Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'concepto', 'Concepto base'],
  ['02', 'referente', 'Referente teórico'],
  ['03', 'ramas', 'Ramas y categorías'],
  ['04', 'tema', 'Tema específico'],
  ['05', 'problematica', 'Problemática'],
  ['06', 'problema', 'Problema de investigación'],
  ['07', 'metodo', 'Método y metodología'],
  ['08', 'fenomenologia', 'Fenomenología'],
  ['09', 'dialectica', 'Dialéctica'],
  ['10', 'elenchos', 'Élenchos e hipótesis'],
  ['11', 'division', 'División y síntesis'],
  ['12', 'reporte', 'Reporte de Jacqueline Russ'],
]

const branchOptions = [
  ['ethics', 'Ética', 'responsabilidad · decisión · deber · libertad'],
  ['politics', 'Filosofía política', 'poder · Estado · dominación · obediencia'],
  ['anthropology', 'Antropología filosófica', 'existencia · condición humana · límite'],
  ['phenomenology', 'Fenomenología', 'experiencia · aparición · sentido'],
]

const methodOptions = [
  ['phenomenology', 'Fenomenología', 'describir cómo se vive y aparece el fenómeno'],
  ['dialectic', 'Dialéctica', 'examinar tensiones, oposiciones y consecuencias'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ number, eyebrow, children }) {
  return (
    <div className="methods-class-heading methods07-heading methods14-heading">
      <span>{number}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function MethodsClass14Sep() {
  const [branchId, setBranchId] = useState('politics')
  const [methodId, setMethodId] = useState('phenomenology')
  const [dialecticStep, setDialecticStep] = useState('elenchos')

  const branch = useMemo(
    () => branchOptions.find(([id]) => id === branchId) || branchOptions[1],
    [branchId],
  )

  const method = useMemo(
    () => methodOptions.find(([id]) => id === methodId) || methodOptions[0],
    [methodId],
  )

  return (
    <main className="methods-class-page methods07-page methods14-page">
      <nav className="methods-class-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <Link to="/" className="methods-class-brand">Φ · Philosophia</Link>
        <span>XIV · IX · MMXXVI</span>
      </nav>

      <header className="methods-class-header methods07-header methods14-header">
        <div className="methods-header-rules" aria-hidden="true" />
        <div className="methods07-ghost methods14-ghost" aria-hidden="true">METHODUS</div>
        <div className="methods-header-symbol" aria-hidden="true">§</div>

        <div className="methods07-hero-inner">
          <div>
            <p className="methods-class-kicker">FI104 · Séptima sesión · 14 de septiembre de 2026</p>
            <h1>
              Del concepto al
              <em>problema y al método</em>
            </h1>
            <p className="methods-class-subtitle">
              La sesión construye un protocolo filosófico casi completo:
              concepto, referente teórico, ramas, categorías, tema específico,
              problemática, problema y metodología. Después examina la
              dialéctica socrático-platónica como ejemplo de método.
            </p>
          </div>

          <aside className="methods07-thesis methods14-thesis">
            <span>IDEA CENTRAL</span>
            <strong>Investigar filosóficamente es convertir una intuición amplia en una pregunta articulada y metodológicamente justificada.</strong>
            <p>
              El método no se agrega al final: debe corresponder al objeto y al
              problema que la investigación ha construido.
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
                <span>{number}</span>{label}
              </button>
            ))}
          </nav>
        </aside>

        <article className="methods-article">
          <section id="mapa" className="methods-section">
            <Heading number="00" eyebrow="Ordo investigationis">
              Cómo convertir una idea en una investigación filosófica
            </Heading>

            <div className="methods14-pipeline">
              {[
                ['1', 'Concepto', 'miedo'],
                ['2', 'Referente', 'Camus'],
                ['3', 'Rama', 'ética + política'],
                ['4', 'Categorías', 'libertad · poder · responsabilidad'],
                ['5', 'Tema', 'miedo como control'],
                ['6', 'Problemática', 'tensiones y preguntas'],
                ['7', 'Problema', 'pregunta central'],
                ['8', 'Método', 'fenomenología / dialéctica'],
              ].map(([n, title, text]) => (
                <article key={n}><span>{n}</span><strong>{title}</strong><p>{text}</p></article>
              ))}
            </div>

            <div className="methods07-rule">
              <span>REGLA PRÁCTICA</span>
              <strong>No se pasa de “me interesa el miedo” directamente a escribir veinte páginas.</strong>
              <p>La investigación se construye mediante recortes conceptuales sucesivos.</p>
            </div>
          </section>

          <section id="concepto" className="methods-section">
            <Heading number="01" eyebrow="Conceptus">
              En filosofía investigamos conceptos, pero no conceptos aislados
            </Heading>

            <p className="methods07-prose">
              Miedo, libertad, poder, responsabilidad, justicia o verdad pueden
              funcionar como puntos de partida. El objeto aparece cuando el
              concepto se recorta desde una perspectiva filosófica y entra en
              relación con otros conceptos.
            </p>

            <div className="methods07-flow centered">
              <span>miedo</span><b>+</b>
              <span>libertad</span><b>+</b>
              <span>responsabilidad</span><b>+</b>
              <span>poder</span><b>→</b>
              <strong>objeto investigable</strong>
            </div>
          </section>

          <section id="referente" className="methods-section">
            <Heading number="02" eyebrow="Referens theoreticus">
              El referente teórico delimita el horizonte desde el que preguntamos
            </Heading>

            <div className="methods14-dual">
              <article>
                <span>CONCEPTO BASE</span>
                <strong>Miedo</strong>
                <p>Todavía demasiado general para constituir por sí solo un objeto.</p>
              </article>
              <b>→</b>
              <article className="active">
                <span>REFERENTE</span>
                <strong>Albert Camus</strong>
                <p>Absurdo, lucidez, decisión, libertad, responsabilidad y crítica del suicidio filosófico.</p>
              </article>
            </div>

            <div className="methods14-note">
              <span>SITUACIONES LÍMITE</span>
              <p>
                La clase enlaza el ejemplo con Jaspers: sufrimiento, muerte,
                incertidumbre, fracaso y conflicto obligan a preguntar cómo
                responde el individuo ante condiciones que no puede simplemente eliminar.
              </p>
            </div>
          </section>

          <section id="ramas" className="methods-section">
            <Heading number="03" eyebrow="Lentes conceptuales">
              Las ramas filosóficas funcionan como lentes que modifican la pregunta
            </Heading>

            <div className="methods07-tabs">
              {branchOptions.map(([id, title, concepts]) => (
                <button
                  type="button"
                  key={id}
                  className={branch[0] === id ? 'active' : ''}
                  onClick={() => setBranchId(id)}
                >
                  <span>{title}</span>
                  <strong>{concepts}</strong>
                </button>
              ))}
            </div>

            <article className="methods07-focus">
              <span>{branch[1]}</span>
              <h3>{branch[2]}</h3>
              <p>
                La misma noción cambia de estatuto según las categorías que se
                ponen en juego. Elegir una rama es ya una forma de delimitación.
              </p>
            </article>
          </section>

          <section id="tema" className="methods-section">
            <Heading number="04" eyebrow="Delimitatio">
              Del tema general al tema específico
            </Heading>

            <div className="methods14-dual">
              <article>
                <span>TEMA GENERAL</span>
                <strong>El miedo</strong>
                <p>Demasiado amplio y todavía sin relación conceptual determinada.</p>
              </article>
              <b>→</b>
              <article className="active">
                <span>TEMA ESPECÍFICO</span>
                <strong>El miedo como mecanismo de control</strong>
                <p>Permite conectar miedo, poder, obediencia, incertidumbre económica y libertad.</p>
              </article>
            </div>

            <div className="methods07-question">
              <span>EJEMPLO DE PREGUNTA</span>
              <strong>¿Cómo se utiliza el miedo colectivamente para moldear la obediencia o limitar la libertad?</strong>
            </div>
          </section>

          <section id="problematica" className="methods-section">
            <Heading number="05" eyebrow="Problematica">
              La problemática es un campo de tensiones, no una sola pregunta
            </Heading>

            <div className="methods14-question-grid">
              {[
                '¿El miedo elimina la libertad?',
                '¿Puede haber libertad bajo coerción?',
                '¿Qué relación existe entre responsabilidad y miedo?',
                '¿Cuándo la inseguridad se vuelve mecanismo de dominación?',
                '¿Qué tipo de obediencia produce el miedo?',
              ].map((q, index) => (
                <article key={q}><span>0{index + 1}</span><p>{q}</p></article>
              ))}
            </div>

            <div className="methods14-definition">
              <span>PROBLEMÁTICA</span>
              <strong>Conjunto de preguntas, tensiones, contradicciones y paradojas alrededor del objeto.</strong>
            </div>
          </section>

          <section id="problema" className="methods-section">
            <Heading number="06" eyebrow="Problema investigationis">
              El problema es la pregunta central que organiza la problemática
            </Heading>

            <div className="methods14-compare">
              <article>
                <span>PROBLEMÁTICA</span>
                <strong>campo múltiple</strong>
                <p>Reúne dificultades y preguntas relacionadas.</p>
              </article>
              <b>≠</b>
              <article className="active">
                <span>PROBLEMA</span>
                <strong>pregunta articuladora</strong>
                <p>Ordena la investigación y exige una respuesta argumentada.</p>
              </article>
            </div>

            <div className="methods07-rule">
              <span>IMPORTANTE</span>
              <strong>La pregunta filosófica debe permanecer abierta.</strong>
              <p>No debería reducirse a un “sí” o “no” ni esconder una conclusión ya decidida.</p>
            </div>
          </section>

          <section id="metodo" className="methods-section">
            <Heading number="07" eyebrow="Methodus">
              Después del “qué” viene el “cómo”
            </Heading>

            <div className="methods14-method-tabs">
              {methodOptions.map(([id, title, text]) => (
                <button
                  type="button"
                  key={id}
                  className={method[0] === id ? 'active' : ''}
                  onClick={() => setMethodId(id)}
                >
                  <span>{title}</span>
                  <strong>{text}</strong>
                </button>
              ))}
            </div>

            <article className="methods14-method-focus">
              <span>MÉTODO SELECCIONADO</span>
              <h3>{method[1]}</h3>
              <p>{method[2]}</p>
            </article>

            <div className="methods14-compare">
              <article>
                <span>METODOLOGÍA</span>
                <strong>estructura filosófica</strong>
                <p>Cómo será abordado el problema.</p>
              </article>
              <b>≠</b>
              <article>
                <span>TÉCNICAS</span>
                <strong>procedimientos concretos</strong>
                <p>Búsqueda, análisis textual, organización de fuentes o recopilación de datos.</p>
              </article>
            </div>
          </section>

          <section id="fenomenologia" className="methods-section">
            <Heading number="08" eyebrow="Ad res ipsas">
              La fenomenología permite comenzar por cómo aparece y se vive el fenómeno
            </Heading>

            <div className="methods07-flow centered">
              <span>experiencia</span><b>→</b>
              <span>aparición</span><b>→</b>
              <span>estructura</span><b>→</b>
              <span>sentido</span><b>→</b>
              <strong>descripción filosófica</strong>
            </div>

            <p className="methods07-prose">
              Para el miedo, una aproximación fenomenológica preguntaría cómo se
              experimenta, cómo modifica la percepción del futuro, qué hace con
              las decisiones y cómo condiciona el ejercicio de la libertad.
            </p>

            <div className="methods14-note">
              <span>NO ES AUTOMÁTICAMENTE PSICOLOGÍA</span>
              <p>
                Trabajar con experiencia vivida sigue siendo filosófico cuando
                la pregunta busca sentido, estructura y constitución del fenómeno.
              </p>
            </div>
          </section>

          <section id="dialectica" className="methods-section">
            <Heading number="09" eyebrow="Dialectica">
              La dialéctica ha tenido distintas configuraciones históricas
            </Heading>

            <div className="methods14-timeline">
              <article><span>01</span><strong>Sócrates / Platón</strong><p>refutación · hipótesis · definición</p></article>
              <article><span>02</span><strong>Hegel</strong><p>movimiento de contradicción y superación</p></article>
              <article><span>03</span><strong>Marx</strong><p>transformación material de la dialéctica</p></article>
            </div>

            <div className="methods07-question">
              <span>PROBLEMA CLÁSICO</span>
              <strong>¿Es enseñable la virtud?</strong>
            </div>
          </section>

          <section id="elenchos" className="methods-section">
            <Heading number="10" eyebrow="ἔλεγχος · hypothesis">
              Preguntar, refutar y poner a prueba
            </Heading>

            <div className="methods07-toggle">
              <button
                type="button"
                className={dialecticStep === 'elenchos' ? 'active' : ''}
                onClick={() => setDialecticStep('elenchos')}
              >
                Élenchos
              </button>
              <button
                type="button"
                className={dialecticStep === 'hypothesis' ? 'active' : ''}
                onClick={() => setDialecticStep('hypothesis')}
              >
                Hipótesis
              </button>
            </div>

            <div className="methods07-thinker">
              {dialecticStep === 'elenchos' ? (
                <>
                  <span>REFUTACIÓN SOCRÁTICA</span>
                  <h3>¿Qué es X?</h3>
                  <p>
                    El interlocutor propone una definición; las preguntas
                    examinan sus compromisos hasta hacer visible una contradicción
                    o una insuficiencia. Reconocer la ignorancia permite volver a investigar.
                  </p>
                </>
              ) : (
                <>
                  <span>PUESTA A PRUEBA</span>
                  <h3>Si aceptamos esta afirmación, ¿qué consecuencias debemos aceptar también?</h3>
                  <p>
                    La hipótesis funciona como una proposición que debe soportar
                    el examen de aquello que se sigue de ella.
                  </p>
                </>
              )}
            </div>
          </section>

          <section id="division" className="methods-section">
            <Heading number="11" eyebrow="Divisio et synthesis">
              Definir también es pasar de lo general a lo específico
            </Heading>

            <div className="methods07-flow centered">
              <span>género</span><b>→</b>
              <span>diferencia</span><b>→</b>
              <span>especie</span><b>→</b>
              <strong>definición</strong>
            </div>

            <div className="methods14-compare">
              <article>
                <span>INTENSIÓN</span>
                <strong>más determinaciones</strong>
                <p>Cuantas más características exige el concepto, menos cosas abarca.</p>
              </article>
              <b>↔</b>
              <article>
                <span>EXTENSIÓN</span>
                <strong>más casos incluidos</strong>
                <p>Cuanto más amplio es el conjunto, menos determinaciones específicas exige.</p>
              </article>
            </div>

            <div className="methods14-note">
              <span>ÁRBOL DE PORFIRIO</span>
              <p>La clase lo usa para visualizar la clasificación por género, especie y diferencias.</p>
            </div>
          </section>

          <section id="reporte" className="methods-section">
            <Heading number="12" eyebrow="Relatio lectionis">
              Primer reporte · Jacqueline Russ, Los métodos en filosofía
            </Heading>

            <div className="methods14-task">
              <div>
                <span>LECTURA</span>
                <h3>Capítulos 1, 2 y 3</h3>
                <p>Elaborar una síntesis / reporte de lectura.</p>
              </div>

              <aside>
                <span>DEBE RECUPERAR</span>
                <ul>
                  <li>qué es el método en filosofía;</li>
                  <li>si existen reglas del método filosófico y cuáles;</li>
                  <li>diferencia entre problemática y problema;</li>
                  <li>diferencia entre disertación y comentario.</li>
                </ul>
              </aside>
            </div>

            <div className="methods07-rule">
              <span>PLAZO</span>
              <strong>Hasta el lunes siguiente a la sesión.</strong>
              <p>
                Para el calendario del proyecto se registra el 21 de septiembre
                de 2026, inferido a partir de la fecha de esta clase y de la
                indicación “lunes siguiente”.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="methods-class-footer">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <span>☙ &nbsp; § &nbsp; ❧</span>
        <span>XIV · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
