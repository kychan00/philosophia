import { useId, useLayoutEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import ConceptEdge from './ConceptEdge'
import ConceptNode from './ConceptNode'
import {
  CONCEPT_SCHEMA_LAYOUTS,
  CONCEPT_SCHEMA_SHAPES,
  NODE_ROLE_META,
  RELATION_KIND_META,
  effectiveNodeRole,
  relationKindFromEdge,
} from './schemaTypes'
import './AnimatedConceptSchema.css'

const METRICS = {
  paddingX: 52,
  paddingY: 42,
  nodeWidth: 188,
  nodeHeight: 66,
  flowGap: 82,
  hierarchyXGap: 78,
  hierarchyYGap: 88,
  radialRadius: 178,
}

function nodeSize(node) {
  switch (node.shape) {
    case CONCEPT_SCHEMA_SHAPES.CIRCLE:
      return { width: 112, height: 112 }
    case CONCEPT_SCHEMA_SHAPES.DIAMOND:
      return { width: 154, height: 88 }
    case CONCEPT_SCHEMA_SHAPES.HEXAGON:
      return { width: 184, height: 82 }
    case CONCEPT_SCHEMA_SHAPES.PILL:
      return { width: 174, height: 56 }
    case CONCEPT_SCHEMA_SHAPES.RECT:
      return { width: 184, height: 64 }
    case CONCEPT_SCHEMA_SHAPES.ROUNDED_RECT:
    default:
      return { width: METRICS.nodeWidth, height: METRICS.nodeHeight }
  }
}

function enrich(node, centerX, centerY) {
  const size = nodeSize(node)
  return {
    x: centerX - size.width / 2,
    y: centerY - size.height / 2,
    width: size.width,
    height: size.height,
    centerX,
    centerY,
  }
}

function buildFlowLayout(schema) {
  const direction = schema.direction === 'vertical' ? 'vertical' : 'horizontal'
  const sizes = schema.nodes.map(nodeSize)

  if (direction === 'vertical') {
    const maxWidth = Math.max(
      ...sizes.map((size) => size.width),
      METRICS.nodeWidth,
    )
    const contentHeight =
      sizes.reduce((sum, size) => sum + size.height, 0) +
      Math.max(0, schema.nodes.length - 1) * METRICS.flowGap
    const width = Math.max(420, maxWidth + METRICS.paddingX * 2)
    const height = contentHeight + METRICS.paddingY * 2
    let cursorY = METRICS.paddingY

    const positions = new Map()
    schema.nodes.forEach((node, index) => {
      const size = sizes[index]
      positions.set(
        node.id,
        enrich(node, width / 2, cursorY + size.height / 2),
      )
      cursorY += size.height + METRICS.flowGap
    })

    return { width, height, positions }
  }

  const contentWidth =
    sizes.reduce((sum, size) => sum + size.width, 0) +
    Math.max(0, schema.nodes.length - 1) * METRICS.flowGap
  const maxHeight = Math.max(
    ...sizes.map((size) => size.height),
    METRICS.nodeHeight,
  )
  const width = Math.max(720, contentWidth + METRICS.paddingX * 2)
  const height = maxHeight + METRICS.paddingY * 2
  let cursorX = METRICS.paddingX

  const positions = new Map()
  schema.nodes.forEach((node, index) => {
    const size = sizes[index]
    positions.set(
      node.id,
      enrich(node, cursorX + size.width / 2, height / 2),
    )
    cursorX += size.width + METRICS.flowGap
  })

  return { width, height, positions }
}

function hierarchyLevels(schema) {
  const rootId =
    schema.rootId ||
    schema.nodes.find((node) => node.role === 'root')?.id ||
    schema.nodes[0]?.id

  const outgoing = new Map(schema.nodes.map((node) => [node.id, []]))
  schema.edges.forEach((edge) => {
    outgoing.get(edge.from)?.push(edge.to)
  })

  const levels = new Map()
  const queue = rootId ? [{ id: rootId, level: 0 }] : []
  const seen = new Set()

  while (queue.length) {
    const current = queue.shift()
    if (!current || seen.has(current.id)) continue

    seen.add(current.id)
    levels.set(current.id, current.level)

    ;(outgoing.get(current.id) || []).forEach((target) => {
      queue.push({ id: target, level: current.level + 1 })
    })
  }

  schema.nodes.forEach((node) => {
    if (!levels.has(node.id)) {
      levels.set(node.id, 0)
    }
  })

  const grouped = new Map()
  schema.nodes.forEach((node) => {
    const level = levels.get(node.id) || 0
    if (!grouped.has(level)) grouped.set(level, [])
    grouped.get(level).push(node.id)
  })

  return [...grouped.keys()]
    .sort((a, b) => a - b)
    .map((level) => ({
      level,
      ids: grouped.get(level),
    }))
}

function buildHierarchyLayout(schema) {
  const levels = hierarchyLevels(schema)
  const widest = Math.max(...levels.map((item) => item.ids.length), 1)

  const width =
    METRICS.paddingX * 2 +
    widest * METRICS.nodeWidth +
    Math.max(0, widest - 1) * METRICS.hierarchyXGap

  const height =
    METRICS.paddingY * 2 +
    levels.length * METRICS.nodeHeight +
    Math.max(0, levels.length - 1) * METRICS.hierarchyYGap

  const nodeMap = new Map(schema.nodes.map((node) => [node.id, node]))
  const positions = new Map()

  levels.forEach(({ ids }, levelIndex) => {
    const nodes = ids.map((id) => nodeMap.get(id)).filter(Boolean)
    const rowWidth =
      nodes.length * METRICS.nodeWidth +
      Math.max(0, nodes.length - 1) * METRICS.hierarchyXGap
    const startX = (width - rowWidth) / 2

    nodes.forEach((node, nodeIndex) => {
      const centerX =
        startX +
        nodeIndex * (METRICS.nodeWidth + METRICS.hierarchyXGap) +
        METRICS.nodeWidth / 2

      const centerY =
        METRICS.paddingY +
        levelIndex * (METRICS.nodeHeight + METRICS.hierarchyYGap) +
        METRICS.nodeHeight / 2

      positions.set(node.id, enrich(node, centerX, centerY))
    })
  })

  return { width, height, positions }
}

function buildRadialLayout(schema) {
  const centerId =
    schema.centerId ||
    schema.nodes.find((node) => node.role === 'center')?.id ||
    schema.nodes[0]?.id

  const centerNode = schema.nodes.find((node) => node.id === centerId)
  const satellites = schema.nodes.filter((node) => node.id !== centerId)
  const radius = schema.radius || METRICS.radialRadius
  const width = radius * 2 + METRICS.paddingX * 2 + METRICS.nodeWidth
  const height = radius * 2 + METRICS.paddingY * 2 + METRICS.nodeHeight
  const centerX = width / 2
  const centerY = height / 2

  const positions = new Map()

  if (centerNode) {
    positions.set(centerNode.id, enrich(centerNode, centerX, centerY))
  }

  const startAngle =
    Number.isFinite(schema.startAngle) ? schema.startAngle : -90
  const step = satellites.length ? 360 / satellites.length : 0

  satellites.forEach((node, index) => {
    const angleValue = Number.isFinite(node.angle)
      ? node.angle
      : startAngle + index * step

    const nodeRadius = Number.isFinite(node.radius)
      ? node.radius
      : radius

    const angle = (angleValue * Math.PI) / 180

    positions.set(
      node.id,
      enrich(
        node,
        centerX + Math.cos(angle) * nodeRadius,
        centerY + Math.sin(angle) * nodeRadius,
      ),
    )
  })

  return { width, height, positions }
}

function buildConstellationLayout(schema) {
  const width = schema.canvas?.width || 640
  const height = schema.canvas?.height || 420
  const positions = new Map()

  schema.nodes.forEach((node, index) => {
    const fallbackX =
      schema.nodes.length === 1
        ? 0.5
        : 0.18 + (index / (schema.nodes.length - 1)) * 0.64

    const fallbackY = 0.5

    const x = Number.isFinite(node.position?.x)
      ? node.position.x
      : fallbackX

    const y = Number.isFinite(node.position?.y)
      ? node.position.y
      : fallbackY

    positions.set(node.id, enrich(node, x * width, y * height))
  })

  return { width, height, positions }
}

function buildLayout(schema) {
  const layout =
    schema.layout ||
    schema.type ||
    CONCEPT_SCHEMA_LAYOUTS.FLOW

  switch (layout) {
    case CONCEPT_SCHEMA_LAYOUTS.HIERARCHY:
      return buildHierarchyLayout(schema)
    case CONCEPT_SCHEMA_LAYOUTS.RADIAL:
      return buildRadialLayout(schema)
    case CONCEPT_SCHEMA_LAYOUTS.CONSTELLATION:
      return buildConstellationLayout(schema)
    case CONCEPT_SCHEMA_LAYOUTS.FLOW:
    default:
      return buildFlowLayout(schema)
  }
}

function resolveSchemaMinHeight(schema) {
  if (Number.isFinite(schema?.minHeight)) {
    return Math.max(260, schema.minHeight)
  }

  const sizeHint = schema?.sizeHint

  if (sizeHint === 'compact') return 300
  if (sizeHint === 'medium') return 390
  if (sizeHint === 'wide') return 440
  if (sizeHint === 'tall') return 540

  const layout = schema?.layout || schema?.type || 'flow'
  const count = schema?.nodes?.length || 0

  if (layout === 'hierarchy') {
    return count >= 5 ? 540 : 470
  }

  if (layout === 'radial') {
    return count >= 5 ? 500 : 450
  }

  if (layout === 'constellation') {
    return 470
  }

  if (count >= 4) {
    return 400
  }

  return 340
}

function fitSchemaContent(svg, content, schema) {
  if (!svg || !content) return

  let bbox

  try {
    bbox = content.getBBox()
  } catch {
    return
  }

  if (
    !bbox ||
    !Number.isFinite(bbox.x) ||
    !Number.isFinite(bbox.y) ||
    !Number.isFinite(bbox.width) ||
    !Number.isFinite(bbox.height) ||
    bbox.width <= 0 ||
    bbox.height <= 0
  ) {
    return
  }

  const layout = schema?.layout || schema?.type || 'flow'

  const defaultPadding =
    layout === 'flow'
      ? 28
      : layout === 'hierarchy'
        ? 34
        : 38

  const padding = Number.isFinite(schema?.fitPadding)
    ? schema.fitPadding
    : defaultPadding

  const x = bbox.x - padding
  const y = bbox.y - padding
  const width = bbox.width + padding * 2
  const height = bbox.height + padding * 2

  svg.setAttribute('viewBox', `${x} ${y} ${width} ${height}`)
}


function buildContextualLegend(schema) {
  if (schema?.legend === false) {
    return {
      nodeItems: [],
      relationItems: [],
    }
  }

  const nodeRoles = []
  const seenRoles = new Set()

  schema.nodes.forEach((node) => {
    const role = effectiveNodeRole(node)
    if (!role || seenRoles.has(role)) return

    seenRoles.add(role)

    const meta = NODE_ROLE_META[role]
    if (meta) {
      nodeRoles.push({
        id: role,
        glyph: meta.glyph,
        label: meta.label,
      })
    }
  })

  const relationKinds = []
  const seenRelations = new Set()

  schema.edges.forEach((edge) => {
    const kind = relationKindFromEdge(edge)
    if (!kind || seenRelations.has(kind)) return

    seenRelations.add(kind)

    const meta = RELATION_KIND_META[kind]
    if (meta) {
      relationKinds.push({
        id: kind,
        glyph: meta.glyph,
        label: meta.label,
      })
    }
  })

  return {
    nodeItems: nodeRoles,
    relationItems: relationKinds,
  }
}

function buildAriaLabel(schema) {
  if (schema.ariaLabel) return schema.ariaLabel

  return `Esquema conceptual: ${schema.nodes
    .map((node) => node.label)
    .join(', ')}`
}

function animationOrder(schema) {
  const explicit = schema.animation?.order

  if (explicit?.length) {
    return explicit
  }

  const layout =
    schema.layout ||
    schema.type ||
    CONCEPT_SCHEMA_LAYOUTS.FLOW

  if (layout === CONCEPT_SCHEMA_LAYOUTS.RADIAL) {
    const centerId =
      schema.centerId ||
      schema.nodes.find((node) => node.role === 'center')?.id

    return [
      ...(centerId ? [centerId] : []),
      ...schema.nodes
        .map((node) => node.id)
        .filter((id) => id !== centerId),
    ]
  }

  return schema.nodes.map((node) => node.id)
}

function inferredAnimationMode(schema) {
  if (schema.animation?.mode) {
    return schema.animation.mode
  }

  // M02 and any future explicitly delayed composition keep the approved
  // sequential grammar unless the data asks for another mode.
  if (Number.isFinite(schema.animation?.delay)) {
    return 'sequence'
  }

  const layout =
    schema.layout ||
    schema.type ||
    CONCEPT_SCHEMA_LAYOUTS.FLOW

  if (layout === CONCEPT_SCHEMA_LAYOUTS.HIERARCHY) {
    return 'branch'
  }

  if (layout === CONCEPT_SCHEMA_LAYOUTS.RADIAL) {
    return 'radial'
  }

  if (layout === CONCEPT_SCHEMA_LAYOUTS.CONSTELLATION) {
    return 'holistic'
  }

  return 'sequence'
}

function queryNode(svg, id) {
  return svg.querySelector(`[data-concept-node="${id}"]`)
}

function queryEdge(svg, index) {
  return svg.querySelector(`[data-concept-edge="${index}"]`)
}

function incomingEdgeIndexes(schema, ids) {
  const targetIds = new Set(ids)

  return schema.edges
    .map((edge, index) => ({ edge, index }))
    .filter(({ edge }) => targetIds.has(edge.to))
    .map(({ index }) => index)
}

function outgoingEdgeIndexes(schema, id) {
  return schema.edges
    .map((edge, index) => ({ edge, index }))
    .filter(({ edge }) => edge.from === id)
    .map(({ index }) => index)
}

function addSequenceAnimation({
  timeline,
  svg,
  schema,
  nodeDuration,
  edgeDuration,
}) {
  const order = animationOrder(schema)

  order.forEach((nodeId, orderIndex) => {
    const nodeElement = queryNode(svg, nodeId)
    if (!nodeElement) return

    if (orderIndex > 0) {
      const incoming = schema.edges
        .map((edge, edgeIndex) => ({ edge, edgeIndex }))
        .filter(({ edge }) => edge.to === nodeId)

      incoming.forEach(({ edgeIndex }) => {
        const edgeElement = queryEdge(svg, edgeIndex)
        if (!edgeElement) return

        timeline
          .set(edgeElement, { opacity: 1 })
          .to(edgeElement, {
            strokeDashoffset: 0,
            duration: edgeDuration,
            ease: 'none',
          })
      })
    }

    timeline.to(nodeElement, {
      opacity: 1,
      scale: 1,
      duration: nodeDuration,
    })
  })
}

function addHierarchyAnimation({
  timeline,
  svg,
  schema,
  nodeDuration,
  edgeDuration,
}) {
  const levels = hierarchyLevels(schema)

  levels.forEach(({ ids }, levelIndex) => {
    const nodes = ids
      .map((id) => queryNode(svg, id))
      .filter(Boolean)

    if (!nodes.length) return

    if (levelIndex === 0) {
      timeline.to(nodes, {
        opacity: 1,
        scale: 1,
        duration: nodeDuration,
        stagger: 0.06,
      })
      return
    }

    const edgeIndexes = incomingEdgeIndexes(schema, ids)
    const edges = edgeIndexes
      .map((index) => queryEdge(svg, index))
      .filter(Boolean)

    if (edges.length) {
      timeline
        .set(edges, { opacity: 1 })
        .to(edges, {
          strokeDashoffset: 0,
          duration: edgeDuration,
          stagger: 0.05,
          ease: 'none',
        })
    }

    timeline.to(
      nodes,
      {
        opacity: 1,
        scale: 1,
        duration: nodeDuration,
        stagger: 0.08,
      },
      edges.length ? '<0.12' : undefined,
    )
  })
}

function addRadialAnimation({
  timeline,
  svg,
  schema,
  nodeDuration,
  edgeDuration,
}) {
  const centerId =
    schema.centerId ||
    schema.nodes.find((node) => node.role === 'center')?.id ||
    schema.nodes[0]?.id

  const centerNode = centerId ? queryNode(svg, centerId) : null

  if (centerNode) {
    timeline.to(centerNode, {
      opacity: 1,
      scale: 1,
      duration: nodeDuration,
    })
  }

  const edges = schema.edges
    .map((_, index) => queryEdge(svg, index))
    .filter(Boolean)

  const satellites = schema.nodes
    .filter((node) => node.id !== centerId)
    .map((node) => queryNode(svg, node.id))
    .filter(Boolean)

  if (edges.length) {
    timeline
      .set(edges, { opacity: 1 })
      .to(edges, {
        strokeDashoffset: 0,
        duration: edgeDuration,
        stagger: 0.07,
        ease: 'none',
      })
  }

  if (satellites.length) {
    timeline.to(
      satellites,
      {
        opacity: 1,
        scale: 1,
        duration: nodeDuration,
        stagger: 0.08,
      },
      edges.length ? '<0.16' : undefined,
    )
  }
}

function addHolisticAnimation({
  timeline,
  svg,
  schema,
  nodeDuration,
  edgeDuration,
}) {
  const emphasized =
    schema.nodes.find((node) => node.emphasis)?.id ||
    schema.nodes.find((node) => node.role === 'center')?.id ||
    schema.nodes[0]?.id

  const anchor = emphasized ? queryNode(svg, emphasized) : null

  if (anchor) {
    timeline.to(anchor, {
      opacity: 1,
      scale: 1,
      duration: nodeDuration,
    })
  }

  const remainingNodes = schema.nodes
    .filter((node) => node.id !== emphasized)
    .map((node) => queryNode(svg, node.id))
    .filter(Boolean)

  const edges = schema.edges
    .map((_, index) => queryEdge(svg, index))
    .filter(Boolean)

  if (edges.length) {
    timeline
      .set(edges, { opacity: 1 })
      .to(edges, {
        strokeDashoffset: 0,
        duration: edgeDuration,
        stagger: 0.055,
        ease: 'none',
      })
  }

  if (remainingNodes.length) {
    timeline.to(
      remainingNodes,
      {
        opacity: 1,
        scale: 1,
        duration: nodeDuration,
        stagger: 0.07,
      },
      edges.length ? '<0.18' : undefined,
    )
  }
}

export default function AnimatedConceptSchema({ schema }) {
  const svgRef = useRef(null)
  const contentRef = useRef(null)
  const completedRef = useRef(false)
  const reactId = useId()
  const idBase = reactId.replace(/:/g, '')

  const markerIds = {
    forward: `concept-schema-arrow-${idBase}`,
    double: `concept-schema-double-arrow-${idBase}`,
  }

  const layout = useMemo(() => {
    if (!schema?.nodes?.length) return null
    return buildLayout(schema)
  }, [schema])

  const schemaMinHeight = useMemo(
    () => resolveSchemaMinHeight(schema),
    [schema],
  )

  const semanticLegend = useMemo(
    () => buildContextualLegend(schema),
    [schema],
  )

  useLayoutEffect(() => {
    const svg = svgRef.current
    const content = contentRef.current

    if (!svg || !content || !layout || !schema?.nodes?.length) {
      return undefined
    }

    fitSchemaContent(svg, content, schema)

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const nodeElements = schema.nodes
        .map((node) => queryNode(svg, node.id))
        .filter(Boolean)

      const edgeElements = schema.edges
        .map((_, index) => queryEdge(svg, index))
        .filter(Boolean)

      const finish = () => {
        gsap.set(nodeElements, {
          opacity: 1,
          scale: 1,
          transformOrigin: 'center center',
        })

        gsap.set(edgeElements, {
          opacity: 1,
          strokeDashoffset: 0,
          clearProps: 'strokeDasharray',
        })
      }

      if (reduceMotion || completedRef.current) {
        finish()
        fitSchemaContent(svg, content, schema)
        return
      }

      gsap.set(nodeElements, {
        opacity: 0,
        scale: 0.96,
        transformOrigin: 'center center',
      })

      gsap.set(edgeElements, {
        opacity: 0,
        strokeDasharray: 1,
        strokeDashoffset: 1,
      })

      const nodeDuration =
        schema.animation?.nodeDuration ?? 0.3

      const edgeDuration =
        schema.animation?.edgeDuration ?? 0.34

      const timeline = gsap.timeline({
        repeat: 0,
        delay: schema.animation?.delay ?? 0.12,
        defaults: { ease: 'power1.out' },
        onComplete: () => {
          completedRef.current = true
          finish()
          fitSchemaContent(svg, content, schema)
        },
      })

      const mode = inferredAnimationMode(schema)

      if (mode === 'branch') {
        addHierarchyAnimation({
          timeline,
          svg,
          schema,
          nodeDuration,
          edgeDuration,
        })
      } else if (mode === 'radial') {
        addRadialAnimation({
          timeline,
          svg,
          schema,
          nodeDuration,
          edgeDuration,
        })
      } else if (mode === 'holistic') {
        addHolisticAnimation({
          timeline,
          svg,
          schema,
          nodeDuration,
          edgeDuration,
        })
      } else {
        addSequenceAnimation({
          timeline,
          svg,
          schema,
          nodeDuration,
          edgeDuration,
        })
      }

      const emphasizedShapes = schema.nodes
        .filter((node) => node.emphasis)
        .map((node) =>
          svg.querySelector(
            `[data-concept-node="${node.id}"] .concept-schema-node__shape`,
          ),
        )
        .filter(Boolean)

      if (emphasizedShapes.length) {
        timeline
          .to(
            emphasizedShapes,
            {
              strokeWidth: 2.05,
              duration: 0.16,
              ease: 'power1.inOut',
            },
            '+=0.04',
          )
          .to(emphasizedShapes, {
            strokeWidth: 1.2,
            duration: 0.18,
            ease: 'power1.inOut',
          })
      }
    }, svg)

    let cancelled = false

    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) {
          fitSchemaContent(svg, content, schema)
        }
      })
    }

    return () => {
      cancelled = true
      ctx.revert()
    }
  }, [schema, layout])

  if (!layout || !schema?.nodes?.length) return null

  return (
    <div
      className={[
        'animated-concept-schema',
        `is-layout-${schema.layout || schema.type || 'flow'}`,
      ].join(' ')}
      style={{
        '--concept-schema-min-height': `${schemaMinHeight}px`,
      }}
    >
      <svg
        ref={svgRef}
        className="animated-concept-schema__svg"
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        width="100%"
        role="img"
        aria-label={buildAriaLabel(schema)}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id={markerIds.forward}
            markerWidth="14"
            markerHeight="14"
            refX="12"
            refY="7"
            orient="auto-start-reverse"
            markerUnits="userSpaceOnUse"
            overflow="visible"
          >
            <path
              className="concept-schema-arrowhead"
              d="M1,1 L12,7 L1,13 Z"
            />
          </marker>

          <marker
            id={markerIds.double}
            markerWidth="18"
            markerHeight="14"
            refX="16"
            refY="7"
            orient="auto-start-reverse"
            markerUnits="userSpaceOnUse"
            overflow="visible"
          >
            <path
              className="concept-schema-arrowhead"
              d="M1,1 L10,7 L1,13 Z"
            />
            <path
              className="concept-schema-arrowhead"
              d="M7,1 L16,7 L7,13 Z"
            />
          </marker>
        </defs>

        <g
          ref={contentRef}
          className="animated-concept-schema__content"
        >
          <g className="animated-concept-schema__edges">
            {schema.edges.map((edge, index) => {
              const from = layout.positions.get(edge.from)
              const to = layout.positions.get(edge.to)
              if (!from || !to) return null

              return (
                <ConceptEdge
                  key={`${edge.from}-${edge.to}-${index}`}
                  edge={edge}
                  index={index}
                  from={from}
                  to={to}
                  markerIds={markerIds}
                />
              )
            })}
          </g>

          <g className="animated-concept-schema__nodes">
            {schema.nodes.map((node) => {
              const position = layout.positions.get(node.id)
              if (!position) return null

              return (
                <ConceptNode
                  key={node.id}
                  node={node}
                  position={position}
                />
              )
            })}
          </g>
        </g>
      </svg>

      {(semanticLegend.nodeItems.length > 0 ||
        semanticLegend.relationItems.length > 0) && (
        <aside
          className="animated-concept-schema__legend"
          aria-label="Clave del esquema"
        >
          <span className="animated-concept-schema__legend-title">
            CLAVE
          </span>

          <div className="animated-concept-schema__legend-items">
            {semanticLegend.nodeItems.map((item) => (
              <span
                key={`node-role-${item.id}`}
                className="animated-concept-schema__legend-item is-node"
              >
                <b>{item.glyph}</b>
                {item.label}
              </span>
            ))}

            {semanticLegend.relationItems.map((item) => (
              <span
                key={`relation-kind-${item.id}`}
                className="animated-concept-schema__legend-item is-relation"
              >
                <b>{item.glyph}</b>
                {item.label}
              </span>
            ))}
          </div>
        </aside>
      )}
    </div>
  )
}
