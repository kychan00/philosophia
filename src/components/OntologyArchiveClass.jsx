import { useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import './OntologyArchiveClass.css'

const courseRoot = '/semestre/4/ontologia'

export default function OntologyArchiveClass({ data }) {
  const [activeLens, setActiveLens] = useState(data.lenses?.[0]?.id || '')

  const selectedLens =
    data.lenses?.find((lens) => lens.id === activeLens) || data.lenses?.[0]

  const heroImage = data.image
    ? `${import.meta.env.BASE_URL}${data.image}`
    : null

  return (
    <main className={`oa-page ${data.fragment ? 'is-fragment' : ''}`}>
      <div className="oa-backdrop" aria-hidden="true" />
      <div className="oa-brochure">
        <nav className="oa-nav">
          <Link to={courseRoot}>← Ontología</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>{data.dateRoman}</span>
        </nav>

        <header className="oa-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · {data.archiveCode}</span>
            <h1>
              {data.titleLead}
              <em>{data.titleEmphasis}</em>
            </h1>
            <p className="oa-subtitle">{data.subtitle}</p>
            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>{data.question}</strong>
            </div>
          </div>

          <figure className="oa-cover-object">
            {heroImage ? (
              <div className="oa-cover-frame">
                <span className="oa-tape oa-tape-a" aria-hidden="true" />
                <span className="oa-tape oa-tape-b" aria-hidden="true" />
                <img src={heroImage} alt={data.imageAlt || ''} />
              </div>
            ) : (
              <div className="oa-glyph-frame" aria-label={data.glyphLabel || 'Pieza conceptual'}>
                <span>{data.glyphTop || 'τὸ'}</span>
                <strong>{data.glyph || 'ὄν'}</strong>
                <small>{data.glyphBottom || 'lo que es'}</small>
              </div>
            )}
            <figcaption>
              <span>{data.objectLabel}</span>
              <strong>{data.objectTitle}</strong>
              <small>{data.objectNote}</small>
            </figcaption>
          </figure>
        </header>

        {data.fragment && (
          <div className="oa-fragment-banner">
            <span>FRAGMENTUM DOCUMENTALE</span>
            <strong>La fuente conservada es parcial. La página no completa lo que el documento no registra.</strong>
          </div>
        )}

        <div className="oa-columns">
          <div className="oa-column oa-left">
            <section className="oa-welcome">
              <h2>welcome</h2>
              <span>entrada conceptual</span>
              {data.welcome.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>

            {data.philology?.length > 0 && (
              <section className="oa-cabinet">
                <div className="oa-script-title">
                  <small>cabinet</small>
                  <h2>of words</h2>
                </div>
                <div className="oa-word-grid">
                  {data.philology.map((item) => (
                    <article key={item.term}>
                      <span>{item.language}</span>
                      <strong>{item.term}</strong>
                      <em>{item.translation}</em>
                      <p>{item.note}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <section className="oa-collection">
              <h2>the collection</h2>
              <p className="oa-section-intro">{data.collectionIntro}</p>
              <div className="oa-collection-list">
                {data.collection.map((item, index) => (
                  <article key={item.title}>
                    <div className="oa-inventory">
                      <span>/{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <small>{item.eyebrow}</small>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {data.distinctions?.length > 0 && (
              <section className="oa-goal">
                <h2>the <em>distinctions</em></h2>
                <div className="oa-distinction-paper">
                  {data.distinctions.map((item) => (
                    <article key={item.title}>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="oa-column oa-right">
            <section className="oa-wine oa-atlas">
              <div className="oa-wine-title">
                <span>{data.fragmentAtlas ? 'documentum' : 'schema / atlas'}</span>
                <h2>the atlas</h2>
              </div>

              <p>{data.atlasIntro}</p>

              {data.atlasSchema && (
                <div className="oa-schema-card">
                  <AnimatedConceptSchema schema={data.atlasSchema} />
                </div>
              )}

              {data.fragmentAtlas && (
                <div className="oa-fragment-diagram">
                  <strong>{data.fragmentAtlas.title}</strong>
                  <div>
                    {data.fragmentAtlas.nodes.map((node) => (
                      <article key={node.label}>
                        <b>{node.label}</b>
                        {node.note && <span>{node.note}</span>}
                      </article>
                    ))}
                  </div>
                  <small>{data.fragmentAtlas.warning}</small>
                </div>
              )}
            </section>

            {data.lenses?.length > 0 && selectedLens && (
              <section className="oa-wine oa-lenses">
                <div className="oa-wine-title">
                  <span>perspectivae</span>
                  <h2>the lenses</h2>
                </div>

                <div className="oa-lens-tabs">
                  {data.lenses.map((lens) => (
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

                <article className="oa-lens-card">
                  <span className="oa-lens-monogram">{selectedLens.monogram}</span>
                  <div>
                    <small>{selectedLens.eyebrow}</small>
                    <h3>{selectedLens.author}</h3>
                    <strong>{selectedLens.thesis}</strong>
                    <p>{selectedLens.body}</p>
                  </div>
                </article>
              </section>
            )}

            {data.timeline?.length > 0 && (
              <section className="oa-timeline">
                <h2>the timeline</h2>
                <p className="oa-section-intro">desplazamientos registrados en la sesión</p>
                <div className="oa-timeline-list">
                  {data.timeline.map((item, index) => (
                    <article key={item.title}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <small>{item.eyebrow}</small>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <section className="oa-source">
              <div className="oa-source-seal" aria-hidden="true">ὄν</div>
              <h2>document</h2>
              <p>{data.sourceNote}</p>

              {data.preparation?.length > 0 && (
                <div className="oa-preparation">
                  <span>LECTIO / PREPARATIO</span>
                  {data.preparation.map((item) => <strong key={item}>{item}</strong>)}
                </div>
              )}
            </section>
          </div>
        </div>

        <footer className="oa-footer">
          <Link to={courseRoot}>← Ontología</Link>
          <span>☙ τὸ ὄν ❧</span>
          <span>{data.dateLabel}</span>
        </footer>
      </div>
    </main>
  )
}
