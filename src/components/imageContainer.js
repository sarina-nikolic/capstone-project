import styled from 'styled-components';

import BookmarkButton from './bookmarkButton';

export default function ImageContainer({garments}) {
  return (
    <Section>
      <StyledBox>
        {garments.map(garment => {
          return (
            <>
              <img key={garment.id} src={garment.image} alt={garment.imgAltText} />
              <BookmarkButton />
            </>
          );
        })}
      </StyledBox>
    </Section>
  );
}

const Section = styled.div`
  position: relative;
`;

const StyledBox = styled.div`
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
