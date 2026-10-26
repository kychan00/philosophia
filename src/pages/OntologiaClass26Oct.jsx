import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './OntologiaClass19Oct.css'
import './OntologiaClass26Oct.css'

const chapters = [
  {
    id:'guerras', type:'Historia', title:'Guerras mundiales y condiciones materiales',
    paragraphs:[
      'La clase comenzó con la crisis alemana de entreguerras, el ascenso nazi, el expansionismo y la Segunda Guerra Mundial. El profesor mencionó el espacio vital, el pacto germano-soviético, Polonia, la ocupación de Francia y la campaña contra la Unión Soviética. Su relato destacó la resistencia soviética y las consecuencias de la guerra para la organización política posterior.',
      'La referencia histórica introduce una pregunta más amplia: ¿es posible anticipar la transformación de una sociedad solamente a partir de una teoría? Guerras, conflictos, economía e instituciones alteran las condiciones concretas en las que un proyecto histórico puede realizarse.'
    ],simple:'Una sociedad no cambia como si siguiera un guion. Las guerras y las decisiones políticas pueden modificar cualquier proyecto.',control:'La crisis económica inicial no conserva fecha inequívoca; la reconstrucción de acontecimientos se ofrece como contexto histórico, no como cita literal.'
  },
  {
    id:'bloques',type:'Historia',title:'Dos bloques, Guerra Fría y ONU',
    paragraphs:[
      'Después de la derrota del nazismo, el profesor describió la configuración de zonas de influencia en torno a Estados Unidos y la Unión Soviética. El conflicto entre capitalismo y socialismo de Estado se convirtió en un eje de la Guerra Fría. También recordó la fundación de la ONU en 1945 como intento de cooperación y prevención de nuevas guerras.',
      'No se trataba únicamente de un enfrentamiento militar, sino de modelos incompatibles de organización económica y política. El profesor utilizó este escenario para preguntar por el destino real de la revolución socialista.'
    ],simple:'El siglo XX enfrentó dos maneras de organizar la economía y el poder; esa disputa condicionó la vida de muchos países.'
  },
  {
    id:'marx-ideal',type:'Critica',title:'¿Había expectativas idealizadas en Marx?',
    paragraphs:[
      'El profesor objetó la imagen de una revolución proletaria que pudiera culminar sin dificultades graves en la transición al comunismo. Señaló que las condiciones históricas del socialismo real distaron de una realización directa de aquel horizonte emancipatorio.',
      'La crítica usa “idealismo” en un sentido coloquial y polémico: el profesor cuestiona ciertas expectativas históricas, no está reclasificando doctrinalmente el materialismo histórico como idealismo filosófico.'
    ],simple:'Marx ayuda a criticar el capitalismo aunque no todas sus expectativas sobre el futuro se hayan cumplido.',control:'Debe distinguirse el horizonte teórico marxiano de los Estados que históricamente se denominaron socialistas.'
  },
  {
    id:'caida-urss',type:'Historia',title:'1991: crisis del socialismo real',
    paragraphs:[
      'El profesor situó entre 1989 y 1991 la crisis del bloque soviético y la disolución de la URSS. Lo presentó como un periodo en el que numerosos intelectuales discutieron si la desaparición de aquella alternativa implicaba el triunfo definitivo del capitalismo.',
      'El derrumbe de un orden político no prueba por sí mismo que todas las críticas económicas y filosóficas formuladas contra el capitalismo hayan quedado refutadas.'
    ],simple:'Que desapareciera la URSS no significaba que hubieran desaparecido los problemas estudiados por Marx.'
  },
  {
    id:'fukuyama',type:'Interpretatio',title:'Fukuyama: ¿el fin de la historia?',
    paragraphs:[
      'El profesor presentó a Francis Fukuyama, autor de El fin de la historia y el último hombre (1992), como intérprete de la posible culminación del desarrollo ideológico en la democracia liberal. La referencia al fin de la historia no alude al final de los acontecimientos, sino a la hipótesis de que ninguna forma política alternativa alcanzaría superioridad ideológica universal.',
      'La conexión con Hegel pasa por la historia como desarrollo de la libertad, pero esta recepción no debe confundirse con la doctrina completa de Hegel. El profesor vinculó esta tesis con la globalización y la expansión de economías capitalistas.'
    ],simple:'Fukuyama no decía que dejarían de pasar cosas: sugería que la democracia liberal podía ser el modelo político final.',control:'El artículo precursor apareció en 1989; el libro citado, en 1992. La interpretación hegeliana pertenece a Fukuyama.'
  },
  {
    id:'guerras-nuevas',type:'Historia',title:'11 de septiembre, Irak y geopolítica',
    paragraphs:[
      'Los atentados del 11 de septiembre de 2001 y la guerra de Irak de 2003 fueron utilizados para cuestionar el optimismo de la década anterior. El profesor destacó el problema de las armas de destrucción masiva alegadas en la justificación de la invasión y planteó una interpretación crítica de intereses petroleros.',
      'A partir de los recursos energéticos abordó la dependencia económica y las relaciones de poder entre países. La cuestión ontológico-social subyacente es que la existencia material de una sociedad depende de relaciones concretas de producción, abastecimiento y organización.'
    ],simple:'El triunfo de un sistema no impide nuevas guerras y luchas por recursos indispensables.',control:'La hipótesis del interés petrolero se conserva como interpretación del profesor, no como explicación única históricamente demostrada.'
  },
  {
    id:'arendt',type:'Politica',title:'Arendt: totalidad y totalitarismo',
    paragraphs:[
      'El profesor recordó el exilio de intelectuales europeos y mencionó Los orígenes del totalitarismo de Hannah Arendt. Presentó nazismo y estalinismo como experiencias que provocaron nuevos análisis del poder político. La expresión “de la totalidad al totalitarismo hay un pequeño paso” funcionó como provocación para pensar la subordinación de los individuos a un orden dominante.',
      'En sentido filosófico, totalidad es una categoría referida a relaciones articuladas, mientras que totalitarismo designa una forma de dominación política. No deben confundirse: pensar la totalidad no equivale a defender un gobierno totalitario.'
    ],simple:'Entender todas las partes de una sociedad no es lo mismo que querer controlar toda la sociedad.',control:'Las relaciones mencionadas entre Hegel, Nietzsche y el nazismo requieren estudiar apropiaciones ideológicas; no se atribuye a esos autores responsabilidad causal directa.'
  },
  {
    id:'tecnologia',type:'Technologia',title:'Celulares, redes y construcción de la experiencia',
    paragraphs:[
      'El profesor se preguntó cómo cambia nuestra percepción del mundo cuando gran parte de la experiencia cotidiana pasa por celulares, redes sociales y medios digitales. Mencionó la pandemia como momento de intensificación del contacto mediado por pantallas.',
      'Su preocupación fue la posibilidad de que las plataformas construyan perfiles de comportamiento a partir de preferencias, relaciones personales y estados expresados públicamente. La pregunta filosófica es hasta qué punto se puede influir en la comprensión de la realidad mediante la selección tecnológica de información.'
    ],simple:'Las aplicaciones no sólo nos muestran cosas: el orden en que nos las muestran puede influir en lo que pensamos.'
  },
  {
    id:'ia',type:'Economia',title:'Inteligencia artificial, trabajo y acumulación',
    paragraphs:[
      'El profesor relacionó el crecimiento de la IA con la transformación de profesiones y una posible sustitución de puestos de trabajo. Señaló que un aumento en la productividad no garantiza mejores salarios, más igualdad ni una distribución justa de sus beneficios.',
      'También reflexionó sobre los datos aportados por usuarios y la capacidad de las empresas tecnológicas para producir valor. Esta discusión debe separar la crítica económico-social de una explicación técnica: no toda interacción entrena automáticamente un modelo.'
    ],simple:'Que una empresa produzca más gracias a la IA no asegura que los trabajadores vivan mejor.',control:'No atribuir a cada conversación con IA una actualización inmediata del modelo.'
  },
  {
    id:'progreso',type:'Modernitas',title:'Progreso técnico frente a progreso político',
    paragraphs:[
      'La Ilustración, la Revolución francesa y la industrialización aparecieron como antecedentes de un proyecto moderno de humanidad. El profesor distinguió entre el progreso técnico —incremento de capacidad científica y productiva— y el progreso político-social —libertad efectiva, igualdad y justicia.',
      'Su tesis crítica fue que los avances tecnológicos han sido considerables mientras la desigualdad persiste. No debemos confundir innovar con emancipar: un instrumento puede ampliar capacidades y al mismo tiempo reproducir relaciones de dominación.'
    ],simple:'Tener máquinas mejores no es lo mismo que tener una sociedad más justa.'
  },
  {
    id:'posmoderno',type:'Interpretatio',title:'Lyotard y la crítica de los grandes relatos',
    paragraphs:[
      'El profesor recordó el pensamiento posmoderno y la desconfianza frente a explicaciones que pretenden establecer el sentido completo de la historia. La referencia bibliográfica más consistente es Jean-François Lyotard, La condición posmoderna, y su análisis de los metarrelatos.',
      'La crítica posmoderna no significa que no pueda narrarse ningún acontecimiento. Interroga, más bien, la pretensión de una historia universal que avance necesariamente hacia una finalidad ya conocida.'
    ],simple:'La historia no tiene necesariamente un único destino que una teoría pueda asegurar por adelantado.',control:'La identificación de Lyotard es una normalización bibliográfica de una referencia poco clara en el material recibido.'
  },
  {
    id:'piketty',type:'Economia',title:'Piketty, acumulación y desigualdad',
    paragraphs:[
      'El profesor mencionó a Thomas Piketty para mostrar la vigencia de estudios sobre concentración de riqueza. Conectó ese problema con la crítica marxiana del capital, aunque no sostuvo que sus métodos fueran equivalentes.',
      'Discutió también la dependencia financiera y las tensiones presupuestarias de los Estados, especialmente ante necesidades sociales como salud, educación y pensiones. La deuda no produce mecánicamente recortes: sus efectos dependen de decisiones políticas y condiciones económicas.'
    ],simple:'Una economía puede crecer sin que esa riqueza llegue por igual a quienes viven en ella.'
  },
  {
    id:'bienestar',type:'Politica',title:'Estado de bienestar, tecnocracia y democracia',
    paragraphs:[
      'El Estado de bienestar apareció como modelo de responsabilidad pública sobre derechos y servicios como educación, atención médica y protección social. El profesor criticó la reducción de esos compromisos en favor de intereses financieros y de formas de gobierno que presentó como tecnocráticas.',
      'La cuestión abierta es cómo distinguir el uso legítimo del conocimiento técnico en la administración de las decisiones en las que una autoridad técnica desplaza la deliberación democrática.'
    ],simple:'Los especialistas pueden ayudar a gobernar; eso no significa que sus decisiones deban quedar fuera de discusión pública.'
  },
  {
    id:'guadalajara',type:'Praxis',title:'Guadalajara: agua, salud y vivienda',
    paragraphs:[
      'El profesor descendió a problemas concretos: deficiencias de servicios médicos, acceso a medicamentos, contaminación del agua y encarecimiento de las viviendas. Preguntó por responsabilidades de gobiernos, empresas e instituciones y por el papel de la especulación inmobiliaria.',
      'Destacó que no basta denunciar irregularidades: hace falta investigar datos, consultar a especialistas y elaborar propuestas comprobables. El problema de la vivienda permite distinguir su utilidad social de su tratamiento como mercancía y activo de inversión.'
    ],simple:'Pensar filosóficamente el agua o la vivienda exige conocer el problema real y buscar soluciones con otras disciplinas.',control:'Las cifras sobre inversiones públicas, precios y rankings urbanos quedaron sin contexto verificable y no se presentan como hechos comprobados.'
  },
  {
    id:'marx-praxis',type:'Praxis',title:'Marx: verdad, práctica y transformación',
    paragraphs:[
      'El cierre recuperó la segunda de las Tesis sobre Feuerbach: la verdad objetiva del pensamiento no debe debatirse como problema separado de la práctica humana. El profesor contrapuso ese enfoque a una discusión desligada de su relación con la actividad real.',
      'La undécima tesis puso el acento en transformar el mundo. En la lectura de clase, la filosofía no debería quedarse en observación o denuncia: es necesario examinar las causas de los conflictos, aprender de conocimientos especializados y proponer formas de intervención.'
    ],simple:'La filosofía también tiene que servir para comprender problemas que podemos intentar cambiar.',control:'La praxis marxiana no se reduce a “es verdadero lo que funciona”. Debe leerse en su contexto de actividad humana y relaciones sociales.'
  },
  {
    id:'sintesis',type:'Conclusio',title:'Hegel, Marx y la cuestión de nuestro presente',
    paragraphs:[
      'El recorrido volvió a Hegel y Marx como autores dialécticos preocupados por las relaciones, contradicciones y transformaciones. El profesor sostuvo que el fracaso histórico de determinadas expectativas socialistas no elimina el valor crítico de las categorías de Marx para estudiar el capitalismo contemporáneo.',
      'La pregunta unificadora de la clase fue si el desarrollo histórico y técnico de la humanidad ha logrado realizar sus promesas de libertad e igualdad. Su conclusión práctica: la formación filosófica debe permitir interpretar las contradicciones y contribuir, junto con otras disciplinas, a la búsqueda de soluciones.'
    ],simple:'No hace falta aceptar cada pronóstico histórico de Marx para aprender de su manera de cuestionar la sociedad.'
  }
]

