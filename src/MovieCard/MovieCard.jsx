import React from 'react'
import style from './MovieCard.module.css'

function MovieCard ({image, title, year, genre}) {
    const posterurl = 'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/star-wars-last-jedi-poster.jpg'
    
    return (
        <div className={style.cardContainer}>
            
            <img src={posterurl} alt='Movie Image' className={style.moviePoster}/>
            <div className={style.titleContainer}>
                <h1 className={style.titles}>{title}</h1>
            </div>
           
            <div className={style.textContainer}>
                <p>Release year: {year}</p>
                <p>{genre}</p>
            </div>
           
        </div>
    )
}

export default MovieCard
