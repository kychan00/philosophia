import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './MethodsClass07Sep.css'
import './MethodsClass14Sep.css'
import './MethodsClass21Sep.css'
import './MethodsClass23Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'generos', 'Géneros académicos'],
  ['02', 'informe', 'Protocolo e informe'],
  ['03', 'delimitacion', 'Delimitar el objeto'],
  ['04', 'ramas', 'Ramas y conceptos'],
  ['05', 'nussbaum', 'Nussbaum y capacidades'],
  ['06', 'ejes', 'Tres ejes problemáticos'],
  ['07', 'problematica', 'Problemática'],
  ['08', 'interdisciplina', 'Interdisciplinariedad'],
  ['09', 'problema', 'Problema provisional'],
  ['10', 'obras', 'Obras de Nussbaum'],
  ['11', 'lectura', 'Lectura siguiente'],
]

const genres = [
  ['Comentario', 'reconstruir · sintetizar · explicar · esclarecer', 'Función explicativa o descriptiva.'],
  ['Disertación', 'problematizar · argumentar · defender', 'Construye una problemática y desarrolla una posición.'],
  ['Ensayo', 'perspectiva · argumento', 'Se presta especialmente al movimiento disertativo.'],
  ['Artículo', 'explicar o argumentar', 'Puede esclarecer una obra o defender una tesis original.'],
  ['Paper', 'delimitación · técnica · resultados', 'Suele ser más acotado, según disciplina y comunidad.'],
  ['Monografía', 'reconstrucción sistemática', 'Concentra y organiza un tema o problema.'],
  ['Tesina', 'dominio de campo y procedimiento', 'Muestra manejo de bibliografía, método e investigación.'],
  ['Tesis', 'conocimiento original', 'Busca idealmente producir o defender una aportación original.'],
]

const branches = [
  ['ethics', 'Ética', 'vida buena · deber · dignidad · vulnerabilidad · justicia'],
  ['politics', 'Filosofía política', 'ciudadanía · derechos · justicia distributiva · participación · instituciones'],
  ['epistemology', 'Epistemología', 'conocimiento · creencia · justificación · racionalidad · error · verdad'],
  ['anthropology', 'Antropología / metafísica', 'persona · agencia · vulnerabilidad · naturaleza humana · identidad · dependencia'],
]

