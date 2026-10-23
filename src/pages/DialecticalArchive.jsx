import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import SubjectTasksPanel from '../components/SubjectTasksPanel'
import {
  dialecticalSessions, dialecticalPhases, dialecticalRoute,
  dialecticalById, dialecticalTransitions, dialecticalGlossary
} from '../data/dialecticalArchive'
import './DialecticalArchive.css'

const examPrompts = [
  { question: '¿Por qué no basta con definir la enajenación como pérdida del producto?', guide: 'Compare actividad, producto, ser genérico y relación con otros. Distinga objetivación de enajenación.', source: 'Clases del 10, 17 y 24 de septiembre' },
  { question: '¿Qué conserva y qué transforma Lukács del fetichismo de Marx?', guide: 'Explique la forma mercancía y su extensión a instituciones, racionalización y subjetividad social.', source: 'Clase del 15 de octubre' },
  { question: '¿Es toda tecnología necesariamente cosificante?', guide: 'Examine quién decide fines y ritmos, cómo se distribuye la agencia y por qué una herramienta no es un sujeto.', source: 'Clase del 20 de octubre' },
  { question: '¿Por qué se incorpora a Freud después de Marx y Lukács?', guide: 'Contraste las estructuras objetivas con la experiencia subjetiva del malestar. Es una transición del programa, no una deducción histórica.', source: 'Clase del 22 de octubre' }
]

function Pizarron({ session, compact = false }) {
  const movements = [session.before, session.conflict, session.after]
  return (
    <div className={compact ? 'da-board da-board-compact' : 'da-board'} role="group" aria-label={'Pizarrón reconstruido: ' + session.title}>
      <div className="da-board-top"><span>FIG. / {session.date}</span><span>Reconstrucción conceptual · no reproducción literal</span></div>
      <svg viewBox="0 0 900 330" role="img" aria-label={movements.join(' conduce a ')} preserveAspectRatio="xMidYMid meet">
        <defs><marker id="daArrow" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M1 1L7 4L1 7" fill="none" stroke="currentColor" strokeWidth="1.6"/></marker></defs>
        <path d="M280 167 C300 167,300 167,320 167" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#daArrow)"/>
        <path d="M580 167 C602 167,602 167,622 167" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#daArrow)"/>
        <rect x="15" y="80" width="265" height="175" rx="0" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="320" y="65" width="260" height="205" rx="0" fill="none" stroke="#bd645a" strokeWidth="3"/>
        <rect x="622" y="80" width="263" height="175" rx="0" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <text x="30" y="105" fontSize="18" fill="#a6a29a" fontFamily="monospace">01 / ANTES</text>
        <text x="335" y="92" fontSize="18" fill="#e9a7a1" fontFamily="monospace">02 / TENSIÓN</text>
        <text x="637" y="105" fontSize="18" fill="#a6a29a" fontFamily="monospace">03 / DESPUÉS</text>
        {[0,1,2].map((n) => (
          <foreignObject key={n} x={[30,335,637][n]} y="116" width={[236,230,230][n]} height="133">
            <div xmlns="http://www.w3.org/1999/xhtml" className="da-board-text">{movements[n]}</div>
          </foreignObject>
        ))}
      </svg>
      <p className="da-board-fallback">{movements.map((item, i) => <span key={i}><b>{['Antes', 'Tensión', 'Después'][i]}:</b> {item}</span>)}</p>
    </div>
  )
}

