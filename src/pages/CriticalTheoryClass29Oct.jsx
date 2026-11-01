import { useState } from 'react'
import { Link } from 'react-router'
import './CriticalTheoryClass15Oct.css'
import './CriticalTheoryClass20Oct.css'
import './CriticalTheoryClass22Oct.css'
import { imagesForCriticalTheoryClass } from '../data/criticalTheoryImages'

const themes = [
  {
    id: 'inconsciente',
    mark: 'Ψ',
    name: 'Inconsciente y mediaciones',
    eyebrow: 'PSICOLOGÍA PROFUNDA',
    question: '¿Cómo se estudia algo que no aparece directamente ante la conciencia?',
    thesis: 'La sesión presenta el inconsciente como hipótesis de trabajo y sitúa lenguaje, cultura, sueños, lapsus y símbolos como mediaciones para interpretarlo.',
    argument: 'La profesora distingue al psicoanálisis de psicologías centradas sólo en conducta observable y lo describe como una indagación de motivaciones internas.',
    development: 'Surrealismo, sueños y lapsus aparecen como ejemplos de formaciones donde la vida inconsciente puede hacerse perceptible sin volverse transparente.',
    relation: 'parallel',
    nodes: [
      { label: 'POSTULADO', title: 'Inconsciente', body: 'No es directamente capturable; se reconstruye por sus manifestaciones.' },
      { label: 'MEDIACIÓN', title: 'Lenguaje y cultura', body: 'Palabras, símbolos y producciones culturales funcionan como vías de interpretación.' },
      { label: 'HUELLAS', title: 'Sueños, lapsus y chistes', body: 'La clase los usa como ejemplos de irrupciones que desbordan la intención consciente.' }
    ],
    guide: {
      what: 'Tres planos de acceso indirecto al inconsciente tal como fueron articulados en la sesión.',
      how: 'Leerlos como mediaciones complementarias; no como pruebas independientes ni como una taxonomía exhaustiva de Freud.',
      why: 'Permite entender por qué el método psicoanalítico es interpretativo y no una observación directa de un objeto físico.',
      simple: 'El inconsciente no se ve de frente: se intenta entender por las huellas que deja.',
      takeaway: 'La sesión insiste en que interpretar no equivale a poseer una certeza definitiva sobre el inconsciente.'
    },
    source: 'Explicación docente y ejemplos trabajados en clase.'
  },
  {
    id: 'devenir',
    mark: '↗',
    name: 'Devenir, neurosis y sufrimiento',
    eyebrow: 'FORMACIÓN DEL SUJETO',
    question: '¿Qué intenta explicar el psicoanálisis sobre la forma en que llegamos a ser quienes somos?',
    thesis: 'La profesora lo presenta como una teoría del devenir humano: personalidad, conflictos, sufrimiento y modos de relación se comprenden históricamente.',
    argument: 'La distinción neurosis/psicosis aparece como explicación de aula sobre grados de padecimiento y relación con la realidad, no como guía clínica.',
    development: 'La pregunta “¿por qué pienso como pienso?” organiza el tránsito desde conductas visibles hacia una historia psíquica y relacional.',
    relation: 'sequence',
    nodes: [
      { label: 'HISTORIA', title: 'Experiencias', body: 'La personalidad se forma a través de relaciones, afectos y conflictos.' },
      { label: 'SÍNTOMA', title: 'Padecimiento', body: 'El sufrimiento se vuelve una vía para preguntar por conflictos no elaborados.' },
      { label: 'LECTURA', title: 'Interpretación', body: 'La terapia busca reconstruir sentidos, no reducir la persona a una conducta aislada.' }
    ],
    guide: {
      what: 'Una ruta pedagógica desde la experiencia biográfica hacia la interpretación del padecimiento.',
      how: 'Seguirla como secuencia de preguntas de clase; no como diagnóstico médico ni protocolo terapéutico.',
      why: 'La sesión relaciona teoría psicoanalítica y formación de la personalidad con el problema del sufrimiento humano.',
      simple: 'Para entender un conflicto actual, el psicoanálisis pregunta cómo se fue formando esa manera de vivirlo.',
      takeaway: 'Las categorías clínicas aparecen en contexto académico y deben conservarse como formulaciones de clase.'
    },
    source: 'Explicación docente; delimitación editorial para evitar convertir ejemplos de aula en consejo clínico.'
  },
  {
    id: 'placer',
    mark: '±',
    name: 'Placer, falta y realidad',
    eyebrow: 'FELICIDAD POSITIVA / NEGATIVA',
    question: '¿Por qué la búsqueda de satisfacción plena choca con la vida adulta?',
    thesis: 'La clase contrapone una aspiración de goce permanente con el principio de realidad y con una felicidad negativa entendida como reducción del sufrimiento.',
    argument: 'La profesora conecta el sentimiento oceánico con una plenitud perdida y, como ampliación, introduce la idea lacaniana de reconocer la falta.',
    development: 'El contraste resulta central: el placer se experimenta también por diferencia, mientras cuerpo, límites y mundo impiden una satisfacción constante.',
    relation: 'sequence',
    nodes: [
      { label: 'IMPULSO', title: 'Principio del placer', body: 'Busca satisfacción, bienestar y reducción del displacer.' },
      { label: 'LÍMITE', title: 'Principio de realidad', body: 'Reconoce que el mundo no se ajusta de inmediato a lo que deseamos.' },
      { label: 'SALIDA', title: 'Felicidad negativa', body: 'La clase la formula como conformarse al menos con disminuir el sufrimiento.' }
    ],
    guide: {
      what: 'La tensión entre satisfacción, realidad y una forma mínima de bienestar.',
      how: 'No identificar la ampliación sobre la falta con una formulación textual de Freud; fue una conexión docente con Lacan.',
      why: 'Este núcleo explica por qué El malestar en la cultura no puede reducirse a una teoría simple de “cómo ser feliz”.',
      simple: 'Queremos sentirnos bien siempre, pero crecer implica aceptar límites y aprender a vivir sin plenitud permanente.',
      takeaway: 'La imposibilidad de satisfacción constante abre el problema de cómo las personas y las culturas gestionan el malestar.'
    },
    source: 'Clase sobre Freud; referencia a Lacan identificada como ampliación docente.'
  },
  {
    id: 'sufrimiento',
    mark: '△',
    name: 'Tres fuentes y estrategias',
    eyebrow: 'CUERPO / NATURALEZA / VÍNCULOS',
    question: '¿De dónde proviene el sufrimiento y qué estrategias construimos para enfrentarlo?',
    thesis: 'La sesión organiza el problema alrededor de la vulnerabilidad corporal, la naturaleza y las relaciones humanas, y revisa estrategias de alivio o transformación.',
    argument: 'Drogas, carnavales, prácticas espirituales y control técnico de la naturaleza aparecen como ejemplos de formas culturales de gestionar límites.',
    development: 'La clase insiste especialmente en los vínculos: amar puede producir una felicidad intensa y, precisamente por eso, también una vulnerabilidad profunda.',
    relation: 'parallel',
    nodes: [
      { label: 'CUERPO', title: 'Caducidad', body: 'Enfermedad, envejecimiento y muerte exponen la fragilidad corporal.' },
      { label: 'MUNDO', title: 'Naturaleza', body: 'Catástrofes y fuerzas no controladas alimentan la búsqueda de conocimiento y protección.' },
      { label: 'OTROS', title: 'Relaciones', body: 'Los vínculos pueden sostener la felicidad y convertirse también en fuente de pérdida.' }
    ],
    guide: {
      what: 'Las tres fuentes de sufrimiento enumeradas y desarrolladas en la sesión.',
      how: 'Compararlas sin reducir una a otra; las estrategias culturales posteriores responden de maneras distintas a cada límite.',
      why: 'Prepara el paso desde la psicología individual hacia el problema social y cultural del malestar.',
      simple: 'Sufrimos por nuestro cuerpo, por lo que ocurre en el mundo y por lo que pasa con otras personas.',
      takeaway: 'El problema cultural aparece cuando las estrategias para reducir el sufrimiento también implican restricciones, normas y formas de relación.'
    },
    source: 'Recorrido docente por las fuentes de sufrimiento y las estrategias culturales.'
  },
  {
    id: 'memoria',
    mark: '∞',
    name: 'Memoria, transferencia y repetición',
    eyebrow: 'TRABAJO ANALÍTICO',
    question: '¿Por qué hacer consciente una experiencia dolorosa podría modificar una repetición?',
    thesis: 'La sesión usa la analogía de Roma, el iceberg y una “conservación de lo psíquico” para explicar que las experiencias dejan huellas activas en la vida inconsciente.',
    argument: 'La transferencia se presenta como una relación afectiva donde figuras significativas pueden reaparecer simbólicamente en la relación analítica.',
    development: 'La repetición del sufrimiento se explica como retorno de escenas o patrones no elaborados; hacerlos conscientes abre la posibilidad de actuar de otra manera.',
    relation: 'sequence',
    nodes: [
      { label: 'HUELLA', title: 'Memoria psíquica', body: 'Las experiencias no quedan como un archivo pasivo: siguen reorganizándose.' },
      { label: 'RELACIÓN', title: 'Transferencia', body: 'El vínculo analítico puede adquirir representaciones afectivas ligadas a relaciones previas.' },
      { label: 'RUPTURA', title: 'Repetición', body: 'Reconocer un patrón permite intentar interrumpir su reproducción automática.' }
    ],
    guide: {
      what: 'Una reconstrucción del movimiento que une memoria, transferencia y repetición en la exposición.',
      how: 'Tomar la “ley de conservación” como analogía presentada en clase y no como una ley física trasladada literalmente a la psique.',
      why: 'Permite comprender por qué la cura fue descrita como rememoración y elaboración, no como simple consejo.',
      simple: 'Lo que no entendemos de nuestra historia puede volver a organizar nuestras decisiones; reconocerlo puede abrir otra posibilidad.',
      takeaway: 'La repetición fue un ejemplo docente para pensar la elaboración de lo inconsciente, no una explicación universal de toda conducta.'
    },
    source: 'Explicación docente mediante analogías de Roma, iceberg, transferencia y repetición.'
  }
]

