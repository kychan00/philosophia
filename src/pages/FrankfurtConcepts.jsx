import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const concepts = [
  ['teoria-critica','Programa / Horkheimer','Núcleo común','Teoría crítica de la sociedad','Comprender la sociedad como totalidad para revelar sus contradicciones y abrir la posibilidad de transformarla.','No se limita a describir hechos aislados. Interroga la organización global de la sociedad y vincula conocimiento con un interés por una forma de vida menos opresiva.','totalidad → contradicción → crítica → transformación'],
  ['totalidad','Escuela de Frankfurt','Núcleo común','Totalidad','La sociedad no es una suma de sectores aislados.','Economía, historia, psicología y cultura se condicionan recíprocamente. Un hecho social adquiere sentido dentro de la estructura de relaciones de la que forma parte.','hecho aislado → relaciones → sociedad como un todo'],
  ['dialectica','Frankfurt / Adorno','Núcleo común','Dialéctica','Pensar las contradicciones reales sin convertir la sociedad en un sistema armónico.','La dialéctica atiende tensiones, conflictos y oposiciones objetivas. Su fuerza crítica consiste en impedir que lo existente aparezca como natural o definitivo.','totalidad ↔ contradicción'],
  ['emancipacion','Escuela de Frankfurt','Núcleo común','Emancipación','Horizonte de una sociedad menos explotadora y más autónoma.','La crítica aspira a condiciones en las que libertad, creatividad y desarrollo humano no queden subordinados a estructuras opresivas.','diagnóstico crítico → posibilidad de otra sociedad'],
  ['dialectica-negativa','Adorno','Adorno','Dialéctica negativa','La crítica se mantiene negativa porque rehúsa reconciliar conceptualmente una realidad que sigue siendo contradictoria.','Adorno toma de Hegel el impulso dialéctico, pero rechaza la síntesis como clausura. La negatividad impide que pensamiento y realidad se identifiquen prematuramente. El concepto debe reconocer su fracaso ante lo singular y mantener visible aquello que el sistema excluye o reprime.','identidad impuesta → contradicción → negación → no-identidad → apertura crítica'],
  ['no-identidad','Adorno','Adorno','No-identidad','El objeto es siempre más que el concepto que lo clasifica.','Pensamiento y realidad no coinciden plenamente. Lo singular y cualitativo resiste la reducción a una categoría universal.','concepto ≠ objeto'],
  ['primacia-objeto','Adorno','Adorno','Primacía del objeto','La realidad debe corregir nuestras categorías, no al revés.','La tarea materialista consiste en dejar hablar al objeto contra esquemas conceptuales cerrados.','objeto → límite del concepto → crítica'],
  ['positivismo','Adorno','Adorno','Crítica del positivismo','Los hechos sociales no son datos últimos e inmóviles.','Registrar hechos sin preguntar por las relaciones que los producen puede convertir la ciencia en aceptación de lo existente.','hecho → condiciones sociales → crítica del todo'],
  ['dialectica-ilustracion','Adorno + Horkheimer','Adorno + Horkheimer','Dialéctica de la Ilustración','La Ilustración contiene una contradicción interna: la razón que quería liberar del miedo puede transformarse en técnica de dominio.','Adorno y Horkheimer usan “Ilustración” en un sentido más amplio que el siglo XVIII: designa el proceso histórico de racionalizar y hacer calculable el mundo. Su dialéctica aparece cuando ese impulso emancipador convierte naturaleza, sociedad e individuo en objetos manipulables y el saber termina valorado por su funcionalidad antes que por su verdad.','emancipación racional → dominio de la naturaleza → instrumentalización → sociedad administrada'],
  ['razon-instrumental','Horkheimer / Adorno','Adorno + Horkheimer','Razón instrumental','La razón se vuelve instrumental cuando sólo calcula medios eficaces y renuncia a discutir racionalmente los fines.','Para Horkheimer, la razón subjetiva moderna calcula probabilidades, coordina medios y optimiza procedimientos, pero deja de poder afirmar que un fin sea racional o justo en sí mismo. Cuando los fines llegan desde el sistema, la razón conserva enorme potencia técnica mientras pierde autonomía normativa.','fines heterónomos → cálculo → eficiencia → administración → dominación'],
  ['razon-objetiva','Horkheimer','Horkheimer','Razón objetiva / razón subjetiva','De una razón capaz de discutir fines a una razón reducida al cálculo.','La razón objetiva podía interrogar por fines y valores; la subjetiva se limita a coordinar medios y probabilidades.','razón objetiva → eclipse → razón subjetiva'],
  ['dominio-naturaleza','Horkheimer / Adorno','Adorno + Horkheimer','Dominación de la naturaleza','Controlar la naturaleza prepara una lógica que también puede aplicarse a los seres humanos.','La racionalización moderna conoce para someter; esa misma estructura retorna sobre el individuo mediante técnica y administración.','naturaleza como objeto → técnica → administración del hombre'],
  ['sociedad-administrada','Adorno + Horkheimer','Adorno + Horkheimer','Sociedad administrada','La existencia queda organizada por aparatos técnicos, económicos y burocráticos.','El individuo aparece como objeto de gestión; producción, necesidades y conducta son coordinadas por el sistema.','aparato técnico → administración → pérdida de autonomía'],
  ['industria-cultural','Adorno + Horkheimer','Adorno + Horkheimer','Industria cultural','La cultura deja de ser sólo expresión y entretenimiento: se integra al aparato que produce adaptación, necesidades y conformidad.','La industria cultural reúne medios de masas y formas estandarizadas de entretenimiento que difunden valores, modelos de conducta, necesidades y lenguaje. Su eficacia no depende sólo de propaganda explícita: organiza hábitos, expectativas e incluso el tiempo libre, acostumbrando al individuo a recibir pasivamente lo que el sistema ya ha seleccionado.','razón instrumental → producción cultural → estandarización → pasividad → conformismo'],
  ['racionalidad-tecnologica','Marcuse','Marcuse','Racionalidad tecnológica','La eficiencia técnica se presenta como si fuera racionalidad sin más.','Productividad, control y adaptación pueden legitimar relaciones de dominio y neutralizar la crítica.','técnica → eficiencia → dominio legitimado'],
  ['sociedad-unidimensional','Marcuse','Marcuse','Sociedad unidimensional','La unidimensionalidad nombra una sociedad en la que la oposición crítica es absorbida y las alternativas dejan de parecer pensables.','En Marcuse, la sociedad industrial avanzada no domina sólo mediante prohibición. Integra al individuo satisfaciendo y produciendo necesidades, organizando capacidades y aspiraciones, y haciendo que el orden existente parezca el único racional. El resultado es una reducción del espacio de negación y protesta.','racionalidad tecnológica → integración → necesidades administradas → oposición absorbida → unidimensionalidad'],
  ['hombre-unidimensional','Marcuse','Marcuse','Hombre unidimensional','El hombre unidimensional es el sujeto cuya capacidad de negar y trascender el orden vigente ha sido debilitada.','No es simplemente una persona superficial. Es el individuo socialmente integrado cuya experiencia, necesidades y lenguaje se forman dentro de una racionalidad tecnológica que reduce la distancia crítica frente a lo existente.','sociedad unidimensional → integración subjetiva → debilitamiento de la protesta'],
  ['represion','Marcuse + Freud','Marcuse','Principio de realidad y represión','La represión civilizatoria no tiene por qué ser una necesidad eterna.','Marcuse acepta que la civilización exige renuncias, pero discute que la oposición entre placer y realidad sea metafísicamente inmutable.','placer → represión histórica → posibilidad de transformación'],
  ['eros','Marcuse','Marcuse','Eros liberado','Una racionalidad de satisfacción frente a la lógica de la represión.','El desarrollo técnico podría liberar juego, imaginación y creatividad, aunque el poder bloquee esas potencialidades.','técnica → tiempo liberado → juego / creatividad'],
  ['gran-rechazo','Marcuse','Marcuse','Gran Rechazo','Negarse a aceptar como definitivo el orden existente.','La teoría crítica conserva la negación de condiciones intolerables aunque no posea una receta positiva del futuro.','negación → resistencia → apertura histórica'],
  ['miedo-libertad','Fromm','Fromm','Miedo a la libertad / conformismo','La libertad puede sentirse como una carga y producir fuga hacia la obediencia.','El individuo puede buscar seguridad sometiéndose, dominando o adaptándose al grupo para escapar de responsabilidad y soledad.','libertad → ansiedad → conformismo'],
  ['desobediencia','Fromm','Fromm','Desobediencia','La capacidad de decir no es condición de libertad.','Crecer como individuo exige poder cuestionar autoridades y normas cuando contradicen conciencia y razón.','crítica → desobediencia → libertad'],
  ['tener-ser','Fromm','Fromm','Tener / ser','Dos modos de existencia y de relación con el mundo.','En el tener, la identidad depende de posesiones y consumo; en el ser predominan independencia, libertad, razón crítica y desarrollo de capacidades.','tener / consumir ↔ ser / desplegar capacidades'],
  ['otro','Horkheimer','Horkheimer','Nostalgia de lo completamente otro','La injusticia no debería tener la última palabra.','La teología aparece como esperanza de justicia perfecta para las víctimas y como rechazo a absolutizar cualquier orden histórico.','finitud → injusticia irreparable → esperanza de justicia'],
].map(([id,author,group,title,short,definition,relation]) => ({ id,author,group,title,short,definition,relation,source:'Reale y Antiseri · Escuela de Francfort' }))

