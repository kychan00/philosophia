import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const src = readFileSync(new URL('../src/pages/MethodsPhenomenologySystem2D.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/MethodsPhenomenologySystem2D.css', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const study = readFileSync(new URL('../src/pages/MethodsPhenomenologyExposition.jsx', import.meta.url), 'utf8')
const route = '/estudio/fenomenologia-metodo/sistema-2d'
const ids = [...src.matchAll(/id: '([mc]\d+)',\n    chapter:/g)].map(match => match[1])

test('Sistema 2D fenomenológico: ruta, acceso y 12 nodos únicos', () => {
  assert.ok(app.includes(route))
  assert.ok(study.includes(route))
  assert.equal(ids.length, 12)
  assert.equal(new Set(ids).size, 12)
})

test('Dos movimientos: método y aplicación', () => {
  for (const chapter of ['metodo', 'caso']) {
    assert.ok(src.includes("id: '" + chapter + "',"))
  }
  assert.match(src, /chapterId === 'todo' \? 3 : 2/)
  assert.match(src, /xGap = chapterId === 'todo' \? 540 : 570/)
  assert.match(src, /yGap = chapterId === 'todo' \? 330 : 350/)
  assert.match(src, /style: \{ width: 370, height: 184 \}/)
  assert.match(src, /nodesDraggable=\{false\}/)
  assert.match(src, /nodesConnectable=\{false\}/)
  assert.doesNotMatch(src, /MiniMap/)
})

test('La proyección pública es autónoma y no expone arqueología de clase', () => {
  assert.doesNotMatch(src, /source: '/)
  assert.doesNotMatch(src, /Clase \d+/)
  assert.doesNotMatch(src, /octubre/i)
  assert.doesNotMatch(src, /grabaci[oó]n|transcripci[oó]n/i)
  assert.doesNotMatch(src, /Para exponer/i)
  assert.doesNotMatch(src, /projection: '/)
  assert.match(src, /Idea central/)
  assert.match(src, /Qué significa metodológicamente/)
  assert.match(src, /En palabras simples:/)
})

test('Modo proyección recorre los 12 nodos y puede cerrarse', () => {
  assert.match(src, /Proyectar exposición/)
  assert.match(src, /setChapterId\('todo'\)/)
  assert.match(src, /setMode\('guia'\)/)
  assert.match(src, /setProjection\(true\)/)
  assert.match(src, /setExpanded\(true\)/)
  assert.match(src, /Salir de proyección/)
  assert.match(src, /visible\[step\]\.short/)
  assert.match(css, /\.phen2d-system\.projection/)
})

test('La aplicación concreta ejecuta el método completo', () => {
  assert.match(src, /Miedo ante una amenaza recibida por celular/)
  assert.match(src, /Entrevistar para reconstruir una escena/)
  assert.match(src, /Epojé \+ noesis\/noema \+ cuerpo \+ espacio \+ tiempo/)
  assert.match(src, /Variar y sintetizar/)
  assert.match(src, /estructura provisional/i)
})
