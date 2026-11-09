// Comprueba la ruta pública de Nietzsche después del despliegue de GitHub Pages.
import assert from 'node:assert/strict'
import {spawn,spawnSync} from 'node:child_process'
import {existsSync,mkdtempSync,readFileSync,rmSync} from 'node:fs'
import {tmpdir} from 'node:os'
import {join} from 'node:path'

const target=process.argv[2]||'https://kychan00.github.io/philosophia/#/tareas/ontologia-ii/nietzsche-verdad-metafisica'
const base=target.split('#')[0]
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible en runner de Pages')

const profile=mkdtempSync(join(tmpdir(),'philosophia-production-nietzsche-'))
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
  for(let i=0;i<checks;i+=1){try{if(await fn())return}catch{}await sleep(250)}
  throw Error('No llegó: '+label)
}

try{
  await until(async()=>{const response=await fetch(base,{cache:'no-store'});return response.ok},'GitHub Pages base')

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
    await send('Page.navigate',{url:'about:blank'})
    await until(()=>evaluate("location.href==='about:blank'"),'reset '+width)
    await send('Page.navigate',{url:target})

    await until(()=>evaluate("document.querySelector('.nietzsche-hero h1')?.textContent.includes('Nietzsche')"),'hero Nietzsche '+width)
    await until(()=>evaluate("!!document.querySelector('.nt2d-shell')"),'sistema canónico '+width)
    await until(()=>evaluate("document.querySelector('.nt2d-inspector h3')?.textContent.length>0"),'inspector '+width)

    const state=await evaluate(`(()=>({
      href:location.href,
      hero:document.querySelector('.nietzsche-hero h1')?.textContent||'',
      system:!!document.querySelector('.nt2d-shell'),
      nodes:document.querySelectorAll('.nt2d-canvas .react-flow__node').length,
      selected:document.querySelector('.nt2d-canvas .react-flow__node.selected')?.getAttribute('data-id')||null,
      inspector:!!document.querySelector('.nt2d-inspector h3'),
      schema:!!document.querySelector('.nt2d-inspector .animated-concept-schema'),
      pedagogy:!!document.querySelector('.nt2d-shell .ph2d-pedagogy'),
      routes:document.querySelectorAll('.nt2d-routes button').length,
      guide:!!document.querySelector('.nt2d-guide-launch button'),
      counts:document.querySelector('.nt2d-head dl')?.textContent||'',
      bib:!!document.querySelector('.nietzsche-bibliography'),
      policy:document.querySelector('.nietzsche-library-policy')?.textContent||'',
      w:innerWidth,
      scroll:document.documentElement.scrollWidth
    }))()`)

    assert.ok(state.system,JSON.stringify(state))
    assert.equal(state.nodes,width<=850?3:104,JSON.stringify(state))
    assert.equal(state.selected,'S21-1',JSON.stringify(state))
    assert.ok(state.inspector&&state.schema&&state.pedagogy,JSON.stringify(state))
    assert.equal(state.routes,18,JSON.stringify(state))
    assert.ok(state.guide,JSON.stringify(state))
    assert.match(state.counts,/104/)
    assert.match(state.counts,/119/)
    assert.match(state.counts,/226/)
    assert.ok(state.bib,JSON.stringify(state))
    assert.ok(/no publica copias|no se aloja ninguna copia/i.test(state.policy),JSON.stringify(state))
    assert.ok(state.href.includes('#/tareas/ontologia-ii/nietzsche-verdad-metafisica'),JSON.stringify(state))
    assert.ok(state.scroll<=state.w+3,'desbordamiento horizontal en producción '+JSON.stringify(state))

    await evaluate("document.querySelector('.nt2d-open-folio').click()")
    await until(()=>evaluate("!!document.querySelector('.nt2d-folio[role=dialog]')"),'folio producción '+width)
    assert.ok(await evaluate("!!document.querySelector('.nt2d-folio .animated-concept-schema')"))
    await evaluate("document.querySelector('.nt2d-folio>header button').click()")

    console.log('PRODUCTION NIETZSCHE 2D 21–37 OK',width+'x'+height,JSON.stringify(state))
  }
}finally{
  try{ws?.close()}catch{}
  browser?.kill('SIGKILL')
  rmSync(profile,{recursive:true,force:true})
}
