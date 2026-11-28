import { Link } from 'react-router'
import './EthicsClass10Sep.css'
import './EthicsClass29Oct.css'
import './EthicsClassFinal.css'
import EthicsEpicureanScene from './EthicsEpicureanScene'
import { sections, glossary, exam } from '../data/ethicsClassFinal.js'

const previous='/semestre/5/etica/clase/10-noviembre'
const extras=[['mapa','Mapa conceptual'],['glosario','Glosario y fuentes'],['examen','Examen final de casos']]
function jump(id){
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById('ethepi-'+id)?.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})
}
function Scene({kind,title,description}) {
  return <figure className="ethepi-scene"><EthicsEpicureanScene kind={kind} title={title} description={description}/><figcaption>{description}</figcaption></figure>
}
function Head({num,label,children}){
  return <header className="ethepi-heading"><span aria-hidden="true">{num}</span><div><p>{label}</p><h2>{children}</h2></div></header>
}
function Map(){
  return <div className="ethepi-map" aria-label="Del conocimiento de la naturaleza al bienestar compartido">
    <div className="ethepi-map-root"><small>Fundamento</small><strong>Conocimiento de las causas naturales</strong><p>Nada nace de la nada; la vida requiere condiciones materiales.</p></div>
    <div className="ethepi-map-arrow" aria-hidden="true">↓</div>
    <div className="ethepi-map-branches"><div><small>Decisión</small><strong>Deliberar placer y dolor</strong><p>Elegir esfuerzos que valen la pena; evitar excesos costosos.</p></div><div><small>Praxis</small><strong>Trabajo y cuidado común</strong><p>Producir alimentos, vivienda y condiciones de convivencia.</p></div></div>
    <div className="ethepi-map-arrow" aria-hidden="true">↓</div>
    <div className="ethepi-map-root"><small>Horizonte de la discusión</small><strong>Bienestar, amistad y libertad frente al miedo</strong><p>Una vida digna no se limita al placer individual.</p></div>
  </div>
}
export default function EthicsClassFinal(){
  const items=[...sections.map(({id,title})=>[id,title]),...extras]
  return <main className="ethicsx-page eth10-page eth29-page ethepi-page">
    <div className="ethicsx-meander" aria-hidden="true"/>
    <nav className="ethicsx-nav eth10-nav" aria-label="Navegación de Ética"><Link to="/semestre/5/etica">← Ética · Escuelas clásicas</Link><Link to="/" className="ethicsx-brand"><span>Φ</span>Philosophia</Link><span>FI194 · LECTIO ULTIMA</span></nav>
    <header className="ethicsx-hero eth10-hero eth29-hero ethepi-hero">
      <div className="ethepi-cover">
        <div className="ethepi-cover-copy"><p className="ethicsx-kicker">ETHOS · LECTIO ULTIMA · 2026-B</p><span className="ethepi-seal" aria-hidden="true">Ε</span><h1>Epicuro<br/> y Lucrecio</h1><p className="ethepi-deck">El placer, la naturaleza y el cuidado de la vida</p><p>De la vida del Jardín al conocimiento de las causas y la práctica de la justicia.</p><Link className="ethepi-system-link" to={previous}>Volver a la discusión sobre Séneca <span aria-hidden="true">↗</span></Link></div>
        <div className="ethepi-cover-art"><Scene kind="garden" title="El Jardín" description="Huerto, trabajo y vida común: representación editorial del ideal comunitario discutido."/><div className="ethepi-cover-quote"><small>Quaestio rectora</small><strong>¿Cómo puede el conocimiento de la naturaleza orientar una vida placentera, libre y solidaria?</strong></div></div>
      </div>
      <div className="ethepi-meta"><div><small>Fecha</small><strong>Última clase · 26 nov probable</strong></div><div><small>Curso</small><strong>Ética · FI194</strong></div><div><small>Obra</small><strong>De rerum natura · I</strong></div><div><small>Formato</small><strong>Lectura y cierre de curso</strong></div></div>
    </header>
    <div className="eth29-method-band"><span><b className="eth29-dot"/> Lectura y discusión</span><span><b className="eth29-dot eth29-dot-gold"/> Elaboración editorial</span><span><b className="eth29-dot eth29-dot-sage"/> Ejemplos de estudio</span></div>
    <div className="ethepi-layout">
      <aside className="ethepi-index" aria-label="Índice de la sesión"><p>Index lectionis</p><div className="ethepi-index-items">{items.map(([id,title],i)=><button type="button" key={id} onClick={()=>jump(id)}><span>{String(i+1).padStart(2,'0')}</span><b>{title}</b></button>)}</div></aside>
      <article className="ethepi-article">
        {sections.map((s,i)=><section id={'ethepi-'+s.id} key={s.id}><Head num={String(i+1).padStart(2,'0')} label={s.part}>{s.title}</Head>
          <div className="ethepi-spread"><div className="ethepi-reading"><p className="ethepi-label">Lo trabajado en clase</p><p>{s.source}</p><div className="ethepi-explain"><p className="ethepi-label">Explicación · reconstrucción editorial</p><p>{s.explain}</p></div></div><div className="ethepi-visual"><Scene kind={s.scene} title={s.title} description={s.caption}/><div className="ethepi-example"><span className="ethepi-label">Ejemplo sencillo · editorial</span><p>{s.example}</p></div></div></div>
          <div className="ethepi-simple"><span className="ethepi-label">En pocas palabras y entendible</span><p>{s.simple}</p></div><details className="ethepi-review"><summary>Para pensar: {s.question}</summary><p>{s.answer}</p></details>
        </section>)}
        <section id="ethepi-mapa"><Head num="16" label="Schema · reconstrucción editorial">Del conocimiento a la vida compartida</Head><Map/><p className="ethepi-body">El conocimiento de la naturaleza permite comprender necesidades y causas; la elección prudente de esfuerzos y el trabajo común permiten atenderlas. La relación sintetiza la lectura de Lucrecio y la interpretación del epicureísmo discutida en clase, no una cita ni un esquema del autor.</p></section>
        <section id="ethepi-glosario"><Head num="17" label="Lexicon · estudio">Conceptos y referencias</Head><dl className="ethepi-glossary">{glossary.map(([term,definition])=><div key={term}><dt>{term}</dt><dd>{definition}</dd></div>)}</dl><p className="ethepi-body"><strong>Lectura de clase:</strong> Lucrecio, <em>Sobre la naturaleza de las cosas</em> (<em>De rerum natura</em>), libro I, pasajes sobre generación, materia, semillas, letras y cultivo. Edición y versos no identificados. Epicuro es el centro de la exposición docente; Aristóteles, Platón, Descartes, Freud, Bakunin y otros autores aparecen en comparaciones, no como nuevas lecturas asignadas.</p></section>
        <section id="ethepi-examen"><Head num="18" label="Evaluatio · indicaciones del profesor">Examen final: seis criterios para juzgar un caso</Head><div className="ethepi-exam-notice"><strong>Formato y fecha</strong><p>{exam.notice}</p><p>{exam.format}</p></div><div className="ethepi-exam"><div className="ethepi-exam-case"><p className="ethepi-label">Ejercicio editorial · no es una pregunta oficial</p><h3>¿Ayudar a quien no conocemos?</h3><Scene kind="aid" title="Ayuda fuera del círculo cercano" description="Una cesta compartida ilustra el ejemplo de ayuda a una persona desconocida."/><p>{exam.case}</p><ol>{exam.method.map(step=><li key={step}>{step}</li>)}</ol></div><div className="ethepi-exam-schools"><p className="ethepi-label">Seis perspectivas · guía de repaso, no solucionario oficial</p>{exam.schools.map(([school,hint])=><details key={school}><summary>{school}</summary><p>{hint}</p></details>)}</div></div><div className="ethepi-simple"><span className="ethepi-label">En pocas palabras y entendible</span><p>No basta decir qué haría cada escuela: hay que justificar la acción desde lo que cada una considera bueno.</p></div><p className="ethepi-body">La fecha exacta de esta última sesión se registra como probable (jueves 26 de noviembre), pendiente de confirmación. El profesor explica también que la sesión anterior no se realizó normalmente por una confusión de comunicación relativa a un coloquio.</p></section>
        <footer className="ethepi-footer"><p>Las escenas SVG, ejemplos y preguntas son elaboraciones originales de PHILOSOPHIA (27-11-2026); no reproducen imágenes ajenas ni hechos históricos. Los relatos históricos, las analogías políticas y las cifras se mantienen como discusiones de clase cuando no están cotejados. No se atribuyen citas literales ni afirmaciones clínicas no verificadas.</p><Link to="/semestre/5/etica">← Volver al archivo de Ética</Link></footer>
      </article>
    </div><div className="ethicsx-meander" aria-hidden="true"/>
  </main>
}
