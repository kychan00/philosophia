import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  transformationSchema,
  explanationResponsibilitySchema,
  archaicPractices,
} from '../data/ethicsClass25Aug'
import './EthicsClass25Aug.css'

const sections = [
  ['00', 'problema', 'Problema'],
  ['01', 'purificacion', 'Purificación'],
  ['02', 'examen', 'Examen de sí'],
  ['03', 'signos', 'Sueños, oráculos y manía'],
  ['04', 'responsabilidad', 'Explicación y responsabilidad'],
  ['05', 'socrates', 'Sócrates'],
  ['06', 'transicion', 'Hacia la ética'],
  ['07', 'lectura', 'Lectura'],
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function Heading({ number, eyebrow, children }) {
  return (
    <div className="ethos25-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsClass25Aug() {
  const [practiceId, setPracticeId] = useState('katharsis')
  const practice = useMemo(
    () => archaicPractices.find((item) => item.id === practiceId) || archaicPractices[1],
    [practiceId],
  )

  return (
    <main className="ethos25-page">
      <div className="ethos25-meander" aria-hidden="true" />

      <nav className="ethos25-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethos25-brand"><span>Φ</span> Philosophia</Link>
        <span>XXV · VIII · MMXXVI</span>
      </nav>

      <header className="ethos25-hero">
        <div className="ethos25-columns" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="ethos25-hero-inner">
          <div className="ethos25-hero-copy">
            <p className="ethos25-kicker">ETHOS · Clase III · Ética · Escuelas clásicas</p>
            <div className="ethos25-medallion">III</div>

            <p className="ethos25-overline">
              25 de agosto de 2026 · Tercera sesión documentada
            </p>

            <h1>
              De la purificación
              <em>a la ética humana</em>
            </h1>

            <p className="ethos25-lead">
              La sesión reconstruye cómo falta, purificación, sacrificio,
              oráculo, sueño y manía contienen problemas que después son
              interiorizados como examen de sí, responsabilidad y deliberación
              sobre la propia vida.
            </p>

            <div className="ethos25-question" id="problema">
              <span>PROBLEMA DE LA SESIÓN</span>
              <strong>
                ¿Cómo pasa la orientación práctica de “qué quieren los dioses de
                mí” a “cómo debo vivir y responder racionalmente por mis actos”?
              </strong>
            </div>
          </div>

          <figure className="ethos25-figure">
            <div className="ethos25-figure-frame">
              <img
                src={`${import.meta.env.BASE_URL}images/ethics/open/2026-08-25/orphic-gold-tablet.jpg`}
                alt="Laminilla órfica de oro de Hipponion con inscripción griega"
              />
            </div>
            <figcaption>
              <span>IMAGO III · ORPHICA</span>
              <strong>Laminilla órfica de Hipponion</strong>
              <small>
                Siglo IV a. C. · Museo Archeologico Statale Vito Capialbi · dominio público
              </small>
            </figcaption>
          </figure>
        </div>
      </header>

      <div className="ethos25-layout">
        <aside className="ethos25-index">
          <p>Index lectionis</p>
          {sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{number}</span>
              <b>{label}</b>
            </button>
          ))}
        </aside>

        <article className="ethos25-article">
          <section id="purificacion">
            <Heading number="01" eyebrow="Miasma · Katharsis">
              La falta puede sentirse como mancha que exige restauración
            </Heading>

            <p className="ethos25-prose">
              La clase parte de prácticas religiosas arcaicas en las que una
              falta puede alterar la relación con lo divino, con la comunidad y
              consigo mismo. Purificación, expiación y sacrificio aparecen como
              respuestas orientadas a restablecer una condición adecuada.
            </p>

            <div className="ethos25-tabs" role="tablist" aria-label="Prácticas arcaicas">
              {archaicPractices.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={practice.id === item.id ? 'active' : ''}
                  onClick={() => setPracticeId(item.id)}
                  aria-pressed={practice.id === item.id}
                >
                  <span>{item.greek}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <article className="ethos25-focus">
              <span>{practice.greek}</span>
              <h3>{practice.title}</h3>
              <p>{practice.body}</p>
            </article>

            <div className="ethos25-cycle">
              <span>falta</span><b>→</b>
              <span>purificación / sacrificio</span><b>→</b>
              <span>¿basta?</span><b>→</b>
              <strong>posible repetición</strong>
            </div>

            <aside className="ethos25-note">
              <span>PUNTO DE LA CLASE</span>
              <p>
                El problema aparece cuando el rito no ofrece certeza suficiente
                de haber restablecido la relación. La repetición misma puede
                mostrar esa incertidumbre.
              </p>
            </aside>
          </section>

          <section id="examen">
            <Heading number="02" eyebrow="Examen vitae">
              La revisión ritual empieza a convertirse en examen de la propia vida
            </Heading>

            <p className="ethos25-prose">
              Las prácticas de memoria y revisión antes de dormir conservan un
              trasfondo purificatorio, pero anticipan un cambio decisivo: la
              propia conducta se vuelve objeto de recuerdo, juicio y corrección.
            </p>

            <div className="ethos25-night">
              <article><span>I</span><strong>¿Qué hice?</strong><p>Reconstruir las acciones.</p></article>
              <article><span>II</span><strong>¿Qué omití?</strong><p>Examinar también lo no realizado.</p></article>
              <article><span>III</span><strong>¿Qué pensé?</strong><p>Hacer visible la orientación interior.</p></article>
              <article><span>IV</span><strong>¿Qué corregiré?</strong><p>Convertir el examen en práctica futura.</p></article>
            </div>

            <div className="ethos25-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos25-schema">
              <AnimatedConceptSchema schema={transformationSchema} />
            </div>

            <p className="ethos25-schema-caption">
              El esquema visualiza la transformación documentada en la sesión:
              falta y purificación no desaparecen simplemente; se desplazan
              hacia examen de sí, autoría y responsabilidad.
            </p>

            <div className="ethos25-apology">
              <span>DISCULPA</span>
              <div>
                <article>
                  <strong>Reconocer al otro</strong>
                  <p>La disculpa puede orientarse hacia el daño y la reparación.</p>
                </article>
                <article>
                  <strong>Aliviar mi culpa</strong>
                  <p>También puede convertir al otro en medio para recuperar mi tranquilidad.</p>
                </article>
              </div>
            </div>
          </section>

          <section id="signos">
            <Heading number="03" eyebrow="Oneiros · Manteia · Mania">
              Signos e inspiración exigen interpretación
            </Heading>

            <p className="ethos25-prose">
              Sueños y oráculos pueden funcionar como medios de comunicación
              divina, pero el signo no llega con una regla inequívoca. Su sentido
              puede aparecer sólo después del acontecimiento. La manía, por su
              parte, puede interpretarse como posesión o inspiración: poesía,
              profecía, amor y éxtasis aparecen como formas de estar “fuera de sí”.
            </p>

            <div className="ethos25-signs">
              <article>
                <span>ὌΝΕΙΡΟΣ</span>
                <strong>Sueño</strong>
                <p>imagen o escena cuyo sentido debe reconstruirse</p>
              </article>
              <b>→</b>
              <article>
                <span>ἙΡΜΗΝΕΙΑ</span>
                <strong>Interpretación</strong>
                <p>se buscan claves para orientar una decisión</p>
              </article>
              <b>→</b>
              <article>
                <span>ΠΡΑΞΙΣ</span>
                <strong>Acción</strong>
                <p>la lectura puede influir en lo que se hace</p>
              </article>
              <b>→</b>
              <article>
                <span>ὙΣΤΕΡΟΝ</span>
                <strong>A posteriori</strong>
                <p>el acontecimiento reorganiza el sentido del signo</p>
              </article>
            </div>

            <div className="ethos25-mania">
              <span>MANÍA</span>
              <strong>poesía · profecía · eros · éxtasis</strong>
              <p>
                La alteración no se trata aquí automáticamente como patología:
                la clase reconstruye su función religiosa y comunitaria.
              </p>
            </div>
          </section>

          <section id="responsabilidad">
            <Heading number="04" eyebrow="Auctor actionis">
              Explicar una acción no equivale a justificarla
            </Heading>

            <p className="ethos25-prose">
              La cuestión ética aparece cuando dioses, destino, furia,
              embriaguez o posesión dejan de bastar como explicación total. Un
              estado alterado puede ayudar a comprender lo ocurrido sin borrar
              automáticamente la autoría y las consecuencias.
            </p>

            <div className="ethos25-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos25-schema is-compact">
              <AnimatedConceptSchema schema={explanationResponsibilitySchema} />
            </div>

            <div className="ethos25-formula">
              <span>estado alterado</span><b>→</b>
              <span>explicación</span><b>≠</b>
              <strong>justificación automática</strong>
            </div>
          </section>

          <section id="socrates">
            <Heading number="05" eyebrow="Socrates · Bios">
              Filosofía como forma de vida
            </Heading>

            <p className="ethos25-prose">
              Sócrates concentra varios desplazamientos trabajados en la clase:
              examen de la vida, fidelidad a principios, deber y negativa a
              responder a una injusticia con otra injusticia.
            </p>

            <div className="ethos25-socrates">
              <article><span>CONDENA</span><strong>muerte</strong><p>La muerte no se identifica automáticamente con el peor mal.</p></article>
              <b>→</b>
              <article><span>POSIBILIDAD</span><strong>huir</strong><p>La salida existe como posibilidad práctica.</p></article>
              <b>→</b>
              <article className="active"><span>DECISIÓN</span><strong>no huir</strong><p>No responder a una posible injusticia con otra.</p></article>
              <b>→</b>
              <article><span>FORMA DE VIDA</span><strong>coherencia</strong><p>Mantener principios racionalmente asumidos.</p></article>
            </div>
          </section>

          <section id="transicion">
            <Heading number="06" eyebrow="Humanizatio">
              De la purificación religiosa al examen racional de la vida
            </Heading>

            <div className="ethos25-transform">
              <div>
                <span>RELIGIÓN ARCAICA</span>
                <strong>“debo purificarme porque pude ofender a los dioses”</strong>
                <p>falta → rito → purificación → restablecimiento</p>
              </div>
              <b>⟶</b>
              <div>
                <span>ÉTICA FILOSÓFICA</span>
                <strong>“debo examinar mi conducta porque quiero vivir racionalmente”</strong>
                <p>examen → deliberación → responsabilidad → vida</p>
              </div>
            </div>

            <aside className="ethos25-note">
              <span>MATIZ IMPORTANTE</span>
              <p>
                La sesión no presenta una ruptura instantánea entre mito y
                filosofía. Parménides sirve precisamente para mostrar que formas
                religiosas heredadas pueden convivir con razonamiento filosófico.
              </p>
            </aside>
          </section>

          <section id="lectura">
            <Heading number="07" eyebrow="Lectio">
              Mondolfo entra al curso como lectura de la conciencia moral
            </Heading>

            <div className="ethos25-reading">
              <span>LECTURA REGISTRADA</span>
              <strong>Rodolfo Mondolfo · La conciencia moral de Homero a Demócrito y Epicuro</strong>
              <p>
                La lectura queda vinculada a la tarea registrada del 25 de
                agosto. A partir de aquí el curso dispone de un eje textual
                explícito para estudiar la formación histórica de la conciencia moral.
              </p>
              <Link to="/tareas/etica/mondolfo-conciencia-moral">
                Abrir tarea de Mondolfo ↗
              </Link>
            </div>

            <div className="ethos25-source-note">
              <span>FUENTE DOCUMENTAL</span>
              <p>
                La página reorganiza únicamente los núcleos documentados en la
                sesión y en la nota del vault: purificación, examen, disculpa,
                sueños y oráculos, manía, responsabilidad, Sócrates y transición
                hacia una ética filosófica.
              </p>
            </div>
          </section>
        </article>
      </div>

      <section className="ethos25-image-source">
        <div>
          <span>IMAGEN CURATORIAL</span>
          <h2>Laminilla órfica de Hipponion</h2>
          <p>
            Se selecciona porque el orfismo y la purificación aparecen
            efectivamente en esta clase. La pieza materializa una tradición
            religiosa que vincula alma, muerte, memoria e instrucciones rituales.
          </p>
        </div>
        <dl>
          <div><dt>Objeto</dt><dd>Laminilla órfica de oro de Hipponion</dd></div>
          <div><dt>Fecha</dt><dd>siglo IV a. C.</dd></div>
          <div><dt>Institución</dt><dd>Museo Archeologico Statale Vito Capialbi</dd></div>
          <div><dt>Autoría</dt><dd>desconocida</dd></div>
          <div><dt>Derechos</dt><dd>Public Domain Mark 1.0</dd></div>
        </dl>
        <a
          href="https://commons.wikimedia.org/wiki/File:Orphic_Gold_Tablet_(Hipponion-Museo_Archeologico_Statale_Capialbi,_Vibo_Valentia).jpg"
          target="_blank"
          rel="noreferrer"
        >
          Ver ficha de procedencia y derechos ↗
        </a>
      </section>

      <footer className="ethos25-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>ETHOS · De la purificación a la ética humana</span>
        <span>25 · VIII · 2026</span>
      </footer>

      <div className="ethos25-meander" aria-hidden="true" />
    </main>
  )
}
