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
  { char: 'Α', top: '11%', left: '8%', size: '1.35rem', duration: '26s', delay: '-4s' },
  { char: '✦', top: '15%', left: '19%', size: '0.8rem', duration: '18s', delay: '-9s' },
  { char: 'Ω', top: '12%', left: '88%', size: '1.5rem', duration: '29s', delay: '-6s' },
  { char: 'Θ', top: '25%', left: '5%', size: '1.05rem', duration: '24s', delay: '-12s' },
  { char: 'Λ', top: '28%', left: '93%', size: '1.25rem', duration: '27s', delay: '-3s' },
  { char: '❦', top: '35%', left: '14%', size: '1.1rem', duration: '22s', delay: '-13s' },
  { char: 'Δ', top: '39%', left: '84%', size: '1.2rem', duration: '25s', delay: '-7s' },
  { char: 'Ψ', top: '47%', left: '6%', size: '1.4rem', duration: '31s', delay: '-15s' },
  { char: '✧', top: '50%', left: '92%', size: '0.9rem', duration: '21s', delay: '-5s' },
  { char: 'Σ', top: '59%', left: '16%', size: '1rem', duration: '28s', delay: '-11s' },
  { char: 'Ν', top: '61%', left: '81%', size: '1.25rem', duration: '23s', delay: '-8s' },
  { char: 'ϕ', top: '70%', left: '7%', size: '1.3rem', duration: '30s', delay: '-17s' },
  { char: '✦', top: '73%', left: '91%', size: '0.8rem', duration: '20s', delay: '-4s' },
  { char: 'Ω', top: '83%', left: '20%', size: '1rem', duration: '27s', delay: '-10s' },
  { char: 'Α', top: '86%', left: '77%', size: '1.1rem', duration: '25s', delay: '-14s' },
  { char: '·', top: '19%', left: '32%', size: '1rem', duration: '17s', delay: '-7s' },
  { char: '◦', top: '32%', left: '71%', size: '1rem', duration: '19s', delay: '-1s' },
  { char: '✧', top: '77%', left: '63%', size: '0.8rem', duration: '23s', delay: '-9s' },
]

const dustParticles = Array.from({ length: 56 }, (_, index) => ({
  left: `${(index * 37 + 7) % 100}%`,
  top: `${(index * 61 + 11) % 100}%`,
  size: `${1.2 + (index % 5) * 0.65}px`,
  duration: `${17 + (index % 8) * 2.5}s`,
  delay: `${-(index % 19)}s`,
  opacity: `${0.14 + (index % 5) * 0.055}`,
}))

const greekConstellation = [
  {
    word: 'λόγος',
    top: '18%',
    left: '5%',
    size: '3.8rem',
    duration: '31s',
    delay: '-8s',
    rotate: '-10deg',
  },
  {
    word: 'ἀλήθεια',
    top: '22%',
    left: '78%',
    size: '2.7rem',
    duration: '35s',
    delay: '-17s',
    rotate: '8deg',
  },
  {
    word: 'οὐσία',
    top: '65%',
    left: '4%',
    size: '3.2rem',
    duration: '33s',
    delay: '-12s',
    rotate: '7deg',
  },
  {
    word: 'ἀρχή',
    top: '72%',
    left: '80%',
    size: '3.6rem',
    duration: '38s',
    delay: '-21s',
    rotate: '-7deg',
  },
]


export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="baroque-frame" aria-hidden="true">
          <span className="baroque-corner baroque-corner--tl">❦</span>
          <span className="baroque-corner baroque-corner--tr">❦</span>
          <span className="baroque-corner baroque-corner--bl">❦</span>
          <span className="baroque-corner baroque-corner--br">❦</span>

          <span className="baroque-side baroque-side--left">✦</span>
          <span className="baroque-side baroque-side--right">✦</span>
        </div>

        <div className="dust-field" aria-hidden="true">
          {dustParticles.map((particle, index) => (
            <span
              key={`dust-${index}`}
              className="dust-mote"
              style={{
                '--dust-left': particle.left,
                '--dust-top': particle.top,
                '--dust-size': particle.size,
                '--dust-duration': particle.duration,
                '--dust-delay': particle.delay,
                '--dust-opacity': particle.opacity,
              }}
            />
          ))}
        </div>

        <div className="greek-constellation" aria-hidden="true">
          {greekConstellation.map((item) => (
            <span
              key={item.word}
              className="greek-ghost"
              style={{
                '--ghost-top': item.top,
                '--ghost-left': item.left,
                '--ghost-size': item.size,
                '--ghost-duration': item.duration,
                '--ghost-delay': item.delay,
                '--ghost-rotate': item.rotate,
              }}
            >
              {item.word}
            </span>
          ))}
        </div>
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

          <div className="phi-sanctum" aria-hidden="true">
            <span className="phi-flourish phi-flourish--left">☙</span>

            <div className="phi-mark">
              Φ
            </div>

            <span className="phi-flourish phi-flourish--right">❧</span>
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
