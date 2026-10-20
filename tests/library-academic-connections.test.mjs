import test from 'node:test'
import assert from 'node:assert/strict'
import { books, authors } from '../src/data/libraryCatalog.js'
import { authorsForWork, worksByAuthor } from '../src/data/libraryCatalogUtils.js'
import { libraryTimelines } from '../src/data/libraryTimelines.js'
import { libraryAcademicConnections as docs } from '../src/data/libraryAcademicConnections.js'

test('todas las obras poseen autoría canónica e historial documentado',()=>{
 assert.equal(Object.keys(docs.works).length,books.length)
 assert.deepEqual(Object.keys(docs.works).sort(),books.map(x=>x.id).sort())
 for(const b of books){
  assert.ok(authorsForWork(b,authors).length>0,'sin autoría: '+b.id)
  const sources=[...(libraryTimelines.works[b.id]||[]),...(docs.works[b.id]?.events||[])]
  assert.ok(sources.length>0,'sin referencia documental: '+b.id)
 }
})

test('todos los autores se relacionan con obras, tareas, clases o su ficha de estudio',()=>{
 assert.equal(Object.keys(docs.authors).length,authors.length)
 assert.deepEqual(Object.keys(docs.authors).sort(),[...authors].sort())
 for(const author of authors){
  const associated=worksByAuthor(books,author)
  const other=(libraryTimelines.authors[author]||[]).length+(docs.authors[author]?.events||[]).length
  assert.ok(associated.length+other>0,'autor sin vínculo: '+author)
 }
})

test('las notas de tarea conservan su naturaleza, sin inventar lecturas ni fechas',()=>{
 assert.equal(docs.tasksReviewed,61)
 const all=Object.values(docs.works).flatMap(x=>x.events)
 assert.ok(all.some(x=>x.area==='Cosmología' && x.title.includes('El universo como problema')))
 assert.ok(all.some(x=>x.area==='Cosmología' && x.title.includes('Materia, universo, vida')))
 assert.ok(all.some(x=>x.title.includes('Trabajo final') && x.area==='Filosofía de la Lógica'))
 assert.ok(all.some(x=>x.kind==='procedencia' && x.date===null))
 for(const event of all){
  assert.ok(event.kind==='tarea'||event.kind==='procedencia')
  assert.ok(event.date===null||/^2026-\d{2}-\d{2}$/.test(event.date))
  assert.ok(!('posesion' in event) && !('vaultPath' in event))
  assert.ok(event.url===null || event.url.startsWith('/'))
 }
})
