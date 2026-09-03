import { useEffect, useState } from 'react'
import {
  getOneSignalPushState,
  isOneSignalConfigured,
  resyncOneSignalSettings,
  subscribeOneSignal,
  unsubscribeOneSignal,
} from '../lib/oneSignalPush'

export default function PushSubscriptionCard({ settings }) {
  const [state, setState] = useState({
    loading: true,
    configured: isOneSignalConfigured(),
    supported: false,
    permission: false,
    optedIn: false,
    subscriptionId: null,
  })
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')

  const refresh = async () => {
    const next = await getOneSignalPushState()
    setState({ loading: false, ...next })
    return next
  }

  useEffect(() => {
    let active = true

    getOneSignalPushState().then((next) => {
      if (active) setState({ loading: false, ...next })
    })

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (!state.optedIn) return

    resyncOneSignalSettings(settings)
      .then((next) => {
        if (next) setState({ loading: false, ...next })
      })
      .catch(() => {})
  }, [
    settings.class30,
    settings.class10,
    settings.task24,
    settings.task2,
    state.optedIn,
  ])

  const subscribe = async () => {
    setBusy(true)
    setMessage('')

    try {
      await subscribeOneSignal(settings)
      await refresh()
      setMessage('Este dispositivo quedó suscrito a Web Push.')
    } catch (error) {
      setMessage(error?.message || 'No se pudo completar la suscripción.')
    } finally {
      setBusy(false)
    }
  }

  const unsubscribe = async () => {
    setBusy(true)
    setMessage('')

    try {
      await unsubscribeOneSignal()
      await refresh()
      setMessage('Web Push quedó desactivado en este dispositivo.')
    } catch {
      setMessage('No se pudo cambiar la suscripción.')
    } finally {
      setBusy(false)
    }
  }

  if (!state.configured) {
    return (
      <section className="academic-push-card">
        <small>WEB PUSH · FASE 3</small>
        <div className="academic-push-state muted">
          <span>◌</span>
          <div>
            <strong>Falta conectar OneSignal</strong>
            <p>
              La interfaz ya está instalada. En producción se activará cuando
              configure ONESIGNAL_APP_ID en GitHub.
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (state.loading) {
    return (
      <section className="academic-push-card">
        <small>WEB PUSH · FASE 3</small>
        <div className="academic-push-state muted">
          <span>…</span>
          <div><strong>Comprobando suscripción…</strong></div>
        </div>
      </section>
    )
  }

  return (
    <section className="academic-push-card">
      <small>WEB PUSH · FASE 3</small>

      <div className={`academic-push-state ${state.optedIn ? 'ready' : ''}`}>
        <span>{state.optedIn ? '●' : '○'}</span>
        <div>
          <strong>
            {state.optedIn
              ? 'Push real activado'
              : state.supported
                ? 'Activar avisos con Philosophia cerrada'
                : 'Web Push no disponible'}
          </strong>
          <p>
            {state.optedIn
              ? 'OneSignal puede entregar recordatorios aunque Safari y Philosophia no estén abiertos.'
              : 'Este paso registra el dispositivo con el servicio de notificaciones.'}
          </p>
        </div>

        {state.supported && (
          <button
            type="button"
            disabled={busy}
            onClick={state.optedIn ? unsubscribe : subscribe}
          >
            {busy
              ? 'Procesando…'
              : state.optedIn
                ? 'Desactivar'
                : 'Activar Web Push'}
          </button>
        )}
      </div>

      {state.optedIn && state.subscriptionId && (
        <div className="academic-push-id">
          <span>DISPOSITIVO</span>
          <code>{state.subscriptionId.slice(0, 8)}…{state.subscriptionId.slice(-6)}</code>
        </div>
      )}

      {message && <p className="academic-push-message">{message}</p>}
    </section>
  )
}
