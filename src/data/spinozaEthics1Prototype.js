export const spinozaRoutes = [
  { id: 'all', label: 'Todo' },
  { id: 'substance', label: 'Sustancia' },
  { id: 'god', label: 'Dios' },
  { id: 'causality', label: 'Causalidad' },
  { id: 'modes', label: 'Modos' },
  { id: 'necessity', label: 'Necesidad' },
  { id: 'freedom', label: 'Libertad' },
  { id: 'nature', label: 'Naturaleza' },
  { id: 'power', label: 'Potencia' },
]

const D = (id, code, title, short, explanation, role, branch, produces, concepts, critical = false) => ({
  id,
  type: 'definition',
  data: {
    code,
    kind: 'Definici\xf3n',
    title,
    short,
    explanation,
    role,
    page: 27,
    branch,
    critical,
    dependsOn: [],
    produces,
    concepts,
  },
})

const A = (id, code, title, short, explanation, role, branch, produces, concepts) => ({
  id,
  type: 'axiom',
  data: {
    code,
    kind: 'Axioma',
    title,
    short,
    explanation,
    role,
    page: 28,
    branch,
    critical: false,
    dependsOn: [],
    produces,
    concepts,
  },
})

const P = (
  n,
  title,
  short,
  explanation,
  role,
  page,
  branch,
  dependsOn,
  produces,
  concepts,
  critical = false,
  type = 'proposition',
) => ({
  id: `E1P${n}`,
  type,
  data: {
    code: `P${n}`,
    kind: type === 'core' ? 'Proposici\xf3n nuclear' : 'Proposici\xf3n',
    title,
    short,
    explanation,
    role,
    page,
    branch,
    critical,
    dependsOn,
    produces,
    concepts,
  },
})

