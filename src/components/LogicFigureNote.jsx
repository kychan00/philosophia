import './LogicFigureNote.css'

export default function LogicFigureNote({
  noteId,
  title = 'Cómo leer este recurso',
  what,
  how,
  why,
  takeaway,
}) {
  return (
    <details className="logic-figure-note" data-figure-note={noteId}>
      <summary className="logic-figure-note__summary">
        <span className="logic-figure-note__eyebrow">GUÍA DE LECTURA</span>

        <span className="logic-figure-note__summary-copy">
          <strong>{title}</strong>
          <small>Explicación del gráfico, su lectura y la idea que debe quedar clara.</small>
        </span>

        <span className="logic-figure-note__action" aria-hidden="true">
          <span className="logic-figure-note__action-closed">ABRIR</span>
          <span className="logic-figure-note__action-open">CERRAR</span>
          <b>+</b>
        </span>
      </summary>

      <div className="logic-figure-note__body">
        <div className="logic-figure-note__intro">
          <span>LECTURA GUIADA</span>
          <p>
            Use este panel después de observar el recurso visual. No añade un tema
            nuevo: explica qué está representando el cuadro, cómo recorrerlo y por
            qué ayuda a entender este punto de la clase.
          </p>
        </div>

        <div className="logic-figure-note__grid">
          <section>
            <span>01 · QUÉ REPRESENTA</span>
            <p>{what}</p>
          </section>

          <section>
            <span>02 · CÓMO LEERLO</span>
            <p>{how}</p>
          </section>

          <section>
            <span>03 · POR QUÉ ESTÁ AQUÍ</span>
            <p>{why}</p>
          </section>

          <section className="logic-figure-note__takeaway">
            <span>04 · QUÉ DEBE QUEDAR CLARO</span>
            <p>{takeaway}</p>
          </section>
        </div>
      </div>
    </details>
  )
}
