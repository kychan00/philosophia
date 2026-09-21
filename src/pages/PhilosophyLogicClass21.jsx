import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass21.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','mediacion','Empirismo / racionalismo'],
  ['02','evidencia','Teoría evidencial'],
  ['03','husserl','Husserl y “las cosas mismas”'],
  ['04','kant','Kant como antecedente'],
  ['05','diferencia','Kant / Husserl'],
  ['06','cumplimiento','Expectativa y cumplimiento'],
  ['07','correspondencia','Contra la correspondencia clásica'],
  ['08','fenomeno','Fenómeno, forma y materia'],
  ['09','percepcion','Percepción y autodonación'],
  ['10','grados','Grados de cumplimiento'],
  ['11','intuicion','Intuición: Kant / Husserl'],
  ['12','verdad-vivida','Evidencia y vivencia'],
  ['13','plumon','Ejemplo del plumón'],
  ['14','heidegger','Heidegger y aletheia'],
  ['15','comparacion','Husserl / Heidegger'],
  ['16','cierre','Síntesis docente'],
]

const route = [
  ['1','Mediar','La fenomenología rechaza tanto el empirismo puro como el racionalismo aislado.'],
  ['2','Evidenciar','La verdad aparece cuando lo esperado racionalmente se cumple en la experiencia fenoménica.'],
  ['3','Describir','Husserl vuelve a “las cosas mismas”: al fenómeno tal como se da a la conciencia.'],
  ['4','Graduar','Signo, intuición y percepción expresan distintos grados de plenitud y cumplimiento.'],
  ['5','Descentrar','Heidegger critica la centralidad de la conciencia y piensa la verdad como aletheia: desocultamiento.'],
]

const mediationModes = [
  {
    id:'empiricism',
    mark:'E',
    title:'Empirismo puro',
    formula:'experiencia sensible → conocimiento',
    problem:'los datos no bastan por sí solos',
    text:'La fenomenología rechaza que la verdad pueda reducirse a simple acumulación de sensaciones.',
  },
  {
    id:'rationalism',
    mark:'R',
    title:'Racionalismo puro',
    formula:'razón → verdad',
    problem:'la idea aislada tampoco basta',
    text:'La expectativa racional necesita encontrar cumplimiento en aquello que se da.',
  },
  {
    id:'phenomenology',
    mark:'Φ',
    title:'Fenomenología',
    formula:'expectativa + cumplimiento',
    problem:'mediación',
    text:'La verdad surge en la relación entre intención racional y experiencia fenoménica.',
  },
]

const evidenceModes = [
  {
    id:'expected',
    mark:'→',
    title:'Lo mentado / esperado',
    example:'“esto debería presentarse así”',
    text:'La conciencia anticipa, mienta o espera un determinado sentido.',
  },
  {
    id:'given',
    mark:'●',
    title:'Lo dado',
    example:'experiencia fenoménica',
    text:'Algo aparece efectivamente ante la conciencia.',
  },
  {
    id:'fulfilled',
    mark:'✓',
    title:'Cumplimiento',
    example:'lo dado satisface lo mentado',
    text:'La coincidencia vivida produce evidencia.',
  },
]

const kantHusserlModes = [
  {
    id:'kant',
    mark:'K',
    title:'Kant',
    commitment:'espacio · tiempo · categorías',
    text:'Enumera condiciones a priori específicas bajo las cuales puede darse experiencia posible.',
  },
  {
    id:'husserl',
    mark:'H',
    title:'Husserl',
    commitment:'descripción de cómo se da la experiencia',
    text:'La clase lo presenta como más cuidadoso frente a listas rígidas de categorías a priori.',
  },
]

const appearanceModes = [
  {
    id:'form',
    mark:'F',
    title:'Forma',
    source:'estructuras de conciencia',
    text:'El fenómeno aparece ya organizado; no recibimos una cosa completamente desnuda.',
  },
  {
    id:'matter',
    mark:'M',
    title:'Materia',
    source:'contenido sensible',
    text:'La experiencia aporta contenido, aunque no podamos separarlo limpiamente de las formas de aparición.',
  },
]