const axialDepth = {
  "dialectica-negativa": "No significa simplemente “ser negativo”. Es un método contra la reconciliación falsa: si la realidad contiene sufrimiento, antagonismo e injusticia, una teoría que la presenta como totalidad armónica termina justificándola.",
  "dialectica-ilustracion": "La tesis no es “la razón es mala”. El problema es una forma histórica de racionalidad que, al absolutizar control, cálculo y utilidad, destruye la autonomía que pretendía producir.",
  "razon-instrumental": "Éste es uno de los conceptos explícitamente centrales del programa. La paradoja es que puede existir una sociedad extremadamente racional en sus procedimientos y profundamente irracional en sus fines.",
  "industria-cultural": "No significa simplemente “cultura popular” ni equivale a decir que todo entretenimiento sea malo. Critica la industrialización y administración de la cultura cuando ésta reproduce los fines establecidos por el sistema.",
  "sociedad-unidimensional": "“Unidimensionalidad” funciona como etiqueta general, pero conviene distinguir sociedad unidimensional y hombre unidimensional: la primera es la estructura sin oposición; el segundo es el sujeto formado dentro de esa estructura.",
  "hombre-unidimensional": "La pareja conceptual correcta es: sociedad unidimensional = estructura; hombre unidimensional = forma de subjetividad producida por esa estructura."
}

