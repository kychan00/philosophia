export const SOURCE_LABELS = {
  kant: {
    label: 'KANT',
    long: 'Immanuel Kant · Crítica de la razón pura',
  },
  hartnack: {
    label: 'HARTNACK',
    long: 'Justus Hartnack · La teoría del conocimiento de Kant',
  },
  both: {
    label: 'KANT + HARTNACK',
    long: 'Abordado en el texto primario y en el comentario de Hartnack',
  },
}

export const PHASES = [
  {
    id: 'architecture',
    number: 'I',
    title: 'Arquitectura de la Analítica',
    status: 'active',
    note: 'Ubicar sensibilidad, entendimiento, conceptos, principios y experiencia.',
  },
  {
    id: 'sources',
    number: 'II',
    title: 'Trazabilidad de fuentes',
    status: 'active',
    note: 'Chips para distinguir Kant, Hartnack o ambos.',
  },
  {
    id: 'metaphysical',
    number: 'III',
    title: 'Deducción metafísica',
    status: 'active',
    note: 'Tabla de juicios → tabla de categorías.',
  },
  {
    id: 'transcendental',
    number: 'IV',
    title: 'Deducción trascendental',
    status: 'active',
    note: 'Legitimidad objetiva de las categorías.',
  },
  {
    id: 'apperception',
    number: 'V',
    title: 'Síntesis y apercepción',
    status: 'active',
    note: 'Diversidad → síntesis → yo pienso → objeto.',
  },
  {
    id: 'schematism',
    number: 'VI',
    title: 'Esquematismo y principios',
    status: 'active',
    note: 'Mediación temporal y principios del entendimiento.',
  },
  {
    id: 'study',
    number: 'VII',
    title: 'Modo estudio',
    status: 'active',
    note: 'Práctica, preguntas y progreso.',
  },
  {
    id: 'reader',
    number: 'VIII',
    title: 'Lector comparado',
    status: 'active',
    note: 'Citas directas y textos ampliados de Kant y Hartnack.',
  },
]

