import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './OntologiaClass30SepArchive.css'
import './OntologiaClass14Oct.css'

const sections = [
  ['00','mapa','Mapa de la sesión'],
  ['01','tarea','Croce y el cuestionario'],
  ['02','metodo','Método filosófico'],
  ['03','caracteres','Lógico, universal y concreto'],
  ['04','oposicion','Distintos y contrarios'],
  ['05','monismo','Monismo y dualismo'],
  ['06','razon','Intelecto y razón'],
  ['07','comienzo','El comienzo de la lógica'],
  ['08','devenir','Ser, Nada y Devenir'],
  ['09','dasein','Dasein y negación'],
  ['10','identidad','Delirio báquico e identidad'],
  ['11','continuidad','Continuidad y examen'],
]

const schema = {
  layout:'flow',
  direction:'vertical',
  flowGap:44,
  minHeight:1420,
  fitPadding:54,
  sizeHint:'tall',
  nodes:[
    {id:'task',label:'Croce + cuestionario',caption:'hilo conductor de la sesión',shapeRole:'term'},
    {id:'method',label:'método filosófico',caption:'objeto = totalidad',shapeRole:'concept',emphasis:true,tone:'accent'},
    {id:'chars',label:'lógico · universal · concreto',caption:'concepto y totalidad',shapeRole:'mediation'},
    {id:'opp',label:'distintos ≠ contrarios',caption:'precisión lógica',shapeRole:'mediation'},
    {id:'md',label:'monismo ↔ dualismo',caption:'unidad / oposición',shapeRole:'structure'},
    {id:'reason',label:'intelecto → razón',caption:'determinar / relacionar',shapeRole:'mediation',emphasis:true,tone:'accent'},
    {id:'being',label:'Ser puro',caption:'indeterminación',shapeRole:'concept'},
    {id:'nothing',label:'Nada pura',caption:'indeterminación',shapeRole:'concept'},
    {id:'becoming',label:'Devenir',caption:'verdad como movimiento',shapeRole:'result',emphasis:true,tone:'accent'},
    {id:'dasein',label:'Dasein',caption:'ser determinado',shapeRole:'result'},
    {id:'identity',label:'identidad concreta',caption:'diferencia dentro de la unidad',shapeRole:'result'},
  ],
  edges:[
    {from:'task',to:'method',label:'Q1',relationKind:'derives'},
    {from:'method',to:'chars',label:'Q2',relationKind:'derives'},
    {from:'chars',to:'opp',label:'Q3–Q4',relationKind:'derives'},
    {from:'opp',to:'md',label:'Q5–Q8',relationKind:'derives'},
    {from:'md',to:'reason',label:'Q9–Q12',relationKind:'derives'},
    {from:'reason',to:'being',label:'entrada a Hegel',relationKind:'derives'},
    {from:'being',to:'nothing',label:'pasa a',relationKind:'derives'},
    {from:'nothing',to:'becoming',label:'unidad móvil',relationKind:'derives'},
    {from:'becoming',to:'dasein',label:'resultado',relationKind:'derives'},
    {from:'dasein',to:'identity',label:'determinación + diferencia',relationKind:'derives'},
  ],
  animation:{mode:'sequence',nodeDuration:.25,edgeDuration:.27},
}

const goTo=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

