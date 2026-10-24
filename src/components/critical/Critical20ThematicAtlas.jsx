import { useState } from 'react'
import { critical20Themes } from '../../data/critical20Themes'
import './Critical20ThematicAtlas.css'

export default function Critical20ThematicAtlas() {
  const [selected, setSelected] = useState(0)
  const [guideOpen, setGuideOpen] = useState(true)
  const theme = critical20Themes[selected]

  const change = (index) => {
    setSelected(index)
    setGuideOpen(true)
  }

  const goToSource = () => {
    document.getElementById(theme.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="ct20-atlas" id="ct20-temas" aria-labelledby="ct20-atlas-heading">
      <div className="ct20-atlas-heading">
        <span>02 / NODOS DE ESTUDIO</span>
        <div>
          <p>LECTURA TEMÁTICA · CLASE 02</p>
          <h2 id="ct20-atlas-heading">La crítica aparece como<br/><em>problema de relación.</em></h2>
          <p>La sesión no reúne autores por acumulación: pregunta cómo conocimiento, sociedad, historia y subjetividad se vuelven mutuamente relevantes. Seleccione un núcleo para reconstruir esa arquitectura.</p>
        </div>
      </div>

      <div className="ct20-atlas-tabs" role="group" aria-label="Cinco núcleos de estudio de la segunda clase">
        {critical20Themes.map((item, index) => (
          <button
            key={item.id} type="button" aria-pressed={selected === index}
            className={selected === index ? 'is-selected' : ''}
            onClick={() => change(index)}
          >
            <span className="ct20-atlas-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="ct20-atlas-icon" aria-hidden="true">{item.mark}</span>
            <strong>{item.name}</strong>
          </button>
        ))}
      </div>

      <article className="ct20-atlas-reader" aria-live="polite" key={theme.id}>
        <div className="ct20-atlas-symbol" aria-hidden="true">{theme.mark}</div>
        <div className="ct20-atlas-story">
          <span className="ct20-atlas-kicker">{theme.eyebrow} / RECONSTRUCCIÓN EDITORIAL</span>
          <h3>{theme.question}</h3>
          <strong>{theme.thesis}</strong>
          <p>{theme.argument}</p>
          <p>{theme.development}</p>
          <div className="ct20-atlas-tags">{theme.tags.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </article>

      <div className="ct20-atlas-figure">
        <div className="ct20-atlas-figure-head">
          <span>FIG. {String(selected + 1).padStart(2, '0')} / MAPA PARA LEER</span>
          <strong>{theme.name}</strong>
        </div>
        <div className="ct20-atlas-steps">
          {theme.nodes.map((item, index) => (
            <div className="ct20-atlas-step" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')} · {item.label}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <p className="ct20-atlas-caution">La figura organiza la comprensión del problema. Sus relaciones son de estudio y no convierten la genealogía de clase en una sucesión causal o doctrinal automática.</p>
      </div>

      <div className="ct20-atlas-figure-note">
        <div className="ct20-atlas-guide-top">
          <div>
            <span>GUÍA DE LECTURA</span>
            <h4>Cómo leer este recurso</h4>
            <p>La explicación distingue qué representa la figura, cómo recorrerla y qué afirmación no debemos extraer de ella.</p>
          </div>
          <button type="button" onClick={() => setGuideOpen(!guideOpen)} aria-expanded={guideOpen} aria-controls="ct20-guide-body">
            {guideOpen ? 'Ocultar guía −' : 'Abrir guía +'}
          </button>
        </div>
        {guideOpen && (
          <div className="ct20-atlas-guide-body" id="ct20-guide-body">
            <div><span>01 / QUÉ REPRESENTA</span><p>{theme.guide.what}</p></div>
            <div><span>02 / CÓMO LEERLO</span><p>{theme.guide.how}</p></div>
            <div><span>03 / POR QUÉ ESTÁ AQUÍ</span><p>{theme.guide.why}</p></div>
            <div><span>04 / EN PALABRAS SIMPLES</span><p>{theme.guide.simple}</p></div>
          </div>
        )}
      </div>

      <div className="ct20-atlas-contrast">
        <div className="ct20-atlas-contrast-head"><span>DISTINCIÓN QUE ACLARA EL PROBLEMA</span><strong>No confundir</strong></div>
        <div className="ct20-atlas-contrast-cards">
          {theme.positions.map((position, index) => (
            <div key={position.name}>
              <span>{index === 0 ? 'A /' : 'B /'}</span>
              <h4>{position.name}</h4>
              <p>{position.description}</p>
            </div>
          ))}
        </div>
        <div className="ct20-atlas-essence"><span>05 / QUÉ DEBE QUEDAR CLARO</span><p>{theme.guide.takeaway}</p></div>
      </div>

      <footer className="ct20-atlas-footer">
        <div><span>PROCEDENCIA</span><p>{theme.source}</p></div>
        <div className="ct20-atlas-actions">
          <button type="button" onClick={goToSource}>Leer el apartado de clase ↗</button>
          <button type="button" onClick={() => change((selected + 1) % critical20Themes.length)}>
            Siguiente núcleo → <span>{selected + 1} / {critical20Themes.length}</span>
          </button>
        </div>
      </footer>
    </section>
  )
}
