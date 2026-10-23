// Proyección editorial de las 278 fichas de 03 - Conceptos de Obsidian.
// Las definiciones son extractos contextuales, nunca citas textuales de las obras.
// Las relaciones proceden de wikienlaces; no suponen adhesión doctrinal.
import { conceptsPart0 } from './libraryConcepts/part0.js'
import { conceptsPart1 } from './libraryConcepts/part1.js'
import { conceptsPart2 } from './libraryConcepts/part2.js'
import { conceptsPart3 } from './libraryConcepts/part3.js'
import { conceptsPart4 } from './libraryConcepts/part4.js'
import { conceptsPart5 } from './libraryConcepts/part5.js'
import { conceptsPart6 } from './libraryConcepts/part6.js'
import { conceptsPart7 } from './libraryConcepts/part7.js'
import { conceptsPart8 } from './libraryConcepts/part8.js'
import { conceptsPart9 } from './libraryConcepts/part9.js'
import { conceptsPart10 } from './libraryConcepts/part10.js'
import { conceptsPart11 } from './libraryConcepts/part11.js'
import { conceptsPart12 } from './libraryConcepts/part12.js'
import { conceptsPart13 } from './libraryConcepts/part13.js'
import { conceptsPart14 } from './libraryConcepts/part14.js'
import { conceptsPart15 } from './libraryConcepts/part15.js'
import { conceptsPart16 } from './libraryConcepts/part16.js'
import { conceptsPart17 } from './libraryConcepts/part17.js'
import { glockConcepts, GLOCK_STUDY_ROUTE } from './glockConceptIndex.js'
import { documentedClassReferences } from './libraryClassReferences.js'
import { documentedConceptLinks } from './libraryConceptEvidence.js'

const sourceNotes = [...conceptsPart0, ...conceptsPart1, ...conceptsPart2, ...conceptsPart3, ...conceptsPart4, ...conceptsPart5, ...conceptsPart6, ...conceptsPart7, ...conceptsPart8, ...conceptsPart9, ...conceptsPart10, ...conceptsPart11, ...conceptsPart12, ...conceptsPart13, ...conceptsPart14, ...conceptsPart15, ...conceptsPart16, ...conceptsPart17]
const glockIndex = new Map(glockConcepts.map(c=>[c.term,c]))
const reverseWorks = new Map()
for (const [work,terms] of Object.entries(documentedConceptLinks))
  for (const term of terms) {
    if (!reverseWorks.has(term)) reverseWorks.set(term,new Set())
    reverseWorks.get(term).add(work)
  }
const normalizeArea = area => area==='Métodos de Investigación Filosófica'
  ? 'Métodos de Investigación' : area
function classFromLink(path) {
  const parts=path.split('/')
  if(parts.length<3)return null
  const area=normalizeArea(parts[1])
  const match=parts.at(-1).match(/^(\d{4}-\d\d-\d\d) - (.+)$/)
  if(!match)return null
  const [ , date, title ]=match
  const published=documentedClassReferences.find(item=>
    item.date===date&&item.area===area&&item.title===title)
  return {date,area,title,url:published?.url||null}
}
export const libraryConcepts = sourceNotes.map(record => {
  const glock=glockIndex.get(record.term)
  const classes=record.classRefs.map(classFromLink).filter(Boolean)
    .filter((entry,index,all)=>all.findIndex(other=>other.date===entry.date&&other.area===entry.area&&other.title===entry.title)===index)
  const subjects=[...new Set([normalizeArea(record.materia),
    ...classes.map(c=>c.area),...(glock?['Filosofía Analítica']:[])].filter(Boolean))]
  return {
    ...record,
    definition:glock?.definition||record.definition,
    simple:glock?.simple||record.simple,
    related:[...new Set([...record.related,...(glock?.related||[])])],
    works:[...new Set([...record.works,...(reverseWorks.get(record.term)||[])])],
    subjects,classes,pages:glock?.pages||null,sourceNode:glock?.node||null,
    studyUrl:glock?GLOCK_STUDY_ROUTE:null,
  }
}).sort((a,b)=>a.term.localeCompare(b.term,'es'))
export const libraryConceptByTerm = new Map(libraryConcepts.map(c=>[c.term,c]))
export const libraryConceptSubjects = [...new Set(libraryConcepts.flatMap(c=>c.subjects))].sort((a,b)=>a.localeCompare(b,'es'))
