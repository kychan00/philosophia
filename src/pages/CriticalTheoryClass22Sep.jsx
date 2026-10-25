import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './CriticalTheoryClass22Sep.css'
import Critical22SepThematicAtlas from '../components/critical/Critical22SepThematicAtlas'
import Critical22SepSectionStudy from '../components/critical/Critical22SepSectionStudy'
import { critical22SepImage } from '../data/critical22SepImage'

const sections = [
  ['00', 'mapa', 'Estado documental y mapa'],
  ['01', 'desnaturalizacion', 'Desnaturalización de formas sociales'],
  ['02', 'materialidad', 'Materialidad y conciencia'],
  ['03', 'totalidad', 'Totalidad social'],
  ['04', 'reproductivo', 'Trabajo reproductivo'],
  ['05', 'division', 'División sexual del trabajo'],
  ['06', 'producto', 'Producto'],
  ['07', 'actividad', 'Actividad'],
  ['08', 'apertura', 'Lo que queda abierto'],
  ['09', 'continuidad', 'Continuidad hacia 24 de septiembre'],
]

const sourceSections = {
  mapa: {
    eyebrow: 'Status fontis',
    title: 'Una fuente parcial también puede ubicarse con precisión',
    body: 'La nota del 22 conserva el núcleo de la sesión y seis ejes de trabajo, pero no el desarrollo verbal íntegro. La página distingue contenido recuperado, orientación editorial y continuidad posterior; no reconstruye ejemplos o intervenciones ausentes.',
    badge: 'FUENTE PARCIAL · COTEJO LOCAL PENDIENTE',
  },
  desnaturalizacion: {
    eyebrow: 'Historicitas',
    title: 'Desnaturalizar es devolver historia a lo que parece inevitable',
    body: 'La desnaturalización de formas sociales está explícitamente recuperada. PHILOSOPHIA la conecta con el concepto de ideología ya existente en el vault sólo como orientación de estudio: relaciones históricas pueden aparecer como naturales, evidentes o inevitables.',
    badge: 'DOCUMENTADO: EJE · CONEXIÓN EDITORIAL MARCADA',
  },
  materialidad: {
    eyebrow: 'Materia ↔ conscientia',
    title: 'Condicionarse no significa ser lo mismo',
    body: 'El Archivo Dialéctico conserva como tensión que materialidad y conciencia se condicionan sin ser idénticas. La página evita tanto separarlas por completo como reducir la conciencia a un reflejo automático de condiciones materiales.',
    badge: 'NÚCLEO DOCUMENTAL · MEDIACIÓN, NO DETERMINISMO',
  },
  totalidad: {
    eyebrow: 'Totalitas socialis',
    title: 'Pensar relaciones sin borrar diferencias',
    body: 'Totalidad social evita tratar economía, política, cultura, subjetividad e instituciones como compartimentos independientes. En el 22 esta idea enlaza materialidad, conciencia, reproducción, división del trabajo y enajenación sin convertirlas en una sola cosa.',
    badge: 'DOCUMENTADO: NÚCLEO + CONCEPTO DEL VAULT',
  },
  reproductivo: {
    eyebrow: 'Reproductio',
    title: 'La continuidad de la vida también entra en el análisis',
    body: 'Trabajo reproductivo aparece explícitamente en los ejes recuperados. La fuente no conserva su desarrollo detallado; por eso la página formula sólo una orientación mínima: preguntar por actividades y relaciones que sostienen la continuidad de la vida social.',
    badge: 'DOCUMENTADO: EJE · EXPLICACIÓN EDITORIAL MÍNIMA',
  },
  division: {
    eyebrow: 'Divisio laboris',
    title: 'La distribución de tareas forma parte de la totalidad',
    body: 'División sexual del trabajo está documentada como eje de la sesión. No se añaden estadísticas, ejemplos ni genealogías teóricas ausentes; se conserva únicamente su ubicación dentro del problema de reproducción y organización social.',
    badge: 'DOCUMENTADO: EJE · SIN SOBRERECONSTRUCCIÓN',
  },
  producto: {
    eyebrow: 'Entfremdung I',
    title: 'Producto permanece como momento de la enajenación',
    body: 'La nota del 22 menciona producto y actividad como los momentos retomados. El producto se conserva aquí dentro de una discusión más amplia sobre totalidad y reproducción; no se reconstruye un ejemplo específico que la fuente no contiene.',
    badge: 'DOCUMENTADO: MOMENTO RETOMADO',
  },
  actividad: {
    eyebrow: 'Entfremdung II',
    title: 'La actividad sigue abierta hacia un desarrollo posterior',
    body: 'Actividad es el segundo momento explícitamente recuperado. El desarrollo detallado sobre ritmo, finalidad y autonomía pertenece al 24 de septiembre y se mantiene fechado como continuidad, no como contenido retroproyectado al 22.',
    badge: 'DOCUMENTADO: MOMENTO · DETALLE POSTERIOR SEPARADO',
  },
  apertura: {
    eyebrow: 'Apertura',
    title: 'Ser genérico y relación con otros todavía no se cierran',
    body: 'La propia nota afirma que esos dos momentos quedan abiertos. Esta página no completa retrospectivamente el recorrido: hace visible que el 22 es una sesión intermedia dentro del trabajo sobre enajenación.',
    badge: 'LÍMITE EXPLÍCITO DE LA FUENTE',
  },
  continuidad: {
    eyebrow: 'Continuatio',
    title: 'El 24 aclara lo que aquí queda abierto',
    body: 'La clase del 24 desarrolla actividad, ser genérico y relación con otros, y después abre la transición a mercancía. Esa fecha funciona como continuidad documental; no sustituye el archivo original pendiente del 22.',
    badge: 'CONTINUIDAD DOCUMENTAL · NO RETROPROYECCIÓN',
  },
}

