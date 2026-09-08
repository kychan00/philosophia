export type CafeEvent = {
  id: string
  date: string
  slug: string
  eyebrow: string
  title: string
  deck: string
  route: string
  status: 'publicado' | 'proximo'
  themes: string[]
}

export const cafeEvents: CafeEvent[] = [
  {
    id: 'cafe-2026-09-07-capitalismo',
    date: '2026-09-07',
    slug: 'fin-del-mundo-fin-del-capitalismo',
    eyebrow: 'Café filosófico · diálogo abierto',
    title:
      '¿Por qué es más fácil pensar en el fin del mundo que en el fin del capitalismo?',
    deck:
      'Una discusión sobre sistema, deseo, medios de producción, naturaleza, mérito y la dificultad de imaginar alternativas.',
    route:
      '/cafe-filosofico/2026/09/07/fin-del-mundo-fin-del-capitalismo',
    status: 'publicado',
    themes: [
      'capitalismo',
      'sistema',
      'deseo',
      'medios de producción',
      'naturaleza',
      'valor',
    ],
  },
]

export function getCafeEventBySlug(slug: string) {
  return cafeEvents.find((event) => event.slug === slug)
}
