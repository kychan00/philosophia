// Distribución determinista del sistema 2D de Lukács.
export const LUKACS_NODE_WIDTH = 310
export const LUKACS_NODE_HEIGHT = 600
export const LUKACS_NODE_VERTICAL_GAP = 90
export const LUKACS_NODE_STEP = LUKACS_NODE_HEIGHT + LUKACS_NODE_VERTICAL_GAP

// Conserva las columnas y el centro del grupo; separa tarjetas largas sin superponerlas.
export function layoutLukacsNodes(nodes) {
  const columns = new Map()
  nodes.forEach((node) => {
    const x = node.position.x
    if (!columns.has(x)) columns.set(x, [])
    columns.get(x).push(node)
  })
  const positions = new Map()
  for (const group of columns.values()) {
    const sorted = [...group].sort((a, b) => a.position.y - b.position.y || a.id.localeCompare(b.id))
    const placed = []
    sorted.forEach((node, i) => {
      placed.push(i ? Math.max(node.position.y, placed[i - 1] + LUKACS_NODE_STEP) : node.position.y)
    })
    const oldAverage = sorted.reduce((s, n) => s + n.position.y, 0) / sorted.length
    const newAverage = placed.reduce((s, y) => s + y, 0) / placed.length
    sorted.forEach((node, i) => positions.set(node.id, {
      ...node, position: { ...node.position, y: placed[i] + oldAverage - newAverage },
    }))
  }
  return nodes.map((node) => positions.get(node.id))
}
