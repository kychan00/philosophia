import { hegelLogicAssignedReading } from './hegelLogic77to98.js'
import { hegelTeacherSlideById, buildHegelTeacherSchema } from './hegelTeacherSlides.js'

export const hegelCroceRoutes = [
  { id: 'all', label: 'Todo el sistema' },
  { id: 'orientation', label: 'Consigna' },
  { id: 'croce', label: 'Croce · capítulo I' },
  { id: 'opposites', label: 'Contrarios' },
  { id: 'dialectic', label: 'Dialéctica' },
  { id: 'questions', label: 'Cuestionario · 18' },
  { id: 'hegel', label: 'Hegel · Ser/Nada/Devenir' },
  { id: 'reading77', label: 'Lectura · Hegel pp. 77–98' },
  { id: 'docente', label: 'Presentaciones del profesor' },
  { id: 'class14', label: 'Clase · 14 oct' },
  { id: 'henrich', label: 'Henrich · mapa' },
]

export const hegelCrocePhases = [
  'Consigna',
  'Método filosófico',
  'Distinción y oposición',
  'Monismo y dualismo',
  'Síntesis dialéctica',
  'Cuestionario',
  'Ser · Nada · Devenir',
  'Clase · 14 oct',
  'Henrich · contexto',
  'Lectura · 77–98',
  'Apoyo docente · Hegel',
]

