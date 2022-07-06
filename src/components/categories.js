import styled from 'styled-components';

export default function Categories({onColorChange}) {
  return (
    <StyledCategories>
      <FilterContainer>
        <div>
          <select name="color-list" id="color-list" onChange={onColorChange}>
            <option value="">color</option>
            <option value="navy">navy</option>
            <option value="white">white</option>
          </select>
        </div>
      </FilterContainer>
    </StyledCategories>
  );
}

const StyledCategories = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
`;

const FilterContainer = styled.div`
  margin: 0.2rem;
`;
