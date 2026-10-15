# Identidad cromática de Hacker para nodos PHILOSOPHIA 2D

**Estado:** patrón adoptado en el estándar; **primer piloto realizado en Marx**. La migración completa del catálogo permanece pendiente.

**Referente:** [Hacker · Filosofía Analítica](https://kychan00.github.io/philosophia/#/semestre/5/filosofia-analitica/reporte/hacker).

## Tres sistemas complementarios

- **Marx:** arquitectura React Flow, tipo de nodo, inspector, cámara, folio y esquema.
- **Kant:** guía, modo estudio y antes → desarrollo → después por sección.
- **Hacker:** distinción de *familias temáticas* por acentos de nodo, composición editorial, marcos de selección e insignias de procedencia.

## Fuente única de los colores

Los acentos visuales de Hacker se incorporaron a:

- `src/components/philosophy/system2d/System2DTheme.css` como `--ph2d-topic-moss`, `gold`, `blue`, `rust`, `ochre`, `violet`, `sage`, `bronze`, `plum` y `class`.
- `src/components/philosophy/system2d/system2dTheme.js` como `SYSTEM_2D_THEME.nodeTopics`.

**No copiar hexadecimales ni redefinir un objeto de colores dentro de cada página.**

| Tono | HEX | Papel |
| --- | --- | --- |
| Musgo | `#59745c` | Familia temática |
| Dorado | `#c99532` | Familia / selección interactiva |
| Azul | `#49687d` | Familia temática |
| Terracota | `#9b4b38` | Familia temática |
| Ocre | `#9a702e` | Familia temática |
| Violeta | `#6f6d85` | Familia temática |
| Salvia | `#617d55` | Familia temática |
| Bronce | `#8b633e` | Familia temática |
| Ciruela | `#6b5a78` | Familia temática |
| Clase | `#d7b568` | Insignia sólo con procedencia documentada |

## Separar tres cosas diferentes

1. **Tono de familia:** permanece visible en nodo, franja e insignia aunque no haya selección.
2. **Estado de interacción:** marco dorado para seleccionado; foco verde para guía; blur para nodos ajenos, excepto selección.
3. **Significado y procedencia documental:** el color por sí solo no demuestra una tesis ni autoriza decir «visto en clase». Conservar etiquetas textuales.

**Regla de accesibilidad:** texto en tinta contrastada sobre papel, evitar blanco sobre dorado claro sin prueba, y comprobar legibilidad en escala de grises y iPad.

## Piloto Marx

`src/components/marx/MarxCommodityNode.jsx` asigna el tono por fase **explícitamente** sin alterar los datos de Marx. Se utiliza `data-topic-tone` y `--ph2d-node-accent`; `MarxCommodityValueSystem.css` presenta franja superior, superficie suavemente teñida y código con borde cromático. La selección toma el marco dorado de Hacker y el estado guiado conserva verde.

Las fases concretas y pruebas de aceptación se detallan en [la norma de Obsidian](https://github.com/kychan00/philosophia-vault/blob/main/90%20-%20Plantillas/Sistema%202D%20PHILOSOPHIA/Regla%20cromatica%20obligatoria%20-%20Nodos%20inspirados%20en%20Hacker.md).

## Aceptación

- Tests en `tests/hacker-palette-2d.test.mjs` junto con `npm run test:2d`.
- Build, navegación de rutas, nodos críticos, micro-nodos, selección/guía, contraste y viewport de iPad.
- No certificar los demás sistemas hasta aplicar explícitamente los tokens y verificar sus estados.

Este cambio no reinterpreta ni colorea según supuestas jerarquías doctrinales los argumentos.
