import { useState } from 'react'
import { Link } from 'react-router'
import './EthicsClass10Sep.css'
import './EthicsClass15Oct.css'
import './EthicsClass20Oct.css'

const eth20Facsimile = (name) => import.meta.env.BASE_URL + 'images/etica/2026-10-20/' + name

const index = [
  ['problema', 'Paradojas del sentido'],
  ['sistema', 'Física, logos y ética'],
  ['deber', 'La obediencia y sus límites'],
  ['afectos', 'Cuerpo, afectos y mérito'],
  ['retorno', 'Eterno retorno'],
  ['analogias', 'Kafka, Hegel y fotografía'],
  ['apuntes', 'Dibujos originales'],
  ['esquemas', 'Esquemas de estudio'],
  ['biblioteca', 'Biblioteca y continuidad'],
]

const esquemas = [
  {
    number: 'I', title: 'Actuar bien no garantiza prosperar',
    source: 'Apuntes, página 1 · reconstrucción de los contraejemplos del profesor.',
    nodes: [
      ['Acción recta', 'El sujeto trabaja, obedece un deber o decide de manera prudente.'],
      ['Expectativa', 'Se cree que la rectitud producirá bien personal y también bien colectivo.'],
      ['Circunstancias', 'Los costos, instituciones o desigualdades pueden alterar el resultado.'],
      ['Paradoja práctica', 'Se obra correctamente y, sin embargo, el resultado puede ser adverso.'],
    ],
    note: 'Fórmula editorial: A → (B ∧ C) como expectativa; A ∧ (¬B ∨ ¬C) como contraescenario. No es una contradicción formal necesaria: la premisa que garantiza el bienestar requiere justificación.',
  },
  {
    number: 'II', title: 'De la comprensión del mundo a la acción',
    source: 'Apuntes, página 1 · esquema pedagógico de la exposición.',
    nodes: [
      ['Metafísica', 'Pregunta por el orden racional y la necesidad del mundo.'],
      ['Física', 'Cuerpos, naturaleza y causas del acontecer.'],
      ['Lógica', 'Lenguaje, pensamiento, inferencias y juicio.'],
      ['Ética', 'La pregunta final que destacó el profesor: ¿qué debo hacer?'],
    ],
    note: 'La tripartición antigua es lógica, física y ética. La metafísica se estudia dentro de la física estoica: estas cuatro tarjetas reproducen el itinerario didáctico, no una taxonomía antigua de cuatro disciplinas.',
  },
  {
    number: 'III', title: 'El logos y el orden cósmico',
    source: 'Apuntes, páginas 1–2 · distinción entre explicación docente y reconstrucción historiográfica.',
    nodes: [
      ['Logos', 'Razón o principio ordenador: el aula lo presenta como preexistente.'],
      ['Cosmos ordenado', 'La sucesión de acontecimientos tendría una articulación racional.'],
      ['Experiencia humana', 'Los dolores, leyes e instituciones suscitan interrogantes morales.'],
      ['Responsabilidad', 'Una orden política no se convierte por eso en bien moral.'],
    ],
    note: 'Precisión histórica: el logos estoico es principio corpóreo e inmanente, no simplemente «Espíritu absoluto» hegeliano. La identificación del Estado con el fin del universo es una interpretación crítica docente, no doctrina indiscutida de toda la escuela.',
  },
  {
    number: 'IV', title: 'Del primer mundo al retorno',
    source: 'Apuntes, páginas 2–3 · comparación de los ciclos llamados «mundo 1» y «mundo 2».',
    nodes: [
      ['Mundo 1', 'Orden cósmico con acontecimientos y vidas concretas.'],
      ['Conflagración', 'En parte de la tradición estoica el ciclo culmina en una disolución por fuego.'],
      ['Mundo 2', 'Reaparición de un cosmos ordenado; en el dibujo ambos mundos son iguales.'],
      ['Nueva recurrencia', 'Se abre otra vez el problema del destino y de la respuesta humana.'],
    ],
    note: 'Las fuentes discuten la identidad numérica de los individuos en los ciclos. El esquema docente de átomos que caen en el vacío debe contrastarse: esa imagen corresponde fundamentalmente a tradiciones atomistas, no a la física estoica del pneuma y principios activo/pasivo.',
  },
]

