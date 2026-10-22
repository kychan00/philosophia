// Fuente primaria: Glock (Tecnos, 2012), cap. II, pp. 40–51. No extrapolar p. 52.
import { SYSTEM_2D_THEME } from '../components/philosophy/system2d/system2dTheme.js'
import { glockClass19Oct } from './glockClass19Oct.js'

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
  { "id": "reacciones", "label": "07 · Reacciones al idealismo" },
  { "id": "matematicas", "label": "08 · Crisis matemática" },
  { "id": "bolzano", "label": "09 · Bolzano y objetividad" },
  { "id": "boole", "label": "10 · Boole y álgebra lógica" },
  { "id": "frege", "label": "11 · Frege y lógica formal" },
  { "id": "limites", "label": "12 · Límites del logicismo" },
  { "id": "rebelion", "label": "13 · Rebelión contra el idealismo" }
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
  "page": "p. 46",
  "x": 0,
  "y": 0,
  "short": "La filosofía como disciplina de segundo orden clarifica precondiciones del conocimiento.",
  "explanation": "En la página 46 Glock describe la respuesta neokantiana: para mantener su especificidad frente a las ciencias especiales, la filosofía analiza condiciones lógicas, conceptuales y metodológicas del conocimiento científico y de otras formas de pensamiento. Este párrafo cierra las reacciones al idealismo y abre una sección distinta sobre los fundamentos matemáticos.",
  "excerpt": "los neo-kantianos retomaron la idea de que la filosofía es una disciplina de segundo orden",
  "question": "¿Qué quiere decir aquí segundo orden y cómo se distingue del naturalismo?",
  "dependsOn": [
    "G18",
    "G15"
  ]
}
,
{
  "id": "G21",
  "section": "matematicas",
  "title": "La matemática exige fundamentos",
  "kind": "Contexto histórico",
  "page": "p. 46",
  "short": "Las ciencias presionan la autonomía de la filosofía, pero sus fundamentos reabren problemas filosóficos.",
  "explanation": "La aparición de la psicología y la transformación de las matemáticas crean dificultades conceptuales y metodológicas. Glock muestra así por qué la crisis de la filosofía como disciplina coincide con una renovada necesidad de reflexión sobre la ciencia.",
  "dependsOn": [
    "G20"
  ],
  "diagram": [
    "ciencias especializadas",
    "problemas conceptuales",
    "fundamentos de las matemáticas"
  ],
  "question": "¿Por qué el avance científico vuelve a necesitar preguntas filosóficas?",
  "x": 0,
  "y": 0
},
{
  "id": "G22",
  "section": "matematicas",
  "title": "Aritmetización y crisis fundacional",
  "kind": "Transformación",
  "page": "pp. 46–47",
  "short": "Weierstrass y los nuevos sistemas matemáticos desplazan la intuición geométrica hacia definiciones aritméticas.",
  "explanation": "La abstracción del álgebra, la depuración de los infinitesimales y la aparición de geometrías no euclidianas provocan una crisis de fundamentos. La prioridad se desplaza desde la evidencia intuitiva hacia la derivación rigurosa de axiomas y definiciones.",
  "dependsOn": [
    "G21"
  ],
  "diagram": [
    "intuición geométrica",
    "aritmetización",
    "derivación axiomática"
  ],
  "question": "¿Por qué la validez matemática ya no puede descansar únicamente en la intuición?",
  "x": 0,
  "y": 0
},
{
  "id": "G23",
  "section": "matematicas",
  "title": "Continuidad, infinito y Cantor",
  "kind": "Problema",
  "page": "p. 47",
  "short": "El infinito y los conjuntos transfinitos obligan a revisar nociones matemáticas básicas.",
  "explanation": "Glock relaciona las definiciones de continuidad e infinitud con el desarrollo de teoría de números y la teoría de conjuntos de Cantor. También atribuye a Bolzano anticipaciones importantes sobre conjuntos infinitos.",
  "dependsOn": [
    "G22"
  ],
  "diagram": [
    "definiciones de infinito",
    "Cantor",
    "fundamentación aritmética"
  ],
  "question": "¿Qué cambia cuando los conjuntos infinitos se vuelven objetos rigurosos de investigación?",
  "x": 0,
  "y": 0
},
{
  "id": "G24",
  "section": "bolzano",
  "title": "Bolzano: variación de proposiciones",
  "kind": "Innovación lógica",
  "page": "p. 47",
  "short": "El método de variación estudia qué sucede con la verdad al sustituir conceptos o proposiciones.",
  "explanation": "Bolzano introduce una técnica para examinar validez y deducibilidad variando componentes de proposiciones complejas. Glock la presenta como antecedente de ideas posteriores de consecuencia y verdad lógica; la anticipación es una comparación histórica de Glock, no identidad de teorías.",
  "dependsOn": [
    "G23"
  ],
  "diagram": [
    "proposición compleja",
    "sustitución de componentes",
    "valor veritativo"
  ],
  "question": "¿Qué queda fijo y qué puede variar en una proposición lógicamente verdadera?",
  "x": 0,
  "y": 0
},
{
  "id": "G25",
  "section": "bolzano",
  "title": "Verdad lógica y deducibilidad",
  "kind": "Distinción",
  "page": "p. 47",
  "short": "La forma lógica permanece verdadera ante sustituciones consistentes de componentes no lógicos.",
  "explanation": "Glock explica el ejemplo de la disyunción «Bruto mató a César o Bruto no mató a César». Sustituir sus expresiones no lógicas, conservando las partículas pertinentes y consistencia en la sustitución, preserva la verdad. Bolzano anticipa discusiones de Tarski y Quine, sin ser idéntico a sus teorías.",
  "dependsOn": [
    "G24"
  ],
  "diagram": [
    "partículas lógicas",
    "variación uniforme",
    "verdad lógica"
  ],
  "question": "¿Por qué la estructura ‘p o no p’ sigue siendo verdadera al cambiar p?",
  "x": 0,
  "y": 0
},
{
  "id": "G26",
  "section": "bolzano",
  "title": "Proposiciones en sí y antipsicologismo",
  "kind": "Ontología semántica",
  "page": "pp. 47–48",
  "short": "La proposición no se reduce a la oración pronunciada ni al acto psicológico de juzgar.",
  "explanation": "En Glock, Bolzano diferencia juicios, oraciones y proposiciones en sí mismas. La verdad de una proposición no depende de que alguien la piense o exprese. Este platonismo semántico anticipa aspectos de Frege y Moore; distinguir contenido, acto y signo es decisivo.",
  "dependsOn": [
    "G25"
  ],
  "diagram": [
    "juicio mental",
    "oración lingüística",
    "proposición en sí"
  ],
  "question": "¿Qué diferencia hay entre pensar una proposición, enunciarla y su contenido objetivo?",
  "x": 0,
  "y": 0
},
{
  "id": "G27",
  "section": "boole",
  "title": "Boole: álgebra de la lógica",
  "kind": "Cambio formal",
  "page": "p. 48",
  "short": "El cálculo algebraico de clases y conjuntos desborda la silogística aristotélica.",
  "explanation": "La innovación consiste en convertir operaciones entre conceptos en operaciones formales análogas a suma y multiplicación. Glock presenta la lógica booleana como una rama matemática, antecedente crucial pero distinta del sistema funcional de Frege.",
  "dependsOn": [
    "G26"
  ],
  "diagram": [
    "lógica silogística",
    "operaciones algebraicas",
    "álgebra del pensamiento"
  ],
  "question": "¿Cómo cambia la lógica cuando sus operaciones pueden representarse algebraicamente?",
  "x": 0,
  "y": 0
},
{
  "id": "G28",
  "section": "frege",
  "title": "Frege: Begriffsschrift y logicismo",
  "kind": "Programa",
  "page": "p. 48",
  "short": "En 1879 Frege formaliza la lógica de primer orden y busca derivar la aritmética de la lógica.",
  "explanation": "La Conceptografía de Frege se organiza mediante funciones, no por álgebra de clases al estilo de Boole. Su proyecto logicista exige definiciones lógicas de conceptos matemáticos y demostración de teoremas desde principios lógicos; Glock lo sitúa como un punto decisivo del nacimiento de la filosofía analítica.",
  "dependsOn": [
    "G27"
  ],
  "diagram": [
    "Conceptografía (1879)",
    "lógica de primer orden",
    "logicismo"
  ],
  "question": "¿En qué se diferencian la matematización de la lógica y la reducción de matemáticas a lógica?",
  "x": 0,
  "y": 0
},
{
  "id": "G29",
  "section": "frege",
  "title": "Función y argumento, no sujeto y predicado",
  "kind": "Innovación conceptual",
  "page": "pp. 48–49",
  "short": "Una oración puede analizarse como una función con lugares de argumento.",
  "explanation": "Glock muestra cómo Frege descompone «César conquistó las Galias» en una función de dos lugares («x conquistó y») y dos argumentos; ello permite una estructura lógica más expresiva que la división tradicional sujeto–predicado.",
  "dependsOn": [
    "G28"
  ],
  "diagram": [
    "función x conquistó y",
    "argumento César",
    "argumento las Galias"
  ],
  "question": "¿Por qué una oración relacional necesita más de un lugar de argumento?",
  "x": 0,
  "y": 0
},
{
  "id": "G30",
  "section": "frege",
  "title": "Conceptos como funciones veritativas",
  "kind": "Semántica lógica",
  "page": "p. 49",
  "short": "Un concepto correlaciona objetos con valores de verdad: verdadero o falso.",
  "explanation": "La formalización fregeana interpreta el concepto predicativo como función: «x conquistó y» adquiere un valor de verdad al recibir argumentos concretos. Glock distingue así una función matemática ordinaria y un concepto cuya salida es «lo Verdadero» o «lo Falso».",
  "dependsOn": [
    "G29"
  ],
  "diagram": [
    "concepto como función",
    "argumentos dados",
    "verdadero / falso"
  ],
  "question": "¿Qué valor devuelve un concepto fregeano una vez introducidos sus argumentos?",
  "x": 0,
  "y": 0
},
{
  "id": "G31",
  "section": "frege",
  "title": "Conectivas y cuantificadores",
  "kind": "Instrumento formal",
  "page": "p. 49",
  "short": "La negación y la cuantificación universal permiten formalizar generalidades complejas.",
  "explanation": "Glock interpreta «Todos los electrones son negativos» mediante una condición general ligada por «para todo x». El alcance del cuantificador y su negación diferencian afirmaciones lógicamente distintas, incluso si el lenguaje ordinario las asemeja.",
  "dependsOn": [
    "G30"
  ],
  "diagram": [
    "función condicional",
    "∀x",
    "alcance de ¬ y ∃"
  ],
  "question": "¿Qué distingue la negación de ‘todos’ de la afirmación de ‘ninguno’?",
  "x": 0,
  "y": 0
},
{
  "id": "G32",
  "section": "frege",
  "title": "Existencia como propiedad de conceptos",
  "kind": "Revisión ontológica",
  "page": "p. 50",
  "short": "«Existe» significa que un concepto tiene al menos una instancia, no una cualidad del objeto.",
  "explanation": "Para Glock, el análisis lógico de Frege aporta una objeción a cierta formulación del argumento ontológico: «Dios existe» no atribuye al objeto Dios un predicado ordinario como «omnipotente», sino que dice de un concepto que tiene una instancia. El ejemplo expresa el análisis de Frege expuesto por Glock, no una solución general a toda teología.",
  "dependsOn": [
    "G31"
  ],
  "diagram": [
    "concepto G",
    "¿algún x satisface G?",
    "∃xGx"
  ],
  "question": "¿Por qué «Dios existe» no funciona como «Dios es omnipotente»?",
  "x": 0,
  "y": 0
},
{
  "id": "G33",
  "section": "frege",
  "title": "Sentido, referencia y representación",
  "kind": "Distinción semántica",
  "page": "p. 50",
  "short": "La referencia es el objeto designado; el sentido es su modo de presentación; la idea privada es otra cosa.",
  "explanation": "En «Sobre sentido y referencia» (1892), Glock distingue Bedeutung (referencia), Sinn (sentido) y Vorstellung (representación subjetiva). El sentido es compartible y objetivo, a diferencia de las asociaciones privadas suscitadas por un signo.",
  "dependsOn": [
    "G32"
  ],
  "diagram": [
    "signo y referencia",
    "modo de presentación (sentido)",
    "idea subjetiva ≠ sentido"
  ],
  "question": "¿Cómo pueden dos expresiones tener el mismo referente y diferente sentido?",
  "x": 0,
  "y": 0
},
{
  "id": "G34",
  "section": "frege",
  "title": "El tercer reino: pensamientos objetivos",
  "kind": "Antipsicologismo",
  "page": "p. 50",
  "short": "Los pensamientos, conceptos y valores veritativos no dependen de una mente particular.",
  "explanation": "Glock presenta una ontología fregeana de pensamientos objetivos: ni experiencias privadas ni cosas físicas. Debe leerse como posición de Frege reconstruida por Glock, no como consenso filosófico sobre la existencia de un tercer reino.",
  "dependsOn": [
    "G33",
    "G26"
  ],
  "diagram": [
    "pensamiento compartible",
    "no espacial ni temporal",
    "tercer reino"
  ],
  "question": "¿Por qué el contenido de una verdad no desaparece si nadie la piensa?",
  "x": 0,
  "y": 0
},
{
  "id": "G35",
  "section": "limites",
  "title": "La paradoja de Russell golpea al logicismo",
  "kind": "Obstáculo formal",
  "page": "pp. 50–51",
  "short": "El uso irrestricto de conjuntos que se contienen o no a sí mismos produce una contradicción.",
  "explanation": "Frege había intentado reducir la aritmética a lógica con conceptos de conjunto. Glock narra la dificultad que revela la paradoja del conjunto de todos los conjuntos que no se incluyen a sí mismos. El proyecto de fundamentos queda sometido a revisión.",
  "dependsOn": [
    "G28",
    "G34"
  ],
  "diagram": [
    "conceptos lógicos de conjunto",
    "autopertenencia",
    "paradoja de Russell"
  ],
  "question": "¿Qué ocurre cuando se pregunta si el conjunto de los que no se pertenecen a sí mismos se pertenece a sí mismo?",
  "x": 0,
  "y": 0
},
{
  "id": "G36",
  "section": "limites",
  "title": "Russell: tipos y Principia Mathematica",
  "kind": "Respuesta formal",
  "page": "p. 51",
  "short": "Russell introduce una teoría de tipos para bloquear fórmulas autorreferenciales problemáticas.",
  "explanation": "El texto sitúa la paradoja descubierta por Russell y la reacción mediante reglas de tipos: algunas expresiones quedan excluidas como carentes de sentido dentro del sistema. El resultado fue Principia Mathematica (Whitehead y Russell, 1910–1913), etapa central del programa logicista.",
  "dependsOn": [
    "G35"
  ],
  "diagram": [
    "paradoja",
    "restricciones de tipos",
    "Principia Mathematica"
  ],
  "question": "¿Qué impide la teoría de tipos y qué pretende salvar?",
  "x": 0,
  "y": 0
},
{
  "id": "G37",
  "section": "limites",
  "title": "Gödel y las limitaciones del programa",
  "kind": "Desenlace histórico",
  "page": "p. 51",
  "short": "Los teoremas de incompletitud limitan la esperanza de una fundamentación lógica autosuficiente.",
  "explanation": "Glock interpreta el resultado de Gödel (1931) como un golpe a la promesa epistemológica del logicismo: no basta un sistema formal suficientemente expresivo y efectivamente axiomatizado para certificar desde dentro su consistencia, bajo las condiciones habituales del teorema. Subsiste la utilidad de sus métodos analíticos.",
  "dependsOn": [
    "G36"
  ],
  "diagram": [
    "programa logicista",
    "límites demostrativos",
    "vigencia del análisis lógico"
  ],
  "question": "¿Por qué puede fallar el objetivo fundacional aunque subsista el método analítico?",
  "x": 0,
  "y": 0
},
{
  "id": "G38",
  "section": "rebelion",
  "title": "Russell y el idealismo británico",
  "kind": "Inicio de sección",
  "page": "p. 51",
  "short": "El nuevo apartado comienza vinculando el proyecto lógico de Russell con su formación idealista.",
  "explanation": "La sección 3, «La rebelión contra el idealismo», se inicia en la página 51. Sólo alcanzamos el pasaje de presentación: Russell usa herramientas lógicas en epistemología y metafísica y aparece su relación inicial con el idealismo británico de Bradley y McTaggart. El desarrollo de esa rebelión en p. 52 y siguientes aún no se ha recibido.",
  "dependsOn": [
    "G36",
    "G37"
  ],
  "diagram": [
    "lenguaje ideal",
    "problemas de epistemología y metafísica",
    "idealismo británico · transición"
  ],
  "question": "¿Por qué la formación idealista de Russell importa para la siguiente sección, todavía no leída?",
  "x": 0,
  "y": 0
}
]

