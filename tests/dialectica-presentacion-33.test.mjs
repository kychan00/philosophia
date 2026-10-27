import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const html=readFileSync(new URL('../public/estudio/dialectica-comparada.html',import.meta.url),'utf8')
const page=readFileSync(new URL('../src/pages/MethodsClass26Oct.jsx',import.meta.url),'utf8')

test('la presentación comparativa conserva las 33 láminas y navegación accesible',()=>{
  assert.match(html,/const slides=\[/)
  assert.equal((html.match(/folio:"/g)||[]).length,33)
  assert.match(html,/01 \/ SÓCRATES Y PLATÓN/)
  assert.match(html,/02 \/ HEGEL/)
  assert.match(html,/03 \/ MARX/)
  assert.match(html,/Tesis → antítesis → síntesis/)
  assert.match(html,/Misma familia de problemas, distintos métodos/)
  assert.match(html,/Fuentes primarias/)
  assert.match(html,/¿Cómo piensa<br>cada dialéctica<br>el cambio\?/)
  assert.match(html,/aria-label="Diapositiva anterior"/)
  assert.match(html,/ArrowRight/)
  assert.match(html,/@media print/)
})

test('la clase de Métodos enlaza la presentación publicada y ya no un PR histórico',()=>{
  assert.match(page,/estudio\/dialectica-comparada\.html/)
  assert.match(page,/33 láminas/)
  assert.doesNotMatch(page,/philosophia\/pull\/34/)
})
