import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass13.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','necesidad','Necesidad lógica'],
  ['02','contraste','Validez e inversión inválida'],
  ['03','platonismo','Platonismo'],
  ['04','tercer-mundo','El tercer mundo'],
  ['05','grados','Grados cognoscitivos'],
  ['06','aristoteles','Intelectualismo aristotélico'],
  ['07','naturaleza','Necesidad y naturaleza'],
  ['08','unidad','Unidad e idealización'],
  ['09','logos','Del caos al logos'],
  ['10','lenguaje','Sujeto–predicado'],
  ['11','comparacion','Platón / Aristóteles'],
  ['12','cierre','Síntesis docente'],
]

const route = [
  ['1','Detectar','La validez depende de una relación necesaria, no de que una conclusión resulte verdadera por casualidad.'],
  ['2','Localizar','Platón sitúa esa necesidad en un orden ideal independiente.'],
  ['3','Conocer','Los grados cognoscitivos explican cómo la razón asciende hacia lo inteligible.'],
  ['4','Inmanentizar','Aristóteles coloca la forma en la cosa y la razón la abstrae.'],
  ['5','Comparar','Dos ontologías distintas producen dos maneras de comprender necesidad, conocimiento y forma lógica.'],
]

const inferenceCases = [
  {
    id:'valid',
    mark:'✓',
    title:'Inferencia válida',
    lines:['Si llueve, el patio está mojado.','Llovió.','∴ El patio está mojado.'],
    diagnosis:'La conclusión se sigue de las premisas por la estructura del argumento.',
  },
  {
    id:'invalid',
    mark:'✕',
    title:'Inversión inválida',
    lines:['Si llueve, el patio está mojado.','El patio está mojado.','∴ Llovió.'],
    diagnosis:'El patio podría estar mojado por otra causa. La conclusión puede ser verdadera, pero no queda necesaria.',
  },
]

const platonicTraits = [
  ['1','Independiente de captación','La necesidad no depende de que alguien llegue a conocerla.'],
  ['2','Independiente de formulación','No cambia por escribirse en un lenguaje o sistema particular.'],
  ['3','Independiente de reglas','No nace de convenciones pertenecientes a un lenguaje natural o artificial.'],
]

const cognition = [
  {id:'eikasia',mark:'I',title:'Eikasia',sub:'conjetura / imaginación',level:'DOXA',text:'Primer nivel: conocimiento ligado a apariencias, imágenes o conjeturas.'},
  {id:'pistis',mark:'II',title:'Pistis',sub:'creencia',level:'DOXA',text:'Creencia apoyada en el mundo sensible, todavía dentro del ámbito de la opinión.'},
  {id:'dianoia',mark:'III',title:'Dianoia',sub:'pensamiento discursivo',level:'EPISTEME',text:'Actividad racional que trabaja discursivamente con estructuras y relaciones.'},
  {id:'noesis',mark:'IV',title:'Noesis',sub:'intuición intelectual',level:'EPISTEME',text:'Nivel superior de intelección racional de las formas o eidos.'},
]

const aristotleViews = [
  {id:'form',mark:'εἶδος',title:'Forma en la cosa',text:'La esencia no existe separada en un tercer mundo: pertenece al objeto mismo.'},
  {id:'abstraction',mark:'↑',title:'Abstracción',text:'La razón parte de la experiencia sensible y abstrae la forma inteligible presente en ella.'},
  {id:'synthesis',mark:'Σ',title:'Síntesis racional',text:'La razón no crea el orden desde cero: reconoce, organiza e idealiza lo inteligible de la realidad.'},
]

const comparison = [
  ['Lugar de la necesidad','mundo ideal / inteligible','orden natural de las cosas'],
  ['Estatuto de la forma','independiente de lo sensible','inmanente a la cosa'],
  ['Papel de la razón','asciende y contempla','abstrae y sintetiza'],
  ['Relación con experiencia','la supera hacia el eidos','parte de ella para idealizar'],
  ['Modelo cognoscitivo','eikasia · pistis · dianoia · noesis','intelectualismo desde lo sensible'],
  ['Consecuencia lógica','necesidad independiente del lenguaje','forma lógica ligada a sustancias y atributos'],
]

const scrollTo = id =>
  document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

