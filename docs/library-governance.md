# Biblioteca PHILOSOPHIA — contrato de gobernanza editorial y técnica

**Repositorios:** `kychan00/philosophia-vault` (canon académico privado) y `kychan00/philosophia` (proyección pública). Mantenerlos coherentes es condición de cierre, no actividad opcional.

## Fuente de verdad

- **Fichas:** `04 - Obras/*.md` y `02 - Autores/*.md` en Obsidian son las fuentes canónicas de existencia e identidad. No crear entradas web sin una ficha o una procedencia documentada.
- **Relaciones:** `05 - Clases/`, `06 - Tareas/`, bibliografía curricular, recomendaciones y dosieres documentan **tipos de relación distintos**.
- **Salida pública:** `src/data/libraryCatalog.js` para catálogo y autoría, `src/data/libraryTimelines.js` para menciones en clases, `src/data/libraryAcademicConnections.js` para tareas y procedencias.
- **Identidad estable:** no inferir autoría por dividir apellidos compuestos. Actualizar `libraryAuthorAliases` en `src/data/libraryCatalogUtils.js` al hallar firmas colectivas, abreviadas o nombres compuestos. Preferir en el futuro IDs canónicos separados del título legible.

## Semántica y fidelidad

| Relación | Puede afirmarse | No puede afirmarse automáticamente |
| --- | --- | --- |
| Ficha bibliográfica | Obra identificada en el archivo | Ejemplar poseído o texto leído |
| Programa / consulta | Obra prevista, recomendada o de apoyo | Trabajo realizado o lectura completa |
| Clase | Nombre/título identificado en la nota de la fecha | Cita textual ni lectura del libro entero |
| Tarea / reporte | Trabajo asociado según nota canónica | Entrega o calificación si no consta |
| Lectura parcial | Tramo verificado de una edición | Finalización de la obra |
| Posesión | Sólo si se acreditó explícitamente | Acceso por enlace ≠ propiedad |

**Nunca usar el evento de un autor para declarar una lectura de alguna de sus obras.** Evitar duplicados entre menciones y tareas; cada evento debe conservar el tipo, la fecha y el alcance de la evidencia.

## Flujo obligatorio al añadir una clase, autor, obra, trabajo o lectura

1. Consultar el MOC del vault, las fichas, reglas, plantilla de biblioteca y bugs existentes. Buscar duplicados y alias.
2. Editar la nota canónica correspondiente en Obsidian y actualizar enlaces a materias, autores, obras, tareas, conceptos y MOCs. No atribuir a la clase una interpretación editorial.
3. Actualizar únicamente los datos públicos pertinentes. Si existe ruta en `src/App.jsx`, enlazarla; si no existe, guardar `url: null` y contexto sin enlaces inventados.
4. Exigir que **cada obra tenga al menos una autoría válida y una procedencia/actividad**. Que **cada autor tenga una obra o una relación de estudio**. La procedencia bibliográfica del programa **sí cuenta como relación**, sin fabricar una fecha.
5. Modificar las pruebas con una nueva incorporación, pero **no dejar conteos fijos en la prueba del navegador**: importar los arreglos del catálogo.
6. Crear commit exclusivo por repositorio. Preferir PR web con `library-integrity` aprobado. No sustituir la rama principal con fuerza ni mezclar cambios ajenos.
7. Comprobar `node --test ...`, ESLint, `npm run build`, navegador en móvil y tableta, y la ejecución **real** de GitHub Pages sobre el SHA desplegado.
8. Registrar en el vault URL, SHA, pruebas, fecha y pendientes. La prueba en Chrome emulado no certifica Safari ni el iPad físico.

## Política de fallo

- No hacer deploy si un ID apunta a un autor inexistente, si falta trazabilidad en una ficha o si una ruta pública no existe.
- No cambiar la cifra esperada del catálogo simplemente para silenciar un test. Reconciliar primero con los registros canónicos.
- Una actualización académica del vault puede anticipar a la web, pero **queda como pendiente verificable**; no presentarla como publicada.
- Mantener pública únicamente la metadata permitida: títulos, fechas, área, descripción editorial y enlaces publicados; no copiar texto completo ni rutas personales del vault.
- Documentar regresiones en `08 - PHILOSOPHIA/Bugs/` con causa, prueba y corrección. Mantener separados los commits de web y vault.

## Límites del control automático

Los tests públicos verifican consistencia **dentro del snapshot web**; no disponen del vault privado en CI. La paridad exacta 63/86 contra el vault vigente se verifica mediante una auditoría cruzada al publicar. Las pruebas web no acreditan haber leído textos de origen ni cada referencia oral.

## APA 7 por obra (implementado como referencia consultable)

- Cada una de las 63 obras del catálogo tiene una entrada exacta en `src/data/libraryApaMetadata.js`, revisada contra la ficha académica (autor, título, género documental y campos constatados).
- `src/data/libraryApa.js` genera referencias APA 7: iniciales, coautoría, títulos en cursivas cuando corresponden, capítulos en libros editados, traductores, obras sin fecha `s. f.`, manuscritos no publicados y URL si ya está registrada.
- **Nunca** usar la fecha de registro de Obsidian, de una tarea o de un archivo ePUB como año de edición. Originales antiguos no se convierten automáticamente en una fecha de la edición consultada.
- Una referencia sin fuente contenedora, año o editorial debe mostrar **«Referencia provisional»** y los campos pendientes. No se presenta como APA completo.
- La copia ofrece HTML rico con cursivas y sangría francesa cuando el navegador lo permite, con respaldo de texto simple; los datos siguen siendo seleccionables.
- Antes de registrar una obra nueva, actualizar los metadatos APA y exigir que las pruebas cubran exactamente todos los IDs. Al verificar nuevos datos, documentar la procedencia en el vault privado y distinguirla de inferencias.
