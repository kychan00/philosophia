import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import './MethodsRussSystem2D.css'

const layers = [
  {
    id: 'fundamento',
    number: '03',
    title: 'Fundamento',
    subtitle: 'CAPÍTULO III · DESCARTES + HEGEL',
    description:
      'El método recibe un fundamento filosófico: orden racional en Descartes y movimiento dialéctico en Hegel.',
  },
  {
    id: 'especificidad',
    number: '02',
    title: 'Especificidad',
    subtitle: 'CAPÍTULO II · PROBLEMÁTICA',
    description:
      'La operación se vuelve propiamente filosófica cuando cuestiona, problematiza y descubre una aporía.',
  },
  {
    id: 'operacion',
    number: '01',
    title: 'Operación',
    subtitle: 'CAPÍTULO I · MÉTODO',
    description:
      'El pensamiento aprende a delimitar, analizar, sintetizar, ordenar y unificar.',
  },
]

const nodes = [
  {
    id: 'dato',
    x: 1,
    y: 1,
    code: 'A',
    chapter: 'I',
    title: 'Dato',
    kicker: 'Punto de partida',
    text: 'Tema, enunciado o texto que todavía aparece como una diversidad que debe ser trabajada.',
    source: 'Cap. I · La idea del método',
    more: [
      'Russ parte de una situación muy concreta: ante un enunciado o un texto se presenta una diversidad todavía no organizada.',
      'La regla metodológica funciona como condición de organización: permite dar forma y unidad a ese contenido.',
      'Por eso el dato no es todavía el pensamiento filosófico terminado; es el material sobre el cual comienzan a operar las reglas.',
    ],
    report:
      'Úselo para abrir el reporte: el método aparece porque el material inicial no viene ya ordenado filosóficamente.',
  },
  {
    id: 'delimitar',
    x: 2,
    y: 1,
    code: 'B',
    chapter: 'I',
    title: 'Delimitar',
    kicker: 'Conceptos',
    text: 'Precisar los conceptos para no razonar con nociones vagas o indeterminadas.',
    source: 'Cap. I · Regla de delimitación',
    more: [
      'Russ considera imperativa la determinación de los límites de todo objeto de pensamiento y de los conceptos esenciales.',
      'Definir permite identificar la esencia, la comprensión y los distintos significados de los conceptos en juego.',
      'La finalidad es evitar desviarse hacia problemas ajenos al texto o al enunciado propuesto.',
    ],
    report:
      'Explique que el rigor comienza antes de argumentar: comienza al fijar con precisión qué significan los conceptos que se van a usar.',
  },
  {
    id: 'analizar',
    x: 3,
    y: 1,
    code: 'C',
    chapter: 'I',
    title: 'Analizar',
    kicker: 'Descomposición',
    text: 'Separar el conjunto en elementos y reconocer las relaciones que comienzan a organizarlo.',
    source: 'Cap. I · Proceso analítico',
    more: [
      'Analizar significa descomponer el enunciado o el fragmento de una obra en sus elementos constitutivos.',
      'El análisis no se limita a separar partes: debe captar también las relaciones que las rigen.',
      'Russ subraya que el análisis prepara los materiales básicos para los estadios posteriores y ya anticipa la síntesis.',
    ],
    report:
      'Úselo para mostrar que análisis y síntesis no son operaciones enemigas: el análisis ya prepara la reconstrucción del conjunto.',
  },
  {
    id: 'sintetizar',
    x: 4,
    y: 1,
    code: 'D',
    chapter: 'I',
    title: 'Sintetizar',
    kicker: 'Mediaciones',
    text: 'Reconstruir el conjunto mediante vínculos entre aquello que el análisis distinguió.',
    source: 'Cap. I · Proceso sintético',
    more: [
      'La síntesis reconstituye un todo a partir de sus elementos simples.',
      'Opera estableciendo vínculos, puentes y mediaciones entre los elementos previamente analizados.',
      'En un comentario filosófico, sintetizar significa reconstruir dinámicamente el juego y la estrategia del pensamiento.',
    ],
    report:
      'Puede formularse como el paso de “tener partes” a “comprender una estructura”: la síntesis devuelve unidad al análisis.',
  },
  {
    id: 'ordenar',
    x: 5,
    y: 1,
    code: 'E',
    chapter: 'I',
    title: 'Ordenar',
    kicker: 'Idea directriz',
    text: 'Disponer racionalmente los elementos y dar unidad al desarrollo.',
    source: 'Cap. I · Orden e idea directriz',
    more: [
      'El orden es una disposición conforme a las exigencias de la razón y progresa de lo más simple a lo más complejo.',
      'La calidad del ejercicio depende del vínculo ordenado entre las ideas, no de una mera acumulación de contenidos.',
      'Ese orden recibe unidad de una idea directriz que organiza, totaliza y sintetiza el desarrollo.',
    ],
    report:
      'En el reporte, conecte orden e idea directriz: un trabajo filosófico vale como conjunto cuando una idea organiza sus partes.',
  },

  {
    id: 'cuestionar',
    x: 2,
    y: 2,
    code: 'F',
    chapter: 'II',
    title: 'Cuestionar',
    kicker: 'Interrogación',
    text: 'Transformar una aparente evidencia en preguntas ordenadas que nacen del propio asunto.',
    source: 'Cap. II · Cuestionamiento',
    more: [
      'Cuestionar no consiste en acumular preguntas independientes.',
      'Russ exige una serie ordenada y lógicamente vinculada de interrogaciones que surjan del asunto mismo.',
      'El cuestionamiento debe conducir hacia una dificultad más fundamental; sin esa operación no hay propiamente problematización filosófica.',
    ],
    report:
      'Distinga “hacer preguntas” de “cuestionar”: el segundo término designa una progresión racional que prepara el problema.',
  },
  {
    id: 'problematizar',
    x: 3,
    y: 2,
    code: 'G',
    chapter: 'II',
    title: 'Problematizar',
    kicker: 'Campo interrogativo',
    text: 'Remontarse desde preguntas parciales hasta una dificultad fundamental.',
    source: 'Cap. II · Problematización',
    more: [
      'Problematizar significa remontarse desde cuestiones parciales hacia la dificultad que puede darles unidad.',
      'La problemática no es una lista de preguntas: es un campo interrogativo organizado.',
      'El movimiento de problematización busca la aporía capaz de articular las diferentes preguntas bajo una misma dificultad filosófica.',
    ],
    report:
      'Éste puede ser el centro conceptual de su reporte: la filosofía no sólo responde preguntas, sino que construye el problema que las vuelve inteligibles como conjunto.',
  },
  {
    id: 'problema',
    x: 4,
    y: 2,
    code: 'H',
    chapter: 'II',
    title: 'Problema',
    kicker: 'Aporía',
    text: 'La “cuestión de la cuestión”: aquello que organiza el campo y no desaparece simplemente con una respuesta.',
    source: 'Cap. II · El problema filosófico',
    more: [
      'Russ caracteriza el problema como una aporía: una dificultad fundamental y no un simple obstáculo técnico.',
      'El problema filosófico unifica el campo de interrogaciones y permanece activo en las respuestas que intentan esclarecerlo.',
      'Por eso se diferencia del problema que se considera definitivamente eliminado una vez encontrada una solución.',
    ],
    report:
      'Conviene presentar esta distinción como una tesis fuerte: el problema filosófico no se “borra”; sigue regulando la reflexión.',
  },
  {
    id: 'juego',
    x: 5,
    y: 2,
    code: 'I',
    chapter: 'II',
    title: 'Asunto en juego',
    kicker: 'Alcance',
    text: 'Determinar qué se gana o se pierde teórica o prácticamente según la orientación adoptada.',
    source: 'Cap. II · Asunto en juego',
    more: [
      'El asunto en juego no es idéntico al problema: designa la importancia, el alcance o las consecuencias de ese problema.',
      'Permite preguntar por lo que está en juego teórica o prácticamente cuando se adopta una respuesta determinada.',
      'Con ello, la problemática deja de ser puramente formal y revela por qué vale la pena pensar esa dificultad.',
    ],
    report:
      'Después de formular el problema, explique por qué importa: ése es el lugar del asunto en juego.',
  },

  {
    id: 'descartes',
    x: 2,
    y: 3,
    code: 'J',
    chapter: 'III',
    title: 'Descartes',
    kicker: 'Orden racional',
    text: 'Evidencia, análisis, orden y enumeración: el método permite escapar del azar.',
    source: 'Cap. III · Fundamento cartesiano',
    more: [
      'Russ recupera cuatro preceptos cartesianos: evidencia, división o análisis, conducción ordenada de lo simple a lo complejo y enumeración o revisión.',
      'La función del método es impedir que la investigación dependa del azar y hacer controlable el recorrido racional.',
      'Sin embargo, no se trata de una receta mecánica: el método debe formar un espíritu capaz de conducir por sí mismo su razón.',
    ],
    report:
      'Presente a Descartes como fundamento del rigor: aporta la arquitectura racional que hace posible un pensamiento ordenado y revisable.',
  },
  {
    id: 'hegel',
    x: 4,
    y: 3,
    code: 'K',
    chapter: 'III',
    title: 'Hegel',
    kicker: 'Movimiento',
    text: 'Totalidad, negatividad y contradicción: cada momento se transforma sin ser simplemente eliminado.',
    source: 'Cap. III · Fundamento dialéctico',
    more: [
      'Russ insiste en que la dialéctica no debe reducirse a una fórmula externa de tesis, antítesis y síntesis.',
      'La totalidad significa que ningún momento se entiende aisladamente; la negatividad introduce diferencia y movimiento; la contradicción actúa como motor.',
      'El método hegeliano sirve para pensar un desarrollo en el que cada momento nace de las tensiones del anterior.',
    ],
    report:
      'Use a Hegel para explicar por qué un buen desarrollo filosófico no puede ser estático: sus partes deben transformarse unas a otras.',
  },
  {
    id: 'integrar',
    x: 5,
    y: 3,
    code: 'L',
    chapter: 'III',
    title: 'Integrar',
    kicker: 'Aufhebung',
    text: 'Comprender e integrar los momentos del pensamiento en una totalidad dinámica.',
    source: 'Cap. III · Totalidad y superación',
    more: [
      'La superación dialéctica no equivale a destruir lo anterior: conserva y suprime a la vez.',
      'Cada momento criticado debe reintegrarse en una reformulación más rica del problema.',
      'De ahí la fórmula final de Russ: filosofar no consiste simplemente en refutar, sino en comprender e integrar.',
    ],
    report:
      'Esta noción funciona muy bien como cierre del reporte: el método filosófico culmina en una integración dinámica, no en una sucesión de opiniones descartadas.',
  },
]

