import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { books, authors } from '../src/data/libraryCatalog.js'
import { documentedClassReferences, documentedClassReferenceStats } from '../src/data/libraryClassReferences.js'
import { libraryTimelines as enrichedTimelines } from '../src/data/libraryReferenceTimelines.js'
import { libraryTimelines as originalTimelines } from '../src/data/libraryTimelines.js'

const works = new Set(books.map(book=>book.id))
const people = new Set(authors)
const app = readFileSync(new URL('../src/App.jsx', import.meta.url),'utf8')

test('el índice recupera referencias de las nueve materias revisadas sin duplicar notas',()=>{
  assert.equal(documentedClassReferenceStats.examinedNotes,115)
  assert.equal(documentedClassReferenceStats.classesWithReferences,documentedClassReferences.length)
  assert.ok(documentedClassReferences.length >= 100)
  assert.equal(new Set(documentedClassReferences.map(x=>x.date+'|'+x.area+'|'+x.title)).size,documentedClassReferences.length)
  assert.equal(new Set(documentedClassReferences.map(x=>x.area)).size,9)
})

test('cada identificación apunta a ficha canónica y ninguna se confunde con lectura terminada',()=>{
  for(const note of documentedClassReferences){
    assert.match(note.date,/^2026-\d\d-\d\d$/)
    assert.ok(note.area && note.title)
    assert.ok(note.works.length + note.authors.length > 0)
    assert.equal(note.works.length,new Set(note.works).size)
    assert.equal(note.authors.length,new Set(note.authors).size)
    for(const id of note.works)assert.ok(works.has(id),'Obra sin ficha: '+id)
    for(const id of note.authors)assert.ok(people.has(id),'Autor sin ficha: '+id)
    if(note.url)assert.ok(app.includes('path="'+note.url+'"'),'Ruta inexistente: '+note.url)
    assert.ok(!('vaultPath' in note) && !('posesion' in note) && !('lectura' in note))
  }
})

test('la cronología extendida preserva todos los eventos históricos y agrega evidencias aditivas',()=>{
  for(const group of ['works','authors']){
    for(const [id,events] of Object.entries(originalTimelines[group])){
      assert.deepEqual(enrichedTimelines[group][id].slice(0,events.length),events)
    }
  }
  const analytic = enrichedTimelines.authors['Bolzano, Bernhard']
  assert.ok(analytic.some(x=>x.date==='2026-10-21'&&x.area==='Filosofía Analítica'))
})

test('Parménides como autor cosmológico no se adjudica al diálogo de Platón',()=>{
  const cosmos=documentedClassReferences.find(x=>x.date==='2026-02-06'&&x.area==='Cosmología')
  assert.ok(cosmos)
  assert.ok(cosmos.authors.includes('Parménides'))
  assert.ok(!cosmos.works.includes('Platón - Parménides'))
})
