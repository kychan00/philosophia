import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser'].find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium requerido para revisar la clase 9')
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms))
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4194','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-critical22sep-'))
const url='http://127.0.0.1:4194/philosophia/#/semestre/5/teoria-critica/clase/22-septiembre'
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
  await until(()=>evaluate("document.querySelectorAll('.ctsep22-article>section').length===10"),'class 22 September loaded')
  const result=await evaluate(`(()=>{
    return {
      viewport:innerWidth,scroll:document.documentElement.scrollWidth,
      sections:document.querySelectorAll('.ctsep22-article>section').length,
      studies:document.querySelectorAll('.ctsep22-article>section>.ctsep22-study').length,
      studyNodes:document.querySelectorAll('.ctsep22-study__node').length,
      themes:document.querySelectorAll('.ctsep22-atlas-tabs button').length,
      atlasNodes:document.querySelectorAll('.ctsep22-atlas-steps .ctsep22-atlas-step').length,
      image:!!document.querySelector('.ctsep22-licensed-item img'),
      source:document.querySelector('.ctsep22-source-warning')?.textContent.includes('Reconstrucción parcial'),
      total:document.querySelector('#totalidad')?.textContent.includes('Totalidad social'),
      open:document.querySelector('#apertura')?.textContent.includes('Ser genérico'),
      later:document.querySelector('#continuidad')?.textContent.includes('24 SEP')
    }
  })()`)
  assert.ok(result.scroll<=result.viewport+3,'desbordamiento '+width+'x'+height+': '+JSON.stringify(result))
  assert.equal(result.sections,10)
  assert.equal(result.studies,10)
  assert.equal(result.studyNodes,30)
  assert.equal(result.themes,5)
  assert.equal(result.atlasNodes,3)
  assert.ok(result.image&&result.source&&result.total&&result.open&&result.later)
  console.log('OK FI265 / 22 septiembre',width,height)
}

try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4194/philosophia/')).ok}catch{return false}},'Vite')
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

  await evaluate("document.querySelector('.ctsep22-licensed-item img').scrollIntoView({block:'center'})")
  await until(()=>evaluate("document.querySelector('.ctsep22-licensed-item img').naturalWidth>0"),'SVG 22 septiembre')
  assert.ok(await evaluate("document.querySelector('.ctsep22-licensed-item figcaption').textContent.includes('Ilustración original')"))

  await evaluate("document.querySelectorAll('.ctsep22-atlas-tabs button')[4].click()")
  await until(()=>evaluate("document.querySelector('.ctsep22-atlas-reader h3')?.textContent.includes('totalidad')"),'núcleo totalidad')
  assert.equal(await evaluate("document.querySelectorAll('.ctsep22-atlas-tabs button[aria-pressed=true]').length"),1)

  await evaluate("document.querySelector('#materialidad .ctsep22-study__guide summary').click()")
  await until(()=>evaluate("document.querySelector('#materialidad .ctsep22-study__guide').open"),'guía materialidad')
  assert.equal(await evaluate("document.querySelectorAll('#materialidad .ctsep22-study__guide-grid>div').length"),4)

  // Selector editorial de las dimensiones de totalidad.
  await evaluate("document.querySelectorAll('.ctsep22-axis button')[1].click()")
  await until(()=>evaluate("document.querySelector('.ctsep22-axis-focus')?.textContent.includes('Conciencia')"),'selector conciencia')
  await evaluate("document.querySelectorAll('.ctsep22-axis button')[3].click()")
  await until(()=>evaluate("document.querySelector('.ctsep22-axis-focus')?.textContent.includes('División sexual')"),'selector división')
  await evaluate("document.querySelectorAll('.ctsep22-totality-grid button')[4].click()")
  await until(()=>evaluate("document.querySelector('.ctsep22-axis-focus')?.textContent.includes('Enajenación')"),'selector enajenación')

  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/22-septiembre','interacciones alteran HashRouter')
  console.log('OK FI265 / 22 septiembre imagen, atlas, guías y selector editorial')
} finally{
  ws?.close();browser?.kill('SIGTERM');server.kill('SIGTERM');await sleep(180)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100})}catch{}
}
