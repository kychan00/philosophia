import test from 'node:test'
import assert from 'node:assert/strict'
import { books, authors, categories } from '../src/data/libraryCatalog.js'

test('catalogue completeness and unique names',()=>{
 assert.equal(books.length,63)
 assert.equal(authors.length,86)
 assert.equal(new Set(books.map(x=>x.id)).size,books.length)
 assert.equal(new Set(authors).size,authors.length)
})
test('all works are categorized, no ownership inferred',()=>{
 for(const book of books){
  assert.ok(book.autor && book.titulo)
  assert.ok(categories.includes(book.categoria))
  assert.ok(!('posesion' in book))
 }
})
test('four recommendations without invented editions or external URLs',()=>{
 const recommended=books.filter(x=>x.estado==='recomendada')
 assert.equal(recommended.length,4)
 assert.deepEqual(new Set(recommended.map(x=>x.id)),new Set([
  'Adorno - Minima Moralia',
  'Illouz - Intimidades congeladas',
  'Illouz - El consumo de la utopía romántica',
  'Lukács - Marx, ontología del ser social',
 ]))
 assert.ok(recommended.every(x=>!x.url || x.url.startsWith('https://archive.org/details/')))
 assert.ok(recommended.every(x=>!('posesion' in x)))
 for (const id of ['Adorno - Minima Moralia','Illouz - Intimidades congeladas']) {
   const book=recommended.find(x=>x.id===id)
   assert.equal(book?.lectura,'Pendiente')
   assert.equal(book?.url,undefined)
   assert.equal(book?.edicion,undefined)
 }
 assert.ok(recommended.some(x=>x.autor==='Lukács'&&x.lectura==='Fase 1 documentada'))
})
