import {useMemo, useState} from 'react';
import styled from 'styled-components';

import CategoryFilter from './components/CategoryFilter';
import ImageContainer from './components/ImageContainer';
import data from './garmentsData';

export default function App() {
  const [garments] = useState(data);
  const [colorList, setColorList] = useState();

  function handleColorChange(event) {
    setColorList(event.target.value);
  }

  function getFilteredColorList() {
    if (!colorList) {
      return garments;
    }
    return garments.filter(item => item.color === colorList);
  }

  let filteredColorList = useMemo(getFilteredColorList, [colorList, garments]);

  return (
    <AppContainer>
      <Title>My minimalist wardrobe</Title>
      <CategoryFilter onColorChange={handleColorChange} />
      <ImageContainer garments={filteredColorList} />
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
