export const senecaFirmnessSource = Object.freeze({
  author: 'Lucio Anneo Séneca',
  work: 'Sobre la firmeza del sabio',
  edition: 'Séneca. Biblioteca de Grandes Pensadores. Gredos, 2013.',
  translator: 'Juan Mariné Isidro',
  pages: '140–153',
  boundary:
    'Sistema de estudio construido únicamente a partir del diálogo Sobre la firmeza del sabio en la edición Gredos aportada para cotejo. Las conexiones visuales se presentan como reconstrucción de estudio.',
})

const schema = (ariaLabel, nodes, edges) => ({
  layout: 'flow',
  direction: 'horizontal',
  ariaLabel,
  nodes,
  edges,
  animation: {
    order: nodes.map((node) => node.id),
    nodeDuration: 0.28,
    edgeDuration: 0.3,
  },
})

export const senecaFirmnessNodes = [
  {
    id: 'S01',
    type: 'seneca',
    position: { x: 40, y: 250 },
    data: {
      code: 'S01',
      phase: 'Tesis',
      title: 'La firmeza del sabio',
      excerpt:
        'El ataque exterior puede ocurrir, pero no alcanza por sí mismo el núcleo moral del sabio.',
      sourceText: 'el sabio no puede recibir ningún ultraje ni ofensa',
      sourcePage: '140',
      sourceRef: 'Séneca · Sobre la firmeza del sabio · p. 140',
      sourceKind: 'CITA LITERAL COTEJADA',
      explanation:
        'La tesis no niega que haya insultos, golpes o humillaciones. Niega que éstos tengan por sí solos el poder de destruir la virtud del sabio.',
      role:
        'Plantea la afirmación que todo el diálogo intenta defender: invulnerabilidad moral no significa ausencia de ataques.',
      example:
        'Catón puede ser insultado y humillado públicamente sin que la multitud convierta ese ataque en pérdida de su carácter.',
      question: '¿Qué tendría que perder el sabio para quedar realmente dañado?',
      diagram: ['ataque exterior', '→', 'virtud intacta'],
      dependsOn: [],
      schema: schema(
        'Reconstrucción de estudio: el ataque exterior llega al sabio, pero no destruye su virtud.',
        [
          { id: 'ataque', label: 'ataque exterior', shape: 'roundedRect' },
          { id: 'sabio', label: 'sabio', shape: 'circle', emphasis: true },
          { id: 'virtud', label: 'virtud intacta', shape: 'pill', tone: 'accent' },
        ],
        [
          { from: 'ataque', to: 'sabio', label: 'alcanza el exterior', arrow: 'forward' },
          { from: 'sabio', to: 'virtud', label: 'conserva', arrow: 'forward' },
        ],
      ),
    },
  },
  {
    id: 'S02',
    type: 'seneca',
    position: { x: 410, y: 70 },
    data: {
      code: 'S02',
      phase: 'Fundamento',
      title: 'El bien está en la virtud',
      excerpt:
        'Lo verdaderamente propio del sabio no depende de la fortuna: su bien está fundado en sí mismo.',
      sourceText: 'todo lo ha basado en sí mismo',
      sourcePage: '143',
      sourceRef: 'Séneca · Sobre la firmeza del sabio · p. 143',
      sourceKind: 'CITA LITERAL COTEJADA',
      explanation:
        'La fortuna puede dar y quitar riqueza, posición o bienes externos. La virtud no procede de la fortuna; por eso tampoco puede ser arrebatada por ella.',
      role:
        'Da el fundamento de la tesis: si el bien propio es la virtud, perder un bien externo no equivale a perder el bien moral.',
      example:
        'Estilpón pierde ciudad, bienes y seguridad exterior, pero sostiene que conserva aquello que verdaderamente es suyo.',
      question: '¿Qué puede quitar la fortuna y qué no puede quitar?',
      diagram: ['fortuna', '≠', 'virtud'],
      dependsOn: ['S01'],
      schema: schema(
        'Reconstrucción de estudio: la fortuna gobierna los externos, pero no produce ni quita la virtud.',
        [
          { id: 'fortuna', label: 'fortuna', shape: 'diamond' },
          { id: 'externos', label: 'bienes externos', shape: 'roundedRect' },
          { id: 'virtud', label: 'virtud', shape: 'circle', emphasis: true },
        ],
        [
          { from: 'fortuna', to: 'externos', label: 'da y quita', arrow: 'forward' },
          { from: 'externos', to: 'virtud', label: 'no determina', arrow: 'forward', kind: 'secondary' },
        ],
      ),
    },
  },
  {
    id: 'S03',
    type: 'seneca',
    position: { x: 410, y: 430 },
    data: {
      code: 'S03',
      phase: 'Distinción',
      title: 'Intentar no es lograr',
      excerpt:
        'La injusticia del agresor puede existir aunque el daño pretendido no llegue a ser recibido por el sabio.',
      sourceText: 'puede ocurrir que alguien me haga un ultraje y yo no lo reciba',
      sourcePage: '145',
      sourceRef: 'Séneca · Sobre la firmeza del sabio · p. 145',
      sourceKind: 'CITA LITERAL COTEJADA',
      explanation:
        'Séneca separa la culpabilidad de quien intenta dañar del efecto que consigue. El agresor puede actuar injustamente sin dominar la interioridad de la víctima.',
      role:
        'Evita confundir la invulnerabilidad del sabio con impunidad moral del agresor.',
      example:
        'El ejemplo del veneno: quien lo administra es culpable por su intención aunque el veneno pierda su efecto.',
      question: '¿Puede haber culpa del agresor sin daño moral recibido?',
      diagram: ['intención injusta', '→', 'daño no recibido'],
      dependsOn: ['S01', 'S02'],
      schema: schema(
        'Reconstrucción de estudio: la intención injusta pertenece al agresor; el efecto moral no se sigue automáticamente.',
        [
          { id: 'intencion', label: 'intención injusta', shape: 'roundedRect' },
          { id: 'intento', label: 'intento de ultraje', shape: 'diamond' },
          { id: 'recepcion', label: 'daño moral no recibido', shape: 'pill', tone: 'accent' },
        ],
        [
          { from: 'intencion', to: 'intento', label: 'produce', arrow: 'forward' },
          { from: 'intento', to: 'recepcion', label: 'no garantiza', arrow: 'forward', kind: 'secondary' },
        ],
      ),
    },
  },
  {
    id: 'S04',
    type: 'seneca',
    position: { x: 800, y: 70 },
    data: {
      code: 'S04',
      phase: 'Experiencia',
      title: 'Sentir dolor no es ser vencido',
      excerpt:
        'La firmeza no convierte al sabio en una piedra: puede sentir dolor sin aceptar que ese dolor destruya su virtud.',
      sourceText: 'no los despojamos de la sensación de dolor sino del nombre de ultraje',
      sourcePage: '150',
      sourceRef: 'Séneca · Sobre la firmeza del sabio · p. 150',
      sourceKind: 'CITA LITERAL COTEJADA',
      explanation:
        'Séneca conserva la realidad corporal del dolor. Lo que niega es la conclusión de que todo sufrimiento externo constituya por eso una derrota moral.',
      role:
        'Aclara el sentido de la impasibilidad: dominio del juicio, no anestesia emocional o corporal.',
      example:
        'Un golpe puede doler y una pérdida puede entristecer; la cuestión estoica es qué juicio hacemos después sobre ese acontecimiento.',
      question: '¿Qué diferencia hay entre sufrir y quedar moralmente derrotado?',
      diagram: ['dolor', '→', 'juicio', '→', 'virtud'],
      dependsOn: ['S02'],
      schema: schema(
        'Reconstrucción de estudio: el dolor se siente, pero el juicio puede conservar la virtud.',
        [
          { id: 'dolor', label: 'dolor', shape: 'roundedRect' },
          { id: 'juicio', label: 'juicio racional', shape: 'diamond', emphasis: true },
          { id: 'virtud', label: 'virtud conservada', shape: 'pill', tone: 'accent' },
        ],
        [
          { from: 'dolor', to: 'juicio', label: 'es valorado por', arrow: 'forward' },
          { from: 'juicio', to: 'virtud', label: 'preserva', arrow: 'forward' },
        ],
      ),
    },
  },
  {
    id: 'S05',
    type: 'seneca',
    position: { x: 800, y: 430 },
    data: {
      code: 'S05',
      phase: 'Respuesta',
      title: 'Corregir, no vengarse',
      excerpt:
        'Si el sabio responde a quien obra mal, su finalidad no es devolver el dolor, sino corregir la conducta.',
      sourceText: 'no se venga, sino que los enmienda',
      sourcePage: '148',
      sourceRef: 'Séneca · Sobre la firmeza del sabio · p. 148',
      sourceKind: 'CITA LITERAL COTEJADA',
      explanation:
        'Al no construirse como víctima moral del ultraje, el sabio no necesita vengar una herida de orgullo. Puede intervenir por una razón correctiva.',
      role:
        'Transforma la reacción ética: de la revancha personal a la corrección racional.',
      example:
        'Séneca compara al sabio con un médico: el médico no se indigna con el enfermo por comportarse como enfermo; busca tratarlo.',
      question: '¿Qué cambia cuando la respuesta busca corregir en vez de vengarse?',
      diagram: ['injusticia', '→', 'corrección', '≠', 'venganza'],
      dependsOn: ['S03'],
      schema: schema(
        'Reconstrucción de estudio: ante la injusticia, la respuesta racional se orienta a la corrección y no a la venganza.',
        [
          { id: 'injusticia', label: 'injusticia', shape: 'roundedRect' },
          { id: 'razon', label: 'respuesta racional', shape: 'diamond', emphasis: true },
          { id: 'correccion', label: 'corrección', shape: 'pill', tone: 'accent' },
        ],
        [
          { from: 'injusticia', to: 'razon', label: 'exige respuesta', arrow: 'forward' },
          { from: 'razon', to: 'correccion', label: 'orienta hacia', arrow: 'forward' },
        ],
      ),
    },
  },
  {
    id: 'S06',
    type: 'seneca',
    position: { x: 1190, y: 250 },
    data: {
      code: 'S06',
      phase: 'Resultado',
      title: 'Libertad interior',
      excerpt:
        'La culminación práctica es que la alegría y la dignidad no dependan del juicio o desprecio de otros.',
      sourceText: 'la libertad es sobreponer el ánimo a los ultrajes',
      sourcePage: '152',
      sourceRef: 'Séneca · Sobre la firmeza del sabio · p. 152',
      sourceKind: 'CITA LITERAL COTEJADA',
      explanation:
        'La libertad no consiste en evitar toda agresión, sino en impedir que la valoración ajena se convierta en gobierno de la propia vida interior.',
      role:
        'Cierra la secuencia: la firmeza es autonomía práctica frente a fortuna, insulto y reconocimiento social.',
      example:
        'Si una burla es verdadera, puede examinarse; si es falsa, no define a quien la recibe. En ambos casos el juicio propio conserva la iniciativa.',
      question: '¿Quién gobierna mi ánimo cuando mi valor depende de la opinión ajena?',
      diagram: ['juicio propio', '→', 'firmeza', '→', 'libertad'],
      dependsOn: ['S04', 'S05'],
      schema: schema(
        'Reconstrucción de estudio: el juicio propio sostiene la firmeza y culmina en libertad interior.',
        [
          { id: 'juicio', label: 'juicio propio', shape: 'roundedRect' },
          { id: 'firmeza', label: 'firmeza', shape: 'diamond', emphasis: true },
          { id: 'libertad', label: 'libertad interior', shape: 'circle', tone: 'accent' },
        ],
        [
          { from: 'juicio', to: 'firmeza', label: 'sostiene', arrow: 'forward' },
          { from: 'firmeza', to: 'libertad', label: 'culmina en', arrow: 'forward' },
        ],
      ),
    },
  },
]

export const senecaFirmnessEdges = [
  { id: 'e01-02', source: 'S01', target: 'S02', label: 'se funda en' },
  { id: 'e01-03', source: 'S01', target: 'S03', label: 'obliga a distinguir' },
  { id: 'e02-04', source: 'S02', target: 'S04', label: 'permite separar' },
  { id: 'e03-05', source: 'S03', target: 'S05', label: 'cambia la respuesta' },
  { id: 'e04-06', source: 'S04', target: 'S06', label: 'preserva el juicio' },
  { id: 'e05-06', source: 'S05', target: 'S06', label: 'orienta hacia' },
]

export const senecaFirmnessOrder = senecaFirmnessNodes.map((node) => node.id)

export function senecaFirmnessNodeById(id) {
  return senecaFirmnessNodes.find((node) => node.id === id) || null
}
