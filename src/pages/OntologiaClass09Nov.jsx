import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './OntologiaClass19Oct.css'
import './OntologiaClass04Nov.css'

const sections = [
  {
    id: 'despues-hegel',
    type: 'Transitus',
    title: 'Después de Hegel: entrada de Schopenhauer',
    paragraphs: [
      'Los apuntes abren la sesión con una transición explícita: después de la muerte de Hegel aparece Arthur Schopenhauer como una figura antihegeliana. La oposición se registra aquí como encuadre de la clase, sin convertirla en una reconstrucción completa de la relación histórica entre ambos autores.',
      'El hilo central del día no fue repasar el sistema hegeliano, sino volver al problema kantiano de fenómeno y cosa en sí para mostrar cómo Schopenhauer lo reorganiza y cómo esa reorganización prepara la entrada de Nietzsche.'
    ],
    simple: 'La clase cambia de eje: del idealismo hegeliano pasa a Schopenhauer y, desde él, a Nietzsche.',
    control: '“Antihegeliano” pertenece al modo en que la sesión presentó a Schopenhauer; esta página no añade una comparación doctrinal exhaustiva.'
  },
  {
    id: 'kant',
    type: 'Kant',
    title: 'Kant: fenómeno, espacio, tiempo y categorías',
    paragraphs: [
      'La clase retomó a Kant para recordar que aquello que conocemos aparece bajo condiciones del sujeto. En el apunte, el mundo fenoménico queda asociado con espacio, tiempo y categorías.',
      'Frente a este campo cognoscible permanece la cosa en sí. La sesión la utiliza como problema de enlace: Schopenhauer conservará la diferencia entre representación y fondo último de la realidad, pero no tratará ese fondo del mismo modo que Kant.'
    ],
    simple: 'Fenómeno es lo que aparece bajo nuestras condiciones de conocimiento; la cosa en sí marca el problema de lo que no se agota en esa aparición.'
  },
  {
    id: 'jacobi',
    type: 'Aporia',
    title: 'Jacobi y la presión sobre la cosa en sí',
    paragraphs: [
      'Los apuntes atribuyen a Jacobi una objeción formulada en forma disyuntiva: o la cosa en sí es causa de lo cognoscible o no existe. La sesión la emplea para tensar la posición kantiana.',
      'La formulación se conserva como apunte de aula. No se amplía aquí con una reconstrucción externa del argumento de Jacobi ni se presenta como cita literal.'
    ],
    simple: 'La dificultad es explicar qué papel puede tener la cosa en sí si no puede ser conocida como objeto de experiencia.',
    control: 'Se conserva la formulación del apunte; no se completa con palabras o premisas que no aparecen en la fuente disponible.'
  },
  {
    id: 'schopenhauer',
    type: 'Schopenhauer',
    title: 'El mundo como representación y como voluntad',
    paragraphs: [
      'La obra de Schopenhauer aparece en la sesión bajo el título El mundo como voluntad y representación. La distinción del apunte es directa: representación para el mundo tal como aparece; voluntad para el fondo que la clase vincula con la cosa en sí.',
      'Según la explicación registrada, para Schopenhauer la cosa en sí sí resulta cognoscible en un sentido decisivo: expresa el fondo último de la vida y de la realidad. Ese fondo se formula como voluntad de vida.'
    ],
    simple: 'Representación nombra el mundo que aparece; voluntad nombra el fondo que Schopenhauer identifica con lo que Kant había dejado como cosa en sí.',
    control: 'La expresión “cognoscible” y la equivalencia cosa en sí → voluntad se presentan como reconstrucción de la clase, no como cita textual de Schopenhauer.'
  },
  {
    id: 'puente-nietzsche',
    type: 'Genealogia',
    title: 'Schopenhauer como puente hacia Nietzsche',
    paragraphs: [
      'La sesión presenta a Schopenhauer como maestro intelectual de Nietzsche: el joven Nietzsche lo lee y ese encuentro aparece como decisivo para su entrada en la filosofía.',
      'El vínculo se vuelve visible enseguida en la primera obra mencionada de Nietzsche, El origen de la tragedia, que el apunte caracteriza como una obra de estética en la que ya aparece mucho de lo que después será su filosofía y que retoma el pesimismo schopenhaueriano.'
    ],
    simple: 'Schopenhauer no queda aislado: sirve de transición conceptual e intelectual hacia Nietzsche.'
  },
  {
    id: 'nietzsche-biografia',
    type: 'Vita',
    title: 'Nietzsche: notas biográficas de la sesión',
    paragraphs: [
      'Los apuntes registran las fechas 1844–1900 y describen a Nietzsche como una persona muy inteligente, enfermiza y con un periodo relativamente breve de producción lúcida antes de la enfermedad de sus últimos años.',
      'También aparece una anotación abreviada sobre “doctorado”, “26 años” y “filosofía en Alemania”. El apunte es demasiado ambiguo para convertirlo en un dato biográfico seguro, por lo que se conserva como laguna documental y no se desarrolla.'
    ],
    simple: 'La parte biográfica sirve sólo como contexto; el dato ambiguo del apunte se deja sin completar.',
    control: 'No se corrige ni se rellena la nota biográfica ambigua con información externa en esta página.'
  },
  {
    id: 'tragedia',
    type: 'Opus I',
    title: 'El origen de la tragedia: estética y pesimismo',
    paragraphs: [
      'La primera obra de Nietzsche destacada en los apuntes es El origen de la tragedia. La sesión la presenta como obra estética y señala que ya contiene elementos que después serán importantes en su filosofía.',
      'El punto de continuidad explícito con Schopenhauer es el pesimismo: la clase lo registra como una herencia que Nietzsche retoma en esta etapa inicial.'
    ],
    simple: 'La primera obra comentada ya permite ver la influencia de Schopenhauer en el Nietzsche temprano.'
  },
  {
    id: 'bien-mal',
    type: 'Opus II',
    title: 'Más allá del bien y del mal: el gesto anti-cartesiano',
    paragraphs: [
      'El segundo título que aparece en los apuntes es Más allá del bien y del mal. La clase lo caracteriza como anti-cartesiano y contrapone este gesto con Descartes, presentado como un filósofo que buscaba la verdad.',
      'El apunte se corta inmediatamente después de abrir un nuevo subapartado “Nietzsche:”. Por fidelidad documental, esta página no reconstruye el contenido que pudo seguir en la sesión.'
    ],
    simple: 'El hilo alcanza a plantear una oposición entre Nietzsche y el proyecto cartesiano de verdad, pero la continuación no está disponible.',
    control: 'La fuente visual termina aquí. Todo desarrollo posterior queda pendiente de nuevos apuntes.'
  }
]

