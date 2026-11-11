import { useEffect, useId, useMemo, useState } from 'react'
import {
  senecaFirmnessNodeById,
  senecaFirmnessOrder,
} from '../../data/senecaFirmnessSystem'

const ink = '#17324d'
const blue = '#315d83'
const gold = '#b88a3b'
const paper = '#f7f1e6'
const sand = '#dfcba7'
const rose = '#a86f65'
const green = '#627d62'

function Sun({ x=0, y=0, r=18, className='' }) {
  return (
    <g className={className} transform={`translate(${x} ${y})`}>
      <circle r={r} fill="#efd483" stroke={ink} strokeWidth="2" />
      {Array.from({length:8}).map((_,i)=>{
        const a=(Math.PI*2*i)/8
        const x1=Math.cos(a)*(r+5), y1=Math.sin(a)*(r+5)
        const x2=Math.cos(a)*(r+14), y2=Math.sin(a)*(r+14)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={gold} strokeWidth="3" strokeLinecap="round"/>
      })}
    </g>
  )
}

function Cloud({ x=0, y=0, s=1, className='' }) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s})`} fill="#eef1f2" stroke={ink} strokeWidth="2">
      <circle cx="0" cy="8" r="16"/><circle cx="18" cy="0" r="20"/><circle cx="40" cy="9" r="15"/>
      <rect x="-1" y="8" width="42" height="16" rx="8"/>
    </g>
  )
}

function Tree({ x=0, y=0, s=1, className='' }) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-5" y="22" width="10" height="34" rx="3" fill="#8b6348" stroke={ink} strokeWidth="2"/>
      <circle cx="0" cy="4" r="25" fill="#78936e" stroke={ink} strokeWidth="2"/>
      <circle cx="-18" cy="12" r="16" fill="#6f8967" stroke={ink} strokeWidth="2"/>
      <circle cx="18" cy="12" r="16" fill="#6f8967" stroke={ink} strokeWidth="2"/>
    </g>
  )
}

function Person({ x=0, y=0, s=1, facing=1, robe=blue, arm='down', className='' }) {
  const armY = arm === 'up' ? -15 : 4
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s * facing} ${s})`} stroke={ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="0" cy="-27" r="10" fill="#efd1b5"/>
      <path d="M-13 -15 Q0 -23 13 -15 L17 26 L-17 26 Z" fill={robe}/>
      <path d={`M-10 -8 L-25 ${armY}`} fill="none"/>
      <path d="M10 -8 L25 6" fill="none"/>
      <path d="M-8 26 L-11 46 M8 26 L11 46" fill="none"/>
    </g>
  )
}

function Mountain({ x=0, y=0, s=1, className='' }) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 86 L72 -12 L138 86 Z" fill="#9aa5aa" stroke={ink} strokeWidth="2"/>
      <path d="M72 -12 L92 14 L77 10 L68 26 L57 9 L46 16 Z" fill="#f8f6ef" stroke={ink} strokeWidth="2"/>
      <path d="M-28 86 L26 28 L66 86 Z" fill="#aeb8b5" stroke={ink} strokeWidth="2"/>
    </g>
  )
}

function Wave({ x=0,y=0,s=1,className='' }) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 26 C18 -5 34 -5 54 22 C72 46 95 46 116 20 C98 58 62 68 31 55 C18 49 7 39 0 26Z" fill="#80aec4" stroke={ink} strokeWidth="2"/>
      <path d="M8 26 C20 14 33 13 45 28" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
    </g>
  )
}

function Arrow({x=0,y=0,angle=0,className=''}) {
  return (
    <g className={className} transform={`translate(${x} ${y}) rotate(${angle})`} stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round">
      <line x1="0" y1="0" x2="48" y2="0"/>
      <path d="M48 0 L38 -6 M48 0 L38 6"/>
      <path d="M2 0 L-6 -5 M2 0 L-6 5"/>
    </g>
  )
}

function Coins({x=0,y=0,s=1,className=''}) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s})`} stroke={ink} strokeWidth="2">
      <ellipse cx="0" cy="0" rx="18" ry="7" fill="#d4ab55"/>
      <rect x="-18" y="-16" width="36" height="16" fill="#c8993f"/>
      <ellipse cx="0" cy="-16" rx="18" ry="7" fill="#e6c36c"/>
      <ellipse cx="0" cy="-6" rx="18" ry="7" fill="#d8ae54"/>
    </g>
  )
}

function Mask({x=0,y=0,s=1,className=''}) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s})`} stroke={ink} strokeWidth="2">
      <path d="M-28 -18 Q0 -36 28 -18 L22 16 Q0 38 -22 16 Z" fill="#efe5d5"/>
      <ellipse cx="-10" cy="-6" rx="6" ry="4" fill={ink}/>
      <ellipse cx="10" cy="-6" rx="6" ry="4" fill={ink}/>
      <path d="M-10 14 Q0 7 10 14" fill="none" strokeWidth="3"/>
    </g>
  )
}

