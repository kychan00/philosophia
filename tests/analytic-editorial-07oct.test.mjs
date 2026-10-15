import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const read = (p) => readFileSync(new URL(p, import.meta.url), 'utf8')
const page = read('../src/pages/AnalyticClass07Oct.jsx')
const css = read('../src/pages/AnalyticClass07Oct.css')
const theme = read('../src/components/analytic/AnalyticEditorialElements.css')
const shared = read('../src/components/analytic/AnalyticEditorialElements.jsx')

test('El folio 07 Oct usa la arquitectura editorial y tres hojas CSS', () => {
  const imports = [...page.matchAll(/import ['"]([^'"]+\.css)['"]/g)].map(m => m[1])
  assert.deepEqual(imports, [
    '../components/analytic/AnalyticEditorialElements.css',
    './AnalyticClass09Sep.css',
    './AnalyticClass07Oct.css',
  ])
  assert.match(page, /analytic-editorial-page ac9-page ac07-page/)
  assert.match(page, /<AnalyticEditorialHeading/)
  assert.match(page, /<AnalyticEditorialIndex/)
  assert.match(shared, /onNavigate\(id\)/)
  assert.doesNotMatch(page, /className="[^"]*ac21-|className="[^"]*ac28-|className="[^"]*ac30-/)
})

test('Se preservan los trece apartados y su recorrido docente', () => {
  const ids = [...page.matchAll(/<section id="([^"]+)"/g)].map(m => m[1])
  assert.deepEqual(ids, [
    'mapa', 'tradicion', 'hacker', 'clarificacion', 'carnap',
    'metafisica', 'mistico', 'realismo', 'verificacion',
    'empirismo', 'logica', 'historia', 'pendiente',
  ])
  assert.match(page, /Hacker · pp. 126–130/)
  assert.match(page, /Círculo de Viena/)
  assert.match(page, /Index analyticorum/)
  assert.match(page, /esquema|RUTA DE LA SESIÓN/i)
  assert.doesNotMatch(page, /grabaci[oó]n|transcripci[oó]n/i)
})

test('Folios 07 y 14 Oct comparten componentes y tokens, pero no sus cuadros', () => {
  const page14 = read('../src/pages/AnalyticClass14Oct.jsx')
  assert.match(page14, /<AnalyticEditorialIndex/)
  assert.match(page14, /<AnalyticEditorialHeading/)
  for (const cls of ['ac07-summary-grid','ac07-note','ac07-thesis','ac07-ending','ac07-actions','ac07-no-task']) {
    assert.match(css, new RegExp('\\.' + cls + '\\b'))
  }
  for (const token of ['slate','slate-dark','ochre','terra']) {
    assert.match(theme, new RegExp('--analytic-editorial-' + token + ':'))
  }
  assert.match(css, /@media\(max-width:1100px\)/)
  assert.match(css, /@media\(max-width:760px\)/)
  assert.match(theme, /min-height: 44px/)
})
