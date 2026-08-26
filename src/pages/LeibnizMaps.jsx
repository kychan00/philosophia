import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { leibnizMaps } from '../data/leibnizMaps'

const crossMapLinks = {
  'world:individuals': [
    { mapId: 'caesar', nodeId: 'caesar', label: 'Abrir el individuo concreto', reason: 'El Mapa I introduce sustancias individuales; el Mapa II toma a César para mostrar qué significa poseer una noción completa.' },
  ],
  'world:problem': [
    { mapId: 'caesar', nodeId: 'contingent', label: 'Resolver el problema de contingencia', reason: 'La pregunta por libertad y contingencia abierta en el Mapa I se trabaja en el Mapa II mediante la distinción entre certeza y necesidad.' },
  ],
  'caesar:notion': [
    { mapId: 'monad', nodeId: 'individual', label: 'Seguir hacia la mónada', reason: 'La sustancia individual del Discurso es el punto de partida desde el cual el sistema maduro reorganiza la sustancia como mónada.' },
  ],
  'monad:windows': [
    { mapId: 'harmony', nodeId: 'nocause', label: 'Ir al problema de la coordinación', reason: 'Si las mónadas no tienen ventanas, queda pendiente explicar cómo concuerdan unas con otras. Ésa es la entrada natural a la armonía preestablecida.' },
  ],
  'monad:internal': [
    { mapId: 'inside', nodeId: 'monad', label: 'Entrar en la vida interna', reason: 'El principio interno de cambio exige explicar qué estados posee una mónada y cómo transita entre ellos: percepción y apetición.' },
  ],
  'inside:perception': [
    { mapId: 'perspectives', nodeId: 'universe', label: 'Ampliar hacia el universo representado', reason: 'Una vez entendida la percepción como representación, el siguiente problema es qué representa la mónada: el universo entero desde una perspectiva.' },
  ],
  'inside:spirit': [
    { mapId: 'harmony', nodeId: 'moral', label: 'Entrar al reino moral', reason: 'Los espíritus pueden conocer, reflexionar y relacionarse moralmente con Dios. Esto conduce al reino moral y a la ciudad de Dios.' },
  ],
  'perspectives:universe': [
    { mapId: 'harmony', nodeId: 'harmony', label: 'Preguntar cómo concuerdan las perspectivas', reason: 'Que todas las mónadas expresen el mismo universo plantea la cuestión de su concordancia. La armonía preestablecida explica esa coordinación.' },
  ],
  'perspectives:body': [
    { mapId: 'harmony', nodeId: 'accord', label: 'Seguir al problema alma/cuerpo', reason: 'El cuerpo propio prepara el problema específico de la correspondencia entre alma y cuerpo.' },
  ],
  'harmony:nocause': [
    { mapId: 'monad', nodeId: 'windows', label: 'Volver a “sin ventanas”', reason: 'La ausencia de causalidad directa depende de una tesis anterior: ninguna mónada recibe físicamente estados desde otra.' },
  ],
  'harmony:city': [
    { mapId: 'world', nodeId: 'god', label: 'Cerrar el círculo en Dios', reason: 'El sistema culmina en la ciudad de Dios y vuelve al punto de partida: Dios como fundamento del orden físico y moral.' },
  ],
}

