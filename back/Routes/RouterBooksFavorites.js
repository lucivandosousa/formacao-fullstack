import { Router } from "express"
import { getBooksFavorites, addBookFavorite, deleteBookFavorite } from "../Controllers/ControllerBooksFavorites.js"

export const routerFavorites = Router()

routerFavorites.get('/', getBooksFavorites)
routerFavorites.post('/:id', addBookFavorite)
routerFavorites.delete('/:id', deleteBookFavorite)