import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const url='http://127.0.0.1:4183/philosophia/#/semestre/5/filosofia-analitica/clase/19-octubre'
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible')

const server=spawn(process.execPath,
  ['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4183','--strictPort'],
  {stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-analytic19-'))
let browser,ws
const pending=new Map()
let id=0
const sleep=ms=>new Promise(r=>setTimeout(r,ms))
function send(method,params={}){
  const call=++id
  return new Promise((resolve,reject)=>{
    pending.set(call,{resolve,reject})
    ws.send(JSON.stringify({id:call,method,params}))
  })
}
async function evalJS(expression){
  const v=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
  if(v.exceptionDetails) throw new Error(v.exceptionDetails.text)
  return v.result?.result?.value
}
async function until(fn,label,tries=140){
  for(let i=0;i<tries;i++){try{if(await fn())return}catch{}await sleep(150)}
  throw new Error('Timeout: '+label)
}

async function check(width,height){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<=768})
  await send('Page.navigate',{url:'about:blank'})
  await until(()=>evalJS("location.href==='about:blank'"),'reset')
  await send('Page.navigate',{url})
  await until(()=>evalJS("document.querySelector('h1')?.textContent.includes('Prehistoria')"),'class loaded')
  const state=await evalJS(`(()=>{
    const root=document.documentElement
    const schemas=[...document.querySelectorAll('.ac1910-schema-panel .animated-concept-schema__svg')]
      .map(x=>({w:x.getBoundingClientRect().width,h:x.getBoundingClientRect().height}))
    const source=document.querySelector('.ac1910-source-card')
    const classLayer=[...document.querySelectorAll('.ac1910-provenance')].some(x=>x.textContent.includes('EXPLICACIÓN DE CLASE'))
    const glockLink=[...document.querySelectorAll('a')].some(x=>x.getAttribute('href')?.includes('glock-capitulo-2'))
    return {
      width:innerWidth,scroll:root.scrollWidth,schemas,
      sourceWidth:source?.getBoundingClientRect().width||0,
      classLayer,glockLink,
      sections:document.querySelectorAll('.ac1910-article>section').length
    }
  })()`)
  assert.ok(state.scroll<=state.width+3,'overflow '+width+'x'+height+' '+JSON.stringify(state))
  assert.equal(state.schemas.length,3,'faltan esquemas')
  state.schemas.forEach((x,i)=>assert.ok(x.h>390,'esquema comprimido '+i+' '+JSON.stringify(x)))
  assert.ok(state.sourceWidth>250,'tarjeta de procedencia ilegible')
  assert.ok(state.classLayer,'falta capa docente')
  assert.ok(state.glockLink,'falta enlace al sistema Glock')
  assert.equal(state.sections,8)
  console.log('OK Analítica 19 oct',width,height,state)
}

try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4183/philosophia/')).ok}catch{return false}},'vite')
  browser=spawn(chrome,[
    '--headless=new','--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage',
    '--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0',
    '--user-data-dir='+profile,'about:blank'
  ],{stdio:'ignore'})
  const portFile=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(portFile),'cdp',200)
  const port=Number(readFileSync(portFile,'utf8').split('\n')[0])
  const tabs=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{
    ws.addEventListener('open',resolve,{once:true})
    ws.addEventListener('error',reject,{once:true})
  })
  ws.addEventListener('message',evt=>{
    const obj=JSON.parse(evt.data)
    if(obj.id&&pending.has(obj.id)){
      const p=pending.get(obj.id);pending.delete(obj.id)
      obj.error?p.reject(new Error(obj.error.message)):p.resolve(obj)
    }
  })
  await send('Page.enable');await send('Runtime.enable')
  for(const size of [[1440,900],[768,1024],[1024,768],[390,844]]) await check(...size)
} finally {
  ws?.close();browser?.kill('SIGTERM');server.kill('SIGTERM');await sleep(200)
  try{rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100})}catch{}
}