const deepDetails = {
  dato: {
    status: 'Nodo de síntesis del mapa',
    location: 'Capítulo I · apartado 4 · entrada a las reglas generales del método',
    quote:
      '“Ante nosotros se presenta una cierta diversidad. La regla filosófica representa la condición que permite unificar este contenido, darle una forma.”',
    says:
      'Russ parte de un material todavía disperso: un tema, un enunciado o un texto no llegan ya organizados filosóficamente.',
    operation:
      'El método entra como principio de forma. Su primera función es transformar una diversidad inicial en un objeto de pensamiento organizado.',
    relation:
      'Este nodo precede a delimitar y analizar: antes de definir conceptos o separar elementos tiene que haber algo dado que requiera organización.',
    report:
      'Puede abrir el reporte mostrando que el método responde a una necesidad: el material inicial no trae consigo su propia estructura filosófica.',
    formula: 'DIVERSIDAD → REGLA → FORMA',
  },
  delimitar: {
    status: 'Regla explícita de Russ',
    location: 'Capítulo I · “La delimitación precisa de todo concepto”',
    quote:
      '“Hay que proceder determinando los límites de todo objeto de pensamiento y de todo concepto esenciales.”',
    says:
      'La precisión conceptual no es una tarea decorativa: constituye una regla imperativa del método.',
    operation:
      'Delimitar fija las acepciones, la comprensión y los significados pertinentes de los conceptos que intervienen.',
    relation:
      'Prepara el análisis: sólo puede descomponerse rigurosamente un enunciado cuando sabemos qué significan sus términos y qué queda fuera de ellos.',
    report:
      'Úselo para sostener que el rigor filosófico comienza en la determinación conceptual, antes de cualquier argumento.',
    formula: 'CONCEPTO VAGO → LÍMITES → CONCEPTO OPERATIVO',
  },
  analizar: {
    status: 'Proceso explícito de Russ',
    location: 'Capítulo I · “El proceso analítico”',
    quote:
      '“Proceder en primer lugar a descomponer el enunciado o el fragmento de la obra en sus elementos constitutivos.”',
    says:
      'Analizar significa descomponer, pero Russ añade que también hay que captar las relaciones que rigen las partes.',
    operation:
      'Produce los materiales elementales del ejercicio y vuelve visibles las articulaciones internas del tema o del texto.',
    relation:
      'El análisis ya anuncia la síntesis: al reconocer relaciones entre las partes prepara la posterior reconstrucción del conjunto.',
    report:
      'Evite presentar análisis y síntesis como operaciones opuestas; en Russ, el análisis contiene ya la exigencia de volver a vincular.',
    formula: 'TODO → PARTES + RELACIONES',
  },
  sintetizar: {
    status: 'Proceso explícito de Russ',
    location: 'Capítulo I · “El proceso sintético”',
    quote:
      '“Estableciendo vínculos, puentes, mediaciones entre los diversos elementos analizados.”',
    says:
      'La síntesis reconstituye un todo a partir de aquello que el análisis distinguió.',
    operation:
      'Introduce mediaciones y relaciones capaces de devolver unidad a las partes sin borrar sus diferencias.',
    relation:
      'Da sentido retrospectivo al análisis y conduce al orden: una vez conectados los elementos, deben disponerse racionalmente.',
    report:
      'Puede formularse como el paso de “tener piezas” a “comprender una estructura”: la síntesis devuelve unidad al análisis.',
    formula: 'PARTES → MEDIACIONES → TODO',
  },
  ordenar: {
    status: 'Regla explícita de Russ',
    location: 'Capítulo I · “El proceso ordenado” + “Referirse a una idea directriz”',
    quote:
      '“Realizar un buen ejercicio filosófico es proceder según el orden, yendo de lo más simple a lo más complejo.”',
    says:
      'El orden no es mera presentación externa; expresa una disposición conforme a las exigencias de la razón.',
    operation:
      'Organiza la progresión de las ideas y las subordina a una idea directriz que unifica, totaliza y sintetiza.',
    relation:
      'Cierra el nivel operativo del capítulo I y prepara la pregunta decisiva: qué vuelve específicamente filosóficas a estas reglas generales.',
    report:
      'Conecte siempre orden e idea directriz: el trabajo no vale como suma de partes, sino como unidad inteligible.',
    formula: 'SIMPLE → COMPLEJO → IDEA DIRECTRIZ',
  },
  cuestionar: {
    status: 'Regla específicamente filosófica',
    location: 'Capítulo II · apartado 3 · “La regla del cuestionamiento”',
    quote:
      '“Ver la pregunta tras el enunciado, la interrogación bajo la afirmación, la dificultad bajo la aparente evidencia, ya es filosofar.”',
    says:
      'Cuestionar no significa acumular interrogantes. Es transformar lo aparentemente afirmativo en un campo de preguntas ordenadas.',
    operation:
      'Desestabiliza la evidencia inicial y hace aparecer dificultades que el enunciado no mostraba de forma inmediata.',
    relation:
      'Es el puente entre las reglas generales y la problematización: las preguntas organizadas deben desembocar en una dificultad fundamental.',
    report:
      'Diferencie con claridad “hacer preguntas” de “cuestionar”: sólo lo segundo constituye una progresión filosófica organizada.',
    formula: 'AFIRMACIÓN → INTERROGACIÓN → DIFICULTAD',
  },
  problematizar: {
    status: 'Operación central del capítulo II',
    location: 'Capítulo II · apartado 4 · “El problema en los ejercicios filosóficos”',
    quote:
      '“Problematizar es constituir un campo interrogativo unificado por un problema.”',
    says:
      'Problematizar consiste en remontarse desde preguntas parciales hacia el problema constitutivo del tema.',
    operation:
      'Convierte una pluralidad de dificultades en un campo unitario organizado por una aporía fundamental.',
    relation:
      'Recibe el cuestionamiento y produce el problema. Es el movimiento que transforma una serie interrogativa en estructura filosófica.',
    report:
      'Éste puede ser el centro del reporte: la filosofía no se limita a contestar; construye la dificultad que hace inteligibles las preguntas.',
    formula: 'PREGUNTAS PARCIALES → CAMPO → PROBLEMA',
  },
  problema: {
    status: 'Núcleo dinámico del ejercicio',
    location: 'Capítulo II · apartado 4 · definición del problema',
    quote:
      '“El problema designa ‘la cuestión de la cuestión’, la aporía fundamental que da unidad a todas las evidencias.”',
    says:
      'El problema filosófico es una aporía constitutiva, no un obstáculo local que simplemente se elimina.',
    operation:
      'Unifica el campo interrogativo y orienta el desarrollo de la reflexión.',
    relation:
      'Surge de la problematización y conduce al asunto en juego: después de localizar la aporía hay que preguntar por su importancia y alcance.',
    report:
      'Preséntelo como una tesis fuerte: una respuesta filosófica puede esclarecer el problema sin hacerlo desaparecer por completo.',
    formula: 'CUESTIONES → APORÍA → UNIDAD',
  },
  juego: {
    status: 'Elemento específico de la problemática',
    location: 'Capítulo I · cierre del apartado sobre problemática; Capítulo II · apartado 5',
    quote:
      '“Se puede juzgar el problema en función de su importancia —para el pensamiento, la reflexión, la práctica, etc.—, de su alcance.”',
    says:
      'El asunto en juego nombra la importancia del problema: aquello que cambia, se gana o se pierde según la respuesta adoptada.',
    operation:
      'Añade una dimensión valorativa y estratégica a la problemática; explica por qué esa aporía merece ser trabajada.',
    relation:
      'No sustituye al problema: presupone que ya fue localizado y pregunta ahora por su peso teórico o práctico.',
    report:
      'Después de formular la aporía, explique por qué importa. Ese tránsito evita que el reporte quede en una pura reconstrucción formal.',
    formula: 'PROBLEMA → IMPORTANCIA → ALCANCE',
  },
  descartes: {
    status: 'Fundamento filosófico del método',
    location: 'Capítulo III · apartado 2 · “Método y orden: los logros cartesianos”',
    quote:
      '“La práctica del orden es el núcleo del método.”',
    says:
      'Russ encuentra en Descartes el fundamento de una racionalidad capaz de escapar al azar mediante evidencia, análisis, orden y enumeración.',
    operation:
      'El método cartesiano disciplina el recorrido: divide dificultades, progresa de lo simple a lo complejo y revisa que nada haya sido omitido.',
    relation:
      'Fundamenta las operaciones del capítulo I. Allí había reglas; aquí Russ explica qué concepción racional las sostiene.',
    report:
      'Presente a Descartes como fundamento del rigor, no como proveedor de una receta mecánica: el objetivo es aprender a conducir la propia razón.',
    formula: 'EVIDENCIA → ANÁLISIS → ORDEN → RECUENTO',
  },
  hegel: {
    status: 'Fundamento dialéctico',
    location: 'Capítulo III · apartado 3 · “De la síntesis racional a la síntesis dialéctica”',
    quote:
      '“Dialéctica significa totalidad, negatividad y poner de relieve la contradicción.”',
    says:
      'Hegel introduce aquello que el orden cartesiano no explica por sí solo: el movimiento interno mediante el cual una posición engendra tensiones y transformación.',
    operation:
      'La dialéctica piensa cada momento dentro de una totalidad, hace operar lo negativo y lleva las diferencias hasta la contradicción.',
    relation:
      'Complementa a Descartes: el método necesita orden, pero un ejercicio filosófico también necesita movimiento y transformación interna.',
    report:
      'Use esta oposición complementaria: Descartes da rigor y orden; Hegel explica dinamismo, contradicción e integración.',
    formula: 'TOTALIDAD + NEGATIVIDAD + CONTRADICCIÓN → MOVIMIENTO',
  },
  integrar: {
    status: 'Culminación dialéctica',
    location: 'Capítulo III · Aufhebung + conclusión sobre la dialéctica',
    quote:
      '“Filosofar nunca es refutar, sino comprender e integrar.”',
    says:
      'La integración no equivale a una mezcla ecléctica ni a eliminar la posición anterior.',
    operation:
      'La Aufhebung suprime y conserva: cada momento criticado queda reintegrado y transformado dentro de una figura más rica.',
    relation:
      'Cierra el sistema porque conecta la progresión metodológica con una totalidad dinámica que conserva el trabajo previo.',
    report:
      'Funciona muy bien como conclusión: el método filosófico culmina cuando la crítica transforma e integra, no cuando simplemente descarta.',
    formula: 'NEGAR + CONSERVAR → SUPERAR → INTEGRAR',
  },
}

const chapterOneLevels = [
  { id: 'general', row: 1, number: '01', title: 'Reglas generales', function: 'Organizan cualquier trabajo intelectual.' },
  { id: 'unity', row: 2, number: '02', title: 'Reglas de unidad', function: 'Convierten las partes en un razonamiento.' },
  { id: 'core', row: 3, number: '03', title: 'Núcleo filosófico', function: 'Transforma una pregunta en investigación filosófica.' },
  { id: 'attitude', row: 4, number: '04', title: 'Actitud filosófica', function: 'Lleva el pensamiento del objeto a sus condiciones y al sujeto.' },
  { id: 'result', row: 5, number: '05', title: 'Resultado', function: 'Culminación provisional y no dogmática del ejercicio.' },
]

