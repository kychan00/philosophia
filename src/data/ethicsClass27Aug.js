export const shameAutonomySchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema del paso trabajado en clase desde la mirada externa y la vergüenza social hacia la conciencia, la deliberación y la autonomía moral.',
  nodes: [
    {
      id: 'external',
      label: 'mirada externa',
      caption: 'honor · reputación · qué dirán',
      shapeRole: 'structure',
      tone: 'accent',
    },
    {
      id: 'internalize',
      label: 'interiorización',
      caption: 'normas · máximas',
      shapeRole: 'mediation',
    },
    {
      id: 'conscience',
      label: 'conciencia',
      caption: 'testigo interior',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'deliberation',
      label: 'deliberación',
      caption: '¿hubo daño o indignidad?',
      shapeRole: 'mediation',
    },
    {
      id: 'autonomy',
      label: 'autonomía moral',
      caption: 'juicio justificable',
      shapeRole: 'result',
      emphasis: true,
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'external',
      to: 'internalize',
      label: 'forma',
      relationKind: 'derives',
    },
    {
      from: 'internalize',
      to: 'conscience',
      label: 'se vuelve',
      relationKind: 'constitutes',
    },
    {
      from: 'conscience',
      to: 'deliberation',
      label: 'debe someterse a',
      relationKind: 'derives',
    },
    {
      from: 'deliberation',
      to: 'autonomy',
      label: 'puede culminar en',
      relationKind: 'constitutes',
    },
  ],
  animation: {
    mode: 'sequence',
    nodeDuration: 0.32,
    edgeDuration: 0.36,
  },
}

export const emotionDeliberationSchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema del movimiento trabajado en clase desde una emoción que motiva hasta una acción deliberada.',
  nodes: [
    {
      id: 'emotion',
      label: 'emoción',
      caption: 'enojo · impulso',
      shapeRole: 'term',
      tone: 'accent',
    },
    {
      id: 'motivation',
      label: 'motivación',
      caption: 'energía para actuar',
      shapeRole: 'mediation',
    },
    {
      id: 'options',
      label: 'opciones',
      caption: 'qué puedo hacer',
      shapeRole: 'structure',
    },
    {
      id: 'deliberation',
      label: 'deliberación',
      caption: 'valorar razones',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'decision',
      label: 'decisión',
      caption: 'acción elegida',
      shapeRole: 'result',
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'emotion',
      to: 'motivation',
      label: 'puede convertirse en',
      relationKind: 'derives',
    },
    {
      from: 'motivation',
      to: 'options',
      label: 'abre',
      relationKind: 'derives',
    },
    {
      from: 'options',
      to: 'deliberation',
      label: 'se valoran mediante',
      relationKind: 'constitutes',
    },
    {
      from: 'deliberation',
      to: 'decision',
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

export const democritusMaxims = [
  {
    id: 'self',
    label: 'Máxima I',
    title: 'Vergüenza ante uno mismo',
    text:
      'La persona debe sentir vergüenza primero ante sí misma cuando realiza una acción vergonzosa.',
    use:
      'La mirada moral no depende únicamente de que alguien descubra la acción.',
  },
  {
    id: 'alone',
    label: 'Máxima II',
    title: 'Actuar correctamente incluso a solas',
    text:
      'Incluso cuando estés solo, no digas ni hagas nada vergonzoso.',
    use:
      'La conciencia puede funcionar como testigo interior cuando desaparece la vigilancia externa.',
  },
  {
    id: 'others',
    label: 'Máxima III',
    title: 'No vivir sólo para el “qué dirán”',
    text:
      'No te avergüences más ante los demás que ante ti mismo.',
    use:
      'La desaprobación social no basta: hay que poder justificar por qué una acción fue dañina o indigna.',
  },
]

export const deliberationCases = [
  {
    id: 'common-good',
    number: 'I',
    title: 'Tomar un bien común',
    body:
      'Que nadie observe la acción no elimina el daño producido a quienes dependían de ese bien.',
  },
  {
    id: 'social-pressure',
    number: 'II',
    title: 'Presión social',
    body:
      'La desaprobación de otros no convierte automáticamente una conducta en incorrecta.',
  },
  {
    id: 'absent',
    number: 'III',
    title: 'Hablar del ausente',
    body:
      'La justicia discursiva exige no degradar a quien no puede responder en ese momento.',
  },
  {
    id: 'power',
    number: 'IV',
    title: 'Abuso de poder',
    body:
      'La asimetría de fuerza o autoridad puede aumentar la responsabilidad frente a una persona vulnerable.',
  },
]
