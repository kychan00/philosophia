import { Link } from 'react-router'
import './EthicsClass10Sep.css'
import './EthicsClass29Oct.css'

const sections = [
  [
    "confianza",
    "Celos, confianza y traición",
    "La clase comienza con una pregunta sobre el origen de la ira. Los celos se presentan como ejemplo, pero el problema no se restringe a la pareja: amigos y familiares también pueden quebrantar la confianza. El daño de una persona cercana puede doler más que el de un desconocido porque esperamos de ella reciprocidad, honestidad y cuidado. El deseo inicial no es destruir al otro, sino que no hubiera ocurrido la traición o la injusticia. La discusión permite distinguir ese deseo legítimo de la reacción vengativa."
  ],
  [
    "lectura",
    "Séneca: la ira como locura transitoria",
    "Se lee el comienzo de Sobre la ira (De ira), libro I, dirigido a Novato. Séneca caracteriza la ira como una pasión desbordada que desea dolor y castigo, y que puede arrastrar consigo al vengador. La comparación con la locura es moral y filosófica: describe la pérdida del dominio de sí, el olvido de las obligaciones, la obstinación, la resistencia a los consejos y la incapacidad de distinguir lo justo y lo verdadero. No debe confundirse con un diagnóstico psiquiátrico. El docente subraya que la venganza puede sacrificar incluso los vínculos y bienes que se pretendía defender."
  ],
  [
    "tragedia",
    "Tragedia y venganza",
    "Se recuerda el motivo de Medea, que hiere también aquello que ama al buscar vengarse, y se menciona a Próspero de Shakespeare como ejemplo de la tensión entre una vida satisfactoria y el deseo de ajustar cuentas. Estos ejemplos literarios permiten pensar cómo una finalidad vengativa puede dominar las demás finalidades de la existencia. Los detalles narrativos de la conversación no se adoptan como descripción fiel de una edición concreta."
  ],
  [
    "cuerpo",
    "La ira se manifiesta en el cuerpo",
    "La lectura enumera señales visibles: mirada amenazante, rostro enrojecido, respiración agitada, dientes apretados, manos inquietas, movimientos bruscos y habla entrecortada. Séneca contrasta la dificultad de ocultar la ira con otras pasiones y compara las señales con las de animales a punto de atacar. La discusión destaca la precisión de esta observación y la conveniencia de no actuar irreflexivamente bajo una emoción intensa. El profesor añade que una reacción de enojo puede resultar defensiva en determinadas situaciones; esta observación crítica no equivale a la tesis de Séneca."
  ],
  [
    "castigo",
    "El castigo, el ultraje y la justicia",
    "Se examina la definición de la ira como deseo de castigar a quien se considera responsable de un ultraje, y se compara con una definición atribuida a Aristóteles. El deseo de devolver un daño no demuestra que hacerlo sea justo ni que quien lo desea esté facultado para castigar. La discusión menciona también reacciones desproporcionadas ante afrentas aparentes, espectadores que toman un enfrentamiento como ofensa propia y niños que desean castigar a aquello a lo que atribuyen su dolor. Los ejemplos de conflictos colectivos y violencia muestran que el problema excede el ámbito individual. No se adopta como conclusión que todo enojo sea injustificado."
  ],
  [
    "responsabilidad",
    "Voluntariedad y responsabilidad moral",
    "La sesión distingue entre un acto realizado bajo una pasión y una conducta condicionada por una posible enfermedad. Se discute qué grado de control y deliberación permite atribuir responsabilidad. No se establece una regla clínica ni jurídica general: un diagnóstico por sí solo no demuestra ausencia de responsabilidad o peligrosidad. Los casos discutidos no se identifican ni se reconstruyen como hechos comprobados. El problema filosófico es cómo distinguir las condiciones de una acción, su imputación y el deseo de castigar."
  ],
  [
    "animales",
    "Impulso animal y pasión humana",
    "Séneca sostiene que los animales no tienen ira en sentido humano estricto, aunque presentan impulsos semejantes: les atribuye reacciones intensas pero no la deliberación racional que supone el deseo humano de venganza. Se examina la relación entre razón, previsión, memoria de la ofensa y castigo. El profesor cuestiona la separación tajante y menciona estudios comparativos del comportamiento de Desmond Morris, además de la adaptación de animales en cautiverio. Se considera cómo el entorno puede alterar la conducta. Estas observaciones son preguntas y ejemplos discutidos, no conclusiones etológicas verificadas."
  ],
  [
    "examen",
    "Lectura crítica del estoicismo y examen de sí",
    "El docente pide leer críticamente el estoicismo, sin convertirlo en receta de dureza o represión de sentimientos. Considera valioso examinar los propios afectos: reconocer qué duele, qué nos afecta y de qué somos capaces, sin engañarnos acerca de nosotros mismos. Contrasta este ejercicio continuo con la duda de Descartes, mencionada como comparación, no como lectura asignada. La pregunta es cómo entender un sentimiento antes de convertirlo en acción."
  ],
  [
    "cultura",
    "Freud: cultura, prohibición y sublimación",
    "Una intervención relaciona el comportamiento en cautiverio con El malestar en la cultura de Freud. Se discute cómo las normas culturales limitan la satisfacción de ciertos deseos y pueden generar frustración; también cómo pueden ofrecer vías de elaboración, en vez de limitarse a prohibir. Se menciona la sublimación mediante el arte y se comentan las arañas y otras esculturas de Louise Bourgeois como ejemplo interpretativo. No se atribuyen deseos privados a la artista como hechos biográficos. La discusión se desplaza a las prohibiciones y su capacidad de revelar prácticas, conflictos y expectativas de una cultura; se ejemplifica con letreros y barreras en espacios públicos."
  ],
  [
    "iracundia",
    "Ira e iracundia",
    "Al regresar a la lectura de Séneca, se diferencia la ira actual de la disposición habitual a enojarse, la iracundia. Se comentan distintos modos de expresión: gritos, insultos, quejas, gestos, hostilidad más contenida o persistente. Una persona puede tener una reacción puntual sin que ello defina todo su carácter; la distinción ayuda a examinar tanto el episodio como la disposición repetida."
  ]
]
export default function EthicsClass03Nov() {
  const items = [...sections.map(([id, title]) => [id, title]), ['esquema', 'Esquema conceptual'], ['tarea', 'Lectura y actividad']]
  return <main className="ethicsx-page eth10-page eth29-page">
    <div className="ethicsx-meander" aria-hidden="true" />
    <nav className="ethicsx-nav eth10-nav" aria-label="Navegación de Ética">
      <Link to="/semestre/5/etica">← Ética · Escuelas clásicas</Link>
      <Link to="/" className="ethicsx-brand"><span>Φ</span>Philosophia</Link>
      <span>FI194 · III · XI · MMXXVI</span>
    </nav>
    <header className="ethicsx-hero eth10-hero eth29-hero">
      <div className="ethicsx-columns" aria-hidden="true"><span/><span/><span/><span/><span/></div>
      <div className="ethicsx-pediment" aria-hidden="true" />
      <div className="ethicsx-ghost eth29-ghost" aria-hidden="true">ἦθος</div>
      <div className="ethicsx-hero-inner eth10-hero-inner">
        <p className="ethicsx-kicker">ETHOS · LECTIO · III NOVEMBRIS · MMXXVI</p>
        <div className="ethicsx-medallion" aria-hidden="true">Σ</div>
        <h1>Ética <em>Séneca: ira, venganza y dominio de sí</em></h1>
        <p className="ethicsx-lead eth10-lead">Del ultraje percibido a la respuesta moral: lectura crítica de <em>Sobre la ira</em>, libro I.</p>
        <div className="ethicsx-question eth10-question"><span>Quaestio rectora · reconstrucción editorial</span><strong>¿Cómo comprender la ira sin confundir el deseo de venganza con la justicia?</strong></div>
        <div className="ethicsx-meta eth10-meta"><div><span>Fecha</span><strong>3 nov · 2026</strong></div><div><span>Curso</span><strong>Ética · FI194</strong></div><div><span>Tradición</span><strong>Estoicismo</strong></div><div><span>Lectura</span><strong>De ira · I</strong></div></div>
      </div>
    </header>
    <div className="eth29-method-band"><span><b className="eth29-dot" /> Lectura y discusión de clase</span><span><b className="eth29-dot eth29-dot-gold" /> Reconstrucción editorial</span></div>
    <div className="eth10-layout eth29-layout">
      <aside className="eth10-index eth29-index" aria-label="Índice de la sesión"><p>Index lectionis</p>{items.map(([id, label], i) => <button key={id} type="button" onClick={() => document.getElementById('eth03nov-' + id)?.scrollIntoView({behavior:'smooth', block:'start'})}><span>{String(i+1).padStart(2,'0')}</span><b>{label}</b></button>)}</aside>
      <article className="eth10-article eth29-article">
        {sections.map(([id, label, prose], i) => <section key={id} id={'eth03nov-' + id}>
          <header className="eth10-heading eth29-heading"><span>{String(i+1).padStart(2,'0')}</span><div><p>Lectio · {i<4?'Lectura y afectos':i<8?'Responsabilidad y examen':'Cultura y carácter'}</p><h2>{label}</h2></div></header>
          <p className="eth10-prose">{prose}</p>
        </section>)}
        <section id="eth03nov-esquema"><header className="eth10-heading eth29-heading"><span>11</span><div><p>Schema · elaboración editorial</p><h2>De la ofensa a la respuesta moral</h2></div></header>
          <figure className="eth29-figure"><img src={import.meta.env.BASE_URL + 'images/etica/2026-11-03/ira-y-deliberacion.svg'} alt="La confianza quebrantada puede suscitar ira; el deseo de castigo puede producir daño, mientras que el examen del afecto abre la posibilidad de deliberar." loading="lazy" /><figcaption>Ilustración vectorial original de PHILOSOPHIA, 3 de noviembre de 2026 · esquema editorial; no reproduce una figura de Séneca.</figcaption></figure>
          <p className="eth10-prose">Confianza → injusticia percibida → dolor e ira → dos respuestas posibles: deseo de castigo (riesgo de pérdida del dominio de sí y daño propio y ajeno) o examen del afecto (deliberación y respuesta justificada). Es una reconstrucción de estudio, no una secuencia necesaria ni una cita de Séneca.</p>
        </section>
        <section id="eth03nov-tarea"><header className="eth10-heading eth29-heading"><span>12</span><div><p>Praxis · trabajo de clase</p><h2>Lectura y actividad</h2></div></header><div className="eth29-task"><span>Lectura pendiente</span><strong>Terminar De ira I y preparar un comentario</strong><p>Completar las páginas restantes del libro I de Sobre la ira (se mencionan unas dos o tres); elegir uno de los textos de la tabla compartida, registrar el nombre y preparar su comentario para compartir con el grupo. No consta plazo firme, calificación ni reparto definitivo. Al cierre se habla de posibles suspensiones del jueves y viernes; no queda confirmada la cancelación del 5 de noviembre.</p></div></section>
        <footer className="eth29-footer"><p><strong>Nota editorial.</strong> Se distingue la lectura de Séneca de las comparaciones y las discusiones contemporáneas. No se asignan páginas ni citas literales sin edición cotejada. Se omiten detalles personales y afirmaciones no verificadas.</p><Link to="/semestre/5/etica">← Volver al archivo de Ética</Link></footer>
      </article>
    </div><div className="ethicsx-meander" aria-hidden="true" />
  </main>
}