const guides = {
  world: [
    { nodeId: 'god', title: '1. Comience por Dios', question: '¿Qué significa que una creación perfecta no pueda ser arbitraria?' },
    { nodeId: 'possibles', title: '2. Abra el espacio de lo posible', question: '¿Por qué no todo lo posible llega a existir?' },
    { nodeId: 'choice', title: '3. Exija una razón de preferencia', question: 'Si sólo un mundo existe, ¿qué explica que sea éste?' },
    { nodeId: 'best', title: '4. Entienda “lo mejor”', question: '¿La elección de lo mejor es necesidad o elección racional?' },
    { nodeId: 'order', title: '5. Mire el mundo como un orden', question: '¿Qué cambia si el mundo es una serie coordinada y no un agregado?' },
    { nodeId: 'individuals', title: '6. Entre a los individuos', question: '¿Cómo pertenece cada sustancia a ese orden sin perder su individualidad?' },
    { nodeId: 'problem', title: '7. Llegue al verdadero problema', question: '¿Cómo caben contingencia y libertad dentro de un orden conocido por Dios?' },
  ],
  caesar: [
    { nodeId: 'caesar', title: '1. Tome un individuo concreto', question: '¿Qué hace que César sea precisamente César y no un sujeto vacío?' },
    { nodeId: 'notion', title: '2. Introduzca la noción completa', question: '¿Qué significa que la noción del sujeto contenga el fundamento de sus predicados?' },
    { nodeId: 'rubicon', title: '3. Mire un predicado histórico', question: '¿Por qué “cruza el Rubicón” pertenece a la noción verdadera de César?' },
    { nodeId: 'future', title: '4. Extienda la noción al futuro', question: '¿Puede una noción completa contener acontecimientos futuros sin convertirlos en necesarios?' },
    { nodeId: 'necessary', title: '5. Distinga necesidad', question: '¿Qué tipo de verdad es aquella cuyo contrario implica contradicción?' },
    { nodeId: 'contingent', title: '6. Distinga contingencia', question: '¿Cómo puede algo ser cierto y, sin embargo, tener un contrario posible?' },
    { nodeId: 'freedom', title: '7. Recupere la libertad', question: '¿Cómo pueden las razones inclinar una acción sin obligarla absolutamente?' },
  ],
  monad: [
    { nodeId: 'individual', title: '1. Parta de la sustancia individual', question: '¿Qué conserva Leibniz de la noción completa cuando madura su metafísica?' },
    { nodeId: 'simple', title: '2. Introduzca la simplicidad', question: '¿Por qué una sustancia verdaderamente fundamental no puede estar compuesta de partes?' },
    { nodeId: 'monad', title: '3. Nombre la nueva unidad', question: '¿En qué sentido la mónada es un “átomo” sin ser una partícula material?' },
    { nodeId: 'windows', title: '4. Cierre las ventanas', question: '¿Qué implica afirmar que nada entra ni sale de una mónada?' },
    { nodeId: 'qualities', title: '5. Preserve la diferencia', question: 'Si las mónadas son simples, ¿cómo pueden distinguirse unas de otras?' },
    { nodeId: 'internal', title: '6. Busque el cambio adentro', question: 'Si nada exterior entra, ¿de dónde provienen los cambios de la mónada?' },
    { nodeId: 'inside', title: '7. Abra la siguiente pregunta', question: '¿Qué tipo de contenido interno permite que una mónada cambie y represente?' },
  ],
  inside: [
    { nodeId: 'monad', title: '1. Entre en la mónada', question: '¿Cómo puede una unidad simple contener una multiplicidad sin tener partes?' },
    { nodeId: 'perception', title: '2. Distinga percepción', question: '¿Qué significa representar una multitud en una unidad simple?' },
    { nodeId: 'appetition', title: '3. Introduzca apetición', question: '¿Qué impulsa el paso de una percepción a otra?' },
    { nodeId: 'apperception', title: '4. Separe percepción y conciencia', question: '¿Toda percepción es consciente para Leibniz?' },
    { nodeId: 'memory', title: '5. Añada memoria', question: '¿Cómo se enlazan percepciones pasadas con expectativas presentes?' },
    { nodeId: 'reason', title: '6. Pase de memoria a razón', question: '¿Qué distingue al razonamiento de una mera asociación empírica?' },
    { nodeId: 'spirit', title: '7. Llegue al espíritu', question: '¿Qué cambia cuando una mónada puede reflexionar sobre sí misma y sobre Dios?' },
  ],
  perspectives: [
    { nodeId: 'city', title: '1. Empiece con la metáfora de la ciudad', question: '¿Cómo puede una misma realidad aparecer de modos distintos sin multiplicarse realmente?' },
    { nodeId: 'universe', title: '2. Fije un solo universo', question: '¿Qué significa que todas las mónadas expresen el mismo universo?' },
    { nodeId: 'm1', title: '3. Mire una primera perspectiva', question: '¿Qué hace que una mónada exprese el todo desde un punto de vista propio?' },
    { nodeId: 'm2', title: '4. Compare otra perspectiva', question: '¿La diferencia entre mónadas está en el universo representado o en el modo de representarlo?' },
    { nodeId: 'm3', title: '5. Introduzca el espejo viviente', question: '¿En qué sentido cada mónada puede ser llamada espejo del universo?' },
    { nodeId: 'm4', title: '6. Distinga grados de claridad', question: '¿Qué limita a una mónada si el objeto que representa es el universo entero?' },
    { nodeId: 'body', title: '7. Termine en el cuerpo propio', question: '¿Por qué cada mónada representa con mayor distinción el cuerpo que le está asignado?' },
  ],

}

