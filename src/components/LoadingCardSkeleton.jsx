import React from 'react'
import '../styles/LoadingCardSkeleton.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ThemeContext } from '../context/ThemeContext'

export const LoadingCardSkeleton = ({ ncards }) => {

  const {theme} = React.useContext(ThemeContext)
  return (Array(ncards).fill(0).map((_,i) => {
    return (
      <div className='card-skeleton-div' key={i}>
      <Skeleton baseColor={theme ? '#585858':'#b7b7b7'} height={'100%'} />
      </div>
    )}))
}

