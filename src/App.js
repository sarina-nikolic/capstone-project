import {useEffect, useState} from 'react';
import styled from 'styled-components';

import BookmarkButton from './components/BookmarkButton';
import CategoryFilter from './components/CategoryFilter';
import ImageContainer from './components/ImageContainer';
import data from './garmentsData';
import {setToLocal, getFromLocal} from './lib/localStorage.js';

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

 /* const likedGarment = garment.filter(garment => garment.isLiked);

  function BookmarkButton(id) {
    const index = garment.findIndex(garment => garment._id === id);
    const newFavorite = garment.find(garment => garment._id === id);
    const tempFavorites = [
      ...garment.slice(0, index),
      {...newFavorite, isLiked: !newFavorite.isLiked},
      ...garment.slice(index + 1),
    ];
    setGarment(tempFavorites);
  } */

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
