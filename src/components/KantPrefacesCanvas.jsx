import { useEffect, useMemo, useRef } from 'react'
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
import {
  loadKantPrefacesPositions,
  saveKantPrefacesPositions,
} from '../data/kantPrefacesStudyStore'

function edgeBaseStyle(kind) {
  if (['contrasts', 'rejects', 'limits', 'distinguishes'].includes(kind)) {
    return {
      stroke: 'rgba(113, 74, 92, 0.9)',
      strokeWidth: 2.2,
      strokeDasharray: '7 6',
    }
  }

  if (kind === 'bridge') {
    return {
      stroke: 'rgba(166, 126, 55, 0.9)',
      strokeWidth: 2.5,
      strokeDasharray: '11 7',
    }
  }

  if (kind === 'practical') {
    return {
      stroke: 'rgba(146, 84, 57, 0.9)',
      strokeWidth: 2.4,
    }
  }

  return {
    stroke: 'rgba(54, 50, 44, 0.86)',
    strokeWidth: 2,
  }
}

function edgeColor(kind) {
  if (['contrasts', 'rejects', 'limits', 'distinguishes'].includes(kind)) {
    return 'rgba(113, 74, 92, 0.95)'
  }

  if (kind === 'bridge') {
    return 'rgba(166, 126, 55, 0.95)'
  }

  return 'rgba(54, 50, 44, 0.9)'
}

function makeNode(rawNode, activeNodeId, guideMode, nextGuideNodeId, peekNodeId) {
  const isActive = rawNode.id === activeNodeId
  const isNext = guideMode && rawNode.id === nextGuideNodeId
  const isPeek = guideMode && rawNode.id === peekNodeId && !isActive

  return {
    id: rawNode.id,
    position: rawNode.position,
    draggable: !guideMode,
    selectable: true,
    className: [
      'kpm-node',
      `kpm-node--${rawNode.category}`,
      isActive ? 'is-active' : '',
      guideMode && isActive ? 'is-guide-target' : '',
      isNext ? 'is-guide-next' : '',
      isPeek ? 'is-guide-peek' : '',
      guideMode && !isActive && !isNext && !isPeek ? 'is-guide-muted' : '',
    ].join(' '),
    data: {
      rawNode,
      label: (
        <div className="kpm-node-card">
          {rawNode.phaseRoman && (
            <span className="kpm-node-phase">FASE {rawNode.phaseRoman}</span>
          )}
          <span className="kpm-node-tag">{rawNode.tag}</span>
          <strong>{rawNode.title}</strong>
          {guideMode && isActive && (
            <span className="kpm-guide-marker">ahora</span>
          )}
          {guideMode && isNext && (
            <span className="kpm-guide-next-marker">siguiente</span>
          )}
        </div>
      ),
    },
  }
}

function makeEdge(rawEdge, activeNodeId, guideMode) {
  const touchesActive =
    rawEdge.source === activeNodeId || rawEdge.target === activeNodeId
  const baseStyle = edgeBaseStyle(rawEdge.kind)
  const guideColor = 'rgba(183, 139, 40, 0.98)'

  return {
    id: rawEdge.id,
    source: rawEdge.source,
    target: rawEdge.target,
    label: rawEdge.label || '',
    className: guideMode
      ? touchesActive
        ? 'is-guide-edge'
        : 'is-guide-muted-edge'
      : '',
    labelStyle: {
      fill: touchesActive && guideMode
        ? 'rgba(91, 66, 17, 0.98)'
        : 'rgba(47, 43, 37, 0.82)',
      fontSize: 10,
      fontWeight: touchesActive && guideMode ? 800 : 600,
    },
    labelBgStyle: {
      fill: 'rgba(247, 243, 233, 0.95)',
      fillOpacity: 1,
      rx: 4,
      ry: 4,
    },
    style: touchesActive && guideMode
      ? {
          ...baseStyle,
          stroke: guideColor,
          strokeWidth: 3.5,
        }
      : baseStyle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: touchesActive && guideMode ? 22 : 18,
      height: touchesActive && guideMode ? 22 : 18,
      color: touchesActive && guideMode
        ? guideColor
        : edgeColor(rawEdge.kind),
    },
  }
}

