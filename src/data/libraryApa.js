import { authorsForWork } from './libraryCatalogUtils.js'
import { libraryApaMetadata } from './libraryApaMetadata.js'

function initials(given) {
  return given.split(/\s+/).filter(Boolean).map(part => {
    if (/^(de|del|da|dos|van|von)$/iu.test(part)) return part.toLowerCase()
    if (part.includes('-')) return part.split('-').map(piece =>
      piece.endsWith('.') ? piece : piece.charAt(0).toUpperCase()+'.').join('-')
    return part.endsWith('.') ? part : part.charAt(0).toUpperCase()+'.'
  }).join(' ')
}

function nameParts(record) {
  const parts = record.split(',').map(x=>x.trim())
  if(parts.length<2) return {surname:record, init:''}
  return {surname:parts[0],init:initials(parts.slice(1).join(' '))}
}

export function apaAuthorName(record) {
  const {surname,init}=nameParts(record)
  return init ? surname+', '+init : surname
}

function apaEditorName(record) {
  const {surname,init}=nameParts(record)
  return init ? init+' '+surname : surname
}

function joinPeople(records, mapper) {
  const people=records.map(mapper)
  if(people.length<=1) return people.join('')
  return people.slice(0,-1).join(', ')+', & '+people.at(-1)
}

function period(text) {
  return text ? (/[.!?]$/.test(text) ? text : text+'.') : ''
}

export function formatApaRecord(book, authors) {
  const meta=libraryApaMetadata[book.id]
  if(!meta) throw new Error('APA sin metadatos: '+book.id)
  const authorRecords=meta.authorOrder || authorsForWork(book,authors)
  if(!authorRecords.length) throw new Error('APA sin autoría: '+book.id)
  const author=joinPeople(authorRecords,apaAuthorName)
  const year=meta.year==null ? 's. f.' : String(meta.year)
  const kind=meta.kind
  const issues=[]
  if(meta.year==null) issues.push('año de la edición consultada')
  if((kind==='book'||kind==='chapter')&&!meta.publisher) issues.push('editorial')
  if(kind==='chapter'&&!meta.editor) issues.push('editor del volumen')
  if(kind==='chapter'&&!meta.pages) issues.push('paginación de capítulo')
  if(meta.authorshipUncertain) issues.push('atribución tradicional de autoría')
  if(kind==='article'&&!meta.journal) issues.push('revista, libro o publicación contenedora')
  if(kind==='fragment'&&!meta.bookTitle) issues.push('obra y edición contenedoras')
  if(kind==='fragment'&&meta.bookTitle&&!meta.editor) issues.push('datos de edición del texto contenedor')

  const components=[]
  const add=(text,italic=false)=>{if(text)components.push({text,italic})}
  const title=meta.title || book.titulo
  if(kind==='chapter'){
    add(author+' ('+year+'). '+(meta.translators?.length ? title.replace(/[.!?]$/u,'') : period(title)))
    if(meta.translators?.length) add(' ('+joinPeople(meta.translators,apaEditorName)+(meta.translators.length===1?', Trad.':', Trads.')+').')
    add(' En ')
    if(meta.editor) add(apaEditorName(meta.editor)+' (Ed.), ')
    add(meta.bookTitle || '[Título del volumen por verificar]',true)
    const details=[]
    if(meta.pages)details.push('pp. '+meta.pages)
    if(meta.volume)details.push('vol. '+meta.volume)
    if(details.length)add(' ('+details.join(', ')+')')
    add('.'+(meta.publisher?' '+period(meta.publisher):''))
  } else if(kind==='article'||kind==='fragment'){
    add(author+' ('+year+'). '+period(title))
    if(meta.bookTitle){
      add(' En ')
      if(meta.editor)add(apaEditorName(meta.editor)+' (Ed.), ')
      add(meta.bookTitle,true)
      add('.'+(meta.publisher?' '+period(meta.publisher):''))
    }
    if(meta.journal){add(' ');add(meta.journal,true);add('.')}
  }else{
    add(author+' ('+year+'). ')
    add(title,true)
    const roles=[]
    if(meta.translators?.length)roles.push(joinPeople(meta.translators,apaEditorName)+(meta.translators.length===1?', Trad.':', Trads.'))
    if(meta.editor)roles.push(apaEditorName(meta.editor)+', Ed.')
    if(meta.volume)roles.push('vol. '+meta.volume)
    if(roles.length)add(' ('+roles.join('; ')+')')
    if(kind==='manuscript')add(' ['+(meta.descriptor||'Manuscrito no publicado')+']')
    add('.'+(meta.publisher?' '+period(meta.publisher):''))
  }
  if(meta.url) add(' '+meta.url)
  const text=components.map(c=>c.text).join('')
  return {parts:components,text,year,kind,issues,status:issues.length?'pendiente':'preparada',studyPart:meta.studyPart||null,
    originalYear:meta.originalYear||null}
}
