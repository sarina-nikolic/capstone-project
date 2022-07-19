//import {FaHeart} from 'react-icons/fa';
import styled from 'styled-components';

import ImageContainer from './ImageContainer';
import Navigation from './Navigation';

//import BookmarkButton from '../components/BookmarkButtonBookmarkButton';

export default function FavoritesPage({garments}) {
  return (
    <>
      <Heading>My favorites</Heading>

      <Navigation />
      <ImageContainer garments={garments} />
    </>
  );
}

const Heading = styled.h1`
  color: hotpink;
`;
