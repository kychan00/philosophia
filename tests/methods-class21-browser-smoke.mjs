// Smoke de navegador real para Métodos 21 oct: geometría, guía, inspector y fullscreen.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const url = 'http://127.0.0.1:4187/philosophia/#/semestre/5/metodos-de-investigacion/clase/21-octubre'
const chrome = ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']
  .find(bin => spawnSync('which', [bin], { stdio: 'ignore' }).status === 0)
assert.ok(chrome, 'Chromium no disponible')

const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4187', '--strictPort'], { stdio: 'ignore' })
const profile = mkdtempSync(join(tmpdir(), 'methods-21oct-'))
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
async function until(fn, label, attempts = 160) {
  for (let i = 0; i < attempts; i++) {
    try { if (await fn()) return } catch { /* reintentar */ }
    await sleep(150)
  }
  throw new Error('Timeout: ' + label)
}
const metrics = String.raw`(() => {
 const elements = [...document.querySelectorAll('.m21-system .m19-canvas .react-flow__node')]
  .filter(el => {const r = el.getBoundingClientRect(); return r.width > 1 && r.height > 1})
  .map(el => ({ id: el.getAttribute('data-id'), box: el.getBoundingClientRect() }))
 const collisions = []
 for (let i = 0; i < elements.length; i++) for (let j = i + 1; j < elements.length; j++) {
   const a = elements[i].box, b = elements[j].box
   const x = Math.min(a.right, b.right) - Math.max(a.left, b.left)
   const y = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top)
   if (x > 2 && y > 2) collisions.push(elements[i].id + ' ~ ' + elements[j].id)
 }
 return {
   count: elements.length, collisions,
   selected: document.querySelector('.m21-system .react-flow__node.selected')?.getAttribute('data-id'),
   simple: document.querySelector('.m21-system .m21-plain')?.textContent || '',
   inspector: document.querySelector('.m21-system .m19-inspector')?.getBoundingClientRect().width || 0,
   scroll: document.documentElement.scrollWidth, width: innerWidth,
   chapters: document.querySelectorAll('.m21-system .m19-chapters button').length,
   columns: getComputedStyle(document.querySelector('.m21-system .m19-workspace')).gridTemplateColumns
 }
})()`

async function viewport(width, height) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 2, mobile: width <= 768 })
  await send('Page.navigate', { url: 'about:blank' })
  await until(() => evalJS("location.href==='about:blank'"), 'reinicio')
  await send('Page.navigate', { url })
  await until(() => evalJS("document.querySelector('.m21-page h1')?.textContent.includes('El miedo')"), 'clase')
  await until(() => evalJS("document.querySelectorAll('.m21-system .react-flow__node').length === 4"), 'nodos de sección')
  let state = await evalJS(metrics)
  assert.equal(state.count, 4)
  assert.deepEqual(state.collisions, [], 'solapamiento en ' + width + 'x' + height)
  assert.equal(state.selected, 'p1')
  assert.ok(state.simple.includes('En palabras simples:'), 'falta explicación sencilla')
  assert.ok(state.inspector > 260, 'inspector demasiado estrecho')
  assert.ok(state.scroll <= state.width + 3, 'overflow de página ' + JSON.stringify(state))
  assert.equal(state.chapters, 4)
  if (width <= 1050) assert.ok(!state.columns.includes('410px'), 'inspector lateral en iPad')
  console.log('Métodos 21 oct · pantalla', width, height, state)
}
try {
  await until(async () => { try { return (await fetch('http://127.0.0.1:4187/philosophia/')).ok } catch { return false } }, 'vite preview')
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
  await send('Page.enable'); await send('Runtime.enable')
  for (const size of [[1440, 900], [768, 1024], [1024, 768], [390, 844]]) await viewport(...size)
  await evalJS("([...document.querySelectorAll('.m21-system .m19-chapters button')].find(b=>b.textContent.includes('Noesis y noema'))?.click(),true)")
  await until(() => evalJS("document.querySelectorAll('.m21-system .react-flow__node').length===5"), 'sección II')
  assert.deepEqual((await evalJS(metrics)).collisions, [])
  await evalJS("([...document.querySelectorAll('.m21-system .m19-tools button')].find(b=>b.textContent.includes('Iniciar guía'))?.click(),true)")
  await until(() => evalJS("document.querySelector('.m21-system .m19-lesson')?.textContent.includes('PASO 1 / 5')"), 'guía')
  await evalJS("([...document.querySelectorAll('.m21-system .m19-step-buttons button')].find(b=>b.textContent.includes('Siguiente'))?.click(),true)")
  await until(() => evalJS("document.querySelector('.m21-system .m19-lesson')?.textContent.includes('PASO 2 / 5')"), 'guía siguiente')
  assert.equal((await evalJS(metrics)).selected, 'i2')
  await evalJS("([...document.querySelectorAll('.m21-system .m19-tools button')].find(b=>b.textContent.includes('Estudiar'))?.click(),true)")
  await until(() => evalJS("document.querySelector('.m21-system .m19-options button')!==null"), 'modo estudio')
  await evalJS("document.querySelector('.m21-system .m19-options button')?.click()")
  await until(() => evalJS("document.querySelector('.m21-system .m19-feedback')!==null"), 'retroalimentación')
  await evalJS("document.querySelector('.m21-system .m19-workspace-head>button')?.click()")
  await until(() => evalJS("document.querySelector('.m21-system.expanded .m19-inspector')!==null"), 'fullscreen con inspector')
  await evalJS("document.querySelector('.m21-system .m19-workspace-head>button')?.click()")
  await evalJS("([...document.querySelectorAll('.m21-system .m19-chapters button')].find(b=>b.textContent.includes('Atlas completo'))?.click(),true)")
  await until(() => evalJS("document.querySelectorAll('.m21-system .react-flow__node').length===17"), 'atlas completo')
  assert.deepEqual((await evalJS(metrics)).collisions, [])
  console.log('OK · guías, estudio, fullscreen y 17 nodos sin colisiones')
} finally {
  ws?.close(); browser?.kill('SIGTERM'); server.kill('SIGTERM'); await sleep(250)
  try { rmSync(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 150 }) } catch { /* limpieza */ }
}
