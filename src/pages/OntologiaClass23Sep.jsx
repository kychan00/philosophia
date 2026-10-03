import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './OntologiaClass23SepArchive.css'
import './OntologiaClass07Sep.css'
import './OntologiaClass14Sep.css'
import './OntologiaClass21Sep.css'
import './OntologiaClass23Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'pizarra', 'Pizarra del profesor'],
  ['02', 'critica', 'Dos vertientes de la Crítica'],
  ['03', 'facultades', 'Sensibilidad · entendimiento · razón'],
  ['04', 'dogmatismo', 'Racionalismo, Hume y criticismo'],
  ['05', 'ideas', 'Dios · alma · mundo'],
  ['06', 'limite', 'Fenómeno y límite del conocimiento'],
  ['07', 'dialectica', 'Dialéctica trascendental'],
  ['08', 'ontologico', 'Argumento ontológico'],
  ['09', 'predicado', '“Ser” no es predicado real'],
  ['10', 'digresion', 'Digresión de la clase'],
  ['11', 'tarea', 'Hartmann · cosa en sí'],
]

const boardViews = [
  {
    id: 'architecture',
    label: 'ARQUITECTURA',
    title: 'La Crítica como teoría del conocimiento y crítica de la metafísica',
    lead:
      'La pizarra coloca en un mismo plano sensibilidad, entendimiento, sujeto trascendental, juicios sintéticos a priori y el criterio de demarcación de la metafísica.',
  },
  {
    id: 'dogmatism',
    label: 'DOGMATISMO',
    title: 'Descartes · Spinoza · Leibniz frente a Hume',
    lead:
      'El racionalismo aparece como confianza en la metafísica como ciencia; Hume funciona como el interlocutor escéptico que obliga a Kant a replantear esa pretensión.',
  },
  {
    id: 'ideas',
    label: 'IDEAS',
    title: 'Dios · alma · mundo',
    lead:
      'La metafísica especial reaparece en Kant como sistema de ideas de la razón. El problema crítico es determinar si esas ideas pueden convertirse en objetos conocidos.',
  },
  {
    id: 'limit',
    label: 'LÍMITE',
    title: 'Objeto de conocimiento = fenómeno',
    lead:
      'La pizarra formaliza pedagógicamente que lo cognoscible debe poder darse bajo espacio y tiempo. De ahí se deriva el límite de la razón teórica respecto de Dios.',
  },
]

