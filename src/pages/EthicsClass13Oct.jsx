import { Link } from 'react-router'
import './EthicsClass10Sep.css'
import './EthicsClass13Oct.css'

const route = '/semestre/5/etica/clase/13-octubre'
const archiveUrl = 'https://archive.org/details/luciano-17-u-el-banquete-o-los-lapitas/page/n18/mode/1up'

const index = [
  ['00', 'problema', 'La cuestión ética'],
  ['01', 'civica', 'Apertura cívica'],
  ['02', 'carta', 'La carta y la disputa'],
  ['03', 'nucleo', 'Saber frente a vivir'],
  ['04', 'placer', 'Indiferencia y placer'],
  ['05', 'desenlace', 'Los lapitas: desenlace'],
  ['06', 'cinismo', 'La función de la sátira'],
  ['07', 'estoicismo', 'Debate contemporáneo'],
  ['08', 'esquema', 'Esquema y cierre'],
]

const episodes = [
  {
    range: '§§27–29',
    title: 'Hetémocles: la invitación que no llega',
    body: 'El estoico protesta por no haber sido invitado y ordena rechazar una compensación en comida. La pretendida indiferencia hacia el banquete contrasta con el disgusto ante el desaire.',
    clue: 'Prestigio y resentimiento',
  },
  {
    range: '§§30–33',
    title: 'La controversia abandona la razón',
    body: 'Cleodemo y Zenótemis se acusan, se insultan y terminan en agresiones. El vocabulario filosófico continúa, pero la disputa ya no busca esclarecer una cuestión.',
    clue: 'Del argumento a la afrenta',
  },
  {
    range: '§§34–35',
    title: 'El juicio de Licino',
    body: 'El narrador opone la moderación de los asistentes comunes a la conducta de los sabios profesionales. Ni siquiera Alcidamante, el cínico, escapa a la caricatura.',
    clue: 'El centro ético de la lectura',
  },
  {
    range: '§§36–37',
    title: 'Riqueza, honorarios y placeres',
    body: 'Cleodemo denuncia a quienes declaran indiferente la riqueza, pero buscan el dinero de los poderosos; Hermón observa la contradicción entre censurar el placer y perseguirlo.',
    clue: 'Incongruencia doctrinal',
  },
]

const disaster = [
  ['38–41', 'El diálogo imposible', 'Ión promete debatir serenamente y pronuncia un discurso sobre el matrimonio particularmente inoportuno para los recién casados.'],
  ['42–43', 'La disputa por la comida', 'Dífilo reclama una ración ajena; Zenótemis arrebata la gallina más grande y el conflicto organiza bandos.'],
  ['44–45', 'La batalla', 'La rivalidad se vuelve una pelea general con heridas graves: el banquete recuerda el enfrentamiento de lapitas y centauros.'],
  ['46', 'La oscuridad', 'Se describen abusos y un intento de agresión contra la flautista. La gravedad de lo narrado no desaparece por tratarse de sátira.'],
  ['47–48', 'El juicio final', 'Los heridos abandonan la fiesta. Licino advierte del peligro de convivir con personajes que se presentan como sabios.'],
]

const steps = [
  ['01', 'Apariencia', 'El filósofo ostenta una reputación de virtud.'],
  ['02', 'Discurso', 'Invoca escuelas, autoridades y doctrinas.'],
  ['03', 'Práctica', 'Su conducta revela deseo de prestigio, placer o ventaja.'],
  ['04', 'Juicio', 'La distancia entre vida y palabra exige examen ético.'],
]

function H({ number, label, children }) {
  return <header className="eth10-heading eth13-heading">
    <span>{number}</span>
    <div><p>{label}</p><h2>{children}</h2></div>
  </header>
}

