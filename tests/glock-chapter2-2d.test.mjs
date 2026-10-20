import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  glockLinks, glockMethodSchema, glockNodeOrder,
  glockNodes, glockRoutes,
} from '../src/data/glockAnalyticChapter2.js'
import { buildSectionPedagogy } from '../src/components/philosophy/system2d/SectionPedagogyModel.js'

const byId = new Map(glockNodes.map((n) => [n.id, n]))
const page = readFileSync(new URL('../src/pages/AnalyticGlockSystem.jsx', import.meta.url), 'utf8')

test('Glock primera entrega: páginas 40-42 exclusivamente', () => {
  assert.equal(glockNodes.length, 12)
  assert.equal(new Set(glockNodeOrder).size, glockNodeOrder.length)
  assert.deepEqual(glockNodeOrder, glockNodes.map((n) => n.id))
  glockNodes.forEach((n) => {
    assert.match(n.data.page, /p(?:p)?\. 40|p(?:p)?\. 41|p(?:p)?\. 42|pp\. 40–41|pp\. 41–42/)
    assert.ok(n.data.explanation?.length > 65, n.id)
    assert.ok(n.data.excerpt?.length > 15, n.id)
    assert.match(n.data.sourceRef, /Glock, 2012, cap. II/)
  })
})
test('Glock: aristas y dependencias documentadas', () => {
  for (const edge of glockLinks) {
    assert.ok(byId.has(edge.source), edge.source)
    assert.ok(byId.has(edge.target), edge.target)
    assert.ok(edge.label.trim().length >= 8, edge.id)
  }
  for (const n of glockNodes) {
    for (const dep of n.data.dependsOn) assert.ok(byId.has(dep), dep)
  }
  assert.ok(glockLinks.some((edge) => edge.critical), 'Interpretación transversal rotulada')
})
test('Glock: rutas pedagógicas tienen miembros y preguntas', () => {
  const sections = buildSectionPedagogy(glockNodes, glockRoutes, glockNodeOrder)
  assert.equal(sections.length, 4)
  sections.forEach((section) => {
    assert.ok(section.members.length > 0, section.id)
    assert.equal(section.questions.length, section.members.length)
  })
})
test('Glock: coordenadas sin colisiones base de nodos', () => {
  const width = 340, height = 235
  glockNodes.forEach((a, i) => glockNodes.slice(i + 1).forEach((b) => {
    const xOverlap = a.position.x < b.position.x + width && b.position.x < a.position.x + width
    const yOverlap = a.position.y < b.position.y + height && b.position.y < a.position.y + height
    assert.ok(!(xOverlap && yOverlap), a.id + ' y ' + b.id)
  }))
})
test('Glock: fuente y comprensión separadas en inspector', () => {
  assert.match(page, /LECTURA · CITA BREVE/)
  assert.match(page, /RECONSTRUCCIÓN DE ESTUDIO/)
  assert.match(page, /<SectionPedagogy/)
  assert.match(page, /<AnimatedConceptSchema/)
  assert.match(page, /PANTALLA COMPLETA/)
  assert.match(page, /onNodesChange=\{onNodesChange\}/)
  assert.match(page, /43–86 están pendientes/)
  assert.deepEqual(glockMethodSchema.edges.length, 4)
})
