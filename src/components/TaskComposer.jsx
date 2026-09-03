import { useMemo, useState } from 'react'
import CLASS_SCHEDULE from '../data/academicSchedule'
import { makeCustomTaskId } from '../data/localTasks'

const TYPES = [
  'Lectura',
  'Ensayo',
  'Ejercicio',
  'Investigación',
  'Exposición',
  'Repaso',
  'Trabajo del curso',
  'Otro',
]

const PRIORITIES = ['Alta', 'Media', 'Baja']

const WHATSAPP_NUMBER = '523313625437'

function todayKey() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function buildWhatsAppMessage(task) {
  const due = task.dueDate
    ? `${task.dueDate}${task.dueTime ? ` · ${task.dueTime}` : ''}`
    : 'Sin fecha definida'

  return [
    '📚 Philosophia · nueva tarea',
    '',
    `Materia: ${task.subject} (${task.subjectCode})`,
    `Tarea: ${task.title}`,
    `Tipo: ${task.type}`,
    `Prioridad: ${task.priority || 'Media'}`,
    `Entrega: ${due}`,
    `Origen: ${task.sourceClass}`,
    '',
    task.description,
  ].join('\n')
}

function openWhatsAppForTask(task) {
  const message = encodeURIComponent(buildWhatsAppMessage(task))
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

function emptyForm() {
  return {
    subject: CLASS_SCHEDULE[0]?.subject || '',
    customSubject: '',
    title: '',
    type: 'Lectura',
    priority: 'Media',
    dueDate: '',
    dueTime: '',
    sourceClass: '',
    description: '',
  }
}

export default function TaskComposer({ onCreate }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(emptyForm)

  const selectedCourse = useMemo(
    () => CLASS_SCHEDULE.find((item) => item.subject === form.subject),
    [form.subject],
  )

  const update = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const buildTask = () => {
    const title = form.title.trim()
    const resolvedSubject =
      form.subject === '__other__'
        ? form.customSubject.trim()
        : form.subject

    if (!title || !resolvedSubject) return null

    return {
      id: makeCustomTaskId(),
      subject: resolvedSubject,
      subjectCode: selectedCourse?.code || '—',
      assignedDate: todayKey(),
      dueDate: form.dueDate || null,
      dueTime: form.dueTime || null,
      title,
      type: form.type,
      priority: form.priority,
      weight: null,
      description:
        form.description.trim() ||
        'Tarea agregada manualmente desde Philosophia.',
      sourceClass:
        form.sourceClass.trim() ||
        `Registro personal · ${resolvedSubject}`,
      sourceRoute: selectedCourse?.route || '/tareas',
      custom: true,
    }
  }

  const finishCreate = (task) => {
    onCreate(task)
    setForm(emptyForm())
    setOpen(false)
  }

  const submit = (event) => {
    event.preventDefault()

    const task = buildTask()
    if (!task) return

    finishCreate(task)
  }

  const saveAndWhatsApp = () => {
    const task = buildTask()
    if (!task) return

    finishCreate(task)
    openWhatsAppForTask(task)
  }

  return (
    <section className={`task-composer ${open ? 'is-open' : ''}`}>
      <div className="task-composer-heading">
        <div>
          <p>Memoria local · navegador</p>
          <h2>Nueva tarea</h2>
          <span>
            Se guarda en este dispositivo y aparece inmediatamente en el
            calendario y el tablero.
          </span>
        </div>

        <button
          type="button"
          className="task-composer-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? 'Cerrar' : '＋ Agregar tarea'}
        </button>
      </div>

      {open && (
        <form className="task-composer-form" onSubmit={submit}>
          <label>
            <span>Materia</span>
            <select
              value={form.subject}
              onChange={(event) => update('subject', event.target.value)}
              required
            >
              {CLASS_SCHEDULE.map((course) => (
                <option key={course.code} value={course.subject}>
                  {course.subject} · {course.code}
                </option>
              ))}
              <option value="__other__">Otra…</option>
            </select>
          </label>

          {form.subject === '__other__' && (
            <label>
              <span>¿Cuál materia?</span>
              <input
                value={form.customSubject}
                onChange={(event) => update('customSubject', event.target.value)}
                placeholder="Ej. Filosofía política"
                autoFocus
                required
              />
            </label>
          )}

          <label className="task-composer-wide">
            <span>Tarea</span>
            <input
              value={form.title}
              onChange={(event) => update('title', event.target.value)}
              placeholder="Ej. Leer el capítulo III de..."
              required
            />
          </label>

          <label>
            <span>Tipo</span>
            <select
              value={form.type}
              onChange={(event) => update('type', event.target.value)}
            >
              {TYPES.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>

          <label>
            <span>Prioridad</span>
            <select
              value={form.priority}
              onChange={(event) => update('priority', event.target.value)}
            >
              {PRIORITIES.map((priority) => (
                <option key={priority}>{priority}</option>
              ))}
            </select>
          </label>

          <label>
            <span>Fecha de entrega</span>
            <input
              type="date"
              value={form.dueDate}
              onChange={(event) => update('dueDate', event.target.value)}
            />
          </label>

          <label>
            <span>Hora</span>
            <input
              type="time"
              value={form.dueTime}
              onChange={(event) => update('dueTime', event.target.value)}
              disabled={!form.dueDate}
            />
          </label>

          <label className="task-composer-wide">
            <span>Clase / origen</span>
            <input
              value={form.sourceClass}
              onChange={(event) => update('sourceClass', event.target.value)}
              placeholder="Ej. Clase del 3 de septiembre · Classroom · Personal"
            />
          </label>

          <label className="task-composer-wide">
            <span>Notas</span>
            <textarea
              value={form.description}
              onChange={(event) => update('description', event.target.value)}
              placeholder="Qué hay que hacer, páginas, instrucciones, etc."
              rows="4"
            />
          </label>

          <div className="task-composer-meta">
            <span>
              {selectedCourse
                ? `${selectedCourse.time} · ${selectedCourse.room}`
                : form.customSubject.trim()
                  ? `Materia personalizada · ${form.customSubject.trim()}`
                  : 'Materia personalizada'}
            </span>
            <span>Prioridad: {form.priority}</span>
          </div>

          <div className="task-composer-actions">
            <button
              type="button"
              onClick={() => {
                setForm(emptyForm())
                setOpen(false)
              }}
            >
              Cancelar
            </button>

            <button type="submit">
              Guardar tarea
            </button>

            <button
              type="button"
              className="is-primary"
              onClick={saveAndWhatsApp}
            >
              Guardar y abrir WhatsApp
            </button>
          </div>
        </form>
      )}
    </section>
  )
}
