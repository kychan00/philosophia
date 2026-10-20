import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { glockNodes } from '../src/data/glockAnalyticChapter2.js'
import { glockClass19Oct } from '../src/data/glockClass19Oct.js'

const page = readFileSync(new URL('../src/pages/AnalyticClass19Oct.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/AnalyticClass19Oct.css', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const course = readFileSync(new URL('../src/pages/AnalyticPhilosophy.jsx', import.meta.url), 'utf8')
const glockPage = readFileSync(new URL('../src/pages/AnalyticGlockSystem.jsx', import.meta.url), 'utf8')

test('Clase 19 oct: ruta, índice y lectura Glock enlazados', () => {
  assert.match(app, /AnalyticClass19Oct/)
  assert.match(app, /filosofia-analitica\/clase\/19-octubre/)
  assert.match(course, /Decimosexta clase · Hans-Johann Glock/)
  assert.match(course, /Prehistoria del análisis y revolución copernicana/)
  assert.match(course, /disponibles: 40–45 \+ inicio de 46/)
  assert.match(page, /lectura\/glock-capitulo-2/)
})

test('Clase 19 oct: separa fuente, explicación de clase y precisión editorial', () => {
  assert.match(page, /GLOCK · FUENTE PRIMARIA/)
  assert.match(page, /EXPLICACIÓN DE CLASE/)
  assert.match(page, /PRECISIÓN/)
  assert.match(page, /AMPLIACIÓN DOCENTE/)
  assert.doesNotMatch(page, /grabaci[oó]n|transcripci[oó]n/i)
})

test('Clase 19 oct: tres esquemas canónicos explican movimientos reales', () => {
  const schemaUses = [...page.matchAll(/<AnimatedConceptSchema/g)]
  assert.equal(schemaUses.length, 3)
  assert.match(page, /Dos sentidos históricos del análisis/)
  assert.match(page, /Materia y forma de la experiencia/)
  assert.match(page, /Tres respuestas al problema postkantiano/)
  assert.match(css, /animated-concept-schema__svg/)
  assert.match(css, /min-height:620px/)
})

test('Glock 2D: todos los nodos recibidos tienen capa docente 19 octubre', () => {
  assert.equal(Object.keys(glockClass19Oct).length, glockNodes.length)
  for (const node of glockNodes) {
    assert.ok(node.data.class19Oct, node.id)
    assert.ok(node.data.class19Oct.note.length > 45, node.id)
    assert.ok(node.data.sourcePassage.length > 180, node.id)
  }
  assert.match(glockPage, /CAPA DOCENTE · CLASE 19 OCTUBRE/)
  assert.match(glockPage, /ABRIR CLASE COMPLETA/)
  assert.match(glockPage, /texto literal conservado en Obsidian/)
  assert.doesNotMatch(glockPage, /transcripci[oó]n literal conservada/i)
})

test('Clase 19 oct: no inventa tarea ni completa la página 46', () => {
  assert.match(page, /No se registró una tarea nueva formulada explícitamente/)
  assert.match(page, /página\s+completa todavía no forma parte del material archivado/)
  assert.match(page, /no se reconstruye/i)
})
