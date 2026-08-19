import { Link } from 'react-router'
import notes from '../content/ontologia-2026-08-19.md?raw'

const sections = [
  ['00', 'mapa', 'Mapa de la clase'],
  ['01', 'hessen', 'Sujeto y conocimiento'],
  ['02', 'modernidad', 'Nueva imagen del mundo'],
  ['03', 'duda', 'Duda metódica'],
  ['04', 'cogito', 'Cogito'],
  ['05', 'sustancias', 'Tres sustancias'],
  ['06', 'innatismo', 'Ideas e innatismo'],
  ['07', 'solipsismo', 'Solipsismo'],
  ['08', 'dios', 'Función de Dios'],
  ['09', 'mente-cuerpo', 'Mente y cuerpo'],
  ['10', 'spinoza', 'Respuesta de Spinoza'],
  ['11', 'tarea', 'Tarea'],
]

const goToSection = (id) => {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export default function OntologiaClass19Aug() {
  return (
    <main className="ontology-class-v2">
      <nav className="ontology-class-v2-nav">
        <Link to="/semestre/5/ontologia-ii">
          ← Ontología II
        </Link>

        <Link to="/" className="ontology-class-v2-brand">
          Φ · Philosophia
        </Link>

        <span>XIX · VIII · MMXXVI</span>
      </nav>

      <header className="ontology-class-v2-hero">
        <div className="ontology-class-v2-glyph" aria-hidden="true">
          ego
        </div>

        <p>Ontología II · Segunda clase</p>

        <h1>
          Del cogito
          <em>a la sustancia</em>
        </h1>

        <p className="ontology-class-v2-lead">
          Descartes coloca al sujeto en el centro de la filosofía moderna,
          pero ese giro abre dos problemas decisivos: cómo garantizar la
          correspondencia entre representación y mundo, y cómo explicar la
          relación entre mente y cuerpo. Spinoza aparece como la primera
          respuesta radical al dualismo cartesiano.
        </p>

        <div className="ontology-class-v2-axis">
          <span>duda</span>
          <b>→</b>
          <span>cogito</span>
          <b>→</b>
          <span>substantia</span>
          <b>→</b>
          <span>Spinoza</span>
        </div>
      </header>

      <div className="ontology-class-v2-layout">
        <aside className="ontology-class-v2-index">
          <p>Index lectionis</p>

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

        <article className="ontology-class-v2-article">
          <section id="mapa">
            <span className="ontology-class-v2-number">00</span>
            <p className="ontology-class-v2-eyebrow">
              Argumentum
            </p>
            <h2>La cadena conceptual de la sesión</h2>

            <div className="ontology-class-v2-program-grid">
              <article><span>01</span><strong>Duda metódica</strong></article>
              <article><span>02</span><strong>Cogito</strong></article>
              <article><span>03</span><strong>Tres sustancias</strong></article>
              <article><span>04</span><strong>Innatismo</strong></article>
              <article><span>05</span><strong>Solipsismo</strong></article>
              <article><span>06</span><strong>Dios como garantía</strong></article>
              <article><span>07</span><strong>Mente / cuerpo</strong></article>
              <article><span>08</span><strong>Monismo de Spinoza</strong></article>
            </div>

            <div className="ontology-class-v2-callout">
              <span>Idea rectora</span>
              <strong>
                El sujeto cartesiano se vuelve fundamento del conocimiento,
                pero la separación entre sujeto y mundo genera problemas que
                obligan a introducir nuevas soluciones ontológicas.
              </strong>
            </div>
          </section>

          <section id="hessen">
            <span className="ontology-class-v2-number">01</span>
            <p className="ontology-class-v2-eyebrow">
              Cognitio
            </p>
            <h2>Sujeto, objeto y verdad</h2>

            <p>
              Antes de entrar en Descartes, el profesor recupera a Johannes
              Hessen y el esquema básico del conocimiento: sujeto, objeto y
              relación cognoscitiva. A partir de ahí recuerda cinco problemas:
              posibilidad, origen, esencia, tipos de conocimiento y criterio
              de verdad.
            </p>

            <div className="ontology-class-v2-concepts">
              <article>
                <span>I</span>
                <strong>Posibilidad</strong>
              </article>
              <article>
                <span>II</span>
                <strong>Origen</strong>
              </article>
              <article>
                <span>III</span>
                <strong>Esencia</strong>
              </article>
              <article>
                <span>IV</span>
                <strong>Verdad</strong>
              </article>
            </div>

            <p>
              En Descartes se impone la razón y, en la relación entre sujeto
              y objeto, aparece una preeminencia del sujeto. Este giro es una
              de las marcas de la filosofía moderna.
            </p>
          </section>

          <section id="modernidad">
            <span className="ontology-class-v2-number">02</span>
            <p className="ontology-class-v2-eyebrow">
              Scientia nova
            </p>
            <h2>Una nueva imagen del mundo</h2>

            <p>
              El nuevo comienzo cartesiano se entiende mejor dentro de una
              transformación científica. El cosmos antiguo y medieval,
              finito, delimitado y ordenado, deja de ser una imagen
              incuestionable del mundo.
            </p>

            <div className="ontology-class-v2-timeline">
              <div><span>Copérnico</span><small>heliocentrismo</small></div>
              <b>→</b>
              <div><span>Kepler</span><small>órbitas elípticas</small></div>
              <b>→</b>
              <div><span>Galileo</span><small>nueva física</small></div>
              <b>→</b>
              <div><span>Bruno</span><small>universo infinito</small></div>
            </div>

            <p>
              El descubrimiento de América también funciona como ejemplo de
              una ampliación del mundo conocido. Para el profesor, este
              contexto permite comprender por qué Descartes deja de aceptar la
              tradición recibida como fundamento seguro.
            </p>
          </section>

          <section id="duda">
            <span className="ontology-class-v2-number">03</span>
            <p className="ontology-class-v2-eyebrow">
              Dubitatio
            </p>
            <h2>La duda metódica</h2>

            <p>
              La duda no es un fin escéptico. Su función consiste en encontrar
              una certeza que resista toda posibilidad de error y desde la
              cual pueda reconstruirse el saber.
            </p>

            <div className="ontology-class-v2-books">
              <article>
                <span>I</span>
                <strong>Sentidos</strong>
              </article>
              <article>
                <span>II</span>
                <strong>Lógica</strong>
              </article>
              <article>
                <span>III</span>
                <strong>Matemáticas</strong>
              </article>
            </div>

            <div className="ontology-class-v2-callout">
              <span>Hipótesis extrema</span>
              <strong>
                El genio maligno permite imaginar un engaño incluso respecto
                de aquello que parece matemáticamente evidente.
              </strong>
            </div>

            <p>
              A esto se suma la duda entre sueño y vigilia: una experiencia
              puede parecernos completamente real mientras la vivimos y sólo
              después reconocerse como sueño.
            </p>
          </section>

          <section id="cogito">
            <span className="ontology-class-v2-number">04</span>
            <p className="ontology-class-v2-eyebrow">
              Cogito
            </p>
            <h2>La primera certeza</h2>

            <div className="ontology-class-v2-big-questions">
              <p>Si dudo, pienso.</p>
              <p>Si pienso, existo.</p>
            </div>

            <div className="ontology-class-v2-center">
              <strong>Cogito, ergo sum.</strong>
              <br />
              Pienso, luego existo.
            </div>

            <p>
              El punto de partida ya no es el mundo exterior, sino la certeza
              del sujeto que piensa. La modernidad filosófica se construye
              desde ese primer conocimiento indudable.
            </p>
          </section>

          <section id="sustancias">
            <span className="ontology-class-v2-number">05</span>
            <p className="ontology-class-v2-eyebrow">
              Ontologia cartesiana
            </p>
            <h2>Las tres sustancias</h2>

            <p>
              A partir del cogito, la clase formula la estructura ontológica
              cartesiana mediante tres sustancias.
            </p>

            <div className="ontology-class-v2-cartesian">
              <div>
                <span>res cogitans</span>
                <strong>pensamiento</strong>
              </div>
              <div>
                <span>res extensa</span>
                <strong>extensión</strong>
              </div>
              <div>
                <span>res infinita</span>
                <strong>Dios</strong>
              </div>
            </div>

            <p>
              La res cogitans corresponde al sujeto; la res extensa al mundo
              de los cuerpos, caracterizado por propiedades cuantificables
              como longitud, anchura y profundidad; la res infinita es Dios.
            </p>
          </section>

          <section id="innatismo">
            <span className="ontology-class-v2-number">06</span>
            <p className="ontology-class-v2-eyebrow">
              Ideae
            </p>
            <h2>Adventicias, ficticias e innatas</h2>

            <div className="ontology-class-v2-books">
              <article>
                <span>I</span>
                <strong>Adventicias</strong>
              </article>
              <article>
                <span>II</span>
                <strong>Ficticias</strong>
              </article>
              <article>
                <span>III</span>
                <strong>Innatas</strong>
              </article>
            </div>

            <p>
              Las adventicias proceden de la experiencia; las ficticias son
              producidas por la imaginación mediante combinaciones; las
              innatas no proceden de los sentidos y pertenecen al ámbito
              racional.
            </p>

            <div className="ontology-class-v2-concepts">
              <article><span>01</span><strong>Dios</strong></article>
              <article><span>02</span><strong>alma</strong></article>
              <article><span>03</span><strong>mundo / extensión</strong></article>
              <article><span>→</span><strong>problema</strong></article>
            </div>
          </section>

          <section id="solipsismo">
            <span className="ontology-class-v2-number">07</span>
            <p className="ontology-class-v2-eyebrow">
              Solipsismus
            </p>
            <h2>¿Cómo salir de la representación?</h2>

            <div className="ontology-class-v2-callout">
              <span>Problema</span>
              <strong>
                ¿Qué garantiza que el mundo exterior realmente sea como el
                sujeto se lo representa?
              </strong>
            </div>

            <p>
              El sujeto posee representaciones, pero no puede salir fuera de
              sí mismo para compararlas directamente con la realidad. El
              profesor propone una analogía contemporánea: hablamos y pensamos
              el mundo mediante el lenguaje, pero tampoco podemos salir del
              lenguaje para confrontarlo desde un punto completamente externo.
            </p>

            <div className="ontology-class-v2-pair">
              <div><span>representación</span></div>
              <b>?</b>
              <div><span>mundo exterior</span></div>
            </div>
          </section>

          <section id="dios">
            <span className="ontology-class-v2-number">08</span>
            <p className="ontology-class-v2-eyebrow">
              Res infinita
            </p>
            <h2>Dios como garantía del sistema</h2>

            <p>
              La presencia de Dios no aparece solamente como precaución
              histórica ante el contexto religioso de la época. Dentro del
              sistema cumple una función filosófica: restablecer la
              correspondencia entre sujeto y objeto.
            </p>

            <div className="ontology-class-v2-callout">
              <span>Función</span>
              <strong>
                Dios garantiza que la representación del sujeto puede
                corresponder con el mundo exterior y que no estamos sometidos
                a un engaño sistemático.
              </strong>
            </div>

            <p>
              El argumento presentado en clase parte de la idea de Dios como
              ser perfecto. La existencia se trata como inseparable de esa
              perfección. La objeción de una “isla perfecta” se menciona como
              contraste, pero el nombre del autor no quedó suficientemente
              claro en la grabación y no se fija aquí.
            </p>
          </section>

          <section id="mente-cuerpo">
            <span className="ontology-class-v2-number">09</span>
            <p className="ontology-class-v2-eyebrow">
              Corpus et mens
            </p>
            <h2>El problema de la comunicación de las sustancias</h2>

            <div className="ontology-class-v2-pair">
              <div><span>res cogitans</span></div>
              <b>↔</b>
              <div><span>res extensa</span></div>
            </div>

            <p>
              Una vez separadas mente y cuerpo surge una nueva dificultad:
              explicar cómo algo no extenso puede actuar sobre un cuerpo
              extenso y viceversa. Descartes busca esa conexión en la glándula
              pineal y recurre a los llamados espíritus animales.
            </p>

            <aside className="ontology-class-v2-note">
              <strong>Problema abierto</strong>
              <p>
                La explicación no elimina satisfactoriamente la separación
                original. El problema será retomado por Malebranche, Spinoza
                y Leibniz.
              </p>
            </aside>
          </section>

          <section id="spinoza">
            <span className="ontology-class-v2-number">10</span>
            <p className="ontology-class-v2-eyebrow">
              Una substantia
            </p>
            <h2>Spinoza: una respuesta monista</h2>

            <p>
              Spinoza radicaliza la definición de sustancia: aquello que es en
              sí y no necesita de otra cosa para existir. Si el mundo y el ser
              humano dependen de Dios, entonces no son sustancias
              independientes en sentido estricto.
            </p>

            <div className="ontology-class-v2-cartesian">
              <div>
                <span>sustancia</span>
                <strong>Dios</strong>
              </div>
              <div>
                <span>atributos</span>
                <strong>pensamiento · extensión</strong>
              </div>
              <div>
                <span>modos</span>
                <strong>seres particulares</strong>
              </div>
            </div>

            <div className="ontology-class-v2-contrast">
              <div>
                <span>Descartes</span>
                <strong>dualismo</strong>
              </div>
              <b>vs.</b>
              <div>
                <span>Spinoza</span>
                <strong>monismo</strong>
              </div>
            </div>

            <p>
              La fórmula “el hombre es un cuerpo pensante” resume el cambio:
              mente y cuerpo dejan de ser dos sustancias separadas. La clase
              introduce además la idea de Dios como causa inmanente, no
              transitiva.
            </p>
          </section>

          <section id="tarea">
            <span className="ontology-class-v2-number">11</span>
            <p className="ontology-class-v2-eyebrow">
              Lectio
            </p>
            <h2>Comenzar la Ética de Spinoza</h2>

            <div className="ontology-class-v2-homework">
              <div>
                <span>Autor</span>
                <strong>Baruch Spinoza</strong>
              </div>
              <div>
                <span>Texto</span>
                <strong>Ética · Parte I</strong>
              </div>
              <div>
                <span>Extensión</span>
                <strong>pp. 11–35 · Parte I, “De Dios”</strong>
              </div>
              <div>
                <span>Para</span>
                <strong>Siguiente clase</strong>
              </div>
            </div>

            <aside className="ontology-class-v2-note">
              <strong>Paginación de la lectura</strong>
              <p>
                Para la edición de Fondo de Cultura Económica traducida por
                Óscar Cohan, la Parte I, “De Dios”, va de la p. 11 a la p. 49.
                La tarea del 24 de agosto queda fijada en pp. 11–35, es decir,
                las primeras 25 páginas indicadas por el profesor.
              </p>
            </aside>

            <p>
              El profesor advierte que el texto puede resultar árido porque
              sigue un modo geométrico: definiciones, proposiciones y
              demostraciones se encadenan lógicamente, de modo que conviene
              seguir con atención el orden de los argumentos.
            </p>
          </section>

          
        </article>
      </div>

      <footer className="ontology-class-v2-footer">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <span>cogito · substantia · Deus sive Natura</span>
        <span>XIX · VIII · MMXXVI</span>
      </footer>
    </main>
  )
}
