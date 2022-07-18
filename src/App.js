import {useEffect, useState} from 'react';
import styled from 'styled-components';

//import BookmarkButton from './components/BookmarkButton';

import Navigation from './components/Navigation';
import data from './garmentsData';
import {setToLocal, getFromLocal} from './lib/localStorage.js';
import Home from './pages/Home';

export default function App() {
  const [garments, setGarments] = useState(data);
  const [filterList, setFilterList] = useState({
    color: 'all',
    brand: 'all',
  });
  const [garment, setGarment] = useState(getFromLocal('garment') ?? data);

  useEffect(() => setToLocal('garment', garment), [garment]);

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
      <Title>My minimalist wardrobe</Title>
      <Home onFilterChange={handleFilterChange} garments={filteredList} />
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
