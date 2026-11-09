import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const url='http://127.0.0.1:4206/philosophia/#/tareas/ontologia-ii/nietzsche-verdad-metafisica'
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible')

const preview=spawn(process.execPath,[
  'node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4206','--strictPort',
],{stdio:'ignore'})
const profile=mkdtempSync(join(tmpdir(),'philosophia-nietzsche2d-'))
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
async function until(fn,label,checks=180){
  for(let i=0;i<checks;i+=1){
    try{if(await fn())return}catch{}
    await sleep(140)
  }
  throw Error('No llegó: '+label)
}

const metrics=`(()=>{
  const wrappers=[...document.querySelectorAll('.nt2d-canvas .react-flow__node')]
    .filter(node=>{
      const r=node.getBoundingClientRect()
      const s=getComputedStyle(node)
      return r.width>1&&r.height>1&&s.display!=='none'&&s.visibility!=='hidden'
    })
    .map(node=>({id:node.getAttribute('data-id'),rect:node.getBoundingClientRect()}))
  const overlaps=[]
  for(let i=0;i<wrappers.length;i+=1){
    for(let j=i+1;j<wrappers.length;j+=1){
      const a=wrappers[i].rect,b=wrappers[j].rect
      if(Math.min(a.right,b.right)-Math.max(a.left,b.left)>2&&Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>2){
        overlaps.push(wrappers[i].id+'/'+wrappers[j].id)
      }
    }
  }
  const selected=document.querySelector('.nt2d-canvas .react-flow__node.selected .nt2d-node')
  const flow=document.querySelector('.nt2d-flow-panel')?.getBoundingClientRect()
  const inspector=document.querySelector('.nt2d-inspector')?.getBoundingClientRect()
  return {
    count:wrappers.length,
    ids:wrappers.map(item=>item.id),
    overlaps,
    selectedId:document.querySelector('.nt2d-canvas .react-flow__node.selected')?.getAttribute('data-id')||null,
    selectedOpacity:selected?Number(getComputedStyle(selected).opacity):0,
    inspectorTitle:document.querySelector('.nt2d-inspector h3')?.textContent||'',
    inspectorSchema:!!document.querySelector('.nt2d-inspector .animated-concept-schema'),
    pedagogy:!!document.querySelector('.nt2d-shell .ph2d-pedagogy'),
    routeButtons:document.querySelectorAll('.nt2d-routes button').length,
    guideButton:!!document.querySelector('.nt2d-guide-launch button'),
    minimap:!!document.querySelector('.nt2d-canvas .react-flow__minimap'),
    flow:flow?{left:flow.left,right:flow.right,top:flow.top,bottom:flow.bottom}:null,
    inspector:inspector?{left:inspector.left,right:inspector.right,top:inspector.top,bottom:inspector.bottom}:null,
    inspectorPosition:getComputedStyle(document.querySelector('.nt2d-inspector')).position,
    width:innerWidth,
    scroll:document.documentElement.scrollWidth,
  }
})()`

try{
  await until(async()=>{const r=await fetch('http://127.0.0.1:4206/philosophia/');return r.ok},'Vite preview')
  browser=spawn(chrome,[
    '--headless=new','--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage',
    '--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0',
    '--user-data-dir='+profile,'about:blank',
  ],{stdio:'ignore'})
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
    await until(()=>evaluate("!!document.querySelector('.nt2d-shell')"),'sistema 2D '+width)
    await until(()=>evaluate("document.querySelector('.nt2d-inspector h3')?.textContent.length>0"),'inspector '+width)

    const state=await evaluate(metrics)
    const expected=width<=850?3:28
    assert.equal(state.count,expected,'nodos iniciales '+width+' '+JSON.stringify(state))
    assert.equal(state.selectedId,'S21-1',JSON.stringify(state))
    assert.ok(state.selectedOpacity>.9,'seleccionado atenuado '+width)
    assert.deepEqual(state.overlaps,[],'nodos superpuestos '+width+' '+JSON.stringify(state))
    assert.ok(state.inspectorSchema,'esquema local ausente '+width)
    assert.ok(state.pedagogy,'SectionPedagogy ausente '+width)
    assert.equal(state.routeButtons,5,'rutas incompletas '+width)
    assert.ok(state.guideButton,'guía completa ausente '+width)
    assert.ok(state.scroll<=state.width+3,'overflow global '+width+' '+JSON.stringify(state))
    if(width>1180){
      assert.ok(state.inspector.left>=state.flow.right-2,'inspector no está a la derecha '+JSON.stringify(state))
      assert.equal(state.inspectorPosition,'sticky')
      assert.equal(state.minimap,true,'minimapa debe existir en escritorio')
    }else{
      assert.ok(state.inspector.top>=state.flow.bottom-2,'inspector no se apila '+JSON.stringify(state))
      assert.equal(state.inspectorPosition,'static')
      if(width<=850)assert.equal(state.minimap,false,'minimapa no debe montar en compacto')
    }
  }

  await evaluate("document.querySelector('.nt2d-node-footer button').click()")
  await until(()=>evaluate("!!document.querySelector('.nt2d-folio[role=dialog]')"),'folio')
  assert.ok(await evaluate("document.querySelectorAll('.nt2d-folio-source blockquote').length>=1"))
  assert.ok(await evaluate("!!document.querySelector('.nt2d-folio .animated-concept-schema')"))
  assert.match(await evaluate("document.querySelector('.nt2d-folio-reference')?.textContent||''"),/Nietzsche.*2012/)
  await evaluate("document.querySelector('.nt2d-folio>header button').click()")
  assert.equal(await evaluate("!!document.querySelector('.nt2d-folio')"),false)

  await evaluate("document.querySelector('.nt2d-guide-launch button').click()")
  await until(()=>evaluate("!!document.querySelector('.nt2d-guide')"),'guía completa')
  await evaluate("document.querySelector('.nt2d-guide-nav button:last-child').click()")
  await until(()=>evaluate("document.querySelector('.nt2d-canvas .react-flow__node.selected')?.getAttribute('data-id')==='S21-2'"),'guía paso 2')
  assert.ok((await evaluate(metrics)).selectedOpacity>.9,'nodo guiado atenuado')

  await evaluate("document.querySelectorAll('.nt2d-routes button')[3].click()")
  await until(()=>evaluate("document.querySelector('.nt2d-canvas .react-flow__node.selected')?.getAttribute('data-id')==='S23-1'"),'ruta p23')
  await until(()=>evaluate("document.querySelectorAll('.nt2d-canvas .react-flow__node').length===12"),'doce nodos ruta p23')
  assert.equal(await evaluate("document.querySelectorAll('.nt2d-canvas .react-flow__node').length"),12)
  assert.match(await evaluate("document.querySelector('.nt2d-inspector h3')?.textContent||''"),/Intelecto/)
  console.log('NIETZSCHE 2D CANÓNICO OK')
}finally{
  try{ws?.close()}catch{}
  browser?.kill('SIGKILL')
  preview.kill('SIGTERM')
  rmSync(profile,{recursive:true,force:true})
}