const relation = {
  layout: 'flow', direction: 'vertical', flowGap: 100, minHeight: 950, fitPadding: 64, sizeHint: 'tall',
  nodes: [
    {id:'dialectica',label:'Hegel y Marx',caption:'historia, contradicción, transformación',shapeRole:'concept',emphasis:true,tone:'accent'},
    {id:'historia',label:'Siglo XX',caption:'guerra, bloques y socialismo real',shapeRole:'structure'},
    {id:'capital',label:'Capitalismo contemporáneo',caption:'desigualdad, tecnología, trabajo',shapeRole:'mediation'},
    {id:'progreso',label:'Progreso desigual',caption:'avance técnico ≠ justicia política',shapeRole:'concept',emphasis:true},
    {id:'praxis',label:'Praxis filosófica',caption:'comprender, investigar y transformar',shapeRole:'result',emphasis:true,tone:'accent'}
  ],
  edges:[
    {from:'dialectica',to:'historia',label:'permite interrogar',relationKind:'derives'},
    {from:'historia',to:'capital',label:'abre la discusión sobre',relationKind:'derives'},
    {from:'capital',to:'progreso',label:'expone contradicciones de',relationKind:'derives'},
    {from:'progreso',to:'praxis',label:'exige reconsiderar',relationKind:'derives'}
  ],
  animation:{mode:'sequence',nodeDuration:.25,edgeDuration:.27}
}

