import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
import test from 'node:test'
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8')
const src=read('src/pages/CriticalTheoryClass20Oct.jsx')
const app=read('src/App.jsx')
const hub=read('src/pages/CriticalTheory.jsx')
const tasks=read('src/data/tasks.js')
const css=read('src/pages/CriticalTheoryClass20Oct.css')
test('Clase y nueva lectura conectadas a índice, ruta y tareas',()=>{
  assert.match(app,/\/teoria-critica\/clase\/20-octubre/)
  assert.match(hub,/\/teoria-critica\/clase\/20-octubre/)
  assert.match(tasks,/teoria-critica-2026-10-22-freud-malestar/)
  assert.match(tasks,/dueDate: '2026-10-22'/)
})
test('12 folios independientes y un solo inspector seleccionado',()=>{
  const ids=[...src.matchAll(/id:'([a-z-]+)',title:/g)].map(m=>m[1])
  assert.equal(ids.length,12)
  assert.equal(new Set(ids).size,12)
  assert.match(src,/current=chapters\[index\]/)
  assert.match(src,/aria-pressed=\{active===item\.id\}/)
  assert.match(src,/current\.body/)
  assert.doesNotMatch(css,/position:\s*absolute|text-overflow:\s*ellipsis/)
})
test('Conserva bibliografía, límites de fuente y responsive',()=>{
  assert.match(src,/lukacs-cosificacion/)
  assert.match(src,/Vigilar y castigar/)
  assert.match(src,/El malestar en la cultura/)
  assert.match(css,/@media\(max-width:470px\)/)
  assert.doesNotMatch(src,/grabaci[oó]n|transcripci[oó]n/i)
})
