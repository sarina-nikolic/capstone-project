import {useMemo, useState} from 'react';
import styled from 'styled-components';

import ColorCategoryFilter from './components/xcolorCategoryFilter';
import ImageContainer from './components/ximageContainer';
import data from './garmentsData';

export default function App() {
  const [garments] = useState(data);
  const [colorList, setColorList] = useState();
  const [brandList, setBrandList] = useState();
  const [favorite, setFavorite] = useState([]);

  function handleColorChange(event) {
    setColorList(event.target.value);
  }
  function handleBrandChange(event) {
    setBrandList(event.target.value);
  }

  function getFilteredColorList() {
    if (!colorList) {
      return garments;
    }
    return garments.filter(item => item.color === colorList);
  }

 function getFilteredBrandList() {
    if (!brandList) {
      return garments;
    }
    return garments.filter(item => item.brand === brandList);
  }

  let filteredColorList = useMemo(getFilteredColorList, [colorList, garments]);
 // let filteredBrandList = useMemo(getFilteredBrandList, [brandList, garments]);

  const addToFavorites = id => {
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
  };

  return (
    <AppContainer>
      <Title>My minimalist wardrobe</Title>

      <ColorCategoryFilter onColorChange={handleColorChange} />

      <ImageContainer garments={filteredColorList} favorite={favorite} onAddToFavorites={addToFavorites} />
    </AppContainer>
  );
}

const AppContainer = styled.main`
  margin: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-decoration: underline;
  color: grey;
`;
