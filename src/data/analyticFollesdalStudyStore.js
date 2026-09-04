const STORAGE_PREFIX = 'philosophia-follesdal'

const KEYS = {
  positions: `${STORAGE_PREFIX}-positions-v1`,
  mastery: `${STORAGE_PREFIX}-mastery-v1`,
  notes: `${STORAGE_PREFIX}-notes-v1`,
  history: `${STORAGE_PREFIX}-history-v1`,
}

function readJson(key, fallback) {
  if (typeof window === 'undefined') return fallback

  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return fallback

    const parsed = JSON.parse(raw)
    return parsed ?? fallback
  } catch {
    return fallback
  }
}

function writeJson(key, value) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(
      key,
      JSON.stringify(value),
    )
  } catch {
    // Storage failure must never break the study map.
  }
}

export function loadFollesdalPositions() {
  return readJson(KEYS.positions, {})
}

export function saveFollesdalPositions(nodes) {
  const positions = {}

  nodes.forEach((node) => {
    if (!node?.id || !node?.position) return

    positions[node.id] = {
      x: node.position.x,
      y: node.position.y,
    }
  })

  writeJson(KEYS.positions, positions)
}

export function clearFollesdalPositions() {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.removeItem(KEYS.positions)
  } catch {
    // Ignore storage failures.
  }
}

export function loadFollesdalMastery() {
  return readJson(KEYS.mastery, {})
}

export function setFollesdalMastery(nodeId, status) {
  const mastery = loadFollesdalMastery()

  if (!status) {
    delete mastery[nodeId]
  } else {
    mastery[nodeId] = status
  }

  writeJson(KEYS.mastery, mastery)
  return mastery
}

export function loadFollesdalNotes() {
  return readJson(KEYS.notes, {})
}

export function saveFollesdalNote(nodeId, note) {
  const notes = loadFollesdalNotes()

  if (!note?.trim()) {
    delete notes[nodeId]
  } else {
    notes[nodeId] = note
  }

  writeJson(KEYS.notes, notes)
  return notes
}

export function loadFollesdalHistory() {
  return readJson(KEYS.history, [])
}

export function recordFollesdalHistory(entry) {
  if (!entry?.nodeId) return loadFollesdalHistory()

  const history = loadFollesdalHistory()

  const next = [
    {
      nodeId: entry.nodeId,
      phaseId: entry.phaseId || null,
      mode: entry.mode || 'manual',
      at: new Date().toISOString(),
    },
    ...history.filter(
      (item) => item.nodeId !== entry.nodeId,
    ),
  ].slice(0, 30)

  writeJson(KEYS.history, next)
  return next
}

export function clearFollesdalStudyData() {
  if (typeof window === 'undefined') return

  Object.values(KEYS).forEach((key) => {
    try {
      window.localStorage.removeItem(key)
    } catch {
      // Ignore storage failures.
    }
  })
}
