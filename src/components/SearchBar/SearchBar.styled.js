import styled from 'styled-components';

const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  font-size: 14px;
  font-family: 'Heebo Light';
  padding: 0 5px;
  border: none;
  box-shadow: inset 0px 0px 11px -4px #9d80ff;
`;

const Container = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
`;

const SearchButton = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  background-color: transparent;
  display: flex;
  cursor: pointer;
`;

export { SearchInput, Container, SearchButton };