function SectionTitle({number,eyebrow,children}) {
  return (
    <div className="flc1-section-title">
      <span>{number}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function PhilosophyLogicClass13() {
  const [caseId,setCaseId] = useState('valid')
  const [cognitionId,setCognitionId] = useState('dianoia')
  const [aristotleId,setAristotleId] = useState('abstraction')

  const inference = useMemo(
    () => inferenceCases.find(item => item.id === caseId) || inferenceCases[0],
    [caseId],
  )

  const cognitive = useMemo(
    () => cognition.find(item => item.id === cognitionId) || cognition[2],
    [cognitionId],
  )

  const aristotle = useMemo(
    () => aristotleViews.find(item => item.id === aristotleId) || aristotleViews[1],
    [aristotleId],
  )

  return (
    <main className="flc1-page flc13-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>23 · III · 2026</span>
      </nav>

      <header className="flc1-hero flc13-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>□</span><span>εἶδος</span><span>λόγος</span><span>→</span><span>∴</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 13</p>
          <h1>Necesidad lógica, Platón <em>y Aristóteles</em></h1>
          <p className="flc1-lead">
            La sesión profundiza el giro filosófico del curso. La pregunta ya no es
            solamente cómo se reconoce una inferencia válida, sino dónde radica la
            necesidad que la hace válida: en un orden ideal independiente o en la
            forma inteligible presente en las cosas.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿Dónde está la necesidad lógica: fuera de las cosas o en la inteligibilidad de las cosas mismas?</strong>
          <small>Platonismo ↔ intelectualismo aristotélico.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XIII</p>
          {sections.map(([n,id,label]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              Dos ontologías para explicar una misma experiencia de necesidad
            </SectionTitle>

            <div className="flc13-route">
              {route.map(([n,title,text]) => (
                <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>

            <div className="flc13-master">
              <span>VALIDEZ</span><b>→</b>
              <span>NECESIDAD</span><b>→</b>
              <span>PLATÓN</span><b>↔</b>
              <span>ARISTÓTELES</span>
            </div>

            <LogicFigureNote
              noteId="13-ruta"
              what="El problema único que organiza toda la sesión: explicar el fundamento de la necesidad lógica."
              how="La validez conduce a la pregunta por la necesidad. A partir de ahí la página se bifurca en dos grandes modelos: Platón y Aristóteles."
              why="Sin esta ruta, los apartados metafísicos podrían parecer externos a la lógica. La clase justamente muestra que explicar la validez conduce a cuestiones ontológicas y epistemológicas."
              takeaway="La misma experiencia de necesidad puede recibir explicaciones metafísicas muy diferentes."
            />
          </section>

          <section id="necesidad" className="flc1-section">
            <SectionTitle number="01" eyebrow="Quid est necessitas">
              La necesidad aparece en la relación, no en el contenido aislado
            </SectionTitle>

            <div className="flc13-necessity-definition">
              <span>PROBLEMA FILOSÓFICO</span>
              <strong>¿Qué es esa necesidad por la cual una conclusión se sigue de unas premisas?</strong>
              <p>La lógica puede reconocer una forma válida; la filosofía de la lógica pregunta qué explica que esa forma tenga fuerza necesaria.</p>
            </div>

            <div className="flc13-relation">
              <article><span>PREMISAS</span><strong>A · B · C</strong></article>
              <div><small>FORMA</small><b>══▶</b><small>NECESIDAD</small></div>
              <article className="dark"><span>CONCLUSIÓN</span><strong>D</strong></article>
            </div>

            <LogicFigureNote
              noteId="13-necesidad"
              what="La diferencia entre los contenidos particulares de una inferencia y la relación formal que hace necesaria una conclusión."
              how="Las cajas representan proposiciones concretas; el centro representa aquello que la filosofía de la lógica intenta explicar: por qué determinada forma obliga racionalmente al paso hacia la conclusión."
              why="La sesión parte de que el contenido empírico no basta para explicar validez."
              takeaway="El problema filosófico de la necesidad aparece cuando dejamos de describir la forma y preguntamos por su fundamento."
            />
          </section>

          <section id="contraste" className="flc1-section">
            <SectionTitle number="02" eyebrow="Forma versus coincidentia">
              La misma temática puede producir una inferencia válida o inválida
            </SectionTitle>

            <div className="flc13-inference-tabs">
              {inferenceCases.map(item => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === caseId ? 'is-active' : ''}
                  onClick={() => setCaseId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc13-inference-reader">
              <div>
                {inference.lines.map((line,index) => (
                  <p key={line} className={index === 2 ? 'is-conclusion' : ''}>{line}</p>
                ))}
              </div>
              <aside>
                <span>DIAGNÓSTICO</span>
                <strong>{inference.title}</strong>
                <p>{inference.diagnosis}</p>
              </aside>
            </div>

            <LogicFigureNote
              noteId="13-inversion"
              what="El contraste entre modus ponens y la inversión inválida conocida como afirmación del consecuente."
              how="Compare el segundo paso de cada caso. En el válido se afirma el antecedente; en el inválido se afirma el consecuente y se intenta volver hacia el antecedente."
              why="La clase utiliza el ejemplo para aislar la forma de cualquier parecido semántico superficial."
              takeaway="Que una conclusión pueda resultar verdadera no significa que se siga necesariamente de las premisas."
            />
          </section>

          <section id="platonismo" className="flc1-section">
            <SectionTitle number="03" eyebrow="Necessitas independens">
              Platón: la necesidad como realidad independiente
            </SectionTitle>

            <div className="flc13-plato-thesis">
              <span>TESIS PLATÓNICA EN EL ENCUADRE DE LA CLASE</span>
              <strong>La necesidad no depende de ser pensada, formulada o codificada en un lenguaje.</strong>
            </div>

            <div className="flc13-traits">
              {platonicTraits.map(([n,title,text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc13-apples">
              <article><span>SENSIBLE</span><strong>🍎 + 🍎</strong><small>dos manzanas concretas</small></article>
              <b>participa de</b>
              <article className="dark"><span>INTELIGIBLE</span><strong>1 + 1 = 2</strong><small>unidad · adición · dualidad</small></article>
            </div>

            <LogicFigureNote
              noteId="13-platonismo"
              what="La tesis de independencia del platonismo y el ejemplo usado para distinguir objetos sensibles de la estructura matemática que expresan."
              how="Las manzanas cambian y son contingentes; la relación 1+1=2 representa la estructura necesaria que la clase identifica con un orden inteligible."
              why="El ejemplo pretende mostrar por qué la necesidad no se reduce a los objetos empíricos concretos."
              takeaway="En el platonismo presentado aquí, lo sensible participa de relaciones inteligibles que no dependen de una formulación particular."
            />
          </section>

          <section id="tercer-mundo" className="flc1-section">
            <SectionTitle number="04" eyebrow="Tertius mundus">
              El tercer mundo platónico como respuesta al problema categorial
            </SectionTitle>

            <div className="flc13-three-worlds">
              <article><span>MUNDO MENTAL</span><strong>conciencia</strong></article>
              <article className="ideal"><span>MUNDO IDEAL</span><strong>formas · eidos</strong></article>
              <article><span>MUNDO FÍSICO</span><strong>cosas sensibles</strong></article>
            </div>

            <div className="flc13-three-worlds-arrow">
              <span>razón</span><b>↔</b><span>inteligible</span><b>↔</b><span>realidad sensible</span>
            </div>

            <LogicFigureNote
              noteId="13-tercer-mundo"
              what="La solución platónica al problema de cómo un sujeto mental puede alcanzar conocimiento necesario acerca de una realidad distinta de él."
              how="El mundo ideal ocupa la posición mediadora. No es simplemente otro objeto sensible ni un contenido privado de la mente."
              why="La clase retoma el problema categorial de la sesión anterior y lo desarrolla ahora como pieza del platonismo."
              takeaway="El mundo ideal pretende explicar a la vez objetividad de la necesidad y acceso racional a ella."
            />
          </section>

          <section id="grados" className="flc1-section">
            <SectionTitle number="05" eyebrow="Gradus cognitionis">
              Los cuatro niveles cognoscitivos en Platón
            </SectionTitle>

            <div className="flc13-cognition-tabs">
              {cognition.map(item => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === cognitionId ? 'is-active' : ''}
                  onClick={() => setCognitionId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.sub}</small>
                </button>
              ))}
            </div>

            <div className="flc13-cognition-reader">
              <div>
                <span>{cognitive.mark}</span>
                <h3>{cognitive.title}</h3>
                <small>{cognitive.level}</small>
              </div>
              <p>{cognitive.text}</p>
            </div>

            <div className="flc13-cognition-scale">
              <span>DOXA</span><b>Eikasia → Pistis</b>
              <i>│</i>
              <span>EPISTEME</span><b>Dianoia → Noesis</b>
            </div>

            <LogicFigureNote
              noteId="13-grados"
              what="La escala cognoscitiva mencionada en clase para explicar cómo el platonismo entiende el acceso racional a la necesidad."
              how="Los dos primeros niveles permanecen en doxa; los dos superiores pertenecen al conocimiento racional. La dirección ascendente indica un alejamiento de la mera apariencia hacia lo inteligible."
              why="La tesis platónica no basta con afirmar que las formas existen: debe explicar cómo pueden ser conocidas."
              takeaway="La necesidad se capta en los niveles superiores de racionalidad, no en la mera opinión sensible."
            />
          </section>

          <section id="aristoteles" className="flc1-section">
            <SectionTitle number="06" eyebrow="Forma in re">
              Aristóteles: la forma no está separada de la cosa
            </SectionTitle>

            <div className="flc13-aristotle-tabs">
              {aristotleViews.map(item => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === aristotleId ? 'is-active' : ''}
                  onClick={() => setAristotleId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc13-aristotle-reader">
              <div>
                <span>{aristotle.mark}</span>
                <h3>{aristotle.title}</h3>
              </div>
              <p>{aristotle.text}</p>
            </div>

            <div className="flc13-in-re">
              <article><span>OBJETO SENSIBLE</span><strong>sustancia + atributos</strong></article>
              <b>contiene</b>
              <article className="dark"><span>FORMA INTELIGIBLE</span><strong>esencia en la cosa</strong></article>
              <b>abstraída por</b>
              <article><span>RAZÓN</span><strong>concepto</strong></article>
            </div>

            <LogicFigureNote
              noteId="13-aristoteles"
              what="El intelectualismo aristotélico tal como lo reconstruye la clase: la forma pertenece a la cosa y la razón la abstrae."
              how="Siga el proceso desde el objeto sensible hacia el concepto. No aparece un tercer mundo separado entre ambos."
              why="Ésta es la diferencia ontológica principal frente a Platón."
              takeaway="Aristóteles conserva objetividad sin separar la forma de los individuos sensibles."
            />
          </section>

          <section id="naturaleza" className="flc1-section">
            <SectionTitle number="07" eyebrow="Ordo naturae">
              La necesidad como orden inteligible de la naturaleza
            </SectionTitle>

            <div className="flc13-natural-order">
              <article><span>NATURALEZA</span><strong>posee estructura</strong></article>
              <b>→</b>
              <article><span>RAZÓN</span><strong>reconoce y abstrae</strong></article>
              <b>→</b>
              <article className="dark"><span>LÓGICA / MATEMÁTICA</span><strong>sintetiza e idealiza</strong></article>
            </div>

            <LogicFigureNote
              noteId="13-naturaleza"
              what="La explicación aristotélica de la necesidad como inteligibilidad ya presente en el orden natural."
              how="La dirección del diagrama es importante: la razón no impone primero un esquema sobre una materia caótica, sino que parte de una realidad ya estructurada."
              why="La clase busca una alternativa tanto al mundo ideal separado como a una construcción arbitraria del sujeto."
              takeaway="La necesidad es objetiva porque se funda en el orden de lo real, aunque su formulación conceptual requiera abstracción racional."
            />
          </section>

          <section id="unidad" className="flc1-section">
            <SectionTitle number="08" eyebrow="Abstractionis exemplum">
              De un objeto a la idea de unidad
            </SectionTitle>

            <div className="flc13-unit">
              <article><span>OBJETO SINGULAR</span><strong>●</strong><small>una cosa</small></article>
              <b>abstracción</b>
              <article><span>ESENCIA CAPTADA</span><strong>unidad</strong><small>ser uno</small></article>
              <b>idealización</b>
              <article className="dark"><span>CONCEPTO</span><strong>1</strong><small>estructura matemática</small></article>
            </div>

            <LogicFigureNote
              noteId="13-unidad"
              what="El ejemplo usado por la clase para explicar cómo podría surgir un concepto matemático sin ser simple copia sensible ni entidad separada."
              how="El punto de partida es un objeto uno; la razón capta la estructura de unidad y posteriormente la idealiza en un concepto matemático."
              why="El ejemplo concreta el intelectualismo aristotélico en un caso matemático."
              takeaway="La idealización puede partir de la experiencia sin reducirse a una fotografía empírica de ella."
            />
          </section>

          <section id="logos" className="flc1-section">
            <SectionTitle number="09" eyebrow="A chaos ad logos">
              Leer dentro de la cosa: inteligibilidad sin tercer mundo
            </SectionTitle>

            <div className="flc13-logos">
              <article><span>CAOS APARENTE</span><strong>multiplicidad sensible</strong></article>
              <div>→</div>
              <article className="middle"><span>INTELLECTUS</span><strong>«leer dentro»</strong></article>
              <div>→</div>
              <article className="dark"><span>LOGOS</span><strong>orden inteligible articulado</strong></article>
            </div>

            <LogicFigureNote
              noteId="13-logos"
              what="La imagen de la clase para explicar la actividad racional aristotélica como descubrimiento y articulación de inteligibilidad."
              how="El centro no crea un orden ex nihilo. Funciona como operación de lectura y síntesis de una forma que ya pertenece a lo real."
              why="La metáfora ayuda a distinguir el intelectualismo aristotélico tanto de un platonismo de formas separadas como de un constructivismo arbitrario."
              takeaway="El logos racional articula un orden que la realidad ya hace posible."
            />
          </section>

          <section id="lenguaje" className="flc1-section">
            <SectionTitle number="10" eyebrow="Lingua et ontologia">
              Por qué sujeto–predicado vuelve a aparecer en Aristóteles
            </SectionTitle>

            <div className="flc13-language">
              <article><span>ONTOLOGÍA</span><strong>sustancia — atributo</strong></article>
              <b>se refleja en</b>
              <article className="dark"><span>LENGUAJE</span><strong>sujeto — predicado</strong></article>
            </div>

            <LogicFigureNote
              noteId="13-lenguaje"
              what="La relación entre la metafísica aristotélica y su forma proposicional privilegiada."
              how="La flecha conecta dos niveles: si lo real se concibe como sustancias determinadas por atributos, el lenguaje descriptivo tenderá a presentar sujetos determinados por predicados."
              why="La clase retoma un punto anterior del curso y ahora lo integra en la teoría aristotélica de la necesidad."
              takeaway="Sujeto–predicado no aparece aquí como mera costumbre gramatical, sino como consecuencia de una determinada ontología."
            />
          </section>

          <section id="comparacion" className="flc1-section">
            <SectionTitle number="11" eyebrow="Duae viae">
              Platón y Aristóteles: dos lugares para la necesidad
            </SectionTitle>

            <div className="flc13-comparison">
              <div className="head"><strong>ASPECTO</strong><strong>PLATÓN</strong><strong>ARISTÓTELES</strong></div>
              {comparison.map(([a,b,c]) => (
                <div className="row" key={a}><strong>{a}</strong><span>{b}</span><span>{c}</span></div>
              ))}
            </div>

            <LogicFigureNote
              noteId="13-comparacion"
              what="La comparación sistemática de las dos respuestas metafísicas desarrolladas en la sesión."
              how="Lea cada fila horizontalmente. No es una tabla de superioridad: muestra cómo una diferencia ontológica modifica el papel de la razón, la relación con la experiencia y la concepción de la forma lógica."
              why="El objetivo final de la sesión es justamente ver que la teoría de la necesidad depende de una concepción más amplia de realidad y conocimiento."
              takeaway="Platón privilegia independencia de la forma; Aristóteles, su inmanencia en la cosa."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="12" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc13-summary">
              <article><span>IDEA 1</span><h3>La necesidad es el problema</h3><p>La diferencia entre una inferencia válida y una inversión inválida obliga a explicar la relación formal.</p></article>
              <article><span>IDEA 2</span><h3>Platón separa la forma</h3><p>La necesidad pertenece a un orden ideal independiente de percepción, formulación y lenguaje.</p></article>
              <article><span>IDEA 3</span><h3>Aristóteles inmanentiza la forma</h3><p>La esencia está en la cosa y la razón abstrae e idealiza la inteligibilidad de la naturaleza.</p></article>
              <article><span>IDEA 4</span><h3>La lógica implica metafísica</h3><p>Preguntar por validez conduce a preguntar por realidad, conocimiento y lenguaje.</p></article>
            </div>

            <div className="flc13-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Por qué la necesidad no puede reducirse al contenido empírico?</li>
                <li>¿Qué diferencia el argumento de lluvia válido de su inversión inválida?</li>
                <li>¿Cuáles son las tres independencias atribuidas al platonismo?</li>
                <li>¿Qué función cumple el eidos en el ejemplo 1+1=2?</li>
                <li>¿Por qué Platón introduce un tercer mundo?</li>
                <li>¿Cómo se organizan eikasia, pistis, dianoia y noesis?</li>
                <li>¿Por qué la captación de necesidad se ubica en los niveles racionales?</li>
                <li>¿Cuál es la diferencia central entre Platón y Aristóteles?</li>
                <li>¿Qué significa que la forma sea inmanente a la cosa?</li>
                <li>¿Qué papel desempeña la abstracción?</li>
                <li>¿Cómo explica la clase el concepto de unidad?</li>
                <li>¿Qué significa el paso del caos al logos?</li>
                <li>¿Por qué sujeto–predicado se conecta con sustancias y atributos?</li>
                <li>¿Cómo cambian las consecuencias lógicas entre ambos modelos?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Continuidad</strong>
              <p>La sesión compara las respuestas platónica y aristotélica al problema de la necesidad. El material no registra una tarea concreta con fecha.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 13 · 23 marzo 2026</span>
      </footer>
    </main>
  )
}