const foundations = [
  D(
    'E1D1', 'D1', 'Causa sui',
    'Aquello cuya esencia implica la existencia.',
    'La causa de s\xed tiene en su propia esencia la raz\xf3n de existir.',
    'Conecta esencia y existencia y ser\xe1 decisiva en P7.',
    ['substance', 'god', 'necessity'],
    ['E1P7'],
    ['causa sui', 'esencia', 'existencia'],
    true,
  ),
  D(
    'E1D2', 'D2', 'Finito en su g\xe9nero',
    'Es finito lo que puede ser limitado por otra cosa de la misma naturaleza.',
    'La limitaci\xf3n s\xf3lo ocurre dentro de un mismo g\xe9nero.',
    'Permite demostrar en P8 que la sustancia no puede ser finita.',
    ['substance'],
    ['E1P8', 'E1P21'],
    ['finito', 'l\xedmite', 'g\xe9nero'],
  ),
  D(
    'E1D3', 'D3', 'Sustancia',
    'Lo que es en s\xed y se concibe por s\xed.',
    'La sustancia es ontol\xf3gica y conceptualmente independiente.',
    'Es uno de los fundamentos m\xe1s reutilizados de toda la Parte I.',
    ['substance', 'god'],
    ['E1P1', 'E1P2', 'E1P4', 'E1P5', 'E1P12', 'E1P14', 'E1P15', 'E1P28'],
    ['sustancia', 'ser en s\xed', 'concebir por s\xed'],
    true,
  ),
  D(
    'E1D4', 'D4', 'Atributo',
    'Lo que el entendimiento percibe de la sustancia como constitutivo de su esencia.',
    'El atributo expresa la esencia de la sustancia.',
    'Articula sustancia, infinitud y pluralidad de atributos.',
    ['substance', 'god', 'nature'],
    ['E1P4', 'E1P9', 'E1P10', 'E1P12', 'E1P19', 'E1P20'],
    ['atributo', 'esencia', 'entendimiento'],
    true,
  ),
  D(
    'E1D5', 'D5', 'Modo',
    'Aquello que es en otra cosa y se concibe por ella.',
    'Los modos dependen de la sustancia para ser y ser concebidos.',
    'Permite pasar de la sustancia \xfanica a la multiplicidad de sus afecciones.',
    ['substance', 'god', 'modes', 'causality'],
    ['E1P1', 'E1P4', 'E1P15', 'E1P23', 'E1P25', 'E1P28'],
    ['modo', 'afecci\xf3n', 'dependencia'],
    true,
  ),
  D(
    'E1D6', 'D6', 'Dios',
    'Ser absolutamente infinito: sustancia de infinitos atributos.',
    'Dios se define como sustancia absolutamente infinita.',
    'Converge con P11, P14 y P15 hasta formar el n\xfacleo ontol\xf3gico.',
    ['god', 'necessity', 'nature'],
    ['E1P11', 'E1P14', 'E1P16', 'E1P19', 'E1P23', 'E1P31'],
    ['Dios', 'infinito', 'atributos', 'sustancia'],
    true,
  ),
  D(
    'E1D7', 'D7', 'Libre / necesario',
    'Libre es lo que act\xfaa por la sola necesidad de su naturaleza.',
    'La libertad no equivale a elecci\xf3n indiferente.',
    'Prepara la noci\xf3n de Dios como causa libre y la cr\xedtica de la voluntad libre.',
    ['freedom', 'necessity', 'god'],
    ['E1P17', 'E1P32', 'E1P33'],
    ['libertad', 'necesidad', 'determinaci\xf3n'],
    true,
  ),
  D(
    'E1D8', 'D8', 'Eternidad',
    'Existencia concebida como sigui\xe9ndose necesariamente de la definici\xf3n de una cosa eterna.',
    'La eternidad expresa necesidad de existencia, no duraci\xf3n indefinida.',
    'Permite formular la eternidad de Dios y de sus atributos.',
    ['god', 'necessity', 'nature'],
    ['E1P19', 'E1P20', 'E1P23'],
    ['eternidad', 'existencia', 'necesidad'],
  ),

  A(
    'E1A1', 'A1', 'Ser en s\xed / ser en otro',
    'Todo lo que es, o es en s\xed, o es en otra cosa.',
    'Divide el campo ontol\xf3gico entre sustancia y aquello que existe en otra cosa.',
    'Funciona como regla estructural para clasificar lo real.',
    ['substance', 'god', 'modes'],
    ['E1P4', 'E1P15', 'E1P28'],
    ['ser', 'sustancia', 'modo'],
  ),
  A(
    'E1A2', 'A2', 'Concebir por s\xed',
    'Lo que no puede concebirse por medio de otra cosa debe concebirse por s\xed.',
    'La independencia conceptual corresponde a aquello que no requiere otro concepto.',
    'Refuerza la l\xf3gica de la sustancia como aquello que se concibe por s\xed.',
    ['substance'],
    [],
    ['concepto', 'independencia'],
  ),
  A(
    'E1A3', 'A3', 'Causa determinada',
    'Dada una causa determinada se sigue necesariamente un efecto.',
    'La causalidad excluye la indeterminaci\xf3n del efecto.',
    'Ser\xe1 expl\xedcito en P27 y sostiene el determinismo posterior.',
    ['causality', 'necessity'],
    ['E1P27'],
    ['causa', 'efecto', 'necesidad'],
  ),
  A(
    'E1A4', 'A4', 'Conocimiento causal',
    'El conocimiento del efecto depende del conocimiento de la causa.',
    'Vincula causalidad e inteligibilidad.',
    'Con A5 conduce a P3 y reaparece en P25.',
    ['causality', 'substance'],
    ['E1P3', 'E1P25'],
    ['causa', 'efecto', 'conocimiento'],
  ),
  A(
    'E1A5', 'A5', 'Comunidad conceptual',
    'Lo que no tiene nada en com\xfan tampoco puede entenderse mutuamente.',
    'La ausencia de comunidad conceptual bloquea la relaci\xf3n causal.',
    'Con A4 conduce directamente a P3.',
    ['causality', 'substance'],
    ['E1P3'],
    ['comunidad', 'concepto', 'causa'],
  ),
  A(
    'E1A6', 'A6', 'Verdad y objeto',
    'Una idea verdadera debe ser conforme a lo ideado.',
    'La verdad exige correspondencia entre idea y objeto.',
    'Interviene en la distinci\xf3n de sustancias y en la teor\xeda del entendimiento.',
    ['substance', 'nature'],
    ['E1P5', 'E1P30'],
    ['verdad', 'idea', 'objeto'],
  ),
  A(
    'E1A7', 'A7', 'Esencia y existencia',
    'Si algo puede concebirse como no existente, su esencia no implica existencia.',
    'Permite razonar por contraste sobre aquello cuya esencia s\xed implica existir.',
    'Es una pieza central de la primera demostraci\xf3n de P11.',
    ['god', 'necessity'],
    ['E1P11'],
    ['esencia', 'existencia', 'necesidad'],
  ),
]

