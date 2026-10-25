import { useState } from 'react'
import { critical22OctThemes } from '../../data/critical22OctThemes'
import './Critical22OctThematicAtlas.css'

export default function Critical22OctThematicAtlas() {
  const [selected, setSelected] = useState(0)
  const [guideOpen, setGuideOpen] = useState(true)
  const theme = critical22OctThemes[selected]

  const change = (index) => {
    setSelected(index)
    setGuideOpen(true)
  }

  const goToSource = () => {
    document.getElementById(theme.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="ct2210-atlasx" id="ct2210-temas" aria-labelledby="ct2210-atlasx-heading">
      <div className="ct2210-atlasx-heading">
        <span>02 / NODOS DE ESTUDIO</span>
        <div>
          <p>LECTURA TEMÁTICA · CLASE 13</p>
          <h2 id="ct2210-atlasx-heading">El yo y el mundo<br/><em>sus límites y conflictos.</em></h2>
          <p>La sesión presenta el problema del malestar cultural, el método freudiano y la constitución del yo. Cada núcleo distingue explicación docente, conexiones posteriores y lagunas documentales.</p>
        </div>
      </div>

      <div className="ct2210-atlasx-tabs" role="group" aria-label="Cinco núcleos de estudio de la decimotercera clase">
        {critical22OctThemes.map((item, index) => (
          <button
            key={item.id} type="button" aria-pressed={selected === index}
            className={selected === index ? 'is-selected' : ''}
            onClick={() => change(index)}
          >
            <span className="ct2210-atlasx-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="ct2210-atlasx-icon" aria-hidden="true">{item.mark}</span>
            <strong>{item.name}</strong>
          </button>
        ))}
      </div>

      <article className="ct2210-atlasx-reader" aria-live="polite" key={theme.id}>
        <div className="ct2210-atlasx-symbol" aria-hidden="true">{theme.mark}</div>
        <div className="ct2210-atlasx-story">
          <span className="ct2210-atlasx-kicker">{theme.eyebrow} / RECONSTRUCCIÓN EDITORIAL</span>
          <h3>{theme.question}</h3>
          <strong>{theme.thesis}</strong>
          <p>{theme.argument}</p>
          <p>{theme.development}</p>
          <div className="ct2210-atlasx-tags">{theme.tags.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </article>

      <div className="ct2210-atlasx-figure">
        <div className="ct2210-atlasx-figure-head">
          <span>FIG. {String(selected + 1).padStart(2, '0')} / MAPA PARA LEER</span>
          <strong>{theme.name}</strong>
        </div>
        <div className={`ct2210-atlasx-steps ${theme.relation === "sequence" ? "is-sequence" : "is-parallel"}`}>
          {theme.nodes.map((item, index) => (
            <div className="ct2210-atlasx-step" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')} · {item.label}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <p className="ct2210-atlasx-caution">{theme.relation === "sequence" ? "Las flechas indican un itinerario de lectura editorial, no causalidad necesaria." : "Los tres bloques son dimensiones paralelas que deben distinguirse, no etapas sucesivas."} La figura organiza relaciones de estudio: Lacan y Hegel aparecen como conexiones docentes; las lagunas cronológicas y del aparato psíquico no se completan. Los enlaces no acreditan universalidad clínica.</p>
      </div>

      <div className="ct2210-atlasx-figure-note">
        <div className="ct2210-atlasx-guide-top">
          <div>
            <span>GUÍA DE LECTURA</span>
            <h4>Cómo leer este recurso</h4>
            <p>La explicación distingue qué representa la figura, cómo recorrerla y qué afirmación no debemos extraer de ella.</p>
          </div>
          <button type="button" onClick={() => setGuideOpen(!guideOpen)} aria-expanded={guideOpen} aria-controls="ct2210-guide-body">
            {guideOpen ? 'Ocultar guía −' : 'Abrir guía +'}
          </button>
        </div>
        {guideOpen && (
          <div className="ct2210-atlasx-guide-body" id="ct2210-guide-body">
            <div><span>01 / QUÉ REPRESENTA</span><p>{theme.guide.what}</p></div>
            <div><span>02 / CÓMO LEERLO</span><p>{theme.guide.how}</p></div>
            <div><span>03 / POR QUÉ ESTÁ AQUÍ</span><p>{theme.guide.why}</p></div>
            <div><span>04 / EN PALABRAS SIMPLES</span><p>{theme.guide.simple}</p></div>
          </div>
        )}
      </div>

      <div className="ct2210-atlasx-contrast">
        <div className="ct2210-atlasx-contrast-head"><span>DISTINCIÓN QUE ACLARA EL PROBLEMA</span><strong>No confundir</strong></div>
        <div className="ct2210-atlasx-contrast-cards">
          {theme.positions.map((position, index) => (
            <div key={position.name}>
              <span>{index === 0 ? 'A /' : 'B /'}</span>
              <h4>{position.name}</h4>
              <p>{position.description}</p>
            </div>
          ))}
        </div>
        <div className="ct2210-atlasx-essence"><span>05 / QUÉ DEBE QUEDAR CLARO</span><p>{theme.guide.takeaway}</p></div>
      </div>

      <footer className="ct2210-atlasx-footer">
        <div><span>PROCEDENCIA</span><p>{theme.source}</p></div>
        <div className="ct2210-atlasx-actions">
          <button type="button" onClick={goToSource}>Leer el apartado de clase ↗</button>
          <button type="button" onClick={() => change((selected + 1) % critical22OctThemes.length)}>
            Siguiente núcleo → <span>{selected + 1} / {critical22OctThemes.length}</span>
          </button>
        </div>
      </footer>
    </section>
  )
}
