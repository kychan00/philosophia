import { useState } from 'react'
import { Link } from 'react-router'
import './EthicsClass10Sep.css'
import './EthicsClass15Oct.css'

const SOURCES = [
  { code: '153a–157d', title: 'Platón · Cármides', subtitle: 'Lectura parcial comentada en la sesión', url: 'https://atlas.perseus.tufts.edu/library/passage/urn%3Acts%3AgreekLit%3Atlg0059.tlg018.perseus-eng2%3A153-157/', tag: 'Texto primario' },
  { code: '720a–e', title: 'Platón · Leyes, IV', subtitle: 'Fuente de la distinción médico / paciente libre o esclavizado', url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0166%3Abook%3D4', tag: 'Pasaje localizado' },
  { code: 'IV libros', title: 'Corpus hipocrático · Sobre la dieta', subtitle: 'Régimen de vida; ficha de la edición Gredos, vol. III', url: 'https://books.google.com/books/about/Tratados_hipocr%C3%A1ticos.html?id=6gBsswEACAAJ', tag: 'Obra mencionada' },
  { code: '215a–222b', title: 'Platón · Banquete', subtitle: 'Comparación con el relato de Alcibíades y la resistencia de Sócrates', url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0090%3Atext%3Dintro%3Asection%3D1', tag: 'Comparación oral' },
  { code: '451d–457b', title: 'Platón · República, V', subtitle: 'Contraste externo: mujeres, educación y guardianía', url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0168%3Abook%3D5', tag: 'Verificación externa' },
  { code: '132a ss.', title: 'Pseudo-Platón · Los amantes', subtitle: 'Obra cuya atribución fue discutida; no se leyó', url: 'https://beta.perseus.tufts.edu/urn%3Acts%3AgreekLit%3Atlg0059.tlg016.perseus-grc2%3A132/', tag: 'Alusión bibliográfica' }
]

const contents = [
  ['01', 'punto', 'La pregunta filosófica'],
  ['02', 'socrates', 'Un Sócrates desconcertado'],
  ['03', 'ensalmo', 'El ensalmo y la persona entera'],
  ['04', 'hipocrates', 'La medicina hipocrática'],
  ['05', 'modelos', 'Médicos, pacientes y jerarquías'],
  ['06', 'mujeres', 'La posición de las mujeres'],
  ['07', 'vida', 'Enfermedad, sociedad y autocuidado'],
  ['08', 'clasicos', 'Por qué leer a los clásicos'],
  ['09', 'fuentes', 'Obras y referencias']
]

const pathways = [
  {
    title: 'El cuerpo no se divide en piezas aisladas',
    label: 'Cármides · 156b–157c',
    source: 'Fuente: diálogo platónico, narración atribuida por Sócrates a un médico tracio.',
    nodes: [
      { title: 'Los ojos', body: 'El malestar de los ojos obliga a considerar su conexión con la cabeza.' },
      { title: 'La cabeza', body: 'No se cura separada de la situación del cuerpo entero.' },
      { title: 'El cuerpo', body: 'Según el relato, para cuidar su salud debe atenderse al alma.' },
      { title: 'El alma', body: 'Los buenos discursos o ensalmos formarían sensatez (sōphrosýnē), preparando el cuidado corporal.' }
    ]
  },
  {
    title: 'Del diagnóstico al aprendizaje de sí',
    label: 'Reconstrucción docente',
    source: 'Síntesis de la explicación de clase: no es una secuencia literal de Sobre la dieta.',
    nodes: [
      { title: 'Escuchar el malestar', body: 'Un síntoma no se reduce automáticamente a una parte aislada.' },
      { title: 'Indagar hábitos', body: 'Alimentación, actividad, descanso y circunstancias de la vida.' },
      { title: 'Comprender', body: 'El médico explica; la persona participa y conoce su situación.' },
      { title: 'Cuidarse y revisar', body: 'El aprendizaje puede transformar prácticas, observando resultados y buscando atención cuando se requiera.' }
    ]
  },
  {
    title: 'Dos maneras de ejercer la medicina',
    label: 'Leyes · IV, 720a–e',
    source: 'Contraste expuesto en Leyes sobre la desigual práctica con personas esclavizadas y libres.',
    nodes: [
      { title: 'Paciente esclavizado', body: 'Atención apresurada y orden unilateral, según el retrato crítico del diálogo.' },
      { title: 'Médico autoritario', body: 'Prescribe sin examinar discursivamente con la persona enferma.' },
      { title: 'Paciente libre', body: 'Se le escucha, se aprende de su experiencia y se le ofrecen razones.' },
      { title: 'Médico educador', body: 'Investiga, explica y procura persuasión y consentimiento antes de prescribir.' }
    ]
  }
]

function SectionHeading({ number, kicker, children }) {
  return <header className="eth10-heading eth15-heading">
    <span>{number}</span><div><p>{kicker}</p><h2>{children}</h2></div>
  </header>
}
function NavigateSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function EthicsClass15Oct() {
  const [pathway, setPathway] = useState(0)
  const current = pathways[pathway]
  return <main className="ethicsx-page eth10-page eth15-page">
    <div className="ethicsx-meander" aria-hidden="true" />
    <nav className="ethicsx-nav eth10-nav" aria-label="Navegación de Ética">
      <Link to="/semestre/5/etica">← Ética · Escuelas clásicas</Link>
      <Link to="/" className="ethicsx-brand"><span>Φ</span>Philosophia</Link>
      <span>FI194 · XV · X · MMXXVI</span>
    </nav>
    <header className="ethicsx-hero eth10-hero eth15-hero">
      <div className="ethicsx-columns" aria-hidden="true"><span/><span/><span/><span/><span/></div>
      <div className="ethicsx-pediment" aria-hidden="true"/>
      <div className="ethicsx-ghost eth15-ghost" aria-hidden="true">σωφροσύνη</div>
      <div className="ethicsx-hero-inner eth10-hero-inner">
        <p className="ethicsx-kicker">ETHOS / LECTIO · XV OCTOBRIS · MMXXVI</p>
        <div className="ethicsx-medallion" aria-hidden="true">Ψ</div>
        <h1>Ética <em>La medicina del alma y el cuidado de sí</em></h1>
        <p className="ethicsx-lead eth10-lead">Cármides, templanza, médicos hipocráticos y una pregunta tan antigua como difícil: ¿curar un cuerpo es también enseñar a vivir?</p>
        <div className="ethicsx-question eth10-question">
          <span>Quaestio rectora</span>
          <strong>¿Es suficiente combatir un síntoma o necesitamos comprender y cuidar la vida de la persona?</strong>
        </div>
        <div className="ethicsx-meta eth10-meta">
          <div><span>Fecha</span><strong>15 oct · 2026</strong></div>
          <div><span>Texto leído</span><strong>Cármides 153a–157d</strong></div>
          <div><span>Tradición</span><strong>Medicina griega</strong></div>
          <div><span>Horizonte</span><strong>Estoicismo</strong></div>
        </div>
      </div>
    </header>
    <div className="eth15-ribbon" aria-label="Tres registros de información">
      <span><i className="eth15-dot text"/> Texto antiguo</span>
      <span><i className="eth15-dot class"/> Comentario de clase</span>
      <span><i className="eth15-dot check"/> Verificación externa</span>
    </div>
    <div className="eth10-layout eth15-layout">
      <aside className="eth10-index eth15-index">
        <p>Index lectionis</p>
        {contents.map(([n,id,t])=><button type="button" key={id} onClick={()=>NavigateSection(id)}><span>{n}</span><b>{t}</b></button>)}
        <a href={SOURCES[0].url} target="_blank" rel="noopener noreferrer" className="eth15-reference">Cármides · fuente primaria ↗</a>
      </aside>
      <article className="eth10-article eth15-article">
        <section id="punto">
          <SectionHeading number="01" kicker="Problema / aporía">La templanza frente a la experiencia humana</SectionHeading>
          <p className="eth10-prose">La sesión continúa la conversación sobre la vergüenza moral, los vicios y los límites de los ideales de autocontrol. El profesor presenta el problema de si el ser humano puede actuar enteramente por razón y mantenerse imperturbable ante el placer, el deseo, la ira o la tristeza. La pregunta anticipa el tratamiento del estoicismo, pero no constituye una exposición completa y definitiva de esa escuela.</p>
          <p className="eth10-prose">Como contrapunto, se recurre al Sócrates narrado por Platón: un hombre con experiencia militar, admirado por los jóvenes, capaz de discutir sobre la virtud, que sin embargo reconoce una fuerte conmoción cuando conoce a Cármides. La clase explora el efecto cómico e incómodo de este contraste y pregunta si la virtud puede consistir sencillamente en no sentir nada.</p>
          <div className="eth15-premise"><span>Tensión del día</span><strong>Dominarse no equivale a desconocer los deseos; cuidar la salud tampoco equivale a aplicar un remedio aislado.</strong><small>Formulación editorial que relaciona los dos grandes problemas discutidos.</small></div>
        </section>

        <section id="socrates">
          <SectionHeading number="02" kicker="Cármides · 153a–156a">El soldado que pierde la compostura</SectionHeading>
          <p className="eth10-prose">El diálogo comienza con el regreso de Sócrates de Potidea. En la palestra sus conocidos le preguntan por el combate; luego surge el tema de los jóvenes que destacan en belleza y sabiduría. Critias presenta a Cármides, perteneciente al círculo familiar de Platón y emparentado con Solón. La clase cuestiona la expectativa antigua de que un buen linaje asegure cualidades morales.</p>
          <div className="eth15-episode-grid">
            <div><span>153a–155a</span><h3>Regreso y aparición</h3><p>El militar admirado regresa a la conversación filosófica. Critias anuncia al joven hermoso; se habla de su origen y disposición intelectual.</p></div>
            <div><span>155b–155e</span><h3>El dolor de cabeza</h3><p>Cármides llega porque le han prometido un médico. Los presentes disputan el asiento cercano. Sócrates admite un desconcierto que pone en crisis su aplomo.</p></div>
            <div><span>155e–156a</span><h3>Hierba y encantamiento</h3><p>Para el dolor de cabeza Sócrates presenta una hoja medicinal inseparable de un ensalmo. El interés de Cármides abre el diálogo filosófico.</p></div>
          </div>
          <p className="eth10-prose">El profesor comparó esta vulnerabilidad con el relato de Alcibíades en <em>Banquete</em>, donde Sócrates resiste una tentativa de seducción. Insistió en la dificultad de conciliar ambas representaciones. También se discutieron críticamente las diferencias de edad y la sexualidad masculina en la Atenas antigua; ese análisis contemporáneo no debe confundirse con la voz normativa del autor.</p>
          <div className="eth15-annotation"><b>Lectura crítica</b><p>Que la escena tenga un tono divertido o «patético», como se comentó, no prueba que el <em>Cármides</em> sea un texto satírico ni apócrifo. La pregunta filosófica por la <em>sōphrosýnē</em> se abre a través del propio desconcierto del personaje.</p></div>
        </section>

        <section id="ensalmo">
          <SectionHeading number="03" kicker="Cármides · 156b–157c">Una medicina que considera el todo</SectionHeading>
          <p className="eth10-prose">Sócrates explica que un remedio para los ojos no basta sin cuidar la cabeza; tampoco la cabeza debe curarse sin atender al cuerpo. Después refiere una enseñanza aprendida de un médico <strong>tracio</strong>, ligado a <strong>Zalmoxis</strong>: el cuerpo requiere atención al alma, y los «ensalmos» son descritos como buenos discursos que promueven sensatez.</p>
          <p className="eth10-prose">En clase, el «ensalmo» se interpretó como discurso formativo: la palabra no es sólo información técnica, sino una invitación a examinar los hábitos, el carácter y la manera de vivir. El profesor lo relacionó con máximas antiguas, exhortaciones y la herencia de la sabiduría griega. Esa comparación corresponde a su explicación, no a una lista de géneros desarrollada por Platón en el pasaje.</p>
          <div className="eth15-quote"><strong>Precisión filológica</strong><p>La figura evocada es el médico de Zalmoxis, asociado a Tracia. La referencia a Egipto en la discusión no describe lo que dice este pasaje. Además, <em>el alma sana facilita el tratamiento corporal</em> no significa <em>la virtud cura por sí sola toda enfermedad</em>.</p></div>
        </section>

        <section id="hipocrates">
          <SectionHeading number="04" kicker="Corpus Hippocraticum">«Sobre la dieta»: un régimen entero de vida</SectionHeading>
          <p className="eth10-prose">El profesor presenta los <strong>tratados hipocráticos</strong> como un legado médico acumulativo: observaciones de enfermos, contraste entre indicaciones heredadas y resultados, corrección de prácticas y transmisión de experiencias. No deben atribuirse indiscriminadamente todos estos escritos al Hipócrates histórico ni equipararse sin matices al método experimental contemporáneo.</p>
          <p className="eth10-prose">El tratado <em>Sobre la dieta</em> —<em>Perì diaítēs</em>— permite estudiar un concepto más amplio que la comida. <em>Díaita</em> remite al régimen de vida: alimentación, ejercicios, descansos y costumbres que rodean la salud. La sesión utiliza la obra como referencia interpretativa; <strong>no consta que sus cuatro libros se hayan leído</strong>.</p>
          <div className="eth15-lexicon">
            <article><span>δίαιτα</span><h3>Díaita</h3><p>Un régimen de vida y de hábitos, no una lista reductiva de alimentos permitidos.</p></article>
            <article><span>σωφροσύνη</span><h3>Sōphrosýnē</h3><p>Sensatez o moderación; virtud cuya naturaleza examina el <em>Cármides</em>.</p></article>
            <article><span>ἐπῳδή</span><h3>Epōdḗ</h3><p>Ensalmo o encantamiento, reformulado en el diálogo como buen discurso formativo.</p></article>
          </div>
        </section>

        <section id="modelos">
          <SectionHeading number="05" kicker="Leyes · IV, 720a–e">Curar sin dialogar o enseñar a comprender</SectionHeading>
          <p className="eth10-prose">La clase distinguió dos maneras de atención médica en una sociedad atravesada por la esclavitud: una intervención unilateral, en la que se da un remedio sin diálogo, y una relación con el enfermo libre, a quien se le explica lo que ocurre para que participe en el cuidado. La formulación textual más clara está en <strong>Platón, <em>Leyes</em> IV, 720a–e</strong>, no demostrablemente en <em>Sobre la dieta</em>.</p>
          <div className="eth15-doctors">
            <article><span>Modelo 1 · desigualdad</span><h3>Paciente esclavizado</h3><p>En la descripción platónica, médicos esclavizados atienden a otros esclavizados, prescriben deprisa y no conversan ampliamente con ellos. La relación no reconoce una participación equivalente de la persona.</p></article>
            <article><span>Modelo 2 · persuasión</span><h3>Paciente libre</h3><p>Se pregunta, se explica, se escucha al paciente y se procura persuadirlo antes de prescribir. El médico puede adquirir una función <strong>educativa</strong>.</p></article>
          </div>
          <p className="eth10-prose">El profesor resume este segundo horizonte con la fórmula <strong>«médico de sí mismo»</strong>: aprender de la enfermedad, conocer las propias prácticas y asumir responsabilidades. Es una síntesis pedagógica de la clase. La analogía oral de tratar al esclavo «como a un animal» se comprende como crítica de un orden jerárquico; no se ofrece aquí como una indicación médica ni como equivalencia moral.</p>
        </section>

        <section className="eth15-diagram-section" aria-labelledby="eth15-diagram-title">
          <div className="eth15-diagram-header"><span>Schema studii · 2D</span><h2 id="eth15-diagram-title">Tres mapas para estudiar la clase</h2><p>Seleccione una relación. Los nodos distinguen contenido del diálogo antiguo y reconstrucciones usadas para estudiar; no representan citas literales.</p></div>
          <div className="eth15-diagram-tabs" role="group" aria-label="Cambiar esquema">
            {pathways.map((p,i)=><button type="button" key={p.label} className={i===pathway?'selected':''} aria-pressed={i===pathway} onClick={()=>setPathway(i)}>{i+1}. {p.label}</button>)}
          </div>
          <div className="eth15-diagram-panel" aria-live="polite">
            <div className="eth15-diagram-panel-heading"><span>{current.label}</span><h3>{current.title}</h3></div>
            <div className="eth15-diagram-cells">
              {current.nodes.map((node,i)=><div className="eth15-diagram-cell" key={node.title}><span className="eth15-diagram-number">0{i+1}</span><h4>{node.title}</h4><p>{node.body}</p></div>)}
            </div>
            <p className="eth15-diagram-source">{current.source}</p>
          </div>
        </section>

        <section id="mujeres">
          <SectionHeading number="06" kicker="Problema histórico">¿Quién tenía voz como paciente?</SectionHeading>
          <p className="eth10-prose">Ante una pregunta estudiantil, la clase distinguió mujeres esclavizadas, <em>hetairas</em> y esposas en la sociedad griega, señalando la subordinación de las mujeres y la centralidad de la casa para muchas atenienses. La cuestión filosófica es poderosa: <strong>¿puede haber medicina educativa cuando a parte de la población no se le reconoce voz?</strong></p>
          <p className="eth10-prose">La clasificación mencionada no debe tomarse como una tipología médica universal de toda Grecia: <em>Leyes</em> 720a–e habla de personas esclavizadas y libres, no establece tres tratamientos de mujeres. Tampoco todas las posiciones de Platón sobre las mujeres se reducen a la reproducción: en <em>República</em> V propone participación y educación para algunas mujeres guardianas, aunque en un marco que no alcanza la igualdad contemporánea.</p>
          <div className="eth15-annotation"><b>Frontera de evidencia</b><p>Lo dicho por el profesor describe jerarquías sociales e impulsa la pregunta moral. Las generalizaciones sobre toda mujer o toda polis no pueden darse por demostradas mediante el pasaje leído.</p></div>
        </section>

        <section id="vida">
          <SectionHeading number="07" kicker="Discusión contemporánea">Salud, vínculos y condiciones de vida</SectionHeading>
          <p className="eth10-prose">Se comparó el cuidado amplio con un caso hipotético: un dispositivo que generaría bienestar subjetivo mientras el paciente seguiría viviendo con precariedad, aislamiento o relaciones dañadas. La objeción del profesor no fue que aliviar síntomas carezca de valor, sino que la experiencia de sentirse bien no reemplaza necesariamente la solución de problemas materiales, sociales o personales.</p>
          <p className="eth10-prose">La clase extendió ese razonamiento al estrés, la depresión, las relaciones familiares, los cuidados infantiles y la paternidad: cuidar no sólo implica aprender sobre uno mismo, sino hacer posible una vida digna y reconocer los cuidados como responsabilidad compartida. Se debatió también el escaso reconocimiento social o económico de ciertas profesiones y los límites de la respuesta estoica de indiferencia frente a lo que escapa al control individual.</p>
          <div className="eth15-health"><strong>Verificación biomédica indispensable</strong><p>Durante la discusión se sugirió que emociones negativas podrían causar cáncer. <strong>Esto no está demostrado.</strong> El estrés crónico puede afectar la salud, pero la relación directa con el riesgo de cáncer sigue siendo incierta. Los hábitos saludables son valiosos, pero no sustituyen tratamientos médicos. Fuente: <a href="https://www.cancer.gov/about-cancer/coping/feelings/stress-fact-sheet" target="_blank" rel="noopener noreferrer">Instituto Nacional del Cáncer de EE. UU. ↗</a></p></div>
        </section>

        <section id="clasicos">
          <SectionHeading number="08" kicker="Cierre de la sesión">Leer sin imitar: el valor de los clásicos</SectionHeading>
          <p className="eth10-prose">La conclusión no fue convertir a los estudiantes en cínicos, estoicos o socráticos. Los textos antiguos permiten reconocer preguntas persistentes, examinar respuestas históricas, discutir prejuicios heredados y conservar distancia crítica. Un estudiante propuso comprender las ideas como «constelaciones» que pueden seguir ofreciendo problemas sin depender linealmente del tiempo. Otro recurrió a la imagen newtoniana de apoyarse en hombros de gigantes.</p>
          <p className="eth10-prose">El profesor cerró insistiendo en que los hábitos y las circunstancias afectan las acciones humanas y que incluso las elecciones que se presentan como racionales pueden tener motivaciones no conscientes o afectivas. Queda abierto el tema del <strong>estoicismo</strong>, especialmente la relación entre razón, emociones, deber y condiciones sociales.</p>
          <div className="eth15-premise"><span>Cuestión abierta</span><strong>¿Hasta dónde alcanza la responsabilidad individual de cuidarse cuando la enfermedad también depende de condiciones sociales que uno no controla?</strong><small>Pregunta editorial elaborada desde las intervenciones de la sesión.</small></div>
        </section>

        <section id="fuentes">
          <SectionHeading number="09" kicker="Bibliotheca">Libros identificados y enlaces de consulta</SectionHeading>
          <p className="eth10-prose">Se distinguen la lectura parcial efectivamente trabajada, las obras citadas de manera oral y los textos añadidos como verificación. No se acredita lectura íntegra ni propiedad de ejemplares.</p>
          <div className="eth15-source-grid">
            {SOURCES.map(s=><a key={s.title} href={s.url} target="_blank" rel="noopener noreferrer" className="eth15-source-card">
              <span>{s.tag} · {s.code}</span><h3>{s.title}</h3><p>{s.subtitle}</p><b>Consultar obra ↗</b>
            </a>)}
          </div>
          <div className="eth15-image-citation"><span>Referencia museística libre</span><p><a href="https://wellcomecollection.org/works/evjzmbnb" target="_blank" rel="noopener noreferrer">Wellcome Collection · Busto de Hipócrates (PDM) ↗</a>. Imagen curatorial identificada; no se incorpora aquí archivo de terceros sin revisar el recurso concreto.</p></div>
          <div className="eth15-closing">No se registró una nueva consigna ni fecha de entrega en esta clase. <Link to="/semestre/5/etica/clase/13-octubre">Volver a la lectura anterior: Luciano ↗</Link></div>
        </section>
      </article>
    </div>
  </main>
}
