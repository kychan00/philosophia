import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'mapa', 'Mapa histórico'],
  ['01', 'origen', 'Racionalismo ↔ empirismo'],
  ['02', 'locke', 'Locke: experiencia y cualidades'],
  ['03', 'berkeley', 'Berkeley: esse est percipi'],
  ['04', 'exterior', 'Mundo exterior, Dios y Matrix'],
  ['05', 'mediacion', 'Redes, algoritmos e IA'],
  ['06', 'hume', 'Hume: inducción y causalidad'],
  ['07', 'ciencia', 'Universalidad y necesidad'],
  ['08', 'kant', 'Kant entra en escena'],
  ['09', 'ontologia', 'Conexión ontológica'],
  ['10', 'tarea', 'Kant · Crítica de la razón pura'],
]

const thinkers = [
  {
    id: 'locke',
    name: 'Locke',
    thesis: 'Nada en el entendimiento que no haya pasado por la experiencia.',
    path: ['experiencia', 'sensaciones', 'ideas', 'conocimiento'],
    problem: '¿Qué parte de lo percibido pertenece al objeto y qué parte depende del sujeto?',
  },
  {
    id: 'berkeley',
    name: 'Berkeley',
    thesis: 'Esse est percipi — ser es ser percibido.',
    path: ['percepción', 'cualidades', 'ideas', 'realidad conocida'],
    problem: '¿Por qué postular una materia detrás de aquello que efectivamente percibimos?',
  },
  {
    id: 'hume',
    name: 'Hume',
    thesis: 'Experiencia → hábito → probabilidad, no necesidad.',
    path: ['repetición', 'hábito', 'expectativa', 'probabilidad'],
    problem: '¿Cómo obtenemos necesidad causal si sólo observamos sucesiones?',
  },
  {
    id: 'kant',
    name: 'Kant',
    thesis: '¿Cómo son posibles los juicios sintéticos a priori?',
    path: ['experiencia', 'formas a priori', 'síntesis', 'conocimiento científico'],
    problem: '¿Cómo puede haber conocimiento informativo y a la vez universal y necesario?',
  },
]

const lockeQualities = [
  {
    id: 'primary',
    title: 'Cualidades primarias',
    examples: 'figura · tamaño · extensión · movimiento · número',
    thesis: 'Se consideran relativamente objetivas y pertenecientes al objeto.',
  },
  {
    id: 'secondary',
    title: 'Cualidades secundarias',
    examples: 'color · sabor · olor · temperatura · sonido',
    thesis: 'Dependen de manera más clara de las condiciones del sujeto que percibe.',
  },
]

const humeSteps = [
  ['Observación', 'A → B ocurre una vez.'],
  ['Repetición', 'A → B ocurre muchas veces.'],
  ['Hábito', 'Esperamos B cuando aparece A.'],
  ['Expectativa', 'Tratamos la regularidad como si fuera necesaria.'],
  ['Problema', 'Nunca percibimos una conexión necesaria como tal.'],
]

