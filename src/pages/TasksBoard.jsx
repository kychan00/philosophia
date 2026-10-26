import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import tasks from '../data/tasks'
import CLASS_SCHEDULE from '../data/academicSchedule'
import { cafeEvents } from '../data/cafeFilosoficoEvents'
import TaskComposer from '../components/TaskComposer'
import { loadCustomTasks, saveCustomTasks } from '../data/localTasks'
import './TasksBoardAtelier.css'

const MONTHS = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

const WEEKDAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
const VIEW_OPTIONS = [
  ['monthly', 'Mensual'],
  ['weekly', 'Semanal'],
  ['daily', 'Diaria'],
  ['list', 'Lista general'],
]
const STATUS_OPTIONS = ['Pendientes', 'Todas', 'Completadas']
const FOCUS_TARGET_SECONDS = 50 * 60

const PRIORITY_ORDER = {
  Alta: 0,
  Media: 1,
  Baja: 2,
}

const STATUS_ORDER = {
  overdue: 0,
  today: 1,
  urgent: 2,
  soon: 3,
  future: 4,
  undated: 5,
  completed: 6,
}

const NO_CLASS_DATES = new Set([
  '2026-10-12',
])

const NO_CLASS_DAY_DETAILS = {
  '2026-10-12': {
    label: 'Sin clases',
    icons: '🇲🇽 🙏 🛡️',
    title: 'Día de la Raza · Romería · Aniversario UdeG',
  },
}

const SUBJECT_NO_CLASS_DATES = {
  '2026-10-08': new Set(['Teoría Crítica']),
}

const PERSONAL_CLASS_REPLACEMENTS = {
  '2026-09-22': new Set(['Ética']),
}

const ACADEMIC_EVENTS = {
  '2026-09-22': [
    {
      id: 'amilcar-paris-ia-2026-09-22',
      kind: 'Clase abierta',
      title: '¿Por qué estudiar filosofía en la era de la IA?',
      speaker: 'Mtro. Amilcar Paris Mandoki',
      time: '18:00–19:30',
      place: 'Librería Carlos Fuentes',
      route: '/eventos/2026/09/22/filosofia-en-la-era-de-la-ia',
    },
  ],
}

const ABSENCE_DATES = {
  '2026-10-05': 'Falta',
  '2026-10-06': 'Falta',
}

function parseDate(value) {
  if (!value) return null

  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day, 12, 0, 0, 0)
}

function dateKey(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return year + '-' + month + '-' + day
}

function todayKey() {
  return dateKey(new Date())
}

function formatDate(value) {
  if (!value) return 'Sin fecha'

  const [year, month, day] = value.split('-').map(Number)
  return day + ' de ' + MONTHS[month - 1] + ' de ' + year
}

function shortDate(value) {
  if (!value) return 'Por definir'

  const [, month, day] = value.split('-').map(Number)
  return day + ' ' + MONTHS[month - 1].slice(0, 3)
}

