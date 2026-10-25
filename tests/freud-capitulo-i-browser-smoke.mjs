// Cobertura técnica del sistema Freud capítulo I 2D; no sustituye cotejo académico ni Safari físico.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const url='http://127.0.0.1:4189/philosophia/#/semestre/5/teoria-critica/lectura/freud-malestar-capitulo-1'
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible')
const preview=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4189','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-freud-'))
let browser,ws
const pending=new Map()
let seq=0
const sleep=(ms)=>new Promise(resolve=>setTimeout(resolve,ms))

function send(method,params={}){
  const id=++seq
  return new Promise((resolve,reject)=>{
    pending.set(id,{resolve,reject})
    ws.send(JSON.stringify({id,method,params}))
  })
}
async function evalJS(expression){
  const res=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
  if(res.exceptionDetails)throw new Error(res.exceptionDetails.text)
  return res.result?.result?.value
}
async function until(fn,label,tries=210){
  for(let i=0;i<tries;i++){
    try{if(await fn())return}catch{}
    await sleep(150)
  }
  throw new Error('Timeout: '+label)
}
async function click(expression){
  return evalJS("(()=>{const el="+expression+";if(!el)return false;el.click();return true})()")
}
const metrics=`(()=>{
  const visible=[...document.querySelectorAll('.freud-canvas .react-flow__node')]
    .filter(el=>{const r=el.getBoundingClientRect();const cs=getComputedStyle(el);return cs.display!=='none'&&cs.visibility!=='hidden'&&r.width>1&&r.height>1})
    .map(el=>({id:el.getAttribute('data-id'),r:el.getBoundingClientRect()}))
  const hits=[]
  for(let i=0;i<visible.length;i++)for(let j=i+1;j<visible.length;j++){
    const a=visible[i],b=visible[j]
    const x=Math.min(a.r.right,b.r.right)-Math.max(a.r.left,b.r.left)
    const y=Math.min(a.r.bottom,b.r.bottom)-Math.max(a.r.top,b.r.top)
    if(x>2&&y>2)hits.push(a.id+' ~ '+b.id)
  }
  const selected=document.querySelector('.freud-canvas .react-flow__node.selected')
  return {
    viewport:innerWidth,
    pageWidth:document.documentElement.scrollWidth,
    routes:document.querySelectorAll('.freud-route-buttons button').length,
    chapterCards:document.querySelectorAll('.freud-chapter-card').length,
    activeChapter:document.querySelector('.freud-chapter-card.is-active')?.textContent.trim()||'',
    futureChapter:document.querySelector('.freud-chapter-card.is-future')?.textContent.trim()||'',
    activeRoute:document.querySelector('.freud-route-buttons button.active')?.textContent.trim()||'',
    visibleNodes:visible.length,
    hits,
    selected:selected?.getAttribute('data-id')||null,
    quote:document.querySelector('.freud-inspector .freud-original blockquote')?.textContent.trim()||'',
    explanation:[...document.querySelectorAll('.freud-inspector section')].find(s=>s.textContent.includes('EXPLICACIÓN ACADÉMICA'))?.querySelector('p')?.textContent.trim()||'',
    simple:document.querySelector('.freud-inspector .freud-simple p')?.textContent.trim()||'',
    folio:!!document.querySelector('.freud-folio-modal[role=dialog][aria-modal=true]'),
  }
})()`

