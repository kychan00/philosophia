import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const concepts = [
  {
    id: 'totality',
    map: 'I',
    group: 'método',
    title: 'Totalidad',
    short: 'La sociedad debe pensarse como una red histórica de relaciones.',
    detail:
      'La crítica comienza cuando los hechos dejan de verse aisladamente y se sitúan dentro de la estructura social que los produce.',
    position: { x: 0, y: 360 },
  },
  {
    id: 'contradiction',
    map: 'I',
    group: 'diagnóstico',
    title: 'Contradicción',
    short: 'El todo social no es armónico: contiene tensiones objetivas.',
    detail:
      'Pensar la totalidad sirve para hacer visibles contradicciones entre promesas, instituciones y efectos reales.',
    position: { x: 420, y: 360 },
  },
  {
    id: 'nonidentity',
    map: 'II',
    group: 'epistemología',
    title: 'No-identidad',
    short: 'El concepto no agota al objeto.',
    detail:
      'Adorno impide que el pensamiento cierre la realidad dentro de una identidad conceptual completa.',
    position: { x: 900, y: 40 },
  },
  {
    id: 'negative',
    map: 'II',
    group: 'método',
    title: 'Dialéctica negativa',
    short: 'La contradicción no se pacifica en una síntesis final.',
    detail:
      'La negatividad mantiene visible lo singular, lo diferente y aquello que el sistema conceptual reprime.',
    position: { x: 1360, y: 40 },
  },
  {
    id: 'instrumental',
    map: 'III–IV',
    group: 'razón',
    title: 'Razón instrumental',
    short: 'La razón calcula medios para fines que ya no puede juzgar.',
    detail:
      'El saber se mide por su funcionalidad; la discusión racional de los fines queda desplazada.',
    position: { x: 900, y: 700 },
  },
  {
    id: 'administration',
    map: 'III–IV',
    group: 'sociedad',
    title: 'Sociedad administrada',
    short: 'La racionalidad técnica se convierte en organización social.',
    detail:
      'Aparatos económicos, técnicos y burocráticos ordenan cada vez más ámbitos de la vida.',
    position: { x: 1360, y: 700 },
  },
  {
    id: 'culture',
    map: 'III',
    group: 'cultura',
    title: 'Industria cultural',
    short: 'La administración alcanza valores, necesidades, ocio y lenguaje.',
    detail:
      'Los medios masivos homogeneizan modelos de conducta y favorecen una recepción pasiva.',
    position: { x: 1820, y: 700 },
  },
  {
    id: 'subject',
    map: 'V',
    group: 'subjetividad',
    title: 'Sujeto integrado',
    short: 'La dominación también se interioriza.',
    detail:
      'Marcuse y Fromm muestran que necesidades, deseos, miedo, obediencia e identidad pueden ser socialmente organizados.',
    position: { x: 2280, y: 700 },
  },
  {
    id: 'refusal',
    map: 'V',
    group: 'emancipación',
    title: 'Negación / decir “no”',
    short: 'Gran Rechazo y desobediencia preservan la posibilidad de no adaptarse.',
    detail:
      'Marcuse y Fromm no dicen lo mismo, pero convergen en la importancia de una negatividad capaz de interrumpir la integración.',
    position: { x: 2280, y: 40 },
  },
  {
    id: 'critique',
    map: 'I–VI',
    group: 'núcleo',
    title: 'Crítica',
    short: 'No sólo examina teorías: interroga la sociedad que produce hechos y sujetos.',
    detail:
      'En Frankfurt, criticar significa revelar mediaciones, contradicciones, formas de dominio y posibilidades bloqueadas.',
    position: { x: 1820, y: 360 },
  },
  {
    id: 'science',
    map: 'VI',
    group: 'ciencia',
    title: 'Ciencias sociales',
    short: '¿Puede la ciencia limitarse a medios y hechos?',
    detail:
      'La disputa Adorno–Popper y Habermas–Albert pregunta por el alcance de la crítica, la totalidad y la discusión racional de normas.',
    position: { x: 2740, y: 360 },
  },
  {
    id: 'ends',
    map: 'IV–VI',
    group: 'normatividad',
    title: 'Fines en debate',
    short: 'La razón crítica no quiere abandonar los fines al puro decisionismo.',
    detail:
      'Habermas prolonga el problema de Horkheimer: una razón que sólo domina medios queda impotente ante las cuestiones prácticas.',
    position: { x: 3260, y: 360 },
  },
  {
    id: 'emancipation',
    map: 'I–VI',
    group: 'horizonte',
    title: 'Emancipación',
    short: 'Lo existente no agota lo posible.',
    detail:
      'La teoría crítica conserva abierta la posibilidad de una sociedad distinta sin fingir poseer una imagen cerrada del futuro.',
    position: { x: 3780, y: 360 },
  },
]

