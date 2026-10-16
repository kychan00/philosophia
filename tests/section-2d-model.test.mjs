import assert from 'node:assert/strict'
import test from 'node:test'
import { buildSectionPedagogy } from '../src/components/philosophy/system2d/SectionPedagogyModel.js'
import { marxCommodityNodes, marxCommodityRoutes } from '../src/data/marxCommodityValueSystem.js'
import { lukacsReificationNodes, lukacsReificationRoutes } from '../src/data/lukacsReificationSystem.js'
import { lukacsOntologyNodes, lukacsOntologyRoutes } from '../src/data/lukacsOntologySystem.js'
import { hegelCroceNodes, hegelCroceRoutes } from '../src/data/hegelCroceTaskSystem.js'
import { marketingDialogueNodes, marketingDialogueRoutes } from '../src/data/cafeMercadotecniaSystem2D.js'
import { hackerNodes, hackerRoutes, hackerOrder } from '../src/data/hackerAnalyticSystem.js'
import { readFileSync } from 'node:fs'

const systems = [
  ['Marx', marxCommodityNodes, marxCommodityRoutes, []],
  ['Lukács · cosificación', lukacsReificationNodes, lukacsReificationRoutes, []],
  ['Lukács · ontología social', lukacsOntologyNodes, lukacsOntologyRoutes, []],
  ['Hegel/Croce', hegelCroceNodes, hegelCroceRoutes, []],
  ['Mercadotecnia', marketingDialogueNodes, marketingDialogueRoutes, []],
  ['Hacker', hackerNodes, hackerRoutes, hackerOrder],
]

for (const [name, nodes, routes, order] of systems) {
  test(name + ': every declared section has visible study nodes and valid ordering', () => {
    const sections = buildSectionPedagogy(nodes, routes, order)
    assert.ok(sections.length, name + ': no sections')
    const nodeIDs = new Set(nodes.map((node) => node.id))
    for (const section of sections) {
      assert.ok(section.members.length, section.id + ': empty')
      assert.equal(new Set(section.members.map((n) => n.id)).size, section.members.length)
      assert.ok(section.members.every((n) => nodeIDs.has(n.id)))
      assert.ok(section.prior.every((n) => nodeIDs.has(n.id)))
      assert.ok(section.later.every((n) => nodeIDs.has(n.id)))
      assert.ok(section.questions.every((n) => section.members.includes(n)))
      if (order.length) {
        const positions = section.members.map((n) => order.indexOf(n.id))
        assert.ok(positions.every((p) => p >= 0), section.id + ': missing canonical order')
        assert.deepEqual(positions, [...positions].sort((a, b) => a - b))
      }
    }
  })
}

test('Section prior and later include all documented external relations', () => {
  const fixture = [
    { id: 'before', data: { branch: ['before'], dependsOn: [], produces: [] } },
    { id: 'a', data: { branch: ['focus'], dependsOn: ['before'], produces: ['after1', 'after2', 'after3', 'after4', 'after5'] } },
    ...Array.from({ length: 5 }, (_, i) => ({
      id: 'after' + (i + 1),
      data: { branch: ['after'], dependsOn: ['a'], produces: [] },
    })),
  ]
  const sections = buildSectionPedagogy(fixture, [
    { id: 'all', label: 'Completo' },
    { id: 'focus', label: 'Sección' },
  ])
  assert.deepEqual(sections[0].prior.map((n) => n.id), ['before'])
  assert.deepEqual(sections[0].later.map((n) => n.id), ['after1', 'after2', 'after3', 'after4', 'after5'])
})

test('The UI shows every documented before/after reference without four-link truncation', () => {
  const ui = readFileSync(new URL('../src/components/philosophy/system2d/SectionPedagogy.jsx', import.meta.url), 'utf8')
  assert.match(ui, /section\.prior\.map\(/)
  assert.match(ui, /section\.later\.map\(/)
  assert.doesNotMatch(ui, /section\.(prior|later)\.slice\(0, 4\)/)
  assert.match(ui, /questionProvenance === 'teacher'/)
})

test('All systems turn off a conflicting global guide when focusing from a section', () => {
  const files = [
    'MarxCommodityValueSystem.jsx', 'LukacsReificationSystem.jsx', 'LukacsOntologySystem.jsx',
    'HegelCroceTaskSystem.jsx', 'HartmannChapterOneSystem.jsx',
    'CafeMercadotecniaSystem2D.jsx', 'AnalyticHackerSystem.jsx',
  ]
  for (const file of files) {
    const src = readFileSync(new URL('../src/pages/' + file, import.meta.url), 'utf8')
    assert.match(src, /onFocusNode=\{\(id\) => \{\s*setGuidedMode\(false\)/, file)
  }
})
