import React from 'react'
import Switcher from './Switcher'
import '../styles/Header.css'
import { AppContext } from '../context/AppContext'
import {GrBitcoin} from 'react-icons/gr'
import {AiFillCloseCircle} from 'react-icons/ai'

export const Header = () => {
    const {states:{theme,toggleMenu},setStates:{setTheme,setToggleMenu}} = React.useContext(AppContext)
    return (
        <header className={`header${theme ? '-darktheme' : ''}`}>
            <nav className='nav-bar'>
                <button onClick={()=>{setToggleMenu(!toggleMenu)}} className='favorites-button' type='button'>
                    {!toggleMenu ? 
                        <GrBitcoin color={'rgb(72, 83, 247)'} size={'2rem'}/> : 
                        <AiFillCloseCircle color='#d14a4a' size={'2rem'}/> 
                    }
                </button>
                <h1 className='app-title'>Crypto info</h1>
                <Switcher state={theme} setState={setTheme}/>
            </nav>
        </header>
    )
}
