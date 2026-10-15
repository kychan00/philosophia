import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const read = (p) => readFileSync(new URL(p, import.meta.url), 'utf8')
const page = read('../src/pages/AnalyticClass14Oct.jsx')
const css = read('../src/pages/AnalyticClass14Oct.css')
const shared = read('../src/components/analytic/AnalyticEditorialElements.jsx')
const sharedCss = read('../src/components/analytic/AnalyticEditorialElements.css')

test('La clase piloto importa solamente la base editorial y su propio CSS', () => {
  const imports = [...page.matchAll(/import ['"]([^'"]+\.css)['"]/g)].map(m => m[1])
  assert.deepEqual(imports, [
    '../components/analytic/AnalyticEditorialElements.css',
    './AnalyticClass09Sep.css',
    './AnalyticClass14Oct.css',
  ])
  assert.match(page, /analytic-editorial-page ac9-page ac1410-page/)
  assert.doesNotMatch(page, /className="[^"]*ac21-|className="[^"]*ac28-/)
})

test('Estructura editorial reutilizable conserva capítulos, navegación e índice', () => {
  assert.match(page, /<AnalyticEditorialHeading/)
  assert.match(page, /<AnalyticEditorialIndex/)
  assert.match(shared, /<h2>\{children\}<\/h2>/)
  assert.match(shared, /sections\.map/)
  assert.match(shared, /onNavigate\(id\)/)
  for (const id of ['programa','unidad','criticas','realismo','significado','metodo','ciencias','transicion']) {
    assert.match(page, new RegExp("['\"]" + id + "['\"]"))
    assert.match(page, new RegExp('id="' + id + '"'))
  }
  assert.match(page, /Hacker/)
  assert.match(page, /Glock/)
  assert.match(page, /lunes 19 de octubre de 2026/)
})

test('El enlace de críticas navega dentro de la página sin romper HashRouter', () => {
  assert.match(page, /onClick=\{\(\) => goTo\('criticas'\)\}/)
  assert.doesNotMatch(page, /href="#criticas"/)
})

test('Identidad con tokens y estados de teclado accesibles', () => {
  assert.match(sharedCss, /--analytic-editorial-gold/)
  assert.match(css, /var\(--analytic-editorial-gold\)/)
  assert.match(sharedCss, /:focus-visible/)
  assert.match(sharedCss, /min-height: 44px/)
  assert.match(css, /@media \(max-width: 1100px\)/)
  assert.match(css, /@media \(max-width: 760px\)/)
  assert.doesNotMatch(page, /grabaci[oó]n|transcripci[oó]n/i)
})
