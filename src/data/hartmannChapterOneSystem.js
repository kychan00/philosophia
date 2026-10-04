import { hartmannChapterExposition, hartmannChapterMicroNodes } from './hartmannChapterOneExpanded'

export const hartmannChapterRoutes = [
  { id: 'all', label: 'Todo el capítulo' },
  { id: 'reinhold', label: 'Reinhold' },
  { id: 'schulze', label: 'Schulze' },
  { id: 'maimon', label: 'Maimon' },
  { id: 'beck', label: 'Beck' },
  { id: 'jacobi', label: 'Jacobi' },
  { id: 'bardili', label: 'Bardili' },
  { id: 'thing', label: 'Cosa en sí' },
  { id: 'foundation', label: 'Fundamento' },
  { id: 'realism', label: 'Idealismo / realismo' },
  { id: 'logic', label: 'Lógica / ontología' },
]

export const hartmannChapterSource = {
  author: 'Nicolai Hartmann',
  title: 'La filosofía del idealismo alemán · Tomo I',
  chapter: 'Capítulo I · Kantianos y antikantianos',
  printedPages: '19–65',
  pdfPages: '9–32',
  boundary: 'Reconstrucción limitada al capítulo I registrado en el dossier de Ontología II.',
}

const schemas = {
  H01: {
    layout: 'constellation',
    canvas: { width: 720, height: 420 },
    ariaLabel: 'Reinhold distingue sujeto, representación y objeto dentro del hecho de conciencia.',
    nodes: [
      { id: 's', label: 'sujeto', shape: 'pill', position: { x: .18, y: .55 } },
      { id: 'r', label: 'representación', shape: 'circle', position: { x: .5, y: .36 }, emphasis: true, tone: 'accent' },
      { id: 'o', label: 'objeto', shape: 'pill', position: { x: .82, y: .55 } },
    ],
    edges: [
      { from: 'r', to: 's', label: 'se distingue de', arrow: 'double', routing: 'curved', relationKind: 'reciprocal' },
      { from: 'r', to: 'o', label: 'se distingue de', arrow: 'double', routing: 'curved', relationKind: 'reciprocal' },
    ],
  },
  H02: {
    layout: 'flow',
    ariaLabel: 'La materia dada conduce a la afección y a la cosa en sí.',
    nodes: [
      { id: 'm', label: 'materia dada', shape: 'roundedRect' },
      { id: 'a', label: 'afección', shape: 'diamond', emphasis: true, tone: 'accent' },
      { id: 'c', label: 'cosa en sí', caption: 'existente · incognoscible', shape: 'circle', tone: 'accent' },
    ],
    edges: [
      { from: 'm', to: 'a', label: 'supone', relationKind: 'derives' },
      { from: 'a', to: 'c', label: 'remite a', relationKind: 'derives' },
    ],
  },
  H04: {
    layout: 'hierarchy',
    rootId: 'thing',
    ariaLabel: 'Schulze formula la aporía causal de la cosa en sí.',
    nodes: [
      { id: 'thing', label: 'cosa en sí', role: 'root', shape: 'circle', emphasis: true, tone: 'accent' },
      { id: 'cause', label: 'causa la afección', shape: 'diamond' },
      { id: 'unknown', label: 'es incognoscible', shape: 'diamond' },
      { id: 'know', label: 'sabemos que causa', shape: 'pill' },
      { id: 'cannot', label: 'no podemos afirmar causalidad', shape: 'pill' },
    ],
    edges: [
      { from: 'thing', to: 'cause', label: 'si afirmamos que', routing: 'orthogonal', relationKind: 'derives' },
      { from: 'thing', to: 'unknown', label: 'si mantenemos que', routing: 'orthogonal', relationKind: 'derives' },
      { from: 'cause', to: 'know', label: 'entonces', relationKind: 'derives' },
      { from: 'unknown', to: 'cannot', label: 'entonces', relationKind: 'derives' },
    ],
  },
  H05: {
    layout: 'flow',
    ariaLabel: 'Maimon transforma la cosa en sí en concepto límite de una serie de conocimiento.',
    nodes: [
      { id: 'thing', label: 'cosa en sí', shape: 'circle', tone: 'accent' },
      { id: 'limit', label: 'concepto límite', shape: 'diamond', emphasis: true, tone: 'accent' },
      { id: 'series', label: 'serie de aproximación', shape: 'hexagon' },
      { id: 'perfect', label: 'conocimiento perfecto', shape: 'pill' },
    ],
    edges: [
      { from: 'thing', to: 'limit', label: 'se reinterpreta como', relationKind: 'derives' },
      { from: 'limit', to: 'series', label: 'ordena', relationKind: 'derives' },
      { from: 'series', to: 'perfect', label: 'tiende hacia', relationKind: 'derives' },
    ],
  },
  H08: {
    layout: 'flow',
    ariaLabel: 'Beck elimina la cosa en sí exterior y hace del representar original el principio productor del objeto.',
    nodes: [
      { id: 'thing', label: 'cosa en sí exterior', shape: 'roundedRect' },
      { id: 'remove', label: 'eliminación', shape: 'diamond', emphasis: true, tone: 'accent' },
      { id: 'original', label: 'representar original', shape: 'hexagon', tone: 'accent' },
      { id: 'object', label: 'objeto', shape: 'pill' },
    ],
    edges: [
      { from: 'thing', to: 'remove', label: 'es descartada', line: 'dashed', relationKind: 'secondary' },
      { from: 'remove', to: 'original', label: 'abre paso a', relationKind: 'derives' },
      { from: 'original', to: 'object', label: 'produce', relationKind: 'constitutes' },
    ],
  },
  H09: {
    layout: 'hierarchy',
    rootId: 'd',
    ariaLabel: 'Jacobi formula un dilema entre idealismo consecuente y mantenimiento de la cosa en sí.',
    nodes: [
      { id: 'd', label: 'dilema jacobiano', role: 'root', shape: 'hexagon', emphasis: true, tone: 'accent' },
      { id: 'i', label: 'idealismo consecuente', shape: 'diamond' },
      { id: 'c', label: 'mantener cosa en sí', shape: 'diamond' },
      { id: 'n', label: 'riesgo de nihilismo', shape: 'pill', tone: 'accent' },
      { id: 'x', label: 'contradicción crítica', shape: 'pill', tone: 'accent' },
    ],
    edges: [
      { from: 'd', to: 'i', label: 'primera vía', routing: 'orthogonal', relationKind: 'derives' },
      { from: 'd', to: 'c', label: 'segunda vía', routing: 'orthogonal', relationKind: 'derives' },
      { from: 'i', to: 'n', label: 'conduce a', relationKind: 'derives' },
      { from: 'c', to: 'x', label: 'conduce a', relationKind: 'derives' },
    ],
  },
  H11: {
    layout: 'flow',
    ariaLabel: 'Bardili parte del pensar en cuanto pensar y le atribuye validez ontológica.',
    nodes: [
      { id: 'p', label: 'pensar en cuanto pensar', shape: 'circle', emphasis: true, tone: 'accent' },
      { id: 't', label: 'validez transubjetiva', shape: 'diamond' },
      { id: 'l', label: 'lógica ontológica', shape: 'hexagon', tone: 'accent' },
      { id: 's', label: 'estructura del ser', shape: 'pill' },
    ],
    edges: [
      { from: 'p', to: 't', label: 'no se reduce al individuo', relationKind: 'derives' },
      { from: 't', to: 'l', label: 'fundamenta', relationKind: 'derives' },
      { from: 'l', to: 's', label: 'vale como', relationKind: 'constitutes' },
    ],
  },
  H12: {
    layout: 'flow',
    minHeight: 430,
    ariaLabel: 'El capítulo pasa de Reinhold a Schulze, Maimon, Beck, Jacobi y Bardili, preparando el umbral hacia Fichte.',
    nodes: [
      { id: 'r', label: 'Reinhold', caption: 'principio', shape: 'roundedRect' },
      { id: 's', label: 'Schulze', caption: 'crisis', shape: 'roundedRect' },
      { id: 'm', label: 'Maimon', caption: 'límite', shape: 'roundedRect' },
      { id: 'b', label: 'Beck', caption: 'producción', shape: 'roundedRect' },
      { id: 'j', label: 'Jacobi', caption: 'reacción', shape: 'roundedRect' },
      { id: 'ba', label: 'Bardili', caption: 'lógica', shape: 'roundedRect' },
      { id: 'f', label: 'umbral a Fichte', shape: 'pill', emphasis: true, tone: 'accent' },
    ],
    edges: [
      { from: 'r', to: 's', label: 'provoca crítica', relationKind: 'derives' },
      { from: 's', to: 'm', label: 'obliga a reformular', relationKind: 'derives' },
      { from: 'm', to: 'b', label: 'radicaliza', relationKind: 'derives' },
      { from: 'b', to: 'j', label: 'provoca reacción', relationKind: 'derives' },
      { from: 'j', to: 'ba', label: 'abre otra vía', relationKind: 'derives' },
      { from: 'ba', to: 'f', label: 'deja preparado', relationKind: 'derives' },
    ],
  },
}

