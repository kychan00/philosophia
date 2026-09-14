import { useEffect,useMemo,useRef,useState } from 'react'
import {edges,nodes,reading,regions,sources} from '../data/kantAestheticMap'
import './KantIntroductionMap.css'
import './KantAestheticMap.css'

const W=4900,H=3900,MIN=.18,MAX=1.45
const colors={blue:'#5b7185',space:'#4f7595',time:'#a77932',violet:'#6b5f86',green:'#55735f',red:'#984f43'}
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v))
const center=n=>({x:n.x+n.w/2,y:n.y+n.h/2})

function path(a,b){
  const A=center(a),B=center(b),dx=B.x-A.x,dy=B.y-A.y
  if(Math.abs(dx)>Math.abs(dy)){
    const d=dx>=0?1:-1,s=A.x+d*a.w/2,e=B.x-d*b.w/2,k=Math.max(60,Math.abs(e-s)*.42)
    return `M ${s} ${A.y} C ${s+d*k} ${A.y}, ${e-d*k} ${B.y}, ${e} ${B.y}`
  }
  const d=dy>=0?1:-1,s=A.y+d*a.h/2,e=B.y-d*b.h/2,k=Math.max(60,Math.abs(e-s)*.42)
  return `M ${A.x} ${s} C ${A.x} ${s+d*k}, ${B.x} ${e-d*k}, ${B.x} ${e}`
}

function Inspector({n,i,close,prev,next}){
  if(!n)return null
  return (
    <aside className="ki-inspector" style={{'--ki-node':colors[n.tone]}}>
      <div className="ki-inspector-scroll">
        <div className="ki-inspector-top">
          <div><span className="ki-inspector-kicker">{n.e}</span><h2>{n.t}</h2></div>
          <button type="button" className="ki-icon-button" onClick={close}>×</button>
        </div>
        <p className="ki-inspector-subtitle">{n.s}</p>
        <p className="ki-inspector-summary">{n.sum}</p>
        {sources[n.id]&&(
          <div className="ki-inspector-source">
            <span className="ki-inspector-label">EN EL TEXTO</span>
            <strong>Crítica de la razón pura · Ribas · pp. {sources[n.id].pages}</strong>
            <p>{sources[n.id].section}</p>
            <small>PDF · pp. {sources[n.id].pdf}</small>
          </div>
        )}
        {n.ask&&<div className="ki-inspector-question"><span>PREGUNTA</span><strong>{n.ask}</strong></div>}
        {n.q&&<blockquote>“{n.q}”</blockquote>}
        {n.d&&<div className="ki-inspector-block"><span className="ki-inspector-label">DESPLIEGUE</span><ul>{n.d.map(x=><li key={x}>{x}</li>)}</ul></div>}
        {n.f&&<div className="ki-inspector-formula"><span>FÓRMULA</span><strong>{n.f}</strong></div>}
        {n.m&&<div className="ki-inspector-remember"><span>PARA RECORDAR</span><p>{n.m}</p></div>}
      </div>
      <div className="ki-inspector-nav">
        <button type="button" onClick={prev} disabled={i<=0}>← Anterior</button>
        <span>{i+1} / {reading.length}</span>
        <button type="button" onClick={next} disabled={i>=reading.length-1}>Siguiente →</button>
      </div>
    </aside>
  )
}

