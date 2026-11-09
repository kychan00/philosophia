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


export const nietzscheEditorialApparatus21to24 = Object.freeze([
  {
    id: 'ED-21-A',
    page: 21,
    title: 'Epígrafes entre corchetes',
    note: 'La propia edición aclara que los epígrafes entre corchetes se insertan para orientar al lector. No se atribuyen a Nietzsche.',
  },
  {
    id: 'ED-21-B',
    page: '21–22',
    title: 'Nota editorial 4',
    note: 'El aparato crítico propone leer la apertura en relación polémica con Hegel y, por otra vía, con Darwin y el pasaje paralelo de Schopenhauer. Esta relación pertenece a la nota editorial, no al cuerpo del ensayo.',
  },
])

export const nietzscheCloseReading21to24 = Object.freeze([
  {id:'C21-01',page:21,phrase:'animales inteligentes inventaron el conocimiento',reading:'El conocimiento aparece como acontecimiento producido por una especie, no como estructura eterna del cosmos.',mapTo:'S21-1'},
  {id:'C21-02',page:21,phrase:'minuto más altanero y falaz',reading:'La primera caracterización del conocer combina soberbia y falsedad.',mapTo:'S21-2'},
  {id:'C21-03',page:21,phrase:'sólo un minuto',reading:'La historia del conocimiento queda reducida a una escala cósmicamente mínima.',mapTo:'S21-2'},
  {id:'C21-04',page:21,phrase:'el astro se heló',reading:'La desaparición del astro corta cualquier pretensión de necesidad cósmica del conocer humano.',mapTo:'S21-3'},

  {id:'C22-01',page:22,phrase:'lastimoso, sombrío y caduco',reading:'Nietzsche rebaja el estatuto del intelecto dentro de la naturaleza.',mapTo:'S22-1'},
  {id:'C22-02',page:22,phrase:'estéril y arbitrario',reading:'El intelecto no recibe aquí un fundamento necesario ni una fecundidad metafísica garantizada.',mapTo:'S22-1'},
  {id:'C22-03',page:22,phrase:'Hubo eternidades en las que no existía',reading:'El intelecto es contingente: hubo realidad antes de él.',mapTo:'S22-2'},
  {id:'C22-04',page:22,phrase:'no hay ninguna misión ulterior',reading:'No se le concede un telos que rebase la vida humana.',mapTo:'S22-2'},
  {id:'C22-05',page:22,phrase:'No es sino humano',reading:'El conocimiento queda devuelto a su condición específicamente humana.',mapTo:'S22-3'},
  {id:'C22-06',page:22,phrase:'como si en él girasen los goznes del mundo',reading:'La autovaloración humana convierte una función local en supuesto centro del cosmos.',mapTo:'S22-4'},
  {id:'C22-07',page:22,phrase:'la mosca ... centro volante de este mundo',reading:'La analogía con la mosca ridiculiza la pretensión humana de centralidad exclusiva.',mapTo:'S22-5'},
  {id:'C22-08',page:22,phrase:'se infle inmediatamente como un odre',reading:'El menor poder de conocer tiende a inflar la autopercepción del viviente.',mapTo:'S22-4'},
  {id:'C22-09',page:22,phrase:'los ojos del universo ... en sus obras y pensamientos',reading:'La figura del filósofo lleva la soberbia epistemológica a su forma extrema.',mapTo:'S22-6'},

  {id:'C23-01',page:23,phrase:'recurso de los seres más infelices, delicados y efímeros',reading:'El intelecto se redefine funcionalmente: aparece como recurso de supervivencia.',mapTo:'S23-1'},
  {id:'C23-02',page:23,phrase:'para conservarlos un minuto en la existencia',reading:'Su función inmediata es conservar vida, no revelar una verdad absoluta.',mapTo:'S23-1'},
  {id:'C23-03',page:23,phrase:'orgullo ... niebla cegadora',reading:'El orgullo cognoscitivo funciona como velo que deforma la valoración de la existencia.',mapTo:'S23-2'},
  {id:'C23-04',page:23,phrase:'engañarse sobre el valor de la existencia',reading:'La función vital del intelecto incluye una autointerpretación interesada.',mapTo:'S23-3'},
  {id:'C23-05',page:23,phrase:'la más aduladora valoración sobre el conocimiento mismo',reading:'El conocer se valora a sí mismo de manera complaciente.',mapTo:'S23-3'},
  {id:'C23-06',page:23,phrase:'Su efecto más general es el engaño',reading:'Nietzsche formula la tesis que organiza el tramo: el engaño no es accidente periférico.',mapTo:'S23-4'},
  {id:'C23-07',page:23,phrase:'medio de conservación del individuo',reading:'La tesis del engaño se conecta directamente con la función conservadora del intelecto.',mapTo:'S23-1'},
  {id:'C23-08',page:23,phrase:'desarrolla sus fuerzas principales fingiendo',reading:'Fingir es presentado como una operación central del intelecto orientado a sobrevivir.',mapTo:'S23-5'},
  {id:'C23-09',page:23,phrase:'engaño, adulación, mentira y fraude',reading:'El fingimiento adopta formas sociales concretas.',mapTo:'S23-6'},
  {id:'C23-10',page:23,phrase:'murmuración, farsa, vivir del brillo ajeno',reading:'La lista extiende el fingimiento a la reputación y la representación social.',mapTo:'S23-6'},
  {id:'C23-11',page:23,phrase:'enmascaramiento ... convencionalismo encubridor',reading:'La vida social aparece mediada por ocultamiento y convención.',mapTo:'S23-6'},
  {id:'C23-12',page:23,phrase:'escenificación ante los demás y ante uno mismo',reading:'El fingimiento no se dirige sólo a otros: alcanza la relación del sujeto consigo.',mapTo:'S23-6'},
  {id:'C23-13',page:23,phrase:'llama de la vanidad',reading:'La vanidad funciona como foco alrededor del cual gira el teatro humano.',mapTo:'S23-7'},
  {id:'C23-14',page:23,phrase:'regla y ley',reading:'La apariencia no es descrita como excepción sino como regularidad de la vida humana.',mapTo:'S23-7'},
  {id:'C23-15',page:23,phrase:'inclinación sincera y pura hacia la verdad',reading:'Precisamente por la generalidad del fingimiento, el impulso puro a la verdad se vuelve problemático.',mapTo:'S23-8'},
  {id:'C23-16',page:23,phrase:'sumergidos en ilusiones y ensueños',reading:'La crítica pasa del fingimiento social al régimen perceptivo y consciente del hombre.',mapTo:'S23-9'},
  {id:'C23-17',page:23,phrase:'se desliza sobre la superficie ... percibe «formas»',reading:'La percepción ordinaria no penetra un fondo último; opera sobre superficies y formas.',mapTo:'S23-10'},
  {id:'C23-18',page:23,phrase:'la sensación no conduce ... a la verdad',reading:'La sensación deja de funcionar como garantía inmediata de verdad.',mapTo:'S23-11'},
  {id:'C23-19',page:23,phrase:'se contenta con recibir estímulos',reading:'El acceso sensible queda descrito como recepción de estímulos, no como posesión transparente de la cosa.',mapTo:'S23-11'},
  {id:'C23-20',page:23,phrase:'el hombre se deja engañar ... en el sueño',reading:'El sueño sirve como ejemplo cotidiano de nuestra disponibilidad para la ilusión.',mapTo:'S23-12'},

  {id:'C24-01',page:24,phrase:'¿qué sabe el hombre de sí mismo?',reading:'La crítica del conocimiento se vuelve crítica del autoconocimiento.',mapTo:'S24-1'},
  {id:'C24-02',page:24,phrase:'¿Sería capaz de percibirse a sí mismo...?',reading:'Nietzsche pone en duda que el sujeto pueda volverse totalmente transparente para sí.',mapTo:'S24-1'},
  {id:'C24-03',page:24,phrase:'la naturaleza ... incluso su propio cuerpo',reading:'El propio cuerpo es ejemplo de aquello que sostiene al sujeto sin presentarse plenamente a su conciencia.',mapTo:'S24-2'},
  {id:'C24-04',page:24,phrase:'conciencia soberbia e ilusa',reading:'La conciencia aparece limitada y, a la vez, inclinada a sobrevalorarse.',mapTo:'S24-3'},
  {id:'C24-05',page:24,phrase:'Ella ha tirado la llave',reading:'La metáfora radicaliza el cierre de la conciencia frente a lo que la sostiene.',mapTo:'S24-4'},
  {id:'C24-06',page:24,phrase:'crueldad, codicia, insaciabilidad, asesinato',reading:'Bajo la conciencia apacible se imagina un fondo de impulsos y violencia que ésta no domina.',mapTo:'S24-5'},
  {id:'C24-07',page:24,phrase:'pendiente ... del lomo de un tigre',reading:'La imagen condensa la precariedad: la conciencia sueña mientras descansa sobre fuerzas peligrosas.',mapTo:'S24-6'},
  {id:'C24-08',page:24,phrase:'¿De dónde procede ... el impulso hacia la verdad?',reading:'El tramo culmina en la paradoja central: si el intelecto conserva mediante ilusión y fingimiento, debe explicarse el origen del impulso a la verdad.',mapTo:'S24-7'},
])

