const PREFIX = 'philosophia.kant.prefaces.v1'

const KEYS = {
  mastery: `${PREFIX}.mastery`,
  notes: `${PREFIX}.notes`,
  history: `${PREFIX}.history`,
  session: `${PREFIX}.session`,
  positions: `${PREFIX}.positions`,
}

function readJSON(key, fallback) {
  if (typeof window === 'undefined') return fallback

  try {
    const value = JSON.parse(window.localStorage.getItem(key) || 'null')
    return value ?? fallback
  } catch {
    return fallback
  }
}

function writeJSON(key, value) {
  if (typeof window === 'undefined') return value
  window.localStorage.setItem(key, JSON.stringify(value))
  return value
}

export function loadKantPrefacesMastery() {
  const value = readJSON(KEYS.mastery, {})
  return value && typeof value === 'object' ? value : {}
}

export function setKantPrefacesMastery(nodeId, status) {
  const current = loadKantPrefacesMastery()
  const next = { ...current }

  if (!status || status === 'new') {
    delete next[nodeId]
  } else {
    next[nodeId] = status
  }

  return writeJSON(KEYS.mastery, next)
}

export function loadKantPrefacesNotes() {
  const value = readJSON(KEYS.notes, {})
  return value && typeof value === 'object' ? value : {}
}

export function saveKantPrefacesNote(nodeId, text) {
  const current = loadKantPrefacesNotes()
  const next = { ...current }

  if (text) {
    next[nodeId] = text
  } else {
    delete next[nodeId]
  }

  return writeJSON(KEYS.notes, next)
}

export function loadKantPrefacesHistory() {
  const value = readJSON(KEYS.history, [])
  return Array.isArray(value) ? value : []
}

export function recordKantPrefacesHistory(entry) {
  if (!entry?.nodeId) return loadKantPrefacesHistory()

  const current = loadKantPrefacesHistory()
  const withoutCurrent = current.filter((item) => item.nodeId !== entry.nodeId)
  const next = [
    {
      ...entry,
      visitedAt: new Date().toISOString(),
    },
    ...withoutCurrent,
  ].slice(0, 20)

  return writeJSON(KEYS.history, next)
}

export function loadKantPrefacesSession() {
  const value = readJSON(KEYS.session, null)
  return value && typeof value === 'object' ? value : null
}

export function saveKantPrefacesSession(session) {
  return writeJSON(KEYS.session, session)
}

function loadAllPositions() {
  const value = readJSON(KEYS.positions, {})
  return value && typeof value === 'object' ? value : {}
}

export function loadKantPrefacesPositions(viewId) {
  const all = loadAllPositions()
  const value = all[viewId]
  return value && typeof value === 'object' ? value : {}
}

export function saveKantPrefacesPositions(viewId, nodes) {
  const all = loadAllPositions()
  const positions = {}

  nodes.forEach((node) => {
    positions[node.id] = {
      x: node.position.x,
      y: node.position.y,
    }
  })

  return writeJSON(KEYS.positions, {
    ...all,
    [viewId]: positions,
  })
}

export function clearKantPrefacesPositions(viewId) {
  const all = loadAllPositions()
  const next = { ...all }
  delete next[viewId]
  return writeJSON(KEYS.positions, next)
}
