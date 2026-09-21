import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass12.css'

const sections = [
  ['00','ruta','Ruta de enseñanza'],
  ['01','ser','Cuatro sentidos de “ser”'],
  ['02','aristoteles','Límite aristotélico'],
  ['03','bisagra','De técnica a filosofía'],
  ['04','validez','Verdad y validez'],
  ['05','necesidad','Dependencia necesaria'],
  ['06','agenda','Cinco marcos filosóficos'],
  ['07','platonismo','Platonismo lógico'],
  ['08','categorial','Problema categorial'],
  ['09','objetivismo','Platonismo e idealismo'],
  ['10','matematicas','Por qué atrae a matemáticas'],
  ['11','comparacion','Mapa de “ser”'],
  ['12','cierre','Síntesis docente'],
]

const route = [
  ['1','Distinguir','Frege permite separar funciones lógicas distintas que la gramática reúne bajo el verbo “ser”.'],
  ['2','Cerrar técnica','El contraste con Aristóteles completa provisionalmente el bloque formal del curso.'],
  ['3','Preguntar','La atención se desplaza desde cómo funciona la lógica hacia qué significa su necesidad.'],
  ['4','Separar','Verdad de proposiciones y validez de argumentos no son la misma propiedad.'],
  ['5','Responder','El platonismo aparece como primera propuesta: la necesidad sería previa e independiente del sistema.'],
]

const beingUses = [
  {
    id:'subordination',
    mark:'⊂',
    title:'Subordinación conceptual',
    relation:'concepto → concepto',
    example:'La ballena es un mamífero.',
    formal:'Ballenas ⊂ Mamíferos',
    explanation:'Un concepto o clase queda incluido bajo otro concepto más amplio. Es el uso que más se aproxima al molde aristotélico trabajado en las sesiones anteriores.',
  },
  {
    id:'membership',
    mark:'∈',
    title:'Pertenencia',
    relation:'objeto → concepto',
    example:'Sócrates es mortal.',
    formal:'M(s)',
    explanation:'Ya no se relacionan dos conceptos generales. Un objeto singular cae bajo un concepto o satisface una función conceptual.',
  },
  {
    id:'identity',
    mark:'=',
    title:'Identidad',
    relation:'nombre ↔ referente',
    example:'Edson Arantes es Pelé.',
    formal:'a = b',
    explanation:'Dos expresiones distintas pueden designar el mismo referente. La clase enfatiza la identidad no trivial: no es simplemente A=A.',
  },
  {
    id:'existence',
    mark:'∃',
    title:'Existencia',
    relation:'afirmación ontológica',
    example:'Sócrates es.',
    formal:'∃x(x = s)',
    explanation:'El uso existencial apunta a que algo existe. La sesión observa que un lenguaje lógico desarrollado reconstruye esta intuición mediante cuantificación existencial.',
  },
]

const validityCases = [
  {
    id:'true-invalid',
    mark:'V,V / ✕',
    title:'Verdadero pero inválido',
    premises:['Todo el oro está en Fort Knox.','Yo no tengo ese oro.'],
    conclusion:'∴ Yo no soy rico.',
    diagnosis:'La conclusión podría ser verdadera de hecho, pero no queda necesaria por las premisas: podría haber otras maneras de ser rico.',
  },
  {
    id:'false-valid',
    mark:'F,F / ✓',
    title:'Falso pero válido',
    premises:['Todas las arañas tienen diez patas.','Todo ser de diez patas tiene alas.'],
    conclusion:'∴ Todas las arañas tienen alas.',
    diagnosis:'El contenido es falso, pero la estructura preserva la conclusión bajo la suposición de verdad de las premisas.',
  },
]

const philosophicalQuestions = [
  '¿Qué es la validez o necesidad?',
  '¿Qué significa que A se sigue de B?',
  '¿Qué significa “lógicamente verdadero”?',
  '¿La validez es relativa al sistema?',
  '¿Hay una idea extrasistemática de validez?',
  '¿Qué relación tiene la validez con la fuerza racional de un argumento?',
]

const frameworks = ['Platón','Aristóteles','Leibniz','Kant','Quine']