function makeNode(id, x, y, data) {
  return {
    id,
    type: data.critical ? 'core' : 'text',
    position: { x, y },
    draggable: false,
    data: {
      code: id,
      diagram: [],
      dependsOn: [],
      branch: [],
      consequences: [],
      ...data,
      schema: schemas[id] || null,
    },
  }
}

const hartmannMacroNodes = [
  makeNode('H01', 0, 0, {
    phase: 'Reinhold', title: 'Tesis de la conciencia', page: '22–23',
    branch: ['reinhold', 'foundation'],
    excerpt: 'La representación se distingue del sujeto y del objeto y se refiere a ambos.',
    explanation: 'Reinhold intenta convertir la Crítica en sistema desde un principio unitario: el hecho de conciencia.',
    question: '¿Puede esta estructura funcionar como principio primero?',
    consequences: ['Abre la deducción de la representación.', 'Hace central la relación sujeto–objeto.'],
    diagram: ['sujeto', '↔ representación ↔', 'objeto'],
  }),
  makeNode('H02', 0, 340, {
    phase: 'Reinhold', title: 'Forma, materia y cosa en sí', page: '23–30',
    branch: ['reinhold', 'thing', 'realism'], critical: true,
    excerpt: 'La forma expresa espontaneidad; la materia aparece como dada y remite a afección y cosa en sí.',
    explanation: 'La cosa en sí queda como fundamento material de la representación, aunque su forma propia permanezca incognoscible.',
    question: '¿Puede algo incognoscible explicar una afección?',
    consequences: ['Instala el problema causal.', 'Prepara la crítica de Schulze.'],
    dependsOn: ['H01'], diagram: ['materia', '→ afección →', 'cosa en sí'],
  }),
  makeNode('H03', 420, 40, {
    phase: 'Schulze', title: 'Del pensar al ser', page: '31–33',
    branch: ['schulze', 'foundation'], critical: true,
    excerpt: 'La necesidad de pensar algo no demuestra una necesidad correspondiente en el ser.',
    explanation: 'Schulze cuestiona el paso de condiciones del pensamiento a entidades o causas reales.',
    question: '¿Cuándo una condición del pensar autoriza una afirmación ontológica?',
    consequences: ['Debilita la fundamentación reinholdiana.', 'Conduce a la aporía causal.'],
    dependsOn: ['H02'], diagram: ['pensar', '≠', 'ser'],
  }),
  makeNode('H04', 420, 390, {
    phase: 'Schulze', title: 'Aporía de la causalidad', page: '33–35',
    branch: ['schulze', 'thing', 'foundation', 'realism'], critical: true,
    excerpt: 'Si la cosa en sí causa, sabemos algo de ella; si es incognoscible, no podemos afirmar legítimamente esa causalidad.',
    explanation: 'La categoría de causalidad parece aplicarse fuera del campo de experiencia que la Crítica delimita.',
    question: '¿Cómo sostener afección e incognoscibilidad al mismo tiempo?',
    consequences: ['Obliga a reformular la cosa en sí.', 'Empuja la discusión hacia Maimon y Beck.'],
    dependsOn: ['H03'], diagram: ['cosa en sí', '→ causa ?', 'afección'],
  }),
  makeNode('H05', 840, 0, {
    phase: 'Maimon', title: 'Cosa en sí como límite', page: '37–39',
    branch: ['maimon', 'thing', 'realism'], critical: true,
    excerpt: 'La cosa en sí deja de ser causa positiva y funciona como concepto límite de una aproximación.',
    explanation: 'Maimon acepta la fuerza de la crítica causal y desplaza el problema hacia una serie del conocimiento.',
    question: '¿Qué queda de la cosa en sí cuando ya no causa?',
    consequences: ['Desactiva la causa externa.', 'Prepara una teoría de grados de conciencia.'],
    dependsOn: ['H04'], diagram: ['cosa en sí', '→ límite →', 'serie'],
  }),
  makeNode('H06', 840, 340, {
    phase: 'Maimon', title: 'Dato, conciencia y determinabilidad', page: '38–43',
    branch: ['maimon', 'foundation', 'logic'],
    excerpt: 'Lo dado expresa conciencia imperfecta; el pensar real articula determinable y determinación.',
    explanation: 'La receptividad se reconduce hacia una actividad cuya génesis no se vuelve totalmente consciente.',
    question: '¿Puede la actividad del pensar explicar aquello que aparece como recibido?',
    consequences: ['Reabsorbe forma y materia en el sujeto.', 'Fortalece el apriorismo racional.'],
    dependsOn: ['H05'], diagram: ['determinable', '+ determinación', '→ pensar'],
  }),
  makeNode('H07', 1260, 40, {
    phase: 'Beck', title: 'El único punto de vista', page: '43–45',
    branch: ['beck', 'foundation', 'thing'],
    excerpt: 'La cosa en sí exterior se trata como concesión al pensamiento ingenuo, no como fundamento sistemático.',
    explanation: 'Beck busca mantener el carácter trascendental de la Crítica eliminando el realismo dogmático.',
    question: '¿Qué sucede si se elimina la cosa en sí del sistema?',
    consequences: ['Prepara el representar original.', 'Radicaliza la espontaneidad.'],
    dependsOn: ['H06'],
  }),
  makeNode('H08', 1260, 390, {
    phase: 'Beck', title: 'Representar original', page: '45–47',
    branch: ['beck', 'thing', 'foundation', 'realism'], critical: true,
    excerpt: 'El objeto surge desde una actividad originaria de representar, no desde una afección exterior.',
    explanation: 'Hartmann vincula esta actividad con la unidad sintética de la apercepción y con la producción trascendental del objeto.',
    question: '¿Puede producirse el objeto sin perder su realidad empírica?',
    consequences: ['Lleva el idealismo trascendental a una forma estricta.', 'Provoca la reacción de Jacobi.'],
    dependsOn: ['H07'], diagram: ['representar original', '→ produce →', 'objeto'],
  }),
  makeNode('H09', 1680, 40, {
    phase: 'Jacobi', title: 'Dilema del idealismo', page: '47–51',
    branch: ['jacobi', 'thing', 'realism'], critical: true,
    excerpt: 'Idealismo consecuente sin cosa en sí o cosa en sí que contradice los límites de la Crítica.',
    explanation: 'Jacobi prefiere abandonar la vía idealista antes que sacrificar la certeza de una realidad independiente.',
    question: '¿Hay una salida entre nihilismo y contradicción crítica?',
    consequences: ['Conduce al realismo inmediato.', 'Prepara la función de la fe.'],
    dependsOn: ['H08'], diagram: ['idealismo', '↙ dilema ↘', 'cosa en sí'],
  }),
  makeNode('H10', 1680, 390, {
    phase: 'Jacobi', title: 'Fe y percepción inmediata', page: '51–54',
    branch: ['jacobi', 'realism'],
    excerpt: 'La realidad se da con certeza inmediata; la fe no es conclusión discursiva sino acceso previo a la prueba.',
    explanation: 'La representación no agota lo real. Jacobi extiende la certeza inmediata desde la percepción hacia el suprasensible.',
    question: '¿Puede una certeza inmediata fundar realidad sin demostración?',
    consequences: ['Rehabilita un realismo no deductivo.', 'Abre una dimensión religiosa del problema.'],
    dependsOn: ['H09'], diagram: ['percepción', '→ certeza →', 'realidad'],
  }),
  makeNode('H11', 2100, 60, {
    phase: 'Bardili', title: 'Pensar en cuanto pensar', page: '54–61',
    branch: ['bardili', 'logic', 'foundation', 'realism'], critical: true,
    excerpt: 'Bardili busca objetividad desde un pensar transubjetivo cuya estructura pretende valer también para el ser.',
    explanation: 'El puro realismo o realismo racional no parte de la percepción, sino de una lógica con alcance ontológico.',
    question: '¿Puede la ley del pensar ser también ley del ser?',
    consequences: ['Introduce una lógica ontológica.', 'Prepara antitipia e identidad de leyes.'],
    dependsOn: ['H10'], diagram: ['pensar', '→ lógica →', 'ser'],
  }),
  makeNode('H12', 2100, 410, {
    phase: 'Bardili', title: 'Antitipia, materia y límite', page: '58–65',
    branch: ['bardili', 'thing', 'logic', 'realism'], critical: true,
    excerpt: 'Objeto y representación comparten estructura, pero la materia conserva diferencia e impenetrabilidad frente a la identidad lógica.',
    explanation: 'La ontología lógica no absorbe por completo materia, multiplicidad e individuación. El capítulo cierra con ese residuo problemático.',
    question: '¿Cómo explicar individuación si todo se reduce a identidad formal?',
    consequences: ['Expone el límite del racionalismo bardiliano.', 'Deja preparado el umbral hacia Fichte.'],
    dependsOn: ['H11'], diagram: ['identidad lógica', '≠ absorbe', 'materia'],
  }),
]

