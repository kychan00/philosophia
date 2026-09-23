import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './AnaliticaClase7Septiembre.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass14Sep.css'
import './AnalyticClass21Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'origenes', 'Moore y Russell: doble origen'],
  ['02', 'contexto', 'Idealismo británico'],
  ['03', 'platonismo', 'Platonismo antiidealista'],
  ['04', 'proposiciones', 'Conceptos, proposiciones y verdad'],
  ['05', 'refutacion', 'The Refutation of Idealism'],
  ['06', 'lenguaje', 'Descripción, uso y comunicación'],
  ['07', 'universales', 'Chomsky, Quine y el “yo”'],
  ['08', 'analisis', 'Tres sentidos de análisis'],
  ['09', 'metodo', 'Analysandum · analysans'],
  ['10', 'limites', 'Circularidad, simples y paráfrasis'],
  ['11', 'conectivo', 'Del análisis descomposicional al conectivo'],
  ['12', 'universo', 'Moore y la descripción del universo'],
  ['13', 'escepticismo', 'Sentido común y escepticismo'],
  ['14', 'kant', 'Descartes y Kant'],
  ['15', 'cierre', 'Cierre: empieza Russell'],
]

const analysisModes = [
  {
    id: 'constitutive',
    number: 'I',
    title: 'Descomposicional',
    body:
      'Especificar los conceptos constituyentes en los que puede descomponerse un concepto complejo.',
    example:
      '“Caballo” → animal, equino, cuadrúpedo, ser vivo…',
  },
  {
    id: 'inspection',
    number: 'II',
    title: 'Inspección',
    body:
      'Examinar aquello que se presenta ante la mente al captar el significado de un concepto.',
    example:
      'La propiedad captada puede resultar simple e inanalizable o admitir componentes.',
  },
  {
    id: 'relational',
    number: 'III',
    title: 'Relacional',
    body:
      'Explicar cómo un concepto se conecta, se diferencia y se articula con otros conceptos.',
    example:
      'No pregunta de qué está hecho “caballo”, sino con qué otros conceptos se relaciona.',
  },
]

const languageViews = [
  {
    id: 'early',
    eyebrow: 'PRIMERA ETAPA',
    title: 'Lenguaje como descripción',
    body:
      'En Moore y en buena parte de la primera tradición analítica domina una concepción lógico-epistemológica: el lenguaje representa o describe el mundo.',
  },
  {
    id: 'late',
    eyebrow: 'WITTGENSTEIN II',
    title: 'Lenguaje como práctica',
    body:
      'Con las Investigaciones filosóficas, describir deja de ser la función única: también mentimos, preguntamos, imaginamos, narramos y actuamos lingüísticamente.',
  },
]

