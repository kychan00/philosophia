import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { Background, Controls, Handle, MarkerType, MiniMap, Position, ReactFlow, ReactFlowProvider } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import '../components/philosophy/system2d/System2DTheme.css'
import { SYSTEM_2D_THEME, resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme'
import './MethodsClass19Oct.css'
import './MethodsClass21Oct.css'

const chapters = [
  { id: 'preparacion', number: 'I', title: 'El relato de la vivencia', question: '¿Cómo escuchar la experiencia sin reemplazarla por categorías técnicas?', before: '19 de octubre: ejemplo del miedo escolar y diseño fenomenológico.', after: 'La narración permite estudiar el acto y el objeto de la experiencia.', hue: 'blue' },
  { id: 'intencion', number: 'II', title: 'Noesis y noema', question: '¿Qué diferencia hay entre temer y lo temido tal como aparece?', before: 'Se identifica una experiencia concreta en pantalla.', after: 'Se suspenden interpretaciones para examinar la correlación intencional.', hue: 'moss' },
  { id: 'analisis', number: 'III', title: 'Epojé y variación', question: '¿Qué cambia al imaginar otras condiciones del miedo digital?', before: 'El relato permite distinguir actos y objetos intencionales.', after: 'La síntesis eidética queda como hipótesis de estudio, no como resultado validado.', hue: 'ochre' },
]

const entries = [
  {
    id: 'p1', chapter: 'preparacion', title: 'Qué quiere investigar el método', short: 'La vivencia del miedo, no una escala de frecuencia ni un diagnóstico.',
    source: 'Exposición del profesor · propósito del ejercicio',
    points: ['El ejemplo se enfoca en el miedo vivido mediante pantallas, llamadas y mensajes.', 'Se pregunta cómo se da el fenómeno a la conciencia de una persona situada.', 'El docente contrapone describir la vivencia con medir frecuencias o adjudicar de inmediato causas.', 'No se presentan participantes reales ni resultados de un estudio ya ejecutado.'],
    analysis: 'El objeto de estudio se convierte en una experiencia situada y no en una definición abstracta de miedo. El contraste entre métodos es pedagógico, no una negación de la utilidad de la psicología.',
    simple: 'No vamos a preguntar cuántas veces tuvo miedo ni a diagnosticarlo. Primero queremos saber cómo se sintió ese miedo desde dentro.'
  },
  {
    id: 'p2', chapter: 'preparacion', title: 'Lo que dice el pizarrón', short: 'Descripción natural; el punto 2 está vacío; noesis, noema y análisis.',
    source: 'Pizarrón · inscripción entregada de la clase',
    points: ['1. Descripción natural: evitar que la investigación contamine las respuestas; pedir vivencias propias en lugar de esquemas conceptuales.', '2. Sin contenido escrito en el pizarrón. No se completa su título.', '3. Indagación noética: acto de sentir y vivir.', '4. Indagación noemática: el fenómeno como objeto tal como se presenta.', '5. Análisis noético-noemático: quitar la actitud natural; a) depuración mediante epojé.'],
    analysis: 'La guía de entrevista se desarrolla en la explicación del profesor, pero no aparece escrita como contenido del número 2. Ocultar hipótesis concretas nunca exime de consentimiento informado y protección ética.',
    simple: 'El pizarrón marca qué hacer: escuchar, ver cómo sentimos, ver qué sentimos y revisar nuestros prejuicios. La casilla 2 quedó sin escribir.'
  },
  {
    id: 'p3', chapter: 'preparacion', title: 'Descripción natural y precauciones', short: 'Experiencia espontánea, evitando imponer un lenguaje técnico.',
    source: 'Pizarrón 1a–b y aclaración docente',
    points: ['No se adelanta a la persona una interpretación que pueda orientar artificialmente la respuesta.', 'Se solicita describir cómo vivió la situación antes de explicar causas.', 'No se sustituye el relato por etiquetas como fobia o ansiedad cuando éstas funcionan como diagnósticos.', 'En una aplicación real debe mantenerse el consentimiento informado y la información que exija el marco ético.'],
    analysis: 'La descripción natural es el punto de partida, no la meta. Las afirmaciones técnicas espontáneas se pueden conservar como datos y distinguir del núcleo descriptivo al analizar.',
    simple: 'En lugar de contestar «tengo ansiedad social», cuente qué pasó: dónde estaba, qué vio y qué sintió.'
  },
  {
    id: 'p4', chapter: 'preparacion', title: 'Guía de entrevista', short: 'Volver a una escena reciente frente a la pantalla y narrarla paso a paso.',
    source: 'Pregunta inicial propuesta por el profesor · paráfrasis',
    points: ['Solicitar recordar un episodio reciente e intenso de miedo al interactuar con una pantalla.', 'Reconstruir en orden qué apareció, qué hizo la persona y qué experimentó.', 'Preguntar por el cuerpo, el espacio y el paso del tiempo.', 'El docente ejemplifica con llamadas o mensajes amenazantes dirigidos a una persona o a su familia.', 'Se necesitan preguntas de seguimiento; no consta aquí un instrumento definitivo ni entrevistas verificadas.'],
    analysis: 'El guion es un instrumento didáctico para propiciar descripción rica. No debe presentarse como aplicación de campo ya concluida ni como escala psicométrica.',
    simple: '«Piense en aquella llamada o mensaje que le asustó. ¿Qué vio primero? ¿Qué pasó con su cuerpo? ¿Cómo sintió la habitación y el tiempo?»'
  },
  {
    id: 'i1', chapter: 'intencion', title: 'Intencionalidad', short: 'Toda conciencia es conciencia de algo.',
    source: 'Explicación docente · terminología fenomenológica',
    points: ['La intencionalidad se presenta como dirección de la conciencia hacia algo.', 'Noesis y noema son dos polos correlativos de una misma experiencia.', 'El método pregunta tanto por el acto de temer como por lo temido tal como se manifiesta.', 'No se presupone sin examen el sentido objetivo de la amenaza.'],
    analysis: 'Noesis no equivale a simple proceso neuronal ni noema a una cosa material aislada. La correlación organiza la descripción filosófica.',
    simple: 'No sentimos miedo «en el vacío»: siempre tememos algo, incluso cuando todavía no sabemos explicarlo bien.'
  },
  {
    id: 'i2', chapter: 'intencion', title: 'Noesis · acto de temer', short: 'Sentir, recordar, imaginar, anticipar, fijar la atención.',
    source: 'Pizarrón 3 · indagación noética',
    points: ['Noesis: acto intencional con el que la conciencia se dirige a algo.', 'En el miedo: mirar, anticipar, paralizarse, imaginar lo que ocurrirá, buscar protección.', 'La clase propone reconocer acciones y expresiones de la conciencia en el relato.', 'No se confunde el acto con una etiqueta clínica.'],
    analysis: 'Los verbos del testimonio sirven como pistas de indagación, pero requieren interpretarse en el contexto de la experiencia y no como conteo automático.',
    simple: 'La noesis es lo que hace su conciencia cuando usted tiene miedo: imagina, se preocupa, se queda quieto o busca ayuda.'
  },
  {
    id: 'i3', chapter: 'intencion', title: 'Cuerpo, espacio y tiempo', short: 'Tres dimensiones del acto vivido.',
    source: 'Desarrollo del profesor · matriz de indagación noética',
    points: ['Corporalidad: tensión, postura, presión, respiración e impulso de moverse o quedarse inmóvil.', 'Espacialidad: cómo aparece la habitación, la distancia y el entorno cuando se siente la amenaza.', 'Temporalidad: si el instante se acelera, se prolonga o la amenaza se vive como inmediata.', 'Son ejes de preguntas, no síntomas universales demostrados.'],
    analysis: 'La clasificación permite recuperar la forma concreta del episodio. Cada dimensión debe apoyarse en frases efectivas del relato si se realiza investigación.',
    simple: 'El miedo se nota en el cuerpo, cambia cómo sentimos el lugar y hasta puede hacer que los segundos parezcan eternos.'
  },
  {
    id: 'i4', chapter: 'intencion', title: 'Noema · amenaza que aparece', short: 'Mensaje, perfil o llamada tal como adquiere un sentido temible.',
    source: 'Pizarrón 4 · indagación noemática',
    points: ['Noema: el objeto tal como se presenta a la conciencia, con su sentido en esa experiencia.', 'En el ejemplo digital puede aparecer como mensaje, llamada, notificación, imagen o perfil.', 'Se pregunta qué caracteres hacen que la amenaza se sienta hostil, poderosa o inevitable.', 'No se determina de antemano si la amenaza es verdadera, falsa o jurídicamente realizable.'],
    analysis: 'Una pantalla, por sí sola, no define el noema. Interesa la pantalla o el mensaje en tanto objeto temido y vivido de determinada manera.',
    simple: 'El noema es «eso que da miedo» tal como se le aparece: un mensaje que usted vive como peligroso, aunque venga de lejos.'
  },
  {
    id: 'i5', chapter: 'intencion', title: 'Distancia física, cercanía vivida', short: 'Una amenaza digital puede sentirse encima del sujeto.',
    source: 'Ejemplo docente · amenazas por teléfono',
    points: ['Un agresor puede no estar en la habitación, pero sentirse muy próximo mediante una llamada.', 'El relato permite averiguar cómo se vive esa proximidad o invasión del entorno.', 'El objeto intencionado y el cuerpo del sujeto se describen correlativamente.', 'La intensidad atribuida a la amenaza debe proceder de cada escena estudiada.'],
    analysis: 'La cercanía fenomenológica no es idéntica a la distancia física; tampoco prueba que exista efectivamente un agresor cercano.',
    simple: 'Alguien puede estar al otro lado de la ciudad y, por un mensaje, hacerle sentir como si lo tuviera encima.'
  },
  {
    id: 'r1', chapter: 'analisis', title: 'Actitud natural y académica', short: 'Dos fuentes de presuposiciones que deben distinguirse.',
    source: 'Explicación del profesor · actitudes ante el fenómeno',
    points: ['La actitud natural toma espontáneamente el mundo objetivo como dado.', 'La actitud académico-conceptual explica mediante categorías aprendidas: psicológicas, técnicas o teóricas.', 'Ambas pueden adelantarse a lo que muestra una experiencia concreta.', 'La actitud fenomenológica cambia el foco hacia el aparecer del fenómeno.'],
    analysis: 'Suspender una categoría para describir no significa prohibir el conocimiento académico para siempre ni negar la realidad.',
    simple: 'De momento dejamos de lado «eso es una fobia porque lo dice tal teoría» y vemos cómo le pasó a esa persona.'
  },
  {
    id: 'r2', chapter: 'analisis', title: 'Epojé · poner entre paréntesis', short: 'Depurar la explicación sin borrar el testimonio.',
    source: 'Pizarrón 5a · depuración de la actitud natural',
    points: ['La epojé suspende juicios sobre causas, doctrinas y realidad presupuesta para examinar la aparición de la vivencia.', 'Se señalan aparte pasajes que justifican el temor en vez de describirlo.', 'Se conserva la descripción directa de cuerpo, espacio y tiempo.', 'El archivo original de la investigación debe conservarse, sin mutilar ni falsear los datos.'],
    analysis: 'El docente habla de limpiar el material para el análisis; editorialmente se distingue codificación analítica de eliminación física del relato, que sería una mala práctica.',
    simple: 'No borramos lo que dijo nadie: apartamos por un momento las explicaciones para fijarnos en lo que realmente describió que sintió.'
  },
  {
    id: 'r3', chapter: 'analisis', title: 'Codificar las noesis', short: 'Reconocer verbos y expresiones del acto vivido.',
    source: 'Explicación docente · fase de análisis B',
    points: ['Buscar verbos o expresiones de atención, imaginación, parálisis, anticipación y protección.', 'Relacionarlos con la vivencia corporal, temporal y espacial.', 'Señalar fragmentos concretos que den testimonio del acto intencional.', 'No concluir de una palabra aislada cuál es la esencia del miedo.'],
    analysis: 'Este paso traduce el eje noético a una pauta de lectura documental. Su aplicación efectiva requeriría textos de entrevistas no aportados aquí.',
    simple: 'Buscamos frases como «miré el teléfono», «imaginé que vendrían» o «no me pude mover», porque dicen qué estaba haciendo la conciencia.'
  },
  {
    id: 'r4', chapter: 'analisis', title: 'Cualificar los noemas', short: 'Reconocer cómo se manifiesta y qué sentido tiene la amenaza.',
    source: 'Explicación docente · fase de análisis C',
    points: ['Marcar calificativos que caracterizan el objeto intencionado: cercano, hostil, inevitable o amenazante.', 'Reconocer si lo temido afecta al sujeto, a su familia o a la seguridad de su entorno.', 'No confundir la descripción de cómo aparece el objeto con su comprobación externa.', 'Los calificativos aquí enumerados son ejemplos, no resultados de entrevistas.'],
    analysis: 'La correlación con las noesis explica cómo un mismo mensaje podría vivirse de distintas maneras según la experiencia.',
    simple: 'Ahora vemos cómo se le presentó el mensaje: ¿parecía serio, cercano, imposible de evitar, dirigido a su familia?'
  },
  {
    id: 'r5', chapter: 'analisis', title: 'Variación I · presencia física', short: '¿Permanece el miedo cuando no hay atacante en la habitación?',
    source: 'Ejercicio docente · variación imaginativa',
    points: ['Se imagina una amenaza digital sin presencia corporal del agresor.', 'Se pregunta si el miedo se mantiene cuando sólo llega por mensaje o llamada.', 'Si persiste en esa variación, la copresencia física no sería indispensable para ese ejemplo.', 'No se generaliza automáticamente a toda experiencia de miedo.'],
    analysis: 'Es una prueba conceptual imaginaria, no una constatación empírica ni una ley psicológica.',
    simple: 'Aunque nadie esté frente a usted, un mensaje puede seguir dándole miedo. Entonces, estar cara a cara no parece requisito en ese caso.'
  },
  {
    id: 'r6', chapter: 'analisis', title: 'Variación II · inminencia', short: 'Cambiar el «cuándo» transforma el peso de lo temido.',
    source: 'Ejercicio docente · amenaza aplazada y examen',
    points: ['Se traslada imaginariamente la amenaza a un futuro distante.', 'El profesor compara esta alteración con un examen inmediato que se aplaza.', 'El miedo podría disminuir, cambiar de cualidad o no desaparecer: depende del caso considerado.', 'La temporalidad aparece como posible dimensión relevante de la estructura vivida.'],
    analysis: 'Que la intensidad disminuya no basta, por sí solo, para demostrar que la inminencia sea necesaria en cualquier tipo de miedo.',
    simple: 'No se siente igual un peligro que puede pasar mañana que uno que, supuestamente, pasará dentro de cincuenta años.'
  },
  {
    id: 'r7', chapter: 'analisis', title: 'Variación III · vulnerabilidad', short: '¿Qué cambia si el sujeto y sus seres queridos no pueden sufrir daño?',
    source: 'Ejercicio docente · invulnerabilidad imaginaria',
    points: ['Se imagina que cuerpo, identidad o familia no pueden ser dañados.', 'Se pregunta si el miedo persiste, se transforma en curiosidad o desaparece.', 'La vulnerabilidad se propone como candidato a rasgo fundamental de la vivencia.', 'La clase no establece una demostración universal de esa conclusión.'],
    analysis: 'Hay que distinguir una posibilidad eidética sugerida de una tesis necesaria ya fundamentada; la imaginación filosófica exige argumentación posterior.',
    simple: 'Si usted supiera con absoluta certeza que nada malo puede pasarle a nadie, ¿seguiría sintiendo el mismo miedo?'
  },
  {
    id: 'r8', chapter: 'analisis', title: 'Síntesis y límites del ejercicio', short: 'Separar lo accidental de lo posiblemente esencial sin inventar hallazgos.',
    source: 'Cierre del profesor · continuidad del protocolo',
    points: ['La variación sirve para explorar qué rasgos pueden retirarse sin deshacer la experiencia investigada.', 'Se ensayan presencia física, cercanía temporal y vulnerabilidad.', 'La síntesis queda provisional: no hay relatos procesados ni investigación concluida.', 'El docente anunció que continuaría con el procedimiento; el carácter exacto del examen no quedó establecido.'],
    analysis: 'Reconstrucción editorial: el resultado legítimo de esta clase es un esquema de trabajo y preguntas, no una descripción definitiva de la esencia del miedo.',
    simple: 'Probamos mentalmente qué se puede cambiar. Lo que parezca indispensable es una pista para investigar mejor, no una conclusión final.'
  },
]

const relationPairs = [
  ['p1', 'p3', 'enfoca la vivencia'], ['p2', 'p4', 'orienta el instrumento'],
  ['i1', 'i3', 'sitúa la experiencia'], ['i2', 'i4', 'se correlaciona'], ['i3', 'i5', 'expresa proximidad'],
  ['r1', 'r3', 'permite distinguir actos'], ['r2', 'r4', 'permite describir sentidos'],
  ['r3', 'r5', 'abre prueba'], ['r4', 'r6', 'abre prueba'], ['r5', 'r7', 'continúa prueba'], ['r6', 'r8', 'requiere balance']
]
const quizzes = [
  { chapter: 'preparacion', node: 'p2', question: '¿Qué se escribió en el número 2 del pizarrón?', options: ['La entrevista completa', 'No aparece contenido', 'La reducción trascendental'], correct: 1, explanation: 'El apartado 2 está vacío. La guía de entrevista aparece en la explicación, no como texto del número 2.' },
  { chapter: 'preparacion', node: 'p3', question: '¿Qué hace falta incluso cuando se reservan hipótesis para evitar sugestión?', options: ['Consentimiento informado', 'Revelar los resultados inventados', 'Prohibir toda respuesta espontánea'], correct: 0, explanation: 'No inducir respuestas no elimina las obligaciones éticas de información y consentimiento.' },
  { chapter: 'intencion', node: 'i2', question: '¿Qué nombra la noesis?', options: ['El acto de conciencia', 'La cosa material independientemente de su aparecer', 'Una escala médica'], correct: 0, explanation: 'Noesis se refiere al acto de sentir, pensar, temer, recordar o imaginar.' },
  { chapter: 'intencion', node: 'i4', question: '¿Qué pregunta estudia el noema?', options: ['¿Cuántas veces llegó el mensaje?', '¿Cómo se presenta la amenaza en esa experiencia?', '¿Qué marca es el teléfono?'], correct: 1, explanation: 'El noema es el objeto en cuanto intencionado, con el sentido que adquiere en la vivencia.' },
  { chapter: 'analisis', node: 'r2', question: '¿La epojé obliga a destruir los fragmentos de explicación?', options: ['Sí, para que desaparezcan', 'No; se conservan y distinguen analíticamente', 'Sólo si hay muchas páginas'], correct: 1, explanation: 'Poner entre paréntesis no es falsificar ni eliminar el testimonio conservado.' },
  { chapter: 'analisis', node: 'r6', question: '¿Qué prueba el aplazamiento imaginario de una amenaza?', options: ['Que siempre desaparece el miedo', 'Que cambiar la inminencia permite examinar su estructura', 'Que ya se entrevistó a una muestra'], correct: 1, explanation: 'Se trata de una variación para interrogar rasgos, no de resultados empíricos.' },
  { chapter: 'analisis', node: 'r8', question: '¿Se demostró definitivamente la esencia del miedo digital?', options: ['Sí', 'No; la síntesis sigue siendo provisional', 'Sólo por usar la palabra epojé'], correct: 1, explanation: 'La clase no presenta una investigación de campo acabada ni una conclusión universal demostrada.' },
]
const palette = SYSTEM_2D_THEME.nodeTopics
const colors = { preparacion: palette.blue, intencion: palette.moss, analisis: palette.ochre }
const nodeTypes = { study: StudyNode }

function StudyNode({ data, selected }) {
  return (
    <div className={'m19-node' + (selected ? ' selected' : '') + (data.guided ? ' guided' : '')} style={{ '--m19-node-accent': colors[data.chapter] }}>
      <Handle type="target" position={Position.Top} />
      <div className="m19-node-top"><span>{data.number}</span><span>CLASE / FUENTE</span></div>
      <strong>{data.title}</strong><p>{data.short}</p>
      <span className="m19-node-foot">ABRIR FOLIO <b>↗</b></span>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

function Workspace() {
  const [chapterId, setChapterId] = useState('preparacion')
  const [selectedId, setSelectedId] = useState('p1')
  const [mode, setMode] = useState('folio')
  const [step, setStep] = useState(0)
  const [qIndex, setQIndex] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const flowRef = useRef(null)
  const chapter = chapters.find(item => item.id === chapterId)
  const visible = useMemo(() => chapterId === 'todo' ? entries : entries.filter(entry => entry.chapter === chapterId), [chapterId])
  const relevantQuizzes = useMemo(() => quizzes.filter(q => chapterId === 'todo' || q.chapter === chapterId), [chapterId])
  const selected = visible.find(item => item.id === selectedId) || visible[0]
  const selectedIndex = visible.findIndex(item => item.id === selected.id)
  const question = relevantQuizzes[qIndex] || relevantQuizzes[0]
  const focusNode = (id) => {
    const i = visible.findIndex(item => item.id === id)
    if (i < 0 || !flowRef.current) return
    flowRef.current.setCenter((i % 2) * 485 + 198, Math.floor(i / 2) * 270 + 99, { zoom: .83, duration: 280 })
  }
  const switchChapter = (id) => {
    setChapterId(id)
    const next = id === 'todo' ? entries[0] : entries.find(item => item.chapter === id)
    setSelectedId(next.id)
    setStep(0); setMode('folio'); setQIndex(0); setAnswer(null)
  }
  const guideStep = (n) => {
    const next = Math.max(0, Math.min(visible.length - 1, n))
    setStep(next); setSelectedId(visible[next].id); setMode('guia'); focusNode(visible[next].id)
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
  const { nodes, edges } = useMemo(() => {
    const ids = new Set(visible.map(e => e.id))
    const nodes = visible.map((entry, i) => ({
      id: entry.id, type: 'study', selected: entry.id === selectedId,
      position: { x: (i % 2) * 485, y: Math.floor(i / 2) * 270 },
      style: { width: 390, height: 187 },
      data: { ...entry, number: String(i + 1).padStart(2, '0'), guided: mode === 'guia' && visible[step]?.id === entry.id }
    }))
    const edges = relationPairs.filter(([from, to]) => ids.has(from) && ids.has(to)).map(([source, target, label]) => ({
      id: 'rel-' + source + '-' + target, source, target, label,
      type: 'smoothstep',
      markerEnd: { type: MarkerType.ArrowClosed, color: resolveSystem2DEdgeColor({ touchesSelected: source === selectedId || target === selectedId }) },
      style: { stroke: resolveSystem2DEdgeColor({ touchesSelected: source === selectedId || target === selectedId, guidedActive: mode === 'guia' && visible[step]?.id === target }), strokeWidth: 2 },
      labelStyle: { fontSize: 11, fill: SYSTEM_2D_THEME.ink },
      labelBgStyle: { fill: SYSTEM_2D_THEME.background.paper }
    }))
    return { nodes, edges }
  }, [visible, selectedId, mode, step])
  return (
    <section id="sistema-21" className={'m19-system m21-system ph2d-shell' + (expanded ? ' expanded' : '')} aria-label="Sistema 2D del protocolo fenomenológico">
      <div className="m19-workspace-head"><div><span className="m19-kicker">ATLAS DE LA CLASE · SISTEMA 2D</span><h2>Lo que se vive, lo que aparece.</h2><p>Todos los nodos poseen folio, procedencia, análisis y «En palabras simples». Las relaciones son conexiones de estudio trazables a la clase; no son demostraciones causales.</p></div><button type="button" onClick={() => setExpanded(!expanded)}>{expanded ? 'Cerrar pantalla completa ×' : 'Ampliar sistema ⤢'}</button></div>
      <div className="m19-chapters" role="group" aria-label="Rutas del sistema">
        {[...chapters, { id: 'todo', number: 'Σ', title: 'Atlas completo' }].map(item => <button type="button" key={item.id} className={item.id === chapterId ? 'active' : ''} onClick={() => switchChapter(item.id)}><span>{item.number}</span>{item.title}</button>)}
      </div>
      <div className="m19-journey">
        <p><b>ANTES</b>{chapter?.before || 'El recorrido parte de la descripción de la experiencia.'}</p>
        <p><b>AHORA</b>{chapter?.question || '¿Cómo se conectan las operaciones del protocolo?'}</p>
        <p><b>DESPUÉS</b>{chapter?.after || 'La investigación futura deberá justificar cualquier síntesis.'}</p>
      </div>
      <div className="m19-tools">
        <button type="button" className={mode === 'guia' ? 'active' : ''} onClick={() => guideStep(0)}>Iniciar guía de esta {chapterId === 'todo' ? 'clase' : 'sección'}</button>
        <button type="button" className={mode === 'estudio' ? 'active' : ''} onClick={() => { setMode('estudio'); setAnswer(null); setQIndex(0); setSelectedId(relevantQuizzes[0]?.node || visible[0].id) }}>Estudiar esta {chapterId === 'todo' ? 'clase' : 'sección'}</button>
        <button type="button" className={mode === 'folio' ? 'active' : ''} onClick={() => setMode('folio')}>Volver al folio</button>
        <span>{visible.length} nodos · {edges.length} relaciones</span>
      </div>
      {mode === 'guia' && <div className="m19-lesson" aria-live="polite"><span className="m19-kicker">GUÍA COMPLETA · PASO {step + 1} / {visible.length}</span><h3>{visible[step].title}</h3><p>{visible[step].analysis}</p><p><strong>Fuente:</strong> {visible[step].source}</p><div className="m19-step-buttons"><button type="button" disabled={step === 0} onClick={() => guideStep(step - 1)}>← Anterior</button><button type="button" onClick={() => setMode('folio')}>Consultar folio</button><button type="button" disabled={step === visible.length - 1} onClick={() => guideStep(step + 1)}>Siguiente →</button></div></div>}
      {mode === 'estudio' && question && <div className="m19-lesson" aria-live="polite"><span className="m19-kicker">PREGUNTA EDITORIAL · {qIndex + 1} / {relevantQuizzes.length}</span><h3>{question.question}</h3><div className="m19-options">{question.options.map((option, i) => <button type="button" key={option} aria-pressed={answer === i} className={answer === i ? 'chosen' : ''} onClick={() => { setAnswer(i); setSelectedId(question.node); focusNode(question.node) }}>{option}</button>)}</div>{answer !== null && <p className="m19-feedback"><b>{answer === question.correct ? 'Correcto.' : 'Revise el razonamiento.'}</b> {question.explanation}</p>}<div className="m19-step-buttons"><button type="button" disabled={qIndex === 0} onClick={() => chooseQuestion(qIndex - 1)}>← Anterior</button><button type="button" onClick={() => { selectNode(question.node); setMode('folio') }}>Consultar fuente</button><button type="button" disabled={qIndex === relevantQuizzes.length - 1} onClick={() => chooseQuestion(qIndex + 1)}>Siguiente →</button><button type="button" onClick={() => chooseQuestion(0)}>Reiniciar</button></div></div>}
      <div className="m19-workspace">
        <div className="m19-canvas" aria-label="Mapa bidimensional navegable sin nodos superpuestos">
          <ReactFlow key={chapterId} onInit={instance => { flowRef.current = instance }} fitView fitViewOptions={{ padding: .21, maxZoom: .9 }} minZoom={.25} maxZoom={1.4} nodes={nodes} edges={edges} nodeTypes={nodeTypes} nodesDraggable={false} nodesConnectable={false} onNodeClick={(_, node) => selectNode(node.id)} proOptions={{ hideAttribution: true }}>
            <Background gap={22} size={1} color="#cbbfae" /><MiniMap nodeColor={n => colors[n.data.chapter]} pannable zoomable /><Controls showInteractive={false} />
          </ReactFlow>
        </div>
        <aside className="m19-inspector" aria-live="polite">
          <div className="m19-inspector-head"><span>FOLIO {String(selectedIndex + 1).padStart(2, '0')} / {visible.length}</span><span>{selected.chapter.toUpperCase()}</span></div>
          <h3>{selected.title}</h3><p className="m19-source">{selected.source}</p>
          <h4>Registro de la clase</h4><ul>{selected.points.map((point, i) => <li key={i}>{point}</li>)}</ul>
          <h4>Explicación y límites · PHILOSOPHIA</h4><p>{selected.analysis}</p>
          <div className="m21-plain"><h4>En palabras simples:</h4><p>{selected.simple}</p></div>
          <div className="m19-inspector-nav"><button type="button" disabled={selectedIndex <= 0} onClick={() => selectNode(visible[selectedIndex - 1].id)}>← Previa</button><button type="button" disabled={selectedIndex >= visible.length - 1} onClick={() => selectNode(visible[selectedIndex + 1].id)}>Siguiente →</button></div>
        </aside>
      </div>
    </section>
  )
}

export default function MethodsClass21Oct() {
  return (
    <main className="m19-page m21-page">
      <nav className="m19-nav"><Link to="/semestre/5/metodos-de-investigacion">← Archivo de Métodos</Link><Link to="/">Φ · PHILOSOPHIA</Link><span>FI104 · 21.X.2026</span></nav>
      <header className="m19-hero">
        <div className="m19-hero-issue"><span>CUADERNOS DE INVESTIGACIÓN · NÚMERO XIII</span><span>21 / OCTUBRE / 2026</span></div>
        <p className="m19-kicker">ARS INQUIRENDI · MÉTODO FENOMENOLÓGICO</p>
        <h1>El miedo<br /><em>como vivencia</em><br />y como objeto<span className="m19-hero-period">.</span></h1>
        <div className="m19-hero-bottom"><p>De la experiencia espontánea a la correlación noético-noemática. Una clase para aprender a escuchar, suspender los supuestos y preguntar qué permanece al variar.</p><div><span>21 OCT 2026</span><strong>Clase XIII</strong><span>Materia · Métodos de Investigación Filosófica</span></div></div>
      </header>
      <section className="m19-lead"><p className="m19-kicker">LA PREGUNTA DE LA CLASE</p><div className="m19-lead-grid"><h2>¿Cómo describir el miedo <em>sin decidir de antemano qué es?</em></h2><div><p>El profesor continúa el ejercicio de investigación fenomenológica, ahora con una amenaza que llega mediante una llamada, un mensaje o una pantalla. La cuestión no es diagnosticar al sujeto ni dar por comprobado al agresor: es comprender cómo se constituye para alguien la experiencia del miedo.</p><p><strong>Distinción documental:</strong> el pizarrón contiene los apartados 1, 3, 4 y 5; el número 2 está vacío. La guía de entrevista es un desarrollo oral y aquí aparece como organización pedagógica, no como texto escrito en ese casillero.</p></div></div></section>
      <section className="m19-paired"><article><span>01 · CONTEXTO DE LA CLASE</span><h2>Azar, responsabilidad y mérito</h2><p>La conversación inicial pregunta qué parte de nuestros logros procede de nuestras decisiones y qué parte de las condiciones que nos rodean. Se mencionan la grandeza de ánimo aristotélica, la vanidad, la pusilanimidad y la falta de reconocimiento del trabajo socialmente necesario.</p><div className="m19-chips"><span>Aristóteles</span><span>Reconocimiento</span><span>Trabajo</span><span>Cosificación</span></div><p className="m21-note">Estas intervenciones son posiciones debatidas en el aula; no equivalen a un acuerdo ni a una lectura textual cotejada de Aristóteles.</p></article><article><span>02 · NÚCLEO METODOLÓGICO</span><h2>De una llamada al fenómeno</h2><p>En el ejemplo didáctico, una amenaza digital modifica cómo el sujeto siente su cuerpo, el espacio y el tiempo. La noesis atiende el acto de temer; el noema, la amenaza tal como es vivida. El análisis suspende explicaciones anticipadas antes de practicar variaciones eidéticas.</p><div className="m19-chips"><span>Noesis</span><span>Noema</span><span>Epojé</span><span>Variación</span></div><p className="m21-note">No se presentan resultados de entrevistas ni una esencia del miedo ya demostrada.</p></article></section>
      <section className="m19-method-strip" aria-label="Cinco apartados del pizarrón">
        <div><span>1</span><strong>Descripción natural</strong><p>Experiencia propia sin diagnósticos impuestos</p></div><b>→</b>
        <div><span>2</span><strong>Sin texto</strong><p>Espacio no completado en el pizarrón</p></div><b>→</b>
        <div><span>3</span><strong>Indagación noética</strong><p>Acto vivido y sus dimensiones</p></div><b>→</b>
        <div><span>4</span><strong>Indagación noemática</strong><p>Objeto tal como aparece</p></div><b>→</b>
        <div><span>5</span><strong>Análisis y epojé</strong><p>Depuración y variación</p></div>
      </section>
      <ReactFlowProvider><Workspace /></ReactFlowProvider>
      <section className="m19-atlas" aria-label="Esquemas de estudio">
        <div className="m19-atlas-title"><p className="m19-kicker">FOLIOS DE ESTUDIO · PROCEDENCIA DOCUMENTAL</p><h2>Esquemas y registro académico</h2><p>El sistema 2D permite recorrer las etapas. Aquí se condensan dos esquemas de síntesis; las flechas expresan sucesión didáctica o preguntas de variación, no deducciones metafísicas ni hallazgos empíricos.</p></div>
        <div className="m21-diagrams">
          <article><span>ESQUEMA I · SECUENCIA DE TRABAJO</span><ol><li>Descripción natural y guía del episodio</li><li>Acto intencional: noesis, cuerpo, espacio y tiempo</li><li>Objeto intencionado: noema, mensaje y amenaza</li><li>Epojé y lectura correlativa del relato</li><li>Variación imaginativa y síntesis tentativa</li></ol><p>La guía no completa retroactivamente el número 2 del pizarrón.</p></article>
          <article><span>ESQUEMA II · MATRIZ DE VARIACIONES</span><ol><li>Retirar la presencia física del agresor: ¿persiste el miedo?</li><li>Alejar temporalmente la amenaza: ¿se atenúa o transforma?</li><li>Imaginar invulnerabilidad: ¿se mantiene la experiencia?</li></ol><p>Son tres pruebas imaginarias propuestas durante la clase; sus respuestas no están verificadas con testimonios.</p></article>
        </div>
        <div className="m19-atlas-list">{chapters.map(chapter => <section key={chapter.id}><h3><span>{chapter.number}</span>{chapter.title}</h3>{entries.filter(e => e.chapter === chapter.id).map(e => <details key={e.id}><summary><b>{e.title}</b><span>{e.source}</span></summary><div><ul>{e.points.map((p, i) => <li key={i}>{p}</li>)}</ul><p><strong>Interpretación:</strong> {e.analysis}</p><p><strong>En palabras simples:</strong> {e.simple}</p></div></details>)}</section>)}</div>
      </section>
      <section className="m19-outro"><span className="m19-kicker">LÍMITES Y CONTINUIDAD</span><h2>Suspender un juicio no es borrar lo vivido.</h2><p>La epojé invita a poner entre paréntesis nuestras explicaciones, no a borrar testimonios ni a negar obligaciones éticas. En clase se anunció continuar el protocolo; no se confirmó una nueva entrega con fecha definida. El posible contenido de examen quedó referido de modo general, sin consigna inequívoca.</p><Link to="/semestre/5/metodos-de-investigacion/clase/19-octubre">← Revisar el antecedente del 19 de octubre</Link></section>
      <footer className="m19-footer"><span>PHILOSOPHIA · MÉTODOS DE INVESTIGACIÓN</span><span>Pizarrón, explicación docente y reconstrucción editorial diferenciados · 2026-B</span><span className="m19-footer-mark" aria-hidden="true">Φ</span></footer>
    </main>
  )
}
