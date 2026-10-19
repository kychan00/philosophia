/**
 * Material docente: "Ciencia de la Lógica → Comienzo", diapositivas 1–9.
 * El campo literal conserva el contenido de la presentación aportada; no es cita de Hegel.
 * La explicación y el esquema son reconstrucción editorial de PHILOSOPHIA.
 */
export const hegelTeacherSlides = [
  {
    id:'E01', slide:1, title:'La Ciencia de la Lógica como filosofía primera',
    literal:[
      'Esta obra presupone los resultados de la Fenomenología del Espíritu, a saber: la unidad mediata-inmediata entre lo absoluto y la conciencia filosófica.',
      'En oposición al resultado de la Crítica de la Razón Pura, relativo a la imposibilidad de la metafísica como ciencia, la Ciencia de la Lógica pretende construir la Filosofía Primera en su calidad de ciencia.',
      'Como punto de partida podemos establecer un vinculo entre Hegel y Aristóteles. No sólo por la multiplicidad de significados sobre el ser, sino porque el resultado de Aristóteles es el punto de partida para Hegel. ¿Cuál era el resultado de la metafísica en Aristóteles? Respuesta: el Motor Inmóvil. ¿Y qué significa el Motor Inmóvil? Dios en cuanto pensamiento que se piensa a sí mismo.',
      'Si le adicionamos a lo anterior, la idea de la substancia spinoziana, entonces, obtendremos el esquema de la metafísica hegeliana. Ya que si Dios es inmanente al mundo y, en tanto movimiento que se piensa a sí mismo, entonces, se va generando la realidad.',
      'Este movimiento del pensar es considerado por Hegel como “pensamiento especulativo”. Y la función de la Razón será pensar el movimiento de la Realidad. O dicho de otra manera: la Razón reproduce conceptualmente (por medio de categorías) el movimiento progresivo de la realidad.'
    ],
    explanation:'La presentación introduce una lectura docente del programa hegeliano: partir del resultado de la Fenomenología, afrontar la imposibilidad kantiana de la metafísica científica y relacionar la autorreferencia del pensar aristotélico con la inmanencia de la sustancia en Spinoza. Se trata de una reconstrucción del profesor, no de una deducción literal que Hegel exponga de esta manera en las páginas asignadas. Su función dentro del sistema es establecer por qué la Ciencia de la lógica pretende ser un saber del movimiento de las determinaciones y por qué la razón no debe confundirlo con un inventario estático de cosas. Este marco precede a las categorías Ser, Nada y Devenir; no las reemplaza ni debe utilizarse para inferir sin mediaciones tesis teológicas a partir de su primera tríada.',
    role:'Introducir el marco del profesor y separar genealogía interpretativa de deducción textual.',
    concepts:['filosofía primera','Fenomenología del espíritu','Aristóteles','Spinoza','pensamiento especulativo'],
    dependsOn:['M04','D04'], related:['P01','C06'],
    steps:[
      ['Marco','Fenomenología','Unidad de conciencia y absoluto','structure'],
      ['Umbral','Límite kantiano','Problema de la metafísica como ciencia','term','contrasta'],
      ['Antecedente','Aristóteles','Pensamiento que se piensa a sí mismo','term','recuerda'],
      ['Antecedente 2','Spinoza','Inmanencia de la sustancia','term','vincula'],
      ['Tesis docente','Razón especulativa','Reconstrucción conceptual del movimiento','mediation','propone'],
      ['Lectura primaria','Ser / Nada / Devenir','Verificar en el texto las categorías','result','verificar'],
    ]
  },
  {
    id:'E02', slide:2, title:'Comienzo: la unidad de ser, nada y devenir',
    literal:[
      'Hegel plantea la unidad de opuestos: el devenir es la unidad del ser puro y la nada pura.',
      'Conviene entender lo que se designa con la noción de “puro”, a saber: ausencia de determinación y de contenido.',
      'Tanto el ser puro como la nada pura coinciden en carecer de determinación y de contenido. De allí que Hegel indique que: “El ser y la nada son lo mismo”.',
      'Pero al mismo tiempo, son momentos que se oponen en la unidad del devenir. De allí que, “El ser y la nada son distintos”.',
      'En suma, Hegel considera que la verdad no es el ser ni la nada aislados y separados, sino su unidad en el devenir.'
    ],
    explanation:'La diapositiva presenta la paradoja que dirige la lectura: la igualdad abstracta del ser puro y la nada pura se afirma por ausencia de contenido, mientras que su distinción no autoriza tratarlos como cosas ya determinadas. El punto decisivo no consiste en fijar dos proposiciones contradictorias como verdades independientes, sino en reconstruir el pasar inmediato del uno al otro. El devenir nombra ese movimiento y constituye la verdad de los momentos. El folio se cruza con las secciones A, B y C del texto primario (pp. 77–78) y con la lectura de Croce, cuyo vocabulario interpretativo permanece diferenciado del de Hegel.',
    role:'Dar la clave de entrada a la lectura primaria sin reducirla a una tríada escolar.',
    concepts:['ser puro','nada pura','devenir','indeterminación','unidad de contrarios'],
    dependsOn:['E01','P01','P02'], related:['P03','H09'],
    steps:[
      ['Problema','Ser puro','Ausencia de determinación','concept'],
      ['Primer contraste','Nada pura','Misma ausencia de contenido','term','compara'],
      ['Distinción','No son cosas','No introducir cualidades externas','structure','advierte'],
      ['Movimiento','Tránsito mutuo','Cada momento pasa al opuesto','mediation','se-mueve'],
      ['Resultado','Devenir','Unidad que conserva la diferencia','result','culmina']
    ]
  },
  {
    id:'E03', slide:3, title:'Nota 1 · La oposición de ser y nada en la representación',
    literal:[
      'Las notas escritas por Hegel tienen como propósito elucidar el sentido de la inseparabilidad y distinción del ser y de la nada.',
      'Si se considera que representar implica un contenido, entonces, el acto de representar tiene como objeto representado un algo en general.',
      'Pero el “algo” pertenece a una esfera posterior en la Ciencia de la Lógica. El algo presupone la existencia, así como la cualidad.',
      'Simplemente, la dialéctica del algo y del otro pertenecen al capítulo del ser-determinado.',
      'De allí que es inadecuado representar al ser puro y a la nada pura, pues, se cambia el sentido de dichas abstracciones. Simplemente, para Hegel el devenir es lo concreto.'
    ],
    explanation:'La dificultad nace al aplicar al comienzo lógico los recursos de una representación con contenido. Si representar exige un objeto, ya presupone un algo cualificado y situado en una esfera posterior de la lógica. Con ello se pierde la pureza del ser y de la nada y se atribuye indebidamente a esas abstracciones la determinación que todavía no poseen. La diapositiva presenta este problema como corrección de método: no se trata de negar la representación en toda circunstancia, sino de impedir que suplante la categoría de comienzo. La salida sistemática es el devenir como unidad concreta de los momentos, no la yuxtaposición de dos imágenes del ser y la nada. Este paso prepara de manera inmediata la distinción que desarrolla la diapositiva 4.',
    role:'Denunciar el desplazamiento ilegítimo desde la pura indeterminación hacia un algo representado.',
    concepts:['representación','algo','ser determinado','ser puro','nada pura','devenir'],
    dependsOn:['E02','P04'], related:['E04','P06','P03'],
    steps:[
      ['Comienzo','Ser y nada puros','Abstracciones sin contenido','concept'],
      ['Dificultad','Representar','Presupone un objeto de representación','term','introduce'],
      ['Desplazamiento','Algo','Existencia y cualidad posteriores','structure','presupone'],
      ['Error','Confundir esferas','Lo puro se toma como ser determinado','mediation','confunde'],
      ['Corrección','Pensar el devenir','Unidad concreta sin imagen de un algo','result','corrige'],
    ]
  },
  {
    id:'E04', slide:4, title:'Ser puro y ser determinado; nada pura y nada determinada',
    literal:[
      'El ser puro es ausencia de determinación y de contenido. Si se piensa un ser determinado, entonces, se piensa un ente con un contenido. Por ejemplo, si se piensa un árbol o un hombre, se estará en el seno del ser determinado. El ser determinado posee cualidades que le configuran como un algo y le distinguen de cualquier otro. Al respecto, Spinoza decía que: “Toda determinación es negación”. Identidad y diferencia del ser determinado y oposición con respecto a otro.',
      'La nada pura también es distinta de la nada determinada. Una nada determinada es la negación de un algo. Por ejemplo, si se piensa la muerte de una persona, entonces, se piensa en su no-ser. Pero este no-ser es no-ser en relación a un contenido.',
      'Hegel expresa con claridad que no se aprehende el sentido del ser puro y de la nada pura, si se los representa como un algo. El algo se encuentra en otra esfera, a saber: la existencia. La existencia presupone el devenir y es resultado de éste.'
    ],
    explanation:'La diapositiva organiza dos distinciones de nivel, no cuatro nombres intercambiables. Ser puro y nada pura carecen de determinación, mientras el ser determinado es un algo cualificado y la nada determinada es la negación de cierto contenido. Árbol, hombre y muerte son ejemplos pedagógicos de la segunda esfera, nunca ejemplos de ser o nada puros. La fórmula atribuida a Spinoza permite explicar por qué la cualidad implica diferenciación y negación, pero su uso aquí es el del material docente. La consecuencia lógica es que el ámbito de algo y otro presupone el tránsito categorial del devenir al ser determinado. Este nodo relaciona el problema metodológico de la Nota 1 con la crítica a convertir la abstracción primera en existencia empírica.',
    role:'Separar categorías puras y determinadas; explicar por qué el devenir antecede al algo.',
    concepts:['ser puro','ser determinado','nada pura','nada determinada','cualidad','Spinoza'],
    dependsOn:['E03','P04','P06'], related:['E08','P19','H17'],
    steps:[
      ['Distinción','Dos niveles lógicos','Lo puro frente a lo determinado','structure'],
      ['Primer nivel','Ser y nada puros','Sin cualidades ni contenido','concept','distingue'],
      ['Segundo nivel','Algo determinado','Cualidad, diferencia y negación','term','contrasta'],
      ['Negación','Nada de un algo','No-ser referido a un contenido','mediation','precisa'],
      ['Orden lógico','Devenir → existencia','El algo presupone el tránsito','result','ordena'],
    ]
  },
  {
    id:'E05', slide:5, title:'El argumento ontológico: objeción de Kant',
    literal:[
      'Hegel inicia la defensa del argumento ontológico, el cual había sido refutado por Kant en la Crítica de la Razón Pura. Consideremos el asunto bajo la perspectiva de Kant.',
      'Primero es necesario recordar que Descartes formula el argumento ontológico para probar la verdad del juicio: “Dios existe”. Para Kant, la formulación cartesiana equivale a un juicio analítico. Empero, para Kant el juicio “Dios existe” es sintético, es decir: la existencia no se agrega a la mera Idea de Dios.',
      'Kant dice: “El ser no es un predicado real”. Esto es: de la esencia (Idea) no se sigue la existencia.',
      'En el texto de Hegel, el asunto se reconstruye con el famoso ejemplo de los cien taleros: ¿quién no sabe que cien taleros reales son distintos a cien taleros posibles? ¿Y que su posesión constituye una diferencia con respecto de mi patrimonio?'
    ],
    explanation:'El profesor primero reconstruye la objeción kantiana. El argumento cartesiano pretende que del concepto de Dios se siga su existencia; para Kant, sin embargo, la existencia no es una determinación conceptual más y no se deduce analíticamente de la idea. El ejemplo de los cien táleros distingue con claridad el contenido pensado de su efectividad: la mera posibilidad no altera el patrimonio. El punto no demuestra todavía la respuesta de Hegel, sino la dificultad que ésta deberá afrontar. Se recomienda cotejar la exposición del material con la crítica de Kant y con el pasaje hegeliano impreso en las pp. 81–83; no presentar las formulaciones pedagógicas como citas directas del texto primario.',
    role:'Exponer completa la objeción kantiana antes de la respuesta hegeliana.',
    concepts:['argumento ontológico','Descartes','Kant','predicado real','cien táleros','existencia'],
    dependsOn:['P07','E04'], related:['E06','P08'],
    steps:[
      ['Antecedente','Descartes','Del concepto de Dios a su existencia','term'],
      ['Crítica','Kant','El ser no añade predicado real','concept','objeta'],
      ['Prueba de control','Cien táleros','Posibles ≠ efectivos en patrimonio','structure','ilustra'],
      ['Distinción','Concepto ≠ existencia','La idea no garantiza efectividad','mediation','distingue'],
      ['Problema abierto','Respuesta de Hegel','¿Vale esta separación para el absoluto?','result','pregunta'],
    ]
  },
  {
    id:'E06', slide:6, title:'El argumento ontológico en Hegel: finito y absoluto',
    literal:[
      'Hegel polemiza con Kant el sentido del argumento ontológico. ¿Quién no sabe que cien táleros reales son diferentes a cien táleros posibles? ¿Y que constituyen una diferencia con respecto de mi patrimonio? El ejemplo de los cien táleros es de Kant y tiene el sentido de indicar que, de la mera posibilidad de los cien táleros, no se sigue su realidad. De manera análoga: de la mera Idea de Dios no se puede derivar su existencia.',
      'Hegel considera que hay un error en la consideración kantiana de Dios. Y es que Hegel piensa a Dios en sentido spinoziano, es decir: como inmanente al mundo. Hegel considera que el error de Kant radica en pensar a Dios al modo como se piensan los seres finitos. De hecho, Hegel señala que la definición de los seres finitos consiste en separar la esencia y la existencia, su posibilidad de su ser. Y que el auténtico sentido de la prueba ontológica consiste en alejar las determinaciones de lo finito para pensar a Dios que es la substancia infinita.',
      'Así, la Ciencia de la Lógica reformula el sentido del argumento ontológico. Ya que si Dios es inmanente al mundo y, además, Dios es pensamiento que se piensa a sí mismo, entonces, en el acto mismo de pensarse, Dios deviene real.',
      'Así, Hegel concluye que: “Por lo contrario, la definición abstracta de Dios es justamente esta: que su concepto y su ser son inseparados e inseparables. La verdadera crítica de las categorías y de la razón consiste precisamente en esto: instruir al conocimiento acerca de esta diferencia y alejarlo de la aplicación de las determinaciones y relaciones de lo finito a Dios”.'
    ],
    explanation:'En esta reconstrucción docente, la réplica de Hegel apunta al alcance de las categorías empleadas por Kant: la separación entre esencia y existencia, pertinente para el ser finito, no debería trasladarse sin examen al absoluto. El profesor enlaza la infinitud con la sustancia inmanente de Spinoza y con la figura aristotélica del pensamiento que se piensa a sí mismo. Conviene distinguir esa síntesis pedagógica de una demostración textual exhaustiva de la prueba ontológica. La conclusión específica a estudiar es la diferencia entre el ser finito, para el que concepto y existencia pueden divergir, y el absoluto, cuya definición especulativa es inseparabilidad de concepto y ser. No se infiere que cualquier cosa imaginada exista. El paso enlaza la controversia sobre Kant con la insuficiencia de la forma del juicio ordinario en la Nota 2.',
    role:'Reconstruir la respuesta hegeliana sin atribuir a la fuente primaria las mediaciones del profesor.',
    concepts:['Hegel','Kant','Spinoza','inmanencia','absoluto','esencia y existencia'],
    dependsOn:['E05','P08'], related:['E07','E01','C31'],
    steps:[
      ['Cuestión','Dios y la existencia','¿Sirve el modelo de los entes finitos?','structure'],
      ['Kant','Esencia / existencia','Separación para lo finito','term','expone'],
      ['Objeción de Hegel','Cambio de ámbito','No aplicar sin crítica lo finito a Dios','mediation','objeta'],
      ['Marco docente','Sustancia infinita','Inmanencia y pensar autorreferente','concept','interpreta'],
      ['Tesis especulativa','Concepto y ser','Inseparables en la definición de Dios','result','concluye'],
    ]
  },
  {
    id:'E07', slide:7, title:'Nota 2 · Imperfección de la expresión especulativa',
    literal:[
      'Hegel formula el sentido de la “proposición especulativa”.',
      'Simplemente, la forma tradicional del juicio: “no es apta para expresar verdades especulativas”. Ya que la forma tradicional puede ser: S es P, S no es P.',
      'La unidad del devenir implica el momento de la afirmación de la inseparabilidad del ser y de la nada. Pero también implica el momento de la diferencia, es decir, de la oposición. La proposición especulativa piensa los momentos opuestos en su unidad.',
      'Debido a que, tanto el ser y la nada son puros, su diferencia es inefable. Ya que, si se tratará de indicar la diferencia se mostraría un contenido. Así: “El devenir es el subsistir del ser tanto como del no-ser; o sea, su subsistir es sólo su ser (existir) en uno; precisamente este su subsistir es lo que elimina a la vez su diferencia.”'
    ],
    explanation:'La forma de juicio S es P o S no es P fija posiciones predicativas y no muestra por sí sola el tránsito entre determinaciones que Hegel denomina especulativo. La formulación «ser y nada son lo mismo» resulta incompleta si el lector elimina su distinción, pero tampoco basta afirmar que son diferentes como si fueran dos cosas independientes. La diapositiva sostiene ambas condiciones: inseparabilidad y oposición. Como los términos son puros, cualquier diferenciación por una cualidad añadiría un contenido impropio de ese comienzo. La verdad se expresa mejor como devenir: subsistencia de momentos que sólo existen en relación de pasar recíproco. Esta nota proporciona el método conceptual para interpretar también la discusión sobre concepto y ser del argumento ontológico.',
    role:'Mostrar por qué una identidad fija o un juicio ordinario no sustituyen el movimiento especulativo.',
    concepts:['proposición especulativa','juicio tradicional','identidad','oposición','devenir'],
    dependsOn:['E02','E06','P09'], related:['E09','H18'],
    steps:[
      ['Forma limitada','S es P / S no es P','El juicio fija determinaciones','term'],
      ['Contenido','Ser y nada','Inseparables y diferentes','concept','tensiona'],
      ['Límite','Diferencia inefable','Añadir cualidad cambia de nivel','structure','advierte'],
      ['Forma requerida','Pensar el movimiento','Unidad que no suprime los momentos','mediation','supera'],
      ['Verdad','Devenir','Tránsito de ser y no-ser','result','expresa'],
    ]
  },
  {
    id:'E08', slide:8, title:'Nota 3 · La acción aisladora de las abstracciones',
    literal:[
      'Hegel plantea el problema del comienzo de la filosofía y establece un dialogo con Jacobi. Este filósofo había planteado su filosofía en polémica con Kant. ¿Cómo del espacio puro o del tiempo puro o del yo puro puede derivarse la multiplicidad constitutiva de la realidad?',
      'Hegel cita a Jacobi: “¿Qué hay que lleve en aquellos tres infinitos la finitud? ¿Qué hay que fecunde el espacio y el tiempo a priori con el número y la medida y los transforme en un puro múltiple? [O dicho de otro modo] ¿Qué es aquello que lleva la determinación a lo indeterminado?”.',
      'Y la respuesta de Hegel consiste en unir lo indeterminado con lo determinado por medio del Devenir. Ya que: “Del devenir nace el ser determinado”.'
    ],
    explanation:'El profesor recoge la objeción de Jacobi al intento de deducir multiplicidad desde abstracciones que primero se han aislado: espacio puro, tiempo puro y yo puro no contienen por sí solos un repertorio de diferencias cualitativas. La pregunta no se resuelve introduciendo arbitrariamente un contenido adicional; exige examinar el movimiento que lleva de las abstracciones a una determinación. Según la exposición docente, la respuesta de Hegel se encuentra en el devenir, cuyos momentos se eliminan y conservan en un resultado determinado. En el itinerario textual hay que distinguir la polémica con Jacobi (pp. 88–92) y el resultado del devenir (pp. 97–98): conectarlos es una reconstrucción sistémica, no una cita continua de Hegel.',
    role:'Enlazar la objeción de Jacobi con la génesis del ser determinado a través del devenir.',
    concepts:['Jacobi','abstracción','comienzo','indeterminación','ser determinado','devenir'],
    dependsOn:['E04','P12','P13'], related:['E09','P19'],
    steps:[
      ['Pregunta','¿Cómo comienza?','Lo puro carece de multiplicidad','concept'],
      ['Crítica de Jacobi','Espacio / tiempo / yo','Abstracciones aisladas','term','cuestiona'],
      ['Dificultad','Finitud y medida','¿De dónde viene lo determinado?','structure','interroga'],
      ['Respuesta docente','Devenir','Tránsito inmanente entre momentos','mediation','responde'],
      ['Resultado','Ser determinado','Dasein: resultado, no punto de partida','result','produce'],
    ]
  },
  {
    id:'E09', slide:9, title:'Nota 4 · La incomprensibilidad del comienzo',
    literal:[
      'La incomprensibilidad se da, si se piensa al ser y a la nada desde el ámbito de la existencia, esto es: de las determinaciones cualitativas que distinguen un algo de otro.',
      'Hegel afirma que en su Lógica: “en cambio llamamos dialéctica al superior movimiento racional, en el cual tales términos, que parecen absolutamente separados, traspasan el uno al otro por sí mismos, por medio de lo que ellos son […] La inmanente naturaleza dialéctica del ser y la nada mismos consiste en que ellos muestran su unidad, esto es, el devenir como su verdad”.',
      'Y cierra Hegel con la negación determinada o aufheben: “Algo es eliminado sólo en cuanto ha llegado a ponerse en unidad con su opuesto; en esta determinación […] puede con razón ser llamado un momento”.',
      'Por consiguiente, el devenir es la unidad superior que incluye dentro de sí los momentos opuestos del ser y de la nada.'
    ],
    explanation:'La incomprensibilidad es efecto de leer las abstracciones iniciales con categorías de la existencia determinada. El texto docente resume la alternativa hegeliana como movimiento racional inmanente: los opuestos no se relacionan sólo desde fuera, sino que cada uno pasa a su otro a partir de su propia indeterminación. El devenir resulta de ese tránsito y mantiene la distinción de ser y nada como momentos, sin congelarlos. La mención final de Aufheben —eliminar y conservar— permite comprender que el resultado no es una nada vacía ni la anulación arbitraria de la diferencia, sino el paso hacia el ser determinado. Para estudiar el texto primario deben leerse por separado la Nota 4 (pp. 94–96) y la transición al Dasein (pp. 97–98). Esta distinción editorial evita atribuir al mismo pasaje afirmaciones que la presentación reúne con finalidad didáctica.',
    role:'Cerrar las cuatro notas articulando dialéctica, Aufheben y aparición del ser determinado.',
    concepts:['dialéctica','ser y nada','devenir','Aufheben','negación determinada','Dasein'],
    dependsOn:['E07','E08','P16','P20'], related:['E03','P18','P19'],
    steps:[
      ['Diagnóstico','Falsa incomprensión','Se aplican categorías del algo','structure'],
      ['Principio','Dialéctica inmanente','Los opuestos pasan uno al otro','concept','corrige'],
      ['Movimiento','Ser / nada','Diferencia en inseparabilidad','term','moviliza'],
      ['Verdad','Devenir','La unidad conserva los momentos','mediation','resuelve'],
      ['Superación','Aufheben','Eliminar y conservar en una unidad','mediation','conserva'],
      ['Resultado','Dasein','Ser determinado nacido del devenir','result','desemboca'],
    ]
  },
]

