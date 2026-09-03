import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'fromm', 'Fromm dentro y fuera de Frankfurt'],
  ['02', 'tener', 'Tener, ser y alienación'],
  ['03', 'desobediencia', 'Desobediencia y negatividad'],
  ['04', 'metodo', 'Popper, Adorno y ciencias sociales'],
  ['05', 'hegel', 'Entrada a Hegel'],
  ['06', 'idealismo', 'Kant ↔ Hegel'],
  ['07', 'verdad', 'Verdad como proceso'],
  ['08', 'espiritu', 'Espíritu, totalidad y escisión'],
  ['09', 'dialectica', 'Dialéctica: racionalidad del movimiento'],
  ['10', 'tarea', 'Relectura del prólogo'],
]

const frommWorks = [
  {
    id: 'amar',
    title: 'El arte de amar',
    label: 'popularización',
    text:
      'Ejemplo de la recepción amplia de Fromm en Estados Unidos. Su pensamiento alcanza públicos que no pertenecen necesariamente al ámbito académico.',
  },
  {
    id: 'tener',
    title: 'Tener o ser',
    label: 'consumo',
    text:
      'La sociedad de consumo puede invertir la relación entre bienestar y posesión: el tener termina funcionando como medida del ser.',
  },
  {
    id: 'marx',
    title: 'Marx y el concepto de hombre',
    label: 'alienación',
    text:
      'Puerta de entrada a trabajo enajenado, alienación y concepción marxiana del ser humano.',
  },
  {
    id: 'obediencia',
    title: 'Sobre la desobediencia',
    label: 'negatividad',
    text:
      'La oposición a una norma, autoridad o dogma puede convertirse en condición histórica de transformación.',
  },
]

const dialecticSteps = [
  ['01', 'Configuración', 'algo aparece de determinada manera'],
  ['02', 'Contradicción', 'la forma revela límites y tensiones'],
  ['03', 'Negatividad', 'aparece aquello que no coincide'],
  ['04', 'Transformación', 'la configuración ya no puede permanecer idéntica'],
  ['05', 'Integración', 'lo anterior no se elimina sin resto'],
  ['06', 'Nueva forma', 'surge una configuración más compleja'],
  ['07', 'Nueva contradicción', 'el movimiento vuelve a comenzar'],
]

