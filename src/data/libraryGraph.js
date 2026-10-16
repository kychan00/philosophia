import { books, authors } from './libraryCatalog.js'
import { authorsForWork, normalizeLibraryText } from './libraryCatalogUtils.js'
import { libraryTimelines } from './libraryTimelines.js'
import { libraryAcademicConnections } from './libraryAcademicConnections.js'

import { documentedConceptLinks, documentedConceptRelations } from './libraryConceptEvidence.js'
export { documentedConceptLinks, documentedConceptRelations } from './libraryConceptEvidence.js'

const order={autor:0,obra:1,concepto:2,clase:3,tarea:4,fuente:5}
const eventKind=e=>e.kind==='procedencia'?'fuente':e.kind==='tarea'?'tarea':'clase'
const eventId=e=>eventKind(e)+':'+JSON.stringify([e.date||'',e.area,e.title])

export function buildLibraryGraph() {
  const nodes=new Map(),edges=new Map()
  const put=n=>{if(!nodes.has(n.id))nodes.set(n.id,n)}
  const join=(source,target,relation,evidence,label)=>{
    const id=JSON.stringify([source,target,relation])
    if(source!==target&&!edges.has(id))edges.set(id,{id,source,target,relation,evidence,label})
  }
  for(const a of authors)put({id:'autor:'+a,kind:'autor',label:a,evidence:'ficha canónica de autor'})
  for(const b of books){
    const id='obra:'+b.id
    put({id,kind:'obra',label:b.titulo,subtitle:b.autor,category:b.categoria,
      bookId:b.id,studyUrl:b.studyUrl||null,status:b.estado,reading:b.lectura||null,
      evidence:'ficha bibliográfica canónica'})
    for(const a of authorsForWork(b,authors))
      join('autor:'+a,id,'autor_de','autoría bibliográfica registrada','Autoría')
  }
  const ensureConcept=concept=>{
    const id='concepto:'+concept
    put({id,kind:'concepto',label:concept,evidence:'ficha de concepto enlazada en el vault'})
    return id
  }
  for(const [work,concepts] of Object.entries(documentedConceptLinks)){
    if(!nodes.has('obra:'+work))throw Error('Obra inexistente: '+work)
    for(const concept of concepts){
      const id=ensureConcept(concept)
      join('obra:'+work,id,'ficha_enlaza_concepto',
        'enlace [[concepto]] explícito en ficha de obra; NO doctrina atribuida','Concepto documentado')
    }
  }
  for(const [sourceConcept,targets] of Object.entries(documentedConceptRelations)){
    const from=ensureConcept(sourceConcept)
    for(const target of targets) {
      const to=ensureConcept(target)
      join(from,to,'ficha_concepto_enlaza_otro',
        'la ficha de «'+sourceConcept+'» enlaza [[ '+target+' ]]; NO implica acuerdo, causalidad ni influencia','Enlace entre conceptos')
    }
  }
  function activity(e,from){
    if(!nodes.has(from))throw Error('Referencia sin ficha: '+from)
    const kind=eventKind(e),id=eventId(e)
    put({id,kind,label:e.title,subtitle:e.area,date:e.date||null,
      url:e.url||null,status:e.type||'',detail:e.note||e.dateLabel||'',
      evidence:kind==='clase'?'nota académica de clase':
        kind==='tarea'?'registro académico de tarea':'procedencia en ficha de obra o autor'})
    join(from,id,kind==='clase'?'mencionado_en_clase':kind==='tarea'?'registrado_en_tarea':'procedencia_documental',
      kind==='clase'?'mención documentada; no lectura íntegra':'procedencia registrada; no lectura completada',
      kind==='clase'?'En clase':kind==='tarea'?'En actividad':'Procedencia')
  }
  for(const [key,prefix] of [['works','obra:'],['authors','autor:']]){
    for(const [id,items] of Object.entries(libraryTimelines[key]))
      for(const e of items)activity(e,prefix+id)
    for(const [id,record] of Object.entries(libraryAcademicConnections[key]))
      for(const e of record.events)activity(e,prefix+id)
  }
  return {nodes:[...nodes.values()],edges:[...edges.values()]}
}
const eligible=(n,o)=>Boolean(n)&&(n.kind!=='concepto'||o.concepts)&&
  (n.kind!=='clase'||o.classes)&&(!['tarea','fuente'].includes(n.kind)||o.activities)

