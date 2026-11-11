import { useMemo, useState } from 'react'
import {
  senecaStudyFormula,
  senecaStudySections,
  senecaStudySectionsByNode,
  senecaStudySource,
  senecaStudyForNode,
} from '../../data/senecaFirmnessStudy'

function RichText({ text }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g).filter(Boolean)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return <span key={index}>{part}</span>
  })
}

function StudyItems({ items, compact = false }) {
  return (
    <div className={compact ? 'seneca-study-items is-compact' : 'seneca-study-items'}>
      {items.map((item, index) => {
        if (item.type === 'arrow') {
          return <div key={index} className="seneca-study-arrow" aria-hidden="true">↓</div>
        }
        const style = { '--study-depth': Math.min(item.depth || 0, 3) }
        return (
          <div
            key={index}
            className={'seneca-study-line is-' + item.type}
            style={style}
          >
            {item.type === 'bullet' && <i aria-hidden="true" />}
            <span><RichText text={item.text} /></span>
          </div>
        )
      })}
    </div>
  )
}

function StudyCard({ section, open = false, compact = false }) {
  return (
    <details className={compact ? 'seneca-study-card is-compact' : 'seneca-study-card'} open={open}>
      <summary>
        <span>{String(section.number).padStart(2, '0')}</span>
        <div>
          <small>{section.category}</small>
          <strong>{section.title}</strong>
        </div>
        <b aria-hidden="true">+</b>
      </summary>
      <StudyItems items={section.items} compact={compact} />
    </details>
  )
}

export function SenecaStudyNodeSections({ nodeId, compact = true }) {
  const sections = useMemo(() => senecaStudyForNode(nodeId), [nodeId])
  if (!sections.length) return null

  return (
    <section className="seneca-study-node">
      <span>SISTEMATIZACIÓN COMPLETA · BLOQUES RELACIONADOS</span>
      <p className="seneca-study-node-intro">
        Esta estación se amplía con {sections.length} bloque{sections.length === 1 ? '' : 's'} de la
        sistematización analítica. Son notas de estudio, no citas literales.
      </p>
      <div className="seneca-study-node-list">
        {sections.map((section, index) => (
          <StudyCard key={section.number} section={section} open={index === 0} compact={compact} />
        ))}
      </div>
    </section>
  )
}

export default function SenecaStudyArchive({ open, onClose }) {
  const categories = useMemo(
    () => ['Todo', ...new Set(senecaStudySections.map(section => section.category))],
    [],
  )
  const [category, setCategory] = useState('Todo')
  const visible = category === 'Todo'
    ? senecaStudySections
    : senecaStudySections.filter(section => section.category === category)

  if (!open) return null

  return (
    <div className="seneca-study-overlay" role="dialog" aria-modal="true" aria-labelledby="seneca-study-title">
      <div className="seneca-study-backdrop" onClick={onClose} />
      <article className="seneca-study-archive">
        <header>
          <div>
            <span>{senecaStudySource.kind}</span>
            <h2 id="seneca-study-title">52 claves para <em>Sobre la firmeza del sabio</em></h2>
            <p>{senecaStudySource.boundary}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar sistematización">×</button>
        </header>

        <nav className="seneca-study-filter" aria-label="Filtrar sistematización">
          {categories.map(item => (
            <button
              key={item}
              type="button"
              className={item === category ? 'is-active' : ''}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="seneca-study-stats">
          <div><strong>52</strong><span>bloques</span></div>
          <div><strong>20</strong><span>estaciones 2D</span></div>
          <div><strong>7</strong><span>familias argumentales</span></div>
          <p>
            El grafo conserva la arquitectura visual; este archivo guarda el desarrollo analítico
            completo para estudiar, exponer y responder preguntas.
          </p>
        </div>

        <div className="seneca-study-grid">
          {visible.map(section => <StudyCard key={section.number} section={section} />)}
        </div>

        <section className="seneca-study-formula">
          <span>FÓRMULA FINAL PARA RECORDAR</span>
          <div>
            {senecaStudyFormula.map((line, index) => (
              <div key={index} className="seneca-study-formula-line">
                <RichText text={line} />
              </div>
            ))}
          </div>
        </section>

        <section className="seneca-study-map-index">
          <span>CORRESPONDENCIA CON EL SISTEMA 2D</span>
          <div>
            {Object.entries(senecaStudySectionsByNode).map(([nodeId, numbers]) => (
              <p key={nodeId}><strong>{nodeId}</strong> · {numbers.join(' · ')}</p>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
