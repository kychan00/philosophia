import test from 'node:test'
import assert from 'node:assert/strict'
import { books, authors, categories } from '../src/data/libraryCatalog.js'

test('catalogue completeness and unique names',()=>{
 assert.equal(books.length,60)
 assert.equal(authors.length,81)
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
test('exactly two documented recommendations',()=>{
 const r=books.filter(x=>x.estado==='recomendada')
 assert.equal(r.length,2)
 assert.ok(r.every(x=>x.url.startsWith('https://archive.org/details/')))
 assert.ok(r.some(x=>x.autor==='Illouz'&&x.lectura==='Pendiente'))
 assert.ok(r.some(x=>x.autor==='Lukács'&&x.lectura==='Fase 1 documentada'))
})
