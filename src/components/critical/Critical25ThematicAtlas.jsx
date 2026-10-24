import { useState } from 'react'
import { critical25Themes } from '../../data/critical25Themes'
import './Critical25ThematicAtlas.css'

export default function Critical25ThematicAtlas() {
  const [selected, setSelected] = useState(0)
  const [guideOpen, setGuideOpen] = useState(true)
  const theme = critical25Themes[selected]

  const change = (index) => {
    setSelected(index)
    setGuideOpen(true)
  }

  const goToSource = () => {
    document.getElementById(theme.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="ct25-atlas" id="ct25-temas" aria-labelledby="ct25-atlas-heading">
      <div className="ct25-atlas-heading">
        <span>02 / NODOS DE ESTUDIO</span>
        <div>
          <p>LECTURA TEMÁTICA · CLASE 03</p>
          <h2 id="ct25-atlas-heading">La sociedad aparece como<br/><em>una totalidad contradictoria.</em></h2>
          <p>La sesión conecta institución, fascismo, exilio, totalidad y cultura. Seleccione un núcleo para reconstruir cómo una experiencia histórica transforma el problema crítico.</p>
        </div>
      </div>

      <div className="ct25-atlas-tabs" role="group" aria-label="Cinco núcleos de estudio de la tercera clase">
        {critical25Themes.map((item, index) => (
          <button
            key={item.id} type="button" aria-pressed={selected === index}
            className={selected === index ? 'is-selected' : ''}
            onClick={() => change(index)}
          >
            <span className="ct25-atlas-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="ct25-atlas-icon" aria-hidden="true">{item.mark}</span>
            <strong>{item.name}</strong>
          </button>
        ))}
      </div>

      <article className="ct25-atlas-reader" aria-live="polite" key={theme.id}>
        <div className="ct25-atlas-symbol" aria-hidden="true">{theme.mark}</div>
        <div className="ct25-atlas-story">
          <span className="ct25-atlas-kicker">{theme.eyebrow} / RECONSTRUCCIÓN EDITORIAL</span>
          <h3>{theme.question}</h3>
          <strong>{theme.thesis}</strong>
          <p>{theme.argument}</p>
          <p>{theme.development}</p>
          <div className="ct25-atlas-tags">{theme.tags.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </article>

      <div className="ct25-atlas-figure">
        <div className="ct25-atlas-figure-head">
          <span>FIG. {String(selected + 1).padStart(2, '0')} / MAPA PARA LEER</span>
          <strong>{theme.name}</strong>
        </div>
        <div className="ct25-atlas-steps">
          {theme.nodes.map((item, index) => (
            <div className="ct25-atlas-step" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')} · {item.label}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <p className="ct25-atlas-caution">La figura organiza la comprensión del problema. Sus relaciones son de estudio y no convierten la genealogía de clase en una sucesión causal o doctrinal automática.</p>
      </div>

      <div className="ct25-atlas-figure-note">
        <div className="ct25-atlas-guide-top">
          <div>
            <span>GUÍA DE LECTURA</span>
            <h4>Cómo leer este recurso</h4>
            <p>La explicación distingue qué representa la figura, cómo recorrerla y qué afirmación no debemos extraer de ella.</p>
          </div>
          <button type="button" onClick={() => setGuideOpen(!guideOpen)} aria-expanded={guideOpen} aria-controls="ct25-guide-body">
            {guideOpen ? 'Ocultar guía −' : 'Abrir guía +'}
          </button>
        </div>
        {guideOpen && (
          <div className="ct25-atlas-guide-body" id="ct25-guide-body">
            <div><span>01 / QUÉ REPRESENTA</span><p>{theme.guide.what}</p></div>
            <div><span>02 / CÓMO LEERLO</span><p>{theme.guide.how}</p></div>
            <div><span>03 / POR QUÉ ESTÁ AQUÍ</span><p>{theme.guide.why}</p></div>
            <div><span>04 / EN PALABRAS SIMPLES</span><p>{theme.guide.simple}</p></div>
          </div>
        )}
      </div>

      <div className="ct25-atlas-contrast">
        <div className="ct25-atlas-contrast-head"><span>DISTINCIÓN QUE ACLARA EL PROBLEMA</span><strong>No confundir</strong></div>
        <div className="ct25-atlas-contrast-cards">
          {theme.positions.map((position, index) => (
            <div key={position.name}>
              <span>{index === 0 ? 'A /' : 'B /'}</span>
              <h4>{position.name}</h4>
              <p>{position.description}</p>
            </div>
          ))}
        </div>
        <div className="ct25-atlas-essence"><span>05 / QUÉ DEBE QUEDAR CLARO</span><p>{theme.guide.takeaway}</p></div>
      </div>

      <footer className="ct25-atlas-footer">
        <div><span>PROCEDENCIA</span><p>{theme.source}</p></div>
        <div className="ct25-atlas-actions">
          <button type="button" onClick={goToSource}>Leer el apartado de clase ↗</button>
          <button type="button" onClick={() => change((selected + 1) % critical25Themes.length)}>
            Siguiente núcleo → <span>{selected + 1} / {critical25Themes.length}</span>
          </button>
        </div>
      </footer>
    </section>
  )
}
