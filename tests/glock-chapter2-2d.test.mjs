import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  GLOCK_GEOMETRY, glockGuidedRoute, glockLinks, glockMethodSchema,
  glockNodeOrder, glockNodes, glockRouteTones, glockRoutes,
} from '../src/data/glockAnalyticChapter2.js'
import { buildSectionPedagogy } from '../src/components/philosophy/system2d/SectionPedagogyModel.js'

const byId = new Map(glockNodes.map((n) => [n.id, n]))
const page = readFileSync(new URL('../src/pages/AnalyticGlockSystem.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/AnalyticGlockSystem.css', import.meta.url), 'utf8')
const node = readFileSync(new URL('../src/components/analytic/GlockNode.jsx', import.meta.url), 'utf8')

test('Glock conserva 21 nodos con fuente, esquema y capa docente', () => {
  assert.equal(glockNodes.length, 21)
  assert.deepEqual(glockNodeOrder, glockNodes.map((n) => n.id))
  for (const n of glockNodes) {
    assert.ok(n.data.sourcePassage?.length > 180, n.id)
    assert.ok(n.data.diagram?.length >= 3, n.id)
    assert.equal(n.data.schema?.direction, 'vertical', n.id)
    assert.ok(n.data.class19Oct, n.id)
    assert.ok(n.data.classSeen, n.id)
    assert.ok(glockRouteTones[n.data.section], n.id)
    assert.ok(n.data.concepts.length >= 1, n.id)
  }
  assert.match(byId.get('G20').data.page, /fragmento/)
})

test('Glock mantiene relaciones resolubles y saca sus rótulos del canvas', () => {
  assert.equal(glockLinks.length, 24)
  for (const edge of glockLinks) {
    assert.ok(byId.has(edge.source) && byId.has(edge.target), edge.id)
    assert.ok(edge.label.trim().length >= 8, edge.id)
  }
  assert.match(page, /label: undefined/)
  assert.match(page, /Relaciones documentadas/)
})

test('Siete rutas, guía global y pedagogía por sección cubren todos los nodos', () => {
  const sections = buildSectionPedagogy(glockNodes, glockRoutes, glockNodeOrder)
  assert.equal(sections.length, 7)
  assert.equal(glockGuidedRoute.length, glockNodes.length)
  assert.deepEqual(glockGuidedRoute.map((step) => step.id), glockNodeOrder)
  sections.forEach((section) => {
    assert.ok(section.members.length > 0, section.id)
    assert.equal(section.questions.length, section.members.length)
  })
  assert.match(page, /buildGuidedRouteFor/)
  assert.match(page, /startTopicGuide/)
  assert.match(page, /glock-topic-guide-rail/)
  assert.match(page, /<SectionPedagogy/)
})

test('Geometría compacta conserva pasaje y mini-esquema', () => {
  assert.deepEqual(
    { width: GLOCK_GEOMETRY.width, height: GLOCK_GEOMETRY.height },
    { width: 310, height: 360 },
  )
  assert.ok(GLOCK_GEOMETRY.gapX >= 90 && GLOCK_GEOMETRY.gapY >= 90)
  glockNodes.forEach((a, i) => glockNodes.slice(i + 1).forEach((b) => {
    const overlapX = a.position.x < b.position.x + GLOCK_GEOMETRY.width + 20 &&
      b.position.x < a.position.x + GLOCK_GEOMETRY.width + 20
    const overlapY = a.position.y < b.position.y + GLOCK_GEOMETRY.height + 20 &&
      b.position.y < a.position.y + GLOCK_GEOMETRY.height + 20
    assert.ok(!(overlapX && overlapY), a.id + ' y ' + b.id)
  }))
  assert.match(css, /width:310px;height:360px/)
  assert.match(css, /glock-node-source-card blockquote\{height:74px;overflow-y:auto/)
  assert.match(node, /data\.sourcePassage/)
  assert.match(node, /data\.diagram\.map/)
})

test('Estados Hacker/Marx conservan selección, guía y blur relacional', () => {
  for (const state of [
    'is-selected', 'is-highlighted', 'is-dimmed', 'is-guided-current',
    'is-guided-next', 'is-topic-active', 'is-topic-support',
  ]) assert.match(node, new RegExp(state))
  assert.match(page, /selectionSetFor/)
  assert.match(page, /node\.id !== selectedId/)
  assert.match(css, /is-selected\{[^}]*opacity:1!important;filter:none!important/)
  assert.match(css, /is-guided-current\{[^}]*opacity:1!important;filter:none!important/)
})

test('Inspector separa autor, clase, estudio, dependencias y conceptos', () => {
  assert.match(page, /Qué significa/)
  assert.match(page, /EXPLICACIÓN DOCENTE · 19 OCT 2026/)
  assert.match(page, /TEXTO ORIGINAL DE GLOCK/)
  assert.match(page, /ESQUEMA DEL NODO · RECONSTRUCCIÓN DE ESTUDIO/)
  assert.match(page, /PREGUNTA DE ESTUDIO/)
  assert.match(page, /Depende de/)
  assert.match(page, /Produce/)
  assert.match(page, /Conceptos \/ momentos/)
  assert.doesNotMatch(page, /grabaci[oó]n|transcripci[oó]n/i)
})

test('Selección centra nodo mostrado y no reencuadra todo el sistema', () => {
  assert.match(page, /window\.requestAnimationFrame/)
  assert.match(page, /thematicLayout\.get\(node\.id\) \|\| node\.position/)
  assert.match(page, /\[selectedId, route, guidedMode, guidedIndex, thematicLayout, setCenter\]/)
})

test('iPad apila mapa e inspector; el esquema general sigue vertical', () => {
  assert.match(css, /@media\(max-width:1180px\)/)
  assert.match(css, /glock-study-workspace\{grid-template-columns:minmax\(0,1fr\);height:auto\}/)
  assert.match(css, /height:clamp\(440px,56dvh,680px\)/)
  assert.equal(glockMethodSchema.layout, 'hierarchy')
  assert.equal(glockMethodSchema.readingLayout, 'vertical-folio')
  assert.ok(glockMethodSchema.hierarchyYGap >= 150)
})
