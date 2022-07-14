import styled from 'styled-components';

export default function ColorCategoryFilter({onColorChange}) {
  return (
    <StyledCategories>
      <select name="color-list" id="color-list" onChange={onColorChange}>
        <option value="">color</option>
        <option value="navy">navy</option>
        <option value="white">white</option>
        <option value="lightblue">lightblue</option>
      </select>
    </StyledCategories>
  );
}

const StyledCategories = styled.form`
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
`;
