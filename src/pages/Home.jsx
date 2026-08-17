import SemesterCard from '../components/SemesterCard'

const semesters = [
  { roman: 'I', title: 'Primer semestre' },
  { roman: 'II', title: 'Segundo semestre' },
  { roman: 'III', title: 'Tercer semestre' },
  { roman: 'IV', title: 'Cuarto semestre' },
  {
    roman: 'V',
    title: 'Quinto semestre',
    period: '2026 · B',
    active: true,
  },
  { roman: 'VI', title: 'Sexto semestre' },
  { roman: 'VII', title: 'Séptimo semestre' },
  { roman: 'VIII', title: 'Octavo semestre' },
]

const ambientSymbols = [
  { char: '·', top: '14%', left: '12%', size: '1rem', duration: '18s', delay: '0s' },
  { char: '✦', top: '18%', left: '24%', size: '0.85rem', duration: '22s', delay: '-4s' },
  { char: '◦', top: '26%', left: '82%', size: '1.1rem', duration: '20s', delay: '-7s' },
  { char: 'ϕ', top: '33%', left: '9%', size: '1rem', duration: '24s', delay: '-2s' },
  { char: '·', top: '36%', left: '88%', size: '0.95rem', duration: '19s', delay: '-9s' },
  { char: '✧', top: '49%', left: '18%', size: '0.9rem', duration: '23s', delay: '-5s' },
  { char: '◦', top: '54%', left: '78%', size: '1rem', duration: '21s', delay: '-11s' },
  { char: '·', top: '62%', left: '10%', size: '0.8rem', duration: '18s', delay: '-6s' },
  { char: '✦', top: '68%', left: '86%', size: '0.8rem', duration: '25s', delay: '-8s' },
  { char: 'ϕ', top: '76%', left: '20%', size: '0.9rem', duration: '22s', delay: '-13s' },
  { char: '·', top: '79%', left: '74%', size: '1rem', duration: '17s', delay: '-3s' },
  { char: '◦', top: '84%', left: '48%', size: '0.9rem', duration: '26s', delay: '-10s' },
]

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="ambient-field" aria-hidden="true">
          {ambientSymbols.map((item, index) => (
            <span
              key={`${item.char}-${index}`}
              className="ambient-particle"
              style={{
                '--top': item.top,
                '--left': item.left,
                '--size': item.size,
                '--duration': item.duration,
                '--delay': item.delay,
              }}
            >
              {item.char}
            </span>
          ))}
        </div>

        <div className="hero-glow" />
        <div className="hero-orbit hero-orbit--outer" />
        <div className="hero-orbit hero-orbit--inner" />

        <div className="hero-content">
          <p className="institution">
            Universidad de Guadalajara
          </p>

          <div className="phi-mark" aria-hidden="true">
            Φ
          </div>

          <p className="greek-title">
            ΦΙΛΟΣΟΦΙΑ
          </p>

          <h1>Philosophia</h1>

          <p className="hero-description">
            Apuntes, lecturas y caminos a través del pensamiento.
          </p>

          <div className="ornament">
            <span />
            <b>✦</b>
            <span />
          </div>

          <blockquote>
            «Todos los hombres desean por naturaleza saber.»
          </blockquote>

          <cite>Aristóteles · Metafísica</cite>
        </div>

        <a className="scroll-cue" href="#semestres">
          <span>Explorar</span>
          <span className="scroll-arrow">↓</span>
        </a>
      </section>

      <section className="semesters-section" id="semestres">
        <div className="section-header">
          <div className="section-number">I</div>

          <div className="section-copy">
            <p className="section-kicker">
              Archivo académico
            </p>

            <h2>Semestres</h2>

            <p className="section-description">
              Un archivo personal de ideas, lecturas, preguntas y apuntes
              desarrollados durante la Licenciatura en Filosofía.
            </p>
          </div>
        </div>

        <div className="semester-grid">
          {semesters.map((semester) => (
            <SemesterCard
              key={semester.roman}
              {...semester}
            />
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-monogram">CRP</div>

        <div className="footer-center">
          <span>Philosophia</span>
          <span className="footer-dot">·</span>
          <span>Guadalajara</span>
          <span className="footer-dot">·</span>
          <span>MMXXVI</span>
        </div>

        <div className="footer-phi">Φ</div>
      </footer>
    </main>
  )
}