const conceptMeta = {
  "dialectica-negativa": {
    "displayTitle": "Dialéctica negativa",
    "problem": "¿Cómo criticar una realidad contradictoria sin clausurarla mediante una síntesis reconciliadora?",
    "denounces": "La falsa identidad entre concepto y realidad; toda teoría que convierte el sufrimiento y la contradicción en simple armonía.",
    "formula": "no-identidad · contradicción abierta · crítica sin reconciliación",
    "exam": "Explique por qué Adorno llama “negativa” a su dialéctica y de qué manera se opone a una síntesis conciliadora de estilo hegeliano.",
    "tags": [
      "Adorno",
      "no-identidad",
      "método",
      "crítica"
    ],
    "keys": [
      "La negatividad no es puro pesimismo: es método de resistencia contra el cierre conceptual.",
      "El concepto debe reconocer que nunca agota por completo a lo singular.",
      "La crítica conserva visible aquello que el sistema normaliza, reprime o justifica."
    ],
    "connections": [
      "prepara el suelo metodológico de toda la Teoría Crítica",
      "se opone a filosofías de la totalidad reconciliada",
      "permite leer la sociedad desde sus antagonismos reales"
    ]
  },
  "dialectica-ilustracion": {
    "displayTitle": "Dialéctica de la Ilustración",
    "problem": "¿Cómo puede la razón ilustrada, nacida para emancipar del mito y del miedo, terminar reproduciendo dominio?",
    "denounces": "La inversión interna de la Ilustración cuando la racionalización deviene control, cálculo y administración total.",
    "formula": "emancipación → cálculo → dominio → regresión",
    "exam": "Desarrolle la tesis según la cual la Ilustración tiene una dialéctica interna y puede degenerar en nuevas formas de dominación.",
    "tags": [
      "Adorno",
      "Horkheimer",
      "Ilustración",
      "dominio"
    ],
    "keys": [
      "La Ilustración es entendida como un proceso histórico amplio de racionalización y desmitificación.",
      "Su paradoja: al absolutizar el control de la naturaleza, termina cosificando también al ser humano.",
      "No se critica a la razón en sí, sino una forma histórica de racionalidad convertida en instrumento de poder."
    ],
    "connections": [
      "conduce al problema de la razón instrumental",
      "explica la sociedad administrada",
      "articula crítica de mito, técnica y modernidad"
    ]
  },
  "razon-instrumental": {
    "displayTitle": "Razón instrumental",
    "problem": "¿Qué ocurre cuando la razón sólo puede calcular medios eficaces pero ya no justificar racionalmente los fines?",
    "denounces": "La reducción de la razón a eficiencia, utilidad, coordinación de medios y adaptación a fines dados desde fuera.",
    "formula": "medios eficaces sin juicio sobre fines",
    "exam": "Explique la diferencia entre una razón capaz de juzgar fines y una razón reducida a mera instrumentación técnica.",
    "tags": [
      "Horkheimer",
      "medios/fines",
      "eficiencia",
      "administración"
    ],
    "keys": [
      "La razón conserva gran potencia técnica, pero pierde contenido normativo.",
      "Puede haber extrema racionalidad procedimental y profunda irracionalidad moral o política.",
      "Es un eje para leer burocracia, técnica, organización y dominación moderna."
    ],
    "connections": [
      "sirve de puente entre Dialéctica de la Ilustración e industria cultural",
      "explica la racionalización de la sociedad administrada",
      "anticipa críticas posteriores a la tecnocracia"
    ]
  },
  "industria-cultural": {
    "displayTitle": "Industria cultural",
    "problem": "¿Cómo se convierte la cultura en aparato de integración y conformismo en vez de espacio autónomo de formación crítica?",
    "denounces": "La estandarización, serialización y administración de la cultura cuando ésta reproduce hábitos, necesidades y obediencia.",
    "formula": "cultura administrada · estandarización · pasividad",
    "exam": "Explique por qué Adorno y Horkheimer no identifican sin más cultura de masas con arte popular, sino con producción cultural administrada.",
    "tags": [
      "Adorno",
      "Horkheimer",
      "mass media",
      "conformismo"
    ],
    "keys": [
      "No critica toda diversión, sino la lógica industrial que vuelve intercambiables productos y conciencias.",
      "La cultura deja de ofrecer distancia crítica y se integra al mismo sistema que administra trabajo y consumo.",
      "Incluso el tiempo libre queda organizado por formas repetitivas de recepción."
    ],
    "connections": [
      "depende de la lógica de la razón instrumental",
      "prepara el análisis marcusiano de integración social",
      "explica adaptación subjetiva y empobrecimiento de la experiencia"
    ]
  },
  "sociedad-unidimensional": {
    "displayTitle": "Sociedad unidimensional",
    "problem": "¿Cómo logra una sociedad avanzada absorber la oposición y presentar lo existente como la única realidad racional posible?",
    "denounces": "La integración social de la crítica mediante necesidades administradas, bienestar regulado y racionalidad tecnológica.",
    "formula": "integración · necesidades producidas · oposición absorbida",
    "exam": "Desarrolle el sentido de “sociedad unidimensional” y muestre cómo la dominación puede ejercerse integrando, no sólo reprimiendo.",
    "tags": [
      "Marcuse",
      "integración",
      "tecnología",
      "sociedad"
    ],
    "keys": [
      "La dominación ya no opera sólo mediante prohibición, sino por incorporación y satisfacción dirigida.",
      "El sistema vuelve innecesarias o impensables alternativas radicales.",
      "La crítica pierde espesor porque el orden vigente parece coincidir con lo racional."
    ],
    "connections": [
      "es la culminación social del proceso descrito por Frankfurt",
      "se vincula con hombre unidimensional",
      "traduce la crítica al plano de vida cotidiana y consumo"
    ]
  },
  "hombre-unidimensional": {
    "displayTitle": "Hombre unidimensional",
    "problem": "¿Qué clase de sujeto produce una sociedad que ha debilitado la negación, la trascendencia y la imaginación de otro mundo posible?",
    "denounces": "La formación de subjetividades integradas que ya no perciben la distancia entre necesidades impuestas y libertad auténtica.",
    "formula": "subjetividad integrada · crítica debilitada",
    "exam": "Distinga entre sociedad unidimensional y hombre unidimensional, mostrando cómo el segundo es el resultado subjetivo de la primera.",
    "tags": [
      "Marcuse",
      "subjetividad",
      "integración",
      "necesidades"
    ],
    "keys": [
      "No es sólo alguien superficial: es un sujeto socialmente producido.",
      "Su lenguaje, deseos y horizonte de expectativas ya vienen formateados por el sistema.",
      "La protesta se debilita porque la integración parece natural y hasta satisfactoria."
    ],
    "connections": [
      "es la consecuencia antropológica de la sociedad unidimensional",
      "resume el problema de la subjetividad en Frankfurt",
      "enlaza con la crítica de necesidades falsas"
    ]
  }
}

