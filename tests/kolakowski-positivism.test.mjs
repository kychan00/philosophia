import test from 'node:test'
import assert from 'node:assert/strict'
import {
  kolakowskiCoreSchema,
  kolakowskiEdges,
  kolakowskiNodes,
  kolakowskiOrder,
  kolakowskiSchemaFor,
} from '../src/data/kolakowskiPositivismSystem.js'

test('Kołakowski 2D conserva ocho estaciones únicas y trazables', () => {
  assert.equal(kolakowskiNodes.length, 8)
  assert.equal(kolakowskiOrder.length, 8)
  assert.equal(new Set(kolakowskiOrder).size, 8)

  for (const node of kolakowskiNodes) {
    assert.match(node.data.sourceRef, /Kołakowski/)
    assert.match(node.data.sourceKind, /PARÁFRASIS/)
    assert.ok(node.data.source.length > 80)
    assert.ok(node.data.explanation.length > 60)
    assert.ok(node.data.question.endsWith('?'))
    assert.equal(node.data.diagram.length, 3)
    assert.ok(kolakowskiSchemaFor(node.id).nodes.length >= 3)
  }
})

test('las cuatro reglas están representadas y convergen en K07', () => {
  const ruleIds = ['K02', 'K03', 'K04', 'K05']
  for (const id of ruleIds) {
    assert.ok(kolakowskiNodes.some((node) => node.id === id))
    assert.ok(
      kolakowskiEdges.some(
        (edge) => edge.source === id && edge.target === 'K07',
      ),
    )
  }
})

test('ninguna relación 2D apunta a un nodo inexistente', () => {
  const ids = new Set(kolakowskiNodes.map((node) => node.id))
  for (const edge of kolakowskiEdges) {
    assert.ok(ids.has(edge.source))
    assert.ok(ids.has(edge.target))
  }
})

test('el esquema maestro contiene cuatro reglas y el límite anti-metafísico', () => {
  const ids = new Set(kolakowskiCoreSchema.nodes.map((node) => node.id))
  for (const id of [
    'fenomenalismo',
    'nominalismo',
    'valores',
    'metodo',
    'limite',
  ]) {
    assert.ok(ids.has(id))
  }
  assert.equal(kolakowskiCoreSchema.layout, 'hierarchy')
  assert.equal(kolakowskiCoreSchema.readingLayout, 'vertical-folio')
})
