import axios from 'axios'

export const searchMovies = (searchTerm) => {
  return axios.get(`http://www.omdbapi.com/?s=${encodeURI(searchTerm)}&apikey=81b47993`)
}
