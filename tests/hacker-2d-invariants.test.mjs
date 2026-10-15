import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { hackerNodes, hackerOrder, hackerRoutes, hackerGuidedRoute, hackerEdges } from '../src/data/hackerAnalyticSystem.js'
const ids = hackerNodes.map((n) => n.id)
const byId = new Map(hackerNodes.map((n) => [n.id, n]))
const page = readFileSync(new URL('../src/pages/AnalyticHackerSystem.jsx', import.meta.url), 'utf8')
const moduleCode = readFileSync(new URL('../src/components/philosophy/system2d/SectionPedagogy.jsx', import.meta.url), 'utf8')

test('Hacker nodes and canonical reading order cover the same unique set', () => {
  assert.equal(new Set(ids).size, ids.length)
  assert.equal(new Set(hackerOrder).size, hackerOrder.length)
  assert.deepEqual([...ids].sort(), [...hackerOrder].sort())
})
test('Every route includes at least one node', () => {
  for (const route of hackerRoutes.filter((r) => r.id !== 'all')) {
    assert.ok(hackerNodes.some((n) => n.data.branch.includes(route.id)), route.id)
  }
})
test('Every edge and dependency resolves within the dataset', () => {
  for (const n of hackerNodes) for (const dep of n.data.dependsOn || [])
    assert.ok(byId.has(dep), n.id + ' <- ' + dep)
  for (const e of hackerEdges) assert.ok(byId.has(e.source) && byId.has(e.target), e.id)
})
test('Article guided route is complete and excludes class-only nodes', () => {
  const expected = hackerOrder.filter((id) => !byId.get(id)?.data.classOnly)
  assert.deepEqual(hackerGuidedRoute.map((s) => s.id), expected)
})
test('Hacker headline node count is derived from source data', () => {
  assert.match(page, /hacker-study-mark"[^>]*>\{hackerNodes\.length\}/)
  assert.match(page, /\{hackerNodes\.length\} nodos/)
  assert.doesNotMatch(page, /82 nodos/)
})
test('Per-section rail uses canonical order; selection does not run global fitView', () => {
  assert.match(page, /nodeOrder=\{hackerOrder\}/)
  assert.match(moduleCode, /aria-current=\{index === currentIndex/)
  assert.match(page, /\}, \[route, guidedMode, getNodes, fitView\]\)/)
  assert.doesNotMatch(page, /\}, \[route, guidedMode, getNodes, fitView, nodes\]\)/)
})
