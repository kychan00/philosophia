// Comprueba la ruta pública después del despliegue de GitHub Pages.
// Se ejecuta desde deploy.yml y no sustituye los smoke tests de PR.
import assert from 'node:assert/strict'
import {spawn,spawnSync} from 'node:child_process'
import {existsSync,mkdtempSync,readFileSync,rmSync} from 'node:fs'
import {tmpdir} from 'node:os'
import {join} from 'node:path'

const target=process.argv[2]||'https://kychan00.github.io/philosophia/#/tareas/ontologia-ii/kolakowski-positivismo'
const base=target.split('#')[0]
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible en runner de Pages')

const profile=mkdtempSync(join(tmpdir(),'philosophia-production-kolakowski-'))
let browser,ws
const pending=new Map()
let serial=0
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms))
const send=(method,params={})=>new Promise((resolve,reject)=>{
  if(!ws||ws.readyState!==WebSocket.OPEN)return reject(new Error('CDP no disponible'))
  const id=++serial
  pending.set(id,{resolve,reject})
  ws.send(JSON.stringify({id,method,params}))
})
async function evaluate(expression){
  const response=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})
  if(response.exceptionDetails)throw Error(response.exceptionDetails.text)
  return response.result?.value
}
async function until(fn,label,checks=240){
  for(let i=0;i<checks;i++){try{if(await fn())return}catch{}await sleep(250)}
  throw Error('No llegó: '+label)
}

try{
  await until(async()=>{
    const response=await fetch(base,{cache:'no-store'})
    return response.ok
  },'GitHub Pages base')

  browser=spawn(chrome,['--headless=new','--no-sandbox','--disable-setuid-sandbox',
    '--disable-dev-shm-usage','--disable-gpu','--no-first-run','--disable-extensions',
    '--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'})

  const activePort=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(activePort),'DevToolsActivePort')
  const port=Number(readFileSync(activePort,'utf8').split('\n')[0])
  const tabs=await(await fetch('http://127.0.0.1:'+port+'/json/list')).json()
  const tab=tabs.find(item=>item.type==='page')
  assert.ok(tab?.webSocketDebuggerUrl)

  ws=new WebSocket(tab.webSocketDebuggerUrl)
  await new Promise((resolve,reject)=>{
    ws.addEventListener('open',resolve,{once:true})
    ws.addEventListener('error',reject,{once:true})
  })
  ws.addEventListener('message',event=>{
    const msg=JSON.parse(event.data)
    if(msg.id&&pending.has(msg.id)){
      const p=pending.get(msg.id)
      pending.delete(msg.id)
      msg.error?p.reject(Error(msg.error.message)):p.resolve(msg.result)
    }
  })
  await send('Page.enable')
  await send('Runtime.enable')

  for(const [width,height] of [[1440,900],[390,844]]){
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<=768})
    await send('Page.navigate',{url:target})
    await until(
      ()=>evaluate("document.querySelector('.kol-hero h1')?.textContent.includes('Cuatro reglas')"),
      'hero público '+width,
    )
    await until(
      ()=>evaluate("document.querySelectorAll('.kol-canvas .react-flow__node').length===8"),
      'ocho nodos públicos '+width,
    )
    const state=await evaluate("(()=>({href:location.href,nodes:document.querySelectorAll('.kol-canvas .react-flow__node').length,hero:document.querySelector('.kol-hero h1')?.textContent||'',calendar:document.querySelector('.kol-calendar-note')?.textContent||'',w:innerWidth,scroll:document.documentElement.scrollWidth}))()")
    assert.equal(state.nodes,8,JSON.stringify(state))
    assert.ok(state.hero.includes('Cuatro reglas'),JSON.stringify(state))
    assert.ok(state.calendar.includes('martes 3 de noviembre'),JSON.stringify(state))
    assert.ok(state.scroll<=state.w+3,'desbordamiento horizontal en producción '+JSON.stringify(state))
    console.log('PRODUCTION KOLAKOWSKI OK',width+'x'+height,JSON.stringify(state))
  }
}finally{
  try{ws?.close()}catch{}
  browser?.kill('SIGKILL')
  rmSync(profile,{recursive:true,force:true})
}