const relations = [
  ['totality', 'contradiction', 'hace visibles'],
  ['contradiction', 'nonidentity', 'impide reconciliar apresuradamente'],
  ['nonidentity', 'negative', 'fundamenta'],
  ['negative', 'critique', 'se convierte en'],
  ['contradiction', 'instrumental', 'permite diagnosticar'],
  ['instrumental', 'administration', 'organiza'],
  ['administration', 'culture', 'se extiende mediante'],
  ['culture', 'subject', 'modela'],
  ['subject', 'refusal', 'puede ser resistido por'],
  ['refusal', 'critique', 'reactiva'],
  ['critique', 'science', 'interroga también a'],
  ['science', 'ends', 'abre el problema de'],
  ['instrumental', 'ends', 'deja sin fundamento'],
  ['ends', 'emancipation', 'orienta prácticamente hacia'],
  ['critique', 'emancipation', 'mantiene abierta'],
  ['totality', 'science', 'reaparece como categoría de'],
]

const explanations = {
  'totality|contradiction':
    'Pensar la sociedad como totalidad permite detectar tensiones que desaparecen cuando cada fenómeno se estudia como un sector independiente.',
  'contradiction|nonidentity':
    'Una realidad contradictoria resiste la identificación plena entre pensamiento y ser: el concepto no puede declarar reconciliado aquello que en la realidad sigue desgarrado.',
  'nonidentity|negative':
    'La dialéctica se vuelve negativa porque parte de la no-coincidencia persistente entre concepto y objeto.',
  'negative|critique':
    'La dialéctica negativa deja de ser sólo una tesis epistemológica cuando sirve para desenmascarar sistemas sociales y culturales que naturalizan lo existente.',
  'contradiction|instrumental':
    'La contradicción central de la modernidad ilustrada aparece cuando una razón nacida con promesas emancipadoras se convierte en instrumento de dominio.',
  'instrumental|administration':
    'Una racionalidad basada en cálculo, eficiencia y medios encuentra su forma social en aparatos de administración y organización.',
  'administration|culture':
    'La administración no se limita a fábricas o burocracias: alcanza la cultura, el ocio, el lenguaje y los modelos de conducta.',
  'culture|subject':
    'La industria cultural ayuda a producir sujetos adaptados mediante necesidades, valores y formas de recepción homogeneizadas.',
  'subject|refusal':
    'La integración nunca es presentada como absolutamente completa: Marcuse y Fromm buscan capacidades de negación, rechazo y desobediencia.',
  'refusal|critique':
    'La capacidad de decir “no” devuelve a la crítica su dimensión práctica: impide confundir adaptación con racionalidad.',
  'critique|science':
    'La teoría crítica también somete a examen la propia práctica de las ciencias sociales y pregunta qué queda fuera cuando sólo se registran hechos.',
  'science|ends':
    'Habermas muestra que una ciencia reducida a medios deja los fines en manos de decisiones que ya no pueden debatirse racionalmente.',
  'instrumental|ends':
    'Éste es el mismo problema que Horkheimer había formulado: la razón instrumental puede optimizar medios, pero ha perdido autoridad sobre los fines.',
  'ends|emancipation':
    'La emancipación no puede orientarse sólo mediante eficacia técnica; requiere discutir racionalmente qué formas de vida y organización merecen perseguirse.',
  'critique|emancipation':
    'La crítica tiene sentido porque lo existente no se considera definitivo. Su negatividad mantiene abierta la posibilidad de transformación.',
  'totality|science':
    'La categoría de totalidad reaparece al final del capítulo en Adorno: sin anticipar el todo, los hechos sociales aislados no encuentran adecuadamente su lugar.',
}

