import {Link} from 'react-router-dom';
import styled from 'styled-components';

import icon from '../images/bluesilk.jpg';

export default function Home() {
  return (
    <StyledHome>
      <Link to="/">
        <img src={icon} alt="blue silk" />
      </Link>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  margin: auto;
  font-size: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;
