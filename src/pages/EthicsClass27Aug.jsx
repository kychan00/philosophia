import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'emocion', 'Emoción, razón e idea adecuada'],
  ['02', 'maximas', 'Demócrito y las máximas morales'],
  ['03', 'verguenza', 'Vergüenza externa e interna'],
  ['04', 'dignidad', 'Dignidad, poder y vulnerabilidad'],
  ['05', 'conciencia', 'Vigilancia interior y autonomía'],
  ['06', 'reparacion', 'Perdón, reparación y reintegración'],
  ['07', 'casos', 'Laboratorio de deliberación'],
  ['08', 'transicion', 'De cultura de vergüenza a ética'],
  ['09', 'tarea', 'Tarea: máxima + caso concreto'],
]

const maxims = [
  {
    id: 'uno',
    label: 'Máxima I',
    title: 'Vergüenza ante uno mismo',
    text:
      'La persona debe sentir vergüenza primero ante sí misma cuando realiza una acción vergonzosa.',
    key:
      'La mirada moral no depende exclusivamente de que alguien me descubra.',
  },
  {
    id: 'dos',
    label: 'Máxima II',
    title: 'Actuar correctamente incluso a solas',
    text:
      'Incluso cuando estés solo, no digas ni hagas nada vergonzoso.',
    key:
      'La conciencia funciona como testigo interior cuando desaparecen policía, reputación y vigilancia externa.',
  },
  {
    id: 'tres',
    label: 'Máxima III',
    title: 'No vivir para el “qué dirán”',
    text:
      'No te avergüences más ante los demás que ante ti mismo.',
    key:
      'La desaprobación social no basta: hay que poder juzgar racionalmente si realmente se produjo un daño o una indignidad.',
  },
]

const cases = [
  {
    id: 'robo',
    title: 'Robar un bien común',
    question: 'Nadie me vio. ¿Eso vuelve aceptable la acción?',
    facts:
      'La persona toma algo perteneciente a una comunidad; nadie sabe quién fue y no existe castigo externo.',
    analysis:
      'El daño subsiste porque otras personas fueron privadas de un bien que necesitaban. La ausencia de vigilancia no elimina la dimensión moral.',
    best: 'dos',
  },
  {
    id: 'ninos',
    title: 'Niños en un espacio público',
    question: '¿Debo sentir vergüenza porque otros me miran mal?',
    facts:
      'Los niños hablan, juegan y hacen ruido de manera ordinaria. Algunas personas expresan desaprobación hacia los padres.',
    analysis:
      'La presión social puede ser injusta. La pregunta moral es si hubo daño, abuso o incumplimiento real de una responsabilidad, no sólo molestia ajena.',
    best: 'tres',
  },
  {
    id: 'ausente',
    title: 'Hablar de alguien ausente',
    question: '¿Es justo juzgar a quien no puede responder?',
    facts:
      'Un grupo discute y degrada a una persona que no está presente para explicar su posición.',
    analysis:
      'La justicia discursiva exige evitar inventar, humillar o reducir a alguien a insultos cuando carece de posibilidad de respuesta.',
    best: 'uno',
  },
  {
    id: 'vulnerable',
    title: 'Abuso de una posición de fuerza',
    question: '¿Qué vuelve especialmente vil esta acción?',
    facts:
      'Un adulto utiliza su fuerza o autoridad para humillar o dañar a una persona vulnerable.',
    analysis:
      'La asimetría de poder aumenta la responsabilidad. La acción degrada la humanidad del otro y explota una vulnerabilidad.',
    best: 'uno',
  },
]

const progression = [
  ['Mirada externa', 'La comunidad me dice qué debe avergonzarme.'],
  ['Interiorización', 'Aprendo normas, modelos y máximas de conducta.'],
  ['Conciencia', 'Puedo reconocer lo que hice aunque nadie me observe.'],
  ['Deliberación', 'Pregunto si realmente causé daño o actué indignamente.'],
  ['Autonomía moral', 'Puedo justificar racionalmente mi acción sin depender sólo del “qué dirán”.'],
]

