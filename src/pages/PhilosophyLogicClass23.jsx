import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass23.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','tarski','Tarski y la correspondencia'],
  ['02','esquema-t','Esquema T'],
  ['03','niveles','Lenguaje objeto / metalenguaje'],
  ['04','formal','Adecuación formal'],
  ['05','verdad-l','Verdad-en-L'],
  ['06','semantica','Referencia y satisfacción'],
  ['07','ejemplos','Madrid y nieve'],
  ['08','abiertas','Funciones abiertas / cerradas'],
  ['09','ventaja','Ventaja y límite de Tarski'],
  ['10','dummett','Dummett: realismo / antirrealismo'],
  ['11','principios','Tres principios del realismo'],
  ['12','uso','Identificación y uso'],
  ['13','no-clasicas','Entrada a lógicas no clásicas'],
  ['14','modal','Modal y relevancia'],
  ['15','multivalencia','Trivalencia y multivalencia'],
  ['16','intuicionismo','Intuicionismo'],
  ['17','difusa','Vaguedad y lógica difusa'],
  ['18','limites','Russell y Gödel'],
  ['19','evaluacion','Indicaciones finales'],
  ['20','cierre','Cierre del segundo parcial'],
]

const route = [
  ['1','Semantizar','Tarski reformula la intuición correspondentista como una teoría semántica para lenguajes determinados.'],
  ['2','Separar niveles','La teoría distingue lenguaje objeto y metalenguaje para hablar rigurosamente de verdad.'],
  ['3','Reducir','Referencia y satisfacción permiten analizar verdad sin exigir un isomorfismo total lenguaje-mundo.'],
  ['4','Criticar','Dummett pregunta qué compromisos realistas siguen presentes, especialmente bivalencia y condiciones de verdad independientes de verificación.'],
  ['5','Abrir','El cuestionamiento de principios clásicos conduce a una entrada a varias lógicas no clásicas.'],
]

const tarskiModes = [
  {
    id:'correspondence',
    mark:'↔',
    title:'Correspondencia clásica',
    formula:'proposición ↔ realidad',
    problem:'¿cómo verificamos la adecuación?',
    text:'La definición es intuitiva, pero parece exigir una comparación problemática entre representación y mundo.',
  },
  {
    id:'tarski',
    mark:'T',
    title:'Reformulación semántica',
    formula:'verdad-en-L',
    problem:'¿cómo funciona “verdadero” en un lenguaje?',
    text:'Tarski desplaza la pregunta desde una metafísica general hacia condiciones semánticas definidas para un sistema lingüístico.',
  },
]

const levels = [
  {
    id:'object',
    mark:'L',
    title:'Lenguaje objeto',
    example:'“La nieve es blanca”',
    role:'enunciado mencionado',
    text:'Es el lenguaje del que estamos hablando; las comillas permiten nombrar la oración.',
  },
  {
    id:'meta',
    mark:'ML',
    title:'Metalenguaje',
    example:'la nieve es blanca',
    role:'lenguaje desde el que hablamos de L',
    text:'Permite atribuir verdad, describir referencia, satisfacción y condiciones semánticas.',
  },
]

const semanticModes = [
  {
    id:'reference',
    mark:'REF',
    title:'Referencia',
    formula:'a ↦ Madrid',
    question:'¿qué objeto designa el nombre?',
    text:'La referencia conecta una constante individual o nombre con el objeto correspondiente.',
  },
  {
    id:'satisfaction',
    mark:'SAT',
    title:'Satisfacción',
    formula:'P(x): x es ciudad',
    question:'¿qué objetos cumplen el predicado?',
    text:'Un objeto satisface P cuando cumple la condición expresada por el predicado.',
  },
]

const exampleModes = [
  {
    id:'madrid',
    mark:'a',
    title:'Madrid',
    symbols:'a = Madrid · P(x) = x es ciudad',
    closed:'P(a)',
    reading:'Madrid es ciudad.',
    condition:'P(a) es verdadero ssi Madrid satisface P.',
  },
  {
    id:'snow',
    mark:'n',
    title:'Nieve',
    symbols:'n = nieve · B(x) = x es blanco',
    closed:'B(n)',
    reading:'La nieve es blanca.',
    condition:'B(n) es verdadero ssi la nieve satisface B.',
  },
]

const dummettModes = [
  {
    id:'realism',
    mark:'R',
    title:'Realismo',
    thesis:'verdad independiente de nuestra verificación',
    text:'Hay hechos o condiciones del mundo que determinan verdad y falsedad aun cuando no podamos conocerlos.',
  },
  {
    id:'antirealism',
    mark:'AR',
    title:'Antirrealismo',
    thesis:'significado ligado a verificación y uso',
    text:'Comprender un enunciado exige comprender qué cuenta como justificación, verificación o uso correcto.',
  },
]

