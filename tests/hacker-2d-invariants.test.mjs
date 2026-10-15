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
  assert.match(page, /\[route, guidedMode, selectedId, routeNodes, thematicLayout, getNodes, fitView, setCenter\]/)
  assert.doesNotMatch(page, /\}, \[route, guidedMode, getNodes, fitView, nodes\]\)/)
})

test('Source notices avoid referring to private recording or transcription workflows', () => {
  assert.doesNotMatch(page, /transcripci[oó]n|grabaci[oó]n/i)
})

test('Starting a thematic guide cannot revert nodes to the whole-map positions', () => {
  assert.match(page, /position:\s*route !== 'all'\s*\? thematicLayout\.get\(node\.id\)/)
  assert.doesNotMatch(page, /route !== 'all' && !guidedMode\s*\? thematicLayout/)
  assert.match(page, /hidden:\s*route !== 'all' &&\s*!topicActive &&\s*!topicSupport/)
})
test('The selected guide node is focused only after the rendered layout commits', () => {
  assert.match(page, /window\.requestAnimationFrame\(\(\) => \{/)
  assert.match(page, /thematicLayout\.get\(node\.id\) \|\| node\.position/)
  assert.match(page, /\[selectedId, route, guidedMode, guidedIndex, thematicLayout, setCenter\]/)
  assert.doesNotMatch(page, /setCenter\(node\.position\.x \+ 115/)
})
test('iPad guide layout uses one readable map column', () => {
  const css = readFileSync(new URL('../src/pages/AnalyticHackerSystem.css', import.meta.url), 'utf8')
  assert.match(css, /@media \(max-width: 1180px\)/)
  assert.match(css, /grid-template-columns: minmax\(0, 1fr\);/)
  assert.match(css, /height: clamp\(380px, 53dvh, 610px\)/)
})
