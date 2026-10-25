# Flujo multichat y despliegues seguros de PHILOSOPHIA

Estado: norma operativa de colaboración. Aplicable a la web pública `kychan00/philosophia` y al vault privado `kychan00/philosophia-vault`.

## Propósito

Poder trabajar desde varias conversaciones en paralelo —biblioteca, clases, tareas y atlas 2D— **sin modificar `main` desde los chats, sin sobrescribir trabajo de otro chat y sin iniciar un deploy por cada cambio parcial**.

## Regla de ramas

- `main`: **producción**. Solo recibe PR aprobados. No se hace `push` o escritura directa desde chats.
- `release/AAAA-MM-DD-tema`: rama integradora **temporal** de un lote de publicaciones. Nunca hace deploy por sí sola.
- `feat/<area>-<tema>-<fecha>-<id>`, `fix/...`, `docs/...`: una rama **exclusiva por solicitud/chat**, basada en el `release/` vigente cuando haya lote; si no hay lote, basada en `main`.
- Cada rama se identifica por nombre **y SHA inicial**. Los cambios solo afectan sus rutas; **no** usar `git add .`, `git add -A`, `git push --force`, reset ni `checkout` destructivo en el árbol del usuario.
- Si varios agentes trabajan localmente, cada uno usa un **worktree separado**. No cambiar de rama en un mismo directorio usado por otro chat.
- Los nombres de rama no son una cerradura: antes de escribir, releer HEAD, comparar diffs, detectar solapamientos con PR abiertos y conservar el contenido ajeno.

## Flujo de una solicitud

1. **Leer** este protocolo, el vault, sus plantillas y los bugs. Inspeccionar PR y ramas activos en la zona afectada, así como el HEAD de la rama base. No duplicar obras, clases, rutas ni componentes.
2. **Crear** la rama dedicada. Registrar en la respuesta: nombre, rama base, alcance y archivos previstos.
3. **Editar y documentar** solo los archivos correspondientes. Para contenido académico, crear o actualizar notas en el vault privado en **su propia rama homóloga**, manteniendo separados texto fuente, explicación de clase y ampliación.
4. **Validar** tests de unidad, integridad de catálogo, lint, build y smoke responsive/2D cuando corresponda. La ausencia de pruebas no es éxito.
5. **Abrir PR**, preferentemente draft mientras esté incompleto. Objetivo: `release/...` para un lote; `main` en cambios autónomos. Enlazar PR gemelo del vault cuando corresponda.
6. **Esperar CI** `Validate PHILOSOPHIA (PR and manual) / validate` y revisar diffs. Si está rojo, corregir la rama; no eludir con un merge directo. Para cada PR que se haya quedado atrás respecto a la base, actualizarlo por **integración no destructiva** y repetir pruebas.
7. **Integrar PR de forma serial**, con `expected_head_sha` y tras verificar que sea fusionable. Si dos chats editan `tasks.js`, `libraryCatalog.js` o rutas compartidas, resolver explícitamente la combinación **antes** de fusionar, preservando ambas contribuciones.
8. **Cerrar el lote**: abrir PR `release/...` → `main`, volver a ejecutar la suite completa sobre la combinación final, cotejar todos los PR y notas del vault, y fusionar solo en verde. Un único merge a `main` inicia Pages.
9. **Verificar** el run de GitHub Pages, el commit servido y las rutas públicas afectadas (y móvil/tableta si aplica). Solo después declarar «publicado». Registrar SHAs y estados en el vault y cerrar los PR/ramas ya integrados cuando resulte seguro.

## Lotes y concurrencia

- Para **tres chats en paralelo**: crear `release/2026-10-22-academico`, luego `feat/biblioteca-freud-...`, `feat/clase-etica-...` y `feat/glock-2d-...`; los tres PR apuntan a esa release. La release pasa una sola vez a `main`.
- Ningún chat fusiona una release a `main` por su cuenta: el usuario lo solicita al terminar el lote, o existe una autorización explícita para publicar ese conjunto.
- Al preparar una release, **congelar su alcance**: una tarea incompleta queda en su rama y no entra al lote. El resto puede publicarse de forma segura.
- `quality.yml` se ejecuta en PR hacia `main` **o** `release/**`; `deploy.yml` se ejecuta exclusivamente por `push` a `main` (o invocación manual, que no debe utilizarse para saltar las verificaciones).
- La concurrencia del deploy impide solapamientos, pero **no fusiona código, no ordena PR y no sustituye el control de calidad**.

