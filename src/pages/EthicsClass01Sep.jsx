import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'responsabilidad', 'Responsabilidad y destino'],
  ['02', 'pasiones', 'Pasiones, cuerpo y posesión'],
  ['03', 'safo', 'Safo: amor como fuerza'],
  ['04', 'furias', 'Erinias, música y éxtasis'],
  ['05', 'patologia', 'Emoción, medicina y patologización'],
  ['06', 'estoicos', 'Estoicismo: logos y autocontrol'],
  ['07', 'platon', 'Platón: educar el Eros'],
  ['08', 'comparacion', 'Cuatro modelos de la pasión'],
  ['09', 'cierre', 'Problema ético final'],
]

const traditions = [
  {
    id: 'archaic',
    name: 'Tradición arcaica',
    formula: 'pasión = fuerza que me toma',
    text:
      'Las emociones intensas pueden aparecer como fuerzas exteriores, divinas o naturales que afectan al individuo y reducen su dominio inmediato sobre sí.',
  },
  {
    id: 'sappho',
    name: 'Safo',
    formula: 'amar = padecer una transformación',
    text:
      'El amor invade el cuerpo, altera la percepción, produce temblor, sudor, palidez y pérdida de control. No es una decisión voluntaria.',
  },
  {
    id: 'plato',
    name: 'Platón',
    formula: 'Eros = impulso que puede elevarse',
    text:
      'El deseo no debe simplemente desaparecer: puede ser educado y transformado desde la belleza sensible hacia la Belleza en sí.',
  },
  {
    id: 'stoic',
    name: 'Estoicismo',
    formula: 'pasión = perturbación que debe gobernarse',
    text:
      'Los acontecimientos externos no están enteramente bajo nuestro control; la libertad consiste en trabajar racionalmente sobre juicios, reacciones y conducta.',
  },
]

const sapphoSymptoms = [
  ['Voz', 'incapacidad para hablar'],
  ['Lengua', 'parálisis'],
  ['Piel', 'sensación de fuego'],
  ['Vista', 'alteración de la percepción'],
  ['Oído', 'zumbido'],
  ['Cuerpo', 'sudor y temblor'],
  ['Rostro', 'palidez'],
  ['Límite', 'sensación cercana a la muerte'],
]

const stoicSteps = [
  ['Acontecimiento', 'No depende completamente de mí.'],
  ['Representación', 'Algo aparece ante mi conciencia.'],
  ['Juicio', 'Interpreto aquello que ocurre.'],
  ['Respuesta', 'Puedo trabajar racionalmente sobre mi reacción.'],
  ['Acción', 'La conducta debe seguir razón y deber, no impulso ciego.'],
]

