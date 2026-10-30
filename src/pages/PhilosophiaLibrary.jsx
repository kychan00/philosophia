import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { books, authors, categories } from '../data/libraryCatalog'
import { authorsForWork, isWorkByAuthor, matchesLibrarySearch, normalizeLibraryText, worksByAuthor, worksStudyingAuthor } from '../data/libraryCatalogUtils'
import { libraryTimelines } from '../data/libraryReferenceTimelines'
import { libraryAcademicConnections } from '../data/libraryAcademicConnections'
import { formatApaRecord } from '../data/libraryApa.js'
import './PhilosophiaLibrary.css'

const labels = {
  'crítica':'Teoría crítica', 'ontología':'Ontología',
  'analítica':'Filosofía analítica', 'epistemología':'Epistemología',
  'ética':'Ética', 'política':'Filosofía política', 'investigación':'Investigación'
}
const marks = {'crítica':'K','ontología':'Ω','analítica':'λ',
  'epistemología':'Σ','ética':'ἦ','política':'Π','investigación':'§'}

function LibraryTimeline({ events, subject }) {
  const chronological = [...events].sort((a,b)=>(b.date||'').localeCompare(a.date||'') || a.area.localeCompare(b.area))
  return <div className="library-timeline" aria-label={`Cronología de ${subject}`}>
    <div className="library-timeline-header">
      <span>ITINERARIUM / ACTIVIDAD ACADÉMICA</span>
      <h4>Clases y actividades</h4>
      <p>Referencias de clases y tareas documentadas. La mención de un autor o una lectura asignada no demuestra que se haya leído un libro completo.</p>
    </div>
    {chronological.length ? <ol className="library-timeline-list">
      {chronological.map((event,i)=><li className="library-timeline-entry"
        key={event.date+'-'+event.area+'-'+event.title+'-'+i}>
        <div className="library-timeline-date">
          {event.date?<time dateTime={event.date}>{event.date.split('-').reverse().join('.')}</time>:<span>Sin fecha exacta</span>}
          <small>{event.area}</small>
        </div>
        <div className="library-timeline-info">
          <strong>{event.title}</strong>
          <span>{event.kind==='procedencia' ? `Procedencia: ${event.type} · ${event.dateLabel}` : event.kind==='tarea' ? `Registro académico · ${event.type} · ${event.dateLabel}` : event.type==='enlace a la obra' ? 'Obra referenciada en la nota'
            : event.type==='título citado en nota' ? 'Título mencionado en la nota'
            : 'Autor mencionado en la nota'}</span>
          {event.note&&<small>{event.note}</small>}
          {event.url
            ? <Link to={event.url}>Abrir {event.kind==='procedencia'?'recurso relacionado':event.kind==='tarea'?'actividad':'clase'} <span aria-hidden="true">↗</span></Link>
            : <small>Nota académica en Obsidian; sin página pública vinculable</small>}
        </div>
      </li>)}
    </ol> : <p className="library-timeline-empty">Existe ficha documental en Obsidian; aún no se ha identificado una actividad fechada asociada. No equivale a que nunca se haya estudiado.</p>}
  </div>
}

function ApaCitation({ book }) {
  const [message, setMessage] = useState('')
  const reference = formatApaRecord(book, authors)
  const copyApa = async () => {
    try {
      const escape = value => value.replaceAll('&','&amp;').replaceAll('<','&lt;')
        .replaceAll('>','&gt;').replaceAll('"','&quot;')
      const html = '<p style="margin:0;padding-left:1.27cm;text-indent:-1.27cm">'
        +reference.parts.map(part => part.italic?'<em>'+escape(part.text)+'</em>':escape(part.text)).join('')
        +'</p>'
      if (navigator.clipboard?.write && typeof ClipboardItem !== 'undefined') {
        await navigator.clipboard.write([new ClipboardItem({
          'text/plain': new Blob([reference.text],{type:'text/plain'}),
          'text/html': new Blob([html],{type:'text/html'})
        })])
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(reference.text)
      } else {
        throw new Error('clipboard unavailable')
      }
      setMessage('Referencia copiada')
    } catch {
      setMessage('Seleccione y copie la referencia manualmente')
    }
  }
  return <details className="library-apa-details">
    <summary>Referencia APA 7 <span aria-hidden="true">↗</span></summary>
    <div className="library-apa-content">
      <p className="library-apa-reference" lang="es">
        {reference.parts.map((part,i)=>part.italic?<em key={i}>{part.text}</em>:<span key={i}>{part.text}</span>)}
      </p>
      {reference.status==='pendiente'
        ? <p className="library-apa-note"><strong>Referencia provisional.</strong> Por verificar:
          {' '+reference.issues.join('; ')}. No utilizar como cita bibliográfica definitiva hasta cotejar la edición.</p>
        : <p className="library-apa-note">Datos bibliográficos registrados en la ficha; confirme la edición
          antes de entregar una bibliografía definitiva.</p>}
      {reference.studyPart&&<p className="library-apa-study">Tramo de estudio: {reference.studyPart}.</p>}
      {reference.originalYear&&<p className="library-apa-study">Primera publicación registrada: {reference.originalYear}.
        La fecha de la edición usada no consta.</p>}
      <div className="library-apa-actions">
        <button type="button" className="library-apa-copy" onClick={copyApa}>
          Copiar referencia
        </button>
        <span role="status" aria-live="polite">{message}</span>
      </div>
    </div>
  </details>
}

