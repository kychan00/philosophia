import test from 'node:test'
import assert from 'node:assert/strict'
import { lukacsReificationNodes } from '../src/data/lukacsReificationSystem.js'
import { lukacsSourcePassages } from '../src/data/lukacsReificationSourcePassages.js'

test('los 58 nodos de Lukács incluyen pasajes textuales extensos con folio PDF', () => {
  assert.equal(lukacsReificationNodes.length, 58)
  assert.equal(Object.keys(lukacsSourcePassages).length, 58)
  for (const node of lukacsReificationNodes) {
    const { sourcePassage, sourcePdfPage, excerpt, sourcePrintedPage, sourceAttribution } = node.data
    assert.ok(sourcePassage.length >= 240, node.id + ' debe tener un pasaje suficientemente largo')
    assert.ok(sourcePassage.length > excerpt.length, node.id + ' no puede reducirse a la antigua síntesis')
    assert.ok(Number.isInteger(sourcePdfPage) && sourcePdfPage >= 1 && sourcePdfPage <= 27)
    assert.ok(sourcePrintedPage && sourceAttribution)
    assert.equal(sourcePassage, lukacsSourcePassages[node.id].text)
  }
})

test('la página final sólo abre la sección II sin inventar su continuación', () => {
  const last = lukacsSourcePassages.L58
  assert.equal(last.pdfPage, 27)
  assert.match(last.text, /filosofía crítica moderna/)
})
