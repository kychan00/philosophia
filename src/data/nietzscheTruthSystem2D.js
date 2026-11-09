import {
  nietzscheCloseReading21to24,
  nietzscheCloseReadingNodes21to24,
  nietzscheCloseReadingSchema21to24,
} from './nietzscheTruthSystem.js'
import {
  nietzscheCloseReading24to33,
  nietzscheCloseReadingEdges24to33,
  nietzscheCloseReadingNodes24to33,
} from './nietzscheTruthSystem24to33.js'
import {
  nietzscheCloseReading33to37,
  nietzscheCloseReadingEdges33to37,
  nietzscheCloseReadingNodes33to37,
} from './nietzscheTruthSystem33to37.js'

export const NIETZSCHE_SYSTEM2D_GEOMETRY = Object.freeze({
  width: 310,
  height: 250,
})

const closeReadingFragments = Object.freeze([
  ...nietzscheCloseReading21to24,
  ...nietzscheCloseReading24to33,
  ...nietzscheCloseReading33to37,
])

const closeReadingNodes = Object.freeze([
  ...nietzscheCloseReadingNodes21to24,
  ...nietzscheCloseReadingNodes24to33,
  ...nietzscheCloseReadingNodes33to37,
])

const closeReadingEdges = Object.freeze([
  ...nietzscheCloseReadingSchema21to24.edges,
  ...nietzscheCloseReadingEdges24to33,
  ...nietzscheCloseReadingEdges33to37,
])

export const nietzscheSystem2DSource = Object.freeze({
  work: 'Friedrich Nietzsche · Sobre verdad y mentira en sentido extramoral',
  edition: 'Tecnos · 2.ª ed. · 2012 · edición preparada por Manuel Garrido',
  range: 'pp. 21–37',
  apa: 'Nietzsche, F. (2012). Sobre verdad y mentira en sentido extramoral y otros fragmentos de filosofía del conocimiento. Tecnos. (2.ª ed.; M. Garrido, ed. prep.).',
  boundary:
    'Los fragmentos entrecomillados proceden de las pp. 21–37 del ejemplar Tecnos 2012 aportado. Explicaciones, preguntas, rutas y relaciones se identifican como reconstrucción de estudio de PHILOSOPHIA. Los epígrafes entre corchetes y las notas al pie pertenecen al aparato editorial de esta edición.',
})

