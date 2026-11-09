import test from 'node:test'
import assert from 'node:assert/strict'
import {
  nietzscheCloseReading21to24,
  nietzscheCloseReadingNodes21to24,
  nietzscheCloseReadingSchema21to24,
  nietzscheEditorialApparatus21to24,
  nietzscheStudySchema,
  nietzscheStudySource,
  nietzscheStudyStations,
} from '../src/data/nietzscheTruthSystem.js'

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


test('Nietzsche: lectura cercana pp. 21–24 conserva folios y trazabilidad', () => {
  assert.equal(nietzscheCloseReading21to24.length, 41)
  assert.deepEqual(
    [...new Set(nietzscheCloseReading21to24.map((item)=>item.page))],
    [21,22,23,24],
  )
  assert.ok(nietzscheCloseReading21to24.every((item)=>item.phrase && item.reading && item.mapTo))
  const nodeIds=new Set(nietzscheCloseReadingNodes21to24.map((node)=>node.id))
  assert.ok(nietzscheCloseReading21to24.every((item)=>nodeIds.has(item.mapTo)))
  assert.equal(nietzscheEditorialApparatus21to24.length,2)
})

test('Nietzsche: sistema 2D pp. 21–24 tiene 28 nodos y cierre en el impulso hacia la verdad', () => {
  assert.equal(nietzscheCloseReadingSchema21to24.layout,'constellation')
  assert.equal(nietzscheCloseReadingSchema21to24.nodes.length,28)
  assert.equal(nietzscheCloseReadingSchema21to24.edges.length,31)
  assert.match(
    nietzscheCloseReadingSchema21to24.nodes.at(-1).label,
    /impulso hacia la verdad/i,
  )
  assert.ok(
    nietzscheCloseReadingSchema21to24.edges.some(
      (edge)=>edge.label==='paradoja central' && edge.to==='S24-7',
    ),
  )
})
