/**
 * "Los problemas ontológicos en Hegel", presentación del profesor, 8 diapositivas.
 * literal = apartados del PowerPoint aportado, no citas verificadas del autor primario.
 * explanation y steps = análisis académico de PHILOSOPHIA separado de la fuente.
 */
export const hegelOntologySlides = [
  {
    id:'F01',slide:1,documentName:'Los problemas ontológicos en Hegel',seriesTotal:8,
    title:'Los problemas ontológicos en Hegel · dualismos de Kant',
    literal:[
      'Después de la filosofía de Immanuel Kant, surge el Idealismo Alemán.',
      'El Idealismo Alemán está conformado por Fichte, Schelling y Hegel.',
      'Los idealistas alemanes están familiarizados con las obras de Kant y con la polémica en torno a la cosa-en-sí (Reinhold, Schulze, Jacobi, etc.). También tienen como antecedente común el monismo panteísta de B. Spinoza.',
      'Los idealistas alemanes pretenderán superar los dualismos de la filosofía de Kant, a través de una reelaboración del monismo de Spinoza. ¿Cuáles eran los dualismos presentes en Kant? Son dos, a saber:',
      'a) En primera instancia, el dualismo entre el fenómeno y el noúmeno (cosa-en-sí). Recuérdese que, para Kant podemos conocer los fenómenos, pero no la cosa-en-sí.',
      'b) La dualidad, en torno al hombre, si se consideran las distintas visiones que aparecen tanto en la Crítica de la Razón Pura, como en la Crítica de la Razón Práctica. En el primer caso, el hombre es un fenómeno dentro de la naturaleza y, por ende, regido por leyes causales. En la segunda obra, el primer postulado es afirmar la libertad como condición de posibilidad del hombre como agente moral. Surge, así, la disyunción: o el hombre es un ser determinado como todos los fenómenos naturales; o, el hombre es un ser libre y, por tanto, un agente moral.'
    ],
    explanation:'La exposición del profesor presenta el idealismo alemán como una reacción a dos problemas kantianos distintos: la distinción epistemológica entre fenómeno y cosa en sí y la tensión práctica entre necesidad natural y libertad del agente moral. Reinhold, Schulze y Jacobi aparecen como participantes de la discusión sobre el estatuto de lo incognoscible. Spinoza sirve de antecedente monista, pero esto no implica que Fichte, Schelling y Hegel adopten la misma solución. La función del nodo es situar el problema de una unidad filosófica que no se limite a yuxtaponer dos mundos. Este contexto prepara la pregunta hegeliana por una totalidad y un movimiento conceptual, pero no equivale por sí solo a la deducción lógica de ser, nada y devenir. La caracterización es de la presentación docente.',
    role:'Situar las dos tensiones kantianas que motivan el trayecto del idealismo alemán.',
    concepts:['idealismo alemán','fenómeno','noúmeno','libertad','causalidad','Spinoza'],
    dependsOn:['M01','L19'],related:['F02','F03','F05'],
    steps:[
      ['Marco','Kant','Dos órdenes de problemas postkantianos','structure'],
      ['Límite teórico','Fenómeno / cosa en sí','Acceso al fenómeno, no al noúmeno','term','distingue',0],
      ['Tensión práctica','Causalidad / libertad','Naturaleza y agente moral','term','distingue',0],
      ['Reacción','Idealistas alemanes','Fichte, Schelling y Hegel','mediation','discuten',0],
      ['Horizonte','Unidad no dualista','Reelaboración del legado spinoziano','result','buscan',3]
    ],
  },
  {
    id:'F02',slide:2,documentName:'Los problemas ontológicos en Hegel',seriesTotal:8,
    title:'Fichte · Yo, No-Yo y primacía de la razón práctica',
    literal:[
      'Con tales antecedentes, surgen las filosofías de Fichte y de Schelling.',
      'Cada uno de los integrantes del idealismo alemán, son “hijos (intelectuales) de Kant”. Todos reconocieron su deuda con Kant.',
      'Siguiendo la metáfora, se puede decir que Fichte “heredó” de Kant la Crítica de la Razón Práctica. Pues Fichte va a sostener la importancia de la ética como central en el sistema filosófico.',
      'Con respecto al problema de la cosa-en-sí, Fichte elaboró la frase: el Yo pone al No-Yo. Significa que la materia es también puesta por el sujeto, pero de un modo inconsciente – a través de la imaginación productiva-.',
      'Fichte sostuvo la primacía de la Razón Práctica sobre la Razón Pura. Es decir, el conocimiento científico-tecnológico deberá estar supeditado a la ética. Si no es el caso que el conocimiento científico-tecnológico se subordine a la ética, entonces, se corre el riesgo de que el hombre cometa las peores atrocidades. En este sentido, Fichte fue como un profeta que, con su planteamiento, anticipa las catástrofes del siglo XX.'
    ],
    explanation:'El material docente caracteriza a Fichte a partir de la prioridad de la razón práctica, y presenta el planteamiento del Yo que pone al No-Yo como respuesta a la cosa en sí. El elemento decisivo es la actividad productiva del sujeto: no se requiere concebir la materia como un dato radicalmente ajeno a su actividad, aunque la exposición añade que tal posición opera inconscientemente mediante imaginación productiva. La valoración de Fichte como profeta de los desastres del siglo XX pertenece expresamente a la interpretación del profesor y no es una conclusión del argumento sobre el Yo. El nodo prepara el contraste con Schelling y Hegel: qué se toma como principio y cuál es el papel de la ética, la intuición o el método dialéctico en cada sistema.',
    role:'Explicar la apuesta fichteana y su contraste con la salida hegeliana.',
    concepts:['Fichte','Yo','No-Yo','imaginación productiva','razón práctica','ética'],
    dependsOn:['F01','M02'],related:['F03','F04'],
    steps:[
      ['Antecedente','Kant práctico','Ética y libertad como eje','structure'],
      ['Principio','Actividad del Yo','El Yo pone al No-Yo','concept','responde'],
      ['Mediación','Imaginación productiva','Producción no consciente de materia','mediation','explica'],
      ['Prioridad','Razón práctica','Saber técnico subordinado a ética','term','ordena'],
      ['Proyección docente','Consecuencias éticas','Advertencia interpretativa del profesor','result','advierte']
    ],
  },
  {
    id:'F03',slide:3,documentName:'Los problemas ontológicos en Hegel',seriesTotal:8,
    title:'Schelling · absoluto, intuición y obra de arte',
    literal:[
      'Schelling, siguiendo la metáfora, heredó de Kant, la Crítica del Juicio. En esta obra se aborda la importancia de la estética y Schelling reformulará la posibilidad de la metafísica desde el ámbito estético. Recuérdese que Kant había establecido la imposibilidad de la metafísica como ciencia.',
      'Bajo el influjo de Spinoza y la noción de “substancia”, Schelling propone que el objeto de estudio de la filosofía sea lo “Absoluto”. Si se considera la noción de substancia en Spinoza y se recuerda que la substancia abarca la totalidad de la realidad, entonces, la noción de “absoluto” se torna inteligible.',
      'Además, Spinoza había propuesto la intuición intelectual como un tercer grado de conocimiento que permitía la visión de la substancia en su eternidad. Schelling retoma la intuición intelectual y considera que por medio de ésta lo absoluto es asequible al genio artístico. La filosofía de Schelling es aristocrática y está dirigida a un público culto, educado, refinado en el arte.',
      'En Schelling se presenta el problema de la unidad de opuestos, en este caso, lo finito y lo infinito. Si se considera que la substancia spinoziana es infinita y que los modos derivados del atributo de la extensión, por ejemplo, los cuerpos, son finitos, entonces, el asunto es, solamente, trasladado a la esfera del arte.',
      'Schelling dice que: “La obra de arte es una manifestación finita de lo infinito”. Por lo demás, lo absoluto es asequible sólo al genio artístico y el artista, a través de su capacidad creativa, logra mostrar a lo absoluto por medio del arte; pero especialmente, a través del arte musical. Se accede a lo absoluto por medio de la intuición intelectual.',
      'Este orden de ideas tendrá un influjo posterior en filósofos antihegelianos como Arthur Schopenhauer y Friedrich Nietzsche. El lector puede consultar, respectivamente, El Mundo como Voluntad y como Representación, así como El origen de la Tragedia.'
    ],
    explanation:'Schelling aparece como figura intermedia entre el criticismo kantiano y la reformulación hegeliana: conserva la pregunta por la totalidad o absoluto, pero la presentación sitúa el acceso a éste en el arte y en la intuición intelectual. La tensión finito/infinito reaparece en la obra de arte como manifestación finita de lo infinito. La referencia a la música, a una audiencia cultivada y a Schopenhauer y Nietzsche es un desarrollo del marco interpretativo docente; no se debe proyectar sin más sobre las páginas 77–98 de la Ciencia de la lógica. La conexión esencial con Hegel está en la continuidad del objeto —el absoluto— y en el desacuerdo acerca del método: Hegel rechazará que la intuición intelectual baste para producir ciencia filosófica y elegirá un desarrollo dialéctico de categorías.',
    role:'Presentar el absoluto de Schelling como continuidad temática y contraste metodológico.',
    concepts:['Schelling','Crítica del juicio','absoluto','intuición intelectual','arte','finito/infinito'],
    dependsOn:['F01','F02','M03'],related:['F04','E01'],
    steps:[
      ['Herencia','Kant estético','Problema de la metafísica desde el juicio','structure'],
      ['Objeto','Absoluto','Spinoza y totalidad de la realidad','concept','propone'],
      ['Vía','Intuición intelectual','Acceso artístico al absoluto','mediation','intuye'],
      ['Problema','Finito / infinito','Unidad de opuestos en arte','term','expresa'],
      ['Ejemplo','Obra de arte','Manifestación finita de lo infinito','result','manifiesta'],
      ['Límite hegeliano','Método filosófico','Hegel propondrá la dialéctica','result','contrasta',2]
    ],
  },
  {
    id:'F04',slide:4,documentName:'Los problemas ontológicos en Hegel',seriesTotal:8,
    title:'Hegel (1770–1831) · contexto y método dialéctico',
    literal:[
      'La filosofía de Hegel se puede comprender si se toma en cuenta su contexto histórico-filosófico. Tal contexto se compone por la Revolución Francesa, el Idealismo Alemán y el Romanticismo.',
      'Hegel depende, de modo inmediato, de F. Schelling. Está de acuerdo con respecto al objeto de estudio de la filosofía: lo absoluto, la totalidad de la realidad, el ser en tanto que ser. Sin embargo, considera que la intuición intelectual no es el método adecuado para el conocimiento filosófico y, en su lugar, propondrá el método dialéctico.',
      'Hegel retoma de Kant las nociones de “Dialéctica” y de “Razón”. Así mismo, cabe resaltar que Fichte fue quien propuso el método dialéctico constituido por tesis, antítesis y síntesis. Recuérdese que Kant, considero que la Ideas metafísicas eran pensadas por la Razón. Y en la Dialéctica Trascendental, Kant estableció la imposibilidad de la metafísica como ciencia. ¿Por qué? Porque las Ideas de Dios, alma y mundo trascienden las condiciones de una experiencia posible; o dicho con claridad: tales ideas no se dan a través de las intuiciones puras de espacio y tiempo. Tales Ideas pueden ser pensadas, pero son incognoscibles. Kant considero que la Razón podía formular una tesis o una antítesis para cada una de las Ideas, pero que no había lugar para la síntesis.'
    ],
    explanation:'La presentación sitúa a Hegel en el marco de la Revolución Francesa, el romanticismo y el idealismo alemán. El vínculo con Schelling presenta una coincidencia en el objeto de la filosofía —el absoluto— y una diferencia decisiva en la vía de conocimiento: intuición intelectual frente a método dialéctico. El docente recupera el papel de las ideas de la razón y las antinomias en Kant, así como la tríada tesis/antítesis/síntesis asociada en el material a Fichte; esta genealogía esquemática no debe imponerse como plantilla sobre la deducción de ser/nada/devenir, que procede del examen de su propia indeterminación. El nodo responde a la pregunta de por qué la Ciencia de la lógica requiere un método que piense el movimiento de las categorías, no solamente su orden formal o su representación empírica.',
    role:'Delimitar objeto y método hegelianos a partir de Kant, Fichte y Schelling.',
    concepts:['Hegel','Revolución Francesa','Kant','Schelling','dialéctica','absoluto'],
    dependsOn:['F03','F02','M04'],related:['E01','F05','P01'],
    steps:[
      ['Contexto','Historia y crítica','Revolución francesa y postkantismo','structure'],
      ['Continuidad','Objeto: absoluto','Totalidad compartida con Schelling','concept','comparte'],
      ['Ruptura','Crítica de intuición','La intuición no basta como método','mediation','cuestiona'],
      ['Alternativa','Método dialéctico','Desarrollo conceptual de categorías','result','propone'],
      ['Precaución','Tesis / antítesis','Esquema docente ≠ deducción literal','term','distingue',3]
    ],
  },
  {
    id:'F05',slide:5,documentName:'Los problemas ontológicos en Hegel',seriesTotal:8,
    title:'Hegel crítico de Kant · conocer antes de conocer',
    literal:[
      'Hegel elaborará una crítica a Kant, sobre todo, en los ámbitos de la teoría del conocimiento y de la metafísica.',
      'En relación al conocimiento, Hegel considera que la dualidad del fenómeno y el noúmeno, es resultado del modo como Kant plantea el problema del conocimiento. Kant presupone la separación del sujeto y del objeto; así mismo, que el conocer (funciones a priori) es la herramienta o medio a través de la cual el sujeto conforma al objeto. Pero: “Pues si el conocer es el instrumento para apoderarse de la esencia absoluta, inmediatamente se advierte que la aplicación de una herramienta a una cosa no la deja tal y como ella es para sí, sino que introduce en ella una conformación y una alteración” (Fenomenología del Espíritu).',
      'Es decir, la dualidad kantiana se puede evitar si se replantea el problema del conocimiento. Además: “Pero la investigación del conocimiento no puede acaecer más que conociendo. Con este, así llamado instrumento, la investigación no significa otra cosa que conocerle. Y querer conocer antes de conocer es tan insensato como el sabio propósito de aquel escolástico de aprender a nadar antes de echarse al agua” (Enciclopedia de las Ciencias Filosóficas).'
    ],
    explanation:'Hegel es presentado aquí como crítico del presupuesto que trata el conocer como instrumento exterior a su objeto: primero se investigaría la capacidad de conocer y sólo después se abordaría la realidad. El profesor vincula ese presupuesto con la separación de fenómeno y noúmeno, y recuerda dos argumentos recogidos en sus diapositivas: la herramienta altera aquello a lo que se aplica, y la pretensión de conocer el conocimiento antes de conocer se asemeja a aprender a nadar fuera del agua. Estas referencias son al material docente y a otras obras hegelianas, no al pasaje de Ciencia de la lógica pp. 77–98. Sistemáticamente el nodo explica por qué el estudio del comienzo de la lógica debe ser una investigación inmanente de las categorías y no la imposición de un aparato de conocimiento ya fijado desde fuera.',
    role:'Conectar la crítica epistemológica de Hegel a Kant con la exigencia de un método inmanente.',
    concepts:['Kant','fenómeno','noúmeno','conocimiento como instrumento','Fenomenología del espíritu','Enciclopedia'],
    dependsOn:['F01','F04'],related:['E01','P01'],
    steps:[
      ['Punto de partida','Crítica de Kant','Sujeto y objeto separados','structure'],
      ['Modelo instrumental','Conocer como medio','La herramienta altera el objeto','term','supone'],
      ['Paradoja','Antes de conocer','No se aprende a nadar sin agua','mediation','objeta'],
      ['Revisión','Conocimiento inmanente','Investigar el conocer conociendo','concept','replantea'],
      ['Consecuencia','Método lógico','Evitar imponer un medio exterior','result','prepara']
    ],
  },
  {
    id:'F06',slide:6,documentName:'Los problemas ontológicos en Hegel',seriesTotal:8,
    title:'El ser, la nada y el devenir · Heráclito',
    literal:[
      'Hegel aborda estos conceptos en su libro Ciencia de la Lógica (1816).',
      'Cabe señalar que la lógica de Hegel no es meramente formal, sino material. O dicho de otra manera: Hegel elabora una concepción dialéctica de la realidad. Su ontología es dialéctica. Su concepción de la realidad, encuentra un antecedente en la filosofía antigua, a saber: en los aforismos de Heráclito.',
      'Heráclito formula con claridad la unidad de los opuestos. Por ejemplo: Una sola cosa es lo sabio, conocer la Razón, por la cual todas las cosas son gobernadas por medio de todas” (41). “No comprenden cómo lo divergente converge consigo mismo: armonía de tensiones opuestas, como las del arco y la lira (51).',
      'Hegel retomará la visión de que la realidad es devenir. Y el devenir será la unidad del ser y la nada.'
    ],
    explanation:'El profesor relaciona la ciencia lógica de Hegel con la concepción de una realidad en movimiento y con aforismos de Heráclito acerca de armonía de contrarios. El arco y la lira funcionan como antecedentes pedagógicos de la posibilidad de una unidad que mantenga tensiones. Esta filiación histórica debe distinguirse de la demostración interna de la primera tríada lógica: los ejemplos de cosas con propiedades determinadas no sustituyen la abstracción de ser y nada puros. El nodo introduce la oposición entre lógica entendida como forma vacía y lógica especulativa como exposición de determinaciones, preparando la lectura estricta de las primeras páginas, en particular A. Ser, B. Nada y C. Devenir. La datación y la numeración de fragmentos son las del documento del profesor.',
    role:'Situar a Heráclito como antecedente didáctico y preparar la distinción entre ejemplo y deducción.',
    concepts:['lógica hegeliana','Heráclito','unidad de opuestos','ser','nada','devenir'],
    dependsOn:['F04','E01'],related:['F07','P03','P05'],
    steps:[
      ['Problema','Lógica material','Más que clasificación formal','structure'],
      ['Antecedente','Heráclito','Razón y armonía de tensiones','term','remite'],
      ['Ejemplo','Arco y lira','Lo divergente conserva tensión','concept','ilustra'],
      ['Precaución','Historia ≠ deducción','No trasladar el ejemplo al ser puro','mediation','distingue'],
      ['Lectura','Ser / nada / devenir','Verificar el tránsito en Hegel','result','conduce']
    ],
  },
  {
    id:'F07',slide:7,documentName:'Los problemas ontológicos en Hegel',seriesTotal:8,
    title:'Comienzo de la lógica · pureza y ser determinado',
    literal:[
      'Hegel plantea tres términos:',
      '1. Ser Puro. 2. Nada Pura 3. Devenir.',
      '“Puro” se entiende como ausencia de determinación y de contenido. Es decir, el “ser puro” no equivale a un determinado ente. A la diferencia entre el “ser” y el “ente” se le denomina como “diferencia ontológica”.',
      'Dado que el ser puro y la nada pura son ausencia de determinación y de contenido, se puede decir que son inseparables; es decir, su oposición se da al interior de la unidad que es el devenir.',
      'El ser y la nada son lo mismo, pero al mismo tiempo son distintos. La verdad no es el puro ser ni la pura nada, sino que la verdad es el devenir. El devenir es el primer concepto filosófico, ya que, en tanto unidad, mantiene en su interior la tensión de los opuestos.',
      'Y, Hegel añade: “Del devenir nace el ser determinado”. Es decir, el ser determinado es la realidad en tanto conformada por distintos tipos de entes. Cada ser determinado, presupone el devenir.'
    ],
    explanation:'Esta diapositiva recorre el comienzo de la lógica con dos advertencias decisivas: puro significa carente de determinación, y ser puro no es un ente concreto. El texto del profesor denomina “diferencia ontológica” a la distinción entre ser y ente; esta designación queda atribuida al material docente, sin presentarse como terminología literal del pasaje hegeliano. La unidad de ser y nada no debe confundirse con una tercera cosa fija: el devenir expresa su tránsito recíproco y constituye su primera verdad. El último momento conecta ese movimiento con el ser determinado como resultado, sin convertir los ejemplos de entes en punto de partida. El esquema separa cuidadosamente la tríada inicial del umbral del Dasein, cuyo desarrollo completo pertenece al capítulo posterior.',
    role:'Recorrer el argumento ser/nada/devenir y marcar el umbral del ser determinado.',
    concepts:['ser puro','nada pura','devenir','diferencia ontológica · término docente','ser determinado'],
    dependsOn:['F06','E02','P01','P02'],related:['P03','E04','P19'],
    steps:[
      ['Inicio','Ser puro','Inmediación sin contenido','concept'],
      ['Momento opuesto','Nada pura','Igual falta de determinación','term','traspasa'],
      ['Movimiento','Devenir','Identidad y diferencia en tránsito','mediation','se-mueve'],
      ['Precaución','Ser ≠ ente','Terminología explicativa del profesor','structure','distingue',0],
      ['Umbral','Ser determinado','Resultado del devenir, no ser puro','result','resulta',2]
    ],
  },
  {
    id:'F08',slide:8,documentName:'Los problemas ontológicos en Hegel',seriesTotal:8,
    title:'Argumento ontológico · de Kant a Hegel',
    literal:[
      'Hegel se replantea la crítica de Kant al argumento ontológico. Si se recuerda, para Kant el juicio: “Dios existe” es sintético. Es decir, dado que la “existencia” es una categoría, no se puede aplicar legítimamente a la Idea de Dios, pues, éste no se da a las intuiciones puras de espacio y de tiempo.',
      'Más aún, Kant fue claro al señalar que de la mera posibilidad de pensar un concepto, no se seguía la existencia del objeto pensado por el objeto. Del pensar no se sigue el ser. O dicho en palabras de Kant: “El ser no es un predicado real”. De pensar a “Dios” no se sigue la “existencia” de Dios. La existencia queda reducida a la función copulativa del “es” en el juicio. Decir “Dios es” no equivale a decir: “Dios existe”. El ser, repito, queda delimitado en su función copulativa.',
      'Sin embargo, Hegel considera que Kant ha cometido un error al pensar a Dios como si fuera un ente finito. Pues, según Hegel, la definición de los seres finitos consiste en que son separables, el concepto y el ser (existencia), pero en relación a Dios, éste es la substancia infinita y es la única realidad en la que son inseparables la esencia y la existencia. En palabras de Hegel: “La definición de las cosas finitas consiste en que en ellas son diferentes el concepto y el ser (…) Por el contrario, la definición abstracta de Dios es justamente esta: que su concepto y ser son inseparados e inseparables. La verdadera crítica de las categorías y de la razón consiste precisamente en esto: instruir al conocimiento acerca de esta diferencia y alejarlo de la aplicación de las determinaciones y relaciones de lo finito a Dios” (CL, p.83).'
    ],
    explanation:'La diapositiva vuelve al argumento ontológico desde la diferencia entre el pensamiento de un concepto y la existencia del objeto. En la primera parte se reconstruye la crítica de Kant: el ser no es un predicado real, por lo cual de la mera posibilidad del concepto no se infiere existencia. En la segunda se presenta la respuesta hegeliana: esa distinción, válida para los entes finitos, no se aplica sin crítica al absoluto, cuyo concepto y ser se definen inseparables. La página 83 se ofrece en la diapositiva como localizador; su reproducción se conserva como material del profesor y exige cotejo antes de atribuir literalmente las palabras al pasaje primario. El nexo relevante con la lectura son P07 y P08, además del tratamiento extenso en E05 y E06: aquí el estudiante compara las dos formulaciones docentes con un solo argumento.',
    role:'Conectar las dos exposiciones docentes de Kant/Hegel y el pasaje primario sobre lo finito.',
    concepts:['argumento ontológico','Kant','Hegel','predicado real','Dios','ser finito','concepto y existencia'],
    dependsOn:['E05','E06','P07','P08'],related:['E07','F04'],
    steps:[
      ['Problema','Dios existe','¿Qué implica el concepto?','structure'],
      ['Crítica kantiana','Ser no es predicado','Pensar no garantiza existencia','term','objeta'],
      ['Ejemplo conceptual','Lo finito','Concepto y ser distinguibles','term','delimita'],
      ['Respuesta hegeliana','No aplicar lo finito','Categorías impropias para Dios','mediation','reformula'],
      ['Resultado','Concepto y ser','Inseparabilidad del absoluto','result','concluye']
    ],
  },
]

export const hegelOntologySlideById=new Map(hegelOntologySlides.map(slide=>[slide.id,slide]))
