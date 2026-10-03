export const practicalDeliberationSchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema del ejercicio moral trabajado en clase: principio o sentencia, caso, circunstancias, consecuencias, deliberación y decisión.',
  nodes: [
    {
      id: 'principle',
      label: 'principio / sentencia',
      caption: 'criterio inicial',
      shapeRole: 'term',
      tone: 'accent',
    },
    {
      id: 'case',
      label: 'caso',
      caption: 'situación concreta',
      shapeRole: 'structure',
    },
    {
      id: 'circumstances',
      label: 'circunstancias',
      caption: 'vulnerabilidad · desigualdad',
      shapeRole: 'mediation',
    },
    {
      id: 'consequences',
      label: 'consecuencias',
      caption: 'efectos posibles',
      shapeRole: 'mediation',
    },
    {
      id: 'deliberation',
      label: 'deliberación',
      caption: 'comparar razones',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'decision',
      label: 'decisión',
      caption: 'acción justificada',
      shapeRole: 'result',
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'principle',
      to: 'case',
      label: 'se aplica a',
      relationKind: 'derives',
    },
    {
      from: 'case',
      to: 'circumstances',
      label: 'debe leerse con',
      relationKind: 'derives',
    },
    {
      from: 'circumstances',
      to: 'consequences',
      label: 'modifican',
      relationKind: 'derives',
    },
    {
      from: 'consequences',
      to: 'deliberation',
      label: 'entran en',
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
    nodeDuration: 0.3,
    edgeDuration: 0.34,
  },
}

export const listeningSchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema de la máxima de Demócrito trabajada en clase: interpretación propia, escucha, comparación, revisión y respuesta.',
  nodes: [
    {
      id: 'own',
      label: 'interpretación propia',
      caption: 'creo tener razones',
      shapeRole: 'structure',
      tone: 'accent',
    },
    {
      id: 'listen',
      label: 'escucha',
      caption: 'atender al otro',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'compare',
      label: 'comparación',
      caption: 'argumentos · marcos',
      shapeRole: 'mediation',
    },
    {
      id: 'review',
      label: 'revisión',
      caption: 'límites · errores',
      shapeRole: 'mediation',
    },
    {
      id: 'response',
      label: 'respuesta',
      caption: 'defender o modificar',
      shapeRole: 'result',
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'own',
      to: 'listen',
      label: 'debe abrirse a',
      relationKind: 'derives',
    },
    {
      from: 'listen',
      to: 'compare',
      label: 'permite',
      relationKind: 'derives',
    },
    {
      from: 'compare',
      to: 'review',
      label: 'exige',
      relationKind: 'constitutes',
    },
    {
      from: 'review',
      to: 'response',
      label: 'mejora',
      relationKind: 'constitutes',
    },
  ],
  animation: {
    mode: 'sequence',
    nodeDuration: 0.3,
    edgeDuration: 0.34,
  },
}

export const justiceCases = [
  {
    id: 'labor',
    title: 'Conflicto laboral',
    formula: 'exigir lo que corresponde',
    body:
      'La vergüenza por reclamar derechos puede favorecer precisamente a quien incumple o explota.',
  },
  {
    id: 'report',
    title: 'Denuncia',
    formula: 'responsabilidad que rebasa al individuo',
    body:
      'Denunciar una injusticia grave puede impedir que el mismo daño se repita contra otras personas.',
  },
  {
    id: 'family',
    title: 'Vínculo familiar',
    formula: 'la justicia puede superar la lealtad',
    body:
      'El parentesco no elimina la responsabilidad moral cuando se trata de una acción gravemente injusta.',
  },
]

export const professionalCases = [
  {
    id: 'law',
    title: 'Derecho',
    body:
      'El conocimiento jurídico puede convertirse en asesoría y acceso a la justicia, no sólo en utilidad económica.',
  },
  {
    id: 'engineering',
    title: 'Ingeniería',
    body:
      'Ayudar técnicamente a una persona vulnerable sin interés económico puede ser una forma concreta de servicio profesional.',
  },
  {
    id: 'medicine',
    title: 'Medicina',
    body:
      'La práctica ética puede exigir atender o canalizar responsablemente a quien no puede pagar.',
  },
]
