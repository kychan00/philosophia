export const analyticClassSessions = {
  '2026-08-17': {
    shortDate: '17 AGO',
    color: '#406C9B',
    title: 'El problema de la demarcación',
    route: '/semestre/5/filosofia-analitica/clase/17-agosto',
  },
  '2026-08-19': {
    shortDate: '19 AGO',
    color: '#2E8B78',
    title: 'Taxonomía, análisis y lenguaje',
    route: '/semestre/5/filosofia-analitica/clase/19-agosto',
  },
  '2026-08-24': {
    shortDate: '24 AGO',
    color: '#705DA8',
    title: 'De Frege al giro lingüístico',
    route: '/semestre/5/filosofia-analitica/clase/24-agosto',
  },
  '2026-08-31': {
    shortDate: '31 AGO',
    color: '#B98324',
    title: 'Lenguaje, justificación y conocimiento',
    route: '/semestre/5/filosofia-analitica/clase/31-agosto',
  },
  '2026-09-02': {
    shortDate: '2 SEP',
    color: '#B75568',
    title: 'Hermenéutica, positivismo y demarcación',
    route: '/semestre/5/filosofia-analitica/clase/2-septiembre',
  },
}

function classLink(
  date,
  sectionId,
  sectionNumber,
  sectionTitle,
  stance,
  relation,
  why,
) {
  return {
    date,
    sectionId,
    sectionNumber,
    sectionTitle,
    stance,
    relation,
    why,
  }
}

/* 17 AGO */
const c17Panorama = classLink(
  '2026-08-17',
  'panorama',
  '00',
  'Panorama',
  'Plantea la pregunta rectora',
  'La clase abre preguntando qué es y qué no es filosofía analítica, antes de ofrecer una definición cerrada.',
  'Conecta porque este nodo forma parte del problema inicial de demarcación que organiza toda la lectura.',
)

const c17WhatIs = classLink(
  '2026-08-17',
  'que-es',
  '02',
  '¿Qué es filosofía analítica?',
  'La presenta como aproximación',
  'Se distingue filosofía analítica de una simple área temática: no tiene un único objeto y se presenta provisionalmente como una manera de filosofar.',
  'Conecta porque el nodo intenta determinar qué clase de unidad puede tener la tradición analítica.',
)

const c17Continental = classLink(
  '2026-08-17',
  'continental',
  '04',
  'Analítica vs. continental',
  'Cuestiona la oposición heredada',
  'La clase señala que “analítica” sugiere una forma de proceder, mientras “continental” empieza como una etiqueta geográfica.',
  'Conecta porque muestra que la oposición mezcla principios clasificatorios diferentes.',
)

const c17Taxonomy = classLink(
  '2026-08-17',
  'taxonomia',
  '07',
  'Taxonomía',
  'Explica qué debe hacer una clasificación',
  'La sesión presenta una taxonomía como instrumento para discriminar y ordenar posiciones filosóficas.',
  'Conecta porque el ensayo está evaluando si las clasificaciones usuales realmente discriminan bien.',
)

const c17Criteria = classLink(
  '2026-08-17',
  'criterios',
  '08',
  'Cuatro criterios',
  'Prueba doctrina, tema, escuela y método',
  'La clase examina doctrina, tema, escuela y método y concluye que ninguno basta por sí solo para definir toda la filosofía analítica.',
  'Conecta porque este nodo pertenece directamente al proceso de descartar criterios insuficientes.',
)

const c17CourseMap = classLink(
  '2026-08-17',
  'mapa',
  '09',
  'Mapa del curso',
  'Sitúa históricamente la tradición',
  'El curso organiza una secuencia de logicismo, giro lingüístico, positivismo lógico y filosofía del lenguaje natural.',
  'Conecta porque el nodo identifica una etapa, corriente o figura dentro de la historia interna de la tradición.',
)

/* 19 AGO */
const c19Taxonomy = classLink(
  '2026-08-19',
  'taxonomia',
  '02',
  'Taxonomía filosófica',
  'Formaliza la regla taxonómica',
  'La clase pregunta qué hace legítima una clasificación filosófica y exige un principio homogéneo de discriminación.',
  'Conecta porque el nodo participa en la crítica a una taxonomía que mezcla criterios heterogéneos.',
)

const c19Criteria = classLink(
  '2026-08-19',
  'criterios',
  '03',
  'Criterios insuficientes',
  'Vuelve a probar los candidatos',
  'La sesión retoma las definiciones por doctrina, tema o método aislado y muestra por qué dejan fuera casos centrales.',
  'Conecta porque este nodo es uno de los candidatos sometidos a prueba.',
)