async function viewport(width,height){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<=768})
  await send('Page.navigate',{url:'about:blank'})
  await until(()=>evalJS("location.href==='about:blank'"),'reset')
  await send('Page.navigate',{url})
  await until(()=>evalJS("document.querySelector('.freud-hero h1')?.textContent.includes('El malestar')"),'ruta Freud')
  await until(async()=>((await evalJS(metrics))?.visibleNodes||0)>0,'nodos Freud')
  let state=await evalJS(metrics)
  assert.equal(state.routes,5,JSON.stringify(state))
  assert.equal(state.chapterCards,2,JSON.stringify(state))
  assert.ok(state.activeChapter.includes('CAPÍTULO I'),JSON.stringify(state))
  assert.ok(state.futureChapter.includes('Próximos capítulos'),JSON.stringify(state))
  assert.ok(!state.activeRoute.includes('Capítulo I completo'),'El atlas completo no debe abrir por defecto: '+JSON.stringify(state))
  assert.ok(state.visibleNodes<=20,'Demasiados nodos montados en apertura: '+JSON.stringify(state))
  assert.ok(state.pageWidth<=width+3,'Overflow inicial: '+JSON.stringify(state))
  assert.deepEqual(state.hits,[],'Nodos superpuestos '+width+'x'+height+': '+state.hits.join(','))

  if(width<=850){
    assert.equal(await click("[...document.querySelectorAll('.freud-route-buttons button')].find(b=>b.textContent.includes('Capítulo I completo'))"),true)
    await until(()=>evalJS("document.querySelector('.freud-route-buttons button.active')?.textContent.includes('Capítulo I completo')"),'mapa completo compacto')
    await sleep(350)
    const complete=await evalJS(metrics)
    assert.ok(complete.visibleNodes<62,'El mapa completo compacto montó los 62 nodos a la vez: '+JSON.stringify(complete))
  }

  assert.equal(await click("[...document.querySelectorAll('.freud-route-buttons button')].find(b=>b.textContent.includes('Retorno a la religiosidad'))"),true)
  await until(()=>evalJS("document.querySelector('.freud-route-buttons button.active')?.textContent.includes('Retorno a la religiosidad')"),'ruta religión')
  await until(()=>evalJS("document.querySelector('.freud-inspector-head')?.textContent.includes('F48')"),'selección F48')
  state=await evalJS(metrics)
  assert.equal(state.selected,'F48',JSON.stringify(state))
  assert.ok(state.quote.length>25,'Cita original ausente '+JSON.stringify(state))
  assert.ok(state.explanation.length>50,'Explicación ausente '+JSON.stringify(state))
  assert.ok(state.simple.length>25,'Capa simple ausente '+JSON.stringify(state))
  assert.deepEqual(state.hits,[],'Solapes ruta religión '+width+'x'+height+': '+state.hits.join(','))

  assert.equal(await click("document.querySelector('.freud-canvas .react-flow__node.selected .freud-open-folio')"),true)
  await until(()=>evalJS("!!document.querySelector('.freud-folio-modal[role=dialog][aria-modal=true]')"),'folio flotante')
  const folio=await evalJS(`(()=>({
    quote:document.querySelector('.freud-folio-quote')?.textContent.trim()||'',
    hasAcademic:document.querySelector('.freud-folio-body')?.textContent.includes('Explicación académica · PHILOSOPHIA')||false,
    hasSimple:document.querySelector('.freud-folio-body')?.textContent.includes('En palabras simples')||false,
    reference:document.querySelector('.freud-folio-body')?.textContent.includes('Referencia bibliográfica · APA 7')||false,
    modalWidth:document.querySelector('.freud-folio-modal')?.getBoundingClientRect().width||0,
  }))()`)
  assert.ok(folio.quote.length>25,JSON.stringify(folio))
  assert.equal(folio.hasAcademic,true,JSON.stringify(folio))
  assert.equal(folio.hasSimple,true,JSON.stringify(folio))
  assert.equal(folio.reference,true,JSON.stringify(folio))
  assert.ok(folio.modalWidth<=width+2,JSON.stringify(folio))
  assert.equal(await click("document.querySelector('.freud-folio-modal header button')"),true)
  await until(()=>evalJS("!document.querySelector('.freud-folio-modal')"),'cerrar folio')
  state=await evalJS(metrics)
  assert.equal(state.folio,false)
  assert.ok(state.pageWidth<=width+3,'Overflow final: '+JSON.stringify(state))
  console.log('OK Freud capítulo I '+width+'x'+height,JSON.stringify(state))
}

try{
  await until(async()=>{try{return(await fetch('http://127.0.0.1:4189/philosophia/')).ok}catch{return false}},'Vite')
  browser=spawn(chrome,['--headless=new','--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'})
  const portFile=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(portFile),'CDP',220)
  const port=Number(readFileSync(portFile,'utf8').split('\n')[0])
  const tabs=await(await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{
    ws.addEventListener('open',resolve,{once:true})
    ws.addEventListener('error',reject,{once:true})
  })
  ws.addEventListener('message',evt=>{
    const obj=JSON.parse(evt.data)
    if(obj.id&&pending.has(obj.id)){
      const p=pending.get(obj.id)
      pending.delete(obj.id)
      obj.error?p.reject(new Error(obj.error.message)):p.resolve(obj)
    }
  })
  await send('Page.enable')
  await send('Runtime.enable')
  for(const size of [[1440,900],[1024,768],[768,1024],[390,844]])await viewport(...size)
}finally{
  ws?.close()
  browser?.kill('SIGTERM')
  preview.kill('SIGTERM')
  await sleep(250)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:150})}catch{}
}
