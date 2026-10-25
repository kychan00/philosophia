# Vista previa aislada · Teoría Crítica / PR #19

**Estado:** configuración preparada en la rama del PR, pendiente de crear o vincular proyecto Vercel y de confirmar un deployment concreto. **No es producción.**

## Intención

Permitir la revisión humana de la primera clase, **18 de agosto de 2026**, sin hacer merge, cambiar GitHub Pages ni marcar todas las clases como aprobadas.

- Repositorio: `kychan00/philosophia`
- PR: https://github.com/kychan00/philosophia/pull/19
- Rama: `feat/teoria-critica-archivo-dialectico-20261023-p1`
- Ruta interna (HashRouter): `/#/semestre/5/teoria-critica/clase/18-agosto`
- Destino público de producción existente, **que no se modifica**: `https://kychan00.github.io/philosophia/`

## Configuración de la vista previa

`vercel.json` establece:
- Framework Vite; salida `dist`.
- Build `npm run build -- --base=/`, para resolver los assets desde la raíz de Vercel en vez de `/philosophia/`.
- `git.deploymentEnabled.main=false`: no automatizar la rama principal en Vercel.
- Cabecera `X-Robots-Tag: noindex, nofollow`: evitar indexación del entorno de revisión.

El valor de `base` en `vite.config.js` se mantiene intacto para **GitHub Pages**, que construye con `npm run build` en su propio workflow.

### Paso de autorización externa

En Vercel, crear o elegir un proyecto y vincular el repositorio **`kychan00/philosophia`** a través de **Add New → Project → Import Git Repository**; establecer Root Directory como la raíz del repositorio. Si ya existe un proyecto, comprobar que no tiene un dominio productivo de PHILOSOPHIA antes de vincularlo.

Para generar una vista previa del commit de revisión, escoger la rama en los deployments de Vercel (o efectuar un nuevo push al PR una vez vinculados Git y proyecto). **No usar “Promote to Production”**.

La URL de vista previa **no puede deducirse de un nombre de proyecto o rama**: registrar aquí sólo una URL obtenida de un deployment real y verificable.

## Verificaciones para aprobar únicamente el folio 001

- Abrir la URL verificada más `/#/semestre/5/teoria-critica/clase/18-agosto`.
- Confirmar encabezado común `Cuaderno de Cátedra Inmanente` y cubierta editorial propia `Antes de la teoría, una forma de estudiar`.
- Recorrer los 11 apartados, incluidos 30/30/40 y las lecturas.
- Usar índice y repaso editorial sin pérdida de ruta, sin saltos laterales, sin textos cortados.
- Revisar escritorio, Safari, iPhone e iPad, según dispositivos disponibles.
- Registrar observaciones y correcciones en el PR web #19.
- Aprobar **sólo clase 1** en Obsidian si la revisión humana es satisfactoria; mantener PR en draft para el resto.

## Verificación automática previa

- GitHub Actions **Validate PHILOSOPHIA**: https://github.com/kychan00/philosophia/actions/runs/40038124250 (**success**; SHA `e31bd168a8a73e65cf51c5bec834a85f27b4f83a`, anterior al ajuste de Vercel).
- Biblioteca: https://github.com/kychan00/philosophia/actions/runs/40038124246 (**success**, mismo SHA).
- Prueba funcional Chromium clase 1: `tests/critical-class18-browser-smoke.mjs` (cinco tamaños, navegación y tarjetas).
- El build en GitHub Actions **no sustituye la verificación del deployment de Vercel**.

## Pendientes

- [ ] Repositorio Git conectado al proyecto de Vercel.
- [ ] Preview real completado con su URL y SHA.
- [ ] Revisión visual humana y observaciones de la clase 1.
- [ ] Aprobación de folio 001.
- [ ] Pasar a folio 002 / 20 agosto.

El protocolo de publicación final se mantiene en `docs/flujo-multichat-y-despliegues.md` y el vault.
