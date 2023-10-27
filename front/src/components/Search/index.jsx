import { useEffect, useState } from 'react'
import './style.css'
import { getLivros } from '../../services/livros'
import { postLivrosFavoritos } from '../../services/livrosFavoritos'

export default function Search() {

  const [livroPesquisado, setLivroPesquisado] = useState([])
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetchLivros()
  }, [])

  async function fetchLivros() {
    const livrosAPI = await getLivros()
    setLivros(livrosAPI)
  }

  async function insereLivroFavorito(id) {
    await postLivrosFavoritos(id)
    alert('Livro adicionado a favoritos.')
  }

  console.log(livroPesquisado)

  return (
    <section>
      <h2>Já sabe por onde começar?</h2>
      <h3>Encontre seu livro em nossa estante.</h3>
      <input
        type="text"
        placeholder='Escreva sua próxima leitura'
        onBlur={(e) => {
          const textoDigitado = e.target.value
          const resultadoPesquisa = livros.filter((livro) => livro.nome.includes(textoDigitado))
          setLivroPesquisado(resultadoPesquisa)
        }}
      />
      {livroPesquisado.map(livro => (
        <div key={livro.id} id='resultSearch' onClick={() => insereLivroFavorito(livro.id)}>
          <p>{livro.nome}</p>
          <img src={livro.src} alt={livro.nome} />
        </div>
      ))}
    </section>
  )
}