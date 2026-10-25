import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { critical18Sections, critical18SectionIds } from '../src/data/critical18Sections.js'

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8')
const page=read('src/pages/CriticalTheoryClass18Aug.jsx')
const view=read('src/components/critical/Critical18SectionStudy.jsx')
const styles=read('src/components/critical/Critical18SectionStudy.css')

test('las 11 secciones originales reciben una ficha propia y verificable',()=>{
  const ids=['encuadre','objetivo','pluralidad','dialectica','aprender','transdisciplina','genero','evaluacion','lectura','frankfurt','proxima']
  assert.deepEqual(critical18SectionIds,ids)
  assert.equal(critical18Sections.length,11)
  assert.deepEqual([...page.matchAll(/<section id="([^"]+)"/g)].map(x=>x[1]),ids,'No se pierden ni cambian las 11 secciones')
  assert.deepEqual([...page.matchAll(/<Critical18SectionStudy sectionId="([^"]+)" \/>/g)].map(x=>x[1]),ids,'Cada ficha corresponde exactamente al apartado original')
  for(const [i,part] of critical18Sections.entries()){
    assert.equal(part.number,String(i).padStart(2,'0'))
    assert.ok(part.question.length>35&&part.thesis.length>50&&part.explanation.length>100,'Contenido insuficiente: '+part.id)
    assert.ok(part.nodes.length===3&&part.nodes.every(x=>x.label&&x.title&&x.description),'Esquema incompleto: '+part.id)
    assert.ok(part.contrast.length===2&&part.contrast.every(x=>x.title&&x.description))
    assert.ok(['parallel','sequence'].includes(part.relation))
    for(const k of ['what','how','why','simple','takeaway']) assert.ok(part.guide[k].length>50,'Guía incompleta '+k+': '+part.id)
    assert.ok(part.practice.question&&part.practice.cue&&part.evidence)
  }
})

test('permanecen las consignas, pasajes y criterios de la clase',()=>{
  for(const snippet of [
    'Presentarse antes de comenzar','Qué debería dejar el curso',
    'Una formación filosófica plural','Analítica, Kant, Hegel y pensamiento dialéctico',
    'Se aprende filosofía viendo filosofar','La filosofía es indispensable, pero no suficiente',
    'Mujeres, feminismo y reconstrucción del Instituto','Cómo se evaluará realmente',
    'Las indicaciones de Classroom son un faro','Primer acercamiento a la Escuela de Frankfurt',
    'Qué sigue','Reale y Antiseri','30%','40%','no celular ni computadora'
  ]) assert.ok(page.includes(snippet),'Texto original faltante: '+snippet)
  assert.match(page,/<Critical18ThematicAtlas \/>/)
  assert.match(page,/imagesForCriticalTheoryClass/)
})

test('la interfaz contiene las capas visuales y la guía de Lógica sin falsas atribuciones',()=>{
  for(const marker of [
    'PROBLEMA QUE ABRE EL APARTADO','GUÍA DE LECTURA','QUÉ REPRESENTA',
    'CÓMO LEERLO','POR QUÉ ESTÁ AQUÍ','EN PALABRAS SIMPLES',
    'QUÉ DEBE QUEDAR CLARO','PRUEBA DE RECUPERACIÓN','PROCEDENCIA'
  ]) assert.ok(view.includes(marker),marker)
  assert.match(view,/section.relation === 'parallel'/)
  assert.match(view,/RECONSTRUCCIÓN DE PHILOSOPHIA/)
  assert.match(view,/No es una pregunta del examen ni una cita/)
  assert.match(view,/document.getElementById\(id\)\?\.scrollIntoView/)
  assert.doesNotMatch(view,/href="#/)
  assert.match(styles,/@media \(max-width:650px\)/)
  assert.match(styles,/@media print/)
  assert.match(styles,/focus-visible/)
})
