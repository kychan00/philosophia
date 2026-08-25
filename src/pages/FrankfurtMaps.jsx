import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  Background, Controls, MarkerType, MiniMap, ReactFlow,
  ReactFlowProvider, useEdgesState, useNodesState, useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { frankfurtMaps } from '../data/frankfurtMaps'

const guides = {
  critical: [
    { nodeId: 'society', title: '1. Empiece por el objeto', question: '¿Qué cambia cuando la sociedad deja de ser una suma de hechos y pasa a pensarse como estructura?' },
    { nodeId: 'totality', title: '2. Introduzca la totalidad', question: '¿Por qué economía, historia, psicología y cultura no pueden estudiarse como mundos separados?' },
    { nodeId: 'contradiction', title: '3. Busque contradicciones', question: '¿Qué vuelve crítica a una teoría de la sociedad y no simplemente descriptiva?' },
    { nodeId: 'critique', title: '4. Defina la crítica', question: '¿Por qué criticar no significa sólo reparar problemas secundarios?' },
    { nodeId: 'other', title: '5. Piense lo que todavía no existe', question: '¿Por qué imaginar una sociedad distinta permite comprender mejor la existente?' },
    { nodeId: 'transformation', title: '6. Llegue a la praxis', question: '¿Por qué la teoría crítica conserva una orientación práctica y transformadora?' },
  ],
  negative: [
    { nodeId: 'hegel', title: '1. Parta del Hegel dialéctico', question: '¿Qué conserva Adorno de Hegel y qué rechaza del Hegel sistemático?' },
    { nodeId: 'identity', title: '2. Identifique la ilusión', question: '¿Qué problema hay en afirmar que realidad y pensamiento pueden coincidir plenamente?' },
    { nodeId: 'nonidentity', title: '3. Introduzca la no-identidad', question: '¿Qué queda protegido cuando el objeto no se reduce enteramente al concepto?' },
    { nodeId: 'negative', title: '4. Formule la dialéctica negativa', question: '¿Por qué la negación no culmina en una nueva síntesis reconciliadora?' },
    { nodeId: 'singular', title: '5. Mire lo singular', question: '¿Por qué lo individual y diferente son filosóficamente decisivos para Adorno?' },
    { nodeId: 'object', title: '6. Dé primacía al objeto', question: '¿Qué significa permitir que la realidad corrija nuestros esquemas conceptuales?' },
    { nodeId: 'criticalsociety', title: '7. Vuelva a la sociedad', question: '¿Cómo se transforma esta epistemología negativa en crítica social?' },
  ],

  enlightenment: [
    { nodeId: 'enlightenment', title: '1. Empiece por la promesa ilustrada', question: '¿Qué quería conseguir la razón al liberar a los hombres del miedo?' },
    { nodeId: 'rationalize', title: '2. Observe la operación racionalizadora', question: '¿Qué ocurre cuando comprender el mundo significa volverlo calculable y manipulable?' },
    { nodeId: 'domination', title: '3. Detecte el giro hacia el dominio', question: '¿Por qué conocer la naturaleza termina asociado a someterla?' },
    { nodeId: 'technique', title: '4. Distinga técnica y crítica', question: '¿Qué pierde la razón cuando una teoría vale principalmente por su funcionalidad?' },
    { nodeId: 'instrumental', title: '5. Formule la razón instrumental', question: '¿Qué puede hacer una razón que calcula medios pero ya no juzga los fines?' },
    { nodeId: 'administered', title: '6. Pase a la sociedad administrada', question: '¿Cómo se traduce una razón instrumental en formas sociales de organización y control?' },
    { nodeId: 'productivity', title: '7. Abra la contradicción del progreso', question: '¿Cómo puede el mismo progreso crear posibilidades de justicia y fortalecer estructuras de dominio?' },
    { nodeId: 'culture', title: '8. Entre a la industria cultural', question: '¿Por qué los medios de masas son un mecanismo central de la sociedad tecnológica?' },
    { nodeId: 'ideology', title: '9. Termine en la inversión de la Ilustración', question: '¿Cómo una razón que prometía autonomía termina produciendo aceptación de fines establecidos por otros?' },
  ],

  eclipse: [
    { nodeId: 'objective', title: '1. Razón objetiva', question: '¿Qué puede discutir una razón que no se limita a calcular medios?' },
    { nodeId: 'subjective', title: '2. Razón subjetiva', question: '¿Qué cambia cuando la razón se define como capacidad de cálculo?' },
    { nodeId: 'calculation', title: '3. Eficacia instrumental', question: '¿Cómo puede una razón ser técnicamente eficaz y filosóficamente impotente?' },
    { nodeId: 'heteronomy', title: '4. Fines heterónomos', question: 'Si la razón no decide los fines, ¿de dónde vienen los objetivos que organiza?' },
    { nodeId: 'ancilla', title: '5. Ancilla administrationis', question: '¿Cómo se vuelve la razón servidora de la administración?' },
    { nodeId: 'denunciation', title: '6. Filosofía como denuncia', question: '¿Por qué la respuesta no consiste simplemente en restaurar viejas metafísicas?' },
    { nodeId: 'other', title: '7. Lo completamente otro', question: '¿Qué esperanza queda cuando ningún orden histórico puede absolutizarse?' },
  ],
  emancipation: [
    { nodeId: 'freud', title: '1. Freud y represión', question: '¿Por qué la civilización aparece ligada a renuncia pulsional?' },
    { nodeId: 'historical', title: '2. Represión histórica', question: '¿Qué cambia si la represión concreta no es eterna?' },
    { nodeId: 'onedimensional', title: '3. Sociedad unidimensional', question: '¿Cómo se neutraliza la oposición integrando necesidades y aspiraciones?' },
    { nodeId: 'refusal', title: '4. Gran Rechazo', question: '¿Por qué la negación conserva una función emancipadora sin un programa cerrado del futuro?' },
    { nodeId: 'freedom', title: '5. Fromm y libertad', question: '¿Por qué la libertad también puede sentirse como carga?' },
    { nodeId: 'conformism', title: '6. Conformismo', question: '¿Cómo el miedo a la libertad puede convertirse en obediencia?' },
    { nodeId: 'disobedience', title: '7. Desobediencia', question: '¿Por qué decir no puede ser condición de autonomía?' },
    { nodeId: 'being', title: '8. Ser frente a tener', question: '¿Qué sujeto aparece cuando la identidad ya no depende de posesión y consumo?' },
    { nodeId: 'citybeing', title: '9. Ciudad del Ser', question: '¿Qué horizonte emancipador propone Fromm?' },
  ],
  science: [
    { nodeId: 'popper', title: '1. Popper: problemas', question: '¿Por qué la ciencia empieza con problemas y no con certezas?' },
    { nodeId: 'conjectures', title: '2. Conjeturas', question: '¿Qué gana una teoría al ser falible y criticable?' },
    { nodeId: 'adorno', title: '3. Adorno: crítica material', question: '¿Por qué también hay que criticar la sociedad y no sólo las teorías?' },
    { nodeId: 'facts', title: '4. Los hechos no son lo último', question: '¿Por qué un hecho social no es un dato autosuficiente?' },
    { nodeId: 'whole', title: '5. Totalidad', question: '¿Qué añade la totalidad a una colección de observaciones aisladas?' },
    { nodeId: 'different', title: '6. Dos sentidos de crítica', question: '¿En qué coinciden y divergen Popper y Adorno?' },
    { nodeId: 'technicalinterest', title: '7. Habermas: interés técnico', question: '¿Qué se pierde cuando la ciencia social queda reducida a técnica?' },
    { nodeId: 'factsdecisions', title: '8. Hechos y decisiones', question: '¿Por qué Habermas quiere reabrir la discusión racional de normas?' },
    { nodeId: 'albert', title: '9. Albert: objeción', question: '¿Qué riesgo existe al presentar normas como conocimiento?' },
    { nodeId: 'openquestion', title: '10. Tensión final', question: '¿Cómo discutir racionalmente fines sin volverlos verdades indiscutibles?' },
  ],

}

