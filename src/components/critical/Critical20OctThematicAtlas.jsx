import { useState } from 'react'
import { critical20OctThemes } from '../../data/critical20OctThemes'
import './Critical20OctThematicAtlas.css'

export default function Critical20OctThematicAtlas() {
  const [selected, setSelected] = useState(0)
  const [guideOpen, setGuideOpen] = useState(true)
  const theme = critical20OctThemes[selected]

  const change = (index) => {
    setSelected(index)
    setGuideOpen(true)
  }

  const goToSource = () => {
    document.getElementById(theme.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="ct2010-atlasx" id="ct2010-temas" aria-labelledby="ct2010-atlasx-heading">
      <div className="ct2010-atlasx-heading">
        <span>02 / NODOS DE ESTUDIO</span>
        <div>
          <p>LECTURA TEMÁTICA · CLASE 12</p>
          <h2 id="ct2010-atlasx-heading">La agencia humana<br/><em>ante sus mediaciones.</em></h2>
          <p>La sesión retoma a Lukács y discute burocracia, tecnología, trabajo creativo y disciplina. Cada núcleo separa el texto de estudio, la explicación docente y las preguntas abiertas.</p>
        </div>
      </div>

      <div className="ct2010-atlasx-tabs" role="group" aria-label="Cinco núcleos de estudio de la duodécima clase">
        {critical20OctThemes.map((item, index) => (
          <button
            key={item.id} type="button" aria-pressed={selected === index}
            className={selected === index ? 'is-selected' : ''}
            onClick={() => change(index)}
          >
            <span className="ct2010-atlasx-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="ct2010-atlasx-icon" aria-hidden="true">{item.mark}</span>
            <strong>{item.name}</strong>
          </button>
        ))}
      </div>

      <article className="ct2010-atlasx-reader" aria-live="polite" key={theme.id}>
        <div className="ct2010-atlasx-symbol" aria-hidden="true">{theme.mark}</div>
        <div className="ct2010-atlasx-story">
          <span className="ct2010-atlasx-kicker">{theme.eyebrow} / RECONSTRUCCIÓN EDITORIAL</span>
          <h3>{theme.question}</h3>
          <strong>{theme.thesis}</strong>
          <p>{theme.argument}</p>
          <p>{theme.development}</p>
          <div className="ct2010-atlasx-tags">{theme.tags.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </article>

      <div className="ct2010-atlasx-figure">
        <div className="ct2010-atlasx-figure-head">
          <span>FIG. {String(selected + 1).padStart(2, '0')} / MAPA PARA LEER</span>
          <strong>{theme.name}</strong>
        </div>
        <div className={`ct2010-atlasx-steps ${theme.relation === "sequence" ? "is-sequence" : "is-parallel"}`}>
          {theme.nodes.map((item, index) => (
            <div className="ct2010-atlasx-step" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')} · {item.label}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <p className="ct2010-atlasx-caution">{theme.relation === "sequence" ? "Las flechas indican un itinerario de lectura editorial, no causalidad necesaria." : "Los tres bloques son dimensiones paralelas que deben distinguirse, no etapas sucesivas."} La figura organiza relaciones de estudio; IA y Foucault se presentan como ampliaciones docentes, no como pasajes textuales de Lukács. Los enlaces entre núcleos no garantizan causalidad.</p>
      </div>

      <div className="ct2010-atlasx-figure-note">
        <div className="ct2010-atlasx-guide-top">
          <div>
            <span>GUÍA DE LECTURA</span>
            <h4>Cómo leer este recurso</h4>
            <p>La explicación distingue qué representa la figura, cómo recorrerla y qué afirmación no debemos extraer de ella.</p>
          </div>
          <button type="button" onClick={() => setGuideOpen(!guideOpen)} aria-expanded={guideOpen} aria-controls="ct2010-guide-body">
            {guideOpen ? 'Ocultar guía −' : 'Abrir guía +'}
          </button>
        </div>
        {guideOpen && (
          <div className="ct2010-atlasx-guide-body" id="ct2010-guide-body">
            <div><span>01 / QUÉ REPRESENTA</span><p>{theme.guide.what}</p></div>
            <div><span>02 / CÓMO LEERLO</span><p>{theme.guide.how}</p></div>
            <div><span>03 / POR QUÉ ESTÁ AQUÍ</span><p>{theme.guide.why}</p></div>
            <div><span>04 / EN PALABRAS SIMPLES</span><p>{theme.guide.simple}</p></div>
          </div>
        )}
      </div>

      <div className="ct2010-atlasx-contrast">
        <div className="ct2010-atlasx-contrast-head"><span>DISTINCIÓN QUE ACLARA EL PROBLEMA</span><strong>No confundir</strong></div>
        <div className="ct2010-atlasx-contrast-cards">
          {theme.positions.map((position, index) => (
            <div key={position.name}>
              <span>{index === 0 ? 'A /' : 'B /'}</span>
              <h4>{position.name}</h4>
              <p>{position.description}</p>
            </div>
          ))}
        </div>
        <div className="ct2010-atlasx-essence"><span>05 / QUÉ DEBE QUEDAR CLARO</span><p>{theme.guide.takeaway}</p></div>
      </div>

      <footer className="ct2010-atlasx-footer">
        <div><span>PROCEDENCIA</span><p>{theme.source}</p></div>
        <div className="ct2010-atlasx-actions">
          <button type="button" onClick={goToSource}>Leer el apartado de clase ↗</button>
          <button type="button" onClick={() => change((selected + 1) % critical20OctThemes.length)}>
            Siguiente núcleo → <span>{selected + 1} / {critical20OctThemes.length}</span>
          </button>
        </div>
      </footer>
    </section>
  )
}
