import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './PhilosophyLogicClass01.css'
import './PhilosophyLogicClass06.css'

const sections = [
  ['00', 'ruta', 'Ruta de enseñanza'],
  ['01', 'niveles', 'Deductivo, formal y lógico'],
  ['02', 'anatomia', 'Anatomía del sistema'],
  ['03', 'axiomas', 'Qué es un axioma'],
  ['04', 'reglas', 'Reglas deductivas y aridad'],
  ['05', 'derivaciones', 'Teorema y derivación'],
  ['06', 'probabilidad', 'Ejemplo: probabilidad'],
  ['07', 'peano', 'Ejemplo: Peano'],
  ['08', 'cambio', 'Cambiar el sistema'],
  ['09', 'formal', 'Qué exige lo formal'],
  ['10', 'logico', 'Qué exige lo lógico'],
  ['11', 'metalogica', 'Agenda metalógica'],
  ['12', 'cierre', 'Síntesis docente'],
]

const routeSteps = [
  ['1', 'Ordenar niveles', 'Primero hay sistemas que derivan; después sistemas que explicitan un lenguaje formal; finalmente sistemas lógicos con neutralidad tópica.'],
  ['2', 'Desarmar el sistema', 'Axiomas, reglas de inferencia y derivaciones permiten ver qué hace cada pieza y por qué no son intercambiables.'],
  ['3', 'Entender el axioma', 'El sentido contemporáneo ya no exige autoevidencia: basta que funcione como postulado inicial dentro del sistema.'],
  ['4', 'Controlar la derivación', 'Las reglas deben ser deductivas y explícitas para que pueda decidirse cuándo un paso es válido.'],
  ['5', 'Subir al metanivel', 'Una vez construido el sistema, aparecen preguntas por consistencia, completitud, rigor e independencia.'],
]

const systemLevels = [
  {
    id: 'deductivo',
    roman: 'I',
    title: 'Sistema deductivo',
    formula: 'puntos de partida + reglas → consecuencias',
    requirement: 'derivación',
    explanation:
      'Obtiene consecuencias desde ciertos puntos de partida. Todavía puede expresarse en lenguaje natural y dejar reglas implícitas.',
  },
  {
    id: 'formal',
    roman: 'II',
    title: 'Sistema formal',
    formula: 'deductivo + lenguaje formal + gramática explícita',
    requirement: 'simbolización',
    explanation:
      'Añade símbolos, formas permitidas y reglas explícitas para determinar qué cuenta como fórmula bien formada y cómo puede derivarse.',
  },
  {
    id: 'logico',
    roman: 'III',
    title: 'Sistema lógico',
    formula: 'formal + neutralidad tópica + símbolos no interpretados',
    requirement: 'generalidad',
    explanation:
      'Es un tipo especial de sistema formal: no se fija a números, espacio u otro tema, y sus símbolos no poseen contenido por sí mismos.',
  },
]

const axiomViews = [
  {
    id: 'clasico',
    mark: 'Aᶜ',
    title: 'Sentido clásico',
    subtitle: 'verdad autoevidente',
    explanation:
      'El axioma se piensa como racionalmente evidente e incuestionable, por lo que no requiere demostración.',
  },
  {
    id: 'contemporaneo',
    mark: 'Aᵖ',
    title: 'Sentido contemporáneo',
    subtitle: 'postulado operativo',
    explanation:
      'El axioma funciona como punto de partida aceptado para explorar qué sistema resulta. No necesita presentarse como verdad autoevidente.',
  },
  {
    id: 'externo',
    mark: 'EXT',
    title: 'Justificación externa',
    subtitle: 'fuera del sistema',
    explanation:
      'Si se quiere justificar el axioma, esa justificación no puede consistir en derivarlo con los mismos recursos internos de los que depende.',
  },
]

const arities = [
  {
    id: 'uno',
    n: '1',
    title: 'Regla unaria',
    input: 'P',
    output: 'Q',
    explanation: 'Una regla puede requerir una sola entrada si así está definida.',
  },
  {
    id: 'dos',
    n: '2',
    title: 'Regla binaria',
    input: 'P→Q  +  P',
    output: 'Q',
    explanation: 'Modus ponens es el ejemplo típico de la sesión: necesita dos premisas para producir una conclusión.',
  },
  {
    id: 'tres',
    n: '3',
    title: 'Regla ternaria',
    input: 'α + β + γ',
    output: 'δ',
    explanation: 'La aridad expresa cuántos elementos de entrada necesita una regla para poder aplicarse.',
  },
]

