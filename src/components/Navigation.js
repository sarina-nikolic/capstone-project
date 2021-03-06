import {AiFillHome} from 'react-icons/ai';
import {AiFillPlusCircle} from 'react-icons/ai';
import {FaHeart} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavigationsContainer>
      <StyledNavigationsLink to="/main" aria-label="main">
        <MainIcon />
      </StyledNavigationsLink>

      <StyledNavigationsLink to="/favorites" aria-label="favorites">
        <HeartIcon />
      </StyledNavigationsLink>

      <StyledNavigationsLink to="/addphotos" aria-label="addphotos">
        <AddIcon />
      </StyledNavigationsLink>
    </NavigationsContainer>
  );
}

const NavigationsContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  z-index: 1;
  place-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  border: 2px solid lightgrey;
  border-radius: 0.2rem;
  background-color: #a9d0f5;
`;

const StyledNavigationsLink = styled(NavLink)`
  margin: 0.2rem;
  padding: 0.1rem;
  color: white;

  &.active {
    animation: 1s linear;
    color: #1e90ff;
  }
`;

const MainIcon = styled(AiFillHome)`
  font-size: 2rem;
`;

const HeartIcon = styled(FaHeart)`
  font-size: 1.8rem;
`;

const AddIcon = styled(AiFillPlusCircle)`
  font-size: 2rem;
`;
