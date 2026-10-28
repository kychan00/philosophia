import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const src = readFileSync(new URL('../src/pages/MethodsPhenomenologySystem2D.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/MethodsPhenomenologySystem2D.css', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const study = readFileSync(new URL('../src/pages/MethodsPhenomenologyExposition.jsx', import.meta.url), 'utf8')
const route = '/estudio/fenomenologia-metodo/sistema-2d'
const ids = [...src.matchAll(/id: '([pfvrl]\d+)', chapter:/g)].map(match => match[1])

test('Sistema 2D fenomenológico: ruta, acceso y 24 nodos únicos', () => {
  assert.ok(app.includes(route))
  assert.ok(study.includes(route))
  assert.equal(ids.length, 24)
  assert.equal(new Set(ids).size, 24)
})

test('Cinco actos, atlas completo y geometría sin arrastre', () => {
  for (const chapter of ['problema', 'fundamento', 'vivencia', 'rigor', 'limite']) {
    assert.ok(src.includes("id: '" + chapter + "', number:"))
  }
  assert.match(src, /chapterId === 'todo' \? 3 : 2/)
  assert.match(src, /xGap = chapterId === 'todo' \? 520 : 560/)
  assert.match(src, /yGap = chapterId === 'todo' \? 320 : 340/)
  assert.match(src, /style: \{ width: 370, height: 184 \}/)
  assert.match(src, /nodesDraggable=\{false\}/)
  assert.match(src, /nodesConnectable=\{false\}/)
  assert.doesNotMatch(src, /MiniMap/)
})

test('Todos los folios tienen procedencia, límites, palabras simples y frase de proyección', () => {
  assert.equal([...src.matchAll(/source: '/g)].length, ids.length)
  assert.equal([...src.matchAll(/analysis: '/g)].length, ids.length)
  assert.equal([...src.matchAll(/simple: '/g)].length, ids.length)
  assert.equal([...src.matchAll(/projection: '/g)].length, ids.length)
  assert.match(src, /En palabras simples:/)
  assert.match(src, /Para decir en clase:/)
  assert.doesNotMatch(src, /grabaci[oó]n|transcripci[oó]n/i)
})

test('Modo proyección recorre los 24 nodos y puede cerrarse', () => {
  assert.match(src, /Proyectar exposición/)
  assert.match(src, /setChapterId\('todo'\)/)
  assert.match(src, /setMode\('guia'\)/)
  assert.match(src, /setProjection\(true\)/)
  assert.match(src, /setExpanded\(true\)/)
  assert.match(src, /Salir de proyección/)
  assert.match(src, /visible\[step\]\.projection/)
  assert.match(css, /\.phen2d-system\.projection/)
})

test('Fidelidad conceptual: límites explícitos y relaciones de estudio', () => {
  assert.match(src, /no representa un estudio empírico concluido/i)
  assert.match(src, /no (?:una )?esencia universal ya demostrada/i)
  assert.match(src, /testimonio no da acceso transparente/i)
  assert.match(src, /relaciones de estudio/)
  assert.match(src, /Frontera documental/)
})