const relation = {
  layout: 'hierarchy',
  direction: 'vertical',
  flowGap: 104,
  minHeight: 980,
  fitPadding: 62,
  sizeHint: 'tall',
  nodes: [
    { id: 'kant', label: 'Kant', caption: 'fenómeno · espacio · tiempo · categorías', shapeRole: 'structure' },
    { id: 'cosa', label: 'Cosa en sí', caption: 'límite que reaparece como problema', shapeRole: 'concept' },
    { id: 'jacobi', label: 'Jacobi', caption: 'presiona la función de la cosa en sí', shapeRole: 'mediation' },
    { id: 'schopenhauer', label: 'Schopenhauer', caption: 'mundo como representación y voluntad', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'representacion', label: 'Representación', caption: 'mundo fenoménico', shapeRole: 'concept' },
    { id: 'voluntad', label: 'Voluntad de vida', caption: 'fondo último de la realidad según la clase', shapeRole: 'result' },
    { id: 'nietzsche', label: 'Nietzsche', caption: 'lectura decisiva de Schopenhauer', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'tragedia', label: 'El origen de la tragedia', caption: 'estética · pesimismo', shapeRole: 'result' },
    { id: 'bien-mal', label: 'Más allá del bien y del mal', caption: 'gesto anti-cartesiano en el apunte', shapeRole: 'result' },
  ],
  edges: [
    { from: 'kant', to: 'cosa', label: 'deja abierto el problema de', relationKind: 'derives' },
    { from: 'jacobi', to: 'cosa', label: 'objeta la función de', relationKind: 'contrast' },
    { from: 'cosa', to: 'schopenhauer', label: 'es retomada por', relationKind: 'derives' },
    { from: 'schopenhauer', to: 'representacion', label: 'distingue', relationKind: 'hierarchical' },
    { from: 'schopenhauer', to: 'voluntad', label: 'identifica el fondo como', relationKind: 'hierarchical' },
    { from: 'voluntad', to: 'nietzsche', label: 'forma parte de la influencia sobre', relationKind: 'derives' },
    { from: 'nietzsche', to: 'tragedia', label: 'primera obra destacada', relationKind: 'hierarchical' },
    { from: 'nietzsche', to: 'bien-mal', label: 'segunda obra destacada', relationKind: 'hierarchical' },
  ],
  animation: { mode: 'sequence', nodeDuration: .22, edgeDuration: .24 },
}

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