export const MAPS = {
  architecture: {
    label: 'Arquitectura',
    subtitle: 'De la sensibilidad a la experiencia posible',
    nodes: [
      {
        id: 'sensibility',
        x: 0,
        y: 260,
        source: 'both',
        eyebrow: 'ESTÉTICA TRASCENDENTAL',
        title: 'Sensibilidad',
        short: 'Facultad mediante la cual los objetos nos son dados.',
        detail:
          'La Analítica parte de un resultado ya obtenido: el conocimiento sensible está condicionado por espacio y tiempo. La sensibilidad aporta la diversidad intuida; todavía falta explicar cómo esa diversidad es pensada.',
        kantRef: 'Crítica de la razón pura · Estética trascendental',
        hartnackRef: 'Hartnack · Estética trascendental · pp. 27–40',
      },
      {
        id: 'space-time',
        x: 360,
        y: 260,
        source: 'both',
        eyebrow: 'FORMAS A PRIORI',
        title: 'Espacio + tiempo',
        short: 'Condiciones de la intuición sensible.',
        detail:
          'Espacio y tiempo no son categorías. Pertenecen a la sensibilidad y hacen posible que algo sea dado en la intuición.',
        kantRef: 'Crítica de la razón pura · Estética trascendental',
        hartnackRef: 'Hartnack · pp. 27–40',
      },
      {
        id: 'analytic',
        x: 780,
        y: 260,
        source: 'both',
        eyebrow: 'LÓGICA TRASCENDENTAL',
        title: 'Analítica trascendental',
        short: 'Estudia los elementos a priori del conocimiento intelectual.',
        detail:
          'Kant aísla el entendimiento y busca los conceptos y principios sin los cuales ningún objeto puede ser pensado.',
        kantRef: 'Crítica de la razón pura · Analítica trascendental',
        hartnackRef: 'Hartnack · La Analítica Trascendental · pp. 43 ss.',
      },
      {
        id: 'concepts',
        x: 1220,
        y: 40,
        source: 'both',
        eyebrow: 'LIBRO PRIMERO',
        title: 'Analítica de los conceptos',
        short: '¿Cuáles son los conceptos puros del entendimiento?',
        detail:
          'No se trata de analizar conceptos ya dados, sino de investigar la capacidad misma del entendimiento para localizar sus conceptos puros y el principio que los organiza.',
        kantRef: 'Crítica de la razón pura · Analítica de los conceptos',
        hartnackRef: 'Hartnack · Deducción metafísica / trascendental',
      },
      {
        id: 'judgment',
        x: 1640,
        y: 40,
        source: 'both',
        eyebrow: '§9',
        title: 'Facultad de juzgar',
        short: 'Pensar mediante conceptos es juzgar.',
        detail:
          'El hilo conductor para descubrir las categorías pasa por las funciones lógicas del juicio. De aquí salen los cuatro títulos: cantidad, cualidad, relación y modalidad.',
        kantRef: 'Crítica de la razón pura · §9',
        hartnackRef: 'Hartnack · pp. 44–49',
      },
      {
        id: 'metaphysical-deduction',
        x: 2050,
        y: 40,
        source: 'hartnack',
        eyebrow: 'NOMBRE DEL COMENTARIO',
        title: '“Deducción metafísica”',
        short: 'Descubrir qué categorías usa el entendimiento.',
        detail:
          'Hartnack denomina así el recorrido que parte de las formas del juicio para obtener la tabla de categorías. Es el problema del descubrimiento, todavía no el de su legitimidad objetiva.',
        hartnackRef: 'Hartnack · La deducción metafísica · pp. 43–57',
      },
      {
        id: 'categories',
        x: 2460,
        y: 40,
        source: 'both',
        eyebrow: '§10',
        title: 'Doce categorías',
        short: 'Conceptos puros originarios de síntesis.',
        detail:
          'La tabla reproduce cuatro títulos con tres momentos: cantidad, cualidad, relación y modalidad. Las categorías permiten pensar la diversidad de la intuición como objeto.',
        kantRef: 'Crítica de la razón pura · §10 · Tabla de las categorías',
        hartnackRef: 'Hartnack · pp. 49–57',
      },
      {
        id: 'transcendental-deduction',
        x: 2880,
        y: 40,
        source: 'both',
        eyebrow: '§§13–27',
        title: 'Deducción trascendental',
        short: '¿Con qué derecho se aplican las categorías a objetos?',
        detail:
          'Descubrir una tabla no basta. La deducción trascendental busca justificar la referencia objetiva de los conceptos puros del entendimiento y su necesidad para la experiencia.',
        kantRef: 'Crítica de la razón pura · §§13–27',
        hartnackRef: 'Hartnack · Deducción trascendental · pp. 58 ss.',
      },
      {
        id: 'principles',
        x: 1220,
        y: 520,
        source: 'both',
        eyebrow: 'LIBRO SEGUNDO',
        title: 'Analítica de los principios',
        short: '¿Cómo funcionan las categorías en la experiencia?',
        detail:
          'Después de justificar las categorías, Kant estudia las condiciones de su aplicación y los principios a priori que estructuran la experiencia.',
        kantRef: 'Crítica de la razón pura · Analítica de los principios',
        hartnackRef: 'Hartnack · Esquematismo y sistema de principios',
      },
      {
        id: 'schematism',
        x: 1680,
        y: 520,
        source: 'both',
        eyebrow: 'MEDIACIÓN',
        title: 'Esquematismo',
        short: 'El tiempo media entre categoría y fenómeno.',
        detail:
          'El esquema trascendental proporciona una mediación entre conceptos puros y objetos sensibles. Esta fase se desarrollará en detalle en una iteración posterior.',
        kantRef: 'Crítica de la razón pura · Esquematismo',
        hartnackRef: 'Hartnack · Esquematismo · p. 70 ss.',
      },
      {
        id: 'system-principles',
        x: 2120,
        y: 520,
        source: 'both',
        eyebrow: 'PRINCIPIOS',
        title: 'Sistema de principios',
        short: 'Axiomas · anticipaciones · analogías · postulados.',
        detail:
          'Las categorías esquematizadas se articulan en cuatro familias de principios del entendimiento puro.',
        kantRef: 'Crítica de la razón pura · Sistema de los principios',
        hartnackRef: 'Hartnack · pp. 79 ss.',
      },
      {
        id: 'experience',
        x: 2640,
        y: 520,
        source: 'both',
        eyebrow: 'HORIZONTE',
        title: 'Experiencia posible',
        short: 'Intuición + conceptos bajo una unidad.',
        detail:
          'La meta no es conocer cosas al margen de toda experiencia, sino explicar las condiciones a priori bajo las cuales una experiencia objetiva es posible.',
        kantRef: 'Crítica de la razón pura · Analítica trascendental',
        hartnackRef: 'Hartnack · Deducción trascendental',
      },
      {
        id: 'systematicity',
        x: 780,
        y: -120,
        source: 'kant',
        eyebrow: 'REGLA DE MÉTODO',
        title: 'Sistema, no rapsodia',
        short: 'La tabla debe derivarse de un principio común.',
        detail:
          'Kant exige que los conceptos puros formen un sistema completo, no una lista reunida por semejanza, hábito o azar. El principio común será la facultad de juzgar.',
        kantRef: 'Crítica de la razón pura · Analítica de los conceptos · guía para su descubrimiento',
      },
    ],
    edges: [
      ['sensibility', 'space-time', 'da bajo'],
      ['space-time', 'analytic', 'deja pendiente pensar'],
      ['analytic', 'concepts', 'se divide en'],
      ['analytic', 'principles', 'se divide en'],
      ['concepts', 'judgment', 'busca un hilo conductor'],
      ['judgment', 'metaphysical-deduction', 'permite reconstruir'],
      ['metaphysical-deduction', 'categories', 'descubre'],
      ['categories', 'transcendental-deduction', 'exige legitimar'],
      ['principles', 'schematism', 'comienza por'],
      ['schematism', 'system-principles', 'permite aplicar'],
      ['transcendental-deduction', 'experience', 'justifica para'],
      ['system-principles', 'experience', 'estructura'],
      ['systematicity', 'judgment', 'exige un principio común'],
    ],
  },

  categories: {
    label: 'Juicios → categorías',
    subtitle: 'Tabla canónica: cantidad · cualidad · relación · modalidad',
    nodes: [
      {
        id: 'quantity-judgments',
        x: 520,
        y: 40,
        source: 'both',
        family: 'Cantidad',
        eyebrow: 'FORMAS DEL JUICIO',
        title: 'Cantidad',
        short: 'Universal · Particular · Singular',
        detail:
          'La cantidad del juicio distingue si se juzga sobre todos, algunos o un individuo determinado.',
        kantRef: 'Crítica de la razón pura · §9',
        hartnackRef: 'Hartnack · pp. 45–50',
      },
      {
        id: 'quantity-categories',
        x: 980,
        y: 40,
        source: 'both',
        family: 'Cantidad',
        eyebrow: 'CATEGORÍAS',
        title: 'Unidad · Pluralidad · Totalidad',
        short: 'Pensar uno · muchos · todos como unidad.',
        detail:
          'Hartnack reconstruye el tránsito: universal → unidad, particular → pluralidad, singular → totalidad. Kant presenta la tríada en su tabla de categorías.',
        kantRef: 'Crítica de la razón pura · §10',
        hartnackRef: 'Hartnack · pp. 50–51',
      },
      {
        id: 'quality-judgments',
        x: 0,
        y: 390,
        source: 'both',
        family: 'Cualidad',
        eyebrow: 'FORMAS DEL JUICIO',
        title: 'Cualidad',
        short: 'Afirmativo · Negativo · Infinito',
        detail:
          'La cualidad distingue afirmar, negar o afirmar mediante un predicado negativo que limita un dominio.',
        kantRef: 'Crítica de la razón pura · §9',
        hartnackRef: 'Hartnack · pp. 45–51',
      },
      {
        id: 'quality-categories',
        x: 460,
        y: 390,
        source: 'both',
        family: 'Cualidad',
        eyebrow: 'CATEGORÍAS',
        title: 'Realidad · Negación · Limitación',
        short: 'Correspondencia con afirmación, negación y juicio infinito.',
        detail:
          'Hartnack explica la limitación como el resultado conceptual de afirmar S dentro del dominio de lo no-P.',
        kantRef: 'Crítica de la razón pura · §10',
        hartnackRef: 'Hartnack · pp. 51–52',
      },
      {
        id: 'relation-judgments',
        x: 1040,
        y: 390,
        source: 'both',
        family: 'Relación',
        eyebrow: 'FORMAS DEL JUICIO',
        title: 'Relación',
        short: 'Categórico · Hipotético · Disyuntivo',
        detail:
          'Kant distingue relación sujeto-predicado, fundamento-consecuencia y coordinación disyuntiva.',
        kantRef: 'Crítica de la razón pura · §9',
        hartnackRef: 'Hartnack · pp. 46, 52–54',
      },
      {
        id: 'relation-categories',
        x: 1500,
        y: 390,
        source: 'both',
        family: 'Relación',
        eyebrow: 'CATEGORÍAS',
        title: 'Sustancia · Causalidad · Comunidad',
        short: 'Inherencia · dependencia · acción recíproca.',
        detail:
          'Hartnack vincula el juicio categórico con sustancia/accidente, el hipotético con causalidad/dependencia y el disyuntivo con comunidad.',
        kantRef: 'Crítica de la razón pura · §10',
        hartnackRef: 'Hartnack · pp. 52–54',
      },
      {
        id: 'modality-judgments',
        x: 520,
        y: 740,
        source: 'both',
        family: 'Modalidad',
        eyebrow: 'FORMAS DEL JUICIO',
        title: 'Modalidad',
        short: 'Problemático · Asertórico · Apodíctico',
        detail:
          'La modalidad no cambia el contenido del juicio: expresa el modo en que se afirma su valor.',
        kantRef: 'Crítica de la razón pura · §9',
        hartnackRef: 'Hartnack · pp. 46–47, 54–56',
      },
      {
        id: 'modality-categories',
        x: 980,
        y: 740,
        source: 'both',
        family: 'Modalidad',
        eyebrow: 'CATEGORÍAS',
        title: 'Posibilidad · Existencia · Necesidad',
        short: 'Con sus correlatos: imposibilidad · no-existencia · contingencia.',
        detail:
          'Hartnack enlaza los juicios problemáticos, asertóricos y apodícticos con posibilidad, existencia y necesidad.',
        kantRef: 'Crítica de la razón pura · §10',
        hartnackRef: 'Hartnack · pp. 54–56',
      },
      {
        id: 'hartnack-cat',
        x: 0,
        y: 1110,
        source: 'hartnack',
        family: 'Ejemplo',
        eyebrow: 'EJEMPLO DE HARTNACK',
        title: '“Todos los gatos son grises”',
        short: 'El juicio universal reúne conceptualmente todos los S como unidad.',
        detail:
          'Hartnack utiliza ejemplos con gatos para hacer visible el movimiento desde formas del juicio hacia categorías. El ejemplo es pedagógico del comentario, no una cita del ejemplo kantiano.',
        hartnackRef: 'Hartnack · pp. 50 ss.',
      },
      {
        id: 'hartnack-table',
        x: 1500,
        y: 1110,
        source: 'hartnack',
        family: 'Ejemplo',
        eyebrow: 'EJEMPLO DE HARTNACK',
        title: '“Esta mesa es amarilla”',
        short: 'Sujeto-predicado como entrada a sustancia / accidente.',
        detail:
          'Hartnack usa la mesa amarilla para explicar por qué el juicio categórico presupone pensar una cosa como sujeto de propiedades.',
        hartnackRef: 'Hartnack · p. 52',
      },
      {
        id: 'discovery-proof',
        x: 750,
        y: 1190,
        source: 'both',
        family: 'Distinción',
        eyebrow: 'ADVERTENCIA',
        title: 'Descubrimiento ≠ legitimación',
        short: 'La tabla no prueba todavía la validez objetiva de las categorías.',
        detail:
          'Hartnack lo formula explícitamente como diferencia entre descubrir qué categorías usamos y probar que su empleo es legítimo. Kant abre la deducción trascendental precisamente porque los conceptos a priori necesitan justificar su referencia a objetos.',
        kantRef: 'Crítica de la razón pura · §13',
        hartnackRef: 'Hartnack · pp. 49, 56–57',
      },
    ],
    edges: [
      ['quantity-judgments', 'quantity-categories', 'corresponde a'],
      ['quality-judgments', 'quality-categories', 'corresponde a'],
      ['relation-judgments', 'relation-categories', 'corresponde a'],
      ['modality-judgments', 'modality-categories', 'corresponde a'],
      ['quantity-categories', 'discovery-proof', 'todavía no basta'],
      ['quality-categories', 'discovery-proof', 'todavía no basta'],
      ['relation-categories', 'discovery-proof', 'todavía no basta'],
      ['modality-categories', 'discovery-proof', 'todavía no basta'],
      ['hartnack-cat', 'quantity-categories', 'ilustra'],
      ['hartnack-table', 'relation-categories', 'ilustra'],
    ],
  },
  deduction: {
    label: 'Deducción trascendental',
    subtitle: 'Quid juris · síntesis · apercepción · validez objetiva',
    nodes: [
      {
        id: 'quid-juris',
        x: 0,
        y: 260,
        source: 'kant',
        eyebrow: '§13 · QUAESTIO JURIS',
        title: 'Cuestión de derecho',
        short: 'No basta poseer un concepto: hay que justificar su empleo.',
        detail:
          'Kant toma del lenguaje jurídico la idea de deducción. Para los conceptos a priori la pregunta decisiva no es sólo de hecho —que los usamos—, sino de derecho: con qué legitimidad pueden referirse a objetos.',
        kantRef: 'Crítica de la razón pura · §13 · Principios de una deducción trascendental en general',
      },
      {
        id: 'a-priori-claim',
        x: 420,
        y: 260,
        source: 'both',
        eyebrow: 'PROBLEMA',
        title: 'Categorías a priori',
        short: 'No proceden de la experiencia, pero pretenden valer para ella.',
        detail:
          'Precisamente porque las categorías no son obtenidas empíricamente, la experiencia no puede servir como certificado de su legitimidad. La deducción debe explicar cómo pueden referirse a objetos antes de haber sido tomadas de ellos.',
        kantRef: 'Crítica de la razón pura · §13',
        hartnackRef: 'Hartnack · Deducción trascendental · pp. 58 ss.',
      },
      {
        id: 'manifold',
        x: 900,
        y: 20,
        source: 'both',
        eyebrow: 'SENSIBILIDAD',
        title: 'Diversidad de la intuición',
        short: 'Lo múltiple es dado bajo espacio y tiempo.',
        detail:
          'La sensibilidad proporciona diversidad. Por sí sola, sin una función que la enlace, esa diversidad todavía no constituye conocimiento objetivo.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental',
        hartnackRef: 'Hartnack · Deducción trascendental',
      },
      {
        id: 'synthesis',
        x: 900,
        y: 510,
        source: 'both',
        eyebrow: 'ENLACE',
        title: 'Síntesis de lo múltiple',
        short: 'La diversidad debe ser combinada en una unidad.',
        detail:
          'La deducción desplaza la atención desde una simple multiplicidad de impresiones hacia el acto de combinarlas. Sin síntesis no habría unidad de objeto ni unidad de conciencia.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental',
        hartnackRef: 'Hartnack · síntesis, objeto y unidad de conciencia · pp. 64–68 aprox.',
      },
      {
        id: 'apperception',
        x: 1380,
        y: 260,
        source: 'both',
        eyebrow: 'UNIDAD ORIGINARIA',
        title: 'Apercepción trascendental',
        short: 'La diversidad debe poder pertenecer a una misma conciencia.',
        detail:
          'La unidad de conciencia no es una percepción empírica adicional. Funciona como condición a priori para que múltiples representaciones puedan pertenecer a una experiencia unificada y ser pensadas como conocimiento de objetos.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental · unidad de apercepción',
        hartnackRef: 'Hartnack · apercepción pura o trascendental · p. 68 aprox.',
      },
      {
        id: 'categories-rules',
        x: 1840,
        y: 20,
        source: 'both',
        eyebrow: 'ENTENDIMIENTO',
        title: 'Categorías como reglas de síntesis',
        short: 'La unidad no es arbitraria: se articula mediante conceptos puros.',
        detail:
          'Las categorías expresan funciones universales bajo las cuales puede enlazarse la diversidad. Por eso no son añadidos posteriores a una experiencia ya formada, sino condiciones del pensar objetos en una experiencia posible.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental',
        hartnackRef: 'Hartnack · categorías como condiciones necesarias del conocimiento',
      },
      {
        id: 'object-unity',
        x: 1840,
        y: 510,
        source: 'both',
        eyebrow: 'OBJETIVIDAD',
        title: 'Unidad del objeto',
        short: 'Ser objeto implica una síntesis regida y coherente de representaciones.',
        detail:
          'La referencia a un objeto exige que nuestras representaciones no estén reunidas al azar. Deben concordar bajo una unidad necesaria. En Hartnack, unidad del objeto y unidad de conciencia se determinan mutuamente.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental (A)',
        hartnackRef: 'Hartnack · deducción subjetiva / objetiva · pp. 65–68 aprox.',
      },
      {
        id: 'experience',
        x: 2320,
        y: 260,
        source: 'both',
        eyebrow: 'RESULTADO',
        title: 'Experiencia posible',
        short: 'Intuición sensible enlazada según conceptos.',
        detail:
          'El conocimiento empírico exige simultáneamente algo dado en la intuición y una unidad conceptual. Ni la intuición sola ni las categorías solas bastan para producir experiencia.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental',
        hartnackRef: 'Hartnack · p. 68 aprox.',
      },
      {
        id: 'objective-validity',
        x: 2800,
        y: 260,
        source: 'both',
        eyebrow: 'QUID JURIS RESUELTO',
        title: 'Validez objetiva',
        short: 'Las categorías valen para objetos porque son condiciones de experiencia.',
        detail:
          'La deducción busca mostrar que aquello sin lo cual no habría experiencia objetiva vale necesariamente para todo objeto que pueda ser objeto de esa experiencia. Éste es el núcleo de la legitimación trascendental.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental',
        hartnackRef: 'Hartnack · conclusión de la deducción trascendental',
      },
      {
        id: 'empirical-limit',
        x: 3280,
        y: 260,
        source: 'both',
        eyebrow: 'LÍMITE',
        title: 'Uso limitado a la experiencia',
        short: 'Las categorías no conocen objetos desligadas de la sensibilidad.',
        detail:
          'La deducción no concede a las categorías un uso ilimitado. Su validez cognoscitiva queda ligada a objetos de experiencia posible; separadas de las condiciones sensibles no determinan objeto alguno.',
        kantRef: 'Crítica de la razón pura · límite del uso de las categorías',
        hartnackRef: 'Hartnack · categorías y conocimiento empírico',
      },
      {
        id: 'orange',
        x: 1760,
        y: 860,
        source: 'hartnack',
        eyebrow: 'EJEMPLO DE HARTNACK',
        title: 'La naranja como objeto',
        short: 'Color, olor, sabor y tacto se reúnen bajo una regla conceptual.',
        detail:
          'Hartnack explica que decir “veo una naranja” no identifica el objeto con una sola impresión sensible. Llamarla naranja reúne una multiplicidad de datos bajo un concepto y permite entenderla como un objeto.',
        hartnackRef: 'Hartnack · ejemplo de la naranja · deducción trascendental',
      },
    ],
    edges: [
      ['quid-juris', 'a-priori-claim', 'plantea la legitimidad de'],
      ['a-priori-claim', 'manifold', 'debe poder aplicarse a'],
      ['manifold', 'synthesis', 'requiere enlace'],
      ['synthesis', 'apperception', 'presupone unidad de'],
      ['apperception', 'categories-rules', 'se expresa mediante'],
      ['apperception', 'object-unity', 'hace posible'],
      ['categories-rules', 'object-unity', 'determinan la síntesis de'],
      ['object-unity', 'experience', 'permite conocimiento de'],
      ['categories-rules', 'experience', 'condicionan'],
      ['experience', 'objective-validity', 'fundamenta'],
      ['objective-validity', 'empirical-limit', 'queda restringida por'],
      ['orange', 'object-unity', 'ilustra'],
      ['synthesis', 'object-unity', 'produce unidad de'],
    ],
  },
  apperception: {
    label: 'Síntesis y apercepción',
    subtitle: 'Aprehensión · reproducción · reconocimiento · “Yo pienso”',
    nodes: [
      {
        id: 'a-route',
        x: 0,
        y: 260,
        source: 'both',
        eyebrow: 'PRIMERA EDICIÓN · A',
        title: 'Ruta de la triple síntesis',
        short: 'Kant analiza aprehensión, reproducción y reconocimiento.',
        detail:
          'Esta secuencia pertenece a la deducción de la primera edición. Hartnack la usa para reconstruir pedagógicamente cómo una multiplicidad sensible puede convertirse en una experiencia unificada de objetos.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental (A)',
        hartnackRef: 'Hartnack · Deducción trascendental · reconstrucción de la primera edición',
      },
      {
        id: 'time-manifold',
        x: 430,
        y: 20,
        source: 'both',
        eyebrow: 'SENTIDO INTERNO',
        title: 'Multiplicidad en el tiempo',
        short: 'Las representaciones aparecen sucesivamente y deben poder reunirse.',
        detail:
          'Todo lo dado al sentido interno queda sometido al tiempo. Para representar una diversidad como diversidad hay que recorrerla y mantener sus momentos relacionados.',
        kantRef: 'Crítica de la razón pura · Deducción (A) · síntesis de aprehensión',
        hartnackRef: 'Hartnack · intuición como síntesis de una multiplicidad temporal',
      },
      {
        id: 'apprehension',
        x: 880,
        y: 20,
        source: 'both',
        eyebrow: 'SÍNTESIS I',
        title: 'Aprehensión',
        short: 'Recorrer y reunir lo múltiple en una intuición.',
        detail:
          'La aprehensión recoge sucesivamente la diversidad dada. Sin este recorrido y reunión no habría una representación unitaria de lo múltiple, ni siquiera de espacio y tiempo.',
        kantRef: 'Crítica de la razón pura · Deducción (A) · 1. Síntesis de aprehensión',
        hartnackRef: 'Hartnack · aprehensión como primer momento de la síntesis',
      },
      {
        id: 'reproduction',
        x: 1330,
        y: 20,
        source: 'both',
        eyebrow: 'SÍNTESIS II',
        title: 'Reproducción',
        short: 'Retener o traer lo anterior mientras aparece lo siguiente.',
        detail:
          'Si cada representación precedente desapareciera por completo al surgir la siguiente, nunca podríamos formar una línea, un número o una secuencia. La imaginación debe reproducir según reglas.',
        kantRef: 'Crítica de la razón pura · Deducción (A) · 2. Síntesis de reproducción',
        hartnackRef: 'Hartnack · reproducción como segundo momento de la síntesis',
      },
      {
        id: 'recognition',
        x: 1780,
        y: 20,
        source: 'both',
        eyebrow: 'SÍNTESIS III',
        title: 'Reconocimiento',
        short: 'Reconocer lo reunido como perteneciente a una misma unidad.',
        detail:
          'No basta reproducir representaciones. Hay que reconocer que lo pensado ahora pertenece a la misma operación iniciada antes. Esa conciencia de identidad hace posible el concepto y la unidad del conjunto.',
        kantRef: 'Crítica de la razón pura · Deducción (A) · 3. Síntesis de reconocimiento',
        hartnackRef: 'Hartnack · reconocimiento y unidad de conciencia',
      },
      {
        id: 'imagination',
        x: 1330,
        y: 470,
        source: 'kant',
        eyebrow: 'FACULTAD DE MEDIACIÓN',
        title: 'Imaginación',
        short: 'Hace posible la reproducción y participa en la síntesis.',
        detail:
          'En la deducción de la primera edición la imaginación ocupa un papel decisivo al hacer posible la reproducción de representaciones y la continuidad requerida por la experiencia.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental (A)',
      },
      {
        id: 'b-route',
        x: 0,
        y: 820,
        source: 'both',
        eyebrow: 'SEGUNDA EDICIÓN · B',
        title: 'Ruta de la unidad de apercepción',
        short: 'La segunda edición reorganiza el argumento alrededor del “Yo pienso”.',
        detail:
          'La segunda edición no repite simplemente la triple síntesis de A. El centro argumental pasa a la unidad sintética originaria de apercepción como condición bajo la cual una diversidad puede pertenecer a una misma conciencia.',
        kantRef: 'Crítica de la razón pura · §16 ss.',
        hartnackRef: 'Hartnack · apercepción trascendental como condición de experiencia',
      },
      {
        id: 'i-think',
        x: 520,
        y: 820,
        source: 'both',
        eyebrow: '§16',
        title: '“Yo pienso”',
        short: 'Debe poder acompañar todas mis representaciones.',
        detail:
          'El punto no es que estemos diciendo conscientemente “yo pienso” a cada instante. La tesis es estructural: una representación que no pudiera pertenecer a una misma autoconciencia no podría contar plenamente como representación para mí.',
        kantRef: 'Crítica de la razón pura · §16',
        hartnackRef: 'Hartnack · apercepción pura / unidad de conciencia',
      },
      {
        id: 'synthetic-unity',
        x: 1040,
        y: 820,
        source: 'both',
        eyebrow: 'APERCEPCIÓN ORIGINARIA',
        title: 'Unidad sintética',
        short: 'Una conciencia común reúne representaciones distintas.',
        detail:
          'La unidad no surge por simple asociación psicológica. Es la condición a priori bajo la cual representaciones distintas pueden ser enlazadas como pertenecientes a una sola experiencia.',
        kantRef: 'Crítica de la razón pura · §16 · unidad sintética originaria de apercepción',
        hartnackRef: 'Hartnack · unidad de conciencia como condición necesaria',
      },
      {
        id: 'objective-unity',
        x: 1560,
        y: 820,
        source: 'kant',
        eyebrow: '§19',
        title: 'Unidad objetiva',
        short: 'El juicio lleva conocimientos a una unidad válida para un objeto.',
        detail:
          'Kant distingue una conexión meramente subjetiva por asociación de una unidad objetiva. Juzgar consiste en relacionar representaciones con la unidad objetiva de apercepción.',
        kantRef: 'Crítica de la razón pura · §19',
      },
      {
        id: 'object-x',
        x: 2240,
        y: 260,
        source: 'both',
        eyebrow: 'OBJETO',
        title: 'Objeto = unidad reglada',
        short: 'Un objeto exige que las representaciones concuerden bajo una regla.',
        detail:
          'La objetividad no consiste en una impresión aislada. Conocer un objeto exige una unidad necesaria entre representaciones. Hartnack expresa esta idea diciendo que síntesis, unidad del objeto y unidad de conciencia se determinan mutuamente.',
        kantRef: 'Crítica de la razón pura · Deducción (A) · objeto trascendental = X',
        hartnackRef: 'Hartnack · síntesis, objeto y unidad de conciencia',
      },
      {
        id: 'categories',
        x: 2240,
        y: 700,
        source: 'both',
        eyebrow: 'REGLAS DEL ENTENDIMIENTO',
        title: 'Categorías',
        short: 'Las funciones de síntesis se articulan mediante conceptos puros.',
        detail:
          'Las categorías no flotan fuera de la experiencia. Expresan reglas bajo las cuales la diversidad puede alcanzar unidad objetiva y, por eso, constituyen condiciones del pensar objetos.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental',
        hartnackRef: 'Hartnack · categorías como condiciones necesarias del conocimiento',
      },
      {
        id: 'experience-result',
        x: 2780,
        y: 480,
        source: 'both',
        eyebrow: 'RESULTADO',
        title: 'Experiencia objetiva',
        short: 'Diversidad sensible + síntesis + unidad de conciencia + categorías.',
        detail:
          'La experiencia requiere conjuntamente intuición y entendimiento. En Hartnack, intuición sin categorías no produce conocimiento y categorías sin intuición tampoco.',
        kantRef: 'Crítica de la razón pura · Deducción trascendental',
        hartnackRef: 'Hartnack · conclusión de la deducción trascendental',
      },
      {
        id: 'not-soul',
        x: 1040,
        y: 1190,
        source: 'both',
        eyebrow: 'ADVERTENCIA',
        title: 'El “Yo pienso” no es un alma conocida',
        short: 'La condición de pensar no es todavía conocimiento de un objeto llamado “yo”.',
        detail:
          'La unidad trascendental de apercepción funciona como condición formal del conocimiento. Convertirla directamente en conocimiento de una sustancia pensante rebasa lo que la deducción permite.',
        kantRef: 'Crítica de la razón pura · Paralogismos · límite del “Yo pienso”',
        hartnackRef: 'Hartnack · paralogismos y apercepción pura',
      },
    ],
    edges: [
      ['a-route', 'time-manifold', 'parte de'],
      ['time-manifold', 'apprehension', 'es recorrida por'],
      ['apprehension', 'reproduction', 'requiere conservar'],
      ['reproduction', 'recognition', 'culmina en'],
      ['reproduction', 'imagination', 'depende de'],
      ['recognition', 'object-x', 'contribuye a unidad de'],
      ['b-route', 'i-think', 'se centra en'],
      ['i-think', 'synthetic-unity', 'expresa'],
      ['synthetic-unity', 'objective-unity', 'hace posible'],
      ['objective-unity', 'object-x', 'fundamenta'],
      ['synthetic-unity', 'categories', 'se articula mediante'],
      ['categories', 'object-x', 'regulan'],
      ['object-x', 'experience-result', 'hace posible'],
      ['categories', 'experience-result', 'condicionan'],
      ['synthetic-unity', 'not-soul', 'no debe confundirse con'],
    ],
  },
  schematism: {
    label: 'Esquematismo y principios',
    subtitle: 'Tiempo · esquemas · cuatro familias de principios',
    nodes: [
      {
        id: 'schema-problem',
        x: 0,
        y: 300,
        source: 'both',
        eyebrow: 'PUENTE',
        title: 'Categoría ↔ fenómeno',
        short: 'Las categorías necesitan una condición sensible de aplicación.',
        detail:
          'Después de justificar la validez de las categorías, queda explicar cómo conceptos puros pueden aplicarse a objetos sensibles. El esquematismo introduce una mediación temporal que hace posible esa aplicación.',
        kantRef: 'Crítica de la razón pura · Esquematismo de los conceptos puros del entendimiento',
        hartnackRef: 'Hartnack · Esquematismo · pp. 70 ss.',
      },
      {
        id: 'time-schema',
        x: 470,
        y: 300,
        source: 'both',
        eyebrow: 'MEDIACIÓN TEMPORAL',
        title: 'Esquema trascendental',
        short: 'El esquema determina temporalmente cómo una categoría puede valer para fenómenos.',
        detail:
          'Kant resume los esquemas como determinaciones a priori del tiempo. Hartnack los presenta como la puesta en relación de las categorías con el tiempo puro, forma a priori de la intuición.',
        kantRef: 'Crítica de la razón pura · Esquematismo · determinaciones del tiempo',
        hartnackRef: 'Hartnack · Esquematismo · categorías puestas en relación con el tiempo puro',
      },
      {
        id: 'quantity-schema',
        x: 980,
        y: 0,
        source: 'kant',
        family: 'Cantidad',
        eyebrow: 'SERIE DEL TIEMPO',
        title: 'Cantidad → serie',
        short: 'Producción sucesiva del tiempo en la aprehensión.',
        detail:
          'Para la magnitud, Kant vincula el esquema con la producción sucesiva del tiempo al aprehender un objeto. La familia de cantidad queda así relacionada con la serie temporal.',
        kantRef: 'Crítica de la razón pura · Esquematismo · esquema de la magnitud',
      },
      {
        id: 'quality-schema',
        x: 980,
        y: 250,
        source: 'both',
        family: 'Cualidad',
        eyebrow: 'CONTENIDO DEL TIEMPO',
        title: 'Cualidad → contenido',
        short: 'La sensación llena el tiempo con un grado.',
        detail:
          'La cualidad se esquematiza mediante el llenado del tiempo por la sensación. Hartnack desarrolla esta idea en las Anticipaciones: toda impresión sensible posee un grado o intensidad.',
        kantRef: 'Crítica de la razón pura · Esquematismo · esquema de la cualidad',
        hartnackRef: 'Hartnack · Anticipaciones de la percepción · grado de la sensación',
      },
      {
        id: 'relation-schema',
        x: 980,
        y: 500,
        source: 'both',
        family: 'Relación',
        eyebrow: 'ORDEN DEL TIEMPO',
        title: 'Relación → orden',
        short: 'Las percepciones se enlazan según reglas temporales.',
        detail:
          'La relación articula el orden temporal: permanencia, sucesión y coexistencia. En esa estructura se insertan sustancia, causalidad y comunidad.',
        kantRef: 'Crítica de la razón pura · Esquematismo · esquemas de relación',
        hartnackRef: 'Hartnack · sustancia, causalidad e interacción en el tiempo',
      },
      {
        id: 'modality-schema',
        x: 980,
        y: 750,
        source: 'both',
        family: 'Modalidad',
        eyebrow: 'CONJUNTO DEL TIEMPO',
        title: 'Modalidad → pertenencia al tiempo',
        short: 'Posibilidad, existencia y necesidad según su relación con el tiempo y la experiencia.',
        detail:
          'La modalidad no añade contenido al objeto, sino que determina cómo pertenece al tiempo y a las condiciones de la experiencia: posible, real o necesario.',
        kantRef: 'Crítica de la razón pura · Esquematismo · modalidad',
        hartnackRef: 'Hartnack · modalidad y postulados del pensamiento empírico',
      },
      {
        id: 'substance-schema',
        x: 1480,
        y: 430,
        source: 'both',
        eyebrow: 'RELACIÓN I',
        title: 'Sustancia → permanencia',
        short: 'Lo real permanente sirve de sustrato del cambio.',
        detail:
          'El esquema de sustancia es la permanencia de lo real en el tiempo. Hartnack lo explica como aquello que permanece mientras cambian las propiedades.',
        kantRef: 'Crítica de la razón pura · Esquematismo · sustancia',
        hartnackRef: 'Hartnack · Esquematismo · permanencia del sustrato',
      },
      {
        id: 'causality-schema',
        x: 1480,
        y: 650,
        source: 'both',
        eyebrow: 'RELACIÓN II',
        title: 'Causalidad → sucesión reglada',
        short: 'A un estado sigue otro según una regla.',
        detail:
          'La causalidad se esquematiza como una sucesión determinada por regla. No es mera secuencia observada, sino una conexión temporal objetivamente reglada.',
        kantRef: 'Crítica de la razón pura · Esquematismo · causalidad',
        hartnackRef: 'Hartnack · Esquematismo · sucesión de eventos según una regla',
      },
      {
        id: 'community-schema',
        x: 1480,
        y: 870,
        source: 'both',
        eyebrow: 'RELACIÓN III',
        title: 'Comunidad → coexistencia',
        short: 'Determinaciones simultáneas bajo acción recíproca.',
        detail:
          'La comunidad se expresa temporalmente como coexistencia conforme a una regla universal de acción recíproca.',
        kantRef: 'Crítica de la razón pura · Esquematismo · comunidad',
        hartnackRef: 'Hartnack · Esquematismo · interacción recíproca',
      },
      {
        id: 'principles-root',
        x: 2020,
        y: 300,
        source: 'both',
        eyebrow: 'ANALÍTICA DE LOS PRINCIPIOS',
        title: 'Sistema de principios',
        short: 'Las cuatro familias de categorías reaparecen como cuatro familias de principios.',
        detail:
          'Kant organiza los principios del entendimiento puro en Axiomas, Anticipaciones, Analogías y Postulados. Hartnack conserva explícitamente esta correspondencia.',
        kantRef: 'Crítica de la razón pura · Sistema de todos los principios del entendimiento puro',
        hartnackRef: 'Hartnack · Sistema de todos los principios · pp. 79 ss.',
      },
      {
        id: 'math-principles',
        x: 2520,
        y: 50,
        source: 'both',
        eyebrow: 'PRINCIPIOS MATEMÁTICOS',
        title: 'Cantidad + cualidad',
        short: 'Axiomas y Anticipaciones: determinación cuantitativa de los fenómenos.',
        detail:
          'Kant llama matemáticos a los principios vinculados con cantidad y cualidad. Son constitutivos respecto de la intuición fenoménica y permiten su determinación como magnitud.',
        kantRef: 'Crítica de la razón pura · principios matemáticos',
        hartnackRef: 'Hartnack · principios matemáticos · constitutivos',
      },
      {
        id: 'axioms',
        x: 3020,
        y: 0,
        source: 'both',
        family: 'Cantidad',
        eyebrow: 'I · AXIOMAS',
        title: 'Axiomas de la intuición',
        short: 'Los fenómenos se comprenden como magnitudes extensivas.',
        detail:
          'El principio de los axiomas hace posible comprender lo intuido como extendido en espacio y tiempo. Hartnack lo relaciona con la construcción de magnitudes extensivas y con la posibilidad de la geometría.',
        kantRef: 'Crítica de la razón pura · Axiomas de la intuición',
        hartnackRef: 'Hartnack · 4.1 Axiomas de la intuición',
      },
      {
        id: 'anticipations',
        x: 3020,
        y: 250,
        source: 'both',
        family: 'Cualidad',
        eyebrow: 'II · ANTICIPACIONES',
        title: 'Anticipaciones de la percepción',
        short: 'Lo real de la sensación posee magnitud intensiva: un grado.',
        detail:
          'No podemos anticipar cuál sensación concreta aparecerá, pero sí que toda sensación dada tendrá un grado determinado. Hartnack enfatiza precisamente esta intensidad desde cero hasta un grado definido.',
        kantRef: 'Crítica de la razón pura · Anticipaciones de la percepción',
        hartnackRef: 'Hartnack · 4.2 Anticipaciones de la percepción',
      },
      {
        id: 'dynamic-principles',
        x: 2520,
        y: 580,
        source: 'both',
        eyebrow: 'PRINCIPIOS DINÁMICOS',
        title: 'Relación + modalidad',
        short: 'Analogías y Postulados regulan relaciones de existencia.',
        detail:
          'Los principios dinámicos no construyen a priori la existencia de fenómenos. Regulan cómo debe estar conectada esa existencia en la experiencia.',
        kantRef: 'Crítica de la razón pura · principios dinámicos',
        hartnackRef: 'Hartnack · principios dinámicos y condiciones de la física',
      },
      {
        id: 'analogies',
        x: 3020,
        y: 550,
        source: 'both',
        family: 'Relación',
        eyebrow: 'III · ANALOGÍAS',
        title: 'Analogías de la experiencia',
        short: 'Permanencia · sucesión · simultaneidad bajo conexiones necesarias.',
        detail:
          'Las analogías regulan relaciones temporales de existencia. Hartnack las conecta con sustancia, causalidad e interacción y con los modos temporales de duración, sucesión y simultaneidad.',
        kantRef: 'Crítica de la razón pura · Analogías de la experiencia',
        hartnackRef: 'Hartnack · 4.3 Analogías de la experiencia',
      },
      {
        id: 'postulates',
        x: 3020,
        y: 800,
        source: 'both',
        family: 'Modalidad',
        eyebrow: 'IV · POSTULADOS',
        title: 'Postulados del pensamiento empírico',
        short: 'Posible · real · necesario según condiciones de experiencia.',
        detail:
          'Los postulados precisan las modalidades de un objeto en relación con la experiencia: concordancia con sus condiciones formales, conexión con sus condiciones materiales y conexión necesaria según condiciones universales.',
        kantRef: 'Crítica de la razón pura · Postulados del pensamiento empírico',
        hartnackRef: 'Hartnack · 4.4 Postulados del pensamiento empírico',
      },
      {
        id: 'schema-limit',
        x: 2020,
        y: 930,
        source: 'kant',
        eyebrow: 'DOBLE FUNCIÓN',
        title: 'El esquema realiza y limita',
        short: 'Hace aplicable la categoría, pero sólo dentro de condiciones sensibles.',
        detail:
          'El esquema da significación objetiva a la categoría al conectarla con la sensibilidad. Esa misma mediación restringe su uso: sin condiciones sensibles, la categoría queda como función intelectual sin objeto determinado.',
        kantRef: 'Crítica de la razón pura · conclusión del Esquematismo',
      },
    ],
    edges: [
      ['schema-problem', 'time-schema', 'requiere'],
      ['time-schema', 'quantity-schema', 'serie'],
      ['time-schema', 'quality-schema', 'contenido'],
      ['time-schema', 'relation-schema', 'orden'],
      ['time-schema', 'modality-schema', 'conjunto'],
      ['relation-schema', 'substance-schema', 'permanencia'],
      ['relation-schema', 'causality-schema', 'sucesión'],
      ['relation-schema', 'community-schema', 'coexistencia'],
      ['quantity-schema', 'principles-root', 'se despliega en'],
      ['quality-schema', 'principles-root', 'se despliega en'],
      ['relation-schema', 'principles-root', 'se despliega en'],
      ['modality-schema', 'principles-root', 'se despliega en'],
      ['principles-root', 'math-principles', 'cantidad + cualidad'],
      ['math-principles', 'axioms', 'cantidad'],
      ['math-principles', 'anticipations', 'cualidad'],
      ['principles-root', 'dynamic-principles', 'relación + modalidad'],
      ['dynamic-principles', 'analogies', 'relación'],
      ['dynamic-principles', 'postulates', 'modalidad'],
      ['time-schema', 'schema-limit', 'a la vez'],
    ],
  },
}

