import { useMemo, useState } from 'react'
import { Link } from 'react-router'

const problems = [
  {
    id: 'contingencia',
    number: '01',
    label: 'Contingencia',
    title: 'Contra la necesidad absoluta',
    thesis:
      'Leibniz quiere conservar un orden racional sin convertir el mundo existente en el único mundo lógicamente posible.',
    chain: ['Spinoza', 'necesidad', 'problema', 'posibilidad', 'mundos posibles'],
    note:
      'Que algo tenga una razón suficiente no significa que su contrario implique contradicción.',
  },
  {
    id: 'verdades',
    number: '02',
    label: 'Verdades',
    title: 'Razón y hecho',
    thesis:
      'Las verdades de razón son necesarias; las verdades de hecho son contingentes y su contrario sigue siendo posible.',
    chain: ['juicio', 'verdad', 'razón / hecho', 'necesidad / contingencia'],
    note:
      'La certeza del conocimiento divino no debe confundirse con necesidad lógica.',
  },
  {
    id: 'teodicea',
    number: '03',
    label: 'Teodicea',
    title: '¿Por qué existe el mal?',
    thesis:
      'El mejor mundo posible no es un mundo sin mal, sino el orden total que Dios elige entre múltiples posibilidades.',
    chain: ['mundos posibles', 'elección divina', 'mejor mundo', 'mal', 'libertad'],
    note:
      'Leibniz distingue mal metafísico, físico y moral para defender simultáneamente bondad divina y libertad humana.',
  },
  {
    id: 'fuerza',
    number: '04',
    label: 'Fuerza',
    title: 'Más allá de extensión y movimiento',
    thesis:
      'La materia y el movimiento describen el mecanismo, pero no agotan el fundamento metafísico de la actividad.',
    chain: ['mecanicismo', 'insuficiencia', 'fuerza', 'actividad interna', 'entelequia'],
    note:
      'Leibniz recupera forma, fuerza, finalidad y vocabulario aristotélico sin abandonar la ciencia mecánica.',
  },
  {
    id: 'monadas',
    number: '05',
    label: 'Mónadas',
    title: 'Átomos formales',
    thesis:
      'Las mónadas son sustancias simples, indivisibles y no materiales, dotadas de un principio interno de actividad.',
    chain: ['sustancia', 'concepto completo', 'mónada', 'desarrollo interno', 'perspectiva'],
    note:
      'No son partículas físicas: pertenecen al nivel metafísico que fundamenta los compuestos.',
  },
  {
    id: 'armonia',
    number: '06',
    label: 'Armonía',
    title: 'Coordinar sin ventanas',
    thesis:
      'Las mónadas no se modifican causalmente entre sí; Dios coordina desde el origen sus series internas de estados.',
    chain: ['sin ventanas', 'ley interna', 'Dios', 'sincronización', 'universo ordenado'],
    note:
      'La armonía preestablecida explica concordancia sin interacción causal directa.',
  },
  {
    id: 'libertad',
    number: '07',
    label: 'Libertad',
    title: 'Orden sin fatalismo',
    thesis:
      'Leibniz intenta conservar omnisciencia divina, armonía preestablecida y responsabilidad moral humana.',
    chain: ['razón', 'voluntad', 'elección', 'responsabilidad', 'mal moral'],
    note:
      'Un mundo con criaturas libres puede ser más perfecto que uno de comportamientos mecánicamente forzados.',
  },
]

const comparisons = [
  ['Naturaleza', 'mecanicismo', 'orden necesario', 'mecanismo + fundamento metafísico'],
  ['Causas finales', 'reducidas en física', 'rechazadas', 'recuperadas'],
  ['Orden del mundo', 'leyes mecánicas', 'necesario', 'posible y elegido'],
  ['Sustancia', 'res cogitans / extensa', 'una sustancia', 'pluralidad de sustancias simples'],
  ['Contingencia', 'problemática', 'prácticamente excluida', 'explícitamente recuperada'],
  ['Dios', 'creador', 'Deus sive Natura', 'creador y ordenador'],
  ['Mundo', 'creado', 'expresión necesaria', 'mejor entre mundos posibles'],
  ['Principio clave', 'mecanicismo', 'necesidad', 'razón suficiente'],
]

const finalChain = [
  'ARISTÓTELES',
  'DESCARTES',
  'SPINOZA',
  'CONTINGENCIA',
  'VERDADES',
  'RAZÓN SUFICIENTE',
  'MUNDOS POSIBLES',
  'TEODICEA',
  'FUERZA',
  'MÓNADAS',
  'ARMONÍA',
  'LIBERTAD',
]

