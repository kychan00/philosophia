import { useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './MarxCritiqueHegelStudy.css'

const movements = [
  { id: 'problem', code: 'I', title: 'La relación con Hegel', thesis: 'Marx no parte de una negación externa de Hegel: pregunta qué debe conservarse de la dialéctica y qué debe criticarse en su forma idealista.', source: 'pp. 182–185' },
  { id: 'positive', code: 'II', title: 'El momento positivo', thesis: 'Marx reconoce en la Fenomenología la negatividad como principio motor, la autogeneración como proceso y el papel del trabajo en la formación del hombre objetivo.', source: 'pp. 188–190' },
  { id: 'abstraction', code: 'III', title: 'El límite idealista', thesis: 'La crítica aparece cuando el hombre real queda reducido a autoconciencia y el mundo objetivo a momentos del pensamiento abstracto.', source: 'pp. 188–193' },
  { id: 'objective', code: 'IV', title: 'Ser natural y objetivo', thesis: 'Frente al sujeto abstracto, Marx insiste en un ser corpóreo, sensible, activo y necesitado de objetos reales exteriores para desplegar sus fuerzas.', source: 'pp. 194–199' },
  { id: 'supersession', code: 'V', title: 'La superación abstracta', thesis: 'Una transformación puramente conceptual puede declarar superado un objeto y, sin embargo, dejar intacta su existencia efectiva.', source: 'pp. 200–203' },
  { id: 'material', code: 'VI', title: 'Realidad humana efectiva', thesis: 'La apropiación y superación de la enajenación deben concernir a la vida objetiva, sensible y social, no sólo al movimiento de la conciencia.', source: 'pp. 200–208' },
]

const atlasSchema = {
  layout: 'flow',
  direction: 'vertical',
  flowGap: 54,
  minHeight: 1060,
  fitPadding: 58,
  sizeHint: 'tall',
  nodes: [
    { id: 'hegel', label: 'Hegel', caption: 'negatividad · proceso · trabajo', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'achievement', label: 'momento positivo', caption: 'autogeneración · objetivación', shapeRole: 'structure' },
    { id: 'limit', label: 'límite idealista', caption: 'hombre = autoconciencia', shapeRole: 'mediation' },
    { id: 'objectivity', label: 'objetividad', caption: 'cuerpo · naturaleza · objetos reales', shapeRole: 'concept' },
    { id: 'alienation', label: 'enajenación', caption: 'forma histórica de separación', shapeRole: 'structure' },
    { id: 'supersession', label: 'superación efectiva', caption: 'no sólo en el pensamiento', shapeRole: 'mediation' },
    { id: 'labor', label: 'trabajo', caption: 'actividad objetiva y social', shapeRole: 'concept' },
    { id: 'reality', label: 'realidad social', caption: 'vida humana sensible e histórica', shapeRole: 'result', tone: 'accent' },
  ],
  edges: [
    { from: 'hegel', to: 'achievement', label: 'Marx conserva', relationKind: 'derives' },
    { from: 'achievement', to: 'limit', label: 'pero critica', relationKind: 'derives' },
    { from: 'limit', to: 'objectivity', label: 'desplaza hacia', relationKind: 'derives' },
    { from: 'objectivity', to: 'alienation', label: 'permite distinguir', relationKind: 'derives' },
    { from: 'alienation', to: 'supersession', label: 'exige', relationKind: 'derives' },
    { from: 'supersession', to: 'labor', label: 'se realiza mediante', relationKind: 'derives' },
    { from: 'labor', to: 'reality', label: 'arraiga en', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .28, edgeDuration: .3 },
}

export default function MarxCritiqueHegelStudy() {
  const [activeId, setActiveId] = useState('positive')
  const active = movements.find((item) => item.id === activeId) || movements[1]
  const portrait = `${import.meta.env.BASE_URL}images/ontologia/open/marx/marx-mayall-1875.png`

  return (
    <main className="oa-page oaf-page marx-hegel-page">
      <div className="oa-backdrop" aria-hidden="true" />
      <div className="oa-brochure oaf-brochure marx-hegel-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>MARX · UMBRAL V</span>
        </nav>

        <header className="oa-cover oaf-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · studium IV · critica dialecticae</span>
            <h1>Marx<em>crítica de la dialéctica hegeliana</em></h1>
            <p className="oa-subtitle">labor · objectivatio · alienatio · natura · realitas</p>
            <p className="oaf-lead">
              Dossier programático construido desde la transcripción completa de
              las pp. 182–208 de los <em>Manuscritos económico-filosóficos de 1844</em>.
              No registra una clase nueva: documenta el siguiente umbral oficial
              de Ontología II desde la fuente ya conservada en el vault.
            </p>
            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>
                ¿Qué puede conservar Marx de la dialéctica de Hegel cuando rechaza
                que el hombre real y el mundo objetivo queden reducidos al movimiento
                de la autoconciencia?
              </strong>
            </div>
            <div className="marx-hegel-axis">
              <span>negatividad</span><b>→</b><span>trabajo</span><b>→</b>
              <span>objetivación</span><b>≠</b><span>enajenación</span><b>→</b>
              <span>realidad social</span>
            </div>
          </div>

          <figure className="oa-cover-object">
            <div className="oa-cover-frame">
              <span className="oa-tape oa-tape-a" aria-hidden="true" />
              <span className="oa-tape oa-tape-b" aria-hidden="true" />
              <img src={portrait} alt="Retrato fotográfico de Karl Marx por John Jabez Edwin Mayall, 1875" />
            </div>
            <figcaption>
              <span>IMAGO XXVI · CAROLUS MARX</span>
              <strong>Karl Marx</strong>
              <small>John Jabez Edwin Mayall · 1875 · Städel Museum.</small>
              <small className="oa-image-rights">Dominio público</small>
              <a className="oa-image-source"
                 href="https://commons.wikimedia.org/wiki/File:Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored_(cropped).png"
                 target="_blank" rel="noreferrer">fuente de imagen ↗</a>
            </figcaption>
          </figure>
        </header>

        <section className="marx-hegel-documentary">
          <div><small>DOCUMENTUM</small><h2>Fuente y criterio</h2></div>
          <div>
            <p>
              <strong>Fuente de trabajo:</strong> Karl Marx,
              <em> Manuscritos: economía y filosofía</em>, traducción,
              introducción y notas de Francisco Rubio Llorente.
            </p>
            <p>
              El vault conserva literalmente la sección
              <strong> “Crítica de la dialéctica hegeliana y de la filosofía de Hegel en general”</strong>,
              pp. 182–208. Este dossier es una capa de estudio separada:
              no modifica ni sustituye esas transcripciones.
            </p>
          </div>
        </section>

        <section className="oaf-prologue">
          <div className="oaf-prologue-copy">
            <small>INTRODUCTIO</small>
            <h2>Crítica inmanente, no simple rechazo</h2>
            <div className="oaf-questions">
              <p>Marx reconoce un descubrimiento real en la negatividad hegeliana.</p>
              <p>Rechaza que la objetividad se reduzca a objeto de autoconciencia.</p>
              <p>Devuelve la dialéctica a la vida sensible, natural y social.</p>
            </div>
            <p>
              El interés ontológico está en el cambio del sujeto del proceso:
              del pensamiento que se exterioriza y retorna a sí, al ser humano
              corpóreo que produce, necesita objetos, trabaja y puede quedar
              enajenado de su propia actividad y de sus productos.
            </p>
          </div>
          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Conceptos de control</h2>
            <div>
              <article><span>Latín</span><strong>objectivatio</strong><p>Exteriorización objetiva de fuerzas humanas; no equivale por sí sola a enajenación.</p></article>
              <article><span>Latín</span><strong>alienatio</strong><p>Separación histórica en la que lo producido se enfrenta al productor como algo extraño.</p></article>
              <article><span>Latín</span><strong>labor</strong><p>Actividad objetiva mediante la cual el ser humano transforma el mundo y se forma.</p></article>
              <article><span>Latín</span><strong>natura</strong><p>Exterioridad sensible real, no mero momento abstracto del pensamiento.</p></article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas marx-hegel-atlas">
          <div className="oa-wine-title"><span>SCHEMA · ATLAS</span><h2>atlas</h2></div>
          <p>El esquema muestra la transformación del problema: Marx conserva el movimiento, pero disputa su sujeto y el estatuto de la objetividad.</p>
          <div className="oa-schema-card"><AnimatedConceptSchema schema={atlasSchema} /></div>
        </section>

        <section className="marx-hegel-lab">
          <header>
            <small>COLLECTIO · VI MOTUS</small>
            <h2>Seis movimientos de la crítica</h2>
            <p>Seleccione un momento para seguir la reconstrucción sin reducir a Marx a la fórmula simplista de “poner a Hegel de cabeza”.</p>
          </header>
          <div className="marx-hegel-lab-grid">
            <div className="marx-hegel-tabs">
              {movements.map((item) => (
                <button key={item.id} type="button" className={activeId === item.id ? 'active' : ''} onClick={() => setActiveId(item.id)}>
                  <span>{item.code}</span><div><strong>{item.title}</strong><small>{item.source}</small></div>
                </button>
              ))}
            </div>
            <article className="marx-hegel-card">
              <span>MOTUS {active.code}</span><h3>{active.title}</h3><small>{active.source}</small><p>{active.thesis}</p>
            </article>
          </div>
        </section>

        <section className="marx-hegel-positive">
          <div><small>HEREDITAS</small><h2>Lo que Marx reconoce en Hegel</h2></div>
          <div className="marx-hegel-positive-grid">
            <article><span>01</span><strong>Proceso</strong><p>El ser humano no se entiende como esencia inmóvil, sino como resultado de una autogeneración histórica.</p></article>
            <article><span>02</span><strong>Negatividad</strong><p>La negación funciona como principio motor y generador, no sólo como ausencia exterior.</p></article>
            <article><span>03</span><strong>Trabajo</strong><p>Hegel reconoce el trabajo como momento decisivo de la formación y objetivación humana.</p></article>
            <article><span>04</span><strong>Objetividad</strong><p>La exteriorización de fuerzas en objetos pertenece al proceso de realización humana.</p></article>
          </div>
        </section>

        <section className="marx-hegel-cut">
          <div>
            <small>DISCRIMEN</small><h2>Objetivación no es enajenación</h2>
            <p>Esta distinción evita uno de los errores más graves al leer los <em>Manuscritos</em>: producir objetos y exteriorizar capacidades no es ya, por definición, estar enajenado.</p>
          </div>
          <div className="marx-hegel-cut-grid">
            <article><span>OBJECTIVATIO</span><strong>Exteriorización necesaria</strong><p>Un ser objetivo actúa objetivamente: realiza sus fuerzas en objetos y necesita una naturaleza exterior para vivir y actuar.</p></article>
            <article><span>ALIENATIO</span><strong>Forma histórica de separación</strong><p>La enajenación aparece cuando la actividad y sus productos se enfrentan al productor como poderes extraños o separados.</p></article>
          </div>
        </section>

        <section className="marx-hegel-objective">
          <div><small>REALITAS SENSIBILIS</small><h2>El ser humano como ser natural y objetivo</h2></div>
          <div className="marx-hegel-objective-chain">
            <article><span>01</span><strong>corpóreo</strong><p>no conciencia desencarnada</p></article><b>→</b>
            <article><span>02</span><strong>sensible</strong><p>afectado por necesidades reales</p></article><b>→</b>
            <article><span>03</span><strong>objetivo</strong><p>requiere objetos fuera de sí</p></article><b>→</b>
            <article className="active"><span>04</span><strong>activo</strong><p>exterioriza fuerzas mediante trabajo</p></article>
          </div>
        </section>

        <section className="marx-hegel-abstract">
          <div><small>CRITICA</small><h2>El problema de la superación puramente pensada</h2></div>
          <div className="marx-hegel-abstract-grid">
            <article><span>EN EL PENSAMIENTO</span><strong>el objeto aparece superado</strong><p>La categoría puede ser negada, conservada o elevada dentro del sistema conceptual.</p></article>
            <b>≠</b>
            <article><span>EN LA REALIDAD</span><strong>el objeto puede permanecer intacto</strong><p>Religión, Estado, propiedad o naturaleza no cambian por el solo hecho de haber sido filosóficamente “superados”.</p></article>
          </div>
        </section>

        <section className="marx-hegel-related">
          <div>
            <small>SYSTEMATA RELATA</small><h2>Dos Marx que no conviene mezclar</h2>
            <p>Este dossier pertenece al Marx de los <em>Manuscritos de 1844</em> y su crítica de Hegel. El sistema 2D de mercancía y valor trabaja <em>El capital</em> y permanece intacto como pieza independiente.</p>
          </div>
          <div className="marx-hegel-related-actions">
            <Link to="/estudios/ontologia-ii/hegel-ciencia-logica-ser-nada-devenir"><strong>Hegel · ser, nada y devenir</strong><span>umbral anterior de Ontología II</span><b>↗</b></Link>
            <Link to="/tareas/teoria-critica/marx-capital-fetichismo-parte-i"><strong>Marx · mercancía y valor · sistema 2D</strong><span>material relacionado · sin modificaciones</span><b>↗</b></Link>
          </div>
        </section>

        <section className="marx-hegel-warning">
          <div><small>REGULA LECTIONIS</small><h2>Evitar tres reducciones</h2></div>
          <ul>
            <li>no decir que Marx simplemente “rechaza” a Hegel;</li>
            <li>no identificar objetivación y enajenación;</li>
            <li>no reducir la crítica a la fórmula “Hegel puesto de cabeza”.</li>
          </ul>
        </section>

        <section className="marx-hegel-next">
          <div>
            <small>UMBRAL SIGUIENTE</small><h2>Lo siguiente en el programa</h2>
            <p>Después de Marx, el programa oficial de Ontología II continúa con <strong>positivismo</strong>. Ese bloque deberá documentarse como umbral programático mientras no exista una clase fechada en el archivo.</p>
          </div>
          <Link to="/semestre/5/ontologia-ii">Volver al mapa del curso ↗</Link>
        </section>

        <footer className="oa-footer">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <span>☙ labor · objectivatio · alienatio · realitas ❧</span>
          <span>MARX · UMBRAL V</span>
        </footer>
      </div>
    </main>
  )
}