const raw = [
  ['A01','Consigna','Correo del profesor','La tarea reúne tres frentes: Croce, el comienzo de la Ciencia de la Lógica y una revisión general de Henrich.','No son tres tareas aisladas: juntas preparan la entrada a Hegel desde método, dialéctica, texto primario y contexto.','orientar toda la lectura',['tarea','Hegel','lectura'],['orientation'],[],true,false,'Correo · 7 oct'],
  ['A02','Consigna','Croce · capítulo I','Leer “La dialéctica o la síntesis de los contrarios”.','Croce funciona como mapa interpretativo para entender qué problema intenta resolver la dialéctica hegeliana.','preparar la interpretación',['Croce','dialéctica','contrarios'],['orientation','croce'],['A01'],true,false,'Croce · cap. I'],
  ['A03','Consigna','Cuestionario del capítulo','El cuestionario organiza 18 preguntas sobre método, contrarios, Aufhebung, Kant, Ser, Nada y Devenir.','Conviene estudiar cada pregunta como una prueba de comprensión, no como una lista para memorizar.','convertir la lectura en control activo',['cuestionario','18 preguntas'],['orientation','questions'],['A02'],true,false,'Cuestionario · cap. I'],
  ['A04','Consigna','Hegel · texto primario','Revisar en la Ciencia de la Lógica lo relativo al Ser Puro, la Nada Pura y el Devenir.','Este tramo permite comprobar directamente el movimiento que Croce interpreta.','anclar la interpretación en Hegel',['Hegel','ser','nada','devenir'],['orientation','hegel'],['A01'],true,false,'Hegel · Doctrina del ser'],
  ['A05','Consigna','Henrich · consulta general','Revisar de manera general Hegel en su contexto; como mínimo, el índice.','El índice muestra dónde se sitúan el comienzo de la lógica, la reflexión, la dialéctica y la totalidad dentro del libro.','dar contexto y rutas de profundización',['Henrich','contexto','índice'],['orientation','henrich'],['A01'],false,false,'Henrich · índice'],
  ['A06','Consigna','Objetivo de hoy','Poder explicar por qué la unidad hegeliana incluye oposición y por qué el devenir es la verdad de Ser y Nada.','Si esta conexión queda clara, el resto del cuestionario deja de parecer una colección de definiciones.','integrar toda la tarea',['unidad','oposición','devenir'],['orientation','dialectic','hegel'],['A02','A04','A05'],true,false,'Síntesis de la tarea'],

  ['C01','Método filosófico','Una lógica de la filosofía','Croce abre preguntando por el método propio de la filosofía.','Si matemáticas, ciencias naturales, historia, arte y ética poseen métodos específicos, la filosofía también necesita explicitar el suyo.','fundar la pregunta metodológica',['método','lógica filosófica'],['croce'],['A02'],true,false,'Croce · cap. I · pp. 9–12'],
  ['C02','Método filosófico','Método inmanente','La filosofía busca comprender las distintas actividades del espíritu, no reproducirlas.','Por eso no puede limitarse al método de uno de sus objetos; su modo de comprensión debe ser propio e inmanente.','distinguir filosofía de métodos particulares',['inmanencia','comprensión'],['croce'],['C01'],false,false,'Croce · cap. I · pp. 10–12'],
  ['C03','Método filosófico','No método matemático','La filosofía no puede reducirse al procedimiento abstracto-deductivo de las matemáticas.','La crítica no niega el valor de las matemáticas; niega que su método agote la inteligibilidad filosófica.','cerrar una falsa identificación',['matemáticas','deducción'],['croce'],['C02'],false,true,'Croce · cap. I · pp. 10–12'],
  ['C04','Método filosófico','No método experimental','Tampoco basta trasladar sin más observación, experimento y abstracción de las ciencias naturales.','La filosofía pregunta por la inteligibilidad de esas prácticas, y por ello no puede quedar encerrada en una sola de ellas.','cerrar otra falsa identificación',['experimento','ciencias'],['croce'],['C02'],false,true,'Croce · cap. I · pp. 10–12'],
  ['C05','Método filosófico','No rapto místico','El pensamiento filosófico no es sentimiento, éxtasis o intuición alógica.','Croce atribuye a Hegel la exigencia de una forma inteligible, razonada y comunicable de la filosofía.','separar filosofía de misticismo',['logos','demostración'],['croce'],['C02'],true,false,'Croce · cap. I · pp. 12–13'],
  ['C06','Método filosófico','Primer carácter · lógico','El concepto filosófico debe poder sostenerse en pensamiento inteligible y razonado.','“Lógico” aquí marca fuerza conceptual y demostrativa frente a la mera vivencia privada.','definir el primer carácter',['lógico','concepto'],['croce'],['C05'],true,false,'Croce · cap. I · pp. 12–14'],
  ['C07','Método filosófico','Segundo carácter · universal','El concepto filosófico es universal, no una representación general empírica.','No equivale a agrupar casos semejantes como “casa” o “azul”; apunta a una determinación filosófica del todo.','definir el segundo carácter',['universal','representación'],['croce'],['C06'],true,false,'Croce · cap. I · pp. 13–14'],
  ['C08','Método filosófico','Tercer carácter · concreto','El universal filosófico es concreto, no un esquema vacío.','Debe comprender la realidad en su riqueza, articulando diferencias internas sin convertirlas en un agregado mecánico.','definir el tercer carácter',['concreto','universal concreto'],['croce','opposites'],['C07'],true,false,'Croce · cap. I · pp. 13–15'],

  ['C09','Distinción y oposición','Problema central · los contrarios','Croce identifica el problema de los contrarios como núcleo de las grandes disputas sobre Hegel.','Antes de discutir la dialéctica hay que separar cuidadosamente diferencia, distinción y oposición.','abrir el núcleo polémico',['contrarios','oposición'],['croce','opposites'],['C08'],true,false,'Croce · cap. I · p. 15'],
  ['C10','Distinción y oposición','Conceptos distintos','Los distintos permanecen unidos en su diferencia dentro del universal concreto.','Ejemplos de Croce: imaginación e intelecto; derecho y moralidad. Un distinto no destruye necesariamente al otro.','definir distinción',['distintos','unidad'],['opposites'],['C09'],true,false,'Croce · cap. I · pp. 15–17'],
  ['C11','Distinción y oposición','Conceptos contrarios','Los contrarios se presentan como términos antitéticos cuya afirmación parece excluir al otro.','Ejemplos: verdadero/falso, bien/mal, bello/feo, positivo/negativo, vida/muerte, ser/nada.','definir oposición',['contrarios','antítesis'],['opposites'],['C09'],true,false,'Croce · cap. I · pp. 16–17'],
  ['C12','Distinción y oposición','Distintos ≠ contrarios','Confundir distinción con oposición destruye la precisión de la dialéctica.','Los distintos son formas diferenciadas que pueden coexistir orgánicamente; los contrarios exigen una relación de oposición.','fijar la distinción de control',['distinción','oposición'],['opposites'],['C10','C11'],true,false,'Croce · cap. I · pp. 16–17'],
  ['C13','Distinción y oposición','Organismo conceptual','El universal concreto no es suma mecánica de partes.','Cada forma particular se entiende por su relación con las demás y con el todo.','explicar la unidad de los distintos',['organismo','totalidad'],['opposites'],['C10'],false,true,'Croce · cap. I · pp. 15–16'],
  ['C14','Distinción y oposición','Mors tua, vita mea','Croce usa la imagen de que en los contrarios la vida de uno parece implicar la muerte del otro.','La fórmula dramatiza la exclusión mutua que el problema dialéctico debe pensar sin perder la unidad.','mostrar la dificultad de la oposición',['exclusión','contradicción'],['opposites'],['C11'],false,true,'Croce · cap. I · pp. 16–17'],
  ['C15','Distinción y oposición','Unidad amenazada','Si oposición y unidad se conciben como incompatibles, la filosofía queda atrapada entre escisión y abstracción.','El problema es pensar unidad sin borrar oposición y oposición sin destruir unidad.','formular el dilema',['unidad','oposición'],['opposites','dialectic'],['C12'],true,false,'Croce · cap. I · pp. 17–18'],

  ['C16','Monismo y dualismo','Respuesta monista','Una familia de posiciones reduce la oposición a una unidad y vuelve ilusorio uno de los términos.','Croce agrupa aquí sensualismo, empirismo, materialismo y mecanicismo como ejemplos del gesto monista.','presentar la primera salida',['monismo','reducción'],['opposites'],['C15'],true,false,'Croce · cap. I · pp. 18–20'],
  ['C17','Monismo y dualismo','Sensualismo / empirismo','El término espiritual o conceptual puede interpretarse como derivación de lo sensible.','La crítica de Croce es que esta reducción conserva de modo encubierto aquello que pretendía eliminar.','ejemplificar el monismo',['sensualismo','empirismo'],['opposites'],['C16'],false,true,'Croce · cap. I · pp. 18–19'],
  ['C18','Monismo y dualismo','Materialismo / mecanicismo','Pensamiento, verdad o valor pueden reducirse a procesos materiales o mecanismos.','El problema no es describir condicionamientos materiales, sino convertir un polo en la única realidad y degradar el contrario a apariencia.','ejemplificar el monismo',['materialismo','mecanicismo'],['opposites'],['C16'],false,true,'Croce · cap. I · pp. 18–19'],
  ['C19','Monismo y dualismo','Lo que sacrifica el monismo','El monismo gana unidad al precio de negar la oposición.','Por eso resulta unilateral: explica un término absorbiendo al otro.','diagnosticar el límite monista',['unidad','unilateralidad'],['opposites'],['C16'],true,false,'Croce · cap. I · pp. 18–20'],
  ['C20','Monismo y dualismo','Respuesta dualista','El dualismo conserva ambos polos y afirma con fuerza su oposición.','Su mérito polémico es no borrar la antinomia; su problema es convertirla en una separación insuperable.','presentar la segunda salida',['dualismo','antinomia'],['opposites'],['C15'],true,false,'Croce · cap. I · pp. 19–20'],
  ['C21','Monismo y dualismo','Lo que sacrifica el dualismo','El dualismo salva la oposición al precio de perder la unidad.','Así queda con dos términos que se necesitan para ser pensados, pero aparecen sin mediación suficiente.','diagnosticar el límite dualista',['oposición','separación'],['opposites'],['C20'],true,false,'Croce · cap. I · pp. 19–20'],
  ['C22','Monismo y dualismo','Oscilación histórica','Croce describe una alternancia: el cansancio ante la uniformidad monista reabre el dualismo, y viceversa.','La sucesión histórica revela que ninguno resuelve por sí solo la exigencia de unidad y oposición.','mostrar por qué el problema reaparece',['historia','monismo','dualismo'],['opposites'],['C19','C21'],false,false,'Croce · cap. I · pp. 20–21'],

  ['C23','Síntesis dialéctica','Concordia discors','La experiencia común puede reconocer lucha y armonía a la vez.','Croce usa este punto como indicio de que unidad y oposición no tienen por qué excluirse absolutamente.','preparar la solución hegeliana',['concordia discors','unidad'],['dialectic'],['C22'],false,false,'Croce · cap. I · pp. 21–23'],
  ['C24','Síntesis dialéctica','Solución hegeliana','La unidad verdadera no está frente a la oposición: la contiene.','La síntesis no elimina simplemente los contrarios; piensa una unidad concreta que sólo es tal mediante su oposición interna.','formular el núcleo hegeliano',['síntesis','unidad concreta'],['dialectic'],['C23'],true,false,'Croce · cap. I · pp. 24–25'],
  ['C25','Síntesis dialéctica','Universal concreto','La realidad filosóficamente pensada es una y múltiple, unida y diferenciada.','Croce presenta el universal concreto como forma lógica del desenvolvimiento, no como universal vacío.','nombrar la forma de la solución',['universal concreto','desenvolvimiento'],['dialectic'],['C24'],true,false,'Croce · cap. I · pp. 24–25'],
  ['C26','Síntesis dialéctica','Movimiento, no estatismo','La unidad de contrarios debe entenderse como movimiento.','Sin oposición interna no habría desarrollo; una unidad absolutamente inmóvil sería abstracta para este problema.','hacer dinámica la unidad',['movimiento','vida'],['dialectic'],['C24'],true,false,'Croce · cap. I · pp. 24–25'],
  ['C27','Síntesis dialéctica','Momentos','Los términos abstractos y la síntesis pueden llamarse “momentos”.','El término indica que ninguno debe aislarse como verdad autosuficiente del movimiento total.','explicar el vocabulario dialéctico',['momento','mediación'],['dialectic'],['C24'],true,false,'Croce · cap. I · pp. 26–27'],
  ['C28','Síntesis dialéctica','Aufhebung','La superación niega los momentos considerados aisladamente y los conserva dentro de la unidad.','Por eso “suprimir” y “conservar” no son operaciones separadas: nombran dos lados del mismo movimiento.','explicar la superación',['Aufhebung','superación'],['dialectic'],['C27'],true,false,'Croce · cap. I · pp. 26–27'],
  ['C29','Síntesis dialéctica','Negación de la negación','El tercer momento niega la unilateralidad de la primera negación.','No significa regresar sin cambio al punto inicial, sino producir una afirmación más rica que integra el conflicto.','mostrar la estructura de la síntesis',['negación','negación de la negación'],['dialectic'],['C28'],true,false,'Croce · cap. I · pp. 26–27'],
  ['C30','Síntesis dialéctica','Intelecto','El intelecto fija los términos en su oposición y separación.','Es necesario como momento, pero se vuelve abstracto cuando pretende que sus determinaciones aisladas sean la verdad última.','ubicar Verstand',['intelecto','abstracción'],['dialectic'],['C27'],true,false,'Croce · cap. I · pp. 26–29'],
  ['C31','Síntesis dialéctica','Razón','La razón opera la unidad de los momentos que el intelecto distingue.','No borra el trabajo del intelecto: lo presupone y lo supera en una unidad más concreta.','ubicar Vernunft',['razón','síntesis'],['dialectic'],['C30'],true,false,'Croce · cap. I · pp. 26–29'],
  ['C32','Síntesis dialéctica','Dialéctica negativa','La polémica contra los contrarios pensados aisladamente tiene una función negativa.','Su resultado inmediato es mostrar la imposibilidad de mantener separados los extremos como verdades últimas.','distinguir función crítica',['dialéctica negativa','crítica'],['dialectic'],['C30'],false,false,'Croce · cap. I · pp. 28–29'],
  ['C33','Síntesis dialéctica','Dialéctica positiva','La doctrina del desenvolvimiento expresa positivamente la unidad viva de los contrarios.','No se limita a destruir abstracciones: muestra la estructura concreta que las integra.','distinguir contenido positivo',['dialéctica positiva','desarrollo'],['dialectic'],['C31','C32'],true,false,'Croce · cap. I · pp. 28–30'],
  ['C34','Síntesis dialéctica','No plantilla numérica','Croce advierte contra convertir la dialéctica en un simple esquema externo de tres casillas.','La tríada sólo tiene sentido si el tercer momento nace de la relación interna de los anteriores.','evitar el cliché escolar',['tríada','formalismo'],['dialectic'],['C29'],true,false,'Croce · cap. I · pp. 26–27'],
  ['C35','Síntesis dialéctica','Primera tríada','Ser, Nada y Devenir condensan el problema de la dialéctica.','Ser y Nada, tomados en pureza, no sostienen una verdad aislada; su verdad aparece en el Devenir.','conectar Croce con Hegel',['Ser','Nada','Devenir'],['dialectic','hegel'],['C24'],true,false,'Croce · cap. I · pp. 27–30'],
  ['C36','Síntesis dialéctica','Devenir · primer concepto concreto','Croce presenta el Devenir como la verdad en la que Ser y Nada tienen sentido en su relación.','Es “concreto” porque no fija un extremo vacío: contiene el tránsito y la diferencia de los momentos.','explicar el resultado de la primera tríada',['devenir','concepto concreto'],['dialectic','hegel'],['C35'],true,false,'Croce · cap. I · pp. 27–30'],
  ['C37','Síntesis dialéctica','Delirio báquico','La imagen hegeliana describe una verdad en la que cada momento aislado se disuelve, sin que el todo sea caos.','Croce la lee como una “locura” sólo para el pensamiento que toma abstracciones inmóviles por realidad.','interpretar la metáfora',['delirio báquico','movimiento'],['dialectic'],['C33'],false,false,'Croce · cap. I · pp. 30–31'],
  ['C38','Síntesis dialéctica','Principio de identidad fortalecido','Croce sostiene que Hegel no destruye la identidad; intenta volverla concreta.','La identidad verdadera no sería A aislado de toda diferencia, sino una unidad capaz de incluir distinción y oposición sin desintegrarse.','cerrar el capítulo',['identidad','universal concreto'],['dialectic'],['C25','C33'],true,false,'Croce · cap. I · pp. 31–36'],

  ['Q01','Cuestionario','Q1 · Lógica filosófica','¿Cómo justifica B. Croce, siguiendo la exposición de Hegel, la necesidad de una lógica filosófica o método filosófico?','Respuesta de estudio: la filosofía es una actividad específica de comprensión y debe explicitar el método inmanente que corresponde a esa actividad; no puede limitarse a copiar el método de una ciencia particular.','resolver pregunta 1',['método filosófico'],['questions'],['C01','C02'],true,false,'Cuestionario · cap. I · Q1'],
  ['Q02','Cuestionario','Q2 · Tres caracteres','Señalar los tres caracteres del pensamiento filosófico según Hegel.','Respuesta de estudio: lógico, universal y concreto; lógico frente a lo alógico, universal frente a la mera generalización empírica y concreto frente al esquema vacío.','resolver pregunta 2',['lógico','universal','concreto'],['questions'],['C06','C07','C08'],true,false,'Cuestionario · cap. I · Q2'],
  ['Q03','Cuestionario','Q3 · Punto central de las disputas','De acuerdo con B. Croce: ¿cuál es el punto central en el que se han centrado las disputas en torno a Hegel?','Respuesta de estudio: Croce sitúa en el problema de los contrarios el núcleo de las disputas en torno a la lógica hegeliana.','resolver pregunta 3',['contrarios'],['questions'],['C09'],true,false,'Cuestionario · cap. I · Q3'],
  ['Q04','Cuestionario','Q4 · Distintos / contrarios','Señalar la diferencia entre «conceptos distintos» y «conceptos contrarios».','Respuesta de estudio: los distintos se articulan dentro de una unidad sin excluirse mutuamente; los contrarios se presentan como polos antitéticos cuya oposición exige mediación dialéctica.','resolver pregunta 4',['distintos','contrarios'],['questions'],['C10','C11','C12'],true,false,'Cuestionario · cap. I · Q4'],
  ['Q05','Cuestionario','Q5 · Posturas monistas','Explicar la posición ante el problema de los contrarios de las siguientes corrientes filosóficas: sensualismo, empirismo, materialismo, mecanicismo (posturas monistas).','Respuesta de estudio: Croce presenta estas posiciones como intentos de conservar la unidad reduciendo o degradando uno de los términos de la oposición; así, sacrifican la oposición en favor de una unidad abstracta.','resolver pregunta 5',['monismo','sensualismo','empirismo','materialismo','mecanicismo'],['questions'],['C16','C17','C18','C19'],true,false,'Cuestionario · cap. I · Q5'],
  ['Q06','Cuestionario','Q6 · Teorías dualistas','¿De qué manera enfrentan las teorías dualistas el problema de los contrarios? ¿Qué diferencia observas entre dualistas y monistas en torno al problema de los contrarios?','Respuesta de estudio: el dualismo conserva ambos polos como reales y opuestos, pero los deja separados; frente al monismo, salva la oposición y pierde una unidad efectiva.','resolver pregunta 6',['dualismo','monismo'],['questions'],['C20','C21'],true,false,'Cuestionario · cap. I · Q6'],
  ['Q07','Cuestionario','Q7 · Monismo y dualismo','Comentar la siguiente cita: “Ahora bien, frente al abstracto monismo, la concepción dualista tiene, sin duda, algún valor […] pero intrínsecamente no satisface más que la anterior porque si la primera sacrifica la oposición en favor de la unidad, la segunda sacrifica la unidad en favor de la oposición”.','Respuesta de estudio: la cita formula la insuficiencia recíproca de las dos salidas. El monismo conserva unidad borrando oposición; el dualismo conserva oposición perdiendo unidad. La exigencia dialéctica es pensar ambas juntas.','resolver pregunta 7',['unidad','oposición','monismo','dualismo'],['questions'],['C19','C21','C24'],true,false,'Cuestionario · cap. I · Q7'],
  ['Q08','Cuestionario','Q8 · Alternancia histórica','¿De qué manera se alternan en la historia de la filosofía sistemas monistas y dualistas?','Respuesta de estudio: Croce describe una alternancia en la que cada posición reaparece como corrección de la unilateralidad de la otra, sin resolver definitivamente la relación entre unidad y oposición.','resolver pregunta 8',['historia','oscilación'],['questions'],['C22'],false,false,'Cuestionario · cap. I · Q8'],
  ['Q09','Cuestionario','Q9 · Posición de Hegel','Explicar lo peculiar de la posición de Hegel frente al problema de los contrarios. Te puedes apoyar en la siguiente cita: “¿Y por qué el universal filosófico no podría ser, como la expresión estética, al mismo tiempo, uno y diverso, concorde y discorde, continuo y discreto, estático y dinámico? […] El concepto filosófico es universal concreto y por tal razón es precisamente de la realidad tal cual es, una y múltiple, divisa e indivisa […] Y la única verdad es que la unidad no tiene enfrente suyo a la oposición, sino que la tiene en sí misma, y que sin oposición la realidad no sería tal, porque no sería entonces desenvolvimiento, vida”.','Respuesta de estudio: lo peculiar de Hegel, según la reconstrucción de Croce, consiste en no escoger entre unidad y oposición: el universal concreto es una unidad que contiene diferencia y oposición como condición de su desenvolvimiento.','resolver pregunta 9',['Hegel','universal concreto','unidad','oposición'],['questions'],['C24','C25','C26'],true,false,'Cuestionario · cap. I · Q9'],
  ['Q10','Cuestionario','Q10 · Opuestos como momentos','Explicar en qué sentido los opuestos son «momentos» dentro de la unidad dialéctica.','Respuesta de estudio: un momento no es una verdad autosuficiente; los opuestos sólo adquieren su sentido pleno como momentos internos del movimiento total de la unidad dialéctica.','resolver pregunta 10',['momento'],['questions'],['C27'],true,false,'Cuestionario · cap. I · Q10'],
  ['Q11','Cuestionario','Q11 · Aufhebung','Explicar el concepto de Aufhebung conforme a la síntesis –entendida como negación de la negación-.','Respuesta de estudio: la Aufhebung niega la pretensión de autosuficiencia de los extremos considerados por separado y, al mismo tiempo, los conserva dentro de una unidad más concreta; la negación de la negación no es un simple regreso al inicio.','resolver pregunta 11',['Aufhebung','negación de la negación'],['questions'],['C28','C29'],true,false,'Cuestionario · cap. I · Q11'],
  ['Q12','Cuestionario','Q12 · Kant y Hegel','Explicar la semejanza y la diferencia entre Kant y Hegel a partir de las nociones de «Intelecto» y «Razón». Más aún: ¿qué diferencia hay entre ambos autores sobre el significado del término “Dialéctica”?','Respuesta de estudio: en la lectura de Croce, el intelecto fija determinaciones y la razón reconstruye su unidad; Hegel transforma la dialéctica en una estructura positiva del desenvolvimiento, mientras la referencia a Kant sirve para marcar el carácter crítico de la dialéctica trascendental.','resolver pregunta 12',['Kant','Hegel','intelecto','razón','dialéctica'],['questions'],['C30','C31','C33'],true,false,'Cuestionario · cap. I · Q12'],
  ['Q13','Cuestionario','Q13 · Primera tríada','¿Cuál es la primera tríada en la Ciencia de la Lógica? Y: ¿cómo se ejemplifica allí la dialéctica de Hegel y su posición ante el problema de los contrarios?','Respuesta de estudio: la primera tríada es Ser, Nada y Devenir. El movimiento muestra que Ser y Nada, tomados en pureza y aislamiento, no se sostienen como verdades completas; su verdad aparece en el tránsito del Devenir.','resolver pregunta 13',['Ser','Nada','Devenir'],['questions'],['C35','H01'],true,false,'Cuestionario · cap. I · Q13'],
  ['Q14','Cuestionario','Q14 · Devenir como verdad','¿En qué sentido el «Devenir» constituye la «Verdad» del Ser y la Nada? Más aún: ¿por qué el Devenir es el «primer concepto filosófico»?','Respuesta de estudio: el Devenir contiene a la vez la unidad, la diferencia y el tránsito de Ser y Nada; por eso Croce lo presenta como el primer concepto concreto frente a las abstracciones vacías de los dos primeros momentos.','resolver pregunta 14',['devenir','verdad','concepto concreto'],['questions'],['C36','H09'],true,false,'Cuestionario · cap. I · Q14'],
  ['Q15','Cuestionario','Q15 · Intelecto y lógica dialéctica','¿Cuál es la posición del intelecto ante la lógica dialéctica de Hegel?','Respuesta de estudio: el intelecto es necesario para distinguir y fijar determinaciones, pero se vuelve abstracto cuando pretende que esas oposiciones separadas sean la verdad última; la razón no prescinde de él, sino que lo supera.','resolver pregunta 15',['intelecto','razón'],['questions'],['C30','C31'],true,false,'Cuestionario · cap. I · Q15'],
  ['Q16','Cuestionario','Q16 · Delirio báquico','Comentar la siguiente cita de Hegel: “La verdad es un delirio báquico en el cual no hay componente que no esté ebrio; y como cada momento, al separarse de los otros, en seguida se disuelve, así este delirio es, al mismo tiempo, la más simple y transparente quietud”.','Respuesta de estudio: la imagen presenta una verdad en movimiento, donde los momentos no subsisten aisladamente; la máxima movilidad no equivale a caos, pues el conjunto mantiene una unidad transparente.','resolver pregunta 16',['delirio báquico','movimiento','momento'],['questions'],['C37'],false,false,'Cuestionario · cap. I · Q16'],
  ['Q17','Cuestionario','Q17 · Principio de identidad','¿Cómo queda integrado el principio de identidad en la dialéctica hegeliana?','Respuesta de estudio: Croce sostiene que Hegel no destruye el principio de identidad, sino que intenta volverlo concreto: identidad capaz de incluir distinción y oposición sin reducirse a inmovilidad.','resolver pregunta 17',['identidad'],['questions'],['C38'],true,false,'Cuestionario · cap. I · Q17'],
  ['Q18','Cuestionario','Q18 · Nexo de contrarios','Comentar el siguiente pasaje: “La realidad es nexo de contrarios y ella no dispersa ni desintegra a causa de la oposición; antes bien, se engendra eternamente en y por la oposición […] El universal concreto, unidad en la distinción y en la oposición, es el verdadero y perfecto principio de identidad”.','Respuesta de estudio: el pasaje resume la tesis de Croce: la oposición no destruye necesariamente la unidad, sino que pertenece al modo en que la realidad se desarrolla; el universal concreto expresa esa identidad que incluye distinción y oposición.','resolver pregunta 18',['realidad','nexo','identidad','universal concreto'],['questions'],['C38','C24'],true,false,'Cuestionario · cap. I · Q18'],

  ['H01','Ser · Nada · Devenir','El comienzo de la lógica','Hegel busca un comienzo sin presupuestos ni contenido determinado.','Si el comienzo ya trajera una determinación externa, no sería comienzo puro.','situar el problema',['comienzo','inmediatez'],['hegel'],['A04'],true,false,'Hegel · Doctrina del ser · comienzo'],
  ['H02','Ser · Nada · Devenir','Ser puro','Ser puro: sin ninguna otra determinación.','Su inmediatez indeterminada no contiene diferencia interna ni externa por la cual fijarlo como algo determinado.','definir el primer momento',['Ser puro','Sein'],['hegel'],['H01'],true,false,'Hegel · p. 77'],
  ['H03','Ser · Nada · Devenir','Inmediatez','El Ser del comienzo no resulta de mediación previa dentro de la exposición.','No es “este” ser concreto; es la abstracción más inmediata e indeterminada.','precisar la pureza del comienzo',['inmediatez'],['hegel'],['H02'],false,true,'Hegel · p. 77'],
  ['H04','Ser · Nada · Devenir','Indeterminación','Sin cualidad, contenido o diferencia, el Ser puro no ofrece una determinación pensable.','La falta de contenido no es un defecto accidental: es precisamente la condición elegida para el comienzo puro.','mostrar la tensión interna',['indeterminación'],['hegel'],['H02'],true,false,'Hegel · p. 77'],
  ['H05','Ser · Nada · Devenir','Vacío intuir / pensar','El intento de intuir o pensar el Ser puro no encuentra contenido determinado.','Hegel radicaliza la abstracción hasta mostrar que esa pura inmediatez no se distingue por contenido alguno.','preparar el tránsito',['pensar','vacío'],['hegel'],['H04'],false,true,'Hegel · p. 77'],
  ['H06','Ser · Nada · Devenir','Nada pura','Nada pura: igualdad simple consigo, vacío perfecto, ausencia de determinación y contenido.','La Nada del comienzo tampoco es una nada determinada, como “la ausencia de esta cosa”, sino pura indeterminación.','definir el segundo momento',['Nada pura','Nichts'],['hegel'],['H05'],true,false,'Hegel · p. 77'],
  ['H07','Ser · Nada · Devenir','Misma indeterminación','Ser puro y Nada pura coinciden en no contener determinación.','La coincidencia no autoriza todavía a borrar la diferencia expresada por los dos términos.','explicar la unidad inmediata',['unidad','indeterminación'],['hegel'],['H02','H06'],true,false,'Hegel · pp. 77–78'],
  ['H08','Ser · Nada · Devenir','Diferencia inmediata','La proposición conserva Ser y Nada como determinaciones distintas.','Hegel advierte que decir “son lo mismo” es una expresión imperfecta si se entiende como eliminación de toda diferencia.','conservar la diferencia',['diferencia','identidad'],['hegel'],['H07'],true,false,'Hegel · pp. 77–83'],
  ['H09','Ser · Nada · Devenir','Devenir','La verdad de Ser y Nada es el movimiento en el que cada uno pasa inmediatamente al otro.','La unidad verdadera no es reposo idéntico, sino tránsito. Ese movimiento recibe el nombre de Devenir.','definir el tercer momento',['Devenir','Werden'],['hegel'],['H07','H08'],true,false,'Hegel · pp. 77–78'],
  ['H10','Ser · Nada · Devenir','Tránsito Ser → Nada','El Ser puro desaparece en la Nada porque no posee determinación que lo separe de ella.','No es una transformación temporal de una cosa llamada Ser en otra llamada Nada; es un tránsito conceptual.','explicar una dirección',['tránsito','Ser','Nada'],['hegel'],['H09'],false,false,'Hegel · pp. 77–78'],
  ['H11','Ser · Nada · Devenir','Tránsito Nada → Ser','La Nada pura pasa igualmente al Ser, pues tampoco contiene determinación que la fije como otra cosa.','Las dos direcciones pertenecen al mismo movimiento del Devenir.','explicar la otra dirección',['tránsito','Nada','Ser'],['hegel'],['H09'],false,false,'Hegel · pp. 77–78'],
  ['H12','Ser · Nada · Devenir','Nacer','Una dirección del Devenir va de Nada a Ser.','Hegel la articula como surgir o nacer: el momento en que el no-ser pasa al ser.','nombrar una dirección interna',['nacer','surgir'],['hegel'],['H11'],false,true,'Hegel · Devenir'],
  ['H13','Ser · Nada · Devenir','Perecer','La otra dirección del Devenir va de Ser a Nada.','Es el perecer: el ser no queda fijo, sino que desaparece en el no-ser.','nombrar la segunda dirección',['perecer'],['hegel'],['H10'],false,true,'Hegel · Devenir'],
  ['H14','Ser · Nada · Devenir','Unidad móvil','Nacer y perecer no son dos procesos desconectados.','Son direcciones inseparables del mismo Devenir, cada una implicando el tránsito entre Ser y Nada.','integrar las direcciones',['unidad','movimiento'],['hegel'],['H12','H13'],true,false,'Hegel · Devenir'],
  ['H15','Ser · Nada · Devenir','No confundir con seres determinados','“Ser y Nada” no significa que una casa existente y una inexistente sean indiferentes.','Ese ejemplo introduce contenido determinado, justo lo que el comienzo de la lógica había abstraído.','evitar una objeción falsa',['ser determinado','abstracción'],['hegel'],['H07'],true,false,'Hegel · pp. 79–82'],
  ['H16','Ser · Nada · Devenir','Cien táleros','Hegel discute el ejemplo kantiano de cien táleros posibles y reales.','Lo usa para distinguir la abstracción Ser/Nada de una existencia determinada inserta en relaciones concretas.','mostrar el papel del contenido',['Kant','existencia'],['hegel'],['H15'],false,true,'Hegel · pp. 80–83'],
  ['H17','Ser · Nada · Devenir','Existencia determinada','Cuando aparece contenido, ya no estamos ante Ser puro y Nada pura.','La diferencia real entre algo y otro pertenece a la esfera de la existencia determinada, no al comienzo abstracto.','marcar la frontera conceptual',['Dasein','determinación'],['hegel'],['H15'],true,false,'Hegel · pp. 81–82'],
  ['H18','Ser · Nada · Devenir','Expresión imperfecta','“Ser y Nada son lo mismo” puede inducir a error si sólo se oye la identidad.','La propia proposición nombra dos determinaciones y, por tanto, también expresa diferencia.','controlar la fórmula',['identidad','diferencia'],['hegel'],['H08'],true,false,'Hegel · p. 83'],
  ['H19','Ser · Nada · Devenir','No borrar los momentos','La unidad no exige abstraerse otra vez de Ser y Nada.','Si sólo quedara “la unidad”, perderíamos aquello cuya relación produce el Devenir.','evitar unidad vacía',['unidad concreta'],['hegel'],['H18'],true,false,'Hegel · p. 83'],
  ['H20','Ser · Nada · Devenir','Resultado del Devenir','El Devenir no permanece como alternancia indefinida.','Su movimiento se estabiliza en una determinación: el umbral hacia el ser determinado o Dasein.','mostrar la salida',['resultado','Dasein'],['hegel'],['H14','H19'],true,false,'Hegel · transición al Dasein'],
  ['H21','Ser · Nada · Devenir','Croce verifica a Hegel','Croce usa la primera tríada para mostrar su tesis sobre los contrarios.','El texto de Hegel permite controlar dónde la interpretación de Croce sigue el movimiento primario y dónde añade su propia lectura.','cruzar fuente e interpretación',['Croce','Hegel'],['hegel','dialectic'],['C35','H09'],true,false,'Cruce de fuentes'],
  ['H22','Ser · Nada · Devenir','No tesis-antítesis-síntesis mecánica','El texto primario no necesita una plantilla externa para moverse.','La secuencia debe reconstruirse desde la indeterminación de Ser y Nada y su tránsito, no imponiendo etiquetas escolares.','proteger la lectura',['método','tríada'],['hegel'],['H09','C34'],true,false,'Control de lectura'],
  ['H23','Ser · Nada · Devenir','Pregunta de control','¿Por qué Ser puro no puede quedarse quieto como Ser?','Porque, en su pura indeterminación, no contiene una diferencia que lo mantenga separado de la Nada pura.','probar comprensión',['pregunta'],['hegel'],['H04','H07'],false,true,'Control de lectura'],
  ['H24','Ser · Nada · Devenir','Pregunta de control final','¿Por qué el Devenir es más concreto que Ser y Nada?','Porque contiene la unidad, la diferencia y el tránsito de ambos momentos en lugar de aislar una abstracción vacía.','probar comprensión',['pregunta','devenir'],['hegel'],['H09','H14','C36'],true,true,'Control de lectura'],

  ['L01','Clase · 14 oct','El cuestionario como hilo conductor','El profesor usa el cuestionario para fijar las ideas principales de Croce y preparar la entrada a Hegel.','La sesión no trata el cuestionario como una lista de respuestas aisladas, sino como estructura de lectura para reconstruir método, oposición y comienzo de la lógica.','ubicar la función pedagógica de la tarea',['cuestionario','lectura guiada'],['class14','questions','orientation'],['A03'],true,false,'Clase · 14 oct · apertura'],
  ['L02','Clase · 14 oct','Examen anunciado','El profesor anuncia un examen aproximadamente dentro de quince días, sin fijar en la grabación una fecha exacta.','La información se registra como horizonte de evaluación, no como fecha cerrada.','registrar continuidad del curso',['examen','evaluación'],['class14','orientation'],['L01'],false,true,'Clase · 14 oct · aviso'],
  ['L03','Clase · 14 oct','Q1 · totalidad y método','El objeto de estudio filosófico se presenta como la totalidad; por eso su método no puede tomarse prestado de una ciencia particular.','La explicación oral radicaliza Q1: un método adecuado a un sector de la realidad no basta para una disciplina que pretende pensar la totalidad.','afinar la respuesta a Q1',['totalidad','método filosófico'],['class14','croce','questions'],['Q01','C01','C02'],true,false,'Clase · 14 oct · Q1'],
  ['L04','Clase · 14 oct','Descartes · modelo matemático','El método cartesiano aparece como ejemplo histórico de una filosofía fuertemente inspirada por el modelo matemático.','La clase usa a Descartes para mostrar por qué Croce exige distinguir un método filosófico propio de la mera adopción de un método científico particular.','dar contraste histórico',['Descartes','método matemático'],['class14'],['L03'],false,true,'Clase · 14 oct · ejemplo'],
  ['L05','Clase · 14 oct','Spinoza · orden geométrico','La Ética de Spinoza aparece como segundo ejemplo de una filosofía construida según un orden geométrico.','El ejemplo sirve para continuar el contraste entre método filosófico y modelos tomados de matemáticas.','dar contraste histórico',['Spinoza','orden geométrico'],['class14'],['L03'],false,true,'Clase · 14 oct · ejemplo'],
  ['L06','Clase · 14 oct','Vico · historicidad del método','Vico aparece como ejemplo de resistencia a aplicar sin más el modelo matemático al conocimiento histórico.','La clase lo usa para mostrar que el objeto estudiado condiciona el método y que la historia exige categorías que no se agotan en el cálculo matemático.','abrir la pluralidad metodológica',['Vico','historia','método'],['class14'],['L03'],false,true,'Clase · 14 oct · ejemplo'],
  ['L07','Clase · 14 oct','Q2 · lógico como conceptual','La clase conserva los tres caracteres de Croce, pero explica “lógico” pedagógicamente como trabajo conceptual y definición de conceptos.','No se sustituye el término textual “lógico”: se registra la glosa oral “conceptual” como explicación del profesor.','afinar la primera característica',['lógico','conceptual'],['class14','croce','questions'],['Q02','C06'],true,false,'Clase · 14 oct · Q2'],
  ['L08','Clase · 14 oct','Q2 · universal como totalidad','La universalidad se explica desde el objeto filosófico: pensar la totalidad y no sólo una región particular.','La clase conecta universalidad y totalidad para preparar la noción de universal concreto.','afinar la segunda característica',['universal','totalidad'],['class14','croce'],['L07','C07'],true,false,'Clase · 14 oct · Q2'],
  ['L09','Clase · 14 oct','Q2 · concreto y oposiciones','Lo concreto se explica ontológicamente como la totalidad real articulada por una multiplicidad de diferencias y oposiciones.','La clase rechaza entender “concreto” como simple dato sensible: es totalidad internamente diferenciada.','afinar la tercera característica',['concreto','oposición','totalidad'],['class14','croce','dialectic'],['L08','C08','C25'],true,false,'Clase · 14 oct · Q2'],
  ['L10','Clase · 14 oct','Lógica formal / lógica dialéctica','La dificultad de Hegel se relaciona con el paso desde determinaciones fijas de la lógica formal hacia una lógica dialéctica.','El profesor usa una analogía con lógicas contemporáneas capaces de tratar contradicciones; se conserva como comparación pedagógica y no como clasificación histórica literal.','marcar el cambio de lógica',['lógica formal','lógica dialéctica'],['class14','dialectic'],['L09','C30','C31'],true,false,'Clase · 14 oct · explicación'],
  ['L11','Clase · 14 oct','Q3 · unidad de los contrarios','La clase concentra el problema central de Hegel en la posibilidad de pensar la unidad de los contrarios.','La formulación oral hace explícita la tarea: mantener oposición real sin perder la unidad que permite pensar la totalidad.','afinar Q3',['unidad','contrarios'],['class14','questions','opposites'],['Q03','C09','C15'],true,false,'Clase · 14 oct · Q3'],
  ['L12','Clase · 14 oct','Q4 · distinto no es contrario','El profesor recuerda la lógica de oposición aristotélica para mostrar que diferencia y contrariedad no son equivalentes.','La clase usa el cuadrado de oposición como apoyo pedagógico: dos términos pueden ser distintos sin excluirse como contrarios.','afinar Q4',['distinción','contrariedad','Aristóteles'],['class14','questions','opposites'],['Q04','C12'],true,false,'Clase · 14 oct · Q4'],
  ['L13','Clase · 14 oct','Q5 · monismo y diferencia de grado','El monismo se explica como primacía de la unidad: las oposiciones quedan reducidas o reinterpretadas dentro de una sola realidad.','El profesor usa la idea de diferencias de grado y a Spinoza como ejemplo pedagógico; la definición doctrinal principal sigue siendo la de Croce.','afinar Q5',['monismo','unidad','grado'],['class14','questions','opposites'],['Q05','C16','C19'],true,false,'Clase · 14 oct · Q5'],
  ['L14','Clase · 14 oct','Q6 · dualismo y oposición real','El dualismo se explica como afirmación de que la oposición es real y no una simple diferencia de grado.','El maniqueísmo funciona como ejemplo pedagógico de dos polos realmente enfrentados.','afinar Q6',['dualismo','oposición','maniqueísmo'],['class14','questions','opposites'],['Q06','C20','C21'],true,false,'Clase · 14 oct · Q6'],
  ['L15','Clase · 14 oct','Q7–Q8 · oscilación de extremos','La historia de la filosofía se presenta como alternancia entre soluciones que privilegian unidad y soluciones que privilegian oposición.','La función del recorrido no es memorizar una lista de autores, sino reconocer que ambos extremos reaparecen porque ninguno resuelve por sí solo la relación unidad/oposición.','integrar Q7 y Q8',['monismo','dualismo','historia'],['class14','questions','opposites'],['Q07','Q08','C22'],true,false,'Clase · 14 oct · Q7–Q8'],
  ['L16','Clase · 14 oct','Intelecto y razón','El entendimiento o intelecto fija determinaciones; la razón piensa los momentos opuestos en su unidad.','La clase vincula el entendimiento con identidad, no contradicción y tercero excluido, y reserva a la razón la tarea de reconstruir mediación y totalidad.','precisar la arquitectura cognitiva',['intelecto','razón','mediación'],['class14','dialectic'],['C30','C31','Q12','Q15'],true,false,'Clase · 14 oct · Q12/Q15'],
  ['L17','Clase · 14 oct','Aplicación · desarrollo / subdesarrollo','La clase usa desarrollo y subdesarrollo como ejemplo de términos que no deben pensarse como condiciones históricas completamente independientes.','La función filosófica del ejemplo es mostrar una relación interna entre opuestos; las afirmaciones geopolíticas concretas no se incorporan como hechos verificados.','aplicar unidad relacional',['desarrollo','subdesarrollo','relación'],['class14','dialectic'],['L11','L16'],false,false,'Clase · 14 oct · aplicación'],
  ['L18','Clase · 14 oct','Aplicación · burguesía / proletariado','Marx aparece como ejemplo de una herencia dialéctica aplicada a relaciones sociales de producción.','La clase usa burguesía/proletariado para mostrar cómo términos opuestos se constituyen dentro de una relación y cómo el conflicto puede abrir una transformación ulterior.','mostrar una recepción dialéctica',['Marx','burguesía','proletariado'],['class14','dialectic'],['L17'],false,false,'Clase · 14 oct · aplicación'],
  ['L19','Clase · 14 oct','Q13 · comienzo de la ciencia','La sesión entra directamente a la Ciencia de la Lógica y plantea la cuestión de cómo debe comenzar la ciencia.','El comienzo exige la determinación más inmediata y vacía posible: Ser puro.','abrir el texto primario',['comienzo','ciencia','Ser puro'],['class14','hegel','questions'],['Q13','H01','H02'],true,false,'Clase · 14 oct · Q13'],
  ['L20','Clase · 14 oct','Ser puro · indeterminación','El Ser puro se explica como absoluta indeterminación: todavía no es un ente concreto ni una suma de propiedades.','La clase contrasta esta posición con la tradición eleática de identidad rígida para mostrar el paso que Hegel quiere realizar.','precisar Ser puro',['Ser puro','indeterminación','identidad'],['class14','hegel'],['L19','H02','H04'],true,false,'Clase · 14 oct · Hegel'],
  ['L21','Clase · 14 oct','Verdad como movimiento','La verdad no consiste en aislar Ser y Nada, sino en el movimiento por el cual cada uno pasa a su opuesto.','La clase formula el centro de la secuencia como negación recíproca y tránsito; el resultado es Devenir.','formular el núcleo del devenir',['verdad','movimiento','negación'],['class14','hegel','dialectic'],['L20','H07','H08','H09'],true,false,'Clase · 14 oct · Q13/Q14'],
  ['L22','Clase · 14 oct','Q14 · primer concepto concreto','El Devenir es el primer concepto concreto porque contiene Ser y Nada como momentos distintos de una unidad móvil.','Ser y Nada aislados permanecen abstractos; Devenir incluye relación, diferencia y movimiento.','afinar Q14',['Devenir','concepto concreto'],['class14','hegel','questions'],['Q14','L21','H09','C36'],true,false,'Clase · 14 oct · Q14'],
  ['L23','Clase · 14 oct','Dasein · determinación es negación','La clase anticipa el ser determinado: ser algo implica no ser aquello que queda fuera de su determinación.','“Determinado” no significa causalmente determinado por otro; significa poseer cualidad y diferencia. La fórmula “toda determinación es negación” prepara algo/otro y el desarrollo categorial.','abrir el paso a Dasein',['Dasein','determinación','negación'],['class14','hegel'],['H17','H20','L22'],true,false,'Clase · 14 oct · continuidad'],
  ['L24','Clase · 14 oct','Q16–Q18 · identidad sin borrosidad','El delirio báquico no significa que todas las diferencias se vuelvan borrosas: cada momento conserva determinación, pero su verdad está en el todo.','La clase concluye que el principio de identidad se conserva de forma concreta: Ser es Ser y Nada es Nada como momentos, sin convertirlos en verdades aisladas.','cerrar identidad y oposición',['delirio báquico','identidad','momento'],['class14','questions','dialectic'],['Q16','Q17','Q18','C37','C38','H18'],true,false,'Clase · 14 oct · Q16–Q18'],
  ['L25','Clase · 14 oct','Continuidad · material para dos sesiones','La apertura de la clase indica que el material y el cuestionario seguirán funcionando como hilo conductor durante las sesiones inmediatas.','La indicación permite cerrar la tarea del 7 de octubre como trabajada hoy y, al mismo tiempo, registrar que el bloque Croce/Hegel no termina con esta sesión.','registrar continuidad sin inventar entrega',['continuidad','cuestionario','sesiones'],['class14','orientation','questions'],['L01','L24'],true,false,'Clase · 14 oct · continuidad'],
  ['L26','Clase · 14 oct','Capítulo II · referencia probable','La grabación degradada parece mencionar los capítulos primero y segundo de Croce al describir el material que se trabajará.','Como el ASR no permite recuperar una orden literal inequívoca, el capítulo II se registra como continuidad probable, no como fecha de entrega confirmada.','preservar la incertidumbre documental',['Croce','capítulo II','incertidumbre'],['class14','croce'],['L25'],false,true,'Clase · 14 oct · continuidad probable'],
  ['L27','Clase · 14 oct','Cuestionario II · 17 preguntas','El cuestionario adjunto contiene una segunda sección titulada “Aclaraciones Concernientes a la Historia de la Dialéctica” con 17 preguntas.','La existencia documental de esa segunda sección refuerza la continuidad de estudio, pero no demuestra por sí sola una entrega para una fecha concreta.','distinguir material disponible de obligación confirmada',['cuestionario','capítulo II','17 preguntas'],['class14','questions'],['L26','A03'],true,false,'Cuestionario adjunto · cap. II'],
  ['L28','Clase · 14 oct','Sin nueva entrega cerrada','No se recupera una fecha de entrega ni una instrucción inequívoca de entregar el capítulo II en la siguiente sesión.','La próxima sesión programada puede usarse como horizonte de preparación, pero no debe convertirse en fecha de entrega sin confirmación del profesor.','cerrar la revisión de tarea con cautela',['tarea','fecha','fuente'],['class14','orientation'],['L25','L26','L27','L02'],true,false,'Clase · 14 oct · control documental'],

  ['D01','Henrich · contexto','Henrich · propósito','Henrich advierte que comprender a Hegel exige reconstruir argumentos, no sustituir la lectura por un comentario.','El libro busca perspectivas para entender la obra como un todo y resolver problemas de interpretación.','situar el texto de consulta',['Henrich','interpretación'],['henrich'],['A05'],true,false,'Henrich · Prefacio · p. 9'],
  ['D02','Henrich · contexto','Hegel y Hölderlin','Primer bloque del índice.','Ruta contextual hacia los impulsos de unificación, libertad y oposición que preceden al sistema maduro.','mapear el índice',['Hölderlin'],['henrich'],['D01'],false,false,'Henrich · índice · p. 291'],
  ['D03','Henrich · contexto','Presupuestos históricos del sistema','Segundo bloque del índice.','Invita a leer el sistema no como aparición aislada, sino desde condiciones históricas e intelectuales de formación.','mapear el índice',['historia','sistema'],['henrich'],['D01'],false,false,'Henrich · índice · p. 291'],
  ['D04','Henrich · contexto','Comienzo y método de la lógica','Tercer bloque del índice: especialmente pertinente para la tarea de hoy.','Es la ruta de profundización natural para entender por qué la lógica comienza como comienza y qué significa su método.','señalar prioridad',['comienzo','método'],['henrich','hegel'],['D01','H01'],true,false,'Henrich · índice · p. 291'],
  ['D05','Henrich · contexto','Lógica hegeliana de la reflexión','Cuarto bloque del índice.','Sitúa un problema posterior al comienzo: reflexión, negación y estructura de la lógica de la esencia.','mapear continuidad',['reflexión','esencia'],['henrich'],['D04'],false,false,'Henrich · índice · p. 291'],
  ['D06','Henrich · contexto','Teoría de la contingencia','Quinto bloque del índice.','Muestra que Henrich no reduce a Hegel a una fórmula de dialéctica: examina problemas sistemáticos específicos.','mapear amplitud',['contingencia'],['henrich'],['D01'],false,true,'Henrich · índice · p. 291'],
  ['D07','Henrich · contexto','Marx como discípulo de Hegel','Sexto bloque del índice.','Abre una línea de recepción que conecta el sistema hegeliano con su transformación crítica posterior.','mapear recepción',['Marx','recepción'],['henrich'],['D01'],false,true,'Henrich · índice · p. 291'],
  ['D08','Henrich · contexto','Condiciones de formación de la dialéctica','Séptimo bloque del índice.','Es la otra ruta directamente vinculada con la tarea: pregunta cómo llegó a formarse la estructura dialéctica.','señalar prioridad',['dialéctica','formación'],['henrich','dialectic'],['D01','C24'],true,false,'Henrich · índice · p. 291'],
  ['D09','Henrich · contexto','Forma lógica y totalidad real','Octavo bloque del índice.','Permite anticipar la pregunta por la relación entre estructura lógica y pretensión de totalidad.','mapear cierre',['forma lógica','totalidad'],['henrich'],['D01'],true,false,'Henrich · índice · p. 291'],
  ['D10','Henrich · contexto','Cómo usar Henrich hoy','No hace falta leer las 293 páginas para cumplir la consigna mínima.','Hoy basta ubicar el índice y usar “Comienzo y método de la lógica” y “Condiciones de formación de la dialéctica” como coordenadas para futuras dudas.','convertir consulta en estrategia',['estrategia','índice'],['henrich','orientation'],['D02','D03','D04','D05','D06','D07','D08','D09'],true,false,'Henrich · consulta general'],
  ...hegelLogicAssignedReading,
]

