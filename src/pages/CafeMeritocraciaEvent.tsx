import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import './CafeMeritocraciaEvent.css'

const ASSET = '/philosophia/images/cafe-filosofico/meritocracia'

const questions = [
  {
    id: 'poverty',
    number: '01',
    label: 'POBREZA',
    text: '¿El pobre es pobre porque quiere?',
  },
  {
    id: 'inequality',
    number: '02',
    label: 'MERITOCRACIA · DESIGUALDAD',
    text: '¿La meritocracia es la justificación de la desigualdad o el mito que lo oculta?',
  },
  {
    id: 'structure',
    number: '03',
    label: 'INDIVIDUO · ESTRUCTURA',
    text: '¿Es una falla individual o un diseño estructural?',
  },
]

const disciplines = ['FILOSOFÍA', 'SOCIOLOGÍA', 'ECONOMÍA', 'POLÍTICA']

export default function CafeMeritocraciaEvent() {
  const [activeId, setActiveId] = useState('inequality')

  const active = useMemo(
    () => questions.find((item) => item.id === activeId) || questions[1],
    [activeId],
  )

  useEffect(() => {
    const previous = document.title
    document.title = 'Café Filosófico · La meritocracia'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <main className="merit-page">
      <div className="merit-grain" aria-hidden="true" />

      <nav className="merit-topbar">
        <Link to="/cafe-filosofico">← CAFÉ FILOSÓFICO</Link>
        <span>EDICIÓN 02 · 22 SEP 2026</span>
        <span>INTERDISCIPLINARIO</span>
      </nav>

      <header className="merit-hero">
        <div className="merit-hero-copy">
          <p className="merit-kicker">IDEAS · DIÁLOGO · DIFERENTES MIRADAS</p>

          <div className="merit-brand">
            <div className="merit-brand-first">
              <span>Café</span>
              <i className="merit-cup" aria-hidden="true"><b /></i>
            </div>
            <strong>Filosófico</strong>
          </div>

          <div className="merit-gold-rule" />
          <p className="merit-subbrand">interdisciplinario</p>

          <div className="merit-topic-paper">
            <small>Tema:</small>
            <h1>La meritocracia</h1>
          </div>

          <div className="merit-meta">
            <article><span>FECHA</span><strong>Martes 22</strong></article>
            <article><span>HORA</span><strong>2:00</strong></article>
            <article><span>LUGAR</span><strong>Edificio C · Aula 5</strong></article>
            <article className="merit-coffee"><span>CAFÉ</span><strong>gratis</strong></article>
          </div>
        </div>

        <div className="merit-collage">
          <div className="merit-gold-sun" aria-hidden="true" />
          <img className="merit-sticker merit-bust" src={`${ASSET}/aristotle-bust.png`} alt="" aria-hidden="true" />
          <img className="merit-sticker merit-ladder" src={`${ASSET}/career-ladder.png`} alt="" aria-hidden="true" />
          <img className="merit-sticker merit-reach" src={`${ASSET}/reach-for-clouds.png`} alt="" aria-hidden="true" />
          <img className="merit-sticker merit-trophy" src={`${ASSET}/trophy.png`} alt="" aria-hidden="true" />
          <img className="merit-sticker merit-crowd" src={`${ASSET}/crowd-silhouettes.png`} alt="" aria-hidden="true" />

          <div className="merit-collage-label">
            <span>ASCENSO</span>
            <b>¿mérito?</b>
          </div>
        </div>
      </header>

      <section className="merit-strip">
        <figure>
          <img src={`${ASSET}/books-stack.png`} alt="" aria-hidden="true" />
          <figcaption>FILOSOFÍA</figcaption>
        </figure>
        <figure>
          <img src={`${ASSET}/coins-stack.png`} alt="" aria-hidden="true" />
          <figcaption>ECONOMÍA</figcaption>
        </figure>
        <figure>
          <img src={`${ASSET}/balance-scale.png`} alt="" aria-hidden="true" />
          <figcaption>SOCIOLOGÍA</figcaption>
        </figure>
        <figure className="merit-strip-coffee">
          <img src={`${ASSET}/coffee-cup.png`} alt="" aria-hidden="true" />
          <figcaption>CAFÉ GRATIS</figcaption>
        </figure>
      </section>

      <section className="merit-section merit-prompts">
        <div className="merit-section-head">
          <span>01</span>
          <div>
            <p>PRÓXIMO ENCUENTRO</p>
            <h2>La meritocracia</h2>
          </div>
        </div>

        <div className="merit-event-intro">
          <figure>
            <img
              src={`${ASSET}/poster-original.jpg`}
              alt="Cartel del Café Filosófico interdisciplinario sobre la meritocracia"
            />
          </figure>

          <div className="merit-event-meta">
            <span>MARTES 22 · 2:00</span>
            <h3>Edificio C · Aula 5</h3>
            <strong>Café gratis</strong>
            <p>Filosofía · Sociología · Economía · Política</p>
          </div>
        </div>

        <div className="merit-prompts-head">
          <span>PREGUNTAS DE APERTURA</span>
          <strong>Tres puntos para abrir la conversación</strong>
        </div>

        <div className="merit-question-tabs">
          {questions.map((item) => (
            <button
              type="button"
              key={item.id}
              className={activeId === item.id ? 'is-active' : ''}
              onClick={() => setActiveId(item.id)}
            >
              <span>{item.number}</span>
              <small>{item.label}</small>
              <strong>{item.text}</strong>
            </button>
          ))}
        </div>

        <div className="merit-question-focus">
          <img src={`${ASSET}/torn-paper.png`} alt="" aria-hidden="true" />
          <div>
            <span>{active.number}</span>
            <small>{active.label}</small>
          </div>
          <blockquote>{active.text}</blockquote>
        </div>
      </section>

      <section className="merit-section">
        <div className="merit-section-head">
          <span>02</span>
          <div>
            <p>INDIVIDUO / ESTRUCTURA</p>
            <h2>Responsabilidad individual o condiciones estructurales</h2>
          </div>
        </div>

        <div className="merit-binary">
          <article>
            <span>UNA POSIBILIDAD</span>
            <strong>Falla individual</strong>
          </article>
          <div>O</div>
          <article className="dark">
            <span>OTRA POSIBILIDAD</span>
            <strong>Diseño estructural</strong>
          </article>
        </div>
      </section>

      <section className="merit-section">
        <div className="merit-section-head">
          <span>03</span>
          <div>
            <p>MERITOCRACIA / DESIGUALDAD</p>
            <h2>Ascenso, mérito y desigualdad</h2>
          </div>
        </div>

        <div className="merit-stair-editorial">
          <div className="merit-stair-images" aria-hidden="true">
            <img className="merit-editorial-ladder" src={`${ASSET}/career-ladder.png`} alt="" />
            <img className="merit-editorial-reach" src={`${ASSET}/reach-for-clouds.png`} alt="" />
            <img className="merit-editorial-crowd" src={`${ASSET}/crowd-silhouettes.png`} alt="" />
            <img className="merit-editorial-trophy" src={`${ASSET}/trophy.png`} alt="" />
          </div>

          <aside>
            <img src={`${ASSET}/torn-paper.png`} alt="" aria-hidden="true" />
            <div>
              <small>PROBLEMA CENTRAL</small>
              <blockquote>
                ¿La meritocracia es la justificación de la desigualdad o el mito que lo oculta?
              </blockquote>
            </div>
          </aside>
        </div>
      </section>

      <section className="merit-section">
        <div className="merit-section-head">
          <span>04</span>
          <div>
            <p>INTERDISCIPLINARIO</p>
            <h2>Diferentes miradas</h2>
          </div>
        </div>

        <div className="merit-disciplines">
          {disciplines.map((item, index) => (
            <article key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <footer className="merit-footer">
        <Link to="/cafe-filosofico">← VOLVER AL CAFÉ FILOSÓFICO</Link>
        <div>
          <strong>LA MERITOCRACIA</strong>
          <span>EDICIÓN 02 · 22 SEP 2026</span>
        </div>
      </footer>
    </main>
  )
}
