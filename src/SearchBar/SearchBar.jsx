import React, { useState } from 'react'

function SearchBar({onSearch}) {
    const [movie, setMovie] = useState("")

    return (
        <div>
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
                
            />
            <input 
            type="submit" value="Search"
            
            />
            </form>
            
        </div>
    )
}

export default SearchBar
