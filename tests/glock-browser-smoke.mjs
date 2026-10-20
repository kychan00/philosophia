// QA de Glock en Chromium: geometría real, rutas, selección, lectura responsive.
// No sustituye revisión humana en Safari/iPad físico.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const url = 'http://127.0.0.1:4182/philosophia/#/semestre/5/filosofia-analitica/lectura/glock-capitulo-2'
const chrome = ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']
  .find(bin => spawnSync('which', [bin], { stdio: 'ignore' }).status === 0)
assert.ok(chrome, 'Chromium no disponible')
const server = spawn(process.execPath,
  ['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4182','--strictPort'],
  { stdio: 'ignore' })
const profile = mkdtempSync(join(tmpdir(), 'philosophia-glock-'))
let processChrome, ws
const pending = new Map()
let count = 0
const sleep = ms => new Promise(r => setTimeout(r, ms))

function send(method, params = {}) {
  assert.ok(ws?.readyState === WebSocket.OPEN)
  const id = ++count
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject })
    ws.send(JSON.stringify({ id, method, params }))
  })
}
async function evalJS(expression) {
  const v = await send('Runtime.evaluate', { expression, returnByValue:true, awaitPromise:true })
  if (v.exceptionDetails) throw new Error(v.exceptionDetails.text)
  return v.result?.value
}
async function until(predicate, label, attempts = 130) {
  for (let i = 0; i < attempts; i++) {
    try { if (await predicate()) return } catch {}
    await sleep(160)
  }
  throw new Error('Timeout: ' + label)
}
const metrics = `(()=>{
  const nodes=[...document.querySelectorAll('.glock-canvas .react-flow__node')]
    .filter(el=>{const r=el.getBoundingClientRect();const st=getComputedStyle(el);return st.display!=='none'&&st.visibility!=='hidden'&&r.width>1&&r.height>1})
    .map(el=>({id:el.getAttribute('data-id'),r:el.getBoundingClientRect(),opacity:Number(getComputedStyle(el).opacity)}))
  const hits=[]
  for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
    const a=nodes[i],b=nodes[j]
    const x=Math.min(a.r.right,b.r.right)-Math.max(a.r.left,b.r.left)
    const y=Math.min(a.r.bottom,b.r.bottom)-Math.max(a.r.top,b.r.top)
    if(x>2&&y>2)hits.push(a.id+' ~ '+b.id)
  }
  const selected=document.querySelector('.glock-canvas .react-flow__node.selected')
  const rect=selected?.getBoundingClientRect()
  const svg=document.querySelector('.glock-schema .animated-concept-schema__svg')
  return {
    hits, count:nodes.length, selected:selected?.getAttribute('data-id'),
    selectedOpacity:selected?Number(getComputedStyle(selected).opacity):0,
    width:innerWidth, scroll:document.documentElement.scrollWidth,
    schemaHeight:svg?.getBoundingClientRect().height||0,
    containerHeight:document.querySelector('.glock-schema .animated-concept-schema')?.getBoundingClientRect().height||0,
    selectedRect:rect?{width:rect.width,height:rect.height}:null,
    offenders:[...document.querySelectorAll('main.glock-shell *')].filter(el=>{
      const r=el.getBoundingClientRect();const cs=getComputedStyle(el)
      return r.width>0&&r.right>innerWidth+4&&cs.position!=='fixed'
    }).slice(0,8).map(el=>({tag:el.tagName,cls:String(el.className).slice(0,90),
      right:Math.round(el.getBoundingClientRect().right)})),
  }
})()`
async function navigate(width, height) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor:2, mobile: width <= 768 })
  // Mismo HashRouter URL no reinicia React si Chromium lo trata como navegación al mismo documento.
  await send('Page.navigate',{url:'about:blank'})
  await until(() => evalJS("location.href==='about:blank'"), 'reinicio página')
  await send('Page.navigate',{url})
  await until(() => evalJS("document.querySelector('.glock-inspector h3')?.textContent.includes('Análisis: desatar')"), 'Glock cargado '+width)
  await until(async() => (await evalJS(metrics))?.count > 2, 'React Flow renderizado')
  const state=await evalJS(metrics)
  assert.deepEqual(state.hits,[], 'Tarjetas cruzadas: '+width+'×'+height+' '+state.hits.join(', '))
  assert.equal(state.selected,'G01','Ruta inicial debe iniciar en G01')
  assert.ok(state.selectedOpacity >= .9, 'Seleccionado debe ser visible')
  assert.ok(state.scroll <= state.width + 3, 'Scroll global horizontal en '+width+'×'+height+': '+JSON.stringify(state))
  assert.ok(state.schemaHeight > 390, 'SVG del esquema comprimido '+width+'×'+height)
  console.log('OK Glock viewport',width,height,state.count,state.schemaHeight)

  assert.equal(await evalJS("(()=>{document.querySelectorAll('.glock-inspector-top button')[1].click();return true})()"),true)
  await until(() => evalJS("document.querySelector('.glock-inspector h3')?.textContent==='Análisis descomposicional'"), 'Inspector avanza')
  const next=await evalJS(metrics)
  assert.equal(next.selected,'G02')
  assert.ok(next.selectedOpacity >= .9)
  assert.deepEqual(next.hits,[])

  // Navegación a otra sección no debe dejar seleccionado un nodo de la ruta previa.
  assert.equal(await evalJS("(()=>{[...document.querySelectorAll('.glock-route-rail button')].find(b=>b.textContent.includes('06 · Filosofía trascendental')).click();return true})()"),true)
  await until(() => evalJS("document.querySelector('.glock-inspector h3')?.textContent==='Revolución copernicana'"),'cambio ruta')
  const altered=await evalJS(metrics)
  assert.equal(altered.selected,'G14')
  assert.ok(altered.selectedOpacity>=.9)
  assert.deepEqual(altered.hits,[])
}
try {
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4182/philosophia/')).ok}catch{return false}}, 'servidor preview')
  processChrome=spawn(chrome,[
    '--headless=new','--no-sandbox','--disable-setuid-sandbox',
    '--disable-dev-shm-usage','--disable-gpu','--no-first-run',
    '--disable-extensions','--remote-debugging-port=0',
    '--user-data-dir='+profile,'about:blank',
  ], { stdio:'ignore' })
  const portFile=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(portFile),'Chrome CDP',200)
  const port=Number(readFileSync(portFile,'utf8').split('\n')[0])
  const tabs=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true})})
  ws.addEventListener('message',evt=>{
    const obj=JSON.parse(evt.data)
    if(obj.id&&pending.has(obj.id)){
      const p=pending.get(obj.id); pending.delete(obj.id)
      obj.error?p.reject(new Error(obj.error.message)):p.resolve(obj.result)
    }
  })
  await send('Page.enable');await send('Runtime.enable')
  for (const [width,height] of [[1440,900],[768,1024],[1024,768],[390,844]])
    await navigate(width,height)
} finally {
  ws?.close()
  processChrome?.kill('SIGTERM')
  server.kill('SIGTERM')
  await sleep(250)
  try { rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:150}) } catch {}
}
