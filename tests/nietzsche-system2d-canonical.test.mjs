import test from 'node:test'
import assert from 'node:assert/strict'
import {
  nietzscheSystem2DEdges,
  nietzscheSystem2DGuidedRoute,
  nietzscheSystem2DNodeById,
  nietzscheSystem2DNodes,
  nietzscheSystem2DOrder,
  nietzscheSystem2DRouteOrder,
  nietzscheSystem2DRoutes,
  nietzscheSystem2DSource,
} from '../src/data/nietzscheTruthSystem2D.js'

test('Nietzsche 2D canónico: 28 nodos, 31 relaciones y guía completa', () => {
  assert.equal(nietzscheSystem2DNodes.length, 28)
  assert.equal(nietzscheSystem2DEdges.length, 31)
  assert.equal(nietzscheSystem2DOrder.length, 28)
  assert.equal(nietzscheSystem2DGuidedRoute.length, 28)
  assert.equal(new Set(nietzscheSystem2DOrder).size, 28)
  assert.deepEqual(nietzscheSystem2DGuidedRoute.map((step) => step.id), [...nietzscheSystem2DOrder])
})

test('Nietzsche 2D canónico: cada nodo conserva fuente literal, explicación, APA, folio y esquema', () => {
  for (const node of nietzscheSystem2DNodes) {
    assert.ok(node.data.code)
    assert.ok(node.data.title)
    assert.ok([21, 22, 23, 24].includes(node.data.page))
    assert.ok(node.data.excerpt)
    assert.doesNotMatch(node.data.excerpt, /pendiente/i)
    assert.ok(node.data.sourceFragments.length >= 1)
    assert.ok(node.data.sourceFragments.every((fragment) => fragment.page === node.data.page))
    assert.ok(node.data.explanation)
    assert.ok(node.data.simple)
    assert.match(node.data.apaShort, /Nietzsche, 2012/)
    assert.match(node.data.sourceRef, /Tecnos 2012/)
    assert.equal(node.data.questionProvenance, 'philosophia')
    assert.ok(node.data.schema?.nodes?.length >= 1)
    assert.ok(Array.isArray(node.data.dependsOn))
    assert.ok(Array.isArray(node.data.produces))
    assert.ok(Array.isArray(node.data.branch) && node.data.branch.length >= 1)
    assert.ok(node.data.topicTone)
  }
})

test('Nietzsche 2D canónico: rutas por folio cubren exactamente los 28 nodos', () => {
  const ids = new Set()
  for (const route of nietzscheSystem2DRoutes.filter((item) => item.id !== 'all')) {
    const order = nietzscheSystem2DRouteOrder(route.id)
    assert.ok(order.length >= 1, route.id)
    for (const id of order) {
      assert.ok(nietzscheSystem2DNodeById(id), id)
      ids.add(id)
    }
  }
  assert.equal(ids.size, 28)
  assert.deepEqual(
    nietzscheSystem2DRoutes.map((item) => item.id),
    ['all', 'p21', 'p22', 'p23', 'p24'],
  )
})

test('Nietzsche 2D canónico: dependencias y continuidades provienen de relaciones existentes', () => {
  const edgePairs = new Set(nietzscheSystem2DEdges.map((edge) => edge.source + '→' + edge.target))

  for (const node of nietzscheSystem2DNodes) {
    for (const id of node.data.dependsOn) {
      assert.ok(edgePairs.has(id + '→' + node.id), id + '→' + node.id)
    }
    for (const id of node.data.produces) {
      assert.ok(edgePairs.has(node.id + '→' + id), node.id + '→' + id)
    }
  }

  assert.ok(nietzscheSystem2DEdges.every((edge) => edge.reconstruction === true))
  assert.match(nietzscheSystem2DSource.boundary, /reconstrucción de estudio/i)
  assert.match(nietzscheSystem2DSource.boundary, /aparato editorial/i)
})

test('Nietzsche 2D canónico: distribución documental por página', () => {
  const count = (page) => nietzscheSystem2DNodes.filter((node) => node.data.page === page).length
  assert.equal(count(21), 3)
  assert.equal(count(22), 6)
  assert.equal(count(23), 12)
  assert.equal(count(24), 7)
  assert.equal(nietzscheSystem2DOrder.at(-1), 'S24-7')
  assert.match(nietzscheSystem2DNodeById('S24-7').data.title, /impulso hacia la verdad/i)
})
