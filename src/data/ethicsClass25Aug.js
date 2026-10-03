export const transformationSchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema del desplazamiento trabajado en clase desde prácticas religiosas de falta y purificación hacia examen de sí, responsabilidad y ética filosófica.',
  nodes: [
    {
      id: 'fault',
      label: 'falta / mancha',
      caption: 'culpa · contaminación',
      shapeRole: 'term',
      tone: 'accent',
    },
    {
      id: 'purification',
      label: 'purificación',
      caption: 'rito · expiación',
      shapeRole: 'structure',
    },
    {
      id: 'examination',
      label: 'examen de sí',
      caption: 'memoria · revisión',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'responsibility',
      label: 'responsabilidad',
      caption: 'autoría · imputación',
      shapeRole: 'mediation',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'ethics',
      label: 'ética filosófica',
      caption: 'deliberación · vida buena',
      shapeRole: 'result',
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'fault',
      to: 'purification',
      label: 'exige',
      relationKind: 'derives',
    },
    {
      from: 'purification',
      to: 'examination',
      label: 'se interioriza como',
      relationKind: 'constitutes',
    },
    {
      from: 'examination',
      to: 'responsibility',
      label: 'permite',
      relationKind: 'derives',
    },
    {
      from: 'responsibility',
      to: 'ethics',
      label: 'orienta hacia',
      relationKind: 'constitutes',
    },
  ],
  animation: {
    mode: 'sequence',
    nodeDuration: 0.32,
    edgeDuration: 0.36,
  },
}

export const explanationResponsibilitySchema = {
  layout: 'hierarchy',
  ariaLabel:
    'Esquema de la distinción trabajada en clase entre explicar un estado alterado y justificar automáticamente una acción.',
  nodes: [
    {
      id: 'altered',
      label: 'estado alterado',
      caption: 'furia · embriaguez · manía',
      shapeRole: 'structure',
      tone: 'accent',
    },
    {
      id: 'explanation',
      label: 'explicación',
      caption: '¿qué influyó en la acción?',
      shapeRole: 'mediation',
      emphasis: true,
    },
    {
      id: 'justification',
      label: 'justificación automática',
      caption: 'no se sigue sin más',
      shapeRole: 'term',
    },
    {
      id: 'authorship',
      label: 'autoría',
      caption: '¿quién actuó?',
      shapeRole: 'concept',
      tone: 'accent',
    },
    {
      id: 'response',
      label: 'respuesta',
      caption: 'daño · reconocimiento · reparación',
      shapeRole: 'result',
      emphasis: true,
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'altered',
      to: 'explanation',
      label: 'puede ofrecer',
      relationKind: 'derives',
    },
    {
      from: 'explanation',
      to: 'justification',
      label: 'no equivale a',
      relationKind: 'secondary',
    },
    {
      from: 'explanation',
      to: 'authorship',
      label: 'no elimina por sí sola',
      relationKind: 'transversal',
    },
    {
      from: 'authorship',
      to: 'response',
      label: 'abre la exigencia de',
      relationKind: 'constitutes',
    },
  ],
  animation: {
    mode: 'branch',
    nodeDuration: 0.32,
    edgeDuration: 0.36,
  },
}

export const archaicPractices = [
  {
    id: 'miasma',
    greek: 'ΜΙΑΣΜΑ',
    title: 'Falta / mancha',
    body:
      'La falta puede experimentarse como contaminación que altera la relación con lo divino, con la comunidad y consigo mismo.',
  },
  {
    id: 'katharsis',
    greek: 'ΚΑΘΑΡΣΙΣ',
    title: 'Purificación',
    body:
      'Ritos, penitencia, expiación o sacrificio buscan restablecer una condición adecuada.',
  },
  {
    id: 'manteia',
    greek: 'ΜΑΝΤΕΙΑ',
    title: 'Oráculo / sueño',
    body:
      'El signo no llega necesariamente con una interpretación inequívoca y puede comprenderse sólo retrospectivamente.',
  },
  {
    id: 'mania',
    greek: 'ΜΑΝΙΑ',
    title: 'Manía',
    body:
      'Poesía, profecía, amor o éxtasis pueden ser interpretados como formas de inspiración o posesión.',
  },
]
