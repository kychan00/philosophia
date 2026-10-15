# Regla editorial de sistemas 2D · Inspiración Hacker

**Estado:** norma aplicable a todo sistema 2D nuevo o refactorizado. **Fuente normativa:** [Vault PHILOSOPHIA](https://github.com/kychan00/philosophia-vault/blob/main/90%20-%20Plantillas/Sistema%202D%20PHILOSOPHIA/Regla%20editorial%20obligatoria%20-%20Diseno%20y%20navegacion%20Hacker.md).

**Referencia visible:** https://kychan00.github.io/philosophia/#/semestre/5/filosofia-analitica/reporte/hacker

## Jerarquía de referencias

- **Marx:** cuerpo React Flow, nodos, color mediante `System2DTheme`, blur, esquemas, folios, fullscreen y navegación.
- **Kant:** secciones con guía, modo estudio y antecedentes → desarrollo → consecuencias.
- **Hacker:** diseño editorial, navegación temática, lectura por capas y trazabilidad visual.
- **Fuentes:** determinan el contenido; ningún estilo autoriza inventar hechos, relaciones o citas.

## Patrones visuales obligatorios cuando hay contenido que los respalde

1. **Hero académico:** autor/obra, título, pregunta o tesis rectora, alcance textual y acceso a la lectura.
2. **Composición de folio:** título serif, cuerpo legible y metadatos en sans/mono; papel marfil y bordes sobrios usando los tokens `--ph2d-*`.
3. **Riel temático numerado:** por sección, con pasos derivados del dataset, acción de iniciar guía, selección sincronizada, navegación por teclado y scroll móvil.
4. **Inspector por capas:** resumen; explicación; función en el argumento; fuente original expandible; comentario o reconstrucción; aportes de clase diferenciados; ejemplo; dependencias; consecuencias; conceptos; esquema.
5. **Señales de procedencia:** clase, obra primaria, comentarista o síntesis editorial con texto accesible además del color.
6. **Orientación:** estado actual / siguiente / apoyos visibles; historial de visitas y arquitectura final de lectura cuando sea útil.
7. **Consistencia:** contadores del dataset, no del texto estático; no duplicar CSS ni estados independientes del inspector/guía.

## Implementación y prohibiciones

- Conservar `src/pages/MarxCommodityValueSystem.jsx` y su shell como patrón.
- Reutilizar `src/components/philosophy/system2d/System2DTheme.css` y `system2dTheme.js`.
- Conservar y ampliar `src/components/philosophy/system2d/SectionPedagogy.jsx` sin crear un segundo índice de guía.
- Usar `AnimatedConceptSchema` para esquemas filosóficamente sustentados.
- **No copiar** el CSS completo de Hacker, sus hexadecimales `--h-*`, tamaños de nodo pre-canónicos ni sus cifras hardcodeadas.
- Probar móvil, escritorio, fullscreen, teclado, selección, riel de ruta, cita/folio y fuente antes de declarar una migración conforme.

Esta regla documenta un **patrón de diseño**, no certifica que el propio Hacker haya sido migrado al canon Marx.

## Referencias

- [Contrato 2D del vault](https://github.com/kychan00/philosophia-vault/blob/main/90%20-%20Plantillas/Sistema%202D%20PHILOSOPHIA/Contrato%20del%20sistema%202D.md)
- [Regla pedagógica de Kant](./REGLA_SISTEMAS_2D_GUIA_ESTUDIO_ANTES_DESPUES.md)
- [Página Hacker](https://kychan00.github.io/philosophia/#/semestre/5/filosofia-analitica/reporte/hacker)
