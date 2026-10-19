import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const src = readFileSync(new URL('../src/pages/MethodsClass19Oct.jsx', import.meta.url), 'utf8')
const index = readFileSync(new URL('../src/pages/MethodsResearch.jsx', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/MethodsClass19Oct.css', import.meta.url), 'utf8')
const route = '/semestre/5/metodos-de-investigacion/clase/19-octubre'
const ids = [...src.matchAll(/id: '([mab]\d+)', chapter:/g)].map((match) => match[1])

test('Métodos 19 de octubre está vinculado al índice y al router', () => {
  assert.ok(app.includes(route))
  assert.ok(index.includes(route))
  assert.equal(ids.length, 18)
  assert.equal(new Set(ids).size, 18)
})

test('El atlas 2D distribuye los nodos sin usar alturas variables en un mismo nivel', () => {
  assert.match(src, /Math\.floor\(i \/ 2\) \* 265/)
  assert.match(src, /style: \{ width: 390, height: 187 \}/)
  assert.match(css, /\.m19-node\{width:390px;height:187px/)
  assert.match(src, /nodesDraggable=\{false\}/)
  assert.match(src, /<ReactFlow/)
  assert.match(src, /<MiniMap/)
})

test('Todas las relaciones apuntan a nodos existentes', () => {
  const set = new Set(ids)
  const relations = [...src.matchAll(/\['([mab]\d+)','([mab]\d+)','[^']+'\]/g)]
  assert.ok(relations.length >= 18)
  for (const [, source, target] of relations) {
    assert.ok(set.has(source), 'source: ' + source)
    assert.ok(set.has(target), 'target: ' + target)
  }
})

test('Protocolo, materiales y límites interpretativos quedan diferenciados', () => {
  assert.match(src, /PREGUNTA CENTRAL: ¿Cuáles son las estructuras esenciales/)
  assert.match(src, /OBJETIVO GENERAL: Develar y describir/)
  assert.match(src, /Diapositiva · 4\. Encuadre metodológico/)
  assert.match(src, /reducción eidética/)
  assert.match(src, /no demuestra por sí solo epojé/)
  assert.match(src, /selected: entry\.id === selectedId/)
  assert.match(src, /if \(mode === 'guia'\) setStep/)
  assert.match(src, /guia.*estudio|guía/i)
  assert.match(src, /const quizzes =/)
  assert.doesNotMatch(src, /grabaci[oó]n|transcripci[oó]n/i)
})

test('Guía y estudio están disponibles en cada ruta', () => {
  assert.deepEqual([...src.matchAll(/id: '(miedo|amistad|balance)', number:/g)].map((m) => m[1]), ['miedo', 'amistad', 'balance'])
  const questions = [...src.matchAll(/chapter:'(miedo|amistad|balance)', question:/g)].map((m) => m[1])
  for (const chapter of ['miedo','amistad','balance']) assert.ok(questions.includes(chapter))
  assert.match(src, /mode === 'guia'/)
  assert.match(src, /mode === 'estudio'/)
  assert.match(src, /visible\.map/)
})
