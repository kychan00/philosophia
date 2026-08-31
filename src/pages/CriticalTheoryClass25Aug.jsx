import { useState } from 'react'
import { Link } from 'react-router'

const sections = [
  ['00', 'instituto', 'Instituto, no doctrina homogénea'],
  ['01', 'conciencia', 'Conciencia de clase y fascismo'],
  ['02', 'exilio', 'Exilio y pensamiento transnacional'],
  ['03', 'primera', 'Primera generación'],
  ['04', 'revolucion', 'Revolución y movimiento estudiantil'],
  ['05', 'generaciones', 'De Habermas a Hartmut Rosa'],
  ['06', 'totalidad', 'Sociedad, totalidad y transdisciplina'],
  ['07', 'astrologia', 'Astrología como laboratorio crítico'],
  ['08', 'cultura', 'Cultura, ideología y contradicción'],
  ['09', 'conceptos', 'Cinco conceptos para continuar'],
]

const exileRoute = [
  ['Frankfurt', 'Instituto para la Investigación Social', '1920s–1930s'],
  ['Ginebra', 'Primer desplazamiento institucional', 'exilio'],
  ['París', 'Tránsito europeo ante el avance nazi', 'exilio'],
  ['Nueva York', 'Recepción académica e investigación social', 'Estados Unidos'],
  ['Los Ángeles', 'Cultura de masas, cine, radio y vida estadounidense', 'costa oeste'],
  ['Frankfurt', 'Regreso parcial del Instituto', 'años cincuenta'],
]

const generations = [
  {
    n: 'I',
    title: 'Primera generación',
    author: 'Horkheimer · Adorno · Marcuse · Benjamin · Fromm',
    thesis:
      'Núcleo fundacional estudiado en el curso: capitalismo, fascismo, cultura, subjetividad, dominación y contradicción social.',
  },
  {
    n: 'II',
    title: 'Segunda generación',
    author: 'Jürgen Habermas',
    thesis:
      'Desplaza el centro hacia lenguaje, comunicación, pragmatismo, democracia y acción comunicativa.',
  },
  {
    n: 'III',
    title: 'Tercera generación',
    author: 'Axel Honneth',
    thesis:
      'La tradición continúa mediante la teoría del reconocimiento y una nueva gramática de los conflictos sociales.',
  },
  {
    n: 'IV',
    title: 'Cuarta generación / desarrollos contemporáneos',
    author: 'Hartmut Rosa',
    thesis:
      'Aceleración social, alienación, temporalidad y resonancia reabren problemas de la relación entre individuo y sociedad.',
  },
]

