import assert from 'node:assert/strict'
import test from 'node:test'
import { editorialUdgBooks, editorialUdgCatalogMeta } from '../src/data/editorialUdgCatalog.generated.js'

test('snapshot Editorial UdeG conserva integridad de conteo y URLs', () => {
  assert.ok(editorialUdgCatalogMeta.totalFetched >= 800,
    'el snapshot debe contener el catálogo completo, no una muestra')
  assert.equal(editorialUdgBooks.length, editorialUdgCatalogMeta.totalFetched)
  assert.equal(editorialUdgBooks.length, editorialUdgCatalogMeta.catalogReportedCount)

  const urls = new Set(editorialUdgBooks.map(book => book.url))
  const ids = new Set(editorialUdgBooks.map(book => book.id))
  assert.equal(urls.size, editorialUdgBooks.length, 'no debe haber URLs duplicadas')
  assert.equal(ids.size, editorialUdgBooks.length, 'no debe haber IDs duplicados')

  for (const book of editorialUdgBooks) {
    assert.ok(book.titulo?.trim(), 'cada registro necesita título')
    assert.ok(book.autor?.trim(), 'cada registro necesita autor o marcador explícito')
    const url = new URL(book.url)
    assert.equal(url.protocol, 'https:')
    assert.equal(url.hostname, 'editorial.udg.mx')
    assert.ok(Number.isInteger(book.paginaFuente) && book.paginaFuente > 0)
    assert.ok(Number.isInteger(book.ordenFuente) && book.ordenFuente > 0)
  }
})

test('snapshot Editorial UdeG declara procedencia y fecha de corte', () => {
  assert.equal(editorialUdgCatalogMeta.source, 'https://editorial.udg.mx/catalogo.html')
  assert.match(editorialUdgCatalogMeta.capturedAt || '', /^\\d{4}-\\d{2}-\\d{2}$/)
  assert.match(editorialUdgCatalogMeta.note, /corpus institucional externo/i)
})
