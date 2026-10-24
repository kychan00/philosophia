import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical27Themes } from '../src/data/critical27Themes.js'
import { critical27Sections, critical27SectionIds } from '../src/data/critical27Sections.js'
import { critical27Image } from '../src/data/critical27Image.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass27Aug.jsx')
const atlas=read('src/components/critical/Critical27ThematicAtlas.jsx')
const study=read('src/components/critical/Critical27SectionStudy.jsx')

test('folio 004 conserva diez apartados y añade diez unidades de estudio',()=>{
  const ids=['recap','negativa','hegel','contradiccion','metodo','negativo','ilustracion','instrumental','sociedad','hegel-task']
  assert.deepEqual(critical27SectionIds,ids)
  assert.equal(critical27Sections.length,10)
  assert.deepEqual([...page.matchAll(/<section id="([^"]+)"/g)].map(x=>x[1]),ids)
  assert.deepEqual([...page.matchAll(/<Critical27SectionStudy sectionId="([^"]+)" \/>/g)].map(x=>x[1]),ids)
  for(const [i,item] of critical27Sections.entries()){
    assert.equal(item.number,String(i).padStart(2,'0'))
    assert.ok(item.question.length>35&&item.thesis.length>45&&item.explanation.length>100,item.id)
    assert.equal(item.nodes.length,3)
    assert.equal(item.contrast.length,2)
    assert.ok(['parallel','sequence'].includes(item.relation))
    for(const key of ['what','how','why','simple','takeaway']) assert.ok(item.guide[key].length>50,item.id+' '+key)
    assert.ok(item.practice.question&&item.practice.cue&&item.evidence)
  }
})

test('atlas de cinco problemas cubre negatividad, contradicción, memoria, razón e integración',()=>{
  assert.equal(critical27Themes.length,5)
  assert.deepEqual(critical27Themes.map(x=>x.id),['negativa','contradiccion','negativo','ilustracion','sociedad'])
  assert.ok(critical27Themes.every(x=>x.question&&x.thesis&&x.argument&&x.development&&x.source))
  assert.match(critical27Themes[0].guide.takeaway,/no es ausencia de pensamiento/i)
  assert.match(critical27Themes[3].guide.takeaway,/recuperar la capacidad racional de discutir fines/i)
  assert.match(critical27Themes[4].guide.takeaway,/conceptos distintos/i)
})

test('se conserva el contenido filosófico, tarea e interacciones preexistentes',()=>{
  for(const snippet of [
    'Los cinco conceptos ya forman un sistema',
    'Antisistema, resto y no-identidad',
    'La disputa por la reconciliación',
    'La contradicción no siempre es un simple error lógico',
    'La contradicción social también debe investigarse',
    'La crítica sí propone, pero no diseña una sociedad perfecta',
    'La promesa emancipadora se invierte',
    'Cuando la razón deja de juzgar fines',
    'Unidimensionalidad e industria cultural',
    'Ahora hay que volver a Hegel',
    'Auschwitz','Dialéctica negativa','Razón instrumental','Industria cultural',
    'Sociedad unidimensional','Fenomenología del espíritu',
    '/tareas/teoria-critica/escuela-de-frankfurt/conceptos'
  ]) assert.ok(page.includes(snippet),'Falta contenido preservado: '+snippet)
  assert.match(page,/setIdentityView/)
  assert.match(page,/setHegelView/)
  assert.match(page,/setReasonView/)
  assert.match(page,/setCultureView/)
  assert.match(page,/setConceptIndex/)
})

test('imagen original, accesibilidad y fronteras editoriales están explícitas',()=>{
  assert.equal(critical27Image.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical27Image.classPath,'/semestre/5/teoria-critica/clase/27-agosto')
  assert.match(critical27Image.sourceBoundary,/no es un esquema literal/i)
  assert.match(page,/critical27Image/)
  assert.match(page,/import\.meta\.env\.BASE_URL/)
  const svg=read('public/'+critical27Image.imagePath)
  assert.match(svg,/viewBox=/)
  assert.match(svg,/<title id=/)
  assert.match(svg,/<desc id=/)
  for(const marker of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(marker))
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
