import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const src = readFileSync(new URL('../src/pages/MethodsClass21Oct.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/MethodsClass21Oct.css', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const index = readFileSync(new URL('../src/pages/MethodsResearch.jsx', import.meta.url), 'utf8')
const route = '/semestre/5/metodos-de-investigacion/clase/21-octubre'
const ids = [...src.matchAll(/id: '([pir]\d+)', chapter:/g)].map(match => match[1])

test('Clase del 21 de octubre en router e índice con 17 nodos', () => {
  assert.ok(app.includes(route))
  assert.ok(index.includes(route))
  assert.equal(ids.length, 17)
  assert.equal(new Set(ids).size, 17)
})

test('Geometría con filas fijas, sin solapes ni nodos arrastrables', () => {
  assert.match(src, /Math\.floor\(i \/ 2\) \* 270/)
  assert.match(src, /style: \{ width: 390, height: 187 \}/)
  assert.match(src, /nodesDraggable=\{false\}/)
  assert.match(src, /<ReactFlow/)
  assert.match(src, /<MiniMap/)
  assert.match(css, /\.m21-plain/)
})

test('Relaciones verificadas sobre todos los nodos', () => {
  const set = new Set(ids)
  const links = [...src.matchAll(/\['([pir]\d+)', '([pir]\d+)', '[^']+'\]/g)]
  assert.ok(links.length >= 10)
  for (const [, a, b] of links) {
    assert.ok(set.has(a), 'Falta origen ' + a)
    assert.ok(set.has(b), 'Falta destino ' + b)
  }
})

test('Fidelidad: punto vacío, noesis, noema, epojé y límites', () => {
  assert.match(src, /2\. Sin contenido escrito en el pizarrón/)
  assert.match(src, /Noesis: acto intencional/)
  assert.match(src, /Noema: el objeto tal como se presenta/)
  assert.match(src, /La epojé suspende juicios/)
  assert.match(src, /No se presentan participantes reales ni resultados/)
  assert.match(src, /consentimiento informado/)
  assert.match(src, /no una constatación empírica/)
  assert.doesNotMatch(src, /grabaci[oó]n|transcripci[oó]n/i)
})

test('Cada folio tiene explicación sencilla y guía por sección completa', () => {
  const simples = [...src.matchAll(/simple: '/g)]
  assert.equal(simples.length, ids.length)
  for (const chapter of ['preparacion', 'intencion', 'analisis']) {
    assert.ok(src.includes("id: '" + chapter + "', number:"))
    assert.ok(src.includes("chapter: '" + chapter + "', node:"))
  }
  assert.match(src, /mode === 'guia'/)
  assert.match(src, /mode === 'estudio'/)
  assert.match(src, /visible\.map/)
  assert.match(src, /setSelectedId\(visible\[next\]\.id\)/)
  assert.match(src, /setSelectedId\(id\)/)
  assert.match(src, /En palabras simples:/)
  assert.match(src, /Cerrar pantalla completa/)
})
