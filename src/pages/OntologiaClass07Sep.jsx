import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './OntologiaClass07Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la clase'],
  ['01', 'metafisica', 'Metafísica en crisis'],
  ['02', 'criticismo', 'Dogmatismo · escepticismo · crítica'],
  ['03', 'hume-newton', 'Hume ↔ Newton'],
  ['04', 'juicios', 'Analítico · sintético'],
  ['05', 'sap', 'Sintético a priori'],
  ['06', 'arquitectura', 'Arquitectura de la Crítica'],
  ['07', 'facultades', 'Sensibilidad · entendimiento'],
  ['08', 'trascendental', 'Sujeto trascendental'],
  ['09', 'copernico', 'Revolución copernicana'],
  ['10', 'fenomeno', 'Fenómeno · cosa en sí'],
  ['11', 'dialectica', 'Dialéctica trascendental'],
  ['12', 'ontologia', '¿Dónde queda la ontología?'],
  ['13', 'piaget', 'Kant ↔ Piaget'],
]

const judgmentMatrix = [
  {
    id: 'analytic',
    label: 'ANALÍTICO',
    title: 'El predicado está contenido en el concepto',
    origin: 'a priori',
    force: 'necesario',
    gain: 'no amplía del mismo modo que un juicio sintético',
  },
  {
    id: 'synthetic',
    label: 'SINTÉTICO',
    title: 'El predicado añade una determinación nueva',
    origin: 'en principio, a posteriori',
    force: 'contingente cuando es empírico',
    gain: 'amplía el conocimiento',
  },
  {
    id: 'sap',
    label: 'SINTÉTICO A PRIORI',
    title: 'Amplía y, sin embargo, posee necesidad',
    origin: 'a priori',
    force: 'universal y necesario',
    gain: 'hace inteligible la posibilidad de ciencia',
  },
]

const architecture = [
  {
    id: 'aesthetic',
    roman: 'I',
    name: 'Estética trascendental',
    faculty: 'Sensibilidad',
    elements: 'espacio · tiempo',
    question: '¿Cómo puede algo sernos dado?',
    result: 'condiciones a priori de la experiencia sensible',
  },
  {
    id: 'analytic',
    roman: 'II',
    name: 'Analítica trascendental',
    faculty: 'Entendimiento',
    elements: 'categorías · causalidad',
    question: '¿Cómo puede lo dado ser pensado como objeto?',
    result: 'reglas a priori para organizar la experiencia',
  },
  {
    id: 'dialectic',
    roman: 'III',
    name: 'Dialéctica trascendental',
    faculty: 'Razón',
    elements: 'Dios · alma · mundo',
    question: '¿Qué ocurre cuando la razón rebasa la experiencia?',
    result: 'conflictos y límites del conocimiento metafísico',
  },
]

