import { useState } from 'react'
import { Link } from 'react-router'
import '../components/philosophy/system2d/System2DTheme.css'
import './CriticalTheoryClass15Oct.css'
import './CriticalTheoryClass20Oct.css'
import './CriticalTheoryClass22Oct.css'
import Critical22OctThematicAtlas from '../components/critical/Critical22OctThematicAtlas'
import Critical22OctSectionStudy from '../components/critical/Critical22OctSectionStudy'
import { critical22OctImage } from '../data/critical22OctImage'
import { critical22OctSourceSections } from '../data/critical22OctSourceSections'

const chapters = [
  {
    id: 'cultura',
    title: 'Cultura y civilización',
    topic: 'Problema',
    color: 'rust',
    before: 'La sesión cambia del análisis objetivo de estructuras sociales hacia la subjetividad.',
    body: 'La clase abrió vinculando cultura y proceso de civilización, con atención especial a la sociedad occidental. El problema no se planteó como una definición cerrada de cultura, sino como entrada al conflicto entre la vida psíquica del individuo y las exigencias de la sociedad.',
    after: 'Para estudiar ese conflicto, la profesora introdujo el recorrido intelectual de Freud.',
    simple: 'La cultura organiza la vida en común, pero esa organización también puede entrar en tensión con lo que cada individuo desea.',
    question: '¿Cuál es el problema que organiza la sesión?',
    answer: 'La tensión entre subjetividad individual y vida social, abordada desde Freud.',
    source: 'Explicación de clase.'
  },
  {
    id: 'giro',
    title: 'Del positivismo a la interpretación',
    topic: 'Método',
    color: 'gold',
    before: 'Freud aparece inicialmente ligado a una aspiración positivista.',
    body: 'Según la exposición, el descubrimiento del inconsciente obliga a modificar la mirada metodológica: no puede observarse de manera directa ni localizarse como un objeto físico. Por eso el acceso requiere mediaciones y una práctica de interpretación. La clase describió este desplazamiento como un paso hacia una mirada hermenéutica.',
    after: 'El inconsciente debe reconstruirse indirectamente a partir de sus manifestaciones.',
    simple: 'Freud no puede mirar el inconsciente como quien mira un órgano; tiene que interpretarlo por las huellas que deja.',
    question: '¿Por qué cambia el método?',
    answer: 'Porque el inconsciente no se presenta como un objeto directamente observable.',
    source: 'Explicación de clase sobre el desarrollo metodológico de Freud.'
  },
  {
    id: 'inconsciente',
    title: 'El inconsciente como instancia postulada',
    topic: 'Psique',
    color: 'blue',
    before: 'La interpretación se vuelve necesaria porque el objeto no aparece de forma inmediata.',
    body: 'El inconsciente fue presentado como un principio hipotético al que se llega de maneras indirectas. Las notas registran mediaciones como creencias, lenguaje escrito y hablado e imágenes o símbolos. La profesora añadió una conexión posterior con Lacan: el inconsciente estructurado como un lenguaje. Esa formulación se presenta aquí como vínculo lacaniano, no como frase atribuida a Freud.',
    after: 'La teoría necesita distinguir entre lo que puede observarse y lo que se infiere a través de mediaciones.',
    simple: 'No vemos el inconsciente directamente: inferimos que opera porque aparece en lo que decimos, creemos, simbolizamos o narramos.',
    question: '¿Qué estatuto tiene el inconsciente en esta explicación?',
    answer: 'Es una instancia postulada e interpretada mediante mediaciones.',
    source: 'Clase; conexión explícita con Lacan separada de la formulación freudiana.'
  },
  {
    id: 'hipotesis',
    title: 'Una teoría que tantea terreno',
    topic: 'Cautela',
    color: 'sage',
    before: 'Si el acceso es indirecto, la teoría no puede comportarse como si poseyera una objetivación total.',
    body: 'La profesora subrayó una pretensión más modesta: Freud formula hipótesis, cambia perspectivas y corrige sus modelos a lo largo de sus escritos. Señaló incluso que algunos psicoanalistas posteriores pueden ser más ortodoxos que el propio Freud. La clase insistió así en el carácter provisional de varias construcciones psicoanalíticas.',
    after: 'Los modelos del aparato psíquico se entienden como formulaciones sucesivas, no como un bloque inmóvil.',
    simple: 'Freud va probando explicaciones y las modifica; su teoría no aparece terminada de una vez.',
    question: '¿Qué actitud metodológica se atribuyó a Freud?',
    answer: 'Una elaboración hipotética y revisable que tantea el terreno.',
    source: 'Explicación y comentario de la profesora.'
  },
  {
    id: 'aparato',
    title: 'Modelos del aparato psíquico',
    topic: 'Estructura',
    color: 'plum',
    before: 'La teoría freudiana cambia de formulación a lo largo del tiempo.',
    body: 'Las notas conservan la afirmación de que existen al menos dos formulaciones del aparato psíquico. Se registró una formulación tardía con referencias a inconsciente, pulsiones de vida y muerte, yo y superyó; la segunda formulación no quedó identificada con claridad en los apuntes. Por fidelidad documental, esta página no completa esa laguna por inferencia.',
    after: 'El psicoanálisis articula estas hipótesis con la experiencia clínica y la interpretación.',
    simple: 'Freud usa distintos mapas para explicar la psique. En sus apuntes quedó uno parcialmente descrito y otro sin detalle suficiente.',
    question: '¿Por qué no se presentan aquí dos aparatos completos?',
    answer: 'Porque la fuente de clase no identifica con suficiente claridad la segunda formulación.',
    source: 'Apuntes de clase; laguna documental señalada expresamente.'
  },
  {
    id: 'psicoanalisis',
    title: 'Psicoanálisis: teoría, clínica e interpretación',
    topic: 'Disciplina',
    color: 'bronze',
    before: 'Los modelos psíquicos necesitan contrastarse con narraciones y experiencias.',
    body: 'La profesora presentó el psicoanálisis como una teoría que busca comprender la psique humana en relación con la sociedad y que, metodológicamente, trabaja mediante interpretación. Distinguió una dimensión teórica, una clínica y una metateórica. La experiencia con pacientes alimenta hipótesis, pero el analista no fue descrito como alguien que prescribe soluciones directas.',
    after: 'La narración del sujeto se convierte en material central para pensar lo que le ocurre.',
    simple: 'El psicoanálisis no funciona como un manual que dice qué hacer: escucha, interpreta y ayuda a pensar la propia experiencia.',
    question: '¿Qué hace el analista según la clase?',
    answer: 'Trabaja con la narración e interviene para ayudar a pensar, no para dictar una decisión.',
    source: 'Explicación de clase sobre práctica y método psicoanalítico.'
  },
  {
    id: 'subjetividad',
    title: 'Subjetividad y estructura social',
    topic: 'Problema social',
    color: 'blue',
    before: 'Las clases anteriores habían trabajado estructuras objetivas con Marx y otros autores.',
    body: 'La sesión anunció un desplazamiento hacia la subjetividad. Se planteó la tensión entre estructuras que forman al sujeto y sujetos que también reproducen o transforman estructuras. Freud fue situado como un autor útil para estudiar la interacción entre vida psíquica y vida social, no como una teoría aislada del mundo histórico.',
    after: 'El malestar en la cultura permite poner esa interacción en primer plano.',
    simple: 'No somos sólo producto de la sociedad ni la sociedad es sólo producto nuestro: la clase quiere estudiar cómo ambas dimensiones se afectan.',
    question: '¿Qué cambia respecto del bloque anterior del curso?',
    answer: 'Se pasa del énfasis en estructuras objetivas a explorar la subjetividad y su relación con ellas.',
    source: 'Explicación de clase y enlace con el recorrido previo de Teoría Crítica.'
  },
  {
    id: 'malestar',
    title: 'El malestar en la cultura como obra madura',
    topic: 'Lectura',
    color: 'rust',
    before: 'La relación sujeto-sociedad necesita una obra que la formule como conflicto.',
    body: 'La profesora presentó El malestar en la cultura como una obra madura de Freud, escrita en un contexto europeo políticamente intenso posterior a la Primera Guerra Mundial y cercano al ascenso del fascismo. El interés de la clase no fue hacer una cronología exhaustiva, sino leer el texto como diagnóstico de una sociedad que progresa y, sin embargo, produce descontento.',
    after: 'La pregunta central aparece como una contradicción entre desarrollo cultural y realización individual.',
    simple: 'La sociedad puede avanzar muchísimo y aun así sus integrantes sentirse mal dentro de ella.',
    question: '¿Qué pregunta abre la lectura?',
    answer: 'Por qué una civilización desarrollada no consigue hacer felices o realizados a sus individuos.',
    source: 'Contextualización docente de la obra.'
  },
  {
    id: 'contradiccion',
    title: 'Progreso cultural sin felicidad',
    topic: 'Contradicción',
    color: 'gold',
    before: 'La civilización dispone de avances en arte, técnica y organización social.',
    body: 'La clase formuló una sospecha: incluso en un momento culturalmente envidiable por sus logros artísticos y tecnológicos, los individuos no necesariamente se sienten realizados. Esa discrepancia sostiene el problema del texto: el desarrollo de la cultura no coincide automáticamente con la felicidad de quienes viven en ella.',
    after: 'La explicación debe buscarse en el modo en que se constituye y limita el deseo del sujeto.',
    simple: 'Tener más cultura, técnica o comodidad no significa sentirnos más satisfechos.',
    question: '¿Cuál es la contradicción básica?',
    answer: 'El avance de la civilización puede coexistir con malestar y falta de realización individual.',
    source: 'Pregunta rectora reconstruida desde la exposición de clase.'
  },
  {
    id: 'oceanico',
    title: 'La experiencia de lo oceánico',
    topic: 'Yo y mundo',
    color: 'sage',
    before: 'Para explicar el malestar, la lectura comienza interrogando los límites del yo.',
    body: 'La profesora explicó la experiencia de lo oceánico como una vivencia en la que se borra el límite entre el yo y lo otro: el uno se siente unido con el todo. La clase la vinculó con una experiencia temprana de fusión y la usó para pensar por qué ciertas vivencias de pérdida de límites pueden sentirse intensamente placenteras.',
    after: 'El ejemplo del bebé y la madre permite reconstruir la formación progresiva del límite yo-mundo.',
    simple: 'Es la sensación de que ya no hay una frontera clara entre “yo” y “todo lo demás”.',
    question: '¿Qué se borra en la experiencia oceánica?',
    answer: 'La frontera entre el yo y lo otro.',
    source: 'Explicación docente del primer problema de la lectura.'
  },
  {
    id: 'separacion',
    title: 'Del vínculo simbiótico a la separación',
    topic: 'Individuación',
    color: 'plum',
    before: 'El bebé fue presentado como alguien que inicialmente no distingue con claridad su propio límite respecto de la madre.',
    body: 'La clase describió la lactancia como ejemplo de una experiencia de fusión. Conforme la madre deja de estar siempre disponible, aparece la necesidad y con ella una ruptura: el niño descubre que la madre no es una extensión de sí. La separación fue caracterizada como dolorosa y como un tránsito constitutivo del aparato psíquico.',
    after: 'La frustración obliga a reconocer que el mundo no responde de inmediato al deseo.',
    simple: 'El niño descubre que la madre es otra persona cuando no puede satisfacerlo todo el tiempo.',
    question: '¿Qué produce la experiencia de separación?',
    answer: 'La diferenciación entre el yo y lo otro, junto con la experiencia de necesidad y frustración.',
    source: 'Ejemplo docente sobre constitución del yo.'
  },
  {
    id: 'realidad',
    title: 'Del principio del placer al principio de realidad',
    topic: 'Tránsito',
    color: 'bronze',
    before: 'El deseo busca conservar el bienestar y evitar la falta.',
    body: 'La clase presentó el principio del placer como una búsqueda persistente de satisfacción. La individuación introduce un límite: mediante frustración, el sujeto aprende que el mundo no funciona según su deseo inmediato. Ese aprendizaje da lugar al principio de realidad, entendido como reconocimiento del funcionamiento objetivo del mundo y asociado en la explicación con la conciencia.',
    after: 'Desde aquí puede desarrollarse el conflicto entre satisfacción pulsional y exigencias de la cultura.',
    simple: 'Queremos satisfacción inmediata, pero crecer implica aprender que la realidad pone límites y obliga a esperar, negociar o renunciar.',
    question: '¿Qué hace posible el paso al principio de realidad?',
    answer: 'La frustración y el reconocimiento de que el mundo no satisface automáticamente el deseo.',
    source: 'Cierre de la exposición conservada en los apuntes.'
  }
]

