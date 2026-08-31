import { Link } from 'react-router'
import SubjectTasksPanel from '../components/SubjectTasksPanel'

const blocks = [
  ['I', 'Panorama general', '2 sesiones', 'Surgimiento histórico-social · planteamientos teóricos'],
  ['II', 'Fundamentos', '13 sesiones', 'Hegel · Marx · Lukács · Freud'],
  ['III', 'Teoría Crítica', '8 sesiones', 'Horkheimer · Adorno · Marcuse'],
]

const readings = [
  ['01', 'Reale · Antiseri', 'La Escuela de Frankfurt', 'Panorama general', true],
  ['02', 'G. W. F. Hegel', 'Prólogo de Fenomenología del espíritu', 'Dialéctica', true],
  ['03', 'Karl Marx', 'El trabajo enajenado', 'Enajenación', true],
  ['04', 'Karl Marx', 'El carácter fetichista de la mercancía y su secreto', 'Fetichismo', true],
  ['05', 'Georg Lukács', 'La cosificación y la consciencia del proletariado', 'Cosificación', true],
  ['06', 'Sigmund Freud', 'El malestar en la cultura', 'Proceso civilizatorio', true],
  ['07', 'Max Horkheimer', 'Teoría tradicional y teoría crítica', 'Teoría Crítica', true],
  ['08', 'Max Horkheimer', 'Medios y fines', 'Razón instrumental', false],
  ['09', 'Horkheimer · Adorno', 'Concepto de Ilustración', 'Dialéctica de la Ilustración', false],
  ['10', 'Herbert Marcuse', 'Las nuevas formas de control', 'Sociedad unidimensional', true],
]

const roots = [
  ['Hegel', 'dialéctica'],
  ['Marx', 'enajenación'],
  ['Lukács', 'cosificación'],
  ['Freud', 'malestar'],
]