const realismPrinciples = [
  {
    id:'metaphysical',
    number:'01',
    title:'Principio metafísico',
    formula:'mundo independiente → V/F',
    text:'Algo independiente de nuestras capacidades cognitivas hace verdadero o falso al enunciado.',
  },
  {
    id:'semantic',
    number:'02',
    title:'Principio semántico',
    formula:'significado = condiciones de verdad',
    text:'Un enunciado puede poseer significado y valor veritativo aun si nadie puede verificarlo.',
  },
  {
    id:'logical',
    number:'03',
    title:'Principio lógico',
    formula:'P ∨ ¬P',
    text:'Todo enunciado es verdadero o falso: principio de bivalencia, sin tercera opción.',
  },
]

const nonClassical = [
  {
    id:'modal',
    mark:'□ ◇',
    title:'Lógica modal',
    classical:'extiende',
    target:'necesidad / posibilidad',
    example:'□P · ◇P',
    text:'Permite hablar de lo necesario, posible, contingente o imposible, y no tiene que rechazar la lógica clásica.',
  },
  {
    id:'relevance',
    mark:'⇒ᵣ',
    title:'Lógica de relevancia',
    classical:'modifica',
    target:'implicación material',
    example:'“Si 2≠2, Russell es Dios”',
    text:'Exige una conexión relevante entre antecedente y consecuente, no sólo verdad tabular.',
  },
  {
    id:'three',
    mark:'V ? F',
    title:'Trivalente',
    classical:'amplía',
    target:'bivalencia',
    example:'“Mañana habrá una batalla naval.”',
    text:'Introduce un tercer valor, por ejemplo indeterminado, para casos que no parecen V ni F todavía.',
  },
  {
    id:'intuitionistic',
    mark:'⊬ LEM',
    title:'Intuicionista',
    classical:'restringe',
    target:'tercero excluido',
    example:'P ∨ ¬P no se acepta irrestrictamente',
    text:'Vincula verdad matemática con construcción o demostración efectiva.',
  },
  {
    id:'fuzzy',
    mark:'[0,1]',
    title:'Difusa',
    classical:'gradúa',
    target:'vaguedad',
    example:'“Gödel es calvo.”',
    text:'Permite grados entre verdadero y falso en lugar de un único corte binario.',
  },
]

const formalLimits = [
  {
    id:'russell',
    mark:'R',
    title:'Paradoja de Russell',
    formula:'R = {x | x ∉ x}',
    question:'¿R ∈ R?',
    text:'Si pertenece a sí misma, no debería; si no pertenece, cumple la condición para pertenecer. La paradoja presiona formulaciones ingenuas de teoría de conjuntos.',
  },
  {
    id:'godel',
    mark:'G',
    title:'Gödel',
    formula:'verdad ≠ demostrabilidad completa',
    question:'¿todo lo verdadero es demostrable en el sistema?',
    text:'La clase presenta los teoremas de incompletitud como límite del proyecto de un sistema formal suficientemente potente, completo y consistente.',
  },
]