const chapterOneNodes = [
  {
    id: 'delimitar',
    step: '01',
    x: 1,
    y: 1,
    title: 'Delimitar',
    question: '¿Qué significan exactamente los conceptos?',
    short: 'Fijar acepciones, límites y sentido pertinente.',
    explanation:
      'Russ exige no trabajar con conceptos indeterminados. La delimitación convierte una noción vaga en un concepto filosóficamente utilizable y evita que el desarrollo se desvíe del enunciado.',
    movement: 'concepto indeterminado → delimitación → definición',
  },
  {
    id: 'analizar',
    step: '02',
    x: 2,
    y: 1,
    title: 'Analizar',
    question: '¿Cuáles son los elementos del enunciado?',
    short: 'Descomponer sin perder las relaciones internas.',
    explanation:
      'Analizar significa separar los elementos constitutivos de un tema o texto. Pero el análisis no es una fragmentación ciega: debe reconocer también las relaciones entre las partes.',
    movement: 'totalidad inicial → elementos + relaciones',
  },
  {
    id: 'sintetizar',
    step: '03',
    x: 3,
    y: 1,
    title: 'Sintetizar',
    question: '¿Qué relaciones existen entre esos elementos?',
    short: 'Reconstruir la unidad mediante vínculos y mediaciones.',
    explanation:
      'La síntesis vuelve a reunir lo que el análisis distinguió. No pega piezas: descubre vínculos, mediaciones, dependencias y correlaciones capaces de reconstruir una unidad inteligible.',
    movement: 'partes → mediaciones → unidad',
  },
  {
    id: 'ordenar',
    step: '04',
    x: 4,
    y: 1,
    title: 'Ordenar',
    question: '¿En qué secuencia racional deben aparecer?',
    short: 'Hacer que cada momento conduzca al siguiente.',
    explanation:
      'La calidad del ejercicio depende del orden de las ideas. El pensamiento debe progresar de lo simple a lo complejo y cada parte debe ocupar un lugar justificado en el razonamiento.',
    movement: 'A → B → C → conclusión',
  },
  {
    id: 'directriz',
    step: '05',
    x: 5,
    y: 2,
    title: 'Idea directriz',
    question: '¿Qué proporciona unidad al razonamiento?',
    short: 'Una idea central funciona como esqueleto del ejercicio.',
    explanation:
      'Sin una idea directriz puede haber párrafos correctos, pero no un verdadero razonamiento. La idea central unifica, totaliza y orienta argumentos, relaciones y desarrollo.',
    movement: 'diversidad → idea central → unidad',
  },
  {
    id: 'dinamica',
    step: '06',
    x: 6,
    y: 2,
    title: 'Dinámica conceptual',
    question: '¿Cómo conduce un concepto hacia el siguiente?',
    short: 'Hacer que las ideas se engendren por necesidad interna.',
    explanation:
      'Los conceptos filosóficos no deben aparecer inmóviles. Una idea produce una dificultad, esa dificultad exige otra idea y ésta transforma lo anterior. Así se evita la mera yuxtaposición.',
    movement: 'idea → dificultad → concepto → consecuencia',
  },
  {
    id: 'cuestionar',
    step: '07',
    x: 7,
    y: 3,
    title: 'Cuestionar',
    question: '¿Qué preguntas surgen al examinar el enunciado?',
    short: 'Pasar de la evidencia aparente a una interrogación organizada.',
    explanation:
      'El enunciado no se acepta simplemente como viene dado. El cuestionamiento hace emerger preguntas ordenadas y vinculadas que preparan el descubrimiento de una dificultad filosófica más profunda.',
    movement: 'enunciado → preguntas ordenadas',
  },
  {
    id: 'problematizar',
    step: '08',
    x: 8,
    y: 3,
    title: 'Problematizar',
    question: '¿Cuál es la dificultad filosófica fundamental?',
    short: 'Distinguir la pregunta visible del problema que la hace necesaria.',
    explanation:
      'La pregunta explícita no es todavía el problema. Problematizar significa descubrir la dificultad filosófica fundamental que estructura el campo de preguntas y orienta el ejercicio.',
    movement: 'preguntas → problema filosófico → problemática',
  },
  {
    id: 'juego',
    step: '09',
    x: 9,
    y: 3,
    title: 'Asunto en juego',
    question: '¿Por qué importa ese problema?',
    short: 'Determinar la importancia, el alcance y las consecuencias.',
    explanation:
      'Una vez localizado el problema, hay que establecer qué está en juego. Esto revela su peso para el pensamiento, la reflexión o la práctica y evita una problemática puramente formal.',
    movement: 'problema → importancia → alcance',
  },
  {
    id: 'reflexionar',
    step: '10',
    x: 10,
    y: 4,
    title: 'Reflexionar',
    question: '¿Cómo vuelve el pensamiento del objeto hacia sus condiciones?',
    short: 'Retornar desde lo pensado hacia el sujeto que piensa.',
    explanation:
      'Russ usa reflexión en sentido filosófico: no significa “pensar mucho”, sino remontarse desde el objeto y sus datos hacia las condiciones, presupuestos y sujeto desde los cuales son pensados.',
    movement: 'objeto → condiciones → sujeto pensante',
  },
  {
    id: 'respuesta',
    step: '11',
    x: 11,
    y: 5,
    title: 'Respuesta no dogmática',
    question: '¿Cómo culmina provisionalmente el ejercicio?',
    short: 'Organizar una solución que conserve abierto el problema filosófico.',
    explanation:
      'El recorrido metodológico desemboca en una respuesta organizada. Su carácter filosófico exige que no cierre dogmáticamente la dificultad, sino que responda al problema trabajado de manera rigurosa.',
    movement: 'problema trabajado → respuesta organizada → apertura',
  },
]

const chapterOneReasons = [
  {
    number: 'A',
    title: 'Método y existencia',
    text: 'El ser humano actúa mediante mediaciones: fin, plan, etapas, instrumentos y organización.',
    formula: 'vivir → actuar → mediar → organizar',
  },
  {
    number: 'B',
    title: 'Razones académicas',
    text: 'El método vuelve explícitas las reglas del juego que los ejercicios universitarios suelen dejar implícitas.',
    formula: 'reglas implícitas → operaciones visibles',
  },
  {
    number: 'C',
    title: 'Razones filosóficas',
    text: 'El trabajo conceptual necesita un desarrollo racional riguroso para no convertirse en opinión o improvisación.',
    formula: 'conceptos + rigor → ejercicio filosófico',
  },
]

const chapterTwoLevels = [
  { id: 'opening', row: 1, number: '01', title: 'Apertura', function: 'Del tema dado al campo de preguntas.' },
  { id: 'questioning', row: 2, number: '02', title: 'Cuestionamiento', function: 'Ordena preguntas y les da dirección.' },
  { id: 'problem', row: 3, number: '03', title: 'Problematización', function: 'Descubre la aporía que unifica el campo.' },
  { id: 'scope', row: 4, number: '04', title: 'Alcance y movimiento', function: 'Explicita lo que está en juego y construye el planteamiento.' },
  { id: 'persistence', row: 5, number: '05', title: 'Respuesta filosófica', function: 'Aclara sin pretender hacer desaparecer el problema.' },
]

