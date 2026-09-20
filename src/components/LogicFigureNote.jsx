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
    <aside className="logic-figure-note" data-figure-note={noteId} aria-label={title}>
      <div className="logic-figure-note__head">
        <span>GUÍA DE LECTURA</span>
        <strong>{title}</strong>
      </div>
      <div className="logic-figure-note__grid">
        <div>
          <span>QUÉ REPRESENTA</span>
          <p>{what}</p>
        </div>
        <div>
          <span>CÓMO LEERLO</span>
          <p>{how}</p>
        </div>
        <div>
          <span>POR QUÉ ESTÁ AQUÍ</span>
          <p>{why}</p>
        </div>
        <div className="logic-figure-note__takeaway">
          <span>QUÉ DEBE QUEDAR CLARO</span>
          <p>{takeaway}</p>
        </div>
      </div>
    </aside>
  )
}
