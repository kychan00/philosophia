import test from 'node:test'
import assert from 'node:assert/strict'
import {
  nietzscheCloseReading33to37,
  nietzscheCloseReadingEdges33to37,
  nietzscheCloseReadingNodes33to37,
  nietzscheEditorialApparatus33to37,
} from '../src/data/nietzscheTruthSystem33to37.js'

test('Nietzsche pp. 33–37: la Parte 2 conserva trazabilidad fuente → nodo', () => {
  assert.equal(nietzscheCloseReading33to37.length, 78)
  assert.equal(nietzscheCloseReadingNodes33to37.length, 27)
  assert.equal(nietzscheCloseReadingEdges33to37.length, 33)

  const pages = [...new Set(nietzscheCloseReading33to37.map((item) => item.page))]
  assert.deepEqual(pages, [33,34,35,36,37])

  const nodeIds = new Set(nietzscheCloseReadingNodes33to37.map((node) => node.id))
  assert.ok(nietzscheCloseReading33to37.every((item) =>
    item.phrase && item.reading && nodeIds.has(item.mapTo),
  ))
})

test('Nietzsche pp. 33–37: encabezados entre corchetes permanecen como aparato editorial', () => {
  assert.equal(nietzscheEditorialApparatus33to37.length, 4)
  assert.deepEqual(
    nietzscheEditorialApparatus33to37.map((item) => item.page),
    [33,33,34,36],
  )
  assert.ok(nietzscheEditorialApparatus33to37.every((item) =>
    /edici[oó]n|aparato editorial/i.test(item.note),
  ))
})

test('Nietzsche Parte 2: ciencia → impulso metafórico → mito/arte queda documentado', () => {
  const labels = new Map(nietzscheCloseReadingNodes33to37.map((node) => [node.id, node.label]))
  assert.match(labels.get('S33-6'), /Lenguaje primero, ciencia después/i)
  assert.match(labels.get('S34-1'), /ciencia.*columbarium/i)
  assert.match(labels.get('S34-4'), /impulso.*metáforas.*sobrevive/i)
  assert.match(labels.get('S34-5'), /Mito y arte/i)
  assert.match(labels.get('S34-7'), /vigilia.*sueño/i)
})

test('Nietzsche Parte 2: engaño artístico e intelecto liberado quedan diferenciados del engaño perjudicial', () => {
  const labels = new Map(nietzscheCloseReadingNodes33to37.map((node) => [node.id, node.label]))
  assert.match(labels.get('S35-4'), /desea ser engañado.*felicidad/i)
  assert.match(labels.get('S35-5'), /fingir sin causar daño/i)
  assert.match(labels.get('S35-6'), /Saturnales/i)
  assert.match(labels.get('S36-1'), /siervo.*necesidad.*señor creador/i)
  assert.match(labels.get('S36-4'), /intuiciones/i)
})

test('Nietzsche cierre: hombre racional / intuitivo termina en la ironía de la máscara estoica', () => {
  const labels = new Map(nietzscheCloseReadingNodes33to37.map((node) => [node.id, node.label]))
  assert.match(labels.get('S36-6'), /Hombre racional y hombre intuitivo/i)
  assert.match(labels.get('S37-1'), /dominio del arte sobre la vida/i)
  assert.match(labels.get('S37-4'), /liberación.*sufre/i)
  assert.match(labels.get('S37-5'), /estoico/i)
  assert.match(labels.get('S37-6'), /máscara de fingimiento/i)
})

test('Nietzsche pp. 33–37: continuidad canónica inicia en S33-5 y concluye en S37-6', () => {
  assert.deepEqual(
    nietzscheCloseReadingEdges33to37[0],
    {
      from: 'S33-5',
      to: 'S33-6',
      label: 'abre la Parte 2',
      relationKind: 'derives',
    },
  )
  assert.equal(nietzscheCloseReadingNodes33to37.at(-1).id, 'S37-6')
})
