import { Router } from "express"
import {getBooks, getBookId, addBook, updateBook, deleteBook} from "../Controllers/ControllerBooks.js"

export const router = Router()

router.get('/', getBooks)
router.get('/:id', getBookId)
router.post('/', addBook)
router.patch('/:id', updateBook)
router.delete('/:id', deleteBook)