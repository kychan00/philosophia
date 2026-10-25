import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical10SepThemes } from '../src/data/critical10SepThemes.js'
import { critical10SepSections, critical10SepSectionIds } from '../src/data/critical10SepSections.js'
import { critical10SepImage } from '../src/data/critical10SepImage.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass10Sep.jsx')
const atlas=read('src/components/critical/Critical10SepThematicAtlas.jsx')
const study=read('src/components/critical/Critical10SepSectionStudy.jsx')

test('folio 007 conserva trece apartados y añade trece unidades de estudio',()=>{
  const ids=['mapa','marx','trabajo','hegel','materialismo','produccion','praxis','ideologia','objetivacion','metabolismo','enajenacion','retorno','tarea']
  assert.deepEqual(critical10SepSectionIds,ids)
  assert.equal(critical10SepSections.length,13)
  assert.deepEqual([...page.matchAll(/<section id="([^"]+)"/g)].map(x=>x[1]),ids)
  assert.deepEqual([...page.matchAll(/<Critical10SepSectionStudy sectionId="([^"]+)" \/>/g)].map(x=>x[1]),ids)
  for(const [i,item] of critical10SepSections.entries()){
    assert.equal(item.number,String(i).padStart(2,'0'))
    assert.ok(item.question.length>35&&item.thesis.length>45&&item.explanation.length>100,item.id)
    assert.equal(item.nodes.length,3)
    assert.equal(item.contrast.length,2)
    assert.ok(['parallel','sequence'].includes(item.relation))
    for(const key of ['what','how','why','simple','takeaway']) assert.ok(item.guide[key].length>50,item.id+' '+key)
    assert.ok(item.practice.question&&item.practice.cue&&item.evidence)
  }
})

test('atlas cubre trabajo, Hegel/Marx, producción, praxis y enajenación',()=>{
  assert.equal(critical10SepThemes.length,5)
  assert.deepEqual(critical10SepThemes.map(x=>x.id),['trabajo','hegel-marx','produccion','praxis','enajenacion'])
  assert.ok(critical10SepThemes.every(x=>x.question&&x.thesis&&x.argument&&x.development&&x.source))
  assert.match(critical10SepThemes[0].guide.takeaway,/no son sinónimos/i)
  assert.match(critical10SepThemes[2].guide.takeaway,/no sólo una tecnología/i)
  assert.match(critical10SepThemes[4].guide.takeaway,/no nace del simple hecho de producir objetos/i)
})

test('se conserva el contenido académico e interactivo preexistente',()=>{
  for(const snippet of [
    'Objetivación no significa todavía enajenación',
    'El Marx joven: filosofía, economía y crítica social',
    'El trabajo no es originalmente algo negativo',
    'Marx conserva la dialéctica, pero cambia su centro',
    'La historia se comprende a través de modos de producción',
    'Producir es reproducir materialmente la vida',
    'Teoría y práctica transformadora',
    'El sentido común también está socialmente formado',
    'Objetivarse es exteriorizar capacidades humanas',
    'El trabajo es una relación metabólica con la naturaleza',
    'La enajenación no es meramente psicológica',
    'El problema aparece cuando lo producido no vuelve a quienes producen',
    'aprox. 15 páginas',
    'No se indicó reporte ni entrega escrita'
  ]) assert.ok(page.includes(snippet),'Falta contenido preservado: '+snippet)
  for(const setter of ['setModeId','setView']) assert.match(page,new RegExp(setter))
})

test('objetivación y enajenación quedan diferenciadas e imagen es original',()=>{
  assert.equal(critical10SepImage.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical10SepImage.classPath,'/semestre/5/teoria-critica/clase/10-septiembre')
  assert.match(critical10SepImage.sourceBoundary,/no convierte objetivación en enajenación automática/i)
  assert.match(page,/critical10SepImage/)
  assert.match(page,/import\.meta\.env\.BASE_URL/)
  const svg=read('public/'+critical10SepImage.imagePath)
  assert.match(svg,/viewBox=/)
  assert.match(svg,/<title id=/)
  assert.match(svg,/<desc id=/)
  assert.match(critical10SepSections.find(x=>x.id==='objetivacion').guide.takeaway,/no debe confundirse con alienación/i)
  assert.match(critical10SepSections.find(x=>x.id==='enajenacion').guide.takeaway,/histórica y estructural/i)
  for(const marker of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(marker))
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
