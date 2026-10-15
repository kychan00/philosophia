import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { hackerNodes, hackerOrder, hackerRoutes } from '../src/data/hackerAnalyticSystem.js'
const byId = new Map(hackerNodes.map(n => [n.id, n]))
const route = '/semestre/5/filosofia-analitica/clase/14-octubre'
test('Clase del 14 de octubre incorporada sin duplicar las ocho críticas de Hacker', () => {
  assert.equal(hackerNodes.length, 122)
  assert.equal(new Set(hackerNodes.map(n => n.id)).size, 122)
  assert.deepEqual([...byId.keys()].sort(), [...hackerOrder].sort())
  assert.ok(hackerRoutes.some(r => r.id === 'class14oct'))
  for (let i=1; i<=8; i++) {
    const node = byId.get('H52.' + i)
    assert.ok(node?.data.additionalClassNotes?.some(note => note.route === route))
    assert.ok(node.data.branch.includes('class14oct'))
  }
})
test('Doce notas nuevas distinguen explicación docente de texto primario y enlazan a clase', () => {
  const newNodes = hackerNodes.filter(n => n.id.startsWith('HC14O-'))
  assert.equal(newNodes.length, 12)
  for (const n of newNodes) {
    assert.equal(n.data.classOnly, true)
    assert.equal(n.data.classRoute, route)
    assert.ok(n.data.classHeader.includes('14 OCT'))
    assert.ok(n.data.branch.includes('class14oct'))
    for (const dependency of n.data.dependsOn) assert.ok(byId.has(dependency), dependency)
  }
})
test('Página, índice e inspector enlazan la nueva clase sin eliminar anotaciones previas', () => {
  const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
  const page = readFileSync(new URL('../src/pages/AnalyticHackerSystem.jsx', import.meta.url), 'utf8')
  const index = readFileSync(new URL('../src/pages/AnalyticPhilosophy.jsx', import.meta.url), 'utf8')
  const lesson = readFileSync(new URL('../src/pages/AnalyticClass14Oct.jsx', import.meta.url), 'utf8')
  assert.ok(app.includes(route))
  assert.ok(index.includes(route))
  assert.match(page,/additionalClassNotes\?\.map/)
  assert.match(lesson,/Hacker/)
  assert.match(lesson,/Glock/)
  assert.doesNotMatch(lesson,/grabaci[oó]n|transcripci[oó]n/i)
})

test('La entrega del reporte de Hacker es la próxima clase: 19 oct 2026', async () => {
  const { tasks } = await import('../src/data/tasks.js')
  const assignment = tasks.find((task) => task.id === 'analitica-2026-09-28-segundo-reporte-hacker')
  assert.equal(assignment?.dueDate, '2026-10-19')
  assert.equal(assignment?.dueTime, undefined)
  assert.match(assignment.description, /19 de octubre de 2026/)
  const lesson = readFileSync(new URL('../src/pages/AnalyticClass14Oct.jsx', import.meta.url), 'utf8')
  assert.match(lesson, /lunes 19 de octubre de 2026/)
  assert.doesNotMatch(lesson, /no queda inequívoco cuál miércoles/)
  const closure = byId.get('HC14O-12')
  assert.match(closure.data.explanation, /19 de octubre de 2026/)
})
