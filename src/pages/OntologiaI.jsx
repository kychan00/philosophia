import { Link } from 'react-router'
import './OntologyI.css'

const classes = [
  {date:'XXI',month:'I',route:'21-enero',state:'Folio completo',title:'Introducción y mapa de problemas ontológicos',copy:'Qué hay, qué existe, ontología y epistemología, Platón, Aristóteles, Tomás de Aquino y horizonte moderno.'},
  {date:'XXIII',month:'III',route:'23-marzo',state:'Fragmento',title:'Lo que es en tanto que es',copy:'Documento mínimo: encabezado, nodos M/F/G/A y la anotación “Ente → Accidente” en M.'},
  {date:'XXV',month:'III',route:'25-marzo',state:'Folio completo',title:'Principio de no contradicción',copy:'Primer principio, regreso infinito, determinación, lenguaje, predicación, modalidad y verdad.'},
  {date:'XIII',month:'IV',route:'13-abril',state:'Fragmento',title:'Tipos de ser',copy:'Esquema breve sobre ser, sujeto, predicado y accidente; sin reconstrucciones añadidas.'},
  {date:'XV',month:'IV',route:'15-abril',state:'Folio completo',title:'Entidad, accidente y predicación',copy:'Sujeto, coincidencia accidental, falsa unidad, regreso y determinación ontológica.'},
]

export default function OntologiaI(){
  return (
    <main className="oi-page">
      <nav className="oi-nav">
        <Link to="/semestre/4">← Cuarto semestre</Link>
        <Link to="/" className="oi-brand">Φ · Philosophia</Link>
        <span>FI189 · 2026-A</span>
      </nav>

      <header className="oi-hero">
        <span>Archivum ontologicum · volumen I</span>
        <h1>Ontología <em>I</em></h1>
        <p>Problemas clásicos · ser · entidad · sustancia · esencia · predicación</p>
        <div>
          <strong>FASE I</strong>
          <span>Apertura · Metafísica IV · fundamentos de la predicación</span>
        </div>
      </header>

      <section className="oi-classes">
        <div className="oi-heading">
          <small>the collection</small>
          <h2>Folios publicados</h2>
        </div>

        {classes.map((item,index)=>(
          <Link key={item.route} to={`/semestre/4/ontologia/clase/${item.route}`} className="oi-card">
            <div className="oi-date">
              <strong>{item.date}</strong>
              <span>{item.month} · MMXXVI</span>
            </div>
            <div className="oi-copy">
              <span>{String(index+1).padStart(2,'0')} · {item.state}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
            <div className="oi-enter">abrir folio ↗</div>
          </Link>
        ))}
      </section>

      <section className="oi-next">
        <small>fase siguiente</small>
        <h2>Metafísica VII</h2>
        <p>Entidad como sentido fundamental, sujeto y sustrato, materia, forma, esencia, definición y analogía.</p>
      </section>

      <footer className="oi-footer">
        <Link to="/semestre/4">← Cuarto semestre</Link>
        <span>☙ ὄν ❧</span>
        <span>Ontología · MMXXVI</span>
      </footer>
    </main>
  )
}