const edgeExplanations = {
  critical: {
    'society|totality': 'La Escuela de Frankfurt rechaza tratar la sociedad como una colección de sectores independientes. Su objeto es la sociedad como un todo y las relaciones que conectan sus ámbitos económicos, históricos, psicológicos y culturales.',
    'society|sectorial': 'La sociedad puede dividirse analíticamente en sectores, pero convertir esa división en el método definitivo hace perder de vista las relaciones estructurales entre ellos.',
    'totality|contradiction': 'Pensar el todo permite detectar contradicciones que no aparecen cuando cada fenómeno se observa aisladamente.',
    'sectorial|facts': 'La investigación sectorial tiende a trabajar con hechos acotados. El problema surge cuando esos hechos se toman como datos últimos y se olvida la sociedad que los produce.',
    'contradiction|critique': 'La contradicción objetiva convierte la sociedad en objeto de crítica: no basta registrarla, hay que preguntar qué estructura la genera y reproduce.',
    'facts|administration': 'Cuando la ciencia social se reduce a hechos observables y técnicas parciales, puede convertirse en herramienta para administrar el orden existente en vez de interrogarlo.',
    'critique|other': 'La crítica necesita un contraste entre lo existente y lo posible. Pensar una sociedad distinta permite revelar como históricas y modificables relaciones que parecen naturales.',
    'other|transformation': 'La posibilidad de otro orden impide que la crítica quede en diagnóstico puro: orienta la comprensión hacia transformación, libertad y reducción de la explotación.',
    'administration|resignation': 'Si la sociología abandona toda teoría de la sociedad y se limita a resolver problemas técnicos del sistema, la Escuela de Frankfurt interpreta esa renuncia como resignación.',
    'resignation|other': 'La resignación acepta lo existente como horizonte definitivo; el pensamiento crítico mantiene abierta la posibilidad de que la sociedad pueda ser de otro modo.',
  },
  negative: {
    'hegel|identity': 'Adorno conserva el movimiento crítico de la dialéctica hegeliana, pero somete a crítica la tendencia del idealismo a hacer coincidir razón y realidad bajo el dominio del concepto.',
    'hegel|system': 'Reale y Antiseri presentan explícitamente a Adorno escogiendo al Hegel dialéctico contra el Hegel sistemático: le interesa el potencial negativo, no la clausura del sistema.',
    'identity|nonidentity': 'La no-identidad niega que el ser corresponda estrictamente al pensamiento. La realidad contiene más de lo que nuestras categorías pueden capturar.',
    'system|conciliation': 'Un sistema cerrado busca integrar las diferencias en una totalidad coherente. Para Adorno, esa conciliación conceptual puede silenciar contradicción, sufrimiento y diferencia.',
    'conciliation|negative': 'La dialéctica negativa rechaza culminar en una síntesis que pacifique las tensiones. La negatividad debe conservar aquello que no encaja.',
    'nonidentity|negative': 'La dialéctica se vuelve negativa porque parte de una no-coincidencia persistente entre concepto y objeto. Su función es hacer hablar a lo que la identidad conceptual reprime.',
    'negative|singular': 'Al romper la dominación de lo idéntico, la dialéctica negativa presta atención a lo individual y diferente. Lo singular siempre excede su determinación universal.',
    'negative|object': 'La crítica de la identidad se dirige hacia el objeto: el pensamiento debe reconocer la resistencia de lo real frente a las categorías con que intenta organizarlo.',
    'object|materialist': 'Reale y Antiseri subrayan que, para Adorno, con la primacía del objeto la dialéctica se vuelve materialista: la realidad ya no queda subordinada a una armonía ideal.',
    'singular|criticalsociety': 'La defensa de lo singular funciona también políticamente: resiste totalidades que convierten individuos y diferencias en elementos intercambiables o subordinados.',
    'materialist|criticalsociety': 'La dialéctica materialista deja que las contradicciones reales desmientan los esquemas cerrados; por eso puede convertirse en crítica de la cultura y de la sociedad.',
  },

  enlightenment: {
    'enlightenment|rationalize': 'Adorno y Horkheimer entienden la Ilustración como un proceso histórico amplio cuya estrategia fundamental consiste en racionalizar el mundo para liberarlo de miedo, mito e incertidumbre.',
    'rationalize|domination': 'Volver el mundo calculable y manipulable hace posible intervenir sobre la naturaleza. La racionalización queda así vinculada a una lógica de dominio.',
    'domination|technique': 'Cuando el conocimiento se orienta ante todo al control, el saber tiende a medirse por su eficacia técnica y no por su capacidad crítica o por la verdad de sus fines.',
    'technique|instrumental': 'Si el saber vale por su funcionalidad, la razón queda reducida a encontrar y perfeccionar medios. Ya no decide racionalmente qué fines merecen ser perseguidos.',
    'instrumental|administered': 'Una razón centrada en cálculo, eficiencia y medios encaja con una sociedad organizada mediante aparatos técnicos, económicos y burocráticos: la sociedad administrada.',
    'administered|productivity': 'La administración tecnológica aumenta la productividad y la capacidad material de la sociedad. Frankfurt no niega este progreso: analiza su contradicción.',
    'productivity|possibility': 'Una mayor productividad podría generar las condiciones materiales de un mundo más justo. Éste es el potencial emancipador que la crítica se niega a olvidar.',
    'productivity|apparatus': 'El mismo aumento productivo puede concentrar poder en el aparato técnico y en los grupos que controlan sus recursos.',
    'apparatus|individual': 'Cuando el aparato gana una superioridad inmensa, el individuo pierde autonomía, imaginación e independencia de juicio y se vuelve crecientemente dirigible.',
    'administered|culture': 'La sociedad tecnológica necesita mecanismos capaces de organizar también valores, deseos, ocio y conducta. La industria cultural cumple esa función.',
    'culture|needs': 'Los medios de masas no se limitan a reflejar necesidades preexistentes: el texto sostiene que producen necesidades, modelos, valores y lenguaje.',
    'needs|uniformity': 'Cuando los mismos modelos deben circular para todos, los deseos, comportamientos y formas de expresión tienden a homogeneizarse.',
    'uniformity|passivity': 'La estandarización reduce el espacio de creatividad y acostumbra a recibir contenidos ya preparados, favoreciendo una subjetividad pasiva.',
    'passivity|ideology': 'La recepción pasiva facilita aceptar como propios fines definidos por el sistema. Por eso la industria cultural no sólo transmite ideología: se vuelve ella misma ideología.',
    'individual|ideology': 'El individuo debilitado frente al aparato encuentra ya organizados sus modelos de conducta, necesidades y diversiones, quedando guiado por estructuras externas.',
  },

  eclipse: {
    'objective|ends': 'La razón objetiva sirve como contraste porque permite preguntar racionalmente por verdad, bien y fines, no sólo por medios.',
    'subjective|calculation': 'La razón subjetiva se define por su eficacia formal: calcular probabilidades y coordinar medios adecuados a un objetivo.',
    'calculation|heteronomy': 'Si la razón sólo decide cómo lograr algo, deja sin responder quién decide qué debe lograrse; los fines llegan desde fuera.',
    'heteronomy|ancilla': 'Al aceptar fines heterónomos, la razón se convierte en servidora de objetivos que no ha podido juzgar críticamente.',
    'ancilla|dominate': 'Una razón reducida a instrumento puede optimizar procesos de dominio sobre hombres y naturaleza sin evaluar sus fines.',
    'dominate|individual': 'La administración generalizada encasilla al individuo y reduce su autonomía de juicio.',
    'ends|science': 'Una ciencia poderosa respecto de medios puede permanecer muda respecto de qué fines merecen ser perseguidos.',
    'science|denunciation': 'Ese silencio abre la tarea filosófica de denunciar la reducción instrumental de la razón.',
    'denunciation|noabsolute': 'La crítica también debe impedir que una teoría, Estado o política finita se convierta en absoluto.',
    'noabsolute|other': 'No absolutizar lo histórico mantiene abierta la esperanza negativa de que el mundo dado no sea la verdad última.',
    'other|solidarity': 'La esperanza de que la injusticia no tenga la última palabra se orienta hacia una solidaridad fundada en la finitud y el sufrimiento comunes.',
    'subjective|science': 'La reducción formal de la razón aparece en una ciencia eficaz sobre medios pero incapaz de fundamentar fines.',
  },
  emancipation: {
    'freud|reality': 'Marcuse parte de Freud: la civilización desplaza el principio de placer y lo somete al principio de realidad.',
    'reality|historical': 'Marcuse acepta el diagnóstico de la represión, pero rechaza tratar su forma concreta como una necesidad eterna.',
    'historical|nonrepressive': 'Si la represión es históricamente organizada, puede pensarse una civilización distinta y menos represiva.',
    'historical|onedimensional': 'Ese horizonte contrasta con la sociedad tecnológica que absorbe oposición y administra necesidades.',
    'onedimensional|needs': 'El aparato productivo llega a determinar necesidades, aspiraciones y actitudes socialmente requeridas.',
    'needs|comfortable': 'Cuando las necesidades integradas se satisfacen dentro del sistema, la dominación puede presentarse como libertad confortable.',
    'comfortable|outsiders': 'La integración no es total: permanecen grupos excluidos que revelan las condiciones intolerables del sistema.',
    'outsiders|refusal': 'La negativa a participar en un juego social considerado trucado encarna la negatividad del Gran Rechazo.',
    'freedom|isolation': 'La individuación libera, pero también deja al sujeto solo y responsable de sus propias decisiones.',
    'isolation|submission': 'El peso de la libertad puede llevar a buscar seguridad sometiéndose a una autoridad.',
    'isolation|conformism': 'Otra huida consiste en disolver la individualidad dentro del grupo y obedecer normas establecidas.',
    'conformism|disobedience': 'Fromm contrapone al conformismo la capacidad de dudar, criticar y decir no.',
    'submission|disobedience': 'Desobedecer rompe la relación en la que la autoridad piensa y decide por el sujeto.',
    'disobedience|being': 'Independencia, libertad y razón crítica son condiciones de la modalidad del ser.',
    'having|being': 'Fromm opone una identidad definida por posesión y consumo a una existencia activa y productiva.',
    'being|citybeing': 'La Ciudad del Ser proyecta socialmente una forma de vida orientada por libertad, solidaridad y desarrollo humano.',
    'refusal|disobedience': 'Gran Rechazo y desobediencia no son idénticos, pero comparten la estructura de negar una adaptación presentada como inevitable.',
    'nonrepressive|citybeing': 'Marcuse y Fromm ofrecen horizontes distintos que coinciden en negar que el orden presente agote las posibilidades humanas.',
  },
  science: {
    'popper|conjectures': 'Para Popper, la investigación parte de problemas y propone soluciones tentativas: conjeturas, no verdades finales.',
    'conjectures|falsifiability': 'Las conjeturas deben poder someterse a crítica y control público; ahí se juega su objetividad.',
    'falsifiability|partial': 'La criticabilidad mantiene las teorías como falibles y parciales, nunca como capturas definitivas de la realidad.',
    'adorno|facts': 'Adorno comparte la crítica, pero sostiene que también los hechos sociales deben ser criticados porque están mediados por la sociedad.',
    'facts|whole': 'Un hecho aislado necesita situarse dentro de las relaciones históricas, económicas y sociales que le dan sentido.',
    'whole|contradictory': 'La totalidad no armoniza la sociedad: permite hacer visible su estructura contradictoria.',
    'partial|different': 'En Popper, la crítica examina soluciones y teorías falibles.',
    'contradictory|different': 'En Adorno, la crítica debe dirigirse además materialmente contra las contradicciones de la sociedad.',
    'different|technicalinterest': 'La disputa reaparece en Habermas, que teme una ciencia social reducida a interés puramente técnico.',
    'technicalinterest|means': 'Cuando domina un interés técnico, la ciencia se concentra en medios eficaces y deja fuera los fines.',
    'means|factsdecisions': 'Si la ciencia sólo habla de medios, los fines quedan relegados al ámbito de la decisión.',
    'factsdecisions|normative': 'Habermas quiere que los problemas normativos permanezcan abiertos al debate racional.',
    'means|albert': 'Albert recuerda el límite lógico: de una descripción no se deriva automáticamente una prescripción.',
    'albert|decision': 'Albert advierte contra disfrazar decisiones normativas como si fueran conocimiento objetivo.',
    'normative|openquestion': 'Habermas mantiene la exigencia de discutir racionalmente normas y fines.',
    'decision|openquestion': 'Albert obliga a mantener esa discusión sin presentar los fines como conclusiones lógicamente deducidas de hechos.',
  },

}

