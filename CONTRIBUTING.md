# Colaborar en PHILOSOPHIA

Este repositorio usa **una rama por tarea y publicación coordinada por pull request**.

Consulte [Flujo multichat y despliegues seguros](docs/flujo-multichat-y-despliegues.md) antes de modificar contenido, rutas, pruebas o workflows.

## Contrato de colaboración

- Cada tarea se desarrolla en su propia rama `feat/*`, `fix/*` o `docs/*` con nombre único. No escribir directamente en `main`.
- Si se agrupan varios chats en un lote, abrir PR hacia una rama temporal `release/*`; al final, integrar mediante **un solo PR de release a main**.
- PRs autónomos pueden dirigirse a `main`. Toda integración necesita revisión de diffs, rama actualizada y el check `validate` verde.
- La documentación académica correspondiente debe actualizarse en el vault privado, en rama propia y con commit/PR enlazado. Nunca copiar el contenido privado completo a este repositorio.
- Verificar límites editoriales, la fuente y los bugs 2D antes de cambiar nodos. Evitar duplicados en biblioteca, clases, tareas y MOCs.
- Con varios trabajos simultáneos, inspeccionar archivos compartidos como `src/data/tasks.js`, catálogos, rutas y estilos. Los solapamientos se resuelven explícitamente en PR; no sobrescribir sin comparar.
- No usar `git add .`, `git add -A`, `git push --force` ni sobrescribir cambios locales de otros.
- El despliegue real lo ejecuta solo `main` mediante `deploy.yml`. No afirmar «publicado» hasta comprobar Actions, el commit y la ruta pública.

**Importante:** el procedimiento escrito no reemplaza un ruleset de GitHub que prohíba pushes directos a `main`. El dueño debe activarlo en Settings → Rules → Rulesets, con PR y check requerido.
