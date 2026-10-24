import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { dialecticalSessions, dialecticalTransitions, dialecticalGlossary, dialecticalRoute } from '../src/data/dialecticalArchive.js'

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8')
const view = read('src/pages/DialecticalArchive.jsx')
const styles = read('src/pages/DialecticalArchive.css')
const app = read('src/App.jsx')

test('archivo integral registra trece sesiones y preserva sus rutas', () => {
  assert.equal(dialecticalSessions.length, 13)
  assert.equal(new Set(dialecticalSessions.map((s) => s.id)).size, 13)
  assert.ok(dialecticalSessions.every((s) => /^2026-(08|09|10)-\d{2}$/.test(s.date)))
  assert.ok(dialecticalSessions.every((s) => s.title && s.question && s.before && s.conflict && s.after && s.layers))
  assert.ok(dialecticalSessions.every((s) => app.includes('path="' + dialecticalRoute(s.id) + '"')))
  assert.equal((app.match(/<DialecticalSessionFrame id=/g) || []).length, 13)
  assert.equal((app.match(/<DialecticalRestoredClass id=/g) || []).length, 2)
  assert.match(app, /<DialecticalSessionFrame id="17-septiembre"><CriticalTheoryClass17Sep \/><\/DialecticalSessionFrame>/)
})

test('no se atribuyen episodios inventados a las notas parciales', () => {
  for (const id of ['17-septiembre', '22-septiembre']) {
    const s = dialecticalSessions.find((item) => item.id === id)
    assert.equal(s.status, 'Parcial')
  }
  assert.equal(dialecticalSessions.find((s) => s.id === '17-septiembre').example, null)
  assert.match(view, /no se asignan voces ni posturas/)
  assert.match(view, /Reconstrucción conceptual · no reproducción literal/)
  assert.match(view, /Pregunta editorial de recuperación/)
})

test('atlas dialéctico y herramientas de memoria disponibles', () => {
  assert.equal(dialecticalTransitions.length, 4)
  assert.equal(dialecticalGlossary.length, 6)
  assert.ok(dialecticalTransitions.every((t) => t.keep && t.deny && t.move && t.scope))
  assert.match(view, /da-exam/)
  assert.match(view, /exportMarkdown/)
  assert.match(view, /window\.print/)
  assert.match(view, /Pizarron/)
  assert.match(view, /da-board-fallback/)
})

test('navegación intra-página no rompe HashRouter y CSS admite móvil e impresión', () => {
  assert.doesNotMatch(view, /href="#da-/)
  assert.match(view, /scrollIntoView/)
  assert.match(styles, /@media\(max-width:650px\)/)
  assert.match(styles, /@media print/)
  assert.match(styles, /prefers-reduced-motion/)
  assert.match(styles, /\.da-legacy-content/)
})
