// Kołakowski, La filosofía positivista, cap. I, pp. impresas 13–23.
// La capa "source" es paráfrasis localizada del escaneo aportado; los esquemas y
// preguntas se rotulan expresamente como reconstrucción de estudio PHILOSOPHIA.

export const KOLAKOWSKI_GEOMETRY = { width: 380, height: 332 }

export const kolakowskiRoutes = [
  { id: 'all', label: 'Atlas completo · 8 estaciones' },
  { id: 'marco', label: 'I. Qué limita el positivismo' },
  { id: 'reglas', label: 'II. Las cuatro reglas' },
  { id: 'consecuencias', label: 'III. Consecuencias y apertura' },
]

const raw = [
  {
    id: 'K01',
    section: 'marco',
    title: 'Una actitud normativa sobre el saber',
    page: 'pp. 13–15',
    kind: 'Problema',
    short: 'Kołakowski presenta el positivismo como una actitud que fija qué enunciados pueden contar como conocimiento legítimo.',
    source: 'El capítulo abre distinguiendo el positivismo de una simple etiqueta histórica. Su continuidad se busca en reglas que ordenan el saber humano: qué preguntas pueden formularse con sentido, qué contenidos deben rechazarse y qué condiciones hacen aceptable una afirmación como conocimiento.',
    explanation: 'La lectura de estudio toma esta caracterización como punto de partida: el positivismo funciona aquí como disciplina de límites del conocimiento, no como una tesis metafísica adicional sobre qué existe en último término.',
    question: '¿Por qué Kołakowski puede hablar de una continuidad positivista aunque existan autores y épocas muy distintas?',
    diagram: ['Actitud filosófica', 'Reglas sobre el saber legítimo', 'Límite de preguntas y afirmaciones'],
    dependsOn: [],
  },
  {
    id: 'K02',
    section: 'reglas',
    title: 'Regla I · fenomenalismo',
    page: 'pp. 15–17',
    kind: 'Regla',
    short: 'No se admite una diferencia cognoscitiva entre fenómeno y una esencia inaccesible que quede fuera de toda experiencia posible.',
    source: 'La primera regla rechaza como estériles las preguntas cuya respuesta exigiría referirse a entidades o propiedades que, por principio, no pueden relacionarse con experiencia alguna. Kołakowski aclara que esto no elimina toda investigación causal: impide convertir una causa supuesta en un objeto incognoscible que duplique lo observado.',
    explanation: 'La regla no afirma que sólo existan sensaciones; restringe el valor cognoscitivo de aquello que no puede entrar, directa o indirectamente, en el campo de la experiencia.',
    question: '¿Qué diferencia hay entre buscar una causa contrastable y postular una esencia que nunca podría aparecer en experiencia alguna?',
    diagram: ['Fenómenos observables', 'Pregunta contrastable', 'Rechazo de esencia incognoscible'],
    dependsOn: ['K01'],
  },
  {
    id: 'K03',
    section: 'reglas',
    title: 'Regla II · nominalismo',
    page: 'pp. 17–20',
    kind: 'Regla',
    short: 'Los términos generales y abstracciones organizan la experiencia; no prueban por sí mismos la existencia de entidades universales.',
    source: 'La segunda regla niega que el conocimiento abstracto abra un acceso independiente a realidades universales situadas más allá de los hechos observables. Los conceptos, modelos y construcciones generales sirven para ordenar, comunicar y anticipar la experiencia, sin que su utilidad autorice a convertirlos automáticamente en cosas existentes por sí mismas.',
    explanation: 'Kołakowski no elimina la abstracción científica. Su blanco es el salto desde una herramienta conceptual útil hacia una ontología de universales supuestamente garantizada por el mero uso del concepto.',
    question: '¿Cómo puede una abstracción ser científicamente útil sin que debamos tratarla como una cosa universal existente aparte?',
    diagram: ['Experiencias múltiples', 'Concepto o modelo general', 'Orden, comunicación y previsión'],
    dependsOn: ['K01'],
  },
  {
    id: 'K04',
    section: 'reglas',
    title: 'Regla III · juicios de valor y normas',
    page: 'pp. 20–21',
    kind: 'Regla',
    short: 'Los valores y mandatos no adquieren validez cognoscitiva por el mismo procedimiento con que se describen hechos.',
    source: 'La tercera regla separa el conocimiento empírico de los enunciados que expresan valoraciones, deberes o normas. Kołakowski sostiene que la experiencia puede informar acerca de hechos y consecuencias, pero no convierte por sí sola una preferencia moral o una norma en verdad científica.',
    explanation: 'La frontera es epistemológica: describe qué puede justificarse como conocimiento científico. No equivale a decir que los valores carezcan de importancia práctica o humana.',
    question: '¿Por qué describir las consecuencias de una acción no basta, por sí solo, para demostrar científicamente que esa acción deba realizarse?',
    diagram: ['Descripción de hechos', 'Evaluación o norma', 'Planos cognoscitivos distintos'],
    dependsOn: ['K01'],
  },
  {
    id: 'K05',
    section: 'reglas',
    title: 'Regla IV · unidad del método científico',
    page: 'pp. 21–22',
    kind: 'Regla',
    short: 'Las ciencias comparten una orientación fundamental: controlar afirmaciones mediante procedimientos públicos ligados a la experiencia.',
    source: 'La cuarta regla expresa la confianza en una unidad básica del método científico. Aunque las ciencias estudien objetos diferentes y usen técnicas diversas, el positivismo busca criterios comunes de control, observación, comunicación y contraste para distinguir conocimiento de especulación.',
    explanation: 'La unidad no significa identidad de técnicas entre todas las disciplinas. La reconstrucción de estudio la entiende como una exigencia común de control intersubjetivo y vínculo con la experiencia.',
    question: '¿Qué puede significar “unidad del método” sin reducir todas las ciencias a una sola técnica?',
    diagram: ['Disciplinas diversas', 'Control y contraste públicos', 'Unidad metodológica básica'],
    dependsOn: ['K01'],
  },
  {
    id: 'K06',
    section: 'consecuencias',
    title: 'Abstracción sin mundo duplicado',
    page: 'pp. 18–20',
    kind: 'Consecuencia',
    short: 'El saber general puede simplificar, clasificar y prever sin reclamar una realidad separada para cada concepto.',
    source: 'Al desarrollar el nominalismo, Kołakowski concede una función decisiva a conceptos y construcciones abstractas: permiten ordenar la experiencia, reconocer regularidades y formular previsiones. Su eficacia no depende de postular, detrás de ellas, entidades universales independientes.',
    explanation: 'Este nodo hace explícita una consecuencia presente en el propio desarrollo del capítulo: limitar la ontología no destruye el trabajo conceptual; cambia el estatuto que se atribuye a sus herramientas.',
    question: '¿Qué gana el conocimiento cuando separa la utilidad de un concepto de la afirmación de que ese concepto nombra una entidad independiente?',
    diagram: ['Abstracción', 'Organización de experiencia', 'Predicción sin reificación'],
    dependsOn: ['K03'],
  },
  {
    id: 'K07',
    section: 'consecuencias',
    title: 'La frontera anti-metafísica',
    page: 'pp. 22–23',
    kind: 'Resultado',
    short: 'Las cuatro reglas convergen en una política intelectual: excluir como conocimiento lo que rebasa de manera incontrolable la experiencia.',
    source: 'Kołakowski resume el positivismo como un conjunto de prohibiciones y criterios que buscan impedir que construcciones metafísicas se presenten como saber. La restricción alcanza tanto interpretaciones materialistas como espiritualistas cuando pretenden describir una realidad situada más allá de toda posible comprobación.',
    explanation: 'La crítica no ofrece otra metafísica rival; intenta decidir qué afirmaciones merecen estatuto cognoscitivo. Ésta es la consecuencia que el esquema maestro representa.',
    question: '¿Por qué el positivismo puede criticar por igual metafísicas espiritualistas y materialistas?',
    diagram: ['Cuatro reglas', 'Criterio de experiencia y control', 'Exclusión de metafísica como saber'],
    dependsOn: ['K02', 'K03', 'K04', 'K05'],
  },
  {
    id: 'K08',
    section: 'consecuencias',
    title: 'Un programa histórico todavía abierto',
    page: 'p. 23',
    kind: 'Apertura',
    short: 'El capítulo cierra preguntando por los fundamentos, consecuencias, límites y transformaciones históricas de esas reglas.',
    source: 'Después de formular los principios, Kołakowski anuncia el problema histórico: examinar de dónde proceden, cómo cambian, qué consecuencias producen y en qué momentos el positivismo entra en tensión con sus propios supuestos.',
    explanation: 'La introducción no resuelve todavía esas preguntas. Por eso esta estación funciona como umbral hacia el recorrido histórico del libro, no como conclusión doctrinal definitiva.',
    question: '¿Qué habría que estudiar históricamente para saber si estas cuatro reglas forman realmente una tradición coherente?',
    diagram: ['Cuatro reglas formuladas', 'Historia de sus transformaciones', 'Evaluación de límites y consecuencias'],
    dependsOn: ['K07'],
  },
]

