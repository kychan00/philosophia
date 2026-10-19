import { Fragment, type ReactNode } from 'react'
import { cafeAguaMemoryDocument } from '../data/cafeAguaMemoryDocument'
import './CafeAguaMemory.css'

const sections = cafeAguaMemoryDocument.split(/^## /m).slice(1)
const fence = String.fromCharCode(96,96,96)

function textParts(source: string): ReactNode[] {
  return source.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^)]+\)|\[\[[^\]]+\]\])/g)
    .filter(Boolean).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2,-2)}</strong>
      const link=part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/)
      if (link) return <a key={i} href={link[2]} target="_blank" rel="noreferrer noopener">{link[1]} ↗</a>
      if (part.startsWith('[[')) return <span key={i}>{part.slice(2,-2).split('/').pop()}</span>
      return <Fragment key={i}>{part}</Fragment>
    })
}

function WaterDiagram() {
  return <div className="water-memory-map" role="img" aria-label="La crisis del agua conecta ecología, infraestructura y decisiones con el acceso efectivo y la responsabilidad colectiva">
    <div className="water-memory-map-root">CRISIS DEL AGUA · GUADALAJARA</div>
    <div className="water-memory-map-grid">
      <article><span>↓ NATURALEZA</span><h4>Fuentes y ecosistema</h4><p>Cuencas, sequía y contaminación.</p></article>
      <article><span>↓ INFRAESTRUCTURA</span><h4>Potabilización y ciudad</h4><p>Redes, mantenimiento y crecimiento.</p></article>
      <article><span>↓ DECISIONES</span><h4>Política y economía</h4><p>Presupuestos, distribución y concesiones.</p></article>
    </div>
    <div className="water-memory-map-down">↓ CONVERGEN EN ↓</div>
    <div className="water-memory-map-root is-result">AGUA SEGURA, SUFICIENTE Y ASEQUIBLE EN LOS HOGARES</div>
    <div className="water-memory-map-down">↓ PLANTEAN ↓</div>
    <div className="water-memory-map-ends"><span>Derechos</span><span>Justicia</span><span>Acción colectiva</span><span>Futuro común</span></div>
  </div>
}

function blocks(source: string): ReactNode[] {
  const lines=source.split('\n')
  const output: ReactNode[]=[]
  let n=0,i=0
  while(i<lines.length){
    const line=lines[i].trim()
    if(!line){i++;continue}
    if(line.startsWith(fence)){
      const mermaid=line.includes('mermaid')
      i++
      while(i<lines.length&&!lines[i].trim().startsWith(fence))i++
      i++
      if(mermaid)output.push(<WaterDiagram key={n++}/>)
      continue
    }
    if(line.startsWith('### ')){output.push(<h3 key={n++}>{textParts(line.slice(4))}</h3>);i++;continue}
    if(line.startsWith('>')){
      const q:string[]=[]
      while(i<lines.length&&lines[i].trim().startsWith('>')){
        const t=lines[i++].trim().replace(/^>\s?/,'')
        if(!t.startsWith('[!'))q.push(t)
      }
      output.push(<aside key={n++} className="water-memory-note">{q.map((t,j)=><p key={j}>{textParts(t)}</p>)}</aside>)
      continue
    }
    if(line.startsWith('|')){
      const rows:string[][]=[]
      while(i<lines.length&&lines[i].trim().startsWith('|')){
        const r=lines[i++].trim().replace(/^\||\|$/g,'').split('|').map(x=>x.trim())
        if(!r.every(s=>/^:?-{2,}:?$/.test(s)))rows.push(r)
      }
      output.push(<div className="water-memory-table" key={n++}><table><thead><tr>{rows[0]?.map((cell,j)=><th key={j}>{textParts(cell)}</th>)}</tr></thead>
        <tbody>{rows.slice(1).map((r,j)=><tr key={j}>{r.map((cell,k)=><td key={k}>{textParts(cell)}</td>)}</tr>)}</tbody></table></div>)
      continue
    }
    if(/^(- |\d+\. )/.test(line)){
      const ordered=/^\d+\. /.test(line)
      const entries:string[]=[]
      while(i<lines.length&&/^(- |\d+\. )/.test(lines[i].trim()))entries.push(lines[i++].trim().replace(/^(- |\d+\. )/,''))
      const lis=entries.map((entry,j)=><li key={j}>{textParts(entry)}</li>)
      output.push(ordered?<ol key={n++}>{lis}</ol>:<ul key={n++}>{lis}</ul>)
      continue
    }
    const p=[line]
    i++
    while(i<lines.length&&lines[i].trim()&&!/^(### |## |>|\||- |\d+\. )/.test(lines[i].trim())&&!lines[i].trim().startsWith(fence))p.push(lines[i++].trim())
    output.push(<p key={n++}>{textParts(p.join(' '))}</p>)
  }
  return output
}

export default function CafeAguaMemory(){
  return <section className="water-memory" id="memoria" aria-labelledby="memory-title">
    <header className="water-memory-header">
      <span>CAFÉ FILOSÓFICO · EDICIÓN 04 · MEMORIA PUBLICADA</span>
      <h2 id="memory-title">El agua, entre <em>la vida y el poder.</em></h2>
      <p>Una reconstrucción fiel del diálogo del 19 de octubre de 2026. Cada tesis conserva sus matices y objeciones; los datos contrastados externamente aparecen por separado.</p>
      <nav aria-label="Recorrido por la memoria">{sections.map((section,i)=>{
        const heading=section.split('\n')[0].trim()
        return <a key={i} href={'#agua-memoria-'+i}>{heading.replace(/^\d+ · /,'')}</a>
      })}</nav>
    </header>
    <div className="water-memory-chapters">{sections.map((section,i)=>{
      const [heading,...body]=section.split('\n')
      return <article className="water-memory-chapter" id={'agua-memoria-'+i} key={i}>
        <div className="water-memory-number"><strong>{String(i+1).padStart(2,'0')}</strong><small>AGUA / 2026</small></div>
        <div className="water-memory-copy"><h2>{heading}</h2>{blocks(body.join('\n'))}</div>
      </article>
    })}</div>
    <footer className="water-memory-end"><strong>La conversación permanece abierta.</strong><p>Próximo tema anunciado: redes sociales · fecha por confirmar.</p></footer>
  </section>
}