export const nietzscheCloseReadingNodes21to24 = Object.freeze([
  {id:'S21-1',label:'El conocimiento es una invención de animales inteligentes',caption:'p. 21 · C21-01',position:{x:0.09,y:0.10},width:250,emphasis:true,shapeRole:'concept'},
  {id:'S21-2',label:'Instante altanero y falaz: sólo un minuto',caption:'p. 21 · C21-02–03',position:{x:0.09,y:0.27},width:240,shapeRole:'mediation'},
  {id:'S21-3',label:'El astro se hiela: el conocer también perece',caption:'p. 21 · C21-04',position:{x:0.09,y:0.44},width:240,shapeRole:'result'},

  {id:'S22-1',label:'Intelecto caduco, estéril y arbitrario',caption:'p. 22 · C22-01–02',position:{x:0.29,y:0.08},width:245,shapeRole:'concept'},
  {id:'S22-2',label:'No es eterno ni tiene misión ulterior',caption:'p. 22 · C22-03–04',position:{x:0.29,y:0.23},width:235,shapeRole:'result'},
  {id:'S22-3',label:'No es sino humano',caption:'p. 22 · C22-05',position:{x:0.29,y:0.38},width:210,shapeRole:'term'},
  {id:'S22-4',label:'El conocimiento se infla hasta creerse centro',caption:'p. 22 · C22-06, C22-08',position:{x:0.29,y:0.53},width:255,shapeRole:'structure'},
  {id:'S22-5',label:'La mosca comparte el mismo pathos de centralidad',caption:'p. 22 · C22-07',position:{x:0.13,y:0.67},width:250,shapeRole:'mediation'},
  {id:'S22-6',label:'El filósofo imagina al universo mirando sus pensamientos',caption:'p. 22 · C22-09',position:{x:0.34,y:0.69},width:270,shapeRole:'result'},

  {id:'S23-1',label:'Intelecto = recurso de conservación',caption:'p. 23 · C23-01–02, C23-07',position:{x:0.52,y:0.08},width:250,emphasis:true,shapeRole:'concept'},
  {id:'S23-2',label:'Orgullo cognoscitivo = niebla cegadora',caption:'p. 23 · C23-03',position:{x:0.52,y:0.23},width:245,shapeRole:'mediation'},
  {id:'S23-3',label:'El conocimiento se concede una valoración aduladora',caption:'p. 23 · C23-04–05',position:{x:0.52,y:0.38},width:260,shapeRole:'structure'},
  {id:'S23-4',label:'Efecto general del intelecto: engaño',caption:'p. 23 · C23-06',position:{x:0.52,y:0.53},width:240,emphasis:true,tone:'accent',shapeRole:'result'},

  {id:'S23-5',label:'Conservarse mediante el fingimiento',caption:'p. 23 · C23-08',position:{x:0.71,y:0.08},width:235,shapeRole:'concept'},
  {id:'S23-6',label:'El fingimiento se vuelve repertorio social',caption:'p. 23 · C23-09–12',position:{x:0.71,y:0.23},width:250,shapeRole:'structure'},
  {id:'S23-7',label:'Vanidad: regla y ley del teatro humano',caption:'p. 23 · C23-13–14',position:{x:0.71,y:0.38},width:250,shapeRole:'result'},
  {id:'S23-8',label:'La inclinación pura a la verdad se vuelve casi inconcebible',caption:'p. 23 · C23-15',position:{x:0.71,y:0.53},width:275,shapeRole:'mediation'},

  {id:'S23-9',label:'Hombres sumergidos en ilusiones y ensueños',caption:'p. 23 · C23-16',position:{x:0.90,y:0.08},width:250,shapeRole:'structure'},
  {id:'S23-10',label:'La mirada se desliza por superficies y «formas»',caption:'p. 23 · C23-17',position:{x:0.90,y:0.23},width:260,shapeRole:'mediation'},
  {id:'S23-11',label:'La sensación recibe estímulos, no garantiza verdad',caption:'p. 23 · C23-18–19',position:{x:0.90,y:0.38},width:265,shapeRole:'result'},
  {id:'S23-12',label:'El sueño confirma nuestra disponibilidad al engaño',caption:'p. 23 · C23-20',position:{x:0.90,y:0.53},width:265,shapeRole:'result'},

  {id:'S24-1',label:'¿Qué sabe el hombre de sí mismo?',caption:'p. 24 · C24-01–02',position:{x:0.50,y:0.72},width:235,emphasis:true,shapeRole:'concept'},
  {id:'S24-2',label:'La naturaleza oculta incluso el propio cuerpo',caption:'p. 24 · C24-03',position:{x:0.66,y:0.72},width:250,shapeRole:'term'},
  {id:'S24-3',label:'Conciencia soberbia e ilusa',caption:'p. 24 · C24-04',position:{x:0.82,y:0.72},width:220,shapeRole:'structure'},
  {id:'S24-4',label:'La naturaleza «ha tirado la llave»',caption:'p. 24 · C24-05',position:{x:0.50,y:0.86},width:235,shapeRole:'mediation'},
  {id:'S24-5',label:'Bajo la conciencia: crueldad, codicia e insaciabilidad',caption:'p. 24 · C24-06',position:{x:0.67,y:0.86},width:265,shapeRole:'structure'},
  {id:'S24-6',label:'La conciencia sueña sobre el lomo de un tigre',caption:'p. 24 · C24-07',position:{x:0.84,y:0.86},width:255,shapeRole:'result'},
  {id:'S24-7',label:'¿De dónde procede entonces el impulso hacia la verdad?',caption:'p. 24 · C24-08 · pregunta de cierre',position:{x:0.67,y:0.97},width:310,emphasis:true,tone:'accent',shapeRole:'result'},
])

