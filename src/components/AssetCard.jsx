import React from 'react';
import '../styles/AssetCard.css';
import { MdFavorite } from 'react-icons/md';
import { AppContext } from '../context/AppContext';

export const AssetCard = ({ item, findLogo}) => {
    const {states:{theme,favorites},
            setStates:{onHandleFavorite,setModalInfo}} = React.useContext(AppContext)

    const isInFavorites = (item) => {
        const find = favorites.find(fav => fav === item)
        if (!find) {
            return (false);
        }
        return (true);
    }

    return (
        <div className={`card-container${theme ? '-darktheme' : ''}`}>

            <div className='top-card' onClick={() => { setModalInfo(item) }}>
                <img src={findLogo[0]?.url} alt='crypto-logo' />
            </div>

            <div className='mid-card'>
                <p>{item.name}</p>
            </div>

            <div className={`footer-card${theme ? '-darktheme' : ''}`}>
                <div className='info-card'>
                    <p>{item.asset_id}</p>
                    <p>USD ${parseFloat(item?.price_usd).toFixed(3)}</p>
                </div>

                <div className='fav-button'>
                    <button onClick={() => { onHandleFavorite(item) }} >
                        <MdFavorite color={isInFavorites(item) ? '#041a5c' : 'white'} />
                        Favoritos
                    </button>
                </div>
            </div>
        </div>
    )
}
