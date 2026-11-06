// Verificación real en Chromium: escritorio, iPad horizontal/vertical y teléfono.
// Un navegador emulado no sustituye una comprobación en Safari/iPad físico.
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const url = 'http://127.0.0.1:4198/philosophia/#/semestre/5/etica/seneca/firmeza-del-sabio/sistema-2d'
const chrome = ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']
  .find(bin => spawnSync('which', [bin], { stdio: 'ignore' }).status === 0)

assert.ok(chrome, 'Chromium no disponible')

const preview = spawn(
  process.execPath,
  ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4198', '--strictPort'],
  { stdio: 'ignore' },
)
const profile = mkdtempSync(join(tmpdir(), 'philosophia-seneca-'))
let browser
let ws
const pending = new Map()
let serial = 0
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const send = (method, params = {}) => new Promise((resolve, reject) => {
  if (!ws || ws.readyState !== WebSocket.OPEN) return reject(new Error('CDP no disponible'))
  const id = ++serial
  pending.set(id, { resolve, reject })
  ws.send(JSON.stringify({ id, method, params }))
})

async function evaluate(expression) {
  const response = await send('Runtime.evaluate', {
    expression,
    returnByValue: true,
    awaitPromise: true,
  })
  if (response.exceptionDetails) throw Error(response.exceptionDetails.text)
  return response.result?.value
}

async function until(fn, label, checks = 160) {
  for (let i = 0; i < checks; i += 1) {
    try {
      if (await fn()) return
    } catch {}
    await sleep(140)
  }
  throw Error('No llegó: ' + label)
}

const metrics = `(() => {
  const rects = [...document.querySelectorAll('.seneca2d-canvas .react-flow__node')]
    .filter(node => {
      const rect = node.getBoundingClientRect()
      const style = getComputedStyle(node)
      return rect.width > 1 && rect.height > 1 && style.display !== 'none' && style.visibility !== 'hidden'
    })
    .map(node => ({ id: node.getAttribute('data-id'), rect: node.getBoundingClientRect() }))

  const hits = []
  for (let i = 0; i < rects.length; i += 1) {
    for (let j = i + 1; j < rects.length; j += 1) {
      const a = rects[i].rect
      const b = rects[j].rect
      if (
        Math.min(a.right, b.right) - Math.max(a.left, b.left) > 2 &&
        Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 2
      ) hits.push(rects[i].id + '/' + rects[j].id)
    }
  }

  const active = document.querySelector('.seneca2d-canvas .react-flow__node.selected')
  return {
    count: rects.length,
    hits,
    positions: Object.fromEntries(rects.map(item => [
      item.id,
      {
        x: item.rect.left + item.rect.width / 2,
        y: item.rect.top + item.rect.height / 2,
      },
    ])),
    selected: active?.getAttribute('data-id') || null,
    opacity: active ? Number(getComputedStyle(active).opacity) : 0,
    width: innerWidth,
    scroll: document.documentElement.scrollWidth,
    inspector: !!document.querySelector('.seneca2d-inspector h2'),
    schema: !!document.querySelector('.seneca2d-inspector .animated-concept-schema'),
    minimap: !!document.querySelector('.react-flow__minimap'),
  }
})()`