const edgeExplanations = {
  world: {
    'god|possibles': 'Del concepto de Dios pasamos a los posibles porque el entendimiento divino no contiene solamente lo que existe, sino también las esencias o posibilidades.',
    'possibles|choice': 'Que existan múltiples mundos posibles abre una pregunta de selección: si sólo uno llega a existir, hace falta una razón de por qué éste y no otro.',
    'choice|best': 'La razón de elección no puede ser caprichosa. Leibniz la formula en términos de conveniencia y grados de perfección.',
    'best|order': 'Elegir lo mejor no significa escoger una pieza aislada. Dios elige un orden completo.',
    'order|individuals': 'El orden del mundo está compuesto por sustancias determinadas, cada una con su propia noción y perspectiva.',
    'individuals|problem': 'Cuando cada individuo queda incluido en un orden completo surge la tensión entre orden, contingencia y libertad.',
    'god|order': 'Dios fundamenta el orden como razón última de la serie total y de su elección.',
  },
  caesar: {
    'caesar|notion': 'Conocer perfectamente al sujeto significa poseer una noción que funde todos los predicados verdaderos que le pertenecen.',
    'notion|rubicon': '“Cruzar el Rubicón” pertenece a la historia verdadera del individuo César y, por ello, tiene fundamento en su noción completa.',
    'notion|dictator': 'Llegar a ser dictador pertenece a la serie concreta que hace de César este individuo y no otro.',
    'notion|future': 'Para un entendimiento perfecto, la noción completa funda también los predicados futuros verdaderos del individuo.',
    'future|necessary': 'Si un predicado futuro puede ser conocido con certeza, parecería que debe ser necesario. Leibniz rechaza esa identificación.',
    'future|contingent': 'Una verdad de hecho puede ser cierta y tener razón suficiente aunque su contrario siga siendo posible en sí mismo.',
    'contingent|freedom': 'La contingencia abre espacio para la libertad: las razones pueden inclinar sin producir necesidad absoluta.',
  },
  monad: {
    'individual|simple': 'La formulación madura busca el nivel metafísico más básico de la individualidad: una sustancia que no esté compuesta de partes.',
    'simple|monad': 'Una vez definida la sustancia simple, Leibniz la llama mónada: unidad metafísica fundamental, no partícula espacial.',
    'monad|windows': 'Si la mónada es simple y carece de partes, no recibe modificaciones físicas desde fuera; de ahí la tesis de que no tiene ventanas.',
    'simple|qualities': 'La simplicidad no puede significar uniformidad absoluta: las mónadas deben poseer cualidades propias.',
    'qualities|internal': 'La diferencia entre mónadas debe residir en sus cualidades y estados propios; por eso el cambio debe explicarse internamente.',
    'windows|internal': 'Si nada entra desde fuera y, sin embargo, la mónada cambia, el principio de sus cambios debe estar dentro de ella.',
    'internal|inside': 'Una vez establecido el principio interno, la siguiente pregunta es qué cambia en la mónada. Leibniz responderá con percepción y apetición.',
  },
  inside: {
    'monad|perception': 'La percepción resuelve un problema central: una sustancia simple puede representar multiplicidad sin estar compuesta de partes. La multiplicidad está representada en la unidad, no agregada como piezas.',
    'monad|appetition': 'La mónada no sólo tiene estados; transita entre ellos. La apetición nombra el principio interno de ese paso.',
    'perception|apperception': 'Leibniz distingue percepción de conciencia. Hay representaciones que ocurren en nosotros sin que las apercibamos reflexivamente.',
    'perception|memory': 'La memoria conserva y enlaza secuencias perceptivas, permitiendo reconocer patrones y anticipar experiencias.',
    'appetition|memory': 'La apetición mantiene el tránsito entre estados; la memoria permite que esas secuencias dejen huella y orienten expectativas.',
    'memory|reason': 'La memoria puede producir conducta empírica por asociación, pero la razón introduce verdades necesarias y principios que no se obtienen por simple repetición.',
    'reason|spirit': 'Cuando una mónada racional puede reflexionar sobre sí, sobre el ser, la sustancia y Dios, Leibniz habla de espíritu y abre el orden moral.',
  },
  perspectives: {
    'city|universe': 'La metáfora de la ciudad muestra que una misma realidad puede aparecer de forma diferente según el punto de vista. Leibniz usa esta imagen para explicar cómo un solo universo admite una multiplicidad de perspectivas sin convertirse en muchos universos.',
    'm1|universe': 'La mónada A no recibe una porción aislada del mundo: expresa el universo entero, aunque desde su propio punto de vista y con grados particulares de claridad.',
    'm2|universe': 'La mónada B expresa el mismo universo que la mónada A. Lo que cambia no es el objeto total representado, sino la perspectiva desde la cual aparece.',
    'm3|universe': 'Leibniz habla de cada sustancia simple como un “espejo viviente del universo” porque sus estados internos mantienen relaciones representativas con el orden total.',
    'm4|universe': 'La mónada está limitada no porque represente sólo una parte del universo, sino porque la mayor parte de esa representación es confusa y sólo una región aparece con mayor distinción.',
    'universe|body': 'Cada mónada expresa todo el universo, pero representa con especial distinción el cuerpo que le está asignado. Ese cuerpo funciona como su perspectiva privilegiada dentro del orden total.',
  },

}

