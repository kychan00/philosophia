import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './OntologiaClass30SepArchive.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'postkantianos', 'Maimon, Beck, Jacobi y Bardili'],
  ['02', 'limite', 'Concepto límite y cosa en sí'],
  ['03', 'fe', 'Fe, realidad y razón práctica'],
  ['04', 'genealogia', 'Kant, Comte y Nietzsche'],
  ['05', 'fichte', 'Fichte, técnica y moral'],
  ['06', 'presente', 'Plataformas, vigilancia y posverdad'],
  ['07', 'schelling', 'Schelling e inmanencia'],
  ['08', 'estetica', 'Bello, sublime e intuición intelectual'],
  ['09', 'arte', 'La obra finita y lo infinito'],
  ['10', 'hegel', 'Hegel como siguiente umbral'],
  ['11', 'lectura', 'Lectura de Croce'],
]

const atlasSchema = {
  layout: 'flow',
  direction: 'vertical',
  flowGap: 46,
  minHeight: 1260,
  fitPadding: 54,
  sizeHint: 'tall',
  nodes: [
    { id: 'kant', label: 'Kant', caption: 'cosa en sí · límite · criticismo', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'maimon', label: 'Maimon', caption: 'concepto límite', shapeRole: 'mediation' },
    { id: 'beck', label: 'Beck', caption: 'actividad originaria', shapeRole: 'mediation' },
    { id: 'jacobi', label: 'Jacobi', caption: 'fe · certeza inmediata', shapeRole: 'mediation' },
    { id: 'bardili', label: 'Bardili', caption: 'antitipia · materia', shapeRole: 'mediation' },
    { id: 'fichte', label: 'Fichte', caption: 'actividad · ética', shapeRole: 'concept' },
    { id: 'schelling', label: 'Schelling', caption: 'naturaleza · intuición · arte', shapeRole: 'structure', emphasis: true, tone: 'accent' },
    { id: 'hegel', label: 'Hegel', caption: 'mediación · despliegue conceptual', shapeRole: 'result', emphasis: true, tone: 'accent' },
  ],
  edges: [
    { from: 'kant', to: 'maimon', label: 'abre el problema', relationKind: 'derives' },
    { from: 'maimon', to: 'beck', label: 'radicaliza', relationKind: 'derives' },
    { from: 'beck', to: 'jacobi', label: 'provoca respuesta realista', relationKind: 'derives' },
    { from: 'jacobi', to: 'bardili', label: 'desplaza el problema', relationKind: 'derives' },
    { from: 'bardili', to: 'fichte', label: 'prepara el sistema', relationKind: 'derives' },
    { from: 'fichte', to: 'schelling', label: 'abre hacia', relationKind: 'derives' },
    { from: 'schelling', to: 'hegel', label: 'siguiente umbral', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .26, edgeDuration: .28 },
}

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

function Section({ n, id, eyebrow, title, children, wine = false }) {
  return (
    <section id={id} className={`oaf-section${wine ? ' oaf-wine-section' : ''}`}>
      <span className="oaf-number" aria-hidden="true">{n}</span>
      <p className="oaf-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default function OntologiaClass07Oct() {
  const schellingImage = 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Friedrich_Wilhelm_Joseph_Schelling%2C_1848_taken_by_Hermann_Biow.png'

  return (
    <main className="oa-page oaf-page oaf-sep30-page oaf-oct07-page">
      <div className="oa-backdrop" aria-hidden="true" />

      <div className="oa-brochure oaf-brochure oaf-sep30-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>VII · X · MMXXVI</span>
        </nav>

        <header className="oa-cover oaf-cover oaf-sep30-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · fol. XXIV · post Kantium</span>

            <h1>
              Del concepto límite
              <em>al absoluto</em>
            </h1>

            <p className="oa-subtitle">
              Ding an sich · fides · antitypia · absolutum · dialectica
            </p>

            <p className="oaf-lead">
              La aporía de la cosa en sí obliga a reconstruir la relación entre
              pensamiento y realidad. Maimon, Beck, Jacobi y Bardili preparan el
              tránsito hacia Fichte, Schelling y el umbral de Hegel.
            </p>

            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>
                ¿Cómo pensar la unidad de realidad y pensamiento después de que
                Kant haya limitado el conocimiento de lo suprasensible?
              </strong>
            </div>

            <div className="oaf-axis" aria-label="Eje conceptual">
              <span>limes</span><b>→</b>
              <span>fides</span><b>→</b>
              <span>natura</span><b>→</b>
              <span>absolutum</span><b>→</b>
              <span>dialectica</span>
            </div>

            <div className="oaf-sep30-actions">
              <button type="button" onClick={() => goTo('postkantianos')}>Seguir la genealogía ↓</button>
              <button type="button" onClick={() => goTo('schelling')}>Ir a Schelling ↓</button>
            </div>
          </div>

          <figure className="oa-cover-object">
            <div className="oa-cover-frame">
              <span className="oa-tape oa-tape-a" aria-hidden="true" />
              <span className="oa-tape oa-tape-b" aria-hidden="true" />
              <img
                src={schellingImage}
                alt="Retrato de Friedrich Wilhelm Joseph Schelling, hacia 1848"
              />
            </div>
            <figcaption>
              <span>IMAGO XXIV · FRIDERICUS SCHELLING</span>
              <strong>Friedrich Wilhelm Joseph Schelling</strong>
              <small>ca. 1848 · original atribuido a Hermann Biow.</small>
              <small className="oa-image-rights">Archivo publicado bajo CC0 1.0 Universal.</small>
              <a
                className="oa-image-source"
                href="https://commons.wikimedia.org/wiki/File:Friedrich_Wilhelm_Joseph_Schelling,_1848_taken_by_Hermann_Biow.png"
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
            <h2>La aporía ya no puede quedarse dentro de Kant</h2>
            <div className="oaf-questions">
              <p>¿La cosa en sí puede causar la afección?</p>
              <p>¿Pensar un límite equivale a conocer algo?</p>
              <p>¿Cómo se recupera lo real sin recaer en dogmatismo?</p>
            </div>
            <p>
              La sesión continúa exactamente donde terminó el 30 de septiembre:
              la causalidad no puede aplicarse sin más a la cosa en sí y, sin embargo,
              la receptividad exige explicar por qué la experiencia contiene una materia.
              Los postkantianos ensayan salidas diferentes antes de que el problema se
              transforme en la cuestión del absoluto.
            </p>
          </div>

          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Vocabulario de la sesión</h2>
            <div>
              <article><span>Alemán</span><strong>Ding an sich</strong><p>Cosa en sí; problema heredado del criticismo.</p></article>
              <article><span>Concepto</span><strong>límite</strong><p>Marca el alcance del conocer sin constituir por ello un objeto conocido.</p></article>
              <article><span>Jacobi</span><strong>fe</strong><p>Certeza inmediata de lo real; no se reduce aquí a fe religiosa.</p></article>
              <article><span>Bardili</span><strong>antitipia</strong><p>Correspondencia entre estructura lógica y realidad, con la materia como resistencia.</p></article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas oaf-sep30-atlas">
          <div className="oa-wine-title"><span>SCHEMA · ATLAS</span><h2>atlas</h2></div>
          <p>
            La sesión puede leerse como una cadena de respuestas a un mismo problema:
            qué hacer con la separación kantiana entre fenómeno y cosa en sí.
          </p>
          <div className="oa-schema-card"><AnimatedConceptSchema schema={atlasSchema} /></div>
        </section>

        <div className="oaf-layout oaf-sep30-layout">
          <aside className="oaf-index oaf-sep30-index">
            <p>Index postkantianus</p>
            {sections.map(([n, id, label]) => (
              <button type="button" key={id} onClick={() => goTo(id)}>
                <span>{n}</span>
                {label}
              </button>
            ))}
          </aside>

          <article className="oaf-article oaf-sep30-article">
            <Section n="00" id="mapa" eyebrow="Tabula sessionis" title="De la cosa en sí al problema del absoluto">
              <div className="oaf-sep30-route">
                <article><span>01</span><strong>Kant</strong><p>límite del conocimiento</p></article>
                <b>→</b>
                <article><span>02</span><strong>Postkantianos</strong><p>respuestas a la cosa en sí</p></article>
                <b>→</b>
                <article className="active"><span>03</span><strong>Schelling</strong><p>naturaleza · arte · absoluto</p></article>
                <b>→</b>
                <article><span>04</span><strong>Hegel</strong><p>mediación conceptual</p></article>
                <b>→</b>
                <article><span>05</span><strong>Croce</strong><p>siguiente lectura</p></article>
              </div>

              <div className="oaf-callout">
                <span>TESIS DE TRABAJO</span>
                <strong>
                  Después de Kant, la discusión ya no consiste sólo en conservar o
                  negar la cosa en sí: hay que reconstruir cómo se relacionan pensamiento,
                  realidad, naturaleza y absoluto.
                </strong>
              </div>
            </Section>

            <Section n="01" id="postkantianos" eyebrow="Quattuor responsa" title="Maimon, Beck, Jacobi y Bardili">
              <p>
                La primera parte de la clase recupera cuatro respuestas postkantianas.
                Cada una modifica el lugar que ocupaba la cosa en sí dentro del criticismo.
              </p>

              <div className="oaf-sep30-digression-grid">
                <article>
                  <span>MAIMON</span>
                  <h3>Concepto límite</h3>
                  <p>La cosa en sí no debe convertirse en una causa externa positivamente conocida. Funciona como límite del sistema.</p>
                </article>
                <article>
                  <span>BECK</span>
                  <h3>Actividad originaria</h3>
                  <p>La referencia a una cosa exterior pierde peso sistemático y el problema se desplaza hacia la actividad de la representación.</p>
                </article>
                <article>
                  <span>JACOBI</span>
                  <h3>Certeza inmediata</h3>
                  <p>La realidad exterior no se deduce enteramente desde representaciones: se concede mediante una certeza inmediata llamada fe.</p>
                </article>
                <article>
                  <span>BARDILI</span>
                  <h3>Antitipia y materia</h3>
                  <p>Busca correspondencia entre pensar y ser, pero la materia conserva resistencia frente a una racionalización total.</p>
                </article>
              </div>
            </Section>

            <Section n="02" id="limite" eyebrow="Limes cognitionis" title="Pensar un límite no es conocer un objeto">
              <p>
                La clase vuelve a Kant para precisar la función del límite. Las
                condiciones a priori hacen posible la experiencia de fenómenos, pero
                no autorizan a describir positivamente aquello que quedaría fuera de
                esas condiciones.
              </p>

              <div className="oaf-sep30-thinking-being">
                <article>
                  <span>PENSAR</span>
                  <strong>marcar un límite</strong>
                </article>
                <b>≠</b>
                <article>
                  <span>CONOCER</span>
                  <strong>determinar objetivamente</strong>
                </article>
              </div>

              <div className="oaf-callout">
                <span>CONTROL CRÍTICO</span>
                <strong>
                  La cosa en sí no puede tratarse como un objeto oculto del que ya
                  conocemos causalidad, propiedades o modo de existencia.
                </strong>
              </div>
            </Section>

            <Section n="03" id="fe" eyebrow="Fides · ratio" title="Jacobi y el retorno de la realidad">
              <p>
                «Fe» no significa aquí simplemente adhesión religiosa. En la discusión
                de Jacobi designa una certeza inmediata de lo real que antecede a una
                demostración discursiva completa.
              </p>

              <div className="oaf-sep30-two">
                <article>
                  <span>JACOBI</span>
                  <strong>mundo exterior</strong>
                  <p>La certeza de lo real no se reconstruye enteramente desde el circuito de representaciones.</p>
                </article>
                <article>
                  <span>KANT</span>
                  <strong>razón práctica</strong>
                  <p>La limitación del conocimiento teórico no equivale a demostrar la inexistencia de Dios o del alma.</p>
                </article>
              </div>

              <div className="oaf-sep30-residue">
                <span>DISTINCTIO</span>
                <strong>No poder demostrar existencia no equivale a demostrar inexistencia.</strong>
                <p>La clase usa esta distinción para mostrar por qué el límite crítico no elimina de una vez toda función de la creencia.</p>
              </div>
            </Section>

            <Section n="04" id="genealogia" eyebrow="Genealogia metaphysicae" title="De Kant a Comte y Nietzsche">
              <p>
                Una segunda línea de la sesión sigue el destino moderno de la metafísica.
                Kant limita su posibilidad como ciencia dogmática; el positivismo
                intensifica esa sospecha y Nietzsche radicaliza la crítica del
                «mundo verdadero».
              </p>

              <div className="oaf-sep30-genealogy">
                <article><span>01</span><strong>Platón</strong><p>mundo verdadero</p></article>
                <b>→</b>
                <article><span>02</span><strong>Cristianismo</strong><p>traducción religiosa</p></article>
                <b>→</b>
                <article><span>03</span><strong>Kant</strong><p>límite teórico</p></article>
                <b>→</b>
                <article><span>04</span><strong>Comte</strong><p>estadio positivo</p></article>
                <b>→</b>
                <article><span>05</span><strong>Nietzsche</strong><p>crítica del mundo verdadero</p></article>
              </div>

              <div className="oaf-sep30-digression-note">
                <strong>Consecuencia ontológica señalada en clase</strong>
                <p>
                  El ser deja de pensarse exclusivamente desde eternidad e identidad;
                  devenir y temporalidad ganan peso y preparan problemas que reaparecerán
                  más adelante en Heidegger.
                </p>
              </div>
            </Section>

            <Section n="05" id="fichte" eyebrow="Scientia · ethica" title="Fichte: progreso técnico no es progreso moral">
              <p>
                Fichte aparece como siguiente figura del tránsito postkantiano y como
                punto de apoyo para una aplicación contemporánea: una ampliación de
                capacidades científicas o técnicas no determina por sí misma su uso moral.
              </p>

              <div className="oaf-sep30-regularity">
                <article><span>CIENCIA</span><strong>capacidad</strong><p>comprender, producir, curar, intervenir.</p></article>
                <b>+</b>
                <article><span>TÉCNICA</span><strong>potencia</strong><p>hacer más eficaz la acción humana.</p></article>
                <b>≠</b>
                <article className="active"><span>ÉTICA</span><strong>orientación moral</strong><p>decidir para qué y bajo qué límites se usa esa potencia.</p></article>
              </div>
            </Section>

            <Section n="06" id="presente" eyebrow="Applicatio hodierna" title="Plataformas, vigilancia, posverdad y propaganda" wine>
              <p>
                El profesor lleva las categorías del curso a problemas contemporáneos.
                La sección se conserva como aplicación de clase, no como doctrina de los
                autores postkantianos.
              </p>

              <div className="oaf-sep30-digression-grid">
                <article>
                  <span>PLATAFORMAS</span>
                  <h3>Infraestructura y renta</h3>
                  <p>La analogía feudal sirve para pensar espacios digitales propiedad de pocos actores sobre los que otros producen, venden o comunican.</p>
                </article>
                <article>
                  <span>DATOS</span>
                  <h3>Conocer al usuario</h3>
                  <p>Búsquedas, consumo y hábitos permiten anticipar preferencias y orientar decisiones comerciales.</p>
                </article>
                <article>
                  <span>POSVERDAD</span>
                  <h3>Apariencia no es garantía</h3>
                  <p>Una imagen o video puede parecer evidencia sin revelar quién lo produjo, con qué intención o bajo qué condiciones.</p>
                </article>
                <article>
                  <span>PROPAGANDA</span>
                  <h3>Normalización</h3>
                  <p>La discusión incorpora a Hannah Arendt para advertir sobre indiferencia y normalización de la violencia.</p>
                </article>
              </div>

              <div className="oaf-note oaf-sep30-wine-note">
                <strong>Precaución documental</strong>
                <p>
                  Los casos políticos concretos mencionados en la conversación no se
                  presentan aquí como hechos verificados. Lo que se conserva es su función
                  filosófica: ejercitar sospecha crítica ante aquello que aparece como realidad.
                </p>
              </div>
            </Section>

            <Section n="07" id="schelling" eyebrow="Natura · absolutum" title="Schelling y una metafísica después de Kant">
              <p>
                La clase vuelve al hilo histórico con Schelling. La pregunta ya no es
                simplemente si existe una cosa en sí exterior, sino cómo pensar una
                totalidad en la que naturaleza y espíritu no queden absolutamente separados.
              </p>

              <div className="oaf-sep30-representation">
                <article><span>NATURA</span><strong>naturaleza</strong><p>no mero exterior muerto</p></article>
                <b>↔</b>
                <article className="active"><span>ABSOLUTUM</span><strong>unidad</strong><p>finito e infinito</p></article>
                <b>↔</b>
                <article><span>SPIRITUS</span><strong>espíritu</strong><p>no separado absolutamente</p></article>
              </div>

              <div className="oaf-sep30-spinoza">
                <span>ANTECEDENTE</span>
                <strong>Spinoza y la inmanencia</strong>
                <p>
                  La sesión recupera la sustancia spinozista para pensar una totalidad
                  que no necesita situar lo infinito en un segundo mundo completamente separado.
                </p>
              </div>
            </Section>

            <Section n="08" id="estetica" eyebrow="Pulchrum · sublime" title="Lo bello, lo sublime y la intuición intelectual">
              <p>
                La vía estética permite distinguir una experiencia de forma delimitada
                de otra en la que magnitud o poder exceden una representación fácilmente contenible.
              </p>

              <div className="oaf-sep30-two">
                <article>
                  <span>LO BELLO</span>
                  <strong>forma y proporción</strong>
                  <p>delimitación · armonía · figura reconocible.</p>
                </article>
                <article>
                  <span>LO SUBLIME</span>
                  <strong>desbordamiento</strong>
                  <p>mar · tormenta · magnitud · poder natural · sobrecogimiento.</p>
                </article>
              </div>

              <div className="oaf-callout">
                <span>INTUICIÓN INTELECTUAL</span>
                <strong>
                  La clase la presenta como una forma de pensar una unidad sujeto /
                  naturaleza que no se reduce al análisis discursivo ordinario.
                </strong>
              </div>
            </Section>

            <Section n="09" id="arte" eyebrow="Finitum · infinitum" title="La obra de arte como manifestación finita de lo infinito">
              <p>
                La formulación central del bloque estético sostiene que una obra
                determinada y finita puede hacer sensible una totalidad que excede
                sus propios límites.
              </p>

              <div className="oaf-sep30-regularity">
                <article><span>ABSOLUTO</span><strong>infinito</strong><p>totalidad que no cabe como un objeto más.</p></article>
                <b>→</b>
                <article><span>OBRA</span><strong>forma finita</strong><p>comienza, dura y termina.</p></article>
                <b>→</b>
                <article className="active"><span>EXPERIENCIA</span><strong>intuición de totalidad</strong><p>la forma remite a algo que la excede.</p></article>
              </div>

              <div className="oaf-sep30-digression-note">
                <strong>La música como ejemplo</strong>
                <p>
                  Bach, Mozart, Beethoven, Chaikovski y Chopin aparecen como ejemplos
                  pedagógicos de una experiencia estética capaz de involucrar sensibilidad,
                  atención y formación cultural.
                </p>
              </div>
            </Section>

            <Section n="10" id="hegel" eyebrow="Limen Hegelianum" title="Hegel: del absoluto intuído al absoluto mediado" wine>
              <p>
                La sesión termina preparando una diferencia decisiva. Hegel comparte
                con Schelling el problema del absoluto, pero no quiere dejarlo en una
                intuición inmediata.
              </p>

              <div className="oaf-sep30-aporia">
                <div className="premise">
                  <span>PUNTO COMÚN</span>
                  <strong>La filosofía tiene por objeto lo absoluto.</strong>
                </div>
                <div className="branch yes">
                  <span>SCHELLING</span>
                  <strong>unidad e intuición</strong>
                  <p>naturaleza, arte y experiencia de totalidad.</p>
                </div>
                <div className="fork" aria-hidden="true">↙︎ &nbsp;&nbsp; ↘︎</div>
                <div className="branch no">
                  <span>HEGEL</span>
                  <strong>mediación conceptual</strong>
                  <p>oposiciones, tránsito y desarrollo del concepto.</p>
                </div>
                <div className="result">
                  <span>SIGUIENTE PROBLEMA</span>
                  <strong>Seguir el movimiento del concepto, no coleccionar definiciones aisladas.</strong>
                </div>
              </div>
            </Section>

            <Section n="11" id="lectura" eyebrow="Lectio proxima" title="Benedetto Croce · capítulo I">
              <p>
                Para preparar la entrada a Hegel, el profesor asigna el capítulo I de
                <em> Lo vivo y lo muerto de la filosofía de Hegel</em>, de Benedetto Croce.
              </p>

              <div className="oaf-sep30-reading">
                <article>
                  <span>LECTURA</span>
                  <strong>La dialéctica o la síntesis de los contrarios</strong>
                  <p>
                    La grabación permite fijar autor, obra y capítulo. No permite fijar
                    con seguridad páginas, fecha de entrega ni un examen asociado.
                  </p>
                </article>
              </div>

              <div className="oaf-callout">
                <span>PREPARATIO</span>
                <strong>
                  Llegar a Hegel preguntando cómo una oposición puede formar parte del
                  desarrollo interno de un concepto y no ser sólo un choque exterior entre tesis.
                </strong>
              </div>
            </Section>
          </article>
        </div>

        <section className="oaf-documentum oaf-sep30-documentum">
          <div>
            <span>DOCUMENTUM</span>
            <h2>Fuente y criterio editorial</h2>
          </div>
          <p>
            Clase del 7 de octubre de 2026 reconstruida desde una grabación con
            reconocimiento de voz muy degradado. La página conserva los núcleos
            filosóficos identificables, separa las digresiones contemporáneas y no
            reconstruye como cita literal aquello que el audio no permite fijar.
          </p>
        </section>

        <footer className="oa-footer">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <span>☙ limes · absolutum ❧</span>
          <span>VII · X · MMXXVI</span>
        </footer>
      </div>
    </main>
  )
}
