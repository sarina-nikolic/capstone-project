import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

//import BookmarkButton from './components/BookmarkButton';

import Navigation from './components/Navigation';
import data from './garmentsData';
import {setToLocal, getFromLocal} from './lib/localStorage.js';
import FavoritesPage from './pages/Favorites';
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

  const likedGarments = garments.filter(garment => garment.isLiked);
  function toggleBookmark(id) {
    const index = garments.findIndex(garment => garments.id === id);
    const newFavorite = garments.find(garment => garment.id === id);
    const actualFavorites = [
      ...garments.slice(0, index),
      {...newFavorite, isLiked: !newFavorite.isLiked},
      ...garments.slice(index + 1),
    ];
    setGarments(actualFavorites);
  }

  return (
    <>
      <Navigation />
      <Title>My minimalist wardrobe</Title>
      <Routes>
        <Route path="/" element={<Home onFilterChange={handleFilterChange} garments={filteredList} />} />
        <Route path="/favorites" element={<FavoritesPage garments={likedGarments} toggleBookmark={toggleBookmark} />} />
      </Routes>
    </>
  );
}

const Title = styled.h1`
  font-size: 2rem;
  text-decoration: underline;
  color: grey;
`;
