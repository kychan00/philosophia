import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import tasks from '../data/tasks'

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

const CLASS_SCHEDULE = [
  {
    subject: 'Ontología II',
    code: 'FI190',
    slug: 'ontology',
    weekdays: [1, 3],
    time: '11:30–12:55',
    room: 'FH-23',
    route: '/semestre/5/ontologia-ii',
  },
  {
    subject: 'Métodos de Investigación',
    code: 'FI104',
    slug: 'methods',
    weekdays: [1, 3],
    time: '16:00–17:25',
    room: 'FH-24',
    route: '/semestre/5/metodos-de-investigacion',
  },
  {
    subject: 'Filosofía Analítica',
    code: 'FI264',
    slug: 'analytic',
    weekdays: [1, 3],
    time: '19:00–20:25',
    room: 'FH-25',
    route: '/semestre/5/filosofia-analitica',
  },
  {
    subject: 'Teoría Crítica',
    code: 'FI265',
    slug: 'critical',
    weekdays: [2, 4],
    time: '16:00–17:25',
    room: 'FD 20',
    route: '/semestre/5/teoria-critica',
  },
  {
    subject: 'Ética',
    code: 'FI194',
    slug: 'ethics',
    weekdays: [2, 4],
    time: '19:00–20:25',
    room: 'FH-7',
    route: '/semestre/5/etica',
  },
]

const STATUS_ORDER = {
  overdue: 0,
  today: 1,
  urgent: 2,
  soon: 3,
  future: 4,
  undated: 5,
  completed: 6,
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
  return `${year}-${month}-${day}`
}

function formatDate(value) {
  if (!value) return 'Sin fecha'

  const [year, month, day] = value.split('-').map(Number)
  return `${day} de ${MONTHS[month - 1]} de ${year}`
}

