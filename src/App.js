import styled from 'styled-components';

import GetUniqueValues from './components/Categories';
import ImageContainer from './components/imageContainer';

export default function App() {
  const garments = [
    {
      id: '1',
      image: '/images/bluejumper.jpg',
      imgAltText: 'blue jumper',
      size: 'XS',
      color: 'navy',
      material: 'cotton',
      brand: '&other stories',
    },
    {
      id: '2',
      image: '/images/blueskirt.jpg',
      imgAltText: 'blue skirt',
      size: '164',
      color: 'navy',
      material: 'cotton',
      brand: 'Tommy Hilfiger',
    },
    {
      id: '3',
      image: '/images/stripedshirt.jpg',
      imgAltText: 'striped shirt',
      size: '34',
      color: 'blue white striped',
      material: 'cotton',
      brand: 'Ralph Lauren',
    },
    {
      id: '4',
      image: '/images/whitetop.jpg',
      imgAltText: 'white top',
      size: 'XS',
      color: 'white',
      material: 'cotton',
      brand: 'H&M',
    },
  ];
 

  

  return (
    <AppContainer>
      <Title>My minimalist wardrobe</Title>
      <GetUniqueValues garments={garments} />
      <ImageContainer />
    </AppContainer>
  );
}

const AppContainer = styled.main`
  margin: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
`;
