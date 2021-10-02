import React, { useEffect, useState } from 'react';
import './App.css';
import FavoritesList from './FavoritesList/FavoritesList';
import MovieList from './MovieList/MovieList';
import SearchBar from './SearchBar/SearchBar';


function App() {
  const [movieList, setMovieList ] = useState()
  const [favorites, setFavorites] = useState()


  useEffect(() => {
    fetch('http://localhost:8000/movies')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setMovieList(data)
      
    })
  }, [])


  function onSearch(movie) {
    const foundMovie = movieList.filter(el => el.title === movie )
    setMovieList(foundMovie)
    console.log(foundMovie)
  }



  return (
    <div>
      <h1>MOVIE DATA APP</h1>
      <SearchBar onSearch={onSearch}/>
      <MovieList moviesToShow={movieList}/>
      <FavoritesList moviesToShow={movieList}/>
      
    </div>
  );
}

export default App;