const phaseLaneX = {
  Reinhold: 0,
  Schulze: 900,
  Maimon: 1800,
  Beck: 2700,
  Jacobi: 3600,
  Bardili: 4500,
}

const phaseMacroIndex = new Map()

const positionedMacroNodes = hartmannMacroNodes.map((node) => {
  const phase = node.data.phase
  const index = phaseMacroIndex.get(phase) || 0
  phaseMacroIndex.set(phase, index + 1)

  return {
    ...node,
    position: {
      x: phaseLaneX[phase] ?? node.position.x,
      y: index * 340,
    },
    data: {
      ...node.data,
      explicitNotes: [
        node.data.excerpt,
        ...(node.data.consequences || []),
      ],
      textExplanation: node.data.explanation,
      sourceRef: 'Hartmann · cap. I · pp. ' + node.data.page,
    },
  }
})

export const hartmannChapterNodes = [
  ...positionedMacroNodes,
  ...hartmannChapterMicroNodes,
]

export { hartmannChapterExposition }

const hartmannMacroEdges = [
  ['E01','H01','H02','despliega'],
  ['E02','H02','H03','provoca crítica'],
  ['E03','H03','H04','culmina en'],
  ['E04','H04','H05','obliga a reformular'],
  ['E05','H05','H06','reconduce hacia'],
  ['E06','H06','H07','deja abierto'],
  ['E07','H07','H08','radicaliza en'],
  ['E08','H08','H09','provoca reacción'],
  ['E09','H09','H10','responde mediante'],
  ['E10','H10','H11','contrasta con'],
  ['E11','H11','H12','encuentra su límite en'],
].map(([id,source,target,label]) => ({ id, source, target, label }))

