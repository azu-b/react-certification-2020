import styled from 'styled-components';

const Container = styled.main`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Folks Normal';
  font-size: 36px;
  color: #0078ea;
  margin: 25px 0;
`;

const LogInContainer = styled.form`
  margin: 15px;
  padding: 20px 30px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 20px -3px #b3d0ff;

  @media (min-width: 768px) {
    height: 300px;
    padding: 25px 35px;
  }
`;

const InputTitle = styled.label`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Heebo Regular';
  font-size: 18px;
  color: #0034be;
`;

const InputBox = styled.input`
  width: 180px;
  height: 32px;
  font-family: 'Heebo Light';
  font-size: 16px;
  color: black;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

const Button = styled.button`
  font-size: 16px;
  font-family: 'Heebo Medium';
  background-color: #3d4fbf;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Error = styled.h4`
  font-family: 'Heebo Light';
  color: #9c0000;
`;

export { Container, Title, LogInContainer, InputTitle, InputBox, Button, Error };