const atlasSchema = {
  layout: 'flow',
  direction: 'vertical',
  flowGap: 50,
  minHeight: 1040,
  fitPadding: 56,
  sizeHint: 'tall',
  nodes: [
    { id: 'knowledge', label: 'conocimiento', caption: 'sensibilidad + entendimiento', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'reason', label: 'razón', caption: 'ideas · incondicionado', shapeRole: 'structure' },
    { id: 'ideas', label: 'ideas trascendentales', caption: 'alma · mundo · Dios', shapeRole: 'concept' },
    { id: 'limit', label: 'límite', caption: 'pensar ≠ conocer', shapeRole: 'mediation' },
    { id: 'dialectic', label: 'Dialéctica trascendental', caption: 'ilusión · metafísica especulativa', shapeRole: 'structure' },
    { id: 'ontological', label: 'argumento ontológico', caption: 'concepto → existencia ?', shapeRole: 'mediation' },
    { id: 'predicate', label: 'existencia', caption: 'no es predicado real', shapeRole: 'concept' },
    { id: 'thalers', label: '100 táleros', caption: 'posibles / reales', shapeRole: 'mediation' },
    { id: 'hartmann', label: 'cosa en sí', caption: 'Hartmann · siguiente lectura', shapeRole: 'result', tone: 'accent' },
  ],
  edges: [
    { from: 'knowledge', to: 'reason', label: 'se distingue de', relationKind: 'derives' },
    { from: 'reason', to: 'ideas', label: 'produce', relationKind: 'derives' },
    { from: 'ideas', to: 'limit', label: 'obliga a fijar', relationKind: 'derives' },
    { from: 'limit', to: 'dialectic', label: 'es examinado por', relationKind: 'derives' },
    { from: 'dialectic', to: 'ontological', label: 'critica', relationKind: 'derives' },
    { from: 'ontological', to: 'predicate', label: 'falla porque', relationKind: 'derives' },
    { from: 'predicate', to: 'thalers', label: 'se ilustra con', relationKind: 'derives' },
    { from: 'thalers', to: 'hartmann', label: 'abre el paso hacia', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .27, edgeDuration: .29 },
}

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ontsep7-heading ontsep14-heading ontsep21-heading ontsep23-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function OntologiaClass23Sep() {
  const [boardId, setBoardId] = useState('architecture')

  const board = useMemo(
    () => boardViews.find((item) => item.id === boardId) || boardViews[0],
    [boardId],
  )

  const base = import.meta.env.BASE_URL

  return (
    <main className="ontsep7-page ontsep14-page ontsep21-page ontsep23-page oa-page oaf-page oaf-sep23-page">
      <div className="oa-backdrop" aria-hidden="true" />

      <div className="oa-brochure oaf-brochure oaf-sep23-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>XXIII · IX · MMXXVI</span>
        </nav>

        <header className="oa-cover oaf-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · fol. XXII · dialectica transcendentalis</span>

            <h1>
              La frontera
              <em>de la razón</em>
            </h1>

            <p className="oa-subtitle">
              ratio · ideae · incondicionatum · dialectica · existentia
            </p>

            <p className="oaf-lead">
              Kant entra en la Dialéctica trascendental para examinar qué sucede
              cuando la razón pretende convertir en conocimiento aquello que rebasa
              las condiciones de la experiencia posible: alma, mundo y Dios.
            </p>

            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>
                ¿Qué diferencia hay entre poder pensar una idea y poder conocer
                objetivamente aquello que esa idea representa?
              </strong>
            </div>

            <div className="oaf-axis" aria-label="Eje conceptual">
              <span>ratio</span><b>→</b>
              <span>ideae</span><b>→</b>
              <span>limen</span><b>→</b>
              <span>dialectica</span><b>→</b>
              <span>existentia</span>
            </div>

            <div className="oaf-sep7-actions">
              <button type="button" onClick={() => goTo('pizarra')}>Ver pizarra ↓</button>
              <Link to="/tareas/ontologia-ii/kant-dialectica-trascendental">
                Abrir sistema 2D ↗
              </Link>
            </div>
          </div>

          <figure className="oa-cover-object">
            <div className="oa-cover-frame">
              <span className="oa-tape oa-tape-a" aria-hidden="true" />
              <span className="oa-tape oa-tape-b" aria-hidden="true" />
              <img
                src={`${import.meta.env.BASE_URL}images/ontologia/open/2026-09-23/kant-dialektik-1781-p333.png`}
                alt="Página 333 de la primera edición de la Crítica de la razón pura, Sistema de las ideas trascendentales"
              />
            </div>
            <figcaption>
              <span>IMAGO XXII · SYSTEMA IDEARUM TRANSCENDENTALIUM</span>
              <strong>Sistema de las ideas trascendentales</strong>
              <small>Immanuel Kant · <em>Critik der reinen Vernunft</em> · Riga · 1781 · p. 333.</small>
              <small className="oa-image-rights">Dominio público</small>
              <a
                className="oa-image-source"
                href="https://de.wikisource.org/wiki/Seite:Kant_Critik_der_reinen_Vernunft_333.png"
                target="_blank"
                rel="noreferrer"
              >
                fuente del escaneo ↗
              </a>
            </figcaption>
          </figure>
        </header>

        <section className="oaf-prologue">
          <div className="oaf-prologue-copy">
            <small>INTRODUCTIO</small>
            <h2>De poder pensar a poder conocer</h2>
            <div className="oaf-questions">
              <p>¿Qué diferencia razón y entendimiento?</p>
              <p>¿Qué estatuto tienen alma, mundo y Dios?</p>
              <p>¿Por qué existencia no funciona como predicado real?</p>
            </div>
            <p>
              La sesión pasa de las facultades y las ideas trascendentales al
              límite del conocimiento teórico, y desde allí concentra la crítica
              en la prueba ontológica y en la diferencia entre concepto y existencia.
            </p>
          </div>

          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Vocabulario de la Dialéctica</h2>
            <div>
              <article><span>Latín</span><strong>ratio</strong><p>Razón; facultad que busca lo incondicionado y produce ideas.</p></article>
              <article><span>Latín</span><strong>idea</strong><p>Concepto de la razón cuyo objeto no puede darse congruentemente en experiencia.</p></article>
              <article><span>Latín</span><strong>incondicionatum</strong><p>Lo incondicionado hacia lo cual asciende la razón.</p></article>
              <article><span>Latín</span><strong>existentia</strong><p>Existencia; no añade una determinación real al concepto del objeto.</p></article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas oaf-sep23-atlas">
          <div className="oa-wine-title"><span>SCHEMA · ATLAS</span><h2>atlas</h2></div>
          <p>
            El Atlas sólo orienta. Las fotografías de pizarra, el selector de
            reconstrucción y las doce secciones originales permanecen completas debajo.
          </p>
          <div className="oa-schema-card"><AnimatedConceptSchema schema={atlasSchema} /></div>
        </section>

      <div className="ontsep7-layout">
        <aside className="ontsep7-index ontsep23-index">
          <p>Index dialecticus</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goTo(id)}>
              <span>{n}</span>
              {label}
            </button>
          ))}
        </aside>

        <article className="ontsep7-article ontsep23-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula sessionis">
              De la teoría del conocimiento al límite de la metafísica
            </Heading>

            <div className="ontsep23-session-map">
              <article>
                <span>01</span>
                <strong>CRP</strong>
                <p>teoría del conocimiento</p>
              </article>
              <b>→</b>
              <article>
                <span>02</span>
                <strong>razón</strong>
                <p>busca lo incondicionado</p>
              </article>
              <b>→</b>
              <article>
                <span>03</span>
                <strong>ideas</strong>
                <p>Dios · alma · mundo</p>
              </article>
              <b>→</b>
              <article className="active">
                <span>04</span>
                <strong>crítica</strong>
                <p>pensar ≠ conocer</p>
              </article>
              <b>→</b>
              <article>
                <span>05</span>
                <strong>prueba ontológica</strong>
                <p>existencia ≠ predicado real</p>
              </article>
            </div>

            <div className="ontsep7-thesis ontsep23-thesis">
              <span>TESIS DE LA CLASE</span>
              <strong>
                La razón puede formular ideas que no son absurdas ni inútiles, pero
                eso no basta para convertirlas en objetos de conocimiento teórico.
              </strong>
            </div>
          </section>

          <section id="pizarra">
            <Heading n="01" eyebrow="Tabula magistri">
              Pizarra del profesor
            </Heading>

            <div className="ontsep23-board-photos">
              <figure>
                <a
                  href={`${base}images/ontologia/2026-09-23/pizarra-1.jpeg`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`${base}images/ontologia/2026-09-23/pizarra-1.jpeg`}
                    alt="Pizarra de Ontología II del 23 de septiembre, vista completa"
                  />
                </a>
                <figcaption>Vista general · clase del 23 de septiembre</figcaption>
              </figure>

              <figure>
                <a
                  href={`${base}images/ontologia/2026-09-23/pizarra-2.jpeg`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`${base}images/ontologia/2026-09-23/pizarra-2.jpeg`}
                    alt="Pizarra de Ontología II del 23 de septiembre, segunda toma"
                  />
                </a>
                <figcaption>Segunda toma · mismo esquema de trabajo</figcaption>
              </figure>
            </div>

            <div className="ontsep23-board-switcher">
              {boardViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={boardId === item.id ? 'active' : ''}
                  onClick={() => setBoardId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="ontsep23-board-reading">
              <span>RECONSTRUCCIÓN</span>
              <strong>{board.title}</strong>
              <p>{board.lead}</p>

              {board.id === 'architecture' && (
                <div className="ontsep23-board-schema architecture">
                  <div>
                    <span>SUJETO TRASCENDENTAL</span>
                    <strong>conocimiento</strong>
                  </div>
                  <b>→</b>
                  <div>
                    <span>SENSIBILIDAD</span>
                    <strong>espacio · tiempo</strong>
                  </div>
                  <b>+</b>
                  <div>
                    <span>ENTENDIMIENTO</span>
                    <strong>categorías</strong>
                  </div>
                </div>
              )}

              {board.id === 'dogmatism' && (
                <div className="ontsep23-board-schema dogmatism">
                  <div>
                    <span>RACIONALISTAS</span>
                    <strong>Descartes · Spinoza · Leibniz</strong>
                  </div>
                  <b>versus</b>
                  <div>
                    <span>ESCÉPTICO</span>
                    <strong>Hume</strong>
                  </div>
                  <b>→</b>
                  <div>
                    <span>KANT</span>
                    <strong>criticismo</strong>
                  </div>
                </div>
              )}

              {board.id === 'ideas' && (
                <div className="ontsep23-board-schema ideas">
                  <div>
                    <span>RAZÓN</span>
                    <strong>ideas</strong>
                  </div>
                  <b>→</b>
                  <div>
                    <strong>Dios</strong>
                  </div>
                  <div>
                    <strong>alma</strong>
                  </div>
                  <div>
                    <strong>mundo</strong>
                  </div>
                </div>
              )}

              {board.id === 'limit' && (
                <>
                  <div className="ontsep23-formula">
                    <code>∀x [O(x) → (E(x) ∧ T(x))]</code>
                    <code>¬E(d) ∧ ¬T(d) ∴ ¬O(d)</code>
                  </div>
                  <p className="ontsep23-formula-note">
                    Reconstrucción pedagógica de la pizarra: O = objeto de
                    conocimiento / fenómeno · E = espacio · T = tiempo · d = Dios.
                  </p>
                </>
              )}
            </div>
          </section>

          <section id="critica">
            <Heading n="02" eyebrow="Critica rationis purae">
              Dos grandes vertientes de la Crítica de la razón pura
            </Heading>

            <div className="ontsep23-two-paths">
              <article>
                <span>TEORÍA DEL CONOCIMIENTO</span>
                <strong>¿Cómo son posibles los juicios sintéticos a priori?</strong>
                <p>
                  El modelo científico que Kant tiene delante es físico-matemático:
                  intuiciones puras para las matemáticas y categorías para la física.
                </p>
              </article>

              <article className="active">
                <span>CRÍTICA DE LA METAFÍSICA</span>
                <strong>¿Hasta dónde puede conocer la razón?</strong>
                <p>
                  La cuestión ya no es sólo cómo conocemos, sino qué ocurre cuando
                  pretendemos conocer objetos que no pueden darse en la experiencia.
                </p>
              </article>
            </div>
          </section>

          <section id="facultades">
            <Heading n="03" eyebrow="Facultates">
              Sensibilidad, entendimiento y razón no son lo mismo
            </Heading>

            <div className="ontsep23-faculties">
              <article>
                <span>ESTÉTICA</span>
                <strong>Sensibilidad</strong>
                <p>recibe intuiciones bajo espacio y tiempo</p>
              </article>
              <b>→</b>
              <article>
                <span>ANALÍTICA</span>
                <strong>Entendimiento</strong>
                <p>piensa mediante conceptos y categorías</p>
              </article>
              <b>→</b>
              <article className="active">
                <span>DIALÉCTICA</span>
                <strong>Razón</strong>
                <p>busca ideas y lo incondicionado</p>
              </article>
            </div>

            <div className="ontsep23-warning">
              <span>NO CONFUNDIR</span>
              <strong>razón ≠ entendimiento</strong>
              <p>
                Ésta es una de las distinciones que el profesor subraya expresamente
                al entrar en la Dialéctica trascendental.
              </p>
            </div>
          </section>

          <section id="dogmatismo">
            <Heading n="04" eyebrow="Dogmatismus · scepticismus · criticismus">
              Kant frente al racionalismo dogmático y a Hume
            </Heading>

            <div className="ontsep23-triad">
              <article>
                <span>DOGMATISMO</span>
                <strong>Descartes · Spinoza · Leibniz</strong>
                <p>
                  Confianza en la posibilidad de una metafísica racional como ciencia.
                </p>
              </article>

              <article>
                <span>ESCEPTICISMO</span>
                <strong>David Hume</strong>
                <p>
                  Su crítica obliga a Kant a revisar las pretensiones tradicionales
                  de conocimiento, especialmente causalidad y metafísica.
                </p>
              </article>

              <article className="active">
                <span>CRITICISMO</span>
                <strong>Immanuel Kant</strong>
                <p>
                  Determinar las condiciones de posibilidad del conocimiento y,
                  al mismo tiempo, sus límites.
                </p>
              </article>
            </div>
          </section>

          <section id="ideas">
            <Heading n="05" eyebrow="Ideae rationis">
              Dios, alma y mundo
            </Heading>

            <div className="ontsep23-ideas">
              <article>
                <span>I</span>
                <strong>ALMA</strong>
                <p>unidad del sujeto pensante</p>
              </article>
              <article>
                <span>II</span>
                <strong>MUNDO</strong>
                <p>totalidad de la serie de condiciones</p>
              </article>
              <article className="active">
                <span>III</span>
                <strong>DIOS</strong>
                <p>ideal de un ser supremo</p>
              </article>
            </div>

            <p className="ontsep14-note">
              La clase reconstruye además el trasfondo histórico y religioso de
              estas ideas y recuerda su presencia anterior en la metafísica
              racionalista.
            </p>
          </section>

          <section id="limite">
            <Heading n="06" eyebrow="Finis cognitionis">
              Fenómeno y límite del conocimiento
            </Heading>

            <div className="ontsep23-limit">
              <div>
                <span>OBJETO DE CONOCIMIENTO</span>
                <strong>debe poder darse</strong>
              </div>
              <b>→</b>
              <div className="active">
                <span>CONDICIONES DE SENSIBILIDAD</span>
                <strong>espacio + tiempo</strong>
              </div>
              <b>→</b>
              <div>
                <span>RESULTADO</span>
                <strong>fenómeno</strong>
              </div>
            </div>

            <div className="ontsep23-god">
              <span>DIOS</span>
              <strong>puede ser pensado</strong>
              <b>≠</b>
              <strong>objeto de conocimiento teórico</strong>
            </div>

            <div className="ontsep7-thesis ontsep23-thesis">
              <span>DISTINCIÓN CENTRAL</span>
              <strong>pensar algo no equivale a conocerlo.</strong>
            </div>
          </section>

          <section id="dialectica">
            <Heading n="07" eyebrow="Dialectica transcendentalis">
              La razón produce ilusión cuando rebasa la experiencia posible
            </Heading>

            <div className="ontsep23-dialectic">
              <article>
                <span>USO LEGÍTIMO</span>
                <strong>experiencia posible</strong>
                <p>categorías aplicadas a fenómenos</p>
              </article>
              <b>→</b>
              <article className="active">
                <span>DESPLAZAMIENTO</span>
                <strong>lo incondicionado</strong>
                <p>la razón busca completar la serie</p>
              </article>
              <b>→</b>
              <article>
                <span>ILUSIÓN</span>
                <strong>metafísica especulativa</strong>
                <p>ideas tratadas como objetos conocidos</p>
              </article>
            </div>

            <div className="ontsep23-warning">
              <span>TESIS / ANTÍTESIS</span>
              <p>
                La pizarra usa la oposición tesis–antítesis como manera didáctica
                de introducir el conflicto de la razón; no reduce toda la Dialéctica
                trascendental a esa sola estructura.
              </p>
            </div>
          </section>

          <section id="ontologico">
            <Heading n="08" eyebrow="Argumentum ontologicum">
              El blanco de la lectura: la prueba ontológica
            </Heading>

            <div className="ontsep23-argument">
              <span>CONCEPTO DE DIOS</span>
              <b>+</b>
              <span>PERFECCIÓN ABSOLUTA</span>
              <b>→ ?</b>
              <span>EXISTENCIA NECESARIA</span>
            </div>

            <p className="ontsep23-prose">
              La clase se concentra en el paso que pretende extraer existencia
              desde el concepto de un ser absolutamente perfecto. Kant cuestiona
              precisamente que ese tránsito pueda establecerse por análisis conceptual.
            </p>
          </section>

          <section id="predicado">
            <Heading n="09" eyebrow="Esse">
              “El ser no es un predicado real”
            </Heading>

            <div className="ontsep23-predicate">
              <article>
                <span>PREDICADO REAL</span>
                <strong>añade una determinación</strong>
                <p>por ejemplo, una propiedad atribuida al objeto</p>
              </article>
              <b>≠</b>
              <article className="active">
                <span>EXISTENCIA</span>
                <strong>no amplía el concepto</strong>
                <p>pone el objeto como efectivamente dado</p>
              </article>
            </div>

            <div className="ontsep23-thalers">
              <article>
                <span>100 TÁLEROS POSIBLES</span>
                <strong>100</strong>
                <p>mismo contenido conceptual</p>
              </article>
              <b>≠</b>
              <article>
                <span>100 TÁLEROS REALES</span>
                <strong>100</strong>
                <p>diferencia en la existencia del objeto</p>
              </article>
            </div>

            <Link
              className="ontsep23-system-link"
              to="/tareas/ontologia-ii/kant-dialectica-trascendental"
            >
              Abrir el nodo correspondiente en el sistema 2D →
            </Link>
          </section>

          <section id="digresion">
            <Heading n="10" eyebrow="Digressio magistri">
              Guerra, Estado, razón y normatividad
            </Heading>

            <div className="ontsep23-digression">
              <span>DIGRESIÓN DE CLASE</span>
              <strong>
                El profesor conecta a Kant con problemas contemporáneos de guerra,
                relaciones entre Estados, recursos estratégicos y responsabilidad política.
              </strong>
              <p>
                Esta parte funciona como aplicación y comentario del profesor, no como
                exposición textual de la Dialéctica trascendental. El hilo filosófico que
                conserva la página es la contraposición entre relaciones de fuerza y la
                aspiración kantiana a principios racionales de dignidad, derecho y paz.
              </p>
            </div>
          </section>

          <section id="tarea">
            <Heading n="11" eyebrow="Lectio proxima">
              Nicolai Hartmann y el problema de la cosa en sí
            </Heading>

            <div className="ontsep23-task">
              <span>TAREA PARA LA SIGUIENTE SESIÓN</span>
              <h3>Leer a Nicolai Hartmann · idealismo alemán</h3>
              <p>
                Revisar específicamente cómo fue interpretada la
                <strong> cosa en sí kantiana</strong> y qué problemas filosóficos se
                derivaron de ella.
              </p>

              <div>
                <b>Asignada</b>
                <span>23 sep 2026</span>
                <b>Revisión prevista</b>
                <span>30 sep 2026</span>
              </div>
            </div>

            <div className="ontsep23-actions">
              <Link to="/tareas/ontologia-ii/kant-dialectica-trascendental">
                Abrir estudio · Dialéctica trascendental →
              </Link>
              <Link to="/tareas">
                Abrir calendario de tareas →
              </Link>
              <Link to="/semestre/5/ontologia-ii">
                Volver a Ontología II
              </Link>
            </div>
          </section>
        </article>
      </div>

      <section className="oaf-documentum">
        <div><small>DOCUMENTUM</small><h2>Criterio documental</h2></div>
        <p>
          Esta edición conserva las doce secciones originales, las dos fotografías
          de pizarra y el selector de reconstrucción con sus cuatro vistas:
          arquitectura, dogmatismo, ideas y límite. También mantiene completa la
          digresión contemporánea, señalada expresamente como comentario del profesor,
          y la tarea de Hartmann. ARCHIVUM añade contexto curatorial y Atlas; no
          recorta ni sustituye la clase.
        </p>
      </section>

      <footer className="oa-footer">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <span>☙ ratio · ideae · dialectica · existentia ❧</span>
        <span>XXIII · IX · MMXXVI</span>
      </footer>
      </div>
    </main>
  )
}
