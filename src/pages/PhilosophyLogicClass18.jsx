import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass18.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','tesis','Tesis de redundancia'],
  ['02','propiedad','“Verdadero” no es propiedad'],
  ['03','eliminacion','Eliminar operadores de verdad'],
  ['04','contexto','Juicio, contexto e individuo'],
  ['05','capas','Oración → juicio → valor'],
  ['06','pseudo','¿Pseudoproblema?'],
  ['07','asentimiento','Verdad como asentimiento'],
  ['08','sujeto-predicado','Sujeto y predicado'],
  ['09','rickert','Contenido judicable'],
  ['10','rey','El rey de Francia'],
  ['11','deflacion','Deflacionismo / inflacionismo'],
  ['12','frege','Contraste con Frege'],
  ['13','prooracional','Teorías pro-oracionales'],
  ['14','cierre','Síntesis docente'],
]

const route = [
  ['1','Eliminar','La teoría prueba qué ocurre cuando retiramos “es verdad que”, “no es verdad que” o “es falso que”.'],
  ['2','Desinflar','“Verdadero” deja de tratarse como una propiedad profunda añadida a una proposición.'],
  ['3','Desplazar','La evaluación veritativa pasa de la oración aislada al juicio emitido por un sujeto en contexto.'],
  ['4','Comparar','Deflacionismo e inflacionismo ofrecen respuestas opuestas sobre el peso lógico de la verdad.'],
  ['5','Continuar','Las teorías pro-oracionales prolongan la estrategia deflacionista desde el uso lingüístico.'],
]

const eliminationModes = [
  {
    id:'truth',
    mark:'T(P)',
    title:'“Es verdad que P”',
    original:'Es verdad que hoy es miércoles.',
    reduced:'Hoy es miércoles.',
    formula:'T(P) ≡ P',
    text:'El predicado de verdad puede eliminarse sin pérdida del contenido afirmado.',
  },
  {
    id:'not-truth',
    mark:'¬T(P)',
    title:'“No es verdad que P”',
    original:'No es verdad que está lloviendo.',
    reduced:'No está lloviendo.',
    formula:'¬T(P) ≡ ¬P',
    text:'La negación puede trasladarse directamente al contenido proposicional.',
  },
  {
    id:'false',
    mark:'F(P)',
    title:'“Es falso que P”',
    original:'Es falso que la casa es azul.',
    reduced:'La casa no es azul.',
    formula:'F(P) ≡ ¬P',
    text:'En el ejemplo de la clase, atribuir falsedad equivale a negar el contenido.',
  },
]

const layerModes = [
  {
    id:'sentence',
    mark:'O',
    title:'Oración',
    example:'Hoy es miércoles.',
    status:'estructura lingüística',
    text:'Tiene significado y puede ofrecer un contenido susceptible de ser afirmado o negado.',
  },
  {
    id:'judgeable',
    mark:'J?',
    title:'Contenido judicable',
    example:'¿Está brillando el sol?',
    status:'juicio en potencia',
    text:'La clase usa esta expresión para aislar aquello sobre lo que un sujeto puede pronunciarse.',
  },
  {
    id:'judgment',
    mark:'J!',
    title:'Juicio',
    example:'Sí / No',
    status:'acto de un sujeto',
    text:'Un interlocutor afirma o niega el contenido en una situación concreta.',
  },
  {
    id:'truthvalue',
    mark:'V/F',
    title:'Valor veritativo',
    example:'verdadero / falso',
    status:'evaluación del juicio',
    text:'Según la reconstrucción de la clase, el valor aparece al evaluar el juicio emitido, no como propiedad pegada a la oración aislada.',
  },
]