export default function OntologiaClass09Nov() {
  return (
    <main className="oa-page oaf-page ont19-page ont04nov-page ont09nov-page">
      <div className="oa-backdrop" aria-hidden="true" />
      <div className="oa-brochure ont19-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>IX · XI · MMXXVI</span>
        </nav>

        <header className="ont19-cover ont04-cover">
          <div className="ont19-cover-text">
            <span className="oa-kicker">Archivum ontologicum · post Hegelum</span>
            <h1>Schopenhauer y Nietzsche: <em>voluntad, representación y ruptura</em></h1>
            <p className="ont19-subtitle">Kant · Jacobi · Schopenhauer · Nietzsche · Descartes</p>
            <p className="ont19-lead">
              La sesión vuelve al problema de la cosa en sí para mostrar el giro de Schopenhauer:
              el mundo aparece como representación, mientras la voluntad expresa el fondo de la vida.
              Desde ahí se abre la entrada a Nietzsche, su primera obra y el gesto anti-cartesiano
              registrado al final de los apuntes.
            </p>
            <div className="ont19-question">
              <small>Quaestio central</small>
              <strong>¿Cómo pasa la cosa en sí de límite kantiano a voluntad schopenhaueriana, y por qué ese desplazamiento importa para la entrada de Nietzsche?</strong>
            </div>
            <div className="ont19-actions">
              <button type="button" onClick={() => goTo('despues-hegel')}>Empezar la clase ↓</button>
              <Link to="/tareas/ontologia-ii/nietzsche-verdad-metafisica">Abrir Nietzsche · sistema 2D ↗</Link>
            </div>
          </div>

          <figure className="ont19-portrait ont04-figure">
            <img
              src={import.meta.env.BASE_URL + 'images/ontologia/2026-11-09/kant-schopenhauer-nietzsche.svg'}
              alt="Diagrama original: Kant y la cosa en sí conducen al giro de Schopenhauer hacia representación y voluntad, que abre el paso a Nietzsche"
              loading="eager"
            />
            <figcaption>
              <strong>Kant → Schopenhauer → Nietzsche</strong>
              <span>Diagrama pedagógico original de PHILOSOPHIA · 9 noviembre 2026 · sin materiales externos.</span>
            </figcaption>
          </figure>
        </header>

        <section className="ont04-source" aria-labelledby="ont09-source-title">
          <span>Frontera documental</span>
          <h2 id="ont09-source-title">Qué consta en los apuntes y qué no se completa</h2>
          <p>
            Esta página sistematiza únicamente el apunte visual disponible de la sesión del 9 de noviembre.
            Conserva como exposición de clase las relaciones Kant–Jacobi–Schopenhauer–Nietzsche y distingue
            los datos biográficos ambiguos. El apunte termina al iniciar un nuevo bloque sobre Nietzsche;
            por eso la continuación no se reconstruye. El sistema 2D de Nietzsche se enlaza como material
            de estudio ya existente, no como prueba de que todo su contenido haya sido explicado hoy.
          </p>
        </section>

        <section className="ont19-thesis ont04-thesis">
          <div><span>I · KANT</span><strong>Fenómeno</strong><p>Espacio, tiempo y categorías ordenan lo que aparece.</p></div>
          <div><span>II · APORÍA</span><strong>Cosa en sí</strong><p>Jacobi presiona el papel que puede desempeñar ese límite.</p></div>
          <div><span>III · SCHOPENHAUER</span><strong>Voluntad</strong><p>La clase identifica el fondo de la realidad con voluntad de vida.</p></div>
          <div><span>IV · NIETZSCHE</span><strong>Ruptura</strong><p>Schopenhauer funciona como puente hacia la crítica nietzscheana.</p></div>
        </section>

        <section className="ont19-atlas" aria-label="Esquema conceptual de la clase del 9 de noviembre">
          <div className="ont19-atlas-head">
            <span>Schema · reconstrucción pedagógica</span>
            <h2>Del límite kantiano a la entrada de Nietzsche</h2>
            <p>
              El esquema usa sólo relaciones presentes en el apunte. La geometría se delega a
              AnimatedConceptSchema para evitar posiciones rígidas, solapamientos y reencuadres
              manuales que ya han producido regresiones en otros mapas.
            </p>
          </div>
          <div className="oa-schema-card ont19-schema"><AnimatedConceptSchema schema={relation} /></div>
        </section>

        <div className="ont19-layout">
          <aside className="ont19-index" aria-label="Apartados de la clase">
            <p>Index lectionis</p>
            {sections.map((section, index) => (
              <button type="button" key={section.id} onClick={() => goTo(section.id)}>
                <span>{String(index + 1).padStart(2, '0')}</span>{section.title}
              </button>
            ))}
            <Link to="/tareas/ontologia-ii/nietzsche-verdad-metafisica">Nietzsche · sistema 2D ↗</Link>
            <Link to="/semestre/5/ontologia-ii/clase/4-noviembre">Clase anterior registrada ↗</Link>
          </aside>

          <div className="ont19-chapters">
            {sections.map((section, index) => (
              <section className="ont19-chapter" id={section.id} key={section.id}>
                <div className="ont19-chapter-marker">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <small>{section.type}</small>
                </div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                <details className="ont04-plain">
                  <summary>En palabras simples</summary>
                  <p>{section.simple}</p>
                </details>
                {section.control && (
                  <div className="ont19-caution">
                    <strong>Control académico</strong>
                    <p>{section.control}</p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        <section className="ont04-memory">
          <span>Memoria de 60 segundos</span>
          <h2>Lo mínimo que debe quedar claro</h2>
          <ol>
            <li><strong>Kant:</strong> fenómeno bajo espacio, tiempo y categorías; cosa en sí como problema límite.</li>
            <li><strong>Jacobi:</strong> la clase usa su objeción para tensar la función de la cosa en sí.</li>
            <li><strong>Schopenhauer:</strong> mundo como representación y voluntad; la voluntad aparece como fondo de la vida.</li>
            <li><strong>Nietzsche:</strong> Schopenhauer funciona como influencia decisiva; El origen de la tragedia retoma su pesimismo.</li>
            <li><strong>Final del apunte:</strong> Más allá del bien y del mal aparece como anti-cartesiano; la continuación de la sesión no está disponible.</li>
          </ol>
        </section>

        <footer className="ont19-footer">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/tareas/ontologia-ii/nietzsche-verdad-metafisica">Repasar Nietzsche en 2D ↗</Link>
          <button type="button" onClick={() => goTo('despues-hegel')}>Volver al inicio ↑</button>
          <small>Archivum ontologicum · IX · XI · MMXXVI</small>
        </footer>
      </div>
    </main>
  )
}
