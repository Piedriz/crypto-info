import React, { useState, useContext, useMemo, useRef, useCallback } from 'react';
import { Header } from '../components/Header';
import { AssetCard } from '../components/AssetCard';
import { SearchImput } from '../components/SearchImput';
import { CardsContainer } from '../containers/CardsContainer';
import { MainContainer } from '../containers/MainContainer';
import { FavoritesContainer } from '../containers/FavoritesContainer';
import '../styles/App.css';
import { AppContext } from '../context/AppContext';
import { LoadingCardSkeleton } from '../components/LoadingCardSkeleton';

import { AssetInfoModal } from '../components/AssetInfoModal';
import { FavoritesAside } from '../containers/FavoritesAside';
const App = () => {

  const {
    states: { theme, cryptoInfo, cryptoLogos, isLoading, favorites, modalInfo, toggleMenu }
  } = useContext(AppContext)

  const [search, setSearch] = useState('');
  const searchImput = useRef(null);

  const handleSearch = useCallback(() => {
    setSearch(searchImput.current.value)
  }, [])

  const filteredAssets = useMemo(() =>
    cryptoInfo.filter(asset => {
      return (asset.name.toLowerCase().includes(search.toLowerCase()))
    }),
    [cryptoInfo, search]
  )

  const findLogos = (item) => {
    return (cryptoLogos.filter(i => i.asset_id === item.asset_id))
  }

  document.body.style = `background-color: ${theme ? 'rgb(46, 46, 46);' : 'rgb(201, 199, 199);'} color: ${theme ? 'white;' : ' black;'}`

  return (
    <MainContainer>
      <Header />

      {favorites[0] &&
        <FavoritesContainer />
      }

      {toggleMenu &&
        <FavoritesAside />
      }

      {!toggleMenu &&
        <SearchImput
          reference={searchImput}
          search={search}
          handleSearch={handleSearch}
        />}

      <CardsContainer>
        {isLoading ? <LoadingCardSkeleton ncards={10} /> : null}
        {filteredAssets.map(item => {
          //  
          return (
            <AssetCard
              key={item.asset_id}
              item={item}
              findLogo={findLogos(item)}
            />
          )
        })}
      </CardsContainer>
      {modalInfo &&
        <AssetInfoModal
          img={findLogos(modalInfo)}
          item={modalInfo} />
      }
    </MainContainer>
  )
}
export default App
