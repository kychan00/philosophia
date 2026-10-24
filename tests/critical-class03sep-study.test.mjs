import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical03SepThemes } from '../src/data/critical03SepThemes.js'
import { critical03SepSections, critical03SepSectionIds } from '../src/data/critical03SepSections.js'
import { critical03SepImage } from '../src/data/critical03SepImage.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass03Sep.jsx')
const atlas=read('src/components/critical/Critical03SepThematicAtlas.jsx')
const study=read('src/components/critical/Critical03SepSectionStudy.jsx')

test('folio 006 conserva doce apartados y añade doce unidades de estudio',()=>{
  const ids=['mapa','saber','fenomenologia','figuras','escision','ciencia','kant','dialectica','negatividad','espiral','absoluto','tarea']
  assert.deepEqual(critical03SepSectionIds,ids)
  assert.equal(critical03SepSections.length,12)
  assert.deepEqual([...page.matchAll(/<section id="([^"]+)"/g)].map(x=>x[1]),ids)
  assert.deepEqual([...page.matchAll(/<Critical03SepSectionStudy sectionId="([^"]+)" \/>/g)].map(x=>x[1]),ids)
  for(const [i,item] of critical03SepSections.entries()){
    assert.equal(item.number,String(i).padStart(2,'0'))
    assert.ok(item.question.length>35&&item.thesis.length>45&&item.explanation.length>100,item.id)
    assert.equal(item.nodes.length,3)
    assert.equal(item.contrast.length,2)
    assert.ok(['parallel','sequence'].includes(item.relation))
    for(const key of ['what','how','why','simple','takeaway']) assert.ok(item.guide[key].length>50,item.id+' '+key)
    assert.ok(item.practice.question&&item.practice.cue&&item.evidence)
  }
})

test('atlas cubre saber, experiencia, escisión, organicidad y superación',()=>{
  assert.equal(critical03SepThemes.length,5)
  assert.deepEqual(critical03SepThemes.map(x=>x.id),['saber','fenomenologia','escision','ciencia','dialectica'])
  assert.ok(critical03SepThemes.every(x=>x.question&&x.thesis&&x.argument&&x.development&&x.source))
  assert.match(critical03SepThemes[0].guide.takeaway,/no significa saber todos los datos/i)
  assert.match(critical03SepThemes[3].guide.takeaway,/no a toda distinción analítica/i)
  assert.match(critical03SepThemes[4].guide.takeaway,/no se reduce a ‘tesis–antítesis–síntesis’/i)
})

test('se conserva el contenido e interacciones preexistentes',()=>{
  for(const snippet of [
    'Del conocimiento especializado al saber de la totalidad',
    'Conocimiento y saber no significan lo mismo',
    'La Fenomenología es ciencia de las experiencias de la conciencia',
    'La conciencia atraviesa figuras y aprende de sus fracasos',
    'La escisión hace posible el movimiento',
    'Hegel contrapone una ciencia orgánica a la fragmentación disciplinar',
    'Dos maneras de construir un sistema',
    'En sí · para sí · en sí y para sí',
    'Lo falso no se tira a la basura',
    'El movimiento se parece más a una espiral que a una línea',
    'Tres maneras de aprehender el absoluto',
    'Revisar el índice de la Fenomenología del espíritu',
    'Conciencia natural','Razón','Autoconciencia',
    'Holismo y pensamiento complejo','Morin',
    'Arte','Religión','Filosofía'
  ]) assert.ok(page.includes(snippet),'Falta contenido preservado: '+snippet)
  for(const setter of ['setFigureId','setScienceView','setDialecticId','setAbsoluteId']) assert.match(page,new RegExp(setter))
})

test('se documentan límites hegelianos e imagen original',()=>{
  assert.equal(critical03SepImage.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical03SepImage.classPath,'/semestre/5/teoria-critica/clase/3-septiembre')
  assert.match(critical03SepImage.sourceBoundary,/no es un diagrama literal/i)
  assert.match(page,/critical03SepImage/)
  assert.match(page,/import\.meta\.env\.BASE_URL/)
  const svg=read('public/'+critical03SepImage.imagePath)
  assert.match(svg,/viewBox=/)
  assert.match(svg,/<title id=/)
  assert.match(svg,/<desc id=/)
  assert.match(critical03SepSections.find(x=>x.id==='dialectica').guide.how,/tesis\/antítesis\/síntesis/)
  assert.match(critical03SepSections.find(x=>x.id==='ciencia').guide.takeaway,/Morin funciona como comparación pedagógica/i)
  for(const marker of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(marker))
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
