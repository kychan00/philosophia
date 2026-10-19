import test from 'node:test'
import assert from 'node:assert/strict'
import { hegelLogicAssignedReading } from '../src/data/hegelLogic77to98.js'
import {
  hegelCroceNodes, hegelCroceGuidedRoute, hegelCroceEdges,
  hegelCroceCrossRelations, hegelCrocePhases, hegelCroceStats
} from '../src/data/hegelCroceTaskSystem.js'

test('Hegel: 21 nodos primarios, 7 apoyos docentes y atlas extensible', () => {
  assert.equal(hegelLogicAssignedReading.length, 28)
  const ids = hegelLogicAssignedReading.map(row => row[0])
  assert.equal(ids.filter(id => id.startsWith('P')).length, 21)
  assert.equal(ids.filter(id => id.startsWith('M')).length, 7)
  assert.equal(new Set(ids).size, 28)
  assert.equal(hegelCroceStats.nodes, hegelCroceNodes.length)
  assert.equal(hegelCroceStats.nodes, 152)
  assert.equal(hegelCroceGuidedRoute.length, hegelCroceNodes.length)
  assert.equal(hegelCroceStats.schemas, hegelCroceNodes.length)
  assert.ok(hegelCrocePhases.includes('Lectura · 77–98'))
  assert.ok(hegelCrocePhases.includes('Apoyo docente · Hegel'))
})

test('Hegel: toda arista apunta a un nodo y conserva localizadores', () => {
  const map = new Map(hegelCroceNodes.map(node => [node.id, node]))
  assert.equal(map.size, hegelCroceNodes.length)
  for (const node of hegelCroceNodes) {
    for (const dep of node.data.dependsOn) {
      assert.ok(map.has(dep), node.id + ': dependencia ' + dep)
    }
    assert.ok(node.data.schema?.nodes?.length > 0, node.id + ': esquema ausente')
  }
  for (const edge of hegelCroceEdges) {
    assert.ok(map.has(edge.source) && map.has(edge.target), edge.id)
  }
  for (const [id,source,target] of hegelCroceCrossRelations) {
    assert.ok(map.has(source) && map.has(target), 'relación ' + id)
  }
  for (const row of hegelLogicAssignedReading) {
    const [id,phase,,,,,,routes,,,,page] = row
    assert.ok(page?.length > 6,id + ': localizador ausente')
    assert.ok(routes.includes('reading77'), id + ': ruta ausente')
    assert.equal(phase.startsWith('Lectura') ? id.startsWith('P') : id.startsWith('M'),true)
    const node=map.get(id)
    assert.ok(node.data.sourceMode.includes(id.startsWith('P')?'PRIMARIO':'DOCENTES'))
  }
})

test('Hegel: nodos dispuestos sin solapes geométricos, incluyendo filas de la lectura nueva', () => {
  const width = 310
  const maxHeight = 430 // límite de la tarjeta en HegelCroceTaskSystem.css
  const boxes = hegelCroceNodes.map(node => ({
    id:node.id, left:node.position.x, right:node.position.x+width,
    top:node.position.y, bottom:node.position.y+maxHeight,
  }))
  for (let i=0;i<boxes.length;i++) {
    const a=boxes[i]
    for (let j=i+1;j<boxes.length;j++) {
      const b=boxes[j]
      const overlap = a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top
      assert.equal(overlap,false,'nodos superpuestos: '+a.id+' y '+b.id)
    }
  }
})
