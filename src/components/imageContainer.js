import { useState } from 'react';
import styled from 'styled-components';

export default function imageContainer() {
  const [images, setImages] = useState(data);
  return (
    <StyledBox>
      {images.map(image => {
        return (
          <>
          <img key={image.id} src={image.image} alt={image.altIMG}/>
        </>
        );
      })}
    </StyledBox>
  );
}

const StyledBox= styled.div`
margin: 1rem;
padding: 2rem;
`;
