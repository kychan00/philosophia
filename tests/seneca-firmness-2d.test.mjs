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

test('Séneca 2D conserva catorce estaciones y una lectura axial', () => {
  assert.equal(senecaFirmnessNodes.length, 14)
  assert.equal(senecaFirmnessOrder.length, 14)
  assert.equal(new Set(senecaFirmnessOrder).size, 14)
  assert.equal(senecaFirmnessSource.pages, '140–153')
})

test('cada nodo separa texto explícito, reconstrucción, explicación, ejemplo y esquema', () => {
  for (const node of senecaFirmnessNodes) {
    assert.match(node.data.sourceKind, /CITA LITERAL COTEJADA|PARÁFRASIS DE ESTUDIO/)
    assert.ok(node.data.sourceText.length > 20)
    assert.ok(node.data.explicitText.length > 20, node.id + ' debe tener texto explícito cotejado')
    assert.match(node.data.explicitPage, /^\d{3}(?:–\d{3})?$/)
    assert.match(node.data.explicitRef, /Séneca · Sobre la firmeza del sabio · p\./)
    assert.ok(node.data.explanation.length > 65)
    assert.ok(node.data.example.length > 35)
    assert.ok(node.data.question.endsWith('?'))
    assert.ok(node.data.schema.nodes.length >= 2)
    assert.ok(node.data.schema.edges.length >= 1)
  }
})

test('la geometría reproduce dos bifurcaciones y dos reconvergencias', () => {
  const byId = new Map(senecaFirmnessNodes.map(node => [node.id, node]))
  const center = id => byId.get(id).position.x

  for (const id of ['S01', 'S02', 'S07', 'S08', 'S11', 'S12', 'S13', 'S14']) {
    assert.equal(center(id), 650, id + ' debe permanecer sobre el eje central')
  }

  assert.ok(center('S03') < center('S04'))
  assert.ok(center('S05') < center('S06'))
  assert.ok(center('S09') < center('S10'))

  const pairs = [
    ['S02', 'S03'], ['S02', 'S04'],
    ['S05', 'S07'], ['S06', 'S07'],
    ['S08', 'S09'], ['S08', 'S10'],
    ['S09', 'S11'], ['S10', 'S11'],
  ]
  for (const [source, target] of pairs) {
    assert.ok(
      senecaFirmnessEdges.some(edge => edge.source === source && edge.target === target),
      'falta relación ' + source + '→' + target,
    )
  }
})

test('ninguna arista apunta a un nodo inexistente', () => {
  const ids = new Set(senecaFirmnessNodes.map(node => node.id))
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

test('el sistema conserva ETHOS, lectura vertical y fidelidad editorial', () => {
  assert.match(page, /Position\.Top/)
  assert.match(page, /Position\.Bottom/)
  assert.match(page, /TEXTO EXPLÍCITO/)
  assert.match(page, /RECONSTRUCCIÓN DE ESTUDIO/)
  assert.match(page, /seneca2d-inspector-nav/)
  assert.match(page, /movePresentation/)
  assert.match(page, /AnimatedConceptSchema/)
  assert.match(page, /ReactFlowProvider/)
  assert.doesNotMatch(page, /MiniMap/)
  assert.match(css, /#1a365d/)
  assert.match(css, /height:3020px/)
  assert.match(css, /grid-template-columns:minmax\(0,1fr\) 390px/)
  assert.match(css, /position:sticky/)
  assert.match(css, /seneca2d-inspector-nav/)
  assert.match(css, /seneca2d-explicit-text/)
  assert.match(css, /@media\(max-width:1180px\)/)
    assert.match(css, /prefers-reduced-motion/)
})
