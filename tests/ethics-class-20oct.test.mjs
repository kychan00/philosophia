import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8')
const page = read('src/pages/EthicsClass20Oct.jsx')
const css = read('src/pages/EthicsClass20Oct.css')
const app = read('src/App.jsx')
const index = read('src/pages/EthicsClassics.jsx')
const timelines = read('src/data/libraryTimelines.js')

test('ética 20oct: clase enlazada en router e índice', () => {
  assert.match(app, /EthicsClass20Oct = lazy/)
  assert.match(app, /\/semestre\/5\/etica\/clase\/20-octubre/)
  assert.match(index, /\/semestre\/5\/etica\/clase\/20-octubre/)
  assert.match(index, /Paradojas del sentido y eterno retorno/)
})

test('ética 20oct: cuatro esquemas, fuente y advertencias documentales', () => {
  assert.equal((page.match(/number: '(?:I|II|III|IV)'/g) ?? []).length, 4)
  assert.match(page, /Paradojas del sentido/)
  assert.match(page, /átomos que caen en el vacío/)
  assert.match(page, /principios activo y pasivo/)
  assert.match(page, /la tripartición antigua/i)
  assert.match(page, /Cicerón/)
  assert.match(page, /22 de octubre/)
})

test('ética 20oct: nodos verticales y no anclas hash que rompan el enrutador', () => {
  assert.match(css, /\.eth20-node-track\{display:flex;flex-direction:column/)
  assert.match(css, /\.eth20-node\{position:relative/)
  assert.match(css, /@media\(max-width:760px\)/)
  assert.doesNotMatch(page, /href="#eth20-/)
  assert.match(page, /scrollIntoView/)
})

test('ética 20oct: biblioteca vincula autor citado, sin atribuir lectura a la obra', () => {
  assert.match(timelines, /"Cicerón, Marco Tulio": \[/)
  assert.match(timelines, /Ética - Estoicismo, paradojas del sentido y eterno retorno/)
  assert.match(page, /no se acredita lectura íntegra/)
})
