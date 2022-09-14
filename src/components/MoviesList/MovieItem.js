export default function MovieItem({ movieData }) {
  return (
    <div>
      <img src={movieData.Poster} alt={movieData.Title} width="100px" />
      <span>{movieData.Title}</span>
    </div>
  )
}