export const GUIDE_STEPS = [
  {
    mode: 'architecture',
    nodeId: 'sensibility',
    title: 'Empiece donde terminó la Estética',
    body:
      'La Analítica no reemplaza a la sensibilidad. Parte de algo dado bajo espacio y tiempo y pregunta cómo puede ser pensado.',
  },
  {
    mode: 'architecture',
    nodeId: 'analytic',
    title: 'Entre al entendimiento',
    body:
      'La Analítica trascendental aísla el aporte a priori del entendimiento.',
  },
  {
    mode: 'architecture',
    nodeId: 'concepts',
    title: 'Primer libro: conceptos',
    body:
      'La primera tarea es localizar los conceptos puros del entendimiento y mostrar que forman un sistema.',
  },
  {
    mode: 'architecture',
    nodeId: 'judgment',
    title: 'El hilo conductor es el juicio',
    body:
      'Kant representa el entendimiento como facultad de juzgar. Las formas del juicio sirven como hilo para descubrir las categorías.',
  },
  {
    mode: 'categories',
    nodeId: 'quantity-judgments',
    title: 'Cuatro títulos, tres momentos',
    body:
      'Abra ahora el atlas. Cada grupo de formas del juicio tendrá una tríada correspondiente de categorías.',
  },
  {
    mode: 'categories',
    nodeId: 'relation-categories',
    title: 'Mire una correspondencia fuerte',
    body:
      'Categórico, hipotético y disyuntivo se conectan con sustancia, causalidad y comunidad.',
  },
  {
    mode: 'categories',
    nodeId: 'hartnack-table',
    title: 'Distinga comentario de texto primario',
    body:
      'El chip HARTNACK marca ejemplos pedagógicos propios del comentarista. Puede filtrarlos sin confundirlos con formulaciones de Kant.',
  },
  {
    mode: 'categories',
    nodeId: 'discovery-proof',
    title: 'La tabla no termina el problema',
    body:
      'Haber descubierto las categorías no demuestra todavía que puedan aplicarse objetivamente. Aquí empieza la siguiente fase: la deducción trascendental.',
  },
  {
    mode: 'architecture',
    nodeId: 'transcendental-deduction',
    title: 'La pregunta cambia',
    body:
      'La deducción metafísica descubrió qué categorías usamos. Ahora la deducción trascendental pregunta con qué derecho pueden valer objetivamente.',
  },
  {
    mode: 'deduction',
    nodeId: 'quid-juris',
    title: 'Quid juris',
    body:
      'Kant formula el problema en términos jurídicos: no basta el hecho de usar las categorías; hay que justificar la legitimidad de su empleo.',
  },
  {
    mode: 'deduction',
    nodeId: 'manifold',
    title: 'Primero: algo tiene que ser dado',
    body:
      'La diversidad sensible llega bajo espacio y tiempo. Una categoría sola no produce ningún objeto conocido.',
  },
  {
    mode: 'deduction',
    nodeId: 'synthesis',
    title: 'Segundo: la diversidad debe enlazarse',
    body:
      'La experiencia no es una colección de impresiones yuxtapuestas. Requiere síntesis: una combinación de lo múltiple.',
  },
  {
    mode: 'deduction',
    nodeId: 'apperception',
    title: 'Tercero: una misma conciencia',
    body:
      'La síntesis debe poder pertenecer a una unidad de conciencia. Éste es el papel de la apercepción trascendental.',
  },
  {
    mode: 'deduction',
    nodeId: 'categories-rules',
    title: 'Cuarto: reglas del entendimiento',
    body:
      'Las categorías proporcionan funciones universales bajo las cuales esa síntesis puede constituir conocimiento objetivo.',
  },
  {
    mode: 'deduction',
    nodeId: 'object-unity',
    title: 'Objeto significa unidad',
    body:
      'Conocer un objeto exige que las representaciones estén enlazadas bajo una unidad necesaria y no reunidas arbitrariamente.',
  },
  {
    mode: 'deduction',
    nodeId: 'orange',
    title: 'Hartnack lo vuelve concreto',
    body:
      'Su ejemplo de la naranja muestra cómo datos sensibles distintos son entendidos como un mismo objeto bajo una regla conceptual.',
  },
  {
    mode: 'deduction',
    nodeId: 'objective-validity',
    title: 'La legitimación',
    body:
      'Si las categorías son condiciones sin las cuales no habría experiencia de objetos, poseen validez objetiva para todo objeto de experiencia posible.',
  },
  {
    mode: 'deduction',
    nodeId: 'empirical-limit',
    title: 'Pero no valen sin límite',
    body:
      'La misma solución establece una frontera: las categorías no producen conocimiento de objetos separadas de toda sensibilidad.',
  },
  {
    mode: 'apperception',
    nodeId: 'a-route',
    title: 'Ahora abrimos la maquinaria de la síntesis',
    body:
      'La primera edición desarrolla una ruta mediante tres momentos: aprehensión, reproducción y reconocimiento.',
  },
  {
    mode: 'apperception',
    nodeId: 'apprehension',
    title: 'Aprehensión',
    body:
      'La multiplicidad debe recorrerse y reunirse. Sin esta operación no aparecería como una diversidad unitaria para nosotros.',
  },
  {
    mode: 'apperception',
    nodeId: 'reproduction',
    title: 'Reproducción',
    body:
      'Lo anterior debe poder mantenerse o reproducirse mientras llega lo siguiente; de otro modo no habría línea, número ni secuencia completa.',
  },
  {
    mode: 'apperception',
    nodeId: 'recognition',
    title: 'Reconocimiento',
    body:
      'La conciencia debe reconocer que las representaciones sucesivas pertenecen a una misma operación; ahí emerge la unidad conceptual.',
  },
  {
    mode: 'apperception',
    nodeId: 'b-route',
    title: 'La segunda edición cambia el énfasis',
    body:
      'Kant reorganiza la deducción alrededor de la unidad sintética originaria de apercepción. No conviene mezclar A y B como si fueran el mismo recorrido textual.',
  },
  {
    mode: 'apperception',
    nodeId: 'i-think',
    title: 'El “Yo pienso”',
    body:
      'No es una observación psicológica. Nombra la condición de que todas mis representaciones puedan pertenecer a una misma autoconciencia.',
  },
  {
    mode: 'apperception',
    nodeId: 'synthetic-unity',
    title: 'Unidad sintética',
    body:
      'Representaciones diferentes sólo forman una experiencia si pueden reunirse bajo una unidad de conciencia que no sea meramente accidental.',
  },
  {
    mode: 'apperception',
    nodeId: 'objective-unity',
    title: 'De lo subjetivo a lo objetivo',
    body:
      'En §19 Kant caracteriza el juicio por su referencia a la unidad objetiva de apercepción, no por una simple asociación privada.',
  },
  {
    mode: 'apperception',
    nodeId: 'object-x',
    title: 'El objeto como unidad',
    body:
      'Conocer un objeto exige que las representaciones estén conectadas según una regla y no simplemente yuxtapuestas.',
  },
  {
    mode: 'apperception',
    nodeId: 'not-soul',
    title: 'Una advertencia necesaria',
    body:
      'La apercepción hace posible conocimiento, pero no autoriza a convertir el “Yo pienso” en conocimiento metafísico de una sustancia llamada alma.',
  },
  {
    mode: 'apperception',
    nodeId: 'experience-result',
    title: 'Resultado de la Fase V',
    body:
      'La experiencia objetiva aparece como una estructura conjunta: intuición, síntesis, unidad de conciencia, categorías y objeto.',
  },
  {
    mode: 'schematism',
    nodeId: 'schema-problem',
    title: 'Todavía falta un puente',
    body:
      'Una categoría pura no es una imagen sensible. El esquematismo explica bajo qué condición temporal puede aplicarse a fenómenos.',
  },
  {
    mode: 'schematism',
    nodeId: 'time-schema',
    title: 'El mediador es temporal',
    body:
      'Kant resume los esquemas como determinaciones a priori del tiempo. El tiempo permite conectar las categorías con objetos sensibles.',
  },
  {
    mode: 'schematism',
    nodeId: 'relation-schema',
    title: 'El orden temporal',
    body:
      'Las categorías de relación se vuelven especialmente claras: permanencia, sucesión reglada y coexistencia.',
  },
  {
    mode: 'schematism',
    nodeId: 'causality-schema',
    title: 'Causalidad no es mera sucesión',
    body:
      'El esquema de causalidad es una sucesión sometida a regla: puesto un estado, otro sigue de manera determinada.',
  },
  {
    mode: 'schematism',
    nodeId: 'principles-root',
    title: 'De los esquemas a los principios',
    body:
      'La Analítica de los principios despliega las cuatro familias de categorías en Axiomas, Anticipaciones, Analogías y Postulados.',
  },
  {
    mode: 'schematism',
    nodeId: 'math-principles',
    title: 'Principios matemáticos',
    body:
      'Cantidad y cualidad se desarrollan mediante Axiomas y Anticipaciones. Kant los caracteriza como constitutivos respecto de la intuición.',
  },
  {
    mode: 'schematism',
    nodeId: 'axioms',
    title: 'Axiomas',
    body:
      'La intuición fenoménica se comprende como magnitud extensiva: sus partes se sintetizan en una magnitud.',
  },
  {
    mode: 'schematism',
    nodeId: 'anticipations',
    title: 'Anticipaciones',
    body:
      'Toda sensación posee un grado. No anticipamos qué sensación aparecerá, pero sí una estructura intensiva de lo real percibido.',
  },
  {
    mode: 'schematism',
    nodeId: 'dynamic-principles',
    title: 'Principios dinámicos',
    body:
      'Relación y modalidad no construyen la existencia del fenómeno; regulan su conexión dentro de una experiencia posible.',
  },
  {
    mode: 'schematism',
    nodeId: 'analogies',
    title: 'Analogías',
    body:
      'Sustancia, causalidad y comunidad ordenan la existencia en duración, sucesión y simultaneidad.',
  },
  {
    mode: 'schematism',
    nodeId: 'postulates',
    title: 'Postulados',
    body:
      'Posibilidad, realidad y necesidad se entienden por su relación con las condiciones formales, materiales y universales de la experiencia.',
  },
  {
    mode: 'schematism',
    nodeId: 'schema-limit',
    title: 'El mismo puente fija el límite',
    body:
      'Los esquemas realizan las categorías al darles aplicación sensible, pero también las restringen al campo de experiencia posible.',
  },
]

