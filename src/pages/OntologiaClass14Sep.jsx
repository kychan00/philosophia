import { Link } from 'react-router'
import './OntologiaClass07Sep.css'
import './OntologiaClass09Sep.css'
import './OntologiaClass14Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la clase'],
  ['01', 'problema', 'Sintético a priori'],
  ['02', 'sensibilidad', 'Sensibilidad e intuición'],
  ['03', 'fenomeno', 'Fenómeno · materia y forma'],
  ['04', 'espacio-tiempo', 'Espacio · tiempo'],
  ['05', 'exposiciones', 'Exposición metafísica · trascendental'],
  ['06', 'cosa-en-si', 'Fenómeno · cosa en sí'],
  ['07', 'categorias', 'Categorías y límites'],
  ['08', 'hume', 'Hume · causalidad'],
  ['09', 'afeccion', 'Problema de la afección'],
  ['10', 'formalizacion', 'Formalización'],
  ['11', 'cierre', 'Paso al entendimiento'],
  ['12', 'tarea', 'Próxima clase'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ontsep7-heading ontsep9-heading ontsep14-heading">
      <span>{n}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function OntologiaClass14Sep() {
  return (
    <main className="ontsep7-page ontsep9-page ontsep14-page">
      <nav className="ontsep7-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="ontsep7-brand">Φ · Philosophia</Link>
        <span>XIV · IX · MMXXVI</span>
      </nav>

      <header className="ontsep7-hero ontsep9-hero ontsep14-hero">
        <div className="ontsep7-grid" aria-hidden="true" />
        <div className="ontsep7-ghost ontsep14-ghost" aria-hidden="true">Erscheinung</div>
        <div className="ontsep7-hero-inner">
          <div>
            <p className="ontsep7-kicker">FI190 · Ontología II · 14 de septiembre de 2026</p>
            <h1>Kant:<em>fenómeno, espacio, tiempo y cosa en sí</em></h1>
            <p className="ontsep7-lead">
              La Estética trascendental muestra cómo la sensibilidad aporta las formas
              puras de espacio y tiempo. Desde ahí se delimita el fenómeno como objeto
              posible de conocimiento y aparece el problema de la cosa en sí.
            </p>
            <div className="ontsep7-question">
              <span>PREGUNTA RECTORA</span>
              <strong>¿Qué pone el sujeto para que algo pueda aparecer como objeto de conocimiento?</strong>
            </div>
            <div className="ontsep7-hero-actions">
              <button type="button" onClick={() => goToSection('mapa')}>Recorrer la clase ↓</button>
              <Link to="/tareas/ontologia-ii/kant-critica-razon-pura-estetica-trascendental">
                Abrir Estética trascendental ↗
              </Link>
            </div>
          </div>
          <aside className="ontsep7-hero-schema ontsep14-schema">
            <span>ESTRUCTURA DEL FENÓMENO</span>
            <div><small>MATERIA</small><strong>sensaciones</strong><p>Lo dado al sujeto.</p></div>
            <b>+</b>
            <div className="active"><small>FORMA</small><strong>espacio + tiempo</strong><p>Intuiciones puras a priori.</p></div>
            <b>=</b>
            <div><small>FENÓMENO</small><strong>objeto conocido</strong><p>Lo que aparece bajo nuestras condiciones.</p></div>
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
            <Heading n="00" eyebrow="Tabula argumenti">De la sensibilidad al límite del conocimiento</Heading>
            <div className="ontsep14-flow">
              {[
                ['01','Sintético a priori','problema de la ciencia'],
                ['02','Sensibilidad','objetos dados'],
                ['03','Espacio · tiempo','intuiciones puras'],
                ['04','Fenómeno','materia + forma'],
                ['05','Cosa en sí','límite del conocer'],
                ['06','Categorías','uso en fenómenos'],
              ].map(([n,t,p]) => <article key={n}><span>{n}</span><strong>{t}</strong><p>{p}</p></article>)}
            </div>
            <div className="ontsep7-thesis">
              <span>HILO DE LA SESIÓN</span>
              <strong>El conocimiento requiere algo dado por la sensibilidad y algo aportado por el sujeto: espacio y tiempo son condiciones a priori de todo fenómeno.</strong>
            </div>
          </section>

          <section id="problema">
            <Heading n="01" eyebrow="Quaestio scientiae">El problema de los juicios sintéticos a priori permanece en el centro</Heading>
            <div className="ontsep14-triad">
              <article><span>ANALÍTICO</span><strong>universal + necesario</strong><p>Se determina por análisis conceptual.</p></article>
              <article><span>SINTÉTICO EMPÍRICO</span><strong>amplía</strong><p>Depende de la experiencia y es contingente.</p></article>
              <article className="active"><span>SINTÉTICO A PRIORI</span><strong>amplía + necesidad</strong><p>Permite explicar matemática y física.</p></article>
            </div>
          </section>

          <section id="sensibilidad">
            <Heading n="02" eyebrow="Sensibilitas · intuitus">Los objetos son dados en la sensibilidad y pensados por el entendimiento</Heading>
            <div className="ontsep14-two">
              <article className="active"><span>SENSIBILIDAD</span><h3>Los objetos nos son dados.</h3><p>La Estética trascendental estudia esta facultad.</p></article>
              <article><span>ENTENDIMIENTO</span><h3>Los objetos son pensados.</h3><p>La Analítica trascendental estudiará sus conceptos puros.</p></article>
            </div>
            <div className="ontsep14-two">
              <article><span>INTUICIÓN EMPÍRICA</span><h3>contiene sensación</h3><p>Está ligada a aquello que recibimos.</p></article>
              <article className="active"><span>INTUICIÓN PURA</span><h3>espacio · tiempo</h3><p>No procede de la experiencia: la hace posible.</p></article>
            </div>
          </section>

          <section id="fenomeno">
            <Heading n="03" eyebrow="Phaenomenon">Fenómeno = materia + forma</Heading>
            <div className="ontsep14-relation">
              <article><span>MATERIA</span><strong>sensaciones</strong><p>Lo dado.</p></article><b>+</b>
              <article><span>FORMA</span><strong>espacio · tiempo</strong><p>Lo aportado por el sujeto.</p></article><b>=</b>
              <article className="active"><span>FENÓMENO</span><strong>objeto de conocimiento</strong><p>Lo que puede aparecer para nosotros.</p></article>
            </div>
            <div className="ontsep14-callout"><span>PUENTE CON ARISTÓTELES</span><p>La clase recupera materia y forma como comparación: en Kant sirven para explicar la constitución del fenómeno, no la sustancia aristotélica.</p></div>
          </section>

          <section id="espacio-tiempo">
            <Heading n="04" eyebrow="Spatium · tempus">Espacio y tiempo son intuiciones puras a priori</Heading>
            <div className="ontsep14-two">
              <article><span>SENTIDO EXTERNO</span><h3>Espacio</h3><p>Condición a priori bajo la que ordenamos lo que aparece exteriormente.</p></article>
              <article className="active"><span>SENTIDO INTERNO</span><h3>Tiempo</h3><p>Condición a priori de la sucesión y de nuestros estados internos.</p></article>
            </div>
            <div className="ontsep7-thesis"><span>NO PROCEDEN DE LA EXPERIENCIA</span><strong>La experiencia presupone ya espacio y tiempo como formas de la sensibilidad.</strong></div>
          </section>

          <section id="exposiciones">
            <Heading n="05" eyebrow="Expositio">Exposición metafísica y exposición trascendental</Heading>
            <div className="ontsep14-two">
              <article><span>METAFÍSICA</span><h3>Muestra su carácter a priori.</h3><p>Espacio y tiempo no se extraen de observar objetos.</p></article>
              <article className="active"><span>TRASCENDENTAL</span><h3>Muestra qué conocimiento hacen posible.</h3><p>La clase vincula espacio con geometría y tiempo con aritmética.</p></article>
            </div>
            <div className="ontsep14-math"><div><span>ESPACIO</span><strong>→ geometría</strong></div><div><span>TIEMPO</span><strong>→ aritmética</strong></div></div>
          </section>

          <section id="cosa-en-si">
            <Heading n="06" eyebrow="Erscheinung · Ding an sich">Fenómeno y cosa en sí no son lo mismo</Heading>
            <div className="ontsep14-two">
              <article className="active"><span>FENÓMENO</span><h3>La cosa tal como aparece para nosotros.</h3><p>Está sometida a nuestras condiciones de sensibilidad.</p></article>
              <article><span>COSA EN SÍ</span><h3>La realidad al margen de nuestras condiciones de conocer.</h3><p>Puede pensarse como límite, pero no conocerse tal como sería independientemente de nuestras facultades.</p></article>
            </div>
            <div className="ontsep7-thesis"><span>DISTINCIÓN</span><strong>Que algo exista independientemente de nosotros no significa que podamos conocerlo independientemente de las condiciones de nuestro conocimiento.</strong></div>
          </section>

          <section id="categorias">
            <Heading n="07" eyebrow="Usus legitimus">Las categorías tienen uso legítimo respecto de fenómenos</Heading>
            <div className="ontsep14-categories">{['sustancia','causalidad','existencia'].map(x => <span key={x}>{x}</span>)}</div>
            <div className="ontsep14-two">
              <article className="active"><span>ÁMBITO LEGÍTIMO</span><h3>objetos de experiencia</h3><p>Silla, mesa, árbol: fenómenos posibles.</p></article>
              <article><span>LÍMITE</span><h3>cosa en sí</h3><p>No puede recibir sin más categorías destinadas a la experiencia.</p></article>
            </div>
            <div className="ontsep14-callout"><span>ARGUMENTO ONTOLÓGICO</span><strong>“El ser no es un predicado real.”</strong><p>La existencia no agrega una propiedad al concepto; por eso no puede extraerse simplemente del concepto de Dios.</p></div>
          </section>

          <section id="hume">
            <Heading n="08" eyebrow="Hume · causalitas">La experiencia muestra sucesión, no necesidad causal</Heading>
            <div className="ontsep14-relation">
              <article><span>EXPERIENCIA</span><strong>A → B</strong><p>sucesión observada</p></article><b>→</b>
              <article><span>REPETICIÓN</span><strong>conjunción constante</strong><p>regularidad</p></article><b>→</b>
              <article className="active"><span>HUME</span><strong>asociación</strong><p>no necesidad objetiva observada</p></article>
            </div>
            <div className="ontsep7-thesis"><span>RESPUESTA QUE KANT BUSCA</span><strong>¿De dónde procede la necesidad expresada por “todo fenómeno físico tiene una causa”?</strong></div>
          </section>

          <section id="afeccion">
            <Heading n="09" eyebrow="Problema affectionis">¿Puede decirse que la cosa en sí causa nuestras sensaciones?</Heading>
            <div className="ontsep14-steps">
              <p><b>1.</b> Recibimos sensaciones.</p>
              <p><b>2.</b> Parece natural preguntar si algo en sí nos afecta.</p>
              <p><b>3.</b> Pero “causa” es una categoría.</p>
              <p><b>4.</b> Las categorías sólo tienen uso cognoscitivo legítimo en el ámbito fenoménico.</p>
            </div>
            <div className="ontsep14-callout"><span>DIFICULTAD</span><strong>Aplicar causalidad a la cosa en sí parece rebasar el límite que la propia crítica establece.</strong><p>La sesión enlaza este problema con el esquematismo trascendental y menciona a Heidegger, <em>Kant y el problema de la metafísica</em>.</p></div>
          </section>

          <section id="formalizacion">
            <Heading n="10" eyebrow="Forma logica">Todo fenómeno debe darse bajo espacio y tiempo</Heading>
            <div className="ontsep14-logic">
              <article><span>PREMISA</span><code>(∀x)[Fₓ → (Eₓ ∧ Tₓ)]</code><p>Todo fenómeno se da espacial y temporalmente.</p></article>
              <article><span>CASO LÍMITE</span><code>(∃x)¬(Eₓ ∧ Tₓ)</code><p>Se piensa algo fuera de esas condiciones.</p></article>
              <article className="active"><span>CONSECUENCIA</span><code>(∃x)¬Fₓ</code><p>No todo lo pensado es fenómeno.</p></article>
            </div>
            <p className="ontsep14-note">El ejemplo trabajado es Dios: pensarlo fuera de espacio y tiempo lo excluye del ámbito fenoménico; eso delimita el conocimiento, no demuestra inexistencia.</p>
          </section>

          <section id="cierre">
            <Heading n="11" eyebrow="Transitus ad analyticam">De la Estética trascendental a la Analítica trascendental</Heading>
            <div className="ontsep14-relation">
              <article><span>ESTÉTICA</span><strong>sensibilidad</strong><p>espacio · tiempo · fenómeno</p></article><b>→</b>
              <article className="active"><span>ANALÍTICA</span><strong>entendimiento</strong><p>conceptos puros · categorías</p></article>
            </div>
            <div className="ontsep7-thesis"><span>SIGUIENTE PROBLEMA</span><strong>¿Cómo aporta el entendimiento conceptos puros que permiten pensar como objeto aquello que la sensibilidad nos da?</strong></div>
          </section>

          <section id="tarea">
            <Heading n="12" eyebrow="Ad proximam lectionem">Preparar las categorías de Kant</Heading>
            <div className="ontsep14-task">
              <div>
                <span>TAREA</span><h3>Categorías y entendimiento</h3>
                <ul>
                  <li>Qué son las categorías para Kant.</li>
                  <li>Su relación con el entendimiento.</li>
                  <li>Deducción metafísica de las categorías.</li>
                  <li>Deducción trascendental de las categorías.</li>
                </ul>
              </div>
              <aside>
                <span>REFERENCIA MENCIONADA EN CLASE</span>
                <strong>Justus Hartnack</strong>
                <em>La teoría del conocimiento de Kant</em>
                <p>La grabación permite identificar esta referencia con bastante probabilidad, pero no fija páginas con seguridad.</p>
              </aside>
            </div>
            <div className="ontsep14-warning"><strong>No se registran páginas específicas ni una entrega escrita.</strong><p>Se conserva la indicación como lectura/preparación para la siguiente sesión.</p></div>
          </section>
        </article>
      </div>

      <footer className="ontsep7-footer ontsep14-footer">
        <Link to="/semestre/5/ontologia-ii">← Volver a Ontología II</Link>
        <span>FI190 · XIV · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
