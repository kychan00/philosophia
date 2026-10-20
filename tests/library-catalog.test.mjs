import test from 'node:test'
import assert from 'node:assert/strict'
import { books, authors, categories } from '../src/data/libraryCatalog.js'

test('catalogue completeness and unique names',()=>{
 assert.equal(books.length,69)
 assert.equal(authors.length,88)
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
test('five recommendations with verified origins and no invented possession',()=>{
 const recommended=books.filter(x=>x.estado==='recomendada')
 assert.equal(recommended.length,5)
 assert.deepEqual(new Set(recommended.map(x=>x.id)),new Set([
  'Adorno - Minima Moralia',
  'Illouz - Intimidades congeladas',
  'Illouz - El consumo de la utopía romántica',
  'Lukács - Marx, ontología del ser social',
  'Nava - Tecnociencia, entorno y sujeto tecnocientífico',
 ]))
 assert.ok(recommended.every(x=>!x.url || x.url.startsWith('https://archive.org/details/') || x.url.startsWith('https://www.revistadefilosofia.org/index.php/ERF/article/view/')))
 assert.ok(recommended.every(x=>!('posesion' in x)))
 for (const id of ['Adorno - Minima Moralia','Illouz - Intimidades congeladas']) {
   const book=recommended.find(x=>x.id===id)
   assert.equal(book?.lectura,'Pendiente')
   assert.equal(book?.url,undefined)
   assert.equal(book?.edicion,undefined)
 }
 assert.ok(recommended.some(x=>x.autor==='Lukács'&&x.lectura.startsWith('Fases 1–6 documentadas')&&x.lectura.includes('fuente disponible')))
 assert.ok(recommended.some(x=>x.autor==='Nava Amezcua'&&x.lectura.startsWith('Sin confirmar')))
})
