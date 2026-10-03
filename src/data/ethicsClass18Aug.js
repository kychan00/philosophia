export const responsibilitySchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema del paso trabajado en clase desde una explicación externa de la acción hacia la responsabilidad y la reparación.',
  nodes: [
    {
      id: 'external',
      label: 'dioses · destino · fuerzas externas',
      caption: 'explicación de la acción',
      shapeRole: 'structure',
      tone: 'accent',
    },
    {
      id: 'action',
      label: 'acción humana',
      caption: 'interpretar · decidir · actuar',
      shapeRole: 'mediation',
      emphasis: true,
    },
    {
      id: 'harm',
      label: 'daño y consecuencias',
      shapeRole: 'term',
    },
    {
      id: 'responsibility',
      label: 'responsabilidad',
      caption: 'imputación al agente',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'repair',
      label: 'disculpa · reparación',
      shapeRole: 'result',
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'external',
      to: 'action',
      label: 'deja de bastar por sí sola',
      relationKind: 'derives',
    },
    {
      from: 'action',
      to: 'harm',
      label: 'produce / permite',
      relationKind: 'derives',
    },
    {
      from: 'harm',
      to: 'responsibility',
      label: 'abre la pregunta por',
      relationKind: 'constitutes',
    },
    {
      from: 'responsibility',
      to: 'repair',
      label: 'puede exigir',
      relationKind: 'derives',
    },
  ],
  animation: {
    mode: 'sequence',
    nodeDuration: 0.34,
    edgeDuration: 0.38,
  },
}

export const courseMethodSchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema del método anunciado para el semestre: partir de un caso, identificar el fundamento de una escuela y formular su juicio.',
  nodes: [
    {
      id: 'case',
      label: 'caso',
      shapeRole: 'term',
      tone: 'accent',
    },
    {
      id: 'foundation',
      label: 'fundamento',
      shapeRole: 'mediation',
    },
    {
      id: 'school',
      label: 'escuela',
      caption: 'tradición filosófica',
      shapeRole: 'structure',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'judgment',
      label: 'juicio',
      shapeRole: 'result',
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'case',
      to: 'foundation',
      label: 'se examina desde',
      relationKind: 'derives',
    },
    {
      from: 'foundation',
      to: 'school',
      label: 'pertenece a',
      relationKind: 'hierarchical',
    },
    {
      from: 'school',
      to: 'judgment',
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

export const presentCases = [
  {
    id: 'omission',
    number: 'I',
    title: 'Omisión',
    body:
      'La clase pregunta por la relevancia moral de no intervenir cuando se observa un daño o una situación que podría exigir respuesta.',
  },
  {
    id: 'consumption',
    number: 'II',
    title: 'Consumo',
    body:
      'Las decisiones de compra y uso pueden insertarse en cadenas de consecuencias que no se agotan en el intercambio inmediato.',
  },
  {
    id: 'information',
    number: 'III',
    title: 'Información',
    body:
      'La responsabilidad se relaciona con decidir con conocimiento de consecuencias posibles y con la exigencia de informarse.',
  },
  {
    id: 'environment',
    number: 'IV',
    title: 'Impacto ambiental',
    body:
      'La discusión amplía el examen ético a hábitos cotidianos y a sus costos materiales y ecológicos.',
  },
]
