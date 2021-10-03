import React from 'react'
import style from './FavoriteButton.module.css'

function FavoriteButton ({addFavorite, fav}) {

    return (
        <div>
            <button onClick={(event) => {
                event.preventDefault();
                addFavorite(fav)
            }}
            className={style.favButton}
            >AddFavorite</button>
        </div>
    )
}

export default FavoriteButton
