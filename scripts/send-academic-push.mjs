import crypto from 'node:crypto'
import tasks from '../src/data/tasks.js'
import CLASS_SCHEDULE from '../src/data/academicSchedule.js'

const APP_ID = process.env.ONESIGNAL_APP_ID || ''
const API_KEY = process.env.ONESIGNAL_API_KEY || ''

const BASE_URL = 'https://kychan00.github.io/philosophia/#'
const API_URL = 'https://api.onesignal.com/notifications'
const SEMESTER_START = '2026-08-17'
const SEMESTER_END = '2026-12-31'
const MEXICO_CITY_OFFSET = '-06:00'
const LOOKBACK_MINUTES = 20
const FUTURE_GRACE_MINUTES = 2

const UUID_NAMESPACE = 'e7b0e019-2aa7-4c32-bdf5-93c05d0d577f'

const dryRun = process.argv.includes('--dry-run')
const testMode = process.argv.includes('--test')

function parseUuid(value) {
  return Buffer.from(value.replaceAll('-', ''), 'hex')
}

function uuidV5(name, namespace = UUID_NAMESPACE) {
  const ns = parseUuid(namespace)
  const hash = crypto.createHash('sha1').update(ns).update(name).digest()
  const bytes = Buffer.from(hash.subarray(0, 16))
  bytes[6] = (bytes[6] & 0x0f) | 0x50
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = bytes.toString('hex')

  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32),
  ].join('-')
}

function localDateKey(date) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Mexico_City',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

function shiftDateKey(dateKey, days) {
  const [year, month, day] = dateKey.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day + days, 12))
  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, '0'),
    String(date.getUTCDate()).padStart(2, '0'),
  ].join('-')
}

function weekdayForDateKey(dateKey) {
  return new Date(`${dateKey}T12:00:00${MEXICO_CITY_OFFSET}`).getUTCDay()
}

function parseMexicoDateTime(dateKey, time) {
  return new Date(`${dateKey}T${time}:00${MEXICO_CITY_OFFSET}`)
}

function taskDeadline(task) {
  if (!task.dueDate) return null
  if (task.dueTime) return task.dueTime

  const weekday = weekdayForDateKey(task.dueDate)
  const course = CLASS_SCHEDULE.find(
    (item) =>
      item.subject === task.subject &&
      item.weekdays.includes(weekday),
  )

  if (!course) return '23:59'
  return course.time.split('–')[1]?.trim() || '23:59'
}

function classEvents(now) {
  const today = localDateKey(now)
  const events = []

  for (let offset = -1; offset <= 2; offset += 1) {
    const dateKey = shiftDateKey(today, offset)
    if (dateKey < SEMESTER_START || dateKey > SEMESTER_END) continue

    const weekday = weekdayForDateKey(dateKey)

    for (const course of CLASS_SCHEDULE) {
      if (!course.weekdays.includes(weekday)) continue
      const start = course.time.split('–')[0]?.trim()
      const date = parseMexicoDateTime(dateKey, start)

      events.push({
        id: `class:${course.code}:${dateKey}`,
        kind: 'class',
        subject: course.subject,
        subjectCode: course.code,
        room: course.room,
        route: course.route,
        date,
        dateKey,
      })
    }
  }

  return events
}

function taskEvents() {
  return tasks
    .filter((task) => task.dueDate && !task.completed)
    .map((task) => {
      const time = taskDeadline(task)
      return {
        id: `task:${task.id}:${task.dueDate}:${time}`,
        kind: 'task',
        subject: task.subject,
        subjectCode: task.subjectCode,
        title: task.title,
        route: task.studyRoute || task.sourceRoute || '/tareas',
        date: parseMexicoDateTime(task.dueDate, time),
        dateKey: task.dueDate,
        time,
      }
    })
}

function formatRemaining(ms) {
  const minutes = Math.max(1, Math.round(ms / 60000))

  if (minutes < 60) return `${minutes} min`

  const hours = Math.round(minutes / 60)
  if (hours < 24) return `${hours} h`

  const days = Math.round(hours / 24)
  return `${days} ${days === 1 ? 'día' : 'días'}`
}