const SOURCE_PASSAGES = Object.freeze({
  G00: `En este capítulo se traza la trayectoria de la filosofía analítica. Tras considerar el papel del análisis en filosofía con anterioridad al siglo XIX, pasa a analizar la emergencia gradual de la lógica y el análisis lógico y conceptual en Bolzano, Frege, Moore y Russell. A continuación considera dos subsiguientes cambios de rumbo. En primer lugar, el giro lingüístico de la filosofía analítica por obra de Wittgenstein, el positivismo lógico y el análisis conceptual; luego la inversión de ese giro, notablemente mediante la rehabilitación de la metafísica, el auge del naturalismo, el triunfo de los enfoques mentalistas de la mente y el lenguaje, y la vuelta a escena de la filosofía moral de primer orden y de la teoría política.`,
  G01: `La palabra «análisis» proviene del griego analysis que significa «desatar» o «disolver». Dos nociones del término análisis han primado en filosofía desde sus comienzos (véase BEANEY, 2003). La primera deriva de la búsqueda de definiciones de términos tales como «virtud» y «conocimiento» emprendida por Sócrates, junto a la versión de Platón, que habla de ella como «división».`,
  G02: `Este análisis descomposicional o «progresivo» se aplica primariamente a lo que hoy llamamos conceptos y que en esencia consiste en la disección o resolución de un concepto dado en sus elementos componentes, que a su vez pueden ser utilizados para definir un concepto complejo. Así, el concepto de ser humano —el analysandum— es analizado en los conceptos de animal y de racionalidad, produciendo con ello la definición de ser humano como animal racional —el analysans—. Mientras la clase de los seres humanos está contenida en la clase de los animales como subconjunto propio, el concepto de ser humano contiene al concepto de animal en el sentido de que este último es parte de la explicación del primero.`,
  G03: `La segunda noción deriva de la geometría griega y predomina en Aristóteles. Se la puede llamar análisis regresivo y se lo aplica primariamente a las proposiciones. La filosofía analítica es a veces erróneamente concebida como empresa deductiva que deriva teoremas a partir de axiomas y definiciones mediante pruebas formales. Hasta Kant, sin embargo, este procedimiento típicamente matemático de deducir consecuencias a partir de primeros principios o axiomas era conocido como método sintético. El método analítico, en cambio, parte de una proposición que ha de ser probada y se remonta hasta los primeros principios desde los cuales se puede derivar esa proposición como un teorema.`,
  G04: `Lo que unifica al análisis descomposicional y al regresivo es la idea de partir de algo dado (respectivamente, un concepto que hay que analizar o una proposición que hay que probar) e identificar algo que sea más básico (los componentes del analysandum o los axiomas que permitan deducir el teorema) y del cual éste puede ser derivado (definido o probado).`,
  G05: `Mientras que Spinoza buscaba razonar «more geometrico», para Descartes la síntesis era meramente el método de exposición o prueba. El descubrimiento de nuevas perspectivas es analítico y consiste en identificar las «naturalezas simples» que constituyen la realidad y los axiomas («nociones primarias») que especifican los vínculos entre ellas (Meditaciones, Respuestas II).`,
  G06: `Leibniz fue incluso más lejos. Según él, en todas las proposiciones verdaderas los predicados están contenidos en el concepto del sujeto, y pueden por tanto ser probados analizando este último. Toda verdad puede ser reducida a una «verdad idéntica» utilizando las definiciones resultantes de tales análisis. Así, las ecuaciones aritméticas pueden ser reducidas a verdades idénticas explotando el hecho de que cada número natural es definible por su predecesor más uno. Por ejemplo, 7 = def 6 + 1; 5 = def 4 + 1 y 12 = def 11 + 1.`,
  G07: `Leibniz soñó con una characteristica universalis, una notación científica que proporcionase un algoritmo tanto para el método analítico de descubrimiento (la definición de los conceptos relevantes mediante el análisis descomposicional) como para el método sintético de prueba (de derivación del teorema con la ayuda de tales definiciones).`,
  G08: `Mientras que Leibniz cultivó el análisis lógico y Descartes el análisis ontológico, el análisis psicológico-cum-epistemológico fue el instrumento favorito de los empiristas británicos, notablemente en el proyecto de Locke de dividir lo «complejo» en ideas «simples» (Ensayo, II.2, 22), o en el Analysis of the Phenomena of the Human Mind (1829) de James Mill. El objetivo no era tanto el de descubrir los constituyentes últimos de la realidad en general, como los de la mente humana, y de mostrar que éstos eran aportados por la experiencia sensorial.`,
  G09: `En Kant, la resolución de los episodios mentales deja paso a las facultades mentales tales como la sensibilidad, el entendimiento y la razón. La Analítica Trascendental es una «lógica de la verdad», puesto que nos proporciona una «piedra de toque negativa» en el sentido de que examina principios cognitivos que ningún juicio empírico podría contradecir sin perder su referencia a los objetos y con ello su estatuto como portador de un valor de verdad.`,
  G10: `La Analítica Trascendental es una «lógica de la verdad», puesto que nos proporciona una «piedra de toque negativa» en el sentido de que examina principios cognitivos que ningún juicio empírico podría contradecir sin perder su referencia a los objetos y con ello su estatuto como portador de un valor de verdad —lo que en todo caso se conoce como su aptitud para la verdad—. En contraste con esto, la Dialéctica Trascendental es una «lógica de la ilusión», pues expone falacias a las que la razón se inclina cuando se pronuncia sobre objetos situados más allá de toda posible experiencia (Crítica de la razón pura, B 85-87).`,
  G11: `Kant utiliza también el término «analítica» de un modo que lo relaciona con el análisis descomposicional (B 1-3, 10-15). En un juicio analítico, el predicado está ya contenido al menos implícitamente en el concepto del sujeto, como en «Todos los cuerpos son extensos». En cambio, el predicado de un juicio sintético como «Todos los cuerpos son pesados» añade algo al concepto-sujeto en lugar de expresar meramente algo que ya estaba implícito en él.`,
  G12: `La distinción analítico/sintético está conectada con lo que se encuentra situado entre un conocimiento a posteriori, que está basado en la experiencia —bien sea por observación o por experimento— y un conocimiento a priori. A diferencia de las ideas innatas postuladas por los racionalistas y repudiadas por los empiristas, los juicios a priori son independientes de la experiencia no con respecto a su origen, sino en lo que atañe a su validez. Aunque es necesario aprender incluso juicios a priori tales como (1), podemos demostrar su verdad mediante el cálculo, sin necesidad de recurrir a la experiencia.`,
  G13: `La metafísica aspira a ser a la vez a priori, a diferencia de las ciencias empíricas, incluyendo a la «fisiología del entendimiento humano», y sintética, a diferencia de la lógica formal, puesto que emite juicios sustantivos sobre la realidad (A ix, B 18). Pese a Leibniz, Kant se muestra confiado en que los juicios de la aritmética y la geometría proporcionen un claro ejemplo de conocimiento sintético a priori. Incluso (1) es sintético: al pensar en la suma 7 + 5 no tenemos aún en mente el resultado = 12, puesto que entonces no tendríamos necesidad de calcular. Al mismo tiempo comprueba Kant que la idea de conocimiento sintético a priori es prima facie paradójica.`,
  G14: `Kant resuelve este enigma mediante su «Revolución Copernicana»: «podemos conocer a priori las cosas sólo aquello que nosotros mismos hemos puesto en ellas» (B xviii). Hay una diferencia entre nuestras experiencias y sus objetos; y el contenido de la experiencia es a posteriori. Pero la forma o estructura de la experiencia es a priori, puesto que no está determinada por la aportación contingente de los objetos sino por el aparato cognitivo del sujeto. Tenemos experiencia de los objetos en tanto que se encuentran localizados en el espacio y en el tiempo, y como centros de cambios cualitativos que están sujetos a leyes causales. Según Kant, tales objetos no son hechos contingentes relativos a la realidad o a la naturaleza humana, sino precondiciones «trascendentales» de la posibilidad de la experiencia.`,
  G15: `Las dicotomías de Kant y su afirmación de que existe un conocimiento sintético a priori establecieron la agenda para un debate sobre la naturaleza de la lógica, la matemática y la metafísica que continúa siendo central para la filosofía analítica. Y a una escala aún mayor, Kant alteró la propia imagen y la organización de la filosofía. Antes de Kant, la filosofía era considerada como la «Reina de las Ciencias». Era ella la que fijaba el marco para las ciencias especiales. No obstante, durante los siglos XVII y XVIII reinó un evidente contraste: mientras la metafísica seguía siendo el «campo de batalla» de controversias fútiles (B xv), las ciencias naturales progresaban mediante la combinación de la investigación empírica con el instrumental matemático.`,
  G16: `Según Kant, la filosofía es una disciplina cognitiva, aunque distinta de las ciencias empíricas puesto que, al igual que la lógica y la matemática, aspira a un conocimiento a priori. Pero Kant rechazó la explicación recibida de este especial estatuto. Según los platónicos, la metafísica examina entidades abstractas que se encuentran más allá del espacio y del tiempo; según los aristotélicos, la metafísica examina el «ser qua ser». Kant introduce una reorientación fundamental al insistir en que la metafísica trascendental se «ocupaba no tanto de objetos como del modo de nuestro conocimiento de objetos» (B 25). La filosofía, en cambio, es a priori no porque describa objetos de un tipo peculiar, sino porque refleja las precondiciones no empíricas de nuestro conocimiento empírico de los objetos materiales ordinarios.`,
  G17: `Kant rehabilita solamente una metafísica «trascendental» de la experiencia, no la metafísica «trascendente» de los racionalistas que buscan el conocimiento de objetos más allá de toda posible experiencia, como Dios y el alma. Igualmente elimina las pretensiones de la metafísica tradicional sin abandonar el proyecto de la filosofía como disciplina sui generis distinta de las ciencias especiales. Pero esta atractiva combinación ha de pagar un precio: una forma de idealismo. Kant no niega la existencia de objetos independientes de la mente, ni afirma tampoco que la mente crea a la naturaleza. Pero sí mantiene, sin embargo, que la mente impone sus leyes estructurales sobre la realidad. Desde una perspectiva filosófica, el espacio, el tiempo y la causación son entidades «ideales» más que «reales» que se aplican solamente a las «apariencias».`,
  G18: `Este «idealismo trascendental» genera numerosas tensiones. Por ejemplo, mientras que la causación se aplica supuestamente sólo a las apariencias, donde estas últimas son resultado de las cosas en sí que no afectan causalmente al aparato cognitivo del sujeto, los idealistas alemanes trataron de superar estas tensiones extremando el idealismo. El sujeto aporta no sólo la forma de la cognición, sino también su contenido. La realidad es una manifestación de un principio espiritual que trasciende a las mentes individuales, tal como ocurre con el «espíritu» de Hegel. Puesto que la realidad misma es enteramente mental, es totalmente captable por la mente. Una vez más, la filosofía se torna en una super-ciencia que engloba a todas las otras disciplinas.`,
  G19: `Tan grandiosas pretensiones resultaron ser incompatibles con los avances en primer lugar de las ciencias naturales y más tarde con las culturales en el siglo XIX. El resultado fue el «colapso del idealismo» poco después de la muerte de Hegel en 1831. Dos principales reacciones tuvieron lugar entonces. Una fue el naturalismo, cuyos representantes eran fisiólogos por formación que trataron al idealismo alemán como signo de la bancarrota de toda especulación metafísica y del razonamiento a priori. Los naturalistas mantenían que todo conocimiento era a posteriori, puesto que las pretendidas disciplinas a priori podían ser reducidas o bien a disciplinas empíricas como la psicología o la fisiología o bien tenía que ser rechazada por ilusoria.`,
  G20: `La otra reacción fue el neo-kantismo, un movimiento que dominó la filosofía académica alemana entre los años 1835 y la Primera Guerra Mundial. Si la filosofía deseaba preservar su condición de respetable disciplina sui generis, tenía que abandonar la inútil competición con las ciencias especiales. Bajo el grito de guerra «¡Retorno a Kant!», los neo-kantianos retomaron la idea de que la filosofía es una disciplina de segundo orden. No investiga una pretendida realidad situada más allá de lo que es accesible a la ciencia, ni tampoco compite con ésta en la explicación de la realidad empírica. En lugar de ello, clarifica las precondiciones lógicas, conceptuales y metodológicas del conocimiento empírico, al igual que las precondiciones de modos no-filosóficos de pensamiento de carácter más general.`,
  G21: "Mientras el florecimiento de las ciencias especiales durante el siglo diecinueve presionaba sobre la idea de la filosofía como disciplina autónoma, se iba dibujando también la necesidad de la filosofía. La emergencia de nuevas disciplinas como la psicología y la rápida transformación de las materias establecidas, planteaban una nutrida serie de cuestiones conceptuales y metodológicas que atraía a los propios científicos hacia el territorio filosófico.",
  G22: "El álgebra dejó de ser cuantitativa y Weierstrass depuró el análisis de intuiciones geométricas y de la paradójica noción de los infinitesimales. El uno y la otra fueron «aritmetizados» en el sentido de que sus conceptos básicos quedaron definidos en términos de números naturales y de las operaciones aritméticas realizadas sobre ellos. Por otra parte, la introducción de las geometrías no Euclidianas y de las álgebras no-estándards, arrojaron dudas sobre la certidumbre de la matemática, amenazando con ello su conquistado estatuto de paradigma del conocimiento humano.",
  G23: "Igualmente desarrollaron un gran interés por la naturaleza de los números naturales, lo cual condujo a grandes avances en teoría de números, tal como las definiciones de infinitud y de continuidad, y a la invención de Cantor de la teoría-de-conjuntos transfinitos. Finalmente, la interacción entre lógica y matemática proporcionó los medios tanto para el incremento del rigor formal de las pruebas matemáticas como para asegurar la fundamentación de esa rama suya a la que todas las otras parecían reducibles: la aritmética.",
  G24: "La innovación más importante de la lógica formal de Bolzano fue su método de «variación» (1837, 11, §§ 147-162), que considera lo que ocurre al valor veritativo de una proposición compleja cuando alteramos alguno de sus componentes —bien sea éste un concepto u otra proposición—. La variación le permitió ofrecer definiciones precisas de todo un conjunto de conceptos lógicos.",
  G25: "En una verdad lógica, sólo las partículas lógicas «ocurren de manera esencial»; o sea, que podemos variar a voluntad todos los otros componentes sin producir con ello un cambio en su valor veritativo. Así, en (4) Bruto mató a Cesar o Bruto no mató a Cesar podemos hacer cualquier sustitución (consistente) en todos sus componentes, salvo en «o» y en «no», y el resultado seguirá siendo verdadero.",
  G26: "El mismo anti-subjetivismo y anti-psicologismo son los que guían el platonismo semántico de Bolzano, que anticipa al de Frege y Moore. Bolzano distinguía entre juicios mentales, sentencias lingüísticas y proposiciones (Sätze an sich). Una proposición como el teorema de Pitágoras puede ser expresada en diferentes lenguajes. No es verdadera o falsa en un determinado lenguaje o contexto, sino verdadera o falsa simpliciter, con independencia del hecho de que alguien pueda decir o juzgar alguna vez que es verdadera.",
  G27: "Pese a todas estas innovaciones de largo alcance, la lógica formal de Bolzano se quedó anticuada en un aspecto crucial: su fidelidad a la lógica silogística de Aristóteles para la que todas las proposiciones se dividen en sujeto y predicado. Pero la aplicación de ideas matemáticas a la lógica (hasta entonces reservada a los filósofos) condujo también a sistemas formales de una clase enteramente nueva. Capitalizando una analogía entre la disyunción/conjunción de conceptos y la adición/multiplicación de números, George Boole matematizó la silogística en términos de operaciones algebraicas sobre conjuntos.",
  G28: "Mas la línea divisoria en los desarrollos de la lógica formal fue, sin embargo, el Begriffsschrift (Conceptografía) de Gottlob Frege publicado en 1879. El sistema de Frege se basaba en la teoría de funciones más que en el álgebra. Al igual que Boole, también él matematizó la lógica. Pero en lugar de pretender presentar a la lógica como una rama de la matemática, se manifestó como el adalid del logicismo: el proyecto de ofrecer a la matemática un fundamento seguro por la vía de su derivación de la lógica.",
  G29: "La idea básica consiste en analizar a las proposiciones no bajo los conceptos de sujeto y predicado, como hacían la gramática escolar y la lógica aristotélica, sino bajo los de función y argumento. La expresión «x² + 1» representa una función de la variable x, porque el valor de x² + 1 depende únicamente del argumento con el que sustituyamos a x² —que tiene el valor 2 para el argumento 1, 5 para el argumento 2, etc.—.",
  G30: "En el sistema fregeano maduro, los conceptos son funciones que correlacionan objetos con un «valor-de-verdad». Así, el valor del concepto x conquistó y es «lo Verdadero» (p. ej., para los argumentos Cesar y las Galias) o «lo Falso» (p. ej., para Napoleón y Rusia), dependiendo de que la proposición resultante sea verdadera o falsa.",
  G31: "Frege extendió además la idea de función-veritativa a las conectivas proposicionales y a las expresiones de generalidad. La negación, por ejemplo, es una función veritativa que correlaciona un valor veritativo sobre el valor veritativo inverso: «p» tiene el valor veritativo Verdadero si y sólo si (resumido de aquí en adelante por: «ssi») su inversa «¬p» tiene el valor Falso. Similarmente, «Todos los electrones son negativos» queda analizada no como un sujeto «todos los electrones» y un predicado «son negativos», sino como el nombre de una función monádica.",
  G32: "Igualmente es capaz de revelar los defectos del argumento ontológico. A diferencia de la omnipotencia, la existencia no es un «componente» del concepto Dios, un rasgo que pudiera ser parte de su definición. Más bien, es la «propiedad» de ese concepto de poseer al menos un objeto que le pertenece. «Dios existe» adscribe una propiedad a un concepto más que a un objeto (su forma es «∃xGx» en lugar de «Eg»).",
  G33: "Frege se interesaba sólo por el «contenido» lógico de los signos, no por su «colorido», por las asociaciones mentales que ellos pudieran evocar. En Sobre Sentido y Referencia (1892) distinguía Frege dos aspectos de ese contenido: su referencia (Bedeutung), que es el objeto que se designa, y su sentido (Sense), el «modo de presentación» de ese referente. Mientras que las ideas (Vorstellungen) individuales asociadas con un signo son subjetivas (psicológicas), el sentido de éstas es objetivo.",
  G34: "El significado de una proposición es su valor de verdad; su sentido es el pensamiento que ella expresa. Al igual que los valores veritativos y los conceptos, los pensamientos son entidades abstractas independientes-de-la-mente. Son verdaderos o falsos con independencia de que alguien los capte o crea en ellos, y se dejen compartir o comunicar entre individuos diferentes. Frege utiliza estos tópicos no sólo para combatir el psicologismo, sino también para erigir una ontología del tercer mundo.",
  G35: "Según Frege, aunque las proposiciones aritméticas son a priori, son analíticas en el sentido de ser demostrables partiendo sólo de axiomas y definiciones. En los Grundlagen der Arithmetik (1884) critica brillantemente tanto la idea de Kant de que la aritmética está basada en una intuición a priori como la posición del empirismo de Mill que sostiene que está basada en generalizaciones inductivas. El logicismo de Frege culminó en su Grundgesetze der Arithmetik (1893 y 1903). Mas esto lo llevó al desastre, puesto que Frege había venido haciendo un uso excesivo de los conjuntos que admiten como miembros a otros conjuntos, con lo cual engendró la conocida paradoja del conjunto de todos los conjuntos que no son miembros de ellos mismos.",
  G36: "Cuando Bertrand Russell descubrió esta paradoja en 1903, se encontraba en vías de desarrollar un sistema lógico estrechamente parecido al de Frege. Y se afanó por proteger al logicismo de esta paradoja mediante una teoría de tipos, un «conjunto definido de reglas para decidir si una serie dada de palabras era o no era significativa» (1903, p. xi). Esta teoría prohíbe como «sinsentidos» fórmulas que dicen de un conjunto x lo que sólo puede decirse de los miembros de x, en concreto que x es (o no es) un miembro de x mismo.",
  G37: "Irónicamente, uno de los resultados subsiguientes significó un serio golpe para el proyecto logicista. De acuerdo con los «teoremas de incompletud» de Gödel (1931), ningún sistema lógico lo suficientemente potente para derivar la aritmética puede establecer su propia consistencia. Por lo tanto, no hay ningún sistema de axiomas auto-evidente y demostrablemente consistente capaz de generar todas las verdades matemáticas que milite en contra de la aspiración epistemológica del logicismo: asegurar los fundamentos de la matemática contra cualquier concebible amenaza de duda o inconsistencia.",
  G38: "Al igual que Frege, Russell contempla su sistema formal como un lenguaje ideal, un lenguaje que evita los notorios defectos lógicos de los lenguajes naturales —ambigüedad, indeterminación, vacío referencial, y confusión de categorías—. Pero sus intereses eran más amplios. Russell aplicó las nuevas técnicas lógicas no sólo a la fundamentación de la matemática, sino también a los problemas tradicionales de la epistemología y de la metafísica. Él esperaba sin duda poder colocar a la filosofía en su conjunto en el camino seguro de la ciencia."
})

