// Smoke test del sistema 2D de Lukács en Chrome/Chromium real mediante CDP.
// Verifica granularidad progresiva, navegación básica y overflow en teléfono/iPad.
// No sustituye una prueba manual en un iPad físico.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const base='http://127.0.0.1:4174/philosophia/#/estudios/teoria-critica/lukacs-ontologia-ser-social'
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms))
const chromeBin=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chromeBin,'No se encontró Chrome/Chromium en el entorno de pruebas')

const preview=spawn(process.execPath,
  ['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4174','--strictPort'],
  {stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-lukacs-ontology-'))
let browser,socket
let browserDiagnostics=''
const pending=new Map()
let seq=0

function send(method,params={}){
  if(!socket||socket.readyState!==WebSocket.OPEN)
    return Promise.reject(new Error('Chromium no está conectado'))
  const id=++seq
  return new Promise((resolve,reject)=>{
    pending.set(id,{resolve,reject})
    socket.send(JSON.stringify({id,method,params}))
  })
}

async function evaluate(expression){
  const value=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
  if(value.exceptionDetails) throw new Error('Error de navegador: '+value.exceptionDetails.text)
  return value.result?.value
}

async function until(predicate,label,maxChecks=80){
  for(let i=0;i<maxChecks;i++){
    try{if(await predicate()) return}catch{}
    await pause(180)
  }
  throw new Error('Timeout: '+label)
}

async function navigateViewport(width,height){
  await send('Emulation.setDeviceMetricsOverride',{
    width,height,deviceScaleFactor:2,mobile:width<=768
  })
  await send('Page.navigate',{url:base})
  await until(
    ()=>evaluate("document.querySelectorAll('.marx-flow-canvas .react-flow__node').length===30"),
    '30 nodos estructurales '+width+'×'+height,100
  )
  const metrics=await evaluate("({width:window.innerWidth,scrollWidth:document.documentElement.scrollWidth,nodes:document.querySelectorAll('.marx-flow-canvas .react-flow__node').length,pedagogy:!!document.querySelector('.ph2d-pedagogy'),detailButton:[...document.querySelectorAll('.marx-route-actions button')].some(b=>b.textContent.includes('Detalles · OFF'))})")
  assert.ok(metrics.scrollWidth<=metrics.width+2,
    'Overflow horizontal '+width+'×'+height+': '+JSON.stringify(metrics))
  assert.equal(metrics.nodes,30)
  assert.equal(metrics.pedagogy,true)
  assert.equal(metrics.detailButton,true)
  console.log('OK Lukács viewport',width,height,metrics)
}

try{
  await until(async()=>{
    const result=await fetch('http://127.0.0.1:4174/philosophia/')
    return result.ok
  },'servidor Vite preview')

  browser=spawn(chromeBin,[
    '--headless=new','--no-sandbox','--disable-setuid-sandbox',
    '--disable-dev-shm-usage','--disable-gpu','--no-first-run',
    '--disable-extensions','--remote-debugging-port=0',
    '--user-data-dir='+profile,'about:blank'
  ],{stdio:['ignore','pipe','pipe']})
  browser.stderr?.on('data',chunk=>{browserDiagnostics=(browserDiagnostics+chunk.toString()).slice(-6000)})
  browser.stdout?.on('data',chunk=>{browserDiagnostics=(browserDiagnostics+chunk.toString()).slice(-6000)})
  browser.on('error',error=>{browserDiagnostics+=' browser error: '+error.message})

  const activePort=join(profile,'DevToolsActivePort')
  try{await until(async()=>existsSync(activePort),'puerto de DevTools',250)}
  catch(error){throw new Error(error.message+'; exitCode='+browser.exitCode+'; logs='+browserDiagnostics)}

  const port=Number(readFileSync(activePort,'utf8').split('\n')[0])
  const tabs=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  const target=tabs.find(tab=>tab.type==='page')
  assert.ok(target?.webSocketDebuggerUrl,'No hay pestaña CDP')
  socket=new WebSocket(target.webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{
    socket.addEventListener('open',resolve,{once:true})
    socket.addEventListener('error',reject,{once:true})
  })
  socket.addEventListener('message',event=>{
    const msg=JSON.parse(event.data)
    if(msg.id&&pending.has(msg.id)){
      const p=pending.get(msg.id);pending.delete(msg.id)
      msg.error?p.reject(new Error(msg.error.message)):p.resolve(msg.result)
    }
  })
  await send('Page.enable')
  await send('Runtime.enable')

  for(const [width,height] of [[390,844],[768,1024],[1024,768]]){
    await navigateViewport(width,height)
  }

  assert.equal(await evaluate("([...document.querySelectorAll('.marx-route-actions button')].find(b=>b.textContent.includes('Detalles · OFF'))?.click(),true)"),true)
  await until(
    ()=>evaluate("document.querySelectorAll('.marx-flow-canvas .react-flow__node').length===42"),
    '42 nodos con detalles'
  )
  assert.equal(await evaluate("document.documentElement.scrollWidth<=window.innerWidth+2"),true)
  assert.equal(await evaluate("document.body.textContent.includes('DET.01')"),true)
  console.log('OK capa de detalle 30 → 42')

  assert.equal(await evaluate("([...document.querySelectorAll('.marx-study-routes button')].find(b=>b.textContent.trim()==='Trabajo y praxis')?.click(),true)"),true)
  await until(
    ()=>evaluate("(()=>{const n=document.querySelectorAll('.marx-flow-canvas .react-flow__node').length;return n>2&&n<42})()"),
    'ruta Trabajo y praxis'
  )
  assert.equal(await evaluate("document.querySelector('[data-ph2d-section=\"labor\"]')!==null"),true)
  console.log('OK ruta temática + pedagogía')

  assert.equal(await evaluate("(document.querySelector('.marx-flow-canvas .react-flow__node')?.dispatchEvent(new MouseEvent('click',{bubbles:true})),true)"),true)
  await until(()=>evaluate("!!document.querySelector('.marx-inspector h2')"),'inspector de nodo')
  assert.equal(await evaluate("([...document.querySelectorAll('.marx-open-folio')].find(b=>b.textContent.includes('Abrir folio'))?.click(),true)"),true)
  await until(()=>evaluate("!!document.querySelector('.marx-folio')"),'folio')
  assert.ok(await evaluate("document.querySelector('.marx-folio')?.textContent.includes('SÍNTESIS EDITORIAL')"))
  console.log('OK inspector + folio')

} finally {
  if(socket) socket.close()
  if(browser){
    browser.kill('SIGTERM')
    await Promise.race([new Promise(resolve=>browser.once('exit',resolve)),pause(1800)])
  }
  preview.kill('SIGTERM')
  try{rmSync(profile,{recursive:true,force:true,maxRetries:6,retryDelay:250})}
  catch{}
}
