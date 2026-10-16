import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import {
  ReactFlow, Background, Controls, MiniMap, Panel, useReactFlow,
  Handle, Position, MarkerType, applyNodeChanges,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { books, authors } from '../data/libraryCatalog.js'
import { formatApaRecord } from '../data/libraryApa.js'
import {
  buildLibraryGraph, projectLibraryGraph, searchGraphNodes, connectedGraphRelations,
} from '../data/libraryGraph.js'
import './LibraryCartography.css'

const names={
  autor:'Autor',obra:'Obra',concepto:'Concepto',clase:'Clase',
  tarea:'Tarea',fuente:'Procedencia',
}
const markers={autor:'AU',obra:'OB',concepto:'CO',clase:'CL',tarea:'TA',fuente:'PR'}
const graph=buildLibraryGraph()
const indexed=new Map(graph.nodes.map(n=>[n.id,n]))
const byBook=new Map(books.map(b=>[b.id,b]))

function KnowledgeNode({data,selected}){
  return <div className={'bc-node bc-node--'+data.kind+(selected?' bc-node--active':'')}>
    <Handle type="target" position={Position.Left} className="bc-node-handle"/>
    <span className="bc-node-meta"><b>{markers[data.kind]}</b>{names[data.kind]}</span>
    <strong title={data.label}>{data.label}</strong>
    {data.subtitle&&<small>{data.subtitle}</small>}
    {data.isCenter&&<span className="bc-center-tag">EN FOCO</span>}
    <Handle type="source" position={Position.Right} className="bc-node-handle"/>
  </div>
}
const nodeTypes={record:KnowledgeNode}
const edgeColors={
  autor_de:'#4589ff',ficha_enlaza_concepto:'#e6ad46',ficha_concepto_enlaza_otro:'#f2c66c',
  mencionado_en_clase:'#9b89e5',registrado_en_tarea:'#e58b56',
  procedencia_documental:'#8b9baa',
}

function RecenterAction(){
  const { fitView } = useReactFlow()
  return <Panel position="top-right" className="bc-map-actions">
    <button type="button" className="bc-recenter"
      onClick={()=>fitView({padding:.18,maxZoom:1,duration:350})}>
      ⤢ <span>Recentrar red</span>
    </button>
  </Panel>
}

function Canvas({projection,onSelect,compact}){
  const initialNodes=()=>projection.nodes.map(n=>({
    id:n.id,type:'record',position:n.position,
    data:{...n},dragHandle:'.bc-node',
  }))
  const [nodes,setNodes]=useState(initialNodes)
  const edges=useMemo(()=>projection.edges.map(e=>({
    id:e.id,source:e.source,target:e.target,
    type:'smoothstep',animated:false,label:'',
    style:{stroke:edgeColors[e.relation]||'#8b9baa',strokeWidth:1.7,opacity:.74},
    markerEnd:{type:MarkerType.ArrowClosed,width:12,height:12,
      color:edgeColors[e.relation]||'#8b9baa'},
  })),[projection])
  const onNodesChange=useCallback(changes=>setNodes(items=>applyNodeChanges(changes,items)),[])
  return <ReactFlow
    nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange}
    onNodeClick={(_,n)=>onSelect(n.id)}
    minZoom={0.13} maxZoom={2.1} fitView
    fitViewOptions={{padding:.16,maxZoom:1.04,duration:500}}
    nodesConnectable={false} nodesDraggable={false} elementsSelectable
    panOnDrag zoomOnPinch panOnScroll={!compact} zoomOnScroll={!compact}
    preventScrolling attributionPosition="bottom-left"
    proOptions={{hideAttribution:false}}
    aria-label="Cartografía bibliográfica interactiva"
    className="bc-flow">
    <Background color="#393f46" gap={24} size={1} />
    <MiniMap pannable zoomable maskColor="#111820aa"
      nodeColor={n=>({autor:'#4589ff',obra:'#42be9c',concepto:'#e6ad46',clase:'#9b89e5',tarea:'#e58b56',fuente:'#8b9baa'}[n.data?.kind]||'#617483')}
      style={{background:'#111820',border:'1px solid #3b4a59'}}/>
    <Controls showInteractive={false} />
    <RecenterAction />
  </ReactFlow>
}
const defaultId='obra:Lukács - Historia y conciencia de clase'