try {
  await until(async () => {
    const response = await fetch('http://127.0.0.1:4198/philosophia/')
    return response.ok
  }, 'Vite preview')

  browser = spawn(chrome, [
    '--headless=new',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu',
    '--no-first-run',
    '--disable-extensions',
    '--remote-debugging-port=0',
    '--user-data-dir=' + profile,
    'about:blank',
  ], { stdio: 'ignore' })

  const activePort = join(profile, 'DevToolsActivePort')
  await until(() => existsSync(activePort), 'DevToolsActivePort', 180)
  const port = Number(readFileSync(activePort, 'utf8').split('\n')[0])
  const tabs = await (await fetch('http://127.0.0.1:' + port + '/json/list')).json()
  const tab = tabs.find(item => item.type === 'page')
  assert.ok(tab?.webSocketDebuggerUrl)

  ws = new WebSocket(tab.webSocketDebuggerUrl)
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true })
    ws.addEventListener('error', reject, { once: true })
  })

  ws.addEventListener('message', event => {
    const message = JSON.parse(event.data)
    if (message.id && pending.has(message.id)) {
      const item = pending.get(message.id)
      pending.delete(message.id)
      message.error ? item.reject(Error(message.error.message)) : item.resolve(message.result)
    }
  })

  await send('Page.enable')
  await send('Runtime.enable')

  for (const [width, height] of [[1440, 900], [1024, 768], [768, 1024], [390, 844]]) {
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 2,
      mobile: width <= 768,
    })
    await send('Page.navigate', { url: 'about:blank' })
    await until(() => evaluate("location.href === 'about:blank'"), 'reset')
    await send('Page.navigate', { url })

    await until(
      () => evaluate("document.querySelector('.seneca2d-hero h1')?.textContent.includes('La firmeza')"),
      'hero ' + width,
    )
    await until(async () => (await evaluate(metrics))?.count === 14, 'catorce nodos ' + width)

    const state = await evaluate(metrics)
    assert.equal(state.selected, 'S01', JSON.stringify(state))
    assert.ok(state.opacity > 0.9, 'nodo seleccionado atenuado ' + width)
    assert.deepEqual(state.hits, [], 'nodos encimados ' + width)
    assert.ok(state.positions.S03.x < state.positions.S04.x, 'virtud debe quedar a la izquierda de externos ' + width)
    assert.ok(state.positions.S05.x < state.positions.S06.x, 'ramas de pérdida invertidas ' + width)
    assert.ok(state.positions.S09.x < state.positions.S10.x, 'ultraje debe quedar a la izquierda de ofensa ' + width)
    assert.ok(state.positions.S01.y < state.positions.S02.y, 'el eje no desciende S01→S02 ' + width)
    assert.ok(state.positions.S07.y < state.positions.S08.y, 'el eje no desciende S07→S08 ' + width)
    assert.ok(state.positions.S11.y < state.positions.S14.y, 'la conclusión no queda debajo de magnanimidad ' + width)
    assert.ok(state.scroll <= state.width + 3, 'overflow horizontal ' + width + ' ' + JSON.stringify(state))
    assert.ok(state.inspector && state.schema, 'inspector o esquema ausente ' + width)
    assert.equal(state.minimap, false, 'el sistema sencillo no debe montar minimapa')
    console.log('SENECA OK', width + 'x' + height, JSON.stringify(state))
  }

  await evaluate("document.querySelector('.seneca2d-open-folio').click()")
  await until(() => evaluate("!!document.querySelector('.seneca2d-folio[role=dialog]')"), 'folio')
  assert.ok(await evaluate("!!document.querySelector('.seneca2d-folio .animated-concept-schema')"))
  await evaluate("document.querySelector('.seneca2d-folio>header button').click()")
  assert.equal(await evaluate("!!document.querySelector('.seneca2d-folio')"), false)

  await evaluate("document.querySelector('.seneca2d-guide-launch button').click()")
  await until(() => evaluate("!!document.querySelector('.seneca2d-guide')"), 'guía')
  await evaluate("document.querySelector('.seneca2d-guide-nav button:last-child').click()")
  await until(
    () => evaluate("document.querySelector('.seneca2d-canvas .react-flow__node.selected')?.getAttribute('data-id') === 'S02'"),
    'paso 2',
  )
  assert.ok((await evaluate(metrics)).opacity > 0.9, 'nodo guiado atenuado')

  await evaluate("document.querySelector('.seneca2d-canvas .react-flow__node[data-id=\"S03\"]').click()")
  await until(
    () => evaluate("!!document.querySelector('.seneca2d-source-text.is-paraphrase')"),
    'paráfrasis separada de cita literal',
  )
  assert.equal(
    await evaluate("!!document.querySelector('.seneca2d-source-text.is-paraphrase blockquote')"),
    false,
  )
  console.log('SENECA: folio + guía + fidelidad de fuente verificados')
} finally {
  try { ws?.close() } catch {}
  browser?.kill('SIGKILL')
  preview.kill('SIGTERM')
  rmSync(profile, { recursive: true, force: true })
}
