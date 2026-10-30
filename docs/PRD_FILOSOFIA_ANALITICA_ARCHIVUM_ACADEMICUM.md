# Product Requirements Document (PRD) & Project Brief

## Proyecto: *Archivum Academicum — Sistema de Retención Epistémica y Registro Mnemónico Decenal*
**Dominio:** Filosofía Analítica & Bitácoras Catedráticas Universitarias  
**Horizonte de Diseño:** Retención y Reconstrucción Intelectual a 10 Años (2025–2035)  
**Versión:** 1.1  
**Estado:** Aprobado  
**Actualización:** 26 de octubre de 2026  
**Público Objetivo:** Estudiantes avanzados, tesistas, docentes e investigadores de Filosofía Analítica, Lógica y Epistemología.

> Este PRD se aplica progresivamente, clase por clase. No implica que las páginas históricas ya satisfagan el nuevo contrato visual.

---

### 1. Visión y Propósito del Producto

#### 1.1 El Problema Fundamental
Los apuntes universitarios tradicionales y los repositorios de notas (Notion, Obsidian, libretas físicas) sufren de **entropía cognoscitiva acelerada**: al cabo de 2 a 10 años, el estudiante o investigador que regresa a sus notas encuentra resúmenes fragmentarios, citas aisladas y pérdida del hilo demostrativo. En disciplinas de alto rigor formal como la **Filosofía Analítica**, esto resulta fatal: se pierde la distinción técnica exacta (p. ej. *Sinn* vs. *Bedeutung*, intensión vs. extensión, *de dicto* vs. *de re*), la estructura deductiva de los argumentos y el contexto dialéctico en el que se formularon.

#### 1.2 La Misión
Construir una plataforma web editorial y epistémica que garantice que **cualquier estudiante o investigador que vuelva a una clase 10 años después pueda reconstruir de manera inmediata, explícita y sistémica el 100% del contenido medular, los argumentos formales y la bibliografía de dicha sesión en menos de 90 segundos a 5 minutos.**

---

### 2. Principios de Diseño Epistémico (Core Pillars)

1. **Activación Mnemónica Inmediata (Regla de los 90 Segundos)**:
   - Toda página de clase debe encabezarse con una cápsula indeleble: *Tesis seminal en una sola frase*, *Tríada conceptual canónica* y un *Diagrama semiótico o gráfico formal*.
2. **Doble Nivel de Profundidad (Scannability & Formal Rigor)**:
   - **Nivel Macro:** Resumen ejecutivo mnemónico y mapa conceptual para repaso rápido.
   - **Nivel Micro:** Demostraciones formales paso a paso, derivaciones cuantificacionales en lógica de primer orden/modal y citas primarias con aparato crítico (*Scholia*).
3. **Temporalidad & Bitácora Didáctica (Classroom Chronology)**:
   - Registro bloque a bloque del discurrir temporal de la cátedra (minuto 00 al 105), capturando anécdotas heurísticas, metáforas didácticas canónicas y preguntas/aporías espontáneas surgidas en el aula.
4. **Interconexión Epistémica y Proyección Diacrónica**:
   - Cada clase no es una isla; debe proyectar sus hilos conceptuales hacia clases posteriores del semestre (e.g. Frege 1892 → Russell 1905 → Kripke 1972) y mapearse dentro de la taxonomía general de la filosofía analítica.
