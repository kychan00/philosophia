import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { criticalTheoryImages, imagesForCriticalTheoryClass } from '../src/data/criticalTheoryImages.js'

const projectPath=(relative)=>fileURLToPath(new URL('../'+relative,import.meta.url))
const classroom=readFileSync(projectPath('src/pages/CriticalTheoryClass18Aug.jsx'),'utf8')
const rule=readFileSync(projectPath('docs/REGLA_IMAGENES_LIBRES_Y_TRAZABILIDAD_CLASES.md'),'utf8')
const protocol=readFileSync(projectPath('docs/flujo-multichat-y-despliegues.md'),'utf8')

assert.match(rule,/Cada página de clase debe incorporar al menos una imagen/)
assert.match(rule,/CC BY-SA/)
assert.match(rule,/modificaciones/)
assert.match(protocol,/REGLA_IMAGENES_LIBRES_Y_TRAZABILIDAD_CLASES/)

assert.ok(criticalTheoryImages.length>=1,'al menos un recurso piloto de clase 1')
const seen=new Set()
for(const media of criticalTheoryImages){
  assert.ok(!seen.has(media.id),'registro duplicado: '+media.id)
  seen.add(media.id)
  const needed=['id','classPath','imagePath','imageType','imageSource','imageAuthor','imageLicense','imageAttribution','modifications','alt','pedagogicalPurpose','sourceBoundary']
  needed.forEach(k=>assert.ok(media[k]&&typeof media[k]==='string',media.id+': falta '+k))
  assert.match(media.classPath,/^\/semestre\/5\/teoria-critica\/clase\//)
  assert.match(media.imagePath,/^images\/teoria-critica\/.*\.svg$/)
  assert.ok(!media.imagePath.includes('..'),'ruta peligrosa')
  const absolute=projectPath('public/'+media.imagePath)
  assert.ok(existsSync(absolute),'no existe '+media.imagePath)
  const svg=readFileSync(absolute,'utf8')
  assert.match(svg,/viewBox=/,'SVG responsive')
  assert.match(svg,/<title id=/,'titulo SVG')
  assert.match(svg,/<desc id=/,'descripción SVG')
  assert.ok(media.alt.length>60,'alt descriptivo')
  if(media.imageType==='original'){
    assert.equal(media.imageLicense,'ORIGINAL-OWNED')
    assert.equal(media.imageLicenseUrl,null)
    assert.equal(media.licenseEvidenceUrl,null)
  }else{
    assert.ok(['cc','public-domain','permission','ai-generated'].includes(media.imageType))
    assert.ok(media.licenseEvidenceUrl,'evidencia verificable para recurso de terceros')
    assert.ok(media.imageLicenseUrl||media.imageType==='permission','enlace de licencia externo')
  }
}
const pilot=imagesForCriticalTheoryClass('/semestre/5/teoria-critica/clase/18-agosto')
assert.equal(pilot.length,1,'folio 001 auditable')
assert.match(classroom,/imagesForCriticalTheoryClass/)
assert.match(classroom,/<figure className="ct18-licensed-figure"/)
assert.match(classroom,/alt=\{image.alt\}/)
assert.match(classroom,/\{image.imageAttribution\}/)
assert.match(classroom,/import\.meta\.env\.BASE_URL/,'compatibilidad Pages / Vercel')
console.log('OK: política visual, licencia, fuente, SVG y folio 001 documentados')
