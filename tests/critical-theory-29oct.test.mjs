import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { criticalTheoryImages } from '../src/data/criticalTheoryImages.js'
import { tasks } from '../src/data/tasks.js'
import { dialecticalSessions } from '../src/data/dialecticalArchive.js'

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8')
const page = read('src/pages/CriticalTheoryClass29Oct.jsx')
const app = read('src/App.jsx')
const refs = read('src/data/classReferences/part7.js')

test('clase 29 octubre queda registrada sin inventar una sesión el 27', () => {
  const session = dialecticalSessions.find(item => item.id === '29-octubre')
  assert.ok(session)
  assert.equal(session.date, '2026-10-29')
  assert.match(session.title, /Freud/)
  assert.match(page, /El 27 de octubre no hubo sesión/)
  assert.match(app, /CriticalTheoryClass29Oct/)
  assert.match(app, /clase\/29-octubre/)
  assert.doesNotMatch(page, /grabación|transcrip/i)
})

test('doble capa, imagen y límites documentales', () => {
  assert.match(page, /Cinco problemas para reconstruir la sesión/)
  assert.match(page, /Dieciséis apartados de estudio/)
  assert.match(page, /RECONSTRUCCIÓN DE PHILOSOPHIA/)
  assert.match(page, /No se registra temario, formato, páginas ni hora límite/)
  const media = criticalTheoryImages.find(item => item.classPath === '/semestre/5/teoria-critica/clase/29-octubre')
  assert.ok(media)
  assert.equal(media.imageLicense, 'ORIGINAL-OWNED')
  const svg = read('public/' + media.imagePath)
  assert.match(svg, /viewBox=/)
  assert.match(svg, /<title id=/)
  assert.match(svg, /<desc id=/)
})

test('calendario conserva lectura y examen como hechos distintos', () => {
  const reading = tasks.find(item => item.id === 'teoria-critica-2026-11-03-freud-cierre')
  const exam = tasks.find(item => item.id === 'teoria-critica-2026-11-05-examen')
  assert.ok(reading && exam)
  assert.equal(reading.assignedDate, '2026-10-29')
  assert.equal(reading.dueDate, '2026-11-03')
  assert.match(reading.description, /sin un rango de páginas/i)
  assert.equal(exam.dueDate, '2026-11-05')
  assert.match(exam.description, /no quedaron confirmados/i)
  assert.match(refs, /2026-10-29/)
  assert.match(refs, /Freud - El malestar en la cultura/)
})
