import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './OntologiaClass30SepArchive.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'idealismo', 'Kant, Berkeley y el mundo exterior'],
  ['02', 'fenomeno', 'Fenómeno: materia y forma'],
  ['03', 'aporia', 'La aporía de la causalidad'],
  ['04', 'reinhold', 'Reinhold y la representación'],
  ['05', 'schulze', 'Schulze y la objeción escéptica'],
  ['06', 'necesidad', 'Regularidad y necesidad'],
  ['07', 'genealogia', 'Del criticismo al idealismo'],
  ['08', 'monismo', 'Dualismo e impulso monista'],
  ['09', 'digresion', 'Presupuesto, deuda y soberanía'],
  ['10', 'lectura', 'Maimon y Beck'],
  ['11', 'cierre', 'Consecuencia ontológica'],
]

const atlasSchema = {
  layout: 'flow',
  direction: 'vertical',
  flowGap: 50,
  minHeight: 1160,
  fitPadding: 56,
  sizeHint: 'tall',
  nodes: [
    { id: 'kant', label: 'Kant', caption: 'fenómeno · cosa en sí · límite', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'phenomenon', label: 'fenómeno', caption: 'materia + forma', shapeRole: 'structure' },
    { id: 'matter', label: 'materia', caption: 'receptividad · afección', shapeRole: 'concept' },
    { id: 'thing', label: 'cosa en sí', caption: 'realidad independiente', shapeRole: 'mediation' },
    { id: 'causality', label: 'causalidad', caption: 'categoría del entendimiento', shapeRole: 'mediation' },
    { id: 'aporia', label: 'aporía', caption: 'causa / no causa', shapeRole: 'structure', tone: 'accent' },
    { id: 'reinhold', label: 'Reinhold', caption: 'sujeto · representación · objeto', shapeRole: 'concept' },
    { id: 'schulze', label: 'Schulze', caption: 'crítica del uso trascendente', shapeRole: 'concept' },
    { id: 'maimon', label: 'Maimon · Beck', caption: 'siguiente umbral', shapeRole: 'mediation' },
    { id: 'idealism', label: 'idealismo alemán', caption: 'superar las escisiones', shapeRole: 'result', tone: 'accent' },
  ],
  edges: [
    { from: 'kant', to: 'phenomenon', label: 'delimita', relationKind: 'derives' },
    { from: 'phenomenon', to: 'matter', label: 'contiene', relationKind: 'derives' },
    { from: 'matter', to: 'thing', label: 'plantea la pregunta por', relationKind: 'derives' },
    { from: 'thing', to: 'causality', label: '¿es causa?', relationKind: 'derives' },
    { from: 'causality', to: 'aporia', label: 'produce', relationKind: 'derives' },
    { from: 'aporia', to: 'reinhold', label: 'es sistematizada por', relationKind: 'derives' },
    { from: 'reinhold', to: 'schulze', label: 'es objetada por', relationKind: 'derives' },
    { from: 'schulze', to: 'maimon', label: 'abre el paso hacia', relationKind: 'derives' },
    { from: 'maimon', to: 'idealism', label: 'prepara', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .27, edgeDuration: .29 },
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

export default function OntologiaClass30Sep() {
  const reinholdImage = `${import.meta.env.BASE_URL}images/ontologia/open/2026-09-30/reinhold-1825.jpg`

  return (
    <main className="oa-page oaf-page oaf-sep30-page">
      <div className="oa-backdrop" aria-hidden="true" />

      <div className="oa-brochure oaf-brochure oaf-sep30-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>XXX · IX · MMXXVI</span>
        </nav>

        <header className="oa-cover oaf-cover oaf-sep30-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · fol. XXIII · post criticam</span>

            <h1>
              La cosa en sí
              <em>y las aporías del kantismo</em>
            </h1>

            <p className="oa-subtitle">
              res in se · affectio · causalitas · aporia · idealismus
            </p>

            <p className="oaf-lead">
              El límite que Kant trazó para proteger la validez del conocimiento se
              convierte en un nuevo problema: si sólo conocemos fenómenos, ¿cómo puede
              una cosa en sí incognoscible explicar la materia que recibimos en la experiencia?
            </p>

            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>
                ¿Puede la cosa en sí ser causa de la materia del fenómeno sin aplicar
                ilegítimamente la categoría de causalidad fuera de la experiencia?
              </strong>
            </div>

            <div className="oaf-axis" aria-label="Eje conceptual">
              <span>res in se</span><b>→</b>
              <span>affectio</span><b>→</b>
              <span>materia</span><b>→</b>
              <span>causalitas</span><b>→</b>
              <span>aporia</span>
            </div>

            <div className="oaf-sep30-actions">
              <button type="button" onClick={() => goTo('aporia')}>Ver aporía ↓</button>
              <Link to="/tareas/ontologia-ii/hartmann-cosa-en-si">Abrir lectio de Hartmann ↗</Link>
            </div>
          </div>

          <figure className="oa-cover-object">
            <div className="oa-cover-frame">
              <span className="oa-tape oa-tape-a" aria-hidden="true" />
              <span className="oa-tape oa-tape-b" aria-hidden="true" />
              <img
                src={reinholdImage}
                alt="Retrato de Karl Leonhard Reinhold, grabado publicado en 1825"
              />
            </div>
            <figcaption>
              <span>IMAGO XXIII · CAROLUS LEONHARD REINHOLD</span>
              <strong>Karl Leonhard Reinhold</strong>
              <small>C. Ermer según Peter Copmann · 1825.</small>
              <small className="oa-image-rights">Dominio público · Public Domain Mark 1.0</small>
              <a
                className="oa-image-source"
                href="https://commons.wikimedia.org/wiki/File:Karl_Leonhard_Reinhold_(1757-1823).jpg"
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
            <h2>El problema que Kant deja abierto</h2>
            <div className="oaf-questions">
              <p>¿Qué aporta el sujeto y qué recibe?</p>
              <p>¿Qué significa que algo nos «afecte»?</p>
              <p>¿Puede una categoría describir la cosa en sí?</p>
            </div>
            <p>
              La sesión vuelve sobre Berkeley, la Refutación del idealismo y el
              «residuo realista» de Kant para mostrar por qué la materia del fenómeno
              empuja al criticismo hacia una dificultad interna.
            </p>
          </div>

          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Vocabulario del problema</h2>
            <div>
              <article><span>Alemán</span><strong>Ding an sich</strong><p>Cosa en sí; realidad considerada independientemente de nuestras condiciones de conocer.</p></article>
              <article><span>Alemán</span><strong>Erscheinung</strong><p>Fenómeno; objeto tal como aparece bajo las condiciones de la experiencia.</p></article>
              <article><span>Alemán</span><strong>Vorstellung</strong><p>Representación; término decisivo en la sistematización de Reinhold.</p></article>
              <article><span>Griego</span><strong>ἀπορία</strong><p>Dificultad en la que las alternativas disponibles producen nuevos problemas.</p></article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas oaf-sep30-atlas">
          <div className="oa-wine-title"><span>SCHEMA · ATLAS</span><h2>atlas</h2></div>
          <p>
            La arquitectura de la clase muestra cómo un problema de receptividad
            se convierte en el puente histórico del criticismo hacia el idealismo alemán.
          </p>
          <div className="oa-schema-card"><AnimatedConceptSchema schema={atlasSchema} /></div>
        </section>

        <div className="oaf-layout oaf-sep30-layout">
          <aside className="oaf-index oaf-sep30-index">
            <p>Index aporeticus</p>
            {sections.map(([n, id, label]) => (
              <button type="button" key={id} onClick={() => goTo(id)}>
                <span>{n}</span>
                {label}
              </button>
            ))}
          </aside>

          <article className="oaf-article oaf-sep30-article">
            <Section n="00" id="mapa" eyebrow="Tabula sessionis" title="De la cosa en sí a la aporía postkantiana">
              <div className="oaf-sep30-route">
                <article><span>01</span><strong>Kant</strong><p>fenómeno / cosa en sí</p></article>
                <b>→</b>
                <article><span>02</span><strong>materia</strong><p>receptividad / afección</p></article>
                <b>→</b>
                <article className="active"><span>03</span><strong>aporía</strong><p>¿la cosa en sí causa?</p></article>
                <b>→</b>
                <article><span>04</span><strong>Reinhold</strong><p>sistematización</p></article>
                <b>→</b>
                <article><span>05</span><strong>Schulze</strong><p>objeción escéptica</p></article>
              </div>

              <div className="oaf-callout">
                <span>TESIS DE TRABAJO</span>
                <strong>
                  El problema no está en afirmar simplemente que hay mundo exterior,
                  sino en explicar cómo puede afectar al sujeto sin convertir lo
                  incognoscible en un objeto descrito mediante categorías.
                </strong>
              </div>
            </Section>

            <Section n="01" id="idealismo" eyebrow="Refutatio idealismi" title="Kant no quiere ser Berkeley">
              <p>
                La sesión parte de una objeción conocida contra Kant: si el ser conocido
                siempre aparece bajo espacio, tiempo y categorías, podría parecer que
                todo queda reducido a representación. El profesor recupera aquí la
                diferencia entre el idealismo trascendental y un idealismo psicológico.
              </p>

              <div className="oaf-sep30-idealism">
                <article>
                  <span>BERKELEY</span>
                  <strong>Idealismo dogmático</strong>
                  <p>La materialidad independiente pierde el papel que posee en el realismo ordinario.</p>
                </article>
                <article>
                  <span>DESCARTES</span>
                  <strong>Idealismo problemático</strong>
                  <p>La existencia del mundo exterior aparece como algo que exige prueba.</p>
                </article>
                <article className="active">
                  <span>KANT</span>
                  <strong>Idealismo trascendental</strong>
                  <p>Lo conocido depende de condiciones a priori, sin que por ello el mundo exterior sea una ficción psicológica.</p>
                </article>
              </div>

              <div className="oaf-sep30-residue">
                <span>RESIDUUM REALISTICUM</span>
                <strong>La cosa en sí conserva la independencia de lo real respecto del sujeto.</strong>
                <p>
                  En la discusión de clase aparece por ello como un «residuo realista»:
                  aquello que impide identificar sin más el fenómeno con una producción
                  arbitraria de la conciencia.
                </p>
              </div>
            </Section>

            <Section n="02" id="fenomeno" eyebrow="Materia · forma" title="La dificultad aparece en la materia del fenómeno">
              <p>
                En la Estética trascendental ya había quedado establecida una distinción
                que ahora se vuelve decisiva. En el fenómeno podemos distinguir, para
                fines de análisis, aquello que aporta el sujeto y aquello que es recibido.
              </p>

              <div className="oaf-pair oaf-sep30-pair">
                <div>
                  <span>FORMA</span>
                  <strong>condiciones aportadas por el sujeto</strong>
                  <p>espacio · tiempo · síntesis categorial</p>
                </div>
                <b>+</b>
                <div>
                  <span>MATERIA</span>
                  <strong>contenido recibido en la afección</strong>
                  <p>el punto que exige explicar la receptividad</p>
                </div>
              </div>

              <div className="oaf-callout">
                <span>PREGUNTA CONDUCTORA</span>
                <strong>¿Qué es aquello que afecta al sujeto y hace posible hablar de una materia recibida?</strong>
              </div>
            </Section>

            <Section n="03" id="aporia" eyebrow="Aporia causalitatis" title="¿La cosa en sí causa la materia del fenómeno?" wine>
              <p>
                A primera vista, la respuesta parece sencilla: la cosa en sí afecta al
                sujeto y produce la materia del fenómeno. Pero «causa» no es una palabra
                neutral dentro de Kant: causalidad es una categoría del entendimiento.
              </p>

              <div className="oaf-sep30-aporia">
                <div className="premise">
                  <span>PUNTO DE PARTIDA</span>
                  <strong>Las categorías poseen uso objetivo dentro de la experiencia posible.</strong>
                </div>

                <div className="branch yes">
                  <span>TESIS</span>
                  <strong>La cosa en sí causa la afección.</strong>
                  <p>Entonces causalidad parece aplicarse a algo que no es fenómeno.</p>
                </div>

                <div className="fork" aria-hidden="true">↙︎ &nbsp;&nbsp; ↘︎</div>

                <div className="branch no">
                  <span>ANTÍTESIS</span>
                  <strong>La cosa en sí no causa la afección.</strong>
                  <p>Entonces queda abierta la explicación de la receptividad y de la materia.</p>
                </div>

                <div className="result">
                  <span>RESULTADO</span>
                  <strong>Un callejón conceptual: una auténtica ἀπορία.</strong>
                </div>
              </div>

              <div className="oaf-note oaf-sep30-wine-note">
                <strong>La dificultad es interna al criticismo.</strong>
                <p>
                  Kant necesita conservar el límite de las categorías y, al mismo tiempo,
                  evitar que la experiencia sea entendida como pura espontaneidad sin receptividad.
                </p>
              </div>
            </Section>

            <Section n="04" id="reinhold" eyebrow="Repraesentatio" title="Reinhold intenta convertir el criticismo en sistema">
              <p>
                La lectura introduce a Karl Leonhard Reinhold como una figura de transición.
                Su proyecto busca un principio desde el cual pueda reconstruirse de manera
                sistemática aquello que Kant dejó distribuido en las tres Críticas.
              </p>

              <div className="oaf-sep30-representation">
                <article><span>SUBJECTUM</span><strong>sujeto</strong><p>aquello que representa</p></article>
                <b>↔</b>
                <article className="active"><span>VORSTELLUNG</span><strong>representación</strong><p>unidad relacional</p></article>
                <b>↔</b>
                <article><span>OBJECTUM</span><strong>objeto</strong><p>aquello representado</p></article>
              </div>

              <div className="oaf-sep30-two">
                <article>
                  <span>ESPONTANEIDAD</span>
                  <strong>forma</strong>
                  <p>actividad del sujeto en la constitución de la representación.</p>
                </article>
                <article>
                  <span>RECEPTIVIDAD</span>
                  <strong>materia</strong>
                  <p>aquello que exige explicar una referencia que no proceda enteramente del sujeto.</p>
                </article>
              </div>
            </Section>

            <Section n="05" id="schulze" eyebrow="Scepticismus" title="Schulze convierte la dificultad en objeción">
              <p>
                Gottlob Ernst Schulze presiona el punto más vulnerable: si el criticismo
                había reducido causalidad a categoría del pensamiento con validez para
                fenómenos, ¿con qué derecho se habla de una causa real suprasensible?
              </p>

              <div className="oaf-sep30-schulze">
                <span>OBJECIÓN</span>
                <strong>O la cosa en sí no causa la afección, o si la causa ya estamos afirmando algo de ella mediante una categoría.</strong>
                <p>
                  La crítica obliga a distinguir entre una <em>condición de posibilidad</em>
                  y una <em>causa real</em>. Confundir ambas vuelve inestable la frontera
                  que Kant había trazado entre fenómeno y cosa en sí.
                </p>
              </div>

              <div className="oaf-sep30-thinking-being">
                <article>
                  <span>ORDEN DEL PENSAR</span>
                  <strong>condiciones necesarias para nosotros</strong>
                </article>
                <b>≠</b>
                <article>
                  <span>ORDEN DEL SER</span>
                  <strong>estructura de la realidad en sí</strong>
                </article>
              </div>
            </Section>

            <Section n="06" id="necesidad" eyebrow="Necessitas · regularitas" title="Necesidad del conocimiento no equivale automáticamente a necesidad de lo real">
              <p>
                La sesión conecta la objeción postkantiana con una cuestión más amplia.
                La ciencia busca universalidad y necesidad, pero de nuestra necesidad de
                organizar el conocimiento mediante estructuras universales no se sigue,
                sin argumento adicional, que la realidad en sí posea exactamente esa misma necesidad.
              </p>

              <div className="oaf-sep30-regularity">
                <article><span>EXPERIENCIA</span><strong>regularidades</strong><p>los hechos muestran patrones suficientemente estables para investigar y predecir.</p></article>
                <b>→</b>
                <article><span>CIENCIA</span><strong>leyes</strong><p>modelos y principios organizan esas regularidades.</p></article>
                <b>≠</b>
                <article className="active"><span>METAFÍSICA</span><strong>necesidad absoluta</strong><p>no puede inferirse sin más de la estructura de nuestros juicios.</p></article>
              </div>

              <div className="oaf-callout">
                <span>ECO DE LA CRÍTICA ONTOLÓGICA</span>
                <strong>No debe pasarse sin justificación del orden del pensamiento al orden del ser.</strong>
              </div>
            </Section>

            <Section n="07" id="genealogia" eyebrow="Genealogia" title="Un puente muy corto entre Kant y el idealismo alemán">
              <p>
                El profesor subraya la densidad intelectual de las décadas posteriores a
                Kant. La primera edición de la <em>Crítica de la razón pura</em> aparece en
                1781 y la segunda en 1787; en muy pocos años se acumulan respuestas que
                transforman el problema.
              </p>

              <div className="oaf-sep30-genealogy">
                <article><span>1781 / 1787</span><strong>Kant</strong><p>delimita el conocimiento y mantiene la cosa en sí.</p></article>
                <b>→</b>
                <article><span>1789–1791</span><strong>Reinhold</strong><p>sistematiza la representación.</p></article>
                <b>→</b>
                <article><span>1792</span><strong>Schulze</strong><p>reactiva la objeción escéptica.</p></article>
                <b>→</b>
                <article><span>UMBRAL</span><strong>Maimon · Beck</strong><p>radicalizan la revisión de la cosa en sí.</p></article>
                <b>→</b>
                <article><span>IDEALISMO</span><strong>Fichte · Schelling · Hegel</strong><p>buscan superar las escisiones heredadas.</p></article>
              </div>
            </Section>

            <Section n="08" id="monismo" eyebrow="Unitas contra dualismum" title="La presión por superar los dualismos">
              <p>
                La herencia kantiana deja varios pares difíciles de conciliar. Los autores
                posteriores no se limitan a comentar a Kant: buscan reorganizar el sistema
                para evitar que esas separaciones se conviertan en callejones sin salida.
              </p>

              <div className="oaf-sep30-dualisms">
                <article><strong>fenómeno</strong><span>↔</span><strong>cosa en sí</strong></article>
                <article><strong>naturaleza</strong><span>↔</span><strong>libertad</strong></article>
                <article><strong>sensibilidad</strong><span>↔</span><strong>inteligibilidad</strong></article>
                <article><strong>sujeto</strong><span>↔</span><strong>mundo</strong></article>
              </div>

              <div className="oaf-sep30-spinoza">
                <span>SPINOZA REAPARECE</span>
                <strong>El interés por soluciones monistas ofrece una vía para pensar una unidad capaz de superar dualismos.</strong>
                <p>
                  La clase lo presenta como un impulso general del periodo, no como una
                  tesis idéntica compartida por todos los autores del idealismo alemán.
                </p>
              </div>
            </Section>

            <Section n="09" id="digresion" eyebrow="Digressio magistri" title="Universidad, presupuesto, deuda y soberanía">
              <div className="oaf-sep30-digression-note">
                <strong>Comentario y aplicación del profesor.</strong>
                <p>Este bloque pertenece a la conversación de la sesión y no a la exposición textual de Kant, Reinhold, Schulze o Hartmann.</p>
              </div>

              <div className="oaf-sep30-digression-grid">
                <article>
                  <span>01 · PRESUPUESTO</span>
                  <h3>Ingresos y egresos</h3>
                  <p>Una institución distribuye recursos limitados entre infraestructura, salarios, servicios y contingencias. El profesor lo compara con un presupuesto doméstico.</p>
                </article>
                <article>
                  <span>02 · AHORRO</span>
                  <h3>Inflación y reserva</h3>
                  <p>La inflación erosiona el poder adquisitivo del ahorro, pero una reserva puede evitar que una emergencia obligue a depender enteramente del crédito.</p>
                </article>
                <article>
                  <span>03 · DEUDA</span>
                  <h3>Intereses y dependencia</h3>
                  <p>Cuando el gasto supera persistentemente los ingresos, la deuda introduce costos futuros y puede reducir el margen de decisión.</p>
                </article>
                <article>
                  <span>04 · MÉXICO</span>
                  <h3>Deuda histórica y soberanía</h3>
                  <p>La conversación recorre la Independencia, el financiamiento externo, rescates bancarios y la conversión de obligaciones privadas en deuda pública.</p>
                </article>
                <article>
                  <span>05 · RECURSOS</span>
                  <h3>Ecología política</h3>
                  <p>Minería, territorios indígenas, contaminación y empresas extranjeras aparecen como ejemplos de conflictos donde ambiente, economía y poder se cruzan.</p>
                </article>
                <article>
                  <span>06 · GEOPOLÍTICA</span>
                  <h3>Moneda, guerra y poder</h3>
                  <p>El crédito, los recursos estratégicos y la guerra alteran presupuestos y muestran que la economía posee también una dimensión geopolítica.</p>
                </article>
              </div>
            </Section>

            <Section n="10" id="lectura" eyebrow="Lectio sequens" title="Avanzar con Maimon y Beck" wine>
              <p>
                La indicación final es continuar la lectura postkantiana. El profesor pide
                avanzar al menos con dos autores; por la secuencia del dossier trabajado,
                los siguientes son Salomon Maimon y Jakob Sigismund Beck.
              </p>

              <div className="oaf-books oaf-sep30-reading">
                <article><span>I</span><strong>Salomon Maimon</strong><p>Examinar cómo replantea la cosa en sí y la relación entre forma, materia y conciencia.</p></article>
                <article><span>II</span><strong>Jakob Sigismund Beck</strong><p>Examinar qué ocurre cuando se desplaza o elimina el papel de la cosa en sí.</p></article>
                <article><span>PROPÓSITO</span><strong>Seguir la transformación</strong><p>Del criticismo kantiano a las condiciones que harán posible el idealismo alemán.</p></article>
              </div>

              <Link className="oaf-task-link oaf-sep30-task-link" to="/tareas/ontologia-ii/hartmann-cosa-en-si">
                volver al dossier Hartmann ↗
              </Link>
            </Section>

            <Section n="11" id="cierre" eyebrow="Consequentia" title="La cosa en sí se convierte en un problema generador">
              <p>
                Después de esta sesión, la cosa en sí ya no funciona únicamente como
                límite negativo del conocimiento. Se vuelve el punto desde el cual los
                postkantianos preguntarán por el realismo, la receptividad, la causalidad
                y la unidad del sistema.
              </p>

              <div className="oaf-big-questions">
                <p>¿Es necesaria la cosa en sí para conservar la independencia de lo real?</p>
                <p>¿Puede explicar la receptividad sin ser conocida?</p>
                <p>¿Debe reinterpretarse, limitarse o eliminarse?</p>
              </div>

              <div className="oaf-callout">
                <span>UMBRAL DEL CURSO</span>
                <strong>
                  La filosofía posterior no abandona a Kant: intenta resolver las
                  tensiones que la propia arquitectura crítica ha dejado abiertas.
                </strong>
              </div>
            </Section>
          </article>
        </div>

        <section className="oaf-documentum oaf-sep30-documentum">
          <div>
            <small>NOTA DOCUMENTAL</small>
            <h2>Criterio de edición</h2>
          </div>
          <p>
            La grabación conserva varios nombres propios poco inteligibles. La página sólo
            atribuye con seguridad los autores identificables en el fragmento y en el dossier
            ya asociado a esta sesión: Kant, Berkeley, Descartes, Reinhold, Schulze, Maimon y Beck.
            El profesor anuncia un recorrido de seis autores postkantianos; los nombres no
            recuperables no se completan por inferencia. La segunda edición de la
            <em> Crítica de la razón pura</em> se fecha correctamente en 1787.
          </p>
        </section>

        <footer className="oa-footer">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <span>☙ &nbsp; res in se &nbsp; ❧</span>
          <span>XXX · IX · MMXXVI</span>
        </footer>
      </div>
    </main>
  )
}