function Shield({x=0,y=0,s=1,className=''}) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 -34 L28 -22 L24 8 Q20 32 0 46 Q-20 32 -24 8 L-28 -22 Z" fill="#dbe5ea" stroke={ink} strokeWidth="3"/>
      <path d="M0 -20 V30 M-14 5 H14" stroke={gold} strokeWidth="4" strokeLinecap="round"/>
    </g>
  )
}

function Balance({x=0,y=0,s=1,className=''}) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s})`} stroke={ink} strokeWidth="2.5" fill="none">
      <line x1="0" y1="-25" x2="0" y2="36"/>
      <line x1="-42" y1="-12" x2="42" y2="-12"/>
      <line x1="-28" y1="-12" x2="-36" y2="12"/><line x1="-10" y1="-12" x2="-2" y2="12"/>
      <path d="M-44 12 Q-19 34 6 12 Z" fill="#e5d2a8"/>
      <line x1="28" y1="-12" x2="36" y2="12"/><line x1="10" y1="-12" x2="2" y2="12"/>
      <path d="M-6 12 Q19 34 44 12 Z" fill="#d5e3e8"/>
    </g>
  )
}

function BaseScene({ motif, compact=false }) {
  const w=compact ? 180 : 900
  const h=compact ? 112 : 500
  const transform=compact ? 'scale(.2)' : ''
  const rawId=useId().replace(/:/g,'')
  const clipId=`seneca-clip-${rawId}`
  const skyId=`seneca-sky-${rawId}`
  return (
    <svg className={compact ? 'seneca-svg-mini' : 'seneca-svg-stage'} viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Ilustración vectorial de la idea seleccionada">
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={w} height={h} rx={compact ? 10 : 24}/>
        </clipPath>
        <linearGradient id={skyId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#dce9ef"/><stop offset="100%" stopColor={paper}/>
        </linearGradient>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width={w} height={h} fill={`url(#${skyId})`}/>
        <g transform={transform}>
          <rect x="0" y="390" width="900" height="110" fill={sand}/>
          <Sun x={785} y={80} r={34} className="seneca-svg-sun"/>
          <Cloud x={90} y={74} s={1.25} className="seneca-svg-drift"/>
          <Cloud x={510} y={118} s={.8} className="seneca-svg-drift is-slow"/>
          {['figures','doctor'].includes(motif) && <>
            <Tree x={95} y={330} s={1.2}/>
            <Person x={285} y={328} s={1.5} robe="#728aa1" arm="up" className="seneca-svg-bob"/>
            <Person x={480} y={328} s={1.5} robe="#8f6c65" facing={-1}/>
            <Person x={590} y={328} s={1.25} robe="#b28e59" facing={-1}/>
            {motif==='doctor' && <g className="seneca-svg-bob"><rect x="397" y="284" width="48" height="28" rx="8" fill="#fff" stroke={ink} strokeWidth="3"/><path d="M421 289 V307 M412 298 H430" stroke={rose} strokeWidth="4"/></g>}
          </>}
          {['mountain','trail','summit'].includes(motif) && <>
            <Mountain x={430} y={230} s={2.2}/>
            <Person x={330} y={385} s={1.15} robe="#735f55" arm="up" className="seneca-svg-walk"/>
            <Tree x={180} y={350} s={.9}/><Tree x={720} y={355} s={1}/>
            {motif==='trail' && <path d="M345 398 C410 350 475 335 535 280 C590 230 610 170 640 110" fill="none" stroke={gold} strokeWidth="10" strokeLinecap="round" strokeDasharray="14 18" className="seneca-svg-dash"/>}
          </>}
          {motif==='forum' && <>
            <path d="M70 365 H830 M125 365 V180 M775 365 V180 M115 180 H785" stroke={ink} strokeWidth="8" fill="none"/>
            <Person x={450} y={330} s={1.8} robe="#ece4d8" className="seneca-svg-steady"/>
            {[180,260,650,730].map((x,i)=><Person key={x} x={x} y={350} s={1.15} facing={i<2?1:-1} robe={i%2?rose:'#7c756d'} arm="up" className={i%2?'seneca-svg-bob':''}/>)}
            <path d="M315 270 Q350 250 382 273" stroke={rose} strokeWidth="5" fill="none" strokeDasharray="2 12" className="seneca-svg-spit"/>
          </>}
          {['rock','shield','arrows','diamond','storm'].includes(motif) && <>
            <path d="M380 405 Q430 250 495 205 Q555 250 590 405 Z" fill="#7d858a" stroke={ink} strokeWidth="4"/>
            <Wave x={245} y={365} s={1.4} className="seneca-svg-wave"/>
            <Wave x={520} y={355} s={1.15} className="seneca-svg-wave is-delay"/>
            <Arrow x={140} y={150} angle={15} className="seneca-svg-arrow"/>
            <Arrow x={190} y={205} angle={5} className="seneca-svg-arrow is-delay"/>
            {motif==='shield' && <Shield x={485} y={315} s={1.6} className="seneca-svg-steady"/>}
          </>}
          {['inner','sun','calm','tree'].includes(motif) && <>
            <Tree x={650} y={330} s={1.4} className="seneca-svg-breathe"/>
            <Person x={430} y={340} s={1.6} robe="#6e8290" className="seneca-svg-breathe"/>
            <circle cx="430" cy="280" r="62" fill="none" stroke={gold} strokeWidth="5" strokeDasharray="5 10" className="seneca-svg-spin"/>
          </>}
          {['coins','falling','balance'].includes(motif) && <>
            <Coins x={610} y={332} s={1.4} className="seneca-svg-fall"/>
            <Person x={315} y={345} s={1.55} robe="#647b6f"/>
            {motif==='balance' && <Balance x={455} y={290} s={1.25}/>}
            <path d="M570 350 C620 385 675 405 740 420" stroke={rose} strokeWidth="4" strokeDasharray="7 9" fill="none"/>
          </>}
          {['mask'].includes(motif) && <>
            <Mask x={620} y={300} s={1.5} className="seneca-svg-bob"/>
            <Person x={315} y={345} s={1.5} robe="#667b89" className="seneca-svg-steady"/>
            <path d="M495 285 Q535 250 575 280" fill="none" stroke={rose} strokeWidth="4" strokeDasharray="4 8"/>
          </>}
          {motif==='doctor' && <Person x={700} y={335} s={1.2} robe="#7c856d" facing={-1}/>}
        </g>
      </g>
    </svg>
  )
}

