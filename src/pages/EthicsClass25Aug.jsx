import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const stages = [
  {
    id: 'purificacion',
    n: 'I',
    greek: 'ΚΑΘΑΡΣΙΣ',
    title: 'Purificación',
    subtitle: 'culpa · mancha · rito',
    thesis:
      'La falta se vive como contaminación: algo debe limpiarse, repararse o expiarse.',
    chain: ['falta', 'culpa / impureza', 'rito', 'restauración'],
  },
  {
    id: 'sacrificio',
    n: 'II',
    greek: 'ΘΥΣΙΑ',
    title: 'Sacrificio',
    subtitle: 'expiación · incertidumbre',
    thesis:
      'El sacrificio busca restaurar la relación con lo divino, pero nunca garantiza por sí mismo certeza de perdón.',
    chain: ['culpa', 'sacrificio', '¿fui perdonado?', 'incertidumbre', 'repetición'],
  },
  {
    id: 'suenos',
    n: 'III',
    greek: 'ὌΝΕΙΡΟΣ',
    title: 'Sueños y oráculos',
    subtitle: 'signo · interpretación · destino',
    thesis:
      'El mensaje divino llega en forma ambigua y obliga al ser humano a interpretar.',
    chain: ['dios', 'signo / sueño', 'interpretación', 'acontecimiento', 'lectura retrospectiva'],
  },
  {
    id: 'mania',
    n: 'IV',
    greek: 'ΜΑΝΙΑ',
    title: 'Manía',
    subtitle: 'posesión · entusiasmo · eros',
    thesis:
      'La alteración puede ser comprendida religiosamente como presencia divina, no sólo como perturbación.',
    chain: ['estado alterado', 'posesión', 'mensaje', 'interpretación'],
  },
  {
    id: 'examen',
    n: 'V',
    greek: 'ΣΚΕΨΙΣ',
    title: 'Examen de sí',
    subtitle: 'memoria · revisión · corrección',
    thesis:
      'La purificación empieza a desplazarse del rito exterior hacia una práctica de revisión de la propia vida.',
    chain: ['fin del día', '¿qué hice?', '¿qué omití?', '¿a quién dañé?', 'corrección'],
  },
  {
    id: 'responsabilidad',
    n: 'VI',
    greek: 'ΠΡΑΞΙΣ',
    title: 'Responsabilidad',
    subtitle: 'acción · voluntad · reparación',
    thesis:
      'La filosofía vuelve a dirigir la mirada hacia el sujeto: no basta decir que un dios, una pasión o el destino actuaron por mí.',
    chain: ['acción', 'autor', 'daño', 'reconocimiento', 'reparación'],
  },
  {
    id: 'etica',
    n: 'VII',
    greek: 'ἨΘΟΣ',
    title: 'Ética humana',
    subtitle: 'deliberación · dominio de sí',
    thesis:
      'La pregunta cambia de “¿qué quieren los dioses?” a “¿cómo debo vivir?”.',
    chain: ['deliberación', 'responsabilidad', 'virtud', 'dominio de sí', 'vida buena'],
  },
]

const maniaForms = [
  ['Profética', 'oráculo · Apolo', 'La alteración puede ser leída como anuncio o revelación.'],
  ['Poética', 'inspiración', 'La palabra creadora puede aparecer como entusiasmo o posesión.'],
  ['Erótica', 'Eros', 'El amor altera y transforma la vida ordinaria del sujeto.'],
  ['Ritual', 'experiencia religiosa', 'La manía puede integrar al individuo en una práctica comunitaria.'],
]

const contrasts = [
  ['Pregunta central', '¿Qué quieren los dioses?', '¿Cómo debo vivir?'],
  ['Falta', 'mancha / impureza', 'acción imputable'],
  ['Corrección', 'rito / sacrificio', 'examen / reparación'],
  ['Alteración', 'posesión divina', 'estado a comprender y dominar'],
  ['Destino', 'signo que debe interpretarse', 'campo de acción y responsabilidad'],
  ['Criterio', 'favor divino incierto', 'virtud · prudencia · deber'],
]