export const nietzscheSystem2DRoutes = Object.freeze([
  { id: 'all', label: 'Sistema completo', short: 'pp. 21–37 · recorrido documental completo' },
  { id: 'p21', label: 'P. 21 · Invención', short: 'Invención y contingencia del conocer', guidingQuestion: '¿Qué ocurre cuando el conocimiento deja de pensarse como rasgo eterno del mundo?' },
  { id: 'p22', label: 'P. 22 · Descentramiento', short: 'Humanidad, mosca y soberbia filosófica', guidingQuestion: '¿Cómo desmonta Nietzsche la centralidad que el ser humano atribuye a su intelecto?' },
  { id: 'p23', label: 'P. 23 · Conservación y fingimiento', short: 'Engaño, máscara, vanidad y límite perceptivo', guidingQuestion: '¿Qué función cumple el intelecto si su operación primaria está ligada a conservar la vida?' },
  { id: 'p24', label: 'P. 24 · Conciencia y pacto', short: 'Autoconocimiento, impulso a la verdad y pacto social', guidingQuestion: '¿Cómo pasa Nietzsche del problema del autoconocimiento a la institución social de la verdad?' },
  { id: 'p25', label: 'P. 25 · Convención y olvido', short: 'Verdad/mentira, utilidad y adecuación del lenguaje', guidingQuestion: '¿Por qué la sociedad distingue verdad y mentira, y qué tiene que ver esa distinción con el daño y el olvido?' },
  { id: 'p26', label: 'P. 26 · Metáfora y cosa en sí', short: 'Relaciones humanas, metáforas y límite de la cosa en sí', guidingQuestion: '¿Qué media entre estímulo, imagen, sonido y cosa?' },
  { id: 'p27', label: 'P. 27 · Formación del concepto', short: 'Palabra, generalización y equiparación de lo desigual', guidingQuestion: '¿Qué operación hace posible que una palabra funcione como concepto?' },
  { id: 'p28', label: 'P. 28 · Verdad y olvido', short: 'Antropomorfismo, metáforas gastadas y deber de verdad', guidingQuestion: '¿Qué significa llamar a la verdad una red de metáforas olvidadas?' },
  { id: 'p29', label: 'P. 29 · Abstracción y orden', short: 'Abstracciones, edificio conceptual y reglas de clasificación', guidingQuestion: '¿Cómo transforma la razón metáforas intuitivas en un orden conceptual estable?' },
  { id: 'p30', label: 'P. 30 · Antropomorfismo', short: 'Genio constructor, descubrimiento y medida humana', guidingQuestion: '¿Qué descubre la razón cuando busca verdad dentro de un mundo que ella misma conceptualizó?' },
  { id: 'p31', label: 'P. 31 · Sujeto y objeto', short: 'Olvido del creador, perspectivas y traducción estética', guidingQuestion: '¿Puede existir una percepción absolutamente correcta entre sujeto y objeto?' },
  { id: 'p32', label: 'P. 32 · Ley natural', short: 'Repetición, percepción y regularidad de la naturaleza', guidingQuestion: '¿La repetición de una metáfora demuestra su necesidad o sólo su estabilidad?' },
  { id: 'p33', label: 'P. 33 · Formas y ciencia', short: 'Espacio, tiempo, número y comienzo de la Parte 2', guidingQuestion: '¿Cómo pasa Nietzsche de las formas que aportamos al trabajo científico sobre el edificio conceptual?' },
  { id: 'p34', label: 'P. 34 · Metáfora, mito y arte', short: 'Ciencia, impulso metafórico y mundo artístico', guidingQuestion: '¿Por qué el orden científico no consigue extinguir el impulso de construir metáforas?' },
  { id: 'p35', label: 'P. 35 · Hechizo y fingimiento', short: 'Sueño, mito, engaño feliz y Saturnales del intelecto', guidingQuestion: '¿Cómo cambia el valor del engaño cuando deja de perjudicar y se vuelve experiencia artística?' },
  { id: 'p36', label: 'P. 36 · Intelecto liberado', short: 'Destrucción conceptual, intuición y dos tipos humanos', guidingQuestion: '¿Qué ocurre cuando el intelecto deja de servir a la necesidad y se guía por intuiciones?' },
  { id: 'p37', label: 'P. 37 · Racional e intuitivo', short: 'Arte sobre la vida, sufrimiento y máscara estoica', guidingQuestion: '¿Qué gana y qué pierde cada forma de dominar la vida?' },
])

export const nietzscheSystem2DOrder = Object.freeze(
  closeReadingNodes.map((node) => node.id),
)

const OLD_POSITION = Object.freeze({
  'S21-1': { x: 0, y: 0 },
  'S21-2': { x: 0, y: 340 },
  'S21-3': { x: 0, y: 680 },

  'S22-1': { x: 430, y: 0 },
  'S22-2': { x: 430, y: 340 },
  'S22-3': { x: 430, y: 680 },
  'S22-4': { x: 430, y: 1020 },
  'S22-5': { x: 860, y: 680 },
  'S22-6': { x: 860, y: 1020 },

  'S23-1': { x: 1290, y: 0 },
  'S23-2': { x: 1290, y: 340 },
  'S23-3': { x: 1290, y: 680 },
  'S23-4': { x: 1290, y: 1020 },
  'S23-5': { x: 1720, y: 0 },
  'S23-6': { x: 1720, y: 340 },
  'S23-7': { x: 1720, y: 680 },
  'S23-8': { x: 1720, y: 1020 },
  'S23-9': { x: 2150, y: 0 },
  'S23-10': { x: 2150, y: 340 },
  'S23-11': { x: 2150, y: 680 },
  'S23-12': { x: 2150, y: 1020 },

  'S24-1': { x: 2580, y: 0 },
  'S24-2': { x: 2580, y: 340 },
  'S24-3': { x: 2580, y: 680 },
  'S24-4': { x: 2580, y: 1020 },
  'S24-5': { x: 3010, y: 340 },
  'S24-6': { x: 3010, y: 680 },
  'S24-7': { x: 3010, y: 1020 },
})

const post24Nodes = Object.freeze([
  ...nietzscheCloseReadingNodes24to33,
  ...nietzscheCloseReadingNodes33to37,
])

