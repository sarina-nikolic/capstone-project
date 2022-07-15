import {useState} from 'react';
import styled from 'styled-components';

import CategoryFilter from './components/CategoryFilter';
import ImageContainer from './components/ImageContainer';
import data from './garmentsData';

export default function App() {
  const [garments, setGarments] = useState(data);
  const [filterList, setFilterList] = useState({
    color: 'all',
    brand: 'all',
  });

  function handleFilterChange(event, filterKeyToChange) {
    if (filterKeyToChange === 'color') {
      setFilterList({...filterList, color: event.target.value});
    }
    if (filterKeyToChange === 'brand') {
      setFilterList({...filterList, brand: event.target.value});
    }
  }

  let filteredList = garments.filter(garment => {
    if (filterList.color === 'all' && filterList.brand === 'all') {
      return true;
    } else if (filterList.color === 'all' && filterList.brand === garment.brand) {
      return true;
    } else if (filterList.color === garment.color && filterList.brand === 'all') {
      return true;
    } else if (filterList.color === garment.color && filterList.brand === garment.brand) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <AppContainer>
      <Title>My minimalist wardrobe</Title>
      <CategoryFilter onFilterChange={handleFilterChange} />
      <ImageContainer garments={filteredList} />
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
