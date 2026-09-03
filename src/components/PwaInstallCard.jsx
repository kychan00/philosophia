import { useEffect, useMemo, useState } from 'react'

function isStandalone() {
  return (
    window.matchMedia?.('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  )
}

function isiOS() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent)
}

export default function PwaInstallCard() {
  const [installPrompt, setInstallPrompt] = useState(null)
  const [installed, setInstalled] = useState(() => isStandalone())
  const [swState, setSwState] = useState('checking')

  const appleDevice = useMemo(() => isiOS(), [])

  useEffect(() => {
    const onPrompt = (event) => {
      event.preventDefault()
      setInstallPrompt(event)
    }

    const onInstalled = () => {
      setInstalled(true)
      setInstallPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(() => setSwState('ready'))
        .catch(() => setSwState('error'))
    } else {
      setSwState('unsupported')
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const install = async () => {
    if (!installPrompt) return

    await installPrompt.prompt()
    const choice = await installPrompt.userChoice

    if (choice?.outcome === 'accepted') {
      setInstallPrompt(null)
    }
  }

  return (
    <section className="academic-pwa-card">
      <small>APLICACIÓN · PWA</small>

      <div className="academic-pwa-status">
        <div>
          <span className="academic-pwa-mark">Φ</span>
          <div>
            <strong>
              {installed ? 'Philosophia instalada' : 'Instalar Philosophia'}
            </strong>
            <em>
              {swState === 'ready'
                ? 'Service Worker activo · base preparada para Web Push'
                : swState === 'checking'
                  ? 'Comprobando Service Worker…'
                  : 'La agenda web sigue disponible'}
            </em>
          </div>
        </div>

        {installed ? (
          <span className="academic-pwa-installed">INSTALADA</span>
        ) : installPrompt ? (
          <button type="button" onClick={install}>
            Instalar
          </button>
        ) : null}
      </div>

      {!installed && appleDevice && (
        <div className="academic-pwa-ios">
          <strong>En iPhone / iPad</strong>
          <p>
            Abra Philosophia en Safari, pulse Compartir y elija
            <b> “Agregar a pantalla de inicio”</b>. En iOS, Web Push requiere
            que el sitio esté instalado de esta forma.
          </p>
        </div>
      )}

      {!installed && !appleDevice && !installPrompt && (
        <p className="academic-pwa-hint">
          Si el navegador ofrece instalación, aparecerá aquí el botón.
          En Safari para Mac también puede añadir el sitio como app web desde
          las opciones del navegador.
        </p>
      )}
    </section>
  )
}
