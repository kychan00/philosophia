import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'mapa', 'Mapa de transformación'],
  ['01', 'purificacion', 'Purificación, culpa y sacrificio'],
  ['02', 'examen', 'Examen de la vida y disculpa'],
  ['03', 'suenos', 'Sueños, oráculos y destino'],
  ['04', 'mania', 'Manía, Eros y daimones'],
  ['05', 'responsabilidad', 'De la posesión a la responsabilidad'],
  ['06', 'socrates', 'Sócrates y filosofía como forma de vida'],
  ['07', 'transicion', 'De religión arcaica a ética filosófica'],
  ['08', 'autores', 'Parménides, Aristóteles y Epicuro'],
  ['09', 'dimensiones', 'Religión, ciencia, estética y filosofía'],
]

const stages = [
  {
    id: 'culpa',
    greek: 'ΜΙΑΣΜΑ',
    title: 'Falta / mancha',
    subtitle: 'culpa · contaminación',
    thesis:
      'La falta puede sentirse como una contaminación que altera la relación con los dioses, con la comunidad y consigo mismo.',
    chain: ['falta', 'mancha', 'culpa / vergüenza', 'necesidad de reparar'],
  },
  {
    id: 'purificacion',
    greek: 'ΚΑΘΑΡΣΙΣ',
    title: 'Purificación',
    subtitle: 'rito · expiación',
    thesis:
      'La respuesta religiosa busca restaurar una condición adecuada mediante prácticas de limpieza, penitencia, confesión o sacrificio.',
    chain: ['culpa', 'rito', 'purificación', 'restauración'],
  },
  {
    id: 'sacrificio',
    greek: 'ΘΥΣΙΑ',
    title: 'Sacrificio',
    subtitle: 'ofrenda · favor divino',
    thesis:
      'El sacrificio pretende restablecer o asegurar la relación con lo divino, pero la incertidumbre puede producir repetición indefinida.',
    chain: ['ofrenda', '¿aceptación?', 'incertidumbre', 'nuevo sacrificio'],
  },
  {
    id: 'oraculo',
    greek: 'ΜΑΝΤΕΙΑ',
    title: 'Oráculo / sueño',
    subtitle: 'signo · interpretación',
    thesis:
      'La voluntad divina no aparece de manera transparente: signos y sueños exigen interpretación y sólo a veces se comprenden retrospectivamente.',
    chain: ['signo', 'interpretación', 'decisión', 'acontecimiento', 'lectura a posteriori'],
  },
  {
    id: 'mania',
    greek: 'ΜΑΝΙΑ',
    title: 'Manía',
    subtitle: 'posesión · inspiración',
    thesis:
      'La alteración puede ser leída como contacto con lo divino: furia, amor, poesía, profecía o éxtasis no son simplemente patologías.',
    chain: ['alteración', 'posesión', 'mensaje', 'interpretación comunitaria'],
  },
  {
    id: 'examen',
    greek: 'ΣΚΕΨΙΣ',
    title: 'Examen de sí',
    subtitle: 'memoria · revisión',
    thesis:
      'Prácticas inicialmente religiosas comienzan a interiorizarse: revisar acciones, omisiones, pensamientos y decisiones.',
    chain: ['día vivido', 'revisión', 'reconocimiento', 'corrección'],
  },
  {
    id: 'responsabilidad',
    greek: 'ΠΡΑΞΙΣ',
    title: 'Responsabilidad',
    subtitle: 'autoría · imputación',
    thesis:
      'La conducta deja de explicarse sólo por dioses, destino o pasión: el sujeto debe poder decir “yo hice esto y debo responder”.',
    chain: ['acción', 'autor', 'daño', 'reconocimiento', 'respuesta'],
  },
  {
    id: 'etica',
    greek: 'ἨΘΟΣ',
    title: 'Ética filosófica',
    subtitle: 'razón · vida buena',
    thesis:
      'La pregunta cambia progresivamente: de “¿qué quieren los dioses de mí?” a “¿cómo debo vivir racionalmente?”.',
    chain: ['examen', 'deliberación', 'hábitos', 'responsabilidad', 'vida buena'],
  },
]