const NODE_DIAGRAMS = Object.freeze({
  G00: ['antecedentes del análisis', 'lógica y análisis conceptual', 'giro lingüístico', 'inversión del giro'],
  G01: ['analysis', 'desatar / disolver', 'dos nociones'],
  G02: ['ser humano', 'animal + racionalidad', 'animal racional'],
  G03: ['proposición por probar', 'primeros principios', 'teorema demostrado'],
  G04: ['algo dado', 'elemento más básico', 'definir / probar'],
  G05: ['análisis', 'descubrimiento', 'síntesis / exposición'],
  G06: ['proposición verdadera', 'analizar sujeto', 'verdad idéntica'],
  G07: ['análisis de conceptos', 'characteristica universalis', 'prueba sintética'],
  G08: ['idea compleja', 'ideas simples', 'experiencia sensorial'],
  G09: ['episodios mentales', 'facultades', 'sensibilidad · entendimiento · razón'],
  G10: ['Analítica', 'lógica de la verdad', 'Dialéctica · lógica de la ilusión'],
  G11: ['juicio analítico', 'predicado contenido', 'juicio sintético · añade algo'],
  G12: ['a posteriori', 'experiencia', 'a priori · validez independiente'],
  G13: ['sintético', 'dice algo de la realidad', 'a priori', 'sin experiencia'],
  G14: ['contenido · a posteriori', 'forma · a priori', 'objeto de experiencia'],
  G15: ['metafísica en disputa', 'ciencias progresan', '¿papel propio de la filosofía?'],
  G16: ['objetos empíricos', 'condiciones no empíricas', 'metafísica trascendental'],
  G17: ['apariencias', 'espacio · tiempo · causalidad', 'cosas en sí · límite'],
  G18: ['tensión kantiana', 'idealismo alemán', 'super-ciencia', 'colapso'],
  G19: ['colapso del idealismo', 'naturalismo', 'todo conocimiento a posteriori'],
  G20: ['retorno a Kant', 'filosofía de segundo orden', 'precondiciones del conocimiento'],
  G21: ["ciencias especializadas","problemas conceptuales","fundamentos de las matemáticas"],
  G22: ["intuición geométrica","aritmetización","derivación axiomática"],
  G23: ["definiciones de infinito","Cantor","fundamentación aritmética"],
  G24: ["proposición compleja","sustitución de componentes","valor veritativo"],
  G25: ["partículas lógicas","variación uniforme","verdad lógica"],
  G26: ["juicio mental","oración lingüística","proposición en sí"],
  G27: ["lógica silogística","operaciones algebraicas","álgebra del pensamiento"],
  G28: ["Conceptografía (1879)","lógica de primer orden","logicismo"],
  G29: ["función x conquistó y","argumento César","argumento las Galias"],
  G30: ["concepto como función","argumentos dados","verdadero / falso"],
  G31: ["función condicional","∀x","alcance de ¬ y ∃"],
  G32: ["concepto G","¿algún x satisface G?","∃xGx"],
  G33: ["signo y referencia","modo de presentación (sentido)","idea subjetiva ≠ sentido"],
  G34: ["pensamiento compartible","no espacial ni temporal","tercer reino"],
  G35: ["conceptos lógicos de conjunto","autopertenencia","paradoja de Russell"],
  G36: ["paradoja","restricciones de tipos","Principia Mathematica"],
  G37: ["programa logicista","límites demostrativos","vigencia del análisis lógico"],
  G38: ["lenguaje ideal","problemas de epistemología y metafísica","idealismo británico · transición"]
})

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
["G15","G20","retoma la autonomía filosófica"],
["G20","G21","abre problemas de fundamentos"],
["G21","G22","presenta la crisis formal"],
["G22","G23","replantea el infinito"],
["G23","G24","da paso a Bolzano"],
["G24","G25","define verdad lógica"],
["G25","G26","articula objetividad semántica"],
["G26","G27","precede el álgebra lógica"],
["G27","G28","superado por función y argumento"],
["G28","G29","introduce el análisis funcional"],
["G29","G30","obtiene valores de verdad"],
["G30","G31","se extiende a cuantificadores"],
["G31","G32","analiza existencia"],
["G32","G33","distingue sentido y referencia"],
["G33","G34","funda el objetivismo"],
["G34","G35","sostiene el logicismo"],
["G28","G35","funda programa aritmético"],
["G35","G36","desencadena teoría de tipos"],
["G36","G37","alcanza límites"],
["G37","G38","transición histórica"],
["G26","G34","afinidad antipsicologista (reconstrucción)"]
]