const erosLadder = [
  ['01', 'Belleza corporal', 'un cuerpo bello'],
  ['02', 'Pluralidad', 'belleza de muchos cuerpos'],
  ['03', 'Almas', 'belleza del carácter'],
  ['04', 'Leyes y saberes', 'formas superiores de orden'],
  ['05', 'Belleza en sí', 'lo inteligible'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ethsep1-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsClass01Sep() {
  const [traditionId, setTraditionId] = useState('sappho')
  const [passionView, setPassionView] = useState('body')
  const [sapphoIndex, setSapphoIndex] = useState(0)
  const [possessionView, setPossessionView] = useState('religious')
  const [emotionView, setEmotionView] = useState('anger')
  const [stoicIndex, setStoicIndex] = useState(2)
  const [platoIndex, setPlatoIndex] = useState(0)

  const tradition = useMemo(
    () => traditions.find((item) => item.id === traditionId) || traditions[0],
    [traditionId],
  )

  const emotionCases = {
    anger: {
      label: 'Enojo',
      q: '¿Es malo estar enojado?',
      answer:
        'No necesariamente. Si existe una injusticia real, el enojo puede estar justificado; la pregunta ética es qué hago con él.',
      formula: 'enojo justificado ≠ violencia ilimitada',
    },
    fear: {
      label: 'Miedo',
      q: '¿Debe eliminarse el miedo?',
      answer:
        'No. El miedo puede cumplir una función protectora fundamental y permitir responder ante amenazas y riesgos.',
      formula: 'miedo ≠ defecto automático',
    },
    sadness: {
      label: 'Tristeza',
      q: '¿Toda tristeza es patológica?',
      answer:
        'No. El dolor puede formar parte de pérdidas, vínculos y experiencias humanas significativas sin convertirse por ello en enfermedad.',
      formula: 'sufrimiento ≠ patología automática',
    },
  }

  const currentEmotion = emotionCases[emotionView]

  return (
    <main className="ethsep1-page">
      <nav className="ethsep1-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethsep1-brand">Φ · Philosophia</Link>
        <span>I · IX · MMXXVI</span>
      </nav>

      <header className="ethsep1-hero">
        <div className="ethsep1-meander" aria-hidden="true" />
        <div className="ethsep1-ghost" aria-hidden="true">ΠΑΘΟΣ</div>

        <div className="ethsep1-hero-inner">
          <div>
            <p className="ethsep1-kicker">FI194 · Quinta clase · 1 de septiembre</p>
            <h1>
              Pasión,
              <em>posesión y dominio de sí</em>
            </h1>
            <p className="ethsep1-lead">
              Safo, Platón y el estoicismo ofrecen tres respuestas muy distintas
              a una misma pregunta: ¿qué debemos hacer con aquello que sentimos
              cuando la emoción parece superar nuestra voluntad?
            </p>

            <div className="ethsep1-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                ¿La vida ética exige dominar las pasiones, transformarlas o
                aprender a convivir con fuerzas que nunca controlamos por completo?
              </strong>
            </div>
          </div>

          <aside className="ethsep1-axis">
            <span>MAPA</span>
            <div><b>SAFO</b><small>pasión que invade</small></div>
            <i>↓</i>
            <div><b>PLATÓN</b><small>deseo que se educa</small></div>
            <i>↓</i>
            <div className="active"><b>ESTOICISMO</b><small>respuesta que se gobierna</small></div>
          </aside>
        </div>
      </header>

      <div className="ethsep1-layout">
        <aside className="ethsep1-index">
          <p>Index ethicus</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ethsep1-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Argumentum">
              Una emoción puede ser fuerza, enfermedad, impulso o materia de autocontrol
            </Heading>

            <div className="ethsep1-master">
              <span>destino</span><b>→</b>
              <span>pasión</span><b>→</b>
              <span>posesión</span><b>→</b>
              <span>cuerpo</span><b>→</b>
              <span>logos</span><b>→</b>
              <strong>acción ética</strong>
            </div>

            <div className="ethsep1-tradition-tabs">
              {traditions.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={tradition.id === item.id ? 'active' : ''}
                  onClick={() => setTraditionId(item.id)}
                >
                  <span>{item.name}</span>
                  <strong>{item.formula}</strong>
                </button>
              ))}
            </div>

            <article className="ethsep1-focus">
              <span>{tradition.name}</span>
              <h3>{tradition.formula}</h3>
              <p>{tradition.text}</p>
            </article>
          </section>

          <section id="responsabilidad">
            <Heading n="01" eyebrow="Responsabilitas">
              El destino no puede convertirse en una coartada moral universal
            </Heading>
            <p>
              Si una persona afirma que todo estaba dispuesto por Dios o por el
              destino, aparece una dificultad inmediata: esa explicación podría
              utilizarse para justificar cualquier conducta.
            </p>

            <div className="ethsep1-destiny">
              <article>
                <span>EXCUSA</span>
                <strong>“No fui yo; estaba destinado.”</strong>
              </article>
              <b>→</b>
              <article className="danger">
                <span>PROBLEMA</span>
                <strong>evasión de responsabilidad</strong>
              </article>
            </div>

            <div className="ethsep1-callout">
              <span>PREGUNTA ÉTICA</span>
              <strong>
                Aunque no controlemos todas las circunstancias, todavía debemos
                preguntar qué parte de la acción puede atribuirse a nuestra
                deliberación, decisión y respuesta.
              </strong>
            </div>
          </section>

          <section id="pasiones">
            <Heading n="02" eyebrow="Pathos">
              La pasión altera el mundo interior como una fuerza física
            </Heading>

            <div className="ethsep1-toggle">
              <button
                type="button"
                className={passionView === 'body' ? 'active' : ''}
                onClick={() => setPassionView('body')}
              >
                Cuerpo
              </button>
              <button
                type="button"
                className={passionView === 'illness' ? 'active' : ''}
                onClick={() => setPassionView('illness')}
              >
                Enfermedad
              </button>
              <button
                type="button"
                className={passionView === 'possession' ? 'active' : ''}
                onClick={() => setPassionView('possession')}
              >
                Posesión
              </button>
            </div>

            <div className="ethsep1-passion">
              {passionView === 'body' && (
                <>
                  <span>EMOCIÓN CORPORAL</span>
                  <h3>respiración · pulso · temperatura · sudor · temblor · percepción</h3>
                  <p>
                    La emoción no es sólo una idea: reorganiza corporalmente la
                    experiencia del individuo.
                  </p>
                </>
              )}
              {passionView === 'illness' && (
                <>
                  <span>ANALOGÍA MÉDICA</span>
                  <h3>perturbación → desequilibrio → recuperación</h3>
                  <p>
                    Algunas filosofías antiguas comparan pasiones descontroladas
                    con alteraciones que afectan temporalmente el equilibrio interno.
                  </p>
                </>
              )}
              {passionView === 'possession' && (
                <>
                  <span>LECTURA RELIGIOSA</span>
                  <h3>una fuerza superior toma al individuo</h3>
                  <p>
                    Temblor, gritos, danza, pérdida de control o estados alterados
                    podían interpretarse como presencia de dioses, espíritus o daimones.
                  </p>
                </>
              )}
            </div>

            <div className="ethsep1-hurricane">
              <span>HURACÁN EXTERIOR</span><b>≈</b><strong>PASIÓN INTERIOR</strong>
              <small>ambos alteran un orden previamente estable</small>
            </div>
          </section>

          <section id="safo">
            <Heading n="03" eyebrow="Sappho · Aphrodite">
              Amar es padecer una transformación del cuerpo
            </Heading>
            <p>
              En Safo, el amor no aparece como una decisión tranquila. El
              enamoramiento invade, domina y modifica percepción, lenguaje,
              temperatura y movimiento corporal.
            </p>

            <div className="ethsep1-sappho">
              <div className="ethsep1-sappho-list">
                {sapphoSymptoms.map(([name, text], index) => (
                  <button
                    type="button"
                    key={name}
                    className={sapphoIndex === index ? 'active' : ''}
                    onClick={() => setSapphoIndex(index)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{name}</strong>
                    <small>{text}</small>
                  </button>
                ))}
              </div>

              <article className="ethsep1-sappho-focus">
                <span>{sapphoSymptoms[sapphoIndex][0]}</span>
                <h3>{sapphoSymptoms[sapphoIndex][1]}</h3>
                <p>
                  El poema convierte el enamoramiento en acontecimiento corporal:
                  no “pienso que alguien me gusta”; mi organismo entero cambia.
                </p>
              </article>
            </div>

            <div className="ethsep1-master centered">
              <span>amor</span><b>→</b>
              <span>alteración corporal</span><b>→</b>
              <span>pérdida de control</span><b>→</b>
              <strong>experiencia de posesión</strong>
            </div>

            <div className="ethsep1-aphrodite">
              <span>AFRODITA</span>
              <strong>amor · sexualidad · fecundidad · reproducción · florecimiento</strong>
              <p>
                El horizonte de Safo es también religioso: Afrodita no representa
                solamente romance, sino una fuerza de fertilidad y vínculo.
              </p>
            </div>
          </section>

          <section id="furias">
            <Heading n="04" eyebrow="Possessio">
              No toda posesión antigua significa lo mismo
            </Heading>

            <div className="ethsep1-toggle">
              {[
                ['religious', 'Dioses / daimones'],
                ['furies', 'Erinias'],
                ['muses', 'Musas'],
                ['dionysus', 'Dioniso'],
              ].map(([id, label]) => (
                <button
                  type="button"
                  key={id}
                  className={possessionView === id ? 'active' : ''}
                  onClick={() => setPossessionView(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="ethsep1-possession">
              {possessionView === 'religious' && (
                <>
                  <span>POSESIÓN RELIGIOSA</span>
                  <h3>la conducta se atribuye a una fuerza divina o espiritual</h3>
                  <p>El individuo no aparece como dueño absoluto de aquello que le sucede.</p>
                </>
              )}
              {possessionView === 'furies' && (
                <>
                  <span>ERINIAS / FURIAS</span>
                  <h3>violencia orientada a restaurar un orden roto</h3>
                  <div className="ethsep1-master">
                    <span>injusticia</span><b>→</b><span>venganza / castigo</span><b>→</b><strong>restauración</strong>
                  </div>
                </>
              )}
              {possessionView === 'muses' && (
                <>
                  <span>INSPIRACIÓN ARTÍSTICA</span>
                  <h3>la creación puede experimentarse como don</h3>
                  <p>
                    La poesía y la música no dependen exclusivamente de técnica:
                    la Musa puede “tomar” al creador y conferir inspiración.
                  </p>
                </>
              )}
              {possessionView === 'dionysus' && (
                <>
                  <span>ESTADO BÁQUICO</span>
                  <h3>danza · éxtasis · ritual · comunidad</h3>
                  <p>
                    La pérdida temporal del control cotidiano puede poseer
                    significado religioso sin interpretarse automáticamente como enfermedad.
                  </p>
                </>
              )}
            </div>

            <div className="ethsep1-music">
              <span>MÚSICA</span><b>→</b>
              <span>CONMUEVE</span><b>→</b>
              <span>CONDUCE</span><b>→</b>
              <strong>MODIFICA CONDUCTA</strong>
            </div>
          </section>

          <section id="patologia">
            <Heading n="05" eyebrow="Medicina et pathos">
              Naturalizar una explicación no obliga a patologizar toda emoción
            </Heading>
            <p>
              La cultura griega transforma progresivamente algunas explicaciones:
              aquello que podía atribuirse a espíritu o maldición comienza a
              explicarse mediante causas naturales, procesos físicos y observación.
              Pero queda una pregunta vigente: ¿toda emoción intensa es una enfermedad?
            </p>

            <div className="ethsep1-toggle">
              {Object.entries(emotionCases).map(([id, item]) => (
                <button
                  type="button"
                  key={id}
                  className={emotionView === id ? 'active' : ''}
                  onClick={() => setEmotionView(id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <article className="ethsep1-emotion">
              <span>{currentEmotion.label}</span>
              <h3>{currentEmotion.q}</h3>
              <p>{currentEmotion.answer}</p>
              <strong>{currentEmotion.formula}</strong>
            </article>

            <div className="ethsep1-pathology">
              <span>ESTADO INTENSO</span><b>≠</b><strong>ENFERMEDAD AUTOMÁTICA</strong>
              <p>
                Llorar, temer, enojarse, sufrir o enamorarse intensamente pueden
                formar parte de una experiencia humana legítima.
              </p>
            </div>
          </section>

          <section id="estoicos">
            <Heading n="06" eyebrow="Stoa · Logos">
              Libertad estoica: gobernar la respuesta dentro de un cosmos ordenado
            </Heading>
            <p>
              El universo estoico está gobernado por logos, necesidad y destino.
              La libertad no consiste en controlar todos los acontecimientos,
              sino en trabajar racionalmente sobre aquello que hacemos con ellos.
            </p>

            <div className="ethsep1-stoic-tabs">
              {stoicSteps.map(([title], index) => (
                <button
                  type="button"
                  key={title}
                  className={stoicIndex === index ? 'active' : ''}
                  onClick={() => setStoicIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{title}</strong>
                </button>
              ))}
            </div>

            <article className="ethsep1-focus">
              <span>PASO {String(stoicIndex + 1).padStart(2, '0')}</span>
              <h3>{stoicSteps[stoicIndex][0]}</h3>
              <p>{stoicSteps[stoicIndex][1]}</p>
            </article>

            <div className="ethsep1-stoic-formula">
              <div><span>NO CONTROLO</span><strong>lo que ocurre</strong></div>
              <b>pero</b>
              <div className="core"><span>PUEDO TRABAJAR</span><strong>sobre mi respuesta</strong></div>
            </div>

            <div className="ethsep1-duty">
              <span>DEBER</span><b>→</b>
              <span>RAZÓN</span><b>→</b>
              <strong>ACCIÓN</strong>
              <small>no miedo · no placer · no ira como criterios suficientes</small>
            </div>
          </section>

          <section id="platon">
            <Heading n="07" eyebrow="Eros philosophicus">
              Platón no elimina el deseo: intenta educarlo
            </Heading>
            <p>
              Eros puede comenzar en la atracción por un cuerpo bello, pero su
              movimiento filosófico consiste en aprender a reconocer formas más
              amplias y profundas de belleza hasta orientarse hacia lo inteligible.
            </p>

            <div className="ethsep1-eros-ladder">
              {erosLadder.map(([n, title], index) => (
                <button
                  type="button"
                  key={n}
                  className={platoIndex === index ? 'active' : ''}
                  onClick={() => setPlatoIndex(index)}
                >
                  <span>{n}</span>
                  <strong>{title}</strong>
                </button>
              ))}
            </div>

            <article className="ethsep1-plato-focus">
              <span>{erosLadder[platoIndex][0]}</span>
              <h3>{erosLadder[platoIndex][1]}</h3>
              <p>{erosLadder[platoIndex][2]}</p>
            </article>

            <div className="ethsep1-master centered">
              <span>Eros sensible</span><b>→</b>
              <span>educación del deseo</span><b>→</b>
              <span>conocimiento</span><b>→</b>
              <strong>Belleza en sí</strong>
            </div>

            <div className="ethsep1-alcibiades">
              <span>ALCIBÍADES → SÓCRATES</span>
              <strong>
                El deseo corporal no se niega sin más: Sócrates intenta
                redirigirlo hacia la filosofía.
              </strong>
            </div>
          </section>

          <section id="comparacion">
            <Heading n="08" eyebrow="Comparatio">
              Una misma experiencia recibe interpretaciones radicalmente distintas
            </Heading>

            <div className="ethsep1-comparison">
              {traditions.map((item) => (
                <article key={item.id}>
                  <span>{item.name}</span>
                  <strong>{item.formula}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="ethsep1-frames">
              {[
                ['Religión', 'posesión divina'],
                ['Lírica', 'pasión corporal'],
                ['Medicina', 'proceso natural'],
                ['Platón', 'impulso filosófico'],
                ['Estoicismo', 'perturbación gobernable'],
                ['Actualidad', 'riesgo de patologización'],
              ].map(([a, b]) => (
                <article key={a}><span>{a}</span><strong>{b}</strong></article>
              ))}
            </div>
          </section>

          <section id="cierre">
            <Heading n="09" eyebrow="Quaestio finalis">
              El problema ético no es solamente qué sentimos, sino qué hacemos con ello
            </Heading>

            <div className="ethsep1-extremes">
              <article>
                <span>EXTREMO A</span>
                <h3>Dejarse dominar completamente</h3>
                <p>La pasión puede conducir a conductas destructivas.</p>
              </article>
              <b>↔</b>
              <article>
                <span>EXTREMO B</span>
                <h3>Eliminar toda pasión</h3>
                <p>Podríamos perder dimensiones esenciales de la vida humana.</p>
              </article>
            </div>

            <div className="ethsep1-final">
              <span>SENTIR</span><b>≠</b><span>ELEGIR SENTIR</span>
              <i>pero</i>
              <span>RESPONDER</span><b>→</b><strong>PROBLEMA ÉTICO</strong>
            </div>

            <div className="ethsep1-conclusion">
              <span>FÓRMULA PARA RECORDAR</span>
              <strong>
                La ética no exige necesariamente eliminar las emociones, sino
                determinar qué lugar deben tener en nuestras acciones.
              </strong>
            </div>
          </section>
        </article>
      </div>

      <footer className="ethsep1-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>Pathos · Eros · Logos</span>
        <span>I · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
