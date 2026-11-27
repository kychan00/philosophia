import { useId } from 'react'

const ink = '#1a365d'
const red = '#a74d3c'
const sage = '#567967'

function Tree({ x, y, scale = 1 }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={ink} strokeWidth="1.8" strokeLinejoin="round"><path d="M0 0v-36m0 16-13-10m13 5 11-13" fill="none"/><path d="M-25-26Q-39-45-17-51Q-11-73 8-57Q31-60 28-39Q38-20 12-19Q-12-9-25-26Z" fill="#9eb6a2"/><path d="M-3-47L0-14" fill="none" opacity=".4"/></g>
}
function Person({x,y,scale=1,mood='calm',pose='stand',color=ink}) {
  const angry=mood==='angry', sad=mood==='sad'
  return <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
    <ellipse cx="0" cy="1" rx="19" ry="4" stroke="none" fill="#1a365d" opacity=".11"/>
    <circle cy="-65" r="13" fill={angry?'#e9b5a4':'#faf2dd'}/>
    <path d="M0-52V-25M0-25L-12 0M0-25L13 0"/>
    {pose==='reach'?<path d="M0-44L-17-36M0-44L24-49"/>:pose==='think'?<path d="M0-43L-15-30L-2-23M0-43L15-34L8-54"/>:pose==='run'?<path d="M0-43L-21-52M0-43L21-34"/>:<path d="M0-43L-18-28M0-43L18-28"/>}
    <path d={angry?'M-8-70l6 3m4 0 6-3M-5-59q5-5 10 0':sad?'M-8-68l5-1m6 0 5 1M-5-59q5-5 10 0':'M-7-68h2m10 0h2M-5-61q5 5 10 0'} strokeWidth="1.9"/>
  </g>
}
function Cloud({x,y,scale=1,color=red}) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}><path d="M-27 5Q-39-8-24-18Q-20-33-6-23Q6-37 18-23Q36-24 33-7Q45 7 27 13H-22Z" fill={color} opacity=".18" stroke={color} strokeWidth="2"/><path d="M4-18l-8 15h10L-2 12" stroke={color} strokeWidth="2.5" fill="none" strokeLinejoin="round"/></g>
}
function House({x,y}) {return <g transform={`translate(${x} ${y})`} stroke={ink} strokeWidth="2" strokeLinejoin="round"><path d="M-32 0v-37h64V0Z" fill="#efe0bf"/><path d="M-40-37L0-68 40-37Z" fill="#7694ae"/><path d="M-9 0v-24H9V0M-23-28h10v12h-10Zm36 0h10v12H13Z" fill="#faf8f5"/></g>}
function Dog({x,y}) {return <g transform={`translate(${x} ${y})`} stroke={ink} strokeWidth="2.3" fill="#e5cfac" strokeLinecap="round" strokeLinejoin="round"><path d="M-26-19Q-30-34-40-30M-20-9v10m11-12v12M14-9v10m10-13v13"/><rect x="-27" y="-32" width="54" height="25" rx="12"/><circle cx="31" cy="-34" r="13"/><path d="M25-44l-9-11 2 20M38-34h7l-5 5" fill="#b89758"/><circle cx="35" cy="-38" r="1.5" fill={ink}/></g>}
function Arrow({x1,y1,x2,y2,color=ink}) {
  const angle=Math.atan2(y2-y1,x2-x1)*180/Math.PI
  return <g stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={`M${x1} ${y1}L${x2} ${y2}`} strokeDasharray="5 4"/><path d="M-9-5L0 0-9 5" transform={`translate(${x2} ${y2}) rotate(${angle})`}/></g>
}
function ObjectBox({x,y,broken=false}) {return <g transform={`translate(${x} ${y})`} stroke={ink} strokeWidth="2" strokeLinejoin="round"><path d="M-20-24h40V0h-40Z" fill="#d6b880"/>{broken?<path d="M-4-24l8 9-10 6 9 9" fill="none" stroke={red} strokeWidth="3"/>:<path d="M-20-16h40" fill="none"/>}</g>}
function Landscape({kind}) {
  return <g aria-hidden="true">
    <rect width="320" height="184" rx="10" fill="#edf3fa"/>
    <circle cx="267" cy="34" r="18" fill="#e6c779"/>
    <path d="M0 106L54 48 101 103 163 33 240 107 280 62 320 101V184H0Z" fill="#c6d9e5"/>
    <path d="M0 125Q80 90 158 127T320 116V184H0Z" fill="#c2d1ba"/>
    <path d="M0 146Q90 124 173 144T320 139V184H0Z" fill="#dce1cd"/>
    <path d="M0 169Q107 143 320 167" fill="none" stroke="#b89758" opacity=".65" strokeWidth="2"/>
    <Tree x={26} y={146} scale={.66}/><Tree x={297} y={148} scale={.56}/>
    {kind==='garden'&&<Tree x={240} y={148} scale={.83}/>}
  </g>
}
function SceneContent({kind}) {
  switch(kind){
    case 'trust': return <><Person x={107} y={146} pose="reach"/><Person x={213} y={146} pose="reach" color={sage}/><path d="M131 97Q160 80 189 97" fill="none" stroke={sage} strokeWidth="4" strokeLinecap="round"/><circle cx="160" cy="88" r="9" fill="#f6e4ad" stroke={ink} strokeWidth="1.5"/></>
    case 'break': return <><Person x={104} y={146} mood="sad"/><Person x={221} y={146} color={sage}/><path d="M123 96l24-9m26 0 25 9M151 79l-5 13 10 3-5 12" stroke={red} strokeWidth="3" fill="none"/><Cloud x={103} y={42} scale={.63}/></>
    case 'anger': return <><Person x={109} y={146} mood="angry" pose="run" color={red}/><Cloud x={109} y={37} scale={.8}/><Person x={227} y={146} pose="reach"/><path d="M174 72h44q8 0 8 8v15h-26l-11 9v-9h-15Z" fill="#fff" stroke={ink} strokeWidth="1.7"/><path d="M180 80h30m-30 7h20M167 72l-12 29" stroke={red} strokeWidth="2.5"/></>
    case 'listen': return <><Person x={108} y={146} pose="think"/><Person x={222} y={146} pose="reach" color={sage}/><rect x="139" y="45" width="48" height="29" rx="8" fill="#fff" stroke={ink} strokeWidth="1.5"/><circle cx="151" cy="59" r="2" fill={ink}/><circle cx="163" cy="59" r="2" fill={ink}/><circle cx="175" cy="59" r="2" fill={ink}/></>
    case 'garden': return <><House x={85} y={143}/><Person x={166} y={147} scale={.88}/><Person x={207} y={148} scale={.72} color={sage}/><path d="M143 158q43-10 83 0" stroke={sage} strokeWidth="2" fill="none"/></>
    case 'ruin': return <><House x={83} y={143}/><path d="M43 153L123 75M46 76l76 77" stroke={red} strokeWidth="5" opacity=".75"/><Person x={215} y={147} mood="angry" pose="run" color={red}/><Cloud x={215} y={39} scale={.8}/><Arrow x1={175} y1={151} x2={130} y2={151} color={red}/></>
    case 'body': return <><Person x={160} y={153} scale={1.38} mood="angry" color={red}/><g fill="none" stroke={red} strokeWidth="2.4" strokeLinecap="round"><path d="M118 51l-9-8m12 1-1-13m80 19 10-9m-13 1 2-11M111 109l-9 3m10 4-9 5m95-12 12 3m-10 6 9 5M184 72q20-5 27 3m-23 3q17-3 22 3"/></g><path d="M141 109h12l6-10 7 18 7-8h9" fill="none" stroke={red} strokeWidth="2.4"/></>
    case 'pause': return <><Person x={152} y={146} pose="think"/><circle cx="222" cy="65" r="24" fill="#f7f4e8" stroke={ink} strokeWidth="2"/><path d="M222 48v18l9 7" stroke={ink} strokeWidth="2.5" fill="none"/><path d="M100 77q-14-10-21 0m17 11q-12-7-18 1" stroke={sage} strokeWidth="2.4" fill="none"/></>
    case 'retaliate': return <><Person x={102} y={146} mood="angry" color={red}/><Person x={221} y={146} mood="angry" color={red}/><Arrow x1={129} y1={91} x2={194} y2={91} color={red}/><Arrow x1={194} y1={112} x2={129} y2={112} color={red}/><ObjectBox x={160} y={152} broken/></>
    case 'balance': return <><Person x={72} y={146} pose="think" scale={.8}/><Person x={248} y={146} pose="stand" scale={.8} color={sage}/><g stroke={ink} strokeWidth="2.4" fill="#f4dfac" strokeLinejoin="round"><path d="M160 64v78m-22 0h44M112 79h96M112 79l-18 35h36Zm96 0-18 35h36Z"/><circle cx="160" cy="64" r="5"/></g></>
    case 'intention': return <><Person x={118} y={146} pose="reach"/><ObjectBox x={187} y={143}/><Arrow x1={142} y1={103} x2={177} y2={103}/><path d="M167 150h50" stroke={ink} strokeWidth="2"/></>
    case 'accident': return <><g transform="rotate(-17 139 138)"><Person x={139} y={138} pose="run" mood="sad"/></g><path d="M122 149l-12-9-12 9Z" fill="#aeb6b4" stroke={ink} strokeWidth="1.5"/><ObjectBox x={209} y={150} broken/><path d="M170 110l9 8m-2-17 9 10" stroke={red} strokeWidth="2"/></>
    case 'wild': return <><Dog x={140} y={148}/><path d="M213 143q-10-23-17 0m17 0q10-26 19-6" fill="none" stroke={sage} strokeWidth="2"/><path d="M65 117q10-8 20 0m-10-12q10-8 20 0" stroke={ink} strokeWidth="1.6" fill="none"/></>
    case 'captive': return <><Dog x={160} y={148}/><g stroke={ink} strokeWidth="3" opacity=".78"><path d="M82 50v109M111 50v109M140 50v55M180 50v55M209 50v109M238 50v109M82 50h156M82 159h156"/></g><path d="M104 155h112" stroke={red} strokeWidth="2" strokeDasharray="4 4"/></>
    case 'mirror': return <><Person x={112} y={146} pose="think"/><rect x="176" y="43" width="72" height="112" rx="30" stroke={ink} strokeWidth="3" fill="#dce9f2"/><Person x={212} y={146} scale={.74} pose="think" color="#496c8d"/><path d="M192 62l19-12m-20 28 35-23" stroke="#fff" strokeWidth="3" opacity=".9"/></>
    case 'path': return <><path d="M159 165Q173 134 121 110L79 74M159 165Q173 134 219 110L249 74" stroke="#faf4dc" strokeWidth="16" fill="none" strokeLinecap="round"/><Person x={158} y={147} pose="think" scale={.9}/><Arrow x1={130} y1={114} x2={91} y2={85} color={red}/><Arrow x1={185} y1={114} x2={239} y2={84} color={sage}/></>
    case 'barrier': return <><Person x={88} y={146} pose="think"/><path d="M181 95v55m-38-24h107m-92 0v25m77-25v25" stroke={ink} strokeWidth="4" fill="none"/><rect x="158" y="48" width="47" height="47" rx="5" fill="#fff" stroke={ink} strokeWidth="2"/><circle cx="181.5" cy="71.5" r="16" stroke={red} strokeWidth="3" fill="none"/><path d="M170 83l23-23" stroke={red} strokeWidth="3"/></>
    case 'art': return <><Person x={100} y={146} pose="reach"/><g stroke={ink} strokeWidth="2.1" strokeLinejoin="round"><path d="M175 149h82l-7-10h-68Z" fill="#b89758"/><path d="M193 138q-15-20 5-37t14-33q30 12 11 36t17 34Z" fill="#9db5b8"/><path d="M207 72q-3-24 15-26 13 14-7 24" fill="#d9ba78"/></g><path d="M124 101l51-22" stroke={ink} strokeWidth="2"/></>
    case 'single': return <><Person x={160} y={146} mood="sad"/><Cloud x={160} y={37} scale={.72}/><path d="M103 70Q82 59 63 75" stroke={sage} strokeWidth="2" strokeDasharray="4 4" fill="none"/></>
    case 'habit': return <><Person x={160} y={146} mood="angry" color={red}/><Cloud x={87} y={39} scale={.65}/><Cloud x={160} y={29} scale={.72}/><Cloud x={233} y={39} scale={.65}/><path d="M81 77h157" stroke={red} strokeWidth="2" strokeDasharray="4 4"/></>
    default: return null
  }
}
export default function EthicsIraScene({kind, title, description}) {
  const id=useId()
  return <svg className="eth03-scene-svg" viewBox="0 0 320 184" role="img" aria-labelledby={id+'-title '+id+'-desc'} xmlns="http://www.w3.org/2000/svg">
    <title id={id+'-title'}>{title}</title><desc id={id+'-desc'}>{description}</desc><Landscape kind={kind}/><SceneContent kind={kind}/>
  </svg>
}