const hartmannMicroEdges = hartmannChapterMicroNodes
  .filter((node) => node.data.dependsOn?.length)
  .map((node) => ({
    id: 'ME-' + node.id,
    source: node.data.dependsOn[0],
    target: node.id,
    label: 'explicita',
    relation: 'secondary',
  }))

export const hartmannChapterEdges = [
  ...hartmannMacroEdges,
  ...hartmannMicroEdges,
]

export const hartmannChapterCrossRelations = [
  { source: 'H02', target: 'H04', label: 'la afección se vuelve aporía' },
  { source: 'H04', target: 'H08', label: 'la crítica impulsa la eliminación de la cosa en sí' },
  { source: 'H06', target: 'H11', label: 'la búsqueda de necesidad reaparece como lógica ontológica' },
  { source: 'H02', target: 'H12', label: 'la materia reaparece como residuo' },
]

export const hartmannChapterGuidedRoute = [
  { id: 'H01', phase: 'I · Reinhold', focus: 'Principio unitario', prompt: 'Distinga sujeto, representación y objeto.' },
  { id: 'H02', phase: 'I · Reinhold', focus: 'Afección', prompt: 'Pregunte de dónde viene la materia de la representación.' },
  { id: 'H04', phase: 'II · Schulze', focus: 'Aporía', prompt: 'Compare causalidad e incognoscibilidad.' },
  { id: 'H05', phase: 'III · Maimon', focus: 'Concepto límite', prompt: 'La cosa en sí deja de ser causa.' },
  { id: 'H06', phase: 'III · Maimon', focus: 'Conciencia imperfecta', prompt: 'Observe cómo lo dado se desplaza al interior de la actividad.' },
  { id: 'H08', phase: 'IV · Beck', focus: 'Representar original', prompt: 'El objeto aparece como producto trascendental.' },
  { id: 'H09', phase: 'V · Jacobi', focus: 'Dilema', prompt: 'Idealismo o cosa en sí: identifique el costo de cada vía.' },
  { id: 'H10', phase: 'V · Jacobi', focus: 'Fe', prompt: 'Distinga certeza inmediata de demostración.' },
  { id: 'H11', phase: 'VI · Bardili', focus: 'Realismo lógico', prompt: 'La lógica pretende valer como estructura del ser.' },
  { id: 'H12', phase: 'VI · Bardili', focus: 'Límite material', prompt: 'Localice el residuo que la identidad lógica no absorbe.' },
]

export function hartmannChapterNodeById(id) {
  return hartmannChapterNodes.find((item) => item.id === id) || null
}
