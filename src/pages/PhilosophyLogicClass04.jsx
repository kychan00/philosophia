import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass04.css'

const sections = [
  ['00', 'ruta', 'Ruta de enseñanza'],
  ['01', 'sistemas', 'Sistemas y tema'],
  ['02', 'neutralidad', 'Neutralidad tópica'],
  ['03', 'lenguaje', 'Interpretación lingüística'],
  ['04', 'leibniz', 'Leibniz y Frege'],
  ['05', 'puente', 'Lenguaje, mente y mundo'],
  ['06', 'traduccion', 'Traducción y gavagai'],
  ['07', 'gramatica', 'Sintaxis y semántica'],
  ['08', 'oracion', 'Palabra y oración'],
  ['09', 'proposicion', 'Hacia proposición'],
  ['10', 'cierre', 'Síntesis docente'],
]

const routeSteps = [
  ['1', 'Separar sistema y tema', 'Aritmética y geometría ya están ligadas a dominios; la lógica aspira a mayor generalidad.'],
  ['2', 'Definir neutralidad', 'Lo lógico no habla de números, espacio o tiempo, sino de relaciones formales aplicables a distintos contenidos.'],
  ['3', 'Explicar la lectura lingüística', 'La lógica puede interpretarse mediante proposiciones sin ser lenguaje por naturaleza.'],
  ['4', 'Construir el puente', 'Leibniz y Frege muestran por qué un lenguaje formal promete explicitar estructura y reducir ambigüedades.'],
  ['5', 'Llegar a proposición', 'Sintaxis y semántica preparan el recorte del lenguaje que interesa a la lógica.'],
]

const relations = [
  { id: 'arriba', text: 'A está arriba de B', domain: 'espacio', neutral: false, note: 'Presupone una estructura espacial.' },
  { id: 'grande', text: 'A es más grande que B', domain: 'magnitud', neutral: false, note: 'Necesita un criterio de magnitud.' },
  { id: 'viejo', text: 'A es más viejo que B', domain: 'tiempo', neutral: false, note: 'La comparación presupone tiempo.' },
  { id: 'implica', text: 'P → Q', domain: 'relación formal', neutral: true, note: 'La forma puede permanecer abierta respecto de qué significan P y Q.' },
  { id: 'coexiste', text: 'P y Q existen', domain: 'relación formal', neutral: true, note: 'No fija todavía qué son P y Q.' },
  { id: 'incompatible', text: '¬(P ∧ ¬P)', domain: 'relación formal', neutral: true, note: 'En lógica clásica expresa incompatibilidad sin introducir un dominio temático.' },
]

const bridgeViews = [
  { id: 'dualismo', mark: 'M ≠ L', title: 'Dualismo', idea: 'Pensamiento y lenguaje son distintos; el lenguaje funciona como interfaz.', question: '¿Cómo conserva el lenguaje la estructura de lo pensado?' },
  { id: 'monismo', mark: 'M ≈ L', title: 'Monismo / materialismo', idea: 'No habría un contenido mental completamente separable de actividad cerebral y conducta lingüística.', question: '¿Podemos estudiar el pensamiento atendiendo a su manifestación lingüística?' },
  { id: 'isomorfismo', mark: 'L ≅ W', title: 'Isomorfismo', idea: 'Si el lenguaje describe el mundo, debe compartir con él alguna estructura relevante.', question: '¿La forma lógica del lenguaje puede revelar estructura del mundo?' },
  { id: 'categoria', mark: 'M ? W', title: 'Problema categorial', idea: 'La conciencia y el mundo material parecen pertenecer a categorías distintas.', question: '¿Cómo puede lo mental representar lo material?' },
]