const fullnessModes = [
  {
    id:'sign',
    mark:'S',
    title:'Acto sígnico',
    degree:'sin plenitud',
    example:'decir “París” sin ver París',
    text:'El signo remite al objeto, pero no lo presenta plenamente.',
  },
  {
    id:'intuitive',
    mark:'I',
    title:'Acto intuitivo',
    degree:'mayor plenitud',
    example:'imagen · recuerdo vivo · figuración',
    text:'El objeto se da con más presencia que en el mero signo, aunque todavía pueda operar como imagen.',
  },
  {
    id:'perception',
    mark:'P',
    title:'Percepción',
    degree:'presentación privilegiada',
    example:'la cosa se da como presente',
    text:'La percepción ocupa un lugar central porque presenta el objeto a la conciencia y no sólo lo señala.',
  },
]

const intuitionModes = [
  {
    id:'kant',
    mark:'K',
    title:'Intuición en Kant',
    definition:'modo sensible de darse algo',
    text:'No significa iluminación mística: es percepción sensible estructurada por espacio y tiempo.',
  },
  {
    id:'husserl',
    mark:'H',
    title:'Intuición en Husserl',
    definition:'cumplimiento de una intención',
    text:'Se relaciona con un modo de darse el objeto con plenitud, en presencia para la conciencia.',
  },
]

const truthModes = [
  {
    id:'husserl',
    mark:'E',
    title:'Husserl · evidencia',
    formula:'lo mentado ↔ lo dado',
    focus:'conciencia · cumplimiento · presencia',
    text:'La experiencia de verdad es la vivencia de una concordancia plena entre intención y donación.',
  },
  {
    id:'heidegger',
    mark:'ἀ',
    title:'Heidegger · aletheia',
    formula:'ocultamiento → desocultamiento',
    focus:'ser · mundo · apertura',
    text:'La verdad deja de centrarse sólo en una conciencia que verifica y pasa a pensarse como aquello que se muestra.',
  },
]

const heideggerCritiques = [
  ['01','Conciencia','critica que el problema permanezca centrado en un sujeto consciente'],
  ['02','Evidencia','rechaza identificar verdad simplemente con cumplimiento evidencial'],
  ['03','Autodonación','desconfía de una donación plena convertida en garantía última'],
  ['04','Intuicionismo','ve el riesgo de una captación privilegiada con tono platónico o místico'],
]

const scrollTo = id =>
  document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

