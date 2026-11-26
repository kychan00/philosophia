import { useState } from 'react'
import GlockStudyScene from './GlockStudyScene.jsx'
import { glockReportVisuals } from '../../data/glockPlainLanguage.js'
import { glockReportSteps, glockReportChecklist, glockReportWorkflow, glockReportReference, glockReportNodes } from '../../data/glockReportGuide.js'
import { glockNodes } from '../../data/glockAnalyticChapter2.js'
import './GlockReportGuide.css'

const STORAGE_KEY = 'philosophia:glock:chapter2:report-guide:v1'
function readDraft() {
  try { const d = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); return d && typeof d === 'object' && !Array.isArray(d) ? d : {} } catch { return {} }
}

export default function GlockReportGuide({ onOpenNode }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [draft, setDraft] = useState(readDraft)
  const [notice, setNotice] = useState('')
  const step = glockReportSteps[index]
  const members = glockReportNodes(step, glockNodes)
  const visual = glockReportVisuals[step.id]
  const completed = glockReportSteps.filter(s => draft['done:'+s.id] === true).length
  const checked = glockReportChecklist.filter((_, i) => draft['check:'+i] === true).length
  function update(key, value) {
    const next = { ...draft, [key]: value }
    setDraft(next)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); setNotice('') } catch { setNotice('No se pudo guardar en este navegador. Exporte sus notas antes de salir.') }
  }
  function exportDraft() {
    const body = ['# Tercer reporte de lectura — borrador de trabajo', '', glockReportReference, '', ...glockReportSteps.flatMap(s => ['## '+s.title, 'Páginas: '+s.pages, '', String(draft['note:'+s.id] || '(Pendiente de redactar)'), '']), '## Revisión personal', ...glockReportChecklist.map((c,i) => '- ['+(draft['check:'+i] === true ? 'x' : ' ')+'] '+c)].join('\n')
    const url = URL.createObjectURL(new Blob([body], { type: 'text/markdown;charset=utf-8' }))
    const a = document.createElement('a')
    a.href = url
    a.download = 'Glock-capitulo-II-reporte-borrador.md'
    a.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return <section id="glock-report-guide" className="glock-report-guide" aria-labelledby="glock-report-title">
    <header className="glock-report-header">
      <div>
        <span>LECTURA III · TALLER DE ESCRITURA FILOSÓFICA</span>
        <h2 id="glock-report-title">Guía integral para el reporte de lectura</h2>
        <p>De los 166 nodos y las 47 páginas a un argumento propio. Esta guía editorial acompaña al atlas; no sustituye el recorrido documental ni constituye una consigna docente.</p>
      </div>
      <button type="button" className="glock-report-toggle" aria-expanded={open} aria-controls="glock-report-body" onClick={() => setOpen(!open)}>{open ? 'Cerrar guía' : 'Abrir guía del reporte'}</button>
    </header>
    {open && <div id="glock-report-body">
      <section className="glock-report-overview">
        <div><h3>Pregunta rectora</h3><p>¿Cómo se transforma la concepción del análisis filosófico y, con ella, la relación entre filosofía, lenguaje, ciencia y realidad?</p><p>Hilo editorial a partir del programa de p. 40: antecedentes → surgimiento → giro lingüístico → inversión y transformaciones posteriores. No es una cita ni una definición final de la filosofía analítica.</p></div>
        <div><h3>Método de trabajo</h3><ol>{glockReportWorkflow.map(x=><li key={x}>{x}</li>)}</ol></div>
      </section>
      <div className="glock-report-progress"><strong>{completed} / {glockReportSteps.length} etapas revisadas</strong><progress value={completed} max={glockReportSteps.length}/><span>{checked} / {glockReportChecklist.length} criterios revisados</span></div>
      <div className="glock-report-layout">
        <nav className="glock-report-steps" aria-label="Etapas del reporte">
          {glockReportSteps.map((s,i)=><button type="button" key={s.id} aria-current={i===index?'step':undefined} onClick={()=>setIndex(i)}><small>{String(i+1).padStart(2,'0')} · pp. {s.pages}</small><strong>{s.title}</strong>{draft['done:'+s.id] === true && <span>Revisado</span>}</button>)}
        </nav>
        <article className="glock-report-step" aria-labelledby="glock-report-step-title">
          <small>ETAPA {index+1} DE {glockReportSteps.length} · PP. {step.pages}</small>
          <h3 id="glock-report-step-title">{step.title}</h3>
          <GlockStudyScene scene={visual}/>
          <h4>Problema que debe responder</h4><p>{step.question}</p>
          <h4>Tesis de trabajo · paráfrasis / síntesis editorial</h4><p>{step.thesis}</p>
          <h4>Argumentos que no debe omitir</h4><ul>{step.points.map(p=><li key={p}>{p}</li>)}</ul>
          <h4>Ejemplos y evidencia del capítulo</h4><p>{step.example}</p>
          <h4>Cómo funciona el argumento · paso a paso</h4><p>{visual.argument}</p>
          <h4>Cómo convertirlo en un párrafo del reporte</h4><p>{step.write}</p>
          <aside className="glock-report-model"><h4>Modelo de párrafo · ejemplo de redacción, no cita</h4><p>{visual.paragraph}</p><small>Úselo para aprender la estructura; redacte su propia versión y coteje las páginas.</small></aside>
          <aside className="glock-report-warning"><h4>Error frecuente que debe evitar</h4><p>{visual.caution}</p></aside>
          <h4>Pregunta de evaluación crítica</h4><p>{step.critical}</p>
          <h4>Transición argumental</h4><p>{step.bridge}</p>
          {members.length>0 && <details className="glock-report-nodes"><summary>Consultar los {members.length} nodos de esta etapa en el atlas</summary><p>Seleccione una ficha para abrir su ruta y su inspector. Regrese a esta guía para seguir redactando.</p><div>{members.map(n=><button type="button" key={n.id} data-report-node={n.id} onClick={()=>onOpenNode(n.id)}><small>{n.id} · {n.data.page}</small>{n.data.title}<span className="glock-report-node-simple">{n.data.plainLanguage.plain}</span></button>)}</div></details>}
          <label className="glock-report-draft">Mis apuntes para esta etapa<textarea rows={7} value={typeof draft['note:'+step.id] === 'string' ? draft['note:'+step.id] : ''} onChange={e=>update('note:'+step.id,e.target.value)} placeholder="Problema, tesis, argumento, ejemplo con página, evaluación propia…"/></label>
          <label className="glock-report-check"><input type="checkbox" checked={draft['done:'+step.id]===true} onChange={e=>update('done:'+step.id,e.target.checked)}/> He revisado esta etapa y sus fuentes.</label>
          <div className="glock-report-actions"><button type="button" disabled={index===0} onClick={()=>setIndex(index-1)}>← Anterior</button><button type="button" disabled={index===glockReportSteps.length-1} onClick={()=>setIndex(index+1)}>Siguiente →</button></div>
        </article>
      </div>
      <section className="glock-report-review">
        <h3>Control final de calidad · autoevaluación</h3>
        <p>No es una rúbrica oficial ni sustituye indicaciones del profesor. Marcar una casilla no verifica automáticamente la calidad del argumento.</p>
        {glockReportChecklist.map((c,i)=><label key={c} className="glock-report-check"><input type="checkbox" checked={draft['check:'+i]===true} onChange={e=>update('check:'+i,e.target.checked)}/>{c}</label>)}
        <h3>Plantilla para reconstruir un argumento</h3><div className="glock-report-argument-template">{['1 · Problema: ¿qué intenta resolver?','2 · Tesis: ¿qué sostiene y quién lo sostiene?','3 · Razones: ¿por qué lo sostiene?','4 · Ejemplo: ¿cómo se aplica y en qué página?','5 · Objeción: ¿qué dificultad encuentra?','6 · Evaluación: ¿qué respuesta considero más convincente y por qué?'].map(x=><p key={x}>{x}</p>)}</div>
        <h3>Referencia y citas</h3><p>{glockReportReference}</p><p>Paráfrasis: (Glock, 2012, pp. 54–55). Cita literal: entrecomille sólo tras cotejar la edición y añada la página. Si se cita a un autor conocido sólo por Glock, indique que lo presenta Glock; no finja haber consultado el original. Algunas fichas contienen paráfrasis, no pasajes literales completos.</p>
        <button type="button" onClick={exportDraft}>Exportar mis apuntes en Markdown</button>
        <p className="glock-report-storage">Los apuntes se guardan únicamente en este navegador, cuando el almacenamiento local está disponible. No se envían al repositorio ni se publican. Exporte una copia si desea conservarlos.</p>
        {notice && <p role="status">{notice}</p>}
      </section>
    </div>}
  </section>
}
