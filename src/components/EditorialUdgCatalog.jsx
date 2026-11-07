import { useMemo, useState } from 'react'
import { editorialUdgBooks, editorialUdgCatalogMeta } from '../data/editorialUdgCatalog.generated'
import './EditorialUdgCatalog.css'

const PAGE_SIZE = 36

const normalize = value => (value || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('es-MX')

const originLabel = origin => origin === 'categoria-oficial'
  ? 'Filosofía · categoría oficial'
  : 'Relación filosófica verificada'

export default function EditorialUdgCatalog() {
  const [term, setTerm] = useState('')
  const [format, setFormat] = useState('todos')
  const [origin, setOrigin] = useState('todos')
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
      const haystack = normalize([book.titulo, book.autor, book.criterio, ...(book.formatos || [])].join(' '))
      const matchesTerm = !query || haystack.includes(query)
      const matchesFormat = format === 'todos'
        || (book.formatos || []).some(item => item.startsWith(format))
      const matchesOrigin = origin === 'todos' || book.origen === origin
      return matchesTerm && matchesFormat && matchesOrigin
    })
  }, [term, format, origin])

  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE))
  const safePage = Math.min(page, pageCount)
  const visible = results.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  const resetPage = setter => event => {
    setter(event.target.value)
    setPage(1)
  }

  return <section className="editorial-udg" aria-labelledby="editorial-udg-title">
    <header className="editorial-udg-hero">
      <div>
        <span>EDITORIAL UNIVERSIDAD DE GUADALAJARA / FILOSOFÍA</span>
        <h3 id="editorial-udg-title">Obras filosóficas de Editorial UdeG</h3>
        <p>
          Corpus temático de publicaciones filosóficas de la Editorial Universidad de Guadalajara.
          Se mantiene separado de las obras de clase y del inventario personal: aparecer aquí no
          significa que una obra sea tesis, que se posea un ejemplar ni que haya sido leída.
        </p>
      </div>
      <dl>
        <div><dt>Corpus filosófico</dt><dd>{editorialUdgBooks.length}</dd></div>
        <div><dt>Categoría oficial</dt><dd>{editorialUdgCatalogMeta.officialPhilosophyCount}</dd></div>
        <div><dt>Relacionadas verificadas</dt><dd>{editorialUdgCatalogMeta.relatedVerifiedCount}</dd></div>
        <div><dt>Fecha de corte</dt><dd>{editorialUdgCatalogMeta.capturedAt}</dd></div>
      </dl>
    </header>

    <p className="editorial-udg-audit" role="note">
      Criterio: se incluyen todos los títulos que Editorial UdeG clasifica bajo «Filosofía» y,
      además, títulos fuera de ese filtro cuando la propia ficha editorial documenta de forma
      explícita un contenido filosófico —por ejemplo ética, epistemología, lógica, argumentación,
      metafísica u ontología—. No se incluyen libros sólo por pertenecer a Humanidades.
    </p>

    <div className="editorial-udg-controls editorial-udg-controls--three">
      <label>
        <span>BUSCAR EN EL CORPUS</span>
        <input type="search" value={term} onChange={resetPage(setTerm)}
          placeholder="Título, autor, tema o criterio…" />
      </label>
      <label>
        <span>PROCEDENCIA</span>
        <select value={origin} onChange={resetPage(setOrigin)}>
          <option value="todos">Todo el corpus</option>
          <option value="categoria-oficial">Categoría oficial Filosofía</option>
          <option value="relacion-verificada">Relación filosófica verificada</option>
        </select>
      </label>
      <label>
        <span>FORMATO</span>
        <select value={format} onChange={resetPage(setFormat)}>
          <option value="todos">Todos los formatos</option>
          {formats.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
    </div>

    <div className="editorial-udg-resultline" aria-live="polite">
      <strong>{results.length}</strong> obras encontradas
      <span>METADATOS Y ENLACES · SIN COPIAS LOCALES DE LOS LIBROS</span>
    </div>

    {visible.length > 0 ? <div className="editorial-udg-grid">
      {visible.map(book => <article key={book.id} className="editorial-udg-card">
        <div className="editorial-udg-card-top">
          <span>#{String(book.ordenFuente).padStart(2,'0')}</span>
          <span className={'editorial-udg-origin editorial-udg-origin--'+book.origen}>
            {originLabel(book.origen)}
          </span>
        </div>
        <p>{book.autor}</p>
        <h4>{book.titulo}</h4>
        <small className="editorial-udg-criterion">{book.criterio}</small>
        {book.formatos?.length > 0 && <div className="editorial-udg-formats">
          {book.formatos.map(item => <span key={item}>{item}</span>)}
        </div>}
        <a href={book.url} target="_blank" rel="noopener noreferrer">
          Abrir ficha oficial ↗
        </a>
      </article>)}
    </div> : <div className="editorial-udg-empty">
      <strong>Sin coincidencias.</strong>
      <p>Pruebe otra palabra o quite alguno de los filtros.</p>
    </div>}

    {pageCount > 1 && <nav className="editorial-udg-pagination" aria-label="Paginación del corpus filosófico Editorial UdeG">
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
        Abrir filtro oficial Filosofía ↗
      </a>
    </footer>
  </section>
}
