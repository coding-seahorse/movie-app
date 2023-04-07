import { Movie } from './components/Movie.js';
import { SearchedMovies } from './components/SearchedMovies';


export const Home = ({ fetchMovie, movies, nextPage, prevPage, movie, openModal, addFavMovies, searching, searchedMovies, inputText, count }) => {

    return (
        <>
            {!searching ? (
                <h2>Found {searchedMovies.total_results} matches for "{inputText}"</h2>
            ) : (
                <h2>Popular movies</h2>
            )}


            {searching ? (
                movies && <Movie fetchMovie={fetchMovie} movie={movie} movies={movies} openModal={openModal} nextPage={nextPage} addFavMovies={addFavMovies} />
            ) : (
                <SearchedMovies searchedMovies={searchedMovies} fetchMovie={fetchMovie} addFavMovies={addFavMovies} />
            )}


            {searching ? (
                <div className="pagination">

                    {count > 1 ? (
                        <a onClick={prevPage}>Previous</a>
                    ) : null}
                    <a onClick={nextPage}>Next</a>
                </div>
            ) : null}


        </>

    )
}
