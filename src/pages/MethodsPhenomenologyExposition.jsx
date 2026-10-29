import { Link } from 'react-router'
import './MethodsPhenomenologyExposition.css'

const stages = [
  {
    number: '01',
    title: 'El problema',
    lead: 'Medir un acontecimiento no equivale a comprender cómo se vive.',
    body: 'La exposición abre contrastando una pregunta cuantitativa con una fenomenológica. El caso conductor será el miedo ante una amenaza recibida por el celular: el mismo hecho admite medición de frecuencia, pero la fenomenología pregunta por su significado vivido.',
  },
  {
    number: '02',
    title: 'El fenómeno',
    lead: 'Investigar lo que aparece tal como se da en la experiencia.',
    body: 'Fenómeno no funciona aquí como sinónimo de dato raro o apariencia engañosa. Es aquello que se muestra a una conciencia situada. El método comienza describiendo antes de imponer una explicación causal.',
  },
  {
    number: '03',
    title: 'Intencionalidad',
    lead: 'La conciencia siempre está dirigida hacia algo.',
    body: 'Brentano aparece como antecedente decisivo: temer es temer algo, recordar es recordar algo, esperar es esperar algo. La intencionalidad no significa simplemente proponerse hacer una acción.',
  },
  {
    number: '04',
    title: 'Epojé',
    lead: 'Suspender explicaciones automáticas para volver a la experiencia.',
    body: 'No significa negar el mundo ni olvidar todo conocimiento. Significa poner entre paréntesis, provisionalmente, explicaciones como «esto es ansiedad», «las redes sociales causan esto» o «la persona exagera», para describir primero cómo aparece la vivencia.',
  },
  {
    number: '05',
    title: 'Noesis y noema',
    lead: 'Analizar la correlación entre el acto vivido y aquello que aparece.',
    body: 'Noesis: temer, anticipar, vigilar, evitar. Noema: el mensaje como amenaza, el teléfono como vía de acceso del agresor, el espacio cotidiano como lugar que puede dejar de sentirse seguro. No son dos objetos aislados, sino polos de una correlación intencional.',
  },
  {
    number: '06',
    title: 'Horizontes',
    lead: 'La experiencia tiene cuerpo, espacio, tiempo y mundo.',
    body: 'El miedo puede tensar el cuerpo, transformar una habitación en un espacio vulnerable y llenar el futuro de anticipación. Estas dimensiones ayudan a evitar una descripción reducida a «la persona se sintió mal».',
  },
  {
    number: '07',
    title: 'Variación eidética',
    lead: 'Modificar imaginariamente el caso para probar qué rasgos parecen necesarios.',
    body: '¿Persiste el miedo sin agresor físicamente presente? ¿Qué cambia si la amenaza deja de ser inminente? ¿Qué sucede si la persona se imagina invulnerable? El resultado son candidatos estructurales, no una esencia universal demostrada automáticamente.',
  },
  {
    number: '08',
    title: 'El límite hermenéutico',
    lead: 'La reducción no elimina nuestra situación histórica y lingüística.',
    body: 'La tensión Husserl–Heidegger eleva la exposición: Husserl enfatiza suspensión y estructura del aparecer; Heidegger obliga a preguntar desde qué mundo, historia y relaciones ya comprendemos aquello que investigamos.',
  },
]

const technical = [
  ['Fenómeno delimitado', 'Experiencia de miedo ante una amenaza recibida digitalmente; no «el celular» en general.'],
  ['Participantes', 'Selección intencional de personas que hayan vivido el fenómeno relevante.'],
  ['Acceso', 'Entrevistas abiertas, relatos situados, observación o materiales pertinentes al caso.'],
  ['Preguntas', 'Descriptivas: qué ocurrió, qué apareció primero, qué cambió en cuerpo, espacio y tiempo.'],
  ['Registro', 'Conservar la diferencia entre lo que la persona relata y lo que el investigador interpreta.'],
  ['Análisis', 'Unidades de sentido, correlaciones intencionales, horizontes y variaciones imaginativas.'],
]

