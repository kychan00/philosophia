import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass10.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],['01','sistemas','Interpretación'],
  ['02','formalizacion','Formalización'],['03','aristoteles','Aristóteles'],
  ['04','categoricas','A · E · I · O'],['05','limites','Límites'],
  ['06','frege','Frege'],['07','argumento','Dos “argumentos”'],
  ['08','saturacion','Saturación'],['09','conceptos','Intensión y extensión'],
  ['10','comparacion','Aristóteles / Frege'],['11','cierre','Síntesis docente'],
]

const route = [
  ['1','Reconstruir','Formalizar no es copiar: es hacer visible una estructura lógica.'],
  ['2','Aristóteles','La silogística analiza proposiciones categóricas bajo el molde sujeto–predicado.'],
  ['3','Detectar límites','Nombres singulares y formas no categóricas tensan ese lenguaje formal.'],
  ['4','Frege','La unidad básica pasa a pensarse como función–argumento.'],
  ['5','Saturar','Una función abierta recibe un argumento y se vuelve expresión completa.'],
]

const systems = [
  {id:'interpretado',mark:'I',title:'Interpretado',formula:'símbolos + dominio fijado',text:'Los signos están ligados desde el inicio a un dominio específico, como números o relaciones espaciales.'},
  {id:'puro',mark:'Ø',title:'No interpretado',formula:'estructura primero',text:'El sistema estudia inicialmente relaciones formales sin fijar todavía un contenido concreto.'},
  {id:'proposicional',mark:'P/Q',title:'Lectura usual',formula:'fórmulas → proposiciones',text:'La interpretación elemental habitual entiende los elementos como proposiciones susceptibles de verdad o falsedad.'},
]

const aeio = [
  ['A','Universal afirmativa','Todo S es P'],['E','Universal negativa','Ningún S es P'],
  ['I','Particular afirmativa','Algún S es P'],['O','Particular negativa','Algún S no es P'],
]

const limits = [
  {id:'forma',mark:'S–P',title:'Molde sujeto–predicado',text:'La teoría privilegia expresiones analizables como algo que se afirma o niega de un sujeto.'},
  {id:'generales',mark:'∀S',title:'Términos generales',text:'Los términos generales admiten cuantificación, oposición y subordinación con gran naturalidad dentro del sistema.'},
  {id:'singulares',mark:'a',title:'Nombres propios',text:'Un singular como “Sócrates” no se comporta como una clase general y revela una tensión importante del aparato silogístico.'},
]

const fregeModes = [
  {id:'aristoteles',mark:'S—P',title:'Sujeto–predicado',example:'Sócrates | es hombre',text:'La oración aparece como algo que se dice de un sujeto.'},
  {id:'frege',mark:'f(x)',title:'Función–argumento',example:'es hombre( Sócrates )',text:'“Es hombre” deja un lugar abierto y “Sócrates” ocupa el lugar reemplazable del argumento.'},
]

const argumentModes = [
  {id:'clasico',mark:'P₁…∴C',title:'Argumento lógico',definition:'premisas + conclusión + dependencia inferencial',example:'P₁, P₂ ∴ C'},
  {id:'fregeano',mark:'x',title:'Argumento fregeano',definition:'elemento reemplazable que completa una función',example:'f(x) → f(a)'},
]

const saturationModes = [
  {id:'abierta',mark:'x',title:'No saturada',expr:'x es mortal',truth:'todavía no V/F',text:'La variable mantiene un lugar abierto; todavía no hay una proposición completa.'},
  {id:'cerrada',mark:'a',title:'Saturada',expr:'Sócrates es mortal',truth:'ya admite V/F',text:'El argumento ocupa el lugar abierto y la expresión completa ya puede recibir valor de verdad.'},
]

const concepts = [
  {id:'intension',mark:'INT',title:'Intensión',sub:'contenido conceptual',text:'El contenido conceptual o funcional expresado por un término o concepto.'},
  {id:'extension',mark:'EXT',title:'Extensión',sub:'objetos que lo satisfacen',text:'El conjunto de objetos a los que el concepto puede aplicarse correctamente.'},
  {id:'dominio',mark:'D',title:'Dominio',sub:'sustituciones posibles',text:'El horizonte de objetos que pueden ocupar legítimamente el lugar de una variable.'},
]