const peanoAxioms = [
  ['P1', 'Primer natural', '1 —o un primer número— pertenece a los números naturales.'],
  ['P2', 'Sucesor', 'Si n es natural, existe su sucesor n + 1 y también es natural.'],
  ['P3', 'Distinción', 'El sucesor de un natural no es igual al número original.'],
  ['P4', 'Inyección', 'Si n + 1 = m + 1, entonces n = m.'],
  ['P5', 'Inducción', 'Si una propiedad vale para el primero y se preserva por sucesor, vale para todos los naturales.'],
]

const changeCases = [
  {
    id: 'mismo',
    title: 'Mismo sistema',
    mark: '=',
    premise: 'Conservo axiomas y reglas',
    consequence: 'conservo qué cuenta como derivación interna',
    demand: 'Los resultados se juzgan dentro de ese marco.',
  },
  {
    id: 'geometria',
    title: 'Cambio geométrico',
    mark: '∥',
    premise: 'Modifico un principio sobre paralelas / espacio',
    consequence: 'obtengo otra geometría',
    demand: 'Debo estudiar qué propiedades conserva el nuevo sistema.',
  },
  {
    id: 'logica',
    title: 'Cambio lógico',
    mark: 'Vₙ',
    premise: 'Modifico valores, axiomas o reglas',
    consequence: 'obtengo una lógica alternativa',
    demand: 'No basta con ejemplos: debo estudiar consistencia y demás propiedades metalógicas.',
  },
]

const formalRequirements = [
  {
    id: 'lenguaje',
    n: '01',
    title: 'Lenguaje formal',
    question: '¿Están especificados los símbolos y las formas permitidas?',
    note: 'Lo formal reduce la dependencia de intuiciones del lenguaje natural.',
  },
  {
    id: 'gramatica',
    n: '02',
    title: 'Gramática formal',
    question: '¿Puede decidirse qué expresiones están bien formadas?',
    note: 'La buena formación debe depender de reglas explícitas, no de “lo obvio”.',
  },
  {
    id: 'inferencia',
    n: '03',
    title: 'Reglas explícitas',
    question: '¿Está definido cómo se pasa de unas fórmulas a otras?',
    note: 'La derivación debe poder reconstruirse paso por paso.',
  },
]

const logicRequirements = [
  {
    id: 'neutralidad',
    mark: '○',
    title: 'Neutralidad tópica',
    explanation:
      'La lógica no trata de números, espacio o magnitud. Busca relaciones posibles entre objetos cualesquiera.',
  },
  {
    id: 'simbolos',
    mark: 'P',
    title: 'Símbolos no interpretados',
    explanation:
      'P, Q o → no significan nada por sí mismos; reciben contenido sólo cuando se introduce una interpretación.',
  },
  {
    id: 'sintaxis',
    mark: '⊢',
    title: 'Gramática sintáctica',
    explanation:
      'En el trabajo interno importa la forma correcta de las expresiones, no un referente semántico particular.',
  },
  {
    id: 'explicitud',
    mark: '≠…',
    title: 'Nada queda “por entendido”',
    explanation:
      'Símbolos y reglas deben estar especificados, incluso cuando una práctica informal los consideraría obvios.',
  },
]

