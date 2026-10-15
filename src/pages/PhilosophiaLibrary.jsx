import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { books, authors, categories } from '../data/libraryCatalog'
import { isWorkByAuthor, normalizeLibraryText, worksByAuthor } from '../data/libraryCatalogUtils'
import './PhilosophiaLibrary.css'

const labels = {
  'crítica':'Teoría crítica', 'ontología':'Ontología',
  'analítica':'Filosofía analítica', 'epistemología':'Epistemología',
  'ética':'Ética', 'investigación':'Investigación'
}
const marks = {'crítica':'K','ontología':'Ω','analítica':'λ',
  'epistemología':'Σ','ética':'ἦ','investigación':'§'}

export default function PhilosophiaLibrary() {
  const [tab, setTab] = useState('obras')
  const [term, setTerm] = useState('')
  const [category, setCategory] = useState('todas')
  const [order, setOrder] = useState('autor')
  const [selectedAuthor, setSelectedAuthor] = useState(null)
  const results = useMemo(() => {
    if(tab === 'autores')
      return authors.filter(a => normalizeLibraryText(a).includes(normalizeLibraryText(term)))
        .sort((a,b)=>a.localeCompare(b,'es'))
    return books.filter(b =>
      (tab !== 'recomendaciones' || b.estado === 'recomendada')
      && (category === 'todas' || b.categoria === category)
      && (!selectedAuthor || isWorkByAuthor(b, selectedAuthor))
      && normalizeLibraryText(b.autor+' '+b.titulo+' '+labels[b.categoria])
        .includes(normalizeLibraryText(term))
    ).sort((a,b)=> order === 'titulo'
      ? a.titulo.localeCompare(b.titulo,'es')
      : a.autor.localeCompare(b.autor,'es') || a.titulo.localeCompare(b.titulo,'es'))
  }, [tab, term, category, order, selectedAuthor])
  const changeTab = (next) => {
    setTab(next)
    setTerm('')
    setCategory('todas')
    setSelectedAuthor(null)
  }
  const showWorksByAuthor = (author) => {
    setTab('obras')
    setTerm('')
    setCategory('todas')
    setSelectedAuthor(author)
    setOrder('autor')
  }
  return <main className="library-shell">
    <nav className="library-nav" aria-label="Navegación">
      <Link to="/">← Archivo principal</Link>
      <Link to="/" className="library-logo">Φ · PHILOSOPHIA</Link>
      <span>BIBLIOTHECA / MMXXVI</span>
    </nav>
    <header className="library-hero">
      <div className="library-hero-copy">
        <span className="library-eyebrow">PHILOSOPHIA · EX LIBRIS · VOL. I</span>
        <p className="library-overline">Bibliotheca philosophica</p>
        <h1>El archivo de <em>las ideas.</em></h1>
        <p>Un mapa de autores, obras y recomendaciones del estudio filosófico.
          Catalogar no significa poseer un libro ni haber terminado su lectura.</p>
      </div>
      <aside className="library-hero-aside">
        <span>NOTA EDITORIAL / 15.X.2026</span>
        <strong>Los libros abren caminos; las fichas guardan memoria.</strong>
        <p>El catálogo reúne referencias bibliográficas. Los textos académicos
          se conservan por separado en sus fuentes correspondientes.</p>
      </aside>
    </header>
    <section className="library-stats" aria-label="Cifras del catálogo">
      <div><b>{books.length}</b><span>Obras registradas</span></div>
      <div><b>{authors.length}</b><span>Autores</span></div>
      <div><b>{books.filter(x=>x.estado==='recomendada').length}</b>
        <span>Recomendaciones</span></div>
    </section>
    <section className="library-index" aria-label="Catálogo bibliográfico">
      <header className="library-index-head">
        <div><span>01 / INDEX RERUM</span><h2>Explore la biblioteca</h2></div>
        <p>Los estados de propiedad y los avances personales de lectura
          permanecen diferenciados en Obsidian.</p>
      </header>
      <div className="library-tabs" role="group" aria-label="Secciones">
        {[
          ['obras','Obras',books.length],
          ['recomendaciones','Recomendaciones',books.filter(x=>x.estado==='recomendada').length],
          ['autores','Autores',authors.length]
        ].map(([id,label,count])=><button type="button" key={id}
          aria-pressed={tab===id} onClick={()=>changeTab(id)}>
            {label} <span>{count}</span>
          </button>)}
      </div>
      {selectedAuthor && <div className="library-active-author" role="status">
        <span>Obras de <strong>{selectedAuthor}</strong></span>
        <button type="button" onClick={()=>setSelectedAuthor(null)}>
          Mostrar todas las obras <span aria-hidden="true">×</span>
        </button>
      </div>}
      <div className="library-controls">
        <label><span>BUSCAR</span>
          <input type="search" value={term} onChange={e=>setTerm(e.target.value)}
            placeholder={tab==='autores'?'Nombre de autor…':'Título, autor o tema…'}/>
        </label>
        {tab!=='autores'&&<><label><span>ÁREA</span>
          <select value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="todas">Todas las áreas</option>
            {categories.map(c=><option key={c} value={c}>{labels[c]}</option>)}
          </select></label>
          <label><span>ORDEN</span>
            <select value={order} onChange={e=>setOrder(e.target.value)}>
              <option value="autor">Por autor</option>
              <option value="titulo">Por título</option>
            </select>
          </label></>}
      </div>
      <div className="library-result-count" aria-live="polite">
        {results.length} {tab==='autores'?'autores':'referencias'}
        <span>CATÁLOGO DOCUMENTAL · SIN TEXTO DE LAS OBRAS</span>
      </div>
      {tab==='autores'
        ? <div className="library-authors">
          {results.map((author,i)=>{
            const workCount = worksByAuthor(books, author).length
            return <article className="library-author" key={author}>
              <span>{String(i+1).padStart(2,'0')}</span>
              <strong aria-hidden="true">{author[0]}</strong>
              <h3>{author}</h3>
              {workCount > 0
                ? <button type="button" className="library-author-works"
                    onClick={()=>showWorksByAuthor(author)}
                    aria-label={`Ver ${workCount} ${workCount===1?'obra':'obras'} de ${author}`}>
                    Ver {workCount} {workCount===1?'obra':'obras'} <span aria-hidden="true">↗</span>
                  </button>
                : <p>Sin obra asociada a esta ficha en el catálogo</p>}
            </article>
          })}
        </div>
        : <div className="library-books">
          {results.map((book,i)=><article className={'library-book library-book--'+book.categoria}
            key={book.id}>
            <div className="library-book-top"><span>{String(i+1).padStart(2,'0')}</span>
              <span>{labels[book.categoria]}</span></div>
            <span className="library-book-mark" aria-hidden="true">{marks[book.categoria]}</span>
            <p className="library-book-author">{book.autor}</p>
            <h3>{book.titulo}</h3>
            <div className="library-book-labels">
              <span className={book.estado==='recomendada'?'recommended':''}>
                {book.estado==='recomendada'?'Recomendación':'Ficha documental'}</span>
              {book.lectura&&<span>{book.lectura}</span>}
            </div>
            {book.edicion&&<small>{book.edicion}</small>}
            {book.url&&<a href={book.url} target="_blank" rel="noopener noreferrer">
              Consultar fuente ↗</a>}
          </article>)}
        </div>}
      {results.length===0&&<div className="library-empty">
        <strong>Sin coincidencias.</strong><p>Pruebe otra palabra o cambie los filtros.</p>
      </div>}
    </section>
    <section className="library-note">
      <span aria-hidden="true">✳</span>
      <h2>Catalogar no es poseer.<br/>Leer un fragmento no es concluir una obra.</h2>
      <p>Las categorías son una organización editorial de referencias.
        No se reproducen textos de libros. Las obras y recomendaciones se
        relacionan con sus fichas académicas en el vault privado.</p>
    </section>
    <footer className="library-footer"><Link to="/">← Regresar a PHILOSOPHIA</Link>
      <span>Φ · ESTUDIO, CRÍTICA Y MEMORIA</span></footer>
  </main>
}
