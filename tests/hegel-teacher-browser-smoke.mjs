// Verificación de los 17 folios docentes Hegel/Croce integrados en una sola lectura.
// No sustituye una prueba manual en Safari/iPad físico.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const base='http://127.0.0.1:4175/philosophia/#/tareas/ontologia-ii/hegel-croce-dialectica'
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms))
const chromeBin=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chromeBin,'Falta Chrome/Chromium para smoke de folios Hegel')
const preview=spawn(process.execPath,
  ['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4175','--strictPort'],
  {stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-hegel-folios-'))
let browser,socket
const pending=new Map()
let seq=0
function send(method,params={}){
  if(!socket||socket.readyState!==WebSocket.OPEN)return Promise.reject(new Error('CDP desconectado'))
  const id=++seq
  return new Promise((resolve,reject)=>{
    pending.set(id,{resolve,reject})
    socket.send(JSON.stringify({id,method,params}))
  })
}
async function evaluate(expression){
  const result=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
  if(result.exceptionDetails)throw new Error('Excepción del navegador: '+result.exceptionDetails.text)
  return result.result?.value
}
async function until(predicate,label,maxChecks=120){
  for(let i=0;i<maxChecks;i++){
    try{if(await predicate())return}catch{}
    await pause(180)
  }
  throw new Error('No se cumplió: '+label)
}
const expected={E01:5,E02:5,E03:5,E04:3,E05:4,E06:4,E07:4,E08:3,E09:4,F01:6,F02:5,F03:6,F04:3,F05:3,F06:4,F07:6,F08:3}
async function validateFolio(code,count){
  const opened=await evaluate(`(()=>{
    const el=document.querySelector('.react-flow__node[data-id="${code}"]')
    const button=el?.querySelector('.marx-flow-footer button')
    if(!button)return false
    button.click()
    return true
  })()`)
  assert.equal(opened,true,'Sin botón de folio: '+code)
  await until(()=>evaluate("!!document.querySelector('.hegel-teacher-document.is-folio')"),'Folio '+code)
  const result=await evaluate(`(()=>{
    const doc=document.querySelector('.hegel-teacher-document.is-folio')
    const schema=document.querySelector('.marx-folio-schema-panel svg')
    const nodes=[...(schema?.querySelectorAll('.animated-concept-schema__nodes .concept-schema-node')||[])]
      .map(el=>({id:el.getAttribute('data-concept-node'),r:el.getBoundingClientRect()}))
    let overlaps=0
    for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
      const a=nodes[i].r,b=nodes[j].r
      if(Math.min(a.right,b.right)-Math.max(a.left,b.left)>3 &&
         Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>3)overlaps++
    }
    return {
      items:doc.querySelectorAll('.hegel-teacher-document__text li').length,
      hasAnalysis:doc.textContent.includes('RECONSTRUCCIÓN SISTÉMICA'),
      hasText:doc.textContent.includes('Texto explícito de la diapositiva'),
      diagramNodes:nodes.length,
      overlapCount:overlaps,
      globalOverflow:document.documentElement.scrollWidth>window.innerWidth+3,
      widths:nodes.map(n=>Math.round(n.r.width)),
    }
  })()`)
  assert.equal(result.items,count,code+': fragmentos documentales incompletos')
  assert.equal(result.hasAnalysis,true,code+': sin análisis diferenciado')
  assert.equal(result.hasText,true,code+': sin texto de diapositiva')
  assert.ok(result.diagramNodes>=5,code+': esquema corto')
  assert.equal(result.overlapCount,0,code+': figuras superpuestas')
  assert.ok(result.widths.every(w=>w>=100),code+': geometría ilegible')
  assert.equal(result.globalOverflow,false,code+': desplazamiento horizontal global')
  await evaluate("document.querySelector('.marx-folio button[aria-label=Cerrar]')?.click()")
  await until(()=>evaluate("!document.querySelector('.hegel-teacher-document.is-folio')"),'Cierre '+code)
  console.log('OK Hegel folio',code,result.items,'fragmentos',result.diagramNodes,'figuras')
}
try{
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4175/philosophia/')).ok}catch{return false}},'Servidor preview',140)
  browser=spawn(chromeBin,['--headless=new','--no-sandbox','--disable-setuid-sandbox',
    '--disable-dev-shm-usage','--disable-gpu','--no-first-run','--disable-extensions',
    '--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],
    {stdio:'ignore'})
  const activePort=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(activePort),'Puerto Chromium',220)
  const port=Number(readFileSync(activePort,'utf8').split('\n')[0])
  const targets=await(await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  const page=targets.find(t=>t.type==='page')
  assert.ok(page?.webSocketDebuggerUrl,'Sin página Chromium')
  socket=new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{
    socket.addEventListener('open',resolve,{once:true})
    socket.addEventListener('error',reject,{once:true})
  })
  socket.addEventListener('message',event=>{
    const response=JSON.parse(event.data)
    if(response.id && pending.has(response.id)){
      const p=pending.get(response.id);pending.delete(response.id)
      response.error?p.reject(new Error(response.error.message)):p.resolve(response.result)
    }
  })
  await send('Page.enable')
  await send('Runtime.enable')
  for(const [width,height,codes] of [
    [834,1112,['F01','F02','F03','F04','F05','F06','F07','F08','E03','E04','E05','E06','E07','E08','E09']],
    [1024,768,['E01','E02']],
  ]){
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:false})
    await send('Page.navigate',{url:base})
    await until(()=>evaluate("document.querySelectorAll('.react-flow__node').length===169"),'169 nodos en '+width+'×'+height,160)
    assert.equal(await evaluate("document.body.textContent.includes('Ver las presentaciones')"),false,'Debe desaparecer la ruta separada')
    assert.equal(await evaluate("([...document.querySelectorAll('.hegel-reading-actions button')].filter(b=>b.textContent.includes('Explorar lectura')).length)"),1)
    for(const code of codes)await validateFolio(code,expected[code])
  }
  console.log('OK Hegel: 17 diapositivas íntegras y esquemas sin solapes en viewports tablet')
} finally {
  if(socket)socket.close()
  if(browser){browser.kill('SIGTERM');await Promise.race([new Promise(r=>browser.once('exit',r)),pause(1500)])}
  preview.kill('SIGTERM')
  try{rmSync(profile,{recursive:true,force:true,maxRetries:5,retryDelay:200})}catch{}
}