const propositions = [
  P(
    1, 'Prioridad de la sustancia',
    'La sustancia es anterior por naturaleza a sus afecciones.',
    'Los modos dependen de la sustancia y no al rev\xe9s.',
    'Primer paso en la independencia ontol\xf3gica de la sustancia.',
    28, ['substance'], ['E1D3', 'E1D5'], ['E1P5'],
    ['sustancia', 'modo', 'prioridad'],
  ),
  P(
    2, 'Sustancias de atributos distintos',
    'Dos sustancias con atributos distintos no tienen nada en com\xfan.',
    'Si cada sustancia se concibe por s\xed, dos sustancias de atributos distintos no comparten concepto.',
    'Prepara P6 al separar causalmente sustancias heterog\xe9neas.',
    28, ['substance', 'causality'], ['E1D3'], ['E1P6', 'E1P11'],
    ['sustancia', 'atributo', 'diferencia'],
  ),
  P(
    3, 'Causalidad y comunidad',
    'Si dos cosas no tienen nada en com\xfan, una no puede ser causa de la otra.',
    'La causalidad requiere inteligibilidad entre causa y efecto.',
    'Bloquea la producci\xf3n causal entre realidades sin comunidad.',
    28, ['causality', 'substance'], ['E1A4', 'E1A5'], ['E1P6'],
    ['causa', 'comunidad', 'inteligibilidad'],
  ),
  P(
    4, 'Principio de distinci\xf3n',
    'Las cosas se distinguen por atributos de sustancias o por sus afecciones.',
    'Fuera del entendimiento s\xf3lo hay sustancias y afecciones.',
    'Fija los \xfanicos criterios ontol\xf3gicos leg\xedtimos de diferencia.',
    28, ['substance'], ['E1A1', 'E1D3', 'E1D4', 'E1D5'], ['E1P5'],
    ['distinci\xf3n', 'atributo', 'afecci\xf3n'],
  ),
  P(
    5, 'Unicidad por atributo',
    'No pueden darse dos sustancias de la misma naturaleza o atributo.',
    'Una supuesta pluralidad desaparece al considerar la sustancia en s\xed.',
    'Soporta P6, P8 y, decisivamente, P14.',
    29, ['substance', 'god'], ['E1P4', 'E1P1', 'E1D3', 'E1A6'], ['E1P6', 'E1P8', 'E1P12', 'E1P13', 'E1P14'],
    ['sustancia', 'atributo', 'unicidad'], true,
  ),
  P(
    6, 'La sustancia no es producida',
    'Una sustancia no puede ser producida por otra sustancia.',
    'Dos sustancias causales deber\xedan compartir algo, pero P2 y P3 lo impiden.',
    'Abre el paso hacia causa sui.',
    29, ['substance', 'causality'], ['E1P5', 'E1P2', 'E1P3'], ['E1P7', 'E1P12'],
    ['sustancia', 'causa', 'producci\xf3n'],
  ),
  P(
    7, 'Existencia de la sustancia',
    'A la naturaleza de una sustancia pertenece el existir.',
    'Si la sustancia no puede ser producida, debe ser causa de s\xed.',
    'Bisagra entre sustancia, causa sui y existencia necesaria.',
    29, ['substance', 'god', 'necessity'], ['E1P6', 'E1D1'], ['E1P8', 'E1P11', 'E1P12', 'E1P19'],
    ['existencia', 'sustancia', 'causa sui'], true,
  ),
  P(
    8, 'Infinitud de la sustancia',
    'Toda sustancia es necesariamente infinita.',
    'Una sustancia finita tendr\xeda que ser limitada por otra de su misma naturaleza.',
    'Elimina la posibilidad de sustancia finita.',
    30, ['substance', 'god'], ['E1P5', 'E1P7', 'E1D2'], ['E1P12', 'E1P13', 'E1P14'],
    ['sustancia', 'infinito', 'l\xedmite'], true,
  ),
  P(
    9, 'Realidad y atributos',
    'Cuanta m\xe1s realidad tiene una cosa, m\xe1s atributos le competen.',
    'El grado de ser se expresa mediante atributos.',
    'Prepara el v\xednculo entre infinitud de Dios e infinitud de atributos.',
    31, ['substance', 'god'], ['E1D4'], ['E1P10'],
    ['realidad', 'atributo', 'ser'],
  ),
  P(
    10, 'Autonom\xeda de los atributos',
    'Cada atributo de una misma sustancia debe concebirse por s\xed.',
    'Cada atributo expresa la esencia de la sustancia sin necesitar otro atributo.',
    'Permite pensar una sustancia con m\xfaltiples atributos sin multiplicar sustancias.',
    32, ['substance', 'god'], ['E1D4', 'E1D3'], ['E1P12', 'E1P14'],
    ['atributo', 'sustancia', 'concepto'],
  ),
  P(
    11, 'Existencia necesaria de Dios',
    'Dios existe necesariamente.',
    'Negar su existencia contradice la estructura ya demostrada de la sustancia.',
    'Concentra D6, A7 y P7 en la existencia necesaria de Dios.',
    32, ['god', 'necessity'], ['E1D6', 'E1A7', 'E1P7'], ['E1P13', 'E1P14', 'E1P19', 'E1P21', 'E1P29', 'E1P33', 'E1P34'],
    ['Dios', 'existencia', 'necesidad'], true,
  ),
  P(
    12, 'La sustancia no es divisible',
    'Ning\xfan atributo de una sustancia puede implicar su divisi\xf3n.',
    'Dividir la sustancia destruye su infinitud o su naturaleza misma.',
    'Prepara la indivisibilidad absoluta de P13.',
    34, ['substance', 'god'], ['E1P8', 'E1P6', 'E1P5', 'E1P2', 'E1D4', 'E1P10', 'E1P7'], ['E1P13'],
    ['sustancia', 'divisi\xf3n', 'atributo'],
  ),
  P(
    13, 'Indivisibilidad absoluta',
    'Una sustancia absolutamente infinita es indivisible.',
    'Sus partes no podr\xedan conservar ni perder la naturaleza de sustancia sin absurdo.',
    'Cierra la v\xeda de una sustancia divina compuesta de partes.',
    34, ['substance', 'god'], ['E1P5', 'E1P11', 'E1P8'], ['E1P14'],
    ['indivisible', 'infinito', 'sustancia'], true,
  ),
  P(
    14, 'Una \xfanica sustancia',
    'No puede darse ni concebirse sustancia alguna excepto Dios.',
    'La posibilidad de sustancias independientes de Dios queda cancelada.',
    'Punto de convergencia: la sustancia absolutamente infinita y \xfanica es Dios.',
    35, ['substance', 'god', 'necessity'], ['E1D6', 'E1P11', 'E1P5'], ['E1P15', 'E1P18', 'E1P24', 'E1P30', 'E1P33'],
    ['Dios', 'sustancia', 'unicidad', 'infinito'], true, 'core',
  ),
  P(
    15, 'Todo es en Dios',
    'Todo cuanto es, es en Dios; sin Dios nada puede ser ni concebirse.',
    'Si s\xf3lo Dios es sustancia, todo lo dem\xe1s existe como modo en la naturaleza divina.',
    'Cuello del doble fractal: desde aqu\xed empieza la expansi\xf3n de consecuencias.',
    35, ['god', 'causality', 'modes', 'nature'], ['E1P14', 'E1D3', 'E1D5', 'E1A1'], ['E1P16', 'E1P17', 'E1P18', 'E1P23', 'E1P25', 'E1P29', 'E1P30', 'E1P31'],
    ['inmanencia', 'Dios', 'modo', 'sustancia'], true, 'core',
  ),
  P(
    16, 'Expansi\xf3n necesaria',
    'De la necesidad de la naturaleza divina se siguen infinitas cosas de infinitos modos.',
    'La esencia infinita de Dios implica una productividad igualmente infinita.',
    'Inicia la expansi\xf3n causal del sistema.',
    37, ['god', 'causality', 'necessity'], ['E1D6'], ['E1P17', 'E1P18', 'E1P25', 'E1P26', 'E1P28', 'E1P29', 'E1P33', 'E1P34', 'E1P36'],
    ['necesidad', 'causalidad', 'naturaleza divina'], true,
  ),
  P(
    17, 'Dios obra por su naturaleza',
    'Dios obra por las solas leyes de su naturaleza y no forzado por nadie.',
    'Nada existe fuera de Dios que pueda determinarlo desde fuera.',
    'Funda la libertad divina como necesidad interna.',
    38, ['god', 'freedom', 'necessity'], ['E1P16', 'E1P15'], ['E1P29'],
    ['Dios', 'libertad', 'necesidad'], true,
  ),
  P(
    18, 'Causa inmanente',
    'Dios es causa inmanente, no transitiva, de todas las cosas.',
    'Los efectos permanecen en Dios en vez de salir fuera de su causalidad.',
    'Formula una de las tesis m\xe1s distintivas de la ontolog\xeda espinosista.',
    40, ['god', 'causality', 'modes'], ['E1P15', 'E1P16', 'E1P14', 'E1D3'], ['E1P19'],
    ['inmanencia', 'causa', 'Dios'], true,
  ),
  P(
    19, 'Eternidad de Dios',
    'Dios, y todos sus atributos, son eternos.',
    'La existencia pertenece a la naturaleza de la sustancia y la eternidad expresa esa necesidad.',
    'Vincula atributos, esencia y eternidad.',
    40, ['god', 'nature', 'necessity'], ['E1D6', 'E1P11', 'E1P7', 'E1D8', 'E1D4'], ['E1P20', 'E1P23'],
    ['Dios', 'atributo', 'eternidad'],
  ),
  P(
    20, 'Esencia = existencia',
    'La existencia de Dios y su esencia son una y la misma cosa.',
    'Los atributos que expresan la esencia eterna expresan tambi\xe9n existencia eterna.',
    'Radicaliza la necesidad ontol\xf3gica de Dios.',
    41, ['god', 'necessity'], ['E1P19', 'E1D8', 'E1D4'], ['E1P21'],
    ['esencia', 'existencia', 'Dios'], true,
  ),
  P(
    21, 'Modos infinitos inmediatos',
    'Lo que se sigue de un atributo tomado absolutamente es eterno e infinito.',
    'Una consecuencia necesaria de un atributo infinito no puede resultar finita ni temporal.',
    'Introduce el primer nivel de producci\xf3n modal infinita.',
    41, ['modes', 'causality', 'nature'], ['E1P11', 'E1D2', 'E1P20'], ['E1P22', 'E1P23', 'E1P28', 'E1P29'],
    ['modo infinito', 'atributo', 'eternidad'],
  ),
  P(
    22, 'Modos infinitos mediatos',
    'Lo que sigue de un atributo afectado por un modo infinito tambi\xe9n es necesario e infinito.',
    'La necesidad se propaga desde un modo infinito a sus consecuencias.',
    'Construye un segundo nivel de producci\xf3n modal.',
    42, ['modes', 'causality'], ['E1P21'], ['E1P23', 'E1P28'],
    ['modo infinito', 'mediaci\xf3n', 'necesidad'],
  ),
  P(
    23, 'Origen de los modos infinitos',
    'Todo modo necesario e infinito procede de un atributo absoluto o de un modo infinito.',
    'Los modos infinitos s\xf3lo pueden derivarse de la estructura infinita de Dios.',
    'Clasifica las dos v\xedas de producci\xf3n de modos infinitos.',
    42, ['modes', 'causality', 'nature'], ['E1D5', 'E1P15', 'E1D8', 'E1D6', 'E1P19', 'E1P21', 'E1P22'], ['E1P32'],
    ['modo', 'atributo', 'infinito'],
  ),
  P(
    24, 'Esencia de las cosas producidas',
    'La esencia de las cosas producidas por Dios no implica existencia.',
    'Las cosas finitas no tienen en su esencia la raz\xf3n de existir.',
    'Distingue radicalmente modos finitos y causa sui.',
    42, ['modes', 'causality'], ['E1D1'], ['E1P28', 'E1P29'],
    ['esencia', 'existencia', 'modo'],
  ),
  P(
    25, 'Dios causa esencia y existencia',
    'Dios es causa eficiente tanto de la existencia como de la esencia de las cosas.',
    'La esencia de los modos tampoco puede concebirse sin Dios.',
    'Convierte la dependencia modal en dependencia ontol\xf3gica completa.',
    43, ['causality', 'modes', 'god'], ['E1A4', 'E1P15', 'E1P16'], ['E1P26', 'E1P28', 'E1P36'],
    ['causa', 'esencia', 'existencia'],
  ),
  P(
    26, 'Determinaci\xf3n por Dios',
    'Lo determinado a obrar ha sido determinado necesariamente por Dios.',
    'Toda determinaci\xf3n positiva remite a la causalidad divina.',
    'Prepara la cadena determinista de P27\u2013P29.',
    43, ['necessity', 'causality'], ['E1P25', 'E1P16'], ['E1P29'],
    ['determinaci\xf3n', 'causa', 'Dios'], true,
  ),
  P(
    27, 'Irreversibilidad de la determinaci\xf3n',
    'Lo determinado por Dios no puede volverse indeterminado por s\xed mismo.',
    'Una causa determinada produce necesariamente su efecto.',
    'Bloquea la autodeterminaci\xf3n contingente.',
    43, ['necessity', 'causality'], ['E1A3'], ['E1P29'],
    ['determinaci\xf3n', 'necesidad', 'causa'],
  ),
  P(
    28, 'Cadena infinita de causas finitas',
    'Toda cosa singular finita depende de otra causa finita, y as\xed hasta el infinito.',
    'Los modos finitos se determinan unos a otros dentro de una serie causal infinita.',
    'Explica la causalidad pr\xf3xima de las cosas singulares.',
    44, ['necessity', 'causality', 'modes'], ['E1P16', 'E1P24', 'E1P21', 'E1A1', 'E1D3', 'E1D5', 'E1P25', 'E1P22'], ['E1P32'],
    ['causa finita', 'serie causal', 'modo'],
    true,
  ),
  P(
    29, 'No hay contingencia',
    'En la naturaleza no hay nada contingente.',
    'Todo est\xe1 determinado por la necesidad de la naturaleza divina a existir y obrar.',
    'Segundo gran n\xfacleo del sistema: universaliza la necesidad.',
    45, ['necessity', 'nature', 'causality'], ['E1P15', 'E1P11', 'E1P16', 'E1P21', 'E1P27', 'E1P24', 'E1P26'], ['E1P31', 'E1P32', 'E1P33'],
    ['necesidad', 'determinaci\xf3n', 'contingencia'],
    true,
  ),
  P(
    30, 'Objeto del entendimiento',
    'Todo entendimiento en acto comprende atributos y afecciones de Dios, y nada m\xe1s.',
    'Si s\xf3lo hay una sustancia y sus modos, eso es todo lo que un entendimiento puede comprender.',
    'Vincula ontolog\xeda y teor\xeda del entendimiento.',
    45, ['nature', 'god'], ['E1A6', 'E1P14', 'E1P15'], ['E1P31'],
    ['entendimiento', 'atributo', 'modo'],
  ),
  P(
    31, 'Entendimiento y voluntad son natura naturata',
    'Entendimiento, voluntad, deseo y amor pertenecen a la Naturaleza naturada.',
    'Son modos del pensar, no la naturaleza divina considerada absolutamente.',
    'Separa claramente natura naturans y natura naturata.',
    46, ['nature', 'modes', 'freedom'], ['E1P15', 'E1D6', 'E1P29'], ['E1P32'],
    ['natura naturata', 'entendimiento', 'voluntad'],
    true,
  ),
  P(
    32, 'La voluntad no es causa libre',
    'La voluntad s\xf3lo puede llamarse causa necesaria.',
    'Toda volici\xf3n est\xe1 determinada por otra causa y no constituye libertad absoluta.',
    'Aplica el determinismo a la voluntad.',
    46, ['freedom', 'necessity'], ['E1P28', 'E1P23', 'E1D7'], ['E1P33'],
    ['voluntad', 'libertad', 'necesidad'],
    true,
  ),
  P(
    33, 'No pod\xeda existir otro orden',
    'Las cosas no pudieron ser producidas de otra manera ni en otro orden.',
    'Cambiar el orden implicar\xeda cambiar la naturaleza de Dios.',
    'Culmina el determinismo ontol\xf3gico de la Parte I.',
    47, ['necessity', 'freedom', 'god'], ['E1P16', 'E1P29', 'E1P11', 'E1P14'], ['E1P34'],
    ['orden', 'necesidad', 'Dios'],
    true,
  ),
  P(
    34, 'Potencia = esencia',
    'La potencia de Dios es su esencia misma.',
    'La misma esencia por la que Dios existe es aquella por la que existen y obran las cosas.',
    'Re\xfane existencia, causalidad y potencia divina.',
    49, ['power', 'god', 'necessity'], ['E1P11', 'E1P16'], ['E1P35', 'E1P36'],
    ['potencia', 'esencia', 'Dios'],
    true,
  ),
  P(
    35, 'Lo que Dios puede es necesario',
    'Todo lo concebido como estando en la potestad de Dios existe necesariamente.',
    'La potencia divina est\xe1 comprendida en su esencia y por ello se sigue necesariamente.',
    'Elimina la distancia entre posibilidad divina y necesidad.',
    49, ['power', 'necessity'], ['E1P34'], ['E1P36'],
    ['potencia', 'necesidad', 'existencia'],
  ),
  P(
    36, 'Todo produce efectos',
    'Nada existe de cuya naturaleza no se siga alg\xfan efecto.',
    'Todo expresa de alg\xfan modo la potencia causal de Dios.',
    'Cierra la cadena geom\xe9trica antes del Ap\xe9ndice.',
    50, ['power', 'causality', 'nature'], ['E1P25', 'E1P34', 'E1P16'], ['E1APP'],
    ['efecto', 'potencia', 'causalidad'],
    true,
  ),
]

