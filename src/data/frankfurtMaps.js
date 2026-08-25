export const frankfurtMaps = [
  {
    id: 'critical',
    roman: 'I',
    title: '¿Qué es Teoría Crítica?',
    subtitle: 'totalidad · contradicción · crítica · transformación',
    thesis:
      'La Teoría Crítica no se limita a describir hechos aislados: reconstruye la sociedad como una totalidad histórica, busca sus contradicciones y mantiene abierta la posibilidad de transformarla.',
    nodes: [
      { id: 'society', tag: 'OBJETO', title: 'Sociedad', detail: 'La sociedad no es una suma de hechos dispersos. Debe pensarse como una estructura histórica en la que economía, política, cultura y subjetividad se relacionan.', source: 'Reale y Antiseri · génesis y programa de la Escuela de Francfort', position: { x: 0, y: 180 } },
      { id: 'totality', tag: 'MÉTODO', title: 'Totalidad', detail: 'Pensar la totalidad significa no aislar artificialmente los ámbitos sociales. Economía, historia, psicología y cultura forman un entramado.', source: 'Reale y Antiseri · teoría de la sociedad como un todo', position: { x: 300, y: 40 } },
      { id: 'sectorial', tag: 'ADVERSARIO', title: 'Investigación sectorial', detail: 'La Teoría Crítica rechaza una investigación que se limita a sectores aislados cuando con ello pierde las relaciones estructurales que organizan la sociedad.', source: 'Reale y Antiseri · crítica a investigaciones especializadas y sectoriales', position: { x: 300, y: 320 } },
      { id: 'contradiction', tag: 'DIAGNÓSTICO', title: 'Contradicción', detail: 'La sociedad se vuelve objeto crítico cuando aparecen tensiones objetivas entre sus promesas, instituciones y resultados efectivos.', source: 'Reale y Antiseri · sociedad como totalidad contradictoria', position: { x: 620, y: 30 } },
      { id: 'facts', tag: 'POSITIVISMO', title: 'Hechos dispersos', detail: 'El problema no es investigar hechos, sino convertirlos en realidad última e impedir que se pregunte por las estructuras sociales que los producen.', source: 'Reale y Antiseri · Adorno contra el positivismo', position: { x: 620, y: 330 } },
      { id: 'critique', tag: 'ACTITUD', title: 'Crítica', detail: 'Criticar no significa corregir inconvenientes secundarios, sino examinar la organización total de la sociedad y aquello que reproduce dominación.', source: 'Reale y Antiseri · programa de Horkheimer', position: { x: 940, y: 30 } },
      { id: 'administration', tag: 'RIESGO', title: 'Administración de lo existente', detail: 'Una ciencia social puramente técnica puede limitarse a administrar el orden existente sin interrogar sus fines ni imaginar una sociedad distinta.', source: 'Reale y Antiseri · crítica frankfurtiana al positivismo', position: { x: 940, y: 330 } },
      { id: 'other', tag: 'NEGACIÓN', title: 'Pensar una sociedad distinta', detail: 'La sociedad existente sólo puede aparecer plenamente como problema cuando se mantiene abierta la posibilidad de que podría ser diferente.', source: 'Reale y Antiseri · Adorno: sólo a través de lo que no es se revela lo que es', position: { x: 1260, y: 30 } },
      { id: 'transformation', tag: 'PRAXIS', title: 'Transformación', detail: 'La Teoría Crítica conserva una orientación práctica: comprender los mecanismos de dominación para favorecer una organización más racional y menos opresiva.', source: 'Reale y Antiseri · finalidad transformadora de la teoría crítica', position: { x: 1580, y: 30 } },
      { id: 'resignation', tag: 'CONTRASTE', title: 'Resignación', detail: 'Renunciar a una teoría de la sociedad como totalidad equivale, para Adorno, a renunciar también a pensar seriamente su transformación.', source: 'Reale y Antiseri · crítica a la renuncia a pensar el todo', position: { x: 1260, y: 330 } },
    ],
    edges: [
      ['society', 'totality', 'debe pensarse como'],
      ['society', 'sectorial', 'puede fragmentarse en'],
      ['totality', 'contradiction', 'hace visibles'],
      ['sectorial', 'facts', 'tiende a aislar'],
      ['contradiction', 'critique', 'exige'],
      ['facts', 'administration', 'pueden reducir la ciencia a'],
      ['critique', 'other', 'abre la posibilidad de'],
      ['other', 'transformation', 'orienta hacia'],
      ['administration', 'resignation', 'puede desembocar en'],
      ['resignation', 'other', 'se opone a'],
    ],
  },
  {
    id: 'negative',
    roman: 'II',
    title: 'Adorno y la dialéctica negativa',
    subtitle: 'no-identidad · negación · singular · primacía del objeto',
    thesis:
      'Adorno conserva el potencial crítico de la dialéctica y rechaza su clausura como sistema: pensar críticamente significa impedir que el concepto absorba por completo al objeto y prestar atención a lo singular, diferente y no-idéntico.',
    nodes: [
      { id: 'hegel', tag: 'PUNTO DE PARTIDA', title: 'Hegel dialéctico', detail: 'Adorno recupera el potencial crítico y negativo de la dialéctica hegeliana, pero se distancia del Hegel sistemático y de una totalidad finalmente reconciliada.', source: 'Reale y Antiseri · Adorno y la Dialéctica negativa', position: { x: 0, y: 180 } },
      { id: 'system', tag: 'PROBLEMA', title: 'Sistema cerrado', detail: 'Un sistema filosófico pretende apresar la totalidad de lo real bajo categorías ya organizadas. Para Adorno, esa pretensión corre el riesgo de disfrazar la realidad y eternizar su estado presente.', source: 'Reale y Antiseri · crítica de los sistemas filosóficos', position: { x: 310, y: 340 } },
      { id: 'identity', tag: 'TESIS CRITICADA', title: 'Identidad pensamiento = realidad', detail: 'La ilusión fundamental consiste en suponer que el ser corresponde estrictamente al pensamiento y puede quedar plenamente capturado por él.', source: 'Reale y Antiseri · no-identidad entre ser y pensamiento', position: { x: 310, y: 20 } },
      { id: 'conciliation', tag: 'CLAUSURA', title: 'Síntesis / conciliación', detail: 'Adorno rechaza una dialéctica que termine reconciliando conceptualmente las contradicciones y presentando la realidad como totalidad armónica.', source: 'Reale y Antiseri · contra la dialéctica de la síntesis y conciliación', position: { x: 630, y: 340 } },
      { id: 'nonidentity', tag: 'GIRO CRÍTICO', title: 'No-identidad', detail: 'La realidad no coincide plenamente con el pensamiento. Mantener esa distancia impide que el concepto camufle contradicciones, lagunas y sufrimiento reales.', source: 'Reale y Antiseri · defensa de la no-identidad', position: { x: 630, y: 20 } },
      { id: 'negative', tag: 'MÉTODO', title: 'Dialéctica negativa', detail: 'La dialéctica negativa sacude las falsas seguridades de los sistemas y hace visible aquello que sus categorías reprimen o dejan fuera.', source: 'Reale y Antiseri · Dialéctica negativa', position: { x: 950, y: 20 } },
      { id: 'singular', tag: 'SALVAGUARDA', title: 'Lo singular y diferente', detail: 'Lo singular es más que su determinación universal. El individuo y la diferencia no deben quedar reducidos a simples casos de una categoría general.', source: 'Reale y Antiseri · lo no-idéntico y lo individual', position: { x: 1270, y: 0 } },
      { id: 'object', tag: 'PRIMACÍA', title: 'Primacía del objeto', detail: 'La crítica de la identidad se dirige hacia el objeto: la realidad debe poder resistirse a la prepotencia de nuestras categorías y esquemas conceptuales.', source: 'Reale y Antiseri · primado del objeto', position: { x: 1270, y: 250 } },
      { id: 'materialist', tag: 'RESULTADO', title: 'Dialéctica materialista', detail: 'Con el primado del objeto, la dialéctica se vuelve materialista: no impone a la realidad una armonía conceptual, sino que deja que su carácter desgarrado cuestione al pensamiento.', source: 'Reale y Antiseri · primacía del objeto y materialismo', position: { x: 1580, y: 250 } },
      { id: 'criticalsociety', tag: 'APERTURA', title: 'Crítica de la sociedad', detail: 'La dialéctica negativa se convierte en crítica de la cultura y de la sociedad: resquebraja totalidades filosóficas y políticas que naturalizan o justifican lo existente.', source: 'Reale y Antiseri · de la dialéctica negativa a la teoría crítica de la sociedad', position: { x: 1580, y: 0 } },
    ],
    edges: [
      ['hegel', 'identity', 'hereda el problema de'],
      ['hegel', 'system', 'se distancia del'],
      ['identity', 'nonidentity', 'es negada por'],
      ['system', 'conciliation', 'busca cerrar mediante'],
      ['conciliation', 'negative', 'es rechazada por'],
      ['nonidentity', 'negative', 'fundamenta'],
      ['negative', 'singular', 'hace visible'],
      ['negative', 'object', 'se dirige hacia'],
      ['object', 'materialist', 'convierte la dialéctica en'],
      ['singular', 'criticalsociety', 'protege frente a totalidades'],
      ['materialist', 'criticalsociety', 'se despliega como'],
    ],
  },

  {
    id: 'enlightenment',
    roman: 'III',
    title: 'Adorno + Horkheimer: Dialéctica de la Ilustración',
    subtitle: 'razón · dominio · técnica · administración · industria cultural',
    thesis:
      'La Ilustración quería liberar a los hombres del miedo mediante la razón; pero cuando el saber queda reducido a técnica y la razón sólo calcula medios para fines dados, la emancipación puede invertirse en dominio, administración y homogeneización.',
    nodes: [
      {
        id: 'enlightenment',
        tag: 'PROYECTO',
        title: 'Ilustración',
        detail:
          'Adorno y Horkheimer usan “Ilustración” en un sentido amplio: el largo proceso mediante el cual la razón intenta racionalizar el mundo, quitar el miedo y convertir al ser humano en amo de la naturaleza.',
        source: 'Reale y Antiseri · Dialéctica de la Ilustración',
        position: { x: 0, y: 120 },
      },
      {
        id: 'rationalize',
        tag: 'OPERACIÓN',
        title: 'Racionalizar el mundo',
        detail:
          'Racionalizar significa volver el mundo calculable, previsible y manipulable. La naturaleza se convierte progresivamente en objeto de conocimiento y control.',
        source: 'Reale y Antiseri · racionalización y dominio de la naturaleza',
        position: { x: 300, y: 120 },
      },
      {
        id: 'domination',
        tag: 'GIRO',
        title: 'Dominio de la naturaleza',
        detail:
          'El conocimiento deja de orientarse sólo a comprender y se vincula a la capacidad de someter y manipular. Para Horkheimer, la voluntad de dominio está en la raíz de la enfermedad de la razón moderna.',
        source: 'Reale y Antiseri · dominio de la naturaleza',
        position: { x: 610, y: 120 },
      },
      {
        id: 'technique',
        tag: 'REDUCCIÓN',
        title: 'Saber = técnica',
        detail:
          'La crítica pierde terreno cuando el saber se valora principalmente por su funcionalidad. Importa menos si una teoría es verdadera que si funciona dentro de fines ya establecidos.',
        source: 'Reale y Antiseri · saber técnico frente a saber crítico',
        position: { x: 920, y: 120 },
      },
      {
        id: 'instrumental',
        tag: 'CONCEPTO CENTRAL',
        title: 'Razón instrumental',
        detail:
          'La razón ya no juzga los fines: calcula, selecciona y perfecciona los medios adecuados para alcanzar objetivos fijados desde fuera por el sistema.',
        source: 'Reale y Antiseri · razón instrumental',
        position: { x: 1230, y: 120 },
      },
      {
        id: 'administered',
        tag: 'SOCIEDAD',
        title: 'Sociedad administrada',
        detail:
          'Cuando la racionalidad queda reducida a funcionalidad, organización y cálculo, la vida social aparece cada vez más gobernada por aparatos técnicos, económicos y burocráticos.',
        source: 'Reale y Antiseri · sociedad totalmente administrada',
        position: { x: 1540, y: 120 },
      },
      {
        id: 'productivity',
        tag: 'CONTRADICCIÓN',
        title: 'Aumento de productividad',
        detail:
          'El progreso económico y tecnológico crea condiciones materiales que podrían favorecer un mundo más justo, pero al mismo tiempo fortalece enormemente al aparato técnico y a quienes lo controlan.',
        source: 'Reale y Antiseri · contradicción del progreso productivo',
        position: { x: 1850, y: 20 },
      },
      {
        id: 'possibility',
        tag: 'POTENCIAL',
        title: 'Posibilidad de un mundo más justo',
        detail:
          'La crítica no niega que el progreso técnico produzca posibilidades emancipadoras. Precisamente por eso denuncia que esas capacidades puedan quedar subordinadas a estructuras de dominio.',
        source: 'Reale y Antiseri · condiciones de un mundo más justo',
        position: { x: 2160, y: 0 },
      },
      {
        id: 'apparatus',
        tag: 'DOMINACIÓN',
        title: 'Superioridad del aparato',
        detail:
          'Los mismos avances que incrementan la productividad pueden otorgar una superioridad inmensa al aparato técnico y a los grupos que disponen de él.',
        source: 'Reale y Antiseri · aparato técnico y potencias económicas',
        position: { x: 2160, y: 190 },
      },
      {
        id: 'individual',
        tag: 'EFECTO',
        title: 'Individuo reducido',
        detail:
          'Ante las potencias económicas y técnicas, el individuo pierde autonomía y capacidad de juicio; sirve al aparato y se vuelve más dirigible.',
        source: 'Reale y Antiseri · individuo frente al aparato',
        position: { x: 2470, y: 190 },
      },
      {
        id: 'culture',
        tag: 'MECANISMO',
        title: 'Industria cultural',
        detail:
          'La industria cultural funciona como uno de los instrumentos principales de la sociedad tecnológica: cine, radio, televisión, publicidad, revistas y otros medios masivos organizan la experiencia social.',
        source: 'Reale y Antiseri · industria cultural',
        position: { x: 1540, y: 390 },
      },
      {
        id: 'needs',
        tag: 'PRODUCCIÓN SOCIAL',
        title: 'Valores, modelos y necesidades',
        detail:
          'Los medios no sólo transmiten contenidos: imponen valores y modelos de conducta, crean necesidades y establecen formas de lenguaje.',
        source: 'Reale y Antiseri · medios de masas, valores y necesidades',
        position: { x: 1850, y: 390 },
      },
      {
        id: 'uniformity',
        tag: 'HOMOGENEIZACIÓN',
        title: 'Uniformidad',
        detail:
          'Los valores, necesidades, conductas y lenguajes se vuelven uniformes porque deben funcionar para todos; la diferencia individual pierde espacio.',
        source: 'Reale y Antiseri · uniformidad cultural',
        position: { x: 2160, y: 390 },
      },
      {
        id: 'passivity',
        tag: 'SUBJETIVIDAD',
        title: 'Recepción pasiva',
        detail:
          'La industria cultural no estimula creatividad ni autonomía, sino que acostumbra al sujeto a recibir pasivamente mensajes, modelos y diversiones ya programadas.',
        source: 'Reale y Antiseri · pasividad y creatividad',
        position: { x: 2470, y: 390 },
      },
      {
        id: 'ideology',
        tag: 'RESULTADO',
        title: 'Aceptación de los fines del sistema',
        detail:
          'La industria cultural se vuelve ideología porque acostumbra a aceptar fines establecidos por otros. La Ilustración, que quería superar la minoría de edad, termina produciendo nuevos mecanismos de tutela.',
        source: 'Reale y Antiseri · industria cultural como ideología',
        position: { x: 2780, y: 300 },
      },
    ],
    edges: [
      ['enlightenment', 'rationalize', 'busca'],
      ['rationalize', 'domination', 'vuelve posible'],
      ['domination', 'technique', 'privilegia'],
      ['technique', 'instrumental', 'reduce la razón a'],
      ['instrumental', 'administered', 'organiza'],
      ['administered', 'productivity', 'incrementa'],
      ['productivity', 'possibility', 'podría abrir'],
      ['productivity', 'apparatus', 'también fortalece'],
      ['apparatus', 'individual', 'subordina'],
      ['administered', 'culture', 'utiliza como instrumento'],
      ['culture', 'needs', 'produce e impone'],
      ['needs', 'uniformity', 'estandariza'],
      ['uniformity', 'passivity', 'favorece'],
      ['passivity', 'ideology', 'desemboca en'],
      ['individual', 'ideology', 'queda guiado por'],
    ],
  },

  {
    id: 'eclipse',
    roman: 'IV',
    title: 'Horkheimer: el eclipse de la razón',
    subtitle: 'razón objetiva · razón subjetiva · medios · fines · denuncia',
    thesis:
      'Horkheimer diagnostica una razón que ha perdido autonomía: en lugar de discutir racionalmente los fines, se limita a calcular medios eficaces para objetivos establecidos por otras fuerzas. La filosofía crítica debe denunciar esa reducción sin fingir que basta con restaurar antiguas metafísicas objetivistas.',
    nodes: [
      {
        id: 'objective',
        tag: 'CONTRASTE HISTÓRICO',
        title: 'Razón objetiva',
        detail:
          'La razón objetiva suponía que la racionalidad no era sólo una facultad subjetiva de cálculo: podía referirse al orden de la realidad y discutir criterios de verdad, bien y fines humanos.',
        source: 'Reale y Antiseri · Horkheimer, razón objetiva y subjetiva',
        position: { x: 0, y: 20 },
      },
      {
        id: 'subjective',
        tag: 'DIAGNÓSTICO',
        title: 'Razón subjetiva',
        detail:
          'En la civilización industrial prevalece una razón entendida como capacidad de calcular probabilidades y coordinar medios adecuados para un fin dado.',
        source: 'Reale y Antiseri · Eclipse de la razón',
        position: { x: 0, y: 300 },
      },
      {
        id: 'ends',
        tag: 'PREGUNTA PERDIDA',
        title: '¿Qué fines son razonables?',
        detail:
          'La razón objetiva aspiraba a discutir si ciertos fines podían considerarse racionales. Horkheimer muestra que la razón subjetiva renuncia precisamente a esa pregunta.',
        source: 'Reale y Antiseri · razón y fines',
        position: { x: 330, y: 20 },
      },
      {
        id: 'calculation',
        tag: 'FUNCIÓN',
        title: 'Calcular medios',
        detail:
          'La razón subjetiva conserva una enorme eficacia instrumental: compara probabilidades, organiza procedimientos y selecciona medios para alcanzar objetivos.',
        source: 'Reale y Antiseri · razón como cálculo',
        position: { x: 330, y: 300 },
      },
      {
        id: 'heteronomy',
        tag: 'HETERONOMÍA',
        title: 'Fines dados desde fuera',
        detail:
          'Si la razón ya no puede fundamentar los fines, éstos quedan establecidos por otras fuerzas sociales. La eficacia sustituye al juicio racional acerca de qué merece perseguirse.',
        source: 'Reale y Antiseri · contenidos heterónomos y fines establecidos',
        position: { x: 660, y: 300 },
      },
      {
        id: 'ancilla',
        tag: 'FÓRMULA',
        title: 'Ancilla administrationis',
        detail:
          'Al renunciar a su autonomía, la razón se vuelve servidora de la administración: puede optimizar cualquier objetivo, pero no decide críticamente si ese objetivo es bueno, verdadero o justo.',
        source: 'Reale y Antiseri · razón como instrumento de la administración',
        position: { x: 990, y: 300 },
      },
      {
        id: 'dominate',
        tag: 'CRITERIO',
        title: 'Dominar hombres y naturaleza',
        detail:
          'El valor instrumental de la razón termina convertido en criterio dominante: los hombres y la naturaleza aparecen como objetos organizables, explotables y administrables.',
        source: 'Reale y Antiseri · dominio de hombres y naturaleza',
        position: { x: 1320, y: 300 },
      },
      {
        id: 'individual',
        tag: 'EFECTO SOCIAL',
        title: 'Individuo encasillado',
        detail:
          'El sistema, la administración y la civilización industrial colocan al individuo en funciones y casillas previamente delimitadas, reduciendo autonomía y posibilidades de juicio.',
        source: 'Reale y Antiseri · destino del individuo en la administración',
        position: { x: 1650, y: 300 },
      },
      {
        id: 'science',
        tag: 'LÍMITE',
        title: 'Ciencia silenciosa sobre los fines',
        detail:
          'Una ciencia técnicamente poderosa puede decir cómo alcanzar ciertos objetivos y, sin embargo, permanecer muda ante la cuestión de qué fines son dignos de orientar la vida humana.',
        source: 'Reale y Antiseri · ciencia, filosofía y fines',
        position: { x: 990, y: 20 },
      },
      {
        id: 'denunciation',
        tag: 'TAREA FILOSÓFICA',
        title: 'Denunciar la razón instrumental',
        detail:
          'La filosofía no debe ofrecer una panacea ni fingir una restauración fácil de sistemas antiguos. Su tarea crítica consiste en hacer audible el sufrimiento que la racionalidad administrada silencia y denunciar la falsa razón.',
        source: 'Reale y Antiseri · filosofía como denuncia',
        position: { x: 1320, y: 20 },
      },
      {
        id: 'noabsolute',
        tag: 'LÍMITE CRÍTICO',
        title: 'No absolutizar lo histórico',
        detail:
          'El Horkheimer tardío insiste en que ninguna política, teoría, Estado o forma histórica finita puede convertirse legítimamente en valor último y absoluto.',
        source: 'Reale y Antiseri · nostalgia de lo completamente otro',
        position: { x: 1650, y: 20 },
      },
      {
        id: 'other',
        tag: 'ESPERANZA NEGATIVA',
        title: 'Lo completamente otro',
        detail:
          'La nostalgia de lo completamente otro no ofrece una descripción positiva de una realidad trascendente; mantiene la esperanza de que la injusticia del mundo no tenga la última palabra.',
        source: 'Reale y Antiseri · nostalgia de lo completamente otro',
        position: { x: 1980, y: 20 },
      },
      {
        id: 'solidarity',
        tag: 'ORIENTACIÓN',
        title: 'Solidaridad humana',
        detail:
          'Frente al sufrimiento, la finitud y la injusticia, Horkheimer formula una solidaridad que excede una sola clase y apunta a un mundo más libre del dolor y más favorable al desarrollo humano.',
        source: 'Reale y Antiseri · solidaridad de todos los hombres',
        position: { x: 2310, y: 20 },
      },
    ],
    edges: [
      ['objective', 'ends', 'permite preguntar'],
      ['subjective', 'calculation', 'se reduce a'],
      ['calculation', 'heteronomy', 'acepta'],
      ['heteronomy', 'ancilla', 'convierte la razón en'],
      ['ancilla', 'dominate', 'sirve para'],
      ['dominate', 'individual', 'termina encasillando al'],
      ['ends', 'science', 'queda fuera de una'],
      ['science', 'denunciation', 'exige una filosofía de'],
      ['denunciation', 'noabsolute', 'también impide'],
      ['noabsolute', 'other', 'mantiene abierta la'],
      ['other', 'solidarity', 'orienta negativamente hacia'],
      ['subjective', 'science', 'deja'],
    ],
  },

  {
    id: 'emancipation',
    roman: 'V',
    title: 'Marcuse + Fromm: dos vías de emancipación',
    subtitle: 'represión · unidimensionalidad · Gran Rechazo · desobediencia · ser',
    thesis:
      'Marcuse y Fromm desplazan la crítica hacia la formación del sujeto. Ambos preguntan cómo la dominación se interioriza y qué condiciones podrían permitir una vida no reducida a adaptación: Marcuse desde la represión, las necesidades y el Gran Rechazo; Fromm desde el miedo a la libertad, la desobediencia y la modalidad del ser.',
    nodes: [
      {
        id: 'freud',
        tag: 'MARCUSE · PUNTO DE PARTIDA',
        title: 'Freud: civilización y represión',
        detail:
          'Marcuse parte de Freud: la civilización exige desviar los instintos, aplazar la satisfacción y subordinar el principio de placer al principio de realidad.',
        source: 'Reale y Antiseri · Marcuse, Eros y civilización',
        position: { x: 0, y: 20 },
      },
      {
        id: 'reality',
        tag: 'MARCUSE · PROBLEMA',
        title: 'Principio de realidad',
        detail:
          'Para Freud, la transformación del principio de placer en principio de realidad hace posible una sociedad duradera al precio de la represión de los instintos.',
        source: 'Reale y Antiseri · principio de placer → principio de realidad',
        position: { x: 320, y: 20 },
      },
      {
        id: 'historical',
        tag: 'MARCUSE · GIRO',
        title: 'Represión históricamente organizada',
        detail:
          'Marcuse rechaza eternizar la oposición entre placer y realidad: la forma concreta de represión no es una constante metafísica, sino producto de una determinada organización histórico-social.',
        source: 'Reale y Antiseri · crítica de Marcuse a la eternización freudiana',
        position: { x: 650, y: 20 },
      },
      {
        id: 'nonrepressive',
        tag: 'MARCUSE · POSIBILIDAD',
        title: 'Civilización no represiva',
        detail:
          'Si la represión concreta es histórica, puede pensarse una organización distinta donde la lucha por la existencia se transforme en cooperación y donde razón y felicidad dejen de aparecer como enemigos.',
        source: 'Reale y Antiseri · posibilidad de una civilización no represiva',
        position: { x: 980, y: 0 },
      },
      {
        id: 'onedimensional',
        tag: 'MARCUSE · DIAGNÓSTICO',
        title: 'Sociedad unidimensional',
        detail:
          'La sociedad tecnológica avanzada neutraliza la oposición y absorbe alternativas: integra necesidades, aspiraciones y conductas dentro de un universo organizado por la racionalidad tecnológica.',
        source: 'Reale y Antiseri · El hombre unidimensional',
        position: { x: 980, y: 220 },
      },
      {
        id: 'needs',
        tag: 'MARCUSE · CONTROL',
        title: 'Necesidades y aspiraciones integradas',
        detail:
          'El aparato productivo no sólo determina ocupaciones y actitudes: llega a modelar necesidades y aspiraciones individuales, debilitando la posibilidad de una oposición cualitativa.',
        source: 'Reale y Antiseri · aparato productivo y necesidades',
        position: { x: 1310, y: 220 },
      },
      {
        id: 'comfortable',
        tag: 'MARCUSE · PARADOJA',
        title: 'No-libertad confortable',
        detail:
          'La dominación puede presentarse bajo formas de opulencia, bienestar y libertad aparente. Por eso el control no necesita sentirse siempre como pura coerción externa.',
        source: 'Reale y Antiseri · sociedad tecnológica avanzada',
        position: { x: 1640, y: 220 },
      },
      {
        id: 'outsiders',
        tag: 'MARCUSE · EXTERIOR',
        title: 'Marginados y excluidos',
        detail:
          'Marcuse localiza una posibilidad de oposición en quienes permanecen fuera de la integración plena del sistema: marginados, explotados, perseguidos y desempleados.',
        source: 'Reale y Antiseri · oposición desde fuera del sistema',
        position: { x: 1640, y: 20 },
      },
      {
        id: 'refusal',
        tag: 'MARCUSE · NEGACIÓN',
        title: 'Gran Rechazo',
        detail:
          'La teoría crítica no ofrece una receta capaz de llenar la distancia entre presente y futuro. Permanece negativa y se mantiene fiel a quienes se niegan a participar en un juego social que consideran trucado.',
        source: 'Reale y Antiseri · Marcuse y el Gran Rechazo',
        position: { x: 1970, y: 20 },
      },

      {
        id: 'freedom',
        tag: 'FROMM · PUNTO DE PARTIDA',
        title: 'Libertad e individuación',
        detail:
          'Para Fromm, convertirse en individuo significa separarse de la unión originaria con la naturaleza y asumir responsabilidad por los propios actos, elecciones y pensamientos.',
        source: 'Reale y Antiseri · Fromm, El miedo a la libertad',
        position: { x: 0, y: 470 },
      },
      {
        id: 'isolation',
        tag: 'FROMM · COSTO',
        title: 'Aislamiento',
        detail:
          'La libertad trae consigo soledad, riesgo y responsabilidad. Esa carga puede resultar difícil de soportar y generar intentos de escapar de la autonomía.',
        source: 'Reale y Antiseri · aislamiento y peso de la libertad',
        position: { x: 320, y: 470 },
      },
      {
        id: 'submission',
        tag: 'FROMM · HUIDA',
        title: 'Sumisión o dominio',
        detail:
          'Una salida patológica consiste en someterse a una autoridad; otra, en dominar a los demás. Fromm entiende ambas como formas fallidas de relación humana.',
        source: 'Reale y Antiseri · sumisión y dominio',
        position: { x: 650, y: 400 },
      },
      {
        id: 'conformism',
        tag: 'FROMM · HUIDA',
        title: 'Conformismo gregario',
        detail:
          'Cuando el individuo teme la carga de la libertad, puede obedecer ciegamente las normas y buscar una identidad prestada en el grupo.',
        source: 'Reale y Antiseri · miedo a la libertad y conformismo',
        position: { x: 650, y: 560 },
      },
      {
        id: 'disobedience',
        tag: 'FROMM · CONDICIÓN',
        title: 'Desobediencia',
        detail:
          'Fromm vincula libertad y capacidad de decir no. El crecimiento humano, intelectual y moral exige poder dudar, criticar y desobedecer a poderes y creencias establecidas.',
        source: 'Reale y Antiseri · desobediencia como condición de libertad',
        position: { x: 980, y: 470 },
      },
      {
        id: 'having',
        tag: 'FROMM · MODALIDAD',
        title: 'Tener',
        detail:
          'En la modalidad del tener, la identidad se define por posesiones y consumo: el sujeto se comprende según lo que tiene y utiliza.',
        source: 'Reale y Antiseri · Fromm, ¿Tener o ser?',
        position: { x: 1310, y: 560 },
      },
      {
        id: 'being',
        tag: 'FROMM · MODALIDAD',
        title: 'Ser',
        detail:
          'La modalidad del ser exige independencia, libertad y razón crítica. Ser activo significa desarrollar productivamente capacidades, amar, crecer, dar y trascender el yo aislado.',
        source: 'Reale y Antiseri · modalidad del ser',
        position: { x: 1310, y: 400 },
      },
      {
        id: 'citybeing',
        tag: 'FROMM · HORIZONTE',
        title: 'Ciudad del Ser',
        detail:
          'Fromm imagina una alternativa a la crisis moderna en la que desarrollo racional y científico se combine con una estructura humana orientada por libertad, solidaridad y predominio del ser sobre el tener.',
        source: 'Reale y Antiseri · Ciudad del Ser',
        position: { x: 1640, y: 470 },
      },
    ],
    edges: [
      ['freud', 'reality', 'formula'],
      ['reality', 'historical', 'Marcuse historiza'],
      ['historical', 'nonrepressive', 'permite pensar'],
      ['historical', 'onedimensional', 'contrasta con'],
      ['onedimensional', 'needs', 'integra'],
      ['needs', 'comfortable', 'produce'],
      ['comfortable', 'outsiders', 'no absorbe totalmente a'],
      ['outsiders', 'refusal', 'pueden encarnar'],

      ['freedom', 'isolation', 'implica'],
      ['isolation', 'submission', 'puede huir mediante'],
      ['isolation', 'conformism', 'puede huir mediante'],
      ['conformism', 'disobedience', 'es resistido por'],
      ['submission', 'disobedience', 'es resistido por'],
      ['disobedience', 'being', 'abre hacia'],
      ['having', 'being', 'se opone a'],
      ['being', 'citybeing', 'orienta hacia'],

      ['refusal', 'disobedience', 'comparte la lógica de decir no con'],
      ['nonrepressive', 'citybeing', 'converge como horizonte emancipador con'],
    ],
  },

]