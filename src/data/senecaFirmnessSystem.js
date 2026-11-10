export const senecaFirmnessSource = Object.freeze({
  author: 'Lucio Anneo Séneca',
  work: 'Sobre la firmeza del sabio',
  edition: 'Séneca. Biblioteca de Grandes Pensadores. Gredos, 2013.',
  translator: 'Juan Mariné Isidro',
  pages: '140–153',
  boundary:
    'Sistema de estudio construido únicamente a partir del diálogo Sobre la firmeza del sabio en la edición Gredos aportada para cotejo. Las conexiones visuales se presentan como reconstrucción de estudio.',
})

const schema = (ariaLabel, labels) => ({
  layout: 'flow',
  direction: 'horizontal',
  ariaLabel,
  nodes: labels.map((label, index) => ({
    id: 'n' + index,
    label,
    shape: index === 0 ? 'circle' : index === labels.length - 1 ? 'pill' : 'diamond',
    emphasis: index === 0,
    tone: index === labels.length - 1 ? 'accent' : undefined,
  })),
  edges: labels.slice(1).map((_, index) => ({
    from: 'n' + index,
    to: 'n' + (index + 1),
    arrow: 'forward',
  })),
  animation: {
    order: labels.map((_, index) => 'n' + index),
    nodeDuration: 0.26,
    edgeDuration: 0.28,
  },
})

const node = ({
  id,
  x,
  y,
  phase,
  title,
  excerpt,
  sourceText,
  sourcePage,
  explicitText,
  explicitPage = sourcePage,
  sourceKind = 'PARÁFRASIS DE ESTUDIO',
  explanation,
  role,
  example,
  question,
  diagram,
  dependsOn = [],
  schemaLabels,
}) => ({
  id,
  type: 'seneca',
  position: { x, y },
  data: {
    code: id,
    phase,
    title,
    excerpt,
    sourceText,
    sourcePage,
    explicitText,
    explicitPage,
    explicitRef: 'Séneca · Sobre la firmeza del sabio · p. ' + explicitPage,
    sourceRef: 'Séneca · Sobre la firmeza del sabio · p. ' + sourcePage,
    sourceKind,
    explanation,
    role,
    example,
    question,
    diagram,
    dependsOn,
    schema: schema('Reconstrucción de estudio: ' + title, schemaLabels),
  },
})

