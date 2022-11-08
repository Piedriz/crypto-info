import React from 'react'
import '../styles/FavoritesAside.css'
import { AppContext } from '../context/AppContext'
export const FavoritesAside = () => {

    const { states: { theme, favorites, cryptoLogos},
        setStates: { setModalInfo }
    } = React.useContext(AppContext)

    const findLogo = (favID) => {
        const logo = (cryptoLogos.filter(logo => logo.asset_id === favID))
        return (logo[0].url)
    }

    return (
        <aside className={`menu-container${theme ? '-darktheme' : ''}`}>
            <h3>Favoritos</h3>
            {!favorites[0] && <h3>Agregue activos a favoritos</h3>}
            <div className={`menu-favorites-container${theme ? '-darktheme' : ''}`}>
                {favorites.map(fav => {
                    return (
                        <div key={fav.asset_id} className={`favorite-menu${theme ? '-darktheme' : ''}`}>
                            <img onClick={() => { setModalInfo(fav) }} className='favorite-img-menu' src={findLogo(fav.asset_id)} alt={fav.asset_id} />
                        </div>
                    )
                })}
            </div>
        </aside>
    )
}