export default function CriticalTheory() {
  return (
    <main className="ct-page">
      <nav className="ct-nav">
        <Link to="/semestre/5">← Quinto semestre</Link>
        <Link to="/" className="ct-brand"><span>Φ</span> Philosophia</Link>
        <span>FI265 · 2026-B</span>
      </nav>

      <header className="ct-hero">
        <div className="ct-ghost" aria-hidden="true">KRITIK</div>
        <div className="ct-hero-inner">
          <p className="ct-kicker">Theorie · Kritik · Gesellschaft</p>
          <div className="ct-seal">K</div>
          <h1>Teoría <em>Crítica</em></h1>
          <p className="ct-subtitle">Fundamentos</p>
          <p className="ct-lead">
            De las raíces filosóficas de la Escuela de Frankfurt a la crítica
            de la razón instrumental y de la sociedad unidimensional.
          </p>

          <div className="ct-thesis">
            <span>Horizonte</span>
            <strong>
              Comprender la sociedad como totalidad, identificar sus
              contradicciones y examinar críticamente las formas de dominación.
            </strong>
          </div>

          <div className="ct-meta">
            <div><span>Profesora</span><strong>Dinora Hernández López</strong></div>
            <div><span>Horas</span><strong>60 teóricas</strong></div>
            <div><span>Créditos</span><strong>8</strong></div>
            <div><span>Área</span><strong>Optativa abierta</strong></div>
          </div>
        </div>
      </header>

      <SubjectTasksPanel subjectCode="FI265" />

      <section className="ct-section">
        <header className="ct-heading">
          <span>I</span>
          <div>
            <p>Archivum lectionum</p>
            <h2>Clases</h2>
          </div>
        </header>

        <Link
          to="/semestre/5/teoria-critica/clase/18-agosto"
          className="ct-class-card"
        >
          <div className="ct-class-card-date">
            <strong>XVIII</strong>
            <span>VIII · MMXXVI</span>
          </div>

          <div className="ct-class-card-copy">
            <span>Primera clase · Encuadre</span>
            <h3>Clase del 18 de agosto</h3>
            <p>
              Presentación del curso, pluralidad filosófica,
              pensamiento dialéctico, transdisciplina, evaluación,
              uso de IA y preparación de la primera lectura.
            </p>
          </div>

          <div className="ct-class-card-enter">
            <span>Abrir clase</span>
            <b>↗</b>
          </div>
        </Link>
        <Link
          to="/semestre/5/teoria-critica/clase/20-agosto"
          className="ct-class-card"
        >
          <div className="ct-class-card-date">
            <strong>XX</strong>
            <span>VIII · MMXXVI</span>
          </div>
          <div className="ct-class-card-copy">
            <span>Segunda clase · Fundamentos</span>
            <h3>Clase del 20 de agosto</h3>
            <p>
              Delimitación de la Teoría Crítica, teoría tradicional frente a
              teoría crítica, genealogía Hegel–Marx–Lukács–Freud, historia de
              los conceptos e investigación interdisciplinaria.
            </p>
          </div>
          <div className="ct-class-card-enter">
            <span>Abrir clase</span><b>↗</b>
          </div>
        </Link>
        <Link
          to="/semestre/5/teoria-critica/clase/25-agosto"
          className="ct-class-card"
        >
          <div className="ct-class-card-date">
            <strong>XXV</strong>
            <span>VIII · MMXXVI</span>
          </div>
          <div className="ct-class-card-copy">
            <span>Tercera clase · Instituto y totalidad social</span>
            <h3>Clase del 25 de agosto</h3>
            <p>
              Conciencia de clase, fascismo, exilio, generaciones de Frankfurt,
              totalidad, transdisciplina, astrología, ideología, sociedad no
              reconciliada y paso hacia los conceptos centrales del curso.
            </p>
          </div>
          <div className="ct-class-card-enter">
            <span>Abrir clase</span><b>↗</b>
          </div>
        </Link>
        <Link
          to="/semestre/5/teoria-critica/clase/27-agosto"
          className="ct-class-card"
        >
          <div className="ct-class-card-date">
            <strong>XXVII</strong>
            <span>VIII · MMXXVI</span>
          </div>
          <div className="ct-class-card-copy">
            <span>Cuarta clase · Negatividad y razón</span>
            <h3>Clase del 27 de agosto</h3>
            <p>
              Dialéctica negativa, no-identidad, Hegel y reconciliación,
              contradicción social, propuesta negativa, Auschwitz, Dialéctica
              de la Ilustración, razón instrumental, industria cultural y
              sociedad unidimensional.
            </p>
          </div>
          <div className="ct-class-card-enter">
            <span>Abrir clase</span><b>↗</b>
          </div>
        </Link>
      </section>

      <section className="ct-section">
        <header className="ct-heading">
          <span>I</span><div><p>Agenda inmediata</p><h2>Tarea 1 · 18 de agosto</h2></div>
        </header>

        <div className="ct-task">
          <div className="ct-task-date"><strong>18</strong><span>AGO · 2026</span></div>
          <div>
            <p>100 puntos · Lectura 1 · Panorama</p>
            <h3>La Teoría Crítica de la Escuela de Frankfurt</h3>
            <p>
              Leer el programa y a Reale y Antiseri. Identificar:
              1) elementos histórico-sociales en el surgimiento de la
              Teoría Crítica y 2) principales planteamientos teóricos.
              Revisar también los anuncios previos y “Trabajo de clase”.
            </p>
          </div>
          <Link to="/tareas/teoria-critica/tarea-1">Abrir Tarea 1 ↗</Link>
        </div>
      </section>

      <section className="ct-section">
        <header className="ct-heading">
          <span>II</span><div><p>Genesis</p><h2>Escuela de Frankfurt</h2></div>
        </header>

        <div className="ct-four">
          <article><span>1920s</span><h3>Instituto</h3><p>Instituto para la Investigación Social de Frankfurt.</p></article>
          <article><span>1931</span><h3>Horkheimer</h3><p>Consolida el programa de una teoría crítica de la sociedad.</p></article>
          <article><span>Historia</span><h3>Crisis y exilio</h3><p>Fascismo, nazismo, estalinismo, guerras y sociedad tecnológica.</p></article>
          <article><span>Finalidad</span><h3>Emancipación</h3><p>La crítica apunta más allá de la mera descripción de lo existente.</p></article>
        </div>
      </section>

      <section className="ct-section">
        <header className="ct-heading">
          <span>III</span><div><p>Fundamenta</p><h2>Constelación filosófica</h2></div>
        </header>

        <div className="ct-roots">
          {roots.map(([author, concept], index) => (
            <article key={author}>
              <span>0{index + 1}</span><strong>{author}</strong><em>{concept}</em>
            </article>
          ))}
          <div className="ct-center">
            <strong>Teoría Crítica</strong>
            <small>totalidad · dialéctica · sociedad · emancipación</small>
          </div>
        </div>
      </section>

      <section className="ct-section">
        <header className="ct-heading">
          <span>IV</span><div><p>Ordo cursus</p><h2>Estructura del curso</h2></div>
        </header>

        <div className="ct-blocks">
          {blocks.map(([n, title, sessions, detail]) => (
            <article key={n}>
              <div><span>{n}</span><small>{sessions}</small></div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ct-section">
        <header className="ct-heading">
          <span>V</span><div><p>Conceptus</p><h2>Problemas centrales</h2></div>
        </header>

        <div className="ct-flow">
          {['Dialéctica', 'Enajenación', 'Fetichismo', 'Cosificación',
            'Malestar', 'Razón instrumental', 'Dialéctica de la Ilustración',
            'Sociedad unidimensional'].map((item, index) => (
            <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="ct-section">
        <header className="ct-heading">
          <span>VI</span><div><p>Bibliotheca critica</p><h2>Lecturas del semestre</h2></div>
        </header>

        <div className="ct-readings">
          {readings.map(([n, author, title, topic, ready]) => (
            <article key={n}>
              <span>{n}</span>
              <div><p>{author}</p><h3>{title}</h3><small>{topic}</small></div>
              <b className={ready ? 'ready' : ''}>{ready ? 'Material recibido' : 'Según programa'}</b>
            </article>
          ))}
        </div>

        <p className="ct-note">
          Los PDFs se usan como material académico de referencia y no se
          publican completos en el repositorio.
        </p>
      </section>

      <section className="ct-section ct-eval">
        <div>
          <p className="ct-kicker">Evaluatio</p>
          <h2>Evaluación oficial</h2>
          <p className="ct-lead">
            Lectura y discusión crítica, dominio de contenidos y capacidad
            para exponer y defender un problema filosófico.
          </p>
        </div>

        <div className="ct-eval-grid">
          <div><strong>30%</strong><span>Participación</span></div>
          <div><strong>30%</strong><span>Examen</span></div>
          <div><strong>40%</strong><span>Exposición y defensa</span></div>
        </div>
      </section>

      <section className="ct-section ct-attendance">
        <span>Asistencia</span>
        <div><strong>80%</strong><small>ordinario</small></div>
        <div><strong>60%</strong><small>extraordinario</small></div>
        <p>Puntualidad y permanencia también son requisitos del curso.</p>
      </section>

      <footer className="ct-footer">
        <Link to="/semestre/5">← Quinto semestre</Link>
        <span>Negation · Kritik · Praxis</span>
        <span>Theoria Critica · MMXXVI</span>
      </footer>
    </main>
  )
}
