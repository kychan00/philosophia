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

const sections = [
  ['00', 'proemio', 'Proemio'],
  ['01', 'filologia', 'Gabinete filológico'],
  ['02', 'atlas', 'Atlas del ser'],
  ['03', 'genealogia', 'Genealogía'],
  ['04', 'lentes', 'Lentes ontológicos'],
  ['05', 'distinciones', 'Distinciones'],
  ['06', 'metodo', 'Método de lectura'],
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export default function OntologyBeingPrototype() {
  const [activeLens, setActiveLens] = useState('aristoteles')

  const selectedLens = useMemo(
    () => lenses.find((lens) => lens.id === activeLens) || lenses[0],
    [activeLens],
  )

  return (
    <main className="onto-being-page">
      <div className="onto-being-grain" aria-hidden="true" />
      <div className="onto-being-meander" aria-hidden="true" />

      <nav className="onto-being-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>

        <Link to="/" className="onto-being-brand">
          <span>Φ</span>
          Philosophia
        </Link>

        <span className="onto-being-lab">LAB · PROTOTYPUS 01</span>
      </nav>

      <header className="onto-being-hero" id="proemio">
        <div className="onto-being-hero-copy">
          <p className="onto-being-kicker">Archivum ontologicum · folium I</p>

          <div className="onto-being-inventory">
            <span>INV. NO. ON-001</span>
            <span>MMXXVI</span>
          </div>

          <h1>
            El
            <em>ser</em>
          </h1>

          <p className="onto-being-subtitle">
            ὄν · εἶναι · ens · esse · Sein
          </p>

          <p className="onto-being-lead">
            No una definición única, sino un problema que atraviesa la historia
            de la filosofía: qué significa que algo sea, de qué maneras se dice
            que es y qué relación guardan ser, ente, esencia, existencia,
            apariencia, pensamiento y lenguaje.
          </p>

          <div className="onto-being-question">
            <span>QUAESTIO FUNDAMENTALIS</span>
            <strong>¿Qué significa decir que algo es?</strong>
          </div>
        </div>

        <div className="onto-being-object" aria-label="Pieza conceptual: el ser">
          <div className="onto-being-object-frame">
            <div className="onto-being-stone">
              <span>τὸ</span>
              <strong>ὄν</strong>
              <small>lo que es</small>
            </div>
          </div>

          <div className="onto-being-caption">
            <span>PIEZA CONCEPTUAL / 01</span>
            <strong>El problema del ser</strong>
            <p>
              Reconstrucción editorial para el laboratorio visual de Ontología.
            </p>
          </div>
        </div>
      </header>

      <div className="onto-being-axis" aria-hidden="true">
        <span>ente</span><b>↔</b>
        <span>ser</span><b>↔</b>
        <span>pensar</span><b>↔</b>
        <span>lenguaje</span><b>↔</b>
        <span>mundo</span>
      </div>

      <div className="onto-being-layout">
        <aside className="onto-being-index">
          <p>Index folii</p>
          {sections.map(([number, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{number}</span>
              {label}
            </button>
          ))}
        </aside>

        <article className="onto-being-article">
          <section className="onto-being-intro-card">
            <p>
              Esta página funciona como una <strong>pieza piloto</strong> para el
              lenguaje visual de Ontología: archivo, museo, seminario y mapa
              conceptual en una sola superficie.
            </p>
            <span>ONTOLOGIA · NON EST DEFINITIO SED QUAESTIO</span>
          </section>

          <section id="filologia">
            <SectionHeading number="01" eyebrow="Philologia ontologica">
              Gabinete filológico
            </SectionHeading>

            <p className="onto-being-prose">
              La pregunta ontológica cambia también cuando cambia su vocabulario.
              Por eso el folio conserva los términos en sus lenguas de trabajo y
              evita tratarlos como equivalentes perfectos.
            </p>

            <div className="onto-being-philology">
              {philology.map((item) => (
                <article key={item.term}>
                  <span>{item.language}</span>
                  <strong>{item.term}</strong>
                  <em>{item.transliteration}</em>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>

            <aside className="onto-being-curator-note">
              <span>NOTA DE CURADURÍA</span>
              <p>
                “Ser”, “ente”, <i>esse</i> y <i>Sein</i> pertenecen a tradiciones
                conceptuales distintas. El diseño debe mostrar esas diferencias,
                no borrarlas bajo una sola traducción.
              </p>
            </aside>
          </section>

          <section id="atlas" className="onto-being-atlas-section">
            <SectionHeading number="02" eyebrow="Atlas quaestionum">
              Un mapa de rutas para preguntar por el ser
            </SectionHeading>

            <p className="onto-being-prose">
              El diagrama no ofrece una teoría definitiva. Organiza algunos de
              los caminos recurrentes desde los que la ontología interroga el
              ser.
            </p>

            <div className="onto-being-schema-shell">
              <div className="onto-being-schema-label">
                <span>SCHEMA / 01</span>
                <b>Atlas del ser</b>
              </div>

              <AnimatedConceptSchema schema={beingRoutesSchema} />
            </div>

            <div className="onto-being-schema-legend">
              <p>
                El nodo central funciona como pregunta. Los nodos satélite no son
                “partes” del ser, sino <strong>vías filosóficas de acceso</strong>
                al problema.
              </p>
            </div>
          </section>

          <section id="genealogia">
            <SectionHeading number="03" eyebrow="Genealogia problematis">
              Seis desplazamientos históricos
            </SectionHeading>

            <div className="onto-being-genealogy">
              {genealogy.map((item, index) => (
                <article key={item.author}>
                  <div className="onto-being-genealogy-index">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <i />
                  </div>

                  <div>
                    <p>{item.period}</p>
                    <h3>{item.author}</h3>
                    <strong>{item.key}</strong>
                    <span>{item.body}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="lentes">
            <SectionHeading number="04" eyebrow="Perspectivae">
              El mismo problema visto desde distintos autores
            </SectionHeading>

            <div className="onto-being-lenses">
              <div className="onto-being-lens-tabs" role="tablist" aria-label="Perspectivas ontológicas">
                {lenses.map((lens) => (
                  <button
                    key={lens.id}
                    type="button"
                    role="tab"
                    aria-selected={activeLens === lens.id}
                    className={activeLens === lens.id ? 'is-active' : ''}
                    onClick={() => setActiveLens(lens.id)}
                  >
                    <span>{lens.marker}</span>
                    {lens.author}
                  </button>
                ))}
              </div>

              <div className="onto-being-lens-panel" role="tabpanel">
                <div className="onto-being-lens-monogram" aria-hidden="true">
                  {selectedLens.monogram}
                </div>

                <div>
                  <p>{selectedLens.period}</p>
                  <h3>{selectedLens.author}</h3>
                  <strong>{selectedLens.thesis}</strong>
                  <span>{selectedLens.explanation}</span>

                  <blockquote>
                    <small>PREGUNTA DE LECTURA</small>
                    {selectedLens.question}
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          <section id="distinciones">
            <SectionHeading number="05" eyebrow="Discrimina">
              Distinciones de trabajo
            </SectionHeading>

            <p className="onto-being-prose">
              Estas fichas no fijan una terminología válida para todos los
              autores. Sirven como instrumentos de lectura que deben ajustarse a
              cada tradición.
            </p>

            <div className="onto-being-distinction-grid">
              {distinctions.map((item) => (
                <article key={item.title}>
                  <span>{item.code}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <small>{item.warning}</small>
                </article>
              ))}
            </div>
          </section>

          <section id="metodo">
            <SectionHeading number="06" eyebrow="Modus legendi">
              Cómo leer una clase de Ontología con este sistema
            </SectionHeading>

            <div className="onto-being-method">
              <article>
                <span>01</span>
                <strong>Problema</strong>
                <p>¿Qué pregunta ontológica organiza la sesión?</p>
              </article>
              <article>
                <span>02</span>
                <strong>Vocabulario</strong>
                <p>¿Qué términos técnicos cambian el sentido del problema?</p>
              </article>
              <article>
                <span>03</span>
                <strong>Arquitectura</strong>
                <p>¿Qué relaciones conceptuales sostienen la tesis?</p>
              </article>
              <article>
                <span>04</span>
                <strong>Desplazamiento</strong>
                <p>¿Qué transforma este autor respecto de la tradición anterior?</p>
              </article>
              <article>
                <span>05</span>
                <strong>Consecuencia</strong>
                <p>¿Qué cambia en nuestra comprensión de realidad y conocimiento?</p>
              </article>
            </div>

            <div className="onto-being-final">
              <span>ARCHIVUM ONTOLOGICUM</span>
              <strong>
                La página de clase no debe parecer una transcripción:
                debe funcionar como un mapa intelectual navegable.
              </strong>
              <p>
                Si este prototipo se adopta, cada clase conservará esta gramática
                visual y cambiarán únicamente su problema, vocabulario, esquemas,
                autores, fuentes y acentos conceptuales.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="onto-being-footer">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <span>☙ &nbsp; τὸ ὄν &nbsp; ❧</span>
        <span>LAB · El ser · MMXXVI</span>
      </footer>
    </main>
  )
}

function SectionHeading({ number, eyebrow, children }) {
  return (
    <div className="onto-being-heading">
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}
