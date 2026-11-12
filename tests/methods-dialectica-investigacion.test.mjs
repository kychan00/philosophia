import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const methods = await readFile(new URL('../src/pages/MethodsResearch.jsx', import.meta.url), 'utf8')
const html = await readFile(new URL('../public/estudio/dialectica-investigacion.html', import.meta.url), 'utf8')
const mobile = await readFile(new URL('../public/estudio/dialectica-investigacion/dialectica-mobile.css', import.meta.url), 'utf8')
const polish = await readFile(new URL('../public/estudio/dialectica-investigacion/dialectica-polish.css', import.meta.url), 'utf8')

test('la exposición vive dentro de Métodos de Investigación Filosófica', () => {
  assert.match(methods, /Exposiciones y recursos/)
  assert.match(methods, /estudio\/dialectica-investigacion\.html/)
  assert.match(methods, /estudio\/dialectica-comparada\.html/)
  assert.match(methods, /Dialéctica: oposición, examen y revisión/)
})

test('la página usa identidad PHILOSOPHIA y vuelve a FI104', () => {
  assert.match(html, /Dialéctica como método de investigación · PHILOSOPHIA/)
  assert.match(html, />PHILOSOPHIA</)
  assert.match(html, /FI104 · Métodos de Investigación Filosófica/)
  assert.match(html, /\.\.\/#\/semestre\/5\/metodos-de-investigacion/)
  assert.doesNotMatch(html, /kychan00\.github\.io\/InvestigacionFilosofica/)
})

test('conserva las fronteras académicas y la fuente', () => {
  assert.match(html, /SÍNTESIS PARA EXPONER · NO CITA TEXTUAL/)
  assert.match(html, /SÍNTESIS DE CIERRE · NO CITA TEXTUAL/)
  assert.match(html, /Luis Enrique Ortiz Gutiérrez/)
})

test('conserva responsive y arreglos de solapamiento', () => {
  assert.match(mobile, /min-height: 44px/)
  assert.match(mobile, /safe-area-inset-bottom/)
  assert.match(polish, /\.dx-socratic-bubble/)
  assert.match(polish, /data-kant-state="limit"/)
  assert.match(polish, /data-transformation-step="determination"/)
  assert.match(polish, /\.dx-depth-rail::after/)
})
