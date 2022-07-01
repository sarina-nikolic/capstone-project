import {useEffect, useState} from 'react';
import styled from 'styled-components';

import garments from '../garmentsData.js';

export default function Category() {
  const [garmentList, setGarmentList] = useState([]);

  // useEffect(() => {
  //     setGarmentList(defaultCategory);
  // }, []);

  // function getFilteredCategory() {
  //     if (!selectedCategory) {
  //         return garmentList;
  //     }
  //     return garmentList.filter((item) => item.color === selectedCategory);

  //     function handleCategoryChange(event) {
  //         setSelectedCategory(event.target.value);

  //     }

  // }
}
