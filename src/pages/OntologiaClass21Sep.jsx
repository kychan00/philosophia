import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './OntologiaClass21SepArchive.css'
import './OntologiaClass07Sep.css'
import './OntologiaClass09Sep.css'
import './OntologiaClass14Sep.css'
import './OntologiaClass21Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la clase'],
  ['01', 'aristoteles', 'Aristóteles y las categorías'],
  ['02', 'giro', 'Del ser al conocer'],
  ['03', 'logicas', 'Lógica formal · trascendental'],
  ['04', 'hume', 'Hume · causalidad'],
  ['05', 'deducciones', 'Deducción metafísica · trascendental'],
  ['06', 'juicios', 'Tabla de los juicios'],
  ['07', 'categorias', 'Doce categorías'],
  ['08', 'ciencia', 'Categorías y ciencia'],
  ['09', 'sinteticos', 'Sintéticos a priori en física'],
  ['10', 'esquematismo', 'Sensibilidad · entendimiento · esquema'],
  ['11', 'dialectica', 'Hacia la Dialéctica'],
  ['12', 'existencia', 'Existencia y argumento ontológico'],
  ['13', 'principios', 'Principios del entendimiento'],
  ['14', 'cierre', 'Cierre y lectura siguiente'],
]

const judgmentGroups = [
  {
    id: 'quantity',
    label: 'CANTIDAD',
    judgments: 'Universal · Particular · Singular',
    categories: 'Unidad · Pluralidad · Totalidad',
    example: 'Todos / algunos / este individuo.',
  },
  {
    id: 'quality',
    label: 'CUALIDAD',
    judgments: 'Afirmativo · Negativo · Infinito',
    categories: 'Realidad · Negación · Limitación',
    example: 'S es P / S no es P / S es no-P.',
  },
  {
    id: 'relation',
    label: 'RELACIÓN',
    judgments: 'Categórico · Hipotético · Disyuntivo',
    categories: 'Sustancia · Causalidad · Comunidad',
    example: 'S es P / si P entonces Q / P o Q.',
  },
  {
    id: 'modality',
    label: 'MODALIDAD',
    judgments: 'Problemático · Asertórico · Apodíctico',
    categories: 'Posibilidad · Existencia · Necesidad',
    example: 'Puede ser / es el caso / necesariamente.',
  },
]

const causalRoute = [
  {
    id: 'hume',
    label: 'HUME',
    title: 'sucesión observada',
    body:
      'La experiencia ofrece impresiones y conjunciones constantes, pero no una impresión sensible de conexión necesaria.',
  },
  {
    id: 'kant',
    label: 'KANT',
    title: 'categoría a priori',
    body:
      'La necesidad causal no se extrae de la repetición: el entendimiento sintetiza lo múltiple mediante la categoría de causalidad.',
  },
  {
    id: 'limit',
    label: 'LÍMITE',
    title: 'aplicación reglada',
    body:
      'Kant todavía debe explicar bajo qué condiciones una categoría puede aplicarse legítimamente a los fenómenos.',
  },
]

