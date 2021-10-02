import React, { useEffect, useState } from 'react';
import './App.css';
import FavoritesList from './FavoritesList/FavoritesList';
import MovieList from './MovieList/MovieList';
import SearchBar from './SearchBar/SearchBar';

const favLocalStorage = JSON.parse(localStorage.getItem('favorites') || '[]')

function App() {
  const [movieList, setMovieList ] = useState()
  const [favorites, setFavorites] = useState(favLocalStorage)

  
  useEffect(() => {
    fetch('http://localhost:8000/movies')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setMovieList(data)
      
    })
  }, [])

  useEffect(() => {
   localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])


  function onSearch(movie) {
    const foundMovie = movieList.filter(el => el.title === movie )
    setMovieList(foundMovie)
    
  }


  function addFavorite(fav) {
    favorites.some(el => el.title === fav.title) ? console.log('hay titulo')
    : setFavorites([...favorites, fav]);
  
  }


  return (
    <div>
      <h1>MOVIE DATA APP</h1>
      <SearchBar onSearch={onSearch}/>
      <MovieList moviesToShow={movieList} addFavorite={addFavorite}/>
      <FavoritesList moviesToShow={favorites}/>
      
    </div>
  );
}

export default App;
