import { useEffect, useMemo, useRef, useState } from 'react'
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
import { analyticFollesdalMaps } from '../data/analyticFollesdalMaps'
import { getAnalyticFollesdalClassLinks } from '../data/analyticFollesdalClassLinks'
import {
  clearFollesdalPositions,
  loadFollesdalPositions,
  saveFollesdalPositions,
} from '../data/analyticFollesdalStudyStore'
import AnalyticFollesdalInspector from './AnalyticFollesdalInspector'

const phaseOffsets = {
  'phase-1': { x: 0, y: 0 },
  'phase-2': { x: 1700, y: 0 },
  'phase-3': { x: 3400, y: 0 },
  'phase-4': { x: 0, y: 760 },
  'phase-5': { x: 1700, y: 760 },
  'phase-6': { x: 3400, y: 760 },
  'phase-7': { x: 1700, y: 1520 },
}

const bridgeEdges = [
  {
    id: 'overview-b1',
    source: 'p1-mix',
    target: 'p2-insufficient',
    label: 'obliga a redefinir',
    kind: 'bridge',
  },
  {
    id: 'overview-b2',
    source: 'p2-insufficient',
    target: 'p3-approach',
    label: 'abre la propuesta',
    kind: 'bridge',
  },
  {
    id: 'overview-b3',
    source: 'p3-justification',
    target: 'p4-broad',
    label: 'amplía qué cuenta',
    kind: 'bridge',
  },
  {
    id: 'overview-b4',
    source: 'p4-broad',
    target: 'p5-balance',
    label: 'conduce al ajuste',
    kind: 'bridge',
  },
  {
    id: 'overview-b5',
    source: 'p5-balance',
    target: 'p6-rhetoric',
    label: 'permite contrastar',
    kind: 'bridge',
  },
  {
    id: 'overview-b6',
    source: 'p6-response',
    target: 'p7-axis',
    label: 'reclasifica',
    kind: 'bridge',
  },
  {
    id: 'overview-b7',
    source: 'p7-axis',
    target: 'p7-final',
    label: 'culmina en',
    kind: 'bridge',
  },
]

function buildGraph() {
  const nodes = []
  const edges = []

  analyticFollesdalMaps.forEach((phase) => {
    const offset = phaseOffsets[phase.id] || { x: 0, y: 0 }

    phase.nodes.forEach((node) => {
      nodes.push({
        ...node,
        phaseId: phase.id,
        phaseRoman: phase.roman,
        phaseTitle: phase.title,
        position: {
          x: node.position.x + offset.x,
          y: node.position.y + offset.y,
        },
      })
    })

    phase.edges.forEach((edge) => {
      edges.push({
        ...edge,
        overviewPhaseId: phase.id,
      })
    })
  })

  return {
    nodes,
    edges: [...edges, ...bridgeEdges],
  }
}

function baseEdgeStyle(kind) {
  if (kind === 'contrast') {
    return {
      stroke: 'rgba(135, 78, 70, 0.95)',
      strokeWidth: 2.2,
      strokeDasharray: '7 6',
    }
  }

  if (kind === 'bridge') {
    return {
      stroke: 'rgba(156, 126, 66, 0.88)',
      strokeWidth: 2.4,
      strokeDasharray: '10 6',
    }
  }

  return {
    stroke: 'rgba(55, 51, 43, 0.88)',
    strokeWidth: 2,
  }
}