export const STUDY_QUESTIONS = [
  {
    id: 'q-judgments-categories',
    mode: 'categories',
    nodeId: 'relation-categories',
    prompt: '¿Qué categoría corresponde al juicio hipotético?',
    options: ['Sustancia', 'Causalidad', 'Comunidad', 'Necesidad'],
    answer: 1,
    explanation:
      'En la deducción metafísica, el juicio hipotético se vincula con causalidad y dependencia.',
  },
  {
    id: 'q-validity',
    mode: 'deduction',
    nodeId: 'quid-juris',
    prompt: '¿Qué intenta justificar la deducción trascendental?',
    options: [
      'El origen empírico de las categorías',
      'La existencia de cosas en sí',
      'La validez objetiva de las categorías para la experiencia',
      'La superioridad de la razón sobre la sensibilidad',
    ],
    answer: 2,
    explanation:
      'La deducción trascendental responde a la cuestión de derecho: con qué legitimidad las categorías a priori pueden referirse a objetos de experiencia.',
  },
  {
    id: 'q-triple-synthesis',
    mode: 'apperception',
    nodeId: 'a-route',
    prompt: '¿Cuál es el orden de la triple síntesis en la primera edición?',
    options: [
      'Reconocimiento → aprehensión → reproducción',
      'Aprehensión → reproducción → reconocimiento',
      'Reproducción → reconocimiento → aprehensión',
      'Aprehensión → reconocimiento → reproducción',
    ],
    answer: 1,
    explanation:
      'La reconstrucción de la primera edición recorre aprehensión, reproducción y reconocimiento.',
  },
  {
    id: 'q-i-think',
    mode: 'apperception',
    nodeId: 'i-think',
    prompt: '¿Qué expresa el “Yo pienso” en la deducción B?',
    options: [
      'Una sustancia simple conocida directamente',
      'Una emoción fundamental',
      'La condición de unidad de una misma autoconciencia',
      'Una intuición sensible del alma',
    ],
    answer: 2,
    explanation:
      'El “Yo pienso” nombra la condición formal bajo la cual las representaciones pueden pertenecer a una misma autoconciencia.',
  },
  {
    id: 'q-causality-schema',
    mode: 'schematism',
    nodeId: 'causality-schema',
    prompt: '¿Cuál es el esquema temporal de la causalidad?',
    options: [
      'Permanencia',
      'Sucesión según una regla',
      'Coexistencia sin regla',
      'Simple simultaneidad',
    ],
    answer: 1,
    explanation:
      'La causalidad se esquematiza como una sucesión objetivamente reglada.',
  },
  {
    id: 'q-principles',
    mode: 'schematism',
    nodeId: 'principles-root',
    prompt: '¿Qué serie reproduce correctamente las cuatro familias de principios?',
    options: [
      'Axiomas · Anticipaciones · Analogías · Postulados',
      'Postulados · Deducciones · Analogías · Axiomas',
      'Esquemas · Ideas · Antinomias · Postulados',
      'Axiomas · Paralogismos · Analogías · Ideas',
    ],
    answer: 0,
    explanation:
      'La Analítica de los principios organiza cuatro familias: Axiomas, Anticipaciones, Analogías y Postulados.',
  },
  {
    id: 'q-math-dynamic',
    mode: 'schematism',
    nodeId: 'math-principles',
    prompt: '¿Qué familias corresponden a los principios matemáticos?',
    options: [
      'Cantidad y cualidad',
      'Relación y modalidad',
      'Cantidad y relación',
      'Cualidad y modalidad',
    ],
    answer: 0,
    explanation:
      'Cantidad y cualidad se desarrollan como principios matemáticos; relación y modalidad como dinámicos.',
  },
  {
    id: 'q-limit',
    mode: 'schematism',
    nodeId: 'schema-limit',
    prompt: '¿Qué doble función cumple el esquema?',
    options: [
      'Amplía las categorías más allá de la experiencia y las vuelve intuitivas',
      'Realiza las categorías en la sensibilidad y limita su uso al campo de experiencia',
      'Convierte las categorías en ideas de la razón',
      'Sustituye a la apercepción trascendental',
    ],
    answer: 1,
    explanation:
      'El esquema hace aplicable la categoría a fenómenos, pero esa misma mediación sensible restringe su uso.',
  },
]

