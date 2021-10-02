import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import FavoriteButton from '../FavoriteButton/FavoriteButton'

function MovieList({moviesToShow, addFavorite})  {

    return (
        <div>
            <h1>Movies</h1>
            {moviesToShow && moviesToShow.slice(0, 3).map(el => {
                return <div>
                <MovieCard addFavorite={addFavorite} key={el.title} image={el.info.image_url} title={el.title} year={el.year} genre={el.info.genres}/>
                <FavoriteButton addFavorite={addFavorite} fav={el}/>
                </div>}
                )}
            
        </div>
    )
}

export default MovieList
