import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  responsibilitySchema,
  courseMethodSchema,
  presentCases,
} from '../data/ethicsClass18Aug'
import './EthicsClass18Aug.css'

const sections = [
  ['00', 'problema', 'Problema'],
  ['01', 'sabiduria', 'Religión y sabiduría'],
  ['02', 'esquema-responsabilidad', 'Responsabilidad'],
  ['03', 'homero', 'Homero y reparación'],
  ['04', 'presente', 'Responsabilidad hoy'],
  ['05', 'alteridad', 'Alteridad'],
  ['06', 'metodo', 'Método del curso'],
  ['07', 'cierre', 'Próxima sesión'],
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function Heading({ number, eyebrow, children }) {
  return (
    <div className="ethos18-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsClass18Aug() {
  return (
    <main className="ethos18-page">
      <div className="ethos18-meander" aria-hidden="true" />

      <nav className="ethos18-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethos18-brand"><span>Φ</span> Philosophia</Link>
        <span>XVIII · VIII · MMXXVI</span>
      </nav>

      <header className="ethos18-hero">
        <div className="ethos18-columns" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="ethos18-hero-inner">
          <div className="ethos18-hero-copy">
            <p className="ethos18-kicker">ETHOS · Clase I · Ética · Escuelas clásicas</p>
            <div className="ethos18-medallion">I</div>

            <p className="ethos18-overline">
              18 de agosto de 2026 · Primera sesión documentada
            </p>

            <h1>
              Del destino
              <em>a la responsabilidad</em>
            </h1>

            <p className="ethos18-lead">
              La sesión parte del trasfondo religioso y cultural griego para
              seguir un desplazamiento central: de explicar la acción por
              dioses, destino o fuerzas externas a exigir que la persona
              responda por lo que hace y por sus consecuencias.
            </p>

            <div className="ethos18-question" id="problema">
              <span>PROBLEMA DE LA SESIÓN</span>
              <strong>
                ¿Qué cambia cuando una explicación externa de la acción deja de
                bastar para cancelar la responsabilidad de quien actuó?
              </strong>
            </div>
          </div>

          <figure className="ethos18-figure">
            <div className="ethos18-figure-frame">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Achilles_weigert_de_geschenken_van_Agamemnon%2C_RP-P-1911-3299.jpg/960px-Achilles_weigert_de_geschenken_van_Agamemnon%2C_RP-P-1911-3299.jpg"
                alt="Fénix, Áyax y Odiseo ofrecen a Aquiles regalos enviados por Agamenón; Aquiles los rechaza"
              />
            </div>
            <figcaption>
              <span>IMAGO I · REPARATIO</span>
              <strong>Aquiles rechaza los regalos de Agamenón</strong>
              <small>
                Taller de Bernard Picart · 1710 · Rijksmuseum / Wikimedia Commons · CC0
              </small>
            </figcaption>
          </figure>
        </div>
      </header>

      <div className="ethos18-layout">
        <aside className="ethos18-index">
          <p>Index lectionis</p>
          {sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{number}</span>
              <b>{label}</b>
            </button>
          ))}
        </aside>

        <article className="ethos18-article">
          <section id="sabiduria">
            <Heading number="01" eyebrow="Initium">
              La sabiduría griega como preámbulo de la ética
            </Heading>

            <p className="ethos18-prose">
              Antes de entrar en la ética filosófica, la clase sitúa un fondo
              religioso y cultural. Aparecen orfismo, pitagorismo, misterios,
              Parménides, oráculos, tragedia y daimon. La pregunta no es sólo
              qué creían los griegos, sino qué ocurre cuando una norma, una
              verdad o una orientación de la conducta se recibe desde un ámbito
              religioso.
            </p>

            <div className="ethos18-concepts">
              <article><span>01</span><strong>Religión</strong><p>Marco simbólico y normativo previo a la ética filosófica.</p></article>
              <article><span>02</span><strong>Destino</strong><p>Lo que parece exceder la decisión individual.</p></article>
              <article><span>03</span><strong>Interpretación</strong><p>La acción depende también de cómo se comprende lo anunciado.</p></article>
              <article><span>04</span><strong>Acción</strong><p>El problema práctico aparece cuando hay que actuar en consecuencia.</p></article>
            </div>

            <aside className="ethos18-note">
              <span>NOTA DOCUMENTAL</span>
              <p>
                El programa conserva en su portada el rótulo “Estética I:
                Escuelas Clásicas”, aunque el contenido trabajado corresponde a
                Ética. La anomalía se conserva sin corregir retrospectivamente
                la fuente.
              </p>
            </aside>
          </section>

          <section id="esquema-responsabilidad">
            <Heading number="02" eyebrow="Schema">
              De la explicación externa a la responsabilidad
            </Heading>

            <p className="ethos18-prose">
              La clase no presenta este cambio como un salto instantáneo. Lo
              trabaja como un proceso largo en el que atribuir la acción a
              fuerzas externas deja de ser suficiente para evitar la
              imputación personal.
            </p>

            <div className="ethos18-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos18-schema">
              <AnimatedConceptSchema schema={responsibilitySchema} />
            </div>

            <p className="ethos18-schema-caption">
              El esquema aísla el punto central de la sesión: explicar por
              dioses, destino o fuerzas externas no elimina automáticamente la
              pregunta por la acción, el daño y la responsabilidad.
            </p>
          </section>

          <section id="homero">
            <Heading number="03" eyebrow="Homerus">
              Aquiles, Agamenón y la reparación pública
            </Heading>

            <div className="ethos18-split">
              <div>
                <p className="ethos18-prose">
                  La disputa entre Aquiles y Agamenón sirve para estudiar una
                  ofensa que no se resuelve sólo con una explicación de la
                  conducta. La clase destaca la exigencia de una disculpa
                  pública y de una restitución.
                </p>

                <div className="ethos18-process">
                  <span>ofensa</span><b>→</b>
                  <span>disculpa pública</span><b>→</b>
                  <strong>reparación</strong>
                </div>

                <p className="ethos18-prose">
                  Lo importante para la sesión es el cambio en la forma de
                  juzgar: el agente ya no queda completamente exonerado por
                  apelar a una fuerza que lo habría llevado a actuar.
                </p>
              </div>

              <blockquote>
                <span>CLAVE DE LECTURA</span>
                <strong>
                  Pedir disculpas o exigir reparación supone tratar a alguien
                  como responsable de sus acciones.
                </strong>
              </blockquote>
            </div>
          </section>

          <section id="presente">
            <Heading number="04" eyebrow="Casus hodierni">
              La responsabilidad se extiende más allá de la acción directa
            </Heading>

            <p className="ethos18-prose">
              La discusión se desplaza al presente y pregunta por situaciones
              en las que una persona no ejecuta directamente el daño, pero
              participa, permite, ignora o decide dentro de cadenas de
              consecuencias.
            </p>

            <div className="ethos18-cases">
              {presentCases.map((item) => (
                <article key={item.id}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="alteridad">
            <Heading number="05" eyebrow="Alteritas">
              Distancia moral, prejuicio y conocimiento del otro
            </Heading>

            <p className="ethos18-prose">
              Otro eje de la sesión es la distancia respecto de quienes no
              pertenecen al círculo inmediato. La clase relaciona esa distancia
              con prejuicios hacia extranjeros, otras culturas o grupos
              desconocidos, y propone que conocer aquello que aparece como
              lejano puede favorecer comprensión y tolerancia.
            </p>

            <div className="ethos18-distance">
              <div><strong>yo</strong><span>proximidad</span></div>
              <div><strong>familia</strong><span>cuidado</span></div>
              <div><strong>comunidad</strong><span>pertenencia</span></div>
              <div><strong>extraño</strong><span>distancia</span></div>
              <div><strong>otro</strong><span>prejuicio posible</span></div>
            </div>
          </section>

          <section id="metodo">
            <Heading number="06" eyebrow="Methodus">
              Un caso puede ser juzgado desde fundamentos distintos
            </Heading>

            <p className="ethos18-prose">
              Hacia el final aparece una pauta metodológica para el semestre:
              tomar un mismo caso y preguntar cómo cambia su juicio cuando
              cambia el fundamento filosófico desde el que se lo examina.
            </p>

            <div className="ethos18-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos18-schema is-compact">
              <AnimatedConceptSchema schema={courseMethodSchema} />
            </div>

            <div className="ethos18-schools">
              <span>cinismo</span>
              <span>epicureísmo</span>
              <span>estoicismo</span>
              <span>escepticismo</span>
              <span>Platón</span>
            </div>
          </section>

          <section id="cierre">
            <Heading number="07" eyebrow="Continuatio">
              La siguiente sesión comienza con el orfismo
            </Heading>

            <p className="ethos18-prose">
              La clase anuncia que el siguiente encuentro comenzará con el
              orfismo, retomando el problema de la regulación de la conducta y
              la responsabilidad.
            </p>

            <div className="ethos18-reading">
              <span>LECTURA</span>
              <strong>Pendiente de identificar</strong>
              <p>
                La grabación confirma que habría una lectura, pero no permite
                identificar con seguridad autor, título o archivo. No se
                registra una tarea inventada.
              </p>
            </div>

            <div className="ethos18-source-note">
              <span>FUENTE DOCUMENTAL</span>
              <p>
                Página reconstruida a partir de la nota de clase y la
                transcripción conservada del 18 de agosto. El diseño organiza
                el contenido; no añade una unidad temática distinta a la
                sesión.
              </p>
            </div>
          </section>
        </article>
      </div>

      <section className="ethos18-image-source">
        <div>
          <span>IMAGEN CURATORIAL</span>
          <h2>Aquiles rechaza los regalos de Agamenón</h2>
          <p>
            La imagen se usa porque representa directamente el episodio de
            reparación trabajado en la sesión: los enviados de Agamenón llevan
            regalos a Aquiles para intentar restablecer la relación.
          </p>
        </div>
        <dl>
          <div><dt>Obra</dt><dd>Achilles weigert de geschenken van Agamemnon</dd></div>
          <div><dt>Autoría</dt><dd>Taller de Bernard Picart · 1710</dd></div>
          <div><dt>Institución</dt><dd>Rijksmuseum</dd></div>
          <div><dt>Derechos</dt><dd>CC0 1.0 / dominio público</dd></div>
        </dl>
        <a
          href="https://commons.wikimedia.org/wiki/File:Achilles_weigert_de_geschenken_van_Agamemnon,_RP-P-1911-3299.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Ver ficha de procedencia y derechos ↗
        </a>
      </section>

      <footer className="ethos18-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>ETHOS · Del destino a la responsabilidad</span>
        <span>18 · VIII · 2026</span>
      </footer>

      <div className="ethos18-meander" aria-hidden="true" />
    </main>
  )
}
