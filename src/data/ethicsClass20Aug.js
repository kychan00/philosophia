export const responsibilityBalanceSchema = {
  layout: 'hierarchy',
  ariaLabel:
    'Esquema de la tensión trabajada en clase entre responsabilidad individual y responsabilidad estructural.',
  nodes: [
    {
      id: 'responsibility',
      label: 'responsabilidad',
      caption: '¿qué me corresponde?',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'individual',
      label: 'individual',
      caption: 'hábitos · decisiones · reparación',
      shapeRole: 'structure',
      tone: 'accent',
    },
    {
      id: 'structural',
      label: 'estructural',
      caption: 'instituciones · industria · infraestructura',
      shapeRole: 'structure',
      tone: 'accent',
    },
    {
      id: 'excess-guilt',
      label: 'exceso de culpa',
      caption: '“todo depende de mí”',
      shapeRole: 'term',
    },
    {
      id: 'excess-excuse',
      label: 'exceso de excusa',
      caption: '“nada depende de mí”',
      shapeRole: 'term',
    },
  ],
  edges: [
    {
      from: 'responsibility',
      to: 'individual',
      label: 'incluye',
      relationKind: 'hierarchical',
    },
    {
      from: 'responsibility',
      to: 'structural',
      label: 'incluye',
      relationKind: 'hierarchical',
    },
    {
      from: 'individual',
      to: 'excess-guilt',
      label: 'puede deformarse en',
      relationKind: 'secondary',
    },
    {
      from: 'structural',
      to: 'excess-excuse',
      label: 'puede usarse como',
      relationKind: 'secondary',
    },
  ],
  animation: {
    mode: 'branch',
    nodeDuration: 0.32,
    edgeDuration: 0.36,
  },
}

export const examinedLifeSchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema del desplazamiento trabajado en clase desde reconocer una falta y purificarse hacia examinar, asumir y corregir la propia vida.',
  nodes: [
    {
      id: 'fault',
      label: 'falta',
      caption: 'algo exige respuesta',
      shapeRole: 'term',
      tone: 'accent',
    },
    {
      id: 'recognize',
      label: 'reconocer',
      shapeRole: 'mediation',
    },
    {
      id: 'purify',
      label: 'purificar',
      caption: 'restablecer',
      shapeRole: 'structure',
    },
    {
      id: 'examine',
      label: 'examinar',
      caption: 'volver la mirada sobre sí',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'assume',
      label: 'asumir',
      caption: 'hacer propio el acto',
      shapeRole: 'mediation',
    },
    {
      id: 'correct',
      label: 'corregir',
      caption: 'reparar / transformar',
      shapeRole: 'result',
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'fault',
      to: 'recognize',
      label: 'exige',
      relationKind: 'derives',
    },
    {
      from: 'recognize',
      to: 'purify',
      label: 'puede conducir a',
      relationKind: 'derives',
    },
    {
      from: 'purify',
      to: 'examine',
      label: 'se interioriza como',
      relationKind: 'constitutes',
    },
    {
      from: 'examine',
      to: 'assume',
      label: 'permite',
      relationKind: 'derives',
    },
    {
      from: 'assume',
      to: 'correct',
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

export const modernResponsibilityCases = [
  {
    id: 'intention',
    number: 'I',
    title: 'Intención',
    body:
      'La pregunta ética no se agota en lo que una persona quería hacer.',
  },
  {
    id: 'action',
    number: 'II',
    title: 'Acción',
    body:
      'Importa también lo que efectivamente se hizo dentro de una situación concreta.',
  },
  {
    id: 'consequences',
    number: 'III',
    title: 'Consecuencias',
    body:
      'Los efectos visibles e indirectos pueden abrir responsabilidades que exceden el propósito inicial.',
  },
  {
    id: 'repair',
    number: 'IV',
    title: 'Reparación',
    body:
      'La responsabilidad se prolonga en la pregunta por aquello que todavía puede corregirse.',
  },
]
