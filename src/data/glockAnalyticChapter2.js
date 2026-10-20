// Fuente primaria: Glock (Tecnos, 2012), cap. II, pp. 40–45 y fragmento visible p. 46.
import { SYSTEM_2D_THEME } from '../components/philosophy/system2d/system2dTheme.js'

export const glockRoutes = [
  {
    "id": "all",
    "label": "Todo el capítulo recibido"
  },
  {
    "id": "programa",
    "label": "01 · Programa histórico"
  },
  {
    "id": "antiguos",
    "label": "02 · Nociones de análisis"
  },
  {
    "id": "modernos",
    "label": "03 · Descartes y Leibniz"
  },
  {
    "id": "kant",
    "label": "04 · Empirismo y Kant"
  },
  { "id": "juicios", "label": "05 · Juicios y conocimiento" },
  { "id": "trascendental", "label": "06 · Filosofía trascendental" },
  { "id": "reacciones", "label": "07 · Reacciones al idealismo" }
]

const SOURCE_NODES = [
  {
    "id": "G00",
    "section": "programa",
    "title": "El programa del capítulo",
    "kind": "Programa",
    "page": "p. 40",
    "x": 80,
    "y": 50,
    "short": "Glock anticipa los antecedentes del análisis, la formación de la tradición y dos cambios de rumbo.",
    "explanation": "El texto inicia enunciando su plan historiográfico: primero el análisis anterior al siglo XIX, luego Bolzano, Frege, Moore y Russell; a continuación el giro lingüístico y su inversión posterior. Este nodo es una agenda enunciada por Glock, no un desarrollo leído todavía en las páginas disponibles.",
    "excerpt": "En este capítulo se traza la trayectoria de la filosofía analítica.",
    "question": "¿Cuáles son las etapas que anuncia el capítulo y cuáles todavía no están desarrolladas en las pp. 40–42?",
    "dependsOn": []
  },
  {
    "id": "G01",
    "section": "antiguos",
    "title": "Análisis: desatar o disolver",
    "kind": "Etimología",
    "page": "p. 40",
    "x": 80,
    "y": 360,
    "short": "El capítulo parte de dos nociones antiguas de análisis, no de una definición unívoca.",
    "explanation": "Glock introduce analysis como 'desatar' o 'disolver', y presenta dos procedimientos históricamente diferenciados: el que trabaja con conceptos y el que trabaja con proposiciones.",
    "excerpt": "La palabra «análisis» proviene del griego analysis que significa «desatar» o «disolver».",
    "question": "¿Por qué Glock distingue dos nociones históricas de análisis antes de caracterizar la filosofía analítica?",
    "dependsOn": [
      "G00"
    ]
  },
  {
    "id": "G02",
    "section": "antiguos",
    "title": "Análisis descomposicional",
    "kind": "Método",
    "page": "pp. 40–41",
    "x": 560,
    "y": 360,
    "short": "Sócrates y Platón: analizar un concepto complejo a través de sus componentes.",
    "explanation": "El concepto analizado es el analysandum; la expresión que muestra sus componentes constituye el analysans. El ejemplo de Glock parte del concepto de ser humano y lo explica mediante animal y racionalidad. La relación entre clases (seres humanos incluidos en animales) no debe confundirse con la relación explicativa entre conceptos (animal contenido en ser humano).",
    "excerpt": "Así, el concepto de ser humano —el analysandum— es analizado en los conceptos de animal y de racionalidad",
    "question": "¿Qué diferencia hay entre analysandum y analysans, y qué distingue contención de clases de contención conceptual?",
    "dependsOn": [
      "G01"
    ]
  },
  {
    "id": "G03",
    "section": "antiguos",
    "title": "Análisis regresivo",
    "kind": "Método",
    "page": "p. 41",
    "x": 1040,
    "y": 360,
    "short": "Aristóteles y geometría griega: se parte de la proposición que se quiere demostrar y se vuelve a sus principios.",
    "explanation": "La dirección del método analítico es regresiva: de la proposición por demostrar hacia los primeros principios capaces de justificarla. Distintamente, la deducción a partir de axiomas se llamaba método sintético en el periodo que Glock examina.",
    "excerpt": "El método analítico, en cambio, parte de una proposición que ha de ser probada y se remonta hasta los primeros principios",
    "question": "¿Por qué es un error histórico identificar sin más análisis con deducción formal desde axiomas?",
    "dependsOn": [
      "G01"
    ]
  },
  {
    "id": "G04",
    "section": "antiguos",
    "title": "La unidad de los dos análisis",
    "kind": "Articulación",
    "page": "p. 41",
    "x": 1520,
    "y": 360,
    "short": "Ambos parten de algo dado y buscan aquello más básico que permita definirlo o probarlo.",
    "explanation": "La unidad metodológica no exige que conceptos y proposiciones sean idénticos. En ambos casos hay un punto de partida dado, una búsqueda de fundamentos y una relación de definición o demostración.",
    "excerpt": "Lo que unifica al análisis descomposicional y al regresivo es la idea de partir de algo dado",
    "question": "¿Qué tienen en común ambos métodos y qué objeto específico analiza cada uno?",
    "dependsOn": [
      "G02",
      "G03"
    ]
  },
  {
    "id": "G05",
    "section": "modernos",
    "title": "Spinoza y Descartes",
    "kind": "Historia conceptual",
    "page": "p. 41",
    "x": 80,
    "y": 760,
    "short": "En Descartes, análisis para descubrir; síntesis para exponer o probar.",
    "explanation": "Glock contrapone el ideal geométrico de Spinoza a la función de la síntesis en Descartes: la síntesis presenta o demuestra resultados, mientras el hallazgo de naturalezas simples y nociones primarias exige un procedimiento de descubrimiento analítico.",
    "excerpt": "El descubrimiento de nuevas perspectivas es analítico y consiste en identificar las «naturalezas simples»",
    "question": "¿Por qué el orden del descubrimiento y el orden de exposición no son lo mismo en la lectura de Descartes?",
    "dependsOn": [
      "G04"
    ]
  },
  {
    "id": "G06",
    "section": "modernos",
    "title": "Leibniz: predicado y sujeto",
    "kind": "Tesis",
    "page": "p. 41",
    "x": 560,
    "y": 760,
    "short": "En toda proposición verdadera, el predicado estaría contenido en el concepto del sujeto.",
    "explanation": "Según la exposición de Glock, Leibniz propone analizar el concepto del sujeto para reducir verdades a identidades. En el ejemplo aritmético, definir cada número como predecesor más uno permite reescribir 7 + 5 = 12 con definiciones y finalmente con sumas de unidades.",
    "excerpt": "Toda verdad puede ser reducida a una «verdad idéntica» utilizando las definiciones resultantes de tales análisis.",
    "question": "¿Qué se gana, para Leibniz, al sustituir números por definiciones basadas en el predecesor más uno?",
    "dependsOn": [
      "G05"
    ]
  },
  {
    "id": "G07",
    "section": "modernos",
    "title": "Characteristica universalis",
    "kind": "Proyecto",
    "page": "p. 42",
    "x": 1040,
    "y": 760,
    "short": "Leibniz imagina una notación y un algoritmo que unan descubrimiento analítico y demostración sintética.",
    "explanation": "La caracterización que ofrece Glock pone en relación dos procedimientos, sin fundirlos: análisis de los conceptos relevantes y derivación sintética de teoremas a partir de definiciones.",
    "excerpt": "Leibniz soñó con una characteristica universalis, una notación científica que proporcionase un algoritmo",
    "question": "¿Qué dos métodos pretende articular el proyecto de la characteristica universalis?",
    "dependsOn": [
      "G06"
    ]
  },
  {
    "id": "G08",
    "section": "kant",
    "title": "El análisis empirista",
    "kind": "Historia conceptual",
    "page": "p. 42",
    "x": 80,
    "y": 1170,
    "short": "Locke y James Mill: el análisis se desplaza hacia ideas y constituyentes de la mente.",
    "explanation": "Glock contrapone las orientaciones de Leibniz (lógico) y Descartes (ontológico) al análisis psicológico y epistemológico de empiristas británicos. En Locke se descompone lo complejo en ideas simples; su propósito es mostrar su procedencia en la experiencia sensorial.",
    "excerpt": "el análisis psicológico-cum-epistemológico fue el instrumento favorito de los empiristas británicos",
    "question": "¿En qué cambia el objeto del análisis desde Leibniz y Descartes a Locke y James Mill?",
    "dependsOn": [
      "G07"
    ]
  },
  {
    "id": "G09",
    "section": "kant",
    "title": "Kant: facultades mentales",
    "kind": "Cambio de enfoque",
    "page": "p. 42",
    "x": 560,
    "y": 1170,
    "short": "De episodios mentales a sensibilidad, entendimiento y razón.",
    "explanation": "El desplazamiento que describe Glock consiste en atender a las facultades de conocimiento y no sólo a la resolución de episodios mentales. La nota sirve para articular la transición a la Analítica y la Dialéctica trascendentales.",
    "excerpt": "En Kant, la resolución de los episodios mentales deja paso a las facultades mentales",
    "question": "¿Qué papel tiene la distinción entre episodios y facultades en la descripción del método kantiano?",
    "dependsOn": [
      "G08"
    ]
  },
  {
    "id": "G10",
    "section": "kant",
    "title": "Verdad e ilusión trascendentales",
    "kind": "Distinción",
    "page": "p. 42",
    "x": 1040,
    "y": 1170,
    "short": "Analítica trascendental: lógica de la verdad; Dialéctica: lógica de la ilusión.",
    "explanation": "El texto describe a la Analítica como examen de principios cognitivos vinculados a la posibilidad de referencia objetiva. La Dialéctica, en contraste, diagnostica falacias cuando la razón se pronuncia sobre objetos más allá de la experiencia posible. Referencia consignada por Glock: Crítica de la razón pura, B 85–87.",
    "excerpt": "La Analítica Trascendental es una «lógica de la verdad»",
    "question": "¿Por qué la Dialéctica trascendental recibe el nombre de lógica de la ilusión?",
    "dependsOn": [
      "G09"
    ]
  },
  {
    "id": "G11",
    "section": "kant",
    "title": "Juicios analíticos y sintéticos",
    "kind": "Distinción",
    "page": "p. 42",
    "x": 1520,
    "y": 1170,
    "short": "Analítico: predicado contenido en el sujeto; el ejemplo sintético aparece sin explicación adicional en la p. 42.",
    "explanation": "Glock presenta el ejemplo 'Todos los cuerpos son extensos' para el juicio analítico, y 'Todos los cuerpos son pesados' para el sintético. La página 43, recibida en la segunda entrega, precisa que el predicado sintético añade algo al sujeto; los contrastes a priori y a posteriori se desarrollan en el nodo siguiente.",
    "excerpt": "En un juicio analítico, el predicado está ya contenido al menos implícitamente en el concepto del sujeto",
    "question": "¿Qué añade un juicio sintético al concepto del sujeto, de acuerdo con pp. 42–43?",
    "dependsOn": [
      "G09",
      "G02"
    ]
  },
{
  "id": "G12",
  "section": "juicios",
  "title": "A priori y a posteriori",
  "kind": "Distinción",
  "page": "p. 43",
  "x": 0,
  "y": 0,
  "short": "La independencia a priori se refiere a la validez, no al origen psicológico del juicio.",
  "explanation": "Glock precisa que un juicio a priori puede aprenderse por experiencia, pero su justificación no depende de observaciones ni experimentos. El contraste analítico/sintético y el contraste a priori/a posteriori no son equivalentes.",
  "excerpt": "los juicios a priori son independientes de la experiencia no con respecto a su origen, sino en lo que atañe a su validez",
  "question": "¿Puede aprenderse empíricamente un juicio que se justifica a priori? ¿Por qué?",
  "dependsOn": [
    "G11"
  ]
},
{
  "id": "G13",
  "section": "juicios",
  "title": "La paradoja sintética a priori",
  "kind": "Problema",
  "page": "p. 43",
  "x": 0,
  "y": 0,
  "short": "Kant presenta 7 + 5 = 12 como sintético a priori y pregunta cómo ampliar conocimiento sin depender de experiencia.",
  "explanation": "Glock contrapone la lectura leibniziana de la aritmética como análisis de identidades con la lectura de Kant: la suma no contiene ya explícitamente su resultado; sin embargo puede demostrarse sin observación. Se formula así la pregunta por la posibilidad de proposiciones sustantivas y a priori.",
  "excerpt": "la idea de conocimiento sintético a priori es prima facie paradójica",
  "question": "¿Cómo puede un juicio ampliar nuestro conocimiento y ser válido independientemente de la experiencia?",
  "dependsOn": [
    "G12",
    "G06"
  ]
},
{
  "id": "G14",
  "section": "trascendental",
  "title": "Revolución copernicana",
  "kind": "Respuesta",
  "page": "pp. 43–44",
  "x": 0,
  "y": 0,
  "short": "La materia de la experiencia se recibe a posteriori; su forma o estructura es a priori.",
  "explanation": "En la exposición de Glock, Kant separa los contenidos particulares de la experiencia y sus condiciones estructurales. Espacio, tiempo y causalidad se entienden como condiciones para que algo pueda darse como objeto de experiencia. Por ello ciertos juicios son sintéticos respecto de objetos de experiencia y a priori respecto de su fundamentación.",
  "excerpt": "la forma o estructura de la experiencia es a priori",
  "question": "¿Cuál es la diferencia entre contenido y forma de la experiencia?",
  "dependsOn": [
    "G13"
  ]
},
{
  "id": "G15",
  "section": "trascendental",
  "title": "¿Qué puede hacer la filosofía?",
  "kind": "Problema disciplinar",
  "page": "p. 44",
  "x": 0,
  "y": 0,
  "short": "La filosofía necesita distinguir su tarea frente al progreso de las ciencias naturales.",
  "explanation": "Según Glock, la antigua imagen de la filosofía como reina de las ciencias se vuelve problemática por el contraste entre controversias metafísicas y avances experimentales y matemáticos. La pregunta es si la filosofía puede conservar una autonomía cognitiva sin convertirse en ciencia empírica ni en literatura desligada de la verdad.",
  "excerpt": "¿Puede la filosofía mantener un papel distinto como disciplina académica separada?",
  "question": "¿Qué alternativas a la filosofía plantea el avance de las ciencias especiales?",
  "dependsOn": [
    "G14"
  ]
},
{
  "id": "G16",
  "section": "trascendental",
  "title": "Metafísica trascendental",
  "kind": "Reorientación",
  "page": "pp. 44–45",
  "x": 0,
  "y": 0,
  "short": "El objeto de reflexión es el modo de conocer objetos, no entidades trascendentes.",
  "explanation": "Glock presenta el giro kantiano frente a modelos platónicos y aristotélicos: la filosofía estudia las condiciones no empíricas bajo las cuales conocemos objetos empíricos ordinarios. La metafísica trascendental de la experiencia no equivale a un saber acerca de Dios, el alma o cosas fuera de toda experiencia.",
  "excerpt": "se ocupaba no tanto de objetos como del modo de nuestro conocimiento de objetos",
  "question": "¿Por qué estudiar condiciones de conocimiento no equivale a postular un reino adicional de objetos?",
  "dependsOn": [
    "G15"
  ]
},
{
  "id": "G17",
  "section": "trascendental",
  "title": "Idealismo trascendental y límite",
  "kind": "Tensión",
  "page": "p. 45",
  "x": 0,
  "y": 0,
  "short": "Espacio, tiempo y causalidad se aplican a apariencias; no se conocen las cosas en sí mismas.",
  "explanation": "La lectura de Glock rechaza dos simplificaciones: Kant no niega los objetos independientes de la mente ni afirma que la mente cree la naturaleza. Sin embargo atribuye leyes estructurales a la cognición. La tensión nace al hablar de las cosas en sí como origen de apariencias y, a la vez, restringir la causación al ámbito de apariencias.",
  "excerpt": "Este «idealismo trascendental» genera numerosas tensiones.",
  "question": "¿Dónde aparece la dificultad de aplicar causalidad a cosas en sí?",
  "dependsOn": [
    "G16"
  ]
},
{
  "id": "G18",
  "section": "reacciones",
  "title": "Radicalización idealista y colapso",
  "kind": "Desenlace",
  "page": "p. 45",
  "x": 0,
  "y": 0,
  "short": "Hegel y el idealismo alemán amplían el papel del sujeto y recuperan una filosofía total.",
  "explanation": "Según Glock, frente a tensiones kantianas, la filosofía idealista alemana termina haciendo de la realidad una manifestación de principio espiritual, con conocimiento a priori más ambicioso; el progreso de las ciencias naturales y culturales contribuyó a su colapso después de 1831. No confundir la reconstrucción crítica de Glock con tesis avaladas por todos los autores implicados.",
  "excerpt": "El resultado fue el «colapso del idealismo»",
  "question": "¿Qué tensión kantiana intenta superar el idealismo alemán y por qué habría entrado en crisis?",
  "dependsOn": [
    "G17"
  ]
},
{
  "id": "G19",
  "section": "reacciones",
  "title": "Naturalismo: primera reacción",
  "kind": "Respuesta histórica",
  "page": "p. 45",
  "x": 0,
  "y": 0,
  "short": "Frente al idealismo, se afirma la investigación a posteriori y la reducción empírica.",
  "explanation": "Glock retrata naturalistas, muchos formados como fisiólogos, que rechazan la especulación metafísica y buscan reducir dominios presuntamente a priori a psicología o fisiología. El texto menciona la influencia del empirismo radical de John Stuart Mill.",
  "excerpt": "Los naturalistas mantenían que todo conocimiento era a posteriori",
  "question": "¿Por qué el naturalismo desconfía de una filosofía que pretenda conocimiento a priori?",
  "dependsOn": [
    "G18"
  ]
},
{
  "id": "G20",
  "section": "reacciones",
  "title": "Neokantismo: segunda reacción",
  "kind": "Respuesta histórica",
  "page": "p. 46 · fragmento",
  "x": 0,
  "y": 0,
  "short": "La filosofía como disciplina de segundo orden clarifica precondiciones del conocimiento.",
  "explanation": "En el fragmento disponible de p. 46 Glock describe la respuesta neokantiana: para mantener su especificidad frente a las ciencias especiales, la filosofía analiza condiciones lógicas, conceptuales y metodológicas del conocimiento científico y de otras formas de pensamiento. No se dispone todavía del resto de la página.",
  "excerpt": "los neo-kantianos retomaron la idea de que la filosofía es una disciplina de segundo orden",
  "question": "¿Qué quiere decir aquí segundo orden y cómo se distingue del naturalismo?",
  "dependsOn": [
    "G18",
    "G15"
  ]
}
]
const SOURCE_EDGES = [
  [
    "G00",
    "G01",
    "abre los antecedentes"
  ],
  [
    "G01",
    "G02",
    "primera noción"
  ],
  [
    "G01",
    "G03",
    "segunda noción"
  ],
  [
    "G02",
    "G04",
    "confluye en"
  ],
  [
    "G03",
    "G04",
    "confluye en"
  ],
  [
    "G04",
    "G05",
    "se reinterpreta en"
  ],
  [
    "G05",
    "G06",
    "prosigue en Leibniz"
  ],
  [
    "G06",
    "G07",
    "proyecta una notación"
  ],
  [
    "G07",
    "G08",
    "contrasta con"
  ],
  [
    "G08",
    "G09",
    "se desplaza hacia"
  ],
  [
    "G09",
    "G10",
    "permite distinguir"
  ],
  [
    "G09",
    "G11",
    "también se aplica a"
  ],
  [
    "G02",
    "G11",
    "afinidad conceptual (reconstrucción)"
  ],
["G11","G12","se precisa con"],
["G12","G13","abre el problema"],
["G06","G13","contraste con Kant"],
["G13","G14","exige una respuesta"],
["G14","G15","reorienta la disciplina"],
["G15","G16","propone un objeto propio"],
["G16","G17","genera una tensión"],
["G17","G18","impulsa una radicalización"],
["G18","G19","provoca la reacción naturalista"],
["G18","G20","provoca la reacción neokantiana"],
["G15","G20","retoma la autonomía filosófica"]
]
const TONES = { programa: 'gold', antiguos: 'blue', modernos: 'rust', kant: 'moss', juicios: 'violet', trascendental: 'bronze', reacciones: 'sage' }
export const glockNodeOrder = SOURCE_NODES.map((node) => node.id)