const examItems = [
  ['TRABAJO FINAL','no se entrega impreso; se sube a la plataforma'],
  ['EXAMEN · PARTE 1','definiciones'],
  ['EXAMEN · PARTE 2','aplicación con premisas o ejercicios'],
  ['REPASO','Tarski + argumento + validez + definiciones generales'],
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

export default function PhilosophyLogicClass23() {
  const [tarskiId,setTarskiId] = useState('tarski')
  const [levelId,setLevelId] = useState('object')
  const [semanticId,setSemanticId] = useState('satisfaction')
  const [exampleId,setExampleId] = useState('snow')
  const [dummettId,setDummettId] = useState('antirealism')
  const [realismId,setRealismId] = useState('logical')
  const [logicId,setLogicId] = useState('modal')
  const [limitId,setLimitId] = useState('russell')

  const tarski = useMemo(()=>tarskiModes.find(x=>x.id===tarskiId)||tarskiModes[1],[tarskiId])
  const level = useMemo(()=>levels.find(x=>x.id===levelId)||levels[0],[levelId])
  const semantic = useMemo(()=>semanticModes.find(x=>x.id===semanticId)||semanticModes[1],[semanticId])
  const example = useMemo(()=>exampleModes.find(x=>x.id===exampleId)||exampleModes[1],[exampleId])
  const dummett = useMemo(()=>dummettModes.find(x=>x.id===dummettId)||dummettModes[1],[dummettId])
  const realism = useMemo(()=>realismPrinciples.find(x=>x.id===realismId)||realismPrinciples[2],[realismId])
  const logic = useMemo(()=>nonClassical.find(x=>x.id===logicId)||nonClassical[0],[logicId])
  const limit = useMemo(()=>formalLimits.find(x=>x.id===limitId)||formalLimits[0],[limitId])

  return (
    <main className="flc1-page flc23-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>18 · V · 2026</span>
      </nav>

      <header className="flc1-hero flc23-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>T</span><span>“P”↔P</span><span>L/ML</span><span>□◇</span><span>V?F</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 23 · Cierre del segundo parcial</p>
          <h1>Tarski, semántica <em>y lógicas no clásicas</em></h1>
          <p className="flc1-lead">
            La sesión formula técnicamente la verdad dentro de lenguajes determinados:
            esquema T, lenguaje objeto, metalenguaje, referencia y satisfacción.
            Después pregunta qué compromisos realistas conserva esa teoría y usa
            bivalencia, implicación y tercero excluido como entrada a lógicas no clásicas.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Puede definirse rigurosamente la verdad dentro de un lenguaje formal sin resolver primero toda la metafísica de la correspondencia?</strong>
          <small>Tarski → Dummett → bivalencia → lógicas no clásicas.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XXIII</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              Del correspondentismo a la pluralidad lógica
            </SectionTitle>

            <div className="flc23-route">
              {route.map(([n,t,x])=>(
                <article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>
              ))}
            </div>

            <div className="flc23-master">
              <span>CORRESPONDENCIA</span><b>→</b>
              <span>SEMÁNTICA</span><b>→</b>
              <span>VERDAD-EN-L</span><b>→</b>
              <span>BIVALENCIA</span><b>→</b>
              <span>NO CLÁSICAS</span>
            </div>

            <LogicFigureNote
              noteId="23-ruta"
              what="La arquitectura completa de la última sesión del segundo parcial."
              how="Tarski ocupa el centro del primer bloque; Dummett funciona como bisagra; la última parte modifica, extiende o cuestiona principios clásicos."
              why="La sesión contiene dos temas grandes que se conectan por la discusión sobre bivalencia y condiciones de verdad."
              takeaway="La formalización semántica de verdad conduce directamente a preguntar qué principios lógicos estamos dispuestos a conservar."
            />
          </section>

          <section id="tarski" className="flc1-section">
            <SectionTitle number="01" eyebrow="Tarski">
              Reformular la correspondencia sin empezar por una metafísica general
            </SectionTitle>

            <div className="flc23-tabs two">
              {tarskiModes.map(item=>(
                <button type="button" key={item.id} className={item.id===tarskiId?'is-active':''} onClick={()=>setTarskiId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc23-reader blue">
              <div><span>{tarski.mark}</span><h3>{tarski.title}</h3><code>{tarski.formula}</code></div>
              <div><strong>{tarski.problem}</strong><p>{tarski.text}</p></div>
            </div>

            <LogicFigureNote
              noteId="23-tarski"
              what="El paso desde una teoría metafísica de correspondencia hacia una teoría semántica."
              how="El botón clásico muestra la intuición original; Tarski conserva esa intuición pero la sitúa dentro de un lenguaje formal definido."
              why="La clase presenta a Tarski como reformulación técnica, no como abandono completo de correspondencia."
              takeaway="Tarski cambia la pregunta: de 'qué es la Verdad' a 'cómo definimos verdadero para un lenguaje L'."
            />
          </section>

          <section id="esquema-t" className="flc1-section">
            <SectionTitle number="02" eyebrow="Conventio T">
              Adecuación material: el esquema T
            </SectionTitle>

            <div className="flc23-tschema">
              <strong>“P” es verdadero</strong>
              <b>ssi</b>
              <strong>P</strong>
            </div>

            <div className="flc23-snow">
              <article>
                <span>ENUNCIADO NOMBRADO</span>
                <strong>“La nieve es blanca”</strong>
              </article>
              <b>ssi</b>
              <article className="dark">
                <span>CONDICIÓN</span>
                <strong>la nieve es blanca</strong>
              </article>
            </div>

            <LogicFigureNote
              noteId="23-esquema-t"
              what="La forma de adecuación material que la clase presenta como condición fundamental de la teoría."
              how="Las comillas del lado izquierdo importan: allí nombramos un enunciado; a la derecha usamos una oración para especificar su condición de verdad."
              why="El ejemplo de la nieve muestra el mecanismo semántico sin recurrir a una descripción metafísica extensa de 'correspondencia'."
              takeaway="Una definición materialmente adecuada debe generar instancias del tipo: 'P' es verdadero si y sólo si P."
            />
          </section>

          <section id="niveles" className="flc1-section">
            <SectionTitle number="03" eyebrow="Lingua obiecti / metalinqua">
              Dos niveles que no deben confundirse
            </SectionTitle>

            <div className="flc23-tabs two">
              {levels.map(item=>(
                <button type="button" key={item.id} className={item.id===levelId?'is-active':''} onClick={()=>setLevelId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc23-reader violet">
              <div><span>{level.mark}</span><h3>{level.title}</h3><blockquote>{level.example}</blockquote></div>
              <div><strong>{level.role}</strong><p>{level.text}</p></div>
            </div>

            <div className="flc23-levels">
              <span>METALENGUAJE</span>
              <strong>habla acerca de</strong>
              <span>LENGUAJE OBJETO L</span>
            </div>

            <LogicFigureNote
              noteId="23-niveles"
              what="La distinción entre lenguaje objeto y metalenguaje."
              how="El metalenguaje contiene recursos para mencionar expresiones de L y predicar de ellas verdad, referencia o satisfacción."
              why="La separación de niveles es central para formular la teoría con rigor y evitar confusiones semánticas."
              takeaway="No es lo mismo usar una oración que mencionar esa oración."
            />
          </section>

          <section id="formal" className="flc1-section">
            <SectionTitle number="04" eyebrow="Adaequatio formalis">
              La verdad se define para un sistema lingüístico determinado
            </SectionTitle>

            <div className="flc23-formal">
              <article>
                <span>X</span>
                <strong>nombre de un enunciado E</strong>
              </article>
              <b>es verdadero ssi</b>
              <article className="dark">
                <span>P</span>
                <strong>traducción / uso de E en L</strong>
              </article>
            </div>

            <div className="flc23-formal-note">
              <span>NO SE PREGUNTA</span>
              <strong>“¿Qué es la verdad en absoluto?”</strong>
              <b>SINO</b>
              <span>SE PREGUNTA</span>
              <strong>“¿Cómo definimos verdadero para L?”</strong>
            </div>

            <LogicFigureNote
              noteId="23-formal"
              what="La adecuación formal según la reconstrucción de clase."
              how="X nombra el enunciado; P aporta la oración o traducción que expresa la condición relevante dentro del sistema."
              why="La restricción a un lenguaje determinado evita pretender una definición universal e informal de verdad."
              takeaway="Tarski formaliza el predicado 'verdadero' en sistemas lingüísticos especificados."
            />
          </section>

          <section id="verdad-l" className="flc1-section">
            <SectionTitle number="05" eyebrow="Veritas in L">
              No “Verdad” absoluta, sino verdad-en-L
            </SectionTitle>

            <div className="flc23-languages">
              <article><span>L₁</span><strong>reglas semánticas₁</strong><small>referencia · satisfacción · verdad</small></article>
              <article><span>L₂</span><strong>reglas semánticas₂</strong><small>referencia · satisfacción · verdad</small></article>
              <article><span>L₃</span><strong>reglas semánticas₃</strong><small>referencia · satisfacción · verdad</small></article>
            </div>

            <div className="flc23-language-thesis">
              <span>TESIS</span>
              <strong>cada sistema L requiere especificar sus propias reglas semánticas</strong>
            </div>

            <LogicFigureNote
              noteId="23-verdad-l"
              what="La relatividad de la definición tarskiana a un lenguaje formal determinado."
              how="Cada bloque L representa un sistema con reglas propias. No significa que cualquier cosa sea verdadera, sino que la definición debe indicar el lenguaje en que opera."
              why="La palabra 'relativa' aquí puede confundirse con relativismo filosófico; el diagrama la restringe al lenguaje formal."
              takeaway="Tarski define verdad para L, no una propiedad lingüísticamente desanclada."
            />
          </section>

          <section id="semantica" className="flc1-section">
            <SectionTitle number="06" eyebrow="Referentia et satisfactio">
              Dos nociones semánticas fundamentales
            </SectionTitle>

            <div className="flc23-tabs two">
              {semanticModes.map(item=>(
                <button type="button" key={item.id} className={item.id===semanticId?'is-active':''} onClick={()=>setSemanticId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc23-reader green">
              <div><span>{semantic.mark}</span><h3>{semantic.title}</h3><code>{semantic.formula}</code></div>
              <div><strong>{semantic.question}</strong><p>{semantic.text}</p></div>
            </div>

            <div className="flc23-semantic-chain">
              <span>NOMBRE</span><b>→ referencia →</b>
              <span>OBJETO</span><b>→ satisfacción →</b>
              <span>PREDICADO</span><b>→</b>
              <strong>VERDAD DE P(a)</strong>
            </div>

            <LogicFigureNote
              noteId="23-semantica"
              what="La reducción semántica trabajada por Tarski en la clase."
              how="Primero se fija qué objeto designa el nombre; después se pregunta si ese objeto satisface el predicado."
              why="La teoría ya no necesita buscar un 'hecho completo' que refleje toda la proposición."
              takeaway="P(a) será verdadero cuando el referente de a satisfaga la condición expresada por P."
            />
          </section>

          <section id="ejemplos" className="flc1-section">
            <SectionTitle number="07" eyebrow="Exempla">
              Madrid y nieve: dos modelos mínimos
            </SectionTitle>

            <div className="flc23-tabs two">
              {exampleModes.map(item=>(
                <button type="button" key={item.id} className={item.id===exampleId?'is-active':''} onClick={()=>setExampleId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc23-reader blue">
              <div><span>{example.mark}</span><h3>{example.title}</h3><code>{example.symbols}</code></div>
              <div>
                <strong>{example.closed} → {example.reading}</strong>
                <p>{example.condition}</p>
              </div>
            </div>

            <LogicFigureNote
              noteId="23-ejemplos"
              what="Los dos ejemplos principales de referencia y satisfacción de la sesión."
              how="En ambos se asigna un referente a una constante y una condición a un predicado; después se evalúa el enunciado cerrado."
              why="Trabajar ambos casos permite abstraer el patrón P(a) sin perder la intuición concreta."
              takeaway="La verdad del enunciado cerrado depende de que el objeto designado cumpla el predicado."
            />
          </section>

          <section id="abiertas" className="flc1-section">
            <SectionTitle number="08" eyebrow="Aperta / clausa">
              Una función abierta todavía no es verdadera ni falsa
            </SectionTitle>

            <div className="flc23-open-closed">
              <article>
                <span>FUNCIÓN ABIERTA</span>
                <strong>P(x)</strong>
                <p>x es blanco</p>
                <small>falta fijar objeto</small>
              </article>
              <b>x := n</b>
              <article className="dark">
                <span>ENUNCIADO CERRADO</span>
                <strong>P(n)</strong>
                <p>la nieve es blanca</p>
                <small>ya es evaluable V/F</small>
              </article>
            </div>

            <LogicFigureNote
              noteId="23-abiertas"
              what="La diferencia entre una expresión predicativa abierta y un enunciado completo."
              how="Sustituir la variable por una constante referencial cierra la función."
              why="La satisfacción se entiende mejor cuando distinguimos el predicado abierto del enunciado resultante."
              takeaway="P(x) no tiene por sí solo valor veritativo; P(a) sí puede tenerlo."
            />
          </section>

          <section id="ventaja" className="flc1-section">
            <SectionTitle number="09" eyebrow="Commodum et problema">
              Tarski controla la correspondencia, pero no la elimina
            </SectionTitle>

            <div className="flc23-advantage">
              <article>
                <span>VENTAJA</span>
                <strong>semántica más controlada</strong>
                <p>nombres · objetos · predicados · satisfacción</p>
              </article>
              <div>pero</div>
              <article className="dark">
                <span>PREGUNTA PERSISTENTE</span>
                <strong>¿cómo sabemos que el objeto satisface P?</strong>
                <p>el vínculo empírico reaparece</p>
              </article>
            </div>

            <div className="flc23-verdict">
              <span>RESULTADO DE LA CLASE</span>
              <strong>Tarski desplaza o minimiza el problema clásico de la correspondencia; no lo destruye por completo.</strong>
            </div>

            <LogicFigureNote
              noteId="23-ventaja"
              what="La evaluación filosófica que la fuente hace de la propuesta tarskiana."
              how="El lado izquierdo representa lo ganado técnicamente; el derecho muestra la pregunta empírica que permanece."
              why="Esta tensión conduce directamente a Dummett y al problema realismo/antirrealismo."
              takeaway="La teoría semántica es rigurosa, pero todavía necesita alguna explicación de por qué un objeto satisface realmente un predicado."
            />
          </section>

          <section id="dummett" className="flc1-section">
            <SectionTitle number="10" eyebrow="Dummett">
              Realismo y antirrealismo
            </SectionTitle>

            <div className="flc23-tabs two">
              {dummettModes.map(item=>(
                <button type="button" key={item.id} className={item.id===dummettId?'is-active':''} onClick={()=>setDummettId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc23-reader violet">
              <div><span>{dummett.mark}</span><h3>{dummett.title}</h3><code>{dummett.thesis}</code></div>
              <p>{dummett.text}</p>
            </div>

            <LogicFigureNote
              noteId="23-dummett"
              what="La oposición introducida por la clase para discutir los compromisos filosóficos de Tarski."
              how="Realismo prioriza condiciones de verdad independientes; antirrealismo exige conectar significado con condiciones de uso, prueba o verificación."
              why="Dummett sirve aquí como crítica a la idea de que la formalización semántica quede libre de toda metafísica."
              takeaway="Definir verdad formalmente no decide por sí solo qué teoría del significado o de la realidad debemos aceptar."
            />
          </section>

          <section id="principios" className="flc1-section">
            <SectionTitle number="11" eyebrow="Tres principia realismi">
              Metafísica, semántica y lógica
            </SectionTitle>

            <div className="flc23-tabs three">
              {realismPrinciples.map(item=>(
                <button type="button" key={item.id} className={item.id===realismId?'is-active':''} onClick={()=>setRealismId(item.id)}>
                  <span>{item.number}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc23-reader red">
              <div><span>{realism.number}</span><h3>{realism.title}</h3><code>{realism.formula}</code></div>
              <p>{realism.text}</p>
            </div>

            <div className="flc23-bivalence">
              <span>PRINCIPIO DE BIVALENCIA</span>
              <strong>todo enunciado es V o F</strong>
              <small>sin tercera opción</small>
            </div>

            <LogicFigureNote
              noteId="23-principios"
              what="Los tres compromisos realistas que la reconstrucción atribuye a la crítica de Dummett."
              how="Metafísico pregunta qué hace verdadero al enunciado; semántico, qué determina su significado; lógico, cuántos valores admite."
              why="El tercer principio enlaza directamente con las lógicas no clásicas."
              takeaway="Cuestionar bivalencia no es un detalle técnico aislado: forma parte de una disputa más amplia sobre verdad y significado."
            />
          </section>

          <section id="uso" className="flc1-section">
            <SectionTitle number="12" eyebrow="Identificatio et usus">
              Saber qué significa es saber identificar y usar
            </SectionTitle>

            <div className="flc23-use">
              <article>
                <span>NOMBRE PROPIO</span>
                <strong>regla de identificación</strong>
                <p>¿cómo reconocemos qué objeto designa?</p>
              </article>
              <b>+</b>
              <article className="dark">
                <span>EXPRESIÓN FUNCIONAL</span>
                <strong>regla de uso</strong>
                <p>¿cuándo se aplica correctamente el predicado?</p>
              </article>
            </div>

            <div className="flc23-white">
              <span>“BLANCO”</span><b>≠</b>
              <span>CAPTAR UNA ESENCIA METAFÍSICA</span><b>→</b>
              <strong>SABER CUÁNDO Y CÓMO USAR LA PALABRA</strong>
            </div>

            <LogicFigureNote
              noteId="23-uso"
              what="El desplazamiento antirrealista desde condiciones de verdad independientes hacia prácticas de identificación y uso."
              how="La primera regla trata nombres; la segunda, predicados o expresiones funcionales."
              why="La crítica pregunta qué cuenta efectivamente como que la nieve satisfaga 'blanco'."
              takeaway="El significado puede entenderse mediante reglas compartidas de uso y verificación, no sólo por una relación semántica abstracta."
            />
          </section>

          <section id="no-clasicas" className="flc1-section">
            <SectionTitle number="13" eyebrow="Transitus">
              ¿Qué modifica una lógica no clásica?
            </SectionTitle>

            <div className="flc23-classical">
              <span>BIVALENCIA</span>
              <span>NO CONTRADICCIÓN</span>
              <span>TERCERO EXCLUIDO</span>
              <span>CONDICIONAL MATERIAL</span>
              <span>V / F</span>
            </div>

            <div className="flc23-nonclassical-master">
              <span>EXTENDER</span><b>·</b>
              <span>MODIFICAR</span><b>·</b>
              <span>CUESTIONAR</span>
              <strong>principios de la lógica clásica</strong>
            </div>

            <LogicFigureNote
              noteId="23-no-clasicas"
              what="El punto de partida de la introducción a lógicas no clásicas."
              how="La franja superior enumera compromisos fuertes de lógica clásica; la inferior muestra tres tipos de relación posibles con ellos."
              why="La fuente aclara que una lógica no clásica no siempre 'rechaza' la clásica; algunas simplemente la extienden."
              takeaway="No clásica significa alterar el marco clásico de algún modo, no necesariamente abandonarlo entero."
            />
          </section>

          <section id="modal" className="flc1-section">
            <SectionTitle number="14" eyebrow="Modalitas et relevantia">
              Necesidad, posibilidad y relevancia
            </SectionTitle>

            <div className="flc23-logic-buttons">
              {nonClassical.slice(0,2).map(item=>(
                <button type="button" key={item.id} className={item.id===logicId?'is-active':''} onClick={()=>setLogicId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc23-reader green">
              <div><span>{logic.mark}</span><h3>{logic.title}</h3><code>{logic.example}</code><small>{logic.classical} · {logic.target}</small></div>
              <p>{logic.text}</p>
            </div>

            <div className="flc23-material">
              <span>CONDICIONAL MATERIAL</span>
              <strong>“Si 2 es distinto de 2, Bertrand Russell es Dios.”</strong>
              <p>Antecedente falso → condicional verdadero en lógica clásica; la objeción es que falta conexión semántica relevante.</p>
            </div>

            <LogicFigureNote
              noteId="23-modal-relevancia"
              what="Dos formas distintas de apartarse del marco proposicional clásico básico."
              how="Modal añade operadores □ y ◇; relevancia cuestiona que la tabla del condicional baste para una implicación significativa."
              why="La sesión usa ambos casos para mostrar que 'no clásica' cubre modificaciones conceptualmente diferentes."
              takeaway="Podemos enriquecer el lenguaje lógico o revisar cómo entendemos una inferencia válida."
            />
          </section>

          <section id="multivalencia" className="flc1-section">
            <SectionTitle number="15" eyebrow="Plures valores">
              Futuros contingentes y tercer valor
            </SectionTitle>

            <div className="flc23-three-valued">
              <article><span>V</span><strong>verdadero</strong></article>
              <article className="middle"><span>?</span><strong>indeterminado</strong></article>
              <article><span>F</span><strong>falso</strong></article>
            </div>

            <div className="flc23-battle">
              <span>HOY</span><strong>“Mañana habrá una batalla naval.”</strong>
              <b>→</b><span>¿V? ¿F? ¿INDETERMINADO?</span>
            </div>

            <LogicFigureNote
              noteId="23-multivalencia"
              what="La motivación para lógicas con más de dos valores."
              how="La caja central añade indeterminación entre V y F; el ejemplo del futuro contingente muestra por qué podría ser útil."
              why="La clase relaciona esta opción con Łukasiewicz y con la crítica a la bivalencia."
              takeaway="Una lógica trivalente no gradúa verdad: añade un tercer valor discreto."
            />
          </section>

          <section id="intuicionismo" className="flc1-section">
            <SectionTitle number="16" eyebrow="Intuitionismus">
              Verdad matemática como construcción o demostración
            </SectionTitle>

            <div className="flc23-intuitionism">
              <article>
                <span>CLÁSICA</span>
                <strong>P ∨ ¬P</strong>
                <p>el tercero excluido se acepta en general</p>
              </article>
              <div>≠</div>
              <article className="dark">
                <span>INTUICIONISTA</span>
                <strong>prueba / construcción</strong>
                <p>no basta invocar irrestrictamente P ∨ ¬P</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="23-intuicionismo"
              what="La diferencia que la clase usa para introducir lógica intuicionista."
              how="El contraste enfrenta aceptación clásica del tercero excluido con una exigencia constructiva de demostración."
              why="El intuicionismo vincula la noción de verdad con demostrabilidad de una manera distinta al realismo bivalente."
              takeaway="Para el enfoque presentado, afirmar una verdad matemática exige una construcción o prueba."
            />
          </section>

          <section id="difusa" className="flc1-section">
            <SectionTitle number="17" eyebrow="Vaguitas">
              Lógica difusa: grados entre verdadero y falso
            </SectionTitle>

            <div className="flc23-fuzzy">
              <div className="scale">
                <span>0</span><span>.25</span><span>.50</span><span>.75</span><span>1</span>
              </div>
              <strong>“Gödel es calvo.”</strong>
              <p>nada calvo → un poco → medio → casi → completamente</p>
            </div>

            <div className="flc23-fuzzy-diff">
              <span>TRIVALENTE</span><strong>valores discretos</strong>
              <b>≠</b>
              <span>DIFUSA</span><strong>grados de pertenencia / verdad</strong>
            </div>

            <LogicFigureNote
              noteId="23-difusa"
              what="La diferencia entre añadir un tercer valor y permitir grados continuos."
              how="La escala 0–1 representa gradualidad; no debe leerse como la misma estructura que V/?/F."
              why="La fuente usa 'Gödel es calvo' para introducir el problema de predicados vagos."
              takeaway="La lógica difusa responde a fronteras graduales, no simplemente a indeterminación temporal."
            />
          </section>

          <section id="limites" className="flc1-section">
            <SectionTitle number="18" eyebrow="Limites systematum">
              Russell y Gödel como presión sobre proyectos formalistas
            </SectionTitle>

            <div className="flc23-tabs two">
              {formalLimits.map(item=>(
                <button type="button" key={item.id} className={item.id===limitId?'is-active':''} onClick={()=>setLimitId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc23-reader red">
              <div><span>{limit.mark}</span><h3>{limit.title}</h3><code>{limit.formula}</code><blockquote>{limit.question}</blockquote></div>
              <p>{limit.text}</p>
            </div>

            <LogicFigureNote
              noteId="23-limites"
              what="Dos límites formales mencionados por la clase al final del recorrido."
              how="Russell exhibe una paradoja en teoría ingenua de conjuntos; Gödel muestra límites internos de sistemas formales suficientemente potentes."
              why="Ambos aparecen en la narrativa de clase como golpes a la esperanza de una formalización logicista total."
              takeaway="Formalizar rigurosamente no garantiza eliminar toda paradoja, incompletitud o limitación metateórica."
            />
          </section>

          <section id="evaluacion" className="flc1-section">
            <SectionTitle number="19" eyebrow="Indicaciones de clase">
              Trabajo final y examen
            </SectionTitle>

            <div className="flc23-exam">
              {examItems.map(([title,text])=>(
                <article key={title}><span>{title}</span><strong>{text}</strong></article>
              ))}
            </div>

            <div className="flc23-exam-note">
              <span>IMPORTANTE</span>
              <strong>La fuente no fija aquí una fecha adicional ni una ponderación nueva.</strong>
              <p>Estas tarjetas registran únicamente las indicaciones concretas documentadas al final de la sesión.</p>
            </div>

            <LogicFigureNote
              noteId="23-evaluacion"
              what="Las indicaciones concretas de evaluación registradas en la fuente."
              how="Se separan entrega del trabajo, estructura probable del examen y temas destacados para repaso."
              why="Son datos prácticos confirmados y por eso sí se conservan en la página."
              takeaway="Conviene repasar especialmente Tarski sin abandonar argumento, validez y definiciones generales."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="20" eyebrow="Clausura secundi partialis">
              El recorrido completo: necesidad, verdad y pluralidad lógica
            </SectionTitle>

            <div className="flc23-block-history">
              <article><span>01</span><strong>Necesidad</strong><p>Platón · Aristóteles · Leibniz · Kant · Quine</p></article>
              <article><span>02</span><strong>Verdad</strong><p>concepto · criterio · redundancia</p></article>
              <article><span>03</span><strong>Alternativas</strong><p>pragmatismo · fenomenología · correspondencia</p></article>
              <article><span>04</span><strong>Tarski</strong><p>semántica · referencia · satisfacción</p></article>
              <article className="dark"><span>05</span><strong>No clásicas</strong><p>modalidad · relevancia · multivalencia · intuicionismo · vaguedad</p></article>
            </div>

            <div className="flc23-final-question">
              <span>PREGUNTA FINAL DEL BLOQUE</span>
              <strong>Si la verdad no puede reducirse por completo ni a redundancia, ni a utilidad, ni a evidencia, ni a correspondencia metafísica, ¿qué papel debe cumplir dentro de un sistema lógico?</strong>
            </div>

            <div className="flc23-summary">
              <article><span>IDEA 1</span><h3>Tarski formaliza</h3><p>La verdad se define semánticamente para un lenguaje L.</p></article>
              <article><span>IDEA 2</span><h3>Referencia + satisfacción</h3><p>Permiten analizar P(a) sin un isomorfismo total del mundo.</p></article>
              <article><span>IDEA 3</span><h3>Dummett problematiza</h3><p>Realismo, significado y bivalencia siguen siendo compromisos filosóficos.</p></article>
              <article><span>IDEA 4</span><h3>La lógica se pluraliza</h3><p>Necesidad, relevancia, valores múltiples, construcción y vaguedad abren sistemas alternativos.</p></article>
            </div>

            <div className="flc23-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Por qué Tarski puede entenderse como reformulación de la correspondencia?</li>
                <li>¿Qué relación guarda con la teoría de la redundancia?</li>
                <li>¿Qué cosas pueden ser verdaderas o falsas para Tarski?</li>
                <li>¿Qué es la adecuación material?</li>
                <li>¿Cómo funciona el esquema “P” es verdadero ssi P?</li>
                <li>¿Qué diferencia lenguaje objeto y metalenguaje?</li>
                <li>¿Qué es la adecuación formal?</li>
                <li>¿Qué significa verdad-en-L?</li>
                <li>¿Qué es referencia?</li>
                <li>¿Qué es satisfacción?</li>
                <li>¿Cómo funciona el ejemplo Madrid/ciudad?</li>
                <li>¿Cómo funciona el ejemplo nieve/blanca?</li>
                <li>¿Qué diferencia una función abierta y un enunciado cerrado?</li>
                <li>¿Qué ventaja ofrece Tarski frente al isomorfismo fuerte?</li>
                <li>¿Qué problema empírico permanece?</li>
                <li>¿Qué objeta Dummett?</li>
                <li>¿Cuáles son los tres principios del realismo?</li>
                <li>¿Qué es bivalencia?</li>
                <li>¿Qué diferencia regla de identificación y regla de uso?</li>
                <li>¿Qué significa saber usar correctamente “blanco”?</li>
                <li>¿Cómo pueden las lógicas no clásicas relacionarse con la clásica?</li>
                <li>¿Qué añade la lógica modal?</li>
                <li>¿Qué problema tiene la implicación material?</li>
                <li>¿Qué exigen las lógicas de relevancia?</li>
                <li>¿Qué introduce una lógica trivalente?</li>
                <li>¿Qué diferencia multivalencia y lógica difusa?</li>
                <li>¿Qué rechaza el intuicionismo del tercero excluido?</li>
                <li>¿Qué muestra la paradoja de Russell?</li>
                <li>¿Qué límite de los sistemas formales se atribuye a Gödel?</li>
                <li>¿Qué temas concretos conviene repasar para el examen?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Nota sobre la fuente</strong>
              <p>El documento del 18 de mayo es una versión de trabajo reconstruida a partir de la transcripción reconstruida y de notas de clase. Esta página conserva su organización conceptual y ejemplos, sin presentarlos como transcripción literal palabra por palabra.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 23 · 18 mayo 2026</span>
      </footer>
    </main>
  )
}