// Cada bloque dispone del alto de todas sus filas: no vuelve a utilizar
// offsets de fase fijos que enciman nodos cuando crece el contenido.
const columnsForPhase = (phase) => ['Cuestionario','Ser · Nada · Devenir','Clase · 14 oct'].includes(phase) ? 6 : 5
const rowPitch = 500
const phaseStart = new Map()
let nextStart = 0
hegelCrocePhases.forEach((phase) => {
  phaseStart.set(phase,nextStart)
  const count = raw.filter((item) => item[1] === phase).length
  nextStart += Math.max(1,Math.ceil(count / columnsForPhase(phase))) * rowPitch + 240
})

const routeSet = (branches) => Array.from(new Set(branches))

const sourceModeForPhase = (phase) => {
  if (phase === 'Lectura · 77–98') return 'HEGEL · TEXTO PRIMARIO · PARÁFRASIS COTEJADA'
  if (phase === 'Apoyo docente · Hegel') return 'PRESENTACIONES DOCENTES · EXPLICACIÓN DIFERENCIADA'
  if (phase === 'Cuestionario') return 'PREGUNTA LITERAL COMPLETA'
  if (phase === 'Ser · Nada · Devenir') return 'FUENTE PRIMARIA · RECONSTRUCCIÓN FIEL'
  if (phase === 'Henrich · contexto') return 'ÍNDICE / PREFACIO · ORIENTACIÓN'
  if (phase === 'Clase · 14 oct') return 'CLASE · 14 OCT · EXPLICACIÓN DEL PROFESOR'
  if (phase === 'Consigna') return 'CONSIGNA VERIFICADA · ORGANIZACIÓN'
  return 'CROCE · RECONSTRUCCIÓN FIEL'
}

