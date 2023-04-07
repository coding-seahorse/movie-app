import eye from './/eye.png';

export const WatchList = ({ favMovies, fetchMovie, removeFavMovies }) => {

    return (
        <>
            {favMovies.length < 1 ? (
                <p>Your watchlist is empty.</p>
            ) : (
                <div className="movies-wrapper">

                    {favMovies.map((movie, i) => (
                        <div className="movie-poster" key={i} onClick={() => fetchMovie(movie)}>
                            <img key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie poster" />
                            <div className="movie-overlay">
                                <div className="like-backdrop">
                                    <img src={eye} alt="eye" onClick={(e) => removeFavMovies(e, movie)} />
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </>
    )
}
