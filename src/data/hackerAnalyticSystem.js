import { hackerPlainArticle } from './hackerPlainArticle.js'
import { hackerPlainClasses } from './hackerPlainClasses.js'

export const hackerRoutes = [
  { id: 'all', label: 'Todo' },
  { id: 'source95to114', label: 'Texto cotejado · pp. 95–114' },
  { id: 'source95to132', label: 'Ensayo cotejado · pp. 95–132' },
  { id: 'class14', label: 'Clase 14 Sep' },
  { id: 'class21', label: 'Clase 21 Sep' },
  { id: 'class23', label: 'Clase 23 Sep' },
  { id: 'class28', label: 'Clase 28 Sep' },
  { id: 'class30', label: 'Clase 30 Sep' },
  { id: 'class07oct', label: 'Clase 7 Oct' },
  { id: 'class14oct', label: 'Clase 14 Oct' },
  { id: 'identity', label: 'Definición' },
  { id: 'moore', label: 'Moore' },
  { id: 'russell', label: 'Russell' },
  { id: 'tractatus', label: 'Tractatus' },
  { id: 'cambridge', label: 'Cambridge' },
  { id: 'vienna', label: 'Viena' },
  { id: 'after', label: 'Posguerra' },
]

export const hackerRouteColors = {
  source95to114: '#3b6f7a',
  source95to132: '#356c55',
  class14: '#9b4b38',
  class21: '#466f68',
  class23: '#49687d',
  class28: '#456a73',
  class30: '#355f73',
  class07oct: '#75618a',
  class14oct: '#617d55',
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
    'pp. 117–125',['tractatus'],['H31'],['isomorfismo','forma lógica','realidad'],
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
    'p. 122',['tractatus','cambridge'],['H34'],['filosofía','ciencia','clarificación'],
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
    'pp. 117–125',['tractatus'],['H31'],['giro lingüístico','seis sentidos','programa'],
    {critical:true,nextQuestion:'¿Cuáles son esos seis sentidos?'}),

  n('H42','42','critique','Hacker critica la metafísica del Tractatus',
    'Reconocer su importancia histórica no obliga a aceptar su metafísica del símbolo.',
    'Hacker cree erróneas varias tesis tractarianas, pero sostiene que cambiaron la trayectoria de la tradición.',
    'Distingue evaluación doctrinal de explicación histórica.',
    'p. 125',['tractatus'],['H41','H40'],['Hacker','crítica','historia'],
    {quote:'El Tractatus dio a la filosofía analítica una orientación lingüística «que nunca había tenido» (p. 125).',
     nextQuestion:'¿Qué dos ramas inmediatas nacen de esa transformación?'}),

  n('H43','43','bridge','Herencia inmediata: Cambridge + Viena',
    'El impacto del Tractatus se bifurca en el análisis de Cambridge y el Círculo de Viena.',
    'En Gran Bretaña influye sobre Russell, Ramsey, Wisdom y Stebbing; en Viena alimenta un programa positivista radical.',
    'Abre la tercera gran etapa histórica del artículo.',
    'pp. 125–132',['cambridge','vienna'],['H41'],['Cambridge','Viena','entreguerras'],
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
    'pp. 125–132',['vienna'],['H43','H40'],['metafísica','pseudoproposición','positivismo'],
    {critical:true,nextQuestion:'¿Qué criterio de significado acompaña esa política?'}),

  n('H47','47','vienna','Viena III · principio de verificación',
    'Una proposición cognitivamente significativa debe ser verificable.',
    'El significado se liga al método de verificación y se convierte en herramienta contra la metafísica.',
    'Tercer elemento del programa positivista.',
    'p. 128',['vienna'],['H43'],['verificación','significado','empirismo'],
    {quote:'«el significado de una proposición es su método de verificación» (p. 128).',
     example:'Ejemplo tuyo: “Existe una sustancia absolutamente indetectable...” obliga a preguntar qué experiencia contaría a favor o en contra.',
     critical:true,nextQuestion:'¿Cómo explica Viena las verdades necesarias sin abandonar el empirismo?'}),

  n('H48','48','vienna','Viena IV · empirismo y necesidad lógica',
    'Las tautologías permiten aceptar necesidad lógica sin tratarlas como hechos empíricos o sintéticos a priori.',
    'La lógica no describe la realidad, de modo que su necesidad parece compatible con empirismo radical.',
    'Cuarto elemento del programa.',
    'pp. 125–132',['vienna'],['H43','H36'],['empirismo','tautología','necesidad'],
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
    'pp. 125–132',['vienna'],['H43'],['unidad de la ciencia','reduccionismo','lo dado'],
    {nextQuestion:'¿Qué importancia histórica tuvo este programa incluso después de fracasar?'}),

  n('H51','51','history','Importancia histórica del positivismo',
    'El colapso posterior no disminuye su enorme influencia histórica.',
    'La emigración de integrantes del Círculo a Estados Unidos transforma profundamente la filosofía norteamericana de posguerra.',
    'Separa éxito histórico de viabilidad doctrinal.',
    'pp. 125–132',['vienna','after'],['H43'],['Estados Unidos','influencia','posguerra'],
    {nextQuestion:'¿Por qué colapsa el programa clásico?'}),

  n('H52','52','collapse','Ocho dificultades del positivismo',
    'Hacker reúne ocho problemas que erosionan el programa clásico.',
    'Fracasan reducciones, verificacionismo, convencionalismo, extensionalidad, unidad científica y una concepción demasiado estrecha de filosofía.',
    'Nodo padre del diagnóstico final del positivismo.',
    'pp. 130–132',['vienna'],['H43'],['colapso','ocho dificultades','positivismo'],
    {critical:true,nextQuestion:'¿Cuáles son las ocho dificultades?'}),

  n('H53','53','after','Del análisis reductivo al conectivo y terapéutico',
    'La filosofía británica posterior abandona la exigencia de reducir o traducir todo.',
    'Como transición señalada al final, el análisis conectivo atiende relaciones conceptuales y el terapéutico disuelve confusiones; no es un apartado desarrollado de Oxford.',
    'Referencia de cierre: Hacker señala la continuidad conectiva y terapéutica, pero no desarrolla en este ensayo una historia de Oxford de posguerra.',
    'p. 132',['after'],['H52'],['análisis conectivo','análisis terapéutico','Wittgenstein'],
    {quote:'«sus notables y variados logros, son otra historia» (p. 132).',critical:true}),
]

const turnNodes = [
  n('H41.1','41.1','subpoint','1 · Límites pensamiento/lenguaje',
    'Los límites del pensamiento se investigan mediante los límites del lenguaje.',
    'La distinción sentido/sinsentido se convierte en instrumento para determinar qué puede pensarse y decirse.',
    'Primer sentido del giro lingüístico.',
    'pp. 117–125',['tractatus'],['H41'],['límites','sentido','lenguaje']),
  n('H41.2','41.2','subpoint','2 · Programa lógico-lingüístico',
    'El programa positivo pasa al análisis lógico-lingüístico de proposiciones.',
    'El objeto de análisis deja de ser un concepto platónico aislado y se desplaza hacia proposiciones y simbolismo.',
    'Segundo sentido del giro lingüístico.',
    'pp. 117–125',['tractatus'],['H41'],['análisis lógico','proposición','simbolismo']),
  n('H41.3','41.3','subpoint','3 · Crítica lingüística de metafísica',
    'La metafísica se critica mostrando que ciertas aparentes afirmaciones atraviesan los límites del lenguaje significativo.',
    'La pregunta ya no es sólo si una tesis metafísica es falsa, sino si logra expresar una proposición con sentido.',
    'Tercer sentido del giro lingüístico.',
    'pp. 117–125',['tractatus'],['H41'],['metafísica','sentido','pseudoproposición']),
  n('H41.4','41.4','subpoint','4 · Signo y forma proposicional',
    'La investigación filosófica se concentra en la naturaleza del signo proposicional y de la forma proposicional.',
    'El simbolismo se vuelve objeto central para esclarecer representación y sentido.',
    'Cuarto sentido del giro lingüístico.',
    'pp. 117–125',['tractatus'],['H41'],['signo','forma proposicional','representación']),
  n('H41.5','41.5','subpoint','5 · Fenómenos vía descripciones',
    'La estructura lógica de fenómenos se investiga analizando las descripciones lingüísticas de esos fenómenos.',
    'El acceso filosófico a estructura ya pasa decisivamente por proposiciones que la representan.',
    'Quinto sentido del giro lingüístico.',
    'pp. 117–125',['tractatus'],['H41'],['fenómeno','descripción','forma lógica']),
  n('H41.6','41.6','subpoint','6 · Verdad lógica vía simbolismo',
    'La naturaleza de la verdad lógica se esclarece examinando el simbolismo.',
    'La tautologicidad y la estructura de signos explican la necesidad sin postular hechos lógicos.',
    'Sexto sentido y culminación del giro lingüístico tractariano.',
    'pp. 117–125',['tractatus'],['H41'],['verdad lógica','simbolismo','tautología'],
    {critical:true}),
]

