import test from 'node:test'
import assert from 'node:assert/strict'
import {
  nietzscheCloseReading24to33,
  nietzscheCloseReadingEdges24to33,
  nietzscheCloseReadingNodes24to33,
  nietzscheEditorialApparatus24to33,
} from '../src/data/nietzscheTruthSystem24to33.js'

test('Nietzsche pp. 24–33: la ampliación conserva trazabilidad fuente → nodo', () => {
  assert.equal(nietzscheCloseReading24to33.length, 107)
  assert.equal(nietzscheCloseReadingNodes24to33.length, 49)
  assert.equal(nietzscheCloseReadingEdges24to33.length, 55)

  const pages = [...new Set(nietzscheCloseReading24to33.map((item) => item.page))]
  assert.deepEqual(pages, [24,25,26,27,28,29,30,31,32,33])

  const nodeIds = new Set(nietzscheCloseReadingNodes24to33.map((node) => node.id))
  assert.ok(nietzscheCloseReading24to33.every((item) =>
    item.phrase && item.reading && nodeIds.has(item.mapTo),
  ))
})

test('Nietzsche pp. 24–33: el aparato editorial no se mezcla con el cuerpo del ensayo', () => {
  assert.equal(nietzscheEditorialApparatus24to33.length, 4)
  assert.ok(nietzscheEditorialApparatus24to33.every((item) => item.note))
  assert.match(
    nietzscheEditorialApparatus24to33.find((item) => item.id === 'ED-24-C').note,
    /No se atribuye a Nietzsche/,
  )
  assert.match(
    nietzscheEditorialApparatus24to33.find((item) => item.id === 'ED-26-A').note,
    /aparato crítico/,
  )
})

test('Nietzsche pp. 24–28: pacto, lenguaje, metáfora, concepto y verdad forman una secuencia documentada', () => {
  const labels = new Map(nietzscheCloseReadingNodes24to33.map((node) => [node.id, node.label]))
  assert.match(labels.get('S24-9'), /pacto fija.*verdad/i)
  assert.match(labels.get('S25-4'), /palabras.*cosas/i)
  assert.match(labels.get('S26-3'), /cosa en sí.*inalcanzable/i)
  assert.match(labels.get('S26-5'), /Impulso nervioso.*imagen.*sonido/i)
  assert.match(labels.get('S27-3'), /equiparar casos no iguales/i)
  assert.match(labels.get('S28-3'), /metáforas.*metonimias.*antropomorfismos/i)
  assert.match(labels.get('S28-4'), /ilusiones.*olvida/i)
})

test('Nietzsche pp. 29–33: el edificio conceptual desemboca en antropomorfismo, mediación y formas aportadas', () => {
  const labels = new Map(nietzscheCloseReadingNodes24to33.map((node) => [node.id, node.label]))
  assert.match(labels.get('S29-3'), /edificio conceptual/i)
  assert.match(labels.get('S30-4'), /antropomórficas/i)
  assert.match(labels.get('S31-4'), /Sujeto y objeto/i)
  assert.match(labels.get('S32-4'), /ley natural.*no se conoce en sí/i)
  assert.match(labels.get('S33-1'), /lo que nosotros aportamos/i)
  assert.match(labels.get('S33-5'), /formas/i)
})

test('Nietzsche pp. 24–33: la continuidad comienza en S24-7 y termina en S33-5', () => {
  assert.deepEqual(
    nietzscheCloseReadingEdges24to33[0],
    {
      from: 'S24-7',
      to: 'S24-8',
      label: 'la pregunta conduce al pacto social',
      relationKind: 'derives',
    },
  )
  assert.ok(
    nietzscheCloseReadingEdges24to33.some(
      (edge) => edge.from === 'S32-4' && edge.to === 'S33-1',
    ),
  )
  assert.equal(
    nietzscheCloseReadingNodes24to33.at(-1).id,
    'S33-5',
  )
})
