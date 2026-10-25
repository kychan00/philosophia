import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser'].find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium requerido para revisar la clase 11')
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms))
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4196','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-critical15oct-'))
const url='http://127.0.0.1:4196/philosophia/#/semestre/5/teoria-critica/clase/15-octubre'
let browser,ws,seq=0
const pending=new Map()
function send(method,params={}){const id=++seq;return new Promise((resolve,reject)=>{pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}))})}
async function evaluate(expression){const res=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(res.exceptionDetails)throw Error(JSON.stringify(res.exceptionDetails));return res.result?.result?.value}
async function until(fn,label,count=120){for(let i=0;i<count;i++){try{if(await fn())return}catch{}await sleep(150)}throw Error('Timeout '+label)}

async function viewport(width,height){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<769})
  await send('Page.navigate',{url:'about:blank'})
  await until(()=>evaluate("location.href==='about:blank'"),'reset')
  await send('Page.navigate',{url})
  await until(()=>evaluate("document.querySelectorAll('.ct1510-detail-folio').length===14"),'class 15 October loaded')
  const result=await evaluate(`(()=>{
    return {
      viewport:innerWidth,scroll:document.documentElement.scrollWidth,
      folios:document.querySelectorAll('.ct1510-detail-folio').length,
      studies:document.querySelectorAll('.ct1510-detail-folio>.ct1510-studyx').length,
      studyNodes:document.querySelectorAll('.ct1510-studyx__node').length,
      themes:document.querySelectorAll('.ct1510-atlasx-tabs button').length,
      atlasNodes:document.querySelectorAll('.ct1510-atlasx-steps .ct1510-atlasx-step').length,
      oldNodes:document.querySelectorAll('.ct1510-node').length,
      image:!!document.querySelector('.ct1510-licensed-item img'),
      illouz:document.querySelector('#afectos')?.textContent.includes('Illouz'),
      arendt:document.querySelector('#burocracia')?.textContent.includes('Eichmann'),
      agenda:document.querySelector('#agenda')?.textContent.includes('sin fecha exacta'),
      dossier:document.querySelector('#dossier')?.textContent.includes('16 páginas')
    }
  })()`)
  assert.ok(result.scroll<=result.viewport+3,'desbordamiento '+width+'x'+height+': '+JSON.stringify(result))
  assert.equal(result.folios,14)
  assert.equal(result.studies,14)
  assert.equal(result.studyNodes,42)
  assert.equal(result.themes,5)
  assert.equal(result.atlasNodes,3)
  assert.equal(result.oldNodes,8)
  assert.ok(result.image&&result.illouz&&result.arendt&&result.agenda&&result.dossier)
  console.log('OK FI265 / 15 octubre',width,height)
}

try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4196/philosophia/')).ok}catch{return false}},'Vite')
  browser=spawn(chrome,['--headless=new','--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'})
  const portFile=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(portFile),'Chromium',180)
  const port=Number(readFileSync(portFile,'utf8').split('\n')[0])
  const pages=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  ws=new WebSocket(pages.find(p=>p.type==='page').webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true})})
  ws.addEventListener('message',event=>{const obj=JSON.parse(event.data);if(obj.id&&pending.has(obj.id)){const item=pending.get(obj.id);pending.delete(obj.id);obj.error?item.reject(Error(obj.error.message)):item.resolve(obj)}})
  await send('Page.enable');await send('Runtime.enable')

  for(const size of [[1440,900],[1024,768],[768,1024],[390,844],[320,740]]) await viewport(...size)

  await evaluate("document.querySelector('.ct1510-licensed-item img').scrollIntoView({block:'center'})")
  await until(()=>evaluate("document.querySelector('.ct1510-licensed-item img').naturalWidth>0"),'SVG 15 octubre')
  assert.ok(await evaluate("document.querySelector('.ct1510-licensed-item figcaption').textContent.includes('Ilustración original')"))

  await evaluate("document.querySelectorAll('.ct1510-atlasx-tabs button')[4].click()")
  await until(()=>evaluate("document.querySelector('.ct1510-atlasx-tabs button[aria-pressed=true] strong')?.textContent.includes('Responsabilidad y resistencia')"),'núcleo responsabilidad')
  assert.equal(await evaluate("document.querySelectorAll('.ct1510-atlasx-tabs button[aria-pressed=true]').length"),1)

  await evaluate("document.querySelector('#burocracia .ct1510-studyx__guide summary').click()")
  await until(()=>evaluate("document.querySelector('#burocracia .ct1510-studyx__guide').open"),'guía burocracia')
  assert.equal(await evaluate("document.querySelectorAll('#burocracia .ct1510-studyx__guide-grid>div').length"),4)

  // La constelación preexistente sigue funcionando.
  await evaluate("document.querySelectorAll('.ct1510-node')[4].click()")
  await until(()=>evaluate("document.querySelector('.ct1510-inspector h3')?.textContent.includes('Intercambio y reemplazabilidad')"),'constelación afectos')
  await evaluate("document.querySelector('.ct1510-controls button').click()")
  await until(()=>evaluate("!!document.querySelector('.ct1510-answer')"),'respuesta de control')

  // Navegación interna de la nueva capa.
  await evaluate("document.querySelectorAll('.ct1510-detail-index button')[9].click()")
  await until(
    () => evaluate("(() => { const target=document.querySelector('#libertad'); if (!target) return false; const rect=target.getBoundingClientRect(); return rect.top >= -4 && rect.top < innerHeight && rect.bottom > 0 })()"),
    'navegación del índice hacia el apartado libertad'
  )

  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/15-octubre','interacciones alteran HashRouter')
  console.log('OK FI265 / 15 octubre imagen, atlas, guías, constelación y navegación')
} finally{
  ws?.close();browser?.kill('SIGTERM');server.kill('SIGTERM');await sleep(180)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100})}catch{}
}
