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
function Scale(){return <g stroke={blue} strokeWidth="3" fill="#f3dfae" strokeLinejoin="round"><path d="M200 53v107m-28 0h56M139 77h122M139 77l-24 49h48Zm122 0-24 49h48Z"/><circle cx="200" cy="53" r="6"/></g>}
function Basket({x,y,full=true}){return <g transform={`translate(${x} ${y})`} stroke={blue} strokeWidth="2" strokeLinejoin="round"><path d="M-22-8h44L16 17h-32Z" fill="#d5b67a"/><path d="M-13-8q0-23 26 0" fill="none"/>{full&&<><ellipse cx="-9" cy="-11" rx="8" ry="6" fill={gold}/><circle cx="6" cy="-12" r="7" fill="#7c9b81"/><path d="M6-19l4-7" stroke={green}/></>}</g>}
function Plant({x,y,s=1}){return <g transform={`translate(${x} ${y}) scale(${s})`} stroke={green} strokeWidth="2.5" fill="#8fb491" strokeLinecap="round"><path d="M0 0v-36" fill="none"/><path d="M0-12Q-24-12-20-28Q-2-29 0-12ZM0-23Q22-26 17-39Q2-39 0-23Z"/><circle cx="0" cy="-40" r="5" fill={gold} stroke="#a88642"/></g>}
function Plot({x,y}){return <g transform={`translate(${x} ${y})`}><path d="M-72-5h144l28 33H-100Z" fill="#c4ae89" stroke="#8a7655" strokeWidth="1.5"/>{[-52,-26,0,26,52].map((a,i)=><g key={a}><path d={`M${a} -5l${a*.18} 33`} stroke="#f4e4c1" strokeWidth="2"/><Plant x={a} y={i%2?12:2} s={.48}/></g>)}</g>}
function Book({x,y}){return <g transform={`translate(${x} ${y})`} stroke={blue} strokeWidth="1.8" fill="#fff9e9"><path d="M0-16Q-13-24-29-19v35Q-13 11 0 19Q13 11 29 16v-35Q13-24 0-16Z"/><path d="M0-16v35M-23-10l16 4m-16 3 16 4M7-6l16-4M7 1l16-4" fill="none"/></g>}
function EpicArt({kind}){
  switch(kind){
    case 'aid':return <><Person x={105} y={172}/><Person x={287} y={172} mood="sad"/><Basket x={200} y={143}/><Arrow x1={132} y1={121} x2={172} y2={136}/><Arrow x1={226} y1={136} x2={264} y2={121}/></>
    case 'table':return <><Person x={91} y={174} scale={.9}/><Person x={305} y={174} scale={.9}/><path d="M139 140h124v9H139Zm8 9v27m108-27v27" stroke={blue} strokeWidth="3" fill="#d6ba87"/><Basket x={200} y={120}/><Tree x={330} y={165} s={1.25}/></>
    case 'garden':return <><House x={82} y={145} s={.85}/><Plot x={215} y={168}/><Person x={131} y={171} scale={.82}/><Person x={309} y={168} scale={.85}/></>
    case 'cost':return <><Scale/><Basket x={139} y={107}/><Coin x={251} y={105}/><Coin x={270} y={98}/><Person x={65} y={171} scale={.8}/></>
    case 'bread':return <><Plot x={83} y={175}/><Person x={157} y={165}/><Basket x={218} y={143}/><Person x={294} y={174}/><Arrow x1={242} y1={123} x2={267} y2={123}/></>
    case 'houses':return <><House x={80} y={152} s={.85}/><House x={200} y={151} s={.92}/><House x={321} y={151} s={.85}/><Person x={148} y={178} scale={.75}/><Person x={251} y={178} scale={.75}/><path d="M173 165h44m-35 0v18m26-18v18" stroke={blue} strokeWidth="3"/></>
    case 'waterhome':return <><House x={85} y={147} s={.83}/><House x={314} y={147} s={.83}/><path d="M161 147h78v20h-78Z" fill="#8db9d4" stroke={blue} strokeWidth="2"/><path d="M200 147v-40h26" stroke={blue} strokeWidth="5" fill="none"/><Drop x={226} y={125} s={.7}/><Person x={136} y={178} scale={.75}/><Person x={267} y={178} scale={.75}/></>
    case 'exchange':return <><House x={79} y={137} s={.65}/><House x={319} y={137} s={.65}/><Plot x={200} y={169}/><Arrow x1={115} y1={109} x2={173} y2={109}/><Arrow x1={282} y1={109} x2={224} y2={109}/></>
    case 'study':return <><path d="M66 205Q110 155 213 145T311 96" stroke="#faf0d4" strokeWidth="15" fill="none"/><Temple x={309} y={133} s={.72}/><Person x={136} y={170}/><Book x={163} y={138}/></>
    case 'care':return <><Tree x={283} y={174} s={1.3}/><Person x={100} y={174}/><Plant x={175} y={176}/><Drop x={153} y={135} s={.55}/><Person x={253} y={174} scale={.78}/></>
    case 'school':return <><Temple x={200} y={122} s={.78}/><path d="M67 199Q86 157 185 129M336 199Q280 179 320 154T215 129" stroke="#faf0d4" strokeWidth="12" fill="none"/><Person x={100} y={175} scale={.8}/><Person x={304} y={172} scale={.8}/><Book x={129} y={146}/></>
    case 'seed':return <><ellipse cx="64" cy="148" rx="10" ry="6" fill={gold} stroke={blue}/><Arrow x1={85} y1={135} x2={117} y2={135}/><Plant x={146} y={159} s={.65}/><Arrow x1={169} y1={135} x2={211} y2={135}/><Plant x={247} y={171} s={1.35}/><Arrow x1={278} y1={135} x2={311} y2={135}/><Basket x={334} y={154}/></>
    case 'light':return <><Person x={124} y={174}/><Plant x={246} y={173} s={1.2}/><circle cx="206" cy="122" r="22" fill="#f6fbff" fillOpacity=".7" stroke={blue} strokeWidth="3"/><path d="M189 137l-23 22" stroke={blue} strokeWidth="6"/></>
    case 'growth':return <><Plant x={200} y={181} s={1.75}/><path d="M171 181q29 21 58 0m-29 0v20" fill="none" stroke="#8a7655" strokeWidth="2"/><Drop x={118} y={110}/><Arrow x1={137} y1={133} x2={174} y2={166}/><Person x={291} y={177} scale={.85}/></>
    case 'field':return <><path d="M43 159h123l15 31H24Z" fill="#c4ae89" stroke="#8a7655"/><Plot x={285} y={163}/><Person x={203} y={177} scale={.9}/><path d="M221 138l18 45m-10 0h23" stroke={blue} strokeWidth="3"/></>
    default:return null
  }
}
export default function EthicsEpicureanScene({kind,title,description}) {
  const id=useId()
  return <svg viewBox="0 0 400 210" className="ethepi-scene-svg" role="img" aria-labelledby={id+'-title '+id+'-desc'} xmlns="http://www.w3.org/2000/svg">
    <title id={id+'-title'}>{title}</title><desc id={id+'-desc'}>{description}</desc>
    <rect width="400" height="210" rx="8" fill="#edf3fa"/><circle cx="350" cy="34" r="20" fill="#e6c779"/>
    <path d="M0 113L64 46 121 104 199 23 271 106 325 49 400 114V210H0Z" fill="#c8dce8"/><path d="M0 137Q100 102 200 132T400 120V210H0Z" fill="#b9ccb9"/><path d="M0 161Q96 133 200 154T400 148V210H0Z" fill="#e2e6d5"/>
    <Tree x={25} y={170} s={.7}/><Tree x={375} y={172} s={.65}/><EpicArt kind={kind}/>
  </svg>
}
