import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import style from './FavoritesList.module.css'


function FavoritesList({favoritesToShow})  {

    return (
        <div className={style.favMainContainer}>
            
            <div className={style.listTitleContainer}>
                <h1>Favorites</h1>
            </div>
            
            <div className={style.favListContainer}>
                {favoritesToShow && favoritesToShow.map(el => 
                    <MovieCard 
                    image={el.info.image_url} 
                    title={el.title} 
                    year={el.year} 
                    genre={el.info.genres}/>
                    )}
            </div>
            
        </div>
    )
}

export default FavoritesList