function buildReminder(event, reminderMinutes, now) {
  const reminderAt = new Date(event.date.getTime() - reminderMinutes * 60000)
  const ageMinutes = (now - reminderAt) / 60000
  const untilEvent = event.date - now

  if (ageMinutes < -FUTURE_GRACE_MINUTES) return null
  if (ageMinutes > LOOKBACK_MINUTES) return null
  if (untilEvent <= 0) return null

  const remaining = formatRemaining(untilEvent)

  if (event.kind === 'class') {
    return {
      operation: `${event.id}:reminder:${reminderMinutes}`,
      preferenceTag: `reminder_class_${reminderMinutes}`,
      title: `${event.subject} en ${remaining}`,
      body: `${event.room} · ${event.date.toLocaleTimeString('es-MX', {
        timeZone: 'America/Mexico_City',
        hour: '2-digit',
        minute: '2-digit',
      })}`,
      route: event.route,
      name: `Clase · ${event.subject} · ${event.dateKey} · ${reminderMinutes}m`,
    }
  }

  return {
    operation: `${event.id}:reminder:${reminderMinutes}`,
    preferenceTag: `reminder_task_${reminderMinutes}`,
    title: `Tarea de ${event.subject} en ${remaining}`,
    body: `${event.title} · vence ${event.date.toLocaleTimeString('es-MX', {
      timeZone: 'America/Mexico_City',
      hour: '2-digit',
      minute: '2-digit',
    })}`,
    route: event.route,
    name: `Tarea · ${event.subject} · ${event.dateKey} · ${reminderMinutes}m`,
  }
}

async function sendMessage(reminder) {
  const payload = {
    app_id: APP_ID,
    target_channel: 'push',
    filters: [
      {
        field: 'tag',
        key: reminder.preferenceTag,
        relation: '=',
        value: '1',
      },
    ],
    headings: {
      en: reminder.title,
      es: reminder.title,
    },
    contents: {
      en: reminder.body,
      es: reminder.body,
    },
    url: `${BASE_URL}${reminder.route}`,
    name: reminder.name,
    idempotency_key: uuidV5(reminder.operation),
  }

  if (dryRun) {
    console.log('[dry-run]', JSON.stringify(payload, null, 2))
    return
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Key ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const text = await response.text()
  let body = text

  try {
    body = JSON.parse(text)
  } catch {}

  if (!response.ok) {
    throw new Error(`OneSignal ${response.status}: ${JSON.stringify(body)}`)
  }

  console.log('[sent]', reminder.name, body)
}

async function sendTest() {
  await sendMessage({
    preferenceTag: 'philosophia_push',
    operation: `test:${new Date().toISOString().slice(0, 13)}`,
    title: 'Philosophia · Web Push funcionando',
    body: 'Este aviso llegó aunque la página no necesita estar abierta.',
    route: '/tareas',
    name: 'Philosophia · prueba Web Push',
  })
}

async function main() {
  if (!dryRun && (!APP_ID || !API_KEY)) {
    throw new Error(
      'Faltan ONESIGNAL_APP_ID / ONESIGNAL_API_KEY. Configure GitHub variable y secret.',
    )
  }

  if (testMode) {
    await sendTest()
    return
  }

  const now = new Date()
  const reminders = []

  for (const event of classEvents(now)) {
    for (const minutes of [30, 10]) {
      const reminder = buildReminder(event, minutes, now)
      if (reminder) reminders.push(reminder)
    }
  }

  for (const event of taskEvents()) {
    for (const minutes of [1440, 120]) {
      const reminder = buildReminder(event, minutes, now)
      if (reminder) reminders.push(reminder)
    }
  }

  if (!reminders.length) {
    console.log(`[idle] ${now.toISOString()} · no hay recordatorios dentro de la ventana.`)
    return
  }

  console.log(`[ready] ${reminders.length} recordatorio(s).`)

  for (const reminder of reminders) {
    await sendMessage(reminder)
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