function buildGlockPassageSchema(item) {
  const parts = NODE_DIAGRAMS[item.id] || [item.title]
  return {
    title: `Esquema de ${item.title}`,
    layout: 'flow',
    direction: 'vertical',
    minHeight: Math.max(360, 125 + parts.length * 92),
    flowGap: 54,
    nodes: parts.map((label, index) => ({
      id: `${item.id}-step-${index}`,
      label,
      caption: index === 0 ? 'punto de partida' :
        index === parts.length - 1 ? 'resultado / foco' : 'mediación',
      role: index === 0 ? 'term' :
        index === parts.length - 1 ? 'result' : 'mediation',
    })),
    edges: parts.slice(1).map((_, index) => ({
      from: `${item.id}-step-${index}`,
      to: `${item.id}-step-${index + 1}`,
      relationKind: 'derives',
    })),
  }
}

export const glockRouteTones = Object.freeze({ programa: 'gold', antiguos: 'blue', modernos: 'rust', kant: 'moss', juicios: 'violet', trascendental: 'bronze', reacciones: 'sage', matematicas: 'ochre', bolzano: 'moss', boole: 'rust', frege: 'blue', limites: 'violet', rebelion: 'plum' })
const TONES = glockRouteTones
export const glockNodeOrder = SOURCE_NODES.map((node) => node.id)