const maniaForms = [
  ['Profética', 'Apolo · oráculo', 'La alteración puede ser leída como anuncio o revelación.'],
  ['Poética', 'inspiración', 'La creación puede aparecer como entusiasmo o posesión.'],
  ['Erótica', 'Eros · carencia', 'El amor altera al sujeto porque desea aquello que todavía no posee.'],
  ['Extática', 'rito · posesión', 'El individuo puede ser integrado socialmente como portador de un mensaje.'],
]

const responsibilityCases = [
  {
    id: 'agamenon',
    title: 'Agamenón',
    old: '“Una divinidad o una locura me dominó.”',
    question: '¿Explicar el estado elimina la responsabilidad?',
    answer:
      'La ética posterior empieza a considerar insuficiente atribuir completamente la acción a dioses, furia o posesión.',
  },
  {
    id: 'intoxicacion',
    title: 'Intoxicación',
    old: '“No era yo; estaba fuera de control.”',
    question: '¿Explicación = justificación?',
    answer:
      'El estado alterado puede explicar parte de la conducta, pero no elimina automáticamente la obligación de responder por el daño.',
  },
  {
    id: 'david',
    title: 'David',
    old: 'El profeta obliga a David a reconocerse dentro de la historia que él mismo condena.',
    question: '¿Puede decir “yo hice esto”?',
    answer:
      'Aquí aparece la introspección moral: reconocimiento de culpa, arrepentimiento y responsabilidad por la propia acción.',
  },
]

const thinkers = [
  {
    id: 'socrates',
    name: 'Sócrates',
    label: 'vida examinada',
    text:
      'El examen de la propia vida, el deber racionalmente asumido y la negativa a responder a una injusticia con otra injusticia anticipan una ética filosófica.',
  },
  {
    id: 'parmenides',
    name: 'Parménides',
    label: 'revelación → argumento',
    text:
      'Su poema conserva un marco religioso —viaje y revelación de una diosa— mientras el contenido avanza hacia conceptos y razonamiento filosófico.',
  },
  {
    id: 'aristoteles',
    name: 'Aristóteles',
    label: 'hábitos · forma de vida',
    text:
      'La vida ética busca adquirir forma, hábitos y racionalidad para reducir el dominio del azar sin imaginar que la fortuna pueda desaparecer por completo.',
  },
  {
    id: 'epicuro',
    name: 'Epicuro',
    label: 'liberación del miedo',
    text:
      'La filosofía debe reducir el miedo a los dioses, a la muerte y al destino para hacer posible una vida más tranquila y autónoma.',
  },
]

