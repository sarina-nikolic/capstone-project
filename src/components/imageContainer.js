import styled from 'styled-components';

import garments from '../garmentsData.js';

function ImageContainer() {
  return (
    <StyledBox>
      {garments.map(garment => {
        return <img key={garment.id} src={garment.image} alt={garment.imgAltText} />;
      })}
    </StyledBox>
  );
}

export default ImageContainer;

const StyledBox = styled.ul`
  margin: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: start;
  align-content: start;
  gap: 0.5rem;

  img {
    width: 100%;
    height: auto;
    border: 3px solid lightgrey;
  }
`;