const sections = [
  {
    id: 'profundidad', title: 'Psicoanálisis como psicología profunda', evidence: 'Clase del 29 de octubre.',
    question: '¿Qué cambia cuando una psicología pregunta no sólo qué hacemos, sino qué motivaciones internas intervienen?',
    thesis: 'La profesora presenta al psicoanálisis como psicología del inconsciente y añade el psicoanálisis vincular como desarrollo que intensifica la atención a las relaciones.',
    explanation: 'El comportamiento visible no agota la explicación. La sesión insiste en la subjetividad, la emocionalidad y la interacción con otras personas como dimensiones del problema.',
    nodes: [['EXTERIOR','Conducta','Lo que puede observarse desde fuera.'],['INTERIOR','Motivaciones','Hipótesis sobre deseos, afectos y conflictos no transparentes.'],['VÍNCULO','Relaciones','La vida psíquica se forma y se expresa en interacción con otros.']],
    contrast: [['Conducta observable','Describe lo que una persona hace.'],['Lectura profunda','Pregunta qué conflictos y motivaciones podrían estar operando.']],
    simple: 'El psicoanálisis quiere saber no sólo qué hacemos, sino qué historia y qué afectos están detrás.',
    practice: '¿Por qué la profesora llama “profunda” a esta psicología?'
  },
  {
    id: 'mediaciones', title: 'El inconsciente y sus mediaciones', evidence: 'Clase; surrealismo usado como ejemplo.',
    question: '¿Cómo puede interpretarse algo que no se deja capturar directamente?',
    thesis: 'La clase sitúa lenguaje, símbolos y producciones culturales como mediaciones del inconsciente.',
    explanation: 'El surrealismo se usa para mostrar el intento deliberado de representar contenidos que perturban la coherencia del principio de realidad. El ejemplo es pedagógico: no convierte toda obra surrealista en evidencia clínica.',
    nodes: [['LENGUAJE','Representación','Habla, escritura y simbolización.'],['CULTURA','Producciones','Arte y otras formas culturales como posibles mediaciones.'],['SURREALISMO','Ejemplo','Una estética que busca desacomodar la lógica consciente.']],
    contrast: [['Acceso directo','Supondría observar el inconsciente como objeto.'],['Acceso mediado','Interpreta huellas, símbolos y formaciones.']],
    simple: 'No vemos el inconsciente; interpretamos lo que aparece a través de símbolos y acciones.',
    practice: '¿Qué significa decir que la cultura puede mediar contenidos inconscientes?'
  },
  {
    id: 'cura', title: 'Hacer consciente lo inconsciente', evidence: 'Explicación docente sobre el objetivo analítico.',
    question: '¿Por qué la terapia no termina simplemente cuando aparece una explicación?',
    thesis: 'El objetivo fue formulado como llevar a conciencia contenidos inconscientes, pero la profesora remarca que el proceso no alcanza un punto final total.',
    explanation: 'El inconsciente sigue produciendo contenidos. Por eso la cura fue descrita como trabajo continuo de reconstrucción de sentido y no como vaciamiento definitivo de una zona oculta.',
    nodes: [['OCULTO','Contenido','Algo opera sin ser reconocido claramente.'],['TRABAJO','Interpretación','Se reconstruyen conexiones y sentidos.'],['LÍMITE','Sin cierre total','La conciencia no absorbe de una vez toda la vida psíquica.']],
    contrast: [['“Sacar todo”','Imagen de una cura completa y definitiva.'],['Trabajo analítico','Proceso de elaboración parcial y continuo.']],
    simple: 'Entender algo de uno mismo no significa que ya no quede nada por comprender.',
    practice: '¿Qué límite señaló la profesora al ideal de volver consciente todo lo inconsciente?'
  },
  {
    id: 'devenir', title: 'Una teoría del devenir humano', evidence: 'Clase; formulación explícita de la profesora.',
    question: '¿Qué preguntas sobre la personalidad organiza el psicoanálisis?',
    thesis: 'La sesión lo presenta como teoría de cómo se conforma una personalidad y de por qué pensamos, entramos en conflicto y sufrimos de ciertas maneras.',
    explanation: 'El sujeto no aparece terminado desde el inicio. Su modo de relacionarse se forma en un proceso histórico de experiencias, dependencias, afectos y resoluciones conflictivas.',
    nodes: [['FORMACIÓN','Personalidad','Se constituye a lo largo del tiempo.'],['CONFLICTO','Relación','Los vínculos revelan tensiones de esa historia.'],['SUFRIMIENTO','Pregunta','El padecimiento se vuelve material de interpretación.']],
    contrast: [['Rasgo fijo','Supone una personalidad dada de una vez.'],['Devenir','Piensa la personalidad como proceso.']],
    simple: 'Somos una historia en formación, no una personalidad que apareció completa.',
    practice: '¿Por qué “devenir” describe mejor la personalidad que una esencia fija?'
  },
  {
    id: 'neurosis', title: 'Neurosis y psicosis en la explicación de aula', evidence: 'Explicación docente; registro académico, no diagnóstico.',
    question: '¿Qué diferencia quiso marcar la profesora entre padecer y perder la relación funcional con la realidad?',
    thesis: 'La clase usa neurosis para hablar de sufrimiento compatible con funcionamiento cotidiano y psicosis para ejemplificar una pérdida grave de relación con la realidad.',
    explanation: 'Se conserva la distinción como formulación didáctica de la sesión. No se transforma en criterio clínico, diagnóstico ni consejo de salud.',
    nodes: [['NEUROSIS','Padecimiento','La clase la asocia con conflicto y sufrimiento sin inhabilitación total.'],['PSICOSIS','Realidad','La explicación la asocia con pérdida profunda del principio de realidad.'],['LÍMITE','Aula','Son categorías expuestas pedagógicamente, no evaluaciones de personas concretas.']],
    contrast: [['Concepto de clase','Ayuda a seguir la argumentación de la profesora.'],['Diagnóstico','Exige evaluación clínica que esta página no realiza.']],
    simple: 'La clase distinguió dos formas de padecimiento, pero eso no sirve para diagnosticar a nadie aquí.',
    practice: '¿Qué precaución debe mantenerse al estudiar esta distinción?'
  },
  {
    id: 'huellas', title: 'Lapsus, chistes y sueños', evidence: 'Clase; ejemplos de manifestación del inconsciente.',
    question: '¿Por qué interesan al psicoanálisis actos que parecen accidentales o absurdos?',
    thesis: 'La profesora los presenta como lugares donde puede aparecer algo que no coincide con la intención consciente.',
    explanation: 'En los sueños se debilitan las barreras habituales de control. Los lapsus y chistes fueron tratados como irrupciones que permiten preguntar por sentidos que no estaban deliberadamente formulados.',
    nodes: [['LAPSUS','Desliz','La palabra dicha no coincide con la intención declarada.'],['CHISTE','Desvío','El humor puede introducir contenidos que la conciencia no formula directamente.'],['SUEÑO','Barreras','Durante el sueño se relaja parte del control consciente.']],
    contrast: [['Intención consciente','Lo que la persona cree querer decir o hacer.'],['Formación indirecta','Algo aparece sin haber sido deliberado de ese modo.']],
    simple: 'A veces decimos, soñamos o bromeamos de formas que nos sorprenden; el psicoanálisis pregunta por qué.',
    practice: '¿Qué tienen en común lapsus, chistes y sueños en la exposición?'
  },
  {
    id: 'oceanico', title: 'Sentimiento oceánico e individuación', evidence: 'Continuidad de la lectura de Freud trabajada en clase.',
    question: '¿Cómo se pasa de una experiencia de fusión a reconocerse como individuo separado?',
    thesis: 'La sesión retoma el sentimiento oceánico y lo relaciona con una no diferenciación inicial entre yo y mundo.',
    explanation: 'La individuación aparece como proceso conflictivo: la separación de los cuidadores introduce frustración, dependencia y reconocimiento de que el otro no es una prolongación de uno mismo.',
    nodes: [['FUSIÓN','No diferenciación','El límite yo/otro todavía no está claramente establecido.'],['SEPARACIÓN','Frustración','El otro deja de estar disponible de manera inmediata.'],['INDIVIDUACIÓN','Límite','Se reconoce la diferencia entre sí mismo y el mundo.']],
    contrast: [['Plenitud primordial','Imagen de unidad sin falta.'],['Individuación','Proceso de separación con costo afectivo.']],
    simple: 'Crecer implica descubrir que los demás no son una parte de nosotros y que no pueden estar siempre disponibles.',
    practice: '¿Por qué la individuación fue presentada como un proceso doloroso?'
  },
  {
    id: 'cuidado', title: 'Dependencia, cuidado y libido', evidence: 'Clase; vínculo entre cuidados tempranos y afectividad.',
    question: '¿Por qué los cuidados básicos participan también en la formación afectiva?',
    thesis: 'La profesora destaca la vulnerabilidad inicial del ser humano y la dependencia de cuidadores para explicar la profundidad de ciertos vínculos.',
    explanation: 'Alimentación, protección, contacto y aprendizaje corporal se enlazan con afectos. La libido fue presentada en un sentido más amplio que la sexualidad reducida al coito.',
    nodes: [['DEPENDENCIA','Vulnerabilidad','El recién nacido requiere de otros para sobrevivir.'],['CUIDADO','Contacto','Alimentar, proteger y sostener construye vínculos.'],['LIBIDO','Afectividad','La clase la relaciona con una sexualidad y una economía afectiva amplias.']],
    contrast: [['Sexualidad reducida','La identifica sólo con genitalidad o coito.'],['Libido en la clase','Incluye una dimensión afectiva y relacional más extensa.']],
    simple: 'Necesitamos a otros desde el inicio, y esa dependencia también organiza nuestros afectos.',
    practice: '¿Qué relación estableció la profesora entre cuidado y afectividad?'
  },
  {
    id: 'placer', title: 'Principio del placer', evidence: 'Lectura y explicación docente.',
    question: '¿Qué busca el sujeto antes de reconocer los límites del mundo?',
    thesis: 'El principio del placer fue explicado como búsqueda de satisfacción, bienestar y reducción del displacer.',
    explanation: 'El bebé funciona como ejemplo de una demanda inmediata: alimento, contacto y descarga sin calendario propio. La experiencia obliga después a reconocer límites externos.',
    nodes: [['DESEO','Satisfacción','Tendencia hacia estados placenteros.'],['INMEDIATEZ','Demanda','La satisfacción se busca sin demora.'],['FRUSTRACIÓN','Límite','El mundo no responde siempre cuando aparece la necesidad.']],
    contrast: [['Deseo inmediato','Busca satisfacción sin demora.'],['Mundo compartido','Impone tiempos, ausencia y restricciones.']],
    simple: 'Queremos que lo que deseamos ocurra ya; la realidad enseña que no siempre puede ser así.',
    practice: '¿Qué papel desempeña la frustración en el paso siguiente?'
  },
  {
    id: 'falta', title: 'La falta como ampliación lacaniana', evidence: 'Ampliación de la profesora; no atribuir a Freud como cita.',
    question: '¿Qué significa vivir sin esperar recuperar una satisfacción total?',
    thesis: 'La profesora introduce a Lacan para describir una vida adulta que reconoce la falta y renuncia a la expectativa de plenitud permanente.',
    explanation: 'La imagen del “hueco” sirve para pensar una ausencia que no puede llenarse definitivamente. Se conserva como conexión docente posterior y no se presenta como formulación textual de El malestar en la cultura.',
    nodes: [['PLENITUD','Ideal','Fantasía de satisfacción total.'],['FALTA','Reconocimiento','La vida adulta admite que algo siempre queda abierto.'],['TRABAJO','Convivencia','El problema es cómo vivir con esa falta sin exigir su desaparición total.']],
    contrast: [['Freud en la lectura','Problematiza placer, realidad y sufrimiento.'],['Lacan en la clase','La profesora lo usa para ampliar el problema mediante la falta.']],
    simple: 'Madurar no sería llenar cada vacío, sino aprender a vivir sin una plenitud absoluta.',
    practice: '¿Por qué esta sección debe atribuirse a la profesora y a Lacan, y no confundirse con una cita de Freud?'
  },
  {
    id: 'felicidad', title: 'Felicidad positiva y negativa', evidence: 'Explicación docente a partir de la lectura.',
    question: '¿Qué queda cuando la satisfacción permanente se reconoce como imposible?',
    thesis: 'La felicidad positiva aparece como goce sostenido; la negativa, como aspiración mínima a evitar o disminuir el sufrimiento.',
    explanation: 'La clase conecta esta distinción con el principio de realidad: si la plenitud no puede sostenerse, buena parte de los esfuerzos humanos se orienta a reducir el padecimiento.',
    nodes: [['POSITIVA','Gozar','Ideal de satisfacción permanente.'],['REALIDAD','Límite','El mundo y el cuerpo frustran esa permanencia.'],['NEGATIVA','No sufrir','Búsqueda de alivio o reducción del dolor.']],
    contrast: [['Plenitud constante','Pretensión de bienestar sin interrupción.'],['Alivio','Objetivo más modesto de reducir el sufrimiento.']],
    simple: 'Si no podemos ser felices todo el tiempo, al menos intentamos sufrir menos.',
    practice: '¿Cómo cambia el objetivo de la felicidad al entrar el principio de realidad?'
  },
  {
    id: 'fuentes', title: 'Cuerpo, naturaleza y relaciones', evidence: 'Recorrido de la clase por las fuentes del sufrimiento.',
    question: '¿Qué límites impiden sostener un estado permanente de satisfacción?',
    thesis: 'La clase enumera la fragilidad corporal, las amenazas de la naturaleza y los vínculos humanos como fuentes mayores de sufrimiento.',
    explanation: 'El cuerpo enferma, envejece y muere; la naturaleza puede desbordar el control; los vínculos amorosos intensifican tanto la felicidad como la posibilidad de pérdida.',
    nodes: [['CUERPO','Caducidad','Dolor, enfermedad, envejecimiento y muerte.'],['NATURALEZA','Amenaza','Fuerzas que no dominamos por completo.'],['VÍNCULOS','Vulnerabilidad','Amar abre satisfacción y riesgo de pérdida.']],
    contrast: [['Control total','Pretende eliminar toda fuente externa de dolor.'],['Vulnerabilidad','Reconoce límites constitutivos de la vida humana.']],
    simple: 'Nuestro cuerpo, el mundo y las relaciones pueden hacernos sufrir precisamente porque no los controlamos por completo.',
    practice: '¿Cuál de las tres fuentes conduce directamente al problema social que interesa a la profesora?'
  },
  {
    id: 'estrategias', title: 'Drogas, carnavales y prácticas espirituales', evidence: 'Ejemplos docentes sobre estrategias culturales frente al malestar.',
    question: '¿Cómo intentan las culturas aliviar restricciones, represión y sufrimiento?',
    thesis: 'La sesión recorre sustancias, días de permisividad y prácticas de transformación subjetiva como respuestas distintas al malestar.',
    explanation: 'Carnavales y drogas aparecen como vías de fuga o modificación de la experiencia; yoga y prácticas espirituales desplazan la atención desde controlar lo exterior hacia modificar la relación subjetiva con el dolor.',
    nodes: [['FUGA','Carnaval','Afloja temporalmente restricciones y normas.'],['MODIFICACIÓN','Sustancias','Alteran percepción y experiencia.'],['INTERIOR','Práctica','Busca transformar la relación subjetiva con el sufrimiento.']],
    contrast: [['Cambiar el mundo','Control técnico o externo de las condiciones.'],['Cambiar la experiencia','Modificar la forma en que el sujeto percibe o procesa el límite.']],
    simple: 'A veces intentamos cambiar lo de afuera; otras veces intentamos cambiar cómo lo vivimos.',
    practice: '¿Qué diferencia hay entre una estrategia de control externo y una de transformación subjetiva?'
  },
  {
    id: 'conservacion', title: 'Roma, iceberg y conservación de lo psíquico', evidence: 'Analogías docentes empleadas durante la sesión.',
    question: '¿Cómo explicar que experiencias pasadas sigan operando sin estar presentes en la conciencia?',
    thesis: 'La profesora usa Roma y el iceberg para pensar una vida psíquica estratificada donde las experiencias dejan huellas que no forman un almacén pasivo.',
    explanation: 'La analogía con una conservación de lo psíquico fue presentada con cautela: lo vivido se conserva y se reorganiza, aunque la propia exposición reconoce que Freud matiza formulaciones de este tipo.',
    nodes: [['ROMA','Estratos','Capas históricas que se superponen sin desaparecer simplemente.'],['ICEBERG','Proporción','La conciencia aparece como una zona menor frente a una vida inconsciente amplia.'],['DINÁMICA','Reorganización','Lo almacenado se mueve y adquiere nuevas relaciones.']],
    contrast: [['Archivo pasivo','Guarda intactos recuerdos como objetos.'],['Memoria dinámica','Las huellas se reorganizan y siguen afectando el presente.']],
    simple: 'El pasado no estaría guardado como cajas cerradas: sigue mezclándose con la manera en que vivimos hoy.',
    practice: '¿Por qué la analogía del almacén necesita corregirse con la idea de dinamismo?'
  },
  {
    id: 'transferencia', title: 'Transferencia y afectividad', evidence: 'Explicación docente sobre la relación analítica.',
    question: '¿Qué ocurre cuando una relación presente comienza a cargar afectos y figuras de relaciones anteriores?',
    thesis: 'La transferencia fue explicada como una relación donde el analista puede adquirir simbólicamente la representación de figuras significativas.',
    explanation: 'La sesión insiste en que la relación analítica está atravesada por afectividad. Esa cercanía no autoriza faltas éticas ni convierte el vínculo en relación personal ordinaria.',
    nodes: [['VÍNCULO','Afectividad','La sesión analítica no es emocionalmente neutra.'],['REPRESENTACIÓN','Figura','El analista puede representar simbólicamente a madre, padre o pareja.'],['TRABAJO','Elaboración','Esa relación se vuelve material para reconocer patrones.']],
    contrast: [['Afectividad','Hace posible una relación de trabajo y acompañamiento.'],['Permiso ético','No se sigue de la afectividad ni autoriza transgresiones.']],
    simple: 'En terapia podemos reaccionar ante el analista como si algo de otras relaciones importantes estuviera reapareciendo.',
    practice: '¿Por qué la transferencia puede ser material de análisis?'
  },
  {
    id: 'repeticion', title: 'Repetición y elaboración', evidence: 'Clase; ejemplos de patrones relacionales usados por la profesora.',
    question: '¿Qué significa repetir una escena sin reconocer que se está repitiendo?',
    thesis: 'La profesora formula una repetición de patrones traumáticos: situaciones distintas pueden reproducir una estructura de sufrimiento no elaborada.',
    explanation: 'Los ejemplos de pareja se usan para mostrar la idea de volver a una configuración semejante. Hacer consciente ese patrón abriría la posibilidad de que algo diferente ocurra.',
    nodes: [['PATRÓN','Retorno','Se reproduce una estructura conocida.'],['CONCIENCIA','Reconocimiento','Se identifica qué deseo, miedo o expectativa organiza la repetición.'],['DIFERENCIA','Ruptura','Aparece la posibilidad de actuar de otra manera.']],
    contrast: [['Repetir sin saber','El patrón vuelve a organizar elecciones.'],['Elaborar','Reconocerlo permite ensayar una respuesta diferente.']],
    simple: 'Si no entendemos un patrón, podemos volver a entrar en él creyendo que esta vez es totalmente distinto.',
    practice: '¿Qué cambia entre repetir una escena y reconocer el patrón que la sostiene?'
  },
  {
    id: 'cultura', title: 'Del sufrimiento a la cultura', evidence: 'Cierre de la sesión.',
    question: '¿Por qué el texto pasa de las fuentes del sufrimiento a preguntar qué es cultura o civilización?',
    thesis: 'La profesora señala que el interés principal está en las relaciones humanas y en las formas sociales que producen o regulan estados de satisfacción, restricción y neurosis.',
    explanation: 'La clase termina justo cuando comienza el problema de la cultura. Se anuncia cerrar esta lectura el martes 3 de noviembre y realizar un examen el jueves 5; el audio de clase no deja un temario ni formato confirmado.',
    nodes: [['VÍNCULO','Sociedad','Las relaciones humanas son una fuente central de malestar.'],['CULTURA','Regulación','Normas e instituciones organizan satisfacción y restricción.'],['AGENDA','Continuidad','Martes 3: cerrar Freud. Jueves 5: examen confirmado, sin temario registrado.']],
    contrast: [['Lectura confirmada','Continuar El malestar en la cultura para cerrar su discusión.'],['No confirmado','No se inventan páginas, temario, formato ni hora del examen.']],
    simple: 'La siguiente pregunta es qué hace la cultura con nuestros deseos y vínculos; antes del examen se cerrará esa discusión.',
    practice: '¿Qué está confirmado para el 3 y el 5 de noviembre, y qué sigue sin estar documentado?'
  }
]

