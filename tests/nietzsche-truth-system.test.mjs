import test from 'node:test'
import assert from 'node:assert/strict'
import { nietzscheStudySchema, nietzscheStudySource, nietzscheStudyStations } from '../src/data/nietzscheTruthSystem.js'

test('Nietzsche: ocho estaciones con frontera documental explícita', () => {
  assert.equal(nietzscheStudyStations.length, 8)
  assert.equal(new Set(nietzscheStudyStations.map((item) => item.id)).size, 8)
  assert.match(nietzscheStudySource.boundary, /reconstrucción pedagógica/i)
  assert.match(nietzscheStudyStations[7].layer, /PHILOSOPHIA/)
  assert.match(nietzscheStudyStations[7].source, /no es una fórmula literal/i)
})
test('Nietzsche: esquema 2D conserva orden, fuentes y relaciones', () => {
  assert.equal(nietzscheStudySchema.layout, 'flow')
  assert.equal(nietzscheStudySchema.direction, 'vertical')
  assert.equal(nietzscheStudySchema.nodes.length, 8)
  assert.equal(nietzscheStudySchema.edges.length, 7)
  assert.ok(nietzscheStudyStations.slice(0,4).every((item)=>item.source.includes('Sobre verdad y mentira')))
  assert.ok(nietzscheStudyStations.slice(4,7).every((item)=>item.source.includes('Más allá del bien y del mal')))
})

test('Nietzsche: la edición preferida es Tecnos 2012 y el sistema no hereda paginación de 1996', () => {
  assert.match(nietzscheStudySource.optionB, /Tecnos, 2\.ª ed\., 2012/)
  assert.ok(nietzscheStudyStations.slice(0,4).every((item)=>item.source.includes('§1')))
  assert.ok(nietzscheStudyStations.slice(0,4).every((item)=>!item.source.includes('pp. impresas')))
})