const nodeStyle = {
  width: 230, borderRadius: 5, border: '1px solid rgba(62,42,39,.28)',
  background: '#e9e1d5', color: '#211d1b',
  boxShadow: '0 12px 26px rgba(36,23,22,.08)',
  fontFamily: 'Georgia, serif', padding: 0,
}

const makeNodes = (map) => map.nodes.map((node) => ({
  id: node.id, position: node.position,
  data: { detail: node, label: <div className="frankfurt-node-label"><span>{node.tag}</span><strong>{node.title}</strong></div> },
  style: nodeStyle,
}))

const makeEdges = (map) => map.edges.map(([source, target, label], index) => ({
  id: `${map.id}-${source}-${target}-${index}`, source, target, label,
  type: 'smoothstep',
  markerEnd: { type: MarkerType.ArrowClosed, width: 18, height: 18, color: '#833b44' },
  style: { stroke: '#833b44', strokeWidth: 1.5 },
  labelStyle: { fill: '#553c39', fontSize: 10, fontFamily: 'Georgia, serif' },
  labelBgStyle: { fill: '#e8e0d4', fillOpacity: 0.92 },
}))

function Canvas({ map, selectedId, setSelectedId, selectedEdge, setSelectedEdge }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(makeNodes(map))
  const [edges, setEdges, onEdgesChange] = useEdgesState(makeEdges(map))
  const { fitView, setCenter, getNode } = useReactFlow()

  useEffect(() => {
    const node = getNode(selectedId)
    if (!node) return
    const width = node.measured?.width || 230
    const height = node.measured?.height || 80
    setCenter(node.position.x + width / 2, node.position.y + height / 2, { zoom: 0.95, duration: 420 })
  }, [getNode, selectedId, setCenter])

  return (
    <div className="frankfurt-canvas-shell">
      <div className="frankfurt-canvas-tools">
        <span>Arrastre el lienzo · zoom · mueva nodos · pulse las flechas</span>
        <button type="button" onClick={() => {
          setNodes(makeNodes(map)); setEdges(makeEdges(map))
          setSelectedId(map.nodes[0]?.id || null); setSelectedEdge(null)
          requestAnimationFrame(() => fitView({ padding: 0.18, duration: 300 }))
        }}>Restablecer</button>
      </div>
      <div className="frankfurt-canvas">
        <ReactFlow
          nodes={nodes.map((node) => ({ ...node, className: node.id === selectedId ? 'frankfurt-node-selected' : '' }))}
          edges={edges.map((edge) => ({ ...edge, className: selectedEdge?.source === edge.source && selectedEdge?.target === edge.target ? 'frankfurt-edge-selected' : '' }))}
          onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}
          onNodeClick={(_, node) => { setSelectedId(node.id); setSelectedEdge(null) }}
          onEdgeClick={(_, edge) => setSelectedEdge({ source: edge.source, target: edge.target, label: edge.label })}
          fitView fitViewOptions={{ padding: 0.18 }} minZoom={0.2} maxZoom={1.9}
          nodesConnectable={false} panOnDrag nodesDraggable
        >
          <Background gap={24} size={1} color="rgba(52,37,34,.11)" />
          <MiniMap pannable zoomable nodeColor={() => '#b88f90'} maskColor="rgba(232,224,212,.78)" />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  )
}

