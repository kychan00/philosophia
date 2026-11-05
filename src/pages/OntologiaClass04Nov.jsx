import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './OntologiaClass19Oct.css'
import './OntologiaClass04Nov.css'

const sections = [
  {
    id: 'ruta-semestre',
    type: 'Praefatio',
    title: 'Cierre del semestre y ruta de trabajo',
    paragraphs: [
      'El profesor abrió con observaciones generales sobre el examen: señaló que, en conjunto, el grupo salió bien, aunque algunas respuestas se alejaron del punto preciso de las preguntas. También insistió en la responsabilidad del estudiante respecto de sus propias respuestas y del uso de herramientas de inteligencia artificial.',
      'Para el mes restante anunció una secuencia general: esta sesión se dedicaría a Kołakowski y el positivismo; después vendrían Nietzsche y, posteriormente, Husserl y Heidegger. La acreditación de la licenciatura y otras actividades institucionales podrían alterar alguna sesión, por lo que pidió mantener las lecturas al día.'
    ],
    simple: 'La clase entra en el tramo final del curso: positivismo ahora; Nietzsche, Husserl y Heidegger después.'
  },
  {
    id: 'antecedentes',
    type: 'Genealogia',
    title: 'Antecedentes: Hume, Kant y Descartes',
    paragraphs: [
      'La exposición retomó tres antecedentes ya trabajados. De Hume recuperó la distinción entre verdades de razón y verdades de hecho, asociándola al escepticismo gnoseológico y a la exigencia de no ir más allá de lo que puede justificarse por experiencia o por relaciones de ideas.',
      'De Kant recordó la imposibilidad de convertir la metafísica tradicional en ciencia bajo el modelo físico-matemático de Newton. De Descartes recuperó el ideal moderno de dominio de la naturaleza. La clase presentó estos tres hilos como antecedentes del horizonte positivista, no como una genealogía exhaustiva.'
    ],
    simple: 'El positivismo hereda una desconfianza frente a la metafísica y toma a la ciencia como modelo de conocimiento.',
    control: 'La relación entre Hume, Kant, Descartes y el positivismo se registra como encuadre docente de la sesión.'
  },
  {
    id: 'comte',
    type: 'Historia',
    title: 'Comte y la concepción científico-tecnológica del mundo',
    paragraphs: [
      'El profesor situó el positivismo como filosofía predominante de la segunda mitad del siglo XIX y lo vinculó con el desarrollo industrial del capitalismo. Presentó a Auguste Comte como figura central y explicó la teoría de los tres estadios como una manera de ordenar el tránsito hacia una etapa científica.',
      'En el pizarrón, la clase asoció el estadio religioso, el metafísico y el científico con grandes momentos históricos. Esa asociación se conserva como esquema de aula. El punto filosófico principal fue que el positivismo entiende la ciencia como forma privilegiada de explicación del mundo y desplaza las explicaciones religiosas o metafísicas del ámbito del conocimiento.'
    ],
    simple: 'Para el positivismo, la explicación científica ocupa el lugar principal en la comprensión del mundo.',
    control: 'La periodización concreta de los tres estadios se conserva como exposición de clase; no se presenta aquí como cita literal de Comte.'
  },
  {
    id: 'rasgos',
    type: 'Positivismus',
    title: 'Tres rasgos generales: hechos, progreso y antimetaﬁsica',
    paragraphs: [
      'La sesión sintetizó tres rasgos del positivismo: culto a los hechos, fe en el progreso y rechazo de la metafísica. El énfasis en los hechos intenta limitar la especulación; la fe en el progreso asocia ciencia y tecnología con mejora de la existencia; y el rechazo de la metafísica cuestiona conceptos que no puedan conectarse con experiencia o investigación científica.',
      'El profesor subrayó que esta concepción científico-tecnológica tuvo enorme éxito histórico: la tecnología pasó a organizar una parte creciente de la vida cotidiana. Precisamente por eso, la clase abrió la pregunta crítica sobre si progreso técnico significa también progreso humano, moral o político.'
    ],
    simple: 'Hechos, progreso y rechazo de la metafísica forman el núcleo del imaginario positivista trabajado en clase.'
  },
  {
    id: 'fenomenalismo',
    type: 'Regula I',
    title: 'Fenomenalismo: conocer fenómenos, no esencias',
    paragraphs: [
      'Al entrar en Kołakowski, la primera regla fue el fenomenalismo. La exposición lo formuló como la limitación del conocimiento a aquello que aparece y puede entrar en la experiencia. La ciencia no necesita postular una esencia oculta detrás de los fenómenos para producir conocimiento.',
      'La clase relacionó esta regla con Kant, pero marcando una diferencia: en el positivismo, la cosa en sí y las esencias dejan de funcionar como objetos legítimos de investigación científica. La tarea de la ciencia es organizar y relacionar fenómenos, encontrar regularidades y formular explicaciones controlables.'
    ],
    simple: 'La ciencia trabaja con lo que aparece y puede investigarse; no necesita una realidad metafísica detrás de los fenómenos.',
    control: 'Esta formulación combina explicación docente y la lectura previa de Kołakowski; no se convierte en una cita textual del libro.'
  },
  {
    id: 'nominalismo',
    type: 'Regula II',
    title: 'Nominalismo: conceptos y leyes sin hipóstasis',
    paragraphs: [
      'La segunda regla fue el nominalismo. Los conceptos generales no deben tratarse como sustancias existentes por sí mismas. Un universal tiene sentido en la medida en que permite organizar individuos, casos o fenómenos.',
      'Las leyes científicas fueron presentadas como generalizaciones que organizan regularidades observadas. La clase insistió en que una ley universal no autoriza a convertir sus términos abstractos en entidades separadas de los casos a los que se aplican.'
    ],
    simple: 'Un concepto general sirve para ordenar casos; no por eso existe como una cosa separada.',
    control: 'En los apuntes aparece una discusión posterior sobre contraejemplos y revisión de leyes; el nombre del autor mencionado en ese pasaje no se recupera con seguridad y no se completa.'
  },
  {
    id: 'valores',
    type: 'Regula III',
    title: 'Juicios cognoscitivos y juicios de valor',
    paragraphs: [
      'La tercera regla fue la separación entre juicios cognoscitivos y juicios de valor. En la reconstrucción de clase, los juicios de la ciencia aspiran a validación objetiva, mientras que los juicios éticos o estéticos no obtienen esa misma validación por el método científico.',
      'El profesor convirtió esta separación en un problema crítico: si la ciencia y la tecnología se desarrollan sin una discusión ética capaz de orientar su uso, el aumento del poder técnico puede amplificar también la violencia. Las guerras mundiales, el armamento nuclear y la capacidad contemporánea de destrucción fueron usados como ejemplos de esa tensión.'
    ],
    simple: 'La ciencia puede decir cómo funciona algo; eso no basta para decidir si debemos usarlo de cierta manera.',
    control: 'Los ejemplos históricos y políticos se registran como aplicaciones y valoraciones expuestas en clase, no como tesis atribuidas a Kołakowski.'
  },
  {
    id: 'unidad-metodo',
    type: 'Regula IV',
    title: 'Unidad del método y criterio de demarcación',
    paragraphs: [
      'La cuarta regla fue la unidad del método. El profesor describió el modelo positivista como naturalista o cientificista: las disciplinas que aspiren a conocimiento riguroso deben acercarse al método de las ciencias naturales, con la física como paradigma.',
      'Desde este punto de vista se establece un criterio de demarcación para palabras como saber, conocer y conocimiento. La clase vinculó el conocimiento legítimo con proposiciones conectadas con verdades de hecho o relaciones formales, y presentó la filosofía como clarificación conceptual y preparación para problemas que, cuando sea posible, puedan pasar a investigación empírica.'
    ],
    simple: 'El positivismo quiere un mismo ideal de rigor para el conocimiento: observación, prueba, claridad y control.'
  },
  {
    id: 'tecnologia',
    type: 'Disputatio',
    title: 'La crítica contemporánea: tecnología, vigilancia e inteligencia artificial',
    paragraphs: [
      'La discusión se desplazó desde el positivismo histórico hacia sus consecuencias contemporáneas. El profesor observó que la vida cotidiana está profundamente mediada por celulares, redes, vehículos, sistemas digitales e inteligencia artificial. El llamado internet de las cosas apareció como ejemplo de esa expansión tecnológica.',
      'La clase planteó dos riesgos: concentración de poder en empresas tecnológicas y dependencia creciente de sistemas que recopilan datos o automatizan decisiones. También discutió la posibilidad de errores en sistemas de inteligencia artificial, el uso militar de tecnologías de localización y el problema de entrenar sistemas cuya eficiencia puede modificar empleos y profesiones.',
      'El punto filosófico no fue rechazar la tecnología, sino negar que su avance equivalga por sí mismo a progreso moral. El profesor pidió pensar en qué necesidades sociales concretas debería emplearse la tecnología y bajo qué criterios éticos.'
    ],
    simple: 'Más tecnología significa más capacidad; la pregunta ética es para qué, para quién y bajo qué control.'
  },
  {
    id: 'religion-transhumanismo',
    type: 'Disputatio',
    title: 'Ciencia, nueva autoridad y transhumanismo',
    paragraphs: [
      'La clase señaló una tensión interna en Comte: después de describir el estadio religioso como superado, su proyecto termina atribuyendo a la ciencia y a los científicos una función de autoridad social que el profesor comparó con una nueva forma de religión.',
      'A partir de ahí surgió el transhumanismo como prolongación contemporánea del imaginario técnico. La muerte fue presentada, en la discusión, como algo que algunos proyectos tecnocientíficos intentan tratar como problema técnico; prótesis, implantes y ampliación de capacidades sirvieron para ilustrar esa aspiración.',
      'La objeción central fue distributiva y política: incluso si ciertas ampliaciones técnicas fueran posibles, no se sigue que estén disponibles para todos. La discusión añadió problemas de seguridad, dependencia tecnológica y desigualdad de acceso.'
    ],
    simple: 'La tecnología puede prometer capacidades antes atribuidas a la religión, pero sigue abierta la pregunta por acceso, poder y sentido.'
  },
  {
    id: 'continuidad',
    type: 'Continuatio',
    title: 'Continuidad del curso',
    paragraphs: [
      'Al cierre, el profesor indicó que la siguiente etapa del curso será Nietzsche y que ya había enviado materiales por correo. Después se trabajarán Husserl y Heidegger.',
      'Los apuntes no permiten recuperar con seguridad las páginas concretas que deberán revisarse para la siguiente sesión. Por ello no se registra aquí una tarea con rango o fecha inventados. La continuidad segura es: preparar Nietzsche con los materiales enviados por el profesor.'
    ],
    simple: 'Siguiente autor: Nietzsche. Las páginas exactas deben confirmarse en el material enviado por el profesor.',
    control: 'No se crea una tarea independiente porque el rango de páginas no consta con seguridad en la fuente disponible.'
  }
]

