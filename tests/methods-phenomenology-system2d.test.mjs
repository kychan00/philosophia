import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const src = readFileSync(new URL('../src/pages/MethodsPhenomenologyAppliedSystem2D.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/pages/MethodsPhenomenologySystem2D.css', import.meta.url), 'utf8')
const visuals = readFileSync(new URL('../src/pages/MethodsPhenomenologyVisuals.jsx', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const study = readFileSync(new URL('../src/pages/MethodsPhenomenologyExposition.jsx', import.meta.url), 'utf8')
const methodsIndex = readFileSync(new URL('../src/pages/MethodsResearch.jsx', import.meta.url), 'utf8')
const route = '/estudio/fenomenologia-metodo/sistema-2d'
const ids = [...src.matchAll(/id: '([mc]\d+)'/g)].map(match => match[1])

test('Sistema 2D fenomenológico: ruta, acceso y 18 nodos únicos', () => {
  assert.ok(app.includes(route))
  assert.ok(study.includes(route))
  assert.equal(ids.length, 18)
  assert.equal(new Set(ids).size, 18)
})

test('Dos movimientos: método y caso aplicado', () => {
  assert.ok(src.includes("id: 'metodo'"))
  assert.ok(src.includes("id: 'caso'"))
  assert.match(src, /chapterId==='todo'\?3:2/)
  assert.match(src, /xGap=chapterId==='todo'\?540:570/)
  assert.match(src, /yGap=chapterId==='todo'\?330:350/)
  assert.match(src, /style:\{width:370,height:184\}/)
  assert.match(src, /nodesDraggable=\{false\}/)
  assert.match(src, /nodesConnectable=\{false\}/)
  assert.doesNotMatch(src, /MiniMap/)
})

test('La proyección pública es autónoma y sin notas privadas', () => {
  assert.doesNotMatch(src, /source: '/)
  assert.doesNotMatch(src, /Clase \d+/)
  assert.doesNotMatch(src, /octubre/i)
  assert.doesNotMatch(src, /grabaci[oó]n|transcripci[oó]n/i)
  assert.doesNotMatch(src, /Para exponer/i)
  assert.match(src, /Idea central/)
  assert.match(src, /Qué significa metodológicamente/)
  assert.match(src, /En palabras simples:/)
})

test('El caso nuevo no repite el ejemplo del celular', () => {
  assert.match(src, /estar perdido en una ciudad desconocida/i)
  assert.doesNotMatch(src, /miedo ante una amenaza digital|mensaje amenazante|celular/i)
})

test('La aplicación desarrolla el método paso a paso', () => {
  for (const title of [
    'Delimitar el fenómeno',
    'Diseñar el estudio',
    'Descripción natural',
    'Aplicar la epojé',
    'Noesis ↔ noema',
    'Cuerpo vivido',
    'Espacio vivido',
    'Tiempo e intersubjetividad',
    'Variación eidética',
    'Síntesis estructural',
  ]) assert.ok(src.includes(title), title)
})

test('Modo proyección recorre los 18 nodos y puede cerrarse', () => {
  assert.match(src, /Proyectar recorrido/)
  assert.match(src, /setChapterId\('todo'\)/)
  assert.match(src, /setMode\('guia'\)/)
  assert.match(src, /setProjection\(true\)/)
  assert.match(src, /setExpanded\(true\)/)
  assert.match(src, /Salir de proyección/)
  assert.match(src, /visible\[step\]\.short/)
  assert.match(css, /\.phen2d-system\.projection/)
})


test('Los 18 nodos tienen representación SVG propia', () => {
  for (const id of ids) assert.match(visuals, new RegExp('\\b'+id+'\\s*:'), 'falta visual para '+id)
  assert.match(src, /PhenomenologyNodeVisual/)
  assert.match(src, /<PhenomenologyNodeVisual id=\{selected\.id\}/)
  assert.match(visuals, /<svg className="phen2d-visual-svg"/)
  assert.match(css, /\.phen2d-visual-svg/)
  assert.match(css, /max-height:220px/)
})


test('El atlas aplica foco con blur y fondo grafito', () => {
  assert.match(src, /has-node-focus/)
  assert.match(src, /color="#525252"/)
  assert.match(css, /background:#161616/)
  assert.match(css, /background:#262626/)
  assert.match(css, /react-flow__node:not\(\.selected\)\{filter:blur\(2\.2px\);opacity:\.22\}/)
  assert.match(css, /react-flow__node\.selected\{filter:none;opacity:1/)
})

test('El SVG de rigor hermenéutico evita etiquetas sobre los anillos', () => {
  assert.match(visuals, /LENGUAJE/)
  assert.match(visuals, /HISTORIA/)
  assert.match(visuals, /MUNDO COMPARTIDO/)
  assert.match(visuals, /RIGOR = HACER EXPLÍCITOS LOS HORIZONTES/)
})


test('La página pública no contiene la sección de preguntas de defensa', () => {
  assert.doesNotMatch(src, /phen2d-defense/)
  assert.doesNotMatch(src, /PREGUNTAS DE DEFENSA/i)
  assert.doesNotMatch(src, /Lo que debe quedar filosóficamente claro/i)
  assert.doesNotMatch(css, /\.phen2d-defense/)
})

test('Los 18 nodos usan una paleta técnica multicolor propia', () => {
  const accentBlock = src.match(/const nodeAccents = \{[\s\S]*?\n\}/)?.[0] || ''
  for (const id of ids) assert.match(accentBlock, new RegExp('\\b'+id+':'), 'falta color para '+id)
  const colors = [...accentBlock.matchAll(/#[0-9a-f]{6}/gi)].map(m => m[0].toLowerCase())
  assert.ok(new Set(colors).size >= 10, 'la paleta de nodos es demasiado uniforme')
  assert.match(css, /--blue:#0f62fe/)
  assert.match(src, /m3:'#08bdba'/)
  assert.match(src, /m4:'#be95ff'/)
  assert.match(css, /--magenta:#ee5396/)
  assert.match(css, /--green:#42be65/)
})

test('Toda la superficie pública usa capas oscuras coherentes', () => {
  assert.match(css, /\.phen2d-page\{[\s\S]*--bg:#161616/)
  assert.match(css, /\.phen2d-hero\{[\s\S]*background:/)
  assert.match(css, /\.phen2d-thesis\{[\s\S]*background:#262626/)
  assert.match(css, /\.phen2d-inspector,[\s\S]*background:#262626!important/)
  assert.match(css, /\.phen2d-node,[\s\S]*background:#262626!important/)
  assert.match(css, /\.phen2d-canvas \.react-flow,[\s\S]*background:#161616!important/)
  assert.match(visuals, /const paper = '#262626'/)
  assert.match(visuals, /const ink = '#f4f4f4'/)
})

test('La página está aislada de las hojas beige heredadas', () => {
  assert.doesNotMatch(src, /System2DTheme\.css/)
  assert.doesNotMatch(src, /MethodsClass19Oct\.css/)
  assert.doesNotMatch(src, /MethodsClass21Oct\.css/)
  assert.doesNotMatch(src, /ph2d-shell/)
  assert.doesNotMatch(css, /#ebe3d5|#f7f0e4|#f1e8d9/i)
  assert.match(css, /--xy-background-color:#161616/)
  assert.match(css, /\.phen2d-system \.m19-chapters button\.active\{[\s\S]*background:#393939/)
})


test('La ruta pública oculta el centro de notificaciones académicas', () => {
  assert.match(app, /isPublicPhenomenologyRoute/)
  assert.match(app, /#\/estudio\/fenomenologia-metodo\/sistema-2d/)
  assert.match(app, /hideAcademicNotifications\s*=\s*[\s\S]*isPublicCafeRoute\s*\|\|\s*isPublicPhenomenologyRoute/)
  assert.match(app, /!hideAcademicNotifications\s*&&\s*\(<AcademicNotifications/)
})


test('La navegación del folio responde a un solo toque móvil', () => {
  assert.match(src, /const moveInspector=delta=>/)
  assert.match(src, /const moveInspectorPointer=\(delta,event\)=>/)
  assert.match(src, /event\.pointerType!==['"]touch['"]/)
  assert.match(src, /lastTouchNavRef\.current=Date\.now\(\)/)
  assert.match(src, /const moveInspectorClick=delta=>/)
  assert.match(src, /Date\.now\(\)-lastTouchNavRef\.current<700/)
  assert.match(src, /data-inspector-nav="prev"/)
  assert.match(src, /data-inspector-nav="next"/)
  assert.match(src, /onPointerDown=\{event=>moveInspectorPointer\(-1,event\)\}/)
  assert.match(src, /onPointerDown=\{event=>moveInspectorPointer\(1,event\)\}/)
  assert.match(css, /touch-action:manipulation/)
  assert.match(css, /-webkit-tap-highlight-color:transparent/)
})


test('La exposición queda archivada como clase del 28 de octubre', () => {
  const classRoute = '/semestre/5/metodos-de-investigacion/clase/28-octubre'
  assert.ok(app.includes(classRoute))
  assert.ok(methodsIndex.includes(classRoute))
  assert.match(methodsIndex, /Exposición del estudiante · Fenomenología aplicada/)
  assert.match(methodsIndex, /Fenomenología como método de investigación filosófica/)
  assert.match(src, /isClassArchive/)
  assert.match(src, /CLASE · 28 OCTUBRE 2026/)
  assert.match(src, /Exposición impartida por el estudiante/)
  assert.match(src, /Abrir versión pública/)
  assert.match(css, /\.phen2d-class-context/)
})

test('La ruta pública compartible no depende del contexto archivístico de clase', () => {
  assert.match(src, /isClassArchive&&<aside className="phen2d-class-context"/)
  assert.match(src, /to="\/estudio\/fenomenologia-metodo\/sistema-2d"/)
})
