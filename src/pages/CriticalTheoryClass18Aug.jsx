import { Link } from 'react-router'
import transcript from '../content/teoria-critica-2026-08-18.md?raw'

const sections = [
  ['00', 'encuadre', 'Encuadre'],
  ['01', 'objetivo', 'Objetivo del curso'],
  ['02', 'pluralidad', 'Pluralidad filosófica'],
  ['03', 'dialectica', 'Analítica y dialéctica'],
  ['04', 'aprender', 'Aprender a filosofar'],
  ['05', 'transdisciplina', 'Transdisciplina'],
  ['06', 'genero', 'Mujeres y perspectiva feminista'],
  ['07', 'evaluacion', 'Evaluación'],
  ['08', 'lectura', 'Cómo trabajar las lecturas'],
  ['09', 'frankfurt', 'Primer acercamiento a Frankfurt'],
  ['10', 'proxima', 'Próxima sesión'],
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

export default function CriticalTheoryClass18Aug() {
  return (
    <main className="ct-class-page">
      <nav className="ct-class-nav">
        <Link to="/semestre/5/teoria-critica">
          ← Teoría Crítica
        </Link>

        <Link to="/" className="ct-class-brand">
          Φ · Philosophia
        </Link>

        <span>XVIII · VIII · MMXXVI</span>
      </nav>

      <header className="ct-class-hero">
        <div className="ct-class-ghost" aria-hidden="true">
          KRITIK
        </div>

        <p>Teoría Crítica · Primera clase</p>

        <h1>
          Encuadre,
          <em>pluralidad y crítica</em>
        </h1>

        <p className="ct-class-lead">
          La primera sesión establece el tono del curso: una formación
          filosófica plural, una lectura de la Teoría Crítica como
          investigación social transdisciplinaria y una evaluación basada
          en participación, examen abierto y exposición con defensa.
        </p>

        <div className="ct-class-axis">
          <span>filosofía</span>
          <b>+</b>
          <span>ciencias sociales</span>
          <b>→</b>
          <span>Teoría Crítica</span>
        </div>
      </header>

      <div className="ct-class-layout">
        <aside className="ct-class-index">
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

        <article className="ct-class-article">
          <section id="encuadre">
            <span className="ct-class-number">00</span>
            <p className="ct-class-eyebrow">Praefatio</p>
            <h2>Presentarse antes de comenzar</h2>

            <p>
              La sesión inicia con un encuadre humano del grupo. Dinora
              pide que cada persona diga quién es, por qué eligió Teoría
              Crítica, qué relación tiene con la filosofía y cuáles son sus
              intereses fuera de ella. La intención es evitar que la clase
              quede reducida a contenidos abstractos y reconocer a quienes
              participan en ella.
            </p>

            <div className="ct-class-callout">
              <span>Idea de fondo</span>
              <strong>
                Darle cuerpo humano a la clase antes de entrar a la
                formalidad del programa.
              </strong>
            </div>
          </section>

          <section id="objetivo">
            <span className="ct-class-number">01</span>
            <p className="ct-class-eyebrow">Finis cursus</p>
            <h2>Qué debería dejar el curso</h2>

            <p>
              El objetivo expresado por la profesora es que, al terminar el
              semestre, el grupo no sea tomado “en curva” cuando se hable de
              Teoría Crítica: conocer referentes, temas, problemas,
              metodologías y formas de razonamiento propias de esta tradición.
            </p>

            <div className="ct-class-goals">
              <article>
                <span>01</span>
                <strong>Referentes</strong>
                <p>Reconocer autores y etapas del Instituto.</p>
              </article>

              <article>
                <span>02</span>
                <strong>Problemas</strong>
                <p>Comprender las preguntas sociales y filosóficas centrales.</p>
              </article>

              <article>
                <span>03</span>
                <strong>Metodologías</strong>
                <p>Identificar formas específicas de investigación social.</p>
              </article>

              <article>
                <span>04</span>
                <strong>Razonamiento</strong>
                <p>Aprender modos de pensar que no se agotan en la lógica clásica.</p>
              </article>
            </div>
          </section>

          <section id="pluralidad">
            <span className="ct-class-number">02</span>
            <p className="ct-class-eyebrow">Pluralitas</p>
            <h2>Una formación filosófica plural</h2>

            <p>
              Dinora señala que la formación filosófica pierde riqueza cuando
              una sola tradición domina casi por completo el currículo. La
              pluralidad permite conocer diversas maneras de hacer filosofía y,
              después de haberlas trabajado seriamente, decidir qué recursos
              resultan más fértiles para cada problema.
            </p>

            <div className="ct-class-contrast">
              <div>
                <span>No se trata de</span>
                <strong>reemplazar una tradición por otra</strong>
              </div>

              <b>≠</b>

              <div>
                <span>Se trata de</span>
                <strong>ampliar las formas disponibles de filosofar</strong>
              </div>
            </div>
          </section>

          <section id="dialectica">
            <span className="ct-class-number">03</span>
            <p className="ct-class-eyebrow">Genealogia</p>
            <h2>Analítica, Kant, Hegel y pensamiento dialéctico</h2>

            <p>
              La profesora presenta de manera deliberadamente esquemática una
              genealogía para ubicar el conflicto: la tradición analítica y la
              Teoría Crítica desarrollan ideas distintas sobre investigación,
              lógica y sociedad. El trasfondo moderno de esa diferencia se
              remonta a la tensión entre Kant y Hegel.
            </p>

            <div className="ct-class-genealogy">
              <div>
                <span>Kant</span>
                <strong>línea analítica</strong>
              </div>

              <b>↔</b>

              <div>
                <span>Hegel</span>
                <strong>pensamiento dialéctico</strong>
              </div>

              <b>→</b>

              <div className="ct-class-genealogy-result">
                <span>siglo XX</span>
                <strong>Teoría Crítica</strong>
              </div>
            </div>

            <p>
              Esa genealogía es una guía pedagógica de la sesión, no una
              taxonomía exhaustiva. La propia clase reconoce cruces y matices:
              la Teoría Crítica también conserva elementos de Kant.
            </p>

            <aside className="ct-class-note">
              <strong>Adorno</strong>
              <p>
                Su dialéctica negativa busca una forma de razonamiento que no
                se acomoda sin más a los principios de identidad y a la lógica
                clásica que estructuran otras tradiciones filosóficas.
              </p>
            </aside>
          </section>

          <section id="aprender">
            <span className="ct-class-number">04</span>
            <p className="ct-class-eyebrow">Disciplina philosophandi</p>
            <h2>Se aprende filosofía viendo filosofar</h2>

            <p>
              Una de las recomendaciones metodológicas más fuertes de la clase
              es no esperar que el oficio filosófico se aprenda únicamente
              mediante una lista externa de pasos. Para Dinora, una vía más
              fértil consiste en estudiar con cuidado cómo filosofa alguien
              que ya ha construido una obra.
            </p>

            <div className="ct-class-method">
              <span>leer</span>
              <b>→</b>
              <span>releer</span>
              <b>→</b>
              <span>reconstruir</span>
              <b>→</b>
              <span>ver cómo piensa</span>
              <b>→</b>
              <span>apropiarse del método</span>
            </div>

            <div className="ct-class-callout">
              <span>Ejemplo de la profesora</span>
              <strong>
                Adorno no sólo le enseñó contenidos: le enseñó una manera de
                problematizar y de hacer filosofía.
              </strong>
            </div>
          </section>

          <section id="transdisciplina">
            <span className="ct-class-number">05</span>
            <p className="ct-class-eyebrow">Transdisciplina</p>
            <h2>La filosofía es indispensable, pero no suficiente</h2>

            <p>
              La Teoría Crítica no se concibe como filosofía aislada. Para
              comprender la sociedad necesita entrar en diálogo con
              sociología, historia, psicología y otras ciencias sociales.
              Dinora la presenta como una forma de investigación
              transdisciplinaria que también produjo innovaciones
              metodológicas.
            </p>

            <div className="ct-class-disciplines">
              <div><span>Φ</span><strong>Filosofía</strong></div>
              <div><span>S</span><strong>Sociología</strong></div>
              <div><span>H</span><strong>Historia</strong></div>
              <div><span>Ψ</span><strong>Psicología</strong></div>
              <div><span>CS</span><strong>Ciencias sociales</strong></div>
            </div>

            <div className="ct-class-synthesis">
              <span>Principio</span>
              <strong>
                La filosofía es indispensable para comprender la sociedad,
                pero por sí sola no es suficiente.
              </strong>
            </div>

            <p>
              La sesión también atribuye a esta tradición una temprana
              disposición a combinar investigación cuantitativa y cualitativa,
              un rasgo que será importante para entender su concepción de la
              investigación social.
            </p>
          </section>

          <section id="genero">
            <span className="ct-class-number">06</span>
            <p className="ct-class-eyebrow">Historia ampliada</p>
            <h2>Mujeres, feminismo y reconstrucción del Instituto</h2>

            <p>
              Dinora subraya que la historia tradicional del Instituto fue
              contada durante mucho tiempo casi exclusivamente mediante sus
              figuras masculinas. Investigaciones más recientes recuperan a
              mujeres que participaron en la comunidad intelectual y permiten
              entender mejor la formación de ciertas críticas al patriarcado.
            </p>

            <div className="ct-class-two">
              <article>
                <span>Historia intelectual</span>
                <strong>¿Quiénes quedaron fuera del relato?</strong>
                <p>
                  Recuperar contribuciones invisibilizadas modifica la imagen
                  heredada de la Escuela de Frankfurt.
                </p>
              </article>

              <article>
                <span>Línea de investigación</span>
                <strong>Teoría Crítica + teoría feminista</strong>
                <p>
                  La profesora trabaja cruces con estudios de género,
                  violencia y filosofía moral.
                </p>
              </article>
            </div>
          </section>

          <section id="evaluacion">
            <span className="ct-class-number">07</span>
            <p className="ct-class-eyebrow">Evaluatio</p>
            <h2>Cómo se evaluará realmente</h2>

            <div className="ct-class-eval">
              <div>
                <strong>30%</strong>
                <span>Participación activa</span>
              </div>

              <div>
                <strong>30%</strong>
                <span>Examen</span>
              </div>

              <div>
                <strong>40%</strong>
                <span>Exposición y defensa</span>
              </div>
            </div>

            <div className="ct-class-eval-details">
              <article>
                <span>Participación</span>
                <h3>Estar, leer y aportar</h3>
                <p>
                  Asistencia, atención, preguntas, comentarios y aportaciones
                  sustentadas en las lecturas. Si hay una ausencia, la
                  profesora pide avisarla por correo.
                </p>
              </article>

              <article>
                <span>Examen</span>
                <h3>Cuaderno y lecturas abiertas</h3>
                <p>
                  Se prevé aproximadamente para octubre. Habrá aviso con al
                  menos dos semanas de anticipación. Puede usarse el cuaderno
                  y las lecturas impresas, pero no celular ni computadora.
                </p>
              </article>

              <article>
                <span>Exposición y defensa</span>
                <h3>Un tema + preguntas</h3>
                <p>
                  Elegir un tema trabajado en clase, prepararlo a partir de
                  una lectura, exponerlo y responder preguntas en un formato
                  parecido a un pequeño coloquio.
                </p>
              </article>
            </div>

            <aside className="ct-class-ai">
              <span>IA y evaluación</span>
              <strong>
                Este semestre no habrá trabajo final escrito como mecanismo
                principal de evaluación.
              </strong>
              <p>
                La profesora explica esta decisión por los problemas
                académicos y éticos que ha encontrado en usos poco
                transparentes de IA. Prefiere una exposición con defensa
                mientras docentes y estudiantes desarrollan mejores criterios
                para utilizar estas herramientas.
              </p>
            </aside>
          </section>

          <section id="lectura">
            <span className="ct-class-number">08</span>
            <p className="ct-class-eyebrow">Lectio</p>
            <h2>Las indicaciones de Classroom son un faro</h2>

            <p>
              Las indicaciones que acompañan cada lectura señalan mínimos que
              conviene localizar y anotar. No hay que enviar reportes de
              lectura ni subirlos a la plataforma. Sin embargo, la profesora
              recomienda elaborar notas propias para sostener la participación
              y preparar el examen.
            </p>

            <div className="ct-class-reading-flow">
              <div><span>01</span><strong>Leer la guía</strong></div>
              <b>→</b>
              <div><span>02</span><strong>Ubicar conceptos</strong></div>
              <b>→</b>
              <div><span>03</span><strong>Tomar notas</strong></div>
              <b>→</b>
              <div><span>04</span><strong>Participar</strong></div>
              <b>→</b>
              <div><span>05</span><strong>Preparar examen</strong></div>
            </div>
          </section>

          <section id="frankfurt">
            <span className="ct-class-number">09</span>
            <p className="ct-class-eyebrow">Initium</p>
            <h2>Primer acercamiento a la Escuela de Frankfurt</h2>

            <p>
              La sesión deja preparado el inicio del contenido propiamente
              dicho. Dinora presenta la lectura de Reale y Antiseri como una
              especie de biografía intelectual que recorre tanto la
              conformación del Instituto para la Investigación Social como
              varios conceptos centrales de la Teoría Crítica.
            </p>

            <div className="ct-class-first-reading">
              <span>Lectura 1</span>
              <strong>Reale y Antiseri</strong>
              <em>“La Escuela de Frankfurt”</em>
            </div>

            <Link
              to="/tareas/teoria-critica/tarea-1"
              className="ct-class-task-link"
            >
              Abrir sistematización de la Tarea 1
              <span>↗</span>
            </Link>
          </section>

          <section id="proxima">
            <span className="ct-class-number">10</span>
            <p className="ct-class-eyebrow">Continuatio</p>
            <h2>Qué sigue</h2>

            <p>
              La próxima sesión comenzará ya con el curso en sentido estricto:
              se retomará la primera lectura y se dialogará sobre el panorama
              del Instituto, su formación histórica y los conceptos que
              permiten una primera aproximación a la Teoría Crítica.
            </p>

            <div className="ct-class-next">
              <span>No hay una tarea nueva separada</span>
              <strong>
                Continúa vigente la preparación de la primera lectura de
                Reale y Antiseri y las indicaciones asociadas en Classroom.
              </strong>
            </div>
          </section>

          
        </article>
      </div>

      <footer className="ct-class-footer">
        <Link to="/semestre/5/teoria-critica">
          ← Teoría Crítica
        </Link>

        <span>Negation · Kritik · Praxis</span>
        <span>18 · VIII · 2026</span>
      </footer>
    </main>
  )
}