const atlasSchema = {
  layout: 'flow',
  direction: 'vertical',
  flowGap: 50,
  minHeight: 1060,
  fitPadding: 56,
  sizeHint: 'tall',
  nodes: [
    { id: 'aristotle', label: 'categorías aristotélicas', caption: 'figuras de predicación · sustancia', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'turn', label: 'giro kantiano', caption: 'del ser al conocer', shapeRole: 'structure' },
    { id: 'logic', label: 'lógica trascendental', caption: 'conceptos puros del entendimiento', shapeRole: 'concept' },
    { id: 'judgments', label: 'tabla de juicios', caption: 'hilo conductor', shapeRole: 'mediation' },
    { id: 'categories', label: 'doce categorías', caption: 'cantidad · cualidad · relación · modalidad', shapeRole: 'structure' },
    { id: 'deduction', label: 'deducción', caption: 'quid facti · quid juris', shapeRole: 'mediation' },
    { id: 'schema', label: 'esquematismo', caption: 'mediación temporal', shapeRole: 'concept' },
    { id: 'principles', label: 'principios', caption: 'experiencia posible · ciencia', shapeRole: 'mediation' },
    { id: 'dialectic', label: 'Dialéctica', caption: 'límite del uso de las categorías', shapeRole: 'result', tone: 'accent' },
  ],
  edges: [
    { from: 'aristotle', to: 'turn', label: 'es reformulado por', relationKind: 'derives' },
    { from: 'turn', to: 'logic', label: 'abre', relationKind: 'derives' },
    { from: 'logic', to: 'judgments', label: 'encuentra su hilo en', relationKind: 'derives' },
    { from: 'judgments', to: 'categories', label: 'conduce a', relationKind: 'derives' },
    { from: 'categories', to: 'deduction', label: 'requieren', relationKind: 'derives' },
    { from: 'deduction', to: 'schema', label: 'exige mediación mediante', relationKind: 'derives' },
    { from: 'schema', to: 'principles', label: 'hace posible', relationKind: 'derives' },
    { from: 'principles', to: 'dialectic', label: 'delimita frente a', relationKind: 'derives' },
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
    <div className="ontsep7-heading ontsep9-heading ontsep14-heading ontsep21-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function OntologiaClass21Sep() {
  const [judgmentId, setJudgmentId] = useState('quantity')
  const [causalId, setCausalId] = useState('hume')

  const judgment = useMemo(
    () => judgmentGroups.find((item) => item.id === judgmentId) || judgmentGroups[0],
    [judgmentId],
  )

  const causal = useMemo(
    () => causalRoute.find((item) => item.id === causalId) || causalRoute[0],
    [causalId],
  )

  return (
    <main className="ontsep7-page ontsep9-page ontsep14-page ontsep21-page oa-page oaf-page oaf-sep21-page">
      <div className="oa-backdrop" aria-hidden="true" />

      <div className="oa-brochure oaf-brochure oaf-sep21-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>XXI · IX · MMXXVI</span>
        </nav>

        <header className="oa-cover oaf-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · fol. XXI · analytica transcendentalis</span>

            <h1>
              Kant
              <em>lógica, juicios, categorías y esquematismo</em>
            </h1>

            <p className="oa-subtitle">
              logica · iudicium · categoriae · deductio · schema
            </p>

            <p className="oaf-lead">
              La sesión desplaza el problema desde las categorías como modos del
              ser en Aristóteles hacia las categorías como conceptos a priori del
              entendimiento en Kant, y reconstruye el trayecto juicios → categorías
              → deducción → esquematismo → principios.
            </p>

            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>
                ¿Cómo pueden conceptos que no proceden de la experiencia aplicarse
                legítimamente a objetos de experiencia?
              </strong>
            </div>

            <div className="oaf-axis" aria-label="Eje conceptual">
              <span>iudicia</span><b>→</b>
              <span>categoriae</span><b>→</b>
              <span>deductio</span><b>→</b>
              <span>schema</span><b>→</b>
              <span>principia</span>
            </div>

            <div className="oaf-sep7-actions">
              <button type="button" onClick={() => goTo('mapa')}>Recorrer la clase ↓</button>
              <Link to="/tareas/ontologia-ii/kant-analitica-trascendental">
                Abrir sistema de la Analítica ↗
              </Link>
            </div>
          </div>

          <figure className="oa-cover-object">
            <div className="oa-cover-frame">
              <span className="oa-tape oa-tape-a" aria-hidden="true" />
              <span className="oa-tape oa-tape-b" aria-hidden="true" />
              <img
                src={`${import.meta.env.BASE_URL}images/ontologia/open/2026-09-21/kant-analytik-1781-p67.png`}
                alt="Página 67 de la primera edición de la Crítica de la razón pura, sobre el uso lógico del entendimiento"
              />
            </div>
            <figcaption>
              <span>IMAGO XXI · USUS LOGICUS INTELLECTUS</span>
              <strong>Uso lógico del entendimiento</strong>
              <small>Immanuel Kant · <em>Critik der reinen Vernunft</em> · Riga · 1781 · p. 67.</small>
              <small className="oa-image-rights">Dominio público</small>
              <a
                className="oa-image-source"
                href="https://de.wikisource.org/wiki/Seite:Kant_Critik_der_reinen_Vernunft_067.png"
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
            <h2>Del juicio a la validez objetiva</h2>
            <div className="oaf-questions">
              <p>¿De dónde salen las categorías?</p>
              <p>¿Con qué derecho se aplican?</p>
              <p>¿Cómo median entre concepto e intuición?</p>
            </div>
            <p>
              La tabla de los juicios funciona como hilo conductor para descubrir
              categorías; la deducción busca legitimarlas y el esquematismo explica
              su mediación con aquello que aparece en el tiempo.
            </p>
          </div>

          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Vocabulario de la Analítica</h2>
            <div>
              <article><span>Latín</span><strong>iudicium</strong><p>Juicio; función lógica que sirve de hilo conductor.</p></article>
              <article><span>Latín</span><strong>categoria</strong><p>Concepto puro a priori del entendimiento.</p></article>
              <article><span>Latín</span><strong>deductio</strong><p>Justificación del origen sistemático y de la validez objetiva.</p></article>
              <article><span>Latín</span><strong>schema</strong><p>Mediación que vincula categoría y condición temporal sensible.</p></article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas oaf-sep21-atlas">
          <div className="oa-wine-title"><span>SCHEMA · ATLAS</span><h2>atlas</h2></div>
          <p>
            El Atlas sólo orienta. Las quince secciones originales, el selector
            de juicios, la ruta interactiva Hume–Kant y todo el desarrollo de
            deducciones, categorías, esquematismo y principios permanecen completos.
          </p>
          <div className="oa-schema-card"><AnimatedConceptSchema schema={atlasSchema} /></div>
        </section>

      <div className="ontsep7-layout">
        <aside className="ontsep7-index ontsep21-index">
          <p>Index transcendentalis</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goTo(id)}>
              <span>{n}</span>
              {label}
            </button>
          ))}
        </aside>

        <article className="ontsep7-article ontsep21-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula argumenti">
              Del ser aristotélico a la arquitectura trascendental
            </Heading>

            <div className="ontsep21-flow">
              <article><span>01</span><strong>Aristóteles</strong><p>categorías = figuras de predicación</p></article>
              <b>→</b>
              <article><span>02</span><strong>Kant</strong><p>categorías = conceptos a priori</p></article>
              <b>→</b>
              <article><span>03</span><strong>Juicios</strong><p>hilo conductor</p></article>
              <b>→</b>
              <article><span>04</span><strong>Deducción</strong><p>hecho + derecho</p></article>
              <b>→</b>
              <article className="active"><span>05</span><strong>Esquema</strong><p>mediación temporal</p></article>
            </div>

            <div className="ontsep7-thesis ontsep21-thesis">
              <span>HILO DE LA SESIÓN</span>
              <strong>
                El entendimiento no recibe pasivamente sus conceptos fundamentales de
                la experiencia: dispone de categorías a priori con las que sintetiza lo
                dado, pero debe justificar su aplicación y limitarla a la experiencia posible.
              </strong>
            </div>
          </section>

          <section id="aristoteles">
            <Heading n="01" eyebrow="Aristoteles">
              Las categorías comienzan como figuras de la predicación
            </Heading>

            <div className="ontsep21-aristotle">
              <div className="ontsep21-being">
                <span>EL SER SE DICE DE MUCHAS MANERAS</span>
                <div>
                  <b>accidental</b>
                  <b>verdadero / falso</b>
                  <b>categorías</b>
                  <b>potencia / acto</b>
                </div>
              </div>

              <div className="ontsep21-substance">
                <span>REFERENTE CENTRAL</span>
                <strong>sustancia</strong>
                <p>
                  La pregunta “¿qué es el ser?” remite finalmente, en la exposición
                  trabajada en clase, a “¿qué es la sustancia?”.
                </p>
              </div>
            </div>

            <div className="ontsep14-callout ontsep21-callout">
              <span>CONTINUIDAD HISTÓRICA</span>
              <p>
                La sesión conecta la sustancia aristotélica con Descartes, Spinoza y
                Leibniz para mostrar cómo el vocabulario ontológico continúa reapareciendo
                en la filosofía moderna.
              </p>
            </div>
          </section>

          <section id="giro">
            <Heading n="02" eyebrow="Conversio copernicana">
              En Kant, las categorías dejan de ser primariamente modos del ser
            </Heading>

            <div className="ontsep21-versus">
              <article>
                <span>ARISTÓTELES</span>
                <strong>modos del ser</strong>
                <p>
                  Sustancia, cantidad, cualidad, relación, lugar, tiempo, acción,
                  pasión, etcétera.
                </p>
              </article>
              <i>≠</i>
              <article className="active">
                <span>KANT</span>
                <strong>modos fundamentales de conocer</strong>
                <p>
                  Las categorías son conceptos puros <i>a priori</i> del entendimiento.
                </p>
              </article>
            </div>

            <div className="ontsep21-descent">
              <span>DESCARTES</span>
              <b>cogito → sujeto</b>
              <span>KANT</span>
              <b>sujeto trascendental → condiciones del conocer</b>
            </div>
          </section>

          <section id="logicas">
            <Heading n="03" eyebrow="Logica">
              Lógica formal y lógica trascendental
            </Heading>

            <div className="ontsep14-two ontsep21-two">
              <article>
                <span>LÓGICA FORMAL</span>
                <h3>prescinde del contenido</h3>
                <p>
                  Estudia la estructura y la validez del razonamiento. P, Q y R pueden
                  recibir contenidos distintos sin alterar la forma inferencial.
                </p>
                <code>Si P → Q; P; ∴ Q</code>
              </article>

              <article className="active">
                <span>LÓGICA TRASCENDENTAL</span>
                <h3>sí posee contenido determinado</h3>
                <p>
                  Estudia los conceptos puros del entendimiento y la legitimidad de su
                  aplicación a objetos.
                </p>
                <strong>CATEGORÍAS</strong>
              </article>
            </div>

            <div className="ontsep7-thesis">
              <span>DEFINICIÓN QUE LA CLASE FIJA</span>
              <strong>
                Categorías = conceptos <i>a priori</i> del entendimiento.
              </strong>
            </div>
          </section>

          <section id="hume">
            <Heading n="04" eyebrow="Hume → Kant">
              La causalidad muestra por qué Kant necesita categorías a priori
            </Heading>

            <div className="ontsep21-causal-tabs">
              {causalRoute.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={causalId === item.id ? 'active' : ''}
                  onClick={() => setCausalId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="ontsep21-causal-card">
              <span>{causal.label}</span>
              <strong>{causal.title}</strong>
              <p>{causal.body}</p>
            </div>

            <div className="ontsep21-hume-flow">
              <span>relámpago</span>
              <b>→</b>
              <span>trueno</span>
              <b>≠</b>
              <strong>impresión sensible de “necesidad”</strong>
            </div>

            <div className="ontsep14-callout ontsep21-callout">
              <span>CAMBIO KANTIANO</span>
              <strong>
                El sujeto conoce la realidad mediante estructuras a priori.
              </strong>
              <p>
                La causalidad no es una impresión adicional, sino una categoría mediante
                la cual el entendimiento sintetiza lo múltiple.
              </p>
            </div>
          </section>

          <section id="deducciones">
            <Heading n="05" eyebrow="Quid facti · quid juris">
              Deducción metafísica y deducción trascendental
            </Heading>

            <div className="ontsep21-deductions">
              <article>
                <span>DEDUCCIÓN METAFÍSICA</span>
                <strong>el hecho / descubrimiento sistemático</strong>
                <p>
                  ¿Cómo obtenemos la tabla de categorías a partir de las funciones del juicio?
                </p>
              </article>
              <article className="active">
                <span>DEDUCCIÓN TRASCENDENTAL</span>
                <strong>el derecho · quid juris</strong>
                <p>
                  ¿Con qué derecho conceptos a priori pueden aplicarse a objetos de experiencia?
                </p>
              </article>
            </div>

            <div className="ontsep21-juris">
              <span>DESCUBRIR</span>
              <b>≠</b>
              <span>LEGITIMAR</span>
            </div>
          </section>

          <section id="juicios">
            <Heading n="06" eyebrow="Tabula judiciorum">
              La tabla de los juicios funciona como hilo conductor
            </Heading>

            <div className="ontsep21-switcher">
              {judgmentGroups.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={judgmentId === item.id ? 'active' : ''}
                  onClick={() => setJudgmentId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="ontsep21-judgment-card">
              <span>{judgment.label}</span>
              <div>
                <small>FORMAS DEL JUICIO</small>
                <strong>{judgment.judgments}</strong>
                <small>CATEGORÍAS CORRESPONDIENTES</small>
                <strong>{judgment.categories}</strong>
                <p>{judgment.example}</p>
              </div>
            </div>

            <div className="ontsep14-callout ontsep21-callout">
              <span>CRÍTICA A ARISTÓTELES</span>
              <p>
                Kant pretende derivar su tabla desde un principio sistemático. La clase
                presenta esto como su respuesta al carácter no suficientemente sistemático
                de la enumeración aristotélica.
              </p>
            </div>
          </section>

          <section id="categorias">
            <Heading n="07" eyebrow="Duodecim categoriae">
              La tabla completa de las doce categorías
            </Heading>

            <div className="ontsep21-category-grid">
              <article>
                <span>CANTIDAD</span>
                <strong>Unidad</strong>
                <strong>Pluralidad</strong>
                <strong>Totalidad</strong>
              </article>
              <article>
                <span>CUALIDAD</span>
                <strong>Realidad</strong>
                <strong>Negación</strong>
                <strong>Limitación</strong>
              </article>
              <article>
                <span>RELACIÓN</span>
                <strong>Sustancia / accidente</strong>
                <strong>Causa / efecto</strong>
                <strong>Comunidad</strong>
              </article>
              <article className="active">
                <span>MODALIDAD</span>
                <strong>Posibilidad / imposibilidad</strong>
                <strong>Existencia / no existencia</strong>
                <strong>Necesidad / contingencia</strong>
              </article>
            </div>

            <div className="ontsep7-thesis">
              <span>NO ES UNA LISTA PARA MEMORIZAR AISLADAMENTE</span>
              <strong>
                Lo filosóficamente decisivo es comprender cómo Kant pasa de las
                funciones lógicas del juicio a conceptos a priori del entendimiento.
              </strong>
            </div>
          </section>

          <section id="ciencia">
            <Heading n="08" eyebrow="Scientia">
              ¿Puede una ciencia trabajar sin categorías?
            </Heading>

            <div className="ontsep21-science">
              {[
                ['unidad / pluralidad', 'distinguir uno y muchos'],
                ['causalidad', 'formular relaciones causales'],
                ['posibilidad', 'decir qué puede ocurrir'],
                ['necesidad', 'formular leyes necesarias'],
                ['existencia', 'afirmar efectividad'],
              ].map(([title, body]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </article>
              ))}
            </div>

            <p className="ontsep14-note">
              La sesión utiliza física, biología, lingüística, sociología y psicología
              para mostrar que toda ciencia formula juicios y piensa objetos bajo
              determinaciones categoriales.
            </p>
          </section>

          <section id="sinteticos">
            <Heading n="09" eyebrow="Physica">
              Las categorías hacen inteligibles los juicios sintéticos a priori de la física
            </Heading>

            <div className="ontsep21-physics">
              <span>EJEMPLO</span>
              <strong>Todo acontecimiento tiene una causa.</strong>
              <div>
                <p><b>SINTÉTICO</b> · causalidad no está contenida analíticamente en “acontecimiento”.</p>
                <p><b>A PRIORI</b> · pretende universalidad y necesidad.</p>
              </div>
            </div>

            <div className="ontsep21-mathphysics">
              <article>
                <span>MATEMÁTICAS</span>
                <strong>espacio + tiempo</strong>
                <p>formas puras de la intuición</p>
              </article>
              <b>↔</b>
              <article className="active">
                <span>FÍSICA</span>
                <strong>categorías</strong>
                <p>conceptos puros del entendimiento</p>
              </article>
            </div>
          </section>

          <section id="esquematismo">
            <Heading n="10" eyebrow="Schema transcendentalis">
              El esquematismo media entre sensibilidad y entendimiento
            </Heading>

            <div className="ontsep21-faculties">
              <article>
                <span>SENSIBILIDAD</span>
                <strong>recibe</strong>
                <p>intuiciones bajo espacio y tiempo</p>
              </article>
              <b>→</b>
              <article className="active">
                <span>ESQUEMA</span>
                <strong>media</strong>
                <p>determinación ligada al tiempo</p>
              </article>
              <b>→</b>
              <article>
                <span>ENTENDIMIENTO</span>
                <strong>piensa</strong>
                <p>mediante conceptos y categorías</p>
              </article>
            </div>

            <div className="ontsep21-time">
              <span>DETERMINACIONES TEMPORALES</span>
              <div>
                <b>sucesión</b>
                <b>simultaneidad</b>
                <b>permanencia</b>
              </div>
            </div>

            <div className="ontsep14-callout ontsep21-callout">
              <span>CAUSALIDAD</span>
              <strong>sucesión temporal reglada</strong>
              <p>
                La clase usa este caso para mostrar que no tenemos simplemente
                sensación → categoría; existe una mediación.
              </p>
            </div>
          </section>

          <section id="dialectica">
            <Heading n="11" eyebrow="Transitus">
              La Analítica prepara ya el problema de la Dialéctica trascendental
            </Heading>

            <div className="ontsep21-boundary">
              <article>
                <span>ANALÍTICA</span>
                <strong>uso legítimo</strong>
                <p>Categorías aplicadas a objetos de experiencia posible.</p>
              </article>
              <div>│</div>
              <article className="active">
                <span>DIALÉCTICA</span>
                <strong>pretensión de rebasar el límite</strong>
                <p>La razón intenta pensar más allá de la experiencia posible.</p>
              </article>
            </div>

            <div className="ontsep7-thesis">
              <span>PRÓXIMO PROBLEMA</span>
              <strong>
                ¿Qué ocurre cuando categorías como existencia o necesidad se aplican a
                objetos metafísicos que no pueden darse fenoménicamente?
              </strong>
            </div>
          </section>

          <section id="existencia">
            <Heading n="12" eyebrow="Esse non est praedicatum reale">
              Existencia, Dios y la anticipación del argumento ontológico
            </Heading>

            <div className="ontsep21-existence">
              <span>CONCEPTO DE DIOS</span>
              <b>≠</b>
              <span>EXISTENCIA DE DIOS</span>
            </div>

            <div className="ontsep14-callout ontsep21-callout">
              <span>TESIS ANTICIPADA EN CLASE</span>
              <strong>“El ser no es un predicado real.”</strong>
              <p>
                Afirmar que algo existe no añade una propiedad al concepto del mismo modo
                que “rojo”, “grande” o “poderoso”. Por eso el mero análisis del concepto
                de Dios no garantiza su existencia.
              </p>
            </div>

            <div className="ontsep21-warning">
              <strong>La sesión sólo abre este problema.</strong>
              <p>
                La crítica detallada del argumento ontológico queda reservada para la
                entrada posterior en la Dialéctica trascendental.
              </p>
            </div>
          </section>

          <section id="principios">
            <Heading n="13" eyebrow="Principia intellectus puri">
              Analogías y Postulados responden al problema de necesidad en la experiencia
            </Heading>

            <div className="ontsep21-principles">
              {[
                ['I', 'Axiomas de la intuición'],
                ['II', 'Anticipaciones de la percepción'],
                ['III', 'Analogías de la experiencia'],
                ['IV', 'Postulados del pensamiento empírico'],
              ].map(([n, title]) => (
                <article key={n}>
                  <span>{n}</span>
                  <strong>{title}</strong>
                </article>
              ))}
            </div>

            <div className="ontsep14-callout ontsep21-callout">
              <span>PREGUNTA FINAL DE LA CLASE</span>
              <strong>¿Cómo puede Kant predicar necesidad de las leyes físicas?</strong>
              <p>
                El profesor remite al Sistema de todos los principios del entendimiento
                puro, especialmente Analogías y Postulados, para desarrollar la respuesta.
              </p>
            </div>
          </section>

          <section id="cierre">
            <Heading n="14" eyebrow="Status lectionis">
              Dónde queda la lectura al terminar la sesión
            </Heading>

            <div className="ontsep21-status">
              <article className="done">
                <span>YA TRABAJADO</span>
                <strong>Estética trascendental</strong>
                <p>sensibilidad · espacio · tiempo</p>
              </article>
              <article className="active">
                <span>SESIÓN ACTUAL</span>
                <strong>Analítica trascendental</strong>
                <p>juicios · categorías · deducciones · esquematismo</p>
              </article>
              <article>
                <span>DESPUÉS</span>
                <strong>Dialéctica trascendental</strong>
                <p>límites de la metafísica · pruebas de Dios</p>
              </article>
            </div>

            <div className="ontsep21-actions">
              <Link to="/tareas/ontologia-ii/kant-analitica-trascendental">
                Abrir tarea · Analítica trascendental →
              </Link>
              <Link to="/tareas/ontologia-ii/kant-dialectica-trascendental">
                Abrir Dialéctica trascendental →
              </Link>
              <Link to="/semestre/5/ontologia-ii">
                Volver a Ontología II
              </Link>
            </div>

            <div className="ontsep21-reading-note">
              <span>NOTA DE FUENTE</span>
              <strong>
                En esta transcripción no se registra una nueva tarea formal al cierre.
              </strong>
              <p>
                Sí se anuncia que después se trabajará la Dialéctica trascendental y la
                crítica kantiana de la prueba ontológica.
              </p>
            </div>
          </section>
        </article>
      </div>

      <section className="oaf-documentum">
        <div><small>DOCUMENTUM</small><h2>Criterio documental</h2></div>
        <p>
          Esta edición conserva las quince secciones de la página anterior:
          Aristóteles, giro kantiano, lógicas, Hume, deducciones, juicios,
          categorías, ciencia, sintéticos a priori, esquematismo, Dialéctica,
          existencia, principios y cierre. También preserva los selectores
          interactivos de juicios y de la ruta causal Hume–Kant. ARCHIVUM añade
          contexto curatorial y Atlas; no recorta ni sustituye la clase.
        </p>
      </section>

      <footer className="oa-footer">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <span>☙ iudicium · categoriae · deductio · schema ❧</span>
        <span>XXI · IX · MMXXVI</span>
      </footer>
      </div>
    </main>
  )
}
