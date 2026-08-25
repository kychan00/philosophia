import { Link } from 'react-router'

const sections = [
  ['00', 'mapa', 'Mapa general'],
  ['01', 'humanidades', 'Filosofía como construcción consciente'],
  ['02', 'conocimiento', 'Conocimiento, sujeto y objeto'],
  ['03', 'pensar', 'Pensar y pensamiento'],
  ['04', 'logica', 'Conceptos, juicios y razonamientos'],
  ['05', 'lenguaje', 'Lenguaje, escritura y precisión'],
  ['06', 'lectura', 'Leer, preguntar y criticar'],
  ['07', 'actitud', 'Actitud filosófica'],
  ['08', 'objetividad', 'Objetividad y espiral comunicativa'],
  ['09', 'formacion', 'Formación y estado del arte'],
  ['10', 'busqueda', 'Búsqueda bibliográfica'],
  ['11', 'cierre', 'Secuencia metodológica'],
  ['12', 'continuacion', 'Continuación'],
]

const goToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function Heading({ number, eyebrow, children }) {
  return (
    <div className="methods-class-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

function Point({ n, title, children }) {
  return (
    <section className="methods24-point">
      <div className="methods24-point-number">{n}</div>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </section>
  )
}

export default function MethodsClass24Aug() {
  return (
    <main className="methods-class-page methods24-page">
      <nav className="methods-class-topbar">
        <Link to="/semestre/5/metodos-de-investigacion">
          ← Métodos de Investigación
        </Link>
        <Link to="/" className="methods-class-brand">
          Φ · Philosophia
        </Link>
        <span>XXIV · VIII · MMXXVI</span>
      </nav>

      <header className="methods-class-header methods24-header">
        <div className="methods-header-rules" aria-hidden="true" />
        <div className="methods-header-symbol" aria-hidden="true">§</div>
        <p className="methods-class-kicker">FI104 · Tercera sesión</p>
        <h1>
          Clase del
          <em>24 de agosto</em>
        </h1>
        <p className="methods-class-subtitle">
          De la actividad de pensar al pensamiento estructurado; de la lectura
          comprensiva a la crítica; y de la opinión privada al estado del arte
          como base de una investigación filosófica justificable.
        </p>
        <div className="methods-header-ornament">☙ ───── § ───── ❧</div>
      </header>

      <div className="methods-class-layout">
        <aside className="methods-index">
          <p>Index inquisitionis</p>
          <nav>
            {sections.map(([number, id, label]) => (
              <button key={id} type="button" onClick={() => goToSection(id)}>
                <span>{number}</span>
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <article className="methods-article">
          <section id="mapa" className="methods-section">
            <Heading number="00" eyebrow="Argumentum">
              El hilo completo de la sesión
            </Heading>
            <div className="methods24-master-flow">
              <span>actitud filosófica</span><b>→</b>
              <span>lectura</span><b>→</b>
              <span>conceptos</span><b>→</b>
              <span>juicios</span><b>→</b>
              <span>razonamientos</span><b>→</b>
              <span>comunicación</span><b>→</b>
              <span>revisión</span><b>→</b>
              <span>estado del arte</span><b>→</b>
              <span>objeto de estudio</span>
            </div>
            <div className="methods-thesis">
              <span>Idea rectora</span>
              <p>
                La investigación filosófica no consiste en opinar, sino en
                construir conocimiento justificable. Para ello hay que aprender
                a pensar con precisión, leer seriamente, argumentar, comunicar,
                revisar y situar la propia investigación dentro de lo que otros
                ya han estudiado.
              </p>
            </div>
          </section>

          <section id="humanidades" className="methods-section">
            <Heading number="01" eyebrow="Humanitas">
              La filosofía como construcción consciente
            </Heading>

            <Point n="01" title="Las capacidades humanas no aparecen automáticamente">
              <p>
                La sesión comienza con una reflexión general sobre la formación
                filosófica y las humanidades. El profesor contrapone la facilidad
                relativa con que pueden construirse objetos técnicos —semáforos,
                carreteras, computadoras o sistemas— con la dificultad de formar
                capacidades humanas como la empatía, la reflexión, la conciencia
                de uno mismo y la comprensión del otro.
              </p>
              <p>
                El punto no es oponer técnica y humanidades, sino mostrar que hay
                dimensiones humanas que requieren cultivo deliberado. La filosofía
                pertenece a ese trabajo consciente de formación.
              </p>
            </Point>

            <Point n="02" title="Retoma de la lectura anterior">
              <p>
                Después de pasar lista, el profesor pide una síntesis de la lectura
                dejada como tarea. Un alumno señala que el texto complementa la figura
                de la espiral explicada en la clase anterior y añade rasgos propios
                de quien realiza investigación filosófica.
              </p>
              <p>
                Antes de enumerar esas características, el profesor decide detenerse
                en una pregunta previa: qué debe entenderse por conocimiento.
              </p>
            </Point>
          </section>

          <section id="conocimiento" className="methods-section">
            <Heading number="02" eyebrow="Cognitio">
              Conocimiento, sujeto, objeto y concepto
            </Heading>

            <Point n="03" title="La definición clásica de conocimiento">
              <p>
                Se recuerda la definición clásica, de raíz platónica:
                <strong> conocimiento = creencia verdadera y justificada</strong>.
                No basta creer algo. Lo creído debe ser verdadero y, además,
                justificable mediante razones.
              </p>
              <p>
                Esta distinción permite separar la investigación filosófica de la
                mera opinión, de la intuición vaga o de la repetición de lo que se
                escuchó decir a otra persona.
              </p>
            </Point>

            <Point n="04" title="Conocimiento: relación entre sujeto y objeto">
              <p>
                El profesor corrige una confusión surgida anteriormente sobre una
                supuesta epistemología “subjetiva” y otra “objetiva”. La formulación
                precisa es: <strong>no hay dos epistemologías; hay epistemología</strong>,
                porque el conocimiento ya implica una relación entre quien conoce y
                aquello que es conocido.
              </p>
              <div className="methods24-schema">
                <span>SUJETO</span><b>→</b><span>IMAGEN / CONCEPTO</span><b>→</b><span>OBJETO</span>
              </div>
            </Point>

            <Point n="05" title="Lo psicológico y lo ontológico">
              <p>
                En lugar de limitarse a la oposición subjetivo/objetivo, el profesor
                propone distinguir entre un plano <strong>psicológico</strong> y uno
                <strong> ontológico</strong>. Lo psicológico comprende los procesos
                del sujeto que conoce; lo ontológico, aquello que existe y las
                propiedades del objeto.
              </p>
              <p>El conocimiento aparece en el encuentro entre ambos planos.</p>
            </Point>

            <Point n="06" title="El concepto como mediación">
              <p>
                El concepto ocupa una posición central. Es elaborado por el sujeto,
                pero pretende corresponder con rasgos reales del objeto. Por eso
                funciona como mediación entre ambos.
              </p>
              <p>
                En investigación filosófica, los conceptos deben hacerse cada vez
                más precisos, comunicables, justificables y adecuados al objeto.
              </p>
            </Point>
          </section>

          <section id="pensar" className="methods-section">
            <Heading number="03" eyebrow="Psychologia · Logica">
              Pensar no es lo mismo que pensamiento
            </Heading>

            <Point n="07" title="Actividad y resultado">
              <p>
                El profesor introduce una distinción decisiva:
                <strong> pensar</strong> es una actividad; <strong>pensamiento</strong>
                es el resultado estructurado de esa actividad.
              </p>
              <div className="methods24-dual">
                <article><span>PENSAR</span><p>Proceso psicológico, temporal y dinámico.</p></article>
                <article><span>PENSAMIENTO</span><p>Contenido organizado y susceptible de análisis lógico.</p></article>
              </div>
            </Point>

            <Point n="08" title="El pensar como proceso psicológico">
              <p>
                Se lee un pasaje cuyo autor no queda plenamente identificable en la
                grabación. La idea es que el pensar, en cuanto actividad psíquica,
                pertenece al campo de la psicología.
              </p>
              <p>
                A la psicología le interesan aspectos como el tiempo que tarda una
                persona, emociones, recuerdos, deseos, distracciones, cansancio o
                dificultades de memoria.
              </p>
            </Point>

            <Point n="09" title="La lógica estudia el pensamiento">
              <p>
                La lógica abstrae esas circunstancias psicológicas y examina el
                producto estructurado: una demostración, un argumento o una relación
                entre proposiciones.
              </p>
              <div className="methods24-callout">
                <span>Distinción</span>
                <strong>Psicología → estudia el pensar · Lógica → estudia el pensamiento.</strong>
              </div>
            </Point>

            <Point n="10" title="El ejemplo artístico">
              <p>
                El profesor recurre a un ejemplo semejante a una obra de Dalí.
                Psicológicamente podrían interesarnos las emociones o circunstancias
                del artista. Sin embargo, para analizar la estructura del objeto
                pueden ser más relevantes su composición, relaciones internas,
                representación y significado.
              </p>
              <p>
                La lección metodológica es que investigar también implica separar
                aquello que resulta pertinente de aquello que no lo es para el
                problema concreto.
              </p>
            </Point>

            <Point n="11" title="Seleccionar, no simplemente discriminar">
              <p>
                Durante la discusión aparece la palabra “discriminación”, pero el
                profesor prefiere <strong>selección</strong>, porque expresa mejor
                la operación metodológica sin añadir una carga moral o social ajena
                al problema.
              </p>
            </Point>
          </section>

          <section id="logica" className="methods-section">
            <Heading number="04" eyebrow="Argumentum">
              Conceptos, juicios y razonamientos
            </Heading>

            <Point n="12" title="La demostración es un razonamiento">
              <p>
                Una demostración no es una simple acumulación de afirmaciones.
                Es un razonamiento: un conjunto de juicios o proposiciones enlazados
                de manera que unas afirmaciones sirven de apoyo a otras.
              </p>
              <div className="methods24-proof">
                <span>Premisa 1</span><span>Premisa 2</span><hr /><strong>Conclusión</strong>
              </div>
            </Point>

            <Point n="13" title="De conceptos a juicios y de juicios a razonamientos">
              <div className="methods24-schema">
                <span>CONCEPTOS</span><b>→</b>
                <span>JUICIOS</span><b>→</b>
                <span>RAZONAMIENTOS</span><b>→</b>
                <span>PENSAMIENTO</span>
              </div>
              <p>
                Los conceptos son materiales básicos; con ellos formulamos juicios,
                y relacionando juicios construimos razonamientos.
              </p>
            </Point>

            <Point n="14" title="El juicio y la precisión">
              <p>
                Se recuerda la forma clásica sujeto–predicado:
                <strong> S — P</strong>. “El niño juega” es una oración posible,
                pero dependiendo del problema quizá haga falta precisar:
                “El niño juega a la pelota en el patio de la casa”.
              </p>
              <p>
                La enseñanza metodológica es que la precisión lingüística modifica
                también la precisión con la que construimos el objeto.
              </p>
            </Point>
          </section>

          <section id="lenguaje" className="methods-section">
            <Heading number="05" eyebrow="Scriptura">
              Lenguaje, escritura y construcción del objeto
            </Heading>

            <Point n="15" title="Antes de escribir filosofía hay que saber escribir">
              <p>
                El profesor insiste en que una buena intuición no basta. Si la frase
                está mal construida puede ser ambigua, inducir interpretaciones
                distintas o impedir reconocer qué se está afirmando exactamente.
              </p>
              <p>
                El investigador será conocido principalmente a través de aquello que
                escribe. Por eso escribir bien forma parte del trabajo filosófico.
              </p>
            </Point>

            <Point n="16" title="Precisión y objeto de investigación">
              <p>
                Si no podemos formular con precisión qué estamos investigando,
                tampoco podemos construir adecuadamente nuestro objeto de estudio.
                No vale suponer que los demás entenderán automáticamente aquello que
                uno “tenía en mente”.
              </p>
            </Point>

            <Point n="17" title="Oralidad y escritura">
              <p>
                La formación investigativa incluye varias formas de comunicación:
                escritura, exposición oral, preguntas, discusión y escucha académica.
                El filósofo debe ser capaz de trasladar sus ideas entre esos registros
                sin perder precisión.
              </p>
            </Point>

            <Point n="18" title="Saber preguntar">
              <p>
                En congresos, coloquios y conferencias no conviene preguntar sólo por
                intervenir. Una buena pregunta debe mostrar comprensión, lectura,
                pertinencia y precisión.
              </p>
            </Point>
          </section>

          <section id="lectura" className="methods-section">
            <Heading number="06" eyebrow="Lectio">
              Leer antes de criticar
            </Heading>

            <Point n="19" title="La primera fuente antes de la objeción">
              <p>
                El profesor recupera una enseñanza de uno de sus maestros:
                <strong> antes de criticar a un autor hay que leerlo</strong>.
                Una objeción lanzada desde una frase aislada puede fallar porque el
                autor ya respondió ese problema, porque se sacó algo de contexto o
                porque la interpretación inicial era incorrecta.
              </p>
            </Point>

            <Point n="20" title="Tres lecturas de un texto filosófico">
              <div className="methods24-three-readings">
                <article><span>I</span><strong>Comprender</strong><p>Leer sin apresurarse a criticar; empaparse del problema y de la posición del autor.</p></article>
                <article><span>II</span><strong>Aclarar</strong><p>Identificar conceptos, pasajes difíciles, relaciones y puntos oscuros.</p></article>
                <article><span>III</span><strong>Interrogar</strong><p>Formular preguntas, objeciones, comparaciones y revisar los argumentos.</p></article>
              </div>
            </Point>

            <Point n="21" title="Sócrates y el diálogo">
              <p>
                La tercera lectura se relaciona con el método socrático. Preguntar no
                busca únicamente derrotar al interlocutor, sino llevarlo a examinar
                sus propias afirmaciones, descubrir contradicciones y reformularlas.
              </p>
            </Point>
          </section>

          <section id="actitud" className="methods-section">
            <Heading number="07" eyebrow="Habitus philosophicus">
              La actitud filosófica
            </Heading>

            <Point n="22" title="Curiosidad, asombro y antidogmatismo">
              <p>
                Quien investiga filosóficamente necesita curiosidad, asombro, apertura,
                disposición a preguntar y una actitud antidogmática. La filosofía
                comienza cuando algo deja de darse simplemente por sentado.
              </p>
            </Point>

            <Point n="23" title="La metáfora del recipiente">
              <p>
                Si un recipiente está completamente lleno, ya no puede recibir nada
                más. Del mismo modo, una persona convencida de que ya sabe todo deja
                de aprender. Siempre debe quedar espacio para la duda.
              </p>
            </Point>

            <Point n="24" title="No sólo qué pensamos, sino por qué lo pensamos">
              <p>
                La filosofía no se conforma con registrar opiniones. Pregunta por las
                razones: qué evidencia existe, cómo se justifica una afirmación,
                de dónde proviene una idea y si puede ser discutida públicamente.
              </p>
            </Point>
          </section>

          <section id="objetividad" className="methods-section">
            <Heading number="08" eyebrow="Communicatio">
              Objetividad, comunicación y revisión
            </Heading>

            <Point n="25" title="Qué significa conocimiento objetivo">
              <p>
                La lectura habla de conocimiento objetivo, pero el profesor aclara que
                objetividad no significa borrar completamente al sujeto. Significa
                construir razones que puedan comunicarse, compartirse y evaluarse más
                allá de una experiencia meramente privada.
              </p>
            </Point>

            <Point n="26" title="La espiral comunicativa">
              <div className="methods24-spiral">
                <span>idea</span><b>→</b><span>comunicación</span><b>→</b>
                <span>revisión</span><b>→</b><span>corrección</span><b>→</b>
                <span>nueva formulación</span><b>↺</b>
              </div>
              <p>
                El conocimiento profesional se construye mediante ese ciclo de
                propuesta, examen, corrección y nueva comunicación.
              </p>
            </Point>

            <Point n="27" title="Objetivar una idea">
              <p>
                Una intuición puede comenzar siendo sólo mía. Cuando la comunico,
                otros pueden cuestionarla, mostrar dificultades y obligarme a
                reformularla. Esa exposición pública la hace más objetivable.
              </p>
            </Point>

            <Point n="28" title="Opinión no es conocimiento">
              <p>
                Decir “lo escuché” no equivale a justificar una afirmación. Puede ser
                una opinión, una repetición o incluso un rumor. La filosofía exige
                razones.
              </p>
            </Point>

            <Point n="29" title="Las opiniones, por sí solas, no son filosofía">
              <p>
                Cualquiera puede tener opiniones. La formación filosófica busca algo
                más exigente: explicación, conocimiento y justificación racional.
              </p>
            </Point>

            <Point n="30" title="Filosofía e investigación científica">
              <p>
                Filosofía y ciencia comparten un origen en el asombro y una voluntad
                de explicar problemas, aunque construyen tipos distintos de teoría:
                teorías científicas y teorías filosóficas.
              </p>
            </Point>

            <Point n="31" title="La investigación es falible">
              <p>
                La investigación filosófica puede equivocarse. Sus argumentos,
                conceptos y teorías pueden ser corregidos y mejorados. Esa
                falibilidad no destruye la investigación: hace posible su avance.
              </p>
            </Point>

            <Point n="32" title="Contra la imagen de un conocimiento absoluto">
              <p>
                El conocimiento humano no debe imaginarse como un sistema totalmente
                cerrado, definitivo y atemporal. La espiral metodológica implica
                revisión constante.
              </p>
            </Point>
          </section>

          <section id="formacion" className="methods-section">
            <Heading number="09" eyebrow="Status quaestionis">
              Leer a otros y construir el estado del arte
            </Heading>

            <Point n="33" title="Cuatro razones para leer a otros filósofos">
              <div className="methods24-four-reasons">
                <article><span>01</span><strong>Aprender</strong><p>Incorporar ideas valiosas o argumentos ya logrados.</p></article>
                <article><span>02</span><strong>Avanzar</strong><p>Partir de lo ya investigado en vez de comenzar siempre desde cero.</p></article>
                <article><span>03</span><strong>Corregir</strong><p>Detectar errores o insuficiencias y proponer mejoras.</p></article>
                <article><span>04</span><strong>Señalar</strong><p>Mostrar un problema abierto aunque todavía no podamos resolverlo.</p></article>
              </div>
            </Point>

            <Point n="34" title="La formación filosófica precede a la investigación">
              <p>
                Antes de investigar un problema hay que formarse: conocer autores,
                conceptos, debates e investigaciones previas. La originalidad no
                consiste en ignorar la tradición, sino en saber desde dónde se está
                interviniendo.
              </p>
            </Point>

            <Point n="35" title="Estado del arte o estado de la cuestión">
              <p>
                El <strong>estado del arte</strong> permite saber qué se ha dicho,
                quién lo ha dicho, cómo se ha investigado y qué problemas permanecen
                abiertos. Es una reconstrucción del terreno intelectual en el que
                nuestra investigación pretende entrar.
              </p>
            </Point>

            <Point n="36" title="Para qué sirve el estado del arte">
              <p>
                Cumple al menos dos funciones decisivas: aprender lo que ya se sabe
                sobre el problema e identificar desde qué punto todavía puede
                avanzarse.
              </p>
              <p>
                Sin esta revisión corremos el riesgo de repetir trabajos, ignorar
                discusiones relevantes o formular como novedoso algo ya resuelto.
              </p>
            </Point>
          </section>

          <section id="busqueda" className="methods-section">
            <Heading number="10" eyebrow="Fontes">
              Cómo comenzar la búsqueda bibliográfica
            </Heading>

            <Point n="37" title="Biblioteca Digital de la Universidad de Guadalajara">
              <p>
                La parte final de la clase se vuelve práctica. El profesor entra a la
                Biblioteca Digital de la Universidad de Guadalajara y muestra la ruta
                general: ingresar, iniciar sesión, entrar a Recursos informativos,
                abrir bases de datos y comenzar una búsqueda académica.
              </p>
            </Point>

            <Point n="38" title="Bases de datos académicas">
              <p>
                Entre las herramientas mencionadas aparece con claridad
                <strong> JSTOR</strong>, especialmente útil para humanidades,
                pensamiento político, filosofía social y sociología. Otros nombres
                quedaron deformados en la grabación, por lo que no se fijan aquí.
              </p>
            </Point>

            <Point n="39" title="Uso de filtros">
              <p>
                Una búsqueda puede producir miles de resultados. Para volverla
                manejable hay que filtrar por idioma, disciplina, fecha, área
                temática o tipo de documento.
              </p>
            </Point>

            <Point n="40" title="Lectura en diagonal">
              <p>
                Ante grandes cantidades de resultados se recupera la lectura en
                diagonal. El primer filtro es el <strong>título</strong>: permite
                decidir si un trabajo parece guardar relación con nuestro problema.
              </p>
            </Point>

            <Point n="41" title="Segundo filtro: el abstract">
              <p>
                Si el título parece pertinente, el siguiente paso es revisar el
                resumen. El abstract permite identificar problema, enfoque y posible
                relevancia antes de dedicar tiempo a la lectura completa.
              </p>
              <div className="methods24-schema">
                <span>RESULTADOS</span><b>→</b><span>TÍTULO</span><b>→</b>
                <span>ABSTRACT</span><b>→</b><span>LECTURA COMPLETA</span>
              </div>
            </Point>

            <Point n="42" title="Acceso institucional a artículos">
              <p>
                Muchos textos académicos requieren suscripción. La universidad paga
                licencias que permiten acceder a ellos mediante las credenciales
                institucionales. Saber usar estos recursos forma parte de la
                competencia investigativa.
              </p>
            </Point>

            <Point n="43" title="Estado del arte y objeto de estudio">
              <p>
                La clase termina enlazando el ejercicio bibliográfico con el problema
                siguiente: delimitar el objeto de estudio. Esa delimitación no surge
                en el vacío, sino del conocimiento de antecedentes, conceptos,
                discusiones y preguntas todavía abiertas.
              </p>
            </Point>
          </section>

          <section id="cierre" className="methods-section">
            <Heading number="11" eyebrow="Ordo methodicus">
              La secuencia metodológica que deja la clase
            </Heading>

            <Point n="44" title="Del asombro al objeto de estudio">
              <div className="methods24-vertical-flow">
                {[
                  'ACTITUD FILOSÓFICA',
                  'LECTURA',
                  'CONCEPTOS',
                  'JUICIOS',
                  'RAZONAMIENTOS',
                  'PENSAMIENTO',
                  'COMUNICACIÓN',
                  'CRÍTICA Y REVISIÓN',
                  'CONOCIMIENTO OBJETIVABLE',
                  'ESTADO DEL ARTE',
                  'OBJETO DE ESTUDIO',
                  'INVESTIGACIÓN FILOSÓFICA',
                ].map((item, index, arr) => (
                  <span key={item}>
                    {item}
                    {index < arr.length - 1 && <b>↓</b>}
                  </span>
                ))}
              </div>
            </Point>

            <Point n="45" title="Núcleo conceptual de la sesión">
              <p>
                La investigación filosófica no consiste en producir opiniones, sino
                conocimiento que pueda justificarse. Eso exige distinguir el acto
                psicológico de pensar del pensamiento lógicamente estructurado;
                trabajar con conceptos, juicios y razonamientos; leer con método;
                comunicar ideas; someterlas a revisión; y conocer el trabajo previo
                de otros investigadores.
              </p>
              <div className="methods24-callout">
                <span>Fórmula de cierre</span>
                <strong>
                  Leer → comprender → conceptualizar → argumentar → comunicar →
                  revisar → construir estado del arte → delimitar objeto de estudio.
                </strong>
              </div>
            </Point>
          </section>

          <section id="continuacion" className="methods-section methods24-next">
            <Heading number="12" eyebrow="Proxima sessio">
              Lo que queda abierto para la siguiente clase
            </Heading>
            <p>
              La sesión no deja aquí una tarea nueva formulada como entrega. Lo que sí
              queda claramente señalado como continuación metodológica es profundizar
              en <strong>cómo construir el estado del arte o estado de la cuestión</strong>
              y, a partir de ese conocimiento previo, <strong>cómo delimitar el objeto
              de estudio</strong>.
            </p>
            <div className="methods24-next-grid">
              <article>
                <span>I</span>
                <strong>Estado del arte</strong>
                <p>Buscar, seleccionar y organizar lo que ya se ha investigado sobre un problema filosófico.</p>
              </article>
              <article>
                <span>II</span>
                <strong>Objeto de estudio</strong>
                <p>Precisar exactamente qué aspecto del problema será investigado y desde qué delimitación conceptual.</p>
              </article>
            </div>
          </section>
        </article>
      </div>

      <footer className="methods-footer">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <span>☙ &nbsp; § &nbsp; ❧</span>
        <span>24 de agosto · MMXXVI</span>
      </footer>
    </main>
  )
}
