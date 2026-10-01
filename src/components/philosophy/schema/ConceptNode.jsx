import {
  CONCEPT_SCHEMA_SHAPES,
  effectiveNodeRole,
  effectiveNodeShape,
} from './schemaTypes'

function wrapLabel(label, maxChars = 18) {
  const words = String(label).split(/\s+/)
  const lines = []
  let current = ''

  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word

    if (candidate.length > maxChars && current) {
      lines.push(current)
      current = word
    } else {
      current = candidate
    }
  })

  if (current) lines.push(current)

  return lines.slice(0, 3)
}

function Shape({ shape, width, height }) {
  const common = {
    className: 'concept-schema-node__shape',
  }

  switch (shape) {
    case CONCEPT_SCHEMA_SHAPES.CIRCLE:
      return (
        <circle
          {...common}
          cx={width / 2}
          cy={height / 2}
          r={Math.min(width, height) / 2 - 3}
        />
      )

    case CONCEPT_SCHEMA_SHAPES.DIAMOND:
      return (
        <polygon
          {...common}
          points={`${width / 2},2 ${width - 2},${height / 2} ${width / 2},${height - 2} 2,${height / 2}`}
        />
      )

    case CONCEPT_SCHEMA_SHAPES.HEXAGON:
      return (
        <polygon
          {...common}
          points={`${width * 0.18},2 ${width * 0.82},2 ${width - 2},${height / 2} ${width * 0.82},${height - 2} ${width * 0.18},${height - 2} 2,${height / 2}`}
        />
      )

    case CONCEPT_SCHEMA_SHAPES.PILL:
      return (
        <rect
          {...common}
          width={width}
          height={height}
          rx={height / 2}
        />
      )

    case CONCEPT_SCHEMA_SHAPES.RECT:
      return (
        <rect
          {...common}
          width={width}
          height={height}
          rx="0"
        />
      )

    case CONCEPT_SCHEMA_SHAPES.ROUNDED_RECT:
    default:
      return (
        <rect
          {...common}
          width={width}
          height={height}
          rx="5"
        />
      )
  }
}

export default function ConceptNode({ node, position }) {
  const { x, y, width, height } = position
  const role = effectiveNodeRole(node)
  const shape = effectiveNodeShape(node)
  const lines = wrapLabel(node.label, node.wrapAt || 18)
  const lineHeight = 15
  const firstY =
    height / 2 - ((lines.length - 1) * lineHeight) / 2

  return (
    <g
      className={[
        'concept-schema-node',
        `is-shape-${shape}`,
        `is-role-${role}`,
        node.emphasis ? 'is-emphasis' : '',
        node.tone ? `is-tone-${node.tone}` : '',
      ]
        .filter(Boolean)
        .join(' ')}
      data-concept-node={node.id}
      data-concept-role={role}
      transform={`translate(${x} ${y})`}
    >
      <Shape
        shape={shape}
        width={width}
        height={height}
      />

      <text
        className="concept-schema-node__label"
        x={width / 2}
        y={firstY}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {lines.map((line, index) => (
          <tspan
            key={`${node.id}-line-${index}`}
            x={width / 2}
            dy={index === 0 ? 0 : lineHeight}
          >
            {line}
          </tspan>
        ))}
      </text>

      {node.caption && (
        <text
          className="concept-schema-node__caption"
          x={width / 2}
          y={height - 8}
          textAnchor="middle"
        >
          {node.caption}
        </text>
      )}
    </g>
  )
}
