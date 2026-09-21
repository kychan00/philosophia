import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass22.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','correspondencia','Teoría de la correspondencia'],
  ['02','giro-linguistico','De mente a lenguaje'],
  ['03','estado-hecho','Estado de cosas / hecho'],
  ['04','mundo','El mundo no afirma'],
  ['05','wittgenstein1','Primer Wittgenstein'],
  ['06','frege','Frege y verdad primitiva'],
  ['07','atomismo','Atomismo lógico'],
  ['08','atomicas','Atómicas / moleculares'],
  ['09','verificacion','Principio de verificación'],
  ['10','estructura','Correspondencia estructural'],
  ['11','isomorfismo','Isomorfismo y lenguaje perfecto'],
  ['12','tractatus','Teoría pictórica'],
  ['13','russell','Tres condiciones de Russell'],
  ['14','objeciones','Objeciones'],
  ['15','wittgenstein2','Segundo Wittgenstein'],
  ['16','entidades','Entidades y categorías'],
  ['17','cierre','Síntesis docente'],
]

const route = [
  ['1','Adecuar','La verdad se presenta como relación entre lo que una proposición afirma y un estado de cosas real.'],
  ['2','Lingüistizar','El siglo XX desplaza el análisis desde representaciones mentales privadas hacia proposiciones públicas.'],
  ['3','Atomizar','Lenguaje y mundo se analizan en unidades simples: proposiciones atómicas y hechos o estados simples.'],
  ['4','Estructurar','La correspondencia decisiva no es palabra-cosa, sino semejanza formal entre proposición y mundo.'],
  ['5','Criticar','El segundo Wittgenstein rompe la idea de que todo lenguaje tenga como función describir hechos.'],
]

const correspondenceModes = [
  {
    id:'classical',
    mark:'INT',
    title:'Correspondencia clásica',
    formula:'intelecto ↔ realidad',
    figure:'adecuación entre realidad e intelecto',
    text:'La formulación tradicional presenta la verdad como adecuación de un contenido mental o intelectual a una realidad ya dada.',
  },
  {
    id:'linguistic',
    mark:'P↔E',
    title:'Correspondencia lingüística',
    formula:'proposición ↔ estado de cosas',
    figure:'giro del siglo XX',
    text:'Frege, Russell y Wittgenstein desplazan el problema hacia estructuras lingüísticas que pueden analizarse públicamente.',
  },
]

const stateFactModes = [
  {
    id:'state',
    mark:'E',
    title:'Estado de cosas',
    example:'los lentes están sobre la mesa',
    status:'disposición en la realidad',
    text:'El mundo contiene cosas y relaciones entre cosas. Esa configuración puede entenderse como un estado de cosas.',
  },
  {
    id:'fact',
    mark:'H',
    title:'Hecho afirmado',
    example:'“Los lentes están sobre la mesa.”',
    status:'proposición formulada por un sujeto',
    text:'La clase insiste en que el mundo no entrega hechos ya formulados: el sujeto afirma lingüísticamente aquello que ocurre.',
  },
]

const atomModes = [
  {
    id:'atomic',
    mark:'P',
    title:'Proposición atómica',
    example:'Esto es blanco.',
    structure:'unidad simple',
    verification:'relación directa con dato empírico o estado simple',
    text:'Funciona como componente básico dentro del análisis atomista.',
  },
  {
    id:'molecular',
    mark:'P∧Q',
    title:'Proposición molecular',
    example:'Esto es blanco, está frío y pesa poco.',
    structure:'composición lógica',
    verification:'depende de componentes + conectivos',
    text:'Su valor de verdad se calcula a partir de proposiciones más simples y de las reglas que las conectan.',
  },
]

const languageModes = [
  {
    id:'ordinary',
    mark:'Lₒ',
    title:'Lenguaje ordinario',
    traits:'ambiguo · contextual · convencional',
    text:'Las palabras cotidianas ocultan a menudo la estructura lógica que el análisis quiere hacer explícita.',
  },
  {
    id:'perfect',
    mark:'L*',
    title:'Lenguaje lógico perfecto',
    traits:'estructura lógica explícita',
    text:'El isomorfismo fuerte lenguaje-mundo se plantea para un lenguaje ideal capaz de mostrar con claridad su forma lógica.',
  },
]

