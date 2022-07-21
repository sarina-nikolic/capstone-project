import {useState} from 'react';
import styled from 'styled-components';

import CategoryFilter from './CategoryFilter';
import ImageContainer from './ImageContainer';
import Navigation from './Navigation';

export default function Main({garments, toggleBookmark}) {
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
      <Navigation />
      <Title>
        My minimalist wardrobe
        <Header>
          re:use <br /> re:wear <br /> re:love
        </Header>
      </Title>
      <CategoryFilter onFilterChange={handleFilterChange} />
      <ImageContainer garments={filteredList} toggleBookmark={toggleBookmark} />
    </AppContainer>
  );
}

const Title = styled.h1`
  font-size: 2rem;
  color: grey;
  display: flex;
`;

const Header = styled.p`
  font-size: 0.8rem;
`;

const AppContainer = styled.main`
  margin: 1rem;
  margin-bottom: 3.5rem;
`;
