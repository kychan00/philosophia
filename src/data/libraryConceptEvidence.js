// Auditoría 16-10-2026: cada relación es un enlace [[...]] constatado en
// una ficha real del vault; no indica por sí sola un argumento, influencia
// ni lectura completa. Metadatos públicos sin rutas privadas.
import { glockConcepts, GLOCK_WORK_ID } from './glockConceptIndex.js'

export const documentedConceptLinks = {
  [GLOCK_WORK_ID]: glockConcepts.map(c => c.term),
  "Rendón - La lucha por el reconocimiento en el fragmento de 1803-1804 de Hegel": ["Reconocimiento (Hegel)", "Eticidad (Hegel)", "Formación (Bildung) en Hegel", "Superación (Aufheben) en Hegel"],
  "Dilthey - Hegel y el idealismo": ["Formación (Bildung) en Hegel", "Devenir del saber (Hegel)", "Verdad como sistema (Hegel)"],
  "Cicerón - Las paradojas de los estoicos": ["Estoicismo", "Dominio de sí", "Pasiones", "Eudaimonía", "Autonomía moral"],
  "Nava - Tecnociencia, entorno y sujeto tecnocientífico": [
    "Tecnociencia (Nava)",
    "Sujeto tecnocientífico (Nava)",
    "Razón instrumental"
  ],
  "Aristóteles - Metafísica - Libro IV": [
    "Principio de no contradicción"
  ],
  "Aristóteles - Metafísica - Libro VII": [
    "Sustancia",
    "Prioridad de la entidad (Aristóteles)",
    "Esencia y accidente (Aristóteles)",
    "Definición y esencia (Aristóteles)",
    "Ser en muchos sentidos (Aristóteles)"
  ],
  "Hartmann - La filosofía del idealismo alemán - Tomo I": [
    "Cosa en sí (Kant)"
  ],
  "Hartnack - La teoría del conocimiento de Kant": [
    "Analítica trascendental"
  ],
  "Hegel - Ciencia de la lógica": [
    "Ser puro (Hegel)",
    "Nada pura (Hegel)",
    "Devenir lógico (Hegel)",
    "Dasein en Hegel"
  ],
  "Hegel - Fenomenología del espíritu": [
    "Verdad como sistema (Hegel)",
    "Sustancia y sujeto (Hegel)",
    "Trabajo de lo negativo (Hegel)",
    "Devenir del saber (Hegel)",
    "Formación (Bildung) en Hegel",
    "Experiencia de la conciencia (Hegel)",
    "Pensamiento especulativo (Hegel)",
    "Proposición especulativa (Hegel)",
    "Automovimiento del concepto (Hegel)",
    "Superación (Aufheben) en Hegel"
  ],
  "Hipócrates - Sobre la dieta": [
    "Sophrosyne (templanza)",
    "Díaita (régimen de vida)"
  ],
  "Kant - Crítica de la razón pura - Ribas": [
    "Estética trascendental",
    "Analítica trascendental",
    "Dialéctica trascendental"
  ],
  "Leibniz - Monadología": [
    "Mónada",
    "Armonía preestablecida"
  ],
  "Luciano - El banquete o los lapitas": [
    "Sátira filosófica",
    "Êthos",
    "Prâxis (ética clásica)",
    "Estoicismo",
    "Dominio de sí"
  ],
  "Lukács - Historia y conciencia de clase": [
    "Cosificación (Lukács)",
    "Fetichismo de la mercancía",
    "Mercancía (Marx)",
    "Totalidad social",
    "Trabajo (Marx)",
    "Objetivación (Marx)",
    "Enajenación (Marx)"
  ],
  "Lukács - Marx, ontología del ser social": [
    "Trabajo (Marx)",
    "Valor (Marx)",
    "Valor de uso (Marx)",
    "Valor de cambio (Marx)",
    "Praxis",
    "Método dialéctico",
    "Ser genérico (Marx)",
    "Enajenación (Marx)",
    "Totalidad social",
    "Cosificación (Lukács)"
  ],
  "Lévy - Becoming Virtual": [
    "Virtual y actual"
  ],
  "Marx - El capital - Tomo I - Scaron 2008": [
    "Mercancía (Marx)",
    "Valor (Marx)",
    "Tiempo de trabajo socialmente necesario",
    "Fetichismo de la mercancía"
  ],
  "Ortega y Gasset - El tema de nuestro tiempo": [
    "Perspectivismo (Ortega y Gasset)"
  ],
  "Ortega y Gasset - Meditaciones del Quijote": [
    "Perspectivismo (Ortega y Gasset)"
  ],
  "Peirce - La fijación de la creencia": [
    "Fijación de la creencia (Peirce)",
    "Duda y creencia (Peirce)"
  ],
  "Pelayo - La verdad como perspectiva en Ortega y Gasset": [
    "Perspectivismo (Ortega y Gasset)",
    "Teorías de la verdad"
  ],
  "Platón - Banquete": [
    "Sophrosyne (templanza)",
    "Díaita (régimen de vida)"
  ],
  "Platón - Cármides": [
    "Sophrosyne (templanza)",
    "Díaita (régimen de vida)"
  ],
  "Platón - Leyes": [
    "Sophrosyne (templanza)",
    "Díaita (régimen de vida)"
  ],
  "Platón - Parménides": [
    "Argumento del tercer hombre"
  ],
  "Platón - República": [
    "Sophrosyne (templanza)",
    "Díaita (régimen de vida)"
  ],
  "Russ - Los métodos en filosofía - capítulos 1-3": [
    "Asunto en juego"
  ],
  "Spinoza - Ética demostrada según el orden geométrico - Vidal Peña": [
    "Sustancia (Spinoza)",
    "Atributo (Spinoza)",
    "Modo (Spinoza)",
    "Causalidad inmanente (Spinoza)"
  ],
  "Tomás de Aquino - Del ente y de la esencia": [
    "Materia signada",
    "Esencia y existencia (Tomás de Aquino)",
    "Esencia de los accidentes (Tomás de Aquino)"
  ],
  "Wittgenstein - Investigaciones filosóficas": [
    "Significado como uso",
    "Juegos de lenguaje"
  ],
  "Wittgenstein - Tractatus logico-philosophicus": [
    "Forma lógica",
    "Teoría pictórica (Wittgenstein)",
    "Decir y mostrar (Wittgenstein)"
  ]
}

