import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical15OctThemes } from '../src/data/critical15OctThemes.js'
import { critical15OctSections, critical15OctSectionIds } from '../src/data/critical15OctSections.js'
import { critical15OctSourceSections } from '../src/data/critical15OctSourceSections.js'
import { critical15OctImage } from '../src/data/critical15OctImage.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass15Oct.jsx')
const app=read('src/App.jsx')
const atlas=read('src/components/critical/Critical15OctThematicAtlas.jsx')
const study=read('src/components/critical/Critical15OctSectionStudy.jsx')

test('folio 011 conserva catorce apartados y catorce unidades de estudio',()=>{
  const ids=['mapa','herencia','inversion','tecnica','trabajo','forma','afectos','regalo','burocracia','libertad','cuestiones','agenda','fuentes','dossier']
  assert.deepEqual(critical15OctSectionIds,ids)
  assert.deepEqual(critical15OctSourceSections.map(x=>x.id),ids)
  assert.equal(critical15OctSections.length,14)
  assert.equal(critical15OctSourceSections.length,14)
  for(const [i,item] of critical15OctSections.entries()){
    assert.equal(item.number,String(i).padStart(2,'0'))
    assert.ok(item.question.length>35&&item.thesis.length>45&&item.explanation.length>100,item.id)
    assert.equal(item.nodes.length,3)
    assert.equal(item.contrast.length,2)
    assert.ok(['parallel','sequence'].includes(item.relation))
    for(const key of ['what','how','why','simple','takeaway']) assert.ok(item.guide[key].length>45,item.id+' '+key)
    assert.ok(item.practice.question&&item.practice.cue&&item.evidence)
  }
})

test('atlas cubre herencia marxiana, cálculo, forma, afectos y responsabilidad',()=>{
  assert.equal(critical15OctThemes.length,5)
  assert.deepEqual(critical15OctThemes.map(x=>x.id),['cosificacion','calculo','forma','afectos','responsabilidad'])
  assert.ok(critical15OctThemes.every(x=>x.question&&x.thesis&&x.argument&&x.development&&x.source))
  assert.match(critical15OctThemes[0].guide.takeaway,/amplía el problema de la mercancía/i)
  assert.match(critical15OctThemes[1].guide.takeaway,/reduce visión del conjunto/i)
  assert.match(critical15OctThemes[2].guide.takeaway,/conservar las diferencias/i)
  assert.match(critical15OctThemes[4].guide.takeaway,/no resuelve la tensión/i)
})

test('se conservan procedencias y cautelas de autores externos',()=>{
  const sourceText=JSON.stringify(critical15OctSourceSections).toLowerCase()
  for(const snippet of [
    'lukács','taylorismo','marcuse','illouz','adorno','eichmann','berlin',
    'intercambio','reemplazabilidad','responsabilidad','injusticia epistémica'
  ]) assert.ok(sourceText.includes(snippet.toLowerCase()),'Falta contenido: '+snippet)
  assert.match(page,/no se presentan como párrafos del libro de Lukács/)
  assert.match(page,/no se presupone lectura directa de todos estos libros/)
  assert.match(page,/sin día confirmado/)
  assert.doesNotMatch(page,/grabación|transcrip/i)
})

test('imagen, doble capa y ruta dedicada quedan trazables',()=>{
  assert.equal(critical15OctImage.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical15OctImage.classPath,'/semestre/5/teoria-critica/clase/15-octubre')
  assert.match(critical15OctImage.sourceBoundary,/campos de análisis/i)
  const svg=read('public/'+critical15OctImage.imagePath)
  assert.match(svg,/viewBox=/)
  assert.match(svg,/<title id=/)
  assert.match(svg,/<desc id=/)
  assert.match(svg,/RAMAS = CAMPOS DE ANÁLISIS/)
  assert.match(app,/CriticalTheoryClass15Oct/)
  assert.match(app,/id="15-octubre"><CriticalTheoryClass15Oct/)
  assert.match(page,/Critical15OctThematicAtlas/)
  assert.match(page,/Critical15OctSectionStudy/)
  assert.match(page,/critical15OctSourceSections/)
  for(const marker of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(marker))
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
