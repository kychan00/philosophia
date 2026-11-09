import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import NietzscheTruthSystem2D from '../components/nietzsche/NietzscheTruthSystem2D'
import {
  nietzscheStudySchema,
  nietzscheStudySource,
  nietzscheStudyStations,
} from '../data/nietzscheTruthSystem'
import './NietzscheTruthTask.css'

const QUESTIONS = [
  '¿Qué quiere decir Nietzsche al problematizar el valor de la verdad, y no sólo las condiciones para alcanzarla?',
  '¿Cómo transforma el ensayo de 1873 la relación entre lenguaje, concepto y realidad?',
  '¿Qué papel cumple el ejemplo de la “hoja” en la crítica de la formación conceptual?',
  '¿Por qué los §§16–22 de Más allá del bien y del mal afectan problemas ontológicos como sujeto, voluntad y causalidad?',
  '¿En qué sentido la crítica del conocimiento puede convertirse en crítica de la metafísica?',
  '¿Qué implica que sujeto y objeto aparezcan como esferas distintas mediadas por una traducción estética?',
  '¿Por qué espacio, tiempo, sucesión y número aparecen al final del tramo como formas que nosotros aportamos?',
]

export default function NietzscheTruthTask() {
  return (
    <main className="nietzsche-task">
      <nav className="nietzsche-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="nietzsche-brand">Φ · PHILOSOPHIA</Link>
        <Link to="/tareas">Calendario ↗</Link>
      </nav>

      <header className="nietzsche-hero">
        <div className="nietzsche-hero-copy">
          <p className="nietzsche-kicker">ARCHIVUM ONTOLOGICUM · LECTURA · 09 XI 2026</p>
          <h1>Nietzsche: de la <em>verdad</em> al ser</h1>
          <p className="nietzsche-lead">Una ruta para entrar a Nietzsche desde el problema del conocimiento: pacto, lenguaje, metáfora, concepto y verdad; después, sujeto, ley natural y las formas con las que ordenamos lo real.</p>
          <div className="nietzsche-actions"><a href="#ruta">Comenzar ruta ↓</a><a href="#lectura-21-33">Páginas 21–33 ↓</a><a href="#bibliografia">Bibliografía ↓</a></div>
        </div>
        <aside className="nietzsche-hero-card">
          <span>PROBLEMA DE LA SESIÓN</span><strong>gnoseología ↔ ontología</strong>
          <p>La página distingue consigna docente, texto primario y reconstrucción pedagógica. Ninguna relación editorial se presenta como cita de Nietzsche.</p>
        </aside>
      </header>

      <section className="nietzsche-assignment" aria-labelledby="consigna-title">
        <div><span>01 · CONSIGNA VERIFICADA</span><h2 id="consigna-title">Lo que pidió el profesor</h2></div>
        <div className="nietzsche-assignment-copy">
          <p>{nietzscheStudySource.assignment}</p>
          <div className="nietzsche-options">
            <article><span>OPCIÓN A</span><strong>{nietzscheStudySource.optionA}</strong></article>
            <article><span>OPCIÓN B</span><strong>{nietzscheStudySource.optionB}</strong></article>
          </div>
          <p className="nietzsche-boundary">{nietzscheStudySource.boundary}</p>
        </div>
      </section>

      <section id="ruta" className="nietzsche-route">
        <div className="nietzsche-section-head"><span>02 · RUTA RECOMENDADA · PHILOSOPHIA</span><h2>Primero el mecanismo; después la crítica madura</h2></div>
        <div className="nietzsche-route-grid">
          <article><b>1</b><span>ENTRADA</span><h3>Sobre verdad y mentira</h3><p>Permite aislar primero el problema gnoseológico: qué hace el lenguaje, cómo nace el concepto y por qué una convención puede aparecer después como verdad natural.</p></article>
          <div className="nietzsche-route-arrow" aria-hidden="true">→</div>
          <article><b>2</b><span>DESPLAZAMIENTO</span><h3>Más allá del bien y del mal</h3><p>El prólogo y la Primera Parte llevan la sospecha hacia la filosofía madura: voluntad de verdad, prejuicios metafísicos, sujeto, voluntad, causalidad y “leyes” de la naturaleza.</p></article>
        </div>
        <p className="nietzsche-editorial-note">Esta secuencia es una recomendación de estudio de PHILOSOPHIA. El correo del profesor presenta las dos lecturas como alternativas.</p>
      </section>

      <section className="nietzsche-axes">
        <div className="nietzsche-section-head"><span>03 · DOS EJES PARA LLEGAR A CLASE</span><h2>La pregunta cambia de conocer a ser</h2></div>
        <div className="nietzsche-axis-grid">
          <article><span>GNOSEOLOGÍA</span><h3>¿Cómo se forma lo que llamamos verdad?</h3><ul><li>intelecto y utilidad vital;</li><li>lenguaje como mediación;</li><li>concepto como igualación de casos diferentes;</li><li>convención, estabilización y olvido;</li><li>valor de la voluntad de verdad.</li></ul></article>
          <article><span>ONTOLOGÍA</span><h3>¿Qué derecho tenemos a convertir esas formas en estructura del ser?</h3><ul><li>oposiciones metafísicas;</li><li>sujeto y “yo pienso”;</li><li>simplicidad de la voluntad;</li><li>causa y efecto;</li><li>ley natural e interpretación.</li></ul></article>
        </div>
      </section>

      <section className="nietzsche-system" aria-labelledby="system-title">
        <div className="nietzsche-section-head"><span>04 · ESQUEMA 2D · RECONSTRUCCIÓN DE ESTUDIO</span><h2 id="system-title">Del lenguaje a la crítica de la metafísica</h2><p>El esquema expresa una ruta pedagógica entre los dos textos. Las relaciones se rotulan como tránsito de estudio, no como una secuencia literal formulada por Nietzsche.</p></div>
        <div className="nietzsche-schema-wrap"><AnimatedConceptSchema schema={nietzscheStudySchema} /></div>
      </section>


      <NietzscheTruthSystem2D />

      <section className="nietzsche-stations">
        <div className="nietzsche-section-head"><span>06 · OCHO ESTACIONES</span><h2>Qué debe poder explicar mañana</h2></div>
        <div className="nietzsche-station-grid">
          {nietzscheStudyStations.map((station,index)=>(
            <article key={station.id}>
              <div className="nietzsche-station-meta"><span>{station.id}</span><b>{station.layer}</b></div>
              <h3>{station.title}</h3><p>{station.short}</p><small>{station.source}</small>
              <strong className="nietzsche-question">{station.question}</strong>
              <span className="nietzsche-station-number">{String(index+1).padStart(2,'0')}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="nietzsche-questions">
        <div className="nietzsche-section-head"><span>07 · REPASO ORAL</span><h2>Cinco preguntas para entrar a la discusión</h2></div>
        <ol>{QUESTIONS.map((question)=><li key={question}>{question}</li>)}</ol>
        <p>Preguntas elaboradas por PHILOSOPHIA para estudio; no son preguntas dictadas por el profesor.</p>
      </section>

      <section id="bibliografia" className="nietzsche-bibliography">
        <div className="nietzsche-section-head"><span>08 · BIBLIOGRAFÍA DE LA TAREA</span><h2>Ediciones de trabajo verificadas</h2></div>
        <div className="nietzsche-bib-grid">
          <article><span>LECTURA A</span><h3>Más allá del bien y del mal</h3><p>Nietzsche, F. (2005). <em>Más allá del bien y del mal: Preludio de una filosofía del futuro</em> (A. Sánchez Pascual, Trad.). Alianza Editorial. (Obra original publicada en 1886).</p><small>Edición revisada en Biblioteca de autor: 1997; séptima reimpresión: 2005. Tramo asignado: prólogo + Primera Parte.</small></article>
          <article>
            <span>LECTURA B · EDICIÓN PREFERIDA</span>
            <h3>Sobre verdad y mentira en sentido extramoral</h3>
            <p>Nietzsche, F. (2012). <em>Sobre verdad y mentira en sentido extramoral y otros fragmentos de filosofía del conocimiento</em>. Tecnos. (2.ª ed.; M. Garrido, ed. prep.).</p>
            <small>ISBN 978-84-309-5485-8 · 120 pp. El volumen reúne el ensayo, fragmentos paralelos de Nietzsche sobre el problema de la verdad y el estudio de Hans Vaihinger. La tarea del profesor se limita al ensayo de Nietzsche.</small>
            <p className="nietzsche-bib-links">
              <a href="https://archive.org/details/nietzsche-f.-sobre-verdad-y-mentira-en-sentido-extramoral-y-otros-fragmentos-d/page/12/mode/2up" target="_blank" rel="noreferrer">Consultar ejemplar en Internet Archive ↗</a>
              <a href="https://www.tecnos.es/libro/los-esenciales-de-la-filosofia/sobre-verdad-y-mentira-en-sentido-extramoral-y-otros-fragmentos-de-filosofia-del-conocimiento-friedrich-nietzsche-9788430954858/" target="_blank" rel="noreferrer">Ficha editorial Tecnos ↗</a>
            </p>
          </article>
        </div>
        <p className="nietzsche-library-policy">La Biblioteca PHILOSOPHIA registra metadatos, procedencia y tramo de lectura. La copia Tecnos 1996 recibida para el curso se conserva como soporte previo; para la consulta pública se prefiere la edición Tecnos 2012 enlazada externamente. No se aloja ninguna copia del libro en PHILOSOPHIA.</p>
      </section>

      <footer className="nietzsche-footer"><Link to="/semestre/5/ontologia-ii">← Ontología II</Link><span>verdad · lenguaje · interpretación · ser</span><Link to="/biblioteca">Biblioteca →</Link></footer>
    </main>
  )
}
