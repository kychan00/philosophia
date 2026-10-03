export const passionResponseSchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema del paso trabajado en clase desde la emoción corporal hacia una respuesta ética mediada por deliberación.',
  nodes: [
    {
      id: 'passion',
      label: 'pasión',
      caption: 'afecta cuerpo y percepción',
      shapeRole: 'term',
      tone: 'accent',
    },
    {
      id: 'alteration',
      label: 'alteración',
      caption: 'temblor · pulso · sudor',
      shapeRole: 'structure',
    },
    {
      id: 'interpretation',
      label: 'interpretación',
      caption: '¿qué me está ocurriendo?',
      shapeRole: 'mediation',
    },
    {
      id: 'deliberation',
      label: 'deliberación',
      caption: 'qué hacer con ello',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'response',
      label: 'respuesta',
      caption: 'acción ética',
      shapeRole: 'result',
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'passion',
      to: 'alteration',
      label: 'se manifiesta como',
      relationKind: 'derives',
    },
    {
      from: 'alteration',
      to: 'interpretation',
      label: 'exige',
      relationKind: 'derives',
    },
    {
      from: 'interpretation',
      to: 'deliberation',
      label: 'abre',
      relationKind: 'constitutes',
    },
    {
      from: 'deliberation',
      to: 'response',
      label: 'orienta',
      relationKind: 'constitutes',
    },
  ],
  animation: {
    mode: 'sequence',
    nodeDuration: 0.32,
    edgeDuration: 0.36,
  },
}

export const stoicResponseSchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema del dominio de sí trabajado en el estoicismo: acontecimiento, representación, juicio, respuesta y acción.',
  nodes: [
    {
      id: 'event',
      label: 'acontecimiento',
      caption: 'no depende enteramente de mí',
      shapeRole: 'structure',
      tone: 'accent',
    },
    {
      id: 'representation',
      label: 'representación',
      caption: 'algo aparece',
      shapeRole: 'term',
    },
    {
      id: 'judgment',
      label: 'juicio',
      caption: 'interpreto lo ocurrido',
      shapeRole: 'mediation',
      emphasis: true,
    },
    {
      id: 'response',
      label: 'respuesta',
      caption: 'trabajo racional',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'action',
      label: 'acción',
      caption: 'razón y deber',
      shapeRole: 'result',
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'event',
      to: 'representation',
      label: 'se presenta como',
      relationKind: 'derives',
    },
    {
      from: 'representation',
      to: 'judgment',
      label: 'es valorada mediante',
      relationKind: 'derives',
    },
    {
      from: 'judgment',
      to: 'response',
      label: 'permite trabajar',
      relationKind: 'constitutes',
    },
    {
      from: 'response',
      to: 'action',
      label: 'orienta',
      relationKind: 'constitutes',
    },
  ],
  animation: {
    mode: 'sequence',
    nodeDuration: 0.32,
    edgeDuration: 0.36,
  },
}

export const passionModels = [
  {
    id: 'archaic',
    name: 'Tradición arcaica',
    formula: 'pasión = fuerza que me toma',
    body:
      'Estados intensos pueden ser interpretados como presencia de fuerzas divinas, espirituales o naturales que reducen el dominio inmediato del individuo sobre sí.',
  },
  {
    id: 'sappho',
    name: 'Safo',
    formula: 'amar = padecer una transformación',
    body:
      'El enamoramiento invade el cuerpo y modifica lenguaje, percepción, temperatura y movimiento.',
  },
  {
    id: 'plato',
    name: 'Platón',
    formula: 'Eros = impulso que puede educarse',
    body:
      'El deseo no se elimina sin más: puede orientarse desde la belleza particular hacia formas más amplias de belleza e inteligibilidad.',
  },
  {
    id: 'stoic',
    name: 'Estoicismo',
    formula: 'la respuesta puede gobernarse',
    body:
      'Los acontecimientos no dependen enteramente de nosotros; la libertad práctica se trabaja sobre juicios, reacciones y conducta.',
  },
]

export const sapphoSymptoms = [
  ['Voz', 'dificultad para hablar'],
  ['Lengua', 'parálisis'],
  ['Piel', 'sensación de fuego'],
  ['Vista', 'alteración de la percepción'],
  ['Oído', 'zumbido'],
  ['Cuerpo', 'sudor y temblor'],
  ['Rostro', 'palidez'],
  ['Límite', 'sensación cercana a la muerte'],
]
