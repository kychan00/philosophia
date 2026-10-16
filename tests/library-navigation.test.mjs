import test from 'node:test'
import assert from 'node:assert/strict'
import { books, authors } from '../src/data/libraryCatalog.js'
import {
  normalizeLibraryText,
  surnameFromAuthorRecord,
  isWorkByAuthor,
  worksByAuthor,
  authorsForWork,
} from '../src/data/libraryCatalogUtils.js'

test('acentos y caracteres especiales no impiden buscar autores', () => {
  assert.equal(normalizeLibraryText('Føllesdal'), 'follesdal')
  assert.equal(normalizeLibraryText('Ética Nicomáquea'), 'etica nicomaquea')
  assert.equal(normalizeLibraryText('Straße'), 'strasse')
  assert.equal(normalizeLibraryText(''), '')
})

test('cada filtro de autor sólo devuelve obras atribuidas', () => {
  const lukacs = worksByAuthor(books, 'Lukács, Georg')
  assert.equal(lukacs.length, 2)
  assert.ok(lukacs.every(book => book.autor === 'Lukács'))
  assert.equal(worksByAuthor(books, 'Illouz, Eva').length, 2)
  assert.equal(worksByAuthor(books, 'Kant, Immanuel').length, 1)
  assert.equal(worksByAuthor(books, 'Adorno, Theodor W.').length, 1)
  assert.equal(worksByAuthor(books, 'Luciano de Samósata').length, 1)
})

test('la autoría compartida no genera relaciones falsas', () => {
  assert.equal(surnameFromAuthorRecord('Sautu, Ruth'), 'Sautu')
  assert.equal(worksByAuthor(books, 'Sautu, Ruth').length, 1)
  assert.equal(worksByAuthor(books, 'Wainerman, Catalina').length, 1)
  assert.equal(isWorkByAuthor({autor:'Wainerman y Sautu'}, 'Russell, Bertrand'), false)
  assert.equal(authors.length,86)
})

test('Ética Nicomáquea pertenece al área editorial de ética', () => {
  const book = books.find(book => book.id === 'Aristóteles - Ética Nicomáquea')
  assert.equal(book?.categoria, 'ética')
})

test('autoría canónica y apellidos compuestos',()=>{
 for(const book of books) assert.ok(authorsForWork(book,authors).length>0,book.id)
 assert.deepEqual(new Set(authorsForWork(books.find(b=>b.id==='Reale y Antiseri - Escuela de Frankfurt'),authors)),
   new Set(['Reale, Giovanni','Antiseri, Dario']))
 assert.equal(worksByAuthor(books,'Ortega y Gasset, José').length,2)
 assert.equal(worksByAuthor(books,'Rodríguez Pelayo, Cristian Alejandro').length,2)
 assert.equal(worksByAuthor(books,'Barceló Aspeitia, Axel Arturo').length,1)
 assert.equal(worksByAuthor(books,'Luciano de Samósata').length,1)
})
