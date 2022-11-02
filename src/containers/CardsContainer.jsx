import React from 'react'
import '../styles/CardsContainer.css'

export const CardsContainer = ({ children }) => {
    return (
        <div className='cards-container'>
            {children}
        </div>

    )
}
