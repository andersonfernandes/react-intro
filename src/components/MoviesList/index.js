import { useState } from 'react'
import MovieSearch from '../MovieSearch'

import MovieItem from './MovieItem'

const EmptySearch = () => <h3>A busca não retornou resultados!</h3>

export default function MoviesList() {
  const [movies, setMovies] = useState([])

  return (
    <>
      <h1>Buscador de Filmes</h1>

      <MovieSearch setMovies={setMovies} />

      {movies.length === 0 && <EmptySearch />}

      <div className="movies-list">
        {movies.map(movieData => <MovieItem key={movieData.imdbID} movieData={movieData} />)}
      </div>
    </>
  )
}