const chapterTwoNodes = [
  {
    id: 'analizar-enunciado',
    step: '01',
    x: 1,
    y: 1,
    title: 'Analizar el enunciado',
    question: '¿Qué dice exactamente el tema o el texto?',
    short: 'Precisar el material antes de convertirlo en campo interrogativo.',
    explanation:
      'La problemática no nace de preguntas arbitrarias. Primero hay que analizar el enunciado o el texto para que las preguntas posteriores surjan del asunto mismo.',
    movement: 'enunciado / texto → análisis',
    key:
      'En la disertación se analiza el tema para construir la problemática; en el comentario se analiza el texto para desvelar la problemática que ya contiene.',
    relation:
      'Es el umbral del capítulo: prepara el cuestionamiento y evita que la investigación se convierta en una acumulación de conocimientos.',
    report:
      'Abra esta parte del reporte mostrando que Russ subordina los conocimientos al problema: saber autores no basta si no existe una organización problemática.',
  },
  {
    id: 'cuestionar',
    step: '02',
    x: 2,
    y: 2,
    title: 'Cuestionar',
    question: '¿Qué preguntas importantes nacen del tema?',
    short: 'Descubrir la pregunta detrás del enunciado y la dificultad detrás de la evidencia.',
    explanation:
      'Cuestionar no es llenar la introducción de signos de interrogación. Es transformar lo aparentemente dado en una serie de preguntas nacidas del tema y orientadas hacia una dificultad.',
    movement: 'dato → poner en cuestión → interrogación',
    key:
      '“Ver la pregunta detrás del enunciado ya es comenzar a filosofar.”',
    relation:
      'El cuestionamiento abre el campo interrogativo y constituye el primer principio específicamente filosófico desarrollado por Russ.',
    report:
      'Distinga “preguntar” de “cuestionar”: el segundo término implica dirección, encadenamiento y necesidad interna.',
  },
  {
    id: 'ordenar-preguntas',
    step: '03',
    x: 3,
    y: 2,
    title: 'Ordenar preguntas',
    question: '¿Cómo se encadenan las preguntas?',
    short: 'Transformar un interrogatorio en pensamiento.',
    explanation:
      'Russ exige preguntas no arbitrarias, no repetitivas, relacionadas entre sí y ordenadas. Cada pregunta debe obligar a plantear la siguiente.',
    movement: 'P1 → P2 → P3 → P4',
    key:
      'Cuestionamiento ≠ interrogatorio: P1 → P2 → P3 produce pensamiento; P1 + P2 + P3 sólo acumula preguntas.',
    relation:
      'El orden de las preguntas cumple dos funciones: hace aparecer el problema y empieza a preparar la futura estructura argumentativa.',
    report:
      'Aquí puede explicar por qué una buena introducción ya contiene potencialmente el itinerario de la disertación.',
  },
  {
    id: 'problematizar',
    step: '04',
    x: 4,
    y: 3,
    title: 'Problematizar',
    question: '¿Qué dificultad fundamental explica todas estas preguntas?',
    short: 'Pasar de muchas dificultades particulares a una dificultad que las organiza.',
    explanation:
      'Problematizar consiste en preguntar qué tienen en común las preguntas parciales y qué dificultad profunda las hace surgir. Esa dificultad da unidad, hilo conductor y dirección al ejercicio.',
    movement: 'preguntas parciales → dificultad común → problema',
    key:
      'Problematizar es constituir un campo interrogativo unificado por un problema.',
    relation:
      'Es la operación específicamente filosófica decisiva del capítulo II: convierte el campo interrogativo en problemática.',
    report:
      'Ésta puede ser la tesis central de su reporte: filosofar no consiste principalmente en responder, sino en construir correctamente el problema.',
  },
  {
    id: 'aporia',
    step: '05',
    x: 5,
    y: 3,
    title: 'Descubrir la aporía',
    question: '¿Por qué la dificultad no desaparece con una respuesta trivial?',
    short: 'Localizar la dificultad conceptual fundamental.',
    explanation:
      'La aporía no significa simplemente que algo sea difícil. Designa un atolladero conceptual que afecta al concepto mismo que intentamos pensar.',
    movement: 'evidencia → dificultad → contradicción → aporía',
    key:
      'El problema es “la cuestión de la cuestión”: una aporía fundamental que da unidad a las preguntas.',
    relation:
      'Aquí el problema adquiere su forma filosófica propia. La aporía no es un fallo del razonamiento; descubrirla puede significar que por fin se localizó el problema verdadero.',
    report:
      'Use los diálogos platónicos para mostrar que llegar a la aporía puede ser un progreso filosófico y no un fracaso.',
  },
  {
    id: 'asunto',
    step: '06',
    x: 6,
    y: 4,
    title: 'Asunto en juego',
    question: '¿Qué se gana o se pierde según la respuesta?',
    short: 'Explicitar la importancia, alcance y consecuencias del problema.',
    explanation:
      'El asunto en juego no repite el problema. Pregunta qué cambia teórica o prácticamente según la forma en que comprendamos la dificultad.',
    movement: 'problema → importancia → alcance / consecuencias',
    key:
      'Problema: ¿qué dificultad intentamos comprender? Asunto en juego: ¿por qué importa comprenderla de una manera u otra?',
    relation:
      'Añade una dimensión estratégica a la problemática. Sin ella sabemos qué es difícil, pero todavía no por qué importa.',
    report:
      'Después de formular la aporía, muestre sus consecuencias. Eso evita que la problemática quede como una construcción puramente formal.',
  },
  {
    id: 'planteamiento',
    step: '07',
    x: 7,
    y: 4,
    title: 'Construir el planteamiento',
    question: '¿Qué movimiento argumentativo permite trabajar el problema?',
    short: 'Organizar dinámicamente las partes del desarrollo.',
    explanation:
      'Russ advierte contra un planteamiento entendido como casillas fijas. El verdadero planteamiento debe expresar el movimiento del problema y organizar racionalmente la argumentación.',
    movement: 'problema + asunto en juego → itinerario argumentativo',
    key:
      'Planteamiento ≠ Parte I / Parte II / Parte III; planteamiento = movimiento del pensamiento.',
    relation:
      'Recoge el cuestionamiento, el problema y el asunto en juego y los convierte en desarrollo.',
    report:
      'Presente el planteamiento como resultado dinámico de la problemática, no como un índice externo impuesto al tema.',
  },
  {
    id: 'respuesta',
    step: '08',
    x: 8,
    y: 5,
    title: 'Respuesta no dogmática',
    question: '¿Cómo responder sin clausurar artificialmente la dificultad?',
    short: 'Aclarar, distinguir y reorganizar sin fingir una solución definitiva.',
    explanation:
      'La filosofía puede eliminar prejuicios, aclarar conceptos y sustituir opinión por racionalidad conceptual, pero la respuesta no tiene por qué hacer desaparecer la aporía.',
    movement: 'problema → reflexión → clarificación → respuesta',
    key:
      '“La respuesta no mata la pregunta.”',
    relation:
      'Se opone a la imagen dogmática según la cual todo problema sólo vale como obstáculo provisional destinado a desaparecer.',
    report:
      'Contraste ciencia y filosofía: en el modelo de Russ, la ciencia idealmente resuelve el problema; la filosofía trabaja una aporía que persiste.',
  },
  {
    id: 'conservar',
    step: '09',
    x: 9,
    y: 5,
    title: 'Conservar el problema',
    question: '¿Cómo permanece el problema en sus respuestas?',
    short: 'Mantener abierta la búsqueda después de responder.',
    explanation:
      'Russ, apoyándose en Deleuze y en la analogía kantiana con la Idea reguladora, entiende el problema como principio que orienta, unifica y sistematiza la investigación sin agotarse en una respuesta.',
    movement: 'problema → respuestas múltiples → problema persistente',
    key:
      'El problema dirige el pensamiento, organiza un campo de investigación y permanece activo en sus soluciones.',
    relation:
      'Es la culminación teórica del capítulo II: el valor del problema no depende de que pueda ser eliminado.',
    report:
      'Cierre el capítulo con esta tesis: la tarea filosófica consiste en trabajar el problema, no en borrarlo.',
  },
]

const chapterTwoContrasts = [
  {
    title: 'Problemática ≠ problema',
    left: 'Problemática',
    leftText: 'Cuestionamiento + problema + asunto en juego + planteamiento.',
    right: 'Problema',
    rightText: 'La aporía fundamental que unifica el campo interrogativo.',
  },
  {
    title: 'Disertación ↔ comentario',
    left: 'Disertación',
    leftText: 'La problemática se crea a partir del tema.',
    right: 'Comentario',
    rightText: 'La problemática se desvela reconstruyendo el texto.',
  },
  {
    title: 'Ciencia ↔ filosofía',
    left: 'Problema científico',
    leftText: 'La solución tiende idealmente a hacer desaparecer el problema.',
    right: 'Problema filosófico',
    rightText: 'La respuesta aclara, pero la aporía puede persistir.',
  },
  {
    title: 'Pregunta ↔ asunto en juego',
    left: 'Problema',
    leftText: '¿Cuál es la dificultad filosófica fundamental?',
    right: 'Asunto en juego',
    rightText: '¿Por qué importa esa dificultad y qué cambia según la respuesta?',
  },
]

const chapterTwoModels = [
  {
    title: 'Sócrates',
    text: 'evidencia inicial → pregunta → dificultad → contradicción → aporía',
  },
  {
    title: 'Platón',
    text: 'definición → objeción → nueva definición → nueva dificultad → aporía',
  },
  {
    title: 'Deleuze',
    text: 'problema con valor propio → respuestas que no lo agotan',
  },
  {
    title: 'Kant',
    text: 'problema como principio regulador que orienta y unifica la investigación',
  },
]

const chapterThreeLevels = [
  { id: 'cartesian', row: 1, number: '01', title: 'Rigor cartesiano', function: 'Controlar, dividir, ordenar y verificar.' },
  { id: 'construction', row: 2, number: '02', title: 'Construcción racional', function: 'Reconstruir lo complejo desde lo simple.' },
  { id: 'transition', row: 3, number: '03', title: 'Transición', function: 'Pasar de reunir elementos a transformar oposiciones.' },
  { id: 'dialectic', row: 4, number: '04', title: 'Trabajo de lo negativo', function: 'Hacer productivos límite, negación y contradicción.' },
  { id: 'concept', row: 5, number: '05', title: 'Movimiento conceptual', function: 'Integrar y dejar que el concepto produzca su progreso.' },
]

