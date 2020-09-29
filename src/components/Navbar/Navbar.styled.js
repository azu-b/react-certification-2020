import styled from 'styled-components';

const Container = styled.div`
  z-index: 1;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  height: 50px;
  background-color: #b399ff;
  box-shadow: 0px 0px 13px -3px black;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

const SearchBar = styled.input`
  width: 200px;
  height: 30px;
  font-size: 14px;
  border: none;
  box-shadow: inset 0px 0px 11px -4px #9d80ff;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;

  @media (min-width: 768px) {
    width: 280px;
  }
`;

const Menu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 250px;
  }
`;

const OpenMenu = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-right: 1px solid #c4b3ff;
  box-shadow: 0px 0px 13px -3px black;
  width: 200px;
  height: 100%;
  background-color: white;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  width: 100%;
  color: #3d0099;
  font-family: 'Arial';
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
  border-bottom: 1px solid #c4b3ff;

  @media (min-width: 768px) {
    color: white;
    border: none;
  }
`;

const Button = styled.div``;

const HamburgerButton = styled(Button)`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

export {
  Container,
  SearchBar,
  SearchContainer,
  Menu,
  MenuItem,
  OpenMenu,
  HamburgerButton,
};
