import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import {
  marxHegelReadingNodes as nodes,
  marxHegelReadingRoutes as routes,
  marxHegelReadingLinks as edges,
} from '../src/data/marxHegelReadingAtlas.js'

test('las tres fuentes y el recorrido comparado quedan separados', () => {
  assert.deepEqual(routes.map(r => r.id), ['cruce', 'marx', 'bloch', 'feuerbach'])
  assert.equal(nodes.length, 23)
  assert.equal(new Set(nodes.map(n => n.id)).size, nodes.length)
  for (const route of routes) {
    assert.ok(nodes.filter(n => n.route === route.id).length >= 5, route.id)
  }
})

test('los folios contienen fuente, localización y desarrollo explícito', () => {
  for (const n of nodes) {
    assert.ok(n.source && n.pages && n.title && n.text && n.detail, n.id)
    assert.ok(n.text.length >= 65 && n.detail.length >= 170, n.id)
    assert.ok(!n.text.includes('«'), 'no atribuir citas no comprobadas: ' + n.id)
  }
})

test('el mapa mantiene aristas internas y jamás relaciona nodos inexistentes', () => {
  const byId = new Map(nodes.map(n => [n.id, n]))
  for (const e of edges) {
    assert.ok(byId.has(e.from) && byId.has(e.to), JSON.stringify(e))
    assert.equal(byId.get(e.from).route, byId.get(e.to).route)
  }
  assert.equal(edges.length, nodes.length - routes.length)
})

test('la geometría vertical no superpone nodos de 244px ni cambia la selección', () => {
  const src = fs.readFileSync(new URL('../src/pages/MarxHegelAssignedAtlas.jsx', import.meta.url), 'utf8')
  const styles = fs.readFileSync(new URL('../src/pages/MarxHegelAssignedAtlas.css', import.meta.url), 'utf8')
  assert.match(src, /y: index \* 290/)
  assert.match(styles, /height:244px/)
  assert.match(src, /selected: activeId === item.id/)
  assert.match(src, /onNodeClick=\{\(_, node\) => onSelect\(node.id\)\}/)
  assert.match(src, /useReactFlow/)
  assert.match(src, /aria-live="polite"/)
})

test('dossier y tarea apuntan al mismo recorrido', () => {
  const page = fs.readFileSync(new URL('../src/pages/MarxCritiqueHegelStudy.jsx', import.meta.url), 'utf8')
  const tasks = fs.readFileSync(new URL('../src/data/tasks.js', import.meta.url), 'utf8')
  assert.match(page, /<MarxHegelAssignedAtlas \/>/)
  assert.match(tasks, /id: 'ontologia-2026-10-19-fromm-marx-manuscritos'/)
  assert.match(tasks, /dueDate: null/)
  assert.match(tasks, /Bloch, capítulo XIX/)
})
