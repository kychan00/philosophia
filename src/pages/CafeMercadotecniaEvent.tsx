import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import './CafeMercadotecniaEvent.css'

const ASSET = '/philosophia/images/cafe-filosofico/mercadotecnia'

const questions = [
  {
    id: 'influence',
    number: '01',
    label: 'INFORMAR · INFLUIR',
    text: '¿La mercadotecnia solo informa o también influye en lo que pensamos y sentimos?',
  },
  {
    id: 'manipulation',
    number: '02',
    label: 'LEGITIMIDAD · MANIPULACIÓN',
    text: '¿Es una herramienta legítima o una forma moderna de manipulación?',
  },
  {
    id: 'freedom',
    number: '03',
    label: 'LIBERTAD · CONSUMO',
    text: '¿Qué tan libres somos realmente al “elegir” lo que consumimos?',
  },
]

const tensions = [
  ['INFORMAR', 'INFLUIR'],
  ['SUGERIR', 'PERSUADIR'],
  ['PERSUADIR', 'MANIPULAR'],
  ['ELEGIR', 'SER INFLUIDO'],
]

export default function CafeMercadotecniaEvent() {
  const [activeId, setActiveId] = useState('influence')

  const active = useMemo(
    () => questions.find((item) => item.id === activeId) || questions[0],
    [activeId],
  )

  useEffect(() => {
    const previous = document.title
    document.title = 'Café Filosófico · Mercadotecnia'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <main className="marketing-page">
      <div className="marketing-grain" aria-hidden="true" />

      <nav className="marketing-topbar">
        <Link to="/cafe-filosofico">← CAFÉ FILOSÓFICO</Link>
        <span>EDICIÓN 03 · 05 OCT 2026</span>
        <span>INTERDISCIPLINARIO</span>
      </nav>

      <header className="marketing-hero">
        <div className="marketing-hero-copy">
          <p className="marketing-kicker">IDEAS · DIÁLOGO · DIFERENTES MIRADAS</p>

          <div className="marketing-brand">
            <div>
              <span>Café</span>
              <i className="marketing-cup" aria-hidden="true"><b /></i>
            </div>
            <strong>Filosófico</strong>
          </div>

          <div className="marketing-rule" />
          <p className="marketing-subbrand">interdisciplinario</p>

          <div className="marketing-topic-paper">
            <small>Tema:</small>
            <h1>Mercadotecnia</h1>
            <strong>¿Sugerencia, persuasión o manipulación?</strong>
          </div>

          <div className="marketing-meta">
            <article><span>FECHA</span><strong>Lunes 5</strong></article>
            <article><span>HORA</span><strong>1:00</strong></article>
            <article><span>LUGAR</span><strong>Edificio C · Aula 5</strong></article>
            <article className="is-coffee"><span>CAFÉ</span><strong>gratis</strong></article>
          </div>
        </div>

        <figure className="marketing-poster">
          <div className="marketing-poster-tape" aria-hidden="true" />
          <img
            src={`${ASSET}/poster-original.jpg`}
            alt="Cartel del Café Filosófico interdisciplinario sobre mercadotecnia"
          />
          <figcaption>
            <span>PRÓXIMO ENCUENTRO</span>
            <p>Lunes 5 de octubre · 1:00 · Edificio C · Aula 5</p>
          </figcaption>
        </figure>
      </header>

      <section className="marketing-strip" aria-label="Ejes del encuentro">
        <article><span>01</span><strong>SUGERENCIA</strong></article>
        <article><span>02</span><strong>PERSUASIÓN</strong></article>
        <article><span>03</span><strong>MANIPULACIÓN</strong></article>
        <article className="is-dark"><span>04</span><strong>ELECCIÓN</strong></article>
      </section>

      <section className="marketing-section">
        <div className="marketing-section-head">
          <span>01</span>
          <div>
            <p>PREGUNTAS DE APERTURA</p>
            <h2>Tres entradas al problema</h2>
          </div>
        </div>

        <div className="marketing-question-tabs">
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

        <div className="marketing-question-focus">
          <div className="marketing-stamp">PREGUNTA {active.number}</div>
          <small>{active.label}</small>
          <blockquote>{active.text}</blockquote>
        </div>
      </section>

      <section className="marketing-section">
        <div className="marketing-section-head">
          <span>02</span>
          <div>
            <p>MAPA DEL PROBLEMA</p>
            <h2>¿Dónde cambia la influencia de nombre?</h2>
          </div>
        </div>

        <div className="marketing-tensions">
          {tensions.map(([left, right], index) => (
            <article key={`${left}-${right}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{left}</strong>
                <b>↔</b>
                <strong>{right}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="marketing-section">
        <div className="marketing-section-head">
          <span>03</span>
          <div>
            <p>PROBLEMA CENTRAL</p>
            <h2>Mercadotecnia y libertad de elección</h2>
          </div>
        </div>

        <div className="marketing-core">
          <aside>
            <span>LA PREGUNTA</span>
            <blockquote>
              ¿Qué tan libres somos realmente al “elegir” lo que consumimos?
            </blockquote>
          </aside>

          <div className="marketing-core-diagram">
            <article>
              <span>MENSAJE</span>
              <strong>lo que se nos presenta</strong>
            </article>
            <b>→</b>
            <article>
              <span>INFLUENCIA</span>
              <strong>lo que pensamos y sentimos</strong>
            </article>
            <b>→</b>
            <article className="active">
              <span>ELECCIÓN</span>
              <strong>lo que consumimos</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="marketing-section">
        <div className="marketing-section-head">
          <span>04</span>
          <div>
            <p>PLANTILLA DEL ENCUENTRO</p>
            <h2>Lo que quedará documentado después del Café</h2>
          </div>
        </div>

        <div className="marketing-future">
          <article><span>01</span><strong>Mapa dialógico</strong><p>Tesis, objeciones, ejemplos y preguntas de la conversación.</p></article>
          <article><span>02</span><strong>Registro visual</strong><p>Fotografías y fragmentos audiovisuales del encuentro.</p></article>
          <article><span>03</span><strong>Problemas abiertos</strong><p>Las preguntas que permanezcan sin cerrar al terminar la sesión.</p></article>
        </div>
      </section>

      <section className="marketing-section marketing-invite">
        <div>
          <span>LUNES · 05 OCT · 1:00</span>
          <h2>Mercadotecnia</h2>
          <p>¿Sugerencia, persuasión o manipulación?</p>
        </div>

        <aside>
          <strong>Edificio C · Aula 5</strong>
          <span>Café gratis</span>
        </aside>
      </section>

      <footer className="marketing-footer">
        <Link to="/cafe-filosofico">← VOLVER AL CAFÉ FILOSÓFICO</Link>
        <div>
          <strong>MERCADOTECNIA</strong>
          <span>EDICIÓN 03 · 05 OCT 2026</span>
        </div>
      </footer>
    </main>
  )
}
