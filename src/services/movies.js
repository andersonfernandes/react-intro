import axios from 'axios'

export const searchMovies = async (searchTerm) => {
  return new Promise((resolve, _) => {
    axios
      .get(`http://www.omdbapi.com/?s=${encodeURI(searchTerm)}&apikey=81b47993`)
      .then(({ data }) => {
        if (data.Response === 'True') resolve(data.Search)
        else resolve([])
      })
  })
}
