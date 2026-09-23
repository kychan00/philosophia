export const hackerRoutes = [
  { id: 'all', label: 'Todo' },
  { id: 'class14', label: 'Clase 14 Sep' },
  { id: 'class21', label: 'Clase 21 Sep' },
  { id: 'identity', label: 'Definición' },
  { id: 'moore', label: 'Moore' },
  { id: 'russell', label: 'Russell' },
  { id: 'tractatus', label: 'Tractatus' },
  { id: 'cambridge', label: 'Cambridge' },
  { id: 'vienna', label: 'Viena' },
  { id: 'after', label: 'Posguerra' },
]

export const hackerRouteColors = {
  class14: '#9b4b38',
  class21: '#466f68',
  identity: '#9a702e',
  moore: '#59745c',
  russell: '#49687d',
  tractatus: '#7b4d46',
  cambridge: '#6f6d85',
  vienna: '#8b633e',
  after: '#6b5a78',
}

const n = (
  id,
  code,
  kind,
  title,
  short,
  explanation,
  role,
  page,
  branch,
  dependsOn,
  concepts,
  extra = {},
) => ({
  id,
  type: kind,
  position: { x: 0, y: 0 },
  data: {
    code,
    kind: extra.kindLabel || kind,
    title,
    short,
    explanation,
    role,
    page,
    branch,
    dependsOn,
    produces: [],
    concepts,
    quote: extra.quote || null,
    example: extra.example || null,
    critical: Boolean(extra.critical),
    nextQuestion: extra.nextQuestion || null,
  },
})

