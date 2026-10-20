import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  AnalyticEditorialHeading,
  AnalyticEditorialIndex,
} from '../components/analytic/AnalyticEditorialElements'
import '../components/analytic/AnalyticEditorialElements.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass19Oct.css'

const sections = [
  ['01', 'programa', 'El mapa de Glock'],
  ['02', 'analisis', 'Dos sentidos del análisis'],
  ['03', 'modernos', 'Descartes, Leibniz y empirismo'],
  ['04', 'kant', 'Kant: analítico, sintético y a priori'],
  ['05', 'copernicana', 'Revolución copernicana'],
  ['06', 'filosofia', '¿Qué hace la filosofía?'],
  ['07', 'idealismo', 'Idealismo, naturalismo y neokantismo'],
  ['08', 'cierre', 'Cierre y continuación'],
]

const analysisSchema = {
  title: 'Dos sentidos históricos del análisis',
  layout: 'hierarchy',
  readingLayout: 'vertical-folio',
  minHeight: 650,
  hierarchyXGap: 145,
  hierarchyYGap: 150,
  rootId: 'dado',
  nodes: [
    { id: 'dado', label: 'Algo dado', caption: 'punto de partida', role: 'concept' },
    { id: 'concepto', label: 'Concepto complejo', caption: 'Sócrates / Platón', role: 'term' },
    { id: 'proposicion', label: 'Proposición por probar', caption: 'geometría / Aristóteles', role: 'term' },
    { id: 'partes', label: 'Componentes', caption: 'analysans', role: 'mediation' },
    { id: 'principios', label: 'Primeros principios', caption: 'fundamento', role: 'mediation' },
    { id: 'definicion', label: 'Definición', caption: 'análisis descomposicional', role: 'result' },
    { id: 'prueba', label: 'Demostración', caption: 'análisis regresivo', role: 'result' },
  ],
  edges: [
    { from: 'dado', to: 'concepto', relationKind: 'hierarchical', label: 'si es concepto' },
    { from: 'dado', to: 'proposicion', relationKind: 'hierarchical', label: 'si es proposición' },
    { from: 'concepto', to: 'partes', relationKind: 'derives', label: 'descompone' },
    { from: 'partes', to: 'definicion', relationKind: 'derives', label: 'define' },
    { from: 'proposicion', to: 'principios', relationKind: 'derives', label: 'retrocede' },
    { from: 'principios', to: 'prueba', relationKind: 'derives', label: 'justifica' },
  ],
}

const kantSchema = {
  title: 'Materia y forma de la experiencia',
  layout: 'hierarchy',
  readingLayout: 'vertical-folio',
  minHeight: 630,
  hierarchyXGap: 150,
  hierarchyYGap: 150,
  rootId: 'experiencia',
  nodes: [
    { id: 'experiencia', label: 'Conocimiento', caption: 'unidad de dos aportes', role: 'concept' },
    { id: 'materia', label: 'Materia sensible', caption: 'a posteriori', role: 'term' },
    { id: 'forma', label: 'Forma del sujeto', caption: 'a priori', role: 'structure' },
    { id: 'espacio', label: 'Espacio y tiempo', caption: 'formas de intuición', role: 'mediation' },
    { id: 'categorias', label: 'Categorías', caption: 'unidad · causalidad · etc.', role: 'mediation' },
    { id: 'objeto', label: 'Objeto de experiencia', caption: 'ya estructurado', role: 'result' },
    { id: 'sap', label: 'Sintético a priori', caption: 'amplía y reclama necesidad', role: 'result' },
  ],
  edges: [
    { from: 'experiencia', to: 'materia', relationKind: 'hierarchical', label: 'recibe' },
    { from: 'experiencia', to: 'forma', relationKind: 'hierarchical', label: 'aporta' },
    { from: 'forma', to: 'espacio', relationKind: 'derives', label: 'intuición' },
    { from: 'forma', to: 'categorias', relationKind: 'derives', label: 'entendimiento' },
    { from: 'materia', to: 'objeto', relationKind: 'constitutes', label: 'contenido' },
    { from: 'espacio', to: 'objeto', relationKind: 'constitutes', label: 'ordena' },
    { from: 'categorias', to: 'objeto', relationKind: 'constitutes', label: 'estructura' },
    { from: 'objeto', to: 'sap', relationKind: 'derives', label: 'hace posible' },
  ],
}

