export const marxCommodityRoutes = [
  { id: 'all', label: 'Todo el sistema' },
  { id: 'commodity', label: 'Mercancía' },
  { id: 'value', label: 'Valor' },
  { id: 'labor', label: 'Trabajo' },
  { id: 'form1', label: 'Forma I' },
  { id: 'equivalent', label: 'Equivalente' },
  { id: 'form2', label: 'Forma II' },
  { id: 'form3', label: 'Forma III' },
  { id: 'money', label: 'Dinero' },
  { id: 'close1', label: 'Lectura fina · §1 pp. 46–51' },
  { id: 'microscope', label: 'Microscopio · Forma I' },
  { id: 'architecture', label: 'Arquitectura preparatoria' },
  { id: 'threshold', label: 'Umbral del fetichismo' },
]

export const marxCommodityPhases = [
  'Mercancía',
  'Sustancia del valor',
  'Dualidad del trabajo',
  'Forma simple',
  'Forma equivalente',
  'Forma desplegada',
  'Forma general',
  'Dinero',
  'Umbral',
]

/* BEGIN MARX_NODE_SCHEMAS */
const MARX_NODE_SCHEMAS = {
  "M01": {
    "layout": "hierarchy",
    "rootId": "wealth",
    "ariaLabel": "La riqueza capitalista se presenta como cúmulo de mercancías y la mercancía individual es su forma elemental.",
    "nodes": [
      {
        "id": "wealth",
        "label": "riqueza capitalista",
        "shape": "hexagon",
        "role": "root",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "heap",
        "label": "cúmulo de mercancías",
        "shape": "roundedRect"
      },
      {
        "id": "unit",
        "label": "mercancía individual",
        "shape": "circle",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "wealth",
        "to": "heap",
        "label": "se presenta como",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "heap",
        "to": "unit",
        "label": "su forma elemental es",
        "arrow": "forward",
        "routing": "orthogonal"
      }
    ],
    "animation": {
      "order": [
        "wealth",
        "heap",
        "unit"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M02": {
    "layout": "constellation",
    "canvas": {
      "width": 640,
      "height": 420
    },
    "ariaLabel": "La utilidad de una cosa constituye el valor de uso, que sólo se efectiviza en uso o consumo.",
    "nodes": [
      {
        "id": "utility",
        "label": "utilidad de una cosa",
        "shape": "hexagon",
        "position": {
          "x": 0.5,
          "y": 0.18
        }
      },
      {
        "id": "use-value",
        "label": "valor de uso",
        "shape": "circle",
        "position": {
          "x": 0.5,
          "y": 0.48
        },
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "use",
        "label": "uso",
        "shape": "pill",
        "position": {
          "x": 0.28,
          "y": 0.78
        }
      },
      {
        "id": "consumption",
        "label": "consumo",
        "shape": "pill",
        "position": {
          "x": 0.72,
          "y": 0.78
        }
      }
    ],
    "edges": [
      {
        "from": "utility",
        "to": "use-value",
        "label": "hace de ella",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "use-value",
        "to": "use",
        "label": "se efectiviza en",
        "arrow": "forward",
        "routing": "curved",
        "line": "dashed",
        "kind": "secondary"
      },
      {
        "from": "use-value",
        "to": "consumption",
        "label": "se efectiviza en",
        "arrow": "forward",
        "routing": "curved",
        "line": "dashed",
        "kind": "secondary"
      }
    ],
    "animation": {
      "order": [
        "utility",
        "use-value",
        "use",
        "consumption"
      ],
      "delay": 0.16,
      "nodeDuration": 0.42,
      "edgeDuration": 0.46
    }
  },
  "M03": {
    "layout": "constellation",
    "canvas": {
      "width": 700,
      "height": 420
    },
    "ariaLabel": "El valor de cambio aparece como proporción cuantitativa entre valores de uso heterogéneos.",
    "nodes": [
      {
        "id": "commodity-a",
        "label": "mercancía A",
        "shape": "diamond",
        "position": {
          "x": 0.18,
          "y": 0.5
        }
      },
      {
        "id": "ratio",
        "label": "proporción de intercambio",
        "shape": "hexagon",
        "position": {
          "x": 0.5,
          "y": 0.3
        },
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "commodity-b",
        "label": "mercancía B",
        "shape": "diamond",
        "position": {
          "x": 0.82,
          "y": 0.5
        }
      },
      {
        "id": "exchange-value",
        "label": "valor de cambio",
        "shape": "roundedRect",
        "position": {
          "x": 0.5,
          "y": 0.74
        }
      }
    ],
    "edges": [
      {
        "from": "commodity-a",
        "to": "ratio",
        "label": "entra en",
        "arrow": "double",
        "routing": "curved"
      },
      {
        "from": "commodity-b",
        "to": "ratio",
        "label": "entra en",
        "arrow": "double",
        "routing": "curved"
      },
      {
        "from": "ratio",
        "to": "exchange-value",
        "label": "aparece como",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "commodity-a",
        "commodity-b",
        "ratio",
        "exchange-value"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M04": {
    "layout": "constellation",
    "canvas": {
      "width": 700,
      "height": 420
    },
    "ariaLabel": "Dos mercancías heterogéneas se igualan porque ambas se remiten a una tercera cosa común.",
    "nodes": [
      {
        "id": "a",
        "label": "mercancía A",
        "shape": "diamond",
        "position": {
          "x": 0.18,
          "y": 0.5
        }
      },
      {
        "id": "common",
        "label": "tercera cosa común",
        "shape": "circle",
        "position": {
          "x": 0.5,
          "y": 0.5
        },
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "b",
        "label": "mercancía B",
        "shape": "diamond",
        "position": {
          "x": 0.82,
          "y": 0.5
        }
      }
    ],
    "edges": [
      {
        "from": "a",
        "to": "common",
        "label": "igual a",
        "arrow": "double",
        "routing": "straight"
      },
      {
        "from": "b",
        "to": "common",
        "label": "igual a",
        "arrow": "double",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "a",
        "b",
        "common"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M05": {
    "layout": "flow",
    "ariaLabel": "Al abstraer el valor de uso y las diferencias concretas de los trabajos, queda sólo el producto del trabajo humano.",
    "nodes": [
      {
        "id": "use-value",
        "label": "valor de uso",
        "shape": "roundedRect"
      },
      {
        "id": "abstraction",
        "label": "abstracción",
        "shape": "diamond",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "labor-product",
        "label": "producto del trabajo",
        "shape": "hexagon"
      },
      {
        "id": "human-residue",
        "label": "residuo común",
        "shape": "pill"
      }
    ],
    "edges": [
      {
        "from": "use-value",
        "to": "abstraction",
        "label": "se deja de lado",
        "arrow": "forward",
        "routing": "straight",
        "line": "dashed",
        "kind": "secondary"
      },
      {
        "from": "abstraction",
        "to": "labor-product",
        "label": "deja como resto",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "labor-product",
        "to": "human-residue",
        "label": "retiene sólo",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "use-value",
        "abstraction",
        "labor-product",
        "human-residue"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M06": {
    "layout": "hierarchy",
    "rootId": "concrete-labors",
    "ariaLabel": "Los trabajos concretos se reducen a trabajo abstractamente humano.",
    "nodes": [
      {
        "id": "concrete-labors",
        "label": "trabajos concretos",
        "shape": "hexagon",
        "role": "root"
      },
      {
        "id": "reduction",
        "label": "reducción social",
        "shape": "diamond",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "abstract-labor",
        "label": "trabajo abstractamente humano",
        "shape": "roundedRect",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "concrete-labors",
        "to": "reduction",
        "label": "se reducen a",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "reduction",
        "to": "abstract-labor",
        "label": "produce",
        "arrow": "forward",
        "routing": "orthogonal"
      }
    ],
    "animation": {
      "order": [
        "concrete-labors",
        "reduction",
        "abstract-labor"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M07": {
    "layout": "flow",
    "ariaLabel": "El valor se entiende como cristalización social del trabajo abstractamente humano.",
    "nodes": [
      {
        "id": "abstract-labor",
        "label": "trabajo abstractamente humano",
        "shape": "hexagon"
      },
      {
        "id": "crystallization",
        "label": "cristalización social",
        "shape": "diamond",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "value",
        "label": "valor",
        "shape": "circle",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "abstract-labor",
        "to": "crystallization",
        "label": "se objetiva como",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "crystallization",
        "to": "value",
        "label": "constituye",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "abstract-labor",
        "crystallization",
        "value"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M08": {
    "layout": "flow",
    "ariaLabel": "La magnitud del valor depende de la cantidad de trabajo contenida en la mercancía.",
    "nodes": [
      {
        "id": "value",
        "label": "valor",
        "shape": "circle",
        "tone": "accent"
      },
      {
        "id": "measure",
        "label": "magnitud del valor",
        "shape": "hexagon",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "quantity",
        "label": "cantidad de trabajo",
        "shape": "roundedRect"
      }
    ],
    "edges": [
      {
        "from": "value",
        "to": "measure",
        "label": "tiene",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "measure",
        "to": "quantity",
        "label": "se mide por",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "value",
        "measure",
        "quantity"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M09": {
    "layout": "hierarchy",
    "rootId": "individual-times",
    "ariaLabel": "El tiempo individual se valida socialmente como tiempo de trabajo socialmente necesario.",
    "nodes": [
      {
        "id": "individual-times",
        "label": "tiempos individuales",
        "shape": "hexagon",
        "role": "root"
      },
      {
        "id": "social-average",
        "label": "promedio social",
        "shape": "diamond",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "necessary-time",
        "label": "tiempo de trabajo socialmente necesario",
        "shape": "roundedRect",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "individual-times",
        "to": "social-average",
        "label": "se comparan con",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "social-average",
        "to": "necessary-time",
        "label": "determina",
        "arrow": "forward",
        "routing": "orthogonal"
      }
    ],
    "animation": {
      "order": [
        "individual-times",
        "social-average",
        "necessary-time"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M10": {
    "layout": "flow",
    "ariaLabel": "Cuando aumenta la productividad, disminuye el tiempo socialmente necesario y con ello el valor por unidad.",
    "nodes": [
      {
        "id": "productivity",
        "label": "productividad",
        "shape": "pill"
      },
      {
        "id": "necessary-time",
        "label": "tiempo socialmente necesario",
        "shape": "roundedRect"
      },
      {
        "id": "unit-value",
        "label": "valor por unidad",
        "shape": "circle",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "productivity",
        "to": "necessary-time",
        "label": "↑ productividad → ↓ tiempo",
        "arrow": "forward",
        "routing": "straight",
        "kind": "secondary"
      },
      {
        "from": "necessary-time",
        "to": "unit-value",
        "label": "determina",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "productivity",
        "necessary-time",
        "unit-value"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M11": {
    "layout": "flow",
    "ariaLabel": "Para tener valor, el producto debe entrar en una relación mercantil efectiva de intercambio.",
    "nodes": [
      {
        "id": "product",
        "label": "producto del trabajo",
        "shape": "roundedRect"
      },
      {
        "id": "exchange",
        "label": "relación mercantil",
        "shape": "diamond",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "value-validity",
        "label": "validez social del valor",
        "shape": "circle",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "product",
        "to": "exchange",
        "label": "entra en",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "exchange",
        "to": "value-validity",
        "label": "hace posible",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "product",
        "exchange",
        "value-validity"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M12": {
    "layout": "hierarchy",
    "rootId": "labor",
    "ariaLabel": "La clave del análisis es la dualidad del trabajo: concreto y abstracto.",
    "nodes": [
      {
        "id": "labor",
        "label": "trabajo",
        "shape": "hexagon",
        "role": "root",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "concrete",
        "label": "trabajo concreto",
        "shape": "diamond"
      },
      {
        "id": "abstract",
        "label": "trabajo abstracto",
        "shape": "diamond"
      },
      {
        "id": "use-value",
        "label": "valor de uso",
        "shape": "pill"
      },
      {
        "id": "value",
        "label": "valor",
        "shape": "pill",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "labor",
        "to": "concrete",
        "label": "por un lado",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "labor",
        "to": "abstract",
        "label": "por otro",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "concrete",
        "to": "use-value",
        "label": "produce",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "abstract",
        "to": "value",
        "label": "constituye",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "labor",
        "concrete",
        "abstract",
        "use-value",
        "value"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M13": {
    "layout": "hierarchy",
    "rootId": "useful-labors",
    "ariaLabel": "Los trabajos útiles se diferencian y forman una división social del trabajo.",
    "nodes": [
      {
        "id": "useful-labors",
        "label": "trabajos útiles",
        "shape": "hexagon",
        "role": "root"
      },
      {
        "id": "differentiation",
        "label": "diferenciación",
        "shape": "diamond"
      },
      {
        "id": "division",
        "label": "división social del trabajo",
        "shape": "roundedRect",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "needs",
        "label": "satisfacción de necesidades",
        "shape": "pill"
      }
    ],
    "edges": [
      {
        "from": "useful-labors",
        "to": "differentiation",
        "label": "se distinguen como",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "differentiation",
        "to": "division",
        "label": "configuran",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "division",
        "to": "needs",
        "label": "orientada a",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "useful-labors",
        "differentiation",
        "division",
        "needs"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M14": {
    "layout": "constellation",
    "canvas": {
      "width": 700,
      "height": 420
    },
    "ariaLabel": "La división social del trabajo no equivale sin más a producción mercantil.",
    "nodes": [
      {
        "id": "division",
        "label": "división social del trabajo",
        "shape": "roundedRect",
        "position": {
          "x": 0.24,
          "y": 0.42
        }
      },
      {
        "id": "neq",
        "label": "≠",
        "shape": "circle",
        "position": {
          "x": 0.5,
          "y": 0.42
        },
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "commodity-production",
        "label": "producción mercantil",
        "shape": "roundedRect",
        "position": {
          "x": 0.76,
          "y": 0.42
        }
      },
      {
        "id": "specificity",
        "label": "requiere intercambio de productos privados",
        "shape": "pill",
        "position": {
          "x": 0.5,
          "y": 0.76
        }
      }
    ],
    "edges": [
      {
        "from": "division",
        "to": "neq",
        "label": "no se identifica con",
        "arrow": "double",
        "routing": "straight"
      },
      {
        "from": "commodity-production",
        "to": "neq",
        "label": "no se identifica con",
        "arrow": "double",
        "routing": "straight"
      },
      {
        "from": "commodity-production",
        "to": "specificity",
        "label": "supone",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "division",
        "commodity-production",
        "neq",
        "specificity"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M15": {
    "layout": "hierarchy",
    "rootId": "labor",
    "ariaLabel": "El trabajo media el metabolismo entre ser humano y naturaleza.",
    "nodes": [
      {
        "id": "labor",
        "label": "trabajo",
        "shape": "hexagon",
        "role": "root",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "human",
        "label": "ser humano",
        "shape": "pill"
      },
      {
        "id": "nature",
        "label": "naturaleza",
        "shape": "pill"
      },
      {
        "id": "metabolism",
        "label": "metabolismo",
        "shape": "roundedRect"
      }
    ],
    "edges": [
      {
        "from": "human",
        "to": "labor",
        "label": "actúa mediante",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "nature",
        "to": "labor",
        "label": "sobre la que recae",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "labor",
        "to": "metabolism",
        "label": "media",
        "arrow": "forward",
        "routing": "orthogonal"
      }
    ],
    "animation": {
      "order": [
        "human",
        "nature",
        "labor",
        "metabolism"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M16": {
    "layout": "radial",
    "centerId": "expenditure",
    "radius": 140,
    "ariaLabel": "El trabajo humano supone gasto de cerebro, músculo, nervio y mano.",
    "nodes": [
      {
        "id": "expenditure",
        "label": "gasto de fuerza humana de trabajo",
        "shape": "circle",
        "role": "center",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "brain",
        "label": "cerebro",
        "shape": "pill"
      },
      {
        "id": "muscle",
        "label": "músculo",
        "shape": "pill"
      },
      {
        "id": "nerve",
        "label": "nervio",
        "shape": "pill"
      },
      {
        "id": "hand",
        "label": "mano",
        "shape": "pill"
      }
    ],
    "edges": [
      {
        "from": "expenditure",
        "to": "brain",
        "label": "incluye",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "expenditure",
        "to": "muscle",
        "label": "incluye",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "expenditure",
        "to": "nerve",
        "label": "incluye",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "expenditure",
        "to": "hand",
        "label": "incluye",
        "arrow": "forward",
        "routing": "curved"
      }
    ],
    "animation": {
      "order": [
        "expenditure",
        "brain",
        "muscle",
        "nerve",
        "hand"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M17": {
    "layout": "hierarchy",
    "rootId": "labor",
    "ariaLabel": "Síntesis de la dualidad del trabajo: concreto produce valor de uso y abstracto constituye valor.",
    "nodes": [
      {
        "id": "labor",
        "label": "trabajo",
        "shape": "hexagon",
        "role": "root",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "concrete",
        "label": "trabajo concreto / útil",
        "shape": "diamond"
      },
      {
        "id": "abstract",
        "label": "trabajo abstracto / humano",
        "shape": "diamond"
      },
      {
        "id": "use-value",
        "label": "valor de uso",
        "shape": "roundedRect"
      },
      {
        "id": "value",
        "label": "valor",
        "shape": "pill",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "labor",
        "to": "concrete",
        "label": "por un lado",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "labor",
        "to": "abstract",
        "label": "por otro",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "concrete",
        "to": "use-value",
        "label": "produce",
        "arrow": "double",
        "routing": "straight"
      },
      {
        "from": "abstract",
        "to": "value",
        "label": "constituye",
        "arrow": "double",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "labor",
        "concrete",
        "abstract",
        "use-value",
        "value"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M18": {
    "layout": "flow",
    "ariaLabel": "La objetividad del valor no es natural, sino puramente social.",
    "nodes": [
      {
        "id": "commodity-body",
        "label": "cuerpo de la mercancía",
        "shape": "roundedRect"
      },
      {
        "id": "social-objectivity",
        "label": "objetividad puramente social",
        "shape": "hexagon",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "value",
        "label": "valor",
        "shape": "circle",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "commodity-body",
        "to": "social-objectivity",
        "label": "no contiene por sí mismo",
        "arrow": "forward",
        "routing": "straight",
        "line": "dashed",
        "kind": "secondary"
      },
      {
        "from": "social-objectivity",
        "to": "value",
        "label": "caracteriza al",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "commodity-body",
        "social-objectivity",
        "value"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M19": {
    "layout": "flow",
    "ariaLabel": "De la forma simple se despliega la serie que conduce a la forma dineraria.",
    "nodes": [
      {
        "id": "simple",
        "label": "forma simple",
        "shape": "roundedRect"
      },
      {
        "id": "expanded",
        "label": "forma desplegada",
        "shape": "roundedRect"
      },
      {
        "id": "general",
        "label": "forma general",
        "shape": "roundedRect"
      },
      {
        "id": "money",
        "label": "forma dineraria",
        "shape": "hexagon",
        "tone": "accent",
        "emphasis": true
      }
    ],
    "edges": [
      {
        "from": "simple",
        "to": "expanded",
        "label": "se despliega en",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "expanded",
        "to": "general",
        "label": "se concentra en",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "general",
        "to": "money",
        "label": "culmina en",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "simple",
        "expanded",
        "general",
        "money"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M20": {
    "layout": "flow",
    "ariaLabel": "La forma simple o singular de valor expresa una mercancía en el cuerpo de otra.",
    "nodes": [
      {
        "id": "linen",
        "label": "20 varas de lienzo",
        "shape": "roundedRect"
      },
      {
        "id": "equation",
        "label": "=",
        "shape": "circle",
        "tone": "accent"
      },
      {
        "id": "coat",
        "label": "1 chaqueta",
        "shape": "roundedRect"
      },
      {
        "id": "simple-form",
        "label": "forma simple de valor",
        "shape": "hexagon",
        "emphasis": true,
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "linen",
        "to": "equation",
        "label": "se expresa en",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "equation",
        "to": "coat",
        "label": "mediante",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "coat",
        "to": "simple-form",
        "label": "ejemplifica la",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "linen",
        "equation",
        "coat",
        "simple-form"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M21": {
    "layout": "constellation",
    "canvas": {
      "width": 700,
      "height": 420
    },
    "ariaLabel": "La forma simple distribuye dos funciones: relativa y equivalente.",
    "nodes": [
      {
        "id": "expression",
        "label": "20 varas de lienzo = 1 chaqueta",
        "shape": "hexagon",
        "position": {
          "x": 0.5,
          "y": 0.16
        },
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "relative",
        "label": "forma relativa",
        "shape": "roundedRect",
        "position": {
          "x": 0.28,
          "y": 0.56
        }
      },
      {
        "id": "equivalent",
        "label": "forma equivalente",
        "shape": "roundedRect",
        "position": {
          "x": 0.72,
          "y": 0.56
        }
      }
    ],
    "edges": [
      {
        "from": "expression",
        "to": "relative",
        "label": "lado del lienzo",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "expression",
        "to": "equivalent",
        "label": "lado de la chaqueta",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "relative",
        "to": "equivalent",
        "label": "sólo existen conjuntamente",
        "arrow": "double",
        "routing": "straight",
        "kind": "secondary"
      }
    ],
    "animation": {
      "order": [
        "expression",
        "relative",
        "equivalent"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M22": {
    "layout": "flow",
    "ariaLabel": "Antes de medirse cuantitativamente, dos mercancías deben ser conmensurables.",
    "nodes": [
      {
        "id": "commodities",
        "label": "mercancías heterogéneas",
        "shape": "roundedRect"
      },
      {
        "id": "commensurability",
        "label": "conmensurabilidad",
        "shape": "hexagon",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "quantity",
        "label": "comparación cuantitativa",
        "shape": "pill"
      }
    ],
    "edges": [
      {
        "from": "commodities",
        "to": "commensurability",
        "label": "presuponen",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "commensurability",
        "to": "quantity",
        "label": "antes de",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "commodities",
        "commensurability",
        "quantity"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M23": {
    "layout": "flow",
    "ariaLabel": "En la forma equivalente, el cuerpo de una mercancía hace visible el valor de otra.",
    "nodes": [
      {
        "id": "value",
        "label": "valor",
        "shape": "circle",
        "tone": "accent"
      },
      {
        "id": "equivalent-body",
        "label": "cuerpo del equivalente",
        "shape": "roundedRect",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "visibility",
        "label": "visibilidad sensible",
        "shape": "hexagon"
      }
    ],
    "edges": [
      {
        "from": "value",
        "to": "equivalent-body",
        "label": "se expresa en",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "equivalent-body",
        "to": "visibility",
        "label": "hace visible",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "value",
        "equivalent-body",
        "visibility"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M24": {
    "layout": "flow",
    "ariaLabel": "La objetivación del trabajo aparece en la relación de valor.",
    "nodes": [
      {
        "id": "labor",
        "label": "trabajo humano",
        "shape": "hexagon"
      },
      {
        "id": "objectification",
        "label": "objetivación",
        "shape": "diamond",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "value-relation",
        "label": "relación de valor",
        "shape": "roundedRect",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "labor",
        "to": "objectification",
        "label": "se objetiva en",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "objectification",
        "to": "value-relation",
        "label": "aparece como",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "labor",
        "objectification",
        "value-relation"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M25": {
    "layout": "constellation",
    "canvas": {
      "width": 720,
      "height": 420
    },
    "ariaLabel": "Así como Pedro reconoce en Pablo al género humano, una mercancía expresa su valor en el cuerpo de otra.",
    "nodes": [
      {
        "id": "pedro",
        "label": "Pedro",
        "shape": "pill",
        "position": {
          "x": 0.2,
          "y": 0.6
        }
      },
      {
        "id": "genre",
        "label": "género humano",
        "shape": "circle",
        "position": {
          "x": 0.5,
          "y": 0.28
        },
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "pablo",
        "label": "Pablo",
        "shape": "pill",
        "position": {
          "x": 0.8,
          "y": 0.6
        }
      },
      {
        "id": "analogy",
        "label": "analogía de la forma relativa",
        "shape": "roundedRect",
        "position": {
          "x": 0.5,
          "y": 0.82
        }
      }
    ],
    "edges": [
      {
        "from": "pedro",
        "to": "genre",
        "label": "se reconoce en",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "pablo",
        "to": "genre",
        "label": "porta la figura de",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "genre",
        "to": "analogy",
        "label": "ilustra",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "pedro",
        "pablo",
        "genre",
        "analogy"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M26": {
    "layout": "flow",
    "ariaLabel": "La forma relativa tiene también una determinación cuantitativa.",
    "nodes": [
      {
        "id": "relative-form",
        "label": "forma relativa",
        "shape": "roundedRect"
      },
      {
        "id": "quantity",
        "label": "determinación cuantitativa",
        "shape": "hexagon",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "equation",
        "label": "x de A = y de B",
        "shape": "pill"
      }
    ],
    "edges": [
      {
        "from": "relative-form",
        "to": "quantity",
        "label": "incluye",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "quantity",
        "to": "equation",
        "label": "se expresa en",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "relative-form",
        "quantity",
        "equation"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M27": {
    "layout": "flow",
    "ariaLabel": "La mercancía en forma equivalente vale como intercambiable directamente.",
    "nodes": [
      {
        "id": "equivalent-form",
        "label": "forma equivalente",
        "shape": "hexagon",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "exchangeability",
        "label": "intercambiabilidad directa",
        "shape": "roundedRect"
      },
      {
        "id": "other-commodity",
        "label": "frente a otra mercancía",
        "shape": "pill"
      }
    ],
    "edges": [
      {
        "from": "equivalent-form",
        "to": "exchangeability",
        "label": "adquiere",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "exchangeability",
        "to": "other-commodity",
        "label": "respecto de",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "equivalent-form",
        "exchangeability",
        "other-commodity"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M28": {
    "layout": "flow",
    "ariaLabel": "La forma equivalente hace aparecer como natural una propiedad que es social.",
    "nodes": [
      {
        "id": "social-form",
        "label": "forma social",
        "shape": "roundedRect"
      },
      {
        "id": "natural-appearance",
        "label": "apariencia natural",
        "shape": "hexagon",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "equivalent",
        "label": "forma equivalente",
        "shape": "circle",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "social-form",
        "to": "natural-appearance",
        "label": "aparece como",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "natural-appearance",
        "to": "equivalent",
        "label": "en la",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "social-form",
        "natural-appearance",
        "equivalent"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M29": {
    "layout": "constellation",
    "canvas": {
      "width": 720,
      "height": 420
    },
    "ariaLabel": "La analogía del rey muestra que una propiedad aparentemente natural depende de una relación social.",
    "nodes": [
      {
        "id": "subjects",
        "label": "súbditos",
        "shape": "pill",
        "position": {
          "x": 0.2,
          "y": 0.66
        }
      },
      {
        "id": "relation",
        "label": "relación social",
        "shape": "hexagon",
        "position": {
          "x": 0.5,
          "y": 0.28
        },
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "king",
        "label": "rey",
        "shape": "roundedRect",
        "position": {
          "x": 0.8,
          "y": 0.66
        }
      },
      {
        "id": "appearance",
        "label": "parece atributo natural",
        "shape": "diamond",
        "position": {
          "x": 0.5,
          "y": 0.76
        }
      }
    ],
    "edges": [
      {
        "from": "subjects",
        "to": "relation",
        "label": "constituyen",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "relation",
        "to": "king",
        "label": "instituye al",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "king",
        "to": "appearance",
        "label": "se presenta como",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "subjects",
        "relation",
        "king",
        "appearance"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M30": {
    "layout": "flow",
    "ariaLabel": "En la forma equivalente, el trabajo concreto figura como manifestación del trabajo abstracto.",
    "nodes": [
      {
        "id": "concrete-labor",
        "label": "trabajo concreto",
        "shape": "roundedRect"
      },
      {
        "id": "equivalent-form",
        "label": "forma equivalente",
        "shape": "diamond",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "abstract-manifestation",
        "label": "manifestación de trabajo abstracto",
        "shape": "hexagon",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "concrete-labor",
        "to": "equivalent-form",
        "label": "en ella",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "equivalent-form",
        "to": "abstract-manifestation",
        "label": "figura como",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "concrete-labor",
        "equivalent-form",
        "abstract-manifestation"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M31": {
    "layout": "hierarchy",
    "rootId": "aristotle",
    "ariaLabel": "Aristóteles entrevé la igualdad, pero su horizonte histórico le impide fundarla plenamente.",
    "nodes": [
      {
        "id": "aristotle",
        "label": "Aristóteles",
        "shape": "hexagon",
        "role": "root"
      },
      {
        "id": "equality-intuition",
        "label": "intuición de igualdad",
        "shape": "diamond"
      },
      {
        "id": "historical-limit",
        "label": "límite histórico",
        "shape": "diamond"
      },
      {
        "id": "no-concept",
        "label": "sin concepto de trabajo humano igual",
        "shape": "roundedRect",
        "tone": "accent",
        "emphasis": true
      }
    ],
    "edges": [
      {
        "from": "aristotle",
        "to": "equality-intuition",
        "label": "advierte",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "aristotle",
        "to": "historical-limit",
        "label": "pero encuentra",
        "arrow": "forward",
        "routing": "orthogonal"
      },
      {
        "from": "historical-limit",
        "to": "no-concept",
        "label": "impide formular",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "aristotle",
        "equality-intuition",
        "historical-limit",
        "no-concept"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M32": {
    "layout": "flow",
    "ariaLabel": "La forma simple contiene ya el germen de formas más desarrolladas.",
    "nodes": [
      {
        "id": "simple",
        "label": "forma simple",
        "shape": "roundedRect"
      },
      {
        "id": "germ",
        "label": "germen",
        "shape": "circle",
        "tone": "accent",
        "emphasis": true
      },
      {
        "id": "developed-forms",
        "label": "formas desarrolladas",
        "shape": "hexagon"
      }
    ],
    "edges": [
      {
        "from": "simple",
        "to": "germ",
        "label": "contiene",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "germ",
        "to": "developed-forms",
        "label": "despliega",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "simple",
        "germ",
        "developed-forms"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M33": {
    "layout": "radial",
    "centerId": "relative",
    "radius": 165,
    "ariaLabel": "La forma total o desplegada expresa una mercancía en una serie abierta de equivalentes.",
    "nodes": [
      {
        "id": "relative",
        "label": "mercancía A",
        "shape": "circle",
        "role": "center",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "b",
        "label": "mercancía B",
        "shape": "diamond"
      },
      {
        "id": "c",
        "label": "mercancía C",
        "shape": "diamond"
      },
      {
        "id": "d",
        "label": "mercancía D",
        "shape": "diamond"
      },
      {
        "id": "etc",
        "label": "etc.",
        "shape": "pill"
      }
    ],
    "edges": [
      {
        "from": "relative",
        "to": "b",
        "label": "se expresa en",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "relative",
        "to": "c",
        "label": "se expresa en",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "relative",
        "to": "d",
        "label": "se expresa en",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "relative",
        "to": "etc",
        "label": "serie abierta",
        "arrow": "forward",
        "routing": "curved",
        "kind": "secondary"
      }
    ],
    "animation": {
      "order": [
        "relative",
        "b",
        "c",
        "d",
        "etc"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M34": {
    "layout": "radial",
    "centerId": "general-equivalent",
    "radius": 165,
    "ariaLabel": "La forma general de valor concentra en una mercancía la expresión de valor de todas las demás.",
    "nodes": [
      {
        "id": "general-equivalent",
        "label": "equivalente general",
        "shape": "hexagon",
        "role": "center",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "a",
        "label": "mercancía A",
        "shape": "pill"
      },
      {
        "id": "b",
        "label": "mercancía B",
        "shape": "pill"
      },
      {
        "id": "c",
        "label": "mercancía C",
        "shape": "pill"
      },
      {
        "id": "d",
        "label": "mercancía D",
        "shape": "pill"
      }
    ],
    "edges": [
      {
        "from": "a",
        "to": "general-equivalent",
        "label": "expresa su valor en",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "b",
        "to": "general-equivalent",
        "label": "expresa su valor en",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "c",
        "to": "general-equivalent",
        "label": "expresa su valor en",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "d",
        "to": "general-equivalent",
        "label": "expresa su valor en",
        "arrow": "forward",
        "routing": "curved"
      }
    ],
    "animation": {
      "order": [
        "a",
        "b",
        "c",
        "d",
        "general-equivalent"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M35": {
    "layout": "flow",
    "ariaLabel": "La forma general instituye una existencia social común y una relación omnilateral entre mercancías.",
    "nodes": [
      {
        "id": "general-form",
        "label": "forma general",
        "shape": "roundedRect"
      },
      {
        "id": "social-existence",
        "label": "existencia social común",
        "shape": "hexagon",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "omnilateral",
        "label": "relación omnilateral",
        "shape": "pill"
      }
    ],
    "edges": [
      {
        "from": "general-form",
        "to": "social-existence",
        "label": "instituye",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "social-existence",
        "to": "omnilateral",
        "label": "hace posible",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "general-form",
        "social-existence",
        "omnilateral"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M36": {
    "layout": "constellation",
    "canvas": {
      "width": 720,
      "height": 420
    },
    "ariaLabel": "La antítesis se fija: todas las mercancías quedan en forma relativa frente a un equivalente general.",
    "nodes": [
      {
        "id": "relative-side",
        "label": "mundo relativo de mercancías",
        "shape": "roundedRect",
        "position": {
          "x": 0.26,
          "y": 0.5
        }
      },
      {
        "id": "antithesis",
        "label": "antítesis fijada",
        "shape": "circle",
        "position": {
          "x": 0.5,
          "y": 0.22
        },
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "general-equivalent",
        "label": "equivalente general",
        "shape": "hexagon",
        "position": {
          "x": 0.74,
          "y": 0.5
        },
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "relative-side",
        "to": "antithesis",
        "label": "queda como",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "general-equivalent",
        "to": "antithesis",
        "label": "frente a",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "relative-side",
        "to": "general-equivalent",
        "label": "se expresa en",
        "arrow": "double",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "relative-side",
        "general-equivalent",
        "antithesis"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M37": {
    "layout": "flow",
    "ariaLabel": "El paso al dinero ocurre cuando el equivalente general se fija de modo exclusivo en una mercancía.",
    "nodes": [
      {
        "id": "general-equivalent",
        "label": "equivalente general",
        "shape": "roundedRect"
      },
      {
        "id": "fixation",
        "label": "fijación exclusiva",
        "shape": "diamond",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "money",
        "label": "dinero",
        "shape": "hexagon",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "general-equivalent",
        "to": "fixation",
        "label": "se fija en",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "fixation",
        "to": "money",
        "label": "produce",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "general-equivalent",
        "fixation",
        "money"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M38": {
    "layout": "flow",
    "ariaLabel": "La forma de dinero hace posible que el valor se exprese como precio.",
    "nodes": [
      {
        "id": "commodity",
        "label": "mercancía",
        "shape": "roundedRect"
      },
      {
        "id": "money-form",
        "label": "forma de dinero",
        "shape": "hexagon",
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "price",
        "label": "precio",
        "shape": "pill",
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "commodity",
        "to": "money-form",
        "label": "expresa su valor en",
        "arrow": "forward",
        "routing": "straight"
      },
      {
        "from": "money-form",
        "to": "price",
        "label": "bajo la forma de",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "commodity",
        "money-form",
        "price"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  },
  "M39": {
    "layout": "constellation",
    "canvas": {
      "width": 760,
      "height": 440
    },
    "ariaLabel": "La forma simple contiene en germen la forma general y la forma de dinero.",
    "nodes": [
      {
        "id": "simple",
        "label": "forma simple",
        "shape": "roundedRect",
        "position": {
          "x": 0.2,
          "y": 0.54
        }
      },
      {
        "id": "germ",
        "label": "germen",
        "shape": "circle",
        "position": {
          "x": 0.5,
          "y": 0.26
        },
        "emphasis": true,
        "tone": "accent"
      },
      {
        "id": "general",
        "label": "forma general",
        "shape": "roundedRect",
        "position": {
          "x": 0.5,
          "y": 0.74
        }
      },
      {
        "id": "money",
        "label": "dinero",
        "shape": "hexagon",
        "position": {
          "x": 0.8,
          "y": 0.54
        },
        "tone": "accent"
      }
    ],
    "edges": [
      {
        "from": "simple",
        "to": "germ",
        "label": "contiene",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "germ",
        "to": "general",
        "label": "se desarrolla como",
        "arrow": "forward",
        "routing": "curved"
      },
      {
        "from": "general",
        "to": "money",
        "label": "culmina en",
        "arrow": "forward",
        "routing": "straight"
      }
    ],
    "animation": {
      "order": [
        "simple",
        "germ",
        "general",
        "money"
      ],
      "nodeDuration": 0.34,
      "edgeDuration": 0.36
    }
  }
 };

const DIAGRAM_RELATION_TOKEN = /[→←↔↙↘⇢=≠+−∈|]/u

function buildDiagramSchema({ id, title, diagram, micro = false, critical = false }) {
  if (!Array.isArray(diagram) || diagram.length < 2) return null

  const concepts = []
  let pendingRelation = []

  diagram.forEach((rawToken) => {
    const token = String(rawToken ?? '').trim()
    if (!token) return

    if (DIAGRAM_RELATION_TOKEN.test(token)) {
      pendingRelation.push(token)
      return
    }

    concepts.push({
      label: token,
      relation: pendingRelation.join(' · '),
    })
    pendingRelation = []
  })

  if (concepts.length < 2) return null

  const shapes = ['hexagon', 'roundedRect', 'diamond', 'pill']
  const nodes = concepts.map((concept, index) => ({
    id: `${id}-schema-${index}`,
    label: concept.label,
    shape:
      index === concepts.length - 1
        ? critical ? 'circle' : 'pill'
        : shapes[index % shapes.length],
    emphasis: index === concepts.length - 1,
    tone: index === concepts.length - 1 ? 'accent' : undefined,
  }))

  const edges = concepts.slice(1).map((concept, index) => ({
    from: `${id}-schema-${index}`,
    to: `${id}-schema-${index + 1}`,
    label: concept.relation || undefined,
    arrow: 'forward',
    routing: index % 2 === 0 ? 'straight' : 'curved',
    line: micro && index % 2 === 1 ? 'dashed' : 'solid',
    kind: micro && index % 2 === 1 ? 'secondary' : undefined,
  }))

  return {
    layout: concepts.length >= 5 ? 'hierarchy' : 'flow',
    direction: concepts.length >= 5 ? 'vertical' : 'horizontal',
    rootId: concepts.length >= 5 ? nodes[0].id : undefined,
    ariaLabel: `Esquema animado de ${title}`,
    nodes,
    edges,
    animation: {
      order: nodes.map((node) => node.id),
      nodeDuration: micro ? 0.32 : 0.34,
      edgeDuration: micro ? 0.34 : 0.36,
    },
  }
}
/* END MARX_NODE_SCHEMAS */

const N = ({
  id,
  code,
  title,
  page,
  phase,
  branch,
  excerpt,
  explanation,
  role,
  question,
  dependsOn = [],
  concepts = [],
  diagram = [],
  schema = null,
  critical = false,
  micro = false,
  position,
}) => ({
  id,
  type: critical ? 'core' : 'text',
  position,
  data: {
    code,
    kind: critical ? 'Nodo nuclear' : 'Nodo textual',
    title,
    page,
    phase,
    branch,
    excerpt,
    explanation,
    role,
    question,
    dependsOn,
    concepts,
    diagram,
    schema: schema ?? MARX_NODE_SCHEMAS[id] ?? buildDiagramSchema({ id, title, diagram, micro, critical }),
    critical,
    micro,
  },
})

export const marxCommodityNodes = [
  N({
    id: 'M01',
    code: '§1.1',
    title: 'La mercancía como forma elemental',
    page: '43',
    phase: 'Mercancía',
    branch: ['commodity', 'threshold'],
    excerpt:
      '“La riqueza de las sociedades en las que domina el modo de producción capitalista se presenta como un ‘enorme cúmulo de mercancías’, y la mercancía individual como la forma elemental de esa riqueza.”',
    explanation:
      'Marx no comienza por el capital ya desarrollado, sino por la forma elemental bajo la cual aparece la riqueza capitalista. La mercancía será la célula desde la que reconstruirá las determinaciones posteriores.',
    role:
      'Fija el punto de partida del capítulo y explica por qué el análisis debe comenzar por la mercancía.',
    question:
      '¿Qué doble determinación aparece cuando Marx examina una cosa útil como mercancía?',
    concepts: ['mercancía', 'riqueza', 'forma elemental'],
    diagram: ['riqueza capitalista', '→', 'cúmulo de mercancías', '→', 'mercancía individual'],
    position: { x: 0, y: 0 },
  }),
  N({
    id: 'M02',
    code: '§1.2',
    title: 'Valor de uso',
    page: '44',
    phase: 'Mercancía',
    branch: ['commodity', 'value'],
    excerpt:
      '“La utilidad de una cosa hace de ella un valor de uso.” “El valor de uso se efectiviza únicamente en el uso o en el consumo.”',
    explanation:
      'El valor de uso remite a la utilidad concreta de la cosa. Depende de las propiedades del cuerpo de la mercancía y constituye el contenido material de la riqueza.',
    role:
      'Establece uno de los dos lados de la mercancía y servirá como aquello de lo que Marx abstrae para encontrar el valor.',
    question:
      'Si los valores de uso son cualitativamente distintos, ¿qué hace comparables a dos mercancías en el intercambio?',
    dependsOn: ['M01'],
    concepts: ['valor de uso', 'utilidad', 'consumo'],
    diagram: ['cosa útil', '→', 'uso / consumo', '→', 'valor de uso'],
    schema: {
      layout: 'constellation',
      canvas: { width: 640, height: 410 },
      ariaLabel:
        'Esquema conceptual: la utilidad hace de una cosa un valor de uso, que se efectiviza en el uso o en el consumo',
      nodes: [
        {
          id: 'utility',
          label: 'utilidad de una cosa',
          shape: 'hexagon',
          position: { x: 0.5, y: 0.16 },
        },
        {
          id: 'use-value',
          label: 'valor de uso',
          shape: 'circle',
          emphasis: true,
          tone: 'accent',
          position: { x: 0.5, y: 0.48 },
        },
        {
          id: 'use',
          label: 'uso',
          shape: 'pill',
          position: { x: 0.28, y: 0.8 },
        },
        {
          id: 'consumption',
          label: 'consumo',
          shape: 'pill',
          position: { x: 0.72, y: 0.8 },
        },
      ],
      edges: [
        {
          from: 'utility',
          to: 'use-value',
          label: 'hace de ella',
          arrow: 'forward',
          routing: 'straight',
          labelOffsetX: 58,
        },
        {
          from: 'use-value',
          to: 'use',
          label: 'se efectiviza en',
          arrow: 'forward',
          routing: 'curved',
          curvature: -0.14,
          kind: 'secondary',
          labelOffsetX: -22,
          labelOffsetY: -10,
        },
        {
          from: 'use-value',
          to: 'consumption',
          label: 'se efectiviza en',
          arrow: 'forward',
          routing: 'curved',
          curvature: 0.14,
          kind: 'secondary',
          labelOffsetX: 22,
          labelOffsetY: -10,
        },
      ],
      animation: {
        order: ['utility', 'use-value', 'use', 'consumption'],
        delay: 0.16,
        nodeDuration: 0.42,
        edgeDuration: 0.46,
      },
    },
    position: { x: 360, y: -150 },
  }),
  N({
    id: 'M03',
    code: '§1.3',
    title: 'Valor de cambio',
    page: '45',
    phase: 'Mercancía',
    branch: ['commodity', 'value'],
    excerpt:
      '“El valor de cambio se presenta como relación cuantitativa, proporción en que se intercambian valores de uso de una clase por valores de uso de otra clase.”',
    explanation:
      'El valor de cambio aparece primero como proporción variable entre cosas útiles distintas. Esas proporciones deben expresar algo común distinto de las propiedades naturales de las mercancías.',
    role:
      'Abre el problema de la equivalencia: qué permite equiparar cosas heterogéneas.',
    question:
      '¿Qué tercera cosa común debe existir para que dos mercancías heterogéneas puedan igualarse?',
    dependsOn: ['M02'],
    concepts: ['valor de cambio', 'proporción', 'intercambio'],
    diagram: ['trigo', '=', 'hierro', '→', '¿qué tienen en común?'],
    position: { x: 360, y: 180 },
  }),
  N({
      "id": "M04",
      "code": "§1.4",
      "title": "La tercera cosa común",
      "page": "46",
      "phase": "Sustancia del valor",
      "branch": [
          "value",
          "close1"
      ],
      "excerpt": "“Cada una de ellas, pues, en tanto es valor de cambio, tiene que ser reducible a esa tercera.”",
      "explanation": "La ecuación de intercambio exige algo común y de la misma magnitud en mercancías distintas. Marx ilustra el procedimiento con una reducción geométrica: lo diverso se vuelve comparable al reducirse a una expresión común. Ese contenido común no puede ser una propiedad natural de las mercancías.",
      "role": "Explicita el procedimiento de reducción que conduce desde la equivalencia observable hacia el contenido común que la hace posible.",
      "question": "¿Por qué ese tercero común no puede ser una propiedad geométrica, física, química o natural de las mercancías?",
      "dependsOn": [
          "M03"
      ],
      "concepts": [
          "equivalencia",
          "reducción",
          "tercero común",
          "magnitud"
      ],
      "diagram": [
          "mercancía A",
          "=",
          "mercancía B",
          "→",
          "tercero común"
      ],
      "schema": {
          "layout": "constellation",
          "canvas": {
              "width": 760,
              "height": 430
          },
          "nodes": [
              {
                  "id": "a",
                  "label": "mercancía A",
                  "shapeRole": "term",
                  "position": {
                      "x": 0.16,
                      "y": 0.56
                  }
              },
              {
                  "id": "b",
                  "label": "mercancía B",
                  "shapeRole": "term",
                  "position": {
                      "x": 0.84,
                      "y": 0.56
                  }
              },
              {
                  "id": "common",
                  "label": "tercera cosa común",
                  "shapeRole": "concept",
                  "emphasis": true,
                  "tone": "accent",
                  "position": {
                      "x": 0.5,
                      "y": 0.28
                  }
              },
              {
                  "id": "natural",
                  "label": "propiedades naturales",
                  "shapeRole": "mediation",
                  "position": {
                      "x": 0.5,
                      "y": 0.82
                  }
              }
          ],
          "edges": [
              {
                  "from": "a",
                  "to": "common",
                  "label": "reducible a",
                  "relationKind": "reciprocal",
                  "routing": "curved"
              },
              {
                  "from": "b",
                  "to": "common",
                  "label": "reducible a",
                  "relationKind": "reciprocal",
                  "routing": "curved"
              },
              {
                  "from": "natural",
                  "to": "common",
                  "label": "no puede ser",
                  "relationKind": "secondary"
              }
          ],
          "animation": {
              "mode": "holistic",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "position": {
          "x": 720,
          "y": 0
      }
  }),
  N({
      "id": "M05",
      "code": "§1.5",
      "title": "Abstracción del valor de uso",
      "page": "46–47",
      "phase": "Sustancia del valor",
      "branch": [
          "value",
          "labor",
          "close1"
      ],
      "excerpt": "“Si ponemos a un lado el valor de uso del cuerpo de las mercancías, únicamente les restará una propiedad: la de ser productos del trabajo.”",
      "explanation": "La abstracción avanza por capas: se pone entre paréntesis el valor de uso; se desvanecen los componentes y formas corpóreas que hacían útil al producto; deja de contar como mesa, casa o hilo; y desaparece también el carácter útil y concreto de los trabajos representados en él.",
      "role": "Despliega paso a paso la operación que permite pasar de productos cualitativamente diferentes al residuo común del trabajo humano.",
      "question": "¿Qué desaparece del producto y del trabajo cuando Marx abstrae el valor de uso?",
      "dependsOn": [
          "M04"
      ],
      "concepts": [
          "abstracción",
          "valor de uso",
          "formas corpóreas",
          "trabajo concreto"
      ],
      "diagram": [
          "valor de uso",
          "→ abstracción →",
          "formas corpóreas",
          "→",
          "trabajos concretos",
          "→",
          "residuo"
      ],
      "schema": {
          "layout": "flow",
          "nodes": [
              {
                  "id": "use",
                  "label": "valor de uso",
                  "shapeRole": "term"
              },
              {
                  "id": "abstract",
                  "label": "abstracción",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "body",
                  "label": "formas corpóreas útiles",
                  "shapeRole": "structure"
              },
              {
                  "id": "concrete",
                  "label": "trabajos concretos",
                  "shapeRole": "term"
              },
              {
                  "id": "residue",
                  "label": "residuo común",
                  "shapeRole": "result",
                  "tone": "accent"
              }
          ],
          "edges": [
              {
                  "from": "use",
                  "to": "abstract",
                  "label": "se pone a un lado",
                  "relationKind": "secondary"
              },
              {
                  "from": "abstract",
                  "to": "body",
                  "label": "desvanece",
                  "relationKind": "derives"
              },
              {
                  "from": "body",
                  "to": "concrete",
                  "label": "con ello desaparecen",
                  "relationKind": "derives"
              },
              {
                  "from": "concrete",
                  "to": "residue",
                  "label": "se reducen a",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "sequence",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          },
          "sizeHint": "wide"
      },
      "critical": true,
      "position": {
          "x": 1080,
          "y": -160
      }
  }),
  N({
      "id": "M06",
      "code": "§1.6",
      "title": "Trabajo abstractamente humano",
      "page": "47",
      "phase": "Sustancia del valor",
      "branch": [
          "value",
          "labor",
          "threshold",
          "close1"
      ],
      "excerpt": "“Éstos dejan de distinguirse, reduciéndose en su totalidad a trabajo humano indiferenciado, a trabajo abstractamente humano.”",
      "explanation": "Ebanista, albañil, hilandero y demás trabajos dejan de contar bajo su forma productiva determinada. Permanece trabajo humano indiferenciado: gasto de fuerza humana sin consideración de la forma concreta en que se gastó.",
      "role": "Nombra la determinación social común que permanece después de abstraer las diferencias cualitativas entre los trabajos.",
      "question": "¿Qué tipo de objetividad adquiere ese trabajo humano indiferenciado cuando queda acumulado en los productos?",
      "dependsOn": [
          "M05"
      ],
      "concepts": [
          "trabajo abstracto",
          "trabajo indiferenciado",
          "reducción",
          "fuerza humana"
      ],
      "diagram": [
          "ebanista",
          "albañil",
          "hilandero",
          "→",
          "trabajo humano indiferenciado"
      ],
      "schema": {
          "layout": "hierarchy",
          "rootId": "concrete",
          "sizeHint": "tall",
          "nodes": [
              {
                  "id": "concrete",
                  "label": "trabajos concretos",
                  "shapeRole": "structure",
                  "role": "root"
              },
              {
                  "id": "forms",
                  "label": "formas productivas determinadas",
                  "shapeRole": "term"
              },
              {
                  "id": "reduction",
                  "label": "reducción",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "indifferent",
                  "label": "trabajo humano indiferenciado",
                  "shapeRole": "result",
                  "tone": "accent"
              },
              {
                  "id": "abstract",
                  "label": "trabajo abstractamente humano",
                  "shapeRole": "concept",
                  "tone": "accent"
              }
          ],
          "edges": [
              {
                  "from": "concrete",
                  "to": "forms",
                  "label": "poseen",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "forms",
                  "to": "reduction",
                  "label": "se abstraen",
                  "relationKind": "secondary"
              },
              {
                  "from": "reduction",
                  "to": "indifferent",
                  "label": "deja",
                  "relationKind": "constitutes"
              },
              {
                  "from": "indifferent",
                  "to": "abstract",
                  "label": "se determina como",
                  "relationKind": "derives"
              }
          ],
          "animation": {
              "mode": "branch",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": true,
      "position": {
          "x": 1080,
          "y": 170
      }
  }),
  N({
      "id": "M07",
      "code": "§1.7",
      "title": "Valor como cristalización social",
      "page": "47",
      "phase": "Sustancia del valor",
      "branch": [
          "value",
          "threshold",
          "close1"
      ],
      "excerpt": "“En cuanto cristalizaciones de esa sustancia social común a ellas, son valores.”",
      "explanation": "Tras abstraer las formas útiles, los productos sólo testimonian gasto humano de trabajo acumulado. En cuanto cristalizaciones de esa sustancia social común, son valores. El valor de cambio queda entonces reubicado como modo de expresión o forma de manifestación del valor.",
      "role": "Identifica el contenido común descubierto por la reducción y distingue el valor mismo de su forma de manifestación.",
      "question": "¿Por qué Marx vuelve al valor de cambio como modo de expresión del valor?",
      "dependsOn": [
          "M06"
      ],
      "concepts": [
          "valor",
          "cristalización",
          "sustancia social",
          "forma de manifestación"
      ],
      "diagram": [
          "trabajo humano indiferenciado",
          "→",
          "sustancia social común",
          "→",
          "valor",
          "→",
          "valor de cambio"
      ],
      "schema": {
          "layout": "flow",
          "nodes": [
              {
                  "id": "labor",
                  "label": "trabajo humano indiferenciado",
                  "shapeRole": "structure"
              },
              {
                  "id": "social",
                  "label": "sustancia social común",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "value",
                  "label": "valor",
                  "shapeRole": "concept",
                  "tone": "accent"
              },
              {
                  "id": "exchange",
                  "label": "valor de cambio",
                  "shapeRole": "result"
              }
          ],
          "edges": [
              {
                  "from": "labor",
                  "to": "social",
                  "label": "se objetiva como",
                  "relationKind": "constitutes"
              },
              {
                  "from": "social",
                  "to": "value",
                  "label": "cristaliza como",
                  "relationKind": "constitutes"
              },
              {
                  "from": "value",
                  "to": "exchange",
                  "label": "se manifiesta en",
                  "relationKind": "transversal"
              }
          ],
          "animation": {
              "mode": "sequence",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "position": {
          "x": 1440,
          "y": 0
      }
  }),
  N({
      "id": "M08",
      "code": "§1.8",
      "title": "Magnitud del valor",
      "page": "47–48",
      "phase": "Sustancia del valor",
      "branch": [
          "value",
          "labor",
          "close1"
      ],
      "excerpt": "“La cantidad de trabajo misma se mide por su duración.”",
      "explanation": "La magnitud del valor se determina por la cantidad de la sustancia generadora de valor: trabajo. Esa cantidad se mide por la duración del trabajo, y el tiempo se expresa en fracciones como hora o día.",
      "role": "Pasa de la determinación cualitativa del valor a su medida cuantitativa.",
      "question": "Si el tiempo mide trabajo, ¿por qué el tiempo privado de un productor particularmente lento no determina por sí solo más valor?",
      "dependsOn": [
          "M07"
      ],
      "concepts": [
          "magnitud de valor",
          "cantidad de trabajo",
          "duración",
          "tiempo"
      ],
      "diagram": [
          "magnitud del valor",
          "←",
          "cantidad de trabajo",
          "←",
          "duración",
          "←",
          "tiempo"
      ],
      "schema": {
          "layout": "hierarchy",
          "rootId": "magnitude",
          "sizeHint": "tall",
          "nodes": [
              {
                  "id": "magnitude",
                  "label": "magnitud del valor",
                  "shapeRole": "concept",
                  "role": "root",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "quantity",
                  "label": "cantidad de trabajo",
                  "shapeRole": "structure"
              },
              {
                  "id": "duration",
                  "label": "duración del trabajo",
                  "shapeRole": "mediation"
              },
              {
                  "id": "time",
                  "label": "tiempo de trabajo",
                  "shapeRole": "term"
              },
              {
                  "id": "units",
                  "label": "hora · día · etc.",
                  "shapeRole": "result"
              }
          ],
          "edges": [
              {
                  "from": "magnitude",
                  "to": "quantity",
                  "label": "se determina por",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "quantity",
                  "to": "duration",
                  "label": "se mide por",
                  "relationKind": "derives"
              },
              {
                  "from": "duration",
                  "to": "time",
                  "label": "se expresa como",
                  "relationKind": "derives"
              },
              {
                  "from": "time",
                  "to": "units",
                  "label": "usa",
                  "relationKind": "secondary"
              }
          ],
          "animation": {
              "mode": "branch",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "position": {
          "x": 1800,
          "y": -160
      }
  }),
  N({
      "id": "M09",
      "code": "§1.9",
      "title": "Tiempo de trabajo socialmente necesario",
      "page": "48–49",
      "phase": "Sustancia del valor",
      "branch": [
          "value",
          "labor",
          "threshold",
          "close1"
      ],
      "excerpt": "“Sólo utiliza el tiempo de trabajo promedialmente necesario, o tiempo de trabajo socialmente necesario.”",
      "explanation": "El tiempo que genera valor no cuenta como tiempo privado aislado, sino como parte de una fuerza de trabajo social media. El tiempo socialmente necesario es el requerido bajo condiciones normales de producción, con grado social medio de destreza e intensidad.",
      "role": "Introduce la medida social que transforma tiempos privados heterogéneos en una magnitud de valor comparable.",
      "question": "¿Qué ocurre con la magnitud del valor cuando cambia el tiempo socialmente necesario por un cambio en la fuerza productiva?",
      "dependsOn": [
          "M08"
      ],
      "concepts": [
          "tiempo socialmente necesario",
          "fuerza social media",
          "destreza",
          "intensidad"
      ],
      "diagram": [
          "tiempo individual",
          "→",
          "media social",
          "→",
          "tiempo socialmente necesario",
          "→",
          "valor"
      ],
      "schema": {
          "layout": "hierarchy",
          "rootId": "individual",
          "sizeHint": "tall",
          "nodes": [
              {
                  "id": "individual",
                  "label": "tiempos individuales",
                  "shapeRole": "structure",
                  "role": "root"
              },
              {
                  "id": "social",
                  "label": "fuerza de trabajo social media",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "normal",
                  "label": "condiciones normales",
                  "shapeRole": "term"
              },
              {
                  "id": "skill",
                  "label": "destreza media",
                  "shapeRole": "term"
              },
              {
                  "id": "intensity",
                  "label": "intensidad media",
                  "shapeRole": "term"
              },
              {
                  "id": "necessary",
                  "label": "tiempo socialmente necesario",
                  "shapeRole": "concept",
                  "tone": "accent"
              }
          ],
          "edges": [
              {
                  "from": "individual",
                  "to": "social",
                  "label": "cuentan como",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "social",
                  "to": "normal",
                  "label": "supone",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "social",
                  "to": "skill",
                  "label": "supone",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "social",
                  "to": "intensity",
                  "label": "supone",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "social",
                  "to": "necessary",
                  "label": "determina",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "branch",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": true,
      "position": {
          "x": 1800,
          "y": 180
      }
  }),
  N({
      "id": "M10",
      "code": "§1.10",
      "title": "Fuerza productiva, tiempo y valor",
      "page": "49–50",
      "phase": "Sustancia del valor",
      "branch": [
          "value",
          "labor",
          "close1"
      ],
      "excerpt": "“Cuanto mayor sea la fuerza productiva del trabajo, tanto menor será el tiempo de trabajo requerido [...] tanto menor su valor.”",
      "explanation": "La fuerza productiva modifica el tiempo socialmente necesario por unidad. Marx enumera como determinantes la destreza media, la ciencia y sus aplicaciones tecnológicas, la coordinación social del proceso, la escala y eficacia de los medios de producción y las condiciones naturales. El valor varía directamente con la cantidad de trabajo e inversamente con la productividad.",
      "role": "Articula productividad, tiempo socialmente necesario y magnitud del valor.",
      "question": "¿Qué condiciones faltan para que una cosa útil o un producto del trabajo sea además mercancía?",
      "dependsOn": [
          "M09"
      ],
      "concepts": [
          "fuerza productiva",
          "tiempo necesario",
          "valor",
          "tecnología",
          "condiciones naturales"
      ],
      "diagram": [
          "productividad ↑",
          "→",
          "tiempo necesario ↓",
          "→",
          "valor ↓"
      ],
      "schema": {
          "layout": "hierarchy",
          "rootId": "productive",
          "sizeHint": "tall",
          "nodes": [
              {
                  "id": "productive",
                  "label": "fuerza productiva del trabajo",
                  "shapeRole": "concept",
                  "role": "root",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "skill",
                  "label": "destreza media",
                  "shapeRole": "term"
              },
              {
                  "id": "science",
                  "label": "ciencia y tecnología",
                  "shapeRole": "term"
              },
              {
                  "id": "coord",
                  "label": "coordinación social",
                  "shapeRole": "term"
              },
              {
                  "id": "means",
                  "label": "escala y eficacia de medios",
                  "shapeRole": "term"
              },
              {
                  "id": "nature",
                  "label": "condiciones naturales",
                  "shapeRole": "term"
              },
              {
                  "id": "time",
                  "label": "tiempo necesario",
                  "shapeRole": "mediation"
              },
              {
                  "id": "value",
                  "label": "magnitud del valor",
                  "shapeRole": "result",
                  "tone": "accent"
              }
          ],
          "edges": [
              {
                  "from": "productive",
                  "to": "skill",
                  "label": "depende de",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "productive",
                  "to": "science",
                  "label": "depende de",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "productive",
                  "to": "coord",
                  "label": "depende de",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "productive",
                  "to": "means",
                  "label": "depende de",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "productive",
                  "to": "nature",
                  "label": "depende de",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "productive",
                  "to": "time",
                  "label": "↑ productividad → ↓ tiempo",
                  "relationKind": "secondary"
              },
              {
                  "from": "time",
                  "to": "value",
                  "label": "↓ tiempo → ↓ valor",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "branch",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "position": {
          "x": 2160,
          "y": 0
      }
  }),
  N({
      "id": "M11",
      "code": "§1.11",
      "title": "Condición mercantil",
      "page": "50–51",
      "phase": "Mercancía",
      "branch": [
          "commodity",
          "value",
          "close1"
      ],
      "excerpt": "“Para transformarse en mercancía, el producto ha de transferirse a través del intercambio.”",
      "explanation": "Ser útil no basta para ser valor, y ser producto del trabajo tampoco basta para ser mercancía. Hay valores de uso no mediados por trabajo humano; también puede haber productos útiles destinados a otros sin forma mercantil. La mercancía exige un valor de uso social transferido mediante intercambio. A la vez, nada puede ser valor si no es objeto para el uso.",
      "role": "Delimita la mercancía frente a la mera utilidad, el producto del trabajo y la producción destinada a otros.",
      "question": "¿Por qué la utilidad es necesaria para que haya valor aunque utilidad y valor no sean lo mismo?",
      "dependsOn": [
          "M10"
      ],
      "concepts": [
          "mercancía",
          "valor de uso social",
          "intercambio",
          "utilidad",
          "producto del trabajo"
      ],
      "diagram": [
          "objeto útil",
          "+",
          "trabajo",
          "+",
          "para otros",
          "+",
          "intercambio",
          "→",
          "mercancía"
      ],
      "schema": {
          "layout": "hierarchy",
          "rootId": "useful",
          "sizeHint": "tall",
          "nodes": [
              {
                  "id": "useful",
                  "label": "objeto útil",
                  "shapeRole": "concept",
                  "role": "root",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "natural",
                  "label": "sin trabajo humano",
                  "shapeRole": "term"
              },
              {
                  "id": "labor",
                  "label": "producto del trabajo",
                  "shapeRole": "structure"
              },
              {
                  "id": "others",
                  "label": "para otros",
                  "shapeRole": "mediation"
              },
              {
                  "id": "exchange",
                  "label": "transferencia por intercambio",
                  "shapeRole": "mediation",
                  "tone": "accent"
              },
              {
                  "id": "commodity",
                  "label": "mercancía",
                  "shapeRole": "result",
                  "tone": "accent"
              }
          ],
          "edges": [
              {
                  "from": "useful",
                  "to": "natural",
                  "label": "puede existir",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "useful",
                  "to": "labor",
                  "label": "puede además ser",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "labor",
                  "to": "others",
                  "label": "puede producirse",
                  "relationKind": "derives"
              },
              {
                  "from": "others",
                  "to": "exchange",
                  "label": "no basta: requiere",
                  "relationKind": "constitutes"
              },
              {
                  "from": "exchange",
                  "to": "commodity",
                  "label": "hace posible",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "branch",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "position": {
          "x": 2520,
          "y": 0
      }
  }),
  N({
    id: 'M12',
    code: '§2.1',
    title: 'El eje: dualidad del trabajo',
    page: '51',
    phase: 'Dualidad del trabajo',
    branch: ['labor', 'threshold'],
    excerpt:
      '“Como este punto es el eje en torno al cual gira la comprensión de la economía política, hemos de dilucidarlo aquí con más detenimiento.”',
    explanation:
      'La mercancía es bifacética porque el trabajo que contiene también lo es: trabajo útil concreto y trabajo abstractamente humano.',
    role:
      'Marca explícitamente el punto que Marx considera central para comprender su crítica de la economía política.',
    question:
      '¿Qué produce el trabajo útil concreto y qué produce el trabajo abstractamente humano?',
    dependsOn: ['M11'],
    concepts: ['trabajo bifacético', 'trabajo útil', 'trabajo abstracto'],
    diagram: ['trabajo', '↙', 'concreto / útil', '↘', 'abstracto / humano'],
    critical: true,
    position: { x: 2880, y: -130 },
  }),
  N({
    id: 'M13',
    code: '§2.2',
    title: 'Trabajo útil y división social',
    page: '51–52',
    phase: 'Dualidad del trabajo',
    branch: ['labor', 'commodity'],
    excerpt:
      '“Llamamos, sucintamente, trabajo útil al trabajo cuya utilidad se representa así en el valor de uso de su producto.”',
    explanation:
      'Sastrería y tejido son trabajos concretos cualitativamente distintos. Esa diversidad de trabajos útiles forma una división social del trabajo.',
    role:
      'Explica el lado cualitativo del trabajo que produce valores de uso.',
    question:
      '¿Es la división social del trabajo suficiente para que haya producción de mercancías?',
    dependsOn: ['M12'],
    concepts: ['trabajo útil', 'división social', 'valor de uso'],
    diagram: ['sastrería', '→', 'chaqueta', '•', 'tejido', '→', 'lienzo'],
    position: { x: 2880, y: 200 },
  }),
  N({
    id: 'M14',
    code: '§2.3',
    title: 'División social ≠ producción mercantil',
    page: '52',
    phase: 'Dualidad del trabajo',
    branch: ['labor', 'commodity'],
    excerpt:
      '“La división social del trabajo [...] constituye una condición para la existencia misma de la producción de mercancías, si bien la producción de mercancías no es, a la inversa, condición para la existencia misma de la división social del trabajo.”',
    explanation:
      'Puede haber división social del trabajo sin intercambio mercantil. Para que los productos se enfrenten como mercancías, los trabajos deben ser privados, autónomos y recíprocamente independientes.',
    role:
      'Distingue una condición general de cooperación social de la forma histórica específicamente mercantil.',
    question:
      '¿Qué relación universal mantiene el trabajo humano con la naturaleza, con independencia de la forma social?',
    dependsOn: ['M13'],
    concepts: ['división social', 'trabajo privado', 'mercancía'],
    diagram: ['división social', '⊃', 'producción mercantil', 'pero', '≠'],
    position: { x: 3240, y: 20 },
  }),
  N({
    id: 'M15',
    code: '§2.4',
    title: 'Trabajo y metabolismo con la naturaleza',
    page: '53',
    phase: 'Dualidad del trabajo',
    branch: ['labor'],
    excerpt:
      '“Como creador de valores de uso, como trabajo útil, pues, el trabajo es [...] necesidad natural y eterna de mediar el metabolismo que se da entre el hombre y la naturaleza.”',
    explanation:
      'Marx distingue la dimensión transhistórica del trabajo útil de la forma histórica que adopta el trabajo dentro de la producción mercantil.',
    role:
      'Impide identificar trabajo en general con trabajo capitalista o con trabajo abstracto.',
    question:
      '¿Qué queda del trabajo si abstraemos su forma útil concreta?',
    dependsOn: ['M14'],
    concepts: ['metabolismo', 'naturaleza', 'trabajo útil'],
    diagram: ['ser humano', '⇄', 'trabajo útil', '⇄', 'naturaleza'],
    position: { x: 3600, y: -130 },
  }),
  N({
    id: 'M16',
    code: '§2.5',
    title: 'Gasto de fuerza humana de trabajo',
    page: '54–55',
    phase: 'Dualidad del trabajo',
    branch: ['labor', 'value'],
    excerpt:
      '“Si se prescinde del carácter determinado de la actividad productiva y por tanto del carácter útil del trabajo, lo que subsiste de éste es el ser un gasto de fuerza de trabajo humana.”',
    explanation:
      'El trabajo abstracto surge analíticamente al prescindir de las diferencias cualitativas entre actividades. Marx lo describe como gasto de fuerza humana de trabajo.',
    role:
      'Conecta la dualidad del trabajo con la sustancia del valor establecida en §1.',
    question:
      '¿Cómo se comportan cualidad y cantidad en valor de uso y valor?',
    dependsOn: ['M15', 'M06'],
    concepts: ['fuerza de trabajo', 'trabajo abstracto', 'abstracción'],
    diagram: ['formas concretas', '−', 'cualidad específica', '→', 'gasto humano'],
    position: { x: 3600, y: 200 },
  }),
  N({
    id: 'M17',
    code: '§2.6',
    title: 'Síntesis de la dualidad',
    page: '56–57',
    phase: 'Dualidad del trabajo',
    branch: ['labor', 'value', 'threshold'],
    excerpt:
      '“Todo trabajo es, por un lado, gasto de fuerza humana de trabajo [...] como constituye el valor de la mercancía. Todo trabajo, por otra parte, es gasto [...] en una forma particular y orientada a un fin [...] produce valores de uso.”',
    explanation:
      'Ésta es la síntesis conceptual: el mismo trabajo se considera bajo dos aspectos diferentes. Como concreto produce utilidad; como abstracto constituye valor.',
    role:
      'Cierra §2 y prepara la necesidad de explicar cómo ese valor, puramente social, adquiere una forma visible.',
    question:
      'Si el valor no es una propiedad sensible, ¿dónde puede aparecer?',
    dependsOn: ['M12', 'M16'],
    concepts: ['trabajo concreto', 'trabajo abstracto', 'valor', 'valor de uso'],
    diagram: ['trabajo concreto', '→', 'valor de uso', '||', 'trabajo abstracto', '→', 'valor'],
    schema: {
      layout: 'hierarchy',
      rootId: 'labor',
      ariaLabel:
        'Esquema jerárquico: el trabajo se determina como concreto y útil, productor de valor de uso, y como abstracto, constitutivo de valor',
      nodes: [
        {
          id: 'labor',
          label: 'trabajo',
          shape: 'hexagon',
          role: 'root',
          emphasis: true,
          tone: 'accent',
        },
        {
          id: 'concrete',
          label: 'trabajo concreto / útil',
          shape: 'diamond',
        },
        {
          id: 'abstract',
          label: 'trabajo abstracto / humano',
          shape: 'diamond',
        },
        {
          id: 'use-value',
          label: 'valor de uso',
          shape: 'roundedRect',
          tone: 'muted',
        },
        {
          id: 'value',
          label: 'valor',
          shape: 'pill',
          tone: 'accent',
        },
      ],
      edges: [
        {
          from: 'labor',
          to: 'concrete',
          label: 'por un lado',
          arrow: 'forward',
          routing: 'orthogonal',
        },
        {
          from: 'labor',
          to: 'abstract',
          label: 'por otro',
          arrow: 'forward',
          routing: 'orthogonal',
        },
        {
          from: 'concrete',
          to: 'use-value',
          label: 'produce',
          arrow: 'double',
          routing: 'straight',
        },
        {
          from: 'abstract',
          to: 'value',
          label: 'constituye',
          arrow: 'double',
          routing: 'straight',
        },
      ],
      animation: {
        order: ['labor', 'concrete', 'abstract', 'use-value', 'value'],
        nodeDuration: 0.28,
        edgeDuration: 0.3,
      },
    },
    critical: true,
    position: { x: 3960, y: 20 },
  }),
  N({
    id: 'M18',
    code: '§3.1',
    title: 'Objetividad puramente social del valor',
    page: '58',
    phase: 'Forma simple',
    branch: ['form1', 'value', 'threshold'],
    excerpt:
      '“Su objetividad en cuanto valores, por tanto, es de naturaleza puramente social [...] sólo puede ponerse de manifiesto en la relación social entre diversas mercancías.”',
    explanation:
      'El valor no puede verse aislando físicamente una mercancía. Su objetividad aparece únicamente en una relación social de valor con otra mercancía.',
    role:
      'Obliga a pasar de la sustancia del valor a su forma de manifestación.',
    question:
      '¿Qué tarea se propone Marx al estudiar la forma de valor?',
    dependsOn: ['M17'],
    concepts: ['objetividad social', 'relación social', 'forma de valor'],
    diagram: ['mercancía aislada', '✕ valor visible', '→', 'relación entre mercancías'],
    critical: true,
    position: { x: 4320, y: -130 },
  }),
  N({
    id: 'M19',
    code: '§3.2',
    title: 'Génesis de la forma dineraria',
    page: '59',
    phase: 'Forma simple',
    branch: ['form1', 'money', 'threshold'],
    excerpt:
      '“Se trata [...] de dilucidar la génesis de esa forma dineraria, siguiendo [...] el desarrollo de la expresión del valor [...] desde su forma más simple y opaca hasta la deslumbrante forma de dinero.”',
    explanation:
      'Marx no toma el dinero como un dato. Lo reconstruye genéticamente desde las formas de valor más simples.',
    role:
      'Define el programa de §3: Forma I → Forma II → Forma III → Forma de dinero.',
    question:
      '¿Cuál es la forma más simple en la que puede expresarse el valor de una mercancía?',
    dependsOn: ['M18'],
    concepts: ['génesis', 'forma dineraria', 'expresión de valor'],
    diagram: ['Forma I', '→', 'Forma II', '→', 'Forma III', '→', 'Dinero'],
    critical: true,
    position: { x: 4320, y: 200 },
  }),
  N({
    id: 'M20',
    code: 'I',
    title: 'Forma simple o singular de valor',
    page: '59',
    phase: 'Forma simple',
    branch: ['form1', 'threshold'],
    excerpt:
      '“20 varas de lienzo = 1 chaqueta.” “El secreto de toda forma de valor yace oculto bajo esta forma simple de valor.”',
    explanation:
      'La ecuación no es una simple igualdad cuantitativa. Distribuye dos funciones distintas: una mercancía expresa su valor y la otra presta su cuerpo como material de esa expresión.',
    role:
      'Es la célula formal de todas las formas posteriores de valor.',
    question:
      '¿Qué papeles opuestos desempeñan el lienzo y la chaqueta?',
    dependsOn: ['M19'],
    concepts: ['Forma I', 'lienzo', 'chaqueta', 'expresión de valor'],
    diagram: ['20 varas de lienzo', '=', '1 chaqueta'],
    critical: true,
    position: { x: 4680, y: 20 },
  }),
  N({
    id: 'M21',
    code: 'I.a',
    title: 'Forma relativa y forma equivalente',
    page: '60',
    phase: 'Forma simple',
    branch: ['form1', 'equivalent'],
    excerpt:
      '“La forma relativa de valor y la forma de equivalente son aspectos interconectados e inseparables [...] pero constituyen a la vez extremos excluyentes o contrapuestos.”',
    explanation:
      'En 20 varas de lienzo = 1 chaqueta, el lienzo ocupa el polo relativo: su valor se expresa. La chaqueta ocupa el polo equivalente: en ella se expresa ese valor.',
    role:
      'Fija la polaridad estructural de la forma de valor.',
    question:
      '¿Por qué una mercancía no puede ocupar simultáneamente ambos polos en la misma expresión?',
    dependsOn: ['M20'],
    concepts: ['forma relativa', 'forma equivalente', 'polaridad'],
    diagram: ['LIENZO', '→ expresa valor en →', 'CHAQUETA', 'relativo ↔ equivalente'],
    position: { x: 5040, y: -160 },
  }),
  N({
    id: 'M22',
    code: 'I.b',
    title: 'Conmensurabilidad antes de cantidad',
    page: '61',
    phase: 'Forma simple',
    branch: ['form1', 'value'],
    excerpt:
      '“Las magnitudes de cosas diferentes no llegan a ser comparables cuantitativamente sino después de su reducción a la misma unidad.”',
    explanation:
      'Antes de preguntar cuánto lienzo vale una chaqueta, Marx pregunta por qué lienzo y chaqueta pueden compararse como magnitudes de la misma denominación.',
    role:
      'Impide reducir la forma de valor a una mera proporción matemática.',
    question:
      '¿Qué significa que la chaqueta cuente como forma de existencia del valor del lienzo?',
    dependsOn: ['M21'],
    concepts: ['conmensurabilidad', 'misma unidad', 'relación de valor'],
    diagram: ['cualidades distintas', '→', 'misma unidad social', '→', 'comparación cuantitativa'],
    position: { x: 5040, y: 180 },
  }),
  N({
    id: 'M23',
    code: 'I.c',
    title: 'El cuerpo del equivalente hace visible el valor',
    page: '62–64',
    phase: 'Forma simple',
    branch: ['form1', 'equivalent', 'threshold'],
    excerpt:
      '“En esta relación, la chaqueta cuenta como forma de existencia del valor, como cosa que es valor.”',
    explanation:
      'El valor del lienzo se expresa en el cuerpo natural de otra mercancía. Así, el trabajo concreto contenido en el equivalente sirve para manifestar trabajo humano abstracto.',
    role:
      'Explica el mecanismo mediante el cual una relación social adquiere una apariencia corpórea.',
    question:
      '¿Cómo puede una forma concreta de trabajo convertirse en forma de manifestación de trabajo abstracto?',
    dependsOn: ['M22', 'M17'],
    concepts: ['cuerpo del equivalente', 'manifestación', 'trabajo abstracto'],
    diagram: ['valor del lienzo', '→', 'cuerpo chaqueta', '→', 'forma visible de valor'],
    critical: true,
    position: { x: 5400, y: 0 },
  }),
  N({
    id: 'M24',
    code: 'I.d',
    title: 'Objetivación del trabajo',
    page: '64',
    phase: 'Forma simple',
    branch: ['form1', 'value'],
    excerpt:
      '“La fuerza de trabajo humana en estado líquido [...] crea valor, pero no es valor. Se convierte en valor al solidificarse, al pasar a la forma objetiva.”',
    explanation:
      'Marx distingue actividad y objetivación: el gasto de trabajo crea valor, pero el valor existe como trabajo objetivado en el producto.',
    role:
      'Aclara por qué la forma de valor debe involucrar objetos y no sólo actividades laborales.',
    question:
      '¿Qué analogía usa Marx para explicar que una cosa se reconozca a sí misma a través de otra?',
    dependsOn: ['M23'],
    concepts: ['objetivación', 'trabajo vivo', 'valor'],
    diagram: ['trabajo líquido', '→', 'objetivación', '→', 'valor solidificado'],
    position: { x: 5760, y: -160 },
  }),
  N({
    id: 'M25',
    code: 'I.e',
    title: 'Pedro y Pablo: el género aparece en otro cuerpo',
    page: '65',
    phase: 'Forma simple',
    branch: ['form1', 'threshold'],
    excerpt:
      '“El hombre Pablo [...] cuenta para Pedro como la forma en que se manifiesta el genus [género] hombre.”',
    explanation:
      'La analogía muestra una estructura reflexiva: algo adquiere expresión de una determinación propia al verla encarnada en otro. Así, el lienzo expresa su valor en la chaqueta.',
    role:
      'Hace intuitiva la lógica de la forma relativa de valor sin convertirla en una identidad simple.',
    question:
      '¿Qué ocurre con la magnitud del valor relativo cuando cambian los valores de las mercancías relacionadas?',
    dependsOn: ['M24'],
    concepts: ['reflexión', 'género', 'forma de manifestación'],
    diagram: ['Pedro', '→', 'Pablo', '→', 'hombre visible', '||', 'lienzo → chaqueta → valor'],
    critical: true,
    position: { x: 5760, y: 180 },
  }),
  N({
    id: 'M26',
    code: 'I.f',
    title: 'Determinación cuantitativa de la forma relativa',
    page: '66–67',
    phase: 'Forma simple',
    branch: ['form1', 'value'],
    excerpt:
      '“La forma relativa de valor de una mercancía [...] no expresa simplemente que la mercancía tenga valor, sino un valor de determinada magnitud.”',
    explanation:
      'La expresión relativa depende de las variaciones de valor tanto de la mercancía cuyo valor se expresa como de la mercancía equivalente.',
    role:
      'Añade la dimensión cuantitativa una vez aclarada la relación cualitativa.',
    question:
      '¿Qué peculiaridad adquiere una mercancía cuando funciona como equivalente?',
    dependsOn: ['M25', 'M09'],
    concepts: ['magnitud relativa', 'variación', 'equivalente'],
    diagram: ['valor A cambia', '↘', 'expresión A en B', '↗', 'valor B cambia'],
    position: { x: 6120, y: 0 },
  }),
  N({
    id: 'M27',
    code: 'I.3',
    title: 'Forma de equivalente: intercambiabilidad directa',
    page: '68',
    phase: 'Forma equivalente',
    branch: ['equivalent', 'threshold'],
    excerpt:
      '“La primera peculiaridad que salta a la vista [...] es que el valor de uso se convierte en la forma en que se manifiesta su contrario, el valor.”',
    explanation:
      'La mercancía equivalente presta su forma natural para expresar valor. Por eso adquiere la forma de intercambiabilidad directa con la mercancía situada en el polo relativo.',
    role:
      'Explica la inversión formal que hará posible después el equivalente general y el dinero.',
    question:
      '¿Por qué parece que la capacidad de ser equivalente fuese una propiedad natural de la cosa?',
    dependsOn: ['M21', 'M26'],
    concepts: ['equivalente', 'intercambiabilidad directa', 'valor de uso'],
    diagram: ['forma natural B', '→', 'forma de valor A', '→', 'equivalente'],
    critical: true,
    position: { x: 6480, y: -150 },
  }),
  N({
    id: 'M28',
    code: 'I.3a',
    title: 'La apariencia natural de una forma social',
    page: '70–71',
    phase: 'Forma equivalente',
    branch: ['equivalent', 'threshold'],
    excerpt:
      '“El cuerpo de la mercancía que hace de equivalente pasa siempre por encarnación de trabajo abstractamente humano y en todos los casos es producto de un trabajo determinado, útil, concreto.”',
    explanation:
      'Aquí se condensa una inversión decisiva: una relación social entre trabajos hace que una propiedad formal parezca adherida naturalmente al cuerpo de una mercancía.',
    role:
      'Prepara directamente la lógica de apariencia que será imprescindible para comprender el fetichismo.',
    question:
      '¿Qué ejemplo político usa Marx para mostrar una relación social que parece propiedad natural de una persona?',
    dependsOn: ['M27', 'M23'],
    concepts: ['apariencia', 'forma social', 'trabajo concreto', 'trabajo abstracto'],
    diagram: ['relación social', '→', 'forma corporal', '→', 'parece propiedad natural'],
    critical: true,
    position: { x: 6480, y: 180 },
  }),
  N({
    id: 'M29',
    code: 'I.3b',
    title: 'Rey y súbditos: inversión de la relación',
    page: '71',
    phase: 'Forma equivalente',
    branch: ['equivalent', 'threshold'],
    excerpt:
      '“Este hombre, por ejemplo, es rey porque los otros hombres se comportan ante él como súbditos; éstos creen, al revés, que son súbditos porque él es rey.”',
    explanation:
      'El ejemplo muestra cómo una relación entre personas puede aparecer invertida como una propiedad intrínseca de uno de sus términos. Es una miniatura lógica de la inversión mercantil.',
    role:
      'Hace visible la diferencia entre una relación constituyente y la apariencia naturalizada que resulta de ella.',
    question:
      '¿Cómo transforma la forma de equivalente al trabajo concreto y privado contenido en la mercancía equivalente?',
    dependsOn: ['M28'],
    concepts: ['inversión', 'rey', 'súbditos', 'relación social'],
    diagram: ['otros se comportan como súbditos', '→', 'él es rey', '⇢', 'parece ser rey por naturaleza'],
    critical: true,
    position: { x: 6840, y: 0 },
  }),
  N({
    id: 'M30',
    code: 'I.3c',
    title: 'Trabajo concreto como forma de trabajo abstracto',
    page: '72–73',
    phase: 'Forma equivalente',
    branch: ['equivalent', 'labor', 'threshold'],
    excerpt:
      '“El trabajo concreto se convierte en la forma en que se manifiesta su contrario, el trabajo abstractamente humano.”',
    explanation:
      'En el equivalente, el trabajo privado concreto que produjo esa mercancía funciona socialmente como representante de trabajo humano igual.',
    role:
      'Une la teoría de la dualidad del trabajo con la teoría de la forma de valor.',
    question:
      '¿Qué condición histórica permitió, según Marx, descifrar plenamente la igualdad de los trabajos humanos?',
    dependsOn: ['M29', 'M17'],
    concepts: ['trabajo concreto', 'trabajo abstracto', 'forma social'],
    diagram: ['trabajo concreto privado', '→', 'equivalente', '→', 'trabajo abstracto social'],
    position: { x: 7200, y: -150 },
  }),
  N({
    id: 'M31',
    code: 'I.3d',
    title: 'Aristóteles y el límite histórico de la igualdad',
    page: '73–74',
    phase: 'Forma equivalente',
    branch: ['equivalent', 'threshold'],
    excerpt:
      '“El secreto de la expresión de valor, la igualdad y la validez igual de todos los trabajos por ser trabajo humano en general [...] sólo podía ser descifrado cuando el concepto de la igualdad humana poseyera ya la firmeza de un prejuicio popular.”',
    explanation:
      'Marx convierte una dificultad lógica en una cuestión histórica: la forma de valor presupone una sociedad donde la igualdad abstracta entre trabajos y personas pueda pensarse como general.',
    role:
      'Muestra que las categorías económicas tienen condiciones históricas de inteligibilidad.',
    question:
      '¿Qué limitación conserva todavía la forma simple de valor?',
    dependsOn: ['M30'],
    concepts: ['Aristóteles', 'igualdad humana', 'historicidad'],
    diagram: ['igualdad de mercancías', '→', 'igualdad de trabajos', '→', 'condición histórica'],
    critical: true,
    position: { x: 7200, y: 180 },
  }),
  N({
    id: 'M32',
    code: 'I.4',
    title: 'La forma simple como germen',
    page: '75–76',
    phase: 'Forma desplegada',
    branch: ['form1', 'form2', 'threshold'],
    excerpt:
      '“La forma simple de valor de una mercancía es a la vez la forma mercantil simple adoptada por el producto del trabajo.”',
    explanation:
      'Forma de mercancía y forma de valor se desarrollan juntas. La expresión aislada todavía es insuficiente y debe desplegarse en una serie de equivalencias.',
    role:
      'Cierra Forma I y explica por qué el análisis debe avanzar hacia una forma más desarrollada.',
    question:
      '¿Qué cambia cuando una mercancía expresa su valor en muchas mercancías distintas?',
    dependsOn: ['M31', 'M20'],
    concepts: ['forma simple', 'desarrollo', 'forma mercantil'],
    diagram: ['Forma I', '→', 'insuficiencia', '→', 'Forma II'],
    position: { x: 7560, y: 0 },
  }),
  N({
    id: 'M33',
    code: 'II',
    title: 'Forma total o desplegada de valor',
    page: '77–79',
    phase: 'Forma desplegada',
    branch: ['form2', 'threshold'],
    excerpt:
      '“El valor de una mercancía, por ejemplo el lienzo, queda expresado ahora en otros innumerables elementos del mundo de las mercancías.”',
    explanation:
      'La mercancía sale de una relación aislada y expresa su valor en una serie abierta de equivalentes particulares.',
    role:
      'Universaliza la relación de valor, pero produce una serie interminable y carente de una expresión unitaria.',
    question:
      '¿Por qué la forma desplegada genera la necesidad de invertir la serie y construir un equivalente general?',
    dependsOn: ['M32'],
    concepts: ['Forma II', 'equivalentes particulares', 'mundo mercantil'],
    diagram: ['lienzo', '=', 'chaqueta / té / café / trigo / oro / hierro / …'],
    critical: true,
    position: { x: 7920, y: -130 },
  }),
  N({
    id: 'M34',
    code: 'III',
    title: 'Forma general de valor',
    page: '80–82',
    phase: 'Forma general',
    branch: ['form3', 'threshold'],
    excerpt:
      '“La forma general del valor [...] surge tan sólo como obra común del mundo de las mercancías.”',
    explanation:
      'Ahora todas las mercancías expresan su valor en el mismo equivalente. La objetividad social del valor recibe una forma común y socialmente vigente.',
    role:
      'Convierte una serie privada de expresiones en una forma social general del mundo mercantil.',
    question:
      '¿Qué significa que el equivalente general sea socialmente excluido de la forma relativa general?',
    dependsOn: ['M33'],
    concepts: ['Forma III', 'equivalente general', 'forma social general'],
    diagram: ['chaqueta', 'té', 'café', 'trigo', 'oro', '→', '20 varas de lienzo'],
    critical: true,
    position: { x: 7920, y: 200 },
  }),
  N({
    id: 'M35',
    code: 'III.a',
    title: 'Existencia social y relación omnilateral',
    page: '81–82',
    phase: 'Forma general',
    branch: ['form3', 'threshold', 'value'],
    excerpt:
      '“La objetividad del valor de las mercancías, por ser la mera ‘existencia social’ de tales cosas, únicamente puede quedar expresada por la relación social omnilateral entre las mismas.”',
    explanation:
      'El valor necesita una forma socialmente válida, no una relación accidental entre dos objetos. La forma general hace visible esa red social total de equivalencias.',
    role:
      'Es uno de los puentes más directos hacia el problema del fetichismo: una objetividad social aparece en y como objetividad de cosas.',
    question:
      '¿Cómo se desarrolla la antítesis entre forma relativa y forma equivalente?',
    dependsOn: ['M34', 'M18'],
    concepts: ['existencia social', 'relación omnilateral', 'objetividad del valor'],
    diagram: ['relaciones múltiples', '→', 'forma común', '→', 'vigencia social'],
    critical: true,
    position: { x: 8280, y: 0 },
  }),
  N({
    id: 'M36',
    code: 'III.b',
    title: 'La antítesis se fija: relativo vs equivalente general',
    page: '83–84',
    phase: 'Forma general',
    branch: ['form3', 'equivalent', 'threshold'],
    excerpt:
      '“En el mismo grado en que se desarrolla la forma de valor en general, se desarrolla también la antítesis entre sus dos polos: la forma relativa de valor y la forma de equivalente.”',
    explanation:
      'En Forma III la polaridad ya no es reversible libremente: una mercancía queda excluida para funcionar como equivalente general.',
    role:
      'Explica por qué la intercambiabilidad directa universal no puede pertenecer simultáneamente a todas las mercancías.',
    question:
      '¿Qué tiene que ocurrir para que una mercancía particular se convierta en mercancía dineraria?',
    dependsOn: ['M35', 'M21'],
    concepts: ['antítesis', 'equivalente general', 'exclusión'],
    diagram: ['todas las mercancías', '→ relativo general', '||', 'una mercancía', '→ equivalente general'],
    position: { x: 8640, y: -130 },
  }),
  N({
    id: 'M37',
    code: 'III→IV',
    title: 'Transición al dinero',
    page: '85',
    phase: 'Dinero',
    branch: ['money', 'threshold'],
    excerpt:
      '“Tan sólo a partir del instante en que esa separación se circunscribe definitivamente a una clase específica de mercancías, la forma relativa unitaria de valor propia del mundo de las mercancías adquiere consistencia objetiva y vigencia social general.”',
    explanation:
      'El equivalente general se transforma en dinero cuando la función social queda fijada de manera estable en una mercancía específica. Históricamente, Marx señala al oro.',
    role:
      'Muestra que el dinero es una forma desarrollada de la relación de valor, no un elemento externo añadido desde fuera.',
    question:
      '¿Qué diferencia esencial hay entre la Forma III y la Forma IV?',
    dependsOn: ['M36'],
    concepts: ['dinero', 'equivalente general', 'oro', 'vigencia social'],
    diagram: ['equivalente general', '+', 'fijación social', '→', 'mercancía dineraria'],
    critical: true,
    position: { x: 8640, y: 200 },
  }),
  N({
    id: 'M38',
    code: 'IV',
    title: 'Forma de dinero y forma de precio',
    page: '85–86',
    phase: 'Dinero',
    branch: ['money', 'threshold'],
    excerpt:
      '“La expresión relativa simple del valor de una mercancía [...] en la mercancía que ya funciona como mercancía dinerada [...] es la forma de precio.”',
    explanation:
      'Una vez que el oro monopoliza la función de equivalente general, expresar el valor en oro es expresar un precio.',
    role:
      'Cierra la génesis formal: de la relación elemental entre dos mercancías a la forma monetaria.',
    question:
      '¿Por qué Marx afirma que la forma simple contiene ya el germen de la forma de dinero?',
    dependsOn: ['M37', 'M20'],
    concepts: ['Forma IV', 'precio', 'oro', 'dinero'],
    diagram: ['20 varas lienzo', '=', '2 onzas oro', '=', '2 libras esterlinas'],
    position: { x: 9000, y: 0 },
  }),
  N({
    id: 'M39',
    code: 'UMBRAL',
    title: 'La forma simple contiene el germen del dinero',
    page: '86',
    phase: 'Umbral',
    branch: ['money', 'threshold'],
    excerpt:
      '“La forma simple de la mercancía es, por consiguiente, el germen de la forma de dinero.”',
    explanation:
      'El recorrido de pp. 43–86 termina aquí. Ya están construidas mercancía, valor, trabajo abstracto, forma relativa, equivalente, equivalente general y dinero. Con ese aparato conceptual comienza en la página siguiente el análisis explícito del carácter fetichista.',
    role:
      'Funciona como nodo de frontera: resume qué debe quedar dominado antes de entrar en el apartado 4.',
    question:
      '¿Qué cambia en p. 87 cuando Marx deja la génesis formal y pregunta por el carácter místico de la mercancía?',
    dependsOn: ['M38', 'M35', 'M28', 'M17'],
    concepts: ['germen', 'dinero', 'umbral', 'fetichismo'],
    diagram: ['mercancía', '→', 'valor', '→', 'formas de valor', '→', 'dinero', '→', 'p. 87: fetichismo'],
    critical: true,
    position: { x: 9360, y: 0 },
  }),

  N({
    id: 'MX01',
    code: 'MICRO · 01',
    title: 'Forma natural y forma de valor',
    page: '57–58',
    phase: 'Forma simple',
    branch: ['microscope', 'form1', 'value'],
    excerpt: '“Forma doble: la forma natural y la forma de valor.”',
    explanation:
      'La mercancía no es solamente un cuerpo útil. Para presentarse como mercancía debe poseer, además de su forma natural sensible, una forma social en la que su valor pueda manifestarse.',
    role:
      'Separa dos planos que no deben confundirse: cuerpo útil y forma social del valor.',
    question:
      '¿Por qué la forma de valor no puede encontrarse inspeccionando físicamente la mercancía?',
    dependsOn: ['M18'],
    concepts: ['forma natural', 'forma de valor', 'dualidad'],
    diagram: ['MERCANCÍA', '↙', 'forma natural', '↘', 'forma de valor'],
    critical: true,
    micro: true,
    position: { x: 4140, y: -520 },
  }),
  N({
    id: 'MX02',
    code: 'MICRO · 02',
    title: 'Ni un átomo natural de valor',
    page: '57–58',
    phase: 'Forma simple',
    branch: ['microscope', 'form1', 'value', 'threshold'],
    excerpt: '“Ni un solo átomo de sustancia natural forma parte de su objetividad en cuanto valores.”',
    explanation:
      'El valor no es una cualidad natural escondida en el objeto. Su objetividad es social y sólo puede manifestarse en relaciones sociales entre mercancías.',
    role:
      'Explica por qué el valor exige una forma de manifestación relacional.',
    question:
      'Si el valor es puramente social, ¿qué relación puede hacerlo visible?',
    dependsOn: ['MX01'],
    concepts: ['objetividad social', 'valor', 'naturaleza'],
    diagram: ['cuerpo sensible', '≠', 'VALOR', '→', 'objetividad social'],
    critical: true,
    micro: true,
    position: { x: 4500, y: -520 },
  }),
  N({
    id: 'MX03',
    code: 'MICRO · 03',
    title: 'Papel activo y papel pasivo',
    page: '59–60',
    phase: 'Forma simple',
    branch: ['microscope', 'form1', 'equivalent'],
    excerpt: '“El lienzo expresa su valor en la chaqueta.”',
    explanation:
      'Los dos términos de la ecuación no cumplen la misma función: el lienzo expresa valor; la chaqueta presta su cuerpo para esa expresión.',
    role:
      'Evita leer 20 varas de lienzo = 1 chaqueta como una igualdad simétrica ordinaria.',
    question:
      '¿Cómo se llaman los dos polos de esta expresión?',
    dependsOn: ['M20'],
    concepts: ['papel activo', 'papel pasivo', 'expresión'],
    diagram: ['LIENZO', 'activo →', 'expresa valor', '→', 'CHAQUETA', 'pasivo'],
    critical: true,
    micro: true,
    position: { x: 4860, y: -520 },
  }),
  N({
    id: 'MX04',
    code: 'MICRO · 04',
    title: 'A = A no expresa valor',
    page: '60',
    phase: 'Forma simple',
    branch: ['microscope', 'form1'],
    excerpt: '“20 varas de lienzo = 20 varas de lienzo no constituye expresión alguna de valor.”',
    explanation:
      'Una mercancía no puede expresar su valor en sí misma. La identidad sólo afirma una cantidad del mismo valor de uso; la expresión de valor necesita otra mercancía.',
    role:
      'Muestra que la forma de valor es esencialmente relacional y requiere alteridad.',
    question:
      '¿Por qué la forma relativa necesita necesariamente un equivalente?',
    dependsOn: ['MX03', 'M21'],
    concepts: ['tautología', 'alteridad', 'relación'],
    diagram: ['A = A', '→', 'tautología', '≠', 'expresión de valor'],
    micro: true,
    position: { x: 5220, y: -520 },
  }),
  N({
    id: 'MX05',
    code: 'MICRO · 05',
    title: 'Pan de azúcar e hierro',
    page: '69',
    phase: 'Forma equivalente',
    branch: ['microscope', 'form1', 'equivalent'],
    excerpt: '“El cuerpo de la chaqueta no representa frente al lienzo más que valor.”',
    explanation:
      'Marx usa la balanza como analogía: el hierro permite expresar el peso del azúcar; de manera semejante, la chaqueta permite expresar corporalmente el valor del lienzo.',
    role:
      'Ofrece un esquema intuitivo de representación por medio de otro cuerpo.',
    question:
      '¿En qué punto deja de funcionar la analogía entre peso y valor?',
    dependsOn: ['M23'],
    concepts: ['analogía', 'peso', 'representación'],
    diagram: ['AZÚCAR', '→ peso en →', 'HIERRO', '||', 'LIENZO', '→ valor en →', 'CHAQUETA'],
    critical: true,
    micro: true,
    position: { x: 5580, y: -520 },
  }),
  N({
    id: 'MX06',
    code: 'MICRO · 06',
    title: 'Dónde se rompe la analogía',
    page: '69–70',
    phase: 'Forma equivalente',
    branch: ['microscope', 'equivalent', 'threshold'],
    excerpt: '“Su valor, algo que es puramente social.”',
    explanation:
      'El peso es una propiedad natural común a los cuerpos. El valor no lo es: la chaqueta sólo funciona como cuerpo del valor dentro de una relación social de valor.',
    role:
      'Impide naturalizar el valor y prepara el problema de la apariencia objetiva de una relación social.',
    question:
      '¿Qué apariencia surge cuando se olvida que la función equivalente existe sólo dentro de la relación?',
    dependsOn: ['MX05'],
    concepts: ['propiedad natural', 'propiedad social', 'apariencia'],
    diagram: ['PESO', '= natural', '||', 'VALOR', '= social'],
    critical: true,
    micro: true,
    position: { x: 5940, y: -520 },
  }),
  N({
    id: 'MX07',
    code: 'MICRO · 07',
    title: 'Primera peculiaridad del equivalente',
    page: '68–69',
    phase: 'Forma equivalente',
    branch: ['microscope', 'equivalent', 'threshold'],
    excerpt: '“El valor de uso se convierte en la forma en que se manifiesta [...] el valor.”',
    explanation:
      'En el polo equivalente, el cuerpo útil de la mercancía B funciona como forma de manifestación del valor de A.',
    role:
      'Formula la primera inversión de la forma equivalente.',
    question:
      '¿Por qué una función social termina pareciendo una cualidad natural del equivalente?',
    dependsOn: ['M27'],
    concepts: ['primera peculiaridad', 'valor de uso', 'valor'],
    diagram: ['valor de uso', '→ forma de manifestación →', 'VALOR'],
    critical: true,
    micro: true,
    position: { x: 6300, y: -520 },
  }),
  N({
    id: 'MX08',
    code: 'MICRO · 08',
    title: 'La equivalencia parece natural',
    page: '70–71',
    phase: 'Forma equivalente',
    branch: ['microscope', 'equivalent', 'threshold'],
    excerpt: '“La chaqueta parece poseer también por naturaleza su forma de equivalente.”',
    explanation:
      'Una función nacida de la relación social aparece adherida al cuerpo de la chaqueta como si fuese una propiedad natural, del mismo tipo que el peso o la capacidad de retener calor.',
    role:
      'Expone el mecanismo de naturalización que prepara el carácter enigmático de las formas mercantiles.',
    question:
      '¿Qué ejemplo de inversión social introduce Marx inmediatamente después?',
    dependsOn: ['MX06', 'MX07', 'M28'],
    concepts: ['naturalización', 'apariencia', 'equivalencia'],
    diagram: ['relación social', '→', 'función equivalente', '⇢', 'parece propiedad natural'],
    critical: true,
    micro: true,
    position: { x: 6660, y: -520 },
  }),
  N({
    id: 'MX09',
    code: 'MICRO · 09',
    title: 'Segunda peculiaridad del equivalente',
    page: '71–72',
    phase: 'Forma equivalente',
    branch: ['microscope', 'equivalent', 'labor', 'threshold'],
    excerpt: '“El trabajo concreto se convierte en la forma en que se manifiesta [...] el trabajo abstractamente humano.”',
    explanation:
      'La sastrería no cuenta aquí por producir ropa, sino porque el producto del sastre funciona como equivalente. Un trabajo concreto sirve de figura visible del trabajo abstracto.',
    role:
      'Traslada la inversión desde el cuerpo de la mercancía hacia el trabajo que la produjo.',
    question:
      '¿Qué tercera inversión aparece si ese trabajo concreto sigue siendo trabajo privado?',
    dependsOn: ['M30'],
    concepts: ['segunda peculiaridad', 'trabajo concreto', 'trabajo abstracto'],
    diagram: ['trabajo concreto', '→ forma de →', 'trabajo abstracto'],
    critical: true,
    micro: true,
    position: { x: 7020, y: -520 },
  }),
  N({
    id: 'MX10',
    code: 'MICRO · 10',
    title: 'Tercera peculiaridad del equivalente',
    page: '72',
    phase: 'Forma equivalente',
    branch: ['microscope', 'equivalent', 'labor', 'threshold'],
    excerpt: '“El trabajo privado adopta la forma de su contrario [...] trabajo [...] directamente social.”',
    explanation:
      'El trabajo que produjo el equivalente sigue siendo privado, pero dentro de la relación de valor funciona como trabajo inmediatamente reconocido por otro trabajo privado.',
    role:
      'Completa la tríada: valor de uso → valor; concreto → abstracto; privado → directamente social.',
    question:
      '¿Qué problema de igualdad había detectado Aristóteles?',
    dependsOn: ['MX09'],
    concepts: ['tercera peculiaridad', 'trabajo privado', 'trabajo social'],
    diagram: ['trabajo privado', '→ forma de →', 'trabajo directamente social'],
    critical: true,
    micro: true,
    position: { x: 7380, y: -520 },
  }),
  N({
    id: 'MX11',
    code: 'MICRO · 11',
    title: 'Aristóteles: igualdad y conmensurabilidad',
    page: '72–73',
    phase: 'Forma equivalente',
    branch: ['microscope', 'equivalent', 'threshold'],
    excerpt: '“El intercambio [...] no podría darse sin la igualdad.”',
    explanation:
      'Aristóteles reconoce que el intercambio de cosas heterogéneas exige tratarlas como comparables bajo alguna determinación común.',
    role:
      'Muestra que el problema lógico de la forma de valor ya había sido detectado: falta determinar qué hace iguales a cosas distintas.',
    question:
      '¿Por qué Aristóteles no pudo encontrar la sustancia de esa igualdad?',
    dependsOn: ['M31'],
    concepts: ['Aristóteles', 'igualdad', 'conmensurabilidad'],
    diagram: ['intercambio', '→', 'igualdad', '→', 'conmensurabilidad', '→', '¿igualdad de qué?'],
    critical: true,
    micro: true,
    position: { x: 7740, y: -520 },
  }),
  N({
    id: 'MX12',
    code: 'MICRO · 12',
    title: 'El límite histórico de Aristóteles',
    page: '73',
    phase: 'Forma equivalente',
    branch: ['microscope', 'equivalent', 'threshold'],
    excerpt: '“La sociedad griega se fundaba en el trabajo esclavo.”',
    explanation:
      'Para Marx, la limitación de Aristóteles no es intelectual. Su sociedad no podía convertir la igualdad abstracta de los trabajos humanos en una evidencia social general.',
    role:
      'Introduce una tesis metodológica: la inteligibilidad de categorías económicas depende también de condiciones históricas.',
    question:
      '¿Qué precisión terminológica hace Marx al cerrar la forma simple?',
    dependsOn: ['MX11'],
    concepts: ['historicidad', 'esclavitud', 'igualdad humana'],
    diagram: ['forma social histórica', '→', 'horizonte conceptual', '→', 'límite del análisis'],
    critical: true,
    micro: true,
    position: { x: 8100, y: -520 },
  }),
  N({
    id: 'MX13',
    code: 'MICRO · 13',
    title: 'Mercancía = valor de uso + valor',
    page: '74',
    phase: 'Forma simple',
    branch: ['microscope', 'form1', 'value', 'threshold'],
    excerpt: '“La mercancía es valor de uso u objeto para el uso y ‘valor’.”',
    explanation:
      'Marx corrige la fórmula abreviada “valor de uso y valor de cambio”. El valor de cambio es la forma en la que el valor se manifiesta en una relación con otra mercancía.',
    role:
      'Fija la distinción entre valor y forma de manifestación del valor antes de pasar a las formas desarrolladas.',
    question:
      '¿Por qué la forma simple debe desarrollarse después en forma desplegada y forma general?',
    dependsOn: ['M32', 'MX12'],
    concepts: ['valor', 'valor de cambio', 'forma de manifestación'],
    diagram: ['MERCANCÍA', '=', 'valor de uso', '+', 'VALOR', '→ se manifiesta como →', 'valor de cambio'],
    critical: true,
    micro: true,
    position: { x: 8460, y: -520 },
  }),
  N({
      "id": "MXV01",
      "code": "LECTURA FINA · 46A",
      "title": "La reducción geométrica como modelo",
      "page": "46",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“Un sencillo ejemplo geométrico nos ilustrará el punto.”",
      "explanation": "Marx compara la reducción de los valores de cambio con la reducción de polígonos a triángulos y del triángulo a una expresión distinta de su figura visible. Comparar exige reducir lo diverso a una magnitud común.",
      "role": "Hace visible el método de reducción antes de identificar cuál es el contenido común de las mercancías.",
      "question": "¿Qué función cumple la analogía geométrica dentro del argumento?",
      "dependsOn": [
          "M04"
      ],
      "concepts": [
          "reducción",
          "geometría",
          "comparación",
          "magnitud común"
      ],
      "diagram": [
          "polígonos",
          "→",
          "triángulos",
          "→",
          "expresión común",
          "||",
          "mercancías",
          "→",
          "tercero común"
      ],
      "schema": {
          "layout": "constellation",
          "canvas": {
              "width": 760,
              "height": 430
          },
          "nodes": [
              {
                  "id": "poly",
                  "label": "polígonos diversos",
                  "shapeRole": "term",
                  "position": {
                      "x": 0.18,
                      "y": 0.3
                  }
              },
              {
                  "id": "tri",
                  "label": "triángulos",
                  "shapeRole": "mediation",
                  "position": {
                      "x": 0.5,
                      "y": 0.3
                  }
              },
              {
                  "id": "expr",
                  "label": "expresión común",
                  "shapeRole": "result",
                  "position": {
                      "x": 0.82,
                      "y": 0.3
                  }
              },
              {
                  "id": "wares",
                  "label": "mercancías diversas",
                  "shapeRole": "term",
                  "position": {
                      "x": 0.25,
                      "y": 0.72
                  }
              },
              {
                  "id": "common",
                  "label": "tercero común",
                  "shapeRole": "concept",
                  "emphasis": true,
                  "tone": "accent",
                  "position": {
                      "x": 0.75,
                      "y": 0.72
                  }
              }
          ],
          "edges": [
              {
                  "from": "poly",
                  "to": "tri",
                  "label": "se reducen a",
                  "relationKind": "derives"
              },
              {
                  "from": "tri",
                  "to": "expr",
                  "label": "se expresan por",
                  "relationKind": "derives"
              },
              {
                  "from": "wares",
                  "to": "common",
                  "label": "se reducen a",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "holistic",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": false,
      "micro": true,
      "position": {
          "x": 720,
          "y": -620
      }
  }),
  N({
      "id": "MXV02",
      "code": "LECTURA FINA · 46B",
      "title": "El común no es propiedad natural",
      "page": "46",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“Ese algo común no puede ser una propiedad natural —geométrica, física, química o de otra índole— de las mercancías.”",
      "explanation": "Las propiedades corpóreas importan cuando hacen útiles a las mercancías. La relación de intercambio abstrae esos valores de uso; por eso el contenido común no puede ser una propiedad natural.",
      "role": "Elimina una familia completa de candidatos al fundamento de la equivalencia.",
      "question": "¿Por qué abstraer el valor de uso excluye las propiedades naturales como fundamento del valor?",
      "dependsOn": [
          "M04"
      ],
      "concepts": [
          "propiedad natural",
          "abstracción",
          "valor de uso",
          "equivalencia"
      ],
      "diagram": [
          "geométrica",
          "física",
          "química",
          "→",
          "NO tercero común"
      ],
      "schema": {
          "layout": "radial",
          "centerId": "not",
          "nodes": [
              {
                  "id": "not",
                  "label": "NO es el tercero común",
                  "shapeRole": "concept",
                  "role": "center",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "geo",
                  "label": "geométrica",
                  "shapeRole": "term"
              },
              {
                  "id": "phy",
                  "label": "física",
                  "shapeRole": "term"
              },
              {
                  "id": "chem",
                  "label": "química",
                  "shapeRole": "term"
              },
              {
                  "id": "other",
                  "label": "otra propiedad natural",
                  "shapeRole": "term"
              }
          ],
          "edges": [
              {
                  "from": "geo",
                  "to": "not",
                  "label": "excluida",
                  "relationKind": "secondary"
              },
              {
                  "from": "phy",
                  "to": "not",
                  "label": "excluida",
                  "relationKind": "secondary"
              },
              {
                  "from": "chem",
                  "to": "not",
                  "label": "excluida",
                  "relationKind": "secondary"
              },
              {
                  "from": "other",
                  "to": "not",
                  "label": "excluida",
                  "relationKind": "secondary"
              }
          ],
          "animation": {
              "mode": "radial",
              "nodeDuration": 0.32,
              "edgeDuration": 0.36
          }
      },
      "critical": false,
      "micro": true,
      "position": {
          "x": 1080,
          "y": -620
      }
  }),
  N({
      "id": "MXV03",
      "code": "LECTURA FINA · 46C",
      "title": "Cualidad y cantidad en el intercambio",
      "page": "46",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“En cuanto valores de uso, las mercancías son, ante todo, diferentes en cuanto a la cualidad.”",
      "explanation": "Como valores de uso las mercancías difieren cualitativamente; dentro de la relación de intercambio se abstrae esa cualidad y sólo pueden diferir por la cantidad en que se presentan.",
      "role": "Formula el pasaje desde diversidad cualitativa hacia comparabilidad cuantitativa.",
      "question": "¿Qué se pierde y qué permanece cuando la relación de intercambio abstrae el valor de uso?",
      "dependsOn": [
          "M04"
      ],
      "concepts": [
          "cualidad",
          "cantidad",
          "valor de uso",
          "valor de cambio"
      ],
      "diagram": [
          "valor de uso",
          "→ cualidad",
          "||",
          "valor de cambio",
          "→ cantidad"
      ],
      "schema": {
          "layout": "constellation",
          "canvas": {
              "width": 760,
              "height": 430
          },
          "nodes": [
              {
                  "id": "use",
                  "label": "valor de uso",
                  "shapeRole": "structure",
                  "position": {
                      "x": 0.25,
                      "y": 0.4
                  }
              },
              {
                  "id": "quality",
                  "label": "diferencia cualitativa",
                  "shapeRole": "result",
                  "position": {
                      "x": 0.25,
                      "y": 0.75
                  }
              },
              {
                  "id": "exchange",
                  "label": "valor de cambio",
                  "shapeRole": "structure",
                  "position": {
                      "x": 0.75,
                      "y": 0.4
                  }
              },
              {
                  "id": "quantity",
                  "label": "diferencia cuantitativa",
                  "shapeRole": "result",
                  "position": {
                      "x": 0.75,
                      "y": 0.75
                  }
              },
              {
                  "id": "abstract",
                  "label": "abstracción del valor de uso",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent",
                  "position": {
                      "x": 0.5,
                      "y": 0.15
                  }
              }
          ],
          "edges": [
              {
                  "from": "use",
                  "to": "quality",
                  "label": "se distingue por",
                  "relationKind": "derives"
              },
              {
                  "from": "abstract",
                  "to": "exchange",
                  "label": "abre el plano de",
                  "relationKind": "constitutes"
              },
              {
                  "from": "exchange",
                  "to": "quantity",
                  "label": "sólo difiere por",
                  "relationKind": "derives"
              }
          ],
          "animation": {
              "mode": "holistic",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": false,
      "micro": true,
      "position": {
          "x": 1440,
          "y": -620
      }
  }),
  N({
      "id": "MXV04",
      "code": "LECTURA FINA · 47A",
      "title": "Desaparecen mesa, casa e hilo",
      "page": "47",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“Este producto ya no es una mesa o casa o hilo o cualquier otra cosa útil.”",
      "explanation": "La abstracción hace desaparecer las formas corpóreas específicas en las que existía la utilidad. El producto queda considerado únicamente como producto del trabajo.",
      "role": "Separa la pérdida de la forma útil del paso posterior hacia la reducción de los trabajos concretos.",
      "question": "¿Por qué abstraer la forma útil del producto obliga después a abstraer el carácter útil del trabajo?",
      "dependsOn": [
          "M05"
      ],
      "concepts": [
          "forma corpórea",
          "producto",
          "abstracción",
          "utilidad"
      ],
      "diagram": [
          "mesa",
          "casa",
          "hilo",
          "→ abstracción →",
          "producto del trabajo"
      ],
      "schema": {
          "layout": "hierarchy",
          "rootId": "forms",
          "sizeHint": "tall",
          "nodes": [
              {
                  "id": "forms",
                  "label": "formas corpóreas útiles",
                  "shapeRole": "structure",
                  "role": "root"
              },
              {
                  "id": "table",
                  "label": "mesa",
                  "shapeRole": "term"
              },
              {
                  "id": "house",
                  "label": "casa",
                  "shapeRole": "term"
              },
              {
                  "id": "thread",
                  "label": "hilo",
                  "shapeRole": "term"
              },
              {
                  "id": "abstract",
                  "label": "abstracción",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "labor",
                  "label": "producto del trabajo",
                  "shapeRole": "result"
              }
          ],
          "edges": [
              {
                  "from": "forms",
                  "to": "table",
                  "label": "ejemplo",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "forms",
                  "to": "house",
                  "label": "ejemplo",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "forms",
                  "to": "thread",
                  "label": "ejemplo",
                  "relationKind": "hierarchical"
              },
              {
                  "from": "forms",
                  "to": "abstract",
                  "label": "se ponen a un lado",
                  "relationKind": "secondary"
              },
              {
                  "from": "abstract",
                  "to": "labor",
                  "label": "deja",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "branch",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": false,
      "micro": true,
      "position": {
          "x": 1800,
          "y": -620
      }
  }),
  N({
      "id": "MXV05",
      "code": "LECTURA FINA · 47B",
      "title": "Desaparecen ebanista, albañil e hilandero",
      "page": "47",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“Ya tampoco es producto del trabajo del ebanista o del albañil o del hilandero.”",
      "explanation": "Al desaparecer el carácter útil de los productos, desaparece también el carácter útil de los trabajos representados en ellos. Las diversas formas concretas dejan de distinguirse.",
      "role": "Muestra que la reducción del trabajo abstracto depende de una reducción previa de sus formas concretas.",
      "question": "¿Cuál es el residuo cuando los trabajos concretos dejan de distinguirse?",
      "dependsOn": [
          "M05"
      ],
      "concepts": [
          "ebanista",
          "albañil",
          "hilandero",
          "trabajo concreto"
      ],
      "diagram": [
          "ebanista",
          "albañil",
          "hilandero",
          "→",
          "dejan de distinguirse"
      ],
      "schema": {
          "layout": "radial",
          "centerId": "reduction",
          "nodes": [
              {
                  "id": "reduction",
                  "label": "dejan de distinguirse",
                  "shapeRole": "mediation",
                  "role": "center",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "cabinet",
                  "label": "ebanista",
                  "shapeRole": "term"
              },
              {
                  "id": "builder",
                  "label": "albañil",
                  "shapeRole": "term"
              },
              {
                  "id": "spinner",
                  "label": "hilandero",
                  "shapeRole": "term"
              },
              {
                  "id": "other",
                  "label": "otros trabajos concretos",
                  "shapeRole": "term"
              }
          ],
          "edges": [
              {
                  "from": "cabinet",
                  "to": "reduction",
                  "label": "se reduce",
                  "relationKind": "transversal"
              },
              {
                  "from": "builder",
                  "to": "reduction",
                  "label": "se reduce",
                  "relationKind": "transversal"
              },
              {
                  "from": "spinner",
                  "to": "reduction",
                  "label": "se reduce",
                  "relationKind": "transversal"
              },
              {
                  "from": "other",
                  "to": "reduction",
                  "label": "se reduce",
                  "relationKind": "transversal"
              }
          ],
          "animation": {
              "mode": "radial",
              "nodeDuration": 0.32,
              "edgeDuration": 0.36
          }
      },
      "critical": false,
      "micro": true,
      "position": {
          "x": 2160,
          "y": -620
      }
  }),
  N({
      "id": "MXV06",
      "code": "LECTURA FINA · 47C",
      "title": "El residuo: objetividad social del trabajo humano",
      "page": "47",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“Nada ha quedado de ellos salvo una misma objetividad espectral, una mera gelatina de trabajo humano indiferenciado.”",
      "explanation": "Las diferencias sensibles y productivas desaparecen. El residuo no es una nueva propiedad natural, sino objetivación social de gasto humano de trabajo acumulado en los productos.",
      "role": "Conecta el trabajo humano indiferenciado con la objetividad que Marx llamará valor.",
      "question": "¿Cómo pasa este residuo a ser determinado como valor?",
      "dependsOn": [
          "M06"
      ],
      "concepts": [
          "residuo",
          "objetividad",
          "trabajo humano indiferenciado",
          "valor"
      ],
      "diagram": [
          "trabajo humano indiferenciado",
          "→",
          "objetividad social",
          "→",
          "valor"
      ],
      "schema": {
          "layout": "flow",
          "nodes": [
              {
                  "id": "labor",
                  "label": "trabajo humano indiferenciado",
                  "shapeRole": "structure"
              },
              {
                  "id": "object",
                  "label": "objetividad social",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "value",
                  "label": "valor",
                  "shapeRole": "concept",
                  "tone": "accent"
              }
          ],
          "edges": [
              {
                  "from": "labor",
                  "to": "object",
                  "label": "se objetiva como",
                  "relationKind": "constitutes"
              },
              {
                  "from": "object",
                  "to": "value",
                  "label": "cristaliza como",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "sequence",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": true,
      "micro": true,
      "position": {
          "x": 2520,
          "y": -620
      }
  }),
  N({
      "id": "MXV07",
      "code": "LECTURA FINA · 47D",
      "title": "Valor de cambio como forma de manifestación",
      "page": "47",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“El valor de cambio como modo de expresión o forma de manifestación necesaria del valor.”",
      "explanation": "Después de identificar el valor como contenido común, Marx vuelve al valor de cambio y lo reubica: no es el contenido último, sino su modo de expresión o forma de manifestación.",
      "role": "Distingue contenido y forma de manifestación y prepara el posterior análisis de la forma de valor.",
      "question": "¿Qué diferencia hay entre valor y valor de cambio después de esta determinación?",
      "dependsOn": [
          "M07"
      ],
      "concepts": [
          "valor",
          "valor de cambio",
          "modo de expresión",
          "forma de manifestación"
      ],
      "diagram": [
          "valor",
          "→",
          "forma de manifestación",
          "→",
          "valor de cambio"
      ],
      "schema": {
          "layout": "flow",
          "nodes": [
              {
                  "id": "value",
                  "label": "valor",
                  "shapeRole": "concept",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "manifest",
                  "label": "forma de manifestación",
                  "shapeRole": "mediation"
              },
              {
                  "id": "exchange",
                  "label": "valor de cambio",
                  "shapeRole": "result"
              }
          ],
          "edges": [
              {
                  "from": "value",
                  "to": "manifest",
                  "label": "requiere",
                  "relationKind": "constitutes"
              },
              {
                  "from": "manifest",
                  "to": "exchange",
                  "label": "aparece como",
                  "relationKind": "derives"
              }
          ],
          "animation": {
              "mode": "sequence",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": true,
      "micro": true,
      "position": {
          "x": 900,
          "y": 620
      }
  }),
  N({
      "id": "MXV08",
      "code": "LECTURA FINA · 48A",
      "title": "Cantidad de trabajo → duración → tiempo",
      "page": "48",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“La cantidad de trabajo misma se mide por su duración.”",
      "explanation": "La cantidad de trabajo se mide por duración, y el tiempo reconoce patrones en fracciones temporales como hora o día.",
      "role": "Hace explícita la cadena métrica que suele comprimirse en la fórmula “el valor se mide por tiempo de trabajo”.",
      "question": "¿Por qué esta medida temporal todavía necesita una determinación social adicional?",
      "dependsOn": [
          "M08"
      ],
      "concepts": [
          "cantidad de trabajo",
          "duración",
          "tiempo",
          "medida"
      ],
      "diagram": [
          "cantidad de trabajo",
          "→",
          "duración",
          "→",
          "tiempo",
          "→",
          "hora / día"
      ],
      "schema": {
          "layout": "flow",
          "nodes": [
              {
                  "id": "quantity",
                  "label": "cantidad de trabajo",
                  "shapeRole": "structure"
              },
              {
                  "id": "duration",
                  "label": "duración",
                  "shapeRole": "mediation"
              },
              {
                  "id": "time",
                  "label": "tiempo de trabajo",
                  "shapeRole": "concept",
                  "tone": "accent"
              },
              {
                  "id": "units",
                  "label": "hora · día · etc.",
                  "shapeRole": "result"
              }
          ],
          "edges": [
              {
                  "from": "quantity",
                  "to": "duration",
                  "label": "se mide por",
                  "relationKind": "derives"
              },
              {
                  "from": "duration",
                  "to": "time",
                  "label": "se expresa como",
                  "relationKind": "derives"
              },
              {
                  "from": "time",
                  "to": "units",
                  "label": "usa",
                  "relationKind": "secondary"
              }
          ],
          "animation": {
              "mode": "sequence",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": false,
      "micro": true,
      "position": {
          "x": 1260,
          "y": 620
      }
  }),
  N({
      "id": "MXV09",
      "code": "LECTURA FINA · 48B",
      "title": "La lentitud individual no crea más valor",
      "page": "48",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“Sólo utiliza el tiempo de trabajo promedialmente necesario.”",
      "explanation": "Si más tiempo individual significara más valor, el productor lento produciría una mercancía más valiosa. Marx lo rechaza: el trabajo individual cuenta sólo en cuanto opera como fuerza de trabajo social media.",
      "role": "Distingue tiempo privado efectivamente gastado y tiempo social que cuenta para el valor.",
      "question": "¿Qué convierte una hora privada de trabajo en una cantidad socialmente válida?",
      "dependsOn": [
          "M09"
      ],
      "concepts": [
          "tiempo individual",
          "media social",
          "lentitud",
          "valor"
      ],
      "diagram": [
          "más lentitud individual",
          "≠",
          "más valor",
          "→",
          "media social"
      ],
      "schema": {
          "layout": "constellation",
          "canvas": {
              "width": 760,
              "height": 430
          },
          "nodes": [
              {
                  "id": "slow",
                  "label": "más tiempo individual",
                  "shapeRole": "term",
                  "position": {
                      "x": 0.18,
                      "y": 0.55
                  }
              },
              {
                  "id": "neq",
                  "label": "≠",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent",
                  "position": {
                      "x": 0.5,
                      "y": 0.55
                  }
              },
              {
                  "id": "value",
                  "label": "más valor",
                  "shapeRole": "result",
                  "position": {
                      "x": 0.82,
                      "y": 0.55
                  }
              },
              {
                  "id": "social",
                  "label": "fuerza de trabajo social media",
                  "shapeRole": "concept",
                  "tone": "accent",
                  "position": {
                      "x": 0.5,
                      "y": 0.18
                  }
              }
          ],
          "edges": [
              {
                  "from": "slow",
                  "to": "neq",
                  "label": "no implica",
                  "relationKind": "secondary"
              },
              {
                  "from": "value",
                  "to": "neq",
                  "label": "no se sigue",
                  "relationKind": "secondary"
              },
              {
                  "from": "social",
                  "to": "neq",
                  "label": "porque cuenta la",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "holistic",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": false,
      "micro": true,
      "position": {
          "x": 1620,
          "y": 620
      }
  }),
  N({
      "id": "MXV10",
      "code": "LECTURA FINA · 49A",
      "title": "Igual trabajo, igual magnitud de valor",
      "page": "49",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“Las mercancías que contienen cantidades iguales de trabajo [...] tienen la misma magnitud de valor.”",
      "explanation": "Una vez establecido el tiempo socialmente necesario, cantidades iguales de trabajo socialmente válido corresponden a igual magnitud de valor.",
      "role": "Traduce la medida social del trabajo a una regla comparativa entre magnitudes de valor.",
      "question": "¿Qué cambia esta igualdad cuando varía la fuerza productiva del trabajo?",
      "dependsOn": [
          "M09"
      ],
      "concepts": [
          "igual trabajo",
          "magnitud de valor",
          "tiempo necesario",
          "comparación"
      ],
      "diagram": [
          "trabajo social A = trabajo social B",
          "→",
          "valor A = valor B"
      ],
      "schema": {
          "layout": "flow",
          "nodes": [
              {
                  "id": "labor",
                  "label": "cantidades iguales de trabajo",
                  "shapeRole": "structure"
              },
              {
                  "id": "equal",
                  "label": "igualdad social",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "value",
                  "label": "misma magnitud de valor",
                  "shapeRole": "result",
                  "tone": "accent"
              }
          ],
          "edges": [
              {
                  "from": "labor",
                  "to": "equal",
                  "label": "validadas socialmente",
                  "relationKind": "constitutes"
              },
              {
                  "from": "equal",
                  "to": "value",
                  "label": "implican",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "sequence",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": false,
      "micro": true,
      "position": {
          "x": 1980,
          "y": 620
      }
  }),
  N({
      "id": "MXV11",
      "code": "LECTURA FINA · 49B",
      "title": "Qué determina la fuerza productiva",
      "page": "49",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“La fuerza productiva del trabajo está determinada por múltiples circunstancias.”",
      "explanation": "Marx enumera destreza media, desarrollo de la ciencia y aplicaciones tecnológicas, coordinación social del proceso, escala y eficacia de los medios de producción y condiciones naturales.",
      "role": "Evita tratar la productividad como una variable simple o puramente técnica.",
      "question": "¿Cómo se traduce un cambio en estos factores en tiempo necesario y valor?",
      "dependsOn": [
          "M10"
      ],
      "concepts": [
          "productividad",
          "destreza",
          "ciencia",
          "tecnología",
          "coordinación",
          "naturaleza"
      ],
      "diagram": [
          "destreza",
          "ciencia",
          "coordinación",
          "medios",
          "naturaleza",
          "→",
          "fuerza productiva"
      ],
      "schema": {
          "layout": "radial",
          "centerId": "productive",
          "nodes": [
              {
                  "id": "productive",
                  "label": "fuerza productiva",
                  "shapeRole": "concept",
                  "role": "center",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "skill",
                  "label": "destreza media",
                  "shapeRole": "term"
              },
              {
                  "id": "science",
                  "label": "ciencia y tecnología",
                  "shapeRole": "term"
              },
              {
                  "id": "coord",
                  "label": "coordinación social",
                  "shapeRole": "term"
              },
              {
                  "id": "means",
                  "label": "medios de producción",
                  "shapeRole": "term"
              },
              {
                  "id": "nature",
                  "label": "condiciones naturales",
                  "shapeRole": "term"
              }
          ],
          "edges": [
              {
                  "from": "skill",
                  "to": "productive",
                  "label": "determina",
                  "relationKind": "transversal"
              },
              {
                  "from": "science",
                  "to": "productive",
                  "label": "determina",
                  "relationKind": "transversal"
              },
              {
                  "from": "coord",
                  "to": "productive",
                  "label": "determina",
                  "relationKind": "transversal"
              },
              {
                  "from": "means",
                  "to": "productive",
                  "label": "determina",
                  "relationKind": "transversal"
              },
              {
                  "from": "nature",
                  "to": "productive",
                  "label": "determina",
                  "relationKind": "transversal"
              }
          ],
          "animation": {
              "mode": "radial",
              "nodeDuration": 0.32,
              "edgeDuration": 0.36
          }
      },
      "critical": false,
      "micro": true,
      "position": {
          "x": 2340,
          "y": 620
      }
  }),
  N({
      "id": "MXV12",
      "code": "LECTURA FINA · 49–50",
      "title": "Valor y productividad varían en sentido inverso",
      "page": "49–50",
      "phase": "Sustancia del valor",
      "branch": [
          "close1",
          "value",
          "labor"
      ],
      "excerpt": "“La magnitud de valor [...] varía en razón directa a la cantidad de trabajo [...] e inversa a la fuerza productiva.”",
      "explanation": "Mayor productividad reduce el tiempo socialmente necesario y con ello el trabajo cristalizado en cada unidad; menor productividad hace lo contrario.",
      "role": "Fija la relación cuantitativa entre productividad, tiempo socialmente necesario y valor por unidad.",
      "question": "¿Puede existir valor de uso sin valor, y qué muestra eso sobre utilidad y trabajo?",
      "dependsOn": [
          "M10"
      ],
      "concepts": [
          "productividad",
          "cantidad de trabajo",
          "valor",
          "relación inversa"
      ],
      "diagram": [
          "productividad ↑",
          "→",
          "tiempo ↓",
          "→",
          "valor ↓",
          "||",
          "productividad ↓",
          "→",
          "tiempo ↑",
          "→",
          "valor ↑"
      ],
      "schema": {
          "layout": "constellation",
          "canvas": {
              "width": 760,
              "height": 430
          },
          "nodes": [
              {
                  "id": "up",
                  "label": "productividad ↑",
                  "shapeRole": "structure",
                  "position": {
                      "x": 0.16,
                      "y": 0.28
                  }
              },
              {
                  "id": "td",
                  "label": "tiempo necesario ↓",
                  "shapeRole": "mediation",
                  "position": {
                      "x": 0.5,
                      "y": 0.28
                  }
              },
              {
                  "id": "vd",
                  "label": "valor ↓",
                  "shapeRole": "result",
                  "tone": "accent",
                  "position": {
                      "x": 0.84,
                      "y": 0.28
                  }
              },
              {
                  "id": "down",
                  "label": "productividad ↓",
                  "shapeRole": "structure",
                  "position": {
                      "x": 0.16,
                      "y": 0.72
                  }
              },
              {
                  "id": "tu",
                  "label": "tiempo necesario ↑",
                  "shapeRole": "mediation",
                  "position": {
                      "x": 0.5,
                      "y": 0.72
                  }
              },
              {
                  "id": "vu",
                  "label": "valor ↑",
                  "shapeRole": "result",
                  "tone": "accent",
                  "position": {
                      "x": 0.84,
                      "y": 0.72
                  }
              }
          ],
          "edges": [
              {
                  "from": "up",
                  "to": "td",
                  "label": "reduce",
                  "relationKind": "derives"
              },
              {
                  "from": "td",
                  "to": "vd",
                  "label": "reduce",
                  "relationKind": "constitutes"
              },
              {
                  "from": "down",
                  "to": "tu",
                  "label": "aumenta",
                  "relationKind": "derives"
              },
              {
                  "from": "tu",
                  "to": "vu",
                  "label": "aumenta",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "holistic",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": true,
      "micro": true,
      "position": {
          "x": 2700,
          "y": 620
      }
  }),
  N({
      "id": "MXV13",
      "code": "LECTURA FINA · 50A",
      "title": "Valor de uso sin valor",
      "page": "50",
      "phase": "Mercancía",
      "branch": [
          "close1",
          "commodity",
          "value"
      ],
      "excerpt": "“Una cosa puede ser valor de uso y no ser valor.”",
      "explanation": "La utilidad no implica valor. Marx menciona bienes útiles cuya utilidad no ha sido mediada por trabajo humano: aire, tierra virgen, praderas o bosques naturales.",
      "role": "Separa utilidad y valor y muestra que el trabajo es condición del valor.",
      "question": "¿Por qué un objeto útil producido por trabajo humano todavía puede no ser mercancía?",
      "dependsOn": [
          "M10"
      ],
      "concepts": [
          "valor de uso",
          "valor",
          "naturaleza",
          "trabajo"
      ],
      "diagram": [
          "aire / tierra / pradera / bosque",
          "→",
          "valor de uso",
          "≠",
          "valor"
      ],
      "schema": {
          "layout": "radial",
          "centerId": "use",
          "nodes": [
              {
                  "id": "use",
                  "label": "valor de uso sin valor",
                  "shapeRole": "concept",
                  "role": "center",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "air",
                  "label": "aire",
                  "shapeRole": "term"
              },
              {
                  "id": "land",
                  "label": "tierra virgen",
                  "shapeRole": "term"
              },
              {
                  "id": "meadow",
                  "label": "pradera natural",
                  "shapeRole": "term"
              },
              {
                  "id": "forest",
                  "label": "bosque natural",
                  "shapeRole": "term"
              }
          ],
          "edges": [
              {
                  "from": "air",
                  "to": "use",
                  "label": "ejemplo",
                  "relationKind": "transversal"
              },
              {
                  "from": "land",
                  "to": "use",
                  "label": "ejemplo",
                  "relationKind": "transversal"
              },
              {
                  "from": "meadow",
                  "to": "use",
                  "label": "ejemplo",
                  "relationKind": "transversal"
              },
              {
                  "from": "forest",
                  "to": "use",
                  "label": "ejemplo",
                  "relationKind": "transversal"
              }
          ],
          "animation": {
              "mode": "radial",
              "nodeDuration": 0.32,
              "edgeDuration": 0.36
          }
      },
      "critical": false,
      "micro": true,
      "position": {
          "x": 2880,
          "y": -620
      }
  }),
  N({
      "id": "MXV14",
      "code": "LECTURA FINA · 50B",
      "title": "Producir para otros todavía no basta",
      "page": "50",
      "phase": "Mercancía",
      "branch": [
          "close1",
          "commodity",
          "value"
      ],
      "excerpt": "“Para transformarse en mercancía, el producto ha de transferirse a través del intercambio.”",
      "explanation": "Un producto puede ser útil, resultado de trabajo humano e incluso estar destinado a otros sin ser mercancía. Marx usa tributo y diezmo como contraejemplos. La forma mercantil exige transferencia mediante intercambio.",
      "role": "Distingue producción para otros y producción mercantil.",
      "question": "¿Qué papel juega el intercambio en convertir un producto útil en mercancía?",
      "dependsOn": [
          "M11"
      ],
      "concepts": [
          "para otros",
          "tributo",
          "diezmo",
          "intercambio",
          "mercancía"
      ],
      "diagram": [
          "producto útil para otros",
          "≠",
          "mercancía",
          "→ sólo si →",
          "intercambio"
      ],
      "schema": {
          "layout": "constellation",
          "canvas": {
              "width": 760,
              "height": 430
          },
          "nodes": [
              {
                  "id": "product",
                  "label": "producto útil para otros",
                  "shapeRole": "structure",
                  "position": {
                      "x": 0.16,
                      "y": 0.52
                  }
              },
              {
                  "id": "not",
                  "label": "no basta",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent",
                  "position": {
                      "x": 0.43,
                      "y": 0.52
                  }
              },
              {
                  "id": "exchange",
                  "label": "intercambio",
                  "shapeRole": "mediation",
                  "tone": "accent",
                  "position": {
                      "x": 0.68,
                      "y": 0.26
                  }
              },
              {
                  "id": "commodity",
                  "label": "mercancía",
                  "shapeRole": "result",
                  "tone": "accent",
                  "position": {
                      "x": 0.86,
                      "y": 0.52
                  }
              },
              {
                  "id": "tribute",
                  "label": "tributo / diezmo",
                  "shapeRole": "term",
                  "position": {
                      "x": 0.63,
                      "y": 0.78
                  }
              }
          ],
          "edges": [
              {
                  "from": "product",
                  "to": "not",
                  "label": "por sí solo",
                  "relationKind": "secondary"
              },
              {
                  "from": "exchange",
                  "to": "commodity",
                  "label": "condición",
                  "relationKind": "constitutes"
              },
              {
                  "from": "tribute",
                  "to": "not",
                  "label": "contraejemplo",
                  "relationKind": "secondary"
              }
          ],
          "animation": {
              "mode": "holistic",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": true,
      "micro": true,
      "position": {
          "x": 3240,
          "y": -620
      }
  }),
  N({
      "id": "MXV15",
      "code": "LECTURA FINA · 50–51",
      "title": "Nada puede ser valor si no es objeto para el uso",
      "page": "50–51",
      "phase": "Mercancía",
      "branch": [
          "close1",
          "commodity",
          "value"
      ],
      "excerpt": "“Ninguna cosa puede ser valor si no es un objeto para el uso.”",
      "explanation": "La utilidad y el valor no son idénticos, pero la utilidad sigue siendo condición necesaria. Si la cosa es inútil, también es inútil el trabajo contenido en ella: no cuenta como trabajo y no constituye valor.",
      "role": "Cierra el primer apartado mostrando la relación asimétrica entre valor de uso y valor.",
      "question": "¿Cómo puede haber valor de uso sin valor y, al mismo tiempo, no poder haber valor sin valor de uso?",
      "dependsOn": [
          "M11"
      ],
      "concepts": [
          "utilidad",
          "valor de uso",
          "valor",
          "trabajo"
      ],
      "diagram": [
          "sin utilidad",
          "→",
          "trabajo no cuenta",
          "→",
          "sin valor"
      ],
      "schema": {
          "layout": "flow",
          "nodes": [
              {
                  "id": "useless",
                  "label": "objeto inútil",
                  "shapeRole": "term"
              },
              {
                  "id": "labor",
                  "label": "trabajo contenido",
                  "shapeRole": "structure"
              },
              {
                  "id": "count",
                  "label": "no cuenta como trabajo",
                  "shapeRole": "mediation",
                  "emphasis": true,
                  "tone": "accent"
              },
              {
                  "id": "value",
                  "label": "no constituye valor",
                  "shapeRole": "result",
                  "tone": "accent"
              }
          ],
          "edges": [
              {
                  "from": "useless",
                  "to": "labor",
                  "label": "hace inútil también",
                  "relationKind": "secondary"
              },
              {
                  "from": "labor",
                  "to": "count",
                  "label": "por ello",
                  "relationKind": "derives"
              },
              {
                  "from": "count",
                  "to": "value",
                  "label": "implica",
                  "relationKind": "constitutes"
              }
          ],
          "animation": {
              "mode": "sequence",
              "nodeDuration": 0.34,
              "edgeDuration": 0.38
          }
      },
      "critical": true,
      "micro": true,
      "position": {
          "x": 3600,
          "y": -620
      }
  }),
]

const microscopeMainIds = new Set([
  'M18','M19','M20','M21','M22','M23','M24','M25','M26',
  'M27','M28','M29','M30','M31','M32',
])

marxCommodityNodes.forEach((node) => {
  if (microscopeMainIds.has(node.id) && !node.data.branch.includes('microscope')) {
    node.data.branch.push('microscope')
  }
})


export const marxCommodityCrossRelations = [
  {
    id: 'R01',
    source: 'M06',
    target: 'MX02',
    title: 'Trabajo abstracto → objetividad social',
    pages: '47 → 57–58',
    type: 'foundation',
    synthesis:
      'El trabajo abstractamente humano es la sustancia común del valor; cuando Marx pasa a la forma de valor insiste en que esa objetividad no contiene “ni un átomo” natural y sólo existe como objetividad social.',
    why:
      'Une la teoría de la sustancia del valor con la teoría de su forma. Sin este puente, el valor parecería una propiedad escondida dentro de la cosa.',
    distinction:
      'No significa que el trabajo abstracto sea una sustancia física depositada en la mercancía.',
    diagram: ['trabajo abstracto', '→', 'valor', '→', 'objetividad puramente social'],
    question:
      '¿Cómo puede una objetividad ser real sin ser una propiedad natural del cuerpo de la mercancía?',
  },
  {
    id: 'R02',
    source: 'MX02',
    target: 'M23',
    title: 'Objetividad social → cuerpo del equivalente',
    pages: '57–58 → 62–64',
    type: 'manifestation',
    synthesis:
      'Como el valor no puede manifestarse en el cuerpo aislado de la mercancía, necesita una relación con otra mercancía. El cuerpo del equivalente se vuelve entonces material de expresión del valor.',
    why:
      'Explica por qué la forma de valor exige dos mercancías y por qué una determinación social termina apareciendo corporalmente.',
    distinction:
      'La chaqueta no “contiene naturalmente” el valor del lienzo; funciona como su forma de manifestación dentro de la relación.',
    diagram: ['objetividad social', '→', 'relación con otra mercancía', '→', 'cuerpo equivalente'],
    question:
      '¿Qué aporta el cuerpo de la mercancía equivalente que la mercancía relativa no puede darse a sí misma?',
  },
  {
    id: 'R03',
    source: 'MX06',
    target: 'MX08',
    title: 'De lo puramente social a la apariencia natural',
    pages: '69–71',
    type: 'inversion',
    synthesis:
      'Marx rompe su analogía entre peso y valor porque el peso es natural y el valor social. Sin embargo, en la forma equivalente la intercambiabilidad directa termina pareciendo una propiedad natural del cuerpo equivalente.',
    why:
      'Aquí aparece una inversión decisiva: una función producida por una relación social se presenta como cualidad propia de una cosa.',
    distinction:
      'No es una simple ilusión subjetiva. La apariencia nace de una forma social objetiva de relación.',
    diagram: ['relación social', '→', 'función equivalente', '⇢', 'parece propiedad natural'],
    question:
      '¿Qué se pierde de vista cuando la función equivalente se lee como cualidad natural de la mercancía?',
  },
  {
    id: 'R04',
    source: 'MX07',
    target: 'MX09',
    title: 'Primera → segunda peculiaridad',
    pages: '68–72',
    type: 'inversion',
    synthesis:
      'La primera peculiaridad convierte el valor de uso del equivalente en forma de manifestación del valor; la segunda hace que el trabajo concreto que lo produce manifieste trabajo abstractamente humano.',
    why:
      'La inversión no afecta sólo al objeto. También reorganiza la manera en que cuenta socialmente el trabajo que produjo ese objeto.',
    distinction:
      'Trabajo concreto y trabajo abstracto no son dos trabajos temporalmente separados; son dos determinaciones del mismo gasto de trabajo.',
    diagram: ['valor de uso', '→ VALOR', '||', 'trabajo concreto', '→ TRABAJO ABSTRACTO'],
    question:
      '¿Por qué la transformación formal del producto implica también una transformación formal del trabajo?',
  },
  {
    id: 'R05',
    source: 'MX09',
    target: 'MX10',
    title: 'Segunda → tercera peculiaridad',
    pages: '71–72',
    type: 'inversion',
    synthesis:
      'Una vez que el trabajo concreto funciona como manifestación de trabajo abstracto, el trabajo privado que produjo el equivalente adopta además la forma de trabajo directamente social.',
    why:
      'Completa la tríada de inversiones que Marx atribuye a la forma equivalente.',
    distinction:
      'El trabajo privado no deja materialmente de ser privado; adquiere una forma social específica en la relación de equivalencia.',
    diagram: ['concreto → abstracto', '→', 'privado → directamente social'],
    question:
      '¿Cómo puede un trabajo privado representar inmediatamente trabajo social dentro de la forma equivalente?',
  },
  {
    id: 'R06',
    source: 'M29',
    target: 'MX08',
    title: 'Rey / súbditos como modelo de inversión',
    pages: '71',
    type: 'analogy',
    synthesis:
      'El ejemplo del rey muestra una relación constituida por el comportamiento social de otros que, una vez establecida, aparece invertida como atributo propio de una persona.',
    why:
      'Da una miniatura política de la misma estructura lógica que Marx detecta cuando la forma equivalente parece pertenecer naturalmente a una mercancía.',
    distinction:
      'Marx no está diciendo que una mercancía sea literalmente un rey; la analogía ilumina la inversión entre relación constituyente y propiedad aparente.',
    diagram: ['otros actúan como súbditos', '→', 'él funciona como rey', '⇢', 'parece “ser rey” por sí mismo'],
    question:
      '¿Dónde está la relación constituyente y dónde aparece la propiedad aparentemente autosuficiente?',
  },
  {
    id: 'R07',
    source: 'MX12',
    target: 'M35',
    title: 'Historicidad → forma socialmente vigente',
    pages: '73 → 81–82',
    type: 'history',
    synthesis:
      'El límite histórico de Aristóteles muestra que las categorías de igualdad social no son inteligibles al margen de formas históricas de sociedad; la forma general, a su vez, sólo existe como una forma socialmente vigente y omnilateral.',
    why:
      'Conecta la historicidad de las categorías con la necesidad de una validación social general de la forma de valor.',
    distinction:
      'No implica que el valor sea una convención arbitraria. Marx lo trata como una objetividad social histórica.',
    diagram: ['forma histórica de sociedad', '→', 'categorías pensables', '→', 'forma socialmente vigente'],
    question:
      '¿Qué diferencia hay entre decir “histórico” y decir “subjetivo” o “arbitrario”?',
  },
  {
    id: 'R08',
    source: 'M35',
    target: 'M37',
    title: 'Relación omnilateral → dinero',
    pages: '81–85',
    type: 'development',
    synthesis:
      'La forma general hace que todas las mercancías expresen su valor en un mismo equivalente. Cuando esa función se fija socialmente en una mercancía específica, el equivalente general se convierte en mercancía dineraria.',
    why:
      'Muestra que el dinero no entra desde fuera: es el resultado del desarrollo y fijación de la forma de equivalente general.',
    distinction:
      'El oro no es dinero por una propiedad natural del metal; adquiere esa función mediante una determinación social históricamente fijada.',
    diagram: ['relación omnilateral', '→', 'equivalente general', '→', 'fijación social', '→', 'dinero'],
    question:
      '¿Qué añade la fijación social a la forma general para convertirla en forma de dinero?',
  },
  {
    id: 'R09',
    source: 'M20',
    target: 'M38',
    title: 'Forma simple → forma de dinero',
    pages: '59 → 85–86',
    type: 'development',
    synthesis:
      'La expresión elemental entre dos mercancías contiene la estructura que, mediante sucesivos desarrollos, culmina en la forma de precio y dinero.',
    why:
      'Permite recorrer el capítulo hacia atrás: comprender el dinero exige comprender el equivalente general; éste la forma desplegada; y ésta la forma simple.',
    distinction:
      '“Germen” no significa que el dinero estuviera materialmente presente desde el inicio, sino que su estructura formal se desarrolla desde la relación simple.',
    diagram: ['Forma I', '→', 'Forma II', '→', 'Forma III', '→', 'Forma IV / dinero'],
    question:
      '¿Qué estructura de la forma simple permanece reconocible en la forma de dinero?',
  },
  {
    id: 'R10',
    source: 'M14',
    target: 'M35',
    title: 'Trabajos privados → relación social omnilateral',
    pages: '52 → 81–82',
    type: 'foundation',
    synthesis:
      'La producción mercantil presupone trabajos privados autónomos y recíprocamente independientes; la forma general muestra cómo sus productos adquieren una expresión social común mediante una relación omnilateral entre mercancías.',
    why:
      'Conecta la organización social de los productores con la necesidad de que el carácter social de sus trabajos aparezca mediado por formas de valor.',
    distinction:
      'La división social del trabajo por sí sola no basta para producir mercancías; Marx distingue división social y producción mercantil.',
    diagram: ['trabajos privados independientes', '→', 'productos mercantiles', '→', 'relación omnilateral de valor'],
    question:
      '¿Por qué productores privados necesitan una forma objetiva común para que sus trabajos cuenten socialmente?',
  },
]

const crossRelationMap = new Map(
  marxCommodityCrossRelations.map((relation) => [relation.id, relation]),
)

const architectureIds = new Set(
  marxCommodityCrossRelations.flatMap((relation) => [relation.source, relation.target]),
)

marxCommodityNodes.forEach((node) => {
  if (architectureIds.has(node.id) && !node.data.branch.includes('architecture')) {
    node.data.branch.push('architecture')
  }
})

export const marxCommodityConceptualEdges = marxCommodityCrossRelations.map((relation) => ({
  id: `conceptual-${relation.id}`,
  source: relation.source,
  target: relation.target,
  layer: 'conceptual',
  relationSheetId: relation.id,
  conceptualType: relation.type,
  label: relation.id,
}))

export const marxCommodityCrossRelationById = (id) =>
  crossRelationMap.get(id) || null
const nodeMap = new Map(marxCommodityNodes.map((node) => [node.id, node]))

marxCommodityNodes.forEach((node) => {
  node.data.produces = []
})

marxCommodityNodes.forEach((node) => {
  node.data.dependsOn.forEach((sourceId) => {
    const source = nodeMap.get(sourceId)
    if (source && !source.data.produces.includes(node.id)) {
      source.data.produces.push(node.id)
    }
  })
})

export const marxCommodityEdges = marxCommodityNodes.flatMap((node) =>
  node.data.dependsOn.map((sourceId, index) => ({
    id: `${sourceId}-${node.id}-${index}`,
    source: sourceId,
    target: node.id,
    relation: node.data.critical ? 'critical' : 'development',
  })),
)

export const marxCommodityNodeById = (id) => nodeMap.get(id) || null

export const marxCommodityGuidedRoute = marxCommodityNodes.filter((node) => !node.data.micro).map((node, index) => ({
  id: node.id,
  phase: node.data.phase,
  why: node.data.role,
  nextQuestion: node.data.question,
  order: index + 1,
}))

export const marxCommoditySource = {
  author: 'Karl Marx',
  title: 'El capital · Tomo I / Vol. 1 · Libro primero',
  subtitle: 'El proceso de producción del capital',
  edition:
    'Siglo XXI Editores · edición, traducción, advertencia y notas de Pedro Scaron · 28.ª reimpresión, 2008',
  assignedPages: 'Paginación impresa pp. 43–86',
  boundary:
    'En esta edición, la p. 86 termina la forma de dinero; el apartado 4, “El carácter fetichista de la mercancía y su secreto”, comienza en la p. 87.',
}
