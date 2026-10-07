export const SYSTEM_2D_THEME = Object.freeze({
  background: Object.freeze({
    app: '#ebe3d5',
    paper: '#f7f0e4',
    paper2: '#f1e8d9',
    node: '#faf6ee',
    folio: '#f6eee1',
  }),
  ink: '#211d18',
  muted: '#70675e',
  edge: Object.freeze({
    default: '#61584d',
    critical: '#8b3d34',
    selected: '#9c7434',
    guided: '#526c59',
    conceptual: Object.freeze({
      default: '#7a5a8c',
      foundation: '#526c59',
      manifestation: '#496a78',
      inversion: '#8b3d34',
      analogy: '#7a5a8c',
      history: '#6c6650',
      development: '#9c7434',
    }),
  }),
})

export function resolveSystem2DEdgeColor({
  guidedActive = false,
  conceptual = false,
  conceptualType = null,
  relation = null,
  touchesSelected = false,
} = {}) {
  if (guidedActive) return SYSTEM_2D_THEME.edge.guided

  if (conceptual) {
    return (
      SYSTEM_2D_THEME.edge.conceptual[conceptualType] ||
      SYSTEM_2D_THEME.edge.conceptual.default
    )
  }

  if (relation === 'critical') return SYSTEM_2D_THEME.edge.critical
  if (touchesSelected) return SYSTEM_2D_THEME.edge.selected
  return SYSTEM_2D_THEME.edge.default
}
