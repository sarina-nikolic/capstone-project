import styled from 'styled-components';

import GetUniqueValues from './components/Categories';
import ImageContainer from './components/imageContainer';

export default function App() {
  return (
    <AppContainer>
      <Title>My minimalist wardrobe</Title>
      <GetUniqueValues />
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
