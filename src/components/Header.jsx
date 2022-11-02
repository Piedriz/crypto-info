import React from 'react'
import Switcher from './Switcher'
import '../styles/Header.css'
import { ThemeContext } from '../context/ThemeContext'

export const Header = () => {
    const {theme,setTheme} = React.useContext(ThemeContext)
    return (
        <header className={`header${theme ? '-darktheme' : ''}`}>
            <nav className='nav-bar'>
                <h1 className='app-title'>Crypto info</h1>
                <Switcher state={theme} setState={setTheme}/>
            </nav>
        </header>
    )
}
