import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'

function FavoritesList({moviesToShow})  {

    return (
        <div>
            <h1>Favorites</h1>
            {moviesToShow && moviesToShow.map(el => 
                <MovieCard image={el.info.image_url} title={el.title} year={el.year} genre={el.info.genres}/>
                )}
            
        </div>
    )
}

export default FavoritesList
