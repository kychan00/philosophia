import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  responsibilityBalanceSchema,
  examinedLifeSchema,
  modernResponsibilityCases,
} from '../data/ethicsClass20Aug'
import './EthicsClass20Aug.css'

const sections = [
  ['00', 'problema', 'Problema'],
  ['01', 'justicia', 'Justicia y reparación'],
  ['02', 'redes', 'Responsabilidad compleja'],
  ['03', 'sacrificio', 'Sacrificio y purificación'],
  ['04', 'mitos', 'Ifigenia e Isaac'],
  ['05', 'examen', 'Vida examinada'],
  ['06', 'tension', 'Individual / estructural'],
  ['07', 'cierre', 'Cierre'],
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function Heading({ number, eyebrow, children }) {
  return (
    <div className="ethos20-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsClass20Aug() {
  return (
    <main className="ethos20-page">
      <div className="ethos20-meander" aria-hidden="true" />

      <nav className="ethos20-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethos20-brand"><span>Φ</span> Philosophia</Link>
        <span>XX · VIII · MMXXVI</span>
      </nav>

      <header className="ethos20-hero">
        <div className="ethos20-columns" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="ethos20-hero-inner">
          <div className="ethos20-hero-copy">
            <p className="ethos20-kicker">ETHOS · Clase II · Ética · Escuelas clásicas</p>
            <div className="ethos20-medallion">II</div>

            <p className="ethos20-overline">
              20 de agosto de 2026 · Segunda sesión documentada
            </p>

            <h1>
              Responsabilidad
              <em>y vida examinada</em>
            </h1>

            <p className="ethos20-lead">
              La clase reúne daño, justicia, sacrificio, mito y examen de sí
              alrededor de una misma pregunta: cómo reconocer una acción como
              propia, asumir sus consecuencias y decidir qué puede todavía
              repararse o corregirse.
            </p>

            <div className="ethos20-question" id="problema">
              <span>PROBLEMA DE LA SESIÓN</span>
              <strong>
                ¿Hasta dónde llega mi responsabilidad cuando mis acciones,
                omisiones y decisiones forman parte de redes que no controlo por completo?
              </strong>
            </div>
          </div>

          <figure className="ethos20-figure">
            <div className="ethos20-figure-frame">
              <img
                src={`${import.meta.env.BASE_URL}images/ethics/open/2026-08-20/iphigenia-sacrifice.jpg`}
                alt="Representación pictórica del sacrificio de Ifigenia"
              />
            </div>
            <figcaption>
              <span>IMAGO II · SACRIFICIUM</span>
              <strong>El sacrificio de Ifigenia</strong>
              <small>
                Taller de Giovanni Battista Tiepolo · 1735–1740 · University of Arizona Museum of Art · fotografía CC0 de Daderot
              </small>
            </figcaption>
          </figure>
        </div>
      </header>

      <div className="ethos20-layout">
        <aside className="ethos20-index">
          <p>Index lectionis</p>
          {sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{number}</span>
              <b>{label}</b>
            </button>
          ))}
        </aside>

        <article className="ethos20-article">
          <section id="justicia">
            <Heading number="01" eyebrow="Iustitia et reparatio">
              La justicia no se agota en identificar un culpable
            </Heading>

            <p className="ethos20-prose">
              La discusión sobre abuso, corrupción, narcotráfico e impunidad
              desplaza la justicia desde el mero castigo hacia una reconstrucción
              más amplia: quién actuó, qué redes hicieron posible el daño, quién
              obtuvo beneficios y qué consecuencias siguen abiertas.
            </p>

            <div className="ethos20-process">
              <span>daño</span><b>→</b>
              <span>investigación</span><b>→</b>
              <span>responsables</span><b>→</b>
              <span>sentencia</span><b>→</b>
              <strong>reparación</strong>
            </div>

            <aside className="ethos20-note">
              <span>CLAVE DE LA SESIÓN</span>
              <p>
                La responsabilidad no termina cuando se identifica al autor de
                una acción. También pregunta qué efectos persisten y qué puede
                hacerse respecto del daño producido.
              </p>
            </aside>
          </section>

          <section id="redes">
            <Heading number="02" eyebrow="Actio in retibus">
              Intención, acción y consecuencias en redes complejas
            </Heading>

            <p className="ethos20-prose">
              La clase insiste en que una acción puede entrar en sistemas que el
              individuo no controla por completo. Por eso distinguir intención,
              acción y consecuencias resulta importante para no reducir la
              responsabilidad ni a la pura voluntad ni a una culpa ilimitada.
            </p>

            <div className="ethos20-concepts">
              {modernResponsibilityCases.map((item) => (
                <article key={item.id}>
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <div className="ethos20-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos20-schema">
              <AnimatedConceptSchema schema={responsibilityBalanceSchema} />
            </div>

            <p className="ethos20-schema-caption">
              El esquema conserva la tensión abierta por la clase: ni todo
              depende del individuo ni la estructura elimina toda obligación personal.
            </p>
          </section>

          <section id="sacrificio">
            <Heading number="03" eyebrow="Cultus et culpa">
              Falta, purificación y reparación en una lógica religiosa
            </Heading>

            <p className="ethos20-prose">
              El bloque histórico reconstruye una forma de conciencia en la que
              la falta altera la relación con lo divino y exige reconocimiento,
              purificación y alguna forma de restablecimiento. El interés de la
              clase está en comprender esa estructura de responsabilidad, no en
              justificar el sacrificio desde el presente.
            </p>

            <div className="ethos20-ritual">
              <article><span>I</span><strong>Falta</strong><p>algo rompe el orden</p></article>
              <b>↓</b>
              <article><span>II</span><strong>Reconocimiento</strong><p>la falta debe ser asumida</p></article>
              <b>↓</b>
              <article><span>III</span><strong>Purificación</strong><p>se busca restablecer la relación</p></article>
              <b>↓</b>
              <article><span>IV</span><strong>Sacrificio</strong><p>la reparación implica renuncia</p></article>
            </div>
          </section>

          <section id="mitos">
            <Heading number="04" eyebrow="Probatio fidei">
              Ifigenia e Isaac: la prueba no borra la diferencia
            </Heading>

            <p className="ethos20-prose">
              La clase compara Agamenón e Ifigenia con Abraham e Isaac por una
              estructura narrativa común: la fidelidad a lo divino se pone a
              prueba mediante la disposición a entregar aquello que más se ama.
              La comparación se usa estructuralmente y no para identificar las
              dos tradiciones.
            </p>

            <div className="ethos20-compare">
              <article>
                <span>TRADICIÓN GRIEGA</span>
                <strong>Agamenón · Ifigenia</strong>
                <p>rey · expedición · Artemisa · sacrificio</p>
              </article>
              <div>
                <span>PRUEBA</span>
                <b>aquello amado</b>
                <small>¿qué estoy dispuesto a entregar?</small>
              </div>
              <article>
                <span>RELATO BÍBLICO</span>
                <strong>Abraham · Isaac</strong>
                <p>fidelidad · prueba · sacrificio detenido</p>
              </article>
            </div>

            <div className="ethos20-image-note">
              <span>IMAGEN CURATORIAL</span>
              <p>
                La imagen de Ifigenia se selecciona porque este episodio aparece
                efectivamente en la clase y concentra la tensión entre obediencia,
                sacrificio y responsabilidad.
              </p>
            </div>
          </section>

          <section id="examen">
            <Heading number="05" eyebrow="Bios exetastos">
              De la purificación exterior al examen de la propia vida
            </Heading>

            <p className="ethos20-prose">
              El recorrido termina girando la mirada hacia el propio sujeto:
              qué hice, a quién dañé, qué hice correctamente y qué debería
              corregir. La clase enlaza esta práctica con la vida examinada y
              con la posibilidad de convertir la revisión de la acción en una
              forma de transformación.
            </p>

            <div className="ethos20-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos20-schema is-compact">
              <AnimatedConceptSchema schema={examinedLifeSchema} />
            </div>

            <div className="ethos20-night">
              <span>EXAMEN DE SÍ</span>
              <div>
                <p>¿Qué hice?</p>
                <p>¿A quién dañé?</p>
                <p>¿Qué hice bien?</p>
                <p>¿Qué debo corregir?</p>
              </div>
            </div>
          </section>

          <section id="tension">
            <Heading number="06" eyebrow="Limites responsabilitatis">
              Responsabilidad individual y responsabilidad estructural
            </Heading>

            <p className="ethos20-prose">
              La sesión deja abierta una tensión que atraviesa también los casos
              contemporáneos: una persona puede modificar hábitos y reparar
              acciones propias, pero no controla por sí sola instituciones,
              infraestructuras o industrias completas.
            </p>

            <div className="ethos20-balance">
              <article>
                <span>EXCESO DE CULPA</span>
                <strong>“todo depende de mí”</strong>
                <p>atribuir al individuo procesos que exceden su capacidad real de control</p>
              </article>
              <div>
                <b>RESPONSABILIDAD</b>
                <span>posibilidad real de actuar</span>
              </div>
              <article>
                <span>EXCESO DE EXCUSA</span>
                <strong>“nada depende de mí”</strong>
                <p>usar la estructura para eludir cualquier obligación personal</p>
              </article>
            </div>
          </section>

          <section id="cierre">
            <Heading number="07" eyebrow="Conclusio">
              Del sacrificio al examen interior
            </Heading>

            <div className="ethos20-transform">
              <div>
                <span>RELIGIÓN ANTIGUA</span>
                <strong>reconocer → purificar → sacrificar → restablecer</strong>
              </div>
              <b>⟶</b>
              <div>
                <span>EXAMEN FILOSÓFICO</span>
                <strong>examinar → comprender → asumir → corregir</strong>
              </div>
            </div>

            <div className="ethos20-reading">
              <span>LECTURA ASIGNADA</span>
              <strong>Pendiente de identificar</strong>
              <p>
                Al final de la sesión se asigna una lectura para varias semanas,
                pero la grabación no permite reconocer con seguridad autor ni
                título. Se conserva la incertidumbre en vez de completar el dato.
              </p>
            </div>

            <div className="ethos20-source-note">
              <span>FUENTE DOCUMENTAL</span>
              <p>
                La página reorganiza la sesión documentada del 20 de agosto. Los
                esquemas visualizan relaciones ya presentes en la clase; no
                sustituyen ni amplían silenciosamente la fuente.
              </p>
            </div>
          </section>
        </article>
      </div>

      <section className="ethos20-image-source">
        <div>
          <span>IMAGEN CURATORIAL</span>
          <h2>El sacrificio de Ifigenia</h2>
          <p>
            La obra se integra por su relación directa con uno de los núcleos
            de la sesión y se sirve desde una copia local descargada durante el
            build de PHILOSOPHIA.
          </p>
        </div>
        <dl>
          <div><dt>Obra</dt><dd>The Sacrifice of Iphigenia</dd></div>
          <div><dt>Autoría</dt><dd>Taller de Giovanni Battista Tiepolo · 1735–1740</dd></div>
          <div><dt>Fotografía</dt><dd>Daderot · 2019</dd></div>
          <div><dt>Institución</dt><dd>University of Arizona Museum of Art</dd></div>
          <div><dt>Derechos</dt><dd>CC0 1.0 / dominio público</dd></div>
        </dl>
        <a
          href="https://commons.wikimedia.org/wiki/File:The_Sacrifice_of_Iphigenia,_by_Giovanni_Battista_Tiepolo_(studio),_1735-1740,_oil_on_canvas_-_University_of_Arizona_Museum_of_Art_-_University_of_Arizona_-_Tucson,_AZ_-_DSC08113.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Ver ficha de procedencia y derechos ↗
        </a>
      </section>

      <footer className="ethos20-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>ETHOS · Responsabilidad y vida examinada</span>
        <span>20 · VIII · 2026</span>
      </footer>

      <div className="ethos20-meander" aria-hidden="true" />
    </main>
  )
}
