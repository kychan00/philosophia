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

## Adopción · sesión 04 / 27 de agosto

- Página: `src/pages/CriticalTheoryClass27Aug.jsx`, con **10 apartados** conservados.
- Datos: `critical27Themes.js`, `critical27Sections.js` y `critical27Image.js`.
- Componentes: `Critical27ThematicAtlas` y `Critical27SectionStudy`, con estilos encapsulados.
- Imagen: `27-agosto-no-identidad-razon.svg`, original del proyecto; representa concepto/objeto/resto y fines/medios.
- Fronteras: Hegel según lectura de clase; no-identidad ≠ rechazo de conceptos; razón instrumental ≠ técnica en sí; Ilustración ≠ causalidad necesaria hacia barbarie.
- Se preservan selector de cinco conceptos, no-identidad, Hegel/Adorno, fines/medios, actualización cultural y tarea a Hegel.
- Tests: `critical-class27-study.test.mjs` y `critical-class27-browser-smoke.mjs`.
- La sesión del 1 de septiembre permanece fuera del alcance hasta aprobación del folio 004.

## Adopción · sesión 05 / 1 de septiembre

- Página: `src/pages/CriticalTheoryClass01Sep.jsx`, con **11 apartados** conservados.
- Datos: `critical01SepThemes.js`, `critical01SepSections.js` y `critical01SepImage.js`.
- Componentes: `Critical01SepThematicAtlas` y `Critical01SepSectionStudy`, con estilos encapsulados.
- Imagen: `01-septiembre-devenir-verdad.svg`, original del proyecto; muestra devenir y verdad como proceso.
- Fronteras: Fromm → Hegel = puente temático; desobediencia ≠ negatividad dialéctica; Kant/Hegel = encuadre de clase; dialéctica ≠ fórmula rígida «tesis–antítesis–síntesis».
- Se preservan ocho controles históricos de la página y la tarea de relectura del prólogo.
- Tests: `critical-class01sep-study.test.mjs` y `critical-class01sep-browser-smoke.mjs`.
- La sesión del 3 de septiembre permanece fuera del alcance hasta aprobación del folio 005.

## Adopción · sesión 06 / 3 de septiembre

- Página: `src/pages/CriticalTheoryClass03Sep.jsx`, con **12 apartados** conservados.
- Datos: `critical03SepThemes.js`, `critical03SepSections.js` y `critical03SepImage.js`.
- Componentes: `Critical03SepThematicAtlas` y `Critical03SepSectionStudy`, con estilos encapsulados.
- Imagen: `03-septiembre-experiencia-saber.svg`, original del proyecto; muestra figura → experiencia → negatividad → nueva figura y parte/totalidad.
- Fronteras: saber absoluto ≠ omnisciencia; experiencia ≠ vivencia psicológica; Morin = comparación pedagógica; Kant/Hegel = encuadre de clase; en sí/para sí/en sí y para sí ≠ «tesis–antítesis–síntesis».
- Se preservan cuatro controles históricos y la tarea de revisión del índice de la `Fenomenología`.
- Tests: `critical-class03sep-study.test.mjs` y `critical-class03sep-browser-smoke.mjs`.
- La sesión del 10 de septiembre permanece fuera del alcance hasta aprobación del folio 006.

## Adopción · sesión 07 / 10 de septiembre

- Página: `src/pages/CriticalTheoryClass10Sep.jsx`, con **13 apartados** conservados.
- Datos: `critical10SepThemes.js`, `critical10SepSections.js` y `critical10SepImage.js`.
- Componentes: `Critical10SepThematicAtlas` y `Critical10SepSectionStudy`, con estilos encapsulados.
- Imagen: `10-septiembre-trabajo-retorno.svg`, original del proyecto; muestra trabajo → objetivación → mundo producido → retorno o circuito interrumpido.
- Fronteras: trabajo ≠ trabajo enajenado; objetivación ≠ enajenación; modos de producción ≠ determinismo histórico mecánico; ideología ≠ mentira; retorno ≠ devolución literal.
- Se preservan el selector de modos de producción y el selector objetivación/enajenación, además de la tarea de continuar aproximadamente 15 páginas sin entrega escrita confirmada.
- Tests: `critical-class10sep-study.test.mjs` y `critical-class10sep-browser-smoke.mjs`.
- La sesión del 17 de septiembre permanece fuera del alcance hasta aprobación del folio 007.

