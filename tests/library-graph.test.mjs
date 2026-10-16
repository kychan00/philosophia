import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { books, authors } from '../src/data/libraryCatalog.js'
import {
 buildLibraryGraph,projectLibraryGraph,searchGraphNodes,
 connectedGraphNodes,connectedGraphRelations,documentedConceptLinks,documentedConceptRelations,
} from '../src/data/libraryGraph.js'

const graph=buildLibraryGraph()
const ids=new Set(graph.nodes.map(n=>n.id))
const byId=new Map(graph.nodes.map(n=>[n.id,n]))

test('todas las obras y autores tienen nodos únicos, sin aristas huérfanas',()=>{
 assert.equal(graph.nodes.length,ids.size)
 for(const book of books)assert.ok(ids.has('obra:'+book.id),book.id)
 for(const author of authors)assert.ok(ids.has('autor:'+author),author)
 assert.equal(graph.edges.length,new Set(graph.edges.map(e=>e.id)).size)
 for(const edge of graph.edges){
   assert.ok(ids.has(edge.source),'origen sin nodo')
   assert.ok(ids.has(edge.target),'destino sin nodo')
   assert.ok(edge.evidence&&edge.relation,'falta evidencia de relación')
 }
})

test('conceptos en el mapa sólo provienen de enlaces en fichas revisadas',()=>{
 const conceptNames=[...new Set([
   ...Object.values(documentedConceptLinks).flat(),
   ...Object.keys(documentedConceptRelations),
   ...Object.values(documentedConceptRelations).flat(),
 ])]
 assert.equal(graph.nodes.filter(n=>n.kind==='concepto').length,conceptNames.length)
 assert.ok(Object.keys(documentedConceptLinks).length>=28)
 assert.ok(Object.keys(documentedConceptRelations).length>=13)
 for(const [work,items] of Object.entries(documentedConceptLinks)){
   for(const term of items)
     assert.ok(graph.edges.some(e=>e.source==='obra:'+work &&
       e.target==='concepto:'+term && e.relation==='ficha_enlaza_concepto'))
 }
 for(const [source,items] of Object.entries(documentedConceptRelations))
   for(const target of items)
     assert.ok(graph.edges.some(e=>e.source==='concepto:'+source
       &&e.target==='concepto:'+target&&e.relation==='ficha_concepto_enlaza_otro'))
 assert.ok(connectedGraphRelations(graph,'concepto:Cosificación (Lukács)')
   .some(e=>e.other.label==='Mercancía (Marx)'&&e.evidence.includes('ficha')))
 assert.ok(!graph.edges.some(e=>e.relation==='dialoga_con'))
})

test('vista focal: un máximo de 34 nodos, sin posiciones superpuestas',()=>{
 const focus=projectLibraryGraph(graph)
 assert.ok(focus.nodes.length>=3&&focus.nodes.length<=34)
 assert.ok(focus.nodes.some(n=>n.isCenter))
 const points=focus.nodes.map(n=>n.position.x+':'+n.position.y)
 assert.equal(new Set(points).size,points.length)
 const restricted=projectLibraryGraph(graph,{concepts:false,classes:false,activities:false})
 assert.ok(restricted.nodes.every(n=>['autor','obra'].includes(n.kind)))
})

test('vista general: autores, obras y conceptos sin atribuir tareas a libros',()=>{
 const view=projectLibraryGraph(graph,{mode:'general'})
 assert.ok(view.nodes.length>=books.length+authors.length)
 const show=new Set(view.nodes.map(n=>n.id))
 assert.ok(view.nodes.every(n=>['autor','obra','concepto'].includes(n.kind)))
 assert.ok(view.edges.every(e=>show.has(e.source)&&show.has(e.target)))
 const coords=view.nodes.map(n=>n.position.x+':'+n.position.y)
 assert.equal(coords.length,new Set(coords).size)
})

test('búsqueda tolerante a tildes, inspección de vínculos y rutas públicas válidas',()=>{
 assert.ok(searchGraphNodes(graph,'cosificacion').some(n=>n.label==='Cosificación (Lukács)'))
 assert.ok(searchGraphNodes(graph,'marx').some(n=>n.label==='Marx, Karl'))
 assert.ok(connectedGraphNodes(graph,'obra:Platón - Cármides')
   .some(n=>n.label==='Sophrosyne (templanza)'))
 const app=readFileSync(new URL('../src/App.jsx',import.meta.url),'utf8')
 const routes=new Set([...app.matchAll(/<Route\s+path="([^"]+)"/g)].map(m=>m[1]))
 assert.ok(routes.has('/biblioteca/cartografia'))
 for(const n of graph.nodes){
   if(n.url)assert.ok(routes.has(n.url),'URL no publicada: '+n.url)
   assert.ok(!('vaultPath' in n)&&!('posesion' in n))
 }
 assert.ok([...byId.keys()].some(x=>x.startsWith('fuente:')))
 assert.ok(graph.edges.some(e=>e.relation==='mencionado_en_clase'))
 assert.ok(graph.edges.some(e=>e.relation==='registrado_en_tarea'))
})
