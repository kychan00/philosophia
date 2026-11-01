// Comprueba en producción la clase de Teoría Crítica del 29 de octubre y su calendario.
// Se ejecuta después del despliegue de GitHub Pages; no sustituye los smoke tests de PR.
import assert from 'node:assert/strict'
import {spawn,spawnSync} from 'node:child_process'
import {existsSync,mkdtempSync,readFileSync,rmSync} from 'node:fs'
import {tmpdir} from 'node:os'
import {join} from 'node:path'

const pageBase=process.argv[2]||'https://kychan00.github.io/philosophia/'
const base=pageBase.split('#')[0]
const classUrl=base+'#/semestre/5/teoria-critica/clase/29-octubre'
const tasksUrl=base+'#/tareas'
const chrome=['google-chrome','google-chrome-stable','chromium','chromium-browser']
  .find(bin=>spawnSync('which',[bin],{stdio:'ignore'}).status===0)
assert.ok(chrome,'Chromium no disponible en runner de Pages')

const profile=mkdtempSync(join(tmpdir(),'philosophia-production-tc29-'))
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
    await send('Page.navigate',{url:classUrl})
    await until(
      ()=>evaluate("document.querySelector('.ct1510-hero h1')?.textContent.includes('Freud')"),
      'hero público TC29 '+width,
    )
    await until(
      ()=>evaluate("document.querySelectorAll('.ct1510-detail-folio').length===17"),
      '17 apartados públicos TC29 '+width,
    )
    const state=await evaluate(`(()=>{
      const root=document.querySelector('.ct2910-page')
      const atlas=document.querySelector('.ct2210-atlasx')
      const tabs=document.querySelector('.ct2210-atlasx-tabs')
      const study=document.querySelector('.ct2210-studyx')
      const detail=document.querySelector('.ct1510-detail')
      const css=node=>node?getComputedStyle(node):null
      return {
        href:location.href,
        sections:document.querySelectorAll('.ct1510-detail-folio').length,
        hero:document.querySelector('.ct1510-hero h1')?.textContent||'',
        agenda:[...document.querySelectorAll('.ct1510-relation span')].map(x=>x.textContent).join(' | '),
        noClass27:document.body.textContent.includes('El 27 de octubre no hubo sesión'),
        themeBg:css(root)?.getPropertyValue('--ph2d-bg').trim()||'',
        atlasBg:css(atlas)?.backgroundColor||'',
        tabsDisplay:css(tabs)?.display||'',
        studyBorder:css(study)?.borderTopStyle||'',
        detailWidth:detail?.getBoundingClientRect().width||0,
        atlasWidth:atlas?.getBoundingClientRect().width||0,
        w:innerWidth,
        scroll:document.documentElement.scrollWidth
      }
    })()`)
    assert.equal(state.sections,17,JSON.stringify(state))
    assert.ok(state.hero.includes('Freud'),JSON.stringify(state))
    assert.ok(state.agenda.includes('3 NOV · CERRAR FREUD'),JSON.stringify(state))
    assert.ok(state.agenda.includes('5 NOV · EXAMEN'),JSON.stringify(state))
    assert.ok(state.noClass27,JSON.stringify(state))
    assert.ok(state.themeBg,'tokens ph2d ausentes en producción '+JSON.stringify(state))
    assert.equal(state.atlasBg,'rgb(22, 22, 22)','atlas sin CSS en producción '+JSON.stringify(state))
    assert.equal(state.tabsDisplay,'grid','tabs sin CSS en producción '+JSON.stringify(state))
    assert.notEqual(state.studyBorder,'none','estudio sin CSS en producción '+JSON.stringify(state))
    assert.ok(state.detailWidth>280 && state.detailWidth<=1512,'folio fuera de contrato editorial '+JSON.stringify(state))
    assert.ok(state.atlasWidth>280 && state.atlasWidth<=1512,'atlas fuera de contrato editorial '+JSON.stringify(state))
    assert.ok(state.scroll<=state.w+3,'desbordamiento horizontal TC29 producción '+JSON.stringify(state))
    console.log('PRODUCTION TC29 OK',width+'x'+height,JSON.stringify(state))
  }

  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:2,mobile:true})
  await send('Page.navigate',{url:tasksUrl})
  await until(
    ()=>evaluate("document.body.textContent.includes('Freud · continuar El malestar en la cultura para cerrar la discusión')"),
    'tarea Freud 3 noviembre en calendario',
  )
  await until(
    ()=>evaluate("document.body.textContent.includes('Examen de Teoría Crítica')"),
    'examen 5 noviembre en calendario',
  )
  const calendar=await evaluate(`(()=>({
    href:location.href,
    reading:document.body.textContent.includes('Freud · continuar El malestar en la cultura para cerrar la discusión'),
    exam:document.body.textContent.includes('Examen de Teoría Crítica'),
    nov3:document.body.textContent.includes('3') && document.body.textContent.toLowerCase().includes('nov'),
    nov5:document.body.textContent.includes('5') && document.body.textContent.toLowerCase().includes('nov'),
    w:innerWidth,
    scroll:document.documentElement.scrollWidth
  }))()`)
  assert.ok(calendar.reading&&calendar.exam,JSON.stringify(calendar))
  assert.ok(calendar.scroll<=calendar.w+3,'desbordamiento calendario producción '+JSON.stringify(calendar))
  console.log('PRODUCTION TC29 CALENDAR OK',JSON.stringify(calendar))
}finally{
  try{ws?.close()}catch{}
  browser?.kill('SIGKILL')
  rmSync(profile,{recursive:true,force:true})
}
