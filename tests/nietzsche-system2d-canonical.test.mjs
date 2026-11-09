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
  nietzscheSystem2DStats,
} from '../src/data/nietzscheTruthSystem2D.js'

test('Nietzsche 2D canónico: 104 nodos, 151 relaciones, 226 fragmentos y guía completa', () => {
  assert.deepEqual(nietzscheSystem2DStats, {
    nodeCount: 104,
    edgeCount: 151,
    fragmentCount: 226,
    firstPage: 21,
    lastPage: 37,
  })
  assert.equal(nietzscheSystem2DNodes.length, 104)
  assert.equal(nietzscheSystem2DEdges.length, 151)
  assert.equal(nietzscheSystem2DOrder.length, 104)
  assert.equal(nietzscheSystem2DGuidedRoute.length, 104)
  assert.equal(new Set(nietzscheSystem2DOrder).size, 104)
  assert.deepEqual(nietzscheSystem2DGuidedRoute.map((step) => step.id), [...nietzscheSystem2DOrder])
})

test('Nietzsche 2D canónico: cada nodo conserva fuente literal, explicación, APA, folio y esquema', () => {
  for (const node of nietzscheSystem2DNodes) {
    assert.ok(node.data.code)
    assert.ok(node.data.title)
    assert.ok(node.data.page >= 21 && node.data.page <= 37)
    assert.ok(node.data.excerpt)
    assert.notEqual(node.data.excerpt, 'cita literal pendiente de cotejo')
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
    assert.ok(Array.isArray(node.data.transversalRelations))
    assert.ok(Array.isArray(node.data.branch) && node.data.branch.length >= 1)
    assert.ok(node.data.topicTone)
  }
})

test('Nietzsche 2D canónico: las rutas por folio cubren exactamente los 104 nodos', () => {
  const ids = new Set()
  for (const route of nietzscheSystem2DRoutes.filter((item) => item.id !== 'all')) {
    const order = nietzscheSystem2DRouteOrder(route.id)
    assert.ok(order.length >= 1, route.id)
    for (const id of order) {
      assert.ok(nietzscheSystem2DNodeById(id), id)
      ids.add(id)
    }
  }
  assert.equal(ids.size, 104)
  assert.deepEqual(
    nietzscheSystem2DRoutes.map((item) => item.id),
    ['all','p21','p22','p23','p24','p25','p26','p27','p28','p29','p30','p31','p32','p33','p34','p35','p36','p37'],
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
  assert.equal(nietzscheSystem2DSource.range, 'pp. 21–37')
})

test('Nietzsche 2D canónico: distribución documental por página', () => {
  const count = (page) => nietzscheSystem2DNodes.filter((node) => node.data.page === page).length
  assert.equal(count(21), 3)
  assert.equal(count(22), 6)
  assert.equal(count(23), 12)
  assert.equal(count(24), 10)
  assert.equal(count(25), 6)
  assert.equal(count(26), 5)
  assert.equal(count(27), 4)
  assert.equal(count(28), 6)
  assert.equal(count(29), 6)
  assert.equal(count(30), 5)
  assert.equal(count(31), 5)
  assert.equal(count(32), 4)
  assert.equal(count(33), 7)
  assert.equal(count(34), 7)
  assert.equal(count(35), 6)
  assert.equal(count(36), 6)
  assert.equal(count(37), 6)
  assert.equal(nietzscheSystem2DOrder.at(-1), 'S37-6')
})

test('Nietzsche 2D canónico: el tramo nuevo conserva el movimiento gnoseológico-ontológico', () => {
  assert.match(nietzscheSystem2DNodeById('S24-9').data.title, /verdad/i)
  assert.match(nietzscheSystem2DNodeById('S26-3').data.title, /cosa en sí/i)
  assert.match(nietzscheSystem2DNodeById('S27-3').data.title, /casos no iguales/i)
  assert.match(nietzscheSystem2DNodeById('S28-3').data.title, /metáforas.*antropomorfismos/i)
  assert.match(nietzscheSystem2DNodeById('S31-4').data.title, /Sujeto y objeto/i)
  assert.match(nietzscheSystem2DNodeById('S32-4').data.title, /ley natural/i)
  assert.match(nietzscheSystem2DNodeById('S33-1').data.title, /aportamos/i)
  assert.match(nietzscheSystem2DNodeById('S33-5').data.title, /formas/i)
  assert.match(nietzscheSystem2DNodeById('S34-5').data.title, /Mito y arte/i)
  assert.match(nietzscheSystem2DNodeById('S35-5').data.title, /fingir sin causar daño/i)
  assert.match(nietzscheSystem2DNodeById('S36-4').data.title, /intuiciones/i)
  assert.match(nietzscheSystem2DNodeById('S37-6').data.title, /máscara de fingimiento/i)
})
