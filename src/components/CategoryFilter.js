import styled from 'styled-components';

export default function CategoryFilter({onFilterChange}) {
  return (
    <StyledCategories>
      <select name="color-list" id="color-list" onChange={event => onFilterChange(event, 'color')}>
        <option value="all">color</option>
        <option value="navy">navy</option>
        <option value="white">white</option>
        <option value="lightblue">lightblue</option>
        <option value="beige">beige</option>
        <option value="yellow">yellow</option>
        <option value="red">red</option>
      </select>
      <select name="brand-list" id="brand-list" onChange={event => onFilterChange(event, 'brand')}>
        <option value="all">brand</option>
        <option value="&other stories">&other stories</option>
        <option value="Tommy Hilfiger">Tommy Hilfiger</option>
        <option value="Ralph Lauren">Ralph Lauren</option>
        <option value="H&M">H&M</option>
        <option value="Zara">Zara</option>
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
