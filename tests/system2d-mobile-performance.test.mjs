import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const routeBasedPages = [
  '../src/pages/AnalyticGlockSystem.jsx',
  '../src/pages/AnalyticHackerSystem.jsx',
  '../src/pages/HartmannChapterOneSystem.jsx',
  '../src/pages/HegelCroceTaskSystem.jsx',
  '../src/pages/KantDialecticSystem.jsx',
  '../src/pages/LukacsOntologySystem.jsx',
  '../src/pages/LukacsReificationSystem.jsx',
  '../src/pages/MarxCommodityValueSystem.jsx',
  '../src/pages/CafeMercadotecniaSystem2D.jsx',
  '../src/pages/NavaTechnoscienceSystem.jsx',
]

const compactOptimizedPages = [
  ...routeBasedPages,
  '../src/pages/KantAnalyticSystem.jsx',
]

const source = (path) => readFileSync(new URL(path, import.meta.url), 'utf8')

test('los atlas con rutas no arrancan en all en viewport compacto', () => {
  for (const path of routeBasedPages) {
    const text = source(path)
    assert.match(text, /initialSystem2DRoute/, 'falta ruta inicial segura: ' + path)
    assert.match(text, /useSystem2DCompactViewport/, 'falta detector compacto: ' + path)
    assert.doesNotMatch(text, /const \[route[^\]]*\]\s*=\s*useState\(['"]all['"]\)/, 'route=all fijo: ' + path)
    assert.doesNotMatch(text, /const \[branch[^\]]*\]\s*=\s*useState\(['"]all['"]\)/, 'branch=all fijo: ' + path)
  }
})

test('los atlas auditados reducen el trabajo de React Flow en móvil', () => {
  for (const path of compactOptimizedPages) {
    const text = source(path)
    assert.match(text, /onlyRenderVisibleElements/, 'falta render visible: ' + path)
    assert.match(text, /compactViewport/, 'falta guardia compacta: ' + path)
    assert.ok(
      text.includes('!compactViewport && <MiniMap') ||
      text.includes('!compactViewport&&<MiniMap'),
      'minimapa sin guardia compacta: ' + path,
    )
    assert.doesNotMatch(text, /onlyRenderVisibleElements>/, 'sintaxis corrupta por sustitución: ' + path)
  }
})

test('Lukács cosificación filtra nodos y aristas ocultos antes del canvas', () => {
  const text = source('../src/pages/LukacsReificationSystem.jsx')
  assert.match(text, /nodes=\{compactViewport \? nodes\.filter\(\(node\) => !node\.hidden\) : nodes\}/)
  assert.match(text, /edges=\{compactViewport \? edges\.filter\(\(edge\) => !edge\.hidden\) : edges\}/)
  assert.match(text, /if \(item\.id === 'all' && !compactViewport\)/)
  assert.match(text, /if \(!compactViewport\) setTimeout\(\(\) => fitView/)
})

test('la norma web incluye el presupuesto de renderizado móvil', () => {
  const text = source('../docs/REGLA_SISTEMAS_2D_IPAD_TABLET.md')
  assert.match(text, /Presupuesto de renderizado y supervivencia en Safari móvil/)
  assert.match(text, /No iniciar en \`all\`/)
  assert.match(text, /onlyRenderVisibleElements/)
  assert.match(text, /No montar \`MiniMap\` por defecto/)
})
