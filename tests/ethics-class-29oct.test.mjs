import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const file = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8')
const page = file('src/pages/EthicsClass29Oct.jsx')
const css = file('src/pages/EthicsClass29Oct.css')
const illustration = file('public/images/etica/2026-10-29/logos-estima-convivencia.svg')
const app = file('src/App.jsx')
const hub = file('src/pages/EthicsClassics.jsx')

test('ética 29oct: ruta y catálogo', () => {
  assert.match(app, /EthicsClass29Oct/)
  assert.match(app, /etica\/clase\/29-octubre/)
  assert.match(hub, /etica\/clase\/29-octubre/)
})
test('ética 29oct: fuentes y discusión con límites documentales', () => {
  for (const term of ['Ángel J. Cappelletti', 'Séneca', 'estima social', 'mujeres y niños primero', 'Vergüenza', 'lectura']) {
    assert.ok(page.toLowerCase().includes(term.toLowerCase()), 'falta: ' + term)
  }
  assert.match(page, /No consta lista definitiva, plazo/)
  assert.match(page, /no puede concluirse que el estoicismo justifique/)
  assert.match(page, /Contraste externo/)
})
test('ética 29oct: imagen pedagógica trazable y explicada', () => {
  assert.match(page, /images\/etica\/2026-10-29\/logos-estima-convivencia\.svg/)
  assert.match(page, /<img[^>]+alt=/)
  assert.match(page, /<figcaption>/)
  assert.match(illustration, /<title/)
  assert.match(illustration, /<desc/)
  assert.match(illustration, /ORIGINAL-OWNED/)
  assert.match(illustration, /Relaciones reconstruidas/)
})
test('ética 29oct: ETHOS, navegación y responsive', () => {
  assert.match(page, /ethicsx-meander/)
  assert.match(page, /eth29-nodes/)
  assert.match(page, /scrollIntoView/)
  assert.match(css, /#1a365d/)
  assert.match(css, /@media\(max-width:520px\)/)
  assert.match(css, /prefers-reduced-motion/)
})