const nodeStyle = {
  width: 220,
  borderRadius: 10,
  border: '1px solid rgba(91,67,39,.28)',
  background: '#f7f0df',
  color: '#30281f',
  boxShadow: '0 10px 24px rgba(66,47,26,.08)',
  fontFamily: 'Georgia, serif',
  padding: 0,
}

const makeNodes = (map) =>
  map.nodes.map((node) => ({
    id: node.id,
    position: node.position,
    data: {
      detail: node,
      label: (
        <div className="leibniz-node-label">
          <span>{node.tag}</span>
          <strong>{node.title}</strong>
          {node.classNote ? (
            <div className="leibniz-node-chip-row">
              <small
                className={`leibniz-node-source-badge ${
                  ['world', 'caesar'].includes(map.id)
                    ? 'hybrid-discourse'
                    : 'hybrid-monadology'
                }`}
              >
                {['world', 'caesar'].includes(map.id)
                  ? 'Clase + Discurso'
                  : 'Clase + Monadología'}
              </small>

              <small className="leibniz-node-source-badge class-only">
                Dicho en clase
              </small>
            </div>
          ) : (
            <small
              className={`leibniz-node-source-badge ${
                ['world', 'caesar'].includes(map.id)
                  ? 'discourse'
                  : 'monadology'
              }`}
            >
              {['world', 'caesar'].includes(map.id)
                ? 'Discurso'
                : 'Monadología'}
            </small>
          )}
        </div>
      ),
    },
    style: nodeStyle,
  }))

const makeEdges = (map) =>
  map.edges.map(([source, target, label], index) => ({
    id: `${map.id}-${source}-${target}-${index}`,
    source,
    target,
    label,
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed, width: 18, height: 18, color: '#8b6a37' },
    style: { stroke: '#8b6a37', strokeWidth: 1.5 },
    labelStyle: { fill: '#6d5735', fontSize: 10, fontFamily: 'Georgia, serif' },
    labelBgStyle: { fill: '#eee8db', fillOpacity: 0.9 },
  }))

function Canvas({ map, selectedId, setSelectedId, selectedEdge, setSelectedEdge }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(makeNodes(map))
  const [edges, setEdges, onEdgesChange] = useEdgesState(makeEdges(map))
  const { fitView, setCenter, getNode } = useReactFlow()

  useEffect(() => {
    const node = getNode(selectedId)
    if (!node) return
    const width = node.measured?.width || 220
    const height = node.measured?.height || 80
    setCenter(node.position.x + width / 2, node.position.y + height / 2, {
      zoom: 0.95,
      duration: 450,
    })
  }, [getNode, selectedId, setCenter])

  const reset = () => {
    setNodes(makeNodes(map))
    setEdges(makeEdges(map))
    setSelectedId(map.nodes[0]?.id || null)
    setSelectedEdge(null)
    requestAnimationFrame(() => fitView({ padding: 0.18, duration: 300 }))
  }

  return (
    <div className="leibniz-canvas-shell">
      <div className="leibniz-canvas-tools">
        <span>Arrastre el lienzo · zoom · mueva nodos · pulse también las flechas</span>
        <button type="button" onClick={reset}>Restablecer</button>
      </div>
      <div className="leibniz-canvas">
        <ReactFlow
          nodes={nodes.map((node) => ({
            ...node,
            className: [
              node.id === selectedId ? 'leibniz-node-selected' : '',
              node.data.detail.classNote
                ? ['world', 'caesar'].includes(map.id)
                  ? 'leibniz-hybrid-class-discourse'
                  : 'leibniz-hybrid-class-monadology'
                : ['world', 'caesar'].includes(map.id)
                  ? 'leibniz-source-discourse'
                  : 'leibniz-source-monadology',
            ].filter(Boolean).join(' '),
          }))}
          edges={edges.map((edge) => ({
            ...edge,
            className:
              selectedEdge?.source === edge.source &&
              selectedEdge?.target === edge.target
                ? 'leibniz-edge-selected'
                : '',
          }))}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={(_, node) => {
            setSelectedId(node.id)
            setSelectedEdge(null)
          }}
          onEdgeClick={(_, edge) => {
            setSelectedEdge({ source: edge.source, target: edge.target, label: edge.label })
          }}
          fitView
          fitViewOptions={{ padding: 0.18 }}
          minZoom={0.22}
          maxZoom={1.9}
          nodesConnectable={false}
          panOnDrag
          nodesDraggable
        >
          <Background gap={24} size={1} color="rgba(91,67,39,.11)" />
          <MiniMap pannable zoomable nodeColor={() => '#cbb98f'} maskColor="rgba(238,232,219,.72)" />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  )
}