const pageNodes = new Map()
post24Nodes.forEach((node) => {
  const page = Number(node.id.slice(1, 3))
  if (!pageNodes.has(page)) pageNodes.set(page, [])
  pageNodes.get(page).push(node.id)
})

const NEW_POSITION = Object.freeze(
  Object.fromEntries(
    post24Nodes.map((node) => {
      const page = Number(node.id.slice(1, 3))
      const index = pageNodes.get(page).indexOf(node.id)
      const x = 3440 + (page - 24) * 430
      return [node.id, { x, y: index * 340 }]
    }),
  ),
)

const POSITION = Object.freeze({
  ...OLD_POSITION,
  ...NEW_POSITION,
})

const PAGE_META = Object.freeze({
  21: { route: 'p21', phase: 'P. 21 · invención', tone: 'moss', concepts: ['conocimiento', 'invención', 'contingencia'] },
  22: { route: 'p22', phase: 'P. 22 · descentramiento', tone: 'gold', concepts: ['intelecto', 'antropocentrismo', 'soberbia'] },
  23: { route: 'p23', phase: 'P. 23 · conservación y fingimiento', tone: 'blue', concepts: ['conservación', 'engaño', 'fingimiento', 'percepción'] },
  24: { route: 'p24', phase: 'P. 24 · conciencia, pacto y verdad', tone: 'plum', concepts: ['autoconocimiento', 'pacto social', 'verdad', 'lenguaje'] },
  25: { route: 'p25', phase: 'P. 25 · convención y olvido', tone: 'rust', concepts: ['convención', 'verdad y mentira', 'utilidad', 'olvido'] },
  26: { route: 'p26', phase: 'P. 26 · metáfora y cosa en sí', tone: 'ochre', concepts: ['metáfora', 'lenguaje', 'cosa en sí', 'relación'] },
  27: { route: 'p27', phase: 'P. 27 · formación del concepto', tone: 'gold', concepts: ['concepto', 'generalización', 'igualación', 'hoja'] },
  28: { route: 'p28', phase: 'P. 28 · verdad y olvido', tone: 'bronze', concepts: ['verdad', 'metáfora', 'antropomorfismo', 'olvido'] },
  29: { route: 'p29', phase: 'P. 29 · abstracción y orden', tone: 'sage', concepts: ['abstracción', 'clasificación', 'edificio conceptual', 'regla'] },
  30: { route: 'p30', phase: 'P. 30 · antropomorfismo', tone: 'moss', concepts: ['antropomorfismo', 'concepto', 'medida humana', 'descubrimiento'] },
  31: { route: 'p31', phase: 'P. 31 · sujeto y objeto', tone: 'violet', concepts: ['sujeto', 'objeto', 'perspectiva', 'traducción'] },
  32: { route: 'p32', phase: 'P. 32 · ley natural', tone: 'blue', concepts: ['ley natural', 'percepción', 'repetición', 'relación'] },
  33: { route: 'p33', phase: 'P. 33 · formas aportadas y ciencia', tone: 'plum', concepts: ['espacio', 'tiempo', 'número', 'ciencia'] },
  34: { route: 'p34', phase: 'P. 34 · metáfora, mito y arte', tone: 'rust', concepts: ['ciencia', 'metáfora', 'mito', 'arte'] },
  35: { route: 'p35', phase: 'P. 35 · hechizo y fingimiento', tone: 'gold', concepts: ['sueño', 'mito', 'engaño', 'fingimiento'] },
  36: { route: 'p36', phase: 'P. 36 · intelecto liberado', tone: 'violet', concepts: ['intuición', 'arte', 'intelecto', 'concepto'] },
  37: { route: 'p37', phase: 'P. 37 · racional e intuitivo', tone: 'sage', concepts: ['hombre racional', 'hombre intuitivo', 'estoicismo', 'vida'] },
})