export const hegelCroceNodes = raw.map((item) => {
  const [id,phase,title,excerpt,explanation,role,concepts,branch,dependsOn,critical,micro,page] = item
  const siblings = raw.filter((candidate) => candidate[1] === phase)
  const local = siblings.findIndex((candidate) => candidate[0] === id)
  const columns = columnsForPhase(phase)
  const x = (local % columns) * 400
  const y = (phaseStart.get(phase) ?? 0) + Math.floor(local / columns) * rowPitch

  return {
    id,
    type: critical ? 'core' : 'text',
    position:{x,y},
    data:{
      code:id,
      phase,
      title,
      excerpt,
      explanation,
      role,
      concepts,
      authors: phase.startsWith('Henrich') ? ['Dieter Henrich'] : ['Ser · Nada · Devenir','Lectura · 77–98'].includes(phase) ? ['G. W. F. Hegel'] : phase === 'Apoyo docente · Hegel' ? ['José Alejandro Fuerte · presentaciones'] : phase === 'Clase · 14 oct' ? ['José Alejandro Fuerte · clase'] : phase === 'Consigna' ? [] : ['Benedetto Croce'],
      branch:routeSet(['all',...branch]),
      dependsOn,
      produces:[],
      critical,
      micro,
      page,
      sourceShort: phase === 'Lectura · 77–98' ? 'Hegel · Mondolfo' : phase === 'Apoyo docente · Hegel' ? 'Profesor · diapositivas' : phase === 'Ser · Nada · Devenir' ? 'Hegel' : phase.startsWith('Henrich') ? 'Henrich' : phase === 'Clase · 14 oct' ? 'Clase 14 oct' : phase === 'Consigna' ? 'Tarea' : phase === 'Cuestionario' ? 'Cuestionario' : 'Croce',
      sourceMode: sourceModeForPhase(phase),
      question: critical
        ? '¿Puede explicar este nodo sin repetir sólo su definición?'
        : '¿Qué papel cumple este detalle en el movimiento general?',
      diagram: concepts.slice(0,4),
      teacherSlide:hegelTeacherSlideById.get(id) || null,
    },
  }
})

