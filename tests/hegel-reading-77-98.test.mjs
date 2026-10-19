import test from 'node:test'
import assert from 'node:assert/strict'
import { hegelLogicAssignedReading, hegelReadingSequence } from '../src/data/hegelLogic77to98.js'
import { hegelTeacherSlides, hegelTeacherSlideById } from '../src/data/hegelTeacherSlides.js'
import { hegelOntologySlides, hegelOntologySlideById } from '../src/data/hegelOntologySlides.js'
import {
  hegelCroceNodes, hegelCroceGuidedRoute, hegelCroceEdges,
  hegelCroceCrossRelations, hegelCrocePhases, hegelCroceStats
} from '../src/data/hegelCroceTaskSystem.js'

test('Hegel: 21 pasajes y 24 apoyos docentes integrados en una lectura', () => {
  assert.equal(hegelLogicAssignedReading.length, 45)
  const ids = hegelLogicAssignedReading.map(row => row[0])
  assert.equal(ids.filter(id => id.startsWith('P')).length, 21)
  assert.equal(ids.filter(id => id.startsWith('M')).length, 7)
  assert.equal(ids.filter(id => id.startsWith('E')).length, 9)
  assert.equal(ids.filter(id => id.startsWith('F')).length, 8)
  assert.equal(new Set(ids).size, 45)
  assert.equal(hegelCroceStats.nodes, hegelCroceNodes.length)
  assert.equal(hegelCroceStats.nodes, 169)
  assert.equal(hegelCroceGuidedRoute.length, hegelCroceNodes.length)
  assert.equal(hegelCroceStats.schemas, hegelCroceNodes.length)
  assert.ok(hegelCrocePhases.includes('Lectura · 77–98'))
  assert.equal(hegelCrocePhases.includes('Apoyo docente · Hegel'),false)
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
  for (const row of hegelLogicAssignedReading.filter(row => row[0].startsWith('P') || row[0].startsWith('M'))) {
    const [id,phase,,,,,,routes,,,,page] = row
    assert.ok(page?.length > 6,id + ': localizador ausente')
    assert.ok(routes.includes('reading77'), id + ': ruta ausente')
    assert.equal(phase,'Lectura · 77–98')
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

test('Hegel: los 169 folios usan geometría vertical sin aristas huérfanas', () => {
  for (const node of hegelCroceNodes) {
    const schema = node.data.schema
    assert.equal(schema.layout, 'hierarchy', node.id)
    assert.equal(schema.readingLayout, 'vertical-folio', node.id)
    assert.ok(schema.hierarchyXGap >= 70, node.id)
    assert.ok(schema.hierarchyYGap >= 140, node.id)
    assert.ok(schema.minHeight >= 600, node.id)
    const ids = new Set(schema.nodes.map(item => item.id))
    assert.equal(ids.size, schema.nodes.length, node.id)
    const isTeacherSlide = node.id.startsWith('E') || node.id.startsWith('F')
    assert.ok(isTeacherSlide ? ids.size >= 5 : ids.has('focus'), node.id)
    for (const edge of schema.edges) {
      assert.ok(ids.has(edge.from) && ids.has(edge.to), node.id)
      if (!isTeacherSlide) {
        assert.ok(edge.from === 'focus' || edge.to === 'focus', node.id)
      }
    }
  }
})

test('Presentación docente: nueve diapositivas con texto extenso y explicación sistémica', () => {
  const expectedParts=[5,5,5,3,4,4,4,3,4]
  assert.equal(hegelTeacherSlides.length,9)
  for (const [index,slide] of hegelTeacherSlides.entries()) {
    assert.equal(slide.id,`E${String(index+1).padStart(2,'0')}`)
    assert.equal(slide.slide,index+1)
    assert.equal(slide.literal.length,expectedParts[index],slide.id)
    assert.ok(slide.literal.every(p=>p.length>=25),slide.id)
    assert.ok(slide.explanation.length>430,slide.id)
    assert.ok(slide.steps.length>=5,slide.id)
    assert.ok(slide.dependsOn.length>0,slide.id)
    assert.ok(hegelTeacherSlideById.has(slide.id),slide.id)
    const node=hegelCroceNodes.find(n=>n.id===slide.id)
    assert.ok(node,node?.id)
    assert.equal(node.data.teacherSlide,slide)
    assert.equal(node.data.schema.nodes.length,slide.steps.length)
    assert.equal(node.data.schema.edges.length,slide.steps.length-1)
    assert.ok(node.data.schema.minHeight>=slide.steps.length*200)
    assert.ok(node.data.schema.edges.every(e=>e.relationKind==='hierarchical'))
    assert.ok(node.data.sourceMode.includes('DOCENTES'))
  }
})

test('Presentación docente: relaciones y continuidad con texto primario, sin perder la guía', () => {
  assert.equal(hegelCroceStats.crossRelations,74)
  assert.equal(hegelCroceGuidedRoute.length,169)
  assert.deepEqual(
    hegelCroceGuidedRoute.filter(item=>item.id.startsWith('E')).map(item=>item.id),
    hegelTeacherSlides.map(item=>item.id)
  )
  const relations=new Map(hegelCroceCrossRelations.map(([id,from,to])=>[id,{from,to}]))
  for (let i=40;i<=56;i++) assert.ok(relations.has('R'+i),'Relación II R'+i)
  assert.equal(relations.get('R48').from,'E05')
  assert.equal(relations.get('R48').to,'E06')
  assert.equal(relations.get('R55').from,'E08')
  assert.equal(relations.get('R55').to,'E09')
})

test('Ruta única: desaparece Presentaciones del profesor y el orden integra las dos fuentes', async () => {
  const {hegelCroceRoutes}=await import('../src/data/hegelCroceTaskSystem.js')
  assert.equal(hegelCroceRoutes.some(r=>r.id==='docente'),false)
  assert.equal(hegelCroceRoutes.filter(r=>r.id==='reading77').length,1)
  assert.equal(hegelReadingSequence.length,45)
  assert.deepEqual(hegelLogicAssignedReading.map(row=>row[0]),hegelReadingSequence)
  for(const row of hegelLogicAssignedReading) {
    assert.equal(row[1],'Lectura · 77–98',row[0])
    assert.ok(row[7].includes('reading77'),row[0])
    assert.equal(row[7].includes('docente'),false,row[0])
    const node=hegelCroceNodes.find(n=>n.id===row[0])
    assert.ok(node,node?.id)
    assert.equal(node.data.phase,'Lectura · 77–98',row[0])
    const isSlide=/^[EF]/.test(row[0])
    if(isSlide) {
      assert.ok(node.data.sourceMode.includes('DOCENTES'),row[0])
      assert.ok(node.data.page.includes('Presentación'),row[0])
    }
    if(row[0].startsWith('P'))assert.ok(node.data.sourceMode.includes('PRIMARIO'),row[0])
  }
})

test('Hegel: las ocho diapositivas de Los problemas ontológicos se conservan completas',()=>{
  assert.equal(hegelOntologySlides.length,8)
  const parts=[6,5,6,3,3,4,6,3]
  for (const [i,slide] of hegelOntologySlides.entries()){
    assert.equal(slide.id,`F${String(i+1).padStart(2,'0')}`)
    assert.equal(slide.slide,i+1)
    assert.equal(slide.seriesTotal,8)
    assert.equal(slide.literal.length,parts[i],slide.id)
    assert.ok(slide.literal.every(p=>p.length>=20),slide.id)
    assert.ok(slide.explanation.length>400,slide.id)
    assert.ok(slide.steps.length>=5,slide.id)
    assert.ok(hegelOntologySlideById.has(slide.id))
    const node=hegelCroceNodes.find(n=>n.id===slide.id)
    assert.equal(node.data.teacherSlide,slide)
    assert.equal(node.data.schema.nodes.length,slide.steps.length)
    assert.equal(node.data.schema.edges.length,slide.steps.length-1)
    assert.ok(node.data.schema.edges.every(edge=>edge.relationKind==='hierarchical'))
  }
  for(let i=57;i<=74;i++)
    assert.ok(hegelCroceCrossRelations.some(([id])=>id==='R'+i),'R'+i)
})
