// Funciones de consulta reutilizables por la interfaz y las pruebas.
// Mantener la relación autor–obra trazable a los nombres ya catalogados.
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
  const key = normalizeLibraryText(surnameFromAuthorRecord(author))
  if (!key) return false
  // Algunos registros indican explícitamente dos autores mediante "y".
  return String(book.autor ?? '').split(/\s+y\s+/i)
    .some(piece => normalizeLibraryText(piece.trim()) === key)
}

export function worksByAuthor(books, author) {
  return books.filter(book => isWorkByAuthor(book, author))
}
