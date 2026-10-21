import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { hackerNodes, hackerOrder, hackerRoutes, hackerGuidedRoute, hackerCompleteGuidedRoute, hackerEdges, hackerSource95to114, hackerSource115to132, hackerSource114to115Continuation } from '../src/data/hackerAnalyticSystem.js'
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

test('The integral route covers 122 nodes; the reading route covers only the 68 Hacker nodes', () => {
  assert.equal(hackerNodes.length, 122)
  assert.equal(hackerGuidedRoute.length, 68)
  assert.equal(hackerCompleteGuidedRoute.length, 122)
  assert.deepEqual(hackerCompleteGuidedRoute.map((step) => step.id), hackerOrder)
  assert.match(page, /Guía del artículo/)
  assert.match(page, /Guía integral/)
  assert.doesNotMatch(page, /id: \`guided-\$\{guidedStep\.id\}/)
})

test('Both omitted course dates are traceable classroom routes, without duplicating the essay', () => {
  for (const [route, date, source, ids] of [
    ['class28', '28 sep 2026', '28-septiembre', ['H24','H25','H26','H27','H28','H29']],
    ['class07oct', '7 oct 2026', '7-octubre', ['H38','H40','H43','H45','H46','H47','H48','H49']],
  ]) {
    assert.ok(hackerRoutes.some((item) => item.id === route))
    for (const id of ids) {
      const data = byId.get(id)?.data
      assert.ok(data?.branch.includes(route), id)
      assert.ok(data?.additionalClassNotes?.some((note) =>
        note.date === date && note.route.endsWith(source) && note.note && note.label
      ), id)
      assert.notEqual(data.classOnly, true, 'Classroom crosswalk must not rewrite essay provenance')
    }
  }
})

test('The six facets and eight criticism points are siblings, not unsupported chains', () => {
  for (let i = 1; i <= 6; i++) {
    const node = byId.get('H41.' + i)
    assert.equal(node?.data.code, '41.' + i)
    assert.ok(node.data.dependsOn.includes('H41'))
    if (i > 1) assert.ok(!node.data.dependsOn.includes('H41.' + (i - 1)))
  }
  for (let i = 1; i <= 8; i++) {
    const node = byId.get('H52.' + i)
    assert.equal(node?.data.code, '52.' + i)
    assert.ok(node.data.dependsOn.includes('H52'))
    if (i > 1) assert.ok(!node.data.dependsOn.includes('H52.' + (i - 1)))
  }
  assert.ok(byId.get('H53').data.dependsOn.includes('H52'))
})

test('Thematic step labels state editorial ordering and report guidance is explicit', () => {
  assert.match(page, /Siguiente tema de lectura \(orden editorial\)/)
  assert.match(page, /Cómo elaborar el reporte sin mezclar fuentes/)
  assert.match(page, /posguerra es continuidad indicada/)
  assert.match(page, /item.linkLabel \|\| 'Abrir clase documentada/)
  assert.doesNotMatch(page, /Cómo conduce esto a/)
})

test('Historical chapters and Viennese program are not represented as successive deductions', () => {
  const relations = {
    H34: ['H31'],
    H38: ['H34'],
    H41: ['H31'],
    H42: ['H41', 'H40'],
    H43: ['H41'],
    H46: ['H43', 'H40'],
    H47: ['H43'],
    H48: ['H43', 'H36'],
    H50: ['H43'],
    H51: ['H43'],
    H52: ['H43'],
  }
  for (const [id, deps] of Object.entries(relations)) {
    assert.deepEqual(byId.get(id)?.data.dependsOn, deps, id)
  }
  assert.ok(!byId.get('H52').data.dependsOn.includes('H51'))
  assert.ok(!byId.get('H50').data.dependsOn.includes('H49'))
})

test('Source-image review covers precisely 95–114 without rewriting later parts', () => {
  const expected = Array.from({ length: 28 }, (_, i) => 'H' + String(i).padStart(2, '0'))
  assert.deepEqual(Object.keys(hackerSource95to114), expected)
  const route = hackerRoutes.find((entry) => entry.id === 'source95to114')
  assert.equal(route?.label, 'Texto cotejado · pp. 95–114')
  const covered = hackerNodes.filter((node) => node.data.branch.includes('source95to114'))
  assert.deepEqual(covered.map((node) => node.id), expected)
  for (const node of covered) {
    const source = node.data.sourceCloseReading
    assert.equal(source?.kind, 'Paráfrasis cotejada del texto de Hacker', node.id)
    assert.ok(source?.page?.includes('p.'), node.id)
    assert.ok(source.focus.length > 8, node.id + ':focus')
    for (const field of ['reading','argument','distinction','report']) {
      assert.ok(source[field].length > 45, node.id + ':' + field)
    }
    assert.notEqual(node.data.classOnly, true)
  }
  assert.equal(byId.get('H27')?.data.sourceCloseReading?.page, 'pp. 114–115')
  assert.equal(byId.get('H27')?.data.sourceCloseReading?.boundary, null)
  for (const node of hackerNodes.filter((node) => !expected.includes(node.id) && !node.data.classOnly)) {
    assert.equal(node.data.sourceCloseReading?.kind, 'Paráfrasis cotejada del texto de Hacker', node.id)
  }
})

test('Primary-source inspector provides four distinct argumentative layers and a boundary', () => {
  const nodeComponent = readFileSync(new URL('../src/components/analytic/HackerNode.jsx', import.meta.url), 'utf8')
  assert.match(page, /selected\.data\.sourceCloseReading\.reading/)
  assert.match(page, /selected\.data\.sourceCloseReading\.argument/)
  assert.match(page, /selected\.data\.sourceCloseReading\.distinction/)
  assert.match(page, /selected\.data\.sourceCloseReading\.report/)
  assert.match(page, /selected\.data\.sourceCloseReading\.boundary/)
  assert.match(page, /Explorar el ensayo completo/)
  assert.match(nodeComponent, /FUENTE COTEJADA/)
  const css = readFileSync(new URL('../src/pages/AnalyticHackerSystem.css', import.meta.url), 'utf8')
  assert.match(css, /hacker-deep-reading/)
  assert.match(css, /hacker-source-coverage/)
})

// Ensayo completo: la segunda tanda está contenida en el conjunto de lectura.

test('Hacker two source batches cover 68 bibliographic nodes', () => {
  assert.equal(Object.keys(hackerSource95to114).length, 28)
  assert.equal(Object.keys(hackerSource115to132).length, 40)
  assert.equal(hackerNodes.filter((n) => n.data.branch.includes('source95to132')).length, 68)
})

test('Full primary-source route covers every essay node without inventing class sources', () => {
  const essay = hackerNodes.filter((n) => !n.data.classOnly)
  const seen = essay.filter((n) => n.data.branch.includes('source95to132'))
  assert.equal(essay.length, 68)
  assert.equal(seen.length, 68)
  assert.equal(hackerRoutes.find((r) => r.id === 'source95to132')?.label, 'Ensayo cotejado · pp. 95–132')
  assert.equal(hackerNodes.filter((n) => n.data.classOnly && n.data.sourceCloseReading).length, 0)
})

test('Every verified facet and Vienna objection carries traceable source argumentation', () => {
  for (const id of ['H28','H29','H30','H31','H34','H36','H38','H41','H42','H43','H45','H47','H49','H50','H52','H53']) {
    assert.equal(byId.get(id)?.data.sourceCloseReading?.kind, 'Paráfrasis cotejada del texto de Hacker', id)
  }
  for (const root of ['H41','H52']) {
    const total = root === 'H41' ? 6 : 8
    for (let i = 1; i <= total; i++) {
      const fiche = byId.get(root + '.' + i)?.data.sourceCloseReading
      assert.ok(fiche?.page && fiche?.reading && fiche?.argument && fiche?.distinction && fiche?.report, root + '.' + i)
    }
  }
  assert.match(byId.get('H28').data.sourceCloseReading.distinction, /invertida/)
  assert.ok(byId.get('H27').data.sourceContinuation?.reading)
  assert.equal(byId.get('H27').data.sourceCloseReading.boundary, null)
})
