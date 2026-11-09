import {
  nietzscheCloseReading21to24,
  nietzscheCloseReadingNodes21to24,
  nietzscheCloseReadingSchema21to24,
} from './nietzscheTruthSystem.js'

export const NIETZSCHE_SYSTEM2D_GEOMETRY = Object.freeze({
  width: 310,
  height: 250,
})

export const nietzscheSystem2DSource = Object.freeze({
  work: 'Friedrich Nietzsche · Sobre verdad y mentira en sentido extramoral',
  edition: 'Tecnos · 2.ª ed. · 2012 · edición preparada por Manuel Garrido',
  range: 'pp. 21–24',
  apa: 'Nietzsche, F. (2012). Sobre verdad y mentira en sentido extramoral y otros fragmentos de filosofía del conocimiento. Tecnos. (2.ª ed.; M. Garrido, ed. prep.).',
  boundary:
    'Los fragmentos entrecomillados proceden de las pp. 21–24 del ejemplar Tecnos 2012 aportado. Explicaciones, preguntas, rutas y relaciones se identifican como reconstrucción de estudio de PHILOSOPHIA. Los epígrafes entre corchetes y las notas al pie pertenecen al aparato editorial de esta edición.',
})

export const nietzscheSystem2DRoutes = Object.freeze([
  { id: 'all', label: 'Sistema completo', short: 'pp. 21–24 · 28 nodos' },
  { id: 'p21', label: 'P. 21 · Invención', short: 'Invención y contingencia del conocer', guidingQuestion: '¿Qué ocurre cuando el conocimiento deja de pensarse como rasgo eterno del mundo?' },
  { id: 'p22', label: 'P. 22 · Descentramiento', short: 'Humanidad, mosca y soberbia filosófica', guidingQuestion: '¿Cómo desmonta Nietzsche la centralidad que el ser humano atribuye a su intelecto?' },
  { id: 'p23', label: 'P. 23 · Conservación y fingimiento', short: 'Engaño, máscara, vanidad y límite perceptivo', guidingQuestion: '¿Qué función cumple el intelecto si su operación primaria está ligada a conservar la vida?' },
  { id: 'p24', label: 'P. 24 · Autoconocimiento y verdad', short: 'Conciencia, cuerpo oculto e impulso a la verdad', guidingQuestion: '¿Cómo puede surgir un impulso hacia la verdad en una conciencia descrita como limitada e ilusa?' },
])

export const nietzscheSystem2DOrder = Object.freeze(
  nietzscheCloseReadingNodes21to24.map((node) => node.id),
)

const POSITION = Object.freeze({
  'S21-1': { x: 0, y: 0 },
  'S21-2': { x: 0, y: 340 },
  'S21-3': { x: 0, y: 680 },

  'S22-1': { x: 430, y: 0 },
  'S22-2': { x: 430, y: 340 },
  'S22-3': { x: 430, y: 680 },
  'S22-4': { x: 430, y: 1020 },
  'S22-5': { x: 860, y: 680 },
  'S22-6': { x: 860, y: 1020 },

  'S23-1': { x: 1290, y: 0 },
  'S23-2': { x: 1290, y: 340 },
  'S23-3': { x: 1290, y: 680 },
  'S23-4': { x: 1290, y: 1020 },
  'S23-5': { x: 1720, y: 0 },
  'S23-6': { x: 1720, y: 340 },
  'S23-7': { x: 1720, y: 680 },
  'S23-8': { x: 1720, y: 1020 },
  'S23-9': { x: 2150, y: 0 },
  'S23-10': { x: 2150, y: 340 },
  'S23-11': { x: 2150, y: 680 },
  'S23-12': { x: 2150, y: 1020 },

  'S24-1': { x: 2580, y: 0 },
  'S24-2': { x: 2580, y: 340 },
  'S24-3': { x: 2580, y: 680 },
  'S24-4': { x: 2580, y: 1020 },
  'S24-5': { x: 3010, y: 340 },
  'S24-6': { x: 3010, y: 680 },
  'S24-7': { x: 3010, y: 1020 },
})

const PAGE_META = Object.freeze({
  21: { route: 'p21', phase: 'P. 21 · invención', tone: 'moss', concepts: ['conocimiento', 'invención', 'contingencia'] },
  22: { route: 'p22', phase: 'P. 22 · descentramiento', tone: 'gold', concepts: ['intelecto', 'antropocentrismo', 'soberbia'] },
  23: { route: 'p23', phase: 'P. 23 · conservación y fingimiento', tone: 'blue', concepts: ['conservación', 'engaño', 'fingimiento', 'percepción'] },
  24: { route: 'p24', phase: 'P. 24 · autoconocimiento y verdad', tone: 'plum', concepts: ['autoconocimiento', 'conciencia', 'cuerpo', 'verdad'] },
})