const nodeMap = new Map(hegelCroceNodes.map((node)=>[node.id,node]))

hegelCroceNodes.forEach((node)=>{
  node.data.dependsOn.forEach((sourceId)=>{
    const source=nodeMap.get(sourceId)
    if(source && !source.data.produces.includes(node.id)) source.data.produces.push(node.id)
  })
})

function buildNodeSchema(node) {
  if (node.data.teacherSlide) return buildHegelTeacherSchema(node.data.teacherSlide)

  const dependencies = node.data.dependsOn
    .map((id) => nodeMap.get(id))
    .filter(Boolean)
    .slice(0, 2)

  const consequences = node.data.produces
    .map((id) => nodeMap.get(id))
    .filter(Boolean)
    .slice(0, 2)

  const schemaNodes = [
    ...dependencies.map((item) => ({
      id:`dep-${item.id}`,
      label:item.data.title,
      caption:`${item.data.code} · antecedente`,
      shape:'roundedRect',
      wrapAt:24,
      captionWrapAt:26,
      shapeRole:'term',
    })),
    {
      id:'focus',
      label:node.data.title,
      caption:`${node.data.code} · ${node.data.phase}`,
      shapeRole:node.data.critical ? 'mediation' : 'concept',
      shape:'roundedRect',
      wrapAt:24,
      captionWrapAt:28,
      emphasis:true,
      tone:'accent',
    },
    ...consequences.map((item) => ({
      id:`next-${item.id}`,
      label:item.data.title,
      caption:`${item.data.code} · continuidad`,
      shape:'roundedRect',
      wrapAt:24,
      captionWrapAt:26,
      shapeRole:'result',
    })),
  ]

  const schemaEdges = [
    ...dependencies.map((item) => ({
      from:`dep-${item.id}`,
      to:'focus',
      label:'precede',
      relationKind:'derives',
    })),
    ...consequences.map((item) => ({
      from:'focus',
      to:`next-${item.id}`,
      label:'continúa',
      relationKind:'derives',
    })),
  ]

  if (!schemaEdges.length && node.data.concepts.length) {
    node.data.concepts.slice(0, 3).forEach((concept, index) => {
      const id=`concept-${index}`
      schemaNodes.push({
        id,
        label:concept,
        caption:'concepto trabajado en el nodo',
        shape:'roundedRect',
        wrapAt:24,
        captionWrapAt:28,
        shapeRole:'term',
      })
      schemaEdges.push({
        from:'focus',
        to:id,
        label:'articula',
        relationKind:'secondary',
      })
    })
  }

  return {
    // Sólo los esquemas del folio: niveles legibles que crecen hacia abajo.
    // El mapa React Flow, sus nodos y la guía no se modifican.
    layout:'hierarchy',
    rootId:dependencies[0] ? `dep-${dependencies[0].id}` : 'focus',
    hierarchyXGap:94,
    hierarchyYGap:170,
    minHeight:dependencies.length && (consequences.length || node.data.concepts.length) ? 810 : 640,
    fitPadding:56,
    readingLayout:'vertical-folio',
    ariaLabel:`Esquema documental del nodo ${node.data.code}: ${node.data.title}`,
    nodes:schemaNodes,
    edges:schemaEdges,
    animation:{mode:'sequence',nodeDuration:.28,edgeDuration:.32},
  }
}

