// Verificación real en Chromium: escritorio, teléfono e iPad emulados.
// Un navegador emulado no equivale a una prueba en Safari/iPad físico.
import assert from 'node:assert/strict'
import {spawn,spawnSync} from 'node:child_process'
import {existsSync,mkdtempSync,readFileSync,rmSync} from 'node:fs'
import {tmpdir} from 'node:os'
import {join} from 'node:path'

const url='http://127.0.0.1:4195/philosophia/#/semestre/5/filosofia-analitica/lectura/nava-tecnociencia'
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible')
const preview=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4195','--strictPort'],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-nava-'))
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
  return response.result?.result?.value
}
async function until(fn,label,checks=150){
  for(let i=0;i<checks;i++){try{if(await fn())return}catch{}await sleep(140)}
  throw Error('No llegó: '+label)
}
const metrics=`(()=>{
  const rects=[...document.querySelectorAll('.nava-canvas .react-flow__node')]
    .filter(n=>{const r=n.getBoundingClientRect(),s=getComputedStyle(n);return r.width>1&&r.height>1&&s.display!=='none'&&s.visibility!=='hidden'})
    .map(n=>({id:n.getAttribute('data-id'),rect:n.getBoundingClientRect()}))
  const hits=[]
  for(let i=0;i<rects.length;i++)for(let j=i+1;j<rects.length;j++){
    const a=rects[i].rect,b=rects[j].rect
    if(Math.min(a.right,b.right)-Math.max(a.left,b.left)>2&&Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>2)hits.push(rects[i].id+'/'+rects[j].id)
  }
  const active=document.querySelector('.nava-canvas .react-flow__node.selected')
  return {
    count:rects.length,hits,selected:active?.getAttribute('data-id')||null,
    opacity:active?Number(getComputedStyle(active).opacity):0,
    w:innerWidth,scroll:document.documentElement.scrollWidth,
    inspector:!!document.querySelector('.nava-inspector h3'),
    questions:document.querySelectorAll('.nava-inspector .nava-question').length,
    nodeScroll:document.querySelector('.nava-card-paraphrase')?.scrollHeight||0
  }
})()`
try{
  await until(async()=>{const r=await fetch('http://127.0.0.1:4195/philosophia/');return r.ok},'Vite preview')
  browser=spawn(chrome,['--headless=new','--no-sandbox','--disable-setuid-sandbox',
    '--disable-dev-shm-usage','--disable-gpu','--no-first-run','--disable-extensions',
    '--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'})
  const activePort=join(profile,'DevToolsActivePort')
  await until(()=>existsSync(activePort),'DevToolsActivePort',180)
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
      const p=pending.get(msg.id);pending.delete(msg.id)
      msg.error?p.reject(Error(msg.error.message)):p.resolve(msg.result)
    }
  })
  await send('Page.enable')
  await send('Runtime.enable')
  for(const [width,height] of [[1440,900],[1024,768],[768,1024],[390,844]]){
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<=768})
    await send('Page.navigate',{url:'about:blank'})
    await until(()=>evaluate("location.href==='about:blank'"),'reset')
    await send('Page.navigate',{url})
    await until(()=>evaluate("document.querySelector('.nava-hero h1')?.textContent.includes('tecnocientífico')"),'hero '+width)
    await until(async()=>(await evaluate(metrics))?.count===12,'doce nodos '+width)
    const state=await evaluate(metrics)
    assert.equal(state.selected,'N01',JSON.stringify(state))
    assert.ok(state.opacity>.9,'nodo seleccionado atenuado '+width)
    assert.deepEqual(state.hits,[],'nodos encimados '+width)
    assert.ok(state.scroll<=state.w+3,'desbordamiento horizontal '+width+' '+JSON.stringify(state))
    assert.ok(state.inspector&&state.questions===1)
    console.log('NAVA OK',width+'x'+height,JSON.stringify(state))
  }
  // Folio montado dentro del workspace (compatible con su capa fullscreen).
  await evaluate("document.querySelector('.nava-open').click()")
  await until(()=>evaluate("!!document.querySelector('.nava-folio-layer[role=dialog]')"),'folio')
  assert.ok(await evaluate("document.querySelector('.nava-folio-diagram')?.children.length===3"))
  await evaluate("document.querySelector('.nava-folio header button').click()")
  assert.equal(await evaluate("!!document.querySelector('.nava-folio-layer')"),false)
  await evaluate("document.querySelector('.nava-guide button').click()")
  await until(()=>evaluate("document.querySelector('.nava-inspector footer')?.textContent.includes('GUÍA COMPLETA')"),'guía')
  await evaluate("document.querySelector('.nava-inspector footer>div button:last-child').click()")
  await until(()=>evaluate("document.querySelector('.nava-canvas .react-flow__node.selected')?.getAttribute('data-id')==='N02'"),'paso 2')
  assert.ok((await evaluate(metrics)).opacity>.9,'guía seleccionada con blur')
  console.log('NAVA: folio + navegación de guía verificados')
}finally{
  try{ws?.close()}catch{}
  browser?.kill('SIGKILL')
  preview.kill('SIGTERM')
  rmSync(profile,{recursive:true,force:true})
}
