export const KANT_PREFACES_SOURCE = {
  "author": "Immanuel Kant",
  "work": "Crítica de la razón pura",
  "edition": "Taurus · prólogo, traducción, notas e índices de Pedro Ribas",
  "scope": "Prólogo de la primera edición (A) y Prólogo de la segunda edición (B)",
  "pages": "pp. 6–26 de la edición usada"
}

export const kantPrefacesLegend = [
  [
    "claim",
    "Tesis / principio"
  ],
  [
    "problem",
    "Problema / conflicto"
  ],
  [
    "method",
    "Crítica / método"
  ],
  [
    "evidence",
    "Ejemplo / metáfora"
  ],
  [
    "contrast",
    "Distinción / límite"
  ],
  [
    "conclusion",
    "Conclusión / ciencia"
  ],
  [
    "practical",
    "Razón práctica"
  ],
  [
    "tradition",
    "Referencia histórica"
  ]
]

export const kantPrefacesPhases = [
  {
    "id": "phase-1",
    "roman": "I",
    "preface": "A",
    "shortTitle": "Problema",
    "subtitle": "Prólogo A · 1781",
    "title": "El origen del problema metafísico",
    "question": "¿Por qué la razón humana produce inevitablemente problemas metafísicos?",
    "thesis": "La metafísica surge de una tendencia natural de la razón: buscar condiciones hasta alcanzar lo incondicionado, incluso cuando para ello termina sobrepasando la experiencia.",
    "pages": "6–7",
    "takeaways": [
      "El problema metafísico nace dentro de la razón.",
      "La búsqueda de condiciones conduce a la exigencia de lo incondicionado.",
      "El conflicto aparece cuando principios legítimos se extienden más allá de la experiencia."
    ],
    "nodes": [
      {
        "id": "a1-reason",
        "position": {
          "x": 0,
          "y": 260
        },
        "title": "Razón humana",
        "tag": "ORIGEN",
        "category": "claim",
        "detail": "La razón humana produce preguntas que no puede rechazar porque nacen de su propia naturaleza.",
        "pages": "6–7",
        "keyIdea": "El problema metafísico no es un accidente externo: nace de la razón misma.",
        "question": "¿Qué función cumple «Razón humana» en esta fase?",
        "answer": "El problema metafísico no es un accidente externo: nace de la razón misma."
      },
      {
        "id": "a1-experience",
        "position": {
          "x": 330,
          "y": 260
        },
        "title": "Principios dentro de la experiencia",
        "tag": "USO",
        "category": "method",
        "detail": "La razón comienza empleando principios cuyo uso dentro de la experiencia es legítimo y necesario.",
        "pages": "6",
        "keyIdea": "El conflicto no empieza con principios absurdos, sino con la extensión indebida de principios útiles.",
        "question": "¿Qué función cumple «Principios dentro de la experiencia» en esta fase?",
        "answer": "El conflicto no empieza con principios absurdos, sino con la extensión indebida de principios útiles."
      },
      {
        "id": "a1-conditions",
        "position": {
          "x": 690,
          "y": 260
        },
        "title": "Búsqueda de condiciones",
        "tag": "IMPULSO",
        "category": "method",
        "detail": "La razón no se contenta con lo dado y busca las condiciones de aquello que aparece condicionado.",
        "pages": "6",
        "keyIdea": "Una condición conduce a otra y empuja a la razón hacia explicaciones cada vez más remotas.",
        "question": "¿Qué función cumple «Búsqueda de condiciones» en esta fase?",
        "answer": "Una condición conduce a otra y empuja a la razón hacia explicaciones cada vez más remotas."
      },
      {
        "id": "a1-conditioned",
        "position": {
          "x": 690,
          "y": 500
        },
        "title": "De lo condicionado a su condición",
        "tag": "LÓGICA",
        "category": "evidence",
        "detail": "Lo condicionado remite a aquello de lo que depende; esta estructura hace avanzar la búsqueda racional.",
        "pages": "6",
        "keyIdea": "La serie de condiciones se prolonga porque cada elemento condicionado pide fundamento.",
        "question": "¿Qué función cumple «De lo condicionado a su condición» en esta fase?",
        "answer": "La serie de condiciones se prolonga porque cada elemento condicionado pide fundamento."
      },
      {
        "id": "a1-totality",
        "position": {
          "x": 1060,
          "y": 260
        },
        "title": "La serie debe completarse",
        "tag": "EXIGENCIA",
        "category": "claim",
        "detail": "La razón pretende llevar la serie de condiciones hasta una totalidad y no quedar en una explicación siempre incompleta.",
        "pages": "6",
        "keyIdea": "La razón exige cierre y totalidad.",
        "question": "¿Qué función cumple «La serie debe completarse» en esta fase?",
        "answer": "La razón exige cierre y totalidad."
      },
      {
        "id": "a1-unconditioned",
        "position": {
          "x": 1410,
          "y": 260
        },
        "title": "Lo incondicionado",
        "tag": "META",
        "category": "claim",
        "detail": "La razón busca una condición última que ya no dependa de otra y cierre la serie de explicaciones.",
        "pages": "6",
        "keyIdea": "Lo incondicionado expresa la exigencia de un fundamento último.",
        "question": "¿Por qué aparece lo incondicionado en la búsqueda racional?",
        "answer": "Porque una serie siempre condicionada no satisface la exigencia de totalidad de la razón; ésta busca un cierre que ya no dependa de otra condición."
      },
      {
        "id": "a1-beyond",
        "position": {
          "x": 1770,
          "y": 260
        },
        "title": "Más allá de la experiencia posible",
        "tag": "QUIEBRE",
        "category": "problem",
        "detail": "Al perseguir lo incondicionado, la razón extiende sus principios a un ámbito donde la experiencia ya no puede ofrecer comprobación ni objeto adecuado.",
        "pages": "6",
        "keyIdea": "El salto crítico ocurre cuando un uso válido en la experiencia se prolonga fuera de ella.",
        "question": "¿Qué función cumple «Más allá de la experiencia posible» en esta fase?",
        "answer": "El salto crítico ocurre cuando un uso válido en la experiencia se prolonga fuera de ella."
      },
      {
        "id": "a1-illusion",
        "position": {
          "x": 2110,
          "y": 80
        },
        "title": "Ilusión natural de la razón",
        "tag": "RIESGO",
        "category": "problem",
        "detail": "La extensión ilegítima conserva apariencia de legitimidad porque nace de principios que antes funcionaban correctamente.",
        "pages": "6–7",
        "keyIdea": "La ilusión metafísica no es una simple torpeza: es una tentación natural de la razón.",
        "question": "¿Qué función cumple «Ilusión natural de la razón» en esta fase?",
        "answer": "La ilusión metafísica no es una simple torpeza: es una tentación natural de la razón."
      },
      {
        "id": "a1-soul",
        "position": {
          "x": 2070,
          "y": 420
        },
        "title": "Alma",
        "tag": "EJEMPLO",
        "category": "evidence",
        "detail": "La razón busca una unidad última del sujeto; aquí aparece sólo como destino paradigmático de la investigación metafísica.",
        "pages": "6–7",
        "keyIdea": "La razón busca una unidad última del sujeto; aquí aparece sólo como destino paradigmático de la investigación metafísica.",
        "question": "¿Qué función cumple «Alma» en esta fase?",
        "answer": "La razón busca una unidad última del sujeto; aquí aparece sólo como destino paradigmático de la investigación metafísica."
      },
      {
        "id": "a1-world",
        "position": {
          "x": 2310,
          "y": 420
        },
        "title": "Mundo como totalidad",
        "tag": "EJEMPLO",
        "category": "evidence",
        "detail": "La razón pretende pensar el mundo como una totalidad completa; aquí funciona sólo como anticipo de problemas posteriores.",
        "pages": "6–7",
        "keyIdea": "La razón pretende pensar el mundo como una totalidad completa; aquí funciona sólo como anticipo de problemas posteriores.",
        "question": "¿Qué función cumple «Mundo como totalidad» en esta fase?",
        "answer": "La razón pretende pensar el mundo como una totalidad completa; aquí funciona sólo como anticipo de problemas posteriores."
      },
      {
        "id": "a1-god",
        "position": {
          "x": 2550,
          "y": 420
        },
        "title": "Dios",
        "tag": "EJEMPLO",
        "category": "evidence",
        "detail": "La razón busca un fundamento absoluto; el nodo anticipa un destino clásico de la metafísica sin desarrollar todavía la doctrina.",
        "pages": "6–7",
        "keyIdea": "La razón busca un fundamento absoluto; el nodo anticipa un destino clásico de la metafísica sin desarrollar todavía la doctrina.",
        "question": "¿Qué función cumple «Dios» en esta fase?",
        "answer": "La razón busca un fundamento absoluto; el nodo anticipa un destino clásico de la metafísica sin desarrollar todavía la doctrina."
      },
      {
        "id": "a1-conflict",
        "position": {
          "x": 2440,
          "y": 150
        },
        "title": "Oscuridad y contradicción",
        "tag": "RESULTADO",
        "category": "problem",
        "detail": "Fuera del terreno de la experiencia, la razón cae en oscuridad y en conflictos que sus procedimientos anteriores no logran resolver.",
        "pages": "6–7",
        "keyIdea": "La razón termina enfrentándose consigo misma.",
        "question": "¿Qué función cumple «Oscuridad y contradicción» en esta fase?",
        "answer": "La razón termina enfrentándose consigo misma."
      },
      {
        "id": "a1-metaphysics",
        "position": {
          "x": 2820,
          "y": 150
        },
        "title": "Metafísica: campo de batalla",
        "tag": "DESENLACE",
        "category": "conclusion",
        "detail": "Kant denomina metafísica al campo donde se libran estas controversias de la razón sobre cuestiones inevitables y no resueltas.",
        "pages": "6–7",
        "keyIdea": "La metafísica aparece como el campo histórico del conflicto producido por la propia razón.",
        "question": "¿Qué función cumple «Metafísica: campo de batalla» en esta fase?",
        "answer": "La metafísica aparece como el campo histórico del conflicto producido por la propia razón."
      }
    ],
    "edges": [
      {
        "id": "a1-e1",
        "source": "a1-reason",
        "target": "a1-experience",
        "label": "parte de",
        "kind": "prepares"
      },
      {
        "id": "a1-e2",
        "source": "a1-experience",
        "target": "a1-conditions",
        "label": "permite buscar",
        "kind": "prepares"
      },
      {
        "id": "a1-e3",
        "source": "a1-conditions",
        "target": "a1-conditioned",
        "label": "remonta de",
        "kind": "supports"
      },
      {
        "id": "a1-e4",
        "source": "a1-conditions",
        "target": "a1-totality",
        "label": "tiende hacia",
        "kind": "requires"
      },
      {
        "id": "a1-e5",
        "source": "a1-totality",
        "target": "a1-unconditioned",
        "label": "exige",
        "kind": "requires"
      },
      {
        "id": "a1-e6",
        "source": "a1-unconditioned",
        "target": "a1-beyond",
        "label": "empuja hacia",
        "kind": "causes"
      },
      {
        "id": "a1-e7",
        "source": "a1-beyond",
        "target": "a1-illusion",
        "label": "produce",
        "kind": "causes"
      },
      {
        "id": "a1-e8",
        "source": "a1-beyond",
        "target": "a1-soul",
        "label": "se dirige también a",
        "kind": "illustrates"
      },
      {
        "id": "a1-e9",
        "source": "a1-beyond",
        "target": "a1-world",
        "label": "se dirige también a",
        "kind": "illustrates"
      },
      {
        "id": "a1-e10",
        "source": "a1-beyond",
        "target": "a1-god",
        "label": "se dirige también a",
        "kind": "illustrates"
      },
      {
        "id": "a1-e11",
        "source": "a1-illusion",
        "target": "a1-conflict",
        "label": "oculta el error y conduce a",
        "kind": "causes"
      },
      {
        "id": "a1-e12",
        "source": "a1-soul",
        "target": "a1-conflict",
        "label": "alimenta disputas",
        "kind": "causes"
      },
      {
        "id": "a1-e13",
        "source": "a1-world",
        "target": "a1-conflict",
        "label": "alimenta disputas",
        "kind": "causes"
      },
      {
        "id": "a1-e14",
        "source": "a1-god",
        "target": "a1-conflict",
        "label": "alimenta disputas",
        "kind": "causes"
      },
      {
        "id": "a1-e15",
        "source": "a1-conflict",
        "target": "a1-metaphysics",
        "label": "convierte en",
        "kind": "conclusion"
      }
    ],
    "guideNodeIds": [
      "a1-reason",
      "a1-experience",
      "a1-conditions",
      "a1-conditioned",
      "a1-totality",
      "a1-unconditioned",
      "a1-beyond",
      "a1-illusion",
      "a1-soul",
      "a1-world",
      "a1-god",
      "a1-conflict",
      "a1-metaphysics"
    ]
  },
  {
    "id": "phase-2",
    "roman": "II",
    "preface": "A",
    "shortTitle": "Crisis",
    "subtitle": "Prólogo A · 1781",
    "title": "La crisis histórica de la metafísica",
    "question": "¿Cómo pasó la metafísica de ser la “reina de las ciencias” a una disciplina desacreditada y necesitada de transformación?",
    "thesis": "El fracaso histórico de la metafísica no elimina sus preguntas; muestra que dogmatismo, escepticismo y el intento empirista no han logrado proporcionarle un fundamento estable.",
    "pages": "6–8",
    "takeaways": [
      "El prestigio histórico de la metafísica no garantizaba un método seguro.",
      "Dogmatismo y escepticismo se suceden sin fundar una ciencia.",
      "La indiferencia puede revelar una exigencia madura de fundamentos."
    ],
    "nodes": [
      {
        "id": "a2-queen",
        "position": {
          "x": 0,
          "y": 180
        },
        "title": "“Reina de todas las ciencias”",
        "tag": "PRESTIGIO",
        "category": "tradition",
        "detail": "La metafísica fue considerada la ciencia más elevada por la dignidad e importancia de aquello que pretendía conocer.",
        "pages": "6–7",
        "keyIdea": "La grandeza del objeto no garantiza todavía la solidez del método.",
        "question": "¿Qué función cumple «“Reina de todas las ciencias”» en esta fase?",
        "answer": "La grandeza del objeto no garantiza todavía la solidez del método."
      },
      {
        "id": "a2-dogmatism",
        "position": {
          "x": 340,
          "y": 180
        },
        "title": "Dogmatismo",
        "tag": "RÉGIMEN",
        "category": "problem",
        "detail": "La metafísica construye doctrinas a partir de principios sin examinar previamente la capacidad y el derecho de la razón para utilizarlos.",
        "pages": "6–7",
        "keyIdea": "Se intenta construir antes de examinar los cimientos.",
        "question": "¿Qué función cumple «Dogmatismo» en esta fase?",
        "answer": "Se intenta construir antes de examinar los cimientos."
      },
      {
        "id": "a2-despotism",
        "position": {
          "x": 340,
          "y": 430
        },
        "title": "Dominio despótico",
        "tag": "IMAGEN",
        "category": "evidence",
        "detail": "Kant compara el antiguo gobierno dogmático de la metafísica con un dominio despótico que legisla sin una crítica previa de su autoridad.",
        "pages": "6–7",
        "keyIdea": "Kant compara el antiguo gobierno dogmático de la metafísica con un dominio despótico que legisla sin una crítica previa de su autoridad.",
        "question": "¿Qué función cumple «Dominio despótico» en esta fase?",
        "answer": "Kant compara el antiguo gobierno dogmático de la metafísica con un dominio despótico que legisla sin una crítica previa de su autoridad."
      },
      {
        "id": "a2-civil-wars",
        "position": {
          "x": 700,
          "y": 180
        },
        "title": "Guerras intestinas",
        "tag": "CRISIS",
        "category": "problem",
        "detail": "Las doctrinas metafísicas entran en conflicto entre sí y destruyen la apariencia de una autoridad racional común.",
        "pages": "6–7",
        "keyIdea": "Las doctrinas metafísicas entran en conflicto entre sí y destruyen la apariencia de una autoridad racional común.",
        "question": "¿Qué función cumple «Guerras intestinas» en esta fase?",
        "answer": "Las doctrinas metafísicas entran en conflicto entre sí y destruyen la apariencia de una autoridad racional común."
      },
      {
        "id": "a2-anarchy",
        "position": {
          "x": 1050,
          "y": 180
        },
        "title": "Anarquía metafísica",
        "tag": "RESULTADO",
        "category": "problem",
        "detail": "La multiplicación de disputas sin criterio decisivo transforma el antiguo dominio metafísico en anarquía.",
        "pages": "6–7",
        "keyIdea": "La multiplicación de disputas sin criterio decisivo transforma el antiguo dominio metafísico en anarquía.",
        "question": "¿Qué función cumple «Anarquía metafísica» en esta fase?",
        "answer": "La multiplicación de disputas sin criterio decisivo transforma el antiguo dominio metafísico en anarquía."
      },
      {
        "id": "a2-skeptics",
        "position": {
          "x": 1390,
          "y": 30
        },
        "title": "Escépticos: “nómadas”",
        "tag": "REACCIÓN",
        "category": "contrast",
        "detail": "Los escépticos atacan periódicamente las construcciones dogmáticas y evitan que se consoliden como asentamientos definitivos.",
        "pages": "7",
        "keyIdea": "El escepticismo cumple una función destructiva, pero todavía no funda ciencia.",
        "question": "¿Qué función cumple «Escépticos: “nómadas”» en esta fase?",
        "answer": "El escepticismo cumple una función destructiva, pero todavía no funda ciencia."
      },
      {
        "id": "a2-no-foundation",
        "position": {
          "x": 1720,
          "y": 30
        },
        "title": "El escepticismo no funda una ciencia",
        "tag": "LÍMITE",
        "category": "problem",
        "detail": "Derribar pretensiones dogmáticas no proporciona por sí mismo un método positivo y estable para la metafísica.",
        "pages": "7",
        "keyIdea": "Negar una falsa solución no equivale a encontrar la verdadera.",
        "question": "¿Qué función cumple «El escepticismo no funda una ciencia» en esta fase?",
        "answer": "Negar una falsa solución no equivale a encontrar la verdadera."
      },
      {
        "id": "a2-locke",
        "position": {
          "x": 1390,
          "y": 330
        },
        "title": "Locke y la fisiología del entendimiento",
        "tag": "INTENTO",
        "category": "tradition",
        "detail": "Locke representa el intento de resolver las pretensiones metafísicas investigando el origen y funcionamiento del entendimiento humano.",
        "pages": "7",
        "keyIdea": "Locke representa el intento de resolver las pretensiones metafísicas investigando el origen y funcionamiento del entendimiento humano.",
        "question": "¿Qué función cumple «Locke y la fisiología del entendimiento» en esta fase?",
        "answer": "Locke representa el intento de resolver las pretensiones metafísicas investigando el origen y funcionamiento del entendimiento humano."
      },
      {
        "id": "a2-locke-failure",
        "position": {
          "x": 1750,
          "y": 330
        },
        "title": "La genealogía empírica no resuelve el problema",
        "tag": "LÍMITE",
        "category": "problem",
        "detail": "Para Kant, explicar genealógicamente el origen de nuestras representaciones no basta para decidir el derecho de la razón a formular pretensiones metafísicas.",
        "pages": "7",
        "keyIdea": "Una explicación del origen no sustituye una justificación de validez.",
        "question": "¿Qué función cumple «La genealogía empírica no resuelve el problema» en esta fase?",
        "answer": "Una explicación del origen no sustituye una justificación de validez."
      },
      {
        "id": "a2-return",
        "position": {
          "x": 2070,
          "y": 180
        },
        "title": "Retorno del dogmatismo",
        "tag": "RECAÍDA",
        "category": "problem",
        "detail": "Al no establecerse un fundamento definitivo, la metafísica vuelve a las formas dogmáticas que parecían superadas.",
        "pages": "7",
        "keyIdea": "Al no establecerse un fundamento definitivo, la metafísica vuelve a las formas dogmáticas que parecían superadas.",
        "question": "¿Qué función cumple «Retorno del dogmatismo» en esta fase?",
        "answer": "Al no establecerse un fundamento definitivo, la metafísica vuelve a las formas dogmáticas que parecían superadas."
      },
      {
        "id": "a2-discredit",
        "position": {
          "x": 2410,
          "y": 180
        },
        "title": "Desprestigio de la metafísica",
        "tag": "CONSECUENCIA",
        "category": "problem",
        "detail": "La repetición del conflicto y del fracaso destruye la confianza en la metafísica como ciencia.",
        "pages": "7",
        "keyIdea": "La repetición del conflicto y del fracaso destruye la confianza en la metafísica como ciencia.",
        "question": "¿Qué función cumple «Desprestigio de la metafísica» en esta fase?",
        "answer": "La repetición del conflicto y del fracaso destruye la confianza en la metafísica como ciencia."
      },
      {
        "id": "a2-indifference",
        "position": {
          "x": 2760,
          "y": 180
        },
        "title": "Hastío e indiferentismo",
        "tag": "SÍNTOMA",
        "category": "contrast",
        "detail": "Tras tantas disputas y métodos fallidos surge cansancio e indiferencia frente a la metafísica.",
        "pages": "7",
        "keyIdea": "El agotamiento histórico parece sugerir abandono, pero Kant no acepta esa conclusión.",
        "question": "¿Qué función cumple «Hastío e indiferentismo» en esta fase?",
        "answer": "El agotamiento histórico parece sugerir abandono, pero Kant no acepta esa conclusión."
      },
      {
        "id": "a2-inevitable",
        "position": {
          "x": 2760,
          "y": 470
        },
        "title": "Las preguntas metafísicas son inevitables",
        "tag": "FONDO",
        "category": "claim",
        "detail": "La razón no puede volverse realmente indiferente ante cuestiones que nacen de su propia naturaleza.",
        "pages": "7",
        "keyIdea": "Podemos rechazar sistemas metafísicos, pero no borrar las preguntas que los originan.",
        "question": "¿Qué función cumple «Las preguntas metafísicas son inevitables» en esta fase?",
        "answer": "Podemos rechazar sistemas metafísicos, pero no borrar las preguntas que los originan."
      },
      {
        "id": "a2-maturity",
        "position": {
          "x": 3120,
          "y": 180
        },
        "title": "Juicio maduro de la época",
        "tag": "GIRO",
        "category": "claim",
        "detail": "Kant interpreta la aparente indiferencia como signo de una época que ya no acepta fácilmente un saber meramente aparente.",
        "pages": "7–8",
        "keyIdea": "La crisis puede expresar madurez crítica.",
        "question": "¿Qué función cumple «Juicio maduro de la época» en esta fase?",
        "answer": "La crisis puede expresar madurez crítica."
      },
      {
        "id": "a2-apparent-knowledge",
        "position": {
          "x": 3470,
          "y": 180
        },
        "title": "Rechazo del saber aparente",
        "tag": "EXIGENCIA",
        "category": "method",
        "detail": "La razón exige fundamentos que resistan examen en lugar de doctrinas sostenidas sólo por autoridad o hábito.",
        "pages": "7–8",
        "keyIdea": "La razón exige fundamentos que resistan examen en lugar de doctrinas sostenidas sólo por autoridad o hábito.",
        "question": "¿Qué función cumple «Rechazo del saber aparente» en esta fase?",
        "answer": "La razón exige fundamentos que resistan examen en lugar de doctrinas sostenidas sólo por autoridad o hábito."
      },
      {
        "id": "a2-transformation",
        "position": {
          "x": 3840,
          "y": 180
        },
        "title": "Próxima transformación y clarificación",
        "tag": "TRANSICIÓN",
        "category": "conclusion",
        "detail": "El fracaso de los antiguos métodos prepara la necesidad de una transformación del modo en que la razón se relaciona con la metafísica.",
        "pages": "7–8",
        "keyIdea": "La crisis histórica prepara la autocrítica de la razón.",
        "question": "¿Qué función cumple «Próxima transformación y clarificación» en esta fase?",
        "answer": "La crisis histórica prepara la autocrítica de la razón."
      }
    ],
    "edges": [
      {
        "id": "a2-e1",
        "source": "a2-queen",
        "target": "a2-dogmatism",
        "label": "es gobernada mediante",
        "kind": "prepares"
      },
      {
        "id": "a2-e2",
        "source": "a2-dogmatism",
        "target": "a2-despotism",
        "label": "adopta la forma de",
        "kind": "illustrates"
      },
      {
        "id": "a2-e3",
        "source": "a2-dogmatism",
        "target": "a2-civil-wars",
        "label": "provoca",
        "kind": "causes"
      },
      {
        "id": "a2-e4",
        "source": "a2-civil-wars",
        "target": "a2-anarchy",
        "label": "degeneran en",
        "kind": "causes"
      },
      {
        "id": "a2-e5",
        "source": "a2-anarchy",
        "target": "a2-skeptics",
        "label": "abre paso a",
        "kind": "causes"
      },
      {
        "id": "a2-e6",
        "source": "a2-skeptics",
        "target": "a2-no-foundation",
        "label": "pero no produce",
        "kind": "limits"
      },
      {
        "id": "a2-e7",
        "source": "a2-anarchy",
        "target": "a2-locke",
        "label": "parece poder resolverse mediante",
        "kind": "prepares"
      },
      {
        "id": "a2-e8",
        "source": "a2-locke",
        "target": "a2-locke-failure",
        "label": "no logra justificar",
        "kind": "limits"
      },
      {
        "id": "a2-e9",
        "source": "a2-locke-failure",
        "target": "a2-return",
        "label": "permite el",
        "kind": "causes"
      },
      {
        "id": "a2-e10",
        "source": "a2-no-foundation",
        "target": "a2-return",
        "label": "tampoco evita el",
        "kind": "causes"
      },
      {
        "id": "a2-e11",
        "source": "a2-return",
        "target": "a2-discredit",
        "label": "produce nuevamente",
        "kind": "causes"
      },
      {
        "id": "a2-e12",
        "source": "a2-discredit",
        "target": "a2-indifference",
        "label": "genera",
        "kind": "causes"
      },
      {
        "id": "a2-e13",
        "source": "a2-inevitable",
        "target": "a2-indifference",
        "label": "impide una auténtica",
        "kind": "contrasts"
      },
      {
        "id": "a2-e14",
        "source": "a2-indifference",
        "target": "a2-maturity",
        "label": "puede revelar",
        "kind": "resolves"
      },
      {
        "id": "a2-e15",
        "source": "a2-maturity",
        "target": "a2-apparent-knowledge",
        "label": "rechaza",
        "kind": "rejects"
      },
      {
        "id": "a2-e16",
        "source": "a2-apparent-knowledge",
        "target": "a2-transformation",
        "label": "prepara",
        "kind": "prepares"
      }
    ],
    "guideNodeIds": [
      "a2-queen",
      "a2-dogmatism",
      "a2-despotism",
      "a2-civil-wars",
      "a2-anarchy",
      "a2-skeptics",
      "a2-no-foundation",
      "a2-locke",
      "a2-locke-failure",
      "a2-return",
      "a2-discredit",
      "a2-indifference",
      "a2-inevitable",
      "a2-maturity",
      "a2-apparent-knowledge",
      "a2-transformation"
    ]
  },
  {
    "id": "phase-3",
    "roman": "III",
    "preface": "A",
    "shortTitle": "Tribunal",
    "subtitle": "Prólogo A · 1781",
    "title": "El tribunal de la razón",
    "question": "¿Qué significa someter la razón a crítica y qué debe decidir ese examen?",
    "thesis": "La salida al fracaso de la metafísica consiste en hacer que la razón examine sus propias pretensiones y distinga entre lo que puede reclamar legítimamente y lo que debe rechazar como infundado.",
    "pages": "7–8",
    "takeaways": [
      "La crítica es autoconocimiento de la razón.",
      "El tribunal distingue derechos legítimos de arrogancias infundadas.",
      "La meta no es abolir la metafísica, sino prepararla legítimamente."
    ],
    "nodes": [
      {
        "id": "a3-maturity",
        "position": {
          "x": 1420,
          "y": 0
        },
        "title": "Juicio maduro de la época",
        "tag": "CONTEXTO",
        "category": "claim",
        "detail": "La crisis de la metafísica revela una época menos dispuesta a aceptar respuestas aparentes y más exigente con sus fundamentos.",
        "pages": "7–8",
        "keyIdea": "La crisis de la metafísica revela una época menos dispuesta a aceptar respuestas aparentes y más exigente con sus fundamentos.",
        "question": "¿Qué función cumple «Juicio maduro de la época» en esta fase?",
        "answer": "La crisis de la metafísica revela una época menos dispuesta a aceptar respuestas aparentes y más exigente con sus fundamentos."
      },
      {
        "id": "a3-self-knowledge",
        "position": {
          "x": 1420,
          "y": 250
        },
        "title": "Autoconocimiento de la razón",
        "tag": "TAREA",
        "category": "method",
        "detail": "La razón debe examinar sus propias capacidades antes de seguir construyendo metafísica.",
        "pages": "7–8",
        "keyIdea": "Antes de preguntar qué existe, hay que preguntar qué puede conocer la razón.",
        "question": "¿Qué función cumple «Autoconocimiento de la razón» en esta fase?",
        "answer": "Antes de preguntar qué existe, hay que preguntar qué puede conocer la razón."
      },
      {
        "id": "a3-tribunal",
        "position": {
          "x": 1420,
          "y": 560
        },
        "title": "Tribunal de la razón",
        "tag": "NÚCLEO",
        "category": "claim",
        "detail": "La razón instituye un tribunal sobre sí misma para juzgar sus pretensiones conforme a sus propias leyes.",
        "pages": "7–8",
        "keyIdea": "La razón no abdica: se convierte en juez de sus propios derechos.",
        "question": "¿Qué función cumple «Tribunal de la razón» en esta fase?",
        "answer": "La razón no abdica: se convierte en juez de sus propios derechos."
      },
      {
        "id": "a3-legitimate",
        "position": {
          "x": 900,
          "y": 880
        },
        "title": "Pretensiones legítimas",
        "tag": "DERECHO",
        "category": "claim",
        "detail": "La crítica debe identificar aquellas pretensiones de conocimiento que pueden justificarse racionalmente.",
        "pages": "7–8",
        "keyIdea": "La crítica debe identificar aquellas pretensiones de conocimiento que pueden justificarse racionalmente.",
        "question": "¿Qué función cumple «Pretensiones legítimas» en esta fase?",
        "answer": "La crítica debe identificar aquellas pretensiones de conocimiento que pueden justificarse racionalmente."
      },
      {
        "id": "a3-guarantee",
        "position": {
          "x": 900,
          "y": 1140
        },
        "title": "Garantizar lo legítimo",
        "tag": "FUNCIÓN",
        "category": "method",
        "detail": "El tribunal crítico no sólo rechaza errores: protege y asegura aquello que la razón sí puede reclamar con derecho.",
        "pages": "7–8",
        "keyIdea": "Criticar también significa legitimar.",
        "question": "¿Qué función cumple «Garantizar lo legítimo» en esta fase?",
        "answer": "Criticar también significa legitimar."
      },
      {
        "id": "a3-laws",
        "position": {
          "x": 1420,
          "y": 880
        },
        "title": "Leyes de la propia razón",
        "tag": "CRITERIO",
        "category": "method",
        "detail": "El tribunal debe decidir conforme a principios racionales y no por obediencia a una autoridad externa.",
        "pages": "7–8",
        "keyIdea": "El tribunal debe decidir conforme a principios racionales y no por obediencia a una autoridad externa.",
        "question": "¿Qué función cumple «Leyes de la propia razón» en esta fase?",
        "answer": "El tribunal debe decidir conforme a principios racionales y no por obediencia a una autoridad externa."
      },
      {
        "id": "a3-public",
        "position": {
          "x": 1420,
          "y": 1140
        },
        "title": "Examen público y libre",
        "tag": "EXAMEN",
        "category": "method",
        "detail": "Kant exige que las pretensiones racionales puedan someterse a un examen abierto y libre.",
        "pages": "7–8",
        "keyIdea": "Sólo merece respeto racional aquello que puede resistir la crítica.",
        "question": "¿Qué función cumple «Examen público y libre» en esta fase?",
        "answer": "Sólo merece respeto racional aquello que puede resistir la crítica."
      },
      {
        "id": "a3-unfounded",
        "position": {
          "x": 1940,
          "y": 880
        },
        "title": "Arrogancias infundadas",
        "tag": "EXCESO",
        "category": "problem",
        "detail": "La razón puede atribuirse conocimientos para los que no ha establecido derecho suficiente.",
        "pages": "7–8",
        "keyIdea": "La razón puede atribuirse conocimientos para los que no ha establecido derecho suficiente.",
        "question": "¿Qué función cumple «Arrogancias infundadas» en esta fase?",
        "answer": "La razón puede atribuirse conocimientos para los que no ha establecido derecho suficiente."
      },
      {
        "id": "a3-reject",
        "position": {
          "x": 1940,
          "y": 1140
        },
        "title": "Rechazar pretensiones ilegítimas",
        "tag": "FUNCIÓN",
        "category": "method",
        "detail": "La crítica debe retirar aquellas afirmaciones que no puedan justificar su validez.",
        "pages": "7–8",
        "keyIdea": "La crítica debe retirar aquellas afirmaciones que no puedan justificar su validez.",
        "question": "¿Qué función cumple «Rechazar pretensiones ilegítimas» en esta fase?",
        "answer": "La crítica debe retirar aquellas afirmaciones que no puedan justificar su validez."
      },
      {
        "id": "a3-authority",
        "position": {
          "x": 2360,
          "y": 700
        },
        "title": "Autoridad externa",
        "tag": "CONTRASTE",
        "category": "contrast",
        "detail": "Prestigio, tradición, santidad o majestad no sustituyen el examen racional de una pretensión.",
        "pages": "7–8",
        "keyIdea": "Prestigio, tradición, santidad o majestad no sustituyen el examen racional de una pretensión.",
        "question": "¿Qué función cumple «Autoridad externa» en esta fase?",
        "answer": "Prestigio, tradición, santidad o majestad no sustituyen el examen racional de una pretensión."
      },
      {
        "id": "a3-not-books",
        "position": {
          "x": 420,
          "y": 520
        },
        "title": "Crítica ≠ crítica de libros y sistemas",
        "tag": "ACLARACIÓN",
        "category": "contrast",
        "detail": "La palabra crítica no designa aquí una reseña o ataque contra autores particulares.",
        "pages": "8",
        "keyIdea": "La palabra crítica no designa aquí una reseña o ataque contra autores particulares.",
        "question": "¿Qué función cumple «Crítica ≠ crítica de libros y sistemas» en esta fase?",
        "answer": "La palabra crítica no designa aquí una reseña o ataque contra autores particulares."
      },
      {
        "id": "a3-faculty",
        "position": {
          "x": 420,
          "y": 820
        },
        "title": "Crítica de la facultad de la razón",
        "tag": "DEFINICIÓN",
        "category": "method",
        "detail": "El verdadero objeto de la investigación es la capacidad de la razón respecto de los conocimientos que pretende alcanzar por sí misma.",
        "pages": "8",
        "keyIdea": "El verdadero objeto de la investigación es la capacidad de la razón respecto de los conocimientos que pretende alcanzar por sí misma.",
        "question": "¿Qué función cumple «Crítica de la facultad de la razón» en esta fase?",
        "answer": "El verdadero objeto de la investigación es la capacidad de la razón respecto de los conocimientos que pretende alcanzar por sí misma."
      },
      {
        "id": "a3-pure-critique",
        "position": {
          "x": 1420,
          "y": 1450
        },
        "title": "Crítica de la razón pura",
        "tag": "RESULTADO",
        "category": "conclusion",
        "detail": "La obra examina sistemáticamente los derechos, la capacidad y los límites de la razón independiente de la experiencia.",
        "pages": "8",
        "keyIdea": "La razón juzga a la razón.",
        "question": "¿Qué función cumple «Crítica de la razón pura» en esta fase?",
        "answer": "La razón juzga a la razón."
      },
      {
        "id": "a3-possibility",
        "position": {
          "x": 850,
          "y": 1770
        },
        "title": "Posibilidad de la metafísica",
        "tag": "OBJETIVO",
        "category": "claim",
        "detail": "La crítica debe decidir si puede existir conocimiento metafísico legítimo.",
        "pages": "8",
        "keyIdea": "La crítica debe decidir si puede existir conocimiento metafísico legítimo.",
        "question": "¿Qué función cumple «Posibilidad de la metafísica» en esta fase?",
        "answer": "La crítica debe decidir si puede existir conocimiento metafísico legítimo."
      },
      {
        "id": "a3-sources",
        "position": {
          "x": 1220,
          "y": 1770
        },
        "title": "Fuentes del conocimiento",
        "tag": "OBJETIVO",
        "category": "claim",
        "detail": "La investigación debe determinar de dónde proceden los principios que la razón pretende utilizar a priori.",
        "pages": "8",
        "keyIdea": "La investigación debe determinar de dónde proceden los principios que la razón pretende utilizar a priori.",
        "question": "¿Qué función cumple «Fuentes del conocimiento» en esta fase?",
        "answer": "La investigación debe determinar de dónde proceden los principios que la razón pretende utilizar a priori."
      },
      {
        "id": "a3-extension",
        "position": {
          "x": 1590,
          "y": 1770
        },
        "title": "Extensión",
        "tag": "OBJETIVO",
        "category": "claim",
        "detail": "La crítica debe medir hasta dónde puede alcanzar legítimamente el conocimiento racional.",
        "pages": "8",
        "keyIdea": "La crítica debe medir hasta dónde puede alcanzar legítimamente el conocimiento racional.",
        "question": "¿Qué función cumple «Extensión» en esta fase?",
        "answer": "La crítica debe medir hasta dónde puede alcanzar legítimamente el conocimiento racional."
      },
      {
        "id": "a3-limits",
        "position": {
          "x": 1960,
          "y": 1770
        },
        "title": "Límites",
        "tag": "OBJETIVO",
        "category": "claim",
        "detail": "La investigación debe fijar el punto en que la razón ya no puede reclamar conocimiento.",
        "pages": "8",
        "keyIdea": "La investigación debe fijar el punto en que la razón ya no puede reclamar conocimiento.",
        "question": "¿Qué función cumple «Límites» en esta fase?",
        "answer": "La investigación debe fijar el punto en que la razón ya no puede reclamar conocimiento."
      },
      {
        "id": "a3-metaphysics",
        "position": {
          "x": 1420,
          "y": 2090
        },
        "title": "Preparación de una metafísica legítima",
        "tag": "SALIDA",
        "category": "conclusion",
        "detail": "La crítica no busca destruir la metafísica, sino establecer las condiciones bajo las cuales podría desarrollarse legítimamente.",
        "pages": "8",
        "keyIdea": "Primero crítica; después metafísica.",
        "question": "¿Qué función cumple «Preparación de una metafísica legítima» en esta fase?",
        "answer": "Primero crítica; después metafísica."
      }
    ],
    "edges": [
      {
        "id": "a3-e1",
        "source": "a3-maturity",
        "target": "a3-self-knowledge",
        "label": "exige",
        "kind": "requires"
      },
      {
        "id": "a3-e2",
        "source": "a3-self-knowledge",
        "target": "a3-tribunal",
        "label": "instituye",
        "kind": "prepares"
      },
      {
        "id": "a3-e3",
        "source": "a3-tribunal",
        "target": "a3-legitimate",
        "label": "examina",
        "kind": "method"
      },
      {
        "id": "a3-e4",
        "source": "a3-legitimate",
        "target": "a3-guarantee",
        "label": "deben ser",
        "kind": "conclusion"
      },
      {
        "id": "a3-e5",
        "source": "a3-tribunal",
        "target": "a3-unfounded",
        "label": "examina",
        "kind": "method"
      },
      {
        "id": "a3-e6",
        "source": "a3-unfounded",
        "target": "a3-reject",
        "label": "deben ser",
        "kind": "rejects"
      },
      {
        "id": "a3-e7",
        "source": "a3-tribunal",
        "target": "a3-laws",
        "label": "juzga conforme a",
        "kind": "requires"
      },
      {
        "id": "a3-e8",
        "source": "a3-laws",
        "target": "a3-public",
        "label": "se ponen a prueba mediante",
        "kind": "method"
      },
      {
        "id": "a3-e9",
        "source": "a3-authority",
        "target": "a3-laws",
        "label": "no sustituye",
        "kind": "contrasts"
      },
      {
        "id": "a3-e10",
        "source": "a3-not-books",
        "target": "a3-pure-critique",
        "label": "no es",
        "kind": "contrasts"
      },
      {
        "id": "a3-e11",
        "source": "a3-faculty",
        "target": "a3-pure-critique",
        "label": "define",
        "kind": "supports"
      },
      {
        "id": "a3-e12",
        "source": "a3-tribunal",
        "target": "a3-pure-critique",
        "label": "culmina en",
        "kind": "conclusion"
      },
      {
        "id": "a3-e13",
        "source": "a3-pure-critique",
        "target": "a3-possibility",
        "label": "determina",
        "kind": "method"
      },
      {
        "id": "a3-e14",
        "source": "a3-pure-critique",
        "target": "a3-sources",
        "label": "investiga",
        "kind": "method"
      },
      {
        "id": "a3-e15",
        "source": "a3-pure-critique",
        "target": "a3-extension",
        "label": "mide",
        "kind": "method"
      },
      {
        "id": "a3-e16",
        "source": "a3-pure-critique",
        "target": "a3-limits",
        "label": "fija",
        "kind": "limits"
      },
      {
        "id": "a3-e17",
        "source": "a3-pure-critique",
        "target": "a3-metaphysics",
        "label": "prepara",
        "kind": "prepares"
      }
    ],
    "guideNodeIds": [
      "a3-maturity",
      "a3-self-knowledge",
      "a3-tribunal",
      "a3-legitimate",
      "a3-guarantee",
      "a3-laws",
      "a3-public",
      "a3-unfounded",
      "a3-reject",
      "a3-authority",
      "a3-not-books",
      "a3-faculty",
      "a3-pure-critique",
      "a3-possibility",
      "a3-sources",
      "a3-extension",
      "a3-limits",
      "a3-metaphysics"
    ]
  },
  {
    "id": "phase-4",
    "roman": "IV",
    "preface": "A",
    "shortTitle": "Pregunta",
    "subtitle": "Prólogo A · 1781",
    "title": "La pregunta fundamental de la Crítica",
    "question": "¿Qué y cuánto pueden conocer el entendimiento y la razón con independencia de toda experiencia?",
    "thesis": "La Crítica debe determinar la posibilidad, alcance y legitimidad del conocimiento a priori, dando prioridad a la cuestión de su validez objetiva.",
    "pages": "8–9",
    "takeaways": [
      "La cuestión principal es qué y cuánto puede conocerse a priori.",
      "La deducción objetiva pregunta por la legitimidad del uso de conceptos puros.",
      "La razón pura debe poder comprenderse como una unidad completa."
    ],
    "nodes": [
      {
        "id": "a4-critique",
        "position": {
          "x": 1320,
          "y": 0
        },
        "title": "Crítica de la razón pura",
        "tag": "MARCO",
        "category": "method",
        "detail": "La investigación crítica toma ahora forma de una pregunta precisa por el alcance legítimo del conocimiento independiente de la experiencia.",
        "pages": "8–9",
        "keyIdea": "La investigación crítica toma ahora forma de una pregunta precisa por el alcance legítimo del conocimiento independiente de la experiencia.",
        "question": "¿Qué función cumple «Crítica de la razón pura» en esta fase?",
        "answer": "La investigación crítica toma ahora forma de una pregunta precisa por el alcance legítimo del conocimiento independiente de la experiencia."
      },
      {
        "id": "a4-main-question",
        "position": {
          "x": 1320,
          "y": 300
        },
        "title": "¿Qué y cuánto podemos conocer?",
        "tag": "PREGUNTA",
        "category": "claim",
        "detail": "Kant formula como cuestión fundamental qué y cuánto pueden conocer el entendimiento y la razón con independencia de toda experiencia.",
        "pages": "8–9",
        "keyIdea": "La Crítica pregunta primero por el derecho y el alcance del conocimiento a priori.",
        "question": "¿Cuál es la pregunta fundamental que Kant destaca en el prólogo A?",
        "answer": "Qué y cuánto pueden conocer el entendimiento y la razón con independencia de toda experiencia."
      },
      {
        "id": "a4-what",
        "position": {
          "x": 650,
          "y": 650
        },
        "title": "Qué puede conocerse",
        "tag": "ALCANCE",
        "category": "claim",
        "detail": "La Crítica debe determinar qué contenidos pueden convertirse legítimamente en objetos de conocimiento racional.",
        "pages": "8–9",
        "keyIdea": "La Crítica debe determinar qué contenidos pueden convertirse legítimamente en objetos de conocimiento racional.",
        "question": "¿Qué función cumple «Qué puede conocerse» en esta fase?",
        "answer": "La Crítica debe determinar qué contenidos pueden convertirse legítimamente en objetos de conocimiento racional."
      },
      {
        "id": "a4-objects",
        "position": {
          "x": 650,
          "y": 920
        },
        "title": "Objetos del conocimiento a priori",
        "tag": "OBJETO",
        "category": "evidence",
        "detail": "El problema no es sólo poseer conceptos, sino establecer a qué objetos pueden aplicarse con validez.",
        "pages": "8–9",
        "keyIdea": "El problema no es sólo poseer conceptos, sino establecer a qué objetos pueden aplicarse con validez.",
        "question": "¿Qué función cumple «Objetos del conocimiento a priori» en esta fase?",
        "answer": "El problema no es sólo poseer conceptos, sino establecer a qué objetos pueden aplicarse con validez."
      },
      {
        "id": "a4-how-much",
        "position": {
          "x": 1320,
          "y": 650
        },
        "title": "Cuánto puede conocerse",
        "tag": "EXTENSIÓN",
        "category": "claim",
        "detail": "La investigación debe determinar no sólo si existe conocimiento a priori, sino hasta dónde puede extenderse.",
        "pages": "8–9",
        "keyIdea": "La investigación debe determinar no sólo si existe conocimiento a priori, sino hasta dónde puede extenderse.",
        "question": "¿Qué función cumple «Cuánto puede conocerse» en esta fase?",
        "answer": "La investigación debe determinar no sólo si existe conocimiento a priori, sino hasta dónde puede extenderse."
      },
      {
        "id": "a4-extension",
        "position": {
          "x": 1320,
          "y": 920
        },
        "title": "Extensión del conocimiento",
        "tag": "MEDIDA",
        "category": "method",
        "detail": "Medir la extensión significa establecer el campo dentro del cual las pretensiones racionales pueden justificarse.",
        "pages": "8–9",
        "keyIdea": "Medir la extensión significa establecer el campo dentro del cual las pretensiones racionales pueden justificarse.",
        "question": "¿Qué función cumple «Extensión del conocimiento» en esta fase?",
        "answer": "Medir la extensión significa establecer el campo dentro del cual las pretensiones racionales pueden justificarse."
      },
      {
        "id": "a4-apriori",
        "position": {
          "x": 1990,
          "y": 650
        },
        "title": "Conocimiento a priori",
        "tag": "FUENTE",
        "category": "claim",
        "detail": "La Crítica examina conocimientos que pretenden valer con independencia de la experiencia particular.",
        "pages": "8–9",
        "keyIdea": "La Crítica examina conocimientos que pretenden valer con independencia de la experiencia particular.",
        "question": "¿Qué función cumple «Conocimiento a priori» en esta fase?",
        "answer": "La Crítica examina conocimientos que pretenden valer con independencia de la experiencia particular."
      },
      {
        "id": "a4-pure-reason",
        "position": {
          "x": 1990,
          "y": 920
        },
        "title": "Razón pura",
        "tag": "FUENTE",
        "category": "method",
        "detail": "La razón pura se considera en aquello que pretende obtener desde sus propios principios.",
        "pages": "8–9",
        "keyIdea": "La razón pura se considera en aquello que pretende obtener desde sus propios principios.",
        "question": "¿Qué función cumple «Razón pura» en esta fase?",
        "answer": "La razón pura se considera en aquello que pretende obtener desde sus propios principios."
      },
      {
        "id": "a4-experience",
        "position": {
          "x": 2360,
          "y": 920
        },
        "title": "Experiencia",
        "tag": "CONTRASTE",
        "category": "contrast",
        "detail": "La experiencia proporciona conocimiento de objetos dados, pero la cuestión crítica se dirige específicamente a las pretensiones independientes de ella.",
        "pages": "8–9",
        "keyIdea": "La experiencia proporciona conocimiento de objetos dados, pero la cuestión crítica se dirige específicamente a las pretensiones independientes de ella.",
        "question": "¿Qué función cumple «Experiencia» en esta fase?",
        "answer": "La experiencia proporciona conocimiento de objetos dados, pero la cuestión crítica se dirige específicamente a las pretensiones independientes de ella."
      },
      {
        "id": "a4-objective",
        "position": {
          "x": 920,
          "y": 1260
        },
        "title": "Deducción objetiva",
        "tag": "NÚCLEO",
        "category": "method",
        "detail": "La deducción objetiva debe justificar por qué los conceptos a priori pueden tener validez respecto de objetos.",
        "pages": "8–9",
        "keyIdea": "La cuestión central es la legitimidad objetiva de nuestros conceptos puros.",
        "question": "¿Qué función cumple «Deducción objetiva» en esta fase?",
        "answer": "La cuestión central es la legitimidad objetiva de nuestros conceptos puros."
      },
      {
        "id": "a4-validity",
        "position": {
          "x": 920,
          "y": 1530
        },
        "title": "Validez objetiva",
        "tag": "META",
        "category": "conclusion",
        "detail": "Un concepto no se convierte en conocimiento sólo por existir en el pensamiento; debe justificarse su aplicación a objetos.",
        "pages": "8–9",
        "keyIdea": "La pregunta crítica es: ¿con qué derecho aplicamos este concepto?",
        "question": "¿Qué función cumple «Validez objetiva» en esta fase?",
        "answer": "La pregunta crítica es: ¿con qué derecho aplicamos este concepto?"
      },
      {
        "id": "a4-limits",
        "position": {
          "x": 1720,
          "y": 1260
        },
        "title": "Límites del conocimiento",
        "tag": "LÍMITE",
        "category": "contrast",
        "detail": "Determinar la extensión implica también saber dónde debe detenerse la razón.",
        "pages": "8–9",
        "keyIdea": "Determinar la extensión implica también saber dónde debe detenerse la razón.",
        "question": "¿Qué función cumple «Límites del conocimiento» en esta fase?",
        "answer": "Determinar la extensión implica también saber dónde debe detenerse la razón."
      },
      {
        "id": "a4-unity",
        "position": {
          "x": 1320,
          "y": 1640
        },
        "title": "Unidad de la razón pura",
        "tag": "ESTRUCTURA",
        "category": "claim",
        "detail": "Los problemas de la razón pura forman un sistema interdependiente y no una colección accidental de preguntas.",
        "pages": "9",
        "keyIdea": "Los problemas de la razón pura forman un sistema interdependiente y no una colección accidental de preguntas.",
        "question": "¿Qué función cumple «Unidad de la razón pura» en esta fase?",
        "answer": "Los problemas de la razón pura forman un sistema interdependiente y no una colección accidental de preguntas."
      },
      {
        "id": "a4-common-principle",
        "position": {
          "x": 1320,
          "y": 1910
        },
        "title": "Principio común",
        "tag": "PRINCIPIO",
        "category": "method",
        "detail": "La unidad sistemática exige principios capaces de ordenar coherentemente las distintas pretensiones de la razón.",
        "pages": "9",
        "keyIdea": "La unidad sistemática exige principios capaces de ordenar coherentemente las distintas pretensiones de la razón.",
        "question": "¿Qué función cumple «Principio común» en esta fase?",
        "answer": "La unidad sistemática exige principios capaces de ordenar coherentemente las distintas pretensiones de la razón."
      },
      {
        "id": "a4-exhaustiveness",
        "position": {
          "x": 1030,
          "y": 2220
        },
        "title": "Exhaustividad",
        "tag": "REQUISITO",
        "category": "method",
        "detail": "La crítica debe recorrer sistemáticamente todas las cuestiones que la razón pura plantea por su propia naturaleza.",
        "pages": "9",
        "keyIdea": "La crítica debe recorrer sistemáticamente todas las cuestiones que la razón pura plantea por su propia naturaleza.",
        "question": "¿Qué función cumple «Exhaustividad» en esta fase?",
        "answer": "La crítica debe recorrer sistemáticamente todas las cuestiones que la razón pura plantea por su propia naturaleza."
      },
      {
        "id": "a4-completeness",
        "position": {
          "x": 1610,
          "y": 2220
        },
        "title": "Completud",
        "tag": "REQUISITO",
        "category": "conclusion",
        "detail": "El campo de la razón pura debe poder presentarse como una totalidad organizada y completa.",
        "pages": "9",
        "keyIdea": "El campo de la razón pura debe poder presentarse como una totalidad organizada y completa.",
        "question": "¿Qué función cumple «Completud» en esta fase?",
        "answer": "El campo de la razón pura debe poder presentarse como una totalidad organizada y completa."
      },
      {
        "id": "a4-secondary",
        "position": {
          "x": 2840,
          "y": 460
        },
        "title": "¿Cómo es posible la facultad de pensar?",
        "tag": "SECUNDARIA",
        "category": "contrast",
        "detail": "Kant distingue de la cuestión principal una investigación sobre cómo es posible la facultad misma de pensar.",
        "pages": "8–9",
        "keyIdea": "Kant distingue de la cuestión principal una investigación sobre cómo es posible la facultad misma de pensar.",
        "question": "¿Qué función cumple «¿Cómo es posible la facultad de pensar?» en esta fase?",
        "answer": "Kant distingue de la cuestión principal una investigación sobre cómo es posible la facultad misma de pensar."
      },
      {
        "id": "a4-subjective",
        "position": {
          "x": 2840,
          "y": 790
        },
        "title": "Deducción subjetiva",
        "tag": "INVESTIGACIÓN",
        "category": "method",
        "detail": "La deducción subjetiva estudia el entendimiento según sus facultades y condiciones internas.",
        "pages": "8–9",
        "keyIdea": "La deducción subjetiva estudia el entendimiento según sus facultades y condiciones internas.",
        "question": "¿Qué función cumple «Deducción subjetiva» en esta fase?",
        "answer": "La deducción subjetiva estudia el entendimiento según sus facultades y condiciones internas."
      },
      {
        "id": "a4-faculties",
        "position": {
          "x": 2840,
          "y": 1070
        },
        "title": "Facultades cognoscitivas",
        "tag": "OBJETO",
        "category": "evidence",
        "detail": "Esta vertiente investiga las capacidades sobre las que descansa el pensar, no directamente la validez objetiva.",
        "pages": "8–9",
        "keyIdea": "Esta vertiente investiga las capacidades sobre las que descansa el pensar, no directamente la validez objetiva.",
        "question": "¿Qué función cumple «Facultades cognoscitivas» en esta fase?",
        "answer": "Esta vertiente investiga las capacidades sobre las que descansa el pensar, no directamente la validez objetiva."
      },
      {
        "id": "a4-priority",
        "position": {
          "x": 2380,
          "y": 1450
        },
        "title": "La cuestión objetiva es esencial",
        "tag": "PRIORIDAD",
        "category": "conclusion",
        "detail": "Kant considera esencial justificar la validez objetiva, mientras que la investigación subjetiva es importante pero no decisiva del mismo modo.",
        "pages": "8–9",
        "keyIdea": "El proyecto busca legitimar conocimiento, no sólo describir facultades mentales.",
        "question": "¿Qué función cumple «La cuestión objetiva es esencial» en esta fase?",
        "answer": "El proyecto busca legitimar conocimiento, no sólo describir facultades mentales."
      }
    ],
    "edges": [
      {
        "id": "a4-e1",
        "source": "a4-critique",
        "target": "a4-main-question",
        "label": "formula",
        "kind": "prepares"
      },
      {
        "id": "a4-e2",
        "source": "a4-main-question",
        "target": "a4-what",
        "label": "pregunta por",
        "kind": "method"
      },
      {
        "id": "a4-e3",
        "source": "a4-main-question",
        "target": "a4-how-much",
        "label": "mide",
        "kind": "method"
      },
      {
        "id": "a4-e4",
        "source": "a4-main-question",
        "target": "a4-apriori",
        "label": "investiga",
        "kind": "method"
      },
      {
        "id": "a4-e5",
        "source": "a4-what",
        "target": "a4-objects",
        "label": "se refiere a",
        "kind": "supports"
      },
      {
        "id": "a4-e6",
        "source": "a4-objects",
        "target": "a4-objective",
        "label": "requieren",
        "kind": "requires"
      },
      {
        "id": "a4-e7",
        "source": "a4-objective",
        "target": "a4-validity",
        "label": "justifica",
        "kind": "conclusion"
      },
      {
        "id": "a4-e8",
        "source": "a4-how-much",
        "target": "a4-extension",
        "label": "determina",
        "kind": "method"
      },
      {
        "id": "a4-e9",
        "source": "a4-extension",
        "target": "a4-limits",
        "label": "implica fijar",
        "kind": "limits"
      },
      {
        "id": "a4-e10",
        "source": "a4-apriori",
        "target": "a4-pure-reason",
        "label": "pertenece al examen de",
        "kind": "supports"
      },
      {
        "id": "a4-e11",
        "source": "a4-experience",
        "target": "a4-pure-reason",
        "label": "contrasta con",
        "kind": "contrasts"
      },
      {
        "id": "a4-e12",
        "source": "a4-main-question",
        "target": "a4-secondary",
        "label": "se distingue de",
        "kind": "distinguishes"
      },
      {
        "id": "a4-e13",
        "source": "a4-secondary",
        "target": "a4-subjective",
        "label": "conduce a",
        "kind": "prepares"
      },
      {
        "id": "a4-e14",
        "source": "a4-subjective",
        "target": "a4-faculties",
        "label": "estudia",
        "kind": "method"
      },
      {
        "id": "a4-e15",
        "source": "a4-objective",
        "target": "a4-priority",
        "label": "tiene prioridad en",
        "kind": "supports"
      },
      {
        "id": "a4-e16",
        "source": "a4-subjective",
        "target": "a4-priority",
        "label": "es secundaria frente a",
        "kind": "contrasts"
      },
      {
        "id": "a4-e17",
        "source": "a4-validity",
        "target": "a4-unity",
        "label": "debe integrarse en",
        "kind": "requires"
      },
      {
        "id": "a4-e18",
        "source": "a4-limits",
        "target": "a4-unity",
        "label": "forman parte de",
        "kind": "supports"
      },
      {
        "id": "a4-e19",
        "source": "a4-unity",
        "target": "a4-common-principle",
        "label": "requiere",
        "kind": "requires"
      },
      {
        "id": "a4-e20",
        "source": "a4-common-principle",
        "target": "a4-exhaustiveness",
        "label": "permite",
        "kind": "supports"
      },
      {
        "id": "a4-e21",
        "source": "a4-common-principle",
        "target": "a4-completeness",
        "label": "hace posible",
        "kind": "supports"
      }
    ],
    "guideNodeIds": [
      "a4-critique",
      "a4-main-question",
      "a4-what",
      "a4-objects",
      "a4-how-much",
      "a4-extension",
      "a4-apriori",
      "a4-pure-reason",
      "a4-experience",
      "a4-objective",
      "a4-validity",
      "a4-limits",
      "a4-unity",
      "a4-common-principle",
      "a4-exhaustiveness",
      "a4-completeness",
      "a4-secondary",
      "a4-subjective",
      "a4-faculties",
      "a4-priority"
    ]
  },
  {
    "id": "phase-5",
    "roman": "V",
    "preface": "A",
    "shortTitle": "Método",
    "subtitle": "Prólogo A · 1781",
    "title": "Completud, certeza y claridad",
    "question": "¿Qué condiciones debe cumplir la Crítica para presentarse como una investigación rigurosa de la razón pura?",
    "thesis": "La Crítica debe ser completa, cierta y clara, pero la claridad no puede sacrificarse a costa de la arquitectura y unidad del sistema.",
    "pages": "8–11",
    "takeaways": [
      "Completud exige concebir la razón pura como sistema.",
      "Certeza excluye opinión e hipótesis como fundamentos últimos.",
      "Claridad local debe subordinarse a la visión de la arquitectura total."
    ],
    "nodes": [
      {
        "id": "a5-rigorous-critique",
        "position": {
          "x": 1400,
          "y": 0
        },
        "title": "Crítica rigurosa",
        "tag": "MARCO",
        "category": "method",
        "detail": "Una investigación de la razón pura debe satisfacer exigencias especialmente estrictas de forma y fundamentación.",
        "pages": "8–11",
        "keyIdea": "Una investigación de la razón pura debe satisfacer exigencias especialmente estrictas de forma y fundamentación.",
        "question": "¿Qué función cumple «Crítica rigurosa» en esta fase?",
        "answer": "Una investigación de la razón pura debe satisfacer exigencias especialmente estrictas de forma y fundamentación."
      },
      {
        "id": "a5-completeness",
        "position": {
          "x": 500,
          "y": 420
        },
        "title": "Completud",
        "tag": "REQUISITO",
        "category": "claim",
        "detail": "La investigación debe abarcar sistemáticamente todo el campo de la razón pura.",
        "pages": "8–11",
        "keyIdea": "La Crítica pretende no dejar fuera ninguna cuestión fundamental que pertenezca a la razón pura.",
        "question": "¿Qué función cumple «Completud» en esta fase?",
        "answer": "La Crítica pretende no dejar fuera ninguna cuestión fundamental que pertenezca a la razón pura."
      },
      {
        "id": "a5-unity",
        "position": {
          "x": 500,
          "y": 720
        },
        "title": "Unidad de la razón pura",
        "tag": "ESTRUCTURA",
        "category": "claim",
        "detail": "La razón pura forma una unidad interna cuyos principios y cuestiones se implican mutuamente.",
        "pages": "8–11",
        "keyIdea": "La razón pura forma una unidad interna cuyos principios y cuestiones se implican mutuamente.",
        "question": "¿Qué función cumple «Unidad de la razón pura» en esta fase?",
        "answer": "La razón pura forma una unidad interna cuyos principios y cuestiones se implican mutuamente."
      },
      {
        "id": "a5-inventory",
        "position": {
          "x": 500,
          "y": 1030
        },
        "title": "Inventario de la razón",
        "tag": "IMAGEN",
        "category": "evidence",
        "detail": "Kant concibe la futura metafísica como un inventario sistemáticamente ordenado de los conocimientos de la razón pura.",
        "pages": "10–11",
        "keyIdea": "Kant concibe la futura metafísica como un inventario sistemáticamente ordenado de los conocimientos de la razón pura.",
        "question": "¿Qué función cumple «Inventario de la razón» en esta fase?",
        "answer": "Kant concibe la futura metafísica como un inventario sistemáticamente ordenado de los conocimientos de la razón pura."
      },
      {
        "id": "a5-system",
        "position": {
          "x": 500,
          "y": 1330
        },
        "title": "Sistema",
        "tag": "FORMA",
        "category": "conclusion",
        "detail": "El conocimiento metafísico debe organizarse como una totalidad articulada y no como una acumulación de tesis aisladas.",
        "pages": "10–11",
        "keyIdea": "El conocimiento metafísico debe organizarse como una totalidad articulada y no como una acumulación de tesis aisladas.",
        "question": "¿Qué función cumple «Sistema» en esta fase?",
        "answer": "El conocimiento metafísico debe organizarse como una totalidad articulada y no como una acumulación de tesis aisladas."
      },
      {
        "id": "a5-certainty",
        "position": {
          "x": 1400,
          "y": 420
        },
        "title": "Certeza",
        "tag": "REQUISITO",
        "category": "claim",
        "detail": "La investigación a priori no puede descansar en conocimiento meramente probable.",
        "pages": "8–10",
        "keyIdea": "La investigación a priori no puede descansar en conocimiento meramente probable.",
        "question": "¿Qué función cumple «Certeza» en esta fase?",
        "answer": "La investigación a priori no puede descansar en conocimiento meramente probable."
      },
      {
        "id": "a5-opinion",
        "position": {
          "x": 1100,
          "y": 740
        },
        "title": "Opinión",
        "tag": "RECHAZO",
        "category": "problem",
        "detail": "La mera opinión no puede funcionar como fundamento de una ciencia de la razón pura.",
        "pages": "8–10",
        "keyIdea": "La mera opinión no puede funcionar como fundamento de una ciencia de la razón pura.",
        "question": "¿Qué función cumple «Opinión» en esta fase?",
        "answer": "La mera opinión no puede funcionar como fundamento de una ciencia de la razón pura."
      },
      {
        "id": "a5-hypothesis",
        "position": {
          "x": 1700,
          "y": 740
        },
        "title": "Hipótesis",
        "tag": "RECHAZO",
        "category": "problem",
        "detail": "Kant rechaza que una hipótesis ocupe el lugar de una demostración en los fundamentos de la investigación crítica.",
        "pages": "8–10",
        "keyIdea": "En este contexto, la hipótesis es insuficiente como fundamento de certeza.",
        "question": "¿Qué función cumple «Hipótesis» en esta fase?",
        "answer": "En este contexto, la hipótesis es insuficiente como fundamento de certeza."
      },
      {
        "id": "a5-necessity",
        "position": {
          "x": 1400,
          "y": 1030
        },
        "title": "Necesidad",
        "tag": "EXIGENCIA",
        "category": "method",
        "detail": "El conocimiento a priori pretende valer necesariamente, no sólo con alta probabilidad.",
        "pages": "8–10",
        "keyIdea": "El conocimiento a priori pretende valer necesariamente, no sólo con alta probabilidad.",
        "question": "¿Qué función cumple «Necesidad» en esta fase?",
        "answer": "El conocimiento a priori pretende valer necesariamente, no sólo con alta probabilidad."
      },
      {
        "id": "a5-apodictic",
        "position": {
          "x": 1400,
          "y": 1330
        },
        "title": "Certeza apodíctica",
        "tag": "META",
        "category": "conclusion",
        "detail": "La meta formal es una certeza fundada en necesidad racional y capaz de sostener una ciencia rigurosa.",
        "pages": "8–10",
        "keyIdea": "La meta formal es una certeza fundada en necesidad racional y capaz de sostener una ciencia rigurosa.",
        "question": "¿Qué función cumple «Certeza apodíctica» en esta fase?",
        "answer": "La meta formal es una certeza fundada en necesidad racional y capaz de sostener una ciencia rigurosa."
      },
      {
        "id": "a5-clarity",
        "position": {
          "x": 2300,
          "y": 420
        },
        "title": "Claridad",
        "tag": "REQUISITO",
        "category": "claim",
        "detail": "Kant reconoce la claridad como requisito formal, pero distingue diferentes maneras de alcanzarla.",
        "pages": "9–10",
        "keyIdea": "Kant reconoce la claridad como requisito formal, pero distingue diferentes maneras de alcanzarla.",
        "question": "¿Qué función cumple «Claridad» en esta fase?",
        "answer": "Kant reconoce la claridad como requisito formal, pero distingue diferentes maneras de alcanzarla."
      },
      {
        "id": "a5-discursive",
        "position": {
          "x": 2050,
          "y": 760
        },
        "title": "Claridad discursiva",
        "tag": "TIPO",
        "category": "method",
        "detail": "Es la claridad que se obtiene mediante conceptos y articulación lógica del razonamiento.",
        "pages": "9–10",
        "keyIdea": "Es la claridad que se obtiene mediante conceptos y articulación lógica del razonamiento.",
        "question": "¿Qué función cumple «Claridad discursiva» en esta fase?",
        "answer": "Es la claridad que se obtiene mediante conceptos y articulación lógica del razonamiento."
      },
      {
        "id": "a5-intuitive",
        "position": {
          "x": 2550,
          "y": 760
        },
        "title": "Claridad intuitiva",
        "tag": "TIPO",
        "category": "method",
        "detail": "Es la claridad que se obtiene mediante intuiciones, ejemplos e ilustraciones concretas.",
        "pages": "9–10",
        "keyIdea": "Es la claridad que se obtiene mediante intuiciones, ejemplos e ilustraciones concretas.",
        "question": "¿Qué función cumple «Claridad intuitiva» en esta fase?",
        "answer": "Es la claridad que se obtiene mediante intuiciones, ejemplos e ilustraciones concretas."
      },
      {
        "id": "a5-examples",
        "position": {
          "x": 2700,
          "y": 1080
        },
        "title": "Ejemplos e ilustraciones",
        "tag": "RECURSO",
        "category": "evidence",
        "detail": "Los ejemplos facilitan la comprensión local, pero su abundancia puede hacer demasiado extensa y fragmentaria la exposición.",
        "pages": "9–10",
        "keyIdea": "Los ejemplos facilitan la comprensión local, pero su abundancia puede hacer demasiado extensa y fragmentaria la exposición.",
        "question": "¿Qué función cumple «Ejemplos e ilustraciones» en esta fase?",
        "answer": "Los ejemplos facilitan la comprensión local, pero su abundancia puede hacer demasiado extensa y fragmentaria la exposición."
      },
      {
        "id": "a5-architecture",
        "position": {
          "x": 2300,
          "y": 1320
        },
        "title": "Arquitectura del sistema",
        "tag": "PRIORIDAD",
        "category": "claim",
        "detail": "La exposición debe permitir reconocer cómo se articulan todas las partes del sistema.",
        "pages": "9–10",
        "keyIdea": "Claridad de cada fragmento no garantiza claridad del todo.",
        "question": "¿Qué función cumple «Arquitectura del sistema» en esta fase?",
        "answer": "Claridad de cada fragmento no garantiza claridad del todo."
      },
      {
        "id": "a5-global-view",
        "position": {
          "x": 2300,
          "y": 1620
        },
        "title": "Visión del conjunto",
        "tag": "META",
        "category": "conclusion",
        "detail": "Kant privilegia una exposición que conserve visible la unidad y solidez del sistema completo.",
        "pages": "9–10",
        "keyIdea": "Kant privilegia una exposición que conserve visible la unidad y solidez del sistema completo.",
        "question": "¿Qué función cumple «Visión del conjunto» en esta fase?",
        "answer": "Kant privilegia una exposición que conserve visible la unidad y solidez del sistema completo."
      },
      {
        "id": "a5-author",
        "position": {
          "x": 3200,
          "y": 520
        },
        "title": "El autor aporta razones",
        "tag": "PAPEL",
        "category": "method",
        "detail": "Al filósofo le corresponde exponer argumentos y fundamentos, no decretar que sus lectores han quedado convencidos.",
        "pages": "8–9",
        "keyIdea": "Al filósofo le corresponde exponer argumentos y fundamentos, no decretar que sus lectores han quedado convencidos.",
        "question": "¿Qué función cumple «El autor aporta razones» en esta fase?",
        "answer": "Al filósofo le corresponde exponer argumentos y fundamentos, no decretar que sus lectores han quedado convencidos."
      },
      {
        "id": "a5-reader",
        "position": {
          "x": 3200,
          "y": 850
        },
        "title": "El lector juzga",
        "tag": "JUEZ",
        "category": "claim",
        "detail": "La fuerza de las razones queda sometida al juicio de quien lee y examina la obra.",
        "pages": "8–9",
        "keyIdea": "La fuerza de las razones queda sometida al juicio de quien lee y examina la obra.",
        "question": "¿Qué función cumple «El lector juzga» en esta fase?",
        "answer": "La fuerza de las razones queda sometida al juicio de quien lee y examina la obra."
      },
      {
        "id": "a5-objective-deduction",
        "position": {
          "x": 3200,
          "y": 1200
        },
        "title": "Deducción objetiva",
        "tag": "NÚCLEO",
        "category": "method",
        "detail": "La deducción objetiva justifica la validez de los conceptos puros respecto de objetos y es esencial para el proyecto crítico.",
        "pages": "8–9",
        "keyIdea": "La deducción objetiva justifica la validez de los conceptos puros respecto de objetos y es esencial para el proyecto crítico.",
        "question": "¿Qué función cumple «Deducción objetiva» en esta fase?",
        "answer": "La deducción objetiva justifica la validez de los conceptos puros respecto de objetos y es esencial para el proyecto crítico."
      },
      {
        "id": "a5-subjective-deduction",
        "position": {
          "x": 3200,
          "y": 1500
        },
        "title": "Deducción subjetiva",
        "tag": "SECUNDARIA",
        "category": "contrast",
        "detail": "La deducción subjetiva investiga facultades cognoscitivas y tiene importancia, pero no la misma centralidad que la objetiva.",
        "pages": "8–9",
        "keyIdea": "La deducción subjetiva investiga facultades cognoscitivas y tiene importancia, pero no la misma centralidad que la objetiva.",
        "question": "¿Qué función cumple «Deducción subjetiva» en esta fase?",
        "answer": "La deducción subjetiva investiga facultades cognoscitivas y tiene importancia, pero no la misma centralidad que la objetiva."
      },
      {
        "id": "a5-critique",
        "position": {
          "x": 1350,
          "y": 1900
        },
        "title": "Crítica",
        "tag": "PREPARACIÓN",
        "category": "method",
        "detail": "La Crítica no es todavía el sistema completo de metafísica; prepara sus condiciones de posibilidad.",
        "pages": "10–11",
        "keyIdea": "La Crítica no es todavía el sistema completo de metafísica; prepara sus condiciones de posibilidad.",
        "question": "¿Qué función cumple «Crítica» en esta fase?",
        "answer": "La Crítica no es todavía el sistema completo de metafísica; prepara sus condiciones de posibilidad."
      },
      {
        "id": "a5-ground",
        "position": {
          "x": 1350,
          "y": 2200
        },
        "title": "Desbrozar y allanar el terreno",
        "tag": "FUNCIÓN",
        "category": "method",
        "detail": "Kant presenta la Crítica como el trabajo previo de limpiar y preparar el terreno para una construcción posterior.",
        "pages": "10–11",
        "keyIdea": "Kant presenta la Crítica como el trabajo previo de limpiar y preparar el terreno para una construcción posterior.",
        "question": "¿Qué función cumple «Desbrozar y allanar el terreno» en esta fase?",
        "answer": "Kant presenta la Crítica como el trabajo previo de limpiar y preparar el terreno para una construcción posterior."
      },
      {
        "id": "a5-metaphysics",
        "position": {
          "x": 1350,
          "y": 2520
        },
        "title": "Metafísica de la naturaleza",
        "tag": "PROYECTO",
        "category": "conclusion",
        "detail": "Kant anuncia una futura metafísica sistemática que podrá construirse después de haber fijado fuentes, condiciones y límites.",
        "pages": "10–11",
        "keyIdea": "Primero se examina el terreno; después se construye el sistema.",
        "question": "¿Qué función cumple «Metafísica de la naturaleza» en esta fase?",
        "answer": "Primero se examina el terreno; después se construye el sistema."
      }
    ],
    "edges": [
      {
        "id": "a5-e1",
        "source": "a5-rigorous-critique",
        "target": "a5-completeness",
        "label": "exige",
        "kind": "requires"
      },
      {
        "id": "a5-e2",
        "source": "a5-rigorous-critique",
        "target": "a5-certainty",
        "label": "exige",
        "kind": "requires"
      },
      {
        "id": "a5-e3",
        "source": "a5-rigorous-critique",
        "target": "a5-clarity",
        "label": "exige",
        "kind": "requires"
      },
      {
        "id": "a5-e4",
        "source": "a5-completeness",
        "target": "a5-unity",
        "label": "descansa en",
        "kind": "supports"
      },
      {
        "id": "a5-e5",
        "source": "a5-unity",
        "target": "a5-inventory",
        "label": "permite elaborar",
        "kind": "supports"
      },
      {
        "id": "a5-e6",
        "source": "a5-inventory",
        "target": "a5-system",
        "label": "se organiza como",
        "kind": "conclusion"
      },
      {
        "id": "a5-e7",
        "source": "a5-certainty",
        "target": "a5-opinion",
        "label": "excluye",
        "kind": "rejects"
      },
      {
        "id": "a5-e8",
        "source": "a5-certainty",
        "target": "a5-hypothesis",
        "label": "excluye",
        "kind": "rejects"
      },
      {
        "id": "a5-e9",
        "source": "a5-certainty",
        "target": "a5-necessity",
        "label": "requiere",
        "kind": "requires"
      },
      {
        "id": "a5-e10",
        "source": "a5-necessity",
        "target": "a5-apodictic",
        "label": "culmina en",
        "kind": "conclusion"
      },
      {
        "id": "a5-e11",
        "source": "a5-clarity",
        "target": "a5-discursive",
        "label": "puede ser",
        "kind": "distinguishes"
      },
      {
        "id": "a5-e12",
        "source": "a5-clarity",
        "target": "a5-intuitive",
        "label": "puede ser",
        "kind": "distinguishes"
      },
      {
        "id": "a5-e13",
        "source": "a5-intuitive",
        "target": "a5-examples",
        "label": "emplea",
        "kind": "illustrates"
      },
      {
        "id": "a5-e14",
        "source": "a5-examples",
        "target": "a5-architecture",
        "label": "pueden dificultar",
        "kind": "contrasts"
      },
      {
        "id": "a5-e15",
        "source": "a5-discursive",
        "target": "a5-architecture",
        "label": "favorece reconocer",
        "kind": "supports"
      },
      {
        "id": "a5-e16",
        "source": "a5-architecture",
        "target": "a5-global-view",
        "label": "hace visible",
        "kind": "conclusion"
      },
      {
        "id": "a5-e17",
        "source": "a5-author",
        "target": "a5-reader",
        "label": "sus razones son juzgadas por",
        "kind": "supports"
      },
      {
        "id": "a5-e18",
        "source": "a5-rigorous-critique",
        "target": "a5-objective-deduction",
        "label": "incluye",
        "kind": "supports"
      },
      {
        "id": "a5-e19",
        "source": "a5-objective-deduction",
        "target": "a5-subjective-deduction",
        "label": "es esencial frente a",
        "kind": "contrasts"
      },
      {
        "id": "a5-e20",
        "source": "a5-completeness",
        "target": "a5-critique",
        "label": "contribuye a",
        "kind": "supports"
      },
      {
        "id": "a5-e21",
        "source": "a5-certainty",
        "target": "a5-critique",
        "label": "contribuye a",
        "kind": "supports"
      },
      {
        "id": "a5-e22",
        "source": "a5-clarity",
        "target": "a5-critique",
        "label": "contribuye a",
        "kind": "supports"
      },
      {
        "id": "a5-e23",
        "source": "a5-critique",
        "target": "a5-ground",
        "label": "cumple la función de",
        "kind": "prepares"
      },
      {
        "id": "a5-e24",
        "source": "a5-ground",
        "target": "a5-metaphysics",
        "label": "prepara",
        "kind": "prepares"
      }
    ],
    "guideNodeIds": [
      "a5-rigorous-critique",
      "a5-completeness",
      "a5-unity",
      "a5-inventory",
      "a5-system",
      "a5-certainty",
      "a5-opinion",
      "a5-hypothesis",
      "a5-necessity",
      "a5-apodictic",
      "a5-clarity",
      "a5-discursive",
      "a5-intuitive",
      "a5-examples",
      "a5-architecture",
      "a5-global-view",
      "a5-author",
      "a5-reader",
      "a5-objective-deduction",
      "a5-subjective-deduction",
      "a5-critique",
      "a5-ground",
      "a5-metaphysics"
    ]
  },
  {
    "id": "phase-6",
    "roman": "VI",
    "preface": "B",
    "shortTitle": "Ciencia",
    "subtitle": "Prólogo B · 1787",
    "title": "El camino seguro de la ciencia",
    "question": "¿Cómo sabemos que una disciplina ha encontrado el camino seguro de la ciencia y qué enseña el caso de la lógica?",
    "thesis": "Una disciplina muestra inseguridad cuando no logra estabilizar su método; la lógica representa un caso de éxito gracias a la delimitación estricta de su objeto.",
    "pages": "12–13",
    "takeaways": [
      "El criterio científico incluye estabilidad metodológica y progreso.",
      "La lógica alcanza seguridad restringiendo su objeto a la forma del pensamiento.",
      "Matemática y física abren la pregunta por una revolución metodológica."
    ],
    "nodes": [
      {
        "id": "b1-discipline",
        "position": {
          "x": 1350,
          "y": 0
        },
        "title": "¿Ha encontrado un método seguro?",
        "tag": "PREGUNTA",
        "category": "claim",
        "detail": "Kant propone juzgar una disciplina por la estabilidad de su método y su capacidad para avanzar sin reconstruir continuamente sus fundamentos.",
        "pages": "12–13",
        "keyIdea": "El uso de la razón no basta para garantizar que una disciplina sea ciencia.",
        "question": "¿Qué función cumple «¿Ha encontrado un método seguro?» en esta fase?",
        "answer": "El uso de la razón no basta para garantizar que una disciplina sea ciencia."
      },
      {
        "id": "b1-groping",
        "position": {
          "x": 550,
          "y": 390
        },
        "title": "Andar a tientas",
        "tag": "DIAGNÓSTICO",
        "category": "problem",
        "detail": "Una disciplina anda a tientas cuando no posee un procedimiento estable y debe probar repetidamente caminos diferentes.",
        "pages": "12–13",
        "keyIdea": "Una disciplina anda a tientas cuando no posee un procedimiento estable y debe probar repetidamente caminos diferentes.",
        "question": "¿Qué función cumple «Andar a tientas» en esta fase?",
        "answer": "Una disciplina anda a tientas cuando no posee un procedimiento estable y debe probar repetidamente caminos diferentes."
      },
      {
        "id": "b1-stagnation",
        "position": {
          "x": 100,
          "y": 720
        },
        "title": "Estancamiento",
        "tag": "SÍNTOMA",
        "category": "problem",
        "detail": "Mucho trabajo no produce avance acumulativo y seguro.",
        "pages": "12",
        "keyIdea": "Mucho trabajo no produce avance acumulativo y seguro.",
        "question": "¿Qué función cumple «Estancamiento» en esta fase?",
        "answer": "Mucho trabajo no produce avance acumulativo y seguro."
      },
      {
        "id": "b1-retreat",
        "position": {
          "x": 500,
          "y": 720
        },
        "title": "Retroceso constante",
        "tag": "SÍNTOMA",
        "category": "problem",
        "detail": "La disciplina necesita volver repetidamente sobre sus pasos y revisar el camino elegido.",
        "pages": "12",
        "keyIdea": "La disciplina necesita volver repetidamente sobre sus pasos y revisar el camino elegido.",
        "question": "¿Qué función cumple «Retroceso constante» en esta fase?",
        "answer": "La disciplina necesita volver repetidamente sobre sus pasos y revisar el camino elegido."
      },
      {
        "id": "b1-disagreement",
        "position": {
          "x": 900,
          "y": 720
        },
        "title": "Desacuerdo entre investigadores",
        "tag": "SÍNTOMA",
        "category": "problem",
        "detail": "Los participantes no logran ponerse de acuerdo sobre el procedimiento común para alcanzar el objetivo.",
        "pages": "12",
        "keyIdea": "Los participantes no logran ponerse de acuerdo sobre el procedimiento común para alcanzar el objetivo.",
        "question": "¿Qué función cumple «Desacuerdo entre investigadores» en esta fase?",
        "answer": "Los participantes no logran ponerse de acuerdo sobre el procedimiento común para alcanzar el objetivo."
      },
      {
        "id": "b1-method-change",
        "position": {
          "x": 500,
          "y": 1050
        },
        "title": "Cambio continuo de método",
        "tag": "SÍNTOMA",
        "category": "problem",
        "detail": "Cada fracaso obliga a abandonar el procedimiento anterior y buscar otra vía.",
        "pages": "12",
        "keyIdea": "Cada fracaso obliga a abandonar el procedimiento anterior y buscar otra vía.",
        "question": "¿Qué función cumple «Cambio continuo de método» en esta fase?",
        "answer": "Cada fracaso obliga a abandonar el procedimiento anterior y buscar otra vía."
      },
      {
        "id": "b1-safe-path",
        "position": {
          "x": 2150,
          "y": 390
        },
        "title": "Camino seguro de la ciencia",
        "tag": "ÉXITO",
        "category": "conclusion",
        "detail": "Una disciplina alcanza seguridad cuando dispone de un método estable que permite progreso sin rehacer continuamente sus fundamentos.",
        "pages": "12–13",
        "keyIdea": "El método seguro hace posible un progreso acumulativo.",
        "question": "¿Qué función cumple «Camino seguro de la ciencia» en esta fase?",
        "answer": "El método seguro hace posible un progreso acumulativo."
      },
      {
        "id": "b1-logic",
        "position": {
          "x": 2150,
          "y": 720
        },
        "title": "Lógica",
        "tag": "EJEMPLO",
        "category": "evidence",
        "detail": "Kant presenta la lógica como disciplina que desde la Antigüedad ha seguido un camino fundamentalmente estable.",
        "pages": "12–13",
        "keyIdea": "Kant presenta la lógica como disciplina que desde la Antigüedad ha seguido un camino fundamentalmente estable.",
        "question": "¿Qué función cumple «Lógica» en esta fase?",
        "answer": "Kant presenta la lógica como disciplina que desde la Antigüedad ha seguido un camino fundamentalmente estable."
      },
      {
        "id": "b1-aristotle",
        "position": {
          "x": 2580,
          "y": 720
        },
        "title": "Desde Aristóteles",
        "tag": "REFERENCIA",
        "category": "tradition",
        "detail": "Aristóteles simboliza para Kant el momento en que la lógica alcanzó una forma metodológicamente estable.",
        "pages": "12–13",
        "keyIdea": "Aristóteles simboliza para Kant el momento en que la lógica alcanzó una forma metodológicamente estable.",
        "question": "¿Qué función cumple «Desde Aristóteles» en esta fase?",
        "answer": "Aristóteles simboliza para Kant el momento en que la lógica alcanzó una forma metodológicamente estable."
      },
      {
        "id": "b1-delimitation",
        "position": {
          "x": 2150,
          "y": 1040
        },
        "title": "Delimitación del objeto",
        "tag": "CLAVE",
        "category": "method",
        "detail": "La lógica alcanza seguridad porque restringe cuidadosamente aquello que estudia.",
        "pages": "12–13",
        "keyIdea": "La seguridad de una ciencia depende también de saber qué queda fuera de su objeto.",
        "question": "¿Qué función cumple «Delimitación del objeto» en esta fase?",
        "answer": "La seguridad de una ciencia depende también de saber qué queda fuera de su objeto."
      },
      {
        "id": "b1-form",
        "position": {
          "x": 2150,
          "y": 1350
        },
        "title": "Forma del pensamiento",
        "tag": "OBJETO",
        "category": "claim",
        "detail": "La lógica abstrae de los objetos particulares y estudia la forma y reglas del pensamiento.",
        "pages": "12–13",
        "keyIdea": "La lógica abstrae de los objetos particulares y estudia la forma y reglas del pensamiento.",
        "question": "¿Qué función cumple «Forma del pensamiento» en esta fase?",
        "answer": "La lógica abstrae de los objetos particulares y estudia la forma y reglas del pensamiento."
      },
      {
        "id": "b1-formal-rules",
        "position": {
          "x": 2150,
          "y": 1650
        },
        "title": "Reglas formales",
        "tag": "RESULTADO",
        "category": "conclusion",
        "detail": "Su contenido consiste en reglas necesarias del pensamiento en cuanto pensamiento.",
        "pages": "12–13",
        "keyIdea": "Su contenido consiste en reglas necesarias del pensamiento en cuanto pensamiento.",
        "question": "¿Qué función cumple «Reglas formales» en esta fase?",
        "answer": "Su contenido consiste en reglas necesarias del pensamiento en cuanto pensamiento."
      },
      {
        "id": "b1-no-objects",
        "position": {
          "x": 2620,
          "y": 1350
        },
        "title": "No conoce objetos por sí sola",
        "tag": "LÍMITE",
        "category": "contrast",
        "detail": "Las reglas lógicas son condiciones formales, pero no bastan por sí solas para producir conocimiento de objetos.",
        "pages": "12–13",
        "keyIdea": "Método seguro no significa conocimiento universal de todas las cosas.",
        "question": "¿Qué función cumple «No conoce objetos por sí sola» en esta fase?",
        "answer": "Método seguro no significa conocimiento universal de todas las cosas."
      },
      {
        "id": "b1-vestibule",
        "position": {
          "x": 2150,
          "y": 1960
        },
        "title": "Vestíbulo de las ciencias",
        "tag": "IMAGEN",
        "category": "evidence",
        "detail": "La lógica prepara formalmente el conocimiento y funciona como vestíbulo, no como ciencia objetiva de las cosas.",
        "pages": "12–13",
        "keyIdea": "La lógica prepara formalmente el conocimiento y funciona como vestíbulo, no como ciencia objetiva de las cosas.",
        "question": "¿Qué función cumple «Vestíbulo de las ciencias» en esta fase?",
        "answer": "La lógica prepara formalmente el conocimiento y funciona como vestíbulo, no como ciencia objetiva de las cosas."
      },
      {
        "id": "b1-reason",
        "position": {
          "x": 1050,
          "y": 1470
        },
        "title": "Razón",
        "tag": "MARCO",
        "category": "claim",
        "detail": "Kant distingue usos de la razón para situar las ciencias que determinan objetos.",
        "pages": "13",
        "keyIdea": "Kant distingue usos de la razón para situar las ciencias que determinan objetos.",
        "question": "¿Qué función cumple «Razón» en esta fase?",
        "answer": "Kant distingue usos de la razón para situar las ciencias que determinan objetos."
      },
      {
        "id": "b1-theoretical",
        "position": {
          "x": 680,
          "y": 1780
        },
        "title": "Conocimiento teórico",
        "tag": "TIPO",
        "category": "method",
        "detail": "El conocimiento teórico busca determinar cómo es un objeto.",
        "pages": "13",
        "keyIdea": "El conocimiento teórico busca determinar cómo es un objeto.",
        "question": "¿Qué función cumple «Conocimiento teórico» en esta fase?",
        "answer": "El conocimiento teórico busca determinar cómo es un objeto."
      },
      {
        "id": "b1-practical",
        "position": {
          "x": 1160,
          "y": 1780
        },
        "title": "Conocimiento práctico",
        "tag": "TIPO",
        "category": "method",
        "detail": "El conocimiento práctico se dirige a hacer real un objeto mediante la acción.",
        "pages": "13",
        "keyIdea": "El conocimiento práctico se dirige a hacer real un objeto mediante la acción.",
        "question": "¿Qué función cumple «Conocimiento práctico» en esta fase?",
        "answer": "El conocimiento práctico se dirige a hacer real un objeto mediante la acción."
      },
      {
        "id": "b1-pure-part",
        "position": {
          "x": 680,
          "y": 2110
        },
        "title": "Distinguir la parte pura",
        "tag": "EXIGENCIA",
        "category": "method",
        "detail": "En una ciencia racional debe separarse aquello que la razón aporta por sí misma de lo procedente de otras fuentes.",
        "pages": "13",
        "keyIdea": "En una ciencia racional debe separarse aquello que la razón aporta por sí misma de lo procedente de otras fuentes.",
        "question": "¿Qué función cumple «Distinguir la parte pura» en esta fase?",
        "answer": "En una ciencia racional debe separarse aquello que la razón aporta por sí misma de lo procedente de otras fuentes."
      },
      {
        "id": "b1-other-sources",
        "position": {
          "x": 1160,
          "y": 2110
        },
        "title": "Otras fuentes del conocimiento",
        "tag": "CONTRASTE",
        "category": "contrast",
        "detail": "Una ciencia puede contener elementos que no proceden únicamente de la razón pura.",
        "pages": "13",
        "keyIdea": "Una ciencia puede contener elementos que no proceden únicamente de la razón pura.",
        "question": "¿Qué función cumple «Otras fuentes del conocimiento» en esta fase?",
        "answer": "Una ciencia puede contener elementos que no proceden únicamente de la razón pura."
      },
      {
        "id": "b1-balance",
        "position": {
          "x": 920,
          "y": 2420
        },
        "title": "Ingresos y gastos",
        "tag": "METÁFORA",
        "category": "evidence",
        "detail": "Kant compara la separación de fuentes del conocimiento con una contabilidad que distingue correctamente ingresos y gastos.",
        "pages": "13",
        "keyIdea": "Kant compara la separación de fuentes del conocimiento con una contabilidad que distingue correctamente ingresos y gastos.",
        "question": "¿Qué función cumple «Ingresos y gastos» en esta fase?",
        "answer": "Kant compara la separación de fuentes del conocimiento con una contabilidad que distingue correctamente ingresos y gastos."
      },
      {
        "id": "b1-theoretical-sciences",
        "position": {
          "x": 1750,
          "y": 2410
        },
        "title": "Ciencias teóricas de la razón",
        "tag": "TRANSICIÓN",
        "category": "claim",
        "detail": "Las ciencias teóricas no se limitan a la forma del pensamiento: pretenden determinar objetos.",
        "pages": "13",
        "keyIdea": "Las ciencias teóricas no se limitan a la forma del pensamiento: pretenden determinar objetos.",
        "question": "¿Qué función cumple «Ciencias teóricas de la razón» en esta fase?",
        "answer": "Las ciencias teóricas no se limitan a la forma del pensamiento: pretenden determinar objetos."
      },
      {
        "id": "b1-math",
        "position": {
          "x": 1500,
          "y": 2730
        },
        "title": "Matemática",
        "tag": "SIGUIENTE",
        "category": "evidence",
        "detail": "La matemática determinará sus objetos mediante una forma de conocimiento racional puro.",
        "pages": "13",
        "keyIdea": "La matemática determinará sus objetos mediante una forma de conocimiento racional puro.",
        "question": "¿Qué función cumple «Matemática» en esta fase?",
        "answer": "La matemática determinará sus objetos mediante una forma de conocimiento racional puro."
      },
      {
        "id": "b1-physics",
        "position": {
          "x": 2000,
          "y": 2730
        },
        "title": "Física",
        "tag": "SIGUIENTE",
        "category": "evidence",
        "detail": "La física combina elementos racionales con experiencia y también tuvo que encontrar un método seguro.",
        "pages": "13",
        "keyIdea": "La física combina elementos racionales con experiencia y también tuvo que encontrar un método seguro.",
        "question": "¿Qué función cumple «Física» en esta fase?",
        "answer": "La física combina elementos racionales con experiencia y también tuvo que encontrar un método seguro."
      },
      {
        "id": "b1-next-question",
        "position": {
          "x": 1750,
          "y": 3050
        },
        "title": "¿Qué revolución las hizo científicas?",
        "tag": "PUENTE",
        "category": "conclusion",
        "detail": "La siguiente cuestión es identificar el cambio metodológico que permitió a matemática y física abandonar el tanteo.",
        "pages": "13",
        "keyIdea": "Una ciencia puede necesitar una revolución en su modo de pensar.",
        "question": "¿Qué función cumple «¿Qué revolución las hizo científicas?» en esta fase?",
        "answer": "Una ciencia puede necesitar una revolución en su modo de pensar."
      }
    ],
    "edges": [
      {
        "id": "b1-e1",
        "source": "b1-discipline",
        "target": "b1-groping",
        "label": "si no logra estabilidad",
        "kind": "causes"
      },
      {
        "id": "b1-e2",
        "source": "b1-discipline",
        "target": "b1-safe-path",
        "label": "si estabiliza su método",
        "kind": "conclusion"
      },
      {
        "id": "b1-e3",
        "source": "b1-stagnation",
        "target": "b1-groping",
        "label": "indica",
        "kind": "supports"
      },
      {
        "id": "b1-e4",
        "source": "b1-retreat",
        "target": "b1-groping",
        "label": "indica",
        "kind": "supports"
      },
      {
        "id": "b1-e5",
        "source": "b1-disagreement",
        "target": "b1-groping",
        "label": "indica",
        "kind": "supports"
      },
      {
        "id": "b1-e6",
        "source": "b1-groping",
        "target": "b1-method-change",
        "label": "obliga a",
        "kind": "causes"
      },
      {
        "id": "b1-e7",
        "source": "b1-safe-path",
        "target": "b1-logic",
        "label": "primer ejemplo",
        "kind": "illustrates"
      },
      {
        "id": "b1-e8",
        "source": "b1-aristotle",
        "target": "b1-logic",
        "label": "marca para Kant la estabilidad de",
        "kind": "illustrates"
      },
      {
        "id": "b1-e9",
        "source": "b1-logic",
        "target": "b1-delimitation",
        "label": "logra seguridad mediante",
        "kind": "supports"
      },
      {
        "id": "b1-e10",
        "source": "b1-delimitation",
        "target": "b1-form",
        "label": "restringe la investigación a",
        "kind": "limits"
      },
      {
        "id": "b1-e11",
        "source": "b1-form",
        "target": "b1-formal-rules",
        "label": "se expresa en",
        "kind": "conclusion"
      },
      {
        "id": "b1-e12",
        "source": "b1-formal-rules",
        "target": "b1-no-objects",
        "label": "no bastan para",
        "kind": "limits"
      },
      {
        "id": "b1-e13",
        "source": "b1-formal-rules",
        "target": "b1-vestibule",
        "label": "hacen de la lógica un",
        "kind": "illustrates"
      },
      {
        "id": "b1-e14",
        "source": "b1-reason",
        "target": "b1-theoretical",
        "label": "puede determinar mediante",
        "kind": "distinguishes"
      },
      {
        "id": "b1-e15",
        "source": "b1-reason",
        "target": "b1-practical",
        "label": "puede realizar mediante",
        "kind": "distinguishes"
      },
      {
        "id": "b1-e16",
        "source": "b1-theoretical",
        "target": "b1-pure-part",
        "label": "debe distinguir",
        "kind": "requires"
      },
      {
        "id": "b1-e17",
        "source": "b1-pure-part",
        "target": "b1-other-sources",
        "label": "se separa de",
        "kind": "distinguishes"
      },
      {
        "id": "b1-e18",
        "source": "b1-pure-part",
        "target": "b1-balance",
        "label": "exige una contabilidad de",
        "kind": "illustrates"
      },
      {
        "id": "b1-e19",
        "source": "b1-other-sources",
        "target": "b1-balance",
        "label": "también entra en",
        "kind": "illustrates"
      },
      {
        "id": "b1-e20",
        "source": "b1-theoretical",
        "target": "b1-theoretical-sciences",
        "label": "incluye",
        "kind": "supports"
      },
      {
        "id": "b1-e21",
        "source": "b1-theoretical-sciences",
        "target": "b1-math",
        "label": "comprende",
        "kind": "supports"
      },
      {
        "id": "b1-e22",
        "source": "b1-theoretical-sciences",
        "target": "b1-physics",
        "label": "comprende",
        "kind": "supports"
      },
      {
        "id": "b1-e23",
        "source": "b1-math",
        "target": "b1-next-question",
        "label": "plantea",
        "kind": "prepares"
      },
      {
        "id": "b1-e24",
        "source": "b1-physics",
        "target": "b1-next-question",
        "label": "plantea",
        "kind": "prepares"
      }
    ],
    "guideNodeIds": [
      "b1-discipline",
      "b1-groping",
      "b1-stagnation",
      "b1-retreat",
      "b1-disagreement",
      "b1-method-change",
      "b1-safe-path",
      "b1-logic",
      "b1-aristotle",
      "b1-delimitation",
      "b1-form",
      "b1-formal-rules",
      "b1-no-objects",
      "b1-vestibule",
      "b1-reason",
      "b1-theoretical",
      "b1-practical",
      "b1-pure-part",
      "b1-other-sources",
      "b1-balance",
      "b1-theoretical-sciences",
      "b1-math",
      "b1-physics",
      "b1-next-question"
    ]
  },
  {
    "id": "phase-7",
    "roman": "VII",
    "preface": "B",
    "shortTitle": "Revoluciones",
    "subtitle": "Prólogo B · 1787",
    "title": "Las revoluciones de la matemática y la física",
    "question": "¿Qué cambio metodológico permitió que matemática y física dejaran de andar a tientas?",
    "thesis": "Ambas ciencias progresan cuando la razón deja de comportarse como receptora pasiva y comienza a construir o interrogar su objeto conforme a principios.",
    "pages": "13–15",
    "takeaways": [
      "La matemática construye según conceptos.",
      "La física interroga la naturaleza mediante principios y experimentos.",
      "El principio común es una razón activa que procede según su propio plan."
    ],
    "nodes": [
      {
        "id": "b2-revolution",
        "position": {
          "x": 1500,
          "y": 0
        },
        "title": "Revolución en el modo de pensar",
        "tag": "CAMBIO",
        "category": "claim",
        "detail": "Matemática y física alcanzan seguridad cuando transforman radicalmente la relación entre razón y objeto.",
        "pages": "13–15",
        "keyIdea": "El avance científico puede exigir cambiar el modo de proceder, no sólo acumular datos.",
        "question": "¿Qué función cumple «Revolución en el modo de pensar» en esta fase?",
        "answer": "El avance científico puede exigir cambiar el modo de proceder, no sólo acumular datos."
      },
      {
        "id": "b2-math",
        "position": {
          "x": 650,
          "y": 360
        },
        "title": "Matemática",
        "tag": "CIENCIA",
        "category": "evidence",
        "detail": "La matemática sirve como primer ejemplo de una ciencia que encontró su método mediante una revolución.",
        "pages": "13–14",
        "keyIdea": "La matemática sirve como primer ejemplo de una ciencia que encontró su método mediante una revolución.",
        "question": "¿Qué función cumple «Matemática» en esta fase?",
        "answer": "La matemática sirve como primer ejemplo de una ciencia que encontró su método mediante una revolución."
      },
      {
        "id": "b2-math-old",
        "position": {
          "x": 650,
          "y": 670
        },
        "title": "Procedimiento inseguro",
        "tag": "ANTES",
        "category": "problem",
        "detail": "Antes de su forma demostrativa, la matemática también tuvo que salir de un modo de tanteo.",
        "pages": "13–14",
        "keyIdea": "Antes de su forma demostrativa, la matemática también tuvo que salir de un modo de tanteo.",
        "question": "¿Qué función cumple «Procedimiento inseguro» en esta fase?",
        "answer": "Antes de su forma demostrativa, la matemática también tuvo que salir de un modo de tanteo."
      },
      {
        "id": "b2-thales",
        "position": {
          "x": 350,
          "y": 990
        },
        "title": "Tales",
        "tag": "EJEMPLO",
        "category": "tradition",
        "detail": "Kant usa a Tales como figura simbólica del descubrimiento del nuevo procedimiento geométrico.",
        "pages": "13–14",
        "keyIdea": "Kant usa a Tales como figura simbólica del descubrimiento del nuevo procedimiento geométrico.",
        "question": "¿Qué función cumple «Tales» en esta fase?",
        "answer": "Kant usa a Tales como figura simbólica del descubrimiento del nuevo procedimiento geométrico."
      },
      {
        "id": "b2-triangle",
        "position": {
          "x": 880,
          "y": 990
        },
        "title": "Triángulo geométrico",
        "tag": "EJEMPLO",
        "category": "evidence",
        "detail": "El triángulo ilustra cómo el geómetra deja de limitarse a observar una figura y comienza a construir según un concepto.",
        "pages": "13–14",
        "keyIdea": "El triángulo ilustra cómo el geómetra deja de limitarse a observar una figura y comienza a construir según un concepto.",
        "question": "¿Qué función cumple «Triángulo geométrico» en esta fase?",
        "answer": "El triángulo ilustra cómo el geómetra deja de limitarse a observar una figura y comienza a construir según un concepto."
      },
      {
        "id": "b2-construction",
        "position": {
          "x": 650,
          "y": 1320
        },
        "title": "Construcción según concepto",
        "tag": "GIRO",
        "category": "method",
        "detail": "El matemático produce una construcción conforme a su concepto y extrae de ella propiedades necesarias.",
        "pages": "13–14",
        "keyIdea": "La demostración matemática depende de una actividad racional de construcción.",
        "question": "¿Qué función cumple «Construcción según concepto» en esta fase?",
        "answer": "La demostración matemática depende de una actividad racional de construcción."
      },
      {
        "id": "b2-not-read-off",
        "position": {
          "x": 200,
          "y": 1310
        },
        "title": "No limitarse a leer la figura",
        "tag": "CONTRASTE",
        "category": "problem",
        "detail": "La simple inspección sensible de una figura no proporciona por sí sola una demostración necesaria.",
        "pages": "13–14",
        "keyIdea": "Ver una propiedad no equivale todavía a demostrarla.",
        "question": "¿Qué función cumple «No limitarse a leer la figura» en esta fase?",
        "answer": "Ver una propiedad no equivale todavía a demostrarla."
      },
      {
        "id": "b2-math-produces",
        "position": {
          "x": 650,
          "y": 1650
        },
        "title": "La razón produce aquello que conoce",
        "tag": "PRINCIPIO",
        "category": "claim",
        "detail": "En matemática, la razón reconoce propiedades necesarias porque trabaja con una construcción realizada según su propio concepto.",
        "pages": "13–14",
        "keyIdea": "En matemática, la razón reconoce propiedades necesarias porque trabaja con una construcción realizada según su propio concepto.",
        "question": "¿Qué función cumple «La razón produce aquello que conoce» en esta fase?",
        "answer": "En matemática, la razón reconoce propiedades necesarias porque trabaja con una construcción realizada según su propio concepto."
      },
      {
        "id": "b2-apriori-math",
        "position": {
          "x": 650,
          "y": 1970
        },
        "title": "Conocimiento matemático a priori",
        "tag": "RESULTADO",
        "category": "conclusion",
        "detail": "La construcción permite determinar propiedades necesarias sin depender de una generalización empírica.",
        "pages": "13–14",
        "keyIdea": "La construcción permite determinar propiedades necesarias sin depender de una generalización empírica.",
        "question": "¿Qué función cumple «Conocimiento matemático a priori» en esta fase?",
        "answer": "La construcción permite determinar propiedades necesarias sin depender de una generalización empírica."
      },
      {
        "id": "b2-physics",
        "position": {
          "x": 2350,
          "y": 360
        },
        "title": "Física",
        "tag": "CIENCIA",
        "category": "evidence",
        "detail": "La física alcanza un camino seguro cuando deja de confiar en la recepción pasiva de fenómenos.",
        "pages": "14–15",
        "keyIdea": "La física alcanza un camino seguro cuando deja de confiar en la recepción pasiva de fenómenos.",
        "question": "¿Qué función cumple «Física» en esta fase?",
        "answer": "La física alcanza un camino seguro cuando deja de confiar en la recepción pasiva de fenómenos."
      },
      {
        "id": "b2-physics-old",
        "position": {
          "x": 2350,
          "y": 670
        },
        "title": "Observaciones fortuitas",
        "tag": "ANTES",
        "category": "problem",
        "detail": "Acumular observaciones sin un plan racional previo no basta para descubrir leyes científicas.",
        "pages": "14–15",
        "keyIdea": "Acumular observaciones sin un plan racional previo no basta para descubrir leyes científicas.",
        "question": "¿Qué función cumple «Observaciones fortuitas» en esta fase?",
        "answer": "Acumular observaciones sin un plan racional previo no basta para descubrir leyes científicas."
      },
      {
        "id": "b2-bacon",
        "position": {
          "x": 1880,
          "y": 980
        },
        "title": "Bacon",
        "tag": "PRECURSOR",
        "category": "tradition",
        "detail": "Bacon aparece como figura asociada al nuevo espíritu experimental que prepara el cambio de método.",
        "pages": "14–15",
        "keyIdea": "Bacon aparece como figura asociada al nuevo espíritu experimental que prepara el cambio de método.",
        "question": "¿Qué función cumple «Bacon» en esta fase?",
        "answer": "Bacon aparece como figura asociada al nuevo espíritu experimental que prepara el cambio de método."
      },
      {
        "id": "b2-galileo",
        "position": {
          "x": 2200,
          "y": 980
        },
        "title": "Galileo",
        "tag": "EJEMPLO",
        "category": "tradition",
        "detail": "Galileo representa el experimento diseñado bajo condiciones previamente determinadas por la investigación.",
        "pages": "14–15",
        "keyIdea": "Galileo representa el experimento diseñado bajo condiciones previamente determinadas por la investigación.",
        "question": "¿Qué función cumple «Galileo» en esta fase?",
        "answer": "Galileo representa el experimento diseñado bajo condiciones previamente determinadas por la investigación."
      },
      {
        "id": "b2-torricelli",
        "position": {
          "x": 2520,
          "y": 980
        },
        "title": "Torricelli",
        "tag": "EJEMPLO",
        "category": "tradition",
        "detail": "Torricelli ejemplifica una experiencia guiada por una cuestión teórica y no una observación meramente fortuita.",
        "pages": "14–15",
        "keyIdea": "Torricelli ejemplifica una experiencia guiada por una cuestión teórica y no una observación meramente fortuita.",
        "question": "¿Qué función cumple «Torricelli» en esta fase?",
        "answer": "Torricelli ejemplifica una experiencia guiada por una cuestión teórica y no una observación meramente fortuita."
      },
      {
        "id": "b2-stahl",
        "position": {
          "x": 2840,
          "y": 980
        },
        "title": "Stahl",
        "tag": "EJEMPLO",
        "category": "tradition",
        "detail": "Kant lo incluye entre quienes transformaron el estudio de la naturaleza mediante experimentos planificados.",
        "pages": "14–15",
        "keyIdea": "Kant lo incluye entre quienes transformaron el estudio de la naturaleza mediante experimentos planificados.",
        "question": "¿Qué función cumple «Stahl» en esta fase?",
        "answer": "Kant lo incluye entre quienes transformaron el estudio de la naturaleza mediante experimentos planificados."
      },
      {
        "id": "b2-principles",
        "position": {
          "x": 2050,
          "y": 1310
        },
        "title": "Principios previos",
        "tag": "DISEÑO",
        "category": "method",
        "detail": "La razón se aproxima a la naturaleza llevando principios que organizan de antemano la investigación.",
        "pages": "14–15",
        "keyIdea": "La razón se aproxima a la naturaleza llevando principios que organizan de antemano la investigación.",
        "question": "¿Qué función cumple «Principios previos» en esta fase?",
        "answer": "La razón se aproxima a la naturaleza llevando principios que organizan de antemano la investigación."
      },
      {
        "id": "b2-experiment",
        "position": {
          "x": 2570,
          "y": 1310
        },
        "title": "Experimento dirigido",
        "tag": "MÉTODO",
        "category": "method",
        "detail": "El experimento crea condiciones determinadas para obtener una respuesta precisa de la naturaleza.",
        "pages": "14–15",
        "keyIdea": "El experimento crea condiciones determinadas para obtener una respuesta precisa de la naturaleza.",
        "question": "¿Qué función cumple «Experimento dirigido» en esta fase?",
        "answer": "El experimento crea condiciones determinadas para obtener una respuesta precisa de la naturaleza."
      },
      {
        "id": "b2-question-nature",
        "position": {
          "x": 2350,
          "y": 1650
        },
        "title": "Interrogar a la naturaleza",
        "tag": "ACCIÓN",
        "category": "method",
        "detail": "El científico formula preguntas y organiza condiciones bajo las cuales la naturaleza debe responder.",
        "pages": "14–15",
        "keyIdea": "El experimento es una pregunta racional materialmente organizada.",
        "question": "¿Qué función cumple «Interrogar a la naturaleza» en esta fase?",
        "answer": "El experimento es una pregunta racional materialmente organizada."
      },
      {
        "id": "b2-judge",
        "position": {
          "x": 2000,
          "y": 1960
        },
        "title": "Razón como juez",
        "tag": "METÁFORA",
        "category": "evidence",
        "detail": "La razón debe presentarse ante la naturaleza como juez que formula preguntas según principios.",
        "pages": "14–15",
        "keyIdea": "La razón debe presentarse ante la naturaleza como juez que formula preguntas según principios.",
        "question": "¿Qué función cumple «Razón como juez» en esta fase?",
        "answer": "La razón debe presentarse ante la naturaleza como juez que formula preguntas según principios."
      },
      {
        "id": "b2-witness",
        "position": {
          "x": 2700,
          "y": 1960
        },
        "title": "Naturaleza como testigo",
        "tag": "METÁFORA",
        "category": "evidence",
        "detail": "La naturaleza suministra respuestas dentro de condiciones experimentales diseñadas racionalmente.",
        "pages": "14–15",
        "keyIdea": "La naturaleza suministra respuestas dentro de condiciones experimentales diseñadas racionalmente.",
        "question": "¿Qué función cumple «Naturaleza como testigo» en esta fase?",
        "answer": "La naturaleza suministra respuestas dentro de condiciones experimentales diseñadas racionalmente."
      },
      {
        "id": "b2-disciple",
        "position": {
          "x": 3180,
          "y": 1650
        },
        "title": "Razón como discípulo pasivo",
        "tag": "CONTRASTE",
        "category": "problem",
        "detail": "El método científico fracasa si la razón espera recibir pasivamente todo lo que la naturaleza quiera mostrarle.",
        "pages": "14–15",
        "keyIdea": "El método científico fracasa si la razón espera recibir pasivamente todo lo que la naturaleza quiera mostrarle.",
        "question": "¿Qué función cumple «Razón como discípulo pasivo» en esta fase?",
        "answer": "El método científico fracasa si la razón espera recibir pasivamente todo lo que la naturaleza quiera mostrarle."
      },
      {
        "id": "b2-active-reason",
        "position": {
          "x": 1500,
          "y": 2300
        },
        "title": "Razón activa",
        "tag": "SÍNTESIS",
        "category": "claim",
        "detail": "Matemática y física coinciden en que la razón interviene activamente según principios propios.",
        "pages": "13–15",
        "keyIdea": "Construir e interrogar son dos formas de una misma actividad racional.",
        "question": "¿Qué función cumple «Razón activa» en esta fase?",
        "answer": "Construir e interrogar son dos formas de una misma actividad racional."
      },
      {
        "id": "b2-blueprint",
        "position": {
          "x": 1500,
          "y": 2610
        },
        "title": "Produce según su propio bosquejo",
        "tag": "TESIS",
        "category": "conclusion",
        "detail": "La razón obtiene conocimiento científico cuando procede según un plan o bosquejo que ella misma aporta.",
        "pages": "14–15",
        "keyIdea": "La ciencia no es recepción pasiva, sino actividad racional regulada.",
        "question": "¿Qué función cumple «Produce según su propio bosquejo» en esta fase?",
        "answer": "La ciencia no es recepción pasiva, sino actividad racional regulada."
      },
      {
        "id": "b2-safe-science",
        "position": {
          "x": 1500,
          "y": 2930
        },
        "title": "Camino seguro de la ciencia",
        "tag": "RESULTADO",
        "category": "conclusion",
        "detail": "El nuevo modo de proceder convierte a matemática y física en modelos de conocimiento estable.",
        "pages": "14–15",
        "keyIdea": "El nuevo modo de proceder convierte a matemática y física en modelos de conocimiento estable.",
        "question": "¿Qué función cumple «Camino seguro de la ciencia» en esta fase?",
        "answer": "El nuevo modo de proceder convierte a matemática y física en modelos de conocimiento estable."
      },
      {
        "id": "b2-metaphysics-question",
        "position": {
          "x": 1500,
          "y": 3270
        },
        "title": "¿Puede la metafísica hacer lo mismo?",
        "tag": "PUENTE",
        "category": "claim",
        "detail": "Kant pregunta si una revolución metodológica análoga puede sacar a la metafísica de su propio tanteo.",
        "pages": "15",
        "keyIdea": "La lección de las ciencias sirve como modelo metodológico, no como identidad de objetos.",
        "question": "¿Qué función cumple «¿Puede la metafísica hacer lo mismo?» en esta fase?",
        "answer": "La lección de las ciencias sirve como modelo metodológico, no como identidad de objetos."
      }
    ],
    "edges": [
      {
        "id": "b2-e1",
        "source": "b2-revolution",
        "target": "b2-math",
        "label": "ocurre en",
        "kind": "illustrates"
      },
      {
        "id": "b2-e2",
        "source": "b2-math",
        "target": "b2-math-old",
        "label": "abandona",
        "kind": "rejects"
      },
      {
        "id": "b2-e3",
        "source": "b2-thales",
        "target": "b2-construction",
        "label": "simboliza",
        "kind": "illustrates"
      },
      {
        "id": "b2-e4",
        "source": "b2-triangle",
        "target": "b2-construction",
        "label": "es trabajado mediante",
        "kind": "illustrates"
      },
      {
        "id": "b2-e5",
        "source": "b2-not-read-off",
        "target": "b2-construction",
        "label": "contrasta con",
        "kind": "contrasts"
      },
      {
        "id": "b2-e6",
        "source": "b2-construction",
        "target": "b2-math-produces",
        "label": "permite que",
        "kind": "supports"
      },
      {
        "id": "b2-e7",
        "source": "b2-math-produces",
        "target": "b2-apriori-math",
        "label": "hace posible",
        "kind": "conclusion"
      },
      {
        "id": "b2-e8",
        "source": "b2-revolution",
        "target": "b2-physics",
        "label": "ocurre también en",
        "kind": "illustrates"
      },
      {
        "id": "b2-e9",
        "source": "b2-physics",
        "target": "b2-physics-old",
        "label": "abandona",
        "kind": "rejects"
      },
      {
        "id": "b2-e10",
        "source": "b2-bacon",
        "target": "b2-principles",
        "label": "prepara históricamente",
        "kind": "illustrates"
      },
      {
        "id": "b2-e11",
        "source": "b2-galileo",
        "target": "b2-experiment",
        "label": "ejemplifica",
        "kind": "illustrates"
      },
      {
        "id": "b2-e12",
        "source": "b2-torricelli",
        "target": "b2-experiment",
        "label": "ejemplifica",
        "kind": "illustrates"
      },
      {
        "id": "b2-e13",
        "source": "b2-stahl",
        "target": "b2-experiment",
        "label": "ejemplifica",
        "kind": "illustrates"
      },
      {
        "id": "b2-e14",
        "source": "b2-principles",
        "target": "b2-experiment",
        "label": "dirigen",
        "kind": "supports"
      },
      {
        "id": "b2-e15",
        "source": "b2-experiment",
        "target": "b2-question-nature",
        "label": "permite",
        "kind": "method"
      },
      {
        "id": "b2-e16",
        "source": "b2-disciple",
        "target": "b2-judge",
        "label": "debe sustituirse por",
        "kind": "contrasts"
      },
      {
        "id": "b2-e17",
        "source": "b2-judge",
        "target": "b2-witness",
        "label": "interroga a",
        "kind": "method"
      },
      {
        "id": "b2-e18",
        "source": "b2-apriori-math",
        "target": "b2-active-reason",
        "label": "ejemplifica",
        "kind": "supports"
      },
      {
        "id": "b2-e19",
        "source": "b2-question-nature",
        "target": "b2-active-reason",
        "label": "ejemplifica",
        "kind": "supports"
      },
      {
        "id": "b2-e20",
        "source": "b2-active-reason",
        "target": "b2-blueprint",
        "label": "procede mediante",
        "kind": "supports"
      },
      {
        "id": "b2-e21",
        "source": "b2-blueprint",
        "target": "b2-safe-science",
        "label": "abre el",
        "kind": "conclusion"
      },
      {
        "id": "b2-e22",
        "source": "b2-safe-science",
        "target": "b2-metaphysics-question",
        "label": "plantea para la metafísica",
        "kind": "prepares"
      }
    ],
    "guideNodeIds": [
      "b2-revolution",
      "b2-math",
      "b2-math-old",
      "b2-thales",
      "b2-triangle",
      "b2-construction",
      "b2-not-read-off",
      "b2-math-produces",
      "b2-apriori-math",
      "b2-physics",
      "b2-physics-old",
      "b2-bacon",
      "b2-galileo",
      "b2-torricelli",
      "b2-stahl",
      "b2-principles",
      "b2-experiment",
      "b2-question-nature",
      "b2-judge",
      "b2-witness",
      "b2-disciple",
      "b2-active-reason",
      "b2-blueprint",
      "b2-safe-science",
      "b2-metaphysics-question"
    ]
  },
  {
    "id": "phase-8",
    "roman": "VIII",
    "preface": "B",
    "shortTitle": "Copérnico",
    "subtitle": "Prólogo B · 1787",
    "title": "La revolución copernicana",
    "question": "¿Qué ocurre si los objetos conocidos deben conformarse a nuestro modo de conocer?",
    "thesis": "La metafísica ensaya el camino científico invirtiendo el supuesto tradicional: los objetos, en cuanto objetos de experiencia, deben concordar con las condiciones a priori de nuestro conocer.",
    "pages": "15–18",
    "takeaways": [
      "El modelo antiguo no explica satisfactoriamente el conocimiento a priori.",
      "El giro copernicano invierte la relación epistemológica.",
      "La misma solución que explica el a priori impone un límite de experiencia."
    ],
    "nodes": [
      {
        "id": "b3-metaphysics",
        "position": {
          "x": 1450,
          "y": 0
        },
        "title": "Metafísica",
        "tag": "PROBLEMA",
        "category": "problem",
        "detail": "La metafísica sigue sin haber encontrado el camino seguro que matemática y física alcanzaron mediante sus revoluciones.",
        "pages": "15–18",
        "keyIdea": "La metafísica sigue sin haber encontrado el camino seguro que matemática y física alcanzaron mediante sus revoluciones.",
        "question": "¿Qué función cumple «Metafísica» en esta fase?",
        "answer": "La metafísica sigue sin haber encontrado el camino seguro que matemática y física alcanzaron mediante sus revoluciones."
      },
      {
        "id": "b3-groping",
        "position": {
          "x": 1450,
          "y": 280
        },
        "title": "Andar a tientas",
        "tag": "DIAGNÓSTICO",
        "category": "problem",
        "detail": "La metafísica continúa sin un método estable y repite conflictos que no logra resolver.",
        "pages": "15–18",
        "keyIdea": "La metafísica continúa sin un método estable y repite conflictos que no logra resolver.",
        "question": "¿Qué función cumple «Andar a tientas» en esta fase?",
        "answer": "La metafísica continúa sin un método estable y repite conflictos que no logra resolver."
      },
      {
        "id": "b3-old-assumption",
        "position": {
          "x": 1450,
          "y": 590
        },
        "title": "Supuesto tradicional",
        "tag": "SUPUESTO",
        "category": "problem",
        "detail": "Hasta ahora se ha supuesto que todo nuestro conocimiento debe acomodarse a los objetos.",
        "pages": "15–16",
        "keyIdea": "Hasta ahora se ha supuesto que todo nuestro conocimiento debe acomodarse a los objetos.",
        "question": "¿Qué función cumple «Supuesto tradicional» en esta fase?",
        "answer": "Hasta ahora se ha supuesto que todo nuestro conocimiento debe acomodarse a los objetos."
      },
      {
        "id": "b3-knowledge-follows-object",
        "position": {
          "x": 1450,
          "y": 900
        },
        "title": "El conocimiento se rige por los objetos",
        "tag": "MODELO",
        "category": "problem",
        "detail": "El modelo tradicional coloca al objeto como medida a la que el conocimiento debe adaptarse.",
        "pages": "15–16",
        "keyIdea": "Bajo este supuesto resulta difícil explicar un conocimiento necesario anterior a la experiencia.",
        "question": "¿Qué función cumple «El conocimiento se rige por los objetos» en esta fase?",
        "answer": "Bajo este supuesto resulta difícil explicar un conocimiento necesario anterior a la experiencia."
      },
      {
        "id": "b3-apriori-problem",
        "position": {
          "x": 1450,
          "y": 1220
        },
        "title": "Problema del conocimiento a priori",
        "tag": "FRACASO",
        "category": "problem",
        "detail": "Si todo en el conocimiento dependiera del objeto dado, no se entiende cómo podríamos conocer algo acerca de él antes de experimentarlo.",
        "pages": "15–16",
        "keyIdea": "Si todo en el conocimiento dependiera del objeto dado, no se entiende cómo podríamos conocer algo acerca de él antes de experimentarlo.",
        "question": "¿Qué función cumple «Problema del conocimiento a priori» en esta fase?",
        "answer": "Si todo en el conocimiento dependiera del objeto dado, no se entiende cómo podríamos conocer algo acerca de él antes de experimentarlo."
      },
      {
        "id": "b3-inversion",
        "position": {
          "x": 1450,
          "y": 1530
        },
        "title": "Invertir el supuesto",
        "tag": "ENSAYO",
        "category": "method",
        "detail": "Kant propone ensayar la relación inversa para comprobar si así puede explicarse mejor el conocimiento a priori.",
        "pages": "15–16",
        "keyIdea": "Kant propone ensayar la relación inversa para comprobar si así puede explicarse mejor el conocimiento a priori.",
        "question": "¿Qué función cumple «Invertir el supuesto» en esta fase?",
        "answer": "Kant propone ensayar la relación inversa para comprobar si así puede explicarse mejor el conocimiento a priori."
      },
      {
        "id": "b3-copernicus",
        "position": {
          "x": 800,
          "y": 1830
        },
        "title": "Copérnico",
        "tag": "ANALOGÍA",
        "category": "tradition",
        "detail": "Copérnico sirve como analogía de un cambio de punto de partida que vuelve inteligible lo que el modelo anterior no explicaba.",
        "pages": "15–16",
        "keyIdea": "Copérnico sirve como analogía de un cambio de punto de partida que vuelve inteligible lo que el modelo anterior no explicaba.",
        "question": "¿Qué función cumple «Copérnico» en esta fase?",
        "answer": "Copérnico sirve como analogía de un cambio de punto de partida que vuelve inteligible lo que el modelo anterior no explicaba."
      },
      {
        "id": "b3-copernican-turn",
        "position": {
          "x": 1450,
          "y": 1840
        },
        "title": "Revolución copernicana",
        "tag": "GIRO",
        "category": "conclusion",
        "detail": "Kant ensaya que los objetos, en cuanto pueden ser conocidos por nosotros, deban concordar con las condiciones de nuestro modo de conocer.",
        "pages": "15–16",
        "keyIdea": "La inversión cambia la dirección de la dependencia epistemológica.",
        "question": "¿Qué invierte Kant en la llamada revolución copernicana?",
        "answer": "En vez de suponer que el conocimiento debe regirse enteramente por objetos ya dados, ensaya que los objetos de experiencia deban concordar con las condiciones a priori de nuestro conocer."
      },
      {
        "id": "b3-new-assumption",
        "position": {
          "x": 1450,
          "y": 2190
        },
        "title": "Los objetos se conforman a nuestro conocimiento",
        "tag": "TESIS",
        "category": "claim",
        "detail": "Todo objeto que pueda ser conocido por nosotros debe poder presentarse conforme a las condiciones de nuestra facultad cognoscitiva.",
        "pages": "15–17",
        "keyIdea": "Todo objeto que pueda ser conocido por nosotros debe poder presentarse conforme a las condiciones de nuestra facultad cognoscitiva.",
        "question": "¿Qué función cumple «Los objetos se conforman a nuestro conocimiento» en esta fase?",
        "answer": "Todo objeto que pueda ser conocido por nosotros debe poder presentarse conforme a las condiciones de nuestra facultad cognoscitiva."
      },
      {
        "id": "b3-not-invention",
        "position": {
          "x": 2420,
          "y": 2160
        },
        "title": "No inventamos arbitrariamente los objetos",
        "tag": "ACLARACIÓN",
        "category": "contrast",
        "detail": "El giro no significa que la mente fabrique libremente la realidad, sino que todo objeto de experiencia debe ajustarse a condiciones de cognoscibilidad.",
        "pages": "15–17",
        "keyIdea": "Condicionar la experiencia no equivale a inventar el mundo.",
        "question": "¿Qué función cumple «No inventamos arbitrariamente los objetos» en esta fase?",
        "answer": "Condicionar la experiencia no equivale a inventar el mundo."
      },
      {
        "id": "b3-intuition",
        "position": {
          "x": 800,
          "y": 2550
        },
        "title": "Intuición",
        "tag": "FACULTAD",
        "category": "method",
        "detail": "Los objetos sensibles deben poder ser dados de acuerdo con nuestra forma de intuición.",
        "pages": "16–17",
        "keyIdea": "Los objetos sensibles deben poder ser dados de acuerdo con nuestra forma de intuición.",
        "question": "¿Qué función cumple «Intuición» en esta fase?",
        "answer": "Los objetos sensibles deben poder ser dados de acuerdo con nuestra forma de intuición."
      },
      {
        "id": "b3-object-intuition",
        "position": {
          "x": 800,
          "y": 2880
        },
        "title": "El objeto sensible se conforma a nuestra intuición",
        "tag": "CONDICIÓN",
        "category": "claim",
        "detail": "Si la forma de intuición precede a los objetos tal como pueden aparecer, se comprende que podamos conocer algo de ellos a priori.",
        "pages": "16–17",
        "keyIdea": "Si la forma de intuición precede a los objetos tal como pueden aparecer, se comprende que podamos conocer algo de ellos a priori.",
        "question": "¿Qué función cumple «El objeto sensible se conforma a nuestra intuición» en esta fase?",
        "answer": "Si la forma de intuición precede a los objetos tal como pueden aparecer, se comprende que podamos conocer algo de ellos a priori."
      },
      {
        "id": "b3-understanding",
        "position": {
          "x": 2080,
          "y": 2550
        },
        "title": "Entendimiento",
        "tag": "FACULTAD",
        "category": "method",
        "detail": "Además de ser dados, los objetos deben poder ser pensados bajo reglas del entendimiento.",
        "pages": "16–17",
        "keyIdea": "Además de ser dados, los objetos deben poder ser pensados bajo reglas del entendimiento.",
        "question": "¿Qué función cumple «Entendimiento» en esta fase?",
        "answer": "Además de ser dados, los objetos deben poder ser pensados bajo reglas del entendimiento."
      },
      {
        "id": "b3-concepts",
        "position": {
          "x": 2080,
          "y": 2880
        },
        "title": "Conceptos a priori",
        "tag": "CONDICIÓN",
        "category": "claim",
        "detail": "La experiencia misma debe concordar con conceptos cuya regla se encuentra a priori en el entendimiento.",
        "pages": "16–17",
        "keyIdea": "La experiencia misma debe concordar con conceptos cuya regla se encuentra a priori en el entendimiento.",
        "question": "¿Qué función cumple «Conceptos a priori» en esta fase?",
        "answer": "La experiencia misma debe concordar con conceptos cuya regla se encuentra a priori en el entendimiento."
      },
      {
        "id": "b3-experience",
        "position": {
          "x": 1450,
          "y": 3260
        },
        "title": "Experiencia posible",
        "tag": "RESULTADO",
        "category": "conclusion",
        "detail": "La experiencia surge dentro de condiciones que hacen posible que algo sea dado y pensado como objeto para nosotros.",
        "pages": "16–18",
        "keyIdea": "La experiencia surge dentro de condiciones que hacen posible que algo sea dado y pensado como objeto para nosotros.",
        "question": "¿Qué función cumple «Experiencia posible» en esta fase?",
        "answer": "La experiencia surge dentro de condiciones que hacen posible que algo sea dado y pensado como objeto para nosotros."
      },
      {
        "id": "b3-objects-experience",
        "position": {
          "x": 970,
          "y": 3560
        },
        "title": "Objetos de experiencia",
        "tag": "ÁMBITO",
        "category": "evidence",
        "detail": "El nuevo método se aplica legítimamente a los objetos que pueden darse dentro de la experiencia.",
        "pages": "16–18",
        "keyIdea": "El nuevo método se aplica legítimamente a los objetos que pueden darse dentro de la experiencia.",
        "question": "¿Qué función cumple «Objetos de experiencia» en esta fase?",
        "answer": "El nuevo método se aplica legítimamente a los objetos que pueden darse dentro de la experiencia."
      },
      {
        "id": "b3-apriori-knowledge",
        "position": {
          "x": 1450,
          "y": 3660
        },
        "title": "Conocimiento a priori",
        "tag": "LOGRO",
        "category": "conclusion",
        "detail": "Las condiciones de nuestro conocer pueden valer necesariamente para todos los objetos posibles de experiencia.",
        "pages": "16–18",
        "keyIdea": "Las condiciones de nuestro conocer pueden valer necesariamente para todos los objetos posibles de experiencia.",
        "question": "¿Qué función cumple «Conocimiento a priori» en esta fase?",
        "answer": "Las condiciones de nuestro conocer pueden valer necesariamente para todos los objetos posibles de experiencia."
      },
      {
        "id": "b3-we-put",
        "position": {
          "x": 1450,
          "y": 4000
        },
        "title": "Conocemos a priori lo que aportamos al conocer",
        "tag": "TESIS",
        "category": "conclusion",
        "detail": "Podemos conocer a priori aquello que procede de las condiciones que nuestra propia facultad cognoscitiva aporta a la experiencia.",
        "pages": "16–18",
        "keyIdea": "“Poner” significa aportar condiciones universales del conocer, no inventar arbitrariamente objetos.",
        "question": "¿Qué función cumple «Conocemos a priori lo que aportamos al conocer» en esta fase?",
        "answer": "“Poner” significa aportar condiciones universales del conocer, no inventar arbitrariamente objetos."
      },
      {
        "id": "b3-scientific-metaphysics",
        "position": {
          "x": 720,
          "y": 4380
        },
        "title": "Primera parte de la metafísica: camino científico",
        "tag": "GANANCIA",
        "category": "conclusion",
        "detail": "El nuevo método permite esperar un tratamiento científico de conceptos a priori aplicables a objetos de experiencia.",
        "pages": "17–18",
        "keyIdea": "El nuevo método permite esperar un tratamiento científico de conceptos a priori aplicables a objetos de experiencia.",
        "question": "¿Qué función cumple «Primera parte de la metafísica: camino científico» en esta fase?",
        "answer": "El nuevo método permite esperar un tratamiento científico de conceptos a priori aplicables a objetos de experiencia."
      },
      {
        "id": "b3-strange-result",
        "position": {
          "x": 2180,
          "y": 4380
        },
        "title": "Resultado inesperado",
        "tag": "TENSIÓN",
        "category": "problem",
        "detail": "El mismo giro que explica la posibilidad del conocimiento a priori introduce también una restricción de su alcance.",
        "pages": "17–18",
        "keyIdea": "El mismo giro que explica la posibilidad del conocimiento a priori introduce también una restricción de su alcance.",
        "question": "¿Qué función cumple «Resultado inesperado» en esta fase?",
        "answer": "El mismo giro que explica la posibilidad del conocimiento a priori introduce también una restricción de su alcance."
      },
      {
        "id": "b3-experience-limit",
        "position": {
          "x": 2180,
          "y": 4710
        },
        "title": "No traspasar la experiencia posible",
        "tag": "LÍMITE",
        "category": "contrast",
        "detail": "Si los conceptos a priori valen como condiciones de experiencia, no pueden extenderse sin más a objetos fuera de toda experiencia.",
        "pages": "17–18",
        "keyIdea": "La fuente del éxito determina también el límite.",
        "question": "¿Qué función cumple «No traspasar la experiencia posible» en esta fase?",
        "answer": "La fuente del éxito determina también el límite."
      },
      {
        "id": "b3-phenomenon",
        "position": {
          "x": 1800,
          "y": 5060
        },
        "title": "Fenómeno",
        "tag": "ANTICIPO",
        "category": "claim",
        "detail": "El fenómeno es el objeto considerado tal como puede aparecer bajo nuestras condiciones de conocimiento.",
        "pages": "17–18",
        "keyIdea": "El fenómeno es el objeto considerado tal como puede aparecer bajo nuestras condiciones de conocimiento.",
        "question": "¿Qué función cumple «Fenómeno» en esta fase?",
        "answer": "El fenómeno es el objeto considerado tal como puede aparecer bajo nuestras condiciones de conocimiento."
      },
      {
        "id": "b3-thing-in-itself",
        "position": {
          "x": 2560,
          "y": 5060
        },
        "title": "Cosa en sí",
        "tag": "ANTICIPO",
        "category": "contrast",
        "detail": "La cosa en sí es el objeto considerado independientemente de nuestro modo de conocer; aquí aparece todavía como anticipo del límite.",
        "pages": "17–18",
        "keyIdea": "La cosa en sí es el objeto considerado independientemente de nuestro modo de conocer; aquí aparece todavía como anticipo del límite.",
        "question": "¿Qué función cumple «Cosa en sí» en esta fase?",
        "answer": "La cosa en sí es el objeto considerado independientemente de nuestro modo de conocer; aquí aparece todavía como anticipo del límite."
      },
      {
        "id": "b3-two-viewpoints",
        "position": {
          "x": 2180,
          "y": 5400
        },
        "title": "Dos modos de considerar el objeto",
        "tag": "EXPERIMENTO",
        "category": "method",
        "detail": "Kant prueba si distinguir entre fenómeno y cosa en sí permite resolver contradicciones producidas por el antiguo supuesto.",
        "pages": "17–18",
        "keyIdea": "Kant prueba si distinguir entre fenómeno y cosa en sí permite resolver contradicciones producidas por el antiguo supuesto.",
        "question": "¿Qué función cumple «Dos modos de considerar el objeto» en esta fase?",
        "answer": "Kant prueba si distinguir entre fenómeno y cosa en sí permite resolver contradicciones producidas por el antiguo supuesto."
      },
      {
        "id": "b3-next",
        "position": {
          "x": 1450,
          "y": 5740
        },
        "title": "El límite también es parte de la solución",
        "tag": "PUENTE",
        "category": "conclusion",
        "detail": "La revolución copernicana explica simultáneamente por qué podemos conocer a priori y por qué ese conocimiento debe detenerse en cierto punto.",
        "pages": "17–18",
        "keyIdea": "Posibilidad y límite nacen del mismo principio.",
        "question": "¿Qué función cumple «El límite también es parte de la solución» en esta fase?",
        "answer": "Posibilidad y límite nacen del mismo principio."
      }
    ],
    "edges": [
      {
        "id": "b3-e1",
        "source": "b3-metaphysics",
        "target": "b3-groping",
        "label": "continúa",
        "kind": "causes"
      },
      {
        "id": "b3-e2",
        "source": "b3-groping",
        "target": "b3-old-assumption",
        "label": "hace sospechoso el",
        "kind": "supports"
      },
      {
        "id": "b3-e3",
        "source": "b3-old-assumption",
        "target": "b3-knowledge-follows-object",
        "label": "establece que",
        "kind": "supports"
      },
      {
        "id": "b3-e4",
        "source": "b3-knowledge-follows-object",
        "target": "b3-apriori-problem",
        "label": "no explica satisfactoriamente",
        "kind": "causes"
      },
      {
        "id": "b3-e5",
        "source": "b3-apriori-problem",
        "target": "b3-inversion",
        "label": "motiva ensayar",
        "kind": "prepares"
      },
      {
        "id": "b3-e6",
        "source": "b3-inversion",
        "target": "b3-copernicus",
        "label": "por analogía con",
        "kind": "illustrates"
      },
      {
        "id": "b3-e7",
        "source": "b3-copernicus",
        "target": "b3-copernican-turn",
        "label": "inspira la analogía de",
        "kind": "illustrates"
      },
      {
        "id": "b3-e8",
        "source": "b3-copernican-turn",
        "target": "b3-new-assumption",
        "label": "ensaya que",
        "kind": "supports"
      },
      {
        "id": "b3-e9",
        "source": "b3-new-assumption",
        "target": "b3-not-invention",
        "label": "debe distinguirse de",
        "kind": "distinguishes"
      },
      {
        "id": "b3-e10",
        "source": "b3-new-assumption",
        "target": "b3-intuition",
        "label": "respecto de lo dado",
        "kind": "supports"
      },
      {
        "id": "b3-e11",
        "source": "b3-new-assumption",
        "target": "b3-understanding",
        "label": "respecto de lo pensado",
        "kind": "supports"
      },
      {
        "id": "b3-e12",
        "source": "b3-intuition",
        "target": "b3-object-intuition",
        "label": "condiciona",
        "kind": "supports"
      },
      {
        "id": "b3-e13",
        "source": "b3-understanding",
        "target": "b3-concepts",
        "label": "aporta",
        "kind": "supports"
      },
      {
        "id": "b3-e14",
        "source": "b3-object-intuition",
        "target": "b3-experience",
        "label": "contribuye a",
        "kind": "supports"
      },
      {
        "id": "b3-e15",
        "source": "b3-concepts",
        "target": "b3-experience",
        "label": "contribuye a",
        "kind": "supports"
      },
      {
        "id": "b3-e16",
        "source": "b3-experience",
        "target": "b3-objects-experience",
        "label": "contiene",
        "kind": "supports"
      },
      {
        "id": "b3-e17",
        "source": "b3-experience",
        "target": "b3-apriori-knowledge",
        "label": "hace inteligible",
        "kind": "conclusion"
      },
      {
        "id": "b3-e18",
        "source": "b3-apriori-knowledge",
        "target": "b3-we-put",
        "label": "se explica porque",
        "kind": "supports"
      },
      {
        "id": "b3-e19",
        "source": "b3-we-put",
        "target": "b3-scientific-metaphysics",
        "label": "hace posible",
        "kind": "conclusion"
      },
      {
        "id": "b3-e20",
        "source": "b3-we-put",
        "target": "b3-strange-result",
        "label": "pero produce también",
        "kind": "causes"
      },
      {
        "id": "b3-e21",
        "source": "b3-strange-result",
        "target": "b3-experience-limit",
        "label": "se expresa como",
        "kind": "limits"
      },
      {
        "id": "b3-e22",
        "source": "b3-experience-limit",
        "target": "b3-two-viewpoints",
        "label": "obliga a distinguir",
        "kind": "requires"
      },
      {
        "id": "b3-e23",
        "source": "b3-two-viewpoints",
        "target": "b3-phenomenon",
        "label": "como aparece",
        "kind": "distinguishes"
      },
      {
        "id": "b3-e24",
        "source": "b3-two-viewpoints",
        "target": "b3-thing-in-itself",
        "label": "independiente de nuestro conocer",
        "kind": "distinguishes"
      },
      {
        "id": "b3-e25",
        "source": "b3-phenomenon",
        "target": "b3-next",
        "label": "muestra una cara del",
        "kind": "supports"
      },
      {
        "id": "b3-e26",
        "source": "b3-thing-in-itself",
        "target": "b3-next",
        "label": "muestra otra cara del",
        "kind": "supports"
      }
    ],
    "guideNodeIds": [
      "b3-metaphysics",
      "b3-groping",
      "b3-old-assumption",
      "b3-knowledge-follows-object",
      "b3-apriori-problem",
      "b3-inversion",
      "b3-copernicus",
      "b3-copernican-turn",
      "b3-new-assumption",
      "b3-not-invention",
      "b3-intuition",
      "b3-object-intuition",
      "b3-understanding",
      "b3-concepts",
      "b3-experience",
      "b3-objects-experience",
      "b3-apriori-knowledge",
      "b3-we-put",
      "b3-scientific-metaphysics",
      "b3-strange-result",
      "b3-experience-limit",
      "b3-phenomenon",
      "b3-thing-in-itself",
      "b3-two-viewpoints",
      "b3-next"
    ]
  },
  {
    "id": "phase-9",
    "roman": "IX",
    "preface": "B",
    "shortTitle": "Límites",
    "subtitle": "Prólogo B · 1787",
    "title": "Fenómeno, cosa en sí y límites del conocimiento",
    "question": "¿Qué podemos conocer después del giro copernicano y qué queda fuera del alcance de la razón especulativa?",
    "thesis": "El conocimiento especulativo queda restringido a fenómenos; la cosa en sí no se conoce teóricamente, aunque puede pensarse, y esta distinción permite evitar ciertas contradicciones.",
    "pages": "18–21",
    "takeaways": [
      "Conocer y pensar no son lo mismo.",
      "Fenómeno y cosa en sí son dos modos de considerar el objeto.",
      "La libertad puede quedar pensable sin ser demostrada especulativamente."
    ],
    "nodes": [
      {
        "id": "b4-turn-result",
        "position": {
          "x": 1500,
          "y": 0
        },
        "title": "Resultado del giro copernicano",
        "tag": "RESULTADO",
        "category": "claim",
        "detail": "La posibilidad del conocimiento a priori y su límite aparecen juntos como consecuencias del mismo cambio de método.",
        "pages": "18–21",
        "keyIdea": "La posibilidad del conocimiento a priori y su límite aparecen juntos como consecuencias del mismo cambio de método.",
        "question": "¿Qué función cumple «Resultado del giro copernicano» en esta fase?",
        "answer": "La posibilidad del conocimiento a priori y su límite aparecen juntos como consecuencias del mismo cambio de método."
      },
      {
        "id": "b4-experience",
        "position": {
          "x": 1500,
          "y": 330
        },
        "title": "Experiencia posible",
        "tag": "CAMPO",
        "category": "conclusion",
        "detail": "El conocimiento especulativo de objetos queda restringido al ámbito de la experiencia posible.",
        "pages": "18–21",
        "keyIdea": "La experiencia posible marca el campo legítimo del conocer teórico.",
        "question": "¿Qué función cumple «Experiencia posible» en esta fase?",
        "answer": "La experiencia posible marca el campo legítimo del conocer teórico."
      },
      {
        "id": "b4-boundary",
        "position": {
          "x": 1500,
          "y": 690
        },
        "title": "Límite del conocimiento especulativo",
        "tag": "FRONTERA",
        "category": "contrast",
        "detail": "Las condiciones que hacen posible nuestro conocimiento determinan también hasta dónde puede aplicarse legítimamente.",
        "pages": "18–21",
        "keyIdea": "Las condiciones que hacen posible nuestro conocimiento determinan también hasta dónde puede aplicarse legítimamente.",
        "question": "¿Qué función cumple «Límite del conocimiento especulativo» en esta fase?",
        "answer": "Las condiciones que hacen posible nuestro conocimiento determinan también hasta dónde puede aplicarse legítimamente."
      },
      {
        "id": "b4-phenomenon",
        "position": {
          "x": 750,
          "y": 1050
        },
        "title": "Fenómeno",
        "tag": "COGNOSCIBLE",
        "category": "claim",
        "detail": "El fenómeno es el objeto tal como puede darse bajo las condiciones de nuestra intuición y conocimiento.",
        "pages": "18–20",
        "keyIdea": "Fenómeno no significa fantasía: significa objeto tal como es cognoscible para nosotros.",
        "question": "¿Qué función cumple «Fenómeno» en esta fase?",
        "answer": "Fenómeno no significa fantasía: significa objeto tal como es cognoscible para nosotros."
      },
      {
        "id": "b4-thing-itself",
        "position": {
          "x": 2250,
          "y": 1050
        },
        "title": "Cosa en sí",
        "tag": "LÍMITE",
        "category": "contrast",
        "detail": "La cosa en sí es el objeto considerado independientemente del modo bajo el cual puede aparecer para nosotros.",
        "pages": "18–20",
        "keyIdea": "No debe imaginarse simplemente como otra cosa escondida detrás del fenómeno.",
        "question": "¿Qué función cumple «Cosa en sí» en esta fase?",
        "answer": "No debe imaginarse simplemente como otra cosa escondida detrás del fenómeno."
      },
      {
        "id": "b4-know",
        "position": {
          "x": 750,
          "y": 1390
        },
        "title": "Conocer",
        "tag": "RELACIÓN",
        "category": "method",
        "detail": "Conocer un objeto exige más que poder formular un concepto acerca de él.",
        "pages": "18–20",
        "keyIdea": "Conocer un objeto exige más que poder formular un concepto acerca de él.",
        "question": "¿Qué función cumple «Conocer» en esta fase?",
        "answer": "Conocer un objeto exige más que poder formular un concepto acerca de él."
      },
      {
        "id": "b4-think",
        "position": {
          "x": 2250,
          "y": 1390
        },
        "title": "Pensar",
        "tag": "RELACIÓN",
        "category": "method",
        "detail": "Algo puede ser pensable sin que por ello poseamos conocimiento teórico de ese objeto.",
        "pages": "18–20",
        "keyIdea": "Pensar y conocer no son equivalentes.",
        "question": "¿Cuál es la diferencia clave entre pensar y conocer?",
        "answer": "Pensar un concepto sin contradicción no basta para conocer un objeto; el conocimiento requiere las condiciones que permitan que el objeto sea dado y pensado."
      },
      {
        "id": "b4-intuition-concept",
        "position": {
          "x": 750,
          "y": 1720
        },
        "title": "Intuición + concepto",
        "tag": "CONDICIÓN",
        "category": "evidence",
        "detail": "El conocimiento de un objeto requiere que algo pueda ser dado y que pueda ser pensado conceptualmente.",
        "pages": "18–20",
        "keyIdea": "El conocimiento de un objeto requiere que algo pueda ser dado y que pueda ser pensado conceptualmente.",
        "question": "¿Qué función cumple «Intuición + concepto» en esta fase?",
        "answer": "El conocimiento de un objeto requiere que algo pueda ser dado y que pueda ser pensado conceptualmente."
      },
      {
        "id": "b4-not-know-itself",
        "position": {
          "x": 2250,
          "y": 1720
        },
        "title": "No conocemos la cosa en sí",
        "tag": "RESTRICCIÓN",
        "category": "problem",
        "detail": "La razón especulativa carece de condiciones para convertir la cosa en sí, como tal, en objeto de conocimiento.",
        "pages": "18–20",
        "keyIdea": "La razón especulativa carece de condiciones para convertir la cosa en sí, como tal, en objeto de conocimiento.",
        "question": "¿Qué función cumple «No conocemos la cosa en sí» en esta fase?",
        "answer": "La razón especulativa carece de condiciones para convertir la cosa en sí, como tal, en objeto de conocimiento."
      },
      {
        "id": "b4-not-denied",
        "position": {
          "x": 2700,
          "y": 2030
        },
        "title": "No queda por ello eliminada del pensamiento",
        "tag": "ACLARACIÓN",
        "category": "contrast",
        "detail": "Limitar el conocimiento de la cosa en sí no equivale a declarar que no pueda pensarse en absoluto.",
        "pages": "18–20",
        "keyIdea": "Limitar el conocimiento de la cosa en sí no equivale a declarar que no pueda pensarse en absoluto.",
        "question": "¿Qué función cumple «No queda por ello eliminada del pensamiento» en esta fase?",
        "answer": "Limitar el conocimiento de la cosa en sí no equivale a declarar que no pueda pensarse en absoluto."
      },
      {
        "id": "b4-two-senses",
        "position": {
          "x": 1500,
          "y": 2160
        },
        "title": "Dos modos de considerar el objeto",
        "tag": "DISTINCIÓN",
        "category": "method",
        "detail": "La Crítica permite considerar el objeto como fenómeno y también como cosa en sí, sin convertir estas perspectivas en dos objetos físicamente separados.",
        "pages": "18–20",
        "keyIdea": "La Crítica permite considerar el objeto como fenómeno y también como cosa en sí, sin convertir estas perspectivas en dos objetos físicamente separados.",
        "question": "¿Qué función cumple «Dos modos de considerar el objeto» en esta fase?",
        "answer": "La Crítica permite considerar el objeto como fenómeno y también como cosa en sí, sin convertir estas perspectivas en dos objetos físicamente separados."
      },
      {
        "id": "b4-unconditioned",
        "position": {
          "x": 1500,
          "y": 2500
        },
        "title": "Lo incondicionado",
        "tag": "EXIGENCIA",
        "category": "claim",
        "detail": "La razón vuelve a exigir un cierre incondicionado de las series de condiciones y debe reconsiderarlo a la luz de la distinción crítica.",
        "pages": "19–21",
        "keyIdea": "La razón vuelve a exigir un cierre incondicionado de las series de condiciones y debe reconsiderarlo a la luz de la distinción crítica.",
        "question": "¿Qué función cumple «Lo incondicionado» en esta fase?",
        "answer": "La razón vuelve a exigir un cierre incondicionado de las series de condiciones y debe reconsiderarlo a la luz de la distinción crítica."
      },
      {
        "id": "b4-one-view",
        "position": {
          "x": 760,
          "y": 2820
        },
        "title": "Un solo punto de vista",
        "tag": "ERROR",
        "category": "problem",
        "detail": "Si tratamos los fenómenos como cosas en sí, aplicamos indiscriminadamente las mismas condiciones del conocimiento empírico a todo sentido del objeto.",
        "pages": "19–21",
        "keyIdea": "Si tratamos los fenómenos como cosas en sí, aplicamos indiscriminadamente las mismas condiciones del conocimiento empírico a todo sentido del objeto.",
        "question": "¿Qué función cumple «Un solo punto de vista» en esta fase?",
        "answer": "Si tratamos los fenómenos como cosas en sí, aplicamos indiscriminadamente las mismas condiciones del conocimiento empírico a todo sentido del objeto."
      },
      {
        "id": "b4-contradiction",
        "position": {
          "x": 760,
          "y": 3140
        },
        "title": "Conflicto de la razón consigo misma",
        "tag": "RESULTADO",
        "category": "problem",
        "detail": "Bajo un único punto de vista, las exigencias de lo condicionado y lo incondicionado producen contradicciones.",
        "pages": "19–21",
        "keyIdea": "Bajo un único punto de vista, las exigencias de lo condicionado y lo incondicionado producen contradicciones.",
        "question": "¿Qué función cumple «Conflicto de la razón consigo misma» en esta fase?",
        "answer": "Bajo un único punto de vista, las exigencias de lo condicionado y lo incondicionado producen contradicciones."
      },
      {
        "id": "b4-critical-distinction",
        "position": {
          "x": 2240,
          "y": 2820
        },
        "title": "Distinción fenómeno / cosa en sí",
        "tag": "SOLUCIÓN",
        "category": "method",
        "detail": "Distinguir ambos modos de consideración permite evitar que las condiciones del fenómeno se conviertan en condiciones de la cosa en todo sentido.",
        "pages": "19–21",
        "keyIdea": "Distinguir ambos modos de consideración permite evitar que las condiciones del fenómeno se conviertan en condiciones de la cosa en todo sentido.",
        "question": "¿Qué función cumple «Distinción fenómeno / cosa en sí» en esta fase?",
        "answer": "Distinguir ambos modos de consideración permite evitar que las condiciones del fenómeno se conviertan en condiciones de la cosa en todo sentido."
      },
      {
        "id": "b4-conflict-dissolves",
        "position": {
          "x": 2240,
          "y": 3140
        },
        "title": "La contradicción desaparece",
        "tag": "RESULTADO",
        "category": "conclusion",
        "detail": "Lo que resultaba incompatible bajo un solo punto de vista puede dejar de serlo al distinguir correctamente fenómeno y cosa en sí.",
        "pages": "19–21",
        "keyIdea": "Lo que resultaba incompatible bajo un solo punto de vista puede dejar de serlo al distinguir correctamente fenómeno y cosa en sí.",
        "question": "¿Qué función cumple «La contradicción desaparece» en esta fase?",
        "answer": "Lo que resultaba incompatible bajo un solo punto de vista puede dejar de serlo al distinguir correctamente fenómeno y cosa en sí."
      },
      {
        "id": "b4-experiment",
        "position": {
          "x": 1500,
          "y": 3450
        },
        "title": "Experimento de la razón pura",
        "tag": "MÉTODO",
        "category": "evidence",
        "detail": "Kant compara dos maneras de pensar el objeto y observa cuál logra evitar el conflicto interno de la razón.",
        "pages": "19–21",
        "keyIdea": "Kant compara dos maneras de pensar el objeto y observa cuál logra evitar el conflicto interno de la razón.",
        "question": "¿Qué función cumple «Experimento de la razón pura» en esta fase?",
        "answer": "Kant compara dos maneras de pensar el objeto y observa cuál logra evitar el conflicto interno de la razón."
      },
      {
        "id": "b4-will",
        "position": {
          "x": 1500,
          "y": 3800
        },
        "title": "Voluntad humana",
        "tag": "EJEMPLO",
        "category": "evidence",
        "detail": "La voluntad sirve para mostrar cómo un mismo ser puede ser considerado desde la perspectiva fenoménica y desde otra perspectiva pensable.",
        "pages": "20–21",
        "keyIdea": "La voluntad sirve para mostrar cómo un mismo ser puede ser considerado desde la perspectiva fenoménica y desde otra perspectiva pensable.",
        "question": "¿Qué función cumple «Voluntad humana» en esta fase?",
        "answer": "La voluntad sirve para mostrar cómo un mismo ser puede ser considerado desde la perspectiva fenoménica y desde otra perspectiva pensable."
      },
      {
        "id": "b4-natural-necessity",
        "position": {
          "x": 720,
          "y": 4160
        },
        "title": "Necesidad natural",
        "tag": "FENÓMENO",
        "category": "claim",
        "detail": "Como fenómeno, la acción humana pertenece al orden natural de causas y efectos.",
        "pages": "20–21",
        "keyIdea": "Como fenómeno, la acción humana pertenece al orden natural de causas y efectos.",
        "question": "¿Qué función cumple «Necesidad natural» en esta fase?",
        "answer": "Como fenómeno, la acción humana pertenece al orden natural de causas y efectos."
      },
      {
        "id": "b4-freedom",
        "position": {
          "x": 2280,
          "y": 4160
        },
        "title": "Libertad",
        "tag": "PENSABLE",
        "category": "claim",
        "detail": "Considerado de otro modo que como fenómeno, el mismo ser puede pensarse como libre sin contradicción con la necesidad natural.",
        "pages": "20–21",
        "keyIdea": "La distinción crítica hace pensable la libertad, pero no la demuestra teóricamente.",
        "question": "¿Qué función cumple «Libertad» en esta fase?",
        "answer": "La distinción crítica hace pensable la libertad, pero no la demuestra teóricamente."
      },
      {
        "id": "b4-not-theoretical-proof",
        "position": {
          "x": 2700,
          "y": 4490
        },
        "title": "Libertad no demostrada especulativamente",
        "tag": "LÍMITE",
        "category": "contrast",
        "detail": "La posibilidad de pensar libertad no constituye conocimiento teórico de que la libertad sea una propiedad conocida de la cosa en sí.",
        "pages": "20–21",
        "keyIdea": "La posibilidad de pensar libertad no constituye conocimiento teórico de que la libertad sea una propiedad conocida de la cosa en sí.",
        "question": "¿Qué función cumple «Libertad no demostrada especulativamente» en esta fase?",
        "answer": "La posibilidad de pensar libertad no constituye conocimiento teórico de que la libertad sea una propiedad conocida de la cosa en sí."
      },
      {
        "id": "b4-speculative-reason",
        "position": {
          "x": 700,
          "y": 4660
        },
        "title": "Razón especulativa",
        "tag": "ÁMBITO",
        "category": "method",
        "detail": "Su conocimiento legítimo queda limitado a objetos que puedan darse dentro de la experiencia.",
        "pages": "18–21",
        "keyIdea": "Su conocimiento legítimo queda limitado a objetos que puedan darse dentro de la experiencia.",
        "question": "¿Qué función cumple «Razón especulativa» en esta fase?",
        "answer": "Su conocimiento legítimo queda limitado a objetos que puedan darse dentro de la experiencia."
      },
      {
        "id": "b4-suprasensible",
        "position": {
          "x": 1500,
          "y": 4930
        },
        "title": "Terreno suprasensible",
        "tag": "LÍMITE",
        "category": "contrast",
        "detail": "Más allá de la experiencia, la razón especulativa no puede continuar como si tratara con objetos cognoscibles del mismo modo.",
        "pages": "20–21",
        "keyIdea": "Más allá de la experiencia, la razón especulativa no puede continuar como si tratara con objetos cognoscibles del mismo modo.",
        "question": "¿Qué función cumple «Terreno suprasensible» en esta fase?",
        "answer": "Más allá de la experiencia, la razón especulativa no puede continuar como si tratara con objetos cognoscibles del mismo modo."
      },
      {
        "id": "b4-practical-opening",
        "position": {
          "x": 2300,
          "y": 4930
        },
        "title": "Posible uso práctico",
        "tag": "APERTURA",
        "category": "practical",
        "detail": "La limitación del conocimiento especulativo deja abierta la pregunta por una función distinta de estas ideas en el uso práctico de la razón.",
        "pages": "20–21",
        "keyIdea": "La limitación del conocimiento especulativo deja abierta la pregunta por una función distinta de estas ideas en el uso práctico de la razón.",
        "question": "¿Qué función cumple «Posible uso práctico» en esta fase?",
        "answer": "La limitación del conocimiento especulativo deja abierta la pregunta por una función distinta de estas ideas en el uso práctico de la razón."
      },
      {
        "id": "b4-next",
        "position": {
          "x": 1500,
          "y": 5330
        },
        "title": "Limitar el conocer abre otra cuestión",
        "tag": "PUENTE",
        "category": "conclusion",
        "detail": "La Crítica cierra la vía del saber especulativo ilimitado y abre la cuestión del significado práctico de lo suprasensible.",
        "pages": "20–21",
        "keyIdea": "La Crítica cierra la vía del saber especulativo ilimitado y abre la cuestión del significado práctico de lo suprasensible.",
        "question": "¿Qué función cumple «Limitar el conocer abre otra cuestión» en esta fase?",
        "answer": "La Crítica cierra la vía del saber especulativo ilimitado y abre la cuestión del significado práctico de lo suprasensible."
      }
    ],
    "edges": [
      {
        "id": "b4-e1",
        "source": "b4-turn-result",
        "target": "b4-experience",
        "label": "delimita",
        "kind": "limits"
      },
      {
        "id": "b4-e2",
        "source": "b4-experience",
        "target": "b4-boundary",
        "label": "marca el",
        "kind": "limits"
      },
      {
        "id": "b4-e3",
        "source": "b4-boundary",
        "target": "b4-phenomenon",
        "label": "dentro de él conocemos",
        "kind": "supports"
      },
      {
        "id": "b4-e4",
        "source": "b4-boundary",
        "target": "b4-thing-itself",
        "label": "fuera de él no conocemos como tal",
        "kind": "limits"
      },
      {
        "id": "b4-e5",
        "source": "b4-phenomenon",
        "target": "b4-know",
        "label": "puede ser",
        "kind": "supports"
      },
      {
        "id": "b4-e6",
        "source": "b4-know",
        "target": "b4-intuition-concept",
        "label": "requiere",
        "kind": "requires"
      },
      {
        "id": "b4-e7",
        "source": "b4-thing-itself",
        "target": "b4-not-know-itself",
        "label": "no puede ser objeto de",
        "kind": "limits"
      },
      {
        "id": "b4-e8",
        "source": "b4-thing-itself",
        "target": "b4-think",
        "label": "debe poder al menos",
        "kind": "supports"
      },
      {
        "id": "b4-e9",
        "source": "b4-think",
        "target": "b4-not-denied",
        "label": "permite afirmar que",
        "kind": "supports"
      },
      {
        "id": "b4-e10",
        "source": "b4-phenomenon",
        "target": "b4-two-senses",
        "label": "es un modo de",
        "kind": "distinguishes"
      },
      {
        "id": "b4-e11",
        "source": "b4-thing-itself",
        "target": "b4-two-senses",
        "label": "es otro modo de",
        "kind": "distinguishes"
      },
      {
        "id": "b4-e12",
        "source": "b4-two-senses",
        "target": "b4-unconditioned",
        "label": "permite reconsiderar",
        "kind": "prepares"
      },
      {
        "id": "b4-e13",
        "source": "b4-unconditioned",
        "target": "b4-one-view",
        "label": "bajo",
        "kind": "prepares"
      },
      {
        "id": "b4-e14",
        "source": "b4-one-view",
        "target": "b4-contradiction",
        "label": "produce",
        "kind": "causes"
      },
      {
        "id": "b4-e15",
        "source": "b4-unconditioned",
        "target": "b4-critical-distinction",
        "label": "con la",
        "kind": "prepares"
      },
      {
        "id": "b4-e16",
        "source": "b4-critical-distinction",
        "target": "b4-conflict-dissolves",
        "label": "permite que",
        "kind": "resolves"
      },
      {
        "id": "b4-e17",
        "source": "b4-contradiction",
        "target": "b4-experiment",
        "label": "es comparada en el",
        "kind": "illustrates"
      },
      {
        "id": "b4-e18",
        "source": "b4-conflict-dissolves",
        "target": "b4-experiment",
        "label": "es comparada en el",
        "kind": "illustrates"
      },
      {
        "id": "b4-e19",
        "source": "b4-experiment",
        "target": "b4-will",
        "label": "puede mostrarse mediante",
        "kind": "illustrates"
      },
      {
        "id": "b4-e20",
        "source": "b4-will",
        "target": "b4-natural-necessity",
        "label": "como fenómeno",
        "kind": "supports"
      },
      {
        "id": "b4-e21",
        "source": "b4-will",
        "target": "b4-freedom",
        "label": "considerada de otro modo",
        "kind": "supports"
      },
      {
        "id": "b4-e22",
        "source": "b4-natural-necessity",
        "target": "b4-freedom",
        "label": "no contradice necesariamente",
        "kind": "distinguishes"
      },
      {
        "id": "b4-e23",
        "source": "b4-freedom",
        "target": "b4-not-theoretical-proof",
        "label": "no equivale a",
        "kind": "limits"
      },
      {
        "id": "b4-e24",
        "source": "b4-speculative-reason",
        "target": "b4-experience",
        "label": "conoce dentro de",
        "kind": "limits"
      },
      {
        "id": "b4-e25",
        "source": "b4-not-theoretical-proof",
        "target": "b4-practical-opening",
        "label": "prepara la cuestión de",
        "kind": "prepares"
      },
      {
        "id": "b4-e26",
        "source": "b4-suprasensible",
        "target": "b4-practical-opening",
        "label": "queda abierto al",
        "kind": "prepares"
      },
      {
        "id": "b4-e27",
        "source": "b4-practical-opening",
        "target": "b4-next",
        "label": "conduce a",
        "kind": "conclusion"
      }
    ],
    "guideNodeIds": [
      "b4-turn-result",
      "b4-experience",
      "b4-boundary",
      "b4-phenomenon",
      "b4-thing-itself",
      "b4-know",
      "b4-think",
      "b4-intuition-concept",
      "b4-not-know-itself",
      "b4-not-denied",
      "b4-two-senses",
      "b4-unconditioned",
      "b4-one-view",
      "b4-contradiction",
      "b4-critical-distinction",
      "b4-conflict-dissolves",
      "b4-experiment",
      "b4-will",
      "b4-natural-necessity",
      "b4-freedom",
      "b4-not-theoretical-proof",
      "b4-speculative-reason",
      "b4-suprasensible",
      "b4-practical-opening",
      "b4-next"
    ]
  },
  {
    "id": "phase-10",
    "roman": "X",
    "preface": "B",
    "shortTitle": "Utilidad",
    "subtitle": "Prólogo B · 1787",
    "title": "La utilidad de la crítica",
    "question": "¿Por qué limitar la razón especulativa protege el uso práctico y prepara una metafísica rigurosa?",
    "thesis": "La Crítica tiene utilidad negativa al frenar la especulación ilegítima y utilidad positiva al proteger la razón práctica; después de ella puede reconstruirse una metafísica rigurosa y sistemática.",
    "pages": "21–26",
    "takeaways": [
      "Limitar la especulación protege un uso práctico legítimo de la razón.",
      "Libertad, Dios e inmortalidad no se convierten por ello en saber especulativo.",
      "Kant rechaza el dogmatismo, no el rigor demostrativo de una ciencia."
    ],
    "nodes": [
      {
        "id": "b5-speculative",
        "position": {
          "x": 1500,
          "y": 0
        },
        "title": "Razón especulativa",
        "tag": "PUNTO DE PARTIDA",
        "category": "method",
        "detail": "La razón especulativa pretende determinar teóricamente qué podemos conocer y debe respetar el campo de la experiencia posible.",
        "pages": "21–26",
        "keyIdea": "La razón especulativa pretende determinar teóricamente qué podemos conocer y debe respetar el campo de la experiencia posible.",
        "question": "¿Qué función cumple «Razón especulativa» en esta fase?",
        "answer": "La razón especulativa pretende determinar teóricamente qué podemos conocer y debe respetar el campo de la experiencia posible."
      },
      {
        "id": "b5-overreach",
        "position": {
          "x": 1500,
          "y": 320
        },
        "title": "Traspasar la experiencia",
        "tag": "EXCESO",
        "category": "problem",
        "detail": "El problema aparece cuando principios válidos para la experiencia pretenden determinar aquello que jamás puede darse como objeto de experiencia.",
        "pages": "21–22",
        "keyIdea": "El problema aparece cuando principios válidos para la experiencia pretenden determinar aquello que jamás puede darse como objeto de experiencia.",
        "question": "¿Qué función cumple «Traspasar la experiencia» en esta fase?",
        "answer": "El problema aparece cuando principios válidos para la experiencia pretenden determinar aquello que jamás puede darse como objeto de experiencia."
      },
      {
        "id": "b5-critique",
        "position": {
          "x": 1500,
          "y": 660
        },
        "title": "La Crítica restringe la especulación",
        "tag": "LÍMITE",
        "category": "method",
        "detail": "La Crítica fija el campo legítimo de la razón teórica y evita una aplicación indiscriminada de sus principios.",
        "pages": "21–22",
        "keyIdea": "Limitar no significa destruir, sino determinar el uso legítimo.",
        "question": "¿Qué función cumple «La Crítica restringe la especulación» en esta fase?",
        "answer": "Limitar no significa destruir, sino determinar el uso legítimo."
      },
      {
        "id": "b5-negative",
        "position": {
          "x": 650,
          "y": 1040
        },
        "title": "Utilidad negativa",
        "tag": "FUNCIÓN",
        "category": "contrast",
        "detail": "La primera utilidad de la Crítica consiste en impedir que la razón especulativa se aventure más allá de la experiencia.",
        "pages": "21–22",
        "keyIdea": "La primera utilidad de la Crítica consiste en impedir que la razón especulativa se aventure más allá de la experiencia.",
        "question": "¿Qué función cumple «Utilidad negativa» en esta fase?",
        "answer": "La primera utilidad de la Crítica consiste en impedir que la razón especulativa se aventure más allá de la experiencia."
      },
      {
        "id": "b5-stop-overreach",
        "position": {
          "x": 650,
          "y": 1370
        },
        "title": "Impedir conocimiento ilegítimo",
        "tag": "RESULTADO",
        "category": "conclusion",
        "detail": "La Crítica bloquea la conversión de lo suprasensible en supuesto objeto de saber teórico mediante principios destinados a la experiencia.",
        "pages": "21–22",
        "keyIdea": "La Crítica bloquea la conversión de lo suprasensible en supuesto objeto de saber teórico mediante principios destinados a la experiencia.",
        "question": "¿Qué función cumple «Impedir conocimiento ilegítimo» en esta fase?",
        "answer": "La Crítica bloquea la conversión de lo suprasensible en supuesto objeto de saber teórico mediante principios destinados a la experiencia."
      },
      {
        "id": "b5-positive",
        "position": {
          "x": 2350,
          "y": 1040
        },
        "title": "Utilidad positiva",
        "tag": "FUNCIÓN",
        "category": "claim",
        "detail": "La restricción se vuelve positiva porque elimina un obstáculo que amenazaba otro uso legítimo de la razón.",
        "pages": "21–23",
        "keyIdea": "Una limitación puede proteger un espacio racional diferente.",
        "question": "¿Qué función cumple «Utilidad positiva» en esta fase?",
        "answer": "Una limitación puede proteger un espacio racional diferente."
      },
      {
        "id": "b5-protect-practical",
        "position": {
          "x": 2350,
          "y": 1370
        },
        "title": "Proteger el uso práctico de la razón",
        "tag": "PROTECCIÓN",
        "category": "conclusion",
        "detail": "La crítica impide que la especulación declare imposible, mediante argumentos ilegítimos, aquello que el uso práctico necesita poder pensar.",
        "pages": "21–23",
        "keyIdea": "La crítica impide que la especulación declare imposible, mediante argumentos ilegítimos, aquello que el uso práctico necesita poder pensar.",
        "question": "¿Qué función cumple «Proteger el uso práctico de la razón» en esta fase?",
        "answer": "La crítica impide que la especulación declare imposible, mediante argumentos ilegítimos, aquello que el uso práctico necesita poder pensar."
      },
      {
        "id": "b5-police",
        "position": {
          "x": 3020,
          "y": 1210
        },
        "title": "La policía crítica",
        "tag": "METÁFORA",
        "category": "evidence",
        "detail": "Kant compara esta restricción con una policía que limita agresiones y así protege el espacio seguro de acción de los ciudadanos.",
        "pages": "21–23",
        "keyIdea": "Kant compara esta restricción con una policía que limita agresiones y así protege el espacio seguro de acción de los ciudadanos.",
        "question": "¿Qué función cumple «La policía crítica» en esta fase?",
        "answer": "Kant compara esta restricción con una policía que limita agresiones y así protege el espacio seguro de acción de los ciudadanos."
      },
      {
        "id": "b5-practical-reason",
        "position": {
          "x": 2350,
          "y": 1720
        },
        "title": "Razón práctica",
        "tag": "USO",
        "category": "practical",
        "detail": "La razón posee un uso moral que no debe quedar anulado por las pretensiones ilegítimas de la especulación.",
        "pages": "21–23",
        "keyIdea": "La razón posee un uso moral que no debe quedar anulado por las pretensiones ilegítimas de la especulación.",
        "question": "¿Qué función cumple «Razón práctica» en esta fase?",
        "answer": "La razón posee un uso moral que no debe quedar anulado por las pretensiones ilegítimas de la especulación."
      },
      {
        "id": "b5-freedom",
        "position": {
          "x": 1900,
          "y": 2050
        },
        "title": "Libertad pensable",
        "tag": "CONDICIÓN",
        "category": "claim",
        "detail": "La moral necesita que la libertad pueda pensarse sin contradicción con la necesidad natural.",
        "pages": "21–23",
        "keyIdea": "La crítica protege la posibilidad de pensar libertad sin convertirla en saber especulativo.",
        "question": "¿Qué función cumple «Libertad pensable» en esta fase?",
        "answer": "La crítica protege la posibilidad de pensar libertad sin convertirla en saber especulativo."
      },
      {
        "id": "b5-morality",
        "position": {
          "x": 2350,
          "y": 2380
        },
        "title": "Moralidad",
        "tag": "INTERÉS",
        "category": "practical",
        "detail": "La distinción crítica permite conservar simultáneamente el orden natural de los fenómenos y el interés práctico de la moral.",
        "pages": "21–23",
        "keyIdea": "La distinción crítica permite conservar simultáneamente el orden natural de los fenómenos y el interés práctico de la moral.",
        "question": "¿Qué función cumple «Moralidad» en esta fase?",
        "answer": "La distinción crítica permite conservar simultáneamente el orden natural de los fenómenos y el interés práctico de la moral."
      },
      {
        "id": "b5-god",
        "position": {
          "x": 2800,
          "y": 2050
        },
        "title": "Dios",
        "tag": "IDEA",
        "category": "practical",
        "detail": "Dios aparece como idea suprasensible que no puede establecerse como objeto de conocimiento especulativo por la vía de los principios de experiencia.",
        "pages": "22–23",
        "keyIdea": "Dios aparece como idea suprasensible que no puede establecerse como objeto de conocimiento especulativo por la vía de los principios de experiencia.",
        "question": "¿Qué función cumple «Dios» en esta fase?",
        "answer": "Dios aparece como idea suprasensible que no puede establecerse como objeto de conocimiento especulativo por la vía de los principios de experiencia."
      },
      {
        "id": "b5-immortality",
        "position": {
          "x": 3200,
          "y": 2050
        },
        "title": "Inmortalidad",
        "tag": "IDEA",
        "category": "practical",
        "detail": "La inmortalidad tampoco se convierte en saber teórico por esa vía, aunque queda vinculada al uso práctico de la razón.",
        "pages": "22–23",
        "keyIdea": "La inmortalidad tampoco se convierte en saber teórico por esa vía, aunque queda vinculada al uso práctico de la razón.",
        "question": "¿Qué función cumple «Inmortalidad» en esta fase?",
        "answer": "La inmortalidad tampoco se convierte en saber teórico por esa vía, aunque queda vinculada al uso práctico de la razón."
      },
      {
        "id": "b5-not-speculative",
        "position": {
          "x": 3000,
          "y": 2470
        },
        "title": "No son saber especulativo",
        "tag": "LÍMITE",
        "category": "contrast",
        "detail": "La relevancia práctica de libertad, Dios e inmortalidad no autoriza a presentarlos como objetos conocidos teóricamente.",
        "pages": "22–23",
        "keyIdea": "La relevancia práctica de libertad, Dios e inmortalidad no autoriza a presentarlos como objetos conocidos teóricamente.",
        "question": "¿Qué función cumple «No son saber especulativo» en esta fase?",
        "answer": "La relevancia práctica de libertad, Dios e inmortalidad no autoriza a presentarlos como objetos conocidos teóricamente."
      },
      {
        "id": "b5-faith",
        "position": {
          "x": 1500,
          "y": 2800
        },
        "title": "“Suprimir el saber para dejar sitio a la fe”",
        "tag": "GIRO",
        "category": "conclusion",
        "detail": "La Crítica retira a la especulación una pretensión de saber que no puede justificar y deja abierto el terreno requerido por el uso práctico.",
        "pages": "22–23",
        "keyIdea": "La frase no rechaza el conocimiento en general; limita una pretensión específica de saber.",
        "question": "¿Qué función cumple «“Suprimir el saber para dejar sitio a la fe”» en esta fase?",
        "answer": "La frase no rechaza el conocimiento en general; limita una pretensión específica de saber."
      },
      {
        "id": "b5-not-anti-knowledge",
        "position": {
          "x": 650,
          "y": 2790
        },
        "title": "Limitar saber ≠ rechazar conocimiento",
        "tag": "ACLARACIÓN",
        "category": "contrast",
        "detail": "La Crítica protege el conocimiento auténtico precisamente distinguiéndolo del saber aparente y de las pretensiones sin derecho.",
        "pages": "22–23",
        "keyIdea": "La Crítica protege el conocimiento auténtico precisamente distinguiéndolo del saber aparente y de las pretensiones sin derecho.",
        "question": "¿Qué función cumple «Limitar saber ≠ rechazar conocimiento» en esta fase?",
        "answer": "La Crítica protege el conocimiento auténtico precisamente distinguiéndolo del saber aparente y de las pretensiones sin derecho."
      },
      {
        "id": "b5-dogmatism",
        "position": {
          "x": 500,
          "y": 3310
        },
        "title": "Dogmatismo",
        "tag": "ERROR",
        "category": "problem",
        "detail": "Dogmatismo significa avanzar con conceptos puros sin una crítica previa de la capacidad y el derecho de la razón.",
        "pages": "23–26",
        "keyIdea": "Dogmatismo significa avanzar con conceptos puros sin una crítica previa de la capacidad y el derecho de la razón.",
        "question": "¿Qué función cumple «Dogmatismo» en esta fase?",
        "answer": "Dogmatismo significa avanzar con conceptos puros sin una crítica previa de la capacidad y el derecho de la razón."
      },
      {
        "id": "b5-skepticism",
        "position": {
          "x": 2500,
          "y": 3310
        },
        "title": "Escepticismo",
        "tag": "ERROR",
        "category": "problem",
        "detail": "Renunciar simplemente a la metafísica tampoco constituye la solución crítica.",
        "pages": "23–26",
        "keyIdea": "Renunciar simplemente a la metafísica tampoco constituye la solución crítica.",
        "question": "¿Qué función cumple «Escepticismo» en esta fase?",
        "answer": "Renunciar simplemente a la metafísica tampoco constituye la solución crítica."
      },
      {
        "id": "b5-dogmatic-procedure",
        "position": {
          "x": 1500,
          "y": 3400
        },
        "title": "Procedimiento dogmático",
        "tag": "MÉTODO",
        "category": "method",
        "detail": "Una ciencia debe demostrar rigurosamente a partir de principios seguros; Kant no rechaza este procedimiento.",
        "pages": "23–26",
        "keyIdea": "Procedimiento dogmático y dogmatismo no significan lo mismo.",
        "question": "¿Por qué Kant acepta un procedimiento dogmático y rechaza el dogmatismo?",
        "answer": "Porque el procedimiento dogmático significa demostrar rigurosamente desde principios seguros, mientras que el dogmatismo usa principios puros sin someter antes a crítica la capacidad de la razón."
      },
      {
        "id": "b5-rigorous-proof",
        "position": {
          "x": 1500,
          "y": 3730
        },
        "title": "Demostración rigurosa",
        "tag": "EXIGENCIA",
        "category": "method",
        "detail": "La futura metafísica deberá conservar rigor, orden y fuerza demostrativa.",
        "pages": "23–26",
        "keyIdea": "La futura metafísica deberá conservar rigor, orden y fuerza demostrativa.",
        "question": "¿Qué función cumple «Demostración rigurosa» en esta fase?",
        "answer": "La futura metafísica deberá conservar rigor, orden y fuerza demostrativa."
      },
      {
        "id": "b5-wolff",
        "position": {
          "x": 950,
          "y": 4080
        },
        "title": "Wolff",
        "tag": "MODELO",
        "category": "tradition",
        "detail": "Kant reconoce en Christian Wolff un modelo importante de rigor y orden filosófico.",
        "pages": "24–26",
        "keyIdea": "Kant reconoce en Christian Wolff un modelo importante de rigor y orden filosófico.",
        "question": "¿Qué función cumple «Wolff» en esta fase?",
        "answer": "Kant reconoce en Christian Wolff un modelo importante de rigor y orden filosófico."
      },
      {
        "id": "b5-wolff-rigor",
        "position": {
          "x": 950,
          "y": 4400
        },
        "title": "Orden, conceptos y rigor",
        "tag": "MÉRITO",
        "category": "evidence",
        "detail": "Kant valora el establecimiento ordenado de principios, la determinación precisa de conceptos y el rigor de las demostraciones.",
        "pages": "24–26",
        "keyIdea": "Kant valora el establecimiento ordenado de principios, la determinación precisa de conceptos y el rigor de las demostraciones.",
        "question": "¿Qué función cumple «Orden, conceptos y rigor» en esta fase?",
        "answer": "Kant valora el establecimiento ordenado de principios, la determinación precisa de conceptos y el rigor de las demostraciones."
      },
      {
        "id": "b5-wolff-limit",
        "position": {
          "x": 2050,
          "y": 4080
        },
        "title": "Le faltó crítica previa",
        "tag": "FALTA",
        "category": "problem",
        "detail": "El rigor de Wolff no estuvo precedido por un examen crítico de la capacidad de la razón pura.",
        "pages": "24–26",
        "keyIdea": "El rigor de Wolff no estuvo precedido por un examen crítico de la capacidad de la razón pura.",
        "question": "¿Qué función cumple «Le faltó crítica previa» en esta fase?",
        "answer": "El rigor de Wolff no estuvo precedido por un examen crítico de la capacidad de la razón pura."
      },
      {
        "id": "b5-prior-critique",
        "position": {
          "x": 2050,
          "y": 4400
        },
        "title": "Crítica previa de la razón pura",
        "tag": "CONDICIÓN",
        "category": "method",
        "detail": "Antes de construir metafísica hay que examinar el instrumento racional y establecer el derecho de sus principios.",
        "pages": "24–26",
        "keyIdea": "Antes de construir metafísica hay que examinar el instrumento racional y establecer el derecho de sus principios.",
        "question": "¿Qué función cumple «Crítica previa de la razón pura» en esta fase?",
        "answer": "Antes de construir metafísica hay que examinar el instrumento racional y establecer el derecho de sus principios."
      },
      {
        "id": "b5-systematic-metaphysics",
        "position": {
          "x": 1500,
          "y": 4780
        },
        "title": "Metafísica rigurosa y sistemática",
        "tag": "PROYECTO",
        "category": "conclusion",
        "detail": "La crítica prepara una metafísica capaz de conservar rigor demostrativo dentro de límites previamente legitimados.",
        "pages": "24–26",
        "keyIdea": "La crítica prepara una metafísica capaz de conservar rigor demostrativo dentro de límites previamente legitimados.",
        "question": "¿Qué función cumple «Metafísica rigurosa y sistemática» en esta fase?",
        "answer": "La crítica prepara una metafísica capaz de conservar rigor demostrativo dentro de límites previamente legitimados."
      },
      {
        "id": "b5-organic-system",
        "position": {
          "x": 650,
          "y": 5120
        },
        "title": "Unidad orgánica de la razón",
        "tag": "ESTRUCTURA",
        "category": "claim",
        "detail": "La razón pura forma un sistema en el que cada parte debe comprenderse por su relación con el todo.",
        "pages": "24–26",
        "keyIdea": "La razón pura forma un sistema en el que cada parte debe comprenderse por su relación con el todo.",
        "question": "¿Qué función cumple «Unidad orgánica de la razón» en esta fase?",
        "answer": "La razón pura forma un sistema en el que cada parte debe comprenderse por su relación con el todo."
      },
      {
        "id": "b5-safe-path",
        "position": {
          "x": 1500,
          "y": 5460
        },
        "title": "Camino seguro de la metafísica",
        "tag": "DESENLACE",
        "category": "conclusion",
        "detail": "La meta es sustituir el antiguo tanteo por una metafísica delimitada, crítica, rigurosa y sistemática.",
        "pages": "24–26",
        "keyIdea": "La Crítica no elimina la metafísica: pretende hacer posible su camino seguro.",
        "question": "¿Qué función cumple «Camino seguro de la metafísica» en esta fase?",
        "answer": "La Crítica no elimina la metafísica: pretende hacer posible su camino seguro."
      }
    ],
    "edges": [
      {
        "id": "b5-e1",
        "source": "b5-speculative",
        "target": "b5-overreach",
        "label": "puede pretender",
        "kind": "causes"
      },
      {
        "id": "b5-e2",
        "source": "b5-overreach",
        "target": "b5-critique",
        "label": "es detenido por",
        "kind": "limits"
      },
      {
        "id": "b5-e3",
        "source": "b5-critique",
        "target": "b5-negative",
        "label": "tiene primero",
        "kind": "supports"
      },
      {
        "id": "b5-e4",
        "source": "b5-negative",
        "target": "b5-stop-overreach",
        "label": "consiste en",
        "kind": "conclusion"
      },
      {
        "id": "b5-e5",
        "source": "b5-critique",
        "target": "b5-positive",
        "label": "adquiere además",
        "kind": "supports"
      },
      {
        "id": "b5-e6",
        "source": "b5-positive",
        "target": "b5-protect-practical",
        "label": "elimina un obstáculo para",
        "kind": "supports"
      },
      {
        "id": "b5-e7",
        "source": "b5-police",
        "target": "b5-positive",
        "label": "ilustra",
        "kind": "illustrates"
      },
      {
        "id": "b5-e8",
        "source": "b5-protect-practical",
        "target": "b5-practical-reason",
        "label": "protege",
        "kind": "supports"
      },
      {
        "id": "b5-e9",
        "source": "b5-practical-reason",
        "target": "b5-freedom",
        "label": "requiere que permanezca pensable",
        "kind": "requires"
      },
      {
        "id": "b5-e10",
        "source": "b5-freedom",
        "target": "b5-morality",
        "label": "permite mantener",
        "kind": "supports"
      },
      {
        "id": "b5-e11",
        "source": "b5-practical-reason",
        "target": "b5-god",
        "label": "se relaciona con",
        "kind": "supports"
      },
      {
        "id": "b5-e12",
        "source": "b5-practical-reason",
        "target": "b5-immortality",
        "label": "se relaciona con",
        "kind": "supports"
      },
      {
        "id": "b5-e13",
        "source": "b5-freedom",
        "target": "b5-not-speculative",
        "label": "no es",
        "kind": "limits"
      },
      {
        "id": "b5-e14",
        "source": "b5-god",
        "target": "b5-not-speculative",
        "label": "no es",
        "kind": "limits"
      },
      {
        "id": "b5-e15",
        "source": "b5-immortality",
        "target": "b5-not-speculative",
        "label": "no es",
        "kind": "limits"
      },
      {
        "id": "b5-e16",
        "source": "b5-not-speculative",
        "target": "b5-faith",
        "label": "conduce a la fórmula",
        "kind": "conclusion"
      },
      {
        "id": "b5-e17",
        "source": "b5-not-anti-knowledge",
        "target": "b5-faith",
        "label": "aclara el sentido de",
        "kind": "distinguishes"
      },
      {
        "id": "b5-e18",
        "source": "b5-dogmatism",
        "target": "b5-critique",
        "label": "es rechazado por",
        "kind": "rejects"
      },
      {
        "id": "b5-e19",
        "source": "b5-skepticism",
        "target": "b5-critique",
        "label": "tampoco sustituye a",
        "kind": "contrasts"
      },
      {
        "id": "b5-e20",
        "source": "b5-critique",
        "target": "b5-dogmatic-procedure",
        "label": "permite después",
        "kind": "prepares"
      },
      {
        "id": "b5-e21",
        "source": "b5-dogmatic-procedure",
        "target": "b5-rigorous-proof",
        "label": "exige",
        "kind": "requires"
      },
      {
        "id": "b5-e22",
        "source": "b5-wolff",
        "target": "b5-wolff-rigor",
        "label": "aporta",
        "kind": "illustrates"
      },
      {
        "id": "b5-e23",
        "source": "b5-wolff",
        "target": "b5-wolff-limit",
        "label": "también muestra que",
        "kind": "contrasts"
      },
      {
        "id": "b5-e24",
        "source": "b5-wolff-limit",
        "target": "b5-prior-critique",
        "label": "debe corregirse mediante",
        "kind": "requires"
      },
      {
        "id": "b5-e25",
        "source": "b5-rigorous-proof",
        "target": "b5-systematic-metaphysics",
        "label": "contribuye a",
        "kind": "supports"
      },
      {
        "id": "b5-e26",
        "source": "b5-prior-critique",
        "target": "b5-systematic-metaphysics",
        "label": "hace legítima",
        "kind": "supports"
      },
      {
        "id": "b5-e27",
        "source": "b5-organic-system",
        "target": "b5-systematic-metaphysics",
        "label": "explica la forma de",
        "kind": "supports"
      },
      {
        "id": "b5-e28",
        "source": "b5-systematic-metaphysics",
        "target": "b5-safe-path",
        "label": "entra en",
        "kind": "conclusion"
      }
    ],
    "guideNodeIds": [
      "b5-speculative",
      "b5-overreach",
      "b5-critique",
      "b5-negative",
      "b5-stop-overreach",
      "b5-positive",
      "b5-protect-practical",
      "b5-police",
      "b5-practical-reason",
      "b5-freedom",
      "b5-morality",
      "b5-god",
      "b5-immortality",
      "b5-not-speculative",
      "b5-faith",
      "b5-not-anti-knowledge",
      "b5-dogmatism",
      "b5-skepticism",
      "b5-dogmatic-procedure",
      "b5-rigorous-proof",
      "b5-wolff",
      "b5-wolff-rigor",
      "b5-wolff-limit",
      "b5-prior-critique",
      "b5-systematic-metaphysics",
      "b5-organic-system",
      "b5-safe-path"
    ]
  }
]

