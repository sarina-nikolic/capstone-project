import styled from 'styled-components';

import ImageContainer from './ImageContainer';
import Navigation from './Navigation';

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
  font-size: 2rem;
  color: grey;
`;
