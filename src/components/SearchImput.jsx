import React from 'react'
import '../styles/SearchImput.css'
import {FaSearchDollar} from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
export const SearchImput = ({search,handleSearch,reference}) => {
  const {theme} = React.useContext(ThemeContext);
  return (
    <div className={`search`}>
      <FaSearchDollar className='search-icon'/>
        <input placeholder='Busca un activo' className={`search-input${theme ? '-darkmode' : ''}`} type='text' ref={reference} value={search} onChange={handleSearch} />
    </div>
  )
}
