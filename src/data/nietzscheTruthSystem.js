export const nietzscheStudySource = Object.freeze({
  assignment:
    'Correo docente del 5 de noviembre de 2026: para la siguiente sesión, revisar problemas gnoseológicos y ontológicos en Friedrich Nietzsche mediante una de dos lecturas.',
  optionA:
    'Más allá del bien y del mal · prólogo + Primera Parte: «De los prejuicios de los filósofos».',
  optionB:
    'Sobre verdad y mentira en sentido extramoral · ensayo de Nietzsche. Edición de trabajo preferida: Tecnos, 2.ª ed., 2012; la paginación se citará según el ejemplar efectivamente trabajado.',
  boundary:
    'La ruta de lectura y las conexiones entre ambos textos son reconstrucción pedagógica de PHILOSOPHIA. No se presentan como una secuencia indicada por el profesor ni como una doctrina unitaria formulada literalmente por Nietzsche.',
})

export const nietzscheStudyStations = Object.freeze([
  {id:'N01',layer:'Fuente primaria · 1873',title:'Intelecto y supervivencia',short:'El texto abre relativizando el orgullo del conocimiento humano: el intelecto aparece como recurso de un animal finito.',source:'Sobre verdad y mentira en sentido extramoral · §1 · apertura: fábula del conocimiento e intelecto como conservación.',question:'¿Qué cambia si el intelecto se piensa como instrumento de vida y no como espejo del ser?'},
  {id:'N02',layer:'Fuente primaria · 1873',title:'Lenguaje: del estímulo a la palabra',short:'Entre aquello que ocurre y la palabra intervienen traslaciones; el lenguaje no aparece como copia transparente de la cosa.',source:'Sobre verdad y mentira en sentido extramoral · §1 · tránsito hacia lenguaje y designación.',question:'¿Qué presupone llamar verdadera a una palabra si ya existe una mediación lingüística?'},
  {id:'N03',layer:'Fuente primaria · 1873',title:'Concepto: igualar lo no idéntico',short:'El concepto reúne casos diferentes omitiendo rasgos singulares; el ejemplo de la hoja vuelve visible esa operación.',source:'Sobre verdad y mentira en sentido extramoral · §1 · formación del concepto y ejemplo de la hoja.',question:'¿Qué pierde la singularidad cuando una pluralidad queda reunida bajo un concepto?'},
  {id:'N04',layer:'Fuente primaria · 1873',title:'Verdad, convención y olvido',short:'Las designaciones estabilizadas socialmente adquieren fuerza de verdad cuando se olvida su génesis figurativa y convencional.',source:'Sobre verdad y mentira en sentido extramoral · §1 · metáfora, convención y olvido.',question:'¿La crítica niega toda verdad o cuestiona el olvido de cómo se forman nuestras verdades?'},
  {id:'N05',layer:'Fuente primaria · 1886',title:'Voluntad de verdad',short:'La Primera Parte de Más allá del bien y del mal interroga el valor de la verdad misma y la preferencia por ella frente a sus contrarios.',source:'Más allá del bien y del mal · Primera Parte, §§1–2 · pp. impresas 22–24.',question:'¿Por qué la verdad debe valer más que la no-verdad, la incertidumbre o la ignorancia?'},
  {id:'N06',layer:'Fuente primaria · 1886',title:'Prejuicios de los filósofos',short:'Nietzsche pone bajo sospecha oposiciones y supuestos que la filosofía presenta como evidentes, y pregunta por las valoraciones que los sostienen.',source:'Más allá del bien y del mal · Primera Parte, §§3–6 · pp. impresas 24–29.',question:'¿Qué parte de una metafísica puede provenir de valoraciones previas y no de una mirada neutral?'},
  {id:'N07',layer:'Fuente primaria · 1886',title:'Sujeto, voluntad y causalidad',short:'Los §§16–22 complican la supuesta inmediatez del “yo pienso”, la simplicidad de la voluntad y el lenguaje de causa, efecto y ley natural.',source:'Más allá del bien y del mal · Primera Parte, §§16–22 · pp. impresas 39–48.',question:'¿Cuándo una forma de hablar termina pareciendo una estructura del ser?'},
  {id:'N08',layer:'Reconstrucción PHILOSOPHIA',title:'De la gnoseología a la ontología',short:'Si lenguaje y conceptos median lo conocido, la pregunta pasa de “¿cómo conocemos?” a “¿qué derecho tenemos a tratar nuestras categorías como estructura última de lo real?”.',source:'Síntesis editorial apoyada en los dos textos asignados; no es una fórmula literal de Nietzsche.',question:'¿Descubrimos sujeto, causa, identidad y ley como cosas en sí, o también interviene nuestra forma de interpretar?'},
])

export const nietzscheStudySchema = Object.freeze({
  layout:'flow',
  direction:'vertical',
  sizeHint:'tall',
  minHeight:980,
  fitPadding:38,
  ariaLabel:'Reconstrucción de estudio: del intelecto y el lenguaje a la crítica de la voluntad de verdad y las categorías ontológicas.',
  nodes:nietzscheStudyStations.map((station,index)=>({
    id:station.id,
    label:station.title,
    caption:index<4?'Sobre verdad y mentira':index<7?'Más allá del bien y del mal':'síntesis editorial',
    emphasis:index===0,
    tone:index===nietzscheStudyStations.length-1?'accent':undefined,
  })),
  edges:nietzscheStudyStations.slice(1).map((station,index)=>({
    from:nietzscheStudyStations[index].id,
    to:station.id,
    label:index===3?'abre la pregunta por el valor de la verdad':index===6?'desplaza el problema hacia el ser':'conduce a',
    relationKind:index===6?'transversal':'derives',
    arrow:'forward',
  })),
  animation:{order:nietzscheStudyStations.map((station)=>station.id),nodeDuration:0.24,edgeDuration:0.25},
})
