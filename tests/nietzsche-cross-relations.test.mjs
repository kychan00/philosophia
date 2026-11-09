import test from 'node:test'
import assert from 'node:assert/strict'

import {
  nietzscheCloseReading21to24,
  nietzscheCloseReadingSchema21to24,
} from '../src/data/nietzscheTruthSystem.js'
import {
  nietzscheCloseReading24to33,
  nietzscheCloseReadingEdges24to33,
} from '../src/data/nietzscheTruthSystem24to33.js'
import {
  nietzscheCloseReading33to37,
  nietzscheCloseReadingEdges33to37,
} from '../src/data/nietzscheTruthSystem33to37.js'
import { nietzscheCrossRelations } from '../src/data/nietzscheTruthCrossRelations.js'
import {
  nietzscheSystem2DEdges,
  nietzscheSystem2DNodeById,
  nietzscheSystem2DStats,
} from '../src/data/nietzscheTruthSystem2D.js'

const fragments = [
  ...nietzscheCloseReading21to24,
  ...nietzscheCloseReading24to33,
  ...nietzscheCloseReading33to37,
]
const fragmentIds = new Set(fragments.map((item) => item.id))
const basePairs = new Set([
  ...nietzscheCloseReadingSchema21to24.edges,
  ...nietzscheCloseReadingEdges24to33,
  ...nietzscheCloseReadingEdges33to37,
].map((edge) => edge.from + '→' + edge.to))

test('Nietzsche 2D: 32 interconexiones transversales nuevas y sin duplicar la secuencia', () => {
  assert.equal(nietzscheCrossRelations.length, 32)
  assert.equal(new Set(nietzscheCrossRelations.map((edge) => edge.id)).size, 32)
  assert.equal(new Set(nietzscheCrossRelations.map((edge) => edge.from + '→' + edge.to)).size, 32)

  for (const edge of nietzscheCrossRelations) {
    assert.equal(edge.relationKind, 'transversal')
    assert.ok(nietzscheSystem2DNodeById(edge.from), edge.from)
    assert.ok(nietzscheSystem2DNodeById(edge.to), edge.to)
    assert.ok(edge.label)
    assert.ok(edge.theme)
    assert.ok(edge.note)
    assert.ok(edge.evidence.length >= 2)
    assert.ok(edge.evidence.every((id) => fragmentIds.has(id)), edge.id + ' evidence')
    assert.equal(basePairs.has(edge.from + '→' + edge.to), false, edge.id + ' duplicates base')
  }
})

test('Nietzsche 2D: las interconexiones conservan evidencia en ambos extremos', () => {
  const fragmentById = new Map(fragments.map((item) => [item.id, item]))

  for (const edge of nietzscheCrossRelations) {
    const fromPage = nietzscheSystem2DNodeById(edge.from).data.page
    const toPage = nietzscheSystem2DNodeById(edge.to).data.page
    const evidencePages = new Set(edge.evidence.map((id) => fragmentById.get(id)?.page))

    assert.ok(evidencePages.has(fromPage), edge.id + ' lacks source evidence')
    assert.ok(evidencePages.has(toPage), edge.id + ' lacks target evidence')
  }
})

test('Nietzsche 2D: derivación y relación transversal quedan separadas semánticamente', () => {
  const node = nietzscheSystem2DNodeById('S25-2')
  assert.deepEqual(node.data.dependsOn, ['S25-1'])
  assert.ok(node.data.transversalRelations.some((relation) =>
    relation.id === 'S23-4' && /engaño general/i.test(relation.label),
  ))
  assert.ok(node.data.transversalRelations.some((relation) =>
    relation.id === 'S35-5' && /sin daño/i.test(relation.label),
  ))
  assert.equal(node.data.dependsOn.includes('S23-4'), false)
  assert.equal(node.data.produces.includes('S35-5'), false)
})

test('Nietzsche 2D: el sistema completo alcanza 151 relaciones y conserva metadata transversal', () => {
  assert.equal(nietzscheSystem2DStats.edgeCount, 151)
  assert.equal(nietzscheSystem2DEdges.length, 151)

  const cross = nietzscheSystem2DEdges.filter((edge) => edge.relationKind === 'transversal')
  assert.ok(cross.length >= 32)
  assert.ok(cross.some((edge) =>
    edge.source === 'S25-2' &&
    edge.target === 'S35-5' &&
    edge.theme === 'engano' &&
    edge.evidence.includes('C35-13'),
  ))
})

test('Nietzsche 2D: recurrencias centrales quedan conectadas de inicio a cierre', () => {
  const pair = (from, to) => nietzscheCrossRelations.find((edge) => edge.from === from && edge.to === to)

  assert.match(pair('S22-3','S30-5')?.label || '', /humano.*medida/i)
  assert.match(pair('S23-6','S37-6')?.label || '', /máscara/i)
  assert.match(pair('S26-3','S32-4')?.label || '', /cosa en sí.*ley natural/i)
  assert.match(pair('S29-2','S36-4')?.label || '', /abstracción.*intuición/i)
  assert.match(pair('S34-5','S37-1')?.label || '', /arte.*cultura/i)
  assert.match(pair('S36-6','S37-3')?.label || '', /polo racional/i)
  assert.match(pair('S36-6','S37-4')?.label || '', /polo intuitivo/i)
})