function NegativeLogicPanel({ setSelectedId }) {
  return (
    <div className="frankfurt-negative-logic">
      <div className="frankfurt-negative-head">
        <span>Dialectica negativa</span>
        <h3>La crítica de la identidad</h3>
        <p>El mapa puede leerse como dos arquitecturas opuestas del pensamiento.</p>
      </div>
      <div className="frankfurt-negative-columns">
        <div className="closed">
          <span>CIERRE DEL SISTEMA</span>
          <button type="button" onClick={() => setSelectedId('identity')}>identidad pensamiento = realidad</button>
          <b>↓</b>
          <button type="button" onClick={() => setSelectedId('system')}>sistema cerrado</button>
          <b>↓</b>
          <button type="button" onClick={() => setSelectedId('conciliation')}>síntesis / conciliación</button>
        </div>
        <strong>≠</strong>
        <div className="negative">
          <span>DIALÉCTICA NEGATIVA</span>
          <button type="button" onClick={() => setSelectedId('nonidentity')}>no-identidad</button>
          <b>↓</b>
          <button type="button" onClick={() => setSelectedId('singular')}>singular / diferente</button>
          <b>↓</b>
          <button type="button" onClick={() => setSelectedId('object')}>primacía del objeto</button>
        </div>
      </div>
      <div className="frankfurt-negative-formula">
        <span>Fórmula de estudio</span>
        <strong>El concepto no agota al objeto.</strong>
        <p>La tarea de la crítica es mantener visible lo que una identidad conceptual demasiado rápida deja fuera.</p>
      </div>
      <div className="frankfurt-critical-question">
        <span>La pregunta que queda abierta</span>
        <strong>Si la razón puede dominar la realidad mediante conceptos y sistemas, ¿puede también dominarla mediante técnica, cálculo y administración?</strong>
        <p>Ésta será la entrada del Mapa III: Adorno + Horkheimer y la Dialéctica de la Ilustración.</p>
      </div>
    </div>
  )
}


