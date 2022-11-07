import React,{ useState, useContext, useMemo, useRef, useCallback } from 'react';
import { Header } from '../components/Header';
import { AssetCard } from '../components/AssetCard';
import { SearchImput } from '../components/SearchImput';
import { CardsContainer } from '../containers/CardsContainer';
import { MainContainer } from '../containers/MainContainer';
import { FavoritesContainer } from '../containers/FavoritesContainer';
import '../styles/App.css';
import { AppContext } from '../context/AppContext';
import { useAssets } from '../hooks/useAssets';
import { LoadingCardSkeleton } from '../components/LoadingCardSkeleton';
import { useFavorites } from '../hooks/useFavorites';
import { useModal } from '../hooks/useModal';

import { AssetInfoModal } from '../components/AssetInfoModal';
const App = () => {

  const { cryptoInfo, cryptoLogos, isLoading } = useAssets();

  const {states:{theme}} = React.useContext(AppContext)

  const [search, setSearch] = useState('');

  const { modalInfo, setModalInfo } = useModal();

  const searchImput = useRef(null);
  const { onHandleFavorite, onDelete, favorites } = useFavorites();


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
  const favoritesArray = favorites.favorites

  return (
    <MainContainer>
      <Header />

      {favoritesArray[0] &&
        <FavoritesContainer
          setModalInfo={setModalInfo}
          favorites={favorites.favorites}
          cryptoLogos={cryptoLogos}
        />}

      <SearchImput
        reference={searchImput}
        search={search}
        handleSearch={handleSearch}
      />

      <CardsContainer>
        {isLoading ? <LoadingCardSkeleton ncards={10} /> : null}
        {filteredAssets.map(item => {
          //  
          return (
            <AssetCard
              favorites={favoritesArray}
              key={item.asset_id}
              theme={theme}
              item={item}
              findLogo={findLogos(item)}
              onHandleFavorite={onHandleFavorite}
              onDelete={onDelete}
              setModalInfo={setModalInfo} />
          )
        })}
      </CardsContainer>
      {modalInfo && <AssetInfoModal img={findLogos(modalInfo)} setModalInfo={setModalInfo} item={modalInfo} />}
    </MainContainer>
  )
}
export default App
