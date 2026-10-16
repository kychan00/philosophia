import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  lukacsOntologyNodes,
  lukacsOntologyRoutes,
  lukacsOntologyComparisons,
  lukacsOntologyCrossRelations,
  lukacsOntologySource,
} from '../src/data/lukacsOntologySystem.js'

test('ontología social conserva nodos documentales y rutas no vacías', () => {
  assert.equal(lukacsOntologyNodes.length, 42)
  assert.equal(new Set(lukacsOntologyNodes.map(node => node.id)).size, 42)
  const ids = new Set(lukacsOntologyNodes.map(node => node.id))
  for (const route of lukacsOntologyRoutes.filter(route => route.id !== 'all')) {
    assert.ok(lukacsOntologyNodes.some(node => node.data.branch.includes(route.id)), route.id)
  }
  for (const node of lukacsOntologyNodes) {
    assert.ok(node.data.sourceRef)
    assert.ok(node.data.sourceAttribution)
    assert.ok(node.data.excerpt)
    assert.ok(node.data.question)
    assert.ok(node.data.dependsOn.every(id => ids.has(id)), node.id + ': dependencia inexistente')
    assert.ok(!/cita literal/i.test(node.data.sourcePassage), node.id + ': no debe fingir cita textual')
  }
})

test('granularización conserva 12 micro-nodos sin alterar la ruta nuclear', () => {
  const micro = lukacsOntologyNodes.filter(node => node.data.micro)
  assert.equal(micro.length, 12)
  assert.ok(micro.every(node => /^D\d{2}$/.test(node.id)))
  const page = readFileSync(new URL('../src/pages/LukacsOntologySystem.jsx', import.meta.url), 'utf8')
  assert.match(page, /Boolean\(node\.data\.micro\) && !detailMode/)
  assert.match(page, /Detalles · \{detailMode \? 'ON' : 'OFF'\}/)
})

test('distingue introducción de Ballestero y texto principal de Lukács', () => {
  const editorial = lukacsOntologyNodes.filter(node => node.data.phase === 'Introducción editorial')
  const main = lukacsOntologyNodes.filter(node => node.data.phase !== 'Introducción editorial')
  assert.ok(editorial.length >= 5)
  assert.ok(editorial.every(node => /Ballestero/.test(node.data.sourceAttribution)))
  assert.ok(main.every(node => /Lukács/.test(node.data.sourceAttribution)))
})

test('las lagunas de la copia y el cierre perdido permanecen explícitos', () => {
  assert.match(lukacsOntologySource.boundary, /27 páginas ocultas/)
  assert.match(lukacsOntologySource.hiddenPages, /217/)
  const last = lukacsOntologyNodes.find(node => node.id === 'L07')
  assert.ok(last)
  assert.match(last.data.excerpt, /217/)
  assert.match(last.data.sourceRef, /cierre p\. 217 no recuperado/)
})

test('relaciones transversales resuelven nodos y distinguen voces', () => {
  const ids = new Set(lukacsOntologyNodes.map(node => node.id))
  assert.equal(lukacsOntologyCrossRelations.length, 16)
  for (const relation of lukacsOntologyCrossRelations) {
    assert.ok(ids.has(relation.source))
    assert.ok(ids.has(relation.target))
    assert.ok(relation.synthesis && relation.distinction && relation.question)
  }
  const voiceRelation = lukacsOntologyCrossRelations.find(r => r.id === 'LO01')
  assert.match(voiceRelation.distinction, /Ballestero/)
})

test('confrontaciones HCC permanecen parciales y ancladas en nodos documentados', () => {
  const ids = new Set(lukacsOntologyNodes.map(node => node.id))
  assert.equal(lukacsOntologyComparisons.length, 8)
  for (const comparison of lukacsOntologyComparisons) {
    assert.ok(ids.has(comparison.anchor), comparison.id + ': ancla inexistente')
    assert.ok(comparison.ontologyRef)
    assert.ok(comparison.hccRef)
    assert.ok(comparison.synthesis)
    assert.ok(comparison.distinction)
    assert.match(comparison.boundary, /RECONSTRUCCIÓN|CONEXIÓN TRANSVERSAL/)
  }
  const individual = lukacsOntologyComparisons.find(c => c.id === 'HC08')
  assert.match(individual.distinction, /No se concluye/)
})

test('página pública usa etiquetas documentales y no presenta paráfrasis como pasajes directos', () => {
  const page = readFileSync(new URL('../src/pages/LukacsOntologySystem.jsx', import.meta.url), 'utf8')
  assert.match(page, /BASE DOCUMENTAL/)
  assert.match(page, /NOTA DE LECTURA/)
  assert.doesNotMatch(page, /PASAJE DEL TEXTO/)
  assert.match(page, /Ballestero ≠ Lukács/)
  assert.match(page, /lukacsOntologyNodes\.length/)
  assert.match(page, /estructura nuclear/)
  assert.match(page, /CONFRONTACIÓN HCC · FASE 7/)
  assert.match(page, /RECONSTRUCCIÓN COMPARATIVA/)
})
