export const freudMalestarWork = {
  id: 'freud-malestar-cultura',
  author: 'Sigmund Freud',
  title: 'El malestar en la cultura',
  studyMode: 'Lectura por capítulos',
}

export const freudMalestarChapters = [
  {
    id: 'I',
    slug: 'capitulo-1',
    title: 'El yo y el sentimiento oceánico',
    status: 'available',
    statusLabel: 'Sistematizado',
    pages: 'pp. 2–13',
    nodeCount: 62,
    route: '/semestre/5/teoria-critica/lectura/freud-malestar-capitulo-1',
  },
  {
    id: 'future',
    title: 'Próximos capítulos',
    status: 'future',
    statusLabel: 'Se incorporarán conforme se trabajen',
    pages: null,
    nodeCount: null,
    route: null,
  },
]

export const freudMalestarChapterById = (id) => freudMalestarChapters.find((chapter) => chapter.id === id)