function Jump({ id }) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function EthicsClass13Oct() {
  return <main className="ethicsx-page eth10-page eth13-page">
    <div className="ethicsx-meander" aria-hidden="true" />

    <nav className="ethicsx-nav eth10-nav" aria-label="Navegación de Ética">
      <Link to="/semestre/5/etica">← Ética · Escuelas clásicas</Link>
      <Link to="/" className="ethicsx-brand"><span>Φ</span>Philosophia</Link>
      <span>FI194 · XIII · X · MMXXVI</span>
    </nav>

    <header className="ethicsx-hero eth10-hero eth13-hero">
      <div className="ethicsx-columns" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      <div className="ethicsx-pediment" aria-hidden="true" />
      <div className="ethicsx-ghost eth10-ghost eth13-ghost" aria-hidden="true">ἦθος</div>
      <div className="ethicsx-hero-inner eth10-hero-inner">
        <p className="ethicsx-kicker">ETHOS / LECTIO · XIII OCTOBRIS · MMXXVI</p>
        <div className="ethicsx-medallion" aria-hidden="true">Λ</div>
        <h1>Ética <em>Luciano: sátira y coherencia de vida</em></h1>
        <p className="ethicsx-lead eth10-lead">
          De un banquete de filósofos a una pregunta incómoda: ¿puede existir sabiduría
          sin concordancia entre el discurso y la manera de vivir?
        </p>
        <div className="ethicsx-question eth10-question">
          <span>Quaestio rectora</span>
          <strong>¿Qué queda de la virtud cuando quienes la predican actúan contra ella?</strong>
        </div>
        <div className="ethicsx-meta eth10-meta">
          <div><span>Fecha</span><strong>13 oct · 2026</strong></div>
          <div><span>Lectura</span><strong>§§ 27–48</strong></div>
          <div><span>Obra</span><strong>El banquete o los lapitas</strong></div>
          <div><span>Eje</span><strong>Ética y sátira</strong></div>
        </div>
      </div>
    </header>

    <div className="eth13-band" aria-label="Recorrido de la lectura">
      <span>Doctrina proclamada</span><b>→</b>
      <span>Acción observada</span><b>→</b>
      <strong>Contradicción</strong><b>→</b>
      <span>Juicio ético</span>
    </div>

    <div className="eth10-layout">
      <aside className="eth10-index eth13-index">
        <p>Index lectionis</p>
        {index.map(([number,id,label]) => <button key={id} type="button" onClick={() => Jump({id})}>
          <span>{number}</span><b>{label}</b>
        </button>)}
        <a className="eth13-side-source" href={archiveUrl} target="_blank" rel="noopener noreferrer">
          Fuente bilingüe ↗
        </a>
      </aside>

      <article className="eth10-article eth13-article">
        <section id="problema">
          <H number="00" label="Argumentum">La ciencia del bien no basta si no se vive bien</H>
          <p className="eth10-prose">
            El diálogo de Luciano reúne en una boda a personajes asociados con escuelas
            filosóficas diferentes. Las doctrinas que defienden contrastan cada vez más
            con sus propios excesos. La sesión leyó la parte final del relato, no la obra entera.
          </p>
          <div className="eth13-quote">
            <span>Luciano · §34 · Traducción facilitada</span>
            <blockquote>«para nada sirve aprender las ciencias, si no se ordena también la vida hacia el fin mejor».</blockquote>
            <small>El pasaje corresponde al juicio del narrador Licino, no a un aforismo genérico de todas las escuelas.</small>
          </div>
          <div className="eth13-status-grid">
            <div><span>Fuente primaria</span><strong>Luciano · §§27–48</strong><p>Lectura contrastada con el PDF bilingüe.</p></div>
            <div><span>Comentario de clase</span><strong>Cinismo y estoicismo</strong><p>Interpretaciones y críticas contemporáneas distinguidas del texto.</p></div>
            <div><span>Marco editorial</span><strong>Reconstrucción de estudio</strong><p>Esquemas y relaciones explicativos, no citas literales.</p></div>
          </div>
        </section>

        <section id="civica">
          <H number="01" label="In civitate">La clase comienza con preguntas sobre la vida pública</H>
          <p className="eth10-prose">
            Antes de leer se habló de protestas recientes, responsabilidades públicas,
            actuaciones policiales y dificultades en el acceso al agua en Jalisco. El grupo
            cuestionó la relación entre derechos, infraestructura, uso de recursos y
            obligaciones que no desaparecen con los cambios de administración.
          </p>
          <div className="eth10-grid two">
            <article><span>Derechos</span><h3>Manifestación y participación</h3>
              <p>¿Cómo distinguir el deber de las instituciones de la obediencia exigida a sus ciudadanos?</p>
            </article>
            <article><span>Responsabilidad pública</span><h3>Agua y servicio</h3>
              <p>Experiencias de desabasto dieron lugar a preguntas sobre planeación, negligencia y respuesta institucional.</p>
            </article>
          </div>
          <div className="eth10-note"><span>Frontera documental</span>
            <p>Las afirmaciones, cifras y responsabilidades discutidas son testimonios o valoraciones de clase; no se presentan como hechos verificados por esta página.</p>
          </div>
        </section>

        <section id="carta">
          <H number="02" label="Lectio / XXVII–XXXIII">La invitación omitida desata la disputa</H>
          <p className="eth10-prose">
            La carta de Hetémocles, introducida antes del §27, reclama un reconocimiento
            que el filósofo parece negar necesitar. Después, una discusión entre escuelas
            se convierte en rivalidad personal, acusaciones y agresiones. El profesor
            subrayó que discutir sin sostener un tema común degrada la posibilidad de dialogar.
          </p>
          <div className="eth13-episode-grid">
            {episodes.slice(0,2).map(item => <article key={item.range}>
              <span>{item.range}</span><h3>{item.title}</h3><p>{item.body}</p><small>{item.clue}</small>
            </article>)}
          </div>
        </section>

        <section id="nucleo">
          <H number="03" label="Lectio / XXXIV–XXXV">Los papeles se han invertido</H>
          <p className="eth10-prose">
            Licino observa que los invitados sin reputación filosófica se comportan con
            moderación; quienes ostentan el saber se exceden. La escena no perdona al
            cínico Alcidamante. La carta es comparada con la manzana de la Discordia
            lanzada en la boda de Peleo.
          </p>
          <div className="eth13-contrast">
            <div><span>Comensales corrientes</span><h3>Moderación</h3>
              <p>Comen sin provocar el conflicto y ven cómo se deshace la reputación de sus maestros.</p>
            </div>
            <div className="eth13-contrast-center" aria-hidden="true">≠</div>
            <div><span>Sabios del banquete</span><h3>Desmesura</h3>
              <p>Se ultrajan, compiten por el prestigio, consumen en exceso y terminan a golpes.</p>
            </div>
          </div>
          <div className="eth10-thesis"><span>Tesis de estudio</span>
            <strong>El prestigio de una doctrina no exime del examen de las acciones de quienes dicen practicarla.</strong>
          </div>
        </section>

        <section id="placer">
          <H number="04" label="Lectio / XXXVI–XXXVII">Condenan lo que después persiguen</H>
          <p className="eth10-prose">
            Cleodemo acusa a ciertos estoicos de declarar indiferente la riqueza y,
            sin embargo, buscar préstamos, ganancias y la compañía de los ricos.
            Hermón añade la incongruencia entre condenar el placer y esforzarse por gozarlo.
            Las respuestas de los implicados quedan atrapadas en reproches recíprocos.
          </p>
          <div className="eth13-duality">
            <div><small>Declaración</small><strong>«La riqueza es indiferente»</strong></div>
            <span aria-hidden="true">↔</span>
            <div><small>Comportamiento satirizado</small><strong>Prestigio, intereses y honorarios</strong></div>
          </div>
          <div className="eth10-warning"><span>Precisión doctrinal</span>
            <strong>Una acusación formulada por un personaje satírico no equivale a una refutación histórica de toda la ética estoica.</strong>
          </div>
        </section>

        <section id="desenlace">
          <H number="05" label="Lectio / XXXVIII–XLVIII">De una gallina a la batalla de los lapitas</H>
          <p className="eth10-prose">
            Ión intenta devolver la conversación a un supuesto diálogo ordenado,
            pero su intervención en torno al matrimonio resulta inoportuna. Las
            disputas por la comida desembocan en enfrentamientos graves. Luciano
            hace que la distancia entre el lenguaje filosófico y el obrar llegue a su límite.
          </p>
          <ol className="eth13-storyline">
            {disaster.map(([range,title,body]) => <li key={range}>
              <span>§§ {range}</span><div><h3>{title}</h3><p>{body}</p></div>
            </li>)}
          </ol>
          <div className="eth13-editorial"><strong>El título no es ornamental.</strong>
            <p>La evocación de los lapitas y centauros alude a la batalla desatada en una celebración. La comparación intensifica la crítica de la violencia entre los supuestos sabios.</p>
          </div>
        </section>

        <section id="cinismo">
          <H number="06" label="Diatriba y sátira">La burla como forma de crítica moral</H>
          <p className="eth10-prose">
            En la conversación se defendió que la provocación y el sentido del humor de
            los cínicos permiten exhibir excesos y contradicciones, también ante los
            poderosos. Surgieron ejemplos hipotéticos de gestos públicos alrededor
            de la protesta por el agua.
          </p>
          <div className="eth13-feature">
            <span>Lectura con cuidado</span>
            <h3>Luciano no convierte al cínico en un héroe intocable.</h3>
            <p>Alcidamante también es objeto de burla. La introducción editorial presenta la obra como una crítica amplia de las conductas humanas, no como elogio exclusivo de una escuela.</p>
          </div>
        </section>

        <section id="estoicismo">
          <H number="07" label="Discusión de aula">¿Estoicismo o una imagen comercial de la fortaleza?</H>
          <p className="eth10-prose">
            La parte final cuestiona versiones contemporáneas del estoicismo que identifican
            autodominio con frialdad, obediencia institucional o rendimiento. Se debatieron
            casos límite sobre deber, decisiones vitales y responsabilidad ante terceros:
            su función era problematizar la obediencia irreflexiva.
          </p>
          <div className="eth10-grid two">
            <article><span>Recepción contemporánea</span><h3>La coraza como identidad</h3>
              <p>La conversación distingue aceptar las circunstancias de exhibir una insensibilidad que no examina el daño a otros.</p>
            </article>
            <article><span>Deber y autoridad</span><h3>¿Cumplir basta?</h3>
              <p>Se problematizan situaciones en las que obedecer una orden puede entrar en conflicto con la deliberación y los vínculos humanos.</p>
            </article>
          </div>
          <div className="eth10-note"><span>Separación de fuentes</span>
            <p>Estas críticas y ejemplos proceden de la clase, no del diálogo de Luciano. Tampoco se presentan como descripción exhaustiva de lo que enseñaron los estoicos antiguos.</p>
          </div>
        </section>

        <section id="esquema">
          <H number="08" label="Schema ETHOS">De lo que se predica a lo que se hace</H>
          <div className="eth13-schema" role="img"
            aria-label="Esquema de estudio: prestigio sapiencial conduce a un discurso, que se contrasta con la conducta; la contradicción abre el juicio ético.">
            {steps.map((item,i) => <div className="eth13-schema-item" key={item[0]}>
              <span>{item[0]}</span><strong>{item[1]}</strong><p>{item[2]}</p>
              {i<steps.length-1 && <b aria-hidden="true">→</b>}
            </div>)}
          </div>
          <p className="eth13-caption">Reconstrucción pedagógica a partir de §§34–35. No es una relación deductiva textual formulada por Luciano.</p>
          <div className="eth13-end">
            <span>Conclusio</span>
            <h3>La lectura finaliza en el §48; la pregunta por la vida virtuosa sigue abierta.</h3>
            <p>El profesor anunció que se continuará con el estoicismo y que enviará una nueva lectura, pero no consta aquí el título ni una fecha de entrega.</p>
            <a href={archiveUrl} target="_blank" rel="noopener noreferrer">Consultar la obra · texto bilingüe ↗</a>
          </div>
          <div className="eth13-source">
            <strong>Fuentes y alcance</strong>
            <p>Luciano, <i>El banquete o los lapitas</i>, traducción y notas de Andrés Espinosa Alarcón, revisada por Alfonso Martínez Díez, PDF bilingüe de 25 páginas, §§27–48. La fecha aproximada de composición que aparece en su introducción pertenece al comentario editorial.</p>
            <p>Esta página distingue texto, comentario del aula y reconstrucción editorial. No presenta como corroboradas las afirmaciones actuales debatidas en clase.</p>
          </div>
          <div className="eth13-next">
            <Link to="/semestre/5/etica/clase/8-octubre">← Clase anterior · crítica cívica</Link>
            <Link to="/semestre/5/etica">Volver al índice de Ética →</Link>
            <Link to="/biblioteca">Biblioteca filosófica ↗</Link>
          </div>
        </section>
      </article>
    </div>

    <footer className="ethicsx-footer eth10-footer">
      <Link to="/semestre/5/etica">← Ética</Link>
      <span>λόγος · βίος · ἦθος</span>
      <span>{route} · MMXXVI</span>
    </footer>
    <div className="ethicsx-meander" aria-hidden="true" />
  </main>
}