const metaProperties = [
  ['Consistencia', '¿El sistema evita derivar contradicciones?'],
  ['Completitud', '¿Alcanza, mediante sus reglas, aquello que debería poder derivarse?'],
  ['Rigor', '¿Las reglas y pasos están suficientemente especificados?'],
  ['Independencia', '¿Algún axioma puede derivarse de los demás o realmente aporta algo irreductible?'],
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

export default function PhilosophyLogicClass06() {
  const [systemId, setSystemId] = useState('logico')
  const [axiomId, setAxiomId] = useState('contemporaneo')
  const [arityId, setArityId] = useState('dos')
  const [changeId, setChangeId] = useState('logica')
  const [formalId, setFormalId] = useState('gramatica')
  const [logicId, setLogicId] = useState('neutralidad')

  const system = useMemo(
    () => systemLevels.find((item) => item.id === systemId) || systemLevels[2],
    [systemId],
  )

  const axiom = useMemo(
    () => axiomViews.find((item) => item.id === axiomId) || axiomViews[1],
    [axiomId],
  )

  const arity = useMemo(
    () => arities.find((item) => item.id === arityId) || arities[1],
    [arityId],
  )

  const change = useMemo(
    () => changeCases.find((item) => item.id === changeId) || changeCases[2],
    [changeId],
  )

  const formal = useMemo(
    () => formalRequirements.find((item) => item.id === formalId) || formalRequirements[1],
    [formalId],
  )

  const logic = useMemo(
    () => logicRequirements.find((item) => item.id === logicId) || logicRequirements[0],
    [logicId],
  )

  return (
    <main className="flc1-page flc6-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>11 · II · 2026</span>
      </nav>

      <header className="flc1-hero flc6-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>AX</span><span>⊢</span><span>∴</span><span>P→Q</span><span>Σ</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 06</p>
          <h1>
            Sistemas axiomático-deductivos,
            <em>axiomas y reglas de inferencia</em>
          </h1>
          <p className="flc1-lead">
            La sesión desmonta un sistema formal para mostrar de qué está hecho:
            axiomas como puntos de partida, reglas deductivas que controlan el
            paso entre fórmulas y derivaciones que producen resultados. Después
            añade las exigencias que vuelven formal y, finalmente, lógico al sistema.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA RECTORA</span>
          <strong>
            ¿Qué debe estar explícitamente fijado para que una derivación pueda
            considerarse válida dentro de un sistema?
          </strong>
          <small>Axiomas + reglas + derivaciones → formalidad → lógica → metalógica.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN VI</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="ruta" className="flc1-section">
            <SectionTitle number="00" eyebrow="Ruta docente">
              Cinco movimientos para enseñar la arquitectura del sistema
            </SectionTitle>

            <div className="flc6-route">
              {routeSteps.map(([n, title, text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc6-master-line">
              <span>AXIOMAS</span><b>+</b>
              <span>REGLAS</span><b>→</b>
              <span>DERIVACIONES</span><b>→</b>
              <span>SISTEMA</span><b>→</b>
              <span>METALÓGICA</span>
            </div>
          </section>

          <section id="niveles" className="flc1-section">
            <SectionTitle number="01" eyebrow="Tres gradus">
              Deductivo, formal y lógico no son sinónimos
            </SectionTitle>

            <div className="flc6-level-tabs">
              {systemLevels.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === systemId ? 'is-active' : ''}
                  onClick={() => setSystemId(item.id)}
                >
                  <span>{item.roman}</span>
                  <strong>{item.title}</strong>
                  <small>{item.requirement}</small>
                </button>
              ))}
            </div>

            <div className="flc6-level-reader">
              <div>
                <span>NIVEL {system.roman}</span>
                <h3>{system.title}</h3>
                <code>{system.formula}</code>
              </div>
              <p>{system.explanation}</p>
            </div>

            <div className="flc6-ladder">
              <span>DEDUCTIVO</span><b>+</b>
              <span>LENGUAJE FORMAL</span><b>+</b>
              <span>NEUTRALIDAD TÓPICA</span>
            </div>
          </section>

          <section id="anatomia" className="flc1-section">
            <SectionTitle number="02" eyebrow="Anatomia systematis">
              Las tres piezas del sistema axiomático-deductivo
            </SectionTitle>

            <div className="flc6-anatomy">
              <article>
                <span>01 · ENTRADA</span>
                <div className="flc6-anatomy-mark">A</div>
                <h3>Axiomas</h3>
                <p>Proposiciones iniciales aceptadas como puntos de partida.</p>
              </article>

              <div className="flc6-anatomy-arrow">→</div>

              <article className="is-rule">
                <span>02 · TRANSFORMACIÓN</span>
                <div className="flc6-anatomy-mark">⊢</div>
                <h3>Reglas</h3>
                <p>Indican qué pasos inferenciales están permitidos.</p>
              </article>

              <div className="flc6-anatomy-arrow">→</div>

              <article>
                <span>03 · SALIDA</span>
                <div className="flc6-anatomy-mark">T</div>
                <h3>Derivaciones</h3>
                <p>Resultados obtenidos mediante aplicaciones legítimas de reglas.</p>
              </article>
            </div>

            <div className="flc6-machine">
              <span>MODELO BÁSICO</span>
              <strong>
                parto de axiomas → aplico reglas → obtengo consecuencias internas
              </strong>
            </div>
          </section>

          <section id="axiomas" className="flc1-section">
            <SectionTitle number="03" eyebrow="Principium sine probatione">
              El axioma no se demuestra dentro del propio sistema
            </SectionTitle>

            <div className="flc6-axiom-tabs">
              {axiomViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === axiomId ? 'is-active' : ''}
                  onClick={() => setAxiomId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </button>
              ))}
            </div>

            <div className="flc6-axiom-reader">
              <div>
                <span>{axiom.mark}</span>
                <h3>{axiom.title}</h3>
                <small>{axiom.subtitle}</small>
              </div>
              <p>{axiom.explanation}</p>
            </div>

            <div className="flc6-circularity">
              <div>
                <span>EJEMPLO DE CIRCULARIDAD</span>
                <strong>mesa → mueble → mesa</strong>
              </div>
              <div className="flc6-no">✕</div>
              <div>
                <span>PROBLEMA</span>
                <p>
                  Si justifico los puntos de partida con los mismos recursos que
                  dependen de ellos, regreso al punto inicial.
                </p>
              </div>
            </div>

            <div className="flc6-classic-contemporary">
              <article>
                <span>CLÁSICO</span>
                <strong>“es evidente”</strong>
              </article>
              <div>→</div>
              <article className="is-contemporary">
                <span>CONTEMPORÁNEO</span>
                <strong>“dámelo por postulado y veamos qué sistema resulta”</strong>
              </article>
            </div>
          </section>

          <section id="reglas" className="flc1-section">
            <SectionTitle number="04" eyebrow="Regula deductionis">
              Por qué las reglas tienen que ser deductivas
            </SectionTitle>

            <div className="flc6-inference-types">
              <article>
                <span>DEDUCCIÓN</span>
                <strong>control estricto</strong>
                <p>Permite fijar si el paso de premisas a conclusión es válido.</p>
              </article>
              <article>
                <span>INDUCCIÓN</span>
                <strong>no es la regla del sistema</strong>
                <p>Puede ser racionalmente útil, pero no ofrece el mismo control deductivo.</p>
              </article>
              <article>
                <span>ABDUCCIÓN</span>
                <strong>no es la regla del sistema</strong>
                <p>Propone explicaciones o hipótesis, no una consecuencia deductivamente forzada.</p>
              </article>
            </div>

            <div className="flc6-deduction-thesis">
              <span>RAZÓN DEL CURSO</span>
              <strong>
                Sin reglas deductivas, el sistema pierde la capacidad de determinar
                con precisión cuándo una derivación es válida.
              </strong>
            </div>

            <div className="flc6-arity-tabs">
              {arities.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === arityId ? 'is-active' : ''}
                  onClick={() => setArityId(item.id)}
                >
                  <span>{item.n}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc6-arity-reader">
              <div className="flc6-input">
                <span>ENTRADAS · {arity.n}</span>
                <strong>{arity.input}</strong>
              </div>
              <div className="flc6-rule-arrow">⊢</div>
              <div className="flc6-output">
                <span>SALIDA</span>
                <strong>{arity.output}</strong>
              </div>
            </div>

            <p className="flc6-arity-note">{arity.explanation}</p>
          </section>

          <section id="derivaciones" className="flc1-section">
            <SectionTitle number="05" eyebrow="Distantia derivationis">
              Teorema y fórmulas posteriores
            </SectionTitle>

            <div className="flc6-distance">
              <article>
                <span>DISTANCIA 0</span>
                <strong>AXIOMAS</strong>
              </article>
              <b>→</b>
              <article className="is-theorem">
                <span>DISTANCIA 1</span>
                <strong>TEOREMA</strong>
              </article>
              <b>→</b>
              <article>
                <span>DISTANCIA 2+</span>
                <strong>FÓRMULAS DERIVADAS</strong>
              </article>
            </div>

            <div className="flc6-terminology">
              <span>TERMINOLOGÍA USADA EN ESTA SESIÓN</span>
              <p>
                El profesor llama “teorema” al resultado directamente derivado de
                axiomas y reserva “fórmula” para derivaciones en niveles posteriores.
                Aquí se conserva esa terminología tal como fue trabajada en clase.
              </p>
            </div>

            <div className="flc6-completeness-hint">
              <span>HORIZONTE</span>
              <strong>completitud</strong>
              <p>
                La sesión conecta esta cadena de derivaciones con la pregunta
                metalógica por aquello que debería poder alcanzarse mediante las reglas.
              </p>
            </div>
          </section>

          <section id="probabilidad" className="flc1-section">
            <SectionTitle number="06" eyebrow="Exemplum I">
              Probabilidad: axiomas, regla y resultado
            </SectionTitle>

            <div className="flc6-probability">
              <div className="flc6-prob-axioms">
                <span>AXIOMAS</span>
                <article>
                  <b>A₁</b>
                  <strong>P(E) ≥ 0</strong>
                  <small>ninguna probabilidad es negativa</small>
                </article>
                <article>
                  <b>A₂</b>
                  <strong>P(Ω) = 1</strong>
                  <small>el espacio muestral tiene probabilidad 1</small>
                </article>
              </div>

              <div className="flc6-prob-rule">
                <span>REGLAS DEL CÁLCULO</span>
                <b>⇒</b>
              </div>

              <div className="flc6-prob-theorem">
                <span>TEOREMA</span>
                <strong>0 ≤ P(E) ≤ 1</strong>
                <small>para todo evento E</small>
              </div>
            </div>

            <div className="flc1-definition">
              <span>LO IMPORTANTE DEL EJEMPLO</span>
              <p>
                La clase no pretende desarrollar aquí teoría de probabilidad.
                Usa el caso para mostrar la estructura: punto de partida, regla
                permitida y resultado derivado.
              </p>
            </div>
          </section>

          <section id="peano" className="flc1-section">
            <SectionTitle number="07" eyebrow="Exemplum II">
              Peano y la idea de formalizar la aritmética
            </SectionTitle>

            <div className="flc6-peano-intro">
              <span>SIGLO XIX · FUNDAMENTACIÓN</span>
              <strong>
                “Dame estos principios y te muestro que con ellos se deriva lo aritmético.”
              </strong>
            </div>

            <div className="flc6-peano-grid">
              {peanoAxioms.map(([n, title, text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="flc6-peano-purpose">
              <span>FUNCIÓN DOCENTE DEL EJEMPLO</span>
              <p>
                Lo cotidiano puede practicarse mucho antes de estar axiomatizado.
                Formalizar significa hacer explícito el trasfondo sistemático desde
                el que se derivan los resultados.
              </p>
            </div>
          </section>

          <section id="cambio" className="flc1-section">
            <SectionTitle number="08" eyebrow="Mutatio systematis">
              Cambiar axiomas o reglas significa cambiar de sistema
            </SectionTitle>

            <div className="flc6-change-tabs">
              {changeCases.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === changeId ? 'is-active' : ''}
                  onClick={() => setChangeId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc6-change-reader">
              <div>
                <span>PUNTO DE PARTIDA</span>
                <strong>{change.premise}</strong>
              </div>
              <b>→</b>
              <div>
                <span>CONSECUENCIA</span>
                <strong>{change.consequence}</strong>
              </div>
            </div>

            <div className="flc6-demand">
              <span>EXIGENCIA</span>
              <p>{change.demand}</p>
            </div>

            <div className="flc6-internal-truth">
              <article>
                <span>INTERNO AL SISTEMA</span>
                <strong>“dadas estas reglas y axiomas”</strong>
              </article>
              <div>≠</div>
              <article>
                <span>ONTOLÓGICO</span>
                <strong>“verdad necesaria del universo”</strong>
              </article>
            </div>
          </section>

          <section id="formal" className="flc1-section">
            <SectionTitle number="09" eyebrow="Exigentia formalis">
              Lo formal hace explícito lo que el lenguaje natural puede dejar implícito
            </SectionTitle>

            <div className="flc6-formal-tabs">
              {formalRequirements.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === formalId ? 'is-active' : ''}
                  onClick={() => setFormalId(item.id)}
                >
                  <span>{item.n}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc6-formal-reader">
              <div>
                <span>REQUISITO</span>
                <h3>{formal.question}</h3>
              </div>
              <p>{formal.note}</p>
            </div>

            <div className="flc6-natural-formal">
              <article>
                <span>LENGUAJE NATURAL</span>
                <strong>puede dejar reglas implícitas</strong>
                <p>La comprensión compartida rellena huecos.</p>
              </article>
              <div>→</div>
              <article className="is-formal">
                <span>LENGUAJE FORMAL</span>
                <strong>explicita símbolos y reglas</strong>
                <p>La corrección debe poder verificarse estructuralmente.</p>
              </article>
            </div>
          </section>

          <section id="logico" className="flc1-section">
            <SectionTitle number="10" eyebrow="Exigentia logica">
              Qué añade un sistema lógico al sistema formal
            </SectionTitle>

            <div className="flc6-logic-tabs">
              {logicRequirements.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={item.id === logicId ? 'is-active' : ''}
                  onClick={() => setLogicId(item.id)}
                >
                  <span>{item.mark}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <div className="flc6-logic-reader">
              <div>
                <span>{logic.mark}</span>
                <h3>{logic.title}</h3>
              </div>
              <p>{logic.explanation}</p>
            </div>

            <div className="flc6-topic-examples">
              <article>
                <span>ARRIBA / ABAJO</span>
                <strong>espacio</strong>
              </article>
              <article>
                <span>MÁS GRANDE / MENOR</span>
                <strong>magnitud</strong>
              </article>
              <article className="is-neutral">
                <span>SI P, ENTONCES Q</span>
                <strong>relación general</strong>
              </article>
            </div>

            <div className="flc6-symbols">
              <span>SÍMBOLOS INTERNOS</span>
              <strong>P · Q · →</strong>
              <p>
                Por sí mismos son marcas estructurales. El contenido aparece sólo
                cuando posteriormente se introduce una interpretación.
              </p>
            </div>
          </section>

          <section id="metalogica" className="flc1-section">
            <SectionTitle number="11" eyebrow="Agenda metalogica">
              Una vez construido el sistema, comienza otro tipo de pregunta
            </SectionTitle>

            <div className="flc6-meta-grid">
              {metaProperties.map(([title, question], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{question}</p>
                </article>
              ))}
            </div>

            <div className="flc6-meta-transition">
              <span>SISTEMA CONSTRUIDO</span>
              <b>↓</b>
              <strong>ESTUDIAR PROPIEDADES DEL SISTEMA</strong>
              <b>↓</b>
              <span>METALÓGICA</span>
            </div>

            <p className="flc6-meta-note">
              La sesión menciona además que otras propiedades, como efectividad
              o decidibilidad, quedan en el horizonte para clases posteriores;
              no se desarrollan todavía aquí.
            </p>
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="12" eyebrow="Ad usum futurum">
              Síntesis para estudiar y volver a enseñar esta sesión
            </SectionTitle>

            <div className="flc6-summary">
              <article>
                <span>IDEA 1</span>
                <h3>Un sistema es una arquitectura</h3>
                <p>
                  Axiomas, reglas y derivaciones cumplen funciones diferentes y
                  sólo juntos forman el mecanismo deductivo.
                </p>
              </article>

              <article>
                <span>IDEA 2</span>
                <h3>Axioma no significa siempre “verdad evidente”</h3>
                <p>
                  En sentido contemporáneo puede ser un postulado aceptado para
                  explorar las consecuencias de un sistema.
                </p>
              </article>

              <article>
                <span>IDEA 3</span>
                <h3>Formalidad exige explicitud</h3>
                <p>
                  Símbolos, gramática y reglas deben quedar especificados para
                  reconstruir las derivaciones sin apoyarse en obviedades tácitas.
                </p>
              </article>

              <article>
                <span>IDEA 4</span>
                <h3>Lo lógico añade neutralidad</h3>
                <p>
                  Un sistema lógico no sólo es formal: busca generalidad tópica y
                  opera internamente con símbolos no interpretados.
                </p>
              </article>
            </div>

            <div className="flc6-review">
              <span>PREGUNTAS PARA RECONSTRUIR LA SESIÓN</span>
              <ol>
                <li>¿Qué diferencia un sistema deductivo, uno formal y uno lógico?</li>
                <li>¿Cuáles son las tres piezas de un sistema axiomático-deductivo?</li>
                <li>¿Por qué un axioma no se demuestra dentro del propio sistema?</li>
                <li>¿Qué diferencia hay entre el sentido clásico y contemporáneo de axioma?</li>
                <li>¿Por qué las reglas del sistema deben ser deductivas?</li>
                <li>¿Qué significa la aridad de una regla?</li>
                <li>¿Cómo usa la sesión los axiomas de probabilidad como ejemplo estructural?</li>
                <li>¿Qué pretende mostrar el ejemplo de los axiomas de Peano?</li>
                <li>¿Por qué cambiar axiomas o reglas equivale a cambiar de sistema?</li>
                <li>¿Qué añade un lenguaje formal a un sistema deductivo?</li>
                <li>¿Qué añaden neutralidad tópica y símbolos no interpretados?</li>
                <li>¿Qué preguntas abre la transición hacia la metalógica?</li>
              </ol>
            </div>

            <div className="flc1-source-note">
              <strong>Continuidad</strong>
              <p>
                La clase deja preparada la siguiente etapa: estudiar propiedades
                metalógicas como consistencia, completitud, rigor e independencia.
                No se fija aquí una tarea concreta con fecha.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 06 · 11 febrero 2026</span>
      </footer>
    </main>
  )
}