export const SOURCE_READINGS = {
  'quid-juris': {
    hartnack: {
      kind: 'RECONSTRUCCIÓN',
      locator: 'Hartnack · Deducción metafísica / paso a la Deducción trascendental · p. 56',
      quote:
        'Una cosa es haber mostrado que realmente utilizamos categorías, y otra bien distinta haber probado que nuestro empleo de las categorías es legítimo.',
      fullText:
        'Hartnack subraya que el descubrimiento de las categorías y la prueba de su validez son problemas distintos. La tabla de juicios permite reconstruir qué categorías utiliza el entendimiento; la Deducción trascendental debe justificar con qué derecho se emplean esas categorías en relación con objetos de experiencia.',
    },
  },

  'i-think': {
    kant: {
      kind: 'CITA DIRECTA',
      locator: 'Kant · Crítica de la razón pura · §16 · Unidad sintética originaria de apercepción',
      quote:
        'El Yo pienso tiene que poder acompañar todas mis representaciones.',
      fullText:
        'El Yo pienso tiene que poder acompañar todas mis representaciones. De lo contrario, sería representado en mí algo que no podría ser pensado, lo que equivale a decir que la representación, o bien sería imposible o, al menos, no sería nada para mí. Toda diversidad de la intuición guarda una necesaria relación con el Yo pienso en el mismo sujeto en el que se halla tal diversidad. Kant llama a esta autoconciencia apercepción pura u originaria y a su unidad, unidad trascendental de la autoconciencia.',
    },
    hartnack: {
      kind: 'EXPLICACIÓN',
      locator: 'Hartnack · Deducción trascendental · p. 68',
      quote:
        'La unidad de conciencia es una condición necesaria de la experiencia.',
      fullText:
        'Hartnack presenta la apercepción pura como condición necesaria de la síntesis de lo múltiple, de la unidad del objeto, del uso de conceptos y de la emisión de juicios. Estos aspectos no son piezas independientes, sino distintas expresiones de la estructura que hace posible una experiencia unificada.',
    },
  },

  recognition: {
    kant: {
      kind: 'CITA DIRECTA',
      locator: 'Kant · Deducción trascendental (A) · 3. Síntesis de reconocimiento en el concepto',
      quote:
        'Sin conciencia no puede haber conceptos ni es, por tanto, posible conocer objetos.',
      fullText:
        'Kant sostiene que, si no fuéramos conscientes de que lo pensado ahora es lo mismo que habíamos pensado un instante antes, la reproducción de representaciones sería inútil: lo múltiple jamás formaría un todo. La conciencia de esa unidad permite reconocer una misma operación de síntesis y hace posible el concepto. Sin conciencia no puede haber conceptos ni es posible conocer objetos.',
    },
  },

  'object-x': {
    kant: {
      kind: 'CITA DIRECTA',
      locator: 'Kant · Deducción trascendental (A) · objeto de las representaciones',
      quote:
        'Nuestros conocimientos no se producen al azar o arbitrariamente.',
      fullText:
        'Kant explica que la relación del conocimiento con un objeto conlleva necesidad: los conocimientos que han de referirse a un objeto deben concordar necesariamente entre sí respecto de él. La unidad que esa concordancia exige constituye el concepto de un objeto.',
    },
    hartnack: {
      kind: 'RECONSTRUCCIÓN',
      locator: 'Hartnack · Deducción trascendental · pp. 67–68',
      quote:
        'El objeto como síntesis de lo múltiple es una necesidad, si ha de haber algún conocimiento.',
      fullText:
        'Hartnack afirma que síntesis, conocimiento de un objeto y unidad de conciencia son lógicamente interdependientes. Entender las intuiciones como objetos es condición necesaria para hablar de conocimiento: ser un objeto significa estar conceptualmente determinado y ser entendido mediante un concepto.',
    },
  },

  orange: {
    hartnack: {
      kind: 'EJEMPLO',
      locator: 'Hartnack · Deducción trascendental · ejemplo de la naranja',
      quote:
        'Llamar a lo que veo una “naranja” es aplicarle el concepto “naranja”.',
      fullText:
        'Si digo que veo una naranja, el objeto que veo no se identifica con ninguna experiencia sensible particular de ella. Llamar a lo que veo una “naranja” es aplicarle el concepto “naranja”: reunir lo que se ve, se siente, se huele y se saborea bajo un concepto, es decir, ordenar esa multiplicidad bajo una regla. El concepto de objeto hace posible entender lo dado a los sentidos como algo acerca de lo cual pueden hacerse enunciados.',
    },
  },

  'time-schema': {
    kant: {
      kind: 'CITA DIRECTA',
      locator: 'Kant · Esquematismo de los conceptos puros del entendimiento',
      quote:
        'Los esquemas no son, pues, más que determinaciones del tiempo realizadas a priori según unas reglas.',
      fullText:
        'Kant distribuye los esquemas según cuatro aspectos temporales: serie, contenido, orden y conjunto. El esquema de la magnitud concierne a la producción sucesiva del tiempo; el de la cualidad, al llenado del tiempo por la sensación; el de la relación, al enlace reglado de percepciones en el tiempo; y el de la modalidad, a la manera en que un objeto pertenece al tiempo.',
    },
    hartnack: {
      kind: 'EXPLICACIÓN',
      locator: 'Hartnack · Esquematismo · pp. 70 ss.',
      quote:
        'Las categorías fueron esquematizadas al ser puestas en relación con el tiempo puro.',
      fullText:
        'Hartnack explica el esquematismo como la puesta en relación de las categorías con el tiempo puro, entendido como forma a priori de intuición. Esta mediación permite interpretar las categorías en términos temporales y preparar su aplicación a fenómenos.',
    },
  },

  'causality-schema': {
    kant: {
      kind: 'CITA DIRECTA',
      locator: 'Kant · Esquematismo · causalidad',
      quote:
        'Consiste, pues, en la sucesión de lo diverso, en la medida en que tal sucesión se halla sometida a una regla.',
      fullText:
        'El esquema de la causa y de la causalidad de una cosa en general es la realidad a la que sigue algo distinto, una vez puesta esa realidad. Consiste en la sucesión de lo diverso en la medida en que tal sucesión se halla sometida a una regla.',
    },
    hartnack: {
      kind: 'EXPLICACIÓN',
      locator: 'Hartnack · Esquematismo · causalidad',
      quote:
        'El esquema de la categoría de causalidad es una sucesión de eventos.',
      fullText:
        'Hartnack explica que el esquema de causalidad consiste en una sucesión de eventos tal que, cuando se produce un cierto evento, éste es seguido por un segundo evento determinado según una regla.',
    },
  },

  'principles-root': {
    kant: {
      kind: 'TEXTO ESTRUCTURAL',
      locator: 'Kant · Sistema de todos los principios del entendimiento puro',
      quote:
        'Axiomas de la intuición · Anticipaciones de la percepción · Analogías de la experiencia · Postulados del pensar empírico en general.',
      fullText:
        'Kant organiza los principios del entendimiento puro en cuatro grupos: Axiomas de la intuición, Anticipaciones de la percepción, Analogías de la experiencia y Postulados del pensar empírico en general. Los principios asociados a cantidad y cualidad reciben el nombre de matemáticos; los vinculados con relación y modalidad, dinámicos.',
    },
    hartnack: {
      kind: 'RECONSTRUCCIÓN',
      locator: 'Hartnack · Sistema de todos los principios · p. 57 y pp. 79 ss.',
      quote:
        'En correspondencia con la tabla de las categorías, obtenemos la tabla de los principios.',
      fullText:
        'Hartnack organiza la prueba posterior de las categorías mediante las mismas cuatro familias: Axiomas de la intuición, Anticipaciones de la percepción, Analogías de la experiencia y Postulados del pensamiento empírico. Las dos primeras corresponden a categorías matemáticas; las dos últimas, a categorías dinámicas.',
    },
  },

  'schema-limit': {
    kant: {
      kind: 'CITA DIRECTA',
      locator: 'Kant · conclusión del Esquematismo',
      quote:
        'Los esquemas de la sensibilidad realizan las categorías y también las restringen.',
      fullText:
        'Kant afirma que los esquemas hacen posible que los conceptos puros del entendimiento se refieran a objetos y posean significación. Pero la misma sensibilidad que realiza las categorías las restringe: sin esas condiciones sensibles, las categorías conservan sólo una significación lógica y no representan objeto alguno determinado.',
    },
  },

  'experience-result': {
    hartnack: {
      kind: 'SÍNTESIS',
      locator: 'Hartnack · Deducción trascendental · p. 68',
      quote:
        'Ni la intuición sola, ni las categorías solas, pueden dar conocimiento.',
      fullText:
        'Hartnack concluye que el conocimiento requiere dos cosas: intuición, es decir, aquello que es dado en espacio y tiempo, y aplicación de las categorías a lo dado en la intuición. Ni la intuición sola ni las categorías solas producen conocimiento. Las categorías son condiciones necesarias del conocimiento empírico, que Kant llama experiencia.',
    },
  },
}

