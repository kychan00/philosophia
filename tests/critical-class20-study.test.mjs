import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical20Themes } from '../src/data/critical20Themes.js'
import { critical20Sections, critical20SectionIds } from '../src/data/critical20Sections.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass20Aug.jsx')
const atlas=read('src/components/critical/Critical20ThematicAtlas.jsx')
const study=read('src/components/critical/Critical20SectionStudy.jsx')

test('clase 2 conserva once apartados y añade once unidades de estudio',()=>{
  const ids=['sentido','distincion','genealogia','hegel','marx','lukacs','freud','conceptos','interdisciplina','fromm','problema']
  assert.deepEqual(critical20SectionIds,ids)
  assert.equal(critical20Sections.length,11)
  assert.deepEqual([...page.matchAll(/<section id="([^"]+)"/g)].map(x=>x[1]),ids)
  assert.deepEqual([...page.matchAll(/<Critical20SectionStudy sectionId="([^"]+)" \/>/g)].map(x=>x[1]),ids)
  for(const [i,item] of critical20Sections.entries()){
    assert.equal(item.number,String(i).padStart(2,'0'))
    assert.ok(item.question.length>35&&item.thesis.length>45&&item.explanation.length>100,item.id)
    assert.equal(item.nodes.length,3)
    assert.equal(item.contrast.length,2)
    assert.ok(['parallel','sequence'].includes(item.relation))
    for(const key of ['what','how','why','simple','takeaway']) assert.ok(item.guide[key].length>50,item.id+' '+key)
    assert.ok(item.practice.question&&item.practice.cue&&item.evidence)
  }
})

test('cinco núcleos globales cubren el arco de la sesión sin genealogía lineal falsa',()=>{
  assert.equal(critical20Themes.length,5)
  assert.deepEqual(critical20Themes.map(x=>x.id),['sentido','distincion','genealogia','conceptos','fromm'])
  assert.ok(critical20Themes.every(x=>x.question&&x.thesis&&x.argument&&x.development&&x.source))
  assert.ok(critical20Themes.every(x=>x.nodes.length===3&&x.positions.length===2))
  assert.match(critical20Themes[2].development,/no debe leerse como una cadena simple/i)
  assert.match(critical20Themes[4].guide.takeaway,/no afirma que razón produzca necesariamente fascismo/i)
})

test('se preservan los núcleos académicos del folio preexistente',()=>{
  for(const snippet of [
    'No todo pensamiento crítico es Teoría Crítica',
    'Dos maneras de concebir el conocimiento',
    'La constelación que desemboca en Frankfurt',
    'Hegel: pensar históricamente',
    'Marx: condiciones sociales del pensamiento',
    'Lukács: cuando las relaciones parecen cosas',
    'Freud: la dominación entra en el sujeto',
    'Los conceptos tienen vida',
    'La sociedad exige varias disciplinas',
    'Obreros y empleados en vísperas del Tercer Reich',
    'La paradoja que organizará el curso',
    '¿Qué relaciones sociales hacen posible una determinada forma de pensar?',
    'Reale y Antiseri'
  ]) assert.ok(page.includes(snippet),'Falta contenido preservado: '+snippet)
  assert.match(page,/imagesForCriticalTheoryClass/)
  assert.match(page,/<Critical20ThematicAtlas \/>/)
})

test('interfaz marca procedencia, guía y límites editoriales',()=>{
  for(const marker of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(marker))
  for(const marker of ['PROBLEMA QUE ABRE EL APARTADO','PRUEBA DE RECUPERACIÓN','PROCEDENCIA']) assert.ok(study.includes(marker))
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
