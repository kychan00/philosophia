import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass11.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','funcion','Función matemática'],
  ['02','dominio','Dominio, codominio e imagen'],
  ['03','frege','Frege y saturación'],
  ['04','completas','Completa / incompleta'],
  ['05','aridad','Funciones monádicas y poliádicas'],
  ['06','operadores','Operadores proposicionales'],
  ['07','cuantificadores','Cuantificadores'],
  ['08','objetuales','Operadores objetuales'],
  ['09','estructura','Estructura interna'],
  ['10','aristoteles','Frege frente a Aristóteles'],
  ['11','tabla','Mapa de funciones y operadores'],
  ['12','cierre','Síntesis docente'],
]

const route = [
  ['1','Matematizar','Comprender función, dominio, codominio e imagen antes de trasladar la noción a la lógica.'],
  ['2','Saturar','Una expresión funcional recibe argumentos y sólo entonces queda determinada.'],
  ['3','Clasificar','La aridad permite distinguir funciones monádicas, diádicas y n-ádicas.'],
  ['4','Elevar nivel','Conectivas y cuantificadores también pueden pensarse funcionalmente.'],
  ['5','Analizar','La teoría funcional permite reconstruir la estructura interna del enunciado.'],
]

const functionViews = [
  {id:'fx',mark:'f(x)',title:'Función',formula:'f(x)=x²+1',text:'Una función asigna a cada elemento admitido del dominio un único valor de salida en el codominio.'},
  {id:'domain',mark:'D',title:'Dominio',formula:'x ∈ D',text:'Conjunto de valores que pueden entrar legítimamente en la función sin volverla indefinida.'},
  {id:'image',mark:'Im',title:'Imagen',formula:'f[D]',text:'Conjunto de valores efectivamente producidos por la función; no debe confundirse sin más con el codominio.'},
]

const fregeViews = [
  {id:'intension',mark:'f',title:'Intensión',sub:'función',text:'La clase presenta la intensión como el contenido funcional que permanece abierto y admite argumentos.'},
  {id:'extension',mark:'Ext',title:'Extensión',sub:'dominio de aplicación',text:'La extensión se vincula con el conjunto de elementos sobre los que puede aplicarse la función.'},
  {id:'argument',mark:'a',title:'Argumento',sub:'valor que satura',text:'El argumento es el elemento que ocupa el lugar variable y completa la función.'},
]

const saturationViews = [
  {id:'open',mark:'x',title:'Incompleta',expr:'x es mortal',result:'sin V/F todavía',text:'Mientras el lugar variable permanezca abierto, la función proposicional todavía no forma una proposición completa.'},
  {id:'closed',mark:'s',title:'Completa',expr:'Sócrates es mortal',result:'ya admite V/F',text:'Al introducir un argumento, la función queda saturada y la expresión completa puede evaluarse como verdadera o falsa.'},
]

const arities = [
  {id:'monadic',mark:'1',title:'Monádica',formula:'M(x)',example:'x es mortal',text:'Requiere un solo argumento para saturarse.'},
  {id:'dyadic',mark:'2',title:'Diádica',formula:'C(x,y)',example:'x conoce a y',text:'Requiere dos argumentos y expresa una relación entre dos posiciones.'},
  {id:'polyadic',mark:'n',title:'n-ádica',formula:'R(x₁,…,xₙ)',example:'relación entre n lugares',text:'Generaliza la idea: una relación puede requerir tantos argumentos como lugares tenga abiertos.'},
]

const operators = [
  {id:'and',mark:'∧',title:'Conjunción',formula:'P ∧ Q',text:'Recibe proposiciones como entrada y produce un valor de verdad.'},
  {id:'or',mark:'∨',title:'Disyunción',formula:'P ∨ Q',text:'Combina proposiciones bajo una regla de verdad determinada.'},
  {id:'imp',mark:'→',title:'Implicación material',formula:'P → Q',text:'En la tabla clásica sólo resulta falsa cuando P es verdadera y Q es falsa.'},
]