const SIMPLE = Object.freeze({
  'S21-1': 'El conocimiento no aparece como algo eterno: aparece como algo que ciertos animales llegaron a producir.',
  'S21-2': 'La importancia que damos al conocer es enorme para nosotros, pero diminuta si cambiamos la escala.',
  'S21-3': 'Si desaparece el mundo de esos animales, también desaparece su conocimiento.',
  'S22-1': 'Nietzsche rebaja el prestigio del intelecto: es frágil y contingente.',
  'S22-2': 'El intelecto no recibe una misión cósmica ni un fin superior garantizado.',
  'S22-3': 'Lo que llamamos conocimiento sigue siendo una capacidad humana.',
  'S22-4': 'El ser humano convierte una capacidad local en una supuesta centralidad universal.',
  'S22-5': 'La mosca sirve para mostrar que sentirse centro no prueba serlo.',
  'S22-6': 'El filósofo puede llevar al extremo la ilusión de que sus pensamientos importan al universo.',
  'S23-1': 'El intelecto sirve primero para conservar a un viviente vulnerable.',
  'S23-2': 'El orgullo del conocer puede impedir ver con claridad nuestra propia condición.',
  'S23-3': 'El conocimiento tiende a valorarse a sí mismo de manera interesada.',
  'S23-4': 'El engaño no aparece como accidente: organiza el funcionamiento descrito del intelecto.',
  'S23-5': 'Fingir es una estrategia de conservación.',
  'S23-6': 'La apariencia se despliega socialmente en máscaras, adulación, fraude y representación.',
  'S23-7': 'La vanidad organiza buena parte de ese teatro de apariencias.',
  'S23-8': 'Si vivimos entre fingimientos, una voluntad totalmente pura de verdad deja de ser obvia.',
  'S23-9': 'La experiencia humana ordinaria está atravesada por ilusión.',
  'S23-10': 'Percibimos formas y superficies, no una transparencia inmediata de las cosas.',
  'S23-11': 'Recibir estímulos no equivale automáticamente a poseer la verdad.',
  'S23-12': 'El sueño muestra cuán fácilmente aceptamos como real una apariencia.',
  'S24-1': 'El problema ya no es sólo conocer el mundo: también conocemos mal a quien conoce.',
  'S24-2': 'Ni siquiera nuestro propio cuerpo está enteramente presente para la conciencia.',
  'S24-3': 'La conciencia puede ser limitada y, al mismo tiempo, sentirse soberana.',
  'S24-4': 'La metáfora de la llave expresa que no tenemos acceso total a lo que nos constituye.',
  'S24-5': 'Bajo la conciencia hay impulsos que ella no controla ni contempla plenamente.',
  'S24-6': 'La conciencia vive con una seguridad aparente sobre fuerzas que pueden desbordarla.',
  'S24-7': 'Después de describir conservación, engaño e ilusión, Nietzsche pregunta por qué buscamos verdad.',
})

const byMapTo = new Map()
nietzscheCloseReading21to24.forEach((fragment) => {
  if (!byMapTo.has(fragment.mapTo)) byMapTo.set(fragment.mapTo, [])
  byMapTo.get(fragment.mapTo).push(fragment)
})

const incomingById = new Map(nietzscheSystem2DOrder.map((id) => [id, []]))
const outgoingById = new Map(nietzscheSystem2DOrder.map((id) => [id, []]))

nietzscheCloseReadingSchema21to24.edges.forEach((edge) => {
  incomingById.get(edge.to)?.push(edge.from)
  outgoingById.get(edge.from)?.push(edge.to)
})

function pageFromId(id) {
  return Number(id.slice(1, 3))
}

function topicToneFor(id, page) {
  if (page !== 23) return PAGE_META[page].tone
  if (['S23-1', 'S23-2', 'S23-3', 'S23-4'].includes(id)) return 'rust'
  if (['S23-5', 'S23-6', 'S23-7', 'S23-8'].includes(id)) return 'ochre'
  return 'blue'
}

function shortExplanation(fragments) {
  return fragments[0]?.reading || 'Explicación pendiente de cotejo.'
}

