import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './MethodsClass07Sep.css'
import './MethodsClass14Oct.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'objeto', 'Objeto de estudio'],
  ['02', 'tension', 'Tensión educativa'],
  ['03', 'estado', 'Estado del arte'],
  ['04', 'freire', 'Paulo Freire'],
  ['05', 'foucault', 'Michel Foucault'],
  ['06', 'rousseau', 'Rousseau'],
  ['07', 'fenomenologia', 'Método fenomenológico'],
  ['08', 'epoche', 'Epoché'],
  ['09', 'eidetica', 'Reducción eidética'],
  ['10', 'descripcion', 'Descripción fenomenológica'],
  ['11', 'intencionalidad', 'Intencionalidad y síntesis'],
  ['12', 'universidad', 'Universidad y humanidades'],
  ['13', 'protocolo', 'Cierre metodológico'],
]

const thinkers = [
  {
    id: 'freire',
    name: 'Paulo Freire',
    axis: 'educación · liberación',
    summary: 'La educación liberadora se opone al modelo bancario: diálogo, concientización y transformación de la realidad convierten la libertad en praxis.',
  },
  {
    id: 'foucault',
    name: 'Michel Foucault',
    axis: 'poder · disciplina',
    summary: 'La escuela puede leerse como dispositivo disciplinario: espacio, tiempo, vigilancia y normalización organizan cuerpos y conductas.',
  },
  {
    id: 'rousseau',
    name: 'Jean-Jacques Rousseau',
    axis: 'libertad · educación',
    summary: 'En Emilio, la educación no debe reducirse a imponer la voluntad del educador; el aprendizaje se vincula con la experiencia y las consecuencias de las cosas.',
  },
]