export function SenecaNodeIllustration({ motif='sage' }) {
  return <BaseScene motif={motif} compact />
}

function Curtain({ side }) {
  return <div className={`seneca-theater-curtain is-${side}`} aria-hidden="true"><i/><i/><i/><i/></div>
}

export default function SenecaSvgTheater({ open, startId='P01', onClose }) {
  const startIndex = Math.max(senecaFirmnessOrder.indexOf(startId), 0)
  const [index,setIndex] = useState(startIndex)
  const [playing,setPlaying] = useState(false)

  useEffect(()=>{
    if(open) setIndex(Math.max(senecaFirmnessOrder.indexOf(startId),0))
  },[open,startId])

  useEffect(()=>{
    if(!open || !playing) return
    const timer=window.setInterval(()=>{
      setIndex(current => {
        if(current >= senecaFirmnessOrder.length-1) {
          setPlaying(false)
          return current
        }
        return current+1
      })
    },6500)
    return ()=>window.clearInterval(timer)
  },[open,playing])

  const id=senecaFirmnessOrder[index]
  const node=senecaFirmnessNodeById(id)
  const progress=((index+1)/senecaFirmnessOrder.length)*100
  const label=useMemo(()=>node?.data?.sceneNote || node?.data?.explanation || '',[node])

  if(!open || !node) return null

  return (
    <div className="seneca-theater" role="dialog" aria-modal="true" aria-labelledby="seneca-theater-title">
      <div className="seneca-theater-backdrop" onClick={onClose}/>
      <div className="seneca-theater-shell">
        <Curtain side="left"/><Curtain side="right"/>
        <header className="seneca-theater-header">
          <div>
            <span>TEATRO ESTOICO · ESCENA {index+1}/{senecaFirmnessOrder.length}</span>
            <h2 id="seneca-theater-title">{node.data.title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar animación">×</button>
        </header>

        <div className="seneca-theater-stage">
          <BaseScene motif={node.data.visual}/>
          <div className="seneca-theater-manga-lines" aria-hidden="true"/>
          <div className="seneca-theater-bubble">
            <span>SÉNECA · p. {node.data.explicitPage}</span>
            <blockquote>“{node.data.explicitText}”</blockquote>
          </div>
          <div className="seneca-theater-caption">
            <strong>{label}</strong>
            <p>{node.data.explanation}</p>
          </div>
        </div>

        <div className="seneca-theater-controls">
          <button type="button" disabled={index===0} onClick={()=>setIndex(v=>Math.max(0,v-1))}>← Escena anterior</button>
          <button type="button" className="is-play" onClick={()=>setPlaying(v=>!v)}>{playing?'Pausar II':'Reproducir ▶'}</button>
          <button type="button" disabled={index===senecaFirmnessOrder.length-1} onClick={()=>setIndex(v=>Math.min(senecaFirmnessOrder.length-1,v+1))}>Siguiente escena →</button>
        </div>
        <div className="seneca-theater-progress"><i style={{width:progress+'%'}}/></div>
      </div>
    </div>
  )
}
