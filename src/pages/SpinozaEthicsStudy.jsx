import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

import SpinozaNode from '../components/spinoza/SpinozaNode'
import {
  spinozaEdges,
  spinozaNodeById,
  spinozaNodes,
  spinozaRoutes,
} from '../data/spinozaEthics1Prototype'

const nodeTypes = {
  definition: SpinozaNode,
  axiom: SpinozaNode,
  proposition: SpinozaNode,
  core: SpinozaNode,
  appendix: SpinozaNode,
}

function nodeSetForSelection(selectedId) {
  if (!selectedId) return new Set()
  const set = new Set([selectedId])

  spinozaEdges.forEach((edge) => {
    if (edge.source === selectedId) set.add(edge.target)
    if (edge.target === selectedId) set.add(edge.source)
  })

  return set
}

function StudyCanvas() {
  const [route, setRoute] = useState('all')
  const [selectedId, setSelectedId] = useState('E1P14')
  const [history, setHistory] = useState(['E1P14'])
  const { fitView, setCenter } = useReactFlow()

  const selectionSet = useMemo(
    () => nodeSetForSelection(selectedId),
    [selectedId],
  )

  const nodes = useMemo(
    () =>
      spinozaNodes.map((node) => {
        const routeMatches = route === 'all' || node.data.branch.includes(route)
        const selectionActive = Boolean(selectedId)
        const inSelection = selectionSet.has(node.id)

        return {
          ...node,
          draggable: false,
          data: {
            ...node.data,
            nodeType: node.type,
            dimmed: !routeMatches || (selectionActive && !inSelection),
            highlighted:
              routeMatches &&
              selectionActive &&
              inSelection &&
              node.id !== selectedId,
          },
        }
      }),
    [route, selectedId, selectionSet],
  )

  const edges = useMemo(
    () =>
      spinozaEdges.map((edge) => {
        const active =
          selectedId &&
          (edge.source === selectedId || edge.target === selectedId)

        const sourceNode = spinozaNodeById(edge.source)
        const targetNode = spinozaNodeById(edge.target)
        const sourceInRoute =
          route !== 'all' && sourceNode?.data.branch.includes(route)
        const targetInRoute =
          route !== 'all' && targetNode?.data.branch.includes(route)

        const routeVisible =
          route === 'all' || sourceInRoute || targetInRoute

        const routeActive =
          route !== 'all' && sourceInRoute && targetInRoute

        const stroke =
          active
            ? '#704840'
            : routeActive
              ? '#a37b24'
              : edge.relation === 'critical'
                ? 'rgba(112, 72, 64, .72)'
                : edge.relation === 'definition'
                  ? 'rgba(64, 86, 107, .55)'
                  : edge.relation === 'axiom'
                    ? 'rgba(163, 123, 36, .58)'
                    : 'rgba(50, 43, 35, .34)'

        const strokeWidth =
          active
            ? 4.2
            : routeActive
              ? 3.2
              : edge.relation === 'critical'
                ? 2
                : 1.15

        const opacity =
          !routeVisible
            ? 0.05
            : active || routeActive
              ? 1
              : 0.34

        return {
          ...edge,
          type: 'smoothstep',
          animated: false,
          style: {
            stroke,
            strokeWidth,
            opacity,
            filter: undefined,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: active ? 15 : routeActive ? 14 : 11,
            height: active ? 15 : routeActive ? 14 : 11,
            color: stroke,
          },
          className: [
            'spinoza-flow-edge',
            `spinoza-flow-edge--${edge.relation}`,
            active ? 'is-active' : '',
            routeActive ? 'is-route-active' : '',
            !routeVisible ? 'is-dimmed' : '',
          ].filter(Boolean).join(' '),
        }
      }),
    [route, selectedId],
  )

  const selected = spinozaNodeById(selectedId)

  const selectNode = useCallback(
    (node) => {
      setSelectedId(node.id)
      setHistory((current) => {
        if (current[current.length - 1] === node.id) return current
        return [...current.slice(-7), node.id]
      })

      setCenter(node.position.x + 110, node.position.y + 80, {
        zoom: 1.15,
        duration: 450,
      })
    },
    [setCenter],
  )

  const selectById = (id) => {
    const node = spinozaNodeById(id)
    if (node) selectNode(node)
  }

  const reset = useCallback(() => {
    setSelectedId(null)
    setRoute('all')
    setTimeout(() => fitView({ padding: 0.12, duration: 500 }), 0)
  }, [fitView])

  return (
    <div className="spinoza-study-shell">
      <nav className="spinoza-study-nav">
        <Link to="/tareas">← Tareas</Link>
        <Link to="/" className="spinoza-study-brand">Φ · Philosophia</Link>
        <span>Ethica I · De Deo</span>
      </nav>

      <header className="spinoza-study-hero">
        <div>
          <p>Ontología II · Laboratorium philosophicum</p>
          <h1>El orden de <em>las razones</em></h1>
          <p className="spinoza-study-lead">
            Prototipo interactivo: definiciones, axiomas y proposiciones
            convergen hacia una única sustancia y vuelven a desplegarse
            desde ella.
          </p>
        </div>
        <aside>
          <span>LECTURA</span>
          <strong>Parte I · De Dios</strong>
          <b>PDF pp. 27–51</b>
          <small>Traducción de Vidal Peña</small>
        </aside>
      </header>

      <section className="spinoza-study-intro">
        <div>
          <span>FASE 4 · PROTOTIPO</span>
          <strong>D1–D8 · A1–A7 · P1–P36 · Apéndice parcial</strong>
        </div>
        <p>
          El prototipo ya contiene la arquitectura completa de la lectura:
          ocho definiciones, siete axiomas, las treinta y seis proposiciones y
          la porción del Apéndice incluida en las pp. 50–51.
        </p>
      </section>

      <section className="spinoza-study-routes">
        <div>
          <span>Ruta conceptual</span>
          {spinozaRoutes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={route === item.id ? 'is-active' : ''}
              onClick={() => {
                setRoute(item.id)
                setSelectedId(null)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button type="button" onClick={reset}>
          Ver sistema completo
        </button>
      </section>

      <section className="spinoza-study-workspace">
        <div className="spinoza-flow-panel">
          <div className="spinoza-flow-caption">
            <div>
              <span>ORDO GEOMETRICUS</span>
              <strong>fundamentos → sustancia → Dios → inmanencia</strong>
            </div>
            <div className="spinoza-flow-legend">
              <span>Def.</span><span>Ax.</span><span>Prop.</span><span>Núcleo</span><span>Apéndice</span>
            </div>
          </div>

          <div className="spinoza-flow-canvas">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={(_, node) => selectNode(node)}
              onPaneClick={() => setSelectedId(null)}
              fitView
              fitViewOptions={{ padding: 0.12 }}
              minZoom={0.12}
              maxZoom={1.8}
              nodesConnectable={false}
              proOptions={{ hideAttribution: true }}
            >
              <Background gap={28} size={1} />
              <Controls showInteractive={false} />
              <MiniMap pannable zoomable nodeStrokeWidth={3} />
            </ReactFlow>
          </div>
        </div>

        <aside className="spinoza-inspector">
          {selected ? (
            <>
              <div className="spinoza-inspector-head">
                <span>{selected.data.kind}</span>
                <b>{selected.data.code}</b>
              </div>
              <h2>{selected.data.title}</h2>
              <blockquote>{selected.data.short}</blockquote>

              <section>
                <span>Qué significa</span>
                <p>{selected.data.explanation}</p>
              </section>

              <section>
                <span>Función filosófica</span>
                <p>{selected.data.role}</p>
              </section>

              <section>
                <span>Depende de</span>
                <div className="spinoza-inspector-links">
                  {selected.data.dependsOn.length ? (
                    selected.data.dependsOn.map((id) => {
                      const node = spinozaNodeById(id)
                      return (
                        <button key={id} type="button" onClick={() => selectById(id)}>
                          {node?.data.code || id}
                          <small>{node?.data.title}</small>
                        </button>
                      )
                    })
                  ) : (
                    <em>Fundamento inicial</em>
                  )}
                </div>
              </section>

              <section>
                <span>Produce</span>
                <div className="spinoza-inspector-links">
                  {selected.data.produces.length ? (
                    selected.data.produces.map((id) => {
                      const node = spinozaNodeById(id)
                      return (
                        <button key={id} type="button" onClick={() => selectById(id)}>
                          {node?.data.code || id}
                          <small>{node?.data.title}</small>
                        </button>
                      )
                    })
                  ) : (
                    <em>La expansión continúa en la fase siguiente.</em>
                  )}
                </div>
              </section>

              <section>
                <span>Conceptos</span>
                <div className="spinoza-inspector-tags">
                  {selected.data.concepts.map((concept) => (
                    <b key={concept}>{concept}</b>
                  ))}
                </div>
              </section>

              <footer>
                <span>Fuente</span>
                <strong>PDF p. {selected.data.page}</strong>
              </footer>
            </>
          ) : (
            <div className="spinoza-inspector-empty">
              <span>SELECTIO</span>
              <strong>Seleccione un nodo</strong>
              <p>
                Se iluminarán sus dependencias inmediatas y el inspector
                explicará su función dentro del sistema.
              </p>
            </div>
          )}
        </aside>
      </section>

      <section className="spinoza-study-history">
        <span>Iter rationis</span>
        <div>
          {history.map((id, index) => {
            const node = spinozaNodeById(id)
            return (
              <span key={`${id}-${index}`}>
                {index > 0 && <b>→</b>}
                <button type="button" onClick={() => selectById(id)}>
                  {node?.data.code || id}
                </button>
              </span>
            )
          })}
        </div>
      </section>

      <section className="spinoza-study-next">
        <span>Objetivos del prototipo</span>
        <div>
          <article><b>01</b><strong>Fundamentos</strong><p>Ocho definiciones y siete axiomas sostienen la red completa.</p></article>
          <article><b>02</b><strong>Convergencia</strong><p>P1–P15 construyen la sustancia única y el «todo es en Dios».</p></article>
          <article><b>03</b><strong>Expansión</strong><p>P16–P33 despliegan causalidad, modos, naturaleza y necesidad.</p></article>
          <article><b>04</b><strong>Cierre</strong><p>P34–P36 unen potencia y esencia; después comienza el Apéndice parcial.</p></article>
        </div>
      </section>

      <footer className="spinoza-study-footer">
        <Link to="/tareas">← Volver al tablero</Link>
        <span>substantia · Deus · necessitas</span>
        <Link to="/semestre/5/ontologia-ii/clase/19-agosto">
          Clase del 19 de agosto ↗
        </Link>
      </footer>
    </div>
  )
}

export default function SpinozaEthicsStudy() {
  return (
    <ReactFlowProvider>
      <StudyCanvas />
    </ReactFlowProvider>
  )
}