function longDate(date) {
  return new Intl.DateTimeFormat('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function monthTitle(year, month) {
  const label = MONTHS[month] || ''
  return label.charAt(0).toUpperCase() + label.slice(1) + ' ' + year
}

function isoWeekNumber(date) {
  const target = new Date(date.valueOf())
  const day = (date.getDay() + 6) % 7
  target.setDate(target.getDate() - day + 3)
  const firstThursday = new Date(target.getFullYear(), 0, 4, 12)
  const firstDay = (firstThursday.getDay() + 6) % 7
  firstThursday.setDate(firstThursday.getDate() - firstDay + 3)

  return 1 + Math.round((target - firstThursday) / 604800000)
}

function getWeekDays(date) {
  const start = new Date(date)
  const day = (start.getDay() + 6) % 7
  start.setDate(start.getDate() - day)
  start.setHours(12, 0, 0, 0)

  return Array.from({ length: 7 }, (_, index) => {
    const current = new Date(start)
    current.setDate(start.getDate() + index)
    return current
  })
}

function loadCompleted() {
  try {
    return JSON.parse(
      window.localStorage.getItem('philosophia-task-status') || '{}',
    )
  } catch {
    return {}
  }
}

function loadFocusSession() {
  try {
    const stored = JSON.parse(
      window.localStorage.getItem('philosophia-focus-session') || '{}',
    )

    return {
      taskId: stored.taskId || null,
      elapsedSeconds: Number(stored.elapsedSeconds) || 0,
      running: Boolean(stored.running && stored.startedAt),
      startedAt: stored.startedAt || null,
    }
  } catch {
    return {
      taskId: null,
      elapsedSeconds: 0,
      running: false,
      startedAt: null,
    }
  }
}

function getTaskDeadline(task) {
  if (!task.dueDate) return null

  const due = parseDate(task.dueDate)
  let time = task.dueTime || null
  let source = task.dueTime ? 'explicit' : 'day'

  if (!time) {
    const course = CLASS_SCHEDULE.find(
      (item) =>
        canonicalSubject(item.subject) === canonicalSubject(task.subject) &&
        item.weekdays.includes(due.getDay()),
    )

    if (course) {
      const parts = course.time.split('–')
      const classEnd = parts[1] && parts[1].trim()

      if (classEnd) {
        time = classEnd
        source = 'class'
      }
    }
  }

  if (!time) {
    time = '23:59'
  }

  const [hour, minute] = time.split(':').map(Number)
  due.setHours(hour, minute, 0, 0)

  return {
    date: due,
    time,
    source,
  }
}

function calendarDayDiff(from, to) {
  const a = new Date(
    from.getFullYear(),
    from.getMonth(),
    from.getDate(),
    12,
  )
  const b = new Date(
    to.getFullYear(),
    to.getMonth(),
    to.getDate(),
    12,
  )

  return Math.round((b - a) / 86400000)
}

function getTaskStatus(task, completed) {
  if (task.completed || completed[task.id]) {
    return {
      key: 'completed',
      label: 'Completada',
      detail: 'Trabajo realizado',
    }
  }

  if (!task.dueDate) {
    return {
      key: 'undated',
      label: 'Sin fecha',
      detail: 'Entrega por definir',
    }
  }

  const now = new Date()
  const deadline = getTaskDeadline(task)
  const days = calendarDayDiff(now, deadline.date)

  if (now > deadline.date) {
    const daysLate = calendarDayDiff(deadline.date, now)

    return {
      key: 'overdue',
      label: 'Vencida',
      detail:
        daysLate === 0
          ? 'La clase terminó a las ' + deadline.time
          : daysLate + ' ' + (daysLate === 1 ? 'día' : 'días') + ' tarde',
    }
  }

  if (days === 0) {
    return {
      key: 'today',
      label: 'Hoy',
      detail:
        deadline.source === 'class'
          ? 'Vence al terminar la clase · ' + deadline.time
          : 'Entrega hoy · ' + deadline.time,
    }
  }

  if (days <= 2) {
    return {
      key: 'urgent',
      label: 'Urgente',
      detail: 'Faltan ' + days + ' ' + (days === 1 ? 'día' : 'días'),
    }
  }

  if (days <= 7) {
    return {
      key: 'soon',
      label: 'Próxima',
      detail: 'Faltan ' + days + ' días',
    }
  }

  return {
    key: 'future',
    label: 'Programada',
    detail: 'Faltan ' + days + ' días',
  }
}

function canonicalSubject(subject) {
  if (!subject) return 'Otra'
  if (subject.startsWith('Ética')) return 'Ética'
  if (subject.startsWith('Métodos')) return 'Métodos de Investigación'
  return subject
}

function subjectTone(subject) {
  const value = canonicalSubject(subject)

  if (value === 'Ontología II') return 'ochre'
  if (value === 'Teoría Crítica') return 'terracotta'
  if (value === 'Filosofía Analítica') return 'lavender'
  if (value === 'Ética') return 'sage'
  if (value === 'Métodos de Investigación') return 'ink'

  return 'neutral'
}

function classesForDate(date) {
  const key = dateKey(date)

  if (key < '2026-08-17' || key > '2026-12-31') {
    return []
  }

  if (NO_CLASS_DATES.has(key)) {
    return []
  }

  const subjectCancellations = SUBJECT_NO_CLASS_DATES[key]
  const personalReplacements = PERSONAL_CLASS_REPLACEMENTS[key]

  return CLASS_SCHEDULE.filter(
    (course) =>
      course.weekdays.includes(date.getDay()) &&
      !subjectCancellations?.has(course.subject) &&
      !personalReplacements?.has(course.subject),
  )
}

function buildCalendar(year, month) {
  const first = new Date(year, month, 1, 12)
  const daysInMonth = new Date(year, month + 1, 0, 12).getDate()
  const mondayIndex = (first.getDay() + 6) % 7
  const cells = []

  for (let index = 0; index < mondayIndex; index += 1) {
    cells.push(null)
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day, 12))
  }

  while (cells.length % 7 !== 0) {
    cells.push(null)
  }

  return cells
}

function sortTasks(a, b) {
  const statusDiff =
    STATUS_ORDER[a.status.key] - STATUS_ORDER[b.status.key]

  if (statusDiff !== 0) return statusDiff

  const priorityDiff =
    (PRIORITY_ORDER[a.priority] ?? 9) -
    (PRIORITY_ORDER[b.priority] ?? 9)

  if (priorityDiff !== 0) return priorityDiff

  if (a.dueDate && b.dueDate) {
    return a.dueDate.localeCompare(b.dueDate)
  }

  if (a.dueDate) return -1
  if (b.dueDate) return 1

  return (b.assignedDate || '').localeCompare(a.assignedDate || '')
}

function classDurationMinutes(timeRange) {
  if (!timeRange) return 0

  const [start, end] = timeRange.split('–').map((value) => value.trim())
  if (!start || !end) return 0

  const [startHour, startMinute] = start.split(':').map(Number)
  const [endHour, endMinute] = end.split(':').map(Number)

  return endHour * 60 + endMinute - (startHour * 60 + startMinute)
}

function formatDuration(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds))
  const hours = Math.floor(safeSeconds / 3600)
  const minutes = Math.floor((safeSeconds % 3600) / 60)
  const remainingSeconds = safeSeconds % 60

  return [hours, minutes, remainingSeconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(' : ')
}

function formatHoursMinutes(seconds) {
  const totalMinutes = Math.round(seconds / 60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours === 0) return minutes + ' min'
  if (minutes === 0) return hours + ' h'
  return hours + ' h ' + minutes + ' min'
}

function timeZoneLabel() {
  const offsetMinutes = -new Date().getTimezoneOffset()
  const sign = offsetMinutes >= 0 ? '+' : '−'
  const hours = Math.floor(Math.abs(offsetMinutes) / 60)
  const minutes = Math.abs(offsetMinutes) % 60
  const suffix = minutes ? ':' + String(minutes).padStart(2, '0') : ''
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return 'GMT' + sign + hours + suffix + ' · ' + zone
}