function makeNode(
  rawNode,
  activeNodeId,
  guideMode,
  guideStepNumber,
  relatedNodeIds,
) {
  const classLinks = getAnalyticFollesdalClassLinks(rawNode.id)
  const isActive = rawNode.id === activeNodeId
  const isGuideTarget = guideMode && isActive
  const isGuideRelated =
    guideMode &&
    !isGuideTarget &&
    relatedNodeIds.has(rawNode.id)

  return {
    id: rawNode.id,
    position: rawNode.position,
    draggable: true,
    selectable: true,
    className: [
      'afm-node',
      'afm-overview-node',
      `afm-node--${rawNode.category}`,
      classLinks.length ? 'has-class-links' : '',
      isActive ? 'is-active' : '',
      isGuideTarget ? 'is-guide-target' : '',
      isGuideRelated ? 'is-guide-related' : '',
      guideMode && !isGuideTarget && !isGuideRelated
        ? 'is-guide-muted'
        : '',
    ].join(' '),
    data: {
      rawNode,
      label: (
        <div className="afm-node-card">
          <span className="afm-overview-phase">
            FASE {rawNode.phaseRoman}
          </span>

          <span className="afm-node-tag">{rawNode.tag}</span>
          <strong>{rawNode.title}</strong>

          {isGuideTarget && (
            <span className="afm-guide-node-step">
              Paso {guideStepNumber}
            </span>
          )}

          {classLinks.length > 0 && (
            <div className="afm-node-class-badges">
              <span>clase</span>

              {classLinks.map((link) => (
                <i
                  key={`${rawNode.id}-${link.date}`}
                  style={{ '--class-color': link.session.color }}
                >
                  {link.session.shortDate}
                </i>
              ))}
            </div>
          )}
        </div>
      ),
    },
  }
}

function decorateNode(
  node,
  activeNodeId,
  guideMode,
  guideStepNumber,
  relatedNodeIds,
) {
  const fresh = makeNode(
    node.data.rawNode,
    activeNodeId,
    guideMode,
    guideStepNumber,
    relatedNodeIds,
  )

  return {
    ...node,
    className: fresh.className,
    data: fresh.data,
  }
}

function makeEdge(item, activeNodeId, guideMode) {
  const isGuideEdge =
    guideMode &&
    (
      item.source === activeNodeId ||
      item.target === activeNodeId
    )
  const isGuideMutedEdge = guideMode && !isGuideEdge

  const guideColor = 'rgba(181, 139, 46, 0.98)'
  const normalColor =
    item.kind === 'contrast'
      ? 'rgba(135, 78, 70, 0.95)'
      : item.kind === 'bridge'
        ? 'rgba(156, 126, 66, 0.88)'
        : 'rgba(55, 51, 43, 0.88)'

  return {
    id: item.id,
    source: item.source,
    target: item.target,
    label: item.label || '',
    className: isGuideEdge
      ? 'is-guide-edge'
      : isGuideMutedEdge
        ? 'is-guide-muted-edge'
        : '',
    labelStyle: {
      fill: isGuideEdge
        ? 'rgba(103, 76, 19, 0.98)'
        : 'rgba(45, 40, 34, 0.82)',
      fontSize: 10,
      fontWeight: isGuideEdge ? 800 : 600,
    },
    labelBgStyle: {
      fill: 'rgba(246, 241, 230, 0.94)',
      fillOpacity: 1,
      rx: 4,
      ry: 4,
    },
    style: isGuideEdge
      ? {
          stroke: guideColor,
          strokeWidth: 3.4,
        }
      : baseEdgeStyle(item.kind),
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: isGuideEdge ? 22 : 18,
      height: isGuideEdge ? 22 : 18,
      color: isGuideEdge ? guideColor : normalColor,
    },
  }
}