const accents = {
  marco: '#7A2D1E',
  reglas: '#A98045',
  consecuencias: '#6F7D70',
}

export const kolakowskiNodes = raw.map((item, index) => ({
  id: item.id,
  type: 'kolakowski',
  position: {
    x: 90 + (index % 2) * 535,
    y: 70 + Math.floor(index / 2) * 430,
  },
  draggable: false,
  data: {
    ...item,
    number: String(index + 1).padStart(2, '0'),
    color: accents[item.section],
    sourceRef: 'Kołakowski · La filosofía positivista · ' + item.page,
    sourceKind: 'PARÁFRASIS LOCALIZADA DEL TEXTO',
  },
}))

export const kolakowskiOrder = raw.map((item) => item.id)

export const kolakowskiById = (id) =>
  kolakowskiNodes.find((node) => node.id === id)

export const kolakowskiEdges = raw.flatMap((item) =>
  item.dependsOn.map((source) => ({
    id: source + '-' + item.id,
    source,
    target: item.id,
    critical: item.id === 'K07',
    explanation:
      'Relación de lectura reconstruida entre ' +
      raw.find((entry) => entry.id === source).title +
      ' y ' +
      item.title +
      '. No es una figura original de Kołakowski.',
  })),
)

export const kolakowskiCoreSchema = {
  layout: 'hierarchy',
  readingLayout: 'vertical-folio',
  rootId: 'positivismo',
  sizeHint: 'tall',
  ariaLabel:
    'Esquema de las cuatro reglas del positivismo y su convergencia en una frontera anti-metafísica',
  nodes: [
    {
      id: 'positivismo',
      label: 'Positivismo',
      caption: 'reglas del saber legítimo',
      role: 'concept',
      emphasis: true,
    },
    {
      id: 'fenomenalismo',
      label: 'Fenomenalismo',
      caption: 'experiencia posible',
      role: 'term',
    },
    {
      id: 'nominalismo',
      label: 'Nominalismo',
      caption: 'abstracción sin universales reificados',
      role: 'term',
    },
    {
      id: 'valores',
      label: 'Valores y normas',
      caption: 'no equivalen a descripción científica',
      role: 'term',
    },
    {
      id: 'metodo',
      label: 'Unidad del método',
      caption: 'control y contraste',
      role: 'term',
    },
    {
      id: 'limite',
      label: 'Frontera anti-metafísica',
      caption: 'límite cognoscitivo',
      role: 'result',
      emphasis: true,
    },
  ],
  edges: [
    { from: 'positivismo', to: 'fenomenalismo', label: 'regla I', relationKind: 'hierarchical' },
    { from: 'positivismo', to: 'nominalismo', label: 'regla II', relationKind: 'hierarchical' },
    { from: 'positivismo', to: 'valores', label: 'regla III', relationKind: 'hierarchical' },
    { from: 'positivismo', to: 'metodo', label: 'regla IV', relationKind: 'hierarchical' },
    { from: 'fenomenalismo', to: 'limite', label: 'delimita', relationKind: 'derives' },
    { from: 'nominalismo', to: 'limite', label: 'delimita', relationKind: 'derives' },
    { from: 'valores', to: 'limite', label: 'delimita', relationKind: 'derives' },
    { from: 'metodo', to: 'limite', label: 'delimita', relationKind: 'derives' },
  ],
}

export function kolakowskiSchemaFor(id) {
  const node = kolakowskiById(id)
  if (!node) return kolakowskiCoreSchema

  return {
    layout: 'flow',
    direction: 'vertical',
    sizeHint: 'medium',
    ariaLabel: 'Esquema de estudio para ' + node.data.title,
    nodes: node.data.diagram.map((label, index) => ({
      id: id + '-d' + index,
      label,
      role: index === 0 ? 'term' : index === 1 ? 'mediation' : 'result',
      emphasis: index === 1,
    })),
    edges: [
      { from: id + '-d0', to: id + '-d1', label: 'conduce a', relationKind: 'derives' },
      { from: id + '-d1', to: id + '-d2', label: 'resulta en', relationKind: 'derives' },
    ],
  }
}