const methodSteps = [
  {
    id: 'epoche',
    number: 'I',
    label: 'Epoché',
    action: 'Suspender',
    body: 'Poner entre paréntesis reglamentos, derechos, planes de estudio, discursos pedagógicos y definiciones previas de libertad para atender la experiencia consciente e inmediata del estudiante.',
    invariant: 'No decidir de antemano dónde está la libertad.',
  },
  {
    id: 'eidetica',
    number: 'II',
    label: 'Reducción eidética',
    action: 'Variar',
    body: 'Aislar variables temporales, espaciales e institucionales y preguntar qué permanece cuando se retiran exámenes, materias, controles y otros elementos contingentes.',
    invariant: 'Buscar el núcleo invariante de la experiencia de libertad.',
  },
  {
    id: 'descripcion',
    number: 'III',
    label: 'Descripción',
    action: 'Registrar',
    body: 'Describir corporalidad, gestos, silencios, miradas, dolor, aburrimiento, susurros, dibujos y distracciones sin convertirlos inmediatamente en diagnósticos psicológicos.',
    invariant: 'El cuerpo aparece como otro lenguaje de la experiencia.',
  },
  {
    id: 'sintesis',
    number: 'IV',
    label: 'Síntesis intencional',
    action: 'Comprender',
    body: 'Reconstruir hacia qué se dirige la conciencia y cómo el estudiante conserva capacidad de apropiación del pensamiento aun dentro de una estructura que intenta orientar su atención.',
    invariant: 'Libertad como apropiación intencional del propio pensamiento.',
  },
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ number, eyebrow, children }) {
  return (
    <div className="methods-class-heading methods07-heading methods14oct-heading">
      <span>{number}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function MethodsClass14Oct() {
  const [activeMethod, setActiveMethod] = useState('epoche')
  const method = useMemo(
    () => methodSteps.find((item) => item.id === activeMethod) || methodSteps[0],
    [activeMethod],
  )

  return (
    <main className="methods-class-page methods07-page methods14oct-page">
      <nav className="methods-class-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <Link to="/" className="methods-class-brand">Φ · Philosophia</Link>
        <span>XIV · X · MMXXVI</span>
      </nav>

      <header className="methods-class-header methods07-header methods14oct-header">
        <div className="methods-header-rules" aria-hidden="true" />
        <div className="methods07-ghost methods14oct-ghost" aria-hidden="true">VIVENTIA</div>
        <div className="methods-header-symbol" aria-hidden="true">φ</div>
        <div className="methods07-hero-inner">
          <div>
            <p className="methods-class-kicker">FI104 · 14 de octubre de 2026 · Fenomenología</p>
            <h1>De la libertad como concepto a<em>la libertad vivida</em></h1>
            <p className="methods-class-subtitle">
              La sesión construye un objeto de estudio sobre libertad y educación y
              muestra cómo la fenomenología permite pasar de una definición abstracta
              a la experiencia concreta del estudiante dentro del aula.
            </p>
          </div>
          <aside className="methods07-thesis methods14oct-thesis">
            <span>IDEA CENTRAL</span>
            <strong>Entender un concepto no equivale todavía a comprender el fenómeno.</strong>
            <p>Comprender exige atender cómo la libertad se vive, se encarna y se ejerce en una situación concreta.</p>
          </aside>
        </div>
        <div className="methods-header-ornament">☙ ───── φ ───── ❧</div>
      </header>

      <section className="methods14oct-prologue">
        <div>
          <span>QUAESTIO</span>
          <h2>¿Dónde aparece la libertad cuando el aula también disciplina?</h2>
        </div>
        <p>
          El ejercicio de clase parte de una tensión: la escuela promete formar sujetos libres
          y críticos, pero al mismo tiempo organiza horarios, cuerpos, evaluaciones, vigilancia y
          conductas. La pregunta metodológica consiste en localizar la libertad en la vivencia del
          estudiante, no sólo en la norma que la declara.
        </p>
      </section>

      <div className="methods-class-layout methods14oct-layout">
        <aside className="methods-index methods14oct-index">
          <p>Index experientiae</p>
          <nav>{sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goTo(id)}><span>{number}</span>{label}</button>
          ))}</nav>
        </aside>

        <article className="methods-article methods14oct-article">
          <section id="mapa" className="methods-section">
            <Heading number="00" eyebrow="Ordo sessionis">Del tema general a la experiencia fenomenológica</Heading>
            <div className="methods14oct-route">
              <article><span>01</span><strong>Tema</strong><p>libertad + educación</p></article><b>→</b>
              <article><span>02</span><strong>Problema</strong><p>emancipación ↔ disciplina</p></article><b>→</b>
              <article><span>03</span><strong>Estado del arte</strong><p>Freire · Foucault · Rousseau</p></article><b>→</b>
              <article className="active"><span>04</span><strong>Fenómeno</strong><p>libertad vivida en el aula</p></article>
            </div>
            <div className="methods14oct-formula">
              <span>entender</span><b>≠</b><span>comprender</span><b>→</b><strong>vivenciar el concepto</strong>
            </div>
          </section>

          <section id="objeto" className="methods-section">
            <Heading number="01" eyebrow="Delimitatio">El objeto no es “la libertad” en abstracto</Heading>
            <p>
              El tema general propuesto es la libertad en la filosofía de la educación. Para volverlo
              investigable, la clase lo delimita hacia las vivencias de autodeterminación, elección y
              resistencia del estudiante dentro del espacio físico y simbólico del aula tradicional,
              especialmente entre secundaria y preparatoria.
            </p>
            <div className="methods14oct-object">
              <span>OBJETO DE ESTUDIO</span>
              <strong>Experiencias de autodeterminación, elección y resistencia dentro del aula.</strong>
              <p>La pregunta deja de ser qué dice jurídicamente la escuela sobre la libertad y pasa a cómo se experimenta esa libertad.</p>
            </div>
          </section>

          <section id="tension" className="methods-section">
            <Heading number="02" eyebrow="Problematica">Emancipar y disciplinar: la doble función de la escuela</Heading>
            <div className="methods14oct-dual">
              <article className="active"><span>IDEAL EMANCIPADOR</span><strong>formar sujetos libres y críticos</strong><p>El conocimiento debería ampliar autonomía, juicio y capacidad de cuestionamiento.</p></article>
              <b>↔</b>
              <article><span>LÓGICA DISCIPLINARIA</span><strong>adaptar cuerpos y mentes</strong><p>Horarios rígidos, asistencia, evaluación, productividad, obediencia y estandarización pueden orientar la formación hacia la adaptación.</p></article>
            </div>
            <blockquote className="methods14oct-problem">
              ¿Cómo experimenta y significa el estudiante su libertad —autonomía y agencia— en un entorno escolarizado que normaliza la restricción corporal, la vigilancia constante y la estandarización del pensamiento?
            </blockquote>
          </section>

          <section id="estado" className="methods-section">
            <Heading number="03" eyebrow="Status quaestionis">Tres autores para abrir el estado del arte</Heading>
            <p>
              El profesor propone organizar la búsqueda alrededor de tres ejes —educación, poder y libertad—
              y localizar qué se ha dicho de ellos antes de comenzar a buscar bibliografía sin dirección.
            </p>
            <div className="methods14oct-thinkers">
              {thinkers.map((item) => (
                <article key={item.id}>
                  <span>{item.axis.toUpperCase()}</span>
                  <strong>{item.name}</strong>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
            <div className="methods14oct-search">
              <span>DISEÑO DE BÚSQUEDA</span>
              <p>educación ↔ libertad · educación ↔ poder · poder ↔ libertad · autores contemporáneos que prolongan o discuten esos ejes.</p>
            </div>
          </section>

          <section id="freire" className="methods-section">
            <Heading number="04" eyebrow="Paulo Freire">De la educación bancaria a la praxis</Heading>
            <div className="methods14oct-compare">
              <article><span>EDUCACIÓN BANCARIA</span><strong>depósito de información</strong><p>El estudiante aparece como receptor pasivo y el saber como algo transferido.</p></article>
              <b>→</b>
              <article className="active"><span>EDUCACIÓN LIBERADORA</span><strong>diálogo · concientización · transformación</strong><p>La libertad educativa se construye como praxis: reflexión y acción sobre la realidad.</p></article>
            </div>
            <div className="methods14oct-maxim"><span>PRAXIS</span><strong>acción + reflexión</strong><p>Pensar y actuar se retroalimentan; el pensamiento crítico no queda separado de la transformación de la experiencia.</p></div>
          </section>

          <section id="foucault" className="methods-section">
            <Heading number="05" eyebrow="Michel Foucault">Espacio y tiempo como tecnologías disciplinarias</Heading>
            <p>
              La escuela se presenta como un caso privilegiado para observar cómo se distribuyen
              espacio y tiempo. La banca, el horario, la vigilancia y la repetición de rutinas no son
              detalles neutrales: forman una organización material de la conducta.
            </p>
            <div className="methods14oct-discipline">
              <span>ESPACIO</span><b>+</b><span>TIEMPO</span><b>+</b><span>VIGILANCIA</span><b>→</b><strong>cuerpos dóciles</strong>
            </div>
          </section>

          <section id="rousseau" className="methods-section">
            <Heading number="06" eyebrow="Jean-Jacques Rousseau">Libertad natural y función del educador</Heading>
            <p>
              A partir de <em>Emilio</em>, la clase contrasta la imposición directa con una educación
              en la que las elecciones del individuo se relacionan con la experiencia y con las
              consecuencias de las cosas. El docente aparece menos como quien impone una voluntad y
              más como quien facilita condiciones para aprender.
            </p>
            <div className="methods14oct-formula"><span>imposición</span><b>≠</b><strong>facilitación de la experiencia</strong></div>
          </section>

          <section id="fenomenologia" className="methods-section">
            <Heading number="07" eyebrow="Methodus phaenomenologica">La pregunta cambia: ¿cómo se vive la libertad?</Heading>
            <p>
              La fenomenología se introduce como método para explorar la libertad no como proclama
              teórica, definición legal o ideal pedagógico, sino como fenómeno vivido e incorporado.
              La secuencia operativa trabajada en clase avanza por cuatro movimientos.
            </p>
            <div className="methods14oct-method-tabs">
              {methodSteps.map((item) => (
                <button key={item.id} type="button" className={activeMethod === item.id ? 'active' : ''} onClick={() => setActiveMethod(item.id)}>
                  <span>{item.number}</span><strong>{item.label}</strong><small>{item.action}</small>
                </button>
              ))}
            </div>
            <article className="methods14oct-method-focus">
              <span>{method.action.toUpperCase()}</span>
              <h3>{method.label}</h3>
              <p>{method.body}</p>
              <strong>{method.invariant}</strong>
            </article>
          </section>

          <section id="epoche" className="methods-section">
            <Heading number="08" eyebrow="Epoché">Suspender lo que ya creemos saber de la escuela</Heading>
            <p>
              La aplicación práctica consiste en poner entre paréntesis reglas escolares, derechos,
              obligaciones, planes de estudio, currículo y discursos previos acerca de la autonomía.
              No se niega que existan; se evita que decidan anticipadamente qué debe contar como libertad.
            </p>
            <div className="methods14oct-brackets">
              <article><span>SE SUSPENDE</span><strong>marco jurídico · currículo · teoría pedagógica</strong></article>
              <b>→</b>
              <article className="active"><span>SE ATIENDE</span><strong>experiencia consciente e inmediata durante la jornada escolar</strong></article>
            </div>
          </section>

          <section id="eidetica" className="methods-section">
            <Heading number="09" eyebrow="Reductio eidetica">Buscar qué permanece al variar las condiciones</Heading>
            <p>
              La reducción eidética se formula como una variación: ¿qué queda si retiramos exámenes,
              materias, controles y otros elementos contingentes? El ejercicio de clase propone que
              el núcleo de la libertad escolar no reside simplemente en el currículo, sino en la
              capacidad de decidir sobre el propio cuerpo y sobre el flujo del propio pensamiento.
            </p>
            <div className="methods14oct-eidetic">
              <span>exámenes</span><span>currículo</span><span>controles</span><span>horario</span><b>−</b><strong>¿qué permanece?</strong>
            </div>
            <div className="methods14oct-result"><span>INVARIANTE PROPUESTO</span><strong>capacidad de decidir sobre el propio cuerpo y orientar el propio pensamiento.</strong></div>
          </section>

          <section id="descripcion" className="methods-section">
            <Heading number="10" eyebrow="Descriptio">El cuerpo como lenguaje de la experiencia</Heading>
            <p>
              La descripción fenomenológica registra cómo la situación escolar se expresa en la
              corporalidad: permanecer horas en una banca, dolor de espalda, aburrimiento, contención
              de la voz, miradas, silencios y pequeños gestos de apropiación del tiempo propio.
            </p>
            <div className="methods14oct-gestures">
              <article><span>01</span><strong>dibujar en el margen</strong><p>microdecisión corporal y atencional.</p></article>
              <article><span>02</span><strong>susurrar</strong><p>apertura de un espacio mínimo de relación.</p></article>
              <article><span>03</span><strong>mirada perdida</strong><p>la atención puede desplazarse hacia una reflexión propia.</p></article>
              <article><span>04</span><strong>silencio / postura</strong><p>la corporalidad también expresa tensión, cansancio o resistencia.</p></article>
            </div>
            <div className="methods14oct-warning"><span>PRECAUCIÓN</span><p>Un gesto no autoriza por sí solo a concluir “está aburrido” o “no le interesa”. Primero se describe; la interpretación viene después.</p></div>
          </section>

          <section id="intencionalidad" className="methods-section">
            <Heading number="11" eyebrow="Intentionalitas">La libertad como apropiación del pensamiento</Heading>
            <p>
              La síntesis de la sesión ubica la intencionalidad en la capacidad de la conciencia para
              no quedar totalmente absorbida por el estímulo que la institución intenta dirigir. Aun
              bajo confinamiento físico, el estudiante puede orientar, reelaborar y apropiarse de lo
              que piensa.
            </p>
            <blockquote className="methods14oct-synthesis">
              En el análisis propuesto en clase, la libertad escolar no significa ausencia de reglas,
              sino el acto intencional mediante el cual el estudiante resiste una dirección total de
              su conciencia y se apropia de su propio pensamiento.
            </blockquote>
            <div className="methods14oct-flowline"><span>restricción corporal</span><b>↔</b><span>interioridad</span><b>→</b><strong>pensamiento crítico</strong></div>
          </section>

          <section id="universidad" className="methods-section">
            <Heading number="12" eyebrow="Justo Sierra · humanidades">¿Para qué forma una universidad?</Heading>
            <p>
              Hacia el cierre se lee y comenta un fragmento de Justo Sierra para distinguir la función
              de la educación básica de la universitaria. La universidad aparece ligada a la formación
              intelectual, a la producción de conocimiento y a la exigencia de no separarse de la vida
              social del país.
            </p>
            <div className="methods14oct-university">
              <article><span>ESCUELA BÁSICA</span><strong>formación integral</strong><p>voluntad, dimensión física, intelectual, moral y social.</p></article>
              <article className="active"><span>UNIVERSIDAD</span><strong>intelectualizar y producir saber</strong><p>evitar una élite aislada y orientar el conocimiento hacia la realidad en la que se vive.</p></article>
            </div>
            <div className="methods14oct-humanities"><span>CONTRASTE DE CLASE</span><p>Las humanidades se presentan como un espacio difícil de reducir a reactivos estandarizados: su práctica exige argumentar, contraargumentar, relacionar conceptos y someter razones a examen.</p></div>
          </section>

          <section id="protocolo" className="methods-section">
            <Heading number="13" eyebrow="Protocollum">Qué debe quedar claro en una investigación fenomenológica</Heading>
            <div className="methods14oct-protocol">
              <article><span>01</span><strong>Objeto</strong><p>qué vivencia concreta se estudiará.</p></article>
              <article><span>02</span><strong>Problemática</strong><p>qué tensión vuelve filosóficamente relevante el fenómeno.</p></article>
              <article><span>03</span><strong>Estado del arte</strong><p>qué autores y ejes orientan una búsqueda no arbitraria.</p></article>
              <article><span>04</span><strong>Método</strong><p>epoché → reducción eidética → descripción → síntesis intencional.</p></article>
            </div>
            <div className="methods14oct-conclusion">
              <span>TESIS METODOLÓGICA DE LA SESIÓN</span>
              <strong>Una investigación gana fuerza cuando puede decir qué busca, desde dónde lo mira y cómo va a comprender la vivencia del concepto.</strong>
            </div>
            <div className="methods14oct-continuity">
              <span>CONTINUIDAD DEL CURSO</span>
              <p>Se menciona una futura exposición o lectura sobre hermenéutica analógica de Mauricio Beuchot, aproximadamente hacia mediados de noviembre. La sesión no fija con suficiente claridad una fecha exacta ni un responsable, por lo que se conserva sólo como continuidad pendiente.</p>
            </div>
            <div className="methods14oct-actions">
              <Link to="/semestre/5/metodos-de-investigacion">Volver a Métodos de Investigación</Link>
              <button type="button" onClick={() => goTo('mapa')}>Volver al mapa ↑</button>
            </div>
          </section>
        </article>
      </div>

      <footer className="methods-class-footer">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <span>☙ φ · experientia ❧</span>
        <span>XIV · X · MMXXVI</span>
      </footer>
    </main>
  )
}
