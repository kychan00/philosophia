import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './AnaliticaClase7Septiembre.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass14Sep.css'
import './AnalyticClass21Sep.css'
import './AnalyticClass23Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'relaciones', 'Relaciones externas'],
  ['02', 'pluralidad', 'Pluralidad contra el absoluto'],
  ['03', 'analisis', 'Análisis frente a síntesis'],
  ['04', 'leibniz', 'Leibniz y analiticidad'],
  ['05', 'kant', 'Kant y lo sintético a priori'],
  ['06', 'formas', 'Forma, materia, espacio y tiempo'],
  ['07', 'subjetividad', 'Objeción de subjetividad'],
  ['08', 'frege', 'Frege y logicismo'],
  ['09', 'russell', 'Russell: realismo y análisis'],
  ['10', 'referencia', 'Referencia y ontología'],
  ['11', 'sentido', 'Sentido, sintaxis y semántica'],
  ['12', 'cierre', 'Cierre · p. 113'],
]

const propositions = [
  {
    id: 'greater',
    label: '5 > 4',
    title: 'Relación “mayor que”',
    body:
      'No basta con que existan cinco y cuatro: la proposición afirma además una relación entre ambos términos.',
  },
  {
    id: 'implication',
    label: 'P → Q',
    title: 'Relación de implicación',
    body:
      'Tener P y Q no basta para explicar la proposición; también debe comprenderse la relación que articula ambos términos.',
  },
]

