import { useMemo, useState } from 'react'
import { editorialUdgBooks, editorialUdgCatalogMeta } from '../data/editorialUdgCatalog.generated'
import './EditorialUdgCatalog.css'

const PAGE_SIZE = 48

const normalize = value => (value || '')
  .normalize('NFD')
  .replace(/[\\u0300-\\u036f]/g, '')
  .toLocaleLowerCase('es-MX')

function reportCount(meta) {
  if (meta.catalogReportedCount == null) return 'sin cifra de fuente'
  return String(meta.catalogReportedCount)
}

export default function EditorialUdgCatalog() {
  const [term, setTerm] = useState('')
  const [format, setFormat] = useState('todos')
  const [page, setPage] = useState(1)

  const formats = useMemo(() => {
    const values = new Set()
    editorialUdgBooks.forEach(book => book.formatos?.forEach(item => {
      const canonical = item.startsWith('eBook') ? 'eBook'
        : item.startsWith('Audiolibro') ? 'Audiolibro'
          : item.startsWith('Impreso') ? 'Impreso' : item
      if (canonical) values.add(canonical)
    }))
    return [...values].sort((a,b)=>a.localeCompare(b,'es'))
  }, [])

  const results = useMemo(() => {
    const query = normalize(term)
    return editorialUdgBooks.filter(book => {
      const haystack = normalize([book.titulo, book.autor, ...(book.formatos || [])].join(' '))
      const matchesTerm = !query || haystack.includes(query)
      const matchesFormat = format === 'todos'
        || (book.formatos || []).some(item => item.startsWith(format))
      return matchesTerm && matchesFormat
    })
  }, [term, format])

  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE))
  const safePage = Math.min(page, pageCount)
  const visible = results.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  const changeTerm = event => {
    setTerm(event.target.value)
    setPage(1)
  }
  const changeFormat = event => {
    setFormat(event.target.value)
    setPage(1)
  }

  return <section className="editorial-udg" aria-labelledby="editorial-udg-title">
    <header className="editorial-udg-hero">
      <div>
        <span>EDITORIAL UNIVERSIDAD DE GUADALAJARA / CORPUS EXTERNO</span>
        <h3 id="editorial-udg-title">Catálogo editorial UdeG</h3>
        <p>
          Instantánea de las publicaciones visibles en el catálogo oficial. Este conjunto
          está separado del inventario académico de PHILOSOPHIA: aparecer aquí no significa
          que la obra sea una tesis, que se posea un ejemplar ni que haya sido leída.
        </p>
      </div>
      <dl>
        <div><dt>Registros capturados</dt><dd>{editorialUdgBooks.length}</dd></div>
        <div><dt>Catálogo reportado</dt><dd>{reportCount(editorialUdgCatalogMeta)}</dd></div>
        <div><dt>Fecha de corte</dt><dd>{editorialUdgCatalogMeta.capturedAt || 'Pendiente'}</dd></div>
      </dl>
    </header>

    {editorialUdgCatalogMeta.publisherFilterReportedCount != null
      && editorialUdgCatalogMeta.publisherFilterReportedCount !== editorialUdgCatalogMeta.catalogReportedCount
      && <p className="editorial-udg-audit" role="note">
        La propia tienda muestra dos cifras distintas: catálogo general
        {' '}{editorialUdgCatalogMeta.catalogReportedCount} y filtro de editorial
        {' '}{editorialUdgCatalogMeta.publisherFilterReportedCount}. La instantánea conserva
        únicamente los registros efectivamente enumerados por las páginas del catálogo.
      </p>}

    <div className="editorial-udg-controls">
      <label>
        <span>BUSCAR EN EDITORIAL UDG</span>
        <input type="search" value={term} onChange={changeTerm}
          placeholder="Título, autor o formato…" />
      </label>
      <label>
        <span>FORMATO</span>
        <select value={format} onChange={changeFormat}>
          <option value="todos">Todos los formatos</option>
          {formats.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
    </div>

    <div className="editorial-udg-resultline" aria-live="polite">
      <strong>{results.length}</strong> publicaciones encontradas
      <span>FUENTE OFICIAL · SIN COPIAS LOCALES DE LOS LIBROS</span>
    </div>

    {visible.length > 0 ? <div className="editorial-udg-grid">
      {visible.map(book => <article key={book.id} className="editorial-udg-card">
        <div className="editorial-udg-card-top">
          <span>#{String(book.ordenFuente).padStart(3,'0')}</span>
          <span>PÁG. {book.paginaFuente}</span>
        </div>
        <p>{book.autor}</p>
        <h4>{book.titulo}</h4>
        {book.formatos?.length > 0 && <div className="editorial-udg-formats">
          {book.formatos.map(item => <span key={item}>{item}</span>)}
        </div>}
        <a href={book.url} target="_blank" rel="noopener noreferrer">
          Abrir ficha oficial ↗
        </a>
      </article>)}
    </div> : <div className="editorial-udg-empty">
      <strong>Sin coincidencias.</strong>
      <p>Pruebe otra palabra o quite el filtro de formato.</p>
    </div>}

    {pageCount > 1 && <nav className="editorial-udg-pagination" aria-label="Paginación del catálogo Editorial UdeG">
      <button type="button" disabled={safePage === 1} onClick={()=>setPage(Math.max(1,safePage-1))}>
        ← Anterior
      </button>
      <span>Página {safePage} de {pageCount}</span>
      <button type="button" disabled={safePage === pageCount}
        onClick={()=>setPage(Math.min(pageCount,safePage+1))}>
        Siguiente →
      </button>
    </nav>}

    <footer className="editorial-udg-source">
      <p>{editorialUdgCatalogMeta.note}</p>
      <a href={editorialUdgCatalogMeta.source} target="_blank" rel="noopener noreferrer">
        Consultar catálogo fuente ↗
      </a>
    </footer>
  </section>
}