export const nietzscheCloseReadingSchema21to24 = Object.freeze({
  layout:'constellation',
  canvas:{width:1900,height:1560},
  sizeHint:'tall',
  minHeight:980,
  fitPadding:46,
  legend:false,
  ariaLabel:'Lectura cercana de Sobre verdad y mentira en sentido extramoral, páginas 21 a 24: invención del conocimiento, descentramiento del intelecto, conservación mediante fingimiento, límites perceptivos y problema del impulso hacia la verdad.',
  nodes:nietzscheCloseReadingNodes21to24,
  edges:[
    {from:'S21-1',to:'S21-2',label:'desmitifica',relationKind:'derives'},
    {from:'S21-2',to:'S21-3',label:'reduce a instante',relationKind:'derives'},
    {from:'S21-3',to:'S22-1',label:'muestra contingencia',relationKind:'transversal',curvature:-0.1},
    {from:'S22-1',to:'S22-2',label:'niega telos',relationKind:'derives'},
    {from:'S22-2',to:'S22-3',label:'restringe a lo humano',relationKind:'derives'},
    {from:'S22-3',to:'S22-4',label:'pero se sobrevalora',relationKind:'derives'},
    {from:'S22-5',to:'S22-4',label:'ridiculiza',relationKind:'transversal',curvature:0.15},
    {from:'S22-6',to:'S22-4',label:'satiriza',relationKind:'transversal',curvature:-0.14},
    {from:'S22-4',to:'S23-1',label:'redefine su función',relationKind:'transversal',curvature:-0.08},

    {from:'S23-1',to:'S23-2',label:'se acompaña de',relationKind:'derives'},
    {from:'S23-2',to:'S23-3',label:'produce',relationKind:'derives'},
    {from:'S23-3',to:'S23-4',label:'culmina en',relationKind:'derives'},
    {from:'S23-1',to:'S23-5',label:'conserva mediante',relationKind:'transversal',curvature:0.08},
    {from:'S23-5',to:'S23-6',label:'se despliega en',relationKind:'derives'},
    {from:'S23-6',to:'S23-7',label:'gravita alrededor de',relationKind:'derives'},
    {from:'S23-7',to:'S23-8',label:'vuelve extraña',relationKind:'derives'},
    {from:'S23-4',to:'S23-8',label:'si el engaño es general...',relationKind:'transversal',curvature:0.11},

    {from:'S23-8',to:'S23-9',label:'abre el límite',relationKind:'transversal',curvature:-0.1},
    {from:'S23-9',to:'S23-10',relationKind:'derives'},
    {from:'S23-10',to:'S23-11',label:'reduce el acceso a',relationKind:'derives'},
    {from:'S23-11',to:'S23-12',label:'se confirma en',relationKind:'derives'},

    {from:'S23-12',to:'S24-1',label:'del mundo al yo',relationKind:'transversal',curvature:0.12},
    {from:'S24-1',to:'S24-2',label:'radicaliza',relationKind:'derives'},
    {from:'S24-2',to:'S24-3',label:'deja al sujeto en',relationKind:'derives'},
    {from:'S24-3',to:'S24-4',label:'encierro',relationKind:'transversal',curvature:0.1},
    {from:'S24-4',to:'S24-5',label:'oculta',relationKind:'derives'},
    {from:'S24-5',to:'S24-6',label:'imagen de precariedad',relationKind:'derives'},
    {from:'S24-6',to:'S24-7',label:'desemboca en',relationKind:'transversal',curvature:-0.1},

    {from:'S23-2',to:'S24-3',label:'soberbia → ilusión',relationKind:'transversal',curvature:0.18},
    {from:'S23-9',to:'S24-6',label:'los sueños reaparecen',relationKind:'transversal',curvature:-0.16},
    {from:'S23-8',to:'S24-7',label:'paradoja central',relationKind:'transversal',curvature:0.2},
  ],
  animation:{
    mode:'holistic',
    order:nietzscheCloseReadingNodes21to24.map((node)=>node.id),
    nodeDuration:0.18,
    edgeDuration:0.2,
  },
})
