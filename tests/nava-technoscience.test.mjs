import test from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
import {navaNodes,navaEdges,navaOrder,navaRoutes,navaById,NAVA_GEOMETRY} from '../src/data/navaTechnoscience2026.js'
import {books,authors} from '../src/data/libraryCatalog.js'
import {libraryAcademicConnections} from '../src/data/libraryAcademicConnections.js'
import {libraryApaMetadata} from '../src/data/libraryApaMetadata.js'
import {documentedConceptLinks} from '../src/data/libraryConceptEvidence.js'

const ID='Nava - Tecnociencia, entorno y sujeto tecnocientífico'
const route='/semestre/5/filosofia-analitica/lectura/nava-tecnociencia'

test('doce núcleos documentales, cuatro rutas exhaustivas y sin nodos huérfanos',()=>{
  assert.equal(navaNodes.length,12)
  assert.equal(navaOrder.length,12)
  assert.deepEqual(navaOrder,navaNodes.map(n=>n.id))
  assert.equal(new Set(navaOrder).size,12)
  const sections=navaRoutes.filter(r=>r.id!=='all').map(r=>r.id)
  assert.equal(sections.length,4)
  for(const n of navaNodes){
    assert.ok(sections.includes(n.data.section),'sección desconocida '+n.id)
    assert.ok(/p\./.test(n.data.page),'sin referencia de página '+n.id)
    for(const field of ['title','source','explanation','question','sourceRef']){
      assert.ok(n.data[field]?.length>20,'campo documental débil: '+n.id+'/'+field)
    }
    assert.equal(n.data.diagram.length,3,'esquema incompleto '+n.id)
    assert.equal(n.draggable,false,'nodos no deben desplazarse')
    assert.ok(n.data.color.startsWith('#'),'usa paleta canónica')
  }
  assert.equal(new Set(navaNodes.map(n=>n.data.section)).size,4)
  assert.ok(navaEdges.length>=12)
  for(const edge of navaEdges){
    assert.ok(navaById(edge.source),'arista sin origen')
    assert.ok(navaById(edge.target),'arista sin destino')
    assert.ok(edge.explanation.includes('Diagrama editorial'),'procedencia no declarada')
  }
})

test('geometría de nodos fija y sin superposiciones',()=>{
  for(let i=0;i<navaNodes.length;i++)for(let j=i+1;j<navaNodes.length;j++){
    const a=navaNodes[i].position,b=navaNodes[j].position
    const overlapX=Math.min(a.x+NAVA_GEOMETRY.width,b.x+NAVA_GEOMETRY.width)-Math.max(a.x,b.x)
    const overlapY=Math.min(a.y+NAVA_GEOMETRY.height,b.y+NAVA_GEOMETRY.height)-Math.max(a.y,b.y)
    assert.ok(overlapX<=0||overlapY<=0,'superposición '+navaNodes[i].id+'/'+navaNodes[j].id)
  }
})

test('recomendación con autor, procedencia, URL, APA y conceptos verificables',()=>{
  const record=books.find(b=>b.id===ID)
  assert.ok(record)
  assert.equal(record.estado,'recomendada')
  assert.equal(record.studyUrl,route)
  assert.ok(authors.includes('Nava Amezcua, Alonso'))
  assert.equal(libraryApaMetadata[ID].kind,'article')
  assert.equal(libraryApaMetadata[ID].year,2026)
  assert.equal(libraryApaMetadata[ID].pages,'21–30')
  const origin=libraryAcademicConnections.works[ID]?.events
  assert.equal(origin.length,1)
  assert.equal(origin[0].kind,'procedencia')
  assert.equal(origin[0].date,'2026-10-19')
  assert.equal(origin[0].url,route)
  assert.ok(origin[0].dateLabel.includes('registro'))
  assert.deepEqual(documentedConceptLinks[ID],[
    'Tecnociencia (Nava)','Sujeto tecnocientífico (Nava)','Razón instrumental'
  ])
  const app=readFileSync(new URL('../src/App.jsx',import.meta.url),'utf8')
  assert.ok(app.includes('path="'+route+'"'))
})

test('capa editorial y posición documental distintas de clase o lectura confirmada',()=>{
  const source=readFileSync(new URL('../src/pages/NavaTechnoscienceSystem.jsx',import.meta.url),'utf8')
  assert.match(source,/FRONTERA DE FUENTE/)
  assert.match(source,/PARÁFRASIS/)
  assert.match(source,/estudiante/)
  assert.match(source,/SectionPedagogy/)
  assert.match(source,/GUÍA COMPLETA/)
  assert.match(source,/ABRIR FOLIO Y ESQUEMA/)
  assert.match(source,/nava-folio-layer/)
})
