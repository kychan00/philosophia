import { useId } from 'react'

const blue='#1a365d', gold='#c5a56a', green='#708d77', red='#a34b42'
function Person({x,y,scale=1,mood='calm',color=blue}) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={color} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cy="1" rx="20" ry="4" fill={blue} opacity=".12" stroke="none"/>
    <circle cy="-65" r="13" fill="#fbf1d7"/><path d="M0-52v26m0 0-13 26m13-26 13 26M0-42l-18 14m18-14 18 14"/>
    <path d={mood==='sad'?'M-7-68h2m10 0h2M-5-59q5-5 10 0':mood==='angry'?'M-8-70l5 3m6 0 5-3M-5-59q5-5 10 0':'M-7-68h2m10 0h2M-5-60q5 5 10 0'} strokeWidth="1.8"/>
  </g>
}
function Tree({x,y,s=1}) {return <g transform={`translate(${x} ${y}) scale(${s})`} stroke={blue} strokeWidth="1.6"><path d="M0 0v-39" strokeWidth="3"/><path d="M-24-24Q-40-42-21-52Q-20-72 1-62Q21-72 28-52Q45-38 24-24Q4-10-24-24Z" fill="#a1b9a4"/><path d="M0-53v31m0-10-11-10" fill="none" opacity=".5"/></g>}
function House({x,y,s=1}) {return <g transform={`translate(${x} ${y}) scale(${s})`} stroke={blue} strokeWidth="2" strokeLinejoin="round"><path d="M-34 0v-41h68V0Z" fill="#f5e6c5"/><path d="M-42-41L0-72 42-41Z" fill="#7899b2"/><path d="M-9 0v-25H9V0M-25-31h12v14h-12Zm38 0h12v14H13Z" fill="#fffaf0"/></g>}
function Coin({x,y}){return <g stroke="#8b6a34" strokeWidth="1.7"><ellipse cx={x} cy={y} rx="10" ry="6" fill="#ead094"/><path d={`M${x-10} ${y}v5q10 9 20 0v-5`} fill="#d4ae63"/></g>}
function Drop({x,y,s=1}){return <path transform={`translate(${x} ${y}) scale(${s})`} d="M0-14Q-15 4-11 11Q0 22 11 11Q15 4 0-14Z" fill="#8db9d4" stroke={blue} strokeWidth="1.5"/>}
function Arrow({x1,y1,x2,y2,color=blue}){const a=Math.atan2(y2-y1,x2-x1)*180/Math.PI;return <g stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"><path d={`M${x1} ${y1}L${x2} ${y2}`} strokeDasharray="5 4"/><path d="M-10-5L0 0-10 5" transform={`translate(${x2} ${y2}) rotate(${a})`}/></g>}
function Temple({x,y,s=1}){return <g transform={`translate(${x} ${y}) scale(${s})`} stroke={blue} strokeWidth="2" fill="#f4e6c9" strokeLinejoin="round"><path d="M-67-68L0-108 67-68ZM-62-64h124v7H-62ZM-65-8H65v8H-65Z"/>{[-48,-16,16,48].map(a=><rect key={a} x={a-7} y="-57" width="14" height="49"/>)}</g>}
function Speech({x,y,bad=false}){return <g transform={`translate(${x} ${y})`} stroke={bad?red:blue} strokeWidth="2" fill="#fff"><path d="M-33-20h66v29H6l-11 10v-10h-28Z"/><path d={bad?'M-20-10l10 10m0-10L-20 0M4-10h16M4-3h12':'M-20-10h40M-20-3h29'} fill="none"/></g>}
function Scale(){return <g stroke={blue} strokeWidth="3" fill="#f3dfae" strokeLinejoin="round"><path d="M200 53v107m-28 0h56M139 77h122M139 77l-24 49h48Zm122 0-24 49h48Z"/><circle cx="200" cy="53" r="6"/></g>}
function Art({kind}){
  switch(kind){
    case 'wealth':return <><House x={91} y={158} s={1.05}/><Person x={153} y={171} scale={.8}/>{[0,1,2,3,4].map(i=><Coin key={i} x={116+i*12} y={177-i*3}/>)}<Person x={253} y={170} mood="sad"/><Person x={298} y={171} scale={.8}/><Coin x={265} y={179}/><path d="M200 60v114" stroke={blue} strokeDasharray="4 5" opacity=".5"/></>
    case 'shops':return <><House x={92} y={154}/><Person x={143} y={170} scale={.85}/><Temple x={290} y={155} s={.84}/><Person x={235} y={175} scale={.8}/><Arrow x1={177} y1={123} x2={224} y2={123}/><Coin x={286} y={173}/><Coin x={306} y={169}/></>
    case 'water':return <><House x={85} y={150} s={.85}/><House x={306} y={150} s={.85}/><Person x={133} y={174} scale={.8} mood="sad"/><path d="M166 164h35l-6 25h-23Z" stroke={blue} fill="#f4e7cc" strokeWidth="2"/><Drop x={183} y={145} s={.65}/><path d="M240 91h43v12h-29v17" stroke={blue} fill="none" strokeWidth="6"/>{[0,1,2].map(i=><Drop key={i} x={253} y={134+i*17} s={.52}/>)}<path d="M222 168h60l-7 21h-46Z" stroke={blue} fill="#8db9d4" strokeWidth="2"/></>
    case 'messages':return <><Person x={194} y={179}/><Speech x={91} y={78} bad/><Speech x={300} y={78}/><Arrow x1={120} y1={99} x2={164} y2={118} color={red}/><Arrow x1={270} y1={99} x2={224} y2={118}/><circle cx="235" cy="148" r="18" fill="#f6fbff" stroke={blue} strokeWidth="3"/><path d="M249 161l16 17" stroke={blue} strokeWidth="6"/></>
    case 'hill':return <><path d="M43 190Q108 125 192 145T298 52M159 190Q176 166 242 134T298 52" stroke="#faf2d5" strokeWidth="14" fill="none" strokeLinecap="round"/><Person x={99} y={167} scale={.8}/><Person x={240} y={143} scale={.8}/><path d="M298 52v-32l27 10-27 10" stroke={blue} fill={gold} strokeWidth="2"/></>
    case 'virtue':return <><House x={84} y={153} s={.9}/><Coin x={102} y={171}/><Person x={250} y={172}/><circle cx="250" cy="133" r="53" stroke={blue} strokeWidth="2.5" strokeDasharray="5 5" fill="#f4f8ff" fillOpacity=".25"/><path d="M250 85l13 8-13 8-13-8Z" fill={gold} stroke={blue} strokeWidth="1.5"/><Arrow x1={150} y1={136} x2={183} y2={136}/></>
    case 'loss':return <><House x={101} y={158}/><path d="M69 91l17 19-13 15 16 33" stroke={red} strokeWidth="3" fill="none"/><Person x={281} y={176} mood="sad"/><path d="M262 139l19-13 19 13-19 13Z" stroke={blue} fill={gold}/><path d="M151 146h46l-8 28h-32Z" stroke={blue} fill="#dac39a" strokeWidth="2"/><Arrow x1={185} y1={110} x2={219} y2={110}/></>
    case 'support':return <><Person x={91} y={175} scale={.82}/><Person x={140} y={174} mood="sad"/><Person x={188} y={175} scale={.82}/><path d="M91 111q49-40 97 0" stroke={green} strokeWidth="3" fill="none"/><Person x={302} y={175} mood="sad"/><path d="M246 68v108" stroke={blue} strokeDasharray="4 6" opacity=".5"/></>
    case 'epicure':return <><Person x={92} y={173}/><Person x={307} y={173} mood="sad"/>{[140,252].map(x=><g key={x} stroke={blue} strokeWidth="3"><path d={`M${x-36} 133h72m-65 0v42m58-42v42`} /><ellipse cx={x} cy="127" rx="20" ry="6" fill="#f5e7cb"/></g>)}<ellipse cx="140" cy="118" rx="13" ry="9" fill={gold} stroke={blue} strokeWidth="1.5"/></>
    case 'balance':return <><Person x={83} y={174} mood="sad" scale={.9}/><Scale/><Person x={316} y={174} scale={.9}/></>
    case 'court':return <><Temple x={251} y={155}/><Person x={87} y={178}/><Person x={139} y={178} scale={.88}/><rect x="105" y="114" width="26" height="33" rx="2" fill="#fff" stroke={blue} strokeWidth="1.8"/><path d="M110 122h15m-15 6h15m-15 6h10" stroke={blue} strokeWidth="1.6"/><Arrow x1={165} y1={128} x2={187} y2={128}/></>
    case 'feeling':return <><Person x={199} y={176} mood="sad"/><path d="M139 102Q199 22 259 102Q244 88 229 102Q214 88 199 102Q184 88 169 102Q154 88 139 102Z" stroke={blue} fill="#829eb8" strokeWidth="2.5"/><path d="M199 102v47q0 12 12 9" fill="none" stroke={blue} strokeWidth="3"/>{[96,120,276,299].map((x,i)=><g key={x}><path d={`M${x} ${46+i%2*15}l-9 21m12 12-9 21`} stroke="#739bbc" strokeWidth="2.5"/></g>)}</>
    case 'power':return <><Temple x={106} y={158} s={.9}/><Person x={288} y={174}/><g stroke={blue} strokeWidth="3" fill="none"><path d="M183 76v98m14-98v98m14-98v98m-36-98h47m-47 98h47M222 76l35-11v100l-35 9Z"/><path d="M239 70v100"/></g></>
    case 'paths':return <><path d="M200 205Q200 158 121 109L74 71M200 205Q200 158 279 109L326 71" stroke="#faf0d4" strokeWidth="18" strokeLinecap="round" fill="none"/><Person x={200} y={181}/><Speech x={75} y={50} bad/><Speech x={325} y={50}/><Arrow x1={164} y1={132} x2={109} y2={89} color={red}/><Arrow x1={236} y1={132} x2={291} y2={89} color={green}/></>
    default:return null
  }
}
export default function EthicsFirmnessScene({kind,title,description}) {
  const id=useId()
  return <svg viewBox="0 0 400 210" className="ethnov-scene-svg" role="img" aria-labelledby={id+'-title '+id+'-desc'} xmlns="http://www.w3.org/2000/svg">
    <title id={id+'-title'}>{title}</title><desc id={id+'-desc'}>{description}</desc>
    <rect width="400" height="210" rx="8" fill="#edf3fa"/><circle cx="350" cy="34" r="20" fill="#e6c779"/>
    <path d="M0 113L64 46 121 104 199 23 271 106 325 49 400 114V210H0Z" fill="#c8dce8"/><path d="M0 137Q100 102 200 132T400 120V210H0Z" fill="#b9ccb9"/><path d="M0 161Q96 133 200 154T400 148V210H0Z" fill="#e2e6d5"/>
    <Tree x={25} y={170} s={.7}/><Tree x={375} y={172} s={.65}/><Art kind={kind}/>
  </svg>
}
