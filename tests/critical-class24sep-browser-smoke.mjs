import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser'].find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium requerido para revisar la clase 10')
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms))
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4195','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-critical24sep-'))
const url='http://127.0.0.1:4195/philosophia/#/semestre/5/teoria-critica/clase/24-septiembre'
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
  await until(()=>evaluate("document.querySelectorAll('.ctsep24-article>section').length===23"),'class 24 September loaded')
  const result=await evaluate(`(()=>{
    return {
      viewport:innerWidth,scroll:document.documentElement.scrollWidth,
      sections:document.querySelectorAll('.ctsep24-article>section').length,
      studies:document.querySelectorAll('.ctsep24-article>section>.ctsep24-study').length,
      studyNodes:document.querySelectorAll('.ctsep24-study__node').length,
      themes:document.querySelectorAll('.ctsep24-atlas-tabs button').length,
      atlasNodes:document.querySelectorAll('.ctsep24-atlas-steps .ctsep24-atlas-step').length,
      image:!!document.querySelector('.ctsep24-licensed-item img'),
      machine:document.querySelector('#maquina')?.textContent.includes('Tiempos modernos'),
      levinas:document.querySelector('#levinas')?.textContent.includes('Levinas'),
      ai:document.querySelector('#ia')?.textContent.includes('respuesta cerrada'),
      value:document.querySelector('#precio')?.textContent.includes('Valor no es precio'),
      control:document.querySelectorAll('.ctsep24-control-grid>div').length,
      task:document.querySelector('#tarea')?.textContent.includes('No se inventa reporte')
    }
  })()`)
  assert.ok(result.scroll<=result.viewport+3,'desbordamiento '+width+'x'+height+': '+JSON.stringify(result))
  assert.equal(result.sections,23)
  assert.equal(result.studies,23)
  assert.equal(result.studyNodes,69)
  assert.equal(result.themes,5)
  assert.equal(result.atlasNodes,3)
  assert.equal(result.control,9)
  assert.ok(result.image&&result.machine&&result.levinas&&result.ai&&result.value&&result.task)
  console.log('OK FI265 / 24 septiembre',width,height)
}

try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4195/philosophia/')).ok}catch{return false}},'Vite')
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

  await evaluate("document.querySelector('.ctsep24-licensed-item img').scrollIntoView({block:'center'})")
  await until(()=>evaluate("document.querySelector('.ctsep24-licensed-item img').naturalWidth>0"),'SVG 24 septiembre')
  assert.ok(await evaluate("document.querySelector('.ctsep24-licensed-item figcaption').textContent.includes('Ilustración original')"))

  await evaluate("document.querySelectorAll('.ctsep24-atlas-tabs button')[4].click()")
  await until(()=>evaluate("document.querySelector('.ctsep24-atlas-tabs button[aria-pressed=true] strong')?.textContent.includes('Mercancía y valor')"),'núcleo valor')
  assert.equal(await evaluate("document.querySelectorAll('.ctsep24-atlas-tabs button[aria-pressed=true]').length"),1)

  await evaluate("document.querySelector('#precio .ctsep24-study__guide summary').click()")
  await until(()=>evaluate("document.querySelector('#precio .ctsep24-study__guide').open"),'guía valor/precio')
  assert.equal(await evaluate("document.querySelectorAll('#precio .ctsep24-study__guide-grid>div').length"),4)

  // Selector de cinco bloques del hero.
  await evaluate("document.querySelectorAll('.ctsep24-axis button')[1].click()")
  await until(()=>evaluate("document.querySelector('.ctsep24-axis-focus')?.textContent.includes('Ser genérico y otros')"),'selector ser genérico')
  await evaluate("document.querySelectorAll('.ctsep24-axis button')[4].click()")
  await until(()=>evaluate("document.querySelector('.ctsep24-axis-focus')?.textContent.includes('Mercancía y valor')"),'selector valor')

  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/24-septiembre','interacciones alteran HashRouter')
  console.log('OK FI265 / 24 septiembre imagen, atlas, guías y selector de bloques')
} finally{
  ws?.close();browser?.kill('SIGTERM');server.kill('SIGTERM');await sleep(180)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100})}catch{}
}