const kantGrid = [
  ['Analítico', 'a priori', 'El predicado está contenido en el concepto.'],
  ['Sintético', 'a posteriori', 'Amplía el conocimiento mediante experiencia.'],
  ['Sintético', 'a priori', 'Amplía conocimiento y, sin embargo, conserva necesidad y universalidad.'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ac9-heading ac14-heading ac21-heading ac23-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function AnalyticClass23Sep() {
  const [propId, setPropId] = useState('greater')

  const proposition = useMemo(
    () => propositions.find((item) => item.id === propId) || propositions[0],
    [propId],
  )

  return (
    <main className="ac7-page ac9-page ac14-page ac21-page ac23-page">
      <nav className="ac9-topbar">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="ac9-brand">Φ · Philosophia</Link>
        <span>XXIII · IX · MMXXVI</span>
      </nav>

      <header className="ac9-hero ac14-hero ac21-hero ac23-hero">
        <div className="ac9-grid" aria-hidden="true" />
        <div className="ac9-ghost ac14-ghost ac21-ghost ac23-ghost" aria-hidden="true">
          Russell
        </div>

        <div className="ac9-hero-inner">
          <div>
            <p className="ac9-kicker">
              FI264 · Undécima clase · 23 de septiembre de 2026
            </p>

            <h1>
              Russell:
              <em>relaciones, análisis y objetividad matemática</em>
            </h1>

            <p className="ac9-lead">
              La sesión continúa el paso de Moore a Russell: relaciones externas,
              pluralidad, análisis lógico, Leibniz y Kant, el problema de las
              matemáticas sintéticas a priori, el logicismo de Frege y la ontología
              abundante del primer Russell.
            </p>

            <div className="ac9-question ac21-question ac23-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                ¿Cómo puede Russell defender la objetividad de las matemáticas sin
                depender ni del monismo idealista ni de las estructuras subjetivas
                del conocimiento kantiano?
              </strong>
            </div>
          </div>

          <aside className="ac9-hero-schema ac14-hero-schema ac21-hero-schema ac23-hero-schema">
            <span>RUTA DE LA SESIÓN</span>
            <div>
              <small>IDEALISMO</small>
              <strong>relaciones internas</strong>
              <p>Todo queda absorbido en la totalidad.</p>
            </div>
            <b>↓</b>
            <div className="active">
              <small>RUSSELL</small>
              <strong>relaciones externas</strong>
              <p>Pluralidad · análisis · lógica.</p>
            </div>
            <b>↓</b>
            <div>
              <small>MATEMÁTICAS</small>
              <strong>objetividad</strong>
              <p>Leibniz → Kant → Frege → Russell.</p>
            </div>
          </aside>
        </div>
      </header>

      <div className="ac9-layout ac21-layout ac23-layout">
        <aside className="ac9-index ac21-index ac23-index">
          <p>Index analyticorum</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goTo(id)}>
              <span>{n}</span>
              {label}
            </button>
          ))}
        </aside>

        <article className="ac9-article ac21-article ac23-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula argumenti">
              Del problema de las relaciones al proyecto logicista
            </Heading>

            <div className="ac23-flow">
              <span>idealismo</span>
              <b>→</b>
              <span>relaciones internas</span>
              <b>×</b>
              <strong>Russell</strong>
              <b>→</b>
              <span>pluralidad</span>
              <b>→</b>
              <span>análisis</span>
              <b>→</b>
              <span>logicismo</span>
            </div>

            <div className="ac23-summary-grid">
              <article>
                <span>LECTURA</span>
                <strong>Hacker · hasta p. 113</strong>
                <p>
                  La clase avanza desde las relaciones externas hasta la teoría
                  referencial temprana de Russell.
                </p>
              </article>
              <article>
                <span>NÚCLEO</span>
                <strong>análisis contra síntesis</strong>
                <p>
                  Russell convierte el análisis en una bandera antiidealista y,
                  progresivamente, en una herramienta lógico-formal.
                </p>
              </article>
              <article>
                <span>PROBLEMA</span>
                <strong>objetividad matemática</strong>
                <p>
                  Leibniz, Kant, Frege y Russell ofrecen respuestas distintas a
                  necesidad, universalidad y analiticidad.
                </p>
              </article>
            </div>

            <div className="ac9-thesis ac21-thesis ac23-thesis">
              <span>IDEA CENTRAL</span>
              <strong>
                Russell rompe con el idealismo al tomar en serio la pluralidad y las
                relaciones externas; desde ahí, el análisis lógico se vuelve el camino
                para fundamentar matemáticas y filosofía sin reducirlas a una síntesis
                absoluta ni a la constitución subjetiva de la experiencia.
              </strong>
            </div>
          </section>

          <section id="relaciones">
            <Heading n="01" eyebrow="Relationes externae">
              “Cinco es mayor que cuatro” afirma algo más que dos términos
            </Heading>

            <div className="ac14-switcher ac21-switcher ac23-switcher">
              {propositions.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={propId === item.id ? 'active' : ''}
                  onClick={() => setPropId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="ac23-relation-card">
              <span>{proposition.label}</span>
              <strong>{proposition.title}</strong>
              <p>{proposition.body}</p>
            </div>

            <div className="ac23-relation-model">
              <div>
                <span>TÉRMINO A</span>
                <strong>5</strong>
              </div>
              <b>— relación →</b>
              <div className="active">
                <span>RELACIÓN</span>
                <strong>mayor que</strong>
              </div>
              <b>→</b>
              <div>
                <span>TÉRMINO B</span>
                <strong>4</strong>
              </div>
            </div>

            <p className="ac9-prose">
              La tesis de clase es que una relación matemática no desaparece al
              describir por separado sus términos. “Mayor que”, “igual que”,
              “menor que” o “implica” deben poder ser consideradas en sí mismas.
            </p>
          </section>

          <section id="pluralidad">
            <Heading n="02" eyebrow="Pluralitas">
              Relaciones externas contra el monismo de lo absoluto
            </Heading>

            <div className="ac23-binary">
              <article>
                <span>IDEALISMO ABSOLUTO</span>
                <strong>totalidad única</strong>
                <p>
                  Las relaciones se comprenden desde el sistema completo y nada queda
                  propiamente fuera de él.
                </p>
              </article>
              <div>VS.</div>
              <article className="active">
                <span>RUSSELL</span>
                <strong>pluralidad real</strong>
                <p>
                  Si existen términos distintos y relaciones entre ellos, la realidad
                  no puede reducirse a una única totalidad indiferenciada.
                </p>
              </article>
            </div>

            <div className="ac9-note ac21-note ac23-note">
              <span>GOLPE AL IDEALISMO</span>
              <strong>
                Reconocer relaciones externas permite reconocer una pluralidad de cosas.
              </strong>
            </div>
          </section>

          <section id="analisis">
            <Heading n="03" eyebrow="Analysis contra synthesis">
              “Análisis” funciona como bandera antiidealista
            </Heading>

            <div className="ac23-analysis">
              <article>
                <span>SÍNTESIS</span>
                <strong>integrar en una totalidad</strong>
                <p>El elemento adquiere sentido dentro del sistema absoluto.</p>
              </article>
              <b>↔</b>
              <article className="active">
                <span>ANÁLISIS</span>
                <strong>separar componentes</strong>
                <p>
                  Russell busca distinguir elementos y relaciones mediante análisis
                  lógico o formal.
                </p>
              </article>
            </div>

            <p className="ac9-prose">
              La clase conecta esta elección metodológica con Moore, Peano y los
              trabajos del siglo XIX sobre fundamentos del cálculo, límite y
              continuidad. La matemática ofrece a Russell un modelo de rigor capaz de
              prescindir de elementos metafísicos innecesarios.
            </p>
          </section>

          <section id="leibniz">
            <Heading n="04" eyebrow="Principium analyticitas">
              Leibniz: verdad de razón → análisis → identidad
            </Heading>

            <div className="ac23-leibniz">
              <div>
                <span>VERDAD DE RAZÓN</span>
                <strong>necesaria</strong>
              </div>
              <b>→</b>
              <div>
                <span>ANÁLISIS</span>
                <strong>descomposición</strong>
              </div>
              <b>→</b>
              <div className="active">
                <span>FUNDAMENTO</span>
                <strong>identidad / no contradicción</strong>
              </div>
            </div>

            <div className="ac23-equation">
              <span>5 = 2 + 3</span>
              <b>↓ analizar</b>
              <span>1 + 1 + 1 + 1 + 1 = (1 + 1) + (1 + 1 + 1)</span>
              <b>↓</b>
              <strong>P = P</strong>
            </div>

            <p className="ac9-prose">
              La dificultad que presenta Nava es directa: si todas las matemáticas se
              reducen finalmente a identidades, parecen terminar en trivialidades que no
              amplían conocimiento.
            </p>
          </section>

          <section id="kant">
            <Heading n="05" eyebrow="Kant">
              El problema de lo sintético a priori
            </Heading>

            <div className="ac23-kant-grid">
              {kantGrid.map(([type, mode, body]) => (
                <article key={`${type}-${mode}`}>
                  <span>{type}</span>
                  <strong>{mode}</strong>
                  <p>{body}</p>
                </article>
              ))}
            </div>

            <div className="ac9-question ac21-mini-question ac23-mini-question">
              <span>PREGUNTA KANTIANA</span>
              <strong>¿Puede haber proposiciones sintéticas a priori?</strong>
            </div>

            <p className="ac9-prose">
              Kant quiere evitar que la matemática sea mera identidad: debe ampliar
              conocimiento y, sin embargo, conservar necesidad y universalidad.
            </p>
          </section>

          <section id="formas">
            <Heading n="06" eyebrow="Forma et materia">
              Conocer = materia recibida + forma aportada por el sujeto
            </Heading>

            <div className="ac23-form-matter">
              <article>
                <span>MATERIA</span>
                <strong>afección sensible</strong>
                <p>Contenido recibido.</p>
              </article>
              <b>+</b>
              <article className="active">
                <span>FORMA</span>
                <strong>estructuras a priori</strong>
                <p>Organización aportada por el sujeto.</p>
              </article>
              <b>→</b>
              <article>
                <span>EXPERIENCIA</span>
                <strong>representación</strong>
                <p>Objeto tal como puede aparecer.</p>
              </article>
            </div>

            <div className="ac23-space-time">
              <span>FORMAS PURAS DE LA SENSIBILIDAD</span>
              <strong>espacio · tiempo</strong>
              <p>
                Toda representación sensible queda ordenada espacio-temporalmente.
                Desde ahí Kant explica cómo las matemáticas pueden ser sintéticas a priori.
              </p>
            </div>
          </section>

          <section id="subjetividad">
            <Heading n="07" eyebrow="Objectivitas mathematica">
              La incomodidad de Russell: ¿depende 1 + 1 = 2 de nosotros?
            </Heading>

            <div className="ac23-humanity">
              <article>
                <span>PREGUNTA</span>
                <strong>Si desaparecieran todos los seres humanos…</strong>
              </article>
              <b>→</b>
              <article className="active">
                <span>REALISMO</span>
                <strong>¿1 + 1 seguiría siendo 2?</strong>
              </article>
            </div>

            <p className="ac9-prose">
              La clase presenta la objeción de Frege y Russell en términos de
              objetividad: la verdad matemática no debería depender de la configuración
              psicológica o cognitiva de la mente humana.
            </p>
          </section>

          <section id="frege">
            <Heading n="08" eyebrow="Logicismus">
              Frege: fundamentar la aritmética en la lógica
            </Heading>

            <div className="ac23-logicism">
              <div>
                <span>ARITMÉTICA</span>
                <strong>matemática</strong>
              </div>
              <b>→ reducción →</b>
              <div className="active">
                <span>LÓGICA</span>
                <strong>fundamento</strong>
              </div>
            </div>

            <div className="ac23-paradox">
              <span>PROBLEMA</span>
              <strong>paradoja de Russell</strong>
              <p>
                Russell descubre una contradicción que afecta un principio central del
                sistema fregeano y amenaza el proyecto original tal como estaba formulado.
              </p>
            </div>
          </section>

          <section id="russell">
            <Heading n="09" eyebrow="The Principles of Mathematics · 1903">
              Complejidad objetiva y análisis como descomposición
            </Heading>

            <div className="ac23-russell">
              <span>REALIDAD COMPLEJA</span>
              <b>→</b>
              <span>ANÁLISIS LÓGICO</span>
              <b>→</b>
              <span>COMPONENTES</span>
              <b>→</b>
              <strong>SIMPLES / INDEFINIBLES</strong>
            </div>

            <p className="ac9-prose">
              Si el análisis permite distinguir elementos, Russell entiende que esas
              diferencias no son meramente creadas por la mente: corresponden a una
              pluralidad real. El análisis continúa hasta elementos simples, conocidos
              mediante una forma de familiaridad directa.
            </p>
          </section>

          <section id="referencia">
            <Heading n="10" eyebrow="Ontologia abundans">
              Si toda expresión significa algo, la ontología se llena de entidades
            </Heading>

            <div className="ac23-reference">
              <div>
                <span>EXPRESIÓN SIGNIFICATIVA</span>
                <strong>“la montaña de oro”</strong>
              </div>
              <b>→ ?</b>
              <div className="active">
                <span>REFERENTE</span>
                <strong>¿qué entidad corresponde?</strong>
              </div>
            </div>

            <div className="ac23-tagwall">
              <b>números</b>
              <b>clases</b>
              <b>relaciones</b>
              <b>objetos lógicos</b>
              <b>entidades espaciales</b>
              <b>entidades temporales</b>
              <b>ficciones problemáticas</b>
            </div>

            <p className="ac9-prose">
              La clase deja abierto el problema que Russell tratará después mediante
              la teoría de las descripciones definidas. En esta sesión todavía se
              estudia la fase ontológicamente abundante.
            </p>
          </section>

          <section id="sentido">
            <Heading n="11" eyebrow="Sensus · syntaxis · semantica">
              ¿El sentido está dado por las reglas del lenguaje?
            </Heading>

            <div className="ac23-sense">
              <article>
                <span>SINTAXIS</span>
                <strong>fórmula bien formada</strong>
                <p>Cumple requisitos gramaticales.</p>
              </article>
              <b>+</b>
              <article className="active">
                <span>SEMÁNTICA</span>
                <strong>qué significa / a qué se refiere</strong>
                <p>El problema de referencia vuelve a entrar en escena.</p>
              </article>
            </div>

            <p className="ac9-prose">
              La pregunta final de la sesión prepara el paso a los positivistas: si se
              privilegia la función descriptiva del lenguaje, la posibilidad de fijar
              aquello a lo que una proposición se refiere adquiere un peso decisivo
              para determinar su significado.
            </p>
          </section>

          <section id="cierre">
            <Heading n="12" eyebrow="Continuatio">
              La clase termina en Hacker p. 113
            </Heading>

            <div className="ac21-ending ac23-ending">
              <span>PUNTO DE CORTE</span>
              <strong>página 113</strong>
              <p>
                La próxima sesión continúa desde la teoría referencial temprana de
                Russell y los problemas que genera una ontología demasiado abundante.
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