export function nietzscheNodeSchema(id) {
  const node = nietzscheCloseReadingNodes21to24.find((item) => item.id === id)
  if (!node) return null

  const neighborIds = [
    ...(incomingById.get(id) || []),
    ...(outgoingById.get(id) || []),
  ]
  const unique = [...new Set(neighborIds)]
  const radius = 0.34

  const nodes = [
    {
      id,
      label: node.label,
      caption: 'nodo focal',
      position: { x: 0.5, y: 0.5 },
      emphasis: true,
      shapeRole: 'concept',
    },
    ...unique.map((neighborId, index) => {
      const neighbor = nietzscheCloseReadingNodes21to24.find((item) => item.id === neighborId)
      const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / Math.max(unique.length, 1)
      return {
        id: neighborId,
        label: neighbor?.label || neighborId,
        caption: (incomingById.get(id) || []).includes(neighborId) ? 'antecede' : 'abre hacia',
        position: {
          x: 0.5 + Math.cos(angle) * radius,
          y: 0.5 + Math.sin(angle) * radius,
        },
        shapeRole: 'term',
      }
    }),
  ]

  const edges = nietzscheCloseReadingSchema21to24.edges
    .filter((edge) => edge.from === id || edge.to === id)
    .map((edge) => ({
      from: edge.from,
      to: edge.to,
      label: edge.label,
      relationKind: edge.relationKind || 'derives',
    }))

  return {
    layout: 'constellation',
    canvas: { width: 720, height: 500 },
    minHeight: 440,
    fitPadding: 34,
    legend: false,
    ariaLabel: `Relaciones documentadas de estudio para ${node.label}`,
    nodes,
    edges,
  }
}

export const nietzscheSystem2DNodes = Object.freeze(
  nietzscheCloseReadingNodes21to24.map((baseNode) => {
    const page = pageFromId(baseNode.id)
    const meta = PAGE_META[page]
    const fragments = byMapTo.get(baseNode.id) || []
    const first = fragments[0]

    return {
      id: baseNode.id,
      type: 'nietzscheTruth',
      position: POSITION[baseNode.id],
      data: {
        code: baseNode.id,
        title: baseNode.label,
        phase: meta.phase,
        page,
        branch: [meta.route],
        topicTone: topicToneFor(baseNode.id, page),
        excerpt: first?.phrase || 'cita literal pendiente de cotejo',
        sourceFragments: fragments,
        sourceRef: `Nietzsche · Tecnos 2012 · p. ${page}`,
        sourceLabel: 'Nietzsche · Tecnos 2012',
        apaShort: `(Nietzsche, 2012, p. ${page})`,
        explanation: fragments.map((item) => item.reading).join(' '),
        shortExplanation: shortExplanation(fragments),
        simple: SIMPLE[baseNode.id],
        concepts: meta.concepts,
        dependsOn: [...(incomingById.get(baseNode.id) || [])],
        produces: [...(outgoingById.get(baseNode.id) || [])],
        question: `Explique desde la p. ${page} qué función cumple «${baseNode.label}» dentro del movimiento del argumento.`,
        questionProvenance: 'philosophia',
        schema: nietzscheNodeSchema(baseNode.id),
        relationLayer: 'Reconstrucción de estudio PHILOSOPHIA',
      },
    }
  }),
)

export const nietzscheSystem2DEdges = Object.freeze(
  nietzscheCloseReadingSchema21to24.edges.map((edge, index) => ({
    id: `NT-E${String(index + 1).padStart(2, '0')}`,
    source: edge.from,
    target: edge.to,
    label: edge.label || 'continúa',
    relationKind: edge.relationKind || 'derives',
    reconstruction: true,
  })),
)

export const nietzscheSystem2DGuidedRoute = Object.freeze(
  nietzscheSystem2DOrder.map((id, index) => {
    const node = nietzscheSystem2DNodes.find((item) => item.id === id)
    return {
      id,
      number: index + 1,
      title: node?.data.title || id,
      sourceRef: node?.data.sourceRef || '',
    }
  }),
)

export function nietzscheSystem2DNodeById(id) {
  return nietzscheSystem2DNodes.find((node) => node.id === id) || null
}

export function nietzscheSystem2DRouteOrder(routeId) {
  if (!routeId || routeId === 'all') return [...nietzscheSystem2DOrder]
  return nietzscheSystem2DOrder.filter((id) =>
    nietzscheSystem2DNodeById(id)?.data.branch.includes(routeId),
  )
}

export const nietzscheSystem2DMasterSchema = nietzscheCloseReadingSchema21to24
