import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical20OctThemes } from '../src/data/critical20OctThemes.js'
import { critical20OctSections, critical20OctSectionIds } from '../src/data/critical20OctSections.js'
import { critical20OctSourceSections } from '../src/data/critical20OctSourceSections.js'
import { critical20OctImage } from '../src/data/critical20OctImage.js'

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8')
const page = read('src/pages/CriticalTheoryClass20Oct.jsx')
const app = read('src/App.jsx')
const atlas = read('src/components/critical/Critical20OctThematicAtlas.jsx')
const study = read('src/components/critical/Critical20OctSectionStudy.jsx')

test('folio 012 conserva doce temas históricos y añade catorce fichas', () => {
  const ids=['mapa','mercancia','burocracia','errores','pregunta','ia','trabajo','her','curriculo','ludico','sobrantes','foucault','critica','continuidad']
  assert.deepEqual(critical20OctSectionIds,ids)
  assert.deepEqual(critical20OctSourceSections.map(x=>x.id),ids)
  assert.equal(critical20OctSections.length,14)
  assert.equal(critical20OctSourceSections.length,14)
  assert.match(page,/Doce folios conectados/)
  assert.match(page,/critical20OctSourceSections\.map/)
  for(const [i,item] of critical20OctSections.entries()){
    assert.equal(item.number,String(i).padStart(2,'0'))
    assert.ok(item.question.length>40&&item.thesis.length>60&&item.explanation.length>100,item.id)
    assert.ok(['sequence','parallel'].includes(item.relation))
    assert.equal(item.nodes.length,3,item.id)
    assert.equal(item.contrast.length,2,item.id)
    for(const k of ['what','how','why','simple','takeaway']) assert.ok(item.guide[k].length>50,item.id+' '+k)
    assert.ok(item.practice.question&&item.practice.cue&&item.evidence)
  }
})
test('atlas de cinco problemas distingue Lukács y ejemplos posteriores',()=>{
  assert.deepEqual(critical20OctThemes.map(x=>x.id),['forma','procedimiento','ia','vida','disciplina'])
  for(const x of critical20OctThemes){
    assert.equal(x.nodes.length,3,x.id)
    assert.equal(x.positions.length,2,x.id)
    assert.ok(x.question&&x.thesis&&x.argument&&x.development&&x.source&&x.guide.simple&&x.guide.takeaway,x.id)
  }
  assert.match(JSON.stringify(critical20OctThemes),/no es un pasaje de Lukács|no citas de Lukács|no citas del texto de Lukács/i)
})
test('fidelidad a fuentes, imagen, hash y etiquetas explícitas',()=>{
  const src=JSON.stringify(critical20OctSourceSections)
  for(const s of ['Manzanillo','facturas','videos','tecnociencia','IA','diseñadora','Her','curricular','lumpemproletariado','Foucault','Freud','sin día']) assert.ok(src.toLowerCase().includes(s.toLowerCase()),'Falta '+s)
  assert.match(src,/sin generalizar|no hay|no queda|no demuestra|no constituye/i)
  assert.doesNotMatch(page,/grabación|transcrip/i)
  assert.doesNotMatch(src,/grabación|transcrip/i)
  assert.match(app,/id="20-octubre"><CriticalTheoryClass20Oct/)
  assert.equal(critical20OctImage.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical20OctImage.classPath,'/semestre/5/teoria-critica/clase/20-octubre')
  assert.match(critical20OctImage.sourceBoundary,/ampliaciones docentes/i)
  const svg=read('public/'+critical20OctImage.imagePath)
  assert.match(svg,/viewBox=/);assert.match(svg,/<title id=/);assert.match(svg,/<desc id=/)
  assert.match(svg,/MEDIACIONES Y CAMPOS DE ANÁLISIS/)
  for(const label of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(label),label)
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
