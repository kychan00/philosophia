import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass19.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','cierre-redundancia','Cierre de redundancia'],
  ['02','objecion1','Objeción 1: cuantificación'],
  ['03','objecion2','Objeción 2: indeterminación'],
  ['04','limites','Dónde falla T(P) ≡ P'],
  ['05','pragmatismo','Entrada al pragmatismo'],
  ['06','escepticismo','Raíz escéptica'],
  ['07','conciencia','Encierro de la conciencia'],
  ['08','salida','Salida intermedia'],
  ['09','utilidad','Verdad como utilidad'],
  ['10','combinacion','Correspondencia + coherencia'],
  ['11','idealismo','Pragmatismo e idealismo'],
  ['12','hechos','Hechos y creencias'],
  ['13','ciencia','Ciencia y transformación'],
  ['14','fenomenologia','Contraste con fenomenología'],
  ['15','cierre','Síntesis docente'],
]

const route = [
  ['1','Resumir','La redundancia funciona en casos simples: “Es verdad que P” puede reducirse a “P”.'],
  ['2','Objetar','Los contextos cuantificados muestran que el predicado de verdad no siempre puede eliminarse.'],
  ['3','Indeterminar','Los futuros contingentes ponen presión sobre la equivalencia cuando P no es todavía V ni F.'],
  ['4','Desplazar','El pragmatismo abandona la búsqueda de correspondencia absoluta y pregunta por utilidad y acción.'],
  ['5','Combinar','La salida pragmática intenta conservar mundo/experiencia, coherencia sistémica y eficacia práctica.'],
]

const redundancyCases = [
  {
    id:'first-person',
    mark:'P',
    title:'Primera persona',
    original:'Es verdad que hoy es miércoles.',
    reduced:'Hoy es miércoles.',
    verdict:'reducción plausible',
    text:'Al afirmar directamente P, el hablante ya se compromete con su contenido.',
  },
  {
    id:'quantified',
    mark:'∀x',
    title:'Contexto cuantificado',
    original:'Todo lo que dice A es verdadero.',
    reduced:'∀x(Ax → Vx)',
    verdict:'Vx no es trivialmente eliminable',
    text:'Si quitamos Vx, la variable x queda sin un predicado que permita formar una proposición bien constituida.',
  },
  {
    id:'indeterminate',
    mark:'◇?',
    title:'Enunciado indeterminado',
    original:'Mañana lloverá.',
    reduced:'“Mañana lloverá” es verdadera.',
    verdict:'no equivalentes sin más',
    text:'Si todavía no hay valor veritativo determinado, atribuir verdad añade algo que la afirmación futura por sí sola no fija.',
  },
]

const skepticalCases = [
  {
    id:'malign',
    mark:'D',
    title:'Genio maligno',
    source:'Descartes',
    scenario:'Un agente engañador podría producir experiencias indistinguibles de una realidad externa.',
  },
  {
    id:'vat',
    mark:'BIV',
    title:'Cerebro en una cubeta',
    source:'experimento mental contemporáneo',
    scenario:'Estímulos artificiales podrían producir una vida fenoménica completa sin acceso al mundo tal como creemos.',
  },
  {
    id:'matrix',
    mark:'M',
    title:'Matrix',
    source:'ejemplo popular',
    scenario:'La experiencia cotidiana podría estar enteramente mediada por una simulación sin que el sujeto lo advierta.',
  },
]

const pragmatismAxes = [
  {
    id:'correspondence',
    mark:'↔',
    title:'Correspondencia',
    formula:'representación = cosa',
    role:'límite regulativo',
    text:'El pragmatismo no borra el mundo, pero desconfía de poder verificar una adecuación absoluta.',
  },
  {
    id:'coherence',
    mark:'≋',
    title:'Coherencia',
    formula:'P encaja en sistema',
    role:'orden interno',
    text:'Una creencia debe integrarse con otras creencias para formar un sistema utilizable.',
  },
  {
    id:'utility',
    mark:'✓',
    title:'Utilidad',
    formula:'¿funciona? ¿sirve?',
    role:'orientación práctica',
    text:'La aceptación depende de que la creencia permita actuar, predecir u organizar experiencia.',
  },
]