function CaesarLogicPanel({ selectedId, setSelectedId }) {
  return (
    <div className="leibniz-caesar-logic">
      <div className="leibniz-caesar-logic-head">
        <span>Distinctio fundamentalis</span>
        <h3>Certeza no es necesidad</h3>
        <p>Si se confunden estas dos cosas, la noción completa parece destruir la libertad.</p>
      </div>
      <div className="leibniz-caesar-two-truths">
        <button type="button" className={selectedId === 'necessary' ? 'active' : ''} onClick={() => setSelectedId('necessary')}>
          <span>VERDAD NECESARIA</span>
          <strong>su contrario es imposible</strong>
          <small>La negación encierra contradicción.</small>
        </button>
        <div className="leibniz-caesar-not-equal">≠</div>
        <button type="button" className={selectedId === 'contingent' ? 'active' : ''} onClick={() => setSelectedId('contingent')}>
          <span>VERDAD CONTINGENTE</span>
          <strong>su contrario sigue siendo posible</strong>
          <small>Tiene razón suficiente y puede ser cierta sin ser necesaria por contradicción.</small>
        </button>
      </div>
    </div>
  )
}

function MonadTransitionPanel({ selectedId, setSelectedId }) {
  return (
    <div className="leibniz-monad-transition">
      <div className="leibniz-monad-transition-head">
        <span>Transitus metaphysicus</span>
        <h3>Lo que cambia entre el Discurso y la Monadología</h3>
        <p>El problema de la individualidad se reorganiza como unidad simple, no espacial, diferenciada por sus estados internos.</p>
      </div>
      <div className="leibniz-monad-transition-grid">
        <button type="button" className={selectedId === 'individual' ? 'active' : ''} onClick={() => setSelectedId('individual')}>
          <span>DISCURSO</span><strong>Sustancia individual</strong><small>noción completa · historia · perspectiva</small>
        </button>
        <b>→</b>
        <button type="button" className={selectedId === 'simple' ? 'active' : ''} onClick={() => setSelectedId('simple')}>
          <span>FORMULACIÓN MADURA</span><strong>Sustancia simple</strong><small>sin partes · fundamento metafísico</small>
        </button>
        <b>→</b>
        <button type="button" className={selectedId === 'monad' ? 'active' : ''} onClick={() => setSelectedId('monad')}>
          <span>MONADOLOGÍA</span><strong>Mónada</strong><small>unidad simple · átomo metafísico</small>
        </button>
      </div>
      <div className="leibniz-monad-bridge">
        <span>La pregunta que queda abierta</span>
        <strong>¿Qué puede cambiar dentro de una sustancia simple sin partes?</strong>
        <p>Ésa es la entrada a percepción y apetición.</p>
      </div>
    </div>
  )
}

function InsideMonadPanel({ selectedId, setSelectedId }) {
  return (
    <div className="leibniz-inside-panel">
      <div className="leibniz-inside-head">
        <span>Vita interna monadis</span>
        <h3>La mónada no está vacía</h3>
        <p>
          Su unidad es simple, pero sus estados representan multiplicidad.
          La clave es distinguir entre lo que la mónada representa, cómo cambia
          y cuándo aparece conciencia reflexiva.
        </p>
      </div>

      <div className="leibniz-inside-core">
        <button
          type="button"
          className={selectedId === 'perception' ? 'active' : ''}
          onClick={() => setSelectedId('perception')}
        >
          <span>ESTADO</span>
          <strong>Percepción</strong>
          <small>la multitud representada en la unidad</small>
        </button>

        <b>+</b>

        <button
          type="button"
          className={selectedId === 'appetition' ? 'active' : ''}
          onClick={() => setSelectedId('appetition')}
        >
          <span>TRANSICIÓN</span>
          <strong>Apetición</strong>
          <small>el paso interno de una percepción a otra</small>
        </button>
      </div>

      <div className="leibniz-inside-distinction">
        <article>
          <span>PERCEPCIÓN</span>
          <strong>no equivale a conciencia</strong>
          <p>
            Puede haber representación sin apercepción reflexiva. La vida de la
            mónada es más amplia que lo que advertimos conscientemente.
          </p>
        </article>

        <article>
          <span>APERCEPCIÓN</span>
          <strong>conciencia de la percepción</strong>
          <p>
            La conciencia es una forma más elevada de relación con los propios
            estados, no la condición para que exista percepción.
          </p>
        </article>
      </div>

      <div className="leibniz-inside-ascent">
        <span>Escalera cognitiva</span>
        <div>
          <button type="button" onClick={() => setSelectedId('perception')}>percepción</button>
          <b>→</b>
          <button type="button" onClick={() => setSelectedId('memory')}>memoria</button>
          <b>→</b>
          <button type="button" onClick={() => setSelectedId('reason')}>razón</button>
          <b>→</b>
          <button type="button" onClick={() => setSelectedId('spirit')}>espíritu</button>
        </div>
        <p>
          La memoria enlaza experiencias; la razón accede a verdades necesarias;
          el espíritu puede reflexionar sobre sí, la sustancia y Dios.
        </p>
      </div>
    </div>
  )
}


