import styled from 'styled-components';

const Item = ({color}) => (
  <ItemContainer>
    <ItemLabel>
      <span>Color:</span>
      {color}
    </ItemLabel>
  </ItemContainer>
);

export default Item;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 1rem;
  border: 1px solid black;
`;

const ItemLabel = styled.div`
  font-weight: 600;
  margin-right: 8px;
`;
