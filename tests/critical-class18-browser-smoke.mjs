// Validación funcional del expediente FI265 / clase 1, sin modificar producción.
// Comprueba integridad, ausencia de desbordamientos y controles de recuperación.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chrome = ['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin => spawnSync('which',[bin],{stdio:'ignore'}).status === 0)
assert.ok(chrome, 'Chromium requerido para revisar visualmente la clase')
const sleep = (ms) => new Promise(r => setTimeout(r,ms))
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4185','--strictPort'], {stdio:'ignore'})
const profile = mkdtempSync(join(tmpdir(),'philosophia-critical18-'))
const url = 'http://127.0.0.1:4185/philosophia/#/semestre/5/teoria-critica/clase/18-agosto'
let browser, ws, seq = 0
const pending = new Map()
function send(method,params={}){
  const id = ++seq
  return new Promise((resolve,reject)=>{
    pending.set(id,{resolve,reject})
    ws.send(JSON.stringify({id,method,params}))
  })
}
async function evaluate(expression){
  const res=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
  if(res.exceptionDetails) throw Error(JSON.stringify(res.exceptionDetails))
  return res.result?.result?.value
}
async function until(fn, label, count=120){
  for(let i=0;i<count;i++){try{if(await fn()) return}catch{} await sleep(150)}
  throw Error('Timeout '+label)
}
async function viewport(width,height){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<769})
  await send('Page.navigate',{url:'about:blank'})
  await until(()=>evaluate("location.href==='about:blank'"),'page reset')
  await send('Page.navigate',{url})
  await until(()=>evaluate("document.querySelectorAll('.ct18-chapters>section').length===11"),'class content loaded')
  const result=await evaluate(`(()=>{
    const box=document.querySelector('.ct18-opening')
    const chapters=[...document.querySelectorAll('.ct18-chapters>section')]
    const board=document.querySelector('.ct18-cover-graphic')
    return {viewport:innerWidth,scroll:document.documentElement.scrollWidth,sections:chapters.length, themes:document.querySelectorAll('.ct18-atlas-tabs button').length,
      atlasNodes:document.querySelectorAll('.ct18-atlas-steps .ct18-atlas-step').length,
      guideRows:document.querySelectorAll('.ct18-atlas-guide-body>div').length,
      reading:!!document.querySelector('a[href*="/tareas/teoria-critica/tarea-1"]'),
      headings:chapters.map(x=>x.querySelector('h2')?.textContent.trim()),
      coverWidth:box?.getBoundingClientRect().width,
      boardWidth:board?.getBoundingClientRect().width,
      meta:document.querySelector('.ct18-opening-meta')?.textContent,
      method:document.querySelector('#aprender')?.textContent.includes('Adorno'),
      evaluation:document.querySelector('#evaluacion')?.textContent.includes('40%')}
  })()`)
  assert.ok(result.scroll<=result.viewport+3,'Desbordamiento '+width+'x'+height+': '+JSON.stringify(result))
  assert.equal(result.sections,11)
  assert.equal(result.themes,5,'faltan temas de estudio')
  assert.equal(result.atlasNodes,3,'mapa conceptual incompleto')
  assert.equal(result.guideRows,4,'guía de recurso incompleta')
  assert.ok(result.coverWidth>280&&result.boardWidth>250,'Composición ilegible '+JSON.stringify(result))
  assert.ok(result.method&&result.evaluation&&result.reading)
  assert.ok(result.headings.every(Boolean))
  console.log('OK FI265 / 18 agosto',width,height)
}
try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4185/philosophia/')).ok}catch{return false}},'Vite ready')
  browser=spawn(chrome,['--headless=new','--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'})
  const portFile=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(portFile),'Chromium ready',180)
  const port=Number(readFileSync(portFile,'utf8').split('\n')[0])
  const pages=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  ws=new WebSocket(pages.find(p=>p.type==='page').webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true})})
  ws.addEventListener('message',event=>{
    const obj=JSON.parse(event.data)
    if(obj.id&&pending.has(obj.id)){
      const item=pending.get(obj.id);pending.delete(obj.id)
      obj.error?item.reject(Error(obj.error.message)):item.resolve(obj)
    }
  })
  await send('Page.enable');await send('Runtime.enable')
  for(const size of [[1440,900],[1024,768],[768,1024],[390,844],[320,740]]) await viewport(...size)
  await evaluate("document.querySelector('.ct18-licensed-item img').scrollIntoView({block:'center'})")
  await until(()=>evaluate("document.querySelector('.ct18-licensed-item img').naturalWidth>0"),'figura original SVG cargada')
  assert.ok(await evaluate("document.querySelector('.ct18-licensed-item figcaption').textContent.includes('Ilustración original')"),'falta crédito visible')
  const figureBox=await evaluate("(()=>{const e=document.querySelector('.ct18-licensed-item img');const b=e.getBoundingClientRect();return {width:b.width,viewport:innerWidth}})()")
  assert.ok(figureBox.width>100&&figureBox.width<=figureBox.viewport,'SVG fuera de pantalla')
  await evaluate("document.querySelectorAll('.ct18-atlas-tabs button')[1].click()")
  await until(()=>evaluate("document.querySelector('.ct18-atlas-reader h3')?.textContent.includes('Kant')"),'segundo núcleo')
  assert.equal(await evaluate("document.querySelectorAll('.ct18-atlas-tabs button[aria-pressed=true]').length"),1)
  await evaluate("document.querySelector('.ct18-atlas-guide-top button').click()")
  await until(()=>evaluate("!document.querySelector('.ct18-atlas-guide-body')"),'guía colapsada')
  await evaluate("document.querySelector('.ct18-atlas-guide-top button').click()")
  await until(()=>evaluate("!!document.querySelector('.ct18-atlas-guide-body')"),'guía restaurada')
  await evaluate("document.querySelector('.ct18-atlas-actions button:first-child').click()")
  await until(()=>evaluate("document.querySelector('#dialectica').getBoundingClientRect().top<400"),'fuente cruzada del núcleo')
  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/18-agosto','atlas cambia HashRouter')
  await evaluate("document.querySelector('.ct18-toc button:nth-child(8)').click()")
  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/18-agosto','índice altera HashRouter')
  await evaluate("document.querySelector('.ct18-rehearsal-actions button:first-child').click()")
  await until(()=>evaluate("!!document.querySelector('.ct18-rehearsal-answer')"),'orientación de recuperación')
  await evaluate("document.querySelector('.ct18-rehearsal-actions button:last-child').click()")
  await until(()=>evaluate("!document.querySelector('.ct18-rehearsal-answer')"),'cambiar de pregunta')
  const next=await evaluate("document.querySelector('.ct18-rehearsal-card>span')?.textContent")
  assert.ok(next.includes('02'),'no avanza el repaso')
  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/18-agosto','repaso altera HashRouter')
  console.log('OK FI265 / navegación y repaso')
} finally{
  ws?.close();browser?.kill('SIGTERM');server.kill('SIGTERM');await sleep(180)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100})}catch{}
}