function PerspectivesPanel({ selectedId, setSelectedId }) {
  return (
    <div className="leibniz-perspectives-panel">
      <div className="leibniz-perspectives-head">
        <span>Speculum universi</span>
        <h3>Un universo, infinitas perspectivas</h3>
        <p>
          La tesis no es que cada mónada tenga “su propio mundo”. Todas expresan
          el mismo universo; la diferencia está en el punto de vista y en el
          grado de distinción con que lo representan.
        </p>
      </div>

      <div className="leibniz-perspectives-model">
        {[
          ['m1', 'MÓNADA A', 'perspectiva A'],
          ['m2', 'MÓNADA B', 'perspectiva B'],
          ['m3', 'MÓNADA C', 'perspectiva C'],
          ['m4', 'MÓNADA D', 'perspectiva D'],
        ].map(([id, label, subtitle]) => (
          <button
            key={id}
            type="button"
            className={selectedId === id ? 'active' : ''}
            onClick={() => setSelectedId(id)}
          >
            <span>{label}</span>
            <strong>{subtitle}</strong>
          </button>
        ))}

        <button
          type="button"
          className="universe"
          onClick={() => setSelectedId('universe')}
        >
          <span>UNIVERSO</span>
          <strong>uno solo</strong>
          <small>orden común expresado de múltiples maneras</small>
        </button>
      </div>

      <div className="leibniz-perspectives-distinction">
        <article>
          <span>LO QUE NO CAMBIA</span>
          <strong>el universo representado</strong>
          <p>Todas las mónadas se refieren al mismo orden total.</p>
        </article>

        <article>
          <span>LO QUE SÍ CAMBIA</span>
          <strong>el punto de vista y la claridad</strong>
          <p>Cada mónada distingue unas relaciones mejor que otras.</p>
        </article>
      </div>

      <div className="leibniz-perspectives-body">
        <span>Perspectiva privilegiada</span>
        <strong>
          Cada mónada representa con mayor distinción el cuerpo que le pertenece.
        </strong>
        <button type="button" onClick={() => setSelectedId('body')}>
          Abrir “Cuerpo propio” →
        </button>
      </div>
    </div>
  )
}


function SystemNavigator({ currentMapId, onJump }) {
  const maps = [
    ['world', 'I', 'Mundo', '¿Por qué este mundo?'],
    ['caesar', 'II', 'Individuo', 'noción completa'],
    ['monad', 'III', 'Mónada', 'sustancia simple'],
    ['inside', 'IV', 'Interior', 'percepción / apetición'],
    ['perspectives', 'V', 'Perspectivas', 'expresión del universo'],
    ['harmony', 'VI', 'Armonía', 'concordancia universal'],
  ]

  return (
    <div className="leibniz-system-nav">
      <div className="leibniz-system-nav-head">
        <span>Systema transversale</span>
        <strong>Los seis mapas ya forman una sola arquitectura</strong>
      </div>

      <div className="leibniz-system-nav-track">
        {maps.map(([id, roman, title, subtitle], index) => (
          <div className="leibniz-system-nav-step" key={id}>
            <button
              type="button"
              className={currentMapId === id ? 'active' : ''}
              onClick={() => onJump(id)}
            >
              <span>{roman}</span>
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </button>
            {index < maps.length - 1 && <b aria-hidden="true">→</b>}
          </div>
        ))}
      </div>

      <p>
        Cada mapa responde una pregunta que deja preparado el siguiente.
        Las conexiones transversales permiten saltar directamente entre esos problemas.
      </p>
    </div>
  )
}


function MapsCompletionNote() {
  return (
    <section className="leibniz-maps-completion">
      <span>Ruta completa</span>
      <strong>
        Los seis mapas ya no son piezas aisladas: constituyen una sola
        reconstrucción de la metafísica de Leibniz.
      </strong>
      <p>
        Use el navegador transversal para moverse entre problemas. Cuando pueda
        justificar los saltos sin ayuda, continúe al Studium.
      </p>
      <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia/studium">
        Continuar al Studium →
      </Link>
    </section>
  )
}

