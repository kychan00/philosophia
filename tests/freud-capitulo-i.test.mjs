import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { freudIConcepts, freudISections, freudIRoutes, freudILinks, freudIOrder } from '../src/data/freudMalestarCapituloI.js'
import { freudMalestarWork, freudMalestarChapters, freudMalestarChapterById } from '../src/data/freudMalestarBook.js'

test('Freud capítulo I completo: 62 nodos y 4 rutas temáticas', () => {
  assert.equal(freudIConcepts.length, 62)
  assert.equal(freudISections.length, 4)
  assert.equal(freudIRoutes.length, 5)
  assert.deepEqual(freudIOrder, freudIConcepts.map((item) => item.id))
  assert.equal(new Set(freudIOrder).size, freudIOrder.length)
  for (const section of freudISections) {
    assert.ok(freudIConcepts.some((node) => node.section === section.id))
    assert.ok(section.question && section.before && section.after)
  }
})

test('cada nodo cotejado separa texto original, explicación y palabras simples', () => {
  for (const node of freudIConcepts) {
    assert.match(node.page, /^pp?\./)
    assert.ok(node.originalQuote?.startsWith('«') && node.originalQuote?.endsWith('»'), 'Cita literal ausente: ' + node.id)
    assert.ok(!node.originalQuote.includes('[...]'), 'La cita no debe ocultar omisiones editoriales: ' + node.id)
    assert.ok(node.explanation.length > 70, 'Explicación insuficiente: ' + node.id)
    assert.ok(node.simple.length > 30, 'Capa simple insuficiente: ' + node.id)
    assert.match(node.layer, /cita literal cotejada/)
    assert.ok(node.question.includes('¿'))
    assert.ok(node.answer.length > 15)
    assert.ok(node.steps.length >= 2)
  }
})

test('la frontera documental termina en el cierre del apartado I antes del encabezado II', () => {
  const last = freudIConcepts.at(-1)
  assert.equal(last.id, 'F62')
  assert.equal(last.page, 'p. 13')
  assert.equal(last.section, 'religion')
  assert.match(last.title, /luz del día/i)
  assert.match(freudISections.at(-1).after, /encabezado II/)
})

test('las conexiones son válidas y no existe ciclo de dependencias', () => {
  const known = new Set(freudIConcepts.map((node) => node.id))
  for (const edge of freudILinks) {
    assert.ok(known.has(edge.source) && known.has(edge.target))
    assert.notEqual(edge.source, edge.target)
  }
  const seen = new Set()
  const stack = new Set()
  const visit = (id) => {
    if (seen.has(id)) return
    assert.ok(!stack.has(id), 'ciclo detectado: ' + id)
    stack.add(id)
    for (const parent of freudIConcepts.find((x) => x.id === id)?.dependsOn || []) visit(parent)
    stack.delete(id)
    seen.add(id)
  }
  for (const id of known) visit(id)
  assert.equal(seen.size, 62)
})

test('la interfaz exige cita literal, explicación, folio y paginación impresa', () => {
  const source = readFileSync(new URL('../src/pages/FreudMalestarCapituloI.jsx', import.meta.url), 'utf8')
  const styles = readFileSync(new URL('../src/pages/FreudMalestarCapituloI.css', import.meta.url), 'utf8')
  assert.match(source, /TEXTO ORIGINAL · CITA LITERAL COTEJADA/)
  assert.match(source, /EXPLICACIÓN ACADÉMICA/)
  assert.match(source, /data\.originalQuote/)
  assert.match(source, /paginación impresa/)
  assert.match(source, /páginas impresas 2–13/)
  assert.match(source, /data\.onOpenFolio\(data\.id\)/)
  assert.match(source, /role="dialog" aria-modal="true"/)
  assert.match(source, /event\.key === 'Escape'/)
  assert.match(source, /GRID_STEP/)
  assert.match(source, /DEFAULT_ROUTE = 'planteamiento'/)
  assert.match(source, /const flowNodes = useMemo\(\(\) => nodes\.filter/)
  assert.match(source, /onlyRenderVisibleElements/)
  assert.match(source, /compactViewport && route === 'all'/)
  assert.match(styles, /\.freud-folio-quote/)
  assert.match(styles, /\.freud-node-analysis/)
})


test('la apertura segura evita montar el atlas completo de 62 nodos por defecto', () => {
  const source = readFileSync(new URL('../src/pages/FreudMalestarCapituloI.jsx', import.meta.url), 'utf8')
  assert.doesNotMatch(source, /useState\('all'\)/)
  assert.match(source, /useState\(DEFAULT_ROUTE\)/)
  assert.match(source, /ReactFlow nodes=\{flowNodes\}/)
  assert.match(source, /La obra se estudia por capítulos/)
})


test('la obra tiene una capa de navegación por capítulos independiente del capítulo I', () => {
  assert.equal(freudMalestarWork.title, 'El malestar en la cultura')
  assert.equal(freudMalestarWork.studyMode, 'Lectura por capítulos')
  const active = freudMalestarChapterById('I')
  assert.equal(active.id, 'I')
  assert.equal(active.status, 'available')
  const future = freudMalestarChapters.find((chapter) => chapter.status === 'future')
  assert.ok(future)
  assert.equal(future.title, 'Próximos capítulos')
})

test('la interfaz presenta capítulo activo y continuidad futura de la obra', () => {
  const source = readFileSync(new URL('../src/pages/FreudMalestarCapituloI.jsx', import.meta.url), 'utf8')
  const styles = readFileSync(new URL('../src/pages/FreudMalestarCapituloI.css', import.meta.url), 'utf8')
  assert.match(source, /OBRA EN LECTURA POR CAPÍTULOS/)
  assert.match(source, /LECTOR DE LA OBRA/)
  assert.match(source, /Capítulo activo/)
  assert.match(source, /freudMalestarChapters\.map/)
  assert.match(source, /ACTIVE_CHAPTER_ID = 'I'/)
  assert.match(source, /chapter\.status === 'available' && chapter\.route/)
  assert.match(source, /HILO DEL CAPÍTULO ACTIVO/)
  assert.match(source, /ATLAS DEL CAPÍTULO ACTIVO/)
  assert.match(source, /Iniciar guía/)
  assert.match(styles, /\.freud-chapter-shelf/)
  assert.match(styles, /\.freud-chapter-card\.is-future/)
})
