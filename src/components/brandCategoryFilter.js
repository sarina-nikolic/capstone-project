import styled from 'styled-components';

export default function BrandCategoryFilter({onBrandChange}) {
  return (
    <StyledCategories>
      <select name="brand-list" id="brand-list" onChange={onBrandChange}>
        <option value="">brand</option>
        <option value="&other stories">&other stories</option>
        <option value="Tommy Hilfiger">Tommy Hilfiger</option>
        <option value="Ralph Lauren">Ralph Lauren</option>
        <option value="H&M">H&M</option>
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