const SIMPLE = Object.freeze({
  'S21-1': 'El conocimiento no aparece como algo eterno: aparece como algo que ciertos animales llegaron a producir.',
  'S21-2': 'La importancia que damos al conocer es enorme para nosotros, pero diminuta si cambiamos la escala.',
  'S21-3': 'Si desaparece el mundo de esos animales, también desaparece su conocimiento.',
  'S22-1': 'Nietzsche rebaja el prestigio del intelecto: es frágil y contingente.',
  'S22-2': 'El intelecto no recibe una misión cósmica ni un fin superior garantizado.',
  'S22-3': 'Lo que llamamos conocimiento sigue siendo una capacidad humana.',
  'S22-4': 'El ser humano convierte una capacidad local en una supuesta centralidad universal.',
  'S22-5': 'La mosca sirve para mostrar que sentirse centro no prueba serlo.',
  'S22-6': 'El filósofo puede llevar al extremo la ilusión de que sus pensamientos importan al universo.',
  'S23-1': 'El intelecto sirve primero para conservar a un viviente vulnerable.',
  'S23-2': 'El orgullo del conocer puede impedir ver con claridad nuestra propia condición.',
  'S23-3': 'El conocimiento tiende a valorarse a sí mismo de manera interesada.',
  'S23-4': 'El engaño no aparece como accidente: organiza el funcionamiento descrito del intelecto.',
  'S23-5': 'Fingir es una estrategia de conservación.',
  'S23-6': 'La apariencia se despliega socialmente en máscaras, adulación, fraude y representación.',
  'S23-7': 'La vanidad organiza buena parte de ese teatro de apariencias.',
  'S23-8': 'Si vivimos entre fingimientos, una voluntad totalmente pura de verdad deja de ser obvia.',
  'S23-9': 'La experiencia humana ordinaria está atravesada por ilusión.',
  'S23-10': 'Percibimos formas y superficies, no una transparencia inmediata de las cosas.',
  'S23-11': 'Recibir estímulos no equivale automáticamente a poseer la verdad.',
  'S23-12': 'El sueño muestra cuán fácilmente aceptamos como real una apariencia.',
  'S24-1': 'El problema ya no es sólo conocer el mundo: también conocemos mal a quien conoce.',
  'S24-2': 'Ni siquiera nuestro propio cuerpo está enteramente presente para la conciencia.',
  'S24-3': 'La conciencia puede ser limitada y, al mismo tiempo, sentirse soberana.',
  'S24-4': 'La metáfora de la llave expresa que no tenemos acceso total a lo que nos constituye.',
  'S24-5': 'Bajo la conciencia hay impulsos que ella no controla ni contempla plenamente.',
  'S24-6': 'La conciencia vive con una seguridad aparente sobre fuerzas que pueden desbordarla.',
  'S24-7': 'Después de describir conservación, engaño e ilusión, Nietzsche pregunta por qué buscamos verdad.',

  'S24-8': 'La convivencia necesita estabilizar cómo nos tratamos y cómo nombramos.',
  'S24-9': 'La verdad empieza a adquirir una forma social cuando el grupo fija usos compartidos.',
  'S24-10': 'El lenguaje funciona como una especie de legislador de designaciones comunes.',
  'S25-1': 'Verdad y mentira sólo tienen sentido dentro de un sistema de nombres ya aceptado.',
  'S25-2': 'La sociedad castiga sobre todo el engaño que daña la convivencia.',
  'S25-3': 'No buscamos cualquier verdad: preferimos las que sirven o protegen la vida.',
  'S25-4': 'Nietzsche pregunta si una palabra realmente coincide con aquello que nombra.',
  'S25-5': 'Sentirse dueño de la verdad requiere olvidar cómo se formaron nuestras palabras.',
  'S25-6': 'Una palabra no llega directamente desde la cosa: hay transformaciones intermedias.',
  'S26-1': 'Incluso cualidades aparentemente objetivas pasan por una experiencia del sujeto y por clasificaciones lingüísticas.',
  'S26-2': 'Si hubiera una palabra necesariamente correcta para cada cosa, la diversidad de lenguas sería difícil de explicar.',
  'S26-3': 'El lenguaje no alcanza una cosa tal como sería completamente independiente de nosotros.',
  'S26-4': 'Nombramos relaciones humanas con las cosas usando traslaciones metafóricas.',
  'S26-5': 'Estímulo, imagen y sonido pertenecen a planos distintos; pasar de uno a otro ya es interpretar.',
  'S27-1': 'El lenguaje no nace deduciendo lógicamente la esencia de las cosas.',
  'S27-2': 'Una palabra se vuelve concepto cuando sirve para muchos casos diferentes.',
  'S27-3': 'Conceptualizar significa tratar como iguales cosas que nunca son idénticas.',
  'S27-4': 'Decir «hoja» borra diferencias entre hojas y puede hacernos imaginar una hoja-modelo.',
  'S28-1': 'Lo mismo ocurre con «honestidad»: agrupamos acciones distintas y postulamos una cualidad común.',
  'S28-2': 'El concepto simplifica lo singular y proyecta clasificaciones humanas sobre la naturaleza.',
  'S28-3': 'La verdad aparece como una red humana de metáforas y relaciones estabilizadas.',
  'S28-4': 'Una verdad puede parecer literal cuando olvidamos que comenzó como una construcción figurativa.',
  'S28-5': 'Ser veraz significa respetar el vocabulario y las reglas que la comunidad reconoce.',
  'S28-6': 'El hábito hace olvidar la convención hasta convertirla en sentimiento y deber de verdad.',
  'S29-1': 'La verdad gana prestigio porque permite confianza y coordinación social.',
  'S29-2': 'La razón convierte imágenes singulares en conceptos más generales y fríos.',
  'S29-3': 'Con esos conceptos construimos un orden jerárquico de leyes, clases y límites.',
  'S29-4': 'Detrás de un concepto sigue habiendo una metáfora que se ha endurecido.',
  'S29-5': 'Dentro del sistema conceptual, ser verdadero consiste en clasificar según las reglas del sistema.',
  'S29-6': 'Cada cultura puede ordenar el mundo con su propio cielo conceptual.',
  'S30-1': 'El ser humano construye una arquitectura conceptual enorme sobre fundamentos que no son absolutos.',
  'S30-2': 'El material del edificio conceptual es producido por nuestra propia actividad.',
  'S30-3': 'A veces llamamos descubrimiento a encontrar lo que nuestras definiciones ya habían puesto allí.',
  'S30-4': 'Las verdades conceptuales siguen teniendo forma humana; no son una visión desde ningún lugar.',
  'S30-5': 'Conocer vuelve el mundo asimilable a categorías humanas y después olvida esa transformación.',
  'S31-1': 'Tomamos nuestras representaciones por cosas mismas cuando olvidamos que eran metáforas.',
  'S31-2': 'También olvidamos que el sujeto participa creativamente en la forma de lo percibido.',
  'S31-3': 'No tenemos una regla externa a toda percepción para declarar una perspectiva absolutamente correcta.',
  'S31-4': 'Objeto y sujeto no encajan como una copia exacta y automática.',
  'S31-5': 'Conocer se parece más a traducir entre lenguajes distintos que a calcar una cosa.',
  'S32-1': 'Repetir una traducción durante generaciones puede hacerla parecer necesaria.',
  'S32-2': 'Que una metáfora se vuelva rígida y habitual no demuestra que sea verdadera en sí.',
  'S32-3': 'Lo que llamamos regularidad natural está ligado a la forma compartida en que percibimos.',
  'S32-4': 'No conocemos la ley natural por dentro; conocemos efectos y relaciones.',
  'S33-1': 'Al conocer leyes también reconocemos estructuras que nosotros aportamos: espacio, tiempo, sucesión y número.',
  'S33-2': 'La regularidad científica aparece dentro de formas matemáticas y espacio-temporales muy estables.',
  'S33-3': 'Nietzsche insiste en que esas formas proceden de nuestra propia actividad cognoscitiva.',
  'S33-4': 'Si sólo podemos pensar bajo ciertas formas, encontrarlas en toda experiencia no demuestra que existan fuera de esas formas.',
  'S33-5': 'El edificio de los conceptos reproduce un orden que ya estaba organizado por nuestras formas de percepción.',
  'S33-6': 'La ciencia no parte de cero: trabaja sobre el mundo conceptual que el lenguaje ya había construido.',
  'S33-7': 'Como la abeja con sus celdas, la ciencia construye y llena continuamente su arquitectura conceptual.',
  'S34-1': 'La ciencia amplía un archivo de conceptos cuya estabilidad ha sustituido la viveza de las intuiciones.',
  'S34-2': 'Ordenar científicamente el mundo empírico sigue siendo ordenarlo mediante formas humanas.',
  'S34-3': 'El investigador se protege dentro del orden científico frente a otras formas de verdad que lo amenazan.',
  'S34-4': 'El impulso a crear metáforas no desaparece cuando nacen los conceptos; sólo queda parcialmente contenido.',
  'S34-5': 'Cuando la ciencia rigidiza el mundo, la metáfora encuentra salida en mito y, sobre todo, en arte.',
  'S34-6': 'El arte altera las clasificaciones y vuelve extraño, móvil y nuevo el mundo cotidiano.',
  'S34-7': 'Si el arte rompe la red conceptual con la que reconocemos la vigilia, podemos experimentar el mundo como sueño.',
  'S35-1': 'La regularidad ayuda a decidir qué llamamos realidad: un sueño repetido podría adquirir el peso de la vigilia.',
  'S35-2': 'Una cultura mítica habita un mundo donde el milagro y la transformación forman parte de la experiencia ordinaria.',
  'S35-3': 'La naturaleza puede aparecer como una representación cambiante en la que los dioses juegan con las formas.',
  'S35-4': 'El ser humano no sólo teme ser engañado: también disfruta la ficción cuando no lo perjudica.',
  'S35-5': 'En el arte, el mismo intelecto que fingía para sobrevivir puede fingir libremente y sin daño.',
  'S35-6': 'Liberado de la necesidad, el intelecto crea metáforas y mueve las fronteras de las abstracciones.',
  'S36-1': 'El intelecto artístico ya no actúa como sirviente de la supervivencia: se comporta como creador soberano.',
  'S36-2': 'La estructura conceptual que antes era refugio se convierte en material de juego.',
  'S36-3': 'Crear significa desmontar y volver a combinar clasificaciones que parecían fijas.',
  'S36-4': 'La intuición sustituye al concepto como guía inmediata del intelecto liberado.',
  'S36-5': 'Algunas intuiciones exceden el lenguaje corriente y sólo encuentran salida en silencios o metáforas nuevas.',
  'S36-6': 'Racional e intuitivo quieren afrontar la vida, pero uno confía en cálculo y regularidad y el otro en apariencia y creación.',
  'S37-1': 'Cuando domina la intuición, el arte puede organizar la cultura entera y no sólo obras aisladas.',
  'S37-2': 'La forma artística puede hacer que incluso la necesidad cotidiana aparezca como belleza y juego.',
  'S37-3': 'La razón conceptual protege contra el dolor, pero no produce necesariamente una felicidad positiva.',
  'S37-4': 'La intuición ofrece claridad y liberación, pero también expone a sufrimientos más intensos y repetidos.',
  'S37-5': 'El estoico representa el dominio racional de sí mediante experiencia y conceptos.',
  'S37-6': 'El cierre es irónico: el hombre que combate el engaño también necesita una máscara para atravesar la desgracia.',
})

