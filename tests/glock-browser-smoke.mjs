import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const url='http://127.0.0.1:4182/philosophia/#/semestre/5/filosofia-analitica/lectura/glock-capitulo-2'
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find((bin)=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible')
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4182','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-glock-'))
let browser,ws
const pending=new Map()
let seq=0
const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms))

function send(method,params={}){
  const id=++seq
  return new Promise((resolve,reject)=>{
    pending.set(id,{resolve,reject})
    ws.send(JSON.stringify({id,method,params}))
  })
}
async function evalJS(expression){
  const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
  if(r.exceptionDetails) throw new Error(r.exceptionDetails.text)
  return r.result?.result?.value
}
async function until(fn,label,tries=160){
  for(let i=0;i<tries;i++){try{if(await fn())return}catch{}await sleep(150)}
  throw new Error('Timeout: '+label)
}

const metrics=`(()=>{
  const visible=[...document.querySelectorAll('.glock-flow-canvas .react-flow__node')]
    .filter(el=>{const r=el.getBoundingClientRect();const cs=getComputedStyle(el);return cs.display!=='none'&&cs.visibility!=='hidden'&&r.width>1&&r.height>1})
    .map(el=>({id:el.getAttribute('data-id'),r:el.getBoundingClientRect(),opacity:Number(getComputedStyle(el).opacity)}))
  const hits=[]
  for(let i=0;i<visible.length;i++)for(let j=i+1;j<visible.length;j++){
    const a=visible[i],b=visible[j]
    const x=Math.min(a.r.right,b.r.right)-Math.max(a.r.left,b.r.left)
    const y=Math.min(a.r.bottom,b.r.bottom)-Math.max(a.r.top,b.r.top)
    if(x>2&&y>2)hits.push(a.id+' ~ '+b.id)
  }
  const selected=document.querySelector('.glock-flow-canvas .react-flow__node.selected')
  const schema=document.querySelector('.glock-schema .animated-concept-schema__svg')
  return {
    count:visible.length,hits,selected:selected?.getAttribute('data-id')||null,
    selectedOpacity:selected?Number(getComputedStyle(selected).opacity):0,
    width:innerWidth,scroll:document.documentElement.scrollWidth,
    schemaHeight:schema?.getBoundingClientRect().height||0,
    workspaceCols:getComputedStyle(document.querySelector('.glock-study-workspace')).gridTemplateColumns
  }
})()`

