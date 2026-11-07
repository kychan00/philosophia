import assert from 'node:assert/strict'
import test from 'node:test'
import { editorialUdgBooks, editorialUdgCatalogMeta } from '../src/data/editorialUdgCatalog.generated.js'

test('corpus filosófico Editorial UdeG conserva sus dos capas de procedencia', () => {
  assert.equal(editorialUdgCatalogMeta.officialPhilosophyCount, 24)
  assert.equal(editorialUdgCatalogMeta.relatedVerifiedCount, 9)
  assert.equal(editorialUdgCatalogMeta.totalFetched, 33)
  assert.equal(editorialUdgBooks.length, 33)

  const official = editorialUdgBooks.filter(book => book.origen === 'categoria-oficial')
  const related = editorialUdgBooks.filter(book => book.origen === 'relacion-verificada')
  assert.equal(official.length, 24)
  assert.equal(related.length, 9)
})

test('cada registro filosófico tiene identidad, criterio y enlace oficial único', () => {
  const urls = new Set(editorialUdgBooks.map(book => book.url))
  const ids = new Set(editorialUdgBooks.map(book => book.id))
  assert.equal(urls.size, editorialUdgBooks.length, 'no debe haber URLs duplicadas')
  assert.equal(ids.size, editorialUdgBooks.length, 'no debe haber IDs duplicados')

  for (const book of editorialUdgBooks) {
    assert.ok(book.titulo?.trim(), 'cada registro necesita título')
    assert.ok(book.autor?.trim(), 'cada registro necesita autor')
    assert.ok(book.criterio?.trim(), 'cada registro necesita criterio de inclusión')
    assert.ok(['categoria-oficial','relacion-verificada'].includes(book.origen))
    const url = new URL(book.url)
    assert.equal(url.protocol, 'https:')
    assert.equal(url.hostname, 'editorial.udg.mx')
  }
})

test('el corpus incluye filosofía fuera del filtro oficial sin incorporar religión por defecto', () => {
  const titles = new Set(editorialUdgBooks.map(book => book.titulo))
  assert.ok(titles.has('Análisis filosófico'))
  assert.ok(titles.has('Problemas éticos contemporáneos'))
  assert.ok(titles.has('Conocimiento y ciencia'))
  assert.ok(titles.has('Introducción a la teoría de la argumentación'))
  assert.ok(titles.has('De la metodología a la argumentación en ciencias sociales'))

  assert.ok(!titles.has('Espiritualidad sin religión'))
  assert.ok(!titles.has('La idea de Dios en Guadalajara'))
  assert.ok(!titles.has('Voces contra la ortodoxia'))
})

test('la instantánea declara fecha, fuente y límites documentales', () => {
  assert.equal(
    editorialUdgCatalogMeta.source,
    'https://editorial.udg.mx/libros.html?cat=144&manufacturer=5606'
  )
  assert.match(editorialUdgCatalogMeta.capturedAt, /^\d{4}-\d{2}-\d{2}$/)
  assert.match(editorialUdgCatalogMeta.note, /corpus externo/i)
})