function OverviewCanvas({
  activeNodeId,
  onNodeSelect,
  studyMode,
  guideStepNumber,
  guideTotal,
  guideStep,
  guideClassLinks,
  onPreviousGuideStep,
  onNextGuideStep,
  resetKey,
}) {
  const {
    fitView,
    getNode,
    getViewport,
    setCenter,
    setViewport,
  } = useReactFlow()

  const graph = useMemo(() => buildGraph(), [])
  const guideMode = studyMode === 'guide'
  const savedPositions = useMemo(
    () => loadFollesdalPositions(),
    [],
  )
  const stageRef = useRef(null)
  const flowShellRef = useRef(null)
  const guideCardRef = useRef(null)
  const [showGuideAnswer, setShowGuideAnswer] = useState(false)
  const [selectedEdgeId, setSelectedEdgeId] = useState('')
  const [peekNodeId, setPeekNodeId] = useState('')

  const relatedNodeIds = useMemo(() => {
    const related = new Set()

    if (!guideMode || !activeNodeId) {
      return related
    }

    graph.edges.forEach((edge) => {
      if (edge.source === activeNodeId) {
        related.add(edge.target)
      }

      if (edge.target === activeNodeId) {
        related.add(edge.source)
      }
    })

    return related
  }, [
    activeNodeId,
    graph.edges,
    guideMode,
  ])

  const inspectorNode = useMemo(
    () =>
      graph.nodes.find(
        (item) => item.id === activeNodeId,
      ) || graph.nodes[0],
    [
      activeNodeId,
      graph.nodes,
    ],
  )

  const inspectorClassLinks = useMemo(
    () =>
      getAnalyticFollesdalClassLinks(
        inspectorNode?.id,
      ),
    [inspectorNode?.id],
  )

  const peekNode = useMemo(
    () =>
      graph.nodes.find(
        (item) => item.id === peekNodeId,
      ) || null,
    [
      graph.nodes,
      peekNodeId,
    ],
  )

  const peekClassLinks = useMemo(
    () =>
      peekNode
        ? getAnalyticFollesdalClassLinks(peekNode.id)
        : [],
    [peekNode],
  )

  useEffect(() => {
    setShowGuideAnswer(false)
    setPeekNodeId('')
  }, [guideStepNumber])

  const [nodes, setNodes, onNodesChange] = useNodesState(
    graph.nodes.map((node) =>
      makeNode(
        {
          ...node,
          position:
            savedPositions[node.id] ||
            node.position,
        },
        activeNodeId,
        guideMode,
        guideStepNumber,
        relatedNodeIds,
      ),
    ),
  )

  const [edges, setEdges, onEdgesChange] = useEdgesState(
    graph.edges.map((edge) =>
      makeEdge(edge, activeNodeId, guideMode),
    ),
  )

  useEffect(() => {
    setNodes((current) =>
      current.map((node) => {
        const decorated = decorateNode(
          node,
          activeNodeId,
          guideMode,
          guideStepNumber,
          relatedNodeIds,
        )

        const isPeekNode =
          guideMode &&
          peekNodeId &&
          node.id === peekNodeId &&
          node.id !== activeNodeId

        return {
          ...decorated,
          className: [
            decorated.className,
            isPeekNode ? 'is-guide-peek' : '',
          ].join(' '),
        }
      }),
    )

    setEdges(
      graph.edges.map((edge) =>
        makeEdge(edge, activeNodeId, guideMode),
      ),
    )
  }, [
    activeNodeId,
    graph.edges,
    guideMode,
    guideStepNumber,
    peekNodeId,
    relatedNodeIds,
    setEdges,
    setNodes,
  ])

  useEffect(() => {
    if (!guideMode || !activeNodeId) {
      return undefined
    }

    let rafOne = 0
    let rafTwo = 0

    /*
      Safari móvil puede terminar de medir el canvas DESPUÉS
      del primer cálculo de viewport. Hacemos dos pasos:

      1. React Flow centra por coordenadas del grafo.
      2. Dos frames después corregimos por píxeles usando
         el nodo y el canvas realmente renderizados.

      El segundo paso hace que el centro visual sea exacto
      incluso si cambió el viewport disponible.
    */
    const timer = window.setTimeout(() => {
      const target = getNode(activeNodeId)

      if (!target) {
        return
      }

      const targetPosition =
        target.positionAbsolute || target.position

      const targetWidth =
        target.measured?.width ||
        target.width ||
        224

      const targetHeight =
        target.measured?.height ||
        target.height ||
        118

      const targetCenterX =
        targetPosition.x + targetWidth / 2

      const targetCenterY =
        targetPosition.y + targetHeight / 2

      const mobileViewport = window.matchMedia(
        '(max-width: 820px)',
      ).matches

      const targetZoom = mobileViewport
        ? 0.72
        : 0.82

      /*
        Primer posicionamiento sin animación para cancelar
        cualquier vista general anterior.
      */
      setCenter(
        targetCenterX,
        targetCenterY,
        {
          zoom: targetZoom,
          duration: 0,
        },
      )

      rafOne = window.requestAnimationFrame(() => {
        rafTwo = window.requestAnimationFrame(() => {
          const shell = flowShellRef.current

          if (!shell) {
            return
          }

          const nodeElement = shell.querySelector(
            `.react-flow__node[data-id="${activeNodeId}"]`,
          )

          if (!nodeElement) {
            return
          }

          const shellRect =
            shell.getBoundingClientRect()

          const nodeRect =
            nodeElement.getBoundingClientRect()

          if (
            shellRect.width <= 0 ||
            shellRect.height <= 0 ||
            nodeRect.width <= 0 ||
            nodeRect.height <= 0
          ) {
            return
          }

          const desiredCenterX =
            shellRect.left + shellRect.width / 2

          const desiredCenterY =
            shellRect.top + shellRect.height / 2

          const actualCenterX =
            nodeRect.left + nodeRect.width / 2

          const actualCenterY =
            nodeRect.top + nodeRect.height / 2

          const deltaX =
            desiredCenterX - actualCenterX

          const deltaY =
            desiredCenterY - actualCenterY

          const viewport = getViewport()

          setViewport(
            {
              x: viewport.x + deltaX,
              y: viewport.y + deltaY,
              zoom: viewport.zoom,
            },
            {
              duration: 360,
            },
          )
        })
      })
    }, 220)

    return () => {
      window.clearTimeout(timer)

      if (rafOne) {
        window.cancelAnimationFrame(rafOne)
      }

      if (rafTwo) {
        window.cancelAnimationFrame(rafTwo)
      }
    }
  }, [
    activeNodeId,
    getNode,
    getViewport,
    guideMode,
    guideStepNumber,
    resetKey,
    setCenter,
    setViewport,
  ])

  useEffect(() => {
    if (resetKey > 0) {
      clearFollesdalPositions()
    }

    setNodes(
      graph.nodes.map((node) =>
        makeNode(
          node,
          activeNodeId,
          guideMode,
          guideStepNumber,
          relatedNodeIds,
        ),
      ),
    )

    const id = window.requestAnimationFrame(() => {
      if (!guideMode) {
        fitView({ padding: 0.07, duration: 500 })
      }
    })

    return () => window.cancelAnimationFrame(id)
  }, [resetKey, fitView])

  const handleNodeDragStop = () => {
    setNodes((currentNodes) => {
      saveFollesdalPositions(currentNodes)
      return currentNodes
    })
  }

  return (
    <div
      ref={stageRef}
      className={
        guideMode
          ? 'afm-overview-stage afm-overview-stage--workbench afm-overview-stage--guide'
          : 'afm-overview-stage afm-overview-stage--workbench'
      }
    >
      <div
        ref={flowShellRef}
        className="afm-flow-shell afm-overview-flow-shell"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          panOnScroll
          selectionOnDrag={false}
          nodesDraggable
          onNodesChange={onNodesChange}
        onNodeDragStop={handleNodeDragStop}
          onEdgesChange={onEdgesChange}
        onEdgeClick={(_, edge) => {
          setSelectedEdgeId(edge.id)
        }}
          onNodeClick={(_, node) => {
            if (guideMode) {
              setPeekNodeId(
                node.id === activeNodeId
                  ? ''
                  : node.id,
              )
              return
            }

            setPeekNodeId('')
            onNodeSelect(node.id)
          }}
          proOptions={{ hideAttribution: true }}
        >
          <MiniMap zoomable pannable />
          <Controls showInteractive={false} />
          <Background
            gap={22}
            size={1}
            color="rgba(45, 41, 34, 0.12)"
          />
        </ReactFlow>
      </div>

      <AnalyticFollesdalInspector
        panelRef={guideCardRef}
        node={inspectorNode}
        graphNodes={graph.nodes}
        graphEdges={graph.edges}
        classLinks={
          guideMode
            ? guideClassLinks
            : inspectorClassLinks
        }
        guideMode={guideMode}
        guideStep={guideStep}
        guideStepNumber={guideStepNumber}
        guideTotal={guideTotal}
        onPreviousGuideStep={onPreviousGuideStep}
        onNextGuideStep={onNextGuideStep}
        onNodeSelect={onNodeSelect}
        selectedEdgeId={selectedEdgeId}
        onSelectEdge={setSelectedEdgeId}
        peekNode={peekNode}
        peekClassLinks={peekClassLinks}
        onClearPeek={() => setPeekNodeId('')}
      />
    </div>
  )
}

export default function AnalyticFollesdalOverview(props) {
  return (
    <ReactFlowProvider>
      <OverviewCanvas {...props} />
    </ReactFlowProvider>
  )
}