const c19Condition = classLink(
  '2026-08-19',
  'condicion',
  '04',
  'Necesidad y suficiencia',
  'Aclara qué debe cumplir una definición',
  'La clase distingue condición necesaria y condición suficiente para evitar confundir un rasgo frecuente con una definición completa.',
  'Conecta porque el nodo evalúa si un rasgo realmente define a toda la tradición.',
)

const c19Analysis = classLink(
  '2026-08-19',
  'analisis',
  '05',
  'Dos tipos de análisis',
  'Distingue análisis formal y conceptual',
  'La sesión separa dimensiones del análisis y muestra que el trabajo lingüístico puede ser central sin convertirse en la única definición posible.',
  'Conecta porque el nodo trata del análisis, lenguaje, claridad o límites del método analítico.',
)

const c19History = classLink(
  '2026-08-19',
  'historia',
  '06',
  'Etapas históricas',
  'Añade el criterio histórico',
  'La clase recuerda que una tradición también tiene desarrollo histórico, rupturas y continuidad temporal.',
  'Conecta porque el nodo pregunta por genealogía, pertenencia histórica o afinidad sistemática.',
)

const c19Waismann = classLink(
  '2026-08-19',
  'waismann',
  '07',
  'Waismann',
  'Ejemplifica el ideal de análisis',
  'Waismann aparece como ejemplo de la concepción de la filosofía como análisis y clarificación lógica del pensamiento.',
  'Conecta porque el nodo usa a Waismann, Moore o Russell como evidencia histórica a favor del análisis.',
)

const c19Formalization = classLink(
  '2026-08-19',
  'formalizacion',
  '08',
  'Formalización',
  'Hace visibles estructuras inferenciales',
  'La clase trabaja la explicitación formal de relaciones para distinguir premisas, consecuencias y compromisos.',
  'Conecta porque el nodo trata de inferencia, deducción o razones explícitas.',
)

const c19Synthesis = classLink(
  '2026-08-19',
  'sintesis',
  '10',
  'Definición provisional',
  'Integra análisis, lenguaje e historia',
  'La sesión cierra con una caracterización provisional que combina análisis lingüístico con contexto histórico.',
  'Conecta porque el nodo intenta formular una definición positiva de la tradición.',
)

/* 24 AGO */
const c24Frege = classLink(
  '2026-08-24',
  'frege',
  '01',
  'Frege y el logicismo',
  'Reconstruye el trasfondo lógico',
  'La clase muestra cómo el proyecto de Frege de fundamentar las matemáticas mediante lógica configura una parte central del origen analítico.',
  'Conecta porque el nodo pertenece a la línea lógica o a la explicitación inferencial.',
)

const c24Russell = classLink(
  '2026-08-24',
  'russell',
  '02',
  'Russell y la paradoja',
  'Muestra una dificultad que obliga a revisar',
  'La paradoja de Russell muestra cómo descubrir un problema interno puede transformar un proyecto filosófico y lógico.',
  'Conecta porque el nodo trata del valor filosófico de detectar dificultades o revisar conclusiones.',
)

const c24Language = classLink(
  '2026-08-24',
  'lenguaje',
  '04',
  'Lenguaje y mundo',
  'Conecta lenguaje con representación',
  'La sesión estudia cómo el análisis del lenguaje se vuelve una vía para pensar estructura, significado y relación con el mundo.',
  'Conecta porque el nodo usa el lenguaje como herramienta de análisis y clarificación.',
)

const c24AnalyticTurn = classLink(
  '2026-08-24',
  'analitica',
  '05',
  'Moore, Russell y giro lingüístico',
  'Sitúa el giro lingüístico',
  'La clase reconstruye el desplazamiento desde problemas lógicos hacia lenguaje, significado y clarificación filosófica.',
  'Conecta porque el nodo menciona a Moore, Russell, Wittgenstein o la centralidad histórica del lenguaje.',
)

const c24Verification = classLink(
  '2026-08-24',
  'verificacion',
  '07',
  'Verificación y análisis formal',
  'Ejemplifica criterios formales',
  'La sesión muestra cómo el positivismo lógico vincula análisis formal, significado y criterios de verificación.',
  'Conecta porque el nodo trata de formalización, deducción o exigencias explícitas de justificación.',
)