const byMapTo = new Map()
closeReadingFragments.forEach((fragment) => {
  if (!byMapTo.has(fragment.mapTo)) byMapTo.set(fragment.mapTo, [])
  byMapTo.get(fragment.mapTo).push(fragment)
})

const incomingById = new Map(nietzscheSystem2DOrder.map((id) => [id, []]))
const outgoingById = new Map(nietzscheSystem2DOrder.map((id) => [id, []]))

closeReadingEdges.forEach((edge) => {
  incomingById.get(edge.to)?.push(edge.from)
  outgoingById.get(edge.from)?.push(edge.to)
})

function pageFromId(id) {
  return Number(id.slice(1, 3))
}

function topicToneFor(id, page) {
  if (page !== 23) return PAGE_META[page].tone
  if (['S23-1', 'S23-2', 'S23-3', 'S23-4'].includes(id)) return 'rust'
  if (['S23-5', 'S23-6', 'S23-7', 'S23-8'].includes(id)) return 'ochre'
  return 'blue'
}

function shortExplanation(fragments) {
  return fragments[0]?.reading || 'Explicación pendiente de cotejo.'
}

export function nietzscheNodeSchema(id) {
  const node = closeReadingNodes.find((item) => item.id === id)
  if (!node) return null

  const neighborIds = [
    ...(incomingById.get(id) || []),
    ...(outgoingById.get(id) || []),
  ]
  const unique = [...new Set(neighborIds)]
  const radius = unique.length > 5 ? 0.37 : 0.34

  const nodes = [
    {
      id,
      label: node.label,
      caption: 'nodo focal',
      position: { x: 0.5, y: 0.5 },
      emphasis: true,
      shapeRole: 'concept',
    },
    ...unique.map((neighborId, index) => {
      const neighbor = closeReadingNodes.find((item) => item.id === neighborId)
      const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / Math.max(unique.length, 1)
      return {
        id: neighborId,
        label: neighbor?.label || neighborId,
        caption: (incomingById.get(id) || []).includes(neighborId) ? 'antecede' : 'abre hacia',
        position: {
          x: 0.5 + Math.cos(angle) * radius,
          y: 0.5 + Math.sin(angle) * radius,
        },
        shapeRole: 'term',
      }
    }),
  ]

  const edges = closeReadingEdges
    .filter((edge) => edge.from === id || edge.to === id)
    .map((edge) => ({
      from: edge.from,
      to: edge.to,
      label: edge.label,
      relationKind: edge.relationKind || 'derives',
    }))

  return {
    layout: 'constellation',
    canvas: { width: 760, height: 540 },
    minHeight: 460,
    fitPadding: 36,
    legend: false,
    ariaLabel: `Relaciones documentadas de estudio para ${node.label}`,
    nodes,
    edges,
  }
}