export const kantPrefacesOverview = {
  "id": "overview",
  "roman": "Σ",
  "preface": "A+B",
  "shortTitle": "General",
  "subtitle": "Prólogos A y B",
  "title": "Mapa general de los dos prólogos",
  "question": "¿Por qué necesita Kant una Crítica de la razón pura, qué revolución propone y qué obtiene al limitar el conocimiento?",
  "thesis": "El prólogo A reconstruye por qué la Crítica es necesaria; el prólogo B explica la revolución que propone y cómo sus límites hacen posible una futura metafísica rigurosa.",
  "pages": "6–26",
  "takeaways": [
    "Problema → crisis → crítica.",
    "Ciencia → revolución copernicana → límite.",
    "Fenómeno/cosa en sí → razón práctica → metafísica crítica."
  ],
  "nodes": [
    {
      "id": "ov-reason",
      "position": {
        "x": 0,
        "y": 0
      },
      "title": "Razón humana",
      "tag": "I",
      "category": "claim",
      "detail": "La razón produce preguntas metafísicas por su propia naturaleza.",
      "preface": "A",
      "pages": "6–7",
      "keyIdea": "La razón produce preguntas metafísicas por su propia naturaleza.",
      "question": "¿Cómo se integra «Razón humana» en el argumento global?",
      "answer": "La razón produce preguntas metafísicas por su propia naturaleza.",
      "targetPhaseId": "phase-1",
      "targetNodeId": "a1-reason"
    },
    {
      "id": "ov-unconditioned",
      "position": {
        "x": 360,
        "y": 0
      },
      "title": "Lo incondicionado",
      "tag": "I",
      "category": "claim",
      "detail": "La búsqueda de condiciones empuja a la razón hacia un fundamento último.",
      "preface": "A",
      "pages": "6–7",
      "keyIdea": "La búsqueda de condiciones empuja a la razón hacia un fundamento último.",
      "question": "¿Cómo se integra «Lo incondicionado» en el argumento global?",
      "answer": "La búsqueda de condiciones empuja a la razón hacia un fundamento último.",
      "targetPhaseId": "phase-1",
      "targetNodeId": "a1-unconditioned"
    },
    {
      "id": "ov-conflict",
      "position": {
        "x": 720,
        "y": 0
      },
      "title": "Conflicto de la razón",
      "tag": "I",
      "category": "problem",
      "detail": "Al sobrepasar la experiencia, la razón entra en contradicción consigo misma.",
      "preface": "A",
      "pages": "6–7",
      "keyIdea": "Al sobrepasar la experiencia, la razón entra en contradicción consigo misma.",
      "question": "¿Cómo se integra «Conflicto de la razón» en el argumento global?",
      "answer": "Al sobrepasar la experiencia, la razón entra en contradicción consigo misma.",
      "targetPhaseId": "phase-1",
      "targetNodeId": "a1-conflict"
    },
    {
      "id": "ov-battlefield",
      "position": {
        "x": 1080,
        "y": 0
      },
      "title": "Metafísica: campo de batalla",
      "tag": "I",
      "category": "conclusion",
      "detail": "La metafísica histórica concentra las controversias producidas por estas pretensiones.",
      "preface": "A",
      "pages": "6–7",
      "keyIdea": "La metafísica histórica concentra las controversias producidas por estas pretensiones.",
      "question": "¿Cómo se integra «Metafísica: campo de batalla» en el argumento global?",
      "answer": "La metafísica histórica concentra las controversias producidas por estas pretensiones.",
      "targetPhaseId": "phase-1",
      "targetNodeId": "a1-metaphysics"
    },
    {
      "id": "ov-dogmatism",
      "position": {
        "x": 1420,
        "y": 0
      },
      "title": "Dogmatismo",
      "tag": "II",
      "category": "problem",
      "detail": "La metafísica intenta construir sin crítica previa de la capacidad racional.",
      "preface": "A",
      "pages": "6–7",
      "keyIdea": "La metafísica intenta construir sin crítica previa de la capacidad racional.",
      "question": "¿Cómo se integra «Dogmatismo» en el argumento global?",
      "answer": "La metafísica intenta construir sin crítica previa de la capacidad racional.",
      "targetPhaseId": "phase-2",
      "targetNodeId": "a2-dogmatism"
    },
    {
      "id": "ov-skepticism",
      "position": {
        "x": 1770,
        "y": 0
      },
      "title": "Escepticismo",
      "tag": "II",
      "category": "contrast",
      "detail": "El escepticismo derriba pretensiones dogmáticas, pero no funda una ciencia.",
      "preface": "A",
      "pages": "7",
      "keyIdea": "El escepticismo derriba pretensiones dogmáticas, pero no funda una ciencia.",
      "question": "¿Cómo se integra «Escepticismo» en el argumento global?",
      "answer": "El escepticismo derriba pretensiones dogmáticas, pero no funda una ciencia.",
      "targetPhaseId": "phase-2",
      "targetNodeId": "a2-skeptics"
    },
    {
      "id": "ov-indifference",
      "position": {
        "x": 2120,
        "y": 0
      },
      "title": "Indiferentismo",
      "tag": "II",
      "category": "contrast",
      "detail": "El cansancio ante disputas interminables parece conducir a indiferencia.",
      "preface": "A",
      "pages": "7–8",
      "keyIdea": "El cansancio ante disputas interminables parece conducir a indiferencia.",
      "question": "¿Cómo se integra «Indiferentismo» en el argumento global?",
      "answer": "El cansancio ante disputas interminables parece conducir a indiferencia.",
      "targetPhaseId": "phase-2",
      "targetNodeId": "a2-indifference"
    },
    {
      "id": "ov-selfknowledge",
      "position": {
        "x": 2470,
        "y": 0
      },
      "title": "Autoconocimiento",
      "tag": "III",
      "category": "method",
      "detail": "La razón debe examinarse a sí misma antes de seguir haciendo metafísica.",
      "preface": "A",
      "pages": "7–8",
      "keyIdea": "La razón debe examinarse a sí misma antes de seguir haciendo metafísica.",
      "question": "¿Cómo se integra «Autoconocimiento» en el argumento global?",
      "answer": "La razón debe examinarse a sí misma antes de seguir haciendo metafísica.",
      "targetPhaseId": "phase-3",
      "targetNodeId": "a3-self-knowledge"
    },
    {
      "id": "ov-tribunal",
      "position": {
        "x": 2820,
        "y": 0
      },
      "title": "Tribunal de la razón",
      "tag": "III",
      "category": "claim",
      "detail": "La razón juzga sus propias pretensiones conforme a sus leyes.",
      "preface": "A",
      "pages": "7–8",
      "keyIdea": "La razón juzga sus propias pretensiones conforme a sus leyes.",
      "question": "¿Cómo se integra «Tribunal de la razón» en el argumento global?",
      "answer": "La razón juzga sus propias pretensiones conforme a sus leyes.",
      "targetPhaseId": "phase-3",
      "targetNodeId": "a3-tribunal"
    },
    {
      "id": "ov-critique",
      "position": {
        "x": 3170,
        "y": 0
      },
      "title": "Crítica de la razón pura",
      "tag": "III",
      "category": "conclusion",
      "detail": "El tribunal se convierte en investigación sistemática de derechos, capacidad y límites.",
      "preface": "A→B",
      "pages": "8",
      "keyIdea": "El tribunal se convierte en investigación sistemática de derechos, capacidad y límites.",
      "question": "¿Cómo se integra «Crítica de la razón pura» en el argumento global?",
      "answer": "El tribunal se convierte en investigación sistemática de derechos, capacidad y límites.",
      "targetPhaseId": "phase-3",
      "targetNodeId": "a3-pure-critique"
    },
    {
      "id": "ov-what",
      "position": {
        "x": 2470,
        "y": 440
      },
      "title": "¿Qué podemos conocer?",
      "tag": "IV",
      "category": "claim",
      "detail": "La Crítica pregunta por los contenidos que pueden ser conocidos legítimamente a priori.",
      "preface": "A",
      "pages": "8–9",
      "keyIdea": "La Crítica pregunta por los contenidos que pueden ser conocidos legítimamente a priori.",
      "question": "¿Cómo se integra «¿Qué podemos conocer?» en el argumento global?",
      "answer": "La Crítica pregunta por los contenidos que pueden ser conocidos legítimamente a priori.",
      "targetPhaseId": "phase-4",
      "targetNodeId": "a4-what"
    },
    {
      "id": "ov-howmuch",
      "position": {
        "x": 2820,
        "y": 440
      },
      "title": "¿Cuánto podemos conocer?",
      "tag": "IV",
      "category": "claim",
      "detail": "La Crítica mide la extensión de ese conocimiento.",
      "preface": "A",
      "pages": "8–9",
      "keyIdea": "La Crítica mide la extensión de ese conocimiento.",
      "question": "¿Cómo se integra «¿Cuánto podemos conocer?» en el argumento global?",
      "answer": "La Crítica mide la extensión de ese conocimiento.",
      "targetPhaseId": "phase-4",
      "targetNodeId": "a4-how-much"
    },
    {
      "id": "ov-limits-a",
      "position": {
        "x": 3170,
        "y": 440
      },
      "title": "Extensión y límites",
      "tag": "IV",
      "category": "contrast",
      "detail": "Saber cuánto puede conocer la razón implica fijar dónde debe detenerse.",
      "preface": "A",
      "pages": "8–9",
      "keyIdea": "Saber cuánto puede conocer la razón implica fijar dónde debe detenerse.",
      "question": "¿Cómo se integra «Extensión y límites» en el argumento global?",
      "answer": "Saber cuánto puede conocer la razón implica fijar dónde debe detenerse.",
      "targetPhaseId": "phase-4",
      "targetNodeId": "a4-limits"
    },
    {
      "id": "ov-rigour",
      "position": {
        "x": 3520,
        "y": 440
      },
      "title": "Completud · certeza · claridad",
      "tag": "V",
      "category": "method",
      "detail": "La investigación crítica debe satisfacer requisitos formales rigurosos.",
      "preface": "A",
      "pages": "8–11",
      "keyIdea": "La investigación crítica debe satisfacer requisitos formales rigurosos.",
      "question": "¿Cómo se integra «Completud · certeza · claridad» en el argumento global?",
      "answer": "La investigación crítica debe satisfacer requisitos formales rigurosos.",
      "targetPhaseId": "phase-5",
      "targetNodeId": "a5-rigorous-critique"
    },
    {
      "id": "ov-system-a",
      "position": {
        "x": 3870,
        "y": 440
      },
      "title": "Sistema",
      "tag": "V",
      "category": "conclusion",
      "detail": "La razón pura debe presentarse como una totalidad articulada.",
      "preface": "A",
      "pages": "10–11",
      "keyIdea": "La razón pura debe presentarse como una totalidad articulada.",
      "question": "¿Cómo se integra «Sistema» en el argumento global?",
      "answer": "La razón pura debe presentarse como una totalidad articulada.",
      "targetPhaseId": "phase-5",
      "targetNodeId": "a5-system"
    },
    {
      "id": "ov-safe-question",
      "position": {
        "x": 0,
        "y": 1250
      },
      "title": "¿Camino seguro o tanteo?",
      "tag": "VI",
      "category": "claim",
      "detail": "El prólogo B pregunta qué distingue a una disciplina científica de una que todavía anda a tientas.",
      "preface": "B",
      "pages": "12–13",
      "keyIdea": "El prólogo B pregunta qué distingue a una disciplina científica de una que todavía anda a tientas.",
      "question": "¿Cómo se integra «¿Camino seguro o tanteo?» en el argumento global?",
      "answer": "El prólogo B pregunta qué distingue a una disciplina científica de una que todavía anda a tientas.",
      "targetPhaseId": "phase-6",
      "targetNodeId": "b1-discipline"
    },
    {
      "id": "ov-logic",
      "position": {
        "x": 380,
        "y": 1250
      },
      "title": "Lógica",
      "tag": "VI",
      "category": "evidence",
      "detail": "La lógica muestra cómo la delimitación del objeto puede producir estabilidad metodológica.",
      "preface": "B",
      "pages": "12–13",
      "keyIdea": "La lógica muestra cómo la delimitación del objeto puede producir estabilidad metodológica.",
      "question": "¿Cómo se integra «Lógica» en el argumento global?",
      "answer": "La lógica muestra cómo la delimitación del objeto puede producir estabilidad metodológica.",
      "targetPhaseId": "phase-6",
      "targetNodeId": "b1-logic"
    },
    {
      "id": "ov-math",
      "position": {
        "x": 780,
        "y": 1250
      },
      "title": "Matemática: construir",
      "tag": "VII",
      "category": "evidence",
      "detail": "La matemática progresa cuando construye según conceptos.",
      "preface": "B",
      "pages": "13–14",
      "keyIdea": "La matemática progresa cuando construye según conceptos.",
      "question": "¿Cómo se integra «Matemática: construir» en el argumento global?",
      "answer": "La matemática progresa cuando construye según conceptos.",
      "targetPhaseId": "phase-7",
      "targetNodeId": "b2-construction"
    },
    {
      "id": "ov-physics",
      "position": {
        "x": 1180,
        "y": 1250
      },
      "title": "Física: interrogar",
      "tag": "VII",
      "category": "evidence",
      "detail": "La física progresa cuando la razón dirige experimentos y preguntas a la naturaleza.",
      "preface": "B",
      "pages": "14–15",
      "keyIdea": "La física progresa cuando la razón dirige experimentos y preguntas a la naturaleza.",
      "question": "¿Cómo se integra «Física: interrogar» en el argumento global?",
      "answer": "La física progresa cuando la razón dirige experimentos y preguntas a la naturaleza.",
      "targetPhaseId": "phase-7",
      "targetNodeId": "b2-question-nature"
    },
    {
      "id": "ov-active-reason",
      "position": {
        "x": 1580,
        "y": 1250
      },
      "title": "Razón activa",
      "tag": "VII",
      "category": "claim",
      "detail": "Construcción y experimento comparten una razón que actúa según principios propios.",
      "preface": "B",
      "pages": "13–15",
      "keyIdea": "Construcción y experimento comparten una razón que actúa según principios propios.",
      "question": "¿Cómo se integra «Razón activa» en el argumento global?",
      "answer": "Construcción y experimento comparten una razón que actúa según principios propios.",
      "targetPhaseId": "phase-7",
      "targetNodeId": "b2-active-reason"
    },
    {
      "id": "ov-old-model",
      "position": {
        "x": 1980,
        "y": 1250
      },
      "title": "Conocimiento → objeto",
      "tag": "VIII",
      "category": "problem",
      "detail": "El supuesto antiguo hace depender enteramente el conocimiento de los objetos.",
      "preface": "B",
      "pages": "15–16",
      "keyIdea": "El supuesto antiguo hace depender enteramente el conocimiento de los objetos.",
      "question": "¿Cómo se integra «Conocimiento → objeto» en el argumento global?",
      "answer": "El supuesto antiguo hace depender enteramente el conocimiento de los objetos.",
      "targetPhaseId": "phase-8",
      "targetNodeId": "b3-knowledge-follows-object"
    },
    {
      "id": "ov-copernican",
      "position": {
        "x": 2380,
        "y": 1250
      },
      "title": "Revolución copernicana",
      "tag": "VIII",
      "category": "conclusion",
      "detail": "Kant invierte el supuesto y exige que los objetos de experiencia concuerden con nuestras condiciones de conocer.",
      "preface": "B",
      "pages": "15–16",
      "keyIdea": "Kant invierte el supuesto y exige que los objetos de experiencia concuerden con nuestras condiciones de conocer.",
      "question": "¿Cómo se integra «Revolución copernicana» en el argumento global?",
      "answer": "Kant invierte el supuesto y exige que los objetos de experiencia concuerden con nuestras condiciones de conocer.",
      "targetPhaseId": "phase-8",
      "targetNodeId": "b3-copernican-turn"
    },
    {
      "id": "ov-new-model",
      "position": {
        "x": 2780,
        "y": 1250
      },
      "title": "Objeto de experiencia → condiciones del conocer",
      "tag": "VIII",
      "category": "claim",
      "detail": "El objeto cognoscible debe ajustarse a condiciones a priori de intuición y entendimiento.",
      "preface": "B",
      "pages": "16–17",
      "keyIdea": "El objeto cognoscible debe ajustarse a condiciones a priori de intuición y entendimiento.",
      "question": "¿Cómo se integra «Objeto de experiencia → condiciones del conocer» en el argumento global?",
      "answer": "El objeto cognoscible debe ajustarse a condiciones a priori de intuición y entendimiento.",
      "targetPhaseId": "phase-8",
      "targetNodeId": "b3-new-assumption"
    },
    {
      "id": "ov-apriori",
      "position": {
        "x": 3180,
        "y": 1250
      },
      "title": "Conocimiento a priori posible",
      "tag": "VIII",
      "category": "conclusion",
      "detail": "El giro explica por qué ciertas condiciones pueden valer necesariamente para toda experiencia.",
      "preface": "B",
      "pages": "16–18",
      "keyIdea": "El giro explica por qué ciertas condiciones pueden valer necesariamente para toda experiencia.",
      "question": "¿Cómo se integra «Conocimiento a priori posible» en el argumento global?",
      "answer": "El giro explica por qué ciertas condiciones pueden valer necesariamente para toda experiencia.",
      "targetPhaseId": "phase-8",
      "targetNodeId": "b3-apriori-knowledge"
    },
    {
      "id": "ov-limit-b",
      "position": {
        "x": 3580,
        "y": 1250
      },
      "title": "Límite de experiencia",
      "tag": "VIII–IX",
      "category": "contrast",
      "detail": "La misma solución restringe el conocimiento especulativo al campo de la experiencia posible.",
      "preface": "B",
      "pages": "17–21",
      "keyIdea": "La misma solución restringe el conocimiento especulativo al campo de la experiencia posible.",
      "question": "¿Cómo se integra «Límite de experiencia» en el argumento global?",
      "answer": "La misma solución restringe el conocimiento especulativo al campo de la experiencia posible.",
      "targetPhaseId": "phase-8",
      "targetNodeId": "b3-experience-limit"
    },
    {
      "id": "ov-phenomenon",
      "position": {
        "x": 2380,
        "y": 1700
      },
      "title": "Fenómeno",
      "tag": "IX",
      "category": "claim",
      "detail": "El fenómeno es el objeto tal como puede ser conocido bajo nuestras condiciones.",
      "preface": "B",
      "pages": "18–20",
      "keyIdea": "El fenómeno es el objeto tal como puede ser conocido bajo nuestras condiciones.",
      "question": "¿Cómo se integra «Fenómeno» en el argumento global?",
      "answer": "El fenómeno es el objeto tal como puede ser conocido bajo nuestras condiciones.",
      "targetPhaseId": "phase-9",
      "targetNodeId": "b4-phenomenon"
    },
    {
      "id": "ov-thing",
      "position": {
        "x": 2780,
        "y": 1700
      },
      "title": "Cosa en sí",
      "tag": "IX",
      "category": "contrast",
      "detail": "La cosa en sí es el objeto considerado independientemente de nuestro modo de conocer.",
      "preface": "B",
      "pages": "18–20",
      "keyIdea": "La cosa en sí es el objeto considerado independientemente de nuestro modo de conocer.",
      "question": "¿Cómo se integra «Cosa en sí» en el argumento global?",
      "answer": "La cosa en sí es el objeto considerado independientemente de nuestro modo de conocer.",
      "targetPhaseId": "phase-9",
      "targetNodeId": "b4-thing-itself"
    },
    {
      "id": "ov-know-think",
      "position": {
        "x": 3180,
        "y": 1700
      },
      "title": "Conocer ≠ pensar",
      "tag": "IX",
      "category": "method",
      "detail": "Algo puede ser pensable sin ser por ello objeto de conocimiento especulativo.",
      "preface": "B",
      "pages": "18–20",
      "keyIdea": "Algo puede ser pensable sin ser por ello objeto de conocimiento especulativo.",
      "question": "¿Cómo se integra «Conocer ≠ pensar» en el argumento global?",
      "answer": "Algo puede ser pensable sin ser por ello objeto de conocimiento especulativo.",
      "targetPhaseId": "phase-9",
      "targetNodeId": "b4-think"
    },
    {
      "id": "ov-freedom",
      "position": {
        "x": 3580,
        "y": 1700
      },
      "title": "Libertad pensable",
      "tag": "IX–X",
      "category": "claim",
      "detail": "La distinción crítica permite pensar libertad sin negar la necesidad natural de los fenómenos.",
      "preface": "B",
      "pages": "20–23",
      "keyIdea": "La distinción crítica permite pensar libertad sin negar la necesidad natural de los fenómenos.",
      "question": "¿Cómo se integra «Libertad pensable» en el argumento global?",
      "answer": "La distinción crítica permite pensar libertad sin negar la necesidad natural de los fenómenos.",
      "targetPhaseId": "phase-9",
      "targetNodeId": "b4-freedom"
    },
    {
      "id": "ov-practical",
      "position": {
        "x": 3980,
        "y": 1700
      },
      "title": "Razón práctica",
      "tag": "X",
      "category": "practical",
      "detail": "El límite especulativo deja abierto un uso práctico de la razón.",
      "preface": "B",
      "pages": "21–23",
      "keyIdea": "El límite especulativo deja abierto un uso práctico de la razón.",
      "question": "¿Cómo se integra «Razón práctica» en el argumento global?",
      "answer": "El límite especulativo deja abierto un uso práctico de la razón.",
      "targetPhaseId": "phase-10",
      "targetNodeId": "b5-practical-reason"
    },
    {
      "id": "ov-positive",
      "position": {
        "x": 4380,
        "y": 1700
      },
      "title": "Utilidad positiva de la Crítica",
      "tag": "X",
      "category": "practical",
      "detail": "Limitar la especulación protege el terreno del uso práctico.",
      "preface": "B",
      "pages": "21–23",
      "keyIdea": "Limitar la especulación protege el terreno del uso práctico.",
      "question": "¿Cómo se integra «Utilidad positiva de la Crítica» en el argumento global?",
      "answer": "Limitar la especulación protege el terreno del uso práctico.",
      "targetPhaseId": "phase-10",
      "targetNodeId": "b5-positive"
    },
    {
      "id": "ov-scientific-metaphysics",
      "position": {
        "x": 4780,
        "y": 1700
      },
      "title": "Metafísica rigurosa y sistemática",
      "tag": "X",
      "category": "conclusion",
      "detail": "Después de la crítica puede reconstruirse una metafísica con rigor y límites legitimados.",
      "preface": "B",
      "pages": "24–26",
      "keyIdea": "Después de la crítica puede reconstruirse una metafísica con rigor y límites legitimados.",
      "question": "¿Cómo se integra «Metafísica rigurosa y sistemática» en el argumento global?",
      "answer": "Después de la crítica puede reconstruirse una metafísica con rigor y límites legitimados.",
      "targetPhaseId": "phase-10",
      "targetNodeId": "b5-systematic-metaphysics"
    },
    {
      "id": "ov-safe-path-final",
      "position": {
        "x": 5180,
        "y": 1700
      },
      "title": "Camino seguro de la metafísica",
      "tag": "X",
      "category": "conclusion",
      "detail": "La meta final es transformar el antiguo tanteo en una metafísica crítica, sistemática y rigurosa.",
      "preface": "B",
      "pages": "24–26",
      "keyIdea": "La meta final es transformar el antiguo tanteo en una metafísica crítica, sistemática y rigurosa.",
      "question": "¿Cómo se integra «Camino seguro de la metafísica» en el argumento global?",
      "answer": "La meta final es transformar el antiguo tanteo en una metafísica crítica, sistemática y rigurosa.",
      "targetPhaseId": "phase-10",
      "targetNodeId": "b5-safe-path"
    }
  ],
  "edges": [
    {
      "id": "ov-e1",
      "source": "ov-reason",
      "target": "ov-unconditioned",
      "label": "busca",
      "kind": "requires"
    },
    {
      "id": "ov-e2",
      "source": "ov-unconditioned",
      "target": "ov-conflict",
      "label": "lleva más allá de la experiencia y produce",
      "kind": "causes"
    },
    {
      "id": "ov-e3",
      "source": "ov-conflict",
      "target": "ov-battlefield",
      "label": "se expresa históricamente como",
      "kind": "conclusion"
    },
    {
      "id": "ov-e4",
      "source": "ov-battlefield",
      "target": "ov-dogmatism",
      "label": "es gobernada primero por",
      "kind": "prepares"
    },
    {
      "id": "ov-e5",
      "source": "ov-dogmatism",
      "target": "ov-skepticism",
      "label": "provoca la reacción de",
      "kind": "causes"
    },
    {
      "id": "ov-e6",
      "source": "ov-skepticism",
      "target": "ov-indifference",
      "label": "sin solución estable desemboca en",
      "kind": "causes"
    },
    {
      "id": "ov-e7",
      "source": "ov-indifference",
      "target": "ov-selfknowledge",
      "label": "revela la necesidad de",
      "kind": "prepares"
    },
    {
      "id": "ov-e8",
      "source": "ov-selfknowledge",
      "target": "ov-tribunal",
      "label": "instituye",
      "kind": "prepares"
    },
    {
      "id": "ov-e9",
      "source": "ov-tribunal",
      "target": "ov-critique",
      "label": "culmina en",
      "kind": "conclusion"
    },
    {
      "id": "ov-e10",
      "source": "ov-critique",
      "target": "ov-what",
      "label": "pregunta",
      "kind": "method"
    },
    {
      "id": "ov-e11",
      "source": "ov-critique",
      "target": "ov-howmuch",
      "label": "pregunta",
      "kind": "method"
    },
    {
      "id": "ov-e12",
      "source": "ov-howmuch",
      "target": "ov-limits-a",
      "label": "implica",
      "kind": "limits"
    },
    {
      "id": "ov-e13",
      "source": "ov-what",
      "target": "ov-rigour",
      "label": "la respuesta debe satisfacer",
      "kind": "requires"
    },
    {
      "id": "ov-e14",
      "source": "ov-limits-a",
      "target": "ov-rigour",
      "label": "la respuesta debe satisfacer",
      "kind": "requires"
    },
    {
      "id": "ov-e15",
      "source": "ov-rigour",
      "target": "ov-system-a",
      "label": "organiza",
      "kind": "conclusion"
    },
    {
      "id": "ov-e16",
      "source": "ov-system-a",
      "target": "ov-safe-question",
      "label": "abre la pregunta por",
      "kind": "prepares"
    },
    {
      "id": "ov-e17",
      "source": "ov-safe-question",
      "target": "ov-logic",
      "label": "primer caso seguro",
      "kind": "illustrates"
    },
    {
      "id": "ov-e18",
      "source": "ov-safe-question",
      "target": "ov-math",
      "label": "lleva a examinar",
      "kind": "prepares"
    },
    {
      "id": "ov-e19",
      "source": "ov-safe-question",
      "target": "ov-physics",
      "label": "lleva a examinar",
      "kind": "prepares"
    },
    {
      "id": "ov-e20",
      "source": "ov-math",
      "target": "ov-active-reason",
      "label": "ejemplifica",
      "kind": "supports"
    },
    {
      "id": "ov-e21",
      "source": "ov-physics",
      "target": "ov-active-reason",
      "label": "ejemplifica",
      "kind": "supports"
    },
    {
      "id": "ov-e22",
      "source": "ov-active-reason",
      "target": "ov-old-model",
      "label": "hace cuestionar",
      "kind": "contrasts"
    },
    {
      "id": "ov-e23",
      "source": "ov-old-model",
      "target": "ov-copernican",
      "label": "es invertido por",
      "kind": "contrasts"
    },
    {
      "id": "ov-e24",
      "source": "ov-copernican",
      "target": "ov-new-model",
      "label": "establece",
      "kind": "supports"
    },
    {
      "id": "ov-e25",
      "source": "ov-new-model",
      "target": "ov-apriori",
      "label": "hace inteligible",
      "kind": "conclusion"
    },
    {
      "id": "ov-e26",
      "source": "ov-apriori",
      "target": "ov-limit-b",
      "label": "pero también fija",
      "kind": "limits"
    },
    {
      "id": "ov-e27",
      "source": "ov-limit-b",
      "target": "ov-phenomenon",
      "label": "delimita el conocimiento de",
      "kind": "supports"
    },
    {
      "id": "ov-e28",
      "source": "ov-limit-b",
      "target": "ov-thing",
      "label": "deja fuera como conocimiento de",
      "kind": "limits"
    },
    {
      "id": "ov-e29",
      "source": "ov-phenomenon",
      "target": "ov-know-think",
      "label": "obliga a distinguir",
      "kind": "distinguishes"
    },
    {
      "id": "ov-e30",
      "source": "ov-thing",
      "target": "ov-know-think",
      "label": "obliga a distinguir",
      "kind": "distinguishes"
    },
    {
      "id": "ov-e31",
      "source": "ov-know-think",
      "target": "ov-freedom",
      "label": "hace posible pensar",
      "kind": "prepares"
    },
    {
      "id": "ov-e32",
      "source": "ov-freedom",
      "target": "ov-practical",
      "label": "abre el problema de",
      "kind": "prepares"
    },
    {
      "id": "ov-e33",
      "source": "ov-practical",
      "target": "ov-positive",
      "label": "muestra la",
      "kind": "supports"
    },
    {
      "id": "ov-e34",
      "source": "ov-positive",
      "target": "ov-scientific-metaphysics",
      "label": "permite reconstruir",
      "kind": "prepares"
    },
    {
      "id": "ov-e35",
      "source": "ov-scientific-metaphysics",
      "target": "ov-safe-path-final",
      "label": "entra en",
      "kind": "conclusion"
    },
    {
      "id": "ov-x1",
      "source": "ov-unconditioned",
      "target": "ov-know-think",
      "label": "reaparece bajo la distinción crítica",
      "kind": "bridge"
    },
    {
      "id": "ov-x2",
      "source": "ov-dogmatism",
      "target": "ov-scientific-metaphysics",
      "label": "es superado mediante crítica previa",
      "kind": "bridge"
    },
    {
      "id": "ov-x3",
      "source": "ov-tribunal",
      "target": "ov-limit-b",
      "label": "termina fijando",
      "kind": "bridge"
    },
    {
      "id": "ov-x4",
      "source": "ov-rigour",
      "target": "ov-scientific-metaphysics",
      "label": "son requisitos de",
      "kind": "bridge"
    },
    {
      "id": "ov-x5",
      "source": "ov-safe-question",
      "target": "ov-safe-path-final",
      "label": "recibe respuesta final en",
      "kind": "bridge"
    },
    {
      "id": "ov-x6",
      "source": "ov-active-reason",
      "target": "ov-copernican",
      "label": "inspira el ensayo de",
      "kind": "bridge"
    }
  ],
  "guideSteps": [
    {
      "nodeId": "ov-reason",
      "title": "El problema nace en la razón",
      "explanation": "Los prólogos comienzan mostrando que la metafísica no surge por capricho: la propia razón formula preguntas inevitables.",
      "keyIdea": "La necesidad de la Crítica empieza en una estructura interna de la razón.",
      "question": "¿Por qué no basta con decir que la metafísica es un error de algunos filósofos?",
      "answer": "Porque las preguntas metafísicas nacen de la propia razón humana y no de una elección accidental de ciertos autores."
    },
    {
      "nodeId": "ov-unconditioned",
      "title": "La razón exige lo incondicionado",
      "explanation": "La búsqueda de condiciones no se detiene fácilmente y pretende alcanzar un fundamento último.",
      "keyIdea": "La exigencia de totalidad empuja a la razón más allá de lo inmediatamente dado.",
      "question": "¿Qué busca la razón al exigir lo incondicionado?",
      "answer": "Un cierre de la serie de condiciones: una condición última que ya no dependa de otra."
    },
    {
      "nodeId": "ov-battlefield",
      "title": "Surge el conflicto metafísico",
      "explanation": "Cuando la razón extiende sus principios más allá de la experiencia, aparecen contradicciones y disputas interminables.",
      "keyIdea": "La metafísica es el campo histórico de ese conflicto.",
      "question": "¿Qué transforma la búsqueda racional en un problema metafísico?",
      "answer": "El uso de principios más allá del ámbito en el que pueden justificarse por la experiencia."
    },
    {
      "nodeId": "ov-dogmatism",
      "title": "Los métodos históricos fracasan",
      "explanation": "Dogmatismo y escepticismo se suceden sin establecer un fundamento seguro.",
      "keyIdea": "La crisis histórica muestra insuficiencia de método, no inutilidad de las preguntas.",
      "question": "¿Qué demuestra el fracaso histórico de la metafísica?",
      "answer": "Que sus métodos tradicionales no han logrado fundarla como ciencia; no demuestra que las preguntas metafísicas desaparezcan."
    },
    {
      "nodeId": "ov-tribunal",
      "title": "La razón debe examinarse",
      "explanation": "La salida consiste en que la razón juzgue sus propias pretensiones.",
      "keyIdea": "La Crítica es autoconocimiento y tribunal de la razón.",
      "question": "¿Qué debe decidir el tribunal crítico?",
      "answer": "Qué pretensiones de la razón son legítimas y cuáles exceden su derecho."
    },
    {
      "nodeId": "ov-critique",
      "title": "Nace la Crítica de la razón pura",
      "explanation": "El tribunal toma forma de una investigación sistemática de capacidad, extensión y límites.",
      "keyIdea": "Primero se examina la razón; después puede construirse metafísica.",
      "question": "¿La Crítica pretende eliminar la metafísica?",
      "answer": "No. Pretende establecer las condiciones bajo las cuales una metafísica legítima podría construirse."
    },
    {
      "nodeId": "ov-limits-a",
      "title": "La pregunta es por alcance y límites",
      "explanation": "Kant pregunta qué y cuánto puede conocerse con independencia de la experiencia.",
      "keyIdea": "No basta poseer conceptos; hay que justificar su alcance objetivo.",
      "question": "¿Qué dos dimensiones resume la pregunta crítica?",
      "answer": "Qué puede conocerse y hasta dónde puede extenderse legítimamente ese conocimiento."
    },
    {
      "nodeId": "ov-safe-question",
      "title": "¿Puede la metafísica convertirse en ciencia?",
      "explanation": "El prólogo B compara la metafísica con disciplinas que ya encontraron un camino seguro.",
      "keyIdea": "La estabilidad científica depende de haber encontrado el método adecuado.",
      "question": "¿Qué significa que una disciplina todavía anda a tientas?",
      "answer": "Que no posee un método estable y debe revisar continuamente sus fundamentos y procedimientos."
    },
    {
      "nodeId": "ov-active-reason",
      "title": "Matemática y física muestran una pista",
      "explanation": "Ambas alcanzan seguridad cuando la razón actúa según principios propios.",
      "keyIdea": "Matemática construye; física interroga; ambas expresan razón activa.",
      "question": "¿Qué comparten construcción matemática y experimento físico?",
      "answer": "Que la razón no se limita a recibir pasivamente, sino que organiza su relación con el objeto según principios."
    },
    {
      "nodeId": "ov-copernican",
      "title": "Kant invierte el modelo",
      "explanation": "La metafísica ensaya que los objetos de experiencia deban concordar con las condiciones de nuestro conocer.",
      "keyIdea": "La revolución copernicana invierte la dirección de dependencia epistemológica.",
      "question": "¿Qué cambia en el nuevo supuesto?",
      "answer": "Los objetos, en cuanto objetos posibles para nosotros, deben ajustarse a condiciones a priori de nuestra facultad de conocer."
    },
    {
      "nodeId": "ov-apriori",
      "title": "El giro explica el conocimiento a priori",
      "explanation": "Si ciertas condiciones proceden de nuestra facultad de conocer, pueden valer para cualquier objeto posible de experiencia.",
      "keyIdea": "Lo que aportamos como condición puede conocerse a priori.",
      "question": "¿Por qué el giro vuelve inteligible el conocimiento a priori?",
      "answer": "Porque las condiciones que nuestra facultad aporta necesariamente deben valer para todo objeto que pueda aparecer dentro de la experiencia."
    },
    {
      "nodeId": "ov-limit-b",
      "title": "Pero el giro impone un límite",
      "explanation": "Las condiciones a priori explican la experiencia, y justamente por eso no autorizan una extensión ilimitada fuera de ella.",
      "keyIdea": "Posibilidad y límite nacen del mismo principio.",
      "question": "¿Por qué el éxito del giro produce también una restricción?",
      "answer": "Porque si los conceptos valen como condiciones de experiencia, su validez cognoscitiva queda ligada a ese campo."
    },
    {
      "nodeId": "ov-know-think",
      "title": "Hay que distinguir conocer y pensar",
      "explanation": "La cosa en sí no se conoce especulativamente como tal, aunque puede seguir siendo pensable.",
      "keyIdea": "Pensabilidad no equivale a conocimiento.",
      "question": "¿Qué falta para pasar de pensar algo a conocerlo?",
      "answer": "Las condiciones mediante las cuales el objeto pueda ser dado y determinado como objeto de experiencia."
    },
    {
      "nodeId": "ov-practical",
      "title": "El límite protege la razón práctica",
      "explanation": "La restricción especulativa evita que la teoría cierre ilegítimamente el espacio de libertad y moralidad.",
      "keyIdea": "La utilidad de la Crítica no es sólo negativa.",
      "question": "¿Qué protege la limitación de la razón especulativa?",
      "answer": "El uso práctico de la razón, al impedir que la especulación declare imposible aquello que no tiene derecho a conocer teóricamente."
    },
    {
      "nodeId": "ov-safe-path-final",
      "title": "La Crítica prepara la metafísica científica",
      "explanation": "El recorrido termina sustituyendo el antiguo tanteo por una metafísica crítica, rigurosa y sistemática.",
      "keyIdea": "La meta no es abolir la metafísica, sino transformar su método.",
      "question": "¿Cuál es el resultado global de los dos prólogos?",
      "answer": "La razón debe criticar primero sus capacidades y límites para poder aspirar después a una metafísica rigurosa y sistemática."
    }
  ]
}