function EnlightenmentPanel({ setSelectedId }) {
  return (
    <div className="frankfurt-enlightenment-panel">
      <div className="frankfurt-enlightenment-head">
        <span>Dialectica illuminationis</span>
        <h3>La paradoja del progreso</h3>
        <p>
          El problema no es que la razón, la técnica o la productividad sean
          malas en sí mismas. El problema aparece cuando su potencial
          emancipador queda subordinado a una racionalidad que sólo sabe
          calcular medios para fines ya establecidos.
        </p>
      </div>

      <div className="frankfurt-enlightenment-core">
        <div>
          <span>PROMESA</span>
          <button type="button" onClick={() => setSelectedId('enlightenment')}>
            quitar el miedo
          </button>
          <b>↓</b>
          <button type="button" onClick={() => setSelectedId('rationalize')}>
            racionalizar
          </button>
          <b>↓</b>
          <button type="button" onClick={() => setSelectedId('possibility')}>
            posibilidad de un mundo más justo
          </button>
        </div>

        <strong>↯</strong>

        <div>
          <span>INVERSIÓN</span>
          <button type="button" onClick={() => setSelectedId('domination')}>
            dominio
          </button>
          <b>↓</b>
          <button type="button" onClick={() => setSelectedId('instrumental')}>
            razón instrumental
          </button>
          <b>↓</b>
          <button type="button" onClick={() => setSelectedId('administered')}>
            sociedad administrada
          </button>
        </div>
      </div>

      <div className="frankfurt-progress-paradox">
        <article>
          <span>MISMO PROGRESO</span>
          <strong>crea posibilidades materiales de justicia</strong>
          <button type="button" onClick={() => setSelectedId('possibility')}>
            abrir potencial emancipador →
          </button>
        </article>
        <b>Y AL MISMO TIEMPO</b>
        <article>
          <span>MISMO PROGRESO</span>
          <strong>fortalece aparatos capaces de dominar al individuo</strong>
          <button type="button" onClick={() => setSelectedId('apparatus')}>
            abrir aparato técnico →
          </button>
        </article>
      </div>

      <div className="frankfurt-culture-chain">
        <span>Industria cultural</span>
        <div>
          <button type="button" onClick={() => setSelectedId('culture')}>medios de masas</button>
          <b>→</b>
          <button type="button" onClick={() => setSelectedId('needs')}>valores / necesidades</button>
          <b>→</b>
          <button type="button" onClick={() => setSelectedId('uniformity')}>uniformidad</button>
          <b>→</b>
          <button type="button" onClick={() => setSelectedId('passivity')}>pasividad</button>
          <b>→</b>
          <button type="button" onClick={() => setSelectedId('ideology')}>aceptación</button>
        </div>
      </div>

      <div className="frankfurt-critical-question">
        <span>La pregunta que queda abierta</span>
        <strong>
          Si el problema es que la razón ya no puede juzgar los fines,
          ¿qué diferencia hay entre una razón objetiva y una razón puramente instrumental?
        </strong>
        <p>Ésta será la entrada del Mapa IV: Horkheimer y el eclipse de la razón.</p>
      </div>
    </div>
  )
}