const concepts = [
  ['Emoción', 'Puede motivar la acción sin sustituir necesariamente la deliberación racional.'],
  ['Deliberación', 'Proceso de valorar posibilidades antes de actuar.'],
  ['Idea adecuada', 'Comprensión más clara de aquello que realmente ocurre antes de decidir.'],
  ['Máxima', 'Regla breve de conducta utilizada para orientar una acción concreta.'],
  ['Sentencia moral', 'Formulación breve de sabiduría práctica.'],
  ['Vergüenza', 'Experiencia moral asociada con reconocer una acción como indigna.'],
  ['Conciencia', 'Capacidad de reconocer y evaluar las propias acciones.'],
  ['Dignidad', 'Valor que exige tratar al otro de manera acorde con su humanidad.'],
  ['Vileza', 'Acción degradante, especialmente cuando implica abuso o humillación.'],
  ['Reparación', 'Intento de responder al daño causado.'],
  ['Perdón', 'Proceso distinto de negar la responsabilidad; puede formar parte de la elaboración del daño.'],
  ['Autonomía moral', 'Capacidad de juzgar las propias acciones sin depender exclusivamente de la presión social.'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function SectionHead({ n, eyebrow, children }) {
  return (
    <>
      <span className="eth27-number">{n}</span>
      <p className="eth27-eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </>
  )
}

export default function EthicsClass27Aug() {
  const [emotionView, setEmotionView] = useState('emotion')
  const [maximId, setMaximId] = useState('uno')
  const [shameView, setShameView] = useState('external')
  const [caseId, setCaseId] = useState('robo')
  const [progressIndex, setProgressIndex] = useState(0)
  const [taskMaxim, setTaskMaxim] = useState('dos')

  const maxim = useMemo(
    () => maxims.find((item) => item.id === maximId) || maxims[0],
    [maximId],
  )
  const moralCase = cases.find((item) => item.id === caseId) || cases[0]
  const chosenTaskMaxim =
    maxims.find((item) => item.id === taskMaxim) || maxims[0]

  return (
    <main className="eth27-page">
      <nav className="eth27-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="eth27-brand">Φ · Philosophia</Link>
        <span>XXVII · VIII · MMXXVI</span>
      </nav>

      <header className="eth27-hero">
        <div className="eth27-meander" aria-hidden="true" />
        <div className="eth27-ghost" aria-hidden="true">ΑΙΔΩΣ</div>

        <div className="eth27-hero-inner">
          <div className="eth27-hero-copy">
            <p>Ética · cuarta clase · jueves 27 de agosto</p>
            <h1>
              Vergüenza,
              <em>conciencia y máxima</em>
            </h1>
            <p className="eth27-lead">
              La sesión sigue el tránsito desde una cultura de honor y vergüenza
              hacia una conciencia capaz de juzgar sus propias acciones, incluso
              cuando nadie observa. Demócrito aparece aquí no sólo como atomista,
              sino como autor de sentencias destinadas a orientar la deliberación.
            </p>

            <div className="eth27-hero-question">
              <span>Pregunta central</span>
              <strong>
                ¿Cómo pasamos de actuar por la mirada de otros a deliberar
                racionalmente sobre lo que nosotros mismos debemos hacer?
              </strong>
            </div>
          </div>

          <aside className="eth27-hero-axis">
            <span>GENEALOGÍA</span>
            <div><b>EMOCIÓN</b><small>motivación</small></div>
            <i>↓</i>
            <div><b>MÁXIMA</b><small>orientación práctica</small></div>
            <i>↓</i>
            <div><b>CONCIENCIA</b><small>testigo interior</small></div>
            <i>↓</i>
            <div className="active"><b>AUTONOMÍA</b><small>deliberación racional</small></div>
          </aside>
        </div>
      </header>

      <div className="eth27-layout">
        <aside className="eth27-index">
          <p>Index lectionis</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="eth27-article">
          <section id="mapa">
            <SectionHead n="00" eyebrow="Via sessionis">
              De la emoción a la autonomía moral
            </SectionHead>
            <p>
              La clase enlaza tres niveles: primero, una emoción puede movilizar
              la acción; segundo, la sabiduría práctica ofrece máximas para
              deliberar; tercero, la persona interioriza el juicio moral y deja
              de depender únicamente del castigo o de la reputación.
            </p>

            <div className="eth27-main-chain">
              <div><span>01</span><strong>EMOCIÓN</strong><small>da energía</small></div>
              <b>→</b>
              <div><span>02</span><strong>DELIBERACIÓN</strong><small>ordena la respuesta</small></div>
              <b>→</b>
              <div><span>03</span><strong>MÁXIMA</strong><small>orienta</small></div>
              <b>→</b>
              <div><span>04</span><strong>CONCIENCIA</strong><small>evalúa</small></div>
              <b>→</b>
              <div className="core"><span>05</span><strong>AUTONOMÍA</strong><small>decide</small></div>
            </div>

            <div className="eth27-callout">
              <span>TESIS</span>
              <strong>
                La moral madura cuando una persona puede preguntarse “¿actué
                correctamente?” incluso si nadie conoce su acción y aunque la
                presión social le diga otra cosa.
              </strong>
            </div>
          </section>

          <section id="emocion">
            <SectionHead n="01" eyebrow="Pathos et logos">
              Emoción y racionalidad no son necesariamente enemigas
            </SectionHead>
            <p>
              El enojo puede ser una fuerza que permite reconocer una injusticia
              y sostener una acción difícil. El problema aparece cuando la emoción
              ocupa todo el lugar y sustituye la deliberación.
            </p>

            <div className="eth27-toggle">
              <button
                type="button"
                className={emotionView === 'emotion' ? 'active' : ''}
                onClick={() => setEmotionView('emotion')}
              >
                Emoción
              </button>
              <button
                type="button"
                className={emotionView === 'reason' ? 'active' : ''}
                onClick={() => setEmotionView('reason')}
              >
                Deliberación
              </button>
            </div>

            <div className={`eth27-emotion ${emotionView}`}>
              {emotionView === 'emotion' ? (
                <>
                  <span>ACCIDENTE AUTOMOVILÍSTICO</span>
                  <h3>“Esto fue injusto y no quiero aceptar un acuerdo rápido.”</h3>
                  <p>
                    El enojo puede suministrar la motivación necesaria para
                    defender un derecho aun cuando el procedimiento implique
                    tiempo, gastos y trámites.
                  </p>
                </>
              ) : (
                <>
                  <span>ORGANIZACIÓN RACIONAL</span>
                  <h3>La energía emocional debe convertirse en una estrategia pensada.</h3>
                  <p>
                    emoción → motivación → valoración de opciones → deliberación
                    racional → decisión → acción.
                  </p>
                </>
              )}
            </div>

            <div className="eth27-spinoza">
              <span>SPINOZA · IDEA ADECUADA</span>
              <strong>
                Antes de decidir sobre una situación cargada emocionalmente, hay
                que intentar comprender con mayor claridad qué está ocurriendo.
              </strong>
              <div>
                <b>me hace daño</b><i>→</i>
                <b>no cambia</b><i>→</i>
                <b>probablemente continuará</b><i>→</i>
                <b>puedo deliberar</b>
              </div>
            </div>
          </section>

          <section id="maximas">
            <SectionHead n="02" eyebrow="Democritus · sententiae">
              La máxima como tecnología moral
            </SectionHead>
            <p>
              De Demócrito se conservan sentencias morales que funcionan de una
              manera distinta a un tratado sistemático: son breves, memorizables
              y utilizables en situaciones concretas. Su valor no está sólo en
              describir una norma, sino en ayudar a decidir.
            </p>

            <div className="eth27-maxim-tabs">
              {maxims.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={maxim.id === item.id ? 'active' : ''}
                  onClick={() => setMaximId(item.id)}
                >
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <article className="eth27-maxim-focus">
              <span>{maxim.label} · formulación aproximada trabajada en clase</span>
              <blockquote>“{maxim.text}”</blockquote>
              <p>{maxim.key}</p>
              <div className="eth27-maxim-use">
                <small>FUNCIÓN PRÁCTICA</small>
                <strong>
                  situación concreta → recordar la máxima → deliberar → elegir una acción
                </strong>
              </div>
            </article>

            <aside className="eth27-note">
              <strong>Sabiduría práctica</strong>
              <p>
                La comparación con Proverbios, Eclesiastés y otros textos
                sapienciales sirve para entender estas frases como instrumentos
                de formación del carácter y de orientación de decisiones.
              </p>
            </aside>
          </section>

          <section id="verguenza">
            <SectionHead n="03" eyebrow="Aidōs">
              De la vergüenza pública a la vergüenza ante uno mismo
            </SectionHead>
            <p>
              La sociedad homérica está fuertemente articulada por honor,
              reputación y expectativas de rol. Pero la clase insiste en que la
              vergüenza adquiere profundidad moral cuando depende también del
              reconocimiento interno de la propia falta.
            </p>

            <div className="eth27-toggle">
              <button
                type="button"
                className={shameView === 'external' ? 'active' : ''}
                onClick={() => setShameView('external')}
              >
                Mirada externa
              </button>
              <button
                type="button"
                className={shameView === 'internal' ? 'active' : ''}
                onClick={() => setShameView('internal')}
              >
                Conciencia propia
              </button>
            </div>

            <div className={`eth27-shame ${shameView}`}>
              {shameView === 'external' ? (
                <>
                  <span>HONOR / REPUTACIÓN</span>
                  <h3>“¿Qué van a decir de mí?”</h3>
                  <p>
                    La comunidad puede exigir un comportamiento conforme con el
                    papel social: rey, padre, madre, ciudadano, responsable de otros.
                  </p>
                </>
              ) : (
                <>
                  <span>VERGÜENZA REFLEXIVA</span>
                  <h3>“Aunque nadie me vea, yo sé lo que hice.”</h3>
                  <p>
                    La conciencia puede juzgar la propia acción sin necesidad de
                    policía, denuncia, castigo o exposición pública.
                  </p>
                </>
              )}
            </div>

            <div className="eth27-achilles">
              <article>
                <span>AQUILES → AGAMENÓN</span>
                <strong>“cara de perro”</strong>
                <p>
                  El insulto expresa la acusación de actuar sin vergüenza: una
                  conducta indigna de alguien que ocupa la posición de rey.
                </p>
              </article>
              <article className="core">
                <span>SECUENCIA MORAL</span>
                <strong>acción → conciencia → valoración → vergüenza</strong>
                <p>
                  Para avergonzarme moralmente debo poder comprender mi acción y
                  reconocer por qué es indigna o dañina.
                </p>
              </article>
            </div>
          </section>

          <section id="dignidad">
            <SectionHead n="04" eyebrow="Dignitas et vulnerabilitas">
              Vileza, dignidad y abuso de una posición de poder
            </SectionHead>
            <p>
              No basta decir que una acción es vil “porque está mal”. La clase
              intenta precisar qué rasgo moral posee: muchas acciones viles
              degradan la humanidad del otro y explotan una asimetría de fuerza,
              autoridad o dependencia.
            </p>

            <div className="eth27-power">
              <div><span>PODER / FUERZA</span><strong>adulto · autoridad · posición superior</strong></div>
              <b>+</b>
              <div><span>VULNERABILIDAD</span><strong>niño · anciano · persona dependiente</strong></div>
              <b>→</b>
              <div className="danger"><span>ABUSO</span><strong>humillación · daño · degradación</strong></div>
            </div>

            <div className="eth27-columns">
              <article>
                <span>DIGNIDAD</span>
                <h3>La humanidad del otro impone obligaciones</h3>
                <p>
                  Valor, necesidades, derechos y vulnerabilidad exigen límites a
                  lo que puedo hacer con otra persona.
                </p>
              </article>
              <article>
                <span>JUSTICIA DISCURSIVA</span>
                <h3>Respetar también al ausente</h3>
                <p>
                  No inventar, degradar o reducir a insultos a quien no está
                  presente y carece de oportunidad inmediata para responder.
                </p>
              </article>
            </div>
          </section>

          <section id="conciencia">
            <SectionHead n="05" eyebrow="Testis interior">
              La persona aprende a convertirse en testigo de sí misma
            </SectionHead>
            <p>
              Una máxima como “incluso cuando estés solo…” desplaza la vigilancia
              hacia la interioridad. La norma ya no depende únicamente de la
              policía, del castigo o de la reputación.
            </p>

            <div className="eth27-watch">
              <span>POLICÍA</span><b>↓</b>
              <span>REPUTACIÓN</span><b>↓</b>
              <span>OPINIÓN PÚBLICA</span><b>↓</b>
              <strong>CONCIENCIA</strong>
            </div>

            <div className="eth27-interiority">
              <article>
                <span>RELIGIÓN</span>
                <strong>acciones + palabras + pensamientos pueden sentirse observados</strong>
                <p>
                  Esta interiorización puede producir una presión enorme si cada
                  deseo o pensamiento se interpreta inmediatamente como falta.
                </p>
              </article>
              <article>
                <span>ÉTICA</span>
                <strong>la conciencia necesita formación, no simple culpa</strong>
                <p>
                  Sentirse mal no basta; hay que aprender a distinguir daño,
                  indignidad, obligación, abuso y presión social injustificada.
                </p>
              </article>
            </div>

            <aside className="eth27-note">
              <strong><em>Demian</em> como referencia de clase</strong>
              <p>
                La novela aparece para pensar el conflicto entre deseos,
                identidad, educación religiosa, culpa y vergüenza sin reducirlo
                a la fórmula simplista “religión = mala”.
              </p>
            </aside>
          </section>

          <section id="reparacion">
            <SectionHead n="06" eyebrow="Reparatio">
              Responsabilidad, perdón y posibilidad de continuar
            </SectionHead>
            <p>
              Reconocer una falta puede abrir una secuencia de arrepentimiento,
              disculpa y reparación. Pero el perdón no significa negar el daño ni
              borrar automáticamente consecuencias jurídicas.
            </p>

            <div className="eth27-repair-chain">
              <span>RECONOCER</span><b>→</b>
              <span>ARREPENTIRSE</span><b>→</b>
              <span>DISCULPARSE</span><b>→</b>
              <span>REPARAR</span><b>→</b>
              <strong>REINTEGRAR</strong>
            </div>

            <div className="eth27-columns">
              <article>
                <span>VÍCTIMA</span>
                <h3>No quedar completamente atrapada por el daño</h3>
                <p>
                  Procesar no significa decir que nada ocurrió; busca recuperar
                  capacidad de actuar libremente después de la experiencia.
                </p>
              </article>
              <article>
                <span>VICTIMARIO</span>
                <h3>Responsabilidad sin identidad eterna de “criminal”</h3>
                <p>
                  Una sociedad que excluye indefinidamente puede obstaculizar la
                  reintegración y favorecer marginalización o reincidencia.
                </p>
              </article>
            </div>
          </section>

          <section id="casos">
            <SectionHead n="07" eyebrow="Laboratorium">
              Poner la máxima a trabajar
            </SectionHead>
            <p>
              La pregunta filosófica deja de ser “¿qué significa esta sentencia?”
              y se vuelve “¿qué me ayuda a decidir en esta situación?”. Ésta es
              precisamente la operación que prepara la tarea.
            </p>

            <div className="eth27-case-tabs">
              {cases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={moralCase.id === item.id ? 'active' : ''}
                  onClick={() => {
                    setCaseId(item.id)
                    setMaximId(item.best)
                  }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <article className="eth27-case">
              <span>CASO</span>
              <h3>{moralCase.title}</h3>
              <p>{moralCase.facts}</p>
              <div>
                <small>PROBLEMA MORAL</small>
                <strong>{moralCase.question}</strong>
              </div>
              <div>
                <small>ANÁLISIS</small>
                <strong>{moralCase.analysis}</strong>
              </div>
              <div className="maxim">
                <small>MÁXIMA ÚTIL</small>
                <strong>{maxims.find((item) => item.id === moralCase.best)?.text}</strong>
              </div>
            </article>
          </section>

          <section id="transicion">
            <SectionHead n="08" eyebrow="Autonomia moralis">
              De una cultura de vergüenza a una conciencia ética
            </SectionHead>
            <p>
              La comunidad sigue siendo importante porque forma hábitos,
              lenguaje y criterios; pero la madurez moral exige poder revisar
              también críticamente lo que la comunidad aprueba o condena.
            </p>

            <div className="eth27-progress-tabs">
              {progression.map(([title], index) => (
                <button
                  type="button"
                  key={title}
                  className={progressIndex === index ? 'active' : ''}
                  onClick={() => setProgressIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{title}</strong>
                </button>
              ))}
            </div>

            <div className="eth27-progress-focus">
              <span>{progression[progressIndex][0]}</span>
              <h3>{progression[progressIndex][1]}</h3>
            </div>

            <div className="eth27-three">
              <article><span>NO BASTA</span><strong>que la sociedad me condene</strong><p>La presión social puede ser injusta.</p></article>
              <article><span>NO BASTA</span><strong>que yo me sienta tranquilo</strong><p>La conciencia puede estar mal formada.</p></article>
              <article className="core"><span>HACE FALTA</span><strong>deliberar y justificar</strong><p>¿Hubo daño, abuso, indignidad u obligación incumplida?</p></article>
            </div>

            <h3 className="eth27-subtitle">Lexicon de la sesión</h3>
            <div className="eth27-glossary">
              {concepts.map(([name, text]) => (
                <article key={name}>
                  <span>{name}</span>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="tarea">
            <SectionHead n="09" eyebrow="Praxis">
              Tarea: convertir una máxima en herramienta de deliberación
            </SectionHead>
            <p>
              No basta con explicar teóricamente una sentencia. Hay que mostrar
              qué hace dentro de una decisión concreta: qué acción está en juego,
              qué alternativas existen, cómo orienta la máxima y qué decisión
              permite justificar.
            </p>

            <div className="eth27-task-builder">
              <div className="eth27-task-maxims">
                <span>1 · ELIJA UNA MÁXIMA</span>
                {maxims.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={taskMaxim === item.id ? 'active' : ''}
                    onClick={() => setTaskMaxim(item.id)}
                  >
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </button>
                ))}
              </div>

              <article>
                <span>PLANTILLA DE TRABAJO</span>
                <div><small>MÁXIMA ELEGIDA</small><strong>“{chosenTaskMaxim.text}”</strong></div>
                <div><small>SITUACIÓN CONCRETA</small><strong>Describa una acción individual o una relación moral concreta.</strong></div>
                <div><small>PROBLEMA MORAL</small><strong>¿Qué debería hacer?</strong></div>
                <div><small>APLICACIÓN</small><strong>La máxima me permite considerar que…</strong></div>
                <div><small>DECISIÓN</small><strong>Por tanto, debería…</strong></div>
                <div><small>JUSTIFICACIÓN</small><strong>Esta decisión es coherente con la máxima porque…</strong></div>
              </article>
            </div>

            <div className="eth27-task-card">
              <div>
                <span>TAREA · PRÓXIMA CLASE</span>
                <h3>Aplicar una máxima moral a un caso concreto</h3>
                <p>
                  Escoger una sentencia trabajada en clase —por el contexto, una
                  de las de Demócrito— y construir un ejemplo donde sirva para
                  deliberar y tomar una decisión.
                </p>
              </div>
              <div className="eth27-task-date">
                <strong>I</strong>
                <span>IX · MMXXVI</span>
                <small>20:25</small>
              </div>
              <Link to="/tareas">Ver en calendario →</Link>
            </div>

            <div className="eth27-final">
              <span>EMOCIÓN</span><b>→</b>
              <span>MÁXIMA</span><b>→</b>
              <span>CONCIENCIA</span><b>→</b>
              <span>DELIBERACIÓN</span><b>→</b>
              <strong>AUTONOMÍA MORAL</strong>
            </div>
          </section>
        </article>
      </div>

      <footer className="eth27-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>Aidōs · Syneidēsis · Praxis</span>
        <span>XXVII · VIII · MMXXVI</span>
      </footer>
    </main>
  )
}
