// Navegador real: atlas independiente de Ontología II. Cuatro viewports.
// No sustituye Safari/iPad físico.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const url='http://127.0.0.1:4186/philosophia/#/tareas/ontologia-ii/marx-hegel-bloch-feuerbach/sistema'
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
 .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chrome/Chromium es necesario')
const preview=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4186','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'mhr-browser-'))
let browser,ws
let seq=0
const pending=new Map()
const sleep=ms=>new Promise(r=>setTimeout(r,ms))
const send=(method,params={})=>{
 const id=++seq
 return new Promise((resolve,reject)=>{
  pending.set(id,{resolve,reject})
  ws.send(JSON.stringify({id,method,params}))
 })
}
const evalJS=async expression=>{
 const response=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
 if(response.exceptionDetails)throw new Error(response.exceptionDetails.text)
 return response.result?.result?.value
}
const until=async(fn,what,attempts=170)=>{
 for(let i=0;i<attempts;i++){try{if(await fn())return}catch{}await sleep(150)}
 throw new Error('Timeout: '+what)
}
function browserMetrics(){
 const els=[...document.querySelectorAll('.mhr-workspace__map .react-flow__node')]
  .filter(el=>{const r=el.getBoundingClientRect();return r.width>1&&r.height>1})
  .map(el=>({id:el.getAttribute('data-id'),rect:el.getBoundingClientRect()}))
 const collisions=[]
 for(let i=0;i<els.length;i++)for(let j=i+1;j<els.length;j++){
  const a=els[i].rect,b=els[j].rect
  const x=Math.min(a.right,b.right)-Math.max(a.left,b.left)
  const y=Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)
  if(x>2&&y>2)collisions.push(els[i].id+' / '+els[j].id)
 }
 return {
  width:innerWidth,scroll:document.documentElement.scrollWidth,
  nodes:els.length,collisions,
  current:document.querySelectorAll('.mhr-node.is-current').length,
  details:document.querySelector('.mhr-inspector__section')?.textContent?.length||0,
  question:!!document.querySelector('.mhr-inspector__question'),
 }
}
const metrics=()=>evalJS('('+browserMetrics.toString()+')()')
async function viewport(width,height){
 await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<=768})
 await send('Page.navigate',{url:'about:blank'})
 await until(()=>evalJS("location.href==='about:blank'"),'blank')
 await send('Page.navigate',{url})
 await until(()=>evalJS("document.querySelector('.mhr-hero h1')?.textContent.includes('Marx')"),'hero')
 await until(()=>evalJS("document.querySelectorAll('.mhr-workspace__map .react-flow__node').length===24"),'24 nodos Marx')
 const m=await metrics()
 assert.deepEqual(m.collisions,[],'nodos encimados '+width+'×'+height)
 assert.equal(m.current,1,'selección activa '+width)
 assert.equal(m.nodes,24)
 assert.ok(m.scroll<=m.width+2,'overflow global '+JSON.stringify(m))
 assert.ok(m.details>180&&m.question,'inspector incompleto '+JSON.stringify(m))
 console.log('OK tres lecturas',width,height,m)
}
try{
 await until(async()=>{try{return (await fetch('http://127.0.0.1:4186/philosophia/')).ok}catch{return false}},'Vite')
 browser=spawn(chrome,['--headless=new','--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'})
 const portFile=join(profile,'DevToolsActivePort')
 await until(()=>existsSync(portFile),'puerto CDP',250)
 const port=Number(readFileSync(portFile,'utf8').split('\n')[0])
 const tabs=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json()
 ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl)
 await new Promise((res,rej)=>{ws.addEventListener('open',res,{once:true});ws.addEventListener('error',rej,{once:true})})
 ws.addEventListener('message',event=>{
  const value=JSON.parse(event.data)
  if(value.id&&pending.has(value.id)){
   const p=pending.get(value.id);pending.delete(value.id)
   value.error?p.reject(new Error(value.error.message)):p.resolve(value)
  }
 })
 await send('Page.enable');await send('Runtime.enable')
 for(const s of [[1440,900],[1024,768],[768,1024],[390,844]])await viewport(...s)
 await evalJS("([...document.querySelectorAll('.mhr-routes__card')].find(b=>b.textContent.includes('Bloch · dialéctica idealista'))?.click(),true)")
 await until(()=>evalJS("document.querySelectorAll('.mhr-workspace__map .react-flow__node').length===18"),'Bloch')
 assert.equal((await metrics()).current,1)
 await evalJS("([...document.querySelectorAll('.mhr-routes__card')].find(b=>b.textContent.includes('Marx · once tesis'))?.click(),true)")
 await until(()=>evalJS("document.querySelectorAll('.mhr-workspace__map .react-flow__node').length===19"),'tesis')
 await evalJS("document.querySelector('.mhr-guide-entry__actions button')?.click()")
 await until(()=>evalJS("document.querySelector('.mhr-guidebar')?.textContent.includes('1 / 74')"),'guía 74')
 await evalJS("document.querySelector('.mhr-guidebar__actions button:last-child')?.click()")
 await until(()=>evalJS("document.querySelector('.mhr-guidebar')?.textContent.includes('2 / 74')"),'guía siguiente')
 await evalJS("document.querySelector('.mhr-guidebar__actions button:first-child')?.click()")
 await evalJS("document.querySelector('.mhr-workspace__toolbar button')?.click()")
 await until(()=>evalJS("!!document.querySelector('.mhr-workspace--fullscreen')"),'fullscreen')
 await evalJS("document.querySelector('.mhr-workspace__exit')?.click()")
 await until(()=>evalJS("!document.querySelector('.mhr-workspace--fullscreen')"),'salir de fullscreen')
 console.log('OK rutas, guía 74, selección y fullscreen')
}finally{
 ws?.close();browser?.kill('SIGTERM');preview.kill('SIGTERM')
 await sleep(250)
 try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:150})}catch{}
}
