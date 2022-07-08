import {useMemo, useState} from 'react';
import styled from 'styled-components';

import ToggleBookmark from './components/bookmark';
import BrandCategoryFilter from './components/brandCategoryFilter';
import ColorCategoryFilter from './components/colorCategoryFilter';
import ImageContainer from './components/imageContainer';
import data from './garmentsData';

export default function App() {
  const [garments] = useState(data);
  const [colorList, setColorList] = useState();
  const [brandList, setBrandList] = useState();

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
  let filteredBrandList = useMemo(getFilteredBrandList, [brandList, garments]);

  function toggleBookmark() {
    
  }

  return (
    <AppContainer>
      <Title>My minimalist wardrobe</Title>
      <ColorCategoryFilter onColorChange={handleColorChange} />
      <BrandCategoryFilter onBrandChange={handleBrandChange} />
      <ToggleBookmark onToggleBookmark={toggleBookmark} />

      <ImageContainer garments={filteredColorList} />
      <ImageContainer garments={filteredBrandList} />
    </AppContainer>
  );
}

const AppContainer = styled.main`
  margin: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
`;