// Cada clave nombra la ficha de concepto que enlaza a los términos listados.
// Es navegación documental, NO una relación doctrinal derivada.
export const documentedConceptRelations = {
  ...Object.fromEntries(glockConcepts.map(c => [c.term, c.related])),
  "Tecnociencia (Nava)": [
    "Sujeto tecnocientífico (Nava)",
    "Razón instrumental"
  ],
  "Sujeto tecnocientífico (Nava)": [
    "Tecnociencia (Nava)",
    "Razón instrumental"
  ],
  "Razón instrumental": [
    "Sujeto tecnocientífico (Nava)",
    "Tecnociencia (Nava)"
  ],
  "Cosificación (Lukács)": [
    "Mercancía (Marx)",
    "Fetichismo de la mercancía",
    "Totalidad social"
  ],
  "Fetichismo de la mercancía": [
    "Mercancía (Marx)",
    "Valor (Marx)"
  ],
  "Mercancía (Marx)": [
    "Valor (Marx)",
    "Precio (Marx)",
    "Valor de uso (Marx)",
    "Valor de cambio (Marx)"
  ],
  "Valor (Marx)": [
    "Valor de uso (Marx)",
    "Valor de cambio (Marx)",
    "Precio (Marx)",
    "Tiempo de trabajo socialmente necesario",
    "Mercancía (Marx)"
  ],
  "Estética trascendental": [
    "Sensibilidad (Kant)",
    "Espacio y tiempo (Kant)"
  ],
  "Sophrosyne (templanza)": [
    "Dominio de sí",
    "Pasiones",
    "Estoicismo",
    "Cuidado de sí (medicina antigua)"
  ],
  "Fijación de la creencia (Peirce)": [
    "Duda y creencia (Peirce)"
  ],
  "Duda y creencia (Peirce)": [
    "Fijación de la creencia (Peirce)"
  ],
  "Ser puro (Hegel)": [
    "Nada pura (Hegel)",
    "Devenir lógico (Hegel)"
  ],
  "Nada pura (Hegel)": [
    "Ser puro (Hegel)",
    "Devenir lógico (Hegel)"
  ],
  "Devenir lógico (Hegel)": [
    "Devenir del saber (Hegel)",
    "Ser puro (Hegel)",
    "Nada pura (Hegel)",
    "Dasein en Hegel"
  ],
  "Sustancia y sujeto (Hegel)": [
    "Trabajo de lo negativo (Hegel)",
    "Automovimiento del concepto (Hegel)",
    "Devenir del saber (Hegel)"
  ],
  "Esencia y accidente (Aristóteles)": [
    "Definición y esencia (Aristóteles)",
    "Prioridad de la entidad (Aristóteles)"
  ]
}