const russellConditions = [
  {
    id:'falsehood',
    number:'01',
    title:'Admitir falsedad',
    formula:'verdad ↔ posibilidad de falsedad',
    text:'Una teoría que no puede explicar cómo una creencia puede ser falsa tampoco explica adecuadamente la verdad.',
  },
  {
    id:'belief',
    number:'02',
    title:'Verdad de afirmaciones',
    formula:'verdadero(P), no verdadero(cosa)',
    text:'Las cosas simplemente son; lo verdadero o falso es aquello que afirmamos, creemos o proponemos acerca de ellas.',
  },
  {
    id:'external',
    number:'03',
    title:'Relación exterior',
    formula:'P ↔ realidad externa',
    text:'El valor de verdad depende de una relación adecuada entre la afirmación y cosas exteriores a ella.',
  },
]

const objectionModes = [
  {
    id:'deflation',
    mark:'↓',
    title:'Deflacionismo',
    example:'¿hace falta una propiedad robusta llamada verdad?',
    text:'Las teorías pro-oracionales y de redundancia cuestionan que “verdadero” deba designar una propiedad sustantiva.',
  },
  {
    id:'context',
    mark:'CTX',
    title:'Contexto',
    example:'Hoy hace mucho calor.',
    text:'Lugar, fecha, hablante y estándar pueden modificar la evaluación; no toda proposición funciona como una afirmación contextualmente rígida.',
  },
  {
    id:'fiction',
    mark:'FIC',
    title:'Ficción coherente',
    example:'una saga puede ser consistente y no corresponder con realidad',
    text:'La coherencia interna no basta para correspondencia, aunque esta crítica se dirige sobre todo contra coherentismo.',
  },
  {
    id:'use',
    mark:'USE',
    title:'Significado como uso',
    example:'preguntar · ordenar · prometer · rezar · jugar',
    text:'El segundo Wittgenstein objeta que una teoría puramente pictórica es demasiado estrecha para explicar todos los usos del lenguaje.',
  },
]

const wittgensteinModes = [
  {
    id:'first',
    mark:'I',
    title:'Primer Wittgenstein',
    work:'Tractatus',
    thesis:'proposición como figura de un estado de cosas',
    text:'El lenguaje puede representar el mundo porque comparte con él una estructura formal.',
  },
  {
    id:'second',
    mark:'II',
    title:'Segundo Wittgenstein',
    work:'Investigaciones filosóficas',
    thesis:'significado como uso en formas de vida',
    text:'El lenguaje no sirve sólo para describir; funciona en juegos, prácticas, instituciones y acciones diversas.',
  },
]

