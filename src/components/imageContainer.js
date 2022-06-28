import {useState} from 'react';
import styled from 'styled-components';

import data from '../imageData.js';

function ImageContainer() {
  const [image] = useState(data);
  return (
    <StyledBox>
      {image.map(image => {
        return <img key={image.id} src={image.image} alt={image.altIMG} />;
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
