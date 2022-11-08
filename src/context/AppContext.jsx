import React from "react";
import { useAssets } from "../hooks/useAssets";
import { useFavorites } from "../hooks/useFavorites";

export const AppContext = React.createContext();

export const AppContextProvider = ({children}) =>{
    const [theme,setTheme] = React.useState(false);
    const {cryptoInfo, cryptoLogos, isLoading} = useAssets();
    const {onHandleFavorite,favorites:{favorites}} = useFavorites();
    const [modalInfo,setModalInfo] = React.useState(null);
    const [toggleMenu, setToggleMenu] = React.useState(false);


    return(
        <AppContext.Provider value={{states:{theme,cryptoInfo,cryptoLogos,isLoading,favorites,modalInfo,toggleMenu}
                                    ,setStates:{setTheme,onHandleFavorite,setModalInfo,setToggleMenu}}}>
            {children}
        </AppContext.Provider>
    );
}