const axes = [
  ['01', 'Miedo al error epistémico', 'La equivocación se vive como amenaza al valor, prestigio o estatus.'],
  ['02', 'Miedo al fracaso y al futuro', 'La educación puede quedar subordinada a rendimiento, competencia y supervivencia económica.'],
  ['03', 'Miedo a la vulnerabilidad', 'Docentes y estudiantes pueden refugiarse en dogmatismo, defensividad o pasividad.'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ number, eyebrow, children }) {
  return (
    <div className="methods-class-heading methods07-heading methods14-heading methods21-heading methods23-heading">
      <span>{number}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function MethodsClass23Sep() {
  const [branchId, setBranchId] = useState('ethics')
  const branch = useMemo(
    () => branches.find(([id]) => id === branchId) || branches[0],
    [branchId],
  )

  return (
    <main className="methods-class-page methods07-page methods14-page methods21-page methods23-page">
      <nav className="methods-class-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <Link to="/" className="methods-class-brand">Φ · Philosophia</Link>
        <span>XXIII · IX · MMXXVI</span>
      </nav>

      <header className="methods-class-header methods07-header methods14-header methods21-header methods23-header">
        <div className="methods-header-rules" aria-hidden="true" />
        <div className="methods07-ghost methods14-ghost methods21-ghost methods23-ghost" aria-hidden="true">FORMA</div>
        <div className="methods-header-symbol" aria-hidden="true">§</div>
        <div className="methods07-hero-inner">
          <div>
            <p className="methods-class-kicker">FI104 · Novena sesión · 23 de septiembre de 2026</p>
            <h1>Del género académico al<em>objeto de investigación</em></h1>
            <p className="methods-class-subtitle">
              La sesión distingue funciones de escritura y géneros académicos,
              separa protocolo e informe y aplica la delimitación de Russ a un
              caso: miedo, educación y Martha Nussbaum.
            </p>
          </div>
          <aside className="methods07-thesis methods14-thesis methods21-thesis methods23-thesis">
            <span>IDEA CENTRAL</span>
            <strong>No se salta del tema general a la pregunta de investigación.</strong>
            <p>Rama filosófica → conceptos → marco → ámbito → tensión → problemática → problema.</p>
          </aside>
        </div>
        <div className="methods-header-ornament">☙ ───── § ───── ❧</div>
      </header>

      <div className="methods-class-layout">
        <aside className="methods-index">
          <p>Index inquisitionis</p>
          <nav>{sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goTo(id)}><span>{number}</span>{label}</button>
          ))}</nav>
        </aside>

        <article className="methods-article">
          <section id="mapa" className="methods-section">
            <Heading number="00" eyebrow="Ordo sessionis">De cómo escribimos a qué problema investigamos</Heading>
            <div className="methods23-map">
              <article><span>01</span><strong>Función</strong><p>explicar / argumentar</p></article><b>→</b>
              <article><span>02</span><strong>Género</strong><p>ensayo · artículo · tesis · ponencia</p></article><b>→</b>
              <article><span>03</span><strong>Objeto</strong><p>tema + ámbito + conceptos</p></article><b>→</b>
              <article className="active"><span>04</span><strong>Problema</strong><p>tensión filosófica concreta</p></article>
            </div>
          </section>

          <section id="generos" className="methods-section">
            <Heading number="01" eyebrow="Forma textus">Función del texto ≠ nombre del documento</Heading>
            <div className="methods23-genres">
              {genres.map(([title, key, body]) => (
                <article key={title}><span>{title.toUpperCase()}</span><strong>{key}</strong><p>{body}</p></article>
              ))}
            </div>
            <div className="methods23-note"><span>CRITERIO</span><p>Lo decisivo es preguntar qué propósito cumple el escrito.</p></div>
          </section>

          <section id="informe" className="methods-section">
            <Heading number="02" eyebrow="Protocollum · relatio">El protocolo mira hacia adelante; el informe comunica lo realizado</Heading>
            <div className="methods23-compare">
              <article className="active"><span>PROTOCOLO</span><strong>proyecta</strong><p>tema, problema, estado de la cuestión, bibliografía, justificación y plan.</p></article>
              <b>≠</b>
              <article><span>INFORME</span><strong>comunica avance o resultado</strong><p>qué se hizo, cómo, qué se encontró y qué puede sostenerse hasta ese momento.</p></article>
            </div>
            <div className="methods23-note"><span>PONENCIA</span><p>Puede comunicar un avance; el abstract presupone que el problema ya está delimitado.</p></div>
          </section>

          <section id="delimitacion" className="methods-section">
            <Heading number="03" eyebrow="Delimitatio">De tema general a objeto de estudio</Heading>
            <div className="methods23-flow">
              <span>tema general</span><b>→</b><span>concepto filosófico</span><b>→</b>
              <span>rama</span><b>→</b><span>ámbito</span><b>→</b><strong>tensión concreta</strong>
            </div>
            <div className="methods23-note"><span>EJEMPLO</span><p>capacidades + educación + tecnología: ¿qué capacidad aparece restringida, amenazada o potenciada y en qué contexto?</p></div>
          </section>

          <section id="ramas" className="methods-section">
            <Heading number="04" eyebrow="Subdisciplina">Elegir una rama modifica los conceptos del objeto</Heading>
            <div className="methods23-tabs">
              {branches.map(([id, title, concepts]) => (
                <button key={id} type="button" className={branchId === id ? 'active' : ''} onClick={() => setBranchId(id)}>
                  <span>{title}</span><strong>{concepts}</strong>
                </button>
              ))}
            </div>
            <article className="methods23-focus"><span>{branch[1]}</span><h3>{branch[2]}</h3><p>Delimitar es ir cerrando posibilidades hasta construir un objeto trabajable.</p></article>
          </section>

          <section id="nussbaum" className="methods-section">
            <Heading number="05" eyebrow="Martha Nussbaum">Miedo, vulnerabilidad y capacidades</Heading>
            <div className="methods23-capabilities">
              <article><span>CAPACIDAD</span><strong>Emociones</strong><p>Una vida emocional no paralizada por miedo o ansiedad.</p></article>
              <article className="active"><span>CAPACIDAD</span><strong>Control sobre el propio entorno</strong><p>Participar efectivamente en decisiones que afectan la propia vida.</p></article>
            </div>
            <div className="methods23-traditions"><span>Platón / estoicos</span><b>↔</b><strong>Aristóteles / Nussbaum</strong></div>
          </section>

          <section id="ejes" className="methods-section">
            <Heading number="06" eyebrow="Axes problematis">Tres ejes para construir la problemática</Heading>
            <div className="methods23-axes">
              {axes.map(([n, title, body]) => <article key={n}><span>{n}</span><strong>{title}</strong><p>{body}</p></article>)}
            </div>
          </section>

          <section id="problematica" className="methods-section">
            <Heading number="07" eyebrow="Problematica">Cuando el miedo se vuelve estructura educativa</Heading>
            <div className="methods23-problematica">
              <span>FORMULACIÓN DE CLASE</span>
              <p>Bajo rendimiento, estandarización y competitividad, el miedo puede dejar de ser una reacción temporal y convertirse en un dispositivo existencial e institucional relativamente permanente.</p>
              <p>El error se castiga, el fracaso se vive como amenaza y la vulnerabilidad se oculta; el pensamiento crítico puede ceder ante conformidad, cautela o pasividad.</p>
            </div>
          </section>

          <section id="interdisciplina" className="methods-section">
            <Heading number="08" eyebrow="Transversalitas">Psicología como apoyo, filosofía como pregunta rectora</Heading>
            <div className="methods23-interdiscipline">
              <article><span>PSICOLOGÍA</span><strong>miedo · ansiedad · defensa</strong><p>Aclara la dimensión emocional y corporal.</p></article>
              <b>→</b>
              <article className="active"><span>FILOSOFÍA</span><strong>formación · autonomía · vulnerabilidad · vida digna</strong><p>Mantiene la pregunta normativa y conceptual.</p></article>
            </div>
          </section>

          <section id="problema" className="methods-section">
            <Heading number="09" eyebrow="Problema provisional">La pregunta aparece al final del recorrido</Heading>
            <blockquote className="methods23-problem">
              ¿De qué manera el miedo, comprendido como un juicio cognitivo-evaluativo
              de carácter narcisista, obstaculiza la apertura epistémica e inhibe el
              desarrollo de la autonomía y de la imaginación crítica en la relación pedagógica?
            </blockquote>
            <div className="methods23-note"><span>PROCEDIMIENTO</span><p>No se saltó de tema a pregunta: se delimitó, se relacionaron conceptos, se buscó marco teórico y se situó una tensión concreta.</p></div>
          </section>

          <section id="obras" className="methods-section">
            <Heading number="10" eyebrow="Corpus Nussbaum">Tres obras para el puente educación–emociones–ciudadanía</Heading>
            <div className="methods23-books">
              <article><span>01</span><strong>Sin fines de lucro</strong><p>educación humanística, democracia, empatía e imaginación narrativa.</p></article>
              <article><span>02</span><strong>Emociones políticas</strong><p>emociones públicas y democracia justa.</p></article>
              <article><span>03</span><strong>La monarquía del miedo</strong><p>miedo político, polarización y debilitamiento institucional.</p></article>
            </div>
          </section>

          <section id="lectura" className="methods-section">
            <Heading number="11" eyebrow="Ad proximam sessionem">Terminar Russ y comenzar el siguiente texto</Heading>
            <div className="methods23-task">
              <span>LECTURA INDICADA</span>
              <h3>Jacqueline Russ + texto sobre métodos actuales del pensamiento</h3>
              <p>Revisar completa la introducción y el capítulo correspondiente al método o problemática señalado en clase.</p>
              <small>El audio no permite reconstruir con seguridad el título ni el autor del segundo texto; por eso no se inventan aquí.</small>
            </div>
            <div className="methods23-actions">
              <Link to="/tareas/metodos-de-investigacion/jacqueline-russ-capitulos-1-3">Abrir sistema 2D de Russ →</Link>
              <Link to="/semestre/5/metodos-de-investigacion">Volver a Métodos de Investigación</Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
