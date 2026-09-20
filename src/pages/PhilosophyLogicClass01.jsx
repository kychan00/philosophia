import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import LogicFigureNote from '../components/LogicFigureNote'
import './PhilosophyLogicClass01.css'

const sections = [
  ['00', 'umbral', 'Filosofía de la lógica'],
  ['01', 'curso', 'Arquitectura del curso'],
  ['02', 'demarcacion', 'Problema de demarcación'],
  ['03', 'validez', 'Validez y necesidad'],
  ['04', 'historia', 'De Aristóteles a Frege'],
  ['05', 'formalizacion', 'Dos niveles de formalización'],
  ['06', 'verdad', 'El problema de la verdad'],
  ['07', 'argumentacion', 'Formalidad y argumentación'],
  ['08', 'cierre', 'Cierre y lectura'],
]

const units = [
  {
    id: 'sistemas',
    numeral: 'I',
    title: 'Sistemas',
    subtitle: 'deductivos · formales · lógicos',
    question: '¿Qué convierte a un sistema formal en un sistema propiamente lógico?',
    copy:
      'La primera unidad parte de distinguir sistema deductivo, sistema formal y sistema lógico. La sesión sugiere una relación por capas, pero deja abierto el criterio específico de lo lógico.',
  },
  {
    id: 'validez',
    numeral: 'II',
    title: 'Validez',
    subtitle: 'reglas · necesidad',
    question: '¿Qué significa que algo se siga necesariamente de otra cosa?',
    copy:
      'La validez deja de tratarse sólo como procedimiento técnico. La pregunta es si seguir reglas agota su significado o si hay algo más que explica por qué esas reglas valen.',
  },
  {
    id: 'verdad',
    numeral: 'III',
    title: 'Verdad',
    subtitle: 'portadores · teorías',
    question: '¿Cómo puede haber verdad lógica?',
    copy:
      'La sesión anuncia portadores de verdad y distintas teorías de la verdad, incluida una teoría semántica asociada a Tarski. El problema apenas se abre aquí.',
  },
  {
    id: 'otras',
    numeral: 'IV',
    title: 'Otras lógicas',
    subtitle: 'pluralidad · no clásicas',
    question: '¿Hay una sola lógica correcta o puede haber varias?',
    copy:
      'Se anuncia el estudio filosófico de lógicas no clásicas: intuicionistas, polivalentes, modales, epistémicas y otras, sin reducir la unidad a ejercicios técnicos.',
  },
]

const problems = [
  {
    id: 'demarcacion',
    mark: '⊢',
    title: 'Demarcación',
    question: '¿Qué cuenta como lógica?',
    thesis:
      'Ser formal no basta automáticamente para ser lógico.',
    body:
      'La clase usa la aritmética para abrir el problema: puede describirse como un sistema formal y, sin embargo, en el hilo de la sesión no se la toma por eso como sistema lógico. La pregunta queda pendiente: ¿qué criterio adicional delimita lo lógico?',
    tags: ['sistema deductivo', 'sistema formal', 'sistema lógico'],
  },
  {
    id: 'reglas',
    mark: '⇒',
    title: 'Validez',
    question: '¿Seguir reglas agota la validez?',
    thesis:
      'La regla permite probar, pero la filosofía pregunta por qué esa regla vale.',
    body:
      'Tablas de verdad, reducción al absurdo y demostración directa son métodos conocidos. La sesión desplaza la atención hacia el fundamento: ¿un argumento es válido sólo porque respeta reglas o hay algo más de fondo?',
    tags: ['demostración', 'reglas', 'fundamento'],
  },
  {
    id: 'necesidad',
    mark: '□',
    title: 'Necesidad',
    question: '¿La necesidad la produce el sistema o la descubre?',
    thesis:
      'La sesión presenta dos orientaciones generales y no decide todavía entre ellas.',
    body:
      'Una postura hace depender la necesidad de reglas, axiomas y estructura formal. La otra la remite a algo independiente del sistema: el mundo, la estructura del ser o conceptos independientes. La comparación es con inventar o descubrir las matemáticas.',
    tags: ['sistema', 'realidad', 'descubrimiento'],
  },
  {
    id: 'verdad',
    mark: 'T',
    title: 'Verdad lógica',
    question: '¿Qué corresponde con qué?',
    thesis:
      'La verdad lógica se vuelve problemática si se piensa la verdad sólo como correspondencia con algo externo.',
    body:
      'La sesión formula el problema sin resolverlo: si dentro del sistema lógico no hay un exterior en el sentido habitual, ¿cómo debe entenderse la verdad? Esto prepara las teorías de la verdad y los portadores de verdad.',
    tags: ['verdad', 'correspondencia', 'portadores'],
  },
  {
    id: 'pluralidad',
    mark: '∀?',
    title: 'Pluralidad',
    question: '¿Existe una lógica correcta?',
    thesis:
      'La aparición de múltiples lógicas convierte la singularidad de “la lógica” en un problema.',
    body:
      'El recorrido histórico mínimo desemboca en la pluralidad de sistemas y en la pregunta de si debe existir una única lógica correcta o si pueden coexistir varias lógicas legítimas.',
    tags: ['clásica', 'no clásicas', 'criterio'],
  },
]

const goToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

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

export default function PhilosophyLogicClass01() {
  const [unitId, setUnitId] = useState('sistemas')
  const [problemId, setProblemId] = useState('demarcacion')

  const activeUnit = useMemo(
    () => units.find((unit) => unit.id === unitId) || units[0],
    [unitId],
  )

  const activeProblem = useMemo(
    () => problems.find((problem) => problem.id === problemId) || problems[0],
    [problemId],
  )

  return (
    <main className="flc1-page">
      <div className="flc1-noise" aria-hidden="true" />

      <nav className="flc1-topbar">
        <Link to="/semestre/4/filosofia-de-la-logica">← Filosofía de la Lógica</Link>
        <Link to="/" className="flc1-brand">PHILOSOPHIA · ΛΟΓΟΣ</Link>
        <span>19 · I · 2026</span>
      </nav>

      <header className="flc1-hero">
        <div className="flc1-hero-symbols" aria-hidden="true">
          <span>⊢</span><span>¬</span><span>∀</span><span>□</span><span>↔</span>
        </div>

        <div className="flc1-hero-copy">
          <p className="flc1-kicker">Lógica III · Sesión 01</p>
          <h1>
            Introducción,
            <em>demarcación y verdad lógica</em>
          </h1>
          <p className="flc1-lead">
            La primera sesión desplaza la mirada desde hacer ejercicios de lógica
            hacia los problemas filosóficos que aparecen cuando preguntamos qué
            es la lógica, qué hace válida una consecuencia, de dónde proviene la
            necesidad y qué puede significar verdad dentro de un sistema lógico.
          </p>
        </div>

        <aside className="flc1-hero-question">
          <span>PREGUNTA QUE ABRE EL CURSO</span>
          <strong>
            ¿Qué hace que una lógica sea lógica, y qué hace verdaderas o
            necesarias sus consecuencias?
          </strong>
          <small>La sesión abre el problema; no lo resuelve todavía.</small>
        </aside>
      </header>

      <div className="flc1-shell">
        <aside className="flc1-index">
          <p>INDEX · SESIÓN I</p>
          {sections.map(([number, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{number}</span>
              {label}
            </button>
          ))}
        </aside>

        <article className="flc1-content">
          <section id="umbral" className="flc1-section">
            <SectionTitle number="00" eyebrow="Distinción inicial">
              Hacer lógica no es lo mismo que hacer filosofía de la lógica
            </SectionTitle>

            <div className="flc1-fork">
              <article>
                <span className="flc1-fork-mark">⊢</span>
                <p>HACER LÓGICA</p>
                <h3>Operar dentro del sistema</h3>
                <ul>
                  <li>reglas y pruebas</li>
                  <li>formalización</li>
                  <li>validez de argumentos</li>
                  <li>métodos de demostración</li>
                </ul>
              </article>

              <div className="flc1-fork-axis">
                <span>≠</span>
                <small>cambio de nivel</small>
              </div>

              <article className="is-philosophy">
                <span className="flc1-fork-mark">?</span>
                <p>FILOSOFÍA DE LA LÓGICA</p>
                <h3>Preguntar por el sistema</h3>
                <ul>
                  <li>¿qué es validez?</li>
                  <li>¿qué es necesidad?</li>
                  <li>¿qué es verdad lógica?</li>
                  <li>¿qué cuenta como lógica?</li>
                </ul>
              </article>
            </div>
            <LogicFigureNote
              noteId="c01-fork"
              what="Contrapone dos niveles de trabajo: operar dentro de un cálculo y convertir ese mismo cálculo en objeto de reflexión filosófica."
              how="Lea de izquierda a derecha. El lado ⊢ reúne prácticas internas como probar o formalizar; el lado ? reúne preguntas sobre validez, necesidad, verdad lógica y demarcación. El signo ≠ marca un cambio de nivel, no una oposición entre actividades incompatibles."
              why="Está al inicio porque la materia no pretende ser simplemente otra clase de ejercicios lógicos. La sesión necesita fijar desde el comienzo que ahora se preguntará por los supuestos y conceptos que hacen posible la práctica lógica."
              takeaway="Hacer lógica y hacer filosofía de la lógica se relacionan, pero no responden la misma pregunta: una usa el sistema y la otra pregunta qué es y por qué funciona."
            />

            <div className="flc1-definition">
              <span>GIRO METODOLÓGICO DE LA SESIÓN</span>
              <p>
                Filosofía de X no consiste simplemente en hacer X. El curso no
                se plantea como una tercera ronda de ejercicios: toma la práctica
                lógica como punto de partida para examinar sus problemas de fondo.
              </p>
            </div>
          </section>

          <section id="curso" className="flc1-section">
            <SectionTitle number="01" eyebrow="Tabula cursus">
              Las cuatro regiones que organizarán el semestre
            </SectionTitle>

            <div className="flc1-units">
              {units.map((unit) => (
                <button
                  key={unit.id}
                  type="button"
                  className={unit.id === unitId ? 'is-active' : ''}
                  onClick={() => setUnitId(unit.id)}
                >
                  <span>{unit.numeral}</span>
                  <strong>{unit.title}</strong>
                  <small>{unit.subtitle}</small>
                </button>
              ))}
            </div>

            <div className="flc1-unit-reader">
              <div>
                <span>UNIDAD {activeUnit.numeral}</span>
                <h3>{activeUnit.question}</h3>
              </div>
              <p>{activeUnit.copy}</p>
            </div>

            <div className="flc1-course-meta">
              <article>
                <span>EVALUACIÓN</span>
                <strong>2 exámenes · 60%</strong>
                <p>30% cada uno.</p>
              </article>
              <article>
                <span>TRABAJO FINAL</span>
                <strong>Entrega con el examen final</strong>
                <p>Se devuelve calificado en la última sesión.</p>
              </article>
              <article>
                <span>PARTICIPACIÓN / ASISTENCIA</span>
                <strong>10 puntos</strong>
                <p>A discreción del profesor, según lo indicado en esta sesión.</p>
              </article>
              <article>
                <span>MATERIALES</span>
                <strong>Classroom</strong>
                <p>Avisos, lecturas y materiales del curso.</p>
              </article>
            </div>
          </section>

          <section id="demarcacion" className="flc1-section">
            <SectionTitle number="02" eyebrow="Problema liminar">
              ¿Qué cuenta como lógica?
            </SectionTitle>

            <div className="flc1-layers">
              <article>
                <span>01</span>
                <strong>Sistema deductivo</strong>
              </article>
              <b>↓</b>
              <article>
                <span>02</span>
                <strong>Sistema formal</strong>
              </article>
              <b>↓</b>
              <article className="is-question">
                <span>03</span>
                <strong>Sistema lógico</strong>
                <small>¿qué exige además?</small>
              </article>
            </div>
            <LogicFigureNote
              noteId="c01-layers"
              what="Ordena tres niveles que la sesión empieza a distinguir: sistema deductivo, sistema formal y sistema lógico."
              how="La flecha vertical indica acumulación de exigencias. Ser lógico presupone haber llegado antes a un sistema con derivación y formalización; la pregunta abierta es qué requisito adicional permite llamar “lógico” al tercer nivel."
              why="El cuadro prepara el problema de demarcación. Evita identificar automáticamente “formal” con “lógico” y deja espacio para investigar qué caracteriza propiamente a la lógica."
              takeaway="La palabra “lógico” no se obtiene sólo porque haya símbolos o reglas: hace falta justificar qué diferencia a un sistema lógico de otros sistemas formales."
            />

            <div className="flc1-demarcation-lab">
              <div>
                <span className="flc1-lab-label">CASO QUE ABRE EL PROBLEMA</span>
                <strong>ARITMÉTICA</strong>
              </div>
              <div className="flc1-lab-checks">
                <span>formal <b>✓</b></span>
                <span>lógica <b>?</b></span>
              </div>
              <p>
                La sesión usa este contraste para impedir una identificación
                automática entre formalidad y lógica. El criterio de demarcación
                queda deliberadamente abierto.
              </p>
            </div>
            <LogicFigureNote
              noteId="c01-demarcation"
              what="Usa la aritmética como caso de prueba para separar formalidad de logicidad."
              how="El ✓ junto a “formal” indica algo que la sesión concede para el ejemplo. El ? junto a “lógica” muestra precisamente lo que todavía no se ha decidido: si formalizar números basta para convertir la aritmética en lógica."
              why="Está aquí para volver concreto un problema que de otro modo sería puramente verbal. Si encontramos un sistema formal que intuitivamente no queremos identificar sin más con la lógica, necesitamos un criterio de demarcación adicional."
              takeaway="El caso de la aritmética funciona como contraejemplo a la equivalencia simple “formal = lógico”."
            />
          </section>

          <section id="validez" className="flc1-section">
            <SectionTitle number="03" eyebrow="Nodus centralis">
              Validez, reglas y necesidad
            </SectionTitle>

            <div className="flc1-problem-nav">
              {problems.map((problem) => (
                <button
                  key={problem.id}
                  type="button"
                  className={problem.id === problemId ? 'is-active' : ''}
                  onClick={() => setProblemId(problem.id)}
                >
                  <span>{problem.mark}</span>
                  <small>{problem.title}</small>
                </button>
              ))}
            </div>

            <div className="flc1-problem-reader">
              <div className="flc1-problem-mark">{activeProblem.mark}</div>
              <div>
                <p>{activeProblem.title}</p>
                <h3>{activeProblem.question}</h3>
                <strong>{activeProblem.thesis}</strong>
                <p className="flc1-problem-body">{activeProblem.body}</p>
                <div className="flc1-tags">
                  {activeProblem.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>

            <div className="flc1-necessity">
              <div className="flc1-necessity-head">
                <span>2 + 2 = 4</span>
                <strong>¿por qué tiene que ser así?</strong>
              </div>
              <div className="flc1-necessity-grid">
                <article>
                  <span>A</span>
                  <h3>La necesidad depende del sistema</h3>
                  <p>
                    Reglas, axiomas y estructura formal producen la necesidad.
                    Fuera del sistema no habría un “más allá” que la explique.
                  </p>
                </article>
                <div className="flc1-versus">VS</div>
                <article>
                  <span>B</span>
                  <h3>La necesidad depende de algo más</h3>
                  <p>
                    Puede remitirse al mundo, a la estructura del ser o a
                    conceptos independientes del sistema. Aquí aparece la
                    analogía entre inventar y descubrir.
                  </p>
                </article>
              </div>
              <p className="flc1-open-note">
                La sesión presenta la tensión. No decide todavía entre ambas posiciones.
              </p>
            </div>
            <LogicFigureNote
              noteId="c01-necessity"
              what="Presenta dos direcciones filosóficas para explicar por qué una verdad como 2 + 2 = 4 parece necesaria."
              how="El lado A localiza la necesidad en las reglas, axiomas y estructura del sistema. El lado B pregunta si la necesidad remite además a algo independiente del sistema: mundo, ser o conceptos. El “VS” sólo organiza la tensión; la clase no la resuelve aquí."
              why="La figura aparece porque la validez lógica parece involucrar necesidad. Antes de usar “necesario” como una palabra transparente, la filosofía de la lógica pregunta de dónde proviene esa necesidad."
              takeaway="La sesión abre un problema, no dicta una solución: necesidad como producto del sistema y necesidad como algo descubierto son alternativas filosóficas a examinar."
            />
          </section>

          <section id="historia" className="flc1-section">
            <SectionTitle number="04" eyebrow="Linea minima">
              De reglas silogísticas a la pluralidad de lógicas
            </SectionTitle>

            <div className="flc1-history">
              <article>
                <span>ARISTÓTELES</span>
                <strong>silogística · reglas</strong>
                <small>discriminar argumentos</small>
              </article>
              <i>→</i>
              <article>
                <span>FREGE · 1879</span>
                <strong>Conceptografía</strong>
                <small>sistema lógico formal axiomático</small>
              </article>
              <i>→</i>
              <article>
                <span>WHITEHEAD / RUSSELL</span>
                <strong>Principia Mathematica</strong>
                <small>proyecto logicista mencionado en clase</small>
              </article>
              <i>→</i>
              <article className="is-open">
                <span>PLURALIDAD</span>
                <strong>¿una lógica?</strong>
                <small>¿o varias lógicas legítimas?</small>
              </article>
            </div>
            <LogicFigureNote
              noteId="c01-history"
              what="Sitúa algunos hitos históricos para mostrar que la lógica que hoy parece estándar es el resultado de transformaciones sucesivas."
              how="No lea la línea como una lista exhaustiva de toda la historia de la lógica. Úsela como orientación: diferentes etapas modifican qué se formaliza, con qué herramientas y qué preguntas filosóficas se vuelven centrales."
              why="Está aquí porque el curso necesita desnaturalizar la lógica contemporánea. Ver su desarrollo histórico ayuda a comprender que “la lógica” no siempre ha tenido la misma forma ni las mismas fronteras."
              takeaway="La historia funciona como argumento pedagógico contra tomar el cálculo actual como única forma imaginable de lógica."
            />
          </section>

          <section id="formalizacion" className="flc1-section">
            <SectionTitle number="05" eyebrow="Duplex analysis">
              Formalizar no significa únicamente probar validez
            </SectionTitle>

            <div className="flc1-formal-grid">
              <article>
                <div className="flc1-formal-icon">P → Q</div>
                <p>LÓGICA PROPOSICIONAL</p>
                <h3>Estructura argumentativa</h3>
                <ul>
                  <li>premisas</li>
                  <li>conclusión</li>
                  <li>relación de consecuencia</li>
                  <li>evaluación de validez</li>
                </ul>
              </article>
              <article>
                <div className="flc1-formal-icon">∀x Fx</div>
                <p>LÓGICA DE PREDICADOS</p>
                <h3>Estructura interna</h3>
                <ul>
                  <li>predicados</li>
                  <li>cuantificadores</li>
                  <li>relaciones</li>
                  <li>condiciones de verdad</li>
                </ul>
              </article>
            </div>

            <div className="flc1-bridge">
              <span>FORMALIZAR</span>
              <b>≠</b>
              <span>SÓLO PROBAR VALIDEZ</span>
              <p>
                También puede desmenuzar componentes del lenguaje y del pensamiento,
                incluso cuando no hay un argumento completo que evaluar.
              </p>
            </div>
          </section>

          <section id="verdad" className="flc1-section flc1-truth-section">
            <SectionTitle number="06" eyebrow="Quaestio aperta">
              El problema de la verdad lógica
            </SectionTitle>

            <div className="flc1-truth-stage">
              <div className="flc1-truth-inside">
                <span>SISTEMA LÓGICO</span>
                <div>p</div>
                <div>¬p</div>
                <div>p → q</div>
                <small>reglas · fórmulas · relaciones</small>
              </div>
              <div className="flc1-truth-outside">
                <span>“EXTERIOR”</span>
                <b>?</b>
              </div>
            </div>
            <LogicFigureNote
              noteId="c01-truth"
              what="Separa el funcionamiento interno de un sistema formal de la pregunta externa por verdad, significado o interpretación."
              how="La zona interior representa reglas y transformaciones que pueden estudiarse por su estructura. La zona exterior representa la cuestión de cómo esas fórmulas llegan a hablar de algo y bajo qué condiciones reciben valores de verdad."
              why="El gráfico está ahí porque “verdad lógica” puede confundirse con verdad empírica o con simple corrección sintáctica. La sesión quiere mostrar que son planos relacionados pero distintos."
              takeaway="Una expresión puede estar correctamente formada y operar dentro del cálculo antes de que hayamos aclarado qué significa o qué la hace verdadera."
            />

            <div className="flc1-truth-question">
              <span>PROBLEMA ABIERTO</span>
              <strong>
                Si la verdad suele pensarse como correspondencia entre algo
                interno y algo externo, ¿cómo debe entenderse la verdad lógica?
              </strong>
              <p>
                La sesión no ofrece todavía una teoría. Este problema conduce
                posteriormente a los portadores de verdad y a las teorías de la verdad.
              </p>
            </div>
          </section>

          <section id="argumentacion" className="flc1-section">
            <SectionTitle number="07" eyebrow="Confinium">
              Lógica formal y argumentación humana
            </SectionTitle>

            <div className="flc1-argument">
              <article>
                <span>FORMA</span>
                <h3>Lógica formal</h3>
                <p>Validez, estructura y relaciones formales.</p>
              </article>

              <div className="flc1-argument-middle">
                <span>?</span>
                <small>¿cómo se conectan?</small>
              </div>

              <article>
                <span>PRÁCTICA</span>
                <h3>Argumentación</h3>
                <p>Puede valorar también persuasión y fuerza retórica.</p>
              </article>
            </div>
            <LogicFigureNote
              noteId="c01-argument"
              what="Contrasta el análisis formal de argumentos con el estudio más amplio de la argumentación en lenguaje natural."
              how="Observe qué rasgos conserva cada lado. La lógica formal abstrae estructura y validez; la argumentación cotidiana introduce contexto, intención, audiencia y otros factores que no siempre caben en el cálculo."
              why="Está al final porque muestra un límite de alcance: que la lógica sea útil para estudiar argumentos no significa que agote todo lo que ocurre cuando seres humanos argumentan."
              takeaway="Formalizar es seleccionar una dimensión del argumento, no reemplazar el fenómeno completo de argumentar."
            />

            <div className="flc1-question-grid">
              <p>¿Para qué sirve la formalidad lógica si mucha filosofía argumenta informalmente?</p>
              <p>¿Cómo ayuda la lógica formal a la argumentación humana?</p>
              <p>¿Hay una lógica “correcta” o varias? ¿Qué significa “correcta”?</p>
            </div>
          </section>

          <section id="cierre" className="flc1-section">
            <SectionTitle number="08" eyebrow="Ad proximam sessionem">
              Lo que queda abierto y lo que sigue
            </SectionTitle>

            <div className="flc1-open-map">
              <span>DEMARCACIÓN</span>
              <span>VALIDEZ</span>
              <span>NECESIDAD</span>
              <span>VERDAD</span>
              <span>PLURALIDAD</span>
            </div>

            <div className="flc1-reading">
              <div>
                <span>LECTURA PARA LA SIGUIENTE SESIÓN</span>
                <h3>Preparar el primer capítulo del texto indicado en Classroom</h3>
              </div>
              <p>
                El apunte no conserva con seguridad el nombre del autor ni el
                título exacto. Por eso esta página no los completa ni los corrige
                por inferencia.
              </p>
            </div>

            <div className="flc1-source-note">
              <strong>Nota de fidelidad</strong>
              <p>
                Esta página organiza únicamente lo trabajado en la primera sesión.
                Las preguntas que el profesor dejó abiertas permanecen abiertas:
                el mapa no adelanta respuestas de clases posteriores.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="flc1-footer">
        <Link to="/semestre/4/filosofia-de-la-logica">← Volver a Filosofía de la Lógica</Link>
        <span>Sesión 01 · 19 enero 2026</span>
      </footer>
    </main>
  )
}
