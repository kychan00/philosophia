import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser'].find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium requerido para revisar la clase 5')
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms))
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4189','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-critical01sep-'))
const url='http://127.0.0.1:4189/philosophia/#/semestre/5/teoria-critica/clase/1-septiembre'
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
  await until(()=>evaluate("document.querySelectorAll('.ctsep1-article>section').length===11"),'class 27 loaded')
  const result=await evaluate(`(()=>{
    const sections=[...document.querySelectorAll('.ctsep1-article>section')]
    return {
      viewport:innerWidth,scroll:document.documentElement.scrollWidth,
      sections:sections.length,
      studies:document.querySelectorAll('.ctsep1-article>section>.ctsep1-study').length,
      studyNodes:document.querySelectorAll('.ctsep1-study__node').length,
      themes:document.querySelectorAll('.ctsep1-atlas-tabs button').length,
      atlasNodes:document.querySelectorAll('.ctsep1-atlas-steps .ctsep1-atlas-step').length,
      image:!!document.querySelector('.ctsep1-licensed-item img'),
      fromm:document.querySelector('#fromm')?.textContent.includes('Fromm'),
      hegel:document.querySelector('#hegel')?.textContent.includes('Hegel'),
      dialectic:document.querySelector('#dialectica')?.textContent.includes('racionalidad del movimiento'),
      task:document.querySelector('#tarea')?.textContent.includes('Fenomenología del espíritu')
    }
  })()`)
  assert.ok(result.scroll<=result.viewport+3,'desbordamiento '+width+'x'+height+': '+JSON.stringify(result))
  assert.equal(result.sections,11)
  assert.equal(result.studies,11)
  assert.equal(result.studyNodes,33)
  assert.equal(result.themes,5)
  assert.equal(result.atlasNodes,3)
  assert.ok(result.image&&result.fromm&&result.hegel&&result.dialectic&&result.task)
  console.log('OK FI265 / 1 septiembre',width,height)
}

try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4189/philosophia/')).ok}catch{return false}},'Vite')
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

  await evaluate("document.querySelector('.ctsep1-licensed-item img').scrollIntoView({block:'center'})")
  await until(()=>evaluate("document.querySelector('.ctsep1-licensed-item img').naturalWidth>0"),'SVG 1 septiembre')
  assert.ok(await evaluate("document.querySelector('.ctsep1-licensed-item figcaption').textContent.includes('Ilustración original')"))

  await evaluate("document.querySelectorAll('.ctsep1-atlas-tabs button')[4].click()")
  await until(()=>evaluate("document.querySelector('.ctsep1-atlas-reader h3')?.textContent.includes('racionalidad del movimiento')"),'núcleo dialéctica')
  assert.equal(await evaluate("document.querySelectorAll('.ctsep1-atlas-tabs button[aria-pressed=true]').length"),1)
  await evaluate("document.querySelector('.ctsep1-atlas-guide-top button').click()")
  await until(()=>evaluate("!document.querySelector('.ctsep1-atlas-guide-body')"),'guía global cerrada')
  await evaluate("document.querySelector('.ctsep1-atlas-guide-top button').click()")
  await until(()=>evaluate("!!document.querySelector('.ctsep1-atlas-guide-body')"),'guía global abierta')

  await evaluate("document.querySelector('#dialectica .ctsep1-study__guide summary').click()")
  await until(()=>evaluate("document.querySelector('#dialectica .ctsep1-study__guide').open"),'guía dialéctica')
  assert.equal(await evaluate("document.querySelectorAll('#dialectica .ctsep1-study__guide-grid>div').length"),4)
  await evaluate("document.querySelector('#dialectica .ctsep1-study__question summary').click()")
  assert.ok(await evaluate("document.querySelector('#dialectica .ctsep1-study__question').open"))

  // Interacciones heredadas de la página original.
  await evaluate("document.querySelectorAll('#fromm .ctsep1-fromm-tabs button')[3].click()")
  await until(()=>evaluate("document.querySelector('#fromm .ctsep1-focus')?.textContent.includes('Sobre la desobediencia')"),'tabs Fromm')
  await evaluate("document.querySelectorAll('#fromm .ctsep1-toggle button')[1].click()")
  await until(()=>evaluate("document.querySelector('#fromm .ctsep1-social')?.textContent.includes('autoritarismo')"),'personalidad autoritaria')
  await evaluate("document.querySelectorAll('#desobediencia .ctsep1-toggle button')[1].click()")
  await until(()=>evaluate("document.querySelector('#desobediencia .ctsep1-obedience')?.textContent.includes('Una norma puede ser negada')"),'desobediencia')
  await evaluate("document.querySelectorAll('#metodo .ctsep1-toggle button')[0].click()")
  await until(()=>evaluate("document.querySelector('#metodo .ctsep1-method')?.textContent.includes('POPPER')"),'método Popper')
  await evaluate("document.querySelectorAll('#idealismo .ctsep1-toggle button')[1].click()")
  await until(()=>evaluate("document.querySelector('#idealismo .ctsep1-idealism')?.textContent.includes('IDEALISMO ABSOLUTO')"),'idealismo Hegel')
  await evaluate("document.querySelectorAll('#verdad .ctsep1-truth-tabs button')[4].click()")
  await until(()=>evaluate("document.querySelector('#verdad .ctsep1-focus')?.textContent.includes('Resultado')"),'verdad resultado')
  await evaluate("document.querySelectorAll('#espiritu .ctsep1-toggle button')[1].click()")
  await until(()=>evaluate("document.querySelector('#espiritu .ctsep1-spirit')?.textContent.includes('ESPÍRITU OBJETIVO')"),'espíritu objetivo')
  await evaluate("document.querySelectorAll('#dialectica .ctsep1-dialectic-tabs button')[3].click()")
  await until(()=>evaluate("document.querySelector('#dialectica .ctsep1-dialectic-focus')?.textContent.includes('Transformación')"),'dialéctica transformación')

  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/1-septiembre','interacciones alteran HashRouter')
  console.log('OK FI265 / 1 septiembre imagen, atlas, guías e interacciones heredadas')
} finally{
  ws?.close();browser?.kill('SIGTERM');server.kill('SIGTERM');await sleep(180)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100})}catch{}
}
