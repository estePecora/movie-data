import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'

function MovieList({moviesToShow})  {

    return (
        <div>
            <h1>Movies</h1>
            {moviesToShow && moviesToShow.slice(0, 3).map(el => 
                <MovieCard key={el.title} image={el.info.image_url} title={el.title} year={el.year} genre={el.info.genres}/>
                )}
            
        </div>
    )
}

export default MovieList