export default function TasksBoard() {
  const now = new Date()
  const currentDateKey = todayKey()

  const [subject, setSubject] = useState('Todas')
  const [statusView, setStatusView] = useState('Pendientes')
  const [calendarView, setCalendarView] = useState('monthly')
  const [completed, setCompleted] = useState(loadCompleted)
  const [customTasks, setCustomTasks] = useState(loadCustomTasks)
  const [selectedTask, setSelectedTask] = useState(null)
  const [activeDate, setActiveDate] = useState(
    () => new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12),
  )
  const [calendarCursor, setCalendarCursor] = useState(() => ({
    year: now.getFullYear(),
    month: now.getMonth(),
  }))
  const [focusSession, setFocusSession] = useState(loadFocusSession)
  const [clock, setClock] = useState(Date.now())

  const allTasks = useMemo(
    () => [
      ...tasks,
      ...customTasks.map((task) => ({
        ...task,
        isLocal: true,
      })),
    ],
    [customTasks],
  )

  const subjects = useMemo(() => {
    const values = new Set(
      CLASS_SCHEDULE.map((course) => canonicalSubject(course.subject)),
    )

    allTasks.forEach((task) => values.add(canonicalSubject(task.subject)))

    return ['Todas', ...values]
  }, [allTasks])

  const decoratedTasks = useMemo(
    () =>
      allTasks.map((task) => ({
        ...task,
        subjectGroup: canonicalSubject(task.subject),
        tone: subjectTone(task.subject),
        status: getTaskStatus(task, completed),
      })),
    [allTasks, completed],
  )

  const filteredTasks = useMemo(() => {
    return decoratedTasks
      .filter(
        (task) => subject === 'Todas' || task.subjectGroup === subject,
      )
      .filter((task) => {
        const isCompleted = task.status.key === 'completed'

        if (statusView === 'Pendientes') return !isCompleted
        if (statusView === 'Completadas') return isCompleted
        return true
      })
      .sort(sortTasks)
  }, [decoratedTasks, subject, statusView])

  const pendingCount = decoratedTasks.filter(
    (task) => task.status.key !== 'completed',
  ).length
  const completedCount = decoratedTasks.length - pendingCount
  const overdueCount = decoratedTasks.filter(
    (task) => task.status.key === 'overdue',
  ).length
  const urgentCount = decoratedTasks.filter((task) =>
    ['today', 'urgent'].includes(task.status.key),
  ).length
  const completionRate = decoratedTasks.length
    ? Math.round((completedCount / decoratedTasks.length) * 100)
    : 0

  const calendarCells = useMemo(
    () => buildCalendar(calendarCursor.year, calendarCursor.month),
    [calendarCursor],
  )

  const calendarTasks = useMemo(() => {
    return filteredTasks.reduce((map, task) => {
      const calendarDate = task.dueDate || task.assignedDate
      if (!calendarDate) return map

      if (!map[calendarDate]) {
        map[calendarDate] = []
      }

      map[calendarDate].push(task)
      return map
    }, {})
  }, [filteredTasks])

  const weekDays = useMemo(() => getWeekDays(activeDate), [activeDate])

  const projects = useMemo(() => {
    const groups = new Map()

    decoratedTasks.forEach((task) => {
      const key = task.subjectGroup
      const current = groups.get(key) || {
        subject: key,
        tone: subjectTone(key),
        total: 0,
        completed: 0,
        pending: 0,
      }

      current.total += 1
      if (task.status.key === 'completed') {
        current.completed += 1
      } else {
        current.pending += 1
      }

      groups.set(key, current)
    })

    return Array.from(groups.values())
      .map((project) => ({
        ...project,
        progress: project.total
          ? Math.round((project.completed / project.total) * 100)
          : 0,
      }))
      .sort((a, b) => b.pending - a.pending)
      .slice(0, 5)
  }, [decoratedTasks])

  const priorityTasks = useMemo(
    () =>
      decoratedTasks
        .filter((task) => task.status.key !== 'completed')
        .sort(sortTasks)
        .slice(0, 5),
    [decoratedTasks],
  )

  const todayClasses = useMemo(
    () => classesForDate(new Date()),
    [],
  )
  const todayClassSeconds =
    todayClasses.reduce(
      (total, course) => total + classDurationMinutes(course.time),
      0,
    ) * 60

  const displayFocusSeconds = useMemo(() => {
    if (!focusSession.running || !focusSession.startedAt) {
      return focusSession.elapsedSeconds
    }

    return (
      focusSession.elapsedSeconds +
      Math.max(
        0,
        Math.floor((clock - focusSession.startedAt) / 1000),
      )
    )
  }, [clock, focusSession])

  const focusTask = decoratedTasks.find(
    (task) => task.id === focusSession.taskId,
  )
  const focusProgress = Math.min(
    100,
    Math.round((displayFocusSeconds / FOCUS_TARGET_SECONDS) * 100),
  )
  const trackedSeconds = todayClassSeconds + displayFocusSeconds
  const focusShare = trackedSeconds
    ? Math.round((displayFocusSeconds / trackedSeconds) * 100)
    : 0
  const classShare = trackedSeconds ? 100 - focusShare : 0

  useEffect(() => {
    if (!focusSession.running) return undefined

    const timer = window.setInterval(() => {
      setClock(Date.now())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [focusSession.running])

  useEffect(() => {
    window.localStorage.setItem(
      'philosophia-focus-session',
      JSON.stringify(focusSession),
    )
  }, [focusSession])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedTask(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const addCustomTask = (task) => {
    setCustomTasks((current) => {
      const next = [...current, task]
      saveCustomTasks(next)
      return next
    })
  }

  const deleteCustomTask = (id) => {
    setCustomTasks((current) => {
      const next = current.filter((task) => task.id !== id)
      saveCustomTasks(next)
      return next
    })

    setCompleted((current) => {
      if (!Object.prototype.hasOwnProperty.call(current, id)) return current

      const next = { ...current }
      delete next[id]
      window.localStorage.setItem(
        'philosophia-task-status',
        JSON.stringify(next),
      )
      return next
    })

    if (selectedTask?.id === id) setSelectedTask(null)

    if (focusSession.taskId === id) {
      setFocusSession({
        taskId: null,
        elapsedSeconds: 0,
        running: false,
        startedAt: null,
      })
    }
  }

  const toggleTask = (id) => {
    setCompleted((current) => {
      const next = {
        ...current,
        [id]: !current[id],
      }

      window.localStorage.setItem(
        'philosophia-task-status',
        JSON.stringify(next),
      )

      return next
    })
  }

  const moveMonth = (delta) => {
    setCalendarCursor((current) => {
      const date = new Date(current.year, current.month + delta, 1, 12)

      return {
        year: date.getFullYear(),
        month: date.getMonth(),
      }
    })
  }

  const goToday = () => {
    const today = new Date()
    const normalized = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      12,
    )

    setActiveDate(normalized)
    setCalendarCursor({
      year: today.getFullYear(),
      month: today.getMonth(),
    })
  }

  const chooseFocusTask = (taskId) => {
    setFocusSession({
      taskId,
      elapsedSeconds: 0,
      running: false,
      startedAt: null,
    })
    setClock(Date.now())
  }

  const startFocus = () => {
    if (focusSession.running) return

    const taskId = focusSession.taskId || priorityTasks[0]?.id || null
    if (!taskId) return

    setFocusSession((current) => ({
      ...current,
      taskId,
      running: true,
      startedAt: Date.now(),
    }))
    setClock(Date.now())
  }

  const pauseFocus = () => {
    setFocusSession((current) => {
      if (!current.running || !current.startedAt) return current

      const elapsed =
        current.elapsedSeconds +
        Math.max(
          0,
          Math.floor((Date.now() - current.startedAt) / 1000),
        )

      return {
        ...current,
        elapsedSeconds: elapsed,
        running: false,
        startedAt: null,
      }
    })
  }

  const resetFocus = () => {
    setFocusSession((current) => ({
      ...current,
      elapsedSeconds: 0,
      running: false,
      startedAt: null,
    }))
    setClock(Date.now())
  }

  const classesForVisibleDate = (date) =>
    classesForDate(date).filter(
      (course) =>
        subject === 'Todas' ||
        canonicalSubject(course.subject) === subject,
    )

  const renderTaskChip = (task) => {
    const isUndated = !task.dueDate
    const calendarLabel = isUndated
      ? 'Registrada el ' +
        formatDate(task.assignedDate) +
        ' · sin fecha de entrega'
      : 'Entrega ' + formatDate(task.dueDate)

    return (
      <button
        key={task.id}
        type="button"
        className={
          'atelier-task-chip atelier-task-chip--' +
          task.status.key +
          ' atelier-tone--' +
          task.tone
        }
        onClick={(event) => {
          event.stopPropagation()
          setSelectedTask(task)
        }}
        title={calendarLabel}
        aria-label={task.title + '. ' + calendarLabel}
      >
        <span aria-hidden="true">{isUndated ? '◇' : '◆'}</span>
        <span>{task.title}</span>
      </button>
    )
  }

  const renderDayCell = (date, weekly = false) => {
    const key = dateKey(date)
    const dayTasks = calendarTasks[key] || []
    const dayClasses = classesForVisibleDate(date)
    const dayCafeEvents =
      subject === 'Todas'
        ? cafeEvents.filter((event) => event.date === key)
        : []
    const dayAcademicEvents =
      subject === 'Todas' ? ACADEMIC_EVENTS[key] || [] : []
    const isToday = currentDateKey === key
    const isActive = dateKey(activeDate) === key
    const absenceLabel = ABSENCE_DATES[key] || null
    const noClassNotice = NO_CLASS_DAY_DETAILS[key] || null
    const visibleDayTasks = weekly ? dayTasks : dayTasks.slice(0, 3)
    const hiddenTaskCount = dayTasks.length - visibleDayTasks.length

    return (
      <article
        key={key}
        className={
          'atelier-calendar-day' +
          (isToday ? ' is-today' : '') +
          (isActive ? ' is-active' : '') +
          (absenceLabel ? ' is-absence' : '') +
          (noClassNotice ? ' is-no-class' : '') +
          (weekly ? ' is-weekly' : '')
        }
        role="gridcell"
        tabIndex={0}
        aria-label={longDate(date)}
        onClick={() => setActiveDate(date)}
        onKeyDown={(event) => {
          if (
            event.target === event.currentTarget &&
            (event.key === 'Enter' || event.key === ' ')
          ) {
            event.preventDefault()
            setActiveDate(date)
          }
        }}
      >
        <div className="atelier-day-heading">
          <div>
            <span className="atelier-day-number">{date.getDate()}</span>
            {weekly && (
              <small>{WEEKDAYS[(date.getDay() + 6) % 7]}</small>
            )}
          </div>

          <div className="atelier-day-badges">
            {isToday && <span>Hoy</span>}
            {absenceLabel && <span className="is-danger">{absenceLabel}</span>}
            {noClassNotice && <span>{noClassNotice.label}</span>}
          </div>
        </div>

        <div className="atelier-day-events">
          {noClassNotice && (
            <div
              className="atelier-calendar-notice"
              title={noClassNotice.title}
            >
              <span aria-hidden="true">{noClassNotice.icons}</span>
              <strong>{noClassNotice.label}</strong>
              <small>{noClassNotice.title}</small>
            </div>
          )}

          {dayClasses.map((course) => (
            <Link
              key={key + '-' + course.code}
              to={course.route}
              className={
                'atelier-class-chip atelier-tone--' +
                subjectTone(course.subject)
              }
              title={
                course.subject + ' · ' + course.time + ' · ' + course.room
              }
              onClick={(event) => event.stopPropagation()}
            >
              <strong>{course.subject}</strong>
              <span>{course.time}</span>
            </Link>
          ))}

          {dayAcademicEvents.map((event) => (
            <Link
              key={event.id}
              to={event.route}
              className="atelier-event-chip"
              onClick={(clickEvent) => clickEvent.stopPropagation()}
            >
              <small>{event.kind}</small>
              <strong>{event.title}</strong>
              {weekly && <span>{event.time}</span>}
            </Link>
          ))}

          {dayCafeEvents.map((event) => (
            <Link
              key={event.id}
              to={event.route}
              className="atelier-event-chip is-cafe"
              onClick={(clickEvent) => clickEvent.stopPropagation()}
            >
              <small>Café filosófico</small>
              <strong>{event.title}</strong>
            </Link>
          ))}

          {visibleDayTasks.map(renderTaskChip)}

          {hiddenTaskCount > 0 && (
            <button
              type="button"
              className="atelier-more-tasks"
              onClick={(event) => {
                event.stopPropagation()
                setActiveDate(date)
                setCalendarView('daily')
              }}
            >
              +{hiddenTaskCount} más
            </button>
          )}
        </div>
      </article>
    )
  }

  const renderMonthlyView = () => (
    <div className="atelier-calendar-grid" role="grid">
      {WEEKDAYS.map((day) => (
        <div key={day} className="atelier-weekday" role="columnheader">
          {day}
        </div>
      ))}

      {calendarCells.map((date, index) => {
        if (!date) {
          return (
            <div
              key={'blank-' + index}
              className="atelier-calendar-day is-blank"
              aria-hidden="true"
            />
          )
        }

        return renderDayCell(date)
      })}
    </div>
  )

  const renderWeeklyView = () => (
    <div className="atelier-week-grid" role="grid">
      {weekDays.map((date) => renderDayCell(date, true))}
    </div>
  )

  const activeKey = dateKey(activeDate)
  const activeDayTasks = calendarTasks[activeKey] || []
  const activeDayClasses = classesForVisibleDate(activeDate)
  const activeCafeEvents =
    subject === 'Todas'
      ? cafeEvents.filter((event) => event.date === activeKey)
      : []
  const activeAcademicEvents =
    subject === 'Todas' ? ACADEMIC_EVENTS[activeKey] || [] : []

  const renderDailyView = () => (
    <div className="atelier-day-view">
      <div className="atelier-day-view-header">
        <p>Dossier del día</p>
        <h3>{longDate(activeDate)}</h3>
        <span>
          {activeDayTasks.length} tareas · {activeDayClasses.length} clases
        </span>
      </div>

      <div className="atelier-day-view-sections">
        <section>
          <span className="atelier-section-label">Clases</span>
          {activeDayClasses.length ? (
            activeDayClasses.map((course) => (
              <Link
                key={course.code}
                to={course.route}
                className={
                  'atelier-day-card atelier-tone--' +
                  subjectTone(course.subject)
                }
              >
                <small>{course.code}</small>
                <strong>{course.subject}</strong>
                <span>{course.time} · {course.room}</span>
              </Link>
            ))
          ) : (
            <p className="atelier-empty-copy">No hay clases registradas.</p>
          )}
        </section>

        <section>
          <span className="atelier-section-label">Tareas y entregas</span>
          {activeDayTasks.length ? (
            activeDayTasks.map((task) => (
              <button
                key={task.id}
                type="button"
                className={
                  'atelier-day-card atelier-day-card--task atelier-tone--' +
                  task.tone
                }
                onClick={() => setSelectedTask(task)}
              >
                <small>{task.status.label} · {task.status.detail}</small>
                <strong>{task.title}</strong>
                <span>{task.subjectGroup}</span>
              </button>
            ))
          ) : (
            <p className="atelier-empty-copy">
              No hay tareas colocadas en este día.
            </p>
          )}
        </section>

        {(activeAcademicEvents.length > 0 || activeCafeEvents.length > 0) && (
          <section>
            <span className="atelier-section-label">Eventos</span>
            {activeAcademicEvents.map((event) => (
              <Link key={event.id} to={event.route} className="atelier-day-card">
                <small>{event.kind}</small>
                <strong>{event.title}</strong>
                <span>{event.time} · {event.place}</span>
              </Link>
            ))}
            {activeCafeEvents.map((event) => (
              <Link key={event.id} to={event.route} className="atelier-day-card">
                <small>Café filosófico</small>
                <strong>{event.title}</strong>
              </Link>
            ))}
          </section>
        )}
      </div>
    </div>
  )

  const renderListView = () => (
    <div className="atelier-list-view">
      <div className="atelier-list-head">
        <span>Materia</span>
        <span>Tarea</span>
        <span>Entrega</span>
        <span>Estado</span>
        <span>Acción</span>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="atelier-empty-state">
          <strong>No hay tareas en esta vista.</strong>
          <span>Cambie los filtros para recuperar otros registros.</span>
        </div>
      ) : (
        filteredTasks.map((task) => (
          <article
            key={task.id}
            className={
              'atelier-list-row atelier-tone--' + task.tone
            }
          >
            <div>
              <small>{task.subjectCode}</small>
              <strong>{task.subjectGroup}</strong>
            </div>

            <button
              type="button"
              className="atelier-list-title"
              onClick={() => setSelectedTask(task)}
            >
              <small>{task.type}</small>
              <strong>{task.title}</strong>
              <span>{task.description}</span>
            </button>

            <div>
              <strong>
                {task.dueDate ? shortDate(task.dueDate) : 'Sin fecha'}
              </strong>
              <small>
                {task.dueDate
                  ? formatDate(task.dueDate)
                  : 'Registrada ' + formatDate(task.assignedDate)}
              </small>
            </div>

            <div>
              <span
                className={
                  'atelier-status atelier-status--' + task.status.key
                }
              >
                {task.status.label}
              </span>
              <small>{task.status.detail}</small>
            </div>

            <div className="atelier-list-actions">
              <button
                type="button"
                onClick={() => toggleTask(task.id)}
              >
                {task.status.key === 'completed' ? '✓ Hecha' : 'Marcar hecha'}
              </button>

              {task.isLocal && (
                <button
                  type="button"
                  className="is-danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        '¿Eliminar esta tarea guardada en el navegador?',
                      )
                    ) {
                      deleteCustomTask(task.id)
                    }
                  }}
                >
                  Eliminar
                </button>
              )}
            </div>
          </article>
        ))
      )}
    </div>
  )

  const activeView =
    calendarView === 'weekly'
      ? renderWeeklyView()
      : calendarView === 'daily'
        ? renderDailyView()
        : calendarView === 'list'
          ? renderListView()
          : renderMonthlyView()

  return (
    <main className="atelier-tasks">
      <header className="atelier-topbar">
        <Link to="/" className="atelier-brand">
          <span className="atelier-brand-mark">Φ</span>
          <span>
            <strong>Biblioteca de Tareas & Calendario</strong>
            <small>PHILOSOPHIA · Edición Atelier</small>
          </span>
        </Link>

        <div className="atelier-topbar-context">
          <span>2026 · B</span>
          <strong>Semana {isoWeekNumber(now)}</strong>
          <small>5.º semestre · CUCSH</small>
        </div>
      </header>

      <section className="atelier-shell">
        <section className="atelier-hero">
          <div className="atelier-hero-copy">
            <p className="atelier-eyebrow">Registro maestro · cuaderno académico</p>
            <h1>
              Ordenar el semestre
              <em> sin convertirlo en ruido.</em>
            </h1>
            <p>
              Calendario de clases, lecturas, entregas y sesiones de enfoque
              reunidos en una sola superficie editorial. Las fechas sin plazo
              confirmado siguen distinguiéndose de los vencimientos reales.
            </p>
          </div>

          <div className="atelier-hero-meta">
            <div>
              <small>Hoy</small>
              <strong>{longDate(now)}</strong>
              <span>{timeZoneLabel()}</span>
            </div>
            <div>
              <small>Folio de agenda</small>
              <strong>#{String(decoratedTasks.length).padStart(3, '0')}</strong>
              <span>registros académicos y personales</span>
            </div>
          </div>

          <div
            className="atelier-completion"
            style={{
              '--completion-angle': completionRate * 3.6 + 'deg',
            }}
            aria-label={
              completionRate + '% de tareas registradas marcadas como completadas'
            }
          >
            <div>
              <strong>{completionRate}%</strong>
              <span>cumplimiento</span>
            </div>
          </div>
        </section>

        <section className="atelier-commandbar" aria-label="Controles del calendario">
          <div className="atelier-period-nav">
            <button
              type="button"
              onClick={() => moveMonth(-1)}
              aria-label="Mes anterior"
            >
              ←
            </button>
            <div>
              <small>Periodo visible</small>
              <strong>
                {monthTitle(calendarCursor.year, calendarCursor.month)}
              </strong>
            </div>
            <button
              type="button"
              onClick={() => moveMonth(1)}
              aria-label="Mes siguiente"
            >
              →
            </button>
            <button type="button" className="is-today" onClick={goToday}>
              Ir a hoy
            </button>
          </div>

          <div className="atelier-view-tabs" role="tablist" aria-label="Vista temporal">
            {VIEW_OPTIONS.map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={calendarView === key ? 'is-active' : ''}
                onClick={() => setCalendarView(key)}
                aria-pressed={calendarView === key}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="atelier-filterbar">
          <div>
            <span className="atelier-filter-label">Materia</span>
            <div className="atelier-filter-pills">
              {subjects.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={
                    (subject === item ? 'is-active ' : '') +
                    'atelier-tone--' +
                    subjectTone(item)
                  }
                  onClick={() => setSubject(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="atelier-filter-label">Estado</span>
            <div className="atelier-filter-pills is-status">
              {STATUS_OPTIONS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={statusView === item ? 'is-active' : ''}
                  onClick={() => setStatusView(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <TaskComposer onCreate={addCustomTask} />

        <section className="atelier-calendar-panel">
          <div className="atelier-panel-heading">
            <div>
              <p>
                Calendarium · {calendarView === 'monthly' ? 'mes' : calendarView === 'weekly' ? 'semana' : calendarView === 'daily' ? 'día' : 'archivo'}
              </p>
              <h2>
                {calendarView === 'monthly'
                  ? monthTitle(calendarCursor.year, calendarCursor.month)
                  : calendarView === 'weekly'
                    ? 'Semana ' + isoWeekNumber(activeDate)
                    : calendarView === 'daily'
                      ? longDate(activeDate)
                      : 'Lista general de tareas'}
              </h2>
            </div>

            <div className="atelier-panel-stats">
              <span>
                <strong>{pendingCount}</strong>
                pendientes
              </span>
              <span className={overdueCount ? 'is-danger' : ''}>
                <strong>{overdueCount}</strong>
                vencidas
              </span>
              <span className={urgentCount ? 'is-warning' : ''}>
                <strong>{urgentCount}</strong>
                urgentes
              </span>
              <span className="is-success">
                <strong>{completedCount}</strong>
                completadas
              </span>
            </div>
          </div>

          <div className="atelier-calendar-body">{activeView}</div>

          <div className="atelier-calendar-legend" aria-label="Leyenda del calendario">
            <span><b>◆</b> fecha de entrega</span>
            <span><b>◇</b> registro sin fecha de entrega</span>
            <span><b className="legend-class" /> clase</span>
            <span><b className="legend-today" /> hoy</span>
          </div>
        </section>

        <section className="atelier-dossier">
          <div className="atelier-dossier-heading">
            <div>
              <p>Cuaderno diario</p>
              <h2>Operaciones para hoy</h2>
            </div>
            <span>
              Máximo cinco prioridades visibles · {longDate(now)}
            </span>
          </div>

          <div className="atelier-dossier-grid">
            <section className="atelier-dossier-card atelier-actions-card">
              <div className="atelier-card-heading">
                <span>01</span>
                <div>
                  <small>Acciones del día</small>
                  <h3>Prioridades</h3>
                </div>
              </div>

              <div className="atelier-priority-list">
                {priorityTasks.length ? (
                  priorityTasks.map((task) => (
                    <article
                      key={task.id}
                      className={
                        'atelier-priority-item atelier-tone--' + task.tone
                      }
                    >
                      <button
                        type="button"
                        className={
                          'atelier-check ' +
                          (task.status.key === 'completed'
                            ? 'is-completed'
                            : '')
                        }
                        onClick={() => toggleTask(task.id)}
                        aria-label={
                          task.status.key === 'completed'
                            ? 'Marcar como pendiente'
                            : 'Marcar como completada'
                        }
                      >
                        {task.status.key === 'completed' ? '✓' : ''}
                      </button>

                      <button
                        type="button"
                        className="atelier-priority-copy"
                        onClick={() => setSelectedTask(task)}
                      >
                        <small>
                          {task.subjectGroup} · {task.status.label}
                        </small>
                        <strong>{task.title}</strong>
                        <span>{task.status.detail}</span>
                      </button>

                      <button
                        type="button"
                        className={
                          focusSession.taskId === task.id
                            ? 'atelier-focus-pick is-active'
                            : 'atelier-focus-pick'
                        }
                        onClick={() => chooseFocusTask(task.id)}
                      >
                        Enfocar
                      </button>
                    </article>
                  ))
                ) : (
                  <p className="atelier-empty-copy">
                    No hay tareas pendientes en el registro.
                  </p>
                )}
              </div>

              <div className="atelier-focus-module">
                <div className="atelier-focus-heading">
                  <div>
                    <small>Sesión viva · bloque de 50 min</small>
                    <strong>
                      {focusTask ? focusTask.title : 'Seleccione una tarea'}
                    </strong>
                  </div>
                  <span className={focusSession.running ? 'is-live' : ''}>
                    {focusSession.running ? 'En curso' : 'En pausa'}
                  </span>
                </div>

                <div
                  className="atelier-timer"
                  aria-live="polite"
                  aria-label={'Tiempo de enfoque: ' + formatDuration(displayFocusSeconds)}
                >
                  {formatDuration(displayFocusSeconds)}
                </div>

                <div className="atelier-focus-progress" aria-hidden="true">
                  <span style={{ width: focusProgress + '%' }} />
                </div>
                <small className="atelier-progress-caption">
                  {focusProgress}% del bloque de 50 minutos
                </small>

                <div className="atelier-focus-controls">
                  <button
                    type="button"
                    onClick={focusSession.running ? pauseFocus : startFocus}
                    disabled={!focusTask && priorityTasks.length === 0}
                  >
                    {focusSession.running ? 'Pausar' : 'Iniciar / reanudar'}
                  </button>
                  <button type="button" onClick={resetFocus}>
                    Reiniciar
                  </button>
                </div>
              </div>
            </section>

            <section className="atelier-dossier-card atelier-projects-card">
              <div className="atelier-card-heading">
                <span>02</span>
                <div>
                  <small>Semestre 2026-B</small>
                  <h3>Proyectos en curso</h3>
                </div>
              </div>

              <div className="atelier-project-list">
                {projects.map((project) => (
                  <article
                    key={project.subject}
                    className={'atelier-project atelier-tone--' + project.tone}
                  >
                    <div>
                      <strong>{project.subject}</strong>
                      <span>
                        {project.completed}/{project.total} cerradas · {project.pending} pendientes
                      </span>
                    </div>
                    <div className="atelier-project-progress">
                      <span style={{ width: project.progress + '%' }} />
                    </div>
                    <b>{project.progress}%</b>
                  </article>
                ))}
              </div>

              <div className="atelier-project-summary">
                <span>Constancia</span>
                <strong>
                  {completedCount} tareas archivadas como completadas
                </strong>
                <small>
                  El tablero no inventa rachas: sólo cuenta estados guardados
                  en este navegador y cierres persistentes del catálogo.
                </small>
              </div>

              <div className="atelier-card-actions">
                <button
                  type="button"
                  onClick={() => setCalendarView('list')}
                >
                  Ver lista general
                </button>
                <button type="button" onClick={() => window.print()}>
                  Exportar / imprimir
                </button>
              </div>
            </section>

            <section className="atelier-dossier-card atelier-time-card">
              <div className="atelier-card-heading">
                <span>03</span>
                <div>
                  <small>Registro horario</small>
                  <h3>Distribución del tiempo</h3>
                </div>
              </div>

              <div className="atelier-time-summary">
                <div
                  className="atelier-donut"
                  style={{
                    '--focus-angle': focusShare * 3.6 + 'deg',
                  }}
                  role="img"
                  aria-label={
                    focusShare +
                    '% enfoque registrado y ' +
                    classShare +
                    '% clases programadas'
                  }
                >
                  <div>
                    <strong>{formatHoursMinutes(trackedSeconds)}</strong>
                    <span>registrado / programado</span>
                  </div>
                </div>

                <div className="atelier-time-legend">
                  <div>
                    <span className="time-swatch is-focus" />
                    <p>
                      <strong>Trabajo profundo · {focusShare}%</strong>
                      <small>{formatHoursMinutes(displayFocusSeconds)} registrados</small>
                    </p>
                  </div>
                  <div>
                    <span className="time-swatch is-class" />
                    <p>
                      <strong>Clases · {classShare}%</strong>
                      <small>{formatHoursMinutes(todayClassSeconds)} programados</small>
                    </p>
                  </div>
                  <div>
                    <span className="time-swatch is-empty" />
                    <p>
                      <strong>Planificación</strong>
                      <small>Sin registro horario todavía</small>
                    </p>
                  </div>
                  <div>
                    <span className="time-swatch is-empty" />
                    <p>
                      <strong>Descanso & bienestar</strong>
                      <small>Sin registro horario todavía</small>
                    </p>
                  </div>
                </div>
              </div>

              <p className="atelier-balance-note">
                {displayFocusSeconds > 0
                  ? 'La jornada combina agenda académica y trabajo profundo registrado sin completar datos que no existen.'
                  : 'Inicie una sesión de enfoque para completar el registro horario del día sin estimaciones artificiales.'}
              </p>
            </section>
          </div>
        </section>

        <section className="atelier-archive-note">
          <div>
            <span className="atelier-seal">Φ</span>
            <p>
              <strong>Registro local certificado por el navegador.</strong>
              El estado de tareas, las tareas personales y el cronómetro de
              enfoque permanecen en este dispositivo mediante localStorage.
            </p>
          </div>

          <div>
            <button type="button" onClick={() => window.print()}>
              Imprimir calendario
            </button>
            <Link to="/semestre/5">Volver al quinto semestre</Link>
          </div>
        </section>
      </section>

      {selectedTask && (
        <div
          className="atelier-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedTask(null)
            }
          }}
        >
          <section
            className="atelier-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="atelier-task-modal-title"
          >
            <button
              type="button"
              className="atelier-modal-close"
              onClick={() => setSelectedTask(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className="atelier-modal-kicker">
              <span>{selectedTask.subjectCode}</span>
              <strong>{selectedTask.subject}</strong>
            </div>

            <span
              className={
                'atelier-status atelier-status--' + selectedTask.status.key
              }
            >
              {selectedTask.status.label}
            </span>

            <h2 id="atelier-task-modal-title">{selectedTask.title}</h2>
            <p>{selectedTask.description}</p>

            {(selectedTask.readingPages ||
              selectedTask.readingScope ||
              selectedTask.readingEdition) && (
              <div className="atelier-modal-reading">
                <span>Lectura precisa</span>
                {selectedTask.readingScope && (
                  <strong>{selectedTask.readingScope}</strong>
                )}
                {selectedTask.readingPages && (
                  <p>{selectedTask.readingPages}</p>
                )}
                {selectedTask.readingEdition && (
                  <small>{selectedTask.readingEdition}</small>
                )}
                {selectedTask.readingFullPart && (
                  <small>{selectedTask.readingFullPart}</small>
                )}
              </div>
            )}

            <div className="atelier-modal-meta">
              <div>
                <span>Asignada</span>
                <strong>{formatDate(selectedTask.assignedDate)}</strong>
              </div>
              <div>
                <span>Entrega</span>
                <strong>
                  {selectedTask.dueDate
                    ? formatDate(selectedTask.dueDate)
                    : 'Por definir'}
                </strong>
              </div>
              <div>
                <span>Tipo</span>
                <strong>{selectedTask.type}</strong>
              </div>
              <div>
                <span>Estado</span>
                <strong>{selectedTask.status.detail}</strong>
              </div>
            </div>

            <div className="atelier-modal-actions">
              <div>
                {selectedTask.studyRoute && (
                  <Link to={selectedTask.studyRoute}>
                    Abrir sistema de estudio ↗
                  </Link>
                )}
                {selectedTask.sourceRoute && (
                  <Link to={selectedTask.sourceRoute}>
                    Abrir fuente · {selectedTask.sourceClass} ↗
                  </Link>
                )}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => toggleTask(selectedTask.id)}
                >
                  {selectedTask.status.key === 'completed'
                    ? '✓ Completada'
                    : 'Marcar como hecha'}
                </button>

                {selectedTask.isLocal && (
                  <button
                    type="button"
                    className="is-danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          '¿Eliminar “' +
                            selectedTask.title +
                            '” de este navegador?',
                        )
                      ) {
                        deleteCustomTask(selectedTask.id)
                      }
                    }}
                  >
                    Eliminar tarea
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
