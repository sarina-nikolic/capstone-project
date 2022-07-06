import {useMemo, useState} from 'react';
import styled from 'styled-components';

import GetUniqueValues from './components/Categories';
import ImageContainer from './components/imageContainer';
import data from './garmentsData';

export default function App() {
  const [garments] = useState(data);

  const [colorList, setColorList] = useState();

  function handleColorChange(event) {
    setColorList(event.target.value);
  }

  function getFilteredList() {
    if (!colorList) {
      return garments;
    }
    return garments.filter(item => item.color === colorList);
  }

  let filteredColorList = useMemo(getFilteredList, [colorList, garments]);

  return (
    <AppContainer>
      <Title>My minimalist wardrobe</Title>
      <GetUniqueValues onColorChange={handleColorChange} />
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
`;
