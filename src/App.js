import styled from 'styled-components';

import ImageContainer from './components/ImageContainer';

export default function App() {
  return (
    <AppContainer>
      <Title>My minimalist wardrobe</Title>
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
