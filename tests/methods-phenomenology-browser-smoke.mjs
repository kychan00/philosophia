// Smoke de navegador real para la exposición fenomenológica 2D.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const url = 'http://127.0.0.1:4193/philosophia/#/estudio/fenomenologia-metodo/sistema-2d'
const chrome = ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']
  .find(bin => spawnSync('which', [bin], { stdio: 'ignore' }).status === 0)
assert.ok(chrome, 'Chromium no disponible')

const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4193', '--strictPort'], { stdio: 'ignore' })
const profile = mkdtempSync(join(tmpdir(), 'methods-phen2d-'))
let browser, ws, sequence = 0
const pending = new Map()
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++sequence
  pending.set(id, { resolve, reject })
  ws.send(JSON.stringify({ id, method, params }))
})
async function evalJS(expression) {
  const answer = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
  if (answer.exceptionDetails) throw new Error(answer.exceptionDetails.text)
  return answer.result?.result?.value
}
async function until(fn, label, attempts = 180) {
  for (let i = 0; i < attempts; i++) {
    try { if (await fn()) return } catch { /* reintentar */ }
    await sleep(150)
  }
  throw new Error('Timeout: ' + label)
}

const metrics = "(() => { const root=document.querySelector('.phen2d-system'); const elements=[...document.querySelectorAll('.phen2d-system .react-flow__node')].filter(el=>{const r=el.getBoundingClientRect();return r.width>1&&r.height>1}).map(el=>({id:el.getAttribute('data-id'),box:el.getBoundingClientRect()})); const collisions=[]; for(let i=0;i<elements.length;i++) for(let j=i+1;j<elements.length;j++){const a=elements[i].box,b=elements[j].box;const x=Math.min(a.right,b.right)-Math.max(a.left,b.left);const y=Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top);if(x>2&&y>2)collisions.push(elements[i].id+' ~ '+elements[j].id)} return {count:elements.length,collisions,selected:document.querySelector('.phen2d-system .react-flow__node.selected')?.getAttribute('data-id')||null,simple:document.querySelector('.phen2d-system .m21-plain')?.textContent||'',say:document.querySelector('.phen2d-system .phen2d-say')?.textContent||'',inspector:document.querySelector('.phen2d-system .phen2d-inspector')?.getBoundingClientRect().width||0,scroll:document.documentElement.scrollWidth,width:innerWidth,chapters:document.querySelectorAll('.phen2d-system .m19-chapters button').length,projection:root?.classList.contains('projection')||false,columns:getComputedStyle(document.querySelector('.phen2d-system .phen2d-workspace')).gridTemplateColumns}; })()"

async function viewport(width, height) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 2, mobile: width <= 768 })
  await send('Page.navigate', { url: 'about:blank' })
  await until(() => evalJS("location.href==='about:blank'"), 'reinicio')
  await send('Page.navigate', { url })
  await until(() => evalJS("document.querySelector('.phen2d-page h1')?.textContent.includes('Comprender la experiencia')"), 'página 2D')
  await until(() => evalJS("document.querySelectorAll('.phen2d-system .react-flow__node').length===8"), 'nodos del acto I')
  await sleep(250)
  const state = await evalJS(metrics)
  assert.equal(state.count, 8)
  assert.deepEqual(state.collisions, [], 'solapamiento en ' + width + 'x' + height)
  assert.equal(state.selected, 'm1')
  assert.ok(state.simple.includes('En palabras simples:'), 'falta explicación sencilla')
  assert.ok(state.say.includes('Para exponer:'), 'falta frase de proyección')
  assert.ok(state.inspector > 260, 'inspector demasiado estrecho')
  assert.ok(state.scroll <= state.width + 3, 'overflow global ' + JSON.stringify(state))
  assert.equal(state.chapters, 3)
  if (width <= 1100) assert.ok(!state.columns.includes('430px'), 'inspector lateral rígido en tablet/teléfono')
  console.log('Fenomenología 2D · pantalla', width, height, state)
}

try {
  await until(async () => { try { return (await fetch('http://127.0.0.1:4193/philosophia/')).ok } catch { return false } }, 'vite preview')
  browser = spawn(chrome, ['--headless=new', '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--no-first-run', '--disable-extensions', '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank'], { stdio: 'ignore' })
  const portFile = join(profile, 'DevToolsActivePort')
  await until(() => existsSync(portFile), 'cdp', 220)
  const port = Number(readFileSync(portFile, 'utf8').split('\n')[0])
  const pages = await (await fetch('http://127.0.0.1:' + port + '/json/list')).json()
  ws = new WebSocket(pages.find(t => t.type === 'page').webSocketDebuggerUrl)
  await new Promise((resolve, reject) => { ws.addEventListener('open', resolve, { once: true }); ws.addEventListener('error', reject, { once: true }) })
  ws.addEventListener('message', event => {
    const answer = JSON.parse(event.data)
    if (answer.id && pending.has(answer.id)) {
      const p = pending.get(answer.id); pending.delete(answer.id)
      answer.error ? p.reject(new Error(answer.error.message)) : p.resolve(answer)
    }
  })
  await send('Page.enable')
  await send('Runtime.enable')

  for (const size of [[1440, 900], [768, 1024], [1024, 768], [390, 844]]) await viewport(...size)

  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })
  await send('Page.navigate', { url })
  await until(() => evalJS("document.querySelectorAll('.phen2d-system .react-flow__node').length===8"), 'recarga desktop')

  await evalJS("([...document.querySelectorAll('.phen2d-system .m19-chapters button')].find(b=>b.textContent.includes('Aplicación a un caso'))?.click(),true)")
  await until(() => evalJS("document.querySelectorAll('.phen2d-system .react-flow__node').length===4"), 'aplicación')
  await sleep(250)
  assert.deepEqual((await evalJS(metrics)).collisions, [], 'colisiones en aplicación')

  await evalJS("(document.querySelector('.phen2d-system .phen2d-project')?.click(),true)")
  await until(() => evalJS("document.querySelector('.phen2d-system.projection')!==null"), 'modo proyección')
  await until(() => evalJS("document.querySelectorAll('.phen2d-system .react-flow__node').length===12"), 'atlas completo en proyección')
  await until(() => evalJS("document.querySelector('.phen2d-system .phen2d-lesson')?.textContent.includes('PASO 1 / 12')"), 'guía de proyección')
  await sleep(300)
  const state = await evalJS(metrics)
  assert.equal(state.count, 12)
  assert.deepEqual(state.collisions, [], 'colisiones en atlas completo')
  assert.equal(state.projection, true)

  await evalJS("([...document.querySelectorAll('.phen2d-system .m19-step-buttons button')].find(b=>b.textContent.includes('Siguiente'))?.click(),true)")
  await until(() => evalJS("document.querySelector('.phen2d-system .phen2d-lesson')?.textContent.includes('PASO 2 / 12')"), 'avance de proyección')
  assert.equal((await evalJS(metrics)).selected, 'm2')

  await evalJS("([...document.querySelectorAll('.phen2d-system .phen2d-head-actions button')].find(b=>b.textContent.includes('Salir de proyección'))?.click(),true)")
  await until(() => evalJS("document.querySelector('.phen2d-system.projection')===null"), 'salida de proyección')
  console.log('OK · 12 nodos, método + aplicación, responsive y proyección verificados')
} finally {
  ws?.close()
  browser?.kill('SIGTERM')
  server.kill('SIGTERM')
  await sleep(250)
  try { rmSync(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 150 }) } catch { /* limpieza */ }
}
