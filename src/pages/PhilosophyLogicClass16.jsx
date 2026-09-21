import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass16.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','giro','El giro quineano'],
  ['02','holismo','Holismo y sistema'],
  ['03','significado','Significado en red'],
  ['04','experiencia','Campo de fuerza'],
  ['05','plumon','Experiencia y teoría'],
  ['06','pragmatismo','Pragmatismo epistemológico'],
  ['07','logica','Lógica y coherencia'],
  ['08','revisabilidad','Necesidad revisable'],
  ['09','utilidad','Verdad y utilidad'],
  ['10','comparacion','Cinco respuestas a la necesidad'],
  ['11','verdad','Entrada al problema de la verdad'],
  ['12','teorias','Teorías de la verdad'],
  ['13','concepto-criterio','Concepto / criterio'],
  ['14','cierre','Síntesis docente'],
]

const route = [
  ['1','Romper','Quine abandona la idea de una necesidad eterna separada del sistema.'],
  ['2','Conectar','Conceptos, reglas y creencias adquieren sentido dentro de una red total.'],
  ['3','Constreñir','La experiencia no dicta una única teoría, pero limita lo que el sistema puede sostener.'],
  ['4','Revisar','Lógica y matemáticas forman parte del sistema y son revisables en principio.'],
  ['5','Abrir','Al cerrar necesidad, la clase entra al problema de la verdad: qué es y cómo reconocerla.'],
]

const holismModes = [
  {
    id:'analysis',
    mark:'Σ partes',
    title:'Análisis',
    thesis:'entender partes → entender totalidad',
    text:'La postura analítica separa componentes y supone que comprender cada uno basta para comprender el sistema.',
  },
  {
    id:'holism',
    mark:'◎',
    title:'Holismo',
    thesis:'totalidad → sentido de las partes',
    text:'El sistema posee organización y función que no se reduce a una mera suma de piezas aisladas.',
  },
]

const meaningModes = [
  {
    id:'clock',
    mark:'⌚',
    title:'Reloj',
    example:'engranes · resorte · manecillas',
    conclusion:'las piezas sólo “marcan la hora” dentro del sistema',
  },
  {
    id:'house',
    mark:'casa',
    title:'Palabra',
    example:'gramática · semántica · uso',
    conclusion:'el signo significa dentro de un idioma y una comunidad',
  },
  {
    id:'justice',
    mark:'⚖',
    title:'Justicia',
    example:'prácticas · instituciones · valores',
    conclusion:'el concepto adquiere sentido dentro de una red de creencias compartida',
  },
]

const experienceModes = [
  {
    id:'gravity',
    mark:'G',
    title:'Explicación moderna',
    phenomenon:'el plumón cae',
    explanation:'gravedad',
    text:'Una teoría contemporánea explica el fenómeno mediante gravedad.',
  },
  {
    id:'aristotle',
    mark:'A',
    title:'Explicación aristotélica',
    phenomenon:'el plumón cae',
    explanation:'lugar natural',
    text:'Otro sistema puede explicar el mismo fenómeno apelando a una tendencia de lo pesado hacia su lugar natural.',
  },
]

const pragmatismModes = [
  {
    id:'experience',
    mark:'E',
    title:'Experiencia fenoménica',
    role:'restricción externa',
    text:'El sistema no puede inventar cualquier cosa sin responder a aquello que ocurre en la experiencia.',
  },
  {
    id:'coherence',
    mark:'C',
    title:'Coherencia interna',
    role:'restricción interna',
    text:'Las creencias y reglas deben poder integrarse sin destruir la organización del sistema.',
  },
]

const coherenceModes = [
  {
    id:'classical',
    mark:'¬(P∧¬P)',
    title:'No contradicción',
    text:'En la tradición occidental clásica, una regla central de coherencia excluye que P y no-P sean verdaderos al mismo tiempo y en el mismo sentido.',
  },
  {
    id:'alternative',
    mark:'P ∧ ¬P ?',
    title:'Coherencias alternativas',
    text:'La clase menciona de forma general que otras cosmovisiones pueden organizar la contradicción de otra manera. Debe leerse como contraste general, no como descripción precisa de culturas enteras.',
  },
]