const mainNodes = [
  n('H00','00','thesis','Tesis general',
    'La filosofía analítica no nace con el giro lingüístico ni se identifica sin más con filosofía del lenguaje.',
    'Hacker separa dos acontecimientos históricos: primero, Moore y Russell inauguran una forma antipsicologista de análisis; después, el Tractatus produce el giro lingüístico dentro de esa tradición.',
    'Funciona como tesis rectora: toda la historia posterior debe leerse dinámicamente, como transformación de varios hilos y no como despliegue de una esencia fija.',
    'p. 102',['identity'],[],['filosofía analítica','giro lingüístico','historia'],
    {quote:'«Mejor dicho, tiene que ser entendido dinámicamente» (p. 102).',critical:true,
     nextQuestion:'¿Qué hace peculiar al siglo XX filosófico?'}),

  n('H01','01','context','Siglo XX: lenguaje y lógica',
    'El siglo XX pone en primer plano la relación entre lógica, lenguaje y pensamiento.',
    'Frege, Russell y Whitehead desarrollan una lógica formal poderosísima, mientras el lenguaje se vuelve un problema filosófico central.',
    'Abre el horizonte histórico que hace posible la nueva tradición analítica.',
    'p. 95',['identity'],['H00'],['lenguaje','lógica','pensamiento'],
    {quote:'«la época del lenguaje y de la lógica» (p. 95).',
     nextQuestion:'¿Qué papel histórico ocupa Wittgenstein dentro de esa transformación?'}),

  n('H02','02','bridge','Wittgenstein como bisagra',
    'No funda la filosofía analítica, pero conecta y transforma varias de sus etapas.',
    'Hacker lo sitúa entre Moore/Russell, Cambridge, Viena y la filosofía británica de posguerra.',
    'Evita la falsa identificación entre fundador del movimiento y protagonista del giro lingüístico.',
    'pp. 95–103',['identity','tractatus','cambridge','vienna','after'],['H01'],['Wittgenstein','transición','historia'],
    {critical:true,nextQuestion:'¿Basta con que una filosofía analice para llamarla analítica?'}),

  n('H03','03','distinction','No todo análisis es “analítico”',
    'Analizar en sentido amplio no basta para pertenecer al movimiento histórico del siglo XX.',
    'Si Austin es analítico por estudiar excusas, también Aristóteles podría serlo; si Ryle lo es por la mente, también Tomás; si Strawson lo es por individuos, también Kant.',
    'Delimita el explanandum histórico de Hacker: “filosofía analítica” debe designar una tradición particular, no cualquier filosofía cuidadosa.',
    'pp. 95–103',['identity'],['H02'],['análisis','historiografía','movimiento'],
    {nextQuestion:'Entonces, ¿cómo intenta Dummett definir la tradición?'}),

  n('H04','04','debate','Crítica a Dummett',
    'Hacker rechaza definir la filosofía analítica como explicación del pensamiento mediante explicación del lenguaje.',
    'La definición de Dummett fuerza la historia para hacer del giro lingüístico la esencia del movimiento completo.',
    'Es uno de los blancos polémicos centrales del artículo.',
    'pp. 95–103',['identity'],['H03'],['Dummett','lenguaje','pensamiento'],
    {critical:true,nextQuestion:'¿Qué significa “pensamiento” en esa definición?'}),

  n('H05','05','debate','¿Qué significa “pensamiento”?',
    'Gedanke objetivo y acto psicológico de pensar no son el mismo objeto filosófico.',
    'Si “pensamiento” significa el Gedanke fregeano, la definición cubre una zona estrecha de lógica y lenguaje; si significa el acto de pensar, remite a psicología filosófica.',
    'Muestra por qué la fórmula de Dummett no delimita adecuadamente la tradición completa.',
    'pp. 95–103',['identity'],['H04'],['Gedanke','acto de pensar','Dummett'],
    {nextQuestion:'¿Puede Frege sostener la lectura lingüística de Dummett?'}),

  n('H06','06','frege','Frege no encaja fácilmente',
    'Frege no considera al lenguaje ordinario el fundamento privilegiado de toda filosofía.',
    'El lenguaje ordinario puede obstaculizar la lógica; el filósofo debe liberarse de ciertos engaños lingüísticos.',
    'Debilita la genealogía Frege → filosofía del lenguaje → filosofía analítica.',
    'p. 98',['identity'],['H05'],['Frege','lenguaje ordinario','lógica'],
    {quote:'«Los lenguajes no están hechos para mandar a la lógica» (p. 98).',
     nextQuestion:'¿El Wittgenstein temprano sí confirma a Dummett?'}),

  n('H07','07','tractatus','Wittgenstein temprano',
    'El Tractatus investiga los límites de lo pensable mediante los límites de lo decible.',
    'No se trata de analizar lingüísticamente la palabra “pensamiento”, sino de determinar qué puede representarse, pensarse y decirse.',
    'Introduce una preocupación de carácter kantiano y prepara el verdadero giro lingüístico.',
    'pp. 98–100',['identity','tractatus'],['H06'],['límites','representación','pensamiento'],
    {nextQuestion:'¿Frege y Wittgenstein entienden igual el pensamiento?'}),

  n('H08','08','distinction','Frege ≠ Wittgenstein sobre pensamiento',
    'Frege postula pensamientos objetivos; Wittgenstein vincula proposición, lenguaje y representación.',
    'La coincidencia temática en lógica y pensamiento oculta una ruptura profunda sobre qué es una proposición y cómo representa.',
    'Impide una continuidad histórica demasiado simple.',
    'pp. 98–100',['identity','tractatus'],['H07'],['Frege','Wittgenstein','proposición'],
    {nextQuestion:'¿Qué ocurre cuando miramos al Wittgenstein posterior?'}),

  n('H09','09','after','Último Wittgenstein: filosofía “llana”',
    'No existe una forma proposicional general que fundamente jerárquicamente toda filosofía.',
    'El Wittgenstein posterior abandona una arquitectura fundacional del lenguaje y trata los problemas filosóficos en su diversidad.',
    'Complica todavía más cualquier definición esencialista y puramente lingüística de la tradición.',
    'p. 100',['identity','after'],['H08'],['Wittgenstein tardío','pluralidad','método'],
    {quote:'«La filosofía es “llana”» (p. 100).',
     nextQuestion:'Si no la define el lenguaje, ¿qué significa entonces análisis?'}),

  n('H10','10','method','¿Qué significa “análisis”?',
    'Hacker recupera el sentido literal de descomponer algo en sus componentes.',
    'La analogía con análisis químico y microfísico permite pensar el análisis filosófico como revelación de una constitución problemática.',
    'Da una vía metodológica alternativa a la definición de Dummett.',
    'pp. 100–101',['identity'],['H09'],['análisis','descomposición','componentes'],
    {nextQuestion:'¿No analizaba ya el empirismo clásico?'}),

  n('H11','11','history','Empirismo psicológico y antipsicologismo',
    'Locke y Hume analizaban ideas complejas en elementos mentales; el siglo XX cambia el objeto y orientación del análisis.',
    'La diferencia decisiva para Hacker es la orientación no psicológica o antipsicologista de la filosofía analítica moderna.',
    'Permite reconocer antecedentes sin borrar la novedad histórica.',
    'pp. 100–101',['identity'],['H10'],['empirismo','psicologismo','antipsicologismo'],
    {critical:true,nextQuestion:'¿Debe entonces buscarse una esencia común del movimiento?'}),

  n('H12','12','history','Movimiento histórico, no esencia',
    'La filosofía analítica es plural, cambiante e internamente heterogénea.',
    'No hay doctrina, método o concepción de análisis única compartida por todos; hay hilos históricos que se continúan y transforman.',
    'Fija el método historiográfico del artículo.',
    'p. 101',['identity'],['H11'],['tradición','pluralidad','hilos históricos'],
    {quote:'«No creo que pueda ser fructíferamente representado mediante la referencia de un único principio común» (p. 101).',
     critical:true,nextQuestion:'¿Cuáles son las dos raíces de esa tradición?'}),

  n('H13','13','origin','Las dos raíces',
    'Moore inaugura una raíz de análisis conceptual y Russell una raíz de análisis lógico.',
    'Ambas son objetivas y antipsicologistas y terminarán influyéndose mutuamente.',
    'Es la bisagra entre la discusión de definición y la reconstrucción histórica de la primera etapa.',
    'pp. 101–103',['identity','moore','russell'],['H12'],['Moore','Russell','doble origen'],
    {critical:true,nextQuestion:'¿Contra qué contexto filosófico reaccionan Moore y Russell?'}),

  n('H14','14','context','Revuelta contra el idealismo británico',
    'El origen inmediato no es un simple regreso al empirismo, sino una revuelta contra el idealismo absoluto.',
    'Bradley y otras formas de idealismo dominaban universidades británicas cuando Moore y Russell rompen con ellas.',
    'Sitúa históricamente la primera etapa.',
    'pp. 103–117',['moore','russell'],['H13'],['idealismo','Bradley','revuelta'],
    {nextQuestion:'¿Qué propone Moore frente al idealismo?'}),

  n('H15','15','moore','Moore: realismo, pluralismo y relaciones externas',
    'El objeto conocido no depende del acto de conocerlo y la realidad no es una totalidad monista inseparable.',
    'Moore defiende independencia de objetos, objetividad de relaciones y verdad o falsedad de proposiciones independientemente de la conciencia.',
    'Establece el trasfondo ontológico de su análisis conceptual.',
    'pp. 103–117',['moore'],['H14'],['realismo','pluralismo','relaciones externas'],
    {nextQuestion:'¿Qué entiende Moore por análisis?'}),

  n('H16','16','moore','Análisis conceptual en Moore',
    'Analizar puede ser descomponer conceptos, inspeccionar su contenido o explicar sus relaciones.',
    'El objeto primario no es el lenguaje sino conceptos objetivos; las palabras los expresan.',
    'Define la raíz mooreana de la filosofía analítica.',
    'pp. 103–117',['moore'],['H15'],['concepto','componentes','relaciones'],
    {critical:true,
     example:'Ejemplo tuyo: “triángulo”. Una lectura mooreana temprana puede inspeccionar el concepto objetivo y sus relaciones sin comenzar por los usos de la palabra.',
     nextQuestion:'¿Comprender una palabra equivale a poder analizar su concepto?'}),

  n('H17','17','moore','Uso de palabra ≠ análisis conceptual',
    'Una persona puede usar una expresión correctamente sin poder ofrecer su análisis filosófico.',
    'La competencia ordinaria y la elucidación conceptual son capacidades distintas.',
    'Protege la autonomía de la tarea analítica frente al simple dominio lingüístico.',
    'pp. 103–117',['moore'],['H16'],['uso','comprensión','análisis'],
    {nextQuestion:'¿Pero cómo trabaja Moore en la práctica?'}),

  n('H18','18','moore','Moore se acerca al lenguaje',
    'Su teoría sigue siendo platónica, pero su práctica compara usos de expresiones.',
    'Al abandonar el platonismo, esta práctica desemboca en explicaciones de implicaciones, exclusiones y presuposiciones.',
    'Anticipa el análisis conectivo británico posterior.',
    'pp. 103–117',['moore','after'],['H17'],['uso','conexiones','análisis conectivo'],
    {nextQuestion:'¿Moore concibe por eso toda filosofía como filosofía del lenguaje?'}),

  n('H19','19','moore','Moore conserva un proyecto metafísico',
    'La filosofía debe ofrecer una descripción general de todo el Universo.',
    'Moore pregunta por grandes tipos de cosas —objetos materiales, estados de conciencia, espacio, tiempo— y sus relaciones.',
    'Refuta directamente una definición exclusivamente lingüística de la filosofía analítica.',
    'p. 108',['moore'],['H18'],['metafísica','ontología','universo'],
    {quote:'«ofrecer una descripción general de todo el Universo» (p. 108).',
     critical:true,nextQuestion:'¿Qué transforma Russell al romper con el idealismo?'}),

  n('H20','20','russell','Russell contra relaciones internas',
    'Relaciones como “A es más largo que B” no se eliminan reduciéndolas a propiedades monádicas de A y B.',
    'Si A tiene magnitud x y B magnitud y, todavía reaparece la relación “x es mayor que y”.',
    'Defiende la realidad de relaciones externas y rompe con Bradley.',
    'pp. 103–117',['russell'],['H14'],['relaciones externas','Bradley','matemáticas'],
    {critical:true,nextQuestion:'¿De dónde recibe Russell otra inspiración para el análisis?'}),

  n('H21','21','russell','Matemáticas como modelo de análisis',
    'Weierstrass, Dedekind y Cantor muestran que nociones oscuras pueden recibir definiciones rigurosas.',
    'La matemática enseña a Russell que el análisis puede eliminar intuiciones y compromisos metafísicos innecesarios.',
    'Da al análisis russelliano una segunda genealogía distinta de Moore.',
    'p. 111',['russell'],['H20'],['matemáticas','definición','rigor'],
    {quote:'«sólo al analizar, el progreso es posible» (p. 111).',
     nextQuestion:'¿Cómo concibe el primer Russell la realidad analizada?'}),

  n('H22','22','russell','Primer Russell: descomposición objetiva',
    'La realidad posee una complejidad objetiva que puede descomponerse en elementos simples e indefinibles.',
    'El lenguaje sirve como vía hacia una estructura independiente del lenguaje; aún no hay giro lingüístico pleno.',
    'Conserva una ambición ontológica fuerte dentro del análisis.',
    'pp. 103–117',['russell'],['H21'],['simples','estructura','realidad'],
    {nextQuestion:'¿Qué añade el programa logicista?'}),

  n('H23','23','russell','Logicismo',
    'La aritmética debe reconstruirse a partir de nociones puramente lógicas.',
    'El análisis ya no sólo contempla componentes: muestra cómo un dominio aparentemente autónomo se reduce y reconstruye desde bases más simples.',
    'Consolida el análisis reductivo.',
    'pp. 103–117',['russell'],['H22'],['logicismo','reducción','reconstrucción'],
    {nextQuestion:'¿Qué problema ontológico produce una teoría referencial demasiado generosa?'}),

  n('H24','24','russell','Teoría referencial demasiado generosa',
    'Si cada expresión significativa debe significar una entidad, la ontología se puebla excesivamente.',
    'Montañas de oro, dioses homéricos, quimeras y supuestas entidades lógicas aparecen por tratar la forma gramatical como guía ontológica.',
    'Plantea el problema que resolverá la teoría de las descripciones.',
    'pp. 103–117',['russell'],['H23'],['referencia','ontología','entidades'],
    {nextQuestion:'¿Cómo elimina Russell esas entidades aparentes?'}),

  n('H25','25','russell','Teoría de las descripciones',
    'Una descripción definida puede eliminarse mediante análisis lógico.',
    '“El rey de Francia es calvo” se desarrolla como existencia + unicidad + predicación, sin postular una entidad inexistente.',
    'Cambia la concepción del análisis: de inventariar objetos a revelar una estructura lógica mediante paráfrasis.',
    'p. 114',['russell'],['H24'],['descripciones','paráfrasis','existencia'],
    {quote:'«el rey de Francia es calvo» (p. 114).',critical:true,
     nextQuestion:'¿Qué diferencia aparece entre gramática y lógica?'}),

  n('H26','26','russell','Forma gramatical ≠ forma lógica',
    'La estructura superficial de una oración puede ocultar su estructura lógica real.',
    'El análisis transforma una oración en una paráfrasis que hace explícitas sus condiciones lógicas.',
    'Acerca el análisis al lenguaje sin convertir todavía la filosofía de Russell en filosofía del lenguaje.',
    'pp. 103–117',['russell','tractatus'],['H25'],['forma gramatical','forma lógica','paráfrasis'],
    {critical:true,
     example:'Ejemplo tuyo: “El emperador de México duerme”. Puede analizarse mediante existencia, unicidad y predicación sin admitir un emperador inexistente.',
     nextQuestion:'¿Qué lugar ocupa ahora la nueva lógica?'}),

  n('H27','27','russell','La lógica como herramienta filosófica',
    'La lógica atraviesa la gramática engañosa y muestra estructura subyacente.',
    'El itinerario es superficie gramatical → análisis lógico → estructura real.',
    'Vuelve a la lógica instrumento privilegiado de la investigación filosófica.',
    'pp. 103–117',['russell'],['H26'],['lógica','gramática','estructura'],
    {nextQuestion:'¿Qué consecuencias ontológicas tiene la reducción?'}),

  n('H28','28','russell','Ockham y construcciones lógicas',
    'No debemos multiplicar entidades inferidas cuando pueden sustituirse por construcciones lógicas.',
    'El análisis es simultáneamente epistemológico —qué conocemos directamente— y ontológico —qué entidades necesitamos admitir—.',
    'Radicaliza la función reductiva del análisis russelliano.',
    'pp. 103–117',['russell'],['H27'],['Ockham','construcción lógica','reducción'],
    {nextQuestion:'¿Qué ocurre con expresiones gramaticalmente correctas pero lógicamente mal tipadas?'}),

  n('H29','29','russell','Teoría de tipos',
    'Una oración puede estar bien formada gramaticalmente y mezclar niveles lógicos incompatibles.',
    '“La clase de los leones es un león” no es simplemente falsa: confunde una clase con uno de sus miembros.',
    'Introduce la idea de error categorial lógico.',
    'pp. 103–117',['russell'],['H28'],['tipos','categoría','paradoja'],
    {example:'Ejemplo tuyo: “Sócrates es sabio” frente a “La propiedad de ser sabio es sabia”.',
     nextQuestion:'¿Qué dejan preparado Moore y Russell para la etapa siguiente?'}),

  n('H30','30','synthesis','Resultado de la primera etapa',
    'Moore deja análisis conceptual; Russell, análisis lógico y reductivo.',
    'Ninguno comienza haciendo filosofía lingüística, pero ambos dejan herramientas que pueden ser transformadas por el Tractatus.',
    'Cierra la primera etapa y prepara el giro lingüístico.',
    'pp. 103–117',['moore','russell','tractatus'],['H19','H29'],['análisis conceptual','análisis lógico','transición'],
    {critical:true,nextQuestion:'¿Dónde sitúa Hacker el verdadero inicio del giro lingüístico?'}),

  n('H31','31','tractatus','Tesis histórica del giro lingüístico',
    'El giro lingüístico empieza, aunque no se completa, en el Tractatus.',
    'Hacker separa cuidadosamente nacimiento de filosofía analítica y giro lingüístico dentro de ella.',
    'Es probablemente la distinción histórica central de todo el ensayo.',
    'p. 117',['tractatus'],['H30'],['giro lingüístico','Tractatus','historia'],
    {quote:'«el giro lingüístico en la filosofía empezó, aunque no se completó, en el Tractatus» (p. 117).',
     critical:true,nextQuestion:'¿Por qué no atribuir el giro ya a Frege?'}),

  n('H32','32','debate','¿Por qué no Frege?',
    'El principio contextual no basta para identificar el giro lingüístico.',
    'Dummett y Kenny apelan a Frege, pero Hacker recuerda que Bentham ya había usado procedimientos parecidos.',
    'Obliga a buscar un cambio más profundo que una técnica contextual aislada.',
    'pp. 117–125',['tractatus'],['H31'],['Frege','Dummett','Kenny'],
    {nextQuestion:'¿Qué había anticipado Bentham?'}),

  n('H33','33','precursor','Bentham como precursor',
    'Ciertos términos deben entenderse por su papel en proposiciones completas y mediante paráfrasis.',
    'Bentham anticipa aspectos de Russell y del último Wittgenstein sin constituir por ello el fundador del movimiento analítico del siglo XX.',
    'Distingue precursor técnico de fundador histórico.',
    'pp. 117–125',['tractatus'],['H32'],['Bentham','contexto','paráfrasis'],
    {nextQuestion:'¿Qué teoría de representación formula el Tractatus?'}),

  n('H34','34','tractatus','Lenguaje y realidad en el Tractatus',
    'Proposiciones representan estados de cosas; nombres simples representan objetos simples.',
    'La representación es posible por una correspondencia estructural: lenguaje y realidad comparten forma lógica.',
    'Sustenta la investigación tractariana de los límites del sentido.',
    'pp. 117–125',['tractatus'],['H33'],['isomorfismo','forma lógica','realidad'],
    {critical:true,nextQuestion:'¿Cómo se relacionan pensamiento y proposición?'}),

  n('H35','35','tractatus','Pensamiento y proposición',
    'La oración perceptible expresa un pensamiento con forma representacional.',
    'Una oración adquiere sentido al proyectarse sobre una posible situación del mundo.',
    'Desplaza la pregunta filosófica hacia cómo un simbolismo puede representar realidad.',
    'pp. 117–125',['tractatus'],['H34'],['pensamiento','proposición','representación'],
    {nextQuestion:'¿Qué explica el Tractatus sobre la necesidad lógica?'}),

  n('H36','36','logic','Lógica como tautología',
    'Las proposiciones lógicas son necesarias pero no describen hechos.',
    'Una tautología no excluye ninguna posibilidad; su necesidad proviene de su estructura simbólica.',
    'Transforma la filosofía de la lógica heredada de Frege y Russell.',
    'pp. 117–125',['tractatus'],['H35'],['tautología','necesidad','lógica'],
    {critical:true,
     example:'Ejemplo tuyo: “Llueve o no llueve”. No informa qué tiempo hace; justamente por no excluir ninguna posibilidad puede ser necesariamente verdadera.',
     nextQuestion:'¿Qué ocurre entonces con axiomas y teoremas?'}),

  n('H37','37','logic','Axiomas y teoremas',
    'No hay una diferencia metafísica profunda entre axiomas y teoremas lógicos.',
    'Ambos son tautologías; los axiomas no poseen una autoevidencia epistemológica especial.',
    'Reordena la relación entre fundamentación lógica y necesidad.',
    'pp. 117–125',['tractatus'],['H36'],['axioma','teorema','tautología'],
    {nextQuestion:'¿Qué cambia en la propia concepción de filosofía?'}),

  n('H38','38','philosophy','Filosofía ≠ ciencia',
    'La filosofía no descubre hechos, formula hipótesis o construye teorías científicas.',
    'Su tarea es clarificar; contribuye al entendimiento y no a incrementar el inventario de conocimiento factual.',
    'Es una de las rupturas doctrinales más fuertes del Tractatus.',
    'p. 122',['tractatus','cambridge'],['H37'],['filosofía','ciencia','clarificación'],
    {quote:'«Su contribución no es al conocimiento humano, sino al entendimiento humano» (p. 122).',
     critical:true,nextQuestion:'¿Cómo realiza esa clarificación?'}),

  n('H39','39','philosophy','Filosofía como crítica del lenguaje',
    'Los problemas filosóficos pueden surgir de formas lingüísticas que ocultan estructura lógica.',
    'La filosofía elimina malentendidos, ambigüedades, errores categoriales y pseudoproposiciones.',
    'Define el programa tractariano de clarificación.',
    'p. 122',['tractatus','cambridge'],['H38'],['crítica del lenguaje','confusión','sentido'],
    {quote:'«Toda la filosofía es una crítica del lenguaje» (p. 122).',
     example:'Ejemplo tuyo: “¿En qué lugar del cerebro está localizada la existencia?” puede ser una pregunta conceptualmente mal formada antes que una cuestión empírica.',
     nextQuestion:'¿Equivale esto a eliminar toda metafísica como basura?'}),

  n('H40','40','tractatus','Metafísica: decir y mostrar',
    'Hacker atribuye al Tractatus una esfera de lo que no puede decirse pero puede mostrarse.',
    'Ética, estética, religión y metafísica no se reducen simplemente a “basura” positivista.',
    'Prepara una divergencia decisiva entre Wittgenstein y el Círculo de Viena.',
    'pp. 122–125',['tractatus','vienna'],['H39'],['decir','mostrar','metafísica'],
    {critical:true,nextQuestion:'¿En qué sentidos concretos se produce el giro lingüístico?'}),

  n('H41','41','tractatus','Seis sentidos del giro lingüístico',
    'Hacker agrupa seis transformaciones que justifican hablar de un verdadero giro.',
    'No es una sola tesis, sino un conjunto de desplazamientos en límites, método, metafísica, proposición, fenómenos y lógica.',
    'Nodo padre de seis operaciones que deben dominarse por separado.',
    'pp. 117–125',['tractatus'],['H40'],['giro lingüístico','seis sentidos','programa'],
    {critical:true,nextQuestion:'¿Cuáles son esos seis sentidos?'}),

  n('H42','42','critique','Hacker critica la metafísica del Tractatus',
    'Reconocer su importancia histórica no obliga a aceptar su metafísica del símbolo.',
    'Hacker cree erróneas varias tesis tractarianas, pero sostiene que cambiaron la trayectoria de la tradición.',
    'Distingue evaluación doctrinal de explicación histórica.',
    'p. 125',['tractatus'],['H41.6'],['Hacker','crítica','historia'],
    {quote:'El Tractatus dio a la filosofía analítica una orientación lingüística «que nunca había tenido» (p. 125).',
     nextQuestion:'¿Qué dos ramas inmediatas nacen de esa transformación?'}),

  n('H43','43','bridge','Herencia inmediata: Cambridge + Viena',
    'El impacto del Tractatus se bifurca en el análisis de Cambridge y el Círculo de Viena.',
    'En Gran Bretaña influye sobre Russell, Ramsey, Wisdom y Stebbing; en Viena alimenta un programa positivista radical.',
    'Abre la tercera gran etapa histórica del artículo.',
    'pp. 125–132',['cambridge','vienna'],['H42'],['Cambridge','Viena','entreguerras'],
    {critical:true,nextQuestion:'¿Qué conserva Cambridge del Tractatus?'}),

  n('H44','44','cambridge','Análisis de Cambridge',
    'La filosofía no añade conocimiento factual; aclara conocimiento ya poseído mediante análisis lógico.',
    'Conserva formas lógicas, análisis reductivo, construcciones lógicas, rechazo de metafísica y concepción tautológica de la lógica.',
    'Es una de las dos herencias inmediatas del giro lingüístico.',
    'p. 126',['cambridge'],['H43'],['Cambridge','análisis lógico','clarificación'],
    {quote:'La filosofía «no es añadir conocimientos humanos, sino dilucidar el conocimiento que ya tenemos» (p. 126).',
     nextQuestion:'¿Cómo radicaliza Viena esa herencia?'}),

  n('H45','45','vienna','Viena I · filosofía como análisis lógico',
    'La filosofía aclara conceptos, proposiciones y fundamentos de ciencias y matemáticas.',
    'Carnap reorienta la filosofía tradicional hacia la sintaxis lógica del lenguaje científico.',
    'Primer gran elemento del programa positivista.',
    'pp. 125–132',['vienna'],['H43'],['Carnap','sintaxis lógica','ciencia'],
    {nextQuestion:'¿Qué hace el positivismo con la metafísica?'}),

  n('H46','46','vienna','Viena II · eliminación de la metafísica',
    'Las afirmaciones metafísicas se clasifican como pseudoproposiciones carentes de contenido cognoscitivo.',
    'Viena interpreta a Wittgenstein de forma más militante de lo que Hacker considera legítimo.',
    'Segundo elemento y primer gran punto de malinterpretación.',
    'pp. 125–132',['vienna'],['H45','H40'],['metafísica','pseudoproposición','positivismo'],
    {critical:true,nextQuestion:'¿Qué criterio de significado acompaña esa política?'}),

  n('H47','47','vienna','Viena III · principio de verificación',
    'Una proposición cognitivamente significativa debe ser verificable.',
    'El significado se liga al método de verificación y se convierte en herramienta contra la metafísica.',
    'Tercer elemento del programa positivista.',
    'p. 128',['vienna'],['H46'],['verificación','significado','empirismo'],
    {quote:'«el significado de una proposición es su método de verificación» (p. 128).',
     example:'Ejemplo tuyo: “Existe una sustancia absolutamente indetectable...” obliga a preguntar qué experiencia contaría a favor o en contra.',
     critical:true,nextQuestion:'¿Cómo explica Viena las verdades necesarias sin abandonar el empirismo?'}),

  n('H48','48','vienna','Viena IV · empirismo y necesidad lógica',
    'Las tautologías permiten aceptar necesidad lógica sin tratarlas como hechos empíricos o sintéticos a priori.',
    'La lógica no describe la realidad, de modo que su necesidad parece compatible con empirismo radical.',
    'Cuarto elemento del programa.',
    'pp. 125–132',['vienna'],['H47','H36'],['empirismo','tautología','necesidad'],
    {nextQuestion:'¿Cómo transforma Viena esa explicación en convencionalismo?'}),

  n('H49','49','distinction','Convencionalismo ≠ lógica trascendental',
    'Viena tiende a explicar la lógica mediante convenciones; Hacker dice que eso no es la posición tractariana.',
    'Para el joven Wittgenstein, la lógica pertenece a las condiciones necesarias de representación, no a decisiones simbólicas arbitrarias.',
    'Segundo gran punto de malinterpretación del Tractatus por el positivismo.',
    'p. 130',['vienna','tractatus'],['H48'],['convencionalismo','trascendental','lógica'],
    {quote:'«La lógica, lejos de ser determinada por convenciones, es trascendental» (p. 130).',
     critical:true,nextQuestion:'¿Qué proyecto científico general añade el Círculo?'}),

  n('H50','50','vienna','Viena V · unidad de las ciencias',
    'El Círculo busca un lenguaje y método capaces de unificar física, psicología, sociología e historia.',
    'En versiones iniciales se combina con un programa reductivo hacia una base elemental de proposiciones sobre “lo dado”.',
    'Quinto gran elemento del positivismo lógico.',
    'pp. 125–132',['vienna'],['H49'],['unidad de la ciencia','reduccionismo','lo dado'],
    {nextQuestion:'¿Qué importancia histórica tuvo este programa incluso después de fracasar?'}),

  n('H51','51','history','Importancia histórica del positivismo',
    'El colapso posterior no disminuye su enorme influencia histórica.',
    'La emigración de integrantes del Círculo a Estados Unidos transforma profundamente la filosofía norteamericana de posguerra.',
    'Separa éxito histórico de viabilidad doctrinal.',
    'pp. 125–132',['vienna','after'],['H50'],['Estados Unidos','influencia','posguerra'],
    {nextQuestion:'¿Por qué colapsa el programa clásico?'}),

  n('H52','52','collapse','Ocho dificultades del positivismo',
    'Hacker reúne ocho problemas que erosionan el programa clásico.',
    'Fracasan reducciones, verificacionismo, convencionalismo, extensionalidad, unidad científica y una concepción demasiado estrecha de filosofía.',
    'Nodo padre del diagnóstico final del positivismo.',
    'pp. 130–132',['vienna'],['H51'],['colapso','ocho dificultades','positivismo'],
    {critical:true,nextQuestion:'¿Cuáles son las ocho dificultades?'}),

  n('H53','53','after','Del análisis reductivo al conectivo y terapéutico',
    'La filosofía británica posterior abandona la exigencia de reducir o traducir todo.',
    'El análisis conectivo aclara relaciones entre conceptos; el terapéutico diagnostica y disuelve confusiones.',
    'Cierra el artículo abriendo otra etapa histórica que Hacker deja fuera.',
    'p. 132',['after'],['H52.8'],['análisis conectivo','análisis terapéutico','Wittgenstein'],
    {quote:'«sus notables y variados logros, son otra historia» (p. 132).',critical:true}),
]

