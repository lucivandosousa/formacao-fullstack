import { getAllBooksFavorites, addNewBookFavorite, deleteBookFavoriteById } from "../Services/ServiceBooksFavorites.js"

function getBooksFavorites(req, res) {
  try {
    const books = getAllBooksFavorites()
    res.send(books)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function addBookFavorite(req, res) {
  try {
    const { id } = req.params
    addNewBookFavorite(id)
    res.status(201)
    res.send('Livro adicionado com sucesso.')
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function deleteBookFavorite(req, res) {
  try {
    const { id } = req.params
    if (id && Number(id)) {
      deleteBookFavoriteById(id)
      res.send('Livro deletado com sucesso.')
    } else {
      res.status(422)
      res.send('ID inválido.')
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export {
  getBooksFavorites,
  addBookFavorite,
  deleteBookFavorite
}