const categoryCriteria = [
  ['SUJETO DE JUICIO','¿puede ser aquello de lo que se predica algo?'],
  ['FORMA Y MATERIA','¿posee una estructura y determinación propias?'],
  ['DETERMINACIÓN','¿es algo definido y no una pura indeterminación?'],
  ['EN SÍ / DE OTRO','¿se dice en sí mismo o como atributo de otra cosa?'],
  ['CARACTERES PROPIOS','¿posee rasgos que le pertenecen?'],
  ['DEFINICIÓN','¿puede recibir una definición?'],
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

export default function PhilosophyLogicClass22() {
  const [correspondenceId,setCorrespondenceId] = useState('linguistic')
  const [stateFactId,setStateFactId] = useState('state')
  const [atomId,setAtomId] = useState('atomic')
  const [languageId,setLanguageId] = useState('perfect')
  const [russellId,setRussellId] = useState('external')
  const [objectionId,setObjectionId] = useState('use')
  const [wittId,setWittId] = useState('first')

  const correspondence = useMemo(
    () => correspondenceModes.find(x=>x.id===correspondenceId) || correspondenceModes[1],
    [correspondenceId],
  )
  const stateFact = useMemo(
    () => stateFactModes.find(x=>x.id===stateFactId) || stateFactModes[0],
    [stateFactId],
  )
  const atom = useMemo(
    () => atomModes.find(x=>x.id===atomId) || atomModes[0],
    [atomId],
  )
  const language = useMemo(
    () => languageModes.find(x=>x.id===languageId) || languageModes[1],
    [languageId],
  )
  const russell = useMemo(
    () => russellConditions.find(x=>x.id===russellId) || russellConditions[2],
    [russellId],
  )
  const objection = useMemo(
    () => objectionModes.find(x=>x.id===objectionId) || objectionModes[3],
    [objectionId],
  )
  const witt = useMemo(
    () => wittgensteinModes.find(x=>x.id===wittId) || wittgensteinModes[0],
    [wittId],
  )

  return (
    <main className="flc1-page flc22-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>11 · V · 2026</span>
      </nav>

      <header className="flc1-hero flc22-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>P</span><span>↔</span><span>E</span><span>P∧Q</span><span>≅</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 22 · Segundo parcial</p>
          <h1>Correspondencia, atomismo <em>y lenguaje</em></h1>
          <p className="flc1-lead">
            La sesión vuelve a una concepción inflacionista de la verdad: una proposición
            es verdadera cuando aquello que afirma corresponde con un estado de cosas real.
            Desde ahí recorre el giro lingüístico, el atomismo lógico y la teoría pictórica,
            hasta la crítica del segundo Wittgenstein.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Puede la verdad explicarse como una correspondencia estructural entre lenguaje y mundo?</strong>
          <small>Proposición → estado de cosas → atomismo → isomorfismo → uso.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XXII</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              De adecuación clásica a significado como uso
            </SectionTitle>

            <div className="flc22-route">
              {route.map(([n,t,x])=>(
                <article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>
              ))}
            </div>

            <div className="flc22-master">
              <span>ADECUACIÓN</span><b>→</b>
              <span>PROPOSICIÓN</span><b>→</b>
              <span>ATOMISMO</span><b>→</b>
              <span>ISOMORFISMO</span><b>→</b>
              <span>USO</span>
            </div>

            <LogicFigureNote
              noteId="22-ruta"
              what="El recorrido histórico-conceptual completo de la sesión."
              how="La clase empieza con la intuición clásica de adecuación, la traduce a lenguaje lógico, la radicaliza en el atomismo y termina mostrando sus límites."
              why="Sin esta secuencia, Russell y los dos Wittgenstein parecen temas aislados."
              takeaway="La clase estudia una teoría fuerte de correspondencia y después pregunta si el lenguaje puede reducirse realmente a representar estados de cosas."
            />
          </section>

          <section id="correspondencia" className="flc1-section">
            <SectionTitle number="01" eyebrow="Adaequatio">
              La verdad como correspondencia
            </SectionTitle>

            <div className="flc22-tabs two">
              {correspondenceModes.map(item=>(
                <button type="button" key={item.id} className={item.id===correspondenceId?'is-active':''} onClick={()=>setCorrespondenceId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc22-reader blue">
              <div><span>{correspondence.mark}</span><h3>{correspondence.title}</h3><code>{correspondence.formula}</code></div>
              <div><strong>{correspondence.figure}</strong><p>{correspondence.text}</p></div>
            </div>

            <div className="flc22-truth-formula">
              <span>PROPOSICIÓN P</span><b>↔</b>
              <span>ESTADO DE COSAS E</span><b>→</b>
              <strong>VERDAD SI E ES REAL</strong>
            </div>

            <LogicFigureNote
              noteId="22-correspondencia"
              what="Las dos formas de presentar la intuición correspondentista en la sesión."
              how="La versión clásica relaciona intelecto y realidad; la versión del siglo XX reemplaza la representación privada por una proposición públicamente analizable."
              why="La clase insiste en que la teoría moderna no abandona correspondencia: cambia el tipo de término que entra en relación con el mundo."
              takeaway="Una proposición es verdadera si el estado de cosas que afirma se cumple en la realidad."
            />
          </section>

          <section id="giro-linguistico" className="flc1-section">
            <SectionTitle number="02" eyebrow="A mente ad linguam">
              De la representación mental al lenguaje
            </SectionTitle>

            <div className="flc22-shift">
              <article>
                <span>PROBLEMA CLÁSICO</span>
                <strong>representación mental</strong>
                <p>subjetiva · privada · difícil de analizar públicamente</p>
              </article>
              <b>→</b>
              <article className="dark">
                <span>GIRO LINGÜÍSTICO</span>
                <strong>proposición</strong>
                <p>pública · formalizable · comparable estructuralmente</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="22-giro"
              what="La razón metodológica para desplazar el análisis de la mente al lenguaje."
              how="La flecha no niega que haya pensamiento; muestra que el lenguaje ofrece un objeto más público y formalizable."
              why="Este giro prepara el atomismo lógico y la teoría pictórica."
              takeaway="La verdad pasa a estudiarse como relación entre proposición y estado de cosas."
            />
          </section>

          <section id="estado-hecho" className="flc1-section">
            <SectionTitle number="03" eyebrow="Status rerum / factum">
              Estado de cosas y hecho no son idénticos en la reconstrucción de la clase
            </SectionTitle>

            <div className="flc22-tabs two">
              {stateFactModes.map(item=>(
                <button type="button" key={item.id} className={item.id===stateFactId?'is-active':''} onClick={()=>setStateFactId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc22-reader violet">
              <div><span>{stateFact.mark}</span><h3>{stateFact.title}</h3><blockquote>{stateFact.example}</blockquote></div>
              <div><strong>{stateFact.status}</strong><p>{stateFact.text}</p></div>
            </div>

            <div className="flc22-state-chain">
              <span>COSAS + RELACIONES</span><b>→</b>
              <span>ESTADO DE COSAS</span><b>→ sujeto / lenguaje →</b>
              <strong>HECHO AFIRMADO</strong>
            </div>

            <LogicFigureNote
              noteId="22-estado-hecho"
              what="La distinción terminológica que la propia clase establece entre configuración del mundo y formulación afirmativa."
              how="La realidad aporta cosas y relaciones; el sujeto formula lingüísticamente una afirmación acerca de ellas."
              why="La fuente repite que 'el mundo no me da hechos formulados'."
              takeaway="Los objetos y relaciones se dan; los hechos, en este vocabulario de clase, se afirman mediante proposiciones."
            />
          </section>

          <section id="mundo" className="flc1-section">
            <SectionTitle number="04" eyebrow="Mundus non affirmat">
              El mundo no afirma absolutamente nada
            </SectionTitle>

            <div className="flc22-world">
              <article>
                <span>REALIDAD</span>
                <strong>una silla blanca</strong>
                <p>cosas + relaciones + propiedades</p>
              </article>
              <div>≠</div>
              <article className="dark">
                <span>SUJETO</span>
                <strong>“La silla es blanca.”</strong>
                <p>acto lingüístico afirmativo</p>
              </article>
            </div>

            <div className="flc22-world-rule">
              <span>OBJETOS</span><strong>se experimentan / se nombran</strong>
              <b>·</b>
              <span>HECHOS</span><strong>se afirman</strong>
            </div>

            <LogicFigureNote
              noteId="22-mundo"
              what="La tesis didáctica más repetida de la sesión sobre mundo y afirmación."
              how="El lado izquierdo contiene la realidad; el derecho, la proposición construida por el sujeto."
              why="Esto impide confundir un estado del mundo con una oración acerca de ese estado."
              takeaway="La correspondencia exige dos polos: aquello que hay y aquello que se afirma acerca de ello."
            />
          </section>

          <section id="wittgenstein1" className="flc1-section">
            <SectionTitle number="05" eyebrow="Tractatus · primus Wittgenstein">
              Una proposición verdadera proyecta correctamente un estado de cosas
            </SectionTitle>

            <div className="flc22-projection">
              <article><span>PROPOSICIÓN</span><strong>forma lógica</strong></article>
              <b>⟶</b>
              <article className="dark"><span>PROYECCIÓN</span><strong>estructura compartida</strong></article>
              <b>⟶</b>
              <article><span>ESTADO DE COSAS</span><strong>relaciones en el mundo</strong></article>
            </div>

            <div className="flc22-projection-note">
              <strong>Hecho — estado de cosas — pensamiento verdadero</strong>
              <p>La clase usa esta secuencia para explicar el primer Wittgenstein.</p>
            </div>

            <LogicFigureNote
              noteId="22-primer-wittgenstein"
              what="La imagen de proyección con la que la sesión explica la relación entre proposición y mundo."
              how="Una estructura lingüística representa una posible organización de objetos; cuando esa organización se cumple, la proposición es verdadera."
              why="Esta es la base de la lectura pictórica posterior."
              takeaway="La verdad requiere una correspondencia de estructura, no una semejanza superficial entre palabras y objetos."
            />
          </section>

          <section id="frege" className="flc1-section">
            <SectionTitle number="06" eyebrow="Frege">
              Verdad como noción primitiva e indefinible
            </SectionTitle>

            <div className="flc22-frege">
              <span>VERDAD</span>
              <b>≠</b>
              <span>CONCEPTO REDUCIBLE A ALGO MÁS BÁSICO</span>
              <b>→</b>
              <strong>NOCIÓN PRIMITIVA</strong>
            </div>

            <div className="flc22-frege-note">
              <span>SEGÚN LA RECONSTRUCCIÓN DE LA CLASE</span>
              <strong>unas proposiciones poseen verdad y otras no; la verdad funciona como valor lógico fundamental.</strong>
            </div>

            <LogicFigureNote
              noteId="22-frege"
              what="La posición atribuida a Frege dentro del mapa de la sesión."
              how="El diagrama bloquea una cadena de definiciones reductivas y coloca verdad como noción básica."
              why="Frege cumple aquí un papel distinto al de Russell y Wittgenstein: no se identifica simplemente con el atomismo lógico."
              takeaway="En esta clase, la verdad fregeana no se analiza mediante conceptos más simples."
            />
          </section>

          <section id="atomismo" className="flc1-section">
            <SectionTitle number="07" eyebrow="Atomismus logicus">
              Analizar lenguaje y mundo en unidades simples
            </SectionTitle>

            <div className="flc22-atomism">
              <article>
                <span>LENGUAJE</span>
                <strong>proposición compleja</strong>
                <b>↓ análisis</b>
                <small>P · Q · R</small>
              </article>
              <div>≅</div>
              <article className="dark">
                <span>MUNDO</span>
                <strong>estado complejo</strong>
                <b>↓ análisis</b>
                <small>hechos / estados simples</small>
              </article>
            </div>

            <LogicFigureNote
              noteId="22-atomismo"
              what="La analogía atomista que organiza a Russell, Wittgenstein y Whitehead en la sesión."
              how="Ambos lados se descomponen: lenguaje en proposiciones simples y mundo en unidades o estados simples."
              why="El atomismo promete explicar la verdad de lo complejo a partir de correspondencias elementales."
              takeaway="Analizar una proposición es descubrir las unidades y relaciones lógicas que deberían reflejar la estructura del mundo."
            />
          </section>

          <section id="atomicas" className="flc1-section">
            <SectionTitle number="08" eyebrow="Atomica / molecularia">
              Proposiciones atómicas y moleculares
            </SectionTitle>

            <div className="flc22-tabs two">
              {atomModes.map(item=>(
                <button type="button" key={item.id} className={item.id===atomId?'is-active':''} onClick={()=>setAtomId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc22-reader green">
              <div><span>{atom.mark}</span><h3>{atom.title}</h3><blockquote>{atom.example}</blockquote></div>
              <div><strong>{atom.structure}</strong><small>{atom.verification}</small><p>{atom.text}</p></div>
            </div>

            <div className="flc22-conjunction">
              <span>P</span><b>∧</b><span>Q</span><b>→</b>
              <strong>V sólo si P = V y Q = V</strong>
            </div>

            <LogicFigureNote
              noteId="22-atomicas"
              what="La diferencia entre unidades básicas y composiciones lógicas."
              how="Una proposición molecular hereda su valor de verdad de componentes atómicos y de las reglas del conectivo."
              why="Aquí el atomismo lógico se conecta directamente con cálculo proposicional."
              takeaway="La verdad de lo complejo puede calcularse si conocemos verdad de componentes y estructura lógica."
            />
          </section>

          <section id="verificacion" className="flc1-section">
            <SectionTitle number="09" eyebrow="Principium verificationis">
              Significado y verificabilidad
            </SectionTitle>

            <div className="flc22-verification">
              <article>
                <span>PROPOSICIÓN</span>
                <strong>¿cómo podría verificarse?</strong>
              </article>
              <b>→</b>
              <article>
                <span>EMPÍRICA</span>
                <strong>contraste con experiencia</strong>
              </article>
              <b>o</b>
              <article className="dark">
                <span>FORMAL</span>
                <strong>verificación lógica</strong>
              </article>
            </div>

            <div className="flc22-god">
              <span>EJEMPLO DE LA CLASE</span>
              <strong>“Dios es amor.”</strong>
              <p>En el encuadre positivista presentado, si no describe un estado empíricamente verificable, se clasificaría como carente de sentido lógico-empírico, no simplemente como falsa.</p>
            </div>

            <LogicFigureNote
              noteId="22-verificacion"
              what="El principio de verificación que la clase conecta con el positivismo lógico."
              how="La pregunta no es todavía si la proposición es verdadera, sino qué procedimiento permitiría verificarla."
              why="El atomismo empuja hacia una concepción donde significado y posibilidad de verificación quedan estrechamente ligados."
              takeaway="Lo no verificable se problematiza como carencia de sentido dentro del marco lógico-empírico presentado."
            />
          </section>

          <section id="estructura" className="flc1-section">
            <SectionTitle number="10" eyebrow="Correspondentia structuralis">
              No es palabra ↔ cosa: es estructura ↔ estructura
            </SectionTitle>

            <div className="flc22-structure">
              <article>
                <span>LENGUAJE</span>
                <strong>“Los lentes están sobre la mesa.”</strong>
                <small>objeto₁ — relación — objeto₂</small>
              </article>
              <b>≅</b>
              <article className="dark">
                <span>MUNDO</span>
                <strong>lentes sobre mesa</strong>
                <small>objeto₁ — relación — objeto₂</small>
              </article>
            </div>

            <div className="flc22-convention">
              <span>“LENTES” / “GLASSES”</span><b>→</b><strong>convención lingüística</strong>
              <span>“SOBRE”</span><b>→</b><strong>relación que busca representar estructura real</strong>
            </div>

            <LogicFigureNote
              noteId="22-estructural"
              what="La correspondencia estructural que la clase atribuye a Russell y al primer Wittgenstein."
              how="Los nombres pueden variar entre idiomas; lo decisivo es que la disposición lógica de la proposición compagine con la relación del estado de cosas."
              why="Esto evita una teoría ingenua donde cada palabra tuviera que parecerse físicamente a su objeto."
              takeaway="La verdad pictórica depende de forma relacional compartida, no de vocabulario particular."
            />
          </section>

          <section id="isomorfismo" className="flc1-section">
            <SectionTitle number="11" eyebrow="Isomorphismus">
              Lenguaje y mundo compaginan formalmente
            </SectionTitle>

            <div className="flc22-tabs two">
              {languageModes.map(item=>(
                <button type="button" key={item.id} className={item.id===languageId?'is-active':''} onClick={()=>setLanguageId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc22-reader red">
              <div><span>{language.mark}</span><h3>{language.title}</h3><code>{language.traits}</code></div>
              <p>{language.text}</p>
            </div>

            <div className="flc22-isomorphism">
              <span>FORMA LÓGICA DEL LENGUAJE</span><b>≅</b>
              <strong>FORMA LÓGICA DEL MUNDO</strong>
            </div>

            <LogicFigureNote
              noteId="22-isomorfismo"
              what="La idea de isomorfismo que la sesión atribuye a Russell."
              how="El símbolo ≅ expresa semejanza o compaginación estructural, no identidad material."
              why="La fuente limita el isomorfismo fuerte a un lenguaje lógico perfecto, no al habla cotidiana sin análisis."
              takeaway="Representar correctamente exige exhibir la forma lógica relevante del estado de cosas."
            />
          </section>

          <section id="tractatus" className="flc1-section">
            <SectionTitle number="12" eyebrow="Theoria pictorica">
              La proposición como figura o modelo de la realidad
            </SectionTitle>

            <div className="flc22-picture">
              <article>
                <span>MODELO</span>
                <strong>una maqueta</strong>
                <p>representa una disposición espacial sin ser el edificio</p>
              </article>
              <b>≈</b>
              <article className="dark">
                <span>PROPOSICIÓN</span>
                <strong>una figura lógica</strong>
                <p>representa una disposición posible de objetos</p>
              </article>
            </div>

            <div className="flc22-mirror">
              <span>ANALOGÍA DE LA CLASE</span>
              <strong>la proposición refleja la realidad como una imagen</strong>
            </div>

            <LogicFigureNote
              noteId="22-pictorica"
              what="La teoría pictórica del lenguaje presentada a partir del Tractatus."
              how="La analogía con maqueta o espejo no significa parecido visual literal; significa capacidad de representar una estructura."
              why="Esta teoría explica cómo una proposición puede ser verdadera o falsa según exista o no la configuración que figura."
              takeaway="Una proposición representa una posibilidad del mundo mediante su forma lógica."
            />
          </section>

          <section id="russell" className="flc1-section">
            <SectionTitle number="13" eyebrow="Russell · tres condiciones">
              Qué debe explicar una teoría correcta de la verdad
            </SectionTitle>

            <div className="flc22-tabs three">
              {russellConditions.map(item=>(
                <button type="button" key={item.id} className={item.id===russellId?'is-active':''} onClick={()=>setRussellId(item.id)}>
                  <span>{item.number}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc22-reader blue">
              <div><span>{russell.number}</span><h3>{russell.title}</h3><code>{russell.formula}</code></div>
              <p>{russell.text}</p>
            </div>

            <LogicFigureNote
              noteId="22-russell"
              what="Las tres condiciones para una teoría correcta de la verdad atribuidas a Russell en la sesión."
              how="Los botones separan falsedad, portadores de verdad y relación con realidad externa."
              why="Las tres juntas definen el carácter inflacionista y correspondentista de la propuesta."
              takeaway="Verdad requiere explicar qué puede ser falso, qué cosas llevan verdad y de qué depende esa propiedad."
            />
          </section>

          <section id="objeciones" className="flc1-section">
            <SectionTitle number="14" eyebrow="Obiectiones">
              Cuatro puntos de presión sobre la correspondencia
            </SectionTitle>

            <div className="flc22-tabs four">
              {objectionModes.map(item=>(
                <button type="button" key={item.id} className={item.id===objectionId?'is-active':''} onClick={()=>setObjectionId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc22-reader violet">
              <div><span>{objection.mark}</span><h3>{objection.title}</h3><blockquote>{objection.example}</blockquote></div>
              <p>{objection.text}</p>
            </div>

            <LogicFigureNote
              noteId="22-objeciones"
              what="Las principales objeciones que la fuente reúne después de desarrollar el correspondentismo."
              how="No todas atacan el mismo punto: unas cuestionan el predicado de verdad, otras el contexto, otras teorías rivales y otra la reducción descriptiva del lenguaje."
              why="Separarlas evita convertir el cierre de la clase en una sola objeción indiferenciada."
              takeaway="Correspondencia conserva fuerza intuitiva, pero no explica automáticamente todos los portadores, contextos y funciones del lenguaje."
            />
          </section>

          <section id="wittgenstein2" className="flc1-section">
            <SectionTitle number="15" eyebrow="Wittgenstein I / II">
              De figura de la realidad a significado como uso
            </SectionTitle>

            <div className="flc22-tabs two">
              {wittgensteinModes.map(item=>(
                <button type="button" key={item.id} className={item.id===wittId?'is-active':''} onClick={()=>setWittId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc22-reader green">
              <div><span>{witt.mark}</span><h3>{witt.title}</h3><code>{witt.work}</code></div>
              <div><strong>{witt.thesis}</strong><p>{witt.text}</p></div>
            </div>

            <div className="flc22-uses">
              <span>preguntar</span>
              <span>ordenar</span>
              <span>prometer</span>
              <span>rezar</span>
              <span>jugar</span>
              <span>saludar</span>
              <span>expresar dolor</span>
              <span>narrar</span>
            </div>

            <LogicFigureNote
              noteId="22-wittgenstein2"
              what="El contraste interno entre el primer y el segundo Wittgenstein tal como la clase lo utiliza."
              how="El primer modelo privilegia representación; el segundo amplía el lenguaje hacia usos y formas de vida."
              why="Ésta es la objeción más profunda al intento de hacer de correspondencia una teoría general de todo lenguaje."
              takeaway="Describir estados de cosas es sólo uno de los muchos juegos que hacemos con palabras."
            />
          </section>

          <section id="entidades" className="flc1-section">
            <SectionTitle number="16" eyebrow="Appendix ontologicum">
              Criterios orientadores para hablar de entidades
            </SectionTitle>

            <div className="flc22-entities">
              {categoryCriteria.map(([title,text])=>(
                <article key={title}><span>{title}</span><p>{text}</p></article>
              ))}
            </div>

            <div className="flc22-entity-warning">
              <span>ADVERTENCIA DE LA CLASE</span>
              <strong>Ningún criterio aislado es absolutamente conclusivo.</strong>
              <p>El profesor conecta este problema con Aristóteles y con la tesis de que el ser se dice en muchos sentidos, evitando convertir cualquier característica en una entidad independiente.</p>
            </div>

            <LogicFigureNote
              noteId="22-entidades"
              what="El comentario filosófico final de la sesión sobre cómo identificar entidades."
              how="Las tarjetas funcionan como criterios orientadores, no como una prueba mecánica."
              why="La fuente introduce este punto al final y lo conecta con Aristóteles y el riesgo de platonizar propiedades."
              takeaway="Distinguir entidad de cantidad, cualidad, relación u otras categorías requiere análisis, no una regla única."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="17" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc22-summary">
              <article><span>IDEA 1</span><h3>Verdad = correspondencia</h3><p>Una proposición es verdadera cuando el estado de cosas que afirma es real.</p></article>
              <article><span>IDEA 2</span><h3>El giro es lingüístico</h3><p>La relación deja de formularse principalmente entre representación mental y objeto.</p></article>
              <article><span>IDEA 3</span><h3>Atomismo = análisis estructural</h3><p>Proposiciones complejas y mundo complejo se analizan en unidades simples.</p></article>
              <article><span>IDEA 4</span><h3>El lenguaje excede la imagen</h3><p>El segundo Wittgenstein muestra usos que no se reducen a describir estados de cosas.</p></article>
            </div>

            <div className="flc22-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué significa verdad como adecuación?</li>
                <li>¿Por qué la teoría de correspondencia es inflacionista?</li>
                <li>¿Qué cambia cuando pasamos de representación mental a proposición?</li>
                <li>¿Qué diferencia estado de cosas y hecho en la terminología de esta clase?</li>
                <li>¿Qué significa “el mundo no afirma nada”?</li>
                <li>¿Por qué los objetos se nombran y los hechos se afirman?</li>
                <li>¿Cómo explica el primer Wittgenstein una proposición verdadera?</li>
                <li>¿Qué significa que Frege trate verdad como noción primitiva?</li>
                <li>¿Qué es el atomismo lógico?</li>
                <li>¿Qué diferencia proposición atómica y molecular?</li>
                <li>¿Cómo se calcula la verdad de P∧Q?</li>
                <li>¿Qué sostiene el principio de verificación?</li>
                <li>¿Por qué “Dios es amor” aparece como ejemplo problemático?</li>
                <li>¿Qué significa correspondencia estructural?</li>
                <li>¿Qué parte del lenguaje es convencional y qué parte busca representar relaciones?</li>
                <li>¿Qué significa isomorfismo entre lenguaje y mundo?</li>
                <li>¿Por qué el lenguaje lógico perfecto es importante?</li>
                <li>¿Qué es la teoría pictórica del Tractatus?</li>
                <li>¿Cuáles son las tres condiciones de Russell?</li>
                <li>¿Qué objeción introduce el contexto?</li>
                <li>¿Qué cambia entre el primer y segundo Wittgenstein?</li>
                <li>¿Qué significa “el significado de una palabra es su uso”?</li>
                <li>¿Por qué correspondencia puede ser demasiado estrecha como teoría general del lenguaje?</li>
                <li>¿Qué criterios orientan la identificación de entidades?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Nota sobre la fuente</strong>
              <p>El documento del 11 de mayo es una versión de trabajo reconstruida a partir de notas y de una transcripción previamente reconstruida que comienza a media explicación. Esta página conserva la sistematización, ejemplos y distinciones del documento sin presentarlas como transcripción literal palabra por palabra.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 22 · 11 mayo 2026</span>
      </footer>
    </main>
  )
}
