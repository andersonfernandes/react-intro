import { useState } from 'react'

import MovieItem from './MovieItem'
import Loading from '../Loading'

import { searchMovies } from '../../services/movies'

const EmptySearch = () => <h3>A busca não retornou resultados!</h3>

export default function MoviesList() {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const doSearch = () => {
    setLoading(true)

    searchMovies(searchTerm).then(({ data }) => {
      if (data.Response === 'True') setMovies(data.Search)
      else setMovies([])
    }).finally(() => setLoading(false))
  }

  return (
    <>
      <h1>Buscador de Filmes</h1>

      <input
        type="text"
        onChange={({ target: { value } }) => setSearchTerm(value)}
      /> 
      <button
        type="button"
        onClick={doSearch}
      >
        Buscar
      </button>
      {loading && <Loading width="18px" height="18px" />}

      {movies.length === 0 && <EmptySearch />}

      {movies.map(movieData => <MovieItem key={movieData.imdbID} movieData={movieData} />)}
    </>
  )
}