const chapterThreeNodes = [
  {
    id: 'evidencia',
    step: '01',
    x: 1,
    y: 1,
    foundation: 'Descartes',
    title: 'Evidencia',
    question: '¿Qué puedo admitir racionalmente como punto de partida?',
    short: 'No aceptar irreflexivamente: claridad y distinción antes del juicio.',
    explanation:
      'La evidencia exige suspender precipitación y prevención. Una idea debe presentarse clara y distintamente para poder funcionar como fundamento racional.',
    movement: 'suspender → examinar → juzgar',
    key:
      'Lo verdadero debe presentarse de manera clara y distinta.',
    relation:
      'Abre la arquitectura cartesiana. Sin un punto de partida examinado, el orden posterior carecería de fundamento.',
    report:
      'Presente la evidencia como disciplina del juicio: no como intuición psicológica, sino como exigencia de examen racional.',
  },
  {
    id: 'analisis-cartesiano',
    step: '02',
    x: 2,
    y: 1,
    foundation: 'Descartes',
    title: 'Análisis',
    question: '¿Cómo vuelvo manejable una dificultad compleja?',
    short: 'Dividir para comprender.',
    explanation:
      'El análisis descompone una dificultad compleja en elementos más simples. Permite trabajar por partes aquello que sería inabordable si se intentara resolver de una sola vez.',
    movement: 'complejo → partes simples',
    key:
      'El análisis significa descomponer una dificultad compleja en elementos más simples.',
    relation:
      'Prepara el orden y la síntesis. Russ insiste en que analizar no basta: los fragmentos deberán ser reconstruidos.',
    report:
      'Úselo para mostrar que el rigor metodológico no simplifica arbitrariamente: descompone para volver inteligible la complejidad.',
  },
  {
    id: 'orden-cartesiano',
    step: '03',
    x: 3,
    y: 1,
    foundation: 'Descartes',
    title: 'Orden',
    question: '¿Qué debe establecerse primero para poder pensar lo que sigue?',
    short: 'Construir una dependencia racional de lo simple a lo complejo.',
    explanation:
      'El orden no siempre está dado en el objeto. El espíritu debe construirlo, reconocer precedencias y dependencias y convertir esa práctica en hábito intelectual.',
    movement: 'simple → dependencia → complejo',
    key:
      'La práctica del orden es el núcleo del método.',
    relation:
      'Es la aportación cartesiana decisiva para Russ: transforma una serie de ideas en progresión racional.',
    report:
      'Explique que ordenar no significa copiar una estructura externa, sino producir una secuencia racionalmente justificada.',
  },
  {
    id: 'sintesis-racional',
    step: '04',
    x: 4,
    y: 2,
    foundation: 'Descartes',
    title: 'Síntesis racional',
    question: '¿Cómo reconstruyo la totalidad después del análisis?',
    short: 'Volver de lo simple a lo complejo mediante orden y deducción.',
    explanation:
      'La síntesis cartesiana no regresa ingenuamente al punto de partida. Reconstruye racionalmente el conjunto después de haber distinguido sus elementos.',
    movement: 'partes simples → orden → totalidad comprendida',
    key:
      'Análisis: complejo → simple. Síntesis: simple → complejo.',
    relation:
      'Cierra la reconstrucción cartesiana y deja preparada la transición hacia Hegel, donde sintetizar significará algo más que reunir.',
    report:
      'Contraste esta síntesis con la hegeliana: aquí se reconstruye; allá se superan oposiciones conservando sus momentos.',
  },
  {
    id: 'enumeracion',
    step: '05',
    x: 5,
    y: 2,
    foundation: 'Descartes',
    title: 'Enumeración',
    question: '¿He omitido algo esencial en la cadena racional?',
    short: 'Verificar el conjunto mediante revisión completa.',
    explanation:
      'Después de analizar, ordenar y reconstruir, la enumeración revisa que ningún elemento necesario haya quedado fuera y controla la articulación de la cadena deductiva.',
    movement: 'análisis → orden → síntesis → comprobación',
    key:
      'La enumeración cumple una función de verificación.',
    relation:
      'Completa el rigor cartesiano y prepara el balance: el método debe educar un pensamiento autónomo, no volverlo dependiente de una receta.',
    report:
      'Puede vincularla con la revisión final de una disertación: comprobar que cada paso necesario está presente y conectado.',
  },
  {
    id: 'totalidad',
    step: '06',
    x: 6,
    y: 3,
    foundation: 'Transición',
    title: 'Totalidad',
    question: '¿Qué falta cuando sólo reconstruyo una suma ordenada de elementos?',
    short: 'Comprender cada momento desde el conjunto al que pertenece.',
    explanation:
      'Russ usa la totalidad como puerta de entrada a Hegel: una parte no se comprende plenamente aislada, sino por sus relaciones y su función en el conjunto.',
    movement: 'parte aislada → relaciones → totalidad',
    key:
      'Ningún elemento debe comprenderse aisladamente.',
    relation:
      'Marca el límite de la síntesis cartesiana y el inicio del movimiento dialéctico: las partes ya no son bloques externos, sino momentos de un organismo argumentativo.',
    report:
      'Use este nodo para explicar por qué una disertación no puede ser tres secciones autónomas yuxtapuestas.',
  },
  {
    id: 'negatividad',
    step: '07',
    x: 7,
    y: 4,
    foundation: 'Hegel',
    title: 'Negatividad',
    question: '¿Qué ocurre cuando una posición revela sus propios límites?',
    short: 'Negar no es destruir: la negación hace avanzar.',
    explanation:
      'El trabajo de lo negativo descubre la insuficiencia interna de una determinación. Esa negación abre la posibilidad de una forma nueva que conserva algo de lo anterior.',
    movement: 'posición → límite → negación',
    key:
      'Negar no significa destruir.',
    relation:
      'Introduce el motor dialéctico. La progresión ya no se impone desde fuera: surge de las insuficiencias de cada momento.',
    report:
      'Evite escribir “A es falso, lo tiro”. Muestre qué verdad parcial tenía A y qué límite obliga a transformarlo.',
  },
  {
    id: 'contradiccion',
    step: '08',
    x: 8,
    y: 4,
    foundation: 'Hegel',
    title: 'Contradicción',
    question: '¿Qué tensión obliga al pensamiento a salir de una posición estática?',
    short: 'La contradicción funciona como motor del desarrollo.',
    explanation:
      'Russ presenta la contradicción como productiva: un buen desarrollo no oculta tensiones, sino que las lleva hasta sus consecuencias para producir una nueva determinación.',
    movement: 'oposición → conflicto → movimiento',
    key:
      'La contradicción obliga a una determinación a salir de sí misma y desarrollarse.',
    relation:
      'Radicaliza la negatividad: el límite se convierte en tensión explícita y esa tensión genera movimiento conceptual.',
    report:
      'En el reporte, identifique contradicciones reales nacidas del concepto, no oposiciones fabricadas sólo para llenar una segunda parte.',
  },
  {
    id: 'aufhebung',
    step: '09',
    x: 9,
    y: 5,
    foundation: 'Hegel',
    title: 'Aufhebung',
    question: '¿Cómo superar una oposición sin borrar lo que contenía de verdadero?',
    short: 'Suprimir y conservar al mismo tiempo.',
    explanation:
      'La superación dialéctica integra transformados los momentos anteriores. No es eclecticismo ni conciliación superficial, sino una forma nueva nacida del límite de las anteriores.',
    movement: 'momento 1 → negación → superación',
    key:
      'Aufhebung: suprimir + conservar.',
    relation:
      'Convierte la contradicción en progreso. Explica por qué el momento anterior no queda simplemente abandonado.',
    report:
      'Éste es un buen punto para contrastar síntesis ecléctica con síntesis dialéctica.',
  },
  {
    id: 'integracion',
    step: '10',
    x: 10,
    y: 5,
    foundation: 'Hegel',
    title: 'Integración',
    question: '¿Qué hace filosófica a una superación?',
    short: 'Conservar transformados los momentos previos dentro de una forma más rica.',
    explanation:
      'Integrar significa comprender la verdad parcial de una posición, descubrir su límite y conservarla bajo una configuración que incorpora el trabajo de la negación.',
    movement: 'verdad parcial → límite → transformación → integración',
    key:
      'Filosofar nunca es refutar, sino comprender e integrar.',
    relation:
      'Expresa la consecuencia metodológica más fuerte que Russ extrae de Hegel para la disertación filosófica.',
    report:
      'Use esta idea como criterio de calidad: una parte posterior debe enriquecer las anteriores, no dejar cadáveres argumentativos.',
  },
  {
    id: 'movimiento-concepto',
    step: '11',
    x: 11,
    y: 5,
    foundation: 'Hegel',
    title: 'Movimiento del concepto',
    question: '¿Quién produce realmente la progresión del razonamiento?',
    short: 'El propio contenido conceptual debe generar la dificultad siguiente.',
    explanation:
      'El método no es un molde externo. El análisis del concepto revela sus límites, produce contradicción y obliga a una nueva determinación. El desarrollo nace del contenido mismo.',
    movement: 'concepto → límite → contradicción → concepto enriquecido',
    key:
      'Método = movimiento interno del contenido conceptual.',
    relation:
      'Culmina la arquitectura del capítulo III y explica por qué Russ rechaza la plantilla escolar tesis-antítesis-síntesis.',
    report:
      'Cierre mostrando la síntesis global: Descartes aporta rigor; Hegel aporta dinamismo; el buen ejercicio necesita ambos.',
  },
]

const chapterThreeContrasts = [
  {
    title: 'Descartes ↔ Hegel',
    left: 'Orden racional',
    leftText: 'Evidencia, análisis, progresión, síntesis y verificación.',
    right: 'Movimiento dialéctico',
    rightText: 'Totalidad, negatividad, contradicción, superación e integración.',
  },
  {
    title: 'Síntesis racional ↔ dialéctica',
    left: 'Reconstrucción',
    leftText: 'Simple → complejo mediante orden y deducción.',
    right: 'Superación',
    rightText: 'Oposición → negación → conservación transformada.',
  },
  {
    title: 'Esquema escolar ↔ dialéctica real',
    left: 'Plantilla externa',
    leftText: 'Tesis / antítesis / síntesis como casillas prefabricadas.',
    right: 'Movimiento interno',
    rightText: 'El concepto produce su propia tensión y transformación.',
  },
  {
    title: 'Negación ↔ destrucción',
    left: 'Destruir',
    leftText: 'Descartar un momento como si careciera de verdad.',
    right: 'Negar dialécticamente',
    rightText: 'Mostrar el límite y conservar lo válido en una forma nueva.',
  },
]

const chapterThreeFoundations = [
  {
    id: 'descartes',
    eyebrow: 'FUNDAMENTO I',
    title: 'Descartes',
    keyword: 'RIGOR',
    formula: 'evidencia → análisis → orden → síntesis → enumeración',
    text: 'El pensamiento aprende a no depender del azar, a construir orden y a controlar sus inferencias.',
  },
  {
    id: 'bridge',
    eyebrow: 'TRANSICIÓN',
    title: 'Del orden al movimiento',
    keyword: 'LÍMITE',
    formula: 'reunir elementos ≠ transformar oposiciones',
    text: 'La síntesis racional ordena; la filosofía necesita además trabajar negaciones, conflictos y contradicciones.',
  },
  {
    id: 'hegel',
    eyebrow: 'FUNDAMENTO II',
    title: 'Hegel',
    keyword: 'DINAMISMO',
    formula: 'totalidad → negatividad → contradicción → superación → concepto',
    text: 'El pensamiento progresa cuando cada momento revela sus límites y genera internamente la figura siguiente.',
  },
]

const pathOrder = [
  'dato',
  'delimitar',
  'analizar',
  'cuestionar',
  'problematizar',
  'problema',
  'juego',
  'integrar',
]

const learningRoutes = [
  {
    id: 'essential',
    number: '01',
    title: 'Ruta esencial',
    subtitle: 'ENTENDER EL LIBRO EN 8 MOVIMIENTOS',
    description:
      'Para obtener primero la arquitectura general de Russ antes de entrar en detalles.',
    nodes: ['dato', 'delimitar', 'analizar', 'cuestionar', 'problematizar', 'problema', 'juego', 'integrar'],
  },
  {
    id: 'method',
    number: '02',
    title: 'Ruta del método',
    subtitle: 'CAPÍTULO I',
    description:
      'Para explicar cómo una diversidad inicial adquiere forma, estructura y unidad.',
    nodes: ['dato', 'delimitar', 'analizar', 'sintetizar', 'ordenar'],
  },
  {
    id: 'problem',
    number: '03',
    title: 'Ruta de la problemática',
    subtitle: 'CAPÍTULO II',
    description:
      'Para dominar la diferencia entre preguntar, problematizar, formular la aporía y determinar lo que está en juego.',
    nodes: ['cuestionar', 'problematizar', 'problema', 'juego'],
  },
  {
    id: 'foundation',
    number: '04',
    title: 'Ruta de fundamentos',
    subtitle: 'CAPÍTULO III',
    description:
      'Para comprender por qué Russ combina el rigor cartesiano con el movimiento dialéctico hegeliano.',
    nodes: ['descartes', 'hegel', 'integrar'],
  },
]

function NodeButton({ node, activeId, routeNodeIds, onSelect }) {
  const routeActive = routeNodeIds.includes(node.id)

  return (
    <button
      type="button"
      className={`russ2d-node chapter-${node.chapter} ${activeId === node.id ? 'is-active' : ''} ${routeActive ? 'is-route' : ''}`}
      style={{ '--x': node.x, '--y': 4 - node.y }}
      onClick={() => onSelect(node.id)}
      aria-pressed={activeId === node.id}
    >
      <span>{node.code}</span>
      <small>CAP. {node.chapter}</small>
      <strong>{node.title}</strong>
    </button>
  )
}