const pragmaticQuestions = [
  '¿Funciona?',
  '¿Sirve?',
  '¿Nos permite actuar?',
  '¿Ordena la experiencia?',
  '¿Ayuda a predecir?',
  '¿Permite transformar?',
]

const factBelief = [
  ['HECHO','simplemente ocurre','no es, por sí mismo, verdadero o falso'],
  ['EXPERIENCIA','aparece al sujeto','produce presión sobre nuestras creencias'],
  ['CREENCIA','interpreta la experiencia','puede ser revisada'],
  ['ACCIÓN','pone a prueba la creencia','muestra utilidad o fracaso'],
]

const scienceSteps = [
  ['1','Observar','regularidades de sucesión y semejanza'],
  ['2','Modelar','construir relaciones explicativas o predictivas'],
  ['3','Predecir','anticipar qué ocurrirá si se repiten ciertas condiciones'],
  ['4','Intervenir','transformar o controlar aspectos del mundo'],
  ['5','Revisar','sustituir modelos por otros más útiles cuando sea necesario'],
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

export default function PhilosophyLogicClass19() {
  const [redundancyId,setRedundancyId] = useState('quantified')
  const [skepticId,setSkepticId] = useState('vat')
  const [axisId,setAxisId] = useState('utility')

  const redundancy = useMemo(
    () => redundancyCases.find(x=>x.id===redundancyId) || redundancyCases[1],
    [redundancyId],
  )
  const skeptic = useMemo(
    () => skepticalCases.find(x=>x.id===skepticId) || skepticalCases[1],
    [skepticId],
  )
  const axis = useMemo(
    () => pragmatismAxes.find(x=>x.id===axisId) || pragmatismAxes[2],
    [axisId],
  )

  return (
    <main className="flc1-page flc19-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>29 · IV · 2026</span>
      </nav>

      <header className="flc1-hero flc19-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>T(P)</span><span>∀x</span><span>Vx</span><span>?</span><span>✓</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 19 · Segundo parcial</p>
          <h1>Objeciones a la redundancia <em>y teorías pragmáticas</em></h1>
          <p className="flc1-lead">
            La clase cierra la teoría de la redundancia mostrando que su reducción
            no funciona universalmente. Después abre el pragmatismo como respuesta
            al problema escéptico de la correspondencia entre conciencia y mundo.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>Si no podemos garantizar una correspondencia absoluta con el mundo, ¿basta con aceptar como verdadero lo que resulta útil, coherente y operativo?</strong>
          <small>Redundancia → objeciones → escepticismo → pragmatismo.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XIX</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              De una equivalencia simple a una teoría práctica de la verdad
            </SectionTitle>

            <div className="flc19-route">
              {route.map(([n,t,x])=>(
                <article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>
              ))}
            </div>

            <div className="flc19-master">
              <span>T(P) ≡ P</span><b>→</b>
              <span>OBJECIONES</span><b>→</b>
              <span>ESCEPTICISMO</span><b>→</b>
              <span>UTILIDAD</span><b>→</b>
              <span>PRAGMATISMO</span>
            </div>

            <LogicFigureNote
              noteId="19-ruta"
              what="La transición completa de la sesión: cierre crítico de la redundancia y apertura del pragmatismo."
              how="Los dos primeros pasos pertenecen todavía al debate deflacionista; los tres últimos cambian hacia un problema epistemológico y práctico."
              why="La clase combina dos temas que sólo se entienden si se ve el puente entre ellos."
              takeaway="Los límites de una teoría lingüística de la verdad preparan el paso hacia una teoría que mide la verdad por su funcionamiento."
            />
          </section>

          <section id="cierre-redundancia" className="flc1-section">
            <SectionTitle number="01" eyebrow="Recapitulatio critica">
              La redundancia funciona, pero no en todos los contextos
            </SectionTitle>

            <div className="flc19-tabs three">
              {redundancyCases.map(item=>(
                <button
                  type="button"
                  key={item.id}
                  className={item.id===redundancyId?'is-active':''}
                  onClick={()=>setRedundancyId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc19-reader blue">
              <div>
                <span>{redundancy.mark}</span>
                <h3>{redundancy.original}</h3>
                <code>{redundancy.reduced}</code>
              </div>
              <div>
                <strong>{redundancy.verdict}</strong>
                <p>{redundancy.text}</p>
              </div>
            </div>

            <LogicFigureNote
              noteId="19-cierre-redundancia"
              what="Tres escenarios que muestran dónde la teoría de la redundancia resulta fuerte y dónde empieza a fallar."
              how="Compare la primera persona con cuantificación e indeterminación. La fórmula T(P)≡P es sencilla en el primer caso, pero pierde universalidad en los otros."
              why="La fuente insiste en que la teoría no debe descartarse por completo: funciona bien en ciertos contextos, pero no en todos."
              takeaway="El predicado de verdad puede ser redundante localmente sin ser eliminable universalmente."
            />
          </section>

          <section id="objecion1" className="flc1-section">
            <SectionTitle number="02" eyebrow="Obiectio prima">
              “Todo lo que dice A es verdadero”
            </SectionTitle>

            <div className="flc19-formalization">
              <article>
                <span>LENGUAJE NATURAL</span>
                <strong>Todo lo que dice A es verdadero.</strong>
              </article>
              <b>→</b>
              <article>
                <span>PARÁFRASIS</span>
                <strong>Para todo x, si A afirma x, entonces x es verdadero.</strong>
              </article>
              <b>→</b>
              <article className="dark">
                <span>FORMALIZACIÓN</span>
                <strong>∀x(Ax → Vx)</strong>
              </article>
            </div>

            <div className="flc19-symbols">
              <article><span>Ax</span><p>x es dicho o afirmado por A</p></article>
              <article><span>Vx</span><p>x es verdadero</p></article>
            </div>

            <div className="flc19-bad-reduction">
              <span>SI ELIMINAMOS Vx</span>
              <strong>∀x(Ax → x)</strong>
              <b>✕</b>
              <p>La variable x no puede ocupar por sí sola el lugar de una función proposicional.</p>
            </div>

            <LogicFigureNote
              noteId="19-cuantificacion"
              what="La primera objeción formal a la teoría de la redundancia."
              how="La secuencia va de la frase ordinaria a una forma cuantificada. Allí Vx desempeña una función predicativa que no puede simplemente borrarse."
              why="Éste es el caso más claro de la sesión donde el predicado de verdad parece cumplir trabajo lógico real."
              takeaway="La equivalencia T(P)≡P no se generaliza automáticamente a expresiones cuantificadas sobre lo que otros dicen."
            />
          </section>

          <section id="objecion2" className="flc1-section">
            <SectionTitle number="03" eyebrow="Obiectio secunda">
              “Mañana lloverá” y el problema de la indeterminación
            </SectionTitle>

            <div className="flc19-rain">
              <article>
                <span>P</span>
                <strong>Mañana lloverá.</strong>
                <p>afirmación futura</p>
              </article>
              <div>≠</div>
              <article className="dark">
                <span>T(P)</span>
                <strong>“Mañana lloverá” es verdadera.</strong>
                <p>atribución explícita de verdad</p>
              </article>
            </div>

            <div className="flc19-indeterminate">
              <span>EN EL MOMENTO DE LA EMISIÓN</span>
              <strong>V ? &nbsp;&nbsp; F ?</strong>
              <p>La fuente presenta el caso como un ejemplo de enunciado cuyo valor todavía no puede determinarse desde el punto de vista del hablante.</p>
            </div>

            <LogicFigureNote
              noteId="19-manana"
              what="La segunda objeción: un futuro contingente puede quedar indeterminado en el momento de su emisión."
              how="P formula una predicción; T(P) ya atribuye un valor de verdad. Si el valor no está fijado, ambas expresiones no parecen equivalentes sin más."
              why="El ejemplo presiona la presuposición de que toda proposición puede reducirse inmediatamente a una adscripción de verdad."
              takeaway="Si P no es todavía evaluable como V o F, afirmar T(P) añade una pretensión que P sola no contiene."
            />
          </section>

          <section id="limites" className="flc1-section">
            <SectionTitle number="04" eyebrow="Limites theoriae">
              Dónde se vuelve problemática la eliminación de “verdadero”
            </SectionTitle>

            <div className="flc19-limits">
              <article><span>01</span><strong>lo que otros dicen</strong></article>
              <article><span>02</span><strong>cuantificadores</strong></article>
              <article><span>03</span><strong>predicación explícita de verdad</strong></article>
              <article><span>04</span><strong>enunciados indeterminados</strong></article>
              <article><span>05</span><strong>problemas de referencia o futuro</strong></article>
            </div>

            <LogicFigureNote
              noteId="19-limites"
              what="Los cinco tipos de contexto que la fuente enumera como límites para la teoría."
              how="No todos son el mismo problema: unos son sintáctico-semánticos, otros referenciales o temporales."
              why="Agruparlos permite ver que la objeción a la redundancia no depende de un solo contraejemplo."
              takeaway="La teoría sigue siendo útil, pero su ámbito de aplicación debe restringirse."
            />
          </section>

          <section id="pragmatismo" className="flc1-section">
            <SectionTitle number="05" eyebrow="Initium pragmatismi">
              De verdad absoluta a utilidad
            </SectionTitle>

            <div className="flc19-pragmatic-shift">
              <article>
                <span>PREGUNTA CLÁSICA</span>
                <strong>¿Corresponde mi representación con la realidad?</strong>
              </article>
              <b>→</b>
              <article className="dark">
                <span>GIRO PRAGMÁTICO</span>
                <strong>¿Funciona esta creencia para orientarnos y actuar?</strong>
              </article>
            </div>

            <div className="flc19-pragmatic-questions">
              {pragmaticQuestions.map((q,index)=>(
                <article key={q}><span>{String(index+1).padStart(2,'0')}</span><p>{q}</p></article>
              ))}
            </div>

            <LogicFigureNote
              noteId="19-entrada-pragmatismo"
              what="El cambio de pregunta que introduce el nuevo bloque."
              how="La izquierda conserva el lenguaje de correspondencia absoluta; la derecha traslada el criterio hacia funcionamiento, orientación y acción."
              why="La fuente formula el pragmatismo precisamente como sustitución de verdad por utilidad."
              takeaway="El pragmatismo no empieza negando que exista mundo, sino dudando de nuestra capacidad para verificar una adecuación absoluta."
            />
          </section>

          <section id="escepticismo" className="flc1-section">
            <SectionTitle number="06" eyebrow="Radix sceptica">
              El sujeto no puede salir de su conciencia
            </SectionTitle>

            <div className="flc19-consciousness">
              <article><span>SUJETO</span><strong>conciencia</strong></article>
              <b>→</b>
              <article><span>REPRESENTACIÓN</span><strong>experiencia</strong></article>
              <b>?</b>
              <article className="dark"><span>COSA</span><strong>mundo externo</strong></article>
            </div>

            <div className="flc19-skeptic-thesis">
              <span>PROBLEMA EPISTEMOLÓGICO</span>
              <strong>No podemos salir de la conciencia para comparar desde afuera representación y cosa.</strong>
            </div>

            <LogicFigureNote
              noteId="19-escepticismo"
              what="La raíz escéptica que la clase atribuye al pragmatismo."
              how="El signo de interrogación marca la brecha entre experiencia representada y supuesta cosa externa."
              why="Si la correspondencia absoluta no puede verificarse directamente, hace falta otro criterio para orientar nuestras creencias."
              takeaway="El pragmatismo nace como respuesta práctica a una dificultad epistemológica, no simplemente como preferencia por lo útil."
            />
          </section>

          <section id="conciencia" className="flc1-section">
            <SectionTitle number="07" eyebrow="Exempla sceptica">
              Genio maligno, cerebro en una cubeta y Matrix
            </SectionTitle>

            <div className="flc19-tabs three">
              {skepticalCases.map(item=>(
                <button
                  type="button"
                  key={item.id}
                  className={item.id===skepticId?'is-active':''}
                  onClick={()=>setSkepticId(item.id)}
                >
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc19-reader violet">
              <div>
                <span>{skeptic.mark}</span>
                <h3>{skeptic.title}</h3>
                <small>{skeptic.source}</small>
              </div>
              <p>{skeptic.scenario}</p>
            </div>

            <LogicFigureNote
              noteId="19-casos-escepticos"
              what="Tres ejemplos distintos para representar la misma dificultad: una experiencia internamente coherente podría no corresponder al mundo como creemos."
              how="Cambian los mecanismos de engaño, pero permanece la misma estructura: experiencia convincente sin acceso directo a una garantía externa."
              why="La clase usa estos ejemplos para explicar por qué el problema de correspondencia no se resuelve simplemente mirando con más atención."
              takeaway="La certeza fenomenológica de una experiencia no garantiza por sí sola su correspondencia externa."
            />
          </section>

          <section id="salida" className="flc1-section">
            <SectionTitle number="08" eyebrow="Via media">
              Pragmatismo entre silencio escéptico y relativismo total
            </SectionTitle>

            <div className="flc19-middle-way">
              <article>
                <span>PIRRÓN</span>
                <strong>si no podemos conocer, suspendamos</strong>
                <small>silencio / suspensión</small>
              </article>
              <b>↔</b>
              <article className="dark">
                <span>PRAGMATISMO</span>
                <strong>aceptemos lo que funciona para actuar</strong>
                <small>salida intermedia</small>
              </article>
              <b>↔</b>
              <article>
                <span>PROTÁGORAS</span>
                <strong>cada quien según le parece</strong>
                <small>relativismo radical en el encuadre de clase</small>
              </article>
            </div>

            <LogicFigureNote
              noteId="19-salida"
              what="La posición intermedia que la clase atribuye al pragmatismo."
              how="El pragmatismo queda entre dos extremos reconstruidos didácticamente: renuncia escéptica y relativismo sin criterio."
              why="La utilidad pretende ofrecer una regla práctica sin reclamar acceso a verdad absoluta."
              takeaway="El pragmatismo quiere conservar criterios de orientación sin exigir certeza metafísica."
            />
          </section>

          <section id="utilidad" className="flc1-section">
            <SectionTitle number="09" eyebrow="Utilitas non absoluta">
              “Útil” siempre significa útil para algo
            </SectionTitle>

            <div className="flc19-utility">
              <span>CREENCIA P</span><b>→</b>
              <span>FIN / META</span><b>→</b>
              <strong>ÚTIL O INÚTIL</strong>
            </div>

            <div className="flc19-utility-questions">
              <article><span>01</span><strong>¿Útil para qué?</strong></article>
              <article><span>02</span><strong>¿Útil para quién?</strong></article>
              <article><span>03</span><strong>¿Quién fija la meta?</strong></article>
            </div>

            <LogicFigureNote
              noteId="19-utilidad"
              what="El problema interno que aparece cuando verdad se aproxima a utilidad."
              how="La utilidad no es una propiedad absoluta: siempre requiere un fin, contexto o propósito respecto del cual algo resulta útil."
              why="La fuente plantea estas preguntas como una dificultad central de las teorías pragmáticas."
              takeaway="Sustituir verdad por utilidad no resuelve todo: también hay que justificar las metas que hacen útil una creencia."
            />
          </section>

          <section id="combinacion" className="flc1-section">
            <SectionTitle number="10" eyebrow="Tres criterios">
              Correspondencia, coherencia y utilidad
            </SectionTitle>

            <div className="flc19-tabs three">
              {pragmatismAxes.map(item=>(
                <button
                  type="button"
                  key={item.id}
                  className={item.id===axisId?'is-active':''}
                  onClick={()=>setAxisId(item.id)}
                >
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc19-reader green">
              <div>
                <span>{axis.mark}</span>
                <h3>{axis.title}</h3>
                <code>{axis.formula}</code>
                <small>{axis.role}</small>
              </div>
              <p>{axis.text}</p>
            </div>

            <div className="flc19-combination">
              <span>HAY MUNDO / EXPERIENCIA</span><b>+</b>
              <span>COHERENCIA SISTÉMICA</span><b>+</b>
              <span>UTILIDAD PRÁCTICA</span><b>→</b>
              <strong>ACEPTACIÓN PRAGMÁTICA</strong>
            </div>

            <LogicFigureNote
              noteId="19-combinacion"
              what="La combinación de elementos con la que la clase reconstruye el pragmatismo."
              how="Correspondencia conserva la referencia al mundo; coherencia organiza el sistema; utilidad conecta la creencia con acción."
              why="La teoría intenta evitar tanto realismo ingenuo como idealismo puramente interno."
              takeaway="La aceptación pragmática combina presión de experiencia, orden conceptual y eficacia práctica."
            />
          </section>

          <section id="idealismo" className="flc1-section">
            <SectionTitle number="11" eyebrow="Nec idealismus purus">
              El pragmatismo no quiere quedarse sólo con coherencia
            </SectionTitle>

            <div className="flc19-idealism">
              <article>
                <span>IDEALISMO PURO · EN EL CONTRASTE DE CLASE</span>
                <strong>coherencia del sistema conceptual</strong>
                <p>El riesgo sería perder toda restricción procedente del mundo o experiencia.</p>
              </article>
              <div>≠</div>
              <article className="dark">
                <span>PRAGMATISMO</span>
                <strong>“sí hay algo”</strong>
                <p>Hay mundo y experiencia, aunque no podamos conocerlos absolutamente.</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="19-idealismo"
              what="La distinción con la que la clase evita reducir pragmatismo a pura coherencia."
              how="La diferencia es que el pragmatismo conserva una restricción externa: algo ocurre y afecta nuestras creencias."
              why="Sin esa restricción, la teoría podría volverse un idealismo de sistema cerrado."
              takeaway="El pragmatismo mantiene contacto con experiencia, aunque renuncie a garantizar correspondencia absoluta."
            />
          </section>

          <section id="hechos" className="flc1-section">
            <SectionTitle number="12" eyebrow="Facta et credenda">
              Los hechos ocurren; las creencias son las que evaluamos
            </SectionTitle>

            <div className="flc19-facts">
              {factBelief.map(([title,verb,text])=>(
                <article key={title}>
                  <span>{title}</span>
                  <strong>{verb}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc19-fact-chain">
              <span>HECHO</span><b>→</b>
              <span>EXPERIENCIA</span><b>→</b>
              <span>CREENCIA PROVISIONAL</span><b>→</b>
              <strong>ACCIÓN</strong>
            </div>

            <LogicFigureNote
              noteId="19-hechos"
              what="La distinción de la fuente entre hechos y creencias."
              how="Los hechos no reciben aquí valores V/F; esos valores recaen sobre ideas, proposiciones o creencias acerca de lo que ocurre."
              why="La distinción permite trasladar el problema de verdad desde el evento mismo hacia nuestras representaciones y decisiones."
              takeaway="En este pragmatismo, la verdad se juega en cómo nuestras creencias funcionan frente a hechos y experiencia."
            />
          </section>

          <section id="ciencia" className="flc1-section">
            <SectionTitle number="13" eyebrow="Scientia pragmatica">
              Ciencia como construcción de modelos útiles y revisables
            </SectionTitle>

            <div className="flc19-science">
              {scienceSteps.map(([n,title,text])=>(
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc19-science-question">
              <span>PREGUNTA FILOSÓFICA</span>
              <strong>Que la ciencia funcione, ¿basta para decir que es verdadera?</strong>
            </div>

            <LogicFigureNote
              noteId="19-ciencia"
              what="La reconstrucción pragmática del trabajo científico presentada en la clase."
              how="La secuencia no empieza con esencia última, sino con regularidades, modelos, predicción, intervención y revisión."
              why="La ciencia proporciona el caso más fuerte para el pragmatista porque su éxito práctico es evidente."
              takeaway="El éxito científico apoya una concepción práctica de verdad, pero no resuelve por sí solo si utilidad y verdad son idénticas."
            />
          </section>

          <section id="fenomenologia" className="flc1-section">
            <SectionTitle number="14" eyebrow="Contrapunctum phenomenologicum">
              La fenomenología acepta el mundo fenoménico, pero no sustituye verdad por utilidad
            </SectionTitle>

            <div className="flc19-phenomenology">
              <article>
                <span>PRAGMATISMO</span>
                <strong>utilidad / acción</strong>
                <p>Busca un criterio operativo para orientarse dentro de la experiencia.</p>
              </article>
              <div>VS.</div>
              <article className="dark">
                <span>FENOMENOLOGÍA · SEGÚN LA CLASE</span>
                <strong>estructuras de aparición</strong>
                <p>Busca describir intencionalidad, condiciones y estructuras necesarias de la experiencia.</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="19-fenomenologia"
              what="El contraste final con la fenomenología introducido por la fuente."
              how="Ambas parten del mundo tal como aparece, pero responden de modo distinto: una privilegia funcionamiento práctico; la otra, estructura de la experiencia."
              why="El contraste prepara futuras teorías de verdad sin presentar al pragmatismo como única salida al problema de correspondencia."
              takeaway="Compartir un punto de partida fenomenal no obliga a adoptar un criterio pragmático de verdad."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="15" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc19-summary">
              <article><span>IDEA 1</span><h3>La redundancia tiene límites</h3><p>Cuantificación e indeterminación muestran que “verdadero” no siempre puede eliminarse.</p></article>
              <article><span>IDEA 2</span><h3>El pragmatismo nace del escepticismo</h3><p>No podemos salir de la conciencia para verificar una correspondencia absoluta.</p></article>
              <article><span>IDEA 3</span><h3>Verdad se aproxima a utilidad</h3><p>Una creencia se acepta por su coherencia, funcionamiento y capacidad de orientar acción.</p></article>
              <article><span>IDEA 4</span><h3>La utilidad también exige justificación</h3><p>Siempre depende de metas, fines y criterios que deben explicarse.</p></article>
            </div>

            <div className="flc19-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿En qué casos simples funciona T(P) ≡ P?</li>
                <li>¿Por qué “Todo lo que dice A es verdadero” constituye una objeción?</li>
                <li>¿Qué significan Ax y Vx?</li>
                <li>¿Por qué ∀x(Ax → x) no resuelve el problema?</li>
                <li>¿Qué muestra el ejemplo “Mañana lloverá”?</li>
                <li>¿Qué límites de la redundancia enumera la clase?</li>
                <li>¿Cuál es la raíz escéptica del pragmatismo?</li>
                <li>¿Qué muestra el genio maligno?</li>
                <li>¿Qué muestra el cerebro en una cubeta?</li>
                <li>¿Qué función cumple Matrix como ejemplo?</li>
                <li>¿Por qué preguntar a otros no elimina completamente el problema?</li>
                <li>¿Cómo se ubica el pragmatismo entre Pirrón y Protágoras?</li>
                <li>¿Qué significa que una creencia sea útil?</li>
                <li>¿Por qué utilidad exige una meta?</li>
                <li>¿Cómo combina el pragmatismo correspondencia y coherencia?</li>
                <li>¿Por qué no es simple idealismo?</li>
                <li>¿Por qué los hechos no son V/F en el encuadre de la clase?</li>
                <li>¿Qué papel cumple la ciencia?</li>
                <li>¿Funcionar basta para ser verdadero?</li>
                <li>¿En qué se diferencia la fenomenología?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Nota sobre la fuente</strong>
              <p>El documento del 29 de abril es una versión reconstruida a partir de una transcripción cruda dañada y notas de clase. Esta página conserva el orden, los ejemplos y el sentido filosófico documentados, sin presentar el contenido como transcripción literal palabra por palabra.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 19 · 29 abril 2026</span>
      </footer>
    </main>
  )
}
