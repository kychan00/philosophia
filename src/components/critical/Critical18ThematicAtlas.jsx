import { useState } from 'react'
import { critical18Themes } from '../../data/critical18Themes'
import './Critical18ThematicAtlas.css'

// Lectura editorial de cinco núcleos de la clase; no se atribuye a la profesora
// la estructura del esquema ni el orden de los nodos.
export default function Critical18ThematicAtlas() {
  const [selected, setSelected] = useState(0)
  const [guideOpen, setGuideOpen] = useState(true)
  const theme = critical18Themes[selected]
  const change = (index) => {
    setSelected(index)
    setGuideOpen(true)
  }
  const goToSource = () => {
    document.getElementById(theme.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="ct18-atlas" id="ct18-temas" aria-labelledby="ct18-atlas-heading">
      <div className="ct18-atlas-heading">
        <span>02 / NODOS DE ESTUDIO</span>
        <div>
          <p>LECTURA TEMÁTICA · CLASE 01</p>
          <h2 id="ct18-atlas-heading">Entender el problema,<br/><em>no sólo recordar el tema.</em></h2>
          <p>Seleccione un núcleo: la pregunta abre el tema, el esquema permite recorrerlo y la guía explica por qué cada relación aparece. Las cinco fichas son reconstrucciones pedagógicas de PHILOSOPHIA.</p>
        </div>
      </div>

      <div className="ct18-atlas-tabs" role="group" aria-label="Cinco núcleos de estudio de la primera clase">
        {critical18Themes.map((item, index) => (
          <button
            key={item.id} type="button" aria-pressed={selected === index}
            className={selected === index ? 'is-selected' : ''}
            onClick={() => change(index)}
          >
            <span className="ct18-atlas-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="ct18-atlas-icon" aria-hidden="true">{item.mark}</span>
            <strong>{item.name}</strong>
          </button>
        ))}
      </div>

      <article className="ct18-atlas-reader" aria-live="polite" key={theme.id}>
        <div className="ct18-atlas-symbol" aria-hidden="true">{theme.mark}</div>
        <div className="ct18-atlas-story">
          <span className="ct18-atlas-kicker">{theme.eyebrow} / RECONSTRUCCIÓN EDITORIAL</span>
          <h3>{theme.question}</h3>
          <strong>{theme.thesis}</strong>
          <p>{theme.argument}</p>
          <p>{theme.development}</p>
          <div className="ct18-atlas-tags">{theme.tags.map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </article>

      <div className="ct18-atlas-figure">
        <div className="ct18-atlas-figure-head">
          <span>FIG. {String(selected + 1).padStart(2, '0')} / MAPA PARA LEER</span>
          <strong>{theme.name}</strong>
        </div>
        <div className="ct18-atlas-steps">
          {theme.nodes.map((item,index)=>(
            <div className="ct18-atlas-step" key={item.title}>
              <span>{String(index + 1).padStart(2,'0')} · {item.label}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <p className="ct18-atlas-caution">La secuencia es una ruta explicativa de estudio; las tarjetas no son citas, fases obligatorias ni una cadena causal demostrada por la profesora.</p>
      </div>

      <div className="ct18-atlas-figure-note">
        <div className="ct18-atlas-guide-top">
          <div><span>GUÍA DE LECTURA</span><h4>Cómo leer este recurso</h4><p>El esquema se acompaña de una explicación de sus límites y de la idea que conviene retener.</p></div>
          <button type="button" onClick={()=>setGuideOpen(!guideOpen)} aria-expanded={guideOpen} aria-controls="ct18-guide-body">
            {guideOpen ? 'Ocultar guía −' : 'Abrir guía +'}
          </button>
        </div>
        {guideOpen && (
          <div className="ct18-atlas-guide-body" id="ct18-guide-body">
            <div><span>01 / QUÉ REPRESENTA</span><p>{theme.guide.what}</p></div>
            <div><span>02 / CÓMO LEERLO</span><p>{theme.guide.how}</p></div>
            <div><span>03 / POR QUÉ ESTÁ AQUÍ</span><p>{theme.guide.why}</p></div>
            <div><span>04 / EN PALABRAS SIMPLES</span><p>{theme.guide.simple}</p></div>
          </div>
        )}
      </div>

      <div className="ct18-atlas-contrast" aria-label="Distinción conceptual de estudio">
        <div className="ct18-atlas-contrast-head"><span>DISTINCIÓN QUE ACLARA EL PROBLEMA</span><strong>No confundir</strong></div>
        <div className="ct18-atlas-contrast-cards">
          {theme.positions.map((position,index)=><div key={position.name}><span>{index === 0 ? 'A /' : 'B /'}</span><h4>{position.name}</h4><p>{position.description}</p></div>)}
        </div>
        <div className="ct18-atlas-essence">
          <span>05 / QUÉ DEBE QUEDAR CLARO</span>
          <p>{theme.guide.takeaway}</p>
        </div>
      </div>

      <footer className="ct18-atlas-footer">
        <div><span>PROCEDENCIA</span><p>{theme.source}</p></div>
        <div className="ct18-atlas-actions">
          <button type="button" onClick={goToSource}>Leer el apartado de clase ↗</button>
          <button type="button" onClick={()=>change((selected + 1) % critical18Themes.length)}>
            Siguiente núcleo → <span>{selected + 1} / {critical18Themes.length}</span>
          </button>
        </div>
      </footer>
    </section>
  )
}