## Correspondencia PHILOSOPHIA + Obsidian

- Cada solicitud académica modifica **ambos repositorios** con cambios limitados a la tarea, mediante ramas separadas, PRs y commits separados.
- El vault privado es la fuente documental; la web es la representación publicada. Enlazar una nota o una obra no significa que la ruta esté publicada.
- Al integrar: sincronizar primero los contenidos/PRs que corresponden entre sí; registrar cualquier diferencia temporal como `pendiente-de-deploy`. Nunca atribuir a Pages un SHA no comprobado.
- Nunca incluir notas privadas, archivos locales personales o material sensible dentro de los commits del repositorio público.

## Regla visual obligatoria de imágenes para clases

**Referencia de obligado cumplimiento:** [Imágenes de uso seguro y trazabilidad en clases](./REGLA_IMAGENES_LIBRES_Y_TRAZABILIDAD_CLASES.md), y su gemela privada `90 - Plantillas/Regla global - Imágenes de uso seguro en clases.md`.

- Toda **clase nueva o individualmente rediseñada** incorpora **al menos una imagen pedagógica** con derechos de uso verificados, texto alternativo y pie/explicación; no basta una decoración genérica.
- Antes de incorporar imágenes externas se exige licencia/permiso de publicación verificable y crédito (autor, fuente, licencia, cambios, vínculo), o una ilustración propia cuando no existe alternativa segura. **No** tratar «gratis» o «en internet» como «dominio público».
- La nota correspondiente de Obsidian registra procedencia, autorización, relación con el contenido y limitaciones documentales. Se revisan responsive, carga, créditos y esquemas en los smoke de cada clase.
- Las páginas históricas aún no revisadas quedan en estado **pendiente-de-cotejo-de-imágenes**; no afirmar falsamente que todas están adaptadas.
- Si falta imagen segura o licencia trazable, **no dar la clase por terminada ni publicarla como conforme a la norma**.

## Barrera obligatoria antes del merge a producción

- [ ] Cambios delimitados, sin archivos ajenos ni conflictos con otro chat.
- [ ] PR abierto con base actualizada y código revisado.
- [ ] Suite de calidad completa verde **sobre la integración final** (no solamente sobre cada feature aislada).
- [ ] Notas Obsidian y MOC correspondientes enlazados.
- [ ] Manifest de lote (PRs, rutas, SHAs, pruebas, exclusiones) en la descripción del PR final.
- [ ] Tras la fusión, GitHub Pages con resultado `success` y comprobación funcional de la ruta; si no, queda en estado `fusionado-no-publicado`.

## Protección técnica de `main`

Este documento y los tests **no bloquean por sí mismos los pushes directos**. Configurar en GitHub **Settings → Rules → Rulesets**, un ruleset activo para `main`:

1. `Require a pull request before merging`.
2. `Require status checks to pass` → seleccionar el check observado realmente de `Validate PHILOSOPHIA (PR and manual) / validate`, tras su primera ejecución.
3. `Require branches to be up to date before merging` (especialmente si hay muchos chats).
4. `Block force pushes` y `Require conversation resolution before merging`.
5. Sin bypass cotidiano para la cuenta o el agente. Confirmar que el ruleset está **Active** y probar que rechaza escritura directa a `main`.

La configuración de Rulesets debe aplicarse en GitHub por una cuenta con permisos administrativos; **estar escrita aquí no implica que ya esté activada**. No habilitar un check obligatorio si la suite de base está roja: corregir antes, sin quitar calidad.

## Plantilla de comunicación para cada chat

Al iniciar: «Rama: …; base: …; alcance: …; vault: …; PR previsto: …». Al finalizar: «PR: …; CI: …; web commit: …; vault commit: …; Pages: pendiente / éxito comprobado; archivos y rutas publicados: …». Si no hay acceso o algo falla, declararlo sin asumir éxito.

## Regla de salida

Un chat **nunca** debe decir «ya quedó en producción» porque creó un archivo, un commit, abrió un PR o pasó un build local. La publicación requiere merge a `main`, run de Pages exitoso, SHA y contenido realmente servido.
