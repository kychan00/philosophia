export const philology = [
  {
    language: 'Griego',
    term: 'τὸ ὄν',
    transliteration: 'to on',
    note: '“Lo que es”: forma sustantivada que puede nombrar al ente o aquello que es.',
  },
  {
    language: 'Griego',
    term: 'εἶναι',
    transliteration: 'einai',
    note: 'Infinitivo del verbo “ser”; permite pensar el ser también como verbo y no sólo como cosa.',
  },
  {
    language: 'Latín',
    term: 'ens / esse',
    transliteration: 'ente / ser',
    note: 'La tradición escolástica distingue con especial cuidado lo que es y el acto de ser.',
  },
  {
    language: 'Alemán',
    term: 'Sein',
    transliteration: 'ser',
    note: 'Término decisivo para el idealismo alemán y, después, para la pregunta heideggeriana.',
  },
]

export const genealogy = [
  {
    period: 's. V a. C.',
    author: 'Parménides',
    key: 'ser y no-ser',
    body:
      'La pregunta adquiere una radicalidad temprana al vincular pensamiento, decir y aquello que es.',
  },
  {
    period: 's. IV a. C.',
    author: 'Aristóteles',
    key: 'el ser se dice de muchas maneras',
    body:
      'La investigación distingue sentidos del ser y concede una función central a la sustancia.',
  },
  {
    period: 's. XIII',
    author: 'Tomás de Aquino',
    key: 'ens · essentia · esse',
    body:
      'La metafísica medieval profundiza la relación entre ente, esencia y acto de ser.',
  },
  {
    period: '1781 / 1787',
    author: 'Immanuel Kant',
    key: 'existencia y límites de la metafísica',
    body:
      'La crítica trascendental reordena qué puede afirmarse legítimamente acerca de los objetos y de la existencia.',
  },
  {
    period: '1812',
    author: 'G. W. F. Hegel',
    key: 'ser · nada · devenir',
    body:
      'El comienzo de la Lógica convierte el ser puro en un momento de un movimiento conceptual.',
  },
  {
    period: '1927',
    author: 'Martin Heidegger',
    key: 'diferencia entre ser y ente',
    body:
      'La pregunta se dirige al sentido del ser y a la tendencia histórica a confundirlo con los entes.',
  },
]

export const lenses = [
  {
    id: 'parmenides',
    marker: 'I',
    monogram: 'Π',
    author: 'Parménides',
    period: 'Elea · s. V a. C.',
    thesis: 'El problema del ser aparece ligado a la posibilidad misma de pensar y decir.',
    explanation:
      'La radicalidad de la vía parmenídea obliga a tomar en serio la oposición entre lo que es y lo que no es.',
    question:
      '¿Qué queda excluido cuando se afirma que sólo lo que es puede ser pensado?',
  },
  {
    id: 'aristoteles',
    marker: 'II',
    monogram: 'Α',
    author: 'Aristóteles',
    period: 'Liceo · s. IV a. C.',
    thesis: 'El ser no posee un único sentido simple: se dice de muchas maneras.',
    explanation:
      'La investigación ontológica organiza esa pluralidad y pregunta por aquello que funciona como principio de articulación.',
    question:
      '¿Cómo puede haber múltiples sentidos del ser sin convertir “ser” en una palabra puramente equívoca?',
  },
  {
    id: 'aquinas',
    marker: 'III',
    monogram: 'T',
    author: 'Tomás de Aquino',
    period: 'Escolástica · s. XIII',
    thesis: 'La metafísica distingue lo que una cosa es de aquello por lo que efectivamente es.',
    explanation:
      'Las relaciones entre ente, esencia y esse permiten formular una ontología del acto de ser.',
    question:
      '¿Qué añade el acto de ser a la esencia de aquello que existe?',
  },
  {
    id: 'kant',
    marker: 'IV',
    monogram: 'K',
    author: 'Immanuel Kant',
    period: 'Königsberg · s. XVIII',
    thesis: 'La existencia no funciona como una determinación conceptual ordinaria.',
    explanation:
      'La crítica kantiana obliga a separar el contenido de un concepto de la cuestión de si su objeto existe.',
    question:
      '¿Qué puede afirmar la razón acerca del ser cuando rebasa las condiciones de la experiencia posible?',
  },
  {
    id: 'heidegger',
    marker: 'V',
    monogram: 'H',
    author: 'Martin Heidegger',
    period: 'Friburgo · s. XX',
    thesis: 'Preguntar por el ser exige no confundirlo con ningún ente determinado.',
    explanation:
      'La diferencia ontológica vuelve central la pregunta por el sentido de ser y por el modo en que ya lo comprendemos.',
    question:
      '¿Cómo preguntar por el ser sin tratarlo como si fuera una cosa más entre las cosas?',
  },
]

