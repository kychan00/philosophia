import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical17SepThemes } from '../src/data/critical17SepThemes.js'
import { critical17SepSections, critical17SepSectionIds } from '../src/data/critical17SepSections.js'
import { critical17SepImage } from '../src/data/critical17SepImage.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass17Sep.jsx')
const app=read('src/App.jsx')
const atlas=read('src/components/critical/Critical17SepThematicAtlas.jsx')
const study=read('src/components/critical/Critical17SepSectionStudy.jsx')

test('folio 008 conserva once apartados documentales y once unidades de estudio',()=>{
  const ids=['mapa','trabajo','economia','realizacion','objetivacion','producto','actividad','generico','otros','totalidad','continuidad']
  assert.deepEqual(critical17SepSectionIds,ids)
  assert.equal(critical17SepSections.length,11)
  assert.equal([...page.matchAll(/<section id=\{id\}/g)].length,1)
  assert.match(page,/sections\.map/)
  for(const [i,item] of critical17SepSections.entries()){
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

test('atlas conserva fuente parcial y cuatro momentos como totalidad',()=>{
  assert.equal(critical17SepThemes.length,5)
  assert.deepEqual(critical17SepThemes.map(x=>x.id),['totalidad','trabajo','realizacion','objetivacion','cuatro'])
  assert.ok(critical17SepThemes.every(x=>x.question&&x.thesis&&x.argument&&x.development&&x.source))
  assert.match(critical17SepThemes[0].guide.takeaway,/detalle de cada conexión debe distinguirse/i)
  assert.match(critical17SepThemes[1].guide.takeaway,/no debe llenarse con invenciones/i)
  assert.match(critical17SepThemes[4].guide.takeaway,/detalles posteriores deben permanecer fechados/i)
})

test('página marca límites documentales y no retroproyecta 24 septiembre',()=>{
  for(const snippet of [
    'Reconstrucción parcial · archivo local original pendiente de cotejo',
    'Se conservan los ejes y la arquitectura conceptual. No se inventan episodios',
    'Trabajo, goce y libertad',
    'Crítica de la economía política',
    'Realización / desrealización',
    'Objetivación y restitución',
    'I · Producto','II · Actividad','III · Ser genérico','IV · Otros seres humanos',
    '22 SEP','24 SEP','CONTINUIDAD DOCUMENTAL · NO RETROPROYECCIÓN'
  ]) assert.ok(page.includes(snippet),'Falta límite/contenido: '+snippet)
  assert.match(page,/desarrollo sobre autonomía, creatividad y satisfacción aparece documentado después/)
  assert.match(page,/ampliación sobre desidentificación, violencia y Levinas está documentada el 24/)
  assert.match(page,/setMomentId/)
  assert.doesNotMatch(page,/grabación|transcrip/i)
})

test('imagen y ruta dedicada quedan trazables sin falsear la fuente',()=>{
  assert.equal(critical17SepImage.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical17SepImage.classPath,'/semestre/5/teoria-critica/clase/17-septiembre')
  assert.match(critical17SepImage.sourceBoundary,/fuente parcial/i)
  const svg=read('public/'+critical17SepImage.imagePath)
  assert.match(svg,/viewBox=/)
  assert.match(svg,/<title id=/)
  assert.match(svg,/<desc id=/)
  assert.match(svg,/ARTICULACIÓN, NO ORDEN CAUSAL/)
  assert.match(app,/CriticalTheoryClass17Sep/)
  assert.match(app,/id="17-septiembre"><CriticalTheoryClass17Sep/)
  for(const marker of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(marker))
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
