import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
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
  display: block;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 250px;

    svg {
      display: none;
    }
  }
`;

const MenuItem = styled.div`
  display: none;
  color: white;
  font-size: 18px;
  font-weight: 500;

  @media (min-width: 768px) {
    display: block;
  }
`;

export { Container, SearchBar, SearchContainer, Menu, MenuItem };
