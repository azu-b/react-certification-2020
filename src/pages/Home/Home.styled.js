import styled from 'styled-components';

const Container = styled.main`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: 'Folks Normal';
  font-size: 32px;
  font-weight: 600;
  color: #000080;
  margin: 20px;

  @media (min-width: 768px) {
    margin: 20px auto;
  }
`;

const Load = styled.div`
  font-family: 'Heebo Regular';
  color: #0093ff;
  font-size: 28px;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin: 20px auto;
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

export { Container, Title, Load, Error };