export const senecaFirmnessNodes = [
  node({
    id: 'S01',
    x: 650,
    y: 40,
    phase: 'Tesis',
    title: 'Firmeza del sabio',
    excerpt:
      'El ataque exterior puede ocurrir sin convertirse por ello en derrota moral.',
    sourceText: 'el sabio no puede recibir ningún ultraje ni ofensa',
    sourcePage: '140',
    sourceKind: 'CITA LITERAL COTEJADA',
    explicitText: 'el sabio no puede recibir ningún ultraje ni ofensa',
    explicitPage: '140',
    explanation:
      'La tesis no niega insultos, golpes o humillaciones. Niega que esos ataques destruyan por sí solos la virtud del sabio.',
    role:
      'Plantea la afirmación que todo el diálogo intenta defender: invulnerabilidad moral no significa ausencia de ataques.',
    example:
      'Catón puede ser humillado públicamente sin que la multitud convierta esa agresión en pérdida de su carácter.',
    question: '¿Qué tendría que perder el sabio para quedar realmente dañado?',
    diagram: ['ataque exterior', '≠', 'derrota moral'],
    schemaLabels: ['ataque exterior', 'firmeza', 'virtud intacta'],
  }),
  node({
    id: 'S02',
    x: 650,
    y: 270,
    phase: 'Fundamento',
    title: 'Gobierno de sí',
    excerpt:
      'La firmeza exige que el centro de la vida moral no quede entregado a la fortuna ni a la opinión ajena.',
    sourceText: 'todo lo ha basado en sí mismo',
    sourcePage: '143',
    sourceKind: 'CITA LITERAL COTEJADA',
    explicitText: 'el sabio nada puede perder: todo lo ha basado en sí mismo, no confía nada a la suerte',
    explicitPage: '143',
    explanation:
      'Séneca sitúa el bien propio del sabio en aquello que depende de su virtud y su juicio, no en lo que la fortuna concede.',
    role:
      'Introduce el principio de autogobierno desde el cual se distinguen virtud y bienes externos.',
    example:
      'Si mi valor depende enteramente del aplauso ajeno, otra persona gobierna mi ánimo; si depende del juicio recto, conservo ese gobierno.',
    question: '¿Qué gobierna al sabio: la fortuna o su propio juicio?',
    diagram: ['firmeza', '→', 'gobierno de sí'],
    dependsOn: ['S01'],
    schemaLabels: ['firmeza', 'gobierno de sí', 'juicio propio'],
  }),
  node({
    id: 'S03',
    x: 230,
    y: 540,
    phase: 'Rama I',
    title: 'Virtud',
    excerpt:
      'La virtud es el verdadero bien: no procede de la fortuna y por eso no queda a merced de ella.',
    sourceText:
      'Reconstrucción del argumento de pp. 142–143: el único mal verdadero es la indecencia moral y el bien propio del sabio está en la virtud.',
    sourcePage: '142–143',
    explicitText: 'para ella la única desgracia es la indecencia',
    explicitPage: '142',
    explanation:
      'Esta rama identifica lo verdaderamente propio del sabio. La virtud pertenece al orden moral y no funciona como una posesión externa.',
    role:
      'Define el bien que debe permanecer a salvo para que no exista daño moral.',
    example:
      'Puede desaparecer el dinero sin que por ello desaparezca la rectitud del juicio.',
    question: '¿Qué considera Séneca el verdadero bien?',
    diagram: ['virtud', '→', 'verdadero bien'],
    dependsOn: ['S02'],
    schemaLabels: ['virtud', 'verdadero bien', 'depende de sí'],
  }),
  node({
    id: 'S04',
    x: 1070,
    y: 540,
    phase: 'Rama II',
    title: 'Externos',
    excerpt:
      'Riqueza, fama, cuerpo, poder, opinión y fortuna pertenecen al ámbito de lo que puede cambiar o perderse.',
    sourceText:
      'Reconstrucción del argumento de pp. 143–144: la fortuna sólo puede quitar lo que ella misma dio; los bienes externos se poseen en precario.',
    sourcePage: '143–144',
    explicitText: 'lo demás lo tiene en precario',
    explicitPage: '143',
    explanation:
      'Los externos no constituyen el bien moral. Por eso su pérdida puede ser dolorosa sin equivaler a pérdida de virtud.',
    role:
      'Contrasta la virtud con aquello que no está completamente bajo el gobierno del sujeto.',
    example:
      'La fama puede cambiar en un día; la rectitud moral no debería cambiar con ella.',
    question: '¿Qué tienen en común riqueza, fama, cuerpo y poder?',
    diagram: ['externos', '→', 'fortuna'],
    dependsOn: ['S02'],
    schemaLabels: ['externos', 'fortuna', 'pérdida posible'],
  }),
  node({
    id: 'S05',
    x: 230,
    y: 820,
    phase: 'Consecuencia',
    title: 'No puede ser arrebatada',
    excerpt:
      'Si la virtud no viene de la fortuna, tampoco puede ser retirada por la fortuna.',
    sourceText:
      'Reconstrucción de p. 143: la virtud es libre, inviolable e independiente de lo que la fortuna da y quita.',
    sourcePage: '143',
    explicitText: 'la suerte no arrebata nada más que lo que ha dado; ahora bien, no da virtud, por tanto tampoco la quita',
    explicitPage: '143',
    explanation:
      'La virtud no es un objeto exterior que otro pueda apropiarse. Sólo el propio sujeto puede abandonar el juicio recto.',
    role:
      'Extrae la consecuencia de la rama de la virtud.',
    example:
      'Pueden quitarme una posesión, pero no pueden obligarme a volverme injusto.',
    question: '¿Por qué la virtud no puede ser arrebatada como un objeto?',
    diagram: ['virtud', '→', 'no arrebatable'],
    dependsOn: ['S03'],
    schemaLabels: ['virtud', 'depende de sí', 'no puede ser arrebatada'],
  }),
  node({
    id: 'S06',
    x: 1070,
    y: 820,
    phase: 'Consecuencia',
    title: 'Pueden ser perdidos',
    excerpt:
      'Los externos están sometidos a contingencia, poder ajeno y fortuna; por eso pueden desaparecer.',
    sourceText:
      'Reconstrucción de pp. 143–144 y del ejemplo de Estilpón: bienes, ciudad y vínculos externos pueden perderse sin agotar lo verdaderamente propio.',
    sourcePage: '143–144',
    explicitText: 'Nada, todo lo mío lo llevo conmigo',
    explicitPage: '143',
    explanation:
      'Esta pérdida es real en el plano material, corporal o social, pero no equivale por sí sola a corrupción moral.',
    role:
      'Extrae la consecuencia de la rama de los externos.',
    example:
      'La salud puede deteriorarse, una propiedad puede perderse y la reputación puede cambiar.',
    question: '¿Qué pueden hacer la fortuna y los demás con los bienes externos?',
    diagram: ['externos', '→', 'pérdida posible'],
    dependsOn: ['S04'],
    schemaLabels: ['externos', 'contingencia', 'pueden ser perdidos'],
  }),
  node({
    id: 'S07',
    x: 650,
    y: 1110,
    phase: 'Síntesis',
    title: 'Pérdida externa ≠ mal moral',
    excerpt:
      'Perder algo externo no equivale a perder el bien moral que constituye al sabio.',
    sourceText:
      'Reconstrucción de pp. 142–144: pérdida material y mal moral pertenecen a planos distintos mientras la virtud permanezca a salvo.',
    sourcePage: '142–144',
    explicitText: 'si su virtud está a salvo, sus bienes están a salvo',
    explicitPage: '143',
    explanation:
      'Las dos ramas convergen aquí: los externos pueden perderse, pero esa pérdida no se identifica automáticamente con un mal moral.',
    role:
      'Une la oposición virtud/externos y prepara la distinción entre ultraje intentado y recibido.',
    example:
      'Perder reputación puede afectar la vida social sin volver injusta a una persona.',
    question: '¿Por qué una pérdida externa no equivale todavía a un mal moral?',
    diagram: ['pérdida externa', '≠', 'mal moral'],
    dependsOn: ['S05', 'S06'],
    schemaLabels: ['pérdida externa', 'distinción', 'mal moral'],
  }),
  node({
    id: 'S08',
    x: 650,
    y: 1370,
    phase: 'Distinción',
    title: 'Ultraje intentado ≠ ultraje recibido',
    excerpt:
      'El agresor puede intentar dañar sin lograr que ese intento se convierta en daño moral recibido.',
    sourceText: 'puede ocurrir que alguien me haga un ultraje y yo no lo reciba',
    sourcePage: '145',
    sourceKind: 'CITA LITERAL COTEJADA',
    explicitText: 'puede ocurrir que alguien me haga un ultraje y yo no lo reciba',
    explicitPage: '145',
    explanation:
      'Séneca separa la injusticia del agresor del efecto interior que consigue. La intención culpable no garantiza dominio sobre la víctima.',
    role:
      'Formula la distinción decisiva que explica cómo puede haber agresión sin derrota moral.',
    example:
      'Como en el ejemplo del veneno: la intención criminal existe aunque el veneno no produzca su efecto.',
    question: '¿Qué diferencia hay entre intentar dañar y lograr daño moral?',
    diagram: ['ultraje intentado', '≠', 'ultraje recibido'],
    dependsOn: ['S07'],
    schemaLabels: ['intento injusto', 'no garantiza', 'daño moral recibido'],
  }),
  node({
    id: 'S09',
    x: 250,
    y: 1640,
    phase: 'Rama I',
    title: 'Ultraje',
    excerpt:
      'El ultraje pretende causar daño, pero el dolor o la agresión no destruyen por sí mismos la virtud.',
    sourceText:
      'Reconstrucción de la distinción de pp. 142 y 150: el ultraje pretende daño y puede implicar golpes o pérdidas sin convertirse por ello en mal moral.',
    sourcePage: '142, 150',
    explicitText: 'El ultraje tiene esta intención: afectar a alguien con una desgracia',
    explicitPage: '142',
    explanation:
      'Aquí importa separar el daño exterior de su interpretación moral: el sabio puede sufrir físicamente sin quedar moralmente vencido.',
    role:
      'Desarrolla la rama del daño pretendido.',
    example:
      'Un golpe puede doler sin decidir el valor moral de quien lo recibe.',
    question: '¿Qué pretende el ultraje y qué es lo que no logra por sí solo?',
    diagram: ['ultraje', '→', 'pretende daño'],
    dependsOn: ['S08'],
    schemaLabels: ['ultraje', 'dolor / pérdida', 'virtud no destruida'],
  }),
  node({
    id: 'S10',
    x: 1050,
    y: 1640,
    phase: 'Rama II',
    title: 'Ofensa',
    excerpt:
      'La ofensa pretende menospreciar y obtiene fuerza cuando el sujeto adopta como propia esa valoración ajena.',
    sourceText:
      'Reconstrucción de pp. 146–151: la ofensa es más leve que el ultraje y depende en gran medida del juicio con que se recibe el desprecio.',
    sourcePage: '146–151',
    explicitText: 'Es menos importante que el ultraje: por ella podemos quejarnos más que querellarnos',
    explicitPage: '146',
    explanation:
      'Séneca analiza burlas, desprecios y gestos sociales para mostrar que la ofensa depende de la interpretación que se les concede.',
    role:
      'Desarrolla la rama del menosprecio y la valoración social.',
    example:
      'Una burla no define mi valor sólo porque otro la pronuncie.',
    question: '¿De qué depende que una ofensa gobierne realmente el ánimo?',
    diagram: ['ofensa', '→', 'interpretación'],
    dependsOn: ['S08'],
    schemaLabels: ['ofensa', 'menosprecio', 'interpretación'],
  }),
  node({
    id: 'S11',
    x: 650,
    y: 1920,
    phase: 'Éthos',
    title: 'Magnanimidad',
    excerpt:
      'La grandeza de ánimo permite atravesar ultrajes y ofensas sin reducir la vida moral a una reacción de orgullo herido.',
    sourceText:
      'Reconstrucción de pp. 147–149: Séneca presenta la magnanimidad como capacidad de pasar por encima del desprecio sin someterse a él.',
    sourcePage: '147–149',
    explicitText: 'la virtud más hermosa de todas, la magnanimidad',
    explicitPage: '147',
    explanation:
      'Las dos ramas vuelven a converger: frente al daño y al menosprecio, la firmeza adopta la forma de magnanimidad.',
    role:
      'Convierte la distinción conceptual en disposición estable del carácter.',
    example:
      'Quien no necesita devolver inmediatamente la agresión muestra que su ánimo no está gobernado por ella.',
    question: '¿Qué actitud hace posible no quedar preso del agravio?',
    diagram: ['ultraje / ofensa', '→', 'magnanimidad'],
    dependsOn: ['S09', 'S10'],
    schemaLabels: ['ultraje / ofensa', 'magnanimidad', 'dominio de sí'],
  }),
  node({
    id: 'S12',
    x: 650,
    y: 2170,
    phase: 'Respuesta',
    title: 'Sin ira / sin venganza',
    excerpt:
      'El sabio no responde desde la necesidad de devolver el daño o reparar un orgullo herido.',
    sourceText: 'no se venga, sino que los enmienda',
    sourcePage: '148',
    sourceKind: 'CITA LITERAL COTEJADA',
    explicitText: 'el sabio está libre de la ira que enciende la impresión de ultraje',
    explicitPage: '146',
    explanation:
      'La ausencia de venganza no significa pasividad. Significa que la respuesta no está gobernada por ira personal.',
    role:
      'Purifica la respuesta ética de la reacción pasional.',
    example:
      'No se trata de desquitarse, sino de decidir qué respuesta es racionalmente adecuada.',
    question: '¿Qué cambia cuando la respuesta deja de buscar venganza?',
    diagram: ['magnanimidad', '→', 'sin venganza'],
    dependsOn: ['S11'],
    schemaLabels: ['magnanimidad', 'sin ira', 'sin venganza'],
  }),
  node({
    id: 'S13',
    x: 650,
    y: 2420,
    phase: 'Práctica',
    title: 'Corrección',
    excerpt:
      'Si el sabio interviene frente a una conducta mala, lo hace para corregirla, no para reproducir el daño.',
    sourceText: 'no se venga, sino que los enmienda',
    sourcePage: '148',
    sourceKind: 'CITA LITERAL COTEJADA',
    explicitText: 'no se venga, sino que los enmienda',
    explicitPage: '148',
    explanation:
      'Séneca compara al sabio con el médico: la intervención racional tiene una finalidad correctiva y no vengativa.',
    role:
      'Formula positivamente qué debe reemplazar a la revancha.',
    example:
      'El médico no odia al enfermo por sus síntomas; intenta tratar la causa.',
    question: '¿Para qué responde el sabio si no busca venganza?',
    diagram: ['sin venganza', '→', 'corrección'],
    dependsOn: ['S12'],
    schemaLabels: ['respuesta racional', 'corrección', 'enmendar'],
  }),
  node({
    id: 'S14',
    x: 650,
    y: 2670,
    phase: 'Resultado',
    title: 'Libertad',
    excerpt:
      'La firmeza culmina en libertad interior: la opinión, el ultraje y la fortuna dejan de gobernar el ánimo.',
    sourceText: 'la libertad es sobreponer el ánimo a los ultrajes',
    sourcePage: '152',
    sourceKind: 'CITA LITERAL COTEJADA',
    explicitText: 'la libertad es sobreponer el ánimo a los ultrajes',
    explicitPage: '152',
    explanation:
      'La libertad no consiste en evitar todo ataque, sino en que aquello externo no se convierta en autoridad sobre el propio valor moral.',
    role:
      'Cierra el sistema con la consecuencia práctica de la constantia.',
    example:
      'Si otros me desprecian, ese desprecio no decide quién soy mientras conserve el juicio recto.',
    question: '¿En qué consiste la libertad que Séneca asocia con la firmeza?',
    diagram: ['corrección', '→', 'libertad interior'],
    dependsOn: ['S13'],
    schemaLabels: ['corrección', 'gobierno del ánimo', 'libertad'],
  }),
]