export default function CriticalTheoryClass22Oct(){
  const [active,setActive]=useState('cultura')
  const [answer,setAnswer]=useState(false)
  const [guided,setGuided]=useState(false)
  const index=chapters.findIndex(item=>item.id===active)
  const current=chapters[index]||chapters[0]
  const select=(id)=>{setActive(id);setAnswer(false)}
  const move=(diff)=>select(chapters[(index+diff+chapters.length)%chapters.length].id)

  return <main className="ct1510-page ct2010-page ct2210-page ph2d-shell">
    <nav className="ct1510-nav">
      <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
      <Link to="/" className="ct1510-logo">Φ · PHILOSOPHIA</Link>
      <span>FI265 · XXII / X / MMXXVI</span>
    </nav>

    <header className="ct1510-hero">
      <p className="ct1510-eyebrow">ARCHIVO DE CLASE · 22 DE OCTUBRE DE 2026</p>
      <div className="ct1510-hero-grid"><div>
        <h1>Freud y el <em>malestar</em> del sujeto</h1>
        <p className="ct1510-deck">Inconsciente, interpretación, subjetividad, sentimiento oceánico y tránsito del placer a la realidad.</p>
        <p className="ct1510-scope">La página separa lo dicho en clase de la síntesis editorial. No completa lagunas de los apuntes ni presenta como cita de Freud una conexión introducida por la profesora.</p>
        <div className="ct1510-cta">
          <button type="button" onClick={()=>document.getElementById('ct2210-map')?.scrollIntoView({behavior:'smooth'})}>Explorar 12 folios ↓</button>
          <Link to="/biblioteca?obra=Freud%20-%20El%20malestar%20en%20la%20cultura">Ficha de Freud ↗</Link>
          <Link to="/semestre/5/teoria-critica/clase/20-octubre">20 de octubre ↗</Link>
        </div>
      </div><aside className="ct1510-pull">
        <span>PREGUNTA NUCLEAR</span>
        <strong>¿Por qué una civilización desarrollada puede producir individuos que no se sienten realizados?</strong>
        <div className="ct1510-inversion"><span>DESEO</span><b>⇄</b><span>CULTURA</span></div>
        <small>El conflicto se reconstruye desde la clase y la lectura asignada, no como una fórmula exhaustiva de toda la obra.</small>
      </aside></div>
    </header>

    <section className="ct1510-intro">
      <div><span className="ct1510-number">01 · PROBLEMA</span><h2>De la estructura social a la subjetividad</h2></div>
      <p>Después del recorrido por Marx, Lukács y las estructuras sociales, la sesión abre un bloque centrado en la vida psíquica. Freud permite preguntar cómo se constituye el sujeto y qué costo tiene vivir dentro de una cultura que regula deseos, vínculos y satisfacción.</p>
      <div className="ct1510-warning"><strong>Cautela documental:</strong> los apuntes contienen una referencia cronológica imprecisa sobre una etapa de Freud y no identifican por completo una segunda formulación del aparato psíquico. Ambas zonas se mantienen señaladas en vez de corregirse silenciosamente.</div>
    </section>

    <figure className="ct1510-licensed-figure">
      <div className="ct1510-licensed-item">
        <img src={`${import.meta.env.BASE_URL}${critical22OctImage.imagePath}`} alt={critical22OctImage.alt} loading="lazy" decoding="async" />
        <figcaption>
          <span>IMAGEN DE ESTUDIO · {critical22OctImage.imageLicense}</span>
          <strong>Cultura, constitución del yo y principio de realidad</strong>
          <p>{critical22OctImage.pedagogicalPurpose}</p>
          <small>{critical22OctImage.imageAttribution} · {critical22OctImage.sourceBoundary}</small>
        </figcaption>
      </div>
    </figure>
    <Critical22OctThematicAtlas />
    <section className="ct1510-atlas" id="ct2210-map">
      <div className="ct1510-section-head"><div>
        <span className="ct1510-number">02 · ATLAS CONCEPTUAL</span>
        <h2>Doce folios conectados</h2>
        <p>Cada folio conserva antes, desarrollo, después, procedencia y una explicación en palabras simples.</p>
      </div><Link to="/biblioteca?obra=Freud%20-%20El%20malestar%20en%20la%20cultura">Abrir lectura ↗</Link></div>

      <div className="ct2010-toolbar">
        <button type="button" onClick={()=>{setGuided(v=>!v);select('cultura')}} aria-pressed={guided}>{guided?'Cerrar guía':'Iniciar guía'}</button>
        <span>{guided?'GUÍA SECUENCIAL · 12 FOLIOS':'EXPLORACIÓN LIBRE · 12 FOLIOS'}</span>
      </div>

      <div className="ct1510-node-grid" role="group" aria-label="Mapa conceptual de la clase">
        {chapters.map((item,i)=><button type="button" key={item.id} onClick={()=>select(item.id)} aria-pressed={active===item.id} className={'ct1510-node'+(active===item.id?' selected':'')} style={{'--node-color':'var(--ph2d-topic-'+item.color+')'}}>
          <small>{String(i+1).padStart(2,'0')} · {item.topic}</small>
          <strong>{item.title}</strong>
          <span>{item.before}</span>
        </button>)}
      </div>

      <article className="ct1510-inspector" aria-live="polite">
        <div className="ct1510-inspector-meta"><span>FOLIO {String(index+1).padStart(2,'0')} / {chapters.length}</span><span>{current.topic}</span></div>
        <h3>{current.title}</h3>
        <div className="ct1510-sequence">
          <div><small>ANTES · PRESUPONE</small><p>{current.before}</p></div>
          <div><small>DESARROLLO DE CLASE</small><p>{current.body}</p></div>
          <div><small>DESPUÉS · ABRE</small><p>{current.after}</p></div>
        </div>
        <div className="ct1510-warning"><strong>En palabras simples:</strong> {current.simple}</div>
        <p className="ct1510-provenance"><strong>Procedencia:</strong> {current.source}</p>
        <div className="ct1510-study"><small>MODO ESTUDIO · PREGUNTA DE CONTROL</small><p>{current.question}</p>
          {answer&&<p className="ct1510-answer"><strong>Orientación:</strong> {current.answer}</p>}
          <div className="ct1510-controls">
            <button type="button" onClick={()=>setAnswer(v=>!v)}>{answer?'Ocultar respuesta':'Comprobar respuesta'}</button>
            <button type="button" onClick={()=>move(-1)}>← Anterior</button>
            <button type="button" onClick={()=>move(1)}>Siguiente folio →</button>
          </div>
        </div>
      </article>
    </section>

    <section className="ct1510-relations">
      <div className="ct1510-section-head"><div><span className="ct1510-number">03 · MOVIMIENTO</span><h2>Constitución del sujeto y límite cultural</h2></div></div>
      <div className="ct1510-relation">
        <span>FUSIÓN YO–OTRO</span><b>→</b><span>SEPARACIÓN</span><b>→</b><span>FRUSTRACIÓN</span><b>→</b><span>PRINCIPIO DE REALIDAD</span>
      </div>
      <p className="ct2010-caption">Este esquema representa el movimiento explicado en clase: la separación introduce necesidad y frustración, y con ellas aparece el reconocimiento de un mundo que no obedece al deseo inmediato.</p>
    </section>

    <section className="ct1510-reading">
      <div className="ct1510-section-head"><div><span className="ct1510-number">04 · LECTURA</span><h2>Freud · El malestar en la cultura</h2></div></div>
      <div className="ct1510-reading-grid">
        <article><span>OBRA BASE</span><h3>El malestar en la cultura</h3><p>La sesión inicia el trabajo conceptual de la obra y la relaciona con la tensión individuo–sociedad.</p><Link to="/biblioteca?obra=Freud%20-%20El%20malestar%20en%20la%20cultura">Abrir ficha ↗</Link></article>
        <article><span>CONTINUIDAD</span><h3>Clase del 20 de octubre</h3><p>La sesión anterior cerró Lukács y dejó como siguiente lectura comenzar a Freud.</p><Link to="/semestre/5/teoria-critica/clase/20-octubre">Abrir clase ↗</Link></article>
        <article><span>CONEXIÓN DE CLASE</span><h3>Lacan y el lenguaje</h3><p>La profesora mencionó la formulación lacaniana del inconsciente estructurado como lenguaje. Se conserva como conexión posterior y no como tesis textual de Freud.</p></article>
        <article><span>CAUTELA</span><h3>Teoría revisable</h3><p>La clase remarcó que Freud modifica hipótesis y modelos. Las formulaciones se presentan como movimientos teóricos, no como un sistema inmóvil.</p></article>
      </div>
    </section>

    <section className="ct1510-detail" aria-labelledby="ct2210-detail-title">
      <div className="ct1510-detail-head"><span>ARCHIVO DOCUMENTAL / 013</span><div>
        <p>CLASE DOCUMENTADA · RECONSTRUCCIÓN PEDAGÓGICA DISTINGUIDA</p>
        <h2 id="ct2210-detail-title">La clase, apartado por apartado.</h2>
        <p>El mapa inicial, los doce apartados documentales y la consigna final tienen fichas propias. Ninguna pregunta de estudio se presenta como pregunta oficial de la profesora.</p>
      </div></div>
      <nav className="ct1510-detail-index" aria-label="Índice de apartados del 22 de octubre">
        {critical22OctSourceSections.map(item => (
          <button key={item.id} type="button" onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <span>{item.number}</span>{item.title}
          </button>
        ))}
      </nav>
      <div className="ct1510-detail-body">
        {critical22OctSourceSections.map(item => (
          <article className="ct1510-detail-folio" id={item.id} key={item.id}>
            <header><span>{item.number}</span><div><small>{item.status}</small><h3>{item.title}</h3></div></header>
            <div className="ct1510-source-card"><p>{item.body}</p>
              <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
            <Critical22OctSectionStudy sectionId={item.id} />
          </article>
        ))}
      </div>
    </section>
    <section className="ct1510-agenda">
      <div className="ct1510-section-head"><div><span className="ct1510-number">05 · TAREA</span><h2>Seguir leyendo</h2></div></div>
      <div className="ct2010-agenda"><article>
        <small>ASIGNADA EL 22 DE OCTUBRE · SIN FECHA DE ENTREGA INDICADA</small>
        <h3>Continuar El malestar en la cultura</h3>
        <p>La tarea registrada para esta sesión es <strong>seguir leyendo la obra de Freud</strong>. No se consigna en los apuntes un rango de páginas, una entrega escrita ni una fecha límite nueva.</p>
      </article><article>
        <small>FOCO DE LECTURA ABIERTO POR LA CLASE</small>
        <h3>Individuo, deseo y sociedad</h3>
        <p>La sesión deja preparados los problemas del yo, la separación, el principio del placer y el principio de realidad para continuar la lectura.</p>
      </article></div>
    </section>

    <footer className="ct1510-footer">
      <Link to="/semestre/5/teoria-critica">← Índice de materia</Link>
      <Link to="/biblioteca?obra=Freud%20-%20El%20malestar%20en%20la%20cultura">Freud en biblioteca ↗</Link>
      <span>PHILOSOPHIA · FI265 · 2026-B</span>
    </footer>
  </main>
}
