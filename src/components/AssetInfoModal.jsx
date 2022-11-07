import React from 'react'
import ReactDOM from 'react-dom';
import { AppContext } from '../context/AppContext';
import '../styles/AssetInfoModal.css'

const modalContainer = document.querySelector('#modal');

export const AssetInfoModal = ({ item, img }) => {
    const { setStates: { setModalInfo } } = React.useContext(AppContext)
    return (
        ReactDOM.createPortal(
            <div className='modal'>
                <div className='modal-container'>
                    <div className='modal-asset-img'>
                        <img src={img[0].url} alt={img.asset_id} />
                    </div>
                    <div className='modal-asset-info'>
                        <ul className='modal-asset-info-list'>
                            <li><strong>Precio Actual:</strong> ${item.price_usd}</li>
                            <li><strong>Volumen(1hr):</strong> ${item.volume_1hrs_usd}</li>
                            <li><strong>Volumen(1day):</strong> ${item.volume_1day_usd}</li>
                            <li><strong>Volumen(1mth):</strong> ${item.volume_1mth_usd}</li>
                        </ul>

                        <button className='modal-close' onClick={() => { setModalInfo(null) }}>Close</button>
                    </div>
                </div>

            </div>, modalContainer)
    )
}