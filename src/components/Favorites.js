import styled from 'styled-components';

import ImageContainer from './ImageContainer';
import Navigation from './Navigation';

export default function FavoritesPage({garments}) {
  return (
    <>
      <Heading>My favorites</Heading>

      <Navigation />
      <StyledImageContainer>
        <ImageContainer garments={garments} />
      </StyledImageContainer>
    </>
  );
}

const Heading = styled.h1`
  margin: 1rem;
  font-size: 2rem;
  color: grey;
`;

const StyledImageContainer = styled.div`
  margin: 1rem;
  img {
    width: 100%;
    height: auto;
    border: 2px solid lightgrey;
    border-radius: 5px;
  }
`;