function StudyBlock({ section, index }) {
  return <div className="ct2210-studyx" data-study-section={section.id}>
    <div className="ct2210-studyx__header"><span>ESTUDIO DEL APARTADO {String(index + 1).padStart(2, '0')} / {sections.length}</span><span>RECONSTRUCCIÓN DE PHILOSOPHIA</span></div>
    <div className="ct2210-studyx__lead"><p>PROBLEMA QUE ABRE EL APARTADO</p><h3>{section.question}</h3><strong>{section.thesis}</strong><p>{section.explanation}</p></div>
    <figure className="ct2210-studyx__figure">
      <div className="ct2210-studyx__figure-heading"><span>FIG. {String(index + 1).padStart(2, '0')} / ORGANIZACIÓN CONCEPTUAL</span><strong>Relaciones de estudio, no causalidad automática</strong></div>
      <div className="ct2210-studyx__nodes is-parallel">
        {section.nodes.map(([label,title,description], i)=><div className="ct2210-studyx__node" key={title}><span>{String(i + 1).padStart(2,'0')} / {label}</span><h4>{title}</h4><p>{description}</p></div>)}
      </div>
      <figcaption>Los bloques organizan el contenido de la sesión. No convierten ejemplos docentes en leyes universales ni en criterios clínicos.</figcaption>
    </figure>
    <details className="ct2210-studyx__guide">
      <summary><span>GUÍA DE LECTURA</span><strong>Cómo leer este esquema</strong><small>Qué representa, cómo seguirlo y qué conservar.</small><b aria-hidden="true">+</b></summary>
      <div className="ct2210-studyx__guide-grid">
        <div><span>01 / QUÉ REPRESENTA</span><p>{section.title} dentro del recorrido del 29 de octubre.</p></div>
        <div><span>02 / CÓMO LEERLO</span><p>Compare los tres bloques sin atribuirles más alcance que el documentado por la clase.</p></div>
        <div><span>03 / POR QUÉ ESTÁ AQUÍ</span><p>{section.evidence}</p></div>
        <div><span>04 / QUÉ DEBE QUEDAR CLARO</span><p>{section.simple}</p></div>
      </div>
    </details>
    <div className="ct2210-studyx__simple"><span>EN PALABRAS SIMPLES</span><p>{section.simple}</p></div>
    <div className="ct2210-studyx__compare"><span>DISTINCIÓN PARA NO CONFUNDIR</span><div>{section.contrast.map(([title,description],i)=><article key={title}><small>{i===0?'A':'B'}</small><h4>{title}</h4><p>{description}</p></article>)}</div></div>
    <details className="ct2210-studyx__question"><summary><span>PRUEBA DE RECUPERACIÓN · EDITORIAL</span><strong>{section.practice}</strong><b aria-hidden="true">+</b></summary><p>Responda desde la explicación de la sesión y contraste su respuesta con el apartado anterior y el siguiente.</p><small>Orientación creada por PHILOSOPHIA; no es pregunta oficial del examen.</small></details>
    <footer className="ct2210-studyx__footer"><p><strong>PROCEDENCIA:</strong> {section.evidence} Las figuras, preguntas y relaciones son editoriales.</p></footer>
  </div>
}

