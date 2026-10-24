import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical25Themes } from '../src/data/critical25Themes.js'
import { critical25Sections, critical25SectionIds } from '../src/data/critical25Sections.js'
import { critical25Image } from '../src/data/critical25Image.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass25Aug.jsx')
const atlas=read('src/components/critical/Critical25ThematicAtlas.jsx')
const study=read('src/components/critical/Critical25SectionStudy.jsx')

test('folio 003 conserva diez apartados y añade diez unidades de estudio',()=>{
  const ids=['instituto','conciencia','exilio','primera','revolucion','generaciones','totalidad','astrologia','cultura','conceptos']
  assert.deepEqual(critical25SectionIds,ids)
  assert.equal(critical25Sections.length,10)
  assert.deepEqual([...page.matchAll(/<section id="([^"]+)"/g)].map(x=>x[1]),ids)
  assert.deepEqual([...page.matchAll(/<Critical25SectionStudy sectionId="([^"]+)" \/>/g)].map(x=>x[1]),ids)
  for(const [i,item] of critical25Sections.entries()){
    assert.equal(item.number,String(i).padStart(2,'0'))
    assert.ok(item.question.length>35&&item.thesis.length>45&&item.explanation.length>100,item.id)
    assert.equal(item.nodes.length,3)
    assert.equal(item.contrast.length,2)
    assert.ok(['parallel','sequence'].includes(item.relation))
    for(const key of ['what','how','why','simple','takeaway']) assert.ok(item.guide[key].length>50,item.id+' '+key)
    assert.ok(item.practice.question&&item.practice.cue&&item.evidence)
  }
})

test('atlas de cinco problemas cubre instituto, fascismo, exilio, totalidad y cultura',()=>{
  assert.equal(critical25Themes.length,5)
  assert.deepEqual(critical25Themes.map(x=>x.id),['instituto','conciencia','exilio','totalidad','cultura'])
  assert.ok(critical25Themes.every(x=>x.question&&x.thesis&&x.argument&&x.development&&x.source))
  assert.match(critical25Themes[0].guide.takeaway,/no autoriza borrar desacuerdos/i)
  assert.match(critical25Themes[1].guide.takeaway,/estructura y subjetividad/i)
  assert.match(critical25Themes[3].guide.takeaway,/no significa saberlo todo/i)
})

test('se conserva el contenido académico e interactivo preexistente',()=>{
  for(const snippet of [
    '“Escuela de Frankfurt” no significa doctrina homogénea',
    'La conciencia de clase dejó de parecer automática',
    'El Instituto se vuelve transnacional',
    'Biografías que modifican la teoría',
    '¿Toda protesta es una revolución?',
    'Continuidad institucional ≠ continuidad teórica idéntica',
    'La Teoría Crítica como filosofía social',
    'La astrología como caso de investigación social',
    'Ningún producto cultural es completamente neutral',
    'Cinco conceptos que abren la siguiente etapa',
    'Horkheimer','Adorno','Marcuse','Benjamin','Fromm',
    'Habermas','Honneth','Hartmut Rosa',
    'Dialéctica negativa','Razón instrumental','Industria cultural','El hombre unidimensional',
    '/tareas/teoria-critica/escuela-de-frankfurt/conceptos'
  ]) assert.ok(page.includes(snippet),'Falta contenido preservado: '+snippet)
  assert.match(page,/setClassView/)
  assert.match(page,/setExileIndex/)
  assert.match(page,/setGenerationIndex/)
  assert.match(page,/setDimensionIndex/)
  assert.match(page,/setAstroView/)
})

test('imagen original y fronteras editoriales están explícitas',()=>{
  assert.equal(critical25Image.imageLicense,'ORIGINAL-OWNED')
  assert.equal(critical25Image.classPath,'/semestre/5/teoria-critica/clase/25-agosto')
  assert.match(critical25Image.sourceBoundary,/no es un mapa geográfico a escala/i)
  assert.match(page,/critical25Image/)
  assert.match(page,/import\.meta\.env\.BASE_URL/)
  for(const marker of ['RECONSTRUCCIÓN EDITORIAL','QUÉ REPRESENTA','CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES','QUÉ DEBE QUEDAR CLARO']) assert.ok(atlas.includes(marker))
  assert.match(study,/No es una pregunta oficial ni una cita/)
  assert.doesNotMatch(atlas,/href="#/)
  assert.doesNotMatch(study,/href="#/)
})
