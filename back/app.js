import express from 'express'
import { router } from './Routes/RouterBooks.js'
import { routerFavorites } from './Routes/RouterBooksFavorites.js'
import cors from 'cors'

const app = express()
const port = 8000

app.use(express.json())
app.use(cors({origin: '*'}))

app.use('/books', router)
app.use('/favorites', routerFavorites)

app.listen(port, () => console.log(`Server listen on port ${port}`))