async function navigate(width,height){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<=768})
  await send('Page.navigate',{url:'about:blank'})
  await until(()=>evalJS("location.href==='about:blank'"),'reset')
  await send('Page.navigate',{url})
  await until(()=>evalJS("document.querySelector('.glock-study-hero h1')?.textContent.includes('Breve panorama')"),'Glock cargado')
  await until(async()=>((await evalJS(metrics))?.count||0)>3,'React Flow')

  let state=await evalJS(metrics)
  assert.deepEqual(state.hits,[],'Nodos superpuestos '+width+'×'+height+' '+state.hits.join(','))
  assert.equal(state.selected,'G00')
  assert.ok(state.selectedOpacity>.9)
  assert.ok(state.scroll<=state.width+3,'overflow global '+JSON.stringify(state))
  assert.ok(state.schemaHeight>500,'esquema general comprimido')

  const documentary=await evalJS(`(()=>{
    const selected=document.querySelector('.glock-flow-canvas .react-flow__node.selected')
    const source=selected?.querySelector('.glock-node-source-card blockquote')
    return {
      chars:source?.textContent.trim().length||0,
      mini:selected?.querySelectorAll('.glock-node-mini-schema b').length||0,
      sourceInspector:document.querySelector('.glock-source-details blockquote')?.textContent.trim().length||0,
      schemaInspector:document.querySelector('.glock-inspector-schema .animated-concept-schema__svg')?.getBoundingClientRect().height||0,
      classLayer:document.querySelector('.glock-class-note')?.textContent.includes('19 OCT 2026')||false
    }
  })()`)
  assert.ok(documentary.chars>180,JSON.stringify(documentary))
  assert.ok(documentary.mini>=3,JSON.stringify(documentary))
  assert.ok(documentary.sourceInspector>180,JSON.stringify(documentary))
  assert.ok(documentary.schemaInspector>300,JSON.stringify(documentary))
  assert.ok(documentary.classLayer,JSON.stringify(documentary))

  await evalJS(`(()=>{
    [...document.querySelectorAll('.glock-study-routes button')]
      .find(b=>b.textContent.includes('06 · Filosofía trascendental')).click()
    return true
  })()`)
  await until(()=>evalJS("document.querySelector('.glock-topic-guide-rail')!==null"),'riel temático')
  await evalJS("(()=>{document.querySelector('.glock-topic-guide-rail button').click();return true})()")
  await until(()=>evalJS("document.querySelector('.glock-flow-canvas .react-flow__node.selected')!==null"),'selección por riel')
  state=await evalJS(metrics)
  assert.ok(state.selectedOpacity>.9)
  assert.deepEqual(state.hits,[])

  await evalJS("(()=>{document.querySelector('.glock-topic-guide-start').click();return true})()")
  await until(()=>evalJS("document.querySelector('.glock-guided-panel')!==null"),'guía temática')
  const guide=await evalJS(`(()=>({
    selected:document.querySelector('.glock-flow-canvas .react-flow__node.selected')?.getAttribute('data-id'),
    guided:document.querySelector('.glock-flow-node.is-guided-current')?.closest('.react-flow__node')?.getAttribute('data-id'),
    dimmedSelected:document.querySelector('.glock-flow-canvas .react-flow__node.selected .glock-flow-node.is-dimmed')!==null
  }))()`)
  assert.equal(guide.selected,guide.guided,JSON.stringify(guide))
  assert.equal(guide.dimmedSelected,false,JSON.stringify(guide))

  // Nueva entrega: la ruta de Frege se muestra por separado y sin capa docente inventada.
  await evalJS(`(()=>{
    [...document.querySelectorAll('.glock-study-routes button')]
      .find(b=>b.textContent.includes('11 · Frege y lógica formal')).click()
    return true
  })()`)
  await until(()=>evalJS("document.querySelector('.glock-topic-guide-rail')?.textContent.includes('G28')"),'riel Frege')
  await evalJS("(()=>{document.querySelector('.glock-topic-guide-rail button').click();return true})()")
  await until(()=>evalJS("document.querySelector('.glock-flow-canvas .react-flow__node.selected')?.getAttribute('data-id')==='G28'"),'nodo G28')
  const frege=await evalJS(`(()=>({
    selected:document.querySelector('.glock-flow-canvas .react-flow__node.selected')?.getAttribute('data-id'),
    source:document.querySelector('.glock-source-details blockquote')?.textContent.length||0,
    classLayer:document.querySelector('.glock-class-note')!==null,
    width:innerWidth,
    scroll:document.documentElement.scrollWidth,
  }))()`)
  assert.equal(frege.selected,'G28')
  assert.ok(frege.source>180,JSON.stringify(frege))
  assert.equal(frege.classLayer,false,JSON.stringify(frege))
  assert.ok(frege.scroll<=frege.width+3,JSON.stringify(frege))
  state=await evalJS(metrics)
  assert.deepEqual(state.hits,[],'Frege nodos superpuestos '+width+'×'+height)

  if(width<=1180) assert.ok(!state.workspaceCols.includes('410px'),'iPad conserva inspector lateral '+state.workspaceCols)
  console.log('OK Glock Hacker-style',width,height,state,documentary,guide)
}

try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4182/philosophia/')).ok}catch{return false}},'vite')
  browser=spawn(chrome,['--headless=new','--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'})
  const portFile=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(portFile),'cdp',220)
  const port=Number(readFileSync(portFile,'utf8').split('\n')[0])
  const tabs=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  ws=new WebSocket(tabs.find((t)=>t.type==='page').webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true})})
  ws.addEventListener('message',(evt)=>{
    const obj=JSON.parse(evt.data)
    if(obj.id&&pending.has(obj.id)){
      const p=pending.get(obj.id);pending.delete(obj.id)
      obj.error?p.reject(new Error(obj.error.message)):p.resolve(obj)
    }
  })
  await send('Page.enable');await send('Runtime.enable')
  for(const size of [[1440,900],[768,1024],[1024,768],[390,844]]) await navigate(...size)
} finally {
  ws?.close();browser?.kill('SIGTERM');server.kill('SIGTERM');await sleep(250)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:150})}catch{}
}
