import { Link } from 'react-router'
import './EthicsClass10Sep.css'
import './EthicsClass29Oct.css'
import './EthicsClass10Nov.css'
import EthicsFirmnessScene from './EthicsFirmnessScene'
import { sections, glossary } from '../data/ethicsClass10Nov.js'

const system='/semestre/5/etica/seneca/firmeza-del-sabio/sistema-2d'
const extras=[['mapa','Mapa conceptual'],['glosario','Glosario y fuentes'],['cierre','Cierre de clase']]
function jump(id){
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById('ethnov-'+id)?.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})
}
function Scene({kind,title,description}) {
  return <figure className="ethnov-scene"><EthicsFirmnessScene kind={kind} title={title} description={description}/><figcaption>{description}</figcaption></figure>
}
function Head({num,label,children}){
  return <header className="ethnov-heading"><span aria-hidden="true">{num}</span><div><p>{label}</p><h2>{children}</h2></div></header>
}
function Map(){
  return <div className="ethnov-map" aria-label="Esquema de la distinción moral">
    <div className="ethnov-map-root"><small>Situación</small><strong>Un acto injusto</strong></div>
    <div className="ethnov-map-arrow" aria-hidden="true">↓</div>
    <div className="ethnov-map-branches"><div><small>Plano exterior</small><strong>Daño real y vulnerabilidad</strong><p>Puede perderse salud, bienes o seguridad.</p></div><div><small>Plano moral</small><strong>Juicio, virtud y conducta</strong><p>El agravio no determina automáticamente la respuesta.</p></div></div>
    <div className="ethnov-map-arrow" aria-hidden="true">↓</div>
    <div className="ethnov-map-root"><small>Respuesta discutida en clase</small><strong>Corrección y justicia, no venganza</strong><p>Reconocer el daño, proteger a quien lo padece y exigir instituciones justas.</p></div>
  </div>
}
export default function EthicsClass10Nov(){
  const items=[...sections.map(({id,title})=>[id,title]),...extras]
  return <main className="ethicsx-page eth10-page eth29-page ethnov-page">
    <div className="ethicsx-meander" aria-hidden="true"/>
    <nav className="ethicsx-nav eth10-nav" aria-label="Navegación de Ética"><Link to="/semestre/5/etica">← Ética · Escuelas clásicas</Link><Link to="/" className="ethicsx-brand"><span>Φ</span>Philosophia</Link><span>FI194 · X · XI · MMXXVI</span></nav>
    <header className="ethicsx-hero eth10-hero eth29-hero ethnov-hero">
      <div className="ethnov-cover">
        <div className="ethnov-cover-copy"><p className="ethicsx-kicker">ETHOS · LECTIO · X NOVEMBRIS · MMXXVI</p><span className="ethnov-seal" aria-hidden="true">Σ</span><h1>La firmeza<br/> del sabio</h1><p className="ethnov-deck">Séneca, vulnerabilidad y justicia social</p><p>De la virtud que no puede arrebatarse a la pregunta por las condiciones de una vida digna.</p><Link className="ethnov-system-link" to={system}>Explorar el sistema 2D de la obra <span aria-hidden="true">↗</span></Link></div>
        <div className="ethnov-cover-art"><Scene kind="hill" title="El camino de la firmeza" description="La colina simboliza el ejercicio exigente de la virtud; escena editorial original."/><div className="ethnov-cover-quote"><small>Quaestio rectora</small><strong>¿Es posible conservar la virtud sin resignarse a la injusticia?</strong></div></div>
      </div>
      <div className="ethnov-meta"><div><small>Fecha</small><strong>10 nov · 2026</strong></div><div><small>Curso</small><strong>Ética · FI194</strong></div><div><small>Obra</small><strong>De constantia sapientis</strong></div><div><small>Formato</small><strong>Exposición y discusión</strong></div></div>
    </header>
    <div className="eth29-method-band"><span><b className="eth29-dot"/> Exposición y debate</span><span><b className="eth29-dot eth29-dot-gold"/> Elaboración editorial</span><span><b className="eth29-dot eth29-dot-sage"/> Ejemplos de estudio</span></div>
    <div className="ethnov-layout">
      <aside className="ethnov-index" aria-label="Índice de la sesión"><p>Index lectionis</p><div className="ethnov-index-items">{items.map(([id,title],i)=><button type="button" key={id} onClick={()=>jump(id)}><span>{String(i+1).padStart(2,'0')}</span><b>{title}</b></button>)}</div></aside>
      <article className="ethnov-article">
        {sections.map((s,i)=><section id={'ethnov-'+s.id} key={s.id}><Head num={String(i+1).padStart(2,'0')} label={s.part}>{s.title}</Head>
          <div className="ethnov-spread"><div className="ethnov-reading"><p className="ethnov-label">Lo trabajado en clase</p><p>{s.source}</p><div className="ethnov-explain"><p className="ethnov-label">Explicación · reconstrucción editorial</p><p>{s.explain}</p></div></div><div className="ethnov-visual"><Scene kind={s.scene} title={s.title} description={s.caption}/><div className="ethnov-example"><span className="ethnov-label">Ejemplo sencillo · editorial</span><p>{s.example}</p></div></div></div>
          <div className="ethnov-simple"><span className="ethnov-label">En pocas palabras y entendible</span><p>{s.simple}</p></div><details className="ethnov-review"><summary>Para pensar: {s.question}</summary><p>{s.answer}</p></details>
        </section>)}
        <section id="ethnov-mapa"><Head num="15" label="Schema · síntesis editorial">Dos planos de la injusticia</Head><Map/><p className="ethnov-body">La tesis estoica distingue el ataque de la derrota moral. La objeción docente exige reconocer daños reales, necesidades y vulnerabilidad. La discusión converge en que no repetir el ultraje es compatible con combatirlo mediante una respuesta justificada.</p><Link className="ethnov-system-link" to={system}>Abrir sistema 2D de Sobre la firmeza del sabio ↗</Link></section>
        <section id="ethnov-glosario"><Head num="16" label="Lexicon · estudio">Conceptos y referencias</Head><dl className="ethnov-glossary">{glossary.map(([term,definition])=><div key={term}><dt>{term}</dt><dd>{definition}</dd></div>)}</dl><p className="ethnov-body"><strong>Obra expuesta:</strong> Séneca, <em>Sobre la firmeza del sabio</em> (De constantia sapientis). El estudio previo del proyecto cotejó la edición Gredos, 2013, pp. 140–153; no se afirma que todas esas páginas se leyeran en esta sesión. Sócrates, epicureísmo y Hobbes aparecen como referencias de discusión. El otro escrito estoico mencionado no se identifica con seguridad.</p></section>
        <section id="ethnov-cierre"><Head num="17" label="Praxis · cierre">Firmeza sin indiferencia</Head><p className="ethnov-body">Se concluye la exposición con corrección, anticipación y el contraste entre ira que impulsa una reclamación y venganza que repite el daño. No consta nueva tarea específica con plazo; continúa el trabajo de comentario de textos estoicos.</p><div className="ethnov-simple"><span className="ethnov-label">En pocas palabras y entendible</span><p>La virtud no exige negar el dolor. Tampoco obliga a aceptar la injusticia. La cuestión es cómo responder sin reproducirla.</p></div></section>
        <footer className="ethnov-footer"><p>Las escenas SVG, ejemplos y preguntas son elaboraciones originales de PHILOSOPHIA (26-11-2026); no reproducen imágenes ajenas ni hechos históricos. Las opiniones, cifras y ejemplos políticos discutidos se distinguen de afirmaciones verificadas. No se atribuyen citas literales ni diagnósticos no cotejados.</p><Link to="/semestre/5/etica">← Volver al archivo de Ética</Link></footer>
      </article>
    </div><div className="ethicsx-meander" aria-hidden="true"/>
  </main>
}
