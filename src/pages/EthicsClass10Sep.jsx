import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './EthicsClass10Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'examen', 'Vida examinada'],
  ['02', 'juicio', 'Juicio y tercero ausente'],
  ['03', 'tribunal', 'Tribunal interior'],
  ['04', 'arrepentimiento', 'Arrepentimiento'],
  ['05', 'reparacion', 'Reparación y perdón'],
  ['06', 'motivacion', 'Premio · castigo · convicción'],
  ['07', 'autonomia', 'Autonomía moral'],
  ['08', 'educacion', 'Educación de la conciencia'],
  ['09', 'libertad', 'Responsabilidad y libertad'],
  ['10', 'ley', 'Ley y cultura'],
  ['11', 'voluntad', 'Educación de la voluntad'],
  ['12', 'tarea', 'Pregunta para la siguiente clase'],
]

const motives = [
  ['punishment', 'Miedo al castigo', 'obediencia externa',
    'La conducta se ajusta porque existe vigilancia, amenaza, multa o sanción.'],
  ['reward', 'Esperanza de recompensa', 'conveniencia',
    'La acción correcta funciona como medio para obtener reconocimiento, premio o beneficio.'],
  ['conviction', 'Convicción interior', 'autonomía moral',
    'La persona actúa porque comprende el valor de la acción y quiere hacer lo justo.'],
]