## Adopción · sesión 08 / 17 de septiembre

- Página dedicada nueva: `src/pages/CriticalTheoryClass17Sep.jsx`; reemplaza la vista genérica `DialecticalRestoredClass` para esta ruta sin cambiar el estado documental `Parcial`.
- Datos: `critical17SepThemes.js`, `critical17SepSections.js` y `critical17SepImage.js`.
- Componentes: `Critical17SepThematicAtlas` y `Critical17SepSectionStudy`.
- Fuente: ejes recuperados y estructura de cuatro momentos; **no** desarrollo verbal íntegro.
- Imagen: `17-septiembre-cuatro-momentos.svg`, original; producto, actividad, ser genérico y otros se muestran como constelación articulada, no secuencia causal.
- Cronología: explicaciones detalladas del 22 y 24 de septiembre se etiquetan como continuidad posterior y no se retroproyectan.
- Tests: `critical-class17sep-study.test.mjs` y `critical-class17sep-browser-smoke.mjs`.
- La sesión del 22 de septiembre permanece fuera del alcance de esta iteración.

## Adopción · sesión 09 / 22 de septiembre

- Página dedicada: `src/pages/CriticalTheoryClass22Sep.jsx`; reemplaza la vista genérica `DialecticalRestoredClass` para esta ruta sin ocultar el estado `Parcial`.
- Datos: `critical22SepThemes.js`, `critical22SepSections.js` y `critical22SepImage.js`.
- Componentes: `Critical22SepThematicAtlas` y `Critical22SepSectionStudy`.
- Fuente: núcleo y ejes recuperados; no desarrollo verbal íntegro.
- Atlas: desnaturalización; materialidad/conciencia; trabajo reproductivo; división sexual del trabajo; totalidad social/enajenación.
- Imagen: `22-septiembre-totalidad-reproduccion.svg`, original; líneas = articulación y mediación, no identidad ni determinismo.
- Cronología: ser genérico, otros y el desarrollo fino de la actividad permanecen abiertos o fechados el 24 de septiembre.
- Tests: `critical-class22sep-study.test.mjs` y `critical-class22sep-browser-smoke.mjs`.
- La sesión del 24 de septiembre permanece fuera del alcance de esta iteración.

## Adopción · sesión 10 / 24 de septiembre

- Página dedicada: `src/pages/CriticalTheoryClass24Sep.jsx`; reemplaza la vista genérica `DialecticalRestoredClass` para esta ruta.
- Datos: `critical24SepThemes.js`, `critical24SepSections.js`, `critical24SepSourceSections.js` y `critical24SepImage.js`.
- Componentes: `Critical24SepThematicAtlas` y `Critical24SepSectionStudy`.
- Fuente visible: 23 apartados conservados antes de la capa pedagógica.
- Atlas: actividad/mando; ser genérico/otros; ideología/conciencia; propiedad/mercancía; mercancía/valor.
- Imagen: `24-septiembre-enajenacion-mercancia.svg`, original; las flechas indican recorrido de clase, no identidad entre *Manuscritos* y *El capital*.
- Límites: Levinas y distancia tecnológica = ampliaciones docentes; IA = pregunta abierta; objeto útil ≠ mercancía; valor de uso ≠ valor de cambio; valor ≠ precio; teoría del valor no se completa más allá de lo documentado.
- Tests: `critical-class24sep-study.test.mjs` y `critical-class24sep-browser-smoke.mjs`.
- Ninguna sesión posterior se considera adaptada por esta iteración.

## Revisión de otras sesiones

Aplicar únicamente cuando se trabaje ese folio, con cotejo individual de las notas del vault, incluyendo `05 - Clases` y la ficha de la materia. Las trece clases no se consideran refactorizadas por añadir esta regla.
