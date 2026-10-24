import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical22SepThemes } from '../src/data/critical22SepThemes.js'
import { critical22SepSections, critical22SepSectionIds } from '../src/data/critical22SepSections.js'
import { critical22SepImage } from '../src/data/critical22SepImage.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass22Sep.jsx')
const app=read('src/App.jsx')
const atlas=read('src/components/critical/Critical22SepThematicAtlas.jsx')
const study=read('src/components/critical/Critical22SepSectionStudy.jsx')

test('folio 009 conserva diez apartados documentales y diez unidades de estudio',()=>{
  const ids=['mapa','desnaturalizacion','materialidad','totalidad','reproductivo','division','producto','actividad','apertura','continuidad']
  assert.deepEqual(critical22SepSectionIds,ids)
  assert.equal(critical22SepSections.length,10)
  assert.match(page,/sections\.map/)
  assert.equal([...page.matchAll(/<section id=\{id\}/g)].length,1)
  for(const [i,item] of critical22SepSections.entries()){
    assert.equal(item.number,String(i).padStart(2,'0'))
    assert.ok(item.question.length>35&&item.thesis.length>45&&item.explanation.length>100,item.id)
    assert.equal(item.nodes.length,3)
    assert.equal(item.contrast.length,2)
    assert.ok(['parallel','sequence'].includes(item.relation))
    for(const key of ['what','how','why','simple','takeaway']) assert.ok(item.guide[key].length>50,item.id+' '+key)
    assert.ok(item.practice.question&&item.practice.cue&&item.evidence)
  }
  for(const id of ids) assert.ok(page.includes("'"+id+"'"),'Falta id '+id)
})

test('atlas cubre desnaturalización, materialidad, reproducción, división y totalidad',()=>{
  assert.equal(critical22SepThemes.length,5)
  assert.deepEqual(critical22SepThemes.map(x=>x.id),['desnaturalizacion','materialidad','reproduccion','division','totalidad'])
  assert.ok(critical22SepThemes.every(x=>x.question&&x.thesis&&x.argument&&x.development&&x.source))
  assert.match(critical22SepThemes[0].guide.takeaway,/mostrar que lo social tiene historia/i)
  assert.match(critical22SepThemes[1].guide.takeaway,/no una fórmula determinista/i)
  assert.match(critical22SepThemes[2].guide.takeaway,/pendiente de cotejo/i)
  assert.match(critical22SepThemes[4].guide.takeaway,/no cerrar lo que la fuente deja abierto/i)
})

test('página conserva fuente parcial y apertura de ser genérico y otros',()=>{
  for(const snippet of [
    'Reconstrucción parcial · archivo local original pendiente de cotejo',
    'Desnaturalizar es devolver historia',
    'Condicionarse no significa ser lo mismo',
    'Trabajo reproductivo aparece explícitamente',
    'División sexual del trabajo está documentada',
    'Producto permanece como momento',
    'La actividad sigue abierta',
    'Ser genérico y relación con otros todavía no se cierran',
    '24 SEP · I','24 SEP · II',
    'CONTINUIDAD DOCUMENTAL · NO RETROPROYECCIÓN'
  ]) assert.ok(page.includes(snippet),'Falta límite/contenido: '+snippet)
  assert.match(page,/setDimensionId/)
  assert.doesNotMatch(page,/grabación|transcrip/i)
})

test('imagen, ruta dedicada y límites de totalidad quedan trazables',()=>{
  assert.equal(critical22SepImage.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical22SepImage.classPath,'/semestre/5/teoria-critica/clase/22-septiembre')
  assert.match(critical22SepImage.sourceBoundary,/fuente parcial/i)
  const svg=read('public/'+critical22SepImage.imagePath)
  assert.match(svg,/viewBox=/)
  assert.match(svg,/<title id=/)
  assert.match(svg,/<desc id=/)
  assert.match(svg,/ARTICULACIÓN, NO IDENTIDAD NI DETERMINISMO/)
  assert.match(app,/CriticalTheoryClass22Sep/)
  assert.match(app,/id="22-septiembre"><CriticalTheoryClass22Sep/)
  for(const marker of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(marker))
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