const goTo = (id) => document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

export default function OntologiaClass26Oct(){
  return <main className="oa-page oaf-page ont19-page ont26-page">
    <div className="oa-backdrop" aria-hidden="true"/>
    <div className="oa-brochure ont19-brochure">
      <nav className="oa-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="oa-brand">Φ · Philosophia</Link>
        <span>XXVI · X · MMXXVI</span>
      </nav>
      <header className="ont19-cover">
        <div className="ont19-cover-text">
          <span className="oa-kicker">Archivum ontologicum · historia et praxis</span>
          <h1>La historia y <em>sus contradicciones</em></h1>
          <p className="ont19-subtitle">Hegel · Marx · socialismo real · tecnología · progreso · praxis</p>
          <p className="ont19-lead">¿Por qué el desarrollo técnico y económico no ha realizado necesariamente las promesas modernas de libertad e igualdad? Una clase de recapitulación histórica y regreso a Marx.</p>
          <div className="ont19-question"><small>Quaestio central</small><strong>¿Cómo pensar críticamente un progreso que produce nuevas capacidades y conserva profundas desigualdades?</strong></div>
          <div className="ont19-actions">
            <button type="button" onClick={()=>goTo('examen')}>Consultar examen ↓</button>
            <button type="button" onClick={()=>goTo('guerras')}>Leer clase apartado por apartado ↓</button>
          </div>
        </div>
        <figure className="ont19-portrait">
          <img src={import.meta.env.BASE_URL + 'images/ontologia/2026-10-26/dialectica-progreso-praxis.svg'} alt="Esquema original de cinco etapas: dialéctica, historia, capitalismo contemporáneo, progreso desigual y praxis" loading="eager"/>
          <figcaption>
            <strong>Historia, progreso y praxis</strong>
            <span>Diagrama pedagógico original de PHILOSOPHIA · elaboración editorial · 2026 · sin materiales externos.</span>
          </figcaption>
        </figure>
      </header>
      <section className="ont26-exam" id="examen" aria-labelledby="ont26-exam-title">
        <span className="ont26-eyebrow">Aviso académico · evaluación</span>
        <h2 id="ont26-exam-title">Examen de Ontología II</h2>
        <div className="ont26-exam-data">
          <div><small>Preguntas anunciadas</small><strong>10</strong></div>
          <div><small>Fecha límite de entrega</small><strong>Viernes 30 · octubre · 2026</strong></div>
          <div><small>Formato y envío</small><strong>Word · correo electrónico</strong></div>
        </div>
        <p>El examen fue anunciado al cerrar la sesión y los datos fueron confirmados posteriormente por el estudiante. Los diez enunciados oficiales aún no constan en el material disponible; no se inventan preguntas, criterios de calificación ni hora límite. La fecha exacta en que el profesor enviará el documento requiere confirmación.</p>
        <Link to="/semestre/5/ontologia-ii">Volver al espacio de la materia</Link>
      </section>
      <section className="ont19-thesis">
        <div><span>01 · HISTORIA</span><strong>El siglo XX</strong><p>Las guerras y la crisis soviética cuestionan las expectativas de desarrollo necesario.</p></div>
        <div><span>02 · PROGRESSUS</span><strong>Técnica ≠ justicia</strong><p>El progreso tecnológico no implica automáticamente libertad e igualdad.</p></div>
        <div><span>03 · PRAXIS</span><strong>Transformar</strong><p>Marx vincula la verdad y la crítica con la actividad humana concreta.</p></div>
      </section>
      <section className="ont19-atlas" aria-label="Esquema de relaciones entre historia y praxis">
        <div className="ont19-atlas-head"><span>Atlas de lectura · reconstrucción editorial</span><h2>Del conflicto histórico a la praxis</h2>
          <p>Relación pedagógica elaborada a partir del hilo de clase. Sus flechas describen la secuencia de exposición; no pretenden ser citas de los textos de Hegel o Marx.</p>
        </div>
        <div className="oa-schema-card ont19-schema"><AnimatedConceptSchema schema={relation}/></div>
      </section>
      <div className="ont19-layout">
        <aside className="ont19-index" aria-label="Apartados de la clase">
          <p>Index lectionis</p>
          {chapters.map((chapter,index)=><button type="button" key={chapter.id} onClick={()=>goTo(chapter.id)}><span>{String(index+1).padStart(2,'0')}</span>{chapter.title}</button>)}
          <Link to="/estudios/ontologia-ii/marx-critica-dialectica-hegeliana">Estudio de Marx y Hegel ↗</Link>
          <Link to="/tareas/ontologia-ii/marx-hegel-bloch-feuerbach/sistema">Lecturas de Marx y Feuerbach ↗</Link>
        </aside>
        <div className="ont19-chapters">
          {chapters.map((chapter,index)=><section className="ont19-chapter" id={chapter.id} key={chapter.id}>
            <div className="ont19-chapter-marker"><span>{String(index+1).padStart(2,'0')}</span><small>{chapter.type}</small></div>
            <h2>{chapter.title}</h2>
            {chapter.paragraphs.map((paragraph,i)=><p key={i}>{paragraph}</p>)}
            <details className="ont26-plain"><summary>En palabras simples</summary><p>{chapter.simple}</p></details>
            {chapter.control&&<div className="ont19-caution"><strong>Control académico</strong><p>{chapter.control}</p></div>}
          </section>)}
        </div>
      </div>
      <section className="ont19-bibliography">
        <span>Fontes · lecturas y autores relacionados</span>
        <h2>Textos para continuar</h2>
        <div className="ont19-bibliography-grid">
          <article><small>Fuente primaria · 1845</small><strong>Marx · Tesis sobre Feuerbach</strong><p>Especialmente tesis II y XI: verdad del pensamiento en la práctica y transformación del mundo. Lectura asignada previamente por el profesor.</p><Link to="/tareas/ontologia-ii/marx-hegel-bloch-feuerbach/sistema">Abrir sistema documental ↗</Link></article>
          <article><small>Discusión contemporánea · 1992</small><strong>Francis Fukuyama · El fin de la historia y el último hombre</strong><p>Presentado en clase para interrogar la victoria ideológica de la democracia liberal. No consta lectura directa del libro.</p></article>
          <article><small>Filosofía política · 1951</small><strong>Hannah Arendt · Los orígenes del totalitarismo</strong><p>Referencia para el análisis del nazismo, el estalinismo y las formas de dominación política.</p></article>
          <article><small>Filosofía contemporánea · 1979</small><strong>Jean-François Lyotard · La condición posmoderna</strong><p>Referencia bibliográfica identificada para la crítica a los grandes relatos; no se acredita lectura de páginas concretas.</p></article>
          <article><small>Economía política · 2013</small><strong>Thomas Piketty · El capital en el siglo XXI</strong><p>Contexto bibliográfico para el problema de desigualdad y concentración de riqueza.</p></article>
          <article><small>Conexión con la clase anterior</small><strong>Hegel · dialéctica e historia</strong><p>La clase del 19 de octubre introduce el tránsito de la lógica a la historia y a Marx.</p><Link to="/semestre/5/ontologia-ii/clase/19-octubre">Revisar clase anterior ↗</Link></article>
        </div>
      </section>
      <footer className="ont19-footer">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <button type="button" onClick={()=>goTo('examen')}>Volver al aviso del examen ↑</button>
        <small>Archivum ontologicum · XXVI · X · MMXXVI</small>
      </footer>
    </div>
  </main>
}
