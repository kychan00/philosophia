import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  threeReadingsNodes as nodes,
  threeReadingsById as byId,
  threeReadingsRoutes as routes,
  threeReadingsSequentialEdges as sequence,
  threeReadingsComparisons as relations,
} from '../src/data/marxHegelThreeReadings.js'
const get = file => readFileSync(new URL(file, import.meta.url), 'utf8')

test('las tres lecturas y su confronto forman una guía completa sin folios huérfanos', () => {
  assert.equal(nodes.length, 74)
  assert.equal(new Set(nodes.map(n => n.id)).size, nodes.length)
  assert.deepEqual(routes.map(r => r.id), ['cruce','marx','bloch','feuerbach'])
  assert.equal(nodes.filter(n => n.route === 'marx').length, 24)
  assert.equal(nodes.filter(n => n.route === 'bloch').length, 18)
  assert.equal(nodes.filter(n => n.route === 'feuerbach').length, 19)
  assert.equal(nodes.filter(n => n.route === 'cruce').length, 13)
  for (const node of nodes) {
    assert.equal(byId[node.id]?.id, node.id)
    assert.ok(node.title && node.text && node.detail && node.discussion && node.question, node.id)
    assert.ok(node.text.length > 50 && node.detail.length >= 160, node.id)
    assert.ok(['texto primario de Marx','comentario de Bloch','reconstrucción comparativa'].includes(node.layer), node.id)
  }
})

test('secuencia sin conexiones cruzadas falsas ni elementos inexistentes', () => {
  assert.equal(sequence.length, nodes.length - routes.length)
  for (const edge of sequence) {
    assert.ok(byId[edge.source] && byId[edge.target], edge.id)
    assert.equal(byId[edge.source].route, byId[edge.target].route, edge.id)
    assert.equal(edge.relation, 'secuencia de lectura')
  }
  for (const rel of relations) {
    assert.ok(byId[rel.from] && byId[rel.to])
    assert.notEqual(byId[rel.from].route, byId[rel.to].route)
    assert.ok(rel.label && rel.why && rel.type)
  }
})

test('cada tesis sobre Feuerbach conserva ficha temática extensa', () => {
  const thesisNodes = nodes.filter(n => n.route === 'feuerbach')
  assert.equal(thesisNodes.length, 19)
  for (const roman of ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI']) {
    assert.ok(thesisNodes.some(n => n.pages.includes('Tesis '+roman) || n.pages.includes('Tesis '+roman+'–') ||
      n.pages.includes('Tesis '+roman+' ·')), 'falta tesis '+roman)
  }
  assert.ok(thesisNodes.some(n => n.title.includes('educador')))
  assert.ok(thesisNodes.some(n => n.title.includes('esencia')))
})

test('geometría de tarjetas y foco: 64px libres entre nodos', () => {
  const jsx = get('../src/pages/MarxHegelThreeReadingsSystem.jsx')
  const css = get('../src/pages/MarxHegelThreeReadingsSystem.css')
  assert.match(jsx, /width: 356, height: 258, stride: 322/)
  assert.ok(322 - 258 >= 54)
  assert.match(jsx, /y: i \* geometry.stride/)
  assert.match(css, /\.mhr-node\{height:258px;width:356px/)
  assert.match(jsx, /viewportInitialized/)
  assert.match(jsx, /onNodeClick=\{\(_, node\) => onSelect\(node.id\)\}/)
  assert.match(jsx, /aria-live="polite"/)
  assert.match(jsx, /key=\{route\}/)
  assert.match(css, /@media\(max-width:1000px\)/)
  assert.match(css, /@media\(max-width:700px\)/)
})

test('pantalla independiente, guía íntegra, Relaciones II y tres rutas sin duplicar dossier', () => {
  const app = get('../src/App.jsx')
  const page = get('../src/pages/MarxHegelThreeReadingsSystem.jsx')
  const tasks = get('../src/data/tasks.js')
  assert.match(app, /path="\/tareas\/ontologia-ii\/marx-hegel-bloch-feuerbach\/sistema"/)
  assert.match(app, /element=\{<MarxHegelThreeReadingsSystem \/>\}/)
  assert.match(tasks, /studyRoute: '\/tareas\/ontologia-ii\/marx-hegel-bloch-feuerbach\/sistema'/)
  assert.match(page, /threeReadingsComparisons/)
  assert.match(page, /setGuideScope\('all'\)/)
  assert.match(page, /guideScope === 'all' \? threeReadingsNodes : guideRoute/)
  assert.match(page, /setFullScreen\(v => !v\)/)
  assert.match(page, /FolioDiagram/)
  assert.match(page, /el libro de Fromm|volumen de Erich Fromm/)
  assert.match(page, /texto primario/)
})
