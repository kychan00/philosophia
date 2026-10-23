import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
import test from 'node:test'

const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8')
const src=read('src/pages/CriticalTheoryClass22Oct.jsx')
const app=read('src/App.jsx')
const hub=read('src/pages/CriticalTheory.jsx')
const tasks=read('src/data/tasks.js')
const css=read('src/pages/CriticalTheoryClass20Oct.css')

test('Clase Freud 22 oct: ruta, índice y continuidad de lectura enlazados',()=>{
  assert.match(app,/\/teoria-critica\/clase\/22-octubre/)
  assert.match(hub,/\/teoria-critica\/clase\/22-octubre/)
  assert.match(tasks,/teoria-critica-2026-10-22-freud-continuar-malestar/)
  assert.match(tasks,/dueDate: null/)
  assert.match(src,/seguir leyendo la obra de Freud/i)
})

test('Clase Freud 22 oct: 12 folios, inspector y palabras simples',()=>{
  const ids=[...src.matchAll(/id:\s*'([a-z-]+)'/g)].map(m=>m[1])
  assert.equal(ids.length,12)
  assert.equal(new Set(ids).size,12)
  assert.match(src,/current=chapters\[index\]/)
  assert.match(src,/aria-pressed=\{active===item\.id\}/)
  assert.match(src,/En palabras simples:/)
  assert.match(src,/current\.simple/)
})

test('Clase Freud 22 oct: fidelidad documental y movimiento conceptual',()=>{
  assert.match(src,/referencia cronológica imprecisa/i)
  assert.match(src,/segunda formulación del aparato psíquico/i)
  assert.match(src,/FUSIÓN YO–OTRO/)
  assert.match(src,/PRINCIPIO DE REALIDAD/)
  assert.match(src,/Lacan/)
  assert.doesNotMatch(src,/grabaci[oó]n|transcripci[oó]n/i)
})

test('Clase Freud 22 oct: conserva navegación responsive compartida',()=>{
  assert.match(css,/@media\(max-width:470px\)/)
  assert.match(src,/ct1510-node-grid/)
  assert.match(src,/ct1510-inspector/)
})
