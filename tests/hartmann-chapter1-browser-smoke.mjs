// Cobertura técnica de la interfaz Hartmann 2D; no revisa contenido académico.
// Chromium en escritorio, tableta y teléfono no sustituye Safari físico.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const url='http://127.0.0.1:4188/philosophia/#/tareas/ontologia-ii/hartmann-cosa-en-si/sistema'
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible')
const preview=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4188','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-hartmann-'))
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
function browserMetrics(){
  return {
    viewport:innerWidth,
    pageWidth:document.documentElement.scrollWidth,
    routes:document.querySelectorAll('.hartmann2d-route-buttons button').length,
    nodes:[...document.querySelectorAll('.hartmann2d-flow .react-flow__node')].filter(el=>{
      const r=el.getBoundingClientRect()
      return r.width>0&&r.height>0
    }).length,
    selected:document.querySelector('.hartmann2d-inspector-meta b')?.textContent?.trim()||'',
    guided:!!document.querySelector('.hartmann2d-guide-panel'),
    folio:!!document.querySelector('.hartmann2d-folio[role=dialog]'),
  }
}
const metrics=()=>evalJS('('+browserMetrics.toString()+')()')

async function viewport(width,height){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<=768})
  await send('Page.navigate',{url:'about:blank'})
  await until(()=>evalJS("location.href==='about:blank'"),'reset')
  await send('Page.navigate',{url})
  await until(()=>evalJS("document.querySelector('.hartmann2d-hero h1')?.textContent.includes('Kantianos')"),'ruta Hartmann')
  await until(async()=>(await metrics())?.nodes>0,'nodos React Flow')
  let state=await metrics()
  assert.ok(state.routes>=7,JSON.stringify(state))
  assert.ok(state.pageWidth<=width+3,'Overflow inicial: '+JSON.stringify(state))

  assert.equal(await click("[...document.querySelectorAll('.hartmann2d-route-buttons button')].find(b=>b.textContent.trim()==='Reinhold')"),true)
  await until(()=>evalJS("document.querySelector('.hartmann2d-route-buttons button.is-active')?.textContent.trim()==='Reinhold'"),'seleccionar ruta')
  assert.equal(await click("document.querySelector('.hartmann2d-route-footer button:last-child')"),true)
  await until(()=>evalJS("!!document.querySelector('.hartmann2d-inspector-meta b')"),'abrir inspector')
  state=await metrics()
  assert.match(state.selected,/(?:H|R)\d{2}/,JSON.stringify(state))
  const detail=await evalJS("(()=>({title:document.querySelector('.hartmann2d-inspector > h2')?.textContent.trim()||'',excerpt:document.querySelector('.hartmann2d-inspector blockquote')?.textContent.trim()||''}))()")
  assert.ok(detail.title.length>2&&detail.excerpt.length>20,JSON.stringify(detail))

  assert.equal(await click("document.querySelector('.hartmann2d-open-folio')"),true)
  await until(()=>evalJS("!!document.querySelector('.hartmann2d-folio[role=dialog][aria-modal=true]')"),'folio')
  assert.equal((await metrics()).folio,true)
  await click("document.querySelector('.hartmann2d-folio-close')")
  await until(()=>evalJS("!document.querySelector('.hartmann2d-folio')"),'cerrar folio')

  assert.equal(await click("[...document.querySelectorAll('.hartmann2d-toolbar button')].find(b=>b.textContent.includes('relaciones transversales'))"),true)
  assert.equal(await evalJS("!!document.querySelector('.hartmann2d-toolbar button.is-active')"),true)

  assert.equal(await click("document.querySelector('.hartmann2d-guide-launcher button')"),true)
  await until(()=>evalJS("!!document.querySelector('.hartmann2d-guide-panel')"),'iniciar guía')
  const first=await evalJS("document.querySelector('.hartmann2d-guide-progress strong')?.textContent")
  assert.equal(await click("[...document.querySelectorAll('.hartmann2d-guide-actions button')].find(b=>b.textContent.includes('siguiente'))"),true)
  await until(()=>evalJS("document.querySelector('.hartmann2d-guide-progress strong')?.textContent!=="+JSON.stringify(first)),'avanzar guía')
  assert.equal(await click("[...document.querySelectorAll('.hartmann2d-guide-actions button')].find(b=>b.textContent.includes('salir de guía'))"),true)
  await until(()=>evalJS("!document.querySelector('.hartmann2d-guide-panel')"),'terminar guía')
  state=await metrics()
  assert.equal(state.guided,false)
  assert.ok(state.pageWidth<=width+3,'Overflow final: '+JSON.stringify(state))
  console.log('OK Hartmann 2D '+width+'x'+height,JSON.stringify(state))
}

try{
  await until(async()=>{try{return(await fetch('http://127.0.0.1:4188/philosophia/')).ok}catch{return false}},'Vite')
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