const quantifiers = [
  {id:'universal',mark:'∀x',title:'Universal',formula:'∀x P(x)',text:'La variable individual recorre el dominio y exige que la función quede satisfecha por todos los elementos pertinentes.'},
  {id:'existential',mark:'∃x',title:'Existencial',formula:'∃x P(x)',text:'Afirma que al menos un elemento del dominio satisface la función proposicional.'},
  {id:'second',mark:'∃P',title:'Segundo nivel',formula:'(∀x)(∃P) P(x)',text:'La clase introduce la idea de cuantificar ya no sólo sobre individuos, sino sobre predicados, conceptos o relaciones.'},
]

const objectualViews = [
  {id:'truth',mark:'V/F',title:'Función proposicional',input:'Sócrates',output:'Verdadero / Falso',text:'El resultado de saturar la función es un valor de verdad.'},
  {id:'object',mark:'obj',title:'Operador objetual',input:'La capital de Jalisco',output:'Guadalajara',text:'No toda función devuelve V/F: algunas expresiones funcionales producen objetos individuales.'},
]

const comparison = [
  ['Función monádica','1 argumento','M(x): x es mortal'],
  ['Función diádica','2 argumentos','C(x,y): x conoce a y'],
  ['Operador proposicional','proposiciones','P ∧ Q · P ∨ Q · P → Q'],
  ['Cuantificador 1er nivel','variables individuales','∀x P(x) · ∃x P(x)'],
  ['Cuantificador 2º nivel','predicados / conceptos','(∀x)(∃P) P(x)'],
  ['Operador objetual','objetos como resultado','capital de Jalisco ↦ Guadalajara'],
]

const scrollTo = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

function SectionTitle({number,eyebrow,children}) {
  return <div className="flc1-section-title"><span>{number}</span><div><p>{eyebrow}</p><h2>{children}</h2></div></div>
}