const kantGrid = [
  ['Analítico', 'el predicado está contenido en el concepto', 'no amplía el conocimiento'],
  ['Sintético', 'el predicado añade algo', 'amplía el conocimiento'],
  ['A priori', 'independiente de una experiencia particular', 'universal / necesario'],
  ['A posteriori', 'procede de la experiencia', 'particular / contingente'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ontsep2-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function OntologiaClass02Sep() {
  const [thinkerId, setThinkerId] = useState('locke')
  const [qualityId, setQualityId] = useState('primary')
  const [berkeleyView, setBerkeleyView] = useState('apple')
  const [worldView, setWorldView] = useState('locke')
  const [mediaView, setMediaView] = useState('algorithm')
  const [humeIndex, setHumeIndex] = useState(2)
  const [scienceView, setScienceView] = useState('gravity')
  const [kantCell, setKantCell] = useState(0)

  const thinker = useMemo(
    () => thinkers.find((item) => item.id === thinkerId) || thinkers[0],
    [thinkerId],
  )
  const quality =
    lockeQualities.find((item) => item.id === qualityId) || lockeQualities[0]

  return (
    <main className="ontsep2-page">
      <nav className="ontsep2-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="ontsep2-brand">Φ · Philosophia</Link>
        <span>II · IX · MMXXVI</span>
      </nav>

      <header className="ontsep2-hero">
        <div className="ontsep2-stars" aria-hidden="true" />
        <div className="ontsep2-ghost" aria-hidden="true">A → B</div>
        <div className="ontsep2-hero-inner">
          <div>
            <p className="ontsep2-kicker">FI190 · Ontología II · 2 de septiembre</p>
            <h1>
              Experiencia,
              <em>causalidad y realidad</em>
            </h1>
            <p className="ontsep2-lead">
              Locke, Berkeley, Hume y Kant reconstruyen una crisis progresiva:
              cuanto más radicalmente hacemos depender el conocimiento de la
              experiencia, más difícil resulta explicar universalidad, necesidad
              y objetividad.
            </p>

            <div className="ontsep2-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                ¿Cómo puede existir conocimiento universal y necesario si todo
                conocimiento comienza con experiencias particulares?
              </strong>
            </div>
          </div>

          <aside className="ontsep2-axis">
            <span>SECUENCIA</span>
            {[
              ['LOCKE', 'experiencia'],
              ['BERKELEY', 'percepción'],
              ['HUME', 'probabilidad'],
              ['KANT', 'sintético a priori'],
            ].map(([a, b], i) => (
              <div key={a} className={i === 3 ? 'active' : ''}>
                <b>{a}</b><small>{b}</small>
              </div>
            ))}
          </aside>
        </div>
      </header>

      <div className="ontsep2-layout">
        <aside className="ontsep2-index">
          <p>Index ontologicus</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ontsep2-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Historia problematis">
              Del origen del conocimiento al problema de la ciencia
            </Heading>

            <div className="ontsep2-thinker-tabs">
              {thinkers.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={thinker.id === item.id ? 'active' : ''}
                  onClick={() => setThinkerId(item.id)}
                >
                  <span>{item.name}</span>
                  <strong>{item.thesis}</strong>
                </button>
              ))}
            </div>

            <article className="ontsep2-focus">
              <span>{thinker.name}</span>
              <h3>{thinker.thesis}</h3>
              <div className="ontsep2-flow">
                {thinker.path.map((item, index) => (
                  <div key={item}>
                    <strong>{item}</strong>
                    {index < thinker.path.length - 1 && <b>→</b>}
                  </div>
                ))}
              </div>
              <p>{thinker.problem}</p>
            </article>
          </section>

          <section id="origen">
            <Heading n="01" eyebrow="Ratio ↔ experientia">
              Dos respuestas clásicas al origen del conocimiento
            </Heading>

            <div className="ontsep2-dual">
              <article>
                <span>RACIONALISMO</span>
                <h3>razón como fundamento</h3>
                <p>Modelo: matemáticas.</p>
                <strong>universal · necesario · demostrable</strong>
              </article>
              <b>VS.</b>
              <article className="core">
                <span>EMPIRISMO</span>
                <h3>experiencia como origen</h3>
                <p>Locke · Berkeley · Hume.</p>
                <strong>sensación · percepción · observación</strong>
              </article>
            </div>

            <div className="ontsep2-callout">
              <span>TENSIÓN</span>
              <strong>
                El racionalismo explica mejor la necesidad; el empirismo explica
                mejor nuestro contacto con el mundo. Kant intentará conservar
                ambos elementos sin reducir uno al otro.
              </strong>
            </div>
          </section>

          <section id="locke">
            <Heading n="02" eyebrow="John Locke">
              La experiencia produce ideas, pero no todas las cualidades parecen iguales
            </Heading>

            <div className="ontsep2-locke-chain">
              <span>EXPERIENCIA</span><b>→</b>
              <span>SENSACIONES</span><b>→</b>
              <span>IDEAS</span><b>→</b>
              <strong>CONOCIMIENTO</strong>
            </div>

            <div className="ontsep2-toggle">
              {lockeQualities.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={quality.id === item.id ? 'active' : ''}
                  onClick={() => setQualityId(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <article className="ontsep2-quality">
              <span>{quality.title}</span>
              <h3>{quality.examples}</h3>
              <p>{quality.thesis}</p>
            </article>

            <div className="ontsep2-coin">
              <span>MONEDA</span>
              <strong>redondez</strong>
              <b>↔</b>
              <small>¿propiedad del objeto o modo de percepción?</small>
            </div>
          </section>

          <section id="berkeley">
            <Heading n="03" eyebrow="Esse est percipi">
              Berkeley elimina la seguridad de una materia detrás de las percepciones
            </Heading>

            <div className="ontsep2-toggle">
              <button className={berkeleyView === 'apple' ? 'active' : ''} onClick={() => setBerkeleyView('apple')}>La manzana</button>
              <button className={berkeleyView === 'blind' ? 'active' : ''} onClick={() => setBerkeleyView('blind')}>Persona ciega</button>
              <button className={berkeleyView === 'matter' ? 'active' : ''} onClick={() => setBerkeleyView('matter')}>Materia</button>
            </div>

            <div className="ontsep2-berkeley">
              {berkeleyView === 'apple' && (
                <>
                  <span>EXPERIMENTO CONCEPTUAL</span>
                  <h3>Quite color, sabor, olor, forma y textura.</h3>
                  <p>¿Qué queda de la manzana que pueda ser percibido?</p>
                  <strong>objeto = conjunto de cualidades percibidas</strong>
                </>
              )}
              {berkeleyView === 'blind' && (
                <>
                  <span>TACTO ↔ VISTA</span>
                  <h3>Conocer por tacto no garantiza reconocimiento visual inmediato.</h3>
                  <p>Cada modalidad sensorial organiza la información de manera particular.</p>
                  <strong>percibir ≠ copiar pasivamente una realidad ya dada</strong>
                </>
              )}
              {berkeleyView === 'matter' && (
                <>
                  <span>CRÍTICA ONTOLÓGICA</span>
                  <h3>¿Por qué postular una sustancia material detrás de las cualidades?</h3>
                  <p>La causa material aristotélica pierde aquí su necesidad explicativa.</p>
                  <strong>idealismo: lo inmediatamente dado son ideas / percepciones</strong>
                </>
              )}
            </div>

            <div className="ontsep2-esse">
              <span>ESSE</span><b>=</b><strong>PERCIPI</strong>
              <small>ser es ser percibido</small>
            </div>
          </section>

          <section id="exterior">
            <Heading n="04" eyebrow="Mundus exterior">
              ¿Qué garantiza que nuestras representaciones correspondan con un mundo?
            </Heading>

            <div className="ontsep2-toggle">
              <button className={worldView === 'locke' ? 'active' : ''} onClick={() => setWorldView('locke')}>Locke</button>
              <button className={worldView === 'descartes' ? 'active' : ''} onClick={() => setWorldView('descartes')}>Descartes</button>
              <button className={worldView === 'berkeley' ? 'active' : ''} onClick={() => setWorldView('berkeley')}>Berkeley</button>
              <button className={worldView === 'matrix' ? 'active' : ''} onClick={() => setWorldView('matrix')}>Matrix</button>
            </div>

            <div className="ontsep2-world">
              {worldView === 'locke' && <>
                <span>LOCKE</span><div className="ontsep2-line"><b>objeto exterior</b><i>→</i><b>percepción</b><i>→</i><strong>idea</strong></div>
              </>}
              {worldView === 'descartes' && <>
                <span>DESCARTES</span><div className="ontsep2-line"><b>sujeto</b><i>→</i><b>representación</b><i>→</i><strong>Dios garantiza correspondencia</strong><i>→</i><b>mundo</b></div>
              </>}
              {worldView === 'berkeley' && <>
                <span>BERKELEY</span><div className="ontsep2-line"><b>percepción</b><i>→</i><strong>Dios</strong><i>→</i><b>orden y estabilidad</b></div>
              </>}
              {worldView === 'matrix' && <>
                <span>MATRIX</span><div className="ontsep2-line"><b>experiencia coherente</b><i>≠</i><strong>mundo que creemos percibir</strong></div>
              </>}
            </div>

            <div className="ontsep2-solipsism">
              <span>CONCIENCIA</span><b>→</b><span>REPRESENTACIONES</span>
              <i>pero</i>
              <strong>¿CÓMO VERIFICAR EL MUNDO EXTERNO?</strong>
            </div>
          </section>

          <section id="mediacion">
            <Heading n="05" eyebrow="Media · algorithmus · AI">
              El problema clásico reaparece cuando nuestras representaciones están mediadas
            </Heading>

            <div className="ontsep2-toggle">
              {[
                ['algorithm', 'Algoritmo'],
                ['social', 'Redes sociales'],
                ['ai', 'Inteligencia artificial'],
              ].map(([id, label]) => (
                <button key={id} className={mediaView === id ? 'active' : ''} onClick={() => setMediaView(id)}>
                  {label}
                </button>
              ))}
            </div>

            <div className="ontsep2-media">
              <span>{mediaView === 'algorithm' ? 'ALGORITMO' : mediaView === 'social' ? 'RED SOCIAL' : 'IA'}</span>
              <h3>Mundo → intermediario → representación recibida</h3>
              <p>
                El sujeto puede creer que conoce directamente la realidad cuando
                en realidad recibe una selección, organización o filtrado previo.
              </p>
            </div>

            <div className="ontsep2-critical">
              <span>PENSAMIENTO CRÍTICO</span>
              <strong>contrastar · investigar · buscar otras fuentes · analizar intereses · examinar presupuestos</strong>
            </div>

            <div className="ontsep2-warning">
              <span>IA ≠ ORÁCULO</span>
              <p>
                Puede equivocarse, reproducir sesgos y presentar información falsa
                con apariencia de seguridad. La respuesta debe evaluarse críticamente.
              </p>
            </div>
          </section>

          <section id="hume">
            <Heading n="06" eyebrow="David Hume">
              La experiencia produce regularidad, no conexión necesaria
            </Heading>

            <div className="ontsep2-hume-tabs">
              {humeSteps.map(([title], index) => (
                <button
                  type="button"
                  key={title}
                  className={humeIndex === index ? 'active' : ''}
                  onClick={() => setHumeIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{title}</strong>
                </button>
              ))}
            </div>

            <article className="ontsep2-focus">
              <span>PASO {String(humeIndex + 1).padStart(2, '0')}</span>
              <h3>{humeSteps[humeIndex][0]}</h3>
              <p>{humeSteps[humeIndex][1]}</p>
            </article>

            <div className="ontsep2-causality">
              <span>VEMOS</span>
              <strong>A → B · A → B · A → B</strong>
              <b>pero no vemos</b>
              <strong>CONEXIÓN NECESARIA</strong>
            </div>

            <div className="ontsep2-chicken">
              <span>RUSSELL · GALLINA</span>
              <strong>
                Que alguien haya traído comida todos los días no demuestra que
                mañana volverá para alimentar y no para matar.
              </strong>
            </div>
          </section>

          <section id="ciencia">
            <Heading n="07" eyebrow="Universale · necessarium">
              Hume vuelve problemática la pretensión científica de necesidad
            </Heading>

            <div className="ontsep2-toggle">
              <button className={scienceView === 'gravity' ? 'active' : ''} onClick={() => setScienceView('gravity')}>Gravedad</button>
              <button className={scienceView === 'newton' ? 'active' : ''} onClick={() => setScienceView('newton')}>Newton</button>
              <button className={scienceView === 'induction' ? 'active' : ''} onClick={() => setScienceView('induction')}>Inducción</button>
            </div>

            <div className="ontsep2-science">
              {scienceView === 'gravity' && <>
                <span>GRAVEDAD</span><h3>“Hasta ahora los cuerpos han caído.”</h3><p>Eso no equivale lógicamente a “todo cuerpo caerá necesariamente siempre”.</p>
              </>}
              {scienceView === 'newton' && <>
                <span>FÍSICA NEWTONIANA</span><h3>Las leyes pretenden universalidad y necesidad.</h3><p>Hume obliga a preguntar de dónde proviene esa necesidad.</p>
              </>}
              {scienceView === 'induction' && <>
                <span>INDUCCIÓN</span><h3>casos particulares → generalización probable</h3><p>Probabilidad no equivale a necesidad lógica.</p>
              </>}
            </div>

            <div className="ontsep2-two-concepts">
              <article><span>UNIVERSALIDAD</span><strong>vale para todos los casos</strong></article>
              <article><span>NECESIDAD</span><strong>no puede ocurrir de otra manera</strong></article>
            </div>
          </section>

          <section id="kant">
            <Heading n="08" eyebrow="Immanuel Kant">
              Kant intenta explicar cómo la ciencia puede ser informativa y necesaria
            </Heading>

            <div className="ontsep2-kant-grid">
              {kantGrid.map(([title, thesis, note], index) => (
                <button
                  type="button"
                  key={title}
                  className={kantCell === index ? 'active' : ''}
                  onClick={() => setKantCell(index)}
                >
                  <span>{title}</span>
                  <strong>{thesis}</strong>
                  <small>{note}</small>
                </button>
              ))}
            </div>

            <article className="ontsep2-kant-focus">
              <span>{kantGrid[kantCell][0]}</span>
              <h3>{kantGrid[kantCell][1]}</h3>
              <p>{kantGrid[kantCell][2]}</p>
            </article>

            <div className="ontsep2-synthetic">
              <span>SINTÉTICO</span><b>+</b><span>A PRIORI</span><b>=</b>
              <strong>AMPLÍA EL CONOCIMIENTO + UNIVERSAL / NECESARIO</strong>
            </div>

            <div className="ontsep2-kant-question">
              <span>PREGUNTA DE LA CRÍTICA DE LA RAZÓN PURA</span>
              <strong>¿Cómo son posibles los juicios sintéticos a priori?</strong>
            </div>
          </section>

          <section id="ontologia">
            <Heading n="09" eyebrow="Ontologia">
              La epistemología de la clase contiene preguntas ontológicas de fondo
            </Heading>

            <div className="ontsep2-ontology-grid">
              {[
                '¿qué significa que algo exista?',
                '¿existe materia independiente de la percepción?',
                '¿qué relación existe entre realidad y representación?',
                '¿la causalidad pertenece a las cosas o a nuestra mente?',
                '¿cómo es la realidad independientemente del sujeto?',
                '¿podemos conocerla tal como es?',
              ].map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                </article>
              ))}
            </div>

            <div className="ontsep2-final">
              <span>LOCKE</span><b>→</b>
              <span>BERKELEY</span><b>→</b>
              <span>HUME</span><b>→</b>
              <strong>KANT</strong>
            </div>
          </section>

          <section id="tarea">
            <Heading n="10" eyebrow="Proxima lectio">
              Comenzar la Crítica de la razón pura
            </Heading>

            <div className="ontsep2-task">
              <div className="ontsep2-task-date">
                <strong>VII</strong>
                <span>IX · MMXXVI</span>
                <small>12:55</small>
              </div>

              <div>
                <span>LECTURA · KANT</span>
                <h3>Los dos prólogos de la Crítica de la razón pura</h3>
                <p>
                  Para el lunes: leer los dos prólogos o prefacios. Después,
                  continuar con la Introducción, aproximadamente unas diez páginas
                  según la edición.
                </p>
              </div>

              <Link to="/tareas">Ver en calendario →</Link>
            </div>

            <div className="ontsep2-next">
              <span>DESPUÉS</span>
              <strong>Introducción de la Crítica de la razón pura</strong>
              <p>
                La siguiente etapa será entender cómo Kant responde a Hume y
                formula la posibilidad de los juicios sintéticos a priori.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="ontsep2-footer">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <span>Experientia · Causalitas · A priori</span>
        <span>II · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