const finalConcepts = [
  ['Orfismo', 'Tradición religiosa griega relacionada con purificación, alma y prácticas ascéticas.'],
  ['Purificación', 'Proceso para liberarse de una falta, mancha o contaminación.'],
  ['Sacrificio', 'Ofrenda que busca establecer, reparar o garantizar una relación con lo divino.'],
  ['Culpa', 'Reconocimiento subjetivo de haber cometido una falta.'],
  ['Vergüenza', 'Experiencia de la propia conducta mediada también por la mirada de otros.'],
  ['Responsabilidad', 'Capacidad de reconocerse como autor de las propias acciones y responder por ellas.'],
  ['Vida examinada', 'Práctica filosófica de revisar racionalmente la propia existencia.'],
  ['Destino', 'Orden de acontecimientos concebido como situado más allá del control humano.'],
  ['Týche / Fortuna', 'Carácter cambiante e imprevisible de lo que puede suceder.'],
  ['Manía', 'Estado de locura, inspiración o posesión interpretado religiosamente.'],
  ['Daimon', 'Ser intermediario entre lo humano y lo divino.'],
  ['Oráculo', 'Medio de interpretación de una voluntad divina no inmediatamente transparente.'],
  ['Ética filosófica', 'Transformación de prácticas religiosas en reflexión racional sobre vida y responsabilidad humanas.'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function SectionHead({ n, eyebrow, children }) {
  return (
    <>
      <span className="eth25v2-number">{n}</span>
      <p className="eth25v2-eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </>
  )
}

export default function EthicsClass25Aug() {
  const [activeStage, setActiveStage] = useState('culpa')
  const [apology, setApology] = useState('otro')
  const [dreamStep, setDreamStep] = useState(0)
  const [responsibilityId, setResponsibilityId] = useState('agamenon')
  const [transitionView, setTransitionView] = useState('religion')
  const [thinkerId, setThinkerId] = useState('socrates')

  const stage = useMemo(
    () => stages.find((item) => item.id === activeStage) || stages[0],
    [activeStage],
  )
  const responsibility =
    responsibilityCases.find((item) => item.id === responsibilityId) ||
    responsibilityCases[0]
  const thinker = thinkers.find((item) => item.id === thinkerId) || thinkers[0]

  const dreamSteps = [
    ['Sueño / signo', 'Aparece una imagen, palabra o escena cuyo significado no es evidente.'],
    ['Interpretación', 'El sujeto busca reglas, símbolos o intérpretes capaces de traducir el mensaje.'],
    ['Decisión', 'La lectura del signo puede orientar una acción o una preparación.'],
    ['Acontecimiento', 'Algo ocurre y reordena retrospectivamente el sentido de lo soñado.'],
    ['A posteriori', 'La persona concluye: “ahora entiendo lo que aquello quería decir”.'],
  ]

  return (
    <main className="eth25v2-page">
      <nav className="eth25v2-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="eth25v2-brand">Φ · Philosophia</Link>
        <span>XXV · VIII · MMXXVI</span>
      </nav>

      <header className="eth25v2-hero">
        <div className="eth25v2-meander" aria-hidden="true" />
        <div className="eth25v2-ghost" aria-hidden="true">ἨΘΟΣ</div>

        <div className="eth25v2-hero-inner">
          <div className="eth25v2-hero-copy">
            <p>Ética · clase del martes 25 de agosto de 2026</p>
            <h1>
              Religión arcaica,
              <em>purificación y responsabilidad</em>
            </h1>
            <p className="eth25v2-lead">
              La clase reconstruye cómo prácticas de culpa, sacrificio, oráculo,
              sueño, manía y purificación no desaparecen con la filosofía:
              son racionalizadas, interiorizadas y transformadas en examen de sí,
              responsabilidad y construcción de una vida humana.
            </p>

            <div className="eth25v2-question">
              <span>PREGUNTA DE FONDO</span>
              <strong>¿Cómo pasa la moral de “qué quieren los dioses” a “cómo debo vivir”?</strong>
            </div>
          </div>

          <aside className="eth25v2-hero-map">
            <span>TRANSFORMACIÓN</span>
            <div><b>RELIGIÓN</b><small>culpa · rito · destino</small></div>
            <i>↓</i>
            <div><b>INTERIORIZACIÓN</b><small>examen · conciencia</small></div>
            <i>↓</i>
            <div className="active"><b>ÉTICA</b><small>responsabilidad · vida racional</small></div>
          </aside>
        </div>
      </header>

      <div className="eth25v2-layout">
        <aside className="eth25v2-index">
          <p>Index lectionis</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="eth25v2-article">
          <section id="mapa">
            <SectionHead n="00" eyebrow="Genealogia moralis">
              La clase completa puede leerse como una transformación
            </SectionHead>
            <p>
              Las prácticas religiosas arcaicas contienen ya problemas que
              después serán filosóficos: falta, reparación, examen, dominio de las
              pasiones y responsabilidad. El cambio decisivo consiste en desplazar
              progresivamente el criterio desde la voluntad divina hacia la
              deliberación humana.
            </p>

            <div className="eth25v2-stage-tabs">
              {stages.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={stage.id === item.id ? 'active' : ''}
                  onClick={() => setActiveStage(item.id)}
                >
                  <span>{item.greek}</span>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </button>
              ))}
            </div>

            <article className="eth25v2-stage-focus">
              <div className="eth25v2-symbol">{stage.greek}</div>
              <div>
                <span>{stage.subtitle}</span>
                <h3>{stage.title}</h3>
                <p>{stage.thesis}</p>
                <div className="eth25v2-chain">
                  {stage.chain.map((item, index) => (
                    <div key={item}>
                      <strong>{item}</strong>
                      {index < stage.chain.length - 1 && <b>→</b>}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </section>

          <section id="purificacion">
            <SectionHead n="01" eyebrow="Katharsis et sacrificium">
              Culpa, mancha, purificación y la incertidumbre del sacrificio
            </SectionHead>
            <p>
              La falta no es solamente una decisión moral abstracta: puede
              experimentarse como mancha. De ahí la necesidad de purificación,
              expiación y reparación mediante ritos. El problema aparece cuando
              el rito nunca produce certeza suficiente sobre el favor divino.
            </p>

            <div className="eth25v2-sacrifice">
              <div><span>01</span><strong>FALTA</strong><small>mancha / culpa</small></div>
              <b>→</b>
              <div><span>02</span><strong>SACRIFICIO</strong><small>ofrenda / reparación</small></div>
              <b>→</b>
              <div><span>03</span><strong>¿BASTA?</strong><small>falta de certeza</small></div>
              <b>→</b>
              <div className="danger"><span>04</span><strong>REPETICIÓN</strong><small>nuevo sacrificio</small></div>
              <b>↺</b>
            </div>

            <div className="eth25v2-columns2">
              <article>
                <span>ORFISMO</span>
                <h3>Purificar el alma</h3>
                <p>
                  La existencia corporal puede aparecer como condición problemática;
                  prácticas ascéticas y purificatorias buscan transformar la
                  relación del alma con esa existencia.
                </p>
              </article>
              <article>
                <span>SACRIFICIO EXTREMO</span>
                <h3>Entregar lo más valioso</h3>
                <p>
                  La lógica sacrificial puede escalar hasta la entrega del hijo.
                  El relato de Abraham conserva esa estructura y la interrumpe:
                  el sacrificio humano finalmente no se consuma.
                </p>
              </article>
            </div>

            <div className="eth25v2-callout">
              <span>FALTA DE CERTEZA</span>
              <strong>
                Si debo ofrecer una y otra vez, la repetición misma revela que no
                poseo seguridad acerca de haber restablecido la relación.
              </strong>
            </div>
          </section>

          <section id="examen">
            <SectionHead n="02" eyebrow="Examen vitae">
              La vida comienza a convertirse en objeto de revisión
            </SectionHead>
            <p>
              Algunas prácticas de examen antes de dormir todavía poseen un
              trasfondo purificatorio, pero ya anticipan una transformación
              decisiva: la conducta se vuelve algo que el propio sujeto puede
              recordar, juzgar y corregir.
            </p>

            <div className="eth25v2-night">
              <article><span>01</span><strong>¿Qué hice?</strong><p>Reconstruir las acciones del día.</p></article>
              <article><span>02</span><strong>¿Qué omití?</strong><p>Considerar también lo que debía haber hecho.</p></article>
              <article><span>03</span><strong>¿Qué pensé?</strong><p>Volver consciente la propia orientación interior.</p></article>
              <article><span>04</span><strong>¿Qué corregiré?</strong><p>Transformar el examen en práctica futura.</p></article>
            </div>

            <h3 className="eth25v2-subtitle">¿Para quién es la disculpa?</h3>
            <div className="eth25v2-toggle">
              <button
                type="button"
                className={apology === 'otro' ? 'active' : ''}
                onClick={() => setApology('otro')}
              >
                Reparar al otro
              </button>
              <button
                type="button"
                className={apology === 'yo' ? 'active' : ''}
                onClick={() => setApology('yo')}
              >
                Aliviar mi culpa
              </button>
            </div>

            <div className={`eth25v2-apology ${apology}`}>
              {apology === 'otro' ? (
                <>
                  <span>ORIENTACIÓN ÉTICA</span>
                  <h3>“Te dañé y debo responder.”</h3>
                  <p>
                    La disculpa reconoce a la otra persona, el daño producido y
                    la obligación de reparar en la medida de lo posible.
                  </p>
                </>
              ) : (
                <>
                  <span>RIESGO</span>
                  <h3>“Necesito que me perdones para dejar de sentirme mal.”</h3>
                  <p>
                    La otra persona puede convertirse en un medio para recuperar
                    mi propia tranquilidad. Sentir culpa no garantiza por sí mismo
                    una orientación moral hacia el otro.
                  </p>
                </>
              )}
            </div>
          </section>

          <section id="suenos">
            <SectionHead n="03" eyebrow="Oraculum · Oneiros · Tyche">
              Sueños, oráculos y una existencia gobernada por la incertidumbre
            </SectionHead>
            <p>
              En el mundo arcaico, sueños y oráculos pueden funcionar como medios
              de comunicación divina. El problema es que el signo nunca llega con
              una regla inequívoca de interpretación. Su sentido puede aparecer
              sólo después de que el acontecimiento ya ocurrió.
            </p>

            <div className="eth25v2-dream">
              <div className="eth25v2-dream-tabs">
                {dreamSteps.map(([title], index) => (
                  <button
                    type="button"
                    key={title}
                    className={dreamStep === index ? 'active' : ''}
                    onClick={() => setDreamStep(index)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{title}</strong>
                  </button>
                ))}
              </div>
              <article>
                <span>{dreamSteps[dreamStep][0]}</span>
                <h3>{dreamSteps[dreamStep][1]}</h3>
                <div className="eth25v2-progress">
                  {dreamSteps.map((_, index) => (
                    <i key={index} className={index <= dreamStep ? 'active' : ''} />
                  ))}
                </div>
              </article>
            </div>

            <div className="eth25v2-destiny">
              <article>
                <span>TÝCHE / FORTUNA</span>
                <strong>riqueza · pérdida · éxito · desgracia · cambio</strong>
                <p>Lo único seguro es que las circunstancias pueden cambiar.</p>
              </article>
              <article className="core">
                <span>EDIPO</span>
                <strong>el intento de evitar el destino puede contribuir a realizarlo</strong>
                <p>El mito dramatiza una existencia sometida a fuerzas que el individuo no controla.</p>
              </article>
            </div>

            <aside className="eth25v2-note">
              <strong>Comparación contemporánea: programación y “eureka”</strong>
              <p>
                Un problema trabajado intensamente puede seguir procesándose
                durante el sueño. Despertar con una solución no obliga a suponer
                una revelación sobrenatural: puede tratarse de reorganización
                inconsciente de información.
              </p>
            </aside>
          </section>

          <section id="mania">
            <SectionHead n="04" eyebrow="Mania · Eros · Daimon">
              La “locura” no siempre fue concebida como simple enfermedad
            </SectionHead>
            <p>
              Manía puede nombrar posesión o inspiración divina. Poesía,
              profecía, amor y éxtasis quedan conectados con estados en los que el
              sujeto parece estar “fuera de sí”. En ciertos casos la comunidad no
              excluye al individuo: intenta interpretar lo que dice.
            </p>

            <div className="eth25v2-mania-grid">
              {maniaForms.map(([title, label, text]) => (
                <article key={title}>
                  <span>{label}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="eth25v2-eros">
              <span>EROS</span>
              <strong>deseo → carencia → búsqueda → inquietud</strong>
              <p>
                Quien desea no posee completamente aquello que desea. El amor
                puede aparecer, por ello, como una forma de alteración o manía.
              </p>
            </div>

            <div className="eth25v2-daemon">
              <span>DAÍMŌN</span><b>↔</b><strong>INTERMEDIARIO</strong><b>↔</b>
              <span>HUMANO / DIVINO</span>
            </div>
          </section>

          <section id="responsabilidad">
            <SectionHead n="05" eyebrow="Auctor actionis">
              Explicar una acción no significa necesariamente justificarla
            </SectionHead>
            <p>
              El problema ético aparece cuando el sujeto deja de poder atribuir
              completamente sus actos a dioses, destino, furia o embriaguez.
              Estados emocionales y alteraciones explican, pero no borran sin más
              la autoría y las consecuencias.
            </p>

            <div className="eth25v2-case-tabs">
              {responsibilityCases.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={responsibility.id === item.id ? 'active' : ''}
                  onClick={() => setResponsibilityId(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <article className="eth25v2-case">
              <span>{responsibility.title}</span>
              <h3>{responsibility.old}</h3>
              <div>
                <small>PREGUNTA ÉTICA</small>
                <strong>{responsibility.question}</strong>
              </div>
              <p>{responsibility.answer}</p>
            </article>

            <div className="eth25v2-explain">
              <span>ESTADO ALTERADO</span><b>→</b>
              <span>EXPLICACIÓN</span><b>≠</b>
              <strong>JUSTIFICACIÓN AUTOMÁTICA</strong>
            </div>
          </section>

          <section id="socrates">
            <SectionHead n="06" eyebrow="Socrates · officium">
              Filosofía como forma de vida y preparación para la muerte
            </SectionHead>
            <p>
              Sócrates concentra varios desplazamientos de la clase: examen de
              la vida, fidelidad a principios, cumplimiento del deber y negativa
              a responder a una posible injusticia mediante otra injusticia.
            </p>

            <div className="eth25v2-socrates">
              <article><span>CONDENA</span><strong>muerte</strong><p>La muerte no se identifica automáticamente con el peor mal.</p></article>
              <b>→</b>
              <article><span>POSIBILIDAD</span><strong>escapar</strong><p>Los discípulos ofrecen una salida.</p></article>
              <b>→</b>
              <article className="core"><span>DECISIÓN</span><strong>no huir</strong><p>No cometer una injusticia como respuesta a otra.</p></article>
              <b>→</b>
              <article><span>DEBER</span><strong>vida coherente</strong><p>Mantener los principios racionalmente asumidos.</p></article>
            </div>

            <div className="eth25v2-callout">
              <span>TRANSICIÓN</span>
              <strong>
                El comportamiento comienza a justificarse por una estructura
                racional de principios y deberes, no únicamente por obediencia
                ritual o temor a una divinidad.
              </strong>
            </div>
          </section>

          <section id="transicion">
            <SectionHead n="07" eyebrow="Humanizatio">
              La filosofía no destruye estas prácticas: las racionaliza y humaniza
            </SectionHead>

            <div className="eth25v2-toggle">
              <button
                type="button"
                className={transitionView === 'religion' ? 'active' : ''}
                onClick={() => setTransitionView('religion')}
              >
                Religión arcaica
              </button>
              <button
                type="button"
                className={transitionView === 'philosophy' ? 'active' : ''}
                onClick={() => setTransitionView('philosophy')}
              >
                Ética filosófica
              </button>
            </div>

            <div className={`eth25v2-transition ${transitionView}`}>
              {transitionView === 'religion' ? (
                <>
                  <span>CRITERIO</span>
                  <h3>“Debo purificarme porque puedo haber ofendido a los dioses.”</h3>
                  <div>
                    <b>dioses</b><i>→</i><b>destino</b><i>→</i><b>rito</b><i>→</i><b>purificación</b>
                  </div>
                </>
              ) : (
                <>
                  <span>CRITERIO</span>
                  <h3>“Debo examinar mi conducta porque quiero vivir racionalmente.”</h3>
                  <div>
                    <b>razón</b><i>→</i><b>examen</b><i>→</i><b>responsabilidad</b><i>→</i><b>vida buena</b>
                  </div>
                </>
              )}
            </div>

            <div className="eth25v2-big-question">
              <span>CAMBIO DECISIVO</span>
              <p>¿Qué quieren los dioses de mí?</p>
              <b>↓</b>
              <p>¿Cómo debo vivir?</p>
              <b>↓</b>
              <strong>¿Cómo puedo hacerme responsable racionalmente de mi propia existencia?</strong>
            </div>
          </section>

          <section id="autores">
            <SectionHead n="08" eyebrow="Figurae">
              Cuatro figuras que muestran distintas fases de la transformación
            </SectionHead>

            <div className="eth25v2-thinker-tabs">
              {thinkers.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={thinker.id === item.id ? 'active' : ''}
                  onClick={() => setThinkerId(item.id)}
                >
                  <span>{item.name}</span>
                  <small>{item.label}</small>
                </button>
              ))}
            </div>

            <article className="eth25v2-thinker">
              <span>{thinker.label}</span>
              <h3>{thinker.name}</h3>
              <p>{thinker.text}</p>
            </article>

            <aside className="eth25v2-note">
              <strong>Parménides muestra por qué “mito termina → filosofía comienza” es demasiado simple</strong>
              <p>
                Uno de los textos fundamentales de ontología y lógica conserva un
                escenario religioso de revelación. La novedad filosófica surge
                dentro de formas heredadas y las transforma progresivamente.
              </p>
            </aside>
          </section>

          <section id="dimensiones">
            <SectionHead n="09" eyebrow="Religio · Scientia · Aesthetica">
              La filosofía no culmina en la eliminación de toda religión o estética
            </SectionHead>
            <p>
              La clase rechaza un modelo lineal según el cual primero habría mito,
              después filosofía y finalmente ciencia, haciendo innecesario todo lo
              anterior. La modernidad científica no eliminó arte, religión,
              afectividad ni búsqueda de sentido.
            </p>

            <div className="eth25v2-human-dimensions">
              <article><span>CIENCIA</span><strong>explicación · conocimiento objetivo</strong></article>
              <article><span>ÉTICA</span><strong>acción · responsabilidad · vida buena</strong></article>
              <article><span>ESTÉTICA</span><strong>arte · belleza · sensibilidad</strong></article>
              <article><span>RELIGIÓN</span><strong>sentido · experiencia · trascendencia</strong></article>
            </div>

            <div className="eth25v2-warning">
              <span>REDUCCIONISMO</span>
              <strong>
                Convertir la filosofía únicamente en instrumento de la ciencia
                puede producir desprecio hacia dimensiones humanas que no se
                agotan en explicación técnica u objetiva.
              </strong>
            </div>

            <h3 className="eth25v2-subtitle">Conceptos fundamentales de la sesión</h3>
            <div className="eth25v2-glossary">
              {finalConcepts.map(([name, text]) => (
                <article key={name}>
                  <span>{name}</span>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="eth25v2-final">
              <span>RELIGIÓN ARCAICA</span><b>→</b>
              <span>CULPA / PURIFICACIÓN</span><b>→</b>
              <span>SUEÑOS / ORÁCULOS / DESTINO</span><b>→</b>
              <span>EXAMEN</span><b>→</b>
              <span>RESPONSABILIDAD</span><b>→</b>
              <strong>ÉTICA FILOSÓFICA</strong>
            </div>
          </section>
        </article>
      </div>

      <footer className="eth25v2-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>Katharsis · Praxis · Ethos</span>
        <span>XXV · VIII · MMXXVI</span>
      </footer>
    </main>
  )
}
