const makeSchema = (id, title, diagram, critical = false) => {
  const concepts = diagram.filter((item) => !['→', '⇢', '↔', '≠', '+'].includes(item))
  const nodes = concepts.map((label, index) => ({
    id: `${id}-schema-${index}`,
    label,
    shape: index === concepts.length - 1 ? (critical ? 'circle' : 'pill') : ['hexagon', 'roundedRect', 'diamond'][index % 3],
    emphasis: index === concepts.length - 1,
    tone: index === concepts.length - 1 ? 'accent' : undefined,
  }))

  return {
    layout: concepts.length > 4 ? 'hierarchy' : 'flow',
    direction: concepts.length > 4 ? 'vertical' : 'horizontal',
    rootId: concepts.length > 4 ? nodes[0]?.id : undefined,
    ariaLabel: `Esquema conceptual: ${title}`,
    nodes,
    edges: nodes.slice(1).map((node, index) => ({
      from: nodes[index].id,
      to: node.id,
      arrow: 'forward',
      routing: index % 2 ? 'curved' : 'straight',
      kind: index % 2 ? 'secondary' : undefined,
    })),
    animation: {
      order: nodes.map((node) => node.id),
      nodeDuration: 0.34,
      edgeDuration: 0.36,
    },
  }
}

const N = ({
  id,
  code,
  title,
  page,
  phase,
  branch,
  excerpt,
  explanation,
  role,
  question,
  dependsOn = [],
  concepts = [],
  diagram = [],
  critical = false,
  position,
}) => ({
  id,
  type: critical ? 'core' : 'text',
  position,
  data: {
    code,
    kind: critical ? 'Nodo nuclear' : 'Nodo textual',
    title,
    page,
    phase,
    branch,
    excerpt,
    explanation,
    role,
    question,
    dependsOn,
    concepts,
    diagram,
    schema: makeSchema(id, title, diagram, critical),
    critical,
    micro: false,
  },
})