const postKantSchema = {
  title: 'Tres respuestas al problema postkantiano',
  layout: 'hierarchy',
  readingLayout: 'vertical-folio',
  minHeight: 620,
  hierarchyXGap: 150,
  hierarchyYGap: 145,
  rootId: 'kant',
  nodes: [
    { id: 'kant', label: 'Idealismo trascendental', caption: 'fenómeno / cosa en sí', role: 'concept' },
    { id: 'tension', label: 'Tensión', caption: 'causalidad y cosa en sí', role: 'mediation' },
    { id: 'idealismo', label: 'Idealismo alemán', caption: 'radicaliza lo racional', role: 'structure' },
    { id: 'colapso', label: 'Colapso del idealismo', caption: 'siglo XIX', role: 'mediation' },
    { id: 'naturalismo', label: 'Naturalismo', caption: 'a posteriori / ciencia empírica', role: 'result' },
    { id: 'neokantismo', label: 'Neokantismo', caption: 'filosofía de segundo orden', role: 'result' },
  ],
  edges: [
    { from: 'kant', to: 'tension', relationKind: 'derives', label: 'genera' },
    { from: 'tension', to: 'idealismo', relationKind: 'derives', label: 'radicaliza' },
    { from: 'idealismo', to: 'colapso', relationKind: 'derives', label: 'entra en crisis' },
    { from: 'colapso', to: 'naturalismo', relationKind: 'hierarchical', label: 'reacción' },
    { from: 'colapso', to: 'neokantismo', relationKind: 'hierarchical', label: 'reacción' },
  ],
}

