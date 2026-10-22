import test from 'node:test'
import assert from 'node:assert/strict'
import { books, authors, categories } from '../src/data/libraryCatalog.js'

test('catalogue completeness and unique names',()=>{
 assert.ok(books.some(x=>x.id==='Foucault - Vigilar y castigar'))
 assert.ok(authors.includes('Foucault, Michel'))
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
test('recommendations with verified origins and no invented possession',()=>{
 const recommended=books.filter(x=>x.estado==='recomendada')
 assert.equal(recommended.length,10)
 assert.deepEqual(new Set(recommended.map(x=>x.id)),new Set([
  'Adorno - Minima Moralia',
  'Foucault - Vigilar y castigar',
  'Dilthey - Hegel y el idealismo',
  "Rendón - La lucha por el reconocimiento en el fragmento de 1803-1804 de Hegel",
  'Cicerón - Las paradojas de los estoicos',
  'Illouz - Intimidades congeladas',
  'Illouz - El consumo de la utopía romántica',
  'Lukács - Marx, ontología del ser social',
  'Nava - Tecnociencia, entorno y sujeto tecnocientífico',
  'Popper - La lógica de la investigación científica',
 ]))
 assert.ok(recommended.every(x=>!x.url || x.url.startsWith('https://archive.org/details/') || x.url.startsWith('https://www.revistadefilosofia.org/index.php/ERF/article/view/') || x.url.startsWith('https://revistas.pucp.edu.pe/index.php/arete/') || x.url.startsWith('https://raularagon.com.ar/biblioteca/libros/')))
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

test('Cicerón conserva seis tesis sin fingir lectura personal',()=>{
 const b=books.find(x=>x.id==='Cicerón - Las paradojas de los estoicos')
 assert.ok(b)
 assert.equal(b.categoria,'ética')
 assert.equal(b.estado,'recomendada')
 assert.match(b.lectura,/Pendiente/)
 assert.equal(b.ideas.length,6)
 assert.ok(authors.includes('Cicerón, Marco Tulio'))
 assert.ok(!('posesion' in b))
})


test('Dilthey: recomendación de Ontología II con nueve ejes sin inferir lectura ni posesión',()=>{
 const b=books.find(x=>x.id==='Dilthey - Hegel y el idealismo')
 assert.ok(b)
 assert.equal(b.autor,'Dilthey')
 assert.equal(b.estado,'recomendada')
 assert.equal(b.categoria,'ontología')
 assert.equal(b.ideas.length,9)
 assert.ok(b.lectura.includes('Pendiente'))
 assert.ok(authors.includes('Dilthey, Wilhelm'))
 assert.equal(b.url,'https://archive.org/details/dilthey-wilhelm.-hegel-y-el-idealismo-1944_202011')
 assert.ok(!('posesion' in b))
})


test('Rendón: segunda recomendación de Ontología II, sin atribuir posesión o lectura personal',()=>{
 const b=books.find(x=>x.id==="Rendón - La lucha por el reconocimiento en el fragmento de 1803-1804 de Hegel")
 assert.ok(b)
 assert.equal(b.autor,'Rendón')
 assert.equal(b.categoria,'ontología')
 assert.equal(b.estado,'recomendada')
 assert.equal(b.ideas.length,12)
 assert.ok(authors.includes('Rendón, Carlos'))
 assert.ok(b.lectura.includes('Pendiente de confirmación personal'))
 assert.equal(b.url,"https://revistas.pucp.edu.pe/index.php/arete/es/article/view/1698")
 assert.ok(!('posesion' in b))
})
