import {Link} from 'react-router-dom';
import styled from 'styled-components';



export default function Home() {
  return (
    <AppContainer>
      <Title>My minimalist wardrobe </Title>
      <NavigationContainer>
        <
      </NavigationContainer>
    </AppContainer>
  );
}

const AppContainer = styled.main`
  margin: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-decoration: underline;
  color: grey;
`;
