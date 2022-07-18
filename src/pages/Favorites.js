//import {FaHeart} from 'react-icons/fa';
import styled from 'styled-components';

//import BookmarkButton from '../components/BookmarkButtonBookmarkButton';

export default function FavoritesPage({onToggleBookmark}) {
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

  return <Heading>My favorites</Heading>;
}

const Heading = styled.h1`
  color: hotpink;
`;
