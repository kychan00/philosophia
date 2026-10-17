// Distribución determinista para el sistema 2D de Lukács · Ontología del ser social.
// Mantiene el orden horizontal conceptual, pero normaliza carriles y separaciones
// para que una tarjeta documental larga nunca invada otra.
export const LUKACS_ONTOLOGY_NODE_WIDTH = 310
export const LUKACS_ONTOLOGY_NODE_HEIGHT = 600
export const LUKACS_ONTOLOGY_HORIZONTAL_GAP = 110
export const LUKACS_ONTOLOGY_VERTICAL_GAP = 110
export const LUKACS_ONTOLOGY_COLUMN_STEP =
  LUKACS_ONTOLOGY_NODE_WIDTH + LUKACS_ONTOLOGY_HORIZONTAL_GAP
export const LUKACS_ONTOLOGY_ROW_STEP =
  LUKACS_ONTOLOGY_NODE_HEIGHT + LUKACS_ONTOLOGY_VERTICAL_GAP

export function layoutLukacsOntologyNodes(nodes) {
  const sourceColumns = [...new Set(nodes.map((node) => node.position.x))].sort((a, b) => a - b)
  const laneX = new Map(
    sourceColumns.map((sourceX, index) => [sourceX, index * LUKACS_ONTOLOGY_COLUMN_STEP]),
  )

  const columns = new Map()
  nodes.forEach((node) => {
    const sourceX = node.position.x
    if (!columns.has(sourceX)) columns.set(sourceX, [])
    columns.get(sourceX).push(node)
  })

  const placedById = new Map()

  for (const [sourceX, group] of columns.entries()) {
    const sorted = [...group].sort(
      (a, b) => a.position.y - b.position.y || a.id.localeCompare(b.id),
    )
    const originalCenter =
      sorted.reduce((sum, node) => sum + node.position.y, 0) / Math.max(sorted.length, 1)

    const rawRows = []
    sorted.forEach((node, index) => {
      if (index === 0) {
        rawRows.push(node.position.y)
        return
      }
      rawRows.push(
        Math.max(node.position.y, rawRows[index - 1] + LUKACS_ONTOLOGY_ROW_STEP),
      )
    })

    const rawCenter =
      rawRows.reduce((sum, y) => sum + y, 0) / Math.max(rawRows.length, 1)
    const recenter = originalCenter - rawCenter

    sorted.forEach((node, index) => {
      placedById.set(node.id, {
        ...node,
        position: {
          x: laneX.get(sourceX),
          y: Math.round((rawRows[index] + recenter) * 1000) / 1000,
        },
      })
    })
  }

  return nodes.map((node) => placedById.get(node.id))
}
