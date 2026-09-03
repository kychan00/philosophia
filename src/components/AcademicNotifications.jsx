import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import PwaInstallCard from './PwaInstallCard'
import PushSubscriptionCard from './PushSubscriptionCard'
import tasks from '../data/tasks'
import CLASS_SCHEDULE from '../data/academicSchedule'

const SETTINGS_KEY = 'philosophia-notification-settings-v1'
const SENT_KEY = 'philosophia-notification-sent-v1'
const TASK_STATUS_KEY = 'philosophia-task-status'

const DEFAULT_SETTINGS = {
  class30: true,
  class10: true,
  task24: true,
  task2: true,
  browserEnabled: false,
}

const DAY_MS = 86400000
const MINUTE_MS = 60000

function loadJson(key, fallback) {
  try {
    return JSON.parse(window.localStorage.getItem(key) || '') || fallback
  } catch {
    return fallback
  }
}

function saveJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage can be unavailable in private/restricted contexts.
  }
}

function dateKey(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function parseDateTime(dateValue, timeValue = '23:59') {
  if (!dateValue) return null
  const [year, month, day] = dateValue.split('-').map(Number)
  const [hour, minute] = timeValue.split(':').map(Number)
  return new Date(year, month - 1, day, hour, minute, 0, 0)
}

function endTimeForTask(task) {
  if (task.dueTime) return task.dueTime
  if (!task.dueDate) return '23:59'

  const due = parseDateTime(task.dueDate, '12:00')
  const course = CLASS_SCHEDULE.find(
    (item) =>
      item.subject === task.subject &&
      item.weekdays.includes(due.getDay()),
  )

  if (!course) return '23:59'
  return course.time.split('–')[1]?.trim() || '23:59'
}

function classEvents(now, horizonDays = 8) {
  const events = []

  for (let offset = 0; offset <= horizonDays; offset += 1) {
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset)

    for (const course of CLASS_SCHEDULE) {
      if (!course.weekdays.includes(day.getDay())) continue

      const start = course.time.split('–')[0]?.trim()
      const date = parseDateTime(dateKey(day), start)
      if (!date) continue

      events.push({
        id: `class-${course.code}-${dateKey(day)}`,
        kind: 'class',
        title: course.subject,
        subtitle: `${start} · ${course.room}`,
        date,
        room: course.room,
        route: course.route,
        subjectCode: course.code,
      })
    }
  }

  return events.sort((a, b) => a.date - b.date)
}

function taskEvents(now) {
  const completed = loadJson(TASK_STATUS_KEY, {})

  return tasks
    .filter((task) => task.dueDate && !task.completed && !completed[task.id])
    .map((task) => {
      const time = endTimeForTask(task)
      const date = parseDateTime(task.dueDate, time)

      return {
        id: `task-${task.id}`,
        taskId: task.id,
        kind: 'task',
        title: task.title,
        subtitle: `${task.subject} · ${time}`,
        date,
        route: task.studyRoute || task.sourceRoute || '/tareas',
        subject: task.subject,
        subjectCode: task.subjectCode,
      }
    })
    .filter((event) => event.date && event.date >= new Date(now.getTime() - 3 * DAY_MS))
    .sort((a, b) => a.date - b.date)
}

function humanWhen(date, now) {
  const delta = date - now
  const minutes = Math.round(delta / MINUTE_MS)

  if (minutes < -1) {
    const hours = Math.abs(Math.round(minutes / 60))
    if (hours < 24) return `Vencida hace ${hours || 1} h`
    return `Vencida · ${date.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })}`
  }

  if (minutes <= 1) return 'Ahora'
  if (minutes < 60) return `En ${minutes} min`

  const hours = Math.round(minutes / 60)
  if (hours < 24) return `En ${hours} h`

  const days = Math.round(hours / 24)
  if (days <= 6) {
    return date.toLocaleDateString('es-MX', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    })
  }

  return date.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'short',
  })
}

function browserPermission() {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'unsupported'
  }
  return window.Notification.permission
}

function reminderLabel(minutes) {
  if (minutes >= 1440) return '24 h'
  if (minutes >= 60) return `${minutes / 60} h`
  return `${minutes} min`
}

