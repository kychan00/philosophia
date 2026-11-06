// Comprueba la ruta pública de Séneca después del despliegue de GitHub Pages.
// Se ejecuta desde deploy.yml y complementa el smoke de PR.
import assert from 'node:assert/strict'
import {spawn,spawnSync} from 'node:child_process'
import {existsSync,mkdtempSync,readFileSync,rmSync} from 'node:fs'
import {tmpdir} from 'node:os'
import {join} from 'node:path'

const target=process.argv[2]||'https://kychan00.github.io/philosophia/#/semestre/5/etica/seneca/firmeza-del-sabio/sistema-2d'
const base=target.split('#')[0]
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible en runner de Pages')

const profile=mkdtempSync(join(tmpdir(),'philosophia-production-seneca-'))
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

const metrics=`(()=>{
  const rects=[...document.querySelectorAll('.seneca2d-canvas .react-flow__node')]
    .filter(node=>{
      const rect=node.getBoundingClientRect()
      const style=getComputedStyle(node)
      return rect.width>1&&rect.height>1&&style.display!=='none'&&style.visibility!=='hidden'
    })
    .map(node=>({id:node.getAttribute('data-id'),rect:node.getBoundingClientRect()}))

  const hits=[]
  for(let i=0;i<rects.length;i++)for(let j=i+1;j<rects.length;j++){
    const a=rects[i].rect,b=rects[j].rect
    if(
      Math.min(a.right,b.right)-Math.max(a.left,b.left)>2&&
      Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>2
    )hits.push(rects[i].id+'/'+rects[j].id)
  }

  const positions=Object.fromEntries(rects.map(item=>[
    item.id,
    {x:item.rect.left+item.rect.width/2,y:item.rect.top+item.rect.height/2},
  ]))

  return {
    href:location.href,
    count:rects.length,
    hits,
    positions,
    hero:document.querySelector('.seneca2d-hero h1')?.textContent||'',
    mapTitle:document.querySelector('.seneca2d-flow-caption strong')?.textContent||'',
    inspector:document.querySelector('.seneca2d-inspector h2')?.textContent||'',
    w:innerWidth,
    scroll:document.documentElement.scrollWidth,
    minimap:!!document.querySelector('.react-flow__minimap'),
  }
})()`

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

  for(const [width,height] of [[1440,900],[768,1024],[390,844]]){
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:2,mobile:width<=768})
    await send('Page.navigate',{url:target})
    await until(
      ()=>evaluate("document.querySelector('.seneca2d-hero h1')?.textContent.includes('La firmeza')"),
      'hero público '+width,
    )
    await until(
      ()=>evaluate("document.querySelectorAll('.seneca2d-canvas .react-flow__node').length===14"),
      'catorce nodos públicos '+width,
    )

    const state=await evaluate(metrics)
    assert.equal(state.count,14,JSON.stringify(state))
    assert.ok(state.hero.includes('La firmeza'),JSON.stringify(state))
    assert.ok(state.mapTitle.includes('gobierno de sí'),JSON.stringify(state))
    assert.equal(state.inspector,'Firmeza del sabio',JSON.stringify(state))
    assert.deepEqual(state.hits,[],'nodos encimados en producción '+JSON.stringify(state))
    assert.ok(state.positions.S03.x<state.positions.S04.x,'virtud/externos invertidos '+JSON.stringify(state))
    assert.ok(state.positions.S09.x<state.positions.S10.x,'ultraje/ofensa invertidos '+JSON.stringify(state))
    assert.ok(state.positions.S01.y<state.positions.S14.y,'eje axial invertido '+JSON.stringify(state))
    assert.ok(state.scroll<=state.w+3,'desbordamiento horizontal en producción '+JSON.stringify(state))
    assert.equal(state.minimap,false,'el sistema axial no debe montar minimapa')
    console.log('PRODUCTION SENECA OK',width+'x'+height,JSON.stringify(state))
  }
}finally{
  try{ws?.close()}catch{}
  browser?.kill('SIGKILL')
  rmSync(profile,{recursive:true,force:true})
}
