import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './HartmannThingInItselfTask.css'

const atlasSchema = {
  layout: 'flow',
  direction: 'vertical',
  flowGap: 52,
  minHeight: 980,
  fitPadding: 56,
  sizeHint: 'tall',
  nodes: [
    { id: 'kant', label: 'Kant', caption: 'fenómeno · cosa en sí · límite', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'reinhold', label: 'Reinhold', caption: 'sujeto · representación · objeto', shapeRole: 'structure' },
    { id: 'thing', label: 'cosa en sí', caption: 'incognoscible · afección · materia', shapeRole: 'concept' },
    { id: 'causality', label: 'causalidad', caption: '¿puede aplicarse fuera de la experiencia?', shapeRole: 'mediation' },
    { id: 'schulze', label: 'Schulze', caption: 'crítica a la fundamentación', shapeRole: 'structure' },
    { id: 'problem', label: 'problema heredado', caption: 'receptividad sin uso ilegítimo de categorías', shapeRole: 'mediation' },
    { id: 'idealism', label: 'idealismo alemán', caption: 'reacción poskantiana', shapeRole: 'result', tone: 'accent' },
  ],
  edges: [
    { from: 'kant', to: 'reinhold', label: 'es sistematizado por', relationKind: 'derives' },
    { from: 'reinhold', to: 'thing', label: 'mantiene', relationKind: 'derives' },
    { from: 'thing', to: 'causality', label: 'plantea', relationKind: 'derives' },
    { from: 'causality', to: 'schulze', label: 'es objetada por', relationKind: 'derives' },
    { from: 'schulze', to: 'problem', label: 'deja abierto', relationKind: 'derives' },
    { from: 'problem', to: 'idealism', label: 'impulsa', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .28, edgeDuration: .3 },
}

export default function HartmannThingInItselfTask() {
  const reinholdImage = `${import.meta.env.BASE_URL}images/ontologia/open/2026-09-30/reinhold-1825.jpg`
  const schulzeImage = `${import.meta.env.BASE_URL}images/ontologia/open/2026-09-30/schulze.jpg`

  return (
    <main className="oa-page oaf-page hartmann-task-page">
      <div className="oa-backdrop" aria-hidden="true" />

      <div className="oa-brochure oaf-brochure hartmann-task-brochure">
        <nav className="oa-nav">
          <Link to="/tareas">← Tareas</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>XXX · IX · MMXXVI</span>
        </nav>

        <header className="oa-cover oaf-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · lectio I · idealismus germanicus</span>

            <h1>
              Hartmann
              <em>el problema de la cosa en sí</em>
            </h1>

            <p className="oa-subtitle">
              res in se · repraesentatio · causalitas · idealismus
            </p>

            <p className="oaf-lead">
              Lectura de preparación para seguir la transformación del problema
              kantiano de la cosa en sí en el idealismo alemán: su recepción en
              Reinhold, la objeción escéptica de Schulze y la dificultad de explicar
              la receptividad sin aplicar ilegítimamente categorías más allá de la experiencia.
            </p>

            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>
                ¿Cómo explicar que la representación reciba una materia sin convertir
                la cosa en sí en una causa conocida fuera de los límites de la experiencia?
              </strong>
            </div>

            <div className="hartmann-meta">
              <div><span>Asignada</span><strong>23 sep 2026</strong></div>
              <div><span>Revisión</span><strong>30 sep 2026 · 12:55</strong></div>
              <div><span>Tipo</span><strong>Lectura / preparación</strong></div>
            </div>
          </div>

          <figure className="oa-cover-object">
            <div className="oa-cover-frame">
              <span className="oa-tape oa-tape-a" aria-hidden="true" />
              <span className="oa-tape oa-tape-b" aria-hidden="true" />
              <img src={reinholdImage} alt="Retrato de Karl Leonhard Reinhold, grabado publicado en 1825" />
            </div>
            <figcaption>
              <span>IMAGO XXIII · CAROLUS LEONHARD REINHOLD</span>
              <strong>Karl Leonhard Reinhold</strong>
              <small>C. Ermer según Peter Copmann · 1825.</small>
              <small className="oa-image-rights">Dominio público</small>
              <a
                className="oa-image-source"
                href="https://commons.wikimedia.org/wiki/File:Karl_Leonhard_Reinhold_(1757-1823).jpg"
                target="_blank"
                rel="noreferrer"
              >
                fuente de imagen ↗
              </a>
            </figcaption>
          </figure>
        </header>

        <section className="hartmann-assignment">
          <div>
            <small>MANDATUM</small>
            <h2>La consigna documentada</h2>
          </div>
          <div className="hartmann-assignment-copy">
            <p>
              Leer el tratamiento de Nicolai Hartmann sobre la <strong>cosa en sí kantiana</strong>
              y llevar claras dos cuestiones:
            </p>
            <ol>
              <li>cómo fue interpretada la cosa en sí;</li>
              <li>qué problemas filosóficos se derivaron de esa interpretación.</li>
            </ol>
            <aside>
              <strong>Precisión documental</strong>
              <p>
                La clase del 23 de septiembre no fijó páginas exactas. Esa ausencia se conserva:
                el rango que aparece abajo pertenece a la preparación posterior, no a la consigna oral registrada.
              </p>
            </aside>
          </div>
        </section>

        <section className="oaf-prologue">
          <div className="oaf-prologue-copy">
            <small>LECTIO RECUPERATA</small>
            <h2>Rango usado en la preparación</h2>
            <div className="hartmann-reading-range">
              <article><span>pp. 7–9</span><strong>Prólogo</strong></article>
              <article><span>pp. 11–17</span><strong>Introducción</strong></article>
              <article><span>pp. 19–30</span><strong>Reinhold</strong></article>
              <article><span>pp. 30–35</span><strong>Schulze</strong></article>
            </div>
            <p>
              Este rango corresponde al dossier de preparación trabajado después
              de recibir la tarea. No se presenta como paginación dictada por el profesor.
            </p>
          </div>

          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Conceptos de trabajo</h2>
            <div>
              <article><span>Latín</span><strong>res in se</strong><p>Cosa en sí; aquello considerado independientemente de nuestras condiciones de representación.</p></article>
              <article><span>Latín</span><strong>repraesentatio</strong><p>Representación; término clave en la sistematización de Reinhold.</p></article>
              <article><span>Latín</span><strong>causalitas</strong><p>Punto crítico: si puede hablarse de una afección causal más allá de la experiencia.</p></article>
              <article><span>Latín</span><strong>conditio possibilitatis</strong><p>Condición de posibilidad; distinta de afirmar una causa real conocida.</p></article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas hartmann-atlas">
          <div className="oa-wine-title"><span>SCHEMA · ATLAS</span><h2>atlas</h2></div>
          <p>
            El esquema reconstruye el problema que la lectura debe dejar claro:
            Kant → Reinhold → cosa en sí / afección → Schulze → problema poskantiano.
          </p>
          <div className="oa-schema-card"><AnimatedConceptSchema schema={atlasSchema} /></div>
        </section>

        <section className="hartmann-dossier">
          <header>
            <small>COLLECTIO</small>
            <h2>Sistematización recuperada</h2>
            <p>
              Se conserva como preparación para clase, no como sustituto del texto de Hartmann.
            </p>
          </header>

          <div className="hartmann-grid">
            <article>
              <span>I · REINHOLD</span>
              <h3>Fundamentar la representación</h3>
              <p>
                La reconstrucción trabajada presenta la representación mediante
                <strong> sujeto, representación y objeto</strong>. La cosa en sí se
                mantiene como aquello que no conocemos directamente, pero cuya
                referencia permite explicar que la representación no sea pura creación espontánea.
              </p>
            </article>

            <article>
              <span>II · AFECCIÓN</span>
              <h3>La materia de la representación</h3>
              <p>
                El problema aparece cuando se afirma que la cosa en sí <strong>afecta</strong>
                y aporta materia a la representación. La formulación parece necesitar
                una relación real entre aquello que está fuera del ámbito fenoménico y el sujeto.
              </p>
            </article>

            <article>
              <span>III · SCHULZE</span>
              <h3>La objeción escéptica</h3>
              <p>
                Schulze objeta que esa explicación parece usar la <strong>causalidad</strong>
                allí donde Kant había limitado la aplicación legítima de las categorías
                a la experiencia posible.
              </p>
            </article>

            <article>
              <span>IV · HARTMANN</span>
              <h3>Dónde recae la crítica</h3>
              <p>
                En la preparación previa distinguimos entre hablar de una
                <strong>causa real</strong> y hablar de una <strong>condición de posibilidad</strong>.
                La crítica de Schulze alcanza especialmente la forma en que Reinhold
                sistematiza la relación con la cosa en sí.
              </p>
            </article>
          </div>
        </section>

        <section className="hartmann-confrontation">
          <div className="hartmann-schulze-portrait">
            <img src={schulzeImage} alt="Retrato histórico de Gottlob Ernst Schulze" />
            <div>
              <span>CONTRALECTIO</span>
              <strong>Gottlob Ernst Schulze</strong>
              <small>Retrato histórico · dominio público.</small>
              <a
                href="https://commons.wikimedia.org/wiki/File:Gottlob_Ernst_Schulze.jpg"
                target="_blank"
                rel="noreferrer"
              >
                fuente de imagen ↗
              </a>
            </div>
          </div>

          <div className="hartmann-comparison">
            <small>DISTINCTIONES</small>
            <h2>Lo que conviene llevar claro a clase</h2>
            <div>
              <article>
                <span>Reinhold</span>
                <strong>La representación debe tener fundamento.</strong>
                <p>Sujeto, representación y objeto organizan la explicación.</p>
              </article>
              <article>
                <span>Schulze</span>
                <strong>No basta postular una afección externa.</strong>
                <p>La causalidad no puede trasladarse sin más fuera de la experiencia.</p>
              </article>
              <article>
                <span>Problema</span>
                <strong>¿Cómo explicar receptividad sin contradicción?</strong>
                <p>Éste es el punto que empuja la discusión hacia el idealismo poskantiano.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="hartmann-related">
          <div>
            <small>SYSTEMATA RELATA</small>
            <h2>Seguir el capítulo como sistema 2D</h2>
            <p>
              El dossier textual ampliado conserva ahora el capítulo I completo,
              pp. 19–65. El nuevo sistema organiza a Reinhold, Schulze, Maimon,
              Beck, Jacobi y Bardili sin sustituir la lectura del texto.
            </p>
          </div>
          <div className="hartmann-related-actions">
            <Link to="/tareas/ontologia-ii/hartmann-cosa-en-si/sistema">
              <strong>Kantianos y antikantianos · sistema 2D</strong>
              <span>capítulo I · Hartmann · pp. 19–65</span>
              <b>↗</b>
            </Link>
            <Link to="/tareas/ontologia-ii/kant-dialectica-trascendental">
              <strong>Dialéctica trascendental · sistema 2D</strong>
              <span>material kantiano relacionado</span>
              <b>↗</b>
            </Link>
            <Link to="/semestre/5/ontologia-ii/clase/23-septiembre">
              <strong>Clase del 23 de septiembre</strong>
              <span>origen documental de la tarea</span>
              <b>↗</b>
            </Link>
          </div>
        </section>

        <section className="oaf-documentum">
          <div><small>DOCUMENTUM</small><h2>Criterio documental</h2></div>
          <p>
            La página distingue entre la consigna registrada en clase y el rango
            empleado posteriormente para preparar la lectura. La sistematización
            recupera el trabajo ya realizado sobre Reinhold y Schulze sin atribuir
            al profesor páginas que no quedaron fijadas en la grabación.
          </p>
        </section>

        <footer className="oa-footer">
          <Link to="/tareas">← Tareas</Link>
          <span>☙ res in se · causalitas · idealismus ❧</span>
          <span>XXX · IX · MMXXVI</span>
        </footer>
      </div>
    </main>
  )
}