const turnNodes = [
  n('H41.1','40.1','subpoint','1 · Límites pensamiento/lenguaje',
    'Los límites del pensamiento se investigan mediante los límites del lenguaje.',
    'La distinción sentido/sinsentido se convierte en instrumento para determinar qué puede pensarse y decirse.',
    'Primer sentido del giro lingüístico.',
    'pp. 117–125',['tractatus'],['H41'],['límites','sentido','lenguaje']),
  n('H41.2','40.2','subpoint','2 · Programa lógico-lingüístico',
    'El programa positivo pasa al análisis lógico-lingüístico de proposiciones.',
    'El objeto de análisis deja de ser un concepto platónico aislado y se desplaza hacia proposiciones y simbolismo.',
    'Segundo sentido del giro lingüístico.',
    'pp. 117–125',['tractatus'],['H41.1'],['análisis lógico','proposición','simbolismo']),
  n('H41.3','40.3','subpoint','3 · Crítica lingüística de metafísica',
    'La metafísica se critica mostrando que ciertas aparentes afirmaciones atraviesan los límites del lenguaje significativo.',
    'La pregunta ya no es sólo si una tesis metafísica es falsa, sino si logra expresar una proposición con sentido.',
    'Tercer sentido del giro lingüístico.',
    'pp. 117–125',['tractatus'],['H41.2'],['metafísica','sentido','pseudoproposición']),
  n('H41.4','40.4','subpoint','4 · Signo y forma proposicional',
    'La investigación filosófica se concentra en la naturaleza del signo proposicional y de la forma proposicional.',
    'El simbolismo se vuelve objeto central para esclarecer representación y sentido.',
    'Cuarto sentido del giro lingüístico.',
    'pp. 117–125',['tractatus'],['H41.3'],['signo','forma proposicional','representación']),
  n('H41.5','40.5','subpoint','5 · Fenómenos vía descripciones',
    'La estructura lógica de fenómenos se investiga analizando las descripciones lingüísticas de esos fenómenos.',
    'El acceso filosófico a estructura ya pasa decisivamente por proposiciones que la representan.',
    'Quinto sentido del giro lingüístico.',
    'pp. 117–125',['tractatus'],['H41.4'],['fenómeno','descripción','forma lógica']),
  n('H41.6','40.6','subpoint','6 · Verdad lógica vía simbolismo',
    'La naturaleza de la verdad lógica se esclarece examinando el simbolismo.',
    'La tautologicidad y la estructura de signos explican la necesidad sin postular hechos lógicos.',
    'Sexto sentido y culminación del giro lingüístico tractariano.',
    'pp. 117–125',['tractatus'],['H41.5'],['verdad lógica','simbolismo','tautología'],
    {critical:true}),
]

const collapseNodes = [
  n('H52.1','51.1','failure','1 · Fracaso del reduccionismo',
    'No se logró reducir convincentemente amplios dominios a una base elemental.',
    'Además surge el conflicto entre fenomenismo y fisicalismo acerca de cuál debía ser esa base.',
    'Primera dificultad del positivismo.',
    'pp. 130–132',['vienna'],['H52'],['reduccionismo','fenomenismo','fisicalismo']),
  n('H52.2','51.2','failure','2 · Solipsismo / behaviorismo',
    'El programa reductivo empuja hacia alternativas metodológicas filosóficamente problemáticas.',
    'La reducción de experiencia y mente amenaza con desembocar en solipsismo metodológico o behaviorismo radical.',
    'Segunda dificultad.',
    'pp. 130–132',['vienna'],['H52.1'],['solipsismo','behaviorismo','reducción']),
  n('H52.3','51.3','failure','3 · Extensionalidad',
    'No todos los contextos significativos se dejan reducir a estructuras puramente extensionales.',
    'El proyecto lógico encuentra contextos intensionales y relaciones de significado resistentes.',
    'Tercera dificultad.',
    'pp. 130–132',['vienna'],['H52.2'],['extensionalidad','intensionalidad','lógica']),
  n('H52.4','51.4','failure','4 · Verificación',
    'El principio y el criterio de verificabilidad generan dificultades internas.',
    'No se consigue formular el verificacionismo sin excluir demasiado, incluir demasiado o volverse problemático respecto de sí mismo.',
    'Cuarta dificultad.',
    'pp. 130–132',['vienna'],['H52.3','H47'],['verificación','significado','criterio']),
  n('H52.5','51.5','failure','5 · Convencionalismo',
    'Una explicación puramente convencional de la necesidad lógica resulta insuficiente.',
    'Las convenciones por sí solas no explican satisfactoriamente la fuerza necesaria de la lógica.',
    'Quinta dificultad.',
    'pp. 130–132',['vienna'],['H52.4','H49'],['convención','necesidad','lógica']),
  n('H52.6','51.6','failure','6 · Lógica clásica insuficiente',
    'El cálculo lógico no reproduce exhaustivamente las inferencias legítimas del lenguaje ordinario.',
    'Relaciones conceptuales pueden autorizar inferencias que no se explican sólo por conectivas formales.',
    'Sexta dificultad.',
    'p. 131',['vienna'],['H52.5'],['inferencia','lógica clásica','conceptos'],
    {quote:'Los patrones de inferencia del cálculo «no agotan las formas lícitas de inferencia que utilizamos» (p. 131).',
     example:'Ejemplo tuyo: de “La camiseta es roja” inferimos normalmente “La camiseta no es verde completamente”; la inferencia usa relaciones conceptuales entre colores.',
     critical:true}),
  n('H52.7','51.7','failure','7 · Unidad de las ciencias',
    'El monismo metodológico y la pretensión de una única ciencia comienzan a ser cuestionados.',
    'La hermenéutica y el Wittgenstein tardío erosionan la idea de una única forma correcta de descripción científica.',
    'Séptima dificultad.',
    'pp. 130–132',['vienna','after'],['H52.6','H50'],['unidad de la ciencia','hermenéutica','pluralidad']),
  n('H52.8','51.8','failure','8 · Filosofía demasiado estrecha',
    'Reducir filosofía al análisis lógico del lenguaje científico excluye vastas regiones filosóficas.',
    'Ética, derecho, política y estética quedan mal tratadas; el emotivismo ético muestra los límites de la concepción.',
    'Octava dificultad y salida hacia nuevas formas de análisis.',
    'pp. 130–132',['vienna','after'],['H52.7'],['ética','política','estética'],
    {critical:true}),
]