export const distinctions = [
  {
    code: 'A',
    title: 'Ser / ente',
    body:
      '“Ente” nombra aquello que es; “ser” designa el problema o sentido en virtud del cual decimos que algo es.',
    warning: 'La formulación cambia según la tradición.',
  },
  {
    code: 'B',
    title: 'Esencia / existencia',
    body:
      'Una distinción de trabajo entre qué es algo y el hecho o acto de que sea.',
    warning: 'No todos los autores aceptan la distinción del mismo modo.',
  },
  {
    code: 'C',
    title: 'Apariencia / realidad',
    body:
      'La ontología pregunta si aparecer y ser coinciden, se distinguen o se condicionan mutuamente.',
    warning: 'Evitar asumir de entrada que “apariencia” significa falsedad.',
  },
  {
    code: 'D',
    title: 'Posibilidad / actualidad',
    body:
      'Permite examinar si lo posible posee alguna estructura ontológica y cómo se relaciona con lo efectivo.',
    warning: 'La modalidad cambia de Aristóteles a Leibniz, Kant y la lógica modal.',
  },
]

export const beingRoutesSchema = {
  layout: 'radial',
  centerId: 'being',
  radius: 190,
  sizeHint: 'wide',
  fitPadding: 46,
  ariaLabel:
    'Atlas conceptual del problema del ser con seis rutas de investigación: sustancia, existencia, apariencia, posibilidad, tiempo y lenguaje.',
  nodes: [
    {
      id: 'being',
      label: 'SER',
      caption: 'quaestio',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'substance',
      label: 'sustancia',
      caption: '¿qué permanece?',
      shapeRole: 'structure',
    },
    {
      id: 'existence',
      label: 'existencia',
      caption: '¿qué significa existir?',
      shapeRole: 'term',
    },
    {
      id: 'appearance',
      label: 'apariencia',
      caption: '¿cómo se muestra?',
      shapeRole: 'mediation',
    },
    {
      id: 'possibility',
      label: 'posibilidad',
      caption: '¿qué puede ser?',
      shapeRole: 'term',
    },
    {
      id: 'time',
      label: 'tiempo',
      caption: '¿cómo acontece?',
      shapeRole: 'mediation',
    },
    {
      id: 'language',
      label: 'lenguaje',
      caption: '¿cómo se dice?',
      shapeRole: 'result',
    },
  ],
  edges: [
    { from: 'being', to: 'substance', label: 'se pregunta desde', relationKind: 'transversal' },
    { from: 'being', to: 'existence', label: 'se pregunta desde', relationKind: 'transversal' },
    { from: 'being', to: 'appearance', label: 'se pregunta desde', relationKind: 'transversal' },
    { from: 'being', to: 'possibility', label: 'se pregunta desde', relationKind: 'transversal' },
    { from: 'being', to: 'time', label: 'se pregunta desde', relationKind: 'transversal' },
    { from: 'being', to: 'language', label: 'se pregunta desde', relationKind: 'transversal' },
  ],
  animation: {
    mode: 'radial',
    nodeDuration: 0.34,
    edgeDuration: 0.32,
  },
}
