import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  GLOCK_GEOMETRY, glockLinks, glockMethodSchema,
  glockNodeOrder, glockNodes, glockRoutes,
} from '../src/data/glockAnalyticChapter2.js'
import { buildSectionPedagogy } from '../src/components/philosophy/system2d/SectionPedagogyModel.js'

const byId = new Map(glockNodes.map(n => [n.id, n]))
const page = readFileSync(new URL('../src/pages/AnalyticGlockSystem.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/AnalyticGlockSystem.css', import.meta.url), 'utf8')

test('Glock: 21 nodos localizados en pp 40–45 o fragmento p 46', () => {
  assert.equal(glockNodes.length, 21)
  assert.equal(new Set(glockNodeOrder).size, 21)
  assert.deepEqual(glockNodeOrder, glockNodes.map(n => n.id))
  glockNodes.forEach(n => {
    assert.match(n.data.page, /4[0-6]/)
    assert.ok(n.data.explanation?.length > 65, n.id)
    assert.ok(n.data.excerpt?.length > 15, n.id)
    assert.match(n.data.sourceRef, /Glock, 2012, cap. II/)
  })
  assert.match(byId.get('G20').data.page, /fragmento/)
  assert.doesNotMatch(page, /Las páginas 43–86 están pendientes/)
})
test('Glock: aristas y dependencias siempre resolubles', () => {
  assert.equal(glockLinks.length, 24)
  for (const edge of glockLinks) {
    assert.ok(byId.has(edge.source) && byId.has(edge.target), edge.id)
    assert.ok(edge.label.trim().length >= 8, edge.id)
  }
  for (const n of glockNodes) for (const dep of n.data.dependsOn) {
    assert.ok(byId.has(dep), n.id + ' depende de ' + dep)
  }
  assert.ok(glockLinks.some(edge => edge.critical), 'Cruce editorial debe rotularse')
})
test('Glock: las siete rutas son exhaustivas y evaluables', () => {
  const sections = buildSectionPedagogy(glockNodes, glockRoutes, glockNodeOrder)
  assert.equal(sections.length, 7)
  sections.forEach(section => {
    assert.ok(section.members.length > 0, section.id)
    assert.equal(section.questions.length, section.members.length)
  })
  assert.equal(sections.reduce((sum, s) => sum + s.members.length, 0), glockNodes.length)
})
test('Glock: no se superpone ningún rectángulo de 340 × 240 con margen', () => {
  const { width, height, gapX, gapY } = GLOCK_GEOMETRY
  assert.ok(gapX >= 100 && gapY >= 100)
  glockNodes.forEach((a, i) => glockNodes.slice(i + 1).forEach(b => {
    const touchX = a.position.x < b.position.x + width + 30 &&
      b.position.x < a.position.x + width + 30
    const touchY = a.position.y < b.position.y + height + 30 &&
      b.position.y < a.position.y + height + 30
    assert.ok(!(touchX && touchY), a.id + ' y ' + b.id)
  }))
  assert.match(css, /height: 240px; min-height: 240px/)
})
test('Glock: guía, rutas, inspector y esquema usan el contrato', () => {
  assert.match(page, /FRAGMENTO LITERAL · EDICIÓN 2012/)
  assert.match(page, /RECONSTRUCCIÓN DE ESTUDIO/)
  assert.match(page, /<SectionPedagogy/)
  assert.match(page, /onSectionChange=\{changeRoute\}/)
  assert.match(page, /<AnimatedConceptSchema/)
  assert.match(page, /nodesDraggable=\{false\}/)
  assert.match(page, /currentNavIndex/)
  assert.match(page, /visibleIds\.has\(n\.id\)/)
  assert.match(page, /label: undefined/)
  assert.match(page, /La página 46 está incompleta/)
  assert.equal(glockMethodSchema.edges.length, 4)
  assert.equal(glockMethodSchema.layout, 'hierarchy')
  assert.equal(glockMethodSchema.readingLayout, 'vertical-folio')
  assert.ok(glockMethodSchema.hierarchyYGap >= 150)
  assert.match(css, /animated-concept-schema\.is-reading-vertical/)
  assert.match(css, /grid-template-columns: minmax\(0, 1fr\)/)
})
