import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home/Home.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index.jsx'
import Favoritos from './routes/Favoritos/Favoritos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          exact path='/'
          element={<Home />}
        />
        <Route 
          path='/favoritos'
          element={<Favoritos />}
        />
        <Route
          path='/categorias'
          element={<p>Categorias</p>}
        />
        <Route
          path='/estante'
          element={<p>Estante</p>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
