import './CafeFilosofico.css'

const sessions = [
  {
    edition: 'EDICIÓN 01',
    date: '07 SEP 2026',
    title: '¿Por qué es más fácil pensar en el fin del mundo que en el fin del capitalismo?',
    description:
      'Una discusión sobre sistema, deseo, medios de producción, naturaleza, mérito y la dificultad de imaginar alternativas.',
    tags: ['Capitalismo', 'Sistema', 'Deseo', 'Medios de producción', 'Naturaleza', 'Valor'],
    route: '/cafe-filosofico/2026/09/07/fin-del-mundo-fin-del-capitalismo',
    image: `${import.meta.env.BASE_URL}images/cafe-filosofico/session-01-thumb.png`,
    photos: [
      `${import.meta.env.BASE_URL}images/cafe-filosofico/gale01.JPG`,
      `${import.meta.env.BASE_URL}images/cafe-filosofico/gale02.JPG`,
    ],
  },
]

export default function CafeFilosofico() {
  const heroImage = `${import.meta.env.BASE_URL}images/cafe-filosofico/cafe-hero.png`

  return (
    <main className="cafe-public">
      <section className="cafe-public-hero">
        <div className="cafe-public-hero-copy">
          <p className="cafe-public-kicker">
            <span>DIÁLOGO</span>
            <i />
            <span>ARGUMENTOS</span>
            <i />
            <span>COMUNIDAD</span>
          </p>

          <h1>
            <span>Café</span>
            <span>Filosófico</span>
          </h1>

          <div className="cafe-public-rule" />

          <p className="cafe-public-intro">
            Un espacio para pensar juntos, formular preguntas y conservar el hilo de cada
            conversación.
          </p>

          <button
            type="button"
            className="cafe-public-scroll"
            onClick={() =>
              document.getElementById('cafe-sesiones')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          >
            Ver sesiones
            <span aria-hidden="true">↓</span>
          </button>
        </div>

        <figure className="cafe-public-hero-visual">
          <img
            src={heroImage}
            alt="Café, libros y una escultura clásica en una composición editorial."
          />

          <div className="cafe-public-hero-caption">
            <span>CAFÉ FILOSÓFICO</span>
            <p>Un archivo de conversaciones que permanecen abiertas.</p>
          </div>

          <span className="cafe-public-hero-orbit" aria-hidden="true" />
          <span className="cafe-public-hero-index" aria-hidden="true">
            CF
          </span>
        </figure>
      </section>

      <section className="cafe-public-sessions" id="cafe-sesiones">
        <header className="cafe-public-section-head">
          <div>
            <span>ARCHIVO</span>
            <h2>Sesiones</h2>
          </div>
          <p>
            Cada encuentro queda abierto para volver a sus argumentos, preguntas y
            problemas.
          </p>
        </header>

        <div className="cafe-public-session-list">
          {sessions.map((session, index) => (
            <article className="cafe-public-session-card" key={session.route}>
              <button
                type="button"
                className="cafe-public-session-image"
                onClick={() => { window.location.hash = `#${session.route}` }}
                aria-label={`Abrir ${session.title}`}
              >
                <img src={session.image} alt="" />
                <span className="cafe-public-session-image-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>

              <div className="cafe-public-session-copy">
                <div className="cafe-public-session-meta">
                  <span>{session.edition}</span>
                  <i />
                  <span>{session.date}</span>
                </div>

                <h3>{session.title}</h3>
                <p>{session.description}</p>

                <div className="cafe-public-tags" aria-label="Temas de la sesión">
                  {session.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="cafe-public-session-gallery" aria-label="Galería del encuentro">
                  {session.photos?.map((photo, photoIndex) => (
                    <figure key={photo} className={`cafe-public-session-photo cafe-public-session-photo-${photoIndex + 1}`}>
                      <img
                        src={photo}
                        alt={`Fotografía ${photoIndex + 1} del encuentro del 7 de septiembre de 2026.`}
                      />
                      <figcaption>
                        <span>{String(photoIndex + 1).padStart(2, '0')}</span>
                        <p>Encuentro · 07 SEP 2026</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <button
                  type="button"
                  className="cafe-public-open"
                  onClick={() => { window.location.hash = `#${session.route}` }}
                >
                  Abrir sesión
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="cafe-public-footer">
        <span>CAFÉ FILOSÓFICO</span>
        <span>GUADALAJARA · MMXXVI</span>
      </footer>
    </main>
  )
}
