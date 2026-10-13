import { useEffect } from 'react'
import { Link } from 'react-router'
import './CafeAguaEvent.css'

const ASSET = '/philosophia/images/cafe-filosofico/agua'

const questions = [
  {
    number: '01',
    text: '¿El agua es un derecho, un recurso, un servicio o un bien común?',
  },
  {
    number: '02',
    text: '¿El agua embotellada es una necesidad real o creada?',
  },
  {
    number: '03',
    text: '¿Cómo se decide sobre un daño que aparece décadas después? ¿Quién se debería hacer responsable de lo que no se ve todavía?',
  },
]

const moderators = [
  'Kefren Martínez',
  'Mildred Solís',
  'Omar Villegas',
  'Diego Jimenez',
  'Cristian',
]

export default function CafeAguaEvent() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Café Filosófico · Hablemos sobre el agua'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <main className="water-cafe-page">
      <div className="water-cafe-grain" aria-hidden="true" />

      <nav className="water-cafe-topbar">
        <Link to="/cafe-filosofico">← CAFÉ FILOSÓFICO</Link>
        <span>EDICIÓN 04 · 19 OCT 2026</span>
        <span>PRÓXIMO ENCUENTRO</span>
      </nav>

      <header className="water-cafe-hero">
        <div className="water-cafe-copy">
          <p className="water-cafe-kicker">CAFÉ FILOSÓFICO · INTERDISCIPLINARIO</p>

          <div className="water-cafe-paper-title">
            <span>HABLEMOS SOBRE</span>
            <h1>EL AGUA</h1>
          </div>

          <p className="water-cafe-deck">
            Tres preguntas para abrir una conversación sobre derecho, recurso,
            consumo y responsabilidad.
          </p>

          <div className="water-cafe-meta">
            <article>
              <span>FECHA</span>
              <strong>Lunes 19 de octubre</strong>
            </article>
            <article>
              <span>HORA</span>
              <strong>1:00 P.M.</strong>
            </article>
            <article>
              <span>LUGAR</span>
              <strong>Edificio C · Aula 5</strong>
            </article>
            <article className="is-coffee">
              <span>CAFÉ</span>
              <strong>Gratis</strong>
            </article>
          </div>

          <div className="water-cafe-status">
            <span>PÁGINA PROMOCIONAL</span>
            <p>
              El encuentro todavía no ocurre. Esta página conserva únicamente
              la invitación, los datos del evento y las preguntas de apertura.
              La memoria se construirá después del diálogo.
            </p>
          </div>
        </div>

        <figure className="water-cafe-poster">
          <div className="water-cafe-tape" aria-hidden="true" />
          <img
            src={`${ASSET}/poster-original.jpg`}
            alt="Cartel del Café Filosófico interdisciplinario Hablemos sobre el agua"
          />
          <figcaption>
            <span>INVITACIÓN · EDICIÓN 04</span>
            <p>Lunes 19 · 1:00 P.M. · Edificio C · Aula 5</p>
          </figcaption>
        </figure>
      </header>

      <section className="water-cafe-band" aria-label="Ejes del encuentro">
        <article><span>01</span><strong>DERECHO</strong></article>
        <article><span>02</span><strong>RECURSO</strong></article>
        <article><span>03</span><strong>SERVICIO</strong></article>
        <article className="is-dark"><span>04</span><strong>BIEN COMÚN</strong></article>
      </section>

      <section className="water-cafe-section" id="preguntas">
        <header className="water-cafe-section-head">
          <span>01</span>
          <div>
            <p>PREGUNTAS DE APERTURA</p>
            <h2>Tres entradas al problema</h2>
          </div>
        </header>

        <div className="water-cafe-questions">
          {questions.map((question) => (
            <article key={question.number}>
              <span>{question.number}</span>
              <p>{question.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="water-cafe-section">
        <header className="water-cafe-section-head">
          <span>02</span>
          <div>
            <p>MODERAN</p>
            <h2>La conversación será acompañada por</h2>
          </div>
        </header>

        <div className="water-cafe-moderators">
          {moderators.map((name, index) => (
            <article key={name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="water-cafe-invite">
        <div>
          <span>PRÓXIMO ENCUENTRO · 19 OCT 2026</span>
          <h2>Hablemos sobre el agua</h2>
          <p>Edificio C · Aula 5 · 1:00 P.M.</p>
        </div>

        <aside>
          <strong>CAFÉ GRATIS</strong>
          <span>Diálogo · argumentos · comunidad</span>
        </aside>
      </section>

      <footer className="water-cafe-footer">
        <Link to="/cafe-filosofico">← VOLVER AL CAFÉ FILOSÓFICO</Link>
        <div>
          <strong>HABLEMOS SOBRE EL AGUA</strong>
          <span>EDICIÓN 04 · 19 OCT 2026</span>
        </div>
      </footer>
    </main>
  )
}
