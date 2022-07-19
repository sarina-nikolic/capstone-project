import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import FavoritesPage from './components/Favorites';
import Home from './components/Home';
import Main from './components/Main';
import data from './garmentsData';
import {setToLocal, getFromLocal} from './lib/localStorage.js';

export default function App() {
  const [garments, setGarments] = useState(data);

  const [garment, setGarment] = useState(getFromLocal('garment') ?? data);

  useEffect(() => setToLocal('garment', garment), [garment]);

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main garments={garments} />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}
