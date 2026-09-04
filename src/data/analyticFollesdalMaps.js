export const analyticFollesdalMaps = [
  {
    id: 'phase-1',
    roman: 'I',
    title: 'La clasificación heredada',
    subtitle: 'analítica · continental · mezcla de criterios',
    question: '¿Por qué la clasificación tradicional de la filosofía contemporánea resulta engañosa?',
    thesis:
      'Føllesdal parte de la distinción analítica / continental, pero la usa como problema inicial: esta taxonomía mezcla tipos de clasificación muy distintos y por eso necesita ser revisada.',
    takeaways: [
      'La división analítica / continental es habitual en los cursos de filosofía contemporánea.',
      'Dentro de esa división aparecen, mezclados, problemas, doctrinas, métodos y genealogías.',
      'El ejemplo de Borges / Foucault funciona como advertencia contra las clasificaciones arbitrarias.',
    ],
    nodes: [
      {
        id: 'p1-problem',
        category: 'problem',
        tag: 'PROBLEMA',
        title: '¿Qué es la filosofía analítica?',
        detail:
          'La pregunta del ensayo no es decorativa: surge porque el modo más común de clasificar la filosofía contemporánea parece útil al principio, pero pronto revela defectos internos.',
        source: 'Føllesdal · pp. 19–20',
        position: { x: 30, y: 180 },
      },
      {
        id: 'p1-contemporary',
        category: 'claim',
        tag: 'PUNTO DE PARTIDA',
        title: 'Filosofía contemporánea',
        detail:
          'En los estudios de filosofía contemporánea suele distinguirse entre una corriente analítica y otra continental.',
        source: 'Føllesdal · p. 19',
        position: { x: 320, y: 180 },
      },
      {
        id: 'p1-analytic',
        category: 'tradition',
        tag: 'TRADICIÓN',
        title: 'Filosofía analítica',
        detail:
          'Dentro de la filosofía analítica, Føllesdal menciona al menos dos líneas: una ligada a la lógica y otra al lenguaje ordinario.',
        source: 'Føllesdal · p. 19',
        position: { x: 650, y: 50 },
      },
      {
        id: 'p1-continental',
        category: 'tradition',
        tag: 'TRADICIÓN',
        title: 'Filosofía continental',
        detail:
          'En el lado continental aparecen fenomenología, existencialismo, hermenéutica, estructuralismo, deconstrucción y otros “ismos”.',
        source: 'Føllesdal · p. 19',
        position: { x: 650, y: 290 },
      },
      {
        id: 'p1-logic',
        category: 'evidence',
        tag: 'CORRIENTE',
        title: 'Lógica',
        detail:
          'Bolzano, Frege y Russell son presentados como hitos de una de las líneas principales de la tradición analítica.',
        source: 'Føllesdal · p. 19',
        position: { x: 990, y: 20 },
      },
      {
        id: 'p1-ordinary',
        category: 'evidence',
        tag: 'CORRIENTE',
        title: 'Lenguaje ordinario',
        detail:
          'Moore, el último Wittgenstein y Austin figuran como protagonistas de la otra línea más visible de la filosofía analítica.',
        source: 'Føllesdal · p. 19',
        position: { x: 990, y: 150 },
      },
      {
        id: 'p1-phenomenology',
        category: 'evidence',
        tag: 'ISMOS',
        title: 'Fenomenología y existencialismo',
        detail:
          'Sólo dos ejemplos de la variedad que suele meterse bajo la etiqueta de “continental”.',
        source: 'Føllesdal · p. 19',
        position: { x: 990, y: 260 },
      },
      {
        id: 'p1-hermeneutics',
        category: 'evidence',
        tag: 'ISMOS',
        title: 'Hermenéutica y otros “neo-ismos”',
        detail:
          'La lista de corrientes continentales reúne escuelas, estilos y programas muy heterogéneos.',
        source: 'Føllesdal · p. 19',
        position: { x: 990, y: 390 },
      },
      {
        id: 'p1-mix',
        category: 'conclusion',
        tag: 'DIAGNÓSTICO',
        title: 'Mezcla de criterios',
        detail:
          'El cuadro tradicional mezcla doctrinas, problemas, métodos, periodizaciones y genealogías como si fueran categorías del mismo tipo.',
        source: 'Føllesdal · pp. 20–22',
        position: { x: 1330, y: 150 },
      },
      {
        id: 'p1-borges',
        category: 'contrast',
        tag: 'ADVERTENCIA',
        title: 'Borges / Foucault',
        detail:
          'La alusión a la enciclopedia china citada por Foucault sirve para mostrar lo extraño que resulta un sistema clasificatorio cuando no comparte un mismo principio.',
        source: 'Føllesdal · pp. 20–21',
        position: { x: 1330, y: 320 },
      },
    ],
    edges: [
      { id: 'p1-e1', source: 'p1-problem', target: 'p1-contemporary', label: 'surge desde' },
      { id: 'p1-e2', source: 'p1-contemporary', target: 'p1-analytic', label: 'se divide en' },
      { id: 'p1-e3', source: 'p1-contemporary', target: 'p1-continental', label: 'se divide en' },
      { id: 'p1-e4', source: 'p1-analytic', target: 'p1-logic', label: 'línea A' },
      { id: 'p1-e5', source: 'p1-analytic', target: 'p1-ordinary', label: 'línea B' },
      { id: 'p1-e6', source: 'p1-continental', target: 'p1-phenomenology', label: 'ejemplos' },
      { id: 'p1-e7', source: 'p1-continental', target: 'p1-hermeneutics', label: 'ejemplos' },
      { id: 'p1-e8', source: 'p1-logic', target: 'p1-mix', label: 'no basta' },
      { id: 'p1-e9', source: 'p1-hermeneutics', target: 'p1-mix', label: 'heterogeneidad' },
      { id: 'p1-e10', source: 'p1-borges', target: 'p1-mix', label: 'ilustra', kind: 'contrast' },
    ],
  },
  {
    id: 'phase-2',
    roman: 'II',
    title: 'Definiciones insuficientes',
    subtitle: 'método · doctrina · problemas · escuela',
    question: '¿Qué intentos de definición fracasan y por qué?',
    thesis:
      'Føllesdal examina varios candidatos para definir la filosofía analítica. Todos captan algo verdadero, pero ninguno logra abarcar la tradición completa.',
    takeaways: [
      'Reducirla al análisis conceptual deja fuera a figuras centrales como Quine.',
      'No existe una doctrina única ni un conjunto exclusivo de problemas compartidos.',
      'La genealogía histórica tampoco basta: Bolzano muestra semejanza sistemática sin conexión genética directa.',
    ],
    nodes: [
      {
        id: 'p2-method',
        category: 'problem',
        tag: 'CANDIDATO',
        title: '¿Es un método de análisis conceptual?',
        detail:
          'Una primera tentación es definir la filosofía analítica por el análisis, especialmente el análisis conceptual o lógico.',
        source: 'Føllesdal · pp. 22–24',
        position: { x: 20, y: 170 },
      },
      {
        id: 'p2-waismann',
        category: 'evidence',
        tag: 'EVIDENCIA',
        title: 'Moore · Russell · Waismann',
        detail:
          'Estos nombres parecen apoyar la idea del análisis: el análisis descompone, aclara y distingue.',
        source: 'Føllesdal · pp. 22–23',
        position: { x: 360, y: 20 },
      },
      {
        id: 'p2-quine',
        category: 'contrast',
        tag: 'OBJECIÓN',
        title: 'Quine como contraejemplo',
        detail:
          'Quine cuenta como filósofo analítico, pero no encaja fácilmente en una definición puramente analítica-conceptual del estilo tradicional.',
        source: 'Føllesdal · p. 23',
        position: { x: 360, y: 280 },
      },
      {
        id: 'p2-doctrine',
        category: 'problem',
        tag: 'CANDIDATO',
        title: '¿La define una doctrina común?',
        detail:
          'Fenomenología y hermenéutica suelen reconocerse por ciertas tesis o perspectivas; ¿ocurre lo mismo en la filosofía analítica?',
        source: 'Føllesdal · pp. 24–25',
        position: { x: 700, y: 10 },
      },
      {
        id: 'p2-problems',
        category: 'problem',
        tag: 'CANDIDATO',
        title: '¿La define un mismo conjunto de problemas?',
        detail:
          'Tal vez todos los analíticos trabajen sobre lenguaje, lógica o significado. Føllesdal niega que eso baste.',
        source: 'Føllesdal · pp. 24–25',
        position: { x: 700, y: 180 },
      },
      {
        id: 'p2-school',
        category: 'problem',
        tag: 'CANDIDATO',
        title: '¿Es una escuela o genealogía histórica?',
        detail:
          'Otra posibilidad sería definir lo analítico por descendencia histórica a partir de ciertos fundadores.',
        source: 'Føllesdal · pp. 25–26',
        position: { x: 700, y: 350 },
      },
      {
        id: 'p2-bolzano',
        category: 'evidence',
        tag: 'CASO LÍMITE',
        title: 'Bolzano',
        detail:
          'Bolzano puede ser muy analítico en su modo de filosofar aunque no haya una conexión genética directa con la escuela fregeano-russelliana.',
        source: 'Føllesdal · pp. 25–26',
        position: { x: 1070, y: 350 },
      },
      {
        id: 'p2-systematic',
        category: 'claim',
        tag: 'DISTINCIÓN',
        title: 'Conexión genética ≠ conexión sistemática',
        detail:
          'Puede haber afinidad filosófica profunda sin una línea histórica de transmisión directa.',
        source: 'Føllesdal · p. 26',
        position: { x: 1070, y: 180 },
      },
      {
        id: 'p2-insufficient',
        category: 'conclusion',
        tag: 'CONCLUSIÓN',
        title: 'Todos esos criterios son insuficientes',
        detail:
          'Método, doctrina, tema y escuela iluminan partes de la tradición, pero ninguno ofrece la mejor definición general.',
        source: 'Føllesdal · pp. 23–26',
        position: { x: 1420, y: 180 },
      },
    ],
    edges: [
      { id: 'p2-e1', source: 'p2-method', target: 'p2-waismann', label: 'parece apoyarse en' },
      { id: 'p2-e2', source: 'p2-waismann', target: 'p2-quine', label: 'pero choca con', kind: 'contrast' },
      { id: 'p2-e3', source: 'p2-quine', target: 'p2-insufficient', label: 'muestra límite', kind: 'contrast' },
      { id: 'p2-e4', source: 'p2-doctrine', target: 'p2-insufficient', label: 'no basta' },
      { id: 'p2-e5', source: 'p2-problems', target: 'p2-insufficient', label: 'no basta' },
      { id: 'p2-e6', source: 'p2-school', target: 'p2-bolzano', label: 'se prueba con' },
      { id: 'p2-e7', source: 'p2-bolzano', target: 'p2-systematic', label: 'obliga a distinguir' },
      { id: 'p2-e8', source: 'p2-systematic', target: 'p2-insufficient', label: 'cierra el argumento' },
    ],
  },
  {
    id: 'phase-3',
    roman: 'III',
    title: 'La propuesta positiva de Føllesdal',
    subtitle: 'forma de aproximación · argumento · justificación',
    question: 'Si no es doctrina ni escuela, ¿qué rasgo define mejor a lo analítico?',
    thesis:
      'Lo analítico se define mejor por una forma de aproximarse a los problemas filosóficos: el énfasis sistemático en argumentar y justificar.',
    takeaways: [
      'La filosofía analítica se caracteriza por cómo trabaja una tesis, no por una lista fija de temas.',
      'Argumentar implica ofrecer razones a favor y en contra de una posición.',
      'El análisis del lenguaje conserva un papel importante, pero como instrumento al servicio de la claridad y la justificación.',
    ],
    nodes: [
      {
        id: 'p3-approach',
        category: 'claim',
        tag: 'GIRO',
        title: 'Forma de aproximación',
        detail:
          'El verdadero rasgo distintivo no es el contenido doctrinal sino el modo de abordar una cuestión filosófica.',
        source: 'Føllesdal · pp. 26–28',
        position: { x: 20, y: 180 },
      },
      {
        id: 'p3-argument',
        category: 'claim',
        tag: 'NÚCLEO',
        title: 'Argumento',
        detail:
          'Un filósofo analítico pide razones, examina inferencias y trata de mostrar qué se sigue de una tesis y a partir de qué premisas.',
        source: 'Føllesdal · pp. 27–28',
        position: { x: 340, y: 70 },
      },
      {
        id: 'p3-justification',
        category: 'claim',
        tag: 'NÚCLEO',
        title: 'Justificación',
        detail:
          'No basta afirmar: una tesis debe ir acompañada por la explicitación de por qué tendría que ser aceptada o rechazada.',
        source: 'Føllesdal · pp. 27–28',
        position: { x: 340, y: 280 },
      },
      {
        id: 'p3-positions',
        category: 'evidence',
        tag: 'OPERACIÓN',
        title: 'Aceptar o rechazar posiciones',
        detail:
          'La pregunta analítica típica es: ¿qué razones cuentan a favor de esta postura y cuáles cuentan en contra?',
        source: 'Føllesdal · p. 27',
        position: { x: 670, y: 20 },
      },
      {
        id: 'p3-reasons',
        category: 'evidence',
        tag: 'OPERACIÓN',
        title: 'Razones explícitas',
        detail:
          'El ideal no es la sugestión retórica sino la explicitación de razones susceptibles de evaluación crítica.',
        source: 'Føllesdal · pp. 27–28',
        position: { x: 670, y: 180 },
      },
      {
        id: 'p3-inference',
        category: 'evidence',
        tag: 'OPERACIÓN',
        title: 'Relaciones inferenciales',
        detail:
          'Importa ver qué se sigue de qué: consecuencias, presupuestos, compatibilidades y tensiones entre afirmaciones.',
        source: 'Føllesdal · pp. 27–28',
        position: { x: 670, y: 340 },
      },
      {
        id: 'p3-language',
        category: 'method',
        tag: 'HERRAMIENTA',
        title: 'Análisis del lenguaje',
        detail:
          'El lenguaje sigue siendo importante, pero principalmente como medio para evitar oscuridad, ambigüedad y falsa apariencia de profundidad.',
        source: 'Føllesdal · pp. 28–29',
        position: { x: 1030, y: 100 },
      },
      {
        id: 'p3-clarity',
        category: 'method',
        tag: 'META',
        title: 'Claridad conceptual',
        detail:
          'La justificación exige saber con suficiente precisión qué se está afirmando.',
        source: 'Føllesdal · pp. 28–29',
        position: { x: 1030, y: 300 },
      },
      {
        id: 'p3-definition',
        category: 'conclusion',
        tag: 'DEFINICIÓN',
        title: 'Definición provisional de filosofía analítica',
        detail:
          'Analítica es aquella filosofía que atribuye un papel decisivo al argumento y a la justificación dentro del trabajo filosófico.',
        source: 'Føllesdal · pp. 27–29',
        position: { x: 1380, y: 180 },
      },
    ],
    edges: [
      { id: 'p3-e1', source: 'p3-approach', target: 'p3-argument', label: 'se concreta en' },
      { id: 'p3-e2', source: 'p3-approach', target: 'p3-justification', label: 'se concreta en' },
      { id: 'p3-e3', source: 'p3-argument', target: 'p3-positions', label: 'pregunta por' },
      { id: 'p3-e4', source: 'p3-justification', target: 'p3-reasons', label: 'exige' },
      { id: 'p3-e5', source: 'p3-argument', target: 'p3-inference', label: 'reconstruye' },
      { id: 'p3-e6', source: 'p3-reasons', target: 'p3-language', label: 'usa' },
      { id: 'p3-e7', source: 'p3-language', target: 'p3-clarity', label: 'produce' },
      { id: 'p3-e8', source: 'p3-positions', target: 'p3-definition', label: 'converge en' },
      { id: 'p3-e9', source: 'p3-clarity', target: 'p3-definition', label: 'sostiene' },
    ],
  },
  {
    id: 'phase-4',
    roman: 'IV',
    title: 'Qué cuenta como argumentar',
    subtitle: 'deducción · no-monotonicidad · descripción · dificultades',
    question: '¿El argumento filosófico se reduce al silogismo formal?',
    thesis:
      'Para sostener su definición, Føllesdal amplía el concepto de argumentación: incluye demostraciones, razonamientos revisables, descripciones, distinciones y la capacidad de revelar problemas.',
    takeaways: [
      'La noción de argumento debe ser más amplia que un simple esquema formal P1, P2, C.',
      'Wittgenstein y Moore no quedan excluidos si entendemos la filosofía también como clarificación y detección de dificultades.',
      'Descubrir inconvenientes filosóficos ya es una contribución seria al trabajo analítico.',
    ],
    nodes: [
      {
        id: 'p4-objection',
        category: 'problem',
        tag: 'OBJECIÓN',
        title: '¿Y qué pasa con Wittgenstein?',
        detail:
          'El caso de Wittgenstein parece amenazar la definición si se supone que argumentar sólo significa demostrar formalmente.',
        source: 'Føllesdal · pp. 29–31',
        position: { x: 20, y: 180 },
      },
      {
        id: 'p4-broad',
        category: 'claim',
        tag: 'RESPUESTA',
        title: 'Ampliar la idea de argumento',
        detail:
          'Føllesdal responde que la argumentación filosófica tiene muchas formas legítimas y no debe identificarse con un único patrón lógico.',
        source: 'Føllesdal · pp. 30–31',
        position: { x: 360, y: 180 },
      },
      {
        id: 'p4-deductive',
        category: 'method',
        tag: 'FORMA',
        title: 'Deducción',
        detail:
          'La demostración deductiva es una forma importante de justificar, pero no la única.',
        source: 'Føllesdal · p. 31',
        position: { x: 720, y: 10 },
      },
      {
        id: 'p4-nonmonotonic',
        category: 'method',
        tag: 'FORMA',
        title: 'Argumentos no monotónicos',
        detail:
          'Nueva información puede obligar a revisar una conclusión: la racionalidad filosófica no es siempre lineal ni cerrada.',
        source: 'Føllesdal · p. 31',
        position: { x: 720, y: 120 },
      },
      {
        id: 'p4-description',
        category: 'method',
        tag: 'FORMA',
        title: 'Descripción',
        detail:
          'Describir con fineza emociones, percepciones o prácticas puede ser ya una forma de trabajo justificatorio.',
        source: 'Føllesdal · pp. 31–32',
        position: { x: 720, y: 230 },
      },
      {
        id: 'p4-distinctions',
        category: 'method',
        tag: 'FORMA',
        title: 'Distinciones',
        detail:
          'Muchas veces la filosofía avanza separando conceptos antes confundidos.',
        source: 'Føllesdal · p. 32',
        position: { x: 720, y: 340 },
      },
      {
        id: 'p4-difficulties',
        category: 'claim',
        tag: 'APORTE',
        title: 'Descubrir dificultades',
        detail:
          'Mostrar una dificultad, una tensión o una consecuencia problemática ya cuenta como logro filosófico.',
        source: 'Føllesdal · pp. 32–33, 36–37',
        position: { x: 1080, y: 180 },
      },
      {
        id: 'p4-moore',
        category: 'evidence',
        tag: 'CASO',
        title: 'Moore y Wittgenstein',
        detail:
          'Bajo esta noción ensanchada, ambos pueden ser vistos como analíticos porque esclarecen, distinguen y exhiben problemas decisivos.',
        source: 'Føllesdal · pp. 32–33',
        position: { x: 1420, y: 80 },
      },
      {
        id: 'p4-progress',
        category: 'conclusion',
        tag: 'CONCLUSIÓN',
        title: 'El progreso filosófico no es sólo constructivo',
        detail:
          'A veces la filosofía progresa demoliendo falsas seguridades, no erigiendo un sistema terminado.',
        source: 'Føllesdal · pp. 36–37',
        position: { x: 1420, y: 280 },
      },
    ],
    edges: [
      { id: 'p4-e1', source: 'p4-objection', target: 'p4-broad', label: 'obliga a' },
      { id: 'p4-e2', source: 'p4-broad', target: 'p4-deductive', label: 'incluye' },
      { id: 'p4-e3', source: 'p4-broad', target: 'p4-nonmonotonic', label: 'incluye' },
      { id: 'p4-e4', source: 'p4-broad', target: 'p4-description', label: 'incluye' },
      { id: 'p4-e5', source: 'p4-broad', target: 'p4-distinctions', label: 'incluye' },
      { id: 'p4-e6', source: 'p4-description', target: 'p4-difficulties', label: 'puede revelar' },
      { id: 'p4-e7', source: 'p4-distinctions', target: 'p4-difficulties', label: 'puede revelar' },
      { id: 'p4-e8', source: 'p4-difficulties', target: 'p4-moore', label: 'rescata a' },
      { id: 'p4-e9', source: 'p4-difficulties', target: 'p4-progress', label: 'muestra que' },
    ],
  },
  {
    id: 'phase-5',
    roman: 'V',
    title: 'Justificación, equilibrio y Husserl',
    subtitle: 'principios · casos · mundo de la vida',
    question: '¿Cómo se sostiene la justificación filosófica sin caer en fundacionalismo ingenuo?',
    thesis:
      'Føllesdal vincula la práctica analítica con el equilibrio reflexivo y encuentra en Husserl una ayuda decisiva para pensar los presupuestos no tematizados desde los que parte toda justificación.',
    takeaways: [
      'La justificación filosófica va y viene entre principios generales y casos particulares.',
      'El equilibrio reflexivo evita tanto el dogmatismo abstracto como el puro casuismo.',
      'Husserl aporta la idea de que toda justificación se apoya en un trasfondo de creencias y mundo de la vida no plenamente explicitados.',
    ],
    nodes: [
      {
        id: 'p5-balance',
        category: 'claim',
        tag: 'MODELO',
        title: 'Equilibrio reflexivo',
        detail:
          'La justificación filosófica trabaja corrigiendo mutuamente principios generales y juicios sobre casos concretos.',
        source: 'Føllesdal · pp. 33–35',
        position: { x: 20, y: 180 },
      },
      {
        id: 'p5-general',
        category: 'method',
        tag: 'POLO',
        title: 'Principios generales',
        detail:
          'La filosofía necesita cierto nivel de generalidad: teorías, distinciones de amplio alcance, tesis marco.',
        source: 'Føllesdal · pp. 33–34',
        position: { x: 350, y: 40 },
      },
      {
        id: 'p5-particular',
        category: 'method',
        tag: 'POLO',
        title: 'Casos particulares',
        detail:
          'Los casos, ejemplos y intuiciones no son meros adornos: sirven para controlar y ajustar la teoría.',
        source: 'Føllesdal · pp. 33–34',
        position: { x: 350, y: 310 },
      },
      {
        id: 'p5-goodman',
        category: 'evidence',
        tag: 'REFERENCIA',
        title: 'Goodman · Scheffler · Rawls',
        detail:
          'Føllesdal usa esta constelación para mostrar que el equilibrio reflexivo ya opera en filosofía analítica contemporánea.',
        source: 'Føllesdal · pp. 34–35',
        position: { x: 700, y: 40 },
      },
      {
        id: 'p5-husserl',
        category: 'claim',
        tag: 'PUENTE',
        title: 'Husserl',
        detail:
          'Husserl aparece como aliado, no como adversario: ayuda a pensar la justificación última y el trasfondo de la experiencia.',
        source: 'Føllesdal · pp. 35–36',
        position: { x: 700, y: 240 },
      },
      {
        id: 'p5-lifeworld',
        category: 'evidence',
        tag: 'TRASFONDO',
        title: 'Mundo de la vida',
        detail:
          'Hay creencias y aceptaciones previas que operan como base de nuestras justificaciones explícitas.',
        source: 'Føllesdal · pp. 35–36',
        position: { x: 1040, y: 80 },
      },
      {
        id: 'p5-presuppositions',
        category: 'evidence',
        tag: 'TRASFONDO',
        title: 'Presupuestos no tematizados',
        detail:
          'No todo puede justificarse a la vez; toda reflexión parte de un trasfondo tácito que puede volverse tema sólo progresivamente.',
        source: 'Føllesdal · pp. 35–36',
        position: { x: 1040, y: 280 },
      },
      {
        id: 'p5-clarity',
        category: 'conclusion',
        tag: 'RESULTADO',
        title: 'Justificar también es aclarar',
        detail:
          'La justificación no sólo defiende una tesis: también vuelve más nítido aquello que la tesis afirma y presupone.',
        source: 'Føllesdal · pp. 35–38',
        position: { x: 1380, y: 180 },
      },
    ],
    edges: [
      { id: 'p5-e1', source: 'p5-balance', target: 'p5-general', label: 'articula' },
      { id: 'p5-e2', source: 'p5-balance', target: 'p5-particular', label: 'articula' },
      { id: 'p5-e3', source: 'p5-general', target: 'p5-goodman', label: 'ejemplos' },
      { id: 'p5-e4', source: 'p5-particular', target: 'p5-goodman', label: 'ejemplos' },
      { id: 'p5-e5', source: 'p5-balance', target: 'p5-husserl', label: 'se profundiza con' },
      { id: 'p5-e6', source: 'p5-husserl', target: 'p5-lifeworld', label: 'introduce' },
      { id: 'p5-e7', source: 'p5-husserl', target: 'p5-presuppositions', label: 'introduce' },
      { id: 'p5-e8', source: 'p5-lifeworld', target: 'p5-clarity', label: 'reorienta' },
      { id: 'p5-e9', source: 'p5-presuppositions', target: 'p5-clarity', label: 'reorienta' },
    ],
  },
  {
    id: 'phase-6',
    roman: 'VI',
    title: 'No analíticos y hermenéutica',
    subtitle: 'retórica · claridad · compatibilidad',
    question: '¿Quién quedaría fuera de la filosofía analítica y qué pasa con la hermenéutica?',
    thesis:
      'Føllesdal excluye sobre todo las filosofías dominadas por la retórica sin justificación explícita, pero al mismo tiempo niega que la hermenéutica sea incompatible por esencia con el enfoque analítico.',
    takeaways: [
      'Heidegger y Derrida aparecen como ejemplos de filosofías menos analíticas por el predominio de la retórica.',
      'La ausencia de justificación dificulta reconstruir exactamente qué se está afirmando.',
      'La hermenéutica sí puede cultivarse analíticamente si trabaja con argumentación cuidadosa.',
    ],
    nodes: [
      {
        id: 'p6-nonanalytic',
        category: 'contrast',
        tag: 'NO ANALÍTICO',
        title: 'Heidegger y Derrida',
        detail:
          'Føllesdal los usa como ejemplos de una filosofía en la que predominan procedimientos retóricos antes que el argumento y la justificación explícita.',
        source: 'Føllesdal · pp. 37–38',
        position: { x: 20, y: 160 },
      },
      {
        id: 'p6-rhetoric',
        category: 'contrast',
        tag: 'RASGO',
        title: 'Predominio de la retórica',
        detail:
          'No se trata de negar toda idea filosófica, sino de mostrar que el modo de exposición dificulta la evaluación crítica.',
        source: 'Føllesdal · p. 37',
        position: { x: 360, y: 70 },
      },
      {
        id: 'p6-clarity',
        category: 'claim',
        tag: 'EFECTO',
        title: 'Falta de claridad reconstructiva',
        detail:
          'Cuando faltan argumentos y justificaciones, se vuelve difícil determinar qué exactamente se afirma y qué podría alegarse a favor o en contra.',
        source: 'Føllesdal · p. 38',
        position: { x: 360, y: 260 },
      },
      {
        id: 'p6-vonwright',
        category: 'problem',
        tag: 'DEBATE',
        title: 'von Wright: hermenéutica incompatible',
        detail:
          'Von Wright sostiene que la hermenéutica no encaja con la filosofía analítica.',
        source: 'Føllesdal · p. 38',
        position: { x: 710, y: 160 },
      },
      {
        id: 'p6-objection1',
        category: 'evidence',
        tag: 'RAZÓN 1',
        title: 'Unidad de las ciencias',
        detail:
          'Primera razón atribuida a von Wright: la hermenéutica subraya diferencias entre ciencias naturales, sociales y humanidades.',
        source: 'Føllesdal · pp. 38–39',
        position: { x: 1050, y: 20 },
      },
      {
        id: 'p6-objection2',
        category: 'evidence',
        tag: 'RAZÓN 2',
        title: 'Naturalismo de algunos analíticos',
        detail:
          'Segunda razón: pensadores analíticos interesados en comprensión e interpretación, como Quine, Sellars o Davidson, serían naturalistas.',
        source: 'Føllesdal · pp. 38–39',
        position: { x: 1050, y: 180 },
      },
      {
        id: 'p6-response',
        category: 'claim',
        tag: 'RESPUESTA',
        title: 'Las dos razones fallan',
        detail:
          'No todos los analíticos sostienen unidad de ciencias fuerte, ni todos comparten naturalismo. Por ello la incompatibilidad no se sigue.',
        source: 'Føllesdal · pp. 38–39',
        position: { x: 1050, y: 340 },
      },
      {
        id: 'p6-stegmuller',
        category: 'conclusion',
        tag: 'EJEMPLO',
        title: 'Hermenéutica analítica · Stegmüller',
        detail:
          'El artículo de Stegmüller sobre el círculo de la comprensión prueba, para Føllesdal, que puede existir una hermenéutica trabajada analíticamente.',
        source: 'Føllesdal · p. 39',
        position: { x: 1420, y: 160 },
      },
    ],
    edges: [
      { id: 'p6-e1', source: 'p6-nonanalytic', target: 'p6-rhetoric', label: 'se caracteriza por' , kind: 'contrast' },
      { id: 'p6-e2', source: 'p6-rhetoric', target: 'p6-clarity', label: 'provoca', kind: 'contrast' },
      { id: 'p6-e3', source: 'p6-vonwright', target: 'p6-objection1', label: 'apela a' },
      { id: 'p6-e4', source: 'p6-vonwright', target: 'p6-objection2', label: 'apela a' },
      { id: 'p6-e5', source: 'p6-objection1', target: 'p6-response', label: 'es respondida por', kind: 'contrast' },
      { id: 'p6-e6', source: 'p6-objection2', target: 'p6-response', label: 'es respondida por', kind: 'contrast' },
      { id: 'p6-e7', source: 'p6-response', target: 'p6-stegmuller', label: 'se concreta en' },
    ],
  },
  {
    id: 'phase-7',
    roman: 'VII',
    title: 'Reclasificación final y razón ética',
    subtitle: 'más analítico / menos analítico · autonomía · democracia',
    question: '¿Por qué conviene involucrarse en la filosofía analítica?',
    thesis:
      'La conclusión de Føllesdal reorganiza la cartografía filosófica: lo analítico no es una escuela paralela a las demás, sino un grado o dimensión transversal, valiosa además por razones éticas y democráticas.',
    takeaways: [
      'La distinción analítico / no-analítico atraviesa otras divisiones como fenomenología, hermenéutica o tomismo.',
      'Puede hablarse de filósofos más o menos analíticos dentro de una misma tradición.',
      'La exigencia de argumentar reconoce al otro como autónomo y fortalece la vida democrática.',
    ],
    nodes: [
      {
        id: 'p7-reclass',
        category: 'claim',
        tag: 'CONCLUSIÓN',
        title: 'Reclasificar la filosofía contemporánea',
        detail:
          'La filosofía analítica no debe figurar como una rama más al lado de otras escuelas, porque su diferencia es de estilo argumentativo y no de doctrina cerrada.',
        source: 'Føllesdal · pp. 40–41',
        position: { x: 20, y: 180 },
      },
      {
        id: 'p7-axis',
        category: 'claim',
        tag: 'EJE',
        title: 'Más analítico ↕ menos analítico',
        detail:
          'Lo importante pasa a ser el grado de importancia concedido al argumento y la justificación.',
        source: 'Føllesdal · p. 41',
        position: { x: 360, y: 180 },
      },
      {
        id: 'p7-cross',
        category: 'evidence',
        tag: 'TRANSVERSALIDAD',
        title: 'Fenomenología · hermenéutica · tomismo · etc.',
        detail:
          'Cualquiera de estas tradiciones puede contener representantes más analíticos y otros menos analíticos.',
        source: 'Føllesdal · pp. 40–41',
        position: { x: 700, y: 40 },
      },
      {
        id: 'p7-historical',
        category: 'evidence',
        tag: 'ALCANCE',
        title: 'Aristóteles · Descartes · Tomás de Aquino',
        detail:
          'La misma escala puede aplicarse a filósofos de otras épocas; Føllesdal cita expresamente a estos grandes autores.',
        source: 'Føllesdal · p. 40',
        position: { x: 700, y: 300 },
      },
      {
        id: 'p7-ethics',
        category: 'value',
        tag: 'ÉTICA INDIVIDUAL',
        title: 'Reconocer al otro como autónomo',
        detail:
          'Argumentar significa intentar convencer mediante la reflexión del interlocutor, no por coacción ni por puro impacto retórico.',
        source: 'Føllesdal · p. 41',
        position: { x: 1060, y: 30 },
      },
      {
        id: 'p7-social',
        category: 'value',
        tag: 'ÉTICA SOCIAL',
        title: 'Rechazar coacción y fanatismo',
        detail:
          'En la enseñanza y el trabajo filosófico, el papel central del argumento dificulta el avance de discursos seductores pero acríticos.',
        source: 'Føllesdal · pp. 41–42',
        position: { x: 1060, y: 180 },
      },
      {
        id: 'p7-democracy',
        category: 'conclusion',
        tag: 'HORIZONTE',
        title: 'Diálogo racional y democracia',
        detail:
          'Educar en el argumento y el diálogo racional es, según Føllesdal, una de las tareas más importantes de la filosofía analítica.',
        source: 'Føllesdal · p. 42',
        position: { x: 1060, y: 330 },
      },
      {
        id: 'p7-final',
        category: 'conclusion',
        tag: 'RESPUESTA FINAL',
        title: '¿Por qué involucrarse?',
        detail:
          'Porque la filosofía analítica no sólo es buena filosofía: también cultiva una práctica intelectual compatible con autonomía, tolerancia y funcionamiento democrático.',
        source: 'Føllesdal · pp. 41–42',
        position: { x: 1420, y: 180 },
      },
    ],
    edges: [
      { id: 'p7-e1', source: 'p7-reclass', target: 'p7-axis', label: 'se expresa como' },
      { id: 'p7-e2', source: 'p7-axis', target: 'p7-cross', label: 'atraviesa' },
      { id: 'p7-e3', source: 'p7-axis', target: 'p7-historical', label: 'también atraviesa' },
      { id: 'p7-e4', source: 'p7-axis', target: 'p7-ethics', label: 'fundamenta' },
      { id: 'p7-e5', source: 'p7-ethics', target: 'p7-social', label: 'se prolonga en' },
      { id: 'p7-e6', source: 'p7-social', target: 'p7-democracy', label: 'favorece' },
      { id: 'p7-e7', source: 'p7-democracy', target: 'p7-final', label: 'culmina en' },
      { id: 'p7-e8', source: 'p7-cross', target: 'p7-final', label: 'apoya' },
    ],
  },
]
