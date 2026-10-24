import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './CriticalTheoryClass17Sep.css'
import Critical17SepThematicAtlas from '../components/critical/Critical17SepThematicAtlas'
import Critical17SepSectionStudy from '../components/critical/Critical17SepSectionStudy'
import { critical17SepImage } from '../data/critical17SepImage'

const sections = [
  ['00', 'mapa', 'Estado documental y mapa'],
  ['01', 'trabajo', 'Trabajo, goce y libertad'],
  ['02', 'economia', 'Crítica de la economía política'],
  ['03', 'realizacion', 'Realización / desrealización'],
  ['04', 'objetivacion', 'Objetivación y restitución'],
  ['05', 'producto', 'I · Producto'],
  ['06', 'actividad', 'II · Actividad'],
  ['07', 'generico', 'III · Ser genérico'],
  ['08', 'otros', 'IV · Otros seres humanos'],
  ['09', 'totalidad', 'Totalidad articulada'],
  ['10', 'continuidad', 'Continuidad documental'],
]

const sourceSections = {
  mapa: {
    eyebrow: 'Status fontis',
    title: 'Una clase parcial debe seguir siendo una clase honesta',
    body: 'La nota del 17 de septiembre conserva el núcleo de la sesión y ocho ejes de trabajo, pero no el desarrollo verbal íntegro. Esta página no reconstruye episodios, ejemplos ni citas ausentes: separa lo recuperado de las ampliaciones posteriores.',
    badge: 'FUENTE PARCIAL · COTEJO LOCAL PENDIENTE',
  },
  trabajo: {
    eyebrow: 'Axis recuperatus',
    title: 'Trabajo, goce y libertad',
    body: 'El eje está registrado en la nota del 17. No se conserva suficiente detalle para atribuir una definición completa de libertad o ejemplos concretos a esta fecha. El desarrollo sobre autonomía, creatividad y satisfacción aparece documentado después, el 24 de septiembre.',
    badge: 'DOCUMENTADO: EJE · DETALLE POSTERIOR SEPARADO',
  },
  economia: {
    eyebrow: 'Critica oeconomiae',
    title: 'La enajenación remite a una organización histórica del trabajo',
    body: 'La crítica de la economía política figura entre los ejes recuperados. La continuidad con la clase del 10 permite mantener el problema en relaciones históricas de producción, sin inventar para el 17 categorías o ejemplos que la nota no conserva.',
    badge: 'DOCUMENTADO: EJE',
  },
  realizacion: {
    eyebrow: 'Realizatio / derealizatio',
    title: 'Producir mundo puede convertirse en pérdida',
    body: 'Realización y desrealización aparecen explícitamente entre los ejes recuperados. La distinción sólo se entiende si se mantiene la frontera del folio anterior: objetivación no significa todavía enajenación.',
    badge: 'DOCUMENTADO: EJE + CONTINUIDAD CON 10 SEP',
  },
  objetivacion: {
    eyebrow: 'Objectivatio / restitutio',
    title: 'Después de objetivar, la pregunta es por el retorno',
    body: 'La pareja objetivación / restitución está conservada en la nota. PHILOSOPHIA la relaciona prudentemente con el problema del retorno abierto el 10 de septiembre, sin presentar una teoría detallada de restitución que la fuente no contiene.',
    badge: 'DOCUMENTADO: EJE · INTERPRETACIÓN EDITORIAL MARCADA',
  },
  producto: {
    eyebrow: 'Entfremdung I',
    title: 'Enajenación respecto del producto',
    body: 'Producto es el primer momento recuperado. Lo seguro para esta fecha es su posición dentro de la estructura de cuatro momentos y su vínculo con la separación respecto de lo producido.',
    badge: 'DOCUMENTADO: PRIMER MOMENTO',
  },
  actividad: {
    eyebrow: 'Entfremdung II',
    title: 'Enajenación respecto de la actividad',
    body: 'Actividad es el segundo momento recuperado. La nota del 17 no conserva el desarrollo fino. El 24 de septiembre sí documenta después ritmo, finalidad, autonomía y actividad organizada desde fuera; esa capa posterior no se retroproyecta.',
    badge: 'DOCUMENTADO: SEGUNDO MOMENTO · DETALLE: 24 SEP',
  },
  generico: {
    eyebrow: 'Entfremdung III',
    title: 'Enajenación respecto del ser genérico',
    body: 'Ser genérico aparece como tercer momento. El desarrollo de corporalidad, conciencia, libertad, imaginación, creatividad e intelecto pertenece a la clase del 24 y se conserva aquí sólo como continuidad posterior.',
    badge: 'DOCUMENTADO: TERCER MOMENTO · DETALLE: 24 SEP',
  },
  otros: {
    eyebrow: 'Entfremdung IV',
    title: 'Enajenación respecto de otros seres humanos',
    body: 'La relación con otros aparece como cuarto momento. La ampliación sobre desidentificación, violencia y Levinas está documentada el 24 de septiembre, no en esta sesión parcial.',
    badge: 'DOCUMENTADO: CUARTO MOMENTO · DETALLE: 24 SEP',
  },
  totalidad: {
    eyebrow: 'Totalitas',
    title: 'Los cuatro momentos forman una sola estructura',
    body: 'Éste es el núcleo más firme de la nota recuperada: producto, actividad, ser genérico y otros seres humanos forman una totalidad articulada. No son cuatro males independientes ni una secuencia temporal obligatoria.',
    badge: 'NÚCLEO DOCUMENTAL DE LA SESIÓN',
  },
  continuidad: {
    eyebrow: 'Continuatio',
    title: 'Lo que falta no se inventa: se sigue en las sesiones posteriores',
    body: 'La propia nota enlaza con el 22 de septiembre, donde aparecen totalidad social, materialidad, conciencia y reproducción. El 24 desarrolla con mayor detalle actividad, ser genérico y otros seres humanos.',
    badge: 'CONTINUIDAD DOCUMENTAL · NO RETROPROYECCIÓN',
  },
}

