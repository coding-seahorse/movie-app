import { Modal } from './components/Modal';
import tmdb from './tmdb.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { WatchList } from './WatchList';
import { Home } from './Home';
import { Navbar } from './components/Navbar';


import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [favMovies, setFavMovies] = useState([]);
  const [movies, setMovies] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [count, setCount] = useState(1);
  const [movie, setMovie] = useState([]);
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(true);
  const [inputText, setInputText] = useState('');

  const inputTextHandler = e => {
    e.preventDefault()
    setInputText(e.target.value);
    fetchSearchResults(e);
  }

  const fetchSearchResults = async (e) => {
    const response = await fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=7a2217921d3c9ee38c5433fe2fbcb7ba&language=en-US&query=${e.target.value}&page=1&include_adult=false`);
    const data = await response.json();
    setSearchedMovies(data);
    console.log(data);
    if (e.target.value === '') setSearching(true);
    else setSearching(false);

  }

  const addFavMovies = (e, movie) => {
    e.stopPropagation();
    favMovies.includes(movie) ? setFavMovies(favMovies.filter(el => el !== movie)) : setFavMovies([...favMovies, movie]);
  }

  const removeFavMovies = (e, movie) => {
    e.stopPropagation();
    setFavMovies(favMovies.filter((e, i) => e !== movie));
  }

  const openModal = () => setOpen(true);

  const closeModal = (e) => {
    if (e.target.className === 'modal-wrapper' || e.target.tagName === 'BUTTON') setOpen(false);
  }


  const fetchMovie = async (movie) => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=7a2217921d3c9ee38c5433fe2fbcb7ba&language=en-US`);
    const data = await response.json();
    setMovie(data);
    setOpen(true);
  }

  const getData = async () => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7a2217921d3c9ee38c5433fe2fbcb7ba&language=en-US&page=${count}`);
    const data = await response.json();
    setMovies(data.results);
  }

  const nextPage = () => setCount(prev => prev + 1);

  const prevPage = () => setCount(prev => prev - 1);

  useEffect(() => {
    getData();
  }, [count])


  return (
    <BrowserRouter>
      <div className="App">
        <Modal movie={movie} open={open} closeModal={closeModal} addFavMovies={addFavMovies} />
        <header>
          <Navbar inputTextHandler={inputTextHandler} inputText={inputText} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home count={count} inputText={inputText} searchedMovies={searchedMovies} searching={searching} fetchMovie={fetchMovie} movie={movie} movies={movies} nextPage={nextPage} prevPage={prevPage} openModal={openModal} addFavMovies={addFavMovies} />} />
            <Route path="/WatchList" element={<WatchList removeFavMovies={removeFavMovies} favMovies={favMovies} fetchMovie={fetchMovie} movie={movie} movies={movies} openModal={openModal} nextPage={nextPage} addFavMovies={addFavMovies} />} />
          </Routes>
        </main >
        <footer>
          <p> @ 2023 | Made by <span>Edward Byrne</span></p>
          <img src={tmdb} alt="logo" />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
