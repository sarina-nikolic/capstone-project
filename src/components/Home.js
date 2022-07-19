import {TbHanger} from 'react-icons/tb';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import icon from '../images/bluesilk.jpg';

export default function Home() {
  return (
    <StyledHome>
      <Title>
        My minimalist wardrobe
        <Header>
          re:use <br /> re:wear <br /> re:love
        </Header>
      </Title>
      <NavLink to="/">
        <img src={icon} alt="blue silk" />
        <HangerIcon />
      </NavLink>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  margin: auto;
  font-size: 2rem;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: grey;
  display: flex;
`;

const Header = styled.p`
  font-size: 0.8rem;
`;

const HangerIcon = styled(TbHanger)``;