export const nietzscheSystem2DNodes = Object.freeze(
  closeReadingNodes.map((baseNode) => {
    const page = pageFromId(baseNode.id)
    const meta = PAGE_META[page]
    const fragments = byMapTo.get(baseNode.id) || []
    const first = fragments[0]

    return {
      id: baseNode.id,
      type: 'nietzscheTruth',
      position: POSITION[baseNode.id],
      data: {
        code: baseNode.id,
        title: baseNode.label,
        phase: meta.phase,
        page,
        branch: [meta.route],
        topicTone: topicToneFor(baseNode.id, page),
        excerpt: first?.phrase || 'cita literal pendiente de cotejo',
        sourceFragments: fragments,
        sourceRef: `Nietzsche · Tecnos 2012 · p. ${page}`,
        sourceLabel: 'Nietzsche · Tecnos 2012',
        apaShort: `(Nietzsche, 2012, p. ${page})`,
        explanation: fragments.map((item) => item.reading).join(' '),
        shortExplanation: shortExplanation(fragments),
        simple: SIMPLE[baseNode.id],
        concepts: meta.concepts,
        dependsOn: [...(incomingById.get(baseNode.id) || [])],
        produces: [...(outgoingById.get(baseNode.id) || [])],
        question: `Explique desde la p. ${page} qué función cumple «${baseNode.label}» dentro del movimiento del argumento.`,
        questionProvenance: 'philosophia',
        schema: nietzscheNodeSchema(baseNode.id),
        relationLayer: 'Reconstrucción de estudio PHILOSOPHIA',
      },
    }
  }),
)

