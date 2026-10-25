import { useState } from 'react'
import { Link } from 'react-router'
import '../components/philosophy/system2d/System2DTheme.css'
import './CriticalTheoryClass15Oct.css'
import Critical15OctThematicAtlas from '../components/critical/Critical15OctThematicAtlas'
import Critical15OctSectionStudy from '../components/critical/Critical15OctSectionStudy'
import { critical15OctImage } from '../data/critical15OctImage'
import { critical15OctSourceSections } from '../data/critical15OctSourceSections'

const chapters = [
  { id:'herencia', title:'Marx → Lukács', topic:'Fundamento', color:'moss',
    before:'Trabajo enajenado y fetichismo de la mercancía estudiados en Marx.',
    body:'La sesión explica la cosificación como una ampliación de la crítica del fetichismo y la enajenación. El problema ya no se limita al producto: las propias capacidades y relaciones del sujeto adquieren la forma de objetos intercambiables.',
    after:'La forma mercancía permite examinar la industria y luego instituciones no económicas.',
    question:'¿Por qué la cosificación no es simplemente sinónimo de enajenación?',
    answer:'En la interpretación docente, incorpora elementos de la enajenación y el fetichismo, pero los despliega hacia múltiples ámbitos de la vida social.',
    layer:'Explicación docente sobre la continuidad de conceptos; no es una cita textual de Lukács.' },
  { id:'inversion', title:'Inversión sujeto–objeto', topic:'Concepto', color:'rust',
    before:'Mercancía como relación social que parece adquirir autonomía.',
    body:'En el ejemplo de la industria, los seres humanos crean la maquinaria, pero terminan sometidos al ritmo y a las exigencias del aparato productivo. La cosa parece actuar como sujeto y quien trabaja queda reducido a objeto: pierde iniciativa, decisión y espontaneidad.',
    after:'Se investiga cómo el cálculo impone su propio ritmo al cuerpo.',
    question:'¿Qué significa perder agencia en la inversión sujeto–objeto?',
    answer:'Que las decisiones quedan subordinadas a un mecanismo objetivado, en vez de ser dirigidas por quienes lo producen y utilizan.',
    layer:'Explicación docente y reconstrucción del ejemplo de la maquinaria.' },
  { id:'trabajo', title:'Tiempo, cálculo y fragmentación', topic:'Industria', color:'blue',
    before:'El sujeto se subordina a la organización industrial.',
    body:'La división del trabajo separa las operaciones y exige capacidades cada vez más restringidas. El cuerpo se mide, cronometra y adapta a secuencias repetitivas; desaparece la visión del producto total. En clase se usó la prueba laboral centrada en mover un dedo como ejemplo extremo de especialización.',
    after:'Los criterios de eficiencia se trasladan a la administración de organizaciones.',
    question:'¿Por qué el error fue interpretado en clase como un signo de espontaneidad?',
    answer:'Porque interrumpe la repetición mecánica prevista y puede hacer visible una singularidad cualitativa, aunque esto es una provocación filosófica de clase y no una defensa de errores peligrosos.',
    layer:'Clase: racionalización, Taylorismo y ejemplo anecdótico; distinguir el sistema de tiempos de Taylor de la cadena de montaje asociada al fordismo.' },
  { id:'instituciones', title:'La forma empresa más allá de la fábrica', topic:'Instituciones', color:'gold',
    before:'Cálculo, administración y división del trabajo en la industria.',
    body:'La noción de «forma» permitió razonar que algo puede compartir una estructura sin ser idéntico a aquello que la originó. Estado, derecho, universidad y burocracia pueden organizarse según procedimientos de cálculo, previsibilidad y especialización, aun cuando no vendan mercancías directamente.',
    after:'La expansión estructural alcanza también creencias, prácticas y afectos.',
    question:'¿Qué diferencia existe entre decir «el Estado es una empresa» y «tiene forma empresa»?',
    answer:'La segunda expresión señala analogías de organización y racionalidad sin afirmar identidad literal.',
    layer:'Explicación docente que relaciona a Marx, Lukács, Max Weber y la noción de forma empresa atribuida en clase a Foucault.' },
  { id:'afectos', title:'Intercambio y reemplazabilidad', topic:'Afectos', color:'violet',
    before:'La lógica mercantil se expande a relaciones que no son mercancías en sentido estricto.',
    body:'En clase se reconocieron dos principios: concebir los vínculos como intercambios equivalentes y considerar a las personas sustituibles. La discusión de aplicaciones de citas sirvió para presentar la recomendación de Eva Illouz y el capitalismo emocional: una lectura posible de la mercantilización de la vida afectiva.',
    after:'Se contrasta la lógica del consumo con gestos no instrumentales.',
    question:'¿Por qué se habló de una «forma de mercancía» en la vida afectiva?',
    answer:'Porque ciertas relaciones pueden reproducir criterios de transacción, selección y sustitución sin ser literalmente productos materiales.',
    layer:'Analogía y discusión docente con intervención estudiantil; no atribuir estas frases literalmente a Illouz.' },
  { id:'regalo', title:'Adorno: el regalo y los animales', topic:'Vida cotidiana', color:'sage',
    before:'La utilidad y el rendimiento pasan a medir prácticas humanas.',
    body:'La clase recuperó Minima Moralia para oponer el regalo considerado a la compra por obligación: regalar supone atender a la singularidad del otro. También se discutió la relación con animales —especialmente gatos y perros— como ocasión para cuestionar la exigencia de utilidad y obediencia. Estos ejemplos se presentaron como lectura filosófica de la docente.',
    after:'La crítica de la instrumentalización conduce al problema del sujeto que domina.',
    question:'¿Qué distingue al regalo auténtico del intercambio instrumental, según la lectura de clase?',
    answer:'Pensar en la persona concreta, sus deseos y necesidades, sin reducir el gesto a cumplir una obligación o recibir una contraprestación.',
    layer:'Interpretación docente de Adorno, con ejemplos cotidianos; el ejemplo de Los Simpson es ilustrativo, no una fuente académica.' },
  { id:'tecnica', title:'¿Tecnología emancipadora?', topic:'Apertura', color:'ochre',
    before:'La maquinaria organizada para valorizar capital domina a quienes trabajan.',
    body:'Ante la pregunta estudiantil sobre si Lukács era anarquista o rechazaba la industria, la docente distinguió socialismo y anarquismo y planteó un horizonte no tecnófobo: transformar la organización y los fines sociales de la técnica. Anticipó una discusión más desarrollada con Herbert Marcuse.',
    after:'Queda abierta la pregunta por la gestión colectiva de la producción y sus fines.',
    question:'¿La crítica de la cosificación exige destruir la industria?',
    answer:'No según la respuesta dada en clase: exige cuestionar su subordinación a la acumulación y explorar formas de control humano y colectivo de la técnica.',
    layer:'Intervención estudiantil, respuesta docente y anticipo de Marcuse; no se trató de una demostración del texto de Lukács.' },
  { id:'moral', title:'Burocracia y responsabilidad moral', topic:'Ética', color:'plum',
    before:'La división de funciones distribuye una acción entre múltiples responsables.',
    body:'A partir de Eichmann en Jerusalén, de Hannah Arendt, la docente problematizó la excusa de quien sólo cumple órdenes dentro de un aparato. La responsabilidad penal individual no agota el examen filosófico de los procesos colectivos. La clase vinculó esta dificultad con una posibilidad de resistencia: negarse a colaborar con lo injusto, incluso a un costo personal.',
    after:'La libertad y la resistencia quedan como preguntas para la Teoría Crítica posterior.',
    question:'¿Por qué la dispersión burocrática de tareas no elimina automáticamente la responsabilidad?',
    answer:'Porque pertenecer a un procedimiento complejo no cancela la pregunta por la posibilidad de negarse, por los grados de participación y por las condiciones reales de acción.',
    layer:'Lectura docente de Arendt y Adorno; la explicación de libertad positiva/negativa se conserva como uso de clase, no como equivalencia terminológica con Isaiah Berlin.' },
]