export const senecaFirmnessEdges = [
  { id: 'e01-02', source: 'S01', target: 'S02', label: '' },
  { id: 'e02-03', source: 'S02', target: 'S03', label: '' },
  { id: 'e02-04', source: 'S02', target: 'S04', label: '' },
  { id: 'e03-05', source: 'S03', target: 'S05', label: 'depende de uno mismo' },
  { id: 'e04-06', source: 'S04', target: 'S06', label: 'no dependen de mí' },
  { id: 'e05-07', source: 'S05', target: 'S07', label: '' },
  { id: 'e06-07', source: 'S06', target: 'S07', label: '' },
  { id: 'e07-08', source: 'S07', target: 'S08', label: '' },
  { id: 'e08-09', source: 'S08', target: 'S09', label: 'pretende hacer daño' },
  { id: 'e08-10', source: 'S08', target: 'S10', label: 'pretende menospreciar' },
  { id: 'e09-11', source: 'S09', target: 'S11', label: 'no alcanza virtud' },
  { id: 'e10-11', source: 'S10', target: 'S11', label: 'depende de interpretación' },
  { id: 'e11-12', source: 'S11', target: 'S12', label: '' },
  { id: 'e12-13', source: 'S12', target: 'S13', label: '' },
  { id: 'e13-14', source: 'S13', target: 'S14', label: '' },
]

export const senecaFirmnessOrder = [
  'S01',
  'S02',
  'S03',
  'S05',
  'S04',
  'S06',
  'S07',
  'S08',
  'S09',
  'S10',
  'S11',
  'S12',
  'S13',
  'S14',
]

export function senecaFirmnessNodeById(id) {
  return senecaFirmnessNodes.find((item) => item.id === id) || null
}