// Una geometría estable para tarjetas documentales: altura declarada y separación
// proporcional al texto real; nunca confiar en un ajuste automático de React Flow.
export const GLOCK_GEOMETRY = Object.freeze({
  width: 340, height: 240, gapX: 130, gapY: 145, columns: 2,
})
const sectionOrder = glockRoutes.filter(r => r.id !== 'all').map(r => r.id)
const nodePositions = new Map()
let nextRow = 0
for (const section of sectionOrder) {
  const group = SOURCE_NODES.filter(n => n.section === section)
  group.forEach((node, index) => {
    const column = index % GLOCK_GEOMETRY.columns
    const row = nextRow + Math.floor(index / GLOCK_GEOMETRY.columns)
    nodePositions.set(node.id, {
      x: 60 + column * (GLOCK_GEOMETRY.width + GLOCK_GEOMETRY.gapX),
      y: 70 + row * (GLOCK_GEOMETRY.height + GLOCK_GEOMETRY.gapY),
    })
  })
  nextRow += Math.ceil(group.length / GLOCK_GEOMETRY.columns) + 1
}

export const glockNodes = SOURCE_NODES.map((item, index) => ({
  id: item.id,
  type: 'glock',
  position: nodePositions.get(item.id),
  data: {
    title: item.title,
    kind: item.kind,
    short: item.short,
    explanation: item.explanation,
    excerpt: item.excerpt,
    page: item.page,
    sourceRef: 'Glock, 2012, cap. II, ' + item.page,
    question: item.question,
    branch: [item.section],
    dependsOn: item.dependsOn,
    produces: SOURCE_EDGES.filter(([source]) => source === item.id).map(([, target]) => target),
    code: item.id,
    number: String(index + 1).padStart(2,'0'),
    section: item.section,
    color: SYSTEM_2D_THEME.nodeTopics[TONES[item.section]],
  },
}))