function Section({n,id,eyebrow,title,children,wine=false}){
  return (
    <section id={id} className={`oaf-section${wine?' oaf-wine-section':''}`}>
      <span className="oaf-number" aria-hidden="true">{n}</span>
      <p className="oaf-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default function OntologiaClass14Oct(){
  return (
    <main className="oa-page oaf-page oaf-sep30-page oaf-oct14-page">
      <div className="oa-backdrop" aria-hidden="true" />
      <div className="oa-brochure oaf-brochure oaf-sep30-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>XIV · X · MMXXVI</span>
        </nav>

        <header className="oa-cover oaf-cover oaf-sep30-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · fol. XXV · Logica Hegeliana</span>
            <h1>Croce y los contrarios <em>Ser · Nada · Devenir</em></h1>
            <p className="oa-subtitle">universale concretum · intellectus · ratio · Werden</p>
            <p className="oaf-lead">
              El cuestionario de Croce funciona como hilo conductor para pasar del problema
              del método filosófico a la unidad de los contrarios y, finalmente, al comienzo
              efectivo de la <em>Ciencia de la Lógica</em>.
            </p>
            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>¿Cómo puede la verdad conservar diferencia y oposición sin romper la unidad?</strong>
            </div>
            <div className="oaf-axis" aria-label="Eje conceptual">
              <span>methodus</span><b>→</b><span>oppositio</span><b>→</b><span>ratio</span><b>→</b><span>Sein</span><b>→</b><span>Werden</span>
            </div>
            <div className="oaf-sep30-actions">
              <button type="button" onClick={()=>goTo('metodo')}>Seguir la clase ↓</button>
              <Link className="oaf-oct14-system-link" to="/tareas/ontologia-ii/hegel-croce-dialectica">Abrir sistema 2D ↗</Link>
            </div>
          </div>

          <div className="oa-cover-object oaf-oct14-object" aria-label="Ser, Nada y Devenir">
            <div className="oaf-oct14-logical">
              <span>SEIN</span>
              <b>↔</b>
              <span>NICHTS</span>
              <strong>WERDEN</strong>
              <small>Ser · Nada · Devenir</small>
            </div>
          </div>
        </header>

        <section className="oaf-prologue">
          <div className="oaf-prologue-copy">
            <small>INTRODUCTIO</small>
            <h2>La tarea entra a la clase</h2>
            <p>
              El profesor dedica la sesión a trabajar el cuestionario enviado por correo.
              La lectura de Croce sirve como acceso a Hegel, pero en la segunda mitad ya
              se trabaja directamente el comienzo de la <em>Ciencia de la Lógica</em>.
            </p>
          </div>
          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Vocabulario decisivo</h2>
            <div>
              <article><span>Croce</span><strong>universal concreto</strong><p>unidad que contiene diferencia y oposición.</p></article>
              <article><span>Hegel</span><strong>Ser puro</strong><p>inmediatez absolutamente indeterminada.</p></article>
              <article><span>Hegel</span><strong>Devenir</strong><p>movimiento de Ser y Nada.</p></article>
              <article><span>Continuidad</span><strong>Dasein</strong><p>ser determinado: identidad y diferencia.</p></article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas oaf-sep30-atlas">
          <div className="oa-wine-title"><span>SCHEMA · SESSIONIS</span><h2>movimiento</h2></div>
          <p>El cuestionario deja de ser una lista y se vuelve una secuencia conceptual.</p>
          <div className="oa-schema-card"><AnimatedConceptSchema schema={schema} /></div>
        </section>

        <div className="oaf-layout oaf-sep30-layout">
          <aside className="oaf-index oaf-sep30-index">
            <p>Index dialecticus</p>
            {sections.map(([n,id,label])=>(
              <button type="button" key={id} onClick={()=>goTo(id)}><span>{n}</span>{label}</button>
            ))}
          </aside>

          <article className="oaf-article oaf-sep30-article">
            <Section n="00" id="mapa" eyebrow="Tabula sessionis" title="Del cuestionario al comienzo de Hegel">
              <div className="oaf-oct14-route">
                <article><span>01</span><strong>Croce</strong><p>método · contrarios</p></article><b>→</b>
                <article><span>02</span><strong>Razón</strong><p>unidad de opuestos</p></article><b>→</b>
                <article className="active"><span>03</span><strong>Hegel</strong><p>Ser · Nada · Devenir</p></article><b>→</b>
                <article><span>04</span><strong>Dasein</strong><p>determinación</p></article>
              </div>
            </Section>

            <Section n="01" id="tarea" eyebrow="Quaestiones Croceanae" title="El cuestionario como guía de lectura">
              <p>
                El cuestionario se usa para localizar las ideas principales del capítulo I.
                Algunas respuestas aparecen expresamente en Croce y otras necesitan relacionar
                pasajes. El objetivo de la sesión es entender el movimiento, no memorizar fórmulas.
              </p>
              <div className="oaf-callout"><span>EVALUACIÓN</span><strong>Se anuncia un examen aproximadamente dentro de quince días; la grabación no fija una fecha exacta.</strong></div>
            </Section>

            <Section n="02" id="metodo" eyebrow="Methodus philosophiae" title="La totalidad exige un método propio">
              <p>
                La formulación central de la clase es sencilla: si la filosofía tiene por
                objeto la totalidad, no puede tomar sin más el método de una ciencia particular.
              </p>
              <div className="oaf-oct14-grid">
                <article><span>DESCARTES</span><strong>modelo matemático</strong><p>ejemplo histórico de método inspirado por la matemática.</p></article>
                <article><span>SPINOZA</span><strong>orden geométrico</strong><p>la forma de la Ética sirve como segundo contraste.</p></article>
                <article><span>VICO</span><strong>historia</strong><p>el objeto histórico exige otro tipo de comprensión.</p></article>
              </div>
            </Section>

            <Section n="03" id="caracteres" eyebrow="Logica · universale · concretum" title="Lógico, universal y concreto">
              <p>
                Croce conserva esos tres caracteres. El profesor glosa «lógico» como trabajo
                conceptual riguroso; «universal» como orientación hacia la totalidad; y «concreto»
                como totalidad real con diferencias y oposiciones internas.
              </p>
              <div className="oaf-oct14-equation"><span>universal</span><b>+</b><span>diferencias</span><b>+</b><span>oposiciones</span><b>=</b><strong>universal concreto</strong></div>
            </Section>

            <Section n="04" id="oposicion" eyebrow="Distinctio" title="Distinto no significa contrario">
              <p>
                La clase recupera la lógica aristotélica para marcar que diferencia y
                contrariedad no son equivalentes. Esta precisión es condición para no hacer
                de toda diferencia una dialéctica de opuestos.
              </p>
            </Section>

            <Section n="05" id="monismo" eyebrow="Unitas · oppositio" title="Monismo y dualismo">
              <div className="oaf-oct14-two">
                <article><span>MONISMO</span><strong>unidad &gt; oposición</strong><p>la oposición queda reducida dentro de una realidad única; Spinoza aparece como ejemplo pedagógico.</p></article>
                <article><span>DUALISMO</span><strong>oposición &gt; unidad</strong><p>los polos se conservan como reales y separados; el maniqueísmo sirve como ejemplo.</p></article>
              </div>
              <div className="oaf-callout"><span>PROBLEMA</span><strong>Hegel debe pensar unidad y oposición sin sacrificar ninguna.</strong></div>
            </Section>

            <Section n="06" id="razon" eyebrow="Intellectus · ratio" title="El entendimiento fija; la razón relaciona">
              <div className="oaf-oct14-two">
                <article><span>ENTENDIMIENTO / INTELECTO</span><strong>determina y separa</strong><p>identidad · no contradicción · tercero excluido.</p></article>
                <article><span>RAZÓN</span><strong>piensa los opuestos en su unidad</strong><p>relación · mediación · totalidad.</p></article>
              </div>
              <p className="oaf-oct14-source-warning">
                La comparación oral con lógicas contemporáneas capaces de tratar contradicciones
                se conserva sólo como analogía pedagógica, no como clasificación histórica de Hegel.
              </p>
            </Section>

            <Section n="07" id="comienzo" eyebrow="Initium scientiae" title="¿Con qué debe comenzar la ciencia?">
              <p>
                La sesión entra ya al texto primario. El comienzo debe evitar presupuestos y
                contenido determinado; por eso Hegel inicia con el Ser puro, la determinación
                más inmediata e indeterminada.
              </p>
            </Section>

            <Section n="08" id="devenir" eyebrow="Sein · Nichts · Werden" title="La verdad es el movimiento">
              <div className="oaf-oct14-becoming">
                <article><span>SER PURO</span><strong>indeterminación</strong></article>
                <b>↔</b>
                <article><span>NADA PURA</span><strong>indeterminación</strong></article>
                <b>→</b>
                <article className="active"><span>DEVENIR</span><strong>tránsito</strong></article>
              </div>
              <p>
                La clase insiste en que la verdad no consiste en aislar Ser y Nada. Su verdad
                está en el tránsito recíproco. El Devenir es por ello el primer concepto concreto:
                contiene unidad, diferencia y movimiento.
              </p>
            </Section>

            <Section n="09" id="dasein" eyebrow="Determinatio" title="Ser determinado y negación">
              <p>
                La sesión adelanta el paso a Dasein. Ser algo determinado implica también no
                ser aquello que queda fuera de esa determinación. «Determinado» no significa
                causalmente producido por otro, sino poseer una cualidad que introduce diferencia.
              </p>
              <div className="oaf-oct14-equation"><span>ser algo</span><b>=</b><span>identidad</span><b>+</b><strong>negación / diferencia</strong></div>
            </Section>

            <Section n="10" id="identidad" eyebrow="Bacchicum · identitas" title="El movimiento no vuelve borrosa la realidad" wine>
              <p>
                El «delirio báquico» se interpreta como movimiento de momentos que no pueden
                separarse del todo sin disolverse. La clase rechaza entender esto como pérdida
                de toda diferencia: Ser y Nada conservan identidad como momentos, pero su verdad
                no consiste en permanecer aislados.
              </p>
              <div className="oaf-callout"><span>IDENTIDAD CONCRETA</span><strong>unidad que contiene diferencia y oposición sin desintegrarse.</strong></div>
            </Section>

            <Section n="11" id="continuidad" eyebrow="Continuatio" title="Qué sigue">
              <p>
                Q1–Q9 y Q13–Q18 fueron desarrolladas de forma expresa. Q10–Q12 y Q15 aparecen
                introducidas o trabajadas transversalmente. El cuestionario continuará como hilo
                conductor de las sesiones inmediatas.
              </p>
              <div className="oaf-oct14-next">
                <Link to="/tareas/ontologia-ii/hegel-croce-dialectica">Sistema 2D ampliado · clase 14 oct ↗</Link>
                <span>Examen anunciado · fecha exacta pendiente</span>
              </div>
            </Section>
          </article>
        </div>

        <section className="oaf-documentum oaf-sep30-documentum">
          <div><span>DOCUMENTUM</span><h2>Fuente y criterio editorial</h2></div>
          <p>
            Clase del 14 de octubre de 2026 reconstruida desde una grabación con ASR muy degradado.
            Croce, Hegel y la explicación oral se mantienen como capas distintas. Los ejemplos
            históricos, políticos y sociales conservan su función pedagógica y no se presentan como
            verificación externa.
          </p>
        </section>

        <footer className="oa-footer">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <span>☙ oppositio · Werden ❧</span>
          <span>XIV · X · MMXXVI</span>
        </footer>
      </div>
    </main>
  )
}