const truthProblemModes = [
  {
    id:'concept',
    mark:'QUÉ',
    title:'Concepto de verdad',
    question:'¿Qué es la verdad?',
    examples:'correspondencia · coherencia · utilidad · redundancia',
    text:'Busca definir qué significa que una proposición sea verdadera.',
  },
  {
    id:'criterion',
    mark:'CÓMO',
    title:'Criterio de verdad',
    question:'¿Cómo distinguimos lo verdadero de lo falso?',
    examples:'experiencia · coherencia · utilidad · evidencia · análisis semántico',
    text:'Busca una herramienta o procedimiento para reconocer cuándo algo debe aceptarse como verdadero.',
  },
]

const necessityComparison = [
  ['Platón','Ideas / formas ideales','necesidad independiente y trascendente'],
  ['Aristóteles','orden del mundo','la razón capta una estructura de la realidad'],
  ['Leibniz','identidad / analiticidad','la negación conduce a contradicción'],
  ['Kant','estructuras a priori del sujeto','espacio, tiempo y categorías'],
  ['Quine','sistema de creencias','coherencia interna + experiencia + utilidad'],
]

const truthTheories = [
  ['01','Redundancia','“Es verdad que P” no añade contenido sustantivo a P.'],
  ['02','Pragmáticas','Conectan verdad con éxito, utilidad o funcionamiento práctico.'],
  ['03','Fenomenológicas','Atienden a evidencia y modo de aparición en la experiencia.'],
  ['04','Correspondencia','Relacionan verdad con adecuación entre proposición y realidad.'],
  ['05','Tarski','Aborda la verdad mediante condiciones semánticas formalizadas.'],
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

export default function PhilosophyLogicClass16() {
  const [holismId,setHolismId] = useState('holism')
  const [meaningId,setMeaningId] = useState('house')
  const [experienceId,setExperienceId] = useState('gravity')
  const [pragmatismId,setPragmatismId] = useState('experience')
  const [coherenceId,setCoherenceId] = useState('classical')
  const [truthProblemId,setTruthProblemId] = useState('concept')

  const holism = useMemo(()=>holismModes.find(x=>x.id===holismId)||holismModes[1],[holismId])
  const meaning = useMemo(()=>meaningModes.find(x=>x.id===meaningId)||meaningModes[1],[meaningId])
  const experience = useMemo(()=>experienceModes.find(x=>x.id===experienceId)||experienceModes[0],[experienceId])
  const pragmatism = useMemo(()=>pragmatismModes.find(x=>x.id===pragmatismId)||pragmatismModes[0],[pragmatismId])
  const coherence = useMemo(()=>coherenceModes.find(x=>x.id===coherenceId)||coherenceModes[0],[coherenceId])
  const truthProblem = useMemo(()=>truthProblemModes.find(x=>x.id===truthProblemId)||truthProblemModes[0],[truthProblemId])

  return (
    <main className="flc1-page flc16-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>20 · IV · 2026</span>
      </nav>

      <header className="flc1-hero flc16-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>WEB</span><span>¬(P∧¬P)</span><span>Δ</span><span>?</span><span>T</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 16 · Segundo parcial</p>
          <h1>Quine, holismo <em>y problema de la verdad</em></h1>
          <p className="flc1-lead">
            La sesión presenta una respuesta contemporánea al problema de la necesidad:
            lógica, matemáticas, conceptos y teorías forman parte de una red de creencias
            constreñida por la experiencia. La necesidad deja de aparecer como eterna y
            pasa a ser interna, pragmática y revisable.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Qué ocurre con la necesidad lógica si las reglas mismas pertenecen a un sistema de creencias revisable?</strong>
          <small>Holismo → experiencia → coherencia → pragmatismo → verdad.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XVI</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              Del fundamento fuerte a una necesidad interna al sistema
            </SectionTitle>

            <div className="flc16-route">
              {route.map(([n,t,x])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}
            </div>

            <div className="flc16-master">
              <span>HOLISMO</span><b>→</b>
              <span>RED DE CREENCIAS</span><b>→</b>
              <span>EXPERIENCIA</span><b>→</b>
              <span>COHERENCIA</span><b>→</b>
              <span>VERDAD</span>
            </div>

            <LogicFigureNote
              noteId="16-ruta"
              what="El recorrido conceptual completo de la sesión."
              how="Quine no aparece como un autor aislado. La ruta muestra cómo su teoría del sistema modifica la idea de necesidad y, al final, obliga a abrir una pregunta nueva por la verdad."
              why="La clase cumple dos funciones: cerrar necesidad y abrir teoría de la verdad."
              takeaway="La necesidad quineana sólo se entiende dentro de una red total de creencias vinculada con experiencia."
            />
          </section>

          <section id="giro" className="flc1-section">
            <SectionTitle number="01" eyebrow="Mutatio contemporanea">
              El giro quineano
            </SectionTitle>

            <div className="flc16-giro">
              <article><span>ANTES</span><strong>fundamento fuerte</strong><p>Ideas · mundo · identidad · sujeto trascendental</p></article>
              <b>→</b>
              <article className="dark"><span>QUINE</span><strong>sistema revisable</strong><p>coherencia · experiencia · utilidad · reorganización</p></article>
            </div>

            <div className="flc16-thesis">
              <span>TESIS DE LA CLASE</span>
              <strong>La necesidad lógica depende del sistema de creencias, de sus reglas internas de coherencia y de su relación con la experiencia.</strong>
            </div>

            <LogicFigureNote
              noteId="16-giro"
              what="El contraste entre las explicaciones anteriores y la respuesta contemporánea atribuida a Quine."
              how="La primera caja resume fundamentos relativamente estables; la segunda concentra el vocabulario nuevo: sistema, revisión, coherencia y experiencia."
              why="Esto permite ver por qué Quine representa un cambio cualitativo dentro del recorrido del curso."
              takeaway="La necesidad ya no se explica por una estructura intocable fuera del sistema, sino por cómo el sistema se organiza y funciona."
            />
          </section>

          <section id="holismo" className="flc1-section">
            <SectionTitle number="02" eyebrow="Totum et partes">
              El sistema no se reduce a la suma de sus partes
            </SectionTitle>

            <div className="flc16-tabs two">
              {holismModes.map(item=>(
                <button type="button" key={item.id} className={item.id===holismId?'is-active':''} onClick={()=>setHolismId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc16-reader blue">
              <div><span>{holism.mark}</span><h3>{holism.title}</h3><code>{holism.thesis}</code></div>
              <p>{holism.text}</p>
            </div>

            <div className="flc16-clock">
              <article><span>PIEZAS</span><strong>⚙ · resorte · manecilla</strong></article>
              <b>≠</b>
              <article className="dark"><span>SISTEMA</span><strong>reloj que marca la hora</strong></article>
            </div>

            <LogicFigureNote
              noteId="16-reloj"
              what="El ejemplo del reloj usado para explicar holismo."
              how="Las piezas pueden describirse aisladas, pero la función 'marcar la hora' sólo aparece cuando están organizadas en un sistema."
              why="La analogía prepara el paso desde objetos físicos hacia palabras, conceptos, teorías y creencias."
              takeaway="Las propiedades de una totalidad pueden depender de relaciones que desaparecen cuando aislamos las partes."
            />
          </section>

          <section id="significado" className="flc1-section">
            <SectionTitle number="03" eyebrow="Meaning in systemate">
              Palabras y conceptos significan dentro de una red
            </SectionTitle>

            <div className="flc16-tabs three">
              {meaningModes.map(item=>(
                <button type="button" key={item.id} className={item.id===meaningId?'is-active':''} onClick={()=>setMeaningId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc16-reader violet">
              <div><span>{meaning.mark}</span><h3>{meaning.title}</h3><code>{meaning.example}</code></div>
              <strong>{meaning.conclusion}</strong>
            </div>

            <div className="flc16-network">
              <span>signo</span><b>↔</b><span>uso</span><b>↔</b><span>reglas</span><b>↔</b><span>comunidad</span><b>↔</b><span>creencias</span>
            </div>

            <LogicFigureNote
              noteId="16-significado"
              what="Tres ejemplos de dependencia sistémica: reloj, palabra y concepto abstracto."
              how="Cambie entre los botones y observe que la estructura se conserva: algo aislado pierde la función o el significado que tenía dentro de la red."
              why="La sesión extiende el holismo desde teoría de sistemas hasta semántica y epistemología."
              takeaway="Para Quine, significado y función dependen de relaciones internas a un sistema compartido."
            />
          </section>

          <section id="experiencia" className="flc1-section">
            <SectionTitle number="04" eyebrow="Campus virium">
              La ciencia como campo de fuerza limitado por experiencia
            </SectionTitle>

            <div className="flc16-field">
              <div className="core">
                <span>NÚCLEO</span>
                <strong>lógica · matemáticas · supuestos centrales</strong>
              </div>
              <div className="middle">
                <span>RED INTERMEDIA</span>
                <strong>teorías · conceptos · hipótesis</strong>
              </div>
              <div className="edge">
                <span>PERIFERIA</span>
                <strong>experiencia fenoménica</strong>
              </div>
            </div>

            <div className="flc16-shock">
              <span>ANOMALÍA EN LA PERIFERIA</span><b>→</b>
              <span>REVISIÓN LOCAL</span><b>→</b>
              <strong>POSIBLE REORGANIZACIÓN DE LA RED</strong>
            </div>

            <LogicFigureNote
              noteId="16-campo"
              what="La imagen del campo de fuerza con experiencia en los límites y creencias conectadas en el interior."
              how="La periferia representa el contacto con experiencia; hacia el centro aparecen compromisos más estructurales. Una tensión en el borde puede propagarse."
              why="La metáfora muestra por qué una experiencia no determina automáticamente qué única creencia debe abandonarse."
              takeaway="La experiencia constriñe el sistema como totalidad, pero hay margen para decidir qué partes revisar."
            />
          </section>

          <section id="plumon" className="flc1-section">
            <SectionTitle number="05" eyebrow="Unum phaenomenon, plures theoriae">
              El plumón cae: el fenómeno restringe, la teoría interpreta
            </SectionTitle>

            <div className="flc16-tabs two">
              {experienceModes.map(item=>(
                <button type="button" key={item.id} className={item.id===experienceId?'is-active':''} onClick={()=>setExperienceId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc16-reader green">
              <div><span>↓</span><h3>{experience.phenomenon}</h3><code>{experience.explanation}</code></div>
              <p>{experience.text}</p>
            </div>

            <div className="flc16-constraint">
              <span>MISMO FENÓMENO</span>
              <b>≠</b>
              <span>UNA ÚNICA TEORÍA POSIBLE</span>
              <b>pero</b>
              <strong>LA EXPERIENCIA IMPONE LÍMITES</strong>
            </div>

            <LogicFigureNote
              noteId="16-plumon"
              what="El ejemplo con el que la clase distingue fenómeno observado y explicación teórica."
              how="Ambas teorías intentan explicar el mismo hecho. Si el plumón no cayera, el problema afectaría a cualquiera de los sistemas que esperaba esa caída."
              why="El ejemplo evita convertir el holismo en relativismo donde cualquier explicación vale."
              takeaway="La experiencia no selecciona necesariamente una teoría única, pero sí puede obligar a revisar teorías incompatibles con lo observado."
            />
          </section>

          <section id="pragmatismo" className="flc1-section">
            <SectionTitle number="06" eyebrow="Pragmatismus epistemologicus">
              El sistema debe funcionar frente a experiencia
            </SectionTitle>

            <div className="flc16-tabs two">
              {pragmatismModes.map(item=>(
                <button type="button" key={item.id} className={item.id===pragmatismId?'is-active':''} onClick={()=>setPragmatismId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc16-reader red">
              <div><span>{pragmatism.mark}</span><h3>{pragmatism.title}</h3><code>{pragmatism.role}</code></div>
              <p>{pragmatism.text}</p>
            </div>

            <div className="flc16-pragmatic-thesis">
              <span>DOBLE RESTRICCIÓN</span>
              <strong>experiencia fenoménica + coherencia interna</strong>
              <p>La clase insiste en que esto impide leer el pragmatismo como un simple “todo vale”.</p>
            </div>

            <LogicFigureNote
              noteId="16-pragmatismo"
              what="Las dos restricciones que mantienen disciplinado al sistema."
              how="Una restricción viene de afuera, por contacto con experiencia; otra se refiere a compatibilidad interna de la red."
              why="El pragmatismo quineano necesita explicar por qué un sistema no puede adoptar arbitrariamente cualquier creencia."
              takeaway="Utilidad y flexibilidad no eliminan ni experiencia ni coherencia."
            />
          </section>

          <section id="logica" className="flc1-section">
            <SectionTitle number="07" eyebrow="Leges intra systema">
              Las leyes lógicas organizan la coherencia interna
            </SectionTitle>

            <div className="flc16-tabs two">
              {coherenceModes.map(item=>(
                <button type="button" key={item.id} className={item.id===coherenceId?'is-active':''} onClick={()=>setCoherenceId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc16-reader blue">
              <div><span>{coherence.mark}</span><h3>{coherence.title}</h3></div>
              <p>{coherence.text}</p>
            </div>

            <div className="flc16-library">
              <article><span>LIBROS</span><strong>información</strong></article>
              <b>+</b>
              <article><span>CRITERIO</span><strong>tema · autor · número</strong></article>
              <b>→</b>
              <article className="dark"><span>BIBLIOTECA</span><strong>orden utilizable</strong></article>
            </div>

            <LogicFigureNote
              noteId="16-logica-coherencia"
              what="La función organizadora atribuida a lógica y matemáticas dentro del sistema total de creencias."
              how="La analogía de biblioteca distingue información acumulada de reglas que permiten ordenarla y relacionarla."
              why="La sesión presenta las leyes lógicas menos como objetos platónicos y más como piezas estructurales del sistema."
              takeaway="Lógica y matemáticas ayudan a organizar la red, conectar proposiciones y sostener coherencia."
            />
          </section>

          <section id="revisabilidad" className="flc1-section">
            <SectionTitle number="08" eyebrow="Necessitas pragmatica">
              Si cambia la coherencia, puede cambiar lo necesario
            </SectionTitle>

            <div className="flc16-revision">
              <article><span>SISTEMA S₁</span><strong>reglas R₁</strong><small>coherencia C₁</small></article>
              <b>experiencia / revisión</b>
              <article className="dark"><span>SISTEMA S₂</span><strong>reglas R₂</strong><small>coherencia C₂</small></article>
            </div>

            <div className="flc16-necessity-line">
              <span>PREMISAS + REGLAS DEL SISTEMA</span><b>→</b><strong>CONCLUSIÓN NECESARIA DENTRO DE ESE SISTEMA</strong>
            </div>

            <LogicFigureNote
              noteId="16-revisabilidad"
              what="La tesis más fuerte de la clase: necesidad y reglas pueden ser revisables en principio."
              how="S₁ y S₂ representan configuraciones distintas de la red. La conclusión es necesaria relativamente a las reglas que el sistema acepta."
              why="Esto diferencia a Quine de Platón, Aristóteles, Leibniz y Kant dentro de la narrativa del curso."
              takeaway="La necesidad quineana es interna al sistema y puede modificarse si cambian sus reglas de coherencia."
            />
          </section>

          <section id="utilidad" className="flc1-section">
            <SectionTitle number="09" eyebrow="Verum non est utile simpliciter">
              “Útil” no significa automáticamente “verdadero”
            </SectionTitle>

            <div className="flc16-usefulness">
              <article><span>VERDADERO</span><strong>propiedad atribuida a una proposición</strong><p>¿Qué significa que P sea verdad?</p></article>
              <b>≠</b>
              <article className="dark"><span>ÚTIL</span><strong>relación con un fin</strong><p>¿Útil para qué? ¿para quién? ¿según qué meta?</p></article>
            </div>

            <div className="flc16-objection">
              <span>OBJECIÓN AL PRAGMATISMO</span>
              <strong>Si cuando algo falla simplemente cambiamos el sistema, ¿no estamos “curándonos en salud”?</strong>
              <p>La clase presenta esta crítica como un problema real del pragmatismo y la conecta con una raíz escéptica.</p>
            </div>

            <LogicFigureNote
              noteId="16-utilidad"
              what="La crítica interna que la clase dirige al reemplazo de verdad por utilidad."
              how="La diferencia clave es relacional: utilidad siempre requiere un fin y un agente o práctica respecto de la cual algo es útil."
              why="El problema prepara la transición hacia teoría de la verdad."
              takeaway="Un sistema puede ser útil sin que eso resuelva todavía qué significa que sus proposiciones sean verdaderas."
            />
          </section>

          <section id="comparacion" className="flc1-section">
            <SectionTitle number="10" eyebrow="Quinque responsa">
              Cinco lugares distintos para la necesidad
            </SectionTitle>

            <div className="flc16-comparison">
              <div className="head"><strong>AUTOR</strong><strong>FUNDAMENTO</strong><strong>TIPO DE NECESIDAD</strong></div>
              {necessityComparison.map(([a,b,c])=>(
                <div className="row" key={a}><strong>{a}</strong><span>{b}</span><span>{c}</span></div>
              ))}
            </div>

            <LogicFigureNote
              noteId="16-comparacion"
              what="El cierre comparativo del bloque de necesidad lógica."
              how="Lea horizontalmente cada autor y compare dónde sitúa aquello que hace necesaria una inferencia o verdad."
              why="La clase explícitamente cierra aquí el recorrido Platón–Aristóteles–Leibniz–Kant–Quine."
              takeaway="El problema de la necesidad admite explicaciones muy distintas según ontología, epistemología y concepción del sistema lógico."
            />
          </section>

          <section id="verdad" className="flc1-section">
            <SectionTitle number="11" eyebrow="Novum problema">
              La verdad entra en lógica “por rebote”
            </SectionTitle>

            <div className="flc16-validity">
              <span>PREMISAS VERDADERAS</span><b>+</b>
              <span>INFERENCIA VÁLIDA</span><b>→</b>
              <strong>CONCLUSIÓN NO PUEDE SER FALSA</strong>
            </div>

            <div className="flc16-truth-opening">
              <span>NUEVO BLOQUE</span>
              <strong>¿Qué es la verdad y cómo distinguimos lo verdadero de lo falso?</strong>
            </div>

            <LogicFigureNote
              noteId="16-verdad"
              what="La razón por la que un problema epistemológico sobre verdad resulta relevante para lógica."
              how="La definición de validez utiliza explícitamente los conceptos verdadero y falso. Por eso no podemos dejar completamente fuera una teoría de verdad."
              why="Este recurso marca la frontera entre el bloque que termina y el que comienza."
              takeaway="Aunque verdad no sea exclusivamente un problema lógico, la lógica depende de ella al formular validez semántica."
            />
          </section>

          <section id="teorias" className="flc1-section">
            <SectionTitle number="12" eyebrow="Agenda veritatis">
              Las teorías de la verdad anunciadas para el nuevo bloque
            </SectionTitle>

            <div className="flc16-truth-theories">
              {truthTheories.map(([n,title,text])=>(
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <LogicFigureNote
              noteId="16-teorias-verdad"
              what="La agenda de teorías que la clase anuncia para las sesiones siguientes."
              how="No lea las cajas como teorías desarrolladas aquí. Sólo se introducen como mapa del bloque: redundancia, pragmáticas, fenomenológicas, correspondencia y Tarski."
              why="La fuente enumera explícitamente estas cinco familias."
              takeaway="La sesión abre un programa de estudio sobre verdad; todavía no elige una teoría definitiva."
            />
          </section>

          <section id="concepto-criterio" className="flc1-section">
            <SectionTitle number="13" eyebrow="Quid / quomodo">
              Concepto de verdad y criterio de verdad no son lo mismo
            </SectionTitle>

            <div className="flc16-tabs two">
              {truthProblemModes.map(item=>(
                <button type="button" key={item.id} className={item.id===truthProblemId?'is-active':''} onClick={()=>setTruthProblemId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc16-reader violet">
              <div><span>{truthProblem.mark}</span><h3>{truthProblem.title}</h3><blockquote>{truthProblem.question}</blockquote></div>
              <div><code>{truthProblem.examples}</code><p>{truthProblem.text}</p></div>
            </div>

            <LogicFigureNote
              noteId="16-concepto-criterio"
              what="Los dos subproblemas con los que la clase organiza el tema de verdad."
              how="'Concepto' pide definición; 'criterio' pide método de identificación. Una teoría podría proponer una definición y después necesitar un criterio para aplicarla."
              why="La distinción evita confundir explicar qué es verdad con explicar cómo la reconocemos."
              takeaway="Definición y reconocimiento están conectados, pero responden preguntas distintas."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="14" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc16-summary">
              <article><span>IDEA 1</span><h3>Todo está conectado</h3><p>Partes, palabras, conceptos y creencias adquieren función dentro de redes organizadas.</p></article>
              <article><span>IDEA 2</span><h3>La experiencia constriñe</h3><p>No determina una teoría única, pero limita y puede obligar a reorganizar el sistema.</p></article>
              <article><span>IDEA 3</span><h3>La necesidad es pragmática</h3><p>Lógica y matemáticas forman parte del sistema y son revisables en principio.</p></article>
              <article><span>IDEA 4</span><h3>Comienza el problema de la verdad</h3><p>Hay que distinguir qué es verdad de cómo reconocemos algo como verdadero.</p></article>
            </div>

            <div className="flc16-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué diferencia análisis y holismo?</li>
                <li>¿Qué enseña el ejemplo del reloj?</li>
                <li>¿Por qué “casa” no significa aisladamente?</li>
                <li>¿Cómo contrasta Quine el concepto de justicia con una lectura platónica?</li>
                <li>¿Qué representa la metáfora del campo de fuerza?</li>
                <li>¿Por qué una anomalía puede reorganizar varias creencias?</li>
                <li>¿Qué enseña el ejemplo del plumón?</li>
                <li>¿Cuáles son las dos restricciones del pragmatismo quineano?</li>
                <li>¿Qué función tienen lógica y matemáticas dentro del sistema?</li>
                <li>¿Por qué pueden ser revisables en principio?</li>
                <li>¿Qué significa que la necesidad sea relativa al sistema?</li>
                <li>¿Qué objeción se hace al pragmatismo?</li>
                <li>¿Por qué “útil” y “verdadero” no son equivalentes?</li>
                <li>¿Cómo se comparan Platón, Aristóteles, Leibniz, Kant y Quine?</li>
                <li>¿Por qué la verdad afecta a la lógica?</li>
                <li>¿Qué teorías de la verdad quedan anunciadas?</li>
                <li>¿Qué diferencia concepto de verdad y criterio de verdad?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Nota sobre la fuente</strong>
              <p>El documento del 20 de abril es una versión de trabajo reconstruida a partir de transcripción cruda dañada y notas de clase. Esta página conserva el orden, ejemplos y núcleo filosófico confirmados sin presentarlos como transcripción literal palabra por palabra.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 16 · 20 abril 2026</span>
      </footer>
    </main>
  )
}
