import { useMemo, useState } from 'react'
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

export default function TasksBoard() {
  const [subject, setSubject] = useState('Todas')
  const [view, setView] = useState('Pendientes')
  const [completed, setCompleted] = useState(loadCompleted)

  const subjects = useMemo(
    () => ['Todas', ...new Set(tasks.map((task) => task.subject))],
    [],
  )

  const visibleTasks = useMemo(() => {
    return tasks
      .filter((task) => subject === 'Todas' || task.subject === subject)
      .filter((task) => {
        const isCompleted = Boolean(completed[task.id])

        if (view === 'Pendientes') return !isCompleted
        if (view === 'Completadas') return isCompleted
        return true
      })
      .sort((a, b) =>
        b.assignedDate.localeCompare(a.assignedDate),
      )
  }, [subject, view, completed])

  const groupedTasks = useMemo(() => {
    return visibleTasks.reduce((groups, task) => {
      if (!groups[task.assignedDate]) {
        groups[task.assignedDate] = []
      }

      groups[task.assignedDate].push(task)
      return groups
    }, {})
  }, [visibleTasks])

  const pendingCount = tasks.filter(
    (task) => !completed[task.id],
  ).length

  const completedCount = tasks.length - pendingCount

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

  return (
    <main className="tasks-page">
      <nav className="tasks-nav">
        <Link to="/semestre/5">
          ← Quinto semestre
        </Link>

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
            Un solo lugar para reunir las tareas y entregas
            que aparecen en cada clase, ordenadas por fecha
            y materia.
          </p>
        </div>
      </header>

      <section className="tasks-dashboard">
        <div className="tasks-summary">
          <div>
            <span>Pendientes</span>
            <strong>{pendingCount}</strong>
          </div>

          <div>
            <span>Completadas</span>
            <strong>{completedCount}</strong>
          </div>

          <div>
            <span>Registradas</span>
            <strong>{tasks.length}</strong>
          </div>
        </div>

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

        <div className="tasks-board">
          {Object.keys(groupedTasks).length === 0 ? (
            <div className="tasks-empty">
              <span>✓</span>
              <h2>No hay tareas en esta vista</h2>
              <p>
                Cambie los filtros o espere a que agreguemos
                nuevas tareas desde las siguientes clases.
              </p>
            </div>
          ) : (
            Object.entries(groupedTasks).map(
              ([date, dateTasks]) => (
                <section
                  key={date}
                  className="tasks-date-group"
                >
                  <div className="tasks-date-heading">
                    <div>
                      <span>
                        {shortDate(date)}
                      </span>
                    </div>

                    <div>
                      <p>Fecha de clase</p>
                      <h2>{formatDate(date)}</h2>
                    </div>

                    <span>
                      {dateTasks.length}{' '}
                      {dateTasks.length === 1
                        ? 'registro'
                        : 'registros'}
                    </span>
                  </div>

                  <div className="tasks-card-grid">
                    {dateTasks.map((task) => {
                      const isCompleted = Boolean(
                        completed[task.id],
                      )

                      return (
                        <article
                          key={task.id}
                          className={`task-card ${
                            isCompleted
                              ? 'task-card--completed'
                              : ''
                          }`}
                        >
                          <div className="task-card-top">
                            <span className="task-subject">
                              {task.subject}
                            </span>

                            <span className="task-code">
                              {task.subjectCode}
                            </span>
                          </div>

                          <div className="task-card-body">
                            <p className="task-type">
                              {task.type}
                              {task.weight &&
                                ` · ${task.weight}`}
                            </p>

                            <h3>{task.title}</h3>

                            <p className="task-description">
                              {task.description}
                            </p>

                            <div className="task-meta">
                              <div>
                                <span>Asignada</span>
                                <strong>
                                  {shortDate(
                                    task.assignedDate,
                                  )}
                                </strong>
                              </div>

                              <div>
                                <span>Entrega</span>
                                <strong>
                                  {task.dueDate
                                    ? shortDate(
                                        task.dueDate,
                                      )
                                    : 'Por definir'}
                                </strong>
                              </div>
                            </div>
                          </div>

                          <div className="task-card-footer">
                            <Link to={task.sourceRoute}>
                              {task.sourceClass}
                              <span>↗</span>
                            </Link>

                            <button
                              type="button"
                              className={
                                isCompleted
                                  ? 'is-completed'
                                  : ''
                              }
                              onClick={() =>
                                toggleTask(task.id)
                              }
                            >
                              <span>
                                {isCompleted ? '✓' : ''}
                              </span>

                              {isCompleted
                                ? 'Completada'
                                : 'Marcar hecha'}
                            </button>
                          </div>
                        </article>
                      )
                    })}
                  </div>
                </section>
              ),
            )
          )}
        </div>

        <p className="tasks-local-note">
          El estado “completada” se guarda únicamente en este
          navegador; las tareas académicas permanecen en el
          archivo del sitio.
        </p>
      </section>

      <footer className="tasks-footer">
        <Link to="/semestre/5">
          ← Quinto semestre
        </Link>

        <span>☙ &nbsp; Φ &nbsp; ❧</span>

        <span>Agenda · MMXXVI</span>
      </footer>
    </main>
  )
}
