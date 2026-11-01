// Proyección pública de las referencias recuperadas en 115 notas de clase de Obsidian.
// Solo identidad bibliográfica y menciones nominales; sin textos privados ni lecturas supuestas.
import { classReferencesPart0 } from './classReferences/part0.js'
import { classReferencesPart1 } from './classReferences/part1.js'
import { classReferencesPart2 } from './classReferences/part2.js'
import { classReferencesPart3 } from './classReferences/part3.js'
import { classReferencesPart4 } from './classReferences/part4.js'
import { classReferencesPart5 } from './classReferences/part5.js'
import { classReferencesPart6 } from './classReferences/part6.js'
import { classReferencesPart7 } from './classReferences/part7.js'
import { classReferencesPart8 } from './classReferences/part8.js'

export const documentedClassReferences = [
  ...classReferencesPart0,
  ...classReferencesPart1,
  ...classReferencesPart2,
  ...classReferencesPart3,
  ...classReferencesPart4,
  ...classReferencesPart5,
  ...classReferencesPart6,
  ...classReferencesPart7,
  ...classReferencesPart8,
].sort((a,b)=> b.date.localeCompare(a.date) || a.area.localeCompare(b.area,'es') || a.title.localeCompare(b.title,'es'))

export const documentedClassReferenceStats = {
  examinedNotes: 116,
  classesWithReferences: documentedClassReferences.length,
  worksMentioned: documentedClassReferences.reduce((n,row)=>n+row.works.length,0),
  authorsMentioned: documentedClassReferences.reduce((n,row)=>n+row.authors.length,0),
}
