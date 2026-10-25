import { critical22SepSections } from '../../data/critical22SepSections'
import './Critical22SepSectionStudy.css'

export default function Critical22SepSectionStudy({ sectionId }) {
  const index = critical22SepSections.findIndex((item) => item.id === sectionId)
  if (index < 0) return null
  const section = critical22SepSections[index]
  const previous = critical22SepSections[index - 1]
  const next = critical22SepSections[index + 1]
  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="ctsep22-study" data-study-section={section.id} aria-label={`Guía pedagógica del apartado ${section.number}`}>
      <div className="ctsep22-study__header">
        <span>ESTUDIO DEL APARTADO {section.number} / 10</span>
        <span>RECONSTRUCCIÓN DE PHILOSOPHIA</span>
      </div>

      <div className="ctsep22-study__lead">
        <p>PROBLEMA QUE ABRE EL APARTADO</p>
        <h3>{section.question}</h3>
        <strong>{section.thesis}</strong>
        <p>{section.explanation}</p>
      </div>

      <figure className="ctsep22-study__figure">
        <div className="ctsep22-study__figure-heading">
          <span>FIG. {section.number} / ORGANIZACIÓN CONCEPTUAL ORIGINAL</span>
          <strong>{section.relation === 'parallel' ? 'Aspectos que deben distinguirse' : 'Ruta de lectura editorial'}</strong>
        </div>
        <div className={`ctsep22-study__nodes ${section.relation === 'sequence' ? 'is-sequence' : 'is-parallel'}`}>
          {section.nodes.map((node, i) => (
            <div className="ctsep22-study__node" key={node.title}>
              <span>{String(i + 1).padStart(2, '0')} / {node.label}</span>
              <h4>{node.title}</h4>
              <p>{node.description}</p>
            </div>
          ))}
        </div>
        <figcaption>
          {section.relation === 'parallel'
            ? 'Los bloques representan aspectos que deben compararse; su orden no implica causalidad, identidad ni jerarquía.'
            : 'Las flechas indican un orden pedagógico de lectura. No convierten el movimiento en una ley causal ni en la tríada fija “tesis–antítesis–síntesis”.'}
        </figcaption>
      </figure>

      <details className="ctsep22-study__guide" data-study-guide={section.id}>
        <summary>
          <span>GUÍA DE LECTURA</span>
          <strong>Cómo leer este esquema</strong>
          <small>Qué representa, cómo seguirlo, por qué importa y qué conservar.</small>
          <b aria-hidden="true">+</b>
        </summary>
        <div className="ctsep22-study__guide-grid">
          <div><span>01 / QUÉ REPRESENTA</span><p>{section.guide.what}</p></div>
          <div><span>02 / CÓMO LEERLO</span><p>{section.guide.how}</p></div>
          <div><span>03 / POR QUÉ ESTÁ AQUÍ</span><p>{section.guide.why}</p></div>
          <div><span>04 / QUÉ DEBE QUEDAR CLARO</span><p>{section.guide.takeaway}</p></div>
        </div>
      </details>

      <div className="ctsep22-study__simple">
        <span>EN PALABRAS SIMPLES</span>
        <p>{section.guide.simple}</p>
      </div>

      <div className="ctsep22-study__compare">
        <span>DISTINCIÓN PARA NO CONFUNDIR</span>
        <div>
          {section.contrast.map((item, i) => (
            <article key={item.title}>
              <small>{i === 0 ? 'A' : 'B'}</small>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <details className="ctsep22-study__question" data-study-question={section.id}>
        <summary><span>PRUEBA DE RECUPERACIÓN · EDITORIAL</span><strong>{section.practice.question}</strong><b aria-hidden="true">+</b></summary>
        <p>{section.practice.cue}</p>
        <small>Orientación de estudio creada por PHILOSOPHIA. No es una pregunta oficial ni una cita de la profesora.</small>
      </details>

      <footer className="ctsep22-study__footer">
        <p><strong>PROCEDENCIA:</strong> {section.evidence} Las figuras, preguntas y relaciones de esta ficha son editoriales.</p>
        <div>
          {previous && <button type="button" onClick={() => jump(previous.id)}>← {previous.number} · Apartado anterior</button>}
          {next && <button type="button" onClick={() => jump(next.id)}>Siguiente apartado · {next.number} →</button>}
        </div>
      </footer>
    </div>
  )
}