export const READING_LIBRARY = {
  'kant-sensibility-understanding': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Crítica de la razón pura · Lógica trascendental · Introducción',
    quote:
      'Sin sensibilidad ningún objeto nos sería dado y, sin entendimiento, ninguno sería pensado.',
    fullText:
      'La capacidad de pensar el objeto de la intuición es el entendimiento. Ninguna de estas propiedades es preferible a la otra: sin sensibilidad ningún objeto nos sería dado y, sin entendimiento, ninguno sería pensado. Los pensamientos sin contenido son vacíos; las intuiciones sin conceptos son ciegas. El conocimiento únicamente puede surgir de la unión de ambos.',
  },
  'hartnack-analytic-intro': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · La Analítica Trascendental · p. 43',
    quote:
      'Una simple intuición no es lo mismo que la comprensión de lo que es intuido.',
    fullText:
      'En la Analítica Trascendental Kant se propone hallar las condiciones para hacer juicios sintéticos a priori en física. La Estética elucida las condiciones de la intuición. Pero una simple intuición no es lo mismo que la comprensión, el pensamiento o la intelección, de lo que es intuido. La condición de pensar lo que es intuido es el empleo de conceptos, y ésta es una actividad del entendimiento.',
  },
  'kant-faculty-judging': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Analítica de los conceptos · guía para el descubrimiento',
    quote:
      'El entendimiento puede representarse como una facultad de juzgar.',
    fullText:
      'Podemos reducir todos los actos del entendimiento a juicios, de modo que el entendimiento puede representarse como una facultad de juzgar, ya que es una facultad de pensar. Pensar es conocer mediante conceptos.',
  },
  'kant-judgment-table': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · §9 · Función lógica del entendimiento en los juicios',
    quote:
      'La función del pensamiento, dentro del juicio, puede reducirse a cuatro títulos.',
    fullText:
      'Si hacemos completa abstracción del contenido de un juicio y atendemos tan sólo a su simple forma intelectual, descubrimos que la función del pensamiento, dentro del juicio, puede reducirse a cuatro títulos, cada uno de los cuales incluye tres momentos: cantidad, cualidad, relación y modalidad.',
  },
  'hartnack-judgments-categories': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Deducción metafísica · pp. 49–56',
    quote:
      'Tras examinar las formas posibles y necesarias de los juicios, Kant piensa que ha descubierto todas las categorías.',
    fullText:
      'Hartnack presenta la tabla de categorías en cuatro grupos: cantidad —unidad, pluralidad, totalidad—; cualidad —realidad, negación, limitación—; relación —sustancia, causalidad, comunidad—; y modalidad —posibilidad, existencia, necesidad, con sus correlatos. A las categorías de cantidad y cualidad las llama matemáticas; a las de relación y modalidad, dinámicas.',
  },
  'kant-categories-system': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · §10 · Tabla de las categorías',
    quote:
      'Esta es la lista completa de los conceptos puros originarios de la síntesis contenidos a priori en el entendimiento.',
    fullText:
      'La tabla comprende: cantidad —unidad, pluralidad, totalidad—; cualidad —realidad, negación, limitación—; relación —inherencia y subsistencia, causalidad y dependencia, comunidad—; modalidad —posibilidad e imposibilidad, existencia y no-existencia, necesidad y contingencia. La división ha sido hecha sistemáticamente a partir de un principio común, el de la facultad de juzgar, y no ha surgido de forma rapsódica.',
  },
  'hartnack-discovery-validity': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Deducción metafísica · p. 56',
    quote:
      'Una cosa es haber mostrado que realmente utilizamos categorías, y otra bien distinta haber probado que nuestro empleo de las categorías es legítimo.',
    fullText:
      'Hartnack subraya que, tras examinar las formas de los juicios, Kant piensa que ha descubierto todas las categorías, pero no que haya demostrado su validez. La Deducción trascendental aborda precisamente la legitimidad de su empleo.',
  },
  'kant-deduction-juris': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · §13 · Principios de una deducción trascendental en general',
    quote:
      'Los juristas distinguen en un asunto legal la cuestión de derecho (quid juris) de la cuestión de hecho (quid facti).',
    fullText:
      'Al hablar de derechos y pretensiones, los juristas distinguen en un asunto legal la cuestión de derecho (quid juris) de la cuestión de hecho (quid facti). De ambas exigen una demostración y llaman a la primera —la que expone el derecho o la pretensión legal— deducción.',
  },
  'kant-deduction-definition': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · §13 · Deducción trascendental',
    quote:
      'La explicación de la forma según la cual los conceptos a priori pueden referirse a objetos la llamo deducción trascendental.',
    fullText:
      'El derecho de los conceptos destinados al uso puro a priori necesita siempre una deducción, ya que no bastan para legitimar semejante uso las pruebas extraídas de la experiencia. La explicación de la forma según la cual los conceptos a priori pueden referirse a objetos la llamo deducción trascendental de los mismos.',
  },
  'kant-experience-condition': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · §14 · Paso a la deducción trascendental',
    quote:
      'La validez objetiva de las categorías residirá en el hecho de que sólo gracias a ellas sea posible la experiencia.',
    fullText:
      'La validez objetiva de las categorías como conceptos a priori residirá en el hecho de que sólo gracias a ellas sea posible la experiencia, por lo que hace a la forma del pensar. Se refieren de modo necesario y a priori a objetos de la experiencia porque sólo a través de ellas es posible pensar algún objeto de la experiencia.',
  },
  'hartnack-experience': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Deducción trascendental · p. 68',
    quote:
      'Ni la intuición sola, ni las categorías solas, pueden dar conocimiento.',
    fullText:
      'El conocimiento requiere dos cosas: por una parte, intuición, aquello que es dado en el espacio y en el tiempo, y por otra, la aplicación de las categorías a lo que es dado en la intuición. Ni la intuición sola, ni las categorías solas, pueden dar conocimiento. Las categorías son condiciones necesarias del conocimiento empírico.',
  },
  'kant-apprehension': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Deducción trascendental (A) · Síntesis de aprehensión',
    quote:
      'Hace falta primero recorrer toda esa diversidad y reunirla después.',
    fullText:
      'Toda intuición contiene en sí una variedad. Para que surja una unidad intuitiva de esa diversidad hace falta primero recorrer toda esa diversidad y reunirla después. Este acto lo llamo síntesis de aprehensión.',
  },
  'kant-reproduction': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Deducción trascendental (A) · Síntesis de reproducción',
    quote:
      'Si mi pensamiento dejara escapar siempre las representaciones precedentes, jamás podría surgir una representación completa.',
    fullText:
      'Si intento trazar una línea en mi pensamiento, pensar un intervalo de tiempo o representarme un número, mi pensamiento tiene que asumir varias representaciones una tras otra. Si dejara escapar siempre las representaciones precedentes y no las reprodujera al pasar a las siguientes, jamás podría surgir una representación completa.',
  },
  'kant-recognition': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Deducción trascendental (A) · Síntesis de reconocimiento',
    quote:
      'Sin conciencia no puede haber conceptos ni es, por tanto, posible conocer objetos.',
    fullText:
      'Si no fuéramos conscientes de que lo que ahora pensamos es lo mismo que habíamos pensado hace un instante, toda reproducción sería inútil. Lo vario jamás formaría un todo, ya que carecería de una unidad que sólo la conciencia puede suministrar. Sin conciencia no puede haber conceptos ni es posible conocer objetos.',
  },
  'hartnack-triple-synthesis': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Deducción trascendental · pp. 66–67',
    quote:
      'La intuición es una síntesis de una multiplicidad, constituida por la aprehensión, la reproducción y el reconocimiento.',
    fullText:
      'Intuir es intuir en el tiempo. Esto implica que la intuición es una síntesis de una multiplicidad, una síntesis constituida por la aprehensión, la reproducción y el reconocimiento. Sin una tal síntesis no hay autoconciencia y no hay tampoco ningún objeto como síntesis de una multiplicidad de impresiones en el tiempo.',
  },
  'kant-imagination': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · §24 · Síntesis trascendental de la imaginación',
    quote:
      'La imaginación es la facultad de representar un objeto en la intuición incluso cuando éste no se halla presente.',
    fullText:
      'La imaginación es la facultad de representar un objeto en la intuición incluso cuando éste no se halla presente. Cuando la síntesis figurada se refiere a la originaria unidad sintética de apercepción tiene que llamarse síntesis trascendental de la imaginación.',
  },
  'kant-i-think': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · §16 · Unidad sintética originaria de apercepción',
    quote:
      'El Yo pienso tiene que poder acompañar todas mis representaciones.',
    fullText:
      'El Yo pienso tiene que poder acompañar todas mis representaciones. Toda diversidad de la intuición guarda una necesaria relación con el Yo pienso en el mismo sujeto en el que se halla tal diversidad. Kant llama a esta autoconciencia apercepción pura u originaria.',
  },
  'kant-object-unity': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Deducción trascendental (A) · Objeto trascendental = X',
    quote:
      'Nuestros conocimientos no se producen al azar o arbitrariamente.',
    fullText:
      'Nuestros conocimientos no se producen al azar o arbitrariamente, sino que se hallan determinados de una cierta forma. Al tener que referirse a un objeto, han de concordar necesariamente entre sí con respecto a éste último, es decir, han de poseer la unidad que constituye el concepto de un objeto.',
  },
  'hartnack-object-orange': {
    kind: 'EJEMPLO DIRECTO',
    locator: 'Hartnack · Deducción trascendental · ejemplo de la naranja',
    quote:
      'Llamar a lo que veo una “naranja” es aplicarle el concepto “naranja”.',
    fullText:
      'Si digo que veo una naranja, el objeto que veo no se identifica con ninguna experiencia sensible particular de ella. Llamar a lo que veo una naranja es aplicarle el concepto naranja: reunir lo que se ve, se siente, se huele y se saborea bajo este concepto, es decir, ordenar bajo una regla lo dado a los sentidos.',
  },
  'kant-schema-time': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Esquematismo de los conceptos puros del entendimiento',
    quote:
      'Los esquemas no son, pues, más que determinaciones del tiempo realizadas a priori según unas reglas.',
    fullText:
      'Los esquemas se refieren, según el orden de las categorías, a los siguientes aspectos del tiempo: serie, contenido, orden y conjunto. Los esquemas de los conceptos puros del entendimiento constituyen las condiciones que hacen que tales conceptos se refieran a objetos.',
  },
  'hartnack-schema-time': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Esquematismo · pp. 70 ss.',
    quote:
      'Las categorías fueron esquematizadas al ser puestas en relación con el tiempo puro.',
    fullText:
      'Hartnack explica que las categorías fueron esquematizadas al ser puestas en relación con el tiempo puro, es decir, el tiempo como forma a priori de intuición. Esa mediación permite interpretar sustancia como permanencia, causalidad como secuencia objetiva y comunidad como interacción.',
  },
  'kant-causality-schema': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Esquematismo · causalidad',
    quote:
      'Consiste en la sucesión de lo diverso, en la medida en que tal sucesión se halla sometida a una regla.',
    fullText:
      'El esquema de la causa y de la causalidad de una cosa en general es la realidad a la que sigue algo distinto, una vez puesta esa realidad. Consiste en la sucesión de lo diverso, en la medida en que tal sucesión se halla sometida a una regla.',
  },
  'hartnack-causality-schema': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Esquematismo · causalidad · p. 76',
    quote:
      'El esquema de la categoría de causalidad es una sucesión de eventos.',
    fullText:
      'El esquema de la categoría de causalidad es una sucesión de eventos tal que, cuando se produce un cierto evento, éste es seguido por un segundo evento determinado según una regla.',
  },
  'kant-schema-limit': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · conclusión del Esquematismo',
    quote:
      'Los esquemas de la sensibilidad realizan las categorías y también las restringen.',
    fullText:
      'Las categorías no tienen otro uso posible que el empírico. Si bien son los esquemas de la sensibilidad los que realizan las categorías, son también ellos los que las restringen. Si prescindimos de los esquemas, las categorías se reducen a simples funciones intelectuales relativas a conceptos, pero no representan ningún objeto.',
  },
  'kant-principles-table': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Sistema de todos los principios del entendimiento puro',
    quote:
      'La tabla de las categorías nos lleva con la mayor naturalidad a la tabla de los principios.',
    fullText:
      'La tabla de las categorías nos lleva con la mayor naturalidad a la tabla de los principios, ya que ésta no es otra cosa que las reglas del uso objetivo de aquéllas. Los principios son: Axiomas de la intuición, Anticipaciones de la percepción, Analogías de la experiencia y Postulados del pensar empírico en general.',
  },
  'hartnack-principles-table': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Sistema de todos los principios · pp. 57, 79 ss.',
    quote:
      'En correspondencia con los esquemas de cantidad, cualidad, relación y modalidad hay cuatro principios.',
    fullText:
      'En correspondencia con los esquemas de cantidad, cualidad, relación y modalidad hay cuatro principios: Axiomas de la intuición, Anticipaciones de la percepción, Analogías de la experiencia y Postulados del pensamiento empírico.',
  },
  'kant-axioms': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Axiomas de la intuición',
    quote:
      'Todas las intuiciones son magnitudes extensivas.',
    fullText:
      'Todos los fenómenos son magnitudes extensivas, ya que, en cuanto intuiciones en el espacio y el tiempo, deben ser representados mediante la misma síntesis que determina el espacio y el tiempo en general.',
  },
  'hartnack-axioms': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Axiomas de la intuición · p. 82',
    quote:
      'Toda intuición es una magnitud extensiva.',
    fullText:
      'Hartnack explica que la Analítica trata de las condiciones para comprender lo intuido. Los Axiomas de la intuición tratan de las condiciones para comprender lo intuido como una magnitud extendida en el espacio y en el tiempo.',
  },
  'kant-anticipations': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Anticipaciones de la percepción',
    quote:
      'En todos los fenómenos, lo real que sea un objeto de la sensación posee magnitud intensiva, es decir, un grado.',
    fullText:
      'En todos los fenómenos, lo real que sea un objeto de la sensación posee magnitud intensiva, es decir, un grado. La sensación puede aumentar gradualmente desde cero hasta una magnitud cualquiera.',
  },
  'hartnack-anticipations': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Anticipaciones de la percepción · p. 83',
    quote:
      'Toda impresión sensible tiene un cierto grado.',
    fullText:
      'Toda impresión sensible tiene un cierto grado. Ésta es una proposición que puede afirmarse a priori. El grado puede ir desde cero hasta cualquier magnitud, pero en cada momento la impresión sensible tiene una intensidad definida.',
  },
  'kant-analogies': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Analogías de la experiencia',
    quote:
      'La experiencia sólo es posible mediante la representación de una necesaria conexión de las percepciones.',
    fullText:
      'La experiencia sólo es posible mediante la representación de una necesaria conexión de las percepciones. Los tres modos del tiempo son permanencia, sucesión y simultaneidad; para las relaciones temporales de los fenómenos habrá, pues, tres reglas.',
  },
  'hartnack-analogies': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Analogías de la experiencia · p. 85',
    quote:
      'La experiencia es una síntesis de impresiones sensibles.',
    fullText:
      'Por experiencia entiende Kant conocimiento empírico de un objeto a través de la percepción sensible. La experiencia es una síntesis de impresiones sensibles y expresa la unidad necesaria de la conciencia. Sustancia, causalidad y comunidad articulan relaciones temporales necesarias.',
  },
  'kant-postulates': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Postulados del pensar empírico en general',
    quote:
      'Lo que concuerda con las condiciones formales de la experiencia es posible.',
    fullText:
      'Lo que concuerda con las condiciones formales de la experiencia, desde el punto de vista de la intuición y de los conceptos, es posible. Lo que se halla en interdependencia con las condiciones materiales de la experiencia es real. Aquello cuya interdependencia con lo real se halla determinada según condiciones universales de la experiencia es necesario.',
  },
  'hartnack-postulates': {
    kind: 'EXPLICACIÓN DIRECTA',
    locator: 'Hartnack · Postulados del pensamiento empírico · pp. 94 ss.',
    quote:
      'Lo real es lo que existe en un tiempo definido, y lo necesario es lo que existe en todo tiempo.',
    fullText:
      'Hartnack interpreta los esquemas de modalidad en términos temporales: lo posible puede existir en algún momento; lo real existe en un tiempo definido; lo necesario existe en todo tiempo.',
  },
  'kant-not-soul': {
    kind: 'CITA DIRECTA',
    locator: 'Kant · Paralogismos de la razón pura',
    quote:
      'Fuera de tal significado lógico del yo, no conocemos en sí mismo al sujeto.',
    fullText:
      'Aunque el yo se halla en todos los pensamientos, su representación no contiene una intuición que lo distinga como objeto. Fuera del significado lógico del yo, no conocemos en sí mismo al sujeto que sirve de base a él y a todos los pensamientos.',
  },
}