const appendix = {
  id: 'E1APP',
  type: 'appendix',
  data: {
    code: 'APP',
    kind: 'Ap\xe9ndice \xb7 lectura parcial',
    title: 'Cr\xedtica de las causas finales',
    short:
      'Ignorancia de las causas + conciencia del deseo \u2192 ilusi\xf3n de libertad \u2192 finalismo \u2192 superstici\xf3n.',
    explanation:
      'En las p\xe1ginas asignadas, Spinoza comienza a explicar por qu\xe9 los hombres proyectan fines humanos sobre la naturaleza.',
    role:
      'No es P37: cambia de registro y examina el prejuicio que impide comprender la concatenaci\xf3n necesaria de las cosas.',
    page: 50,
    branch: ['nature', 'freedom', 'necessity'],
    critical: true,
    dependsOn: ['E1P36'],
    produces: [],
    concepts: ['finalismo', 'superstici\xf3n', 'libertad imaginada', 'prejuicio'],
  },
}

const xColumns = {
  foundation: 20,
  p1: 560,
  p2: 840,
  p3: 1120,
  p4: 1400,
  core: 1720,
  expansion1: 2050,
  expansion2: 2350,
  modes: 2670,
  necessity1: 3000,
  necessity2: 3310,
  closure: 3630,
  appendix: 3950,
}

