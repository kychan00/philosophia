import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  senecaFirmnessEdges,
  senecaFirmnessNodes,
  senecaFirmnessOrder,
  senecaFirmnessSource,
} from '../src/data/senecaFirmnessSystem.js'

const file = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8')
const app = file('src/App.jsx')
const hub = file('src/pages/EthicsClassics.jsx')
const page = file('src/pages/SenecaFirmnessSystem.jsx')
const css = file('src/pages/SenecaFirmnessSystem.css')

test('Séneca 2D conserva seis nodos y una ruta simple', () => {
  assert.equal(senecaFirmnessNodes.length, 6)
  assert.equal(senecaFirmnessOrder.length, 6)
  assert.equal(new Set(senecaFirmnessOrder).size, 6)
  assert.equal(senecaFirmnessSource.pages, '140–153')
})

test('cada nodo separa cita cotejada, explicación, ejemplo y esquema', () => {
  for (const node of senecaFirmnessNodes) {
    assert.match(node.data.sourceKind, /CITA LITERAL COTEJADA/)
    assert.ok(node.data.sourceText.length > 12)
    assert.ok(node.data.explanation.length > 70)
    assert.ok(node.data.example.length > 50)
    assert.ok(node.data.question.endsWith('?'))
    assert.ok(node.data.schema.nodes.length >= 3)
    assert.ok(node.data.schema.edges.length >= 2)
  }
})

test('ninguna arista apunta a un nodo inexistente', () => {
  const ids = new Set(senecaFirmnessNodes.map((node) => node.id))
  for (const edge of senecaFirmnessEdges) {
    assert.ok(ids.has(edge.source))
    assert.ok(ids.has(edge.target))
  }
})

test('ruta web y acceso desde Ética están registrados', () => {
  assert.match(app, /SenecaFirmnessSystem/)
  assert.match(app, /etica\/seneca\/firmeza-del-sabio\/sistema-2d/)
  assert.match(hub, /etica\/seneca\/firmeza-del-sabio\/sistema-2d/)
})

test('el sistema conserva ETHOS y evita complejidad innecesaria', () => {
  assert.match(page, /seneca2d-meander/)
  assert.match(page, /AnimatedConceptSchema/)
  assert.match(page, /ReactFlowProvider/)
  assert.doesNotMatch(page, /MiniMap/)
  assert.match(css, /#1a365d/)
  assert.match(css, /@media\(max-width:1100px\)/)
  assert.match(css, /prefers-reduced-motion/)
})
