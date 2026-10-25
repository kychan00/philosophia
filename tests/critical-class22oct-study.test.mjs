import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical22OctThemes } from '../src/data/critical22OctThemes.js'
import { critical22OctSections, critical22OctSectionIds } from '../src/data/critical22OctSections.js'
import { critical22OctSourceSections } from '../src/data/critical22OctSourceSections.js'
import { critical22OctImage } from '../src/data/critical22OctImage.js'

const read = path => readFileSync(new URL('../' + path, import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass22Oct.jsx')
const app=read('src/App.jsx')
const atlas=read('src/components/critical/Critical22OctThematicAtlas.jsx')
const study=read('src/components/critical/Critical22OctSectionStudy.jsx')

test('folio 013 mantiene constelación original y catorce fichas documentales',()=>{
  const ids=['mapa','cultura','giro','lacan','hipotesis','aparato','psicoanalisis','subjetividad','malestar','oceanico','separacion','placer','realidad','lectura']
  assert.deepEqual(critical22OctSectionIds,ids)
  assert.deepEqual(critical22OctSourceSections.map(x=>x.id),ids)
  assert.equal(critical22OctSections.length,14)
  assert.equal(critical22OctSourceSections.length,14)
  assert.match(page,/Doce folios conectados/)
  assert.match(page,/critical22OctSourceSections\.map/)
  for(const [i,s] of critical22OctSections.entries()){
    assert.equal(s.number,String(i).padStart(2,'0'))
    assert.ok(s.question.length>40&&s.thesis.length>60&&s.explanation.length>100,s.id)
    assert.ok(['parallel','sequence'].includes(s.relation),s.id)
    assert.equal(s.nodes.length,3,s.id)
    assert.equal(s.contrast.length,2,s.id)
    for(const k of ['what','how','why','simple','takeaway']) assert.ok(s.guide[k].length>50,s.id+' '+k)
    assert.ok(s.practice.question&&s.practice.cue&&s.evidence)
  }
})
test('cinco problemas distinguen método, cultura, yo y dos principios',()=>{
  assert.deepEqual(critical22OctThemes.map(t=>t.id),['cultura','metodo','teoria','yo','realidad'])
  for(const t of critical22OctThemes){
    assert.equal(t.nodes.length,3,t.id)
    assert.equal(t.positions.length,2,t.id)
    assert.ok(['sequence','parallel'].includes(t.relation))
    for(const k of ['what','how','why','simple','takeaway']) assert.ok(t.guide[k].length>50,t.id+' '+k)
    assert.ok(t.question&&t.thesis&&t.argument&&t.development&&t.source&&t.anchor)
  }
})
test('las lagunas y relaciones externas mantienen atribución documental',()=>{
  const source=JSON.stringify(critical22OctSourceSections).toLowerCase()
  const theme=JSON.stringify(critical22OctThemes).toLowerCase()
  for(const marker of ['lacan','inconsciente','psicoanálisis','frustración','cultura','fusión','placer','realidad','fecha','segunda']) assert.ok((source+theme).includes(marker.toLowerCase()),marker)
  assert.match(source,/no se usa para fechar|no se completa|laguna/)
  assert.match(source,/sin rango|no constan|sin rango o plazo/)
  assert.match(page,/no completa lagunas/)
  assert.doesNotMatch(page,/grabación|transcrip/i)
  assert.doesNotMatch(source,/grabación|transcrip/i)
  assert.match(app,/id="22-octubre"><CriticalTheoryClass22Oct/)
})
test('imagen de autoría propia, doble capa y ruta real',()=>{
  assert.equal(critical22OctImage.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical22OctImage.classPath,'/semestre/5/teoria-critica/clase/22-octubre')
  assert.match(critical22OctImage.sourceBoundary,/reconstrucción editorial/i)
  const svg=read('public/'+critical22OctImage.imagePath)
  assert.match(svg,/viewBox=/)
  assert.match(svg,/<title id=/)
  assert.match(svg,/<desc id=/)
  assert.match(svg,/Flechas continuas/)
  assert.match(page,/Critical22OctThematicAtlas/)
  assert.match(page,/Critical22OctSectionStudy/)
  assert.match(page,/critical22OctImage\.imagePath/)
  for(const label of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(label),label)
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
