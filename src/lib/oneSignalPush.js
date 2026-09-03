const APP_ID = import.meta.env.VITE_ONESIGNAL_APP_ID || ''

let initPromise = null

export function isOneSignalConfigured() {
  return Boolean(APP_ID)
}

export function initOneSignal() {
  if (!APP_ID || typeof window === 'undefined') {
    return Promise.resolve(null)
  }

  if (initPromise) return initPromise

  initPromise = new Promise((resolve, reject) => {
    window.OneSignalDeferred = window.OneSignalDeferred || []

    window.OneSignalDeferred.push(async function (OneSignal) {
      try {
        await OneSignal.init({
          appId: APP_ID,
          serviceWorkerPath: 'philosophia/push/onesignal/OneSignalSDKWorker.js',
          serviceWorkerParam: {
            scope: '/philosophia/push/onesignal/',
          },
          autoResubscribe: true,
          notifyButton: {
            enable: false,
          },
          welcomeNotification: {
            disable: true,
          },
        })

        resolve(OneSignal)
      } catch (error) {
        console.error('Philosophia OneSignal init:', error)
        reject(error)
      }
    })
  })

  return initPromise
}

export async function getOneSignalPushState() {
  if (!isOneSignalConfigured()) {
    return {
      configured: false,
      supported: false,
      permission: false,
      optedIn: false,
      subscriptionId: null,
    }
  }

  try {
    const OneSignal = await initOneSignal()

    return {
      configured: true,
      supported: Boolean(OneSignal?.Notifications?.isPushSupported()),
      permission: Boolean(OneSignal?.Notifications?.permission),
      optedIn: Boolean(OneSignal?.User?.PushSubscription?.optedIn),
      subscriptionId: OneSignal?.User?.PushSubscription?.id || null,
    }
  } catch {
    return {
      configured: true,
      supported: false,
      permission: false,
      optedIn: false,
      subscriptionId: null,
    }
  }
}

export async function syncReminderTags(settings) {
  const OneSignal = await initOneSignal()
  if (!OneSignal) return

  OneSignal.User.addTags({
    philosophia_push: '1',
    reminder_class_30: settings.class30 ? '1' : '0',
    reminder_class_10: settings.class10 ? '1' : '0',
    reminder_task_1440: settings.task24 ? '1' : '0',
    reminder_task_120: settings.task2 ? '1' : '0',
  })
}

export async function subscribeOneSignal(settings) {
  const OneSignal = await initOneSignal()
  if (!OneSignal) throw new Error('OneSignal no está configurado.')

  if (!OneSignal.Notifications.isPushSupported()) {
    throw new Error('Este navegador no soporta Web Push.')
  }

  if (!OneSignal.Notifications.permission) {
    await OneSignal.Notifications.requestPermission()
  }

  if (!OneSignal.Notifications.permission) {
    throw new Error('El permiso de notificaciones no fue concedido.')
  }

  await OneSignal.User.PushSubscription.optIn()
  await syncReminderTags(settings)

  return getOneSignalPushState()
}

export async function unsubscribeOneSignal() {
  const OneSignal = await initOneSignal()
  if (!OneSignal) return
  await OneSignal.User.PushSubscription.optOut()
}

export async function resyncOneSignalSettings(settings) {
  const state = await getOneSignalPushState()
  if (!state.configured || !state.optedIn) return state

  await syncReminderTags(settings)
  return getOneSignalPushState()
}
