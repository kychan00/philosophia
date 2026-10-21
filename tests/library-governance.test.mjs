import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { books, authors } from '../src/data/libraryCatalog.js'
import { authorsForWork, worksByAuthor } from '../src/data/libraryCatalogUtils.js'
import { libraryTimelines } from '../src/data/libraryTimelines.js'
import { libraryAcademicConnections as connected } from '../src/data/libraryAcademicConnections.js'

const source=readFileSync(new URL('../src/App.jsx',import.meta.url),'utf8')
const validRoutes=new Set([...source.matchAll(/<Route\s+path="([^"]+)"/g)].map(m=>m[1]))
const workIds=new Set(books.map(b=>b.id))
const authorIds=new Set(authors)
const allEntries=[
 ...Object.values(libraryTimelines.works).flat(),
 ...Object.values(libraryTimelines.authors).flat(),
 ...Object.values(connected.works).flatMap(r=>r.events),
 ...Object.values(connected.authors).flatMap(r=>r.events),
]

test('autoría y procedencia para todos los registros públicos',()=>{
 assert.equal(workIds.size,books.length,'obras repetidas')
 assert.equal(authorIds.size,authors.length,'autores repetidos')
 assert.deepEqual(Object.keys(connected.works).sort(),[...workIds].sort())
 assert.deepEqual(Object.keys(connected.authors).sort(),[...authorIds].sort())
 for(const book of books){
  assert.ok(authorsForWork(book,authors).length>0,'autor faltante: '+book.id)
  assert.ok((libraryTimelines.works[book.id]?.length||0)+(connected.works[book.id]?.events.length||0)>0,
    'sin procedencia: '+book.id)
 }
 for(const author of authors){
  assert.ok(worksByAuthor(books,author).length+
    (libraryTimelines.authors[author]?.length||0)+
    (connected.authors[author]?.events.length||0)>0,
    'autor sin relación: '+author)
 }
})

test('enlaces y datos trazables sin acceso a rutas privadas',()=>{
 for(const entry of allEntries){
  assert.ok(entry.area && entry.title,'evento incompleto')
  assert.ok(entry.date===null||/^2026-\d{2}-\d{2}$/.test(entry.date))
  assert.ok(entry.url===null||validRoutes.has(entry.url),'ruta sin página: '+entry.url)
  assert.ok(!('posesion' in entry)&&!('vaultPath' in entry))
  assert.ok(!('estado_lectura' in entry))
 }
})

test('conservar a Luciano y la regla de lectura parcial',()=>{
 const book=books.find(b=>b.id==='Luciano - El banquete o los lapitas')
 assert.ok(book)
 assert.match(book.lectura,/27–48/)
 assert.ok(authors.includes('Luciano de Samósata'))
 assert.ok(libraryTimelines.works[book.id]?.some(e=>e.url==='/semestre/5/etica/clase/13-octubre'))
 assert.ok(connected.works[book.id])
})

test('Foucault se registra sólo como recomendación, con edición y lectura delimitadas',()=>{
 const id='Foucault - Vigilar y castigar'
 const b=books.find(w=>w.id===id)
 assert.ok(b)
 assert.equal(b.estado,'recomendada')
 assert.equal(b.categoria,'crítica')
 assert.equal(b.url,'https://archive.org/details/FoucaultVigilarYCastigar')
 assert.match(b.lectura,/Pendiente/)
 assert.ok(authorsForWork(b,authors).includes('Foucault, Michel'))
 const event=connected.works[id]?.events?.[0]
 assert.ok(event)
 assert.equal(event.kind,'procedencia')
 assert.equal(event.date,'2026-10-20')
 assert.equal(event.url,null)
 assert.match(event.dateLabel,/registro/)
 assert.equal(libraryTimelines.works[id],undefined)
})

test('Cicerón: recomendación de Ética sin clase inventada ni lectura completa',()=>{
 const id='Cicerón - Las paradojas de los estoicos'
 const book=books.find(b=>b.id===id)
 assert.ok(book)
 assert.equal(book.categoria,'ética')
 assert.equal(book.estado,'recomendada')
 assert.ok(authorsForWork(book,authors).includes('Cicerón, Marco Tulio'))
 assert.equal(libraryTimelines.works[id],undefined)
 const e=connected.works[id].events[0]
 assert.equal(e.kind,'procedencia')
 assert.equal(e.date,'2026-10-20')
 assert.equal(e.url,null)
 assert.match(e.dateLabel,/registro/)
})


test('Dilthey: recomendación con procedencia y sin sesión pública inventada',()=>{
 const id='Dilthey - Hegel y el idealismo'
 const book=books.find(b=>b.id===id)
 assert.ok(book)
 assert.equal(book.ideas.length,9)
 const event=connected.works[id]?.events?.[0]
 assert.ok(event)
 assert.equal(event.kind,'procedencia')
 assert.equal(event.date,'2026-10-21')
 assert.equal(event.url,null)
 assert.equal(libraryTimelines.works[id],undefined)
 assert.ok(authorsForWork(book,authors).includes('Dilthey, Wilhelm'))
})