const skepticalSteps = [
  {
    id: 'moore',
    n: '01',
    title: 'Moore',
    body: '“Aquí hay una mano; aquí hay otra.” Por tanto, existen objetos externos.',
  },
  {
    id: 'skeptic',
    n: '02',
    title: 'Escéptico',
    body:
      'Acepto que tienes la experiencia de dos manos. ¿Cómo demuestras que existen independientemente de tu conciencia?',
  },
  {
    id: 'descartes',
    n: '03',
    title: 'Descartes',
    body:
      'El cogito asegura la existencia del pensamiento, pero no entrega inmediatamente un mundo externo.',
  },
  {
    id: 'kant',
    n: '04',
    title: 'Kant',
    body:
      'Si espacio y tiempo organizan un material recibido, parecería haber algo que afecta a la mente; pero el argumento depende de aceptar el aparato trascendental.',
  },
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ac9-heading ac14-heading ac21-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function AnalyticClass21Sep() {
  const [analysisId, setAnalysisId] = useState('constitutive')
  const [languageId, setLanguageId] = useState('early')
  const [skepticId, setSkepticId] = useState('moore')

  const analysis = useMemo(
    () => analysisModes.find((item) => item.id === analysisId) || analysisModes[0],
    [analysisId],
  )

  const language = useMemo(
    () => languageViews.find((item) => item.id === languageId) || languageViews[0],
    [languageId],
  )

  const skeptical = useMemo(
    () => skepticalSteps.find((item) => item.id === skepticId) || skepticalSteps[0],
    [skepticId],
  )

  return (
    <main className="ac7-page ac9-page ac14-page ac21-page">
      <nav className="ac9-topbar">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="ac9-brand">Φ · Philosophia</Link>
        <span>XXI · IX · MMXXVI</span>
      </nav>

      <header className="ac9-hero ac14-hero ac21-hero">
        <div className="ac9-grid" aria-hidden="true" />
        <div className="ac9-ghost ac14-ghost ac21-ghost" aria-hidden="true">
          analysis
        </div>

        <div className="ac9-hero-inner">
          <div>
            <p className="ac9-kicker">
              FI264 · Novena clase · 21 de septiembre de 2026
            </p>

            <h1>
              G. E. Moore:
              <em>platonismo, análisis y sentido común</em>
            </h1>

            <p className="ac9-lead">
              La sesión entra propiamente a la primera etapa histórica de Hacker:
              la revuelta de Moore contra el idealismo británico, su realismo
              pluralista, los tres sentidos de análisis y las dificultades que
              aparecen al intentar defender un mundo independiente de la mente.
            </p>

            <div className="ac9-question ac21-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                ¿Cómo intenta Moore asegurar la objetividad del conocimiento y qué
                problemas surgen cuando convierte el análisis en método filosófico?
              </strong>
            </div>
          </div>

          <aside className="ac9-hero-schema ac14-hero-schema ac21-hero-schema">
            <span>RUTA DE LA SESIÓN</span>
            <div>
              <small>CONTEXTO</small>
              <strong>idealismo absoluto</strong>
              <p>Monismo · subjetivismo · síntesis</p>
            </div>
            <b>↓</b>
            <div className="active">
              <small>MOORE</small>
              <strong>objetividad + pluralismo</strong>
              <p>Conceptos y proposiciones independientes de la mente.</p>
            </div>
            <b>↓</b>
            <div>
              <small>MÉTODO</small>
              <strong>análisis conceptual</strong>
              <p>Componentes · relaciones · límites.</p>
            </div>
          </aside>
        </div>
      </header>

      <div className="ac9-layout ac21-layout">
        <aside className="ac9-index ac21-index">
          <p>Index analyticorum</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goTo(id)}>
              <span>{n}</span>
              {label}
            </button>
          ))}
        </aside>

        <article className="ac9-article ac21-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula argumenti">
              De la revuelta antiidealista a los límites del análisis
            </Heading>

            <div className="ac21-flow">
              <span>idealismo británico</span>
              <b>→</b>
              <span>Moore</span>
              <b>→</b>
              <span>platonismo</span>
              <b>→</b>
              <span>conceptos</span>
              <b>→</b>
              <span>proposiciones</span>
              <b>→</b>
              <span>análisis</span>
              <b>→</b>
              <strong>circularidad / conexión</strong>
            </div>

            <div className="ac21-summary-grid">
              <article>
                <span>LECTURA</span>
                <strong>Hacker · pp. 103–109</strong>
                <p>
                  La sesión termina el apartado de Moore y deja preparado el paso a
                  Russell.
                </p>
              </article>
              <article>
                <span>NÚCLEO</span>
                <strong>Moore contra el idealismo</strong>
                <p>
                  Realismo pluralista, independencia del objeto y rechazo del monismo.
                </p>
              </article>
              <article>
                <span>PROBLEMA</span>
                <strong>¿Qué significa analizar?</strong>
                <p>
                  Moore oscila entre descomposición, inspección y relaciones conceptuales.
                </p>
              </article>
            </div>

            <div className="ac9-thesis ac21-thesis">
              <span>IDEA CENTRAL</span>
              <strong>
                Moore abre una de las raíces de la filosofía analítica al defender objetos,
                conceptos y proposiciones independientes de la mente; pero la práctica del
                análisis termina obligándolo a volver al lenguaje y a enfrentar circularidad,
                conceptos inanalizables y problemas de equivalencia.
              </strong>
            </div>
          </section>

          <section id="origenes">
            <Heading n="01" eyebrow="Initia analytica">
              Moore y Russell: una doble raíz, no sólo logicismo
            </Heading>

            <div className="ac9-prose">
              <p>
                La clase comienza retomando la advertencia de Hacker: después de la
                introducción, el ensayo pasa a las primeras etapas históricas. La primera
                está formada por <strong>G. E. Moore y Bertrand Russell</strong>.
              </p>
              <p>
                Nava insiste en que no conviene identificar sin más el origen de la
                filosofía analítica con el logicismo. Moore y Russell comparten una
                preocupación por el <strong>análisis conceptual, semántico y lógico</strong>,
                pero no son logicistas del mismo modo.
              </p>
            </div>

            <div className="ac21-dateband">
              <span>1898–1899</span>
              <b>revuelta de Moore</b>
              <span>1903</span>
              <b>The Refutation of Idealism</b>
              <span>≈ 1910</span>
              <b>Some Main Problems of Philosophy</b>
            </div>
          </section>

          <section id="contexto">
            <Heading n="02" eyebrow="Historia">
              El idealismo británico como adversario inmediato
            </Heading>

            <div className="ac21-context">
              <article>
                <span>ALEMANIA</span>
                <strong>Hegel pierde fuerza</strong>
                <p>
                  En la segunda mitad del siglo XIX aparecen nuevas corrientes, entre
                  ellas el neokantismo.
                </p>
              </article>
              <div>↔</div>
              <article>
                <span>GRAN BRETAÑA</span>
                <strong>el idealismo absoluto domina</strong>
                <p>
                  Las universidades británicas mantienen una fuerte presencia de la
                  apropiación inglesa del idealismo alemán.
                </p>
              </article>
            </div>

            <div className="ac9-note ac21-note">
              <span>DESFASE HISTÓRICO</span>
              <strong>
                Moore se rebela contra una tradición que en Inglaterra conserva fuerza
                justo cuando en Alemania ya está siendo desplazada.
              </strong>
            </div>
          </section>

          <section id="platonismo">
            <Heading n="03" eyebrow="Strategia anti-idealis">
              El platonismo como estrategia contra el idealismo
            </Heading>

            <div className="ac21-epistemic">
              <div>
                <span>SUJETO</span>
                <small>quien conoce</small>
              </div>
              <b>→</b>
              <div className="active">
                <span>REPRESENTACIÓN</span>
                <small>contenido cognoscitivo</small>
              </div>
              <b>←</b>
              <div>
                <span>OBJETO</span>
                <small>aquello conocido</small>
              </div>
            </div>

            <div className="ac9-prose">
              <p>
                Moore quiere impedir que el objeto desaparezca dentro de una totalidad
                mental. Por eso el recurso a Platón, aunque no sea la respuesta más
                intuitiva, resulta estratégicamente útil: permite afirmar que existen
                entidades independientes del sujeto.
              </p>
              <p>
                La oposición se articula como <strong>monismo frente a pluralismo</strong>.
                El idealismo absoluto tiende a absorber las diferencias dentro de una
                totalidad; Moore quiere conservar una pluralidad real.
              </p>
            </div>

            <div className="ac21-pairs">
              <article>
                <span>IDEALISMO</span>
                <strong>monismo</strong>
                <p>La diferencia termina integrada en una totalidad absoluta.</p>
              </article>
              <article>
                <span>MOORE</span>
                <strong>pluralismo</strong>
                <p>Sujeto y objeto no se reducen uno al otro.</p>
              </article>
            </div>
          </section>

          <section id="proposiciones">
            <Heading n="04" eyebrow="Ontologia propositionis">
              Conceptos, proposiciones y verdad absoluta
            </Heading>

            <div className="ac21-concept-stack">
              <div>
                <span>CONCEPTOS</span>
                <strong>existen independientemente del sujeto</strong>
              </div>
              <b>↓ se combinan</b>
              <div>
                <span>PROPOSICIONES</span>
                <strong>objetos de pensamiento independientes de la mente</strong>
              </div>
              <b>↓</b>
              <div className="active">
                <span>VERDAD</span>
                <strong>verdadera o falsa en sentido absoluto</strong>
              </div>
            </div>

            <div className="ac9-prose">
              <p>
                En esta etapa Moore sostiene algo particularmente fuerte: una proposición
                verdadera no se limita a corresponder con la realidad; <strong>forma parte
                de la realidad</strong>.
              </p>
              <p>
                La clase contrasta esta posición con el primer Wittgenstein. En el
                <em> Tractatus</em>, la proposición figura o representa un estado de cosas.
                En el Moore platonista, los conceptos y las proposiciones pertenecen a la
                realidad ideal misma.
              </p>
            </div>

            <div className="ac21-versus">
              <article>
                <span>MOORE</span>
                <strong>proposición ∈ realidad</strong>
              </article>
              <i>vs.</i>
              <article>
                <span>WITTGENSTEIN I</span>
                <strong>proposición ↔ figura de realidad</strong>
              </article>
            </div>
          </section>

          <section id="refutacion">
            <Heading n="05" eyebrow="1903">
              The Refutation of Idealism
            </Heading>

            <div className="ac9-prose">
              <p>
                Moore vuelve a atacar la idea de que la realidad sea fundamentalmente
                subjetiva, espiritual o mental. El blanco incluye la fórmula de Berkeley:
                <em> esse est percipi</em>.
              </p>
              <p>
                La tesis de la clase puede condensarse así: <strong>conocer algo es
                distinto de aquello que es conocido</strong>. La experiencia y el objeto
                de la experiencia no deben identificarse.
              </p>
            </div>

            <div className="ac9-question ac21-mini-question">
              <span>PREGUNTA</span>
              <strong>
                Si eliminamos completamente el objeto, ¿qué significa todavía “conocer”
                algo?
              </strong>
            </div>
          </section>

          <section id="lenguaje">
            <Heading n="06" eyebrow="Lingua">
              Descripción del mundo frente a comunicación
            </Heading>

            <div className="ac14-switcher ac21-switcher">
              {languageViews.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={languageId === item.id ? 'active' : ''}
                  onClick={() => setLanguageId(item.id)}
                >
                  {item.eyebrow}
                </button>
              ))}
            </div>

            <div className="ac21-reading-card">
              <span>{language.eyebrow}</span>
              <strong>{language.title}</strong>
              <p>{language.body}</p>
            </div>

            <div className="ac9-prose">
              <p>
                Nava marca aquí una diferencia decisiva. Moore todavía se interesa
                fundamentalmente por el <strong>concepto</strong>, no por el lenguaje
                entendido como práctica comunicativa.
              </p>
              <p>
                Esto ayuda a entender por qué el segundo Wittgenstein constituye un
                cambio tan importante: el lenguaje ordinario deja de ser una versión
                imperfecta de una estructura lógica ideal y se estudia en sus usos.
              </p>
            </div>
          </section>

          <section id="universales">
            <Heading n="07" eyebrow="Excursus">
              Chomsky, Quine y la diferencia entre palabra y concepto
            </Heading>

            <div className="ac21-three">
              <article>
                <span>CHOMSKY</span>
                <strong>estructura profunda</strong>
                <p>
                  La diversidad superficial de las lenguas podría descansar sobre
                  estructuras comunes.
                </p>
              </article>

              <article className="active">
                <span>QUINE</span>
                <strong>“gavagai”</strong>
                <p>
                  Una correlación observacional no basta para determinar con certeza el
                  referente de una expresión.
                </p>
              </article>

              <article>
                <span>“YO”</span>
                <strong>palabra ≠ capacidad cognitiva</strong>
                <p>
                  Que una lengua no tenga un equivalente directo de “yo” no demuestra
                  que sus hablantes carezcan del concepto correspondiente.
                </p>
              </article>
            </div>

            <div className="ac21-gavagai">
              <span>GAVAGAI</span>
              <div>
                <b>conejo</b>
                <b>parte de conejo</b>
                <b>fase temporal</b>
                <b>“ahí pasa comida”</b>
              </div>
              <p>
                El ejemplo abre el problema de la <strong>traducción y la referencia</strong>.
              </p>
            </div>
          </section>

          <section id="analisis">
            <Heading n="08" eyebrow="Methodus">
              Tres sentidos de “análisis” en Moore
            </Heading>

            <div className="ac14-switcher ac21-switcher">
              {analysisModes.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={analysisId === item.id ? 'active' : ''}
                  onClick={() => setAnalysisId(item.id)}
                >
                  {item.number} · {item.title}
                </button>
              ))}
            </div>

            <div className="ac21-analysis-card">
              <span>{analysis.number}</span>
              <div>
                <strong>{analysis.title}</strong>
                <p>{analysis.body}</p>
                <em>{analysis.example}</em>
              </div>
            </div>

            <div className="ac9-note ac21-note">
              <span>PROBLEMA SEGÚN HACKER</span>
              <strong>
                Moore utiliza estos sentidos de “análisis” de manera bastante indistinta.
              </strong>
            </div>
          </section>

          <section id="metodo">
            <Heading n="09" eyebrow="Analysis contra synthesis">
              Analysandum y analysans
            </Heading>

            <div className="ac21-analysans">
              <article>
                <span>ANALYSANDUM</span>
                <strong>lo que queremos analizar</strong>
                <p>El todo, concepto o estructura original.</p>
              </article>
              <div>→</div>
              <article className="active">
                <span>ANALYSANS</span>
                <strong>aquello mediante lo cual analizamos</strong>
                <p>Los componentes o relaciones con los que pretendemos explicarlo.</p>
              </article>
            </div>

            <div className="ac9-prose">
              <p>
                Nava introduce esta distinción mediante la analogía con
                <em> definiendum</em> y <em>definiens</em>. La dificultad aparece cuando
                el analysandum reaparece indispensablemente dentro del analysans.
              </p>
            </div>

            <div className="ac21-circular">
              <span>⚠</span>
              <strong>Si lo explicado reaparece dentro de la explicación → circularidad.</strong>
            </div>
          </section>

          <section id="limites">
            <Heading n="10" eyebrow="Limites methodi">
              Conceptos simples, circularidad y paráfrasis
            </Heading>

            <div className="ac21-limit-grid">
              <article>
                <span>INANALIZABLE</span>
                <strong>“bueno”</strong>
                <p>
                  En <em>Principia Ethica</em>, Moore presenta “bueno” como concepto simple.
                </p>
              </article>
              <article>
                <span>CIRCULARIDAD</span>
                <strong>A = … A …</strong>
                <p>
                  Si el análisis necesita aquello mismo que debía explicar, no avanza.
                </p>
              </article>
              <article>
                <span>PARÁFRASIS</span>
                <strong>expresión A → expresión B</strong>
                <p>
                  Reformular puede revelar estructura, pero obliga a justificar la
                  equivalencia.
                </p>
              </article>
            </div>

            <div className="ac9-prose">
              <p>
                La paráfrasis será especialmente importante para Russell y para el
                análisis lógico-lingüístico. Pero la clase anticipa una dificultad:
                parafrasear ya es <strong>interpretar</strong>.
              </p>
            </div>
          </section>

          <section id="conectivo">
            <Heading n="11" eyebrow="Post Moore">
              Del análisis descomposicional al análisis conectivo
            </Heading>

            <div className="ac21-connective">
              <div>
                <span>ANÁLISIS TEMPRANO</span>
                <strong>reducir a componentes</strong>
              </div>
              <b>→</b>
              <div className="active">
                <span>ANÁLISIS CONECTIVO</span>
                <strong>describir relaciones reguladas</strong>
              </div>
            </div>

            <div className="ac21-tagwall">
              <b>implicación</b>
              <b>exclusión</b>
              <b>presuposición</b>
              <b>compatibilidad</b>
              <b>incompatibilidad</b>
            </div>

            <div className="ac9-prose">
              <p>
                Después de abandonar el platonismo fuerte de Moore, la filosofía británica
                conserva el vocabulario de “análisis”, pero cambia profundamente su
                contenido metodológico.
              </p>
            </div>
          </section>

          <section id="universo">
            <Heading n="12" eyebrow="Some Main Problems of Philosophy">
              Moore todavía quiere describir el universo
            </Heading>

            <div className="ac21-universe">
              <span>FILOSOFÍA</span>
              <strong>
                dar una descripción general de las clases fundamentales de cosas y de
                sus relaciones
              </strong>
            </div>

            <div className="ac9-prose">
              <p>
                Este punto separa claramente a Moore del Wittgenstein posterior. Moore
                todavía atribuye a la filosofía una tarea tradicional: decir algo general
                sobre la estructura de la realidad.
              </p>
              <p>
                Por eso su filosofía no puede reducirse a “analizar palabras”. El lenguaje
                aparece en su práctica, pero el proyecto sigue siendo ontológico y
                epistemológico.
              </p>
            </div>
          </section>

          <section id="escepticismo">
            <Heading n="13" eyebrow="Common sense">
              Sentido común frente a la queja escéptica
            </Heading>

            <div className="ac21-skeptic-tabs">
              {skepticalSteps.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={skepticId === item.id ? 'active' : ''}
                  onClick={() => setSkepticId(item.id)}
                >
                  <span>{item.n}</span>
                  {item.title}
                </button>
              ))}
            </div>

            <div className="ac21-skeptic-card">
              <span>{skeptical.n}</span>
              <strong>{skeptical.title}</strong>
              <p>{skeptical.body}</p>
            </div>

            <div className="ac9-note ac21-note">
              <span>CRÍTICA DE NAVA</span>
              <strong>
                La prueba de las manos puede expresar el realismo de sentido común de
                Moore, pero no obliga al escéptico a aceptar un mundo externo
                independiente de la conciencia.
              </strong>
            </div>
          </section>

          <section id="kant">
            <Heading n="14" eyebrow="Quaestio externa">
              Descartes y la respuesta condicional de Kant
            </Heading>

            <div className="ac21-kant-flow">
              <article>
                <span>DESCARTES</span>
                <strong>Pienso → existo como conciencia</strong>
                <p>Pero todavía falta justificar un mundo exterior.</p>
              </article>
              <b>→</b>
              <article className="active">
                <span>KANT</span>
                <strong>formas a priori + material recibido</strong>
                <p>
                  Si la sensibilidad ordena algo, parecería haber algo que la afecta.
                </p>
              </article>
              <b>→</b>
              <article>
                <span>LÍMITE</span>
                <strong>depende del aparato kantiano</strong>
                <p>
                  Si se rechaza la teoría de espacio y tiempo, el argumento pierde su
                  fundamento.
                </p>
              </article>
            </div>
          </section>

          <section id="cierre">
            <Heading n="15" eyebrow="Continuatio">
              Termina Moore; la próxima clase comienza Russell
            </Heading>

            <div className="ac21-ending">
              <span>PUNTO DE CORTE</span>
              <strong>≈ página 109 de Hacker</strong>
              <p>
                La sesión cierra el apartado dedicado a Moore. Los párrafos siguientes
                comienzan ya con Bertrand Russell.
              </p>
            </div>

            <div className="ac21-actions">
              <Link to="/semestre/5/filosofia-analitica/reporte/hacker">
                Abrir sistema total de Hacker →
              </Link>
              <Link to="/semestre/5/filosofia-analitica">
                Volver a Filosofía Analítica
              </Link>
            </div>

            <div className="ac21-no-task">
              <span>TAREA</span>
              <strong>No se registró una tarea explícita en esta sesión.</strong>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
