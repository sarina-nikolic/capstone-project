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

const StyledBox = styled.div`
  margin: 2rem;
  padding: 2rem;

  img {
    width: 100%;
    height: auto;
    border: 3px solid lightgrey;
  }
`;
