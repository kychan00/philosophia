import test from 'node:test'
import assert from 'node:assert/strict'
import { books, authors } from '../src/data/libraryCatalog.js'
import { libraryTimelines } from '../src/data/libraryTimelines.js'

const workIds=new Set(books.map(x=>x.id))
const authorIds=new Set(authors)
const entries=Object.values(libraryTimelines.works).flat()
  .concat(Object.values(libraryTimelines.authors).flat())

test('las cronologías sólo enlazan fichas bibliográficas existentes',()=>{
 for(const id of Object.keys(libraryTimelines.works))assert.ok(workIds.has(id),id)
 for(const id of Object.keys(libraryTimelines.authors))assert.ok(authorIds.has(id),id)
 assert.ok(entries.length >= 300)
})

test('las entradas incluyen fecha y enlaces públicos opcionales, sin rutas privadas',()=>{
 for(const entry of entries){
  assert.match(entry.date,/^2026-\d{2}-\d{2}$/)
  assert.ok(entry.area && entry.title && entry.type)
  assert.ok(entry.url===null || /^\/semestre\/[45]\//.test(entry.url))
  assert.ok(!('vaultPath' in entry) && !('posesion' in entry) && !('estado_lectura' in entry))
 }
})

test('Adorno e Illouz tienen vínculo de clase, no se atribuye lectura del libro',()=>{
 for(const id of ['Adorno - Minima Moralia','Illouz - Intimidades congeladas']){
  const events=libraryTimelines.works[id]
  assert.ok(events?.some(e=>e.date==='2026-10-15' &&
    e.url==='/semestre/5/teoria-critica/clase/15-octubre'))
  assert.ok(!events.some(e=>e.type==='lectura terminada'))
 }
})

test('sin duplicados dentro de la cronología de una ficha',()=>{
 for(const group of [...Object.values(libraryTimelines.works),...Object.values(libraryTimelines.authors)]){
  const keys=group.map(e=>e.date+'|'+e.area+'|'+e.title)
  assert.equal(new Set(keys).size,keys.length)
 }
})
