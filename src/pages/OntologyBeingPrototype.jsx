import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import {
  beingRoutesSchema,
  philology,
  genealogy,
  lenses,
  distinctions,
} from '../data/ontologyBeingPrototype'
import './OntologyBeingPrototype.css'

const art = {
  hero: `${import.meta.env.BASE_URL}images/ethics/open/2026-08-18/achilles-agamemnon.jpg`,
  iphigenia: `${import.meta.env.BASE_URL}images/ethics/open/2026-08-20/iphigenia-sacrifice.jpg`,
  orphic: `${import.meta.env.BASE_URL}images/ethics/open/2026-08-25/orphic-gold-tablet.jpg`,
  democritus: `${import.meta.env.BASE_URL}images/ethics/open/2026-08-27/democritus-abdera.jpg`,
  sappho: `${import.meta.env.BASE_URL}images/ethics/open/2026-09-01/sappho-bust.jpg`,
  themis: `${import.meta.env.BASE_URL}images/ethics/open/2026-09-03/themis-rhamnous.jpg`,
}

const collection = [
  { number: '01', title: 'Ser / ente', subtitle: 'τὸ ὄν · ens', image: art.orphic },
  { number: '02', title: 'Sustancia', subtitle: 'οὐσία · substantia', image: art.themis },
  { number: '03', title: 'Existencia', subtitle: 'esse · existentia', image: art.hero },
  { number: '04', title: 'Apariencia', subtitle: 'φαινόμενον', image: art.sappho },
  { number: '05', title: 'Posibilidad', subtitle: 'δύναμις · possibilitas', image: art.iphigenia },
  { number: '06', title: 'Lenguaje', subtitle: 'λόγος · Sprache', image: art.democritus },
]

export default function OntologyBeingPrototype() {
  const [activeLens, setActiveLens] = useState('aristoteles')
  const selectedLens = useMemo(
    () => lenses.find((lens) => lens.id === activeLens) || lenses[0],
    [activeLens],
  )

  return (
    <main className="obm-page">
      <div className="obm-backdrop" aria-hidden="true" />
      <div className="obm-backdrop-wash" aria-hidden="true" />

      <div className="obm-brochure">
        <nav className="obm-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="obm-brand">Φ · Philosophia</Link>
          <span>LAB / 01</span>
        </nav>

        <div className="obm-columns">
          <div className="obm-column obm-column-left">
            <section className="obm-cover">
              <div className="obm-cover-title">
                <span className="obm-kicker">Archivum ontologicum</span>
                <h1>El <em>ser.</em></h1>
                <i className="obm-title-swatch" aria-hidden="true" />
              </div>

              <figure className="obm-hero-art">
                <span className="obm-tape obm-tape-a" aria-hidden="true" />
                <span className="obm-tape obm-tape-b" aria-hidden="true" />
                <img src={art.hero} alt="Pintura clásica utilizada como pieza editorial de apertura" />
              </figure>

              <p className="obm-cover-line">
                ¿Qué significa decir que algo <em>es</em>?
              </p>

              <button type="button" className="obm-ticket-button" onClick={() => document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' })}>
                entrar al archivo
              </button>
            </section>

            <section className="obm-welcome" id="welcome">
              <h2>welcome</h2>
              <p className="obm-small-caps">al archivo visual de Ontología</p>

              <div className="obm-collage-note">
                <div>
                  <p>
                    Esta página piloto no busca “decorar” la ontología, sino
                    volver visible su modo de trabajo: términos, problemas,
                    desplazamientos históricos y arquitecturas conceptuales.
                  </p>
                  <p>
                    El ser aparece aquí como una pregunta que cambia de forma al
                    pasar por Parménides, Aristóteles, la escolástica, Kant,
                    Hegel y Heidegger.
                  </p>
                </div>
                <img src={art.democritus} alt="" aria-hidden="true" />
              </div>
            </section>

            <section className="obm-philology">
              <div className="obm-script-heading">
                <span>cabinet</span>
                <h2>of words</h2>
              </div>

              <div className="obm-word-grid">
                {philology.map((item) => (
                  <article key={item.term}>
                    <span>{item.language}</span>
                    <strong>{item.term}</strong>
                    <em>{item.transliteration}</em>
                    <p>{item.note}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="obm-goal">
              <div className="obm-goal-art">
                <img src={art.iphigenia} alt="Pintura clásica presentada como collage editorial" />
              </div>

              <h2>our <em>goal</em></h2>

              <div className="obm-goal-paper">
                <p>
                  Distinguir sin empobrecer: <strong>ser</strong>, ente,
                  esencia, existencia, apariencia, posibilidad, tiempo y lenguaje
                  no son fichas intercambiables, sino entradas a problemas
                  diferentes.
                </p>
              </div>
            </section>
          </div>

          <div className="obm-column obm-column-right">
            <section className="obm-collection">
              <h2>the collection</h2>
              <p>
                seis entradas para recorrer el problema del ser como una colección
                abierta, no como una definición cerrada
              </p>

              <div className="obm-collection-grid">
                {collection.map((item) => (
                  <article key={item.number}>
                    <div className="obm-mini-frame">
                      <img src={item.image} alt="" aria-hidden="true" />
                    </div>
                    <span>{item.number}</span>
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </article>
                ))}
              </div>
            </section>

            <section className="obm-burgundy obm-atlas">
              <div className="obm-burgundy-heading">
                <span>folio / 02</span>
                <h2>the atlas</h2>
              </div>

              <p className="obm-burgundy-intro">
                El ser no se divide en estas piezas; el diagrama muestra rutas
                recurrentes desde las que la ontología formula su pregunta.
              </p>

              <div className="obm-schema-card">
                <AnimatedConceptSchema schema={beingRoutesSchema} />
              </div>
            </section>

            <section className="obm-burgundy obm-tickets">
              <div className="obm-burgundy-heading">
                <span>perspectivae</span>
                <h2>the lenses</h2>
              </div>

              <div className="obm-lens-tabs">
                {lenses.map((lens) => (
                  <button
                    key={lens.id}
                    type="button"
                    className={activeLens === lens.id ? 'is-active' : ''}
                    onClick={() => setActiveLens(lens.id)}
                  >
                    <span>/{lens.marker}</span>
                    {lens.author}
                  </button>
                ))}
              </div>

              <article className="obm-lens-card">
                <span className="obm-lens-number">{selectedLens.monogram}</span>
                <div>
                  <small>{selectedLens.period}</small>
                  <h3>{selectedLens.author}</h3>
                  <strong>{selectedLens.thesis}</strong>
                  <p>{selectedLens.explanation}</p>
                  <blockquote>{selectedLens.question}</blockquote>
                </div>
              </article>
            </section>

            <section className="obm-genealogy">
              <h2>the timeline</h2>

              <div className="obm-genealogy-list">
                {genealogy.map((item, index) => (
                  <article key={item.author}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <small>{item.period}</small>
                      <h3>{item.author}</h3>
                      <strong>{item.key}</strong>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="obm-contact">
              <div className="obm-contact-seal">ὄν</div>
              <div>
                <h2>the distinctions</h2>
                <p>instrumentos de lectura para no confundir niveles del problema</p>
              </div>

              <div className="obm-distinction-list">
                {distinctions.map((item) => (
                  <article key={item.code}>
                    <span>{item.code}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                      <small>{item.warning}</small>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>

        <footer className="obm-footer">
          <span>Philosophia · Ontología II · MMXXVI</span>
          <strong>τὸ ὄν</strong>
          <Link to="/semestre/5/ontologia-ii">volver al curso ↗</Link>
        </footer>
      </div>
    </main>
  )
}
