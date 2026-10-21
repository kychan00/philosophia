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

test('ética 20oct: facsímiles originales y enlace destacado al retorno', () => {
  assert.match(page, /eth20-manuscript-primary/)
  assert.match(page, /hoja-03-eterno-retorno\.svg/)
  assert.match(page, /hoja-01-paradojas-y-logos\.svg/)
  assert.match(page, /hoja-02-logos-y-ciclos\.svg/)
  assert.match(page, /import\.meta\.env\.BASE_URL/)
  assert.match(page, /PDF.*estoicos\.pdf/)
  assert.match(css, /eth20-facsimile-grid/)
  assert.match(css, /max-width:780px/)
  for (const file of ['hoja-01-paradojas-y-logos.svg','hoja-02-logos-y-ciclos.svg','hoja-03-eterno-retorno.svg']) {
    const source = read('public/images/etica/2026-10-20/' + file)
    assert.match(source, /^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)
    assert.match(source, /<path /)
    assert.match(source, /<\/svg>$/)
  }
})