const repairSteps = [
  ['01', 'Reconocer', 'admitir que hubo daño'],
  ['02', 'Arrepentirse', 'modificar la relación con la acción'],
  ['03', 'Disculparse', 'dirigirse a quien fue afectado'],
  ['04', 'Reparar', 'restituir, compensar o responder'],
  ['05', 'Transformarse', 'no repetir y reorganizar la propia vida'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="eth10-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsClass10Sep() {
  const [motiveId, setMotiveId] = useState('conviction')
  const [moralView, setMoralView] = useState('internal')

  const motive = useMemo(
    () => motives.find(([id]) => id === motiveId) || motives[2],
    [motiveId],
  )

  return (
    <main className="ethicsx-page eth10-page">
      <div className="ethicsx-meander" aria-hidden="true" />

      <nav className="ethicsx-nav eth10-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethicsx-brand">
          <span>Φ</span>
          Philosophia
        </Link>
        <span>FI194 · X · IX · MMXXVI</span>
      </nav>

      <header className="ethicsx-hero eth10-hero">
        <div className="ethicsx-columns" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="ethicsx-pediment" aria-hidden="true" />
        <div className="ethicsx-ghost eth10-ghost" aria-hidden="true">ΣΥΝΕΙΔΗΣΙΣ</div>

        <div className="ethicsx-hero-inner eth10-hero-inner">
          <p className="ethicsx-kicker">συνείδησις · βούλησις · πρᾶξις · ἐλευθερία</p>

          <div className="ethicsx-medallion">Ε</div>

          <h1>
            Ética
            <em>Conciencia moral y voluntad</em>
          </h1>

          <p className="ethicsx-lead eth10-lead">
            Arrepentimiento, responsabilidad, reparación del daño y educación
            de la voluntad. La sesión pregunta qué hace moralmente valiosa una
            acción más allá de su simple cumplimiento exterior.
          </p>

          <div className="ethicsx-question eth10-question">
            <span>Quaestio rectora</span>
            <strong>
              ¿Cómo se pasa de obedecer porque me obligan a querer libremente
              aquello que considero bueno y justo?
            </strong>
          </div>

          <div className="ethicsx-meta eth10-meta">
            <div><span>Clase</span><strong>Séptima</strong></div>
            <div><span>Fecha</span><strong>10 sep · 2026</strong></div>
            <div><span>Eje</span><strong>Conciencia moral</strong></div>
            <div><span>Cierre</span><strong>Educación de la voluntad</strong></div>
          </div>
        </div>
      </header>

      <section className="eth10-map-band" aria-label="Recorrido conceptual">
        <span>acción</span><b>→</b>
        <span>conciencia del daño</span><b>→</b>
        <span>responsabilidad</span><b>→</b>
        <span>arrepentimiento</span><b>→</b>
        <span>reparación</span><b>→</b>
        <strong>voluntad educada</strong>
      </section>

      <div className="eth10-layout">
        <aside className="eth10-index">
          <p>Index ethicus</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>
              <b>{label}</b>
            </button>
          ))}
        </aside>

        <article className="eth10-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Argumentum">
              De la acción exterior a una voluntad moralmente formada
            </Heading>

            <div className="eth10-thesis">
              <span>TESIS DE LA SESIÓN</span>
              <strong>
                La conciencia moral exige algo más que obedecer una regla:
                requiere formar una voluntad que quiera actuar correctamente
                por convicción propia.
              </strong>
            </div>
          </section>

          <section id="examen">
            <Heading n="01" eyebrow="Vita examinata">
              La mirada ética comienza por la propia vida
            </Heading>

            <p className="eth10-prose">
              La clase retoma la exigencia socrática de una vida examinada.
              Antes de convertir la vida ajena en objeto permanente de juicio,
              la filosofía dirige la mirada hacia nuestras propias acciones,
              razones, hábitos y responsabilidades.
            </p>

            <div className="eth10-dual">
              <article>
                <span>MIRADA EXTERIOR</span>
                <strong>defectos ajenos</strong>
                <p>Es fácil juzgar sin conocer circunstancias ni razones.</p>
              </article>
              <div className="eth10-arrow">→</div>
              <article className="active">
                <span>EXAMEN DE SÍ</span>
                <strong>responsabilidad propia</strong>
                <p>La cuestión ética es qué hice, por qué y cómo debo responder.</p>
              </article>
            </div>
          </section>

          <section id="juicio">
            <Heading n="02" eyebrow="Alter et iudicium">
              El tercero ausente no puede defenderse
            </Heading>

            <div className="eth10-grid two">
              <article>
                <span>CURIOSIDAD PRIVADA</span>
                <h3>no toda pregunta es legítima</h3>
                <p>
                  La vida privada no se vuelve asunto común sólo porque despierte
                  curiosidad.
                </p>
              </article>
              <article>
                <span>PERTINENCIA PÚBLICA</span>
                <h3>puede haber razones para preguntar</h3>
                <p>
                  Denuncia, afectación directa, proceso jurídico u obligación
                  institucional cambian el estatuto de la pregunta.
                </p>
              </article>
            </div>

            <div className="eth10-note">
              <span>Presunción de inocencia</span>
              <p>
                La discusión jurídica sirve para mostrar el riesgo de formular
                preguntas que ya contienen una condena y obligan a la persona a
                defenderse de una culpabilidad presupuesta.
              </p>
            </div>
          </section>

          <section id="tribunal">
            <Heading n="03" eyebrow="Tribunal interius">
              La responsabilidad se interioriza
            </Heading>

            <div className="eth10-process">
              <span>“los dioses me hicieron hacerlo”</span>
              <b>→</b>
              <span>responsabilidad personal</span>
              <b>→</b>
              <strong>“yo hice esto y debo responder”</strong>
            </div>

            <p className="eth10-prose">
              El recorrido histórico que reconstruye la clase desplaza la
              responsabilidad desde fuerzas externas hacia un sujeto capaz de
              convertirse en su propio tribunal moral.
            </p>
          </section>

          <section id="arrepentimiento">
            <Heading n="04" eyebrow="Poenitentia">
              Arrepentirse no deshace el pasado, pero puede transformar al agente
            </Heading>

            <div className="eth10-grid two">
              <article>
                <span>OBJECIÓN</span>
                <h3>“el daño ya está hecho”</h3>
                <p>El arrepentimiento no vuelve inexistente lo ocurrido.</p>
              </article>
              <article>
                <span>FUNCIÓN MORAL</span>
                <h3>reconocer · aprender · no repetir</h3>
                <p>
                  Cambia la relación con la acción y puede reorganizar la vida
                  posterior.
                </p>
              </article>
            </div>

            <div className="eth10-thesis">
              <span>DEMÓCRITO</span>
              <strong>
                La clase trabaja la idea de que arrepentirse de las malas acciones
                puede constituir una “salvación de la vida”.
              </strong>
            </div>
          </section>

          <section id="reparacion">
            <Heading n="05" eyebrow="Reparatio">
              Culpa, arrepentimiento, disculpa y reparación no son idénticos
            </Heading>

            <div className="eth10-steps">
              {repairSteps.map(([n, title, text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="eth10-note">
              <span>La víctima conserva agencia</span>
              <p>
                Que alguien reconozca el daño y trate de repararlo no obliga a la
                persona afectada a perdonar inmediatamente.
              </p>
            </div>
          </section>

          <section id="motivacion">
            <Heading n="06" eyebrow="Motivatio">
              La misma conducta externa puede tener estructuras morales distintas
            </Heading>

            <div className="eth10-tabs">
              {motives.map(([id, title]) => (
                <button
                  type="button"
                  key={id}
                  className={motive[0] === id ? 'active' : ''}
                  onClick={() => setMotiveId(id)}
                >
                  {title}
                </button>
              ))}
            </div>

            <article className="eth10-focus">
              <span>{motive[1]}</span>
              <h3>{motive[2]}</h3>
              <p>{motive[3]}</p>
            </article>

            <div className="eth10-thesis">
              <span>IDEAL ÉTICO</span>
              <strong>Hacer lo bueno porque es bueno y lo justo porque es justo.</strong>
            </div>
          </section>

          <section id="autonomia">
            <Heading n="07" eyebrow="Autonomia">
              Moral externa frente a moral interna
            </Heading>

            <div className="eth10-tabs">
              <button
                type="button"
                className={moralView === 'external' ? 'active' : ''}
                onClick={() => setMoralView('external')}
              >
                Moral externa
              </button>
              <button
                type="button"
                className={moralView === 'internal' ? 'active' : ''}
                onClick={() => setMoralView('internal')}
              >
                Moral interna
              </button>
            </div>

            <article className="eth10-focus">
              <span>
                {moralView === 'external'
                  ? 'HETERONOMÍA PRÁCTICA'
                  : 'CONVICCIÓN INTERIOR'}
              </span>
              <h3>
                {moralView === 'external'
                  ? 'Actúo porque me vigilan, castigan o recompensan.'
                  : 'Actúo porque comprendo, estoy convencido y quiero hacerlo.'}
              </h3>
              <p>
                {moralView === 'external'
                  ? 'La norma controla la conducta desde fuera.'
                  : 'La norma se ha convertido en principio asumido por el propio agente.'}
              </p>
            </article>
          </section>

          <section id="educacion">
            <Heading n="08" eyebrow="Educatio conscientiae">
              La conciencia moral tiene que aprenderse
            </Heading>

            <div className="eth10-grid three">
              <article>
                <span>ENSEÑAR</span>
                <strong>nombrar el daño</strong>
                <p>Reconocer por qué una acción afecta a otros.</p>
              </article>
              <article>
                <span>PRACTICAR</span>
                <strong>asumir responsabilidad</strong>
                <p>Decir “yo fui” antes de ser descubierto.</p>
              </article>
              <article>
                <span>INTERIORIZAR</span>
                <strong>formar hábitos</strong>
                <p>Convertir el deber conocido en disposición estable.</p>
              </article>
            </div>

            <div className="eth10-note">
              <span>También puede educarse para la irresponsabilidad</span>
              <p>
                Familia y cultura pueden normalizar mentira, evasión de
                responsabilidad o violencia; por eso la formación moral depende
                de condiciones sociales concretas.
              </p>
            </div>
          </section>

          <section id="libertad">
            <Heading n="09" eyebrow="Libertas et responsabilitas">
              La responsabilidad exige algún grado de libertad
            </Heading>

            <p className="eth10-prose">
              La clase complica el juicio moral cuando una persona ha sido formada
              desde pequeña en un entorno donde apenas tuvo acceso a alternativas.
              La pregunta no elimina la responsabilidad, pero obliga a considerar
              las condiciones concretas en que se formó la voluntad.
            </p>

            <div className="eth10-warning">
              <span>PROBLEMA</span>
              <strong>
                Si nunca hubo una alternativa real, atribuir responsabilidad
                requiere mayor cuidado.
              </strong>
            </div>
          </section>

          <section id="ley">
            <Heading n="10" eyebrow="Lex et cultura">
              Cambiar una ley puede ser más rápido que cambiar una voluntad
            </Heading>

            <div className="eth10-dual">
              <article>
                <span>CAMBIO JURÍDICO</span>
                <strong>norma externa</strong>
                <p>Puede prohibir discriminación, violencia o exclusión.</p>
              </article>
              <div className="eth10-arrow">≠</div>
              <article className="active">
                <span>CAMBIO CULTURAL</span>
                <strong>hábitos y valores</strong>
                <p>Prejuicios e imaginarios pueden persistir durante generaciones.</p>
              </article>
            </div>

            <div className="eth10-thesis">
              <span>CONSECUENCIA</span>
              <strong>
                La ética no se agota en conseguir que una conducta sea legalmente
                obligatoria.
              </strong>
            </div>
          </section>

          <section id="voluntad">
            <Heading n="11" eyebrow="Educatio voluntatis">
              No basta con no poder cometer una injusticia: hay que no querer cometerla
            </Heading>

            <div className="eth10-process">
              <span>conocer el deber</span>
              <b>→</b>
              <span>comprender sus razones</span>
              <b>→</b>
              <span>formar hábito interior</span>
              <b>→</b>
              <strong>querer actuar justamente</strong>
            </div>

            <div className="eth10-thesis">
              <span>TESIS FINAL</span>
              <strong>
                La formación de la conciencia moral es una educación de la voluntad.
              </strong>
            </div>
          </section>

          <section id="tarea">
            <Heading n="12" eyebrow="Ad proximam lectionem">
              ¿Cómo educar la voluntad?
            </Heading>

            <div className="eth10-task">
              <div>
                <span>PREGUNTA DE TRABAJO</span>
                <h3>¿Cómo educar la voluntad?</h3>
                <p>
                  Pensar cómo formar a una persona para que actúe libremente,
                  responda por sus actos, reconozca el daño y cumpla el deber
                  sin depender exclusivamente de premios y castigos.
                </p>
              </div>

              <aside>
                <span>NOTA SOBRE EL TEXTO</span>
                <strong>Página 32 mencionada en clase</strong>
                <p>
                  La grabación menciona la página 32, pero no permite asegurar
                  si es una lectura asignada o simplemente el punto donde se
                  encontraba la discusión. No se registra entrega escrita.
                </p>
              </aside>
            </div>
          </section>
        </article>
      </div>

      <footer className="ethicsx-footer eth10-footer">
        <Link to="/semestre/5/etica">← Volver a Ética</Link>
        <span>συνείδησις · βούλησις · πρᾶξις</span>
        <span>X · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
