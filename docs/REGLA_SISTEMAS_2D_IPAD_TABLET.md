# Regla obligatoria · PHILOSOPHIA 2D para iPad y tabletas

**Fuente normativa:** [Regla responsive obligatoria en Obsidian](https://github.com/kychan00/philosophia-vault/blob/main/90%20-%20Plantillas/Sistema%202D%20PHILOSOPHIA/Regla%20responsive%20obligatoria%20-%20iPad%20y%20tablets.md).

**Estado:** publicada como norma de calidad. No significa que todos los sistemas existentes, incluido Hacker, ya estén corregidos.

## Motivo verificado

Captura facilitada de **Hacker · Viena** el 14 de octubre de 2026: cabecera del canvas sobre leyenda/botón, mapa casi vacío visualmente, inspector excesivo en vertical, riel y textos incómodos. El CSS actual mantiene `minmax(0,1fr) 340px` a anchos cercanos a 1024px, `grid-template-rows:64px` y llega a imponer `1050px 330px` y `1380px` en mobile/fullscreen. La causa exacta del grafo aparentemente vacío no está demostrada.

## Contrato de aceptación

1. **iPad vertical**: canvas ancho completo; inspector bajo el canvas o alternable por paneles. No hay título/leyenda/fullscreen superpuestos.
2. **iPad horizontal**: dos columnas sólo si el mapa queda realmente legible y navegable; cambiar a apilado según ancho del contenedor.
3. **Split View / Stage Manager**: adaptación por ancho de contenedor y viewport real, no por detección de modelo.
4. **Sin overflow horizontal del documento** ni anchos globales forzados de 1380px; sólo rieles internos scrollables.
5. **Cabecera flexible** con altura automática, controles que envuelven y leyenda compactable.
6. **Mapa utilizable**: la ruta elegida presenta nodos relevantes visibles después de medir layout; resize/orientación reencuadran la ruta, sin resetear cámara por selección de nodo.
7. **Lectura**: contenido de guía, estudio, antes/después, folios y esquemas sin paneles amputados ni scroll oculto.
8. **Tacto**: objetivo 44×44 CSS px, texto principal cercano a 16px, controles legibles; no depender sólo de hover.
9. **Pantalla ampliada**: fallback CSS cuando Safari/iPadOS no dispone de fullscreen nativo, sin ancho forzado; overlays dentro del contenedor visible.
10. **Pruebas**: capturas y navegación a 744, 768, 820, 834, 1024, 1112, 1180, 1194 y 1366 CSS px, más 600/700/900px para Split View, vertical/horizontal, teclado, toque, resize y consola. Probar Safari iPadOS real cuando sea posible.

## Rechazar el despliegue como «iPad conforme» cuando

El título tapa controles, la ruta no muestra nodos útiles, el inspector ocupa el mapa, el documento desborda horizontalmente, un folio no abre, las etapas están desincronizadas, los objetivos táctiles son demasiado pequeños o la rotación pierde el estado.

**Importante:** superar `npm run build` o pruebas unitarias **no sustituye pruebas de navegador y dispositivo**. Consultar la norma de Obsidian para matriz, cautelas y checklist íntegros.

## Arquitectura común

- [Norma de Marx + Kant](./REGLA_SISTEMAS_2D_GUIA_ESTUDIO_ANTES_DESPUES.md)
- [Diseño editorial Hacker](./REGLA_SISTEMAS_2D_DISENO_EDITORIAL_HACKER.md)
- `src/components/philosophy/system2d/System2DTheme.css`
- `src/components/philosophy/system2d/SectionPedagogy.jsx`

**Filosofía de diseño:** contenido fiel a sus fuentes, arquitectura Marx, estudio por secciones Kant, lectura editorial Hacker y experiencia táctil robusta en iPad.


## 11 · Presupuesto de renderizado y supervivencia en Safari móvil · 25 de octubre de 2026

**Incidente de referencia:** Safari/iPhone mostró «Ocurrió un problema varias veces» al abrir directamente `#/tareas/teoria-critica/lukacs-cosificacion`. La captura acredita el aborto repetido de la página; no permite atribuir por sí sola una causa interna exacta de WebKit.

**Hallazgo de código transversal:** varios sistemas 2D históricos abrían con `route = 'all'`, entregaban al canvas nodos ocultos además de los visibles, ejecutaban `fitView` sobre el atlas completo y montaban `MiniMap` aun en viewport compacto. Ese patrón multiplica simultáneamente DOM, SVG, medición geométrica y composición.

### Regla obligatoria para grafos densos

En viewport compacto (referencia operativa actual: ≤850 CSS px):

1. **No iniciar en `all`** cuando existe una ruta temática más pequeña. Abrir la primera ruta documental válida.
2. **Filtrar antes de React Flow** los nodos y aristas marcados `hidden`; no basta confiar en que React Flow los oculte visualmente.
3. Activar **`onlyRenderVisibleElements`** en atlas densos.
4. **No montar `MiniMap` por defecto** en móvil. Si existe una acción explícita para mostrarlo, debe seguir desactivada en compacto cuando el grafo es pesado.
5. **No ejecutar `fitView` global sobre `all`** al cargar ni al pulsar «Sistema completo» en móvil. Conservar la cámara actual o encuadrar una ruta/subconjunto acotado.
6. La vista completa puede seguir disponible, pero debe ser **opt-in** y no convertir todos los nodos en simultáneamente visibles mediante un zoom extremo.
7. Guías que internamente usan `route='all'` son válidas sólo si su propio estado oculta/filtra el resto y mantiene como máximo el paso actual/siguiente o un subconjunto pequeño.
8. Un smoke Chromium verde **no certifica Safari/iOS**. La aceptación final de un crash reportado en Safari exige prueba física cuando sea posible.

### Invariante de regresión

Todo sistema 2D refactorizado debe poder abrirse a 390×844 sin:
- montar el atlas completo por defecto;
- minimapa automático;
- overflow global;
- solapes críticos;
- reset de cámara por selección;
- cierre/reload del proceso de página.

La prioridad es **supervivencia y lectura progresiva**, no mostrar el universo conceptual entero en el primer frame.
