import { effectiveRelationStyle } from './schemaTypes'

function center(position) {
  return {
    x: position.x + position.width / 2,
    y: position.y + position.height / 2,
  }
}

function boundaryPoint(from, toward) {
  const dx = toward.x - from.centerX
  const dy = toward.y - from.centerY

  if (!dx && !dy) {
    return { x: from.centerX, y: from.centerY }
  }

  const halfW = from.width / 2
  const halfH = from.height / 2
  const scaleX = dx ? halfW / Math.abs(dx) : Infinity
  const scaleY = dy ? halfH / Math.abs(dy) : Infinity
  const scale = Math.min(scaleX, scaleY)

  return {
    x: from.centerX + dx * scale,
    y: from.centerY + dy * scale,
  }
}

function moveToward(point, toward, distance) {
  const dx = toward.x - point.x
  const dy = toward.y - point.y
  const length = Math.hypot(dx, dy)

  if (!length) return point

  const amount = Math.min(distance, length * 0.32)

  return {
    x: point.x + (dx / length) * amount,
    y: point.y + (dy / length) * amount,
  }
}

function makeEndpoints(edge, from, to, arrow) {
  const fromCenter = center(from)
  const toCenter = center(to)

  const rawStart = boundaryPoint(from, toCenter)
  const rawEnd = boundaryPoint(to, fromCenter)

  const defaultStartGap = arrow === 'bidirectional' ? 14 : 6
  const defaultEndGap =
    arrow === 'none'
      ? 6
      : arrow === 'double'
        ? 17
        : 14

  const startGap = Number.isFinite(edge.startGap)
    ? edge.startGap
    : defaultStartGap

  const endGap = Number.isFinite(edge.endGap)
    ? edge.endGap
    : defaultEndGap

  return {
    start: moveToward(rawStart, rawEnd, startGap),
    end: moveToward(rawEnd, rawStart, endGap),
  }
}

function automaticLabelOffset(start, end, edge) {
  if (edge.labelPlacement === 'on-line') {
    return { x: 0, y: 0 }
  }

  const dx = end.x - start.x
  const dy = end.y - start.y

  if (Math.abs(dx) >= Math.abs(dy)) {
    return {
      x: 0,
      y: Number.isFinite(edge.labelDistance)
        ? -Math.abs(edge.labelDistance)
        : -22,
    }
  }

  return {
    x: Number.isFinite(edge.labelDistance)
      ? Math.abs(edge.labelDistance)
      : 28,
    y: 0,
  }
}

function edgePath(edge, from, to, routing, arrow) {
  const { start, end } = makeEndpoints(edge, from, to, arrow)

  if (routing === 'curved') {
    const dx = end.x - start.x
    const dy = end.y - start.y
    const curvature = edge.curvature ?? 0.16
    const controlX = (start.x + end.x) / 2 - dy * curvature
    const controlY = (start.y + end.y) / 2 + dx * curvature

    return {
      d: `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`,
      labelX: (start.x + 2 * controlX + end.x) / 4,
      labelY: (start.y + 2 * controlY + end.y) / 4,
      start,
      end,
    }
  }

  if (routing === 'orthogonal') {
    const verticalFirst = edge.orthogonal === 'vertical-first'

    if (verticalFirst) {
      const midY = (start.y + end.y) / 2

      return {
        d: `M ${start.x} ${start.y} L ${start.x} ${midY} L ${end.x} ${midY} L ${end.x} ${end.y}`,
        labelX: (start.x + end.x) / 2,
        labelY: midY,
        start,
        end,
      }
    }

    const midX = (start.x + end.x) / 2

    return {
      d: `M ${start.x} ${start.y} L ${midX} ${start.y} L ${midX} ${end.y} L ${end.x} ${end.y}`,
      labelX: midX,
      labelY: (start.y + end.y) / 2,
      start,
      end,
    }
  }

  return {
    d: `M ${start.x} ${start.y} L ${end.x} ${end.y}`,
    labelX: (start.x + end.x) / 2,
    labelY: (start.y + end.y) / 2,
    start,
    end,
  }
}

function labelMetrics(label) {
  const width = Math.max(46, String(label).length * 5.9 + 18)
  return { width, height: 20 }
}

export default function ConceptEdge({
  edge,
  index,
  from,
  to,
  markerIds,
}) {
  const {
    relationKind,
    arrow,
    line,
    routing,
  } = effectiveRelationStyle(edge)

  const geometry = edgePath(
    edge,
    from,
    to,
    routing,
    arrow,
  )

  const autoOffset = automaticLabelOffset(
    geometry.start,
    geometry.end,
    edge,
  )

  const labelX =
    geometry.labelX +
    autoOffset.x +
    (edge.labelOffsetX || 0)

  const labelY =
    geometry.labelY +
    autoOffset.y +
    (edge.labelOffsetY || 0)

  const markerEnd =
    arrow === 'none'
      ? undefined
      : arrow === 'double'
        ? `url(#${markerIds.double})`
        : `url(#${markerIds.forward})`

  const markerStart =
    arrow === 'bidirectional'
      ? `url(#${markerIds.forward})`
      : undefined

  const labelBox = edge.label ? labelMetrics(edge.label) : null

  return (
    <g
      className={[
        'concept-schema-edge-group',
        `is-line-${line}`,
        `is-arrow-${arrow}`,
        `is-relation-${relationKind}`,
        edge.kind ? `is-kind-${edge.kind}` : '',
      ]
        .filter(Boolean)
        .join(' ')}
      data-concept-relation={relationKind}
    >
      <path
        className="concept-schema-edge"
        data-concept-edge={index}
        d={geometry.d}
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="0"
        markerStart={markerStart}
        markerEnd={markerEnd}
      />

      {edge.label && labelBox && (
        <g
          className="concept-schema-edge__label-group"
          transform={`translate(${labelX} ${labelY})`}
        >
          <rect
            className="concept-schema-edge__label-plate"
            x={-labelBox.width / 2}
            y={-labelBox.height / 2}
            width={labelBox.width}
            height={labelBox.height}
            rx="3"
          />
          <text
            className="concept-schema-edge__label"
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {edge.label}
          </text>
        </g>
      )}
    </g>
  )
}
