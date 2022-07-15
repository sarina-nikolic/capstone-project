import styled from 'styled-components';

import BookmarkButton from './BookmarkButton';

export default function ImageContainer({garments}) {
  return (
    <StyledBox>
      {garments.map(garment => {
        return (
          <GarmentContainer key={garment.id}>
            <img src={garment.image} alt={garment.imgAltText} />
            <BookmarkButton />
          </GarmentContainer>
        );
      })}
    </StyledBox>
  );
}

const GarmentContainer = styled.div`
  position: relative;
`;

const StyledBox = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: start;
  gap: 0.5rem;

  img {
    width: 100%;
    height: auto;
    border: 2px solid lightgrey;
  }
`;
