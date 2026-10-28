import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { Background, Controls, Handle, MarkerType, Position, ReactFlow, ReactFlowProvider } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import '../components/philosophy/system2d/System2DTheme.css'
import { SYSTEM_2D_THEME, resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme'
import './MethodsClass19Oct.css'
import './MethodsClass21Oct.css'
import './MethodsPhenomenologySystem2D.css'

const chapters = [
  {
    id: 'metodo',
    number: 'I',
    title: 'La fenomenología como método',
    question: '¿Cómo investiga filosóficamente una experiencia?',
    before: 'Partimos de una experiencia que queremos comprender, no sólo medir.',
    after: 'Con el método claro, lo aplicamos paso a paso a un caso concreto.',
  },
  {
    id: 'caso',
    number: 'II',
    title: 'Aplicación a un caso',
    question: '¿Cómo se convierte una vivencia concreta en análisis fenomenológico?',
    before: 'Ya contamos con epojé, intencionalidad, análisis de horizontes y variación eidética.',
    after: 'El resultado será una estructura provisional de la experiencia, no una ley causal.',
  },
]

const entries = [
  {
    id: 'm1',
    chapter: 'metodo',
    title: '¿Qué investiga la fenomenología?',
    short: 'La experiencia tal como es vivida y aparece con sentido.',
    points: [
      'No pregunta primero cuántas veces ocurre algo, sino cómo se da para quien lo vive.',
      'Su objeto no es una “opinión privada” aislada, sino la estructura de una experiencia.',
      'Describe antes de explicar causalmente.',
    ],
    analysis: 'La fenomenología convierte la experiencia vivida en un problema filosófico: pregunta por el modo en que algo aparece, adquiere sentido y organiza la relación del sujeto con su mundo.',
    simple: 'No empieza contando hechos; empieza preguntando qué significa vivirlos.',
    projection: 'La fenomenología investiga la experiencia tal como aparece y tiene sentido para quien la vive.',
  },
  {
    id: 'm2',
    chapter: 'metodo',
    title: 'Fenómeno y experiencia vivida',
    short: 'El fenómeno es aquello que se muestra en una experiencia.',
    points: [
      '“Fenómeno” no significa simplemente apariencia falsa.',
      'Importa cómo algo se presenta: amenazante, cercano, ausente, valioso, extraño.',
      'La descripción debe volver a escenas concretas.',
    ],
    analysis: 'Investigar fenomenológicamente es atender al modo de aparición. El mismo objeto físico puede adquirir sentidos distintos según la experiencia en la que aparece.',
    simple: 'No sólo importa qué cosa hay, sino cómo se le presenta a una persona.',
    projection: 'El fenómeno es el objeto tal como aparece dentro de una experiencia concreta.',
  },
  {
    id: 'm3',
    chapter: 'metodo',
    title: 'Intencionalidad',
    short: 'Toda conciencia es conciencia de algo.',
    points: [
      'Temer es temer algo; recordar es recordar algo; esperar es esperar algo.',
      'La conciencia no se estudia como una caja cerrada.',
      'La relación sujeto–mundo es constitutiva de la experiencia.',
    ],
    analysis: 'La intencionalidad permite estudiar la experiencia como una relación: un acto de conciencia está dirigido hacia algo que aparece con determinado sentido.',
    simple: 'La conciencia siempre está orientada hacia algo.',
    projection: 'La primera clave es la intencionalidad: toda experiencia está dirigida hacia algo.',
  },
  {
    id: 'm4',
    chapter: 'metodo',
    title: 'Epojé',
    short: 'Suspender explicaciones automáticas para poder describir.',
    points: [
      'No significa negar el mundo.',
      'Se ponen entre paréntesis diagnósticos, causas y juicios previos.',
      'La pregunta es: ¿qué puedo describir antes de explicar?',
    ],
    analysis: 'La epojé cambia la actitud del investigador. En vez de cerrar rápidamente el fenómeno con una teoría, mantiene abierta la descripción de cómo se da la experiencia.',
    simple: 'Por un momento dejamos de explicar para mirar mejor.',
    projection: 'La epojé no borra el mundo: suspende nuestras explicaciones sobre él.',
  },
  {
    id: 'm5',
    chapter: 'metodo',
    title: 'Noesis ↔ noema',
    short: 'Acto de conciencia y objeto tal como aparece forman una correlación.',
    points: [
      'Noesis: percibir, temer, anticipar, recordar, imaginar.',
      'Noema: aquello tal como aparece en ese acto.',
      'El análisis busca la correlación, no dos objetos independientes.',
    ],
    analysis: 'Noesis y noema permiten describir con precisión qué hace la conciencia y qué sentido adquiere su objeto dentro de esa vivencia.',
    simple: 'Noesis es el acto; noema es aquello tal como aparece en ese acto.',
    projection: 'Fenomenológicamente no analizamos sólo el objeto: analizamos la correlación entre acto y sentido.',
  },
  {
    id: 'm6',
    chapter: 'metodo',
    title: 'Horizontes de experiencia',
    short: 'Cuerpo, espacio, tiempo y mundo participan en el sentido.',
    points: [
      'El cuerpo puede tensarse, paralizarse o prepararse.',
      'Un espacio físicamente igual puede dejar de sentirse seguro.',
      'El futuro puede hacerse presente mediante anticipación.',
      'La experiencia siempre ocurre dentro de un mundo de relaciones y significados.',
    ],
    analysis: 'La experiencia no se reduce a una frase mental. Está encarnada, situada espacialmente, temporalmente orientada e inserta en un mundo.',
    simple: 'Una experiencia cambia cómo se vive el cuerpo, el espacio, el tiempo y el mundo.',
    projection: 'El sentido de una vivencia se distribuye entre cuerpo, espacio, tiempo y mundo.',
  },
  {
    id: 'm7',
    chapter: 'metodo',
    title: 'Variación eidética',
    short: 'Cambiar imaginariamente rasgos para buscar qué parece estructural.',
    points: [
      'Se modifica un rasgo del caso y se pregunta si la experiencia sigue siendo la misma.',
      'Permite distinguir lo accidental de candidatos invariantes.',
      'No autoriza a proclamar una esencia universal sin justificación.',
    ],
    analysis: 'La variación eidética funciona como un experimento conceptual: ayuda a probar qué elementos pueden cambiar y cuáles parecen necesarios para que la experiencia conserve su identidad.',
    simple: 'Cambiamos mentalmente el caso para ver qué puede variar y qué parece indispensable.',
    projection: 'La variación eidética prueba la estructura de la experiencia mediante cambios imaginarios.',
  },
  {
    id: 'm8',
    chapter: 'metodo',
    title: 'Rigor y límite hermenéutico',
    short: 'Descripción disciplinada, reflexividad y reconocimiento de los límites.',
    points: [
      'El testimonio no es acceso infalible a una mente privada.',
      'El investigador distingue descripción, interpretación e inferencia.',
      'La comprensión siempre ocurre desde un horizonte histórico y lingüístico.',
      'El resultado debe presentarse como estructura argumentada y revisable.',
    ],
    analysis: 'El rigor fenomenológico no consiste en fingir neutralidad absoluta, sino en hacer visible el procedimiento, controlar las inferencias y reconocer que toda comprensión es situada.',
    simple: 'Subjetivo no significa arbitrario: hay método, contraste y límites.',
    projection: 'El rigor está en mostrar cómo interpretamos y hasta dónde podemos sostener lo que concluimos.',
  },

  {
    id: 'c1',
    chapter: 'caso',
    title: '1 · Delimitar el caso',
    short: 'Miedo ante una amenaza recibida por celular.',
    points: [
      'Situación: una persona recibe un mensaje que interpreta como amenazante.',
      'No hay agresor físicamente presente.',
      'Pregunta: ¿cómo se vive esa amenaza y cómo reorganiza la experiencia?',
    ],
    analysis: 'El caso se delimita lo suficiente para investigar una experiencia concreta. No estudia “el celular” ni “el miedo” en abstracto, sino una forma específica de amenaza vivida.',
    simple: 'Elegimos una experiencia precisa, no un tema gigantesco.',
    projection: 'Nuestro caso será el miedo ante una amenaza digital sin presencia física del agresor.',
  },
  {
    id: 'c2',
    chapter: 'caso',
    title: '2 · Obtener una descripción',
    short: 'Entrevistar para reconstruir una escena, no para obtener etiquetas.',
    points: [
      'Pregunta inicial: “Cuénteme una situación concreta”.',
      'Después: ¿qué apareció primero?, ¿qué cambió en su cuerpo?, ¿cómo sintió el espacio y el tiempo?',
      'Se evita inducir respuestas como “¿eso le produjo ansiedad?”.',
    ],
    analysis: 'La entrevista fenomenológica busca una descripción densa de la experiencia. El investigador vuelve a escenas, acciones, percepciones y sentidos antes de imponer categorías explicativas.',
    simple: 'Pedimos que describa lo que pasó y cómo lo vivió.',
    projection: 'La entrevista no pide diagnósticos: pide una escena concreta y su modo de vivirse.',
  },
  {
    id: 'c3',
    chapter: 'caso',
    title: '3 · Analizar la experiencia',
    short: 'Epojé + noesis/noema + cuerpo + espacio + tiempo.',
    points: [
      'Relato: “Vi el mensaje y sentí que podía pasarme algo aunque estaba solo en mi cuarto”.',
      'Noesis: temer, anticipar, vigilar.',
      'Noema: el mensaje como amenaza y el agresor como presencia posible.',
      'Horizontes: cuerpo tenso, cuarto vulnerable, futuro ocupado por la posibilidad de daño.',
    ],
    analysis: 'Aquí el método se vuelve visible. La escena deja de ser una anécdota y se descompone en actos, sentidos y horizontes de experiencia.',
    simple: 'Tomamos una frase cotidiana y mostramos su estructura fenomenológica.',
    projection: 'Ahora aplicamos el método: acto, objeto tal como aparece y transformación del mundo vivido.',
  },
  {
    id: 'c4',
    chapter: 'caso',
    title: '4 · Variar y sintetizar',
    short: 'Probar invariantes y formular una estructura provisional.',
    points: [
      'Variación A: retirar la presencia física del agresor.',
      'Variación B: alejar la amenaza en el tiempo.',
      'Variación C: imaginar que ningún daño es posible.',
      'Síntesis: presencia posible del daño + vulnerabilidad + anticipación reorganizan el mundo vivido.',
    ],
    analysis: 'El resultado no es una ley causal ni una esencia definitiva. Es una estructura provisional que organiza lo encontrado y puede ser discutida, contrastada o reformulada.',
    simple: 'Después de probar cambios, proponemos qué parece sostener esa experiencia.',
    projection: 'La aplicación termina con una estructura provisional, no con una verdad universal.',
  },
]

const relationPairs = [
  ['m1', 'm2', 'delimita'],
  ['m2', 'm3', 'abre'],
  ['m3', 'm4', 'orienta'],
  ['m4', 'm5', 'permite'],
  ['m5', 'm6', 'se despliega en'],
  ['m6', 'm7', 'prepara'],
  ['m7', 'm8', 'exige rigor'],
  ['m8', 'c1', 'se aplica a'],
  ['c1', 'c2', 'recoge'],
  ['c2', 'c3', 'analiza'],
  ['c3', 'c4', 'sintetiza'],
]

const quizzes = [
  { chapter: 'metodo', node: 'm1', question: '¿Qué investiga principalmente la fenomenología en esta exposición?', options: ['Frecuencias estadísticas', 'La experiencia tal como es vivida y aparece con sentido', 'Sólo conductas observables'], correct: 1, explanation: 'La fenomenología centra la investigación en el modo de darse y el sentido de la experiencia.' },
  { chapter: 'metodo', node: 'm4', question: '¿Qué hace la epojé?', options: ['Niega el mundo', 'Suspende provisionalmente explicaciones y juicios previos', 'Elimina toda interpretación'], correct: 1, explanation: 'La epojé modifica la actitud del investigador para describir antes de explicar.' },
  { chapter: 'metodo', node: 'm5', question: '¿Qué relación existe entre noesis y noema?', options: ['Son polos correlativos de una experiencia', 'Son dos objetos físicos', 'No tienen relación'], correct: 0, explanation: 'La noesis es el acto; el noema es aquello tal como aparece en ese acto.' },
  { chapter: 'metodo', node: 'm7', question: '¿Para qué sirve la variación eidética?', options: ['Para calcular porcentajes', 'Para probar qué rasgos pueden variar y cuáles parecen estructurales', 'Para diagnosticar clínicamente'], correct: 1, explanation: 'La variación eidética modifica imaginariamente el caso para explorar candidatos invariantes.' },
  { chapter: 'caso', node: 'c2', question: '¿Qué busca primero una entrevista fenomenológica?', options: ['Una escena descrita con detalle', 'Una etiqueta diagnóstica', 'Una explicación causal completa'], correct: 0, explanation: 'La prioridad es reconstruir cómo se vivió una situación concreta.' },
  { chapter: 'caso', node: 'c4', question: '¿Qué tipo de resultado produce aquí el análisis?', options: ['Una ley universal', 'Una estructura provisional de la experiencia', 'Una correlación estadística'], correct: 1, explanation: 'El resultado se formula como estructura argumentada y revisable.' },
]

const palette = SYSTEM_2D_THEME.nodeTopics
const colors = {
  metodo: palette.violet,
  caso: palette.moss,
}
const nodeTypes = { study: StudyNode }

function StudyNode({ data, selected }) {
  return (
    <div
      className={'m19-node phen2d-node' + (selected ? ' selected' : '') + (data.guided ? ' guided' : '')}
      style={{ '--m19-node-accent': colors[data.chapter] }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="m19-node-top"><span>{data.number}</span><span>{data.chapter.toUpperCase()}</span></div>
      <strong>{data.title}</strong>
      <p>{data.short}</p>
      <span className="m19-node-foot">ABRIR FOLIO <b>↗</b></span>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

function Workspace() {
  const [chapterId, setChapterId] = useState('metodo')
  const [selectedId, setSelectedId] = useState('m1')
  const [mode, setMode] = useState('folio')
  const [step, setStep] = useState(0)
  const [qIndex, setQIndex] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [projection, setProjection] = useState(false)
  const flowRef = useRef(null)

  const chapter = chapters.find(item => item.id === chapterId)
  const visible = useMemo(
    () => chapterId === 'todo' ? entries : entries.filter(entry => entry.chapter === chapterId),
    [chapterId]
  )
  const relevantQuizzes = useMemo(
    () => quizzes.filter(q => chapterId === 'todo' || q.chapter === chapterId),
    [chapterId]
  )
  const selected = visible.find(item => item.id === selectedId) || visible[0]
  const selectedIndex = visible.findIndex(item => item.id === selected.id)
  const question = relevantQuizzes[qIndex] || relevantQuizzes[0]
  const columns = chapterId === 'todo' ? 3 : 2
  const xGap = chapterId === 'todo' ? 540 : 570
  const yGap = chapterId === 'todo' ? 330 : 350

  const focusNode = (id) => {
    const i = visible.findIndex(item => item.id === id)
    if (i < 0 || !flowRef.current) return
    const x = (i % columns) * xGap + 185
    const y = Math.floor(i / columns) * yGap + 96
    flowRef.current.setCenter(x, y, { zoom: projection ? 1.02 : .86, duration: 280 })
  }

  const switchChapter = (id) => {
    setChapterId(id)
    const next = id === 'todo' ? entries[0] : entries.find(item => item.chapter === id)
    setSelectedId(next.id)
    setStep(0)
    setMode('folio')
    setQIndex(0)
    setAnswer(null)
  }

  const guideStep = (n) => {
    const next = Math.max(0, Math.min(visible.length - 1, n))
    setStep(next)
    setSelectedId(visible[next].id)
    setMode('guia')
    focusNode(visible[next].id)
  }

  const selectNode = (id) => {
    setSelectedId(id)
    if (mode === 'guia') setStep(visible.findIndex(item => item.id === id))
    focusNode(id)
  }

  const chooseQuestion = (n) => {
    setQIndex(Math.max(0, Math.min(relevantQuizzes.length - 1, n)))
    setAnswer(null)
  }

  const startProjection = () => {
    setChapterId('todo')
    setSelectedId(entries[0].id)
    setStep(0)
    setMode('guia')
    setProjection(true)
    setExpanded(true)
  }

  const exitProjection = () => {
    setProjection(false)
    setExpanded(false)
    setMode('folio')
  }

  const { nodes, edges } = useMemo(() => {
    const ids = new Set(visible.map(e => e.id))
    const nodes = visible.map((entry, i) => ({
      id: entry.id,
      type: 'study',
      selected: entry.id === selectedId,
      position: { x: (i % columns) * xGap, y: Math.floor(i / columns) * yGap },
      style: { width: 370, height: 184 },
      data: {
        ...entry,
        number: String(entries.findIndex(item => item.id === entry.id) + 1).padStart(2, '0'),
        guided: mode === 'guia' && visible[step]?.id === entry.id,
      },
    }))

    const edges = relationPairs
      .filter(([from, to]) => ids.has(from) && ids.has(to))
      .map(([source, target, label]) => ({
        id: 'rel-' + source + '-' + target,
        source,
        target,
        label,
        type: 'smoothstep',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: resolveSystem2DEdgeColor({ touchesSelected: source === selectedId || target === selectedId }),
        },
        style: {
          stroke: resolveSystem2DEdgeColor({
            touchesSelected: source === selectedId || target === selectedId,
            guidedActive: mode === 'guia' && visible[step]?.id === target,
          }),
          strokeWidth: 2,
        },
        labelStyle: { fontSize: 11, fill: SYSTEM_2D_THEME.ink },
        labelBgStyle: { fill: SYSTEM_2D_THEME.background.paper },
        labelBgPadding: [8, 5],
        labelBgBorderRadius: 4,
      }))

    return { nodes, edges }
  }, [visible, selectedId, mode, step, columns, xGap, yGap])

  return (
    <section
      id="sistema-fenomenologia"
      className={'m19-system m21-system phen2d-system ph2d-shell' + (expanded ? ' expanded' : '') + (projection ? ' projection' : '')}
      aria-label="Sistema 2D de fenomenología como método"
    >
      <div className="m19-workspace-head phen2d-head">
        <div>
          <span className="m19-kicker">SISTEMA 2D · EXPOSICIÓN</span>
          <h2>Fenomenología: método y aplicación.</h2>
          <p>Primero se explica el método. Después se ejecuta sobre un caso concreto. Nada más.</p>
        </div>
        <div className="phen2d-head-actions">
          {!projection && <button type="button" className="phen2d-project" onClick={startProjection}>Proyectar exposición ▶</button>}
          <button type="button" onClick={() => projection ? exitProjection() : setExpanded(!expanded)}>
            {projection ? 'Salir de proyección ×' : expanded ? 'Cerrar pantalla completa ×' : 'Ampliar sistema ⤢'}
          </button>
        </div>
      </div>

      {!projection && (
        <>
          <div className="m19-chapters" role="group" aria-label="Partes de la exposición">
            {[...chapters, { id: 'todo', number: 'Σ', title: 'Recorrido completo' }].map(item => (
              <button type="button" key={item.id} className={item.id === chapterId ? 'active' : ''} onClick={() => switchChapter(item.id)}>
                <span>{item.number}</span>{item.title}
              </button>
            ))}
          </div>
          <div className="m19-journey">
            <p><b>PUNTO DE PARTIDA</b>{chapter?.before || 'Primero explicamos el método y luego lo aplicamos.'}</p>
            <p><b>PREGUNTA</b>{chapter?.question || '¿Cómo pasa la fenomenología de concepto a investigación?'}</p>
            <p><b>RESULTADO</b>{chapter?.after || 'Una estructura provisional de la experiencia.'}</p>
          </div>
        </>
      )}

      <div className="m19-tools phen2d-tools">
        {!projection && <button type="button" className={mode === 'guia' ? 'active' : ''} onClick={() => guideStep(0)}>Iniciar guía</button>}
        {!projection && <button type="button" className={mode === 'estudio' ? 'active' : ''} onClick={() => { setMode('estudio'); setAnswer(null); setQIndex(0); setSelectedId(relevantQuizzes[0]?.node || visible[0].id) }}>Modo estudio</button>}
        {!projection && <button type="button" className={mode === 'folio' ? 'active' : ''} onClick={() => setMode('folio')}>Folio</button>}
        <span>{visible.length} nodos · {edges.length} relaciones</span>
      </div>

      {mode === 'guia' && (
        <div className="m19-lesson phen2d-lesson" aria-live="polite">
          <span className="m19-kicker">{projection ? 'MODO PROYECCIÓN' : 'GUÍA'} · PASO {step + 1} / {visible.length}</span>
          <h3>{visible[step].title}</h3>
          {projection && <p className="phen2d-projection-line">{visible[step].projection}</p>}
          <p>{visible[step].analysis}</p>
          <div className="m19-step-buttons">
            <button type="button" disabled={step === 0} onClick={() => guideStep(step - 1)}>← Anterior</button>
            {!projection && <button type="button" onClick={() => setMode('folio')}>Consultar folio</button>}
            <button type="button" disabled={step === visible.length - 1} onClick={() => guideStep(step + 1)}>Siguiente →</button>
          </div>
        </div>
      )}

      {mode === 'estudio' && question && (
        <div className="m19-lesson" aria-live="polite">
          <span className="m19-kicker">DEFENSA ORAL · {qIndex + 1} / {relevantQuizzes.length}</span>
          <h3>{question.question}</h3>
          <div className="m19-options">
            {question.options.map((option, i) => (
              <button
                type="button"
                key={option}
                aria-pressed={answer === i}
                className={answer === i ? 'chosen' : ''}
                onClick={() => { setAnswer(i); setSelectedId(question.node); focusNode(question.node) }}
              >
                {option}
              </button>
            ))}
          </div>
          {answer !== null && <p className="m19-feedback"><b>{answer === question.correct ? 'Correcto.' : 'Revise el razonamiento.'}</b> {question.explanation}</p>}
          <div className="m19-step-buttons">
            <button type="button" disabled={qIndex === 0} onClick={() => chooseQuestion(qIndex - 1)}>← Anterior</button>
            <button type="button" onClick={() => { selectNode(question.node); setMode('folio') }}>Consultar folio</button>
            <button type="button" disabled={qIndex === relevantQuizzes.length - 1} onClick={() => chooseQuestion(qIndex + 1)}>Siguiente →</button>
          </div>
        </div>
      )}

      <div className="m19-workspace phen2d-workspace">
        <div className="m19-canvas phen2d-canvas" aria-label="Mapa bidimensional del método fenomenológico">
          <ReactFlow
            key={chapterId + (projection ? '-projection' : '')}
            onInit={instance => { flowRef.current = instance }}
            fitView
            fitViewOptions={{ padding: chapterId === 'todo' ? .15 : .22, maxZoom: projection ? .82 : .95 }}
            minZoom={.25}
            maxZoom={1.5}
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            nodesDraggable={false}
            nodesConnectable={false}
            onNodeClick={(_, node) => selectNode(node.id)}
            onPaneClick={() => setSelectedId(null)}
            proOptions={{ hideAttribution: true }}
          >
            <Background gap={22} size={1} color="#cbbfae" />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>

        <aside className="m19-inspector phen2d-inspector" aria-live="polite">
          <div className="m19-inspector-head">
            <span>FOLIO {String(entries.findIndex(item => item.id === selected.id) + 1).padStart(2, '0')} / {entries.length}</span>
            <span>{selected.chapter === 'metodo' ? 'MÉTODO' : 'APLICACIÓN'}</span>
          </div>
          <h3>{selected.title}</h3>
          <h4>Idea central</h4>
          <ul>{selected.points.map((point, i) => <li key={i}>{point}</li>)}</ul>
          <h4>Qué significa metodológicamente</h4>
          <p>{selected.analysis}</p>
          <div className="m21-plain"><h4>En palabras simples:</h4><p>{selected.simple}</p></div>
          <div className="phen2d-say"><h4>Para exponer:</h4><p>{selected.projection}</p></div>
          <div className="m19-inspector-nav">
            <button type="button" disabled={selectedIndex <= 0} onClick={() => selectNode(visible[selectedIndex - 1].id)}>← Previa</button>
            <button type="button" disabled={selectedIndex >= visible.length - 1} onClick={() => selectNode(visible[selectedIndex + 1].id)}>Siguiente →</button>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default function MethodsPhenomenologySystem2D() {
  return (
    <main className="m19-page m21-page phen2d-page">
      <nav className="m19-nav">
        <Link to="/estudio/fenomenologia-metodo">← Fenomenología</Link>
        <Link to="/">Φ · PHILOSOPHIA</Link>
        <span>FI104 · EXPOSICIÓN 2D</span>
      </nav>

      <header className="phen2d-hero">
        <p className="m19-kicker">MÉTODO FENOMENOLÓGICO · INVESTIGACIÓN FILOSÓFICA</p>
        <h1>Comprender la experiencia.<br /><em>Después, demostrarlo.</em></h1>
        <p>Una exposición en dos movimientos: primero explicar cómo funciona la fenomenología como método; después aplicar ese método a una experiencia concreta.</p>
        <div className="phen2d-hero-route" aria-label="Recorrido de la exposición">
          <span>EXPERIENCIA</span><b>→</b><span>INTENCIONALIDAD</span><b>→</b><span>EPOJÉ</span><b>→</b><span>ANÁLISIS</span><b>→</b><span>VARIACIÓN</span><b>→</b><span>ESTRUCTURA</span>
        </div>
      </header>

      <section className="phen2d-thesis">
        <span className="m19-kicker">TESIS</span>
        <h2>La fenomenología es un método para describir y analizar <em>cómo una experiencia aparece y adquiere sentido</em>, hasta formular una estructura argumentada de esa vivencia.</h2>
        <p>La segunda mitad de la exposición demostrará este procedimiento con un caso de miedo ante una amenaza digital.</p>
      </section>

      <ReactFlowProvider><Workspace /></ReactFlowProvider>

      <section className="phen2d-defense">
        <span className="m19-kicker">PREGUNTAS DE DEFENSA</span>
        <h2>Lo que debe quedar filosóficamente claro.</h2>
        <ol>
          <li>¿Qué diferencia a la fenomenología de una medición cuantitativa?</li>
          <li>¿Qué significa que la conciencia sea intencional?</li>
          <li>¿Qué suspende la epojé y qué no suspende?</li>
          <li>¿Cómo se relacionan noesis y noema?</li>
          <li>¿Qué papel cumplen cuerpo, espacio y tiempo?</li>
          <li>¿Cómo funciona la variación eidética?</li>
          <li>¿Qué hace rigurosa una interpretación fenomenológica?</li>
          <li>¿Por qué el resultado es una estructura provisional y no una ley causal?</li>
        </ol>
      </section>

      <section className="m19-outro phen2d-outro">
        <span className="m19-kicker">CIERRE</span>
        <h2>Del “me pasó” a una estructura filosóficamente inteligible.</h2>
        <p>La fuerza del método está en volver explícito cómo pasamos de una vivencia concreta a una descripción rigurosa de su sentido, sin reducirla a un número ni convertirla en una verdad universal.</p>
        <Link to="/estudio/fenomenologia-metodo">← Volver a la página de estudio</Link>
      </section>

      <footer className="m19-footer">
        <span>PHILOSOPHIA · MÉTODOS DE INVESTIGACIÓN</span>
        <span>12 nodos · 2 movimientos · método + aplicación</span>
        <span className="m19-footer-mark" aria-hidden="true">Φ</span>
      </footer>
    </main>
  )
}
