import { createGlobalStyle } from 'styled-components';
import FolksNormalWoff from './fonts/FolksNormal.woff';
import FolksNormalWoff2 from './fonts/FolksNormal.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Folks Normal';
    src: local('Folks Normal'), local('Folks Normal'),
    url(${FolksNormalWoff2}) format('woff2'),
    url(${FolksNormalWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  a, a:visited, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