function Inspector({current,onFocus,onSelect,onClose,compact,open,inspectorRef}) {
  const relations=useMemo(()=>current?connectedGraphRelations(graph,current.id):[],[current])
  const citation=current?.kind==='obra' ? formatApaRecord(byBook.get(current.bookId),authors) : null
  return <aside ref={inspectorRef} className={'bc-inspector'+(open?' bc-inspector--open':'')}
    role={compact?'dialog':undefined} aria-modal={compact&&open?true:undefined}
    aria-hidden={compact&&!open} inert={compact&&!open}
    aria-label="Ficha del nodo seleccionado" data-inspector-open={open}>
    <div className="bc-inspector-top">
      <span>INSPECTOR / FICHA ACTIVA</span>
      <div className="bc-inspector-heading-actions">
        <b>{current?markers[current.kind]:'—'}</b>
        <button type="button" className="bc-close-inspector" onClick={onClose}
          aria-label="Cerrar ficha y volver al mapa">Cerrar ✕</button>
      </div>
    </div>
    {current?<div className="bc-inspector-body">
      <span className="bc-type">{names[current.kind]}</span>
      <h2>{current.label}</h2>
      {current.subtitle&&<p className="bc-subtitle">{current.subtitle}</p>}
      <p className="bc-evidence"><strong>Procedencia</strong> {current.evidence}</p>
      {current.date&&<p className="bc-fact"><strong>Fecha registrada</strong> {current.date}</p>}
      {current.status&&<p className="bc-fact"><strong>Registro</strong> {current.status}</p>}
      {current.reading&&<p className="bc-fact"><strong>Lectura</strong> {current.reading}</p>}
      {current.detail&&<p className="bc-fact"><strong>Detalle</strong> {current.detail}</p>}
      {citation&&<div className="bc-citation">
        <strong>Referencia APA 7</strong>
        <p>{citation.text}</p>
        {citation.status==='pendiente'&&<small>Provisional: {citation.issues.join(', ')}</small>}
      </div>}
      <div className="bc-inspector-actions">
        <button type="button" onClick={()=>onFocus(current.id)}>Explorar su red <span>↗</span></button>
        {current.kind==='obra'&&<Link to={'/biblioteca?obra='+encodeURIComponent(current.bookId)}>Abrir ficha de obra ↗</Link>}
        {current.kind==='autor'&&<Link to={'/biblioteca?autor='+encodeURIComponent(current.label)}>Abrir ficha de autor ↗</Link>}
        {current.studyUrl&&<Link to={current.studyUrl}>Abrir estudio 2D ↗</Link>}
        {current.url&&<Link to={current.url}>Abrir actividad pública ↗</Link>}
      </div>
      <section className="bc-relations">
        <h3>RELACIONES DOCUMENTADAS <b>{relations.length}</b></h3>
        {relations.length?<ul>{relations.slice(0,24).map(relation=><li key={relation.id}>
          <button type="button" onClick={()=>onSelect(relation.other.id)}>
            <span>{markers[relation.other.kind]}</span>
            <span className="bc-relation-label">{relation.other.label}
              <small>{relation.label} · {relation.direction==='saliente'?'Desde esta ficha':'Hacia esta ficha'}</small>
            </span>
          </button>
          <p className="bc-relation-evidence">{relation.evidence}</p>
        </li>)}</ul>:<p>La ficha existe, pero no se han registrado conexiones adicionales.</p>}
        {relations.length>24&&<small>Se muestran las primeras 24 relaciones. Use la búsqueda para localizar otras.</small>}
      </section>
    </div>:<p className="bc-placeholder">Seleccione una tarjeta del mapa o utilice el buscador para abrir su ficha.</p>}
  </aside>
}

