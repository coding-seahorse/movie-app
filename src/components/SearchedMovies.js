import eye from '../eye.png';

export const SearchedMovies = ({searchedMovies, fetchMovie, addFavMovies}) => {
  return (
    <div className="movies-wrapper">

    {searchedMovies.results.map((movie, i) => (
        <div className="movie-poster" key={i}  onClick={() => fetchMovie(movie)} >
            <img  key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie poster" />
            <div className="movie-overlay">
                <div className="like-backdrop">
                <img src={eye} alt="eye" onClick={(e) => addFavMovies(e, movie)} />
                </div>
            </div>
        </div>

    ))}
</div>
  )
}
