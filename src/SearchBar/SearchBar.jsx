import React, { useState } from 'react'
import style from './SearchBar.module.css'

function SearchBar({onSearch, onGoBack}) {
    const [movie, setMovie] = useState("")

    return (
        <div className={style.mainSearchContainer}>
            <form onSubmit={(event) => {
                event.preventDefault();
                onSearch(movie);
                setMovie("")
                }}>
            <input 
                type="text"
                placeholder="Find a movie..."
                value={movie}
                onChange={event => setMovie(event.target.value)}
                className={style.searchBarstyle}
            />
            <input 
                type="submit" value="Search"
                className={style.searchButton}
            
            />
            </form>

            <button onClick={(event) => {
                event.preventDefault();
                onGoBack()
                }}
                className={style.backButton}
            >Back to all movies</button>
            
        </div>
    )
}

export default SearchBar