function shortDate(value) {
  if (!value) return 'Por definir'

  const [, month, day] = value.split('-').map(Number)
  return `${day} ${MONTHS[month - 1].slice(0, 3)}`
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

function getTaskDeadline(task) {
  if (!task.dueDate) return null

  const due = parseDate(task.dueDate)
  let time = task.dueTime || null
  let source = task.dueTime ? 'explicit' : 'day'

  if (!time) {
    const course = CLASS_SCHEDULE.find(
      (item) =>
        item.subject === task.subject &&
        item.weekdays.includes(due.getDay()),
    )

    if (course) {
      const parts = course.time.split('–')
      const classEnd = parts[1]?.trim()

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
  if (completed[task.id]) {
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
          ? `La clase terminó a las ${deadline.time}`
          : `${daysLate} ${daysLate === 1 ? 'día' : 'días'} tarde`,
    }
  }

  if (days === 0) {
    return {
      key: 'today',
      label: 'Hoy',
      detail:
        deadline.source === 'class'
          ? `Vence al terminar la clase · ${deadline.time}`
          : `Entrega hoy · ${deadline.time}`,
    }
  }

  if (days <= 2) {
    return {
      key: 'urgent',
      label: 'Urgente',
      detail: `Faltan ${days} ${days === 1 ? 'día' : 'días'}`,
    }
  }

  if (days <= 7) {
    return {
      key: 'soon',
      label: 'Próxima',
      detail: `Faltan ${days} días`,
    }
  }

  return {
    key: 'future',
    label: 'Programada',
    detail: `Faltan ${days} días`,
  }
}

function classesForDate(date) {
  const key = dateKey(date)

  if (key < '2026-08-17' || key > '2026-12-31') {
    return []
  }

  return CLASS_SCHEDULE.filter((course) =>
    course.weekdays.includes(date.getDay()),
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

export default function TasksBoard() {
  const [subject, setSubject] = useState('Todas')
  const [view, setView] = useState('Pendientes')
  const [completed, setCompleted] = useState(loadCompleted)
  const [selectedTask, setSelectedTask] = useState(null)
  const [calendarCursor, setCalendarCursor] = useState(() => {
    const now = new Date()
    return {
      year: now.getFullYear(),
      month: now.getMonth(),
    }
  })

  const subjects = useMemo(
    () => ['Todas', ...new Set(tasks.map((task) => task.subject))],
    [],
  )

  const decoratedTasks = useMemo(
    () =>
      tasks.map((task) => ({
        ...task,
        status: getTaskStatus(task, completed),
      })),
    [completed],
  )

  const visibleTasks = useMemo(() => {
    return decoratedTasks
      .filter((task) => subject === 'Todas' || task.subject === subject)
      .filter((task) => {
        const isCompleted = task.status.key === 'completed'

        if (view === 'Pendientes') return !isCompleted
        if (view === 'Completadas') return isCompleted
        return true
      })
      .sort((a, b) => {
        const statusDiff =
          STATUS_ORDER[a.status.key] - STATUS_ORDER[b.status.key]

        if (statusDiff !== 0) return statusDiff

        if (a.dueDate && b.dueDate) {
          return a.dueDate.localeCompare(b.dueDate)
        }

        if (a.dueDate) return -1
        if (b.dueDate) return 1

        return b.assignedDate.localeCompare(a.assignedDate)
      })
  }, [decoratedTasks, subject, view])

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

  const calendarCells = useMemo(
    () => buildCalendar(calendarCursor.year, calendarCursor.month),
    [calendarCursor],
  )

  const calendarTasks = useMemo(() => {
    return decoratedTasks.reduce((map, task) => {
      if (!task.dueDate) return map

      if (!map[task.dueDate]) {
        map[task.dueDate] = []
      }

      map[task.dueDate].push(task)
      return map
    }, {})
  }, [decoratedTasks])

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

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedTask(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <main className="tasks-page tasks-page--priority">
      <nav className="tasks-nav">
        <Link to="/semestre/5">← Quinto semestre</Link>

        <Link to="/" className="tasks-brand">
          <span>Φ</span>
          Philosophia
        </Link>

        <span>2026 · B</span>
      </nav>

      <header className="tasks-hero">
        <div className="tasks-hero-number" aria-hidden="true">
          V
        </div>

        <div className="tasks-hero-content">
          <p className="tasks-kicker">
            Officia · Agenda academica
          </p>

          <h1>
            Tablero de
            <em>tareas</em>
          </h1>

          <div className="tasks-ornament">
            <span />
            <b>❦</b>
            <span />
          </div>

          <p>
            Prioridades por fecha, calendario del semestre y una ficha
            completa para cada tarea.
          </p>
        </div>
      </header>

      <section className="tasks-dashboard tasks-dashboard--priority">
        <div className="tasks-summary tasks-summary--priority">
          <div>
            <span>Pendientes</span>
            <strong>{pendingCount}</strong>
          </div>

          <div className={overdueCount ? 'summary-danger' : ''}>
            <span>Vencidas</span>
            <strong>{overdueCount}</strong>
          </div>

          <div className={urgentCount ? 'summary-warning' : ''}>
            <span>Urgentes</span>
            <strong>{urgentCount}</strong>
          </div>

          <div className="summary-success">
            <span>Completadas</span>
            <strong>{completedCount}</strong>
          </div>
        </div>

        <div className="task-priority-legend" aria-label="Leyenda de prioridad">
          <span className="legend-overdue">Vencida</span>
          <span className="legend-urgent">≤ 2 días</span>
          <span className="legend-soon">≤ 7 días</span>
          <span className="legend-future">Programada</span>
          <span className="legend-completed">Completada</span>
        </div>

        <section className="tasks-calendar-shell">
          <div className="tasks-calendar-heading">
            <div>
              <p>Calendarium · 2026-B</p>
              <h2>Clases y entregas</h2>
            </div>

            <div className="tasks-calendar-nav">
              <button type="button" onClick={() => moveMonth(-1)}>
                ←
              </button>

              <strong>
                {MONTHS[calendarCursor.month]} {calendarCursor.year}
              </strong>

              <button type="button" onClick={() => moveMonth(1)}>
                →
              </button>
            </div>
          </div>

          <div className="tasks-calendar">
            {WEEKDAYS.map((day) => (
              <div key={day} className="tasks-calendar-weekday">
                {day}
              </div>
            ))}

            {calendarCells.map((date, index) => {
              if (!date) {
                return (
                  <div
                    key={`blank-${index}`}
                    className="tasks-calendar-day is-blank"
                  />
                )
              }

              const key = dateKey(date)
              const dayTasks = calendarTasks[key] || []
              const dayClasses = classesForDate(date)
              const today = dateKey(new Date()) === key

              return (
                <div
                  key={key}
                  className={`tasks-calendar-day ${today ? 'is-today' : ''}`}
                >
                  <div className="tasks-calendar-day-number">
                    <span>{date.getDate()}</span>
                    {today && <small>hoy</small>}
                  </div>

                  <div className="tasks-calendar-events">
                    {dayClasses.map((course) => (
                      <Link
                        key={`${key}-${course.code}`}
                        to={course.route}
                        className={`calendar-class calendar-class--${course.slug}`}
                        title={`${course.subject} · ${course.time} · ${course.room}`}
                      >
                        <strong>{course.subject}</strong>
                        <span>{course.time}</span>
                      </Link>
                    ))}

                    {dayTasks.map((task) => (
                      <button
                        key={task.id}
                        type="button"
                        className={`calendar-task calendar-task--${task.status.key}`}
                        onClick={() => setSelectedTask(task)}
                      >
                        <span>◆</span>
                        {task.title}
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <div className="tasks-controls">
          <div className="tasks-filter-group">
            <span>Estado</span>

            <div>
              {['Pendientes', 'Todas', 'Completadas'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={view === item ? 'is-active' : ''}
                  onClick={() => setView(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="tasks-filter-group">
            <span>Materia</span>

            <div>
              {subjects.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={subject === item ? 'is-active' : ''}
                  onClick={() => setSubject(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className="tasks-priority-section">
          <div className="tasks-priority-heading">
            <div>
              <p>Ordo temporis</p>
              <h2>Prioridad por tiempo</h2>
            </div>

            <span>{visibleTasks.length} visibles</span>
          </div>

          <div className="tasks-priority-table">
            <div className="tasks-priority-table-head">
              <span>Materia</span>
              <span>Tarea</span>
              <span>Prioridad</span>
              <span>Entrega</span>
              <span>Estado</span>
            </div>

            {visibleTasks.length === 0 ? (
              <div className="tasks-empty">
                <span>✓</span>
                <h2>No hay tareas en esta vista</h2>
                <p>Cambie los filtros para mostrar otros registros.</p>
              </div>
            ) : (
              visibleTasks.map((task) => {
                const isCompleted = task.status.key === 'completed'

                return (
                  <article
                    key={task.id}
                    className={`task-priority-row task-priority-row--${task.status.key}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedTask(task)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setSelectedTask(task)
                      }
                    }}
                  >
                    <div className="task-priority-subject">
                      <span>{task.subjectCode}</span>
                      <strong>{task.subject}</strong>
                    </div>

                    <div className="task-priority-title">
                      <small>
                        {task.type}
                        {task.weight && ` · ${task.weight}`}
                      </small>
                      <strong>{task.title}</strong>
                      <p>{task.description}</p>
                    </div>

                    <div>
                      <span className={`task-status task-status--${task.status.key}`}>
                        {task.status.label}
                      </span>
                      <small className="task-status-detail">
                        {task.status.detail}
                      </small>
                    </div>

                    <div className="task-priority-date">
                      <strong>{task.dueDate ? shortDate(task.dueDate) : '—'}</strong>
                      <span>{task.dueDate ? formatDate(task.dueDate) : 'Por definir'}</span>
                    </div>

                    <div className="task-priority-actions">
                      <button
                        type="button"
                        className={isCompleted ? 'is-completed' : ''}
                        onClick={(event) => {
                          event.stopPropagation()
                          toggleTask(task.id)
                        }}
                      >
                        <span>{isCompleted ? '✓' : ''}</span>
                        {isCompleted ? 'Hecha' : 'Marcar hecha'}
                      </button>
                    </div>
                  </article>
                )
              })
            )}
          </div>
        </section>

        <p className="tasks-local-note">
          El estado “completada” se guarda únicamente en este navegador.
          Las prioridades se recalculan automáticamente según la fecha.
        </p>
      </section>

      <footer className="tasks-footer">
        <Link to="/semestre/5">← Quinto semestre</Link>
        <span>☙ &nbsp; Φ &nbsp; ❧</span>
        <span>Agenda · MMXXVI</span>
      </footer>

      {selectedTask && (
        <div
          className="task-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedTask(null)
            }
          }}
        >
          <section
            className={`task-modal task-modal--${selectedTask.status.key}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="task-modal-title"
          >
            <button
              type="button"
              className="task-modal-close"
              onClick={() => setSelectedTask(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className="task-modal-kicker">
              <span>{selectedTask.subjectCode}</span>
              <strong>{selectedTask.subject}</strong>
            </div>

            <span className={`task-status task-status--${selectedTask.status.key}`}>
              {selectedTask.status.label}
            </span>

            <h2 id="task-modal-title">{selectedTask.title}</h2>

            <p className="task-modal-description">
              {selectedTask.description}
            </p>

            {(selectedTask.readingPages ||
              selectedTask.readingScope ||
              selectedTask.readingEdition) && (
              <div className="task-modal-reading">
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

            <div className="task-modal-meta">
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
                <span>Prioridad</span>
                <strong>{selectedTask.status.detail}</strong>
              </div>
            </div>

            <div className="task-modal-footer">
              <Link to={selectedTask.sourceRoute}>
                Abrir fuente · {selectedTask.sourceClass}
                <span>↗</span>
              </Link>

              <button
                type="button"
                className={
                  selectedTask.status.key === 'completed'
                    ? 'is-completed'
                    : ''
                }
                onClick={() => toggleTask(selectedTask.id)}
              >
                {selectedTask.status.key === 'completed'
                  ? '✓ Completada'
                  : 'Marcar como hecha'}
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