const comparison = [
 ['Forma básica','Sujeto–predicado','Función–argumento'],
 ['Material privilegiado','Términos generales y proposiciones categóricas','Funciones, variables, nombres y argumentos'],
 ['Relación central','Subordinación entre conceptos o clases','Saturación de funciones por argumentos'],
 ['Trasfondo','Sustancias y atributos','Estructura formal del pensamiento'],
 ['Dificultad','Nombres propios y formas no categóricas','Mayor abstracción conceptual'],
 ['“Argumento”','Premisas y conclusión relacionadas','Elemento reemplazable dentro de una función'],
]

const scrollTo = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

function SectionTitle({number,eyebrow,children}) {
  return <div className="flc1-section-title"><span>{number}</span><div><p>{eyebrow}</p><h2>{children}</h2></div></div>
}

export default function PhilosophyLogicClass10() {
  const [systemId,setSystemId] = useState('puro')
  const [limitId,setLimitId] = useState('singulares')
  const [fregeId,setFregeId] = useState('frege')
  const [argumentId,setArgumentId] = useState('fregeano')
  const [saturationId,setSaturationId] = useState('abierta')
  const [conceptId,setConceptId] = useState('intension')

  const system = useMemo(()=>systems.find(x=>x.id===systemId)||systems[1],[systemId])
  const limit = useMemo(()=>limits.find(x=>x.id===limitId)||limits[2],[limitId])
  const frege = useMemo(()=>fregeModes.find(x=>x.id===fregeId)||fregeModes[1],[fregeId])
  const argument = useMemo(()=>argumentModes.find(x=>x.id===argumentId)||argumentModes[1],[argumentId])
  const saturation = useMemo(()=>saturationModes.find(x=>x.id===saturationId)||saturationModes[0],[saturationId])
  const concept = useMemo(()=>concepts.find(x=>x.id===conceptId)||concepts[0],[conceptId])

  return (
    <main className="flc1-page flc10-page">
      <div className="flc1-noise" aria-hidden="true" />
      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>09 · III · 2026</span>
      </nav>

      <header className="flc1-hero flc10-hero">
        <div className="flc1-hero-symbols" aria-hidden="true"><span>A/E/I/O</span><span>S–P</span><span>f(x)</span><span>∈</span><span>V/F</span></div>
        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 10</p>
          <h1>Aristóteles, Frege <em>y la forma lógica</em></h1>
          <p className="flc1-lead">La sesión reconstruye el paso desde la silogística aristotélica, centrada en proposiciones categóricas y relaciones entre conceptos, hacia el análisis fregeano mediante funciones, argumentos, variables y expresiones no saturadas.</p>
        </div>
        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Por qué la forma gramatical visible no basta para revelar la estructura lógica?</strong>
          <small>Formalización → sujeto–predicado → límites → función–argumento.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN X</p>
          {sections.map(([n,id,label])=><button type="button" key={id} onClick={()=>scrollTo(id)}><span>{n}</span>{label}</button>)}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">De la gramática visible a la estructura lógica</SectionTitle>
            <div className="flc10-route">{route.map(([n,t,x])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}</div>
            <div className="flc10-master-line"><span>LENGUAJE</span><b>→</b><span>FORMALIZACIÓN</span><b>→</b><span>ARISTÓTELES</span><b>→</b><span>LÍMITES</span><b>→</b><span>FREGE</span></div>
            <LogicFigureNote noteId="10-ruta" what="El recorrido completo de la sesión: del problema de formalizar lenguaje a la comparación entre dos arquitecturas lógicas." how="Léalo de izquierda a derecha. Cada flecha representa una transformación conceptual, no sólo una sucesión cronológica." why="La clase usa historia de la lógica para mostrar que distintas teorías reconstruyen de manera diferente una misma expresión lingüística." takeaway="La forma lógica es una reconstrucción teórica y no tiene por qué coincidir con la forma gramatical superficial." />
          </section>

          <section id="sistemas" className="flc1-section">
            <SectionTitle number="01" eyebrow="Interpretatio">Sistemas interpretados y no interpretados</SectionTitle>
            <div className="flc10-system-tabs">{systems.map(x=><button type="button" key={x.id} className={x.id===systemId?'is-active':''} onClick={()=>setSystemId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc10-reader is-blue"><div><span>{system.mark}</span><h3>{system.title}</h3><code>{system.formula}</code></div><p>{system.text}</p></div>
            <LogicFigureNote noteId="10-sistemas" what="Tres modos de relacionar estructura e interpretación." how="Compare qué ocurre con los símbolos en cada opción: pueden venir ya ligados a un dominio o recibir contenido después." why="Esta distinción prepara la formalización: antes de representar una oración hay que distinguir su estructura del contenido concreto con el que aparece." takeaway="Formalizar exige separar estructura e interpretación." />
          </section>

          <section id="formalizacion" className="flc1-section">
            <SectionTitle number="02" eyebrow="Reconstructio">Formalizar no es copiar el lenguaje natural</SectionTitle>
            <div className="flc10-three">
              <article><span>01 · ENTRADA</span><h3>Lenguaje natural</h3><p>Rico, ambiguo, metafórico y contextual.</p></article><b>→</b>
              <article className="is-dark"><span>02 · OPERACIÓN</span><h3>Reconstrucción</h3><p>Selecciona aquello que puede expresarse mediante una sintaxis lógica precisa.</p></article><b>→</b>
              <article><span>03 · SALIDA</span><h3>Lenguaje formal</h3><p>Estructura explícita y controlable.</p></article>
            </div>
            <div className="flc10-callout"><span>TESIS</span><strong>Formalizar es abstraer, depurar y reconstruir la estructura racional de lo dicho.</strong></div>
            <LogicFigureNote noteId="10-formalizacion" what="La transformación de una expresión natural en una representación formal." how="La etapa central evita leer la flecha como traducción palabra por palabra: hay selección, interpretación y simplificación." why="El lenguaje natural contiene rasgos que un sistema lógico no pretende conservar íntegramente." takeaway="Una formalización es una reconstrucción orientada al análisis, no una copia sin pérdida." />
          </section>

          <section id="aristoteles" className="flc1-section">
            <SectionTitle number="03" eyebrow="Praedicare">Aristóteles: sujeto, predicado y trasfondo metafísico</SectionTitle>
            <div className="flc10-subject-predicate">
              <article><span>SUJETO</span><strong>Sócrates</strong><small>aquello de lo que se habla</small></article>
              <b>es</b>
              <article className="is-dark"><span>PREDICADO</span><strong>mortal</strong><small>aquello que se atribuye</small></article>
            </div>
            <div className="flc10-dual"><article><span>FORMA LÓGICA</span><strong>sujeto — predicado</strong></article><b>↕</b><article><span>TRASFONDO</span><strong>sustancia — atributo</strong></article></div>
            <LogicFigureNote noteId="10-aristoteles" what="La correspondencia que la clase traza entre análisis sujeto–predicado y una metafísica de sustancias y atributos." how="La parte superior describe cómo se analiza la oración; la inferior explica el trasfondo filosófico que vuelve natural esa forma." why="La sesión quiere mostrar que las teorías lógicas pueden incorporar compromisos filosóficos sobre qué tipos de cosas existen." takeaway="En el marco explicado en clase, la forma lógica aristotélica está estrechamente vinculada con su ontología." />
          </section>

          <section id="categoricas" className="flc1-section">
            <SectionTitle number="04" eyebrow="Quantitas et qualitas">Las cuatro formas categóricas</SectionTitle>
            <div className="flc10-aeio">{aeio.map(([l,t,f])=><article key={l}><span>{l}</span><h3>{t}</h3><strong>{f}</strong></article>)}</div>
            <div className="flc10-axes"><article><span>CANTIDAD</span><strong>universal / particular</strong></article><b>×</b><article><span>CUALIDAD</span><strong>afirmativa / negativa</strong></article><b>=</b><article className="is-dark"><span>FORMAS</span><strong>A · E · I · O</strong></article></div>
            <LogicFigureNote noteId="10-aeio" what="La clasificación clásica de las proposiciones categóricas mediante cantidad y cualidad." how="Cruce universal/particular con afirmativa/negativa para obtener A, E, I y O." why="La silogística necesita formas estables para estudiar las relaciones inferenciales entre proposiciones." takeaway="A, E, I y O resultan del cruce sistemático de dos distinciones binarias." />
            <div className="flc10-syllogism"><p>Todos los hombres son mortales.</p><p>Sócrates es hombre.</p><p className="is-conclusion">∴ Sócrates es mortal.</p></div>
            <LogicFigureNote noteId="10-silogismo" what="El ejemplo silogístico usado para exhibir validez y, al mismo tiempo, introducir el problema del nombre singular “Sócrates”." how="Distinga el éxito inferencial del problema representacional: que el razonamiento sea claro no significa que todos sus términos encajen igualmente bien en el aparato formal aristotélico." why="El ejemplo funciona como puente entre la potencia de la silogística y sus límites." takeaway="Una teoría puede analizar correctamente muchas inferencias y aun tener dificultades para representar ciertos tipos de términos." />
          </section>

          <section id="limites" className="flc1-section">
            <SectionTitle number="05" eyebrow="Termini systematis">Límites de la silogística aristotélica</SectionTitle>
            <div className="flc10-limit-tabs">{limits.map(x=><button type="button" key={x.id} className={x.id===limitId?'is-active':''} onClick={()=>setLimitId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc10-reader is-red"><div><span>{limit.mark}</span><h3>{limit.title}</h3></div><p>{limit.text}</p></div>
            <div className="flc10-contrary"><article><span>CLASE</span><strong>mortal / no mortal</strong></article><article><span>CLASE</span><strong>ciudad / no ciudad</strong></article><article className="is-dark"><span>SINGULAR</span><strong>Sócrates / “no Sócrates”</strong></article></div>
            <LogicFigureNote noteId="10-limites" what="La diferencia entre operaciones naturales con clases generales y el comportamiento de un nombre singular." how="Compare los dos primeros pares con el tercero: “mortal” y “ciudad” pueden oponerse como predicados o clases; “Sócrates” no funciona del mismo modo." why="La clase utiliza esta asimetría para explicar por qué el privilegio de términos generales limita la silogística." takeaway="Los nombres propios exigen herramientas formales distintas de las que bastan para relaciones entre conceptos generales." />
            <div className="flc10-containment"><div><span>M · MORTALES</span><div><span>H · HOMBRES</span></div></div><strong>H ⊂ M</strong></div>
            <LogicFigureNote noteId="10-subordinacion" what="La relación de subordinación conceptual que la clase presenta como predominante en la silogística." how="H aparece dentro de M porque todo miembro de H queda incluido en la clase más amplia M." why="La imagen deja claro por qué la teoría aristotélica resulta especialmente poderosa para razonamientos categóricos de inclusión entre clases." takeaway="Una parte importante de la silogística puede entenderse como organización de relaciones de inclusión y exclusión entre conceptos." />
          </section>

          <section id="frege" className="flc1-section">
            <SectionTitle number="06" eyebrow="Mutatio formae">Frege: del sujeto–predicado a función–argumento</SectionTitle>
            <div className="flc10-frege-tabs">{fregeModes.map(x=><button type="button" key={x.id} className={x.id===fregeId?'is-active':''} onClick={()=>setFregeId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc10-reader is-violet"><div><span>{frege.mark}</span><h3>{frege.title}</h3><code>{frege.example}</code></div><p>{frege.text}</p></div>
            <div className="flc10-function"><article><span>FUNCIÓN</span><strong>x es hombre</strong><small>lugar abierto</small></article><b>+</b><article><span>ARGUMENTO</span><strong>Sócrates</strong><small>ocupa el lugar</small></article><b>→</b><article className="is-dark"><span>COMPLETA</span><strong>Sócrates es hombre</strong><small>ya evaluable</small></article></div>
            <LogicFigureNote noteId="10-frege" what="La mecánica de función–argumento tal como se trabaja en la sesión." how="Identifique primero el lugar variable x. Después sustituya ese lugar por un argumento adecuado. La expresión deja de estar abierta." why="Este esquema explica por qué Frege no necesita tomar la división gramatical sujeto–predicado como estructura lógica fundamental." takeaway="En el análisis funcional, una proposición completa resulta de saturar una expresión que contiene un lugar abierto." />
          </section>

          <section id="argumento" className="flc1-section">
            <SectionTitle number="07" eyebrow="Cave vocabulum">“Argumento” significa dos cosas distintas</SectionTitle>
            <div className="flc10-argument-tabs">{argumentModes.map(x=><button type="button" key={x.id} className={x.id===argumentId?'is-active':''} onClick={()=>setArgumentId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc10-reader is-green"><div><span>{argument.mark}</span><h3>{argument.title}</h3><code>{argument.example}</code></div><strong>{argument.definition}</strong></div>
            <LogicFigureNote noteId="10-argumento" what="Una advertencia terminológica: la palabra “argumento” designa dos objetos diferentes." how="En lógica elemental piense en premisas y conclusión; en el uso fregeano piense en aquello que reemplaza la variable de una función." why="La clase subraya la diferencia para evitar errores de lectura y de examen." takeaway="Antes de interpretar “argumento”, hay que identificar en qué sentido técnico se está usando." />
          </section>

          <section id="saturacion" className="flc1-section">
            <SectionTitle number="08" eyebrow="Saturatio">Variables, expresiones abiertas y valor de verdad</SectionTitle>
            <div className="flc10-saturation-tabs">{saturationModes.map(x=><button type="button" key={x.id} className={x.id===saturationId?'is-active':''} onClick={()=>setSaturationId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc10-reader is-blue"><div><span>{saturation.mark}</span><h3>{saturation.expr}</h3><strong>{saturation.truth}</strong></div><p>{saturation.text}</p></div>
            <div className="flc10-master-line"><span>x es mortal</span><b>+</b><span>Sócrates</span><b>→</b><span>Sócrates es mortal</span><b>→</b><span>V / F</span></div>
            <LogicFigureNote noteId="10-saturacion" what="La transición de una función insaturada a una expresión completa susceptible de verdad o falsedad." how="Siga la cadena de izquierda a derecha: la variable deja un hueco; el argumento lo ocupa; sólo entonces tenemos una proposición completa." why="La saturación conecta la teoría funcional con temas anteriores del curso: proposición, verdad y estructura formal." takeaway="Una función abierta no tiene por sí sola valor de verdad; la expresión completa resultante de la saturación sí puede tenerlo." />
            <div className="flc10-thought"><span>IDEA SOBRE EL PENSAMIENTO</span><strong>Las partes de un pensamiento no pueden ser todas completas, pues entonces no podrían ensamblarse entre sí.</strong></div>
            <LogicFigureNote noteId="10-pensamiento" what="La intuición filosófica usada para explicar la función positiva de la incompletud." how="Imagine la función como una pieza con un lugar disponible para otra pieza. Su apertura hace posible la composición." why="La clase conecta una noción formal —insaturación— con una idea acerca de cómo pueden articularse las partes de un pensamiento." takeaway="La incompletud funcional no es un defecto: es la condición que permite combinar expresiones." />
          </section>

          <section id="conceptos" className="flc1-section">
            <SectionTitle number="09" eyebrow="Conceptographia">Intensión, extensión y dominio</SectionTitle>
            <div className="flc10-concept-tabs">{concepts.map(x=><button type="button" key={x.id} className={x.id===conceptId?'is-active':''} onClick={()=>setConceptId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong><small>{x.sub}</small></button>)}</div>
            <div className="flc10-reader is-violet"><div><span>{concept.mark}</span><h3>{concept.title}</h3><small>{concept.sub}</small></div><p>{concept.text}</p></div>
            <div className="flc10-domain"><span>FUNCIÓN</span><strong>x es mortal</strong><div><span>POSIBLES SUSTITUCIONES</span><b>Sócrates</b><b>Platón</b><b>…</b></div></div>
            <LogicFigureNote noteId="10-conceptos" what="Tres preguntas distintas acerca de una función o concepto: qué contenido expresa, a qué objetos se aplica y qué sustituciones admite." how="Cambie de botón y observe qué pregunta responde cada noción. Intensión mira al contenido; extensión a los objetos que satisfacen el concepto; dominio al universo relevante de sustitución." why="Una variable no puede recibir cualquier cosa arbitrariamente: la teoría funcional obliga a pensar qué puede ocupar correctamente ese lugar." takeaway="La saturación depende también del dominio pertinente y de las condiciones de aplicación del concepto." />
          </section>

          <section id="comparacion" className="flc1-section">
            <SectionTitle number="10" eyebrow="Tabula comparativa">Dos arquitecturas de la forma lógica</SectionTitle>
            <div className="flc10-comparison">
              <div className="head"><span>ASPECTO</span><strong>ARISTÓTELES</strong><strong>FREGE</strong></div>
              {comparison.map(([a,b,c])=><div className="row" key={a}><strong>{a}</strong><span>{b}</span><span>{c}</span></div>)}
            </div>
            <LogicFigureNote noteId="10-comparacion" what="Una comparación global de las dos arquitecturas lógicas estudiadas." how="Lea cada fila horizontalmente. No es una tabla de ganadores: compara qué unidad formal privilegia cada teoría y qué tipos de relaciones representa." why="Después de estudiar las piezas por separado, la tabla reconstruye el argumento histórico y filosófico completo de la sesión." takeaway="El paso hacia Frege amplía el repertorio formal al introducir funciones, variables y lugares saturables en lugar de depender únicamente de relaciones categóricas entre términos." />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="11" eyebrow="Ad usum futurum">Síntesis para estudiar y volver a enseñar esta sesión</SectionTitle>
            <div className="flc10-summary">
              <article><span>IDEA 1</span><h3>Formalizar es reconstruir</h3><p>La forma lógica no tiene por qué coincidir con la superficie gramatical.</p></article>
              <article><span>IDEA 2</span><h3>Aristóteles organiza categorías</h3><p>Sujeto, predicado, cantidad, cualidad y subordinación estructuran la silogística.</p></article>
              <article><span>IDEA 3</span><h3>Los límites importan</h3><p>Nombres propios y formas no categóricas muestran qué representa bien cada teoría.</p></article>
              <article><span>IDEA 4</span><h3>Frege cambia la arquitectura</h3><p>Funciones, argumentos y saturación permiten otra reconstrucción de la proposición.</p></article>
            </div>
            <div className="flc10-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué diferencia hay entre sistema interpretado y no interpretado?</li>
                <li>¿Por qué formalizar no es copiar lenguaje natural?</li>
                <li>¿Qué relación establece la clase entre sujeto–predicado y sustancia–atributo?</li>
                <li>¿Cómo surgen A, E, I y O?</li>
                <li>¿Qué problema muestra el nombre propio “Sócrates”?</li>
                <li>¿Qué expresa H ⊂ M?</li>
                <li>¿Qué cambia con función–argumento?</li>
                <li>¿Qué significa “argumento” para Frege?</li>
                <li>¿Qué es una expresión insaturada?</li>
                <li>¿Cuándo aparece la posibilidad de V/F?</li>
                <li>¿Qué diferencia intensión, extensión y dominio?</li>
                <li>¿Qué enseña la comparación Aristóteles/Frege?</li>
              </ol>
            </div>
            <div className="flc1-source-note"><strong>Continuidad</strong><p>La sesión deja instalada la teoría funcional como herramienta para seguir pensando la formalización contemporánea. El material no fija una tarea concreta con fecha.</p></div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer"><Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link><span>Sesión 10 · 9 marzo 2026</span></footer>
    </main>
  )
}
