import styled from 'styled-components';

export default function ColorCategoryFilter({onColorChange}) {
  return (
    <StyledCategories>
      <select name="color-list" id="color-list" onChange={onColorChange}>
        <option value="">color</option>
        <option value="navy">navy</option>
        <option value="white">white</option>
      </select>
    </StyledCategories>
  );
}

const StyledCategories = styled.form`
  display: flex;
  align-items: row;
`;
