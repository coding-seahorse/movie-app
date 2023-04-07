import eye from '../eye.png';

export const Movie = ({ movies, fetchMovie, addFavMovies }) => {
    return (
        <div className="movies-wrapper">
            {movies.map(movie => (
                <div className="movie-poster" onClick={() => fetchMovie(movie)}>
                    <img key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie poster" />
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