export default function AcademicNotifications() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('agenda')
  const [now, setNow] = useState(() => new Date())
  const [permission, setPermission] = useState(browserPermission)
  const [settings, setSettings] = useState(() => ({
    ...DEFAULT_SETTINGS,
    ...loadJson(SETTINGS_KEY, {}),
  }))

  useEffect(() => {
    const tick = () => setNow(new Date())
    const timer = window.setInterval(tick, 30000)
    const onFocus = () => tick()
    const onVisible = () => {
      if (!document.hidden) tick()
    }

    window.addEventListener('focus', onFocus)
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      window.clearInterval(timer)
      window.removeEventListener('focus', onFocus)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const classes = useMemo(() => classEvents(now), [now])
  const pendingTasks = useMemo(() => taskEvents(now), [now])

  const upcomingClasses = classes
    .filter((event) => event.date >= new Date(now.getTime() - 5 * MINUTE_MS))
    .slice(0, 5)

  const upcomingTasks = pendingTasks
    .filter((event) => event.date >= new Date(now.getTime() - 3 * DAY_MS))
    .slice(0, 8)

  const urgentCount = [...classes, ...pendingTasks].filter((event) => {
    const delta = event.date - now
    return delta >= -30 * MINUTE_MS && delta <= DAY_MS
  }).length

  useEffect(() => {
    if (!settings.browserEnabled || permission !== 'granted') return

    const sent = loadJson(SENT_KEY, {})
    const cutoff = Date.now() - 14 * DAY_MS
    Object.keys(sent).forEach((key) => {
      if (sent[key] < cutoff) delete sent[key]
    })

    const candidates = [...classes, ...pendingTasks]
      .filter((event) => event.date > now)
      .sort((a, b) => a.date - b.date)

    for (const event of candidates) {
      const minutesUntil = (event.date - now) / MINUTE_MS
      const reminders =
        event.kind === 'class'
          ? [
              settings.class10 ? 10 : null,
              settings.class30 ? 30 : null,
            ].filter(Boolean)
          : [
              settings.task2 ? 120 : null,
              settings.task24 ? 1440 : null,
            ].filter(Boolean)

      const reminder = reminders
        .sort((a, b) => a - b)
        .find((value) => minutesUntil <= value)

      if (!reminder) continue

      const key = `${event.id}-${reminder}`
      if (sent[key]) continue

      const title =
        event.kind === 'class'
          ? `Clase en ${reminderLabel(reminder)} · ${event.title}`
          : `Tarea en ${reminderLabel(reminder)} · ${event.subject}`

      const body =
        event.kind === 'class'
          ? `${event.subtitle}`
          : `${event.title} · vence ${event.date.toLocaleTimeString('es-MX', {
              hour: '2-digit',
              minute: '2-digit',
            })}`

      try {
        const notification = new window.Notification(title, {
          body,
          tag: key,
        })

        notification.onclick = () => {
          window.focus()
          if (event.route) navigate(event.route)
          notification.close()
        }

        sent[key] = Date.now()
        saveJson(SENT_KEY, sent)
      } catch {
        // Keep the in-page notification center working even if native display fails.
      }

      break
    }
  }, [classes, navigate, now, pendingTasks, permission, settings])

  const updateSetting = (key, value) => {
    const next = { ...settings, [key]: value }
    setSettings(next)
    saveJson(SETTINGS_KEY, next)
  }

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      setPermission('unsupported')
      return
    }

    const result = await window.Notification.requestPermission()
    setPermission(result)

    if (result === 'granted') {
      updateSetting('browserEnabled', true)
      try {
        new window.Notification('Philosophia · notificaciones activadas', {
          body: 'Le avisaré de clases y tareas mientras Philosophia esté abierta.',
          tag: 'philosophia-notifications-enabled',
        })
      } catch {
        // Permission is still stored; in-app center remains available.
      }
    }
  }

  const openEvent = (event) => {
    setOpen(false)
    if (event.route) navigate(event.route)
  }

  return (
    <>
      <button
        type="button"
        className="academic-bell"
        onClick={() => setOpen(true)}
        aria-label={`Abrir notificaciones${urgentCount ? ` · ${urgentCount} próximas` : ''}`}
      >
        <span className="academic-bell-glyph" aria-hidden="true">♢</span>
        <span className="academic-bell-icon" aria-hidden="true">🔔</span>
        {urgentCount > 0 && (
          <strong>{urgentCount > 9 ? '9+' : urgentCount}</strong>
        )}
      </button>

      {open && (
        <div
          className="academic-notifications-backdrop"
          role="presentation"
          onMouseDown={() => setOpen(false)}
        >
          <aside
            className="academic-notifications-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Centro de notificaciones académicas"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="academic-notifications-header">
              <div>
                <span>NOTIFICATIONES · PHILOSOPHIA</span>
                <h2>Agenda académica</h2>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar">
                ×
              </button>
            </header>

            <div className="academic-notifications-tabs">
              <button
                type="button"
                className={tab === 'agenda' ? 'active' : ''}
                onClick={() => setTab('agenda')}
              >
                Agenda
                {urgentCount > 0 && <span>{urgentCount}</span>}
              </button>
              <button
                type="button"
                className={tab === 'settings' ? 'active' : ''}
                onClick={() => setTab('settings')}
              >
                Preferencias
              </button>
            </div>

            {tab === 'agenda' ? (
              <div className="academic-notifications-content">
                <section>
                  <div className="academic-notifications-section-title">
                    <span>01</span>
                    <div><small>Lectio proxima</small><h3>Próximas clases</h3></div>
                  </div>

                  <div className="academic-notifications-list">
                    {upcomingClasses.map((event) => (
                      <button
                        type="button"
                        className="academic-notification-item class-event"
                        key={event.id}
                        onClick={() => openEvent(event)}
                      >
                        <div className="academic-notification-time">
                          <strong>
                            {event.date.toLocaleTimeString('es-MX', {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </strong>
                          <span>{humanWhen(event.date, now)}</span>
                        </div>
                        <div>
                          <small>{event.subjectCode} · {event.room}</small>
                          <h4>{event.title}</h4>
                          <p>Clase presencial · abrir materia</p>
                        </div>
                        <b>↗</b>
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="academic-notifications-section-title">
                    <span>02</span>
                    <div><small>Opera pendentia</small><h3>Tareas pendientes</h3></div>
                  </div>

                  <div className="academic-notifications-list">
                    {upcomingTasks.length ? upcomingTasks.map((event) => (
                      <button
                        type="button"
                        className={`academic-notification-item task-event ${
                          event.date < now ? 'overdue' : ''
                        }`}
                        key={event.id}
                        onClick={() => openEvent(event)}
                      >
                        <div className="academic-notification-time">
                          <strong>
                            {event.date.toLocaleDateString('es-MX', {
                              day: 'numeric',
                              month: 'short',
                            })}
                          </strong>
                          <span>{humanWhen(event.date, now)}</span>
                        </div>
                        <div>
                          <small>{event.subjectCode} · {event.subject}</small>
                          <h4>{event.title}</h4>
                          <p>
                            Vence ·{' '}
                            {event.date.toLocaleTimeString('es-MX', {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                        <b>↗</b>
                      </button>
                    )) : (
                      <div className="academic-notifications-empty">
                        <span>✓</span>
                        <strong>No hay tareas con fecha pendientes.</strong>
                      </div>
                    )}
                  </div>
                </section>

                <footer className="academic-notifications-summary">
                  <span>AHORA</span>
                  <strong>
                    {now.toLocaleDateString('es-MX', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    })}
                    {' · '}
                    {now.toLocaleTimeString('es-MX', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </strong>
                </footer>
              </div>
            ) : (
              <div className="academic-notifications-settings">
                <section>
                  <small>CLASES</small>
                  <label>
                    <span><strong>30 min antes</strong><em>Primer aviso</em></span>
                    <input
                      type="checkbox"
                      checked={settings.class30}
                      onChange={(event) => updateSetting('class30', event.target.checked)}
                    />
                  </label>
                  <label>
                    <span><strong>10 min antes</strong><em>Aviso inmediato</em></span>
                    <input
                      type="checkbox"
                      checked={settings.class10}
                      onChange={(event) => updateSetting('class10', event.target.checked)}
                    />
                  </label>
                </section>

                <section>
                  <small>TAREAS</small>
                  <label>
                    <span><strong>24 h antes</strong><em>Preparación</em></span>
                    <input
                      type="checkbox"
                      checked={settings.task24}
                      onChange={(event) => updateSetting('task24', event.target.checked)}
                    />
                  </label>
                  <label>
                    <span><strong>2 h antes</strong><em>Último aviso</em></span>
                    <input
                      type="checkbox"
                      checked={settings.task2}
                      onChange={(event) => updateSetting('task2', event.target.checked)}
                    />
                  </label>
                </section>

                <section className="academic-browser-permission">
                  <small>NAVEGADOR</small>

                  {permission === 'granted' ? (
                    <label>
                      <span>
                        <strong>Notificaciones del sistema</strong>
                        <em>Permiso concedido</em>
                      </span>
                      <input
                        type="checkbox"
                        checked={settings.browserEnabled}
                        onChange={(event) =>
                          updateSetting('browserEnabled', event.target.checked)
                        }
                      />
                    </label>
                  ) : permission === 'denied' ? (
                    <div className="academic-permission-state denied">
                      <strong>Notificaciones bloqueadas</strong>
                      <p>
                        El navegador rechazó el permiso. El centro interno seguirá funcionando.
                      </p>
                    </div>
                  ) : permission === 'unsupported' ? (
                    <div className="academic-permission-state">
                      <strong>Este navegador no expone Notification API.</strong>
                      <p>
                        La campana y la agenda interna sí funcionan. Para push en iPhone
                        necesitaremos la fase PWA + Web Push.
                      </p>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="academic-enable-browser"
                      onClick={requestPermission}
                    >
                      <span>🔔</span>
                      <div>
                        <strong>Activar notificaciones del navegador</strong>
                        <small>El permiso se solicita sólo al pulsar aquí.</small>
                      </div>
                    </button>
                  )}
                </section>

                <PwaInstallCard />

                <PushSubscriptionCard settings={settings} />

                <div className="academic-settings-note">
                  <span>FASE 1</span>
                  <p>
                    Los avisos del sistema funcionan mientras Philosophia está
                    abierta. Para recibirlos con la página cerrada hace falta
                    Web Push; eso será la siguiente fase.
                  </p>
                </div>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  )
}
