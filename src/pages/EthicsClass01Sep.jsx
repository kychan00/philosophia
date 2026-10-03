import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  passionResponseSchema,
  stoicResponseSchema,
  passionModels,
  sapphoSymptoms,
} from '../data/ethicsClass01Sep'
import './EthicsClass01Sep.css'

const sections = [
  ['00', 'problema', 'Problema'],
  ['01', 'responsabilidad', 'Destino y responsabilidad'],
  ['02', 'pasiones', 'Pasión y cuerpo'],
  ['03', 'safo', 'Safo'],
  ['04', 'posesion', 'Posesión y manía'],
  ['05', 'patologia', 'Patologización'],
  ['06', 'estoicos', 'Estoicismo'],
  ['07', 'platon', 'Platón y Eros'],
  ['08', 'cierre', 'Cierre'],
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function Heading({ number, eyebrow, children }) {
  return (
    <div className="ethos01-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsClass01Sep() {
  const [modelId, setModelId] = useState('sappho')
  const [sapphoIndex, setSapphoIndex] = useState(0)

  const model = useMemo(
    () => passionModels.find((item) => item.id === modelId) || passionModels[1],
    [modelId],
  )

  return (
    <main className="ethos01-page">
      <div className="ethos01-meander" aria-hidden="true" />

      <nav className="ethos01-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethos01-brand"><span>Φ</span> Philosophia</Link>
        <span>I · IX · MMXXVI</span>
      </nav>

      <header className="ethos01-hero">
        <div className="ethos01-columns" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="ethos01-hero-inner">
          <div className="ethos01-hero-copy">
            <p className="ethos01-kicker">ETHOS · Clase V · Ética · Escuelas clásicas</p>
            <div className="ethos01-medallion">V</div>

            <p className="ethos01-overline">
              1 de septiembre de 2026 · Quinta sesión documentada
            </p>

            <h1>
              Pasión,
              <em>posesión y dominio de sí</em>
            </h1>

            <p className="ethos01-lead">
              La sesión compara maneras distintas de comprender una emoción que
              parece exceder la voluntad: como fuerza externa, experiencia
              corporal, impulso educable o perturbación sobre la que puede
              trabajarse racionalmente.
            </p>

            <div className="ethos01-question" id="problema">
              <span>PROBLEMA DE LA SESIÓN</span>
              <strong>
                Si no elegimos sentir muchas de nuestras pasiones, ¿qué parte de
                la respuesta sigue siendo un problema ético?
              </strong>
            </div>
          </div>

          <figure className="ethos01-figure">
            <div className="ethos01-figure-frame">
              <img
                src={`${import.meta.env.BASE_URL}images/ethics/open/2026-09-01/sappho-bust.jpg`}
                alt="Busto romano de Safo conservado en los Museos Capitolinos"
              />
            </div>
            <figcaption>
              <span>IMAGO V · SAPPHO</span>
              <strong>Busto de Safo</strong>
              <small>
                Museos Capitolinos · fotografía de Marie-Lan Nguyen · dominio público
              </small>
            </figcaption>
          </figure>
        </div>
      </header>

      <div className="ethos01-layout">
        <aside className="ethos01-index">
          <p>Index lectionis</p>
          {sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{number}</span>
              <b>{label}</b>
            </button>
          ))}
        </aside>

        <article className="ethos01-article">
          <section id="responsabilidad">
            <Heading number="01" eyebrow="Fatum et responsabilitas">
              El destino no puede funcionar como coartada universal
            </Heading>

            <p className="ethos01-prose">
              La sesión conserva el problema abierto en clases anteriores: si
              toda conducta pudiera atribuirse por completo a Dios, al destino o
              a una fuerza externa, esa explicación podría utilizarse para
              justificar cualquier acción.
            </p>

            <div className="ethos01-destiny">
              <article>
                <span>EXPLICACIÓN</span>
                <strong>“estaba destinado”</strong>
                <p>la acción se atribuye a una fuerza que excede al agente</p>
              </article>
              <b>→</b>
              <article className="active">
                <span>PROBLEMA</span>
                <strong>evasión de responsabilidad</strong>
                <p>la explicación amenaza con convertirse en justificación total</p>
              </article>
            </div>
          </section>

          <section id="pasiones">
            <Heading number="02" eyebrow="Pathos">
              La emoción reorganiza corporalmente la experiencia
            </Heading>

            <p className="ethos01-prose">
              La clase insiste en que la pasión no es sólo una idea. Puede
              modificar respiración, pulso, temperatura, sudor, temblor y
              percepción. Esa transformación ayuda a entender por qué algunas
              tradiciones antiguas podían describir una emoción como algo que
              “toma” al individuo.
            </p>

            <div className="ethos01-model-tabs" role="tablist" aria-label="Modelos de la pasión">
              {passionModels.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={model.id === item.id ? 'active' : ''}
                  onClick={() => setModelId(item.id)}
                  aria-pressed={model.id === item.id}
                >
                  <span>{item.name}</span>
                  <strong>{item.formula}</strong>
                </button>
              ))}
            </div>

            <article className="ethos01-model">
              <span>{model.name}</span>
              <h3>{model.formula}</h3>
              <p>{model.body}</p>
            </article>

            <div className="ethos01-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos01-schema">
              <AnimatedConceptSchema schema={passionResponseSchema} />
            </div>
          </section>

          <section id="safo">
            <Heading number="03" eyebrow="Sappho · Eros">
              En Safo, amar aparece como acontecimiento corporal
            </Heading>

            <p className="ethos01-prose">
              El enamoramiento invade el cuerpo y altera percepción, lenguaje y
              movimiento. La sesión utiliza a Safo para mostrar una pasión que
              no se presenta como decisión voluntaria y tranquila.
            </p>

            <div className="ethos01-sappho">
              <div className="ethos01-sappho-list">
                {sapphoSymptoms.map(([name, description], index) => (
                  <button
                    type="button"
                    key={name}
                    className={sapphoIndex === index ? 'active' : ''}
                    onClick={() => setSapphoIndex(index)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{name}</strong>
                    <small>{description}</small>
                  </button>
                ))}
              </div>

              <article>
                <span>{sapphoSymptoms[sapphoIndex][0]}</span>
                <h3>{sapphoSymptoms[sapphoIndex][1]}</h3>
                <p>
                  El poema convierte el amor en una modificación del organismo:
                  la experiencia afectiva transforma la manera en que el sujeto
                  habla, percibe y se mueve.
                </p>
              </article>
            </div>

            <div className="ethos01-formula">
              <span>amor</span><b>→</b>
              <span>alteración corporal</span><b>→</b>
              <span>pérdida de dominio inmediato</span><b>→</b>
              <strong>problema de la respuesta</strong>
            </div>
          </section>

          <section id="posesion">
            <Heading number="04" eyebrow="Possessio">
              Posesión, furias, musas y éxtasis no significan exactamente lo mismo
            </Heading>

            <p className="ethos01-prose">
              La sesión reúne distintas figuras de posesión o inspiración:
              dioses y daimones, Erinias, Musas y estados báquicos. Lo común es
              que el individuo no aparece como dueño absoluto de aquello que le
              sucede; lo que cambia es el significado religioso, artístico o
              ritual de la alteración.
            </p>

            <div className="ethos01-possession">
              <article>
                <span>DAIMONES / DIOSES</span>
                <strong>fuerza espiritual</strong>
                <p>la conducta puede atribuirse a una presencia exterior</p>
              </article>
              <article>
                <span>ERINIAS</span>
                <strong>violencia restauradora</strong>
                <p>injusticia → venganza / castigo → restablecimiento</p>
              </article>
              <article>
                <span>MUSAS</span>
                <strong>inspiración artística</strong>
                <p>la creación puede sentirse como don que “toma” al poeta</p>
              </article>
              <article>
                <span>DIONISO</span>
                <strong>éxtasis ritual</strong>
                <p>danza, pérdida temporal de control y comunidad</p>
              </article>
            </div>
          </section>

          <section id="patologia">
            <Heading number="05" eyebrow="Medicina et pathos">
              Naturalizar una explicación no exige patologizar toda emoción intensa
            </Heading>

            <p className="ethos01-prose">
              La transformación hacia explicaciones naturales permite entender
              estados que antes podían atribuirse a fuerzas espirituales. Pero
              la clase marca un límite: llorar, temer, enojarse, sufrir o
              enamorarse intensamente no son por sí mismos una enfermedad.
            </p>

            <div className="ethos01-pathology">
              <span>estado intenso</span><b>≠</b>
              <strong>patología automática</strong>
            </div>

            <div className="ethos01-three">
              <article>
                <span>ENOJO</span>
                <strong>puede responder a una injusticia real</strong>
                <p>la cuestión ética es qué hacemos con esa emoción</p>
              </article>
              <article>
                <span>MIEDO</span>
                <strong>puede proteger</strong>
                <p>no es un defecto automático</p>
              </article>
              <article>
                <span>TRISTEZA</span>
                <strong>puede acompañar una pérdida</strong>
                <p>el sufrimiento tampoco equivale sin más a enfermedad</p>
              </article>
            </div>
          </section>

          <section id="estoicos">
            <Heading number="06" eyebrow="Stoa · Logos">
              La libertad estoica trabaja sobre la respuesta
            </Heading>

            <p className="ethos01-prose">
              El universo estoico aparece gobernado por logos, necesidad y
              destino. La libertad no consiste en controlar todos los
              acontecimientos, sino en trabajar racionalmente sobre los juicios,
              reacciones y acciones que siguen a aquello que sucede.
            </p>

            <div className="ethos01-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos01-schema is-compact">
              <AnimatedConceptSchema schema={stoicResponseSchema} />
            </div>

            <div className="ethos01-stoic">
              <div>
                <span>NO CONTROLO</span>
                <strong>todo lo que ocurre</strong>
              </div>
              <b>pero</b>
              <div className="active">
                <span>PUEDO TRABAJAR</span>
                <strong>sobre mi respuesta</strong>
              </div>
            </div>
          </section>

          <section id="platon">
            <Heading number="07" eyebrow="Eros philosophicus">
              Platón no elimina el deseo: intenta educarlo
            </Heading>

            <p className="ethos01-prose">
              Eros puede comenzar en la atracción por un cuerpo bello, pero el
              movimiento filosófico descrito en la sesión consiste en aprender a
              reconocer formas más amplias de belleza hasta orientarse hacia lo
              inteligible.
            </p>

            <div className="ethos01-ladder">
              <span>belleza corporal</span><b>→</b>
              <span>muchos cuerpos</span><b>→</b>
              <span>almas / carácter</span><b>→</b>
              <span>leyes y saberes</span><b>→</b>
              <strong>Belleza en sí</strong>
            </div>

            <aside className="ethos01-note">
              <span>PUNTO DE CONTRASTE</span>
              <p>
                Frente a una pasión que parece dominar al sujeto, Platón ofrece
                una posibilidad distinta: no negar el impulso, sino educarlo y
                redirigirlo.
              </p>
            </aside>
          </section>

          <section id="cierre">
            <Heading number="08" eyebrow="Quaestio finalis">
              El problema ético está en el lugar que las pasiones ocupan en la acción
            </Heading>

            <div className="ethos01-extremes">
              <article>
                <span>EXTREMO A</span>
                <strong>dejarse dominar completamente</strong>
                <p>la pasión puede conducir a una conducta destructiva</p>
              </article>
              <b>↔</b>
              <article>
                <span>EXTREMO B</span>
                <strong>intentar eliminar toda pasión</strong>
                <p>pueden perderse dimensiones importantes de la vida humana</p>
              </article>
            </div>

            <div className="ethos01-final">
              <span>sentir</span><b>≠</b>
              <span>elegir sentir</span><i>pero</i>
              <span>responder</span><b>→</b>
              <strong>problema ético</strong>
            </div>

            <div className="ethos01-source-note">
              <span>FUENTE DOCUMENTAL</span>
              <p>
                La página conserva los núcleos de la sesión documentada:
                responsabilidad y destino, pasiones, posesión, Safo,
                patologización, estoicismo, Platón y el problema final entre
                dominio absoluto y eliminación de las pasiones.
              </p>
            </div>
          </section>
        </article>
      </div>

      <section className="ethos01-image-source">
        <div>
          <span>IMAGEN CURATORIAL</span>
          <h2>Busto de Safo</h2>
          <p>
            Se selecciona porque Safo es uno de los focos reales de la sesión y
            permite vincular visualmente la discusión sobre Eros con la
            descripción corporal del enamoramiento.
          </p>
        </div>
        <dl>
          <div><dt>Objeto</dt><dd>Busto romano de una mujer inscrito como Safo de Eresos</dd></div>
          <div><dt>Institución</dt><dd>Museos Capitolinos</dd></div>
          <div><dt>Fotografía</dt><dd>Marie-Lan Nguyen · 2011</dd></div>
          <div><dt>Derechos</dt><dd>dominio público / Public Domain Mark 1.0</dd></div>
        </dl>
        <a
          href="https://commons.wikimedia.org/wiki/File:Bust_Sappho_Musei_Capitolini_MC1164.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Ver ficha de procedencia y derechos ↗
        </a>
      </section>

      <footer className="ethos01-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>ETHOS · Pasión, posesión y dominio de sí</span>
        <span>I · IX · 2026</span>
      </footer>

      <div className="ethos01-meander" aria-hidden="true" />
    </main>
  )
}
