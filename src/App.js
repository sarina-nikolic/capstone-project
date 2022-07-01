import styled from 'styled-components';

import ImageContainer from './components/imageContainer';

export default function App() {
  return (
    <AppContainer>
      <Title>My minimalist wardrobe</Title>

      <ImageContainer />
    </AppContainer>
  );
}

function getUniqueValues(someArray) {
  const uniqueValues = [...new Set(someArray.map(element => element.color))];
  console.log(`uniqueValues: ${uniqueValues}`);
  return uniqueValues;
}

const AppContainer = styled.main`
  margin: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
`;