hegelCroceNodes.forEach((node) => {
  node.data.schema = buildNodeSchema(node)
})

export const hegelCroceEdges = hegelCroceNodes.flatMap((node)=>
  node.data.dependsOn.filter((id)=>nodeMap.has(id)).map((sourceId,index)=>({
    id:`${sourceId}-${node.id}-${index}`,
    source:sourceId,
    target:node.id,
    relation:node.data.critical ? 'critical' : 'development',
  }))
)

export const hegelCroceCrossRelations = [
  ['R01','C08','C25','Universal concreto','El tercer carácter del concepto reaparece como solución al problema de la oposición.','foundation'],
  ['R02','C12','C38','Distinción → identidad concreta','La identidad adecuada debe poder contener diferencia sin convertirla en separación absoluta.','foundation'],
  ['R03','C19','C24','Límite del monismo → síntesis','La unidad abstracta del monismo prepara la exigencia de una unidad que contenga oposición.','development'],
  ['R04','C21','C24','Límite del dualismo → síntesis','La oposición sin unidad exige una mediación que preserve ambos términos.','development'],
  ['R05','C28','H18','Aufhebung → unidad y diferencia','La superación no borra los momentos; la propia fórmula Ser/Nada exige conservar identidad y diferencia.','manifestation'],
  ['R06','C35','H02','Croce → Ser puro','La primera tríada interpretada por Croce se verifica en el comienzo del texto primario.','history'],
  ['R07','C35','H06','Croce → Nada pura','La Nada pura muestra por qué los términos de la tríada no son cosas determinadas.','history'],
  ['R08','C36','H09','Croce → Devenir','La tesis del “primer concepto concreto” se conecta con el tránsito hegeliano de Ser y Nada.','manifestation'],
  ['R09','Q13','H09','Pregunta 13 → texto primario','La respuesta del cuestionario debe apoyarse en la secuencia Ser/Nada/Devenir, no sólo en Croce.','foundation'],
  ['R10','Q14','H14','Pregunta 14 → unidad móvil','La verdad de Ser y Nada se vuelve inteligible al reconstruir las dos direcciones del Devenir.','foundation'],
  ['R11','Q17','C38','Pregunta 17 → identidad','Croce interpreta la dialéctica como fortalecimiento del principio de identidad concreta.','foundation'],
  ['R12','D04','H01','Henrich → comienzo','El índice de Henrich señala un estudio dedicado específicamente al comienzo y método de la lógica.','history'],
  ['R13','D08','C24','Henrich → formación de la dialéctica','La consulta bibliográfica abre una ruta para investigar la génesis del problema dialéctico.','history'],
  ['R14','A03','Q01','Consigna → cuestionario','El cuestionario transforma el capítulo de Croce en 18 controles de comprensión.','development'],
  ['R15','A04','H02','Consigna → Hegel','La lectura primaria asignada empieza por Ser puro.','development'],
  ['R16','A05','D10','Consigna → Henrich','La revisión mínima pedida consiste en ubicarse en el índice y reconocer rutas útiles.','development'],
  ['R17','L03','C01','Clase → método filosófico','La explicación de clase precisa que la totalidad del objeto exige un método filosófico propio.','manifestation'],
  ['R18','L07','C06','Clase → lógico / conceptual','La clase glosa “lógico” como trabajo conceptual sin sustituir el término de Croce.','manifestation'],
  ['R19','L09','C25','Clase → universal concreto','La totalidad con diferencias y oposiciones internas converge con el universal concreto de Croce.','manifestation'],
  ['R20','L13','C16','Clase → monismo','La explicación oral de unidad y diferencia de grado funciona como apoyo pedagógico de la salida monista.','manifestation'],
  ['R21','L14','C20','Clase → dualismo','La oposición real explicada en clase refuerza la estructura de la salida dualista.','manifestation'],
  ['R22','L16','C31','Clase → razón','La razón es presentada como capacidad de pensar los opuestos en su unidad.','manifestation'],
  ['R23','L19','H01','Clase → comienzo de la lógica','La sesión transforma el dossier de estudio en contenido efectivamente trabajado en clase.','history'],
  ['R24','L20','H02','Clase → Ser puro','La indeterminación del Ser puro es retomada directamente por el profesor.','manifestation'],
  ['R25','L21','H09','Clase → Devenir','La verdad como movimiento se ancla en el tránsito hegeliano de Ser y Nada.','manifestation'],
  ['R26','L23','H17','Clase → Dasein','La sesión adelanta ser determinado, cualidad y negación.','development'],
  ['R27','L24','C38','Clase → identidad concreta','La explicación del delirio báquico culmina en una identidad que conserva diferencia.','manifestation'],
  ['R28','L24','H18','Clase → no borrar los momentos','La clase insiste en que unidad no significa borrosidad ni desaparición de la identidad de los momentos.','foundation'],
  ['R29','L25','A03','Continuidad → cuestionario','La clase confirma que el cuestionario seguirá organizando las sesiones inmediatas.','development'],
  ['R30','L26','L27','Capítulo II → cuestionario II','La referencia oral probable al capítulo II encuentra apoyo documental en la segunda sección del cuestionario, sin convertirla en una entrega fechada.','history'],
  ['R31','L28','L02','Tarea / examen → fechas no confirmadas','Tanto la continuidad de lectura como el examen quedan registrados sin fabricar una fecha exacta ausente de la grabación.','foundation'],
  ['R32','H02','P01','Ser puro → nueva lectura','La lectura de la página 77 amplía un nodo del núcleo de estudio ya existente; no lo reemplaza.','foundation'],
  ['R33','H09','P03','Devenir → pasaje comprobado','La mediación de ser y nada se verifica ahora con localizador p. 77–78.','foundation'],
  ['R34','P07','P08','Kant / Hegel · ontología','La objeción de los táleros debe leerse antes de la respuesta hegeliana sobre finito y absoluto.','opposition'],
  ['R35','P12','P13','Jacobi / Hegel · comienzo','La dificultad del surgimiento de lo determinado abre la respuesta sobre el tránsito inmanente.','opposition'],
  ['R36','P16','P17','Dialéctica → direcciones','El movimiento inmanente se articula como nacer y perecer, sin congelar ser ni nada.','development'],
  ['R37','P18','P19','Devenir → Dasein','La eliminación del devenir produce el umbral del ser determinado sin convertir la página 99 en lectura asignada.','development'],
  ['R38','P20','C28','Aufheben · texto e interpretación','La exposición primaria de la doble operación permite cotejar la interpretación de Croce.','history'],
  ['R39','M05','P03','Presentación ↔ original','Las diapositivas proporcionan una síntesis docente; las páginas del libro sostienen la lectura primaria.','foundation'],
  // Lectura íntegra de las nueve diapositivas del profesor; relación docente ≠ cita de Hegel.
  ['R40','M04','E01','Marco de la lógica','La contextualización sobre Kant, Aristóteles y Spinoza prepara la introducción docente a la lógica, no suplanta su deducción textual.','history'],
  ['R41','E01','E02','De filosofía primera al comienzo','La pregunta por el método especulativo se concreta en el problema categorial de ser puro, nada pura y devenir.','development'],
  ['R42','E02','P03','Diapositiva / texto primario','La unidad móvil de ser y nada se contrasta con la sección C del comienzo de la obra.','foundation'],
  ['R43','E03','P06','Nota 1 / representación','La crítica a representar el ser puro como un algo se corresponde con el rechazo de aplicar la abstracción a entes concretos.','foundation'],
  ['R44','E03','E04','Nota 1 → determinaciones','La prohibición de representar lo puro como un algo exige distinguir ser y nada puros de sus determinaciones.','development'],
  ['R45','E04','P04','Nada pura y nada de un algo','La diapositiva distingue la nada pura de la negación de un contenido, como establece la Nota 1 de Hegel.','foundation'],
  ['R46','E04','P19','Lo determinado como resultado','El ser determinado pertenece a una esfera posterior al devenir; no se confunde con el comienzo.','development'],
  ['R47','E05','P07','Kant y los cien táleros','La primera diapositiva del argumento reconstruye la objeción kantiana que Hegel discute en la Nota 1.','history'],
  ['R48','E05','E06','Kant → objeción de Hegel','La diferencia entre posibilidad y realidad del ente finito plantea el alcance de las categorías respecto del absoluto.','opposition'],
  ['R49','E06','P08','Finito y absoluto','La presentación interpreta el argumento de Hegel; el texto distingue la separación propia de lo finito y la definición del absoluto.','foundation'],
  ['R50','E06','E07','Contenido especulativo → forma del juicio','La inseparabilidad de concepto y ser conduce a la pregunta por una forma de expresión capaz de pensar unidad y diferencia.','development'],
  ['R51','E07','P09','Nota 2 / proposición especulativa','La insuficiencia del juicio ordinario se comprueba frente al movimiento especulativo de ser y nada.','foundation'],
  ['R52','E07','E09','Unidad de opuestos / dialéctica','La proposición especulativa introduce la tensión de inseparabilidad y diferencia que la Nota 4 atribuye al movimiento inmanente.','development'],
  ['R53','E08','P12','Jacobi y abstracciones aisladas','La pregunta por la multiplicidad desde espacio, tiempo y yo puros se localiza en la polémica con Jacobi.','history'],
  ['R54','E08','P19','Devenir y ser determinado','La interpretación docente conecta la crítica de las abstracciones aisladas con el resultado posterior del devenir.','development'],
  ['R55','E08','E09','Nota 3 → Nota 4','El problema de pasar de lo puro a lo determinado encuentra respuesta en el tránsito inmanente y en la superación.','development'],
  ['R56','E09','P20','Aufheben y conservación','La presentación reúne la dialéctica del comienzo con la eliminación-conservación de los momentos al final de las páginas asignadas.','foundation'],
]