function CanvasInner({
  viewId,
  graph,
  activeNodeId,
  guideMode,
  nextGuideNodeId,
  peekNodeId,
  onNodeSelect,
  onPeekNode,
  onEdgeSelect,
  centerNonce,
  fitNonce,
}) {
  const {
    fitView,
    getNode,
    setCenter,
  } = useReactFlow()

  const shellRef = useRef(null)
  const savedPositions = useMemo(
    () => loadKantPrefacesPositions(viewId),
    [viewId],
  )

  const initialNodes = useMemo(
    () =>
      graph.nodes.map((rawNode) =>
        makeNode(
          {
            ...rawNode,
            position: savedPositions[rawNode.id] || rawNode.position,
          },
          activeNodeId,
          guideMode,
          nextGuideNodeId,
          peekNodeId,
        ),
      ),
    [
      activeNodeId,
      graph.nodes,
      guideMode,
      nextGuideNodeId,
      peekNodeId,
      savedPositions,
    ],
  )

  const initialEdges = useMemo(
    () => graph.edges.map((rawEdge) =>
      makeEdge(rawEdge, activeNodeId, guideMode),
    ),
    [activeNodeId, graph.edges, guideMode],
  )

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  useEffect(() => {
    setNodes((current) =>
      current.map((currentNode) => {
        const rawNode = currentNode.data.rawNode
        const decorated = makeNode(
          {
            ...rawNode,
            position: currentNode.position,
          },
          activeNodeId,
          guideMode,
          nextGuideNodeId,
          peekNodeId,
        )

        return {
          ...currentNode,
          draggable: decorated.draggable,
          className: decorated.className,
          data: decorated.data,
        }
      }),
    )

    setEdges(
      graph.edges.map((rawEdge) =>
        makeEdge(rawEdge, activeNodeId, guideMode),
      ),
    )
  }, [
    activeNodeId,
    graph.edges,
    guideMode,
    nextGuideNodeId,
    peekNodeId,
    setEdges,
    setNodes,
  ])

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      fitView({
        padding: viewId === 'overview' ? 0.08 : 0.13,
        duration: 500,
      })
    })

    return () => window.cancelAnimationFrame(id)
  }, [fitView, viewId])

  useEffect(() => {
    if (!guideMode || !activeNodeId) return undefined

    const timer = window.setTimeout(() => {
      const target = getNode(activeNodeId)
      if (!target) return

      const position = target.positionAbsolute || target.position
      const width = target.measured?.width || target.width || 230
      const height = target.measured?.height || target.height || 118
      const mobile = window.matchMedia('(max-width: 820px)').matches

      setCenter(
        position.x + width / 2,
        position.y + height / 2,
        {
          zoom: mobile ? 0.72 : 0.84,
          duration: 420,
        },
      )
    }, 100)

    return () => window.clearTimeout(timer)
  }, [activeNodeId, getNode, guideMode, setCenter])

  useEffect(() => {
    if (!centerNonce || !activeNodeId) return

    const target = getNode(activeNodeId)
    if (!target) return

    const position = target.positionAbsolute || target.position
    const width = target.measured?.width || target.width || 230
    const height = target.measured?.height || target.height || 118

    setCenter(
      position.x + width / 2,
      position.y + height / 2,
      {
        zoom: 0.84,
        duration: 420,
      },
    )
  }, [activeNodeId, centerNonce, getNode, setCenter])

  useEffect(() => {
    if (!fitNonce) return

    fitView({
      padding: viewId === 'overview' ? 0.08 : 0.13,
      duration: 450,
    })
  }, [fitNonce, fitView, viewId])

  const handleDragStop = () => {
    setNodes((current) => {
      saveKantPrefacesPositions(viewId, current)
      return current
    })
  }

  return (
    <div ref={shellRef} className="kpm-flow-shell">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch
        preventScrolling={false}
        panOnDrag
        selectionOnDrag={false}
        nodesDraggable={!guideMode}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDragStop={handleDragStop}
        onNodeClick={(_, clickedNode) => {
          if (guideMode && clickedNode.id !== activeNodeId) {
            onPeekNode?.(clickedNode.id)
            return
          }

          onNodeSelect(clickedNode.id)
        }}
        onEdgeClick={(_, clickedEdge) => onEdgeSelect?.(clickedEdge.id)}
        proOptions={{ hideAttribution: true }}
      >
        <MiniMap
          className="kpm-minimap"
          zoomable
          pannable
        />
        <Controls
          className="kpm-flow-controls"
          showInteractive={false}
        />
        <Background
          gap={22}
          size={1}
          color="rgba(44, 40, 34, 0.12)"
        />
      </ReactFlow>
    </div>
  )
}

export default function KantPrefacesCanvas(props) {
  return (
    <ReactFlowProvider>
      <CanvasInner {...props} />
    </ReactFlowProvider>
  )
}
