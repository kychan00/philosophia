import { useEffect } from 'react'
import { Link } from 'react-router'
import './CafeAguaEvent.css'
import CafeAguaMemory from './CafeAguaMemory'
import { cafeAguaPhotos } from '../data/cafeAguaPhotos'

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
        <span>MEMORIA PUBLICADA</span>
      </nav>

      <header className="water-cafe-hero">
        <div className="water-cafe-copy">
          <p className="water-cafe-kicker">CAFÉ FILOSÓFICO · INTERDISCIPLINARIO</p>

          <div className="water-cafe-paper-title">
            <span>HABLEMOS SOBRE</span>
            <h1>EL AGUA</h1>
          </div>

          <p className="water-cafe-deck">
            Memoria del diálogo sobre ecología, infraestructura, economía,
            justicia ambiental y responsabilidad colectiva.
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
            <span>ARCHIVO DEL ENCUENTRO · 19 OCT 2026</span>
            <p>
              El diálogo ya ocurrió. Esta página conserva su memoria argumental,
              las posiciones contrapuestas y las preguntas abiertas.
              Las fuentes externas se distinguen de lo expresado en la sesión.
            </p>
            <button type="button" className="water-cafe-gallery-shortcut" onClick={() => document.getElementById('galeria-agua')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>VER LAS 8 FOTOGRAFÍAS ↓</button>
          </div>
        </div>

        <figure className="water-cafe-poster">
          <div className="water-cafe-tape" aria-hidden="true" />
          <img
            src={`${ASSET}/poster-original.svg`}
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


      <section className="water-cafe-gallery" id="galeria-agua" aria-labelledby="water-cafe-gallery-title">
        <header className="water-cafe-gallery-header">
          <span>EDICIÓN 04 / REGISTRO FOTOGRÁFICO</span>
          <h2 id="water-cafe-gallery-title">Así se vivió el diálogo.</h2>
          <p>Ocho fotografías del encuentro del 19 de octubre de 2026. Toque una imagen para verla en mayor tamaño.</p>
        </header>
        <div className="water-cafe-gallery-grid">
          {cafeAguaPhotos.map((photo, index) => (
            <figure key={photo.file} className={`water-cafe-gallery-photo ${index === 0 || index === 5 ? 'is-featured' : ''}`}>
              <a
                href={`${ASSET}/sesion-04/${photo.file}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir fotografía ${index + 1}: ${photo.caption}`}
              >
                <img
                  src={`${ASSET}/sesion-04/${photo.file}`}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="900"
                />
              </a>
              <figcaption>
                <span>{String(index + 1).padStart(2, '0')} / 08</span>
                <strong>{photo.caption}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="water-cafe-gallery-footnote">
          Archivo visual del Café Filosófico · Guadalajara · 19 de octubre de 2026.
          Las fotografías documentan el encuentro; no atribuyen posiciones filosóficas a las personas retratadas.
        </p>
      </section>

      <CafeAguaMemory />

      <section className="water-cafe-section" id="preguntas">
        <header className="water-cafe-section-head">
          <span>01</span>
          <div>
            <p>PREGUNTAS DE APERTURA</p>
            <h2>Preguntas de la convocatoria original</h2>
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
            <h2>Moderación anunciada en la convocatoria</h2>
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
          <span>MEMORIA PUBLICADA · 19 OCT 2026</span>
          <h2>El diálogo sigue abierto</h2>
          <p>Próximo tema: redes sociales · fecha por confirmar.</p>
        </div>

        <aside>
          <strong>ARCHIVO ABIERTO</strong>
          <span>Argumentos · objeciones · comunidad</span>
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
