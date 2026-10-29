// Regresión visual BUG-030 · una sola lámina visible en toda la presentación.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const baseUrl = 'http://127.0.0.1:4192/philosophia/estudio/dialectica-comparada.html'
const chrome = ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']
  .find(bin => spawnSync('which', [bin], { stdio: 'ignore' }).status === 0)
assert.ok(chrome, 'Chromium no disponible')

const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4192', '--strictPort'], { stdio: 'ignore' })
const profile = mkdtempSync(join(tmpdir(), 'dialectica-33-'))
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
    await sleep(120)
  }
  throw new Error('Timeout: ' + label)
}
async function readState() {
  return evalJS(String.raw`(() => {
    const all = [...document.querySelectorAll('.slide')]
    const active = all.filter(el => el.classList.contains('active'))
    const visible = all.filter(el => {
      const style = getComputedStyle(el)
      const r = el.getBoundingClientRect()
      return style.display !== 'none' && style.visibility !== 'hidden' && r.width > 1 && r.height > 1
    })
    const current = active[0]
    return {
      total: all.length,
      active: active.length,
      visible: visible.length,
      counter: document.querySelector('#counter')?.textContent?.trim() || '',
      label: current?.getAttribute('aria-label') || '',
      rootClasses: current?.className || '',
      hash: location.hash
    }
  })()`)
}
async function viewport(width, height) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width <= 768 })
  await send('Page.navigate', { url: baseUrl + '#slide-1' })
  await until(() => evalJS("document.querySelectorAll('.slide').length===33"), '33 láminas cargadas')

  for (let n = 1; n <= 33; n++) {
    await evalJS(`location.hash='#slide-${n}'`)
    await until(() => evalJS(`document.querySelector('#counter')?.textContent?.trim()==='${String(n).padStart(2,'0')} / 33'`), 'contador lámina ' + n)
    const state = await readState()
    assert.equal(state.total, 33, 'cantidad total en ' + width + 'x' + height)
    assert.equal(state.active, 1, 'debe haber una sola .slide.active en lámina ' + n)
    assert.equal(state.visible, 1, 'debe haber una sola lámina visible en lámina ' + n + ': ' + JSON.stringify(state))
    assert.equal(state.rootClasses, 'slide active', 'layout filtrado al root en lámina ' + n)
    assert.ok(state.label.includes('Diapositiva ' + n + ' de 33'), 'aria-label incorrecto ' + JSON.stringify(state))
  }

  // Botones: 33 → anterior → 32 → siguiente → 33.
  await evalJS("document.querySelector('#prev')?.click()")
  await until(() => evalJS("document.querySelector('#counter')?.textContent?.trim()==='32 / 33'"), 'botón anterior')
  assert.equal((await readState()).visible, 1)
  await evalJS("document.querySelector('#next')?.click()")
  await until(() => evalJS("document.querySelector('#counter')?.textContent?.trim()==='33 / 33'"), 'botón siguiente')
  assert.equal((await readState()).visible, 1)
  console.log('Dialéctica · 33/33 láminas aisladas ·', width + 'x' + height)
}

try {
  await until(async () => { try { return (await fetch('http://127.0.0.1:4192/philosophia/')).ok } catch { return false } }, 'vite preview')
  browser = spawn(chrome, ['--headless=new', '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--no-first-run', '--disable-extensions', '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank'], { stdio: 'ignore' })
  const portFile = join(profile, 'DevToolsActivePort')
  await until(() => existsSync(portFile), 'cdp', 220)
  const port = Number(readFileSync(portFile, 'utf8').split('\n')[0])
  const pages = await (await fetch('http://127.0.0.1:' + port + '/json/list')).json()
  ws = new WebSocket(pages.find(t => t.type === 'page').webSocketDebuggerUrl)
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true })
    ws.addEventListener('error', reject, { once: true })
  })
  ws.addEventListener('message', event => {
    const answer = JSON.parse(event.data)
    if (answer.id && pending.has(answer.id)) {
      const p = pending.get(answer.id)
      pending.delete(answer.id)
      answer.error ? p.reject(new Error(answer.error.message)) : p.resolve(answer)
    }
  })
  await send('Page.enable')
  await send('Runtime.enable')
  await viewport(1440, 900)
  await viewport(390, 844)
} finally {
  ws?.close()
  browser?.kill('SIGTERM')
  server.kill('SIGTERM')
  await sleep(250)
  try { rmSync(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 150 }) } catch { /* limpieza */ }
}