const connectionRows = [
  ['Mercancía', '→', 'fetichismo', '→', 'cosificación'],
  ['Racionalización', '→', 'división del trabajo', '→', 'sujeto fragmentado'],
  ['Forma mercantil', '⇢', 'derecho / afectos', '⇢', 'vida cotidiana'],
  ['Burocracia', '→', 'responsabilidad distribuida', '↔', 'resistencia'],
]

export default function CriticalTheoryClass15Oct() {
  const [active, setActive] = useState('herencia')
  const [reveal, setReveal] = useState(false)
  const current = chapters.find(item => item.id === active) || chapters[0]
  const select = (id) => { setActive(id); setReveal(false) }
  const index = chapters.findIndex(item => item.id === active)
  const next = () => select(chapters[(index + 1) % chapters.length].id)

  return (
    <main className="ct1510-page ph2d-shell">
      <nav className="ct1510-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ct1510-logo">Φ · PHILOSOPHIA</Link>
        <span>FI265 · XV / X / MMXXVI</span>
      </nav>
      <header className="ct1510-hero">
        <p className="ct1510-eyebrow">ARCHIVO DE CLASE · 15 DE OCTUBRE DE 2026</p>
        <div className="ct1510-hero-grid">
          <div>
            <h1>Cuando el sujeto <em>se convierte en cosa.</em></h1>
            <p className="ct1510-deck">Lukács, racionalización, forma mercancía y libertad: del cuerpo cronometrado a las relaciones afectivas y la decisión moral.</p>
            <p className="ct1510-scope">Esta página reconstruye lo explicado en clase. Las comparaciones con Illouz, Adorno, Marcuse y Arendt son intervenciones docentes y conexiones de estudio; no se presentan como párrafos del libro de Lukács.</p>
            <div className="ct1510-cta">
              <button type="button" onClick={() => document.getElementById('ct1510-atlas')?.scrollIntoView({ behavior: 'smooth' })}>Explorar la constelación ↓</button>
              <Link to="/tareas/teoria-critica/lukacs-cosificacion">Abrir los 58 nodos de Lukács ↗</Link>
            </div>
          </div>
          <aside className="ct1510-pull">
            <span>PROBLEMA CENTRAL</span>
            <strong>¿Cómo una estructura creada por sujetos llega a dirigir la vida y la voluntad de quienes la producen?</strong>
            <div className="ct1510-inversion"><span>SUJETO</span><b>⇄</b><span>OBJETO</span></div>
            <small>Esquema interpretativo basado en la explicación docente.</small>
          </aside>
        </div>
      </header>

      <section className="ct1510-intro" aria-labelledby="ct1510-tesis">
        <div><span className="ct1510-number">01</span><h2 id="ct1510-tesis">La tesis de la sesión</h2></div>
        <p>La cosificación fue presentada como el punto de convergencia entre el fetichismo de la mercancía y la enajenación analizados en Marx: la relación social parece volverse cosa autónoma y las personas aparecen sometidas a las reglas de lo que han producido. La docente recorrió el mismo problema en la fábrica, el Estado, el derecho, las relaciones afectivas y la ética.</p>
        <div className="ct1510-warning"><strong>Distinción bibliográfica:</strong> Taylorismo (medición y administración científica del trabajo) y fordismo (línea de montaje y producción en serie) no son términos intercambiables, aunque la clase los vinculara en su exposición industrial.</div>
      </section>

      <figure className="ct1510-licensed-figure">
        <div className="ct1510-licensed-item">
          <img
            src={`${import.meta.env.BASE_URL}${critical15OctImage.imagePath}`}
            alt={critical15OctImage.alt}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>IMAGEN DE ESTUDIO · {critical15OctImage.imageLicense}</span>
            <strong>Cosificación · de la forma mercancía a la vida social</strong>
            <p>{critical15OctImage.pedagogicalPurpose}</p>
            <small>{critical15OctImage.imageAttribution} · {critical15OctImage.sourceBoundary}</small>
          </figcaption>
        </div>
      </figure>

      <Critical15OctThematicAtlas />

      <section className="ct1510-atlas" id="ct1510-atlas" aria-labelledby="ct1510-atlas-title">
        <div className="ct1510-section-head"><div><span className="ct1510-number">02</span><h2 id="ct1510-atlas-title">Constelación de conceptos</h2><p>Vista interactiva de la sesión, distinta de la fuente textual del sistema 2D de Lukács.</p></div><Link to="/tareas/teoria-critica/lukacs-cosificacion">Sistema 2D de lectura ↗</Link></div>
        <div className="ct1510-node-grid" role="group" aria-label="Seleccione un concepto de la clase">
          {chapters.map((item, i) => (
            <button key={item.id} type="button" onClick={() => select(item.id)}
              className={'ct1510-node' + (active === item.id ? ' selected' : '')}
              style={{ '--node-color': 'var(--ph2d-topic-' + item.color + ')' }}
              aria-pressed={active === item.id}>
              <small>{String(i + 1).padStart(2,'0')} · {item.topic} · Aporte de clase</small>
              <strong>{item.title}</strong>
              <span>{item.before}</span>
            </button>
          ))}
        </div>
        <article className="ct1510-inspector" aria-live="polite">
          <div className="ct1510-inspector-meta"><span>FOLIO DE CLASE · {String(index + 1).padStart(2,'0')} / {chapters.length}</span><span>{current.topic}</span></div>
          <h3>{current.title}</h3>
          <div className="ct1510-sequence">
            <div><small>ANTES · PRESUPONE</small><p>{current.before}</p></div>
            <div><small>DESARROLLO</small><p>{current.body}</p></div>
            <div><small>DESPUÉS · ABRE</small><p>{current.after}</p></div>
          </div>
          <p className="ct1510-provenance"><strong>Procedencia:</strong> {current.layer}</p>
          <div className="ct1510-study">
            <div><small>MODO ESTUDIO · PREGUNTA DE CONTROL</small><p>{current.question}</p></div>
            {reveal && <p className="ct1510-answer"><strong>Orientación:</strong> {current.answer}</p>}
            <div className="ct1510-controls">
              <button type="button" onClick={() => setReveal(v => !v)}>{reveal ? 'Ocultar respuesta' : 'Comprobar respuesta'}</button>
              <button type="button" onClick={next}>Siguiente concepto →</button>
            </div>
          </div>
        </article>
      </section>

      <section className="ct1510-relations" aria-labelledby="ct1510-relations-title">
        <div className="ct1510-section-head"><div><span className="ct1510-number">03</span><h2 id="ct1510-relations-title">Cuatro relaciones de estudio</h2><p>Las flechas sintetizan conexiones expuestas en clase, no citas textuales ni causalidades necesarias.</p></div></div>
        <div className="ct1510-relations-list">
          {connectionRows.map((row,i) => <div key={i} className="ct1510-relation">{row.map((entry,j) => (j % 2 ? <b key={j} aria-hidden="true">{entry}</b> : <span key={j}>{entry}</span>))}</div>)}
        </div>
      </section>

      <section className="ct1510-reading">
        <div className="ct1510-section-head"><div><span className="ct1510-number">04</span><h2>Los autores que entraron en diálogo</h2></div></div>
        <div className="ct1510-reading-grid">
          <article><span>OBRA BASE</span><h3>Georg Lukács</h3><p><em>Historia y conciencia de clase</em>, «La cosificación y la conciencia de clase del proletariado». El archivo de estudio contiene la sección I y sólo el inicio de la sección II.</p></article>
          <article><span>AMPLIACIÓN DOCENTE</span><h3>Max Weber y Foucault</h3><p>Racionalización, burocratización y «forma empresa» fueron conexiones interpretativas de la sesión.</p></article>
          <article><span>RECOMENDACIÓN</span><h3>Eva Illouz</h3><p><em>El consumo de la utopía romántica</em> y <em>Intimidades congeladas</em>. La noción de capitalismo emocional fue introducida oralmente, no leída en su texto durante esta sesión.</p></article>
          <article><span>EXTENSIÓN CRÍTICA</span><h3>Adorno, Marcuse y Arendt</h3><p><em>Minima Moralia</em>; discusión futura sobre técnica en Marcuse; <em>Eichmann en Jerusalén</em> para abrir el problema de la responsabilidad moral.</p></article>
        </div>
        <div className="ct1510-provenance">
          <strong>Referencias comprobadas para ampliar esta clase:</strong>{' '}
          Illouz, E. (2007), <em>Intimidades congeladas</em> (<a href="https://doi.org/10.2307/j.ctvndv74r" target="_blank" rel="noopener noreferrer">Katz, DOI ↗</a>);{' '}
          Illouz, E. (2009), <em>El consumo de la utopía romántica</em> (<a href="https://doi.org/10.2307/j.ctvm7bc9h" target="_blank" rel="noopener noreferrer">Katz, DOI ↗</a>);{' '}
          Adorno, T. W. (1951), <em>Minima Moralia</em>, aforismo 21 (regalar y principio de intercambio);{' '}
          Stahl, T. (2023), <a href="https://plato.stanford.edu/entries/lukacs/" target="_blank" rel="noopener noreferrer">Georg Lukács, Stanford Encyclopedia of Philosophy ↗</a>.
          Se distinguen ediciones y comentarios de clase; no se presupone lectura directa de todos estos libros.
        </div>
      </section>

      <section className="ct1510-agenda">
        <div className="ct1510-section-head"><div><span className="ct1510-number">05</span><h2>Agenda recuperada</h2></div></div>
        <p><strong>Martes 20 de octubre:</strong> la docente decidirá si la evaluación también incluirá a Freud. El examen se prevé para finales de octubre, <strong>sin día confirmado</strong>. Se invitó a una conferencia sobre injusticia epistémica el martes al mediodía; el auditorio se mencionó con incertidumbre (H o H2).</p>
        <p><strong>Lectura:</strong> continuar el capítulo de Lukács. Se mencionó después el estudio de Freud y las últimas semanas dedicadas a la Teoría Crítica.</p>
      </section>

      <section className="ct1510-detail" aria-labelledby="ct1510-detail-title">
        <div className="ct1510-detail-head">
          <span>06 / ARCHIVO DOCUMENTAL</span>
          <div>
            <p>CLASE / INTERVENCIONES / RECONSTRUCCIÓN / AMPLIACIONES DISTINGUIDAS</p>
            <h2 id="ct1510-detail-title">La clase, apartado por apartado.</h2>
            <p>Cada folio muestra primero qué está documentado y después una guía de estudio. Las conexiones con Illouz, Adorno, Marcuse, Foucault, Arendt y Berlin conservan su procedencia propia.</p>
          </div>
        </div>

        <nav className="ct1510-detail-index" aria-label="Índice de apartados del 15 de octubre">
          {critical15OctSourceSections.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              <span>{item.number}</span>{item.title}
            </button>
          ))}
        </nav>

        <div className="ct1510-detail-body">
          {critical15OctSourceSections.map((item) => (
            <article id={item.id} className="ct1510-detail-folio" key={item.id}>
              <header>
                <span>{item.number}</span>
                <div>
                  <small>{item.status}</small>
                  <h3>{item.title}</h3>
                </div>
              </header>
              <div className="ct1510-source-card">
                <p>{item.body}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
              <Critical15OctSectionStudy sectionId={item.id} />
            </article>
          ))}
        </div>
      </section>
      <footer className="ct1510-footer"><Link to="/semestre/5/teoria-critica">← Volver a Teoría Crítica</Link><Link to="/tareas/teoria-critica/lukacs-cosificacion">Consultar fuentes y folios en el 2D ↗</Link><span>PHILOSOPHIA · FI265 · 2026-B</span></footer>
    </main>
  )
}