export const hegelTeacherSlideById = new Map(hegelTeacherSlides.map((slide) => [slide.id, slide]))

/** No es esquema literal de la diapositiva: reconstrucción didáctica declarada. */
export function buildHegelTeacherSchema(slide) {
  const nodes=slide.steps.map(([key,label,caption,role],index)=>({
    id:`${slide.id}-s${index}`,
    label,
    caption:`${key} · ${caption}`,
    shape:'roundedRect',
    shapeRole:role,
    emphasis:role==='mediation',
    width:300,
    height:126,
    wrapAt:24,
    captionWrapAt:30,
  }))
  const edges=slide.steps.slice(1).map((step,index)=>({
    from:nodes[index].id,
    to:nodes[index+1].id,
    label:step[4] || 'continúa',
    relationKind:'hierarchical',
  }))
  return {
    layout:'hierarchy',
    rootId:nodes[0].id,
    readingLayout:'vertical-folio',
    hierarchyXGap:116,
    hierarchyYGap:144,
    minHeight:nodes.length*290,
    fitPadding:62,
    ariaLabel:`Reconstrucción sistémica docente ${slide.id}, diapositiva ${slide.slide}`,
    nodes,edges,
    animation:{mode:'branch',nodeDuration:.28,edgeDuration:.32},
  }
}