const hegelPerspectives = [
  ['Fenomenología', 'conciencia', 'experiencia de la conciencia'],
  ['Lógica', 'concepto', 'desarrollo interno de las determinaciones'],
  ['Historia', 'sociedades', 'movimiento histórico de la humanidad'],
  ['Historia de la filosofía', 'sistemas', 'desarrollo de formas de pensamiento'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ctsep1-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function CriticalTheoryClass01Sep() {
  const [frommId, setFrommId] = useState('tener')
  const [socialView, setSocialView] = useState('prejudice')
  const [obedienceView, setObedienceView] = useState('negative')
  const [methodView, setMethodView] = useState('dialectic')
  const [idealismView, setIdealismView] = useState('kant')
  const [truthStep, setTruthStep] = useState(0)
  const [spiritView, setSpiritView] = useState('absolute')
  const [dialecticIndex, setDialecticIndex] = useState(0)

  const fromm = useMemo(
    () => frommWorks.find((item) => item.id === frommId) || frommWorks[0],
    [frommId],
  )

  const truthStages = [
    ['Inicio', 'La comprensión comienza con una figura todavía incompleta.'],
    ['Desarrollo', 'La figura despliega sus determinaciones.'],
    ['Contradicción', 'Sus propios límites se vuelven visibles.'],
    ['Transformación', 'La figura deja de poder conservarse idéntica.'],
    ['Resultado', 'El resultado sólo es verdadero junto con el recorrido que lo produjo.'],
  ]

  return (
    <main className="ctsep1-page">
      <nav className="ctsep1-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ctsep1-brand">Φ · Philosophia</Link>
        <span>I · IX · MMXXVI</span>
      </nav>

      <header className="ctsep1-hero">
        <div className="ctsep1-ghost" aria-hidden="true">WERDEN</div>
        <div className="ctsep1-hero-inner">
          <div>
            <p className="ctsep1-kicker">FI265 · Quinta clase · 1 de septiembre</p>
            <h1>
              Negatividad,
              <em>devenir y dialéctica</em>
            </h1>
            <p className="ctsep1-lead">
              La sesión cierra la introducción a Frankfurt mediante Fromm y abre
              el fundamento hegeliano de la Teoría Crítica: idealismo absoluto,
              verdad como proceso, espíritu, contradicción y dialéctica como
              racionalidad del movimiento.
            </p>

            <div className="ctsep1-question">
              <span>PREGUNTA CENTRAL</span>
              <strong>
                ¿Cómo puede una contradicción dejar de ser un simple error y
                convertirse en el motor racional de una transformación?
              </strong>
            </div>
          </div>

          <aside className="ctsep1-axis">
            <span>DOBLE MOVIMIENTO</span>
            <div><b>FROMM</b><small>desobediencia · negatividad</small></div>
            <i>↓</i>
            <div><b>HEGEL</b><small>contradicción · devenir</small></div>
            <i>↓</i>
            <div className="active"><b>TEORÍA CRÍTICA</b><small>negación · crítica · transformación</small></div>
          </aside>
        </div>
      </header>

      <div className="ctsep1-layout">
        <aside className="ctsep1-index">
          <p>Index criticus</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ctsep1-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Argumentum">
              La clase une una negatividad política con una negatividad filosófica
            </Heading>

            <div className="ctsep1-master">
              <span>autoritarismo</span><b>→</b>
              <span>conformismo</span><b>→</b>
              <span>desobediencia</span><b>→</b>
              <span>negatividad</span><b>→</b>
              <span>contradicción</span><b>→</b>
              <span>devenir</span><b>→</b>
              <strong>dialéctica</strong>
            </div>

            <div className="ctsep1-thesis">
              <span>TESIS DE LA SESIÓN</span>
              <strong>
                Hegel permite comprender filosóficamente aquello que la Teoría
                Crítica convertirá en herramienta de diagnóstico: las formas
                sociales no son estáticas; contienen contradicciones y pueden
                ser negadas, criticadas y transformadas.
              </strong>
            </div>
          </section>

          <section id="fromm">
            <Heading n="01" eyebrow="Fromm et institutum">
              Fromm se separa del Instituto sin abandonar toda preocupación crítica
            </Heading>
            <p>
              La ruptura gira, entre otros puntos, alrededor del psicoanálisis.
              Adorno, Horkheimer y Marcuse consideran que ciertas reinterpretaciones
              de Freud reducen el papel de las pulsiones, la sexualidad y el
              conflicto psíquico. Marcuse discutirá este revisionismo en
              <em> Eros y civilización</em>.
            </p>

            <div className="ctsep1-fromm-tabs">
              {frommWorks.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={fromm.id === item.id ? 'active' : ''}
                  onClick={() => setFrommId(item.id)}
                >
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <article className="ctsep1-focus">
              <span>{fromm.label}</span>
              <h3>{fromm.title}</h3>
              <p>{fromm.text}</p>
            </article>

            <div className="ctsep1-toggle">
              <button
                type="button"
                className={socialView === 'prejudice' ? 'active' : ''}
                onClick={() => setSocialView('prejudice')}
              >
                Estudios sobre prejuicio
              </button>
              <button
                type="button"
                className={socialView === 'authoritarian' ? 'active' : ''}
                onClick={() => setSocialView('authoritarian')}
              >
                Personalidad autoritaria
              </button>
            </div>

            <div className="ctsep1-social">
              {socialView === 'prejudice' ? (
                <>
                  <span>DINÁMICA SOCIAL</span>
                  <div className="ctsep1-master">
                    <span>prejuicio</span><b>→</b><span>discriminación</span><b>→</b>
                    <span>hostilidad</span><b>→</b><strong>violencia</strong>
                  </div>
                </>
              ) : (
                <>
                  <span>RASGOS PROBLEMÁTICOS</span>
                  <div className="ctsep1-chips">
                    {['intolerancia a la diferencia','misoginia','racismo','homofobia','hostilidad','autoritarismo'].map((item) => (
                      <strong key={item}>{item}</strong>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>

          <section id="tener">
            <Heading n="02" eyebrow="Habere vel esse">
              Cuando el tener empieza a definir el ser
            </Heading>
            <p>
              Fromm retoma una crítica con antecedentes marxianos: en una sociedad
              de consumo, dinero, propiedades, automóviles, ropa o estatus pueden
              convertirse en medidas del valor personal y desplazar necesidades
              humanas reales.
            </p>

            <div className="ctsep1-inversion">
              <article>
                <span>ORDEN HUMANO</span>
                <strong>tener al servicio del bienestar</strong>
              </article>
              <b>↯</b>
              <article className="danger">
                <span>INVERSIÓN</span>
                <strong>ser definido por lo que se tiene</strong>
              </article>
            </div>

            <div className="ctsep1-money">
              <span>DINERO / POSESIÓN</span><b>→</b>
              <span>PERCEPCIÓN SOCIAL</span><b>→</b>
              <strong>“SOY LO QUE TENGO”</strong>
            </div>

            <div className="ctsep1-note">
              <strong>Marx como antecedente</strong>
              <p>
                La crítica a la inversión entre cualidades humanas y posesiones
                conecta con los <em>Manuscritos económico-filosóficos</em> y con
                el problema de la alienación.
              </p>
            </div>
          </section>

          <section id="desobediencia">
            <Heading n="03" eyebrow="Negatio · inoboedientia">
              La historia cambia cuando alguien puede decir “no”
            </Heading>
            <p>
              La desobediencia traduce políticamente un motivo dialéctico:
              negatividad significa oposición, crítica y ruptura con aquello que
              pretende coincidir completamente consigo mismo.
            </p>

            <div className="ctsep1-toggle">
              <button
                type="button"
                className={obedienceView === 'negative' ? 'active' : ''}
                onClick={() => setObedienceView('negative')}
              >
                Negatividad
              </button>
              <button
                type="button"
                className={obedienceView === 'obedience' ? 'active' : ''}
                onClick={() => setObedienceView('obedience')}
              >
                Desobediencia
              </button>
            </div>

            <div className="ctsep1-obedience">
              {obedienceView === 'negative' ? (
                <>
                  <span>FORMA FILOSÓFICA</span>
                  <h3>Lo establecido no agota lo posible.</h3>
                  <p>La no-identidad introduce aquello que el orden no logra absorber.</p>
                </>
              ) : (
                <>
                  <span>FORMA POLÍTICA</span>
                  <h3>Una norma puede ser negada.</h3>
                  <p>Rechazar autoridad, institución, dogma u orden abre una posibilidad de transformación.</p>
                </>
              )}
            </div>

            <div className="ctsep1-master centered">
              <span>orden establecido</span><b>→</b>
              <span>negatividad</span><b>→</b>
              <span>desobediencia</span><b>→</b>
              <strong>transformación</strong>
            </div>

            <div className="ctsep1-warning">
              <span>SOCIEDAD TOTALIZADA</span>
              <strong>
                El problema crítico aparece cuando una sociedad reduce o elimina
                el espacio para la disidencia y controla la negatividad.
              </strong>
            </div>
          </section>

          <section id="metodo">
            <Heading n="04" eyebrow="Methodus socialis">
              Popper y Adorno discuten cómo estudiar científicamente la sociedad
            </Heading>

            <div className="ctsep1-toggle">
              <button
                type="button"
                className={methodView === 'critical' ? 'active' : ''}
                onClick={() => setMethodView('critical')}
              >
                Racionalismo crítico
              </button>
              <button
                type="button"
                className={methodView === 'dialectic' ? 'active' : ''}
                onClick={() => setMethodView('dialectic')}
              >
                Dialéctica
              </button>
            </div>

            <div className="ctsep1-method">
              {methodView === 'critical' ? (
                <>
                  <span>POPPER → HANS ALBERT</span>
                  <h3>Perspectiva analítico-crítica de la investigación social</h3>
                  <p>El debate pregunta por verdad, método, contrastación y lógica de las ciencias sociales.</p>
                </>
              ) : (
                <>
                  <span>ADORNO → HABERMAS</span>
                  <h3>La sociedad exige pensar totalidad y contradicción</h3>
                  <p>El método no puede aislar hechos sociales de las relaciones históricas y estructurales que los producen.</p>
                </>
              )}
            </div>

            <div className="ctsep1-method-line">
              <span>ADORNO</span><b>↔</b><span>POPPER</span>
              <i>continúa como</i>
              <span>HABERMAS</span><b>↔</b><span>HANS ALBERT</span>
            </div>
          </section>

          <section id="hegel">
            <Heading n="05" eyebrow="Ingressus ad Hegel">
              Para entender la crítica hay que aprender a pensar procesos
            </Heading>
            <p>
              Hegel no ofrece un manual separado de dialéctica. La dialéctica
              funciona dentro de la <em>Fenomenología</em>, la <em>Lógica</em>,
              la filosofía de la historia y el resto del sistema.
            </p>

            <div className="ctsep1-hegel-grid">
              <article><span>ESTÁTICO</span><strong>“esto es así”</strong><p>congela el resultado</p></article>
              <b>→</b>
              <article className="core"><span>DIALÉCTICO</span><strong>“¿cómo llegó a ser así?”</strong><p>reconstruye el desarrollo</p></article>
            </div>

            <div className="ctsep1-organic">
              <span>SEMILLA</span><b>→</b><span>DESARROLLO</span><b>→</b>
              <span>ÁRBOL</span>
              <small>el inicio contiene posibilidades que sólo aparecen en el proceso</small>
            </div>

            <div className="ctsep1-callout">
              <span>FALSO COMO MOMENTO</span>
              <strong>
                Hegel no propone simplemente tirar una forma anterior cuando se
                muestra insuficiente. La forma se transforma y algo de ella queda
                incorporado en una configuración más compleja.
              </strong>
            </div>
          </section>

          <section id="idealismo">
            <Heading n="06" eyebrow="Idealismus">
              Kant deja una frontera que Hegel rechaza como definitiva
            </Heading>

            <div className="ctsep1-toggle">
              <button
                type="button"
                className={idealismView === 'kant' ? 'active' : ''}
                onClick={() => setIdealismView('kant')}
              >
                Kant
              </button>
              <button
                type="button"
                className={idealismView === 'hegel' ? 'active' : ''}
                onClick={() => setIdealismView('hegel')}
              >
                Hegel
              </button>
            </div>

            <div className="ctsep1-idealism">
              {idealismView === 'kant' ? (
                <>
                  <span>IDEALISMO TRASCENDENTAL</span>
                  <h3>Fenómeno conocido / cosa en sí incognoscible</h3>
                  <div className="ctsep1-master">
                    <span>realidad</span><b>→</b><span>sensibilidad</span><b>→</b>
                    <span>categorías</span><b>→</b><strong>fenómeno</strong>
                  </div>
                </>
              ) : (
                <>
                  <span>IDEALISMO ABSOLUTO</span>
                  <h3>No hay una exterioridad absolutamente inaccesible al pensamiento</h3>
                  <p>
                    En el momento en que intento pensar una “cosa en sí”
                    totalmente exterior, ya la he introducido de algún modo
                    dentro del pensamiento.
                  </p>
                </>
              )}
            </div>

            <div className="ctsep1-absolute">
              <span>HEGEL</span>
              <strong>realidad racionalmente aprehensible</strong>
              <b>≠</b>
              <small>fantasía privada de un individuo</small>
            </div>
          </section>

          <section id="verdad">
            <Heading n="07" eyebrow="Veritas in processu">
              El resultado separado de su recorrido no contiene toda la verdad
            </Heading>
            <p>
              El prólogo de la <em>Fenomenología</em> es paradójico precisamente
              porque Hegel desconfía de adelantar en unas páginas aquello que sólo
              puede comprenderse atravesando su desarrollo.
            </p>

            <div className="ctsep1-truth-tabs">
              {truthStages.map(([title], index) => (
                <button
                  key={title}
                  type="button"
                  className={truthStep === index ? 'active' : ''}
                  onClick={() => setTruthStep(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{title}</strong>
                </button>
              ))}
            </div>

            <div className="ctsep1-focus">
              <span>{truthStages[truthStep][0]}</span>
              <h3>{truthStages[truthStep][1]}</h3>
              <div className="ctsep1-progress">
                {truthStages.map((_, index) => (
                  <i key={index} className={index <= truthStep ? 'active' : ''} />
                ))}
              </div>
            </div>

            <div className="ctsep1-equation">
              <span>VERDAD</span><b>≠</b><span>resultado aislado</span>
              <strong>VERDAD = DESARROLLO COMPLETO</strong>
            </div>
          </section>

          <section id="espiritu">
            <Heading n="08" eyebrow="Geist">
              Espíritu no significa fantasma: nombra una totalidad racional en desarrollo
            </Heading>

            <div className="ctsep1-toggle">
              {[
                ['subjective', 'Subjetivo'],
                ['objective', 'Objetivo'],
                ['absolute', 'Absoluto'],
              ].map(([id, label]) => (
                <button
                  type="button"
                  key={id}
                  className={spiritView === id ? 'active' : ''}
                  onClick={() => setSpiritView(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="ctsep1-spirit">
              {spiritView === 'subjective' && (
                <>
                  <span>ESPÍRITU SUBJETIVO</span>
                  <h3>conciencia · sujeto · pensamiento</h3>
                  <p>Dimensión subjetiva del desarrollo.</p>
                </>
              )}
              {spiritView === 'objective' && (
                <>
                  <span>ESPÍRITU OBJETIVO</span>
                  <h3>mundo · instituciones · realidad objetiva</h3>
                  <p>No es una segunda sustancia: es una diferenciación dentro de la totalidad.</p>
                </>
              )}
              {spiritView === 'absolute' && (
                <>
                  <span>ESPÍRITU ABSOLUTO</span>
                  <h3>totalidad racional</h3>
                  <p>Sujeto y objeto aparecen como momentos internamente diferenciados de una misma totalidad.</p>
                </>
              )}
            </div>

            <div className="ctsep1-split">
              <article>
                <span>DICOTOMÍA</span>
                <strong>A | B</strong>
                <p>separación radical entre realidades independientes</p>
              </article>
              <article className="core">
                <span>ESCISIÓN</span>
                <strong>A ↔ B</strong>
                <p>diferenciación interna dentro de algo común</p>
              </article>
            </div>

            <div className="ctsep1-perspectives">
              {hegelPerspectives.map(([work, moving, text]) => (
                <article key={work}>
                  <span>{work}</span>
                  <strong>{moving}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="dialectica">
            <Heading n="09" eyebrow="Dialectica">
              Dialéctica = racionalidad del movimiento
            </Heading>
            <p>
              La realidad no cambia de cualquier manera. La dialéctica nombra el
              ritmo, la lógica interna o la racionalidad mediante la cual una
              configuración produce contradicciones, se transforma y da lugar a
              una nueva forma.
            </p>

            <div className="ctsep1-dialectic-tabs">
              {dialecticSteps.map(([n, title], index) => (
                <button
                  type="button"
                  key={n}
                  className={dialecticIndex === index ? 'active' : ''}
                  onClick={() => setDialecticIndex(index)}
                >
                  <span>{n}</span><strong>{title}</strong>
                </button>
              ))}
            </div>

            <article className="ctsep1-dialectic-focus">
              <span>{dialecticSteps[dialecticIndex][0]}</span>
              <h3>{dialecticSteps[dialecticIndex][1]}</h3>
              <p>{dialecticSteps[dialecticIndex][2]}</p>
            </article>

            <div className="ctsep1-rhythm">
              <span>equilibrio relativo</span><b>→</b>
              <span>desajuste</span><b>→</b>
              <span>nuevo equilibrio</span><b>→</b>
              <strong>nuevo desajuste…</strong>
            </div>

            <div className="ctsep1-adorno">
              <span>HEGEL ≠ ADORNO</span>
              <p>
                En Hegel, la negatividad conduce a nuevas formas de integración.
                Adorno desarrollará después una <strong>dialéctica negativa</strong>,
                por lo que no deben identificarse ambos movimientos sin más.
              </p>
            </div>

            <div className="ctsep1-final">
              <span>CONFIGURACIÓN</span><b>→</b>
              <span>CONTRADICCIÓN</span><b>→</b>
              <span>NEGATIVIDAD</span><b>→</b>
              <span>TRANSFORMACIÓN</span><b>→</b>
              <strong>NUEVA CONFIGURACIÓN</strong>
            </div>
          </section>

          <section id="tarea">
            <Heading n="10" eyebrow="Proxima sessio">
              Releer el prólogo después de haber construido el vocabulario hegeliano
            </Heading>

            <div className="ctsep1-task">
              <div className="ctsep1-task-date">
                <strong>III</strong>
                <span>IX · MMXXVI</span>
                <small>17:25</small>
              </div>

              <div>
                <span>LECTURA / RELECTURA</span>
                <h3>Prólogo de la Fenomenología del espíritu</h3>
                <p>
                  Volver al prólogo después de aclarar idealismo absoluto,
                  espíritu, fenómeno, sujeto y objeto, devenir, movimiento y
                  dialéctica.
                </p>
                <div className="ctsep1-chips">
                  {['idealismo absoluto','espíritu','fenómeno','sujeto / objeto','devenir','movimiento','dialéctica'].map((item) => (
                    <strong key={item}>{item}</strong>
                  ))}
                </div>
              </div>

              <Link to="/tareas">Ver en calendario →</Link>
            </div>

            <div className="ctsep1-next">
              <span>SIGUIENTE PROBLEMA</span>
              <strong>¿Cómo funciona concretamente el movimiento dialéctico en Hegel?</strong>
            </div>
          </section>
        </article>
      </div>

      <footer className="ctsep1-footer">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <span>Negatio · Werden · Dialektik</span>
        <span>I · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
