// FI265 · Sesión 02 (20 agosto 2026)
// Cinco núcleos de lectura construidos sólo desde el desarrollo ya documentado
// de la clase. Preguntas, secuencias y contrastes son editoriales de PHILOSOPHIA.
export const critical20Themes = [
  {
    id:'sentido',mark:'K',name:'Qué significa crítica',eyebrow:'Delimitación del campo',
    question:'¿Por qué no todo pensamiento que critica algo pertenece a la Teoría Crítica?',
    thesis:'El curso usa “Teoría Crítica” para una tradición históricamente situada, no como sinónimo de cualquier pensamiento inconforme.',
    argument:'La sesión comienza separando un uso amplio de “crítico” —capaz de abarcar corrientes sociales o culturales muy distintas— del sentido específico que interesa al curso: la constelación vinculada con el Instituto para la Investigación Social y con problemas filosóficos, sociales e históricos determinados.',
    development:'La distinción evita empezar por una etiqueta demasiado abierta. Una corriente puede cuestionar el orden social y, sin embargo, no compartir la genealogía, las preguntas ni los modos de investigación asociados con Frankfurt.',
    tags:['delimitación','Frankfurt','tradición'],anchor:'sentido',source:'Apartado 00 · delimitación conceptual documentada en la página de clase',
    positions:[
      {name:'Crítica en sentido genérico',description:'Cualquier orientación que cuestione prácticas, instituciones o ideas existentes.'},
      {name:'Teoría Crítica en el curso',description:'Tradición histórica y filosófica vinculada al Instituto y a una constelación específica de problemas.'}
    ],
    nodes:[
      {label:'Palabra amplia',title:'“Crítico”',body:'Puede nombrar muchas formas de cuestionamiento social o cultural.'},
      {label:'Problema',title:'La etiqueta no alcanza',body:'Compartir inconformidad no demuestra compartir método, historia o conceptos.'},
      {label:'Delimitación',title:'Teoría Crítica',body:'El curso estudia una tradición concreta alrededor de Frankfurt.'}
    ],
    guide:{
      what:'Representa el paso desde una palabra cotidiana muy amplia hacia el uso histórico y filosófico que organiza la materia.',
      how:'Comience por el sentido genérico, observe por qué resulta insuficiente y termine con la delimitación del objeto del curso.',
      why:'Sin esta distinción, autores y corrientes diferentes podrían agruparse sólo porque todos “critican” algo.',
      simple:'Criticar no basta para ser parte de la Escuela de Frankfurt.',
      takeaway:'La actitud crítica es más amplia que la Teoría Crítica; la pertenencia a una tradición exige historia, problemas y referencias específicas.'
    }
  },
  {
    id:'distincion',mark:'◎',name:'Teoría y sociedad',eyebrow:'Teoría tradicional / crítica',
    question:'¿Puede quien investiga la sociedad situarse completamente fuera de ella?',
    thesis:'La clase contrasta la imagen del observador independiente con una teoría que reconoce al sujeto como parte de la historia estudiada.',
    argument:'La oposición entre teoría tradicional y crítica no se presenta sólo como una diferencia de temas. La sesión problematiza la relación sujeto–objeto: quien investiga relaciones sociales también está formado por instituciones, lenguaje, conflictos e intereses históricos.',
    development:'El punto no obliga a concluir que todo conocimiento sea arbitrario. Abre otra pregunta: ¿qué ocurre con la pretensión de neutralidad absoluta cuando el propio investigador pertenece a la sociedad que analiza?',
    tags:['sujeto','sociedad','historicidad'],anchor:'distincion',source:'Apartado 01 · contraste sujeto/objeto y pertenencia histórica',
    positions:[
      {name:'Observador exterior',description:'Modelo en el que el sujeto aparece separado del objeto social que examina.'},
      {name:'Sujeto históricamente situado',description:'El investigador reconoce que participa en las condiciones sociales que intenta comprender.'}
    ],
    nodes:[
      {label:'Modelo 1',title:'Sujeto frente a objeto',body:'La teoría puede representarse como una mirada exterior e independiente.'},
      {label:'Objeción',title:'El sujeto también tiene historia',body:'Quien conoce está formado dentro de relaciones sociales concretas.'},
      {label:'Problema crítico',title:'Examinar la propia posición',body:'La teoría debe interrogar las condiciones que hacen posible su mirada.'}
    ],
    guide:{
      what:'Representa dos formas de pensar la posición de quien conoce ante la sociedad.',
      how:'Compare primero los modelos y después centre la atención en la dificultad de fingir que el sujeto social no pertenece a su propio objeto.',
      why:'Éste es uno de los desplazamientos que vuelve filosóficamente relevante la diferencia entre teoría tradicional y crítica.',
      simple:'No estudiamos la sociedad desde otro planeta: quien investiga también vive dentro de ella.',
      takeaway:'Reconocer la propia situación histórica no equivale a abandonar la verdad; obliga a examinar las condiciones del conocimiento social.'
    }
  },
  {
    id:'genealogia',mark:'↝',name:'Constelación intelectual',eyebrow:'Hegel · Marx · Lukács · Freud',
    question:'¿Por qué Frankfurt necesita más de una tradición para formular sus problemas?',
    thesis:'La sesión reconstruye una constelación en la que historicidad, relaciones sociales, cosificación y vida psíquica se vuelven recursos de investigación.',
    argument:'Hegel introduce categorías para pensar historicidad, mediación y contradicción; Marx desplaza la pregunta hacia condiciones materiales y relaciones sociales; Lukács permite examinar cosificación y totalidad; Freud abre el plano de deseo, represión y autoridad. La clase articula estas referencias como antecedentes necesarios para comprender la investigación frankfurtiana.',
    development:'El esquema no debe leerse como una cadena simple de maestros y discípulos. Es una reconstrucción pedagógica de recursos conceptuales que luego se combinarán de modos distintos dentro del Instituto.',
    tags:['Hegel','Marx','Lukács','Freud'],anchor:'genealogia',source:'Apartado 02 y desarrollos 03–06 · genealogía pedagógica de la sesión',
    positions:[
      {name:'Genealogía lineal',description:'Imaginar que cada autor transmite intacto un sistema al siguiente hasta producir Frankfurt.'},
      {name:'Constelación de recursos',description:'Reconocer problemas y conceptos diferentes que Frankfurt reelabora en nuevas investigaciones.'}
    ],
    nodes:[
      {label:'Historia y dialéctica',title:'Hegel',body:'Historicidad, mediación, contradicción y totalidad.'},
      {label:'Sociedad y cosificación',title:'Marx + Lukács',body:'Condiciones materiales, relaciones sociales, mercancía y apariencia de cosa.'},
      {label:'Subjetividad',title:'Freud',body:'Deseo, represión, autoridad y obediencia abren el plano psíquico.'}
    ],
    guide:{
      what:'Agrupa cuatro referencias de la sesión según el tipo de problema que ayudan a formular.',
      how:'Lea los bloques como aportes que se cruzan; no como etapas cronológicas que se cancelan unas a otras.',
      why:'Frankfurt estudia una sociedad histórica cuyos conflictos atraviesan instituciones, economía, cultura y subjetividad.',
      simple:'Para entender la dominación no basta mirar sólo ideas, sólo economía o sólo psicología.',
      takeaway:'La genealogía de clase funciona mejor como constelación de problemas que como una sucesión doctrinal rígida.'
    }
  },
  {
    id:'conceptos',mark:'Δ',name:'Conceptos e investigación',eyebrow:'Historia conceptual e interdisciplina',
    question:'¿Qué cambia cuando un concepto tiene historia y una sociedad exige varias disciplinas?',
    thesis:'Pensar críticamente exige reconstruir el movimiento de los conceptos y combinar preguntas que ninguna disciplina resuelve por sí sola.',
    argument:'La sesión sostiene que los conceptos no son definiciones inmóviles: nacen en problemas, cambian en tradiciones y adquieren funciones distintas. El ejemplo de libertad en Kant, Hegel y Marx hace visible ese desplazamiento. Al mismo tiempo, la investigación social se presenta como interdisciplinaria.',
    development:'La filosofía ayuda a reconstruir conceptos; sociología, economía, psicoanálisis, historia y estudios culturales aportan otros objetos y métodos. La unidad del problema no borra las diferencias entre disciplinas.',
    tags:['conceptos','historia','interdisciplina'],anchor:'conceptos',source:'Apartados 07 y 08 · vida histórica de conceptos e investigación interdisciplinaria',
    positions:[
      {name:'Definición inmóvil',description:'Tratar un término filosófico como si conservara siempre el mismo sentido.'},
      {name:'Historia y función',description:'Preguntar qué problema enfrenta el concepto, cómo cambia y qué trabajo realiza en cada autor.'}
    ],
    nodes:[
      {label:'Concepto',title:'Nace en un problema',body:'Su significado depende de preguntas y debates concretos.'},
      {label:'Historia',title:'Cambia de función',body:'Autores y tradiciones reelaboran lo recibido.'},
      {label:'Investigación',title:'Cruza disciplinas',body:'Comprender la sociedad exige articular distintos tipos de análisis.'}
    ],
    guide:{
      what:'Une dos motivos consecutivos de la sesión: historicidad conceptual e investigación interdisciplinaria.',
      how:'Siga primero el cambio de significado de los conceptos y después pregunte qué disciplinas permiten estudiar sus condiciones sociales.',
      why:'Impide reducir la filosofía a diccionario y la investigación crítica a una sola técnica.',
      simple:'Las palabras filosóficas cambian con los problemas, y los problemas sociales necesitan más de una herramienta para estudiarse.',
      takeaway:'Reconstruir la historia de un concepto y combinar disciplinas son operaciones distintas, aunque ambas combatan simplificaciones.'
    }
  },
  {
    id:'fromm',mark:'Ψ',name:'Fascismo y subjetividad',eyebrow:'Fromm · problema de la modernidad',
    question:'¿Cómo puede alguien defender políticamente una identidad y, al mismo tiempo, mostrar disposiciones autoritarias?',
    thesis:'El estudio asociado a Fromm permite relacionar estructuras sociales con disposiciones psíquicas sin reducir una dimensión a la otra.',
    argument:'La sesión presenta la investigación sobre obreros y empleados en vísperas del Tercer Reich como ejemplo de una pregunta interdisciplinaria. El interés está en la posible tensión entre identificación política declarada y rasgos de personalidad vinculados con obediencia, jerarquía o autoridad.',
    development:'Esa tensión conduce al problema mayor que cierra la clase: ¿cómo puede una modernidad que promete razón, libertad y progreso producir fascismo, dominación y barbarie? La pregunta no se resuelve todavía; organiza buena parte del horizonte frankfurtiano.',
    tags:['Fromm','autoridad','fascismo','modernidad'],anchor:'fromm',source:'Apartados 09 y 10 · Fromm, Tercer Reich y paradoja final de la sesión',
    positions:[
      {name:'Identidad declarada',description:'Lo que una persona dice sostener políticamente o socialmente.'},
      {name:'Disposición psíquica',description:'Formas de obediencia, autoridad o jerarquía que pueden no coincidir con esa declaración.'}
    ],
    nodes:[
      {label:'Plano social',title:'Identidad política',body:'Afiliaciones, discursos y posiciones declaradas.'},
      {label:'Plano psíquico',title:'Autoridad y obediencia',body:'Disposiciones que la investigación intenta examinar.'},
      {label:'Pregunta crítica',title:'Modernidad y dominación',body:'Razón y progreso pueden coexistir con fascismo y barbarie.'}
    ],
    guide:{
      what:'Representa la tensión entre dos planos de análisis y la pregunta histórica que esa tensión ayuda a formular.',
      how:'No convierta “plano psíquico” en diagnóstico individual. Compare lo declarado con las disposiciones que una investigación social intenta estudiar.',
      why:'El ejemplo muestra por qué Frankfurt combina sociología y psicoanálisis al preguntar por aceptación de estructuras de dominación.',
      simple:'Lo que una persona dice defender y la forma en que responde a la autoridad pueden no coincidir.',
      takeaway:'La paradoja final de la clase no afirma que razón produzca necesariamente fascismo; pregunta cómo pueden coexistir promesas emancipadoras y dominación histórica.'
    }
  }
]

export const critical20ThemeCount = critical20Themes.length
