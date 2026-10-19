import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { Background, Controls, Handle, MarkerType, MiniMap, Position, ReactFlow, ReactFlowProvider } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import '../components/philosophy/system2d/System2DTheme.css'
import { SYSTEM_2D_THEME, resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme'
import './MethodsClass19Oct.css'

const chapters = [
  { id: 'miedo', number: 'I', title: 'La experiencia del miedo', question: '¿Qué cambia al estudiar el miedo como vivencia y no como variable?', before: '14 de octubre: libertad vivida, epojé y reducción eidética.', after: 'La pregunta, los objetivos y el recorrido de reducción se ponen a prueba en un ejemplo de amistad.', hue: 'blue' },
  { id: 'amistad', number: 'II', title: 'La amistad adolescente', question: '¿Cómo reconstruye un estudio cualitativo los significados morales de la amistad?', before: 'El protocolo sobre el miedo distingue objeto, método y experiencia.', after: 'Contrastar el estudio de campo con las exigencias de la fenomenología.', hue: 'moss' },
  { id: 'balance', number: 'III', title: 'Leer críticamente el método', question: '¿Qué muestra un ejemplo de investigación y qué no queda demostrado?', before: 'Examen de ambos estudios y de sus fuentes explícitas.', after: 'Próxima sesión: el profesor anunció un desarrollo paso a paso del caso del miedo.', hue: 'ochre' },
]

const entries = [
  {
    id: 'm1', chapter: 'miedo', title: 'Por qué la fenomenología', short: 'Medición, causalidad y control frente a estructura de la experiencia, mundo y afectividad.',
    source: 'Diapositiva · Fundamentación metodológica',
    points: [
      'Enfoque positivista / psicológico: mide el miedo como variable; se enfoca en respuestas fisiológicas y conductas sintomáticas.',
      'Busca causas: intenta correlacionar el miedo con factores externos o con falta de autoestima.',
      'Objetivo de control: busca erradicar o corregir la conducta disfuncional del estudiante.',
      'Enfoque fenomenológico: estructura de la vivencia (Erlebnis), esto es, cómo el sujeto siente y experimenta el miedo.',
      'Modo de estar-en-el-mundo: entiende el miedo como reorganización de toda la subjetividad.',
      'Dimensiones afectadas: cuerpo, espacio, tiempo y otros.'
    ],
    analysis: 'La oposición se presentó como contraste metodológico. No equivale a negar que psicología y fenomenología puedan dialogar. La investigación se pregunta por el sentido vivido antes de decidir una estrategia para intervenir.',
  },
  {
    id: 'm2', chapter: 'miedo', title: 'El miedo modifica el mundo', short: 'Corporeidad, espacialidad, temporalidad y alteridad son dimensiones de la experiencia situada.',
    source: 'Desarrollo oral del profesor · ejemplos de aula',
    points: [
      'Corporeidad: tensión muscular, presión en el cuerpo, sudoración y alteración de la voz ante la exposición o el examen.',
      'Espacialidad: el salón, el pasillo o el pizarrón pueden adquirir un sentido amenazante.',
      'Temporalidad: el examen puede vivirse como aceleración o asfixia; una exposición puede sentirse interminable.',
      'Alteridad: compañeros que son percibidos como público y docente que aparece como figura de autoridad o de juicio.',
      'El análisis atiende cómo se vive la escena, no diagnostica clínicamente a los participantes.'
    ],
    analysis: 'Se trata de dimensiones analíticas propuestas en clase, no de hallazgos universales ya demostrados. Erlebnis se normaliza como «vivencia», y Dasein como «ser-ahí», distinguiendo el vocabulario heideggeriano de su empleo pedagógico.',
  },
  {
    id: 'm3', chapter: 'miedo', title: 'Delimitar el objeto', short: 'La estructura eidética de la vivencia del miedo en estudiantes situados dentro del dispositivo escolar.',
    source: 'Explicación del profesor · construcción del objeto',
    points: [
      'Objeto de estudio propuesto: la estructura eidética de la vivencia del miedo en la experiencia cotidiana de estudiantes dentro del dispositivo escolar.',
      'El término «dispositivo escolar» alude aquí a la institución educativa como entorno de relaciones y prácticas.',
      'Delimitaciones todavía por precisar: nivel educativo, plantel, grado, participantes y circunstancias de observación.',
      'Problema filosófico-educativo: la tensión entre aprendizaje y miedo en el aula, particularmente ante evaluación y exposición.'
    ],
    analysis: 'Una población todavía sin definir impide presentar esta formulación como protocolo ya ejecutado. El profesor la utilizó para enseñar la diferencia entre tema general, objeto y problema investigable.',
  },
  {
    id: 'm4', chapter: 'miedo', title: 'Pregunta y objetivos', short: 'Pregunta completa y distinción entre develar, describir y analizar.',
    source: 'Diapositiva · 3. Problema de investigación: pregunta y objetivos',
    points: [
      'PREGUNTA CENTRAL: ¿Cuáles son las estructuras esenciales de la vivencia del miedo y cómo esta afectividad reconfigura la experiencia de la espacialidad, la corporeidad y la alteridad en los estudiantes dentro del ámbito escolar?',
      'OBJETIVO GENERAL: Develar y describir la estructura fenomenológica de la vivencia del miedo en el ámbito escolar para comprender su impacto en la subjetividad del estudiante.',
      'OBJETIVO ESPECÍFICO 1: Describir las manifestaciones corporales y espaciales del miedo en la rutina del aula.',
      'OBJETIVO ESPECÍFICO 2: Analizar las modificaciones de la intencionalidad en la relación estudiante-docente-pares.'
    ],
    analysis: 'La clase insistió en redactar objetivos con verbos en infinitivo que comprometen operaciones distintas. «Describir» exige hacer patente el fenómeno; «analizar» descompone relaciones; «develar» indica el propósito de mostrar su estructura.',
  },
  {
    id: 'm5', chapter: 'miedo', title: 'Estado del arte con tres ejes', short: 'Fenomenología de afectos, miedo y poder, investigaciones empíricas.',
    source: 'Explicación docente · estrategia de búsqueda',
    points: [
      'Primer eje: fenomenología de los afectos y de la intencionalidad; se mencionaron Heidegger y Merleau-Ponty como referencias posibles.',
      'Segundo eje: miedo, poder y organización institucional; se mencionó Foucault.',
      'Tercer eje: estudios empíricos recientes sobre miedo escolar, evaluación y experiencias de estudiantes.',
      'La literatura se busca según un problema delimitado, no como acumulación de nombres.'
    ],
    analysis: 'Los autores son pistas bibliográficas discutidas en la sesión; aquí no se les atribuyen tesis ni citas textuales específicas de una obra sin cotejo.',
  },
  {
    id: 'm6', chapter: 'miedo', title: 'Diez pasos operativos', short: 'De la actitud y epojé a las unidades de significado, variación y síntesis.',
    source: 'Exposición docente · itinerario didáctico',
    points: [
      '1. Preparación: adoptar una actitud fenomenológica y practicar la epojé como suspensión de precomprensiones.',
      '2. Selección intencional de participantes y situaciones; entrevistas fenomenológicas en profundidad.',
      '3. Organización e inmersión en el material de las experiencias obtenidas.',
      '4. Segmentación en unidades de significado relevantes para el miedo escolar.',
      '5. Análisis de las unidades y reconocimiento de sus relaciones.',
      '6. Variación imaginativa de circunstancias para distinguir elementos contingentes.',
      '7. Evaluación eidética: interrogar qué rasgos son necesarios y cuáles accidentales.',
      '8. Matriz existencial de las dimensiones vividas (cuerpo, espacio, tiempo y otros).',
      '9. Síntesis eidética: formulación razonada de la estructura de la experiencia.',
      '10. Implicaciones pedagógicas y propuesta de transformación.'
    ],
    analysis: 'La enumeración articula lo explicado oralmente: varias etapas se mencionaron agrupadas y su detalle se reservó para la siguiente clase. No se presenta como protocolo canónico único ni como estudio de campo ya concluido.',
  },
  {
    id: 'm7', chapter: 'miedo', title: '¿Qué permanece al variar?', short: 'Retirar el examen no basta para saber dónde está el miedo: importa la estructura que permanece.',
    source: 'Ejercicio de clase · variación eidética',
    points: [
      'Caso hipotético: un estudiante teme exponer porque imagina la burla de sus compañeros.',
      'Variación: cambiar la asignatura, retirar el examen o alterar el ambiente no demuestra por sí mismo que desaparezca la experiencia de miedo.',
      'Es necesario distinguir el hecho accidental (una materia determinada) de la posible estructura vivida (exposición ante el juicio de otros).',
      'La epojé no elimina el miedo: permite suspender juicios previos para comprender cómo se manifiesta.'
    ],
    analysis: 'La invariancia propuesta es una hipótesis de ejercicio; sólo un análisis cuidadoso de testimonios y variaciones justificadas permitiría sostener una estructura eidética.',
  },
  {
    id: 'm8', chapter: 'miedo', title: 'Del comprender al transformar', short: 'La propuesta pedagógica busca condiciones de participación sin burla ni castigo del error.',
    source: 'Cierre docente · horizonte educativo',
    points: [
      'La escuela debería permitir aprender y equivocarse sin convertir el error en humillación.',
      'La tarea filosófica inicial no es simplemente suprimir síntomas: es comprender el fenómeno en su contexto relacional.',
      'La descripción fundamentaría después estrategias pedagógicas de acompañamiento, participación y trato respetuoso.',
      'Se anuncia que la siguiente sesión retomará el miedo escolar y desarrollará los pasos con mayor detalle.'
    ],
    analysis: 'Es una orientación práctica derivada de la exposición, no una intervención evaluada con datos. En la clase se aludió también al absurdo y a la angustia como condiciones humanas, sin desarrollar una exégesis sistemática.',
  },
  {
    id: 'a1', chapter: 'amistad', title: 'Amistad e identidad adolescente', short: 'Compañía y desahogo, exigencias morales, preguntas y supuesto central.',
    source: 'Diapositiva · 1. Introducción y problematización',
    points: [
      'La adolescencia es presentada como transición en la que se fraguan relaciones amistosas y se descubre la centralidad del otro.',
      'Primera dimensión de la vivencia: compañía, desahogo, complicidad, escucha y afecto sincero.',
      'Segunda dimensión: compromiso moral, tolerancia a la diferencia y lealtad.',
      'Supuesto: las y los adolescentes poseen experiencias de amistad valiosas y aprenden a valorar ese vínculo.',
      'Preguntas: ¿qué significados construyen alrededor de sus amigos?, ¿qué valor ético conceden al vínculo?, ¿qué desafíos plantea la sociedad contemporánea?'
    ],
    analysis: 'El profesor utilizó este trabajo como modelo de problematización y delimitación, no como fuente para afirmar que todo adolescente vive la amistad del mismo modo.',
  },
  {
    id: 'a2', chapter: 'amistad', title: 'La amistad en la tradición', short: 'Aristóteles, Cicerón, Montaigne, Platón, Kant y Séneca.',
    source: 'Diapositiva · 2. Marco teórico: historia del pensamiento',
    points: [
      'Aristóteles, Ética nicomáquea: la amistad como bien necesario, virtud y apertura al «otro yo». La lámina incluye la frase «Sin amigos nadie escogería vivir, aunque tuviese los demás bienes».',
      'Cicerón, De amicitia: la amistad se cultiva en el trato cotidiano; acompaña dificultades y aumenta las alegrías compartidas.',
      'Montaigne, Ensayos: contraste entre amistad perfecta, única y fin en sí misma, y amistad de ocasión o utilidad.',
      'Platón, Lisis: se menciona la complementariedad ante la carencia mutua.',
      'Kant: deberes de respeto y verdad mutua, con posibilidad de corrección fraterna.',
      'Séneca: cultivo de la sensibilidad moral.'
    ],
    analysis: 'Las formulaciones pertenecen al marco de la presentación; no se han cotejado con ediciones precisas de las obras. La calificación «virtud cardinal incanjeable» que aparece en la lámina no se adopta como clasificación técnica de Aristóteles.',
  },
  {
    id: 'a3', chapter: 'amistad', title: 'Cine, poesía y literatura', short: 'Representaciones contemporáneas y contraste con las categorías filosóficas.',
    source: 'Diapositiva · 3. Amistad en arte, literatura y cultura',
    points: [
      'Perfume de violetas (2001): vínculos adolescentes en un entorno de vulnerabilidad y violencia social.',
      'Uptown Girls (2003): apoyo mutuo ante crisis, pérdida y vínculos horizontales.',
      'Three Idiots (2009): solidaridad y resistencia ante presiones educativas e institucionales.',
      'La diapositiva menciona a García Hamilton y a Pablo Neruda en la poesía de solidaridad.',
      'Oscar Wilde, «El amigo fiel»: crítica a una amistad interesada y manipuladora.',
      'Haruki Murakami, Los años de peregrinación del chico sin color: dolor por la ruptura abrupta de un grupo de amigos.'
    ],
    analysis: 'El material artístico sirve como contexto y representación cultural; no sustituye una revisión empírica del estado del arte. Las atribuciones poéticas concretas quedan pendientes de cotejo bibliográfico.',
  },
  {
    id: 'a4', chapter: 'amistad', title: 'La deliberación como método', short: 'Enfoque exploratorio-cualitativo, grupos de discusión y condiciones éticas.',
    source: 'Diapositiva · 4. Encuadre metodológico',
    points: [
      'Diseño exploratorio-cualitativo: recuperar sentidos, significados y vivencias de participantes (McMillan & Schumacher, 2005; Yuni & Urbano, 2014, tal como cita la lámina).',
      'Deliberación inspirada en la praxis aristotélica: discutir situaciones concretas de la vida cotidiana, no cuantificarlas.',
      'Grupos de discusión (GD): construcción colectiva del discurso-texto mediante la toma de la palabra; la lámina cita a Pedraza y colaboradores (2014).',
      'Guion conversacional inspirado en Domínguez y Dávila (2008), según la presentación.',
      'Escenario: escuela preparatoria como lugar de socialización, conflictos, emociones y encuentros.',
      'Consideraciones éticas: confidencialidad, autorización institucional y consentimiento informado.'
    ],
    analysis: 'Punto crítico de la sesión: el profesor calificó este caso como cercano a la fenomenología por recuperar vivencias. Sin embargo, un grupo de discusión no demuestra por sí solo epojé, variación eidética o reducción fenomenológica. No se dispuso del instrumento completo para verificar su ejecución.',
  },
  {
    id: 'a5', chapter: 'amistad', title: 'Solidaridad cotidiana', short: 'Acompañar pérdidas y crisis; compartir recursos sin exigir retribución.',
    source: 'Diapositiva · 7. Solidaridad y responsabilidad moral (dos fotografías de la misma lámina)',
    points: [
      'La solidaridad aparece en microacciones de alto valor ético: identificar necesidades sin esperar que el amigo las formule; la presentación alude a Ortega y Gasset.',
      'Apoyo emocional inmediato ante duelo, enfermedad o ruptura: ofrecer presencia y conversación.',
      'Ayuda material: compartir alimentos, prestar el dinero del transporte u orientar en tareas escolares.',
      'Un participante de GD3 describe la compañía incondicional en problemas familiares o amorosos.',
      'Otro de GD1 habla de dar dinero a un amigo que no tiene para el camión, sin exigir devolución.'
    ],
    analysis: 'Las intervenciones están parafraseadas y anonimizadas por prudencia editorial; las fotografías de la lámina no prueban por sí solas que estos testimonios representen a toda la población.',
  },
  {
    id: 'a6', chapter: 'amistad', title: 'Aceptar no es dejar de corregir', short: '«El verdadero amigo no juzga» y la tensión con ayudar a crecer.',
    source: 'Diapositiva · 8. La máxima adolescente',
    points: [
      'Aceptación: respeto a personalidad, vestimenta y gustos, evitando juicios maliciosos.',
      'La burla, el sarcasmo y la crítica destructiva son vividos como degradación del vínculo.',
      'Una voz de GD3 pide aceptación, comprensión y ausencia de juicio condenatorio.',
      'La corrección fraterna distingue juzgar con mala intención de señalar errores con honestidad y respeto.',
      'En la lámina se relaciona al amigo como «otro yo» con Aristóteles y la corrección con «Galeno / Kant»; esta última atribución requiere verificación.'
    ],
    analysis: 'Tensión argumental: aceptar a la persona no obliga a aprobar todas sus acciones. La crítica respetuosa puede entenderse, en esta investigación, como cuidado del vínculo y ayuda al crecimiento.',
  },
  {
    id: 'a7', chapter: 'amistad', title: 'Amistad en redes sociales', short: 'Libertad para compartir a distancia frente a necesidad de convivencia y corporeidad.',
    source: 'Diapositiva · 9. Amistad en la era digital',
    points: [
      'Posición favorable: comunicación fluida, desahogo sin la reacción cara a cara y consejos a distancia; la lámina menciona a Díaz y Herrero (2021).',
      'Un participante de GD3 prefiere la comunicación virtual por poder hablar libremente sin presencia visual directa.',
      'Posición que reclama presencia física: compartir situaciones y convivir cara a cara permite otra forma de vínculo.',
      'Otras intervenciones de GD3 y GD6 sostienen que pasar el rato en redes no equivale necesariamente a amistad verdadera.'
    ],
    analysis: 'Las dos posiciones no se resuelven imponiendo una definición previa; el estudio deja visible una disputa sobre el significado y las condiciones de la amistad.',
  },
  {
    id: 'a8', chapter: 'amistad', title: 'Hallazgos y alcance', short: 'Amistad sincera, deliberación y apoyo moral; límites documentales.',
    source: 'Conclusiones expuestas y explicación docente · no consta fotografía de la lámina',
    points: [
      'La exposición sostuvo que adolescentes buscan vínculos sinceros, desinteresados y duraderos pese a cambios tecnológicos y sociales.',
      'Los grupos de discusión se presentan como espacios para ejercitar el juicio ético, expresar posiciones y revisar modelos de vida.',
      'La amistad aparece como soporte emocional que acompaña sufrimiento, identidad y solidaridad.',
      'Se aludió a siete grupos de discusión en preparatorias y a varias horas de trabajo con sus materiales, pero faltan ficha muestral e instrumentos íntegros para comprobar cifras y procedimientos.'
    ],
    analysis: 'Estas son conclusiones atribuidas a la presentación discutida, no resultados reanalizados por PHILOSOPHIA. No se conoce con certeza el título bibliográfico completo ni la autoría formal del estudio.',
  },
  {
    id: 'b1', chapter: 'balance', title: 'Los verbos comprometen el método', short: 'Develar, describir y analizar no son intercambiables.',
    source: 'Explicación docente · referencia a la taxonomía de Bloom',
    points: [
      'Los objetivos de investigación comienzan con verbos en infinitivo porque comprometen actividades observables y alcances diferentes.',
      'Describir: presentar con precisión manifestaciones, situaciones y cualidades del fenómeno.',
      'Analizar: diferenciar, distinguir y descomponer relaciones —por ejemplo, entre estudiante, docente y pares—.',
      'El profesor remitió a la taxonomía de Bloom como recurso pedagógico para valorar el alcance de estos verbos.'
    ],
    analysis: 'Precisión editorial: en la taxonomía revisada de Anderson y Krathwohl, «analizar» no constituye el nivel máximo; «evaluar» y «crear» ocupan niveles posteriores. Las listas de verbos dependen de la versión utilizada.',
  },
  {
    id: 'b2', chapter: 'balance', title: 'Qué puede afirmarse', short: 'Un ejemplo orienta el diseño; la fidelidad obliga a señalar lo que todavía falta comprobar.',
    source: 'Balance editorial a partir de la sesión · diferenciación de capas',
    points: [
      'El ejercicio del miedo es un protocolo ejemplificador, no una intervención ya realizada ni un conjunto de resultados.',
      'El estudio de amistad ejemplifica trabajo empírico cualitativo: grupos de discusión y significados intersubjetivos.',
      'El profesor formuló una interpretación fenomenológica del trabajo de amistad; no se exhibió evidencia suficiente para certificar reducción eidética formal.',
      'Pendientes documentales: selección de informantes, guion, matriz de unidades de significado, variaciones, informe completo y referencias exactas.',
      'Continuidad docente anunciada: completar los pasos del análisis fenomenológico del miedo escolar en la sesión siguiente.'
    ],
    analysis: 'Reconstrucción editorial: la comparación busca conservar el carácter didáctico de la clase sin presentar como demostrados datos que no están disponibles.',
  },
]

const relations = [
  ['m1','m2','reorienta la mirada'],['m1','m3','justifica el método'],['m2','m3','concreta dimensiones'],['m3','m4','delimita la pregunta'],
  ['m4','m5','orienta la búsqueda'],['m4','m6','define operaciones'],['m5','m7','aporta antecedentes'],['m6','m7','habilita la variación'],['m7','m8','abre la aplicación'],
  ['a1','a2','requiere marco ético'],['a1','a3','dialoga con representaciones'],['a2','a4','orienta el enfoque'],['a3','a4','enriquece contexto'],
  ['a4','a5','ordena los testimonios'],['a5','a6','explicita criterios morales'],['a6','a7','problematiza el vínculo'],['a7','a8','se integra al balance'],
  ['b1','b2','delimita el alcance'],['m6','b1','precisa objetivos'],['a4','b2','plantea el límite']
]

const quizzes = [
  { chapter:'miedo', question:'¿Qué se busca al variar exámenes, asignaturas y condiciones del aula?', options:['Demostrar que el miedo siempre desaparece','Indagar lo que permanece en la estructura de la experiencia','Medir sólo la frecuencia cardíaca'], correct:1, explanation:'La variación eidética pregunta por el núcleo necesario, sin dar por supuesto de antemano que lo encontró.', node:'m7' },
  { chapter:'miedo', question:'¿Cuál es el alcance del verbo «analizar» en el objetivo específico?', options:['Descomponer relaciones entre estudiante, docente y pares','Eliminar la ansiedad con una terapia','Renunciar al estado del arte'], correct:0, explanation:'Analizar compromete una operación distinta de describir; no convierte la investigación en intervención clínica.', node:'m4' },
  { chapter:'amistad', question:'¿Qué técnica figura expresamente en las láminas de la investigación sobre amistad?', options:['Experimento aleatorizado','Grupos de discusión','Electroencefalografía'], correct:1, explanation:'La presentación identifica los grupos de discusión como dispositivo de deliberación y construcción de discurso-texto.', node:'a4' },
  { chapter:'amistad', question:'¿Qué tensión revela la máxima «el verdadero amigo no juzga»?', options:['Que aceptar equivale a callar siempre','Que la burla es necesaria','Que el respeto puede coexistir con la corrección fraterna'], correct:2, explanation:'Aceptar a una persona y señalar con respeto un error son operaciones distintas.', node:'a6' },
  { chapter:'balance', question:'¿Bastan los grupos de discusión para demostrar reducción eidética?', options:['Sí, necesariamente','No; hace falta documentar la reducción y las variaciones','Sólo si hay redes sociales'], correct:1, explanation:'Una técnica cualitativa es compatible con múltiples enfoques; el procedimiento de reducción no se deduce de su uso.', node:'b2' },
]

const byId = Object.fromEntries(entries.map((entry) => [entry.id, entry]))
const palette = SYSTEM_2D_THEME.nodeTopics
const familyColors = { miedo: palette.blue, amistad: palette.moss, balance: palette.ochre }

function StudyNode({ data, selected }) {
  return (
    <div className={'m19-node' + (selected ? ' selected' : '') + (data.guided ? ' guided' : '')} style={{ '--m19-node-accent': familyColors[data.chapter] }}>
      <Handle type="target" position={Position.Top} />
      <div className="m19-node-top"><span>{data.number}</span><span>{data.sourceKind}</span></div>
      <strong>{data.title}</strong>
      <p>{data.short}</p>
      <span className="m19-node-foot">ABRIR FOLIO <b>↗</b></span>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}
const nodeTypes = { study: StudyNode }

function SystemWorkspace() {
  const [chapterId, setChapterId] = useState('miedo')
  const [selectedId, setSelectedId] = useState('m1')
  const [mode, setMode] = useState('folio')
  const [step, setStep] = useState(0)
  const [qIndex, setQIndex] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const chapter = chapters.find((item) => item.id === chapterId)
  const visible = useMemo(() => chapterId === 'todo' ? entries : entries.filter((entry) => entry.chapter === chapterId), [chapterId])
  const quizzesHere = useMemo(() => quizzes.filter((q) => chapterId === 'todo' || q.chapter === chapterId), [chapterId])
  const selected = byId[selectedId] || visible[0]
  const selectedIndex = visible.findIndex((entry) => entry.id === selected.id)
  const currentQuestion = quizzesHere[qIndex] || quizzesHere[0]
  const { nodes, edges } = useMemo(() => {
    const index = new Set(visible.map((entry) => entry.id))
    const nodes = visible.map((entry, i) => ({
      id: entry.id, type: 'study', position: { x: (i % 2) * 465, y: Math.floor(i / 2) * 265 },
      style: { width: 390, height: 187 },
      data: { ...entry, number: String(i + 1).padStart(2,'0'), sourceKind: entry.source.startsWith('Diapositiva') ? 'LÁMINA' : 'CLASE', guided: mode === 'guia' && visible[step]?.id === entry.id }
    }))
    const edges = relations.filter(([from,to]) => index.has(from) && index.has(to)).map(([source,target,label]) => ({
      id: 'r-'+source+'-'+target, source, target, label, type:'smoothstep',
      markerEnd: { type: MarkerType.ArrowClosed, color: resolveSystem2DEdgeColor({ touchesSelected: source === selectedId || target === selectedId }) },
      style: { stroke: resolveSystem2DEdgeColor({ guidedActive: mode === 'guia' && visible[step]?.id === target, touchesSelected: source === selectedId || target === selectedId }), strokeWidth: 2 },
      labelStyle: { fontSize: 11, fill: SYSTEM_2D_THEME.ink }, labelBgStyle: { fill: SYSTEM_2D_THEME.background.paper }
    }))
    return { nodes, edges }
  }, [visible, selectedId, mode, step])
  const switchChapter = (id) => {
    setChapterId(id)
    setSelectedId((id === 'todo' ? entries : entries.filter((e) => e.chapter === id))[0].id)
    setMode('folio'); setStep(0); setQIndex(0); setAnswer(null)
  }
  const guideStep = (n) => {
    const next = Math.max(0, Math.min(visible.length - 1, n))
    setStep(next); setSelectedId(visible[next].id); setMode('guia')
  }
  const chooseQuestion = (n) => { setQIndex(Math.max(0,Math.min(quizzesHere.length-1,n))); setAnswer(null) }
  return (
    <section id="sistema" className={'m19-system ph2d-shell' + (expanded ? ' expanded' : '')} aria-label="Sistema bidimensional de la clase">
      <div className="m19-workspace-head">
        <div><span className="m19-kicker">ATLAS CONCEPTUAL · SISTEMA 2D</span><h2>Del fenómeno al protocolo</h2><p>Seleccione un nodo para leer su folio íntegro. Las flechas muestran relaciones de trabajo reconstruidas a partir de la sesión, no inferencias causales.</p></div>
        <button type="button" onClick={() => setExpanded(!expanded)}>{expanded ? 'Cerrar pantalla completa ×' : 'Ampliar sistema ⤢'}</button>
      </div>
      <div className="m19-chapters" role="group" aria-label="Rutas del atlas">
        {[...chapters,{id:'todo',number:'Σ',title:'Atlas completo'}].map((item) => (
          <button key={item.id} className={chapterId === item.id ? 'active' : ''} onClick={() => switchChapter(item.id)} type="button">
            <span>{item.number}</span>{item.title}
          </button>
        ))}
      </div>
      <div className="m19-journey">
        <p><b>ANTES</b> {chapter?.before || 'Clases anteriores sobre objeto, problema y método.'}</p>
        <p><b>AHORA</b> {chapter?.question || '¿Cómo se articulan los dos ejemplos con el balance metodológico?'}</p>
        <p><b>DESPUÉS</b> {chapter?.after || 'El método vuelve al trabajo pedagógico de la investigación.'}</p>
      </div>
      <div className="m19-tools">
        <button type="button" className={mode === 'guia' ? 'active' : ''} onClick={() => guideStep(0)}>Iniciar guía de esta {chapterId === 'todo' ? 'clase' : 'sección'}</button>
        <button type="button" className={mode === 'estudio' ? 'active' : ''} onClick={() => { setMode('estudio'); setAnswer(null); setQIndex(0) }}>Estudiar esta {chapterId === 'todo' ? 'clase' : 'sección'}</button>
        <button type="button" className={mode === 'folio' ? 'active' : ''} onClick={() => setMode('folio')}>Volver al folio</button>
        <span>{visible.length} nodos · {edges.length} relaciones</span>
      </div>
      {mode === 'guia' && (
        <div className="m19-lesson" aria-live="polite">
          <span className="m19-kicker">GUÍA · PASO {step + 1} / {visible.length}</span>
          <h3>{visible[step].title}</h3><p>{visible[step].analysis}</p>
          <div className="m19-step-buttons">
            <button type="button" disabled={step === 0} onClick={() => guideStep(step - 1)}>← Anterior</button>
            <button type="button" onClick={() => setMode('folio')}>Volver a la sección</button>
            <button type="button" disabled={step === visible.length - 1} onClick={() => guideStep(step + 1)}>Siguiente →</button>
          </div>
        </div>
      )}
      {mode === 'estudio' && currentQuestion && (
        <div className="m19-lesson" aria-live="polite">
          <span className="m19-kicker">EJERCICIO EDITORIAL · PREGUNTA {qIndex + 1} / {quizzesHere.length}</span>
          <h3>{currentQuestion.question}</h3>
          <div className="m19-options">{currentQuestion.options.map((option,i) => <button type="button" key={option} className={answer === i ? 'chosen' : ''} aria-pressed={answer === i} onClick={() => { setAnswer(i); setSelectedId(currentQuestion.node) }}>{option}</button>)}</div>
          {answer !== null && <p className="m19-feedback"><b>{answer === currentQuestion.correct ? 'Correcto.' : 'Revise el razonamiento.'}</b> {currentQuestion.explanation}</p>}
          <div className="m19-step-buttons"><button type="button" disabled={qIndex === 0} onClick={() => chooseQuestion(qIndex - 1)}>← Anterior</button><button type="button" onClick={() => { setSelectedId(currentQuestion.node); setMode('folio') }}>Consultar fuente</button><button type="button" disabled={qIndex === quizzesHere.length - 1} onClick={() => chooseQuestion(qIndex + 1)}>Siguiente →</button><button type="button" onClick={() => chooseQuestion(0)}>Reiniciar</button></div>
        </div>
      )}
      <div className="m19-workspace">
        <div className="m19-canvas" aria-label="Grafo con conexiones conceptuales">
          <ReactFlow key={chapterId} fitView fitViewOptions={{ padding: .18, maxZoom: .9 }} minZoom={.25} maxZoom={1.3} nodes={nodes} edges={edges} nodeTypes={nodeTypes} nodesDraggable={false} nodesConnectable={false} onNodeClick={(_,node) => setSelectedId(node.id)} proOptions={{ hideAttribution: true }}>
            <Background gap={22} size={1} color="#cbbfae" /><MiniMap nodeColor={(n) => familyColors[n.data.chapter]} pannable zoomable /><Controls showInteractive={false}/>
          </ReactFlow>
        </div>
        <aside className="m19-inspector" aria-live="polite">
          <div className="m19-inspector-head"><span>FOLIO {String(selectedIndex + 1).padStart(2,'0')} / {visible.length}</span><span>{selected.chapter.toUpperCase()}</span></div>
          <h3>{selected.title}</h3>
          <p className="m19-source">{selected.source}</p>
          <h4>Registro de la fuente</h4>
          <ul>{selected.points.map((point,i) => <li key={i}>{point}</li>)}</ul>
          <h4>Explicación sistémica · PHILOSOPHIA</h4><p>{selected.analysis}</p>
          <div className="m19-inspector-nav"><button type="button" disabled={selectedIndex <= 0} onClick={() => setSelectedId(visible[selectedIndex - 1].id)}>← Previa</button><button type="button" disabled={selectedIndex >= visible.length - 1} onClick={() => setSelectedId(visible[selectedIndex + 1].id)}>Siguiente →</button></div>
        </aside>
      </div>
    </section>
  )
}

export default function MethodsClass19Oct() {
  return (
    <main className="m19-page">
      <nav className="m19-nav"><Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link><Link to="/">Φ · PHILOSOPHIA</Link><span>FI104 · 19.X.2026</span></nav>
      <header className="m19-hero">
        <div className="m19-hero-issue"><span>CUADERNOS DE INVESTIGACIÓN</span><span>ENTREGA 19 / 10 / 2026</span></div>
        <p className="m19-kicker">ARS INQUIRENDI · VOLUMEN V · MÉTODO FENOMENOLÓGICO</p>
        <h1>El miedo,<br/><em>la amistad</em><br/>y el mundo vivido<span className="m19-hero-period">.</span></h1>
        <div className="m19-hero-bottom"><p>Dos ejercicios de investigación para aprender a pasar del concepto a la experiencia, del problema al método y del testimonio a una interpretación responsable.</p><div><span>19 OCT 2026</span><strong>Clase XII</strong><span>Profesor: Marlon Omar Navarro Torres</span></div></div>
      </header>
      <section className="m19-lead">
        <p className="m19-kicker">TESIS DE LA SESIÓN</p>
        <div className="m19-lead-grid"><h2>No basta saber qué es el miedo. Importa <em>cómo se vive.</em></h2><div><p>El profesor recuperó el ejercicio de fenomenología del miedo escolar y lo puso en relación con una investigación cualitativa acerca de la amistad adolescente. Ambos casos permiten observar cómo se formula un objeto, se construyen preguntas y se justifican técnicas.</p><p>La clase distingue dos operaciones que no deben confundirse: <strong>comprender la experiencia</strong> y <strong>proponer una transformación educativa</strong>. La segunda exige fundamentar la primera.</p></div></div>
      </section>
      <section className="m19-paired">
        <article><span>01 · EJERCICIO DIDÁCTICO</span><h2>El miedo como vivencia escolar</h2><p>El aula deja de ser un simple escenario neutral: el cuerpo se tensa, la duración del examen se altera, el pizarrón intimida y los otros aparecen como posibles jueces.</p><div className="m19-chips"><span>Corporeidad</span><span>Espacialidad</span><span>Temporalidad</span><span>Alteridad</span></div></article>
        <article><span>02 · ESTUDIO PRESENTADO</span><h2>La amistad entre adolescentes</h2><p>La conversación sobre amistad se desplaza del ideal ético clásico a la experiencia social: ayuda cotidiana, aceptación, corrección fraterna y tensiones entre presencia física y vínculos digitales.</p><div className="m19-chips"><span>Philía</span><span>Deliberación</span><span>Responsabilidad</span><span>Redes</span></div></article>
      </section>
      <section className="m19-method-strip"><div><span>Q</span><strong>Objeto</strong><p>Qué se estudia y en quiénes</p></div><b>→</b><div><span>?</span><strong>Problema</strong><p>La tensión que se investiga</p></div><b>→</b><div><span>∑</span><strong>Estado del arte</strong><p>Quiénes lo han pensado</p></div><b>→</b><div><span>φ</span><strong>Método</strong><p>Cómo escuchar y comprender</p></div><b>→</b><div><span>Δ</span><strong>Alcance</strong><p>Qué se puede afirmar</p></div></section>
      <ReactFlowProvider><SystemWorkspace /></ReactFlowProvider>
      <section className="m19-atlas" id="laminas">
        <div className="m19-atlas-title"><p className="m19-kicker">ARCHIVO DE FUENTES · LECTURA ÍNTEGRA</p><h2>Atlas de materiales de la sesión</h2><p>Los folios recogen las proposiciones académicas de las láminas fotografiadas y los desarrollos relevantes de la explicación docente. Cada apartado diferencia procedencia y explicación editorial. Se integran nueve láminas académicas distintas; la lámina de solidaridad aparece dos veces en el material fotográfico.</p></div>
        <div className="m19-atlas-list">{chapters.map((chapter) => <section key={chapter.id}><h3><span>{chapter.number}</span> {chapter.title}</h3>{entries.filter((e) => e.chapter === chapter.id).map((entry) => <details key={entry.id}><summary><b>{entry.title}</b><span>{entry.source}</span></summary><div><ul>{entry.points.map((p,i) => <li key={i}>{p}</li>)}</ul><p><strong>Lectura editorial:</strong> {entry.analysis}</p></div></details>)}</section>)}</div>
      </section>
      <section className="m19-outro"><span className="m19-kicker">CONTINUIDAD</span><h2>Investigar es descubrir lo que aún no sabemos preguntar.</h2><p>En la próxima clase, según anunció el profesor, se retomará el caso del miedo escolar para detallar las operaciones de análisis, variación y síntesis. No se identificó una entrega nueva con fecha inequívoca durante esta sesión.</p><Link to="/semestre/5/metodos-de-investigacion">← Volver al archivo de Métodos</Link></section>
      <footer className="m19-footer"><span>PHILOSOPHIA · MÉTODOS DE INVESTIGACIÓN</span><span>Fuente docente y reconstrucción editorial diferenciadas · 2026-B</span><span className="m19-footer-mark" aria-hidden="true">Φ</span></footer>
    </main>
  )
}
