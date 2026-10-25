import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { freudIConcepts, freudISections, freudIRoutes, freudILinks, freudIOrder } from '../src/data/freudMalestarCapituloI.js'

test('capítulo I: 18 conceptos, 4 secciones y ruta completa', () => {
  assert.equal(freudIConcepts.length, 18)
  assert.equal(freudISections.length, 4)
  assert.equal(freudIRoutes.length, 5)
  assert.deepEqual(freudIOrder, freudIConcepts.map((item) => item.id))
  assert.equal(new Set(freudIOrder).size, freudIOrder.length)
  for (const section of freudISections) {
    assert.ok(freudIConcepts.some((node) => node.section === section.id))
    assert.ok(section.question && section.before && section.after)
  }
})

test('todo folio conserva la fuente, pregunta, respuesta y explicación sencilla', () => {
  for (const node of freudIConcepts) {
    assert.match(node.page, /p\.|pp\./)
    assert.ok(node.title && node.explanation.length > 80)
    assert.ok(node.simple.length > 30)
    assert.ok(node.question.includes('¿'))
    assert.ok(node.answer.length > 15)
    assert.equal(node.layer, 'Obra · paráfrasis verificada (no cita literal)')
    assert.ok(node.steps.length >= 2)
  }
})

test('las conexiones son válidas y no existe ciclo de dependencias', () => {
  const known = new Set(freudIConcepts.map((node) => node.id))
  for (const edge of freudILinks) {
    assert.ok(known.has(edge.source) && known.has(edge.target))
    assert.notEqual(edge.source, edge.target)
  }
  const seen = new Set()
  const stack = new Set()
  const visit = (id) => {
    if (seen.has(id)) return
    assert.ok(!stack.has(id), 'ciclo detectado: ' + id)
    stack.add(id)
    for (const parent of freudIConcepts.find((x) => x.id === id)?.dependsOn || []) visit(parent)
    stack.delete(id)
    seen.add(id)
  }
  for (const id of known) visit(id)
  assert.equal(seen.size, 18)
})

test('el cierre oceánico y desamparo se mantiene separado de capítulos posteriores', () => {
  assert.match(freudIConcepts.find((x) => x.id === 'F16').explanation, /desamparo|dependencia infantil/)
  assert.match(freudIConcepts.find((x) => x.id === 'F17').explanation, /contrarrestar la amenaza exterior|consuelo/)
  assert.match(freudIConcepts.find((x) => x.id === 'F18').explanation, /capítulo I/)
  const source = readFileSync(new URL('../src/pages/FreudMalestarCapituloI.jsx', import.meta.url), 'utf8')
  assert.match(source, /SectionPedagogy/)
  assert.match(source, /AnimatedConceptSchema/)
  assert.match(source, /ReactFlowProvider/)
  assert.match(source, /EN PALABRAS SIMPLES/)
  assert.match(source, /FRONTERA DE FUENTE/)
  assert.match(source, /onNodeClick/)
})

test('los 18 nodos ofrecen exposición y el botón Abrir folio es funcional', () => {
  const source = readFileSync(new URL('../src/pages/FreudMalestarCapituloI.jsx', import.meta.url), 'utf8')
  const styles = readFileSync(new URL('../src/pages/FreudMalestarCapituloI.css', import.meta.url), 'utf8')
  for (const node of freudIConcepts) {
    assert.ok(node.explanation.length > 80, 'Falta texto explícito: ' + node.id)
    assert.match(node.page, /^pp?\./, 'Falta página del PDF: ' + node.id)
  }
  assert.match(source, /data\.onOpenFolio\(data\.id\)/)
  assert.match(source, /aria-label=\{\`Abrir folio/)
  assert.match(source, /role="dialog" aria-modal="true"/)
  assert.match(source, /folioCloseRef\.current\?\.focus/)
  assert.match(source, /event\.key === 'Escape'/)
  assert.match(source, /Freud, s\. f\.,/)
  assert.match(source, /Referencia bibliográfica · APA 7/)
  assert.match(styles, /\.freud-folio-backdrop/)
  assert.match(styles, /\.freud-node-source/)
})
