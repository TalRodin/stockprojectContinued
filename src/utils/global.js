import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing:inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size:62.5%;
    box-sizing:border-box;
    --color-main: ${props => props.theme.colors.main}

    @media ${props => props.theme.mediaQueries.small}{
      font-size: 60%;
    }
    @media ${props => props.theme.mediaQueries.small}{
      font-size: 55%;
    }
    
  }
  

`