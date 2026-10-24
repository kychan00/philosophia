# Regla editorial de Teoría Crítica · Doble capa pedagógica por sesión

**Estado:** aplicación progresiva, obligatoria para cada clase individualmente rediseñada.  
**Correspondencia privada:** `philosophia-vault/90 - Plantillas/Teoría Crítica - Doble capa pedagógica por sesión.md`.  
**Normas superiores:** `docs/REGLA_IMAGENES_LIBRES_Y_TRAZABILIDAD_CLASES.md`, reglas 2D y fidelidad radical a las fuentes.

## Objetivo

La ficha panorámica de una sesión **no sustituye** la explicación de sus apartados. Cada sesión de Teoría Crítica tendrá dos escalas complementarias:

1. **Atlas temático:** problemas centrales, conexiones justificadas, perspectiva del conjunto y recuperación de conceptos.
2. **Desarrollo por apartados:** cada apartado documentado se convierte en una unidad de estudio, conservando el contenido anterior y añadiendo explicación, figura y guía.

El número y la estructura de apartados provienen de la clase realmente documentada: **no forzar 11 apartados en clases futuras** ni inventar temas para simetría. Para el folio 001 existen once.

## Modelo didáctico por apartado

- Pregunta o problema rector **editorial**, sustentado en el contenido del apartado.
- Tesis/idea que conviene comprender y desarrollo que explica por qué.
- Figura informativa original con relaciones tipificadas: **aspectos paralelos** frente a **ruta de lectura**; no usar flechas causales salvo que la fuente las justifique.
- Guía visible mediante `details`: **qué representa, cómo leerlo, por qué está aquí y qué debe quedar claro**.
- Bloque siempre legible **«En palabras simples»**, sin falsear la complejidad.
- Contraste breve cuando permite aclarar una distinción, sin presentar posiciones inventadas como tesis de autor.
- Pregunta de recuperación y orientación, **identificadas como editoriales, no examen oficial**.
- Nota de procedencia de la fuente y continuidad navegable entre apartados sin cambiar `HashRouter`.
- Integración con figura original o imagen de uso seguro y atribución conforme a la regla de imágenes.

**No impone bloques vacíos**: si un apartado no permite cierto contraste o secuencia, marcar límite documental y elegir figura de aspectos paralelos, esquema autónomo o ausencia justificada. La fidelidad tiene prioridad sobre el diseño.

## Implementación piloto · primera clase (18 de agosto)

- 11 apartados originales en `src/pages/CriticalTheoryClass18Aug.jsx`, **sin reemplazar su desarrollo**.
- Datos de las 11 explicaciones en `src/data/critical18Sections.js`.
- Componente reusable: `src/components/critical/Critical18SectionStudy.jsx` y estilos CSS exclusivos.
- Atlas panorámico previo, figura original de tres planos y repaso global permanecen.
- `tests/critical-class18-section-study.test.mjs` comprueba integridad de apartados, fuentes, guías y mapas; `tests/critical-class18-browser-smoke.mjs` comprueba las 11 fichas en cinco tamaños y el comportamiento de las guías.
- Revisión visual y aprobación del estudiante ocurren **en Preview**; no se considera publicado en GitHub Pages antes de merge, Actions verde y SHA desplegado comprobado.

## Adopción · sesión 02 / 20 de agosto

- Nota fuente: `05 - Clases/Teoría Crítica/2026-08-20 - Teoría Crítica - Genealogía de la crítica.md`.
- Página: `src/pages/CriticalTheoryClass20Aug.jsx`, con 11 apartados conservados, atlas de 5 problemas y 11 unidades internas de estudio.
- Datos: `src/data/critical20Themes.js` y `src/data/critical20Sections.js`.
- Componentes: `Critical20ThematicAtlas` y `Critical20SectionStudy`, con CSS encapsulado.
- Imagen original: `public/images/teoria-critica/20-agosto-constelacion.svg`, registrada en `criticalTheoryImages.js`.
- Tests: `critical-class20-study.test.mjs` y `critical-class20-browser-smoke.mjs`.
- Frontera: genealogía Hegel–Marx–Lukács–Freud = constelación pedagógica, no filiación causal automática.

## Adopción · sesión 03 / 25 de agosto

- Página: `src/pages/CriticalTheoryClass25Aug.jsx`, con **10 apartados** conservados; el estándar se adapta a la fuente y no fuerza once.
- Datos: `critical25Themes.js`, `critical25Sections.js` y `critical25Image.js`.
- Componentes: `Critical25ThematicAtlas` y `Critical25SectionStudy`, con estilos encapsulados.
- Imagen: `25-agosto-exilio-totalidad.svg`, original del proyecto; la ruta de exilio es un diagrama de estudio, no cartografía a escala.
- Se preservan controles históricos de conciencia, exilio, generaciones, totalidad y astrología, además de la tarea vinculada.
- Tests: `critical-class25-study.test.mjs` y `critical-class25-browser-smoke.mjs`.
- La sesión del 27 de agosto permanece fuera del alcance hasta aprobación del folio 003.

## Revisión de otras sesiones

Aplicar únicamente cuando se trabaje ese folio, con cotejo individual de las notas del vault, incluyendo `05 - Clases` y la ficha de la materia. Las trece clases no se consideran refactorizadas por añadir esta regla.