const c24Closure = classLink(
  '2026-08-24',
  'cierre',
  '09',
  'Del espejo al uso',
  'Anticipa el paso hacia el uso',
  'La clase cierra desplazando la atención desde la representación estática hacia el uso del lenguaje.',
  'Conecta porque el nodo ayuda a entender la transición hacia Wittgenstein tardío y lenguaje ordinario.',
)

/* 31 AGO */
const c31Criterion = classLink(
  '2026-08-31',
  'criterio',
  '00',
  '¿Qué distingue a la filosofía analítica?',
  'Prueba argumento y justificación',
  'La clase propone argumentación racional y justificación lógica como los candidatos más fuertes para distinguir la filosofía analítica.',
  'Conecta porque el nodo forma parte del núcleo positivo de la definición de Føllesdal.',
)

const c31Equilibrium = classLink(
  '2026-08-31',
  'equilibrio',
  '01',
  'Argumentación y equilibrio reflexivo',
  'Amplía la idea de justificar',
  'La sesión explica la justificación como ajuste entre principios, casos, intuiciones y revisiones mutuas.',
  'Conecta porque el nodo trata de equilibrio reflexivo, revisión o formas no puramente deductivas de argumentar.',
)

const c31Wittgenstein = classLink(
  '2026-08-31',
  'wittgenstein',
  '02',
  'Wittgenstein I ↔ Wittgenstein II',
  'Prueba la definición contra una ruptura interna',
  'La clase contrasta el Wittgenstein del Tractatus con el de los juegos de lenguaje para mostrar que la tradición no es doctrinalmente homogénea.',
  'Conecta porque el nodo usa Wittgenstein para ensanchar qué cuenta como trabajo analítico.',
)

const c31Giro = classLink(
  '2026-08-31',
  'giro',
  '03',
  'Giro lingüístico y representación',
  'Reubica el papel del lenguaje',
  'La clase vuelve sobre representación, estructura y uso para mostrar distintas funciones filosóficas del lenguaje.',
  'Conecta porque el nodo trata de lenguaje, claridad o análisis lingüístico.',
)

const c31Rhetoric = classLink(
  '2026-08-31',
  'retorica',
  '06',
  'Argumentar y persuadir',
  'Distingue razón de persuasión',
  'La sesión separa ofrecer razones evaluables de producir asentimiento mediante recursos retóricos.',
  'Conecta porque el nodo contrasta argumentación explícita, claridad y predominio de la retórica.',
)

const c31Closure = classLink(
  '2026-08-31',
  'cierre',
  '07',
  'Síntesis y próxima lectura',
  'Recapitula el criterio analítico',
  'La clase vuelve sobre argumento, justificación, lenguaje y los problemas que siguen abiertos.',
  'Conecta porque el nodo funciona como síntesis o consecuencia de la discusión previa.',
)

/* 2 SEP */
const c02Hermeneutics = classLink(
  '2026-09-02',
  'problema',
  '00',
  'Hermenéutica y filosofía analítica',
  'Examina la supuesta incompatibilidad',
  'La clase pregunta si hermenéutica y filosofía analítica son realmente incompatibles o si esa oposición depende de tesis contingentes.',
  'Conecta porque el nodo pertenece directamente al debate sobre hermenéutica y analiticidad.',
)

const c02Positivism = classLink(
  '2026-09-02',
  'positivismo',
  '01',
  'Ciencia unificada y positivismo',
  'Contextualiza la unidad de las ciencias',
  'La sesión sitúa la idea de una ciencia unificada en el positivismo y el positivismo lógico, en vez de atribuirla a toda filosofía analítica.',
  'Conecta porque el nodo usa la unidad de las ciencias como razón en el debate con la hermenéutica.',
)

const c02Inference = classLink(
  '2026-09-02',
  'inferencia',
  '04',
  'Qué demuestra realmente el argumento',
  'Controla el alcance de una conclusión',
  'La clase insiste en distinguir entre refutar una razón y demostrar positivamente la tesis contraria.',
  'Conecta porque el nodo depende de evaluar qué se sigue realmente de las premisas.',
)

const c02Degree = classLink(
  '2026-09-02',
  'grado',
  '05',
  'El problema de la analiticidad por grados',
  'Discute la escala más / menos analítico',
  'La clase cuestiona si convertir la analiticidad en una cuestión de grado vuelve demasiado amplia o ahistórica la categoría.',
  'Conecta porque el nodo pertenece a la reclasificación transversal propuesta al final del ensayo.',
)

