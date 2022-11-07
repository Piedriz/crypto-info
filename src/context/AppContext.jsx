import React from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({children}) =>{
    const [theme,setTheme] = React.useState(false);

    return(
        <AppContext.Provider value={{theme,setTheme}}>
            {children}
        </AppContext.Provider>
    );
}