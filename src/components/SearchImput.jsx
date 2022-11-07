import React from 'react'
import '../styles/SearchImput.css'
import {FaSearchDollar} from 'react-icons/fa'
import { AppContext } from '../context/AppContext'
export const SearchImput = ({search,handleSearch,reference}) => {
  const {states:{theme}} = React.useContext(AppContext)
  return (
    <div className='search'>
      <FaSearchDollar className='search-icon'/>
        <input placeholder='Busca un activo' className={`search-input${theme ? '-darkmode' : ''}`} type='text' ref={reference} value={search} onChange={handleSearch} />
    </div>
  )
}
