import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const base='http://127.0.0.1:4191/philosophia/#'
const routes=[
  '/tareas/teoria-critica/lukacs-cosificacion',
  '/estudios/teoria-critica/lukacs-ontologia-ser-social',
  '/tareas/teoria-critica/marx-capital-fetichismo-parte-i',
  '/semestre/5/filosofia-analitica/reporte/hacker',
  '/semestre/5/filosofia-analitica/lectura/glock-capitulo-2',
  '/tareas/ontologia-ii/hartmann-cosa-en-si/sistema',
  '/tareas/ontologia-ii/hegel-croce-dialectica',
  '/tareas/ontologia-ii/kant-dialectica-trascendental',
  '/tareas/ontologia-ii/kant-analitica-trascendental',
  '/semestre/5/filosofia-analitica/lectura/nava-tecnociencia',
  '/cafe-filosofico/2026/10/05/mercadotecnia/sistema-2d',
]

const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible')

const preview=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4191','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-mobile-2d-'))
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
async function evaluate(expression){
  const out=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
  if(out.exceptionDetails) throw new Error(out.exceptionDetails.text)
  return out.result?.result?.value
}
async function until(fn,label,tries=180){
  for(let i=0;i<tries;i++){
    try{if(await fn())return}catch{}
    await sleep(120)
  }
  throw new Error('Timeout: '+label)
}
async function openRoute(route,width=390,height=844){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:3,mobile:true})
  await send('Page.navigate',{url:'about:blank'})
  await until(()=>evaluate("location.href==='about:blank'"),'reset '+route)
  await send('Page.navigate',{url:base+route})
  await until(()=>evaluate("!!document.querySelector('.react-flow')"),'React Flow '+route)
  await until(()=>evaluate("document.querySelectorAll('.react-flow__node').length>0"),'nodos '+route)
  await sleep(450)
  const state=await evaluate("(()=>({href:location.hash,nodes:document.querySelectorAll('.react-flow__node').length,minimap:!!document.querySelector('.react-flow__minimap'),width:innerWidth,scrollWidth:document.documentElement.scrollWidth,body:(document.body.innerText||'').slice(0,240)}))()")
  assert.ok(state.nodes>0,'sin nodos '+route+': '+JSON.stringify(state))
  assert.equal(state.minimap,false,'minimapa montado en compacto '+route+': '+JSON.stringify(state))
  assert.ok(state.scrollWidth<=state.width+4,'overflow global '+route+': '+JSON.stringify(state))
  console.log('OK mobile 2D',route,width+'x'+height,JSON.stringify(state))
  return state
}

try{
  await until(async()=>{try{return(await fetch('http://127.0.0.1:4191/philosophia/')).ok}catch{return false}},'Vite preview')
  browser=spawn(chrome,[
    '--headless=new','--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage',
    '--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0',
    '--user-data-dir='+profile,'about:blank'
  ],{stdio:'ignore'})
  const portFile=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(portFile),'CDP',220)
  const port=Number(readFileSync(portFile,'utf8').split('\n')[0])
  const tabs=await(await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  ws=new WebSocket(tabs.find(tab=>tab.type==='page').webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{
    ws.addEventListener('open',resolve,{once:true})
    ws.addEventListener('error',reject,{once:true})
  })
  ws.addEventListener('message',event=>{
    const msg=JSON.parse(event.data)
    if(msg.id&&pending.has(msg.id)){
      const item=pending.get(msg.id)
      pending.delete(msg.id)
      msg.error?item.reject(new Error(msg.error.message)):item.resolve(msg)
    }
  })
  await send('Page.enable')
  await send('Runtime.enable')

  const lukacsPhone=await openRoute(routes[0],390,844)
  assert.ok(lukacsPhone.nodes<58,'Lukács montó los 58 nodos en apertura móvil: '+JSON.stringify(lukacsPhone))
  const lukacsTablet=await openRoute(routes[0],768,1024)
  assert.ok(lukacsTablet.nodes<58,'Lukács montó los 58 nodos en apertura tablet: '+JSON.stringify(lukacsTablet))

  for(const route of routes.slice(1)) await openRoute(route,390,844)
} finally {
  ws?.close()
  browser?.kill('SIGTERM')
  preview.kill('SIGTERM')
  await sleep(250)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:4,retryDelay:120})}catch{}
}
