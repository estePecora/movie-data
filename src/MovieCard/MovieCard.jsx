import React from 'react'

function MovieCard ({image, title, year, genre}) {
    return (
        <div>
            <h1>Image{image}</h1>
            <h1>Title{title}</h1>
            <p>year{year}</p>
            <p>genre{genre}</p>
        </div>
    )
}

export default MovieCard