const contextModes = [
  {
    id:'speaker',
    mark:'QUIÉN',
    title:'Individuo',
    example:'¿quién afirma?',
    text:'La evaluación depende de que exista un sujeto que use la expresión como juicio.',
  },
  {
    id:'time',
    mark:'CUÁNDO',
    title:'Tiempo',
    example:'“hoy”',
    text:'Expresiones deícticas requieren fijar el momento de emisión.',
  },
  {
    id:'place',
    mark:'DÓNDE',
    title:'Lugar',
    example:'Guadalajara / otro sitio',
    text:'El contexto espacial puede cambiar el valor de una afirmación como “hace calor”.',
  },
  {
    id:'situation',
    mark:'CTX',
    title:'Situación',
    example:'circunstancias de uso',
    text:'La misma cadena lingüística puede evaluarse de manera diferente según su uso concreto.',
  },
]

const theoryModes = [
  {
    id:'deflation',
    mark:'↓',
    title:'Deflacionismo',
    thesis:'verdad no sustantiva',
    formula:'T(P) ≡ P',
    text:'No hay que postular una gran propiedad metafísica llamada verdad. La teoría de la redundancia pertenece a esta familia.',
  },
  {
    id:'inflation',
    mark:'↑',
    title:'Inflacionismo',
    thesis:'verdad sustantiva',
    formula:'verdad = propiedad / relación explicable',
    text:'Considera insuficiente eliminar el predicado: correspondencia, coherencia, evidencia o propiedades semánticas intentan explicar algo real acerca de la verdad.',
  },
]

const assentModes = [
  {
    id:'content',
    mark:'P',
    title:'Contenido',
    example:'Hoy es miércoles.',
    text:'La oración proporciona el contenido semántico.',
  },
  {
    id:'assent',
    mark:'✓P',
    title:'Asentimiento',
    example:'Es verdad que hoy es miércoles.',
    text:'En el encuadre de la clase, el hablante expresa acuerdo o afirmación del contenido, no una propiedad añadida.',
  },
]

const kingOptions = [
  ['VERDADERA','¿cómo, si no existe el referente?'],
  ['FALSA','¿haría entonces verdadera su negación?'],
  ['NI V NI F','la lectura destacada en estas notas'],
]

const proSententialAuthors = ['Ramsey','Prior','Strawson','Williams','Belnap','Grover','Camp']

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

