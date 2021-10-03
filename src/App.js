import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import FavoritesList from './FavoritesList/FavoritesList';
import MovieList from './MovieList/MovieList';
import SearchBar from './SearchBar/SearchBar';

const favLocalStorage = JSON.parse(localStorage.getItem('favorites') || '[]')

function App() {
  const [movieToShow, setMovieToShow] = useState()
  const [movieResult, setMovieResult] = useState()
  const [favorites, setFavorites] = useState(favLocalStorage)

  
  useEffect(() => {
    fetch('http://localhost:8000/movies')
    .then(res => {
      return res.json()
    })
    .then(data => {
      return setMovieToShow(data)
      
    })
  }, [])


  useEffect(() => {
   localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])


  function onSearch(movie) {
    fetch('http://localhost:8000/movies')
    .then(res => {
      return res.json()
    })
    .then(data => {
      const foundMovie = data.filter(el => el.title === movie )
      return setMovieResult(foundMovie)
    
    })

  }

  function onGoBack() {
    setMovieResult(undefined)
  }


  function addFavorite(fav) {
    favorites.some(el => el.title === fav.title) ? console.log('hay titulo')
    : setFavorites([...favorites, fav]);
  
  }


  return (
    <div className={style.appMainContainer}>
      <h1 className={style.appTitle}>MOVIE DATA APP</h1>
      <SearchBar onSearch={onSearch} onGoBack={onGoBack}/>
      <MovieList 
        moviesToShow={movieToShow} 
        movieResult={movieResult} 
        addFavorite={addFavorite}/>
      <FavoritesList favoritesToShow={favorites}/>
      
    </div>
  );
}

export default App;
