import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'

const sections = [
  ['00', 'mapa', 'Mapa de la clase'],
  ['01', 'hessen', 'Sujeto y conocimiento'],
  ['02', 'modernidad', 'Nueva imagen del mundo'],
  ['03', 'duda', 'Duda metódica'],
  ['04', 'cogito', 'Cogito'],
  ['05', 'sustancias', 'Tres sustancias'],
  ['06', 'innatismo', 'Ideas e innatismo'],
  ['07', 'solipsismo', 'Solipsismo'],
  ['08', 'dios', 'Función de Dios'],
  ['09', 'mente-cuerpo', 'Mente y cuerpo'],
  ['10', 'spinoza', 'Respuesta de Spinoza'],
  ['11', 'tarea', 'Tarea'],
]

const atlasSchema = {
  layout: 'flow',
  direction: 'vertical',
  flowGap: 52,
  minHeight: 980,
  fitPadding: 54,
  sizeHint: 'tall',
  nodes: [
    { id: 'subject', label: 'sujeto y conocimiento', caption: 'sujeto · objeto · verdad', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'doubt', label: 'duda metódica', caption: 'sentidos · lógica · matemáticas', shapeRole: 'structure' },
    { id: 'cogito', label: 'cogito', caption: 'primera certeza', shapeRole: 'concept' },
    { id: 'substances', label: 'tres sustancias', caption: 'res cogitans · res extensa · res infinita', shapeRole: 'structure' },
    { id: 'ideas', label: 'ideas', caption: 'adventicias · ficticias · innatas', shapeRole: 'mediation' },
    { id: 'solipsism', label: 'solipsismo', caption: 'representación / mundo exterior', shapeRole: 'mediation' },
    { id: 'god', label: 'Dios', caption: 'garantía del sistema', shapeRole: 'structure' },
    { id: 'mindbody', label: 'mente / cuerpo', caption: 'problema de comunicación', shapeRole: 'mediation' },
    { id: 'spinoza', label: 'Spinoza', caption: 'una sustancia · atributos · modos', shapeRole: 'result', tone: 'accent' },
  ],
  edges: [
    { from: 'subject', to: 'doubt', label: 'prepara el giro hacia', relationKind: 'derives' },
    { from: 'doubt', to: 'cogito', label: 'conduce a', relationKind: 'derives' },
    { from: 'cogito', to: 'substances', label: 'reconstruye', relationKind: 'derives' },
    { from: 'substances', to: 'ideas', label: 'se articula con', relationKind: 'derives' },
    { from: 'ideas', to: 'solipsism', label: 'abre el problema de', relationKind: 'derives' },
    { from: 'solipsism', to: 'god', label: 'busca garantía en', relationKind: 'derives' },
    { from: 'god', to: 'mindbody', label: 'no elimina', relationKind: 'derives' },
    { from: 'mindbody', to: 'spinoza', label: 'prepara la respuesta de', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .27, edgeDuration: .29 },
}

const goToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function OntologiaClass19Aug() {
  const heroImage = `${import.meta.env.BASE_URL}images/ontologia/open/2026-08-19/descartes-hals.jpg`

  return (
    <main className="oa-page oaf-page">
      <div className="oa-backdrop" aria-hidden="true" />

      <div className="oa-brochure oaf-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>XIX · VIII · MMXXVI</span>
        </nav>

        <header className="oa-cover oaf-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · fol. XIV · cogito</span>

            <h1>
              Del cogito
              <em>a la sustancia</em>
            </h1>

            <p className="oa-subtitle">
              dubitatio · cogito · substantia · idea · Deus
            </p>

            <p className="oaf-lead">
              Descartes coloca al sujeto en el centro de la filosofía moderna,
              pero ese giro abre dos problemas decisivos: cómo garantizar la
              correspondencia entre representación y mundo, y cómo explicar la
              relación entre mente y cuerpo. Spinoza aparece como la primera
              respuesta radical al dualismo cartesiano.
            </p>

            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>
                ¿Cómo puede el sujeto reconstruir mundo, sustancia y verdad
                después de haber puesto en duda sus representaciones?
              </strong>
            </div>

            <div className="oaf-axis" aria-label="Eje conceptual">
              <span>dubitatio</span><b>→</b>
              <span>cogito</span><b>→</b>
              <span>substantia</span><b>→</b>
              <span>Deus</span><b>→</b>
              <span>una substantia</span>
            </div>
          </div>

          <figure className="oa-cover-object">
            <div className="oa-cover-frame">
              <span className="oa-tape oa-tape-a" aria-hidden="true" />
              <span className="oa-tape oa-tape-b" aria-hidden="true" />
              <img
                src={heroImage}
                alt="Retrato de René Descartes pintado por Frans Hals hacia 1649"
              />
            </div>

            <figcaption>
              <span>IMAGO XIV · RENATUS DESCARTES</span>
              <strong>Retrato de René Descartes</strong>
              <small>Frans Hals · ca. 1649 · retrato del filósofo.</small>
              <small className="oa-image-rights">Dominio público</small>
              <a
                className="oa-image-source"
                href="https://commons.wikimedia.org/wiki/File:Frans_Hals,_Portrait_of_Ren%C3%A9_Descartes.jpg"
                target="_blank"
                rel="noreferrer"
              >
                fuente de imagen ↗
              </a>
            </figcaption>
          </figure>
        </header>

        <section className="oaf-prologue">
          <div className="oaf-prologue-copy">
            <small>INTRODUCTIO</small>
            <h2>La cadena conceptual de la sesión</h2>

            <div className="oaf-questions">
              <p>Duda metódica → cogito</p>
              <p>Cogito → sustancias e ideas</p>
              <p>Representación → Dios → mente/cuerpo → Spinoza</p>
            </div>

            <p>
              El sujeto cartesiano se vuelve fundamento del conocimiento,
              pero la separación entre sujeto y mundo genera problemas que
              obligan a introducir nuevas soluciones ontológicas.
            </p>
          </div>

          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Vocabulario cartesiano</h2>

            <div>
              <article>
                <span>Latín</span>
                <strong>cogito</strong>
                <p>El pensar como primera certeza que resiste la duda.</p>
              </article>
              <article>
                <span>Latín</span>
                <strong>res cogitans</strong>
                <p>Cosa pensante; corresponde al sujeto.</p>
              </article>
              <article>
                <span>Latín</span>
                <strong>res extensa</strong>
                <p>Cosa extensa; mundo corporal cuantificable.</p>
              </article>
              <article>
                <span>Latín</span>
                <strong>res infinita</strong>
                <p>Dios como sustancia infinita y garantía del sistema.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas">
          <div className="oa-wine-title">
            <span>SCHEMA · ATLAS</span>
            <h2>atlas</h2>
          </div>

          <p>
            El Atlas funciona únicamente como mapa de navegación. El desarrollo
            completo de la clase se conserva debajo, sin sustituir sus ejemplos,
            distinciones ni problemas.
          </p>

          <div className="oa-schema-card">
            <AnimatedConceptSchema schema={atlasSchema} />
          </div>
        </section>

        <div className="oaf-layout">
          <aside className="oaf-index">
            <p>INDEX LECTIONIS</p>

            {sections.map(([number, id, label]) => (
              <button key={id} type="button" onClick={() => goToSection(id)}>
                <span>{number}</span>
                {label}
              </button>
            ))}
          </aside>

          <article className="oaf-article">
            <section id="mapa" className="oaf-section">
              <span className="oaf-number">00</span>
              <p className="oaf-eyebrow">ARGUMENTUM</p>
              <h2>La cadena conceptual de la sesión</h2>

              <div className="oaf-program-grid">
                <article><span>01</span><strong>Duda metódica</strong></article>
                <article><span>02</span><strong>Cogito</strong></article>
                <article><span>03</span><strong>Tres sustancias</strong></article>
                <article><span>04</span><strong>Innatismo</strong></article>
                <article><span>05</span><strong>Solipsismo</strong></article>
                <article><span>06</span><strong>Dios como garantía</strong></article>
                <article><span>07</span><strong>Mente / cuerpo</strong></article>
                <article><span>08</span><strong>Monismo de Spinoza</strong></article>
              </div>

              <div className="oaf-callout">
                <span>Idea rectora</span>
                <strong>
                  El sujeto cartesiano se vuelve fundamento del conocimiento,
                  pero la separación entre sujeto y mundo genera problemas que
                  obligan a introducir nuevas soluciones ontológicas.
                </strong>
              </div>
            </section>

            <section id="hessen" className="oaf-section">
              <span className="oaf-number">01</span>
              <p className="oaf-eyebrow">COGNITIO</p>
              <h2>Sujeto, objeto y verdad</h2>

              <p>
                Antes de entrar en Descartes, el profesor recupera a Johannes
                Hessen y el esquema básico del conocimiento: sujeto, objeto y
                relación cognoscitiva. A partir de ahí recuerda cinco problemas:
                posibilidad, origen, esencia, tipos de conocimiento y criterio
                de verdad.
              </p>

              <div className="oaf-concepts">
                <article><span>I</span><strong>Posibilidad</strong></article>
                <article><span>II</span><strong>Origen</strong></article>
                <article><span>III</span><strong>Esencia</strong></article>
                <article><span>IV</span><strong>Verdad</strong></article>
              </div>

              <p>
                En Descartes se impone la razón y, en la relación entre sujeto
                y objeto, aparece una preeminencia del sujeto. Este giro es una
                de las marcas de la filosofía moderna.
              </p>
            </section>

            <section id="modernidad" className="oaf-section">
              <span className="oaf-number">02</span>
              <p className="oaf-eyebrow">SCIENTIA NOVA</p>
              <h2>Una nueva imagen del mundo</h2>

              <p>
                El nuevo comienzo cartesiano se entiende mejor dentro de una
                transformación científica. El cosmos antiguo y medieval,
                finito, delimitado y ordenado, deja de ser una imagen
                incuestionable del mundo.
              </p>

              <div className="oaf-timeline">
                <div><span>Copérnico</span><small>heliocentrismo</small></div>
                <b>→</b>
                <div><span>Kepler</span><small>órbitas elípticas</small></div>
                <b>→</b>
                <div><span>Galileo</span><small>nueva física</small></div>
                <b>→</b>
                <div><span>Bruno</span><small>universo infinito</small></div>
              </div>

              <p>
                El descubrimiento de América también funciona como ejemplo de
                una ampliación del mundo conocido. Para el profesor, este
                contexto permite comprender por qué Descartes deja de aceptar la
                tradición recibida como fundamento seguro.
              </p>
            </section>

            <section id="duda" className="oaf-section oaf-wine-section">
              <span className="oaf-number">03</span>
              <p className="oaf-eyebrow">DUBITATIO</p>
              <h2>La duda metódica</h2>

              <p>
                La duda no es un fin escéptico. Su función consiste en encontrar
                una certeza que resista toda posibilidad de error y desde la
                cual pueda reconstruirse el saber.
              </p>

              <div className="oaf-books">
                <article><span>I</span><strong>Sentidos</strong></article>
                <article><span>II</span><strong>Lógica</strong></article>
                <article><span>III</span><strong>Matemáticas</strong></article>
              </div>

              <div className="oaf-callout">
                <span>Hipótesis extrema</span>
                <strong>
                  El genio maligno permite imaginar un engaño incluso respecto
                  de aquello que parece matemáticamente evidente.
                </strong>
              </div>

              <p>
                A esto se suma la duda entre sueño y vigilia: una experiencia
                puede parecernos completamente real mientras la vivimos y sólo
                después reconocerse como sueño.
              </p>
            </section>

            <section id="cogito" className="oaf-section">
              <span className="oaf-number">04</span>
              <p className="oaf-eyebrow">COGITO</p>
              <h2>La primera certeza</h2>

              <div className="oaf-big-questions">
                <p>Si dudo, pienso.</p>
                <p>Si pienso, existo.</p>
              </div>

              <div className="oaf-center">
                <strong>Cogito, ergo sum.</strong>
                <br />
                Pienso, luego existo.
              </div>

              <p>
                El punto de partida ya no es el mundo exterior, sino la certeza
                del sujeto que piensa. La modernidad filosófica se construye
                desde ese primer conocimiento indudable.
              </p>
            </section>

            <section id="sustancias" className="oaf-section oaf-wine-section">
              <span className="oaf-number">05</span>
              <p className="oaf-eyebrow">ONTOLOGIA CARTESIANA</p>
              <h2>Las tres sustancias</h2>

              <p>
                A partir del cogito, la clase formula la estructura ontológica
                cartesiana mediante tres sustancias.
              </p>

              <div className="oaf-cartesian">
                <div><span>res cogitans</span><strong>pensamiento</strong></div>
                <div><span>res extensa</span><strong>extensión</strong></div>
                <div><span>res infinita</span><strong>Dios</strong></div>
              </div>

              <p>
                La res cogitans corresponde al sujeto; la res extensa al mundo
                de los cuerpos, caracterizado por propiedades cuantificables
                como longitud, anchura y profundidad; la res infinita es Dios.
              </p>
            </section>

            <section id="innatismo" className="oaf-section">
              <span className="oaf-number">06</span>
              <p className="oaf-eyebrow">IDEAE</p>
              <h2>Adventicias, ficticias e innatas</h2>

              <div className="oaf-books">
                <article><span>I</span><strong>Adventicias</strong></article>
                <article><span>II</span><strong>Ficticias</strong></article>
                <article><span>III</span><strong>Innatas</strong></article>
              </div>

              <p>
                Las adventicias proceden de la experiencia; las ficticias son
                producidas por la imaginación mediante combinaciones; las
                innatas no proceden de los sentidos y pertenecen al ámbito
                racional.
              </p>

              <div className="oaf-concepts">
                <article><span>01</span><strong>Dios</strong></article>
                <article><span>02</span><strong>alma</strong></article>
                <article><span>03</span><strong>mundo / extensión</strong></article>
                <article><span>→</span><strong>problema</strong></article>
              </div>
            </section>

            <section id="solipsismo" className="oaf-section">
              <span className="oaf-number">07</span>
              <p className="oaf-eyebrow">SOLIPSISMUS</p>
              <h2>¿Cómo salir de la representación?</h2>

              <div className="oaf-callout">
                <span>Problema</span>
                <strong>
                  ¿Qué garantiza que el mundo exterior realmente sea como el
                  sujeto se lo representa?
                </strong>
              </div>

              <p>
                El sujeto posee representaciones, pero no puede salir fuera de
                sí mismo para compararlas directamente con la realidad. El
                profesor propone una analogía contemporánea: hablamos y pensamos
                el mundo mediante el lenguaje, pero tampoco podemos salir del
                lenguaje para confrontarlo desde un punto completamente externo.
              </p>

              <div className="oaf-pair">
                <div><span>representación</span></div>
                <b>?</b>
                <div><span>mundo exterior</span></div>
              </div>
            </section>

            <section id="dios" className="oaf-section oaf-wine-section">
              <span className="oaf-number">08</span>
              <p className="oaf-eyebrow">RES INFINITA</p>
              <h2>Dios como garantía del sistema</h2>

              <p>
                La presencia de Dios no aparece solamente como precaución
                histórica ante el contexto religioso de la época. Dentro del
                sistema cumple una función filosófica: restablecer la
                correspondencia entre sujeto y objeto.
              </p>

              <div className="oaf-callout">
                <span>Función</span>
                <strong>
                  Dios garantiza que la representación del sujeto puede
                  corresponder con el mundo exterior y que no estamos sometidos
                  a un engaño sistemático.
                </strong>
              </div>

              <p>
                El argumento presentado en clase parte de la idea de Dios como
                ser perfecto. La existencia se trata como inseparable de esa
                perfección. La objeción de una “isla perfecta” se menciona como
                contraste, pero el nombre del autor no quedó suficientemente
                claro en la grabación y no se fija aquí.
              </p>
            </section>

            <section id="mente-cuerpo" className="oaf-section">
              <span className="oaf-number">09</span>
              <p className="oaf-eyebrow">CORPUS ET MENS</p>
              <h2>El problema de la comunicación de las sustancias</h2>

              <div className="oaf-pair">
                <div><span>res cogitans</span></div>
                <b>↔</b>
                <div><span>res extensa</span></div>
              </div>

              <p>
                Una vez separadas mente y cuerpo surge una nueva dificultad:
                explicar cómo algo no extenso puede actuar sobre un cuerpo
                extenso y viceversa. Descartes busca esa conexión en la glándula
                pineal y recurre a los llamados espíritus animales.
              </p>

              <aside className="oaf-note">
                <strong>Problema abierto</strong>
                <p>
                  La explicación no elimina satisfactoriamente la separación
                  original. El problema será retomado por Malebranche, Spinoza
                  y Leibniz.
                </p>
              </aside>
            </section>

            <section id="spinoza" className="oaf-section">
              <span className="oaf-number">10</span>
              <p className="oaf-eyebrow">UNA SUBSTANTIA</p>
              <h2>Spinoza: una respuesta monista</h2>

              <p>
                Spinoza radicaliza la definición de sustancia: aquello que es en
                sí y no necesita de otra cosa para existir. Si el mundo y el ser
                humano dependen de Dios, entonces no son sustancias
                independientes en sentido estricto.
              </p>

              <div className="oaf-cartesian">
                <div><span>sustancia</span><strong>Dios</strong></div>
                <div><span>atributos</span><strong>pensamiento · extensión</strong></div>
                <div><span>modos</span><strong>seres particulares</strong></div>
              </div>

              <div className="oaf-contrast">
                <div><span>Descartes</span><strong>dualismo</strong></div>
                <b>versus</b>
                <div><span>Spinoza</span><strong>monismo</strong></div>
              </div>

              <p>
                La fórmula “el hombre es un cuerpo pensante” resume el cambio:
                mente y cuerpo dejan de ser dos sustancias separadas. La clase
                introduce además la idea de Dios como causa inmanente, no
                transitiva.
              </p>
            </section>

            <section id="tarea" className="oaf-section">
              <span className="oaf-number">11</span>
              <p className="oaf-eyebrow">LECTIO</p>
              <h2>Comenzar la Ética de Spinoza</h2>

              <div className="oaf-homework">
                <div><span>Autor</span><strong>Baruch Spinoza</strong></div>
                <div><span>Texto</span><strong>Ética · Parte I</strong></div>
                <div><span>Extensión</span><strong>PDF pp. 27–51 · Parte Primera, “De Dios”</strong></div>
                <div><span>Para</span><strong>Lunes 24 de agosto</strong></div>
              </div>

              <aside className="oaf-note">
                <strong>Paginación de la lectura</strong>
                <p>
                  En el PDF de la traducción de Vidal Peña, la Parte Primera,
                  “De Dios”, comienza en la p. 27 del archivo. Las primeras
                  25 páginas corresponden a las pp. 27–51 del PDF. La Parte
                  Primera completa llega hasta la p. 55 y la Parte Segunda
                  comienza en la p. 56.
                </p>
              </aside>

              <p>
                El profesor advierte que el texto puede resultar árido porque
                sigue un modo geométrico: definiciones, proposiciones y
                demostraciones se encadenan lógicamente, de modo que conviene
                seguir con atención el orden de los argumentos.
              </p>
            </section>
          </article>
        </div>

        <section className="oaf-documentum">
          <div>
            <small>DOCUMENTUM</small>
            <h2>Criterio documental</h2>
          </div>

          <p>
            Esta edición conserva íntegramente los doce bloques que ya formaban
            parte de la página del 19 de agosto. La portada curatorial, el
            gabinete latino y el Atlas son capas editoriales añadidas y no
            sustituyen el desarrollo de la clase.
          </p>
        </section>

        <footer className="oa-footer">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <span>☙ cogito · substantia · Deus sive Natura ❧</span>
          <span>XIX · VIII · MMXXVI</span>
        </footer>
      </div>
    </main>
  )
}