export function DialecticalSessionFrame({ id, children }) {
  const session = dialecticalById(id)
  if (!session) return children
  const index = dialecticalSessions.findIndex((item) => item.id === id)
  const previous = dialecticalSessions[index - 1]
  const next = dialecticalSessions[index + 1]
  return (
    <div className="da da-session" id="dialectical-session">
      <div className="da-edition">
        <Link to="/semestre/5/teoria-critica">← Cuaderno de cátedra</Link>
        <span>PHILOSOPHIA / FI265</span>
        <span>{String(index + 1).padStart(2, '0')} / {dialecticalSessions.length}</span>
      </div>
      <header className="da-session-cover">
        <p className="da-overline">Teoría Crítica · {session.phase} · {session.date}</p>
        <h1>{session.title}</h1>
        <p className="da-session-question">{session.question}</p>
        <div className="da-smallmeta"><span>Profesora · Dinora Hernández López</span><span>{session.status}</span><span>{session.layers}</span></div>
      </header>
      <section className="da-session-memory" aria-labelledby={'memory-' + id}>
        <div className="da-section-label"><span>Folio de memoria</span><strong>01 / 03</strong></div>
        <h2 id={'memory-' + id}>El movimiento de la sesión</h2>
        <Pizarron session={session} />
        <div className="da-memory-grid">
          <article><span>LA ESCENA / EJEMPLO</span><h3>Un anclaje para recordar</h3><p>{session.example || 'No consta una analogía concreta en la nota recuperada de esta sesión. No se inventa una.'}</p><small>{session.layers}</small></article>
          <article><span>FRICCIÓN / PREGUNTA</span><h3>Lo que queda en tensión</h3><p>{session.question}</p><small>Pregunta editorial de recuperación, no cita dictada.</small></article>
          <article><span>LECTURA / CONTEXTO</span><h3>Volver a la fuente</h3><p>{session.reading}</p><small>Referencia de clase; edición y paginación sujetas al material cotejado.</small></article>
        </div>
      </section>
      <div className="da-original-label"><span>02 / 03</span><div><p>Cuaderno conservado</p><h2>Desarrollo íntegro de la clase</h2><small>El contenido y las interacciones de la página anterior se conservan bajo la nueva cubierta editorial.</small></div></div>
      <div className="da-legacy-content">{children}</div>
      <section className="da-memory-bottom">
        <div><span>03 / 03</span><h2>Lo que debe permanecer</h2><p>La pregunta que organiza esta sesión: <strong>{session.question}</strong></p><p><strong>Intervención específica / posición personal:</strong> no se asignan voces ni posturas sin una constancia documental verificable.</p></div>
        <nav aria-label="Otras sesiones"><span>{previous ? <Link to={dialecticalRoute(previous.id)}>← {previous.title}</Link> : 'Inicio del archivo'}</span><Link to="/semestre/5/teoria-critica">Ver índice</Link><span>{next ? <Link to={dialecticalRoute(next.id)}>{next.title} →</Link> : 'Última sesión registrada'}</span></nav>
      </section>
    </div>
  )
}

const restored = {
  '17-septiembre': [
    ['La enajenación como totalidad', 'El proceso se reconstruye a partir de los cuatro momentos vinculados entre sí: producto, actividad, ser genérico y otros seres humanos.'],
    ['El estatuto de la fuente', 'Sólo se han recuperado los ejes de trabajo y la continuidad con los Manuscritos de 1844; falta cotejar el archivo local original.']
  ],
  '22-septiembre': [
    ['Naturalización y totalidad', 'Se retoma la relación entre condiciones materiales y conciencia, y se plantea la necesidad de desnaturalizar las formas de organización social.'],
    ['Reproducción social', 'Los apuntes recuperados mencionan el trabajo reproductivo y la división sexual del trabajo, sin preservar la discusión completa.']
  ],
  '24-septiembre': [
    ['Actividad y desposesión', 'La crítica no se limita a perder el producto: el ritmo y la finalidad del trabajo pueden quedar organizados desde fuera.'],
    ['Del trabajo a la relación con otros', 'Ser genérico, desidentificación y conciencia de clase conectan la crítica del trabajo con las formas históricas de relación social.'],
    ['La entrada a El capital', 'La mercancía abre el análisis de valor de uso, valor de cambio, trabajo y la diferencia entre valor y precio.'],
    ['Ejemplo de la sesión', 'La cadena de producción en Tiempos modernos permite preguntar por el control humano sobre el ritmo de la máquina.']
  ]
}

export function DialecticalRestoredClass({ id }) {
  const session = dialecticalById(id)
  if (!session || !restored[id]) return null
  return (
    <main className="da-restored" aria-label="Registro recuperado">
      <header><p>Archivo recuperado · {session.status}</p><h2>Expediente de sesión</h2><p>Esta vista resume únicamente los materiales presentes en el vault. No sustituye el contenido documental íntegro.</p></header>
      {restored[id].map(([heading, body], index) => <section key={heading}><span>{String(index + 1).padStart(2,'0')}</span><div><h3>{heading}</h3><p>{body}</p></div></section>)}
      <p className="da-caution">Procedencia: nota académica de Teoría Crítica del {session.date}. {session.status === 'Parcial' ? 'Cotejo con archivo local pendiente.' : 'Desarrollo editorial con paráfrasis; no citas literales.'}</p>
    </main>
  )
}