const platonismTraits = [
  ['INDEPENDENCIA','Las formas no dependen de nuestra percepción para existir.'],
  ['ACCESO RACIONAL','Se conocen por la razón y no primariamente por los sentidos.'],
  ['OBJETIVIDAD','La necesidad no aparece porque alguien la formule o descubra.'],
  ['REPRESENTACIÓN','Los sistemas formales intentan captar relaciones necesarias previas.'],
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

export default function PhilosophyLogicClass12() {
  const [beingId,setBeingId] = useState('membership')
  const [validityId,setValidityId] = useState('true-invalid')

  const being = useMemo(
    () => beingUses.find(item => item.id === beingId) || beingUses[1],
    [beingId],
  )

  const validity = useMemo(
    () => validityCases.find(item => item.id === validityId) || validityCases[0],
    [validityId],
  )

  return (
    <main className="flc1-page flc12-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>18 · III · 2026</span>
      </nav>

      <header className="flc1-hero flc12-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>⊂</span><span>∈</span><span>=</span><span>∃</span><span>□</span>
        </div>
        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 12</p>
          <h1>Frege, validez, necesidad <em>y platonismo</em></h1>
          <p className="flc1-lead">
            Esta sesión funciona como bisagra. Primero cierra el bloque técnico
            distinguiendo cuatro funciones lógicas del verbo «ser». Después cambia
            de pregunta: ya no basta con saber cuándo una inferencia es válida;
            hay que explicar qué es la necesidad que hace posible esa validez.
          </p>
        </div>
        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>¿La necesidad lógica nace de nuestros sistemas o los sistemas intentan representar una necesidad independiente?</strong>
          <small>Frege → validez → necesidad → platonismo.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN XII</p>
          {sections.map(([n,id,label]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              Una clase bisagra: del análisis formal a la filosofía de la lógica
            </SectionTitle>

            <div className="flc12-route">
              {route.map(([n,title,text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc12-master">
              <span>SER</span><b>→</b>
              <span>FREGE</span><b>→</b>
              <span>VALIDEZ</span><b>→</b>
              <span>NECESIDAD</span><b>→</b>
              <span>PLATONISMO</span>
            </div>

            <LogicFigureNote
              noteId="12-ruta"
              what="La doble función de la sesión: cerrar una discusión técnica y abrir una investigación filosófica sobre la necesidad."
              how="La primera mitad del recorrido todavía pertenece al análisis lógico del lenguaje; a partir de validez y necesidad cambia el tipo de pregunta. Ya no preguntamos sólo cómo representar una inferencia, sino qué fundamenta su carácter necesario."
              why="Este cambio de nivel es el eje de toda la clase. Sin verlo, los temas de Frege y Platón parecerían dos asuntos desconectados."
              takeaway="La filosofía de la lógica comienza aquí cuando el funcionamiento de las reglas se convierte en un problema acerca de su fundamento."
            />
          </section>

          <section id="ser" className="flc1-section">
            <SectionTitle number="01" eyebrow="Quattuor sensus">
              El verbo «ser» no cumple una sola función lógica
            </SectionTitle>

            <div className="flc12-being-tabs">
              {beingUses.map(item => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === beingId ? 'is-active' : ''}
                  onClick={() => setBeingId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.relation}</small>
                </button>
              ))}
            </div>

            <div className="flc12-being-reader">
              <div>
                <span>{being.mark}</span>
                <h3>{being.title}</h3>
                <code>{being.formal}</code>
              </div>
              <div>
                <blockquote>{being.example}</blockquote>
                <p>{being.explanation}</p>
              </div>
            </div>

            <div className="flc12-being-map">
              <article><span>SUBORDINACIÓN</span><strong>C₁ ⊂ C₂</strong><small>concepto bajo concepto</small></article>
              <article><span>PERTENENCIA</span><strong>a ∈ C</strong><small>objeto bajo concepto</small></article>
              <article><span>IDENTIDAD</span><strong>a = b</strong><small>dos signos / un referente</small></article>
              <article><span>EXISTENCIA</span><strong>∃x</strong><small>hay algo que...</small></article>
            </div>

            <LogicFigureNote
              noteId="12-cuatro-ser"
              what="Cuatro relaciones lógicas diferentes que el lenguaje ordinario expresa con la misma palabra: «ser»."
              how="No lea las cuatro columnas como cuatro ejemplos equivalentes. Pregunte en cada una qué tipos de entidades se relacionan: conceptos entre sí, un individuo con un concepto, dos nombres con un referente o una afirmación de existencia."
              why="La teoría funcional permite deshacer una ambigüedad que queda oculta si todo uso de «ser» se representa bajo un único molde sujeto–predicado."
              takeaway="La semejanza gramatical no garantiza identidad lógica: «ser» puede codificar relaciones estructuralmente distintas."
            />
          </section>

          <section id="aristoteles" className="flc1-section">
            <SectionTitle number="02" eyebrow="Limes syllogisticae">
              El problema con Sócrates no es la validez del razonamiento
            </SectionTitle>

            <div className="flc12-socrates">
              <p>Todos los hombres son mortales.</p>
              <p>Sócrates es hombre.</p>
              <p className="is-conclusion">∴ Sócrates es mortal.</p>
            </div>

            <div className="flc12-aristotle-frege">
              <article>
                <span>ARISTÓTELES · MARCO ESTRICTO</span>
                <strong>relaciones entre términos generales</strong>
                <p>Funciona con especial naturalidad para universales, particulares y subordinación conceptual.</p>
              </article>
              <b>→</b>
              <article className="dark">
                <span>FREGE · TEORÍA FUNCIONAL</span>
                <strong>nombres + funciones + pertenencia</strong>
                <p>El singular puede ocupar directamente el lugar de argumento de una función proposicional.</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="12-socrates"
              what="La diferencia entre decir que un argumento es inválido y decir que cierto aparato formal lo representa con poca naturalidad."
              how="El razonamiento de Sócrates debe conservarse como válido. El contraste aparece en la herramienta de formalización: el marco aristotélico estricto privilegia términos generales, mientras que Frege incorpora el singular como argumento."
              why="La clase advierte expresamente contra una lectura injusta de Aristóteles: la limitación está en la amplitud formal del sistema, no en que el razonamiento deje de ser correcto."
              takeaway="Una limitación expresiva de un sistema no equivale a una falla lógica del argumento que intentamos representar."
            />
          </section>

          <section id="bisagra" className="flc1-section">
            <SectionTitle number="03" eyebrow="Mutatio quaestionis">
              Termina provisionalmente el «cómo» y comienza el «qué significa»
            </SectionTitle>

            <div className="flc12-hinge">
              <article>
                <span>BLOQUE TÉCNICO</span>
                <strong>¿Cómo opera la lógica?</strong>
                <ul>
                  <li>sistemas formales</li>
                  <li>validez sintáctica y semántica</li>
                  <li>conectivas</li>
                  <li>tablas de verdad</li>
                  <li>teoría funcional</li>
                </ul>
              </article>
              <div>⟶</div>
              <article className="dark">
                <span>BLOQUE FILOSÓFICO</span>
                <strong>¿Qué es aquello que la lógica muestra?</strong>
                <p>Necesidad, verdad lógica, seguimiento, objetividad y posible validez extrasistemática.</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="12-bisagra"
              what="El cambio de pregunta que organiza la segunda mitad del curso."
              how="La columna izquierda reúne herramientas ya estudiadas. La derecha no añade otra técnica: pregunta por el estatuto filosófico de lo que esas técnicas parecen captar."
              why="La asignatura es Filosofía de la Lógica. El objetivo no termina en dominar cálculos; debe interrogar qué significan necesidad, validez y verdad lógica."
              takeaway="Saber aplicar una regla y explicar por qué esa regla tiene fuerza necesaria son tareas diferentes."
            />
          </section>

          <section id="validez" className="flc1-section">
            <SectionTitle number="04" eyebrow="Veritas non sufficit">
              La verdad de las frases no basta para determinar validez
            </SectionTitle>

            <div className="flc12-validity-tabs">
              {validityCases.map(item => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === validityId ? 'is-active' : ''}
                  onClick={() => setValidityId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc12-validity-reader">
              <div>
                {validity.premises.map((premise,index) => <p key={premise}><span>P{index+1}</span>{premise}</p>)}
                <p className="is-conclusion">{validity.conclusion}</p>
              </div>
              <aside>
                <span>DIAGNÓSTICO</span>
                <strong>{validity.title}</strong>
                <p>{validity.diagnosis}</p>
              </aside>
            </div>

            <LogicFigureNote
              noteId="12-verdad-validez"
              what="Dos contraejemplos que separan el valor de verdad del contenido y la validez de la estructura inferencial."
              how="Alterne entre los casos. En el primero, incluso concediendo verdad al contenido, la conclusión no queda necesaria. En el segundo, aun con contenido falso, la forma puede preservar la conclusión si las premisas se suponen verdaderas."
              why="La sesión necesita esta separación antes de preguntar filosóficamente por la necesidad: si validez fuera simplemente verdad factual, no habría un problema distinto que explicar."
              takeaway="Verdad pertenece a proposiciones; validez describe una dependencia necesaria entre premisas y conclusión."
            />
          </section>

          <section id="necesidad" className="flc1-section">
            <SectionTitle number="05" eyebrow="Necessaria dependentia">
              La pregunta decisiva es por qué la conclusión no puede fallar
            </SectionTitle>

            <div className="flc12-validity-definition">
              <span>VALIDEZ</span>
              <strong>Si las premisas fueran verdaderas, la conclusión no podría ser falsa.</strong>
              <p>La palabra decisiva es «podría»: la relación relevante no es coincidencia factual, sino dependencia necesaria.</p>
            </div>

            <div className="flc12-necessity">
              <span>PREMISAS</span>
              <b>══ dependencia necesaria ══▶</b>
              <span>CONCLUSIÓN</span>
            </div>

            <LogicFigureNote
              noteId="12-necesidad"
              what="La validez entendida como una relación modal: determinada la verdad de las premisas, queda excluida la falsedad de la conclusión."
              how="El trazo grueso entre ambos lados representa algo más fuerte que una asociación empírica. No significa que premisas y conclusión sean de hecho verdaderas, sino que cierta combinación —premisas verdaderas y conclusión falsa— queda descartada."
              why="Esta formulación convierte una definición operativa de validez en la pregunta filosófica central de la clase: ¿de dónde procede esa necesidad?"
              takeaway="El problema filosófico no es reconocer la necesidad, sino explicar qué la hace necesaria."
            />

            <div className="flc12-questions">
              {philosophicalQuestions.map((question,index) => (
                <article key={question}>
                  <span>{String(index+1).padStart(2,'0')}</span>
                  <p>{question}</p>
                </article>
              ))}
            </div>

            <LogicFigureNote
              noteId="12-preguntas"
              what="La agenda explícita de filosofía de la lógica que abre la sesión."
              how="No trate las preguntas como sinónimas. Unas son ontológicas —qué es la necesidad—, otras semánticas —qué significa lógicamente verdadero—, otras metateóricas —si la validez es relativa al sistema— y otras racionales —qué hace bueno a un argumento."
              why="Estas preguntas convierten las reglas formales ya aprendidas en objetos de investigación filosófica."
              takeaway="La filosofía de la lógica pregunta por el estatuto, fundamento y alcance de las relaciones que el cálculo formaliza."
            />
          </section>

          <section id="agenda" className="flc1-section">
            <SectionTitle number="06" eyebrow="Quinque itinera">
              Cinco marcos anunciados para pensar la necesidad
            </SectionTitle>

            <div className="flc12-frameworks">
              {frameworks.map((name,index) => (
                <article key={name} className={index === 0 ? 'is-current' : ''}>
                  <span>{String(index+1).padStart(2,'0')}</span>
                  <strong>{name}</strong>
                  <small>{index === 0 ? 'primera respuesta estudiada ahora' : 'marco anunciado para sesiones posteriores'}</small>
                </article>
              ))}
            </div>

            <LogicFigureNote
              noteId="12-agenda"
              what="Los cinco autores o marcos que la clase anuncia como rutas posteriores para pensar la necesidad lógica."
              how="Sólo Platón aparece desarrollado en esta sesión. Los otros cuatro deben leerse como agenda del curso, no como teorías ya explicadas aquí."
              why="Mantener esta diferencia evita atribuir prematuramente a Aristóteles, Leibniz, Kant o Quine posiciones que estos apuntes todavía no desarrollan."
              takeaway="La sesión abre un programa comparativo; su primera respuesta efectiva es el platonismo."
            />
          </section>

          <section id="platonismo" className="flc1-section">
            <SectionTitle number="07" eyebrow="Prima responsio">
              Platonismo: la necesidad sería independiente del sistema
            </SectionTitle>

            <div className="flc12-platonism-thesis">
              <span>TESIS CENTRAL EN EL ENCUADRE DE LA CLASE</span>
              <strong>La necesidad no nace del sistema; el sistema intenta representar una necesidad previa e independiente.</strong>
            </div>

            <div className="flc12-platonism-grid">
              {platonismTraits.map(([title,text]) => (
                <article key={title}>
                  <span>{title}</span>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <LogicFigureNote
              noteId="12-platonismo"
              what="La primera respuesta filosófica presentada por el curso ante la pregunta por el origen de la necesidad."
              how="Las cuatro cajas desarrollan una misma dirección: la objetividad de las formas y relaciones necesarias no depende de percepción, formulación lingüística o invención humana."
              why="Si la validez remite a relaciones objetivas previas al sistema, se explica por qué una inferencia puede parecer necesaria aunque cambiemos nuestra notación o lenguaje."
              takeaway="En el platonismo lógico presentado aquí, los sistemas descubren o representan necesidad; no la fabrican."
            />
          </section>

          <section id="categorial" className="flc1-section">
            <SectionTitle number="08" eyebrow="Problema categorial">
              ¿Cómo puede la mente alcanzar algo de un orden distinto?
            </SectionTitle>

            <div className="flc12-categorical">
              <article>
                <span>MUNDO MENTAL</span>
                <strong>conciencia · pensamiento</strong>
              </article>
              <div>?</div>
              <article>
                <span>MUNDO MATERIAL</span>
                <strong>objetos · cosas</strong>
              </article>
            </div>

            <div className="flc12-platonic-mediation">
              <span>SEGÚN LA RECONSTRUCCIÓN DE LA CLASE</span>
              <strong>MUNDO IDEAL · EIDOS</strong>
              <p>Un ámbito inteligible permite mediar entre la razón y lo real sensible.</p>
            </div>

            <LogicFigureNote
              noteId="12-categorial"
              what="El problema categorial formulado como dificultad para explicar la relación entre conciencia y mundo material, y la mediación ideal propuesta en la reconstrucción platónica de la clase."
              how="Primero observe la separación entre los dos órdenes superiores. El signo de interrogación marca el problema del conocimiento. Después aparece un tercer ámbito inteligible que pretende hacer comprensible esa relación."
              why="El platonismo lógico no sólo responde de dónde vendría la necesidad; también abre un problema epistemológico: cómo podemos conocer entidades o relaciones independientes de la percepción."
              takeaway="La objetividad de las formas exige explicar también el acceso racional a ellas."
            />
          </section>

          <section id="objetivismo" className="flc1-section">
            <SectionTitle number="09" eyebrow="Non idealismus subiectivus">
              Platón no se presenta aquí como idealismo subjetivo
            </SectionTitle>

            <div className="flc12-objectivism">
              <article>
                <span>NO</span>
                <strong>“Existe porque mi mente lo piensa”</strong>
                <p>Eso convertiría las formas en construcciones dependientes del sujeto individual.</p>
              </article>
              <b>≠</b>
              <article className="dark">
                <span>SÍ · EN EL ENCUADRE DE LA CLASE</span>
                <strong>objetivismo racional</strong>
                <p>Las formas tienen estatuto independiente y pueden ser captadas racionalmente.</p>
              </article>
            </div>

            <LogicFigureNote
              noteId="12-objetivismo"
              what="La distinción explícita de la sesión entre platonismo y una tesis idealista subjetiva."
              how="El lado izquierdo hace depender el objeto de una mente particular. El derecho conserva independencia ontológica aunque el acceso a las formas sea racional."
              why="Sin esta aclaración, decir que las formas son 'ideales' podría confundirse con decir que son meros contenidos privados de conciencia."
              takeaway="En esta reconstrucción, ideal no significa subjetivamente inventado: las formas pretenden ser objetivas e independientes."
            />
          </section>

          <section id="matematicas" className="flc1-section">
            <SectionTitle number="10" eyebrow="Invenire, non fingere">
              Por qué el platonismo resulta atractivo en matemáticas
            </SectionTitle>

            <div className="flc12-math-examples">
              <article><span>π</span><strong>relación matemática</strong></article>
              <article><span>a²+b²=c²</span><strong>estructura geométrica</strong></article>
              <article><span>ℕ</span><strong>estabilidad ideal de lo numérico</strong></article>
            </div>

            <div className="flc12-discovery">
              <span>INTUICIÓN PLATÓNICA</span>
              <strong>el matemático descubre la necesidad; no la fabrica.</strong>
            </div>

            <LogicFigureNote
              noteId="12-matematicas"
              what="Ejemplos usados por la clase para expresar la intuición de que ciertas relaciones matemáticas parecen independientes de quien las conoce."
              how="Los tres casos no pretenden demostrar el platonismo. Funcionan como fenómenos que esta postura intenta explicar: estabilidad, necesidad y sensación de descubrimiento."
              why="La clase usa esta intuición para explicar históricamente por qué matemáticos y lógicos pueden sentirse atraídos por una ontología de entidades ideales."
              takeaway="El atractivo del platonismo consiste en tomar en serio la experiencia de descubrir relaciones necesarias que parecen no depender de nuestras decisiones."
            />
          </section>

          <section id="comparacion" className="flc1-section">
            <SectionTitle number="11" eyebrow="Tabula distinctionum">
              Mapa final de los cuatro sentidos del verbo «ser»
            </SectionTitle>

            <div className="flc12-comparison">
              <div className="head">
                <strong>USO</strong><strong>QUÉ RELACIONA</strong><strong>EJEMPLO</strong><strong>ESQUEMA</strong>
              </div>
              <div className="row"><strong>Subordinación</strong><span>concepto bajo concepto</span><span>La ballena es mamífero.</span><code>C₁ ⊂ C₂</code></div>
              <div className="row"><strong>Pertenencia</strong><span>objeto bajo concepto</span><span>Sócrates es mortal.</span><code>M(s)</code></div>
              <div className="row"><strong>Identidad</strong><span>dos expresiones / un referente</span><span>Edson Arantes es Pelé.</span><code>a = b</code></div>
              <div className="row"><strong>Existencia</strong><span>afirmación ontológica</span><span>Sócrates es.</span><code>∃x(x=s)</code></div>
            </div>

            <LogicFigureNote
              noteId="12-tabla-ser"
              what="Una síntesis de la primera mitad técnica de la sesión."
              how="Lea cada fila desde el tipo de relación hacia el ejemplo. La columna de esquema sirve como recordatorio conceptual, no como pretensión de ofrecer la única formalización posible."
              why="La tabla permite volver a la pregunta inicial y verificar que una misma palabra del castellano puede corresponder a estructuras lógicas muy distintas."
              takeaway="La teoría funcional gana precisión al desambiguar relaciones que la gramática ordinaria presenta bajo la misma cópula."
            />
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="12" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc12-summary">
              <article><span>IDEA 1</span><h3>«Ser» es lógicamente plural</h3><p>Subordinación, pertenencia, identidad y existencia no deben confundirse.</p></article>
              <article><span>IDEA 2</span><h3>Frege amplía la formalización</h3><p>La teoría funcional trata con mayor naturalidad nombres singulares y relaciones distintas de la subordinación conceptual.</p></article>
              <article><span>IDEA 3</span><h3>Validez no es verdad factual</h3><p>La estructura necesaria de dependencia puede separarse de los valores de verdad reales de sus enunciados.</p></article>
              <article><span>IDEA 4</span><h3>Comienza la pregunta filosófica</h3><p>El platonismo propone que la necesidad es objetiva y anterior a nuestros sistemas formales.</p></article>
            </div>

            <div className="flc12-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Cuáles son los cuatro sentidos lógicos de «ser» trabajados en clase?</li>
                <li>¿Qué diferencia subordinación conceptual de pertenencia?</li>
                <li>¿Por qué “Edson Arantes es Pelé” expresa identidad y no subordinación?</li>
                <li>¿Cómo se reconstruye el uso existencial de «ser»?</li>
                <li>¿Cuál es exactamente el límite aristotélico mostrado con Sócrates?</li>
                <li>¿Qué cambia cuando el curso pasa del bloque técnico al filosófico?</li>
                <li>¿Cómo puede un argumento tener premisas y conclusión verdaderas y ser inválido?</li>
                <li>¿Cómo puede un argumento de contenido falso ser formalmente válido?</li>
                <li>¿Qué significa dependencia necesaria?</li>
                <li>¿Qué cinco autores anuncia la clase para estudiar la necesidad?</li>
                <li>¿Cuál es la tesis central del platonismo lógico presentado aquí?</li>
                <li>¿Qué es el problema categorial?</li>
                <li>¿Por qué platonismo no equivale aquí a idealismo subjetivo?</li>
                <li>¿Por qué esta postura puede resultar atractiva a matemáticos?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Continuidad</strong>
              <p>La sesión abre explícitamente el bloque filosófico sobre necesidad y validez. Platón es la primera respuesta desarrollada; Aristóteles, Leibniz, Kant y Quine quedan anunciados para el recorrido posterior. No se registra una tarea concreta con fecha.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 12 · 18 marzo 2026</span>
      </footer>
    </main>
  )
}