const class14Notes = {
  H04: {
    label: 'DEFINICIÓN DEMASIADO UNIFORME',
    note:
      'El profesor Nava retoma que “filosofía del pensamiento” o “filosofía del lenguaje” son fórmulas demasiado simples: si Frege y los dos Wittgenstein pertenecen a la tradición y discrepan profundamente sobre pensamiento y lenguaje, un solo rasgo borra diferencias internas.',
  },
  H05: {
    label: 'PENSAMIENTO OBJETIVO',
    note:
      'En clase se subraya que el pensamiento fregeano no es una oración concreta ni un estado mental privado: no es físico, no es meramente psicológico y puede ser compartido y evaluado objetivamente.',
  },
  H07: {
    label: 'DEL PENSAMIENTO A LA PROPOSICIÓN',
    note:
      'Nava contrasta a Frege con el primer Wittgenstein: ya no basta con decir pensamiento → lenguaje; el problema pasa a ser cómo una proposición significativa representa un posible estado de cosas.',
  },
  H09: {
    label: 'SIGNIFICADO = USO',
    note:
      'La clase presenta el giro del segundo Wittgenstein: se abandona la búsqueda de una única estructura lógica universal y el lenguaje se estudia dentro de juegos de lenguaje, prácticas, comunidades y formas de vida.',
  },
  H12: {
    label: 'TRADICIÓN HETEROGÉNEA',
    note:
      'El profesor insiste en que pertenecer a una tradición no implica compartir una doctrina única. Frege, Wittgenstein I y Wittgenstein II no pueden “cortarse con la misma tijera”.',
  },
  H31: {
    label: 'GIRO LINGÜÍSTICO COMO MEDIACIÓN',
    note:
      'En la exposición de clase el giro lingüístico aparece como una nueva mediación: sujeto ↔ lenguaje ↔ mundo. El lenguaje se vuelve vía filosófica de acceso al pensamiento y a la representación.',
  },
  H34: {
    label: 'ISOMORFISMO Y ESPEJO LÓGICO',
    note:
      'Nava explica que lenguaje y mundo pueden corresponder porque comparten forma lógica. La proposición no copia materialmente el hecho; lo representa estructuralmente. La metáfora usada en clase es la de un “espejo lógico del mundo”.',
  },
  H35: {
    label: 'REPRESENTAR = PRESENTAR SIMBÓLICAMENTE',
    note:
      'La clase formula la representación como volver a presentar simbólicamente un posible hecho. Comprender el simbolismo permite preguntar bajo qué condiciones una proposición representa.',
  },
  H38: {
    label: 'FILOSOFÍA COMO ACTIVIDAD',
    note:
      'El profesor contrapone ciencia y filosofía: la ciencia formula proposiciones sobre hechos; la filosofía no agrega hechos, sino que clarifica y disuelve confusiones.',
  },
  H39: {
    label: 'LÍMITES DEL SIMBOLISMO',
    note:
      'En clase se liga proposición significativa → representación → estado de cosas posible → mundo. Rebasar esas condiciones conduce al sinsentido en el sentido técnico del Tractatus.',
  },
  H40: {
    label: 'DECIR ≠ MOSTRAR',
    note:
      'Nava destaca la tensión tractariana entre aquello que puede decirse mediante proposiciones descriptivas y aquello que sólo puede mostrarse; la clase lo conecta con ética, estética, metafísica y religión.',
  },
  H53: {
    label: 'DEL ESPEJO AL USO',
    note:
      'La clase presenta la transición del primer al segundo Wittgenstein como paso de una estructura lógica universal a usos, prácticas y formas de vida. Es la apertura hacia formas posteriores de análisis.',
  },
}

const class14Nodes = [
  n(
    'HC1',
    'C1',
    'classpoint',
    'Telepatía y prioridad del pensamiento',
    'El experimento mental de la telepatía hace visible por qué, para Frege, el pensamiento puede tener prioridad respecto de su expresión lingüística.',
    'Si pudiéramos transmitir pensamientos directamente de una mente a otra, el lenguaje parecería un vehículo contingente. La idea sirve para separar contenido objetivo y forma lingüística concreta.',
    'Aporte de la octava clase para entender la relación Frege → pensamiento objetivo → lenguaje secundario.',
    'Octava clase · 14 sep 2026',
    ['identity', 'class14'],
    ['H05'],
    ['Frege', 'telepatía', 'pensamiento', 'lenguaje'],
    {
      critical: true,
      nextQuestion: '¿Qué cambia cuando el lenguaje deja de ser sólo vehículo y se convierte en mediación filosófica?',
    },
  ),
  n(
    'HC2',
    'C2',
    'classpoint',
    'Sujeto ↔ lenguaje ↔ mundo',
    'El giro lingüístico introduce una mediación nueva entre el sujeto y la realidad.',
    'La clase contrasta un modelo clásico sujeto ↔ mundo con otro en el que el lenguaje ocupa una posición mediadora: sujeto ↔ lenguaje ↔ mundo.',
    'Hace explícita una estructura pedagógica usada por Nava que no aparece como nodo independiente en la sistematización de Hacker.',
    'Octava clase · 14 sep 2026',
    ['tractatus', 'class14'],
    ['H31'],
    ['sujeto', 'lenguaje', 'mundo', 'mediación'],
    {
      critical: true,
      nextQuestion: '¿Cómo puede el lenguaje mediar sin quedar desconectado de la realidad?',
    },
  ),
  n(
    'HC3',
    'C3',
    'classpoint',
    'Analogía aristotélica de la forma compartida',
    'El profesor compara el isomorfismo tractariano con un motivo aristotélico: conocer es posible porque lo cognoscente y lo conocido pueden corresponder en forma.',
    'La analogía no identifica a Wittgenstein con Aristóteles; sirve como puente pedagógico para entender que una representación no necesita ser una copia material si comparte una estructura con lo representado.',
    'Aporte comparativo del profesor Nava para volver intuitivo el isomorfismo lógico.',
    'Octava clase · 14 sep 2026',
    ['tractatus', 'class14'],
    ['H34'],
    ['Aristóteles', 'forma', 'isomorfismo', 'conocimiento'],
    {
      nextQuestion: '¿Puede explicarse esa correspondencia sin postular un tercer reino ideal?',
    },
  ),
  n(
    'HC4',
    'C4',
    'classpoint',
    'Wittgenstein I sin tercer reino',
    'La explicación se concentra en lenguaje ↔ mundo y evita introducir un tercer ámbito ideal como mediador.',
    'La clase presenta el mundo material, el mundo mental y la solución platónica de un tercer reino —Frege y cierto Russell temprano— para mostrar qué intenta evitar el primer Wittgenstein mediante forma lógica compartida.',
    'Aclara por contraste la función del isomorfismo lógico y la distancia respecto del platonismo fregeano.',
    'Octava clase · 14 sep 2026',
    ['tractatus', 'class14'],
    ['H34', 'HC3'],
    ['tercer reino', 'Frege', 'Russell temprano', 'Wittgenstein'],
    {
      critical: true,
      nextQuestion: '¿Qué puede decir ese simbolismo y dónde encuentra sus límites?',
    },
  ),
  n(
    'HC5',
    'C5',
    'classpoint',
    'Apertura: filosofía y psicología',
    'La sesión termina preguntando si investigar el pensar puede agotarse en un análisis abstracto del lenguaje.',
    'La grabación de la octava clase se corta justo cuando comienza a desarrollarse la referencia a filosofía de la psicología. El punto debe conservarse como problema abierto, no como tesis cerrada.',
    'Registra una apertura de la clase que no pertenece todavía al argumento desarrollado por Hacker.',
    'Octava clase · 14 sep 2026',
    ['after', 'class14'],
    ['H09'],
    ['pensar', 'psicología', 'lenguaje', 'problema abierto'],
    {
      critical: true,
    },
  ),
]

class14Nodes.forEach((node) => {
  node.data.classSeen = true
  node.data.classOnly = true
  node.data.classLabel = 'APORTE DE LA OCTAVA CLASE'
  node.data.classNote = node.data.explanation
})

Object.entries(class14Notes).forEach(([id, info]) => {
  const node = [...mainNodes, ...turnNodes, ...collapseNodes].find((item) => item.id === id)
  if (!node) return

  node.data.classSeen = true
  node.data.classOnly = false
  node.data.classLabel = info.label
  node.data.classNote = info.note

  if (!node.data.branch.includes('class14')) {
    node.data.branch.push('class14')
  }
})


const class21Notes = {
  H13: ['DOBLE ORIGEN, NO SÓLO LOGICISMO',
    'Nava subraya que reducir el origen de la filosofía analítica al logicismo es insuficiente. Moore y Russell comparten una preocupación por análisis conceptual, semántico y lógico, pero no son logicistas en el mismo sentido.'],
  H14: ['IDEALISMO BRITÁNICO COMO ADVERSARIO',
    'La clase desarrolla el contexto histórico: mientras el hegelianismo perdía fuerza en Alemania y aparecía el neokantismo, el idealismo absoluto seguía dominando buena parte de las universidades británicas.'],
  H15: ['REALISMO, PLURALISMO Y OBJETO INDEPENDIENTE',
    'Nava explica el giro antiidealista mediante sujeto–objeto–representación. Moore insiste en que conocer algo y aquello que es conocido no son idénticos; conservar el objeto rompe con el monismo idealista.'],
  H16: ['TRES SENTIDOS DE ANÁLISIS',
    'La clase sistematiza tres usos mooreanos: análisis descomposicional, inspección del concepto o sus componentes y análisis relacional. El ejemplo del caballo distingue descomponer un concepto de estudiar sus conexiones.'],
  H17: ['COMPRENDER NO ES ANALIZAR',
    'Saber usar una expresión y captar su significado ordinario no equivale a conocer filosóficamente su análisis. Podemos entender “caballo” o “bonito” sin agotar sus componentes o relaciones.'],
  H18: ['TENSIÓN ENTRE TEORÍA Y PRÁCTICA',
    'Aunque Moore concibe el concepto como independiente del lenguaje, en la práctica compara expresiones y usos. Nava marca esta tensión como el camino hacia el análisis conectivo posterior.'],
  H19: ['FILOSOFÍA COMO DESCRIPCIÓN DEL UNIVERSO',
    'Moore no reduce la filosofía a aclaración lingüística. La clase recupera su proyecto de describir las clases fundamentales de cosas y sus relaciones, apoyándose en creencias de sentido común.'],
  H09: ['DESCRIBIR EL MUNDO ≠ USAR EL LENGUAJE',
    'Nava contrasta la función descriptiva privilegiada por los primeros analíticos con el segundo Wittgenstein: el lenguaje también sirve para mentir, imaginar, narrar sueños y participar en prácticas comunicativas.'],
  H34: ['MOORE FRENTE AL ESPEJO TRACTARIANO',
    'La clase compara dos ontologías de la proposición: en el primer Wittgenstein la proposición figura o representa la realidad; en el Moore platonista una proposición verdadera forma parte de la realidad.'],
  H53: ['DEL ANÁLISIS DESCOMPOSICIONAL AL CONECTIVO',
    'Tras abandonar el platonismo fuerte de Moore, el análisis persiste como estudio de implicaciones, exclusiones, presuposiciones, compatibilidades e incompatibilidades.'],
}