const relation = {
  layout: 'hierarchy',
  direction: 'vertical',
  flowGap: 88,
  minHeight: 860,
  fitPadding: 54,
  sizeHint: 'tall',
  nodes: [
    { id: 'antecedentes', label: 'Hume · Kant · Descartes', caption: 'experiencia · límites · dominio de la naturaleza', shapeRole: 'structure' },
    { id: 'positivismo', label: 'Positivismo', caption: 'ciencia como horizonte privilegiado de conocimiento', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'fenomenos', label: 'I · Fenomenalismo', caption: 'conocer fenómenos', shapeRole: 'concept' },
    { id: 'nombres', label: 'II · Nominalismo', caption: 'universales sin hipóstasis', shapeRole: 'concept' },
    { id: 'valores', label: 'III · Juicios de valor', caption: 'ciencia y ética no se identifican', shapeRole: 'mediation' },
    { id: 'metodo', label: 'IV · Unidad del método', caption: 'ideal científico común', shapeRole: 'concept' },
    { id: 'critica', label: 'Problema contemporáneo', caption: 'poder técnico ≠ progreso moral', shapeRole: 'result', emphasis: true, tone: 'accent' },
  ],
  edges: [
    { from: 'antecedentes', to: 'positivismo', label: 'preparan el horizonte de', relationKind: 'derives' },
    { from: 'positivismo', to: 'fenomenos', label: 'regla I', relationKind: 'hierarchical' },
    { from: 'positivismo', to: 'nombres', label: 'regla II', relationKind: 'hierarchical' },
    { from: 'positivismo', to: 'valores', label: 'regla III', relationKind: 'hierarchical' },
    { from: 'positivismo', to: 'metodo', label: 'regla IV', relationKind: 'hierarchical' },
    { from: 'valores', to: 'critica', label: 'abre la pregunta ética por', relationKind: 'derives' },
    { from: 'metodo', to: 'critica', label: 'amplía el poder de', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .22, edgeDuration: .24 },
}

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

export default function OntologiaClass04Nov() {
  return (
    <main className="oa-page oaf-page ont19-page ont04nov-page">
      <div className="oa-backdrop" aria-hidden="true" />
      <div className="oa-brochure ont19-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>IV · XI · MMXXVI</span>
        </nav>

        <header className="ont19-cover ont04-cover">
          <div className="ont19-cover-text">
            <span className="oa-kicker">Archivum ontologicum · scientia et critica</span>
            <h1>Positivismo: <em>ciencia, método y límites</em></h1>
            <p className="ont19-subtitle">Hume · Kant · Comte · Kołakowski · tecnología</p>
            <p className="ont19-lead">
              La sesión reconstruye los antecedentes del positivismo, sus rasgos generales
              y las cuatro reglas que Kołakowski utiliza para delimitar esta actitud filosófica.
              Después abre la pregunta por el costo ético y político de una civilización organizada
              alrededor del poder científico-tecnológico.
            </p>
            <div className="ont19-question">
              <small>Quaestio central</small>
              <strong>¿Qué gana el conocimiento cuando limita la metafísica y qué problemas aparecen si la ciencia pretende definir por sí sola todo lo valioso?</strong>
            </div>
            <div className="ont19-actions">
              <button type="button" onClick={() => goTo('antecedentes')}>Empezar la clase ↓</button>
              <Link to="/tareas/ontologia-ii/kolakowski-positivismo">Abrir atlas 2D de Kołakowski ↗</Link>
            </div>
          </div>

          <figure className="ont19-portrait ont04-figure">
            <img
              src={import.meta.env.BASE_URL + 'images/ontologia/2026-11-04/positivismo-cuatro-reglas.svg'}
              alt="Esquema original del positivismo: antecedentes modernos, Comte, cuatro reglas de Kołakowski y crítica contemporánea del poder tecnológico"
              loading="eager"
            />
            <figcaption>
              <strong>Positivismo · cuatro reglas y una tensión</strong>
              <span>Diagrama pedagógico original de PHILOSOPHIA · 4 noviembre 2026 · sin materiales externos.</span>
            </figcaption>
          </figure>
        </header>

        <section className="ont04-source" aria-labelledby="ont04-source-title">
          <span>Frontera documental</span>
          <h2 id="ont04-source-title">Qué pertenece a la clase y qué pertenece al libro</h2>
          <p>
            Esta página sistematiza la exposición docente del 4 de noviembre y la lectura previa de
            Leszek Kołakowski. Cuando se formula una tesis como explicación del profesor se mantiene
            en esa capa; las cuatro reglas se enlazan con el dossier de estudio del capítulo I, pero
            no se presentan como citas literales. Las aplicaciones a guerras, tecnología, IA,
            vigilancia o transhumanismo son discusiones de aula y no afirmaciones atribuidas al autor.
          </p>
        </section>

        <section className="ont19-thesis ont04-thesis">
          <div><span>I · FENÓMENO</span><strong>Experiencia</strong><p>La ciencia se limita a fenómenos investigables.</p></div>
          <div><span>II · NOMBRE</span><strong>Conceptos</strong><p>Los universales no deben convertirse en sustancias.</p></div>
          <div><span>III · VALOR</span><strong>Ética</strong><p>El poder científico no decide por sí mismo lo que debe hacerse.</p></div>
          <div><span>IV · MÉTODO</span><strong>Unidad</strong><p>La ciencia natural funciona como ideal de rigor.</p></div>
        </section>

        <section className="ont19-atlas" aria-label="Esquema conceptual del positivismo">
          <div className="ont19-atlas-head">
            <span>Schema · reconstrucción pedagógica</span>
            <h2>De los antecedentes a las cuatro reglas</h2>
            <p>
              El esquema resume el hilo efectivamente trabajado en clase. Las cuatro ramas corresponden
              a la organización de Kołakowski; la conexión final con el problema tecnocientífico pertenece
              a la discusión docente del día.
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
            <Link to="/tareas/ontologia-ii/kolakowski-positivismo">Kołakowski · sistema 2D ↗</Link>
            <Link to="/semestre/5/ontologia-ii/clase/26-octubre">Clase anterior registrada ↗</Link>
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
            <li><strong>Antecedentes:</strong> Hume limita la necesidad causal; Kant limita la metafísica como ciencia; Descartes representa el proyecto moderno de dominio de la naturaleza.</li>
            <li><strong>Comte:</strong> la ciencia aparece como horizonte dominante de explicación y progreso.</li>
            <li><strong>Kołakowski:</strong> fenomenalismo, nominalismo, separación de conocimiento y valor, unidad del método.</li>
            <li><strong>Tensión:</strong> crecimiento del poder técnico no equivale automáticamente a progreso ético o político.</li>
            <li><strong>Continuidad:</strong> Nietzsche será el siguiente autor; las páginas concretas deben confirmarse en los materiales del profesor.</li>
          </ol>
        </section>

        <footer className="ont19-footer">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/tareas/ontologia-ii/kolakowski-positivismo">Repasar Kołakowski en 2D ↗</Link>
          <button type="button" onClick={() => goTo('ruta-semestre')}>Volver al inicio ↑</button>
          <small>Archivum ontologicum · IV · XI · MMXXVI</small>
        </footer>
      </div>
    </main>
  )
}