function exportMarkdown() {
  const header = '---\ntipo: archivo-academico\nmateria: Teoría Crítica\ncodigo: FI265\nperiodo: 2026-B\n---\n# Cuaderno de Cátedra Inmanente\n\n'
  const content = dialecticalSessions.map((item) => '## ' + item.date + ' · ' + item.title + '\n\n' +
    'Estado: ' + item.status + '\n\nPregunta: ' + item.question + '\n\nAntes: ' + item.before + '\n\nTensión: ' + item.conflict + '\n\nDespués: ' + item.after + '\n\nEjemplo: ' + (item.example || 'No consta') + '\n\nLectura: ' + item.reading + '\n\nProcedencia: ' + item.layers + '\n\nRuta: ' + dialecticalRoute(item.id) + '\n').join('\n---\n\n')
  const blob = new Blob([header, content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url; link.download = 'teoria-critica-cuaderno-2026.md'; link.click()
  URL.revokeObjectURL(url)
}

export default function DialecticalArchive() {
  const [query, setQuery] = useState('')
  const [phase, setPhase] = useState('Todas')
  const [selected, setSelected] = useState('22-octubre')
  const [transition, setTransition] = useState(0)
  const [question, setQuestion] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const filtered = useMemo(() => dialecticalSessions.filter((s) => (phase === 'Todas' || s.phase === phase) &&
    [s.title, s.phase, s.question, s.reading, s.date].join(' ').toLocaleLowerCase('es').includes(query.toLocaleLowerCase('es'))), [query, phase])
  const focus = dialecticalById(selected) || dialecticalSessions[0]
  const edge = dialecticalTransitions[transition]
  return <main className="da da-home">
    <div className="da-edition"><Link to="/semestre/5">← Quinto semestre</Link><span>CUADERNO DE CÁTEDRA INMANENTE · Nº 01</span><span>FI265 / UdeG / 2026-B</span></div>
    <header className="da-cover">
      <p className="da-overline">Theorie · Kritik · Gesellschaft</p>
      <div className="da-cover-grid"><div><span className="da-cover-issue">ARCHIVO / 2024—2035</span><h1>TEORÍA<br/><em>CRÍTICA</em></h1><p className="da-cover-deck">Bitácora del movimiento dialéctico. Un archivo para volver a pensar, no sólo para recordar conceptos.</p></div><div className="da-cover-art" aria-hidden="true"><span>◯</span><span>↗</span><strong>K</strong><small>NEGACIÓN / MEDIACIÓN / PRAXIS</small></div></div>
      <div className="da-cover-footer"><span><strong>{dialecticalSessions.length}</strong> sesiones documentadas</span><span><strong>{dialecticalPhases.length}</strong> momentos de estudio</span><span><strong>10</strong> años de horizonte</span></div>
    </header>
    <nav className="da-jump" aria-label="Secciones del archivo"><a href="#da-atlas">01 · Atlas</a><a href="#da-classes">02 · Sesiones</a><a href="#da-board">03 · Pizarrones</a><a href="#da-exam">04 · Examen oral</a><a href="#da-glossary">05 · Glosario</a></nav>
    <section className="da-section" id="da-atlas">
      <div className="da-heading"><span>PLIEGO 01 / ATLAS</span><h2>El pensamiento no avanza en línea recta.</h2><p>Selección de transiciones trabajadas en el curso. Las conexiones son comparaciones documentadas, no una cadena de influencia mecánica.</p></div>
      <div className="da-transition">
        <div className="da-transition-picker" role="group" aria-label="Transiciones dialécticas">{dialecticalTransitions.map((item, idx) => <button type="button" aria-pressed={idx === transition} className={idx === transition ? 'active' : ''} key={item.from+item.to} onClick={() => setTransition(idx)}><span>{String(idx + 1).padStart(2,'0')}</span>{item.from} <b>↗</b> {item.to}</button>)}</div>
        <div className="da-transition-detail"><div className="da-junction"><strong>{edge.from}</strong><span>NEGACIÓN DETERMINADA / TRANSICIÓN</span><strong>{edge.to}</strong></div><div className="da-three"><article><span>I / CONSERVAR</span><p>{edge.keep}</p></article><article><span>II / NEGAR</span><p>{edge.deny}</p></article><article><span>III / DESPLAZAR</span><p>{edge.move}</p></article></div><small>{edge.scope}</small></div>
      </div>
    </section>
    <section className="da-section" id="da-classes">
      <div className="da-heading"><span>PLIEGO 02 / DIARIO</span><h2>Registro de sesiones</h2><p>Orden temporal conservado. Las tres entradas parciales de septiembre se muestran como tales, sin ocultar los límites de sus fuentes.</p></div>
      <div className="da-filter"><label>Buscar en el cuaderno<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Autor, concepto, fecha..." type="search" /></label><label>Momento conceptual<select value={phase} onChange={(event) => setPhase(event.target.value)}><option>Todas</option>{dialecticalPhases.map(p => <option key={p}>{p}</option>)}</select></label><span aria-live="polite">{filtered.length} / {dialecticalSessions.length} sesiones</span></div>
      <div className="da-session-list">{filtered.map((item) => <Link key={item.id} to={dialecticalRoute(item.id)} className="da-session-row"><div className="da-date"><strong>{item.date.slice(8)}</strong><small>{item.date.slice(5,7)} / {item.date.slice(0,4)}</small></div><div><span className="da-kicker">{item.phase} / {item.status}</span><h3>{item.title}</h3><p>{item.question}</p></div><b aria-hidden="true">↗</b></Link>)}</div>
      {filtered.length === 0 && <p role="status">No hay sesiones con esos filtros.</p>}
    </section>
    <section className="da-section" id="da-board">
      <div className="da-heading"><span>PLIEGO 03 / PIZARRÓN</span><h2>Volver a trazar el problema</h2><p>Facsímiles conceptuales vectoriales reconstruidos. Son esquemas editoriales fieles a las notas, no dibujos originales atribuidos a la profesora.</p></div>
      <label className="da-board-choose">Sesión<select value={selected} onChange={e => setSelected(e.target.value)}>{dialecticalSessions.map(item => <option value={item.id} key={item.id}>{item.date} · {item.title}</option>)}</select></label>
      <Pizarron session={focus} />
      <Link className="da-text-link" to={dialecticalRoute(focus.id)}>Abrir expediente de {focus.date} ↗</Link>
    </section>
    <section className="da-section" id="da-exam">
      <div className="da-heading"><span>PLIEGO 04 / REACTIVACIÓN</span><h2>Examen oral: abrir la contradicción</h2><p>Preguntas editoriales de práctica basadas en clases conservadas; no son preguntas oficiales de evaluación.</p></div>
      <div className="da-exam"><div className="da-exam-head"><span>REACTIVO {question+1} / {examPrompts.length}</span><span>{examPrompts[question].source}</span></div><h3>{examPrompts[question].question}</h3>{showAnswer && <p className="da-exam-solution">{examPrompts[question].guide}</p>}<div className="da-exam-actions"><button type="button" onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? 'Ocultar guía' : 'Revelar guía de respuesta'}</button><button type="button" onClick={() => {setQuestion((question+1)%examPrompts.length);setShowAnswer(false)}}>Siguiente problema →</button></div></div>
    </section>
    <section className="da-section" id="da-glossary">
      <div className="da-heading"><span>PLIEGO 05 / FILOLOGÍA</span><h2>Las palabras no permanecen inmóviles.</h2><p>Glosario de orientación y traducción cautelosa. Para la definición filológica definitiva es indispensable cotejar cada edición.</p></div>
      <div className="da-glossary">{dialecticalGlossary.map(t => <article key={t.term}><h3>{t.term}</h3><p>{t.gloss}</p><small>{t.context} · {t.caution}</small></article>)}</div>
    </section>
    <section className="da-section da-preserve"><div><span>ARCHIVO DE SUPERVIVENCIA</span><h2>Conservar sin encerrar</h2><p>Exporte un índice académico legible como Markdown estándar o imprima este cuaderno a PDF con la función de su navegador. Los diagramas siguen siendo SVG vectoriales.</p><div className="da-export"><button type="button" onClick={exportMarkdown}>Exportar índice .md ↧</button><button type="button" onClick={() => window.print()}>Imprimir / guardar PDF ↗</button></div><small>La exportación contiene los resúmenes públicos del índice, no el contenido completo de las notas privadas ni todas las páginas de clase.</small></div><div><h3>Materia / FI265</h3><p>Profesora: Dinora Hernández López</p><p>2026-B · Licenciatura en Filosofía</p><p>Archivo sin membresías ni seguimiento comercial</p></div></section>
    <div className="da-task-hold"><h2>Lecturas y tareas del curso</h2><SubjectTasksPanel subjectCode="FI265"/><div className="da-reading-links"><Link to="/tareas/teoria-critica/tarea-1">Primera tarea ↗</Link><Link to="/tareas/teoria-critica/marx-capital-fetichismo-parte-i">Marx: mercancía ↗</Link><Link to="/tareas/teoria-critica/lukacs-cosificacion">Lukács: atlas 2D ↗</Link><Link to="/tareas/teoria-critica/escuela-de-frankfurt">Escuela de Frankfurt ↗</Link><Link to="/biblioteca">Biblioteca ↗</Link></div></div>
    <footer className="da-footer"><span>PHILOSOPHIA / FI265 / ARCHIVO COGNITIVO</span><Link to="/semestre/5">← Quinto semestre</Link></footer>
  </main>
}