function SectionTitle({number,eyebrow,children}) {
  return (
    <div className="flc1-section-title">
      <span>{number}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function PhilosophyLogicClass21() {
  const [mediationId,setMediationId] = useState('phenomenology')
  const [evidenceId,setEvidenceId] = useState('fulfilled')
  const [kantHusserlId,setKantHusserlId] = useState('husserl')
  const [appearanceId,setAppearanceId] = useState('form')
  const [fullnessId,setFullnessId] = useState('perception')
  const [intuitionId,setIntuitionId] = useState('husserl')
  const [truthId,setTruthId] = useState('husserl')

  const mediation = useMemo(()=>mediationModes.find(x=>x.id===mediationId)||mediationModes[2],[mediationId])
  const evidence = useMemo(()=>evidenceModes.find(x=>x.id===evidenceId)||evidenceModes[2],[evidenceId])
  const kantHusserl = useMemo(()=>kantHusserlModes.find(x=>x.id===kantHusserlId)||kantHusserlModes[1],[kantHusserlId])
  const appearance = useMemo(()=>appearanceModes.find(x=>x.id===appearanceId)||appearanceModes[0],[appearanceId])
  const fullness = useMemo(()=>fullnessModes.find(x=>x.id===fullnessId)||fullnessModes[2],[fullnessId])
  const intuition = useMemo(()=>intuitionModes.find(x=>x.id===intuitionId)||intuitionModes[1],[intuitionId])
  const truth = useMemo(()=>truthModes.find(x=>x.id===truthId)||truthModes[0],[truthId])

  return (
    <main className="flc1-page flc21-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>06 · V · 2026</span>
      </nav>

      <header className="flc1-hero flc21-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>Φ</span><span>→</span><span>●</span><span>✓</span><span>ἀλήθεια</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 21 · Segundo parcial</p>
          <h1>Fenomenología, evidencia <em>y verdad</em></h1>
          <p className="flc1-lead">
            La sesión abandona el criterio pragmático de utilidad y explora la verdad
            como evidencia: una vivencia de concordancia entre aquello que la conciencia
            mienta o espera y aquello que efectivamente se da en la experiencia.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Qué significa que algo sea verdadero cuando no podemos comparar directamente nuestra representación con una cosa en sí?</strong>
          <small>Expectativa → fenómeno → cumplimiento → evidencia → aletheia.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XXI</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              De utilidad pragmática a evidencia fenomenológica
            </SectionTitle>

            <div className="flc21-route">
              {route.map(([n,t,x])=>(
                <article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>
              ))}
            </div>

            <div className="flc21-master">
              <span>EXPECTATIVA</span><b>→</b>
              <span>FENÓMENO</span><b>→</b>
              <span>CUMPLIMIENTO</span><b>→</b>
              <span>EVIDENCIA</span><b>→</b>
              <span>ALETHEIA</span>
            </div>

            <LogicFigureNote
              noteId="21-ruta"
              what="La trayectoria completa de la sesión: mediación fenomenológica, teoría evidencial, Husserl y crítica heideggeriana."
              how="Los primeros cuatro pasos pertenecen al modelo husserliano; el último señala el desplazamiento que introduce Heidegger."
              why="La clase tiene continuidad interna: la crítica a correspondencia conduce a evidencia, y la crítica a evidencia conduce a desocultamiento."
              takeaway="La verdad pasa de ser utilidad o adecuación externa a ser experiencia de cumplimiento, y finalmente apertura de aquello que se muestra."
            />
          </section>

          <section id="mediacion" className="flc1-section">
            <SectionTitle number="01" eyebrow="Via media">
              Entre empirismo y racionalismo
            </SectionTitle>

            <div className="flc21-tabs three">
              {mediationModes.map(item=>(
                <button type="button" key={item.id} className={item.id===mediationId?'is-active':''} onClick={()=>setMediationId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc21-reader blue">
              <div><span>{mediation.mark}</span><h3>{mediation.title}</h3><code>{mediation.formula}</code></div>
              <div><strong>{mediation.problem}</strong><p>{mediation.text}</p></div>
            </div>

            <LogicFigureNote
              noteId="21-mediacion"
              what="Las tres posiciones que organizan el comienzo de la clase."
              how="Empirismo y racionalismo aparecen como polos; fenomenología intenta conservar la experiencia sin renunciar a la estructura racional de la conciencia."
              why="La teoría evidencial sólo se entiende como respuesta a esta tensión."
              takeaway="La verdad fenomenológica requiere tanto algo esperado o mentado como algo dado en experiencia."
            />
          </section>

          <section id="evidencia" className="flc1-section">
            <SectionTitle number="02" eyebrow="Theoria evidentialis">
              Verdad como concordancia entre expectativa y cumplimiento
            </SectionTitle>

            <div className="flc21-tabs three">
              {evidenceModes.map(item=>(
                <button type="button" key={item.id} className={item.id===evidenceId?'is-active':''} onClick={()=>setEvidenceId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc21-reader violet">
              <div><span>{evidence.mark}</span><h3>{evidence.title}</h3><blockquote>{evidence.example}</blockquote></div>
              <p>{evidence.text}</p>
            </div>

            <div className="flc21-evidence-formula">
              <span>EXPECTATIVA RACIONAL</span><b>+</b>
              <span>DATOS FENOMÉNICOS</span><b>→</b>
              <strong>EVIDENCIA</strong>
            </div>

            <LogicFigureNote
              noteId="21-evidencia"
              what="La fórmula central de la teoría evidencial presentada en la clase."
              how="La expectativa no basta sola y los datos sensibles tampoco. La verdad aparece cuando lo dado cumple aquello que estaba intencionado."
              why="Ésta es la respuesta general de la sesión a la pregunta por la verdad fenomenológica."
              takeaway="Evidencia no significa simplemente ver: significa vivir el cumplimiento de una intención."
            />
          </section>

          <section id="husserl" className="flc1-section">
            <SectionTitle number="03" eyebrow="Ad res ipsas">
              Husserl: “a las cosas mismas”
            </SectionTitle>

            <div className="flc21-husserl">
              <article>
                <span>NO SIGNIFICA</span>
                <strong>volver ingenuamente a la cosa en sí</strong>
                <p>La conciencia no salta fuera de sí para captar una realidad sin mediación.</p>
              </article>
              <div>→</div>
              <article className="dark">
                <span>SÍ SIGNIFICA</span>
                <strong>volver al fenómeno tal como se da</strong>
                <p>describir cómo aparece aquello que experimentamos.</p>
              </article>
            </div>

            <div className="flc21-husserl-points">
              <span>no olvidar la experiencia</span>
              <span>no reducir todo a construcción racional</span>
              <span>recuperar el momento empírico</span>
              <span>describir la donación del fenómeno</span>
            </div>

            <LogicFigureNote
              noteId="21-cosas-mismas"
              what="El sentido metodológico que la fuente atribuye al lema husserliano."
              how="El contraste separa 'cosa en sí' kantiana de 'cosa misma' como fenómeno dado a la conciencia."
              why="Sin esta precisión, la consigna podría confundirse con un realismo ingenuo."
              takeaway="Volver a las cosas mismas significa volver a cómo las cosas se manifiestan en experiencia."
            />
          </section>

          <section id="kant" className="flc1-section">
            <SectionTitle number="04" eyebrow="Antecedens Kantianum">
              El giro copernicano sigue presente
            </SectionTitle>

            <div className="flc21-kant">
              <article><span>SUJETO</span><strong>aporta condiciones</strong></article>
              <b>+</b>
              <article><span>EXPERIENCIA</span><strong>aporta contenido</strong></article>
              <b>→</b>
              <article className="dark"><span>FENÓMENO</span><strong>ya estructurado</strong></article>
            </div>

            <div className="flc21-kant-forms">
              <article><span>ESPACIO</span><p>forma de sensibilidad</p></article>
              <article><span>TIEMPO</span><p>forma de sensibilidad</p></article>
              <article><span>CATEGORÍAS</span><p>orden del entendimiento</p></article>
            </div>

            <LogicFigureNote
              noteId="21-kant"
              what="El antecedente kantiano que la clase conserva en Husserl."
              how="La experiencia no se presenta como materia bruta: aparece bajo condiciones y estructuras del sujeto."
              why="La fenomenología mantiene el giro hacia las condiciones de aparición, aunque Husserl no repita sin más la lista kantiana."
              takeaway="Husserl hereda de Kant la idea de que conocer implica estructura de conciencia, no pura recepción pasiva."
            />
          </section>

          <section id="diferencia" className="flc1-section">
            <SectionTitle number="05" eyebrow="Kant / Husserl">
              Enumerar condiciones frente a describir modos de aparición
            </SectionTitle>

            <div className="flc21-tabs two">
              {kantHusserlModes.map(item=>(
                <button type="button" key={item.id} className={item.id===kantHusserlId?'is-active':''} onClick={()=>setKantHusserlId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc21-reader green">
              <div><span>{kantHusserl.mark}</span><h3>{kantHusserl.title}</h3><code>{kantHusserl.commitment}</code></div>
              <p>{kantHusserl.text}</p>
            </div>

            <LogicFigureNote
              noteId="21-kant-husserl"
              what="La diferencia metodológica que la clase subraya entre Kant y Husserl."
              how="Kant enumera condiciones a priori concretas; Husserl se concentra en describir cómo se manifiesta la experiencia."
              why="La fuente conecta esta cautela con críticas posteriores a concepciones kantianas de espacio, tiempo y física."
              takeaway="Husserl conserva el giro trascendental sin comprometerse aquí con una tabla cerrada de estructuras."
            />
          </section>

          <section id="cumplimiento" className="flc1-section">
            <SectionTitle number="06" eyebrow="Intentio et impletio">
              Lo mentado se cumple en lo dado
            </SectionTitle>

            <div className="flc21-fulfillment">
              <article>
                <span>INTENCIÓN</span>
                <strong>lo que la conciencia mienta</strong>
              </article>
              <b>→</b>
              <article>
                <span>APARICIÓN</span>
                <strong>lo que efectivamente se da</strong>
              </article>
              <b>→</b>
              <article className="dark">
                <span>EVIDENCIA</span>
                <strong>concordancia vivida</strong>
              </article>
            </div>

            <LogicFigureNote
              noteId="21-cumplimiento"
              what="El esquema más compacto de la verdad husserliana según la sesión."
              how="La intención abre una expectativa; la aparición aporta contenido; la evidencia ocurre cuando ambas coinciden."
              why="La fuente formula repetidamente la verdad como cumplimiento, no como copia exterior."
              takeaway="La verdad se vive como cumplimiento de una intención en la experiencia."
            />
          </section>

          <section id="correspondencia" className="flc1-section">
            <SectionTitle number="07" eyebrow="Contra correspondentiam classicam">
              No podemos comparar representación y cosa en sí desde afuera
            </SectionTitle>

            <div className="flc21-correspondence">
              <article>
                <span>CORRESPONDENCIA CLÁSICA</span>
                <strong>representación ↔ objeto</strong>
                <p>presupone poder contrastar ambos lados</p>
              </article>
              <div>?</div>
              <article className="dark">
                <span>FENOMENOLOGÍA</span>
                <strong>lo mentado ↔ lo dado</strong>
                <p>trabaja con aquello que aparece a la conciencia</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="21-correspondencia"
              what="El desplazamiento desde correspondencia externa hacia cumplimiento fenomenológico."
              how="El signo de interrogación marca el problema de acceso a la cosa en sí. La segunda relación permanece dentro del campo de experiencia."
              why="La fenomenología no niega el mundo; evita fingir un punto de vista exterior a la conciencia."
              takeaway="La comparación relevante no es conciencia contra cosa en sí, sino intención contra fenómeno dado."
            />
          </section>

          <section id="fenomeno" className="flc1-section">
            <SectionTitle number="08" eyebrow="Forma et materia">
              Todo fenómeno aparece ya estructurado
            </SectionTitle>

            <div className="flc21-tabs two">
              {appearanceModes.map(item=>(
                <button type="button" key={item.id} className={item.id===appearanceId?'is-active':''} onClick={()=>setAppearanceId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc21-reader red">
              <div><span>{appearance.mark}</span><h3>{appearance.title}</h3><code>{appearance.source}</code></div>
              <p>{appearance.text}</p>
            </div>

            <div className="flc21-phenomenon">
              <span>CONTENIDO SENSIBLE</span><b>+</b>
              <span>ESTRUCTURAS DE APARICIÓN</span><b>→</b>
              <strong>FENÓMENO PARA UNA CONCIENCIA</strong>
            </div>

            <LogicFigureNote
              noteId="21-fenomeno"
              what="La recuperación fenomenológica de la distinción forma/materia."
              how="Los dos factores se distinguen conceptualmente, pero la experiencia concreta ya aparece como unidad estructurada."
              why="Esto impide imaginar que primero recibimos una cosa desnuda y después le pegamos formas desde fuera."
              takeaway="Lo conocido siempre se da como fenómeno ya organizado para una conciencia."
            />
          </section>

          <section id="percepcion" className="flc1-section">
            <SectionTitle number="09" eyebrow="Praesentatio rei">
              En la percepción, la cosa se presenta
            </SectionTitle>

            <div className="flc21-presentation">
              <article>
                <span>RE-PRESENTACIÓN</span>
                <strong>copia · imagen · signo</strong>
                <p>algo remite a la cosa</p>
              </article>
              <div>≠</div>
              <article className="dark">
                <span>PRESENTACIÓN</span>
                <strong>la cosa se da</strong>
                <p>presencia fenomenológica ante la conciencia</p>
              </article>
            </div>

            <div className="flc21-selfgiving">
              <span>AUTODONACIÓN</span>
              <strong>el objeto se muestra, se dona o se entrega en la experiencia perceptiva</strong>
            </div>

            <LogicFigureNote
              noteId="21-autodonacion"
              what="La tesis fuerte de la sesión sobre percepción."
              how="La oposición distingue una mera copia representativa de una experiencia en la que el objeto mismo aparece para la conciencia."
              why="Esta presentación explica por qué la percepción recibe un papel privilegiado en la teoría evidencial."
              takeaway="Percepción no es sólo tener una imagen: es experimentar al objeto como presente."
            />
          </section>

          <section id="grados" className="flc1-section">
            <SectionTitle number="10" eyebrow="Gradus plenitudinis">
              Signo, intuición y percepción
            </SectionTitle>

            <div className="flc21-tabs three">
              {fullnessModes.map(item=>(
                <button type="button" key={item.id} className={item.id===fullnessId?'is-active':''} onClick={()=>setFullnessId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc21-reader blue">
              <div><span>{fullness.mark}</span><h3>{fullness.title}</h3><blockquote>{fullness.example}</blockquote></div>
              <div><strong>{fullness.degree}</strong><p>{fullness.text}</p></div>
            </div>

            <div className="flc21-fullness-scale">
              <span>SIGNO</span><b>→</b><span>INTUICIÓN</span><b>→</b><strong>PERCEPCIÓN</strong>
              <small>menor plenitud → mayor plenitud</small>
            </div>

            <LogicFigureNote
              noteId="21-grados"
              what="Los tres grados o modos de relación con el objeto que la clase distingue."
              how="La escala va desde referencia mediante signo hacia una donación cada vez más plena."
              why="La noción de evidencia depende del grado en que una intención encuentra cumplimiento."
              takeaway="La percepción ocupa el extremo privilegiado porque presenta la cosa y no sólo la menciona."
            />
          </section>

          <section id="intuicion" className="flc1-section">
            <SectionTitle number="11" eyebrow="Intuitio">
              “Intuición” no significa lo mismo en Kant y Husserl
            </SectionTitle>

            <div className="flc21-tabs two">
              {intuitionModes.map(item=>(
                <button type="button" key={item.id} className={item.id===intuitionId?'is-active':''} onClick={()=>setIntuitionId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc21-reader violet">
              <div><span>{intuition.mark}</span><h3>{intuition.title}</h3><strong>{intuition.definition}</strong></div>
              <p>{intuition.text}</p>
            </div>

            <LogicFigureNote
              noteId="21-intuicion"
              what="La diferencia terminológica entre dos usos de intuición trabajados en la clase."
              how="En Kant, intuición es sensibilidad estructurada; en Husserl, la sesión enfatiza plenitud y cumplimiento."
              why="La palabra puede inducir a pensar en misticismo, algo que la propia clase rechaza para Kant y problematiza en Husserl."
              takeaway="La intuición filosófica aquí debe entenderse técnicamente, no como corazonada o iluminación."
            />
          </section>

          <section id="verdad-vivida" className="flc1-section">
            <SectionTitle number="12" eyebrow="Experientia veritatis">
              La verdad como vivencia de evidencia
            </SectionTitle>

            <div className="flc21-truth-experience">
              <span>ESPERABA ALGO</span><b>→</b>
              <span>ALGO SE DA</span><b>→</b>
              <span>LO DADO CUMPLE LO MENTADO</span><b>→</b>
              <strong>HAY EVIDENCIA</strong>
            </div>

            <div className="flc21-evidence-quote">
              <span>FÓRMULA DE MEMORIA</span>
              <strong>La experiencia de la verdad es la vivencia de la concordancia plena entre lo mentado y lo dado como tal.</strong>
            </div>

            <LogicFigureNote
              noteId="21-vivencia"
              what="La teoría evidencial condensada como proceso vivido."
              how="No es una tabla de verdad externa: es una secuencia experiencial de intención, donación y cumplimiento."
              why="La fuente insiste en que la evidencia es una vivencia, no sólo una propiedad formal de una proposición."
              takeaway="Verdad, en este modelo, es la experiencia misma del cumplimiento evidencial."
            />
          </section>

          <section id="plumon" className="flc1-section">
            <SectionTitle number="13" eyebrow="Exemplum">
              El plumón: expectativa, experiencia y evidencia
            </SectionTitle>

            <div className="flc21-marker">
              <article>
                <span>EXPECTATIVA</span>
                <strong>si suelto el plumón, caerá</strong>
              </article>
              <b>↓</b>
              <article>
                <span>EXPERIENCIA</span>
                <strong>suelto el plumón</strong>
              </article>
              <b>↓</b>
              <article className="dark">
                <span>CUMPLIMIENTO</span>
                <strong>el plumón cae</strong>
              </article>
            </div>

            <div className="flc21-deeper">
              <span>MÁS ALLÁ DEL EJEMPLO</span>
              <strong>espacialidad · temporalidad · causalidad · intencionalidad</strong>
            </div>

            <LogicFigureNote
              noteId="21-plumon"
              what="El ejemplo simple de la clase para visualizar evidencia como cumplimiento."
              how="La expectativa precede al acto; la experiencia aporta el fenómeno; la caída satisface lo esperado."
              why="El ejemplo hace visible una estructura que luego puede aplicarse a problemas fenomenológicos más fundamentales."
              takeaway="La evidencia aparece cuando el fenómeno cumple una intención, no porque comparemos con una cosa en sí externa a toda experiencia."
            />
          </section>

          <section id="heidegger" className="flc1-section">
            <SectionTitle number="14" eyebrow="Critica Heideggeriana">
              De evidencia a aletheia
            </SectionTitle>

            <div className="flc21-heidegger-grid">
              {heideggerCritiques.map(([n,title,text])=>(
                <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>

            <div className="flc21-aletheia">
              <span>ἀλήθεια</span>
              <strong>desocultamiento</strong>
              <p>La verdad se piensa como el proceso por el cual algo se muestra o aparece dentro de un mundo de sentido.</p>
            </div>

            <LogicFigureNote
              noteId="21-aletheia"
              what="El desplazamiento heideggeriano introducido al final de la sesión."
              how="Las críticas desarman los pilares del modelo de evidencia centrado en conciencia; aletheia traslada el foco hacia ser, mundo y apertura."
              why="Heidegger aparece como continuación y crítica de Husserl, no como un tema desconectado."
              takeaway="La verdad deja de ser sólo concordancia vivida por una conciencia y pasa a pensarse como desocultamiento."
            />
          </section>

          <section id="comparacion" className="flc1-section">
            <SectionTitle number="15" eyebrow="Husserl / Heidegger">
              Evidencia frente a desocultamiento
            </SectionTitle>

            <div className="flc21-tabs two">
              {truthModes.map(item=>(
                <button type="button" key={item.id} className={item.id===truthId?'is-active':''} onClick={()=>setTruthId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc21-reader green">
              <div><span>{truth.mark}</span><h3>{truth.title}</h3><code>{truth.formula}</code><small>{truth.focus}</small></div>
              <p>{truth.text}</p>
            </div>

            <div className="flc21-final-comparison">
              <div className="head"><strong>ASPECTO</strong><strong>HUSSERL</strong><strong>HEIDEGGER</strong></div>
              <div className="row"><strong>Verdad</strong><span>evidencia</span><span>aletheia</span></div>
              <div className="row"><strong>Núcleo</strong><span>lo mentado / lo dado</span><span>ocultamiento / desocultamiento</span></div>
              <div className="row"><strong>Centro</strong><span>conciencia</span><span>ser y mundo</span></div>
              <div className="row"><strong>Percepción</strong><span>presentación privilegiada</span><span>no garantía suficiente por sí sola</span></div>
              <div className="row"><strong>Riesgo señalado</strong><span>intuicionismo fuerte</span><span>rechazo de una evidencia subjetiva última</span></div>
            </div>

            <LogicFigureNote
              noteId="21-comparacion"
              what="La diferencia final entre las dos concepciones de verdad desarrolladas en la sesión."
              how="Compare por filas: concepto de verdad, estructura, centro filosófico, función de percepción y principal objeción."
              why="La fuente termina justamente contraponiendo a Husserl con Heidegger."
              takeaway="Heidegger conserva la preocupación por aquello que se muestra, pero rechaza hacer de la conciencia y su evidencia el tribunal último."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="16" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc21-summary">
              <article><span>IDEA 1</span><h3>Fenomenología media</h3><p>No basta experiencia bruta ni razón aislada: importa el cumplimiento.</p></article>
              <article><span>IDEA 2</span><h3>Verdad = evidencia</h3><p>Husserl sitúa la verdad en la concordancia vivida entre lo mentado y lo dado.</p></article>
              <article><span>IDEA 3</span><h3>Percepción presenta</h3><p>La cosa se da a la conciencia con mayor plenitud que en signo o imagen.</p></article>
              <article><span>IDEA 4</span><h3>Heidegger desplaza</h3><p>Aletheia piensa verdad como desocultamiento en un mundo de sentido.</p></article>
            </div>

            <div className="flc21-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Por qué la fenomenología no es empirismo puro?</li>
                <li>¿Por qué tampoco es racionalismo puro?</li>
                <li>¿Qué significa verdad evidencial?</li>
                <li>¿Qué diferencia lo esperado de lo dado?</li>
                <li>¿Qué significa cumplimiento?</li>
                <li>¿Cómo debe entenderse “a las cosas mismas”?</li>
                <li>¿Por qué no equivale a volver a la cosa en sí kantiana?</li>
                <li>¿Qué conserva Husserl del giro copernicano de Kant?</li>
                <li>¿Qué diferencia la estrategia de Kant y la de Husserl?</li>
                <li>¿Por qué la fenomenología critica la correspondencia clásica?</li>
                <li>¿Qué diferencia forma y materia del fenómeno?</li>
                <li>¿Qué significa que la percepción presenta la cosa?</li>
                <li>¿Qué significa autodonación?</li>
                <li>¿Qué distingue acto sígnico, acto intuitivo y percepción?</li>
                <li>¿Qué es plenitud?</li>
                <li>¿Qué diferencia intuición en Kant y Husserl?</li>
                <li>¿Por qué la evidencia es una vivencia?</li>
                <li>¿Qué muestra el ejemplo del plumón?</li>
                <li>¿Qué critica Heidegger de Husserl?</li>
                <li>¿Qué significa aletheia?</li>
                <li>¿Por qué Heidegger critica el intuicionismo?</li>
                <li>¿Qué diferencia evidencia y desocultamiento?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Nota sobre la fuente</strong>
              <p>El documento del 6 de mayo es una versión de trabajo reconstruida a partir de notas de clase y de una transcripción reconstruida. La propia fuente advierte que no es una transcripción literal palabra por palabra; esta página conserva su orden, conceptos centrales y ejemplos principales.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 21 · 6 mayo 2026</span>
      </footer>
    </main>
  )
}