export default function CriticalTheoryClass29Oct(){
  const [selected,setSelected]=useState(0)
  const [guideOpen,setGuideOpen]=useState(false)
  const theme=themes[selected]
  const media=imagesForCriticalTheoryClass('/semestre/5/teoria-critica/clase/29-octubre')[0]

  return <main className="ct1510-page ct2010-page ct2210-page ct2910-page ph2d-shell">
    <nav className="ct1510-nav">
      <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
      <Link to="/" className="ct1510-logo">Φ · PHILOSOPHIA</Link>
      <span>FI265 · XXIX / X / MMXXVI</span>
    </nav>

    <header className="ct1510-hero">
      <p className="ct1510-eyebrow">ARCHIVO DE CLASE · 29 DE OCTUBRE DE 2026</p>
      <div className="ct1510-hero-grid"><div>
        <h1>Freud: <em>placer, sufrimiento y repetición</em></h1>
        <p className="ct1510-deck">Psicología profunda, mediaciones del inconsciente, fuentes del sufrimiento, transferencia y paso hacia el problema de la cultura.</p>
        <p className="ct1510-scope">La página distingue exposición de aula, conexiones docentes y reconstrucción editorial. Las formulaciones clínicas se conservan como contenido académico, no como diagnóstico ni consejo.</p>
        <div className="ct1510-cta">
          <button type="button" onClick={()=>document.getElementById('ct2910-atlas')?.scrollIntoView({behavior:'smooth'})}>Abrir atlas ↓</button>
          <Link to="/semestre/5/teoria-critica/clase/22-octubre">Clase anterior ↗</Link>
          <Link to="/semestre/5/teoria-critica/lectura/freud-malestar-capitulo-1">Freud · capítulo I ↗</Link>
        </div>
      </div><aside className="ct1510-pull">
        <span>PREGUNTA NUCLEAR</span>
        <strong>¿Cómo intenta el sujeto reducir un malestar que proviene del cuerpo, del mundo y de sus vínculos?</strong>
        <div className="ct1510-inversion"><span>DESEO</span><b>⇄</b><span>LÍMITE</span></div>
        <small>El 27 de octubre no hubo sesión. Esta página continúa directamente la clase del 22.</small>
      </aside></div>
    </header>

    <section className="ct1510-intro">
      <div><span className="ct1510-number">01 · CONTINUIDAD</span><h2>Del inconsciente al malestar cultural</h2></div>
      <p>La sesión retoma el sentimiento oceánico y el principio del placer, amplía la discusión hacia sufrimiento, estrategias culturales y trabajo analítico, y termina justo al abrir la pregunta por cultura o civilización.</p>
      <div className="ct1510-warning"><strong>Frontera documental:</strong> la clase confirma que el martes 3 de noviembre se cerrará la discusión de Freud y que el jueves 5 habrá examen. No consta un rango de páginas, temario, formato ni hora del examen.</div>
    </section>

    {media && <figure className="ct1510-licensed-figure">
      <div className="ct1510-licensed-item">
        <img src={import.meta.env.BASE_URL + media.imagePath} alt={media.alt} loading="lazy" decoding="async" />
        <figcaption><span>IMAGEN DE ESTUDIO · {media.imageLicense}</span><strong>Del principio del placer al malestar cultural</strong><p>{media.pedagogicalPurpose}</p><small>{media.imageAttribution} · {media.sourceBoundary}</small></figcaption>
      </div>
    </figure>}

    <section className="ct2210-atlasx" id="ct2910-atlas">
      <header className="ct2210-atlasx-header"><div><span>02 / ATLAS TEMÁTICO</span><h2>Cinco problemas para reconstruir la sesión</h2><p>Seleccione un núcleo. Las conexiones son de estudio y mantienen separadas las ampliaciones docentes de Freud.</p></div><strong>29 · X · 2026</strong></header>
      <div className="ct2210-atlasx-tabs" role="group" aria-label="Núcleos de la clase">
        {themes.map((item,index)=><button type="button" key={item.id} aria-pressed={selected===index} onClick={()=>{setSelected(index);setGuideOpen(false)}}><span className="ct2210-atlasx-number">{String(index+1).padStart(2,'0')}</span><span className="ct2210-atlasx-icon" aria-hidden="true">{item.mark}</span><strong>{item.name}</strong></button>)}
      </div>
      <article className="ct2210-atlasx-reader" aria-live="polite">
        <div className="ct2210-atlasx-symbol" aria-hidden="true">{theme.mark}</div>
        <div className="ct2210-atlasx-story"><span className="ct2210-atlasx-kicker">{theme.eyebrow} / RECONSTRUCCIÓN EDITORIAL</span><h3>{theme.question}</h3><strong>{theme.thesis}</strong><p>{theme.argument}</p><p>{theme.development}</p></div>
      </article>
      <div className="ct2210-atlasx-figure">
        <div className="ct2210-atlasx-figure-head"><span>FIG. {String(selected+1).padStart(2,'0')} / MAPA PARA LEER</span><strong>{theme.name}</strong></div>
        <div className={'ct2210-atlasx-steps ' + (theme.relation==='sequence'?'is-sequence':'is-parallel')}>
          {theme.nodes.map((node,index)=><div className="ct2210-atlasx-step" key={node.title}><span>{String(index+1).padStart(2,'0')} · {node.label}</span><h4>{node.title}</h4><p>{node.body}</p></div>)}
        </div>
        <p className="ct2210-atlasx-caution">{theme.relation==='sequence'?'Las flechas indican un itinerario de lectura editorial, no causalidad necesaria.':'Los bloques son dimensiones paralelas y no etapas sucesivas.'}</p>
      </div>
      <div className="ct2210-atlasx-figure-note">
        <div className="ct2210-atlasx-guide-top"><div><span>GUÍA DE LECTURA</span><h4>Cómo leer este recurso</h4><p>La guía aclara alcance, procedencia y límites de la figura.</p></div><button type="button" onClick={()=>setGuideOpen(!guideOpen)} aria-expanded={guideOpen}>{guideOpen?'Ocultar guía −':'Abrir guía +'}</button></div>
        {guideOpen&&<div className="ct2210-atlasx-guide-body"><div><span>01 / QUÉ REPRESENTA</span><p>{theme.guide.what}</p></div><div><span>02 / CÓMO LEERLO</span><p>{theme.guide.how}</p></div><div><span>03 / POR QUÉ ESTÁ AQUÍ</span><p>{theme.guide.why}</p></div><div><span>04 / EN PALABRAS SIMPLES</span><p>{theme.guide.simple}</p></div></div>}
      </div>
      <div className="ct2210-atlasx-contrast"><div className="ct2210-atlasx-essence"><span>05 / QUÉ DEBE QUEDAR CLARO</span><p>{theme.guide.takeaway}</p></div></div>
      <footer className="ct2210-atlasx-footer"><div><span>PROCEDENCIA</span><p>{theme.source}</p></div><div className="ct2210-atlasx-actions"><button type="button" onClick={()=>setSelected((selected+1)%themes.length)}>Siguiente núcleo → <span>{selected+1} / {themes.length}</span></button></div></footer>
    </section>

    <section className="ct1510-details">
      <div className="ct1510-section-head"><div><span className="ct1510-number">03 · DESARROLLO</span><h2>Dieciséis apartados de estudio</h2><p>Cada apartado conserva la idea de clase y añade una capa pedagógica explícitamente editorial.</p></div></div>
      <nav className="ct1510-detail-index" aria-label="Índice de apartados">{sections.map((section,index)=><button type="button" key={section.id} onClick={()=>document.getElementById(section.id)?.scrollIntoView({behavior:'smooth',block:'start'})}><span>{String(index+1).padStart(2,'0')}</span>{section.title}</button>)}</nav>
      {sections.map((section,index)=><section className="ct1510-detail-folio" id={section.id} key={section.id}><div className="ct1510-detail-copy"><span>APARTADO {String(index+1).padStart(2,'0')}</span><h3>{section.title}</h3><p>{section.explanation}</p></div><StudyBlock section={section} index={index}/></section>)}
    </section>

    <section className="ct1510-relations">
      <div className="ct1510-section-head"><div><span className="ct1510-number">04 · AGENDA</span><h2>Lo que sigue</h2></div></div>
      <div className="ct1510-relation"><span>29 OCT · SESIÓN</span><b>→</b><span>3 NOV · CERRAR FREUD</span><b>→</b><span>5 NOV · EXAMEN</span></div>
      <div className="ct1510-warning"><strong>Lectura:</strong> continuar <em>El malestar en la cultura</em> para cerrar la discusión el martes 3. <strong>Examen:</strong> jueves 5 de noviembre. No se registra temario, formato, páginas ni hora límite.</div>
      <div className="ct1510-cta"><Link to="/tareas">Abrir calendario de tareas ↗</Link><Link to="/biblioteca?obra=Freud%20-%20El%20malestar%20en%20la%20cultura">Abrir obra ↗</Link></div>
    </section>
  </main>
}
