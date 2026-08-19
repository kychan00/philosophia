import { Link } from 'react-router'
import transcript from '../content/etica-2026-08-18.md?raw'

const sections = [
  ['00', 'encuadre', 'Encuadre'],
  ['01', 'religion', 'Sabiduría y religión'],
  ['02', 'responsabilidad', 'Nacimiento de la responsabilidad'],
  ['03', 'homero', 'Homero y la reparación'],
  ['04', 'presente', 'Responsabilidad hoy'],
  ['05', 'alteridad', 'Alteridad y tolerancia'],
  ['06', 'metodo', 'Método del curso'],
  ['07', 'siguiente', 'Próxima sesión'],
  ['08', 'transcripcion', 'Transcripción'],
]

const goToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function EthicsClass18Aug() {
  return (
    <main className="ethclass-page">
      <div className="ethclass-meander" aria-hidden="true" />

      <nav className="ethclass-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethclass-brand"><span>Φ</span> Philosophia</Link>
        <span>XVIII · VIII · MMXXVI</span>
      </nav>

      <header className="ethclass-hero">
        <div className="ethclass-columns" aria-hidden="true">
          <span /><span /><span /><span />
        </div>

        <div className="ethclass-ghost" aria-hidden="true">ΕΥΘΥΝΗ</div>

        <div className="ethclass-hero-inner">
          <p className="ethclass-kicker">ἦθος · αἰδώς · πρᾶξις · εὐθύνη</p>
          <div className="ethclass-medallion">I</div>

          <h1>
            Del destino
            <em>a la responsabilidad</em>
          </h1>

          <p className="ethclass-lead">
            Primera sesión de Ética · Escuelas clásicas. Aldo presenta la
            sabiduría griega antigua como el trasfondo desde el que se produce
            un largo tránsito: de explicar la acción mediante dioses, destino
            y fuerzas externas a asumir que la persona responde por sus
            decisiones y por sus consecuencias.
          </p>

          <div className="ethclass-thesis">
            <span>Tesis de la sesión</span>
            <strong>
              La ética comienza a tomar forma cuando el ser humano deja de
              justificar la acción únicamente por fuerzas externas y empieza
              a reconocerse responsable de lo que hace.
            </strong>
          </div>
        </div>
      </header>

      <div className="ethclass-layout">
        <aside className="ethclass-index">
          <p>Index lectionis</p>
          {sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{number}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ethclass-article">
          <section id="encuadre">
            <span className="ethclass-number">00</span>
            <p className="ethclass-eyebrow">Initium</p>
            <h2>La sabiduría griega como preámbulo de la ética</h2>

            <p>
              Aldo remite al primer bloque del programa y explica que antes de
              la ética filosófica hay un largo fondo religioso y cultural. El
              curso comenzará por ese preámbulo para entender cómo aparecen
              las primeras formas de regulación de la conducta.
            </p>

            <div className="ethclass-path">
              <span>religión</span><b>→</b>
              <span>sabiduría</span><b>→</b>
              <span>filosofía</span><b>→</b>
              <span>ética</span>
            </div>

            <aside className="ethclass-note">
              <strong>Nota documental</strong>
              <p>
                En la propia clase se detecta la inconsistencia del PDF que
                dice “Estética I: Escuelas Clásicas” en la portada aunque el
                contenido del curso es claramente de ética.
              </p>
            </aside>
          </section>

          <section id="religion">
            <span className="ethclass-number">01</span>
            <p className="ethclass-eyebrow">Sophia archaica</p>
            <h2>Revelación, oráculos, tragedia y daimon</h2>

            <p>
              Se mencionan orfismo, pitagorismo, misterios y el poema de
              Parménides. La escena de la diosa que comunica una verdad sirve
              para preguntar qué significa aceptar una norma o una verdad que
              proviene de un ámbito religioso.
            </p>

            <div className="ethclass-grid">
              <article>
                <strong>μοῖρα</strong>
                <span>destino</span>
                <p>Lo que parece exceder la elección individual.</p>
              </article>

              <article>
                <strong>δαίμων</strong>
                <span>daimon</span>
                <p>Mediación entre lo divino y la experiencia humana.</p>
              </article>

              <article>
                <strong>αἰδώς</strong>
                <span>vergüenza</span>
                <p>Una forma de sanción y conciencia social.</p>
              </article>
            </div>

            <p>
              La tragedia —con Edipo como ejemplo— permite pensar la tensión
              entre destino, interpretación y acción. Parménides conserva una
              forma narrativa religiosa, pero su contenido se vuelve decisivo
              para el pensamiento filosófico.
            </p>
          </section>

          <section id="responsabilidad">
            <span className="ethclass-number">02</span>
            <p className="ethclass-eyebrow">Euthynē</p>
            <h2>El giro hacia la responsabilidad personal</h2>

            <p>
              La sesión presenta la aparición de la ética como un proceso muy
              largo de secularización. El ser humano comienza a tomar su vida
              y sus decisiones en sus propias manos: ya no basta con atribuir
              el daño a un dios, al destino o a una fuerza ajena.
            </p>

            <div className="ethclass-transition">
              <div><span>Explicación externa</span><strong>“algo me hizo actuar”</strong></div>
              <b>→</b>
              <div><span>Giro ético</span><strong>“yo actué y respondo”</strong></div>
            </div>

            <div className="ethclass-callout">
              <span>Clave</span>
              <strong>
                Pedir disculpas, sentir vergüenza o exigir reparación supone
                tratar a las personas como responsables de sus acciones.
              </strong>
            </div>
          </section>

          <section id="homero">
            <span className="ethclass-number">03</span>
            <p className="ethclass-eyebrow">Homerus</p>
            <h2>Aquiles, Agamenón y la reparación</h2>

            <p>
              Aldo utiliza la disputa entre Aquiles y Agamenón para mostrar
              cómo una ofensa exige reparación pública. La clase se interesa
              especialmente por el momento en que una explicación religiosa
              de la conducta ya no parece suficiente para cancelar la
              responsabilidad del agente.
            </p>

            <div className="ethclass-homer">
              <div><span>Daño</span><strong>ofensa</strong></div>
              <b>→</b>
              <div><span>Respuesta</span><strong>disculpa</strong></div>
              <b>→</b>
              <div><span>Reparación</span><strong>restitución</strong></div>
            </div>
          </section>

          <section id="presente">
            <span className="ethclass-number">04</span>
            <p className="ethclass-eyebrow">Casus hodierni</p>
            <h2>Responsabilidad, omisión e información</h2>

            <p>
              La discusión se traslada al presente. El profesor pregunta si
              una persona puede declararse completamente ajena al daño cuando
              no lo ejecuta directamente, pero lo permite, lo ignora o
              participa en cadenas de consumo cuyos efectos podría conocer.
            </p>

            <div className="ethclass-cases">
              <article><h3>Omisión</h3><p>No intervenir también puede convertirse en un problema ético.</p></article>
              <article><h3>Consumo</h3><p>Las decisiones económicas pueden tener consecuencias sociales más allá del comprador.</p></article>
              <article><h3>Información</h3><p>La clase insiste en la responsabilidad de decidir con conocimiento de consecuencias previsibles.</p></article>
              <article><h3>Impacto ambiental</h3><p>Los hábitos cotidianos también se examinan desde sus costos materiales y ecológicos.</p></article>
            </div>
          </section>

          <section id="alteridad">
            <span className="ethclass-number">05</span>
            <p className="ethclass-eyebrow">Alteritas</p>
            <h2>De “los nuestros” a “los otros”</h2>

            <p>
              Otro eje importante es la distancia moral. La clase observa que
              solemos preocuparnos más por familia y personas cercanas, y que
              la distancia puede abrir espacio a prejuicios contra extranjeros,
              personas de otras culturas o grupos desconocidos.
            </p>

            <div className="ethclass-distance">
              <div><strong>yo</strong><span>proximidad</span></div>
              <div><strong>familia</strong><span>cuidado</span></div>
              <div><strong>comunidad</strong><span>pertenencia</span></div>
              <div><strong>extraño</strong><span>distancia</span></div>
              <div><strong>otro</strong><span>prejuicio posible</span></div>
            </div>

            <p>
              Aldo relaciona este problema con racismo, xenofobia y
              repugnancia, y sostiene que conocer aquello que nos resulta
              lejano o extraño puede favorecer comprensión y tolerancia.
            </p>
          </section>

          <section id="metodo">
            <span className="ethclass-number">06</span>
            <p className="ethclass-eyebrow">Methodus</p>
            <h2>Un caso, varias escuelas</h2>

            <p>
              Hacia el final aparece una pauta metodológica para el semestre:
              tomar un mismo caso y estudiar cómo sería juzgado desde
              diferentes tradiciones filosóficas, atendiendo al fundamento de
              cada una.
            </p>

            <div className="ethclass-path">
              <span>caso</span><b>→</b>
              <span>fundamento</span><b>→</b>
              <span>escuela</span><b>→</b>
              <span>juicio</span>
            </div>

            <div className="ethclass-schools">
              <span>cinismo</span>
              <span>epicureísmo</span>
              <span>estoicismo</span>
              <span>escepticismo</span>
              <span>Platón</span>
            </div>

            <p>
              La sesión contrapone así la diversidad histórica de
              fundamentaciones con la búsqueda de criterios universales,
              mencionando a Platón y, en el presente, los derechos humanos y
              el derecho internacional.
            </p>
          </section>

          <section id="siguiente">
            <span className="ethclass-number">07</span>
            <p className="ethclass-eyebrow">Continuatio</p>
            <h2>La próxima sesión comienza con el orfismo</h2>

            <p>
              Aldo anuncia que el martes empezarán despacio con el orfismo,
              especialmente en torno a vergüenza y responsabilidad.
            </p>

            <div className="ethclass-next">
              <span>Lectura</span>
              <strong>Pendiente de identificar</strong>
              <p>
                En la grabación se pregunta por una lectura y el profesor
                confirma que habrá una, pero el autor, título o archivo no son
                inteligibles. Por eso no se agrega todavía una tarea al tablero.
              </p>
            </div>
          </section>

          <section id="transcripcion">
            <span className="ethclass-number">08</span>
            <p className="ethclass-eyebrow">Transcriptio</p>
            <h2>Transcripción completa</h2>

            <p>
              Se conserva el texto recibido íntegro, incluidos errores del
              reconocimiento de voz. La síntesis anterior sólo reconstruye
              aquello que puede establecerse con suficiente claridad.
            </p>

            <details className="ethclass-transcript">
              <summary>Ver transcripción completa</summary>
              <pre>{transcript}</pre>
            </details>
          </section>
        </article>
      </div>

      <footer className="ethclass-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>ἀρετή · αἰδώς · εὐθύνη</span>
        <span>18 · VIII · 2026</span>
      </footer>

      <div className="ethclass-meander" aria-hidden="true" />
    </main>
  )
}
