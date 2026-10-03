import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  practicalDeliberationSchema,
  listeningSchema,
  justiceCases,
  professionalCases,
} from '../data/ethicsClass03Sep'
import './EthicsClass03Sep.css'

const sections = [
  ['00', 'problema', 'Problema'],
  ['01', 'justicia', 'Justicia'],
  ['02', 'escasez', 'Escasez e introyección'],
  ['03', 'profesion', 'Profesión y servicio'],
  ['04', 'mortalidad', 'Trabajo y mortalidad'],
  ['05', 'democrito', 'Demócrito y escucha'],
  ['06', 'pluralidad', 'Pluralidad y error'],
  ['07', 'prudencia', 'Prudencia y contingencia'],
  ['08', 'alteridad', 'Alteridad'],
  ['09', 'cierre', 'Ejercicio moral'],
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function Heading({ number, eyebrow, children }) {
  return (
    <div className="ethos03-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsClass03Sep() {
  const [justiceId, setJusticeId] = useState('labor')
  const [professionId, setProfessionId] = useState('engineering')

  const justice = useMemo(
    () => justiceCases.find((item) => item.id === justiceId) || justiceCases[0],
    [justiceId],
  )

  const profession = useMemo(
    () => professionalCases.find((item) => item.id === professionId) || professionalCases[1],
    [professionId],
  )

  return (
    <main className="ethos03-page">
      <div className="ethos03-meander" aria-hidden="true" />

      <nav className="ethos03-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethos03-brand"><span>Φ</span> Philosophia</Link>
        <span>III · IX · MMXXVI</span>
      </nav>

      <header className="ethos03-hero">
        <div className="ethos03-columns" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="ethos03-hero-inner">
          <div className="ethos03-hero-copy">
            <p className="ethos03-kicker">ETHOS · Clase VI · Ética · Escuelas clásicas</p>
            <div className="ethos03-medallion">VI</div>

            <p className="ethos03-overline">
              3 de septiembre de 2026 · Sexta sesión documentada
            </p>

            <h1>
              Justicia,
              <em>prudencia y escucha</em>
            </h1>

            <p className="ethos03-lead">
              La sesión lleva las máximas morales hacia casos laborales,
              profesionales y cotidianos: exigir derechos, atender la
              vulnerabilidad, escuchar interpretaciones distintas, aprender del
              error y prepararse para consecuencias contingentes.
            </p>

            <div className="ethos03-question" id="problema">
              <span>PROBLEMA DE LA SESIÓN</span>
              <strong>
                ¿Cómo cambia una decisión moral cuando el principio entra en
                contacto con desigualdad, vulnerabilidad, consecuencias,
                contingencia y la perspectiva del otro?
              </strong>
            </div>
          </div>

          <figure className="ethos03-figure">
            <div className="ethos03-figure-frame">
              <img
                src={`${import.meta.env.BASE_URL}images/ethics/open/2026-09-03/themis-rhamnous.jpg`}
                alt="Estatua de mármol pentélico de Themis de Ramnunte, ca. 300 a. C."
              />
            </div>
            <figcaption>
              <span>IMAGO VI · THEMIS</span>
              <strong>Themis de Ramnunte</strong>
              <small>
                ca. 300 a. C. · Museo Arqueológico Nacional de Atenas · fotografía CC0 de Gary Todd
              </small>
            </figcaption>
          </figure>
        </div>
      </header>

      <div className="ethos03-layout">
        <aside className="ethos03-index">
          <p>Index lectionis</p>
          {sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{number}</span>
              <b>{label}</b>
            </button>
          ))}
        </aside>

        <article className="ethos03-article">
          <section id="justicia">
            <Heading number="01" eyebrow="Iustitia">
              Exigir justicia puede comenzar por dejar de consentir lo injusto
            </Heading>

            <p className="ethos03-prose">
              La clase parte de un conflicto laboral: la vergüenza por reclamar
              un derecho puede favorecer precisamente a quien incumple o
              explota. De ahí surge una dimensión de la responsabilidad que
              rebasa el interés privado, porque una injusticia tolerada puede
              repetirse contra otras personas.
            </p>

            <div className="ethos03-tabs" role="tablist" aria-label="Casos de justicia">
              {justiceCases.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={justice.id === item.id ? 'active' : ''}
                  onClick={() => setJusticeId(item.id)}
                  aria-pressed={justice.id === item.id}
                >
                  <span>{item.title}</span>
                  <strong>{item.formula}</strong>
                </button>
              ))}
            </div>

            <article className="ethos03-focus">
              <span>{justice.title}</span>
              <h3>{justice.formula}</h3>
              <p>{justice.body}</p>
            </article>

            <aside className="ethos03-note">
              <span>HILO DE LA CLASE</span>
              <p>
                No consentir la injusticia aparece como condición mínima para
                poder exigir justicia.
              </p>
            </aside>
          </section>

          <section id="escasez">
            <Heading number="02" eyebrow="Inopia · introiectio">
              La dominación también puede interiorizarse
            </Heading>

            <p className="ethos03-prose">
              La sesión examina discursos laborales que hacen sentir al
              trabajador que “debe” algo al empleador por recibir trabajo. La
              precariedad y el miedo a perder ingreso o estabilidad pueden
              estrechar el horizonte de decisión hasta volver difícil reclamar
              aquello que formalmente corresponde.
            </p>

            <div className="ethos03-scarcity">
              <span>escasez</span><b>→</b>
              <span>miedo</span><b>→</b>
              <span>cesión</span><b>→</b>
              <span>introyección</span><b>→</b>
              <strong>dificultad para exigir</strong>
            </div>

            <div className="ethos03-warning">
              <span>VULNERABILIDAD</span>
              <strong>
                Una persona puede seguir actuando desde la lógica de la escasez
                incluso después de que su situación material haya cambiado.
              </strong>
            </div>
          </section>

          <section id="profesion">
            <Heading number="03" eyebrow="Officium professionale">
              El saber profesional puede generar obligaciones que no se reducen al beneficio
            </Heading>

            <p className="ethos03-prose">
              Abogados, ingenieros y médicos aparecen como ejemplos de una
              responsabilidad profesional que puede convertirse en servicio. La
              clase distingue también entre error o negligencia y una conducta
              premeditada orientada a obtener beneficio económico.
            </p>

            <div className="ethos03-tabs" role="tablist" aria-label="Profesiones y servicio">
              {professionalCases.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={profession.id === item.id ? 'active' : ''}
                  onClick={() => setProfessionId(item.id)}
                  aria-pressed={profession.id === item.id}
                >
                  <span>{item.title}</span>
                  <strong>servicio profesional</strong>
                </button>
              ))}
            </div>

            <article className="ethos03-focus">
              <span>{profession.title}</span>
              <h3>Conocimiento especializado como responsabilidad</h3>
              <p>{profession.body}</p>
            </article>
          </section>

          <section id="mortalidad">
            <Heading number="04" eyebrow="Labor · tempus · mortalitas">
              La vida limitada cambia el peso de salario, prestigio, salud y tiempo
            </Heading>

            <p className="ethos03-prose">
              La sesión cuestiona una vida consumida por el trabajo y la
              acumulación cuando el precio es el cuerpo, el descanso, la familia
              o los vínculos. El dinero puede compensar muchas cosas, pero no
              siempre devuelve aquello que el desgaste destruyó.
            </p>

            <div className="ethos03-values">
              <article><span>I</span><strong>salario</strong><p>recurso necesario</p></article>
              <article><span>II</span><strong>prestigio</strong><p>reconocimiento profesional</p></article>
              <article><span>III</span><strong>salud</strong><p>costo corporal y mental</p></article>
              <article><span>IV</span><strong>familia</strong><p>vínculos y presencia</p></article>
              <article><span>V</span><strong>descanso</strong><p>tiempo irrecuperable</p></article>
            </div>
          </section>

          <section id="democrito">
            <Heading number="05" eyebrow="Democritus · audire">
              Escuchar no obliga a abandonar la propia posición
            </Heading>

            <p className="ethos03-prose">
              La máxima trabajada se aplica a una discusión filosófica: estar
              convencido de una interpretación no autoriza a tratar al otro como
              si no pudiera enseñar nada. Escuchar significa someter también la
              posición propia a examen.
            </p>

            <div className="ethos03-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos03-schema">
              <AnimatedConceptSchema schema={listeningSchema} />
            </div>

            <div className="ethos03-maxim">
              <span>DEMÓCRITO · MÁXIMA TRABAJADA</span>
              <strong>“Es arrogancia hablar de todo y no querer oír nada.”</strong>
              <p>
                En esta página se conserva como formulación trabajada en clase,
                no como edición crítica de un fragmento.
              </p>
            </div>
          </section>

          <section id="pluralidad">
            <Heading number="06" eyebrow="Interpretatio · error">
              Pluralidad interpretativa y error pueden ampliar el conocimiento
            </Heading>

            <p className="ethos03-prose">
              El comentario sobre Hegel muestra que dos interpretaciones pueden
              estar bien construidas y ser incompatibles. La salida no consiste
              siempre en declarar una mirada absoluta, sino en identificar desde
              qué marco conceptual se argumenta.
            </p>

            <div className="ethos03-interpretation">
              <article>
                <span>MARCO A</span>
                <strong>lectura situada</strong>
              </article>
              <b>↘</b>
              <article className="active">
                <span>TEXTO</span>
                <strong>objeto común</strong>
              </article>
              <b>↗</b>
              <article>
                <span>MARCO B</span>
                <strong>otra lectura situada</strong>
              </article>
            </div>

            <div className="ethos03-error">
              <span>error</span><b>→</b>
              <span>¿cómo ocurrió?</span><b>+</b>
              <span>¿por qué ocurrió?</span><b>→</b>
              <strong>aprendizaje</strong>
            </div>
          </section>

          <section id="prudencia">
            <Heading number="07" eyebrow="Prudentia · contingentia">
              Prepararse para el peor caso puede aumentar el margen de acción
            </Heading>

            <p className="ethos03-prose">
              Las acciones humanas son contingentes: las mismas causas no
              producen necesariamente los mismos efectos. La prudencia incluye
              imaginar escenarios adversos y preparar recursos sin convertir
              esos escenarios en destino inevitable.
            </p>

            <div className="ethos03-prudence">
              <span>decisión</span><b>→</b>
              <span>efectos posibles</span><b>→</b>
              <span>peor caso</span><b>→</b>
              <span>preparación</span><b>→</b>
              <strong>margen de acción</strong>
            </div>

            <aside className="ethos03-note">
              <span>EJEMPLO COTIDIANO</span>
              <p>
                Llevar más dinero que el precio exacto del transporte funciona
                como pequeño blindaje ante una contingencia.
              </p>
            </aside>
          </section>

          <section id="alteridad">
            <Heading number="08" eyebrow="Alteritas">
              Comprender al otro exige preguntar por historia y circunstancias
            </Heading>

            <p className="ethos03-prose">
              Pobreza, violencia, historia personal y condiciones sociales
              pueden producir formas de actuar que resultan incomprensibles
              desde fuera. Juzgar una acción sin preguntar cómo se llegó a ella
              puede borrar parte de la humanidad del otro.
            </p>

            <div className="ethos03-alterity">
              <article>
                <span>JUICIO RÁPIDO</span>
                <strong>“¿por qué hace eso?”</strong>
              </article>
              <b>⟶</b>
              <article className="active">
                <span>COMPRENSIÓN</span>
                <strong>“¿qué historia y condiciones lo llevaron ahí?”</strong>
              </article>
            </div>

            <div className="ethos03-schema-title">
              <span>ESQUEMA</span><i />
            </div>
            <div className="ethos03-schema is-compact">
              <AnimatedConceptSchema schema={practicalDeliberationSchema} />
            </div>
          </section>

          <section id="cierre">
            <Heading number="09" eyebrow="Exercitium">
              El ejercicio moral conecta sentencia, caso y aplicación
            </Heading>

            <p className="ethos03-prose">
              Al cierre se mantiene la estructura de trabajo del curso: una
              máxima o postura no se evalúa sólo por su formulación, sino por lo
              que permite hacer cuando entra en una situación concreta.
            </p>

            <div className="ethos03-final">
              <span>1 · sentencia moral</span><b>→</b>
              <span>2 · desarrollo del caso</span><b>→</b>
              <strong>3 · aplicación de la sentencia</strong>
            </div>

            <div className="ethos03-source-note">
              <span>FUENTE DOCUMENTAL</span>
              <p>
                La página conserva los núcleos registrados para el 3 de
                septiembre: justicia laboral, ideología e introyección,
                responsabilidad profesional, escasez, trabajo y mortalidad,
                Demócrito, pluralidad, error, contingencia y alteridad.
              </p>
            </div>
          </section>
        </article>
      </div>

      <section className="ethos03-image-source">
        <div>
          <span>IMAGEN CURATORIAL</span>
          <h2>Themis de Ramnunte</h2>
          <p>
            La imagen se elige por la centralidad de la justicia en la sesión.
            La estatua representa a Themis, vinculada en la tradición griega con
            justicia y orden normativo.
          </p>
        </div>
        <dl>
          <div><dt>Objeto</dt><dd>Estatua de Themis de Ramnunte</dd></div>
          <div><dt>Fecha</dt><dd>ca. 300 a. C.</dd></div>
          <div><dt>Autor</dt><dd>Chairestratos de Ramnunte</dd></div>
          <div><dt>Institución</dt><dd>Museo Arqueológico Nacional de Atenas</dd></div>
          <div><dt>Fotografía</dt><dd>Gary Todd · 2016</dd></div>
          <div><dt>Derechos</dt><dd>CC0 1.0</dd></div>
        </dl>
        <a
          href="https://commons.wikimedia.org/wiki/File:Pentelic_Marble_Statue_of_Themis_from_Rhamnous,_c._300_BC_(27873364654).jpg"
          target="_blank"
          rel="noreferrer"
        >
          Ver ficha de procedencia y derechos ↗
        </a>
      </section>

      <footer className="ethos03-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>ETHOS · Justicia, prudencia y escucha</span>
        <span>III · IX · 2026</span>
      </footer>

      <div className="ethos03-meander" aria-hidden="true" />
    </main>
  )
}
