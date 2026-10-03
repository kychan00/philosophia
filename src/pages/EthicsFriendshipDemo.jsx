import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  friendshipDilemmaViews,
  friendshipKinds,
  friendshipKindsSchema,
  reciprocitySchema,
} from '../data/ethicsFriendshipDemo'
import './EthicsFriendshipDemo.css'

const sections = [
  ['00', 'problema', 'Problema de la sesión'],
  ['01', 'philia', 'Qué significa philia'],
  ['02', 'formas', 'Tres formas de amistad'],
  ['03', 'esquema', 'Esquema conceptual'],
  ['04', 'reciprocidad', 'Reciprocidad y tiempo'],
  ['05', 'otro-si', 'El amigo y el carácter'],
  ['06', 'dilema', 'Deliberación'],
  ['07', 'imagen', 'Imagen curatorial'],
  ['08', 'cierre', 'Cierre'],
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ethosFriendship-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsFriendshipDemo() {
  const [friendshipId, setFriendshipId] = useState('virtue')
  const [dilemmaId, setDilemmaId] = useState('good')

  const friendship = useMemo(
    () => friendshipKinds.find((item) => item.id === friendshipId) || friendshipKinds[2],
    [friendshipId],
  )

  const dilemma = useMemo(
    () =>
      friendshipDilemmaViews.find((item) => item.id === dilemmaId) ||
      friendshipDilemmaViews[1],
    [dilemmaId],
  )

  return (
    <main className="ethosFriendship-page">
      <div className="ethosFriendship-meander" aria-hidden="true" />

      <nav className="ethosFriendship-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethosFriendship-brand">
          <span>Φ</span>
          Philosophia
        </Link>
        <span>ETHOS · PROTOTYPUS</span>
      </nav>

      <div className="ethosFriendship-demo-warning" role="note">
        <strong>DEMO ETHOS</strong>
        <span>
          Página de prueba · no corresponde a una sesión real ni forma parte del
          registro académico del semestre.
        </span>
      </div>

      <header className="ethosFriendship-hero">
        <div className="ethosFriendship-columns" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
        <div className="ethosFriendship-pediment" aria-hidden="true" />
        <div className="ethosFriendship-ghost" aria-hidden="true">ΦΙΛΙΑ</div>

        <div className="ethosFriendship-hero-inner">
          <div className="ethosFriendship-hero-copy">
            <p className="ethosFriendship-kicker">
              ἦθος · φιλία · ἀρετή · εὐδαιμονία
            </p>

            <div className="ethosFriendship-medallion">Φ</div>

            <p className="ethosFriendship-overline">
              Clase demostrativa · Aristóteles · Ética a Nicómaco VIII–IX
            </p>

            <h1>
              La amistad
              <em>como práctica del bien</em>
            </h1>

            <p className="ethosFriendship-lead">
              Un prototipo para probar cómo una clase de Ética puede combinar
              lectura filosófica, imagen curatorial, deliberación, navegación
              editorial y esquemas conceptuales sin perder la identidad azul de
              ETHOS.
            </p>

            <div className="ethosFriendship-question">
              <span>PROBLEMA DE LA SESIÓN</span>
              <strong>
                ¿Puede llamarse amistad a cualquier vínculo que nos produce
                placer o utilidad, o una amistad plena exige querer el bien del
                otro por él mismo?
              </strong>
            </div>
          </div>

          <figure className="ethosFriendship-portrait">
            <div className="ethosFriendship-portrait-frame">
              <img
                src="/philosophia/images/ethics/demo-friendship/aristotle-bust.png"
                alt="Busto de Aristóteles sobre fondo oscuro"
              />
            </div>
            <figcaption>
              <span>IMAGO I · ARISTOTELES</span>
              <strong>Busto de Aristóteles</strong>
              <small>Alvaro Marques Hijazo · Wikimedia Commons · CC0 1.0</small>
            </figcaption>
          </figure>
        </div>
      </header>

      <div className="ethosFriendship-layout">
        <aside className="ethosFriendship-index">
          <p>Index lectionis</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>
              <b>{label}</b>
            </button>
          ))}
        </aside>

        <article className="ethosFriendship-article">
          <section id="problema">
            <Heading n="00" eyebrow="Quaestio">
              Una amistad puede parecer la misma por fuera y ser distinta por dentro
            </Heading>

            <p className="ethosFriendship-prose">
              Dos personas pueden pasar mucho tiempo juntas, divertirse, ayudarse y
              llamarse amigas. Aristóteles permite introducir una pregunta más
              exigente: <em>¿qué es exactamente lo que cada una ama en la otra?</em>
              La respuesta cambia la estructura moral del vínculo.
            </p>

            <div className="ethosFriendship-process">
              <span>encuentro</span>
              <b>→</b>
              <span>agrado / beneficio</span>
              <b>→</b>
              <span>reciprocidad</span>
              <b>→</b>
              <strong>¿bien del otro?</strong>
            </div>

            <aside className="ethosFriendship-note">
              <span>NOTA DE MÉTODO</span>
              <p>
                El contenido de esta página fue construido exclusivamente como
                demostración editorial a partir de los libros VIII–IX de la
                <em> Ética a Nicómaco</em>. No reproduce una clase impartida por el
                profesor.
              </p>
            </aside>
          </section>

          <section id="philia">
            <Heading n="01" eyebrow="Philia">
              La amistad no es sólo una emoción privada
            </Heading>

            <p className="ethosFriendship-prose">
              La palabra griega <em>philia</em> ocupa un campo más amplio que el uso
              cotidiano de “amistad”. Permite pensar vínculos de afecto,
              reciprocidad y vida compartida. Por eso el problema no queda
              reducido a “sentirse cercano” a alguien: también pregunta qué
              queremos para esa persona y qué tipo de vida construimos juntos.
            </p>

            <div className="ethosFriendship-inscription">
              <span>ΦΙΛΙΑ</span>
              <div>
                <strong>reciprocidad</strong>
                <strong>benevolencia</strong>
                <strong>convivencia</strong>
                <strong>carácter</strong>
              </div>
            </div>

            <div className="ethosFriendship-thesis">
              <span>HIPÓTESIS DE LECTURA</span>
              <strong>
                Para saber qué clase de amistad existe, no basta preguntar
                cuánto se quieren dos personas: hay que preguntar
                <em> por qué</em> se quieren.
              </strong>
            </div>
          </section>

          <section id="formas">
            <Heading n="02" eyebrow="Tres modos">
              Utilidad, placer y bien
            </Heading>

            <p className="ethosFriendship-prose">
              El análisis aristotélico distingue los vínculos según aquello que
              resulta amable en el otro. La distinción no convierte
              automáticamente en falsas las amistades útiles o placenteras; muestra
              por qué dependen más directamente de condiciones que pueden cambiar.
            </p>

            <div className="ethosFriendship-tabs" role="tablist" aria-label="Formas de amistad">
              {friendshipKinds.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={friendship.id === item.id ? 'active' : ''}
                  onClick={() => setFriendshipId(item.id)}
                  aria-pressed={friendship.id === item.id}
                >
                  <span>{item.greek}</span>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </button>
              ))}
            </div>

            <article className="ethosFriendship-focus">
              <span>{friendship.greek}</span>
              <h3>{friendship.title}</h3>
              <p>{friendship.body}</p>
              <div>
                <b>Temporalidad</b>
                <p>{friendship.duration}</p>
              </div>
            </article>
          </section>

          <section id="esquema">
            <Heading n="03" eyebrow="Schema">
              La razón del vínculo modifica su estabilidad
            </Heading>

            <div className="ethosFriendship-schema-title">
              <span>ESQUEMA</span>
              <i />
            </div>

            <div className="ethosFriendship-schema">
              <AnimatedConceptSchema schema={friendshipKindsSchema} />
            </div>

            <p className="ethosFriendship-schema-caption">
              El esquema no resume toda la teoría de la amistad. Aísla un punto:
              aquello por lo que se ama determina qué sostiene el vínculo y qué
              puede hacerlo desaparecer.
            </p>
          </section>

          <section id="reciprocidad">
            <Heading n="04" eyebrow="Antipeponthos">
              No basta con querer el bien de alguien en secreto
            </Heading>

            <p className="ethosFriendship-prose">
              La benevolencia unilateral todavía no constituye amistad. El vínculo
              exige correspondencia y reconocimiento: ambas personas quieren el
              bien de la otra y saben que esa disposición es recíproca. La
              convivencia permite que esa reciprocidad deje de ser una impresión
              y se contraste con acciones y carácter.
            </p>

            <div className="ethosFriendship-schema-title">
              <span>ESQUEMA</span>
              <i />
            </div>

            <div className="ethosFriendship-schema is-secondary">
              <AnimatedConceptSchema schema={reciprocitySchema} />
            </div>
          </section>

          <section id="otro-si">
            <Heading n="05" eyebrow="Alter ego">
              El amigo participa en la formación del propio carácter
            </Heading>

            <div className="ethosFriendship-split">
              <div>
                <p className="ethosFriendship-prose">
                  En los libros dedicados a la amistad, Aristóteles vincula la
                  relación con el amigo y la relación consigo mismo. El amigo
                  puede funcionar como una presencia ante la que nuestras
                  elecciones se vuelven visibles, discutibles y compartidas.
                </p>

                <p className="ethosFriendship-prose">
                  Esto vuelve éticamente importante la convivencia: una amistad
                  no sólo acompaña el carácter que ya tenemos. También crea
                  hábitos, confirma decisiones, corrige excesos y puede modificar
                  aquello que aprendemos a desear.
                </p>
              </div>

              <blockquote>
                <span>LECTURA</span>
                <strong>La amistad también es una escuela del carácter.</strong>
                <p>
                  Preguntar quiénes son nuestros amigos implica preguntar con
                  quiénes practicamos, repetimos y normalizamos formas de vivir.
                </p>
              </blockquote>
            </div>
          </section>

          <section id="dilema">
            <Heading n="06" eyebrow="Agora">
              ¿Ser buen amigo significa ser siempre cómplice?
            </Heading>

            <div className="ethosFriendship-case">
              <span>CASO DE DELIBERACIÓN</span>
              <h3>
                Un amigo le pide que mienta para encubrir una acción que perjudicó a otra persona.
              </h3>
              <p>
                Él insiste: “si de verdad eres mi amigo, tienes que ayudarme”.
                ¿La lealtad exige cubrirlo o precisamente la amistad puede exigir
                negarse?
              </p>
            </div>

            <div className="ethosFriendship-dilemma-tabs">
              {friendshipDilemmaViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={dilemma.id === item.id ? 'active' : ''}
                  onClick={() => setDilemmaId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <article className="ethosFriendship-deliberation">
              <span>LECTURA ACTIVA</span>
              <h3>{dilemma.title}</h3>
              <p>{dilemma.body}</p>
            </article>

            <div className="ethosFriendship-question-grid">
              <article>
                <span>I</span>
                <strong>¿Qué bien está en juego?</strong>
                <p>El beneficio inmediato del amigo no es necesariamente su bien moral.</p>
              </article>
              <article>
                <span>II</span>
                <strong>¿Qué hábito refuerzo?</strong>
                <p>Cada respuesta también forma el carácter de quien ayuda.</p>
              </article>
              <article>
                <span>III</span>
                <strong>¿Qué le debo a terceros?</strong>
                <p>La amistad no borra las obligaciones frente a quien fue dañado.</p>
              </article>
            </div>
          </section>

          <section id="imagen">
            <Heading n="07" eyebrow="Imago curata">
              La imagen también debe tener procedencia
            </Heading>

            <div className="ethosFriendship-source-card">
              <img
                src="/philosophia/images/ethics/demo-friendship/aristotle-bust.png"
                alt="Busto de Aristóteles utilizado como imagen curatorial de la página"
              />
              <div>
                <span>IMAGEN CURATORIAL</span>
                <h3>Busto de Aristóteles</h3>
                <dl>
                  <div><dt>Autor de la fotografía</dt><dd>Alvaro Marques Hijazo</dd></div>
                  <div><dt>Fuente</dt><dd>Wikimedia Commons</dd></div>
                  <div><dt>Estatus</dt><dd>CC0 1.0 · Public Domain Dedication</dd></div>
                  <div><dt>Archivo local</dt><dd>/philosophia/images/ethics/demo-friendship/aristotle-bust.png</dd></div>
                </dl>
                <a
                  href="https://commons.wikimedia.org/wiki/File:Aristotle_transparent.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver ficha de derechos ↗
                </a>
              </div>
            </div>

            <aside className="ethosFriendship-note">
              <span>REGLA ETHOS</span>
              <p>
                La página usa un archivo local. La fuente externa se conserva sólo
                como trazabilidad y licencia; la experiencia no depende de cargar
                la imagen desde un servidor de terceros.
              </p>
            </aside>
          </section>

          <section id="cierre">
            <Heading n="08" eyebrow="Conclusio">
              Una amistad se reconoce también por aquello que nos ayuda a llegar a ser
            </Heading>

            <p className="ethosFriendship-prose">
              La pregunta final ya no es simplemente “¿tengo amigos?”, sino
              “¿qué tipo de bien practicamos juntos?”. Utilidad y placer forman
              parte de muchas relaciones humanas, pero la amistad orientada al
              bien introduce una exigencia adicional: que el vínculo pueda
              sobrevivir al desacuerdo, a la corrección y al examen del carácter.
            </p>

            <div className="ethosFriendship-final">
              <span>amistad</span>
              <b>→</b>
              <span>reciprocidad</span>
              <b>→</b>
              <span>vida compartida</span>
              <b>→</b>
              <strong>formación del carácter</strong>
            </div>

            <div className="ethosFriendship-reading">
              <span>FUENTE FILOSÓFICA DE LA DEMO</span>
              <strong>Aristóteles · Ética a Nicómaco · libros VIII–IX</strong>
              <p>
                Esta referencia organiza el contenido conceptual del prototipo;
                no se presenta como lectura efectivamente asignada en el curso.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="ethosFriendship-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>φιλία · ἀρετή · εὐδαιμονία</span>
        <span>DEMO · SINE DIE</span>
      </footer>

      <div className="ethosFriendship-meander" aria-hidden="true" />
    </main>
  )
}