const class21Nodes = [
  n('HC21-01','9.1','classpoint','Platonismo como estrategia antiidealista',
    'Moore y el primer Russell recurren a un platonismo fuerte para afirmar objetividad e independencia frente al idealismo.',
    'La clase presenta esta solución como sui generis: parecía más intuitivo volver al empirismo, pero el platonismo permite afirmar objetos independientes del sujeto aunque sean ideales.',
    'Aporte de Nava para explicar el arranque antiidealista de Moore.',
    'Novena clase · 21 sep 2026',['moore','class21'],['H14','H15'],
    ['platonismo','antiidealismo','objetivismo','pluralismo'],{critical:true}),

  n('HC21-02','9.2','classpoint','La proposición forma parte de la realidad',
    'En el Moore platonista, una proposición verdadera pertenece a la realidad ideal.',
    'Los conceptos existen independientemente de la mente y se combinan en proposiciones. Esto contrasta con el primer Wittgenstein, donde la proposición figura un estado de cosas.',
    'Diferencia ontológica explicitada por Nava entre Moore y el Tractatus.',
    'Novena clase · 21 sep 2026',['moore','class21'],['HC21-01','H15'],
    ['proposición','realidad','conceptos','Wittgenstein'],{critical:true}),

  n('HC21-03','9.3','classpoint','Verdad absoluta frente a coherencia',
    'Para este Moore, una proposición es verdadera o falsa en sentido absoluto.',
    'Nava contrasta esta posición con teorías coherentistas: pertenecer coherentemente a un sistema no constituye por sí mismo la verdad de la proposición.',
    'Aporte de clase sobre el realismo proposicional temprano de Moore.',
    'Novena clase · 21 sep 2026',['moore','class21'],['HC21-02'],
    ['verdad','coherencia','proposición','absoluto']),

  n('HC21-04','9.4','classpoint','Sujeto, objeto y representación',
    'Toda relación cognoscitiva exige al menos un sujeto y algo conocido.',
    'La clase organiza el problema mediante sujeto–objeto–representación y presenta el objetivismo de Moore como respuesta al idealismo subjetivista y al monismo absoluto.',
    'Esquema pedagógico de Nava para explicar The Refutation of Idealism.',
    'Novena clase · 21 sep 2026',['moore','class21'],['H15'],
    ['sujeto','objeto','representación','conocimiento'],{critical:true}),

  n('HC21-05','9.5','classpoint','Describir el mundo o comunicarnos',
    'La clase distingue representar el mundo de participar en prácticas de comunicación.',
    'Con el segundo Wittgenstein, describir pasa a ser sólo una práctica entre otras: también mentimos, narramos sueños, imaginamos y actuamos lingüísticamente.',
    'Puente entre Moore, primer Wittgenstein y filosofía del lenguaje ordinario.',
    'Novena clase · 21 sep 2026',['moore','after','class21'],['H18','H09'],
    ['descripción','comunicación','uso','lenguaje ordinario'],{critical:true}),

  n('HC21-06','9.6','classpoint','Universales lingüísticos y estructura profunda',
    'La clase pregunta si las lenguas comparten estructuras profundas pese a sus diferencias superficiales.',
    'Nava introduce a Chomsky como ejemplo de una respuesta afirmativa y señala que esta tesis también ha recibido críticas desde enfoques centrados en uso y práctica.',
    'Aporte del profesor que conecta filosofía analítica con lingüística.',
    'Novena clase · 21 sep 2026',['after','class21'],['HC21-05'],
    ['Chomsky','estructura profunda','universales','a priori']),

  n('HC21-07','9.7','classpoint','Quine y “gavagai”: referencia indeterminada',
    'Que una comunidad diga “gavagai” cuando aparece un conejo no fija con certeza que signifique exactamente “conejo”.',
    'Podría significar conejo, parte de conejo, una pata, una fase temporal o algo como “ahí pasa comida”.',
    'Ejemplo de Nava sobre traducción y referencia.',
    'Novena clase · 21 sep 2026',['after','class21'],['HC21-06'],
    ['Quine','gavagai','referencia','traducción'],{critical:true}),

  n('HC21-08','9.8','classpoint','No tener una palabra “yo” no elimina el concepto de yo',
    'Una lengua puede no usar un equivalente directo a “yo” sin que eso demuestre ausencia de la capacidad cognitiva correspondiente.',
    'Nava separa estructura lingüística y capacidad psicológica o conceptual.',
    'Problema abierto sobre lenguaje y cognición.',
    'Novena clase · 21 sep 2026',['after','class21'],['HC21-07'],
    ['yo','cognición','lenguaje','psicología']),

  n('HC21-09','9.9','classpoint','Análisis contra síntesis',
    'Adoptar “análisis” es también una declaración metodológica contra el idealismo.',
    'Frente a la síntesis idealista, Moore enfatiza partes, componentes y relaciones distinguibles.',
    'Aporte histórico-metodológico de Nava.',
    'Novena clase · 21 sep 2026',['moore','class21'],['H16','H14'],
    ['análisis','síntesis','idealismo','método'],{critical:true}),

  n('HC21-10','9.10','classpoint','Analysandum y analysans',
    'El analysandum es aquello que se quiere analizar; el analysans es aquello mediante lo cual se lo explica.',
    'La analogía con definiendum y definiens permite diagnosticar cuándo un análisis introduce aquello mismo que pretendía explicar.',
    'Herramienta conceptual de la novena clase.',
    'Novena clase · 21 sep 2026',['moore','class21'],['HC21-09','H16'],
    ['analysandum','analysans','definiendum','definiens']),

  n('HC21-11','9.11','classpoint','Circularidad e inanalizables',
    'Si el analysandum reaparece indispensablemente dentro del analysans, el análisis se vuelve circular.',
    'Moore puede caer en circularidad o declarar un concepto simple e inanalizable. “Bueno” en Principia Ethica funciona como ejemplo.',
    'Límite interno del análisis descomposicional.',
    'Novena clase · 21 sep 2026',['moore','class21'],['HC21-10'],
    ['circularidad','inanalizable','bueno','Principia Ethica'],{critical:true}),

  n('HC21-12','9.12','classpoint','Paráfrasis y problema de equivalencia',
    'Reformular una expresión puede revelar estructura, pero toda paráfrasis incorpora interpretación.',
    'No basta sustituir una oración por otra: hay que justificar por qué la nueva formulación conserva lo relevante de la original.',
    'Puente de Moore hacia Russell.',
    'Novena clase · 21 sep 2026',['moore','russell','class21'],['HC21-11','H18'],
    ['paráfrasis','equivalencia','interpretación','Russell'],{critical:true}),

  n('HC21-13','9.13','classpoint','Sentido común y “prueba de las manos”',
    'Moore intenta defender el mundo exterior desde certezas ordinarias: “aquí hay una mano”, “aquí hay otra mano”.',
    'Nava señala su debilidad frente al escéptico: percibir dos manos no demuestra todavía que existan independientemente de la conciencia.',
    'Evaluación crítica de la estrategia de sentido común.',
    'Novena clase · 21 sep 2026',['moore','class21'],['H19','HC21-04'],
    ['sentido común','mundo exterior','manos','escepticismo'],{critical:true}),

  n('HC21-14','9.14','classpoint','Descartes y la queja escéptica',
    'Del cogito no se sigue automáticamente un mundo externo independiente de la conciencia.',
    'La cuestión escéptica no es si tengo experiencias, sino cómo demuestro que existe algo distinto de mi conciencia.',
    'Profundización de Nava del problema que Moore intenta resolver.',
    'Novena clase · 21 sep 2026',['moore','class21'],['HC21-13'],
    ['Descartes','cogito','mundo exterior','escepticismo']),

  n('HC21-15','9.15','classpoint','Kant: una respuesta condicional al mundo exterior',
    'Si espacio y tiempo organizan un material recibido, nuestras percepciones sugerirían que algo afecta a la mente.',
    'Nava aclara el límite: este argumento sólo funciona si se acepta previamente el aparato trascendental kantiano.',
    'Cierre comparativo sobre el problema del mundo exterior.',
    'Novena clase · 21 sep 2026',['moore','class21'],['HC21-14'],
    ['Kant','espacio','tiempo','a priori','mundo exterior'],{critical:true}),
]

class21Nodes.forEach((node) => {
  node.data.classSeen = true
  node.data.classOnly = true
  node.data.classLabel = 'APORTE DE LA NOVENA CLASE'
  node.data.classNote = node.data.explanation
  node.data.classHeader = 'PROF. ALONSO NAVA · NOVENA CLASE · 21 SEP 2026'
  node.data.classRoute = '/semestre/5/filosofia-analitica/clase/21-septiembre'
  node.data.classLinkLabel = 'Abrir novena clase ↗'
})

Object.entries(class21Notes).forEach(([id, [label, note]]) => {
  const node = [
    ...mainNodes,
    ...turnNodes,
    ...collapseNodes,
    ...class14Nodes,
  ].find((item) => item.id === id)

  if (!node) return

  const alreadySeen = Boolean(node.data.classSeen)
  const previous = node.data.classNote

  node.data.classSeen = true
  node.data.classOnly = false
  node.data.classLabel = alreadySeen
    ? 'VISTO EN CLASE · 14 Y 21 SEP'
    : label
  node.data.classNote = alreadySeen && previous
    ? `${previous}\n\nNOVENA CLASE · 21 SEP: ${note}`
    : note
  node.data.classHeader = alreadySeen
    ? 'PROF. ALONSO NAVA · OCTAVA + NOVENA CLASE'
    : 'PROF. ALONSO NAVA · NOVENA CLASE · 21 SEP 2026'
  node.data.classRoute = '/semestre/5/filosofia-analitica/clase/21-septiembre'
  node.data.classLinkLabel = alreadySeen
    ? 'Abrir clase del 21 sep ↗'
    : 'Abrir novena clase ↗'

  if (!node.data.branch.includes('class21')) {
    node.data.branch.push('class21')
  }
})

export const hackerNodes = [
  ...mainNodes,
  ...turnNodes,
  ...collapseNodes,
  ...class14Nodes,
  ...class21Nodes,
]

