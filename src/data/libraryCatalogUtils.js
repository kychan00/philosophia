// Correspondencia explícita entre firmas abreviadas de obra y fichas canónicas de autor.
// Evitar dividir apellidos compuestos ("Ortega y Gasset") en supuestos coautores.
export const libraryAuthorAliases = {
  "Reale y Antiseri": ["Reale, Giovanni", "Antiseri, Dario"],
  "Ortega y Gasset": ["Ortega y Gasset, José"],
  "Barceló": ["Barceló Aspeitia, Axel Arturo"],
  "Hartnack": ["Hartnack, Justus"],
  "Pelayo": ["Rodríguez Pelayo, Cristian Alejandro"],
}

export function normalizeLibraryText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ø/g, 'o')
    .replace(/Ø/g, 'o')
    .replace(/æ/g, 'ae')
    .replace(/Æ/g, 'ae')
    .replace(/ß/g, 'ss')
    .toLocaleLowerCase('es')
}

export function surnameFromAuthorRecord(author) {
  return String(author ?? '').split(',')[0].trim()
}

export function isWorkByAuthor(book, author) {
  const key=String(book.autor||'').trim()
  const fixed=libraryAuthorAliases[key]
  if(fixed) return fixed.includes(author)
  const surname=normalizeLibraryText(surnameFromAuthorRecord(author))
  if(!surname) return false
  if(normalizeLibraryText(key)===surname) return true
  // Sólo para autorías múltiples que no tengan un alias explícito.
  return key.split(/\s+y\s+/i).some(x=>normalizeLibraryText(x.trim())===surname)
}

export function worksByAuthor(books, author) {
  return books.filter(book=>isWorkByAuthor(book,author))
}

export function authorsForWork(book, authors) {
  return authors.filter(a=>isWorkByAuthor(book,a))
}