export const kantPrefacesCrossEdges = [
  {
    "id": "cross-1-9",
    "source": "a1-unconditioned",
    "target": "b4-unconditioned",
    "label": "reaparece como problema de",
    "kind": "bridge",
    "explanation": "La exigencia de lo incondicionado que origina el conflicto metafísico en el prólogo A reaparece en el prólogo B y es reconsiderada mediante la distinción fenómeno/cosa en sí."
  },
  {
    "id": "cross-2-10a",
    "source": "a2-dogmatism",
    "target": "b5-dogmatism",
    "label": "es retomado y definido críticamente como",
    "kind": "bridge",
    "explanation": "El dogmatismo descrito históricamente en el prólogo A reaparece al final del B como el procedimiento de la razón pura sin crítica previa de su capacidad."
  },
  {
    "id": "cross-2-10b",
    "source": "a2-skeptics",
    "target": "b5-skepticism",
    "label": "reaparece como alternativa insuficiente en",
    "kind": "bridge",
    "explanation": "El escepticismo vuelve al final del prólogo B como una falsa salida: rechazar dogmatismo no obliga a abandonar la metafísica."
  },
  {
    "id": "cross-3-9",
    "source": "a3-tribunal",
    "target": "b4-boundary",
    "label": "termina fijando",
    "kind": "bridge",
    "explanation": "El tribunal prometido en el prólogo A se concreta en la delimitación del conocimiento especulativo al campo de la experiencia."
  },
  {
    "id": "cross-5-10",
    "source": "a5-completeness",
    "target": "b5-systematic-metaphysics",
    "label": "se convierte en requisito de",
    "kind": "bridge",
    "explanation": "La exigencia de completud del prólogo A reaparece como condición de la futura metafísica sistemática."
  },
  {
    "id": "cross-6-10",
    "source": "b1-safe-path",
    "target": "b5-safe-path",
    "label": "recibe respuesta final en",
    "kind": "bridge",
    "explanation": "La pregunta por el camino seguro planteada al comienzo del prólogo B recibe su respuesta en la metafísica preparada por la Crítica."
  },
  {
    "id": "cross-7-8",
    "source": "b2-active-reason",
    "target": "b3-copernican-turn",
    "label": "inspira el ensayo de",
    "kind": "bridge",
    "explanation": "La actividad racional que caracteriza las revoluciones de matemática y física sirve de modelo metodológico para la inversión copernicana en metafísica."
  },
  {
    "id": "cross-8-9",
    "source": "b3-experience-limit",
    "target": "b4-boundary",
    "label": "se desarrolla como",
    "kind": "bridge",
    "explanation": "El límite anunciado como consecuencia del giro copernicano se convierte en la frontera epistemológica desarrollada en la fase IX."
  },
  {
    "id": "cross-9-10",
    "source": "b4-practical-opening",
    "target": "b5-practical-reason",
    "label": "se desarrolla como",
    "kind": "bridge",
    "explanation": "La apertura hacia un uso práctico al final de la fase IX se convierte en el centro de la utilidad positiva de la Crítica."
  }
]

export const kantPrefacesAllDetailNodes = kantPrefacesPhases.flatMap((phase) =>
  phase.nodes.map((node) => ({
    ...node,
    phaseId: phase.id,
    phaseRoman: phase.roman,
    phaseTitle: phase.title,
    preface: phase.preface,
  })),
)

export function getKantPrefacesPhase(phaseId) {
  return kantPrefacesPhases.find((phase) => phase.id === phaseId) || null
}

export function getKantPrefacesPhaseForNode(nodeId) {
  return (
    kantPrefacesPhases.find((phase) =>
      phase.nodes.some((node) => node.id === nodeId),
    ) || null
  )
}

export function getKantPrefacesNode(nodeId) {
  const phase = getKantPrefacesPhaseForNode(nodeId)
  if (!phase) return null

  const node = phase.nodes.find((item) => item.id === nodeId)
  if (!node) return null

  return {
    ...node,
    phaseId: phase.id,
    phaseRoman: phase.roman,
    phaseTitle: phase.title,
    preface: phase.preface,
  }
}