const c02Criteria = classLink(
  '2026-09-02',
  'criterios',
  '06',
  'Definición provisional',
  'Reformula los criterios',
  'La sesión conserva argumentación, justificación y análisis del lenguaje, pero añade contexto histórico para evitar una definición excesivamente amplia.',
  'Conecta porque el nodo participa en la definición positiva o en sus límites.',
)

const c02Ethics = classLink(
  '2026-09-02',
  'etica',
  '07',
  'Argumentación, autonomía y democracia',
  'Desarrolla la conclusión ética',
  'La clase relaciona ofrecer razones con reconocer la autonomía del interlocutor y con una práctica democrática del diálogo.',
  'Conecta porque el nodo pertenece a la respuesta final sobre por qué involucrarse en filosofía analítica.',
)

export const analyticFollesdalClassLinks = {
  /* FASE I */
  'p1-problem': [c17Panorama, c17WhatIs, c19Taxonomy],
  'p1-contemporary': [c17Panorama, c17Taxonomy],
  'p1-analytic': [c17WhatIs, c17CourseMap, c19Synthesis],
  'p1-continental': [c17Continental],
  'p1-logic': [c17CourseMap, c24Frege],
  'p1-ordinary': [c17CourseMap, c24Closure],
  'p1-phenomenology': [c17Continental],
  'p1-hermeneutics': [c17Continental, c02Hermeneutics],
  'p1-mix': [c17Continental, c19Taxonomy],
  'p1-borges': [c19Taxonomy],

  /* FASE II */
  'p2-method': [c17Criteria, c19Analysis],
  'p2-waismann': [c19Waismann],
  'p2-quine': [c17Criteria, c19Analysis, c19Condition],
  'p2-doctrine': [c17Criteria, c19Criteria],
  'p2-problems': [c17Criteria, c19Criteria],
  'p2-school': [c17Criteria, c19History],
  'p2-bolzano': [c19History],
  'p2-systematic': [c19History],
  'p2-insufficient': [c17Criteria, c19Criteria, c19Condition],

  /* FASE III */
  'p3-approach': [c17WhatIs, c19Synthesis],
  'p3-argument': [c31Criterion, c02Criteria],
  'p3-justification': [c31Criterion, c02Criteria],
  'p3-positions': [c31Criterion],
  'p3-reasons': [c31Criterion, c31Rhetoric],
  'p3-inference': [c19Formalization, c24Verification, c02Inference],
  'p3-language': [c19Analysis, c24Language, c31Giro, c02Criteria],
  'p3-clarity': [c19Analysis, c31Rhetoric],
  'p3-definition': [c19Synthesis, c31Criterion, c02Criteria],

  /* FASE IV */
  'p4-objection': [c31Wittgenstein],
  'p4-broad': [c31Wittgenstein, c31Equilibrium],
  'p4-deductive': [c19Formalization, c24Verification],
  'p4-nonmonotonic': [c31Equilibrium],
  'p4-description': [c31Wittgenstein],
  'p4-distinctions': [c19Analysis, c31Wittgenstein],
  'p4-difficulties': [c24Russell, c31Wittgenstein],
  'p4-moore': [c24AnalyticTurn, c31Wittgenstein],
  'p4-progress': [c24Russell, c31Closure],

  /* FASE V */
  'p5-balance': [c31Equilibrium],
  'p5-general': [c31Equilibrium],
  'p5-particular': [c31Equilibrium],
  'p5-goodman': [c31Equilibrium],

  /* FASE VI */
  'p6-nonanalytic': [c31Rhetoric],
  'p6-rhetoric': [c31Rhetoric],
  'p6-clarity': [c31Rhetoric],
  'p6-vonwright': [c02Hermeneutics],
  'p6-objection1': [c02Positivism],
  'p6-objection2': [c02Hermeneutics],
  'p6-response': [c02Hermeneutics, c02Inference],
  'p6-stegmuller': [c02Hermeneutics, c02Inference],

  /* FASE VII */
  'p7-reclass': [c02Degree, c02Criteria],
  'p7-axis': [c02Degree],
  'p7-cross': [c02Degree],
  'p7-historical': [c02Degree],
  'p7-ethics': [c02Ethics],
  'p7-social': [c02Ethics],
  'p7-democracy': [c02Ethics],
  'p7-final': [c02Ethics],
}

export function getAnalyticFollesdalClassLinks(nodeId) {
  return (analyticFollesdalClassLinks[nodeId] || []).map((link) => ({
    ...link,
    session: analyticClassSessions[link.date],
  }))
}
