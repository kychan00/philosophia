import { Link } from 'react-router'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'frege', 'Frege y el logicismo'],
  ['02', 'russell', 'Russell y la paradoja'],
  ['03', 'sentido', 'Sentido y referencia'],
  ['04', 'lenguaje', 'Lenguaje y mundo'],
  ['05', 'analitica', 'Moore, Russell y giro lingüístico'],
  ['06', 'positivismo', 'Positivismo y Círculo de Viena'],
  ['07', 'verificacion', 'Verificación y análisis formal'],
  ['08', 'popper', 'Popper y falsabilidad'],
  ['09', 'cierre', 'Del espejo al uso'],
  ['10', 'continuacion', 'Bloque aún abierto'],
]

const goToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function Heading({ number, eyebrow, children }) {
  return (
    <div className="analytic24-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function AnalyticClass24Aug() {
  return (
    <main className="analytic24-page">
      <nav className="analytic24-topbar">
        <Link to="/semestre/5/filosofia-analitica">
          ← Filosofía Analítica
        </Link>

        <Link to="/" className="analytic24-brand">
          Φ · Philosophia
        </Link>

        <span>XXIV · VIII · MMXXVI</span>
      </nav>

      <header className="analytic24-hero">
        <div className="analytic24-hero-formula" aria-hidden="true">
          ∀x(Px → Bx)
        </div>

        <p className="analytic24-kicker">
          FI264 · Tercera sesión · Ratio · Lingua · Verificatio
        </p>

        <h1>
          De Frege
          <em>al giro lingüístico</em>
        </h1>

        <p className="analytic24-lead">
          La clase reconstruye una transformación decisiva de la filosofía
          analítica: el intento de Frege por fundamentar las matemáticas mediante
          la lógica conduce a problemas de autorreferencia, sentido y referencia;
          esos problemas desplazan el análisis hacia el lenguaje, preparan el
          giro lingüístico y desembocan en el positivismo lógico, el
          verificacionismo y la crítica de Popper.
        </p>

        <div className="analytic24-hero-route">
          <span>Frege</span><b>→</b>
          <span>logicismo</span><b>→</b>
          <span>Russell</span><b>→</b>
          <span>sentido / referencia</span><b>→</b>
          <span>giro lingüístico</span><b>→</b>
          <span>verificación</span><b>→</b>
          <span>Popper</span>
        </div>
      </header>

      <div className="analytic24-layout">
        <aside className="analytic24-index">
          <p>Index analysis</p>

          {sections.map(([number, id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => goToSection(id)}
            >
              <span>{number}</span>
              {label}
            </button>
          ))}
        </aside>

        <article className="analytic24-article">
          <section id="mapa" className="analytic24-section">
            <Heading number="00" eyebrow="Argumentum">
              La arquitectura de toda la clase
            </Heading>

            <div className="analytic24-grand-chain">
              {[
                'CRISIS DE LOS FUNDAMENTOS',
                'FREGE',
                'LOGICISMO',
                'PARADOJA DE RUSSELL',
                'TEORÍA DE TIPOS',
                'SENTIDO Y REFERENCIA',
                'GIRO LINGÜÍSTICO',
                'PRIMER WITTGENSTEIN',
                'POSITIVISMO LÓGICO',
                'VERIFICACIONISMO',
                'POPPER',
                'FALSABILIDAD',
                'LENGUAJE ORDINARIO',
              ].map((item, index, arr) => (
                <span key={item}>
                  {item}
                  {index < arr.length - 1 && <b>↓</b>}
                </span>
              ))}
            </div>

            <div className="analytic24-thesis">
              <span>Idea rectora</span>
              <p>
                El análisis lógico no nace primero como una filosofía del lenguaje.
                En Frege nace como un proyecto de fundamentación matemática. Sin
                embargo, las dificultades de ese proyecto obligan a preguntar qué
                son las proposiciones, qué significa una expresión y cómo se
                relaciona el lenguaje con el mundo. Esa mudanza constituye uno de
                los caminos que llevan a la filosofía analítica del siglo XX.
              </p>
            </div>
          </section>

          <section id="frege" className="analytic24-section">
            <Heading number="01" eyebrow="Frege · Logicismus">
              Un lenguaje formal para fundamentar las matemáticas
            </Heading>

            <p>
              La clase comienza retomando a <strong>Gottlob Frege</strong>. Su
              preocupación inicial no es desarrollar una teoría general del lenguaje,
              sino construir un sistema formal suficientemente riguroso para expresar
              inferencias sin depender de las ambigüedades de las lenguas naturales.
              El modelo implícito es matemático: un resultado puede ser comprendido
              por científicos de distintas lenguas porque todos comparten una
              notación formal.
            </p>

            <p>
              Esa aspiración exige distinguir entre un <strong>sistema formal</strong>
              que trabaja sobre un dominio determinado —por ejemplo, números o
              espacio— y la <strong>lógica</strong>, cuyo objeto son las relaciones
              formales mismas. Si tenemos una estructura del tipo
              <code>A → B</code> y además <code>A</code>, la lógica puede concluir
              <code>B</code> sin saber todavía qué significan A o B. Su tarea inicial
              es sintáctica y relacional; la interpretación semántica puede venir
              después.
            </p>

            <div className="analytic24-formal-demo">
              <div>
                <span>FORMA</span>
                <strong>A → B</strong>
                <strong>A</strong>
              </div>
              <b>∴</b>
              <div>
                <span>CONCLUSIÓN</span>
                <strong>B</strong>
              </div>
            </div>

            <p>
              Desde aquí aparece el <strong>logicismo</strong>: la tesis de que las
              matemáticas, especialmente la aritmética, pueden reducirse a la lógica.
              Si la lógica posee validez universal y la aritmética puede derivarse de
              ella, las verdades matemáticas dejarían de depender de convenciones,
              hábitos psicológicos o generalizaciones empíricas.
            </p>

            <div className="analytic24-two-columns">
              <article>
                <span>PROBLEMA DEL SIGLO XIX</span>
                <h3>Fundamentar las matemáticas</h3>
                <p>
                  La pregunta ya no es sólo cómo calcular, sino por qué una verdad
                  como 1 + 1 = 2 debe valer necesariamente.
                </p>
              </article>

              <article>
                <span>RESPUESTA DE FREGE</span>
                <h3>Reducir aritmética a lógica</h3>
                <p>
                  Conceptografía → formalización de inferencias → fundamentación
                  lógica de la aritmética.
                </p>
              </article>
            </div>

            <p>
              La <em>Begriffsschrift</em> o <em>Conceptografía</em> representa ese
              esfuerzo: construir una notación lógica capaz de expresar inferencias
              con una precisión que el lenguaje ordinario no garantiza por sí solo.
            </p>

            <div className="analytic24-strip">
              <span>LÓGICA</span><b>→</b>
              <span>ARITMÉTICA</span><b>→</b>
              <span>MATEMÁTICAS</span>
            </div>
          </section>

          <section id="russell" className="analytic24-section">
            <Heading number="02" eyebrow="Russell · Paradoxum">
              La contradicción que sacude el proyecto
            </Heading>

            <p>
              El sistema de Frege encuentra un obstáculo decisivo cuando
              <strong> Bertrand Russell</strong> detecta una contradicción en la
              teoría de conjuntos utilizada para sostener la fundamentación. El
              problema aparece cuando permitimos formar conjuntos definidos por
              propiedades autorreferenciales.
            </p>

            <div className="analytic24-bag-diagram">
              <div className="analytic24-bag outer">
                <span>BOLSA DE TODAS LAS BOLSAS</span>
                <div className="analytic24-bag inner">bolsa A</div>
                <div className="analytic24-bag inner">bolsa B</div>
                <div className="analytic24-bag inner dashed">¿ella misma?</div>
              </div>
            </div>

            <p>
              El ejemplo de la “bolsa de todas las bolsas” vuelve visible el problema.
              Si ella misma es una bolsa, ¿debe contenerse a sí misma? La paradoja se
              vuelve estricta al considerar el conjunto de todos los conjuntos que
              <em> no</em> se contienen a sí mismos:
            </p>

            <div className="analytic24-paradox">
              <span>Si se contiene a sí mismo</span>
              <b>→</b>
              <strong>entonces no debería contenerse</strong>

              <span>Si no se contiene a sí mismo</span>
              <b>→</b>
              <strong>entonces debería contenerse</strong>
            </div>

            <p>
              La consecuencia filosófica es severa: un sistema inconsistente no puede
              funcionar como fundamento último e incuestionable de la aritmética.
              Russell propone después una estrategia jerárquica:
              <strong> la teoría de tipos</strong>.
            </p>

            <div className="analytic24-levels">
              <article><span>NIVEL 1</span><strong>objetos</strong></article>
              <b>↑</b>
              <article><span>NIVEL 2</span><strong>conjuntos de objetos</strong></article>
              <b>↑</b>
              <article><span>NIVEL 3</span><strong>conjuntos de conjuntos</strong></article>
            </div>

            <p>
              El objetivo es impedir que un conjunto opere indiscriminadamente como
              elemento de su propio nivel. La jerarquía bloquea formas problemáticas
              de autorreferencia. En clase aparece una comparación con Spinoza:
              puede haber una semejanza estructural en la preocupación por ordenar
              cuidadosamente niveles y dependencias, pero una analogía formal no
              equivale a demostrar una influencia histórica.
            </p>
          </section>

          <section id="sentido" className="analytic24-section">
            <Heading number="03" eyebrow="Sinn · Bedeutung">
              Del problema lógico al problema del significado
            </Heading>

            <p>
              Frege entra en la filosofía del lenguaje casi por presión interna de su
              propio proyecto. Para fundamentar inferencias hay que saber qué es una
              proposición, qué significa una expresión y cómo se relaciona con
              aquello de lo que habla. De ahí la importancia de
              <em> «Sobre sentido y referencia»</em>.
            </p>

            <div className="analytic24-three-questions">
              <article>
                <span>01</span>
                <strong>¿Está bien formada?</strong>
                <small>Sintaxis</small>
              </article>
              <article>
                <span>02</span>
                <strong>¿Tiene sentido?</strong>
                <small>Semántica</small>
              </article>
              <article>
                <span>03</span>
                <strong>¿Tiene referencia?</strong>
                <small>Relación con aquello de lo que habla</small>
              </article>
            </div>

            <p>
              Una oración como <em>“La montaña de oro es brillante”</em> puede estar
              gramaticalmente bien formada y ser comprensible aunque no exista una
              montaña de oro empíricamente identificable. Lo mismo ocurre con
              expresiones sobre Zeus o personajes literarios. Esto obliga a separar
              cuidadosamente <strong>sentido</strong>, <strong>referencia</strong> y
              <strong> existencia empírica</strong>.
            </p>

            <div className="analytic24-reference-spectrum">
              <div>
                <span>Concepción amplia</span>
                <p>
                  Una expresión puede ser comprensible aunque su referente no exista
                  empíricamente.
                </p>
              </div>
              <b>↔</b>
              <div>
                <span>Concepción empirista estricta</span>
                <p>
                  El significado cognoscitivo exige alguna conexión verificable con
                  la experiencia.
                </p>
              </div>
            </div>

            <p>
              Este desplazamiento abre el camino hacia debates que ya no son
              exclusivamente lógico-matemáticos: qué cuenta como proposición con
              significado, qué función cumple una descripción y qué relación debe
              existir entre lenguaje y mundo.
            </p>
          </section>

          <section id="lenguaje" className="analytic24-section">
            <Heading number="04" eyebrow="Lingua · Mundus">
              El lenguaje como mediación y como figura
            </Heading>

            <div className="analytic24-world-diagram">
              <span>SUJETO</span>
              <b>→</b>
              <strong>LENGUAJE</strong>
              <b>→</b>
              <span>MUNDO</span>
            </div>

            <p>
              El lenguaje funciona como mediación entre sujeto y mundo. Dentro de
              esta problemática, las proposiciones declarativas adquieren un lugar
              especial porque pretenden describir estados de cosas. Una pregunta,
              una orden o una exclamación no describen del mismo modo que
              <em> “La nieve es blanca”</em>.
            </p>

            <p>
              Con el <strong>primer Wittgenstein</strong>, especialmente el del
              <em> Tractatus</em>, esta relación se vuelve estructural: una
              proposición puede representar un hecho porque comparte con él una
              forma. El lenguaje significativo aparece así como una figura posible
              del mundo.
            </p>

            <div className="analytic24-picture-theory">
              <div>
                <span>LENGUAJE</span>
                <div className="analytic24-nodes">
                  <i>A</i><i>B</i><i>C</i>
                </div>
              </div>

              <b>≅</b>

              <div>
                <span>MUNDO</span>
                <div className="analytic24-nodes">
                  <i>α</i><i>β</i><i>γ</i>
                </div>
              </div>
            </div>

            <p>
              La clase anticipa también el cambio posterior hacia el
              <strong> significado como uso</strong>. Una expresión puede tener
              significado no porque apunte directamente a un objeto, sino porque una
              comunidad conoce las reglas y contextos en que se utiliza.
            </p>

            <div className="analytic24-two-models">
              <article>
                <span>MODELO REFERENCIAL</span>
                <strong>significado → referente</strong>
              </article>
              <article>
                <span>MODELO DEL USO</span>
                <strong>significado → función en una práctica</strong>
              </article>
            </div>

            <p>
              El ejemplo <em>“El actual rey de Francia es calvo”</em> muestra por qué
              la referencia existente no puede identificarse sin más con el
              significado. Francia no tiene rey actualmente, pero la oración sigue
              siendo lingüísticamente inteligible. Si mañana hubiese uno, las mismas
              palabras podrían adquirir un referente efectivo sin que por ello
              hubiésemos cambiado su estructura lingüística.
            </p>
          </section>

          <section id="analitica" className="analytic24-section">
            <Heading number="05" eyebrow="Analysis · Lingua">
              Moore, Russell y el giro lingüístico
            </Heading>

            <p>
              Históricamente, la clase sitúa a Frege como
              <strong> antecedente fundamental</strong> de la filosofía analítica,
              mientras que Moore y Russell aparecen ya en el comienzo propiamente
              dicho de la tradición del siglo XX.
            </p>

            <div className="analytic24-compare-authors">
              <article>
                <span>G. E. MOORE</span>
                <h3>Análisis conceptual</h3>
                <p>
                  Examina qué significan nuestros conceptos, cómo se usan y qué
                  presupuestos contienen.
                </p>
              </article>

              <article>
                <span>BERTRAND RUSSELL</span>
                <h3>Análisis lógico</h3>
                <p>
                  Busca mostrar la forma lógica que subyace a expresiones del
                  lenguaje ordinario.
                </p>
              </article>
            </div>

            <p>
              Ambos reaccionan contra el idealismo, pero por caminos distintos.
              El punto común es convertir el <strong>análisis</strong> en un método
              filosófico central.
            </p>

            <div className="analytic24-linguistic-turn">
              <span>ANTES</span>
              <p>El análisis del lenguaje es una herramienta filosófica.</p>
              <b>↓</b>
              <span>GIRO LINGÜÍSTICO</span>
              <p>
                Los problemas filosóficos deben abordarse mediante el análisis del
                lenguaje.
              </p>
            </div>

            <p>
              En el primer Wittgenstein esta tesis se radicaliza: analizar la
              estructura del lenguaje se convierte en una vía privilegiada para
              aclarar la estructura de aquello que puede decirse sobre el mundo.
            </p>
          </section>

          <section id="positivismo" className="analytic24-section">
            <Heading number="06" eyebrow="Comte · Vienna">
              Del positivismo al positivismo lógico
            </Heading>

            <p>
              Antes de entrar al Círculo de Viena, el profesor reconstruye la
              herencia del <strong>positivismo</strong> de Auguste Comte. “Positivo”
              significa aquí aquello que está positivamente dado y puede incorporarse
              a un trabajo sistemático de conocimiento.
            </p>

            <p>
              La ciencia positiva no busca principalmente causas últimas o
              fundamentos absolutos, sino <strong>relaciones regulares entre
              fenómenos</strong>: semejanza, sucesión, recurrencia e invariancia.
              Las cuestiones metafísicas quedan fuera del método positivo, no
              necesariamente porque se haya demostrado que son falsas, sino porque
              no son tratables mediante ese procedimiento.
            </p>

            <div className="analytic24-synthesis-box">
              <div>
                <span>POSITIVISMO</span>
                <strong>Comte</strong>
                <small>experiencia · fenómenos · regularidades</small>
              </div>
              <b>+</b>
              <div>
                <span>ANÁLISIS LÓGICO</span>
                <strong>Frege · Russell · Wittgenstein</strong>
                <small>forma · proposición · lenguaje</small>
              </div>
              <b>=</b>
              <div>
                <span>POSITIVISMO LÓGICO</span>
                <strong>Círculo de Viena</strong>
                <small>experiencia + lógica formal</small>
              </div>
            </div>

            <p>
              El Círculo de Viena adopta la aspiración positivista de concentrarse en
              ciencia y experiencia, pero la combina con herramientas de lógica
              formal y análisis del lenguaje. La filosofía adquiere así un carácter
              explícitamente analítico.
            </p>

            <blockquote className="analytic24-quote">
              “La filosofía puede ser llamada el análisis lógico de nuestros
              pensamientos.”
              <cite>— formulación atribuida en clase a Friedrich Waismann</cite>
            </blockquote>
          </section>

          <section id="verificacion" className="analytic24-section">
            <Heading number="07" eyebrow="Verificatio">
              Formalización, condiciones de verdad y verificacionismo
            </Heading>

            <p>
              La oración <em>“Todas las palomas son blancas”</em> funciona como
              laboratorio de análisis. Primero se pregunta si está bien formada;
              después se examina su significado y finalmente se explicita su forma
              lógica.
            </p>

            <div className="analytic24-formula-card">
              <span>Lenguaje ordinario</span>
              <strong>Todas las palomas son blancas.</strong>
              <b>↓ formalización</b>
              <code>∀x(Px → Bx)</code>
              <small>
                Para todo x, si x es paloma, entonces x es blanca.
              </small>
            </div>

            <p>
              Formalizar no es decorar una oración con símbolos. La finalidad es
              descubrir con precisión sus <strong>condiciones de verdad</strong>:
              qué tendría que ocurrir para que fuese verdadera o falsa.
            </p>

            <table className="analytic24-truth-table">
              <thead>
                <tr><th>P</th><th>Q</th><th>P → Q</th></tr>
              </thead>
              <tbody>
                <tr><td>V</td><td>V</td><td>V</td></tr>
                <tr><td>V</td><td>F</td><td><strong>F</strong></td></tr>
                <tr><td>F</td><td>V</td><td>V</td></tr>
                <tr><td>F</td><td>F</td><td>V</td></tr>
              </tbody>
            </table>

            <p>
              Aplicado al ejemplo, basta encontrar una paloma que no sea blanca para
              mostrar que la universal es falsa. La lógica le dice al investigador
              exactamente qué tipo de caso debe buscar.
            </p>

            <div className="analytic24-philosophy-science">
              <div>
                <span>FILOSOFÍA</span>
                <p>
                  analiza · formaliza · aclara conceptos · determina condiciones
                </p>
              </div>
              <b>→</b>
              <div>
                <span>CIENCIA</span>
                <p>contrasta empíricamente</p>
              </div>
            </div>

            <p>
              El positivismo lógico formula desde aquí el
              <strong> principio de verificación</strong>: una proposición con
              significado cognoscitivo debe permitir especificar qué experiencia
              contaría como confirmación.
            </p>

            <p>
              Sin embargo, las proposiciones universales generan una dificultad:
              podemos observar muchas palomas blancas, pero no todas las palomas
              posibles, pasadas, presentes y futuras. La verificación definitiva de
              una universal parece inalcanzable.
            </p>
          </section>

          <section id="popper" className="analytic24-section">
            <Heading number="08" eyebrow="Popper · Falsificatio">
              De la verificación a la falsabilidad
            </Heading>

            <p>
              <strong>Karl Popper</strong> entra precisamente en este punto. Su
              problema no es decidir qué oraciones poseen significado, sino resolver
              el <strong>problema de demarcación</strong>: cómo distinguir una teoría
              científica de una no científica.
            </p>

            <div className="analytic24-asymmetry">
              <article>
                <span>1000 casos favorables</span>
                <strong>no verifican definitivamente</strong>
              </article>

              <b>≠</b>

              <article>
                <span>1 contraejemplo</span>
                <strong>puede falsar una universal</strong>
              </article>
            </div>

            <p>
              En el ejemplo de las palomas, mil observaciones favorables no garantizan
              que todas sean blancas. Una sola paloma no blanca basta para refutar la
              universal. De ahí la propuesta popperiana:
              <strong> una teoría científica debe ser falsable</strong>.
            </p>

            <div className="analytic24-falsifiable">
              <span>FALSABLE ≠ FALSO</span>
              <p>
                Falsable significa que podemos especificar qué observación contaría
                como refutación. Una teoría puede seguir aceptándose mientras no
                aparezca ese caso.
              </p>
            </div>

            <p>
              La proposición <em>“Dios existe”</em> permite mostrar la diferencia de
              problemas. Popper no necesita afirmar que sea falsa, absurda o
              insignificante. Sólo señala que no sabemos qué observación empírica
              podría falsarla; por ello no funciona como proposición científica en
              su criterio de demarcación.
            </p>

            <p>
              El profesor subraya además que este criterio está pensado sobre todo
              para las ciencias empíricas y naturales. Aplicarlo sin más a ética,
              religión, política o metafísica supone trasladarlo fuera del contexto
              para el que fue formulado.
            </p>
          </section>

          <section id="cierre" className="analytic24-section">
            <Heading number="09" eyebrow="Post positivismum">
              La filosofía se reduce y después vuelve a abrirse
            </Heading>

            <p>
              Dentro del positivismo lógico, la filosofía recibe primero una
              <strong> función negativa</strong>: filtrar el lenguaje y distinguir
              enunciados significativos de pseudoproposiciones. Después recibe una
              <strong> función positiva</strong>: analizar formalmente las
              proposiciones aceptadas, aclarar conceptos e identificar sus condiciones
              de verificación.
            </p>

            <div className="analytic24-process">
              <span>PROPOSICIÓN</span><b>→</b>
              <span>ANÁLISIS LÓGICO</span><b>→</b>
              <span>CLARIFICACIÓN</span><b>→</b>
              <span>CONDICIONES DE VERIFICACIÓN</span><b>→</b>
              <span>CIENCIA</span>
            </div>

            <p>
              Esta imagen es profundamente reductiva respecto de la filosofía
              tradicional: desaparece la tarea de construir grandes sistemas
              metafísicos o explicar la estructura última del ser. La filosofía queda
              casi identificada con el análisis lógico del lenguaje científico.
            </p>

            <p>
              Tras la Segunda Guerra Mundial, esa restricción comienza a debilitarse.
              Se critican el criterio de verificabilidad, la concepción rígida del
              significado y la idea de que sólo el lenguaje empírico-científico
              posee legitimidad. De ahí surge el desplazamiento hacia la filosofía
              del lenguaje ordinario.
            </p>

            <div className="analytic24-final-transition">
              <div>
                <span>PRIMER MODELO</span>
                <strong>lenguaje ≈ espejo del mundo</strong>
              </div>
              <b>→</b>
              <div>
                <span>SEGUNDO MODELO</span>
                <strong>lenguaje = práctica · uso · convención</strong>
              </div>
            </div>

            <p>
              La gran transformación del siglo XX consiste precisamente en que el
              lenguaje deja de ser sólo el medio en que se expresa la filosofía y se
              convierte en <strong>objeto y método de la filosofía misma</strong>.
            </p>

            <div className="analytic24-author-table">
              <div><strong>Frege</strong><span>fundamentación lógica de las matemáticas</span></div>
              <div><strong>Russell</strong><span>paradoja · teoría de tipos · análisis lógico</span></div>
              <div><strong>Moore</strong><span>análisis conceptual</span></div>
              <div><strong>Wittgenstein I</strong><span>estructura lenguaje / mundo</span></div>
              <div><strong>Comte</strong><span>positivismo · lo positivamente dado</span></div>
              <div><strong>Círculo de Viena</strong><span>positivismo + análisis lógico</span></div>
              <div><strong>Popper</strong><span>falsabilidad · demarcación científica</span></div>
              <div><strong>Lenguaje ordinario</strong><span>significado como uso</span></div>
            </div>

            <div className="analytic24-key-distinctions">
              <article>
                <span>FREGE</span>
                <strong>¿Cómo fundamentar lógicamente las matemáticas?</strong>
              </article>
              <article>
                <span>POSITIVISMO LÓGICO</span>
                <strong>¿Qué enunciados tienen significado cognoscitivo y cómo se verifican?</strong>
              </article>
              <article>
                <span>POPPER</span>
                <strong>¿Cómo distinguir ciencia de no ciencia?</strong>
              </article>
            </div>
          </section>

          <section id="continuacion" className="analytic24-section analytic24-open">
            <Heading number="10" eyebrow="Continuatio">
              El bloque todavía no termina
            </Heading>

            <p>
              La grabación termina antes de cerrar por completo este recorrido. El
              profesor indica que aún deben concluir esta discusión antes de pasar de
              lleno a la siguiente lectura o capítulo.
            </p>

            <p>
              Por eso esta página no presenta una “tarea” nueva que no fue formulada
              explícitamente. Lo que queda abierto es la continuación del mismo bloque:
              terminar de precisar la crisis del positivismo lógico y el paso hacia
              concepciones del lenguaje más atentas al uso y a las prácticas
              lingüísticas.
            </p>
          </section>
        </article>
      </div>

      <footer className="analytic24-footer">
        <Link to="/semestre/5/filosofia-analitica">
          ← Filosofía Analítica
        </Link>
        <span>p · ∴ · q</span>
        <span>24 de agosto · MMXXVI</span>
      </footer>
    </main>
  )
}
