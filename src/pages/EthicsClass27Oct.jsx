import { useState } from 'react'
import { Link } from 'react-router'
import './EthicsClass27Oct.css'

const sections = [
  { id:'compromiso', title:'Universidad y sociedad', tag:'Comentario de clase', text:'La educación pública es un derecho y plantea una responsabilidad social. El profesor considera que aprobar materias o cumplir formalmente el servicio social no basta: el conocimiento debe circular y contribuir a la justicia y la democracia.', detail:'La retribución no implica que el estudiante deba pagar otra vez su derecho a la educación; la cuestión es qué prácticas profesionales fortalecen el bien común.' },
  { id:'intervencion', title:'Del símbolo a la intervención', tag:'Ejemplos docentes', text:'Comités de ética, derechos humanos, museos, educación e inclusión, hospitales y organizaciones civiles fueron señalados como espacios posibles para la filosofía. La clase criticó la apropiación simbólica de causas sin compromiso material.', detail:'Los relatos sobre albergues y arte son testimonios del docente; las afirmaciones de actualidad internacional requieren contraste externo.' },
  { id:'atomismo', title:'Demócrito: átomos y vacío', tag:'Historia de la filosofía', text:'En la explicación atomista los cuerpos se comprenden por átomos, vacío y movimiento. El profesor destacó la formación de cuerpos y la percepción como procesos materiales.', detail:'Precisión: el atomismo democriteo no se reduce a un azar sin causalidad; conviene distinguir mecanismo, necesidad y contingencia.' },
  { id:'logos', title:'El logos estoico y el destino', tag:'Contraste académico', text:'En el estoicismo antiguo, el logos es un principio racional inmanente y corpóreo, relacionado con el orden causal del cosmos. La exposición lo contrastó con una explicación atomista no providencial.', detail:'No es correcto describir la física estoica como átomos a los que una divinidad externa imprime un primer movimiento: los estoicos sostienen una física continuista de materia, principio activo y pneuma.' },
  { id:'critica', title:'¿Aceptar equivale a justificar?', tag:'Problema ético', text:'El profesor cuestionó que se considere necesaria la pobreza, el abuso o la humillación porque supuestamente tienen un propósito divino. Comprender un acontecimiento no implica aprobarlo.', detail:'Una lectura cuidadosa del estoicismo distingue destino, juicio moral y deberes hacia los demás. La crítica del docente apunta especialmente a interpretaciones resignadas o acríticas.' },
  { id:'magico', title:'Pensamiento mágico e identidad', tag:'Discusión de clase', text:'Vestimenta, adhesiones partidistas, consumo identitario y títulos profesionales pueden adquirir un valor casi mágico si se cree que sustituyen estudio, competencia o acción real.', detail:'La pregunta es cuándo una identidad expresa una práctica efectiva y cuándo sólo produce una ilusión de mérito o compromiso.' },
]
const graph = [
  { title:'Atomismo antiguo', subtitle:'Átomos · vacío · movimiento', color:'#42be65' },
  { title:'Física estoica', subtitle:'Materia · logos · pneuma', color:'#78a9ff' },
  { title:'Problema ético', subtitle:'Necesidad ≠ justificación moral', color:'#ff7eb6' },
]
export default function EthicsClass27Oct(){
  const [active,setActive]=useState(0)
  const current=sections[active]
  return <main className="eth27">
    <nav className="eth27-nav"><Link to="/semestre/5/etica">← Ética · Escuelas clásicas</Link><Link to="/">Φ PHILOSOPHIA</Link></nav>
    <header className="eth27-hero"><p>FI194 · 27 OCTUBRE 2026 · ARCHIVUM ETHICUM</p><h1>Compromiso social <em>y logos estoico</em></h1><p>De la responsabilidad de la filosofía pública al problema de la necesidad, el destino y la justicia.</p><strong>Quaestio: ¿comprender el orden del mundo significa aceptar la injusticia?</strong></header>
    <div className="eth27-shell"><aside className="eth27-index"><span>INDEX LECTIONIS</span>{sections.map((s,i)=><button type="button" key={s.id} aria-current={active===i?'step':undefined} onClick={()=>setActive(i)}><small>{String(i+1).padStart(2,'0')}</small>{s.title}</button>)}</aside>
    <article className="eth27-content">
      <div className="eth27-tabs"><span>CLASE / INTERPRETACIÓN / CONTRASTE</span><span>{active+1} / {sections.length}</span></div>
      <section aria-live="polite" className="eth27-focus"><p>{current.tag}</p><h2>{current.title}</h2><p>{current.text}</p><div className="eth27-insight"><b>En palabras simples · qué debe quedar claro</b><p>{current.detail}</p></div></section>
      <div className="eth27-actions"><button type="button" disabled={active===0} onClick={()=>setActive(i=>Math.max(0,i-1))}>← Anterior</button><button type="button" disabled={active===sections.length-1} onClick={()=>setActive(i=>Math.min(sections.length-1,i+1))}>Siguiente →</button></div>
      <section className="eth27-study"><h2>Atlas conceptual · tres momentos</h2><p>Ilustración vectorial original de PHILOSOPHIA: reconstrucción editorial, no reproducción del pizarrón. La flecha indica el itinerario de comparación de la clase, no una evolución histórica directa.</p><div className="eth27-graph" role="img" aria-label="Del atomismo de átomos y vacío a la física estoica del logos y el pneuma, hasta el problema ético de que necesidad no significa justificación moral">{graph.map((g,i)=><div className="eth27-node" key={g.title} style={{'--node':g.color}}><small>0{i+1}</small><strong>{g.title}</strong><span>{g.subtitle}</span></div>)}</div><p className="eth27-caption">Lectura del esquema: primero se contrastan dos físicas antiguas; después se pregunta por las consecuencias morales de la providencia y el destino.</p></section>
      <section className="eth27-study"><h2>Comparación filosófica</h2><div className="eth27-compare"><div><h3>Demócrito</h3><p>Átomos, vacío, interacción material y causalidad natural. Sin providencia ordenadora.</p></div><div><h3>Estoicos</h3><p>Cosmos corpóreo continuo, principio racional activo, pneuma, causalidad y destino.</p></div></div><p><b>Advertencia historiográfica:</b> «atomismo religioso» es una simplificación empleada en el contraste docente, no una definición adecuada de la física estoica.</p></section>
      <section className="eth27-study"><h2>Guía de estudio</h2><ol><li>Explica por qué la educación pública plantea responsabilidad social sin dejar de ser un derecho.</li><li>Distingue compromiso práctico y adhesión simbólica.</li><li>Compara la causalidad atomista y el logos estoico.</li><li>Argumenta por qué el destino no debería legitimar la violencia.</li><li>Formula un ejemplo que conecte física, razón y ética estoicas.</li></ol></section>
      <section className="eth27-task"><span>TAREA DETECTADA · SIN FECHA CONFIRMADA</span><h2>Desarrollar un ejemplo de estoicismo</h2><p>Priorizar el estoicismo griego temprano y relacionar sus fundamentos físicos y metafísicos con una consecuencia moral. Evitar aislar una máxima de su sistema filosófico.</p></section>
      <footer>Fuentes: exposición de clase del 27 de octubre de 2026. Las precisiones historiográficas están diferenciadas del comentario docente. Imagen: esquema original PHILOSOPHIA.</footer>
    </article></div>
  </main>
}
