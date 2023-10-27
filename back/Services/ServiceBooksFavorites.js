import fs from 'fs'

function getAllBooksFavorites() {
  return JSON.parse(fs.readFileSync('favorites.json'))
}

function addNewBookFavorite(id) {
  const books = JSON.parse(fs.readFileSync('db.json'))
  const booksFavorites = JSON.parse(fs.readFileSync('favorites.json'))

  const bookFiltred = books.find(book => book.id === id)
  const newList = [...booksFavorites, bookFiltred]
  fs.writeFileSync('favorites.json', JSON.stringify(newList))
}

function deleteBookFavoriteById(id) {
  const books = JSON.parse(fs.readFileSync('favorites.json'))
  const booksFiltred = books.filter((book) => book.id != id)
  fs.writeFileSync('favorites.json', JSON.stringify(booksFiltred))
}

export {
  getAllBooksFavorites,
  addNewBookFavorite,
  deleteBookFavoriteById
}
