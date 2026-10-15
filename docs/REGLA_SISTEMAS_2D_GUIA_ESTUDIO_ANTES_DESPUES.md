# Regla pedagógica PHILOSOPHIA 2D

**Norma canónica:** `philosophia-vault/90 - Plantillas/Sistema 2D PHILOSOPHIA/Regla pedagogica obligatoria - Guia, modo estudio y antes-despues por seccion.md`.

## Guía, modo estudio y antes/después por sección

> [!important] Obligatorio para todo sistema 2D nuevo o refactorizado
> **Cada sección, fase, mapa o ruta temática debe contar con su propia guía de aprendizaje, su modo estudio y una explicación explícita de lo que la precede, lo que desarrolla y lo que habilita después.** La navegación global no sustituye la navegación interna de las secciones.

## 1 · Dos referencias, responsabilidades distintas

- **Cuerpo de Marx:** fuente canónica de arquitectura visual, nodo, paleta compartida, blur, React Flow, inspector, folio, relaciones, esquemas, fullscreen, navegación y cámara.
- **Analítica trascendental de Kant:** modelo pedagógico de organización en fases y mapas, guía interactiva, modo estudio con preguntas y retroalimentación, y orientación entre el punto de partida y los pasos siguientes.
- **Regla de fidelidad:** ninguna referencia de interfaz autoriza alterar, completar o inventar tesis filosóficas, citas, preguntas, dependencias o relaciones para cumplir una estructura.

**Modelo público estudiado:** https://kychan00.github.io/philosophia/#/tareas/ontologia-ii/kant-analitica-trascendental

**Precisión técnica:** en el código de Kant consultado el 14 de octubre de 2026, `GUIDE_STEPS` y `STUDY_QUESTIONS` son secuencias globales que enlazan diferentes mapas mediante `mode` y `nodeId`. Esta nueva regla **eleva el requisito**: exige recorridos y evaluaciones *identificables por sección*, aunque su implementación pueda reutilizar colecciones globales filtradas por ID de sección. No implica que la implementación actual de Kant ya cumpla exhaustivamente el nuevo contrato.

## 2 · Cada sección es una unidad didáctica completa

Para **cada** sección `sectionId` del sistema se deben definir, a partir del material disponible:

1. **Problema o pregunta rectora:** qué intenta comprender la sección.
2. **Antes / presupuesto:** el punto previo, concepto o dificultad desde el cual se comprende su contenido.
3. **Desarrollo:** tesis, conceptos, pasos, objeciones, mediaciones y esquemas realmente sustentados por la fuente.
4. **Después / continuidad:** resultado, dificultad abierta o sección a la que conduce.
5. **Guía propia:** pasos ordenados y accesibles, cada uno asociado a un nodo y a una explicación pedagógica.
6. **Modo estudio propio:** preguntas pertinentes a la sección, con posibilidad de responder, recibir retroalimentación y volver al nodo o fuente.
7. **Referencia verificable:** fuente, localizador y tipo de capa (texto, comentario, clase o reconstrucción editorial).

La sección debe poder abrirse directamente desde el selector de fases/rutas y conservar una navegación comprensible sin que sea obligatorio estudiar primero todo el sistema.

## 3 · Antes → desarrollo → después

Representación conceptual mínima:

```text
ANTES · ¿Qué se presupone o qué problema dejó la sección anterior?
    ↓ [relación nombrada y documentada]
SECCIÓN ACTUAL · ¿Qué tesis, mediación o transformación se estudia?
    ↓ [resultado / objeción / continuidad fundamentada]
DESPUÉS · ¿Qué consecuencia, nueva pregunta o siguiente sección se abre?
```

**Este antes/después no tiene que ser cronológico.** Puede ser lógico, argumental, expositivo, metodológico, comparativo o histórico según lo permita la fuente.

Mostrarlo de manera consistente en:
- cabecera o panel de sección;
- inspector/folio del nodo relevante;
- pasos de la guía y navegación anterior/siguiente;
- esquema cuando la relación sea representable sin forzar la fuente.

Toda relación necesita un verbo preciso: «presupone», «responde a», «objeta», «reformula», «media», «habilita», «deja abierto». No utilizar «causa», «se deriva» o «demuestra» sin base documental.

Si no puede determinarse una relación anterior o posterior, registrar **«no consta en la fuente»** o **«sección autónoma»**. Está prohibido inventarla para mantener simetría visual.

## 4 · Guía por sección

Cada sección debe disponer de un botón o acceso **«Guía de esta sección»** y mostrar:
- título de la sección y pregunta rectora;
- `paso XX / N`, progreso y etapas cuando proceda;
- foco pedagógico y explicación suficiente de cada paso;
- nodo actual y siguiente identificables en el canvas;
- `Anterior`, `Siguiente`, `Volver a la sección` y acceso a la guía total;
- fuente o límite documental de cada paso;
- continuidad hacia la sección siguiente, si está justificada.

La guía de sección puede reutilizar `guidedRoute` global filtrando por `sectionId`, pero **debe garantizar que cada nodo perteneciente a esa sección sea alcanzable en su recorrido exhaustivo**.

