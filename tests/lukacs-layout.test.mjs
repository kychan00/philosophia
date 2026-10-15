import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { lukacsReificationNodes, lukacsReificationRoutes } from '../src/data/lukacsReificationSystem.js'
import { LUKACS_NODE_HEIGHT, LUKACS_NODE_WIDTH, LUKACS_NODE_VERTICAL_GAP, LUKACS_NODE_STEP, layoutLukacsNodes } from '../src/data/lukacsReificationLayout.js'

function assertNoOverlap(nodes, route) {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j]
      const dx = Math.abs(a.position.x - b.position.x) - LUKACS_NODE_WIDTH
      const dy = Math.abs(a.position.y - b.position.y) - LUKACS_NODE_HEIGHT
      assert.ok(dx >= 0 || dy >= LUKACS_NODE_VERTICAL_GAP - 0.001,
        route + ': ' + a.id + '/' + b.id + ' se superponen')
    }
  }
}

test('los 58 nodos, rutas y guías conservan posiciones separadas', () => {
  assert.equal(lukacsReificationNodes.length, 58)
  assert.equal(new Set(lukacsReificationNodes.map(n => n.id)).size, 58)
  assert.equal(LUKACS_NODE_STEP, LUKACS_NODE_HEIGHT + LUKACS_NODE_VERTICAL_GAP)
  assertNoOverlap(lukacsReificationNodes, 'todos')
  for (const route of lukacsReificationRoutes) {
    const subset = route.id === 'all' ? lukacsReificationNodes
      : lukacsReificationNodes.filter(n => n.data.branch.includes(route.id))
    assertNoOverlap(subset, route.id)
  }
  assert.deepEqual(layoutLukacsNodes(lukacsReificationNodes), lukacsReificationNodes)
})

test('el tamaño del nodo coincide con el layout y el texto puede desplazarse', () => {
  const css = readFileSync(new URL('../src/components/lukacs/LukacsReificationNode.css', import.meta.url), 'utf8')
  assert.match(css, /height:600px/)
  assert.match(css, /\.lukacs-flow-node \.lukacs-node-reading blockquote\{[^}]*overflow-y:auto/s)
  assert.match(css, /\.lukacs-flow-node \.lukacs-node-summary\{[^}]*overflow-y:auto/s)
  assert.match(css, /\.lukacs-flow-node \.marx-node-diagram\{[^}]*overflow-y:auto/s)
})