export const lukacsReificationNodes = [
  N({
    id: 'L01',
    code: '§I.1',
    title: 'La mercancía como problema estructural',
    page: 'apertura',
    phase: 'Mercancía',
    branch: ['genesis', 'totality'],
    excerpt: 'El problema de la mercancía aparece como problema central, estructural, de la sociedad capitalista.',
    explanation:
      'Lukács no parte de la mercancía como asunto limitado a la economía. La eleva a principio de lectura de la sociedad capitalista entera.',
    role:
      'Fija el punto de partida: para comprender capitalismo, ideología y conciencia hay que reconstruir la estructura mercantil.',
    question:
      '¿Qué cambia cuando la mercancía deja de ser un fenómeno económico particular y se vuelve estructura social?',
    concepts: ['mercancía', 'estructura', 'sociedad capitalista'],
    diagram: ['mercancía', '→', 'estructura social', '→', 'objetividad + subjetividad'],
    position: { x: 0, y: 0 },
  }),
  N({
    id: 'L02',
    code: '§I.2',
    title: 'Una relación entre personas toma carácter de cosa',
    page: '110–111',
    phase: 'Cosificación',
    branch: ['genesis'],
    excerpt: 'Una relación entre personas toma el carácter de una cosa y de una “objetividad ilusoria”.',
    explanation:
      'La cosificación no significa simplemente que existan objetos. Significa que relaciones sociales producidas por personas aparecen con la dureza y autonomía de las cosas.',
    role:
      'Introduce el mecanismo fundamental de la cosificación y el problema de la apariencia objetiva.',
    question:
      '¿Por qué la relación social puede aparecer como una realidad independiente de quienes la producen?',
    dependsOn: ['L01'],
    concepts: ['relación social', 'cosa', 'objetividad ilusoria'],
    diagram: ['personas', '→', 'relación social', '⇢', 'cosa autónoma'],
    critical: true,
    position: { x: 390, y: -180 },
  }),
  N({
    id: 'L03',
    code: '§I.3',
    title: 'La forma mercancía se vuelve universal',
    page: '111–113',
    phase: 'Mercancía',
    branch: ['genesis', 'totality'],
    excerpt: 'La diferencia entre mercancía episódica y forma universal es cualitativa, no sólo cuantitativa.',
    explanation:
      'El capitalismo moderno transforma la forma mercancía en principio constitutivo de la vida social. Por eso cambian cualitativamente los fenómenos objetivos y subjetivos.',
    role:
      'Explica por qué la cosificación es específicamente moderna: depende de la universalización de la forma mercantil.',
    question:
      '¿Qué consecuencias tiene que la mercancía moldee el conjunto de las manifestaciones vitales?',
    dependsOn: ['L02'],
    concepts: ['forma mercancía', 'universalización', 'cambio cualitativo'],
    diagram: ['intercambio episódico', '≠', 'forma universal', '→', 'sociedad capitalista'],
    position: { x: 780, y: 40 },
  }),
  N({
    id: 'L04',
    code: '§I.4',
    title: 'Cosificación objetiva y subjetiva',
    page: '113–114',
    phase: 'Cosificación',
    branch: ['genesis', 'labor'],
    excerpt: 'La propia actividad y el propio trabajo se oponen al hombre como algo objetivo e independiente.',
    explanation:
      'Objetivamente aparece un mundo de mercancías y leyes que parecen autónomas. Subjetivamente, la actividad humana se separa del sujeto y entra en la misma lógica mercantil.',
    role:
      'Une el fetichismo de la mercancía con la transformación de la conciencia y prepara el análisis del trabajo.',
    question:
      '¿Cómo se conectan el mundo objetivo de leyes sociales y la experiencia subjetiva del trabajador?',
    dependsOn: ['L03'],
    concepts: ['objetividad', 'subjetividad', 'segunda naturaleza'],
    diagram: ['mundo de mercancías', '↔', 'actividad humana', '→', 'cosificación'],
    critical: true,
    position: { x: 1170, y: -140 },
  }),
  N({
    id: 'L05',
    code: '§I.5',
    title: 'La fuerza de trabajo aparece como mercancía',
    page: '114',
    phase: 'Trabajo',
    branch: ['labor'],
    excerpt: 'La fuerza de trabajo toma para el propio trabajador la forma de una mercancía que le pertenece.',
    explanation:
      'La cosificación alcanza al sujeto cuando una capacidad vital propia se ofrece y se calcula como objeto intercambiable.',
    role:
      'Muestra la base subjetiva inmediata de la cosificación en el trabajo asalariado.',
    question:
      '¿Qué le ocurre al sujeto cuando una función de sí mismo se enfrenta a él como mercancía?',
    dependsOn: ['L04'],
    concepts: ['fuerza de trabajo', 'mercancía', 'trabajador'],
    diagram: ['trabajador', '→', 'fuerza de trabajo', '→', 'mercancía'],
    position: { x: 1560, y: 100 },
  }),
  N({
    id: 'L06',
    code: '§I.6',
    title: 'Trabajo abstracto e igualdad formal',
    page: '114–115',
    phase: 'Trabajo',
    branch: ['labor', 'rationalization'],
    excerpt: 'El trabajo abstracto, igual y comparable se mide crecientemente por el tiempo socialmente necesario.',
    explanation:
      'La igualdad mercantil exige una abstracción real del trabajo. Las diferencias cualitativas se subordinan a una medida común, comparable y cuantificable.',
    role:
      'Conecta la forma mercancía con la transformación material del proceso laboral.',
    question:
      '¿Por qué la igualdad formal de las mercancías exige también una abstracción efectiva del trabajo?',
    dependsOn: ['L05'],
    concepts: ['trabajo abstracto', 'igualdad formal', 'tiempo'],
    diagram: ['trabajos concretos', '→', 'abstracción', '→', 'tiempo comparable'],
    position: { x: 1950, y: -170 },
  }),
  N({
    id: 'L07',
    code: '§I.7',
    title: 'Racionalización basada en el cálculo',
    page: '115–116',
    phase: 'Racionalización',
    branch: ['rationalization', 'labor'],
    excerpt: 'Se impone el principio de la racionalización basada en el cálculo, en la posibilidad del cálculo.',
    explanation:
      'El proceso se descompone en operaciones parciales previsibles. La especialización rompe la unidad orgánica del producto y permite controlar cada función por separado.',
    role:
      'Introduce el mecanismo formal que extiende la cosificación: cálculo, descomposición y sistema parcial.',
    question:
      '¿Por qué la calculabilidad exige fragmentar procesos cualitativamente unitarios?',
    dependsOn: ['L06'],
    concepts: ['cálculo', 'racionalización', 'especialización'],
    diagram: ['unidad orgánica', '→', 'descomposición', '→', 'cálculo'],
    critical: true,
    position: { x: 2340, y: 60 },
  }),
  N({
    id: 'L08',
    code: '§I.8',
    title: 'Tiempo abstracto y sujeto contemplativo',
    page: '117–119',
    phase: 'Racionalización',
    branch: ['rationalization', 'labor'],
    excerpt: 'La persona se convierte en espectador impotente de lo que ocurre a su propia existencia.',
    explanation:
      'El tiempo se vuelve homogéneo y cuantificable. El trabajador fragmentado encuentra un mecanismo ya dado y adopta frente a él una actitud crecientemente contemplativa.',
    role:
      'Explica cómo una forma objetiva de organización produce una forma específica de subjetividad.',
    question:
      '¿Qué significa que el trabajador conozca las leyes del sistema sin poder gobernar su totalidad?',
    dependsOn: ['L07'],
    concepts: ['tiempo abstracto', 'fragmentación', 'contemplación'],
    diagram: ['tiempo cuantificado', '→', 'fragmentación', '→', 'espectador'],
    position: { x: 2730, y: -150 },
  }),
  N({
    id: 'L09',
    code: '§I.9',
    title: 'La estructura se extiende a toda la sociedad',
    page: '119–123',
    phase: 'Instituciones',
    branch: ['institutions', 'totality'],
    excerpt: 'La estructura de la sociedad capitalista muestra en todos los aspectos fundamentales esos mismos rasgos.',
    explanation:
      'La fábrica concentra el fenómeno, pero no lo agota. La racionalización mercantil penetra derecho, administración, burocracia y profesiones.',
    role:
      'Impide reducir la cosificación a una experiencia exclusivamente fabril.',
    question:
      '¿Qué permite reconocer una misma forma social en dominios institucionales diferentes?',
    dependsOn: ['L08'],
    concepts: ['sociedad', 'instituciones', 'generalización'],
    diagram: ['fábrica', '→', 'derecho', '→', 'burocracia', '→', 'sociedad'],
    position: { x: 3120, y: 80 },
  }),
  N({
    id: 'L10',
    code: '§I.10',
    title: 'Derecho y burocracia como sistemas calculables',
    page: '122–125',
    phase: 'Instituciones',
    branch: ['institutions'],
    excerpt: 'El derecho aparece como un sistema formal de cálculo de consecuencias jurídicas.',
    explanation:
      'La administración moderna necesita previsibilidad. Las reglas se autonomizan de su contenido material y convierten los casos concretos en variables de un sistema formal.',
    role:
      'Muestra una homología estructural entre empresa, derecho y burocracia.',
    question:
      '¿Qué se pierde cuando la forma jurídica puede calcular consecuencias pero no explicar su propio contenido?',
    dependsOn: ['L09'],
    concepts: ['derecho', 'burocracia', 'formalismo'],
    diagram: ['caso concreto', '→', 'regla formal', '→', 'resultado calculable'],
    position: { x: 3510, y: -180 },
  }),
  N({
    id: 'L11',
    code: '§I.11',
    title: 'Racionalidad parcial, irracionalidad de la totalidad',
    page: '126–130',
    phase: 'Totalidad',
    branch: ['totality', 'crisis'],
    excerpt: 'Las funciones parciales se autonomizan y siguen la lógica de su especialidad.',
    explanation:
      'Cada subsistema puede ser internamente racional y, sin embargo, la coordinación material del conjunto permanecer contingente. La totalidad no es la suma armónica de sus partes.',
    role:
      'Formula la contradicción central entre racionalización local e irracionalidad global.',
    question:
      '¿Cómo puede una sociedad estar cada vez más racionalizada y seguir siendo irracional como totalidad?',
    dependsOn: ['L09', 'L10'],
    concepts: ['sistemas parciales', 'autonomía', 'totalidad'],
    diagram: ['partes racionales', '→', 'autonomía', '≠', 'totalidad racional'],
    critical: true,
    position: { x: 3900, y: 40 },
  }),
  N({
    id: 'L12',
    code: '§I.12',
    title: 'La crisis revela el sustrato material',
    page: '131–133',
    phase: 'Crisis',
    branch: ['crisis', 'thought'],
    excerpt: 'En las crisis, el ser cualitativo de las cosas se convierte súbitamente en el factor decisivo.',
    explanation:
      'La crisis interrumpe el funcionamiento normal de las leyes abstractas y hace visible aquello que el formalismo había eliminado: valores de uso, consumo y condiciones cualitativas.',
    role:
      'Hace visible el límite práctico del pensamiento cosificado.',
    question:
      '¿Por qué la crisis no es sólo una anomalía económica sino una crítica del método formalista?',
    dependsOn: ['L11'],
    concepts: ['crisis', 'valor de uso', 'sustrato material'],
    diagram: ['leyes abstractas', '→', 'crisis', '→', 'retorno de lo cualitativo'],
    position: { x: 4290, y: -160 },
  }),
  N({
    id: 'L13',
    code: '§I.13',
    title: 'Especialización científica y pérdida de totalidad',
    page: '133–136',
    phase: 'Pensamiento',
    branch: ['thought', 'totality'],
    excerpt: 'La ciencia queda privada de comprender el nacimiento, la desaparición y el carácter social de su propia materia.',
    explanation:
      'El saber especializado gana precisión formal, pero pierde la génesis y la totalidad material. Una filosofía que recibe esos conceptos como datos sólo reproduce la cosificación a otro nivel.',
    role:
      'Cierra la sección I y abre el tránsito hacia las antinomias del pensamiento burgués.',
    question:
      '¿Qué cambio de punto de vista sería necesario para reconstruir la totalidad concreta?',
    dependsOn: ['L12'],
    concepts: ['ciencia', 'formalismo', 'totalidad concreta'],
    diagram: ['especialización', '→', 'formalismo', '→', 'pérdida de totalidad', '→', 'antinomias'],
    critical: true,
    position: { x: 4680, y: 60 },
  }),
]

