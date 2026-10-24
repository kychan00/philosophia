import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser'].find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium requerido para revisar la clase 6')
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms))
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4191','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-critical03sep-'))
const url='http://127.0.0.1:4191/philosophia/#/semestre/5/teoria-critica/clase/3-septiembre'
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
  await until(()=>evaluate("document.querySelectorAll('.ctsep1-article>section').length===12"),'class 3 September loaded')
  const result=await evaluate(`(()=>{
    const sections=[...document.querySelectorAll('.ctsep1-article>section')]
    return {
      viewport:innerWidth,scroll:document.documentElement.scrollWidth,
      sections:sections.length,
      studies:document.querySelectorAll('.ctsep1-article>section>.ctsep3-study').length,
      studyNodes:document.querySelectorAll('.ctsep3-study__node').length,
      themes:document.querySelectorAll('.ctsep3-atlas-tabs button').length,
      atlasNodes:document.querySelectorAll('.ctsep3-atlas-steps .ctsep3-atlas-step').length,
      image:!!document.querySelector('.ctsep3-licensed-item img'),
      saber:document.querySelector('#saber')?.textContent.includes('Conocimiento y saber'),
      experience:document.querySelector('#fenomenologia')?.textContent.includes('experiencias de la conciencia'),
      dialectic:document.querySelector('#dialectica')?.textContent.includes('En sí'),
      absolute:document.querySelector('#absoluto')?.textContent.includes('absoluto'),
      task:document.querySelector('#tarea')?.textContent.includes('Fenomenología del espíritu')
    }
  })()`)
  assert.ok(result.scroll<=result.viewport+3,'desbordamiento '+width+'x'+height+': '+JSON.stringify(result))
  assert.equal(result.sections,12)
  assert.equal(result.studies,12)
  assert.equal(result.studyNodes,36)
  assert.equal(result.themes,5)
  assert.equal(result.atlasNodes,3)
  assert.ok(result.image&&result.saber&&result.experience&&result.dialectic&&result.absolute&&result.task)
  console.log('OK FI265 / 3 septiembre',width,height)
}

try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4191/philosophia/')).ok}catch{return false}},'Vite')
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

  await evaluate("document.querySelector('.ctsep3-licensed-item img').scrollIntoView({block:'center'})")
  await until(()=>evaluate("document.querySelector('.ctsep3-licensed-item img').naturalWidth>0"),'SVG 3 septiembre')
  assert.ok(await evaluate("document.querySelector('.ctsep3-licensed-item figcaption').textContent.includes('Ilustración original')"))

  await evaluate("document.querySelectorAll('.ctsep3-atlas-tabs button')[1].click()")
  await until(()=>evaluate("document.querySelector('.ctsep3-atlas-reader h3')?.textContent.includes('conciencia')"),'núcleo experiencia')
  assert.equal(await evaluate("document.querySelectorAll('.ctsep3-atlas-tabs button[aria-pressed=true]').length"),1)
  await evaluate("document.querySelector('.ctsep3-atlas-guide-top button').click()")
  await until(()=>evaluate("!document.querySelector('.ctsep3-atlas-guide-body')"),'guía global cerrada')
  await evaluate("document.querySelector('.ctsep3-atlas-guide-top button').click()")
  await until(()=>evaluate("!!document.querySelector('.ctsep3-atlas-guide-body')"),'guía global abierta')

  await evaluate("document.querySelector('#fenomenologia .ctsep3-study__guide summary').click()")
  await until(()=>evaluate("document.querySelector('#fenomenologia .ctsep3-study__guide').open"),'guía experiencia')
  assert.equal(await evaluate("document.querySelectorAll('#fenomenologia .ctsep3-study__guide-grid>div').length"),4)
  await evaluate("document.querySelector('#fenomenologia .ctsep3-study__question summary').click()")
  assert.ok(await evaluate("document.querySelector('#fenomenologia .ctsep3-study__question').open"))

  // Interacciones heredadas de la página original.
  await evaluate("document.querySelectorAll('#figuras .ctsep1-fromm-tabs button')[2].click()")
  await until(()=>evaluate("document.querySelector('#figuras .ctsep1-focus')?.textContent.includes('Autoconciencia')"),'figura autoconciencia')
  await evaluate("document.querySelectorAll('#ciencia .ctsep1-toggle button')[1].click()")
  await until(()=>evaluate("document.querySelector('#ciencia .ctsep1-obedience')?.textContent.includes('ESPECIALIZACIÓN')"),'ciencia moderna')
  await evaluate("document.querySelectorAll('#dialectica .ctsep1-fromm-tabs button')[2].click()")
  await until(()=>evaluate("document.querySelector('#dialectica .ctsep1-focus')?.textContent.includes('En sí y para sí')"),'tercer momento')
  await evaluate("document.querySelectorAll('#absoluto .ctsep1-fromm-tabs button')[1].click()")
  await until(()=>evaluate("document.querySelector('#absoluto .ctsep1-focus')?.textContent.includes('Religión')"),'modo religión')

  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/3-septiembre','interacciones alteran HashRouter')
  console.log('OK FI265 / 3 septiembre imagen, atlas, guías e interacciones heredadas')
} finally{
  ws?.close();browser?.kill('SIGTERM');server.kill('SIGTERM');await sleep(180)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100})}catch{}
}
