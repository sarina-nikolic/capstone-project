import {AiOutlineHome} from 'react-icons/ai';
import {AiFillPlusCircle} from 'react-icons/ai';
import {FaHeart} from 'react-icons/fa';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavigationsContainer>
      <StyledNavigationsLink to="/" aria-label="home">
        <HomeIcon />
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
  padding: 0.5rem;
  margin: 0.5rem;
  z-index: 1;
  place-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  border: 2px solid darkgrey;
  border-radius: 1rem;
  background-color: lightgrey;
`;

const StyledNavigationsLink = styled.a`
  margin: 0.2rem;
  padding: 0.1rem;
`;

const HomeIcon = styled(AiOutlineHome)`
  font-size: 2rem;
  color: white;
`;

const HeartIcon = styled(FaHeart)`
  font-size: 1.8rem;
  color: white;
`;

const AddIcon = styled(AiFillPlusCircle)`
  font-size: 2rem;
  color: white;
`;
