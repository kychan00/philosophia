import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { glockNodes } from '../src/data/glockAnalyticChapter2.js'
import { glockClass19Oct } from '../src/data/glockClass19Oct.js'

const page = readFileSync(new URL('../src/pages/AnalyticClass19Oct.jsx', import.meta.url), 'utf8')
const page26 = readFileSync(new URL('../src/pages/AnalyticClass26Oct.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/AnalyticClass19Oct.css', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const course = readFileSync(new URL('../src/pages/AnalyticPhilosophy.jsx', import.meta.url), 'utf8')
const glockPage = readFileSync(new URL('../src/pages/AnalyticGlockSystem.jsx', import.meta.url), 'utf8')

test('Clase 19 oct: ruta, índice y lectura Glock enlazados', () => {
  assert.match(app, /AnalyticClass19Oct/)
  assert.match(app, /filosofia-analitica\/clase\/19-octubre/)
  assert.match(course, /Decimosexta clase · Hans-Johann Glock/)
  assert.match(course, /Prehistoria del análisis y revolución copernicana/)
  assert.match(course, /texto cotejado: 40–53; atlas 2D: 40–51; continuación pendiente: 54–86/)
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

test('Glock 2D: los 21 nodos de la clase del 19 tienen su capa docente independiente', () => {
  const taught = glockNodes.filter(n => n.data.class19Oct)
  const later = glockNodes.filter(n => !n.data.class19Oct)
  assert.equal(Object.keys(glockClass19Oct).length, 21)
  assert.equal(taught.length, 21)
  assert.equal(later.length, 18)
  for (const node of taught) {
    assert.ok(node.data.class19Oct, node.id)
    assert.ok(node.data.class19Oct.note.length > 45, node.id)
    assert.ok(node.data.sourcePassage.length > 180, node.id)
  }
  for (const node of later) {
    assert.equal(node.data.class19Oct, null, node.id)
    assert.ok(node.data.sourcePassage.length > 180, node.id)
  }
  assert.match(glockPage, /EXPLICACIÓN DOCENTE · 19 OCT 2026/)
  assert.match(glockPage, /Abrir clase completa/i)
  assert.match(glockPage, /TEXTO ORIGINAL DE GLOCK/)
  assert.match(glockPage, /\/semestre\/5\/filosofia-analitica\/clase\/19-octubre/)
  assert.doesNotMatch(glockPage, /grabaci[oó]n|transcripci[oó]n/i)
})

test('Clase 19 oct: no inventa tarea ni completa la página 46', () => {
  assert.match(page, /No se registró una tarea nueva formulada explícitamente/)
  assert.match(page, /página\s+completa todavía no forma parte del material archivado/)
  assert.match(page, /no se reconstruye/i)
})


test('Clase 26 oct: ruta, fuente hasta p. 53 y capas editoriales', () => {
  assert.match(app, /AnalyticClass26Oct/)
  assert.match(app, /filosofia-analitica\/clase\/26-octubre/)
  assert.match(course, /Decimoctava clase · Glock pp\. 50–53/)
  assert.match(course, /Frege, Russell y la rebelión contra el idealismo/)
  assert.match(page26, /Glock hasta p\. 53/)
  assert.match(page26, /EXPLICACIÓN DE CLASE/)
  assert.match(page26, /GLOCK · TEXTO COTEJADO/)
  assert.match(page26, /PRECISIÓN EDITORIAL/)
  assert.match(page26, /∀x ∃y/)
  assert.match(page26, /∃y ∀x/)
  assert.match(page26, /bolsa de bolsas/i)
  assert.match(page26, /Idealismo británico/)
  assert.match(page26, /coherencia/i)
  assert.match(page26, /archivum-26-octubre-frege-russell-moore\.svg/)
  assert.doesNotMatch(page26, /grabaci[oó]n|transcripci[oó]n/i)
})

test('Clase 26 oct: usa tres esquemas y no finge ampliación del atlas Glock', () => {
  const schemaUses = [...page26.matchAll(/<AnimatedConceptSchema/g)]
  assert.equal(schemaUses.length, 3)
  assert.match(page26, /atlas existente sigue documentado hasta p\. 51/i)
  assert.match(page26, /La sesión alcanzó la página 53/)
  assert.match(page26, /No se recuperó una nueva tarea evaluable/)
})
