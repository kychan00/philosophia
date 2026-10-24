import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser'].find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium requerido para revisar la clase 2')
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms))
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4186','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-critical20-'))
const url='http://127.0.0.1:4186/philosophia/#/semestre/5/teoria-critica/clase/20-agosto'
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
  await until(()=>evaluate("document.querySelectorAll('.ct20-chapters>section').length===11"),'class 20 loaded')
  const result=await evaluate(`(()=>{
    const chapters=[...document.querySelectorAll('.ct20-chapters>section')]
    return {
      viewport:innerWidth,scroll:document.documentElement.scrollWidth,
      sections:chapters.length,
      studies:document.querySelectorAll('.ct20-chapters>section>.ct20-section-study').length,
      studyNodes:document.querySelectorAll('.ct20-section-study__node').length,
      themes:document.querySelectorAll('.ct20-atlas-tabs button').length,
      atlasNodes:document.querySelectorAll('.ct20-atlas-steps .ct20-atlas-step').length,
      image:!!document.querySelector('.ct20-licensed-item img'),
      headings:chapters.map(x=>x.querySelector('h2')?.textContent.trim()),
      marx:document.querySelector('#marx')?.textContent.includes('relaciones sociales'),
      fromm:document.querySelector('#fromm')?.textContent.includes('Tercer Reich'),
      paradox:document.querySelector('#problema')?.textContent.includes('dominación')
    }
  })()`)
  assert.ok(result.scroll<=result.viewport+3,'desbordamiento '+width+'x'+height+': '+JSON.stringify(result))
  assert.equal(result.sections,11)
  assert.equal(result.studies,11)
  assert.equal(result.studyNodes,33)
  assert.equal(result.themes,5)
  assert.equal(result.atlasNodes,3)
  assert.ok(result.image&&result.marx&&result.fromm&&result.paradox)
  assert.ok(result.headings.every(Boolean))
  console.log('OK FI265 / 20 agosto',width,height)
}
try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4186/philosophia/')).ok}catch{return false}},'Vite')
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

  await evaluate("document.querySelector('.ct20-licensed-item img').scrollIntoView({block:'center'})")
  await until(()=>evaluate("document.querySelector('.ct20-licensed-item img').naturalWidth>0"),'SVG 20 agosto')
  assert.ok(await evaluate("document.querySelector('.ct20-licensed-item figcaption').textContent.includes('Ilustración original')"))

  await evaluate("document.querySelectorAll('.ct20-atlas-tabs button')[2].click()")
  await until(()=>evaluate("document.querySelector('.ct20-atlas-reader h3')?.textContent.includes('Frankfurt')"),'núcleo genealogía')
  assert.equal(await evaluate("document.querySelectorAll('.ct20-atlas-tabs button[aria-pressed=true]').length"),1)
  await evaluate("document.querySelector('.ct20-atlas-guide-top button').click()")
  await until(()=>evaluate("!document.querySelector('.ct20-atlas-guide-body')"),'guía global cerrada')
  await evaluate("document.querySelector('.ct20-atlas-guide-top button').click()")
  await until(()=>evaluate("!!document.querySelector('.ct20-atlas-guide-body')"),'guía global abierta')

  await evaluate("document.querySelector('#distincion .ct20-section-study__guide summary').click()")
  await until(()=>evaluate("document.querySelector('#distincion .ct20-section-study__guide').open"),'guía sección 01')
  assert.equal(await evaluate("document.querySelectorAll('#distincion .ct20-section-study__guide-grid>div').length"),4)
  await evaluate("document.querySelector('#distincion .ct20-section-study__question summary').click()")
  assert.ok(await evaluate("document.querySelector('#distincion .ct20-section-study__question').open"))
  await evaluate("document.querySelector('#distincion .ct20-section-study__footer button:last-child').click()")
  await until(()=>evaluate("document.querySelector('#genealogia').getBoundingClientRect().top<430"),'navegación 01 a 02')
  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/20-agosto','guía altera HashRouter')

  await evaluate("document.querySelector('.ct20-toc button:nth-child(10)').click()")
  await until(()=>evaluate("document.querySelector('#fromm').getBoundingClientRect().top<430"),'índice Fromm')
  assert.equal(await evaluate('location.hash'),'#/semestre/5/teoria-critica/clase/20-agosto','índice altera HashRouter')

  await evaluate("document.querySelector('.ct20-rehearsal-actions button:first-child').click()")
  await until(()=>evaluate("!!document.querySelector('.ct20-rehearsal-answer')"),'repaso orientación')
  await evaluate("document.querySelector('.ct20-rehearsal-actions button:last-child').click()")
  await until(()=>evaluate("!document.querySelector('.ct20-rehearsal-answer')"),'repaso avanza')
  assert.ok((await evaluate("document.querySelector('.ct20-rehearsal-card>span')?.textContent")).includes('02'))
  console.log('OK FI265 / 20 agosto navegación, imagen, atlas y estudio')
} finally{
  ws?.close();browser?.kill('SIGTERM');server.kill('SIGTERM');await sleep(180)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100})}catch{}
}