const finalChain = [
  'RELIGIÓN ARCAICA',
  'CULPA',
  'PURIFICACIÓN',
  'SACRIFICIO',
  'SUEÑOS / ORÁCULOS',
  'MANÍA',
  'INCERTIDUMBRE',
  'EXAMEN',
  'RESPONSABILIDAD',
  'RACIONALIZACIÓN',
  'DOMINIO DE SÍ',
  'ÉTICA',
]

export default function EthicsClass25Aug() {
  const [activeId, setActiveId] = useState('purificacion')
  const [dreamStep, setDreamStep] = useState(0)
  const [apology, setApology] = useState('reparacion')
  const [view, setView] = useState('religion')

  const active = useMemo(
    () => stages.find((item) => item.id === activeId) || stages[0],
    [activeId],
  )

  const dreamSteps = [
    {
      title: 'Sueño',
      text: 'Aparece una imagen, una palabra o una escena cuyo sentido no es evidente.',
    },
    {
      title: 'Interpretación',
      text: 'El sujeto intenta traducir el signo según su propia situación concreta.',
    },
    {
      title: 'Decisión',
      text: 'La lectura del signo puede orientar una acción, una renuncia o una preparación.',
    },
    {
      title: 'Acontecimiento',
      text: 'Algo ocurre y reordena retrospectivamente el sentido de lo soñado.',
    },
  ]

  return (
    <main className="eth25-page">
      <div className="eth25-meander" aria-hidden="true" />

      <nav className="eth25-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="eth25-brand">Φ · Philosophia</Link>
        <span>25 · VIII · 2026</span>
      </nav>

      <header className="eth25-hero">
        <div className="eth25-columns" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div className="eth25-hero-ghost" aria-hidden="true">ἨΘΟΣ</div>

        <div className="eth25-hero-copy">
          <p>Ética · clase del 25 de agosto</p>
          <h1>
            De la <em>purificación</em>
            <strong>a la responsabilidad</strong>
          </h1>
          <p className="eth25-lead">
            Religión arcaica, orfismo, sacrificio, sueños, manía y destino:
            el mundo que la filosofía no destruye, sino que transforma en una
            ética de examen, deliberación y dominio de sí.
          </p>
          <blockquote>
            La pregunta moral cambia de lugar: de “¿qué quieren los dioses?”
            a “¿cómo debo vivir?”.
          </blockquote>
        </div>

        <aside className="eth25-hero-axis">
          <span>TRANSFORMACIÓN</span>
          <div><b>RITO</b><small>purificación exterior</small></div>
          <i>↓</i>
          <div><b>EXAMEN</b><small>interiorización</small></div>
          <i>↓</i>
          <div className="active"><b>ÉTICA</b><small>responsabilidad humana</small></div>
        </aside>
      </header>

      <section className="eth25-nexus">
        <header>
          <span>I · GENEALOGIA</span>
          <h2>Siete estaciones del mundo religioso a la ética</h2>
          <p>Pulse cada etapa. La clase entera está organizada como una transformación.</p>
        </header>

        <div className="eth25-stage-tabs">
          {stages.map((item) => (
            <button
              type="button"
              key={item.id}
              className={active.id === item.id ? 'active' : ''}
              onClick={() => setActiveId(item.id)}
            >
              <span>{item.n}</span>
              <b>{item.greek}</b>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>

        <article className="eth25-stage-detail">
          <div className="eth25-stage-symbol">{active.greek}</div>
          <div>
            <span>{active.subtitle}</span>
            <h3>{active.title}</h3>
            <p>{active.thesis}</p>
            <div className="eth25-chain">
              {active.chain.map((item, index) => (
                <div key={item}>
                  <strong>{item}</strong>
                  {index < active.chain.length - 1 && <b>→</b>}
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="eth25-night">
        <header>
          <span>II · EXAMEN NOCTURNUM</span>
          <h2>Antes de dormir: convertir la vida en objeto de examen</h2>
        </header>

        <div className="eth25-night-grid">
          <article><span>01</span><strong>¿Qué hice?</strong><p>Reconstruir las propias acciones.</p></article>
          <article><span>02</span><strong>¿Qué omití?</strong><p>La responsabilidad también alcanza aquello que debí hacer.</p></article>
          <article><span>03</span><strong>¿A quién dañé?</strong><p>Reconocer que mi acción afectó a otra persona.</p></article>
          <article><span>04</span><strong>¿Qué debo corregir?</strong><p>La revisión sólo tiene sentido si modifica la conducta futura.</p></article>
        </div>

        <div className="eth25-sleep">
          <div><span>VIGILIA</span><strong>vida vivida</strong></div>
          <b>→</b>
          <div><span>EXAMEN</span><strong>juicio de sí</strong></div>
          <b>→</b>
          <div><span>SUEÑO</span><strong>preparación / límite</strong></div>
        </div>
      </section>

      <section className="eth25-apology">
        <header>
          <span>III · RESPONSABILITAS</span>
          <h2>¿Para quién es la disculpa?</h2>
          <p>La clase distingue reparación moral y simple alivio subjetivo.</p>
        </header>

        <div className="eth25-apology-switch">
          <button
            type="button"
            className={apology === 'reparacion' ? 'active' : ''}
            onClick={() => setApology('reparacion')}
          >
            Reparar el daño
          </button>
          <button
            type="button"
            className={apology === 'alivio' ? 'active' : ''}
            onClick={() => setApology('alivio')}
          >
            Aliviar mi culpa
          </button>
        </div>

        <article className={`eth25-apology-card ${apology}`}>
          {apology === 'reparacion' ? (
            <>
              <span>ORIENTACIÓN ÉTICA</span>
              <h3>“Te afecté y debo responder por ello.”</h3>
              <p>
                La disculpa reconoce a la otra persona, el daño y la necesidad
                de reparación. No borra lo sucedido, pero asume responsabilidad.
              </p>
            </>
          ) : (
            <>
              <span>RIESGO EGOÍSTA</span>
              <h3>“Necesito dejar de sentirme culpable.”</h3>
              <p>
                La otra persona puede convertirse sólo en un medio para recuperar
                mi propia tranquilidad. La culpa no garantiza por sí misma moralidad.
              </p>
            </>
          )}
        </article>
      </section>

      <section className="eth25-sacrifice">
        <header>
          <span>IV · SACRIFICIUM</span>
          <h2>La máquina de la incertidumbre religiosa</h2>
        </header>

        <div className="eth25-sacrifice-loop">
          <article><span>01</span><strong>CULPA</strong></article>
          <b>→</b>
          <article><span>02</span><strong>SACRIFICIO</strong></article>
          <b>→</b>
          <article><span>03</span><strong>¿PERDÓN?</strong></article>
          <b>→</b>
          <article><span>04</span><strong>INCERTIDUMBRE</strong></article>
          <b>↺</b>
        </div>

        <div className="eth25-sacrifice-note">
          <span>LÍMITE</span>
          <p>
            La búsqueda de certeza puede llevar a ofrecer cada vez más, incluso
            aquello considerado más valioso. El relato de Abraham aparece en
            clase como transformación simbólica de esa lógica sacrificial.
          </p>
        </div>
      </section>

      <section className="eth25-dream">
        <header>
          <span>V · ONEIROKRITIKĒ</span>
          <h2>Laboratorio de interpretación del sueño</h2>
          <p>
            El mensaje no llega claro. Su sentido sólo puede construirse mediante interpretación.
          </p>
        </header>

        <div className="eth25-dream-lab">
          <div className="eth25-dream-steps">
            {dreamSteps.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={dreamStep === index ? 'active' : ''}
                onClick={() => setDreamStep(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>

          <article>
            <span>{dreamSteps[dreamStep].title}</span>
            <h3>{dreamSteps[dreamStep].text}</h3>
            <div className="eth25-dream-progress">
              {dreamSteps.map((_, index) => (
                <i key={index} className={index <= dreamStep ? 'active' : ''} />
              ))}
            </div>
          </article>
        </div>

        <blockquote>
          SUEÑO → INTERPRETACIÓN INCIERTA → ACONTECIMIENTO → LECTURA RETROSPECTIVA
        </blockquote>
      </section>

      <section className="eth25-mania">
        <header>
          <span>VI · MANIA</span>
          <h2>La locura antes de convertirse sólo en patología</h2>
        </header>

        <div className="eth25-mania-grid">
          {maniaForms.map(([title, subtitle, text]) => (
            <article key={title}>
              <span>{subtitle}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="eth25-daemon">
          <strong>DIVINO</strong><b>↕</b><span>DAIMON</span><b>↕</b><strong>HUMANO</strong>
        </div>
      </section>

      <section className="eth25-socrates">
        <header>
          <span>VII · BIOS EXETASTOS</span>
          <h2>Sócrates: transformar el rito en forma de vida</h2>
        </header>

        <div className="eth25-socrates-grid">
          <article><span>01</span><h3>Examinar</h3><p>La vida filosófica convierte el autoexamen en práctica permanente.</p></article>
          <article><span>02</span><h3>Cumplir el deber</h3><p>No cometer una injusticia para escapar de otra.</p></article>
          <article><span>03</span><h3>Afrontar la muerte</h3><p>La muerte no invalida una vida orientada por aquello que se considera justo.</p></article>
          <article><span>04</span><h3>Dominarse</h3><p>La filosofía desplaza la explicación por posesión hacia el conocimiento de los propios estados.</p></article>
        </div>
      </section>

      <section className="eth25-transition">
        <header>
          <span>VIII · METABASIS</span>
          <h2>¿Ruptura o transformación?</h2>
        </header>

        <div className="eth25-view-switch">
          <button type="button" className={view === 'religion' ? 'active' : ''} onClick={() => setView('religion')}>
            Mundo religioso
          </button>
          <button type="button" className={view === 'filosofia' ? 'active' : ''} onClick={() => setView('filosofia')}>
            Transformación filosófica
          </button>
        </div>

        <div className={`eth25-view-card ${view}`}>
          {view === 'religion' ? (
            <>
              <span>RELIGIÓN ARCAICA</span>
              <h3>¿Qué quieren los dioses?</h3>
              <p>Pureza, sacrificio, signos, destino, posesión y búsqueda de certeza.</p>
            </>
          ) : (
            <>
              <span>FILOSOFÍA</span>
              <h3>¿Cómo debo vivir?</h3>
              <p>Deliberación, examen, responsabilidad, virtud, deber y dominio de sí.</p>
            </>
          )}
        </div>
      </section>

      <section className="eth25-compare">
        <header>
          <span>IX · SYNOPSIS</span>
          <h2>La responsabilidad cambia de lugar</h2>
        </header>

        <div className="eth25-table-wrap">
          <table>
            <thead>
              <tr><th>Problema</th><th>Moral religiosa arcaica</th><th>Ética filosófica</th></tr>
            </thead>
            <tbody>
              {contrasts.map((row) => (
                <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="eth25-not-reduction">
        <header>
          <span>X · NON REDUCTIO</span>
          <h2>La filosofía no elimina todo lo religioso</h2>
        </header>

        <div className="eth25-human-dimensions">
          <article><span>ΛΟΓΟΣ</span><strong>Filosofía / ciencia</strong><p>explicación · concepto · argumento</p></article>
          <article><span>ἨΘΟΣ</span><strong>Ética</strong><p>acción · responsabilidad · vida buena</p></article>
          <article><span>ΑΙΣΘΗΣΙΣ</span><strong>Estética</strong><p>forma · experiencia · sensibilidad</p></article>
          <article><span>ΙΕΡΟΝ</span><strong>Religión</strong><p>sentido · trascendencia · espiritualidad</p></article>
        </div>

        <blockquote>
          Racionalizar no significa reducir todas las dimensiones humanas a una
          sola forma de conocimiento.
        </blockquote>
      </section>

      <section className="eth25-final">
        <span>XI · ORDO LECTIONIS</span>
        <h2>La clase entera en una sola cadena</h2>

        <div className="eth25-final-chain">
          {finalChain.map((item, index) => (
            <div key={item}>
              <strong>{item}</strong>
              {index < finalChain.length - 1 && <b>→</b>}
            </div>
          ))}
        </div>

        <blockquote>
          La ética filosófica surge transformando prácticas religiosas antiguas:
          interioriza el examen, racionaliza la acción y devuelve al sujeto la
          responsabilidad por aquello que hace.
        </blockquote>
      </section>
    </main>
  )
}