function FrankfurtLatePhasePanel({ mapId, setSelectedId }) {
  const configs = {
    eclipse: {
      eyebrow: 'Mapa IV · Eclipsis rationis',
      title: 'Medios eficaces, fines mudos',
      intro: 'Horkheimer pregunta qué queda de la razón cuando sabe perfectamente cómo hacer algo, pero ya no puede discutir racionalmente para qué debe hacerse.',
      left: ['objective', 'Razón objetiva', '¿qué fines son razonables?'],
      right: ['subjective', 'Razón subjetiva', '¿qué medio funciona mejor?'],
      chain: [
        ['calculation', 'cálculo'],
        ['heteronomy', 'fines dados'],
        ['ancilla', 'administración'],
        ['dominate', 'dominio'],
        ['individual', 'individuo encasillado'],
      ],
      closing: ['other', 'Lo completamente otro', 'Que la injusticia no sea la última palabra.'],
    },
    emancipation: {
      eyebrow: 'Mapa V · Subiectum et emancipatio',
      title: 'La sociedad también forma deseos, miedo e identidad',
      intro: 'Marcuse y Fromm desplazan la crítica hacia el sujeto: cómo se interioriza la dominación y cómo puede conservarse la capacidad de negación.',
      left: ['refusal', 'Marcuse', 'Gran Rechazo'],
      right: ['disobedience', 'Fromm', 'Desobediencia'],
      chain: [
        ['freud', 'represión'],
        ['historical', 'historicidad'],
        ['onedimensional', 'unidimensionalidad'],
        ['conformism', 'conformismo'],
        ['being', 'ser'],
      ],
      closing: ['citybeing', 'Ciudad del Ser', 'Un horizonte de libertad, razón crítica y solidaridad.'],
    },
    science: {
      eyebrow: 'Mapa VI · Disputatio',
      title: '¿Qué debe significar “crítica” en las ciencias sociales?',
      intro: 'Popper y Adorno comparten la exigencia crítica, pero difieren en su alcance; Habermas y Albert prolongan la disputa al terreno de hechos, normas y fines.',
      left: ['popper', 'Popper', 'criticar teorías falibles'],
      right: ['adorno', 'Adorno', 'criticar también la sociedad'],
      chain: [
        ['facts', 'hechos mediados'],
        ['whole', 'totalidad'],
        ['technicalinterest', 'interés técnico'],
        ['factsdecisions', 'hechos / decisiones'],
        ['openquestion', 'fines en debate'],
      ],
      closing: ['openquestion', 'Tensión final', 'Discutir racionalmente fines sin convertir decisiones en dogmas.'],
    },
  }

  const c = configs[mapId]
  if (!c) return null

  return (
    <div className="frankfurt-late-panel">
      <div className="frankfurt-late-head">
        <span>{c.eyebrow}</span>
        <h3>{c.title}</h3>
        <p>{c.intro}</p>
      </div>

      <div className="frankfurt-late-contrast">
        <button type="button" onClick={() => setSelectedId(c.left[0])}>
          <span>{c.left[1]}</span>
          <strong>{c.left[2]}</strong>
        </button>
        <b>↔</b>
        <button type="button" onClick={() => setSelectedId(c.right[0])}>
          <span>{c.right[1]}</span>
          <strong>{c.right[2]}</strong>
        </button>
      </div>

      <div className="frankfurt-late-chain">
        {c.chain.map(([id, label], index) => (
          <div key={id}>
            <button type="button" onClick={() => setSelectedId(id)}>{label}</button>
            {index < c.chain.length - 1 && <b>→</b>}
          </div>
        ))}
      </div>

      <button
        type="button"
        className="frankfurt-late-closing"
        onClick={() => setSelectedId(c.closing[0])}
      >
        <span>{c.closing[1]}</span>
        <strong>{c.closing[2]}</strong>
      </button>
    </div>
  )
}

