# Verificación técnica 2D y workflows históricos de Hartmann

**Fecha:** 22 de octubre de 2026  
**Alcance:** navegación y automatización. **El contenido académico ya fue revisado previamente y queda fuera de esta intervención.**

## Auditoría de workflows

- `feat/hartmann-chapter1-2d`: `.github/workflows/validate-hartmann-2d.yml` ejecutaba `npm ci` y `npm run build` únicamente en esa rama.
- `feat/hartmann-chapter1-expanded-nodes`: `.github/workflows/validate-hartmann-expanded.yml` ejecutaba `npm ci` y `npx vite build` únicamente en esa rama.
- Esos workflows históricos no incorporaban pruebas de interacción 2D, ni smoke de navegador, ni checks responsive; duplicaban el build que hoy ejecuta `.github/workflows/quality.yml`.
- **Decisión:** no restaurar ninguno de ellos en `main`, ni fusionar ramas históricas, ni modificar páginas, nodos o referencias. Mantener pruebas automatizadas en un solo pipeline de PR.

## Regresión funcional que se incorpora

`tests/hartmann-chapter1-browser-smoke.mjs`, ejecutado en Chromium sobre build real de Vite, valida:

1. La ruta pública de Hartmann: `#/tareas/ontologia-ii/hartmann-cosa-en-si/sistema`.
2. Montaje de React Flow y existencia de rutas activas.
3. Selección de la ruta Reinhold y apertura de inspector mediante navegación del pie.
4. Apertura y cierre del folio semántico.
5. Activación de relaciones transversales.
6. Inicio, avance y salida de guía progresiva.
7. Ausencia de desbordamiento horizontal del documento en 1440×900, 1024×768, 768×1024 y 390×844.

Se añade lint del test y smoke tras `npm run build` al workflow **Validate PHILOSOPHIA (PR and manual)** para PR hacia `main` o `release/**`. Las demás pruebas 2D que ya existían (Glock, Lukács, Nava, Marx/Bloch/Feuerbach, etc.) se conservan y siguen cubriendo sus páginas. No se modifican sus expectativas ni el contenido editorial.

## Historial y límites

- Las ramas históricas divergentes contienen versiones anteriores de archivos hoy presentes en `main`; los merges mediante squash pueden conservar commits no ancestros aunque la función esté publicada.
- El objetivo de esta verificación no es revalidar tesis filosóficas, transcripciones o alcance bibliográfico.
- Chromium emulado no constituye evidencia de Safari en iPad físico.
- **Estado:** prueba creada en rama de trabajo; el resultado de CI, merge, GitHub Pages, SHA servido y dispositivo físico solo pueden acreditarse después de las acciones correspondientes.

## Protocolos relacionados

- [Flujo de ramas y despliegues](flujo-multichat-y-despliegues.md).
- Vault privado: `08 - PHILOSOPHIA/QA - Hartmann y cobertura funcional 2D - 2026-10-22.md`.
