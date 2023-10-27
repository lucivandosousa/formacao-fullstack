import './Favoritos.css'
import { deleteLivrosFavoritos, getLivrosFavoritos } from '../../services/livrosFavoritos.js'
import { useEffect, useState } from 'react'

function Favoritos() {

  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchLivrosFavoritos()
  }, [])

  async function fetchLivrosFavoritos() {
    const livrosFavoritos = await getLivrosFavoritos()
    setFavoritos(livrosFavoritos)
  }

  async function deletarFavorito(id) {
    await deleteLivrosFavoritos(id)
    await fetchLivrosFavoritos()
    alert('Livro deletado dos favoritos.')
  }

  return (
    <div className='Favoritos'>
      <h2>Aqui estão seus livros favoritos:</h2>
      <div className='resultadoContainer'>
        {favoritos.map(favorito => (
          <div key={favorito.id} className='resultado' onClick={() => deletarFavorito(favorito.id)}>
            <p>{favorito.nome}</p>
            <img src={favorito.src}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favoritos