const hackerArticleSource = {
  "H00": {
    "articlePage": "pp. 101–103",
    "articleDetail": "Hacker no busca una propiedad esencial común a todos los analíticos. Su unidad es histórica: distintas prácticas de análisis se transforman, se superponen y se retroalimentan.",
    "articlePassages": [
      {
        "page": "pp. 101–103",
        "speaker": "Peter M. S. Hacker",
        "text": "Ésta denota un fenómeno histórico, un distintivo movimiento, en el pensamiento del siglo XX. Como todo movimiento histórico, experimentó un profundo cambio y desarrollo."
      }
    ]
  },
  "H01": {
    "articlePage": "p. 95",
    "articleDetail": "La centralidad del lenguaje no aparece sola: el otro gran acontecimiento es la nueva lógica formal. Hacker presenta el siglo XX mediante la relación problemática entre cálculo lógico, lenguaje y pensamiento.",
    "articlePassages": [
      {
        "page": "p. 95",
        "speaker": "Peter M. S. Hacker",
        "text": "del siglo XX puede decirse que ha sido la época del lenguaje y de la lógica."
      }
    ]
  },
  "H02": {
    "articlePage": "pp. 95–96",
    "articleDetail": "Wittgenstein funciona como bisagra porque interviene en tres desplazamientos: Cambridge, Viena y la filosofía británica de posguerra. Eso no equivale a convertirlo en fundador de la primera filosofía analítica.",
    "articlePassages": [
      {
        "page": "pp. 95–96",
        "speaker": "Peter M. S. Hacker",
        "text": "Muchos personajes jugaron un rol en su desarrollo, pero ninguno tan grande como Ludwig Wittgenstein."
      }
    ]
  },
  "H03": {
    "articlePage": "p. 96",
    "articleDetail": "Hacker usa Austin/Aristóteles, Ryle/Aquino y Strawson/Kant para mostrar que un sentido demasiado amplio de 'analítico' deja de distinguir históricamente al movimiento del siglo XX.",
    "articlePassages": [
      {
        "page": "p. 96",
        "speaker": "Peter M. S. Hacker",
        "text": "Si el término de «filosofía analítica» está para ser un útil término clasificatorio, tiene que hacer más trabajo."
      }
    ]
  },
  "H04": {
    "articlePage": "pp. 100–101",
    "articleDetail": "La objeción no es sólo que Dummett sea históricamente estrecho: su criterio excluiría figuras paradigmáticas que precisamente necesitamos poder explicar como partes del movimiento.",
    "articlePassages": [
      {
        "page": "pp. 100–101",
        "speaker": "Peter M. S. Hacker",
        "text": "Cualquier caracterización de la «filosofía analítica» que excluya a Moore, Russell y al último Wittgenstein [...] seguramente tiene que ser rechazada."
      }
    ]
  },
  "H05": {
    "articlePage": "p. 97",
    "articleDetail": "Hacker desarma la palabra 'pensamiento' antes de evaluar la definición de Dummett: Gedanke y acto de pensar remiten a campos filosóficos diferentes.",
    "articlePassages": [
      {
        "page": "p. 97",
        "speaker": "Peter M. S. Hacker",
        "text": "Si aquí el «pensamiento» quiere decir lo que Frege entendió por «Gedanke», entonces [...] difícilmente es toda la filosofía."
      }
    ]
  },
  "H06": {
    "articlePage": "p. 98",
    "articleDetail": "La posición de Frege es casi inversa a una prioridad metodológica del lenguaje ordinario: el lenguaje puede adherir accidentes al pensamiento y la tarea filosófica consiste en liberarlo de ellos.",
    "articlePassages": [
      {
        "page": "p. 98",
        "speaker": "Hacker cita a Frege",
        "text": "Los lenguajes no están hechos para mandar a la lógica."
      }
    ]
  },
  "H07": {
    "articlePage": "pp. 98–99",
    "articleDetail": "En el Tractatus, estudiar lenguaje sirve para determinar los límites de lo representable y pensable. El objeto no es una palabra particular, sino la esencia de cualquier simbolismo posible.",
    "articlePassages": [
      {
        "page": "pp. 98–99",
        "speaker": "Peter M. S. Hacker",
        "text": "una investigación de la esencia de cualquier lenguaje posible quizá revele los límites de lo que puede ser dicho, y por lo tanto, los límites de lo que puede ser pensado."
      }
    ]
  },
  "H08": {
    "articlePage": "p. 98",
    "articleDetail": "La ruptura con Frege está en la ontología del pensamiento: Frege lo sitúa en un tercer reino; Wittgenstein entiende proposición y pensamiento desde la representación lingüística.",
    "articlePassages": [
      {
        "page": "p. 98",
        "speaker": "Peter M. S. Hacker",
        "text": "Acorde a Frege, un pensamiento es una entidad abstracta [...] mientras que Wittgenstein concibió a la proposición como una entidad lingüística."
      }
    ]
  },
  "H09": {
    "articlePage": "p. 100",
    "articleDetail": "El último Wittgenstein abandona la jerarquía filosófica: ningún dominio funciona como fundamento universal del resto. Esto destruye la lectura de toda la tradición a partir de una sola prioridad lingüística.",
    "articlePassages": [
      {
        "page": "p. 100",
        "speaker": "Peter M. S. Hacker",
        "text": "Ninguna parte de la filosofía, en su opinión, es fundamentalmente relativa al resto. La filosofía es «llana»."
      }
    ]
  },
  "H10": {
    "articlePage": "p. 101",
    "articleDetail": "Hacker recupera un sentido literal de análisis y lo compara con ciencias que revelan constitución interna. La analogía le permite rastrear continuidades sin confundirlas con identidad histórica.",
    "articlePassages": [
      {
        "page": "p. 101",
        "speaker": "Peter M. S. Hacker",
        "text": "El término «analítico» lo voy a tomar [...] como la descomposición de algo en sus componentes."
      }
    ]
  },
  "H11": {
    "articlePage": "pp. 101–102",
    "articleDetail": "El empirismo clásico ya analizaba, pero lo hacía psicológicamente. La novedad del siglo XX es cambiar impresiones e ideas mentales por fenómenos, conceptos o estructuras tratados objetivamente.",
    "articlePassages": [
      {
        "page": "pp. 101–102",
        "speaker": "Peter M. S. Hacker",
        "text": "la filosofía analítica del siglo XX se distingue en sus orígenes por su orientación no-psicológica."
      }
    ]
  },
  "H12": {
    "articlePage": "pp. 101–102",
    "articleDetail": "La imagen clave es la de varios hilos históricos: algunos conectan etapas contiguas, pero ninguno atraviesa intacto toda la tradición.",
    "articlePassages": [
      {
        "page": "pp. 101–102",
        "speaker": "Peter M. S. Hacker",
        "text": "Mejor dicho, tiene que ser entendido dinámicamente. Una variedad de hilos conectan el pensamiento de las primeras etapas del movimiento con sus fases subsecuentes."
      }
    ]
  },
  "H13": {
    "articlePage": "p. 102",
    "articleDetail": "Hacker da una formulación explícita de la doble raíz: Russell aporta la lógica como herramienta de análisis objetivo; Moore, el análisis de conceptos independientes de la mente.",
    "articlePassages": [
      {
        "page": "p. 102",
        "speaker": "Peter M. S. Hacker",
        "text": "Una raíz (la russelliana) [...] «filosofía lógica-analítica» [...] Otra raíz (la mooreana) [...] «análisis conceptual»."
      }
    ]
  },
  "H14": {
    "articlePage": "pp. 103–104",
    "articleDetail": "El contexto inmediato no es un empirismo vigoroso, sino un idealismo absoluto dominante. Moore y Russell abren una revuelta que reorganiza el paisaje británico.",
    "articlePassages": [
      {
        "page": "pp. 103–104",
        "speaker": "Peter M. S. Hacker",
        "text": "La filosofía analítica del siglo XX tiene su doble raíz en el Cambridge de principios del siglo, con el trabajo de George Edward Moore y de Bertrand Russell."
      }
    ]
  },
  "H15": {
    "articlePage": "pp. 104–105",
    "articleDetail": "Moore separa acto cognitivo y objeto conocido: conocer no constituye aquello conocido. Esto sostiene su realismo y su rechazo del idealismo.",
    "articlePassages": [
      {
        "page": "pp. 104–105",
        "speaker": "Peter M. S. Hacker",
        "text": "los objetos del conocimiento [...] existen independientemente de si son conocidas."
      }
    ]
  },
  "H16": {
    "articlePage": "p. 106",
    "articleDetail": "El propio texto distingue tres sentidos de análisis en Moore: componentes constitutivos, inspección de lo presentado a la mente y relaciones/diferencias entre conceptos.",
    "articlePassages": [
      {
        "page": "p. 106",
        "speaker": "Peter M. S. Hacker",
        "text": "El análisis del significado de «X» [...] se ha delimitado como: (i) la especificación de los conceptos constitutivos [...] (ii) [...] lo que uno observa [...] (iii) [...] cómo un concepto dado está relacionado con [...] otros conceptos."
      }
    ]
  },
  "H17": {
    "articlePage": "p. 106",
    "articleDetail": "Saber usar o definir verbalmente una expresión no equivale a poder explicitar la estructura del concepto expresado.",
    "articlePassages": [
      {
        "page": "p. 106",
        "speaker": "Peter M. S. Hacker",
        "text": "Uno tal vez sepa el significado de una expresión, pero desconoce el análisis del concepto en el cual se encuentra."
      }
    ]
  },
  "H18": {
    "articlePage": "pp. 107–108",
    "articleDetail": "La práctica de Moore empuja históricamente hacia otra cosa: comparar usos, implicaciones, exclusiones y presuposiciones. De ahí la posibilidad posterior de un análisis conectivo.",
    "articlePassages": [
      {
        "page": "pp. 107–108",
        "speaker": "Peter M. S. Hacker",
        "text": "el «análisis conceptual» [...] ascendió [...] a dar una descripción [...] del uso de una expresión lingüística, y de sus reglas de conexiones con otras expresiones."
      }
    ]
  },
  "H19": {
    "articlePage": "p. 108",
    "articleDetail": "Moore concibe una tarea ontológica de gran escala: inventariar los tipos fundamentales de cosas y sus relaciones, no convertir el lenguaje en fundamento de toda filosofía.",
    "articlePassages": [
      {
        "page": "p. 108",
        "speaker": "Hacker cita a Moore",
        "text": "el primer y más importante problema de la filosofía es: ofrecer una descripción general de todo el Universo."
      }
    ]
  },
  "H20": {
    "articlePage": "p. 110",
    "articleDetail": "El ejemplo 'A es más largo que B' muestra por qué una relación asimétrica no desaparece cuando intentamos traducirla a propiedades separadas: la relación reaparece entre las magnitudes.",
    "articlePassages": [
      {
        "page": "p. 110",
        "speaker": "Peter M. S. Hacker",
        "text": "La proposición «A es más largo que B» no es reducible a «Hay ciertas magnitudes x y y, en donde A es x y B es y» sin la adición de «y x es más largo que y»."
      }
    ]
  },
  "H21": {
    "articlePage": "p. 111",
    "articleDetail": "Weierstrass, Dedekind y Cantor enseñan a Russell que definiciones rigurosas pueden expulsar compromisos metafísicos innecesarios de las matemáticas.",
    "articlePassages": [
      {
        "page": "p. 111",
        "speaker": "Hacker cita a Russell",
        "text": "sólo al analizar, el progreso es posible."
      }
    ]
  },
  "H22": {
    "articlePage": "p. 112",
    "articleDetail": "El primer Russell piensa el análisis como descomposición de una complejidad que es real y objetiva, aunque sea accesible conceptualmente.",
    "articlePassages": [
      {
        "page": "p. 112",
        "speaker": "Hacker cita a Russell",
        "text": "Toda complejidad es conceptual [...] pero es real en el sentido de que no depende de la mente, sino sólo de la naturaleza del objeto."
      }
    ]
  },
  "H23": {
    "articlePage": "p. 112",
    "articleDetail": "El logicismo introduce una dimensión reconstructiva: mostrar que la aritmética puede obtenerse a partir de nociones puramente lógicas.",
    "articlePassages": [
      {
        "page": "p. 112",
        "speaker": "Peter M. S. Hacker",
        "text": "Russell realiza su primer intento de llevar a cabo su programa logicista, al tratar de mostrar que la aritmética es reducible a puras nociones lógicas aisladas."
      }
    ]
  },
  "H24": {
    "articlePage": "p. 113",
    "articleDetail": "La teoría referencial temprana infla la ontología porque a cada expresión significativa parece corresponderle algo: universales, clases, descripciones vacías, objetos lógicos y entidades ficticias.",
    "articlePassages": [
      {
        "page": "p. 113",
        "speaker": "Peter M. S. Hacker",
        "text": "Russell sostuvo que cada expresión significativa está por algo."
      }
    ]
  },
  "H25": {
    "articlePage": "pp. 113–114",
    "articleDetail": "La teoría de las descripciones cambia el análisis al reconocer símbolos incompletos: expresiones que contribuyen al significado de una oración sin representar una entidad por sí mismas.",
    "articlePassages": [
      {
        "page": "pp. 113–114",
        "speaker": "Peter M. S. Hacker",
        "text": "Dichas expresiones se producen en las oraciones, pero no tienen significado [...] por sí mismas, a pesar de que las oraciones en las que se producen tienen un significado."
      }
    ]
  },
  "H26": {
    "articlePage": "pp. 114–115",
    "articleDetail": "A partir de 1905 la estructura gramatical deja de ser una guía transparente para la ontología. El análisis lógico puede revelar una forma totalmente distinta.",
    "articlePassages": [
      {
        "page": "pp. 114–115",
        "speaker": "Peter M. S. Hacker",
        "text": "la verdadera forma lógica de las proposiciones [...] puede ser totalmente diferente de las formas gramaticales de las oraciones en las cuales se expresan."
      }
    ]
  },
  "H27": {
    "articlePage": "p. 115",
    "articleDetail": "La lógica se vuelve instrumento filosófico de penetración: no sólo formaliza inferencias, sino que atraviesa la superficie gramatical para investigar estructura.",
    "articlePassages": [
      {
        "page": "p. 115",
        "speaker": "Peter M. S. Hacker",
        "text": "la lógica y su aparato técnico se convirtieron en la herramienta más sobresaliente para el análisis."
      }
    ]
  },
  "H28": {
    "articlePage": "pp. 115–116",
    "articleDetail": "La teoría de las descripciones fortalece la navaja de Ockham y el proyecto de sustituir entidades inferidas por construcciones lógicas.",
    "articlePassages": [
      {
        "page": "pp. 115–116",
        "speaker": "Hacker cita la máxima de Russell",
        "text": "donde sea posible, las construcciones lógicas deben de ser substituidas por entidades inferidas."
      }
    ]
  },
  "H29": {
    "articlePage": "p. 116",
    "articleDetail": "La teoría de tipos introduce una distinción entre falsedad y sinsentido: algunas cadenas son gramaticales, pero violan condiciones lógicas de significación.",
    "articlePassages": [
      {
        "page": "p. 116",
        "speaker": "Peter M. S. Hacker",
        "text": "mientras puede ser o no ser verdad que Leo es un león, no es ni verdadero o falso que la clase de leones es un león –esto no tiene sentido."
      }
    ]
  },
  "H30": {
    "articlePage": "p. 117",
    "articleDetail": "La primera etapa ya deja materiales aptos para una futura lingüistización, aunque Moore y Russell no conciban todavía su empresa como lingüística.",
    "articlePassages": [
      {
        "page": "p. 117",
        "speaker": "Peter M. S. Hacker",
        "text": "Tanto los diferentes estilos de Moore y Russell inauguraron la filosofía analítica del siglo XX."
      }
    ]
  },
  "H31": {
    "articlePage": "p. 117",
    "articleDetail": "La formulación histórica de Hacker es deliberadamente precisa: el Tractatus inicia el giro, no la filosofía analítica; y ni siquiera completa ese giro.",
    "articlePassages": [
      {
        "page": "p. 117",
        "speaker": "Peter M. S. Hacker",
        "text": "Yo sugiero que el giro lingüístico en la filosofía empezó, aunque no se completó, en el Tractatus."
      }
    ]
  },
  "H32": {
    "articlePage": "pp. 117–118",
    "articleDetail": "Hacker niega que el principio contextual por sí solo baste para fechar el giro en Frege, porque Bentham ya había practicado algo muy cercano.",
    "articlePassages": [
      {
        "page": "pp. 117–118",
        "speaker": "Peter M. S. Hacker",
        "text": "Si el principio [...] es la señal del giro lingüístico [...] entonces este giro había sido tomado por Bentham."
      }
    ]
  },
  "H33": {
    "articlePage": "pp. 118–119",
    "articleDetail": "Bentham anticipa dos movimientos posteriores: explicar términos por su función en proposiciones completas y eliminarlos mediante paráfrasis cuando parecen nombrar entidades ficticias.",
    "articlePassages": [
      {
        "page": "pp. 118–119",
        "speaker": "Hacker cita a Bentham",
        "text": "una palabra es a una proposición lo que una carta es a una palabra."
      }
    ]
  },
  "H34": {
    "articlePage": "pp. 119–120",
    "articleDetail": "La teoría pictórica exige una correspondencia estructural: proposición elemental y situación tienen que poder compartir una forma lógica.",
    "articlePassages": [
      {
        "page": "pp. 119–120",
        "speaker": "Peter M. S. Hacker",
        "text": "La sintaxis lógica de cualquier lenguaje posible refleja la estructura metafísica del mundo."
      }
    ]
  },
  "H35": {
    "articlePage": "p. 120",
    "articleDetail": "Las oraciones hacen perceptible el pensamiento; el método de proyección convierte una concatenación de signos en representación significativa de una situación.",
    "articlePassages": [
      {
        "page": "p. 120",
        "speaker": "Peter M. S. Hacker",
        "text": "Lo que diferencia una mera concatenación de signos de la viva expresión del pensamiento es el empleo de un método de proyección."
      }
    ]
  },
  "H36": {
    "articlePage": "pp. 120–121",
    "articleDetail": "La necesidad lógica queda explicada sin hechos lógicos: las proposiciones lógicas son casos límite de operaciones veritativo-funcionales y no describen cómo es el mundo.",
    "articlePassages": [
      {
        "page": "pp. 120–121",
        "speaker": "Peter M. S. Hacker",
        "text": "Las proposiciones lógicas son tautologías [...] de tal manera que aquéllas son verdades incondicionales."
      }
    ]
  },
  "H37": {
    "articlePage": "p. 121",
    "articleDetail": "Si axiomas y teoremas son tautologías del mismo estatus, desaparece la idea de que ciertos axiomas poseen una autoevidencia epistemológica privilegiada.",
    "articlePassages": [
      {
        "page": "p. 121",
        "speaker": "Peter M. S. Hacker",
        "text": "Estos axiomas no son privilegiados por su especial autoevidencia. Éstos son tautologías no menos que los teoremas."
      }
    ]
  },
  "H38": {
    "articlePage": "p. 122",
    "articleDetail": "La nueva metafilosofía separa filosofía y ciencia por método y producto. Filosofar ya no significa producir una clase especial de proposiciones verdaderas.",
    "articlePassages": [
      {
        "page": "p. 122",
        "speaker": "Peter M. S. Hacker",
        "text": "La filosofía no es una disciplina cognitiva. Su contribución no es al conocimiento humano, sino al entendimiento humano."
      }
    ]
  },
  "H39": {
    "articlePage": "pp. 122–123",
    "articleDetail": "La crítica del lenguaje busca eliminar confusiones producidas por la superficie lingüística y reemplazar simbolismos engañosos por representaciones lógicamente transparentes.",
    "articlePassages": [
      {
        "page": "pp. 122–123",
        "speaker": "Peter M. S. Hacker",
        "text": "Toda la filosofía es una crítica del lenguaje."
      }
    ]
  },
  "H40": {
    "articlePage": "p. 122",
    "articleDetail": "El Tractatus no simplemente desecha lo metafísico: Hacker subraya que mantiene una esfera inefable que se muestra aunque no pueda formularse proposicionalmente.",
    "articlePassages": [
      {
        "page": "p. 122",
        "speaker": "Peter M. S. Hacker",
        "text": "Las verdades metafísicas son inefables. Pero se muestran por las ordinarias proposiciones con sentido."
      }
    ]
  },
  "H41": {
    "articlePage": "p. 123",
    "articleDetail": "Hacker no usa 'giro lingüístico' como consigna vaga: lo descompone en seis transformaciones concretas de objeto, método, crítica y filosofía de la lógica.",
    "articlePassages": [
      {
        "page": "p. 123",
        "speaker": "Peter M. S. Hacker",
        "text": "En seis aspectos el Tractatus introdujo el «giro lingüístico» en la filosofía analítica, marcando una ruptura con Moore y Russell."
      }
    ]
  },
  "H41.1": {
    "articlePage": "p. 124",
    "articleDetail": "Primer sentido: el lenguaje se vuelve la vía para establecer el límite entre sentido y sinsentido y, mediante él, el límite de lo pensable.",
    "articlePassages": [
      {
        "page": "p. 124",
        "speaker": "Peter M. S. Hacker",
        "text": "El objetivo del libro es el de establecer los límites del pensamiento. Pero lo hizo al fijar los límites del lenguaje."
      }
    ]
  },
  "H41.2": {
    "articlePage": "p. 124",
    "articleDetail": "Segundo sentido: el programa filosófico positivo ya no es inspección de conceptos como objetos, sino análisis de oraciones significativas.",
    "articlePassages": [
      {
        "page": "p. 124",
        "speaker": "Peter M. S. Hacker",
        "text": "El programa positivo para el futuro de la filosofía es el análisis lógico-lingüístico de las proposiciones."
      }
    ]
  },
  "H41.3": {
    "articlePage": "p. 124",
    "articleDetail": "Tercer sentido: la crítica a la metafísica procede diagnosticando intentos de decir lo que rebasa las condiciones intrínsecas del lenguaje significativo.",
    "articlePassages": [
      {
        "page": "p. 124",
        "speaker": "Peter M. S. Hacker",
        "text": "La tarea negativa es la demostración de la ilegitimidad de las afirmaciones metafísicas."
      }
    ]
  },
  "H41.4": {
    "articlePage": "p. 124",
    "articleDetail": "Cuarto sentido: comprender la proposición exige caracterizar la forma general que hace posible cualquier expresión de sentido.",
    "articlePassages": [
      {
        "page": "p. 124",
        "speaker": "Peter M. S. Hacker",
        "text": "La clave del empeño de Wittgenstein yace en la aclaración de la naturaleza esencial del signo proposicional."
      }
    ]
  },
  "H41.5": {
    "articlePage": "p. 124",
    "articleDetail": "Quinto sentido: la estructura lógica de los fenómenos se investiga por medio del análisis de las descripciones lingüísticas que los representan.",
    "articlePassages": [
      {
        "page": "p. 124",
        "speaker": "Peter M. S. Hacker",
        "text": "La sintaxis lógica del lenguaje es y debe ser isomorfa a la estructura lógica de la realidad."
      }
    ]
  },
  "H41.6": {
    "articlePage": "pp. 124–125",
    "articleDetail": "Sexto sentido: la verdad lógica se esclarece desde el simbolismo mismo; su necesidad debe ser visible en la forma del signo.",
    "articlePassages": [
      {
        "page": "pp. 124–125",
        "speaker": "Peter M. S. Hacker",
        "text": "El más grande logro del libro fue la dilucidación de la verdad lógica."
      }
    ]
  },
  "H42": {
    "articlePage": "p. 125",
    "articleDetail": "Hacker distingue influencia histórica y corrección filosófica: cree errónea la metafísica del símbolo del Tractatus, pero decisiva su transformación del movimiento.",
    "articlePassages": [
      {
        "page": "p. 125",
        "speaker": "Peter M. S. Hacker",
        "text": "le dio a la filosofía analítica una orientación lingüística que nunca había tenido."
      }
    ]
  },
  "H43": {
    "articlePage": "p. 126",
    "articleDetail": "La herencia inmediata se bifurca: Cambridge adopta el análisis lógico de oraciones; Viena convierte varias tesis tractarianas en un programa positivista propio.",
    "articlePassages": [
      {
        "page": "p. 126",
        "speaker": "Peter M. S. Hacker",
        "text": "Su impacto inmediato fue doble."
      }
    ]
  },
  "H44": {
    "articlePage": "p. 126",
    "articleDetail": "Cambridge conserva una tesis metafilosófica muy fuerte: aclarar conocimiento ya poseído, no añadir hechos. El análisis debe revelar formas lógicas y reconstrucciones.",
    "articlePassages": [
      {
        "page": "p. 126",
        "speaker": "Peter M. S. Hacker",
        "text": "la tarea de la filosofía no es añadir conocimientos humanos, sino dilucidar el conocimiento que ya tenemos mediante un análisis lógico de las oraciones."
      }
    ]
  },
  "H45": {
    "articlePage": "p. 127",
    "articleDetail": "Carnap transforma la herencia tractariana: la sintaxis lógica ya no es la estructura necesaria de todo lenguaje posible, sino algo que puede diseñarse de modos diferentes.",
    "articlePassages": [
      {
        "page": "p. 127",
        "speaker": "Peter M. S. Hacker",
        "text": "La filosofía tradicional tiene que ser reemplazada por la investigación de la sintaxis lógica del lenguaje científico."
      }
    ]
  },
  "H46": {
    "articlePage": "pp. 127–128",
    "articleDetail": "El Círculo radicaliza la crítica: trata la metafísica como pseudodiscurso sin contenido cognitivo. Hacker insiste en que esto no coincide con el lugar de lo inefable en Wittgenstein.",
    "articlePassages": [
      {
        "page": "pp. 127–128",
        "speaker": "Peter M. S. Hacker",
        "text": "El Círculo abogó por la demolición de la metafísica."
      }
    ]
  },
  "H47": {
    "articlePage": "p. 128",
    "articleDetail": "El verificacionismo hace de una condición epistémica de comprobación un criterio semántico de significatividad.",
    "articlePassages": [
      {
        "page": "p. 128",
        "speaker": "Peter M. S. Hacker",
        "text": "el significado de una proposición es su método de verificación."
      }
    ]
  },
  "H48": {
    "articlePage": "pp. 128–129",
    "articleDetail": "La teoría de la tautología parecía permitir un empirismo radical: la necesidad lógica ya no tendría que explicarse como conocimiento de hechos a priori.",
    "articlePassages": [
      {
        "page": "pp. 128–129",
        "speaker": "Peter M. S. Hacker",
        "text": "Lo que para ellos pareció un gran avance del Tractatus fue la afirmación de que las proposiciones lógicas son tautologías sin-sentido."
      }
    ]
  },
  "H49": {
    "articlePage": "pp. 129–130",
    "articleDetail": "La diferencia con Viena es profunda: para Wittgenstein, la lógica no depende de convenciones arbitrarias, sino de condiciones formales de cualquier representación posible.",
    "articlePassages": [
      {
        "page": "pp. 129–130",
        "speaker": "Peter M. S. Hacker",
        "text": "La lógica, lejos de ser determinada por convenciones, es trascendental."
      }
    ]
  },
  "H50": {
    "articlePage": "p. 130",
    "articleDetail": "La unidad de las ciencias combina monismo metodológico y reducción: las proposiciones cognitivamente significativas deben poder reconducirse a una base común.",
    "articlePassages": [
      {
        "page": "p. 130",
        "speaker": "Peter M. S. Hacker",
        "text": "El quinto escalón de la plataforma de los positivistas lógicos fue el programa de la unidad de las ciencias."
      }
    ]
  },
  "H51": {
    "articlePage": "p. 130",
    "articleDetail": "El peso histórico del positivismo excede su éxito doctrinal: la emigración europea lo convierte en una fuerza formativa de la filosofía estadounidense de posguerra.",
    "articlePassages": [
      {
        "page": "p. 130",
        "speaker": "Peter M. S. Hacker",
        "text": "muchos de sus miembros huyeron hacia EUA, con lo que también estaría destinada a darle forma a la filosofía americana de posguerra."
      }
    ]
  },
  "H52": {
    "articlePage": "pp. 130–131",
    "articleDetail": "Hacker no explica el colapso por una sola refutación. Enumera una acumulación de problemas internos y externos que erosionan reducción, semántica, lógica, ciencia y metafilosofía.",
    "articlePassages": [
      {
        "page": "pp. 130–131",
        "speaker": "Peter M. S. Hacker",
        "text": "en esta «clásica» fase vienesa, colapsó tanto por la crítica interna como por la externa."
      }
    ]
  },
  "H52.1": {
    "articlePage": "pp. 130–131",
    "articleDetail": "Primera dificultad: no apareció una reducción general convincente y la propia base se dividió entre fenomenismo y fisicalismo.",
    "articlePassages": [
      {
        "page": "pp. 130–131",
        "speaker": "Peter M. S. Hacker",
        "text": "nadie tuvo éxito en desarrollar una explicación reductiva convincente de cualquier dominio general del discurso."
      }
    ]
  },
  "H52.2": {
    "articlePage": "p. 131",
    "articleDetail": "Segunda dificultad: el reduccionismo ortodoxo conduce a dos opciones que Hacker presenta como inaceptables.",
    "articlePassages": [
      {
        "page": "p. 131",
        "speaker": "Peter M. S. Hacker",
        "text": "El reduccionismo comprometió al ortodoxo positivismo lógico hacia el solipsismo metodológico o hacia el behaviorismo radical."
      }
    ]
  },
  "H52.3": {
    "articlePage": "p. 131",
    "articleDetail": "Tercera dificultad: la ambición de traducir todo contexto significativo a estructuras extensionales no pudo sostenerse.",
    "articlePassages": [
      {
        "page": "p. 131",
        "speaker": "Peter M. S. Hacker",
        "text": "La tesis de la extensionalidad resultó sumamente difícil de defender."
      }
    ]
  },
  "H52.4": {
    "articlePage": "p. 131",
    "articleDetail": "Cuarta dificultad: verificación y verificabilidad nunca alcanzaron una formulación capaz de evitar sus propios contraejemplos y problemas de alcance.",
    "articlePassages": [
      {
        "page": "p. 131",
        "speaker": "Peter M. S. Hacker",
        "text": "Ni el principio de verificación o el de verificabilidad como un criterio de significatividad fueron capaces de una formulación hermética."
      }
    ]
  },
  "H52.5": {
    "articlePage": "p. 131",
    "articleDetail": "Quinta dificultad: las convenciones no bastan para explicar la necesidad lógica.",
    "articlePassages": [
      {
        "page": "p. 131",
        "speaker": "Peter M. S. Hacker",
        "text": "Con respecto a la verdad necesaria, el convencionalismo ha demostrado ser inadecuado."
      }
    ]
  },
  "H52.6": {
    "articlePage": "p. 131",
    "articleDetail": "Sexta dificultad: la lógica clásica no agota las inferencias conceptuales legítimas del lenguaje natural.",
    "articlePassages": [
      {
        "page": "p. 131",
        "speaker": "Peter M. S. Hacker",
        "text": "los patrones de inferencia autorizados por el cálculo, no agotan las formas lícitas de inferencia que utilizamos."
      }
    ]
  },
  "H52.7": {
    "articlePage": "p. 131",
    "articleDetail": "Séptima dificultad: se erosiona la idea de una ciencia y un lenguaje científico únicos, especialmente frente a hermenéutica y Wittgenstein tardío.",
    "articlePassages": [
      {
        "page": "p. 131",
        "speaker": "Peter M. S. Hacker",
        "text": "No es obvio que haya «sólo una ciencia» o únicamente un «lenguaje científico» en el sentido de Carnap."
      }
    ]
  },
  "H52.8": {
    "articlePage": "p. 131",
    "articleDetail": "Octava dificultad: una filosofía reducida al lenguaje científico deja fuera ética, derecho, política y estética; el emotivismo exhibe esa estrechez.",
    "articlePassages": [
      {
        "page": "p. 131",
        "speaker": "Peter M. S. Hacker",
        "text": "La concepción de la filosofía y el análisis fue muy estrecha."
      }
    ]
  },
  "H53": {
    "articlePage": "p. 132",
    "articleDetail": "La salida no abandona la aclaración filosófica, sino una concepción excesivamente reductiva de ella. El análisis posterior se vuelve conectivo y terapéutico.",
    "articlePassages": [
      {
        "page": "p. 132",
        "speaker": "Peter M. S. Hacker",
        "text": "Si el análisis es concebido como un asunto de estricta traducción [...] demostró ser demasiado restrictivo para los propósitos de la aclaración filosófica."
      }
    ]
  }
}

