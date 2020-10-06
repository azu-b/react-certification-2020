import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Error = styled.div`
  font-family: 'Folks Normal';
  color: #9c0000;
  font-size: 32px;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 36px;
    margin: 20px auto;
  }
`;

export { Container, Error };
