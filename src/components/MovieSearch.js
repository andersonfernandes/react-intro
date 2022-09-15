import { useState } from 'react'

import Loading from './Loading'
import { searchMovies } from '../services/movies'

export default function MovieSearch({ setMovies }) {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const doSearch = () => {
    setLoading(true)

    searchMovies(searchTerm).then((data) => {
      setMovies(data)
    }).finally(() => setLoading(false))
  }

  const handleEnter = ({ charCode }) => charCode === 13 && doSearch()

  return (
    <div>
      <input
        type="text"
        onChange={({ target: { value } }) => setSearchTerm(value)}
        onKeyPress={handleEnter}
      /> 
      <button
        type="button"
        onClick={doSearch}
      >
        Buscar
      </button>
      {loading && <Loading width="18px" height="18px" />}
    </div>
  ) 
}