function H({ num, label, children }) {
  return <header className="eth10-heading eth15-heading">
    <span>{num}</span><div><p>{label}</p><h2>{children}</h2></div>
  </header>
}
function go(id) {
  document.getElementById('eth20-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
export default function EthicsClass20Oct() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const current = esquemas[selectedIndex]
  return <main className="ethicsx-page eth10-page eth15-page eth20-page">
    <div className="ethicsx-meander" aria-hidden="true" />
    <nav className="ethicsx-nav eth10-nav" aria-label="Navegación de Ética">
      <Link to="/semestre/5/etica">← Ética · Escuelas clásicas</Link>
      <Link to="/" className="ethicsx-brand"><span>Φ</span>Philosophia</Link>
      <span>FI194 · XX · X · MMXXVI</span>
    </nav>
    <header className="ethicsx-hero eth10-hero eth15-hero eth20-hero">
      <div className="ethicsx-columns" aria-hidden="true"><span/><span/><span/><span/><span/></div>
      <div className="ethicsx-pediment" aria-hidden="true"/>
      <div className="ethicsx-ghost eth20-ghost" aria-hidden="true">λόγος</div>
      <div className="ethicsx-hero-inner eth10-hero-inner">
        <p className="ethicsx-kicker">ETHOS / LECTIO · XX OCTOBRIS · MMXXVI</p>
        <div className="ethicsx-medallion" aria-hidden="true">Λ</div>
        <h1>Ética <em>Paradojas del sentido y destino estoico</em></h1>
        <p className="ethicsx-lead eth10-lead">De las contradicciones del trabajo al cosmos que retorna: razón, deber, circunstancias y vida humana.</p>
        <div className="ethicsx-question eth10-question">
          <span>Quaestio rectora</span>
          <strong>¿Qué debo hacer cuando cumplir mi deber no garantiza el bien que esperaba?</strong>
        </div>
        <div className="ethicsx-meta eth10-meta">
          <div><span>Fecha</span><strong>20 oct · 2026</strong></div>
          <div><span>Escuela</span><strong>Estoicismo</strong></div>
          <div><span>Concepto</span><strong>λόγος · logos</strong></div>
          <div><span>Apuntes</span><strong>3 páginas</strong></div>
        </div>
      </div>
    </header>
    <div className="eth15-ribbon eth20-ribbon" aria-label="Capas documentales">
      <span><i className="eth15-dot class"/> Comentario de clase</span>
      <span><i className="eth15-dot text"/> Apuntes y esquemas</span>
      <span><i className="eth15-dot check"/> Contraste académico</span>
    </div>
    <div className="eth10-layout eth15-layout">
      <aside className="eth10-index eth15-index eth20-index">
        <p>Index lectionis</p>
        {index.map(([id,title],n)=><button type="button" key={id} onClick={()=>go(id)}>
          <span>{String(n+1).padStart(2,'0')}</span><b>{title}</b>
        </button>)}
        <p className="eth20-index-note">Cada distinción entre clase, representación del esquema y verificación histórica aparece señalada en su contexto.</p>
      </aside>
      <article className="eth10-article eth15-article eth20-article">
        <section id="eth20-problema">
          <H num="01" label="El problema práctico">Paradojas de sentido: el justo puede perder</H>
          <p className="eth10-prose">La sesión parte de una expectativa moral: quien cumple su deber, trabaja, estudia y actúa correctamente debería generar bienestar personal y social. Sin embargo, las circunstancias pueden invertir el resultado. Se trata de lo que el profesor llama <strong>«paradojas del sentido»</strong>, no de una demostración de que el mundo sea formalmente contradictorio.</p>
          <div className="eth20-opposites">
            <article><span>Hipótesis</span><strong>Actúo correctamente</strong><b>↓</b><p>Espero un bien propio y un bien para los demás.</p></article>
            <article><span>Situación adversa</span><strong>Actúo correctamente</strong><b>↓</b><p>Pero pierdo ingresos, salud u oportunidades; el beneficio social tampoco está asegurado.</p></article>
          </div>
          <p className="eth10-prose">Se examinaron el trabajador que no obtiene vivienda o pensión después de décadas de esfuerzo, el empleado para quien el traslado y los costos absorben el salario, y el contraste entre rentas del capital y el ahorro salarial. También se observó que huir de un asalto puede ser prudente aunque superficialmente parezca cobardía. Los ejemplos se emplearon para pensar <strong>cómo el contexto transforma las consecuencias</strong>.</p>
          <div className="eth20-caveat"><strong>Frontera conceptual</strong><p>La afirmación «ser bueno garantiza prosperar» no es idéntica a la ética estoica clásica, que distingue virtud de ventajas externas. Las seis tesis de Cicerón en <em>Paradoxa Stoicorum</em> tampoco son esta misma tipología de problemas sociales contemporáneos.</p></div>
        </section>
        <section id="eth20-sistema">
          <H num="02" label="El sistema filosófico">De la metafísica al «¿qué debo hacer?»</H>
          <p className="eth10-prose">La clase liga <strong>metafísica, física, lógica y ética</strong>. El pensamiento y el cuerpo se estudian como aspectos de una misma existencia, no como compartimentos aislados. El <em>logos</em> —λόγος— reúne resonancias de lenguaje y razón y es presentado como principio que hace inteligible el cosmos.</p>
          <div className="eth20-system" role="img" aria-label="Esquema: comprensión del mundo y de la física, examen lógico de los juicios y decisión ética">
            <div><span>Φύσις</span><strong>Física / metafísica</strong><small>Comprender el mundo</small></div><b>→</b>
            <div><span>Λόγος</span><strong>Lógica y juicio</strong><small>Examinar razones</small></div><b>→</b>
            <div><span>Ἦθος</span><strong>Ética</strong><small>Cómo vivir y actuar</small></div>
          </div>
          <p className="eth10-prose">El profesor dibujó un principio racional preexistente que orienta el mundo hacia una finalidad, a veces descrito como «espíritu absoluto». <strong>Precisión histórica:</strong> los estoicos conciben un principio activo <em>corpóreo e inmanente</em>, asociado a Dios, fuego inteligente y <em>pneuma</em>. No corresponde identificarlo sin más con el Espíritu absoluto de Hegel ni con el Estado político concreto.</p>
        </section>
        <section id="eth20-deber">
          <H num="03" label="Responsabilidad y política">El peligro de convertir el deber en obediencia</H>
          <p className="eth10-prose">En su lectura crítica, el profesor presenta a la persona que obedece una orden dañina y luego declara que sólo cumplía con su deber. Los ejemplos incluyen militares, funcionarios, instituciones e incluso vínculos familiares. El punto no es recomendar la violencia, sino preguntar <strong>si una autoridad puede eximir a alguien del juicio moral</strong>.</p>
          <div className="eth20-opposites eth20-duty">
            <article><span>Obediencia irreflexiva</span><strong>«La orden lo exige»</strong><p>El individuo delega la decisión y deja de examinar el daño.</p></article>
            <article><span>Deliberación moral</span><strong>«¿Es justo?»</strong><p>La autoridad no reemplaza la responsabilidad hacia las personas.</p></article>
          </div>
          <p className="eth10-prose">Esta interpretación del docente no se debe atribuir como enseñanza universal de la Stoa. El estoicismo antiguo también desarrolló concepciones de justicia, comunidad y responsabilidad por nuestros juicios. El problema de las secuelas de la guerra cuestiona, además, la versión moderna que promete insensibilidad absoluta.</p>
        </section>
        <section id="eth20-afectos">
          <H num="04" label="Cuerpo y elección">Examinar sentimientos no es negar que existen</H>
          <p className="eth10-prose">La dimensión que el profesor considera recuperable del estoicismo es la práctica de observar pensamientos, impulsos y emociones: anticipar cómo una decisión nos puede afectar y aprender a responder con criterio. Una profesión incompatible con ciertos límites personales, o un trabajo que ocasiona sufrimiento persistente, exige examen y no sólo resistencia mecánica.</p>
          <p className="eth10-prose">La discusión del gimnasio cuestiona la expansión de la <strong>meritocracia</strong>: los resultados corporales de un entrenamiento sistemático no prueban que el éxito económico dependa exclusivamente de esfuerzo individual. El ejercicio puede orientarse a la salud y no a la exhibición o al rendimiento competitivo.</p>
          <div className="eth20-sentence"><span>Cuestión de estudio</span><strong>¿La fortaleza consiste en no sentir o en examinar lo que siento para actuar mejor?</strong></div>
        </section>
        <section id="eth20-retorno">
          <H num="05" label="Destino y temporalidad">El cosmos que vuelve: mundo uno y mundo dos</H>
          <p className="eth10-prose">Los diagramas segundo y tercero comparan dos ciclos: el mundo retorna tras un proceso de devenir y corrupción. La clase afirma que reaparecerían personas, dolores y acontecimientos; Edipo es la imagen dramática de quien intenta huir de lo que finalmente sucede.</p>
          <div className="eth20-cycle" role="img" aria-label="Dos mundos conectados por la conflagración o retorno cósmico">
            <div><span>Ciclo I</span><strong>Mundo 1</strong><small>Vida · acontecimientos</small></div>
            <div className="eth20-cycle-center"><b>↻</b><span>Retorno cósmico</span></div>
            <div><span>Ciclo II</span><strong>Mundo 2</strong><small>Reaparición del orden</small></div>
          </div>

          <figure className="eth20-manuscript-primary">
            <div className="eth20-manuscript-topline">
              <span>Apunte personal · Folio III / III</span>
              <a href={eth20Facsimile('hoja-03-eterno-retorno.svg')} target="_blank" rel="noopener noreferrer">Abrir dibujo a tamaño completo ↗</a>
            </div>
            <a className="eth20-manuscript-viewport" href={eth20Facsimile('hoja-03-eterno-retorno.svg')} target="_blank" rel="noopener noreferrer" aria-label="Ampliar el dibujo manuscrito de los dos mundos y el eterno retorno">
              <img src={eth20Facsimile('hoja-03-eterno-retorno.svg')} loading="lazy" decoding="async" width="1200" height="535"
                alt="Dibujo manuscrito original de la tercera hoja: una flecha de creación conduce al mundo uno; aparecen hechos necesarios, dolor humano, Estado y ley, decadencia y corrupción; el eterno retorno une este ciclo con un mundo dos equivalente." />
            </a>
            <figcaption><strong>La tercera hoja, sin reinterpretaciones gráficas.</strong> Sus dos ciclos, flechas, rótulos manuscritos y anotaciones de color reproducen el dibujo del PDF. La identificación «mundo 1 = mundo 2» expresa el modelo presentado en la clase; su precisión histórica se discute en el texto de la sesión.</figcaption>
          </figure>
          <p className="eth10-prose">El profesor introdujo también la imagen de <strong>átomos que caen en el vacío</strong>. Debe preservarse como parte del esquema enseñado, pero contrastarse históricamente: esa física recuerda ante todo el atomismo de Demócrito y Epicuro. La física estoica trabaja con principios activo y pasivo, mezcla, <em>pneuma</em> y una noción distinta del vacío.</p>
          <div className="eth20-caveat"><strong>Controversia antigua</strong><p>La conflagración y la recurrencia son asuntos relevantes para el estoicismo, aunque no todos los autores aceptaron exactamente las mismas tesis. Se debate si un ciclo reproduce literalmente a los mismos individuos. El retorno de Nietzsche es otro problema filosófico: la semejanza del nombre no autoriza una identidad doctrinal.</p></div>
        </section>
        <section id="eth20-analogias">
          <H num="06" label="Digresiones vinculadas">La adaptación forzada y la mirada que interpreta</H>
          <div className="eth20-illustrations">
            <article><span>Franz Kafka · teatro</span><h3>Informe para una academia</h3><p>Se comentó una adaptación teatral del relato de un simio que aprende conductas humanas como estrategia de supervivencia tras su captura. Se discutieron transformación de la vida, imposición externa y dolor. Es una referencia contextual, no una lectura asignada.</p></article>
            <article><span>Hegel · ciencia · arte</span><h3>La descripción y el concepto</h3><p>La clase contrapuso describir datos y formar conceptos. Una fotografía cambia con el punto de vista del fotógrafo: representar un objeto no equivale simplemente a copiarlo. Son analogías docentes, no citas atribuidas a Hegel.</p></article>
          </div>
        </section>

        <section id="eth20-apuntes" className="eth20-facsimile-gallery">
          <div className="eth15-diagram-header">
            <span>Archivum personalis · documento fuente</span>
            <h2>Sus dibujos originales, hoja por hoja</h2>
            <p>Facsímiles vectoriales extraídos de los trazos del PDF. Se conserva la letra original y sus anotaciones; los diagramas interactivos aparecen aparte como interpretación pedagógica.</p>
          </div>
          <div className="eth20-facsimile-grid">
            {[
              {
                file: 'hoja-01-paradojas-y-logos.svg',
                title: 'I · Paradojas del sentido',
                description: 'Relación entre metafísica, física, lógica y ética; contraste de hipótesis y paradoja; primer bosquejo del orden cósmico.',
                alt: 'Primera hoja manuscrita sobre paradojas del sentido: flechas de metafísica a física y ética, hipótesis y fórmula lógica, y dibujo inicial del cosmos.'
              },
              {
                file: 'hoja-02-logos-y-ciclos.svg',
                title: 'II · Logos, vacío y ciclos',
                description: 'Logos y escatología, caída de átomos y dos ciclos del mundo. Deben leerse como esquema docente y no como cita textual antigua.',
                alt: 'Segunda hoja manuscrita: logos, átomo y vacío, flechas de caída, historia de la humanidad y diagrama cíclico que compara mundo uno y mundo dos.'
              }
            ].map((folio) => (
              <figure className="eth20-facsimile-sheet" key={folio.file}>
                <div className="eth20-manuscript-topline"><span>Apunte original</span><a href={eth20Facsimile(folio.file)} target="_blank" rel="noopener noreferrer">Ampliar ↗</a></div>
                <a href={eth20Facsimile(folio.file)} target="_blank" rel="noopener noreferrer" aria-label={'Abrir original · ' + folio.title}>
                  <img src={eth20Facsimile(folio.file)} loading="lazy" decoding="async" alt={folio.alt} />
                </a>
                <figcaption><h3>{folio.title}</h3><p>{folio.description}</p></figcaption>
              </figure>
            ))}
          </div>
          <p className="eth20-facsimile-credit">Autoría de los dibujos: apuntes del estudiante, 20 de octubre de 2026. Procedencia: PDF <em>estoicos.pdf</em>, folios 1–3. Conversión técnica a SVG sin añadir leyendas ni trazos interpretativos.</p>
        </section>
        <section id="eth20-esquemas" className="eth20-schemes">
          <div className="eth15-diagram-header"><span>Schema studii · lectura visual</span><h2>Cuatro esquemas de los apuntes</h2><p>Elija una relación. Los nodos crecen con el texto y se ordenan verticalmente para evitar solapamientos en teléfono y tableta.</p></div>
          <div className="eth20-tabs" role="group" aria-label="Seleccionar esquema">
            {esquemas.map((s,i)=><button type="button" key={s.number} aria-pressed={i===selectedIndex} className={i===selectedIndex?'current':''} onClick={()=>setSelectedIndex(i)}><small>{s.number}</small>{s.title}</button>)}
          </div>
          <div className="eth20-schema-panel" aria-live="polite">
            <header><span>Esquema {current.number}</span><h3>{current.title}</h3></header>
            <div className="eth20-node-track">
              {current.nodes.map((n,i)=><div key={n[0]} className="eth20-node">
                <span className="eth20-node-number">{String(i+1).padStart(2,'0')}</span><h4>{n[0]}</h4><p>{n[1]}</p>
                {i<current.nodes.length-1&&<span className="eth20-node-arrow" aria-hidden="true">↓</span>}
              </div>)}
            </div>
            <p className="eth20-schema-detail"><strong>Explicación:</strong> {current.note}</p>
            <p className="eth20-schema-source"><strong>Procedencia:</strong> {current.source}</p>
          </div>
        </section>
        <section id="eth20-biblioteca">
          <H num="08" label="Bibliotheca">Cicerón y las fuentes para contrastar</H>
          <p className="eth10-prose">La biblioteca ya registra la recomendación de <em>Las paradojas de los estoicos</em> de Cicerón. El libro formula seis tesis sobre virtud, felicidad, juicio, sabiduría, libertad y riqueza. Se vincula conceptualmente con esta clase, pero <strong>no se acredita lectura íntegra</strong>.</p>
          <div className="eth15-source-grid">
            <Link className="eth15-source-card" to="/biblioteca?obra=Cicer%C3%B3n%20-%20Las%20paradojas%20de%20los%20estoicos"><span>Recomendación · Ética</span><h3>Cicerón · Paradoxa Stoicorum</h3><p>Ficha, seis tesis y contexto de recomendación.</p><b>Biblioteca ↗</b></Link>
            <a className="eth15-source-card" href="https://plato.stanford.edu/entries/stoicism/" target="_blank" rel="noopener noreferrer"><span>Verificación externa</span><h3>Stanford Encyclopedia · Stoicism</h3><p>Física, principios, logos, destino y recurrencia.</p><b>Consultar ↗</b></a>
            <a className="eth15-source-card" href="https://iep.utm.edu/stoicism/" target="_blank" rel="noopener noreferrer"><span>Verificación externa</span><h3>Internet Encyclopedia · Stoicism</h3><p>La relación entre lógica, física y ética; virtud y bienes exteriores.</p><b>Consultar ↗</b></a>
            <a className="eth15-source-card" href="https://iep.utm.edu/cicero-roman-philosopher/" target="_blank" rel="noopener noreferrer"><span>Verificación externa</span><h3>Internet Encyclopedia · Cicero</h3><p>Cicerón se vinculó con la Academia y recurrió a ideas estoicas; no fue sencillamente estoico.</p><b>Consultar ↗</b></a>
          </div>
          <div className="eth20-close"><strong>Continuidad</strong><p>No se identificó una tarea nueva con consigna y entrega verificables. El profesor anunció que la clase del <strong>jueves 22 de octubre será en línea</strong>.</p><div><Link to="/semestre/5/etica/clase/15-octubre">← Clase anterior · Cármides</Link><Link to="/semestre/5/etica">Volver al índice →</Link></div></div>
        </section>
      </article>
    </div>
    <footer className="ethicsx-footer eth10-footer"><Link to="/semestre/5/etica">← Ética</Link><span>λόγος · φύσις · ἦθος</span><span>XX · X · MMXXVI</span></footer>
    <div className="ethicsx-meander" aria-hidden="true"/>
  </main>
}
