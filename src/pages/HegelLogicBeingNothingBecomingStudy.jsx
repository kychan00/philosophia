import { useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './HegelLogicBeingNothingBecomingStudy.css'

const moments = [
  {
    id: 'sein',
    code: 'A',
    title: 'Ser puro',
    latin: 'esse purum',
    source: 'Libro I · Doctrina del ser · cap. I · A',
    thesis:
      'El comienzo debe carecer de toda determinación añadida. Por eso el ser puro es pura inmediatez indeterminada.',
    consequence:
      'Al no contener ninguna diferencia ni contenido por el cual distinguirse, su absoluta indeterminación no ofrece nada determinado que pensar.',
  },
  {
    id: 'nichts',
    code: 'B',
    title: 'Nada pura',
    latin: 'nihil purum',
    source: 'Libro I · Doctrina del ser · cap. I · B',
    thesis:
      'La nada pura es también ausencia completa de determinación y contenido.',
    consequence:
      'Ser puro y nada pura coinciden precisamente en su falta absoluta de determinación, aunque el movimiento exige conservar también su diferencia.',
  },
  {
    id: 'werden',
    code: 'C',
    title: 'Devenir',
    latin: 'fieri',
    source: 'Libro I · Doctrina del ser · cap. I · C',
    thesis:
      'La verdad de ser y nada no es una identidad inmóvil, sino el tránsito inmediato de cada uno a su opuesto.',
    consequence:
      'Ese movimiento es devenir: nacer y perecer son sus dos direcciones.',
  },
  {
    id: 'dasein',
    code: 'D',
    title: 'Ser determinado',
    latin: 'Dasein',
    source: 'Libro I · Doctrina del ser · cap. II',
    thesis:
      'El devenir no permanece como oscilación vacía: su resultado es una unidad determinada de ser y nada.',
    consequence:
      'Aparece el Dasein, ser determinado o existencia, y con él la cualidad, la negación y la relación con otro.',
  },
]

const atlasSchema = {
  layout: 'flow',
  direction: 'vertical',
  flowGap: 58,
  minHeight: 900,
  fitPadding: 58,
  sizeHint: 'tall',
  nodes: [
    { id: 'being', label: 'ser puro', caption: 'inmediatez · indeterminación', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'nothing', label: 'nada pura', caption: 'ausencia de determinación', shapeRole: 'concept' },
    { id: 'becoming', label: 'devenir', caption: 'tránsito · nacer · perecer', shapeRole: 'mediation' },
    { id: 'sublation', label: 'eliminación / conservación', caption: 'los momentos no quedan simplemente anulados', shapeRole: 'structure' },
    { id: 'dasein', label: 'Dasein', caption: 'ser determinado · cualidad', shapeRole: 'result', tone: 'accent' },
  ],
  edges: [
    { from: 'being', to: 'nothing', label: 'en su indeterminación pasa a', relationKind: 'derives' },
    { from: 'nothing', to: 'becoming', label: 'junto con el ser constituye', relationKind: 'derives' },
    { from: 'becoming', to: 'sublation', label: 'se estabiliza mediante', relationKind: 'derives' },
    { from: 'sublation', to: 'dasein', label: 'da lugar a', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .3, edgeDuration: .32 },
}

export default function HegelLogicBeingNothingBecomingStudy() {
  const [activeId, setActiveId] = useState('werden')
  const active = moments.find((item) => item.id === activeId) || moments[2]
  const cover = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Wissenschaft_der_Logik.jpg'

  return (
    <main className="oa-page oaf-page hegel-logic-page">
      <div className="oa-backdrop" aria-hidden="true" />

      <div className="oa-brochure oaf-brochure hegel-logic-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>HEGEL · UMBRAL IV · II</span>
        </nav>

        <header className="oa-cover oaf-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · studium III · doctrina de ente</span>

            <h1>
              Ciencia de la lógica
              <em>ser puro · nada pura · devenir</em>
            </h1>

            <p className="oa-subtitle">
              esse · nihil · fieri · Dasein
            </p>

            <p className="oaf-lead">
              El programa de Ontología II anuncia este movimiento como el núcleo
              hegeliano posterior a Kant. Aquí se documenta desde la edición de
              Rodolfo Mondolfo conservada en la biblioteca del proyecto, sin
              presentarlo como una clase que todavía no está registrada.
            </p>

            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>
                ¿Cómo puede el comienzo absolutamente indeterminado producir desde
                sí una primera determinación sin recibirla desde fuera?
              </strong>
            </div>

            <div className="hegel-logic-axis">
              <span>ser puro</span><b>⇄</b>
              <span>nada pura</span><b>→</b>
              <span>devenir</span><b>→</b>
              <span>Dasein</span>
            </div>
          </div>

          <figure className="oa-cover-object">
            <div className="oa-cover-frame">
              <span className="oa-tape oa-tape-a" aria-hidden="true" />
              <span className="oa-tape oa-tape-b" aria-hidden="true" />
              <img src={cover} alt="Portada histórica de Wissenschaft der Logik de Hegel" />
            </div>
            <figcaption>
              <span>IMAGO XXV · WISSENSCHAFT DER LOGIK</span>
              <strong>Ciencia de la lógica</strong>
              <small>G. W. F. Hegel · pieza histórica fechada en 1813.</small>
              <small className="oa-image-rights">Dominio público</small>
              <a
                className="oa-image-source"
                href="https://commons.wikimedia.org/wiki/File:Wissenschaft_der_Logik.jpg"
                target="_blank"
                rel="noreferrer"
              >
                fuente de imagen ↗
              </a>
            </figcaption>
          </figure>
        </header>

        <section className="hegel-logic-documentary">
          <div>
            <small>DOCUMENTUM</small>
            <h2>Fuente y frontera documental</h2>
          </div>

          <div>
            <p>
              <strong>Fuente primaria de trabajo:</strong> G. W. F. Hegel,
              <em> Ciencia de la lógica</em>, traducción de Rodolfo Mondolfo.
              El dossier se concentra en el inicio del Libro I, la Doctrina del ser:
              capítulo primero —ser, nada y devenir— y el paso inmediato al
              capítulo segundo, el ser determinado.
            </p>

            <p>
              El programa del curso sí marca <strong>ser puro · nada pura · devenir</strong>
              como el bloque hegeliano de Ontología II. Lo que todavía no existe
              en el archivo es una clase fechada en la que el profesor haya
              desarrollado este tramo.
            </p>
          </div>
        </section>

        <section className="oaf-prologue">
          <div className="oaf-prologue-copy">
            <small>INTRODUCTIO</small>
            <h2>El comienzo no puede presuponer una determinación</h2>

            <div className="oaf-questions">
              <p>Ser puro: inmediata indeterminación.</p>
              <p>Nada pura: ausencia igualmente indeterminada.</p>
              <p>Devenir: verdad móvil de ambos momentos.</p>
            </div>

            <p>
              El movimiento no parte de dos cosas previamente constituidas.
              Ser y nada son abstracciones absolutamente inmediatas cuya verdad
              aparece sólo en el tránsito de una a otra.
            </p>
          </div>

          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Conceptos de control</h2>

            <div>
              <article><span>Latín</span><strong>esse</strong><p>Ser; aquí, ser puro sin determinación añadida.</p></article>
              <article><span>Latín</span><strong>nihil</strong><p>Nada; ausencia igualmente pura de contenido y determinación.</p></article>
              <article><span>Latín</span><strong>fieri</strong><p>Devenir; movimiento de desaparición inmediata de ser en nada y nada en ser.</p></article>
              <article><span>Alemán</span><strong>Dasein</strong><p>Ser determinado o existencia: resultado inmediato del devenir.</p></article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas hegel-logic-atlas">
          <div className="oa-wine-title"><span>SCHEMA · ATLAS</span><h2>atlas</h2></div>
          <p>
            El esquema representa un tránsito conceptual, no una fórmula externa
            de tres pasos. La determinación surge del movimiento interno del comienzo.
          </p>
          <div className="oa-schema-card"><AnimatedConceptSchema schema={atlasSchema} /></div>
        </section>

        <section className="hegel-logic-lab">
          <header>
            <small>COLLECTIO · QUATTUOR MOMENTA</small>
            <h2>El movimiento textual</h2>
            <p>
              Seleccione un momento para ver qué afirma y qué problema obliga
              a pasar al siguiente.
            </p>
          </header>

          <div className="hegel-logic-lab-grid">
            <div className="hegel-logic-tabs">
              {moments.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={activeId === item.id ? 'active' : ''}
                  onClick={() => setActiveId(item.id)}
                >
                  <span>{item.code}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.latin}</small>
                  </div>
                </button>
              ))}
            </div>

            <article className="hegel-logic-card">
              <span>{active.code} · {active.latin}</span>
              <h3>{active.title}</h3>
              <small>{active.source}</small>

              <div className="hegel-logic-card-section">
                <b>Determinación</b>
                <p>{active.thesis}</p>
              </div>

              <div className="hegel-logic-card-section">
                <b>Necesidad del tránsito</b>
                <p>{active.consequence}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="hegel-logic-distinction">
          <div>
            <small>DISTINCTIONES</small>
            <h2>“Ser = nada” no significa que dos cosas sean idénticas</h2>
          </div>

          <div className="hegel-logic-distinction-grid">
            <article>
              <span>NO</span>
              <strong>Dos términos determinados comparados desde fuera</strong>
              <p>
                Si ser y nada tuvieran ya contenidos propios, dejarían de ser
                precisamente el ser puro y la nada pura del comienzo.
              </p>
            </article>

            <article>
              <span>SÍ</span>
              <strong>Indistinción en la pura indeterminación</strong>
              <p>
                Su coincidencia surge de que ninguno contiene todavía una
                determinación por la cual diferenciarse.
              </p>
            </article>

            <article>
              <span>VERDAD</span>
              <strong>Devenir</strong>
              <p>
                La verdad conserva a la vez diferencia e inseparabilidad:
                cada momento desaparece inmediatamente en el otro.
              </p>
            </article>
          </div>
        </section>

        <section className="hegel-logic-becoming">
          <div>
            <small>GENESIS</small>
            <h2>Nacer y perecer</h2>
            <p>
              Hegel distingue dos direcciones internas del devenir. No son procesos
              añadidos desde fuera, sino las dos maneras en que se articula el tránsito.
            </p>
          </div>

          <div className="hegel-logic-becoming-grid">
            <article>
              <span>ORIRI</span>
              <strong>nacer</strong>
              <div><b>nada</b><i>→</i><b>ser</b></div>
            </article>
            <article>
              <span>INTERIRE</span>
              <strong>perecer</strong>
              <div><b>ser</b><i>→</i><b>nada</b></div>
            </article>
          </div>
        </section>

        <section className="hegel-logic-dasein">
          <div>
            <small>CONSEQUENTIA</small>
            <h2>Del devenir al Dasein</h2>
          </div>

          <div className="hegel-logic-dasein-flow">
            <article><span>01</span><strong>devenir</strong><p>unidad móvil de ser y nada</p></article>
            <b>→</b>
            <article><span>02</span><strong>resultado</strong><p>la oscilación no permanece abstracta</p></article>
            <b>→</b>
            <article className="active"><span>03</span><strong>Dasein</strong><p>ser determinado · existencia</p></article>
            <b>→</b>
            <article><span>04</span><strong>cualidad</strong><p>determinación · negación · otro</p></article>
          </div>

          <p>
            Éste es el punto en que la lógica deja atrás el comienzo absolutamente
            indeterminado y entra en una esfera donde la determinación ya está puesta.
          </p>
        </section>

        <section className="hegel-logic-warning">
          <div>
            <small>REGULA LECTIONIS</small>
            <h2>No convertir el comienzo en una plantilla escolar</h2>
          </div>

          <ul>
            <li>no identificar ser con una “tesis” fija;</li>
            <li>no identificar nada con una “antítesis” añadida exteriormente;</li>
            <li>no tratar devenir como una “síntesis” aplicada mecánicamente;</li>
            <li>seguir el tránsito que el propio contenido exige;</li>
            <li>distinguir el resultado hegeliano de la explicación editorial de Mondolfo.</li>
          </ul>
        </section>

        <section className="hegel-logic-source">
          <div>
            <small>FONS PRIMARIUS</small>
            <h2>Ruta de lectura</h2>
          </div>

          <div>
            <article>
              <span>Libro I</span>
              <strong>La doctrina del ser</strong>
              <p>Comienzo de la lógica objetiva.</p>
            </article>
            <article>
              <span>Capítulo I</span>
              <strong>Ser · Nada · Devenir</strong>
              <p>Movimiento inicial que el dossier reconstruye.</p>
            </article>
            <article>
              <span>Capítulo II</span>
              <strong>Ser determinado / Dasein</strong>
              <p>Resultado inmediato del devenir y comienzo de la cualidad.</p>
            </article>
          </div>
        </section>

        <section className="hegel-next hegel-logic-next">
          <div>
            <small>UMBRAL SIGUIENTE</small>
            <h2>Lo próximo en el trayecto programático</h2>
            <p>
              Una vez documentado el comienzo hegeliano, el programa oficial continúa
              con <strong>Marx: crítica de la dialéctica idealista y realidad social</strong>.
              Ese paso deberá construirse como dossier programático mientras no exista
              una clase de Ontología II registrada sobre Marx.
            </p>
          </div>

          <div className="hegel-logic-next-actions">
            <Link to="/estudios/ontologia-ii/hegel-fenomenologia-prologo">
              Volver al Prólogo de Hegel ↗
            </Link>
            <Link to="/estudios/ontologia-ii/marx-critica-dialectica-hegeliana">
              Continuar con Marx ↗
            </Link>
          </div>
        </section>

        <footer className="oa-footer">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <span>☙ esse · nihil · fieri · Dasein ❧</span>
          <span>HEGEL · UMBRAL IV · II</span>
        </footer>
      </div>
    </main>
  )
}