export const hegelCroceConceptualEdges = hegelCroceCrossRelations.map(([id,source,target,title,synthesis,type])=>({
  id:`conceptual-${id}`,source,target,label:id,layer:'conceptual',relationSheetId:id,conceptualType:type,title,synthesis,
}))

export const hegelCroceCrossRelationById = (id) => {
  const row=hegelCroceCrossRelations.find((item)=>item[0]===id)
  if(!row) return null
  const [rid,source,target,title,synthesis,type]=row
  return {id:rid,source,target,title,synthesis,type}
}

export const hegelCroceNodeById = (id)=>nodeMap.get(id)||null

const guidedIds = hegelCroceNodes.map((node) => node.id)

export const hegelCroceGuidedRoute = guidedIds.map((id,index)=>{
  const node=nodeMap.get(id)
  return {
    id,
    phase:node?.data.phase || '',
    why:node?.data.role || '',
    nextQuestion:node?.data.question || '',
    order:index+1,
  }
})

export const hegelCroceSource = {
  title:'Hegel · Croce · dialéctica, Ser, Nada y Devenir',
  assignedDate:'7 oct 2026',
  dueDate:'14 oct 2026',
  boundary:'El sistema parte de los materiales adjuntos y la consigna del profesor. Croce se usa como interpretación del capítulo I; Hegel como fuente primaria para Ser/Nada/Devenir; Henrich como consulta general e índice. La clase del 14 de octubre se incorpora como una capa separada de explicación oral: sus ejemplos no se convierten en doctrina textual ni en hechos externos verificados. La continuidad hacia el capítulo II se marca como probable y sin fecha de entrega confirmada. Además, una nueva consigna aportada el 18 de octubre (sin fecha de correo visible) pide leer las pp. 77–98 de la traducción Mondolfo; las dos presentaciones del profesor constituyen una capa docente diferenciada, no una clase nueva ni una ampliación tácita de la entrega anterior.',
  readings:[
    'Benedetto Croce · Lo vivo y lo muerto de la filosofía de Hegel · cap. I',
    'Cuestionario · capítulo I · 18 preguntas',
    'G. W. F. Hegel · Ciencia de la Lógica · Libro I · Ser / Nada / Devenir',
    'Dieter Henrich · Hegel en su contexto · revisión general, mínimo índice',
    'Clase de Ontología II · 14 oct 2026 · explicación oral del cuestionario y comienzo de la lógica',
    'Continuidad probable · Croce cap. II + cuestionario II · sin entrega fechada',
    'Nueva consigna · Hegel, Ciencia de la lógica · Mondolfo · páginas impresas 77–98',
    'Presentaciones docentes · Los problemas ontológicos en Hegel (8 diapositivas) y Ciencia de la lógica: Comienzo (9 diapositivas)',
  ],
}

export const hegelCroceStats = {
  nodes: hegelCroceNodes.length,
  schemas: hegelCroceNodes.filter((node) => Boolean(node.data.schema)).length,
  guidedSteps: hegelCroceGuidedRoute.length,
  edges: hegelCroceEdges.length,
  crossRelations: hegelCroceCrossRelations.length,
  questions:18,
}
