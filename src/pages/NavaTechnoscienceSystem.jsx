import {useCallback,useEffect,useMemo,useRef,useState} from 'react'
import {Link} from 'react-router'
import {Background,Controls,Handle,MarkerType,MiniMap,Position,ReactFlow,ReactFlowProvider,useReactFlow} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import SectionPedagogy from '../components/philosophy/system2d/SectionPedagogy.jsx'
import {useSystem2DCompactViewport} from '../components/philosophy/system2d/mobilePerformance.js'
import {SYSTEM_2D_THEME,resolveSystem2DEdgeColor} from '../components/philosophy/system2d/system2dTheme.js'
import {navaNodes,navaEdges,navaRoutes,navaOrder,navaById,NAVA_GEOMETRY} from '../data/navaTechnoscience2026.js'
import './NavaTechnoscienceSystem.css'

const SOURCE_URL='https://www.revistadefilosofia.org/index.php/ERF/article/view/1281'
const DOI_URL='https://doi.org/10.57027/eikasia.134.1281'
const CATALOG_LINK='/biblioteca?obra='+encodeURIComponent('Nava - Tecnociencia, entorno y sujeto tecnocientífico')

function NavaNode({data,selected}){
  return <article className={'nava-card'+(selected?' is-selected':'')+(data.isNeighbor?' is-neighbor':'')+(data.dimmed?' is-dimmed':'')}
     style={{'--nava-band':data.color}}>
    <Handle type="target" position={Position.Top}/>
    <div className="nava-card-meta"><span>{data.number} / {data.kind}</span><b>{data.page}</b></div>
    <h3>{data.title}</h3>
    <p className="nava-card-lead">{data.short}</p>
    <div className="nava-card-paraphrase"><small>FUENTE · PARÁFRASIS / {data.page}</small><p>{data.source}</p></div>
    <div className="nava-card-foot"><span>ESTACIÓN {data.number}</span><strong>ABRIR FOLIO ↗</strong></div>
    <Handle type="source" position={Position.Bottom}/>
  </article>
}
const nodeTypes={nava:NavaNode}