const flowNodes = concepts.map((item) => ({
  id: item.id,
  position: item.position,
  data: {
    label: (
      <div className="frankfurt-system-node">
        <span>MAPA {item.map} · {item.group}</span>
        <strong>{item.title}</strong>
        <small>{item.short}</small>
      </div>
    ),
  },
  style: {
    width: 250,
    padding: 0,
    borderRadius: 5,
    border: '1px solid rgba(68,42,40,.24)',
    background: '#eee5d9',
    color: '#211c1a',
    boxShadow: '0 10px 28px rgba(37,22,21,.08)',
  },
}))

const flowEdges = relations.map(([source, target, label], index) => ({
  id: `${source}-${target}-${index}`,
  source,
  target,
  label,
  type: 'smoothstep',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 18,
    height: 18,
    color: '#833b44',
  },
  style: { stroke: '#833b44', strokeWidth: 1.5 },
  labelStyle: { fill: '#563d39', fontSize: 10, fontFamily: 'Georgia, serif' },
  labelBgStyle: { fill: '#e8e0d4', fillOpacity: 0.94 },
}))

function SystemContent() {
  const [selectedId, setSelectedId] = useState('totality')
  const [selectedEdge, setSelectedEdge] = useState(null)

  const selected = useMemo(
    () => concepts.find((item) => item.id === selectedId) || concepts[0],
    [selectedId],
  )

  const edgeText = selectedEdge
    ? explanations[`${selectedEdge.source}|${selectedEdge.target}`]
    : null

  const related = relations
    .filter(([source, target]) => source === selected.id || target === selected.id)
    .map(([source, target, label]) => {
      const otherId = source === selected.id ? target : source
      return {
        id: otherId,
        label,
        node: concepts.find((item) => item.id === otherId),
      }
    })
    .filter((item) => item.node)

  return (
    <main className="frankfurt-system-page">
      <nav className="frankfurt-system-nav">
        <Link to="/tareas/teoria-critica/escuela-de-frankfurt/mapas">← Seis mapas</Link>
        <Link to="/" className="frankfurt-system-brand">Φ · Philosophia</Link>
        <span>Sistema transversal · Frankfurt</span>
      </nav>

      <header className="frankfurt-system-hero">
        <p>Fase VIII · Nexus criticus</p>
        <h1>
          Un solo
          <em>sistema crítico</em>
        </h1>
        <blockquote>
          Los seis mapas ya no aparecen como capítulos separados: aquí se ve
          cómo totalidad, no-identidad, razón instrumental, subjetividad y
          ciencia social forman una misma arquitectura crítica.
        </blockquote>
      </header>

      <section className="frankfurt-system-intro">
        <span>Pregunta rectora transversal</span>
        <h2>
          ¿Cómo se conectan una teoría de la sociedad, una crítica del
          conocimiento, una crítica de la razón y una teoría de la emancipación?
        </h2>
        <p>
          Recorra el lienzo libremente. Pulse un cuadro para abrir su función
          dentro del sistema y pulse una flecha para ver por qué existe esa relación.
        </p>
      </section>

      <section className="frankfurt-system-workspace">
        <div className="frankfurt-system-canvas">
          <ReactFlow
            nodes={flowNodes.map((node) => ({
              ...node,
              className: node.id === selectedId ? 'frankfurt-system-selected' : '',
            }))}
            edges={flowEdges.map((edge) => ({
              ...edge,
              className:
                selectedEdge?.source === edge.source &&
                selectedEdge?.target === edge.target
                  ? 'frankfurt-system-edge-selected'
                  : '',
            }))}
            onNodeClick={(_, node) => {
              setSelectedId(node.id)
              setSelectedEdge(null)
            }}
            onEdgeClick={(_, edge) =>
              setSelectedEdge({
                source: edge.source,
                target: edge.target,
                label: edge.label,
              })
            }
            fitView
            fitViewOptions={{ padding: 0.2 }}
            minZoom={0.18}
            maxZoom={1.8}
            nodesConnectable={false}
            nodesDraggable
            panOnDrag
          >
            <Background gap={26} size={1} color="rgba(52,37,34,.11)" />
            <MiniMap
              pannable
              zoomable
              nodeColor={() => '#a87479'}
              maskColor="rgba(232,224,212,.78)"
            />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>

        <aside className="frankfurt-system-detail">
          {selectedEdge && edgeText ? (
            <>
              <p>Relatio transversalis</p>
              <h3>{selectedEdge.label}</h3>
              <span>¿Por qué conecta dos mapas distintos?</span>
              <p className="body">{edgeText}</p>
              <button type="button" onClick={() => setSelectedEdge(null)}>
                ← Volver al concepto
              </button>
            </>
          ) : (
            <>
              <p>Nodus transversalis</p>
              <h3>{selected.title}</h3>
              <span>MAPA {selected.map} · {selected.group}</span>
              <p className="body">{selected.detail}</p>

              <div className="frankfurt-system-direct">
                <small>CONEXIONES DIRECTAS</small>
                {related.map((item) => (
                  <button
                    key={`${selected.id}-${item.id}-${item.label}`}
                    type="button"
                    onClick={() => {
                      setSelectedId(item.id)
                      setSelectedEdge(null)
                    }}
                  >
                    <span>{item.label}</span>
                    <strong>{item.node.title} →</strong>
                  </button>
                ))}
              </div>
            </>
          )}
        </aside>
      </section>

      <section className="frankfurt-system-spine">
        <div>
          <span>La columna vertebral</span>
          <h2>Del diagnóstico a la emancipación</h2>
        </div>
        <div className="frankfurt-system-spine-flow">
          {[
            ['totality', 'TOTALIDAD'],
            ['contradiction', 'CONTRADICCIÓN'],
            ['nonidentity', 'NO-IDENTIDAD'],
            ['instrumental', 'RAZÓN INSTRUMENTAL'],
            ['subject', 'SUJETO INTEGRADO'],
            ['science', 'CIENCIA SOCIAL'],
            ['ends', 'FINES'],
            ['emancipation', 'EMANCIPACIÓN'],
          ].map(([id, label], index, arr) => (
            <div key={id}>
              <button type="button" onClick={() => setSelectedId(id)}>{label}</button>
              {index < arr.length - 1 && <b>→</b>}
            </div>
          ))}
        </div>
      </section>

      <section className="frankfurt-system-reading">
        <article>
          <span>I–II</span>
          <strong>¿Cómo conocer críticamente?</strong>
          <p>Totalidad, contradicción y no-identidad impiden que el pensamiento cierre demasiado pronto la realidad.</p>
        </article>
        <article>
          <span>III–IV</span>
          <strong>¿Cómo la razón se vuelve dominio?</strong>
          <p>La racionalidad instrumental transforma cálculo y eficacia en principios de administración social.</p>
        </article>
        <article>
          <span>V</span>
          <strong>¿Cómo el dominio entra en el sujeto?</strong>
          <p>Necesidades, miedo, conformismo y deseo muestran la dimensión subjetiva de la integración.</p>
        </article>
        <article>
          <span>VI</span>
          <strong>¿Cómo debe operar la crítica?</strong>
          <p>La discusión sobre ciencia social vuelve a plantear totalidad, hechos, normas, medios y fines.</p>
        </article>
      </section>

      <section className="frankfurt-system-final">
        <span>Resultado de la Fase VIII</span>
        <h2>Frankfurt ya puede leerse como un sistema.</h2>
        <p>
          El siguiente paso será construir el Studium: lectura guiada, progreso,
          preguntas relacionales y autoevaluación para comprobar que las conexiones
          pueden reconstruirse sin depender del mapa.
        </p>
              <div className="frankfurt-study-entry">
          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/studium">
            Abrir Studium →
          </Link>
        </div>
</section>
      {/* FRANKFURT PHASE 11 · SYSTEM FOOTER NAV */}
      <section className="frankfurt-route-footer frankfurt-route-footer-system">
        <div>
          <span>Nexus completus</span>
          <strong>Del sistema visual a la reconstrucción conceptual.</strong>
        </div>
        <div className="frankfurt-route-footer-links">
          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/mapas">← Volver a los seis mapas</Link>
          <Link to="/tareas/teoria-critica/escuela-de-frankfurt/studium">Entrar al Studium →</Link>
        </div>
      </section>

    </main>
  )
}

export default function FrankfurtSystem() {
  return (
    <ReactFlowProvider>
      <SystemContent />
    </ReactFlowProvider>
  )
}
