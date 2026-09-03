# Philosophia · Web Push (OneSignal)

## Arquitectura

- GitHub Pages sigue sirviendo Philosophia.
- OneSignal mantiene las suscripciones Web Push.
- GitHub Actions ejecuta `scripts/send-academic-push.mjs` cada 5 minutos.
- El scheduler lee `src/data/academicSchedule.js` y `src/data/tasks.js`.
- OneSignal recibe cada mensaje con `idempotency_key` determinista para evitar duplicados.
- Preferencias del dispositivo se guardan como tags:
  - `reminder_class_30`
  - `reminder_class_10`
  - `reminder_task_1440`
  - `reminder_task_120`

## OneSignal

Crear una app Web Push con integración **Custom Code**.

Website URL / Site URL en OneSignal (origin):

`https://kychan00.github.io`

Worker:

`https://kychan00.github.io/philosophia/push/onesignal/OneSignalSDKWorker.js`

Scope:

`/philosophia/push/onesignal/`

## GitHub

- Repository variable: `ONESIGNAL_APP_ID`
- Repository secret: `ONESIGNAL_API_KEY`

Nunca guardar `ONESIGNAL_API_KEY` en archivos o commits.

## Prueba

`gh workflow run academic-push.yml -f test=true`

`gh run list --workflow academic-push.yml --limit 3`


## Subfolder note

OneSignal configura Web Push por **origin**, no por subcarpeta.

- Site URL: `https://kychan00.github.io`
- Philosophia vive en: `/philosophia/`
- OneSignal worker URL:
  `https://kychan00.github.io/philosophia/push/onesignal/OneSignalSDKWorker.js`
- OneSignal worker path used by SDK:
  `philosophia/push/onesignal/OneSignalSDKWorker.js`
- Registration scope:
  `/philosophia/push/onesignal/`
