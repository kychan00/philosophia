export const leibnizMaps = [
  {
    "id": "world",
    "roman": "I",
    "title": "¿Por qué este mundo?",
    "subtitle": "Dios · posibles · elección · orden",
    "thesis": "Leibniz no parte de una creación arbitraria: exige una razón de por qué existe este mundo y no otro.",
    "nodes": [
      {
        "id": "god",
        "position": {
          "x": 40,
          "y": 170
        },
        "title": "Dios",
        "tag": "perfección",
        "detail": "Dios es pensado como ser absolutamente perfecto. Su entendimiento contiene los posibles y su voluntad no elige sin razón.",
        "discourse": "§§1–7 · PDF pp. 27–31",
        "monadology": "§§38–48 · PDF pp. 577–579",
        "classNote": "Dicho en clase: frente a Spinoza, Dios no produce este mundo por necesidad absoluta; conoce posibilidades y elige con razón."
      },
      {
        "id": "possibles",
        "position": {
          "x": 340,
          "y": 40
        },
        "title": "Mundos posibles",
        "tag": "posibilidad",
        "detail": "No todo lo posible llega a existir. En el entendimiento divino hay múltiples órdenes posibles.",
        "discourse": "§§1–7; §§30–31",
        "monadology": "§§53–54 · PDF p. 580",
        "classNote": "Dicho en clase: la contingencia se recupera porque este mundo es uno entre diversos mundos posibles."
      },
      {
        "id": "choice",
        "position": {
          "x": 660,
          "y": 40
        },
        "title": "Razón de la elección",
        "tag": "razón suficiente",
        "detail": "Si sólo un mundo existe, debe haber una razón de por qué Dios elige uno y no otro: conveniencia y grados de perfección.",
        "discourse": "§§3–6",
        "monadology": "§§53–55 · PDF p. 580",
        "classNote": "Dicho en clase: razón suficiente no equivale a necesidad lógica; explica por qué éste y no otro."
      },
      {
        "id": "best",
        "position": {
          "x": 970,
          "y": 160
        },
        "title": "Lo mejor",
        "tag": "perfección",
        "detail": "La sabiduría conoce, la bondad elige y el poder produce. La elección divina se orienta hacia el mejor orden posible.",
        "discourse": "§§3–7",
        "monadology": "§55 · PDF p. 580",
        "classNote": "Dicho en clase: “mejor mundo posible” significa elección del orden total de mayor conveniencia, no ausencia de todo mal."
      },
      {
        "id": "order",
        "position": {
          "x": 670,
          "y": 350
        },
        "title": "Orden del mundo",
        "tag": "serie",
        "detail": "El mundo existente forma una serie coordinada de acontecimientos y sustancias; no es un agregado sin razón.",
        "discourse": "§§5–7; §13",
        "monadology": "§§36–39; §§56–58"
      },
      {
        "id": "individuals",
        "position": {
          "x": 340,
          "y": 350
        },
        "title": "Sustancias individuales",
        "tag": "pluralidad",
        "detail": "El orden elegido incluye individuos determinados, cada uno con noción completa y una perspectiva del universo.",
        "discourse": "§§8–16",
        "monadology": "preparación de la teoría de mónadas"
      },
      {
        "id": "problem",
        "position": {
          "x": 40,
          "y": 420
        },
        "title": "Problema de libertad",
        "tag": "pregunta",
        "detail": "¿Cómo puede un orden completo elegido por Dios coexistir con individuos contingentes y libres?",
        "discourse": "§13; §§30–32",
        "monadology": "§§31–36",
        "classNote": "Dicho en clase: Leibniz quiere conservar simultáneamente conocimiento divino, contingencia y libertad humana."
      },
      {
        "id": "spinoza-necessity",
        "position": {
          "x": 40,
          "y": 620
        },
        "title": "Spinoza: necesidad",
        "tag": "dicho en clase",
        "detail": "La clase usa a Spinoza como contraste: si todo se sigue necesariamente, la contingencia queda excluida.",
        "discourse": "contexto histórico de la clase",
        "monadology": "prepara §§31–36",
        "classNote": "Dicho en clase: Leibniz necesita mundos posibles precisamente para no aceptar que el mundo sea el único orden posible."
      },
      {
        "id": "convenience",
        "position": {
          "x": 990,
          "y": 380
        },
        "title": "Principio de conveniencia",
        "tag": "dicho en clase",
        "detail": "Entre varios órdenes posibles hay grados de perfección. La elección divina se comprende como selección racional del mejor conjunto.",
        "discourse": "§§3–7",
        "monadology": "§§53–55",
        "classNote": "Dicho en clase: Dios considera posibilidades y actualiza la combinación óptima."
      },
      {
        "id": "theodicy",
        "position": {
          "x": 1320,
          "y": 190
        },
        "title": "Teodicea",
        "tag": "dicho en clase",
        "detail": "La tesis del mejor mundo abre inmediatamente la objeción del mal: ¿cómo conciliar bondad divina, omnipotencia y sufrimiento?",
        "discourse": "prolongación del problema del mejor mundo",
        "monadology": "contexto teológico del sistema",
        "classNote": "Dicho en clase: la Teodicea intenta justificar racionalmente la bondad y justicia de Dios frente a la existencia del mal."
      },
      {
        "id": "evil-three",
        "position": {
          "x": 1320,
          "y": 430
        },
        "title": "Tres formas de mal",
        "tag": "dicho en clase",
        "detail": "Mal metafísico: finitud. Mal físico: dolor y sufrimiento. Mal moral: uso defectuoso de la libertad.",
        "discourse": "contexto de Teodicea",
        "monadology": "orden físico y moral",
        "classNote": "Dicho en clase: el mal moral es especialmente importante porque remite al uso libre de la voluntad."
      }
    ],
    "edges": [
      [
        "god",
        "possibles",
        "entiende"
      ],
      [
        "possibles",
        "choice",
        "exigen"
      ],
      [
        "choice",
        "best",
        "orienta"
      ],
      [
        "best",
        "order",
        "produce"
      ],
      [
        "order",
        "individuals",
        "contiene"
      ],
      [
        "individuals",
        "problem",
        "abre"
      ],
      [
        "god",
        "order",
        "fundamenta"
      ],
      [
        "spinoza-necessity",
        "possibles",
        "Leibniz responde con"
      ],
      [
        "choice",
        "convenience",
        "se regula por"
      ],
      [
        "convenience",
        "best",
        "selecciona"
      ],
      [
        "best",
        "theodicy",
        "abre la objeción"
      ],
      [
        "theodicy",
        "evil-three",
        "distingue"
      ]
    ]
  },
  {
    "id": "caesar",
    "roman": "II",
    "title": "La sustancia individual y César",
    "subtitle": "noción completa · predicación · contingencia · libertad",
    "thesis": "Si la noción completa contiene todos los predicados verdaderos del individuo, ¿cómo evitar que todo sea absolutamente necesario?",
    "nodes": [
      {
        "id": "caesar",
        "position": {
          "x": 40,
          "y": 210
        },
        "title": "César",
        "tag": "sujeto individual",
        "detail": "Leibniz piensa un sujeto individual de manera tan completa que en su noción está fundada toda predicación verdadera acerca de él.",
        "discourse": "§8 · PDF pp. 31–32",
        "monadology": "antecedente de la sustancia simple"
      },
      {
        "id": "notion",
        "position": {
          "x": 340,
          "y": 200
        },
        "title": "Noción completa",
        "tag": "esencia individual",
        "detail": "La noción completa contiene el fundamento de todos los predicados verdaderos del individuo.",
        "discourse": "§8",
        "monadology": "reformulación madura en la mónada"
      },
      {
        "id": "rubicon",
        "position": {
          "x": 680,
          "y": 40
        },
        "title": "Cruza el Rubicón",
        "tag": "predicado",
        "detail": "El cruce del Rubicón pertenece a la historia verdadera de César y está comprendido en su noción completa.",
        "discourse": "§§8, 13",
        "monadology": "verdad de hecho"
      },
      {
        "id": "dictator",
        "position": {
          "x": 680,
          "y": 200
        },
        "title": "Llega a ser dictador",
        "tag": "predicado",
        "detail": "Los acontecimientos no se agregan desde fuera a una esencia vacía: pertenecen a la serie del individuo.",
        "discourse": "§§8–9",
        "monadology": "verdad contingente"
      },
      {
        "id": "future",
        "position": {
          "x": 680,
          "y": 360
        },
        "title": "Predicados futuros",
        "tag": "certeza",
        "detail": "Dios puede conocerlos desde la noción completa, pero que sean ciertos no significa que sean absolutamente necesarios.",
        "discourse": "§13",
        "monadology": "§33 · verdades de hecho",
        "classNote": "Dicho en clase: que Dios conozca completamente una verdad futura no la convierte en una verdad necesaria por contradicción."
      },
      {
        "id": "necessary",
        "position": {
          "x": 1040,
          "y": 100
        },
        "title": "Verdad necesaria",
        "tag": "contradicción",
        "detail": "Su contrario implica contradicción y, por tanto, es imposible.",
        "discourse": "§13",
        "monadology": "§§31, 33–35",
        "classNote": "Dicho en clase: verdad de razón = necesaria; negar “todo triángulo tiene tres lados” destruye el concepto."
      },
      {
        "id": "contingent",
        "position": {
          "x": 1040,
          "y": 320
        },
        "title": "Verdad contingente",
        "tag": "opuesto posible",
        "detail": "Es verdadera y tiene razón, pero su contrario sigue siendo posible considerado en sí mismo. Certeza no equivale a necesidad absoluta.",
        "discourse": "§13 · PDF pp. 34–35",
        "monadology": "§§32–36",
        "classNote": "Dicho en clase: verdad de hecho = contingente; su contrario sigue siendo posible aunque exista razón suficiente."
      },
      {
        "id": "freedom",
        "position": {
          "x": 1360,
          "y": 320
        },
        "title": "Libertad",
        "tag": "inclina sin obligar",
        "detail": "Las razones pueden inclinar la voluntad sin convertir la elección en necesidad absoluta.",
        "discourse": "§§30–32 · PDF pp. 45–48",
        "monadology": "conecta con verdades de hecho",
        "classNote": "Dicho en clase: la voluntad y la deliberación sostienen la responsabilidad moral incluso dentro de un orden conocido por Dios."
      },
      {
        "id": "human-divine",
        "position": {
          "x": 1040,
          "y": 520
        },
        "title": "Intelecto humano / divino",
        "tag": "dicho en clase",
        "detail": "Nosotros no reconstruimos la serie infinita de razones; Dios conoce completamente la noción y todas sus conexiones.",
        "discourse": "§13",
        "monadology": "§§32–36",
        "classNote": "Dicho en clase: nuestra ignorancia explica parte de cómo se nos presentan las verdades de hecho, pero contingencia no es simple ignorancia."
      }
    ],
    "edges": [
      [
        "caesar",
        "notion",
        "es conocido por"
      ],
      [
        "notion",
        "rubicon",
        "incluye"
      ],
      [
        "notion",
        "dictator",
        "incluye"
      ],
      [
        "notion",
        "future",
        "incluye"
      ],
      [
        "future",
        "necessary",
        "¿es?"
      ],
      [
        "future",
        "contingent",
        "distinción"
      ],
      [
        "contingent",
        "freedom",
        "hace posible"
      ],
      [
        "future",
        "human-divine",
        "se conoce de modo distinto"
      ],
      [
        "human-divine",
        "contingent",
        "no elimina"
      ]
    ]
  },
  {
    "id": "monad",
    "roman": "III",
    "title": "De sustancia individual a mónada",
    "subtitle": "simple · sin partes · sin ventanas · actividad interna",
    "thesis": "La Monadología reorganiza la sustancia creada como unidad simple dotada de un principio interno de cambio.",
    "nodes": [
      {
        "id": "individual",
        "position": {
          "x": 60,
          "y": 210
        },
        "title": "Sustancia individual",
        "tag": "Discurso 1686",
        "detail": "En el Discurso, el individuo se define por su noción completa y por expresar el universo desde su punto de vista.",
        "discourse": "§§8–16",
        "monadology": "antecedente"
      },
      {
        "id": "simple",
        "position": {
          "x": 390,
          "y": 80
        },
        "title": "Sustancia simple",
        "tag": "sin partes",
        "detail": "La mónada es una sustancia simple que entra en los compuestos; simple significa sin partes.",
        "discourse": "no formulado todavía así",
        "monadology": "§§1–3 · PDF p. 570",
        "classNote": "Dicho en clase: la simplicidad significa ausencia de partes; por eso una mónada no es una partícula física."
      },
      {
        "id": "monad",
        "position": {
          "x": 700,
          "y": 80
        },
        "title": "Mónada",
        "tag": "átomo metafísico",
        "detail": "Las mónadas son los verdaderos átomos de la naturaleza: unidades metafísicas simples, no partículas materiales.",
        "discourse": "preparación conceptual",
        "monadology": "§§1–3",
        "classNote": "Dicho en clase: fórmula pedagógica del profesor: la mónada es una especie de “átomo formal”, una unidad metafísica activa."
      },
      {
        "id": "windows",
        "position": {
          "x": 1020,
          "y": 80
        },
        "title": "Sin ventanas",
        "tag": "no interacción física",
        "detail": "Nada puede entrar ni salir de una mónada; ninguna criatura exterior modifica físicamente su interior.",
        "discourse": "anticipado en §§26–29, 33",
        "monadology": "§7 · PDF pp. 570–571",
        "classNote": "Dicho en clase: “sin ventanas” significa que ningún estado entra causalmente desde otra mónada."
      },
      {
        "id": "qualities",
        "position": {
          "x": 390,
          "y": 350
        },
        "title": "Cualidades propias",
        "tag": "diferencia",
        "detail": "Las mónadas deben diferenciarse internamente; de otro modo no habría fundamento de la diversidad.",
        "discourse": "individualidad",
        "monadology": "§§8–9 · PDF p. 571"
      },
      {
        "id": "internal",
        "position": {
          "x": 710,
          "y": 350
        },
        "title": "Principio interno",
        "tag": "cambio",
        "detail": "Si nada entra desde fuera y la mónada cambia, la fuente de ese cambio debe estar en su interior.",
        "discourse": "espontaneidad",
        "monadology": "§§10–12 · PDF pp. 571–572",
        "classNote": "Dicho en clase: la noción de fuerza permite pensar un principio interno de actividad y desarrollo."
      },
      {
        "id": "inside",
        "position": {
          "x": 1020,
          "y": 350
        },
        "title": "Vida interna",
        "tag": "siguiente problema",
        "detail": "Percepción y apetición explicarán cómo una unidad simple puede representar multiplicidad y cambiar internamente.",
        "discourse": "expresión del universo",
        "monadology": "§§13–17"
      },
      {
        "id": "mechanicism",
        "position": {
          "x": 40,
          "y": 620
        },
        "title": "Mecanicismo cartesiano",
        "tag": "dicho en clase",
        "detail": "Materia, extensión, movimiento y causas eficientes explican el mecanismo físico, pero Leibniz juzga insuficiente reducir ahí toda realidad.",
        "discourse": "contexto cartesiano",
        "monadology": "antecedente crítico",
        "classNote": "Dicho en clase: Descartes sirve de punto de partida para entender por qué Leibniz introduce fuerza y actividad interna."
      },
      {
        "id": "force-class",
        "position": {
          "x": 360,
          "y": 620
        },
        "title": "Fuerza",
        "tag": "dicho en clase",
        "detail": "La fuerza expresa un principio interno de actividad que no puede reducirse a mera extensión o movimiento.",
        "discourse": "dinámica leibniziana",
        "monadology": "entelequia / actividad interna",
        "classNote": "Dicho en clase: fuerza conecta la crítica al mecanicismo con potencia, acto y entelequia."
      },
      {
        "id": "aristotle-return",
        "position": {
          "x": 690,
          "y": 620
        },
        "title": "Retorno de Aristóteles",
        "tag": "dicho en clase",
        "detail": "Leibniz recupera forma, fuerza, finalidad, potencia, acto y entelequia para complementar la explicación mecánica.",
        "discourse": "trasfondo aristotélico",
        "monadology": "sustancia simple activa",
        "classNote": "Dicho en clase: Leibniz intenta reconciliar mecanismo moderno y estructura metafísica aristotélica."
      }
    ],
    "edges": [
      [
        "individual",
        "simple",
        "madura hacia"
      ],
      [
        "simple",
        "monad",
        "se denomina"
      ],
      [
        "monad",
        "windows",
        "implica"
      ],
      [
        "simple",
        "qualities",
        "requiere"
      ],
      [
        "qualities",
        "internal",
        "diferencia"
      ],
      [
        "windows",
        "internal",
        "obliga a"
      ],
      [
        "internal",
        "inside",
        "abre"
      ],
      [
        "mechanicism",
        "force-class",
        "resulta insuficiente sin"
      ],
      [
        "force-class",
        "aristotle-return",
        "reactiva"
      ],
      [
        "force-class",
        "internal",
        "explica"
      ],
      [
        "aristotle-return",
        "simple",
        "prepara"
      ]
    ]
  },
  {
    "id": "inside",
    "roman": "IV",
    "title": "Dentro de la mónada",
    "subtitle": "percepción · apetición · memoria · razón",
    "thesis": "La mónada no es una unidad vacía: representa y pasa internamente de un estado representativo a otro.",
    "nodes": [
      {
        "id": "monad",
        "position": {
          "x": 50,
          "y": 230
        },
        "title": "Mónada",
        "tag": "unidad",
        "detail": "La sustancia simple posee multiplicidad de afecciones sin estar compuesta de partes.",
        "discourse": "sustancia individual",
        "monadology": "§§1–13"
      },
      {
        "id": "perception",
        "position": {
          "x": 380,
          "y": 90
        },
        "title": "Percepción",
        "tag": "representación",
        "detail": "Percepción es el estado pasajero que envuelve y representa una multitud en la unidad simple.",
        "discourse": "expresión del universo",
        "monadology": "§14 · PDF p. 572"
      },
      {
        "id": "appetition",
        "position": {
          "x": 380,
          "y": 370
        },
        "title": "Apetición",
        "tag": "tendencia",
        "detail": "La apetición es la acción del principio interno que produce el paso de una percepción a otra.",
        "discourse": "actividad interna",
        "monadology": "§15 · PDF p. 572"
      },
      {
        "id": "apperception",
        "position": {
          "x": 720,
          "y": 40
        },
        "title": "Apercepción",
        "tag": "conciencia",
        "detail": "No toda percepción es consciente. La apercepción es advertencia o conciencia de la percepción.",
        "discourse": "conocimiento del alma",
        "monadology": "§14 y desarrollo posterior"
      },
      {
        "id": "memory",
        "position": {
          "x": 720,
          "y": 240
        },
        "title": "Memoria",
        "tag": "secuencia empírica",
        "detail": "La memoria permite enlazar percepciones y anticipar experiencias por asociación.",
        "discourse": "alma y conocimiento",
        "monadology": "§§19–28 · PDF pp. 573–575"
      },
      {
        "id": "reason",
        "position": {
          "x": 1060,
          "y": 180
        },
        "title": "Razón",
        "tag": "verdades necesarias",
        "detail": "Los racionales se elevan por encima de la mera secuencia empírica al conocer verdades necesarias y reflexionar sobre sí mismos.",
        "discourse": "§§23–29",
        "monadology": "§§29–30 · PDF p. 575"
      },
      {
        "id": "spirit",
        "position": {
          "x": 1370,
          "y": 180
        },
        "title": "Espíritu",
        "tag": "yo + Dios",
        "detail": "La razón y la reflexión permiten pensar el yo, la sustancia y a Dios. Los espíritus tendrán un papel especial en el orden moral.",
        "discourse": "§§34–37",
        "monadology": "§§29–30; §§82–90"
      }
    ],
    "edges": [
      [
        "monad",
        "perception",
        "representa mediante"
      ],
      [
        "monad",
        "appetition",
        "cambia mediante"
      ],
      [
        "perception",
        "apperception",
        "puede hacerse"
      ],
      [
        "perception",
        "memory",
        "se enlaza por"
      ],
      [
        "appetition",
        "memory",
        "continúa"
      ],
      [
        "memory",
        "reason",
        "es superada por"
      ],
      [
        "reason",
        "spirit",
        "constituye"
      ]
    ]
  },
  {
    "id": "perspectives",
    "roman": "V",
    "title": "Un universo de perspectivas",
    "subtitle": "expresión · espejo viviente · claridad",
    "thesis": "Cada mónada expresa el universo entero, pero ninguna lo expresa del mismo modo ni con el mismo grado de claridad.",
    "nodes": [
      {
        "id": "universe",
        "position": {
          "x": 620,
          "y": 230
        },
        "title": "Un solo universo",
        "tag": "orden común",
        "detail": "No hay un universo privado para cada mónada: hay un mismo universo expresado desde perspectivas distintas.",
        "discourse": "§9; §§14–16",
        "monadology": "§§56–58"
      },
      {
        "id": "m1",
        "position": {
          "x": 60,
          "y": 40
        },
        "title": "Mónada A",
        "tag": "perspectiva A",
        "detail": "Expresa todo, pero distingue con mayor claridad aquello que corresponde a su situación.",
        "discourse": "§9",
        "monadology": "§§56–60"
      },
      {
        "id": "m2",
        "position": {
          "x": 60,
          "y": 410
        },
        "title": "Mónada B",
        "tag": "perspectiva B",
        "detail": "La diversidad de sustancias produce diversidad de perspectivas, no diversidad de universos.",
        "discourse": "§9",
        "monadology": "§57"
      },
      {
        "id": "m3",
        "position": {
          "x": 1190,
          "y": 40
        },
        "title": "Mónada C",
        "tag": "perspectiva C",
        "detail": "Cada mónada es un espejo viviente del universo y expresa relaciones con todas las demás.",
        "discourse": "§9",
        "monadology": "§56 · PDF p. 580"
      },
      {
        "id": "m4",
        "position": {
          "x": 1190,
          "y": 410
        },
        "title": "Mónada D",
        "tag": "perspectiva D",
        "detail": "Las mónadas están limitadas por el modo y grado de claridad de su representación, no por el objeto representado.",
        "discourse": "§§14–16",
        "monadology": "§60 · PDF p. 581"
      },
      {
        "id": "city",
        "position": {
          "x": 620,
          "y": 40
        },
        "title": "Metáfora de la ciudad",
        "tag": "puntos de vista",
        "detail": "Una misma ciudad vista desde lados diferentes parece multiplicarse: así un universo único aparece bajo infinitas perspectivas.",
        "discourse": "mundo entero expresado",
        "monadology": "§57 · PDF p. 580"
      },
      {
        "id": "body",
        "position": {
          "x": 620,
          "y": 450
        },
        "title": "Cuerpo propio",
        "tag": "mayor distinción",
        "detail": "Cada mónada representa con mayor distinción el cuerpo que le está particularmente asignado.",
        "discourse": "alma/cuerpo",
        "monadology": "§§61–63 · PDF pp. 581–582"
      }
    ],
    "edges": [
      [
        "m1",
        "universe",
        "expresa"
      ],
      [
        "m2",
        "universe",
        "expresa"
      ],
      [
        "m3",
        "universe",
        "expresa"
      ],
      [
        "m4",
        "universe",
        "expresa"
      ],
      [
        "city",
        "universe",
        "ilustra"
      ],
      [
        "universe",
        "body",
        "se distingue por"
      ]
    ]
  },
  {
    "id": "harmony",
    "roman": "VI",
    "title": "¿Cómo concuerda todo?",
    "subtitle": "armonía preestablecida · alma/cuerpo · orden moral",
    "thesis": "Si las mónadas no tienen ventanas, la concordancia universal no puede explicarse por intercambio causal directo.",
    "nodes": [
      {
        "id": "nocause",
        "position": {
          "x": 40,
          "y": 220
        },
        "title": "Sin causalidad directa",
        "tag": "problema",
        "detail": "Una mónada creada no puede introducir físicamente un estado en otra. Hay que explicar por qué sus estados parecen corresponder.",
        "discourse": "§§14–15; §33",
        "monadology": "§§7, 51–52",
        "classNote": "Dicho en clase: no hay causalidad directa mónada → mónada; la concordancia no se explica por intercambio físico."
      },
      {
        "id": "god",
        "position": {
          "x": 370,
          "y": 70
        },
        "title": "Dios ordena el conjunto",
        "tag": "coordinación",
        "detail": "Dios considera todas las sustancias al establecer el orden desde el comienzo; la dependencia es ideal, no física.",
        "discourse": "§§14–15; §§31–33",
        "monadology": "§§51–55"
      },
      {
        "id": "harmony",
        "position": {
          "x": 700,
          "y": 210
        },
        "title": "Armonía preestablecida",
        "tag": "correspondencia",
        "detail": "Cada sustancia sigue su propia ley interna y, sin embargo, sus estados concuerdan con los de las demás.",
        "discourse": "§33",
        "monadology": "§78 · PDF p. 585",
        "classNote": "Dicho en clase: Dios sincroniza originariamente las series internas de las mónadas: ésa es la armonía preestablecida."
      },
      {
        "id": "soul",
        "position": {
          "x": 1040,
          "y": 60
        },
        "title": "Alma",
        "tag": "causas finales",
        "detail": "Las almas actúan según apeticiones, fines y medios: el reino de las causas finales.",
        "discourse": "§§19–22; §33",
        "monadology": "§79"
      },
      {
        "id": "body",
        "position": {
          "x": 1040,
          "y": 360
        },
        "title": "Cuerpo",
        "tag": "causas eficientes",
        "detail": "Los cuerpos siguen las leyes de los movimientos y de las causas eficientes.",
        "discourse": "§§17–22; §33",
        "monadology": "§79"
      },
      {
        "id": "accord",
        "position": {
          "x": 1360,
          "y": 210
        },
        "title": "Concordancia alma/cuerpo",
        "tag": "dos órdenes",
        "detail": "Alma y cuerpo actúan según sus propias leyes como si se influyeran, aunque la correspondencia proviene de la armonía.",
        "discourse": "§33",
        "monadology": "§§78–81 · PDF pp. 585–586",
        "classNote": "Dicho en clase: alma y cuerpo pertenecen a órdenes coordinados, no a una interacción mecánica simple."
      },
      {
        "id": "physical",
        "position": {
          "x": 1690,
          "y": 60
        },
        "title": "Reino físico",
        "tag": "naturaleza",
        "detail": "Dios puede considerarse como arquitecto de la máquina del universo.",
        "discourse": "orden general",
        "monadology": "§§86–89"
      },
      {
        "id": "moral",
        "position": {
          "x": 1690,
          "y": 360
        },
        "title": "Reino moral",
        "tag": "gracia",
        "detail": "Los espíritus constituyen la ciudad de Dios: un mundo moral dentro del mundo natural.",
        "discourse": "§§35–37",
        "monadology": "§§83–90 · PDF pp. 586–588",
        "classNote": "Dicho en clase: el orden del mundo debe dejar espacio a voluntad, responsabilidad y mal moral."
      },
      {
        "id": "city",
        "position": {
          "x": 2020,
          "y": 210
        },
        "title": "Ciudad de Dios",
        "tag": "culminación",
        "detail": "Naturaleza y moral resultan compatibles: Dios es arquitecto del universo y monarca de la ciudad de los espíritus.",
        "discourse": "§§35–37 · PDF pp. 50–51",
        "monadology": "§§85–90"
      },
      {
        "id": "programming-analogy",
        "position": {
          "x": 40,
          "y": 650
        },
        "title": "“Programación”",
        "tag": "analogía de clase",
        "detail": "La clase usa “programación” como analogía: cada mónada despliega una serie interna coordinada con las demás.",
        "discourse": "analogía pedagógica",
        "monadology": "principio interno + armonía",
        "classNote": "Dicho en clase: no significa software literal; sirve para imaginar ley interna, secuencia de estados y coordinación originaria."
      },
      {
        "id": "freedom-order",
        "position": {
          "x": 390,
          "y": 650
        },
        "title": "Orden + libertad",
        "tag": "dicho en clase",
        "detail": "La armonía no pretende convertir al ser humano en una máquina sin elección moral; Leibniz intenta preservar voluntad y responsabilidad.",
        "discourse": "libertad y contingencia",
        "monadology": "orden moral",
        "classNote": "Dicho en clase: el mejor mundo posible incluye criaturas libres y, con ello, la posibilidad del mal moral."
      }
    ],
    "edges": [
      [
        "nocause",
        "god",
        "exige"
      ],
      [
        "god",
        "harmony",
        "establece"
      ],
      [
        "harmony",
        "soul",
        "coordina"
      ],
      [
        "harmony",
        "body",
        "coordina"
      ],
      [
        "soul",
        "accord",
        "corresponde"
      ],
      [
        "body",
        "accord",
        "corresponde"
      ],
      [
        "accord",
        "physical",
        "se integra"
      ],
      [
        "accord",
        "moral",
        "se integra"
      ],
      [
        "physical",
        "city",
        "armoniza"
      ],
      [
        "moral",
        "city",
        "culmina"
      ],
      [
        "programming-analogy",
        "harmony",
        "ilustra"
      ],
      [
        "harmony",
        "freedom-order",
        "debe compatibilizarse con"
      ],
      [
        "freedom-order",
        "moral",
        "fundamenta"
      ]
    ]
  }
]
