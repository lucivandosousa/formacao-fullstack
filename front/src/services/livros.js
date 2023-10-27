import axios from "axios"

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/books" })

async function getLivros() {
  const response = await livrosAPI.get('/')

  return response.data
}

export {
  getLivros
}