function useCompactCartography(){
  const [compact,setCompact] = useState(()=>
    typeof window!=='undefined' && window.matchMedia('(max-width: 1120px)').matches)
  useEffect(()=>{
    const media=window.matchMedia('(max-width: 1120px)')
    const update=()=>setCompact(media.matches)
    update()
    media.addEventListener('change',update)
    return ()=>media.removeEventListener('change',update)
  },[])
  return compact
}

export default function LibraryCartography(){
  const [params]=useSearchParams()
  const initial=params.get('obra') ? 'obra:'+params.get('obra') :
    params.get('autor') ? 'autor:'+params.get('autor') : defaultId
  const resolved=indexed.has(initial)?initial:defaultId
  const [center,setCenter]=useState(resolved)
  const [selected,setSelected]=useState(resolved)
  const [mode,setMode]=useState('foco')
  const [filters,setFilters]=useState({concepts:true,classes:true,activities:true})
  const [query,setQuery]=useState('')
  const compact=useCompactCartography()
  const [inspectorOpen,setInspectorOpen]=useState(false)
  const inspectorRef=useRef(null)
  useEffect(()=>{
    if(!compact||!inspectorOpen)return
    const previouslyFocused=document.activeElement
    const inspector=inspectorRef.current
    inspector?.querySelector('.bc-close-inspector')?.focus()
    const keyboard=(event)=>{
      if(event.key==='Escape'){event.preventDefault();setInspectorOpen(false);return}
      if(event.key!=='Tab'||!inspector)return
      const controls=[...inspector.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')]
        .filter(node=>node.getClientRects().length>0)
      if(!controls.length)return
      const first=controls[0],last=controls.at(-1)
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    }
    document.addEventListener('keydown',keyboard)
    return ()=>{
      document.removeEventListener('keydown',keyboard)
      if(previouslyFocused?.isConnected)previouslyFocused.focus()
    }
  },[compact,inspectorOpen])
  const projection=useMemo(()=>projectLibraryGraph(graph,{
    centerId:center,mode,...filters,maxFocusNodes:34,
  }),[center,mode,filters])
  const present=indexed.get(selected)
  const suggestions=useMemo(()=>searchGraphNodes(graph,query,10),[query])
  const selectNode=useCallback(id=>{
    setSelected(id)
    if(compact)setInspectorOpen(true)
  },[compact])
  const focus=useCallback(id=>{
    setCenter(id);setSelected(id);setMode('foco')
    if(compact)setInspectorOpen(true)
  },[compact])
  const toggle=(key)=>setFilters(prev=>({...prev,[key]:!prev[key]}))
  const graphKey=[mode,center,Number(filters.concepts),Number(filters.classes),Number(filters.activities)].join('|')
  return <main className="bc-shell" data-compact={compact}>
    <nav className="bc-nav" aria-label="Navegación de biblioteca">
      <Link to="/biblioteca">← Biblioteca</Link>
      <Link to="/" className="bc-brand">Φ / PHILOSOPHIA</Link>
      <span>ARCHIVO · RED DE CONOCIMIENTO</span>
    </nav>
    <header className="bc-hero">
      <div>
        <span className="bc-kicker">SISTEMA 2D / BIBLIOTECA</span>
        <h1>Cartografía <span>bibliográfica.</span></h1>
        <p>Autores, obras, conceptos y actividades conectados por evidencias del archivo académico.
          Las líneas describen <strong>vínculos documentales</strong>, no influencias filosóficas supuestas.</p>
      </div>
      <div className="bc-counter" aria-label="Inventario del grafo">
        <div><b>{books.length}</b><span>OBRAS</span></div>
        <div><b>{authors.length}</b><span>AUTORES</span></div>
        <div><b>{graph.nodes.filter(n=>n.kind==='concepto').length}</b><span>CONCEPTOS VERIFICADOS</span></div>
      </div>
    </header>
    <div className="bc-toolbar">
      <div className="bc-search">
        <label htmlFor="bc-find">BUSCAR EN LA RED</label>
        <input id="bc-find" value={query} onChange={e=>setQuery(e.target.value)}
          type="search" placeholder="Autor, obra, concepto o clase…"/>
        {query.trim()&&<ul className="bc-results" aria-label="Resultados de búsqueda">
          {suggestions.length ? suggestions.map(n=><li key={n.id}><button type="button"
            onClick={()=>{focus(n.id);setQuery('')}}><small>{names[n.kind]}</small>{n.label}</button></li>)
            : <li><span>Sin coincidencias</span></li>}
        </ul>}
      </div>
      <div className="bc-modes" aria-label="Modo de exploración">
        <button type="button" aria-pressed={mode==='foco'}
          onClick={()=>setMode('foco')}>Red contextual</button>
        <button type="button" aria-pressed={mode==='general'}
          onClick={()=>setMode('general')}>Vista general</button>
      </div>
      <div className="bc-filter" aria-label="Capas visibles">
        {[
          ['concepts','Conceptos'],['classes','Clases'],['activities','Tareas y fuentes'],
        ].map(([key,label])=><label key={key}>
          <input type="checkbox" checked={filters[key]} onChange={()=>toggle(key)}/>
          {label}</label>)}
      </div>
    </div>
    <div className="bc-legend" aria-label="Significado de los nodos">
      {['autor','obra','concepto','clase','tarea','fuente'].map(kind=>
        <span className={'bc-legend-'+kind} key={kind}>{names[kind]}</span>)}
      <span className="bc-count-visible">{projection.nodes.length} nodos · {projection.edges.length} vínculos visibles</span>
    </div>
    <div className="bc-workspace">
      {compact&&inspectorOpen&&<button type="button" className="bc-inspector-backdrop"
        onClick={()=>setInspectorOpen(false)} aria-label="Cerrar ficha y volver al mapa"/>}
      <section className="bc-map-panel" aria-label="Mapa bibliográfico">
        <div className="bc-canvas-header"><span>MAPA DE RELACIONES</span>
          <span>{mode==='foco'?'FOCO CONTEXTUAL · HASTA 34 NODOS':'VISTA PANORÁMICA · AUTOR / OBRA / CONCEPTO'}</span>
        </div>
        <div className="bc-map-toolbar">
          <span>{compact?'Un dedo: mover · dos dedos: ampliar · toque una tarjeta':'Arrastre el mapa · amplíe con la rueda · seleccione un nodo'}</span>
          <button type="button" onClick={()=>setInspectorOpen(true)}
            className="bc-open-inspector" aria-expanded={compact?inspectorOpen:true}
            aria-controls="bc-inspector-panel">Ver ficha seleccionada ↗</button>
        </div>
        <div className="bc-canvas" data-mode={mode}>
          <Canvas key={graphKey} projection={projection} onSelect={selectNode} compact={compact}/>
        </div>
        <div className="bc-canvas-footer">Nodos fijos para evitar desplazamientos accidentales · utilice «Recentrar red» para recuperar la vista.</div>
      </section>
      <div id="bc-inspector-panel" className={'bc-inspector-mount'+(inspectorOpen?' bc-inspector-mount--open':'')}>
        <Inspector current={present} onFocus={focus} onSelect={selectNode}
          onClose={()=>setInspectorOpen(false)} compact={compact}
          open={inspectorOpen} inspectorRef={inspectorRef}/>
      </div>
    </div>
    <footer className="bc-footer">
      <p><strong>Frontera documental:</strong> autoría, enlace entre fichas, menciones de clase,
        tareas y conceptos identificados por enlaces explícitos. La existencia de un vínculo no
        acredita posesión, lectura íntegra, cita literal ni influencia intelectual.</p>
      <Link to="/biblioteca">Volver al catálogo ↗</Link>
    </footer>
  </main>
}
