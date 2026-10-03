import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  shameAutonomySchema,
  emotionDeliberationSchema,
  democritusMaxims,
  deliberationCases,
} from '../data/ethicsClass27Aug'
import './EthicsClass27Aug.css'

const sections = [
  ['00', 'problema', 'Problema'],
  ['01', 'emocion', 'Emoción y deliberación'],
  ['02', 'maximas', 'Demócrito y máximas'],
  ['03', 'verguenza', 'Vergüenza externa / interna'],
  ['04', 'dignidad', 'Dignidad y vulnerabilidad'],
  ['05', 'conciencia', 'Conciencia y autonomía'],
  ['06', 'reparacion', 'Reparación'],
  ['07', 'tarea', 'Tarea'],
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function Heading({ number, eyebrow, children }) {
  return (
    <div className="ethos27-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsClass27Aug() {
  const [maximId, setMaximId] = useState('alone')
  const maxim = useMemo(
    () => democritusMaxims.find((item) => item.id === maximId) || democritusMaxims[1],
    [maximId],
  )

  return (
    <main className="ethos27-page">
      <div className="ethos27-meander" aria-hidden="true" />

      <nav className="ethos27-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethos27-brand"><span>Φ</span> Philosophia</Link>
        <span>XXVII · VIII · MMXXVI</span>
      </nav>

      <header className="ethos27-hero">
        <div className="ethos27-columns" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="ethos27-hero-inner">
          <div className="ethos27-hero-copy">
            <p className="ethos27-kicker">ETHOS · Clase IV · Ética · Escuelas clásicas</p>
            <div className="ethos27-medallion">IV</div>

            <p className="ethos27-overline">
              27 de agosto de 2026 · Cuarta sesión documentada
            </p>

            <h1>
              Vergüenza,
              <em>conciencia y máxima</em>
            </h1>

            <p className="ethos27-lead">
              La sesión estudia cómo una emoción puede entrar en deliberación,
              cómo una máxima moral orienta decisiones concretas y cómo la
              vergüenza deja de depender sólo de la mirada pública para
              convertirse en juicio sobre la propia acción.
            </p>

            <div className="ethos27-question" id="problema">
              <span>PROBLEMA DE LA SESIÓN</span>
              <strong>
                ¿Cómo pasamos de actuar por miedo al “qué dirán” a poder juzgar
                racionalmente nuestras acciones incluso cuando nadie nos observa?
              </strong>
            </div>
          </div>

          <figure className="ethos27-figure">
            <div className="ethos27-figure-frame">
              <img
                src={`${import.meta.env.BASE_URL}images/ethics/open/2026-08-27/democritus-abdera.jpg`}
                alt="Retrato grabado de Demócrito de Abdera"
              />
            </div>
            <figcaption>
              <span>IMAGO IV · DEMOCRITUS</span>
              <strong>Demócrito de Abdera</strong>
              <small>
                Rijksmuseum · 1768–1817 · CC0 1.0
              </small>
            </figcaption>
          </figure>
        </div>
      </header>

      <div className="ethos27-layout">
        <aside className="ethos27-index">
          <p>Index lectionis</p>
          {sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{number}</span>
              <b>{label}</b>
            </button>
          ))}
        </aside>

        <article className="ethos27-article">
          <section id="emocion">
            <Heading number="01" eyebrow="Pathos et deliberatio">
              La emoción puede motivar sin sustituir la deliberación
            </Heading>

            <p className="ethos27-prose">
              El enojo puede reconocer una injusticia y suministrar energía para
              actuar. El problema aparece cuando la emoción ocupa todo el lugar
              y deja de valorar alternativas, consecuencias o razones.
            </p>

            <div className="ethos27-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos27-schema">
              <AnimatedConceptSchema schema={emotionDeliberationSchema} />
            </div>

            <p className="ethos27-schema-caption">
              El esquema conserva la secuencia de la nota: emoción → motivación
              → opciones → deliberación → decisión → acción.
            </p>
          </section>

          <section id="maximas">
            <Heading number="02" eyebrow="Democritus · Sententiae">
              La máxima como instrumento breve de orientación práctica
            </Heading>

            <p className="ethos27-prose">
              Demócrito aparece en la sesión no sólo como atomista, sino como
              autor de sentencias morales breves y memorizables. La máxima
              funciona cuando deja de ser una frase abstracta y entra en una
              situación donde hay que decidir qué hacer.
            </p>

            <div className="ethos27-tabs" role="tablist" aria-label="Máximas trabajadas en clase">
              {democritusMaxims.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={maxim.id === item.id ? 'active' : ''}
                  onClick={() => setMaximId(item.id)}
                  aria-pressed={maxim.id === item.id}
                >
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <article className="ethos27-maxim">
              <span>FORMULACIÓN APROXIMADA TRABAJADA EN CLASE</span>
              <blockquote>“{maxim.text}”</blockquote>
              <p>{maxim.use}</p>
              <div>
                <b>situación</b><i>→</i>
                <b>máxima</b><i>→</i>
                <b>deliberación</b><i>→</i>
                <strong>decisión</strong>
              </div>
            </article>
          </section>

          <section id="verguenza">
            <Heading number="03" eyebrow="Aidōs">
              De la vergüenza pública a la vergüenza ante uno mismo
            </Heading>

            <p className="ethos27-prose">
              La clase distingue dos formas de regulación. Una depende de la
              reputación y de la mirada de la comunidad; otra aparece cuando la
              persona puede reconocer una acción como indigna aunque nadie la
              haya visto.
            </p>

            <div className="ethos27-shame-pair">
              <article>
                <span>VERGÜENZA EXTERNA</span>
                <strong>“¿qué dirán de mí?”</strong>
                <p>honor · reputación · papel social · vigilancia</p>
              </article>
              <b>⟶</b>
              <article className="active">
                <span>VERGÜENZA INTERNA</span>
                <strong>“aunque nadie me vea, yo sé lo que hice”</strong>
                <p>reconocimiento · juicio propio · responsabilidad</p>
              </article>
            </div>

            <aside className="ethos27-note">
              <span>PUNTO DE LA CLASE</span>
              <p>
                Interiorizar una norma no basta por sí solo: una conciencia puede
                estar mal formada. La sesión exige distinguir daño, indignidad,
                obligación, abuso y presión social injustificada.
              </p>
            </aside>
          </section>

          <section id="dignidad">
            <Heading number="04" eyebrow="Dignitas et vulnerabilitas">
              La asimetría de poder puede volver más grave una acción
            </Heading>

            <p className="ethos27-prose">
              Muchas acciones viles no son sólo “malas” en abstracto: degradan
              al otro y explotan una posición de fuerza, autoridad o dependencia.
              La dignidad y la vulnerabilidad ponen límites al uso de otras
              personas como medios.
            </p>

            <div className="ethos27-power">
              <div>
                <span>PODER / FUERZA</span>
                <strong>autoridad · posición superior</strong>
              </div>
              <b>+</b>
              <div>
                <span>VULNERABILIDAD</span>
                <strong>dependencia · fragilidad</strong>
              </div>
              <b>→</b>
              <div className="active">
                <span>ABUSO</span>
                <strong>humillación · daño · degradación</strong>
              </div>
            </div>

            <div className="ethos27-cases">
              {deliberationCases.map((item) => (
                <article key={item.id}>
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="conciencia">
            <Heading number="05" eyebrow="Testis interior">
              La conciencia sustituye la vigilancia sólo si aprende a deliberar
            </Heading>

            <p className="ethos27-prose">
              La madurez moral no consiste simplemente en llevar al interior la
              policía o la opinión pública. El juicio propio tiene que poder
              revisar críticamente aquello que la comunidad aprueba o condena.
            </p>

            <div className="ethos27-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos27-schema is-compact">
              <AnimatedConceptSchema schema={shameAutonomySchema} />
            </div>

            <div className="ethos27-three">
              <article>
                <span>NO BASTA</span>
                <strong>que la sociedad me condene</strong>
                <p>La presión social puede ser injusta.</p>
              </article>
              <article>
                <span>NO BASTA</span>
                <strong>que yo me sienta tranquilo</strong>
                <p>La conciencia también puede estar mal formada.</p>
              </article>
              <article className="active">
                <span>HACE FALTA</span>
                <strong>deliberar y justificar</strong>
                <p>¿Hubo daño, abuso, indignidad u obligación incumplida?</p>
              </article>
            </div>
          </section>

          <section id="reparacion">
            <Heading number="06" eyebrow="Reparatio">
              Reconocer una falta puede abrir reparación y reintegración
            </Heading>

            <p className="ethos27-prose">
              Arrepentimiento, disculpa y reparación no borran automáticamente
              consecuencias jurídicas. La sesión distingue asumir la
              responsabilidad de fijar para siempre a una persona en una
              identidad única de “criminal”.
            </p>

            <div className="ethos27-repair">
              <span>reconocer</span><b>→</b>
              <span>arrepentirse</span><b>→</b>
              <span>disculparse</span><b>→</b>
              <span>reparar</span><b>→</b>
              <strong>reintegrar</strong>
            </div>
          </section>

          <section id="tarea">
            <Heading number="07" eyebrow="Praxis">
              Aplicar una máxima moral a un caso concreto
            </Heading>

            <p className="ethos27-prose">
              La tarea convierte la máxima en herramienta de deliberación. Hay
              que escoger una sentencia trabajada en clase y construir un caso
              donde ayude a justificar una decisión concreta.
            </p>

            <div className="ethos27-task">
              <span>TAREA REGISTRADA</span>
              <strong>Máxima moral + caso concreto</strong>
              <div>
                <p><b>1.</b> Elegir una máxima.</p>
                <p><b>2.</b> Describir una situación concreta.</p>
                <p><b>3.</b> Identificar el problema moral.</p>
                <p><b>4.</b> Aplicar la máxima a la deliberación.</p>
                <p><b>5.</b> Justificar la decisión.</p>
              </div>
              <Link to="/tareas">Ver en tareas →</Link>
            </div>

            <div className="ethos27-source-note">
              <span>FUENTE DOCUMENTAL</span>
              <p>
                La página conserva los núcleos registrados de la sesión:
                emoción y razón, máximas de Demócrito, vergüenza externa e
                interna, dignidad, conciencia, reparación, reintegración y tarea.
              </p>
            </div>
          </section>
        </article>
      </div>

      <section className="ethos27-image-source">
        <div>
          <span>IMAGEN CURATORIAL</span>
          <h2>Demócrito de Abdera</h2>
          <p>
            El retrato se selecciona porque Demócrito es uno de los focos reales
            de esta sesión: sus máximas sirven como instrumentos de formación del
            carácter y de orientación práctica.
          </p>
        </div>
        <dl>
          <div><dt>Obra</dt><dd>Portret van Democritus van Abdera</dd></div>
          <div><dt>Fecha</dt><dd>1768–1817</dd></div>
          <div><dt>Institución</dt><dd>Rijksmuseum</dd></div>
          <div><dt>Derechos</dt><dd>CC0 1.0 / dominio público</dd></div>
        </dl>
        <a
          href="https://commons.wikimedia.org/wiki/File:Portret_van_Democritus_van_Abdera,_RP-P-1907-5356.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Ver ficha de procedencia y derechos ↗
        </a>
      </section>

      <footer className="ethos27-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>ETHOS · Vergüenza, conciencia y máxima</span>
        <span>27 · VIII · 2026</span>
      </footer>

      <div className="ethos27-meander" aria-hidden="true" />
    </main>
  )
}