export default function PhilosophiaLibrary() {
  const [params] = useSearchParams()
  const linkedWork=books.find(b=>b.id===params.get('obra'))
  const linkedAuthor=authors.includes(params.get('autor'))?params.get('autor'):null
  const [tab, setTab] = useState(linkedAuthor?'autores':'obras')
  const [term, setTerm] = useState(linkedWork?.titulo || linkedAuthor || '')
  const [category, setCategory] = useState('todas')
  const [order, setOrder] = useState('autor')
  const [selectedAuthor, setSelectedAuthor] = useState(null)
  const [expandedCard, setExpandedCard] = useState(linkedWork?'work:'+linkedWork.id:linkedAuthor?'author:'+linkedAuthor:null)
  const activity = (kind,id) => [...(libraryTimelines[kind][id]||[]),...(libraryAcademicConnections[kind][id]?.events||[])]
  const toggleTimeline = (key) => setExpandedCard(current => current===key ? null : key)
  const results = useMemo(() => {
    if(tab === 'autores')
      return authors.filter(a => normalizeLibraryText(a).includes(normalizeLibraryText(term)))
        .sort((a,b)=>a.localeCompare(b,'es'))
    return books.filter(b =>
      (tab !== 'recomendaciones' || b.estado === 'recomendada')
      && (category === 'todas' || b.categoria === category)
      && (!selectedAuthor || isWorkByAuthor(b, selectedAuthor))
      && matchesLibrarySearch(b, term, labels[b.categoria])
    ).sort((a,b)=> order === 'titulo'
      ? a.titulo.localeCompare(b.titulo,'es')
      : a.autor.localeCompare(b.autor,'es') || a.titulo.localeCompare(b.titulo,'es'))
  }, [tab, term, category, order, selectedAuthor])
  const changeTab = (next) => {
    setTab(next)
    setTerm('')
    setCategory('todas')
    setSelectedAuthor(null)
    setExpandedCard(null)
  }
  const showAuthorRecord = (author) => {
    setTab('autores')
    setTerm(author)
    setCategory('todas')
    setSelectedAuthor(null)
    setExpandedCard('author:'+author)
    document.querySelector('.library-index')?.scrollIntoView({behavior:'smooth',block:'start'})
  }
  const showWorkRecord = (book) => {
    setTab('obras')
    setTerm(book.titulo)
    setCategory('todas')
    setSelectedAuthor(null)
    setExpandedCard('work:'+book.id)
    document.querySelector('.library-index')?.scrollIntoView({behavior:'smooth',block:'start'})
  }
  const showWorksByAuthor = (author) => {
    setTab('obras')
    setTerm('')
    setCategory('todas')
    setSelectedAuthor(author)
    setOrder('autor')
    setExpandedCard(null)
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
    <section className="library-cartography-launch" aria-label="Cartografía bibliográfica">
      <div><span>02 / CARTOGRAPHIA</span><strong>Las ideas también tienen conexiones.</strong>
        <p>Explore obras, autores, conceptos y actividades enlazadas en una cartografía 2D.</p></div>
      <Link to="/biblioteca/cartografia">Explorar cartografía 2D ↗</Link>
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
            const studiedIn = worksStudyingAuthor(books, author)
            const events = activity('authors',author)
            const isExpanded = expandedCard === 'author:'+author
            return <article className={'library-author'+(isExpanded?' library-author--expanded':'')} key={author}>
              <span>{String(i+1).padStart(2,'0')}</span>
              <strong aria-hidden="true">{author[0]}</strong>
              <h3>{author}</h3><p className="library-record-source">Ficha de autor documentada en Obsidian</p>
              {workCount > 0
                ? <button type="button" className="library-author-works"
                    onClick={()=>showWorksByAuthor(author)}
                    aria-label={`Ver ${workCount} ${workCount===1?'obra':'obras'} de ${author}`}>
                    Ver {workCount} {workCount===1?'obra':'obras'} <span aria-hidden="true">↗</span>
                  </button>
                : <p>Sin obra de autoría propia registrada en el catálogo</p>}
              {studiedIn.map(book=><button type="button" key={book.id}
                className="library-related-work" onClick={()=>showWorkRecord(book)}>
                Estudiado en: {book.titulo} · {book.autor} ↗
              </button>)}
              <Link className="library-map-link" to={"/biblioteca/cartografia?autor="+encodeURIComponent(author)}>Ver red bibliográfica ↗</Link>
              <button type="button" className="library-timeline-toggle"
                aria-expanded={isExpanded}
                aria-controls={'library-author-timeline-'+i}
                onClick={()=>toggleTimeline('author:'+author)}>
                {isExpanded?'Cerrar cronología':`Abrir cronología · ${events.length}`}
              </button>
              {isExpanded&&<div className="library-timeline-container" id={'library-author-timeline-'+i}>
                {workCount>0&&<section className="library-connected-records" aria-label={'Obras vinculadas con '+author}>
                  <h4>Obras vinculadas</h4>
                  <div className="library-connected-records-list">
                    {worksByAuthor(books,author).map(book=><button type="button" key={book.id}
                      onClick={()=>showWorkRecord(book)} className="library-related-work">
                      {book.titulo} <span aria-hidden="true">↗</span>
                    </button>)}
                  </div>
                </section>}
                <LibraryTimeline events={events} subject={author}/>
              </div>}
            </article>
          })}
        </div>
        : <div className="library-books">
          {results.map((book,i)=>{
            const events=activity('works',book.id)
            const isExpanded=expandedCard === 'work:'+book.id
            return <article className={'library-book library-book--'+book.categoria
              +(isExpanded?' library-book--expanded':'')} key={book.id}>
            <div className="library-book-top"><span>{String(i+1).padStart(2,'0')}</span>
              <span>{labels[book.categoria]}</span></div>
            <span className="library-book-mark" aria-hidden="true">{marks[book.categoria]}</span>
            <p className="library-book-author">{book.autor}</p>
            <h3>{book.titulo}</h3><p className="library-record-source">Ficha de obra documentada en Obsidian</p>
            <div className="library-book-labels">
              <span className={book.estado==='recomendada'?'recommended':''}>
                {book.estado==='recomendada'?'Recomendación':'Ficha documental'}</span>
              {book.lectura&&<span>{book.lectura}</span>}
            </div>
            {book.edicion&&<small>{book.edicion}</small>}
            {book.url&&<a href={book.url} target="_blank" rel="noopener noreferrer">
              Consultar fuente ↗</a>}
            {book.studyUrl&&<Link to={book.studyUrl} className="library-study-link">
              Abrir estudio 2D ↗</Link>}
            {book.ideas?.length>0&&<details className="library-ideas-details">
              <summary>{book.ideas.length} ideas para estudiar <span aria-hidden="true">↗</span></summary>
              <div className="library-ideas-content">
                <p>Paráfrasis temáticas, no citas literales ni lectura acreditada del ejemplar.</p>
                <ol>{book.ideas.map(idea=><li key={idea.lema}>
                  <strong>{idea.lema}</strong><span>{idea.detalle}</span>
                </li>)}</ol>
              </div>
            </details>}
            <ApaCitation book={book}/>
            <Link className="library-map-link" to={"/biblioteca/cartografia?obra="+encodeURIComponent(book.id)}>Explorar conexiones de esta obra ↗</Link>
            <button type="button" className="library-timeline-toggle"
              aria-expanded={isExpanded}
              aria-controls={'library-work-timeline-'+i}
              onClick={()=>toggleTimeline('work:'+book.id)}>
              {isExpanded?'Cerrar cronología':`Abrir cronología · ${events.length}`}
            </button>
            {isExpanded&&<div className="library-timeline-container" id={'library-work-timeline-'+i}>
              <section className="library-connected-records" aria-label={'Autores vinculados con '+book.titulo}>
                <h4>Autoría documentada</h4>
                <div className="library-connected-records-list">
                  {authorsForWork(book,authors).map(author=><button type="button" key={author}
                    onClick={()=>showAuthorRecord(author)} className="library-work-author-link">
                    {author} <span aria-hidden="true">↗</span>
                  </button>)}
                </div>
              </section>
              <LibraryTimeline events={events} subject={book.titulo}/>
            </div>}
          </article>
          })}
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