const defenses = [
  '¿Por qué sigue siendo investigación si no mide porcentajes?',
  '¿Cuál es la diferencia entre estudio de caso y fenomenología?',
  '¿Qué suspende exactamente la epojé?',
  '¿Qué diferencia hay entre noesis y noema?',
  '¿Cómo se obtiene una estructura sin inventarla?',
  '¿Qué papel cumple la variación eidética?',
  '¿Por qué la selección de participantes no tiene que ser aleatoria?',
  '¿Qué ocurre si el participante miente o se interpreta mal a sí mismo?',
  '¿En qué se distinguen Husserl y Heidegger?',
  '¿Por qué esto no es simplemente psicología?',
]

export default function MethodsPhenomenologyExposition() {
  return (
    <main className="phen-exp">
      <nav className="phen-exp__nav">
        <Link to="/semestre/5/metodos-de-investigacion">← Métodos de Investigación</Link>
        <Link to="/semestre/5/metodos-de-investigacion/clase/26-octubre">Clase del 26 de octubre ↗</Link>
      </nav>

      <header className="phen-exp__hero">
        <p>STUDIUM · FI104 · PREPARACIÓN DE EXPOSICIÓN</p>
        <h1>Fenomenología como <em>método de investigación filosófica</em></h1>
        <p className="phen-exp__dek">
          Del estudio de caso a la estructura de la experiencia: una exposición diseñada para
          demostrar el método mientras se aplica a un caso concreto.
        </p>
        <div className="phen-exp__thesis">
          <span>Tesis rectora</span>
          <strong>
            La fenomenología no pregunta primero cuántas veces ocurre algo, sino cómo se da,
            qué significa para quien lo vive y qué estructura puede reconocerse en su aparecer.
          </strong>
        </div>
      </header>

      <section className="phen-exp__system-entry" aria-label="Sistema 2D para proyección">
        <div>
          <span>SISTEMA 2D · PROYECCIÓN EN CLASE</span>
          <h2>Método primero. Aplicación después.</h2>
          <p>Doce nodos en dos movimientos: primero el método fenomenológico; después su aplicación completa a un caso. Incluye guía secuencial, modo estudio y proyección.</p>
        </div>
        <Link to="/estudio/fenomenologia-metodo/sistema-2d">Abrir sistema 2D ↗</Link>
      </section>

      <aside className="phen-exp__boundary">
        <strong>Frontera de fuentes</strong>
        <p>
          Esta página integra contenidos de las clases del 7, 14, 19, 21 y 26 de octubre.
          La arquitectura de exposición, el caso conductor y las transiciones son una
          reconstrucción editorial de estudio; no se presentan como guion literal del profesor.
        </p>
      </aside>

      <section className="phen-exp__figure" aria-labelledby="phen-exp-figure-title">
        <div className="phen-exp__label">FIGURA 01 · ESQUEMA ORIGINAL PHILOSOPHIA</div>
        <h2 id="phen-exp-figure-title">El recorrido metodológico completo</h2>
        <figure>
          <img
            src={`${import.meta.env.BASE_URL}images/metodos/fenomenologia-exposicion-magna.svg`}
            alt="Esquema del método fenomenológico: caso concreto, acceso técnico, epojé, correlación noesis-noema, horizontes, variación eidética y estructura provisional."
          />
          <figcaption>
            Esquema editorial original. Integra momentos trabajados en distintas sesiones; no
            reproduce una diapositiva ni una secuencia literal única del profesor.
          </figcaption>
        </figure>
      </section>

      <section className="phen-exp__case">
        <div>
          <span className="phen-exp__label">CASO CONDUCTOR</span>
          <h2>Miedo ante una amenaza digital</h2>
          <p>
            Una persona recibe en su teléfono un mensaje que interpreta como amenazante. No hay
            agresor físicamente presente, pero aparecen anticipación, vigilancia, tensión corporal
            y una transformación del espacio cotidiano.
          </p>
        </div>
        <div className="phen-exp__contrast">
          <article>
            <span>Pregunta cuantitativa</span>
            <strong>¿Cuántas veces ocurre y con qué frecuencia se reporta miedo?</strong>
          </article>
          <article>
            <span>Pregunta fenomenológica</span>
            <strong>¿Cómo aparece la amenaza y qué significa vivirla?</strong>
          </article>
        </div>
      </section>

      <section className="phen-exp__technical">
        <div className="phen-exp__label">DOS NIVELES QUE NO DEBEN CONFUNDIRSE</div>
        <h2>Estudio de caso técnicamente; fenomenología filosóficamente</h2>
        <p className="phen-exp__intro">
          El estudio de caso organiza el acceso a una situación delimitada. La fenomenología
          determina qué tipo de pregunta se formula y cómo se analiza la experiencia.
        </p>
        <div className="phen-exp__techgrid">
          {technical.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="phen-exp__stages">
        <div className="phen-exp__label">ARQUITECTURA FILOSÓFICA</div>
        <h2>Ocho movimientos para explicar el método</h2>
        <div className="phen-exp__stagegrid">
          {stages.map((stage) => (
            <article key={stage.number}>
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <strong>{stage.lead}</strong>
              <p>{stage.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="phen-exp__demo">
        <div className="phen-exp__label">DEMOSTRACIÓN EN VIVO</div>
        <h2>Cómo pasar de una frase cotidiana a un análisis fenomenológico</h2>
        <div className="phen-exp__demo-flow">
          <div>
            <span>Relato</span>
            <p>«Vi el mensaje y sentí que podía pasarme algo aunque estaba solo en mi cuarto.»</p>
          </div>
          <b>→</b>
          <div>
            <span>Noesis</span>
            <p>Temer, anticipar, vigilar, interpretar peligro.</p>
          </div>
          <b>→</b>
          <div>
            <span>Noema</span>
            <p>El mensaje como amenaza; la ausencia física como presencia posible del daño.</p>
          </div>
          <b>→</b>
          <div>
            <span>Horizonte</span>
            <p>El cuarto cambia de sentido; el futuro aparece ocupado por la posibilidad de daño.</p>
          </div>
        </div>
      </section>

      <section className="phen-exp__tension">
        <article>
          <span>HUSSERL</span>
          <h2>¿Qué estructura aparece si suspendo mis presupuestos?</h2>
          <p>
            Epojé, reducción y análisis intencional buscan describir cómo se da la experiencia sin
            empezar por una explicación naturalizada.
          </p>
        </article>
        <div className="phen-exp__versus">↔</div>
        <article>
          <span>HEIDEGGER</span>
          <h2>¿Puede alguien comprender desde ningún lugar?</h2>
          <p>
            La comprensión siempre es situada: historia, lenguaje, relaciones y mundo forman parte
            del horizonte desde el cual algo puede aparecer con sentido.
          </p>
        </article>
      </section>

      <section className="phen-exp__epistemic">
        <div className="phen-exp__label">PROBLEMA EPISTEMOLÓGICO</div>
        <h2>¿Y si el participante miente?</h2>
        <p>
          El testimonio no es una ventana infalible hacia una mente privada. El rigor consiste en
          volver a escenas concretas, separar descripción de interpretación, comparar relatos,
          explicitar límites inferenciales y vigilar los propios presupuestos del investigador.
        </p>
        <p>
          Este punto conecta con la pregunta discutida en clase a propósito de Luis Villoro:
          conducta, lenguaje y creencia no se identifican de manera automática.
        </p>
      </section>

      <section className="phen-exp__defense">
        <div className="phen-exp__label">DEFENSA ORAL</div>
        <h2>Diez preguntas que debe poder responder sin diapositiva</h2>
        <ol>
          {defenses.map((question) => <li key={question}>{question}</li>)}
        </ol>
      </section>

      <section className="phen-exp__close">
        <span>IDEA DE CIERRE · FORMULACIÓN EDITORIAL</span>
        <blockquote>
          El rigor fenomenológico no consiste en convertir la experiencia en número, sino en
          volver explícito el camino por el cual una vivencia se describe, se depura, se analiza
          y se propone como estructura sin ocultar los límites de la interpretación.
        </blockquote>
        <p>
          La exposición queda preparada para convertirse después en diapositivas: problema,
          fundamento, demostración, crítica y cierre.
        </p>
      </section>

      <footer className="phen-exp__footer">
        <Link to="/semestre/5/metodos-de-investigacion/clase/21-octubre">
          ← Volver al protocolo de noesis/noema
        </Link>
        <span>PHILOSOPHIA · FI104 · 2026-B</span>
      </footer>
    </main>
  )
}
