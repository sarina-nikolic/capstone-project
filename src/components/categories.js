import {useState, useMemo} from 'react';
import styled from 'styled-components';

import Item from './Item.js';

//function GetUniqueValues(someArray) {
//const uniqueValues = [...new Set(someArray.map(element => element.color))];
//console.log(`uniqueValues: ${uniqueValues}`);
//return uniqueValues(<StyledGetUniqueValues />);
//}

export default function GetUniqueValues({garments}) {
  const [garmentList] = useState([]);
  const [colorList, setColorList] = useState();
  const [brandList, setBrandList] = useState();

  function getFilteredList() {
    if (!colorList) {
      return garmentList;
    }
    return garmentList.filter(item => item.color === colorList);
  }
  function getFilteredBrandList() {
    return garmentList.filter(item => item.brand === brandList);
  }

  let filteredList = useMemo(getFilteredList, [colorList, garmentList]);
  let filteredBrandList = useMemo(getFilteredBrandList, [brandList, garmentList]);
  function handleColorChange(event) {
    setColorList(event.target.value);
  }
  function handleBrandChange(event) {
    setBrandList(event.target.value);
  }

  return (
    <StyledGetUniqueValues>
      <FilterContainer>
        <div>
          <select name="color-list" id="color-list" onChange={handleColorChange}>
            <option value="">color</option>
            <option value="navy">navy</option>
            <option value="white">white</option>
          </select>
          <select name="brand-list" id="brand-list" onChange={handleBrandChange}>
            <option value="">brand</option>
            <option value="&other stories">&other stories</option>
            <option value="Ralph Lauren">Ralph Lauren</option>
            <option value="H&M">H&M</option>
            <option value="Tommy Hilfiger">Tommy Hilfiger</option>
          </select>
        </div>
      </FilterContainer>
      <div className="color-list">
        {filteredList.map((img, index) => (
          <Item {...img} key={index} />
        ))}
      </div>
      <div className="brand-list">
        {filteredBrandList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div>

    </StyledGetUniqueValues>
  );
}

const StyledGetUniqueValues = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
`;

const FilterContainer = styled.div`
  margin: 0.2rem;
`;
