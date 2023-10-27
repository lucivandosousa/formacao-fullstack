import fs from 'fs'

function getAllBooks() {
  return JSON.parse(fs.readFileSync('db.json'))
}

function getBookById(id) {
  const books = JSON.parse(fs.readFileSync('db.json'))
  const bookFiltred = books.filter((book) => book.id == id)
  const [book] = bookFiltred
  return book
}

function addNewBook(book) {
  const books = JSON.parse(fs.readFileSync('db.json'))
  fs.writeFileSync('db.json', JSON.stringify([...books, book]))
}

function updateBookId(id, data) {
  let books = JSON.parse(fs.readFileSync('db.json'))
  const indice = books.findIndex(book => book.id == id)
  const changes = {...books[indice], ...data}
  books[indice] = changes
  fs.writeFileSync('db.json', JSON.stringify(books))
}

function deleteBookById(id) {
  const books = JSON.parse(fs.readFileSync('db.json'))
  const booksFiltred = books.filter((book) => book.id != id)
  fs.writeFileSync('db.json', JSON.stringify(booksFiltred))
}

export {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBookId,
  deleteBookById
}
