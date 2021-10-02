import React from 'react'

function FavoriteButton ({addFavorite, fav}) {

    return (
        <div>
            <button onClick={(event) => {
                event.preventDefault();
                addFavorite(fav)
               
            }}
            >AddFavorite</button>
        </div>
    )
}

export default FavoriteButton