export default function PhilosophyLogicClass11() {
  const [functionId,setFunctionId] = useState('fx')
  const [fregeId,setFregeId] = useState('argument')
  const [saturationId,setSaturationId] = useState('open')
  const [arityId,setArityId] = useState('dyadic')
  const [operatorId,setOperatorId] = useState('imp')
  const [quantifierId,setQuantifierId] = useState('universal')
  const [objectId,setObjectId] = useState('object')

  const fn = useMemo(()=>functionViews.find(x=>x.id===functionId)||functionViews[0],[functionId])
  const frege = useMemo(()=>fregeViews.find(x=>x.id===fregeId)||fregeViews[2],[fregeId])
  const saturation = useMemo(()=>saturationViews.find(x=>x.id===saturationId)||saturationViews[0],[saturationId])
  const arity = useMemo(()=>arities.find(x=>x.id===arityId)||arities[1],[arityId])
  const operator = useMemo(()=>operators.find(x=>x.id===operatorId)||operators[2],[operatorId])
  const quantifier = useMemo(()=>quantifiers.find(x=>x.id===quantifierId)||quantifiers[0],[quantifierId])
  const objectual = useMemo(()=>objectualViews.find(x=>x.id===objectId)||objectualViews[1],[objectId])

  return (
    <main className="flc1-page flc11-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>11 · III · 2026</span>
      </nav>

      <header className="flc1-hero flc11-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>f(x)</span><span>C(x,y)</span><span>∀</span><span>∃</span><span>→</span>
        </div>
        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 11</p>
          <h1>Frege, funciones <em>y cuantificadores</em></h1>
          <p className="flc1-lead">
            La sesión profundiza en la teoría funcional: parte de dominio, codominio e imagen,
            traslada la función matemática al análisis lógico, distingue aridades y muestra
            cómo predicados, conectivas, cuantificadores y operadores pueden entenderse
            como estructuras funcionales.
          </p>
        </div>
        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Qué gana la lógica cuando trata predicados y operadores como funciones saturables?</strong>
          <small>Función → argumentos → operadores → cuantificación → estructura interna.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XI</p>
          {sections.map(([n,id,label])=><button type="button" key={id} onClick={()=>scrollTo(id)}><span>{n}</span>{label}</button>)}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">De la función matemática a una gramática lógica más potente</SectionTitle>
            <div className="flc11-route">{route.map(([n,t,x])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}</div>
            <div className="flc11-master"><span>FUNCIÓN</span><b>→</b><span>SATURACIÓN</span><b>→</b><span>ARIDAD</span><b>→</b><span>OPERADORES</span><b>→</b><span>CUANTIFICADORES</span></div>
            <LogicFigureNote noteId="11-ruta" what="El trayecto conceptual completo de la clase." how="Léalo como una ampliación progresiva de una misma idea: primero una función recibe valores; luego esa estructura se aplica a predicados, relaciones, conectivas y cuantificadores." why="La sesión busca mostrar que la teoría funcional no es una colección de temas aislados, sino una arquitectura común para diferentes recursos de la lógica moderna." takeaway="La noción de función proporciona un lenguaje unificador para analizar distintos niveles de estructura lógica." />
          </section>

          <section id="funcion" className="flc1-section">
            <SectionTitle number="01" eyebrow="Fundamentum mathematicum">La noción matemática de función</SectionTitle>
            <div className="flc11-tabs three">{functionViews.map(x=><button type="button" key={x.id} className={x.id===functionId?'is-active':''} onClick={()=>setFunctionId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc11-reader blue"><div><span>{fn.mark}</span><h3>{fn.title}</h3><code>{fn.formula}</code></div><p>{fn.text}</p></div>
            <div className="flc11-eval"><span>x</span><b>→</b><strong>f</strong><b>→</b><span>f(x)</span></div>
            <LogicFigureNote noteId="11-funcion" what="La estructura mínima de una función: una entrada legítima es evaluada por una regla y produce una salida." how="No piense sólo en una fórmula escrita. El diagrama separa tres papeles: el valor que entra, la regla funcional y el valor obtenido." why="Frege trasladará esta arquitectura desde la matemática al análisis lógico del lenguaje." takeaway="Antes de hablar de funciones proposicionales hay que distinguir claramente entrada, regla y salida." />
          </section>

          <section id="dominio" className="flc1-section">
            <SectionTitle number="02" eyebrow="Dominium et imago">Dominio, codominio e imagen no son lo mismo</SectionTitle>
            <div className="flc11-domain-grid">
              <article><span>DOMINIO</span><strong>ℝ \ {'{0}'}</strong><small>para g(x)=1/x</small></article>
              <article className="dark"><span>FUNCIÓN</span><strong>g(x)=1/x</strong><small>0 vuelve indefinida la expresión</small></article>
              <article><span>RESTRICCIÓN</span><strong>x ≠ 0</strong><small>no toda entrada es legítima</small></article>
            </div>
            <LogicFigureNote noteId="11-dominio" what="Por qué el dominio debe restringirse cuando ciertos valores vuelven indefinida una función." how="El ejemplo g(x)=1/x excluye 0. La restricción no es decorativa: define cuáles entradas pueden pasar legítimamente por la función." why="La sesión utilizará después esta intuición para pensar qué argumentos pueden saturar correctamente una función lógica." takeaway="El dominio está determinado por las condiciones de aplicación de la función, no por una elección arbitraria." />

            <div className="flc11-image">
              <article><span>DOMINIO</span><strong>ℝ</strong></article>
              <b>h(x)=x²</b>
              <article className="dark"><span>IMAGEN EFECTIVA</span><strong>y ≥ 0</strong></article>
            </div>
            <LogicFigureNote noteId="11-imagen" what="La diferencia entre los valores que pueden entrar y los valores que efectivamente salen." how="Aunque h recibe números reales positivos y negativos, al elevar al cuadrado produce únicamente valores no negativos." why="La clase insiste en no identificar automáticamente dominio, codominio e imagen." takeaway="Una función puede admitir un conjunto amplio de entradas y producir un conjunto de salidas mucho más restringido." />
          </section>

          <section id="frege" className="flc1-section">
            <SectionTitle number="03" eyebrow="Translatio logica">Frege: función, extensión y argumento</SectionTitle>
            <div className="flc11-tabs three">{fregeViews.map(x=><button type="button" key={x.id} className={x.id===fregeId?'is-active':''} onClick={()=>setFregeId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong><small>{x.sub}</small></button>)}</div>
            <div className="flc11-reader violet"><div><span>{frege.mark}</span><h3>{frege.title}</h3><small>{frege.sub}</small></div><p>{frege.text}</p></div>
            <div className="flc11-saturation-mini"><article><span>FUNCIÓN</span><strong>M(x)</strong><small>x es mortal</small></article><b>+</b><article><span>ARGUMENTO</span><strong>s</strong><small>Sócrates</small></article><b>→</b><article className="dark"><span>SATURADA</span><strong>M(s)</strong><small>V / F</small></article></div>
            <LogicFigureNote noteId="11-frege" what="La adaptación lógica de la noción de función." how="M(x) mantiene un lugar abierto; s ocupa ese lugar; M(s) queda completa y puede recibir un valor de verdad." why="Este mecanismo es el núcleo que después permite comprender predicados, relaciones y cuantificación sin regresar al molde sujeto–predicado." takeaway="El argumento fregeano es aquello que llena el lugar abierto de una función y la satura." />
          </section>

          <section id="completas" className="flc1-section">
            <SectionTitle number="04" eyebrow="Perfectum / imperfectum">Expresiones completas e incompletas</SectionTitle>
            <div className="flc11-tabs two">{saturationViews.map(x=><button type="button" key={x.id} className={x.id===saturationId?'is-active':''} onClick={()=>setSaturationId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc11-reader green"><div><span>{saturation.mark}</span><h3>{saturation.expr}</h3><strong>{saturation.result}</strong></div><p>{saturation.text}</p></div>
            <div className="flc11-completion"><span>“es mortal”</span><b>+</b><span>“Sócrates”</span><b>→</b><strong>“Sócrates es mortal”</strong><b>→</b><span>V / F</span></div>
            <LogicFigureNote noteId="11-completas" what="La diferencia entre una expresión funcional todavía abierta y una proposición completa." how="La cadena muestra que el valor de verdad aparece al final, no en la función aislada." why="La clase insiste en que las funciones proposicionales no son verdaderas ni falsas mientras permanezcan abiertas." takeaway="La saturación transforma una expresión incompleta en una unidad evaluable." />
          </section>

          <section id="aridad" className="flc1-section">
            <SectionTitle number="05" eyebrow="Ars locorum">Monádicas, diádicas y n-ádicas</SectionTitle>
            <div className="flc11-tabs three">{arities.map(x=><button type="button" key={x.id} className={x.id===arityId?'is-active':''} onClick={()=>setArityId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc11-reader red"><div><span>{arity.mark}</span><h3>{arity.formula}</h3><strong>{arity.example}</strong></div><p>{arity.text}</p></div>
            <div className="flc11-arity">
              <article><span>1 LUGAR</span><strong>M(x)</strong><small>concepto / predicado monádico</small></article>
              <article className="dark"><span>2 LUGARES</span><strong>C(x,y)</strong><small>relación diádica</small></article>
              <article><span>n LUGARES</span><strong>R(x₁,…,xₙ)</strong><small>relación n-ádica</small></article>
            </div>
            <LogicFigureNote noteId="11-aridad" what="La aridad como número de lugares que deben llenarse para saturar una función." how="Cuente variables abiertas: M(x) deja una; C(x,y), dos; R(x₁,…,xₙ), tantas como indique n." why="Esto permite distinguir conceptos aplicados a un solo objeto de relaciones que conectan dos o más objetos." takeaway="La estructura interna de un predicado incluye cuántos argumentos necesita." />
          </section>

          <section id="operadores" className="flc1-section">
            <SectionTitle number="06" eyebrow="Functiones propositionum">Conectivas como funciones</SectionTitle>
            <div className="flc11-tabs three">{operators.map(x=><button type="button" key={x.id} className={x.id===operatorId?'is-active':''} onClick={()=>setOperatorId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc11-reader blue"><div><span>{operator.mark}</span><h3>{operator.title}</h3><code>{operator.formula}</code></div><p>{operator.text}</p></div>
            <div className="flc11-implication">
              <span>P</span><span>Q</span><strong>P → Q</strong>
              <b>V</b><b>V</b><b>V</b>
              <b>V</b><b>F</b><b className="false">F</b>
              <b>F</b><b>V</b><b>V</b>
              <b>F</b><b>F</b><b>V</b>
            </div>
            <LogicFigureNote noteId="11-operadores" what="El tratamiento funcional de una conectiva proposicional mediante el caso de la implicación material." how="Cada fila introduce dos valores de entrada, P y Q, y el operador devuelve un valor. La única salida falsa aparece en V→F." why="El ejemplo muestra que una conectiva también puede verse como una función cuyos argumentos son proposiciones y cuyo resultado es un valor de verdad." takeaway="La idea de función se extiende desde objetos a operaciones entre proposiciones." />
          </section>

          <section id="cuantificadores" className="flc1-section">
            <SectionTitle number="07" eyebrow="Gradus quantificationis">Cuantificación de primer y segundo nivel</SectionTitle>
            <div className="flc11-tabs three">{quantifiers.map(x=><button type="button" key={x.id} className={x.id===quantifierId?'is-active':''} onClick={()=>setQuantifierId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc11-reader violet"><div><span>{quantifier.mark}</span><h3>{quantifier.title}</h3><code>{quantifier.formula}</code></div><p>{quantifier.text}</p></div>
            <div className="flc11-levels">
              <article><span>1er NIVEL</span><strong>∀x · ∃x</strong><p>cuantifica individuos</p></article>
              <b>↑</b>
              <article className="dark"><span>2º NIVEL</span><strong>∀P · ∃P</strong><p>cuantifica predicados / conceptos</p></article>
            </div>
            <LogicFigureNote noteId="11-cuantificadores" what="La diferencia de nivel entre cuantificar objetos y cuantificar predicados o conceptos." how="En primer nivel varía x mientras P permanece fija. En el ejemplo de segundo nivel aparece una variable predicativa P que también queda bajo cuantificación." why="La sesión muestra que la teoría funcional puede elevarse y operar no sólo sobre individuos, sino sobre funciones o conceptos." takeaway="Cambiar aquello sobre lo que cuantificamos cambia el nivel lógico del operador." />
          </section>

          <section id="objetuales" className="flc1-section">
            <SectionTitle number="08" eyebrow="Non solum veritas">No toda función devuelve un valor de verdad</SectionTitle>
            <div className="flc11-tabs two">{objectualViews.map(x=><button type="button" key={x.id} className={x.id===objectId?'is-active':''} onClick={()=>setObjectId(x.id)}><span>{x.mark}</span><strong>{x.title}</strong></button>)}</div>
            <div className="flc11-object-reader">
              <article><span>ENTRADA / EXPRESIÓN</span><strong>{objectual.input}</strong></article>
              <b>→</b>
              <article className="dark"><span>RESULTADO</span><strong>{objectual.output}</strong></article>
            </div>
            <p className="flc11-object-text">{objectual.text}</p>
            <LogicFigureNote noteId="11-objetuales" what="La diferencia entre funciones cuyo valor es V/F y funciones cuyo valor es un objeto." how="Compare el tipo de salida: una proposición saturada puede devolver verdad o falsedad; una expresión como “la capital de Jalisco” selecciona un individuo." why="La teoría funcional no debe reducirse a funciones proposicionales." takeaway="El tipo de función determina también qué clase de valor puede devolver." />
          </section>

          <section id="estructura" className="flc1-section">
            <SectionTitle number="09" eyebrow="Structura interna">Ver dentro del enunciado</SectionTitle>
            <div className="flc11-caesar">
              <p>César conquistó las Galias pero no Germania.</p>
              <b>↓</b>
              <strong>C(c,g) ∧ ¬C(c,m)</strong>
            </div>
            <div className="flc11-parts">
              <article><span>C</span><strong>relación de conquista</strong></article>
              <article><span>c</span><strong>César</strong></article>
              <article><span>g</span><strong>Galias</strong></article>
              <article><span>m</span><strong>Germania</strong></article>
              <article className="dark"><span>∧ / ¬</span><strong>composición lógica</strong></article>
            </div>
            <LogicFigureNote noteId="11-estructura" what="Cómo la teoría funcional descompone una oración compleja en relaciones, argumentos y operadores." how="C aparece dos veces como la misma relación; cambian sus argumentos. La conjunción conecta las dos partes y la negación modifica la segunda." why="Ésta es una de las ventajas centrales que la clase atribuye a la teoría funcional: hacer visible la composición interna del enunciado." takeaway="La lógica moderna puede analizar la arquitectura interna de una proposición en lugar de tratarla como un bloque indivisible." />
          </section>

          <section id="aristoteles" className="flc1-section">
            <SectionTitle number="10" eyebrow="Frege contra limites veteres">El silogismo clásico en lógica de predicados</SectionTitle>
            <div className="flc11-proof">
              <article><span>1</span><strong>∀x(Hx → Mx)</strong><small>todos los hombres son mortales</small></article>
              <article><span>2</span><strong>Hs</strong><small>Sócrates es hombre</small></article>
              <article><span>3</span><strong>Hs → Ms</strong><small>instanciación universal</small></article>
              <article className="dark"><span>4</span><strong>Ms</strong><small>modus ponens</small></article>
            </div>
            <LogicFigureNote noteId="11-aristoteles" what="La reconstrucción en lógica de predicados del argumento que la clase venía utilizando desde Aristóteles." how="La cuantificación expresa la generalidad; s representa naturalmente al individuo Sócrates; la instanciación produce una condicional singular y modus ponens entrega la conclusión." why="El ejemplo exhibe una ventaja destacada por la sesión: los nombres propios pueden integrarse de manera natural mediante funciones, argumentos y cuantificación." takeaway="La teoría funcional amplía la capacidad de formalizar sin tener que tratar un nombre singular como si fuera un término general." />
          </section>

          <section id="tabla" className="flc1-section">
            <SectionTitle number="11" eyebrow="Tabula ordinis">Mapa de tipos de funciones y operadores</SectionTitle>
            <div className="flc11-comparison">
              <div className="head"><strong>TIPO</strong><strong>QUÉ REQUIERE</strong><strong>EJEMPLO</strong></div>
              {comparison.map(([a,b,c])=><div className="row" key={a}><strong>{a}</strong><span>{b}</span><code>{c}</code></div>)}
            </div>
            <LogicFigureNote noteId="11-tabla" what="Un mapa final que reúne los diferentes usos de la idea funcional estudiados durante la sesión." how="Lea cada fila identificando primero qué tipo de entrada exige y después qué forma adopta el ejemplo." why="El cuadro evita mezclar aridad, conectivas, cuantificadores y operadores objetuales como si fueran exactamente la misma clase de objeto." takeaway="La teoría funcional unifica muchas estructuras, pero debemos conservar las diferencias de nivel, aridad y tipo de resultado." />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="12" eyebrow="Ad usum futurum">Síntesis para estudiar y volver a enseñar esta sesión</SectionTitle>
            <div className="flc11-summary">
              <article><span>IDEA 1</span><h3>El dominio importa</h3><p>No toda entrada es admisible y la imagen no se identifica automáticamente con el dominio.</p></article>
              <article><span>IDEA 2</span><h3>Saturar completa</h3><p>La función abierta recibe argumentos y, en el caso proposicional, produce una unidad evaluable.</p></article>
              <article><span>IDEA 3</span><h3>La aridad revela estructura</h3><p>Conceptos y relaciones se distinguen también por cuántos lugares deben llenarse.</p></article>
              <article><span>IDEA 4</span><h3>La teoría funcional escala</h3><p>Puede analizar conectivas, cuantificadores, objetos y la composición interna de enunciados.</p></article>
            </div>
            <div className="flc11-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué distingue dominio, codominio e imagen?</li>
                <li>¿Por qué 0 queda fuera del dominio de 1/x?</li>
                <li>¿Cómo adapta Frege la noción matemática de función?</li>
                <li>¿Qué significa saturar una función?</li>
                <li>¿Por qué una función proposicional abierta no es todavía V/F?</li>
                <li>¿Qué diferencia una función monádica de una diádica?</li>
                <li>¿Cómo pueden entenderse las conectivas funcionalmente?</li>
                <li>¿Cuándo es falsa P → Q?</li>
                <li>¿Sobre qué actúan ∀x y ∃x?</li>
                <li>¿Qué cambia en una cuantificación de segundo nivel?</li>
                <li>¿Qué es un operador objetual?</li>
                <li>¿Qué hace visible C(c,g) ∧ ¬C(c,m)?</li>
                <li>¿Cómo formaliza Frege el ejemplo de Sócrates?</li>
              </ol>
            </div>
            <div className="flc1-source-note"><strong>Continuidad</strong><p>La sesión amplía la teoría funcional hacia distintos niveles de operadores y cuantificación. El material no fija una tarea concreta con fecha.</p></div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer"><Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link><span>Sesión 11 · 11 marzo 2026</span></footer>
    </main>
  )
}