export const nietzscheSystem2DEdges = Object.freeze(
  closeReadingEdges.map((edge, index) => ({
    id: `NT-E${String(index + 1).padStart(3, '0')}`,
    source: edge.from,
    target: edge.to,
    label: edge.label || 'continúa',
    relationKind: edge.relationKind || 'derives',
    reconstruction: true,
  })),
)

export const nietzscheSystem2DGuidedRoute = Object.freeze(
  nietzscheSystem2DOrder.map((id, index) => {
    const node = nietzscheSystem2DNodes.find((item) => item.id === id)
    return {
      id,
      number: index + 1,
      title: node?.data.title || id,
      sourceRef: node?.data.sourceRef || '',
    }
  }),
)

export const nietzscheSystem2DStats = Object.freeze({
  nodeCount: nietzscheSystem2DNodes.length,
  edgeCount: nietzscheSystem2DEdges.length,
  fragmentCount: closeReadingFragments.length,
  firstPage: 21,
  lastPage: 37,
})

export function nietzscheSystem2DNodeById(id) {
  return nietzscheSystem2DNodes.find((node) => node.id === id) || null
}

export function nietzscheSystem2DRouteOrder(routeId) {
  if (!routeId || routeId === 'all') return [...nietzscheSystem2DOrder]
  return nietzscheSystem2DOrder.filter((id) =>
    nietzscheSystem2DNodeById(id)?.data.branch.includes(routeId),
  )
}

export const nietzscheSystem2DMasterSchema = Object.freeze({
  nodes: closeReadingNodes,
  edges: closeReadingEdges,
})
