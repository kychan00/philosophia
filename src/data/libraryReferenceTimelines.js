// Vista aditiva: preserva las cronologías ya verificadas; incorpora nuevas referencias nominales.
import { libraryTimelines as baseTimelines } from './libraryTimelines.js'
import { documentedClassReferences } from './libraryClassReferences.js'

export const libraryTimelines = {
  works: Object.fromEntries(Object.entries(baseTimelines.works).map(([id,events])=>[id,[...events]])),
  authors: Object.fromEntries(Object.entries(baseTimelines.authors).map(([id,events])=>[id,[...events]])),
}

for (const note of documentedClassReferences) {
  for (const [group,ids,type] of [
    ['works',note.works,'identificación bibliográfica en nota'],
    ['authors',note.authors,'autor mencionado en la nota'],
  ]) {
    for (const id of ids) {
      const events = libraryTimelines[group][id] ?? (libraryTimelines[group][id] = [])
      // Una nota fechada, como máximo un evento por ficha; no duplicar el índice histórico.
      if (events.some(e=>e.date===note.date && e.area===note.area)) continue
      events.push({
        date: note.date, area: note.area, title: note.title,
        url: note.url, type,
      })
    }
  }
}