const grammarCases = [
  { id: 'mal', title: 'Mal formada', syntax: '✗', semantic: '—', example: 'Viola reglas de formación.', lesson: 'La pregunta por verdad viene después de la corrección sintáctica.' },
  { id: 'bien', title: 'Bien formada, semántica incierta', syntax: '✓', semantic: '?', example: 'Forma correcta, símbolo aún sin interpretación fija.', lesson: 'Bien formada no equivale a verdadera ni a semánticamente determinada.' },
  { id: 'interpretada', title: 'Bien formada e interpretada', syntax: '✓', semantic: '✓', example: 'La casa es azul.', lesson: 'Ahora puede preguntarse por verdad o falsedad, pero la sintaxis no decide la respuesta.' },
]

const propositionTests = [
  { id: 'sujeto', n: '01', title: 'Sujeto gramatical', question: '¿Hay algo de lo que se atribuye algo?', note: 'La clase lo propone como requisito operativo para el fragmento proposicional.' },
  { id: 'verdad', n: '02', title: 'Aptitud veritativa', question: '¿Tiene sentido preguntar si es verdadero o falso?', note: 'Este criterio separa proposiciones de órdenes, preguntas y otras funciones.' },
  { id: 'autonomia', n: '03', title: 'Autonomía sintáctica', question: '¿La expresión tiene cierre suficiente?', note: '“La casa es azul” cierra; “la casa” o “la casa es” quedan incompletas.' },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function SectionTitle({ number, eyebrow, children }) {
  return (
    <div className="flc1-section-title">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function PhilosophyLogicClass04() {
  const [relationId, setRelationId] = useState('implica')
  const [bridgeId, setBridgeId] = useState('isomorfismo')
  const [grammarId, setGrammarId] = useState('bien')
  const [testId, setTestId] = useState('verdad')

  const relation = useMemo(() => relations.find(x => x.id === relationId) || relations[3], [relationId])
  const bridge = useMemo(() => bridgeViews.find(x => x.id === bridgeId) || bridgeViews[2], [bridgeId])
  const grammar = useMemo(() => grammarCases.find(x => x.id === grammarId) || grammarCases[1], [grammarId])
  const test = useMemo(() => propositionTests.find(x => x.id === testId) || propositionTests[1], [testId])

  return (
    <main className="flc1-page flc4-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>04 · II · 2026</span>
      </nav>

      <header className="flc1-hero flc4-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>P→Q</span><span>≅</span><span>⌜⌝</span><span>W</span><span>L</span>
        </div>
        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 04</p>
          <h1>Sistemas formales,<em>neutralidad tópica y lenguaje</em></h1>
          <p className="flc1-lead">
            La sesión profundiza la idea de que la lógica no se define por un objeto particular,
            sino por relaciones formales. Desde ahí pregunta por qué el lenguaje se convirtió en
            su interpretación privilegiada y cómo llegamos de símbolos sin tema a proposiciones
            susceptibles de verdad y falsedad.
          </p>
        </div>
        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>Si la lógica es neutral respecto del tema, ¿cómo representa lenguaje, pensamiento y mundo sin quedar “casada” con ninguno?</strong>
          <small>Neutralidad → interpretación → gramática → proposición.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN IV</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">Cinco movimientos para reconstruir la clase</SectionTitle>
            <div className="flc4-route">
              {routeSteps.map(([n, title, text]) => (
                <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <div className="flc4-master">
              <span>SISTEMA</span><b>→</b><span>NEUTRALIDAD</span><b>→</b><span>LENGUAJE</span><b>→</b><span>GRAMÁTICA</span><b>→</b><span>PROPOSICIÓN</span>
            </div>
          </section>

          <section id="sistemas" className="flc1-section">
            <SectionTitle number="01" eyebrow="Systema et thema">Sistemas “casados” con un tema y sistemas libres de tema</SectionTitle>
            <div className="flc4-systems">
              <article><span>TEMÁTICO</span><strong>2 + 2</strong><h3>Aritmética</h3><p>Presupone números y una ontología numérica.</p></article>
              <article><span>TEMÁTICO</span><strong>△</strong><h3>Geometría</h3><p>Presupone espacio y relaciones espaciales.</p></article>
              <article className="is-logic"><span>NO FIJADO A TEMA</span><strong>P → Q</strong><h3>Lógica pura</h3><p>Puede permanecer sin contenido fijo y recibir distintas interpretaciones.</p></article>
            </div>
            <div className="flc1-definition">
              <span>IDEA CENTRAL</span>
              <p>La neutralidad tópica exige que la lógica trate relaciones formales generales, no una ontología temática particular.</p>
            </div>
          </section>

          <section id="neutralidad" className="flc1-section">
            <SectionTitle number="02" eyebrow="Neutralitas topica">¿Qué relaciones traen tema y cuáles pueden permanecer neutrales?</SectionTitle>
            <div className="flc4-rel-tabs">
              {relations.map(item => (
                <button type="button" key={item.id} className={item.id === relationId ? 'is-active' : ''} onClick={() => setRelationId(item.id)}>
                  <span>{item.neutral ? '○' : '●'}</span><strong>{item.text}</strong><small>{item.domain}</small>
                </button>
              ))}
            </div>
            <div className={`flc4-rel-reader ${relation.neutral ? 'is-neutral' : 'is-themed'}`}>
              <div><span>{relation.neutral ? 'NEUTRAL' : 'CON TEMA'}</span><h3>{relation.text}</h3></div>
              <div><strong>{relation.domain}</strong><p>{relation.note}</p></div>
            </div>
            <div className="flc4-contrast">
              <article><span>INTERPRETADO</span><strong>2 + 2 = 4</strong><p>Exige ontología numérica.</p></article>
              <div>≠</div>
              <article><span>NO INTERPRETADO</span><strong>P → Q</strong><p>Su contenido puede quedar abierto.</p></article>
            </div>
          </section>

          <section id="lenguaje" className="flc1-section">
            <SectionTitle number="03" eyebrow="Interpretatio historica">Lenguaje como interpretación privilegiada, no como esencia de la lógica</SectionTitle>
            <div className="flc4-interpretation">
              <article><span>SISTEMA PURO</span><strong>P · Q · → · ¬</strong><small>sin significado fijo</small></article>
              <div><span>INTERPRETAR</span><b>→</b></div>
              <article className="is-language"><span>LENGUAJE</span><strong>proposiciones</strong><small>significado + tema</small></article>
            </div>
            <div className="flc4-key">
              <span>DISTINCIÓN DOCENTE</span>
              <strong>Que P y Q puedan interpretarse como proposiciones no significa que la lógica sea lenguaje por naturaleza.</strong>
            </div>
          </section>

          <section id="leibniz" className="flc1-section">
            <SectionTitle number="04" eyebrow="Leibniz → Frege">El ideal de precisión y la formalización del pensamiento</SectionTitle>
            <div className="flc4-history">
              <article>
                <span>LEIBNIZ · SIGLO XVII</span>
                <h3>Un lenguaje formal para la ciencia</h3>
                <p>Reducir ambigüedad, traducción y disputas producidas por el lenguaje ordinario.</p>
              </article>
              <b>→</b>
              <article className="is-frege">
                <span>FREGE · 1879</span>
                <h3>Begriffsschrift</h3>
                <p>Representar pensamiento y lenguaje mediante una estructura simbólica explícita.</p>
              </article>
            </div>

            <div className="flc4-translation">
              <article><span>LENGUAJE NATURAL</span><strong>interpretar</strong><p>sentido · contexto · matiz</p></article>
              <div><small>traduttore, traditore</small><b>≠</b></div>
              <article><span>IDEAL MATEMÁTICO</span><strong>transcribir</strong><p>símbolos compartidos</p></article>
            </div>
          </section>

          <section id="puente" className="flc1-section">
            <SectionTitle number="05" eyebrow="Mens · lingua · mundus">Lenguaje como puente entre sujeto y mundo</SectionTitle>
            <div className="flc4-world">
              <article><span>MENTE</span><strong>M</strong></article>
              <div><small>objetivar</small><b>→</b></div>
              <article className="is-language"><span>LENGUAJE</span><strong>L</strong></article>
              <div><small>describir</small><b>→</b></div>
              <article><span>MUNDO</span><strong>W</strong></article>
            </div>

            <div className="flc4-bridge-tabs">
              {bridgeViews.map(item => (
                <button type="button" key={item.id} className={item.id === bridgeId ? 'is-active' : ''} onClick={() => setBridgeId(item.id)}>
                  <span>{item.mark}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>
            <div className="flc4-bridge-reader">
              <div><span>{bridge.mark}</span><h3>{bridge.title}</h3></div>
              <div><p>{bridge.idea}</p><strong>{bridge.question}</strong></div>
            </div>
            <p className="flc4-note">La sesión presenta estas posiciones panorámicamente; no resuelve aquí el debate mente–lenguaje–mundo.</p>
          </section>

          <section id="traduccion" className="flc1-section">
            <SectionTitle number="06" eyebrow="Interpretatio radicalis">Quine, “gavagai” y el límite de la traducción directa</SectionTitle>
            <div className="flc4-gavagai">
              <article><span>OBSERVACIÓN</span><strong>liebre</strong><p>pasa un animal</p></article>
              <article className="is-utterance"><span>HABLANTE</span><strong>“gavagai”</strong><p>emite una expresión</p></article>
              <article><span>TRADUCTOR</span><strong>¿“liebre”?</strong><p>hipótesis interpretativa</p></article>
            </div>
            <div className="flc4-key">
              <span>LECCIÓN</span>
              <strong>La correlación observacional no basta para fijar significado.</strong>
              <p>Si la lógica se interpreta lingüísticamente, diferencias gramaticales y problemas de traducción vuelven relevante preguntar si una sola estructura lógica basta para cualquier lenguaje.</p>
            </div>
          </section>

          <section id="gramatica" className="flc1-section">
            <SectionTitle number="07" eyebrow="Grammatica codicis">Sintaxis, semántica y fórmula bien formada</SectionTitle>
            <div className="flc4-synsem">
              <article><span>SINTAXIS</span><h3>orden y relación</h3><p>Reglas para combinar componentes.</p></article>
              <div>+</div>
              <article><span>SEMÁNTICA</span><h3>significado</h3><p>Interpretación de componentes y unidades.</p></article>
            </div>

            <div className="flc4-grammar-tabs">
              {grammarCases.map(item => (
                <button type="button" key={item.id} className={item.id === grammarId ? 'is-active' : ''} onClick={() => setGrammarId(item.id)}>
                  <span>{item.syntax} / {item.semantic}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>
            <div className="flc4-grammar-reader">
              <div><span>SINTAXIS {grammar.syntax}</span><span>SEMÁNTICA {grammar.semantic}</span></div>
              <div><h3>{grammar.example}</h3><p>{grammar.lesson}</p></div>
            </div>

            <div className="flc4-pure">
              <span>PUNTO FUERTE</span>
              <strong>Un sistema lógico no interpretado puede operar sin semántica fijada, pero no sin sintaxis.</strong>
            </div>
          </section>

          <section id="oracion" className="flc1-section">
            <SectionTitle number="08" eyebrow="Clausura syntactica">De palabra aislada a oración autónoma</SectionTitle>
            <div className="flc4-build">
              <article><span>01</span><strong>“Casa”</strong><small>palabra</small></article><b>→</b>
              <article><span>02</span><strong>“La casa”</strong><small>no cierra</small></article><b>→</b>
              <article><span>03</span><strong>“La casa es”</strong><small>incompleta</small></article><b>→</b>
              <article className="is-complete"><span>04</span><strong>“La casa es azul”</strong><small>autonomía sintáctica</small></article>
            </div>
            <div className="flc4-word-vs">
              <article><span>PALABRA</span><p>Tiene significante y significado, pero no necesariamente cierre como enunciado.</p></article>
              <article><span>ORACIÓN</span><p>Unidad mínima que normalmente puede presentar un sentido completo.</p></article>
            </div>
          </section>

          <section id="proposicion" className="flc1-section">
            <SectionTitle number="09" eyebrow="Fragmentum logicum">¿Qué parte de la riqueza del lenguaje le interesa a la lógica?</SectionTitle>
            <div className="flc4-types">
              <article><span>IMPERATIVA</span><strong>directiva</strong><p>“Cierra la puerta.”</p></article>
              <article><span>DECLARATIVA</span><strong>afirmativa</strong><p>“La puerta está cerrada.”</p></article>
              <article><span>INTERROGATIVA</span><strong>inquisitiva</strong><p>“¿Está cerrada?”</p></article>
              <article><span>EXCLAMATIVA</span><strong>expresiva</strong><p>“¡Qué fría está!”</p></article>
            </div>

            <div className="flc4-mismatch">
              <span>FORMA ≠ FUNCIÓN</span>
              <strong>“¿No te callas?”</strong>
              <p>Forma interrogativa; función directiva. La forma gramatical superficial no basta para determinar qué hace una oración.</p>
            </div>

            <div className="flc4-prop-tabs">
              {propositionTests.map(item => (
                <button type="button" key={item.id} className={item.id === testId ? 'is-active' : ''} onClick={() => setTestId(item.id)}>
                  <span>{item.n}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>
            <div className="flc4-prop-reader">
              <div><span>CRITERIO OPERATIVO</span><h3>{test.question}</h3></div>
              <p>{test.note}</p>
            </div>

            <div className="flc4-limit">
              <div><span>CASO LÍMITE</span><strong>“¿Qué horas son?”</strong></div>
              <div><p>gramaticalmente correcta ✓</p><p>sujeto gramatical requerido ?</p><p>verdadera / falsa directamente ?</p></div>
              <p>La sesión la usa para mostrar que una oración puede ser lingüísticamente legítima sin encajar cómodamente como proposición lógica.</p>
            </div>
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="10" eyebrow="Ad usum futurum">Síntesis para estudiar y volver a enseñar la sesión</SectionTitle>
            <div className="flc4-summary">
              <article><span>IDEA 1</span><h3>Neutralidad permite aplicación</h3><p>La lógica puede interpretarse en distintos dominios precisamente porque no fija uno desde el inicio.</p></article>
              <article><span>IDEA 2</span><h3>Lenguaje es interpretación</h3><p>La lectura lingüística es central, pero no debe confundirse con la esencia del sistema formal.</p></article>
              <article><span>IDEA 3</span><h3>Sintaxis antecede a verdad</h3><p>Antes de preguntar por verdad hay que preguntar por buena formación e interpretación.</p></article>
              <article><span>IDEA 4</span><h3>La lógica recorta el lenguaje</h3><p>El cierre prepara el paso desde oración hacia enunciado y proposición.</p></article>
            </div>

            <div className="flc4-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué significa que aritmética y geometría estén “casadas” con un tema?</li>
                <li>¿Qué es neutralidad tópica?</li>
                <li>¿Por qué P → Q puede quedar no interpretado?</li>
                <li>¿Por qué interpretación lingüística no equivale a identidad entre lógica y lenguaje?</li>
                <li>¿Qué problema motiva el ideal de Leibniz?</li>
                <li>¿Qué papel tiene Frege en la simbolización?</li>
                <li>¿Qué significa tratar al lenguaje como puente entre mente y mundo?</li>
                <li>¿Qué enseña “gavagai” sobre traducción?</li>
                <li>¿Qué diferencia hay entre estar bien formado y ser verdadero?</li>
                <li>¿Qué requisitos empieza a exigir la clase para hablar de proposición?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Continuidad</strong>
              <p>La siguiente sesión avanzará desde oración hacia enunciado y proposición. No se fija aquí una tarea concreta con fecha.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 04 · 4 febrero 2026</span>
      </footer>
    </main>
  )
}
