import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { tasks } from '../src/data/tasks.js'

const app=readFileSync(new URL('../src/App.jsx',import.meta.url),'utf8')
const page=readFileSync(new URL('../src/pages/MethodsClass26Oct.jsx',import.meta.url),'utf8')
const methods=readFileSync(new URL('../src/pages/MethodsResearch.jsx',import.meta.url),'utf8')
const svg=readFileSync(new URL('../public/images/metodos/metodos-26-oct-metodologias.svg',import.meta.url),'utf8')

test('la clase de Métodos del 26 de octubre tiene ruta y esquema original',()=>{
 assert.match(app,/MethodsClass26Oct/)
 assert.match(app,/\/semestre\/5\/metodos-de-investigacion\/clase\/26-octubre/)
 assert.match(methods,/metodos-de-investigacion\/clase\/26-octubre/)
 assert.match(page,/metodos-26-oct-metodologias.svg/)
 assert.match(page,/En palabras simples/)
 assert.match(page,/20 o 40 %/)
 assert.match(page,/Luis Villoro/)
 assert.match(svg,/<svg/)
 assert.match(svg,/CUANTITATIVO/)
 assert.match(svg,/CUALITATIVO/)
 assert.match(svg,/MIXTO/)
})
test('exposición identificada como planificación personal sin inventar rúbrica',()=>{
 const tarea=tasks.find(t=>t.id==='metodos-2026-10-26-exposicion-tres-dialecticas')
 assert.ok(tarea)
 assert.equal(tarea.subjectCode,'FI104')
 assert.equal(tarea.assignedDate,'2026-10-26')
 assert.equal(tarea.dueDate,'2026-11-04')
 assert.match(tarea.description,/TENTATIVA/)
 assert.match(tarea.description,/NO fecha oficial/)
 assert.match(tarea.description,/Sócrates\/Platón/)
 assert.equal(tarea.sourceRoute,'/semestre/5/metodos-de-investigacion/clase/26-octubre')
 assert.equal(tarea.completed,undefined)
})