const collapseNodes = [
  n('H52.1','52.1','failure','1 · Fracaso del reduccionismo',
    'No se logró reducir convincentemente amplios dominios a una base elemental.',
    'Además surge el conflicto entre fenomenismo y fisicalismo acerca de cuál debía ser esa base.',
    'Primera dificultad del positivismo.',
    'pp. 130–132',['vienna'],['H52'],['reduccionismo','fenomenismo','fisicalismo']),
  n('H52.2','52.2','failure','2 · Solipsismo / behaviorismo',
    'El programa reductivo empuja hacia alternativas metodológicas filosóficamente problemáticas.',
    'La reducción de experiencia y mente amenaza con desembocar en solipsismo metodológico o behaviorismo radical.',
    'Segunda dificultad.',
    'pp. 130–132',['vienna'],['H52'],['solipsismo','behaviorismo','reducción']),
  n('H52.3','52.3','failure','3 · Extensionalidad',
    'No todos los contextos significativos se dejan reducir a estructuras puramente extensionales.',
    'El proyecto lógico encuentra contextos intensionales y relaciones de significado resistentes.',
    'Tercera dificultad.',
    'pp. 130–132',['vienna'],['H52'],['extensionalidad','intensionalidad','lógica']),
  n('H52.4','52.4','failure','4 · Verificación',
    'El principio y el criterio de verificabilidad generan dificultades internas.',
    'No se consigue formular el verificacionismo sin excluir demasiado, incluir demasiado o volverse problemático respecto de sí mismo.',
    'Cuarta dificultad.',
    'pp. 130–132',['vienna'],['H52','H47'],['verificación','significado','criterio']),
  n('H52.5','52.5','failure','5 · Convencionalismo',
    'Una explicación puramente convencional de la necesidad lógica resulta insuficiente.',
    'Las convenciones por sí solas no explican satisfactoriamente la fuerza necesaria de la lógica.',
    'Quinta dificultad.',
    'pp. 130–132',['vienna'],['H52','H49'],['convención','necesidad','lógica']),
  n('H52.6','52.6','failure','6 · Lógica clásica insuficiente',
    'El cálculo lógico no reproduce exhaustivamente las inferencias legítimas del lenguaje ordinario.',
    'Relaciones conceptuales pueden autorizar inferencias que no se explican sólo por conectivas formales.',
    'Sexta dificultad.',
    'p. 131',['vienna'],['H52'],['inferencia','lógica clásica','conceptos'],
    {quote:'Los patrones de inferencia del cálculo «no agotan las formas lícitas de inferencia que utilizamos» (p. 131).',
     example:'Ejemplo tuyo: de “La camiseta es roja” inferimos normalmente “La camiseta no es verde completamente”; la inferencia usa relaciones conceptuales entre colores.',
     critical:true}),
  n('H52.7','52.7','failure','7 · Unidad de las ciencias',
    'El monismo metodológico y la pretensión de una única ciencia comienzan a ser cuestionados.',
    'La hermenéutica y el Wittgenstein tardío erosionan la idea de una única forma correcta de descripción científica.',
    'Séptima dificultad.',
    'pp. 130–132',['vienna','after'],['H52','H50'],['unidad de la ciencia','hermenéutica','pluralidad']),
  n('H52.8','52.8','failure','8 · Filosofía demasiado estrecha',
    'Reducir filosofía al análisis lógico del lenguaje científico excluye vastas regiones filosóficas.',
    'Ética, derecho, política y estética quedan mal tratadas; el emotivismo ético muestra los límites de la concepción.',
    'Octava dificultad y salida hacia nuevas formas de análisis.',
    'pp. 130–132',['vienna','after'],['H52'],['ética','política','estética'],
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


const class23Notes = {
  H20: ['RELACIONES EXTERNAS Y MATEMÁTICAS',
    'La décima clase usa 5 > 4 y P → Q para insistir en que no basta con enumerar los términos: también debe reconocerse la relación misma. Esto golpea directamente la doctrina idealista de las relaciones internas.'],
  H21: ['MATEMÁTICAS COMO MODELO DE RIGOR',
    'Nava vincula la separación de Russell respecto del idealismo con su formación matemática y con trabajos del siglo XIX sobre cálculo, límite y continuidad. El análisis matemático permite eliminar cargas metafísicas innecesarias.'],
  H22: ['COMPLEJIDAD OBJETIVA Y DESCOMPOSICIÓN',
    'La clase explica que, si el análisis lógico distingue componentes, Russell entiende que esas diferencias corresponden a una pluralidad real y no meramente mental. El análisis continúa hasta simples o indefinibles.'],
  H23: ['LOGICISMO COMO RESPUESTA A LA OBJETIVIDAD',
    'Frege y Russell buscan fundamentar las matemáticas en la lógica para explicar necesidad y universalidad sin hacerlas depender de estructuras psicológicas humanas.'],
  H24: ['TEORÍA REFERENCIAL Y ONTOLOGÍA ABUNDANTE',
    'La sesión presenta la consecuencia del primer Russell: si toda expresión significativa debe significar algo, la ontología se llena de números, clases, relaciones, objetos lógicos e incluso entidades problemáticas como la montaña de oro.'],
}

const class23Nodes = [
  n(
    'HC23-01',
    '10.1',
    'classpoint',
    '5 > 4: la relación no desaparece',
    '“Cinco es mayor que cuatro” contiene cinco, cuatro y la relación “mayor que”.',
    'La clase usa el ejemplo para mostrar que una proposición relacional no puede reducirse a la mera existencia de sus términos.',
    'Esquema pedagógico de Nava para introducir las relaciones externas de Russell.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['H20'],
    ['relación', 'mayor que', 'pluralidad', 'matemáticas'],
    { critical: true },
  ),
  n(
    'HC23-02',
    '10.2',
    'classpoint',
    'P → Q también exige una relación',
    'Tener P y Q no basta: hay que comprender la relación de implicación.',
    'La clase extiende el mismo argumento desde comparación matemática hacia relaciones lógicas.',
    'Conecta la ontología de relaciones con el análisis formal.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['HC23-01'],
    ['implicación', 'P', 'Q', 'relaciones'],
  ),
  n(
    'HC23-03',
    '10.3',
    'classpoint',
    'Análisis contra síntesis',
    '“Análisis” funciona como una bandera antiidealista frente a la síntesis neohegeliana.',
    'El idealismo integra elementos en una totalidad; Russell quiere separar componentes mediante análisis lógico o formal.',
    'Hace explícita la oposición metodológica desarrollada en clase.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['H21'],
    ['análisis', 'síntesis', 'antiidealismo', 'método'],
    { critical: true },
  ),
  n(
    'HC23-04',
    '10.4',
    'classpoint',
    'Leibniz: verdad de razón → identidad',
    'Toda verdad de razón puede analizarse hasta llegar a identidad o no contradicción.',
    'Nava reconstruye el antecedente leibniziano de la analiticidad con ejemplos como 5 = 2 + 3 y “el triángulo tiene tres lados”.',
    'Antecedente histórico necesario para entender la respuesta de Kant.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['HC23-03'],
    ['Leibniz', 'analiticidad', 'identidad', 'verdades de razón'],
  ),
  n(
    'HC23-05',
    '10.5',
    'classpoint',
    'Kant: lo sintético a priori',
    'Kant busca proposiciones que amplíen conocimiento y, sin embargo, posean necesidad y universalidad.',
    'La clase contrasta analítico/a priori y sintético/a posteriori para mostrar la novedad de la combinación sintético/a priori.',
    'Explica la alternativa kantiana a la trivialidad de una matemática puramente analítica.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['HC23-04'],
    ['Kant', 'sintético a priori', 'analítico', 'a priori'],
    { critical: true },
  ),
  n(
    'HC23-06',
    '10.6',
    'classpoint',
    'Forma + materia del conocimiento',
    'La experiencia combina contenido recibido y estructuras aportadas por el sujeto.',
    'Espacio y tiempo aparecen como formas a priori que organizan necesariamente toda representación sensible.',
    'Esquema de clase para explicar cómo Kant fundamenta matemáticas sintéticas a priori.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['HC23-05'],
    ['forma', 'materia', 'espacio', 'tiempo'],
  ),
  n(
    'HC23-07',
    '10.7',
    'classpoint',
    'Objeción: ¿las matemáticas dependen del sujeto?',
    'La clase pregunta si 1 + 1 seguiría siendo 2 aunque desaparecieran todos los seres humanos.',
    'Frege y Russell buscan una objetividad matemática que no dependa de la configuración cognitiva humana.',
    'Formula pedagógicamente la incomodidad de Russell frente a Kant.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['HC23-06', 'H23'],
    ['objetividad', 'matemáticas', 'subjetividad', 'realismo'],
    { critical: true },
  ),
  n(
    'HC23-08',
    '10.8',
    'classpoint',
    'Frege y el proyecto logicista',
    'La aritmética debe poder fundamentarse en la lógica.',
    'La clase presenta a Frege como antecedente decisivo del programa que Russell continúa y recuerda que la paradoja de Russell compromete el sistema fregeano original.',
    'Puente entre objetividad matemática y logicismo.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['HC23-07', 'H23'],
    ['Frege', 'logicismo', 'aritmética', 'paradoja de Russell'],
  ),
  n(
    'HC23-09',
    '10.9',
    'classpoint',
    'Russell y Moore: realismo platónico',
    'Al abandonar el idealismo, ambos adoptan una forma fuerte de realismo.',
    'Las relaciones y entidades matemáticas no se reducen a productos mentales ni a momentos de una totalidad idealista.',
    'Contextualiza la ontología del primer Russell.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['H20', 'HC23-08'],
    ['Russell', 'Moore', 'realismo platónico', 'relaciones'],
  ),
  n(
    'HC23-10',
    '10.10',
    'classpoint',
    'Análisis hasta simples o indefinibles',
    'La complejidad objetiva puede descomponerse hasta elementos simples.',
    'Nava explica que, una vez alcanzados elementos indefinibles, Russell apela a una familiaridad directa comparable a la familiaridad con un color o un sabor.',
    'Desarrolla el sentido temprano del análisis en Los principios de la matemática.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['H22', 'HC23-09'],
    ['simples', 'indefinibles', 'familiaridad', 'descomposición'],
  ),
  n(
    'HC23-11',
    '10.11',
    'classpoint',
    'Montaña de oro y ontología abundante',
    'Una teoría referencial demasiado fuerte obliga a preguntar qué entidad corresponde a expresiones significativas como “la montaña de oro”.',
    'La clase deja preparado el problema que Russell abordará posteriormente mediante la teoría de las descripciones definidas.',
    'Cierre de la décima clase y puente hacia la siguiente sección de Hacker.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['H24', 'HC23-10'],
    ['referencia', 'montaña de oro', 'ontología', 'descripciones'],
    { critical: true },
  ),
  n(
    'HC23-12',
    '10.12',
    'classpoint',
    'Sentido: sintaxis y semántica',
    'Una fórmula bien formada cumple condiciones gramaticales, pero la discusión del significado exige además atender a cuestiones semánticas.',
    'La pregunta final del alumno permite a Nava anticipar que los positivistas añadirán condiciones vinculadas a la función descriptiva y a la referencia.',
    'Problema abierto con el que termina la grabación.',
    'Décima clase · 23 sep 2026',
    ['russell', 'class23'],
    ['HC23-11'],
    ['sentido', 'sintaxis', 'semántica', 'positivismo'],
  ),
]

class23Nodes.forEach((node) => {
  node.data.classSeen = true
  node.data.classOnly = true
  node.data.classLabel = 'APORTE DE LA DÉCIMA CLASE'
  node.data.classNote = node.data.explanation
  node.data.classHeader = 'PROF. ALONSO NAVA · DÉCIMA CLASE · 23 SEP 2026'
  node.data.classRoute = '/semestre/5/filosofia-analitica/clase/23-septiembre'
  node.data.classLinkLabel = 'Abrir décima clase ↗'
})

Object.entries(class23Notes).forEach(([id, [label, note]]) => {
  const node = [
    ...mainNodes,
    ...turnNodes,
    ...collapseNodes,
    ...class14Nodes,
    ...class21Nodes,
  ].find((item) => item.id === id)

  if (!node) return

  const previous = node.data.classNote

  node.data.classSeen = true
  node.data.classOnly = false
  node.data.classLabel = label
  node.data.classNote = previous
    ? `${previous}\n\nDÉCIMA CLASE · 23 SEP: ${note}`
    : note
  node.data.classHeader = 'PROF. ALONSO NAVA · DÉCIMA CLASE · 23 SEP 2026'
  node.data.classRoute = '/semestre/5/filosofia-analitica/clase/23-septiembre'
  node.data.classLinkLabel = 'Abrir décima clase ↗'

  if (!node.data.branch.includes('class23')) {
    node.data.branch.push('class23')
  }
})

const class30Notes = {
  H30: ['CIERRE DE LA PRIMERA ETAPA',
    'La decimotercera clase cierra la fase de Moore y Russell insistiendo en que conviene hablar de orígenes y no identificar toda la etapa con el logicismo: Moore trabaja principalmente con análisis conceptual y semántico, mientras Russell desarrolla un análisis lógico y reductivo.'],
  H31: ['INICIO DEL GIRO LINGÜÍSTICO',
    'Nava abre la p. 117 y subraya la precisión de Hacker: el giro lingüístico empieza, aunque no se completa, en el Tractatus. Esto no equivale a hacer nacer allí la filosofía analítica, pues Moore y Russell pertenecen a una etapa anterior.'],
  H32: ['FREGE, PRINCIPIO CONTEXTUAL Y PRIORIDAD',
    'La clase reconstruye la alternativa de Anthony Kenny y Dummett: fechar el giro en Frege 1884 por el principio contextual. Hacker objeta que la prioridad textual no basta, porque Bentham ya había ensayado una estrategia semejante; lo decisivo es cuándo una práctica transforma efectivamente la manera de filosofar.'],
}

const class30Nodes = [
  n(
    'HC30-01',
    '13.1',
    'classpoint',
    'Primera etapa: orígenes, no logicismo',
    'Moore y Russell inauguran la filosofía analítica mediante estilos distintos.',
    'La clase rechaza llamar logicista a toda la primera etapa: esa etiqueta no describe adecuadamente a Moore ni la heterogeneidad de los comienzos.',
    'Ajuste historiográfico con el que se cierra la primera etapa de Hacker.',
    'Decimotercera clase · 30 sep 2026',
    ['identity', 'class30'],
    ['H30'],
    ['orígenes', 'Moore', 'Russell', 'logicismo'],
    { critical: true },
  ),
  n(
    'HC30-02',
    '13.2',
    'classpoint',
    'Moore: análisis semántico y conceptual',
    'Moore no se caracteriza por hacer de la lógica formal el centro de su método.',
    'Nava contrasta el trabajo de Moore sobre conceptos y significados con el uso mucho más fuerte de la lógica que aparece en Russell.',
    'Ejemplo pedagógico de por qué la tradición no tiene un solo método.',
    'Decimotercera clase · 30 sep 2026',
    ['moore', 'class30'],
    ['HC30-01'],
    ['Moore', 'semántica', 'análisis conceptual', 'método'],
  ),
  n(
    'HC30-03',
    '13.3',
    'classpoint',
    'Segunda etapa: giro lingüístico',
    'Con la p. 117 comienza una nueva fase de la historia reconstruida por Hacker.',
    'Los problemas filosóficos se presentan mediante formulaciones lingüísticas y el análisis de esas formulaciones se vuelve una vía privilegiada de acceso.',
    'Puente entre los orígenes y el Tractatus.',
    'Decimotercera clase · 30 sep 2026',
    ['tractatus', 'class30'],
    ['H30', 'HC30-02'],
    ['giro lingüístico', 'lenguaje', 'problemas filosóficos', 'análisis'],
    { critical: true },
  ),
  n(
    'HC30-04',
    '13.4',
    'classpoint',
    'Rorty bautiza el giro en 1967',
    'La expresión “giro lingüístico” se populariza como título de una antología de Richard Rorty.',
    'El nombre historiográfico es posterior al proceso que describe, por lo que no debe confundirse la fecha del rótulo con la fecha del fenómeno.',
    'Punto cronológico inicial del apartado 3.',
    'Decimotercera clase · 30 sep 2026',
    ['tractatus', 'class30'],
    ['HC30-03'],
    ['Rorty', '1967', 'giro lingüístico', 'historiografía'],
  ),
  n(
    'HC30-05',
    '13.5',
    'classpoint',
    'El giro empieza, pero no se completa, en el Tractatus',
    'Hacker sitúa el punto de inflexión en Wittgenstein sin hacer de él el fundador de toda la filosofía analítica.',
    'La precisión permite distinguir nacimiento de la tradición y transformación lingüística interna de esa tradición.',
    'Tesis central del fragmento.',
    'Decimotercera clase · 30 sep 2026',
    ['tractatus', 'class30'],
    ['H31', 'HC30-04'],
    ['Tractatus', 'Wittgenstein', 'giro lingüístico', 'orígenes'],
    { critical: true },
  ),
  n(
    'HC30-06',
    '13.6',
    'classpoint',
    '1918 y 1922: texto y difusión',
    'La clase distingue la publicación alemana y la posterior edición inglesa del Tractatus.',
    'Las fechas sirven para ubicar históricamente la entrada del libro en la discusión analítica y su difusión internacional.',
    'Cronología usada por Nava para fijar el punto de inflexión.',
    'Decimotercera clase · 30 sep 2026',
    ['tractatus', 'class30'],
    ['HC30-05'],
    ['1918', '1922', 'Tractatus', 'difusión'],
  ),
  n(
    'HC30-07',
    '13.7',
    'classpoint',
    'Frege 1884 como candidato alternativo',
    'Anthony Kenny, en una línea asociada con Dummett, desplaza el giro hacia los Fundamentos de la aritmética.',
    'La razón es la estrategia de investigar la naturaleza del número mediante el análisis de las proposiciones en las que aparecen numerales.',
    'Alternativa historiográfica discutida por Hacker.',
    'Decimotercera clase · 30 sep 2026',
    ['tractatus', 'class30'],
    ['H32', 'HC30-06'],
    ['Frege', '1884', 'Kenny', 'Dummett'],
  ),
  n(
    'HC30-08',
    '13.8',
    'classpoint',
    'Principio contextual',
    'Para investigar la naturaleza de X, analice las proposiciones en las que aparece X.',
    'El foco se desplaza desde buscar inmediatamente una entidad hasta estudiar el papel de una expresión en proposiciones completas.',
    'Regla general que la clase extrae del caso de los números.',
    'Decimotercera clase · 30 sep 2026',
    ['tractatus', 'class30'],
    ['HC30-07'],
    ['principio contextual', 'proposición', 'expresión', 'Frege'],
  ),
  n(
    'HC30-09',
    '13.9',
    'classpoint',
    'Bentham muestra que la prioridad no basta',
    'Si el principio contextual fuera por sí solo la señal del giro, habría que retroceder a Bentham.',
    'La clase radicaliza la objeción: buscar sólo quién dijo algo primero puede llevar a antecedentes cada vez más antiguos sin explicar el cambio histórico.',
    'Crítica al criterio puramente cronológico.',
    'Decimotercera clase · 30 sep 2026',
    ['tractatus', 'class30'],
    ['H32', 'HC30-08'],
    ['Bentham', 'precedente', 'prioridad', 'historiografía'],
    { critical: true },
  ),
  n(
    'HC30-10',
    '13.10',
    'classpoint',
    'Giro histórico: una práctica se vuelve transformadora',
    'Lo decisivo no es la primera aparición de una idea semejante, sino el momento en que reorganiza efectivamente una tradición.',
    'Nava presenta al Tractatus como el punto en que el análisis lingüístico adquiere fuerza causal y se vuelve dominante en una nueva manera de hacer filosofía.',
    'Criterio con el que termina el fragmento entregado.',
    'Decimotercera clase · 30 sep 2026',
    ['tractatus', 'class30'],
    ['HC30-09'],
    ['transformación', 'dominancia', 'Tractatus', 'historia'],
    { critical: true },
  ),
]

class30Nodes.forEach((node) => {
  node.data.classSeen = true
  node.data.classOnly = true
  node.data.classLabel = 'APORTE DE LA DECIMOTERCERA CLASE'
  node.data.classNote = node.data.explanation
  node.data.classHeader = 'PROF. ALONSO NAVA · DECIMOTERCERA CLASE · 30 SEP 2026'
  node.data.classRoute = '/semestre/5/filosofia-analitica/clase/30-septiembre'
  node.data.classLinkLabel = 'Abrir decimotercera clase ↗'
})

Object.entries(class30Notes).forEach(([id, [label, note]]) => {
  const node = [
    ...mainNodes,
    ...turnNodes,
    ...collapseNodes,
    ...class14Nodes,
    ...class21Nodes,
    ...class23Nodes,
  ].find((item) => item.id === id)

  if (!node) return

  const previous = node.data.classNote

  node.data.classSeen = true
  node.data.classOnly = false
  node.data.classLabel = label
  node.data.classNote = previous
    ? `${previous}\n\nDECIMOTERCERA CLASE · 30 SEP: ${note}`
    : note
  node.data.classHeader = 'PROF. ALONSO NAVA · DECIMOTERCERA CLASE · 30 SEP 2026'
  node.data.classRoute = '/semestre/5/filosofia-analitica/clase/30-septiembre'
  node.data.classLinkLabel = 'Abrir decimotercera clase ↗'

  if (!node.data.branch.includes('class30')) {
    node.data.branch.push('class30')
  }
})

/*
 * Clase del 14 de octubre de 2026.
 * Cada aporte docente se conserva como capa distinta del artículo de Hacker.
 * No sustituye los ocho problemas H52.1–H52.8 del texto.
 */
const class14OctAnnotations = {
  H50: ['UNIDAD METODOLÓGICA Y UNIFICACIÓN REDUCTIVA', 'La sesión contrapone la división del trabajo científico en Comte —disciplinas distintas con orientación positiva común— con el programa del Círculo de Viena: reducir enunciados significativos a una base uniforme. No identificar sin matices ambas versiones del positivismo.'],
  H51: ['PESO HISTÓRICO DEL POSITIVISMO', 'El profesor señala la disolución y emigración provocadas por la guerra y, separadamente, la acumulación de objeciones internas. Son explicaciones diferentes: circunstancias históricas y dificultades conceptuales.'],
  H52: ['OCHO PROBLEMAS, NO UN SOLO RECHAZO', 'La clase dedica su tramo central a distinguir las ocho críticas del pasaje final de Hacker. El balance abre paso a análisis lingüísticos menos restrictivos.'],
  'H52.1': ['BASE DEL REDUCCIONISMO', 'Se reconstruye la disputa entre una base fenomenalista y otra fisicalista. El profesor la introduce mediante una comparación pedagógica entre realismos y fenomenalismo; esta clasificación es explicación de clase, no cita ni taxonomía propuesta aquí por Hacker.'],
  'H52.2': ['CULTURA, LENGUAJE Y EL SOLIPSISMO', 'El profesor examina el peligro de prescindir de nombres, conceptos compartidos y mediaciones culturales para reducir todo a la vivencia inmediata de un único sujeto. Se discute si el lenguaje permite una objetividad intersubjetiva.'],
  'H52.3': ['EXTENSIONALIDAD Y CONTENIDO CONCEPTUAL', 'Se recuerda la tesis de reducir proposiciones complejas a elementos más simples y la resistencia de relaciones semánticas y usos ordinarios. No se equipara esta dificultad a una mera falta de cálculo.'],
  'H52.4': ['SIGNIFICADO NO ES VERDAD NI CIENTIFICIDAD', 'Se plantea el imperativo «Cierra la puerta»: tiene sentido, pero no es verdadero ni falso. «Dios es amor» puede ser significativo para hablantes sin superar un criterio de contrastación científica. Popper es introducido como crítico de la equivalencia entre significado y verificación.'],
  'H52.5': ['CONVENCIONES Y NECESIDAD', 'La clase cuestiona que la verdad lógico-matemática quede satisfactoriamente explicada mediante mera convención. Mantiene separado el convencionalismo vienés de las tesis tractarianas.'],
  'H52.6': ['INFERENCIAS MÁS ALLÁ DE UN SOLO CÁLCULO', 'El profesor distingue deducción, inducción y abducción; sostiene que el descubrimiento y la argumentación científica no se agotan en una única formalización. Se trata de una ampliación docente, no de una cita de Hacker.'],
  'H52.7': ['CIENCIAS SOCIALES Y DEMARCACIÓN', 'La clase presenta el conflicto entre monismo metodológico y autonomía de las ciencias sociales, con referencia a la hermenéutica y al problema de la demarcación. Los ejemplos de métodos cualitativos y cuantitativos son aportes del debate de clase.'],
  'H52.8': ['ÉTICA, DERECHO, POLÍTICA Y ESTÉTICA', 'Si el análisis sólo admite proposiciones científicamente verificables, la discusión del deber ser y los enunciados valorativos quedan injustificadamente excluidos del campo filosófico.'],
  H53: ['CONTINUIDAD HACIA EL LENGUAJE ORDINARIO', 'La sesión termina con la liberación del análisis de la exigencia de reducción lógico-científica: significados, usos y conversaciones pasan a ser objetos de investigación. Se anuncia el capítulo II de Glock como lectura posterior.'],
};
const class14OctNodes = [
  n('HC14O-01','15.1','classpoint','Comte y Viena: dos proyectos de unidad',
    'Compartir orientación positiva no equivale a reducirlo todo a la física.',
    'La explicación docente distingue las ciencias diferenciadas de Comte, coordinadas por un método común, del programa vienés que considera la reducción de enunciados a una base uniforme.',
    'Precisa la procedencia histórica y el alcance del quinto programa.', 'Clase · 14 oct 2026',
    ['vienna','class14oct'],['H50'],['Comte','Viena','unidad metodológica','fisicalismo'],{critical:true}),
  n('HC14O-02','15.2','classpoint','Reducción y proposiciones elementales',
    'La ambición reduccionista intenta remontar lo complejo a proposiciones empíricas básicas.',
    'La clase enlaza el quinto programa con la herencia del atomismo lógico y con la pretensión de contrastación inmediata de las proposiciones elementales.',
    'Conecta el proyecto de unidad con su principal dificultad.', 'Clase · 14 oct 2026',
    ['vienna','class14oct'],['HC14O-01','H52.1'],['atomismo lógico','enunciados elementales','reduccionismo']),
  n('HC14O-03','15.3','classpoint','Fenomenalismo frente a fisicalismo',
    '¿La base del conocimiento es experiencia inmediata o lenguaje físico?',
    'La discusión interna contrapone una descripción de lo dado en la experiencia y otra de los hechos físicos. Se insiste en que no se alcanzó una reducción universal convincente.',
    'Sitúa la primera dificultad en su disyuntiva epistemológica.', 'Clase · 14 oct 2026',
    ['vienna','class14oct'],['H52.1'],['fenomenalismo','fisicalismo','objetividad'],{critical:true}),
  n('HC14O-04','15.4','classpoint','Realismos: esquema explicativo docente',
    'Ingenuo, natural y crítico se comparan como respuestas al acceso objetivo a la realidad.',
    'La clase contrapone la confianza inmediata en los sentidos, la objetividad lograda por un proceso de conocimiento y la objetividad limitada a ciertos rasgos estructurales. La terminología y los límites del esquema son pedagógicos y requieren discusión independiente.',
    'Proporciona la analogía epistemológica usada en el aula; no es división textual de Hacker.',
    'Clase · 14 oct 2026',['vienna','class14oct'],['HC14O-03'],
    ['realismo ingenuo','realismo natural','realismo crítico','objeto y representación']),
  n('HC14O-05','15.5','classpoint','Sal, color y cualidades sensibles',
    'La composición química puede describirse sin identificarla con el sabor percibido.',
    'Los ejemplos de salinidad y color sirven para distinguir las condiciones físico-estructurales del objeto de su manifestación sensible para un sujeto. El uso del par cualidades primarias/secundarias es ilustración docente, no conclusión que deba atribuirse literalmente a Hacker.',
    'Ejemplo de estudio sobre experiencia, estructura y representación.', 'Clase · 14 oct 2026',
    ['vienna','class14oct'],['HC14O-04'],
    ['cualidades primarias','cualidades secundarias','percepción','representación']),
  n('HC14O-06','15.6','classpoint','Solipsismo y mediaciones culturales',
    'La referencia privada al «esto» encuentra dificultades para comunicar y contrastar.',
    'Se problematiza una reducción a vivencias individuales y se pregunta qué papel desempeñan lenguaje, aprendizaje cultural y conceptos compartidos al afirmar objetividad.',
    'Desarrolla el ejemplo docente de la segunda dificultad.', 'Clase · 14 oct 2026',
    ['vienna','class14oct'],['H52.2','HC14O-05'],['solipsismo','lenguaje','intersubjetividad','concepto']),
  n('HC14O-07','15.7','classpoint','Sentido, verdad y verificación',
    'Una orden puede tener significado sin poseer valor de verdad.',
    'El profesor utiliza los imperativos y enunciados religiosos para impugnar la equiparación entre significado y verificación científica. Distingue significado, verdad y demarcación.',
    'Articula el núcleo de la cuarta objeción.', 'Clase · 14 oct 2026',
    ['vienna','class14oct'],['H52.4'],['significado','verdad','verificación','imperativos'],{critical:true}),
  n('HC14O-08','15.8','classpoint','Popper: falsabilidad y conjeturas',
    'Una proposición puede tener sentido sin ser una tesis científica contrastable.',
    'La clase presenta la falsabilidad como alternativa de demarcación y destaca la elaboración de hipótesis y la posibilidad de refutarlas. No reduce la teoría de Popper a que todo significado dependa de la falsación.',
    'Diferencia el criterio de ciencia del criterio de sentido.', 'Clase · 14 oct 2026',
    ['vienna','class14oct'],['HC14O-07'],['Popper','falsabilidad','conjeturas','demarcación'],{critical:true}),
  n('HC14O-09','15.9','classpoint','Deducción, inducción y abducción',
    'Los procesos científicos no se describen completamente con una única clase de inferencia.',
    'El profesor amplía la crítica del cálculo clásico con inferencias inductivas y abductivas, hipótesis, investigación creativa y contingencias del descubrimiento. Distinguir el contexto de descubrimiento del de justificación es una precisión editorial para el estudio.',
    'Conexión docente con los límites del formalismo lógico.', 'Clase · 14 oct 2026',
    ['vienna','class14oct'],['H52.6','HC14O-08'],['deducción','inducción','abducción','descubrimiento']),
  n('HC14O-10','15.10','classpoint','Ciencias sociales y comunidad científica',
    'Se discute qué permite llamar ciencia a una investigación social.',
    'La clase contrapone la posición metodológica de Comte con enfoques hermenéuticos y con la referencia a comunidades científicas y paradigmas. Las referencias a Kuhn son ampliación de la clase y no tesis de Hacker en este apartado.',
    'Profundiza el problema de demarcación tras la séptima objeción.', 'Clase · 14 oct 2026',
    ['vienna','class14oct'],['H52.7','HC14O-09'],['ciencias sociales','Comte','Kuhn','paradigma']),
  n('HC14O-11','15.11','classpoint','Ética y lenguaje ordinario',
    'El análisis no queda agotado por la descripción científica de los hechos.',
    'La discusión del deber ser, las normas, el derecho y la conversación corriente plantea tareas para la filosofía que la reducción lógico-científica deja fuera.',
    'Explica por qué la octava crítica abre un cambio de programa filosófico.', 'Clase · 14 oct 2026',
    ['after','class14oct'],['H52.8','HC14O-10'],['ética','derecho','estética','lenguaje ordinario']),
  n('HC14O-12','15.12','classpoint','Cierre de Hacker y comienzo de Glock',
    'El recorrido termina en los límites del programa positivista y abre otra historia del análisis.',
    'El profesor da por terminada la lectura de Hacker y anuncia para la próxima sesión el capítulo II, «Breve panorama histórico», de Hans-Johann Glock. La entrega del reporte de Hacker fue confirmada por el estudiante para la próxima clase: lunes 19 de octubre de 2026. No consta una hora límite dentro de la sesión.',
    'Nodo de continuidad del curso, no contenido del ensayo de Hacker.', 'Clase · 14 oct 2026',
    ['after','class14oct'],['H53','HC14O-11'],['Hacker','Glock','reporte de lectura','continuidad'],{critical:true}),
];
class14OctNodes.forEach((node) => {
  node.data.classSeen = true
  node.data.classOnly = true
  node.data.classLabel = 'EXPLICACIÓN DE CLASE · 14 OCTUBRE'
  node.data.classNote = node.data.explanation
  node.data.classHeader = 'FILOSOFÍA ANALÍTICA · 15.ª CLASE · 14 OCT 2026'
  node.data.classRoute = '/semestre/5/filosofia-analitica/clase/14-octubre'
  node.data.classLinkLabel = 'Consultar clase del 14 de octubre ↗'
})
Object.entries(class14OctAnnotations).forEach(([id, [label, note]]) => {
  const node = [...mainNodes, ...turnNodes, ...collapseNodes].find((item) => item.id === id)
  if (!node) throw new Error('Nodo del artículo no encontrado: ' + id)
  node.data.branch.push('class14oct')
  // Preserve previous classNote/classRoute: a new class must never overwrite them.
  node.data.additionalClassNotes = [
    ...(node.data.additionalClassNotes || []),
    { label, note, date: '14 OCT 2026', route: '/semestre/5/filosofia-analitica/clase/14-octubre' },
  ]
})

export const hackerNodes = [
  ...mainNodes,
  ...turnNodes,
  ...collapseNodes,
  ...class14Nodes,
  ...class21Nodes,
  ...class23Nodes,
  ...class30Nodes,
  ...class14OctNodes,
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

// Primera tanda verificada contra las imágenes de la edición, pp. 95–114.
// Capa separada: paráfrasis de la obra. No añade interpretaciones docentes al autor.
// El texto recibido se interrumpe en p. 114; H28 y siguientes NO quedan cotejados aquí.
export const hackerSource95to114 = {
  "H00": {
    "page": "pp. 101–103",
    "focus": "Unidad histórica y no definición esencial",
    "reading": "La cuestión rectora no consiste en fijar una propiedad idéntica compartida por todos los filósofos analíticos. Hacker reconstruye un movimiento que cambia profundamente: el análisis conceptual de Moore, el análisis lógico de Russell y los programas que reciben al Tractatus no representan una doctrina uniforme.",
    "argument": "Distinguir continuidad histórica de identidad doctrinal: los hilos de las primeras etapas se entrelazan con los posteriores sin que un único hilo atraviese todas las fases. Hacker rechaza también reducir esa unidad a una vaga semejanza de familia, pues quiere preservar la especificidad del movimiento histórico.",
    "distinction": "No confundir el sentido genérico de «analizar» con el nombre histórico de una tradición; tampoco suponer que toda etapa se deduce de la anterior.",
    "report": "En la introducción del reporte, formular como problema la demarcación histórica y como tesis la pluralidad de métodos surgidos de las dos raíces de Cambridge."
  },
  "H01": {
    "page": "p. 95",
    "focus": "El siglo del lenguaje y de la lógica",
    "reading": "Hacker caracteriza el siglo XX mediante dos ejes relacionados: la investigación filosófica sobre el lenguaje y el desarrollo de una lógica formal de alcance sin precedentes. El trabajo de Frege, Russell y Whitehead importa por el cálculo lógico y por las preguntas que abre sobre las relaciones entre lógica, lenguaje y pensamiento.",
    "argument": "La primera página no afirma que todos los filósofos analíticos sean lingüistas; sitúa una transformación histórica en la que la lógica ofrece instrumentos de examen antes del giro lingüístico propiamente dicho.",
    "distinction": "Época marcada por el lenguaje no equivale a escuela fundada exclusivamente en el análisis del lenguaje.",
    "report": "Utilizar como contexto de apertura, no como definición universal del movimiento."
  },
  "H02": {
    "page": "pp. 95–96 y 102–103",
    "focus": "Wittgenstein y la sucesión histórica",
    "reading": "El texto atribuye a Wittgenstein un papel decisivo en la transformación del primer análisis de Cambridge, en la formación del análisis de Cambridge de entreguerras, en la inspiración del positivismo lógico de Viena y, posteriormente, en los análisis conectivos y terapéuticos británicos.",
    "argument": "La genealogía es plural: Cambridge, Viena y Oxford responden de formas distintas a problemas y obras compartidos. Hacker subraya la superposición temporal y la retroalimentación entre etapas; la reconstrucción no es una simple fila de escuelas que sustituyen completamente a las anteriores.",
    "distinction": "Importancia transformadora no es identidad con el origen; una influencia compartida no iguala las doctrinas resultantes.",
    "report": "Distinguir en el reporte fundador, mediador y receptor histórico; Oxford se menciona, pero no se desarrollará en este ensayo."
  },
  "H03": {
    "page": "p. 96",
    "focus": "Contra una extensión indiscriminada del término",
    "reading": "Hacker muestra que una definición excesivamente amplia haría analítica casi toda filosofía rigurosa: si Austin cuenta por su examen de excusas, también habría razones para incluir el análisis aristotélico de la acción voluntaria; de modo análogo compara Ryle con Aquino y Strawson con Kant.",
    "argument": "Estos paralelos actúan como una reducción crítica de la utilidad clasificatoria del término: semejanza de problemas o procedimientos no basta para pertenecer al movimiento histórico del siglo XX.",
    "distinction": "Análisis como actividad transversal ≠ filosofía analítica como tradición históricamente determinada.",
    "report": "Presentar estos tres pares como ejemplos argumentativos de Hacker, no como una tesis de que Aristóteles o Kant sean miembros históricos del movimiento."
  },
  "H04": {
    "page": "pp. 96–101",
    "focus": "La definición lingüística de Dummett queda demasiado estrecha",
    "reading": "Dummett propone caracterizar la filosofía analítica como filosofía del pensamiento cuyo examen necesita pasar por la explicación filosófica del lenguaje. Hacker objeta la ambigüedad del primer concepto y, sobre todo, que la fórmula no hace justicia a Frege, Moore, Russell ni al Wittgenstein tardío.",
    "argument": "Hacker pone a prueba un criterio general contrastándolo con figuras indiscutibles de la tradición. Si el criterio las excluye, no sirve para describir históricamente todo el movimiento.",
    "distinction": "Una definición propuesta por Dummett no equivale a la tesis que Hacker acepta; además, que una obra trate sobre el lenguaje no implica que todos los problemas filosóficos se subordinen a él.",
    "report": "Plantear la definición de Dummett y luego reconstruir separadamente las objeciones de Hacker, sin fundir sus voces."
  },
  "H05": {
    "page": "p. 97",
    "focus": "Dos acepciones no equivalentes de pensamiento",
    "reading": "Si «pensamiento» significa el Gedanke objetivo de Frege, la investigación queda centrada en el contenido proposicional, un campo importante pero parcial. Si significa el acto de pensar, el proyecto se acerca a la psicología filosófica y tampoco delimita el conjunto de la filosofía analítica.",
    "argument": "La alternativa conceptual permite a Hacker mostrar que la expresión «filosofía del pensamiento» no es suficientemente precisa para fundamentar la definición de toda una tradición.",
    "distinction": "Contenido objetivo de una proposición ≠ operación psicológica de pensar; lógica de proposiciones ≠ totalidad de la filosofía.",
    "report": "Enunciar ambas interpretaciones explícitamente y explicar por qué ninguna alcanza el criterio global buscado."
  },
  "H06": {
    "page": "pp. 97–98",
    "focus": "Frege: investigar el pensamiento sin someterlo al lenguaje ordinario",
    "reading": "Hacker cuestiona que Frege defendiera una doctrina general según la cual la filosofía debe explicar primero el lenguaje natural. Refiere su convicción de que la lógica estudia leyes del pensamiento y presenta su crítica a la idea de aprender lógica desde las irregularidades del habla cotidiana.",
    "argument": "La crítica a Dummett no niega la relevancia de la notación lógica fregeana; niega que la reconstrucción de sus intereses pueda equipararse a un programa universal de filosofía lingüística. La atención a cómo las palabras deforman el pensamiento favorece incluso la dirección inversa.",
    "distinction": "Pensamiento fregeano no es idéntico a oración lingüística; el uso de simbolismo formal no equivale a primacía filosófica del lenguaje natural.",
    "report": "Explicar el contraste metodológico entre contenido objetivo y medio lingüístico, sin atribuir a Frege desprecio por toda investigación semántica."
  },
  "H07": {
    "page": "pp. 98–99",
    "focus": "El primer Wittgenstein cambia la pregunta: límites de la representación",
    "reading": "Para el Wittgenstein del Tractatus, esclarecer la esencia de la proposición es una vía para investigar qué puede representarse y, así, qué puede pensarse. Hacker entiende este programa como un desplazamiento frente a los intereses de Frege y Russell, que no convierten la esencia general del simbolismo en el mismo problema rector.",
    "argument": "La investigación de cualquier lenguaje posible promete revelar condiciones de posibilidad de la representación. El movimiento tiene una dimensión de inspiración kantiana: examinar límites antes que inventariar directamente objetos.",
    "distinction": "El objetivo del Tractatus no se agota en describir usos cotidianos de palabras ni implica identificar pensamiento con un contenido abstracto en un «tercer reino».",
    "report": "Separar claramente la fundación con Moore/Russell del giro filosófico posterior protagonizado por Wittgenstein."
  },
  "H08": {
    "page": "pp. 98–99",
    "focus": "Gedanke fregeano frente a proposición proyectiva",
    "reading": "Hacker contrapone la concepción fregeana del pensamiento como entidad abstracta objetiva con la proposición entendida por el primer Wittgenstein como oración significativa relacionada proyectivamente con la realidad. El análisis del simbolismo adquiere así un papel trascendental que no comparte Frege.",
    "argument": "La comparación explica por qué una genealogía que arranque de Frege y desemboque sin ruptura en la primacía del lenguaje resulta históricamente engañosa.",
    "distinction": "No confundir el tercer reino de Frege con la teoría pictórica del Tractatus, ni adjudicar sin mediación el mismo concepto de proposición a ambos.",
    "report": "Construir un contraste breve: objeto teórico, relación pensamiento-lenguaje y función filosófica del símbolo."
  },
  "H09": {
    "page": "pp. 99–101",
    "focus": "El Wittgenstein tardío invalida la jerarquía del lenguaje",
    "reading": "El Wittgenstein posterior, según Hacker, abandona la creencia temprana en una forma proposicional general y en una metafísica inefable de la representación. La reflexión sobre «pensar» pasa a ser una investigación delimitada entre muchas otras, y ninguna parte de la filosofía ocupa una posición privilegiada que determine todas las demás.",
    "argument": "Si ni Moore, Russell ni el Wittgenstein tardío aceptan la jerarquía que exige Dummett, la definición falla precisamente frente a autores históricos paradigmáticos.",
    "distinction": "La crítica de una teoría universal del simbolismo no significa renunciar a examinar casos particulares de uso lingüístico.",
    "report": "Usar esta transformación interna como contraejemplo a cualquier esencia inmutable de la filosofía analítica."
  },
  "H10": {
    "page": "p. 101",
    "focus": "Análisis: descomposición y límite de la analogía científica",
    "reading": "Hacker parte del sentido literal de analizar, esto es, descomponer un complejo en componentes; alude como analogías al análisis químico y microfísico. Con esa referencia vuelve a los empiristas ingleses, que descomponían ideas complejas para esclarecer conceptos como causalidad, sustancia y yo.",
    "argument": "La analogía prepara la pregunta sobre qué cambió a comienzos del siglo XX: el método de descomposición por sí solo no es nuevo, ni basta para demarcar a la tradición contemporánea.",
    "distinction": "Procedimiento analítico general ≠ fundamento historiográfico suficiente; analogía física ≠ identidad entre objetos físicos e ideas.",
    "report": "Explicar por qué la historia de la filosofía analítica comienza más tarde que la historia del análisis filosófico."
  },
  "H11": {
    "page": "pp. 101–102",
    "focus": "De las ideas psicológicas a lo objetivo",
    "reading": "El análisis de Locke y otros empiristas se dirigía a componentes de ideas e impresiones mentales. En cambio, la nueva escuela nace con una orientación no psicologista: para Russell, la lógica hace posible analizar fenómenos objetivos; para Moore, el análisis conceptual concierne a conceptos independientes del acto psicológico de pensarlos.",
    "argument": "El rasgo antipsicologista sirve para distinguir un origen histórico concreto sin negar que existieran numerosos precursores en la filosofía antigua y moderna.",
    "distinction": "Antipsicologismo no significa negar que haya mente: significa no reducir la validez de conceptos, proposiciones y relaciones a vivencias subjetivas.",
    "report": "En el reporte, señalar la doble raíz objetiva y la diferencia respecto del empirismo clásico."
  },
  "H12": {
    "page": "pp. 101–102",
    "focus": "La tradición como movimiento que cambia internamente",
    "reading": "Hacker propone una explicación dinámica: varias líneas conceptuales conectan fases contiguas, pero no todas permanecen idénticas de principio a fin. Insiste en que un concepto histórico específico tiene más utilidad que una categoría indiscriminada aplicada a toda filosofía argumentativa.",
    "argument": "El principio metodológico resuelve el problema inicial de la clasificación: permite explicar diferencias, influencias y discontinuidades sin borrar el carácter histórico del movimiento.",
    "distinction": "No traducir «dinámico» como una evolución necesaria hacia el positivismo o como sustitución total de una fase por otra.",
    "report": "Utilizar esta tesis para cohesionar la argumentación y valorar la pluralidad posterior."
  },
  "H13": {
    "page": "pp. 102–103",
    "focus": "Dos raíces de Cambridge y derivaciones no unilineales",
    "reading": "Hacker identifica una raíz mooreana orientada al análisis de conceptos objetivos y una russelliana apoyada en la nueva lógica como instrumento para analizar fenómenos objetivos. De ambas emergen desarrollos que interactúan con el Tractatus, el análisis de Cambridge y la escuela vienesa.",
    "argument": "El texto describe influencia mutua, coincidencias temporales y escuelas con orientaciones distintas. La genealogía no autoriza una simple flecha de identidad doctrinal Moore → Russell → Wittgenstein → Viena.",
    "distinction": "Russell lógico-analítico ≠ Moore conceptual, aunque ambos participan en la ruptura antipsicologista.",
    "report": "Organizar el cuerpo del reporte según las dos raíces y describir los contactos posteriores como transformaciones y recepciones."
  },
  "H14": {
    "page": "pp. 103–104",
    "focus": "El adversario inmediato no era el empirismo clásico",
    "reading": "Hacker sitúa los inicios de Moore y Russell frente al predominio universitario del idealismo absoluto británico de fines del siglo XIX, surgido de la recepción del pensamiento hegeliano. La rebelión no fue un simple retorno al empirismo de Locke o Mill: el primer Moore sostuvo un realismo platónico muy alejado de ese empirismo.",
    "argument": "La comparación con Oxford y Cook Wilson evita reducir el episodio al solo Cambridge. La ruptura tiene un contexto institucional e intelectual preciso.",
    "distinction": "Realismo platónico temprano ≠ empirismo ordinario; reacción al idealismo no equivale a adoptar una única escuela realista.",
    "report": "Situar el ambiente británico y el carácter filosófico del adversario antes de desarrollar cada autor."
  },
  "H15": {
    "page": "pp. 104–105",
    "focus": "El realismo pluralista de Moore y la exterioridad del conocer",
    "reading": "Moore rechaza el monismo holista de Bradley y trata conceptos, relaciones y proposiciones como objetivos e independientes de la mente. En el momento temprano que examina Hacker, las proposiciones verdaderas se piensan como parte de la realidad y la verdad como una propiedad simple, no analizable.",
    "argument": "La crítica al idealismo reaparece en su Refutación del idealismo de 1903: conocer algo no es lo mismo que constituirlo mentalmente. La relación cognoscitiva es externa al objeto, y este puede existir con independencia de que sea conocido.",
    "distinction": "No atribuir a todas las etapas de Moore el mismo platonismo inicial; no confundir esta posición temprana con una teoría contemporánea general de correspondencia.",
    "report": "Relacionar ontología pluralista, independencia del objeto y posibilidad de un análisis de conceptos objetivos."
  },
  "H16": {
    "page": "pp. 105–107",
    "focus": "Tres modalidades documentadas del análisis mooreano",
    "reading": "Hacker distingue tres orientaciones que Moore utiliza: descomponer un concepto complejo en constituyentes; inspeccionar aquello que se presenta a la mente al comprender un concepto, incluso si resulta simple e inanalizable; y precisar cómo un concepto se relaciona y distingue de otros. Estas orientaciones explican la imprecisión metodológica inicial del propio Moore.",
    "argument": "La diferencia entre entender una expresión y conocer el análisis del concepto expresado es central: un hablante puede conocer un término y no saber enumerar sus condiciones, componentes ni relaciones. El objeto inicial de análisis no es el idioma sino lo objetivo representado por las expresiones.",
    "distinction": "No colapsar las tres modalidades en una única técnica de descomposición, ni convertir «lo presentado a la mente» en un mero estado psicológico subjetivo.",
    "report": "Presentar las tres modalidades numeradas, con la pregunta de qué produce un análisis en cada caso."
  },
  "H17": {
    "page": "pp. 106–107",
    "focus": "Competencia lingüística, definición verbal y análisis no son lo mismo",
    "reading": "Moore distingue saber lo que significa una expresión, poder usarla o definirla verbalmente y ser capaz de ofrecer un análisis del concepto expresado. Se puede poseer la primera capacidad sin disponer de la tercera.",
    "argument": "Esta distinción impide identificar filosofía con lexicografía. También explica por qué Moore cree posible investigar conceptos sin reducirlos a palabras aun cuando los análisis terminen formulándose lingüísticamente.",
    "distinction": "Competencia ordinaria ≠ conocimiento explícito de la estructura conceptual; «concepto simple» no significa simplemente «palabra no definida».",
    "report": "Incluir un ejemplo conceptual propio solamente como ilustración identificada, no como cita del autor."
  },
  "H18": {
    "page": "pp. 107–108",
    "focus": "De las equivalencias hacia el análisis conectivo",
    "reading": "Hacker observa que la práctica real de Moore acaba utilizando contrastes de expresiones, equivalencias parafrásticas, implicaciones, exclusiones y presuposiciones, aun cuando su teoría inicial prescindía del uso lingüístico. Más adelante, el término análisis conceptual se conserva, pero se abandonan sus supuestos platónicos y la exigencia de descomponer siempre en elementos simples.",
    "argument": "El análisis de posguerra se menciona para mostrar una transformación histórica desde Moore hacia una práctica conectiva, no para sostener que Moore tuviera ya una teoría acabada de lenguaje ordinario.",
    "distinction": "Antecedente histórico ≠ identidad doctrinal; continuidad terminológica del «análisis conceptual» ≠ permanencia de todas sus tesis originales.",
    "report": "Mostrar la tensión entre teoría inicial de Moore y procedimiento efectivo, señalando que Oxford no es aquí objeto del estudio pormenorizado."
  },
  "H19": {
    "page": "pp. 108–109",
    "focus": "La tarea metafísica de describir el universo",
    "reading": "Hacker recuerda una conferencia de Moore de 1910 en la que la filosofía debe ofrecer una descripción general del universo y de los tipos fundamentales de cosas y relaciones. Moore sostiene, desde el sentido común, la existencia de cosas materiales, hechos mentales y vínculos de dependencia espacial o psicológica, sin considerar esas creencias incuestionables.",
    "argument": "La tarea filosófica incluye también preguntar si las creencias del sentido común son verdaderas y cómo pueden justificarse frente a teorías rivales, especialmente las idealistas. La amplitud de esta empresa refuta que sus inicios estuvieran limitados a hablar sobre palabras.",
    "distinction": "Descripción metafísica general ≠ física particular; apelación al sentido común ≠ ausencia de investigación crítica.",
    "report": "Usar como prueba textual de que un fundador analítico concebía un proyecto ontológico y no sólo lingüístico."
  },
  "H20": {
    "page": "pp. 109–110",
    "focus": "Contra Bradley: relaciones externas y pluralidad real",
    "reading": "Russell se opone a la tesis idealista de que las relaciones son internas y pueden reducirse a propiedades de los términos relacionados. El ejemplo de una cosa más larga que otra requiere mantener una relación asimétrica; eliminarla sin residuo hace imposible explicar la propia comparación.",
    "argument": "La irreductibilidad de relaciones matemáticas como «mayor que» o «sucesor de» impulsa a Russell a rechazar el monismo de lo absoluto y a admitir una pluralidad de entidades relacionadas externamente.",
    "distinction": "No identificar términos de una relación con la relación misma; tampoco atribuir todo el cambio únicamente al ejemplo escolar, que ilustra un argumento ontológico más amplio.",
    "report": "Explicar por qué la matemática vuelve filosóficamente decisiva la crítica de la doctrina de las relaciones internas."
  },
  "H21": {
    "page": "pp. 110–111",
    "focus": "Matemáticas: genealogía adicional del método russelliano",
    "reading": "Además de la influencia antiidealista de Moore, Russell recibe el impacto del trabajo de Weierstrass, Dedekind y Cantor sobre fundamentos matemáticos, definición rigurosa, continuidad y límites. Estas técnicas le ofrecen un método para prescindir de postulados metafísicos innecesarios.",
    "argument": "La reconstrucción matemática permite a Russell objetar explicaciones kantianas y hegelianas de aritmética y geometría y cuestionar la supuesta prioridad de lo sintético a priori. Hacker señala que la aplicación filosófica general del método en esta fase no deriva exclusivamente de Frege.",
    "distinction": "Influencia matemática independiente ≠ negación de la importancia posterior de Frege; racionalización de conceptos matemáticos ≠ resolución de toda metafísica.",
    "report": "Desarrollar las dos motivaciones de Russell por separado: ruptura con Bradley y transformación de los fundamentos matemáticos."
  },
  "H22": {
    "page": "pp. 111–112",
    "focus": "Complejidad objetiva y análisis de simples",
    "reading": "En el Russell temprano, especialmente en Los principios de la matemática (1903), las complejidades susceptibles de análisis son objetivas: aunque se distingan conceptualmente, no dependen de la mente del analista. El análisis busca términos simples o indefinibles y presupone que la investigación puede reconocerlos.",
    "argument": "La obra todavía conserva un realismo platónico fuerte y una ambición ontológica. En esta fase la claridad analítica consiste en identificar partes y relaciones de un complejo, no en sostener que cualquier complejidad sea un hecho psicológico.",
    "distinction": "Complejidad conceptual no significa subjetividad del objeto; llegar a elementos indefinibles no equivale a haberlos inventado por convención.",
    "report": "Contrastar con Moore sin borrar su proximidad inicial: ambos reaccionan contra el idealismo, pero el instrumental lógico matemático adquiere mayor relevancia en Russell."
  },
  "H23": {
    "page": "pp. 112–113",
    "focus": "El logicismo y la tentación de una ontología ilimitada",
    "reading": "Hacker vincula a Russell con el programa logicista, alentado también por Peano, que intenta reducir la aritmética a nociones lógicas. La nueva lógica abre posibilidades reconstructivas extraordinarias, pero el Russell temprano adopta simultáneamente una concepción referencial según la cual toda expresión significativa parece requerir algo que la signifique.",
    "argument": "El resultado puede ser una ontología extraordinariamente poblada: relaciones, clases, universales, correlatos de descripciones vacías y objetos lógicos. La fuerza del nuevo método prepara también una rectificación de ese compromiso.",
    "distinction": "Logicismo (fundamentación de la matemática) ≠ teoría referencial (tesis sobre significado y referente), aunque ambos aparecen en la trayectoria del autor.",
    "report": "Presentar por separado logro metodológico y dificultad ontológica; no hacer del logicismo una teoría exclusivamente lingüística."
  },
  "H24": {
    "page": "p. 113",
    "focus": "La referencia como fuente de entidades innecesarias",
    "reading": "El Russell anterior a 1905 acepta que una expresión significativa tiene algún correlato, aunque no sea un objeto actual. Hacker enumera ejemplos como la montaña de oro, dioses homéricos y quimeras, además de universales, clases y objetos lógicos.",
    "argument": "El problema es el salto desde significatividad lingüística hasta admisión ontológica. Russell reformula después su perspectiva bajo una exigencia de realismo más austera; la teoría de las descripciones será la herramienta de ese giro.",
    "distinction": "Expresión gramaticalmente denotativa ≠ garantía de existencia de un referente; la posibilidad de comprender un enunciado no demuestra la existencia de su sujeto aparente.",
    "report": "Formular la pregunta: ¿cómo puede una oración tener sentido sin obligarnos a poblar la realidad con lo nombrado por su apariencia gramatical?"
  },
  "H25": {
    "page": "pp. 113–114",
    "focus": "1905: la descripción como símbolo incompleto",
    "reading": "Según el tramo disponible, la teoría de las descripciones muestra que ciertas frases aparentemente referenciales no significan por sí solas como nombres; su función se aclara dentro de una oración completa. Las expresiones denotativas pueden participar en proposiciones significativas sin que exista una entidad correspondiente a la descripción tomada aisladamente.",
    "argument": "Hacker señala el cambio metodológico: una oración se transforma lógicamente para eliminar el símbolo incompleto y explicitar las condiciones de la proposición. El pasaje disponible llega a desarrollar esta primera consecuencia y comienza una segunda.",
    "distinction": "Símbolo incompleto ≠ expresión carente de función semántica en cualquier contexto; no interpretar la formulación como negación del sentido de la oración entera.",
    "report": "Escribir el ejemplo del rey de Francia como ilustración que Hacker utiliza y, si se desarrolla formalmente existencia/unicidad/predicación, rotular ese desarrollo como reconstrucción de estudio o explicación de clase."
  },
  "H26": {
    "page": "pp. 113–114",
    "focus": "La gramática puede ocultar la forma lógica",
    "reading": "Hacker utiliza «el rey de Francia es calvo» para mostrar que la estructura visible sujeto-predicado de una frase no determina sin más la verdadera forma lógica de la proposición. El análisis revela cuantificadores, identidad y constantes lógicas que la gramática corriente no exhibe explícitamente.",
    "argument": "La consecuencia filosófica es una separación entre el medio lingüístico ordinario y la forma lógica; la oración no debe tomarse como espejo transparente de un objeto o de una ontología. Este desplazamiento transforma el modo de practicar análisis.",
    "distinction": "Forma gramatical ≠ forma lógica; no se sigue de la existencia de una frase descriptiva la existencia de una entidad nombrada por ella.",
    "report": "Precisar las condiciones analíticas al presentar la teoría y distinguir las inferencias del texto de las fórmulas añadidas por PHILOSOPHIA."
  },
  "H27": {
    "page": "p. 114 (continuación pendiente)",
    "focus": "El análisis se vuelve procedimiento transformativo",
    "reading": "La página 114 indica que el análisis de las proposiciones procede mediante la transformación de una oración que contiene una descripción en otra formulación donde ese símbolo incompleto ha sido eliminado. Inmediatamente comienza a extraer una segunda consecuencia: el análisis permite descubrir una forma lógica no reconocible en la superficie gramatical.",
    "argument": "El material recibido termina en medio de esta explicación. Se puede afirmar el giro hacia la paráfrasis formal, pero aún no se debe reconstruir el desarrollo posterior de la teoría a partir de la página 115.",
    "distinction": "La explicación del argumento queda abierta; cualquier referencia a teoría de tipos, construcciones lógicas ulteriores u otras consecuencias debe quedar expresamente fuera del tramo cotejado.",
    "report": "Cerrar el avance parcial del reporte en la transformación lógica de oraciones, indicando que la lectura continúa en la página siguiente."
  }
}

Object.entries(hackerSource95to114).forEach(([id, note]) => {
  const node = hackerNodes.find((candidate) => candidate.id === id)
  if (!node || node.data.classOnly) throw new Error(`Nodo bibliográfico inexistente: ${id}`)
  node.data.sourceCloseReading = {
    ...note,
    kind: 'Paráfrasis cotejada del texto de Hacker',
    boundary: id === 'H27' ? 'La página 114 termina con el argumento en curso. Continuación pendiente de cotejo.' : null,
  }
  if (!node.data.branch.includes('source95to114')) node.data.branch.push('source95to114')
})

// Segundo cotejo directo de las páginas 115–132; preserva IDs y guía del ensayo.
// La primera tanda H00–H27 continúa siendo rastreable en hackerSource95to114.
export const hackerSource115to132 = {
  "H28": {
    "page": "p. 115",
    "focus": "Economía ontológica: descripciones, navaja de Ockham y construcciones lógicas",
    "reading": "La teoría de las descripciones ayuda a Russell a evitar el compromiso con entidades cuya existencia sólo parecía exigida por frases gramaticales. Hacker enlaza esa reducción con la navaja de Ockham y con las construcciones lógicas formadas a partir de elementos de conocimiento directo.",
    "argument": "La desaparición lógica de una descripción en la paráfrasis permite explicar la significatividad sin postular un referente para cada expresión. La reducción ontológica procede al mostrar la construcción, no al negar que comprendamos la oración original.",
    "distinction": "Construcción lógica frente a entidad inferida. Atención filológica: la máxima atribuida a Russell aparece invertida en esta traducción (p. 115), mientras que el desarrollo circundante apunta a sustituir entidades inferidas por construcciones lógicas.",
    "report": "Explicar el avance epistemológico y ontológico de Russell, mencionando expresamente la anomalía de traducción en lugar de copiar la máxima sin examen."
  },
  "H29": {
    "page": "p. 116",
    "focus": "Teoría de tipos: condiciones de significado y prevención de paradojas",
    "reading": "Tras la paradoja de clases descubierta en 1901, Russell introduce restricciones de tipos. Un individuo puede ser miembro de una clase, pero una clase de individuos no puede pertenecer a sí misma como si fuera individuo; la mera apariencia gramatical no garantiza sentido lógico.",
    "argument": "El tipo de una función proposicional delimita qué clases de argumentos admite. Al excluir aplicaciones que mezclan niveles, se impiden formulaciones generadoras de paradojas. Hacker contrasta esta restricción con un error factual ordinario.",
    "distinction": "Ser falso no es carecer de sentido. La atribución de pertenencia a la clase de los leones respecto de sí misma ejemplifica una incompatibilidad de tipos, no una falsedad empírica.",
    "report": "Relacionar la paradoja de Russell con la distinción semántico-lógica entre lo verdadero, lo falso y lo no significativo; mencionar que después los tipos adquirirían una lectura más sintáctica."
  },
  "H30": {
    "page": "pp. 116–117",
    "focus": "Balance: dos orígenes que el giro posterior transforma",
    "reading": "Moore y Russell inauguran dos estilos analíticos diferentes y defienden con firmeza sus posiciones iniciales. Hacker indica que esos fundamentos resultaron reajustables al análisis lógico-lingüístico tras el giro lingüístico.",
    "argument": "El paso a la nueva sección no representa una deducción automática desde las tesis de los fundadores. Describe una continuidad histórica con cambio del objeto y método de investigación.",
    "distinction": "Inauguración del movimiento por Moore y Russell frente a la revolución lingüística posterior asociada al Tractatus.",
    "report": "Concluir la primera etapa contrastando raíz conceptual y raíz lógico-reductiva; formular el giro como transformación posterior, no condición del origen."
  },
  "H31": {
    "page": "pp. 117–119",
    "focus": "Inicio discutido del giro lingüístico",
    "reading": "Hacker recuerda el uso del término por Richard Rorty y reconoce disputas sobre su alcance histórico. Sostiene que el giro comenzó, pero no culminó, en el Tractatus y que no es rasgo definitorio de toda filosofía analítica.",
    "argument": "Su afirmación separa la revolución mooreano-russelliana anterior del cambio de orientación introducido por Wittgenstein. La relevancia del Tractatus no presupone que sus tesis sean totalmente verdaderas.",
    "distinction": "El valor del rótulo histórico no es una esencia metodológica universal; inicio del giro no equivale a culminación del mismo.",
    "report": "Convertir esta distinción en tesis del apartado central del reporte, atribuyéndola expresamente a Hacker."
  },
  "H32": {
    "page": "pp. 117–118",
    "focus": "Frege, Kenny y el principio contextual como antecedente insuficiente",
    "reading": "Anthony Kenny y Michael Dummett sitúan el giro en los estudios fregeanos del número, especialmente al analizar oraciones que contienen expresiones numéricas. Hacker concede importancia a tal método, pero niega que baste para fechar el giro.",
    "argument": "Si basta estudiar la naturaleza de X a través de oraciones que contienen X, Bentham habría realizado ya algo semejante. El criterio no discrimina suficientemente la transformación histórica que Hacker quiere explicar.",
    "distinction": "Principio contextual —explicar por medio de la oración— frente al programa tractariano de los límites de todo sentido posible.",
    "report": "Exponer primero la posición de Kenny/Dummett y luego la objeción de Hacker; no atribuir al autor la tesis que está refutando."
  },
  "H33": {
    "page": "pp. 118–119",
    "focus": "Bentham y los nombres ficticios como precedente de paráfrasis",
    "reading": "Hacker destaca que Bentham concebía la oración completa como unidad decisiva de comunicación y proponía explicar obligaciones y derechos mediante paráfrasis de frases, sin postular entidades ficticias correspondientes.",
    "argument": "El caso demuestra que hay precedentes lingüístico-contextuales y técnicas de eliminación de nombres aparentes antes de Frege y Wittgenstein. Pero un precursor no equivale a fundador del movimiento analítico moderno.",
    "distinction": "Parte de oración y proposición completa; nombre aparentemente referencial y función de la expresión en un enunciado.",
    "report": "Incluir a Bentham como contraejemplo frente a una fecha demasiado amplia para el giro, no como inventor de toda la filosofía analítica."
  },
  "H34": {
    "page": "pp. 119–120",
    "focus": "Representación: proposiciones que figuran estados de cosas",
    "reading": "Según la exposición del Tractatus, el lenguaje hace perceptibles pensamientos; nombres simples representan objetos y las proposiciones elementales son combinaciones de nombres conforme a una sintaxis lógica. Las proposiciones describen situaciones posibles.",
    "argument": "La posibilidad de que una proposición tenga sentido depende de una estructura representacional: la forma lógico-sintáctica de la expresión se corresponde con la estructura de los estados de cosas.",
    "distinction": "Nombre y proposición; objeto y estado de cosas; concatenación de signos y figuración significativa.",
    "report": "Desarrollar el modelo pictórico como supuesto del giro, sin confundir la presentación que Hacker hace de Wittgenstein con una adhesión crítica suya."
  },
  "H35": {
    "page": "p. 120",
    "focus": "Pensamiento, proyección y significación",
    "reading": "Las oraciones expresan pensamientos, pero el pensamiento posee una forma estructurada que representa aquello sobre lo que se piensa. Hacker describe la comprensión como interpretar signos o sonidos dotándolos del contenido significado por el hablante.",
    "argument": "Una mera cadena de signos carece por sí sola del acto proyectivo mediante el cual se piensa un estado de cosas. La significación supone conexiones entre sujeto pensante, signos y mundo, en vez de reducirse a sonidos.",
    "distinction": "Lenguaje del pensamiento frente a medio lingüístico perceptible; signo material frente a proposición significada.",
    "report": "Mostrar que el giro tractariano no reduce simplemente lo mental a las palabras audibles; conserva la función intencional del pensar."
  },
  "H36": {
    "page": "pp. 120–121",
    "focus": "Tautologías: explicación de la necesidad lógica",
    "reading": "Hacker presenta como logro extraordinario del Tractatus la caracterización de las proposiciones lógicas como tautologías: combinaciones funcionales veritativas de proposiciones elementales que no describen hechos empíricos.",
    "argument": "La verdad de las tautologías depende exclusivamente de su forma lógica. Aunque no informan sobre estados de cosas, revelan distintos esquemas de demostración y explican la necesidad lógica sin hechos lógicos adicionales.",
    "distinction": "Proposición empírica con sentido informativo frente a tautología carente de contenido empírico; sin contenido factual no equivale a falsedad.",
    "report": "Conectar este hallazgo con la posterior recepción vienesa y explicar cuidadosamente qué significa la falta de contenido factual."
  },
  "H37": {
    "page": "p. 121",
    "focus": "Axiomas y teoremas sin rango lógico privilegiado",
    "reading": "Si todas las proposiciones lógicas son tautologías del mismo tipo fundamental, los axiomas elegidos en una axiomatización no gozan de una autoevidencia metafísica superior a los teoremas.",
    "argument": "La crítica está dirigida a la concepción fregeano-russelliana de axiomas autoevidentes y teoremas derivados: la diferencia organizativa no funda distintos grados de necesidad lógica.",
    "distinction": "Orden demostrativo del cálculo frente a estatus lógico; axioma elegido frente a verdad tautológica.",
    "report": "Incluir como uno de los contrastes más claros entre el primer Wittgenstein y sus antecesores en filosofía de la lógica."
  },
  "H38": {
    "page": "p. 122",
    "focus": "La filosofía no es ciencia cognitiva: esclarecer sin añadir hechos",
    "reading": "Según Hacker, el Tractatus no concibe la filosofía como ciencia ni como disciplina destinada a producir hipótesis, teorías o verdades generales sobre el universo, la mente o la esencia de las cosas. Su actividad consiste en aclaración lógica.",
    "argument": "La filosofía delimita lo decible y deshace la ilusión de que ciertas pseudoproposiciones sean conocimiento. El entendimiento resultante no debe confundirse con un conjunto nuevo de tesis científicas.",
    "distinction": "Conocimiento proposicional nuevo y entendimiento clarificador; filosofía y ciencia; actividad elucidatoria y doctrina.",
    "report": "Esta es una tesis de Wittgenstein expuesta por Hacker: distinguirla de la concepción metafísica que Moore todavía sostenía."
  },
  "H39": {
    "page": "pp. 122–123",
    "focus": "La crítica del lenguaje elimina confusiones filosóficas",
    "reading": "El Tractatus asigna a la filosofía la labor de resolver ambigüedades y disolver problemas nacidos de características engañosas del lenguaje ordinario; un simbolismo perspicuo exhibiría la estructura lógica.",
    "argument": "El análisis no crea una ciencia rival. Expone cuándo el lenguaje permite pseudoproposiciones por usos ambiguos o por apariencia de estructura que no corresponde a la forma lógica.",
    "distinction": "Esclarecer el simbolismo frente a investigar empíricamente propiedades de objetos; superficie gramatical frente a sintaxis lógica.",
    "report": "En el reporte, explicar el giro metodológico sin decir que Wittgenstein inventó el principio contextual."
  },
  "H40": {
    "page": "pp. 122 y 128",
    "focus": "Decir y mostrar: la metafísica no se elimina del mismo modo en Wittgenstein y Viena",
    "reading": "Para el primer Wittgenstein, lo metafísico no puede exponerse como un conjunto de proposiciones con sentido, pero el propio límite de la representación deja lugar a aquello que se muestra. Hacker insiste en que esta pretensión fue desdeñada por el Círculo.",
    "argument": "La comparación entre el Tractatus y el positivismo lógico depende de ese contraste: restringir lo decible no significa identificar todo lo inexpresable con una superstición definitivamente abolida.",
    "distinction": "Sinsentido proposicional y mostración inefable; crítica de la expresión metafísica frente a programa vienés de demolición de la metafísica.",
    "report": "Destacar por qué atribuir al Tractatus la misma postura antimetafísica del Círculo es un error de lectura."
  },
  "H41": {
    "page": "pp. 123–125",
    "focus": "Seis aspectos sistemáticos del giro tractariano",
    "reading": "Hacker enumera seis transformaciones: límites del pensamiento por los del lenguaje, análisis lógico-lingüístico de oraciones, crítica de pseudoproposiciones metafísicas, examen de la esencia del signo proposicional, análisis del fenómeno por sus descripciones y elucidación simbólica de la verdad lógica.",
    "argument": "No se trata de seis pasos de una prueba deductiva sino de seis dimensiones complementarias de la nueva orientación filosófica.",
    "distinction": "Enumera sin encadenar artificialmente: problema de los límites, método, crítica, signo, representación del fenómeno y necesidad lógica.",
    "report": "Utilizar la lista como eje organizador, desarrollando sus seis subnodos individualmente con p. 124 como localizador principal."
  },
  "H41.1": {
    "page": "p. 124, i",
    "focus": "Límites del lenguaje como vía para los del pensamiento",
    "reading": "El primer aspecto del giro consiste en determinar los límites del pensamiento fijando la frontera entre lenguaje con sentido y sin sentido.",
    "argument": "El cambio metodológico lleva la pregunta por lo pensable a la estructura y límites del simbolismo significativo.",
    "distinction": "Límite del pensamiento frente a contenido de una idea particular; gramática usual frente a sentido lógico.",
    "report": "Exponer la tesis como operación programática del Tractatus, no como método compartido por todos los analíticos."
  },
  "H41.2": {
    "page": "p. 124, ii",
    "focus": "Programa positivo: análisis lógico de oraciones significativas",
    "reading": "El segundo aspecto prescribe que el trabajo filosófico consista en analizar lógicamente proposiciones u oraciones dotadas de sentido.",
    "argument": "A diferencia de investigar objetos abstractos previamente dados, el análisis de proposiciones pasa a ser el método declarado de clarificación.",
    "distinction": "Oración con sentido frente a pseudoproposición; análisis lógico-lingüístico frente a inspección mooreana de conceptos objetivos.",
    "report": "Relacionar esta tarea con la crítica a la definición lingüística universal de Dummett: es una etapa posterior."
  },
  "H41.3": {
    "page": "p. 124, iii",
    "focus": "Programa negativo: mostrar la ilegitimidad de pretensiones metafísicas",
    "reading": "El tercer aspecto busca exhibir cómo las pseudoproposiciones metafísicas rebasan los límites de lo expresable.",
    "argument": "La crítica no refuta empíricamente esas tesis sino que examina si cumplen las condiciones de proposición significativa.",
    "distinction": "Falsedad empírica frente a carencia de sentido por transgresión de los límites lógicos.",
    "report": "Evitar traducir esa crítica a una negación científica de la metafísica."
  },
  "H41.4": {
    "page": "p. 124, iv",
    "focus": "La forma proposicional general y el signo",
    "reading": "El cuarto aspecto sitúa la esencia del signo proposicional en el centro de la investigación; Hacker remite a la idea de describir cualquier proposición de cualquier lenguaje sígnico.",
    "argument": "La aclaración de la forma general aspira a delimitar qué puede ser un signo capaz de sentido.",
    "distinction": "Gramática empírica de un idioma frente a condiciones generales de toda proposición.",
    "report": "Usar este nodo para justificar el carácter radical del giro, mucho más amplio que una regla contextual aislada."
  },
  "H41.5": {
    "page": "p. 124, v",
    "focus": "Fenómeno investigado por análisis de descripciones",
    "reading": "El quinto aspecto afirma que investigar las formas lógicas del fenómeno requiere analizar las expresiones que lo describen; la sintaxis lógica sería isomorfa con la estructura del mundo.",
    "argument": "La investigación de la realidad pasa metodológicamente por los recursos representacionales del lenguaje, sin reducir el fenómeno a una palabra.",
    "distinction": "Descripción del fenómeno frente al fenómeno como objeto; correspondencia lógico-estructural y semejanza verbal superficial.",
    "report": "Explicar el programa de isomorfía como tesis del Tractatus que Hacker después considera sustentada por una metafísica errónea."
  },
  "H41.6": {
    "page": "pp. 124–125, vi",
    "focus": "La verdad lógica elucidada por el simbolismo",
    "reading": "El sexto aspecto considera la elucidación de la naturaleza de la verdad lógica el logro mayor del Tractatus: desde los símbolos mismos se reconocería la verdad de las proposiciones lógicas.",
    "argument": "El programa pretende explicar la necesidad sin recurrir a axiomas privilegiados ni a objetos lógicos especiales.",
    "distinction": "Verdad lógica tautológica frente a generalización empírica.",
    "report": "Cerrar la lista conectando este punto con las diferencias respecto de Frege/Russell y la posterior apropiación vienesa."
  },
  "H42": {
    "page": "p. 125",
    "focus": "Evaluación de Hacker: metafísica errónea y giro históricamente fecundo",
    "reading": "Hacker sostiene que la metafísica del símbolo del Tractatus era errónea, mencionando sus tesis sobre nombres simples, relaciones y hechos como condiciones rígidas de representación.",
    "argument": "La importancia histórica del giro y la corrección filosófica de sus fundamentos son asuntos diferentes: el Tractatus introdujo una orientación lingüística decisiva aunque su teoría general del símbolo resultara insostenible.",
    "distinction": "Influencia histórica no demuestra verdad de una doctrina; diagnóstico de Hacker frente a proposiciones del Tractatus.",
    "report": "Construir una valoración equilibrada en el reporte, reconociendo el impacto sin atribuirle a Hacker adhesión doctrinal."
  },
  "H43": {
    "page": "pp. 125–126",
    "focus": "Dos recepciones inmediatas del Tractatus",
    "reading": "Hacker distingue la influencia en el atomismo lógico de Russell y el análisis de Cambridge de entreguerras, y la influencia decisiva sobre el Círculo de Viena. El Tractatus actúa como fuente compartida para desarrollos diferentes.",
    "argument": "El análisis de Cambridge se interesa por dilucidar conocimiento existente; los vieneses extraen cinco programas propios, a menudo mediante lecturas selectivas.",
    "distinction": "Influencia doctrinal compartida frente a identidad metodológica o filosófica entre escuelas.",
    "report": "Abrir el último apartado mostrando dos ramas sin inventar una derivación lógica Cambridge → Viena."
  },
  "H44": {
    "page": "p. 126",
    "focus": "Cambridge: aclaración del conocimiento ya poseído",
    "reading": "Ramsey, Wisdom, Stebbing y otros desarrollan prácticas de análisis influidas por el Tractatus. Para esa corriente la filosofía debe aclarar conocimiento mediante análisis lógico, no aportar descubrimientos científicos.",
    "argument": "El trabajo apunta a la forma lógica de los hechos y a reconstrucciones reductivas en términos de elementos primitivos de experiencia; acepta que las proposiciones lógicas sean tautologías.",
    "distinction": "Elucidación del conocimiento frente a aumento de datos; tradición de Cambridge frente a los programas de Viena.",
    "report": "Mencionar autores de la recepción como contexto del texto y evitar adjudicar a todos una doctrina idéntica."
  },
  "H45": {
    "page": "pp. 126–127",
    "focus": "Viena I: filosofía como análisis lógico y diferencias sobre sintaxis",
    "reading": "El primer punto positivista acepta la filosofía no cognitiva y la convierte en análisis lógico del lenguaje científico. Carnap entiende que lenguajes y sintaxis pueden construirse convencionalmente.",
    "argument": "La cercanía histórica al Tractatus es acompañada por una diferencia esencial: para el primer Wittgenstein la lógica del lenguaje no queda a voluntad de quien construye una notación.",
    "distinction": "Análisis lógico del lenguaje científico frente a forma lógica esencial de todo lenguaje posible.",
    "report": "Explicar cómo una herencia real puede contener una reinterpretación discrepante respecto del precursor."
  },
  "H46": {
    "page": "pp. 127–128",
    "focus": "Viena II: abolición de la metafísica y límite de la semejanza",
    "reading": "El Círculo sostiene que los enunciados metafísicos carecen de contenido cognitivo y deben quedar fuera de la filosofía. Hacker contrasta esto con lo inefable que, para el Wittgenstein temprano, se muestra aunque no pueda formularse.",
    "argument": "La coincidencia en hablar de pseudoproposiciones oculta una diferencia de propósito. La recepción positivista deja de lado la dimensión de mostración que Wittgenstein consideraba relevante.",
    "distinction": "Antimetafísica vienesa frente a delimitación tractariana de lo decible; tener una frase sin sentido no equivale a probar que nada pueda mostrarse.",
    "report": "Evitar atribuir la tesis de eliminación global de lo metafísico al propio Wittgenstein sin distinguir su postura."
  },
  "H47": {
    "page": "p. 128",
    "focus": "Viena III: verificación y significado cognitivo",
    "reading": "El principio de verificación se convierte en criterio positivista: el significado de una proposición está ligado al método de verificarla. La discusión tiene antecedentes en contactos con Wittgenstein de 1929–1930 y en relecturas del Tractatus.",
    "argument": "Hacker diferencia ese criterio de la estrategia del Tractatus, centrada en la imposibilidad de representar verdades atómicas necesarias y en los límites formales del sentido.",
    "distinction": "Método de verificación empírica frente a condiciones lógicas de representación y significación.",
    "report": "Describir verificabilidad como tesis de Viena, no como conclusión literal de la teoría de la representación del Tractatus."
  },
  "H48": {
    "page": "pp. 128–129",
    "focus": "Viena IV: empirismo consistente y verdades necesarias",
    "reading": "El Círculo busca explicar la necesidad de lógica y matemáticas dentro de un empirismo consistente. La lectura vienesa del Tractatus afirma que las proposiciones lógicas son tautologías y que el razonamiento apriorístico opera por transformación simbólica.",
    "argument": "En geometría distinguen cálculo puro y aplicación empírica; en aritmética conservan aspiraciones logicistas. Rechazan recurrir a objetos lógicos o axiomas autoevidentes para la necesidad.",
    "distinction": "Necesidad lógico-matemática frente a contenido empírico; aplicación geométrica y formalismo simbólico.",
    "report": "Mostrar que la inspiración tractariana de la tautología no resuelve automáticamente todas las dificultades del empirismo."
  },
  "H49": {
    "page": "pp. 129–130",
    "focus": "Convencionalismo de Viena contra la lógica trascendental del Tractatus",
    "reading": "Los vieneses explican la verdad lógica mediante las convenciones de uso de constantes lógicas; Hacker insiste en que Wittgenstein sostenía lo contrario: las posibilidades lógicas proceden de la bipolaridad esencial de las proposiciones y de la forma del mundo.",
    "argument": "El resultado es un desacuerdo filosófico profundo oculto por compartir vocabulario sobre tautologías y símbolos.",
    "distinction": "Convención arbitraria del cálculo frente a estructura esencial de cualquier lenguaje posible.",
    "report": "Tratarlo como discrepancia principal entre las escuelas, no como una opinión de Wittgenstein que se deriva de Carnap."
  },
  "H50": {
    "page": "p. 130",
    "focus": "Viena V: unidad de las ciencias como proyecto reductivo",
    "reading": "El quinto tema vienés busca reducir los enunciados cognitivamente significativos de ciencias distintas a una matriz común de proposiciones básicas, contra la diversidad metodológica de ciencias naturales, sociales e históricas.",
    "argument": "El Tractatus no desarrolla expresamente la unidad de la ciencia; su análisis funcional veritativo facilita la hipótesis reductiva de los positivistas, aunque el paso adicional es suyo.",
    "distinction": "Base lógica que posibilita una tesis frente a defensa explícita de la unidad científica.",
    "report": "Explicar el alcance monista y reduccionista de la aspiración vienesa sin atribuírsela sin más al Tractatus."
  },
  "H51": {
    "page": "p. 130",
    "focus": "Predominio histórico del positivismo lógico y su límite",
    "reading": "Hacker atribuye gran predominio histórico al positivismo lógico, por su carácter vigoroso entre guerras y por la emigración de sus representantes a Estados Unidos, donde influirían en la filosofía de posguerra.",
    "argument": "La importancia histórica de la corriente no implica que sus soluciones fueran sostenibles. Inmediatamente se enumeran problemas internos y externos.",
    "distinction": "Influencia institucional y éxito social frente a solidez epistemológica.",
    "report": "Situar el colapso después de reconocer el peso histórico del movimiento, sin reescribir la historia como fracaso total."
  },
  "H52": {
    "page": "pp. 130–131",
    "focus": "Ocho dificultades: diagnóstico plural del programa vienés",
    "reading": "Hacker enumera ocho objeciones independientes: fracaso de base reductiva, dilema entre solipsismo y behaviorismo, extensionalidad, verificación, convencionalismo, supuestos de lógica clásica, unidad de las ciencias y estrechez de la concepción de filosofía.",
    "argument": "La serie de críticas afecta diferentes supuestos y ambiciones; no debe ilustrarse con una cadena donde cada objeción se deduce de la anterior.",
    "distinction": "Una enumeración de problemas convergentes no es una demostración secuencial de ocho premisas.",
    "report": "Usar el nodo padre como mapa de diagnóstico y desarrollar cada objeción en su subnodo con el localizador preciso."
  },
  "H52.1": {
    "page": "pp. 130–131, i",
    "focus": "Fracaso de una base reductiva única",
    "reading": "Ninguna explicación reductiva convincente abarcó amplios dominios del discurso, y la elección de base abrió una disputa entre fenomenismo y fisicalismo.",
    "argument": "Sin base satisfactoria se debilita el intento de traducir o reconstruir toda la ciencia desde un conjunto mínimo de enunciados.",
    "distinction": "Exigencia programática de reducir frente a éxito efectivo de una reducción.",
    "report": "Evaluar como dificultad interna del programa; no confundir disputa de bases con refutación de toda teoría científica."
  },
  "H52.2": {
    "page": "p. 131, ii",
    "focus": "Solipsismo metodológico y behaviorismo radical",
    "reading": "El reductivismo positivista comprometía al programa ortodoxo con dos alternativas que Hacker considera inaceptables: el solipsismo metodológico o el behaviorismo radical.",
    "argument": "El intento de fijar una base estricta para discurso psicológico o experiencial conduce a opciones que empobrecen la caracterización de la mente.",
    "distinction": "Experiencia privada como fundamento exclusivo frente a reducción conductual excesiva.",
    "report": "Presentar ambos como los polos del problema generado por la estrategia reductiva, no como tesis defendidas por Hacker."
  },
  "H52.3": {
    "page": "p. 131, iii",
    "focus": "Dificultad de defender la extensionalidad",
    "reading": "Hacker señala que la tesis de la extensionalidad fue muy difícil de sostener de manera general.",
    "argument": "El ideal de traducir los diversos contextos significativos a términos estrictamente extensionales encuentra resistencias; el texto en este punto enuncia la dificultad sin un tratado específico.",
    "distinction": "Contexto extensional frente a contextos cuya sustitución preserva o altera sentido.",
    "report": "No completar con una extensa teoría modal ajena al pasaje: limitarse al diagnóstico explícito y marcar cualquier ampliación como externa."
  },
  "H52.4": {
    "page": "p. 131, iv",
    "focus": "El criterio de verificabilidad no consigue formulación hermética",
    "reading": "Ni el principio de verificación ni la verificabilidad como criterio de significatividad lograron una formulación que evitara problemas internos.",
    "argument": "La herramienta con la que se pretendía distinguir entre proposiciones significativas y pseudoproposiciones no alcanzó precisión estable.",
    "distinction": "Proyecto de demarcación empírica frente a criterio plenamente formulado y defendible.",
    "report": "Vincular la objeción con Viena III sin presentar una refutación técnica no desarrollada por Hacker aquí."
  },
  "H52.5": {
    "page": "p. 131, v",
    "focus": "Insuficiencia del convencionalismo para la necesidad",
    "reading": "Respecto de las verdades necesarias, el convencionalismo positivista demostró ser inadecuado, según el diagnóstico de Hacker.",
    "argument": "La convención que fija signos no basta para resolver sin dificultades la naturaleza de la necesidad lógica.",
    "distinction": "Elección de notación frente a estructura de la necesidad; explicación convencional frente a explicación trascendental del Tractatus.",
    "report": "Vincular con H49 y la crítica previa a la interpretación vienesa de la lógica."
  },
  "H52.6": {
    "page": "p. 131, vi",
    "focus": "La lógica clásica y el lenguaje ordinario no son intercambiables",
    "reading": "Hacker cuestiona que los operadores del cálculo representen perfectamente sus correlatos ordinarios y que los patrones inferenciales autorizados por la lógica clásica agoten las inferencias válidas del lenguaje natural.",
    "argument": "Una exclusión conceptual ordinaria puede justificar una inferencia no capturada de inmediato por la sola forma conectiva estándar; la pretensión de neutralidad metodológica resulta discutible.",
    "distinction": "Sistema formal elegido frente a articulación efectiva de inferencias en el lenguaje ordinario.",
    "report": "Distinguir la tesis del autor de ejemplos inventados para enseñarla; evitar presentar un ejemplo de aula como cita de p. 131."
  },
  "H52.7": {
    "page": "p. 131, vii",
    "focus": "Críticas a unidad científica y monismo metodológico",
    "reading": "La idea de una ciencia única y un lenguaje científico único recibe ataques desde múltiples direcciones, especialmente desde hermenéutica y desarrollos del Wittgenstein posterior.",
    "argument": "El pluralismo de prácticas y métodos impugna una reducción uniforme de todos los discursos científicos significativos.",
    "distinction": "Unidad reduccionista de la ciencia frente a diversidad de ciencias y formas de investigación.",
    "report": "Relacionar con Viena V, pero no atribuir al Tractatus la doctrina explícita de unidad de ciencias."
  },
  "H52.8": {
    "page": "p. 131, viii",
    "focus": "Estrechez de la filosofía como análisis de lenguaje científico",
    "reading": "Caracterizar toda filosofía como análisis lógico del lenguaje de la ciencia excluye injustificadamente ética, derecho, política y estética. Hacker critica también la superficialidad de ciertas incursiones positivistas en ética.",
    "argument": "La reacción al emotivismo y el resurgimiento posterior de filosofía jurídica y política exhiben la insuficiencia de un ideal filosófico tan estrecho.",
    "distinction": "Lenguaje científico frente a amplitud legítima de problemas filosóficos y discursos normativos.",
    "report": "Esta objeción permite desarrollar una conclusión crítica propia sin fingir que Hacker propone una doctrina política específica."
  },
  "H53": {
    "page": "p. 132",
    "focus": "Salida hacia análisis conectivo y terapéutico",
    "reading": "Hacker concluye que el análisis como traducción estricta o reducción carnapiana no sirve para todos los propósitos de clarificación. La siguiente fase británica se caracteriza por el análisis conectivo y terapéutico, bajo nueva influencia de Wittgenstein y con Oxford como centro.",
    "argument": "La salida no es abolición del análisis, sino revisión de su función: de reducir todo discurso a una base única a esclarecer conexiones, usos y confusiones. Los logros de Oxford se declaran materia de otro estudio.",
    "distinction": "Continuidad histórica frente a identidad doctrinal; estudio sincrónico de una tradición frente a nueva historia no desarrollada aquí.",
    "report": "Cerrar el reporte con una valoración: el ensayo explica la evolución del análisis, pero deliberadamente no reconstruye en detalle la escuela oxoniense."
  }
}

Object.entries(hackerSource115to132).forEach(([id, note]) => {
  const node = hackerNodes.find((candidate) => candidate.id === id)
  if (!node || node.data.classOnly) throw new Error(`Nodo bibliográfico no localizable: ${id}`)
  node.data.sourceCloseReading = { ...note, kind: 'Paráfrasis cotejada del texto de Hacker', boundary: null }
  if (!node.data.branch.includes('source95to132')) node.data.branch.push('source95to132')
})

// Los tres nodos del corte p. 114 continúan en p. 115; no duplicarlos.
export const hackerSource114to115Continuation = {
  H25: {
    page: 'pp. 114–115',
    focus: 'Símbolos incompletos y análisis de la oración completa',
    reading: 'El análisis sustituye la oración con expresión denotativa por una formulación donde el símbolo incompleto se elimina. Su sentido depende de la oración y no de una entidad asociada al sujeto gramatical.',
    argument: 'Esa paráfrasis cambia la interpretación del análisis: no basta descomponer objetos supuestos, hay que hacer explícita la forma lógica que la gramática oculta.',
    distinction: 'Función semántica contextual de una descripción frente a significado referencial independiente de un nombre.',
    report: 'Explicar el tránsito desde la teoría referencial abundante a la paráfrasis que evita postulaciones ontológicas superfluas.',
  },
  H26: {
    page: 'pp. 114–115',
    focus: 'Forma del hecho y apariencia gramatical',
    reading: 'Hacker precisa que Russell pasa a distinguir la forma gramatical de la oración de la forma lógica del hecho; la estructura de la realidad puede diferir completamente de su expresión ordinaria.',
    argument: 'La distinción se vuelve una consecuencia central de la teoría de las descripciones y pone al simbolismo bajo examen crítico.',
    distinction: 'Estructura lingüística superficial frente a forma lógica de los hechos.',
    report: 'Mostrar por qué para Russell el análisis lógico transforma tanto la ontología como la teoría del significado.',
  },
  H27: {
    page: 'pp. 114–115',
    focus: 'El instrumento lógico descubre formas no visibles en la gramática',
    reading: 'La lógica adquiere predominio filosófico porque permite penetrar la gramática engañosa y esclarecer la forma lógica de las cosas.',
    argument: 'La técnica lógica habilita un análisis crítico que presiona a Russell hacia una paráfrasis intralingüística de oraciones, aunque él todavía entienda la investigación como metafísica de hechos o proposiciones.',
    distinction: 'Lógica como instrumento ontológico frente al análisis como aclaración del simbolismo lingüístico.',
    report: 'No afirmar que Russell defendió desde el principio una teoría puramente lingüística del análisis; el pasaje registra una transición.',
  },
}
Object.entries(hackerSource114to115Continuation).forEach(([id, note]) => {
  const node = hackerNodes.find((candidate) => candidate.id === id)
  if (!node?.data.sourceCloseReading) throw new Error(`No consta el primer tramo ${id}`)
  node.data.sourceContinuation = { ...note, kind: 'Continuación cotejada, páginas 114–115' }
  node.data.sourceCloseReading.page = note.page
  node.data.sourceCloseReading.boundary = null
})
hackerNodes.filter((node) => !node.data.classOnly && node.data.sourceCloseReading).forEach((node) => {
  if (!node.data.branch.includes('source95to132')) node.data.branch.push('source95to132')
})

// Las clases del 28 de septiembre y 7 de octubre se enlazan al texto existente.
// Son capas docentes, no nuevos pasajes atribuidos a Hacker.
const hackerClassCrosswalk = {
  class28: {
    date: '28 sep 2026',
    route: '/semestre/5/filosofia-analitica/clase/28-septiembre',
    nodes: {
      H24: ['REFERENCIA Y ONTOLOGÍA', 'La clase recupera la teoría referencial inicial de Russell y su compromiso ontológico abundante, antes del análisis de las descripciones.'],
      H25: ['DESCRIPCIONES DEFINIDAS', 'El ejemplo del actual rey de Francia se analiza en existencia, unicidad y predicación; no requiere admitir una entidad inexistente.'],
      H26: ['GRAMÁTICA Y FORMA LÓGICA', 'La forma superficial sujeto-predicado no garantiza que la proposición tenga esa misma forma lógica.'],
      H27: ['ANÁLISIS Y PARÁFRASIS', 'La paráfrasis lógico-cuantificacional aclara la proposición y sus compromisos ontológicos.'],
      H28: ['COMPROMISO ONTOLÓGICO', 'El robusto sentido de la realidad se estudia como consecuencia del abandono de entidades postuladas por la gramática superficial.'],
      H29: ['DESCRIPCIÓN Y NOMBRES', 'La sesión distingue nombres ordinarios, descripciones y casos de nombres lógicamente propios; es explicación del curso, no cita de Hacker.'],
    },
  },
  class07oct: {
    date: '7 oct 2026',
    route: '/semestre/5/filosofia-analitica/clase/7-octubre',
    nodes: {
      H38: ['ACLARACIÓN EN VEZ DE CIENCIA', 'La sesión contrapone filosofía como clarificación lógica a una disciplina que formule hipótesis empíricas.'],
      H40: ['DECIR Y MOSTRAR', 'Se contrasta el límite de lo decible con la idea de inexistencia; el aula recupera lo místico y la imagen de la escalera.'],
      H43: ['RECEPCIÓN DIFERENCIADA', 'El Círculo de Viena recibe y transforma al Tractatus: influencia histórica no significa identidad doctrinal.'],
      H45: ['PRIMER TEMA DE VIENA', 'La filosofía como análisis lógico tiene función crítica y esclarecedora en el programa positivista.'],
      H46: ['SEGUNDO TEMA DE VIENA', 'La metafísica se rechaza como discurso carente de significado cognoscitivo, sin equivaler a una prueba ontológica de inexistencia.'],
      H47: ['TERCER TEMA DE VIENA', 'La verificación se expone como criterio de significatividad cognoscitiva; la crítica de Popper se anticipa sin desarrollarse aquí.'],
      H48: ['CUARTO TEMA DE VIENA', 'Las verdades lógico-matemáticas se interpretan como analíticas o tautológicas dentro del empirismo consistente.'],
      H49: ['CARNAP FRENTE A WITTGENSTEIN', 'La clase señala el contraste entre convencionalismo de lenguajes formales y la lógica trascendental del Tractatus.'],
    },
  },
}

Object.entries(hackerClassCrosswalk).forEach(([branch, { date, route, nodes }]) => {
  Object.entries(nodes).forEach(([id, [label, note]]) => {
    const node = hackerNodes.find((item) => item.id === id)
    if (!node) throw new Error(`No existe el nodo de enlace docente ${id}`)
    if (!node.data.branch.includes(branch)) node.data.branch.push(branch)
    node.data.additionalClassNotes = [
      ...(node.data.additionalClassNotes || []),
      { date, route, label, note, linkLabel: 'Abrir clase documentada ↗' },
    ]
  })
})

// Capa editorial de lectura sencilla: distinta de la fuente primaria y de la voz docente.
const hackerPlainDictionary = { ...hackerPlainArticle, ...hackerPlainClasses }
const hackerPlainIds = new Set(hackerNodes.map((node) => node.id))
for (const node of hackerNodes) {
  const explanation = hackerPlainDictionary[node.id]
  if (typeof explanation !== 'string' || explanation.trim().length < 90) {
    throw new Error(`Falta la explicación sencilla específica del nodo ${node.id}`)
  }
  node.data.plainLanguage = explanation
  node.data.plainLanguageSource = 'Aclaración didáctica de PHILOSOPHIA; no es cita literal ni opinión atribuida al profesor.'
}
for (const id of Object.keys(hackerPlainDictionary)) {
  if (!hackerPlainIds.has(id)) throw new Error(`Explicación sencilla sin nodo: ${id}`)
}

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
  'HC23-01','HC23-02','HC23-03','HC23-04','HC23-05','HC23-06','HC23-07','HC23-08','HC23-09','HC23-10','HC23-11','HC23-12',
  'HC30-01','HC30-02','HC30-03','HC30-04','HC30-05','HC30-06','HC30-07','HC30-08','HC30-09','HC30-10',
  'HC14O-01','HC14O-02','HC14O-03','HC14O-04','HC14O-05','HC14O-06',
  'HC14O-07','HC14O-08','HC14O-09','HC14O-10','HC14O-11','HC14O-12',
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
  'Ampliaciones de clase',
]

function phaseFor(id) {
  const i = order.indexOf(id)
  if (nodeMap.get(id)?.data.classOnly) return 'Ampliaciones de clase'
  if (i <= 13) return 'Tesis y definición'
  if (i <= 19) return 'Moore'
  if (i <= 30) return 'Russell'
  if (i <= 48) return 'Tractatus'
  if (id === 'H43' || id === 'H44') return 'Cambridge'
  if (i <= 58) return 'Viena'
  return 'Colapso y salida'
}

// La guía bibliográfica solo recorre el ensayo; la integral incluye las capas docentes.
const articleReadingOrder = order.filter((id) => !nodeMap.get(id)?.data.classOnly)
export const hackerGuidedRoute = articleReadingOrder.map((id, index) => {
  const node = nodeMap.get(id)
  const next = nodeMap.get(articleReadingOrder[index + 1])
  return {
    id,
    phase: phaseFor(id),
    why: node?.data.role || '',
    // Reading adjacency alone never establishes philosophical entailment.
    nextQuestion: node?.data.nextQuestion ||
      (next ? `Siguiente tema de lectura: ${next.data.title}` : 'Fin de la ruta del artículo.'),
  }
})

export const hackerCompleteGuidedRoute = order.map((id, index) => {
  const node = nodeMap.get(id)
  const next = nodeMap.get(order[index + 1])
  return {
    id,
    phase: phaseFor(id),
    why: node?.data.role || '',
    nextQuestion: node?.data.nextQuestion ||
      (next ? `Siguiente tema de estudio (orden editorial): ${next.data.title}` : 'Fin de la guía integral.'),
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