5. **Estética Editorial Académica Monográfica**:
   - Tipografía con vocación centenaria (serif clásica como *EB Garamond* contrastada con etiquetas monoespaciadas para notación lógica y metadatos de archivo). Tonalidades marfil, tinta neutra y acentos de azul cobalto analítico (#1d4ed8).
6. **Visualidad Epistémica Obligatoria, Original y Trazable**:
   - **Cada página de clase debe contener formas gráficas pedagógicas y al menos una imagen informativa de uso legal verificado.**
   - Las formas (círculos, triángulos, cajas, líneas, conectores, árboles, matrices, flechas, diagramas, contenedores o composiciones geométricas) deben organizar o explicar relaciones conceptuales; no pueden existir sólo como decoración.
   - Se priorizan SVG, diagramas y composiciones originales de PHILOSOPHIA. Para imágenes externas se priorizan dominio público/CC0 y, cuando sea necesario, licencias compatibles correctamente atribuidas.
   - «Gratis», «en internet» o «sin marca de agua» no equivale a libre de derechos. Toda imagen externa requiere procedencia y licencia verificables.
   - El recurso visual debe incluir texto alternativo, pie o guía de lectura y relación pedagógica explícita con la clase.

---

### 3. Mapeo de Arquitectura de Información y Pantallas del Ecosistema

| Pantalla | Propósito | Componentes Clave |
|---|---|---|
| **1. Compendio General & Navegador Taxonómico** (`SCREEN_5`) | Portal central del seminario y mapa de la tradición analítica. | - Menú por 4 ramas: Lógica Matemática, Filosofía del Lenguaje, Epistemología, Mente/Ontología.<br>- Módulo de Anatomía de una Deducción Formal (Premisas, Validez vs. Solidez, Falacias).<br>- Línea de tiempo de hitos (1879–hoy) y Glosario rápido de operadores lógicos.<br>- Formas vectoriales originales para jerarquías y relaciones taxonómicas. |
| **2. Registro Mnemónico de Clase / Sesión Catedrática** (`SCREEN_2`) | Ficha monográfica profunda de una clase individual (ej. Clase 17 de Agosto). | - Banner de activación mnemónica (90 seg) + Triángulo Semiótico.<br>- Cronología en 4 bloques didácticos con sellos de tiempo.<br>- Aparato demostrativo deductivo formal (Modus Ponens, Modus Tollens).<br>- Scholia y citas primarias.<br>- Self-Test Decenal (Active Recall desplegable).<br>- Corpus de lecturas con progreso mnemónico.<br>- **Una o más formas/diagramas pedagógicos y al menos una imagen informativa con derechos de uso verificados.** |
| **3. Índice Semestral & Matriz de Continuidad** *(Próxima Fase)* | Visión panorámica del semestre (Clases 01 a 24). | - Matriz de dependencias deductivas entre clases.<br>- Mapa de lecturas y control de retención por autor. |
| **4. Laboratorio de Deducción & Aporías de Examen** *(Próxima Fase)* | Espacio de ejercitación activa y resolución de contraejemplos. | - Validador de silogismos y tablas de verdad.<br>- Formulación formal de contraargumentos y ensayos cortos. |

---

### 4. Especificaciones Funcionales Detalladas (Feature Specs)

#### F1. Banner Mnemónico de Activación Rápida
- **Objetivo:** Disparar el recuerdo sin requerir lectura profunda.
- **Requisitos:**
  - Caja destacada con la *Tesis Seminal* en tipografía serif destacada.
  - Tríada de axiomas mnemónicos (α, β, γ) numerados y codificados por color semántico.
  - Gráfico o diagrama vectorial integrado (Triángulo de Frege, Tabla de Verdad, Árbol Semántico).
  - El gráfico debe ser original o contar con procedencia/licencia registradas; nunca se copiará una figura externa sin autorización o licencia comprobable.

#### F2. Bitácora Didáctica Cronológica
- **Objetivo:** Recuperar la atmósfera pedagógica de la sesión presencial.
- **Requisitos:**
  - 3 a 5 tarjetas modulares ordenadas secuencialmente por rangos de tiempo (ej. `00:00 - 00:25`).
  - Cada tarjeta debe incluir: *Título del Bloque*, *Exposición Didáctica*, *Metáfora Clave / Experimento Mental*, y *Falla o Advertencia Epistémica*.

#### F3. Módulo Demostrativo Deductivo Formal
- **Objetivo:** Preservar la estructura lógica estricta sin ambigüedad en lenguaje natural.
- **Requisitos:**
  - Notación formal estandarizada en monospace (Lógica proposicional, cuantificacional, modal).
  - Desglose por premisas rotuladas (P₁, P₂, …, Pₙ), regla de inferencia empleada y Conclusión C.
  - Distintivo de validación (*Q.E.D.*, *Válido & Sólido*).

#### F4. Notas al Margen (*Scholia*) y Aporías Abiertas
- **Objetivo:** Evitar que los debates no resueltos y los matices textuales se pierdan con el tiempo.
- **Requisitos:**
  - Bloque izquierdo: Citas directas en fuentes primarias con referencia a passus o parágrafos canónicos.
  - Bloque derecho: Tarjetas de aporías o disputas no cerradas surgidas en el aula universitaria.

#### F5. Sistema de Auto-Evaluación Decenal (*Self-Test / Active Recall*)
- **Objetivo:** Testear la comprensión genuina al regresar a la nota tras años de inactividad.
- **Requisitos:**
  - Preguntas sintéticas desplegables tipo acordeón.
  - Criterio de verificación para que el usuario valide si su respuesta mental coincide con la respuesta canónica.

#### F6. Sistema Visual Obligatorio: Formas + Imágenes de Uso Seguro
- **Objetivo:** Convertir cada página en un objeto de memoria visual sin introducir ruido decorativo ni riesgos de derechos.
- **Requisitos mínimos por página:**
  - **≥ 1 composición de formas pedagógicas** propia: diagrama, árbol, triángulo, matriz, red de relaciones, secuencia de flechas, cajas de inferencia u otra estructura visual pertinente.
  - **≥ 1 imagen pedagógica** distinta de la decoración de interfaz, con uso legal comprobado.
  - Preferencia de origen: **(1) SVG/ilustración original PHILOSOPHIA → (2) dominio público/CC0 verificado → (3) CC BY/CC BY-SA compatible con atribución completa → (4) permiso expreso verificable.**
  - Cada recurso debe registrar, según aplique: autor, fuente, licencia, enlace a evidencia, modificaciones, `alt`, pie y finalidad pedagógica.
  - Una forma original no debe presentarse como facsímil, gráfico del profesor o figura del autor si es una reconstrucción editorial.
  - No cuentan para cumplimiento: fondos, texturas, ornamentos, iconos genéricos o fotografías sin relación conceptual.
  - Si no puede verificarse la licencia de una imagen externa, **no se publica**; se sustituye por una visualización original fiel o la clase queda marcada como pendiente de recurso visual.
  - Debe existir equivalente textual accesible para diagramas que expresen relaciones conceptuales relevantes.

#### F7. Criterio de Integridad Visual por Clase
Una clase sólo puede declararse adaptada a *Archivum Academicum* cuando:
- la tesis y la tríada mnemónica sean legibles en el primer viewport;
- exista el diagrama/formas pedagógicas obligatorias;
- exista al menos una imagen informativa de uso seguro;
- la trazabilidad de la imagen esté registrada;
- el contenido visual funcione en escritorio, móvil, iPad/tableta, zoom e impresión;
- la visualidad no modifique, simplifique indebidamente ni invente el contenido académico.

---

### 5. Guía de Identidad Visual y Diseño (Tokens & Sistema)
- **Design System Token ID:** `DESIGN_SYSTEM_1` (*Analytic Monograph*)
- **Modo:** Claro (*Academic Light Paper*), fondo `surface` (#f9f9ff / #ffffff), bordes sutiles color pizarra suave (#e2e8f0).
- **Tipografía Primaria:** `EB Garamond` para títulos, sentencias axiomáticas y citas monográficas.
- **Tipografía Secundaria / Técnica:** Sans-serif neutral moderna (Inter / Helvetica Neue) para interfaces y controles, y `Monospace` para operadores lógicos y formalismos.
- **Color de Énfasis Primario:** Azul Analítico Cobalto (#1d4ed8), denotando precisión lógica y formalidad cartesiana.
- **Lenguaje de Formas:** geometría limpia, líneas finas, contenedores rectangulares o circulares, flechas direccionales, árboles y triángulos semánticos; cada forma debe codificar una relación reconocible.
- **Imágenes:** tratamiento editorial sobrio; evitar collages genéricos. Toda imagen debe respetar la regla global de imágenes libres y trazabilidad de PHILOSOPHIA.
- **Micro-interacciones:** Acordeones de auto-evaluación fluidos, hover en tarjetas con elevación milimétrica, e insignias de estado de completitud mnemónica.

---

### 6. Métricas de Éxito del Sistema
1. **Tiempo de Reconstrucción Conceptual:** Menor a 120 segundos para evocar la tesis, las 2 metáforas clave y el problema central de la sesión.
2. **Índice de Claridad Notacional:** Cero ambigüedad en las fórmulas lógicas registradas frente a los apuntes de fuente.
3. **Escalabilidad Semestral:** Capacidad de alojar un programa semestral completo de 16 a 24 semanas sin saturación cognitiva ni degradación de la jerarquía visual.
4. **Cobertura Visual:** 100% de las clases adaptadas al nuevo formato con al menos una composición de formas pedagógicas y una imagen informativa trazable.
5. **Trazabilidad de Derechos:** 100% de los recursos externos publicados con licencia/permiso y procedencia verificables; cero imágenes incorporadas sólo por estar disponibles en internet.

---

### 7. Estrategia de Implantación por Fases

1. **Fase 1 — Contrato:** aprobar este PRD y fijar el patrón visual, documental y de derechos. No rediseñar clases todavía.
2. **Fase 2 — Piloto:** seleccionar una clase representativa, aplicar el formato completo y validar contenido, responsive, accesibilidad, formas e imágenes.
3. **Fase 3 — Ajuste del sistema:** corregir tokens, componentes, densidad, navegación y trazabilidad a partir del piloto.
4. **Fase 4 — Migración por lotes pequeños:** adaptar las clases una por una o en grupos controlados, sin alterar el contenido académico aprobado.
5. **Fase 5 — Índice semestral:** construir la matriz de continuidad entre clases cuando la mayoría de las sesiones ya use el mismo contrato.
6. **Fase 6 — Laboratorio:** incorporar deducción activa, contraejemplos y autoevaluación avanzada.

---

### 8. Reglas de Fuente, Derechos y Publicación

- La fidelidad académica prevalece sobre la estética: no se inventan citas, argumentos, ejemplos de clase ni relaciones históricas.
- La expresión «imagen sin copyright» se operacionaliza como **imagen de uso seguro y jurídicamente trazable**: original, dominio público/CC0, licencia compatible cumplida o permiso expreso.
- Aplican `docs/REGLA_IMAGENES_LIBRES_Y_TRAZABILIDAD_CLASES.md` y `docs/flujo-multichat-y-despliegues.md`.
- Toda adaptación académica debe mantener sincronizada su documentación correspondiente en Obsidian.
- Una clase histórica no se considera migrada hasta pasar su propia revisión; no hay retroactividad ficticia.