const dimensions = [
  ['económica', 'producción · clase · trabajo · propiedad'],
  ['política', 'Estado · poder · instituciones · autoritarismo'],
  ['cultural', 'medios · lenguaje · entretenimiento · ideología'],
  ['objetiva', 'estructuras · instituciones · condiciones materiales'],
  ['subjetiva', 'deseo · conciencia · identidad · personalidad'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Head({ n, eye, children }) {
  return (
    <>
      <span className="ct25-number">{n}</span>
      <p className="ct25-eyebrow">{eye}</p>
      <h2>{children}</h2>
    </>
  )
}

export default function CriticalTheoryClass25Aug() {
  const [classView, setClassView] = useState('objective')
  const [exileIndex, setExileIndex] = useState(0)
  const [generationIndex, setGenerationIndex] = useState(0)
  const [dimensionIndex, setDimensionIndex] = useState(0)
  const [astroView, setAstroView] = useState('social')

  const generation = generations[generationIndex]
  const dimension = dimensions[dimensionIndex]

  return (
    <main className="ct-class-page ct25-page">
      <nav className="ct-class-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ct-class-brand">Φ · Philosophia</Link>
        <span>XXV · VIII · MMXXVI</span>
      </nav>

      <header className="ct25-hero">
        <div className="ct25-hero-grid" aria-hidden="true" />
        <div className="ct25-hero-copy">
          <p>Teoría Crítica · Tercera clase · 25 de agosto</p>
          <h1>Instituto, exilio <em>y totalidad social</em></h1>
          <p className="ct25-lead">
            De la crisis de la conciencia de clase y el ascenso del fascismo a
            una teoría social transnacional, transdisciplinaria y atenta a las
            contradicciones entre las promesas modernas y el sufrimiento real.
          </p>

          <div className="ct25-hero-axis">
            <span>clase</span><b>→</b><span>ideología</span><b>→</b>
            <span>cultura</span><b>+</b><span>psicología</span><b>→</b>
            <strong>totalidad</strong>
          </div>
        </div>

        <aside className="ct25-hero-card">
          <span>PREGUNTA ORGANIZADORA</span>
          <strong>
            ¿Por qué una persona o un grupo puede actuar políticamente contra
            sus propios intereses materiales?
          </strong>
          <p>
            Esa pregunta obliga a estudiar no sólo economía, sino también
            conciencia, ideología, autoridad, cultura y subjetividad.
          </p>
        </aside>
      </header>

      <div className="ct25-layout">
        <aside className="ct25-index">
          <p>Index lectionis</p>
          {sections.map(([n, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ct25-article">
          <section id="instituto">
            <Head n="00" eye="Nomen et institutum">“Escuela de Frankfurt” no significa doctrina homogénea</Head>
            <p>
              La clase comienza corrigiendo una simplificación habitual. El
              nombre “Escuela de Frankfurt” fue popularizado posteriormente,
              entre otros, por Martin Jay; los propios integrantes se entendían
              ante todo como miembros del <strong>Instituto para la Investigación
              Social</strong>.
            </p>

            <div className="ct25-not-school">
              <article>
                <span>LA PALABRA “ESCUELA” PUEDE SUGERIR</span>
                <strong>una doctrina común y homogénea</strong>
                <p>Un mismo sistema, tesis idénticas y una única voz filosófica.</p>
              </article>
              <b>≠</b>
              <article className="core">
                <span>LO QUE ENCONTRAMOS</span>
                <strong>un proyecto colectivo con diferencias internas</strong>
                <p>
                  Horkheimer, Adorno, Marcuse, Fromm y Benjamin comparten
                  problemas y referencias, pero desarrollan posiciones propias.
                </p>
              </article>
            </div>

            <div className="ct25-callout">
              <span>Regla de lectura</span>
              <strong>
                Distinguir siempre el trabajo colectivo del Instituto de la
                individualidad intelectual de cada autor.
              </strong>
            </div>
          </section>

          <section id="conciencia">
            <Head n="01" eye="Classis et conscientia">La conciencia de clase dejó de parecer automática</Head>
            <p>
              El ascenso del nazismo obligó a revisar la expectativa de que una
              posición económica produjera por sí sola una conciencia política
              correspondiente. Amplios sectores trabajadores y medios podían
              apoyar proyectos contrarios a sus intereses materiales.
            </p>

            <div className="ct25-toggle">
              <button
                type="button"
                className={classView === 'objective' ? 'active' : ''}
                onClick={() => setClassView('objective')}
              >
                Posición objetiva
              </button>
              <button
                type="button"
                className={classView === 'subjective' ? 'active' : ''}
                onClick={() => setClassView('subjective')}
              >
                Identificación subjetiva
              </button>
            </div>

            <div className="ct25-class-lab">
              {classView === 'objective' ? (
                <>
                  <span>CONDICIÓN MATERIAL</span>
                  <h3>Dependo de vender mi trabajo para vivir</h3>
                  <p>
                    La posición de clase se analiza a partir de las condiciones
                    materiales de existencia, no sólo desde cómo alguien se
                    describe a sí mismo.
                  </p>
                </>
              ) : (
                <>
                  <span>CONCIENCIA / IDEOLOGÍA</span>
                  <h3>Puedo imaginarme perteneciendo a otra clase</h3>
                  <p>
                    La subjetividad puede identificarse con valores e intereses
                    de grupos cuya posición material es distinta. Aquí aparece
                    el problema de la <strong>falsa conciencia</strong>.
                  </p>
                </>
              )}
            </div>

            <div className="ct25-flow">
              <div><span>POSICIÓN MATERIAL</span><strong>clase</strong></div>
              <b>→</b>
              <div className="warning"><span>MEDIACIÓN</span><strong>ideología · cultura · psicología</strong></div>
              <b>→</b>
              <div><span>CONCIENCIA</span><strong>orientación política</strong></div>
              <b>→</b>
              <div><span>CONDUCTA</span><strong>apoyo · obediencia · protesta</strong></div>
            </div>

            <aside className="ct25-note">
              <strong>El fascismo como problema teórico</strong>
              <p>
                La pregunta ya no puede ser sólo “¿qué lugar ocupa alguien en
                la producción?”, sino también “¿cómo se producen sus deseos,
                identificaciones, miedos y formas de obediencia?”.
              </p>
            </aside>
          </section>

          <section id="exilio">
            <Head n="02" eye="Exilium">El Instituto se vuelve transnacional</Head>
            <p>
              La vulnerabilidad de sus integrantes —muchos judíos, intelectuales
              de izquierda y vinculados con el marxismo— llevó a Horkheimer a
              desplazar recursos y actividades antes de la consolidación total
              del régimen nazi.
            </p>

            <div className="ct25-exile-route">
              {exileRoute.map(([city, note, time], index) => (
                <button
                  type="button"
                  key={`${city}-${index}`}
                  className={exileIndex === index ? 'active' : ''}
                  onClick={() => setExileIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{city}</strong>
                  <small>{time}</small>
                </button>
              ))}
            </div>

            <div className="ct25-exile-focus">
              <span>{exileRoute[exileIndex][0]}</span>
              <strong>{exileRoute[exileIndex][1]}</strong>
              <p>
                La ruta Frankfurt → Ginebra → París → Nueva York → Los Ángeles
                → regreso parcial a Frankfurt muestra por qué la primera Teoría
                Crítica no puede reducirse a una experiencia exclusivamente alemana.
              </p>
            </div>

            <div className="ct25-us-grid">
              <article>
                <span>ESTADOS UNIDOS</span>
                <strong>capitalismo avanzado observado desde dentro</strong>
                <p>
                  Cine, radio, prensa, publicidad, entretenimiento y consumo se
                  vuelven materiales filosófico-sociales de primer orden.
                </p>
              </article>
              <article>
                <span>CONDICIÓN MIGRANTE</span>
                <strong>comparar sociedades concretas</strong>
                <p>
                  Alemania, Francia, Estados Unidos y la Unión Soviética aparecen
                  dentro de un mismo horizonte de análisis de la modernidad.
                </p>
              </article>
            </div>
          </section>

          <section id="primera">
            <Head n="03" eye="Prima generatio">Biografías que modifican la teoría</Head>

            <div className="ct25-people">
              <article><span>HORKHEIMER</span><strong>organización y exilio</strong><p>Detecta tempranamente el peligro nazi y protege la continuidad institucional.</p></article>
              <article><span>FROMM</span><strong>psicoanálisis y separación</strong><p>Participa en los primeros proyectos y luego se distancia teóricamente del grupo.</p></article>
              <article><span>MARCUSE</span><strong>marxismo + psicoanálisis</strong><p>Permanece en Estados Unidos y se vuelve referencia de la Nueva Izquierda.</p></article>
              <article><span>BENJAMIN</span><strong>cercanía sin pertenencia institucional simple</strong><p>Su trayectoria europea termina trágicamente en Portbou durante la huida del nazismo.</p></article>
              <article><span>ADORNO</span><strong>regreso y conflicto estudiantil</strong><p>Vuelve a Frankfurt, se convierte en profesor central y mantiene una relación crítica con la protesta.</p></article>
            </div>

            <div className="ct25-return">
              <span>POSGUERRA</span>
              <strong>Horkheimer + Adorno → Frankfurt</strong>
              <b>·</b>
              <strong>Marcuse → Estados Unidos</strong>
            </div>
          </section>

          <section id="revolucion">
            <Head n="04" eye="Praxis et negatio">¿Toda protesta es una revolución?</Head>
            <p>
              La relación de Adorno con el movimiento estudiantil alemán obliga
              a distinguir radicalidad teórica, protesta cultural y transformación
              material del proceso productivo.
            </p>

            <div className="ct25-revolution">
              <article>
                <span>ESTUDIANTES</span>
                <strong>protesta · ocupación · transformación cultural</strong>
                <p>La teoría crítica de la dominación alimenta la exigencia de una práctica transformadora.</p>
              </article>
              <div className="ct25-revolution-center">
                <span>PROBLEMA</span>
                <strong>¿quién posee capacidad material para detener la producción?</strong>
              </div>
              <article>
                <span>HERENCIA MARXISTA</span>
                <strong>clase trabajadora · huelga general</strong>
                <p>Una transformación económica radical exige intervenir en el proceso de producción y en la producción de valor.</p>
              </article>
            </div>

            <div className="ct25-strike">
              <span>TRABAJO</span><b>→</b><span>PRODUCCIÓN</span><b>→</b>
              <span>VALOR</span><b>→</b><span>SISTEMA</span>
              <strong>HUELGA GENERAL = interrupción material de la cadena</strong>
            </div>

            <aside className="ct25-note">
              <strong>Adorno también critica a la protesta</strong>
              <p>
                Su experiencia del nazismo alimentaba el temor de que ciertas
                acciones facilitaran una respuesta estatal represiva. Una
                intención revolucionaria no eliminaba la obligación de pensar
                críticamente las consecuencias.
              </p>
            </aside>
          </section>

          <section id="generaciones">
            <Head n="05" eye="Traditio mutata">Continuidad institucional ≠ continuidad teórica idéntica</Head>

            <div className="ct25-generations-tabs">
              {generations.map((item, index) => (
                <button
                  type="button"
                  key={item.n}
                  className={generationIndex === index ? 'active' : ''}
                  onClick={() => setGenerationIndex(index)}
                >
                  <span>{item.n}</span>{item.title}
                </button>
              ))}
            </div>

            <div className="ct25-generation-focus">
              <span>{generation.n}</span>
              <div>
                <small>{generation.title}</small>
                <h3>{generation.author}</h3>
                <p>{generation.thesis}</p>
              </div>
            </div>

            <div className="ct25-break">
              <span>TESIS DE LA CLASE</span>
              <strong>
                Que continúe el Instituto para la Investigación Social no
                significa que continúe exactamente la misma Teoría Crítica.
              </strong>
              <p>
                Habermas desplaza la tradición hacia comunicación, lenguaje y
                democracia; Honneth hacia reconocimiento; Rosa recupera problemas
                de alienación, aceleración y relación sujeto-sociedad.
              </p>
            </div>
          </section>

          <section id="totalidad">
            <Head n="06" eye="Societas tota">La Teoría Crítica como filosofía social</Head>
            <p>
              El objeto es la sociedad moderna en formas históricas concretas.
              “Sociedades avanzadas” significa aquí sociedades donde el
              capitalismo ha alcanzado un alto grado de desarrollo, no sociedades
              moralmente superiores.
            </p>

            <div className="ct25-ussr">
              <article><span>CAPITALISMO OCCIDENTAL</span><strong>mercado · propiedad · industria · consumo</strong></article>
              <b>CRÍTICA</b>
              <article><span>“SOCIALISMO REALMENTE EXISTENTE”</span><strong>burocracia · explotación · represión · capitalismo de Estado</strong></article>
            </div>

            <h3 className="ct25-subtitle">Punto de vista de la totalidad</h3>
            <div className="ct25-dimensions">
              {dimensions.map(([name], index) => (
                <button
                  key={name}
                  type="button"
                  className={dimensionIndex === index ? 'active' : ''}
                  onClick={() => setDimensionIndex(index)}
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="ct25-dimension-focus">
              <span>{dimension[0]}</span>
              <strong>{dimension[1]}</strong>
              <p>Ninguna dimensión basta por sí sola. La totalidad exige estudiar sus mediaciones con todas las demás.</p>
            </div>

            <div className="ct25-disciplines">
              {['Filosofía','Sociología','Psicología','Psicoanálisis','Economía','Historia','Ciencia política']
                .map((item) => <span key={item}>{item}</span>)}
              <strong>INVESTIGACIÓN SOCIAL CRÍTICA</strong>
            </div>

            <div className="ct25-methods">
              <article><span>FILOSOFÍA</span><strong>conceptos · argumentos · crítica</strong></article>
              <b>+</b>
              <article><span>CIENCIAS SOCIALES</span><strong>encuestas · entrevistas · datos · contenido · discurso</strong></article>
              <b>→</b>
              <article className="core"><span>MÉTODO</span><strong>transdisciplinario + empírico</strong></article>
            </div>
          </section>

          <section id="astrologia">
            <Head n="07" eye="Experimentum criticum">La astrología como caso de investigación social</Head>
            <p>
              El ejemplo de Adorno muestra que la pregunta crítica no es
              simplemente si la astrología es verdadera o falsa. El problema es
              qué función cumple dentro de una sociedad concreta y qué tipo de
              sujeto ayuda a producir.
            </p>

            <div className="ct25-toggle">
              <button
                type="button"
                className={astroView === 'social' ? 'active' : ''}
                onClick={() => setAstroView('social')}
              >
                Causas sociales
              </button>
              <button
                type="button"
                className={astroView === 'astrology' ? 'active' : ''}
                onClick={() => setAstroView('astrology')}
              >
                Explicación astrológica
              </button>
            </div>

            <div className={`ct25-astro ${astroView}`}>
              {astroView === 'social' ? (
                <>
                  <span>CRISIS / PRECARIEDAD / DESEMPLEO / INSEGURIDAD</span>
                  <strong>La situación posee causas económicas, políticas y sociales.</strong>
                  <p>El sujeto puede investigar estructuras modificables y conservar una relación política con su situación.</p>
                </>
              ) : (
                <>
                  <span>SATURNO / VENUS / DESTINO</span>
                  <strong>La incertidumbre recibe una explicación psicológicamente estable.</strong>
                  <p>La tranquilidad puede aumentar, pero las causas sociales se desplazan y con ellas disminuye la percepción de agencia.</p>
                </>
              )}
            </div>

            <div className="ct25-astro-chain">
              <div><span>INSEGURIDAD</span><strong>situación difícil de controlar</strong></div>
              <b>→</b>
              <div><span>EXPLICACIÓN</span><strong>estabilidad subjetiva</strong></div>
              <b>→</b>
              <div className="warning"><span>DESPLAZAMIENTO</span><strong>causas sociales → destino</strong></div>
              <b>→</b>
              <div><span>EFECTO</span><strong>menor agencia política</strong></div>
            </div>

            <aside className="ct25-note">
              <strong>Importancia metodológica</strong>
              <p>
                Análisis de contenido + filosofía de la libertad, autonomía,
                ideología y conciencia: las ciencias sociales aportan métodos;
                la filosofía revisa críticamente conceptos, supuestos y categorías.
              </p>
            </aside>
          </section>

          <section id="cultura">
            <Head n="08" eye="Ideologia et contradictio">Ningún producto cultural es completamente neutral</Head>

            <div className="ct25-cultural">
              {['película','novela','revista','radio','canción','publicidad']
                .map((item) => (
                  <article key={item}>
                    <span>{item}</span>
                    <strong>¿qué mundo presenta como normal?</strong>
                  </article>
                ))}
            </div>

            <div className="ct25-question">
              <span>PREGUNTAS</span>
              <strong>amor · género · éxito · felicidad · destino · individuo · autoridad</strong>
            </div>

            <p>
              El análisis cultural conduce a la <strong>industria cultural</strong>:
              no sólo importa qué “dice” un producto, sino qué concepciones del
              mundo, hábitos y formas de adaptación social reproduce.
            </p>

            <div className="ct25-contradiction">
              <article>
                <span>PROMESA MODERNA</span>
                <strong>libertad · igualdad · fraternidad · racionalidad · progreso</strong>
              </article>
              <b>≠</b>
              <article className="warning">
                <span>REALIDAD SOCIAL</span>
                <strong>sufrimiento · explotación · violencia · exclusión · guerra · dominación</strong>
              </article>
            </div>

            <div className="ct25-unreconciled">
              <span>SOCIEDAD NO RECONCILIADA</span>
              <strong>
                La sociedad afirma universalidad y libertad mientras continúa
                produciendo condiciones que contradicen esas promesas.
              </strong>
            </div>

            <div className="ct25-ideology">
              <span>IDEOLOGÍA</span>
              <p>
                Una de sus formas consiste en presentar como reconciliada,
                armónica o igualitaria una sociedad que continúa atravesada por
                antagonismos reales.
              </p>
              <strong>Función de la crítica: hacer visible aquello que el orden social preferiría no mirar.</strong>
            </div>
          </section>

          <section id="conceptos">
            <Head n="09" eye="Proxima lectio">Cinco conceptos que abren la siguiente etapa</Head>
            <p>
              La clase cierra el recorrido histórico y metodológico señalando los
              conceptos que deben ubicarse para continuar el curso.
            </p>

            <div className="ct25-five">
              <article><span>01 · ADORNO</span><strong>Dialéctica negativa</strong><p>La contradicción no debe cerrarse mediante una reconciliación falsa.</p></article>
              <article><span>02 · HORKHEIMER + ADORNO</span><strong>Dialéctica de la Ilustración</strong><p>La racionalidad emancipadora puede invertirse en dominio.</p></article>
              <article><span>03 · HORKHEIMER</span><strong>Razón instrumental</strong><p>La razón queda reducida a calcular medios y deja de juzgar fines.</p></article>
              <article><span>04 · HORKHEIMER + ADORNO</span><strong>Industria cultural</strong><p>La cultura administrada puede reproducir adaptación y conformismo.</p></article>
              <article><span>05 · MARCUSE</span><strong>El hombre unidimensional</strong><p>La sociedad avanzada integra y neutraliza la oposición crítica.</p></article>
            </div>

            <div className="ct25-task-done">
              <div>
                <span>TAREA PARA LA SIGUIENTE CLASE · REALIZADA</span>
                <strong>Ubicar y profundizar los cinco conceptos</strong>
                <p>
                  La tarea queda vinculada a esta clase y conserva como fecha de
                  entrega el 27 de agosto.
                </p>
              </div>
              <Link to="/tareas/teoria-critica/escuela-de-frankfurt/conceptos">
                Abrir Lexicon Criticum →
              </Link>
            </div>

            <div className="ct25-final-chain">
              <span>NAZISMO</span><b>→</b><span>CRISIS DE CONCIENCIA DE CLASE</span><b>→</b>
              <span>IDEOLOGÍA / PSICOLOGÍA / CULTURA</span><b>→</b><span>TOTALIDAD</span><b>→</b>
              <span>CONTRADICCIÓN</span><b>→</b><strong>TEORÍA CRÍTICA</strong>
            </div>
          </section>
        </article>
      </div>

      <footer className="ct-class-footer">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <span>Institutum · Exilium · Totalitas</span>
        <span>XXV · VIII · MMXXVI</span>
      </footer>
    </main>
  )
}