function NavaCanvas(){
  const [route,setRoute]=useState('all')
  const compactViewport=useSystem2DCompactViewport()
  const [selectedId,setSelectedId]=useState('N01')
  const [guided,setGuided]=useState(false)
  const [guideIndex,setGuideIndex]=useState(0)
  const [folioOpen,setFolioOpen]=useState(false)
  const [fullscreen,setFullscreen]=useState(false)
  const [minimap,setMinimap]=useState(false)
  const workspaceRef=useRef(null)
  const {fitView,setCenter}=useReactFlow()
  const selected=navaById(selectedId)
  const routeSequence=useMemo(()=>route==='all'?navaOrder:navaNodes.filter(n=>n.data.section===route).map(n=>n.id),[route])
  const activeSequence=guided?navaOrder:routeSequence
  const activeIndex=guided?guideIndex:activeSequence.indexOf(selectedId)
  const allowed=useMemo(()=>new Set(routeSequence),[routeSequence])
  const relationIds=useMemo(()=>new Set([selectedId,...navaEdges.filter(e=>
    e.source===selectedId||e.target===selectedId).flatMap(e=>[e.source,e.target])]),[selectedId])
  const displayedNodes=useMemo(()=>navaNodes.map(node=>{
    const focus=node.id===selectedId
    const neighbor=relationIds.has(node.id)&&!focus
    const dimmed=Boolean(selectedId)&&!relationIds.has(node.id)
    return {...node,hidden:!allowed.has(node.id),selected:focus,draggable:false,
      data:{...node.data,isNeighbor:neighbor,dimmed:dimmed&&!focus}}
  }),[selectedId,relationIds,allowed])
  const displayedEdges=useMemo(()=>navaEdges.map(edge=>{
    const related=edge.source===selectedId||edge.target===selectedId
    const color=resolveSystem2DEdgeColor({
      touchesSelected:related,conceptual:edge.critical,conceptualType:edge.critical?'analogy':null
    })
    return {...edge,type:'smoothstep',hidden:!allowed.has(edge.source)||!allowed.has(edge.target),
      style:{stroke:color,strokeWidth:related?3:1.65,opacity:related?1:.48},
      markerEnd:{type:MarkerType.ArrowClosed,color,width:15,height:15}}
  }),[selectedId,allowed])
  const center=useCallback(id=>{
    const node=navaById(id)
    if(!node)return
    window.requestAnimationFrame(()=>setCenter(node.position.x+NAVA_GEOMETRY.width/2,
      node.position.y+NAVA_GEOMETRY.height/2,{zoom:.94,duration:430}))
  },[setCenter])
  const focus=useCallback((id,fromGuide=false)=>{
    const node=navaById(id)
    if(!node)return
    setRoute(current=>current==='all'||current===node.data.section?current:node.data.section)
    if(!fromGuide)setGuided(false)
    setSelectedId(id)
    center(id)
  },[center])
  const changeRoute=useCallback((next)=>{
    setGuided(false)
    setFolioOpen(false)
    setRoute(next)
    const first=next==='all'?navaNodes[0]:navaNodes.find(n=>n.data.section===next)
    if(first)setSelectedId(first.id)
  },[])
  const launchGuide=()=>{
    setRoute('all')
    setGuided(true)
    setGuideIndex(0)
    setSelectedId(navaOrder[0])
    center(navaOrder[0])
  }
  const navigate=useCallback(delta=>{
    const next=Math.max(0,Math.min(activeIndex+delta,activeSequence.length-1))
    const id=activeSequence[next]
    if(!id)return
    if(guided)setGuideIndex(next)
    focus(id,guided)
  },[activeIndex,activeSequence,guided,focus])
  useEffect(()=>{
    const ids=route==='all'?navaOrder:routeSequence
    const raf=window.requestAnimationFrame(()=>fitView({nodes:ids.map(id=>({id})),
      padding:.19,maxZoom:.85,duration:420}))
    return ()=>window.cancelAnimationFrame(raf)
    // Cambiar de nodo jamás debe disparar fitView global.
  },[route,fitView,routeSequence])
  useEffect(()=>{
    const listener=()=>setFullscreen(document.fullscreenElement===workspaceRef.current)
    document.addEventListener('fullscreenchange',listener)
    return()=>document.removeEventListener('fullscreenchange',listener)
  },[])
  const toggleFullscreen=async()=>{
    const element=workspaceRef.current
    if(!element)return
    try{
      if(document.fullscreenElement===element)await document.exitFullscreen()
      else await element.requestFullscreen()
      window.requestAnimationFrame(()=>fitView({padding:.14,maxZoom:.86,duration:360}))
    }catch{/* Sistema utilizable cuando el navegador no admita fullscreen. */}
  }
  const relations=navaEdges.filter(e=>e.source===selectedId||e.target===selectedId)
  return <main className="nava-shell">
    <nav className="nava-nav">
      <Link to="/semestre/5/filosofia-analitica">← FILOSOFÍA ANALÍTICA</Link>
      <Link to="/" className="nava-brand">Φ · PHILOSOPHIA</Link>
      <Link to="/biblioteca">BIBLIOTHECA ↗</Link>
    </nav>
    <header className="nava-hero">
      <div className="nava-hero-title">
        <span className="nava-overline">DOSSIER 134 / TECNOCIENCIA · ESTUDIO DOCUMENTAL</span>
        <p className="nava-edition">EIKASÍA · 2026 · 21—30</p>
        <h1>El sujeto <em>tecnocientífico</em></h1>
        <p className="nava-hero-lead">¿Qué ocurre cuando una manera de producir tecnología termina reorganizando también nuestra forma de pensar y de vivir juntos?</p>
        <div className="nava-hero-links">
          <a href={SOURCE_URL} target="_blank" rel="noreferrer">LEER ARTÍCULO ORIGINAL ↗</a>
          <Link to={CATALOG_LINK}>VER FICHA EN BIBLIOTECA ↗</Link>
        </div>
      </div>
      <div className="nava-orbit" aria-label="Esquema conceptual de producción, entorno y sujeto">
        <div className="nava-orbit-inner"><span>01</span><b>PRODUCCIÓN</b><i>↓</i><span>02</span><b>ENTORNO</b><i>↓</i><span>03</span><b>SUJETO</b></div>
        <small>DIAGRAMA EDITORIAL · NO FIGURA DEL ARTÍCULO</small>
      </div>
      <aside className="nava-hero-metrics">
        <span>AUTOR / UNIVERSIDAD DE GUADALAJARA</span><strong>ALONSO<br/>NAVA<br/>AMEZCUA</strong>
        <p>Recomendación del profesor comunicada el 19 de octubre de 2026. No implica lectura en clase ni tarea obligatoria.</p>
        <div><b>12</b><span>ESTACIONES DE LECTURA</span></div>
      </aside>
    </header>

    <section className="nava-provenance">
      <strong>FRONTERA DE FUENTE</strong>
      <p><b>Fuente:</b> paráfrasis por páginas del artículo publicado. <b>Estudio:</b> interpretación y conexiones editoriales. <b>Preguntas:</b> ejercicios propios, no palabras atribuidas al profesor. La licencia de la revista es CC BY-NC-ND 4.0; consulte el texto íntegro en la fuente editorial.</p>
      <a href={DOI_URL} target="_blank" rel="noreferrer">DOI ↗</a>
    </section>

    <section className="nava-axis" aria-label="La tesis en tres desplazamientos">
      <span>EL PROBLEMA / TRES DESPLAZAMIENTOS</span>
      <div><article><small>I / MODELO</small><strong>¿Cómo producimos?</strong><p>De ciencia y tecnología genéricas a un régimen institucional orientado al mercado.</p></article>
      <article><small>II / MEDIACIÓN</small><strong>¿Qué entorno produce?</strong><p>La actividad científica y tecnológica transforma las condiciones materiales y sociales.</p></article>
      <article><small>III / SUJETO</small><strong>¿Cómo aprendemos a razonar?</strong><p>El sujeto tiende al cálculo instrumental y pierde espacio para preguntarse por sus fines.</p></article></div>
    </section>

    <section className="nava-guide">
      <div><span>GUÍA COMPLETA / 12 DE 12</span><h2>Recorra el argumento, no solo el gráfico.</h2>
        <p>La guía general recorre todas las estaciones. Abajo encontrará además un itinerario y ejercicios propios para cada sección.</p></div>
      <button type="button" onClick={launchGuide}>{guided?'REINICIAR GUÍA COMPLETA':'INICIAR GUÍA COMPLETA →'}</button>
    </section>
    <section className="nava-routes" aria-label="Rutas temáticas">
      {navaRoutes.map(item=><button type="button" key={item.id} className={route===item.id?'is-active':''}
        onClick={()=>changeRoute(item.id)}>{item.label}</button>)}
    </section>
    <SectionPedagogy nodes={navaNodes} routes={navaRoutes.filter(r=>r.id!=='all')}
      nodeOrder={navaOrder} activeRoute={route} selectedId={selectedId}
      onSectionChange={changeRoute} onFocusNode={focus}/>

    <section className="nava-map-section">
      <div className="nava-map-head"><div><span>PLANO CONCEPTUAL 2D / RELACIONES ARGUMENTATIVAS</span><h2>El atlas de las mediaciones</h2></div>
        <div className="nava-map-actions">
          <button type="button" onClick={()=>fitView({nodes:displayedNodes.filter(n=>!n.hidden).map(n=>({id:n.id})),padding:.2,maxZoom:.86,duration:350})}>ENCUADRAR</button>
          <button type="button" onClick={()=>setMinimap(v=>!v)}>{minimap?'OCULTAR MINIMAPA':'MINIMAPA'}</button>
          <button type="button" onClick={toggleFullscreen}>{fullscreen?'SALIR DE PANTALLA COMPLETA':'PANTALLA COMPLETA'}</button>
        </div>
      </div>
      <div className="nava-workspace" ref={workspaceRef}>
        <div className="nava-canvas">
          <ReactFlow nodes={compactViewport?displayedNodes.filter(n=>!n.hidden):displayedNodes} edges={compactViewport?displayedEdges.filter(e=>!e.hidden):displayedEdges} nodeTypes={nodeTypes}
            onNodeClick={(_,node)=>focus(node.id)} nodesDraggable={false} nodesConnectable={false}
            fitView fitViewOptions={{padding:.16,maxZoom:.82}} minZoom={.18} maxZoom={1.7}
            panOnScroll={false} proOptions={{hideAttribution:false}}>
            <Background color={SYSTEM_2D_THEME.muted} gap={25} size={1}/>
            <Controls showInteractive={false} position="bottom-left"/>
            {minimap&&!compactViewport&&<MiniMap pannable zoomable maskColor="#f6f0e3a3" nodeColor={n=>n.data.color}/>}
          </ReactFlow>
        </div>
        <aside className="nava-inspector" aria-live="polite">
          <header><span>FOLIO / {selected?.data.number} · {selected?.data.page}</span><b>{selected?.data.kind}</b></header>
          <div className="nava-inspector-scroll">
            <h3>{selected?.data.title}</h3>
            <p className="nava-inspector-short">{selected?.data.short}</p>
            <section><span>01 / FUENTE · PARÁFRASIS LOCALIZADA</span><p>{selected?.data.source}</p><small>{selected?.data.sourceRef}</small></section>
            <section><span>02 / LECTURA EDITORIAL</span><p>{selected?.data.explanation}</p></section>
            <section><span>03 / ESQUEMA RECONSTRUIDO</span>
              <ol className="nava-diagram">{selected?.data.diagram.map((step,i)=><li key={i}>{step}</li>)}</ol>
            </section>
            <section className="nava-question"><span>04 / PREGUNTA DE ESTUDIO</span><p>{selected?.data.question}</p></section>
            <section><span>05 / RELACIONES DOCUMENTADAS</span>
              {relations.length?<ul className="nava-relations">{relations.map(edge=><li key={edge.id}><button
                type="button" onClick={()=>focus(edge.source===selectedId?edge.target:edge.source)}>
                {navaById(edge.source===selectedId?edge.target:edge.source)?.data.title} ↗</button>
                <small>{edge.explanation}</small></li>)}</ul>:<p>Estación introductoria sin vínculo previo.</p>}
            </section>
          </div>
          <footer>
            <div><button type="button" disabled={activeIndex<=0} onClick={()=>navigate(-1)}>← ANTERIOR</button>
              <span>{guided?'GUÍA COMPLETA':'RUTA'} · {Math.max(0,activeIndex+1)}/{activeSequence.length}</span>
              <button type="button" disabled={activeIndex>=activeSequence.length-1} onClick={()=>navigate(1)}>SIGUIENTE →</button></div>
            <button type="button" className="nava-open" onClick={()=>setFolioOpen(true)}>ABRIR FOLIO Y ESQUEMA ↗</button>
          </footer>
        </aside>
        {folioOpen&&selected&&<div className="nava-folio-layer" role="dialog" aria-modal="true" aria-label={'Folio ampliado: '+selected.data.title}>
          <article className="nava-folio"><header><span>EXPEDIENTE / {selected.data.number} / {selected.data.page}</span>
            <button type="button" onClick={()=>setFolioOpen(false)} aria-label="Cerrar folio">CERRAR ✕</button></header>
            <h2>{selected.data.title}</h2><small>FUENTE PRIMARIA / PARÁFRASIS, NO CITA</small><p>{selected.data.source}</p>
            <small>ESTUDIO / RECONSTRUCCIÓN DEL ARGUMENTO</small><p>{selected.data.explanation}</p>
            <small>ESQUEMA VERTICAL, NO FIGURA DEL AUTOR</small>
            <ol className="nava-folio-diagram">{selected.data.diagram.map((part,i)=><li key={i}>{part}</li>)}</ol>
            <small>PREGUNTA PROPIA DE ESTUDIO</small><blockquote>{selected.data.question}</blockquote>
            <a href={SOURCE_URL} target="_blank" rel="noreferrer">CONSULTAR ARTÍCULO EN LA REVISTA ↗</a>
          </article></div>}
      </div>
    </section>
    <section className="nava-after">
      <div><span>ANTES / GENEALOGÍA</span><h2>Una controversia, no una etiqueta neutral</h2>
      <p>La tesis fuerte se sostiene frente a posiciones que niegan su novedad. No se afirma que Raynaud o Bunge compartan el diagnóstico de Nava.</p></div>
      <div><span>DESPUÉS / PREGUNTA ABIERTA</span><h2>¿Podemos gobernar nuestros fines?</h2>
      <p>El artículo termina con un problema ético y político: quién determina los valores de las tecnologías. Las posibles alternativas de gobernanza son preguntas añadidas por PHILOSOPHIA, no conclusiones del autor.</p></div>
    </section>
    <footer className="nava-footer"><span>PHILOSOPHIA / EDICIÓN ACADÉMICA · 2026</span>
      <Link to={CATALOG_LINK}>FICHA BIBLIOGRÁFICA ↗</Link><a href={DOI_URL}>NAVA AMEZCUA · DOI ↗</a></footer>
  </main>
}

export default function NavaTechnoscienceSystem(){
  return <ReactFlowProvider><NavaCanvas/></ReactFlowProvider>
}
