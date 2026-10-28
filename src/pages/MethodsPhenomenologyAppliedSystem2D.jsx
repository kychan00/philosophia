import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { Background, Controls, Handle, MarkerType, Position, ReactFlow, ReactFlowProvider } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import './MethodsPhenomenologySystem2D.css'
import PhenomenologyNodeVisual from './MethodsPhenomenologyVisuals'

const chapters = [
  {
    id: 'metodo',
    number: 'I',
    title: 'La fenomenología como método',
    question: '¿Cómo se investiga filosóficamente una experiencia?',
    before: 'Partimos de una experiencia que queremos comprender, no sólo medir.',
    after: 'Con el método claro, lo aplicamos paso a paso a un caso nuevo.',
  },
  {
    id: 'caso',
    number: 'II',
    title: 'Caso · estar perdido',
    question: '¿Cómo cambia el mundo cuando dejamos de saber por dónde seguir?',
    before: 'Ya contamos con epojé, intencionalidad, análisis de horizontes y variación eidética.',
    after: 'El resultado será una estructura provisional de la experiencia de estar perdido.',
  },
]

const entries = [
  {
    id: 'm1', chapter: 'metodo', title: '¿Qué investiga la fenomenología?',
    short: 'La experiencia tal como es vivida y aparece con sentido.',
    points: [
      'No pregunta primero cuántas veces ocurre algo, sino cómo se da para quien lo vive.',
      'Su objeto no es una opinión privada aislada, sino la estructura de una experiencia.',
      'Describe antes de explicar causalmente.',
    ],
    analysis: 'La fenomenología convierte la experiencia vivida en un problema filosófico: pregunta por el modo en que algo aparece, adquiere sentido y organiza la relación del sujeto con su mundo.',
    simple: 'No empieza contando hechos; empieza preguntando qué significa vivirlos.',
  },
  {
    id: 'm2', chapter: 'metodo', title: 'Fenómeno y experiencia vivida',
    short: 'El fenómeno es aquello que se muestra dentro de una experiencia.',
    points: [
      'Fenómeno no significa simplemente apariencia falsa.',
      'Importa cómo algo se presenta: cercano, extraño, familiar, incierto o valioso.',
      'La descripción debe volver a escenas concretas.',
    ],
    analysis: 'Investigar fenomenológicamente es atender al modo de aparición. Un mismo objeto físico puede adquirir sentidos diferentes según la experiencia en la que aparece.',
    simple: 'No sólo importa qué cosa hay, sino cómo se presenta para quien la vive.',
  },
  {
    id: 'm3', chapter: 'metodo', title: 'Intencionalidad',
    short: 'Toda conciencia es conciencia de algo.',
    points: [
      'Percibir es percibir algo; buscar es buscar algo; recordar es recordar algo.',
      'La conciencia no se estudia como una caja cerrada.',
      'La relación sujeto–mundo es constitutiva de la experiencia.',
    ],
    analysis: 'La intencionalidad permite estudiar la experiencia como relación: un acto de conciencia está dirigido hacia algo que aparece con determinado sentido.',
    simple: 'La conciencia siempre está orientada hacia algo.',
  },
  {
    id: 'm4', chapter: 'metodo', title: 'Epojé',
    short: 'Suspender explicaciones automáticas para poder describir.',
    points: [
      'No significa negar el mundo.',
      'Se ponen entre paréntesis diagnósticos, causas y juicios previos.',
      'La pregunta es: ¿qué puedo describir antes de explicar?',
    ],
    analysis: 'La epojé modifica la actitud del investigador. En vez de cerrar rápidamente el fenómeno con una teoría, mantiene abierta la descripción de cómo se da la experiencia.',
    simple: 'Por un momento dejamos de explicar para mirar mejor.',
  },
  {
    id: 'm5', chapter: 'metodo', title: 'Noesis ↔ noema',
    short: 'Acto de conciencia y objeto tal como aparece forman una correlación.',
    points: [
      'Noesis: percibir, buscar, dudar, recordar, anticipar.',
      'Noema: aquello tal como aparece en ese acto.',
      'El análisis busca la correlación, no dos objetos independientes.',
    ],
    analysis: 'Noesis y noema permiten describir con precisión qué hace la conciencia y qué sentido adquiere su objeto dentro de esa vivencia.',
    simple: 'Noesis es el acto; noema es aquello tal como aparece en ese acto.',
  },
  {
    id: 'm6', chapter: 'metodo', title: 'Horizontes de experiencia',
    short: 'Cuerpo, espacio, tiempo y mundo participan en el sentido.',
    points: [
      'El cuerpo actúa y percibe desde una situación concreta.',
      'El espacio puede dejar de ser transparente y volverse problemático.',
      'El futuro puede hacerse presente mediante anticipación.',
      'La experiencia siempre ocurre dentro de un mundo compartido.',
    ],
    analysis: 'La experiencia no se reduce a una frase mental. Está encarnada, situada espacialmente, temporalmente orientada e inserta en un mundo de relaciones.',
    simple: 'Una experiencia modifica cómo vivimos el cuerpo, el espacio, el tiempo y a los otros.',
  },
  {
    id: 'm7', chapter: 'metodo', title: 'Variación eidética',
    short: 'Cambiar imaginariamente rasgos para buscar qué parece estructural.',
    points: [
      'Se modifica un rasgo del caso y se pregunta si la experiencia sigue siendo la misma.',
      'Permite distinguir lo accidental de candidatos invariantes.',
      'No autoriza a proclamar una esencia universal sin justificación.',
    ],
    analysis: 'La variación eidética funciona como experimento conceptual: ayuda a probar qué elementos pueden cambiar y cuáles parecen necesarios para que la experiencia conserve su identidad.',
    simple: 'Cambiamos mentalmente el caso para ver qué puede variar y qué parece indispensable.',
  },
  {
    id: 'm8', chapter: 'metodo', title: 'Rigor y límite hermenéutico',
    short: 'Descripción disciplinada, reflexividad y reconocimiento de los límites.',
    points: [
      'El testimonio no es acceso infalible a una mente privada.',
      'Se distingue descripción, interpretación e inferencia.',
      'Toda comprensión ocurre desde un horizonte histórico y lingüístico.',
      'El resultado debe ser argumentado y revisable.',
    ],
    analysis: 'El rigor fenomenológico no consiste en fingir neutralidad absoluta, sino en hacer visible el procedimiento, controlar las inferencias y reconocer que toda comprensión es situada.',
    simple: 'Subjetivo no significa arbitrario: hay método, contraste y límites.',
  },

  {
    id: 'c1', chapter: 'caso', title: '1 · Delimitar el fenómeno',
    short: 'La experiencia de estar perdido en una ciudad desconocida.',
    points: [
      'Una persona camina por una ciudad que no conoce y descubre que ya no sabe cómo llegar a su destino.',
      'No investigamos la ciudad en general, sino la experiencia concreta de perder la orientación.',
      'Pregunta: ¿cómo se transforma el mundo cuando deja de saberse por dónde seguir?',
    ],
    analysis: 'La delimitación convierte un tema amplio —la orientación espacial— en un fenómeno preciso: la ruptura de la orientación práctica dentro de un entorno desconocido.',
    simple: 'No estudiamos mapas ni calles; estudiamos qué significa vivir el momento en que uno deja de saber por dónde seguir.',
  },
  {
    id: 'c2', chapter: 'caso', title: '2 · Diseñar el estudio',
    short: 'Elegir experiencias pertinentes y construir una entrevista descriptiva.',
    points: [
      'Participantes: personas que hayan vivido recientemente una situación real de desorientación en una ciudad desconocida.',
      'Selección intencional: importa que hayan vivido el fenómeno, no representar estadísticamente a una población.',
      'Técnica principal: entrevista abierta centrada en una escena concreta.',
      'El diseño registra el relato sin convertirlo todavía en explicación.',
    ],
    analysis: 'El diseño técnico organiza cómo acceder a experiencias comparables. La fenomenología determina después cómo interrogarlas y analizarlas.',
    simple: 'Primero decidimos a quién escuchar y cómo obtener una descripción suficientemente rica.',
  },
  {
    id: 'c3', chapter: 'caso', title: '3 · Descripción natural',
    short: 'Reconstruir la escena antes de interpretarla.',
    points: [
      'Relato de trabajo: “Doblé dos veces, dejé de reconocer las calles y ya no sabía si avanzar o regresar”.',
      'Preguntas: ¿qué vio?, ¿qué intentó hacer?, ¿qué cambió en su cuerpo?, ¿cómo aparecieron las calles?',
      'Se conservan expresiones concretas antes de agruparlas en conceptos.',
    ],
    analysis: 'La descripción natural proporciona el material inicial. Todavía no se afirma que haya ansiedad, pérdida de control, déficit de orientación ni ninguna causa psicológica.',
    simple: 'Primero reconstruimos lo ocurrido tal como fue vivido, sin ponerle una teoría encima.',
  },
  {
    id: 'c4', chapter: 'caso', title: '4 · Aplicar la epojé',
    short: 'Suspender explicaciones para atender a la experiencia de desorientación.',
    points: [
      'Suspendemos: “se perdió porque tiene mala orientación”.',
      'Suspendemos: “la ciudad está mal diseñada”.',
      'Suspendemos: “esto es ansiedad”.',
      'Suspendemos el juicio de si objetivamente estaba cerca o lejos del destino.',
    ],
    analysis: 'La epojé no niega esas hipótesis; impide que sustituyan prematuramente la descripción de la experiencia.',
    simple: 'Dejamos en pausa la pregunta “¿por qué se perdió?” y preguntamos “¿cómo fue estar perdido?”.',
  },
  {
    id: 'c5', chapter: 'caso', title: '5 · Noesis ↔ noema',
    short: 'Analizar los actos de orientación y el mundo tal como aparece en ellos.',
    points: [
      'Noesis: buscar, comparar, recordar, dudar, decidir, anticipar, preguntar.',
      'Noema: la calle como ruta posible, la esquina como decisión, un letrero como pista, un desconocido como posible guía.',
      'El mismo espacio físico cambia de sentido según el acto intencional.',
    ],
    analysis: 'Estar perdido no es simplemente desconocer coordenadas. Es una forma específica en que el entorno aparece respecto de la intención de llegar a algún lugar.',
    simple: 'Las calles dejan de ser sólo calles: aparecen como pistas, opciones, obstáculos o posibles salidas.',
  },
  {
    id: 'c6', chapter: 'caso', title: '6 · Cuerpo vivido',
    short: 'La desorientación vuelve explícito el cuerpo que busca orientarse.',
    points: [
      'El paso puede acelerarse, detenerse o repetirse.',
      'La mirada explora fachadas, nombres, cruces y puntos de referencia.',
      'El cuerpo gira, retrocede, prueba direcciones y corrige trayectorias.',
      'La orientación deja de ser automática y se vuelve tarea corporal.',
    ],
    analysis: 'Cuando el camino habitual falla, el cuerpo deja de moverse de manera transparente y aparece como cuerpo que explora activamente posibilidades de orientación.',
    simple: 'Cuando uno está perdido, caminar deja de ser automático: el cuerpo empieza a buscar.',
  },
  {
    id: 'c7', chapter: 'caso', title: '7 · Espacio vivido',
    short: 'El espacio deja de ser un campo transparente de caminos.',
    points: [
      'Una esquina puede aparecer como bifurcación incierta.',
      'Una calle semejante a otra puede producir pérdida de referencias.',
      'La distancia objetiva importa menos que la posibilidad vivida de saber por dónde.',
      'El entorno pasa de transitable a problemático.',
    ],
    analysis: 'El espacio vivido no coincide con el espacio geométrico. Estar perdido transforma la ciudad en un campo de posibilidades ambiguas que deben interpretarse.',
    simple: 'La ciudad no cambia físicamente, pero cambia completamente la manera en que se presenta.',
  },
  {
    id: 'c8', chapter: 'caso', title: '8 · Tiempo e intersubjetividad',
    short: 'La desorientación reorganiza el futuro y vuelve significativos a los otros.',
    points: [
      'Si existe una cita, el futuro puede aparecer como urgencia: “voy a llegar tarde”.',
      'El pasado inmediato se revisa: “¿en qué esquina me equivoqué?”.',
      'Otras personas aparecen como posibles fuentes de orientación, indiferencia o ayuda.',
      'La experiencia articula memoria, anticipación y mundo compartido.',
    ],
    analysis: 'La desorientación no es sólo espacial. Tiene una estructura temporal y social: se reconstruye lo ya recorrido, se anticipa la llegada y se recurre a otros como habitantes competentes del lugar.',
    simple: 'Estar perdido también cambia el tiempo: revisamos por dónde vinimos y pensamos qué pasará si no llegamos.',
  },
  {
    id: 'c9', chapter: 'caso', title: '9 · Variación eidética',
    short: 'Modificar el caso para probar qué parece necesario en la experiencia.',
    points: [
      'Variación A: no existe ningún destino. ¿Sigue teniendo sentido decir “estoy perdido”?',
      'Variación B: conocemos con certeza la ruta desde el punto actual. ¿Persiste la desorientación?',
      'Variación C: desaparece toda presión temporal. ¿Desaparece estar perdido o sólo el apuro?',
      'Variación D: alguien confiable nos guía. ¿En qué momento se restablece la orientación?',
    ],
    analysis: 'Las variaciones sugieren que la urgencia puede cambiar sin que desaparezca el fenómeno. La relación entre posición incierta, destino intencional y ausencia de una ruta practicable parece más estructural.',
    simple: 'Quitamos o cambiamos elementos para distinguir qué pertenece realmente a estar perdido y qué sólo lo acompaña.',
  },
  {
    id: 'c10', chapter: 'caso', title: '10 · Síntesis estructural',
    short: 'Formular una estructura provisional de la experiencia.',
    points: [
      'Existe un destino intencional: se quiere llegar a algún lugar.',
      'Se rompe la orientación práctica entre el aquí actual y ese destino.',
      'El espacio aparece como conjunto ambiguo de posibilidades que deben interpretarse.',
      'El cuerpo se vuelve exploratorio y el tiempo se reorganiza alrededor de recuperar orientación.',
      'La estructura debe contrastarse con más experiencias.',
    ],
    analysis: 'Síntesis provisional: estar perdido consiste en la interrupción de la orientación práctica hacia un destino, por la cual el entorno deja de funcionar como campo transparente de caminos y aparece como horizonte incierto de posibilidades que exige búsqueda, decisión y eventual apoyo de otros.',
    simple: 'Estar perdido no es sólo no saber una dirección: es que el mundo deja de guiarnos de manera evidente hacia donde queremos ir.',
  },
]