function arrange(items,centerId){
  const groups={}
  for(const n of items) (groups[n.kind]??=[]).push(n)
  for(const g of Object.values(groups))g.sort((a,b)=>a.label.localeCompare(b.label,'es'))
  const maxRows=Math.max(1,...Object.values(groups).map(g=>g.length))
  return ['autor','obra','concepto','clase','tarea','fuente'].flatMap((kind,col)=>
    (groups[kind]||[]).map((n,i,g)=>({...n,isCenter:n.id===centerId,
      position:{x:col*294,y:(i+(maxRows-g.length)/2)*150}})))
}
// La panorámica usa matrices por tipo para evitar columnas de 80+ tarjetas
// que hacían microscópico el grafo al encuadrarlo en un iPad.
function arrangeOverview(items){
 const groups={}
 for(const n of items)(groups[n.kind]??=[]).push(n)
 const sequence=['autor','obra','concepto']
 return sequence.flatMap((kind,band)=>{
  const ordered=(groups[kind]||[]).sort((a,b)=>a.label.localeCompare(b.label,'es'))
  return ordered.map((n,i)=>({...n,isCenter:false,
   position:{x:band*1410+(i%5)*274,y:Math.floor(i/5)*160}}))
 })
}

export function projectLibraryGraph(graph,{
 centerId='obra:Lukács - Historia y conciencia de clase',mode='foco',
 concepts=true,classes=true,activities=true,maxFocusNodes=34
}={}){
 const byId=new Map(graph.nodes.map(n=>[n.id,n]))
 const opts={concepts,classes,activities}
 if(mode==='general'){
   const arr=graph.nodes.filter(n=>['autor','obra','concepto'].includes(n.kind)&&eligible(n,opts))
   const ids=new Set(arr.map(n=>n.id))
   return {nodes:arrangeOverview(arr),edges:graph.edges.filter(e=>ids.has(e.source)&&ids.has(e.target))}
 }
 if(!byId.has(centerId))throw Error('Nodo central ausente: '+centerId)
 const adj=new Map()
 for(const e of graph.edges){
   for(const [a,b] of [[e.source,e.target],[e.target,e.source]]){
     if(!adj.has(a))adj.set(a,new Set())
     adj.get(a).add(b)
   }
 }
 const selected=new Set([centerId])
 const neighbors=(id)=>[...(adj.get(id)||[])].filter(x=>eligible(byId.get(x),opts))
   .sort((a,b)=>(order[byId.get(a).kind]-order[byId.get(b).kind])||a.localeCompare(b,'es'))
 for(const id of neighbors(centerId))if(selected.size<maxFocusNodes)selected.add(id)
 for(const first of [...selected].filter(x=>x!==centerId)){
   if(selected.size>=maxFocusNodes)break
   for(const id of neighbors(first))if(selected.size<maxFocusNodes)selected.add(id)
 }
 return {nodes:arrange([...selected].map(id=>byId.get(id)),centerId),
   edges:graph.edges.filter(e=>selected.has(e.source)&&selected.has(e.target))}
}
export function searchGraphNodes(graph,query,limit=12){
 const term=normalizeLibraryText(query).trim()
 if(!term)return []
 return graph.nodes.filter(n=>normalizeLibraryText(n.label+' '+(n.subtitle||'')).includes(term))
   .sort((a,b)=>order[a.kind]-order[b.kind]||a.label.localeCompare(b.label,'es')).slice(0,limit)
}
export function connectedGraphNodes(graph,id){
 const ids=new Set()
 for(const e of graph.edges){if(e.source===id)ids.add(e.target);if(e.target===id)ids.add(e.source)}
 const byId=new Map(graph.nodes.map(n=>[n.id,n]))
 return [...ids].map(x=>byId.get(x)).filter(Boolean).sort((a,b)=>order[a.kind]-order[b.kind]||a.label.localeCompare(b.label,'es'))
}

export function connectedGraphRelations(graph,id){
 const byId=new Map(graph.nodes.map(n=>[n.id,n]))
 return graph.edges.filter(e=>e.source===id||e.target===id).map(edge=>({
  ...edge,other:byId.get(edge.source===id?edge.target:edge.source),
  direction:edge.source===id?'saliente':'entrante',
 })).filter(r=>r.other)
 .sort((a,b)=>order[a.other.kind]-order[b.other.kind]||a.other.label.localeCompare(b.other.label,'es'))
}
