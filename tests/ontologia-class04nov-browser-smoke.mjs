import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chrome = ['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin => spawnSync('which',[bin],{stdio:'ignore'}).status === 0)
assert.ok(chrome, 'Se requiere Chromium para el smoke responsive de Ontología II · 4 noviembre')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4204','--strictPort'], {stdio:'ignore'})
const profile = mkdtempSync(join(tmpdir(),'philosophia-ont04nov-'))
const url = 'http://127.0.0.1:4204/philosophia/#/semestre/5/ontologia-ii/clase/4-noviembre'

let browser, ws, sequence = 0
const pending = new Map()

function send(method, params = {}) {
  const id = ++sequence
  return new Promise((resolve,reject) => {
    pending.set(id,{resolve,reject})
    ws.send(JSON.stringify({id,method,params}))
  })
}

async function evaluate(expression) {
  const response = await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
  if (response.exceptionDetails) throw Error(JSON.stringify(response.exceptionDetails))
  return response.result?.result?.value
}

async function until(fn,label,count=120) {
  for (let i=0;i<count;i++) {
    try { if (await fn()) return } catch {}
    await sleep(150)
  }
  throw Error('Timeout: '+label)
}

async function viewport(width,height) {
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<769})
  await send('Page.navigate',{url:'about:blank'})
  await until(()=>evaluate("location.href==='about:blank'"),'reset viewport')
  await send('Page.navigate',{url})
  await until(()=>evaluate("document.querySelectorAll('.ont19-chapter').length===11"),'clase Ontología 4 noviembre')

  const state = await evaluate(`(()=>{
    const root=document.documentElement
    const image=document.querySelector('.ont04-figure img')
    return {
      viewport:innerWidth,
      scroll:root.scrollWidth,
      chapters:document.querySelectorAll('.ont19-chapter').length,
      indexButtons:document.querySelectorAll('.ont19-index button').length,
      image:!!image,
      alt:!!image?.getAttribute('alt'),
      naturalWidth:image?.naturalWidth||0,
      caption:document.querySelector('.ont04-figure figcaption')?.innerText||'',
      title:document.querySelector('.ont19-cover h1')?.innerText||'',
      schema:!!document.querySelector('.oa-schema-card'),
      source:document.querySelector('.ont04-source')?.innerText||''
    }
  })()`)

  assert.ok(state.scroll <= state.viewport + 3, 'Desbordamiento '+width+'x'+height+': '+JSON.stringify(state))
  assert.equal(state.chapters,11)
  assert.equal(state.indexButtons,11)
  assert.ok(state.image && state.alt && state.naturalWidth > 0)
  assert.match(state.caption,/original/i)
  assert.match(state.title,/Positivismo/i)
  assert.ok(state.schema)
  assert.match(state.source,/Frontera documental/i)
  console.log('OK Ontología 4 nov · responsive',width,height)
}

try {
  await until(async()=>{try{return (await fetch('http://127.0.0.1:4204/philosophia/')).ok}catch{return false}},'Vite preview')
  browser=spawn(chrome,['--headless=new','--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'})
  const portFile=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(portFile),'Chromium',180)
  const port=Number(readFileSync(portFile,'utf8').split('\n')[0])
  const pages=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  ws=new WebSocket(pages.find(x=>x.type==='page').webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true})})
  ws.addEventListener('message',event=>{
    const obj=JSON.parse(event.data)
    if(obj.id&&pending.has(obj.id)){
      const item=pending.get(obj.id)
      pending.delete(obj.id)
      obj.error?item.reject(Error(obj.error.message)):item.resolve(obj)
    }
  })
  await send('Page.enable')
  await send('Runtime.enable')
  for (const size of [[1440,900],[1024,768],[768,1024],[390,844],[320,740]]) await viewport(...size)

  await evaluate("document.querySelector('.ont19-index button:nth-of-type(5)').click()")
  await until(()=>evaluate("document.querySelector('#fenomenalismo').getBoundingClientRect().top<520"),'salto índice')
  assert.equal(await evaluate('location.hash'),'#/semestre/5/ontologia-ii/clase/4-noviembre')
  console.log('OK Ontología 4 nov · navegación interna')
} finally {
  ws?.close()
  browser?.kill('SIGTERM')
  server.kill('SIGTERM')
  await sleep(180)
  try { rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100}) } catch {}
}
