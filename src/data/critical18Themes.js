// FI265 · Sesión 01 (18 agosto 2026)
// Nodos de lectura académica de PHILOSOPHIA; no reproducen un esquema literal de la profesora.
// Fuente acotada a los 11 apartados documentados de esta clase. La pedagogía está identificada como editorial.
export const critical18Themes = [
  {
    id:'pluralidad',mark:'≠',name:'Pluralidad',eyebrow:'Formación filosófica',
    question:'¿Aprender una tradición exige abandonar las demás?',
    thesis:'La clase defiende ampliar el repertorio filosófico, no cambiar una ortodoxia por otra.',
    argument:'La profesora observa que una formación concentrada en una tradición deja fuera otros modos de formular problemas. Introducir Teoría Crítica no significa declarar inútil la filosofía analítica; significa poder estudiar seriamente más de una forma de razonar antes de escoger recursos para un problema.',
    development:'La diferencia se vuelve pedagógica: conocer métodos distintos ayuda a reconocer sus preguntas y sus límites. La sesión presenta la tensión con la tradición analítica como un problema transversal del curso, no como una pelea que ya tenga un vencedor.',
    tags:['formación','tradiciones','método'],anchor:'pluralidad',source:'Apartados 02 y 03 · exposición de clase; síntesis editorial',
    positions:[
      {name:'Formación de una sola vía',description:'Aprender intensamente una perspectiva sin contrastar sus preguntas con las de otras tradiciones.'},
      {name:'Formación plural',description:'Estudiar con rigor perspectivas diferentes y decidir qué ofrecen ante cada problema.'}
    ],
    nodes:[
      {label:'Punto de partida',title:'Una tradición domina',body:'El currículo puede privilegiar cierta forma de hacer filosofía.'},
      {label:'Problema',title:'Faltan herramientas',body:'No conocer otras tradiciones limita los recursos disponibles.'},
      {label:'Continuidad',title:'Estudiar otras formas',body:'La Teoría Crítica amplía las preguntas del estudiante.'}
    ],
    guide:{
      what:'Representa dos modos de concebir la formación: concentrarse en una perspectiva o abrir el estudio a tradiciones diferentes.',
      how:'Lea primero el diagnóstico de predominio curricular. Pase después a la dificultad que provoca y termine con la propuesta formativa: conocer otras maneras de filosofar.',
      why:'Evita malinterpretar la sesión como un rechazo total de la filosofía analítica. La profesora señala expresamente que esa tradición también es valiosa.',
      simple:'No se trata de cambiar de bando: se trata de tener más herramientas para entender problemas diferentes.',
      takeaway:'Pluralidad no significa afirmar que todos los métodos son iguales ni que unos deban desaparecer.'
    }
  },
  {
    id:'dialectica',mark:'↔',name:'Analítica / dialéctica',eyebrow:'Contraste metodológico',
    question:'¿Qué intenta mostrar el contraste entre Kant, Hegel y Adorno?',
    thesis:'El encuadre compara maneras de pensar; no presenta una genealogía histórica exhaustiva.',
    argument:'La profesora utiliza de forma deliberadamente esquemática a Kant y Hegel para abrir la discusión sobre el pensamiento analítico y el dialéctico. Con ello anuncia un tema del semestre: algunas corrientes filosóficas plantean de forma distinta la lógica, la investigación social y la relación entre pensamiento y realidad.',
    development:'Se anticipa la dialéctica negativa de Adorno como un modo de problematizar que no se limita a aplicar reglas fijas de identidad. Pero la sesión también reconoce cruces: la Teoría Crítica no carece de elementos kantianos. Por eso el esquema orienta la lectura, pero no reemplaza la historia efectiva de las tradiciones.',
    tags:['Kant','Hegel','Adorno'],anchor:'dialectica',source:'Apartado 03 · genealogía esquemática expresada en clase',
    positions:[
      {name:'Orientación analítica (esquema docente)',description:'La clase la emplea como término de contraste para introducir distintas formas de investigación y razonamiento.'},
      {name:'Orientación dialéctica (esquema docente)',description:'La clase la vincula con Hegel y anuncia su reelaboración crítica por Adorno.'}
    ],
    nodes:[
      {label:'Referencia',title:'Kant',body:'Figura de contraste en la genealogía introductoria de clase.'},
      {label:'Tensión',title:'Hegel',body:'Se abre la diferencia entre análisis y movimiento dialéctico.'},
      {label:'Pregunta futura',title:'Adorno',body:'Se anuncia una dialéctica negativa que habrá que estudiar en sus propios términos.'}
    ],
    guide:{
      what:'Sitúa tres referencias mencionadas para orientar una diferencia metodológica, sin afirmar una filiación simple entre escuelas.',
      how:'Lea las tarjetas como referencias de discusión. No interprete la sucesión visual como “Kant fundó la filosofía analítica” o “Hegel creó por sí solo la Teoría Crítica”.',
      why:'Una simplificación didáctica puede convertirse fácilmente en un error historiográfico si olvidamos que la profesora la presentó como esquema provisional.',
      simple:'El curso compara dos maneras de enfrentar problemas filosóficos y anuncia que Adorno cambiará el modo de entender la dialéctica.',
      takeaway:'La clase propone un contraste para estudiar; su exactitud histórica requiere lecturas posteriores y no se da por demostrada aquí.'
    }
  },
  {
    id:'aprender',mark:'↗',name:'Aprender a filosofar',eyebrow:'Método de lectura',
    question:'¿Cómo se aprende a filosofar si no basta con seguir una receta?',
    thesis:'Estudiar cómo un autor piensa puede enseñar más que memorizar una lista de pasos.',
    argument:'La profesora insiste en leer de cerca a quien ya ha construido una obra filosófica. No se trata sólo de recoger conclusiones, sino de reconstruir cómo surge una pregunta, qué operaciones conceptuales realiza el autor y cómo transforma un problema.',
    development:'Su experiencia con Adorno aparece en la clase como ejemplo de ese aprendizaje: no sólo encontró contenidos nuevos, sino otra forma de problematizar. La sistematización editorial traduce esa orientación a una ruta de lectura práctica, sin convertirla en una consigna literal de cinco pasos.',
    tags:['lectura','reconstrucción','Adorno'],anchor:'aprender',source:'Apartado 04 · recomendación metodológica y ejemplo docente',
    positions:[
      {name:'Aprender resultados',description:'Retener tesis y definiciones para repetirlas de memoria.'},
      {name:'Aprender operaciones',description:'Reconstruir preguntas, pasos de razonamiento y decisiones conceptuales de una obra.'}
    ],
    nodes:[
      {label:'Entrada',title:'Leer la obra',body:'Localizar la pregunta y el problema al que responde.'},
      {label:'Trabajo',title:'Reconstruir',body:'Examinar cómo articula sus conceptos y argumentos.'},
      {label:'Resultado abierto',title:'Volver a pensar',body:'Usar lo comprendido para formular preguntas propias.'}
    ],
    guide:{
      what:'Es una ruta editorial para aplicar la recomendación de estudiar el ejercicio vivo de filosofar.',
      how:'A cada texto pregunte: ¿qué problema abre?, ¿qué pasos da?, ¿qué dificultad deja? La secuencia visual ayuda a releer, no sustituye la obra.',
      why:'Permite que un lector diez años después recuerde no sólo “qué dijo Adorno”, sino por qué su modo de trabajar un problema fue formativo para la profesora.',
      simple:'Más que aprenderse el resultado, hay que seguir el camino de pensamiento que llevó a él.',
      takeaway:'La ruta de tres pasos es una herramienta de estudio de PHILOSOPHIA; no es un método formal atribuido a Adorno.'
    }
  },
  {
    id:'transdisciplina',mark:'Σ',name:'Sociedad y disciplinas',eyebrow:'Investigación social',
    question:'¿Por qué la filosofía es necesaria, pero no suficiente?',
    thesis:'Investigar críticamente la sociedad exige dialogar con saberes que estudian sus procesos concretos.',
    argument:'La Teoría Crítica es presentada en la clase como investigación social que no permanece aislada en el terreno de la filosofía. Para comprender un fenómeno histórico hacen falta preguntas conceptuales y materiales empíricos de otras disciplinas: sociología, historia, psicología y ciencias sociales.',
    development:'La profesora menciona también la combinación de técnicas cuantitativas y cualitativas como parte del horizonte de investigación de esta tradición. Esto no significa que todas sus obras usen los mismos métodos ni que la primera clase haya desarrollado un protocolo empírico completo.',
    tags:['filosofía','historia','sociología','psicología'],anchor:'transdisciplina',source:'Apartado 05 · exposición de clase; desarrollo de estudio',
    positions:[
      {name:'Filosofía aislada',description:'Preguntas conceptuales sin diálogo suficiente con procesos históricos y sociales.'},
      {name:'Trabajo transdisciplinario',description:'Articular conceptos con investigaciones que permitan comprender condiciones sociales concretas.'}
    ],
    nodes:[
      {label:'Pregunta',title:'¿Qué es la dominación?',body:'La filosofía ayuda a precisar conceptos y problemas.'},
      {label:'Contexto',title:'¿Cómo ocurre?',body:'La historia y las ciencias sociales aportan procesos y condiciones concretas.'},
      {label:'Investigación',title:'Poner en relación',body:'Las dimensiones se examinan juntas, sin confundirlas.'}
    ],
    guide:{
      what:'Representa distintos aportes de investigación frente a una pregunta social; el ejemplo sobre dominación es editorial.',
      how:'La primera tarjeta plantea un problema conceptual; la segunda pide condiciones históricas y sociales; la tercera reúne ambas tareas en un estudio.',
      why:'Muestra por qué el curso puede leer filosofía y, a la vez, estudiar instituciones, prácticas y experiencias sin considerar esa combinación una contradicción.',
      simple:'Para comprender una sociedad no alcanza con definir palabras: también hay que investigar lo que ocurre y cómo ocurre.',
      takeaway:'Las disciplinas colaboran, pero una no reemplaza automáticamente a otra.'
    }
  },
  {
    id:'archivo',mark:'◫',name:'Memoria del curso',eyebrow:'Lecturas, evaluación y archivo',
    question:'¿Cómo estudiar durante el semestre para poder defender lo aprendido?',
    thesis:'La organización del curso favorece la lectura propia, la participación argumentada y la defensa oral de ideas.',
    argument:'Las indicaciones en Classroom sirven como guía para encontrar conceptos, pero no se pidieron reportes de lectura que deban subirse. La profesora recomienda tomar apuntes para intervenir en la discusión, preparar el examen y sostener una exposición con preguntas.',
    development:'La evaluación registrada en esta sesión distribuye 30 % a participación, 30 % al examen y 40 % a exposición y defensa. Para el examen se prevé consultar cuaderno y lecturas impresas, no el celular ni la computadora. La primera lectura es Reale y Antiseri, «La Escuela de Frankfurt».',
    tags:['30/30/40','lecturas','exposición'],anchor:'evaluacion',source:'Apartados 07, 08, 09 y 10 · encuadre y consigna documentados',
    positions:[
      {name:'Memorizar para entregar',description:'Reducir el trabajo a producir un escrito o recordar definiciones.'},
      {name:'Leer para sostener razones',description:'Llegar al diálogo, justificar interpretaciones y responder preguntas sobre la lectura.'}
    ],
    nodes:[
      {label:'Preparación',title:'Leer y anotar',body:'Seguir orientaciones de lectura y elaborar notas propias.'},
      {label:'Durante la clase',title:'Participar',body:'Formular preguntas y aportar argumentos fundados.'},
      {label:'Evaluación',title:'Defender',body:'Usar el cuaderno y las lecturas para explicar un tema.'}
    ],
    guide:{
      what:'Resume una estrategia de trabajo compatible con las reglas efectivamente anunciadas en el encuadre.',
      how:'Las tarjetas siguen un ciclo práctico: preparar la lectura, trabajarla en clase, justificar una exposición. El diagrama no altera los porcentajes oficiales.',
      why:'Conservar los criterios concretos junto a la reflexión pedagógica ayuda a distinguir el contenido filosófico de las obligaciones del curso.',
      simple:'Lea para entender y poder explicar con sus propias razones; no sólo para entregar algo.',
      takeaway:'Participación 30 %, examen 30 % y exposición con defensa 40 %. Las indicaciones de lectura no equivalen a reportes de entrega.'
    }
  }
]

export const critical18ThemeCount = critical18Themes.length
