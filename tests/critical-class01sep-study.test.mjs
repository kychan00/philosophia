import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical01SepThemes } from '../src/data/critical01SepThemes.js'
import { critical01SepSections, critical01SepSectionIds } from '../src/data/critical01SepSections.js'
import { critical01SepImage } from '../src/data/critical01SepImage.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass01Sep.jsx')
const atlas=read('src/components/critical/Critical01SepThematicAtlas.jsx')
const study=read('src/components/critical/Critical01SepSectionStudy.jsx')

test('folio 005 conserva once apartados y añade once unidades de estudio',()=>{
  const ids=['mapa','fromm','tener','desobediencia','metodo','hegel','idealismo','verdad','espiritu','dialectica','tarea']
  assert.deepEqual(critical01SepSectionIds,ids)
  assert.equal(critical01SepSections.length,11)
  assert.deepEqual([...page.matchAll(/<section id="([^"]+)"/g)].map(x=>x[1]),ids)
  assert.deepEqual([...page.matchAll(/<Critical01SepSectionStudy sectionId="([^"]+)" \/>/g)].map(x=>x[1]),ids)
  for(const [i,item] of critical01SepSections.entries()){
    assert.equal(item.number,String(i).padStart(2,'0'))
    assert.ok(item.question.length>35&&item.thesis.length>45&&item.explanation.length>100,item.id)
    assert.equal(item.nodes.length,3)
    assert.equal(item.contrast.length,2)
    assert.ok(['parallel','sequence'].includes(item.relation))
    for(const key of ['what','how','why','simple','takeaway']) assert.ok(item.guide[key].length>50,item.id+' '+key)
    assert.ok(item.practice.question&&item.practice.cue&&item.evidence)
  }
})

test('atlas cubre Fromm, método, idealismo, verdad y movimiento dialéctico',()=>{
  assert.equal(critical01SepThemes.length,5)
  assert.deepEqual(critical01SepThemes.map(x=>x.id),['fromm','metodo','idealismo','verdad','dialectica'])
  assert.ok(critical01SepThemes.every(x=>x.question&&x.thesis&&x.argument&&x.development&&x.source))
  assert.match(critical01SepThemes[0].guide.takeaway,/deben distinguirse/i)
  assert.match(critical01SepThemes[2].guide.takeaway,/guía de entrada/i)
  assert.match(critical01SepThemes[4].guide.takeaway,/no una fórmula externa/i)
})

test('se conserva el contenido e interacciones preexistentes',()=>{
  for(const snippet of [
    'La clase une una negatividad política con una negatividad filosófica',
    'Fromm se separa del Instituto',
    'Cuando el tener empieza a definir el ser',
    'La historia cambia cuando alguien puede decir “no”',
    'Popper y Adorno discuten cómo estudiar científicamente la sociedad',
    'Para entender la crítica hay que aprender a pensar procesos',
    'Kant deja una frontera que Hegel rechaza como definitiva',
    'El resultado separado de su recorrido no contiene toda la verdad',
    'Espíritu no significa fantasma',
    'Dialéctica = racionalidad del movimiento',
    'Releer el prólogo',
    'Marcuse','Popper','Hans Albert','Habermas','Kant','Hegel',
    'Fenomenología del espíritu','Dialéctica negativa','Sobre la desobediencia'
  ]) assert.ok(page.includes(snippet),'Falta contenido preservado: '+snippet)
  for(const setter of ['setFrommId','setSocialView','setObedienceView','setMethodView','setIdealismView','setTruthStep','setSpiritView','setDialecticIndex']) assert.match(page,new RegExp(setter))
})

test('se evita simplificar la dialéctica y se documenta la imagen original',()=>{
  assert.equal(critical01SepImage.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical01SepImage.classPath,'/semestre/5/teoria-critica/clase/1-septiembre')
  assert.match(critical01SepImage.sourceBoundary,/no es un diagrama literal/i)
  assert.match(page,/critical01SepImage/)
  assert.match(page,/import\.meta\.env\.BASE_URL/)
  const svg=read('public/'+critical01SepImage.imagePath)
  assert.match(svg,/viewBox=/)
  assert.match(svg,/<title id=/)
  assert.match(svg,/<desc id=/)
  assert.match(critical01SepSections.find(x=>x.id==='dialectica').guide.how,/tesis–antítesis–síntesis/)
  assert.match(critical01SepThemes.find(x=>x.id==='dialectica').development,/no debe convertirse en una receta universal/i)
  for(const marker of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(marker))
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
