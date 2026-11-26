// Ilustración vectorial editorial. Cada objeto es un dibujo, no una imagen externa.
function Drawing({ type }) {
  const person = <g><circle cx="60" cy="28" r="12" fill="var(--ph2d-paper2)"/><path d="M60 40v37m-23-22 23-9 23 9M60 77l-18 27m18-27 18 27" fill="none"/></g>
  switch(type) {
    case 'person': return <g>{person}<path d="M18 106h84"/></g>
    case 'people': return <g><g transform="translate(-19 9) scale(.8)">{person}</g><g transform="translate(43 9) scale(.8)">{person}</g><path d="M8 106h104"/></g>
    case 'world': return <g><circle cx="60" cy="61" r="42" fill="var(--ph2d-paper2)"/><path d="M23 44l15-12 19 7-4 11-15 7 8 13-13 14-10-18zm49-24 18 11 9 24-16 7-8 19-12-10 3-15-10-11 8-16z" fill="var(--ph2d-topic-moss)" stroke="none"/><ellipse cx="60" cy="61" rx="21" ry="42" fill="none" opacity=".35"/><path d="M19 61h82" opacity=".35"/></g>
    case 'drop': return <g><path d="M60 12C48 34 22 54 22 78a38 38 0 0 0 76 0c0-24-26-44-38-66z" fill="var(--ph2d-topic-blue)" fillOpacity=".18"/><path d="M60 64L40 82m20-18 20 18" strokeWidth="6"/><circle cx="60" cy="63" r="15" fill="var(--ph2d-topic-rust)"/><circle cx="40" cy="82" r="10" fill="var(--ph2d-paper)"/><circle cx="80" cy="82" r="10" fill="var(--ph2d-paper)"/></g>
    case 'bicycle': return <g fill="none"><circle cx="27" cy="82" r="24"/><circle cx="94" cy="82" r="24"/><path d="M27 82l24-39 20 39H27l34-28 33 28-15-48h16M43 43h19"/><circle cx="71" cy="82" r="4" fill="var(--ph2d-topic-gold)"/></g>
    case 'blocks': return <g><rect x="14" y="15" width="38" height="38" rx="5" fill="var(--ph2d-topic-blue)" fillOpacity=".23"/><circle cx="89" cy="34" r="19" fill="var(--ph2d-topic-rust)" fillOpacity=".23"/><path d="M30 64v12m60-12v12M30 76h60M60 76v11"/><rect x="35" y="87" width="50" height="24" rx="4" fill="var(--ph2d-paper2)"/></g>
    case 'stairs': return <g><path d="M12 106V84h24V62h24V40h24V18h24v88z" fill="var(--ph2d-paper2)"/><path d="M100 10L20 76m0-15v15h15" fill="none" stroke="var(--ph2d-topic-rust)"/></g>
    case 'triangle': return <g><path d="M12 99L60 18l48 81z" fill="var(--ph2d-topic-blue)" fillOpacity=".12"/><path d="M25 99q0-11 10-17m50 0q10 6 10 17M53 30q7 7 14 0" fill="none"/><path d="M10 109h100" strokeDasharray="4 4"/></g>
    case 'numbers': return <g><rect x="18" y="15" width="84" height="91" rx="5" fill="var(--ph2d-paper2)"/>{[0,1,2,3,4,5,6,7,8].map(i=><rect key={i} x={29+(i%3)*22} y={28+Math.floor(i/3)*23} width="16" height="15" rx="2" fill="var(--ph2d-topic-blue)" fillOpacity=".2"/>)}<path d="M36 98h48"/></g>
    case 'scales': return <g><path d="M60 18v83m-22 6h44M21 38h78M22 38L7 78h30L22 38m76 0L83 78h30L98 38" fill="none"/><path d="M7 78q15 23 30 0zm76 0q15 23 30 0z" fill="var(--ph2d-topic-gold)" fillOpacity=".24"/><circle cx="60" cy="38" r="5" fill="var(--ph2d-paper)"/></g>
    case 'crown': return <g><path d="M17 40l23 22 20-38 20 38 23-22-12 48H29z" fill="var(--ph2d-topic-gold)" fillOpacity=".3"/><path d="M29 78h62M37 99h46"/><circle cx="17" cy="39" r="4"/><circle cx="60" cy="23" r="4"/><circle cx="103" cy="39" r="4"/></g>
    case 'empty': return <g><path d="M30 30q30-20 60 0v39H30zM24 69h72v13H24zm9 13v24m54-24v24" fill="var(--ph2d-paper2)"/><circle cx="60" cy="45" r="33" stroke="var(--ph2d-topic-rust)" fill="none"/><path d="M37 22l46 46" stroke="var(--ph2d-topic-rust)"/></g>
    case 'checklist': return <g><rect x="24" y="13" width="73" height="99" rx="4" fill="var(--ph2d-paper2)"/>{[35,61,87].map(y=><g key={y}><rect x="32" y={y-7} width="13" height="13" fill="none"/><path d={`M50 ${y}h35`}/></g>)}<path d="M33 34l5 5 9-13" stroke="var(--ph2d-topic-rust)"/></g>
    case 'rain': return <g><path d="M21 53a17 17 0 0 1 6-33 23 23 0 0 1 43 1 18 18 0 0 1 15 32z" fill="var(--ph2d-paper2)"/><path d="M27 66l-5 12m24-12-5 12m24-12-5 12m24-12-5 12" stroke="var(--ph2d-topic-blue)"/><path d="M24 97q36-38 72 0H24m36 0v17" fill="var(--ph2d-topic-gold)" fillOpacity=".2"/></g>
    case 'speech': return <g><g transform="translate(-15 20) scale(.8)">{person}</g><path d="M55 13h57v42H81L68 68V55H55z" fill="var(--ph2d-paper2)"/><path d="M65 26h36M65 36h29M65 46h22"/></g>
    case 'lab': return <g><path d="M43 14h34M48 14v37L17 101q-4 9 9 9h68q13 0 9-9L72 51V14" fill="var(--ph2d-paper2)"/><path d="M31 82h58l15 22q0 6-9 6H25q-9 0-9-6z" fill="var(--ph2d-topic-blue)" fillOpacity=".3"/><circle cx="55" cy="92" r="4"/><circle cx="69" cy="75" r="4"/></g>
    case 'tools': return <g><path d="M20 21h80v21H20z" fill="var(--ph2d-topic-gold)" fillOpacity=".3"/><path d="M29 21v9m14-9v6m14-6v9m14-9v6m14-6v9M29 101l56-54 13 13-56 54z" fill="var(--ph2d-paper2)"/><path d="M29 101l-8 15 21-2"/></g>
    case 'game': return <g><rect x="14" y="17" width="92" height="92" rx="3" fill="var(--ph2d-paper2)"/>{[0,1,2,3,4,5,6,7,8].map(i=><rect key={i} x={19+i%3*28} y={22+Math.floor(i/3)*28} width="26" height="26" fill={i%2?'var(--ph2d-paper)':'var(--ph2d-topic-gold)'} fillOpacity=".4" stroke="none"/>)}<circle cx="32" cy="35" r="10" fill="var(--ph2d-topic-rust)"/><circle cx="88" cy="91" r="10" fill="var(--ph2d-topic-blue)"/></g>
    case 'network': return <g><path d="M22 26L60 17l37 12-5 57-32 20-36-21zM22 26l38 35 37-32M24 85l36-24 32 25M60 17v89M22 26l70 60M97 29L24 85" fill="none"/>{[[22,26],[60,17],[97,29],[92,86],[60,106],[24,85],[60,61]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="8" fill={i===6?'var(--ph2d-topic-rust)':'var(--ph2d-paper2)'}/>)}</g>
    case 'machine': return <g><rect x="22" y="25" width="76" height="61" rx="7" fill="var(--ph2d-paper2)"/><path d="M60 25V11m-21 75v19m42-19v19M22 48H9v26h13m76-26h13v26H98"/><circle cx="43" cy="49" r="6" fill="var(--ph2d-topic-blue)"/><circle cx="77" cy="49" r="6" fill="var(--ph2d-topic-blue)"/><path d="M42 69h36"/></g>
    case 'veil': return <g>{person}<rect x="16" y="12" width="88" height="83" rx="4" fill="var(--ph2d-topic-blue)" fillOpacity=".28" strokeDasharray="5 4"/><path d="M50 50q0-15 11-15t11 11q0 7-12 12v9" strokeWidth="4" fill="none"/><circle cx="60" cy="78" r="2" fill="currentColor"/></g>
    case 'pen': return <g><rect x="17" y="17" width="77" height="91" rx="3" fill="var(--ph2d-paper2)"/><path d="M27 33h55M27 47h55M27 61h37M27 75h29"/><path d="M55 94l42-52 12 10-42 52-18 6z" fill="var(--ph2d-topic-gold)" fillOpacity=".4"/></g>
    case 'map': return <g><path d="M12 24l32-10 32 12 32-10v83L76 109 44 97 12 108z" fill="var(--ph2d-paper2)"/><path d="M44 14v83m32-71v83" opacity=".5"/><path d="M26 80l23-43 26 31 19-30" stroke="var(--ph2d-topic-rust)" strokeDasharray="5 4" fill="none"/><circle cx="26" cy="80" r="5" fill="var(--ph2d-topic-gold)"/><circle cx="94" cy="38" r="5" fill="var(--ph2d-topic-rust)"/></g>
    case 'book': return <g><path d="M10 24q25-10 50 6 25-16 50-6v73q-25-10-50 6-25-16-50-6z" fill="var(--ph2d-paper2)"/><path d="M60 30v73M20 40l30 5m-30 9 30 5m-30 9 30 5m20-28 30-5m-30 19 30-5m-30 19 30-5"/></g>
    default: return null
  }
}

export default function GlockStudyScene({ scene }) {
  if (!scene) return null
  return <figure className="glock-study-scene" aria-label="Ilustración pedagógica">
    <div className="glock-study-scene-panels">{scene.icons.map((type,index)=><div key={index} className="glock-study-scene-panel">
      <svg viewBox="0 0 120 120" aria-hidden="true" fill="none" stroke="var(--ph2d-ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><Drawing type={type}/></svg>
      <strong>{scene.labels[index]}</strong>
    </div>)}</div>
    <figcaption>{scene.analogy}</figcaption>
  </figure>
}
