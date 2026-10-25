import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { freudIConcepts, freudISections, freudIRoutes, freudILinks, freudIOrder } from '../src/data/freudMalestarCapituloI.js'

test('Freud capítulo I · tramo cotejado pp. 2–8: 30 nodos y 3 rutas temáticas', () => {
  assert.equal(freudIConcepts.length, 30)
  assert.equal(freudISections.length, 3)
  assert.equal(freudIRoutes.length, 4)
  assert.deepEqual(freudIOrder, freudIConcepts.map((item) => item.id))
  assert.equal(new Set(freudIOrder).size, freudIOrder.length)
  for (const section of freudISections) {
    assert.ok(freudIConcepts.some((node) => node.section === section.id))
    assert.ok(section.question && section.before && section.after)
  }
})

test('cada nodo cotejado separa texto original, explicación y palabras simples', () => {
  for (const node of freudIConcepts) {
    assert.match(node.page, /^pp?\./)
    assert.ok(node.originalQuote?.startsWith('«') && node.originalQuote?.endsWith('»'), 'Cita literal ausente: ' + node.id)
    assert.ok(node.explanation.length > 70, 'Explicación insuficiente: ' + node.id)
    assert.ok(node.simple.length > 30, 'Capa simple insuficiente: ' + node.id)
    assert.match(node.layer, /cita literal cotejada/)
    assert.ok(node.question.includes('¿'))
    assert.ok(node.answer.length > 15)
    assert.ok(node.steps.length >= 2)
  }
})

test('el tramo no finge haber recibido páginas posteriores a la 8', () => {
  assert.equal(freudIConcepts.at(-1).id, 'F30')
  assert.equal(freudIConcepts.at(-1).page, 'p. 8')
  assert.match(freudISections.at(-1).after, /continúa después de la p\. 8/)
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
  assert.equal(seen.size, 30)
})

test('la interfaz exige cita literal, explicación, folio y paginación impresa', () => {
  const source = readFileSync(new URL('../src/pages/FreudMalestarCapituloI.jsx', import.meta.url), 'utf8')
  const styles = readFileSync(new URL('../src/pages/FreudMalestarCapituloI.css', import.meta.url), 'utf8')
  assert.match(source, /TEXTO ORIGINAL · CITA LITERAL COTEJADA/)
  assert.match(source, /EXPLICACIÓN ACADÉMICA/)
  assert.match(source, /data\.originalQuote/)
  assert.match(source, /paginación impresa/)
  assert.match(source, /data\.onOpenFolio\(data\.id\)/)
  assert.match(source, /role="dialog" aria-modal="true"/)
  assert.match(source, /event\.key === 'Escape'/)
  assert.match(source, /GRID_STEP/)
  assert.match(styles, /\.freud-folio-quote/)
  assert.match(styles, /\.freud-node-analysis/)
})
