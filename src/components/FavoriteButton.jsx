import React from 'react'
import { MdFavorite } from 'react-icons/md/';

export const FavoriteButton = ({color}) => {
    return (

        <MdFavorite size={'20px'}
            style={
                { color: {color}, cursor: 'pointer' }
            }
        />

    )
}