const historicalMoves = [
  ['PLATÓN', 'Concepto', 'descomponer', 'componentes / definición'],
  ['ARISTÓTELES', 'Proposición', 'retroceder', 'principios / prueba'],
  ['DESCARTES', 'Idea compleja', 'simplificar', 'naturalezas simples'],
  ['LEIBNIZ', 'Verdad', 'analizar', 'identidad'],
  ['EMPIRISMO', 'Contenido mental', 'resolver', 'ideas / experiencia'],
  ['KANT', 'Conocimiento', 'examinar condiciones', 'facultades / a priori'],
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function AnalyticClass19Oct() {
  return (
    <main className="ac9-page ac1910-page analytic-editorial-page">
      <nav className="ac9-topbar">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="ac9-brand">Φ Philosophia</Link>
        <span>19 · X · 2026 · Glock pp. 40–46</span>
      </nav>

      <header className="ac9-hero ac1910-hero">
        <div className="ac9-grid" aria-hidden="true" />
        <div className="ac9-ghost ac1910-ghost" aria-hidden="true">ἀνάλυσις</div>
        <div className="ac9-hero-inner">
          <div>
            <p className="ac9-kicker">Filosofía Analítica · Decimosexta clase</p>
            <h1>Prehistoria <em>del análisis</em></h1>
            <p className="ac9-lead">
              Glock reconstruye cómo «analizar» significó descomponer conceptos,
              retroceder desde proposiciones, buscar lo simple, reducir verdades a
              identidades y, con Kant, examinar las condiciones mismas del conocer.
            </p>

            <div className="ac9-question ac1910-question">
              <span>Problema de la sesión</span>
              <strong>
                ¿Cómo pasa el análisis de ser una operación sobre conceptos y
                proposiciones a convertirse en una investigación de las condiciones
                del conocimiento y de la función de la filosofía?
              </strong>
            </div>

            <div className="ac1910-actions">
              <Link to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">
                ABRIR SISTEMA 2D DE GLOCK ↗
              </Link>
              <button type="button" onClick={() => scrollToSection('analisis')}>
                VER DOS SENTIDOS DEL ANÁLISIS ↓
              </button>
            </div>
          </div>

          <aside className="ac1910-source-card">
            <span>CAPAS DOCUMENTALES</span>
            <div>
              <b>01</b>
              <strong>Glock</strong>
              <p>Cap. II, pp. 40–46 disponibles.</p>
            </div>
            <div>
              <b>02</b>
              <strong>Explicación de clase</strong>
              <p>Ejemplos, genealogías y conexiones del profesor.</p>
            </div>
            <div>
              <b>03</b>
              <strong>Precisión editorial</strong>
              <p>Se marcan simplificaciones y ampliaciones para no atribuirlas al texto.</p>
            </div>
          </aside>
        </div>
      </header>

      <div className="ac9-layout ac1910-layout">
        <AnalyticEditorialIndex
          sections={sections}
          onNavigate={scrollToSection}
          className="ac1910-index"
        >
          <Link
            className="ac1910-index-link"
            to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2"
          >
            Sistema 2D · Glock ↗
          </Link>
        </AnalyticEditorialIndex>

        <article className="ac9-article ac1910-article">
          <section id="programa">
            <AnalyticEditorialHeading n="01" eyebrow="Breve panorama histórico" className="ac1910-heading">
              El capítulo ya contiene el mapa de lo que viene
            </AnalyticEditorialHeading>

            <div className="ac1910-provenance is-source">
              <span>GLOCK · FUENTE PRIMARIA</span>
              <p>
                El capítulo anuncia antecedentes del análisis, Bolzano–Frege–Moore–Russell,
                el giro lingüístico, el positivismo lógico y una inversión posterior:
                metafísica, naturalismo, mente, lenguaje, ética y política.
              </p>
            </div>

            <div className="ac1910-provenance is-class">
              <span>EXPLICACIÓN DE CLASE</span>
              <p>
                La sesión usa este programa para enlazar el cierre de Hacker con la nueva
                lectura: el rechazo positivista de la metafísica no es el final de la historia,
                sino una etapa cuya inversión Glock anuncia desde la primera página.
              </p>
            </div>

            <div className="ac1910-route">
              <b>antecedentes</b><i>→</i><b>lógica moderna</b><i>→</i>
              <b>giro lingüístico</b><i>→</i><b>positivismo</b><i>→</i>
              <b>inversión del giro</b>
            </div>
          </section>

          <section id="analisis">
            <AnalyticEditorialHeading n="02" eyebrow="Prehistoria" className="ac1910-heading">
              Dos cosas distintas pueden llamarse «análisis»
            </AnalyticEditorialHeading>

            <div className="ac1910-compare">
              <article>
                <span>DESCOMPOSICIONAL · PROGRESIVO</span>
                <h3>Sócrates / Platón</h3>
                <p>
                  Un concepto complejo se resuelve en componentes capaces de explicarlo:
                  ser humano → animal + racionalidad → animal racional.
                </p>
                <small>analysandum → analysans</small>
              </article>
              <article>
                <span>REGRESIVO</span>
                <h3>Geometría / Aristóteles</h3>
                <p>
                  Se parte de una proposición por demostrar y se retrocede hasta principios
                  desde los que pueda justificarse como teorema.
                </p>
                <small>conclusión → pasos → principios</small>
              </article>
            </div>

            <div className="ac1910-schema-panel">
              <span>ESQUEMA DE CLASE · RECONSTRUCCIÓN</span>
              <AnimatedConceptSchema schema={analysisSchema} />
            </div>

            <div className="ac1910-note">
              <strong>Distinción que el profesor remarcó:</strong>
              <p>
                «Analizar» no equivale sin más a deducir de axiomas. Glock recuerda que
                esa derivación directa fue llamada históricamente método sintético,
                mientras el análisis regresaba desde lo que debía probarse.
              </p>
            </div>
          </section>

          <section id="modernos">
            <AnalyticEditorialHeading n="03" eyebrow="De lo simple al cálculo" className="ac1910-heading">
              Descartes, Leibniz y el giro hacia la mente
            </AnalyticEditorialHeading>

            <div className="ac1910-history">
              {historicalMoves.map(([author, start, verb, end]) => (
                <article key={author}>
                  <span>{author}</span>
                  <strong>{start}</strong>
                  <i>{verb}</i>
                  <b>{end}</b>
                </article>
              ))}
            </div>

            <div className="ac1910-split">
              <article>
                <span>DESCARTES · CLASE</span>
                <h3>Analizar es encontrar lo simple</h3>
                <p>
                  La explicación docente aproxima el análisis cartesiano a la
                  simplificación de ideas complejas hasta elementos claros y distintos.
                  No se trata de descomponer conceptos exactamente al modo platónico.
                </p>
              </article>
              <article>
                <span>LEIBNIZ · GLOCK + CLASE</span>
                <h3>Verdad → identidad</h3>
                <p>
                  La analiticidad leibniziana permite pensar que una verdad compleja,
                  correctamente analizada, termina en identidad. La <em>characteristica
                  universalis</em> proyecta además un lenguaje calculable para la ciencia.
                </p>
              </article>
            </div>

            <div className="ac1910-warning">
              <span>PRECISIÓN</span>
              <p>
                Presentar a Leibniz como «padre» de la lógica contemporánea sería demasiado
                fuerte. La clase lo usa como antecedente de la aspiración formal; Frege,
                Russell y otros desarrollarán herramientas distintas mucho después.
              </p>
            </div>

            <div className="ac1910-provenance is-class">
              <span>EMPIRISMO · AMPLIACIÓN DOCENTE</span>
              <p>
                El profesor interpreta a los empiristas como un antecedente de la pregunta
                kantiana: antes de explicar el mundo, esclarecer cómo trabaja la mente.
                Glock formula el paso de elementos mentales a facultades sin usar esa
                genealogía exactamente en los mismos términos.
              </p>
            </div>
          </section>

          <section id="kant">
            <AnalyticEditorialHeading n="04" eyebrow="Analiticidad y necesidad" className="ac1910-heading">
              Kant necesita algo que amplíe y, sin embargo, sea necesario
            </AnalyticEditorialHeading>

            <div className="ac1910-matrix" role="table" aria-label="Contrastes kantianos trabajados en clase">
              <div className="head">TIPO</div><div className="head">QUÉ HACE</div><div className="head">EJEMPLO DE CLASE</div>
              <div><b>Analítico</b></div><div>explicita lo contenido</div><div>Todos los cuerpos son extensos</div>
              <div><b>Sintético</b></div><div>añade una determinación</div><div>Todos los cuerpos son pesados</div>
              <div><b>A priori</b></div><div>validez independiente de experiencia</div><div>necesidad</div>
              <div><b>A posteriori</b></div><div>justificación por experiencia</div><div>contingencia empírica</div>
            </div>

            <div className="ac1910-paradox">
              <span>LA PREGUNTA KANTIANA</span>
              <strong>¿Puede algo ser sintético y a priori?</strong>
              <p>
                La clase lo formula como la búsqueda de una proposición que no sea trivial,
                que diga algo sustantivo y que, al mismo tiempo, conserve necesidad.
              </p>
            </div>

            <div className="ac1910-equation">
              <span>CASO DISCUTIDO</span>
              <b>7 + 5 = 12</b>
              <p>
                Glock contrapone la lectura leibniziana de reducción a identidad con la
                tesis kantiana de que la aritmética requiere síntesis sin depender de
                observación experimental.
              </p>
            </div>
          </section>

          <section id="copernicana">
            <AnalyticEditorialHeading n="05" eyebrow="Revolución copernicana" className="ac1910-heading">
              El sujeto no inventa la materia; aporta la forma de la experiencia
            </AnalyticEditorialHeading>

            <div className="ac1910-schema-panel">
              <span>ESQUEMA DE CLASE · KANT</span>
              <AnimatedConceptSchema schema={kantSchema} />
            </div>

            <div className="ac1910-kant-grid">
              <article>
                <span>MATERIA</span>
                <strong>a posteriori</strong>
                <p>Información recibida en la sensibilidad.</p>
              </article>
              <article>
                <span>FORMA</span>
                <strong>a priori</strong>
                <p>Espacio, tiempo y categorías estructuran la experiencia.</p>
              </article>
              <article>
                <span>RESULTADO</span>
                <strong>objeto de experiencia</strong>
                <p>Lo conocido aparece ya bajo condiciones aportadas por el sujeto.</p>
              </article>
            </div>

            <div className="ac1910-example">
              <span>EJEMPLO DE GLOCK</span>
              <strong>«Todo suceso tiene una causa»</strong>
              <p>
                En la reconstrucción trabajada, la causalidad no se obtiene después de
                revisar todos los sucesos: funciona como condición bajo la cual algo se
                presenta como experiencia objetiva.
              </p>
            </div>
          </section>

          <section id="filosofia">
            <AnalyticEditorialHeading n="06" eyebrow="La disciplina cambia de lugar" className="ac1910-heading">
              De «Reina de las Ciencias» a examen de condiciones
            </AnalyticEditorialHeading>

            <div className="ac1910-big-question">
              <span>PROBLEMA HISTÓRICO</span>
              <h3>¿Qué puede hacer la filosofía si las ciencias avanzan sin esperar a la metafísica?</h3>
            </div>

            <div className="ac1910-compare">
              <article>
                <span>GLOCK</span>
                <h3>Metafísica trascendental</h3>
                <p>
                  No describe objetos suprasensibles: reflexiona sobre condiciones no
                  empíricas bajo las cuales conocemos objetos empíricos.
                </p>
              </article>
              <article>
                <span>LECTURA DOCENTE</span>
                <h3>Una reducción progresiva de función</h3>
                <p>
                  La clase conecta Kant con el siglo XX: condiciones del pensamiento →
                  clarificación lógica → análisis del lenguaje. Esa línea es una
                  interpretación histórica del profesor, no una frase de Glock.
                </p>
              </article>
            </div>

            <div className="ac1910-warning">
              <span>TRASCENDENTAL ≠ TRASCENDENTE</span>
              <p>
                Kant conserva una metafísica de las condiciones de experiencia y rechaza
                la pretensión de conocer, como objetos, Dios, alma u otras realidades
                situadas más allá de toda experiencia posible.
              </p>
            </div>
          </section>

          <section id="idealismo">
            <AnalyticEditorialHeading n="07" eyebrow="Después de Kant" className="ac1910-heading">
              La tensión de la cosa en sí abre nuevas estrategias
            </AnalyticEditorialHeading>

            <div className="ac1910-schema-panel">
              <span>ESQUEMA HISTÓRICO · GLOCK + CLASE</span>
              <AnimatedConceptSchema schema={postKantSchema} />
            </div>

            <div className="ac1910-provenance is-source">
              <span>GLOCK</span>
              <p>
                El idealismo trascendental conserva objetos independientes de la mente,
                pero limita nuestro conocimiento a apariencias estructuradas por formas y
                categorías. Glock señala la tensión de hablar de cosas en sí que afectan
                al sujeto cuando la causalidad vale para apariencias.
              </p>
            </div>

            <div className="ac1910-provenance is-class">
              <span>CLASE · IDEALISMO ALEMÁN</span>
              <p>
                El profesor presenta la radicalización idealista como el paso de conservar
                un mundo nouménico incognoscible a privilegiar una realidad racional o
                espiritual. El ejemplo de «la silla como concepto» es una analogía
                pedagógica extrema y no una definición literal de Hegel.
              </p>
            </div>

            <div className="ac1910-reactions">
              <article>
                <span>REACCIÓN 01</span>
                <h3>Naturalismo</h3>
                <p>
                  Glock: prioridad de conocimiento a posteriori y sospecha ante disciplinas
                  a priori. La clase amplía la genealogía hacia Galileo, Newton y Comte;
                  esa ampliación no debe confundirse con el alcance exacto del pasaje.
                </p>
              </article>
              <article>
                <span>REACCIÓN 02</span>
                <h3>Neokantismo</h3>
                <p>
                  Retorno a Kant: la filosofía no compite con las ciencias especiales,
                  sino que clarifica condiciones lógicas, conceptuales y metodológicas.
                  Cohen y Marburgo aparecen como ejemplo posterior.
                </p>
              </article>
            </div>

            <div className="ac1910-note">
              <strong>Precisión cronológica:</strong>
              <p>
                Glock sitúa el colapso del idealismo después de la muerte de Hegel en
                <b> 1831</b>. La sesión menciona la Escuela de Marburgo como desarrollo
                neokantiano posterior; no como si Cohen encabezara el movimiento desde 1835.
              </p>
            </div>
          </section>

          <section id="cierre">
            <AnalyticEditorialHeading n="08" eyebrow="Punto de corte" className="ac1910-heading">
              La lectura se detuvo al comenzar la página 46
            </AnalyticEditorialHeading>

            <div className="ac1910-final">
              <span>CONTINUACIÓN</span>
              <strong>El siguiente apartado entra en matemáticas y lógica.</strong>
              <p>
                La formulación oral del título no quedó suficientemente clara y la página
                completa todavía no forma parte del material archivado. No se reconstruye
                el encabezado como si estuviera verificado.
              </p>
            </div>

            <div className="ac1910-task">
              <span>TAREA / LECTURA</span>
              <strong>No se registró una tarea nueva formulada explícitamente.</strong>
              <p>
                La sesión cerró en el punto de transición hacia el siguiente apartado.
              </p>
            </div>

            <div className="ac1910-actions">
              <Link to="/semestre/5/filosofia-analitica/lectura/glock-capitulo-2">
                CONTINUAR EN EL SISTEMA 2D ↗
              </Link>
              <Link to="/semestre/5/filosofia-analitica">
                VOLVER AL CURSO
              </Link>
            </div>
          </section>
        </article>
      </div>

      <footer className="ac1910-footer">
        <span>FI264 · Filosofía Analítica · 19 octubre 2026</span>
        <span>Glock · capítulo II · pp. 40–46</span>
        <Link to="/semestre/5/filosofia-analitica">Índice del curso →</Link>
      </footer>
    </main>
  )
}
