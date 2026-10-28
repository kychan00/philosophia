import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const src = readFileSync(new URL('../src/pages/MethodsPhenomenologyAppliedSystem2D.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/MethodsPhenomenologySystem2D.css', import.meta.url), 'utf8')
const visuals = readFileSync(new URL('../src/pages/MethodsPhenomenologyVisuals.jsx', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const study = readFileSync(new URL('../src/pages/MethodsPhenomenologyExposition.jsx', import.meta.url), 'utf8')
const route = '/estudio/fenomenologia-metodo/sistema-2d'
const ids = [...src.matchAll(/id: '([mc]\d+)'/g)].map(match => match[1])

test('Sistema 2D fenomenológico: ruta, acceso y 18 nodos únicos', () => {
  assert.ok(app.includes(route))
  assert.ok(study.includes(route))
  assert.equal(ids.length, 18)
  assert.equal(new Set(ids).size, 18)
})

test('Dos movimientos: método y caso aplicado', () => {
  assert.ok(src.includes("id: 'metodo'"))
  assert.ok(src.includes("id: 'caso'"))
  assert.match(src, /chapterId==='todo'\?3:2/)
  assert.match(src, /xGap=chapterId==='todo'\?540:570/)
  assert.match(src, /yGap=chapterId==='todo'\?330:350/)
  assert.match(src, /style:\{width:370,height:184\}/)
  assert.match(src, /nodesDraggable=\{false\}/)
  assert.match(src, /nodesConnectable=\{false\}/)
  assert.doesNotMatch(src, /MiniMap/)
})

test('La proyección pública es autónoma y sin notas privadas', () => {
  assert.doesNotMatch(src, /source: '/)
  assert.doesNotMatch(src, /Clase \d+/)
  assert.doesNotMatch(src, /octubre/i)
  assert.doesNotMatch(src, /grabaci[oó]n|transcripci[oó]n/i)
  assert.doesNotMatch(src, /Para exponer/i)
  assert.match(src, /Idea central/)
  assert.match(src, /Qué significa metodológicamente/)
  assert.match(src, /En palabras simples:/)
})

test('El caso nuevo no repite el ejemplo del celular', () => {
  assert.match(src, /estar perdido en una ciudad desconocida/i)
  assert.doesNotMatch(src, /miedo ante una amenaza digital|mensaje amenazante|celular/i)
})

test('La aplicación desarrolla el método paso a paso', () => {
  for (const title of [
    'Delimitar el fenómeno',
    'Diseñar el estudio',
    'Descripción natural',
    'Aplicar la epojé',
    'Noesis ↔ noema',
    'Cuerpo vivido',
    'Espacio vivido',
    'Tiempo e intersubjetividad',
    'Variación eidética',
    'Síntesis estructural',
  ]) assert.ok(src.includes(title), title)
})

test('Modo proyección recorre los 18 nodos y puede cerrarse', () => {
  assert.match(src, /Proyectar recorrido/)
  assert.match(src, /setChapterId\('todo'\)/)
  assert.match(src, /setMode\('guia'\)/)
  assert.match(src, /setProjection\(true\)/)
  assert.match(src, /setExpanded\(true\)/)
  assert.match(src, /Salir de proyección/)
  assert.match(src, /visible\[step\]\.short/)
  assert.match(css, /\.phen2d-system\.projection/)
})


test('Los 18 nodos tienen representación SVG propia', () => {
  for (const id of ids) assert.match(visuals, new RegExp('\\b'+id+'\\s*:'), 'falta visual para '+id)
  assert.match(src, /PhenomenologyNodeVisual/)
  assert.match(src, /<PhenomenologyNodeVisual id=\{selected\.id\}/)
  assert.match(visuals, /<svg className="phen2d-visual-svg"/)
  assert.match(css, /\.phen2d-visual-svg/)
  assert.match(css, /max-height:220px/)
})


test('El atlas aplica foco con blur y fondo grafito', () => {
  assert.match(src, /has-node-focus/)
  assert.match(src, /color="#525252"/)
  assert.match(css, /background:#161616/)
  assert.match(css, /background:#262626/)
  assert.match(css, /react-flow__node:not\(\.selected\)\{filter:blur\(2\.2px\);opacity:\.24\}/)
  assert.match(css, /react-flow__node\.selected\{filter:none;opacity:1/)
})

test('El SVG de rigor hermenéutico evita etiquetas sobre los anillos', () => {
  assert.match(visuals, /LENGUAJE/)
  assert.match(visuals, /HISTORIA/)
  assert.match(visuals, /MUNDO COMPARTIDO/)
  assert.match(visuals, /RIGOR = HACER EXPLÍCITOS LOS HORIZONTES/)
})
