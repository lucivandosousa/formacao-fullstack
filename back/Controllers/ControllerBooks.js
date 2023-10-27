import { getAllBooks, getBookById, addNewBook, updateBookId, deleteBookById } from "../Services/ServiceBooks.js"

function getBooks(req, res) {
  try {
    const books = getAllBooks()
    res.send(books)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function getBookId(req, res) {
  try {
    const id = req.params.id
    if (id && Number(id)) {
      const book = getBookById(id)
      res.send(book)
    } else {
      res.status(422)
      res.send('ID inválido.')
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function addBook(req, res) {
  try {
    const { id, nome } = req.body
    addNewBook({ id, nome })
    res.status(201)
    res.send('Livro adicionado com sucesso.')
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function updateBook(req, res) {
  try {
    const { id } = req.params
    if (id && Number(id)) {
      const body = req.body
      updateBookId(id, body)
      res.send('Livro atualizado com sucesso.')
    } else {
      res.status(422)
      res.send('ID inválido.')
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function deleteBook(req, res) {
  try {
    const { id } = req.params
    if (id && Number(id)) {
      deleteBookById(id)
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
  getBooks,
  getBookId,
  addBook,
  updateBook,
  deleteBook
}