import styled from 'styled-components';

import CategoryFilter from '../components/CategoryFilter';
import ImageContainer from '../components/ImageContainer';

export default function Home({onFilterChange, garments}) {
  return (
    <AppContainer>
      <CategoryFilter onFilterChange={onFilterChange} />
      <ImageContainer garments={garments} />
    </AppContainer>
  );
}

const AppContainer = styled.main`
  margin: 1rem;
  text-align: center;
`;