export default function KantAestheticMap(){
  const ref=useRef(null),drag=useRef(null)
  const [sel,setSel]=useState('pure-intuition'),[z,setZ]=useState(.32),[pan,setPan]=useState({x:12,y:18}),[route,setRoute]=useState(true),[guide,setGuide]=useState(false)
  const by=useMemo(()=>Object.fromEntries(nodes.map(n=>[n.id,n])),[])
  const n=sel?by[sel]:null,i=sel?reading.indexOf(sel):-1,set=useMemo(()=>new Set(reading),[]),prevId=i>0?reading[i-1]:null,nextId=i>=0&&i<reading.length-1?reading[i+1]:null
  const fit=()=>{const e=ref.current;if(!e)return;const nz=clamp(Math.min((e.clientWidth-36)/W,(e.clientHeight-36)/H),MIN,.68);setZ(nz);setPan({x:(e.clientWidth-W*nz)/2,y:(e.clientHeight-H*nz)/2})}
  useEffect(()=>{fit()},[])
  const focus=(id)=>{const q=by[id],e=ref.current;if(!q||!e)return;const target=window.innerWidth<760?.74:.68;const nz=clamp(Math.max(z,target),MIN,MAX);setZ(nz);setPan({x:e.clientWidth/2-(q.x+q.w/2)*nz,y:e.clientHeight/2-(q.y+q.h/2)*nz});setSel(id)}
  const step=d=>{const k=i>=0?i:0;focus(reading[clamp(k+d,0,reading.length-1)])}
  const zoom=d=>{const e=ref.current;if(!e)return;const nz=clamp(z+d,MIN,MAX),cx=e.clientWidth/2,cy=e.clientHeight/2,wx=(cx-pan.x)/z,wy=(cy-pan.y)/z;setZ(nz);setPan({x:cx-wx*nz,y:cy-wy*nz})}
  const down=e=>{if(e.target.closest('button,.ki-node'))return;e.currentTarget.setPointerCapture(e.pointerId);drag.current={id:e.pointerId,x:e.clientX,y:e.clientY,px:pan.x,py:pan.y}}
  const move=e=>{const d=drag.current;if(!d||d.id!==e.pointerId)return;setPan({x:d.px+e.clientX-d.x,y:d.py+e.clientY-d.y})}
  const up=e=>{if(drag.current?.id===e.pointerId)drag.current=null}
  const selectNode=id=>{if(guide)focus(id);else setSel(id)}
  const toggleGuide=()=>{
    if(guide){setGuide(false);return}
    setGuide(true)
    focus(sel||reading[0])
  }
  const isGuideEdge=(a,b)=>{
    if(!guide)return false
    const visible=new Set([prevId,sel,nextId].filter(Boolean))
    return visible.has(a)&&visible.has(b)
  }
  useEffect(()=>{const e=ref.current;if(!e)return;const wheel=ev=>{ev.preventDefault();const r=e.getBoundingClientRect(),px=ev.clientX-r.left,py=ev.clientY-r.top,wx=(px-pan.x)/z,wy=(py-pan.y)/z,nz=clamp(z*(ev.deltaY>0?.9:1.1),MIN,MAX);setZ(nz);setPan({x:px-wx*nz,y:py-wy*nz})};e.addEventListener('wheel',wheel,{passive:false});return()=>e.removeEventListener('wheel',wheel)},[z,pan])

  return <main className="ki-page ka-page">
    <header className="ki-header">
      <button type="button" className="ki-back" onClick={()=>{window.location.hash='#/semestre/5/ontologia-ii'}}>← ONTOLOGÍA II</button>
      <div className="ki-header-copy"><span>IMMANUEL KANT · CRÍTICA DE LA RAZÓN PURA</span><h1>Estética trascendental</h1><p>Mapa didáctico 2D · sensibilidad, espacio, tiempo, fenómeno y límite trascendental</p></div>
      <div className="ki-date"><span>ESTUDIO</span><strong>14 · SEP · 2026</strong></div>
    </header>
    <section className="ki-study-strip ka-study-strip">
      <div><span>01</span><p><strong>Empiece arriba:</strong> sensibilidad → intuición → fenómeno.</p></div>
      <div className="ka-space-key"><span>02</span><p><strong>Rama azul:</strong> espacio y sentido externo.</p></div>
      <div className="ka-time-key"><span>03</span><p><strong>Rama ámbar:</strong> tiempo y sentido interno.</p></div>
      <div><span>04</span><p><strong>Converja:</strong> realidad empírica + idealidad trascendental.</p></div>
    </section>
    <section className={`ki-workspace ${n?'has-inspector':''}`}>
      <div className="ki-viewport" ref={ref} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
        <div className="ki-toolbar"><button type="button" onClick={()=>zoom(.12)}>+</button><button type="button" onClick={()=>zoom(-.12)}>−</button><button type="button" onClick={fit}>AJUSTAR</button><button type="button" className={route?'active':''} onClick={()=>setRoute(v=>!v)}>RUTA</button><button type="button" className={guide?'active':''} onClick={toggleGuide}>GUÍA</button></div>
        <div className="ki-zoom-readout">{Math.round(z*100)}%</div>
        <div className={`ki-world ${guide?'ka-guide-mode':''}`} style={{width:W,height:H,transform:`translate(${pan.x}px,${pan.y}px) scale(${z})`}}>
          {regions.map(r=><div key={r.id} className="ki-region" style={{left:r.x,top:r.y,width:r.w,height:r.h,'--ki-region':r.c}}><span>{r.label}</span></div>)}
          <svg className="ki-edges" viewBox={`0 0 ${W} ${H}`}><defs><marker id="ka-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z"/></marker></defs>{edges.map(([a,b,l])=>{const A=by[a],B=by[b],guideEdge=isGuideEdge(a,b);return <g key={`${a}-${b}`} className={`${route&&set.has(a)&&set.has(b)?'path-edge':''} ${guideEdge?'ka-guide-edge':''}`.trim()}><path d={path(A,B)} markerEnd="url(#ka-arrow)"/><text x={(center(A).x+center(B).x)/2} y={(center(A).y+center(B).y)/2-10}>{l}</text></g>})}</svg>
          {nodes.map(q=><button key={q.id} type="button" className={`ki-node ${q.hero?'hero':''} ${q.id===sel?'active ka-guide-current':''} ${q.id===nextId?'ka-guide-next':''} ${route&&set.has(q.id)?'in-path':''}`} style={{left:q.x,top:q.y,width:q.w,minHeight:q.h,'--ki-node':colors[q.tone]}} onClick={e=>{e.stopPropagation();selectNode(q.id)}} onDoubleClick={()=>focus(q.id)}><span className="ki-node-eyebrow">{q.e}</span><strong>{q.t}</strong><em>{q.s}</em>{q.hero&&<span className="ki-node-star">★</span>}</button>)}
        </div>
      </div>
      <Inspector n={n} i={i} close={()=>setSel(null)} prev={()=>step(-1)} next={()=>step(1)}/>
    </section>
    <footer className="ki-footer ka-footer"><span>CADENA DE MEMORIA</span><p>Sensibilidad → intuición → fenómeno → materia / forma → intuición pura → espacio + tiempo → realidad empírica + idealidad trascendental → fenómeno ≠ cosa en sí → sintéticos a priori → experiencia posible.</p></footer>
  </main>
}