const nodeMap = new Map(lukacsReificationNodes.map((node) => [node.id, node]))

lukacsReificationNodes.forEach((node) => {
  node.data.produces = []
})

lukacsReificationNodes.forEach((node) => {
  node.data.dependsOn.forEach((sourceId) => {
    const source = nodeMap.get(sourceId)
    if (source && !source.data.produces.includes(node.id)) source.data.produces.push(node.id)
  })
})

export const lukacsReificationEdges = lukacsReificationNodes.flatMap((node) =>
  node.data.dependsOn.map((sourceId, index) => ({
    id: `${sourceId}-${node.id}-${index}`,
    source: sourceId,
    target: node.id,
    relation: node.data.critical ? 'critical' : 'development',
  })),
)

export const lukacsReificationConceptualEdges = [
  { id: 'LC01', source: 'L03', target: 'L09', label: 'universalización social', conceptualType: 'manifestation' },
  { id: 'LC02', source: 'L07', target: 'L10', label: 'misma lógica formal', conceptualType: 'analogy' },
  { id: 'LC03', source: 'L04', target: 'L13', label: 'forma de conciencia', conceptualType: 'development' },
  { id: 'LC04', source: 'L11', target: 'L13', label: 'pérdida de totalidad', conceptualType: 'foundation' },
].map((edge) => ({ ...edge, layer: 'conceptual' }))

