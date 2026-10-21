import { useEffect, useMemo, useState } from 'react'
import {
  Background, Controls, Handle, MarkerType, Position,
  ReactFlow, ReactFlowProvider, useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import '../components/philosophy/system2d/System2DTheme.css'
import { resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme'
import {
  marxHegelReadingLinks, marxHegelReadingNodes, marxHegelReadingRoutes,
} from '../data/marxHegelReadingAtlas'
import './MarxHegelAssignedAtlas.css'

function ReadingNode({ data, selected }) {
  const { item, order } = data
  return (
    <div className={'marx-assigned-node' + (selected ? ' is-selected' : '')}>
      <Handle type="target" position={Position.Top} className="marx-assigned-handle" />
      <div className="marx-assigned-node__meta">
        <span>FOLIO {String(order).padStart(2, '0')}</span>
        <span>{item.source}</span>
      </div>
      <h4>{item.title}</h4>
      <p>{item.text}</p>
      <small>{item.pages}</small>
      <Handle type="source" position={Position.Bottom} className="marx-assigned-handle" />
    </div>
  )
}

const nodeTypes = { reading: ReadingNode }

function ReadingCanvas({ route, activeId, onSelect, entries }) {
  const { setCenter } = useReactFlow()

  const nodes = useMemo(() => entries.map((item, index) => ({
    id: item.id,
    type: 'reading',
    position: { x: 40, y: index * 290 },
    data: { item, order: index + 1 },
    selected: activeId === item.id,
    draggable: false,
  })), [entries, activeId])

  const edges = useMemo(() => marxHegelReadingLinks
    .filter(edge => entries.some(n => n.id === edge.from) && entries.some(n => n.id === edge.to))
    .map(edge => ({
      id: edge.from + '-' + edge.to,
      source: edge.from,
      target: edge.to,
      type: 'smoothstep',
      style: { strokeWidth: 2, stroke: resolveSystem2DEdgeColor({ guidedActive: false }) },
      markerEnd: { type: MarkerType.ArrowClosed, color: resolveSystem2DEdgeColor({}) },
      label: edge.label === 'continúa' ? undefined : edge.label,
    })), [entries])

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === activeId)
    if (index < 0) return undefined
    const frame = requestAnimationFrame(() => {
      setCenter(265, index * 290 + 120, {
        zoom: window.innerWidth < 690 ? 0.72 : 0.98,
        duration: 320,
      })
    })
    return () => cancelAnimationFrame(frame)
  }, [route, activeId, entries, setCenter])

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      nodesDraggable={false}
      nodesConnectable={false}
      zoomOnDoubleClick={false}
      onNodeClick={(_, node) => onSelect(node.id)}
      minZoom={0.38}
      maxZoom={1.5}
      proOptions={{ hideAttribution: true }}
      aria-label="Atlas 2D navegable de las lecturas de Marx, Bloch y Feuerbach"
    >
      <Background gap={26} size={1} color="var(--ph2d-line)" />
      <Controls showInteractive={false} position="bottom-left" />
    </ReactFlow>
  )
}

export default function MarxHegelAssignedAtlas() {
  const [route, setRoute] = useState('cruce')
  const [activeId, setActiveId] = useState('c1')
  const entries = useMemo(() =>
    marxHegelReadingNodes.filter(node => node.route === route), [route])
  const index = Math.max(0, entries.findIndex(node => node.id === activeId))
  const selected = entries[index]
  const activeRoute = marxHegelReadingRoutes.find(item => item.id === route)

  const chooseRoute = id => {
    const first = marxHegelReadingNodes.find(node => node.route === id)
    setRoute(id)
    if (first) setActiveId(first.id)
  }
  const navigate = offset => {
    const next = entries[index + offset]
    if (next) setActiveId(next.id)
  }

  return (
    <section className="marx-assigned ph2d-shell" aria-labelledby="marx-assigned-title">
      <header className="marx-assigned__head">
        <div>
          <small>LECTIO ASSIGNATA · 19 OCTUBRE 2026 · FI190</small>
          <h2 id="marx-assigned-title">Tres lecturas, una controversia</h2>
          <p>Atlas interactivo de la crítica a Hegel. Seleccione una fuente, siga la secuencia de nodos y consulte el folio íntegro de estudio en el inspector.</p>
        </div>
        <div className="marx-assigned__number">
          <strong>{marxHegelReadingNodes.length}</strong>
          <span>folios · cuatro recorridos</span>
        </div>
      </header>

      <aside className="marx-assigned__boundary">
        <strong>Frontera documental</strong>
        <p>La consigna procede del correo del profesor José Alejandro Fuerte (19 de octubre); no indica fecha de entrega. Los textos de los nodos son paráfrasis académicas, nunca citas. El apartado de Fromm contiene un <em>texto de Marx</em>; Bloch es un intérprete y las once tesis son de Marx. Las referencias indican la página del PDF adjunto, no una paginación universal.</p>
      </aside>

      <div className="marx-assigned__routes" aria-label="Seleccionar lectura">
        {marxHegelReadingRoutes.map(option => (
          <button
            key={option.id}
            type="button"
            className={route === option.id ? 'is-active' : ''}
            onClick={() => chooseRoute(option.id)}
            aria-pressed={route === option.id}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="marx-assigned__route-summary">
        <strong>{activeRoute.label}</strong>
        <span>{activeRoute.subtitle}</span>
      </div>

      <div className="marx-assigned__guide">
        <div>
          <span>GUÍA DE LA RUTA ACTIVA · {index + 1} / {entries.length}</span>
          <strong>{selected.title}</strong>
        </div>
        <div className="marx-assigned__guide-actions">
          <button type="button" onClick={() => navigate(-1)} disabled={index === 0}>← Anterior</button>
          <button type="button" onClick={() => navigate(1)} disabled={index === entries.length - 1}>Siguiente →</button>
        </div>
      </div>

      <div className="marx-assigned__workspace">
        <div className="marx-assigned__canvas">
          <ReactFlowProvider>
            <ReadingCanvas
              route={route}
              entries={entries}
              activeId={selected.id}
              onSelect={setActiveId}
            />
          </ReactFlowProvider>
        </div>
        <article className="marx-assigned__inspector" aria-live="polite">
          <small>FOLIO {String(index + 1).padStart(2, '0')} · {selected.source}</small>
          <h3>{selected.title}</h3>
          <p className="marx-assigned__thesis">{selected.text}</p>
          <p>{selected.detail}</p>
          <div className="marx-assigned__citation">
            <span>LOCALIZACIÓN VERIFICADA</span>
            <strong>{selected.pages}</strong>
          </div>
          <p className="marx-assigned__note">Explicación de estudio de PHILOSOPHIA; no atribuir literalmente al profesor ni al autor.</p>
        </article>
      </div>

      <footer className="marx-assigned__footer">
        <strong>Continuidad del archivo</strong>
        <p>Este sistema complementa el dossier ya publicado de los <em>Manuscritos</em> (edición Rubio Llorente), las notas de la clase del 19 de octubre y el atlas previo de Hegel/Croce. No modifica el sistema 2D de <em>El capital</em>.</p>
      </footer>
    </section>
  )
}
