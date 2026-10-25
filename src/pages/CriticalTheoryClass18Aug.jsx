import { useState } from 'react'
import { Link } from 'react-router'
import './CriticalTheoryClass18Aug.css'
import Critical18ThematicAtlas from '../components/critical/Critical18ThematicAtlas'
import Critical18SectionStudy from '../components/critical/Critical18SectionStudy'
import { imagesForCriticalTheoryClass } from '../data/criticalTheoryImages'

// Se preservan íntegros los once apartados académicos de la página original.
// La estructura editorial adicional es reconstrucción de estudio, no cita docente.
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

const rehearsal = [
  {
    prompt: '¿Por qué la pluralidad filosófica es una condición de formación y no una guerra de escuelas?',
    cue: 'La profesora no propone sustituir la filosofía analítica: pide conocer tradiciones distintas para disponer de más recursos al pensar.',
    target: 'pluralidad',
  },
  {
    prompt: '¿Qué límite tiene el esquema Kant / Hegel presentado en la primera sesión?',
    cue: 'Es una genealogía pedagógica muy general, no una taxonomía de escuelas. La propia sesión reconoce que la Teoría Crítica también conserva elementos kantianos.',
    target: 'dialectica',
  },
  {
    prompt: '¿Por qué aprender un método filosófico no equivale a memorizar una receta?',
    cue: 'La orientación expresada en clase fue leer, reconstruir y observar el modo de problematizar de los autores, no repetir instrucciones externas.',
    target: 'aprender',
  },
  {
    prompt: '¿Cómo se distribuye la evaluación y qué materiales se permiten en el examen?',
    cue: 'Participación 30 %, examen 30 %, exposición con defensa 40 %. Para el examen se contemplan cuaderno y lecturas impresas, no dispositivos electrónicos.',
    target: 'evaluacion',
  },
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function CriticalTheoryClass18Aug() {
  const [activeCard, setActiveCard] = useState(0)
  const [showCue, setShowCue] = useState(false)
  const current = rehearsal[activeCard]

  return (
    <main className="ct18-page" aria-label="Edición académica de la primera clase de Teoría Crítica">
      <section className="ct18-opening" aria-labelledby="ct18-opening-title">
        <div className="ct18-opening-meta"><span>FOLIO 001 / APERTURA DEL CURSO</span><span>18 AGO 2026 · FI265</span></div>
        <div className="ct18-opening-grid">
          <div>
            <p className="ct18-eyebrow">Notas de aula · Edición de estudio</p>
            <h2 id="ct18-opening-title">Antes de la teoría, <em>una forma de estudiar.</em></h2>
            <p className="ct18-deck">La sesión reúne tres planos diferentes: la disposición plural hacia la filosofía, el horizonte interdisciplinario de la Teoría Crítica y las condiciones concretas para trabajar el semestre.</p>
            <p className="ct18-disclaimer">Los vínculos de este esquema son una organización editorial de los temas tratados, no un dibujo literal de la profesora.</p>
          </div>
          <div className="ct18-cover-graphic" role="img" aria-label="Tres planos de la sesión: pluralidad filosófica, investigación social transdisciplinaria y acuerdos de estudio. Son ejes de encuadre, no una deducción entre ellos.">
            <div className="ct18-graphic-top">UNA CLASE / TRES PLANOS</div>
            <div className="ct18-graphic-node"><span>01</span><strong>Pluralidad filosófica</strong><small>Ampliar recursos para pensar</small></div>
            <div className="ct18-graphic-node"><span>02</span><strong>Investigación social</strong><small>Filosofía en diálogo con ciencias sociales</small></div>
            <div className="ct18-graphic-node"><span>03</span><strong>Acuerdos de estudio</strong><small>Lecturas, participación y evaluación</small></div>
            <div className="ct18-graphic-bottom">RELACIÓN: EJES DEL ENCUADRE / RECONSTRUCCIÓN EDITORIAL</div>
          </div>
        </div>
      </section>

      <figure className="ct18-licensed-figure">
        {imagesForCriticalTheoryClass('/semestre/5/teoria-critica/clase/18-agosto').map((image) => (
          <div className="ct18-licensed-item" key={image.id}>
            <img
              src={`${import.meta.env.BASE_URL}${image.imagePath}`}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>01 / IMAGEN DE ESTUDIO · {image.imageLicense}</span>
              <strong>Pluralidad · investigación social · lectura</strong>
              <p>{image.pedagogicalPurpose}</p>
              <small>{image.imageAttribution} · {image.sourceBoundary}</small>
            </figcaption>
          </div>
        ))}
      </figure>

      <Critical18ThematicAtlas />
      <div className="ct18-original-heading" id="ct18-documento">
        <span>03 / ARCHIVO DOCUMENTAL</span>
        <div><p>FUENTE / DESARROLLO CONSERVADO</p><h2>La clase, apartado por apartado.</h2><p>El atlas anterior interpreta y organiza los temas para estudiarlos. A continuación se conserva el desarrollo académico ya documentado, con sus ejemplos, criterios de evaluación y tarea.</p></div>
      </div>
      <div className="ct18-reading-layout">
        <aside className="ct18-toc" aria-label="Índice de la primera clase">
          <div className="ct18-toc-head">ÍNDICE / 11 APARTADOS</div>
          <nav aria-label="Ir a un apartado">
            {sections.map(([number, id, label]) => (
              <button type="button" key={id} onClick={() => goToSection(id)}>
                <span>{number}</span><span>{label}</span>
              </button>
            ))}
          </nav>
          <p>La numeración reproduce el orden del desarrollo previamente registrado; no son fases deductivas.</p>
        </aside>
        <article className="ct18-chapters">

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
            <Critical18SectionStudy sectionId="encuadre" />
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
            <Critical18SectionStudy sectionId="objetivo" />
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
            <Critical18SectionStudy sectionId="pluralidad" />
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
            <Critical18SectionStudy sectionId="dialectica" />
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
            <Critical18SectionStudy sectionId="aprender" />
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
            <Critical18SectionStudy sectionId="transdisciplina" />
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
            <Critical18SectionStudy sectionId="genero" />
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
            <Critical18SectionStudy sectionId="evaluacion" />
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
            <Critical18SectionStudy sectionId="lectura" />
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
            <Critical18SectionStudy sectionId="frankfurt" />
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
            <Critical18SectionStudy sectionId="proxima" />
          </section>

          

        </article>
      </div>
      <section className="ct18-rehearsal" aria-labelledby="ct18-review-heading">
        <div className="ct18-rehearsal-top"><span>CUADERNO ACTIVO / REPASO</span><span>{String(activeCard + 1).padStart(2, '0')} / {String(rehearsal.length).padStart(2, '0')}</span></div>
        <h2 id="ct18-review-heading">Recordar es volver a argumentar.</h2>
        <p>Preguntas de práctica elaboradas por PHILOSOPHIA. No se atribuyen a la profesora ni a un examen oficial.</p>
        <div className="ct18-rehearsal-card">
          <span>PREGUNTA EDITORIAL {String(activeCard + 1).padStart(2, '0')}</span>
          <h3>{current.prompt}</h3>
          {showCue && <div className="ct18-rehearsal-answer" role="status"><strong>Orientación para responder</strong><p>{current.cue}</p><button type="button" onClick={() => goToSection(current.target)}>Volver al apartado relacionado ↗</button></div>}
          <div className="ct18-rehearsal-actions">
            <button type="button" onClick={() => setShowCue(!showCue)} aria-expanded={showCue}>{showCue ? 'Ocultar orientación' : 'Mostrar orientación'}</button>
            <button type="button" onClick={() => { setActiveCard((activeCard + 1) % rehearsal.length); setShowCue(false) }}>Siguiente pregunta →</button>
          </div>
        </div>
      </section>
      <footer className="ct18-endnote">
        <div><span>PROCEDENCIA Y LÍMITES</span><p><strong>Desarrollo:</strong> sistematización de la clase del 18 de agosto de 2026. <strong>Esquema y ejercicios:</strong> reconstrucción editorial de PHILOSOPHIA. La genealogía Kant/Hegel se presenta sólo como el encuadre esquemático de la sesión, no como historia filosófica exhaustiva.</p></div>
        <Link to="/tareas/teoria-critica/tarea-1">Reale y Antiseri · primera tarea ↗</Link>
      </footer>
    </main>
  )
}
