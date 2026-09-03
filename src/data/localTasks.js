export const CUSTOM_TASKS_KEY = 'philosophia-custom-tasks-v1'
export const CUSTOM_TASKS_EVENT = 'philosophia-custom-tasks-changed'

export function loadCustomTasks() {
  if (typeof window === 'undefined') return []

  try {
    const value = JSON.parse(window.localStorage.getItem(CUSTOM_TASKS_KEY) || '[]')
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

export function saveCustomTasks(tasks) {
  if (typeof window === 'undefined') return

  window.localStorage.setItem(CUSTOM_TASKS_KEY, JSON.stringify(tasks))
  window.dispatchEvent(
    new CustomEvent(CUSTOM_TASKS_EVENT, {
      detail: { tasks },
    }),
  )
}

export function makeCustomTaskId() {
  const random =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID().slice(0, 8)
      : Math.random().toString(36).slice(2, 10)

  return `local-${Date.now()}-${random}`
}
