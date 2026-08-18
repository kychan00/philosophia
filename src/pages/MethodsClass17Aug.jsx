import { Link } from 'react-router'
import notes from '../content/metodos-2026-08-17.md?raw'

const sections = [
  ['panorama', '00', 'Panorama'],
  ['investigar', '01', 'Investigar en filosofía'],
  ['estado-arte', '02', 'Estado del arte'],
  ['protocolo', '03', 'Protocolo'],
  ['lectura', '04', 'Lectura académica'],
  ['escritura', '05', 'Escritura y citación'],
  ['problema-metodo', '06', 'El problema del método'],
  ['metodos', '07', 'Métodos filosóficos'],
  ['programa', '08', 'Programa de la materia'],
  ['evaluacion', '09', 'Evaluación y asistencia'],
  ['conceptos', '10', 'Conceptos fundamentales'],
  ['fuente', '11', 'Apuntes originales'],
]

function Heading({ number, eyebrow, children }) {
  return (
    <div className="methods-class-heading">
      <span>{number}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function MethodsClass17Aug() {
  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="methods-class-page">
      <nav className="methods-class-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <Link to="/" className="methods-class-brand">Φ · Philosophia</Link>
        <span>XVII · VIII · MMXXVI</span>
      </nav>

      <header className="methods-class-header">
        <div className="methods-header-rules" aria-hidden="true" />
        <div className="methods-header-symbol" aria-hidden="true">§</div>
        <p className="methods-class-kicker">FI104 · Primera sesión</p>
        <h1>Clase del<em>17 de agosto</em></h1>
        <p className="methods-class-subtitle">
          De la inquietud filosófica al problema, las fuentes, el método,
          la argumentación y el protocolo de investigación.
        </p>
        <div className="methods-header-ornament">☙ ───── § ───── ❧</div>
      </header>

      <div className="methods-class-layout">
        <aside className="methods-index">
          <p>Index inquisitionis</p>
          <nav>
            {sections.map(([id, number, label]) => (
              <button key={id} type="button" onClick={() => goToSection(id)}>
                <span>{number}</span>{label}
              </button>
            ))}
          </nav>
        </aside>

        <article className="methods-article">
          <section id="panorama" className="methods-section">
            <Heading number="00" eyebrow="Propositum">Panorama de la sesión</Heading>
            <div className="methods-thesis">
              <span>Idea rectora</span>
              <p>Investigar filosóficamente no consiste solamente en tener una buena idea, sino en formularla, situarla dentro de una discusión académica, justificarla y desarrollarla mediante un método.</p>
            </div>
            <p>La primera clase funciona como encuadre general. La materia no está pensada únicamente para “hacer una tesis”: sus herramientas sirven también para ensayos académicos, ponencias, artículos, protocolos y seminarios de titulación.</p>
            <div className="methods-flow">
              {['Inquietud','Problema','Fuentes','Método','Argumentación','Protocolo'].map((item,i,arr) => (
                <div key={item}><span>{String(i+1).padStart(2,'0')}</span><strong>{item}</strong>{i < arr.length-1 && <b>→</b>}</div>
              ))}
            </div>
          </section>

          <section id="investigar" className="methods-section">
            <Heading number="01" eyebrow="Investigatio">¿Qué significa investigar en filosofía?</Heading>
            <p>La filosofía no investiga necesariamente de manera aislada. El profesor usa su experiencia en filosofía política para mostrar que ciertos problemas exigen diálogo con historia, ciencia política y otras disciplinas. Aparecen Hobbes, Bacon y Maquiavelo como ejemplos de autores útiles para comprender fenómenos políticos.</p>
            <div className="methods-tool-grid">
              {[
                ['Delimitar','Definir con precisión el problema.'],
                ['Buscar','Localizar fuentes académicas pertinentes.'],
                ['Ordenar','Construir una secuencia argumentativa.'],
                ['Elegir','Seleccionar un método según el problema.'],
              ].map(([title,text]) => <div key={title}><span>✦</span><strong>{title}</strong><p>{text}</p></div>)}
            </div>
            <div className="methods-margin-note"><span>Acceso académico</span><p>El profesor señala que la Universidad de Guadalajara ofrece acceso institucional a bases de datos, revistas y servicios que normalmente serían de pago. El curso practicará búsquedas especializadas y el uso de filtros para localizar literatura pertinente.</p></div>
          </section>

          <section id="estado-arte" className="methods-section">
            <Heading number="02" eyebrow="Status quaestionis">Estado del arte</Heading>
            <div className="methods-question-box">¿Dónde se encuentra mi investigación dentro de la conversación académica existente?</div>
            <p>El estado del arte —o estado de la cuestión— funciona como un mapa de lo que ya existe: autores, perspectivas, problemas resueltos, discusiones abiertas y contradicciones. Su propósito es descubrir qué lugar puede ocupar nuestra investigación y evitar presentar como nueva una cuestión ya trabajada.</p>
            <div className="methods-map-diagram">
              <div className="methods-map-center">Mi problema</div>
              <div className="methods-map-row"><span>Autores</span><span>Debates</span><span>Enfoques</span></div>
              <div className="methods-map-state">Estado del arte</div>
              <div className="methods-map-result">¿Qué falta por investigar?</div>
            </div>
          </section>

          <section id="protocolo" className="methods-section">
            <Heading number="03" eyebrow="Protocollum">Protocolo de investigación</Heading>
            <div className="methods-protocol-quote"><small>Definición de trabajo</small><strong>El protocolo es una síntesis lógica de la futura tesis.</strong></div>
            <p>Una tesis no debería comenzar escribiendo capítulos sin una estructura previa. Antes deben quedar claros el problema, lo que se quiere investigar, lo que ya se ha dicho, los conceptos, el método y la dirección del proyecto.</p>
            <div className="methods-protocol-steps">
              {['Problema','Pregunta','Antecedentes','Fuentes','Conceptos','Método','Argumentos','Dirección'].map((item,i) => <div key={item}><span>{i+1}</span><strong>{item}</strong></div>)}
            </div>
            <p className="methods-source-caution">El profesor anunció un material sobre elaboración de protocolos, aparentemente de la Universidad Autónoma de Zacatecas, con cerca de ocho pasos. La procedencia exacta quedó como dato por confirmar.</p>
          </section>

          <section id="lectura" className="methods-section">
            <Heading number="04" eyebrow="Lectio">Lectura académica estratégica</Heading>
            <p>La “lectura diagonal” no significa leer descuidadamente: significa reconocer primero la arquitectura de un texto para decidir si es pertinente antes de dedicarle una lectura profunda.</p>
            <div className="methods-reading-columns">
              <div><span>Artículo / paper</span>{['Título','Palabras clave','Abstract','Introducción','Problema','Tesis'].map(x => <strong key={x}>{x}</strong>)}</div>
              <div><span>Libro</span>{['Título','Contraportada','Índice','Prólogo','Introducción','Autor'].map(x => <strong key={x}>{x}</strong>)}</div>
            </div>
            <div className="methods-structure-pair">
              <div><small>Microestructura</small><strong>Cómo se construye el argumento</strong><p>Proposiciones, oraciones, párrafos y conexiones.</p></div>
              <div><small>Macroestructura</small><strong>Qué sostiene el texto en conjunto</strong><p>Idea general, conceptos clave y tesis principal.</p></div>
            </div>
            <p className="methods-source-caution">El audio de esta parte quedó especialmente deformado. La atribución posible a Teun A. van Dijk no puede establecerse con seguridad a partir de la grabación y por eso no se presenta como dato confirmado.</p>
          </section>

          <section id="escritura" className="methods-section">
            <Heading number="05" eyebrow="Scriptura">Escritura y citación</Heading>
            <p>El curso revisará referencias bibliográficas, distintas ediciones, traducciones y varias obras de un mismo autor. El ejemplo de Rousseau muestra por qué conviene distinguir la fecha original de publicación de la fecha de la edición concreta que estamos consultando.</p>
            <div className="methods-citation-example"><div><span>No basta</span><strong>Rousseau (2004)</strong></div><b>→</b><div><span>Hay que situar</span><strong>obra original + edición consultada</strong></div></div>
            <div className="methods-thesis methods-thesis--small"><span>Investigación viva</span><p>Cambiar de opinión durante una investigación es normal. Lo decisivo es poder reconstruir el tránsito intelectual y conservar coherencia argumentativa.</p></div>
          </section>

          <section id="problema-metodo" className="methods-section">
            <Heading number="06" eyebrow="Methodus">El problema del método</Heading>
            <div className="methods-versus">
              <div><small>Técnica</small><strong>Operaciones</strong><p>Leer, buscar, citar, documentar, redactar.</p></div><span>≠</span>
              <div><small>Método</small><strong>Organización intelectual</strong><p>Se elige en relación con el problema investigado.</p></div>
            </div>
            <p>La unidad sobre el problema del método preguntará qué significa realmente tener un método en filosofía, qué condiciones debe cumplir y cómo se relaciona con el problema. En los métodos clásicos aparece con claridad Descartes y la búsqueda de un principio suficientemente firme para evitar un regreso infinito de fundamentos.</p>
          </section>

          <section id="metodos" className="methods-section">
            <Heading number="07" eyebrow="Viae">Métodos filosóficos</Heading>
            <div className="methods-method-cards">
              <div><span>I</span><h3>Fenomenología</h3><p>Aproximación al fenómeno y búsqueda de la esencia del problema.</p></div>
              <div><span>II</span><h3>Dialéctica</h3><p>Posiciones opuestas, tensiones, contradicciones y confrontación de argumentos.</p></div>
              <div><span>III</span><h3>Axiomática</h3><p>Principios, axiomas, relaciones lógicas y consecuencias.</p></div>
            </div>
            <div className="methods-question-box methods-question-box--method">El método debe elegirse en función del problema que queremos investigar.</div>
            <p>Una investigación filosófica no tiene por qué utilizar un único método. El profesor plantea que pueden combinarse: por ejemplo, comenzar fenomenológicamente y continuar con un análisis dialéctico o axiomático cuando el problema lo requiera.</p>
          </section>

          <section id="programa" className="methods-section">
            <Heading number="08" eyebrow="Curriculum">Programa de la materia</Heading>
            <div className="methods-units">
              {[
                ['I','Herramientas del investigador','Lectura, documental, búsquedas, redacción, citación y protocolo inicial.'],
                ['II','El problema del método','Teoría del método, disertación y relación entre problema y método.'],
                ['III','Métodos clásicos','Formas clásicas de abordar problemas; aparece Descartes.'],
                ['IV','Métodos contemporáneos','Fenomenología, dialéctica y axiomática.'],
                ['V','Aplicación y protocolo','Integración de herramientas en un proyecto propio.'],
              ].map(([n,title,desc]) => <div key={n}><span>{n}</span><strong>{title}</strong><p>{desc}</p></div>)}
            </div>
          </section>

          <section id="evaluacion" className="methods-section">
            <Heading number="09" eyebrow="Aestimatio">Evaluación y asistencia</Heading>
            <div className="methods-evaluation">
              <div><strong>20%</strong><span>Actividades prácticas</span><p>Redacción, búsquedas, bases de datos y ejercicios metodológicos.</p></div>
              <div><strong>40%</strong><span>Participación y lecturas</span><p>Discutir textos, formular preguntas, expresar dudas y dialogar.</p></div>
              <div><strong>40%</strong><span>Protocolo</span><p>Producto final: estructurar coherentemente una investigación filosófica.</p></div>
            </div>
            <div className="methods-reading-maxim">“No puede haber participación real si no existe lectura.”</div>
            <div className="methods-attendance"><span>Asistencia</span><p>La formulación registrada fue que superar aproximadamente el 20% de inasistencias afecta el derecho a evaluación ordinaria. Si surge un problema laboral, personal, familiar o médico, el profesor pidió que se le avise. Classroom será el canal principal una vez dado de alta el grupo.</p></div>
          </section>

          <section id="conceptos" className="methods-section">
            <Heading number="10" eyebrow="Glossarium">Conceptos fundamentales</Heading>
            <dl className="methods-glossary">
              <div><dt>Problema</dt><dd>La cuestión delimitada que orienta la investigación.</dd></div>
              <div><dt>Estado del arte</dt><dd>Mapa de la conversación académica existente.</dd></div>
              <div><dt>Protocolo</dt><dd>Síntesis lógica y anticipada de una futura investigación.</dd></div>
              <div><dt>Lectura diagonal</dt><dd>Reconocimiento estratégico de la estructura y pertinencia de un texto.</dd></div>
              <div><dt>Técnica</dt><dd>Operación concreta utilizada en el trabajo de investigación.</dd></div>
              <div><dt>Método</dt><dd>Organización intelectual elegida en función del problema.</dd></div>
            </dl>
          </section>

          <section id="fuente" className="methods-section">
            <Heading number="11" eyebrow="Fons">Apuntes originales</Heading>
            <p>Se conserva íntegro el documento base de la clase. Las marcas de incertidumbre y reconstrucción permanecen visibles para distinguir lo confirmado de aquello que el audio no permitió recuperar con seguridad.</p>
            <details className="methods-source-notes"><summary>Ver documento completo <span>+</span></summary><pre>{notes}</pre></details>
          </section>
        </article>
      </div>

      <footer className="methods-class-footer">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos</Link>
        <span>☙ &nbsp; § &nbsp; ❧</span>
        <span>17 · VIII · 2026</span>
      </footer>
    </main>
  )
}