export default function PhilosophyLogicClass18() {
  const [eliminationId,setEliminationId] = useState('truth')
  const [layerId,setLayerId] = useState('judgment')
  const [contextId,setContextId] = useState('situation')
  const [theoryId,setTheoryId] = useState('deflation')
  const [assentId,setAssentId] = useState('assent')

  const elimination = useMemo(
    () => eliminationModes.find(x=>x.id===eliminationId) || eliminationModes[0],
    [eliminationId],
  )
  const layer = useMemo(
    () => layerModes.find(x=>x.id===layerId) || layerModes[2],
    [layerId],
  )
  const context = useMemo(
    () => contextModes.find(x=>x.id===contextId) || contextModes[3],
    [contextId],
  )
  const theory = useMemo(
    () => theoryModes.find(x=>x.id===theoryId) || theoryModes[0],
    [theoryId],
  )
  const assent = useMemo(
    () => assentModes.find(x=>x.id===assentId) || assentModes[1],
    [assentId],
  )

  return (
    <main className="flc1-page flc18-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>27 · IV · 2026</span>
      </nav>

      <header className="flc1-hero flc18-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>T(P)</span><span>≡</span><span>P</span><span>J!</span><span>V/F</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 18 · Segundo parcial</p>
          <h1>Redundancia, juicio <em>y valor de verdad</em></h1>
          <p className="flc1-lead">
            La sesión profundiza la estrategia deflacionista: «es verdadero» no
            nombra una propiedad añadida, puede eliminarse en usos simples y obliga
            a distinguir entre significado lingüístico, contenido judicable,
            juicio contextual y evaluación veritativa.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>Si “verdadero” no añade nada al contenido, ¿dónde aparece entonces la verdad?</strong>
          <small>Oración → contenido → juicio → contexto → V/F.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XVIII</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              De eliminar “verdadero” a explicar el acto de juzgar
            </SectionTitle>

            <div className="flc18-route">
              {route.map(([n,t,x])=>(
                <article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>
              ))}
            </div>

            <div className="flc18-master">
              <span>T(P) ≡ P</span><b>→</b>
              <span>NO PROPIEDAD</span><b>→</b>
              <span>JUICIO</span><b>→</b>
              <span>CONTEXTO</span><b>→</b>
              <span>DEFLACIONISMO</span>
            </div>

            <LogicFigureNote
              noteId="18-ruta"
              what="La secuencia conceptual completa de la clase."
              how="La sesión comienza con una equivalencia lingüístico-lógica y extrae consecuencias sobre propiedades, juicio, contexto y teorías de la verdad."
              why="Esto evita leer cada ejemplo como una observación aislada."
              takeaway="La teoría de la redundancia no sólo elimina una frase: reorganiza dónde situamos el trabajo lógico de la verdad."
            />
          </section>

          <section id="tesis" className="flc1-section">
            <SectionTitle number="01" eyebrow="Thesis centralis">
              “Es verdad que P” es lógicamente superfluo
            </SectionTitle>

            <div className="flc18-thesis">
              <strong>“Es verdad que P”</strong>
              <b>≡</b>
              <strong>“P”</strong>
            </div>

            <div className="flc18-example">
              <article><span>FORMA EXPANDIDA</span><strong>Es verdad que hoy es miércoles.</strong></article>
              <b>→</b>
              <article className="dark"><span>CONTENIDO EFECTIVO</span><strong>Hoy es miércoles.</strong></article>
            </div>

            <LogicFigureNote
              noteId="18-tesis"
              what="La equivalencia que organiza toda la teoría de la redundancia en esta sesión."
              how="La izquierda contiene el predicado de verdad; la derecha conserva la afirmación sin él."
              why="La teoría intenta mostrar que no se pierde contenido lógico o semántico al eliminar la expresión valorativa."
              takeaway="En estos usos simples, afirmar que P es verdadero equivale simplemente a afirmar P."
            />
          </section>

          <section id="propiedad" className="flc1-section">
            <SectionTitle number="02" eyebrow="Non proprietas">
              “Verdadero” no funciona como “azul”
            </SectionTitle>

            <div className="flc18-property">
              <article>
                <span>PREDICADO ORDINARIO</span>
                <strong>La casa es azul.</strong>
                <p>“Azul” atribuye una propiedad a la casa.</p>
              </article>
              <div>≠</div>
              <article className="dark">
                <span>PREDICADO DE VERDAD</span>
                <strong>Es verdad que la casa es azul.</strong>
                <p>“Verdadero” no vuelve a la casa portadora de una propiedad adicional.</p>
              </article>
            </div>

            <div className="flc18-property-note">
              <span>FÓRMULA DE LA CLASE</span>
              <strong>“Verdadero” no es una propiedad de las propiedades.</strong>
            </div>

            <LogicFigureNote
              noteId="18-propiedad"
              what="La diferencia entre un predicado que atribuye una propiedad y el predicado de verdad en la teoría de la redundancia."
              how="Compare qué cambia en el objeto: “azul” sí agrega una determinación descriptiva; “es verdad que” no añade otra propiedad a la casa."
              why="El error que la teoría quiere evitar es tratar 'verdadero' como si funcionara exactamente igual que un predicado ordinario."
              takeaway="La verdad, en esta teoría, no es una propiedad adicional pegada a objetos o proposiciones."
            />
          </section>

          <section id="eliminacion" className="flc1-section">
            <SectionTitle number="03" eyebrow="Reductio">
              Eliminar la función valorativa
            </SectionTitle>

            <div className="flc18-tabs three">
              {eliminationModes.map(item=>(
                <button type="button" key={item.id} className={item.id===eliminationId?'is-active':''} onClick={()=>setEliminationId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc18-reader blue">
              <div>
                <span>{elimination.mark}</span>
                <h3>{elimination.original}</h3>
                <code>{elimination.formula}</code>
              </div>
              <div>
                <strong>{elimination.reduced}</strong>
                <p>{elimination.text}</p>
              </div>
            </div>

            <LogicFigureNote
              noteId="18-eliminacion"
              what="Tres operaciones de reducción trabajadas por la clase."
              how="Cada botón mantiene el contenido relevante y elimina la expresión valorativa explícita."
              why="Los ejemplos permiten comprobar la tesis de redundancia en afirmación, negación de verdad y atribución de falsedad."
              takeaway="Si estas reducciones preservan contenido, el vocabulario de verdad parece no realizar trabajo lógico indispensable en esos casos."
            />
          </section>

          <section id="contexto" className="flc1-section">
            <SectionTitle number="04" eyebrow="Iudicium in contextu">
              Sin juicio, contexto e individuo no aparece la evaluación veritativa
            </SectionTitle>

            <div className="flc18-tabs four">
              {contextModes.map(item=>(
                <button type="button" key={item.id} className={item.id===contextId?'is-active':''} onClick={()=>setContextId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc18-reader violet">
              <div>
                <span>{context.mark}</span>
                <h3>{context.title}</h3>
                <blockquote>{context.example}</blockquote>
              </div>
              <p>{context.text}</p>
            </div>

            <div className="flc18-context-chain">
              <span>“HOY HACE CALOR”</span><b>+</b>
              <span>QUIÉN</span><b>+</b>
              <span>CUÁNDO</span><b>+</b>
              <span>DÓNDE</span><b>→</b>
              <strong>JUICIO EVALUABLE</strong>
            </div>

            <LogicFigureNote
              noteId="18-contexto"
              what="Las variables contextuales que la clase considera necesarias para evaluar ciertos juicios."
              how="La oración permanece igual, pero el valor puede variar al fijar hablante, momento, lugar y situación."
              why="Esto muestra por qué verdad y falsedad no se tratan aquí como propiedades intrínsecas de una cadena lingüística aislada."
              takeaway="La evaluación veritativa ocurre sobre un uso concreto del contenido en contexto."
            />
          </section>

          <section id="capas" className="flc1-section">
            <SectionTitle number="05" eyebrow="Quattuor gradus">
              Oración, contenido judicable, juicio y valor veritativo
            </SectionTitle>

            <div className="flc18-tabs four">
              {layerModes.map(item=>(
                <button type="button" key={item.id} className={item.id===layerId?'is-active':''} onClick={()=>setLayerId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc18-reader green">
              <div>
                <span>{layer.mark}</span>
                <h3>{layer.title}</h3>
                <blockquote>{layer.example}</blockquote>
              </div>
              <div>
                <strong>{layer.status}</strong>
                <p>{layer.text}</p>
              </div>
            </div>

            <div className="flc18-layers">
              <span>ORACIÓN</span><b>→</b>
              <span>CONTENIDO JUDICABLE</span><b>→</b>
              <span>JUICIO</span><b>→</b>
              <strong>V / F</strong>
            </div>

            <LogicFigureNote
              noteId="18-capas"
              what="La secuencia conceptual que la fuente utiliza para separar lenguaje y evaluación."
              how="Cada etapa añade algo: estructura lingüística, posibilidad de juzgar, acto de afirmar/negar y evaluación."
              why="La clase quiere evitar identificar automáticamente oración con juicio verdadero o falso."
              takeaway="Significado, judicabilidad, acto de juzgar y valor veritativo son niveles diferentes."
            />
          </section>

          <section id="pseudo" className="flc1-section">
            <SectionTitle number="06" eyebrow="Pseudoproblema linguisticum">
              La verdad se “desinfla”
            </SectionTitle>

            <div className="flc18-pseudo">
              <article>
                <span>LECTURA INFLADA</span>
                <strong>“¿Qué es la Verdad?”</strong>
                <p>buscar una entidad, sustancia o propiedad metafísica especial</p>
              </article>
              <b>→</b>
              <article className="dark">
                <span>REDUNDANCIA</span>
                <strong>analizar cómo usamos “verdadero”</strong>
                <p>mostrar que puede ser lingüísticamente eliminable</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="18-pseudoproblema"
              what="La estrategia deflacionista que convierte parte del problema tradicional de la verdad en un problema de lenguaje."
              how="El desplazamiento va de buscar una entidad metafísica a examinar qué trabajo hace una expresión."
              why="La fuente describe provocativamente esta estrategia como una forma de evitar el problema metafísico profundo."
              takeaway="La teoría de la redundancia reduce la carga ontológica del concepto de verdad."
            />
          </section>

          <section id="asentimiento" className="flc1-section">
            <SectionTitle number="07" eyebrow="Assensus loquentis">
              “Es verdad” como acuerdo del hablante
            </SectionTitle>

            <div className="flc18-tabs two">
              {assentModes.map(item=>(
                <button type="button" key={item.id} className={item.id===assentId?'is-active':''} onClick={()=>setAssentId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc18-reader red">
              <div><span>{assent.mark}</span><h3>{assent.title}</h3><blockquote>{assent.example}</blockquote></div>
              <p>{assent.text}</p>
            </div>

            <LogicFigureNote
              noteId="18-asentimiento"
              what="La interpretación de 'es verdad' como expresión de asentimiento destacada por las notas."
              how="La segunda forma no añade una propiedad al contenido; expresa que el hablante lo afirma o lo respalda."
              why="Esto refuerza el desplazamiento desde la oración aislada hacia el acto lingüístico del interlocutor."
              takeaway="La función relevante puede estar en afirmar P, no en predicar de P una propiedad llamada verdad."
            />
          </section>

          <section id="sujeto-predicado" className="flc1-section">
            <SectionTitle number="08" eyebrow="Subiectum et praedicatum">
              “Es verdad que” no añade otra relación sujeto–predicado
            </SectionTitle>

            <div className="flc18-subject-predicate">
              <article>
                <span>SUJETO</span>
                <strong>La casa</strong>
              </article>
              <b>+</b>
              <article>
                <span>PREDICADO</span>
                <strong>es azul</strong>
              </article>
              <b>→</b>
              <article className="dark">
                <span>AFIRMACIÓN COMPLETA</span>
                <strong>La casa es azul.</strong>
              </article>
            </div>

            <div className="flc18-superfluous">
              <span>AGREGAR</span>
              <strong>“Es verdad que...”</strong>
              <b>NO CREA</b>
              <strong>una nueva relación lógica interna</strong>
            </div>

            <LogicFigureNote
              noteId="18-sujeto-predicado"
              what="La razón estructural ofrecida por la clase para llamar redundante al prefijo de verdad."
              how="La proposición ordinaria ya contiene sujeto y predicado unidos en una afirmación."
              why="Añadir 'es verdad que' no modifica esa relación interna entre casa y azul."
              takeaway="La unión proposicional ya está siendo afirmada antes de introducir el vocabulario explícito de verdad."
            />
          </section>

          <section id="rickert" className="flc1-section">
            <SectionTitle number="09" eyebrow="Propositio attributa Rickert">
              Del enunciado al contenido judicable
            </SectionTitle>

            <div className="flc18-rickert">
              <article>
                <span>PROPOSICIÓN</span>
                <strong>El sol brilla.</strong>
              </article>
              <b>→</b>
              <article>
                <span>CONTENIDO JUDICABLE</span>
                <strong>¿Está brillando el sol?</strong>
              </article>
              <b>→</b>
              <article className="dark">
                <span>JUICIO</span>
                <strong>Sí / No</strong>
              </article>
            </div>

            <LogicFigureNote
              noteId="18-rickert"
              what="La propuesta que las notas atribuyen a Rickert para separar contenido lingüístico y respuesta judicativa."
              how="La afirmación se reexpresa como aquello sobre lo cual puede decidir un sujeto; después aparece el acto de responder."
              why="La fuente usa esta reconstrucción para situar verdad y falsedad en el juicio, no en la oración tomada aisladamente."
              takeaway="La evaluación veritativa puede entenderse como resultado de un acto judicativo sobre contenido significativo."
            />
          </section>

          <section id="rey" className="flc1-section">
            <SectionTitle number="10" eyebrow="Referentia vacua">
              El actual rey de Francia vuelve a poner presión sobre la bivalencia
            </SectionTitle>

            <div className="flc18-king">
              <p>El actual rey de Francia es calvo.</p>
              <div>
                {kingOptions.map(([label,text])=>(
                  <article key={label}><span>{label}</span><p>{text}</p></article>
                ))}
              </div>
            </div>

            <div className="flc18-reference">
              <span>ORACIÓN BIEN FORMADA</span><b>+</b>
              <span>SIGNIFICADO COMPRENSIBLE</span><b>pero</b>
              <span>SIN REFERENTE ACTUAL</span><b>→</b>
              <strong>PROBLEMA DE EVALUACIÓN</strong>
            </div>

            <LogicFigureNote
              noteId="18-rey"
              what="El problema referencial que la clase utiliza para cuestionar una evaluación bivalente inmediata."
              how="La oración puede entenderse, pero la descripción 'actual rey de Francia' no designa un individuo existente."
              why="La dificultad muestra que buena formación gramatical y significado no garantizan automáticamente una evaluación V/F sencilla."
              takeaway="Referencia y valor de verdad deben distinguirse del mero significado lingüístico."
            />
          </section>

          <section id="deflacion" className="flc1-section">
            <SectionTitle number="11" eyebrow="Deflatio / inflatio">
              Dos maneras de entender el peso filosófico de la verdad
            </SectionTitle>

            <div className="flc18-tabs two">
              {theoryModes.map(item=>(
                <button type="button" key={item.id} className={item.id===theoryId?'is-active':''} onClick={()=>setTheoryId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc18-reader violet">
              <div>
                <span>{theory.mark}</span>
                <h3>{theory.title}</h3>
                <code>{theory.formula}</code>
              </div>
              <div>
                <strong>{theory.thesis}</strong>
                <p>{theory.text}</p>
              </div>
            </div>

            <LogicFigureNote
              noteId="18-deflacion"
              what="La oposición general entre teorías que minimizan y teorías que robustecen el concepto de verdad."
              how="Deflacionismo reduce el trabajo de 'verdadero'; inflacionismo considera que todavía hay una propiedad o relación sustantiva que explicar."
              why="La teoría de la redundancia sólo cobra su lugar histórico cuando se ve como miembro de una familia deflacionista más amplia."
              takeaway="La disputa no es sólo cómo definir verdad, sino si hay algo profundo que definir."
            />
          </section>

          <section id="frege" className="flc1-section">
            <SectionTitle number="12" eyebrow="Contra reductio">
              Frege como contraste: verdad con papel lógico fuerte
            </SectionTitle>

            <div className="flc18-frege">
              <article>
                <span>REDUNDANCIA</span>
                <strong>T(P) ≡ P</strong>
                <p>“verdadero” puede eliminarse en usos simples</p>
              </article>
              <div>VS.</div>
              <article className="dark">
                <span>FREGE · SEGÚN ESTA CLASE</span>
                <strong>valor de verdad</strong>
                <p>la verdad conserva un papel estructural en lógica y pensamiento</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="18-frege"
              what="El contraste que las notas trazan entre la teoría de la redundancia y una concepción lógica más robusta asociada a Frege."
              how="No se trata de una reconstrucción completa de Frege, sino del papel comparativo que cumple en esta sesión."
              why="La comparación muestra qué pierde o simplifica un enfoque estrictamente deflacionista."
              takeaway="Eliminar el predicado de verdad no obliga a todas las teorías lógicas a considerar irrelevante el valor de verdad."
            />
          </section>

          <section id="prooracional" className="flc1-section">
            <SectionTitle number="13" eyebrow="Prosententiales">
              Teorías pro-oracionales: continuación del impulso deflacionista
            </SectionTitle>

            <div className="flc18-authors">
              {proSententialAuthors.map((author,index)=>(
                <article key={author}>
                  <span>{String(index+1).padStart(2,'0')}</span>
                  <strong>{author}</strong>
                </article>
              ))}
            </div>

            <div className="flc18-prosentential-thesis">
              <span>TESIS GENERAL PRESENTADA EN LA CLASE</span>
              <strong>La oración aporta contenido semántico; la verdad no tiene por qué funcionar como propiedad intrínseca de esa oración.</strong>
            </div>

            <LogicFigureNote
              noteId="18-prooracionales"
              what="Los autores mencionados y la dirección general en la que la clase sitúa las teorías pro-oracionales."
              how="La lista es una agenda de continuidad, no una exposición detallada de cada autor."
              why="Estas teorías prolongan el esfuerzo por explicar el vocabulario de verdad mediante funciones lingüísticas menos metafísicamente cargadas."
              takeaway="El deflacionismo no termina con la redundancia: abre una familia más amplia de análisis del uso de 'verdadero'."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="14" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc18-summary">
              <article><span>IDEA 1</span><h3>“Verdadero” puede eliminarse</h3><p>En los ejemplos simples de la sesión, T(P) no añade contenido a P.</p></article>
              <article><span>IDEA 2</span><h3>La oración no agota el juicio</h3><p>Significado, contenido judicable, acto de juzgar y valor veritativo deben distinguirse.</p></article>
              <article><span>IDEA 3</span><h3>La redundancia es deflacionista</h3><p>No busca una propiedad metafísica profunda llamada verdad.</p></article>
              <article><span>IDEA 4</span><h3>El problema sigue abierto</h3><p>Referencia, contexto y uso muestran por qué el vocabulario de verdad no desaparece sin más.</p></article>
            </div>

            <div className="flc18-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Cuál es la tesis central de la teoría de la redundancia?</li>
                <li>¿Por qué “verdadero” no funciona como “azul”?</li>
                <li>¿Cómo se reduce “es verdad que P”?</li>
                <li>¿Cómo se reduce “no es verdad que P”?</li>
                <li>¿Cómo se trata “es falso que P” en los ejemplos de la clase?</li>
                <li>¿Por qué importan sujeto, tiempo, lugar y contexto?</li>
                <li>¿Qué diferencia oración, contenido judicable, juicio y valor veritativo?</li>
                <li>¿En qué sentido la verdad se vuelve un pseudoproblema lingüístico?</li>
                <li>¿Cómo entiende la clase “es verdad” como asentimiento?</li>
                <li>¿Por qué “es verdad que” no añade otra relación sujeto–predicado?</li>
                <li>¿Cómo funciona el ejemplo atribuido a Rickert?</li>
                <li>¿Qué problema introduce el actual rey de Francia?</li>
                <li>¿Qué diferencia deflacionismo e inflacionismo?</li>
                <li>¿Qué papel comparativo cumple Frege?</li>
                <li>¿Qué autores se mencionan en las teorías pro-oracionales?</li>
                <li>¿Por qué seguimos usando “verdad” si parece redundante?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Nota sobre la fuente</strong>
              <p>El documento del 27 de abril es una versión de trabajo basada en notas y comentarios integrados. La propia fuente indica que el audio fue recibido, pero no hay una transcripción textual accesible para verificación literal. Esta página conserva el contenido conceptual documentado sin presentarlo como transcripción palabra por palabra.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 18 · 27 abril 2026</span>
      </footer>
    </main>
  )
}