export default function MethodsRussSystem2D() {
  const [activeId, setActiveId] = useState('problema')
  const [showMore, setShowMore] = useState(false)
  const [activeRouteId, setActiveRouteId] = useState('essential')
  const [chapterOneActiveId, setChapterOneActiveId] = useState('delimitar')
  const [chapterTwoActiveId, setChapterTwoActiveId] = useState('analizar-enunciado')
  const [chapterThreeActiveId, setChapterThreeActiveId] = useState('evidencia')
  const [chapterThreeDeepOpen, setChapterThreeDeepOpen] = useState(false)
  const [chapterTwoDeepOpen, setChapterTwoDeepOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [deepOpen, setDeepOpen] = useState(false)
  const systemRef = useRef(null)

  const active = useMemo(
    () => nodes.find((node) => node.id === activeId) || nodes[7],
    [activeId],
  )

  const deep = deepDetails[active.id]

  const activeRoute = useMemo(
    () => learningRoutes.find((route) => route.id === activeRouteId) || learningRoutes[0],
    [activeRouteId],
  )

  const chapterOneActive = useMemo(
    () => chapterOneNodes.find((node) => node.id === chapterOneActiveId) || chapterOneNodes[0],
    [chapterOneActiveId],
  )

  const chapterTwoActive = useMemo(
    () => chapterTwoNodes.find((node) => node.id === chapterTwoActiveId) || chapterTwoNodes[0],
    [chapterTwoActiveId],
  )

  const chapterThreeActive = useMemo(
    () => chapterThreeNodes.find((node) => node.id === chapterThreeActiveId) || chapterThreeNodes[0],
    [chapterThreeActiveId],
  )


  useEffect(() => {
    const syncFullscreen = () => {
      setIsFullscreen(document.fullscreenElement === systemRef.current)
    }

    document.addEventListener('fullscreenchange', syncFullscreen)
    return () => document.removeEventListener('fullscreenchange', syncFullscreen)
  }, [])

  useEffect(() => {
    if (!chapterThreeDeepOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setChapterThreeDeepOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [chapterThreeDeepOpen])

  useEffect(() => {
    if (!chapterTwoDeepOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setChapterTwoDeepOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [chapterTwoDeepOpen])

  useEffect(() => {
    if (!deepOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setDeepOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [deepOpen])

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement === systemRef.current) {
        await document.exitFullscreen()
      } else if (systemRef.current?.requestFullscreen) {
        await systemRef.current.requestFullscreen()
      }
    } catch (error) {
      console.error('No se pudo cambiar el modo de pantalla completa:', error)
    }
  }

  const selectNode = (id) => {
    setActiveId(id)
    setShowMore(false)
    setDeepOpen(false)
  }

  const selectRoute = (id) => {
    const route = learningRoutes.find((item) => item.id === id)
    if (!route) return
    setActiveRouteId(id)
    setActiveId(route.nodes[0])
    setShowMore(false)
  }

  return (
    <main className="russ2d-page">
      <div className="russ2d-grain" aria-hidden="true" />

      <nav className="russ2d-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">← MÉTODOS DE INVESTIGACIÓN</Link>
        <span>JACQUELINE RUSS · CAPÍTULOS 1–3</span>
        <Link to="/tareas">TAREAS ↗</Link>
      </nav>

      <header className="russ2d-hero">
        <div className="russ2d-seal">2D</div>

        <div className="russ2d-hero-copy">
          <p>ARS INQUIRENDI · MAPA DE LECTURA</p>
          <h1>
            Los métodos
            <em>en filosofía</em>
          </h1>
          <div className="russ2d-rule" />
          <p className="russ2d-deck">
            Tres capítulos leídos como una sola arquitectura:
            <strong> movimiento del pensar × profundidad filosófica.</strong>
          </p>
        </div>

        <aside className="russ2d-thesis">
          <small>TESIS DEL SISTEMA</small>
          <blockquote>
            El método no es una receta exterior al filosofar: organiza el movimiento por el cual un
            dato se convierte en problema y una reflexión dispersa adquiere rigor, unidad y dinamismo.
          </blockquote>

          <div className="russ2d-thesis-grid">
            <span>I</span><b>operación</b>
            <span>II</span><b>especificidad</b>
            <span>III</span><b>fundamento</b>
          </div>
        </aside>
      </header>

      <section className="russ2d-section russ2d-guide">
        <div className="russ2d-section-head">
          <span>00</span>
          <div>
            <p>CÓMO USAR EL SISTEMA</p>
            <h2>Guía de lectura</h2>
          </div>
        </div>

        <div className="russ2d-guide-grid">
          <article>
            <span>01</span>
            <strong>Lea de izquierda a derecha</strong>
            <p>El eje X muestra cómo avanza el pensamiento: del material inicial hacia una integración conceptual.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Suba por los tres niveles</strong>
            <p>El eje Y distingue operación, especificidad filosófica y fundamento del método.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Pulse cualquier nodo</strong>
            <p>Su explicación aparece inmediatamente en el inspector de la derecha, sin perder de vista el mapa.</p>
          </article>
          <article>
            <span>04</span>
            <strong>Abra “Más información”</strong>
            <p>El panel derecho muestra contexto adicional del capítulo y cómo usar ese concepto en el reporte.</p>
          </article>
        </div>
      </section>

      <section className="russ2d-section russ2d-routes">
        <div className="russ2d-section-head">
          <span>01</span>
          <div>
            <p>RUTAS DE APRENDIZAJE</p>
            <h2>Elija cómo quiere recorrer a Russ</h2>
          </div>
        </div>

        <div className="russ2d-route-picker">
          {learningRoutes.map((route) => (
            <button
              key={route.id}
              type="button"
              className={activeRouteId === route.id ? 'is-active' : ''}
              onClick={() => selectRoute(route.id)}
            >
              <span>{route.number}</span>
              <small>{route.subtitle}</small>
              <strong>{route.title}</strong>
              <p>{route.description}</p>
            </button>
          ))}
        </div>

        <div className="russ2d-route-readout">
          <div>
            <span>RUTA ACTIVA</span>
            <strong>{activeRoute.title}</strong>
          </div>
          <div className="russ2d-route-sequence">
            {activeRoute.nodes.map((id, index) => {
              const node = nodes.find((item) => item.id === id)
              return (
                <button key={id} type="button" onClick={() => selectNode(id)}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{node.title}</strong>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="russ2d-section-head russ2d-first-head">
        <span>02</span>
        <div>
          <p>SISTEMA MAESTRO</p>
          <h2>Dos ejes, tres profundidades, un movimiento</h2>
        </div>
      </section>

      <section
        ref={systemRef}
        className={`russ2d-system-shell ${isFullscreen ? 'is-fullscreen' : ''}`}
      >
        <div className="russ2d-system-toolbar">
          <div>
            <span>SISTEMA 2D</span>
            <strong>{activeRoute.title}</strong>
          </div>

          <div className="russ2d-system-actions">
            <span>{active.title}</span>
            <button type="button" onClick={toggleFullscreen}>
              {isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
              <b aria-hidden="true">{isFullscreen ? '×' : '↗'}</b>
            </button>
          </div>
        </div>

        <div className="russ2d-workspace">
          <section className="russ2d-board-shell">
            <aside className="russ2d-y-axis">
              <b>PROFUNDIDAD FILOSÓFICA</b>
              <span>↑</span>
            </aside>

            <div className="russ2d-board">
              <div className="russ2d-bands" aria-hidden="true">
                {layers.map((layer) => (
                  <div key={layer.id} className={`russ2d-band russ2d-band-${layer.id}`}>
                    <span>{layer.number}</span>
                    <b>{layer.subtitle}</b>
                  </div>
                ))}
              </div>

              <div className="russ2d-grid">
                {nodes.map((node) => (
                  <NodeButton
                    key={node.id}
                    node={node}
                    activeId={activeId}
                    routeNodeIds={activeRoute.nodes}
                    onSelect={selectNode}
                  />
                ))}
              </div>

              <div className="russ2d-guides" aria-hidden="true">
                <i className="g1" />
                <i className="g2" />
                <i className="g3" />
                <i className="g4" />
              </div>

              <div className="russ2d-x-axis">
                <span>dato</span>
                <i />
                <b>MOVIMIENTO DEL PENSAR</b>
                <i />
                <span>integración</span>
                <strong>→</strong>
              </div>
            </div>
          </section>

          <aside className="russ2d-inspector">
            <div className="russ2d-inspector-head">
              <div className="russ2d-focus-code">{active.code}</div>
              <div>
                <span>CAPÍTULO {active.chapter} · {active.kicker}</span>
                <h2>{active.title}</h2>
              </div>
            </div>

            <p className="russ2d-inspector-summary">{active.text}</p>

            <div className="russ2d-inspector-meta">
              <div>
                <small>COORDENADAS</small>
                <b>X {active.x} · Y {active.y}</b>
              </div>
              <div>
                <small>FUENTE</small>
                <b>{active.source}</b>
              </div>
            </div>

            <button
              className="russ2d-more-button"
              type="button"
              onClick={() => setShowMore((value) => !value)}
              aria-expanded={showMore}
            >
              {showMore ? 'Cerrar contexto' : 'Más información'}
              <span aria-hidden="true">{showMore ? '−' : '+'}</span>
            </button>

            <button
              className="russ2d-open-deep"
              type="button"
              onClick={() => setDeepOpen(true)}
            >
              Abrir más
              <b aria-hidden="true">↗</b>
            </button>

            {showMore && (
              <div className="russ2d-more-panel">
                <div className="russ2d-more-copy">
                  <span>CONTEXTO DEL TEXTO</span>
                  {active.more.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <aside className="russ2d-report-use">
                  <span>PARA EL REPORTE</span>
                  <p>{active.report}</p>
                </aside>
              </div>
            )}

            <div className="russ2d-inspector-route">
              <span>RUTA ACTIVA · {activeRoute.title}</span>
              <div>
                {activeRoute.nodes.map((id, index) => {
                  const node = nodes.find((item) => item.id === id)
                  return (
                    <button
                      key={id}
                      type="button"
                      className={activeId === id ? 'is-active' : ''}
                      onClick={() => selectNode(id)}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <b>{node.title}</b>
                    </button>
                  )
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="russ2d-section russ2d-ch1-section">
        <div className="russ2d-section-head">
          <span>03</span>
          <div>
            <p>CAPÍTULO I · LA IDEA DEL MÉTODO</p>
            <h2>Sistematización completa</h2>
          </div>
        </div>

        <div className="russ2d-ch1-thesis">
          <div>
            <small>PREGUNTA CENTRAL</small>
            <strong>¿Por qué la filosofía necesita un método y en qué consiste propiamente ese método?</strong>
          </div>
          <p>
            El método filosófico conduce racionalmente el pensamiento mediante reglas;
            se vuelve específicamente filosófico cuando transforma el enunciado en un
            problema y lo somete a reflexión.
          </p>
        </div>

        <div className="russ2d-ch1-reasons">
          {chapterOneReasons.map((reason) => (
            <article key={reason.number}>
              <span>{reason.number}</span>
              <small>POR QUÉ HACE FALTA</small>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
              <b>{reason.formula}</b>
            </article>
          ))}
        </div>

        <div className="russ2d-ch1-voluntary">
          <span>POSTULADO VOLUNTARISTA</span>
          <strong>voluntad + trabajo + reglas + progresión gradual → dominio del ejercicio</strong>
          <p>
            Talento innato ≠ condición decisiva. La dificultad se divide, se trabaja
            progresivamente y luego se recompone.
          </p>
        </div>

        <div className="russ2d-ch1-layout">
          <div className="russ2d-ch1-map-shell">
            <div className="russ2d-ch1-map-head">
              <span>EJE X · MOVIMIENTO DEL MÉTODO</span>
              <strong>11 operaciones conectadas</strong>
            </div>

            <div className="russ2d-ch1-map-scroll">
              <div className="russ2d-ch1-map">
                <div className="russ2d-ch1-levels" aria-hidden="true">
                  {chapterOneLevels.map((level) => (
                    <div
                      key={level.id}
                      className={`russ2d-ch1-level level-${level.id}`}
                      style={{ '--row': level.row }}
                    >
                      <span>{level.number}</span>
                      <b>{level.title}</b>
                      <small>{level.function}</small>
                    </div>
                  ))}
                </div>

                <div className="russ2d-ch1-nodes">
                  {chapterOneNodes.map((node) => (
                    <button
                      key={node.id}
                      type="button"
                      className={chapterOneActiveId === node.id ? 'is-active' : ''}
                      style={{ '--cx': node.x, '--cy': node.y }}
                      onClick={() => setChapterOneActiveId(node.id)}
                    >
                      <span>{node.step}</span>
                      <strong>{node.title}</strong>
                    </button>
                  ))}
                </div>

                <div className="russ2d-ch1-axis">
                  <span>concepto</span>
                  <i />
                  <b>CONDUCIR RACIONALMENTE EL PENSAMIENTO</b>
                  <i />
                  <span>respuesta</span>
                  <strong>→</strong>
                </div>
              </div>
            </div>
          </div>

          <aside className="russ2d-ch1-inspector">
            <header>
              <span>{chapterOneActive.step}</span>
              <div>
                <small>NIVEL {chapterOneActive.y} · CAPÍTULO I</small>
                <h3>{chapterOneActive.title}</h3>
              </div>
            </header>

            <div className="russ2d-ch1-question">
              <small>PREGUNTA DE CONTROL</small>
              <strong>{chapterOneActive.question}</strong>
            </div>

            <p className="russ2d-ch1-short">{chapterOneActive.short}</p>

            <div className="russ2d-ch1-explain">
              <small>EXPLICACIÓN SISTEMÁTICA</small>
              <p>{chapterOneActive.explanation}</p>
            </div>

            <div className="russ2d-ch1-movement">
              <small>MOVIMIENTO</small>
              <strong>{chapterOneActive.movement}</strong>
            </div>

            <div className="russ2d-ch1-mini-route">
              {chapterOneNodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  className={chapterOneActiveId === node.id ? 'is-active' : ''}
                  onClick={() => setChapterOneActiveId(node.id)}
                  aria-label={`Abrir ${node.title}`}
                >
                  {node.step}
                </button>
              ))}
            </div>
          </aside>
        </div>

        <div className="russ2d-ch1-architecture">
          <div>
            <small>FUNDAMENTO</small>
            <strong>voluntad · trabajo · razón</strong>
            <p>Hace posible el método.</p>
          </div>
          <div>
            <small>REGLAS GENERALES</small>
            <strong>definición · análisis · síntesis · orden</strong>
            <p>Organizan el trabajo intelectual.</p>
          </div>
          <div>
            <small>REGLAS DE UNIDAD</small>
            <strong>idea directriz · dinámica conceptual</strong>
            <p>Convierten las partes en razonamiento.</p>
          </div>
          <div>
            <small>NÚCLEO FILOSÓFICO</small>
            <strong>cuestionamiento · problema · problemática</strong>
            <p>Transforma la pregunta en investigación.</p>
          </div>
          <div>
            <small>ACTITUD</small>
            <strong>reflexión</strong>
            <p>Retorna del objeto al sujeto y sus condiciones.</p>
          </div>
          <div>
            <small>RESULTADO</small>
            <strong>respuesta organizada y no dogmática</strong>
            <p>Culminación provisional del ejercicio.</p>
          </div>
        </div>
      </section>

      <section className="russ2d-section russ2d-ch2-section">
        <div className="russ2d-section-head">
          <span>04</span>
          <div>
            <p>CAPÍTULO II · REGLAS Y CONCEPTOS ESPECÍFICOS</p>
            <h2>La problemática como máquina filosófica</h2>
          </div>
        </div>

        <div className="russ2d-ch2-thesis">
          <div>
            <small>TESIS PROFUNDA</small>
            <strong>
              Filosofar no consiste principalmente en dar respuestas a preguntas ya dadas,
              sino en construir correctamente el problema que las hace posibles y necesarias.
            </strong>
          </div>

          <div className="russ2d-ch2-core">
            <span>cuestionamiento</span>
            <i>→</i>
            <span>problema</span>
            <i>→</i>
            <span>asunto en juego</span>
            <i>→</i>
            <span>planteamiento</span>
          </div>
        </div>

        <div className="russ2d-ch2-warning">
          <span>SIN PROBLEMÁTICA</span>
          <strong>conocimientos + conocimientos + conocimientos = yuxtaposición</strong>
          <i>≠</i>
          <span>CON PROBLEMÁTICA</span>
          <strong>selección + jerarquización + articulación = argumentación</strong>
        </div>

        <div className="russ2d-ch2-layout">
          <div className="russ2d-ch2-map-shell">
            <div className="russ2d-ch2-map-head">
              <span>EJE X · CONSTRUCCIÓN DE LA PROBLEMÁTICA</span>
              <strong>9 movimientos</strong>
            </div>

            <div className="russ2d-ch2-map-scroll">
              <div className="russ2d-ch2-map">
                <div className="russ2d-ch2-levels" aria-hidden="true">
                  {chapterTwoLevels.map((level) => (
                    <div
                      key={level.id}
                      className={`russ2d-ch2-level level-${level.id}`}
                      style={{ '--row': level.row }}
                    >
                      <span>{level.number}</span>
                      <b>{level.title}</b>
                      <small>{level.function}</small>
                    </div>
                  ))}
                </div>

                <div className="russ2d-ch2-nodes">
                  {chapterTwoNodes.map((node) => (
                    <button
                      key={node.id}
                      type="button"
                      className={chapterTwoActiveId === node.id ? 'is-active' : ''}
                      style={{ '--cx': node.x, '--cy': node.y }}
                      onClick={() => {
                        setChapterTwoActiveId(node.id)
                        setChapterTwoDeepOpen(false)
                      }}
                    >
                      <span>{node.step}</span>
                      <strong>{node.title}</strong>
                    </button>
                  ))}
                </div>

                <div className="russ2d-ch2-axis">
                  <span>tema</span>
                  <i />
                  <b>CONSTRUIR EL PROBLEMA QUE ORGANIZA LAS PREGUNTAS</b>
                  <i />
                  <span>persistencia</span>
                  <strong>→</strong>
                </div>
              </div>
            </div>
          </div>

          <aside className="russ2d-ch2-inspector">
            <header>
              <span>{chapterTwoActive.step}</span>
              <div>
                <small>NIVEL {chapterTwoActive.y} · CAPÍTULO II</small>
                <h3>{chapterTwoActive.title}</h3>
              </div>
            </header>

            <div className="russ2d-ch2-question">
              <small>PREGUNTA DE CONTROL</small>
              <strong>{chapterTwoActive.question}</strong>
            </div>

            <p className="russ2d-ch2-short">{chapterTwoActive.short}</p>

            <div className="russ2d-ch2-explain">
              <small>EXPLICACIÓN SISTEMÁTICA</small>
              <p>{chapterTwoActive.explanation}</p>
            </div>

            <div className="russ2d-ch2-movement">
              <small>MOVIMIENTO</small>
              <strong>{chapterTwoActive.movement}</strong>
            </div>

            <button
              type="button"
              className="russ2d-open-deep"
              onClick={() => setChapterTwoDeepOpen(true)}
            >
              Abrir más
              <b aria-hidden="true">↗</b>
            </button>

            <div className="russ2d-ch2-mini-route">
              {chapterTwoNodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  className={chapterTwoActiveId === node.id ? 'is-active' : ''}
                  onClick={() => {
                    setChapterTwoActiveId(node.id)
                    setChapterTwoDeepOpen(false)
                  }}
                  aria-label={`Abrir ${node.title}`}
                >
                  {node.step}
                </button>
              ))}
            </div>
          </aside>
        </div>

        <div className="russ2d-ch2-contrasts">
          {chapterTwoContrasts.map((contrast, index) => (
            <article key={contrast.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <small>DISTINCIÓN CLAVE</small>
              <h3>{contrast.title}</h3>

              <div>
                <section>
                  <b>{contrast.left}</b>
                  <p>{contrast.leftText}</p>
                </section>
                <section>
                  <b>{contrast.right}</b>
                  <p>{contrast.rightText}</p>
                </section>
              </div>
            </article>
          ))}
        </div>

        <div className="russ2d-ch2-models">
          <div className="russ2d-ch2-models-title">
            <small>FUNDAMENTOS Y MODELOS</small>
            <strong>Cómo se profundiza la noción de problema</strong>
          </div>

          {chapterTwoModels.map((model) => (
            <article key={model.title}>
              <strong>{model.title}</strong>
              <p>{model.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="russ2d-section russ2d-ch3-section">
        <div className="russ2d-section-head">
          <span>05</span>
          <div>
            <p>CAPÍTULO III · LOS FUNDAMENTOS FILOSÓFICOS DEL MÉTODO</p>
            <h2>Orden racional × movimiento dialéctico</h2>
          </div>
        </div>

        <div className="russ2d-ch3-question">
          <div>
            <small>PROBLEMA CENTRAL</small>
            <strong>
              ¿Las reglas de los ejercicios filosóficos son simples convenciones escolares
              o expresan estructuras propias del pensamiento?
            </strong>
          </div>
          <p>
            Russ responde que el método no puede reducirse a una técnica exterior:
            <b> fundamento filosófico → regla metodológica → ejercicio filosófico.</b>
          </p>
        </div>

        <div className="russ2d-ch3-foundations">
          {chapterThreeFoundations.map((item) => (
            <article key={item.id} className={item.id}>
              <small>{item.eyebrow}</small>
              <span>{item.keyword}</span>
              <h3>{item.title}</h3>
              <strong>{item.formula}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="russ2d-ch3-layout">
          <div className="russ2d-ch3-map-shell">
            <div className="russ2d-ch3-map-head">
              <span>EJE X · DEL RIGOR AL AUTODESARROLLO DEL CONCEPTO</span>
              <strong>11 operaciones</strong>
            </div>

            <div className="russ2d-ch3-map-scroll">
              <div className="russ2d-ch3-map">
                <div className="russ2d-ch3-levels" aria-hidden="true">
                  {chapterThreeLevels.map((level) => (
                    <div
                      key={level.id}
                      className={`russ2d-ch3-level level-${level.id}`}
                      style={{ '--row': level.row }}
                    >
                      <span>{level.number}</span>
                      <b>{level.title}</b>
                      <small>{level.function}</small>
                    </div>
                  ))}
                </div>

                <div className="russ2d-ch3-nodes">
                  {chapterThreeNodes.map((node) => (
                    <button
                      key={node.id}
                      type="button"
                      className={`${chapterThreeActiveId === node.id ? 'is-active' : ''} foundation-${node.foundation.toLowerCase()}`}
                      style={{ '--cx': node.x, '--cy': node.y }}
                      onClick={() => {
                        setChapterThreeActiveId(node.id)
                        setChapterThreeDeepOpen(false)
                      }}
                    >
                      <span>{node.step}</span>
                      <small>{node.foundation}</small>
                      <strong>{node.title}</strong>
                    </button>
                  ))}
                </div>

                <div className="russ2d-ch3-axis">
                  <span>evidencia</span>
                  <i />
                  <b>RIGOR CARTESIANO → TRANSICIÓN → MOVIMIENTO HEGELIANO</b>
                  <i />
                  <span>concepto</span>
                  <strong>→</strong>
                </div>
              </div>
            </div>
          </div>

          <aside className="russ2d-ch3-inspector">
            <header>
              <span>{chapterThreeActive.step}</span>
              <div>
                <small>{chapterThreeActive.foundation} · NIVEL {chapterThreeActive.y}</small>
                <h3>{chapterThreeActive.title}</h3>
              </div>
            </header>

            <div className="russ2d-ch3-control">
              <small>PREGUNTA DE CONTROL</small>
              <strong>{chapterThreeActive.question}</strong>
            </div>

            <p className="russ2d-ch3-short">{chapterThreeActive.short}</p>

            <div className="russ2d-ch3-explain">
              <small>EXPLICACIÓN SISTEMÁTICA</small>
              <p>{chapterThreeActive.explanation}</p>
            </div>

            <div className="russ2d-ch3-movement">
              <small>MOVIMIENTO</small>
              <strong>{chapterThreeActive.movement}</strong>
            </div>

            <button
              type="button"
              className="russ2d-open-deep"
              onClick={() => setChapterThreeDeepOpen(true)}
            >
              Abrir más
              <b aria-hidden="true">↗</b>
            </button>

            <div className="russ2d-ch3-mini-route">
              {chapterThreeNodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  className={chapterThreeActiveId === node.id ? 'is-active' : ''}
                  onClick={() => {
                    setChapterThreeActiveId(node.id)
                    setChapterThreeDeepOpen(false)
                  }}
                  aria-label={`Abrir ${node.title}`}
                >
                  {node.step}
                </button>
              ))}
            </div>
          </aside>
        </div>

        <div className="russ2d-ch3-contrasts">
          {chapterThreeContrasts.map((contrast, index) => (
            <article key={contrast.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <small>DISTINCIÓN ESTRUCTURAL</small>
              <h3>{contrast.title}</h3>
              <div>
                <section>
                  <b>{contrast.left}</b>
                  <p>{contrast.leftText}</p>
                </section>
                <section>
                  <b>{contrast.right}</b>
                  <p>{contrast.rightText}</p>
                </section>
              </div>
            </article>
          ))}
        </div>

        <div className="russ2d-ch3-synthesis">
          <div>
            <small>DESCARTES</small>
            <strong>ordenado, pero no rígido</strong>
          </div>
          <span>+</span>
          <div>
            <small>HEGEL</small>
            <strong>dinámico, pero no caótico</strong>
          </div>
          <i>→</i>
          <div className="result">
            <small>MÉTODO FILOSÓFICO</small>
            <strong>rigor + dinamismo</strong>
          </div>
        </div>
      </section>

      <section className="russ2d-section">
        <div className="russ2d-section-head">
          <span>06</span>
          <div>
            <p>LECTURA VERTICAL</p>
            <h2>Qué añade cada capítulo</h2>
          </div>
        </div>

        <div className="russ2d-layer-cards">
          {layers.slice().reverse().map((layer) => (
            <article key={layer.id} className={layer.id}>
              <span>{layer.number}</span>
              <small>{layer.subtitle}</small>
              <h3>{layer.title}</h3>
              <p>{layer.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="russ2d-section">
        <div className="russ2d-section-head">
          <span>07</span>
          <div>
            <p>LECTURA HORIZONTAL</p>
            <h2>La ruta que puede organizar el reporte</h2>
          </div>
        </div>

        <div className="russ2d-path">
          {pathOrder.map((id, index) => {
            const node = nodes.find((item) => item.id === id)
            return (
              <button
                key={id}
                type="button"
                className={activeId === id ? 'is-active' : ''}
                onClick={() => selectNode(id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{node.title}</strong>
              </button>
            )
          })}
        </div>
      </section>

      <section className="russ2d-section russ2d-memory">
        <div className="russ2d-section-head">
          <span>08</span>
          <div>
            <p>FÓRMULA DE MEMORIA</p>
            <h2>Delimitar · analizar · sintetizar · ordenar · cuestionar · problematizar · integrar</h2>
          </div>
        </div>

        <div className="russ2d-memory-strip">
          <b>D</b><i>→</i><b>A</b><i>→</i><b>S</b><i>→</i><b>O</b><i>→</i><b>C</b><i>→</i><b>P</b><i>→</i><b>I</b>
        </div>
      </section>

      {chapterThreeDeepOpen && (
        <div
          className="russ2d-deep-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setChapterThreeDeepOpen(false)
          }}
        >
          <section
            className="russ2d-deep-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="russ2d-ch3-deep-title"
          >
            <header className="russ2d-deep-top">
              <div className="russ2d-deep-code">{chapterThreeActive.step}</div>
              <div>
                <small>{chapterThreeActive.foundation} · CAPÍTULO III</small>
                <h2 id="russ2d-ch3-deep-title">{chapterThreeActive.title}</h2>
              </div>

              <button
                type="button"
                className="russ2d-deep-close"
                onClick={() => setChapterThreeDeepOpen(false)}
                aria-label="Cerrar ventana"
              >
                ×
              </button>
            </header>

            <div className="russ2d-deep-scroll">
              <div className="russ2d-deep-source-note">
                <span>JACQUELINE RUSS · CAPÍTULO III</span>
                <span>LOS FUNDAMENTOS FILOSÓFICOS DEL MÉTODO</span>
              </div>

              <figure className="russ2d-original-text russ2d-ch3-key">
                <blockquote>{chapterThreeActive.key}</blockquote>
                <figcaption>
                  Formulación clave conservada en la sistematización del capítulo.
                </figcaption>
              </figure>

              <div className="russ2d-systematic-grid">
                <article>
                  <span>01</span>
                  <small>QUÉ SIGNIFICA</small>
                  <h3>Núcleo</h3>
                  <p>{chapterThreeActive.explanation}</p>
                </article>

                <article>
                  <span>02</span>
                  <small>CÓMO SE MUEVE</small>
                  <h3>Operación</h3>
                  <p>{chapterThreeActive.movement}</p>
                </article>

                <article>
                  <span>03</span>
                  <small>DÓNDE ENCAJA</small>
                  <h3>Relación sistémica</h3>
                  <p>{chapterThreeActive.relation}</p>
                </article>

                <article>
                  <span>04</span>
                  <small>CÓMO USARLO</small>
                  <h3>Para el reporte</h3>
                  <p>{chapterThreeActive.report}</p>
                </article>
              </div>
            </div>
          </section>
        </div>
      )}

      {chapterTwoDeepOpen && (
        <div
          className="russ2d-deep-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setChapterTwoDeepOpen(false)
          }}
        >
          <section
            className="russ2d-deep-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="russ2d-ch2-deep-title"
          >
            <header className="russ2d-deep-top">
              <div className="russ2d-deep-code">{chapterTwoActive.step}</div>
              <div>
                <small>CAPÍTULO II · SISTEMATIZACIÓN PROFUNDA</small>
                <h2 id="russ2d-ch2-deep-title">{chapterTwoActive.title}</h2>
              </div>

              <button
                type="button"
                className="russ2d-deep-close"
                onClick={() => setChapterTwoDeepOpen(false)}
                aria-label="Cerrar ventana"
              >
                ×
              </button>
            </header>

            <div className="russ2d-deep-scroll">
              <div className="russ2d-deep-source-note">
                <span>JACQUELINE RUSS · CAPÍTULO II</span>
                <span>LAS REGLAS Y LOS CONCEPTOS ESPECÍFICOS DEL MÉTODO FILOSÓFICO</span>
              </div>

              <figure className="russ2d-original-text russ2d-ch2-key">
                <blockquote>{chapterTwoActive.key}</blockquote>
                <figcaption>
                  Formulación clave conservada en la sistematización del capítulo.
                </figcaption>
              </figure>

              <div className="russ2d-systematic-grid">
                <article>
                  <span>01</span>
                  <small>QUÉ SIGNIFICA</small>
                  <h3>Núcleo</h3>
                  <p>{chapterTwoActive.explanation}</p>
                </article>

                <article>
                  <span>02</span>
                  <small>CÓMO FUNCIONA</small>
                  <h3>Movimiento</h3>
                  <p>{chapterTwoActive.movement}</p>
                </article>

                <article>
                  <span>03</span>
                  <small>DÓNDE ENCAJA</small>
                  <h3>Relación sistémica</h3>
                  <p>{chapterTwoActive.relation}</p>
                </article>

                <article>
                  <span>04</span>
                  <small>CÓMO USARLO</small>
                  <h3>Para el reporte</h3>
                  <p>{chapterTwoActive.report}</p>
                </article>
              </div>
            </div>
          </section>
        </div>
      )}

      {deepOpen && (
        <div
          className="russ2d-deep-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDeepOpen(false)
          }}
        >
          <section
            className="russ2d-deep-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="russ2d-deep-title"
          >
            <header className="russ2d-deep-top">
              <div className="russ2d-deep-code">{active.code}</div>
              <div>
                <small>{deep.status} · CAPÍTULO {active.chapter}</small>
                <h2 id="russ2d-deep-title">{active.title}</h2>
              </div>
              <button
                type="button"
                className="russ2d-deep-close"
                onClick={() => setDeepOpen(false)}
                aria-label="Cerrar ventana"
              >
                ×
              </button>
            </header>

            <div className="russ2d-deep-scroll">
              <div className="russ2d-deep-source-note">
                <span>JACQUELINE RUSS · LOS MÉTODOS EN FILOSOFÍA</span>
                <span>{deep.location}</span>
              </div>

              <figure className="russ2d-original-text">
                <blockquote>{deep.quote}</blockquote>
                <figcaption>
                  Fragmento textual del pasaje en el que Russ aborda este concepto.
                </figcaption>
              </figure>

              <div className="russ2d-systematic-grid">
                <article>
                  <span>01</span>
                  <small>QUÉ DICE</small>
                  <h3>Núcleo textual</h3>
                  <p>{deep.says}</p>
                </article>

                <article>
                  <span>02</span>
                  <small>QUÉ HACE</small>
                  <h3>Operación</h3>
                  <p>{deep.operation}</p>
                </article>

                <article>
                  <span>03</span>
                  <small>DÓNDE ENCAJA</small>
                  <h3>Relación sistémica</h3>
                  <p>{deep.relation}</p>
                </article>

                <article>
                  <span>04</span>
                  <small>CÓMO USARLO</small>
                  <h3>Para el reporte</h3>
                  <p>{deep.report}</p>
                </article>
              </div>

              <div className="russ2d-deep-formula">
                <span>FÓRMULA DEL NODO</span>
                <strong>{deep.formula}</strong>
              </div>
            </div>
          </section>
        </div>
      )}

      <footer className="russ2d-footer">
        <Link to="/semestre/5/metodos-de-investigacion">← VOLVER A MÉTODOS</Link>
        <div>
          <strong>JACQUELINE RUSS</strong>
          <span>LOS MÉTODOS EN FILOSOFÍA · CAP. 1–3</span>
        </div>
      </footer>
    </main>
  )
}
