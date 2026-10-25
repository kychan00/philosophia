import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { critical18Themes } from '../src/data/critical18Themes.js'

const src = (p) => readFileSync(new URL('../' + p, import.meta.url), 'utf8')
const classPage = src('src/pages/CriticalTheoryClass18Aug.jsx')
const thematicUI = src('src/components/critical/Critical18ThematicAtlas.jsx')
const thematicCSS = src('src/components/critical/Critical18ThematicAtlas.css')

test('cinco problemas fieles y localizables del encuadre de 18 agosto', () => {
  assert.equal(critical18Themes.length, 5)
  assert.deepEqual(critical18Themes.map(x=>x.id),['pluralidad','dialectica','aprender','transdisciplina','archivo'])
  const ids = [...classPage.matchAll(/<section id="([^"]+)"/g)].map(m=>m[1])
  assert.equal(ids.length,11,'preservar íntegros los once apartados')
  assert.ok(critical18Themes.every(x=>ids.includes(x.anchor)),'cada tema remite al desarrollo conservado')
  assert.ok(critical18Themes.every(x=>x.question && x.thesis && x.argument && x.development && x.source),'sin fichas vacías ni procedencia opaca')
  assert.equal(critical18Themes.flatMap(x=>x.nodes).length,15)
  for(const x of critical18Themes){
    assert.equal(x.nodes.length,3)
    assert.equal(x.positions.length,2)
    assert.ok(['what','how','why','simple','takeaway'].every(k=>x.guide[k].length>70),'guías con explicaciones completas')
  }
})

test('lectura por capas; diferenciación entre opinión editorial y contenido docente',()=>{
  assert.match(thematicUI,/RECONSTRUCCIÓN EDITORIAL/)
  assert.match(thematicUI,/no son citas, fases obligatorias/)
  assert.match(thematicUI,/EN PALABRAS SIMPLES/)
  assert.match(thematicUI,/QUÉ REPRESENTA/)
  assert.match(thematicUI,/CÓMO LEERLO/)
  assert.match(thematicUI,/POR QUÉ ESTÁ AQUÍ/)
  assert.match(thematicUI,/QUÉ DEBE QUEDAR CLARO/)
  assert.match(thematicUI,/aria-pressed/)
  assert.match(thematicUI,/aria-expanded/)
  assert.match(thematicUI,/critical18Themes/)
  assert.match(classPage,/<Critical18ThematicAtlas \/>/)
  assert.match(classPage,/ARCHIVO DOCUMENTAL/)
  assert.doesNotMatch(thematicUI,/href="#/)
  assert.match(critical18Themes[1].guide.how,/No interprete/)
  assert.match(critical18Themes[4].development,/30 %.*30 %.*40 %/)
  assert.match(thematicCSS,/@media\(max-width:700px\)/)
  assert.match(thematicCSS,/@media print/)
})
