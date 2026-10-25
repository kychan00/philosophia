import { useState } from 'react'
import { critical15OctThemes } from '../../data/critical15OctThemes'
import './Critical15OctThematicAtlas.css'

export default function Critical15OctThematicAtlas() {
  const [selected, setSelected] = useState(0)
  const [guideOpen, setGuideOpen] = useState(true)
  const theme = critical15OctThemes[selected]

  const change = (index) => {
    setSelected(index)
    setGuideOpen(true)
  }

  const goToSource = () => {
    document.getElementById(theme.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="ct1510-atlasx" id="ct1510-temas" aria-labelledby="ct1510-atlasx-heading">
      <div className="ct1510-atlasx-heading">
        <span>02 / NODOS DE ESTUDIO</span>
        <div>
          <p>LECTURA TEMÁTICA · CLASE 11</p>
          <h2 id="ct1510-atlasx-heading">La forma mercancía<br/><em>se vuelve vida social.</em></h2>
          <p>La sesión sigue a Lukács desde Marx y la forma mercancía hacia cálculo, instituciones, afectos y responsabilidad. Seleccione un núcleo para distinguir el texto base de las conexiones docentes y las ampliaciones posteriores.</p>
        </div>
      </div>

      <div className="ct1510-atlasx-tabs" role="group" aria-label="Cinco núcleos de estudio de la undécima clase">
        {critical15OctThemes.map((item, index) => (
          <button
            key={item.id} type="button" aria-pressed={selected === index}
            className={selected === index ? 'is-selected' : ''}
            onClick={() => change(index)}
          >
            <span className="ct1510-atlasx-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="ct1510-atlasx-icon" aria-hidden="true">{item.mark}</span>
            <strong>{item.name}</strong>
          </button>
        ))}
      </div>

      <article className="ct1510-atlasx-reader" aria-live="polite" key={theme.id}>
        <div className="ct1510-atlasx-symbol" aria-hidden="true">{theme.mark}</div>
        <div className="ct1510-atlasx-story">
          <span className="ct1510-atlasx-kicker">{theme.eyebrow} / RECONSTRUCCIÓN EDITORIAL</span>
          <h3>{theme.question}</h3>
          <strong>{theme.thesis}</strong>
          <p>{theme.argument}</p>
          <p>{theme.development}</p>
          <div className="ct1510-atlasx-tags">{theme.tags.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </article>

      <div className="ct1510-atlasx-figure">
        <div className="ct1510-atlasx-figure-head">
          <span>FIG. {String(selected + 1).padStart(2, '0')} / MAPA PARA LEER</span>
          <strong>{theme.name}</strong>
        </div>
        <div className="ct1510-atlasx-steps">
          {theme.nodes.map((item, index) => (
            <div className="ct1510-atlasx-step" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')} · {item.label}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <p className="ct1510-atlasx-caution">La figura organiza la comprensión del problema. Sus relaciones son de estudio: no convierten a Illouz, Adorno, Marcuse, Foucault, Arendt o Berlin en pasajes de Lukács ni transforman analogías de clase en dependencias textuales.</p>
      </div>

      <div className="ct1510-atlasx-figure-note">
        <div className="ct1510-atlasx-guide-top">
          <div>
            <span>GUÍA DE LECTURA</span>
            <h4>Cómo leer este recurso</h4>
            <p>La explicación distingue qué representa la figura, cómo recorrerla y qué afirmación no debemos extraer de ella.</p>
          </div>
          <button type="button" onClick={() => setGuideOpen(!guideOpen)} aria-expanded={guideOpen} aria-controls="ct1510-guide-body">
            {guideOpen ? 'Ocultar guía −' : 'Abrir guía +'}
          </button>
        </div>
        {guideOpen && (
          <div className="ct1510-atlasx-guide-body" id="ct1510-guide-body">
            <div><span>01 / QUÉ REPRESENTA</span><p>{theme.guide.what}</p></div>
            <div><span>02 / CÓMO LEERLO</span><p>{theme.guide.how}</p></div>
            <div><span>03 / POR QUÉ ESTÁ AQUÍ</span><p>{theme.guide.why}</p></div>
            <div><span>04 / EN PALABRAS SIMPLES</span><p>{theme.guide.simple}</p></div>
          </div>
        )}
      </div>

      <div className="ct1510-atlasx-contrast">
        <div className="ct1510-atlasx-contrast-head"><span>DISTINCIÓN QUE ACLARA EL PROBLEMA</span><strong>No confundir</strong></div>
        <div className="ct1510-atlasx-contrast-cards">
          {theme.positions.map((position, index) => (
            <div key={position.name}>
              <span>{index === 0 ? 'A /' : 'B /'}</span>
              <h4>{position.name}</h4>
              <p>{position.description}</p>
            </div>
          ))}
        </div>
        <div className="ct1510-atlasx-essence"><span>05 / QUÉ DEBE QUEDAR CLARO</span><p>{theme.guide.takeaway}</p></div>
      </div>

      <footer className="ct1510-atlasx-footer">
        <div><span>PROCEDENCIA</span><p>{theme.source}</p></div>
        <div className="ct1510-atlasx-actions">
          <button type="button" onClick={goToSource}>Leer el apartado de clase ↗</button>
          <button type="button" onClick={() => change((selected + 1) % critical15OctThemes.length)}>
            Siguiente núcleo → <span>{selected + 1} / {critical15OctThemes.length}</span>
          </button>
        </div>
      </footer>
    </section>
  )
}
