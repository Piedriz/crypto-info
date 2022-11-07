import React from "react";

//initialState
const initialState = {
    favorites: []
}

//ActionsTypes
const actionTypes = {
    add: 'ADD_TO_FAVORITE',
    delete: 'DELETE_FAVORITE'
}

const favoritesReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.add:
            const isInFavorites = state.favorites.findIndex(i => i===action.payload);
            if(isInFavorites === -1){
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                };
            }else{
                state.favorites.splice(isInFavorites,1)
                return {
                    ...state,
                    favorites: [...state.favorites]
                };
            }
            
        case actionTypes.delete:
            const toDelete = state.favorites.findIndex(action.payload)
            return{
                ...state,
                favorites: [...state.favorites].splice(toDelete,1)
            }
        default:
            return state;
    }
}

export const useFavorites = () =>{
    const [favorites, dispatch] = React.useReducer(favoritesReducer, initialState);
    const onHandleFavorite = (asset) => { dispatch({ type: actionTypes.add, payload: asset })}
    const onDelete = (asset) => { dispatch({ type: actionTypes.delete, payload: asset }) }

    return({onHandleFavorite,favorites})
}