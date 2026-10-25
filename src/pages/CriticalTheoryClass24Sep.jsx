import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './CriticalTheoryClass24Sep.css'
import Critical24SepThematicAtlas from '../components/critical/Critical24SepThematicAtlas'
import Critical24SepSectionStudy from '../components/critical/Critical24SepSectionStudy'
import { critical24SepImage } from '../data/critical24SepImage'
import { critical24SepSourceSections } from '../data/critical24SepSourceSections'

const phases = [
  ['actividad', 'II', 'Actividad y mando', 'actividad', 'Ritmo, finalidad, máquina y posibilidad de otro trabajo.'],
  ['generico', 'III–IV', 'Ser genérico y otros', 'generico', 'Facultades, arte, reconocimiento, Levinas y desidentificación.'],
  ['ideologia', 'C', 'Ideología y conciencia', 'ideologia', 'Naturalización, extrañamiento crítico y conciencia de clase.'],
  ['propiedad', '↦', 'Propiedad y mercancía', 'propiedad', 'Cierre de Manuscritos y puente hacia El capital.'],
  ['valor', 'V', 'Mercancía y valor', 'mercancia', 'Uso, cambio, trabajo común y distinción valor/precio.'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ctsep24-heading">
      <span>{n}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function CriticalTheoryClass24Sep() {
  const [phaseId, setPhaseId] = useState('actividad')
  const phase = useMemo(() => phases.find(([id]) => id === phaseId) || phases[0], [phaseId])

  return (
    <main className="ctsep24-page">
      <nav className="ctsep24-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ctsep24-brand">Φ · Philosophia</Link>
        <span>XXIV · IX · MMXXVI</span>
      </nav>

      <header className="ctsep24-hero">
        <div className="ctsep24-ghost" aria-hidden="true">WARE</div>
        <div className="ctsep24-hero-inner">
          <div>
            <p className="ctsep24-kicker">FI265 · Décima clase · 24 de septiembre de 2026</p>
            <h1>De la enajenación<em>a la mercancía</em></h1>
            <p className="ctsep24-lead">
              La sesión cierra el recorrido de los <em>Manuscritos económico-filosóficos de 1844</em>
              y abre <em>El capital</em>. El hilo pasa por actividad, ser genérico, otros seres humanos,
              ideología, propiedad privada y finalmente por la <strong>mercancía</strong>, donde aparecen
              valor de uso, valor de cambio, valor y precio.
            </p>
            <div className="ctsep24-source-warning">
              <span>ESTADO DOCUMENTAL</span>
              <strong>Fuente extensa · tramo final sobre valor/precio abierto</strong>
              <p>La página conserva lo desarrollado en clase y no completa con doctrina externa el punto donde el registro disponible deja abierta la explicación del valor.</p>
            </div>
          </div>

          <aside className="ctsep24-axis">
            <span>CINCO BLOQUES DE LA SESIÓN</span>
            {phases.map(([id, mark, label, target]) => (
              <button
                type="button"
                key={id}
                className={phaseId === id ? 'active' : ''}
                onClick={() => { setPhaseId(id); goToSection(target) }}
              >
                <small>{mark}</small><b>{label}</b>
              </button>
            ))}
            <div className="ctsep24-axis-focus" aria-live="polite">
              <small>{phase[1]} · BLOQUE ACTIVO</small>
              <strong>{phase[2]}</strong>
              <p>{phase[4]}</p>
            </div>
          </aside>
        </div>
      </header>

      <figure className="ctsep24-licensed-figure">
        <div className="ctsep24-licensed-item">
          <img
            src={`${import.meta.env.BASE_URL}${critical24SepImage.imagePath}`}
            alt={critical24SepImage.alt}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>01 / IMAGEN DE ESTUDIO · {critical24SepImage.imageLicense}</span>
            <strong>Enajenación → propiedad/clase → mercancía</strong>
            <p>{critical24SepImage.pedagogicalPurpose}</p>
            <small>{critical24SepImage.imageAttribution} · {critical24SepImage.sourceBoundary}</small>
          </figcaption>
        </div>
      </figure>

      <Critical24SepThematicAtlas />

      <div className="ctsep24-original-heading" id="ctsep24-documento">
        <span>03 / ARCHIVO DOCUMENTAL</span>
        <div>
          <p>CONTENIDO CONSERVADO / CAPA DE ESTUDIO SEPARADA</p>
          <h2>La clase, apartado por apartado.</h2>
          <p>
            Veintitrés apartados preservan el desarrollo documentado. Cada bloque muestra primero la
            síntesis de fuente y después una unidad pedagógica con pregunta, tesis, esquema, contraste,
            «En palabras simples» y límite de interpretación.
          </p>
        </div>
      </div>

      <div className="ctsep24-layout">
        <aside className="ctsep24-index">
          <p>Index documentalis</p>
          {critical24SepSourceSections.map((section) => (
            <button type="button" key={section.id} onClick={() => goToSection(section.id)}>
              <span>{section.number}</span>{section.title}
            </button>
          ))}
        </aside>

        <article className="ctsep24-article">
          {critical24SepSourceSections.map((section) => (
            <section id={section.id} key={section.id}>
              <Heading n={section.number} eyebrow={section.eyebrow}>{section.title}</Heading>

              <div className="ctsep24-source-card">
                <span>{section.status}</span>
                <p>{section.body}</p>
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                ) : null}
              </div>

              {section.id === 'control' && (
                <div className="ctsep24-control-grid" aria-label="Distinciones de control">
                  {[
                    ['producto', 'actividad'],
                    ['trabajo forzado', 'actividad libre'],
                    ['máquina', 'sujeto'],
                    ['necesidad', 'creación'],
                    ['ideología', 'conciencia'],
                    ['identificación', 'cosificación'],
                    ['valor de uso', 'valor de cambio'],
                    ['valor', 'precio'],
                    ['mercancía', 'objeto útil'],
                  ].map(([a,b]) => (
                    <div key={a}><strong>{a}</strong><span>≠</span><strong>{b}</strong></div>
                  ))}
                </div>
              )}

              {section.id === 'continuidad' && (
                <div className="ctsep24-continuity">
                  <article><span>SIGUE</span><strong>Mercancía y forma de valor</strong><p>Profundizar la estructura de la mercancía y su forma social.</p></article>
                  <article><span>SIGUE</span><strong>Trabajo y valor</strong><p>Precisar cómo el trabajo funda el valor y cómo éste se expresa en el intercambio.</p></article>
                </div>
              )}

              <Critical24SepSectionStudy sectionId={section.id} />
            </section>
          ))}
        </article>
      </div>

      <footer className="ctsep24-footer">
        <Link to="/semestre/5/teoria-critica">← Volver a Teoría Crítica</Link>
        <span>Marx · Enajenación · Mercancía · Valor</span>
        <span>XXIV · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
