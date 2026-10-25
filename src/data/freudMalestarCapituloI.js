// Freud, El malestar en la cultura, cap. I, PDF Omega Alfa, trad. López Ballesteros.
// PDF pp. 2–13 hasta el encabezado II. Análisis editorial; no se atribuye a la clase.
export const freudISections = [
  {
    "id": "planteamiento",
    "label": "I · Problema y sentimiento oceánico",
    "question": "¿Es la vivencia de unidad con el mundo el origen de la religión?",
    "before": "El autor inicia señalando la distancia entre valores admirados y valores genuinos.",
    "after": "Para examinar el sentimiento, debe investigar la constitución de los límites del yo.",
    "tone": "rust"
  },
  {
    "id": "constitucion",
    "label": "II · Formación del yo y realidad",
    "question": "¿Cómo aprende el niño a distinguir el yo del mundo?",
    "before": "El yo adulto parece delimitado, pero esa frontera requiere una explicación genética.",
    "after": "La posibilidad de una vivencia yoica anterior exige examinar la persistencia psíquica.",
    "tone": "blue"
  },
  {
    "id": "memoria",
    "label": "III · Conservación de lo pretérito",
    "question": "¿De qué modo puede persistir lo antiguo en la vida psíquica?",
    "before": "La explicación genética postula un sentimiento yoico primitivo que podría subsistir.",
    "after": "La hipótesis permite volver a valorar el sentimiento oceánico sin atribuirle necesariamente la fuente de la religión.",
    "tone": "plum"
  },
  {
    "id": "religion",
    "label": "IV · Desamparo y necesidad religiosa",
    "question": "¿Qué origen de la religiosidad prefiere Freud?",
    "before": "Haber explicado psicológicamente lo oceánico no prueba que funde la religiosidad.",
    "after": "El capítulo II abre otra discusión: las doctrinas religiosas y los alivios frente al sufrimiento.",
    "tone": "sage"
  }
]
export const freudIConcepts = [
  {
    "id": "F01",
    "section": "planteamiento",
    "title": "El problema de los valores",
    "page": "p. 2",
    "kind": "Apertura",
    "summary": "Freud contrasta poder, éxito y riqueza con valores poco reconocidos.",
    "explanation": "El capítulo empieza señalando que los seres humanos suelen confundir los criterios de grandeza, sin negar la diversidad de juicios y deseos.",
    "simple": "No comienza definiendo cultura: nos advierte que la admiración social puede estar guiada por criterios engañosos.",
    "question": "¿Con qué contraste abre Freud y por qué introduce una salvedad?",
    "answer": "Con la oposición entre poder, éxito, riqueza y otros valores; recuerda la diversidad de los juicios humanos.",
    "dependsOn": [],
    "steps": [
      "Criterios sociales de valor",
      "Diversidad de valoraciones"
    ],
    "order": 1,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F02",
    "section": "planteamiento",
    "title": "El testimonio del amigo",
    "page": "p. 3",
    "kind": "Interlocución",
    "summary": "Un amigo atribuye la energía religiosa a una sensación subjetiva de eternidad.",
    "explanation": "El interlocutor comparte la crítica a la religión como ilusión, pero objeta que se haya olvidado una experiencia subjetiva previa a las creencias institucionales.",
    "simple": "No pretende demostrar una doctrina: dice sentir una pertenencia ilimitada al mundo.",
    "question": "¿Qué propone el amigo como posible fuente de la religiosidad?",
    "answer": "Una vivencia subjetiva, no una demostración de inmortalidad ni una proposición del credo.",
    "dependsOn": [
      "F01"
    ],
    "steps": [
      "Crítica de la ilusión religiosa",
      "Vivencia subjetiva invocada como fuente"
    ],
    "order": 2,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F03",
    "section": "planteamiento",
    "title": "Sentimiento oceánico",
    "page": "pp. 3–4",
    "kind": "Concepto",
    "summary": "Vivencia de pertenencia inseparable a la totalidad, sin límites ni barreras.",
    "explanation": "Freud caracteriza aquello que su interlocutor llama oceánico como experiencia de comunión con el todo. Señala que él mismo no la reconoce en su experiencia, sin negar que otros la vivan.",
    "simple": "Es sentirse uno con el mundo; eso no implica que las cosas efectivamente carezcan de límites.",
    "question": "¿Sentir lo oceánico equivale a demostrar la verdad de una religión?",
    "answer": "No. Freud distingue la vivencia subjetiva de su interpretación y de las afirmaciones religiosas.",
    "dependsOn": [
      "F02"
    ],
    "steps": [
      "Unidad vivida",
      "Interpretación de su origen"
    ],
    "order": 3,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F04",
    "section": "planteamiento",
    "title": "Explicación genética, no negación",
    "page": "p. 4",
    "kind": "Método",
    "summary": "Freud pregunta por la formación del sentimiento, en lugar de declarar inexistente la vivencia.",
    "explanation": "Separa la existencia del sentimiento de la pretensión de que sea el origen de la necesidad religiosa. Propone una explicación psicoanalítica genética: investigar cómo pudo formarse.",
    "simple": "Aunque alguien sienta unión con todo, todavía falta explicar de dónde viene esa vivencia.",
    "question": "¿Qué dos preguntas deben distinguirse?",
    "answer": "Si el sentimiento ocurre, y si se interpreta correctamente como origen de la religiosidad.",
    "dependsOn": [
      "F03"
    ],
    "steps": [
      "Experiencia subjetiva",
      "Pregunta por su génesis"
    ],
    "order": 4,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F05",
    "section": "constitucion",
    "title": "La apariencia del yo unitario",
    "page": "pp. 4–5",
    "kind": "Estructura",
    "summary": "El yo adulto parece claramente separado del exterior, pero continúa interiormente con el ello.",
    "explanation": "Freud cuestiona que el yo sea un bloque autosuficiente: hacia dentro sus límites con el ello inconsciente no son precisos; hacia fuera, la separación parece más estable.",
    "simple": "El yo no es una caja cerrada con paredes perfectamente delimitadas.",
    "question": "¿Por qué la apariencia de unidad del yo es engañosa?",
    "answer": "Porque su continuidad interior con el ello impide tratarlo como entidad de fronteras absolutas.",
    "dependsOn": [
      "F04"
    ],
    "steps": [
      "Yo aparente",
      "Continuidad interior con el ello"
    ],
    "order": 5,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F06",
    "section": "constitucion",
    "title": "Límites alterables: amor y patología",
    "page": "p. 5",
    "kind": "Caso",
    "summary": "El enamoramiento y ciertos estados patológicos muestran que los límites del yo pueden modificarse.",
    "explanation": "Freud recurre a la vivencia amorosa de unidad entre yo y tú y a estados en que lo interno se experimenta como extraño o se atribuye afuera lo propio. No equipara por ello amor y patología.",
    "simple": "Sentirnos una sola cosa con otra persona muestra que la frontera vivida del yo no es fija.",
    "question": "¿Qué demuestran los ejemplos del enamoramiento y de las alteraciones clínicas?",
    "answer": "Que los límites del sentimiento yoico no son inmutables; no que todos los casos tengan el mismo estatuto.",
    "dependsOn": [
      "F05"
    ],
    "steps": [
      "Límite yo–objeto",
      "Variaciones de ese límite"
    ],
    "order": 6,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F07",
    "section": "constitucion",
    "title": "El lactante aún no distingue el afuera",
    "page": "pp. 5–6",
    "kind": "Génesis",
    "summary": "El sentimiento yoico adulto se adquiere; el bebé no diferencia inicialmente todas sus fuentes de sensación.",
    "explanation": "El niño siente excitaciones corporales disponibles y otras que desaparecen; la experiencia de que el pecho no esté siempre presente contribuye a reconocer un objeto externo.",
    "simple": "El bebé aprende que no todo lo que desea está disponible como si fuera parte de su cuerpo.",
    "question": "¿Qué papel tiene la ausencia del pecho materno?",
    "answer": "Hace patente que una fuente de satisfacción está fuera del control inmediato del niño.",
    "dependsOn": [
      "F06"
    ],
    "steps": [
      "Sensaciones iniciales",
      "Distinción gradual de fuentes"
    ],
    "order": 7,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F08",
    "section": "constitucion",
    "title": "Dolor y yo placiente",
    "page": "p. 6",
    "kind": "Proceso",
    "summary": "El displacer impulsa a expulsar lo doloroso del yo y a configurar un afuera amenazante.",
    "explanation": "Freud reconstruye una primera tendencia a conservar como propio lo placentero y a situar fuera lo desagradable; luego la experiencia corrige esta partición porque hay placeres externos y dolores internos.",
    "simple": "Al principio uno quisiera pensar: lo bueno es mío y lo malo viene de afuera; la experiencia desmiente esa regla.",
    "question": "¿Por qué el yo placiente necesita rectificarse?",
    "answer": "Porque placer y displacer no coinciden limpiamente con el origen interior o exterior de las sensaciones.",
    "dependsOn": [
      "F07"
    ],
    "steps": [
      "Yo placiente",
      "Experiencia que obliga a reajustarlo"
    ],
    "order": 8,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F09",
    "section": "constitucion",
    "title": "Principio de realidad",
    "page": "p. 6",
    "kind": "Tránsito",
    "summary": "La percepción y la acción permiten diferenciar sensaciones interiores de objetos exteriores.",
    "explanation": "Al aprender a verificar sensorialmente y a actuar sobre las fuentes de experiencia, el sujeto da un primer paso hacia la preeminencia del principio de realidad sobre la identificación inmediata entre placer y propio.",
    "simple": "No basta querer que algo sea como nos conviene; hay que aprender cómo funciona realmente.",
    "question": "¿Qué aprende el sujeto que da lugar al principio de realidad?",
    "answer": "A distinguir lo interno y lo externo mediante experiencia y acciones, aun si la realidad contradice el deseo.",
    "dependsOn": [
      "F08"
    ],
    "steps": [
      "Búsqueda de placer",
      "Reconocimiento de realidad exterior"
    ],
    "order": 9,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F10",
    "section": "constitucion",
    "title": "De totalidad inicial a yo limitado",
    "page": "pp. 6–7",
    "kind": "Conclusión provisional",
    "summary": "Freud propone que el yo primitivo abarcaba todo y luego delimitó un mundo externo.",
    "explanation": "La demarcación actual no sería original. Un sentimiento yoico anterior, más amplio, podría sobrevivir y proporcionar el contenido de infinitud que el amigo denomina oceánico.",
    "simple": "Primero no hay frontera clara; después se aprende dónde termina uno y empieza lo otro.",
    "question": "¿El sentimiento oceánico es para Freud una prueba religiosa?",
    "answer": "No: lo relaciona hipotéticamente con una fase temprana del desarrollo del yo.",
    "dependsOn": [
      "F09"
    ],
    "steps": [
      "Inclusión originaria",
      "Separación progresiva"
    ],
    "order": 10,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F11",
    "section": "memoria",
    "title": "Coexistencia de estratos psíquicos",
    "page": "pp. 7–8",
    "kind": "Hipótesis",
    "summary": "En la vida anímica, tendencias primitivas pueden conservarse al lado de desarrollos posteriores.",
    "explanation": "El autor considera habitual que una parte de una disposición permanezca sin modificarse mientras otra se transforma, de modo que lo anterior no queda siempre eliminado.",
    "simple": "Cambiar no significa necesariamente que desaparezca todo lo que uno fue antes.",
    "question": "¿Por qué importa la supervivencia de lo temprano?",
    "answer": "Permite plantear cómo un sentimiento yoico primitivo podría persistir en un adulto.",
    "dependsOn": [
      "F10"
    ],
    "steps": [
      "Etapa anterior",
      "Desarrollo y posible persistencia"
    ],
    "order": 11,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F12",
    "section": "memoria",
    "title": "La comparación con Roma",
    "page": "pp. 8–10",
    "kind": "Analogía",
    "summary": "Freud imagina una ciudad donde todos sus periodos fueran visibles simultáneamente.",
    "explanation": "La Roma real sólo conserva ruinas y reconstrucciones; la Roma imaginaria, concebida como psiquismo, contendría simultáneamente todas las edificaciones de todas sus épocas.",
    "simple": "Imagine todas las Romas históricas ocupando a la vez el mismo lugar: así intenta representar capas del pasado mental.",
    "question": "¿Qué pretende ilustrar la Roma imposible?",
    "answer": "La posibilidad de que diversas fases pasadas subsistan, no una descripción literal del cerebro.",
    "dependsOn": [
      "F11"
    ],
    "steps": [
      "Restos urbanos materiales",
      "Superposición psíquica imaginaria"
    ],
    "order": 12,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F13",
    "section": "memoria",
    "title": "Los límites de la analogía",
    "page": "pp. 10–11",
    "kind": "Objeción",
    "summary": "La simultaneidad de edificaciones incompatibles resulta espacialmente inconcebible.",
    "explanation": "Freud muestra que una ciudad sólo admite cuerpos distintos por sustitución o yuxtaposición; también un organismo cambia físicamente. La imagen no representa adecuadamente la conservación psíquica.",
    "simple": "No se pueden construir dos edificios enteros en exactamente el mismo espacio; la mente no es una ciudad literal.",
    "question": "¿Por qué el propio Freud rechaza tomar la comparación como una representación exacta?",
    "answer": "Porque el espacio físico no puede mostrar a la vez todas las fases que la hipótesis atribuye a la vida psíquica.",
    "dependsOn": [
      "F12"
    ],
    "steps": [
      "Analogía espacial",
      "Límite reconocido"
    ],
    "order": 13,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F14",
    "section": "memoria",
    "title": "Conclusión prudente sobre la huella",
    "page": "p. 11",
    "kind": "Cautela",
    "summary": "El pasado puede persistir; Freud no sostiene como demostrada la conservación absoluta.",
    "explanation": "Tras admitir que ciertos elementos quizá se borren irreversiblemente y que la persistencia requiere condiciones, mantiene como regla aproximada que mucho de lo pretérito permanece en la vida anímica.",
    "simple": "El pasado puede dejar huellas, pero no significa que todo recuerdo sea recuperable siempre.",
    "question": "¿Qué conclusión permite el argumento sin exagerarlo?",
    "answer": "Que la conservación del pasado psíquico es frecuente o general, no que toda huella sobreviva intacta.",
    "dependsOn": [
      "F13"
    ],
    "steps": [
      "Posible conservación",
      "Condiciones y límites"
    ],
    "order": 14,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F15",
    "section": "religion",
    "title": "¿Origen o acompañamiento?",
    "page": "pp. 11–12",
    "kind": "Problema",
    "summary": "La supervivencia del sentimiento yoico primitivo no basta para fundar la necesidad religiosa.",
    "explanation": "Freud concede la existencia posible de un sentimiento oceánico en muchas personas y lo reduce hipotéticamente a una fase yoica primitiva; aun así pide explicar qué necesidad concreta lo hace fuente religiosa.",
    "simple": "Sentirse unido al mundo no responde todavía por qué las personas necesitan religión.",
    "question": "¿Qué problema sigue abierto tras explicar el sentimiento oceánico?",
    "answer": "Si puede ser la fuente de las necesidades religiosas, no sólo una vivencia asociada a ellas.",
    "dependsOn": [
      "F14"
    ],
    "steps": [
      "Hipótesis genética del sentimiento",
      "Pregunta por necesidad religiosa"
    ],
    "order": 15,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F16",
    "section": "religion",
    "title": "Desamparo infantil y amparo paterno",
    "page": "p. 12",
    "kind": "Tesis de Freud",
    "summary": "La necesidad religiosa deriva principalmente del desamparo y de la nostalgia de protección paterna.",
    "explanation": "Freud da prioridad a la dependencia infantil, reactivada por la angustia ante el poder del destino. El amparo paterno ofrece, para él, una explicación más potente de la demanda religiosa.",
    "simple": "Cuando el mundo da miedo, se busca una protección semejante a la que se esperaba de los padres.",
    "question": "¿Cuál es para Freud el origen principal de las necesidades religiosas?",
    "answer": "El desamparo infantil y la añoranza del padre, renovados por la angustia frente al destino.",
    "dependsOn": [
      "F15"
    ],
    "steps": [
      "Dependencia infantil",
      "Búsqueda de protección"
    ],
    "order": 16,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F17",
    "section": "religion",
    "title": "Consuelo oceánico y narcisismo",
    "page": "p. 12",
    "kind": "Matiz",
    "summary": "Lo oceánico puede integrarse después como vía de consuelo religioso.",
    "explanation": "Freud admite que la experiencia de ser uno con el todo puede funcionar como modo de contrarrestar la amenaza exterior, quizá vinculada a una restauración del narcisismo ilimitado. No la erige en fuente única.",
    "simple": "Sentirse parte del todo puede consolar, pero para Freud no sustituye la explicación por desamparo.",
    "question": "¿Qué lugar conserva el sentimiento oceánico en la religión?",
    "answer": "Una posible asociación posterior y consoladora, no una fuente principal demostrada.",
    "dependsOn": [
      "F16",
      "F03"
    ],
    "steps": [
      "Necesidad de consuelo",
      "Vivencia de comunión"
    ],
    "order": 17,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  },
  {
    "id": "F18",
    "section": "religion",
    "title": "Yoga, trance y límite de explicación",
    "page": "pp. 12–13 (antes de II)",
    "kind": "Ejemplo final",
    "summary": "Freud menciona prácticas de yoga y experiencias difusas sin tratarlas como prueba concluyente.",
    "explanation": "Un segundo interlocutor describe sentimientos despertados por concentración corporal y respiración, vinculándolos a regresiones a estados primitivos. Freud conserva reservas sobre su interpretación. Este pasaje cierra el capítulo I en la página 13 antes del encabezado II.",
    "simple": "Que una práctica produzca sensaciones intensas no demuestra por sí sola toda una teoría de su origen.",
    "question": "¿Cómo maneja Freud el testimonio de sensaciones por yoga?",
    "answer": "Lo menciona como posible campo de experiencia, sin convertirlo en prueba de una tesis religiosa.",
    "dependsOn": [
      "F17"
    ],
    "steps": [
      "Prácticas de concentración",
      "Interpretación hipotética"
    ],
    "order": 18,
    "layer": "Obra · paráfrasis verificada (no cita literal)"
  }
]
export const freudIRoutes = [{ id: 'all', label: 'Capítulo I completo' }, ...freudISections.map(({id,label})=>({id,label}))]
export const freudIOrder = freudIConcepts.map((node) => node.id)
export const freudINodeById = (id) => freudIConcepts.find((node) => node.id === id)
export const freudILinks = freudIConcepts.flatMap((node) => node.dependsOn.map((source)=>({id:source+'-'+node.id,source,target:node.id,type:'smoothstep',label:'prepara / responde'})))
export const freudIStudyQuestions = freudIConcepts.map(({id,section,question,answer})=>({nodeId:id,section,question,answer,provenance:'Pregunta editorial de repaso'}))
