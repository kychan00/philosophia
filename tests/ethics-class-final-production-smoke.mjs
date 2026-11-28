import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chrome = ['google-chrome','google-chrome-stable','chromium','chromium-browser'].find(bin => spawnSync('which',[bin],{stdio:'ignore'}).status === 0)
assert.ok(chrome, 'Se requiere Chromium para el smoke responsive ETHOS')
const sleep = ms => new Promise(resolve => setTimeout(resolve,ms))
const profile = mkdtempSync(join(tmpdir(),'philosophia-ethepi-'))
const url = process.argv[2]
assert.ok(url, 'URL pública requerida')
let browser, ws, sequence = 0
const pending = new Map()
function send(method,params={}){
  const id=++sequence
  return new Promise((resolve,reject)=>{pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}))})
}
async function evaluate(expression){
  const response=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
  if(response.exceptionDetails)throw Error(JSON.stringify(response.exceptionDetails))
  return response.result?.result?.value
}
async function until(fn,label,count=120){
  for(let i=0;i<count;i++){try{if(await fn())return}catch{}await sleep(150)}
  throw Error('Timeout: '+label)
}
async function viewport(width,height){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<769})
  await send('Page.navigate',{url:'about:blank'})
  await until(()=>evaluate("location.href==='about:blank'"),'reset viewport')
  await send('Page.navigate',{url})
  await until(()=>evaluate("document.querySelectorAll('.ethepi-article>section').length===18"),'ETHOS class última clase')
  const state=await evaluate(`(()=>{
    const root=document.documentElement, spreads=[...document.querySelectorAll('.ethepi-spread')]
    const scenes=[...document.querySelectorAll('.ethepi-scene svg')]
    const inside=el=>{const r=el.getBoundingClientRect();return r.left>=-2&&r.right<=innerWidth+2&&r.width>0}
    return { viewport:innerWidth,scroll:root.scrollWidth,count:document.querySelectorAll('.ethepi-article>section').length,toc:document.querySelectorAll('.ethepi-index button').length,scenes:scenes.length,allAccessible:scenes.every(s=>s.querySelector('title')&&s.querySelector('desc')&&s.getAttribute('aria-labelledby')),allInside:scenes.every(inside),sideBySide:spreads[0].children[1].getBoundingClientRect().left>spreads[0].children[0].getBoundingClientRect().left+20,meanders:document.querySelectorAll('.ethicsx-meander').length,simple:document.querySelectorAll('.ethepi-spread + .ethepi-simple').length,review:document.querySelectorAll('.ethepi-review').length}
  })()`)
  assert.ok(state.scroll<=state.viewport+3,'Desbordamiento '+width+'x'+height+': '+JSON.stringify(state))
  assert.equal(state.count,18)
  assert.equal(state.toc,18)
  assert.equal(state.scenes,17)
  assert.equal(state.simple,15)
  assert.equal(state.review,15)
  assert.ok(state.allAccessible&&state.allInside&&state.meanders===2)
  assert.equal(state.sideBySide,width>=1200,'Composición de lectura y escena según ancho')
  console.log('OK ETHOS última clase · responsive',width,height)
}
try{
  browser=spawn(chrome,['--headless=new','--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'})
  const portFile=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(portFile),'Chromium',180)
  const port=Number(readFileSync(portFile,'utf8').split('\n')[0])
  const pages=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  ws=new WebSocket(pages.find(x=>x.type==='page').webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true})})
  ws.addEventListener('message',event=>{const obj=JSON.parse(event.data);if(obj.id&&pending.has(obj.id)){const item=pending.get(obj.id);pending.delete(obj.id);obj.error?item.reject(Error(obj.error.message)):item.resolve(obj)}})
  await send('Page.enable')
  await send('Runtime.enable')
  for(const size of [[1920,1080],[1440,900],[1024,768],[768,1024],[390,844],[320,740]])await viewport(...size)
  await evaluate("document.querySelector('.ethepi-review summary').click()")
  assert.ok(await evaluate("document.querySelector('.ethepi-review').open"))
  await evaluate("document.querySelector('.ethepi-index button:last-of-type').click()")
  await until(()=>evaluate("Math.abs(document.querySelector('#ethepi-examen').getBoundingClientRect().top)<innerHeight"),'salto índice')
  assert.equal(await evaluate('location.hash'),'#/semestre/5/etica/clase/ultima-clase')
  assert.equal(await evaluate("document.querySelectorAll('.ethepi-exam-schools details').length"),6)
  await evaluate("document.querySelector('.ethepi-exam-schools summary').click()")
  assert.ok(await evaluate("document.querySelector('.ethepi-exam-schools details').open"))
  console.log('OK ETHOS última clase · navegación, repaso y seis escuelas')
} finally {
  ws?.close()
  browser?.kill('SIGTERM')
  await sleep(180)
  try {rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100})} catch {}
}
