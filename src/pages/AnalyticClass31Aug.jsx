import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00','criterio','¿Qué distingue a la filosofía analítica?'],
  ['01','equilibrio','Argumentación y equilibrio reflexivo'],
  ['02','wittgenstein','Wittgenstein I ↔ Wittgenstein II'],
  ['03','giro','Giro lingüístico y representación'],
  ['04','epistemologia','Cuatro problemas epistemológicos'],
  ['05','intuicion','Discurso e intuición'],
  ['06','retorica','Argumentar y persuadir'],
  ['07','cierre','Síntesis y próxima lectura'],
]

const criteria = [
  ['Argumentación racional','Dar razones explícitas y evaluables.'],
  ['Justificación lógica','Mostrar por qué las razones sostienen la conclusión.'],
  ['Cuestión de grado','Si todos son “un poco analíticos”, la categoría pierde fuerza.'],
  ['Demarcación','Un criterio sólo sirve si realmente distingue.'],
]

const epistemology = [
  ['Posibilidad','¿Es posible conocer?','dogmatismo ↔ escepticismo'],
  ['Origen','¿De dónde procede el conocimiento?','racionalismo ↔ empirismo'],
  ['Determinación','¿Quién determina el conocimiento?','sujeto ↔ objeto'],
  ['Formas','¿Todo conocimiento es discursivo?','razonamiento ↔ intuición'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

function Head({n,eye,children}) {
  return <div className="an31-head"><span>{n}</span><div><p>{eye}</p><h2>{children}</h2></div></div>
}

export default function AnalyticClass31Aug() {
  const [criterion,setCriterion] = useState(0)
  const [witt,setWitt] = useState('early')
  const [repr,setRepr] = useState('mental')
  const [epi,setEpi] = useState(0)
  const [intuition,setIntuition] = useState('dianoia')
  const [style,setStyle] = useState('analytic')
  const epistemic = useMemo(() => epistemology[epi], [epi])

  return (
    <main className="an31-page">
      <nav className="an31-nav">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="an31-brand">Φ · Philosophia</Link>
        <span>XXXI · VIII · MMXXVI</span>
      </nav>

      <header className="an31-hero">
        <div className="an31-grid" aria-hidden="true" />
        <div className="an31-ghost" aria-hidden="true">p ↔ q</div>
        <div className="an31-hero-inner">
          <div>
            <p className="an31-kicker">FI264 · Cuarta clase · 31 de agosto</p>
            <h1>Lenguaje,<em>justificación y conocimiento</em></h1>
            <p className="an31-lead">
              La sesión vuelve al problema de definir la filosofía analítica y lo
              prueba contra una ruptura interna decisiva: del Wittgenstein del
              <em> Tractatus</em> al Wittgenstein de los juegos de lenguaje.
            </p>
            <div className="an31-question">
              <span>PREGUNTA RECTORA</span>
              <strong>¿Qué rasgo permite distinguir realmente a la filosofía analítica?</strong>
            </div>
          </div>
          <aside className="an31-axis">
            <span>MAPA</span>
            {['argumentar','justificar','analizar lenguaje','conocer'].map((x,i)=>
              <div key={x} className={i===3?'active':''}><b>{x}</b><small>{['razones','criterios','estructura / uso','sujeto · objeto'][i]}</small></div>
            )}
          </aside>
        </div>
      </header>

      <div className="an31-layout">
        <aside className="an31-index">
          <p>Index analyticus</p>
          {sections.map(([n,id,label])=>
            <button type="button" key={id} onClick={()=>goTo(id)}><span>{n}</span>{label}</button>
          )}
        </aside>

        <article className="an31-article">
          <section id="criterio">
            <Head n="00" eye="Demarcatio">Definir una tradición exige una diferencia real</Head>
            <p>
              Argumentación racional y justificación lógica son los criterios más
              prometedores de la lectura, pero sólo funcionan si permiten separar
              significativamente a la filosofía analítica de otras prácticas filosóficas.
            </p>
            <div className="an31-tabs four">
              {criteria.map(([title],i)=>
                <button key={title} className={criterion===i?'active':''} onClick={()=>setCriterion(i)}>
                  <span>{String(i+1).padStart(2,'0')}</span><strong>{title}</strong>
                </button>
              )}
            </div>
            <div className="an31-focus">
              <span>CRITERIO {String(criterion+1).padStart(2,'0')}</span>
              <h3>{criteria[criterion][0]}</h3>
              <p>{criteria[criterion][1]}</p>
            </div>
            <div className="an31-flow"><span>rasgo general</span><b>→</b><span>todos lo cumplen</span><b>→</b><strong>no demarca</strong></div>
          </section>

          <section id="equilibrio">
            <Head n="01" eye="Reflective equilibrium">Argumentar no significa sólo deducir</Head>
            <p>
              Los argumentos pueden ser revisables y abrirse a nuevas premisas.
              La justificación filosófica ajusta principios generales, juicios
              particulares y casos concretos.
            </p>
            <div className="an31-equilibrium">
              <div><span>TEORÍA GENERAL</span><strong>principios</strong></div><b>↕</b>
              <div className="core"><span>JUICIOS</span><strong>intuiciones</strong></div><b>↕</b>
              <div><span>CASOS</span><strong>detalles</strong></div>
            </div>
            <div className="an31-callout">
              <span>EQUILIBRIO REFLEXIVO</span>
              <strong>Ni imponer la teoría a los casos ni acumular casos sin construir una explicación general.</strong>
            </div>
          </section>

          <section id="wittgenstein">
            <Head n="02" eye="Wittgenstein I / II">Una tradición puede romper consigo misma</Head>
            <div className="an31-toggle">
              <button className={witt==='early'?'active':''} onClick={()=>setWitt('early')}>Primer Wittgenstein</button>
              <button className={witt==='late'?'active':''} onClick={()=>setWitt('late')}>Segundo Wittgenstein</button>
            </div>
            {witt==='early' ? (
              <div className="an31-witt">
                <span>TRACTATUS LOGICO-PHILOSOPHICUS</span>
                <h3>Lenguaje y mundo comparten estructura formal</h3>
                <p>Una proposición puede representar un hecho porque existe una correspondencia estructural.</p>
                <div className="an31-flow"><span>lenguaje</span><b>→</b><span>estructura lógica</span><b>≈</b><strong>mundo</strong></div>
              </div>
            ) : (
              <div className="an31-witt">
                <span>INVESTIGACIONES FILOSÓFICAS</span>
                <h3>El significado depende del uso</h3>
                <p>Lenguaje como actividad, reglas compartidas, juegos de lenguaje y comunidad.</p>
                <div className="an31-flow"><span>lenguaje</span><b>→</b><span>uso</span><b>→</b><span>reglas</span><b>→</b><strong>comunidad</strong></div>
              </div>
            )}
            <div className="an31-pair">
              <article><span>RUSSELL / VON WRIGHT</span><strong>La filosofía tardía de Wittgenstein tensiona cierta imagen clásica de lo analítico.</strong></article>
              <article className="core"><span>CONCLUSIÓN</span><strong>La filosofía analítica no es una doctrina única y homogénea.</strong></article>
            </div>
          </section>

          <section id="giro">
            <Head n="03" eye="Linguistic turn">Del problema mental de la representación al lenguaje</Head>
            <div className="an31-toggle">
              <button className={repr==='mental'?'active':''} onClick={()=>setRepr('mental')}>Esquema clásico</button>
              <button className={repr==='language'?'active':''} onClick={()=>setRepr('language')}>Giro lingüístico</button>
            </div>
            <div className="an31-repr">
              {repr==='mental' ? <>
                <div><span>SUJETO</span><strong>conciencia</strong></div><b>→</b>
                <div className="core"><span>REPRESENTACIÓN</span><strong>mundo mental</strong></div><b>→</b>
                <div><span>MUNDO</span><strong>realidad</strong></div>
              </> : <>
                <div><span>SUJETO</span><strong>hablante</strong></div><b>→</b>
                <div className="core"><span>LENGUAJE</span><strong>mediación</strong></div><b>→</b>
                <div><span>MUNDO</span><strong>hechos</strong></div>
              </>}
            </div>
            <div className="an31-pair three">
              <article><span>PLATÓN</span><strong>ámbito inteligible</strong></article>
              <article><span>ARISTÓTELES</span><strong>logos compartido</strong></article>
              <article className="core"><span>WITTGENSTEIN I</span><strong>estructura formal compartida</strong></article>
            </div>
            <div className="an31-tension">
              <article><span>UNIVERSALIDAD</span><strong>certeza · objetividad · estructura común</strong></article>
              <b>VS.</b>
              <article><span>CONTEXTUALIDAD</span><strong>uso · comunidad · historicidad · reglas</strong></article>
            </div>
          </section>

          <section id="epistemologia">
            <Head n="04" eye="Epistemologia">Cuatro problemas para ordenar la teoría del conocimiento</Head>
            <div className="an31-tabs four">
              {epistemology.map(([title,q],i)=>
                <button key={title} className={epi===i?'active':''} onClick={()=>setEpi(i)}>
                  <span>{title}</span><strong>{q}</strong>
                </button>
              )}
            </div>
            <div className="an31-focus">
              <span>{epistemic[0]}</span><h3>{epistemic[1]}</h3><p>{epistemic[2]}</p>
            </div>
            <div className="an31-flow centered"><span>SUJETO</span><b>↔</b><strong>REPRESENTACIÓN / CONOCIMIENTO</strong><b>↔</b><span>OBJETO</span></div>
          </section>

          <section id="intuicion">
            <Head n="05" eye="Dianoia · Noesis">¿Conocer exige siempre recorrer una cadena de razones?</Head>
            <div className="an31-toggle">
              <button className={intuition==='dianoia'?'active':''} onClick={()=>setIntuition('dianoia')}>Dianoia</button>
              <button className={intuition==='noesis'?'active':''} onClick={()=>setIntuition('noesis')}>Noesis</button>
            </div>
            <div className="an31-witt">
              {intuition==='dianoia' ? <>
                <span>CONOCIMIENTO DISCURSIVO</span><h3>A → B → C → conclusión</h3>
                <p>Leer, razonar, discutir y construir un argumento antes de llegar a una conclusión.</p>
              </> : <>
                <span>INTUICIÓN INTELECTUAL</span><h3>aprehensión directa</h3>
                <p>La interpretación platónica trabajada en clase sitúa la noesis por encima de la representación discursiva.</p>
              </>}
            </div>
            <div className="an31-chips">
              {['epistemológica','moral','estética','religiosa'].map(x=><span key={x}>{x}</span>)}
            </div>
          </section>

          <section id="retorica">
            <Head n="06" eye="Argumentum · Rhetorica">Convencer no es lo mismo que justificar</Head>
            <div className="an31-toggle">
              <button className={style==='analytic'?'active':''} onClick={()=>setStyle('analytic')}>Analítica</button>
              <button className={style==='literary'?'active':''} onClick={()=>setStyle('literary')}>Literaria / retórica</button>
            </div>
            <div className="an31-style">
              {(style==='analytic'
                ? ['argumentación explícita','justificación racional','claridad conceptual','premisas y conclusión','evaluación de razones']
                : ['metáfora','aforismo','narración','retórica','ambigüedad productiva']
              ).map(x=><strong key={x}>{x}</strong>)}
            </div>
            <div className="an31-straw">
              <span>ARGUMENTO REAL</span><b>→</b><span>DEFORMACIÓN</span><b>→</b><strong>ATAQUE A LA DEFORMACIÓN</strong><em>hombre de paja</em>
            </div>
            <div className="an31-pair three">
              <article><span>HEIDEGGER</span><strong>argumentación menos explícita</strong></article>
              <article><span>SARTRE / CAMUS</span><strong>novela, teatro y situación</strong></article>
              <article><span>NIETZSCHE</span><strong>aforismo, metáfora y provocación</strong></article>
            </div>
            <div className="an31-callout">
              <span>IMPORTANTE</span><strong>Diferentes herramientas no equivalen a distinguir buena filosofía de mala filosofía.</strong>
            </div>
          </section>

          <section id="cierre">
            <Head n="07" eye="Conclusio">Una tradición histórica con rupturas internas</Head>
            <div className="an31-summary">
              {[
                ['Demarcación','un rasgo debe distinguir'],
                ['Equilibrio reflexivo','teoría ↔ juicios ↔ casos'],
                ['Wittgenstein I','estructura lógica'],
                ['Wittgenstein II','uso y juegos de lenguaje'],
                ['Epistemología','sujeto ↔ objeto'],
                ['Intuición','dianoia ↔ noesis'],
                ['Retórica','persuadir ≠ justificar'],
                ['Tradición','continuidad sin homogeneidad'],
              ].map(([a,b],i)=><article key={a}><span>{String(i+1).padStart(2,'0')}</span><strong>{a}</strong><p>{b}</p></article>)}
            </div>
            <div className="an31-next">
              <span>PRÓXIMA SESIÓN</span>
              <h3>Terminar la lectura actual → comenzar Peter M. S. Hacker</h3>
              <p>
                El reporte se pedirá después de terminar la lectura. La fecha mencionada
                aparece como tentativa, por lo que no la fijé como entrega definitiva.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="an31-footer">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <span>p · ∴ · q</span>
        <span>XXXI · VIII · MMXXVI</span>
      </footer>
    </main>
  )
}