function Content() {
  const [mapId, setMapId] = useState(leibnizMaps[0].id)
  const map = useMemo(
    () => leibnizMaps.find((item) => item.id === mapId) || leibnizMaps[0],
    [mapId],
  )
  const [selectedId, setSelectedId] = useState(map.nodes[0].id)
  const [selectedEdge, setSelectedEdge] = useState(null)
  const [guideIndex, setGuideIndex] = useState(0)

  const selected = map.nodes.find((node) => node.id === selectedId) || map.nodes[0]
  const crossLinks = crossMapLinks[`${map.id}:${selected.id}`] || []

  const jumpTo = (targetMapId, targetNodeId) => {
    const targetMap = leibnizMaps.find((item) => item.id === targetMapId)
    if (!targetMap) return
    const targetNode =
      targetMap.nodes.find((node) => node.id === targetNodeId) ||
      targetMap.nodes[0]
    setMapId(targetMapId)
    setSelectedId(targetNode.id)
    setSelectedEdge(null)
    setGuideIndex(0)
  }

  const guide = guides[map.id] || null
  const guideStep = guide ? guide[guideIndex] : null

  const choose = (id) => {
    const next = leibnizMaps.find((item) => item.id === id)
    if (!next) return
    setMapId(id)
    setSelectedId(next.nodes[0].id)
    setSelectedEdge(null)
    setGuideIndex(0)
  }

  const goGuide = (index) => {
    if (!guide) return
    const safe = Math.min(Math.max(index, 0), guide.length - 1)
    setGuideIndex(safe)
    setSelectedId(guide[safe].nodeId)
    setSelectedEdge(null)
  }

  const edgeExplanation =
    selectedEdge && edgeExplanations[map.id]
      ? edgeExplanations[map.id][`${selectedEdge.source}|${selectedEdge.target}`]
      : null

  const guideQuestion =
    guide?.find((step) => step.nodeId === selected.id)?.question ||
    '¿Qué función cumple este concepto dentro del problema general?'

  return (
    <main className="leibniz-maps-page">
      <nav className="leibniz-maps-nav">
        <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia">← Tarea</Link>
        <Link to="/" className="leibniz-maps-brand">Φ · Philosophia</Link>
        <Link to="/tareas/ontologia-ii/leibniz-discurso-monadologia/studium">Studium →</Link>
      </nav>

      <header className="leibniz-maps-hero">
        <p>Cartographia Leibnitiana · Discurso → Monadología</p>
        <h1>Mapas conceptuales <em>2D · móviles · explorables</em></h1>
        <blockquote>Primero reconstruir el problema. Después recorrer el sistema.</blockquote>
      </header>

      <div className="leibniz-map-tabs">
        {leibnizMaps.map((item) => (
          <button key={item.id} type="button" className={item.id === mapId ? 'active' : ''} onClick={() => choose(item.id)}>
            <span>{item.roman}</span><strong>{item.title}</strong><small>{item.subtitle}</small>
          </button>
        ))}
      </div>


      {/* LEIBNIZ · DICHO EN CLASE 26 AGO */}
      <section className="leibniz-class26-banner">
        <div>
          <span>DICHO EN CLASE · 26 AGO</span>
          <h2>La clase añadió el contexto histórico que faltaba al sistema</h2>
          <p>
            Descartes explica el punto de partida mecanicista; Spinoza radicaliza
            la necesidad; Leibniz intenta conservar orden racional, contingencia,
            finalidad y libertad. Los nodos azules del mapa son ampliaciones de
            esta sesión de Ontología II.
          </p>
        </div>
        <Link to="/semestre/5/ontologia-ii/clase/26-agosto">
          Abrir clase completa →
        </Link>
      </section>


      <div className="leibniz-source-legend" aria-label="Leyenda de procedencia">
        <span className="discourse"><i /> Discurso de metafísica</span>
        <span className="monadology"><i /> Monadología</span>
        <span className="hybrid-discourse"><i /> Clase + Discurso</span>
        <span className="hybrid-monadology"><i /> Clase + Monadología</span>
      </div>

      <SystemNavigator
        currentMapId={map.id}
        onJump={(targetMapId) => {
          const target = leibnizMaps.find((item) => item.id === targetMapId)
          if (!target) return
          setMapId(targetMapId)
          setSelectedId(target.nodes[0].id)
          setSelectedEdge(null)
          setGuideIndex(0)
        }}
      />

      <section className="leibniz-map-main">
        <div className="leibniz-map-title">
          <span>{map.roman}</span>
          <div><p>{map.subtitle}</p><h2>{map.title}</h2></div>
        </div>
        <p className="leibniz-map-thesis">{map.thesis}</p>

        {guide && (
          <div className="leibniz-map1-guide">
            <div className="leibniz-map1-guide-copy">
              <span>Ruta guiada · Mapa {map.roman}</span>
              <strong>{guideStep.title}</strong>
              <p>{guideStep.question}</p>
            </div>
            <div className="leibniz-map1-guide-controls">
              <button type="button" disabled={guideIndex === 0} onClick={() => goGuide(guideIndex - 1)}>← Anterior</button>
              <div>
                {guide.map((step, index) => (
                  <button key={step.nodeId} type="button" className={index === guideIndex ? 'active' : ''} onClick={() => goGuide(index)}>
                    {index + 1}
                  </button>
                ))}
              </div>
              <button type="button" disabled={guideIndex === guide.length - 1} onClick={() => goGuide(guideIndex + 1)}>Siguiente →</button>
            </div>
          </div>
        )}

        <div className="leibniz-map-workspace">
          <Canvas
            key={map.id}
            map={map}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedEdge={selectedEdge}
            setSelectedEdge={setSelectedEdge}
          />

          <aside className="leibniz-node-detail">
            {selectedEdge && edgeExplanation ? (
              <>
                <p>Relatio aperta</p>
                <h3>{selectedEdge.label}</h3>
                <span>¿Por qué existe esta flecha?</span>
                <p className="body">{edgeExplanation}</p>
                <button type="button" className="leibniz-return-node" onClick={() => setSelectedEdge(null)}>← Volver al nodo</button>
              </>
            ) : (
              <>
                <p>Nodus apertus</p>
                <h3>{selected.title}</h3>
                <span>{selected.tag}</span>
                <p className="body">{selected.detail}</p>
                {selected.classNote && (
                  <div className="leibniz-node-class-note">
                    <span>DICHO EN CLASE · 26 AGO</span>
                    <p>{selected.classNote}</p>
                  </div>
                )}
                <div><small>DISCURSO DE METAFÍSICA</small><strong>{selected.discourse}</strong></div>
                <div><small>MONADOLOGÍA</small><strong>{selected.monadology}</strong></div>
                {guide && (
                  <div className="leibniz-map1-node-question">
                    <small>PREGUNTA DE ESTUDIO</small>
                    <strong>{guideQuestion}</strong>
                  </div>
                )}
                <section>
                  <small>CONEXIONES DIRECTAS</small>
                  {map.edges
                    .filter(([source, target]) => source === selected.id || target === selected.id)
                    .map(([source, target, label], index) => {
                      const otherId = source === selected.id ? target : source
                      const other = map.nodes.find((node) => node.id === otherId)
                      return other ? (
                        <button
                          key={`${otherId}-${index}`}
                          type="button"
                          onClick={() => {
                            setSelectedId(otherId)
                            setSelectedEdge(null)
                          }}
                        >
                          <span>{label}</span>{other.title} →
                        </button>
                      ) : null
                    })}
                </section>
              </>
            )}

            {crossLinks.length > 0 && (
              <div className="leibniz-cross-links">
                <small>CONEXIONES CON OTROS MAPAS</small>
                {crossLinks.map((link, index) => {
                  const targetMap = leibnizMaps.find(
                    (item) => item.id === link.mapId,
                  )
                  const targetNode = targetMap?.nodes.find(
                    (node) => node.id === link.nodeId,
                  )

                  return (
                    <button
                      key={`${link.mapId}-${link.nodeId}-${index}`}
                      type="button"
                      onClick={() => jumpTo(link.mapId, link.nodeId)}
                    >
                      <span>
                        Mapa {targetMap?.roman || '?'} · {targetNode?.title || link.nodeId}
                      </span>
                      <strong>{link.label}</strong>
                      <p>{link.reason}</p>
                    </button>
                  )
                })}
              </div>
            )}

          </aside>
        </div>

        {map.id === 'caesar' && (
          <CaesarLogicPanel
            selectedId={selectedId}
            setSelectedId={(id) => {
              setSelectedId(id)
              setSelectedEdge(null)
            }}
          />
        )}

        {map.id === 'monad' && (
          <MonadTransitionPanel
            selectedId={selectedId}
            setSelectedId={(id) => {
              setSelectedId(id)
              setSelectedEdge(null)
            }}
          />
        )}

        {map.id === 'inside' && (
          <InsideMonadPanel
            selectedId={selectedId}
            setSelectedId={(id) => {
              setSelectedId(id)
              setSelectedEdge(null)
            }}
          />
        )}

        {map.id === 'perspectives' && (
          <PerspectivesPanel
            selectedId={selectedId}
            setSelectedId={(id) => {
              setSelectedId(id)
              setSelectedEdge(null)
            }}
          />
        )}

      </section>

      <MapsCompletionNote />

    </main>
  )
}

export default function LeibnizMaps() {
  return (
    <ReactFlowProvider>
      <Content />
    </ReactFlowProvider>
  )
}
