import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const page = readFileSync(new URL('../src/pages/AnalyticClass28Oct.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/AnalyticClass28Oct.css', import.meta.url), 'utf8')
const svg = readFileSync(new URL('../public/images/filosofia-analitica/archivum-28-octubre-descripciones.svg', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const course = readFileSync(new URL('../src/pages/AnalyticPhilosophy.jsx', import.meta.url), 'utf8')

test('Clase 28 octubre: ruta, índice y continuidad desde 26 octubre', () => {
  assert.match(app, /AnalyticClass28Oct/)
  assert.match(app, /filosofia-analitica\/clase\/28-octubre/)
  assert.match(course, /Decimonovena clase · Glock/)
  assert.match(course, /Moore, Russell y la estructura lógica oculta/)
  assert.match(page, /\/clase\/26-octubre/)
  assert.match(page, /\/lectura\/glock-capitulo-2/)
})

test('Clase 28 octubre: separa fuente de interpretación docente y no finge cotejo íntegro', () => {
  assert.match(page, /GLOCK · FRAGMENTO DE LECTURA/)
  assert.match(page, /EXPLICACIÓN DE CLASE/)
  assert.match(page, /PRECISIÓN EDITORIAL/)
  assert.match(page, /p\. 55 visible/)
  assert.match(page, /no una edición completa/i)
  assert.match(page, /No se identifica una nueva entrega evaluable/)
  assert.doesNotMatch(page, /grabaci[oó]n|transcripci[oó]n/i)
})

test('Clase 28 octubre: comprende sentido/referencia, bivalencia y críticas en capas distintas', () => {
  for (const term of ['Moore', 'Russell', 'Frege', 'Wittgenstein', 'Kant', 'Existencia', 'Unicidad', 'Predicación', 'Bivalencia']) {
    assert.ok(page.includes(term), term)
  }
  assert.match(page, /¿se las descubre o se las introduce/)
  assert.match(page, /∃x \[K\(x\)/)
  assert.match(page, /La lectura dualista del primer Wittgenstein/)
  assert.match(page, /¿Qué viene después/)
})

test('Clase 28 octubre: esquemas con datos, imagen original, alt, pie y mobile', () => {
  assert.equal([...page.matchAll(/<Schema title=/g)].length, 2)
  assert.match(page, /AnimatedConceptSchema schema=\{schema\}/)
  assert.match(page, /rootId: 'rebelion'/)
  assert.match(page, /rootId: 'oracion'/)
  assert.match(page, /archivum-28-octubre-descripciones\.svg/)
  assert.match(page, /alt="Esquema original/)
  assert.match(page, /figcaption/)
  assert.match(page, /ORIGINAL-OWNED/)
  assert.match(svg, /<svg/)
  assert.match(svg, /<title/)
  assert.match(svg, /<desc/)
  assert.match(css, /@media\(max-width:820px\)/)
})