const foundationPositions = [
  [20, 20], [20, 190], [20, 360], [20, 530],
  [20, 700], [290, 20], [290, 190], [290, 360],
  [290, 530], [290, 700], [560, 760], [830, 760],
  [1100, 760], [1370, 760], [1640, 760],
]

foundations.forEach((node, index) => {
  const [x, y] = foundationPositions[index]
  node.position = { x, y }
})

const propPos = {
  1: [560, 80], 2: [560, 260], 3: [560, 440], 4: [840, 80],
  5: [840, 260], 6: [840, 440], 7: [1120, 350], 8: [1120, 120],
  9: [1400, 80], 10: [1400, 250], 11: [1400, 500],
  12: [1710, 90], 13: [1710, 280], 14: [1710, 500], 15: [2040, 500],
  16: [2350, 500], 17: [2350, 260], 18: [2350, 80],
  19: [2670, 80], 20: [2670, 260], 21: [2670, 500],
  22: [2990, 80], 23: [2990, 260], 24: [2990, 500], 25: [2990, 680],
  26: [3310, 80], 27: [3310, 260], 28: [3310, 440], 29: [3310, 650],
  30: [3630, 80], 31: [3630, 260], 32: [3630, 440], 33: [3630, 650],
  34: [3950, 180], 35: [3950, 390], 36: [3950, 600],
}

propositions.forEach((node, index) => {
  const n = index + 1
  const [x, y] = propPos[n]
  node.position = { x, y }
})

appendix.position = { x: 4270, y: 600 }

export const spinozaNodes = [...foundations, ...propositions, appendix]

const relationFor = (source) => {
  if (source.includes('D')) return 'definition'
  if (source.includes('A')) return 'axiom'
  return 'proof'
}

const manualCritical = new Set([
  'E1P11->E1P14',
  'E1P14->E1P15',
  'E1P15->E1P16',
  'E1P28->E1P29',
  'E1P29->E1P33',
  'E1P33->E1P34',
  'E1P36->E1APP',
])

export const spinozaEdges = propositions
  .flatMap((node) =>
    node.data.dependsOn.map((source) => {
      const key = `${source}->${node.id}`
      return {
        id: `e-${key}`,
        source,
        target: node.id,
        relation: manualCritical.has(key) ? 'critical' : relationFor(source),
      }
    }),
  )
  .concat([
    {
      id: 'e-E1P36-E1APP',
      source: 'E1P36',
      target: 'E1APP',
      relation: 'critical',
    },
  ])

export function spinozaNodeById(id) {
  return spinozaNodes.find((node) => node.id === id) || null
}
