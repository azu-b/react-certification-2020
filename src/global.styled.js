import { createGlobalStyle } from 'styled-components';
import FolksNormalWoff from './fonts/FolksNormal.woff';
import FolksNormalWoff2 from './fonts/FolksNormal.woff2';
import HeeboRegularWoff from './fonts/HeeboRegular.woff';
import HeeboRegularWoff2 from './fonts/HeeboRegular.woff2';
import HeeboLightWoff from './fonts/HeeboLight.woff';
import HeeboLightWoff2 from './fonts/HeeboLight.woff2';
import HeeboMediumWoff from './fonts/HeeboMedium.woff';
import HeeboMediumWoff2 from './fonts/HeeboMedium.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Folks Normal';
    src: local('Folks Normal'), local('Folks Normal'),
    url(${FolksNormalWoff2}) format('woff2'),
    url(${FolksNormalWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Heebo Light';
    src: local('Heebo Light'), local('Heebo Light'),
    url(${HeeboLightWoff2}) format('woff2'),
    url(${HeeboLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Heebo Regular';
    src: local('Heebo Regular'), local('Heebo Regular'),
    url(${HeeboRegularWoff2}) format('woff2'),
    url(${HeeboRegularWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Heebo Medium';
    src: local('Heebo Medium'), local('Heebo Medium'),
    url(${HeeboMediumWoff2}) format('woff2'),
    url(${HeeboMediumWoff}) format('woff');
    font-weight: 600;
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
