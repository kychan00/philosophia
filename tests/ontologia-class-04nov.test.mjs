import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const page = readFileSync(new URL('../src/pages/OntologiaClass04Nov.jsx', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const index = readFileSync(new URL('../src/pages/OntologiaII.jsx', import.meta.url), 'utf8')
const svg = readFileSync(new URL('../public/images/ontologia/2026-11-04/positivismo-cuatro-reglas.svg', import.meta.url), 'utf8')

assert.match(app, /\/semestre\/5\/ontologia-ii\/clase\/4-noviembre/)
assert.match(index, /Clase del 4 de noviembre · Positivismo/)
assert.match(page, /Fenomenalismo/)
assert.match(page, /Nominalismo/)
assert.match(page, /Juicios cognoscitivos y juicios de valor/)
assert.match(page, /Unidad del método/)
assert.match(page, /tareas\/ontologia-ii\/kolakowski-positivismo/)
assert.match(page, /no se registra aquí una tarea con rango o fecha inventados/)
assert.match(page, /Diagrama pedagógico original de PHILOSOPHIA/)
assert.match(svg, /<title id="title">Positivismo, cuatro reglas y crítica contemporánea<\/title>/)
assert.match(svg, /<desc id="desc">/)
assert.doesNotMatch(page.toLowerCase(), /transcripci[oó]n|grabaci[oó]n/)

console.log('OK Ontología II · clase 4 noviembre · fidelidad, ruta e imagen')