// Una geometría estable para tarjetas documentales: altura declarada y separación
// proporcional al texto real; nunca confiar en un ajuste automático de React Flow.
export const GLOCK_GEOMETRY = Object.freeze({
  width: 310, height: 360, gapX: 110, gapY: 120, columns: 3,
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
    sourcePassage: SOURCE_PASSAGES[item.id] || item.excerpt,
    diagram: NODE_DIAGRAMS[item.id] || [item.title],
    schema: buildGlockPassageSchema(item),
    class19Oct: glockClass19Oct[item.id] || null,
    page: item.page,
    sourceRef: 'Glock, 2012, cap. II, ' + item.page,
    question: item.question,
    branch: [item.section],
    dependsOn: item.dependsOn,
    produces: SOURCE_EDGES.filter(([source]) => source === item.id).map(([, target]) => target),
    code: item.id,
    number: String(index + 1).padStart(2,'0'),
    section: item.section,
    topicTone: TONES[item.section],
    color: SYSTEM_2D_THEME.nodeTopics[TONES[item.section]],
    classSeen: Boolean(glockClass19Oct[item.id]),
    concepts: [...new Set((NODE_DIAGRAMS[item.id] || [item.title]).slice(0, 4))],
  },
}))

export const glockLinks = SOURCE_EDGES.map(([source, target, label]) => ({
  id: source + '--' + target,
  source, target, label,
  critical: label.includes('reconstrucción'),
}))
export const glockNodeById = (id) => glockNodes.find((n) => n.id === id) || null

export const glockGuidedPhases = glockRoutes
  .filter((item) => item.id !== 'all')
  .map((item) => item.label)

export const glockGuidedRoute = glockNodeOrder.map((id) => {
  const node = glockNodeById(id)
  const phase = glockRoutes.find((item) => item.id === node?.data.section)?.label || node?.data.section
  return {
    id,
    phase,
    why: node?.data.explanation || '',
    nextQuestion: node?.data.question || null,
  }
})

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
