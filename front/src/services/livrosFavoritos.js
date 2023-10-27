import axios from "axios"

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/favorites" })

async function getLivrosFavoritos() {
  const response = await livrosAPI.get('/')

  return response.data
}

async function postLivrosFavoritos(id) {
  await livrosAPI.post(`/${id}`)
}

async function deleteLivrosFavoritos(id) {
  await livrosAPI.delete(`/${id}`)
}

export {
  getLivrosFavoritos,
  postLivrosFavoritos,
  deleteLivrosFavoritos
}