function Content() {
  const [mapId, setMapId] = useState(frankfurtMaps[0].id)
  const map = useMemo(() => frankfurtMaps.find((item) => item.id === mapId) || frankfurtMaps[0], [mapId])
  const [selectedId, setSelectedId] = useState(map.nodes[0].id)
  const [selectedEdge, setSelectedEdge] = useState(null)
  const [guideIndex, setGuideIndex] = useState(0)

  const selected = map.nodes.find((node) => node.id === selectedId) || map.nodes[0]
  const guide = guides[map.id] || guides.critical
  const guideStep = guide[guideIndex]
  const edgeExplanation = selectedEdge
    ? edgeExplanations[map.id]?.[`${selectedEdge.source}|${selectedEdge.target}`] ||
      `Esta conexión expresa la relación «${selectedEdge.label}» entre los dos conceptos seleccionados dentro del argumento del mapa.`
    : null
  const guideQuestion = guide.find((step) => step.nodeId === selected.id)?.question || '¿Qué función cumple este concepto dentro del diagnóstico crítico?'

  const choose = (id) => {
    const next = frankfurtMaps.find((item) => item.id === id)
    if (!next) return
    setMapId(id); setSelectedId(next.nodes[0].id); setSelectedEdge(null); setGuideIndex(0)
  }

  const goGuide = (index) => {
    const safe = Math.min(Math.max(index, 0), guide.length - 1)
    setGuideIndex(safe); setSelectedId(guide[safe].nodeId); setSelectedEdge(null)
  }

  return (
    <main className="frankfurt-maps-page">
      <nav className="frankfurt-maps-nav">
        <Link to="/tareas/teoria-critica/escuela-de-frankfurt">← Tarea</Link>
        <Link to="/" className="frankfurt-maps-brand">Φ · Philosophia</Link>
        <Link to="/tareas/teoria-critica/escuela-de-frankfurt/sistema">Sistema transversal →</Link>
      </nav>

      <header className="frankfurt-maps-hero">
        <p>Cartographia critica · Reale y Antiseri</p>
        <h1>Escuela de <em>Frankfurt</em></h1>
        <blockquote>Diagnóstico y emancipación: cada conexión debe explicar qué problema abre y qué crítica hace posible.</blockquote>
      </header>


      <section className="frankfurt-study-gateway">
        <div className="frankfurt-study-gateway-head">
          <span>NEXUS · STUDIUM</span>
          <div>
            <h2>Dos formas de ir más allá de los mapas</h2>
            <p>
              Use el sistema transversal para ver toda la arquitectura crítica
              en un solo lienzo, o entre al Studium para estudiar, practicar y
              comprobar que puede reconstruir las relaciones sin depender del mapa.
            </p>
          </div>
        </div>

        <div className="frankfurt-study-gateway-cards">
          <Link
            to="/tareas/teoria-critica/escuela-de-frankfurt/sistema"
            className="frankfurt-study-gateway-card nexus"
          >
            <div className="frankfurt-study-gateway-card-top">
              <span>01</span>
              <small>NEXUS CRITICUS</small>
            </div>

            <h3>Sistema transversal</h3>

            <p>
              Conecta los seis mapas en una sola arquitectura:
              totalidad, contradicción, no-identidad, razón instrumental,
              sociedad administrada, subjetividad, ciencia y emancipación.
            </p>

            <div className="frankfurt-study-gateway-tags">
              <span>Mapa global</span>
              <span>Relaciones cruzadas</span>
              <span>Flechas explicadas</span>
            </div>

            <strong>Abrir sistema transversal →</strong>
          </Link>

          <Link
            to="/tareas/teoria-critica/escuela-de-frankfurt/studium"
            className="frankfurt-study-gateway-card studium"
          >
            <div className="frankfurt-study-gateway-card-top">
              <span>02</span>
              <small>STUDIUM CRITICUM</small>
            </div>

            <h3>Studium</h3>

            <p>
              Pase del reconocimiento visual a la comprensión:
              módulos guiados, progreso, preguntas relacionales,
              respuestas razonadas y autoevaluación.
            </p>

            <div className="frankfurt-study-gateway-tags">
              <span>Lectura guiada</span>
              <span>Progreso</span>
              <span>Autoevaluación</span>
            </div>

            <strong>Abrir Studium →</strong>
          </Link>
        </div>
      </section>

      <div className="frankfurt-map-tabs">
        {frankfurtMaps.map((item) => (
          <button key={item.id} type="button" className={item.id === mapId ? 'active' : ''} onClick={() => choose(item.id)}>
            <span>{item.roman}</span><strong>{item.title}</strong><small>{item.subtitle}</small>
          </button>
        ))}
      </div>

      <section className="frankfurt-map-main">
        <div className="frankfurt-map-title"><span>{map.roman}</span><div><p>{map.subtitle}</p><h2>{map.title}</h2></div></div>
        <p className="frankfurt-map-thesis">{map.thesis}</p>

        <div className="frankfurt-guide">
          <div><span>Ruta guiada · Mapa {map.roman}</span><strong>{guideStep.title}</strong><p>{guideStep.question}</p></div>
          <div className="frankfurt-guide-controls">
            <button type="button" disabled={guideIndex === 0} onClick={() => goGuide(guideIndex - 1)}>← Anterior</button>
            <div>{guide.map((step, index) => <button key={step.nodeId} type="button" className={index === guideIndex ? 'active' : ''} onClick={() => goGuide(index)}>{index + 1}</button>)}</div>
            <button type="button" disabled={guideIndex === guide.length - 1} onClick={() => goGuide(guideIndex + 1)}>Siguiente →</button>
          </div>
        </div>

        <div className="frankfurt-workspace">
          <Canvas key={map.id} map={map} selectedId={selectedId} setSelectedId={setSelectedId} selectedEdge={selectedEdge} setSelectedEdge={setSelectedEdge} />
          <aside className="frankfurt-node-detail">
            {selectedEdge && edgeExplanation ? (
              <><p>Relatio critica</p><h3>{selectedEdge.label}</h3><span>¿Por qué existe esta flecha?</span><p className="body">{edgeExplanation}</p><button type="button" className="frankfurt-return-node" onClick={() => setSelectedEdge(null)}>← Volver al nodo</button></>
            ) : (
              <><p>Nodus apertus</p><h3>{selected.title}</h3><span>{selected.tag}</span><p className="body">{selected.detail}</p><div><small>FUENTE</small><strong>{selected.source}</strong></div><div className="frankfurt-node-question"><small>PREGUNTA DE ESTUDIO</small><strong>{guideQuestion}</strong></div><section><small>CONEXIONES DIRECTAS</small>{map.edges.filter(([source,target]) => source === selected.id || target === selected.id).map(([source,target,label],index) => { const otherId = source === selected.id ? target : source; const other = map.nodes.find((node) => node.id === otherId); return other ? <button key={`${otherId}-${index}`} type="button" onClick={() => { setSelectedId(otherId); setSelectedEdge(null) }}><span>{label}</span>{other.title} →</button> : null })}</section></>
            )}
          </aside>
        </div>

        {map.id === 'negative' && <NegativeLogicPanel setSelectedId={(id) => { setSelectedId(id); setSelectedEdge(null) }} />}

        {map.id === 'enlightenment' && (
          <EnlightenmentPanel
            setSelectedId={(id) => {
              setSelectedId(id)
              setSelectedEdge(null)
            }}
          />
        )}


        <FrankfurtLatePhasePanel
          mapId={map.id}
          setSelectedId={(id) => {
            setSelectedId(id)
            setSelectedEdge(null)
          }}
        />

        {/* FRANKFURT PHASE 11 · MAPS FOOTER NAV */}
        <section className="frankfurt-route-footer">
          <div>
            <span>¿Ya recorrió los seis mapas?</span>
            <strong>Ahora lea las conexiones entre ellos.</strong>
          </div>
          <div className="frankfurt-route-footer-links">
            <Link to="/tareas/teoria-critica/escuela-de-frankfurt">← Arquitectura</Link>
            <Link to="/tareas/teoria-critica/escuela-de-frankfurt/sistema">Sistema transversal →</Link>
            <Link to="/tareas/teoria-critica/escuela-de-frankfurt/studium">Studium →</Link>
          </div>
        </section>

      </section>
    </main>
  )
}

export default function FrankfurtMaps() {
  return <ReactFlowProvider><Content /></ReactFlowProvider>
}
