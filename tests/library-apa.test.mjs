import test from 'node:test'
import assert from 'node:assert/strict'
import { books,authors } from '../src/data/libraryCatalog.js'
import { libraryApaMetadata } from '../src/data/libraryApaMetadata.js'
import { formatApaRecord,apaAuthorName } from '../src/data/libraryApa.js'

test('APA para todas las obras, sin entradas huérfanas ni ediciones supuestas',()=>{
 assert.equal(Object.keys(libraryApaMetadata).length,books.length)
 assert.deepEqual(Object.keys(libraryApaMetadata).sort(),books.map(b=>b.id).sort())
 for(const book of books){
   const record=formatApaRecord(book,authors)
   assert.ok(record.text.length>15,book.id)
   assert.ok(record.text.includes('('+record.year+')'),book.id)
   assert.ok(!/undefined|null|\[object Object\]/.test(record.text),book.id)
   assert.ok(record.parts.some(p=>p.text.includes(book.titulo.split(' ')[0]))||record.text.length>25)
   assert.ok(record.status==='pendiente'||record.status==='preparada')
   if(record.year==='s. f.')assert.ok(record.issues.includes('año de la edición consultada'))
   assert.ok(!('posesion' in libraryApaMetadata[book.id]))
   assert.ok(!('vaultPath' in libraryApaMetadata[book.id]))
 }
})

test('APA reconoce autorías simples, compartidas y compuestas',()=>{
 assert.equal(apaAuthorName('Ortega y Gasset, José'),'Ortega y Gasset, J.')
 assert.equal(apaAuthorName('Glock, Hans-Johann'),'Glock, H.-J.')
 assert.equal(apaAuthorName('Luciano de Samósata'),'Luciano de Samósata')
 const reale=formatApaRecord(books.find(b=>b.id==='Reale y Antiseri - Escuela de Frankfurt'),authors)
 assert.ok(reale.text.startsWith('Reale, G., & Antiseri, D.'))
 const ortega=formatApaRecord(books.find(b=>b.id==='Ortega y Gasset - Meditaciones del Quijote'),authors)
 assert.match(ortega.text,/^Ortega y Gasset, J\. \(s\. f\.\)/)
 assert.equal(ortega.originalYear,1914)
})

test('años constatados y capítulos en volumen editado, sin adjudicar fecha digital a edición',()=>{
 const cite=id=>formatApaRecord(books.find(b=>b.id===id),authors)
 assert.match(cite('Illouz - El consumo de la utopía romántica').text,/\(2009\).*Katz Editores/)
 assert.match(cite('Lukács - Marx, ontología del ser social').text,/\(2007\).*Ediciones Akal/)
 assert.match(cite('Føllesdal - Filosofía analítica - qué es y por qué involucrarse').text,/\(2013\).*Glock \(Ed\.\).*19–42.*Círculo Ometeotl/)
 assert.match(cite('Hacker - El surgimiento de la filosofía analítica del siglo XX').text,/\(2013\).*95–132/)
 assert.match(cite('Luciano - El banquete o los lapitas').text,/\(s\. f\.\)/)
 assert.match(cite('Spinoza - Ética demostrada según el orden geométrico - Vidal Peña').text,/\(s\. f\.\)/)
 assert.match(cite('Platón - Cármides').text,/\(1927\)\. Charmides \(W\. R\. M\. Lamb, Trad\.\)\. En/)
 assert.match(cite('Hipócrates - Sobre la dieta').text,/\(1997\).*Tratados hipocráticos/)
 assert.equal(cite('Platón - Leyes').status,'pendiente')
 assert.ok(!cite('BonJour - Teoría coherentista del conocimiento empírico').parts.some(p=>p.italic))
})

test('trabajos propios citados como no publicados y estudio ≠ obra entera',()=>{
 const own=formatApaRecord(books.find(b=>b.id==='Pelayo - Realismo virtual constructivista'),authors)
 assert.match(own.text,/\(2026\).*Trabajo académico no publicado/)
 assert.equal(own.kind,'manuscript')
 const marx=formatApaRecord(books.find(b=>b.id==='Marx - El capital - Tomo I - Scaron 2008'),authors)
 assert.equal(marx.year,'2008')
 assert.match(marx.studyPart,/reimpresión/)
})