const groups = ['Todos','Núcleo común','Adorno','Horkheimer','Adorno + Horkheimer','Marcuse','Fromm']
const spine = ['TOTALIDAD','CONTRADICCIÓN','NO-IDENTIDAD','RAZÓN INSTRUMENTAL','ADMINISTRACIÓN','SUJETO','NEGACIÓN','EMANCIPACIÓN']

export default function FrankfurtConcepts() {
  const [group,setGroup] = useState('Todos')
  const [query,setQuery] = useState('')
  const [selectedId,setSelectedId] = useState('teoria-critica')

  const [studied, setStudied] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('philosophia-frankfurt-concepts-studied') || '[]')
    } catch {
      return []
    }
  })
  const [compareLeft, setCompareLeft] = useState('dialectica-negativa')
  const [compareRight, setCompareRight] = useState('razon-instrumental')
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizReveal, setQuizReveal] = useState(false)

  const quizIds = [
    'dialectica-negativa',
    'dialectica-ilustracion',
    'razon-instrumental',
    'industria-cultural',
    'sociedad-unidimensional',
    'hombre-unidimensional',
  ]

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const toggleStudied = (id) => {
    setStudied((current) => {
      const next = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
      localStorage.setItem('philosophia-frankfurt-concepts-studied', JSON.stringify(next))
      return next
    })
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return concepts.filter((item) =>
      (group === 'Todos' || item.group === group) &&
      (!q || [item.title,item.author,item.short,item.definition,item.relation].join(' ').toLowerCase().includes(q))
    )
  }, [group,query])

  const selected = concepts.find((item) => item.id === selectedId) || concepts[0]

  const compareA = concepts.find((item) => item.id === compareLeft) || concepts[0]
  const compareB = concepts.find((item) => item.id === compareRight) || concepts[1]
  const quizConcept =
    concepts.find((item) => item.id === quizIds[quizIndex]) || concepts[0]

  return (
    <main className="frankfurt-concepts-page">
      <nav className="frankfurt-concepts-nav">
        <Link to="/tareas/teoria-critica/escuela-de-frankfurt">← Frankfurt</Link>
        <Link to="/" className="frankfurt-concepts-brand">Φ · Philosophia</Link>
        <Link to="/tareas">Calendario →</Link>
      </nav>

      <div className="frankfurt-v3-commandbar">
        <div className="frankfurt-v3-command-title">
          <span>LEXICON CRITICUM</span>
          <strong>Modo estudio</strong>
        </div>

        <div className="frankfurt-v3-command-actions">
          <button type="button" onClick={() => jumpTo('atlas')}>Atlas</button>
          <button type="button" onClick={() => jumpTo('glossary')}>Glosario</button>
          <button type="button" onClick={() => jumpTo('compare')}>Comparar</button>
          <button type="button" onClick={() => jumpTo('exam')}>Examen</button>
        </div>

        <div className="frankfurt-v3-command-progress">
          <span>{studied.length}/{concepts.length}</span>
          <i>
            <b style={{ width: `${Math.round((studied.length / concepts.length) * 100)}%` }} />
          </i>
        </div>
      </div>


      <header className="frankfurt-concepts-hero">
        <figure className="ph-book-cover frankfurt-concepts-cover">
          <img src="/philosophia/images/books/reale-antiseri-tomo-iii.jpg" alt="Portada de Historia del pensamiento filosófico y científico III, de Giovanni Reale y Dario Antiseri" />
          <figcaption><span>REALE · ANTISERI</span><strong>Historia del pensamiento filosófico y científico III</strong><small>Herder · Escuela de Francfort</small></figcaption>
        </figure>

        <div className="frankfurt-concepts-hero-copy">
          <span>FI265 · TAREA DEL 27 DE AGOSTO</span>
          <h1>Lexicon <em>Criticum</em><strong>Conceptos de la Escuela de Frankfurt</strong></h1>
          <p>Vocabulario de trabajo para convertir la lectura de Reale y Antiseri en una arquitectura conceptual: autor, definición y relación.</p>
          <blockquote>No memorizar palabras aisladas: explicar por qué cada concepto obliga a introducir el siguiente.</blockquote>
        </div>

        <aside className="frankfurt-concepts-status">
          <span>LECTURA SISTEMATIZADA</span>
          <strong>{concepts.length} conceptos</strong>
          <small>Reale y Antiseri · Escuela de Francfort</small>
          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/mapas">Abrir mapas 2D →</Link>
        </aside>
      </header>



      <section id="atlas" className="frankfurt-v3-atlas">
        <div className="frankfurt-v3-atlas-head">
          <div>
            <span>ATLAS CRÍTICO · V3</span>
            <h2>Una constelación, no un glosario</h2>
            <p>
              Seleccione un nodo y estudie su función dentro del sistema.
              La página conserva el hilo entre método, razón, cultura y sociedad.
            </p>
          </div>

          <div className="frankfurt-v3-progress-card">
            <div
              className="frankfurt-v3-progress-ring"
              style={{ '--study-progress': `${Math.round((studied.length / concepts.length) * 100)}%` }}
            >
              <strong>{studied.length}</strong>
              <span>/{concepts.length}</span>
            </div>
            <div>
              <small>PROGRESO</small>
              <strong>{Math.round((studied.length / concepts.length) * 100)}%</strong>
              <span>conceptos revisados</span>
            </div>
          </div>
        </div>

        <div className="frankfurt-v3-constellation">
          <div className="frankfurt-v3-line line-a" aria-hidden="true" />
          <div className="frankfurt-v3-line line-b" aria-hidden="true" />
          <div className="frankfurt-v3-line line-c" aria-hidden="true" />
          <div className="frankfurt-v3-line line-d" aria-hidden="true" />

          {[
            ['dialectica-negativa','01','MÉTODO'],
            ['dialectica-ilustracion','02','HISTORIA'],
            ['razon-instrumental','03','RAZÓN'],
            ['industria-cultural','04','CULTURA'],
            ['sociedad-unidimensional','05','SOCIEDAD'],
          ].map(([id,n,label]) => {
            const item = concepts.find((concept) => concept.id === id)
            return (
              <button
                type="button"
                key={id}
                className={`frankfurt-v3-node node-${n} ${selected.id === id ? 'active' : ''}`}
                onClick={() => setSelectedId(id)}
              >
                <span>{n} · {label}</span>
                <strong>{item?.title}</strong>
                <small>{conceptMeta[id]?.formula || conceptMeta[id]?.problem}</small>
              </button>
            )
          })}

          <div className="frankfurt-v3-core">
            <span>PREGUNTA CENTRAL</span>
            <strong>
              ¿Cómo puede una sociedad que promete razón y libertad producir
              dominación, conformismo y pérdida de autonomía?
            </strong>
          </div>
        </div>

        <div className="frankfurt-v3-selected">
          <div className="frankfurt-v3-selected-main">
            <span>{selected.author}</span>
            <h3>{conceptMeta[selected.id]?.problem || selected.title}</h3>
            <p>{conceptMeta[selected.id]?.function || selected.definition}</p>
          </div>

          <div className="frankfurt-v3-selected-actions">
            <button
              type="button"
              className={studied.includes(selected.id) ? 'done' : ''}
              onClick={() => toggleStudied(selected.id)}
            >
              {studied.includes(selected.id) ? '✓ Revisado' : 'Marcar como revisado'}
            </button>
            <button type="button" onClick={() => jumpTo('glossary')}>
              Ver ficha completa ↓
            </button>
          </div>
        </div>
      </section>

      <section className="frankfurt-concepts-spine">
        <span>COLUMNA VERTEBRAL</span>
        <div>{spine.map((item,index) => <div key={item}><strong>{item}</strong>{index < spine.length - 1 && <b>→</b>}</div>)}</div>
      </section>

      <section id="glossary" className="frankfurt-concepts-workspace">
        <header>
          <div><span>INDEX CONCEPTUUM</span><h2>Buscar y abrir conceptos</h2></div>
          <label><span>Buscar</span><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="razón, totalidad, Marcuse…" /></label>
        </header>

        <div className="frankfurt-concepts-filters">
          {groups.map((item) => <button type="button" key={item} className={group === item ? 'active' : ''} onClick={() => setGroup(item)}>{item}</button>)}
        </div>

        <div className="frankfurt-concepts-layout">
          <div className="frankfurt-concepts-list">
            {filtered.map((item,index) => (
              <button
                type="button"
                key={item.id}
                data-axial={['dialectica-negativa','dialectica-ilustracion','razon-instrumental','industria-cultural','sociedad-unidimensional','hombre-unidimensional'].includes(item.id) ? 'true' : undefined}
                className={selected.id === item.id ? 'active' : ''}
                onClick={() => setSelectedId(item.id)}
              >
                <span>{String(index + 1).padStart(2,'0')}</span>
                <div><small>{item.author}</small><strong>{item.title}</strong><p>{item.short}</p></div>
              </button>
            ))}
          </div>
          <aside className="frankfurt-concept-detail">
            <span>{selected.author}</span><h3>{selected.title}</h3><strong>{selected.short}</strong><p>{selected.definition}</p>
            <div><small>RELACIÓN</small><b>{selected.relation}</b></div>
<div><small>FUENTE</small><b>{selected.source}</b></div>

            {conceptMeta[selected.id] && (
              <div className="frankfurt-v3-detail-intel">
                <article>
                  <small>PROBLEMA FILOSÓFICO</small>
                  <strong>{conceptMeta[selected.id].problem}</strong>
                </article>

                <article>
                  <small>FUNCIÓN EN EL SISTEMA</small>
                  <strong>{conceptMeta[selected.id].function}</strong>
                </article>

                <article>
                  <small>NO CONFUNDIR</small>
                  <strong>{conceptMeta[selected.id].contrast}</strong>
                </article>

                {conceptMeta[selected.id].formula && (
                  <article className="formula">
                    <small>FÓRMULA DE MEMORIA</small>
                    <strong>{conceptMeta[selected.id].formula}</strong>
                  </article>
                )}

                <article className="wide">
                  <small>CLAVES</small>
                  <ul>
                    {(conceptMeta[selected.id].keys || []).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article className="wide">
                  <small>CONEXIONES</small>
                  <ul>
                    {(conceptMeta[selected.id].connections || []).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article className="wide exam">
                  <small>POSIBLE PREGUNTA DEL PROFESOR</small>
                  <strong>{conceptMeta[selected.id].exam}</strong>
                </article>

                {conceptMeta[selected.id].misread && (
                  <article className="wide warning">
                    <small>ERROR FRECUENTE</small>
                    <strong>{conceptMeta[selected.id].misread}</strong>
                  </article>
                )}

                <button
                  type="button"
                  className={`frankfurt-v3-studied ${studied.includes(selected.id) ? 'done' : ''}`}
                  onClick={() => toggleStudied(selected.id)}
                >
                  {studied.includes(selected.id)
                    ? '✓ Concepto revisado'
                    : 'Marcar concepto como revisado'}
                </button>
              </div>
            )}
            {axialDepth[selected.id] && (
              <div className="frankfurt-depth">
                <small>POR QUÉ ES CENTRAL</small>
                <strong>{axialDepth[selected.id]}</strong>
              </div>
            )}
            {conceptMeta[selected.id] && (
              <div className="frankfurt-concept-intelligence">
                <article className="frankfurt-intel-card">
                  <small>PROBLEMA FILOSÓFICO</small>
                  <strong>{conceptMeta[selected.id].problem}</strong>
                </article>

                <article className="frankfurt-intel-card">
                  <small>QUÉ DENUNCIA</small>
                  <strong>{conceptMeta[selected.id].denounces}</strong>
                </article>

                <article className="frankfurt-intel-card">
                  <small>PREGUNTA DE EXAMEN</small>
                  <strong>{conceptMeta[selected.id].exam}</strong>
                </article>

                <article className="frankfurt-intel-card">
                  <small>FÓRMULA BREVE</small>
                  <strong>{conceptMeta[selected.id].formula}</strong>
                </article>

                <article className="frankfurt-intel-card frankfurt-intel-card-wide">
                  <small>CLAVES DE LECTURA</small>
                  <ul>
                    {conceptMeta[selected.id].keys.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article className="frankfurt-intel-card frankfurt-intel-card-wide">
                  <small>CONEXIONES</small>
                  <ul>
                    {conceptMeta[selected.id].connections.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            )}
          </aside>
        </div>
      </section>


      <section id="compare" className="frankfurt-v3-compare">
        <header>
          <span>COMPARATIO</span>
          <h2>Compare dos conceptos</h2>
          <p>
            Ponerlos frente a frente ayuda a distinguir nivel de análisis,
            función crítica y conexiones.
          </p>
        </header>

        <div className="frankfurt-v3-compare-controls">
          <label>
            <span>CONCEPTO A</span>
            <select value={compareLeft} onChange={(event) => setCompareLeft(event.target.value)}>
              {concepts.map((item) => (
                <option key={item.id} value={item.id}>{item.title}</option>
              ))}
            </select>
          </label>

          <div className="frankfurt-v3-versus">↔</div>

          <label>
            <span>CONCEPTO B</span>
            <select value={compareRight} onChange={(event) => setCompareRight(event.target.value)}>
              {concepts.map((item) => (
                <option key={item.id} value={item.id}>{item.title}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="frankfurt-v3-compare-grid">
          {[compareA, compareB].map((item, index) => (
            <article key={item.id} className={index === 0 ? 'left' : 'right'}>
              <span>{index === 0 ? 'A' : 'B'} · {item.author}</span>
              <h3>{item.title}</h3>
              <p>{item.definition}</p>

              <div>
                <small>PROBLEMA</small>
                <strong>{conceptMeta[item.id]?.problem || item.short}</strong>
              </div>
              <div>
                <small>FUNCIÓN</small>
                <strong>{conceptMeta[item.id]?.function || item.relation}</strong>
              </div>
              <div>
                <small>CONTRASTE</small>
                <strong>{conceptMeta[item.id]?.contrast || 'Distinga su función específica dentro del sistema.'}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="frankfurt-v3-compare-bridge">
          <small>PUENTE CONCEPTUAL</small>
          <strong>{compareA.title} → {compareA.relation}</strong>
          <b>↕</b>
          <strong>{compareB.title} → {compareB.relation}</strong>
        </div>
      </section>

      <section className="frankfurt-concepts-matrix">
        <header><span>MATRIZ DE AUTORES</span><h2>Una misma crítica, distintos puntos de entrada</h2></header>
        <div>
          <article><span>ADORNO</span><strong>no-identidad · dialéctica negativa</strong><p>Protege lo singular contra sistemas que pretenden absorberlo.</p></article>
          <article><span>HORKHEIMER</span><strong>razón instrumental · fines</strong><p>Pregunta cómo la razón termina convertida en instrumento de administración.</p></article>
          <article><span>ADORNO + HORKHEIMER</span><strong>Ilustración · industria cultural</strong><p>Reconstruyen la inversión de la promesa moderna de emancipación.</p></article>
          <article><span>MARCUSE</span><strong>unidimensionalidad · Gran Rechazo</strong><p>Analiza la integración del sujeto y conserva la posibilidad de negación.</p></article>
          <article><span>FROMM</span><strong>libertad · desobediencia · ser</strong><p>Estudia las fugas subjetivas de la libertad y las condiciones de una vida productiva.</p></article>
        </div>
      </section>


      <section id="exam" className="frankfurt-v3-exam">
        <div className="frankfurt-v3-exam-shell">
          <header>
            <span>EXAMEN ORAL · LABORATORIO</span>
            <h2>Explíquelo sin mirar la definición</h2>
            <p>
              Practique como si el profesor preguntara directamente por el concepto.
            </p>
          </header>

          <div className="frankfurt-v3-exam-stage">
            <aside>
              <span>{String(quizIndex + 1).padStart(2,'0')} / {quizIds.length}</span>
              <strong>{quizConcept.title}</strong>
              <small>{quizConcept.author}</small>
            </aside>

            <article>
              <small>PREGUNTA</small>
              <h3>{conceptMeta[quizConcept.id]?.exam || `Explique ${quizConcept.title}.`}</h3>

              {!quizReveal ? (
                <button type="button" onClick={() => setQuizReveal(true)}>
                  Mostrar respuesta base
                </button>
              ) : (
                <div className="frankfurt-v3-answer">
                  <span>RESPUESTA BASE</span>
                  <p>{quizConcept.definition}</p>

                  <div className="frankfurt-v3-answer-grid">
                    <div>
                      <small>NO OLVIDE</small>
                      <ul>
                        {(conceptMeta[quizConcept.id]?.keys || []).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <small>NO CONFUNDIR CON</small>
                      <p>{conceptMeta[quizConcept.id]?.contrast}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="frankfurt-v3-exam-actions">
                <button
                  type="button"
                  onClick={() => {
                    setQuizReveal(false)
                    setQuizIndex((quizIndex - 1 + quizIds.length) % quizIds.length)
                  }}
                >
                  ← Anterior
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setQuizReveal(false)
                    setQuizIndex((quizIndex + 1) % quizIds.length)
                  }}
                >
                  Siguiente →
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="frankfurt-concepts-final">
        <span>FORMULA STUDII</span><h2>La tarea en una sola relación</h2>
        <blockquote>SOCIEDAD MODERNA → RACIONALIZACIÓN → RAZÓN INSTRUMENTAL → ADMINISTRACIÓN → CONFORMISMO → CRÍTICA → NEGACIÓN → EMANCIPACIÓN</blockquote>
        <div><Link to="/tareas/teoria-critica/escuela-de-frankfurt">← Volver al sistema</Link><Link to="/tareas/teoria-critica/escuela-de-frankfurt/studium">Continuar al Studium →</Link></div>
      </section>
    </main>
  )
}
