import React from 'react';
import {
  Container,
  Title,
  LogInContainer,
  InputTitle,
  InputBox,
  Button,
} from './LogIn.styled';

const LogIn = () => (
  <Container>
    <Title>Log In</Title>
    <LogInContainer>
      <InputTitle>
        <span>User:</span>
        <InputBox name="user" />
      </InputTitle>
      <InputTitle>
        <span>Password:</span>
        <InputBox name="password" type="password" />
      </InputTitle>
      <Button>Log In</Button>
    </LogInContainer>
  </Container>
);

export default LogIn;
