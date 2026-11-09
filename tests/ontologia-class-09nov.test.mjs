import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const page = readFileSync(new URL('../src/pages/OntologiaClass09Nov.jsx', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const index = readFileSync(new URL('../src/pages/OntologiaII.jsx', import.meta.url), 'utf8')
const svg = readFileSync(new URL('../public/images/ontologia/2026-11-09/kant-schopenhauer-nietzsche.svg', import.meta.url), 'utf8')

assert.match(app, /\/semestre\/5\/ontologia-ii\/clase\/9-noviembre/)
assert.match(index, /Clase del 9 de noviembre · Schopenhauer y Nietzsche/)
assert.match(page, /Arthur Schopenhauer/)
assert.match(page, /voluntad de vida/i)
assert.match(page, /El origen de la tragedia/)
assert.match(page, /Más allá del bien y del mal/)
assert.match(page, /tareas\/ontologia-ii\/nietzsche-verdad-metafisica/)
assert.match(page, /dato biográfico seguro/)
assert.match(page, /la continuación no se reconstruye/i)
assert.match(page, /Diagrama pedagógico original de PHILOSOPHIA/)
assert.match(svg, /<title id="title">Kant, Schopenhauer y Nietzsche<\/title>/)
assert.match(svg, /<desc id="desc">/)
assert.doesNotMatch(page, /apol[ií]neo|dionis[ií]aco/i)
assert.doesNotMatch(page.toLowerCase(), /transcripci[oó]n|grabaci[oó]n/)

console.log('OK Ontología II · clase 9 noviembre · fidelidad, ruta e imagen')