const dimensions = [
  ['materialidad', 'M', 'Materialidad', 'Condiciones de vida, trabajo y reproducción.'],
  ['conciencia', 'C', 'Conciencia', 'Formas de comprender y naturalizar el mundo social.'],
  ['reproductivo', 'R', 'Trabajo reproductivo', 'Eje recuperado sobre continuidad de la vida social.'],
  ['division', 'D', 'División sexual del trabajo', 'Distribución social de tareas dentro de la totalidad.'],
  ['enajenacion', 'E', 'Enajenación', 'Producto y actividad como momentos retomados.'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ctsep22-heading">
      <span>{n}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function CriticalTheoryClass22Sep() {
  const [dimensionId, setDimensionId] = useState('materialidad')
  const dimension = useMemo(() => dimensions.find(([id]) => id === dimensionId) || dimensions[0], [dimensionId])

  return (
    <main className="ctsep22-page">
      <nav className="ctsep22-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ctsep22-brand">Φ · Philosophia</Link>
        <span>XXII · IX · MMXXVI</span>
      </nav>

      <header className="ctsep22-hero">
        <div className="ctsep22-ghost" aria-hidden="true">TOTALITAS</div>
        <div className="ctsep22-hero-inner">
          <div>
            <p className="ctsep22-kicker">FI265 · Novena clase · 22 de septiembre de 2026</p>
            <h1>Totalidad social<em>reproducción y enajenación</em></h1>
            <p className="ctsep22-lead">
              La sesión retoma la <strong>totalidad social</strong> y desplaza la mirada:
              no basta seguir producto y actividad; hay que preguntar también por
              materialidad, conciencia y las condiciones mediante las cuales una
              sociedad <strong>se reproduce</strong>.
            </p>
            <div className="ctsep22-source-warning">
              <span>ESTADO DOCUMENTAL</span>
              <strong>Reconstrucción parcial · archivo local original pendiente de cotejo</strong>
              <p>Se conservan el núcleo y los ejes. No se añaden ejemplos, cifras o desarrollos doctrinales ausentes.</p>
            </div>
          </div>
          <aside className="ctsep22-axis">
            <span>DIMENSIONES DE LA TOTALIDAD</span>
            {dimensions.map(([id, mark, label]) => (
              <button type="button" key={id} className={dimensionId === id ? 'active' : ''} onClick={() => setDimensionId(id)}>
                <small>{mark}</small><b>{label}</b>
              </button>
            ))}
            <div className="ctsep22-axis-focus" aria-live="polite">
              <small>{dimension[1]} · DIMENSIÓN DE ESTUDIO</small>
              <strong>{dimension[2]}</strong>
              <p>{dimension[3]}</p>
            </div>
          </aside>
        </div>
      </header>

      <figure className="ctsep22-licensed-figure">
        <div className="ctsep22-licensed-item">
          <img
            src={`${import.meta.env.BASE_URL}${critical22SepImage.imagePath}`}
            alt={critical22SepImage.alt}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>01 / IMAGEN DE ESTUDIO · {critical22SepImage.imageLicense}</span>
            <strong>Totalidad social · dimensiones mediadas</strong>
            <p>{critical22SepImage.pedagogicalPurpose}</p>
            <small>{critical22SepImage.imageAttribution} · {critical22SepImage.sourceBoundary}</small>
          </figcaption>
        </div>
      </figure>

      <Critical22SepThematicAtlas />

      <div className="ctsep22-original-heading" id="ctsep22-documento">
        <span>03 / ARCHIVO DOCUMENTAL</span>
        <div>
          <p>FUENTE PARCIAL / DESARROLLO CONSERVADO</p>
          <h2>La clase, apartado por apartado.</h2>
          <p>Diez apartados reconstruyen únicamente lo sustentado: cada uno indica qué eje pertenece al 22, qué explicación es editorial y qué contenido se desarrolla recién el 24.</p>
        </div>
      </div>

      <div className="ctsep22-layout">
        <aside className="ctsep22-index">
          <p>Index documentalis</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ctsep22-article">
          {sections.map(([n, id]) => {
            const item = sourceSections[id]
            return (
              <section id={id} key={id}>
                <Heading n={n} eyebrow={item.eyebrow}>{item.title}</Heading>
                <div className="ctsep22-source-card">
                  <span>{item.badge}</span>
                  <p>{item.body}</p>
                </div>

                {id === 'totalidad' && (
                  <div className="ctsep22-totality-grid" aria-label="Dimensiones de la totalidad social">
                    {dimensions.map(([dimensionKey, mark, label, description]) => (
                      <button type="button" key={dimensionKey} onClick={() => setDimensionId(dimensionKey)}>
                        <span>{mark}</span><strong>{label}</strong><small>{description}</small>
                      </button>
                    ))}
                  </div>
                )}

                {id === 'apertura' && (
                  <div className="ctsep22-open-grid">
                    <article><span>ABIERTO III</span><strong>Ser genérico</strong><p>La nota conserva su desarrollo como pendiente para continuidad posterior.</p></article>
                    <article><span>ABIERTO IV</span><strong>Otros seres humanos</strong><p>La relación con otros también queda explícitamente abierta.</p></article>
                  </div>
                )}

                {id === 'continuidad' && (
                  <div className="ctsep22-continuity">
                    <article><span>24 SEP · I</span><strong>Actividad / ser genérico / otros</strong><p>La sesión siguiente desarrolla con mayor detalle los momentos que aquí quedan abiertos.</p></article>
                    <article><span>24 SEP · II</span><strong>Transición a mercancía</strong><p>Después del cierre de la enajenación, el curso abre El capital y el problema de la mercancía.</p></article>
                  </div>
                )}

                <Critical22SepSectionStudy sectionId={id} />
              </section>
            )
          })}
        </article>
      </div>

      <footer className="ctsep22-footer">
        <Link to="/semestre/5/teoria-critica">← Volver a Teoría Crítica</Link>
        <span>Fuente parcial · Totalidad social · Reproducción</span>
        <span>XXII · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
