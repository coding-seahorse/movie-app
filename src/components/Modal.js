export const Modal = ({ open, movie, closeModal, addFavMovies }) => {

  if (!open) return null

  return (
    <div className="modal-wrapper" onClick={(e) => closeModal(e)}>
      <div className="modal-content">

        <div className="modal-img" style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}>
          <button className='modal-close-button' onClick={closeModal}>X</button>

          <div className="buttons-wrapper">
            <a className='play-button'>Play</a>

          </div>

        </div>

        <div className="modal-info-wrapper">

          <h3>{movie.title}</h3>

          <div className="info-row">
            <span>{movie.release_date.slice(0, 4)} </span>
            <span>{`${movie.runtime} mins`}</span>
          </div>

          <p>{movie.overview}</p>

          <div className="info-wrapper">
            <span className='info-label'>Genres: </span>
            <span className='info-description'>{movie.genres.map(genre => genre.name + ',').join(' ').slice(0, -1)}</span>
          </div>

          <div className="info-wrapper">
            <span className='info-label'>Rating: </span>
            <span className='info-description'>{movie.vote_average.toString().slice(0, 3)}</span>
          </div>

          <div className="info-wrapper">
            <span className='info-label'>Original Language: </span>
            <span className='info-description'>{movie.original_language[0].toUpperCase() + movie.original_language.slice(1)}</span>
          </div>
          {movie.production_companies.length >= 1 ? (
            <div className="info-wrapper">
              <span className='info-label'>Studio: </span>
              <span className='info-description'>{movie.production_companies[0].name}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