const positions = [
  {
    id: 'dogma',
    name: 'Dogmatismo',
    thesis: 'La razón pretende construir conocimiento metafísico sin examinar primero sus propios límites.',
    figures: 'Descartes · Spinoza · Leibniz',
  },
  {
    id: 'skepsis',
    name: 'Escepticismo',
    thesis: 'Hume cuestiona la necesidad objetiva que la metafísica y la ciencia parecían presuponer.',
    figures: 'David Hume',
  },
  {
    id: 'critique',
    name: 'Criticismo',
    thesis: 'Antes de afirmar o negar, hay que investigar condiciones, alcance y límites del conocer.',
    figures: 'Immanuel Kant',
  },
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ontsep7-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function OntologiaClass07Sep() {
  const [positionId, setPositionId] = useState('critique')
  const [judgmentId, setJudgmentId] = useState('sap')
  const [architectureId, setArchitectureId] = useState('aesthetic')
  const [objectView, setObjectView] = useState('phenomenon')

  const position = useMemo(
    () => positions.find((item) => item.id === positionId) || positions[2],
    [positionId],
  )
  const judgment = useMemo(
    () => judgmentMatrix.find((item) => item.id === judgmentId) || judgmentMatrix[2],
    [judgmentId],
  )
  const architectureStep = useMemo(
    () => architecture.find((item) => item.id === architectureId) || architecture[0],
    [architectureId],
  )

  return (
    <main className="ontsep7-page">
      <nav className="ontsep7-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="ontsep7-brand">Φ · Philosophia</Link>
        <span>VII · IX · MMXXVI</span>
      </nav>

      <header className="ontsep7-hero">
        <div className="ontsep7-grid" aria-hidden="true" />
        <div className="ontsep7-ghost" aria-hidden="true">a priori</div>

        <div className="ontsep7-hero-inner">
          <div>
            <p className="ontsep7-kicker">FI190 · Ontología II · 7 de septiembre de 2026</p>
            <h1>Kant:<em>condiciones del conocer</em></h1>
            <p className="ontsep7-lead">
              La pregunta ontológica cambia de eje: antes de afirmar cómo es la
              realidad en sí misma, Kant obliga a examinar cómo puede algo
              convertirse en objeto de conocimiento para nosotros.
            </p>

            <div className="ontsep7-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                ¿Cómo son posibles conocimientos universales y necesarios si
                nuestro conocimiento se relaciona con la experiencia?
              </strong>
            </div>

            <div className="ontsep7-hero-actions">
              <button type="button" onClick={() => goToSection('mapa')}>Recorrer la clase ↓</button>
              <Link to="/tareas/ontologia-ii/kant-critica-razon-pura-prologos">Abrir mapa de los prólogos ↗</Link>
            </div>
          </div>

          <aside className="ontsep7-hero-schema">
            <span>GIRO KANTIANO</span>
            <div>
              <small>SUPUESTO TRADICIONAL</small>
              <strong>sujeto → objeto</strong>
              <p>El conocimiento debe conformarse al objeto.</p>
            </div>
            <b>⇅</b>
            <div className="active">
              <small>ENSAYO CRÍTICO</small>
              <strong>objeto conocido → condiciones del sujeto</strong>
              <p>El objeto de experiencia aparece bajo formas y conceptos a priori.</p>
            </div>
          </aside>
        </div>
      </header>

      <div className="ontsep7-layout">
        <aside className="ontsep7-index">
          <p>Index transcendentalis</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ontsep7-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula argumenti">De la crisis de la metafísica al límite del conocimiento</Heading>
            <div className="ontsep7-sequence">
              {[
                ['01', 'Metafísica en crisis'],
                ['02', 'Hume cuestiona la necesidad'],
                ['03', 'Newton exige universalidad'],
                ['04', 'Kant pregunta por condiciones'],
                ['05', 'Sujeto trascendental'],
                ['06', 'Fenómeno / cosa en sí'],
              ].map(([n, label], index) => (
                <div key={n}><span>{n}</span><strong>{label}</strong>{index < 5 && <b>→</b>}</div>
              ))}
            </div>
            <div className="ontsep7-thesis">
              <span>IDEA CENTRAL</span>
              <strong>
                Podemos pensar más de lo que podemos conocer. El conocimiento exige
                que algo pueda ser dado bajo nuestras formas de sensibilidad y pensado
                mediante las estructuras del entendimiento.
              </strong>
            </div>
          </section>

          <section id="metafisica">
            <Heading n="01" eyebrow="Metaphysica">Dios, alma y mundo: preguntas inevitables, conocimiento problemático</Heading>
            <div className="ontsep7-three">
              {[
                ['DIOS', '¿Podemos conocer o demostrar su existencia?'],
                ['ALMA', '¿Podemos demostrar su inmortalidad o simplicidad?'],
                ['MUNDO', '¿Tuvo un comienzo o existe eternamente?'],
              ].map(([title, question]) => (
                <article key={title}><span>{title}</span><p>{question}</p></article>
              ))}
            </div>
            <div className="ontsep7-callout">
              <span>PROBLEMA</span>
              <strong>
                La razón no puede evitar estas preguntas, pero eso no significa que
                pueda resolverlas como conocimiento científico.
              </strong>
            </div>
          </section>

          <section id="criticismo">
            <Heading n="02" eyebrow="Status quaestionis">Entre el dogmatismo y el escepticismo aparece la crítica</Heading>
            <div className="ontsep7-tabs">
              {positions.map((item) => (
                <button type="button" key={item.id} className={position.id === item.id ? 'active' : ''} onClick={() => setPositionId(item.id)}>
                  {item.name}
                </button>
              ))}
            </div>
            <article className="ontsep7-focus">
              <span>{position.name}</span>
              <h3>{position.thesis}</h3>
              <p>{position.figures}</p>
            </article>
            <div className="ontsep7-triad">
              <div><span>01</span><strong>Condiciones</strong><p>¿Qué tiene que darse para que conocer sea posible?</p></div>
              <div><span>02</span><strong>Alcance</strong><p>¿Hasta dónde puede extenderse legítimamente el conocimiento?</p></div>
              <div><span>03</span><strong>Límites</strong><p>¿Dónde deja la razón de tener derecho a afirmar conocimiento?</p></div>
            </div>
          </section>

          <section id="hume-newton">
            <Heading n="03" eyebrow="Hume ↔ Newton">El choque que obliga a explicar la necesidad de la ciencia</Heading>
            <div className="ontsep7-versus">
              <article><span>HUME</span><h3>La experiencia muestra sucesiones.</h3><p>Repetir A → B genera hábito y expectativa, pero no permite observar una conexión necesaria como tal.</p></article>
              <b>VS.</b>
              <article className="active"><span>NEWTON</span><h3>La física formula leyes universales y necesarias.</h3><p>Kant acepta el hecho del conocimiento científico y pregunta qué condiciones lo hacen posible.</p></article>
            </div>
            <div className="ontsep7-equation"><span>HECHO DE LA CIENCIA</span><strong>universalidad + necesidad <b>≠</b> simple acumulación de experiencias</strong></div>

            <aside className="ontsep7-dictation">
              <span>DICTADO DEL PROFESOR · FACTUM</span>
              <h3>“Para Kant el conocimiento es un «Factum» (hecho).”</h3>
              <p>
                Kant no parte de demostrar primero que existe conocimiento:
                toma el conocimiento científico como un hecho y pregunta por sus
                <strong> condiciones de posibilidad</strong>.
              </p>
            </aside>
</section>

          <section id="juicios">
            <Heading n="04" eyebrow="Iudicia">Analítico, sintético, a priori y a posteriori</Heading>
            <div className="ontsep7-tabs">
              {judgmentMatrix.map((item) => (
                <button type="button" key={item.id} className={judgment.id === item.id ? 'active' : ''} onClick={() => setJudgmentId(item.id)}>{item.label}</button>
              ))}
            </div>
            <article className="ontsep7-judgment">
              <span>{judgment.label}</span><h3>{judgment.title}</h3>
              <div>
                <p><small>ORIGEN</small><strong>{judgment.origin}</strong></p>
                <p><small>FUERZA</small><strong>{judgment.force}</strong></p>
                <p><small>APORTE</small><strong>{judgment.gain}</strong></p>
              </div>
            </article>

            <aside className="ontsep7-genealogy">
              <header>
                <span>DICTADO DEL PROFESOR · LEIBNIZ → KANT</span>
                <h3>Dos tipos de verdades y el problema kantiano de los juicios</h3>
              </header>
              <div>
                <article>
                  <small>LEIBNIZ</small>
                  <strong>Verdades de razón</strong>
                  <b>→</b>
                  <span>En el dictado: Kant las vincula con juicios analíticos.</span>
                </article>
                <article>
                  <small>LEIBNIZ</small>
                  <strong>Verdades de hecho</strong>
                  <b>→</b>
                  <span>En el dictado: Kant las vincula con juicios sintéticos.</span>
                </article>
                <article className="active">
                  <small>APORTACIÓN DESTACADA EN CLASE</small>
                  <strong>Juicios sintéticos a priori</strong>
                  <span>amplían conocimiento y pretenden universalidad y necesidad</span>
                </article>
              </div>
            </aside>
</section>

          <section id="sap">
            <Heading n="05" eyebrow="Quaestio magna">¿Cómo son posibles los juicios sintéticos a priori?</Heading>
            <div className="ontsep7-sap">
              <div><span>SINTÉTICO</span><strong>amplía</strong></div><b>+</b>
              <div><span>A PRIORI</span><strong>universal · necesario</strong></div><b>=</b>
              <div className="result"><span>PROBLEMA KANTIANO</span><strong>¿cómo es posible?</strong></div>
            </div>
            <div className="ontsep7-three">
              <article><span>MATEMÁTICAS</span><p>¿Cómo son posibles aquí juicios sintéticos a priori?</p></article>
              <article><span>FÍSICA</span><p>¿Cómo son posibles aquí juicios sintéticos a priori?</p></article>
              <article><span>METAFÍSICA</span><p>¿Puede haber aquí juicios sintéticos a priori?</p></article>
            </div>

            <aside className="ontsep7-dictation ontsep7-dictation--questions">
              <span>DICTADO DEL PROFESOR · PROBLEMA GENERAL DE LA OBRA</span>
              <h3>¿Cómo son posibles los juicios sintéticos a priori?</h3>
              <ol>
                <li>¿Cómo son posibles los juicios sintéticos a priori en las matemáticas?</li>
                <li>¿Cómo son posibles los juicios sintéticos a priori en la física?</li>
                <li>¿Son posibles los juicios sintéticos a priori en la metafísica?</li>
              </ol>
            </aside>
</section>

          <section id="arquitectura">
            <Heading n="06" eyebrow="Architectura criticae">Tres grandes momentos para reconstruir la posibilidad y el límite</Heading>
            <div className="ontsep7-architecture-tabs">
              {architecture.map((item) => (
                <button type="button" key={item.id} className={architectureStep.id === item.id ? 'active' : ''} onClick={() => setArchitectureId(item.id)}>
                  <span>{item.roman}</span><strong>{item.name}</strong><small>{item.faculty}</small>
                </button>
              ))}
            </div>
            <article className="ontsep7-architecture-focus">
              <span>{architectureStep.name}</span><h3>{architectureStep.question}</h3><strong>{architectureStep.elements}</strong><p>{architectureStep.result}</p>
            </article>

            <aside className="ontsep7-dictation ontsep7-dictation--architecture">
              <span>DICTADO DEL PROFESOR · ARQUITECTURA DE LA OBRA</span>
              <div>
                <article>
                  <small>I</small>
                  <strong>Estética trascendental</strong>
                  <p>
                    Se refiere a la sensibilidad, no a la teoría del arte.
                    La sensibilidad es una facultad receptiva.
                  </p>
                </article>
                <article>
                  <small>II</small>
                  <strong>Analítica trascendental</strong>
                  <p>
                    Aborda las categorías del entendimiento: conceptos a priori.
                    La causalidad fue el ejemplo explícito del dictado.
                  </p>
                </article>
                <article>
                  <small>III</small>
                  <strong>Dialéctica trascendental</strong>
                  <p>
                    Aborda los problemas metafísicos por medio de la razón.
                  </p>
                </article>
              </div>
            </aside>
</section>

          <section id="facultades">
            <Heading n="07" eyebrow="Dari ↔ cogitari">Para conocer, algo debe ser dado y pensado</Heading>
            <div className="ontsep7-faculties">
              <article><span>SENSIBILIDAD</span><h3>receptiva</h3><p>Por ella los objetos nos son dados.</p><strong>espacio · tiempo · intuición</strong></article>
              <div className="ontsep7-plus">+</div>
              <article><span>ENTENDIMIENTO</span><h3>conceptual</h3><p>Por él pensamos aquello que ha sido dado.</p><strong>categorías · causalidad · conceptos</strong></article>
            </div>
            <blockquote className="ontsep7-quote"><span>FÓRMULA DE LA CLASE</span><strong>intuiciones sin conceptos → ciegas<br />conceptos sin intuiciones → vacíos</strong></blockquote>

            <aside className="ontsep7-dictation">
              <span>DICTADO DEL PROFESOR · DOS FACULTADES</span>
              <h3>Sensibilidad + entendimiento</h3>
              <p>
                “Por medio de la sensibilidad los objetos nos son dados; y, por
                medio del entendimiento, los objetos son pensados.”
              </p>
              <p>
                Ambas facultades se complementan:
                <strong> intuiciones sin conceptos son ciegas</strong> y
                <strong> conceptos sin intuiciones son vacíos</strong>.
              </p>
            </aside>
</section>

          <section id="trascendental">
            <Heading n="08" eyebrow="Subiectum transcendentale">No es otra persona: son condiciones universales del conocer</Heading>
            <div className="ontsep7-subject">
              <div><span>SUJETO EMPÍRICO</span><strong>Cristian · María · Pedro…</strong><p>individuos concretos</p></div><b>≠</b>
              <div className="active"><span>SUJETO TRASCENDENTAL</span><strong>estructura universal</strong><p>formas y conceptos que hacen posible la experiencia</p></div>
            </div>
            <div className="ontsep7-definitions">
              <article><span>TRASCENDENTE</span><p>Más allá del ámbito de la experiencia.</p></article>
              <article><span>INMANENTE</span><p>Dentro del ámbito del mundo o de la experiencia.</p></article>
              <article className="active"><span>TRASCENDENTAL</span><p>Relativo a las condiciones a priori que hacen posible conocer.</p></article>
            </div>

            <aside className="ontsep7-dictation ontsep7-dictation--compact">
              <span>DICTADO DEL PROFESOR · SUJETO TRASCENDENTAL</span>
              <p>
                El profesor dictó que el objeto será conformado por las facultades
                cognoscitivas del sujeto trascendental. También caracterizó
                “trascendental” por referencia a lo que hace posible el saber
                <strong> a priori</strong> y describió esta teoría del conocimiento,
                en el vocabulario de la clase, como <strong>a priorista</strong>.
              </p>
            </aside>
</section>

          <section id="copernico">
            <Heading n="09" eyebrow="Conversio copernicana">El sujeto no inventa la realidad: condiciona su forma de aparecer</Heading>
            <div className="ontsep7-copernicus">
              <div><span>SUPUESTO TRADICIONAL</span><strong>conocimiento → debe conformarse al objeto</strong></div><b>⇄</b>
              <div className="active"><span>ENSAYO KANTIANO</span><strong>objeto de experiencia → debe aparecer bajo condiciones del sujeto</strong></div>
            </div>
            <div className="ontsep7-callout"><span>NO SIGNIFICA</span><strong>que el sujeto invente arbitrariamente el mundo; significa que todo objeto conocido debe poder aparecer dentro de nuestras condiciones de conocimiento.</strong></div>
          </section>

          <section id="fenomeno">
            <Heading n="10" eyebrow="Phainomenon ↔ res in se">La realidad conocida y la realidad considerada independientemente</Heading>
            <div className="ontsep7-tabs">
              <button type="button" className={objectView === 'phenomenon' ? 'active' : ''} onClick={() => setObjectView('phenomenon')}>Fenómeno</button>
              <button type="button" className={objectView === 'thing' ? 'active' : ''} onClick={() => setObjectView('thing')}>Cosa en sí</button>
              <button type="button" className={objectView === 'idealism' ? 'active' : ''} onClick={() => setObjectView('idealism')}>Idealismo trascendental</button>
            </div>
            <article className="ontsep7-object">
              {objectView === 'phenomenon' && <><span>FENÓMENO</span><h3>realidad tal como puede aparecer para nosotros</h3><p>El objeto conocido aparece en espacio y tiempo y puede ser pensado mediante categorías del entendimiento.</p></>}
              {objectView === 'thing' && <><span>COSA EN SÍ</span><h3>realidad considerada independientemente de esas condiciones</h3><p>No conocerla directamente no equivale a afirmar que sea creada por la mente o que no exista.</p></>}
              {objectView === 'idealism' && <><span>IDEALISMO TRASCENDENTAL</span><h3>condiciones del objeto conocido dependen del sujeto</h3><p>La clase lo presentó sin negar por ello una realidad exterior independiente en cuanto a su existencia.</p></>}
            </article>
            <div className="ontsep7-berkeley"><span>KANT ≠ BERKELEY</span><strong>Kant no reduce simplemente la existencia de las cosas a nuestras representaciones: mantiene una realidad que afecta la sensibilidad.</strong></div>

            <aside className="ontsep7-dictation ontsep7-dictation--compact">
              <span>DICTADO DEL PROFESOR · FENÓMENO / COSA EN SÍ</span>
              <p>
                El objeto de conocimiento pertenece a la esfera de los
                <strong> fenómenos</strong>. El dictado distinguió fenómeno y
                cosa en sí (<strong>noumeno</strong>) y calificó a la cosa en sí
                como <strong>incognoscible</strong>. La realidad se nos muestra
                a través de nuestras facultades cognoscitivas.
              </p>
            </aside>
</section>

          <section id="dialectica">
            <Heading n="11" eyebrow="Dialectica transcendentalis">La razón puede pensar más allá de la experiencia, pero no conocer igual</Heading>
            <div className="ontsep7-dialectic">
              <div><span>RAZÓN</span><strong>busca totalidad e incondicionado</strong></div><b>→</b>
              <div><span>IDEAS</span><strong>Dios · alma · mundo</strong></div><b>→</b>
              <div className="danger"><span>RIESGO</span><strong>tratarlas como objetos de ciencia</strong></div>
            </div>
            <div className="ontsep7-thesis"><span>LÍMITE</span><strong>Pensar una idea no basta para conocer un objeto. La razón puede producir tesis y antítesis allí donde falta una experiencia capaz de decidir entre ellas.</strong></div>
          </section>

          <section id="ontologia">
            <Heading n="12" eyebrow="Quaestio ontologica">¿Dónde está la ontología después del giro kantiano?</Heading>
            <div className="ontsep7-ontology">
              <article><span>ONTOLOGÍA CLÁSICA</span><h3>¿qué existe y cómo es la realidad?</h3></article><b>→</b>
              <article className="active"><span>EXIGENCIA KANTIANA</span><h3>¿bajo qué condiciones puede algo ser objeto para nosotros?</h3></article>
            </div>
            <p className="ontsep7-long-copy">El problema ontológico ya no puede separarse sin más del problema epistemológico. Fenómeno y cosa en sí obligan a distinguir la realidad tal como puede ser conocida de la realidad considerada independientemente de nuestras condiciones de conocimiento.</p>
            <div className="ontsep7-nature"><span>NATURALEZA</span><strong>conjunto de fenómenos ordenados en espacio y tiempo y bajo categorías del entendimiento</strong><p>Aquí se encuentra una parte de la respuesta kantiana al problema de Hume: la universalidad no procede sólo de acumular experiencias.</p></div>
          </section>

          <section id="piaget">
            <Heading n="13" eyebrow="Post Kant">De las condiciones del conocer a la génesis de las estructuras</Heading>
            <div className="ontsep7-piaget">
              <article><span>KANT</span><h3>condiciones de posibilidad</h3><p>¿Qué estructuras hacen posible la experiencia y el conocimiento?</p></article><b>→</b>
              <article><span>PIAGET</span><h3>epistemología genética</h3><p>¿Cómo aparecen y se desarrollan estructuras como número, causalidad u operaciones intelectuales?</p></article>
            </div>
            <div className="ontsep7-final"><span>FÓRMULA PARA RECORDAR LA CLASE</span><strong>conocemos fenómenos bajo condiciones a priori; podemos pensar más allá de esas condiciones, pero no convertir sin más aquello que las trasciende en conocimiento científico.</strong></div>
            <Link className="ontsep7-kant-link" to="/tareas/ontologia-ii/kant-critica-razon-pura-prologos">Continuar con el sistema interactivo de los prólogos de Kant <b>↗</b></Link>
          </section>
        </article>
      </div>
    </main>
  )
}
