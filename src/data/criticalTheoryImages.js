// Registro inicial de medios por clase. No da por auditadas las demás sesiones.
// Las licencias de terceros deben respaldarse con una ficha comprobada antes de incorporarlas.
export const criticalTheoryImages = [
  {
    id: 'critica-2026-08-18-tres-planos',
    classPath: '/semestre/5/teoria-critica/clase/18-agosto',
    imagePath: 'images/teoria-critica/18-agosto-tres-planos.svg',
    imageType: 'original',
    imageSource: 'PHILOSOPHIA · diagrama vectorial creado para la clase 1',
    imageAuthor: 'PHILOSOPHIA',
    imageLicense: 'ORIGINAL-OWNED',
    imageLicenseUrl: null,
    licenseEvidenceUrl: null, // No es un recurso de terceros.
    imageAttribution: 'Ilustración original de PHILOSOPHIA',
    modifications: 'ninguna',
    alt: 'Tres viñetas: libros de distintas tradiciones, una red de investigación y un cuaderno abierto. Ilustran pluralidad, trabajo transdisciplinario y lectura.',
    pedagogicalPurpose: 'Permite reconocer los tres planos del encuadre, sin establecer una secuencia causal o filosófica entre ellos.',
    sourceBoundary: 'Reconstrucción visual editorial del encuadre; no fotografía ni dibujo original de la profesora.',
  },
  {
    id: 'critica-2026-08-20-constelacion',
    classPath: '/semestre/5/teoria-critica/clase/20-agosto',
    imagePath: 'images/teoria-critica/20-agosto-constelacion.svg',
    imageType: 'original',
    imageSource: 'PHILOSOPHIA · diagrama vectorial creado para la clase 2',
    imageAuthor: 'PHILOSOPHIA',
    imageLicense: 'ORIGINAL-OWNED',
    imageLicenseUrl: null,
    licenseEvidenceUrl: null,
    imageAttribution: 'Ilustración original de PHILOSOPHIA',
    modifications: 'ninguna',
    alt: 'Hegel, Marx, Lukács y Freud aparecen alrededor de Teoría Crítica, conectados por líneas punteadas que indican relaciones de estudio y no una genealogía causal.',
    pedagogicalPurpose: 'Ayuda a entender la genealogía de la sesión como constelación de problemas históricos, sociales y psíquicos que Frankfurt reelabora.',
    sourceBoundary: 'Reconstrucción visual editorial; no es un diagrama literal de la profesora ni afirma una filiación doctrinal automática.',
  },
]

export function imagesForCriticalTheoryClass(classPath) {
  return criticalTheoryImages.filter((image) => image.classPath === classPath)
}