const relationPairs = [
  ['m1','m2','delimita'],['m2','m3','abre'],['m3','m4','orienta'],['m4','m5','permite'],
  ['m5','m6','se despliega'],['m6','m7','prepara'],['m7','m8','exige rigor'],['m8','c1','se aplica'],
  ['c1','c2','diseña'],['c2','c3','recoge'],['c3','c4','reduce'],['c4','c5','analiza'],
  ['c5','c6','se encarna'],['c5','c7','espacializa'],['c5','c8','temporaliza'],
  ['c6','c9','alimenta'],['c7','c9','alimenta'],['c8','c9','alimenta'],['c9','c10','sintetiza'],
]

const quizzes = [
  { chapter:'metodo', node:'m1', question:'¿Qué investiga principalmente la fenomenología?', options:['Frecuencias estadísticas','La experiencia tal como es vivida y aparece con sentido','Sólo conductas observables'], correct:1, explanation:'La fenomenología centra la investigación en el modo de darse y el sentido de la experiencia.' },
  { chapter:'metodo', node:'m4', question:'¿Qué hace la epojé?', options:['Niega el mundo','Suspende provisionalmente explicaciones y juicios previos','Elimina toda interpretación'], correct:1, explanation:'La epojé modifica la actitud del investigador para describir antes de explicar.' },
  { chapter:'metodo', node:'m5', question:'¿Qué relación existe entre noesis y noema?', options:['Son polos correlativos de una experiencia','Son dos objetos físicos','No tienen relación'], correct:0, explanation:'La noesis es el acto; el noema es aquello tal como aparece en ese acto.' },
  { chapter:'metodo', node:'m7', question:'¿Para qué sirve la variación eidética?', options:['Para calcular porcentajes','Para probar qué rasgos pueden variar y cuáles parecen estructurales','Para diagnosticar clínicamente'], correct:1, explanation:'La variación eidética modifica imaginariamente el caso para explorar candidatos invariantes.' },
  { chapter:'caso', node:'c4', question:'¿Qué hace la epojé en el caso de estar perdido?', options:['Decide por qué se perdió la persona','Suspende explicaciones para describir cómo se vive la desorientación','Calcula la distancia al destino'], correct:1, explanation:'Mantiene en suspenso explicaciones causales para atender al modo de aparecer del fenómeno.' },
  { chapter:'caso', node:'c9', question:'¿Qué prueba la variación sin destino?', options:['Si la urgencia aumenta','Si un destino intencional es estructural para estar perdido','Si la ciudad es peligrosa'], correct:1, explanation:'Sin un destino o dirección pretendida cambia radicalmente el sentido de estar perdido.' },
  { chapter:'caso', node:'c10', question:'¿Qué produce finalmente el análisis?', options:['Una ley universal','Una estructura provisional de la experiencia','Una medición de distancias'], correct:1, explanation:'La síntesis organiza rasgos estructurales sin convertirlos en ley universal.' },
]

