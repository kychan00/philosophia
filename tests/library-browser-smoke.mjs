// Smoke test in a real headless Chromium/Chrome using the DevTools protocol.
// No added browser-testing dependencies; GitHub's Ubuntu runner provides Chrome.
// This verifies DOM navigation and overflow at common phone/iPad viewports.
// It does not replace a manual test on an actual iPad.
import assert from 'node:assert/strict'
import { books, authors } from '../src/data/libraryCatalog.js'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const base = 'http://127.0.0.1:4173/philosophia/#/biblioteca'
const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
const chromeBin = ['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin => spawnSync('which',[bin],{stdio:'ignore'}).status === 0)
assert.ok(chromeBin, 'No se encontró Chrome/Chromium en el entorno de pruebas')

const preview = spawn(process.execPath,
  ['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1',
    '--port','4173','--strictPort'], {stdio: 'ignore'})
const profile = mkdtempSync(join(tmpdir(), 'philosophia-library-'))
let browser, socket
let browserDiagnostics = ''
const pending = new Map()
let seq = 0

function send(method, params={}) {
  if (!socket || socket.readyState !== WebSocket.OPEN)
    return Promise.reject(new Error('Chromium no está conectado'))
  const id = ++seq
  return new Promise((resolve,reject) => {
    pending.set(id,{resolve,reject})
    socket.send(JSON.stringify({id,method,params}))
  })
}

async function evaluate(expression) {
  const value = await send('Runtime.evaluate',
    {expression, returnByValue:true, awaitPromise:true})
  if (value.exceptionDetails)
    throw new Error('Error de navegador: '+value.exceptionDetails.text)
  return value.result?.value
}

async function until(predicate,label,maxChecks=65) {
  for(let i=0;i<maxChecks;i++) {
    try { if(await predicate()) return }
    catch { /* Navegación en curso, volver a consultar. */ }
    await pause(180)
  }
  throw new Error('Timeout: '+label)
}

async function setViewport(width,height) {
  await send('Emulation.setDeviceMetricsOverride',{
    width,height,deviceScaleFactor:2,mobile:width<=768
  })
  await send('Page.navigate',{url:base})
  await until(()=>evaluate("document.querySelectorAll('.library-book').length === " + books.length),
    'Catálogo de '+books.length+' obras '+width+'×'+height)
  const metrics = await evaluate("({width: window.innerWidth, scrollWidth: document.documentElement.scrollWidth, height: window.innerHeight})")
  assert.ok(metrics.scrollWidth <= metrics.width+2,
    'Overflow horizontal en '+width+'×'+height+': '+JSON.stringify(metrics))
  console.log('OK viewport',width,height,metrics)
}

try {
  await until(async () => {
    const result = await fetch('http://127.0.0.1:4173/philosophia/')
    return result.ok
  }, 'servidor Vite preview')
  console.log('Chromium seleccionado:', chromeBin)
  const version = spawnSync(chromeBin,['--version'],{encoding:'utf8'})
  console.log('Versión:', version.stdout?.trim() || version.stderr?.trim())
  browser = spawn(chromeBin, [
    '--headless=new','--no-sandbox','--disable-setuid-sandbox',
    '--disable-dev-shm-usage','--disable-gpu','--no-first-run',
    '--disable-extensions','--remote-debugging-port=0',
    '--user-data-dir='+profile,'about:blank'
  ],{stdio:['ignore','pipe','pipe']})
  browser.stderr?.on('data',chunk=>{browserDiagnostics=(browserDiagnostics+chunk.toString()).slice(-6000)})
  browser.stdout?.on('data',chunk=>{browserDiagnostics=(browserDiagnostics+chunk.toString()).slice(-6000)})
  browser.on('error',error=>{browserDiagnostics+=' browser error: '+error.message})
  const activePort = join(profile,'DevToolsActivePort')
  try { await until(async()=>existsSync(activePort),'puerto de DevTools',250) }
  catch(error){throw new Error(error.message+'; exitCode='+browser.exitCode+'; browser logs='+browserDiagnostics)}
  const port=Number(readFileSync(activePort,'utf8').split('\n')[0])
  const tabs=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  const target=tabs.find(tab=>tab.type==='page')
  assert.ok(target?.webSocketDebuggerUrl, 'No hay pestaña CDP')
  socket=new WebSocket(target.webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{
    socket.addEventListener('open',resolve,{once:true})
    socket.addEventListener('error',reject,{once:true})
  })
  socket.addEventListener('message',event=>{
    const msg=JSON.parse(event.data)
    if(msg.id && pending.has(msg.id)){
      const p=pending.get(msg.id); pending.delete(msg.id)
      msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result)
    }
  })
  await send('Page.enable')
  await send('Runtime.enable')
  for(const [width,height] of [[390,844],[768,1024],[1024,768]]) {
    await setViewport(width,height)
  }
  // Cada cronología pertenece a su tarjeta y conserva el enlace de la clase.
  assert.equal(await evaluate("([...document.querySelectorAll('.library-book')].find(c=>c.querySelector('h3')?.textContent==='Minima Moralia')?.querySelector('.library-timeline-toggle')?.click(),true)"),true)
  await until(()=>evaluate("document.querySelectorAll('.library-book--expanded .library-timeline-entry').length===1"),
    'Cronología de Minima Moralia')
  assert.equal(await evaluate("document.querySelector('.library-book--expanded .library-timeline-info a')?.getAttribute('href')?.includes('/semestre/5/teoria-critica/clase/15-octubre')"),true)
  assert.equal(await evaluate("document.documentElement.scrollWidth <= window.innerWidth+2"),true)
  console.log('OK cronología individual por obra')
  assert.equal(await evaluate("document.querySelector('.library-book--expanded .library-timeline-header h4')?.textContent"),'Clases y actividades')
  // Tablet landscape: switch tabs, verify author-to-work navigation.
  assert.equal(await evaluate("([...document.querySelectorAll('.library-tabs button')].find(b=>b.textContent.includes('Autores'))?.click(), true)"), true)
  await until(()=>evaluate("document.querySelectorAll('.library-author').length===" + authors.length),
    authors.length+' autores')
  assert.equal(await evaluate("([...document.querySelectorAll('.library-author')].find(c=>c.querySelector('h3')?.textContent==='Illouz, Eva')?.querySelector('.library-timeline-toggle')?.click(),true)"),true)
  await until(()=>evaluate("document.querySelectorAll('.library-author--expanded .library-timeline-entry').length>=1"),'Cronología de Eva Illouz')
  assert.equal(await evaluate("document.querySelector('.library-author--expanded .library-timeline-info a')?.getAttribute('href')?.includes('/semestre/5/teoria-critica/clase/15-octubre')"),true)
  console.log('OK cronología individual por autor')
  // Navegación bidireccional: autor → obra → autor, sin perder el detalle.
  assert.equal(await evaluate("document.querySelector('.library-author--expanded .library-related-work')?.click() ?? true"),true)
  await until(()=>evaluate("document.querySelectorAll('.library-book--expanded').length===1"),'Abrir obra desde autor')
  assert.equal(await evaluate("document.querySelector('.library-book--expanded .library-work-author-link')?.click() ?? true"),true)
  await until(()=>evaluate("document.querySelectorAll('.library-author--expanded').length===1"),'Volver al autor desde la obra')
  console.log('OK obra ↔ autor')
  assert.equal(await evaluate("([...document.querySelectorAll('.library-tabs button')].find(b=>b.textContent.includes('Autores'))?.click(),true)"),true)
  await until(()=>evaluate("document.querySelectorAll('.library-author').length===" + authors.length),'Autores tras restaurar')


  assert.equal(await evaluate("([...document.querySelectorAll('.library-author-works')].find(b=>b.getAttribute('aria-label')?.includes('Lukács'))?.click(),true)"),true)
  await until(()=>evaluate("document.querySelectorAll('.library-book').length===2"),
    'Lukács con dos obras')
  assert.equal(await evaluate("document.querySelector('.library-active-author')?.textContent.includes('Lukács')"),true)
  assert.equal(await evaluate("(document.querySelector('.library-active-author button')?.click(), true)"),true)
  await until(()=>evaluate("document.querySelectorAll('.library-book').length===" + books.length),
    'Restaurar catálogo completo')
  console.log('OK navegación autores ↔ obras')
  for(const [width,height] of [[390,844],[768,1024],[1024,768]]) {
    await send('Emulation.setDeviceMetricsOverride',{
      width,height,deviceScaleFactor:2,mobile:width<=768
    })
    await send('Page.navigate',{url:base+'/cartografia'})
    await until(()=>evaluate("document.querySelectorAll('.bc-flow .react-flow__node').length>5"),
      'Cartografía '+width+'×'+height,100)
    const metrics=await evaluate("({overflow:document.documentElement.scrollWidth-window.innerWidth,nodes:document.querySelectorAll('.bc-flow .react-flow__node').length,inspector:!!document.querySelector('.bc-inspector h2')})")
    assert.ok(metrics.overflow<=2,'Desbordamiento en cartografía '+width+'×'+height)
    assert.ok(metrics.inspector&&metrics.nodes>=6,'Cartografía o inspector incompletos')
    console.log('OK cartografía',width,height,metrics)
  }
  assert.equal(await evaluate("([...document.querySelectorAll('.bc-modes button')].find(b=>b.textContent==='Vista general')?.click(),true)"),true)
  await until(()=>evaluate("document.querySelector('.bc-canvas')?.getAttribute('data-mode')==='general'"),'Vista general')
  assert.equal(await evaluate("([...document.querySelectorAll('.bc-modes button')].find(b=>b.textContent==='Red contextual')?.click(),true)"),true)
  await until(()=>evaluate("document.querySelector('.bc-canvas')?.getAttribute('data-mode')==='foco'"),'Foco contextual')
  console.log('OK navegación de modos en cartografía')

} finally {
  if(socket) socket.close()
  if(browser){
    browser.kill('SIGTERM')
    await Promise.race([new Promise(resolve=>browser.once('exit',resolve)),pause(1800)])
  }
  preview.kill('SIGTERM')
  try { rmSync(profile,{recursive:true,force:true,maxRetries:6,retryDelay:250}) }
  catch { /* perfil temporal residual no afecta resultado de las pruebas */ }
}
