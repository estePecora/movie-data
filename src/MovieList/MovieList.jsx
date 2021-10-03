import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import style from './MovieList.module.css'

function MovieList({moviesToShow, movieResult, addFavorite})  {

    return (
        <div className={style.moviesMainContainer}>

                <div className={style.listTitleContainer}>
                    <h1>Movies</h1>
                </div>

        {movieResult.length != 0 ? 

            <div className={style.movieListContainer}>
            {movieResult && movieResult.map(el => {
                return <div>
                <MovieCard 
                    addFavorite={addFavorite} 
                    key={el.title} 
                    image={el.info.image_url} 
                    title={el.title} year={el.year} 
                    genre={el.info.genres}/>
                <FavoriteButton 
                    addFavorite={addFavorite} 
                    fav={el}/>
                </div>
                }
            )}
            </div>

            :

            <div className={style.movieListContainer}>
            {moviesToShow && moviesToShow.slice(0, 3).map(el => {
                return <div>
                <MovieCard 
                    addFavorite={addFavorite} 
                    key={el.title} 
                    image={el.info.image_url} 
                    title={el.title} year={el.year} 
                    genre={el.info.genres}/>
                <FavoriteButton 
                    addFavorite={addFavorite} 
                    fav={el}/>
                </div>
                }
            )}
            </div>

    
    
    
    }
                
            
        </div>
    )
}

export default MovieList
