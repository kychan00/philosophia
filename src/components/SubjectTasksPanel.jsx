import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import tasks from '../data/tasks'

const MONTHS = [
  'ene', 'feb', 'mar', 'abr', 'may', 'jun',
  'jul', 'ago', 'sep', 'oct', 'nov', 'dic',
]

function loadCompleted() {
  try {
    return JSON.parse(
      window.localStorage.getItem('philosophia-task-status') || '{}',
    )
  } catch {
    return {}
  }
}

function formatDate(value) {
  if (!value) return 'Sin fecha límite'
  const [, month, day] = value.split('-').map(Number)
  return `${day} ${MONTHS[month - 1]}`
}

function taskSort(a, b) {
  if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate)
  if (a.dueDate) return -1
  if (b.dueDate) return 1
  return (b.assignedDate || '').localeCompare(a.assignedDate || '')
}

export default function SubjectTasksPanel({ subjectCode }) {
  const [completed, setCompleted] = useState(loadCompleted)
  const [collapsed, setCollapsed] = useState(false)

  const subjectTasks = useMemo(
    () =>
      tasks
        .filter((task) => task.subjectCode === subjectCode)
        .slice()
        .sort(taskSort),
    [subjectCode],
  )

  const completedCount = subjectTasks.filter(
    (task) => completed[task.id],
  ).length

  const pendingCount = Math.max(subjectTasks.length - completedCount, 0)

  const toggleCompleted = (taskId) => {
    const next = {
      ...completed,
      [taskId]: !completed[taskId],
    }

    if (!next[taskId]) delete next[taskId]

    setCompleted(next)

    try {
      window.localStorage.setItem(
        'philosophia-task-status',
        JSON.stringify(next),
      )
    } catch {}
  }

  return (
    <section
      className={[
        'subject-tasks-panel',
        `subject-tasks-panel--${subjectCode.toLowerCase()}`,
        collapsed ? 'is-collapsed' : '',
      ].join(' ')}
    >
      <header className="subject-tasks-head">
        <div className="subject-tasks-title">
          <span>AGENDA · OPERA</span>
          <h2>Tareas de la materia</h2>
          <p>
            Lecturas, trabajos y estudio reunidos antes del archivo de clases.
          </p>
        </div>

        <div className="subject-tasks-summary">
          <div>
            <strong>{subjectTasks.length}</strong>
            <span>registradas</span>
          </div>
          <div>
            <strong>{pendingCount}</strong>
            <span>pendientes</span>
          </div>

          <button
            type="button"
            className="subject-tasks-collapse"
            aria-expanded={!collapsed}
            onClick={() => setCollapsed((value) => !value)}
          >
            <span>{collapsed ? 'Maximizar panel' : 'Minimizar panel'}</span>
            <b>{collapsed ? '＋' : '−'}</b>
          </button>
        </div>
      </header>

      {collapsed ? (
        <div className="subject-tasks-collapsed-strip">
          <div>
            <strong>
              {pendingCount
                ? `${pendingCount} ${pendingCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}`
                : 'Todo al día'}
            </strong>
            <span>
              {subjectTasks[0]?.dueDate
                ? `Próxima fecha: ${formatDate(subjectTasks[0].dueDate)}`
                : 'Sin próxima fecha definida'}
            </span>
          </div>

          <Link to="/tareas">Calendario general →</Link>
        </div>
      ) : (
        <>
          {subjectTasks.length ? (
            <div className="subject-tasks-list">
              {subjectTasks.map((task, index) => {
                const isCompleted = Boolean(completed[task.id])
                const route = task.studyRoute || task.sourceRoute || '/tareas'

                return (
                  <article
                    key={task.id}
                    className={`subject-task-card ${isCompleted ? 'is-completed' : ''}`}
                  >
                    <div className="subject-task-index">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="subject-task-main">
                      <div className="subject-task-meta">
                        <span>{task.type || 'Tarea'}</span>
                        <b>·</b>
                        <span>
                          {task.dueDate
                            ? `Entrega ${formatDate(task.dueDate)}${task.dueTime ? ` · ${task.dueTime}` : ''}`
                            : 'Sin fecha límite'}
                        </span>
                        {task.weight && (
                          <>
                            <b>·</b>
                            <span>{task.weight}</span>
                          </>
                        )}
                      </div>

                      <h3>{task.title}</h3>
                      <p>{task.description}</p>

                      {(task.readingPages || task.readingScope) && (
                        <div className="subject-task-reading">
                          {task.readingScope && <span>{task.readingScope}</span>}
                          {task.readingPages && <strong>{task.readingPages}</strong>}
                        </div>
                      )}

                      <div className="subject-task-footer">
                        <span>
                          {task.sourceClass || `Asignada ${formatDate(task.assignedDate)}`}
                        </span>

                        <div>
                          <button
                            type="button"
                            className="subject-task-check"
                            aria-pressed={isCompleted}
                            onClick={() => toggleCompleted(task.id)}
                          >
                            <i>{isCompleted ? '✓' : ''}</i>
                            {isCompleted ? 'Completada' : 'Marcar completada'}
                          </button>

                          <Link to={route}>
                            {task.studyRoute ? 'Abrir estudio ↗' : 'Abrir origen ↗'}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="subject-tasks-empty">
              <span>∅</span>
              <p>Todavía no hay tareas registradas para esta materia.</p>
              <Link to="/tareas">Ver calendario general →</Link>
            </div>
          )}

          <footer className="subject-tasks-calendar-link">
            <span>CALENDARIUM</span>
            <p>
              Todas las materias y fechas de entrega siguen reunidas en el
              calendario general.
            </p>
            <Link to="/tareas">Ir al calendario completo →</Link>
          </footer>
        </>
      )}
    </section>
  )
}
