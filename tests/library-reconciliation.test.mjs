import test from 'node:test'
import assert from 'node:assert/strict'
import { books, authors } from '../src/data/libraryCatalog.js'
import { libraryApaMetadata } from '../src/data/libraryApaMetadata.js'
import { libraryAcademicConnections } from '../src/data/libraryAcademicConnections.js'
import { authorsForWork } from '../src/data/libraryCatalogUtils.js'

const recovered=[
  'Bloch - Sujeto-objeto',
  'Fromm - Marx y su concepto del hombre',
  'Marx y Engels - La ideología alemana'
]
const historicalAuthors=['Bloch, Ernst','Bolzano, Bernhard','Boole, George','Cohen, Hermann']

test('conciliación de biblioteca: obras canónicas sin fichas duplicadas',()=>{
  for (const id of recovered) {
    const matches=books.filter(b=>b.id===id)
    assert.equal(matches.length,1,'Obra ausente o duplicada: '+id)
    const b=matches[0]
    assert.equal(b.categoria,'ontología')
    assert.equal(b.estado,'documentada')
    assert.ok(!('posesion' in b))
    assert.ok(b.lectura&&!/completada|finalizada/i.test(b.lectura))
    assert.ok(libraryApaMetadata[id])
    assert.equal(libraryAcademicConnections.works[id]?.events?.length,1)
    const evt=libraryAcademicConnections.works[id].events[0]
    assert.equal(evt.kind,'tarea')
    assert.equal(evt.date,'2026-10-19')
    assert.equal(evt.url,null)
  }
})

test('distinguir autor del libro conjunto y autor de las Tesis sobre Feuerbach',()=>{
  const work=books.find(b=>b.id==='Marx y Engels - La ideología alemana')
  assert.deepEqual(authorsForWork(work,authors).sort(),['Engels, Friedrich','Marx, Karl'].sort())
  assert.match(work.lectura,/Karl Marx/)
  assert.match(libraryApaMetadata[work.id].studyPart,/Karl Marx/)
  assert.match(libraryAcademicConnections.works[work.id].events[0].note,/Marx/)
})

test('autorías y referencias Glock registradas sin inventar obras originales',()=>{
  for (const author of [...historicalAuthors,'Engels, Friedrich'])assert.ok(authors.includes(author),author)
  for (const author of ['Bolzano, Bernhard','Boole, George','Cohen, Hermann']) {
    const events=libraryAcademicConnections.authors[author]?.events
    assert.equal(events?.length,1)
    assert.equal(events[0].kind,'clase')
    assert.equal(events[0].url,null)
    assert.match(events[0].type,/no (leída|leído|acreditada)/)
  }
  assert.equal(books.length,79)
  assert.equal(authors.length,99)
  assert.deepEqual(Object.keys(libraryApaMetadata).sort(),books.map(b=>b.id).sort())
})
