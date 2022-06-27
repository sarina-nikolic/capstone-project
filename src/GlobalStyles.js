import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Quicksand;
  }

  .font-link {
    font-family: Quicksand, sans-serif;
  }
`;
