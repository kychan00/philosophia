export const friendshipKinds = [
  {
    id: 'utility',
    greek: 'ΧΡΗΣΙΜΟΝ',
    title: 'Por utilidad',
    subtitle: 'el vínculo vale por lo que permite obtener',
    body:
      'La relación se sostiene mientras ambas personas encuentran un beneficio en ella. El otro es querido en cuanto resulta útil para algo que se busca.',
    duration:
      'Tiende a cambiar cuando cambia la necesidad, el interés o la ventaja que mantenía unido el vínculo.',
  },
  {
    id: 'pleasure',
    greek: 'ἩΔΟΝΗ',
    title: 'Por placer',
    subtitle: 'el vínculo vale por el agrado que produce',
    body:
      'La relación nace del gusto por la compañía, la conversación, el humor, la belleza, la actividad compartida o cualquier experiencia placentera.',
    duration:
      'Puede ser intensa, pero cambia cuando cambian los gustos, las edades, los hábitos o aquello que producía placer.',
  },
  {
    id: 'virtue',
    greek: 'ἈΡΕΤΗ',
    title: 'Por el bien',
    subtitle: 'el amigo es querido por quien es',
    body:
      'La forma más completa aparece cuando dos personas de buen carácter desean recíprocamente el bien de la otra por ella misma, y no sólo por la ventaja o el placer recibido.',
    duration:
      'Requiere tiempo, conocimiento mutuo y cierta estabilidad del carácter; por eso no surge de manera instantánea.',
  },
]

export const friendshipKindsSchema = {
  layout: 'hierarchy',
  ariaLabel:
    'Esquema de las tres formas de amistad en Aristóteles: utilidad, placer y amistad fundada en el bien y la virtud.',
  nodes: [
    {
      id: 'philia',
      label: 'amistad · philia',
      shapeRole: 'structure',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'utility',
      label: 'por utilidad',
      caption: 'beneficio',
      shapeRole: 'term',
    },
    {
      id: 'pleasure',
      label: 'por placer',
      caption: 'agrado',
      shapeRole: 'term',
    },
    {
      id: 'virtue',
      label: 'por el bien',
      caption: 'carácter',
      shapeRole: 'concept',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'stable',
      label: 'amistad más estable',
      caption: 'tiempo · virtud',
      shapeRole: 'result',
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'philia',
      to: 'utility',
      label: 'puede fundarse en',
      relationKind: 'hierarchical',
    },
    {
      from: 'philia',
      to: 'pleasure',
      label: 'puede fundarse en',
      relationKind: 'hierarchical',
    },
    {
      from: 'philia',
      to: 'virtue',
      label: 'puede fundarse en',
      relationKind: 'hierarchical',
    },
    {
      from: 'virtue',
      to: 'stable',
      label: 'cuando madura',
      relationKind: 'constitutes',
    },
  ],
  animation: {
    mode: 'branch',
    nodeDuration: 0.34,
    edgeDuration: 0.38,
  },
}

export const reciprocitySchema = {
  layout: 'flow',
  ariaLabel:
    'Esquema de la amistad como proceso: benevolencia, reciprocidad reconocida, convivencia y conocimiento del carácter.',
  nodes: [
    {
      id: 'wish',
      label: 'desear el bien',
      shapeRole: 'concept',
      tone: 'accent',
    },
    {
      id: 'reciprocity',
      label: 'reciprocidad',
      shapeRole: 'mediation',
      emphasis: true,
      tone: 'accent',
    },
    {
      id: 'recognition',
      label: 'saber que es mutuo',
      shapeRole: 'term',
    },
    {
      id: 'shared',
      label: 'vida compartida',
      shapeRole: 'structure',
    },
    {
      id: 'character',
      label: 'conocer el carácter',
      shapeRole: 'result',
      emphasis: true,
      tone: 'accent',
    },
  ],
  edges: [
    {
      from: 'wish',
      to: 'reciprocity',
      label: 'debe ser correspondido',
      relationKind: 'reciprocal',
    },
    {
      from: 'reciprocity',
      to: 'recognition',
      label: 'requiere',
      relationKind: 'derives',
    },
    {
      from: 'recognition',
      to: 'shared',
      label: 'se prueba en',
      relationKind: 'derives',
    },
    {
      from: 'shared',
      to: 'character',
      label: 'permite',
      relationKind: 'constitutes',
    },
  ],
  animation: {
    mode: 'sequence',
    nodeDuration: 0.32,
    edgeDuration: 0.36,
  },
}

export const friendshipDilemmaViews = [
  {
    id: 'favor',
    label: 'Confundir amistad con favor',
    title: '“Si es mi amigo, tengo que cubrirlo.”',
    body:
      'Esta respuesta identifica la amistad con la lealtad inmediata. El problema es que ayudar a realizar una acción injusta puede conservar el vínculo a corto plazo mientras daña el carácter de ambos.',
  },
  {
    id: 'good',
    label: 'Querer el bien del amigo',
    title: '“Ser su amigo no significa ayudarlo a hacer cualquier cosa.”',
    body:
      'Si el vínculo se orienta al bien del otro, la amistad puede exigir disentir, advertir, negarse a colaborar con una injusticia e incluso aceptar un conflicto temporal.',
  },
  {
    id: 'mirror',
    label: 'El amigo como espejo',
    title: '“El otro también revela quién estoy llegando a ser.”',
    body:
      'La amistad no sólo acompaña decisiones ya tomadas. La convivencia, el consejo y la corrección mutua forman hábitos y pueden hacer visible el propio carácter.',
  },
]
