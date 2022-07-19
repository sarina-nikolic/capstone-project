import {Routes, Route} from 'react-router-dom';

import FavoritesPage from './components/Favorites';
import Home from './components/Home';
import Main from './components/Main';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}