const moments = [
  ['producto', 'I', 'Producto', 'Relación con lo producido.'],
  ['actividad', 'II', 'Actividad', 'Relación con el propio hacer.'],
  ['generico', 'III', 'Ser genérico', 'Relación con capacidades humanas más amplias.'],
  ['otros', 'IV', 'Otros seres humanos', 'Relación social con los demás.'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ctsep17-heading">
      <span>{n}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function CriticalTheoryClass17Sep() {
  const [momentId, setMomentId] = useState('producto')
  const moment = useMemo(() => moments.find(([id]) => id === momentId) || moments[0], [momentId])

  return (
    <main className="ctsep17-page">
      <nav className="ctsep17-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ctsep17-brand">Φ · Philosophia</Link>
        <span>XVII · IX · MMXXVI</span>
      </nav>

      <header className="ctsep17-hero">
        <div className="ctsep17-ghost" aria-hidden="true">ENTFREMDUNG</div>
        <div className="ctsep17-hero-inner">
          <div>
            <p className="ctsep17-kicker">FI265 · Octava clase · 17 de septiembre de 2026</p>
            <h1>Cuatro momentos<em>de la enajenación</em></h1>
            <p className="ctsep17-lead">
              La sesión continúa los <em>Manuscritos económico-filosóficos de 1844</em>.
              La fuente conservada es parcial, pero mantiene una tesis decisiva:
              producto, actividad, ser genérico y otros seres humanos deben pensarse
              como una <strong>totalidad articulada</strong>.
            </p>
            <div className="ctsep17-source-warning">
              <span>ESTADO DOCUMENTAL</span>
              <strong>Reconstrucción parcial · archivo local original pendiente de cotejo</strong>
              <p>Se conservan los ejes y la arquitectura conceptual. No se inventan episodios, ejemplos ni citas ausentes.</p>
            </div>
          </div>
          <aside className="ctsep17-axis">
            <span>CUATRO MOMENTOS</span>
            {moments.map(([id, roman, label]) => (
              <button type="button" key={id} className={momentId === id ? 'active' : ''} onClick={() => setMomentId(id)}>
                <small>{roman}</small><b>{label}</b>
              </button>
            ))}
            <div className="ctsep17-axis-focus" aria-live="polite">
              <small>{moment[1]} · MOMENTO RECUPERADO</small>
              <strong>{moment[2]}</strong>
              <p>{moment[3]}</p>
            </div>
          </aside>
        </div>
      </header>

      <figure className="ctsep17-licensed-figure">
        <div className="ctsep17-licensed-item">
          <img
            src={`${import.meta.env.BASE_URL}${critical17SepImage.imagePath}`}
            alt={critical17SepImage.alt}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>01 / IMAGEN DE ESTUDIO · {critical17SepImage.imageLicense}</span>
            <strong>Cuatro momentos · una totalidad</strong>
            <p>{critical17SepImage.pedagogicalPurpose}</p>
            <small>{critical17SepImage.imageAttribution} · {critical17SepImage.sourceBoundary}</small>
          </figcaption>
        </div>
      </figure>

      <Critical17SepThematicAtlas />

      <div className="ctsep17-original-heading" id="ctsep17-documento">
        <span>03 / ARCHIVO DOCUMENTAL</span>
        <div>
          <p>FUENTE PARCIAL / DESARROLLO CONSERVADO</p>
          <h2>La clase, apartado por apartado.</h2>
          <p>Los apartados siguientes no simulan una clase completa: muestran exactamente qué eje fue recuperado, qué puede explicarse con seguridad y qué desarrollo pertenece a fechas posteriores.</p>
        </div>
      </div>

      <div className="ctsep17-layout">
        <aside className="ctsep17-index">
          <p>Index documentalis</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ctsep17-article">
          {sections.map(([n, id]) => {
            const item = sourceSections[id]
            return (
              <section id={id} key={id}>
                <Heading n={n} eyebrow={item.eyebrow}>{item.title}</Heading>
                <div className="ctsep17-source-card">
                  <span>{item.badge}</span>
                  <p>{item.body}</p>
                </div>
                {id === 'totalidad' && (
                  <div className="ctsep17-moment-grid" aria-label="Cuatro momentos recuperados">
                    {moments.map(([momentKey, roman, label, description]) => (
                      <button type="button" key={momentKey} onClick={() => { setMomentId(momentKey); goToSection(momentKey) }}>
                        <span>{roman}</span><strong>{label}</strong><small>{description}</small>
                      </button>
                    ))}
                  </div>
                )}
                {id === 'continuidad' && (
                  <div className="ctsep17-continuity">
                    <article><span>22 SEP</span><strong>Totalidad social y reproducción</strong><p>Materialidad, conciencia, trabajo reproductivo y división sexual del trabajo.</p></article>
                    <article><span>24 SEP</span><strong>Desarrollo de los momentos</strong><p>Actividad, ser genérico, otros seres humanos y transición a mercancía.</p></article>
                  </div>
                )}
                <Critical17SepSectionStudy sectionId={id} />
              </section>
            )
          })}
        </article>
      </div>

      <footer className="ctsep17-footer">
        <Link to="/semestre/5/teoria-critica">← Volver a Teoría Crítica</Link>
        <span>Fuente parcial · Marx · Entfremdung</span>
        <span>XVII · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