const nodeAccents = {
  m1:'#0f62fe', m2:'#1192e8', m3:'#08bdba', m4:'#be95ff',
  m5:'#ee5396', m6:'#42be65', m7:'#f1c21b', m8:'#fa4d56',
  c1:'#4589ff', c2:'#33b1ff', c3:'#3ddbd9', c4:'#d4bbff',
  c5:'#ff7eb6', c6:'#6fdc8c', c7:'#fddc69', c8:'#ff832b',
  c9:'#ff8389', c10:'#78a9ff',
}
const nodeTypes = { study: StudyNode }

function StudyNode({ data, selected }) {
  return (
    <div className={'m19-node phen2d-node' + (selected ? ' selected' : '') + (data.guided ? ' guided' : '')} style={{ '--m19-node-accent': data.accent }}>
      <Handle type="target" position={Position.Top} />
      <div className="m19-node-top"><span>{data.number}</span><span>{data.chapter === 'metodo' ? 'MÉTODO' : 'CASO'}</span></div>
      <strong>{data.title}</strong>
      <p>{data.short}</p>
      <span className="m19-node-foot">ABRIR FOLIO <b>↗</b></span>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

function Workspace() {
  const [chapterId,setChapterId]=useState('metodo')
  const [selectedId,setSelectedId]=useState('m1')
  const [mode,setMode]=useState('folio')
  const [step,setStep]=useState(0)
  const [qIndex,setQIndex]=useState(0)
  const [answer,setAnswer]=useState(null)
  const [expanded,setExpanded]=useState(false)
  const [projection,setProjection]=useState(false)
  const flowRef=useRef(null)
  const chapter=chapters.find(item=>item.id===chapterId)
  const visible=useMemo(()=>chapterId==='todo'?entries:entries.filter(e=>e.chapter===chapterId),[chapterId])
  const relevantQuizzes=useMemo(()=>quizzes.filter(q=>chapterId==='todo'||q.chapter===chapterId),[chapterId])
  const selected=visible.find(e=>e.id===selectedId)||visible[0]
  const selectedIndex=visible.findIndex(e=>e.id===selected.id)
  const question=relevantQuizzes[qIndex]||relevantQuizzes[0]
  const columns=chapterId==='todo'?3:2
  const xGap=chapterId==='todo'?540:570
  const yGap=chapterId==='todo'?330:350

  const focusNode=id=>{
    const i=visible.findIndex(e=>e.id===id)
    if(i<0||!flowRef.current)return
    flowRef.current.setCenter((i%columns)*xGap+185,Math.floor(i/columns)*yGap+96,{zoom:projection?1.02:.86,duration:280})
  }
  const switchChapter=id=>{
    setChapterId(id); const next=id==='todo'?entries[0]:entries.find(e=>e.chapter===id)
    setSelectedId(next.id); setStep(0); setMode('folio'); setQIndex(0); setAnswer(null)
  }
  const guideStep=n=>{
    const next=Math.max(0,Math.min(visible.length-1,n)); setStep(next); setSelectedId(visible[next].id); setMode('guia'); focusNode(visible[next].id)
  }
  const selectNode=id=>{ setSelectedId(id); if(mode==='guia')setStep(visible.findIndex(e=>e.id===id)); requestAnimationFrame(()=>focusNode(id)) }
  const moveInspector=delta=>{
    const current=visible.findIndex(e=>e.id===selected.id)
    const next=Math.max(0,Math.min(visible.length-1,current+delta))
    if(next===current)return
    selectNode(visible[next].id)
  }
  const moveInspectorTouch=(delta,event)=>{
    event.preventDefault()
    moveInspector(delta)
  }
  const chooseQuestion=n=>{ setQIndex(Math.max(0,Math.min(relevantQuizzes.length-1,n))); setAnswer(null) }
  const startProjection=()=>{ setChapterId('todo'); setSelectedId(entries[0].id); setStep(0); setMode('guia'); setProjection(true); setExpanded(true) }
  const exitProjection=()=>{ setProjection(false); setExpanded(false); setMode('folio') }

  const {nodes,edges}=useMemo(()=>{
    const ids=new Set(visible.map(e=>e.id))
    const nodes=visible.map((entry,i)=>({
      id:entry.id,type:'study',selected:entry.id===selectedId,
      position:{x:(i%columns)*xGap,y:Math.floor(i/columns)*yGap},
      style:{width:370,height:184},
      data:{...entry,accent:nodeAccents[entry.id],number:String(entries.findIndex(item=>item.id===entry.id)+1).padStart(2,'0'),guided:mode==='guia'&&visible[step]?.id===entry.id},
    }))
    const edges=relationPairs.filter(([a,b])=>ids.has(a)&&ids.has(b)).map(([source,target,label])=>{
      const active=source===selectedId||target===selectedId
      const guided=mode==='guia'&&visible[step]?.id===target
      const edgeColor=(active||guided)?(nodeAccents[target]||'#78a9ff'):'#8d8d8d'
      return {
        id:'rel-'+source+'-'+target,source,target,label,type:'smoothstep',
        markerEnd:{type:MarkerType.ArrowClosed,color:edgeColor},
        style:{stroke:edgeColor,strokeWidth:active||guided?3:1.5},
        labelStyle:{fontSize:11,fill:'#f4f4f4'},labelBgStyle:{fill:'#262626'},labelBgPadding:[8,5],labelBgBorderRadius:2,
      }
    })
    return {nodes,edges}
  },[visible,selectedId,mode,step,columns,xGap,yGap])

  return (
    <section id="sistema-fenomenologia" className={'m19-system m21-system phen2d-system'+(expanded?' expanded':'')+(projection?' projection':'')} aria-label="Sistema 2D de fenomenología como método">
      <div className="m19-workspace-head phen2d-head">
        <div>
          <span className="m19-kicker">SISTEMA 2D · MÉTODO + CASO</span>
          <h2>Fenomenología en operación.</h2>
          <p>Primero se explica el método. Después se aplica sistemáticamente a la experiencia de estar perdido en una ciudad desconocida.</p>
        </div>
        <div className="phen2d-head-actions">
          {!projection&&<button type="button" className="phen2d-project" onClick={startProjection}>Proyectar recorrido ▶</button>}
          <button type="button" onClick={()=>projection?exitProjection():setExpanded(!expanded)}>{projection?'Salir de proyección ×':expanded?'Cerrar pantalla completa ×':'Ampliar sistema ⤢'}</button>
        </div>
      </div>

      {!projection&&<>
        <div className="m19-chapters" role="group" aria-label="Partes de la exposición">
          {[...chapters,{id:'todo',number:'Σ',title:'Recorrido completo'}].map(item=><button type="button" key={item.id} className={item.id===chapterId?'active':''} onClick={()=>switchChapter(item.id)}><span>{item.number}</span>{item.title}</button>)}
        </div>
        <div className="m19-journey">
          <p><b>PUNTO DE PARTIDA</b>{chapter?.before||'Primero explicamos el método y luego lo aplicamos.'}</p>
          <p><b>PREGUNTA</b>{chapter?.question||'¿Cómo pasa la fenomenología de concepto a investigación?'}</p>
          <p><b>RESULTADO</b>{chapter?.after||'Una estructura provisional de la experiencia.'}</p>
        </div>
      </>}

      <div className="m19-tools phen2d-tools">
        {!projection&&<button type="button" className={mode==='guia'?'active':''} onClick={()=>guideStep(0)}>Iniciar guía</button>}
        {!projection&&<button type="button" className={mode==='estudio'?'active':''} onClick={()=>{setMode('estudio');setAnswer(null);setQIndex(0);setSelectedId(relevantQuizzes[0]?.node||visible[0].id)}}>Modo estudio</button>}
        {!projection&&<button type="button" className={mode==='folio'?'active':''} onClick={()=>setMode('folio')}>Folio</button>}
        <span>{visible.length} nodos · {edges.length} relaciones</span>
      </div>

      {mode==='guia'&&<div className="m19-lesson phen2d-lesson" aria-live="polite">
        <span className="m19-kicker">{projection?'MODO PROYECCIÓN':'GUÍA'} · PASO {step+1} / {visible.length}</span>
        <h3>{visible[step].title}</h3>
        {projection&&<p className="phen2d-projection-line">{visible[step].short}</p>}
        <p>{visible[step].analysis}</p>
        <div className="m19-step-buttons">
          <button type="button" disabled={step===0} onClick={()=>guideStep(step-1)}>← Anterior</button>
          {!projection&&<button type="button" onClick={()=>setMode('folio')}>Consultar folio</button>}
          <button type="button" disabled={step===visible.length-1} onClick={()=>guideStep(step+1)}>Siguiente →</button>
        </div>
      </div>}

      {mode==='estudio'&&question&&<div className="m19-lesson" aria-live="polite">
        <span className="m19-kicker">REPASO · {qIndex+1} / {relevantQuizzes.length}</span>
        <h3>{question.question}</h3>
        <div className="m19-options">{question.options.map((option,i)=><button type="button" key={option} aria-pressed={answer===i} className={answer===i?'chosen':''} onClick={()=>{setAnswer(i);setSelectedId(question.node);focusNode(question.node)}}>{option}</button>)}</div>
        {answer!==null&&<p className="m19-feedback"><b>{answer===question.correct?'Correcto.':'Revise el razonamiento.'}</b> {question.explanation}</p>}
        <div className="m19-step-buttons">
          <button type="button" disabled={qIndex===0} onClick={()=>chooseQuestion(qIndex-1)}>← Anterior</button>
          <button type="button" onClick={()=>{selectNode(question.node);setMode('folio')}}>Consultar folio</button>
          <button type="button" disabled={qIndex===relevantQuizzes.length-1} onClick={()=>chooseQuestion(qIndex+1)}>Siguiente →</button>
        </div>
      </div>}

      <div className="m19-workspace phen2d-workspace">
        <div className={'m19-canvas phen2d-canvas'+(selectedId?' has-node-focus':'')} aria-label="Mapa bidimensional del método fenomenológico y su aplicación">
          <ReactFlow key={chapterId+(projection?'-projection':'')} onInit={instance=>{flowRef.current=instance}} fitView fitViewOptions={{padding:chapterId==='todo'?.15:.22,maxZoom:projection?.82:.95}} minZoom={.25} maxZoom={1.5} nodes={nodes} edges={edges} nodeTypes={nodeTypes} nodesDraggable={false} nodesConnectable={false} onNodeClick={(_,node)=>selectNode(node.id)} onPaneClick={()=>setSelectedId(null)} proOptions={{hideAttribution:true}}>
            <Background gap={22} size={1} color="#525252" />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>
        <aside className="m19-inspector phen2d-inspector" style={{'--phen2d-accent':nodeAccents[selected.id]}} aria-live="polite">
          <div className="m19-inspector-head"><span>FOLIO {String(entries.findIndex(item=>item.id===selected.id)+1).padStart(2,'0')} / {entries.length}</span><span>{selected.chapter==='metodo'?'MÉTODO':'CASO'}</span></div>
          <h3>{selected.title}</h3>
          <PhenomenologyNodeVisual id={selected.id} title={selected.title} />
          <h4>Idea central</h4>
          <ul>{selected.points.map((point,i)=><li key={i}>{point}</li>)}</ul>
          <h4>Qué significa metodológicamente</h4>
          <p>{selected.analysis}</p>
          <div className="m21-plain"><h4>En palabras simples:</h4><p>{selected.simple}</p></div>
          <div className="m19-inspector-nav">
            <button
              type="button"
              data-inspector-nav="prev"
              disabled={selectedIndex<=0}
              onTouchEnd={event=>moveInspectorTouch(-1,event)}
              onClick={()=>moveInspector(-1)}
            >← Previa</button>
            <button
              type="button"
              data-inspector-nav="next"
              disabled={selectedIndex>=visible.length-1}
              onTouchEnd={event=>moveInspectorTouch(1,event)}
              onClick={()=>moveInspector(1)}
            >Siguiente →</button>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default function MethodsPhenomenologyAppliedSystem2D(){
  return <main className="m19-page m21-page phen2d-page">
    <nav className="m19-nav"><Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link><Link to="/">Φ · PHILOSOPHIA</Link><span>FI104 · MÉTODO + CASO</span></nav>
    <header className="phen2d-hero">
      <p className="m19-kicker">FENOMENOLOGÍA · INVESTIGACIÓN FILOSÓFICA</p>
      <h1>Del método<br/><em>a la experiencia.</em></h1>
      <p>Primero: qué hace la fenomenología y con qué operaciones trabaja. Después: aplicación completa a un caso nuevo —estar perdido en una ciudad desconocida—.</p>
      <div className="phen2d-hero-route"><span>EXPERIENCIA</span><b>→</b><span>EPOJÉ</span><b>→</b><span>NOESIS / NOEMA</span><b>→</b><span>HORIZONTES</span><b>→</b><span>VARIACIÓN</span><b>→</b><span>ESTRUCTURA</span></div>
    </header>
    <section className="phen2d-thesis">
      <span className="m19-kicker">CASO DE APLICACIÓN</span>
      <h2>¿Qué significa <em>estar perdido</em> cuando el espacio deja de guiarnos hacia donde queremos ir?</h2>
      <p>El caso no procede de los ejemplos trabajados previamente. Se usa para demostrar que el método puede trasladarse a una experiencia distinta y producir una estructura filosóficamente argumentada.</p>
    </section>
    <ReactFlowProvider><Workspace/></ReactFlowProvider>
    <section className="m19-outro phen2d-outro">
      <span className="m19-kicker">SÍNTESIS</span>
      <h2>Estar perdido es una ruptura de la orientación práctica.</h2>
      <p>El mundo deja de ofrecer un camino evidente hacia el destino; el espacio se vuelve ambiguo, el cuerpo busca, el tiempo se reorganiza y los otros pueden aparecer como fuentes de orientación.</p>
      <Link to="/semestre/5/metodos-de-investigacion">← Volver a Métodos de Investigación</Link>
    </section>
    <footer className="m19-footer"><span>PHILOSOPHIA · MÉTODOS DE INVESTIGACIÓN</span><span>18 nodos · método + aplicación sistemática</span><span className="m19-footer-mark" aria-hidden="true">Φ</span></footer>
  </main>
}