Se permite una **guía nuclear/rápida** adicional, siempre identificada como selección abreviada y nunca como recorrido completo.

La **guía completa del sistema** debe cubrir todos los nodos. El progreso de cada guía se calcula sobre su secuencia canónica real, no por cantidades inventadas.

Durante la guía, **panel, footer, cámara, selección y blur comparten el mismo estado**. No puede existir `is-selected` junto con `is-dimmed`. Cambiar de sección mientras una guía está activa debe suspender, reiniciar o trasladar explícitamente el estado, sin conservar índices incompatibles.

## 5 · Modo estudio por sección

Cada sección debe tener acceso **«Estudiar esta sección»** e incluir:
- preguntas derivadas de su contenido y sustentadas por fuente;
- respuesta seleccionable o ejercicio de recuperación activa, según el tipo de contenido;
- confirmación / retroalimentación que explique **por qué** una respuesta es adecuada, sin limitarse a marcarla;
- enlace al nodo, folio y fragmento de fuente correspondiente;
- navegación entre preguntas y opción **Reiniciar**;
- progreso independiente por sección, con resumen global opcional;
- separación visible entre formulación literal de pregunta docente y pregunta editorial de práctica.

No convertir preguntas creadas por PHILOSOPHIA en preguntas atribuidas al profesor.

**Si la fuente disponible no permite formular una pregunta fiable, no inventarla.** Mostrar el estado «modo estudio pendiente de fuente» y no marcar esa sección como completa. Puede ofrecer un ejercicio de recuperación fiel, claramente etiquetado como editorial, si el contenido existente lo sostiene.

## 6 · Modelo de datos mínimo

El contrato puede implementarse en un único dataset o en varios, pero los enlaces deben ser verificables:

```js
sections: [{
  id,
  title,
  guidingQuestion,
  before: [{ nodeId, sectionId, relation, evidence, layer }],
  currentNodeIds: [],
  after: [{ nodeId, sectionId, relation, evidence, layer }],
  guidedNodeIds: [],
  studyQuestionIds: [],
  schemaIds: [],
  sourceBoundary,
}]
nodes: [{ id, sectionId, sourceRef, explanation, dependsOn, produces, schema }]
studyQuestions: [{ id, sectionId, nodeId, prompt, provenance, answer, explanation }]
```

Esto es un **contrato de campos conceptuales**, no un mandato de copiar literalmente los nombres ni de añadir relaciones vacías. Conservar los datos y nodos previos al migrar sistemas; no duplicar su contenido.

## 7 · Interfaz y comportamiento

- Cambiar de sección reencuadra la ruta sin borrar el trabajo de otras secciones.
- Seleccionar un nodo centra la cámara sin ejecutar `fitView` global.
- Guía y modo estudio no compiten por la misma selección: al alternar, ambos sincronizan el nodo y la sección pertinentes.
- El modo estudio puede recorrer varias secciones sólo cuando se elige expresamente «Estudio completo».
- Un resultado de estudio lleva al nodo correcto incluso si se encuentra en otra sección.
- Inspector, folio, guía, preguntas y relaciones funcionan dentro del workspace fullscreen.
- En móvil, controles y progreso siguen visibles y accesibles sin ocultar el contenido del nodo.
- Los esquemas utilizan `AnimatedConceptSchema` y el tema compartido `System2DTheme`; su geometría debe ser legible.

## 8 · Auditoría de aceptación por sección

Para cada `sectionId`, comprobar:

- [ ] pregunta rectora y fuente definidas;
- [ ] «antes» y «después» sustentados o límites explícitos;
- [ ] guías navegables y progreso XX/N correcto;
- [ ] todos sus nodos alcanzables en la guía exhaustiva;
- [ ] modo estudio con preguntas justificadas y retroalimentación;
- [ ] cada pregunta conduce al nodo/fuente correctos;
- [ ] fuente primaria, comentarista, clase y reconstrucción distinguidos;
- [ ] diagramas reales y trazables, sin flechas inventadas;
- [ ] cambio de sección sin desincronizar selección, cámara o índices;
- [ ] inspector, modo estudio y guía legibles en móvil y fullscreen;
- [ ] ninguna colisión visual entre etiquetas, aristas, flechas y figuras.

**Aceptación global:** ningún sistema 2D nuevo se declara terminado mientras alguna sección documentalmente sustentada carezca de guía, estudio o continuidad, salvo que la ausencia esté explícitamente justificada como límite de fuente; en tal caso se registra como pendiente, no como cumplimiento pleno.

## 9 · Relación con otras normas

- [[90 - Plantillas/Regla de oro - Fidelidad radical a las fuentes]]
- [[90 - Plantillas/Regla global - Esquemas en clases y sistemas 2D]]
- [[90 - Plantillas/Sistema 2D PHILOSOPHIA/Contrato del sistema 2D]]
- [[90 - Plantillas/Sistema 2D PHILOSOPHIA/README]]
- [[08 - PHILOSOPHIA/Features/Ontología II - Kant - Analítica trascendental 2D]]

**Principio final:** *cada sección debe poder comprenderse, recorrerse, comprobarse y enlazarse con el resto del argumento sin abandonar el sistema 2D.*
