import React from 'react'
import '../styles/FavoritesContainer.css'
import { AppContext } from '../context/AppContext'
export const FavoritesContainer = ({ favorites, cryptoLogos,setModalInfo }) => {
    const {theme} = React.useContext(AppContext);

    const findLogo = (favID) => {
        const logo = (cryptoLogos.filter(logo => logo.asset_id === favID))
        return (logo[0].url)
    }

    return (
        <div className='container'>
        <div className={`favorites-container${theme ? '-darktheme':''}`}>
            {favorites.map(fav => {
                return (
                    <div key={fav.asset_id} className={`favorite${theme ? '-darktheme':''}`}>
                        <img onClick={()=>{setModalInfo(fav)}} className='favorite-img' src={findLogo(fav.asset_id)} alt="" />
                    </div>
                )
            })}
        </div>
        </div>
    )
}
