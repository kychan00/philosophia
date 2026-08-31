import { useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'recap', 'Cinco conceptos en constelación'],
  ['01', 'negativa', 'Dialéctica negativa y no-identidad'],
  ['02', 'hegel', 'Hegel, Adorno y reconciliación'],
  ['03', 'contradiccion', 'Contradicciones de la realidad'],
  ['04', 'metodo', 'Filosofía + ciencias sociales'],
  ['05', 'negativo', 'Propuesta negativa y Auschwitz'],
  ['06', 'ilustracion', 'Dialéctica de la Ilustración'],
  ['07', 'instrumental', 'Razón instrumental'],
  ['08', 'sociedad', 'Unidimensionalidad e industria cultural'],
  ['09', 'hegel-task', 'Puente hacia Hegel'],
]

const concepts = [
  ['Dialéctica negativa', 'Adorno', 'mantener abierta la contradicción'],
  ['Dialéctica de la Ilustración', 'Horkheimer + Adorno', 'la emancipación puede invertirse en dominio'],
  ['Razón instrumental', 'Horkheimer', 'la razón calcula medios y abandona los fines'],
  ['Industria cultural', 'Horkheimer + Adorno', 'la cultura entra en la lógica industrial'],
  ['Sociedad unidimensional', 'Marcuse', 'la oposición puede ser absorbida'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Head({ n, eye, children }) {
  return (
    <>
      <span className="ct27-number">{n}</span>
      <p className="ct27-eyebrow">{eye}</p>
      <h2>{children}</h2>
    </>
  )
}

export default function CriticalTheoryClass27Aug() {
  const [identityView, setIdentityView] = useState('fit')
  const [hegelView, setHegelView] = useState('hegel')
  const [reasonView, setReasonView] = useState('ends')
  const [cultureView, setCultureView] = useState('classic')
  const [conceptIndex, setConceptIndex] = useState(0)

  const concept = concepts[conceptIndex]

  return (
    <main className="ct-class-page ct27-page">
      <nav className="ct-class-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ct-class-brand">Φ · Philosophia</Link>
        <span>XXVII · VIII · MMXXVI</span>
      </nav>

      <header className="ct27-hero">
        <div className="ct27-ghost" aria-hidden="true">NEGATION</div>

        <div className="ct27-hero-inner">
          <div className="ct27-hero-copy">
            <p>Teoría Crítica · Cuarta clase · 27 de agosto</p>
            <h1>Negatividad, razón <em>y dominación</em></h1>
            <p className="ct27-lead">
              La sesión deja la pura contextualización histórica y entra al núcleo
              filosófico de Frankfurt: no-identidad, contradicción, crítica de la
              reconciliación, Auschwitz, Ilustración, razón instrumental,
              industria cultural y unidimensionalidad.
            </p>

            <div className="ct27-axis">
              <span>NO-IDENTIDAD</span><b>→</b><span>CONTRADICCIÓN</span><b>→</b>
              <span>CRÍTICA</span><b>→</b><span>RAZÓN</span><b>→</b>
              <strong>DOMINACIÓN</strong>
            </div>

            <div className="ct27-keychips">
              {['Adorno', 'Horkheimer', 'Marcuse', 'Auschwitz', 'Hegel', 'industria cultural']
                .map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <aside className="ct27-hero-card">
            <span>Pregunta central</span>
            <strong>
              ¿Cómo puede una razón que prometía emancipación terminar convertida
              en instrumento de dominación?
            </strong>
            <p>
              La Teoría Crítica no abandona la razón: intenta criticarla desde
              la razón misma, mostrando las contradicciones de la modernidad.
            </p>

            <div className="ct27-mini-map">
              <div><span>Promesa</span><strong>emancipación</strong></div>
              <b>→</b>
              <div><span>Giro</span><strong>instrumentalización</strong></div>
              <b>→</b>
              <div><span>Resultado</span><strong>dominio</strong></div>
            </div>
          </aside>
        </div>
      </header>

      <div className="ct27-layout">
        <aside className="ct27-index">
          <p>Index lectionis</p>
          {sections.map(([n, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ct27-article">
          <section id="recap">
            <Head n="00" eye="Constellatio">Los cinco conceptos ya forman un sistema</Head>
            <p>
              La clase comienza retomando la tarea anterior. Los cinco conceptos
              no aparecen como definiciones aisladas, sino como una constelación
              que permite pasar del contexto histórico del Instituto a su
              arquitectura filosófica interna.
            </p>

            <div className="ct27-concept-tabs">
              {concepts.map(([title], index) => (
                <button
                  type="button"
                  key={title}
                  className={conceptIndex === index ? 'active' : ''}
                  onClick={() => setConceptIndex(index)}
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
              ))}
            </div>

            <div className="ct27-concept-focus">
              <span>{concept[1]}</span>
              <h3>{concept[0]}</h3>
              <strong>{concept[2]}</strong>
            </div>

            <div className="ct27-chain">
              <span>Dialéctica negativa</span><b>→</b>
              <span>Dialéctica de la Ilustración</span><b>→</b>
              <span>Razón instrumental</span><b>→</b>
              <span>Industria cultural</span><b>→</b>
              <strong>Sociedad unidimensional</strong>
            </div>

            <Link
              className="ct27-lexicon-link"
              to="/tareas/teoria-critica/escuela-de-frankfurt/conceptos"
            >
              Abrir Lexicon Criticum completo →
            </Link>
          </section>

          <section id="negativa">
            <Head n="01" eye="Dialectica negativa">Antisistema, resto y no-identidad</Head>
            <p>
              Adorno se resiste a la idea de que un sistema conceptual pueda
              capturar exhaustivamente la realidad. Todo concepto identifica;
              pero siempre queda un resto que no ha sido absorbido. A ese exceso
              o desajuste lo piensa a través de la no-identidad.
            </p>

            <div className="ct27-identity-lab">
              <div className="ct27-toggle">
                <button
                  type="button"
                  className={identityView === 'fit' ? 'active' : ''}
                  onClick={() => setIdentityView('fit')}
                >
                  Ajuste
                </button>
                <button
                  type="button"
                  className={identityView === 'break' ? 'active' : ''}
                  onClick={() => setIdentityView('break')}
                >
                  Desajuste
                </button>
              </div>

              {identityView === 'fit' ? (
                <div className="ct27-fit">
                  <div><span>CONCEPTO</span><strong>pensamiento</strong></div>
                  <b>≈</b>
                  <div><span>OBJETO</span><strong>cosa</strong></div>
                  <p>Durante un momento parece existir correspondencia.</p>
                </div>
              ) : (
                <div className="ct27-fit break">
                  <div><span>CONCEPTO</span><strong>identificación</strong></div>
                  <b>≠</b>
                  <div><span>RESTO</span><strong>lo no idéntico</strong></div>
                  <p>Algo del objeto escapa y obliga al pensamiento a corregirse.</p>
                </div>
              )}
            </div>

            <div className="ct27-warning">
              <span>Por qué importa políticamente</span>
              <strong>
                Un sistema conceptual completamente cerrado encuentra su
                equivalente político en una sociedad que ya no deja lugar para
                diferencia, oposición, crítica ni transformación.
              </strong>
            </div>

            <div className="ct27-totalitarian">
              <span>IDENTIDAD ÚNICA</span><b>→</b><span>CIERRE</span><b>→</b>
              <span>EXCLUSIÓN DE LO DIFERENTE</span><b>→</b>
              <strong>TOTALITARISMO</strong>
            </div>
          </section>

          <section id="hegel">
            <Head n="02" eye="Hegel contra Adorno">La disputa por la reconciliación</Head>
            <p>
              Adorno no acusa a Hegel de ignorar la negatividad. Al contrario:
              la contradicción es decisiva en Hegel. El problema aparece cuando
              la negatividad termina reintegrada dentro de una totalidad
              reconciliada y el pensamiento cierra demasiado pronto el conflicto.
            </p>

            <div className="ct27-toggle">
              <button
                type="button"
                className={hegelView === 'hegel' ? 'active' : ''}
                onClick={() => setHegelView('hegel')}
              >
                Hegel
              </button>
              <button
                type="button"
                className={hegelView === 'adorno' ? 'active' : ''}
                onClick={() => setHegelView('adorno')}
              >
                Adorno
              </button>
            </div>

            <div className={`ct27-hegel-panel ${hegelView}`}>
              {hegelView === 'hegel' ? (
                <>
                  <span>Dialéctica afirmativa · según la lectura de clase</span>
                  <h3>La negatividad entra en una totalidad reconciliada</h3>
                  <div>
                    <b>afirmación</b><i>→</i><b>negación</b><i>→</i>
                    <b>superación / integración</b><i>→</i><strong>ABSOLUTO</strong>
                  </div>
                  <p>La clase la resume como una “síntesis de las síntesis”.</p>
                </>
              ) : (
                <>
                  <span>Dialéctica negativa</span>
                  <h3>No reconciliar en el pensamiento lo que no está reconciliado en la realidad</h3>
                  <div>
                    <b>identidad</b><i>→</i><b>contradicción</b><i>→</i>
                    <b>no-identidad</b><i>→</i><strong>APERTURA</strong>
                  </div>
                  <p>La síntesis no debe funcionar como clausura definitiva.</p>
                </>
              )}
            </div>

            <div className="ct27-marx">
              <article>
                <span>HEGEL</span>
                <strong>¿la realidad puede aparecer filosóficamente reconciliada?</strong>
              </article>
              <b>→</b>
              <article className="core">
                <span>MARX</span>
                <strong>¿las contradicciones materiales desaparecieron realmente?</strong>
              </article>
              <b>→</b>
              <article>
                <span>ADORNO</span>
                <strong>no producir una armonía conceptual que la sociedad todavía no posee</strong>
              </article>
            </div>
          </section>

          <section id="contradiccion">
            <Head n="03" eye="Contradictio realis">La contradicción no siempre es un simple error lógico</Head>
            <p>
              La formación lógica clásica nos acostumbra a identificar
              contradicción con pensamiento incorrecto. La clase introduce otra
              posibilidad: una realidad social puede estar organizada
              contradictoriamente. Entonces la teoría debe ser fiel a esa
              fractura, no maquillarla.
            </p>

            <div className="ct27-reality">
              <article>
                <span>PROMESA</span>
                <strong>igualdad · libertad · progreso · autonomía</strong>
              </article>
              <b>≠</b>
              <article className="danger">
                <span>REALIDAD</span>
                <strong>desigualdad · explotación · dominación · conflicto</strong>
              </article>
            </div>

            <div className="ct27-callout">
              <span>Fidelidad a la cosa</span>
              <strong>
                Si la realidad es contradictoria, describirla como completamente
                armónica sería precisamente una falsificación.
              </strong>
            </div>

            <aside className="ct27-note">
              <strong>Historia larga de la dialéctica</strong>
              <p>
                La clase recuerda antecedentes en Heráclito, Sócrates y Platón;
                pero para Frankfurt el interlocutor inmediato es la dialéctica
                moderna, sobre todo Hegel.
              </p>
            </aside>
          </section>

          <section id="metodo">
            <Head n="04" eye="Investigatio socialis">La contradicción social también debe investigarse</Head>
            <p>
              La Teoría Crítica no se conforma con intuiciones filosóficas.
              Discursos, ideologías, entrevistas, cuestionarios, estadísticas y
              análisis sociológicos permiten dar carne material a la reflexión.
            </p>

            <div className="ct27-method-grid">
              <article>
                <span>FILOSOFÍA</span>
                <strong>conceptos · verdad · método · categorías · presupuestos</strong>
                <p>Hace reflexivo el instrumental científico.</p>
              </article>
              <b>+</b>
              <article>
                <span>CIENCIAS SOCIALES</span>
                <strong>datos · entrevistas · estructuras · prácticas · observaciones</strong>
                <p>Impiden que la filosofía se encierre en una construcción puramente abstracta.</p>
              </article>
            </div>

            <div className="ct27-group-class">
              <div>
                <span>GRUPO</span>
                <strong>personas que comparten alguna característica</strong>
              </div>
              <b>≠</b>
              <div>
                <span>CLASE SOCIAL</span>
                <strong>relación estructural, asimétrica, jerárquica y de dependencia</strong>
              </div>
            </div>

            <aside className="ct27-note">
              <strong>Ejemplo de bioética</strong>
              <p>
                Un problema puede ser argumentativamente elegante y, sin embargo,
                no corresponder con la práctica médica real. Una filosofía de una
                práctica debe conocer también materialmente esa práctica.
              </p>
            </aside>
          </section>

          <section id="negativo">
            <Head n="05" eye="Propositio negativa">La crítica sí propone, pero no diseña una sociedad perfecta</Head>
            <p>
              Frente a la acusación “sólo dicen lo que está mal”, la clase formula
              una respuesta negativa: es posible determinar históricamente aquello
              que no debe volver a existir sin cerrar de antemano la forma exacta
              de la sociedad futura.
            </p>

            <div className="ct27-no-more">
              {['explotación','exterminio','violencia','dominación','sufrimiento social evitable']
                .map((item) => <span key={item}>NO · {item}</span>)}
            </div>

            <div className="ct27-auschwitz">
              <span>AUSCHWITZ</span>
              <h3>Imperativo de no repetición</h3>
              <strong>Que Auschwitz no se repita.</strong>
              <p>
                La experiencia histórica del sufrimiento proporciona un límite
                negativo para memoria, derechos humanos, genocidio, dictaduras y
                violencia política.
              </p>
            </div>
          </section>

          <section id="ilustracion">
            <Head n="06" eye="Dialectica illuminationis">La promesa emancipadora se invierte</Head>
            <p>
              Horkheimer y Adorno amplían “Ilustración” más allá del siglo XVIII:
              designa un proceso de desmitificación y racionalización que promete
              liberar al ser humano del miedo, el mito y la heteronomía. Pero la
              propia historia moderna muestra que esa promesa puede invertirse.
            </p>

            <div className="ct27-enlightenment">
              <div><span>PROMESA</span><strong>razón</strong></div>
              <b>→</b>
              <div><span>DESMITIFICACIÓN</span><strong>autonomía</strong></div>
              <b>→</b>
              <div><span>PROGRESO</span><strong>libertad</strong></div>
              <b className="turn">↘</b>
              <div className="danger"><span>INVERSIÓN</span><strong>control · administración · dominio</strong></div>
            </div>

            <div className="ct27-century">
              <article>
                <span>PROMESA DEL PROGRESO</span>
                <strong>más conocimiento → más humanidad</strong>
              </article>
              <article className="danger">
                <span>SIGLO XX</span>
                <strong>guerra · fascismo · exterminio · barbarie tecnificada</strong>
              </article>
            </div>

            <div className="ct27-callout">
              <span>Paradoja</span>
              <strong>
                La barbarie moderna no necesita ausencia de ciencia: puede ser
                racionalizada, burocratizada y tecnológicamente ejecutada.
              </strong>
            </div>
          </section>

          <section id="instrumental">
            <Head n="07" eye="Ratio instrumentalis">Cuando la razón deja de juzgar fines</Head>
            <p>
              La razón instrumental no pregunta en primer lugar si un fin es
              verdadero, bueno o justo, sino qué medios son más eficaces para
              alcanzarlo. El problema no es la técnica en sí, sino la reducción
              de toda racionalidad al cálculo de utilidad, eficiencia y control.
            </p>

            <div className="ct27-toggle">
              <button
                type="button"
                className={reasonView === 'ends' ? 'active' : ''}
                onClick={() => setReasonView('ends')}
              >
                Fines
              </button>
              <button
                type="button"
                className={reasonView === 'means' ? 'active' : ''}
                onClick={() => setReasonView('means')}
              >
                Medios
              </button>
            </div>

            <div className={`ct27-reason ${reasonView}`}>
              {reasonView === 'ends' ? (
                <>
                  <span>Pregunta normativa</span>
                  <h3>¿Este fin es verdadero, bueno o justo?</h3>
                  <p>La razón conserva capacidad de someter a crítica los objetivos.</p>
                </>
              ) : (
                <>
                  <span>Racionalidad instrumental</span>
                  <h3>¿Qué funciona mejor para alcanzar el objetivo?</h3>
                  <p>eficiencia · optimización · utilidad · rendimiento · productividad</p>
                </>
              )}
            </div>

            <div className="ct27-philosophy">
              <span>“¿Para qué sirve la filosofía?”</span>
              <strong>
                La pregunta puede esconder el supuesto de que todo saber debe
                demostrar utilidad inmediata para mercado, empresa, ciencia,
                administración o tecnología.
              </strong>
            </div>

            <aside className="ct27-note">
              <strong>La provocación adorniana</strong>
              <p>
                Decir que la filosofía puede valer precisamente porque “no sirve”
                significa defender su autonomía frente a la obligación de
                justificar todo por utilidad y rendimiento.
              </p>
            </aside>
          </section>

          <section id="sociedad">
            <Head n="08" eye="Integratio">Unidimensionalidad e industria cultural</Head>
            <p>
              Los últimos conceptos muestran cómo la racionalidad criticada
              penetra en formas concretas de organización social y de producción
              cultural. No se trata sólo de ideas: se trata de modos de vida,
              consumo, sensibilidad e integración social.
            </p>

            <div className="ct27-two-final">
              <article>
                <span>MARCUSE</span>
                <h3>Sociedad unidimensional</h3>
                <p>
                  La oposición puede ser absorbida, integrada, normalizada o
                  comercializada. Tener protesta visible no garantiza por sí
                  mismo una transformación estructural.
                </p>
                <strong>negatividad ↓ · integración ↑</strong>
              </article>

              <article>
                <span>HORKHEIMER + ADORNO</span>
                <h3>Industria cultural</h3>
                <p>
                  La cultura comienza a operar bajo principios industriales:
                  mercado, capital, consumo, audiencia y principio de ganancia.
                </p>
                <strong>arte → producto → consumo → reproducción económica</strong>
              </article>
            </div>

            <div className="ct27-toggle">
              <button
                type="button"
                className={cultureView === 'classic' ? 'active' : ''}
                onClick={() => setCultureView('classic')}
              >
                Años cuarenta
              </button>
              <button
                type="button"
                className={cultureView === 'digital' ? 'active' : ''}
                onClick={() => setCultureView('digital')}
              >
                “2.0”
              </button>
            </div>

            <div className="ct27-cultural-update">
              {cultureView === 'classic' ? (
                <>
                  <span>Objetos analizados</span>
                  <strong>cine · radio · revistas · prensa · dibujos animados · música</strong>
                </>
              ) : (
                <>
                  <span>Actualización propuesta en clase</span>
                  <strong>plataformas · redes sociales · producción digital · nuevos mecanismos de consumo</strong>
                </>
              )}
            </div>

            <div className="ct27-final-theory">
              <span>DIALÉCTICA NEGATIVA</span><b>→</b>
              <span>DIALÉCTICA DE LA ILUSTRACIÓN</span><b>→</b>
              <span>RAZÓN INSTRUMENTAL</span><b>→</b>
              <span>INDUSTRIA CULTURAL</span><b>→</b>
              <strong>UNIDIMENSIONALIDAD</strong>
            </div>
          </section>

          <section id="hegel-task">
            <Head n="09" eye="Proxima lectio">Ahora hay que volver a Hegel</Head>
            <p>
              La sesión concluye señalando que no puede comprenderse
              adecuadamente la dialéctica negativa sin estudiar aquello que
              Adorno retoma y discute en la dialéctica hegeliana.
            </p>

            <div className="ct27-hegel-keys">
              {['contradicción','negatividad','sujeto','objeto','movimiento dialéctico','superación','reconciliación','totalidad','absoluto']
                .map((item) => <span key={item}>{item}</span>)}
            </div>

            <div className="ct27-task">
              <div className="ct27-task-date">
                <strong>I</strong>
                <span>IX · MMXXVI</span>
              </div>
              <div>
                <span>Tarea · próxima clase</span>
                <h3>Leer el prólogo de <em>Fenomenología del espíritu</em></h3>
                <p>
                  G. W. F. Hegel · localizar especialmente contradicción,
                  negatividad, movimiento dialéctico, superación,
                  reconciliación, totalidad y absoluto.
                </p>
              </div>
              <Link to="/tareas">Ver en calendario →</Link>
            </div>

            <div className="ct27-last">
              <span>MODERNIDAD</span><b>→</b><span>RAZÓN</span><b>→</b>
              <span>PROGRESO</span><b>?</b><span>DOMINACIÓN</span><b>→</b>
              <strong>CRÍTICA DE LA RAZÓN DESDE LA RAZÓN</strong>
            </div>
          </section>
        </article>
      </div>

      <footer className="ct-class-footer">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <span>Negatio · Ratio · Dominatio</span>
        <span>XXVII · VIII · MMXXVI</span>
      </footer>
    </main>
  )
}
