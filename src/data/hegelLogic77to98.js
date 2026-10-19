import { hegelTeacherSlides } from './hegelTeacherSlides.js'
import { hegelOntologySlides } from './hegelOntologySlides.js'

/**
 * Consigna aportada el 18-10-2026 (fecha de envío no visible). Referencia: Hegel, Ciencia de la lógica,
 * traducción de Augusta y Rodolfo Mondolfo, Solar/Hachette, pp. impresas 77–98.
 * Texto de los nodos: paráfrasis editorial, NO cita literal. Las presentaciones
 * de José Alejandro Fuerte se mantienen en una capa docente diferenciada.
 * Contrato: [id, fase, título, desarrollo, explicación, finalidad,
 *            conceptos, rutas, prerrequisitos, nuclear, detalle, localizador].
 */
const hegelLogicRows = [
  ['P01','Lectura · 77–98','A · Ser puro','El ser puro comienza sin ninguna determinación ulterior: es inmediación indeterminada, vacío de contenido y diferencia.','No equivale a una cosa determinada ni a la colección de los entes. En su ausencia completa de especificación no puede diferenciarse de la nada pura.','fijar el punto de partida',['ser puro','inmediación','indeterminación'],['reading77','hegel'],['H02','H04'],true,false,'Hegel · p. 77 · A. Ser'],
  ['P02','Lectura · 77–98','B · Nada pura','La nada pura es igualdad vacía consigo misma: ausencia de determinación y contenido, al igual que el ser puro.','Pensar la nada no equivale a negar un ente particular. La nada del comienzo no incluye un objeto previamente determinado.','distinguir la nada abstracta',['nada pura','abstracción','vacío'],['reading77','hegel'],['P01','H06'],true,false,'Hegel · p. 77 · B. Nada'],
  ['P03','Lectura · 77–98','C · Unidad móvil: devenir','Ser y nada se muestran inseparables, pero también diferentes: cada uno pasa inmediatamente a su opuesto. Su verdad es el devenir, no la identidad inmóvil.','La lectura evita presentar el devenir como una simple tercera casilla de un esquema impuesto desde fuera.','reconstruir la primera mediación',['devenir','identidad','diferencia'],['reading77','hegel','dialectic'],['P01','P02','H09'],true,false,'Hegel · pp. 77–78 · C. Devenir'],
  ['P04','Lectura · 77–98','Nota 1 · Nada de algo ≠ nada pura','La negación de un algo ya determinado presupone ese algo y sus cualidades. La nada pura no contiene tal referencia determinada.','El ejemplo de algo ausente pertenece a una esfera más desarrollada: confundir ambas negaciones destruye la abstracción del comienzo.','evitar una falsa representación',['nada determinada','algo','ser determinado'],['reading77','hegel'],['P02','H11'],true,false,'Hegel · pp. 78–80 · Nota 1'],
  ['P05','Lectura · 77–98','Eléatas, Parménides y Heráclito','La discusión histórica contrapone la fijación del ser frente al no-ser y el énfasis heraclíteo en el devenir como unidad de opuestos.','La referencia es parte del argumento de Hegel: no sustituye la derivación interna de las categorías.','situar un contraste antiguo',['Parménides','Heráclito','movimiento'],['reading77','hegel'],['P03'],false,false,'Hegel · pp. 78–79; 87'],
  ['P06','Lectura · 77–98','La representación introduce un algo','Afirmar que existir y no existir son lo mismo para una persona, una casa o una moneda altera el alcance de la tesis inicial.','En esas aplicaciones intervienen existencias determinadas; Hegel habla en cambio del ser y la nada absolutamente abstractos.','impedir un cambio de nivel lógico',['representación','existencia','abstracción'],['reading77','hegel'],['P04'],true,false,'Hegel · pp. 80–82 · Nota 1'],
  ['P07','Lectura · 77–98','Kant · el ser no es predicado real','La crítica kantiana del argumento ontológico distingue el contenido posible de un concepto y su existencia efectiva: concebir cien táleros no aumenta el patrimonio.','La imposibilidad de derivar existencia de un concepto finito es el punto de partida de la polémica que Hegel reabre.','reconstruir la objeción kantiana',['Kant','argumento ontológico','cien táleros'],['reading77','hegel'],['P06','H18'],true,false,'Hegel · pp. 81–83 · Nota 1'],
  ['P08','Lectura · 77–98','Hegel · finito y absoluto','Hegel cuestiona trasladar sin mediaciones al absoluto la separación entre concepto y ser propia de las cosas finitas.','La defensa hegeliana de la unidad de concepto y ser en Dios no significa que cualquier objeto imaginable exista.','delimitar el alcance del argumento',['Dios','concepto','ser','finitud'],['reading77','hegel','dialectic'],['P07'],true,false,'Hegel · p. 83 · Nota 1'],
  ['P09','Lectura · 77–98','Nota 2 · Insuficiencia del juicio ordinario','La fórmula que identifica ser y nada nombra dos determinaciones diferentes; la forma sujeto-predicado no muestra adecuadamente el movimiento que constituye su verdad.','Una proposición especulativa exige pensar la diferencia dentro de la unidad y el proceso por el que la proposición se supera.','distinguir identidad abstracta y verdad especulativa',['proposición especulativa','juicio','contradicción'],['reading77','hegel'],['P03','P08'],true,false,'Hegel · pp. 83–85 · Nota 2'],
  ['P10','Lectura · 77–98','Luz pura y oscuridad pura','Luz absolutamente pura y oscuridad absolutamente pura son ejemplos de abstracciones en las que no se distingue objeto alguno.','Sólo la luz y la oscuridad determinadas permiten distinguir algo. Hegel utiliza el ejemplo para mostrar límites de una representación sensible del ser y la nada.','probar el límite de las analogías',['luz','oscuridad','determinación'],['reading77','hegel'],['P06','P09'],false,false,'Hegel · pp. 85–86 · Nota 2'],
  ['P11','Lectura · 77–98','Nota 3 · Aislar abstracciones','Si ser y nada se mantienen como unidades independientes y cerradas, se elimina por anticipado la posibilidad misma del traspaso.','El problema del comienzo exige suspender las presuposiciones que convierten los términos en entidades autosuficientes.','explicar la acción aisladora',['comienzo','separación','abstracción'],['reading77','hegel'],['P03','P09'],true,false,'Hegel · pp. 87–88 · Nota 3'],
  ['P12','Lectura · 77–98','Jacobi · ¿de dónde viene la multiplicidad?','Jacobi pregunta cómo puede obtenerse número, medida y finitud a partir de espacio, tiempo o conciencia concebidos como unidades absolutamente puras.','La dificultad no se resuelve agregando arbitrariamente lo determinado a un comienzo previamente inmóvil.','reconstruir la objeción de Jacobi',['Jacobi','multiplicidad','finitud'],['reading77','hegel'],['P11'],true,false,'Hegel · pp. 88–90 · Nota 3'],
  ['P13','Lectura · 77–98','Respuesta de Hegel a Jacobi','La objeción presupone abstracciones separadas como si pudieran conservarse sin diferencia ni tránsito; Hegel insiste en examinar su movimiento inmanente.','La cuestión es cómo lo indeterminado se determina, no cómo se añade desde el exterior una multiplicidad empírica.','mostrar la respuesta dialéctica',['dialéctica','indeterminado','determinación'],['reading77','hegel'],['P12','P03'],true,false,'Hegel · pp. 90–92 · Nota 3'],
  ['P14','Lectura · 77–98','Nota 4 · Negación determinada','La nada de la luz o del calor ya es la negación de un contenido específico. Esta negación determinada no coincide con la nada puramente indeterminada.','La determinación introduce contenido; en esa esfera la negación puede producir un resultado afirmativo.','distinguir grados del negar',['negación determinada','contenido','afirmación'],['reading77','hegel'],['P04','P13'],true,false,'Hegel · pp. 92–94 · Nota 4'],
  ['P15','Lectura · 77–98','El comienzo y su aparente imposibilidad','Al fijar ser y nada como términos totalmente exteriores, las objeciones declaran imposible que algo empiece o cese de existir.','Hegel impugna la presuposición que los inmoviliza, no la necesidad de explicar el comienzo.','formular el problema del devenir',['comienzo','cesar','sofistería'],['reading77','hegel'],['P11','P14'],true,false,'Hegel · pp. 94–96 · Nota 4'],
  ['P16','Lectura · 77–98','Dialéctica como movimiento inmanente','La dialéctica no agrega contradicciones desde fuera: muestra que las determinaciones supuestamente aisladas pasan por sí mismas a sus opuestos.','Ser y nada muestran el devenir como su verdad cuando se abandona su separación fija.','definir el método desde el pasaje',['dialéctica','movimiento inmanente','verdad'],['reading77','hegel','dialectic'],['P15','P03'],true,false,'Hegel · p. 96 · Nota 4'],
  ['P17','Lectura · 77–98','Devenir · nacer y perecer','En el devenir, la transición desde nada a ser puede llamarse nacer, y el tránsito desde ser a nada, perecer.','No hay dos objetos quietos que se relacionan después: son direcciones del movimiento de sus momentos.','distinguir las direcciones',['nacer','perecer','devenir'],['reading77','hegel'],['P16','H14'],true,false,'Hegel · pp. 96–97 · C.2'],
  ['P18','Lectura · 77–98','El devenir se elimina a sí mismo','El devenir es movimiento de desaparecer; si sus momentos desaparecen, también se disuelve la oposición inestable que lo sostiene.','No se trata de volver a la nada inicial: el devenir desemboca en un resultado que conserva la mediación realizada.','explicar el resultado del movimiento',['devenir','resultado','superación'],['reading77','hegel'],['P17'],true,false,'Hegel · p. 97 · C.3'],
  ['P19','Lectura · 77–98','Umbral del Dasein','El reposo que resulta de la eliminación del devenir es el ser determinado o existencia, todavía distinto del puro ser inicial.','El capítulo II empieza en la página siguiente; el corpus asignado termina al preparar este umbral, sin abarcar el desarrollo entero del Dasein.','marcar una frontera textual',['Dasein','ser determinado','resultado'],['reading77','hegel'],['P18','H20'],true,false,'Hegel · pp. 97–98 · C.3'],
  ['P20','Lectura · 77–98','Aufheben · eliminar y conservar','La palabra alemana reúne la eliminación de la inmediatez y la conservación de aquello que pasa a integrar una unidad más desarrollada.','Un término superado no se borra sin más: queda como momento del resultado. La precisión filológica ayuda a entender por qué la negación es productiva.','explicar la superación especulativa',['Aufheben','conservación','momento'],['reading77','hegel','dialectic'],['P18','P19','C28'],true,false,'Hegel · p. 98 · Nota final'],
  ['P21','Lectura · 77–98','Control · tres confusiones frecuentes','No intercambiar ser puro por ente, nada pura por ausencia empírica, ni Aufhebung por simple anulación.','Estas distinciones permiten articular las páginas asignadas con el cuestionario de Croce y el dossier anterior sin mezclar niveles.','evaluar fidelidad textual',['ser/ente','nada determinada','Aufhebung'],['reading77','hegel','questions'],['P04','P06','P20','Q11'],false,false,'Síntesis de lectura · pp. 77–98'],

  ['M01','Lectura · 77–98','Después de Kant · programa ontológico','La presentación ubica a Fichte, Schelling y Hegel en la recepción del criticismo kantiano y destaca el problema de la cosa en sí.','Expone como problemas dos dualidades: fenómeno/noúmeno y causalidad natural/libertad moral. Es material de apoyo, no cita de la obra de Hegel.','enlazar con las clases postkantianas',['Kant','cosa en sí','libertad'],['reading77','hegel'],['L19'],true,false,'Presentación · Los problemas ontológicos en Hegel · diap. 1'],
  ['M02','Lectura · 77–98','Fichte · Yo y No-Yo','La presentación docente expone que el Yo pone al No-Yo mediante imaginación productiva y subraya la primacía de la razón práctica.','Esta reconstrucción funciona como antecedente contextual y no debe confundirse con la solución hegeliana del comienzo lógico.','recuperar el tránsito postkantiano',['Fichte','imaginación productiva','ética'],['reading77','hegel'],['M01'],false,false,'Presentación · Los problemas ontológicos en Hegel · diap. 2'],
  ['M03','Lectura · 77–98','Schelling · absoluto y arte','La presentación aproxima el absoluto mediante Spinoza y la intuición intelectual de Schelling; la obra de arte aparece como expresión finita de lo infinito.','Sirve de contraste para la sustitución hegeliana de la intuición intelectual por el método dialéctico.','comparar métodos',['Schelling','absoluto','intuición intelectual'],['reading77','hegel'],['M02'],false,false,'Presentación · Los problemas ontológicos en Hegel · diap. 3–4'],
  ['M04','Lectura · 77–98','Hegel · método dialéctico','El material docente relaciona la crítica a Kant, la totalidad y la razón con la necesidad de pensar las oposiciones por medio de categorías.','La diapositiva explica un marco de clase; la prueba categorial debe obtenerse en las páginas 77–98, no por etiquetas escolares de tesis-antítesis-síntesis.','establecer la frontera de fuente',['Hegel','Kant','dialéctica'],['reading77','hegel'],['M01','P16'],true,false,'Presentación · Los problemas ontológicos en Hegel · diap. 4–6'],
  ['M05','Lectura · 77–98','Ser, Nada, Devenir · material docente','Ambas presentaciones definen lo puro por ausencia de determinación, y describen la unidad del ser y la nada dentro del devenir.','El profesor contrapone el ser puro con el determinado y advierte que el devenir es la unidad concreta; revisar su formulación junto al original, sin fusionarlas.','contrastar texto y apoyo didáctico',['ser puro','nada pura','devenir'],['reading77','hegel'],['P01','P02','P03','M04'],true,false,'Presentaciones · Hegel Ontología diap. 6–7; Comienzo diap. 2–4'],
  ['M06','Lectura · 77–98','Kant y Hegel · cien táleros','La presentación del comienzo resume el argumento ontológico: para Kant existir no es un predicado real, mientras Hegel objeta aplicar sin distinción a Dios las relaciones de lo finito.','La reconstrucción docente se coteja con las notas de Hegel y no reemplaza la lectura del argumento en las páginas 81–83.','comparar los dos planos',['Kant','Hegel','argumento ontológico'],['reading77','hegel'],['P07','P08'],true,false,'Presentación · Ciencia de la lógica → Comienzo · diap. 5–6'],
  ['M07','Lectura · 77–98','Jacobi, negación y Aufheben','El material docente sigue la pregunta de Jacobi sobre cómo pasar de lo puro a lo determinado y remite al devenir, la negación y el Aufheben.','El apoyo final conduce desde la unidad móvil hasta su resultado; revisar siempre los localizadores del libro para distinguir texto primario y síntesis de clase.','cerrar el puente documental',['Jacobi','negación','Aufheben'],['reading77','hegel'],['P12','P16','P20','M06'],true,false,'Presentación · Ciencia de la lógica → Comienzo · diap. 7–9'],
  // Nueve diapositivas completas del material «Ciencia de la Lógica → Comienzo».
  // Los textos literales extensos, análisis y esquemas propios viven en hegelTeacherSlides.js.
  ...hegelTeacherSlides.map((slide) => [
    slide.id,'Lectura · 77–98',slide.title,
    slide.literal[0].slice(0,235) + (slide.literal[0].length>235 ? '…' : ''),
    slide.explanation,slide.role,slide.concepts,
    ['reading77','hegel'],
    slide.dependsOn,
    true,false,
    `Presentación · Ciencia de la Lógica → Comienzo · diap. ${slide.slide}`,
  ]),

  // Presentación «Los problemas ontológicos en Hegel»: ocho diapositivas nuevas,
  // cada una conservada íntegramente y con explicación y esquema propios.
  ...hegelOntologySlides.map((slide)=>[
    slide.id,'Lectura · 77–98',slide.title,
    slide.literal[0].slice(0,235)+(slide.literal[0].length>235?'…':''),
    slide.explanation,slide.role,slide.concepts,
    ['reading77','hegel'],slide.dependsOn,true,false,
    `Presentación · Los problemas ontológicos en Hegel · diap. ${slide.slide}`,
  ]),

]

/**
 * Orden curricular único: contextualización postkantiana y texto primario
 * intercalados según el argumento, sin ruta separada de presentaciones.
 * El índice sirve también para la geometría y la guía de lectura.
 */
export const hegelReadingSequence = [
  'F01','M01','F02','M02','F03','M03','F04','F05','M04',
  'F06','F07','E01','E02','M05',
  'P01','P02','P03','E03','P04','P05','P06','E04',
  'E05','P07','F08','M06','E06','P08',
  'E07','P09','P10','P11',
  'E08','P12','P13','P14','P15',
  'E09','M07','P16','P17','P18','P19','P20','P21',
]
const readingOrder=new Map(hegelReadingSequence.map((id,index)=>[id,index]))
export const hegelLogicAssignedReading=[...hegelLogicRows].sort((a,b)=>
  (readingOrder.get(a[0]) ?? Number.MAX_SAFE_INTEGER)-
  (readingOrder.get(b[0]) ?? Number.MAX_SAFE_INTEGER)
)
