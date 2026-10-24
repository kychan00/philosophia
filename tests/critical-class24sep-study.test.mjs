import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical24SepThemes } from '../src/data/critical24SepThemes.js'
import { critical24SepSections, critical24SepSectionIds } from '../src/data/critical24SepSections.js'
import { critical24SepSourceSections } from '../src/data/critical24SepSourceSections.js'
import { critical24SepImage } from '../src/data/critical24SepImage.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass24Sep.jsx')
const app=read('src/App.jsx')
const atlas=read('src/components/critical/Critical24SepThematicAtlas.jsx')
const study=read('src/components/critical/Critical24SepSectionStudy.jsx')

test('folio 010 conserva veintitrés apartados y veintitrés unidades de estudio',()=>{
  const ids=['mapa','actividad','otro-trabajo','maquina','generico','animalizacion','arte','ideologia','conciencia','desidentificacion','levinas','distancia','explotacion','ia','propiedad','mercancia','uso','cambio','comun','precio','control','continuidad','tarea']
  assert.deepEqual(critical24SepSectionIds,ids)
  assert.deepEqual(critical24SepSourceSections.map(x=>x.id),ids)
  assert.equal(critical24SepSections.length,23)
  assert.equal(critical24SepSourceSections.length,23)
  assert.match(page,/critical24SepSourceSections\.map/)
  for(const [i,item] of critical24SepSections.entries()){
    assert.equal(item.number,String(i).padStart(2,'0'))
    assert.ok(item.question.length>35&&item.thesis.length>45&&item.explanation.length>100,item.id)
    assert.equal(item.nodes.length,3)
    assert.equal(item.contrast.length,2)
    assert.ok(['parallel','sequence'].includes(item.relation))
    for(const key of ['what','how','why','simple','takeaway']) assert.ok(item.guide[key].length>50,item.id+' '+key)
    assert.ok(item.practice.question&&item.practice.cue&&item.evidence)
  }
})

test('atlas cubre actividad, ser genérico, ideología, propiedad y valor',()=>{
  assert.equal(critical24SepThemes.length,5)
  assert.deepEqual(critical24SepThemes.map(x=>x.id),['actividad','generico','ideologia','propiedad','valor'])
  assert.ok(critical24SepThemes.every(x=>x.question&&x.thesis&&x.argument&&x.development&&x.source))
  assert.match(critical24SepThemes[0].guide.takeaway,/actividad queda organizada desde fuera/i)
  assert.match(critical24SepThemes[1].guide.takeaway,/completan la estructura articulada/i)
  assert.match(critical24SepThemes[3].guide.takeaway,/puente pedagógico/i)
  assert.match(critical24SepThemes[4].guide.takeaway,/desarrollo final queda deliberadamente sin completar/i)
})

test('se preservan ejemplos, ampliaciones y límites académicos de la sesión',()=>{
  const sourceText=JSON.stringify(critical24SepSourceSections)
  for(const snippet of [
    'Tiempos modernos',
    'abejas',
    'Levinas',
    'pantalla, mapa, objetivo, imagen y dispositivo remoto',
    '¿Puede la IA pensarse como nueva forma de enajenación?',
    'Propiedad privada y sociedad de clases',
    'Valor de uso',
    'Valor de cambio',
    'Valor no es precio',
    'No se inventa reporte'
  ]) assert.ok(sourceText.includes(snippet),'Falta contenido: '+snippet)
  assert.match(sourceText,/Levinas es ampliación docente/)
  assert.match(sourceText,/Esta actualización pertenece a la profesora, no al texto de Marx/)
  assert.match(sourceText,/no ofrece una respuesta cerrada/)
  assert.match(sourceText,/PHILOSOPHIA no completa este tramo con doctrina externa/)
  assert.doesNotMatch(page,/grabación|transcrip/i)
  assert.doesNotMatch(sourceText,/grabación|transcrip/i)
})

test('imagen, ruta y distinciones de mercancía quedan trazables',()=>{
  assert.equal(critical24SepImage.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical24SepImage.classPath,'/semestre/5/teoria-critica/clase/24-septiembre')
  assert.match(critical24SepImage.sourceBoundary,/no identidad entre obras/i)
  const svg=read('public/'+critical24SepImage.imagePath)
  assert.match(svg,/viewBox=/)
  assert.match(svg,/<title id=/)
  assert.match(svg,/<desc id=/)
  assert.match(svg,/VALOR ≠ PRECIO/)
  assert.match(app,/CriticalTheoryClass24Sep/)
  assert.match(app,/id="24-septiembre"><CriticalTheoryClass24Sep/)
  assert.match(page,/ctsep24-control-grid/)
  assert.match(page,/mercancía', 'objeto útil/)
  for(const marker of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(marker))
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