export const lukacsReificationNodeById = (id) => nodeMap.get(id) || null

export const lukacsReificationRoutes = [
  { id: 'all', label: 'Todo el sistema' },
  { id: 'genesis', label: 'Génesis de la cosificación' },
  { id: 'labor', label: 'Trabajo y subjetividad' },
  { id: 'rationalization', label: 'Racionalización' },
  { id: 'institutions', label: 'Derecho y burocracia' },
  { id: 'totality', label: 'Totalidad' },
  { id: 'crisis', label: 'Crisis' },
  { id: 'thought', label: 'Pensamiento burgués' },
]

export const lukacsReificationPhases = [
  'Mercancía',
  'Cosificación',
  'Trabajo',
  'Racionalización',
  'Instituciones',
  'Totalidad',
  'Crisis',
  'Pensamiento',
]

export const lukacsReificationGuidedRoute = lukacsReificationNodes.map((node, index) => ({
  id: node.id,
  phase: node.data.phase,
  why: node.data.role,
  nextQuestion: node.data.question,
  order: index + 1,
}))

export const lukacsReificationSource = {
  author: 'Georg Lukács',
  title: 'Historia y conciencia de clase · La cosificación y la conciencia de clase del proletariado',
  assignedPages: 'PDF proporcionado · 27 páginas · impreso 110–136 aprox.',
  boundary:
    'El sistema reconstruye I. El fenómeno de la cosificación. La última página conserva únicamente el umbral de II. Las antinomias del pensamiento burgués; no se completa con material externo.',
  edition:
    'Fuente única para este sistema: 5- LUKACS HISTORIA Y CONCIENCIA DE CLASE(1).pdf',
}