Object.entries(hackerArticleSource).forEach(([id, source]) => {
  const node = hackerNodes.find((item) => item.id === id)
  if (!node) return

  node.data.articlePage = source.articlePage
  node.data.articleDetail = source.articleDetail
  node.data.articlePassages = source.articlePassages
  node.data.hasOriginalSource = true
})

const nodeMap = new Map(hackerNodes.map((node) => [node.id, node]))

hackerNodes.forEach((node) => {
  node.data.dependsOn.forEach((depId) => {
    const dep = nodeMap.get(depId)
    if (dep && !dep.data.produces.includes(node.id)) dep.data.produces.push(node.id)
  })
})

const order = [
  'H00','H01','H02','H03','H04','H05','H06','H07','H08','H09','H10','H11','H12','H13',
  'H14','H15','H16','H17','H18','H19',
  'H20','H21','H22','H23','H24','H25','H26','H27','H28','H29','H30',
  'H31','H32','H33','H34','H35','H36','H37','H38','H39','H40','H41',
  'H41.1','H41.2','H41.3','H41.4','H41.5','H41.6','H42',
  'H43','H44','H45','H46','H47','H48','H49','H50','H51','H52',
  'H52.1','H52.2','H52.3','H52.4','H52.5','H52.6','H52.7','H52.8','H53',
  'HC1','HC2','HC3','HC4','HC5',
  'HC21-01','HC21-02','HC21-03','HC21-04','HC21-05','HC21-06','HC21-07','HC21-08','HC21-09','HC21-10','HC21-11','HC21-12','HC21-13','HC21-14','HC21-15',
]

