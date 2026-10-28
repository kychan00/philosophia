import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { Background, Controls, Handle, MarkerType, MiniMap, Position, ReactFlow, ReactFlowProvider } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import '../components/philosophy/system2d/System2DTheme.css'
import { SYSTEM_2D_THEME, resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme'
import './MethodsClass19Oct.css'
import './MethodsClass21Oct.css'
import './MethodsPhenomenologySystem2D.css'

const chapters = [
  { id: 'problema', number: 'I', title: 'Del hecho al problema', question: '¿Qué cambia cuando dejamos de medir un hecho y preguntamos cómo se vive?', before: 'La clase compara investigación cuantitativa y cualitativa.', after: 'La pregunta conduce a la intencionalidad y al método fenomenológico.' },
  { id: 'fundamento', number: 'II', title: 'Intencionalidad y reducción', question: '¿Cómo se vuelve método la relación entre conciencia y fenómeno?', before: 'Ya existe un caso delimitado y una pregunta por su significado vivido.', after: 'La correlación intencional permite analizar cuerpo, espacio y tiempo.' },
  { id: 'vivencia', number: 'III', title: 'El mundo vivido', question: '¿Cómo se transforma una amenaza digital en material fenomenológico?', before: 'Epojé y noesis/noema fijan la actitud de análisis.', after: 'Las unidades de sentido permiten ensayar variaciones eidéticas.' },
  { id: 'rigor', number: 'IV', title: 'Variación, estructura y rigor', question: '¿Cómo se buscan invariantes sin inventar una esencia?', before: 'La experiencia fue descrita en sus dimensiones corporales, espaciales y temporales.', after: 'La estructura provisional abre el problema epistemológico del testimonio.' },
  { id: 'limite', number: 'V', title: 'Hermenéutica y defensa', question: '¿Qué límites tiene la reducción y cómo se defiende el rigor del método?', before: 'La síntesis fenomenológica permanece provisional y explícita sus límites.', after: 'La exposición cierra mostrando qué aporta la fenomenología a la investigación filosófica.' },
]

const entries = [
  {
    id: 'p1', chapter: 'problema', title: 'Medir no es comprender', short: 'Un mismo hecho admite preguntas numéricas y preguntas por el significado vivido.',
    source: 'Clase 26 de octubre · comparación cuantitativo / cualitativo; reconstrucción editorial de exposición.',
    points: ['Una investigación cuantitativa puede preguntar por frecuencia, porcentaje o asociación.', 'La fenomenología pregunta cómo se da una experiencia y qué significa para quien la vive.', 'La oposición es pedagógica: medir y comprender responden preguntas distintas.', 'No se afirma que un enfoque sea universalmente superior al otro.'],
    analysis: 'El punto de partida de la exposición es metodológico: cambiar la pregunta cambia el objeto que se investiga. La fenomenología no reemplaza toda medición; delimita otro nivel de análisis.',
    simple: 'Contar cuántas veces ocurre algo no dice todavía cómo se siente vivirlo.',
    projection: 'Un mismo hecho puede medirse o comprenderse. La fenomenología elige la segunda pregunta.'
  },
  {
    id: 'p2', chapter: 'problema', title: 'Estudio de caso ≠ fenomenología', short: 'El diseño técnico organiza el acceso; la fenomenología orienta la pregunta filosófica.',
    source: 'Consigna reconstruida de la exposición + organización editorial PHILOSOPHIA.',
    points: ['El estudio de caso delimita caso, participantes, técnicas y registro.', 'La fenomenología orienta el análisis hacia el aparecer de la experiencia.', 'Ambos niveles pueden combinarse sin identificarse.', 'La frase exacta del profesor no se conserva como cita literal.'],
    analysis: 'Esta distinción evita confundir una estrategia de investigación con una tradición filosófica. El caso organiza el material; la fenomenología determina cómo será interrogado.',
    simple: 'El estudio de caso dice cómo reunir el material. La fenomenología dice qué queremos comprender de ese material.',
    projection: 'Técnicamente: estudio de caso. Filosóficamente: fenomenología.'
  },
  {
    id: 'p3', chapter: 'problema', title: 'Caso conductor · amenaza digital', short: 'Un mensaje amenazante reorganiza cuerpo, espacio, tiempo y expectativa.',
    source: 'Clases 19 y 21 de octubre · miedo digital; caso unificado para la exposición.',
    points: ['Una persona recibe un mensaje que interpreta como amenazante.', 'El agresor no está físicamente presente.', 'Aun así pueden aparecer vigilancia, tensión corporal y anticipación.', 'El caso es didáctico; no representa un estudio empírico concluido.'],
    analysis: 'El caso concentra los conceptos trabajados en clase y permite mostrar el método en operación sin cambiar de ejemplo a cada paso.',
    simple: 'Alguien puede estar lejos y, aun así, un mensaje puede hacer que usted sienta el peligro encima.',
    projection: 'Este será nuestro laboratorio: una amenaza que llega por pantalla.'
  },
  {
    id: 'p4', chapter: 'problema', title: 'Pregunta rectora', short: '¿Cómo convertir una experiencia concreta en objeto de investigación filosófica rigurosa?',
    source: 'Reconstrucción editorial de estudio a partir del curso.',
    points: ['La pregunta exige descripción y procedimiento.', 'Debe evitar reducir la experiencia a opinión privada.', 'Debe evitar confundir relato con explicación causal ya probada.', 'Debe hacer explícitos los límites del investigador.'],
    analysis: 'Toda la exposición puede entenderse como respuesta progresiva a esta pregunta. Cada nodo posterior añade una operación o un límite.',
    simple: '¿Cómo pasamos de “me pasó esto” a una investigación filosófica seria?',
    projection: 'La exposición responde una sola pregunta: ¿cómo investigar rigurosamente una experiencia?'
  },

  {
    id: 'f1', chapter: 'fundamento', title: 'Brentano · intencionalidad', short: 'La vida psíquica está orientada hacia algo.',
    source: 'Clase 26 de octubre · recomendación de Brentano y explicación de intencionalidad.',
    points: ['Temer es temer algo; recordar es recordar algo; esperar es esperar algo.', 'Intencionalidad no significa simplemente proponerse realizar una acción.', 'La noción funciona como antecedente para la fenomenología husserliana.', 'La exposición no pretende resumir exhaustivamente la psicología de Brentano.'],
    analysis: 'La intencionalidad permite abandonar la idea de una conciencia cerrada sobre sí misma: la experiencia tiene una dirección y un correlato.',
    simple: 'La conciencia nunca está completamente vacía: siempre está ocupada con algo.',
    projection: 'Antes de Husserl: la conciencia ya aparece como dirigida hacia algo.'
  },
  {
    id: 'f2', chapter: 'fundamento', title: 'Husserl · giro metodológico', short: 'La pregunta pasa de qué es el objeto a cómo se da en la experiencia.',
    source: 'Clases 7, 14 y 26 de octubre · método fenomenológico.',
    points: ['El método prioriza descripción antes que explicación automática.', 'El fenómeno se examina en su modo de darse.', 'La reducción modifica la actitud del investigador.', 'No se equipara fenomenología con introspección psicológica.'],
    analysis: 'El giro husserliano organiza la exposición: no basta identificar un objeto; hay que analizar la correlación entre acto y sentido.',
    simple: 'No preguntamos primero “¿qué es esto en sí?”, sino “¿cómo aparece para quien lo vive?”.',
    projection: 'Husserl convierte la pregunta por la experiencia en un método.'
  },
  {
    id: 'f3', chapter: 'fundamento', title: 'Epojé · suspender', short: 'Poner entre paréntesis explicaciones automáticas para describir primero.',
    source: 'Clases 7 y 21 de octubre · epojé y depuración de la actitud natural.',
    points: ['No significa negar que el mundo exista.', 'No significa borrar conocimiento ni destruir testimonios.', 'Suspende provisionalmente causas, diagnósticos y juicios previos.', 'Permite atender a la forma concreta en que aparece una vivencia.'],
    analysis: 'La epojé es una disciplina de atención. Su función es impedir que una teoría cierre el fenómeno antes de que éste haya sido descrito.',
    simple: 'Por un momento dejamos de decir “esto pasa por X” y vemos primero qué se vivió.',
    projection: 'Epojé: no borrar el mundo; suspender nuestras explicaciones sobre él.'
  },
  {
    id: 'f4', chapter: 'fundamento', title: 'Noesis ↔ noema', short: 'Acto de conciencia y objeto tal como aparece forman una correlación.',
    source: 'Clase 21 de octubre · indagación noética y noemática.',
    points: ['Noesis: temer, anticipar, imaginar, recordar, vigilar.', 'Noema: el mensaje en cuanto amenaza, el otro en cuanto agresor posible.', 'Noesis y noema no son dos cosas independientes.', 'La correlación permite describir el sentido vivido sin confundirlo con comprobación externa.'],
    analysis: 'Este par es el centro analítico de la exposición: muestra cómo un mismo objeto puede aparecer con sentidos diferentes según el acto vivido.',
    simple: 'Noesis es lo que hace su conciencia; noema es aquello tal como se le aparece.',
    projection: 'Noesis y noema: el acto de temer y la amenaza tal como aparece.'
  },

  {
    id: 'v1', chapter: 'vivencia', title: 'Cuerpo vivido', short: 'La experiencia se manifiesta corporalmente antes de convertirse en teoría.',
    source: 'Clases 14 y 21 de octubre · corporalidad como eje de descripción.',
    points: ['Pueden describirse tensión, postura, respiración, sobresalto o inmovilidad.', 'No son síntomas universales ni una lista diagnóstica.', 'Deben proceder de escenas concretas relatadas por participantes.', 'El cuerpo forma parte del modo de darse del fenómeno.'],
    analysis: 'La corporalidad evita reducir la vivencia a una idea abstracta. El miedo no sólo se “piensa”: puede reorganizar la experiencia corporal.',
    simple: 'El cuerpo también “sabe” que algo da miedo: se tensa, se paraliza o se prepara.',
    projection: 'Primera dimensión del mundo vivido: el cuerpo.'
  },
  {
    id: 'v2', chapter: 'vivencia', title: 'Espacio vivido', short: 'Un lugar físicamente igual puede adquirir un sentido completamente distinto.',
    source: 'Clase 21 de octubre · espacialidad del miedo digital.',
    points: ['La habitación puede pasar de sentirse cotidiana a vulnerable.', 'La distancia física del agresor no coincide con la cercanía vivida.', 'El espacio se describe desde la situación del sujeto.', 'No se afirma que el peligro externo esté objetivamente próximo.'],
    analysis: 'La fenomenología distingue espacio geométrico y espacio vivido. El sentido del lugar cambia aunque sus medidas permanezcan idénticas.',
    simple: 'Las paredes no cambian, pero el cuarto puede dejar de sentirse seguro.',
    projection: 'El espacio físico puede ser idéntico y el espacio vivido, completamente distinto.'
  },
  {
    id: 'v3', chapter: 'vivencia', title: 'Tiempo vivido', short: 'La amenaza puede ocupar el presente mediante anticipación del futuro.',
    source: 'Clases 21 de octubre · temporalidad e inminencia.',
    points: ['La experiencia puede acelerarse, prolongarse o quedar dominada por la espera.', 'El miedo puede estar dirigido a algo que todavía no ocurre.', 'La inminencia se examina como dimensión posible, no como esencia ya demostrada.', 'El tiempo vivido no se reduce a la duración del reloj.'],
    analysis: 'La anticipación muestra que el futuro puede modificar el presente antes de que el acontecimiento ocurra.',
    simple: 'Algo que todavía no pasa puede empezar a ocupar todo su presente.',
    projection: 'En el miedo, el futuro puede invadir el presente.'
  },
  {
    id: 'v4', chapter: 'vivencia', title: 'Entrevista fenomenológica', short: 'Volver a una escena concreta y pedir descripción antes que teoría.',
    source: 'Clase 21 de octubre · guía de entrevista; organización editorial.',
    points: ['Se solicita una situación concreta y reciente.', 'Se pregunta qué apareció primero y qué ocurrió después.', 'Se indaga cuerpo, espacio, tiempo y sentido.', 'En investigación real se mantienen consentimiento informado y obligaciones éticas.'],
    analysis: 'La entrevista busca producir descripciones densas, no respuestas dirigidas hacia una teoría anticipada. La pregunta debe devolver al participante a una escena.',
    simple: 'En vez de “¿usted tiene ansiedad?”, preguntamos: “¿qué pasó exactamente y cómo lo vivió?”.',
    projection: 'La entrevista no pide etiquetas: pide escenas.'
  },
  {
    id: 'v5', chapter: 'vivencia', title: 'Unidades de sentido', short: 'El relato se organiza sin convertir cada frase en una conclusión.',
    source: 'Clases 21 y 26 de octubre · análisis cualitativo; reconstrucción de estudio.',
    points: ['Se distinguen actos, objetos, cuerpo, espacio, tiempo y relaciones.', 'Se conservan los relatos originales.', 'La codificación no es equivalente a una esencia.', 'Las unidades permiten comparar experiencias y preparar variaciones.'],
    analysis: 'Organizar material no significa mecanizarlo. Las unidades de sentido son ayudas para leer correlaciones y recurrencias.',
    simple: 'Ordenamos el relato por temas para entenderlo mejor, pero no fingimos que ya encontramos la verdad final.',
    projection: 'Del relato pasamos a unidades de sentido, no todavía a una esencia.'
  },

  {
    id: 'r1', chapter: 'rigor', title: 'Variación I · presencia', short: '¿Sigue habiendo miedo sin agresor físicamente presente?',
    source: 'Clase 21 de octubre · variación imaginativa.',
    points: ['Se retira imaginariamente la copresencia corporal del agresor.', 'La amenaza continúa llegando mediante pantalla o llamada.', 'Si el miedo persiste, la presencia física no sería indispensable en ese caso.', 'No se universaliza automáticamente.'],
    analysis: 'La variación eidética funciona como prueba conceptual: cambia un rasgo y observa qué sucede con la identidad de la experiencia.',
    simple: 'Quitamos mentalmente al agresor de la habitación y preguntamos si la experiencia sigue siendo miedo.',
    projection: 'Primera variación: quitar la presencia física.'
  },
  {
    id: 'r2', chapter: 'rigor', title: 'Variación II · inminencia', short: '¿Qué cambia si la amenaza se desplaza muy lejos en el tiempo?',
    source: 'Clase 21 de octubre · amenaza aplazada.',
    points: ['Se altera el cuándo de la amenaza.', 'Puede cambiar intensidad, cualidad o persistencia.', 'La temporalidad aparece como rasgo a investigar.', 'La disminución del miedo no demuestra por sí sola necesidad eidética.'],
    analysis: 'La variación examina qué tan decisiva es la cercanía temporal para esta forma de miedo sin convertir el resultado en ley psicológica.',
    simple: 'No se siente igual un peligro mañana que uno dentro de cincuenta años.',
    projection: 'Segunda variación: cambiar la distancia temporal.'
  },
  {
    id: 'r3', chapter: 'rigor', title: 'Variación III · vulnerabilidad', short: '¿Qué ocurre si nada puede dañarnos?',
    source: 'Clase 21 de octubre · invulnerabilidad imaginaria.',
    points: ['Se imagina al sujeto y a sus seres queridos como invulnerables.', 'Se pregunta si persiste el mismo miedo.', 'La vulnerabilidad aparece como candidato estructural.', 'La clase no la demuestra como esencia universal.'],
    analysis: 'La prueba muestra cómo una condición aparentemente obvia puede convertirse en hipótesis filosófica que todavía exige justificación.',
    simple: 'Si usted supiera que ningún daño es posible, ¿seguiría sintiendo exactamente el mismo miedo?',
    projection: 'Tercera variación: retirar la posibilidad de daño.'
  },
  {
    id: 'r4', chapter: 'rigor', title: 'Estructura provisional', short: 'Invariantes posibles, no esencia universal ya demostrada.',
    source: 'Clases 7 y 21 de octubre · reducción eidética; síntesis editorial.',
    points: ['La variación permite distinguir rasgos accidentales y candidatos invariantes.', 'La síntesis debe permanecer argumentada y revisable.', 'No hay en estas clases un estudio de campo concluido.', 'No se presenta una esencia trascendental definitiva del miedo digital.'],
    analysis: 'La palabra clave es provisional. La fenomenología gana rigor cuando explicita qué se sostiene, con qué material y hasta dónde puede generalizarse.',
    simple: 'Encontramos pistas de estructura, no una fórmula eterna del miedo.',
    projection: 'El resultado correcto es una estructura provisional, no una esencia proclamada.'
  },
  {
    id: 'r5', chapter: 'rigor', title: '¿Y si el participante miente?', short: 'El testimonio no da acceso transparente e infalible a una mente privada.',
    source: 'Clase 26 de octubre · pregunta epistemológica vinculada a Luis Villoro.',
    points: ['Una persona puede omitir, exagerar, reinterpretar o mentir.', 'Una declaración verbal no equivale automáticamente a una creencia verdadera.', 'La fenomenología trabaja con relatos sin tratarlos como infalibles.', 'El límite debe reconocerse en lugar de ocultarse.'],
    analysis: 'Esta objeción fortalece la exposición porque obliga a distinguir experiencia relatada, inferencia del investigador y realidad externa.',
    simple: 'Que alguien diga “sentí esto” es importante, pero no vuelve al investigador lector perfecto de su mente.',
    projection: 'Objeción fuerte: el otro puede mentir o entenderse mal a sí mismo.'
  },
  {
    id: 'r6', chapter: 'rigor', title: 'Cinco controles de rigor', short: 'Escena concreta, capas separadas, contraste, reflexividad y límites explícitos.',
    source: 'Síntesis editorial a partir de las clases y la discusión epistemológica.',
    points: ['Volver a escenas y expresiones concretas.', 'Separar descripción del participante e interpretación del investigador.', 'Comparar relatos y buscar recurrencias sin forzarlas.', 'Examinar los propios presupuestos mediante reflexividad.', 'Explicitar límites inferenciales y alcance de la síntesis.'],
    analysis: 'La investigación cualitativa no se vuelve rigurosa por imitar una estadística; gana rigor al documentar procedimientos, distinciones y límites.',
    simple: 'Subjetivo no significa arbitrario: hay reglas para no inventar lo que queremos encontrar.',
    projection: 'Rigor cualitativo: procedimiento visible y límites visibles.'
  },

  {
    id: 'l1', chapter: 'limite', title: 'Heidegger · ser-en-el-mundo', short: 'Comprender siempre ocurre desde una historia, un lenguaje y un mundo.',
    source: 'Clase 26 de octubre · contraste fenomenología trascendental / hermenéutica.',
    points: ['La comprensión no parte de un observador socialmente vacío.', 'Historia, relaciones y lenguaje forman horizonte.', 'La existencia situada modifica la pregunta por la reducción.', 'La exposición usa este contraste pedagógicamente, no como resumen exhaustivo de Heidegger.'],
    analysis: 'Heidegger introduce un límite productivo: incluso la descripción fenomenológica ocurre desde condiciones previas de comprensión.',
    simple: 'Nunca miramos el mundo desde “ningún lugar”: siempre ya estamos dentro de una historia y un lenguaje.',
    projection: 'Heidegger pregunta: ¿puede alguien comprender desde ningún lugar?'
  },
  {
    id: 'l2', chapter: 'limite', title: 'Husserl ↔ Heidegger', short: 'Suspender presupuestos y reconocer el horizonte situado forman una tensión fértil.',
    source: 'Clase 26 de octubre + reconstrucción comparativa de exposición.',
    points: ['Husserl enfatiza reducción y estructura del aparecer.', 'Heidegger enfatiza comprensión situada y mundo.', 'La comparación no exige elegir un ganador.', 'La tensión evita convertir el método en receta mecánica.'],
    analysis: 'Este contraste muestra que la fenomenología tiene debates internos sobre qué tanto puede suspenderse y qué papel juega el horizonte previo.',
    simple: 'Husserl pregunta cómo aparece; Heidegger pregunta desde qué mundo puede aparecer así.',
    projection: 'La tensión final: reducción y situación.'
  },
  {
    id: 'l3', chapter: 'limite', title: 'No es simplemente psicología', short: 'El interés principal no es diagnosticar ni explicar causalmente un estado mental.',
    source: 'Clases 7, 21 y 26 de octubre · fronteras metodológicas; síntesis editorial.',
    points: ['La fenomenología describe estructuras de experiencia y sentido.', 'La psicología puede estudiar procesos, diagnósticos y relaciones causales con otros diseños.', 'La sociología puede estudiar instituciones, grupos y regularidades sociales.', 'Las fronteras son de énfasis y método, no muros absolutos.'],
    analysis: 'La exposición gana precisión cuando evita definir disciplinas por caricaturas. El mismo fenómeno puede ser investigado desde varios enfoques.',
    simple: 'No competimos con la psicología: estamos haciendo otra pregunta sobre la misma experiencia.',
    projection: 'Mismo fenómeno, preguntas distintas.'
  },
  {
    id: 'l4', chapter: 'limite', title: 'Defensa oral', short: 'Diez preguntas difíciles convierten la exposición en argumentación.',
    source: 'Preparación editorial de la exposición magna.',
    points: ['¿Por qué sigue siendo investigación si no mide porcentajes?', '¿Cuál es la diferencia entre estudio de caso y fenomenología?', '¿Qué suspende exactamente la epojé?', '¿Cómo se obtiene una estructura sin inventarla?', '¿Qué ocurre si el participante miente?'],
    analysis: 'La defensa obliga a dominar relaciones conceptuales y límites, no memorizar nombres. El sistema de estudio desarrolla las diez preguntas completas.',
    simple: 'Si puede responder las objeciones sin mirar la pantalla, ya domina la exposición.',
    projection: 'La mejor exposición termina cuando usted puede defender el método sin diapositivas.'
  },
  {
    id: 'l5', chapter: 'limite', title: 'Qué aporta la fenomenología', short: 'Un camino explícito desde la vivencia hacia una descripción estructural y situada.',
    source: 'Cierre editorial construido a partir del recorrido del curso.',
    points: ['No produce principalmente porcentajes ni leyes causales.', 'Produce descripciones, unidades de sentido y correlaciones intencionales.', 'Puede proponer estructuras de experiencia con límites explícitos.', 'La investigación filosófica conserva su rigor al hacer visible el camino de análisis.'],
    analysis: 'El cierre reúne la tesis de la exposición sin atribuirla al profesor como frase literal: el rigor fenomenológico consiste en hacer explícito cómo se pasa de vivencia a estructura.',
    simple: 'La fenomenología intenta comprender con disciplina cómo una experiencia llega a tener el sentido que tiene.',
    projection: 'Del “me pasó” al “así se estructura esta experiencia”: ésa es la ganancia metodológica.'
  },
]

const relationPairs = [
  ['p1', 'p2', 'distingue niveles'], ['p2', 'p3', 'delimita el caso'], ['p3', 'p4', 'formula el problema'],
  ['p4', 'f1', 'abre fundamento'], ['f1', 'f2', 'antecede'], ['f2', 'f3', 'opera mediante'], ['f3', 'f4', 'permite analizar'],
  ['f4', 'v1', 'se encarna'], ['f4', 'v2', 'organiza sentido'], ['f4', 'v3', 'organiza sentido'], ['v1', 'v4', 'orienta preguntas'],
  ['v2', 'v4', 'orienta preguntas'], ['v3', 'v4', 'orienta preguntas'], ['v4', 'v5', 'produce material'],
  ['v5', 'r1', 'abre prueba'], ['r1', 'r2', 'continúa variación'], ['r2', 'r3', 'continúa variación'], ['r3', 'r4', 'permite síntesis'],
  ['r4', 'r5', 'abre objeción'], ['r5', 'r6', 'exige controles'], ['r6', 'l1', 'encuentra límite'], ['l1', 'l2', 'se contrasta'],
  ['l2', 'l3', 'aclara frontera'], ['l3', 'l4', 'prepara defensa'], ['l4', 'l5', 'culmina en']
]

const quizzes = [
  { chapter: 'problema', node: 'p2', question: '¿Qué diferencia hay entre estudio de caso y fenomenología?', options: ['Son exactamente el mismo método', 'El primero organiza el diseño; la segunda orienta el análisis filosófico', 'La fenomenología sólo sirve para entrevistas'], correct: 1, explanation: 'El estudio de caso organiza el acceso al material; la fenomenología determina qué se pregunta y cómo se analiza la experiencia.' },
  { chapter: 'fundamento', node: 'f3', question: '¿Qué hace la epojé?', options: ['Niega que exista el mundo', 'Borra todo conocimiento previo', 'Suspende provisionalmente explicaciones y juicios'], correct: 2, explanation: 'La epojé cambia la actitud del investigador; no destruye ni niega el mundo.' },
  { chapter: 'fundamento', node: 'f4', question: '¿Qué relación hay entre noesis y noema?', options: ['Son polos correlativos de una experiencia', 'Son dos objetos físicos', 'No tienen relación'], correct: 0, explanation: 'La noesis nombra el acto y el noema el objeto tal como aparece en ese acto.' },
  { chapter: 'vivencia', node: 'v2', question: '¿Por qué el espacio vivido no es igual al espacio geométrico?', options: ['Porque cambia la medida de las paredes', 'Porque el sentido del lugar puede cambiar sin cambiar su geometría', 'Porque la fenomenología niega la física'], correct: 1, explanation: 'La habitación puede adquirir un sentido de vulnerabilidad aunque físicamente permanezca igual.' },
  { chapter: 'rigor', node: 'r4', question: '¿Qué resultado legítimo dejan las variaciones del caso?', options: ['Una esencia universal demostrada', 'Candidatos estructurales y una síntesis provisional', 'Una ley causal'], correct: 1, explanation: 'Las clases no presentan datos suficientes para proclamar una esencia universal del miedo digital.' },
  { chapter: 'rigor', node: 'r5', question: '¿El relato del participante es infalible?', options: ['Sí, siempre', 'No; debe analizarse sin tratarlo como acceso transparente a la mente', 'Sólo cuando dura más de una hora'], correct: 1, explanation: 'El testimonio es material central, pero no vuelve innecesarios el contraste, la reflexividad y los límites inferenciales.' },
  { chapter: 'limite', node: 'l2', question: '¿Cómo se resume el contraste pedagógico Husserl–Heidegger?', options: ['Husserl mide y Heidegger entrevista', 'Husserl enfatiza reducción; Heidegger situación y mundo', 'Son doctrinas idénticas'], correct: 1, explanation: 'El contraste de la exposición gira en torno a estructura del aparecer y horizonte situado.' },
  { chapter: 'limite', node: 'l5', question: '¿Qué aporta principalmente la fenomenología en esta exposición?', options: ['Una estadística', 'Una descripción estructural, argumentada y situada de la experiencia', 'Un diagnóstico clínico'], correct: 1, explanation: 'Su producto central es una comprensión rigurosa del sentido y estructura de la experiencia.' },
]

const palette = SYSTEM_2D_THEME.nodeTopics
const colors = {
  problema: palette.blue,
  fundamento: palette.violet,
  vivencia: palette.moss,
  rigor: palette.ochre,
  limite: palette.rust,
}
const nodeTypes = { study: StudyNode }

function StudyNode({ data, selected }) {
  return (
    <div
      className={'m19-node phen2d-node' + (selected ? ' selected' : '') + (data.guided ? ' guided' : '')}
      style={{ '--m19-node-accent': colors[data.chapter] }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="m19-node-top"><span>{data.number}</span><span>{data.chapter.toUpperCase()}</span></div>
      <strong>{data.title}</strong>
      <p>{data.short}</p>
      <span className="m19-node-foot">ABRIR FOLIO <b>↗</b></span>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

function Workspace() {
  const [chapterId, setChapterId] = useState('problema')
  const [selectedId, setSelectedId] = useState('p1')
  const [mode, setMode] = useState('folio')
  const [step, setStep] = useState(0)
  const [qIndex, setQIndex] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [projection, setProjection] = useState(false)
  const flowRef = useRef(null)

  const chapter = chapters.find(item => item.id === chapterId)
  const visible = useMemo(
    () => chapterId === 'todo' ? entries : entries.filter(entry => entry.chapter === chapterId),
    [chapterId]
  )
  const relevantQuizzes = useMemo(
    () => quizzes.filter(q => chapterId === 'todo' || q.chapter === chapterId),
    [chapterId]
  )
  const selected = visible.find(item => item.id === selectedId) || visible[0]
  const selectedIndex = visible.findIndex(item => item.id === selected.id)
  const question = relevantQuizzes[qIndex] || relevantQuizzes[0]
  const columns = chapterId === 'todo' ? 3 : 2
  const xGap = chapterId === 'todo' ? 430 : 485
  const yGap = chapterId === 'todo' ? 245 : 270

  const focusNode = (id) => {
    const i = visible.findIndex(item => item.id === id)
    if (i < 0 || !flowRef.current) return
    const x = (i % columns) * xGap + 185
    const y = Math.floor(i / columns) * yGap + 96
    flowRef.current.setCenter(x, y, { zoom: projection ? 1.02 : .86, duration: 280 })
  }

  const switchChapter = (id) => {
    setChapterId(id)
    const next = id === 'todo' ? entries[0] : entries.find(item => item.chapter === id)
    setSelectedId(next.id)
    setStep(0)
    setMode('folio')
    setQIndex(0)
    setAnswer(null)
  }

  const guideStep = (n) => {
    const next = Math.max(0, Math.min(visible.length - 1, n))
    setStep(next)
    setSelectedId(visible[next].id)
    setMode('guia')
    focusNode(visible[next].id)
  }

  const selectNode = (id) => {
    setSelectedId(id)
    if (mode === 'guia') setStep(visible.findIndex(item => item.id === id))
    focusNode(id)
  }

  const chooseQuestion = (n) => {
    setQIndex(Math.max(0, Math.min(relevantQuizzes.length - 1, n)))
    setAnswer(null)
  }

  const startProjection = () => {
    setChapterId('todo')
    setSelectedId(entries[0].id)
    setStep(0)
    setMode('guia')
    setProjection(true)
    setExpanded(true)
  }

  const exitProjection = () => {
    setProjection(false)
    setExpanded(false)
    setMode('folio')
  }

  const { nodes, edges } = useMemo(() => {
    const ids = new Set(visible.map(e => e.id))
    const nodes = visible.map((entry, i) => ({
      id: entry.id,
      type: 'study',
      selected: entry.id === selectedId,
      position: { x: (i % columns) * xGap, y: Math.floor(i / columns) * yGap },
      style: { width: 370, height: 184 },
      data: {
        ...entry,
        number: String(entries.findIndex(item => item.id === entry.id) + 1).padStart(2, '0'),
        guided: mode === 'guia' && visible[step]?.id === entry.id,
      },
    }))

    const edges = relationPairs
      .filter(([from, to]) => ids.has(from) && ids.has(to))
      .map(([source, target, label]) => ({
        id: 'rel-' + source + '-' + target,
        source,
        target,
        label,
        type: 'smoothstep',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: resolveSystem2DEdgeColor({ touchesSelected: source === selectedId || target === selectedId }),
        },
        style: {
          stroke: resolveSystem2DEdgeColor({
            touchesSelected: source === selectedId || target === selectedId,
            guidedActive: mode === 'guia' && visible[step]?.id === target,
          }),
          strokeWidth: 2,
        },
        labelStyle: { fontSize: 11, fill: SYSTEM_2D_THEME.ink },
        labelBgStyle: { fill: SYSTEM_2D_THEME.background.paper },
      }))

    return { nodes, edges }
  }, [visible, selectedId, mode, step, columns, xGap, yGap])

  return (
    <section
      id="sistema-fenomenologia"
      className={'m19-system m21-system phen2d-system ph2d-shell' + (expanded ? ' expanded' : '') + (projection ? ' projection' : '')}
      aria-label="Sistema 2D de la exposición de fenomenología"
    >
      <div className="m19-workspace-head phen2d-head">
        <div>
          <span className="m19-kicker">ATLAS DE EXPOSICIÓN · SISTEMA 2D</span>
          <h2>Fenomenología en operación.</h2>
          <p>Veinticuatro nodos conectan problema, fundamento, mundo vivido, variación y límites. Cada folio distingue fuente de clase, reconstrucción editorial y alcance.</p>
        </div>
        <div className="phen2d-head-actions">
          {!projection && <button type="button" className="phen2d-project" onClick={startProjection}>Proyectar exposición ▶</button>}
          <button type="button" onClick={() => projection ? exitProjection() : setExpanded(!expanded)}>
            {projection ? 'Salir de proyección ×' : expanded ? 'Cerrar pantalla completa ×' : 'Ampliar sistema ⤢'}
          </button>
        </div>
      </div>

      {!projection && (
        <>
          <div className="m19-chapters" role="group" aria-label="Actos de la exposición">
            {[...chapters, { id: 'todo', number: 'Σ', title: 'Atlas completo' }].map(item => (
              <button type="button" key={item.id} className={item.id === chapterId ? 'active' : ''} onClick={() => switchChapter(item.id)}>
                <span>{item.number}</span>{item.title}
              </button>
            ))}
          </div>
          <div className="m19-journey">
            <p><b>ANTES</b>{chapter?.before || 'La exposición parte de la diferencia entre medir y comprender.'}</p>
            <p><b>AHORA</b>{chapter?.question || '¿Cómo se articula el recorrido completo?'}</p>
            <p><b>DESPUÉS</b>{chapter?.after || 'El cierre vuelve a la pregunta por el rigor filosófico.'}</p>
          </div>
        </>
      )}

      <div className="m19-tools phen2d-tools">
        {!projection && <button type="button" className={mode === 'guia' ? 'active' : ''} onClick={() => guideStep(0)}>Iniciar guía</button>}
        {!projection && <button type="button" className={mode === 'estudio' ? 'active' : ''} onClick={() => { setMode('estudio'); setAnswer(null); setQIndex(0); setSelectedId(relevantQuizzes[0]?.node || visible[0].id) }}>Modo estudio</button>}
        {!projection && <button type="button" className={mode === 'folio' ? 'active' : ''} onClick={() => setMode('folio')}>Folio</button>}
        <span>{visible.length} nodos · {edges.length} relaciones · relaciones de estudio</span>
      </div>

      {mode === 'guia' && (
        <div className="m19-lesson phen2d-lesson" aria-live="polite">
          <span className="m19-kicker">{projection ? 'MODO PROYECCIÓN' : 'GUÍA COMPLETA'} · PASO {step + 1} / {visible.length}</span>
          <h3>{visible[step].title}</h3>
          {projection && <p className="phen2d-projection-line">{visible[step].projection}</p>}
          <p>{visible[step].analysis}</p>
          <p><strong>Procedencia:</strong> {visible[step].source}</p>
          <div className="m19-step-buttons">
            <button type="button" disabled={step === 0} onClick={() => guideStep(step - 1)}>← Anterior</button>
            {!projection && <button type="button" onClick={() => setMode('folio')}>Consultar folio</button>}
            <button type="button" disabled={step === visible.length - 1} onClick={() => guideStep(step + 1)}>Siguiente →</button>
          </div>
        </div>
      )}

      {mode === 'estudio' && question && (
        <div className="m19-lesson" aria-live="polite">
          <span className="m19-kicker">DEFENSA ORAL · {qIndex + 1} / {relevantQuizzes.length}</span>
          <h3>{question.question}</h3>
          <div className="m19-options">
            {question.options.map((option, i) => (
              <button
                type="button"
                key={option}
                aria-pressed={answer === i}
                className={answer === i ? 'chosen' : ''}
                onClick={() => { setAnswer(i); setSelectedId(question.node); focusNode(question.node) }}
              >
                {option}
              </button>
            ))}
          </div>
          {answer !== null && <p className="m19-feedback"><b>{answer === question.correct ? 'Correcto.' : 'Revise el razonamiento.'}</b> {question.explanation}</p>}
          <div className="m19-step-buttons">
            <button type="button" disabled={qIndex === 0} onClick={() => chooseQuestion(qIndex - 1)}>← Anterior</button>
            <button type="button" onClick={() => { selectNode(question.node); setMode('folio') }}>Consultar folio</button>
            <button type="button" disabled={qIndex === relevantQuizzes.length - 1} onClick={() => chooseQuestion(qIndex + 1)}>Siguiente →</button>
          </div>
        </div>
      )}

      <div className="m19-workspace phen2d-workspace">
        <div className="m19-canvas phen2d-canvas" aria-label="Mapa bidimensional de la exposición">
          <ReactFlow
            key={chapterId + (projection ? '-projection' : '')}
            onInit={instance => { flowRef.current = instance }}
            fitView
            fitViewOptions={{ padding: chapterId === 'todo' ? .12 : .2, maxZoom: projection ? .72 : .92 }}
            minZoom={.22}
            maxZoom={1.5}
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            nodesDraggable={false}
            nodesConnectable={false}
            onNodeClick={(_, node) => selectNode(node.id)}
            onPaneClick={() => setSelectedId(null)}
            proOptions={{ hideAttribution: true }}
          >
            <Background gap={22} size={1} color="#cbbfae" />
            <MiniMap nodeColor={n => colors[n.data.chapter]} pannable zoomable />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>

        <aside className="m19-inspector phen2d-inspector" aria-live="polite">
          <div className="m19-inspector-head">
            <span>FOLIO {String(entries.findIndex(item => item.id === selected.id) + 1).padStart(2, '0')} / {entries.length}</span>
            <span>{selected.chapter.toUpperCase()}</span>
          </div>
          <h3>{selected.title}</h3>
          <p className="m19-source">{selected.source}</p>
          <h4>Contenido sistematizado</h4>
          <ul>{selected.points.map((point, i) => <li key={i}>{point}</li>)}</ul>
          <h4>Explicación y límites · PHILOSOPHIA</h4>
          <p>{selected.analysis}</p>
          <div className="m21-plain"><h4>En palabras simples:</h4><p>{selected.simple}</p></div>
          <div className="phen2d-say"><h4>Para decir en clase:</h4><p>{selected.projection}</p></div>
          <div className="m19-inspector-nav">
            <button type="button" disabled={selectedIndex <= 0} onClick={() => selectNode(visible[selectedIndex - 1].id)}>← Previa</button>
            <button type="button" disabled={selectedIndex >= visible.length - 1} onClick={() => selectNode(visible[selectedIndex + 1].id)}>Siguiente →</button>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default function MethodsPhenomenologySystem2D() {
  return (
    <main className="m19-page m21-page phen2d-page">
      <nav className="m19-nav">
        <Link to="/estudio/fenomenologia-metodo">← Exposición de fenomenología</Link>
        <Link to="/">Φ · PHILOSOPHIA</Link>
        <span>FI104 · PROYECCIÓN 2D</span>
      </nav>

      <header className="phen2d-hero">
        <p className="m19-kicker">EXPOSITIO · MÉTODO FENOMENOLÓGICO</p>
        <h1>Del caso vivido<br /><em>a la estructura</em>.</h1>
        <p>Un atlas para proyectar en clase y recorrer la fenomenología como método: problema, intencionalidad, epojé, mundo vivido, variación, rigor y límite hermenéutico.</p>
        <div className="phen2d-hero-route" aria-label="Recorrido de la exposición">
          <span>CASO</span><b>→</b><span>EPOJÉ</span><b>→</b><span>NOESIS / NOEMA</span><b>→</b><span>HORIZONTES</span><b>→</b><span>VARIACIÓN</span><b>→</b><span>ESTRUCTURA</span>
        </div>
      </header>

      <section className="phen2d-thesis">
        <span className="m19-kicker">TESIS RECTORA</span>
        <h2>La fenomenología no pregunta primero <em>cuántas veces ocurre algo</em>, sino cómo se da, qué significa y qué estructura puede reconocerse en su aparecer.</h2>
        <p><strong>Frontera documental:</strong> el atlas integra contenidos de las clases del 7, 14, 19, 21 y 26 de octubre. La arquitectura completa, el caso conductor unificado y las frases de proyección son reconstrucción editorial de estudio, no un guion literal del profesor ni resultados empíricos concluidos.</p>
      </section>

      <ReactFlowProvider><Workspace /></ReactFlowProvider>

      <section className="phen2d-defense">
        <span className="m19-kicker">DEFENSA ORAL · DIEZ PREGUNTAS</span>
        <h2>Lo que debe poder responder sin mirar el mapa.</h2>
        <ol>
          <li>¿Por qué esto sigue siendo investigación si no mide porcentajes?</li>
          <li>¿Cuál es la diferencia entre estudio de caso y fenomenología?</li>
          <li>¿Qué suspende exactamente la epojé?</li>
          <li>¿Qué diferencia hay entre noesis y noema?</li>
          <li>¿Cómo se obtiene una estructura sin inventarla?</li>
          <li>¿Qué papel cumple la variación eidética?</li>
          <li>¿Por qué la selección de participantes no tiene que ser aleatoria?</li>
          <li>¿Qué ocurre si el participante miente o se interpreta mal a sí mismo?</li>
          <li>¿En qué se distinguen Husserl y Heidegger?</li>
          <li>¿Por qué esto no es simplemente psicología?</li>
        </ol>
      </section>

      <section className="m19-outro phen2d-outro">
        <span className="m19-kicker">CIERRE · FORMULACIÓN EDITORIAL</span>
        <h2>Hacer explícito el camino de la vivencia a la estructura.</h2>
        <p>El rigor fenomenológico no consiste en convertir la experiencia en número, sino en volver visible cómo una vivencia se describe, se depura, se analiza y se propone como estructura sin ocultar los límites de la interpretación.</p>
        <Link to="/estudio/fenomenologia-metodo">← Volver a la sistematización de la exposición</Link>
      </section>

      <footer className="m19-footer">
        <span>PHILOSOPHIA · MÉTODOS DE INVESTIGACIÓN</span>
        <span>24 nodos · 5 actos · modo proyección · modo estudio</span>
        <span className="m19-footer-mark" aria-hidden="true">Φ</span>
      </footer>
    </main>
  )
}