export const NODE_READING_PRESETS = {
  'architecture:sensibility': { kant: 'kant-sensibility-understanding', hartnack: 'hartnack-analytic-intro' },
  'architecture:space-time': { kant: 'kant-sensibility-understanding', hartnack: 'hartnack-analytic-intro' },
  'architecture:analytic': { kant: 'kant-sensibility-understanding', hartnack: 'hartnack-analytic-intro' },
  'architecture:concepts': { kant: 'kant-faculty-judging', hartnack: 'hartnack-analytic-intro' },
  'architecture:judgment': { kant: 'kant-faculty-judging', hartnack: 'hartnack-judgments-categories' },
  'architecture:metaphysical-deduction': { kant: 'kant-categories-system', hartnack: 'hartnack-discovery-validity' },
  'architecture:categories': { kant: 'kant-categories-system', hartnack: 'hartnack-judgments-categories' },
  'architecture:transcendental-deduction': { kant: 'kant-deduction-definition', hartnack: 'hartnack-discovery-validity' },
  'architecture:principles': { kant: 'kant-principles-table', hartnack: 'hartnack-principles-table' },
  'architecture:schematism': { kant: 'kant-schema-time', hartnack: 'hartnack-schema-time' },
  'architecture:system-principles': { kant: 'kant-principles-table', hartnack: 'hartnack-principles-table' },
  'architecture:experience': { kant: 'kant-experience-condition', hartnack: 'hartnack-experience' },
  'architecture:systematicity': { kant: 'kant-categories-system', hartnack: 'hartnack-judgments-categories' },

  'categories:quantity-judgments': { kant: 'kant-judgment-table', hartnack: 'hartnack-judgments-categories' },
  'categories:quantity-categories': { kant: 'kant-categories-system', hartnack: 'hartnack-judgments-categories' },
  'categories:quality-judgments': { kant: 'kant-judgment-table', hartnack: 'hartnack-judgments-categories' },
  'categories:quality-categories': { kant: 'kant-categories-system', hartnack: 'hartnack-judgments-categories' },
  'categories:relation-judgments': { kant: 'kant-judgment-table', hartnack: 'hartnack-judgments-categories' },
  'categories:relation-categories': { kant: 'kant-categories-system', hartnack: 'hartnack-judgments-categories' },
  'categories:modality-judgments': { kant: 'kant-judgment-table', hartnack: 'hartnack-judgments-categories' },
  'categories:modality-categories': { kant: 'kant-categories-system', hartnack: 'hartnack-judgments-categories' },
  'categories:hartnack-cat': { hartnack: 'hartnack-judgments-categories' },
  'categories:hartnack-table': { hartnack: 'hartnack-judgments-categories' },
  'categories:discovery-proof': { kant: 'kant-deduction-juris', hartnack: 'hartnack-discovery-validity' },

  'deduction:quid-juris': { kant: 'kant-deduction-juris', hartnack: 'hartnack-discovery-validity' },
  'deduction:a-priori-claim': { kant: 'kant-deduction-definition', hartnack: 'hartnack-discovery-validity' },
  'deduction:manifold': { kant: 'kant-sensibility-understanding', hartnack: 'hartnack-experience' },
  'deduction:synthesis': { kant: 'kant-object-unity', hartnack: 'hartnack-triple-synthesis' },
  'deduction:apperception': { kant: 'kant-i-think', hartnack: 'hartnack-experience' },
  'deduction:categories-rules': { kant: 'kant-experience-condition', hartnack: 'hartnack-experience' },
  'deduction:object-unity': { kant: 'kant-object-unity', hartnack: 'hartnack-triple-synthesis' },
  'deduction:experience': { kant: 'kant-experience-condition', hartnack: 'hartnack-experience' },
  'deduction:objective-validity': { kant: 'kant-experience-condition', hartnack: 'hartnack-experience' },
  'deduction:empirical-limit': { kant: 'kant-schema-limit', hartnack: 'hartnack-experience' },
  'deduction:orange': { hartnack: 'hartnack-object-orange' },

  'apperception:a-route': { kant: 'kant-apprehension', hartnack: 'hartnack-triple-synthesis' },
  'apperception:time-manifold': { kant: 'kant-apprehension', hartnack: 'hartnack-triple-synthesis' },
  'apperception:apprehension': { kant: 'kant-apprehension', hartnack: 'hartnack-triple-synthesis' },
  'apperception:reproduction': { kant: 'kant-reproduction', hartnack: 'hartnack-triple-synthesis' },
  'apperception:recognition': { kant: 'kant-recognition', hartnack: 'hartnack-triple-synthesis' },
  'apperception:imagination': { kant: 'kant-imagination', hartnack: 'hartnack-triple-synthesis' },
  'apperception:b-route': { kant: 'kant-i-think', hartnack: 'hartnack-experience' },
  'apperception:i-think': { kant: 'kant-i-think', hartnack: 'hartnack-experience' },
  'apperception:synthetic-unity': { kant: 'kant-i-think', hartnack: 'hartnack-experience' },
  'apperception:objective-unity': { kant: 'kant-object-unity', hartnack: 'hartnack-experience' },
  'apperception:object-x': { kant: 'kant-object-unity', hartnack: 'hartnack-triple-synthesis' },
  'apperception:categories': { kant: 'kant-experience-condition', hartnack: 'hartnack-experience' },
  'apperception:experience-result': { kant: 'kant-experience-condition', hartnack: 'hartnack-experience' },
  'apperception:not-soul': { kant: 'kant-not-soul' },

  'schematism:schema-problem': { kant: 'kant-schema-time', hartnack: 'hartnack-schema-time' },
  'schematism:time-schema': { kant: 'kant-schema-time', hartnack: 'hartnack-schema-time' },
  'schematism:quantity-schema': { kant: 'kant-schema-time', hartnack: 'hartnack-schema-time' },
  'schematism:quality-schema': { kant: 'kant-schema-time', hartnack: 'hartnack-anticipations' },
  'schematism:relation-schema': { kant: 'kant-schema-time', hartnack: 'hartnack-schema-time' },
  'schematism:modality-schema': { kant: 'kant-postulates', hartnack: 'hartnack-postulates' },
  'schematism:substance-schema': { kant: 'kant-schema-time', hartnack: 'hartnack-schema-time' },
  'schematism:causality-schema': { kant: 'kant-causality-schema', hartnack: 'hartnack-causality-schema' },
  'schematism:community-schema': { kant: 'kant-analogies', hartnack: 'hartnack-schema-time' },
  'schematism:principles-root': { kant: 'kant-principles-table', hartnack: 'hartnack-principles-table' },
  'schematism:math-principles': { kant: 'kant-principles-table', hartnack: 'hartnack-principles-table' },
  'schematism:axioms': { kant: 'kant-axioms', hartnack: 'hartnack-axioms' },
  'schematism:anticipations': { kant: 'kant-anticipations', hartnack: 'hartnack-anticipations' },
  'schematism:dynamic-principles': { kant: 'kant-principles-table', hartnack: 'hartnack-principles-table' },
  'schematism:analogies': { kant: 'kant-analogies', hartnack: 'hartnack-analogies' },
  'schematism:postulates': { kant: 'kant-postulates', hartnack: 'hartnack-postulates' },
  'schematism:schema-limit': { kant: 'kant-schema-limit', hartnack: 'hartnack-schema-time' },
}