export const hackerOrder = order
export const hackerGuidedPhases = [
  'Tesis y definición',
  'Moore',
  'Russell',
  'Tractatus',
  'Cambridge',
  'Viena',
  'Colapso y salida',
]

function phaseFor(id) {
  const i = order.indexOf(id)
  if (i <= 13) return 'Tesis y definición'
  if (i <= 19) return 'Moore'
  if (i <= 30) return 'Russell'
  if (i <= 48) return 'Tractatus'
  if (id === 'H43' || id === 'H44') return 'Cambridge'
  if (i <= 58) return 'Viena'
  return 'Colapso y salida'
}

export const hackerGuidedRoute = order
  .filter((id) => !nodeMap.get(id)?.data.classOnly)
  .map((id, index) => {
  const node = nodeMap.get(id)
  const next = nodeMap.get(order[index + 1])
    return {
      id,
      phase: phaseFor(id),
      why: node?.data.role || '',
      nextQuestion:
        node?.data.nextQuestion ||
        (next ? `¿Cómo conduce esto a “${next.data.title}”?` : 'Fin de la ruta del artículo.'),
    }
  })

// ============================================================
// HACKER_LAYOUT_COLLISION_SAFE
// Geometría central del plano 2D.
// Ajuste aquí el aire entre nodos sin tocar cada posición.
// ============================================================
export const HACKER_LAYOUT = {
  nodeWidth: 225,
  nodeHeight: 145,

  // Aire mínimo real entre tarjetas.
  gapX: 78,
  gapY: 52,

  // Separación adicional entre grandes bloques históricos.
  branchGap: 190,

  // Número máximo de filas antes de abrir una nueva columna.
  rowsPerColumn: 4,

  // Margen inicial del lienzo.
  startX: 90,
  startY: 100,

  // Padding extra usado por la comprobación de colisiones.
  collisionPadding: 18,
}

const branchOrder = [
  'identity',
  'moore',
  'russell',
  'tractatus',
  'cambridge',
  'vienna',
  'after',
]

const branchRows = {
  identity: [],
  moore: [],
  russell: [],
  tractatus: [],
  cambridge: [],
  vienna: [],
  after: [],
}

order.forEach((id) => {
  const node = nodeMap.get(id)
  if (!node) return

  const primary =
    node.data.branch.find((branch) =>
      Object.prototype.hasOwnProperty.call(branchRows, branch),
    ) || 'identity'

  branchRows[primary].push(node)
})

const branchColumnCount = (branch) => {
  const count = branchRows[branch]?.length || 0
  return Math.max(1, Math.ceil(count / HACKER_LAYOUT.rowsPerColumn))
}

const branchStartX = {}
let runningX = HACKER_LAYOUT.startX

branchOrder.forEach((branch) => {
  branchStartX[branch] = runningX

  const columns = branchColumnCount(branch)
  const branchWidth =
    columns * HACKER_LAYOUT.nodeWidth +
    Math.max(0, columns - 1) * HACKER_LAYOUT.gapX

  runningX += branchWidth + HACKER_LAYOUT.branchGap
})

Object.entries(branchRows).forEach(([branch, list]) => {
  const x0 = branchStartX[branch]
  const rows = HACKER_LAYOUT.rowsPerColumn

  list.forEach((node, index) => {
    const col = Math.floor(index / rows)
    const row = index % rows

    node.position = {
      x:
        x0 +
        col * (HACKER_LAYOUT.nodeWidth + HACKER_LAYOUT.gapX),
      y:
        HACKER_LAYOUT.startY +
        row * (HACKER_LAYOUT.nodeHeight + HACKER_LAYOUT.gapY),
    }
  })
})

// Cinturón y tirantes:
// si alguna modificación futura produce una colisión accidental,
// desplazamos el nodo hacia abajo hasta recuperar aire suficiente.
function overlaps(a, b, padding = HACKER_LAYOUT.collisionPadding) {
  const aw = HACKER_LAYOUT.nodeWidth
  const ah = HACKER_LAYOUT.nodeHeight
  const bw = HACKER_LAYOUT.nodeWidth
  const bh = HACKER_LAYOUT.nodeHeight

  return !(
    a.x + aw + padding <= b.x ||
    b.x + bw + padding <= a.x ||
    a.y + ah + padding <= b.y ||
    b.y + bh + padding <= a.y
  )
}

function resolveNodeCollisions(nodes) {
  const placed = []

  nodes
    .slice()
    .sort((a, b) => {
      if (a.position.x !== b.position.x) {
        return a.position.x - b.position.x
      }
      return a.position.y - b.position.y
    })
    .forEach((node) => {
      let guard = 0

      while (
        placed.some((other) => overlaps(node.position, other.position)) &&
        guard < 200
      ) {
        node.position = {
          ...node.position,
          y:
            node.position.y +
            HACKER_LAYOUT.nodeHeight +
            HACKER_LAYOUT.gapY,
        }
        guard += 1
      }

      placed.push(node)
    })
}

resolveNodeCollisions(hackerNodes)

export const hackerEdges = hackerNodes.flatMap((node) =>
  node.data.dependsOn
    .filter((source) => nodeMap.has(source))
    .map((source) => ({
      id: `e-${source}-${node.id}`,
      source,
      target: node.id,
      relation:
        node.data.critical || nodeMap.get(source)?.data.critical ? 'critical' : 'development',
    })),
)

export function hackerNodeById(id) {
  return nodeMap.get(id) || null
}
