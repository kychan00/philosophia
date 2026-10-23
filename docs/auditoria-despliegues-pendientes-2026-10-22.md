# Auditoría de despliegues y ramas históricas · 22 de octubre de 2026

## Situación verificada

- Rama de producción: `main`, SHA inicial de la auditoría `71bad8253447f42b006898da9ef6a2503455b607`.
- [GitHub Pages 39872265883](https://github.com/kychan00/philosophia/actions/runs/39872265883): `success`, desplegó ese mismo SHA después de fusionar el PR #13 (Bobbio).
- Los runs rojos anteriores, por ejemplo [39857765495](https://github.com/kychan00/philosophia/actions/runs/39857765495) y [39857399832](https://github.com/kychan00/philosophia/actions/runs/39857399832), son **históricos**. No son colas pendientes que puedan fusionarse: ejecutaron SHA anteriores en `main`, y los workflows posteriores desplegaron estados sucesores.
- Al iniciar esta auditoría: **ningún PR abierto** en `kychan00/philosophia` o `kychan00/philosophia-vault`; ninguna ejecución de Pages más reciente que el `success` de Bobbio entre los runs consultados.

## Ramas antiguas

Se enumeraron 30 ramas de trabajo aún presentes en el repositorio web además de `main`, de ciclos entre septiembre y octubre de 2026. La mera diferencia `ahead/behind` con `main` **no demuestra que falten commits en producción**, ya que varios PR previos se fusionaron con `squash`, dejando divergencia en las ramas de origen. Ejemplos: `feat/biblioteca-apa7-68-referencias`, `feat/biblioteca-cartografia-2d`, `feat/cafe-mercadotecnia-system-2d` y `fix/biblioteca-popper-falsabilidad-cartografia-20261021`.

Se cotejaron árboles de archivos con `main`: las ramas antiguas examinadas de Café Filosófico, Analítica 30-sep, Ontología 30-sep, cartografía, Cicerón, APA y Popper no aportan **rutas de archivo únicas** ausentes de `main`. Ello **no prueba igualdad de comportamiento o contenido** de cada versión; sus archivos compartidos difieren y no deben copiarse sin comparación editorial. La consulta de un árbol de una rama antigua de navegación de Café devolvió un 404 y su equivalencia exacta queda sin acreditar.

**Excepción detectada:** las ramas antiguas de Hartmann mantienen los workflows `.github/workflows/validate-hartmann-2d.yml` y `.github/workflows/validate-hartmann-expanded.yml`, hoy ausentes de `main`. No reactivarlos automáticamente: tienen que revisarse frente a la actual `quality.yml` para no duplicar o bloquear los tests existentes. Las páginas/componentes de Hartmann ya tienen rutas de archivo equivalentes en `main`.

**Decisión:** no fusionar ramas históricas ni restaurar workflows completos. No borrar ramas hasta una comprobación independiente de que ya no se necesitan.

## Diferencia real identificada: biblioteca Obsidian → web

Mediante inventario por rutas de **primer nivel** del vault, no por el número de `.md` recursivos:

| Elemento | Vault antes | Web antes | Acción |
| --- | ---: | ---: | --- |
| Archivos raíz en `04 - Obras` | 84 | 76 fichas públicas | No convertir cinco notas auxiliares de Hacker y Nava en obras bibliográficas |
| Obras bibliográficas independientes | 79 | 76 | Recuperar 3 |
| Fichas de autores canónicas | 98 | 94 | Completar Bloch, Bolzano, Boole y Cohen, y crear una ficha de Engels en ambos repositorios para la autoría compartida |

**Obras recuperadas:**
1. `Bloch - Sujeto-objeto`: FCE, segunda edición española, 1983; Ontología II, capítulo XIX, PDF pp. 380–387.
2. `Fromm - Marx y su concepto del hombre`: FCE, primera edición española, 1962; el fragmento asignado (PDF pp. 97–112) es **texto de Marx** publicado dentro del volumen de Fromm.
3. `Marx y Engels - La ideología alemana`: Akal, 2014; las once **Tesis sobre Feuerbach** del apéndice son de **Marx**, aunque el libro conjunto tiene dos autores.

El nuevo objetivo de catálogo tras la conciliación es **79 obras y 99 autores**. Las notas de lectura, transcripciones parciales y dosieres se conservan en el vault, pero no generan fichas bibliográficas duplicadas. Las fechas de tareas o de fuente no equivalen a lecturas terminadas.

## Protección de producción

- Cada edición se hace exclusivamente en `fix/biblioteca-reconciliacion-vault-20261022`, con PR y CI `validate` antes de fusionar.
- El vault tiene su rama gemela y sus MOC y referencias APA actualizados.
- **No equivale a publicación:** los datos de arriba son el diagnóstico previo a la nueva integración. El PR debe superar lint, test, build y navegador; solo después del merge debe comprobarse el nuevo run de Pages, su SHA y la ruta pública `#/biblioteca`.
- No se ejecutarán `git push --force` ni escrituras directas a `main`.

## Fuentes internas

- [Norma de multichat](flujo-multichat-y-despliegues.md).
- [Contrato de Biblioteca](library-governance.md).
- Vault: `04 - Obras/MOC - Biblioteca filosófica.md` y `08 - PHILOSOPHIA/Gobernanza/Biblioteca - Contrato de integridad.md`.