export const glockLinks = SOURCE_EDGES.map(([source, target, label]) => ({
  id: source + '--' + target,
  source, target, label,
  critical: label.includes('reconstrucción'),
}))
export const glockNodeById = (id) => glockNodes.find((n) => n.id === id) || null

// Esquema pedagógico, no facsímil de la obra.
export const glockMethodSchema = {
  title: 'Dos sentidos del análisis',
  layout: 'hierarchy',
  direction: 'vertical',
  readingLayout: 'vertical-folio',
  minHeight: 680,
  hierarchyXGap: 150,
  hierarchyYGap: 170,
  rootId: 'dado',
  nodes: [
    { id: 'dado', label: 'Algo dado', role: 'root' },
    { id: 'concepto', label: 'Concepto por definir', role: 'concept' },
    { id: 'proposicion', label: 'Proposición por probar', role: 'concept' },
    { id: 'partes', label: 'Componentes del concepto', role: 'structure' },
    { id: 'principios', label: 'Primeros principios', role: 'structure' },
  ],
  edges: [
    { from: 'dado', to: 'concepto', kind: 'derives', label: 'analiza' },
    { from: 'dado', to: 'proposicion', kind: 'derives', label: 'analiza' },
    { from: 'concepto', to: 'partes', kind: 'hierarchical', label: 'descompone' },
    { from: 'proposicion', to: 'principios', kind: 'hierarchical', label: 'regresa a' },
  ],
}
