import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser'].find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium requerido para revisar la clase 3')
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms))
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4187','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-critical25-'))
const url='http://127.0.0.1:4187/philosophia/#/semestre/5/teoria-critica/clase/25-agosto'
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
  await until(()=>evaluate("document.querySelectorAll('.ct25-article>section').length===10"),'class 25 loaded')
  const result=await evaluate(`(()=>{
    const sections=[...document.querySelectorAll('.ct25-article>section')]
    return {
      viewport:innerWidth,scroll:document.documentElement.scrollWidth,
      sections:sections.length,
      studies:document.querySelectorAll('.ct25-article>section>.ct25-section-study').length,
      studyNodes:document.querySelectorAll('.ct25-section-study__node').length,
      themes:document.querySelectorAll('.ct25-atlas-tabs button').length,
      atlasNodes:document.querySelectorAll('.ct25-atlas-steps .ct25-atlas-step').length,
      image:!!document.querySelector('.ct25-licensed-item img'),
      task:!!document.querySelector('a[href="/tareas/teoria-critica/escuela-de-frankfurt/conceptos"]'),
      totality:document.querySelector('#totalidad')?.textContent.includes('totalidad'),
      astrology:document.querySelector('#astrologia')?.textContent.includes('astrología'),
      culture:document.querySelector('#cultura')?.textContent.includes('industria cultural')
    }
  })()`)
  assert.ok(result.scroll<=result.viewport+3,'desbordamiento '+width+'x'+height+': '+JSON.stringify(result))
  assert.equal(result.sections,10)
  assert.equal(result.studies,10)
  assert.equal(result.studyNodes,30)
  assert.equal(result.themes,5)
  assert.equal(result.atlasNodes,3)
  assert.ok(result.image&&result.task&&result.totality&&result.astrology&&result.culture)
  console.log('OK FI265 / 25 agosto',width,height)
}

try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4187/philosophia/')).ok}catch{return false}},'Vite')
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

  await evaluate("document.querySelector('.ct25-licensed-item img').scrollIntoView({block:'center'})")
  await until(()=>evaluate("document.querySelector('.ct25-licensed-item img').naturalWidth>0"),'SVG 25 agosto')
  assert.ok(await evaluate("document.querySelector('.ct25-licensed-item figcaption').textContent.includes('Ilustración original')"))

  await evaluate("document.querySelectorAll('.ct25-atlas-tabs button')[3].click()")
  await until(()=>evaluate("document.querySelector('.ct25-atlas-reader h3')?.textContent.includes('totalidad')"),'núcleo totalidad')
  assert.equal(await evaluate("document.querySelectorAll('.ct25-atlas-tabs button[aria-pressed=true]').length"),1)
  await evaluate("document.querySelector('.ct25-atlas-guide-top button').click()")
  await until(()=>evaluate("!document.querySelector('.ct25-atlas-guide-body')"),'guía global cerrada')
  await evaluate("document.querySelector('.ct25-atlas-guide-top button').click()")
  await until(()=>evaluate("!!document.querySelector('.ct25-atlas-guide-body')"),'guía global abierta')

  await evaluate("document.querySelector('#conciencia .ct25-section-study__guide summary').click()")
  await until(()=>evaluate("document.querySelector('#conciencia .ct25-section-study__guide').open"),'guía sección 01')
  assert.equal(await evaluate("document.querySelectorAll('#conciencia .ct25-section-study__guide-grid>div').length"),4)
  await evaluate("document.querySelector('#conciencia .ct25-section-study__question summary').click()")
  assert.ok(await evaluate("document.querySelector('#conciencia .ct25-section-study__question').open"))

  // Interacciones heredadas que no deben romperse con la nueva composición.
  await evaluate("document.querySelectorAll('#conciencia .ct25-toggle button')[1].click()")
  await until(()=>evaluate("document.querySelector('#conciencia .ct25-class-lab')?.textContent.includes('Puedo imaginarme')"),'toggle conciencia')
  await evaluate("document.querySelectorAll('#exilio .ct25-exile-route button')[3].click()")
  await until(()=>evaluate("document.querySelector('#exilio .ct25-exile-focus')?.textContent.includes('Nueva York')"),'ruta exilio')
  await evaluate("document.querySelectorAll('#generaciones .ct25-generations-tabs button')[2].click()")
  await until(()=>evaluate("document.querySelector('#generaciones .ct25-generation-focus')?.textContent.includes('Axel Honneth')"),'generaciones')
  await evaluate("document.querySelectorAll('#totalidad .ct25-dimensions button')[2].click()")
  await until(()=>evaluate("document.querySelector('#totalidad .ct25-dimension-focus')?.textContent.includes('cultural')"),'dimensión cultural')
  await evaluate("document.querySelectorAll('#astrologia .ct25-toggle button')[1].click()")
  await until(()=>evaluate("document.querySelector('#astrologia .ct25-astro')?.textContent.includes('SATURNO')"),'toggle astrología')

  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/25-agosto','interacciones alteran HashRouter')
  console.log('OK FI265 / 25 agosto imagen, atlas, guías e interacciones heredadas')
} finally{
  ws?.close();browser?.kill('SIGTERM');server.kill('SIGTERM');await sleep(180)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100})}catch{}
}
