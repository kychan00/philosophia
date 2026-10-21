import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './OntologiaClass14Oct.css'
import './OntologiaClass19Oct.css'

const portrait = 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Jakob_Schlesinger_-_Hegel_1831.jpg'
const sourcePortrait = 'https://commons.wikimedia.org/wiki/File:Jakob_Schlesinger_-_Hegel_1831.jpg'

const path = [
  ['00', 'lectura', 'Umbral de lectura'],
  ['01', 'reconocimiento', 'Señor y siervo'],
  ['02', 'comienzo', 'Ser, Nada y Devenir'],
  ['03', 'tradicion', 'Aristóteles y Spinoza'],
  ['04', 'taleros', 'Kant frente a Hegel'],
  ['05', 'juicio', 'Juicio especulativo'],
  ['06', 'negacion', 'Negación determinada'],
  ['07', 'historia', 'Historia y libertad'],
  ['08', 'marx', 'Hegel hacia Marx'],
  ['09', 'industria', 'Capital y trabajo'],
  ['10', 'sigloxx', 'Revolución y Guerra Fría'],
  ['11', 'posmodernidad', 'Posmodernidad y crisis'],
  ['12', 'pendientes', 'Lectura y continuidad'],
]

const logic = {
  layout: 'flow', direction: 'vertical', flowGap: 86, minHeight: 980,
  fitPadding: 70, sizeHint: 'tall',
  nodes: [
    { id: 'ser', label: 'Ser puro', caption: 'inmediatez sin contenido', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'nada', label: 'Nada pura', caption: 'ausencia de determinación', shapeRole: 'concept' },
    { id: 'devenir', label: 'Devenir', caption: 'movimiento de ambos momentos', shapeRole: 'mediation', emphasis: true, tone: 'accent' },
    { id: 'nacer', label: 'Nacer y perecer', caption: 'dos direcciones del tránsito', shapeRole: 'structure' },
    { id: 'resultado', label: 'Ser determinado', caption: 'resultado, no vuelta al vacío', shapeRole: 'result' },
  ],
  edges: [
    { from: 'ser', to: 'nada', label: 'no difiere en contenido de', relationKind: 'derives' },
    { from: 'nada', to: 'devenir', label: 'su traspaso con el ser es', relationKind: 'derives' },
    { from: 'devenir', to: 'nacer', label: 'incluye', relationKind: 'derives' },
    { from: 'nacer', to: 'resultado', label: 'su movimiento conduce a', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .24, edgeDuration: .27 },
}

const experience = {
  layout: 'flow', direction: 'vertical', flowGap: 90, minHeight: 1030,
  fitPadding: 70, sizeHint: 'tall',
  nodes: [
    { id: 'figura', label: 'Figura de conciencia', caption: 'cree verdadero su saber', shapeRole: 'concept' },
    { id: 'crisis', label: 'Contradicción interna', caption: 'la experiencia desmiente su certeza', shapeRole: 'mediation' },
    { id: 'negacion', label: 'Negación determinada', caption: 'niega algo y conserva contenido', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'nueva', label: 'Nueva figura', caption: 'la conciencia transforma su saber', shapeRole: 'structure' },
    { id: 'recepcion', label: 'Recepción crítica en Marx', caption: 'trabajo y enajenación: otra esfera', shapeRole: 'result' },
  ],
  edges: [
    { from: 'figura', to: 'crisis', label: 'experimenta', relationKind: 'derives' },
    { from: 'crisis', to: 'negacion', label: 'requiere', relationKind: 'derives' },
    { from: 'negacion', to: 'nueva', label: 'hace posible', relationKind: 'derives' },
    { from: 'nueva', to: 'recepcion', label: 'es reinterpretada históricamente en', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .26, edgeDuration: .28 },
}

const chapters = [
  {
    id: 'lectura', n: '00', type: 'Lectio', title: 'Una obra que no se entiende de una sola vez',
    paragraphs: [
      'Los primeros minutos fueron una discusión de la lectura asignada de unas veinte páginas de la Ciencia de la lógica. Varios estudiantes la encontraron difícil, aunque las diapositivas preparadas por el profesor y las sesiones previas permitieron reconocer el paso del ser puro a la nada y el devenir. Al menos un estudiante indicó que le faltaban unas cinco páginas: no cabe suponer que el grupo terminara la lectura.',
      'El profesor explicó que el acercamiento a Hegel exige paciencia y trabajo gradual. Se recordó la Fenomenología del espíritu de 1807: arte, religión y filosofía permiten situar, en el sistema hegeliano, diferentes formas de relación con el absoluto. Pero el comienzo de la Lógica requiere reconstruir sus propios argumentos, no sólo aplicar una síntesis conocida de antemano.',
      'La lectura identificada en la documentación del curso es la edición de Augusta y Rodolfo Mondolfo, páginas impresas 77–98. El trabajo de hoy convierte ese dossier previo en contenido efectivamente comentado en clase.'
    ]
  },
  {
    id: 'reconocimiento', n: '01', type: 'Phenomenologia', title: 'El señor, el siervo y el problema del reconocimiento',
    paragraphs: [
      'El profesor retomó la figura del señorío y la servidumbre: dos autoconciencias se enfrentan por reconocimiento, pero una queda subordinada al aparecer el temor a la muerte. En clase se trasladó la figura a escenas de conquista y esclavitud para ejemplificar la asimetría social, y se señaló su influencia en ciertas lecturas posteriores de la lucha de clases.',
      'La figura no es una explicación empírica universal de cómo nacieron todas las sociedades. Pertenece a la experiencia de la autoconciencia en la Fenomenología. Se mencionó la recepción francesa de Hegel, especialmente Alexandre Kojève y el libro de Jean Hyppolite Génesis y estructura de la Fenomenología del espíritu de Hegel.',
      'El punto que conecta con el resto de la sesión es que los términos en relación no son autosuficientes: señor y siervo se determinan recíprocamente dentro de una experiencia de reconocimiento.'
    ]
  },
  {
    id: 'comienzo', n: '02', type: 'Logica', title: 'La verdad del ser y la nada es el devenir',
    paragraphs: [
      'Ser puro significa inmediatez completamente indeterminada: no es un ser particular, una sustancia representable ni la suma de todos los entes. Nada pura significa también ausencia completa de cualidad, diferencia y contenido. En eso coinciden; sin embargo, Hegel no elimina su diferencia. Precisamente porque no se sostienen como determinaciones autosuficientes, cada una traspasa inmediatamente a la otra.',
      'El devenir no se añade desde fuera como una tercera cosa; expresa el movimiento mismo de ser y nada. Por ello es su verdad, y sus momentos se pueden leer según dos direcciones: nacer (nada a ser) y perecer (ser a nada). En el desarrollo del libro, este movimiento da paso al ser determinado.',
      'El profesor empleó el esquema escolar tesis, antítesis y síntesis para orientarse, pero advirtió que Hegel no usa necesariamente esa fórmula. Es una ayuda de clase, no la prueba del argumento. La nada de un ente concreto, como una persona que muere, ya presupone un algo y no debe confundirse con la nada pura.'
    ]
  },
  {
    id: 'tradicion', n: '03', type: 'Genealogia', title: 'Del pensamiento que se piensa a la sustancia infinita',
    paragraphs: [
      'En Aristóteles, el libro XII de la Metafísica presenta al primer motor como pensamiento que se piensa a sí mismo. En Descartes, el pensamiento, la extensión y la garantía divina abren un problema sobre sujeto, objeto y existencia. En Spinoza sólo hay una sustancia; pensamiento y extensión son atributos, mientras que cuerpos e ideas son modos.',
      'El profesor combinó esos antecedentes como explicación del absoluto hegeliano: la sustancia infinita y la autorreferencia del pensamiento permiten introducir una realidad cuyo proceso pueda ser reconstruido por la razón. Es importante no convertir esta genealogía didáctica en la afirmación de que Hegel simplemente repite a Spinoza o a Aristóteles.',
      'La cita espinosista acerca de Dios como causa inmanente, y no transitiva, fue importante para distinguir la causa absoluta de un mecanismo por el cual un ente transfiere una porción de sí a otro. Esa diferencia también prepara el contraste entre lo infinito y los entes finitos.'
    ]
  },
  {
    id: 'taleros', n: '04', type: 'Quaestio', title: 'Cien táleros y una diferencia ontológica',
    paragraphs: [
      'Kant afirma que el ser no es un predicado real. Pensar cien táleros posibles no equivale a disponer de cien táleros efectivamente existentes: los segundos cambian el patrimonio y los primeros no. La existencia no se obtiene agregando una propiedad al concepto del objeto.',
      'La respuesta hegeliana que el profesor expuso pregunta si una distinción válida para las monedas y otras cosas finitas puede aplicarse sin más al absoluto. El argumento se desplaza a la unidad de concepto y ser en Dios. Por eso Hegel discute la crítica kantiana al argumento ontológico; no está sosteniendo que imaginar cualquier cosa baste para hacerla existir.',
      'El contraste de clase fue doble: primero, distinguir la existencia de entes finitos y el ser del absoluto; segundo, diferenciar la objeción de Kant de lo que Hegel objeta a la objeción. Es una controversia filosófica, no un punto consensuado.'
    ]
  },
  {
    id: 'juicio', n: '05', type: 'Ratio', title: 'Por qué el juicio corriente no basta',
    paragraphs: [
      'El juicio sujeto–predicado tiende a fijar una determinación. El profesor comparó esta forma con la proposición especulativa, cuya verdad no se capta manteniendo los términos separados y estáticos. Decir ser y nada son lo mismo exige, a la vez, explicar su diferencia y su tránsito.',
      'Se contrapuso el entendimiento, que fija identidad, diferencia y las reglas formales ordinarias, con la razón, capaz de pensar la unidad interna de los momentos opuestos. Esta comparación no autoriza a declarar falsa la lógica clásica en su propio dominio ni a convertir el sistema de Hegel en un elogio de cualquier contradicción.',
      'Parménides y la idea de que de la nada nada procede sirvieron como contraste histórico. En Hegel, el resultado buscado es el tránsito lógico de categorías, no la aparición empírica de cosas sin condiciones físicas.'
    ]
  },
  {
    id: 'negacion', n: '06', type: 'Experientia', title: 'Negación determinada: no destruir sino transformar',
    paragraphs: [
      'La Fenomenología del espíritu fue recordada como Ciencia de la experiencia de la conciencia. La conciencia natural cree poseer un saber verdadero, pero en la experiencia descubre contradicciones que su certeza inicial no advertía. Esa forma de saber queda negada, no simplemente borrada: su fracaso produce un resultado que permite una figura más desarrollada.',
      'El profesor comparó este movimiento con los diálogos de Platón, donde el interlocutor abandona una creencia cuando se revelan sus dificultades. También recuperó la tesis atribuida a Spinoza toda determinación es negación: ser algo determinado es no ser lo otro. La negación determinada, sin embargo, significa algo más exigente: negación de un contenido cuyo resultado también posee contenido.',
      'Este principio permite conectar negación determinada, experiencia, formación de la conciencia y Aufhebung. La superación hegeliana implica eliminar una configuración insuficiente y conservar lo que de ella resulta. No equivale a empezar desde cero.'
    ]
  },
  {
    id: 'historia', n: '07', type: 'Historia', title: 'Autoconciencia histórica y libertad institucional',
    paragraphs: [
      'El profesor explicó que ciencia no significa para Hegel únicamente ciencia físico-matemática. La Fenomenología registra procesos de cultura, religión, política, historia y reconocimiento. El ejemplo central fue la Revolución francesa: reconocer la libertad en una idea no basta si ella no adquiere una forma institucional y jurídica.',
      'La clase conectó la autoconciencia con la conciencia de clase marxista y con Historia y conciencia de clase de Lukács. Esa conexión pertenece a la recepción y reconstrucción posteriores; no debemos presentar como idénticas la autoconciencia hegeliana y la conciencia del proletariado.',
      'Este es el umbral que lleva la discusión desde el movimiento del concepto hacia la cuestión histórica de cómo los seres humanos transforman sus condiciones de vida y comprenden esas transformaciones.'
    ]
  },
  {
    id: 'marx', n: '08', type: 'Critica', title: 'Marx hereda el movimiento, critica el sistema',
    paragraphs: [
      'Tras la muerte de Hegel se distinguieron interpretaciones conservadoras del sistema e interpretaciones críticas asociadas a los jóvenes hegelianos. El profesor presentó a Marx como pensador que emplea la crítica dialéctica para interrogar las relaciones materiales, en lugar de considerar que la reconciliación ideal basta para superar los conflictos.',
      'Los Manuscritos económico-filosóficos de 1844 constituyen el enlace textual fundamental. En El trabajo enajenado, Marx explica las formas en que el trabajador queda separado de su producto, de la actividad que realiza, de su vida genérica y de los otros. En Crítica de la dialéctica hegeliana y de la filosofía de Hegel en general, examina los límites de la superación ideal.',
      'La enajenación no se agota en la explotación medida por salario. Tampoco debe identificarse sin más con toda objetivación; Marx estudia las relaciones sociales concretas bajo las que el producto y la actividad aparecen como poderes ajenos.'
    ]
  },
  {
    id: 'industria', n: '09', type: 'Economia', title: 'Industrialización, capital y relaciones de clase',
    paragraphs: [
      'La exposición pasó a la Revolución industrial: fábricas, máquinas, trabajadores desplazados desde el campo, acumulación de capital y competencia. El capitalista reinvierte para ampliar la producción; quien no dispone de medios de producción vende su fuerza de trabajo. Se distinguió la igualdad formal ante la ley de las desigualdades materiales.',
      'La lucha por la jornada de trabajo se presentó como ejemplo de transformación histórica de las instituciones. A continuación, la hipótesis socialista sirvió para explicar la negación determinada: una forma social nueva conservaría capacidades técnicas e industriales de la precedente, aunque cambiara su organización.',
      'Todo este conjunto es una aplicación histórica del profesor. No se deduce directamente de la primera tríada ser–nada–devenir ni equivale a una predicción cumplida necesariamente.'
    ]
  },
  {
    id: 'sigloxx', n: '10', type: 'Interpretatio historica', title: 'Revolución, estalinismo y Guerra Fría',
    paragraphs: [
      'El recorrido histórico consideró la revolución rusa de 1917, el problema de la industrialización y la política soviética bajo Stalin. El profesor puso en tensión la represión estalinista y el papel decisivo de la URSS frente a la invasión nazi. Reconocer su contribución militar a la derrota del nazismo no legitima las purgas, deportaciones, campos ni muertes vinculadas a la represión soviética.',
      'Se discutió críticamente Los orígenes del totalitarismo de Hannah Arendt y la comparación entre nazismo y estalinismo. La controversia debe mantenerse como debate interpretativo: ni la objeción del profesor ni el análisis de Arendt pueden darse por demostrados sin examinar textos y evidencias.',
      'Finalmente se mencionaron Yalta (1945), OTAN (1949), Pacto de Varsovia (1955), Guerra Fría, perestroika y disolución de la URSS (1991). La afirmación de que Occidente habría prometido disolver la OTAN de manera general exige una investigación diplomática separada; no queda acreditada por la clase.'
    ]
  },
  {
    id: 'posmodernidad', n: '11', type: 'Consequentia', title: 'Metarrelatos, mercado mundial y naturaleza',
    paragraphs: [
      'El profesor introdujo La condición posmoderna de Jean-François Lyotard para hablar de desconfianza frente a los grandes relatos históricos. Esta lectura cuestiona explicaciones que pretenden anticipar o agotar el sentido de la historia; ello no constituye por sí solo una refutación completa de Hegel o Marx.',
      'La globalización posterior a la Guerra Fría apareció asociada a transnacionales, reorganización de la producción y nueva acumulación de capital. El cierre se concentró en los costes ecológicos, especialmente el agua, para preguntar qué sucede cuando la producción y la riqueza dejan de servir necesidades humanas y se convierten en fines autónomos.',
      'Las referencias a conflictos contemporáneos y a responsabilidades de gobiernos pertenecieron a la discusión oral. No se presentan aquí como un panorama geopolítico independiente. La pregunta filosófica final fue la relación entre libertad, materialidad y fines de la actividad humana.'
    ]
  },
  {
    id: 'pendientes', n: '12', type: 'Praeparatio', title: 'La siguiente lectura: Fromm y los manuscritos de Marx',
    paragraphs: [
      'El cierre anunció un volumen atribuido a Erich Fromm que incluye los manuscritos de Marx, así como el envío posterior de material. La identificación bibliográfica externa más consistente es Marx y su concepto del hombre, de Erich Fromm, edición del Fondo de Cultura Económica: un libro de interpretación que incorpora los Manuscritos económico-filosóficos de Karl Marx.',
      'La indicación oral no permite reconstruir de manera segura el capítulo final, el rango de páginas ni una fecha de entrega. El pendiente se registra como lectura anunciada, con alcance y plazo por confirmar. No se confunden la autoría de Fromm y la de Marx ni se duplica el material que ya conserva el vault.',
      'Para prepararse se recomienda repasar la negación determinada y localizar las dos secciones de los Manuscritos: El trabajo enajenado y Crítica de la dialéctica hegeliana y de la filosofía de Hegel en general.',
      'Actualización posterior a la clase: el correo del profesor del 19 de octubre precisó la lectura de Marx sobre la crítica de Hegel dentro del volumen de Fromm (PDF pp. 97–112), el capítulo XIX de Ernst Bloch (PDF pp. 380–387) y las once tesis sobre Feuerbach de Marx en La ideología alemana (PDF pp. 500–503). No se indicó fecha de entrega. El dossier Marx–Hegel enlazado desde esta página ahora reúne las tres fuentes en un atlas 2D.'
    ]
  },
]

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

export default function OntologiaClass19Oct() {
  return (
    <main className="oa-page oaf-page ont19-page">
      <div className="oa-backdrop" aria-hidden="true" />
      <div className="oa-brochure ont19-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>XIX · X · MMXXVI</span>
        </nav>

        <header className="ont19-cover">
          <div className="ont19-cover-text">
            <span className="oa-kicker">Archivum ontologicum · fol. XXVI · Ratio et historia</span>
            <h1>La negación que <em>hace historia</em></h1>
            <p className="ont19-subtitle">Hegel · ser y devenir · autoconciencia · Marx · enajenación</p>
            <p className="ont19-lead">
              Una lectura que empieza en el vacío del ser puro y termina preguntando
              por el trabajo, la libertad y las contradicciones de la historia.
            </p>
            <div className="ont19-question">
              <small>Quaestio</small>
              <strong>¿Cómo puede una negación producir una realidad y una experiencia nuevas sin destruirlo todo?</strong>
            </div>
            <div className="ont19-actions">
              <button type="button" onClick={() => goTo('lectura')}>Seguir la clase ↓</button>
              <Link to="/tareas/ontologia-ii/hegel-croce-dialectica">Abrir el sistema 2D de Hegel ↗</Link>
            </div>
          </div>
          <figure className="ont19-portrait">
            <img src={portrait} alt="Retrato de Georg Wilhelm Friedrich Hegel realizado por Jakob Schlesinger en 1831" loading="eager" />
            <figcaption>
              <strong>G. W. F. Hegel · 1831</strong>
              <span>Jakob Schlesinger · Nationalgalerie, Berlín · dominio público.</span>
              <a href={sourcePortrait} target="_blank" rel="noreferrer">Procedencia de la imagen ↗</a>
            </figcaption>
          </figure>
        </header>

        <section className="ont19-thesis">
          <div><span>01 · LOGICA</span><strong>Ser ↔ Nada</strong><p>La verdad es el devenir de ambos momentos.</p></div>
          <div><span>02 · CONCIENTIA</span><strong>Negación determinada</strong><p>La experiencia supera una certeza conservando contenido.</p></div>
          <div><span>03 · HISTORIA</span><strong>Trabajo y libertad</strong><p>Marx reinterpreta la dialéctica en las relaciones materiales.</p></div>
        </section>

        <section className="ont19-atlas" aria-label="Atlas del movimiento lógico">
          <div className="ont19-atlas-head">
            <span>Atlas I · prima determinatio</span>
            <h2>Del ser al devenir</h2>
            <p>Esquema de lectura, con conectores verbales y disposición vertical para evitar superposiciones.</p>
          </div>
          <div className="oa-schema-card ont19-schema"><AnimatedConceptSchema schema={logic} /></div>
          <p className="ont19-atlas-warning">Interpretación de clase cotejada con Hegel, <em>Ciencia de la lógica</em>, edición Mondolfo, pp. 77–98. El diagrama no reemplaza el texto primario.</p>
        </section>

        <div className="ont19-layout">
          <aside className="ont19-index" aria-label="Índice de la sesión">
            <p>Index lectionis</p>
            {path.map(([num, id, label]) => (
              <button type="button" key={id} onClick={() => goTo(id)}>
                <span>{num}</span>{label}
              </button>
            ))}
            <Link to="/estudios/ontologia-ii/hegel-ciencia-logica-ser-nada-devenir">Dossier: Ciencia de la lógica ↗</Link>
            <Link to="/estudios/ontologia-ii/marx-critica-dialectica-hegeliana">Dossier: Marx y Hegel ↗</Link>
          </aside>
          <div className="ont19-chapters">
            {chapters.map((chapter) => (
              <section className="ont19-chapter" id={chapter.id} key={chapter.id}>
                <div className="ont19-chapter-marker"><span>{chapter.n}</span><small>{chapter.type}</small></div>
                <h2>{chapter.title}</h2>
                {chapter.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                {chapter.id === 'taleros' && (
                  <div className="ont19-dual">
                    <div><span>Kant</span><strong>Concepto posible ≠ existencia efectiva</strong><p>Las monedas reales modifican el patrimonio; la mera representación no.</p></div>
                    <div><span>Hegel</span><strong>¿Se puede extender esa distinción al absoluto?</strong><p>El debate cambia de plano: el argumento ontológico no trata de fabricar monedas.</p></div>
                  </div>
                )}
                {chapter.id === 'sigloxx' && (
                  <div className="ont19-caution">
                    <strong>Control histórico</strong>
                    <p>Industrialización y contribución soviética contra el nazismo no justifican la represión estalinista. Las afirmaciones sobre Arendt, la OTAN y los acuerdos de posguerra requieren contrastación independiente.</p>
                  </div>
                )}
                {chapter.id === 'pendientes' && (
                  <div className="ont19-reading">
                    <span>Bibliotheca · preparación</span>
                    <strong>Erich Fromm, <em>Marx y su concepto del hombre</em></strong>
                    <p>Fondo de Cultura Económica · ISBN 9786071665218 · incluye los Manuscritos de Marx.</p>
                    <a href="https://www.fondodeculturaeconomica.com/Ficha/9786071665218/F" target="_blank" rel="noreferrer">Consultar ficha del editor ↗</a>
                    <small>Capítulo, páginas y fecha de entrega: por confirmar.</small>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        <section className="ont19-atlas ont19-atlas-second">
          <div className="ont19-atlas-head">
            <span>Atlas II · experientia conscientiae</span>
            <h2>La negación determinada</h2>
            <p>Una negación que reconoce su objeto no conduce a un vacío idéntico al comienzo: produce una figura distinta.</p>
          </div>
          <div className="oa-schema-card ont19-schema"><AnimatedConceptSchema schema={experience} /></div>
          <p className="ont19-atlas-warning">Los primeros cuatro momentos resumen la exposición fenomenológica. La conexión final con Marx es recepción crítica posterior y está rotulada como tal.</p>
        </section>

        <section className="ont19-bibliography">
          <span>Fontes · lecturas relacionadas</span>
          <h2>Textos que se cruzaron en esta clase</h2>
          <div className="ont19-bibliography-grid">
            <article><small>Texto primario · 1812–1816</small><strong>Hegel · Ciencia de la lógica</strong><p>Ser puro, Nada pura, Devenir; pp. 77–98 de la edición Mondolfo trabajada en el curso.</p><Link to="/estudios/ontologia-ii/hegel-ciencia-logica-ser-nada-devenir">Abrir estudio →</Link></article>
            <article><small>Texto primario · 1807</small><strong>Hegel · Fenomenología del espíritu</strong><p>Experiencia de la conciencia, reconocimiento, negación determinada y formación histórica.</p><Link to="/estudios/ontologia-ii/hegel-fenomenologia-prologo">Abrir estudio →</Link></article>
            <article><small>Texto primario · 1844</small><strong>Marx · Manuscritos económico-filosóficos</strong><p>Trabajo enajenado y crítica de la dialéctica hegeliana, sin confundir a Marx con su comentarista.</p><Link to="/estudios/ontologia-ii/marx-critica-dialectica-hegeliana">Abrir estudio →</Link></article>
            <article><small>Estudio complementario · FCE</small><strong>Fromm · Marx y su concepto del hombre</strong><p>Volumen que incluye los Manuscritos. La extensión de la nueva lectura no quedó confirmada.</p><a href="https://www.fondodeculturaeconomica.com/Ficha/9786071665218/F" target="_blank" rel="noreferrer">Fuente editorial →</a></article>
          </div>
        </section>

        <footer className="ont19-footer">
          <Link to="/semestre/5/ontologia-ii">← Volver a Ontología II</Link>
          <Link to="/tareas/ontologia-ii/hegel-croce-dialectica">Continuar en el sistema 2D ↗</Link>
          <small>Archivum ontologicum · XIX · X · MMXXVI</small>
        </footer>
      </div>
    </main>
  )
}