export default function OntologiaClass26Aug() {
  const [activeId, setActiveId] = useState('contingencia')
  const [truth, setTruth] = useState('razon')
  const [world, setWorld] = useState('C')
  const [animate, setAnimate] = useState(true)

  const active = useMemo(
    () => problems.find((item) => item.id === activeId) || problems[0],
    [activeId],
  )

  return (
    <main className="onto26-page">
      <nav className="onto26-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="onto26-brand">Φ · Philosophia</Link>
        <span>26 · VIII · 2026</span>
      </nav>

      <header className="onto26-hero">
        <div className="onto26-hero-ghost" aria-hidden="true">MONAS</div>

        <div className="onto26-hero-copy">
          <p>Ontología II · clase del 26 de agosto</p>
          <h1>Leibniz <em>contra dos reducciones</em></h1>
          <p className="onto26-lead">
            Del mecanicismo cartesiano y la necesidad spinozista hacia una
            metafísica capaz de conservar fuerza, contingencia, finalidad,
            mónadas, armonía y libertad.
          </p>
          <blockquote>
            ¿Cómo puede existir un universo completamente racional sin que todo
            sea lógicamente necesario?
          </blockquote>
        </div>

        <aside className="onto26-hero-axis">
          <span>PROBLEMA RECTOR</span>
          <div><b>DESCARTES</b><small>mecanismo</small></div>
          <i>↓</i>
          <div><b>SPINOZA</b><small>necesidad</small></div>
          <i>↓</i>
          <div className="is-leibniz"><b>LEIBNIZ</b><small>orden + contingencia</small></div>
        </aside>
      </header>

      <section className="onto26-map">
        <header>
          <span>I · NEXUS</span>
          <h2>El sistema entero en siete problemas</h2>
          <p>Pulse un problema para reconstruir por qué aparece el siguiente.</p>
        </header>

        <div className="onto26-problem-tabs">
          {problems.map((item) => (
            <button
              type="button"
              key={item.id}
              className={active.id === item.id ? 'active' : ''}
              onClick={() => setActiveId(item.id)}
            >
              <span>{item.number}</span>
              <strong>{item.label}</strong>
            </button>
          ))}
        </div>

        <article className="onto26-problem-detail">
          <div className="onto26-problem-number">{active.number}</div>
          <div>
            <span>{active.label}</span>
            <h3>{active.title}</h3>
            <p>{active.thesis}</p>

            <div className="onto26-mini-chain">
              {active.chain.map((item, index) => (
                <div key={item}>
                  <strong>{item}</strong>
                  {index < active.chain.length - 1 && <b>→</b>}
                </div>
              ))}
            </div>

            <blockquote>{active.note}</blockquote>
          </div>
        </article>
      </section>

      <section className="onto26-triad">
        <header>
          <span>II · CONTEXTUS</span>
          <h2>Descartes → Spinoza → Leibniz</h2>
        </header>

        <div className="onto26-triad-grid">
          <article>
            <span>DESCARTES</span>
            <h3>La naturaleza como máquina</h3>
            <p>Materia + movimiento + leyes. Predominio de causa material y eficiente.</p>
            <div>res cogitans ↔ res extensa</div>
          </article>

          <article>
            <span>SPINOZA</span>
            <h3>La realidad como necesidad</h3>
            <p>El orden de la realidad no podría ser de otra manera. La contingencia queda excluida.</p>
            <div>Deus sive Natura → necesidad</div>
          </article>

          <article className="leibniz">
            <span>LEIBNIZ</span>
            <h3>Orden racional sin necesitarismo</h3>
            <p>Mundos posibles, razón suficiente, fuerza interna y finalidad.</p>
            <div>posibilidad → elección → armonía</div>
          </article>
        </div>
      </section>

      <section className="onto26-truth-lab">
        <header>
          <span>III · LABORATORIUM</span>
          <h2>Verdades de razón y verdades de hecho</h2>
        </header>

        <div className="onto26-truth-switch">
          <button
            type="button"
            className={truth === 'razon' ? 'active' : ''}
            onClick={() => setTruth('razon')}
          >
            Verdad de razón
          </button>
          <button
            type="button"
            className={truth === 'hecho' ? 'active' : ''}
            onClick={() => setTruth('hecho')}
          >
            Verdad de hecho
          </button>
        </div>

        <div className={`onto26-truth-card ${truth}`}>
          {truth === 'razon' ? (
            <>
              <span>NECESARIA</span>
              <h3>Todo triángulo tiene tres lados.</h3>
              <p>Negarlo implica contradicción. Lo contrario es imposible.</p>
              <div><b>A = A</b><strong>·</strong><b>¬(A ∧ ¬A)</b></div>
            </>
          ) : (
            <>
              <span>CONTINGENTE</span>
              <h3>Algunas plantas son venenosas.</h3>
              <p>Su contrario puede concebirse sin contradicción. Exige experiencia.</p>
              <div><b>razón suficiente</b><strong>≠</strong><b>necesidad lógica</b></div>
            </>
          )}
        </div>
      </section>

      <section className="onto26-worlds">
        <header>
          <span>IV · POSSIBILIA</span>
          <h2>¿Por qué existe este mundo?</h2>
          <p>Dios concibe múltiples mundos posibles; sólo uno es actualizado.</p>
        </header>

        <div className="onto26-world-grid">
          {['A', 'B', 'C', 'D'].map((item) => (
            <button
              type="button"
              key={item}
              className={world === item ? 'active' : ''}
              onClick={() => setWorld(item)}
            >
              <span>MUNDO</span>
              <strong>{item}</strong>
              <small>{world === item ? 'elegido' : 'posible'}</small>
            </button>
          ))}
        </div>

        <div className="onto26-world-result">
          <span>PRINCIPIO DE CONVENIENCIA</span>
          <strong>Mundo {world} → mayor grado de perfección considerado en totalidad</strong>
          <p>
            La elección posee razón suficiente, pero los mundos no elegidos no
            se vuelven por ello lógicamente contradictorios.
          </p>
        </div>
      </section>

      <section className="onto26-evil">
        <header>
          <span>V · THEODICAEA</span>
          <h2>El mejor mundo posible y el problema del mal</h2>
        </header>

        <div className="onto26-evil-grid">
          <article>
            <span>01</span>
            <h3>Mal metafísico</h3>
            <strong>finitud</strong>
            <p>La criatura es limitada porque no es Dios. Imperfección ontológica no equivale a pecado.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Mal físico</h3>
            <strong>dolor · pérdida · catástrofe</strong>
            <p>Un orden natural regido por leyes puede producir consecuencias destructivas para individuos.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Mal moral</h3>
            <strong>libertad mal usada</strong>
            <p>La voluntad humana puede elegir deliberadamente el mal y por eso existe responsabilidad.</p>
          </article>
        </div>
      </section>

      <section className="onto26-force">
        <header>
          <span>VI · VIS</span>
          <h2>De la máquina a la fuerza</h2>
        </header>

        <div className="onto26-force-flow">
          <article><span>DESCARTES</span><strong>extensión</strong><p>materia + movimiento</p></article>
          <b>→</b>
          <article><span>PROBLEMA</span><strong>actividad</strong><p>¿qué explica el principio interno?</p></article>
          <b>→</b>
          <article className="active"><span>LEIBNIZ</span><strong>fuerza</strong><p>potencia · acto · entelequia</p></article>
          <b>→</b>
          <article><span>RESULTADO</span><strong>mónada</strong><p>unidad metafísica activa</p></article>
        </div>
      </section>

      <section className="onto26-monad">
        <header>
          <span>VII · MONADOLOGIA</span>
          <h2>«Las mónadas no tienen ventanas»</h2>
          <button type="button" onClick={() => setAnimate((value) => !value)}>
            {animate ? 'Detener armonía' : 'Activar armonía'}
          </button>
        </header>

        <div className={`onto26-monad-system ${animate ? 'is-running' : ''}`}>
          <div className="onto26-god">
            <span>DIOS</span>
            <small>fundamento de la coordinación</small>
          </div>

          <div className="onto26-monads">
            {['A', 'B', 'C'].map((item, index) => (
              <article key={item}>
                <span>MÓNADA {item}</span>
                <div className={`onto26-orbit orbit-${index + 1}`}>
                  <i />
                </div>
                <strong>ley interna {item}</strong>
                <small>sin interacción causal directa</small>
              </article>
            ))}
          </div>

          <div className="onto26-harmony-line">
            <span>A</span><b>↔</b><span>B</span><b>↔</b><span>C</span>
            <strong>ARMONÍA PREESTABLECIDA</strong>
          </div>
        </div>

        <div className="onto26-monad-rules">
          <article><span>1</span><p>Cada mónada posee internamente su principio de desarrollo.</p></article>
          <article><span>2</span><p>Ninguna mónada actúa causalmente sobre otra.</p></article>
          <article><span>3</span><p>Dios ha coordinado de antemano sus desarrollos.</p></article>
        </div>
      </section>

      <section className="onto26-perspective">
        <header>
          <span>VIII · EXPRESSIO</span>
          <h2>Cada mónada expresa el universo</h2>
        </header>

        <div className="onto26-perspective-grid">
          <div className="onto26-universe">UNIVERSO</div>
          <b>↓</b>
          <div className="onto26-perspective-cards">
            {['A · perspectiva A', 'B · perspectiva B', 'C · perspectiva C', 'D · perspectiva D'].map((item) => (
              <article key={item}>{item}</article>
            ))}
          </div>
        </div>

        <p>
          No contiene una miniatura física del cosmos: su serie interna de
          estados guarda correspondencia con la totalidad desde un punto de vista propio.
        </p>
      </section>

      <section className="onto26-compare">
        <header>
          <span>IX · SYNOPSIS</span>
          <h2>Tres racionalismos, tres arquitecturas</h2>
        </header>

        <div className="onto26-table-wrap">
          <table>
            <thead>
              <tr><th>Problema</th><th>Descartes</th><th>Spinoza</th><th>Leibniz</th></tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="onto26-final">
        <span>X · ARCHITECTURA</span>
        <h2>La clase entera en una sola cadena</h2>

        <div className="onto26-final-chain">
          {finalChain.map((item, index) => (
            <div key={item}>
              <strong>{item}</strong>
              {index < finalChain.length - 1 && <b>→</b>}
            </div>
          ))}
        </div>

        <blockquote>
          Leibniz intenta conservar simultáneamente ciencia mecánica, metafísica
          de la forma, orden racional, contingencia, finalidad y libertad.
        </blockquote>
      </section>
    </main>
  )
}
